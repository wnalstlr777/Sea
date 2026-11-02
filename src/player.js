import * as THREE from 'three';
import {SHIP} from './ship.js';
import {NETWORK_TO_VISUAL_Y,VISUAL_DECK_Y} from './ship.js';
import {createSurvivor,disposeSurvivor} from './survivor.js';

export function createPlayer(scene,camera,controls,deckCollision){
  const player=new THREE.Group();player.position.set(0,SHIP.deckY,-33);
  const characterId=Math.random()<.5?'hina':'daeun';
  player.userData.characterId=characterId;
  let avatar=createSurvivor(characterId),enabled=true,sitting=false,lying=false,bedAnchor=null;
  player.userData.hairColor='black';
  // Survival models face +Z; Sea movement and the existing camera face -Z.
  avatar.mesh.rotation.y=Math.PI;const jumpPivot=new THREE.Group();jumpPivot.add(avatar.mesh);player.add(jumpPivot);jumpPivot.position.y=NETWORK_TO_VISUAL_Y;scene.add(player);
  // Soft contact shading remains underfoot during the twilight lighting gap.
  const contact=new THREE.Mesh(new THREE.PlaneGeometry(1.5,1.5),new THREE.ShaderMaterial({transparent:true,depthWrite:false,polygonOffset:true,polygonOffsetFactor:-1,uniforms:{},vertexShader:`varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:`varying vec2 vUv;void main(){float r=length((vUv-.5)*2.);gl_FragColor=vec4(0.,0.,0.,(1.-smoothstep(.15,1.,r))*.18);}`}));
  contact.rotation.x=-Math.PI/2;contact.position.y=NETWORK_TO_VISUAL_Y+.012;player.add(contact);
  controls.target.copy(player.position).add(new THREE.Vector3(0,NETWORK_TO_VISUAL_Y+1.3,0));camera.position.copy(controls.target).add(new THREE.Vector3(0,2.2,7));controls.minDistance=2;controls.maxDistance=100;controls.update();
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
    jumpPivot.remove(avatar.mesh);disposeSurvivor(avatar.mesh);
    avatar=createSurvivor(id,hairColor);avatar.mesh.rotation.y=Math.PI;jumpPivot.add(avatar.mesh);if(lying){avatar.mesh.position.copy(lieTargetPos);avatar.mesh.quaternion.copy(lieTargetQuat);lieTransition=null;}player.userData.characterId=id;player.userData.hairColor=hairColor;
  }
  const sitButton=document.createElement('button');sitButton.id='sit-toggle';sitButton.type='button';sitButton.textContent='앉기';sitButton.setAttribute('aria-pressed','false');document.querySelector('#app').append(sitButton);
  function setSitting(value){sitting=value;player.userData.sitting=value;sitButton.textContent=value?'일어서기':'앉기';sitButton.setAttribute('aria-pressed',String(value));}
  sitButton.addEventListener('click',()=>{if(lying)standUp();setSitting(!sitting);});
  // Client-side jump: keep the networked root at deck height because the
  // current Workers protocol only accepts y === SHIP.deckY.
  const jumpButton=document.createElement('button');jumpButton.id='jump-toggle';jumpButton.type='button';jumpButton.textContent='점프';jumpButton.setAttribute('aria-label','점프');document.querySelector('#app').append(jumpButton);
  const JUMP_SPEED=10.6,GRAVITY=13.5,HEAD_HEIGHT=2.95;
  const WATER_SURFACE_Y=0.35, RESPAWN_X=0, RESPAWN_Z=-33;
  let overboard=false, fallOffset=0, waterTime=0, returnFlight=null;
  let lastFloorY=VISUAL_DECK_Y;
  const visualBaseY=SHIP.deckY+NETWORK_TO_VISUAL_Y;
  let jumpHeight=0,jumpVelocity=0,headSupport=null,jumpPose=0;
  let lieTransition=null;
  const LIE_DURATION=1.6;
  // Character local +Y (head) -> bed +Z (backrest); local +Z (face) -> world +Y (sky).
  // Compose rotations explicitly to avoid Euler order ambiguity and upside-down faces.
  const lieTargetQuat=new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1,0,0),-Math.PI/2)
    .multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,0,1),Math.PI));
  // Upright +Y becomes bed head-end +Z; front (+Z) points toward the sky (+Y).
  const lieTargetPos=new THREE.Vector3(0,.58,-1.08);
  // Original two-part cartoon spring sound (not sampled from any game).
  let jumpAudio=null;
  function playJumpSound(){
    try{
      const Ctx=window.AudioContext||window.webkitAudioContext;
      if(!Ctx)return;
      if(!jumpAudio)jumpAudio=new Ctx();
      if(jumpAudio.state==='suspended')jumpAudio.resume().catch(()=>{});
      const now=jumpAudio.currentTime;
      for(const [delay,from,to,duration,volume] of [[0,270,650,.15,.18],[.065,510,960,.19,.105]]){
        const osc=jumpAudio.createOscillator(),gain=jumpAudio.createGain();
        osc.type='triangle';osc.frequency.setValueAtTime(from,now+delay);
        osc.frequency.exponentialRampToValueAtTime(to,now+delay+duration);
        gain.gain.setValueAtTime(.0001,now+delay);
        gain.gain.exponentialRampToValueAtTime(volume,now+delay+.018);
        gain.gain.exponentialRampToValueAtTime(.0001,now+delay+duration);
        osc.connect(gain);gain.connect(jumpAudio.destination);
        osc.start(now+delay);osc.stop(now+delay+duration+.02);
        osc.onended=()=>{osc.disconnect();gain.disconnect();};
      }
    }catch{/* Audio is optional if the browser blocks playback. */}
  }
  function returnToDeck(){
    // Launch from the water in a visible arc, never teleport to the deck.
    const floor=deckCollision.floorAt(RESPAWN_X,RESPAWN_Z);
    const destinationY=floor??VISUAL_DECK_Y;
    returnFlight={elapsed:0,duration:1.75,
      startX:player.position.x,startZ:player.position.z,
      startY:visualBaseY+fallOffset,
      endX:RESPAWN_X,endZ:RESPAWN_Z,endY:destinationY};
    overboard=false;
    waterTime=0;
    headSupport=null;jumpVelocity=0;jumpHeight=0;
    playJumpSound();
    player.userData.inWater=false;
  }
  function updateReturnFlight(dt){
    if(!returnFlight)return false;
    const f=returnFlight;
    f.elapsed+=Math.min(dt,.05);
    const t=Math.min(1,f.elapsed/f.duration);
    const smooth=t*t*(3-2*t);
    const x=THREE.MathUtils.lerp(f.startX,f.endX,smooth);
    const z=THREE.MathUtils.lerp(f.startZ,f.endZ,smooth);
    // Quadratic arch added to the rising travel path; apex clears the rail.
    const y=THREE.MathUtils.lerp(f.startY,f.endY,smooth)+8*4*t*(1-t);
    const previousX=player.position.x,previousZ=player.position.z,previousY=visualBaseY+fallOffset;
    player.position.x=x;player.position.z=z;
    fallOffset=y-visualBaseY;
    jumpPivot.position.y=NETWORK_TO_VISUAL_Y+fallOffset;
    camera.position.x+=x-previousX;controls.target.x+=x-previousX;
    camera.position.z+=z-previousZ;controls.target.z+=z-previousZ;
    camera.position.y+=y-previousY;controls.target.y+=y-previousY;
    jumpPose+=(1-jumpPose)*(1-Math.exp(-dt*16));
    if(t>=1){returnFlight=null;lastFloorY=f.endY;contact.visible=true;}
    return true;
  }
  function jump(){
    if(!enabled)return;
    if(returnFlight)return;
    if(overboard){returnToDeck();return;}
    if(jumpHeight>.03||jumpVelocity>0)return;
    if(lying)standUp();if(sitting)setSitting(false);
    headSupport=null;jumpVelocity=JUMP_SPEED;playJumpSound();
  }
  jumpButton.addEventListener('click',jump);
  // Space jumps even after clicking UI buttons. Only editable fields retain Space.
  addEventListener('keydown',e=>{
    if((e.code!=='Space'&&e.key!==' ')||e.repeat||e.altKey||e.ctrlKey||e.metaKey)return;
    const target=e.target;
    if(target?.isContentEditable||target?.closest?.('input,textarea,select,[contenteditable]'))return;
    e.preventDefault();
    jump();
  }, {capture:true});
  function updateJump(dt){
    if(!enabled){jumpHeight=0;jumpVelocity=0;jumpPose=0;headSupport=null;jumpPivot.position.y=NETWORK_TO_VISUAL_Y;return;}
    const step=Math.min(dt,.05);
    if(updateReturnFlight(step))return;
    if(overboard){
      // No water physics/server changes: animate the avatar locally above the ocean.
      const desired=WATER_SURFACE_Y-(SHIP.deckY+NETWORK_TO_VISUAL_Y);
      const old=fallOffset;
      fallOffset=Math.max(desired,fallOffset-GRAVITY*step*2.2);
      if(fallOffset<=desired+.01){waterTime+=step;fallOffset=desired+Math.sin(waterTime*2.4)*.12;}
      const shift=fallOffset-old;
      camera.position.y+=shift;controls.target.y+=shift;
      jumpPivot.position.y=NETWORK_TO_VISUAL_Y+fallOffset;
      jumpPose+=(0-jumpPose)*(1-Math.exp(-step*16));
      return;
    }
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
    const groundOffset=lastFloorY-VISUAL_DECK_Y;
    jumpPivot.position.y=NETWORK_TO_VISUAL_Y+(lying?0:jumpHeight+groundOffset);
    const targetPose=jumpHeight>.04||jumpVelocity>0?1:0;
    jumpPose+=(targetPose-jumpPose)*(1-Math.exp(-step*16));
  }

  function lieOn(anchor){
    if(!enabled)return;
    if(overboard)return;
    jumpHeight=0;jumpVelocity=0;jumpPose=0;headSupport=null;setSitting(false);
    lying=true;bedAnchor={...anchor};
    // Snap to the bed's fixed coordinate system, never the approach direction.
    player.position.set(anchor.x,SHIP.deckY,anchor.z);player.rotation.y=anchor.heading??0;
    jumpPivot.position.y=NETWORK_TO_VISUAL_Y;
    // Animate from an upright, centered pose to the same bed-aligned resting pose.
    avatar.mesh.position.set(0,0,0);
    avatar.mesh.rotation.set(0,Math.PI,0);
    lieTransition={elapsed:0,startPos:avatar.mesh.position.clone(),startQuat:avatar.mesh.quaternion.clone()};
    contact.visible=false;player.userData.lying=true;resetView();
  }
  function standUp(){
    if(!lying)return;
    lying=false;bedAnchor=null;lieTransition=null;
    player.position.y=SHIP.deckY;
    avatar.mesh.position.set(0,0,0);avatar.mesh.rotation.set(0,Math.PI,0);
    contact.visible=true;player.userData.lying=false;resetView();
  }
  function updateLie(dt){
    if(!lying)return;
    if(lieTransition){
      lieTransition.elapsed+=Math.min(dt,.05);
      const t=Math.min(1,lieTransition.elapsed/LIE_DURATION);
      const ease=t*t*(3-2*t);
      avatar.mesh.position.copy(lieTransition.startPos).lerp(lieTargetPos,ease);
      avatar.mesh.quaternion.copy(lieTransition.startQuat).slerp(lieTargetQuat,ease);
      if(t>=1)lieTransition=null;
    }else{
      avatar.mesh.position.copy(lieTargetPos);
      avatar.mesh.quaternion.copy(lieTargetQuat);
    }
  }
  function resetView(){const damping=controls.enableDamping;controls.enableDamping=false;controls.update();controls.target.copy(player.position).add(new THREE.Vector3(0,NETWORK_TO_VISUAL_Y+1.3,0));camera.position.copy(controls.target).add(new THREE.Vector3(0,2.2,7));controls.update();controls.enableDamping=damping;}
  function setEnabled(value){enabled=value;if(!value){keys.clear();reset();player.userData.moving=false;}}
  function update(dt){
    updateJump(dt);
    updateLie(dt);
    if(!enabled){player.userData.moving=false;if(!lying)avatar.update(dt,false,sitting,jumpPose);return;}
    if(!overboard&&!returnFlight&&deckCollision.ready()){
      const stationaryFloor=deckCollision.floorAt(player.position.x,player.position.z);
      if(stationaryFloor!==null)lastFloorY=stationaryFloor;
    }
    const x=Number(keys.has('KeyD')||keys.has('ArrowRight'))-Number(keys.has('KeyA')||keys.has('ArrowLeft'))+stick.x;
    const z=Number(keys.has('KeyW')||keys.has('ArrowUp'))-Number(keys.has('KeyS')||keys.has('ArrowDown'))-stick.y;
    if(!x&&!z){player.userData.moving=false;if(!lying)avatar.update(dt,false,sitting,jumpPose);return;}
    if(lying)standUp();
    if(sitting)setSitting(false);
    if(headSupport){headSupport=null;jumpVelocity=-.01;}
    camera.getWorldDirection(forward);forward.y=0;forward.normalize();right.crossVectors(forward,THREE.Object3D.DEFAULT_UP).normalize();movement.copy(forward).multiplyScalar(z).addScaledVector(right,x);if(movement.length()>1)movement.normalize();movement.multiplyScalar(5.25*dt);
    if(returnFlight){avatar.update(dt,false,false,jumpPose);return;}
    const previous=player.position.clone();player.position.add(movement);
    // The exported UCX surfaces, not the old rectangular deck, determine support.
    const floor=deckCollision.floorAt(player.position.x,player.position.z);
    if(!overboard&&floor!==null){lastFloorY=floor;}
    if(!overboard&&deckCollision.ready()&&floor===null){
      overboard=true;player.userData.inWater=true;
      if(lying)standUp();if(sitting)setSitting(false);
      fallOffset=lastFloorY-VISUAL_DECK_Y;
      jumpHeight=0;jumpVelocity=0;headSupport=null;
      contact.visible=false;
    }
    const delta=player.position.clone().sub(previous);
    if(delta.lengthSq()>1e-8)player.rotation.y=Math.atan2(-delta.x,-delta.z);
    player.userData.moving=delta.lengthSq()>1e-8;avatar.update(dt,player.userData.moving&&!overboard,sitting,jumpPose);
    camera.position.add(delta);controls.target.add(delta);
  }
  return {player,update,setCharacter,setEnabled,resetView,lieOn,standUp,isLying:()=>lying};
}
