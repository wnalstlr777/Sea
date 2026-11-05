import {DurableObject} from 'cloudflare:workers';
import {SHIP} from '../src/deck.js';
import {PlayerRecords,countryCode,socketCredentials,credentialHash,STALE_MS,kstDate} from './records.js';

const CAPACITY=20,PROTOCOL=2;
const EMOTES=['❤️','👋','😂','👍','🎉','😢','😮','👏'];
// The old rectangular DECK polygon only covered the middle of the enlarged hull.
// The client uses the exported UCX surfaces to decide deck vs. water.
// The server keeps a broad finite safety boundary without creating an invisible wall at the bow.
const SEA_LIMIT_RADIUS=200;
const SEA_CENTER_Z=-24;
function withinSeaBounds(position){
  return Math.hypot(position.x,position.z-SEA_CENTER_Z)<=SEA_LIMIT_RADIUS;
}
const NICKNAMES=['파도타는감자','낭만해파리','졸린선장','춤추는멸치','바다의김밥','수줍은문어','재즈듣는고등어','선글라스갈매기','갑판위고양이','노젓는오리','해먹속물개','길잃은참치','석양맛새우','느긋한복어','파도위붕어빵','산책하는고래','뱃멀미펭귄','휴가온오징어','바람난소라게','별보는해삼'];
const json=(body,status=200)=>Response.json(body,{status});
async function deadline(promise){
  let timer;try{return await Promise.race([promise,new Promise((_,reject)=>{timer=setTimeout(()=>reject(new Error('Records timeout')),2000);})]);}finally{clearTimeout(timer);}
}
export default {
  async fetch(request,env){
    const url=new URL(request.url);
    const origin=request.headers.get('Origin');
    const allowed=(env.ALLOWED_ORIGINS||'').split(',').map(s=>s.trim());
    if(origin&&!allowed.includes(origin))return json({error:'Origin not allowed'},403);
    if(!['/room','/health','/identity','/stats','/rankings'].includes(url.pathname))return json({error:'Not found'},404);
    if(request.method==='OPTIONS'&&origin){return new Response(null,{status:204,headers:{'Access-Control-Allow-Origin':origin,'Access-Control-Allow-Methods':'GET,POST,OPTIONS','Access-Control-Allow-Headers':'Content-Type','Vary':'Origin'}});}
    if(url.pathname==='/identity'&&(request.method!=='POST'||!origin))return json({error:'POST with Origin required'},400);
    if(url.pathname!=='/identity'&&request.method!=='GET')return json({error:'Method not allowed'},405);
    if(url.pathname==='/room'&&(!origin||request.headers.get('Upgrade')?.toLowerCase()!=='websocket'))return json({error:'WebSocket required'},400);
    // One authoritative public room, regardless of URL query parameters.
    const id=env.ROOM.idFromName('public');
    // Replace client-supplied metadata with Cloudflare's trusted country value.
    const headers=new Headers(request.headers);headers.set('X-Sea-Country',countryCode(request.cf?.country));
    const response=await env.ROOM.get(id).fetch(new Request(request,{headers}));
    if(url.pathname!=='/room'&&origin){const headers=new Headers(response.headers);headers.set('Access-Control-Allow-Origin',origin);headers.set('Vary','Origin');headers.set('Cache-Control','no-store');return new Response(response.body,{status:response.status,headers});}
    return response;
  }
};

export class SeaRoom extends DurableObject {
  constructor(ctx,env){
    super(ctx,env);
    // Attachments hold all live player state across hibernation; no interval or
    // in-memory membership map keeps the object awake. No game state is saved.
    ctx.setWebSocketAutoResponse(new WebSocketRequestResponsePair('ping','pong'));
    this.records=new PlayerRecords(ctx,env,()=>this.members());
    this.limits=new Map();this.cache=new Map();this.rateSalt=crypto.randomUUID();
  }
  members(){return this.ctx.getWebSockets().filter(ws=>ws.readyState===1&&ws.deserializeAttachment()?.player);}
  players(){return this.members().map(ws=>ws.deserializeAttachment().player);}
  send(ws,message){try{ws.send(JSON.stringify(message));return true;}catch{return false;}}
  broadcast(message,except){for(const ws of this.members())if(ws!==except)this.send(ws,message);}
  async allow(request,kind){
    const now=Date.now(),bucket=Math.floor(now/60_000);
    for(const [key,value] of this.limits)if(value.bucket!==bucket)this.limits.delete(key);
    const globalKey=kind+'all',global=this.limits.get(globalKey)||{bucket,count:0};global.count++;this.limits.set(globalKey,global);
    if(global.count>300)return false;
    // Transient salted digests only; raw IPs and digests never enter D1 or logs.
    const digest=await credentialHash(this.rateSalt+(request.headers.get('CF-Connecting-IP')||'unknown'));
    const key=kind+digest,value=this.limits.get(key)||{bucket,count:0};value.count++;this.limits.set(key,value);
    return value.count<=(kind==='connect'?60:30);
  }
  reportRecordsError(){console.warn('[Sea] Player records temporarily unavailable');}
  async analytics(request,url){
    const kind=url.pathname.slice(1);
    if(!await this.allow(request,kind))return json({error:'Rate limit'},429);
    try{
      if(kind==='identity'){
        const reader=request.body?.getReader();let length=0,parts=[];
        if(reader){while(true){const {done,value}=await reader.read();if(done)break;length+=value.length;if(length>1024){await reader.cancel();return json({error:'Body too large'},413);}parts.push(value);}}
        let body;try{const bytes=new Uint8Array(length);let i=0;for(const part of parts){bytes.set(part,i);i+=part.length;}body=JSON.parse(new TextDecoder().decode(bytes)||'{}');}catch{return json({error:'Invalid JSON'},400);}
        if(!body||typeof body!=='object'||Array.isArray(body))return json({error:'Invalid identity'},400);
        const names=NICKNAMES.filter(name=>!this.players().some(p=>p.nickname===name));
        const nickname=(names.length?names:NICKNAMES)[crypto.getRandomValues(new Uint32Array(1))[0]%(names.length||NICKNAMES.length)];
        return json(await this.records.identity(body,nickname,countryCode(request.headers.get('X-Sea-Country'))));
      }
      const rank=url.searchParams.get('kind')||'sailing';
      if(kind==='rankings'&&!['sailing','visits'].includes(rank))return json({error:'Invalid ranking kind'},400);
      const key=kind+rank+kstDate(Date.now()),cached=this.cache.get(key),now=Date.now();
      let result=cached?.expires>now?cached.value:null;
      if(!result){result=kind==='stats'?await this.records.stats():await this.records.rankings(rank);this.cache.set(key,{value:result,expires:now+(kind==='stats'?10000:30000)});}
      if(this.cache.size>12)this.cache.delete(this.cache.keys().next().value);
      if(kind==='stats'){
        const live=this.members().filter(ws=>{const a=ws.deserializeAttachment(),heartbeat=this.ctx.getWebSocketAutoResponseTimestamp(ws)?.getTime()||0;return now-Math.max(a.lastActivity||a.updatedAt,heartbeat)<=STALE_MS;});
        return json({...result,currentConnections:live.length,currentPlayers:new Set(live.map(ws=>{const a=ws.deserializeAttachment();return a.tracking?.playerId||a.player.id;})).size});
      }
      return json(result);
    }catch{this.reportRecordsError();return json({error:'Player records temporarily unavailable'},503);}
  }
  async fetch(request){
    const url=new URL(request.url);
    if(url.pathname==='/health')return json({ok:true,protocol:PROTOCOL,players:this.players().length,capacity:CAPACITY});
    if(url.pathname!=='/room')return this.analytics(request,url);
    if(!await this.allow(request,'connect'))return json({error:'Rate limit'},429);
    const credentials=socketCredentials(request);let identity=null,resume=null;
    try{
      const result=await deadline((async()=>{const identity=await this.records.verify(credentials.token);return {identity,resume:identity?await this.records.resume(identity.player_id,credentials.session,Date.now()):null};})());
      identity=result.identity;resume=result.resume;
    }catch{this.reportRecordsError();}
    const pair=new WebSocketPair(),client=pair[0],server=pair[1];
    // Also use the hibernation API for the short-lived rejection socket.
    this.ctx.acceptWebSocket(server);
    const existing=this.players();
    if(existing.length>=CAPACITY){
      server.serializeAttachment({rejected:true});this.send(server,{type:'full',capacity:CAPACITY});server.close(4003,'Room full');
      return new Response(null,{status:101,webSocket:client,headers:credentials.protocol?{'Sec-WebSocket-Protocol':credentials.protocol}:undefined});
    }
    const occupied=new Set(existing.map(p=>p.slot));let slot=0;while(occupied.has(slot))slot++;
    const id=crypto.randomUUID();
    const names=NICKNAMES.filter(name=>!existing.some(player=>player.nickname===name));
    const player={id,slot,nickname:names[crypto.getRandomValues(new Uint32Array(1))[0]%names.length],characterId:crypto.getRandomValues(new Uint8Array(1))[0]<128?'hina':'daeun',x:(slot%5-2)*1.5,y:SHIP.deckY,z:-27+Math.floor(slot/5)*1.5,rotation:0,moving:false,sitting:false,lying:false,jump:false,jumpHeight:0,verticalOffset:0,inWater:false,returning:false};
    if(identity)player.nickname=identity.nickname;
    const now=Date.now(),tracking=identity&&resume?{playerId:identity.player_id,sessionId:resume.sessionId,openedAt:resume.openedAt,checkpointAt:now,country:countryCode(request.headers.get('X-Sea-Country'))}:null;
    server.serializeAttachment({player,tracking,lastActivity:now,seq:-1,updatedAt:now,rateAt:now,tokens:8,credit:.65});
    this.send(server,{type:'welcome',protocol:PROTOCOL,you:id,players:this.players(),capacity:CAPACITY,...(tracking?{sessionId:tracking.sessionId}:{})});
    this.broadcast({type:'join',player},server);
    if(tracking)this.ctx.waitUntil(this.records.open(tracking).catch(()=>this.reportRecordsError()));
    return new Response(null,{status:101,webSocket:client,headers:credentials.protocol?{'Sec-WebSocket-Protocol':credentials.protocol}:undefined});
  }
  webSocketMessage(ws,message){
    const data=ws.deserializeAttachment();if(!data?.player)return;
    if(typeof message!=='string'||message.length>512){ws.close(1008,'Invalid packet');return;}
    const now=Date.now();data.lastActivity=now;data.tokens=Math.min(8,data.tokens+(now-data.rateAt)*.012);data.rateAt=now;
    if(data.tokens<1){ws.close(1008,'Rate limit');return;}data.tokens--;
    ws.serializeAttachment(data);
    let packet;try{packet=JSON.parse(message);}catch{ws.close(1008,'Invalid JSON');return;}
    if(!packet)return;
    if(packet.type==='emote'){if(EMOTES.includes(packet.icon))this.broadcast({type:'emote',id:data.player.id,icon:packet.icon},ws);return;}
    if(packet.type==='firework'){
      if(Number.isInteger(packet.color)&&packet.color>=0&&packet.color<5){
        // One event per second per player; no particle data crosses the network.
        if(now-(data.lastFireworkAt||0)>=1000){
          data.lastFireworkAt=now;ws.serializeAttachment(data);
          this.broadcast({type:'firework',id:data.player.id,color:packet.color},ws);
        }
      }
      return;
    }
    if(packet.type!=='state')return;
    const valid=Number.isSafeInteger(packet.seq)&&packet.seq>data.seq&&
      ['x','y','z','rotation'].every(key=>typeof packet[key]==='number'&&Number.isFinite(packet[key]))&&typeof packet.moving==='boolean'&&['sitting','lying','jump','inWater','returning'].every(key=>typeof packet[key]==='boolean')&&typeof packet.jumpHeight==='number'&&Number.isFinite(packet.jumpHeight)&&packet.jumpHeight>=0&&packet.jumpHeight<=160&&typeof packet.verticalOffset==='number'&&Number.isFinite(packet.verticalOffset)&&packet.verticalOffset>=-40&&packet.verticalOffset<=160;
    if(!valid){ws.close(1008,'Invalid state');return;}
    data.seq=packet.seq;
    const elapsed=Math.max(0,(now-data.updatedAt)/1000);
    const distance=Math.hypot(packet.x-data.player.x,packet.z-data.player.z);
    if(Math.abs(packet.y-SHIP.deckY)>.02||!withinSeaBounds(packet)||Math.abs(packet.rotation)>Math.PI*100||distance>Math.min(1.7,data.credit+5.25*elapsed)+.03){
      ws.serializeAttachment(data);this.send(ws,{type:'correction',player:data.player});return;
    }
    Object.assign(data.player,{x:packet.x,y:SHIP.deckY,z:packet.z,rotation:Math.atan2(Math.sin(packet.rotation),Math.cos(packet.rotation)),moving:packet.moving,sitting:packet.sitting,lying:packet.lying,jump:packet.jump,jumpHeight:packet.jumpHeight,verticalOffset:packet.verticalOffset,inWater:packet.inWater,returning:packet.returning});
    data.credit=Math.max(0,Math.min(1.7,data.credit+5.25*elapsed)-distance);
    data.updatedAt=now;ws.serializeAttachment(data);
    this.broadcast({type:'state',player:data.player},ws);
  }
  async leave(ws){
    const attachment=ws.deserializeAttachment();if(!attachment?.player)return;
    const id=attachment.player.id;ws.serializeAttachment({left:true});this.broadcast({type:'leave',id});
    if(attachment.tracking){
      const t=attachment.tracking,heartbeat=this.ctx.getWebSocketAutoResponseTimestamp(ws)?.getTime()||0;
      const end=Math.max(t.checkpointAt,Math.min(Date.now(),Math.max(attachment.lastActivity||0,heartbeat)+STALE_MS));
      try{await this.records.flush([{...t,from:t.checkpointAt,to:end,closed:true}]);}catch{this.reportRecordsError();}
    }
  }
  async alarm(){
    try{await this.records.flush();}catch{this.reportRecordsError();}
    for(const ws of this.members()){
      const a=ws.deserializeAttachment(),heartbeat=this.ctx.getWebSocketAutoResponseTimestamp(ws)?.getTime()||0;
      if(Date.now()-Math.max(a.lastActivity||a.updatedAt,heartbeat)>STALE_MS){await this.leave(ws);try{ws.close(4000,'Heartbeat timeout');}catch{}}
    }
    if(!this.members().some(ws=>ws.deserializeAttachment()?.tracking)&&!await this.records.hasPending())await this.ctx.storage.deleteAlarm();
  }
  async webSocketClose(ws,code){await this.leave(ws);try{ws.close(code===1006?1000:code);}catch{}}
  async webSocketError(ws){await this.leave(ws);try{ws.close(1011,'Connection error');}catch{}}
}
