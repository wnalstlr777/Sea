import * as THREE from 'three';
import {SHIP,PLAYER_RADIUS,constrainToDeck} from './ship.js';

export function createPlayer(scene,camera,controls){
  const player=new THREE.Group();player.position.set(0,SHIP.deckY,-8);
  const capsule=new THREE.Mesh(new THREE.CapsuleGeometry(.38,1.04,6,12),new THREE.MeshStandardMaterial({color:'#e7a05d',roughness:.65}));capsule.position.y=.9;player.add(capsule);
  const visor=new THREE.Mesh(new THREE.BoxGeometry(.38,.14,.08),new THREE.MeshStandardMaterial({color:'#144955'}));visor.position.set(0,1.45,-.36);player.add(visor);scene.add(player);
  controls.target.copy(player.position).add(new THREE.Vector3(0,1.3,0));camera.position.copy(controls.target).add(new THREE.Vector3(0,2.2,7));controls.minDistance=2;controls.maxDistance=100;controls.update();
  const keys=new Set(),stick=new THREE.Vector2(),forward=new THREE.Vector3(),right=new THREE.Vector3(),movement=new THREE.Vector3();
  const movementKeys=['KeyW','KeyA','KeyS','KeyD','ArrowUp','ArrowLeft','ArrowDown','ArrowRight'];
  addEventListener('keydown',e=>{if(e.target.closest?.('input,button,summary,textarea,select'))return;if(movementKeys.includes(e.code)){e.preventDefault();keys.add(e.code);}});
  addEventListener('keyup',e=>keys.delete(e.code));
  const pad=document.createElement('div');pad.id='joystick';pad.setAttribute('aria-label','갑판 이동 조이스틱');pad.innerHTML='<span class="stick-knob"></span><span class="stick-label">이동</span>';document.querySelector('#app').append(pad);
  let pointer=null;
  const reset=()=>{pointer=null;stick.set(0,0);pad.firstElementChild.style.transform='translate(0px,0px)';};
  const setStick=e=>{const r=pad.getBoundingClientRect();stick.set((e.clientX-r.left-r.width/2)/38,(e.clientY-r.top-r.height/2)/38);if(stick.length()>1)stick.normalize();pad.firstElementChild.style.transform=`translate(${stick.x*30}px,${stick.y*30}px)`;};
  pad.addEventListener('pointerdown',e=>{if(pointer!==null)return;e.preventDefault();pointer=e.pointerId;pad.setPointerCapture(pointer);setStick(e);});
  pad.addEventListener('pointermove',e=>{if(e.pointerId===pointer)setStick(e);});
  for(const event of ['pointerup','pointercancel','lostpointercapture'])pad.addEventListener(event,e=>{if(e.pointerId===pointer)reset();});
  addEventListener('blur',()=>{keys.clear();reset();});document.addEventListener('visibilitychange',()=>{if(document.hidden){keys.clear();reset();}});
  function update(dt){
    const x=Number(keys.has('KeyD')||keys.has('ArrowRight'))-Number(keys.has('KeyA')||keys.has('ArrowLeft'))+stick.x;
    const z=Number(keys.has('KeyW')||keys.has('ArrowUp'))-Number(keys.has('KeyS')||keys.has('ArrowDown'))-stick.y;
    if(!x&&!z)return;
    camera.getWorldDirection(forward);forward.y=0;forward.normalize();right.crossVectors(forward,THREE.Object3D.DEFAULT_UP).normalize();movement.copy(forward).multiplyScalar(z).addScaledVector(right,x);if(movement.length()>1)movement.normalize();movement.multiplyScalar(3.5*dt);
    const previous=player.position.clone();player.position.add(movement);constrainToDeck(player.position,PLAYER_RADIUS+.12);const delta=player.position.clone().sub(previous);
    if(delta.lengthSq()>1e-8)player.rotation.y=Math.atan2(-delta.x,-delta.z);
    camera.position.add(delta);controls.target.add(delta);
  }
  return {player,update};
}
