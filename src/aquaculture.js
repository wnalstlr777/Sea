import * as THREE from 'three';
import {PENS,SCHOOLS,FISH,COLLECT_MS,schoolPosition} from './aquaculture-data.js';
import {createTube,setTubeColor,createNet,createAquaWorld} from './aquaculture-visuals.js';
const TUTORIAL=['🛟 튜브를 타고 바다로 내려가 치어를 잡아보세요!','🐟 바다에 있는 치어 군집을 찾아보세요!','🥅 뜰채를 사용해 치어를 잡아보세요!','⭕ 잡은 치어를 가두리에 풀어주세요!','🍚 치어에게 먹이를 주세요!','🐟 먹이를 줄수록 수확량이 늘어나요. 같은 사람은 3시간마다 먹이를 줄 수 있고, 12시간 후 물고기를 수확할 수 있어요!'];
const element=(tag,cls,text)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(text!==undefined)e.textContent=text;return e;};
const clock=ms=>{const s=Math.max(0,Math.ceil(ms/1000));return [Math.floor(s/3600),Math.floor(s%3600/60),s%60].map(n=>String(n).padStart(2,'0')).join(':');};
export function createAquaculture({scene,camera,character,multiplayer,ocean,isAvailable}){
 const world=createAquaWorld(scene,ocean.heightAt),tube=createTube(0);scene.add(tube);character.setWaterHeightSampler(ocean.heightAt);
 const app=document.querySelector('#app'),toggle=element('button','aqua-toggle','🛟 양식 · 도감');toggle.id='aquaculture-toggle';toggle.type='button';toggle.setAttribute('aria-expanded','false');toggle.dataset.aquaUi='';app.append(toggle);
 const tutorial=element('div','aqua-tutorial');tutorial.setAttribute('role','status');app.append(tutorial);
 const interact=element('button','aqua-interact');interact.dataset.aquaUi='';interact.type='button';interact.hidden=true;app.append(interact);
 const toast=element('div','aqua-toast');toast.setAttribute('role','status');toast.hidden=true;app.append(toast);
 const panel=element('section','aqua-panel');panel.dataset.aquaUi='';panel.hidden=true;panel.setAttribute('aria-label','공동 양식과 물고기 도감');
 const head=element('div','aqua-panel-head'),title=element('h2','','공동 가두리 양식'),close=element('button','','닫기 ×');close.type='button';head.append(title,close);panel.append(head);
 const summary=element('p','aqua-summary','서버에 연결하는 중입니다.'),harvest=element('button','aqua-harvest'),penList=element('div','aqua-pen-list'),guide=element('p','aqua-guide','바다에서는 튜브가 자동 장착됩니다. 치어 채집 → 가두리 참여·방류 → 먹이 주기 → 12시간 후 수확! 배로 돌아갈 땐 점프 버튼을 누르세요.');
 const bookHeading=element('h3','','나의 물고기 도감'),book=element('div','aqua-book');panel.append(summary,harvest,penList,guide,bookHeading,book);app.append(panel);
 const labels=PENS.map(p=>{const el=element('div','aqua-world-label');app.append(el);return {pen:p,el};});
 const schoolLabels=SCHOOLS.map(p=>{const el=element('div','aqua-school-label','🐟 치어');app.append(el);return {school:p,el};});
 const projection=new THREE.Vector3(),netActions=new Map();let state=null,serverAt=0,receivedAt=performance.now(),busy=false,collecting=null,observePending=false,lastTick=-1,donePending=false,toastUntil=0,context=null,lastRefresh=0;
 const now=()=>serverAt?serverAt+(performance.now()-receivedAt):Date.now();
 function notify(text){toast.textContent=text;toast.hidden=false;toastUntil=performance.now()+5000;}
 function setPanel(open){panel.hidden=!open;toggle.setAttribute('aria-expanded',String(open));if(open){const menu=document.querySelector('details[open]');if(menu)menu.open=false;multiplayer.aquaSnapshot();}else toggle.focus();}
 document.addEventListener('visibilitychange',()=>{if(!document.hidden)multiplayer.aquaSnapshot();});
 toggle.onclick=()=>setPanel(panel.hidden);close.onclick=()=>setPanel(false);addEventListener('keydown',e=>{if(e.code==='Escape'&&!panel.hidden)setPanel(false);});
 async function request(action,data={}){
  busy=true;interact.disabled=true;
  try{const result=await multiplayer.aquaRequest(action,data);return result;}
  catch(e){notify(e.message);return null;}finally{busy=false;interact.disabled=false;}
 }
 function penAction(p){
  const mine=state?.personal;if(!mine)return null;
  if(!mine.penId)return {action:'join',text:`가두리 ${p.id} 참여 (${p.members.length}/3)`,disabled:p.members.length>=3};
  if(mine.penId!==p.id)return {text:'다른 가두리에 참여 중',disabled:true};
  if(!p.cycle)return {action:'release',text:'🐟 치어 1마리 방류',disabled:mine.fry<1};
  if(p.cycle.feeds.length>=3)return {text:'먹이 3/3 · 성장 중',disabled:true};
  if(mine.nextFeedAt>now())return {text:`다음 먹이 ${clock(mine.nextFeedAt-now())}`,disabled:true};
  return {action:'feed',text:`🍚 먹이 주기 (${p.cycle.feeds.length}/3)`,disabled:false};
 }
 async function actPen(p){const action=penAction(p);if(!action?.action||action.disabled)return;const result=await request(action.action,{penId:p.id});if(result)notify(action.action==='join'?`가두리 ${p.id}에 참여했습니다.`:action.action==='release'?'치어를 방류했습니다. 12시간 양식이 시작됩니다.':'먹이를 주었습니다. 기여한 만큼 보상이 보존됩니다.');}
 async function collect(school){
  if(collecting||busy)return;const result=await request('collectStart',{schoolId:school.id});if(!result)return;
  collecting={school,challengeId:result.challengeId,start:performance.now(),duration:Math.max(COLLECT_MS,result.endsAt-now())};
 }
 interact.onclick=()=>{if(!context||busy||collecting)return;if(context.school)collect(context.school);else if(context.pen)actPen(context.pen);};
 harvest.onclick=async()=>{if(busy)return;const result=await request('harvest');if(result){const names=result.fish.map(id=>FISH.find(f=>f.id===id)?.name||'물고기');notify(`수확 완료! ${names.join(', ')}`);}};
 function fishIcon(fish,owned){const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');svg.setAttribute('viewBox','0 0 60 32');svg.setAttribute('aria-hidden','true');const path=document.createElementNS(svg.namespaceURI,'path');path.setAttribute('d','M8 16C16 2 35 3 44 12L56 5V27L44 20C35 29 16 30 8 16Z');path.setAttribute('fill',owned?fish.color:'#567078');svg.append(path);if(owned){const eye=document.createElementNS(svg.namespaceURI,'circle');eye.setAttribute('cx','19');eye.setAttribute('cy','13');eye.setAttribute('r','1.8');eye.setAttribute('fill','#25414a');svg.append(eye);}return svg;}
 function render(){
  if(!state?.personal)return;const mine=state.personal;
  summary.textContent=`치어 ${mine.fry}/5마리 · ${mine.penId?`가두리 ${mine.penId} 참여 중`:'참여 중인 가두리 없음'}`;
  harvest.textContent=mine.pending?`🎁 보관된 물고기 ${mine.pending}마리 수확하기`:'아직 수확할 물고기가 없습니다';harvest.disabled=!mine.pending||busy;
  penList.replaceChildren(...state.pens.map(p=>{
   const card=element('article','aqua-pen-card'),h=element('h3','',`가두리 ${p.id} · ${p.members.length}/3명`),names=element('p','',p.members.map(m=>m.nickname+(m.mine?' (나)':'')).join(', ')||'첫 항해자를 기다리는 중'),status=element('p','',p.cycle?`먹이 ${p.cycle.feeds.length}/3 · 남은 ${clock(p.cycle.completesAt-now())}`:'치어 1마리를 방류하면 시작합니다.');
   if(p.cycle)status.append(element('small','',`완료 ${new Intl.DateTimeFormat('ko-KR',{timeZone:'Asia/Seoul',month:'numeric',day:'numeric',hour:'2-digit',minute:'2-digit',hour12:false}).format(new Date(p.cycle.completesAt))} KST`));
   status.dataset.penClock=p.id;const a=penAction(p),button=element('button','',a?.text||'연결 확인 중');button.dataset.penAction=p.id;button.type='button';button.disabled=busy||!a?.action||a.disabled||!nearPen(p);button.onclick=()=>actPen(p);card.append(h,names,status,button);
   if(mine.penId===p.id){const leave=element('button','aqua-leave','참여 자리 비우기');leave.onclick=async()=>{if(confirm('참여 자리를 비울까요? 기존 먹이 기여와 미수확 보상은 유지됩니다.'))await request('leave');};card.append(leave);}
   return card;
  }));
  book.replaceChildren(...FISH.map(f=>{const item=mine.inventory.find(i=>i.fishId===f.id),card=element('div','aqua-fish'+(item?' owned':''));card.append(fishIcon(f,!!item),element('strong','',item?f.name:'???'),element('span','',`${f.rarity} · ${f.weight/100}%`),element('small','',item?`${item.quantity}마리 보유`:'미발견'));return card;}));
 }
 function water(){const s=character.getNetworkState();return s.inWater&&!s.returning&&!s.jump;}
 function nearPen(p){return water()&&Math.hypot(character.player.position.x-p.x,character.player.position.z-p.z)<=5.4;}
 function project(el,x,y,z,visible){projection.set(x,y,z).project(camera);el.hidden=!visible||projection.z<0||projection.z>1||Math.abs(projection.x)>1.08||Math.abs(projection.y)>1.08;if(!el.hidden){el.style.left=`${(projection.x*.5+.5)*innerWidth}px`;el.style.top=`${(-projection.y*.5+.5)*innerHeight}px`;}}
 multiplayer.onAquaculture(packet=>{
  if(packet.type==='aquaError'){summary.textContent='양식 서버 연결을 확인해 주세요.';notify(packet.error);return;}
  if(packet.type==='aquaRefresh'){multiplayer.aquaSnapshot();return;}
  if(packet.type==='aquaState'){state=packet.state;serverAt=state.serverNow;receivedAt=performance.now();render();return;}
  if(packet.type==='aquaEvent'){
   if(packet.action==='feed')world.feed(packet.penId,now());
   if(packet.action==='collectFinish'){const s=SCHOOLS.find(s=>s.id===packet.schoolId);if(s){const p=schoolPosition(s,now());world.splash(p.x,p.z,now());}}
   if(packet.action==='collectStart'&&packet.actorId!==character.player.userData.playerId){const old=netActions.get(packet.actorId);if(old)scene.remove(old.net);const net=createNet();scene.add(net);netActions.set(packet.actorId,{net,start:performance.now(),duration:COLLECT_MS});}
  }
 });
 function update(dt){
  const available=isAvailable(),time=now(),mine=state?.personal,s=character.getNetworkState(),onWater=water();
  const menuOpen=!!document.querySelector('details[open]');if(menuOpen&&!panel.hidden)setPanel(false);toggle.hidden=!available||menuOpen;panel.hidden=panel.hidden||!available;tutorial.hidden=!available||!panel.hidden||!mine||mine.tutorial>=6;
  if(!tutorial.hidden)tutorial.textContent=TUTORIAL[mine.tutorial]||'';
  if(mine?.tutorial===5&&!tutorial.hidden&&!donePending){donePending=true;setTimeout(()=>{if(tutorial.hidden){donePending=false;return;}multiplayer.aquaRequest('tutorialDone').catch(()=>{}).finally(()=>donePending=false);},12000);}
  if(available&&performance.now()-lastRefresh>15000){lastRefresh=performance.now();multiplayer.aquaSnapshot();}
  tube.visible=s.inWater&&!s.returning&&!s.jump;setTubeColor(tube,character.player.userData.tubeColor||0);tube.position.set(character.player.position.x,ocean.heightAt(character.player.position.x,character.player.position.z)+.15,character.player.position.z);tube.rotation.z=Math.sin(time*.0017)*.025;
  world.update(time,state);
  for(const {pen,el} of labels){const p=state?.pens.find(p=>p.id===pen.id),distance=Math.hypot(character.player.position.x-pen.x,character.player.position.z-pen.z);project(el,pen.x,ocean.heightAt(pen.x,pen.z)+2.2,pen.z,available&&!!p&&distance<90);if(p&&Math.floor(time/1000)!==lastTick)el.textContent=`가두리 ${p.id} · ${p.members.length}/3명\n${p.members.map(m=>m.nickname).join(' · ')||'함께할 항해자 모집 중'}\n${p.cycle?`먹이 ${p.cycle.feeds.length}/3 · ${clock(p.cycle.completesAt-time)}`:'치어 방류 준비'}${mine?.pending?'\n🎁 보관함에서 수확 가능':''}`;}
  for(const {school,el} of schoolLabels){const p=schoolPosition(school,time),a=state?.schools.find(s=>s.id===school.id),distance=Math.hypot(character.player.position.x-p.x,character.player.position.z-p.z);project(el,p.x,ocean.heightAt(p.x,p.z)+.7,p.z,available&&onWater&&!!a&&a.availableAt<=time&&distance<22);}
  context=null;
  if(available&&mine&&onWater&&!busy){
   const school=SCHOOLS.find(school=>{const p=schoolPosition(school,time);return Math.hypot(character.player.position.x-p.x,character.player.position.z-p.z)<=2;});
   if(school){const a=state.schools.find(s=>s.id===school.id);context={school};interact.textContent=a.availableAt>time?`치어가 다시 모이는 중 · ${Math.ceil((a.availableAt-time)/1000)}초`:mine.fry>=5?'치어 보유 한도 5/5':'🥅 뜰채로 치어 채집 (2초)';interact.disabled=a.availableAt>time||mine.fry>=5;}
   else{const p=state.pens.find(nearPen);if(p){context={pen:p};const action=penAction(p);interact.textContent=action?.text||'';interact.disabled=action?.disabled||false;}}
  }
  interact.hidden=!context||!panel.hidden;
  if(collecting){interact.hidden=!available;interact.disabled=true;const progress=(performance.now()-collecting.start)/collecting.duration;interact.textContent=`🥅 채집 중 ${Math.min(100,Math.floor(progress*100))}%`;
   if(!collecting.net){collecting.net=createNet();scene.add(collecting.net);}character.setNetPose(progress);collecting.net.position.copy(character.getFireworkHandPosition());collecting.net.rotation.set(Math.sin(progress*Math.PI)*-.6,character.player.rotation.y,Math.PI-.45);
   if(progress>=1){const c=collecting;collecting=null;scene.remove(c.net);request('collectFinish',{challengeId:c.challengeId}).then(result=>{if(result)notify('치어 1마리를 채집했습니다! 가두리로 가져가 보세요.');});}
  }
  multiplayer.forEachRemote(remote=>{const action=netActions.get(remote.root.userData.playerId);if(!action)return;const p=(performance.now()-action.start)/action.duration;if(p>=1){scene.remove(action.net);netActions.delete(remote.root.userData.playerId);return;}remote.avatar.netPose(p);remote.root.updateMatrixWorld(true);action.net.position.copy(remote.avatar.rightHandWorldPosition());action.net.rotation.set(-.4,remote.root.rotation.y,Math.PI-.45);});
  for(const [id,action] of netActions)if(performance.now()-action.start>3000){scene.remove(action.net);netActions.delete(id);}
  if(mine&&available&&onWater&&!observePending&&(mine.tutorial===0||mine.tutorial===1&&SCHOOLS.some(school=>{const p=schoolPosition(school,time);return Math.hypot(character.player.position.x-p.x,character.player.position.z-p.z)<3.7;}))){observePending=true;multiplayer.aquaRequest('observe').catch(()=>{}).finally(()=>{setTimeout(()=>observePending=false,3000);});}
  toast.hidden=performance.now()>toastUntil;
  if(Math.floor(time/1000)!==lastTick){lastTick=Math.floor(time/1000);if(!panel.hidden&&state){for(const p of state.pens){const label=panel.querySelector(`[data-pen-clock="${p.id}"]`),button=panel.querySelector(`[data-pen-action="${p.id}"]`),a=penAction(p);if(label?.firstChild)label.firstChild.nodeValue=p.cycle?`먹이 ${p.cycle.feeds.length}/3 · 남은 ${clock(p.cycle.completesAt-time)}`:'치어 1마리를 방류하면 시작합니다.';if(button&&a){button.textContent=a.text;button.disabled=busy||!a.action||a.disabled||!nearPen(p);}}}}
 }
 return {update,world,getState:()=>state};
}
