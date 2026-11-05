import migration from './migrations/0001_player_records.sql';

export const CHECKPOINT_MS=60_000,RESUME_MS=120_000,STALE_MS=75_000;
const RETENTION_MS=7*86400_000;
export const kstDate=now=>new Date(now+9*3600_000).toISOString().slice(0,10);
export const countryCode=value=>typeof value==='string'&&/^[A-Z]{2}$/.test(value)&&value!=='XX'?value:'UNKNOWN';
export async function credentialHash(token){
  const bytes=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(token));
  return Array.from(new Uint8Array(bytes),b=>b.toString(16).padStart(2,'0')).join('');
}
export function socketCredentials(request){
  const protocols=(request.headers.get('Sec-WebSocket-Protocol')||'').split(',').map(v=>v.trim());
  return {protocol:protocols.includes('sea-v2')?'sea-v2':null,
    token:protocols.find(p=>/^sea-identity\.[a-f0-9]{64}$/.test(p))?.slice(13),
    session:protocols.find(p=>/^sea-session\.[a-f0-9-]{36}$/.test(p))?.slice(12)};
}
export function mergeIntervals(events){
  const groups=new Map();
  for(const e of events){
    if(e.to<=e.from)continue;
    const list=groups.get(e.playerId)||[];list.push([e.from,e.to]);groups.set(e.playerId,list);
  }
  const result=[];
  for(const [playerId,list] of groups){
    list.sort((a,b)=>a[0]-b[0]);const merged=[];
    for(const [from,to] of list){const last=merged.at(-1);if(last&&from<=last[1])last[1]=Math.max(last[1],to);else merged.push([from,to]);}
    for(const [from,to] of merged)result.push({playerId,from,to});
  }
  return result;
}
function compactEvents(events){
  const groups=new Map();
  for(const e of events){const list=groups.get(e.sessionId)||[];list.push(e);groups.set(e.sessionId,list);}
  const compact=[];
  for(const list of groups.values()){
    list.sort((a,b)=>a.from-b.from||a.to-b.to);let last=null;
    for(const e of list){
      if(last&&e.from<=last.to){
        if(e.to>=last.to){last.closed=e.closed;last.country=e.country;}
        last.to=Math.max(last.to,e.to);last.open=last.open||e.open;
      }else{last={...e};compact.push(last);}
    }
  }
  return compact;
}

export class PlayerRecords {
  constructor(ctx,env,live){this.ctx=ctx;this.db=env.DB;this.live=live;this.pending=Promise.resolve();this.schema=null;}
  async ready(){
    if(!this.db)throw new Error('D1 not configured');
    if(!this.schema){
      this.schema=(async()=>{
        // Inspect existing tables before any DDL. Never reinterpret incompatible user data.
        const required={players:['player_id','credential_hash','nickname','country_code','first_seen_at','last_seen_at','visit_count','sailing_ms','accounted_until'],
          daily_stats:['date_kst','total_visits','unique_visitors'],daily_visitors:['date_kst','player_id'],
          visit_sessions:['session_id','player_id','date_kst','started_at','last_seen_at','ended_at']};
        for(const [table,columns] of Object.entries(required)){
          const {results}=await this.db.prepare(`PRAGMA table_info(${table})`).all();
          if(results.length&&columns.some(c=>!results.some(r=>r.name===c)))throw new Error('D1 schema conflict');
        }
        const statements=migration.split('\n-- statement-breakpoint\n').map(sql=>this.db.prepare(sql));
        await this.db.batch(statements);
      })().catch(error=>{this.schema=null;throw error;});
    }
    return this.schema;
  }
  async identity(body,nickname,country,now=Date.now()){
    await this.ready();
    if(typeof body.token==='string'&&/^[a-f0-9]{64}$/.test(body.token)){
      const row=await this.verify(body.token);
      if(row&&row.player_id===body.playerId)return {playerId:row.player_id,token:body.token,nickname:row.nickname};
    }
    const token=crypto.randomUUID().replaceAll('-','')+crypto.randomUUID().replaceAll('-','');
    const playerId=crypto.randomUUID();
    await this.db.prepare('INSERT INTO players(player_id,credential_hash,nickname,country_code,first_seen_at,last_seen_at) VALUES(?,?,?,?,?,?)')
      .bind(playerId,await credentialHash(token),nickname,country,now,now).run();
    return {playerId,token,nickname};
  }
  async verify(token){
    if(!token)return null;await this.ready();
    return this.db.prepare('SELECT player_id,nickname FROM players WHERE credential_hash=?').bind(await credentialHash(token)).first();
  }
  async resume(playerId,requested,now){
    if(requested){
      const row=await this.db.prepare('SELECT session_id,started_at,last_seen_at,ended_at FROM visit_sessions WHERE session_id=? AND player_id=?').bind(requested,playerId).first();
      if(row&&now-Math.max(row.last_seen_at,row.ended_at||0)<=RESUME_MS)return {sessionId:row.session_id,openedAt:row.started_at};
      const ws=this.live().find(ws=>{const a=ws.deserializeAttachment()?.tracking;return a?.playerId===playerId&&a.sessionId===requested;});
      if(ws){const a=ws.deserializeAttachment().tracking;return {sessionId:a.sessionId,openedAt:a.openedAt};}
    }
    return {sessionId:crypto.randomUUID(),openedAt:now};
  }
  queue(task){const next=this.pending.then(task);this.pending=next.catch(()=>{});return next;}
  async readOutbox(){return [...(await this.ctx.storage.list({prefix:'records-outbox:'})).values()].flat();}
  async hasPending(){return (await this.ctx.storage.list({prefix:'records-outbox:',limit:1})).size>0;}
  async saveOutbox(events){
    const old=[...(await this.ctx.storage.list({prefix:'records-outbox:'})).keys()],chunks={};
    for(let i=0;i<events.length;i+=100)chunks['records-outbox:'+String(i/100).padStart(8,'0')]=events.slice(i,i+100);
    await this.ctx.storage.transaction(async tx=>{
      if(Object.keys(chunks).length)await tx.put(chunks);
      const stale=old.filter(key=>!(key in chunks));if(stale.length)await tx.delete(stale);
    });
  }
  async schedule(){if(!await this.ctx.storage.getAlarm())await this.ctx.storage.setAlarm(Date.now()+CHECKPOINT_MS);}
  open(tracking){return this.flush([{...tracking,from:tracking.checkpointAt,to:tracking.checkpointAt,open:true}]);}
  flush(extra=[],now=Date.now()){
    return this.queue(async()=>{
      let events=await this.readOutbox();
      events.push(...extra);
      const checkpoints=[];
      for(const ws of this.live()){
        const a=ws.deserializeAttachment(),t=a?.tracking;if(!t)continue;
        const heartbeat=this.ctx.getWebSocketAutoResponseTimestamp(ws)?.getTime()||0;
        const lastActivity=Math.max(a.lastActivity||t.checkpointAt,heartbeat);
        const end=Math.max(t.checkpointAt,Math.min(now,lastActivity+STALE_MS));
        events.push({...t,from:t.checkpointAt,to:end});checkpoints.push({ws,t,end});
      }
      // Journal first, then advance attachments. A D1 retry cannot lose or double credit time.
      events=compactEvents(events);await this.saveOutbox(events);
      for(const {ws,t,end} of checkpoints){
        const current=ws.deserializeAttachment();
        if(current?.tracking?.sessionId===t.sessionId){current.tracking.checkpointAt=end;ws.serializeAttachment(current);}
      }
      await this.schedule();
      if(!events.length)return;
      await this.ready();
      const statements=[];
      const sessions=new Map();
      for(const e of events){
        if(e.open){
          statements.push(this.db.prepare('INSERT OR IGNORE INTO visit_sessions(session_id,player_id,date_kst,started_at,last_seen_at) VALUES(?,?,?,?,?)')
            .bind(e.sessionId,e.playerId,kstDate(e.openedAt),e.openedAt,e.to));
          statements.push(this.db.prepare('UPDATE players SET country_code=?,last_seen_at=MAX(last_seen_at,?) WHERE player_id=?').bind(e.country,e.to,e.playerId));
        }
        const old=sessions.get(e.sessionId);
        if(!old||e.to>=old.to)sessions.set(e.sessionId,e);
      }
      for(const {playerId,from,to} of mergeIntervals(events))statements.push(this.db.prepare(`UPDATE players SET
        sailing_ms=sailing_ms+MAX(0,?-MAX(?,accounted_until)),accounted_until=MAX(accounted_until,?),
        last_seen_at=MAX(last_seen_at,?) WHERE player_id=?`).bind(to,from,to,to,playerId));
      for(const e of sessions.values())statements.push(this.db.prepare(`UPDATE visit_sessions SET last_seen_at=MAX(last_seen_at,?),
        ended_at=CASE WHEN ?>=last_seen_at THEN ? ELSE ended_at END WHERE session_id=? AND player_id=?`)
        .bind(e.to,e.to,e.closed?e.to:null,e.sessionId,e.playerId));
      // Keep each request bounded. Every statement is idempotent if a later batch fails.
      for(let i=0;i<statements.length;i+=40)await this.db.batch(statements.slice(i,i+40));
      await this.saveOutbox([]);
      const lastCleanup=await this.ctx.storage.get('records-cleanup')||0;
      if(now-lastCleanup>86400_000){
        await this.db.prepare('DELETE FROM visit_sessions WHERE last_seen_at<?').bind(now-RETENTION_MS).run();
        await this.ctx.storage.put('records-cleanup',now);
      }
    });
  }
  async stats(now=Date.now()){
    await this.ready();const date=kstDate(now);
    const today=await this.db.prepare('SELECT total_visits,unique_visitors FROM daily_stats WHERE date_kst=?').bind(date).first();
    const all=await this.db.prepare('SELECT COALESCE(SUM(total_visits),0) AS total FROM daily_stats').first();
    return {dateKst:date,todayVisits:today?.total_visits||0,todayUniqueVisitors:today?.unique_visitors||0,totalVisits:all.total};
  }
  async rankings(kind){
    await this.ready();const order=kind==='visits'?'visit_count':'sailing_ms';
    const {results}=await this.db.prepare(`SELECT nickname,country_code AS countryCode,CAST(sailing_ms/1000 AS INTEGER) AS sailingSeconds,
      visit_count AS visits FROM players WHERE visit_count>0 ORDER BY ${order} DESC,first_seen_at ASC,player_id ASC LIMIT 10`).all();
    return {kind,players:results};
  }
  async adminDashboard(days,now=Date.now()){
    await this.ready();
    const today=kstDate(now),start=kstDate(now-(days-1)*86400_000);
    const [stats,sailing,visits,extra]=await Promise.all([
      this.stats(now),this.rankings('sailing'),this.rankings('visits'),
      this.db.batch([
        this.db.prepare('SELECT COUNT(*) AS totalVisitors,CAST(COALESCE(SUM(sailing_ms),0)/1000 AS INTEGER) AS totalSailingSeconds FROM players WHERE visit_count>0'),
        this.db.prepare('SELECT date_kst AS date,total_visits AS visits,unique_visitors AS visitors FROM daily_stats WHERE date_kst BETWEEN ? AND ? ORDER BY date_kst').bind(start,today)
      ])
    ]);
    const byDate=new Map(extra[1].results.map(row=>[row.date,row]));
    const history=Array.from({length:days},(_,i)=>{
      const date=kstDate(now-(days-1-i)*86400_000);
      return byDate.get(date)||{date,visits:0,visitors:0};
    });
    return {generatedAt:new Date(now).toISOString(),days,summary:{...stats,...extra[0].results[0]},history,
      sailing:sailing.players,visits:visits.players};
  }
}
