import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {createOcean} from './ocean.js';
import './style.css';

const app=document.querySelector('#app');
app.innerHTML=`<header class="heading"><div class="eyebrow">A STUDY IN STILLNESS & MOTION</div><h1>OCEAN CRUISE</h1><p>끝없이 펼쳐지는 바다, 항해의 시작.</p><span class="tag">PROTOTYPE / 0.1</span></header><details open><summary>OCEAN CONTROLS · 바다 설정</summary><div class="panel"><div class="section">SURFACE / 수면</div><div id="sliders"></div><div class="section">PALETTE / 거리별 바다색</div><div id="colors"></div><button id="reset">기본값으로 초기화</button></div></details><footer class="bottom"><span>드래그 · 360° 회전 &nbsp; / &nbsp; 스크롤 · 줌</span><span id="stats">수면 준비 중</span></footer>`;
const renderer=new THREE.WebGLRenderer({antialias:true});renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.setSize(innerWidth,innerHeight);renderer.setClearColor('#a3d1db');app.prepend(renderer.domElement);
const scene=new THREE.Scene();
const camera=new THREE.PerspectiveCamera(50,innerWidth/innerHeight,.5,50000);camera.position.set(76,46,95);
const controls=new OrbitControls(camera,renderer.domElement);controls.target.set(0,3,0);controls.enableDamping=true;controls.enablePan=false;controls.minDistance=35;controls.maxDistance=320;controls.minPolarAngle=.15;controls.maxPolarAngle=Math.PI/2-.07;controls.update();
const sky=new THREE.Mesh(new THREE.SphereGeometry(24000,32,20),new THREE.ShaderMaterial({side:THREE.BackSide,depthWrite:false,vertexShader:`varying vec3 dir; void main(){dir=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:`varying vec3 dir;void main(){float h=normalize(dir).y;vec3 c=mix(vec3(.64,.82,.86),vec3(.25,.58,.76),smoothstep(0.,.85,h));vec3 sun=normalize(vec3(-.6,.75,-.5));float s=max(dot(normalize(dir),sun),0.);c+=vec3(1.,.88,.62)*pow(s,450.)*.7;gl_FragColor=vec4(c,1.);#include <tonemapping_fragment>\n#include <colorspace_fragment>}`.replace(';#include',';\n#include')}));scene.add(sky);
scene.add(new THREE.HemisphereLight('#ebfcff','#397786',2.4));const sunlight=new THREE.DirectionalLight('#fff3d6',2.5);sunlight.position.set(-60,100,-50);scene.add(sunlight);
const ocean=createOcean();scene.add(ocean.mesh);
export const SHIP={length:40,width:12,height:6};
const ship=new THREE.Group();const box=new THREE.Mesh(new THREE.BoxGeometry(SHIP.width,SHIP.height,SHIP.length),new THREE.MeshStandardMaterial({color:'#e4ebe4',roughness:.65}));box.position.y=SHIP.height/2+.7;ship.add(box);
const deck=new THREE.Mesh(new THREE.BoxGeometry(12.12,.15,40.12),new THREE.MeshStandardMaterial({color:'#ceded7'}));deck.position.y=6.8;ship.add(deck);
// Simple forward chevron and stern stripe on the placeholder box.
const arrowShape=new THREE.Shape();arrowShape.moveTo(0,-4);arrowShape.lineTo(2.2,0);arrowShape.lineTo(.7,0);arrowShape.lineTo(.7,4);arrowShape.lineTo(-.7,4);arrowShape.lineTo(-.7,0);arrowShape.lineTo(-2.2,0);arrowShape.closePath();
const arrow=new THREE.Mesh(new THREE.ShapeGeometry(arrowShape),new THREE.MeshBasicMaterial({color:'#168f91',side:THREE.DoubleSide}));arrow.rotation.x=-Math.PI/2;arrow.rotation.z=Math.PI;arrow.position.set(0,6.91,-10);ship.add(arrow);
const stern=new THREE.Mesh(new THREE.BoxGeometry(10,.05,1),new THREE.MeshBasicMaterial({color:'#df9d5b'}));stern.position.set(0,6.91,17);ship.add(stern);scene.add(ship);
const params={curvature:1,height:.55,naturalSpeed:1,speed:8,wake:.65};const defaults={...params};let naturalTime=0,travel=0;
const settings=[['curvature','지평선 곡률',0,4,.05],['height','파도 높이',0,2,.05],['naturalSpeed','자연 파도 속도',0,3,.05],['speed','항해 속도 · m/s',0,20,.1],['wake','항적 강도',0,1,.05]];
for(const [key,title,min,max,step] of settings){const label=document.createElement('label');label.innerHTML=`<span>${title}<output>${params[key].toFixed(2)}</output></span><input aria-label="${title}" type="range" min="${min}" max="${max}" step="${step}" value="${params[key]}">`;label.querySelector('input').addEventListener('input',e=>{params[key]=Number(e.target.value);label.querySelector('output').value=params[key].toFixed(2);});document.querySelector('#sliders').append(label);}
const palette={horizon:'#83cbd0',mid:'#218f9c',near:'#087e89',deep:'#075368'};
for(const [key,value] of Object.entries(palette)){const label=document.createElement('label');label.className='color';label.innerHTML=`<span>${key[0].toUpperCase()+key.slice(1)} <small>${value}</small></span><input aria-label="${key} color" type="color" value="${value}">`;label.querySelector('input').addEventListener('input',e=>{ocean.uniforms[key].value.set(e.target.value);label.querySelector('small').textContent=e.target.value;});document.querySelector('#colors').append(label);}
document.querySelector('#reset').onclick=()=>{Object.assign(params,defaults);document.querySelectorAll('#sliders input').forEach((input,i)=>{input.value=params[settings[i][0]];input.dispatchEvent(new Event('input'));});document.querySelectorAll('#colors input').forEach((input,i)=>{input.value=Object.values(palette)[i];input.dispatchEvent(new Event('input'));});};
addEventListener('resize',()=>{camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();renderer.setSize(innerWidth,innerHeight);});
let previous=performance.now(),elapsed=0,frames=0;
renderer.setAnimationLoop(now=>{const wallDt=(now-previous)/1000;const dt=Math.min(wallDt,.05);previous=now;naturalTime+=dt*params.naturalSpeed;travel+=dt*params.speed;for(const key of ['curvature','height','speed','wake'])ocean.uniforms[key].value=params[key];ocean.uniforms.time.value=naturalTime;ocean.uniforms.travel.value=travel;controls.update();renderer.render(scene,camera);elapsed+=wallDt;frames++;if(elapsed>.5){document.querySelector('#stats').textContent=`${Math.round(frames/elapsed)} FPS · ${renderer.info.render.calls} CALLS · ${renderer.info.render.triangles.toLocaleString()} TRIANGLES`;elapsed=0;frames=0;}});
// Read-only diagnostics for smoke checks and performance inspection.
window.oceanCruise={renderer,scene,camera,controls,ship,params,uniforms:ocean.uniforms};
