import migration from './migrations/0002_aquaculture.sql';
import {PENS,SCHOOLS,FISH,GROW_MS,FEED_MS,INACTIVE_MS,COLLECT_MS,RESPAWN_MS,schoolPosition,tubeColorFor} from '../src/aquaculture-data.js';

export class AquaError extends Error{constructor(message){super(message);this.name='AquaError';}}
const requireValue=(condition,message)=>{if(!condition)throw new AquaError(message);};
export function drawFish(){
 const limit=Math.floor(4294967296/10000)*10000;let n;
 do{n=crypto.getRandomValues(new Uint32Array(1))[0];}while(n>=limit);
 n%=10000;for(const fish of FISH){if(n<fish.weight)return fish.id;n-=fish.weight;}
 throw new Error('Invalid fish weights');
}
export class Aquaculture{
 constructor(ctx,records){this.ctx=ctx;this.records=records;this.db=records.db;this.schema=null;this.status='pending';this.pending=Promise.resolve();}
 run(task){const p=this.pending.then(task);this.pending=p.catch(()=>{});return p;}
 async ready(){
  try{
   await this.records.ready();
   if(!this.schema)this.schema=this.db.batch(migration.split('\n-- statement-breakpoint\n').map(s=>this.db.prepare(s))).catch(e=>{this.schema=null;throw e;});
   await this.schema;this.status='ready';
  }catch(error){this.status='unavailable';throw error;}
 }
 sql(sql,...values){return this.db.prepare(sql).bind(...values);}
 async profile(pid){await this.ready();await this.sql('INSERT OR IGNORE INTO aqua_profiles(player_id,tube_color) VALUES(?,?)',pid,tubeColorFor(pid)).run();return this.sql('SELECT * FROM aqua_profiles WHERE player_id=?',pid).first();}
 async completionStatements(cycle,now,force=false){
  if(!cycle||cycle.status!=='active'||(!force&&now<cycle.completes_at))return [];
  const {results:feeds}=await this.sql('SELECT * FROM aqua_feeds WHERE cycle_id=? ORDER BY slot',cycle.cycle_id).all();
  const queries=[this.sql("UPDATE aqua_cycles SET status='complete',completed_at=?,completes_at=? WHERE cycle_id=? AND status='active'",now,force?now:cycle.completes_at,cycle.cycle_id)];
  for(const f of feeds)queries.push(this.sql('INSERT OR IGNORE INTO aqua_rewards(cycle_id,slot,player_id,fish_id,earned_at) VALUES(?,?,?,?,?)',cycle.cycle_id,f.slot,f.player_id,drawFish(),now));
  return queries;
 }
 async finalize(cycle,now,force=false){const queries=await this.completionStatements(cycle,now,force);if(queries.length)await this.db.batch(queries);}
 async tickNow(now=Date.now()){
  await this.ready();
  const {results}=await this.sql("SELECT * FROM aqua_cycles WHERE status='active' AND completes_at<=?",now).all();
  for(const cycle of results)await this.finalize(cycle,now);
  const removed=await this.sql('DELETE FROM aqua_members WHERE active_at<=?',now-INACTIVE_MS).run();return results.length>0||removed.meta.changes>0;
 }
 async nextAlarm(){
  if(!this.schema)return null;
  const row=await this.sql("SELECT MIN(t) AS t FROM (SELECT MIN(completes_at) AS t FROM aqua_cycles WHERE status='active' UNION ALL SELECT MIN(active_at)+? AS t FROM aqua_members)",INACTIVE_MS).first();
  return row?.t?Math.max(Date.now()+1000,row.t):null;
 }
 async schedule(){const next=await this.nextAlarm(),old=await this.ctx.storage.getAlarm();if(next&&(!old||old>next))await this.ctx.storage.setAlarm(next);}
 async snapshotNow(pid,now=Date.now(),admin=false){
  await this.tickNow(now);let profile=pid?await this.profile(pid):null;
  const [{results:members},{results:cycles},{results:feeds},{results:schools}]=await this.db.batch([
   this.sql('SELECT m.*,p.nickname FROM aqua_members m JOIN players p ON p.player_id=m.player_id ORDER BY joined_at,player_id'),
   this.sql("SELECT * FROM aqua_cycles WHERE status='active'"),
   this.sql("SELECT f.*,p.nickname FROM aqua_feeds f JOIN players p ON p.player_id=f.player_id JOIN aqua_cycles c ON c.cycle_id=f.cycle_id WHERE c.status='active' ORDER BY f.slot"),
   this.sql('SELECT * FROM aqua_schools')
  ]);
  const pens=PENS.map(p=>{const cycle=cycles.find(c=>c.pen_id===p.id);return {...p,members:members.filter(m=>m.pen_id===p.id).map(m=>({nickname:m.nickname,mine:m.player_id===pid,...(admin?{playerId:m.player_id,activeAt:m.active_at}:{})})),cycle:cycle?{id:cycle.cycle_id,startedAt:cycle.started_at,completesAt:cycle.completes_at,feeds:feeds.filter(f=>f.cycle_id===cycle.cycle_id).map(f=>({nickname:f.nickname,at:f.fed_at,mine:f.player_id===pid,...(admin?{playerId:f.player_id}:{})}))}:null};});
  let personal=null;
  if(profile){
   const [{results:inventory},pending,lastFeed]=await Promise.all([
    this.sql('SELECT fish_id AS fishId,quantity,first_obtained_at AS firstObtainedAt FROM aqua_inventory WHERE player_id=? ORDER BY first_obtained_at',pid).all(),
    this.sql('SELECT COUNT(*) AS count FROM aqua_rewards WHERE player_id=? AND claimed_at IS NULL',pid).first(),
    this.sql('SELECT MAX(fed_at) AS at FROM aqua_feeds WHERE player_id=?',pid).first()
   ]);
   personal={fry:profile.fry,tubeColor:profile.tube_color,tutorial:profile.tutorial,penId:members.find(m=>m.player_id===pid)?.pen_id||null,nextFeedAt:lastFeed?.at?lastFeed.at+FEED_MS:0,pending:pending.count,inventory};
  }
  const result={serverNow:now,pens,schools:schools.map(s=>({id:s.school_id,availableAt:s.available_at})),personal};
  if(admin){
   result.players=(await this.sql('SELECT p.player_id AS id,p.nickname,COALESCE(a.fry,0) AS fry FROM players p LEFT JOIN aqua_profiles a ON a.player_id=p.player_id WHERE p.visit_count>0 OR a.player_id IS NOT NULL ORDER BY p.last_seen_at DESC LIMIT 100').all()).results;
   result.history=(await this.sql('SELECT c.pen_id AS pen,c.started_at,c.completed_at,f.fed_at,p.nickname FROM aqua_feeds f JOIN aqua_cycles c ON c.cycle_id=f.cycle_id JOIN players p ON p.player_id=f.player_id ORDER BY f.fed_at DESC LIMIT 30').all()).results;
  }
  await this.schedule();return result;
 }
 snapshot(pid){return this.run(()=>this.snapshotNow(pid));}
 async prior(actor,id,action){
  requireValue(typeof id==='string'&&/^[a-f0-9-]{36}$/.test(id),'요청 식별값이 올바르지 않습니다.');
  const row=await this.sql('SELECT action,result FROM aqua_requests WHERE actor=? AND request_id=?',actor,id).first();
  if(row){requireValue(row.action===action,'다른 행동에 사용된 요청입니다.');return JSON.parse(row.result);}return null;
 }
 requestStatement(actor,id,action,result,now){return this.sql('INSERT INTO aqua_requests(actor,request_id,action,result,created_at) VALUES(?,?,?,?,?)',actor,id,action,JSON.stringify(result),now);}
 water(player){requireValue(player?.inWater&&!player.returning&&!player.jump&&player.verticalOffset< -8,'튜브를 타고 수면에 내려온 뒤 시도해 주세요.');}
 near(player,target,distance){requireValue(target&&Math.hypot(player.x-target.x,player.z-target.z)<=distance,'조금 더 가까이 다가가 주세요.');}
 action(pid,player,action,data,id,now=Date.now()){
  return this.run(async()=>{
   await this.ready();const old=await this.prior(pid,id,action);if(old)return old;
   await this.tickNow(now);const profile=await this.profile(pid),queries=[],result={ok:true,action};
   const member=await this.sql('SELECT * FROM aqua_members WHERE player_id=?',pid).first();
   if(action==='observe'){
    this.water(player);let stage=profile.tutorial;
    if(stage===0)stage=1;
    else if(stage===1&&SCHOOLS.some(s=>{const p=schoolPosition(s,now);return Math.hypot(player.x-p.x,player.z-p.z)<=4;}))stage=2;
    queries.push(this.sql('UPDATE aqua_profiles SET tutorial=MAX(tutorial,?) WHERE player_id=?',stage,pid));
   }else if(action==='tutorialDone'){
    requireValue(profile.tutorial>=5,'아직 튜토리얼 진행 중입니다.');queries.push(this.sql('UPDATE aqua_profiles SET tutorial=6 WHERE player_id=?',pid));
   }else if(action==='collectStart'){
    this.water(player);requireValue(profile.fry<5,'치어는 최대 5마리까지 보유할 수 있습니다.');
    const school=SCHOOLS.find(s=>s.id===data.schoolId);this.near(player,school&&schoolPosition(school,now),2.15);
    const row=await this.sql('SELECT available_at FROM aqua_schools WHERE school_id=?',school.id).first();requireValue(row.available_at<=now,'치어 군집이 다시 모이는 중입니다.');
    result.challengeId=crypto.randomUUID();result.startedAt=now;result.endsAt=now+COLLECT_MS;
    queries.push(this.sql('INSERT INTO aqua_collects(player_id,challenge_id,school_id,started_at,expires_at) VALUES(?,?,?,?,?) ON CONFLICT(player_id) DO UPDATE SET challenge_id=excluded.challenge_id,school_id=excluded.school_id,started_at=excluded.started_at,expires_at=excluded.expires_at',pid,result.challengeId,school.id,now,now+15000));
   }else if(action==='collectFinish'){
    this.water(player);requireValue(profile.fry<5,'치어는 최대 5마리까지 보유할 수 있습니다.');
    const c=await this.sql('SELECT * FROM aqua_collects WHERE player_id=?',pid).first();requireValue(c&&c.challenge_id===data.challengeId&&now>=c.started_at+COLLECT_MS&&now<=c.expires_at,'채집 시간이 만료됐거나 아직 채집 중입니다.');
    const school=SCHOOLS.find(s=>s.id===c.school_id);this.near(player,schoolPosition(school,now),2.15);
    const row=await this.sql('SELECT available_at FROM aqua_schools WHERE school_id=?',school.id).first();requireValue(row.available_at<=now,'다른 항해자가 먼저 채집했습니다.');
    queries.push(this.sql('UPDATE aqua_schools SET available_at=? WHERE school_id=?',now+RESPAWN_MS,school.id),this.sql('UPDATE aqua_profiles SET fry=fry+1,tutorial=MAX(tutorial,3) WHERE player_id=?',pid),this.sql('DELETE FROM aqua_collects WHERE player_id=?',pid));result.schoolId=school.id;
   }else if(action==='join'){
    const pen=PENS.find(p=>p.id===data.penId);this.water(player);this.near(player,pen,5.5);
    requireValue(!member,'이미 가두리에 참여하고 있습니다.');
    requireValue((await this.sql('SELECT COUNT(*) AS count FROM aqua_members WHERE pen_id=?',pen.id).first()).count<3,'참여 인원이 가득 찼습니다.');
    queries.push(this.sql('INSERT INTO aqua_members(player_id,pen_id,joined_at,active_at) VALUES(?,?,?,?)',pid,pen.id,now,now));
   }else if(action==='leave'){
    requireValue(member,'참여 중인 가두리가 없습니다.');queries.push(this.sql('DELETE FROM aqua_members WHERE player_id=?',pid));
   }else if(action==='release'||action==='feed'){
    requireValue(member&&member.pen_id===data.penId,'이 가두리에 먼저 참여해 주세요.');
    const pen=PENS.find(p=>p.id===member.pen_id);this.water(player);this.near(player,pen,5.5);
    const cycle=await this.sql("SELECT * FROM aqua_cycles WHERE pen_id=? AND status='active'",pen.id).first();
    if(action==='release'){
     requireValue(!cycle,'이미 양식이 진행 중입니다.');requireValue(profile.fry>0,'먼저 치어를 채집해 주세요.');
     result.cycleId=crypto.randomUUID();
     queries.push(this.sql("INSERT INTO aqua_cycles(cycle_id,pen_id,released_by,started_at,completes_at,status) VALUES(?,?,?,?,?,'active')",result.cycleId,pen.id,pid,now,now+GROW_MS),this.sql('UPDATE aqua_profiles SET fry=fry-1,tutorial=MAX(tutorial,4) WHERE player_id=?',pid));
    }else{
     requireValue(cycle,'먼저 치어를 방류해 주세요.');
     const count=(await this.sql('SELECT COUNT(*) AS n FROM aqua_feeds WHERE cycle_id=?',cycle.cycle_id).first()).n;
     requireValue(count<3,'먹이를 모두 주었습니다.');
     const last=await this.sql('SELECT MAX(fed_at) AS at FROM aqua_feeds WHERE player_id=?',pid).first();requireValue(!last.at||now>=last.at+FEED_MS,'같은 항해자는 3시간마다 먹이를 줄 수 있습니다.');
     queries.push(this.sql('INSERT INTO aqua_feeds(cycle_id,slot,player_id,fed_at) VALUES(?,?,?,?)',cycle.cycle_id,count+1,pid,now),this.sql('UPDATE aqua_profiles SET tutorial=MAX(tutorial,5) WHERE player_id=?',pid));
    }
    queries.push(this.sql('UPDATE aqua_members SET active_at=? WHERE player_id=?',now,pid));
   }else if(action==='harvest'){
    const {results:rewards}=await this.sql('SELECT * FROM aqua_rewards WHERE player_id=? AND claimed_at IS NULL ORDER BY earned_at,cycle_id,slot LIMIT 20',pid).all();
    requireValue(rewards.length>0,'아직 수확할 보상이 없습니다.');result.fish=rewards.map(r=>r.fish_id);
    for(const r of rewards)queries.push(this.sql('INSERT INTO aqua_inventory(player_id,fish_id,quantity,first_obtained_at,last_obtained_at) SELECT player_id,fish_id,1,?,? FROM aqua_rewards WHERE cycle_id=? AND slot=? AND player_id=? AND claimed_at IS NULL ON CONFLICT(player_id,fish_id) DO UPDATE SET quantity=quantity+1,last_obtained_at=excluded.last_obtained_at',now,now,r.cycle_id,r.slot,pid),this.sql('UPDATE aqua_rewards SET claimed_at=? WHERE cycle_id=? AND slot=? AND player_id=? AND claimed_at IS NULL',now,r.cycle_id,r.slot,pid));
    if(member)queries.push(this.sql('UPDATE aqua_members SET active_at=? WHERE player_id=?',now,pid));
   }else throw new AquaError('지원하지 않는 행동입니다.');
   queries.push(this.requestStatement(pid,id,action,result,now));
   // D1 batch rolls every item/cycle/reward write back together on failure.
   await this.db.batch(queries);await this.schedule();return result;
  });
 }
 admin(action,data,id,now=Date.now()){
  return this.run(async()=>{
   await this.ready();const old=await this.prior('admin',id,action);if(old)return old;
   await this.tickNow(now);const result={ok:true,action};
   if(action==='grant'){
    requireValue(typeof data.playerId==='string'&&await this.sql('SELECT player_id FROM players WHERE player_id=?',data.playerId).first(),'플레이어를 선택해 주세요.');
    requireValue(Number.isInteger(data.amount)&&data.amount>=1&&data.amount<=5,'지급 수량은 1~5마리입니다.');
    await this.profile(data.playerId);
    await this.db.batch([this.sql('UPDATE aqua_profiles SET fry=MIN(5,fry+?) WHERE player_id=?',data.amount,data.playerId),this.requestStatement('admin',id,action,result,now)]);
   }else if(action==='finish'||action==='reset'){
    requireValue(PENS.some(p=>p.id===data.penId),'가두리를 선택해 주세요.');
    const cycle=await this.sql("SELECT * FROM aqua_cycles WHERE pen_id=? AND status='active'",data.penId).first();
    // Allocate existing contributions before freeing a test pen; pending rewards survive resets.
    const queries=await this.completionStatements(cycle,now,true);queries.push(this.requestStatement('admin',id,action,result,now));
    if(action==='reset')queries.push(this.sql('DELETE FROM aqua_members WHERE pen_id=?',data.penId));
    await this.db.batch(queries);
   }else throw new AquaError('지원하지 않는 관리자 행동입니다.');
   await this.schedule();return result;
  });
 }
}
