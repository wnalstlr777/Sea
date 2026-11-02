import * as THREE from 'three';
import {SHIP,PLAYER_RADIUS,constrainToDeck} from './ship.js';
import {createSurvivor,disposeSurvivor} from './survivor.js';

export function createPlayer(scene,camera,controls){
  const player=new THREE.Group();player.position.set(0,SHIP.deckY,-24);
  const characterId=Math.random()<.5?'hina':'daeun';
  player.userData.characterId=characterId;
  let avatar=createSurvivor(characterId),enabled=true,sitting=false,lying=false,bedAnchor=null;
  player.userData.hairColor='black';
  // Survival models face +Z; Sea movement and the existing camera face -Z.
  avatar.mesh.rotation.y=Math.PI;player.add(avatar.mesh);scene.add(player);
  // Soft contact shading remains underfoot during the twilight lighting gap.
  const contact=new THREE.Mesh(new THREE.PlaneGeometry(1.5,1.5),new THREE.ShaderMaterial({transparent:true,depthWrite:false,polygonOffset:true,polygonOffsetFactor:-1,uniforms:{},vertexShader:`varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:`varying vec2 vUv;void main(){float r=length((vUv-.5)*2.);gl_FragColor=vec4(0.,0.,0.,(1.-smoothstep(.15,1.,r))*.18);}`}));
  contact.rotation.x=-Math.PI/2;contact.position.y=.012;player.add(contact);
  controls.target.copy(player.position).add(new THREE.Vector3(0,1.3,0));camera.position.copy(controls.target).add(new THREE.Vector3(0,2.2,7));controls.minDistance=2;controls.maxDistance=100;controls.update();
  const keys=new Set(),stick=new THREE.Vector2(),forward=new THREE.Vector3(),right=new THREE.Vector3(),movement=new THREE.Vector3();
  const movementKeys=['KeyW','KeyA','KeyS','KeyD','ArrowUp','ArrowLeft','ArrowDown','ArrowRight'];
  addEventListener('keydown',e=>{if(e.target.closest?.('input,button,summary,textarea,select'))return;if(movementKeys.includes(e.code)){e.preventDefault();keys.add(e.code);}});
  addEventListener('keyup',e=>keys.delete(e.code));
  const pad=document.createElement('div');pad.id='joystick';pad.setAttribute('aria-label','갑판 이동 조이스틱');pad.innerHTML='<span class="stick-knob"></span><span class="stick-label">이동</span>';document.querySelector('#app').append(pad);
  let pointer=null;
  const reset=()=>{pad.classList.remove('active');player.userData.moving=false;pointer=null;stick.set(0,0);pad.firstElementChild.style.transform='translate(0px,0px)';};
  const setStick=e=>{const r=pad.getBoundingClientRect();stick.set((e.clientX-r.left-r.width/2)/38,(e.clientY-r.top-r.height/2)/38);if(stick.length()>1)stick.normalize();pad.firstElementChild.style.transform=`translate(${stick.x*30}px,${stick.y*30}px)`;};
  pad.addEventListener('pointerdown',e=>{if(pointer!==null)return;e.preventDefault();pointer=e.pointerId;pad.classList.add('active');pad.setPointerCapture(pointer);setStick(e);});
  pad.addEventListener('pointermove',e=>{if(e.pointerId===pointer)setStick(e);});
  for(const event of ['pointerup','pointercancel','lostpointercapture'])pad.addEventListener(event,e=>{if(e.pointerId===pointer)reset();});
  addEventListener('blur',()=>{keys.clear();reset();});document.addEventListener('visibilitychange',()=>{if(document.hidden){keys.clear();reset();}});
  function setCharacter(id,hairColor='black'){
    if(player.userData.characterId===id&&player.userData.hairColor===hairColor)return;
    player.remove(avatar.mesh);disposeSurvivor(avatar.mesh);
    avatar=createSurvivor(id,hairColor);avatar.mesh.rotation.y=Math.PI;player.add(avatar.mesh);player.userData.characterId=id;player.userData.hairColor=hairColor;
  }
  const sitButton=document.createElement('button');sitButton.id='sit-toggle';sitButton.type='button';sitButton.textContent='앉기';sitButton.setAttribute('aria-pressed','false');document.querySelector('#app').append(sitButton);
  function setSitting(value){sitting=value;player.userData.sitting=value;sitButton.textContent=value?'일어서기':'앉기';sitButton.setAttribute('aria-pressed',String(value));}
  sitButton.addEventListener('click',()=>{if(lying)standUp();setSitting(!sitting);});
  // Client-side jump: keep the networked root at deck height because the
  // current Workers protocol only accepts y === SHIP.deckY.
  const jumpButton=document.createElement('button');jumpButton.id='jump-toggle';jumpButton.type='button';jumpButton.textContent='점프';jumpButton.setAttribute('aria-label','점프');document.querySelector('#app').append(jumpButton);
  const JUMP_SPEED=10.6,GRAVITY=13.5,HEAD_HEIGHT=2.95;
  let jumpHeight=0,jumpVelocity=0,headSupport=null;
  function jump(){
    if(!enabled||jumpHeight>.03||jumpVelocity>0)return;
    if(lying)standUp();if(sitting)setSitting(false);
    headSupport=null;jumpVelocity=JUMP_SPEED;
  }
  jumpButton.addEventListener('click',jump);
  addEventListener('keydown',e=>{
    if(e.code!=='Space'||e.repeat||e.target.closest?.('input,button,summary,textarea,select'))return;
    e.preventDefault();jump();
  });
  function updateJump(dt){
    if(!enabled){jumpHeight=0;jumpVelocity=0;headSupport=null;avatar.mesh.position.y=lying?.16:0;return;}
    const step=Math.min(dt,.05);
    if(jumpVelocity!==0||jumpHeight>0){
      const before=jumpHeight;
      jumpHeight+=jumpVelocity*step-.5*GRAVITY*step*step;
      jumpVelocity-=GRAVITY*step;
      // Local-only landing on another player's head, using the current
      // interpolated remote avatar positions. Does not change server state.
      if(jumpVelocity<0&&before>=HEAD_HEIGHT-.1&&jumpHeight<=HEAD_HEIGHT){
        const remote=scene.children.find(obj=>obj.name?.startsWith('remote-')&&Math.hypot(obj.position.x-player.position.x,obj.position.z-player.position.z)<.65);
        if(remote){jumpHeight=HEAD_HEIGHT;jumpVelocity=0;headSupport=remote;}
      }
      if(jumpHeight<=0){jumpHeight=0;jumpVelocity=0;headSupport=null;}
    }
    if(headSupport){
      const near=Math.hypot(headSupport.position.x-player.position.x,headSupport.position.z-player.position.z)<.7;
      if(!headSupport.parent||!near){headSupport=null;jumpVelocity=-.01;}
      else jumpHeight=HEAD_HEIGHT;
    }
    if(!lying)avatar.mesh.position.y=jumpHeight;
  }

  function lieOn(anchor){if(!enabled)return;jumpHeight=0;jumpVelocity=0;headSupport=null;setSitting(false);lying=true;bedAnchor=anchor.clone();player.position.set(anchor.x,SHIP.deckY,anchor.z);player.rotation.y=0;avatar.mesh.position.set(0,.16,-.98);avatar.mesh.rotation.set(1.30,Math.PI,0);contact.visible=false;player.userData.lying=true;resetView();}
  function standUp(){if(!lying)return;lying=false;bedAnchor=null;player.position.y=SHIP.deckY;avatar.mesh.position.set(0,0,0);avatar.mesh.rotation.set(0,Math.PI,0);contact.visible=true;player.userData.lying=false;resetView();}
  function resetView(){const damping=controls.enableDamping;controls.enableDamping=false;controls.update();controls.target.copy(player.position).add(new THREE.Vector3(0,1.3,0));camera.position.copy(controls.target).add(new THREE.Vector3(0,2.2,7));controls.update();controls.enableDamping=damping;}
  function setEnabled(value){enabled=value;if(!value){keys.clear();reset();player.userData.moving=false;}}
  function update(dt){
    updateJump(dt);
    if(!enabled){player.userData.moving=false;avatar.update(dt,false,lying?false:sitting);return;}
    const x=Number(keys.has('KeyD')||keys.has('ArrowRight'))-Number(keys.has('KeyA')||keys.has('ArrowLeft'))+stick.x;
    const z=Number(keys.has('KeyW')||keys.has('ArrowUp'))-Number(keys.has('KeyS')||keys.has('ArrowDown'))-stick.y;
    if(!x&&!z){player.userData.moving=false;avatar.update(dt,false,lying?false:sitting);return;}
    if(lying)standUp();
    if(sitting)setSitting(false);
    if(headSupport){headSupport=null;jumpVelocity=-.01;}
    camera.getWorldDirection(forward);forward.y=0;forward.normalize();right.crossVectors(forward,THREE.Object3D.DEFAULT_UP).normalize();movement.copy(forward).multiplyScalar(z).addScaledVector(right,x);if(movement.length()>1)movement.normalize();movement.multiplyScalar(5.25*dt);
    const previous=player.position.clone();player.position.add(movement);constrainToDeck(player.position,PLAYER_RADIUS+.12);const delta=player.position.clone().sub(previous);
    if(delta.lengthSq()>1e-8)player.rotation.y=Math.atan2(-delta.x,-delta.z);
    player.userData.moving=delta.lengthSq()>1e-8;avatar.update(dt,player.userData.moving);
    camera.position.add(delta);controls.target.add(delta);
  }
  return {player,update,setCharacter,setEnabled,resetView,lieOn,standUp,isLying:()=>lying};
}
