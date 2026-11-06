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
 const reward=element('section','aqua-reward');reward.hidden=true;reward.dataset.aquaUi='';reward.setAttribute('role','dialog');reward.setAttribute('aria-label','가두리 수확 결과');
 const rewardTitle=element('h3','','🐟 물고기를 획득했어요!'),rewardList=element('div','aqua-reward-list'),rewardClose=element('button','','물고기 챙기기 ✓');rewardClose.type='button';rewardClose.onclick=()=>{reward.hidden=true;};reward.append(rewardTitle,rewardList,rewardClose);app.append(reward);
 // Pen status is displayed by the existing proximity interaction button, not a floating label.
  // No floating fry labels: school interactions are already available via the nearby net button.
  const schoolLabels=[];
 const projection=new THREE.Vector3(),labelRaycaster=new THREE.Raycaster(),labelRayDirection=new THREE.Vector3(),labelRayOrigin=new THREE.Vector3(),netActions=new Map();let overviewHidden=false,state=null,serverAt=0,receivedAt=performance.now(),busy=false,harvestNoticeShown=false,collecting=null,observePending=false,lastTick=-1,donePending=false,toastUntil=0,context=null,lastRefresh=0;
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
  if(mine.pending>0)return {action:'harvest',text:`🐟 물고기 ${mine.pending}마리 수확하기`,disabled:false};
  if(!p.cycle)return {action:'release',text:'🐟 치어 1마리 방류',disabled:mine.fry<1};
  if(p.cycle.feeds.length>=3)return {text:'먹이 3/3 · 성장 중',disabled:true};
  if(mine.nextFeedAt>now())return {text:`다음 먹이 ${clock(mine.nextFeedAt-now())}`,disabled:true};
  return {action:'feed',text:`🍚 먹이 주기 (${p.cycle.feeds.length}/3)`,disabled:false};
 }
 async function actPen(p){const action=penAction(p);if(!action?.action||action.disabled)return;
  if(action.action==='harvest'){await harvestAtPen(p);return;}
  const result=await request(action.action,{penId:p.id});if(result)notify(action.action==='join'?`가두리 ${p.id}에 참여했습니다.`:action.action==='release'?'치어를 방류했습니다. 12시간 양식이 시작됩니다.':'먹이를 주었습니다. 기여한 만큼 보상이 보존됩니다.');}
 async function collect(school){
  if(collecting||busy)return;const result=await request('collectStart',{schoolId:school.id});if(!result)return;
  collecting={school,challengeId:result.challengeId,start:performance.now(),duration:Math.max(COLLECT_MS,result.endsAt-now())};
  world.startCatch(school.id,now());
 }
 interact.onclick=()=>{if(!context||busy||collecting)return;if(context.school)collect(context.school);else if(context.pen)actPen(context.pen);};
 async function harvestAtPen(p){
  if(busy||!nearPen(p)||state?.personal?.penId!==p.id||!state.personal.pending)return;
  const result=await request('harvest',{penId:p.id});if(!result)return;
  rewardList.replaceChildren(...(result.fish||[]).map(id=>{
   const fish=FISH.find(f=>f.id===id),item=element('div','aqua-reward-fish');
   if(fish)item.append(fishIcon(fish,true));
   item.append(element('strong','',fish?.name||'물고기'),element('small','',fish?.rarity||''));return item;
  }));
  reward.hidden=false;
 }
 harvest.hidden=true;
 function fishIcon(fish,owned){
  const slot=FISH.findIndex(f=>f.id===fish.id);
  const frame=element('span','aqua-fish-sprite'+(owned?'':' unowned'));
  frame.setAttribute('role','img');
  frame.setAttribute('aria-label',fish.name);
  frame.style.setProperty('--fish-column',String(slot%5));
  frame.style.setProperty('--fish-row',String(Math.floor(slot/5)));
  // The approved atlas is used when uploaded; retain existing SVG art as a
  // fallback until the binary asset is present on GitHub Pages.
  const fallback=element('span','aqua-fish-fallback');
  fallback.innerHTML=fishIconFallback(fish,owned).outerHTML;
  frame.append(fallback);
  const probe=new Image();
  probe.onload=()=>frame.classList.add('atlas-ready');
  probe.src='./assets/fish-atlas.png';
  return frame;
 }
 function fishIconFallback(fish,owned){
  const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');
  svg.setAttribute('viewBox','0 0 120 76');svg.setAttribute('aria-hidden','true');
  const NS=svg.namespaceURI;
  const add=(tag,attrs,parent=svg)=>{const e=document.createElementNS(NS,tag);for(const [k,v] of Object.entries(attrs))e.setAttribute(k,v);parent.append(e);return e;};
  const defs=add('defs',{}),grad=add('linearGradient',{id:'fish-'+fish.id,x1:'0',y1:'0',x2:'0',y2:'1'});
  add('stop',{offset:'0%','stop-color':'#ffffff','stop-opacity':'.8'},grad);
  add('stop',{offset:'48%','stop-color':fish.color},grad);
  add('stop',{offset:'100%','stop-color':'#183d56'},grad);
  const g=add('g',{transform:'translate(0 3)'});
  const id=fish.id,slim=id==='oarfish'||id==='sardine'||id==='anchovy';
  const round=id==='sunfish',spiky=id==='lionfish',small=id==='mandarin';
  const body=round?'M17 37 Q21 6 59 9 Q94 8 91 36 Q91 64 58 65 Q22 64 17 37Z':
   slim?'M10 37 Q31 25 77 29 Q92 32 94 37 Q91 44 77 46 Q31 49 10 37Z':
   'M14 37 Q27 14 62 18 Q88 20 92 37 Q88 55 62 57 Q27 60 14 37Z';
  const tail=round?'M90 36 L107 27 L108 48Z':slim?'M90 37 L114 25 L109 37 L114 49Z':'M88 37 L113 20 L107 37 L113 54Z';
  add('path',{d:tail,fill:fish.color,stroke:'#224b63','stroke-width':'1.5'},g);
  if(spiky||id==='mandarin'||id==='coelacanth')add('path',{d:'M31 23 L39 6 L47 19 L55 5 L65 18 L75 10 L79 24Z',fill:fish.color,stroke:'#345a69','stroke-width':'1'},g);
  else add('path',{d:round?'M43 15 L62 0 L70 15Z':'M40 22 Q57 6 74 22Z',fill:fish.color,opacity:'.9'},g);
  add('path',{d:body,fill:'url(#fish-'+fish.id+')',stroke:'#285066','stroke-width':'1.7'},g);
  if(id==='clownfish')for(const x of [39,65])add('path',{d:'M'+x+' 20 Q'+(x+12)+' 37 '+x+' 55',fill:'none',stroke:'#f8f4e7','stroke-width':'9'},g);
  if(id==='blue-tang')add('path',{d:'M30 30 Q55 14 82 33 Q60 48 34 43',fill:'none',stroke:'#153b87','stroke-width':'8'},g);
  if(id==='mandarin')for(let i=0;i<6;i++)add('circle',{cx:35+i*9,cy:30+(i%2)*12,r:3.6,fill:'#f6a447'},g);
  if(id==='coelacanth')for(let i=0;i<8;i++)add('circle',{cx:34+(i%4)*12,cy:29+Math.floor(i/4)*13,r:2.6,fill:'#c4d8e0',opacity:'.8'},g);
  if(id==='oarfish')add('path',{d:'M34 27 Q54 -5 76 13 Q90 -1 101 17',fill:'none',stroke:'#df6683','stroke-width':'5'},g);
  if(id==='lionfish')for(let i=0;i<5;i++)add('path',{d:'M'+(37+i*11)+' 24 L'+(30+i*14)+' 2 M'+(37+i*11)+' 52 L'+(30+i*14)+' 70',stroke:'#e5a285','stroke-width':'3'},g);
  add('path',{d:'M52 40 Q67 48 77 40',fill:'none',stroke:'#224b63','stroke-width':'2',opacity:'.65'},g);
  add('circle',{cx:29,cy:33,r:4.1,fill:'#f7ffff',stroke:'#204154','stroke-width':'1'},g);
  add('circle',{cx:30,cy:33,r:2.2,fill:'#162f43'},g);
  if(!owned){add('rect',{x:0,y:0,width:120,height:76,fill:'#18343d',opacity:'.8'});svg.style.filter='grayscale(1)';}
  return svg;
 }
 function render(){
  if(!state?.personal)return;const mine=state.personal;
  summary.textContent=`치어 ${mine.fry}/5마리 · ${mine.penId?`가두리 ${mine.penId} 참여 중`:'참여 중인 가두리 없음'}`;
  // Rewards are collected only through the nearby pen interaction, not the menu.
  penList.replaceChildren(...state.pens.map(p=>{
   const card=element('article','aqua-pen-card'),h=element('h3','',`가두리 ${p.id} · ${p.members.length}/3명`),names=element('p','',p.members.map(m=>m.nickname+(m.mine?' (나)':'')).join(', ')||'첫 항해자를 기다리는 중'),status=element('p','',p.cycle?`먹이 ${p.cycle.feeds.length}/3 · 남은 ${clock(p.cycle.completesAt-now())}`:'치어 1마리를 방류하면 시작합니다.');
   if(mine.penId===p.id&&mine.pending>0)status.textContent=`🐟 수확할 물고기 ${mine.pending}마리! 가두리 근처에서 챙기세요.`;
   if(p.cycle)status.append(element('small','',`완료 ${new Intl.DateTimeFormat('ko-KR',{timeZone:'Asia/Seoul',month:'numeric',day:'numeric',hour:'2-digit',minute:'2-digit',hour12:false}).format(new Date(p.cycle.completesAt))} KST`));
   status.dataset.penClock=p.id;const a=penAction(p),button=element('button','',a?.text||'연결 확인 중');button.dataset.penAction=p.id;button.type='button';button.disabled=busy||!a?.action||a.disabled||!nearPen(p);button.onclick=()=>actPen(p);card.append(h,names,status,button);
   if(mine.penId===p.id){const leave=element('button','aqua-leave','참여 자리 비우기');leave.onclick=async()=>{if(confirm('참여 자리를 비울까요? 기존 먹이 기여와 미수확 보상은 유지됩니다.'))await request('leave');};card.append(leave);}
   return card;
  }));
  book.replaceChildren(...FISH.map(f=>{const item=mine.inventory.find(i=>i.fishId===f.id),card=element('div','aqua-fish'+(item?' owned':''));card.append(fishIcon(f,!!item),element('strong','',item?f.name:'???'),element('span','',`${f.rarity} · ${f.weight/100}%`),element('small','',item?`${item.quantity}마리 보유`:'미발견'));return card;}));
 }
 function water(){const s=character.getNetworkState();return s.inWater&&!s.returning&&!s.jump;}
 function nearPen(p){return water()&&Math.hypot(character.player.position.x-p.x,character.player.position.z-p.z)<=5.4;}
 function project(el,x,y,z,visible,checkOcclusion=false){
  if(checkOcclusion&&visible){
   camera.getWorldPosition(labelRayOrigin);
   labelRayDirection.set(x,y,z).sub(labelRayOrigin);
   const distance=labelRayDirection.length();labelRayDirection.normalize();labelRaycaster.set(labelRayOrigin,labelRayDirection);labelRaycaster.far=Math.max(0,distance-.25);
   const hits=labelRaycaster.intersectObjects(scene.children,true);
   // Ignore the ocean surface and aquaculture effects; solid ship/environment assets block labels.
   if(hits.some(hit=>{let obj=hit.object;while(obj){if(obj===world.root||obj===tube||obj.name==='ocean'||obj.name==='water'||obj.material?.name==='OceanSurface')return false;obj=obj.parent;}return hit.object.isMesh&&!hit.object.material?.transparent;}))visible=false;
  }
  projection.set(x,y,z).project(camera);
  const screenX=(projection.x*.5+.5)*innerWidth;
  const screenY=(-projection.y*.5+.5)*innerHeight;
  // Do not clamp labels to the viewport. Hide them as soon as their full bubble
  // would be clipped at an edge while the camera rotates away.
  const halfWidth=el.offsetWidth/2;
  const height=el.offsetHeight;
  const margin=8;
  el.hidden=!visible||projection.z<0||projection.z>1||screenX-halfWidth<margin||screenX+halfWidth>innerWidth-margin||screenY-height<margin||screenY>innerHeight-margin;
  if(el.hidden)return;
  // Fry labels must not cover the player's head, even when the school is behind them.
  if(el.classList.contains('aqua-school-label')){
   character.player.updateWorldMatrix(true,false);
   const head=character.player.getWorldPosition(new THREE.Vector3());head.y+=2.3;head.project(camera);
   if(head.z>0&&head.z<1){
    const hx=(head.x*.5+.5)*innerWidth,hy=(-head.y*.5+.5)*innerHeight;
    if(Math.abs(screenX-hx)<Math.max(42,halfWidth+24)&&Math.abs(screenY-hy)<Math.max(75,height+40)){el.hidden=true;return;}
   }
  }
  el.style.left=`${screenX}px`;
  el.style.top=`${screenY}px`;
 }
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
 function update(dt,hour=12){
  const available=isAvailable()&&!overviewHidden,time=now(),mine=state?.personal,s=character.getNetworkState(),onWater=water();
  if(mine?.pending>0&&!harvestNoticeShown){notify('🐟 물고기가 자랐어요! 참여한 가두리로 가서 챙기세요.');harvestNoticeShown=true;}
  if(!mine?.pending)harvestNoticeShown=false;
  const menuOpen=!!document.querySelector('details[open]');if(menuOpen&&!panel.hidden)setPanel(false);toggle.hidden=!available||menuOpen;panel.hidden=panel.hidden||!available;tutorial.hidden=!available||!panel.hidden||!mine||mine.tutorial>=6;
  if(!tutorial.hidden)tutorial.textContent=TUTORIAL[mine.tutorial]||'';
  if(mine?.tutorial===5&&!tutorial.hidden&&!donePending){donePending=true;setTimeout(()=>{if(tutorial.hidden){donePending=false;return;}multiplayer.aquaRequest('tutorialDone').catch(()=>{}).finally(()=>donePending=false);},12000);}
  if(available&&performance.now()-lastRefresh>15000){lastRefresh=performance.now();multiplayer.aquaSnapshot();}
  tube.visible=s.inWater&&!s.returning;setTubeColor(tube,character.player.userData.tubeColor||0);tube.material.emissiveIntensity=.2+Math.max(0,character.player.userData.waterKickPulse||0)*.55;character.player.updateWorldMatrix(true,true);const tubeFeet=character.player.children[0].getWorldPosition(new THREE.Vector3()).y;tube.position.set(character.player.position.x,tubeFeet+1.5,character.player.position.z);tube.rotation.z=Math.sin(time*.0017)*.025;
  world.update(time,state,tube.userData.color,onWater?character.player.position:null,hour);
  // Intentionally no world-space fry emoji; it could appear attached to swimmers.
  context=null;
  if(available&&mine&&onWater&&!busy){
   const school=SCHOOLS.find(school=>{const p=schoolPosition(school,time);return Math.hypot(character.player.position.x-p.x,character.player.position.z-p.z)<=2;});
   if(school){const a=state.schools.find(s=>s.id===school.id);context={school};interact.textContent=a.availableAt>time?`치어가 다시 모이는 중 · ${Math.ceil((a.availableAt-time)/1000)}초`:mine.fry>=5?'치어 보유 한도 5/5':'🥅 뜰채로 치어 채집 (2초)';interact.disabled=a.availableAt>time||mine.fry>=5;}
   else{const p=state.pens.find(nearPen);if(p){context={pen:p};const action=penAction(p);interact.textContent=`가두리 ${p.id} · ${p.members.length}/3명\n${p.members.map(m=>m.nickname+(m.mine?' (나)':'')).join(' · ')||'참여자 없음'}\n${action?.text||''}`;interact.disabled=action?.disabled||false;}}
  }
  interact.classList.toggle('aqua-pen-interact',!!context?.pen);
  interact.hidden=!context||!panel.hidden;
  if(context?.pen&&!interact.hidden){const p=context.pen;project(interact,p.x,ocean.heightAt(p.x,p.z)+2.3,p.z,true);}
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
 function setOverview(hidden){
  overviewHidden=hidden;
  world.root.visible=!hidden;
   for(const {el} of schoolLabels)el.hidden=hidden;
  if(hidden){interact.hidden=true;tutorial.hidden=true;toast.hidden=true;}
 }
 return {update,world,setOverview,getState:()=>state};
}
