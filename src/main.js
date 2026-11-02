import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {createOcean} from './ocean.js';
import './style.css';
import {createShip} from './ship.js';
import {createPlayer} from './player.js';
import {createLighting} from './lighting.js';
import {createBoatMotion} from './camera-motion.js';

const app=document.querySelector('#app');
app.innerHTML=`<header class="heading"><div class="eyebrow">A STUDY IN STILLNESS & MOTION</div><h1>OCEAN CRUISE</h1><p>끝없이 펼쳐지는 바다, 항해의 시작.</p><span class="tag">PROTOTYPE / 0.1</span></header><details open><summary aria-label="바다 설정 메뉴"><span class="desktop-menu-title">OCEAN CONTROLS · 바다 설정</span><span class="mobile-menu-title" aria-hidden="true">☰</span></summary><div class="panel"><div class="section">VIEW / 시점</div><div class="time-presets"><button id="deck-view" aria-pressed="true">갑판</button><button id="ocean-view" aria-pressed="false">바다 전체</button></div><div class="section">SKY / 낮과 밤</div><div class="time-presets"><button data-hour="12">낮</button><button data-hour="18">석양</button><button data-hour="0">밤</button></div><label><span>시간 <output id="time-label">18:00</output></span><input id="time-of-day" aria-label="하루 시간" type="range" min="0" max="24" step="0.05" value="18"></label><div class="section">SURFACE / 수면</div><div id="sliders"></div><div class="section">PALETTE / 거리별 바다색</div><div id="colors"></div><button id="reset">기본값으로 초기화</button></div></details><footer class="bottom"><span>WASD / 방향키 · 이동 &nbsp; 드래그 · 둘러보기 &nbsp; 스크롤 · 줌</span><span id="stats">수면 준비 중</span></footer>`;
const settingsPanel=document.querySelector('details');
const mobileViewport=matchMedia('(max-width: 600px)');
const syncPanel=()=>{settingsPanel.open=!mobileViewport.matches;};
syncPanel();mobileViewport.addEventListener('change',syncPanel);
addEventListener('keydown',event=>{if(event.key==='Escape'&&mobileViewport.matches)settingsPanel.open=false;});
const renderer=new THREE.WebGLRenderer({antialias:true});renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.setSize(innerWidth,innerHeight);renderer.setClearColor('#a3d1db');app.prepend(renderer.domElement);
renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;
const scene=new THREE.Scene();
const camera=new THREE.PerspectiveCamera(50,innerWidth/innerHeight,.5,50000);camera.position.set(0,8.8,-12);
const controls=new OrbitControls(camera,renderer.domElement);controls.target.set(0,8.5,-20);controls.enableDamping=true;controls.enablePan=false;controls.minDistance=3;controls.maxDistance=320;controls.minPolarAngle=.15;controls.maxPolarAngle=Math.PI/2-.02;controls.update();
function setView(overview){
  const scale=Math.min(1.8,Math.max(1,.9/camera.aspect));
  camera.position.set(...(overview?[100*scale,65*scale,125*scale]:[0,8.8,-12]));
  controls.target.set(...(overview?[0,0,0]:[0,8.5,-20]));controls.update();
  document.querySelector('#deck-view').setAttribute('aria-pressed',String(!overview));
  document.querySelector('#ocean-view').setAttribute('aria-pressed',String(overview));
}
document.querySelector('#deck-view').onclick=()=>setView(false);
document.querySelector('#ocean-view').onclick=()=>setView(true);
const ocean=createOcean();scene.add(ocean.mesh);
const lighting=createLighting(scene,ocean);
const ship=createShip();scene.add(ship);
const character=createPlayer(scene,camera,controls);
controls.maxDistance=320;
if(new URLSearchParams(location.search).get('view')==='ocean')setView(true);
const boatMotion=createBoatMotion(camera);
const params={cameraMotion:matchMedia('(prefers-reduced-motion: reduce)').matches?0:.6,hour:18,curvature:1,height:.55,waveSize:1,normalStrength:0,naturalSpeed:.6,speed:8,wake:.65};const defaults={...params};let naturalTime=0,travel=0;
const hourInput=document.querySelector('#time-of-day');
function setHour(hour){params.hour=hour;hourInput.value=hour;const minutes=Math.round(hour*60);document.querySelector('#time-label').value=`${String(Math.floor(minutes/60)).padStart(2,'0')}:${String(minutes%60).padStart(2,'0')}`;document.querySelectorAll('[data-hour]').forEach(button=>button.setAttribute('aria-pressed',String(Number(button.dataset.hour)===hour)));}
hourInput.addEventListener('input',event=>setHour(Number(event.target.value)));
document.querySelectorAll('[data-hour]').forEach(button=>button.addEventListener('click',()=>setHour(Number(button.dataset.hour))));setHour(18);
const requestedHour=new URLSearchParams(location.search).get('hour');
if(requestedHour!==null&&Number.isFinite(Number(requestedHour)))setHour(Math.max(0,Math.min(24,Number(requestedHour))));
const settings=[['cameraMotion','카메라 흔들림',0,1,.05],['curvature','지평선 곡률',0,4,.05],['height','파도 높이',0,2,.05],['waveSize','파도 크기 · 파장 배율',.5,3,.05],['normalStrength','잔물결 강도 · 0=끔',0,1,.05],['naturalSpeed','자연 파도 속도',0,3,.05],['speed','항해 속도 · m/s',0,20,.1],['wake','항적 강도',0,1,.05]];
for(const [key,title,min,max,step] of settings){const label=document.createElement('label');label.innerHTML=`<span>${title}<output>${params[key].toFixed(2)}</output></span><input aria-label="${title}" type="range" min="${min}" max="${max}" step="${step}" value="${params[key]}">`;label.querySelector('input').addEventListener('input',e=>{params[key]=Number(e.target.value);label.querySelector('output').value=params[key].toFixed(2);});document.querySelector('#sliders').append(label);}
const palette={horizon:'#52798b',mid:'#17455c',near:'#105064',deep:'#062839'};
for(const [key,value] of Object.entries(palette)){const label=document.createElement('label');label.className='color';label.innerHTML=`<span>${key[0].toUpperCase()+key.slice(1)} <small>${value}</small></span><input aria-label="${key} color" type="color" value="${value}">`;label.querySelector('input').addEventListener('input',e=>{ocean.uniforms[key].value.set(e.target.value);label.querySelector('small').textContent=e.target.value;});document.querySelector('#colors').append(label);}
document.querySelector('#reset').onclick=()=>{Object.assign(params,defaults);setHour(defaults.hour);document.querySelectorAll('#sliders input').forEach((input,i)=>{input.value=params[settings[i][0]];input.dispatchEvent(new Event('input'));});document.querySelectorAll('#colors input').forEach((input,i)=>{input.value=Object.values(palette)[i];input.dispatchEvent(new Event('input'));});};
addEventListener('resize',()=>{camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();renderer.setSize(innerWidth,innerHeight);});
let previous=performance.now(),elapsed=0,frames=0;
renderer.setAnimationLoop(now=>{const wallDt=(now-previous)/1000;const dt=Math.min(wallDt,.05);previous=now;naturalTime+=dt*params.naturalSpeed;travel+=dt*params.speed;for(const key of ['curvature','height','waveSize','normalStrength','speed','wake'])ocean.uniforms[key].value=params[key];ocean.uniforms.time.value=naturalTime;ocean.uniforms.travel.value=travel;lighting.update(params.hour,dt);character.update(dt);controls.update();lighting.follow(character.player.position);boatMotion.render(renderer,scene,dt,params.cameraMotion,controls.getDistance());elapsed+=wallDt;frames++;if(elapsed>.5){document.querySelector('#stats').textContent=`${Math.round(frames/elapsed)} FPS · ${renderer.info.render.calls} CALLS · ${renderer.info.render.triangles.toLocaleString()} TRIANGLES`;elapsed=0;frames=0;}});
// Read-only diagnostics for smoke checks and performance inspection.
window.oceanCruise={renderer,scene,camera,controls,ship,player:character.player,lighting,params,uniforms:ocean.uniforms};
