import {createDeckCollision} from './deck-collision.js';
import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {createOcean} from './ocean.js';
import './style.css';
import {createShip,SHIP,NETWORK_TO_VISUAL_Y,SHIP_CENTER_Z,VISUAL_DECK_Y} from './ship.js';
import {createSail} from './sail.js';
import {createPlayer} from './player.js';
import {createMultiplayer} from './multiplayer.js';
import {createLighting} from './lighting.js';
import {createBoatMotion} from './camera-motion.js';
import {createSeagulls} from './seagulls.js';
import {createShipHorn} from './ship-horn.js';
import {createSeaAudio} from './sea-audio.js';
import {createMarineLife} from './marine-life.js';
import {createSunbeds} from './sunbeds.js';
import {createJellyfish} from './jellyfish.js';
import {createEmoteWheel} from './emote-wheel.js';
import {createFireworks} from './fireworks.js';

const app=document.querySelector('#app');
// Touch-capable tablets may report a fine primary pointer when a trackpad is connected.
if(navigator.maxTouchPoints>0)document.documentElement.classList.add('sea-touch-capable');
// Cover the initial unpositioned camera until the ship and player are ready.
const loadingCover=document.createElement('div');
loadingCover.id='sea-loading';
loadingCover.setAttribute('role','status');
loadingCover.setAttribute('aria-live','polite');
loadingCover.innerHTML='<div class="sea-loading-inner"><div class="sea-loading-mark">≈</div><div class="sea-loading-title">배타고</div><div class="sea-loading-subtitle">바다를 준비하고 있습니다...</div><div class="sea-loading-track"><div class="sea-loading-progress"></div></div></div>';
document.body.append(loadingCover);

app.innerHTML=`<header class="heading"><h1>배타고</h1><p>끝없이 펼쳐지는 바다, 항해의 시작.</p><span class="tag">PROTOTYPE / 0.1</span></header><section class="time-control" aria-label="하늘과 시간 조절"><label><span>구름 양 <output id="cloud-label">35%</output></span><input id="cloud-cover" aria-label="구름 양" type="range" min="0" max="1" step="0.01" value="0.35"></label><label><span>시간 <output id="time-label">18:00</output></span><input id="time-of-day" aria-label="하루 시간" type="range" min="0" max="24" step="0.05" value="0"></label><button id="sky-mode-toggle" type="button" aria-pressed="true" aria-label="자동 순환 중, 눌러서 수동으로 전환">자동</button></section><button id="camera-toggle" type="button" aria-label="바다 전체 감상" title="카메라 시점 전환" aria-pressed="false"><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3z"/><circle cx="12" cy="13.5" r="3.5"/></svg></button><button id="music-toggle" type="button" aria-label="재즈와 파도 소리" title="재즈와 파도 소리" aria-pressed="true"><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 18V5l11-2v13"/><ellipse cx="6.5" cy="18" rx="2.5" ry="1.6"/><ellipse cx="17.5" cy="16" rx="2.5" ry="1.6"/><path class="music-mute-slash" d="M3 21L21 3" stroke-width="2.3"/></svg></button><details><summary aria-label="바다 설정 메뉴"><span class="desktop-menu-title">OCEAN CONTROLS · 바다 설정</span><span class="mobile-menu-title" aria-hidden="true">☰</span></summary><div class="panel"><div class="section">SKY / 낮과 밤</div><div class="time-presets"><button data-hour="12">낮</button><button data-hour="18">석양</button><button data-hour="0">밤</button></div><div class="section">SURFACE / 수면</div><div id="sliders"></div><div class="section">GRAPHICS / 화질</div><label><span>그래픽 품질</span><select id="graphics-quality" aria-label="그래픽 품질"><option value="high">상 · PC 최고화질</option><option value="medium">중 · 모바일 기본</option><option value="low">하 · 저사양 모바일</option></select></label><div class="section">PALETTE / 거리별 바다색</div><div id="colors"></div><button id="reset">기본값으로 초기화</button><p id="stats" aria-label="렌더링 성능">수면 준비 중</p></div></details>`;
const settingsPanel=document.querySelector('details');
const mobileViewport=matchMedia('(max-width: 600px)');
const syncPanel=()=>{settingsPanel.open=false;};
syncPanel();mobileViewport.addEventListener('change',syncPanel);
addEventListener('keydown',event=>{if(event.key==='Escape'&&mobileViewport.matches)settingsPanel.open=false;});
const renderer=new THREE.WebGLRenderer({antialias:true});renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.setSize(innerWidth,innerHeight);renderer.setClearColor('#a3d1db');app.prepend(renderer.domElement);
renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;
const scene=new THREE.Scene();
const camera=new THREE.PerspectiveCamera(50,innerWidth/innerHeight,.5,50000);camera.position.set(0,SHIP.deckY+NETWORK_TO_VISUAL_Y+2,-12);
const controls=new OrbitControls(camera,renderer.domElement);controls.target.set(0,SHIP.deckY+NETWORK_TO_VISUAL_Y+1.7,-33);controls.enableDamping=true;controls.enablePan=false;controls.minDistance=3;controls.maxDistance=320;controls.minPolarAngle=.15;controls.maxPolarAngle=Math.PI/2-.02;controls.update();
let intro=null, introFinished=false, overviewActive=false;
// Shared opening/overview framing. Slightly wider than the previous overview.
function overviewCameraPose(){
  const mobile=camera.aspect<.8;
  return new THREE.Vector3(mobile?166:140,VISUAL_DECK_Y-5+1.0,SHIP_CENTER_Z);
}
function setView(overview){
  if(intro){intro=null;introFinished=true;}
  overviewActive=overview;
  document.body.classList.toggle('sea-overview',overview);
  const button=document.querySelector('#camera-toggle');
  button.setAttribute('aria-pressed',String(overview));
  button.setAttribute('aria-label',overview?'갑판 시점으로 전환':'바다 전체 감상');
  button.title=overview?'갑판 시점으로 전환':'바다 전체 감상';
  character.setEnabled(!overview);
  if(overview){
    camera.position.copy(overviewCameraPose());
    controls.target.set(0,VISUAL_DECK_Y-5,SHIP_CENTER_Z);
    controls.update();
  }else{
    // The player's latest zoomed-out deck pose is the single reset source.
    character.resetView();
  }
}
document.querySelector('#camera-toggle').onclick=()=>setView(!overviewActive);
const ocean=createOcean();scene.add(ocean.mesh);
const lighting=createLighting(scene,ocean,camera);
const seaAudio=createSeaAudio(document.querySelector('#music-toggle'));
const seagulls=createSeagulls(scene,camera,seaAudio);
const marineLife=createMarineLife(scene,camera,seaAudio);
const horn=createShipHorn();
const ship=createShip();scene.add(ship);
const sail=createSail(ship);

// Soft, visual-only 4000K marine searchlight. No actual lights or shadows.
// Nested feathered volumes avoid the hard silhouette and pointed tip of ConeGeometry.
const bowBeam=new THREE.Group();
bowBeam.name='night-bow-beam';
const bowBeamMaterials=[];
for(let layer=0;layer<6;layer++){
  const fraction=(layer+1)/6;
  const material=new THREE.ShaderMaterial({
    uniforms:{uOpacity:{value:0},uLayer:{value:fraction},uColor:{value:new THREE.Color('#fff0d6')}},
    vertexShader:`
      varying vec3 vLocal;
      varying vec3 vNormalWorld;
      varying vec3 vWorldPos;
      void main(){
        vLocal=position;
        vec4 world=modelMatrix*vec4(position,1.);
        vWorldPos=world.xyz;
        vNormalWorld=normalize(mat3(modelMatrix)*normal);
        gl_Position=projectionMatrix*viewMatrix*world;
      }`,
    fragmentShader:`
      uniform float uOpacity;
      uniform float uLayer;
      uniform vec3 uColor;
      varying vec3 vLocal;
      varying vec3 vNormalWorld;
      varying vec3 vWorldPos;
      void main(){
        // Height: near end (+Y) and far end (-Y) both dissolve into air.
        float along=(16.-vLocal.y)/32.;
        float startFade=smoothstep(0.,.16,along);
        float endFade=1.-smoothstep(.57,1.,along);
        // Feather the silhouette based on view angle; no visible cone outline.
        vec3 viewDir=normalize(cameraPosition-vWorldPos);
        float facing=abs(dot(normalize(vNormalWorld),viewDir));
        float feather=smoothstep(.0,.72,facing);
        float layerFade=(pow(1.-uLayer,1.35)*.9+.08)*mix(.6,1.,smoothstep(0.,.65,uLayer));
        float alpha=uOpacity*startFade*endFade*feather*layerFade;
        gl_FragColor=vec4(uColor,alpha);
      }`,
    transparent:true,depthWrite:false,side:THREE.DoubleSide,
    blending:THREE.AdditiveBlending
  });
  const mesh=new THREE.Mesh(new THREE.CylinderGeometry(1.1*fraction,38*fraction,32,32,1,true),material);
  mesh.rotation.x=Math.PI/2;
  mesh.renderOrder=4;
  bowBeam.add(mesh);
  bowBeamMaterials.push(material);
}
// Attach to the ship's animated overview pivot, so the beam pitches and rolls with the hull.
bowBeam.position.set(0,6,-36);
bowBeam.visible=false;
let bowBeamOpacity=0;
function updateBowBeam(dt){
  const hour=params.hour;
  const night=1-THREE.MathUtils.smoothstep(Math.min(hour,24-hour),4.5,6.5);
  const inOpeningOverview=Boolean(intro&&!introFinished&&intro.elapsed<3);
  const target=(overviewActive||inOpeningOverview)?night*.11:0;
  bowBeamOpacity+=(target-bowBeamOpacity)*(1-Math.exp(-dt*2.5));
  for(const material of bowBeamMaterials)material.uniforms.uOpacity.value=bowBeamOpacity;
  bowBeam.visible=bowBeamOpacity>.002;
}

// Only the rendered hull rocks. The collision mesh stays motionless.
let overviewSway=0;
function updateOverviewSway(dt,seconds){
  const active=overviewActive||(intro&&!introFinished&&intro.elapsed<3);
  const target=active?1:0;
  overviewSway+= (target-overviewSway)*(1-Math.exp(-Math.min(dt,.05)*2.2));
  const pivot=ship.userData.overviewDisplay;
  if(!pivot)return; // GLB may still be loading
  if(bowBeam.parent!==pivot)pivot.add(bowBeam);
  const showing=overviewSway>.002;
  pivot.visible=showing;
  for(const mesh of ship.userData.overviewVisualMeshes)mesh.visible=!showing;
  if(!showing){pivot.position.y=VISUAL_DECK_Y-5;pivot.rotation.set(0,0,0);return;}
  const phase=seconds*2*Math.PI/(5.6/1.5);
  pivot.position.y=VISUAL_DECK_Y-5+overviewSway*(.18*Math.sin(phase));
  // Ship runs lengthwise along world Z; pitching about X is visible broadside.
  pivot.rotation.x=overviewSway*THREE.MathUtils.degToRad(1.8)*Math.sin(phase+.5);
  pivot.rotation.z=overviewSway*THREE.MathUtils.degToRad(.6)*Math.sin(phase*.83+1.3);
}
const deckCollision=createDeckCollision(ship);
const sunbeds=createSunbeds(scene);
const jellyfish=createJellyfish(scene);
const character=createPlayer(scene,camera,controls,deckCollision);
// Step-on launch pads behind the sunbeds. Targets are UCX_Bottom05 (cabin roof)
// and UCX_Bottom06 (mast lookout) from the supplied Ship.glb.
const launchPads=[];
for(const [x,label,target,color] of [
  [-3.5,'조종실',{x:0,z:-18.7,y:21.0},0x63d8e8],
  [3.5,'망루',{x:0,z:-21,y:70.9},0xffc568]
]){
  const root=new THREE.Group();root.position.set(x,VISUAL_DECK_Y+.35,SHIP_CENTER_Z+2.5);
  const plate=new THREE.Mesh(new THREE.CylinderGeometry(.9,.9,.3,24),new THREE.MeshStandardMaterial({color,emissive:color,emissiveIntensity:.28,roughness:.55}));
  plate.castShadow=false;root.add(plate);
  const ring=new THREE.Mesh(new THREE.TorusGeometry(.65,.055,6,28),new THREE.MeshBasicMaterial({color:0xffffff}));
  ring.rotation.x=-Math.PI/2;ring.position.y=.19;root.add(ring);
  const marker=new THREE.Mesh(new THREE.ConeGeometry(.23,.55,6),new THREE.MeshBasicMaterial({color:0xffffff,depthTest:false}));
  marker.position.y=.85;root.add(marker);
  scene.add(root);launchPads.push({root,target,label,armed:true});
}

const fireworks=createFireworks(scene,character,color=>multiplayer.sendFirework(color));
// Start the side-profile intro only after the UCX ship and player spawn are ready.
// Camera motion is owned by this one state machine, not competing frame handlers.
const introSide=new THREE.Vector3(),introTarget=new THREE.Vector3(0,VISUAL_DECK_Y-5,SHIP_CENTER_Z);
function beginIntro(){
  introSide.copy(overviewCameraPose());
  intro={elapsed:0,fromPosition:introSide.clone(),fromTarget:introTarget.clone()};
  character.setEnabled(false);
  camera.position.copy(introSide);controls.target.copy(introTarget);controls.update();
}
function finishIntro(){
  intro=null;introFinished=true;character.setEnabled(true);
  const pose=character.deckViewPose();camera.position.copy(pose.position);
  controls.target.copy(pose.target);controls.update();
}
function updateIntro(dt){
  if(introFinished||overviewActive)return;
  if(!intro){if(deckCollision.ready()&&character.isSpawnReady())beginIntro();return;}
  intro.elapsed+=dt;
  if(intro.elapsed>=7.5){finishIntro();return;}
  const pose=character.deckViewPose();
  const t=Math.max(0,Math.min(1,(intro.elapsed-3)/4.5));
  const eased=t*t*(3-2*t);
  camera.position.copy(intro.fromPosition).lerp(pose.position,eased);
  controls.target.copy(intro.fromTarget).lerp(pose.target,eased);
  controls.update();
}
addEventListener('keydown',e=>{
  if(intro&&['KeyW','KeyA','KeyS','KeyD','ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Space'].includes(e.code)){
    e.preventDefault();finishIntro();
  }
},{capture:true});
renderer.domElement.addEventListener('pointerdown',()=>{if(intro)finishIntro();});
const bowPoseButton=document.createElement('button');
bowPoseButton.type='button';bowPoseButton.textContent='🙌';bowPoseButton.title='바다를 향해 양팔 벌리기';bowPoseButton.setAttribute('aria-label','타이타닉 포즈');
bowPoseButton.style.cssText='position:fixed;z-index:30;display:none;width:48px;height:48px;border:1px solid #ffffffaa;border-radius:50%;background:#07313ddd;color:white;font-size:25px;cursor:pointer;transform:translate(-50%,-100%)';
document.querySelector('#app').append(bowPoseButton);
bowPoseButton.onclick=()=>character.toggleTitanicPose();
const bowPoseAnchor=new THREE.Vector3(0,VISUAL_DECK_Y+3,-43);
const bowPoseProjection=new THREE.Vector3();
const lieButton=document.createElement('button');lieButton.id='sunbed-interact';lieButton.type='button';lieButton.textContent='🛏️';lieButton.title='선베드에 눕기';lieButton.setAttribute('aria-label','선베드에 눕기');lieButton.style.cssText='position:fixed;z-index:30;display:none;width:44px;height:44px;min-width:44px;max-width:44px;min-height:44px;line-height:1;padding:0;font-size:23px;border:1px solid #ffffffaa;border-radius:50%;background:#07313ddd;color:white;cursor:pointer;transform:translate(-50%,-100%);box-shadow:0 2px 12px #0005';document.querySelector('#app').append(lieButton);
let nearbyBed=null;const bedProjection=new THREE.Vector3();
lieButton.onclick=()=>{if(nearbyBed&&!character.isLying())character.lieOn(nearbyBed.anchor);lieButton.style.display='none';};
const multiplayer=createMultiplayer({scene,camera,controls,character,url:import.meta.env.VITE_MULTIPLAYER_URL?.trim()});
multiplayer.onFirework((color,remote)=>fireworks.launchRemote(color,remote));
const emotes=createEmoteWheel({scene,camera,renderer,controls,player:character.player,isAvailable:()=>introFinished&&!overviewActive,onChoose:icon=>multiplayer.sendEmote(icon)});
controls.maxDistance=320;
if(new URLSearchParams(location.search).get('view')==='ocean'){introFinished=true;setView(true);}
const boatMotion=createBoatMotion(camera);
const params={cameraMotion:matchMedia('(prefers-reduced-motion: reduce)').matches?0:.6,hour:0,cloudCover:.35,curvature:1,height:.825,reflectionResolution:256,waveSize:1,normalStrength:0,naturalSpeed:.6,speed:16,wake:.65};const defaults={...params};let naturalTime=0,travel=0;
const cloudInput=document.querySelector('#cloud-cover');
lighting.uniforms.cloudCover.value=params.cloudCover;
function setCloudCover(value){params.cloudCover=value;lighting.uniforms.cloudCover.value=value;cloudInput.value=value;document.querySelector('#cloud-label').value=`${Math.round(value*100)}%`;}
cloudInput.addEventListener('input',event=>{setSkyAuto(false);setCloudCover(Number(event.target.value));});
const qualityInput=document.querySelector('#graphics-quality');
const qualityPresets={
  high:{reflection:1024,pixelRatio:2,cloudSamples:24,cloudDetail:0},
  medium:{reflection:256,pixelRatio:1.5,cloudSamples:20,cloudDetail:0},
  low:{reflection:128,pixelRatio:1,cloudSamples:12,cloudDetail:0}
};
const defaultQuality=/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||navigator.maxTouchPoints>0||matchMedia('(pointer:coarse)').matches?'medium':'high';
function setGraphicsQuality(level){
  const preset=qualityPresets[level]||qualityPresets.medium;
  qualityInput.value=level;
  renderer.setPixelRatio(Math.min(devicePixelRatio,preset.pixelRatio));
  renderer.setSize(innerWidth,innerHeight);
  params.reflectionResolution=preset.reflection;
  ocean.setReflectionResolution(preset.reflection);
  ocean.setStarReflectionEnabled(level==='high');
  lighting.uniforms.cloudSamples.value=preset.cloudSamples;
  lighting.uniforms.cloudDetail.value=preset.cloudDetail;
}
qualityInput.addEventListener('change',event=>setGraphicsQuality(event.target.value));
setGraphicsQuality(defaultQuality);
const hourInput=document.querySelector('#time-of-day');
function setHour(hour){params.hour=hour;hourInput.value=hour;const minutes=Math.round(hour*60);document.querySelector('#time-label').value=`${String(Math.floor(minutes/60)).padStart(2,'0')}:${String(minutes%60).padStart(2,'0')}`;document.querySelectorAll('[data-hour]').forEach(button=>button.setAttribute('aria-pressed',String(Number(button.dataset.hour)===hour)));}
hourInput.addEventListener('input',event=>{setSkyAuto(false);setHour(Number(event.target.value));});
document.querySelectorAll('[data-hour]').forEach(button=>button.addEventListener('click',()=>{setSkyAuto(false);setHour(Number(button.dataset.hour));}));setHour(0);
// Local-only sky cycle: one in-game day every five real minutes.
const SKY_CYCLE_SECONDS=300;
let skyAuto=true,skyCycleSeconds=0;
const skyModeButton=document.querySelector('#sky-mode-toggle');
function setSkyAuto(enabled){
  skyAuto=enabled;
  skyModeButton.textContent=enabled?'자동':'수동';
  skyModeButton.setAttribute('aria-pressed',String(enabled));
  document.querySelector('.time-control').classList.toggle('sky-auto',enabled);
  skyModeButton.setAttribute('aria-label',enabled?'자동 순환 중, 눌러서 수동으로 전환':'수동 고정 중, 눌러서 자동으로 전환');
  if(enabled)skyCycleSeconds=(params.hour%24)/24*SKY_CYCLE_SECONDS;
}
skyModeButton.addEventListener('click',()=>setSkyAuto(!skyAuto));
setSkyAuto(true); // Start with only the compact auto toggle visible.
function updateSkyCycle(dt){
  if(!skyAuto)return;
  skyCycleSeconds=(skyCycleSeconds+dt)%SKY_CYCLE_SECONDS;
  setHour(skyCycleSeconds/SKY_CYCLE_SECONDS*24);
  // Gentle, periodic cloud variation: clear -> partly cloudy -> clear.
  setCloudCover(.35+.25*Math.sin(skyCycleSeconds/SKY_CYCLE_SECONDS*Math.PI*2));
}
const requestedHour=new URLSearchParams(location.search).get('hour');
if(requestedHour!==null&&Number.isFinite(Number(requestedHour))){setHour(Math.max(0,Math.min(24,Number(requestedHour))));setSkyAuto(false);}
const settings=[['cameraMotion','카메라 흔들림',0,1,.05],['curvature','지평선 곡률',0,4,.05],['height','파도 높이',0,2,.025],['waveSize','파도 크기 · 파장 배율',.5,3,.05],['normalStrength','잔물결 강도 · 0=끔',0,1,.05],['naturalSpeed','자연 파도 속도',0,3,.05],['speed','항해 속도 · m/s',0,20,.1],['wake','항적 강도',0,1,.05]];
for(const [key,title,min,max,step] of settings){const label=document.createElement('label');label.innerHTML=`<span>${title}<output>${params[key].toFixed(2)}</output></span><input aria-label="${title}" type="range" min="${min}" max="${max}" step="${step}" value="${params[key]}">`;label.querySelector('input').addEventListener('input',e=>{params[key]=Number(e.target.value);label.querySelector('output').value=params[key].toFixed(2);});document.querySelector('#sliders').append(label);}
const palette={horizon:'#52798b',mid:'#17455c',near:'#105064',deep:'#062839'};
for(const [key,value] of Object.entries(palette)){const label=document.createElement('label');label.className='color';label.innerHTML=`<span>${key[0].toUpperCase()+key.slice(1)} <small>${value}</small></span><input aria-label="${key} color" type="color" value="${value}">`;label.querySelector('input').addEventListener('input',e=>{ocean.uniforms[key].value.set(e.target.value);label.querySelector('small').textContent=e.target.value;});document.querySelector('#colors').append(label);}
document.querySelector('#reset').onclick=()=>{Object.assign(params,defaults);setHour(defaults.hour);setCloudCover(defaults.cloudCover);setSkyAuto(true);setGraphicsQuality(defaultQuality);document.querySelectorAll('#sliders input').forEach((input,i)=>{input.value=params[settings[i][0]];input.dispatchEvent(new Event('input'));});document.querySelectorAll('#colors input').forEach((input,i)=>{input.value=Object.values(palette)[i];input.dispatchEvent(new Event('input'));});};
addEventListener('resize',()=>{camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();renderer.setSize(innerWidth,innerHeight);});
let previous=performance.now(),elapsed=0,frames=0;
let loadingReleased=false,loadingReadyFrames=0;
const loadingStartedAt=performance.now();
function updateLoadingCover(){
  if(loadingReleased)return;
  if(ship.userData.loadingState==='error'){
    loadingCover.querySelector('.sea-loading-subtitle').textContent='배 모델을 불러오지 못했습니다. 새로고침해 주세요.';
    return;
  }
  const ready=ship.userData.loadingState==='ready'&&deckCollision.ready()&&character.isSpawnReady();
  if(!ready&&performance.now()-loadingStartedAt>9000){
    const detail=ship.userData.loadingState!=='ready'?'선박 모델을 불러오는 중입니다.':!deckCollision.ready()?'갑판 충돌 데이터를 확인 중입니다.':'캐릭터 시작 위치를 찾지 못했습니다.';
    loadingCover.querySelector('.sea-loading-subtitle').textContent=detail+' 새로고침 후에도 계속되면 알려주세요.';
  }
  if(ready&&++loadingReadyFrames>=2){
    loadingReleased=true;
    loadingCover.classList.add('sea-loading-done');
    loadingCover.addEventListener('transitionend',()=>loadingCover.remove(),{once:true});
  }
}
renderer.setAnimationLoop(now=>{const wallDt=(now-previous)/1000;const dt=Math.min(wallDt,.05);previous=now;updateSkyCycle(wallDt);naturalTime+=dt*params.naturalSpeed;travel+=dt*params.speed;for(const key of ['curvature','height','waveSize','normalStrength','speed','wake'])ocean.uniforms[key].value=params[key];ocean.uniforms.time.value=naturalTime;ocean.uniforms.travel.value=travel;lighting.update(params.hour,dt);seagulls.update(wallDt,overviewActive);marineLife.update(wallDt);jellyfish.update(dt,params.hour,overviewActive);horn.update(wallDt);character.update(dt);
for(const pad of launchPads){
  if(deckCollision.ready()){
    const floor=deckCollision.floorAt(pad.root.position.x,pad.root.position.z,VISUAL_DECK_Y+3);
    if(floor!==null)pad.root.position.y=floor+.35;
  }
  const distance=Math.hypot(character.player.position.x-pad.root.position.x,character.player.position.z-pad.root.position.z);
  if(distance>1.35)pad.armed=true;
  if(pad.armed&&distance<.78&&!overviewActive&&introFinished&&!character.isLying()){
    if(character.launchTo(pad.target))pad.armed=false;
  }
}
fireworks.update(wallDt);controls.update();updateIntro(dt);updateLoadingCover();updateOverviewSway(dt,naturalTime);updateBowBeam(dt);sail.update(naturalTime);
bowPoseButton.style.display='none';
if(!overviewActive&&!character.isLying()&&Math.hypot(character.player.position.x-bowPoseAnchor.x,character.player.position.z-bowPoseAnchor.z)<4){
  bowPoseProjection.copy(bowPoseAnchor).project(camera);
  if(bowPoseProjection.z>0&&bowPoseProjection.z<1){
    bowPoseButton.style.left=`${(bowPoseProjection.x*.5+.5)*innerWidth}px`;
    bowPoseButton.style.top=`\${(-bowPoseProjection.y*.5+.5)*innerHeight}px`;
    bowPoseButton.style.display='block';
  }
}
nearbyBed=null;
if(!overviewActive&&!character.isLying())for(const bed of sunbeds.beds){if(Math.hypot(character.player.position.x-bed.position.x,character.player.position.z-bed.position.z)<1.6){nearbyBed=bed;break;}}
lieButton.style.display='none';
camera.updateMatrixWorld();if(nearbyBed){bedProjection.copy(nearbyBed.position).add(new THREE.Vector3(0,2.2,0)).project(camera);if(bedProjection.z>0&&bedProjection.z<1){lieButton.style.left=`${(bedProjection.x*.5+.5)*innerWidth}px`;lieButton.style.top=`${(-bedProjection.y*.5+.5)*innerHeight}px`;lieButton.style.display='block';}}camera.updateMatrixWorld();multiplayer.update(dt,introFinished&&!overviewActive);emotes.update();lighting.follow(character.player.position.clone().add(new THREE.Vector3(0,NETWORK_TO_VISUAL_Y,0)));boatMotion.render(renderer,scene,dt,params.cameraMotion,controls.getDistance());elapsed+=wallDt;frames++;if(elapsed>.5){document.querySelector('#stats').textContent=`${Math.round(frames/elapsed)} FPS · ${renderer.info.render.calls} CALLS · ${renderer.info.render.triangles.toLocaleString()} TRIANGLES`;elapsed=0;frames=0;}});
// Read-only diagnostics for smoke checks and performance inspection.
window.oceanCruise={renderer,scene,camera,controls,ship,player:character.player,lighting,params,uniforms:ocean.uniforms};
