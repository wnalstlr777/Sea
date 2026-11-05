import test from 'node:test';
import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
import {mkdtempSync,rmSync,writeFileSync,readdirSync} from 'node:fs';
import {tmpdir} from 'node:os';import {join} from 'node:path';
import {Miniflare,convertV4MiniflareOptions} from 'miniflare';
import {PENS,SCHOOLS,schoolPosition,GROW_MS,FEED_MS,INACTIVE_MS,FISH,tubeColorFor} from '../../src/aquaculture-data.js';
const ORIGIN='https://wnalstlr777.github.io';

test('persistent cooperative aquaculture: concurrency, clocks, rewards and rollback',async t=>{
 const dir=mkdtempSync(join(tmpdir(),'sea-aqua-'));let mf;
 try{
  execFileSync('node_modules/.bin/wrangler',['deploy','--env=','--dry-run','--outdir',dir],{stdio:'pipe',env:{...process.env,WRANGLER_SEND_METRICS:'false',XDG_CONFIG_HOME:join(dir,'config')}});
  writeFileSync(join(dir,'aqua-entry.js'),`import app,{SeaRoom} from './worker.js';
  export class AquaTestRoom extends SeaRoom{
   async fetch(request){if(new URL(request.url).pathname!=='/__aqua')return super.fetch(request);
    const b=await request.json();
    try{
     if(b.kind==='snapshot')return Response.json(await this.aquaculture.run(()=>this.aquaculture.snapshotNow(b.pid,b.now)));
     const original=this.aquaculture.db;
     if(b.fail)this.aquaculture.db={prepare:original.prepare.bind(original),batch:queries=>original.batch([...queries,original.prepare("INSERT INTO aqua_profiles(player_id,fry,tube_color) VALUES('invalid',6,0)")])};
     if(b.ambiguous)this.aquaculture.db={prepare:original.prepare.bind(original),async batch(queries){await original.batch(queries);throw new Error('Lost response after commit');}};
     try{return Response.json(await this.aquaculture.action(b.pid,b.player,b.action,b.data||{},b.id,b.now));}finally{this.aquaculture.db=original;}
    }catch(e){return Response.json({error:e.message},{status:400});}
   }
  }
  export default {fetch(request,env){if(new URL(request.url).pathname==='/__aqua')return env.ROOM.get(env.ROOM.idFromName('public')).fetch(request);return app.fetch(request,env);}};`);
  const modules=[{type:'ESModule',path:join(dir,'aqua-entry.js')},{type:'ESModule',path:join(dir,'worker.js')},...readdirSync(dir).filter(n=>/\.(sql|html)$/.test(n)).map(n=>({type:'Text',path:join(dir,n)}))];
  mf=new Miniflare(convertV4MiniflareOptions({modules,modulesRoot:dir,compatibilityDate:'2026-11-02',durableObjects:{ROOM:{className:'AquaTestRoom',useSQLite:true}},d1Databases:{DB:'test-aqua'},bindings:{ALLOWED_ORIGINS:ORIGIN,ADMIN_PASSWORD:'aqua-test-admin'}}));
  const db=await mf.getD1Database('DB'),base=Date.now(),post=(path,body,headers={})=>mf.dispatchFetch('https://sea'+path,{method:'POST',headers:{Origin:path.startsWith('/admin')?'https://sea':ORIGIN,'Content-Type':'application/json',...headers},body:JSON.stringify(body)});
  const identities=[];for(let i=0;i<4;i++)identities.push(await (await post('/identity',{})).json());
  const ids=identities.map(p=>p.playerId),wet=p=>({x:p.x,z:p.z,inWater:true,returning:false,jump:false,verticalOffset:-15});
  const action=(i,name,data={},now=base,extra={})=>post('/__aqua',{pid:ids[i],player:wet(PENS[0]),action:name,data,id:crypto.randomUUID(),now,...extra});
  const snap=async(i,now=base)=>(await post('/__aqua',{kind:'snapshot',pid:ids[i],now})).json();
  const adminHeaders={Authorization:'Basic '+Buffer.from('admin:aqua-test-admin').toString('base64')};
  const admin=body=>post('/admin/aqua',{requestId:crypto.randomUUID(),...body},adminHeaders);
  await t.test('adds tables without deleting statistics, stable color and server-only admin tools',async()=>{
   assert.equal((await mf.dispatchFetch('https://sea/admin/aqua')).status,401);
   assert.equal((await post('/admin/aqua',{action:'grant',playerId:ids[0],amount:5,requestId:crypto.randomUUID()})).status,401);
   const state=await snap(0);assert.equal(state.personal.fry,0);assert.equal(state.personal.tubeColor,tubeColorFor(ids[0]));
   assert.equal((await snap(0)).personal.tubeColor,state.personal.tubeColor);
   assert.equal((await db.prepare('SELECT COUNT(*) AS n FROM players').first()).n,4);
   assert.equal(FISH.reduce((n,f)=>n+f.weight,0),10000);
  });
  await t.test('2-second collection requires water/proximity, respects school respawn and fry cap',async()=>{
   const center=schoolPosition(SCHOOLS[0],base);
   assert.equal((await action(0,'collectStart',{schoolId:'s1'},base,{player:{...wet(center),inWater:false}})).status,400);
   assert.equal((await action(0,'collectStart',{schoolId:'s1'},base)).status,400);
   const start=await (await action(0,'collectStart',{schoolId:'s1'},base,{player:wet(center)})).json();assert.ok(start.challengeId);
   const data={challengeId:start.challengeId};
   assert.equal((await action(0,'collectFinish',data,base+1000,{player:wet(schoolPosition(SCHOOLS[0],base+1000))})).status,400);
   assert.equal((await action(0,'collectFinish',data,base+2100,{player:wet(schoolPosition(SCHOOLS[0],base+2100))})).status,200);
   assert.equal((await snap(0,base+2100)).personal.fry,1);
   assert.equal((await action(1,'collectStart',{schoolId:'s1'},base+2200,{player:wet(center)})).status,400);
   const grantId=crypto.randomUUID();assert.equal((await post('/admin/aqua',{requestId:grantId,action:'grant',playerId:ids[0],amount:5},adminHeaders)).status,200);
   await post('/admin/aqua',{requestId:grantId,action:'grant',playerId:ids[0],amount:5},adminHeaders);
   assert.equal((await snap(0)).personal.fry,5);
   assert.equal((await action(0,'collectStart',{schoolId:'s2'},base+40000,{player:wet(schoolPosition(SCHOOLS[1],base+40000))})).status,400);
  });
  await t.test('three simultaneous participants, one pen per player and independent A/B',async()=>{
   const responses=await Promise.all(ids.map((_,i)=>action(i,'join',{penId:'A'})));assert.equal(responses.filter(r=>r.status===200).length,3);
   let state=await snap(0);assert.equal(state.pens[0].members.length,3);
   assert.equal((await action(0,'join',{penId:'B'},base,{player:wet(PENS[1])})).status,400);
   assert.equal((await action(3,'join',{penId:'B'},base,{player:wet(PENS[1])})).status,200);
   state=await snap(3);assert.equal(state.pens[1].members.length,1);assert.equal(state.personal.penId,'B');
  });
  let cycle;
  await t.test('release debit is atomic on D1 failure; duplicate release is prevented',async()=>{
   assert.equal((await action(0,'release',{penId:'A'},base,{fail:true})).status,400);
   assert.equal((await snap(0)).personal.fry,5);assert.equal((await snap(0)).pens[0].cycle,null);
   const id=crypto.randomUUID(),first=await action(0,'release',{penId:'A'},base,{id});assert.equal(first.status,200);cycle=(await first.json()).cycleId;
   assert.equal((await action(0,'release',{penId:'A'},base,{id})).status,200);
   assert.equal((await snap(0)).personal.fry,4);
   assert.equal((await action(1,'release',{penId:'A'})).status,400);
   assert.equal((await snap(0)).pens[0].cycle.completesAt,base+GROW_MS);
   assert.equal((await snap(0)).pens[1].cycle,null);
  });
  await t.test('personal 3h cooldown, 3-feed maximum and contribution allocation at 12h',async()=>{
   assert.equal((await action(0,'feed',{penId:'A'},base)).status,200);
   assert.equal((await action(0,'feed',{penId:'A'},base+FEED_MS-1)).status,400);
   assert.equal((await action(0,'feed',{penId:'A'},base+FEED_MS)).status,200);
   assert.equal((await action(1,'feed',{penId:'A'},base+FEED_MS)).status,200);
   assert.equal((await action(2,'feed',{penId:'A'},base+FEED_MS)).status,400);
   assert.equal((await snap(0,base+GROW_MS-1)).personal.pending,0);
   assert.equal((await snap(0,base+GROW_MS)).personal.pending,2);
   assert.equal((await snap(1,base+GROW_MS)).personal.pending,1);
   assert.equal((await snap(2,base+GROW_MS)).personal.pending,0);
   assert.equal((await snap(0,base+GROW_MS)).pens[0].cycle,null);
   assert.equal((await db.prepare('SELECT COUNT(*) AS n FROM aqua_feeds WHERE cycle_id=?').bind(cycle).first()).n,3);
  });
  await t.test('claim is atomic/idempotent even after a lost response; records survive reconnection',async()=>{
   const id=crypto.randomUUID();assert.equal((await action(0,'harvest',{},base+GROW_MS,{id,fail:true})).status,400);assert.equal((await snap(0,base+GROW_MS)).personal.pending,2);
   assert.equal((await action(0,'harvest',{},base+GROW_MS,{id,ambiguous:true})).status,400);
   assert.equal((await action(0,'harvest',{},base+GROW_MS,{id})).status,200);
   assert.equal((await action(0,'harvest',{},base+GROW_MS)).status,400);
   const restored=await snap(0,base+GROW_MS);assert.equal(restored.personal.pending,0);assert.equal(restored.personal.inventory.reduce((n,f)=>n+f.quantity,0),2);
   assert.ok(restored.personal.inventory.every(row=>FISH.some(f=>f.id===row.fishId)));assert.equal(restored.personal.tutorial,5);assert.equal((await action(0,'tutorialDone',{},base+GROW_MS)).status,200);assert.equal((await snap(0,base+GROW_MS)).personal.tutorial,6);
   const identity=await (await post('/identity',identities[0])).json();assert.equal(identity.playerId,ids[0]);
   assert.equal((await snap(0,base+GROW_MS)).personal.inventory.reduce((n,f)=>n+f.quantity,0),2);
  });
  await t.test('48h inactivity frees seats but preserves contributions and unclaimed rewards',async()=>{
   const state=await snap(1,base+INACTIVE_MS+GROW_MS+1);assert.ok(state.pens.every(p=>p.members.length===0));assert.equal(state.personal.pending,1);
   assert.equal((await db.prepare('SELECT COUNT(*) AS n FROM aqua_feeds').first()).n,3);
   assert.equal((await action(2,'join',{penId:'A'},base+INACTIVE_MS+GROW_MS+1)).status,200);
  });
  await t.test('admin finish and reset preserve pending rewards and leave the other pen untouched',async()=>{
   await admin({action:'grant',playerId:ids[3],amount:1});
   const time=base+INACTIVE_MS+GROW_MS+2;
   await action(3,'join',{penId:'B'},time,{player:wet(PENS[1])});
   assert.equal((await action(3,'release',{penId:'B'},time,{player:wet(PENS[1])})).status,200);
   assert.equal((await action(3,'feed',{penId:'B'},time,{player:wet(PENS[1])})).status,200);
   assert.equal((await admin({action:'finish',penId:'B'})).status,200);
   assert.equal((await snap(3,time)).personal.pending,1);
   assert.equal((await admin({action:'reset',penId:'B'})).status,200);
   const state=await snap(3,time);assert.equal(state.personal.pending,1);assert.equal(state.pens[1].members.length,0);assert.equal(state.pens[0].members.length,1);
  });
 }finally{await mf?.dispose();rmSync(dir,{recursive:true,force:true});}
});
