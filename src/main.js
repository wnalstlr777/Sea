import {createDeckCollision} from './deck-collision.js';
import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {createOcean} from './ocean.js';
import './style.css';
import {createShip,SHIP,NETWORK_TO_VISUAL_Y,SHIP_CENTER_Z,VISUAL_DECK_Y} from './ship.js';
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

const app=document.querySelector('#app');
app.innerHTML=`<header class="heading"><h1>OCEAN CRUISE</h1><p>끝없이 펼쳐지는 바다, 항해의 시작.</p><span class="tag">PROTOTYPE / 0.1</span></header><section class="time-control" aria-label="하늘과 시간 조절"><label><span>구름 양 <output id="cloud-label">50%</output></span><input id="cloud-cover" aria-label="구름 양" type="range" min="0" max="1" step="0.01" value="0.5"></label><label><span>시간 <output id="time-label">18:00</output></span><input id="time-of-day" aria-label="하루 시간" type="range" min="0" max="24" step="0.05" value="0"></label></section><button id="camera-toggle" type="button" aria-label="바다 전체 감상" title="카메라 시점 전환" aria-pressed="false"><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3z"/><circle cx="12" cy="13.5" r="3.5"/></svg></button><button id="music-toggle" type="button" aria-label="재즈와 파도 소리" title="재즈와 파도 소리" aria-pressed="true"><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 18V5l11-2v13"/><ellipse cx="6.5" cy="18" rx="2.5" ry="1.6"/><ellipse cx="17.5" cy="16" rx="2.5" ry="1.6"/></svg></button><details><summary aria-label="바다 설정 메뉴"><span class="desktop-menu-title">OCEAN CONTROLS · 바다 설정</span><span class="mobile-menu-title" aria-hidden="true">☰</span></summary><div class="panel"><div class="section">SKY / 낮과 밤</div><div class="time-presets"><button data-hour="12">낮</button><button data-hour="18">석양</button><button data-hour="0">밤</button></div><div class="section">SURFACE / 수면</div><div id="sliders"></div><label><span>반사 해상도</span><select id="reflection-resolution" aria-label="반사 해상도"><option value="64">64 × 64</option><option value="128">128 × 128</option><option value="256" selected>256 × 256 · 기본</option><option value="512">512 × 512</option><option value="1024">1024 × 1024 · 고화질</option></select></label><div class="section">PALETTE / 거리별 바다색</div><div id="colors"></div><button id="reset">기본값으로 초기화</button><p id="stats" aria-label="렌더링 성능">수면 준비 중</p></div></details>`;
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
    // Match the existing side-profile intro shot; keep its framing and distance.
    const mobile=camera.aspect<.8;
    camera.position.set(mobile?34:28,mobile?36:32,SHIP_CENTER_Z+(mobile?125:105));
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
const deckCollision=createDeckCollision(ship);
const sunbeds=createSunbeds(scene);
const jellyfish=createJellyfish(scene);
const character=createPlayer(scene,camera,controls,deckCollision);
// Start the side-profile intro only after the UCX ship and player spawn are ready.
// Camera motion is owned by this one state machine, not competing frame handlers.
const introSide=new THREE.Vector3(),introTarget=new THREE.Vector3(0,VISUAL_DECK_Y-5,SHIP_CENTER_Z);
function beginIntro(){
  const mobile=camera.aspect<.8;
  introSide.set(mobile?34:28, mobile?36:32, SHIP_CENTER_Z+(mobile?125:105));
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
  if(intro.elapsed>=5){finishIntro();return;}
  const pose=character.deckViewPose();
  const t=Math.max(0,Math.min(1,(intro.elapsed-2)/3));
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
const lieButton=document.createElement('button');lieButton.id='sunbed-interact';lieButton.type='button';lieButton.textContent='🛏️';lieButton.title='선베드에 눕기';lieButton.setAttribute('aria-label','선베드에 눕기');lieButton.style.cssText='position:fixed;z-index:30;display:none;width:44px;height:44px;min-width:44px;max-width:44px;min-height:44px;line-height:1;padding:0;font-size:23px;border:1px solid #ffffffaa;border-radius:50%;background:#07313ddd;color:white;cursor:pointer;transform:translate(-50%,-100%);box-shadow:0 2px 12px #0005';document.querySelector('#app').append(lieButton);
let nearbyBed=null;const bedProjection=new THREE.Vector3();
lieButton.onclick=()=>{if(nearbyBed&&!character.isLying())character.lieOn(nearbyBed.anchor);lieButton.style.display='none';};
const multiplayer=createMultiplayer({scene,camera,controls,character,url:import.meta.env.VITE_MULTIPLAYER_URL?.trim()});
controls.maxDistance=320;
if(new URLSearchParams(location.search).get('view')==='ocean'){introFinished=true;setView(true);}
const boatMotion=createBoatMotion(camera);
const params={cameraMotion:matchMedia('(prefers-reduced-motion: reduce)').matches?0:.6,hour:0,cloudCover:.5,curvature:1,height:.825,reflectionResolution:256,waveSize:1,normalStrength:0,naturalSpeed:.6,speed:16,wake:.65};const defaults={...params};let naturalTime=0,travel=0;
const cloudInput=document.querySelector('#cloud-cover');
function setCloudCover(value){params.cloudCover=value;lighting.uniforms.cloudCover.value=value;cloudInput.value=value;document.querySelector('#cloud-label').value=`${Math.round(value*100)}%`;}
cloudInput.addEventListener('input',event=>setCloudCover(Number(event.target.value)));
const reflectionInput=document.querySelector('#reflection-resolution');
function setReflectionResolution(value){params.reflectionResolution=value;ocean.setReflectionResolution(value);reflectionInput.value=value;}
reflectionInput.addEventListener('change',event=>setReflectionResolution(Number(event.target.value)));
const hourInput=document.querySelector('#time-of-day');
function setHour(hour){params.hour=hour;hourInput.value=hour;const minutes=Math.round(hour*60);document.querySelector('#time-label').value=`${String(Math.floor(minutes/60)).padStart(2,'0')}:${String(minutes%60).padStart(2,'0')}`;document.querySelectorAll('[data-hour]').forEach(button=>button.setAttribute('aria-pressed',String(Number(button.dataset.hour)===hour)));}
hourInput.addEventListener('input',event=>setHour(Number(event.target.value)));
document.querySelectorAll('[data-hour]').forEach(button=>button.addEventListener('click',()=>setHour(Number(button.dataset.hour))));setHour(0);
const requestedHour=new URLSearchParams(location.search).get('hour');
if(requestedHour!==null&&Number.isFinite(Number(requestedHour)))setHour(Math.max(0,Math.min(24,Number(requestedHour))));
const settings=[['cameraMotion','카메라 흔들림',0,1,.05],['curvature','지평선 곡률',0,4,.05],['height','파도 높이',0,2,.025],['waveSize','파도 크기 · 파장 배율',.5,3,.05],['normalStrength','잔물결 강도 · 0=끔',0,1,.05],['naturalSpeed','자연 파도 속도',0,3,.05],['speed','항해 속도 · m/s',0,20,.1],['wake','항적 강도',0,1,.05]];
for(const [key,title,min,max,step] of settings){const label=document.createElement('label');label.innerHTML=`<span>${title}<output>${params[key].toFixed(2)}</output></span><input aria-label="${title}" type="range" min="${min}" max="${max}" step="${step}" value="${params[key]}">`;label.querySelector('input').addEventListener('input',e=>{params[key]=Number(e.target.value);label.querySelector('output').value=params[key].toFixed(2);});document.querySelector('#sliders').append(label);}
const palette={horizon:'#52798b',mid:'#17455c',near:'#105064',deep:'#062839'};
for(const [key,value] of Object.entries(palette)){const label=document.createElement('label');label.className='color';label.innerHTML=`<span>${key[0].toUpperCase()+key.slice(1)} <small>${value}</small></span><input aria-label="${key} color" type="color" value="${value}">`;label.querySelector('input').addEventListener('input',e=>{ocean.uniforms[key].value.set(e.target.value);label.querySelector('small').textContent=e.target.value;});document.querySelector('#colors').append(label);}
document.querySelector('#reset').onclick=()=>{Object.assign(params,defaults);setHour(defaults.hour);setCloudCover(defaults.cloudCover);setReflectionResolution(defaults.reflectionResolution);document.querySelectorAll('#sliders input').forEach((input,i)=>{input.value=params[settings[i][0]];input.dispatchEvent(new Event('input'));});document.querySelectorAll('#colors input').forEach((input,i)=>{input.value=Object.values(palette)[i];input.dispatchEvent(new Event('input'));});};
addEventListener('resize',()=>{camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();renderer.setSize(innerWidth,innerHeight);});
let previous=performance.now(),elapsed=0,frames=0;
renderer.setAnimationLoop(now=>{const wallDt=(now-previous)/1000;const dt=Math.min(wallDt,.05);previous=now;naturalTime+=dt*params.naturalSpeed;travel+=dt*params.speed;for(const key of ['curvature','height','waveSize','normalStrength','speed','wake'])ocean.uniforms[key].value=params[key];ocean.uniforms.time.value=naturalTime;ocean.uniforms.travel.value=travel;lighting.update(params.hour,dt);seagulls.update(wallDt);marineLife.update(wallDt);jellyfish.update(dt,params.hour);horn.update(wallDt);character.update(dt);controls.update();updateIntro(dt);
nearbyBed=null;
if(!overviewActive&&!character.isLying())for(const bed of sunbeds.beds){if(Math.hypot(character.player.position.x-bed.position.x,character.player.position.z-bed.position.z)<1.6){nearbyBed=bed;break;}}
lieButton.style.display='none';
camera.updateMatrixWorld();if(nearbyBed){bedProjection.copy(nearbyBed.position).add(new THREE.Vector3(0,2.2,0)).project(camera);if(bedProjection.z>0&&bedProjection.z<1){lieButton.style.left=`${(bedProjection.x*.5+.5)*innerWidth}px`;lieButton.style.top=`${(-bedProjection.y*.5+.5)*innerHeight}px`;lieButton.style.display='block';}}camera.updateMatrixWorld();multiplayer.update(dt);lighting.follow(character.player.position.clone().add(new THREE.Vector3(0,NETWORK_TO_VISUAL_Y,0)));boatMotion.render(renderer,scene,dt,params.cameraMotion,controls.getDistance());elapsed+=wallDt;frames++;if(elapsed>.5){document.querySelector('#stats').textContent=`${Math.round(frames/elapsed)} FPS · ${renderer.info.render.calls} CALLS · ${renderer.info.render.triangles.toLocaleString()} TRIANGLES`;elapsed=0;frames=0;}});
// Read-only diagnostics for smoke checks and performance inspection.
window.oceanCruise={renderer,scene,camera,controls,ship,player:character.player,lighting,params,uniforms:ocean.uniforms};
