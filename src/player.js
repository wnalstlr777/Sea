import * as THREE from 'three';
import {SHIP} from './ship.js';
import {NETWORK_TO_VISUAL_Y,VISUAL_DECK_Y} from './ship.js';
import {createSurvivor,disposeSurvivor} from './survivor.js';

export function createPlayer(scene,camera,controls,deckCollision){
  const player=new THREE.Group();player.position.set(0,SHIP.deckY,-27);
  const characterId=Math.random()<.5?'hina':'daeun';
  player.userData.characterId=characterId;
  let avatar=createSurvivor(characterId),enabled=true,sitting=false,lying=false,bedAnchor=null,titanicPose=false;
  player.userData.hairColor='black';
  // Survival models face +Z; Sea movement and the existing camera face -Z.
  avatar.mesh.rotation.y=Math.PI;const jumpPivot=new THREE.Group();jumpPivot.add(avatar.mesh);player.add(jumpPivot);jumpPivot.position.y=NETWORK_TO_VISUAL_Y;scene.add(player);
  // Soft contact shading remains underfoot during the twilight lighting gap.
  const contact=new THREE.Mesh(new THREE.PlaneGeometry(1.5,1.5),new THREE.ShaderMaterial({transparent:true,depthWrite:false,polygonOffset:true,polygonOffsetFactor:-1,uniforms:{},vertexShader:`varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:`varying vec2 vUv;void main(){float r=length((vUv-.5)*2.);gl_FragColor=vec4(0.,0.,0.,(1.-smoothstep(.15,1.,r))*.18);}`}));
  contact.rotation.x=-Math.PI/2;contact.position.y=NETWORK_TO_VISUAL_Y+.012;player.add(contact);
  controls.target.copy(player.position).add(new THREE.Vector3(0,NETWORK_TO_VISUAL_Y+1.3,0));camera.position.copy(controls.target).add(new THREE.Vector3(0,3.7,12.0));controls.minDistance=2;controls.maxDistance=100;controls.update();
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
  // Keep launch velocity; 1.5x gravity shortens airtime to 2/3 and peak height to 2/3.
  // Reach the 2.95m head platform (previous 10.6m/s jump peaked at only 2.77m).
  const JUMP_SPEED=11.6,GRAVITY=20.25;
  const WATER_SURFACE_Y=-1.35, RESPAWN_X=0, RESPAWN_Z=-27;
  let waterHeightAt=()=>0;
  let overboard=false, fallOffset=0, waterTime=0, returnFlight=null,launchFlight=null;
  let waterJumpCooldown=0,waterKickPulse=0,waterArmCheerTime=0;
  player.userData.waterKickPulse=0;
  let landingGrace=0;
  let fallVelocity=0,fallDriftX=0,fallDriftZ=0,fallAirborne=false;
  let lastMoveX=0,lastMoveZ=0;
  let landingPoint=null;
  let deckCameraOffset=null;
  let lastFloorY=VISUAL_DECK_Y,spawnValidated=false;
  const visualBaseY=SHIP.deckY+NETWORK_TO_VISUAL_Y;
  let jumpHeight=0,jumpVelocity=0,headSupport=null,jumpPose=0;
  let airborneFromEdge=false;
  const WALK_STEP_UP=1.25;
  let previousFeetY=null;
  // Follow the supporting remote's interpolated transform, including rotation.
  const supportLastPosition=new THREE.Vector3();
  let supportLastYaw=0;
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
  // Water camera follows horizontal motion but stays above the surface.
  function followWaterHeight(shift){
    if(!enabled)return; // Overview owns the camera while swimming continues.
    // Preserve the orbit offset without forcing the camera to a new elevation.
    const desiredTarget=controls.target.y+shift;
    const delta=desiredTarget-controls.target.y;
    controls.target.y=desiredTarget;
    camera.position.y+=delta;
  }
  function startFall(){
    if(overboard||returnFlight)return;
    // Remember the camera orbit before the water sequence changes its height.
    deckCameraOffset=camera.position.clone().sub(controls.target);
    overboard=true;player.userData.inWater=true;
    fallAirborne=true;waterTime=0;
    // Start from the current foot height, including an ongoing jump.
    fallOffset=lastFloorY-visualBaseY+jumpHeight;
    fallVelocity=jumpVelocity;
    fallDriftX=lastMoveX;fallDriftZ=lastMoveZ;
    jumpHeight=0;jumpVelocity=0;headSupport=null;
    contact.visible=false;
  }
  function returnToDeck(){
    // Launch from the water in a visible arc, never teleport to the deck.
    const safe=deckCollision.safeSpot(RESPAWN_X,RESPAWN_Z);
    if(!safe)return; // Never send the character to an unsupported point.
    const destinationY=safe.y;
    // The Worker allows 5.25m/s. Use constant horizontal speed (4.8m/s)
    // instead of slow smoothstep travel; retain the visual vertical arc.
    const distance=Math.hypot(safe.x-player.position.x,safe.z-player.position.z);
    landingPoint=safe;
    returnFlight={elapsed:0,duration:Math.max(1.0,distance/4.8),
      startX:player.position.x,startZ:player.position.z,
      startY:visualBaseY+fallOffset,
      endX:safe.x,endZ:safe.z,endY:destinationY};
    overboard=false;fallAirborne=false;
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
    const x=THREE.MathUtils.lerp(f.startX,f.endX,t);
    const z=THREE.MathUtils.lerp(f.startZ,f.endZ,t);
    // Quadratic arch added to the rising travel path; apex clears the rail.
    const y=THREE.MathUtils.lerp(f.startY,f.endY,t)+8*4*t*(1-t);
    const previousX=player.position.x,previousZ=player.position.z,previousY=visualBaseY+fallOffset;
    player.position.x=x;player.position.z=z;
    fallOffset=y-visualBaseY;
    jumpPivot.position.y=NETWORK_TO_VISUAL_Y+fallOffset;
    if(enabled){
      camera.position.x+=x-previousX;controls.target.x+=x-previousX;
      camera.position.z+=z-previousZ;controls.target.z+=z-previousZ;
    }
    followWaterHeight(y-previousY);
    jumpPose+=(1-jumpPose)*(1-Math.exp(-dt*16));
    if(t>=1){
      // Preserve the exact UCX landing height and align the camera with it.
      const landedY=f.endY;
      const finalOffset=landedY-visualBaseY;
      const correction=finalOffset-fallOffset;
      followWaterHeight(correction);
      fallOffset=finalOffset;
      returnFlight=null;lastFloorY=landedY;landingGrace=.65;
      jumpPivot.position.y=NETWORK_TO_VISUAL_Y+finalOffset;
      contact.visible=true;player.userData.inWater=false;
      // Restore the original deck-view orbit without resetting the user's angle/zoom.
      // The player's visual feet are at landedY; aim slightly above them.
      const orbit=new THREE.Vector3(0,3.7,12.0);
      if(enabled){
        controls.target.set(player.position.x,landedY+1.3,player.position.z);
        camera.position.copy(controls.target).add(deckCameraOffset||orbit);
        controls.update();
      }
      deckCameraOffset=null;
    }
    return true;
  }
  function launchTo(target){
    if(!enabled||overboard||returnFlight||launchFlight||lying||!spawnValidated)return false;
    const rise=Math.max(10,target.y-lastFloorY+5);
    launchFlight={height:lastFloorY+jumpHeight,velocity:Math.sqrt(2*GRAVITY*rise)};
    headSupport=null;airborneFromEdge=false;jumpVelocity=0;jumpHeight=0;
    if(sitting)setSitting(false);
    playJumpSound();return true;
  }
  function updateLaunch(dt){
    if(!launchFlight)return false;
    const f=launchFlight,step=Math.min(dt,.05),before=f.height;
    f.height+=f.velocity*step-.5*GRAVITY*step*step;
    f.velocity-=GRAVITY*step;
    const x=Number(keys.has('KeyD')||keys.has('ArrowRight'))-Number(keys.has('KeyA')||keys.has('ArrowLeft'))+stick.x;
    const z=Number(keys.has('KeyW')||keys.has('ArrowUp'))-Number(keys.has('KeyS')||keys.has('ArrowDown'))-stick.y;
    camera.getWorldDirection(forward);forward.y=0;forward.normalize();
    right.crossVectors(forward,THREE.Object3D.DEFAULT_UP).normalize();
    movement.copy(forward).multiplyScalar(z).addScaledVector(right,x);
    if(movement.lengthSq()>1)movement.normalize();
    movement.multiplyScalar(5.25*step);
    const resolved=deckCollision.blockedMove(player.position.x,player.position.z,movement.x,movement.z,f.height);
    const actualDx=resolved.x-player.position.x,actualDz=resolved.z-player.position.z;
    player.position.x=resolved.x;player.position.z=resolved.z;
    if(enabled){camera.position.x+=actualDx;controls.target.x+=actualDx;camera.position.z+=actualDz;controls.target.z+=actualDz;}
    if(movement.lengthSq()>1e-8)player.rotation.y=Math.atan2(-movement.x,-movement.z);
    lastMoveX=step>0?movement.x/step:0;lastMoveZ=step>0?movement.z/step:0;
    if(f.velocity<0){
      const floor=deckCollision.floorAt(player.position.x,player.position.z,before+.2);
      if(floor!==null&&before>=floor-.15&&f.height<=floor){
        f.height=floor;lastFloorY=floor;jumpHeight=0;jumpVelocity=0;
        launchFlight=null;landingGrace=.45;
      }
    }
    if(launchFlight){
      jumpHeight=f.height-lastFloorY;
      if(f.height<WATER_SURFACE_Y+.3){
        jumpVelocity=f.velocity;launchFlight=null;startFall();
      }
    }
    if(!overboard)jumpPivot.position.y=NETWORK_TO_VISUAL_Y+f.height-visualBaseY;
    if(enabled){
      const shift=(f.height+1.3-controls.target.y)*(1-Math.exp(-step*7));
      controls.target.y+=shift;camera.position.y+=shift;
    }
    if(!overboard)avatar.update(step,false,false,launchFlight?1:0,false,Boolean(launchFlight&&f.velocity<-7));
    player.userData.moving=movement.lengthSq()>1e-8;
    return true;
  }
  function jump(){
    if(!enabled)return;
    if(returnFlight||launchFlight)return;
    if(overboard){
      if(waterJumpCooldown>0)return;
      // Repeated tube kicks work in midair after a short cooldown.
      fallAirborne=true;fallVelocity=16.5;waterJumpCooldown=.65;
      // One short, synchronized rebound for the legs and tube glow.
      waterKickPulse=.38;waterArmCheerTime=1;player.userData.waterKickPulse=1;
      playJumpSound();return;
    }
    // A player standing on another head can jump again to build taller towers.
    if((jumpHeight>.03&&!headSupport)||jumpVelocity>0)return;
    if(lying)standUp();if(sitting)setSitting(false);titanicPose=false;
    headSupport=null;airborneFromEdge=false;jumpVelocity=JUMP_SPEED;playJumpSound();
  }
  // Use Touch Events on iOS for reliable two-finger joystick + jump input.
  // Pointer Events remain a fallback for pen and other touch implementations.
  let lastTouchJumpAt=-Infinity;
  function triggerTouchJump(e){
    e.preventDefault();
    e.stopPropagation();
    lastTouchJumpAt=performance.now();
    jump();
  }
  jumpButton.addEventListener('touchstart',triggerTouchJump,{passive:false});
  jumpButton.addEventListener('pointerdown',e=>{
    if(e.pointerType!=='touch'&&e.pointerType!=='pen')return;
    // On iOS touchstart has already fired for this contact.
    if(performance.now()-lastTouchJumpAt<350){e.preventDefault();return;}
    triggerTouchJump(e);
  });
  jumpButton.addEventListener('click',e=>{
    // Ignore compatibility clicks generated by touch/pen; mouse and keyboard still work.
    if(performance.now()-lastTouchJumpAt<750){e.preventDefault();return;}
    jump();
  });
  // Space jumps even after clicking UI buttons. Only editable fields retain Space.
  addEventListener('keydown',e=>{
    if((e.code!=='Space'&&e.key!==' ')||e.repeat||e.altKey||e.ctrlKey||e.metaKey)return;
    const target=e.target;
    if(target?.isContentEditable||target?.closest?.('input,textarea,select,[contenteditable],[data-aqua-ui]'))return;
    e.preventDefault();
    jump();
  }, {capture:true});
  function updateJump(dt){
    // Overview disables controls, not physics. Keep head support and the
    // vertical network offset alive so human towers remain in photos.
    const step=Math.min(dt,.05);
    waterJumpCooldown=Math.max(0,waterJumpCooldown-step);
    waterKickPulse=Math.max(0,waterKickPulse-step);
    waterArmCheerTime=Math.max(0,waterArmCheerTime-step);
    player.userData.waterKickPulse=waterKickPulse>0?Math.sin((1-waterKickPulse/.38)*Math.PI):0;
    if(updateLaunch(step))return;
    if(updateReturnFlight(step))return;
    if(overboard){
      const desired=WATER_SURFACE_Y+waterHeightAt(player.position.x,player.position.z)-visualBaseY;
      const old=fallOffset;
      if(fallAirborne){
        // Continuous ballistic motion from the deck edge (no sudden vertical drop).
        const previousWaterFeet=visualBaseY+fallOffset;
        fallOffset+=fallVelocity*step-.5*GRAVITY*step*step;
        fallVelocity-=GRAVITY*step;
        const steering=keys.has('KeyW')||keys.has('KeyA')||keys.has('KeyS')||keys.has('KeyD')||
          keys.has('ArrowUp')||keys.has('ArrowDown')||keys.has('ArrowLeft')||keys.has('ArrowRight')||stick.lengthSq()>.01;
        const dx=steering?0:fallDriftX*step,dz=steering?0:fallDriftZ*step;
        const resolved=deckCollision.blockedMove(player.position.x,player.position.z,dx,dz,visualBaseY+fallOffset);
        const actualDx=resolved.x-player.position.x,actualDz=resolved.z-player.position.z;
        player.position.x=resolved.x;player.position.z=resolved.z;
        if(enabled){
          camera.position.x+=actualDx;controls.target.x+=actualDx;
          camera.position.z+=actualDz;controls.target.z+=actualDz;
        }
        // Drag gently slows the horizontal momentum in the air.
        const drag=Math.exp(-step*.38);fallDriftX*=drag;fallDriftZ*=drag;
        // Only a descending jump that crosses a real deck surface can board.
        if(fallVelocity<0){
          const feetY=visualBaseY+fallOffset;
          const floor=deckCollision.floorAt(player.position.x,player.position.z,previousWaterFeet+.25);
          if(floor!==null&&floor>WATER_SURFACE_Y+1&&previousWaterFeet>=floor-.12&&feetY<=floor){
            fallOffset=floor-visualBaseY;lastFloorY=floor;
            overboard=false;player.userData.inWater=false;fallAirborne=false;
            fallVelocity=0;landingGrace=.5;waterJumpCooldown=0;
            contact.visible=true;deckCameraOffset=null;
          }
        }
        if(overboard&&fallOffset<=desired){fallOffset=desired;fallAirborne=false;waterTime=0;}
      }else{
        waterTime+=step;
        fallOffset=desired+Math.sin(waterTime*1.5)*.04;
      }
      const shift=fallOffset-old;
      followWaterHeight(shift);
      jumpPivot.position.y=NETWORK_TO_VISUAL_Y+fallOffset;
      jumpPose+=(0-jumpPose)*(1-Math.exp(-step*16));
      avatar.update(step,false,false,fallAirborne?1:0,overboard,false,false,player.userData.waterKickPulse,waterArmCheerTime);
      return;
    }
    if(!headSupport&&(jumpVelocity!==0||jumpHeight>0)){
      const before=jumpHeight;
      jumpHeight+=jumpVelocity*step-.5*GRAVITY*step*step;
      jumpVelocity-=GRAVITY*step;
      // Invisible head platform for each standing remote avatar.
      // Landing is one-way: only feet descending across the head surface collide.
      if(jumpVelocity<0&&!headSupport){
        const groundOffset=lastFloorY-VISUAL_DECK_Y;
        for(const remote of scene.children){
          if(!remote.name?.startsWith('remote-')||!remote.userData.headPlatformEnabled)continue;
          const headY=remote.userData.headPlatformY;
          const platformHeight=headY-visualBaseY-groundOffset;
          if(before>=platformHeight-.12&&jumpHeight<=platformHeight&&
             Math.hypot(remote.position.x-player.position.x,remote.position.z-player.position.z)<.62){
            jumpHeight=platformHeight;jumpVelocity=0;headSupport=remote;
            supportLastPosition.copy(remote.position);supportLastYaw=remote.rotation.y;
            break;
          }
        }
      }
      if(jumpHeight<=0&&!airborneFromEdge){
        const below=deckCollision.floorAt(player.position.x,player.position.z,lastFloorY+.22);
        if(below===null||below<lastFloorY-.45)airborneFromEdge=true;
        else {jumpHeight=0;jumpVelocity=0;headSupport=null;}
      }
    }
    if(headSupport){
      // Carry the passenger along with the base, rather than letting its
      // horizontal separation invalidate the head collision on the next frame.
      if(headSupport.parent&&headSupport.userData.headPlatformEnabled){
        const yaw=headSupport.rotation.y-supportLastYaw;
        const dx=player.position.x-supportLastPosition.x,dz=player.position.z-supportLastPosition.z;
        const cos=Math.cos(yaw),sin=Math.sin(yaw);
        const nextX=headSupport.position.x+dx*cos+dz*sin;
        const nextZ=headSupport.position.z-dx*sin+dz*cos;
        const moveX=nextX-player.position.x,moveZ=nextZ-player.position.z;
        player.position.x=nextX;player.position.z=nextZ;player.rotation.y+=yaw;
        if(enabled){camera.position.x+=moveX;controls.target.x+=moveX;camera.position.z+=moveZ;controls.target.z+=moveZ;}
        supportLastPosition.copy(headSupport.position);supportLastYaw=headSupport.rotation.y;
      }
      const near=Math.hypot(headSupport.position.x-player.position.x,headSupport.position.z-player.position.z)<.7;
      if(!headSupport.parent||!headSupport.userData.headPlatformEnabled||!near){
        // Preserve the current height and begin a real fall when the supporting
        // player leaves, lies down, swims, or moves out of reach.
        headSupport=null;
        jumpVelocity=Math.min(jumpVelocity,-.01);
      }else{
        jumpHeight=headSupport.userData.headPlatformY-visualBaseY-(lastFloorY-VISUAL_DECK_Y);
        jumpVelocity=0;
      }
    }
    // Camera follows the actual foot height during jumps and human towers.
    if(enabled){
      const feetY=lastFloorY+jumpHeight;
      const desiredY=feetY+1.3;
      const shift=(desiredY-controls.target.y)*(1-Math.exp(-step*8));
      controls.target.y+=shift;camera.position.y+=shift;
    }
    const groundOffset=lastFloorY-VISUAL_DECK_Y;
    jumpPivot.position.y=NETWORK_TO_VISUAL_Y+(lying?0:jumpHeight+groundOffset);
    // A landed player stands upright instead of looping the airborne pose.
    const targetPose=headSupport?0:(jumpHeight>.04||jumpVelocity>0?1:0);
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
  function resetView(){
    const damping=controls.enableDamping;controls.enableDamping=false;controls.update();
    const feetY=visualBaseY+jumpPivot.position.y-NETWORK_TO_VISUAL_Y;
    controls.target.set(player.position.x,overboard?Math.max(3,feetY+1.3):feetY+1.3,player.position.z);
    camera.position.copy(controls.target).add(new THREE.Vector3(0,3.7,12.0));
    controls.update();controls.enableDamping=damping;
  }
  function deckViewPose(){
    const feetY=visualBaseY+jumpPivot.position.y-NETWORK_TO_VISUAL_Y;
    const target=new THREE.Vector3(player.position.x,overboard?Math.max(3,feetY+1.3):feetY+1.3,player.position.z);
    const position=target.clone().add(new THREE.Vector3(0,3.7,12.0));
    return {position,target};
  }
  function setEnabled(value){enabled=value;if(!value){keys.clear();reset();player.userData.moving=false;}}
  // Query from the actual feet, not a fixed height above the main deck.
  // Only land on elevated UCX after descending onto it; never teleport up from below.
  function walkableFloor(x,z){
    if(headSupport)return null;
    const feetY=lastFloorY+jumpHeight;
    // Sweep from the previous foot height so fast falls cannot tunnel through a deck.
    const rayStart=Math.max(feetY,previousFeetY??feetY)+(jumpVelocity===0&&!airborneFromEdge?WALK_STEP_UP:.22);
    const floor=deckCollision.floorAt(x,z,rayStart);
    if(floor===null)return null;
    // Never snap upwards or downwards onto a remote surface. Falling feet must
    // actually cross the floor plane before a new UCX platform is acquired.
    if(jumpHeight>.03||jumpVelocity!==0||airborneFromEdge){
      if(jumpVelocity>=0||feetY>floor+.28)return null;
      jumpHeight=0;jumpVelocity=0;airborneFromEdge=false;
      previousFeetY=floor;
    }else if(floor>lastFloorY+WALK_STEP_UP||floor<lastFloorY-1.1){
      // Leaving a high ledge begins a physical fall rather than a teleport.
      airborneFromEdge=true;jumpVelocity=-.01;return null;
    }
    return floor;
  }

  function update(dt){
    landingGrace=Math.max(0,landingGrace-Math.min(dt,.05));
    const flying=Boolean(launchFlight);
    previousFeetY=lastFloorY+jumpHeight;
    updateJump(dt);
    updateLie(dt);
    if(flying){player.userData.moving=false;return;}
    if(!enabled){player.userData.moving=false;if(!lying&&!overboard)avatar.update(dt,false,sitting,jumpPose,overboard,false,titanicPose);return;}
    if(deckCollision.ready()&&!spawnValidated){
      const safe=deckCollision.safeSpot(player.position.x,player.position.z)
        ||deckCollision.safeSpot(0,-33)
        ||deckCollision.safeSpot(0,-24);
      if(safe){
        player.position.x=safe.x;player.position.z=safe.z;
        lastFloorY=safe.y;spawnValidated=true;resetView();
      }else if(!window.__seaNoDeckWarning){
        console.warn('[Sea] UCX has no walkable deck surface near spawn.');
        window.__seaNoDeckWarning=true;
      }
    }
    if(!overboard&&!returnFlight&&deckCollision.ready()&&spawnValidated&&!lying&&!titanicPose){
      const stationaryFloor=walkableFloor(player.position.x,player.position.z);
      if(stationaryFloor!==null){lastFloorY=stationaryFloor;}
      else if(landingGrace<=0&&!headSupport&&!airborneFromEdge&&jumpHeight<=.03&&jumpVelocity===0){
        airborneFromEdge=true;jumpVelocity=-.01;
      }
    }
    if(airborneFromEdge&&!overboard&&lastFloorY+jumpHeight<WATER_SURFACE_Y+.3){startFall();airborneFromEdge=false;}
    const x=Number(keys.has('KeyD')||keys.has('ArrowRight'))-Number(keys.has('KeyA')||keys.has('ArrowLeft'))+stick.x;
    const z=Number(keys.has('KeyW')||keys.has('ArrowUp'))-Number(keys.has('KeyS')||keys.has('ArrowDown'))-stick.y;
    if((!spawnValidated&&deckCollision.ready())||returnFlight||(!x&&!z)){
      player.userData.moving=false;if(!lying&&!overboard)avatar.update(dt,false,sitting,jumpPose,overboard,airborneFromEdge&&jumpVelocity<-7,titanicPose);return;
    }
    if(lying)standUp();
    if(sitting)setSitting(false);
    titanicPose=false;
    // Allow walking while standing on another player's head. The support
    // check in updateJump releases the passenger once they step off.
    camera.getWorldDirection(forward);forward.y=0;forward.normalize();right.crossVectors(forward,THREE.Object3D.DEFAULT_UP).normalize();movement.copy(forward).multiplyScalar(z).addScaledVector(right,x);if(movement.length()>1)movement.normalize();movement.multiplyScalar(5.25*dt);
    if(returnFlight){avatar.update(dt,false,false,jumpPose);return;}
    const previous=player.position.clone();
    lastMoveX=dt>0?movement.x/dt:0;lastMoveZ=dt>0?movement.z/dt:0;
    const feetY=overboard?visualBaseY+fallOffset:lastFloorY+jumpHeight;
    const resolved=deckCollision.blockedMove(player.position.x,player.position.z,movement.x,movement.z,feetY);
    player.position.set(resolved.x,player.position.y,resolved.z);
    // The exported UCX surfaces, not the old rectangular deck, determine support.
    const floor=walkableFloor(player.position.x,player.position.z);
    if(!overboard&&floor!==null){lastFloorY=floor;}
    if(!overboard&&spawnValidated&&deckCollision.ready()&&floor===null&&landingGrace<=0&&!airborneFromEdge&&jumpHeight<=.03&&jumpVelocity===0){
      if(lying)standUp();if(sitting)setSitting(false);
      airborneFromEdge=true;jumpVelocity=Math.min(jumpVelocity,-.01);
    }
    const delta=player.position.clone().sub(previous);
    if(delta.lengthSq()>1e-8)player.rotation.y=Math.atan2(-delta.x,-delta.z);
    player.userData.moving=delta.lengthSq()>1e-8;
    if(!overboard)avatar.update(dt,player.userData.moving,sitting,jumpPose,false,airborneFromEdge&&jumpVelocity<-7,titanicPose);
    camera.position.add(delta);controls.target.add(delta);
  }
  return {player,update,setCharacter,setEnabled,resetView,deckViewPose,
    setWaterHeightSampler:sample=>{waterHeightAt=sample;},
    setNetPose:progress=>avatar.netPose(progress),
    isTitanicPosing:()=>titanicPose,
    toggleTitanicPose:(anchor)=>{if(overboard||returnFlight||launchFlight||lying||!spawnValidated)return false;if(titanicPose){titanicPose=false;return false;}if(!anchor||Math.hypot(player.position.x-anchor.x,player.position.z-anchor.z)>1.35)return false;const floor=deckCollision.floorAt(anchor.x,anchor.z,lastFloorY+4);if(floor===null)return false;setSitting(false);headSupport=null;airborneFromEdge=false;jumpHeight=0;jumpVelocity=0;jumpPose=0;const dx=anchor.x-player.position.x,dz=anchor.z-player.position.z;player.position.x=anchor.x;player.position.z=anchor.z;lastFloorY=floor;jumpPivot.position.y=NETWORK_TO_VISUAL_Y+floor-VISUAL_DECK_Y;camera.position.x+=dx;camera.position.z+=dz;controls.target.x+=dx;controls.target.z+=dz;player.rotation.y=0;titanicPose=true;avatar.update(.05,false,false,0,false,false,true);return true;},
    launchFireworkPose:()=>{avatar.fireworkPose();player.updateWorldMatrix(true,true);return avatar.rightHandWorldPosition();},
    getFireworkHandPosition:()=>{player.updateWorldMatrix(true,true);return avatar.rightHandWorldPosition();},isSpawnReady:()=>spawnValidated,lieOn,standUp,isLying:()=>lying,
    launchTo,getNetworkState:()=>({sitting,lying,jump:!!launchFlight||airborneFromEdge||(overboard&&fallAirborne)||!headSupport&&(jumpHeight>0||jumpVelocity>0),jumpHeight:Math.max(0,jumpHeight),verticalOffset:jumpPivot.position.y-NETWORK_TO_VISUAL_Y,inWater:overboard,returning:Boolean(returnFlight||launchFlight)}),
    isReturning:()=>Boolean(returnFlight),
    handleCorrection(state){
      // Keep the server authoritative; cancel an invalid flight cleanly.
      if(returnFlight){returnFlight=null;landingGrace=0;landingPoint=null;}
      const dx=state.x-player.position.x,dz=state.z-player.position.z;
      player.position.x=state.x;player.position.z=state.z;
      camera.position.x+=dx;controls.target.x+=dx;
      camera.position.z+=dz;controls.target.z+=dz;
    }};
}
