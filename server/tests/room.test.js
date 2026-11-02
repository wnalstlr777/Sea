import test from 'node:test';
import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
import {mkdtempSync,rmSync,readFileSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {Miniflare,convertV4MiniflareOptions} from 'miniflare';

class Peer {
  constructor(socket){
    this.socket=socket;this.queue=[];this.waiters=[];
    socket.addEventListener('message',event=>{
      let packet;try{packet=JSON.parse(event.data);}catch{packet=event.data;}
      const waiter=this.waiters.find(w=>w.match(packet));
      if(waiter){this.waiters.splice(this.waiters.indexOf(waiter),1);clearTimeout(waiter.timer);waiter.resolve(packet);}else this.queue.push(packet);
    });socket.accept();
  }
  take(match){
    if(typeof match==='string'){const type=match;match=p=>p?.type===type;}
    const index=this.queue.findIndex(match);if(index>=0)return Promise.resolve(this.queue.splice(index,1)[0]);
    return new Promise((resolve,reject)=>{const waiter={match,resolve,timer:setTimeout(()=>reject(new Error('Timed out waiting for packet')),5000)};this.waiters.push(waiter);});
  }
  state(packet){this.socket.send(JSON.stringify({type:'state',seq:0,...packet}));}
  close(){try{this.socket.close(1000,'test');}catch{}}
}

test('SQLite Durable Object real-runtime room lifecycle and validation',async t=>{
  const directory=mkdtempSync(join(tmpdir(),'sea-worker-'));
  let mf;const peers=[];
  try{
    execFileSync('node_modules/.bin/wrangler',['deploy','--env=','--dry-run','--outdir',directory],{stdio:'pipe',env:{...process.env,WRANGLER_SEND_METRICS:'false'}});
    mf=new Miniflare(convertV4MiniflareOptions({modules:true,script:readFileSync(join(directory,'worker.js'),'utf8'),compatibilityDate:'2026-11-02',durableObjects:{ROOM:{className:'SeaRoom',useSQLite:true}},bindings:{ALLOWED_ORIGINS:'https://wnalstlr777.github.io'}}));
    const connect=async()=>{const response=await mf.dispatchFetch('http://sea/room',{headers:{Upgrade:'websocket',Origin:'https://wnalstlr777.github.io'}});assert.equal(response.status,101);const peer=new Peer(response.webSocket);peers.push(peer);return peer;};
    await t.test('restricts origins and requires websocket upgrade',async()=>{
      assert.equal((await mf.dispatchFetch('http://sea/room',{headers:{Upgrade:'websocket',Origin:'https://other.example'}})).status,403);
      assert.equal((await mf.dispatchFetch('http://sea/room')).status,400);
    });
    const first=await connect(),welcome=await first.take('welcome'),own=welcome.players.find(p=>p.id===welcome.you);
    let five;
    await t.test('server assigns unique identities, random repeatable characters, and five slots',async()=>{
      for(let i=0;i<4;i++){const peer=await connect();five=await peer.take('welcome');assert.equal(five.players.length,i+2);}
      assert.equal(new Set(five.players.map(p=>p.id)).size,5);
      assert.equal(new Set(five.players.map(p=>p.nickname)).size,5);
      assert.ok(five.players.every(p=>['hina','daeun'].includes(p.characterId)&&p.y===13.6));
      assert.ok(new Set(five.players.map(p=>p.characterId)).size<5,'duplicate avatars allowed');
      const late=five.players.find(p=>p.id===own.id);assert.equal(late.x,own.x);
    });
    await t.test('sixth player receives explicit full message',async()=>{
      const sixth=await connect();const packet=await sixth.take('full');assert.equal(packet.capacity,5);
    });
    await t.test('broadcasts validated state and corrects teleports/off-deck height',async()=>{
      first.state({x:own.x+.3,y:13.6,z:own.z,rotation:.4,moving:true});
      const packet=await peers[1].take(p=>p.type==='state'&&p.player.id===own.id);assert.equal(packet.player.x,own.x+.3);assert.equal(packet.player.moving,true);
      first.state({seq:1,x:999,y:13.6,z:own.z,rotation:0,moving:true});
      const correction=await first.take('correction');assert.equal(correction.player.x,own.x+.3);
      first.state({seq:2,x:own.x+.3,y:0,z:own.z,rotation:0,moving:false});assert.equal((await first.take('correction')).player.y,13.6);
    });
    await t.test('hibernation auto-response answers ping without a state packet',async()=>{first.socket.send('ping');assert.equal(await first.take(p=>p==='pong'),'pong');});
    await t.test('disconnect removes avatar; reconnect gets current snapshot and new identity',async()=>{
      const leaving=peers[1];const oldId=five.players.find(p=>p.slot===1)?.id;
      leaving.close();const packet=await first.take('leave');assert.ok(packet.id);
      const again=await connect(),snapshot=await again.take('welcome');assert.equal(snapshot.players.length,5);assert.notEqual(snapshot.you,packet.id);assert.notEqual(snapshot.you,oldId);
      assert.equal(snapshot.players.find(p=>p.id===own.id).x,own.x+.3);
    });
    await t.test('malformed state closes connection instead of poisoning the room',async()=>{
      const victim=peers[2];victim.state({x:'NaN',y:13.6,z:0,rotation:0,moving:true});
      const packet=await first.take('leave');assert.ok(packet.id);
      const health=await (await mf.dispatchFetch('http://sea/health')).json();assert.equal(health.players,4);assert.equal(health.capacity,5);
    });
  }finally{for(const peer of peers)peer.close();await mf?.dispose();rmSync(directory,{recursive:true,force:true});}
});
