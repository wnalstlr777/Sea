import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {createOcean} from './ocean.js';
import './style.css';
import {createShip} from './ship.js';
import {createPlayer} from './player.js';

const app=document.querySelector('#app');
app.innerHTML=`<header class="heading"><div class="eyebrow">A STUDY IN STILLNESS & MOTION</div><h1>OCEAN CRUISE</h1><p>끝없이 펼쳐지는 바다, 항해의 시작.</p><span class="tag">PROTOTYPE / 0.1</span></header><details open><summary aria-label="바다 설정 메뉴"><span class="desktop-menu-title">OCEAN CONTROLS · 바다 설정</span><span class="mobile-menu-title" aria-hidden="true">☰</span></summary><div class="panel"><div class="section">SURFACE / 수면</div><div id="sliders"></div><div class="section">PALETTE / 거리별 바다색</div><div id="colors"></div><button id="reset">기본값으로 초기화</button></div></details><footer class="bottom"><span>WASD / 방향키 · 이동 &nbsp; 드래그 · 둘러보기 &nbsp; 스크롤 · 줌</span><span id="stats">수면 준비 중</span></footer>`;
const settingsPanel=document.querySelector('details');
const mobileViewport=matchMedia('(max-width: 600px)');
const syncPanel=()=>{settingsPanel.open=!mobileViewport.matches;};
syncPanel();mobileViewport.addEventListener('change',syncPanel);
addEventListener('keydown',event=>{if(event.key==='Escape'&&mobileViewport.matches)settingsPanel.open=false;});
const renderer=new THREE.WebGLRenderer({antialias:true});renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.setSize(innerWidth,innerHeight);renderer.setClearColor('#a3d1db');app.prepend(renderer.domElement);
const scene=new THREE.Scene();
const camera=new THREE.PerspectiveCamera(50,innerWidth/innerHeight,.5,50000);camera.position.set(0,8.8,-12);
const controls=new OrbitControls(camera,renderer.domElement);controls.target.set(0,8.5,-20);controls.enableDamping=true;controls.enablePan=false;controls.minDistance=3;controls.maxDistance=320;controls.minPolarAngle=.15;controls.maxPolarAngle=Math.PI/2-.02;controls.update();
const sky=new THREE.Mesh(new THREE.SphereGeometry(24000,32,20),new THREE.ShaderMaterial({side:THREE.BackSide,depthWrite:false,vertexShader:`varying vec3 dir; void main(){dir=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:`varying vec3 dir;void main(){float h=normalize(dir).y;vec3 c=mix(vec3(.64,.82,.86),vec3(.25,.58,.76),smoothstep(0.,.85,h));vec3 sun=normalize(vec3(-.6,.75,-.5));float s=max(dot(normalize(dir),sun),0.);c+=vec3(1.,.88,.62)*pow(s,450.)*.7;gl_FragColor=vec4(c,1.);#include <tonemapping_fragment>\n#include <colorspace_fragment>}`.replace(';#include',';\n#include')}));scene.add(sky);
scene.add(new THREE.HemisphereLight('#ebfcff','#397786',2.4));const sunlight=new THREE.DirectionalLight('#fff3d6',2.5);sunlight.position.set(-60,100,-50);scene.add(sunlight);
const ocean=createOcean();scene.add(ocean.mesh);
const ship=createShip();scene.add(ship);
const character=createPlayer(scene,camera,controls);
const params={curvature:1,height:.55,naturalSpeed:1,speed:8,wake:.65};const defaults={...params};let naturalTime=0,travel=0;
const settings=[['curvature','지평선 곡률',0,4,.05],['height','파도 높이',0,2,.05],['naturalSpeed','자연 파도 속도',0,3,.05],['speed','항해 속도 · m/s',0,20,.1],['wake','항적 강도',0,1,.05]];
for(const [key,title,min,max,step] of settings){const label=document.createElement('label');label.innerHTML=`<span>${title}<output>${params[key].toFixed(2)}</output></span><input aria-label="${title}" type="range" min="${min}" max="${max}" step="${step}" value="${params[key]}">`;label.querySelector('input').addEventListener('input',e=>{params[key]=Number(e.target.value);label.querySelector('output').value=params[key].toFixed(2);});document.querySelector('#sliders').append(label);}
const palette={horizon:'#83cbd0',mid:'#218f9c',near:'#087e89',deep:'#075368'};
for(const [key,value] of Object.entries(palette)){const label=document.createElement('label');label.className='color';label.innerHTML=`<span>${key[0].toUpperCase()+key.slice(1)} <small>${value}</small></span><input aria-label="${key} color" type="color" value="${value}">`;label.querySelector('input').addEventListener('input',e=>{ocean.uniforms[key].value.set(e.target.value);label.querySelector('small').textContent=e.target.value;});document.querySelector('#colors').append(label);}
document.querySelector('#reset').onclick=()=>{Object.assign(params,defaults);document.querySelectorAll('#sliders input').forEach((input,i)=>{input.value=params[settings[i][0]];input.dispatchEvent(new Event('input'));});document.querySelectorAll('#colors input').forEach((input,i)=>{input.value=Object.values(palette)[i];input.dispatchEvent(new Event('input'));});};
addEventListener('resize',()=>{camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();renderer.setSize(innerWidth,innerHeight);});
let previous=performance.now(),elapsed=0,frames=0;
renderer.setAnimationLoop(now=>{const wallDt=(now-previous)/1000;const dt=Math.min(wallDt,.05);previous=now;naturalTime+=dt*params.naturalSpeed;travel+=dt*params.speed;for(const key of ['curvature','height','speed','wake'])ocean.uniforms[key].value=params[key];ocean.uniforms.time.value=naturalTime;ocean.uniforms.travel.value=travel;character.update(dt);controls.update();renderer.render(scene,camera);elapsed+=wallDt;frames++;if(elapsed>.5){document.querySelector('#stats').textContent=`${Math.round(frames/elapsed)} FPS · ${renderer.info.render.calls} CALLS · ${renderer.info.render.triangles.toLocaleString()} TRIANGLES`;elapsed=0;frames=0;}});
// Read-only diagnostics for smoke checks and performance inspection.
window.oceanCruise={renderer,scene,camera,controls,ship,player:character.player,params,uniforms:ocean.uniforms};
