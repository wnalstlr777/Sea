import * as THREE from 'three';
import {createSurvivor,disposeSurvivor,appearanceForPlayer} from './survivor.js';
import {NETWORK_TO_VISUAL_Y} from './ship.js';

export function createMultiplayer({scene,camera,controls,character,url}){
  const panel=document.createElement('div');panel.className='multiplayer-status';
  const status=document.createElement('span');status.setAttribute('role','status');status.setAttribute('aria-live','polite');
  const retry=document.createElement('button');retry.type='button';retry.textContent='다시 접속';retry.hidden=true;
  panel.append(status,retry);document.querySelector('#app').append(panel);
  const names=document.createElement('div');names.className='player-names';document.querySelector('#app').append(names);
  const projected=new THREE.Vector3(),remotes=new Map();
  let socket=null,self=null,localLabel=null,ready=false,stopped=false,blocked=false,retryTimer=null,attempt=0,lastSent=null,lastHeard=0,seq=0;
  function message(text,canRetry=false){status.textContent=text;retry.hidden=!canRetry;}
  function label(name){const element=document.createElement('span');element.className='player-name';element.hidden=true;element.textContent=name;names.append(element);return element;}
  function remove(id){const remote=remotes.get(id);if(!remote)return;scene.remove(remote.root);disposeSurvivor(remote.avatar.mesh);remote.label.remove();remotes.delete(id);}
  function clear(){for(const id of [...remotes.keys()])remove(id);localLabel?.remove();localLabel=null;}
  function occupancy(){message(`함께 항해 중 · ${remotes.size+1}/5명`);}
  function setLocal(state){
    const look=appearanceForPlayer(state.id);character.setCharacter(look.model,look.hairColor);
    const delta=new THREE.Vector3(state.x,state.y,state.z).sub(character.player.position);
    character.player.position.add(delta);character.player.rotation.y=state.rotation;
    camera.position.add(delta);controls.target.add(delta);controls.update();
  }
  function add(state){
    if(state.id===self)return;
    if(remotes.has(state.id)){receive(state);return;}
    const look=appearanceForPlayer(state.id);const avatar=createSurvivor(look.model,look.hairColor),root=new THREE.Group();root.name=`remote-${state.id}`;
    root.userData.playerId=state.id;avatar.mesh.rotation.y=Math.PI;avatar.mesh.position.y=NETWORK_TO_VISUAL_Y;root.add(avatar.mesh);scene.add(root);
    root.position.set(state.x,state.y,state.z);root.rotation.y=state.rotation;
    remotes.set(state.id,{root,avatar,label:label(state.nickname),samples:[{...state,time:performance.now()}]});
  }
  function receive(state){
    if(state.id===self)return;
    const remote=remotes.get(state.id);if(!remote){add(state);return;}
    remote.samples.push({...state,time:performance.now()});if(remote.samples.length>20)remote.samples.shift();
  }
  function reconnect(){
    if(stopped||blocked||retryTimer)return;
    const delay=Math.min(10000,500*2**Math.min(attempt++,5))+Math.random()*250;
    message('연결이 끊겼습니다 · 재접속 중…');retryTimer=setTimeout(()=>{retryTimer=null;connect();},delay);
  }
  function connect(){
    if(stopped||blocked||socket?.readyState===WebSocket.OPEN||socket?.readyState===WebSocket.CONNECTING)return;
    ready=false;character.setEnabled(false);clear();message('공용 배에 접속 중…');
    let ws;try{ws=new WebSocket(url);}catch{blocked=true;message('멀티플레이 서버 주소 설정 오류');return;}socket=ws;
    ws.onmessage=event=>{
      if(socket!==ws)return;lastHeard=performance.now();if(event.data==='pong')return;
      let packet;try{packet=JSON.parse(event.data);}catch{return;}
      if(packet.type==='full'){
        blocked=true;message('정원 초과 · 최대 5명까지 탑승할 수 있습니다.',true);ws.close(4003,'Room full');return;
      }
      if(packet.type==='welcome'){
        if(packet.protocol!==1){blocked=true;message('서버 버전이 다릅니다. 새로고침해 주세요.');ws.close(1002);return;}
        self=packet.you;character.player.userData.playerId=self;const state=packet.players.find(p=>p.id===self);if(!state){ws.close(1002);return;}
        clear();setLocal(state);localLabel=label(`${state.nickname} (나)`);for(const player of packet.players)add(player);
        ready=true;attempt=0;seq=0;lastSent=null;character.setEnabled(true);occupancy();return;
      }
      if(!ready)return;
      if(packet.type==='join'){add(packet.player);occupancy();}
      if(packet.type==='state')receive(packet.player);
      if(packet.type==='leave'){remove(packet.id);occupancy();}
      if(packet.type==='correction'){setLocal(packet.player);lastSent=null;}
    };
    ws.onclose=event=>{
      if(socket!==ws)return;socket=null;ready=false;character.setEnabled(false);clear();
      if(event.code===4003){blocked=true;message('정원 초과 · 최대 5명까지 탑승할 수 있습니다.',true);}
      else if(event.code===1008){blocked=true;message('연결 요청이 거부되었습니다. 다시 접속해 주세요.',true);}
      else reconnect();
    };
    // Browsers report handshake/network failures through onclose as well.
    ws.onerror=()=>{};
  }
  retry.onclick=()=>{blocked=false;attempt=0;connect();};
  let sendTimer=null,heartbeat=null;
  if(!url){message('혼자 항해 중 · 멀티플레이 서버 연결 대기');}
  else{
    let endpoint;try{endpoint=new URL(url);}catch{message('멀티플레이 서버 주소 설정 오류');return {update(){}};}
    if(!['ws:','wss:'].includes(endpoint.protocol)||(location.protocol==='https:'&&endpoint.protocol!=='wss:')){
      message('멀티플레이에는 올바른 보안 WebSocket 주소가 필요합니다.');return {update(){}};
    }
    connect();
    // Networking has no extra rendering loop. Idle transforms are not resent.
    sendTimer=setInterval(()=>{
      if(!ready||socket?.readyState!==WebSocket.OPEN||socket.bufferedAmount>4096)return;
      const p=character.player;
      const state={x:p.position.x,y:p.position.y,z:p.position.z,rotation:p.rotation.y,moving:!!p.userData.moving};
      if(lastSent&&Math.hypot(state.x-lastSent.x,state.z-lastSent.z)<.005&&Math.abs(Math.atan2(Math.sin(state.rotation-lastSent.rotation),Math.cos(state.rotation-lastSent.rotation)))<.005&&state.moving===lastSent.moving)return;
      socket.send(JSON.stringify({type:'state',seq:seq++,...state}));lastSent=state;
    },100);
    heartbeat=setInterval(()=>{
      if(socket?.readyState!==WebSocket.OPEN)return;
      if(performance.now()-lastHeard>55000){socket.close(4000,'Heartbeat timeout');return;}
      socket.send('ping');
    },20000);
  }
  function project(element,position){
    projected.copy(position);projected.y+=NETWORK_TO_VISUAL_Y+3.15;projected.project(camera);
    const visible=projected.z>-1&&projected.z<1&&Math.abs(projected.x)<1.1&&Math.abs(projected.y)<1.1;
    element.hidden=!visible;if(visible){element.style.left=`${(projected.x*.5+.5)*innerWidth}px`;element.style.top=`${(-projected.y*.5+.5)*innerHeight}px`;}
  }
  function update(dt,showNames=true){
    const renderTime=performance.now()-100;
    for(const remote of remotes.values()){
      const samples=remote.samples;while(samples.length>2&&samples[1].time<=renderTime)samples.shift();
      const a=samples[0],b=samples[1]||a;
      const alpha=b.time>a.time?THREE.MathUtils.clamp((renderTime-a.time)/(b.time-a.time),0,1):1;
      remote.root.position.set(THREE.MathUtils.lerp(a.x,b.x,alpha),THREE.MathUtils.lerp(a.y,b.y,alpha),THREE.MathUtils.lerp(a.z,b.z,alpha));
      remote.root.rotation.y=a.rotation+Math.atan2(Math.sin(b.rotation-a.rotation),Math.cos(b.rotation-a.rotation))*alpha;
      remote.avatar.update(dt,(alpha<.5?a:b).moving);project(remote.label,remote.root.position);if(!showNames)remote.label.hidden=true;
    }
    if(localLabel){project(localLabel,character.player.position);if(!showNames)localLabel.hidden=true;}
  }
  addEventListener('pagehide',()=>{stopped=true;clearTimeout(retryTimer);retryTimer=null;socket?.close(1000,'Leaving');});
  addEventListener('pageshow',event=>{if(event.persisted&&url){stopped=false;socket=null;connect();}});
  addEventListener('online',()=>{if(url&&!ready&&!blocked){clearTimeout(retryTimer);retryTimer=null;connect();}});
  return {update,dispose(){stopped=true;clearTimeout(retryTimer);clearInterval(sendTimer);clearInterval(heartbeat);socket?.close(1000);clear();panel.remove();names.remove();}};
}
