import {DurableObject} from 'cloudflare:workers';
import {SHIP} from '../src/deck.js';

const CAPACITY=5,PROTOCOL=1;
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
export default {
  async fetch(request,env){
    const url=new URL(request.url);
    const origin=request.headers.get('Origin');
    const allowed=(env.ALLOWED_ORIGINS||'').split(',').map(s=>s.trim());
    if(origin&&!allowed.includes(origin))return json({error:'Origin not allowed'},403);
    if(url.pathname!=='/room'&&url.pathname!=='/health')return json({error:'Not found'},404);
    if(url.pathname==='/room'&&(!origin||request.headers.get('Upgrade')?.toLowerCase()!=='websocket'))return json({error:'WebSocket required'},400);
    // One authoritative public room, regardless of URL query parameters.
    const id=env.ROOM.idFromName('public');
    const response=await env.ROOM.get(id).fetch(request);
    if(url.pathname==='/health'&&origin){const headers=new Headers(response.headers);headers.set('Access-Control-Allow-Origin',origin);headers.set('Vary','Origin');return new Response(response.body,{status:response.status,headers});}
    return response;
  }
};

export class SeaRoom extends DurableObject {
  constructor(ctx,env){
    super(ctx,env);
    // Attachments hold all live player state across hibernation; no interval or
    // in-memory membership map keeps the object awake. No game state is saved.
    ctx.setWebSocketAutoResponse(new WebSocketRequestResponsePair('ping','pong'));
  }
  members(){return this.ctx.getWebSockets().filter(ws=>ws.readyState===1&&ws.deserializeAttachment()?.player);}
  players(){return this.members().map(ws=>ws.deserializeAttachment().player);}
  send(ws,message){try{ws.send(JSON.stringify(message));return true;}catch{return false;}}
  broadcast(message,except){for(const ws of this.members())if(ws!==except)this.send(ws,message);}
  async fetch(request){
    if(new URL(request.url).pathname==='/health')return json({ok:true,protocol:PROTOCOL,players:this.players().length,capacity:CAPACITY});
    const pair=new WebSocketPair(),client=pair[0],server=pair[1];
    // Also use the hibernation API for the short-lived rejection socket.
    this.ctx.acceptWebSocket(server);
    const existing=this.players();
    if(existing.length>=CAPACITY){
      server.serializeAttachment({rejected:true});this.send(server,{type:'full',capacity:CAPACITY});server.close(4003,'Room full');
      return new Response(null,{status:101,webSocket:client});
    }
    const occupied=new Set(existing.map(p=>p.slot));let slot=0;while(occupied.has(slot))slot++;
    const id=crypto.randomUUID();
    const names=NICKNAMES.filter(name=>!existing.some(player=>player.nickname===name));
    const player={id,slot,nickname:names[crypto.getRandomValues(new Uint32Array(1))[0]%names.length],characterId:crypto.getRandomValues(new Uint8Array(1))[0]<128?'hina':'daeun',x:(slot-2)*2,y:SHIP.deckY,z:-24,rotation:0,moving:false};
    server.serializeAttachment({player,seq:-1,updatedAt:Date.now(),rateAt:Date.now(),tokens:8,credit:.65});
    this.send(server,{type:'welcome',protocol:PROTOCOL,you:id,players:this.players(),capacity:CAPACITY});
    this.broadcast({type:'join',player},server);
    return new Response(null,{status:101,webSocket:client});
  }
  webSocketMessage(ws,message){
    const data=ws.deserializeAttachment();if(!data?.player)return;
    if(typeof message!=='string'||message.length>512){ws.close(1008,'Invalid packet');return;}
    const now=Date.now();data.tokens=Math.min(8,data.tokens+(now-data.rateAt)*.012);data.rateAt=now;
    if(data.tokens<1){ws.close(1008,'Rate limit');return;}data.tokens--;
    ws.serializeAttachment(data);
    let packet;try{packet=JSON.parse(message);}catch{ws.close(1008,'Invalid JSON');return;}
    if(!packet||packet.type!=='state')return;
    const valid=Number.isSafeInteger(packet.seq)&&packet.seq>data.seq&&
      ['x','y','z','rotation'].every(key=>typeof packet[key]==='number'&&Number.isFinite(packet[key]))&&typeof packet.moving==='boolean';
    if(!valid){ws.close(1008,'Invalid state');return;}
    data.seq=packet.seq;
    const elapsed=Math.max(0,(now-data.updatedAt)/1000);
    const distance=Math.hypot(packet.x-data.player.x,packet.z-data.player.z);
    if(Math.abs(packet.y-SHIP.deckY)>.02||!withinSeaBounds(packet)||Math.abs(packet.rotation)>Math.PI*100||distance>Math.min(1.7,data.credit+5.25*elapsed)+.03){
      ws.serializeAttachment(data);this.send(ws,{type:'correction',player:data.player});return;
    }
    Object.assign(data.player,{x:packet.x,y:SHIP.deckY,z:packet.z,rotation:Math.atan2(Math.sin(packet.rotation),Math.cos(packet.rotation)),moving:packet.moving});
    data.credit=Math.max(0,Math.min(1.7,data.credit+5.25*elapsed)-distance);
    data.updatedAt=now;ws.serializeAttachment(data);
    this.broadcast({type:'state',player:data.player},ws);
  }
  leave(ws){
    const attachment=ws.deserializeAttachment();if(!attachment?.player)return;
    const id=attachment.player.id;ws.serializeAttachment({left:true});this.broadcast({type:'leave',id});
  }
  webSocketClose(ws,code){this.leave(ws);try{ws.close(code===1006?1000:code);}catch{}}
  webSocketError(ws){this.leave(ws);try{ws.close(1011,'Connection error');}catch{}}
}
