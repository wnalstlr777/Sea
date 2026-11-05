import test from 'node:test';
import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
import {mkdtempSync,rmSync,writeFileSync,readdirSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {Miniflare,convertV4MiniflareOptions} from 'miniflare';

const ORIGIN='https://wnalstlr777.github.io';
class Peer{
  constructor(socket){this.socket=socket;this.queue=[];this.waiters=[];socket.addEventListener('message',e=>{let p;try{p=JSON.parse(e.data);}catch{p=e.data;}const w=this.waiters.find(w=>w.match(p));if(w){this.waiters.splice(this.waiters.indexOf(w),1);clearTimeout(w.timer);w.resolve(p);}else this.queue.push(p);});socket.accept();}
  take(match){if(typeof match==='string'){const type=match;match=p=>p?.type===type;}const i=this.queue.findIndex(match);if(i>=0)return Promise.resolve(this.queue.splice(i,1)[0]);return new Promise((resolve,reject)=>{this.waiters.push({match,resolve,timer:setTimeout(()=>reject(new Error('Packet timeout')),3000)});});}
  close(){try{this.socket.close(1000,'test');}catch{}}
}
async function until(read,match){for(let i=0;i<50;i++){const v=await read();if(match(v))return v;await new Promise(r=>setTimeout(r,20));}throw new Error('Record did not settle');}

test('D1 player records and existing WebSocket synchronization',async t=>{
  const dir=mkdtempSync(join(tmpdir(),'sea-records-')),peers=[];let mf;
  try{
    execFileSync('node_modules/.bin/wrangler',['deploy','--env=','--dry-run','--outdir',dir],{stdio:'pipe',env:{...process.env,WRANGLER_SEND_METRICS:'false',XDG_CONFIG_HOME:join(dir,'config')}});
    // Test-only harness injects server timestamps/failures; it is never deployed.
    writeFileSync(join(dir,'test-entry.js'),`import app,{SeaRoom} from './worker.js';
      export class TestSeaRoom extends SeaRoom{
        async fetch(request){if(new URL(request.url).pathname!=='/__test')return super.fetch(request);
          const body=await request.json();
          if(body.action==='flush'){try{await this.records.flush(body.events,body.now);this.cache.clear();}catch{return Response.json({error:'records unavailable'},{status:503});}}
          if(body.action==='migrate'){this.records.schema=null;await this.records.ready();}
          if(body.action==='fail'){this.goodDb=this.records.db;this.records.db={prepare(){throw new Error('Test outage');}};this.records.schema=null;}
          if(body.action==='recover'){this.records.db=this.goodDb;this.records.schema=null;}
          if(body.action==='outbox')return Response.json(await this.records.readOutbox());
          return Response.json({ok:true});
        }
      }
      export default {fetch(request,env){if(new URL(request.url).pathname==='/__test')return env.ROOM.get(env.ROOM.idFromName('public')).fetch(request);return app.fetch(request,env);}};`);
    const modules=[{type:'ESModule',path:join(dir,'test-entry.js')},{type:'ESModule',path:join(dir,'worker.js')},...readdirSync(dir).filter(n=>/\.(sql|html)$/.test(n)).map(n=>({type:'Text',path:join(dir,n)}))];
    mf=new Miniflare(convertV4MiniflareOptions({modules,modulesRoot:dir,compatibilityDate:'2026-11-02',durableObjects:{ROOM:{className:'TestSeaRoom',useSQLite:true}},d1Databases:{DB:'test-sea-db'},bindings:{ALLOWED_ORIGINS:ORIGIN,ADMIN_PASSWORD:'test-admin-password'},cf:{country:'KR'}}));
    const db=await mf.getD1Database('DB');
    const post=(path,body)=>mf.dispatchFetch('https://sea'+path,{method:'POST',headers:{Origin:ORIGIN,'Content-Type':'application/json'},body:JSON.stringify(body)});
    const fixture=async(events,now)=>assert.equal((await post('/__test',{action:'flush',events,now})).status,200);
    const identity=async body=>{const r=await post('/identity',body);assert.equal(r.status,200);return r.json();};
    const connect=async(identity,session)=>{
      const protocols=['sea-v2',...(identity?[`sea-identity.${identity.token}`]:[]),...(session?[`sea-session.${session}`]:[])];
      const r=await mf.dispatchFetch('https://sea/room',{headers:{Origin:ORIGIN,Upgrade:'websocket','Sec-WebSocket-Protocol':protocols.join(', ')}});
      assert.equal(r.status,101);const peer=new Peer(r.webSocket);peers.push(peer);return {peer,welcome:await peer.take('welcome')};
    };
    let own,first,second;
    const adminHeaders={Authorization:'Basic '+Buffer.from('admin:test-admin-password').toString('base64')};
    await t.test('admin shell has CSP; protected data requires existing secret and same-origin requests',async()=>{
      const page=await mf.dispatchFetch('https://sea/admin');assert.equal(page.status,200);
      const html=await page.text(),nonce=page.headers.get('Content-Security-Policy').match(/nonce-([^']+)/)[1];
      assert.ok(html.includes(`nonce="${nonce}"`));assert.ok(!html.includes('test-admin-password'));
      const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);assert.equal(new Set(ids).size,ids.length);
      assert.equal(page.headers.get('Cache-Control'),'no-store');
      assert.equal((await mf.dispatchFetch('https://sea/admin/data')).status,401);
      assert.equal((await mf.dispatchFetch('https://sea/admin/data',{headers:{Authorization:'Bearer wrong'}})).status,401);
      assert.equal((await mf.dispatchFetch('https://sea/admin/data',{headers:{...adminHeaders,Origin:'https://other.example'}})).status,403);
      assert.equal((await mf.dispatchFetch('https://sea/admin/data?days=999',{headers:adminHeaders})).status,400);
      const empty=await mf.dispatchFetch('https://sea/admin/data?days=7',{headers:adminHeaders});assert.equal(empty.status,200);
      assert.equal(empty.headers.get('Cache-Control'),'no-store');
      const data=await empty.json();assert.equal(data.summary.totalVisitors,0);assert.equal(data.summary.totalSailingSeconds,0);
      assert.equal(data.history.length,7);assert.ok(data.history.every(r=>r.visitors===0&&r.visits===0));assert.deepEqual(data.sailing,[]);assert.deepEqual(data.visits,[]);
    });
    await t.test('additive migration, server credential, persistent browser identity and no raw IP columns',async()=>{
      own=await identity({});assert.match(own.token,/^[a-f0-9]{64}$/);
      const same=await identity(own);assert.equal(same.playerId,own.playerId);
      assert.notEqual((await identity({playerId:own.playerId,token:'0'.repeat(64)})).playerId,own.playerId);
      await post('/__test',{action:'migrate'});await post('/__test',{action:'migrate'});
      const tables=await db.prepare("SELECT name FROM sqlite_master WHERE type='table'").all();
      for(const name of ['players','daily_stats','daily_visitors','visit_sessions'])assert.ok(tables.results.some(t=>t.name===name));
      const row=await db.prepare('SELECT * FROM players WHERE player_id=?').bind(own.playerId).first();assert.notEqual(row.credential_hash,own.token);assert.equal(row.country_code,'KR');assert.ok(!Object.keys(row).some(k=>/ip_address|raw_ip/.test(k)));
    });
    await t.test('multiple tabs count sessions but deduplicate visitor and current player; reconnect resumes session',async()=>{
      first=await connect(own);second=await connect(own);
      await until(()=>db.prepare('SELECT visit_count FROM players WHERE player_id=?').bind(own.playerId).first(),r=>r.visit_count===2);
      const stats=await (await mf.dispatchFetch('https://sea/stats')).json();assert.equal(stats.todayVisits,2);assert.equal(stats.todayUniqueVisitors,1);assert.equal(stats.currentConnections,2);assert.equal(stats.currentPlayers,1);
      const oldSession=first.welcome.sessionId;first.peer.close();await second.peer.take('leave');
      first=await connect(own,oldSession);assert.equal(first.welcome.sessionId,oldSession);
      await fixture([],Date.now());assert.equal((await db.prepare('SELECT visit_count FROM players WHERE player_id=?').bind(own.playerId).first()).visit_count,2);
      const fresh=await connect(own,crypto.randomUUID());assert.notEqual(fresh.welcome.sessionId,oldSession);fresh.peer.close();
    });
    await t.test('position, animation, emote, heartbeat and invalid movement rules remain intact',async()=>{
      const player=first.welcome.players.find(p=>p.id===first.welcome.you);
      const state={type:'state',seq:0,x:player.x+.2,y:player.y,z:player.z,rotation:.3,moving:true,sitting:false,lying:false,jump:true,jumpHeight:1,verticalOffset:1,inWater:false,returning:false};
      first.peer.socket.send(JSON.stringify(state));const update=await second.peer.take(p=>p?.type==='state'&&p.player.id===player.id);assert.equal(update.player.x,state.x);assert.equal(update.player.jump,true);
      first.peer.socket.send(JSON.stringify({...state,seq:1,x:999}));assert.equal((await first.peer.take('correction')).player.x,state.x);
      first.peer.socket.send(JSON.stringify({type:'emote',icon:'👋'}));assert.equal((await second.peer.take('emote')).icon,'👋');
      first.peer.socket.send('ping');assert.equal(await first.peer.take(p=>p==='pong'),'pong');
      first.peer.close();second.peer.close();await fixture([],Date.now());
    });
    await t.test('overlap union, retry idempotence, KST day boundary and stable TOP 10',async()=>{
      const visitor=await identity({}),playerId=visitor.playerId,base=Date.UTC(2026,10,5,14,59,0);
      const event=(sessionId,from,to,open=false)=>({sessionId,playerId,openedAt:from,checkpointAt:from,from,to,open,country:'UNKNOWN',closed:true});
      const a=crypto.randomUUID(),b=crypto.randomUUID(),c=crypto.randomUUID();
      const events=[event(a,base,base+60000,true),event(b,base+30000,base+90000,true),event(c,base+120000,base+180000,true)];
      await fixture(events,base+180000);await fixture(events,base+180000);
      const player=await db.prepare('SELECT * FROM players WHERE player_id=?').bind(playerId).first();assert.equal(player.sailing_ms,150000);assert.equal(player.visit_count,3);
      const visitors=await db.prepare('SELECT date_kst FROM daily_visitors WHERE player_id=? ORDER BY date_kst').bind(playerId).all();assert.deepEqual(visitors.results.map(r=>r.date_kst),['2026-11-05','2026-11-06']);
      const sailing=await (await mf.dispatchFetch('https://sea/rankings?kind=sailing')).json();assert.equal(sailing.players[0].sailingSeconds,150);assert.ok(sailing.players.length<=10);assert.ok(!('player_id' in sailing.players[0]));
      const visits=await (await mf.dispatchFetch('https://sea/rankings?kind=visits')).json();assert.ok(visits.players[0].visits>=3);
      assert.equal((await mf.dispatchFetch('https://sea/rankings?kind=arbitrary')).status,400);
      const before=await db.prepare('SELECT SUM(total_visits) AS n FROM daily_stats').first();
      // Retention drops detailed sessions only, not player totals or daily uniqueness.
      await fixture([],base+8*86400000);assert.equal((await db.prepare('SELECT SUM(total_visits) AS n FROM daily_stats').first()).n,before.n);
      assert.equal((await db.prepare('SELECT sailing_ms FROM players WHERE player_id=?').bind(playerId).first()).sailing_ms,150000);
    });
    await t.test('admin aggregates match real D1 values and fill 7/30 KST dates without changing visits',async()=>{
      const expected=await db.prepare('SELECT COUNT(*) AS visitors,CAST(SUM(sailing_ms)/1000 AS INTEGER) AS seconds FROM players WHERE visit_count>0').first();
      const before=await db.prepare('SELECT SUM(visit_count) AS visits FROM players').first();
      for(const days of [7,30]){
        const response=await mf.dispatchFetch('https://sea/admin/data?days='+days,{headers:adminHeaders});assert.equal(response.status,200);
        const data=await response.json();assert.equal(data.summary.totalVisitors,expected.visitors);assert.equal(data.summary.totalSailingSeconds,expected.seconds);
        assert.equal(data.history.length,days);assert.equal(new Set(data.history.map(r=>r.date)).size,days);
        assert.equal(data.history.at(-1).date,data.summary.dateKst);assert.equal(data.history.at(-1).visits,data.summary.todayVisits);
        assert.ok(data.sailing.length<=10&&data.visits.length<=10);assert.ok(data.history.some(r=>r.visitors===0));
      }
      assert.equal((await db.prepare('SELECT SUM(visit_count) AS visits FROM players').first()).visits,before.visits);
    });
    await t.test('outage journals pending time, protects game connections, and rate limits data APIs',async()=>{
      for(let i=0;i<32;i++)await mf.dispatchFetch('https://sea/rankings?kind=visits');
      assert.equal((await mf.dispatchFetch('https://sea/rankings')).status,429);
      await post('/__test',{action:'fail'});
      const anonymous=await connect();assert.ok(anonymous.welcome.you);
      const brokenCredential=await connect(own);assert.ok(brokenCredential.welcome.you);assert.equal(brokenCredential.welcome.sessionId,undefined);
      assert.equal((await mf.dispatchFetch('https://sea/health')).status,200);
      assert.equal((await post('/identity',{})).status,503);
      const now=Date.now()+2*86400000,sessionId=crypto.randomUUID();
      const pending=Array.from({length:105},(_,i)=>({playerId:own.playerId,sessionId,openedAt:now,checkpointAt:now,from:now+i*2000,to:now+i*2000+1000,open:i===0,closed:true,country:'KR'}));
      const before=await db.prepare('SELECT sailing_ms,visit_count FROM players WHERE player_id=?').bind(own.playerId).first();
      assert.equal((await post('/__test',{action:'flush',events:pending,now:now+210000})).status,503);
      assert.equal((await (await post('/__test',{action:'outbox'})).json()).length,105);
      await post('/__test',{action:'recover'});await fixture([],now+60000);await fixture([],now+60000);
      const after=await db.prepare('SELECT sailing_ms,visit_count FROM players WHERE player_id=?').bind(own.playerId).first();
      assert.equal(after.sailing_ms-before.sailing_ms,105000);assert.equal(after.visit_count-before.visit_count,1);
    });
  }finally{for(const peer of peers)peer.close();await mf?.dispose();rmSync(dir,{recursive:true,force:true});}
});
