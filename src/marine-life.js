import * as THREE from 'three';
import {createWhaleModel} from './whale-model.js';
import {createWhaleWaterEffects} from './whale-water-effects.js';

// One encounter at a time. Preserve scheduling and lateral motion; surface closer and higher.
export function createMarineLife(scene,camera,audio,{ocean,compact=typeof matchMedia==='function'&&matchMedia('(max-width: 600px), (pointer: coarse)').matches,loadWhale,viewportHeight}={}){
  const group=new THREE.Group();group.name='marine-life';scene.add(group);
  const grey=new THREE.MeshStandardMaterial({color:'#657d89',roughness:.45});
  const belly=new THREE.MeshStandardMaterial({color:'#bacbd1',roughness:.65});
  const sphere=new THREE.SphereGeometry(1,14,10);
  function ellipsoid(parent,material,x,y,z,sx,sy,sz){const mesh=new THREE.Mesh(sphere,material);mesh.position.set(x,y,z);mesh.scale.set(sx,sy,sz);parent.add(mesh);return mesh;}
  function makeDolphin(){
    const root=new THREE.Group();root.name='dolphin';
    ellipsoid(root,grey,0,0,0,.65,.6,2);ellipsoid(root,belly,0,-.24,0,.53,.32,1.8);ellipsoid(root,grey,0,.03,-2,.22,.18,.75);
    const fin=new THREE.Mesh(new THREE.ConeGeometry(.4,.85,3),grey);fin.position.set(0,.6,.3);fin.rotation.y=Math.PI/2;root.add(fin);
    const tail=new THREE.Group();tail.position.z=1.95;root.add(tail);
    for(const side of [-1,1]){
      const fluke=ellipsoid(tail,grey,side*.55,0,0,.7,.10,.32);fluke.rotation.y=side*.25;
      const flipper=ellipsoid(root,grey,side*.62,-.25,-.7,.7,.10,.24);flipper.rotation.z=side*-.35;
    }
    root.visible=false;group.add(root);return {root,tail};
  }
  const dolphin=makeDolphin(),whale=createWhaleModel(loadWhale?{load:loadWhale}:undefined);group.add(whale.root,whale.silhouette);
  const heightAt=(x,z)=>ocean?.heightAt(x,z)??0;
  const effects=createWhaleWaterEffects(group,{heightAt,compact,daylight:()=>ocean?.uniforms.daylight?.value??1,viewportHeight});
  group.userData.whale=whale;group.userData.whaleEffectBudget=effects.stats;
  // Preserve the existing dolphin splash and sounds.
  const splashGeometry=new THREE.BufferGeometry(),drops=new Float32Array(60*3);
  splashGeometry.setAttribute('position',new THREE.BufferAttribute(drops,3).setUsage(THREE.DynamicDrawUsage));
  const splash=new THREE.Points(splashGeometry,new THREE.PointsMaterial({color:'#d4f6ff',size:.3,transparent:true,opacity:.8,depthWrite:false}));splash.visible=false;splash.frustumCulled=false;group.add(splash);
  const origin=new THREE.Vector3(),direction=new THREE.Vector3(),right=new THREE.Vector3();
  const contact=new THREE.Vector3(),previousContact=new THREE.Vector3(),blowhole=new THREE.Vector3(),normal=new THREE.Vector3();
  const sphereBounds=new THREE.Sphere(new THREE.Vector3(),95),frustum=new THREE.Frustum(),viewProjection=new THREE.Matrix4();
  let next=12,age=-1,current=null,encounters=0,didSplash=false,didSpout=false;
  let didBreak=false,didDive=false,didCall=false,previousDistance=-Infinity,nextRipple=0,inView=false;
  const dorsalDistances=[],dorsalCrossings=[];let nextBodyRipple=0;
  function start(forceWhale=false){
    current=forceWhale?whale:(encounters++%3===2?whale:dolphin);current.root.visible=false;age=0;didSplash=false;didSpout=false;
    didBreak=false;didDive=false;didCall=false;previousDistance=-Infinity;nextRipple=0;
    dorsalDistances.length=0;dorsalCrossings.length=0;nextBodyRipple=0;
    if(current===whale)whale.startEncounter();
    camera.getWorldDirection(direction);direction.y=0;direction.normalize();right.crossVectors(direction,THREE.Object3D.DEFAULT_UP).normalize();
    const side=Math.random()<.5?-1:1;
    // Keep the leading head in a narrow mobile viewport while retaining lateral travel.
    const lateral=current===whale?(compact?-35+side*8:side*30-15):side*26;
    origin.copy(camera.position).addScaledVector(direction,current===whale?125:65).addScaledVector(right,lateral);origin.y=0;
    const clearance=current===whale?85:20;
    if(Math.abs(origin.x)<clearance&&Math.abs(origin.z)<(current===whale?120:55))origin.x=side*(clearance+5);
    current.root.rotation.y=Math.atan2(-right.x,-right.z);
    if(current!==whale)audio.dolphin(); // Whale sounds belong to surface events, never ordinary swimming.
    group.userData.lastEncounter=current===whale?'whale':'dolphin';
  }
  function whaleSurface(dt,t,duration){
    const verticalSpeed=t<.15?22:t<.77?0:-12,travelSpeed=2.2;
    // Zero vertical speed at the crest is not an idle whale: it is still swimming forward.
    // Keep the rigged tail swimming through the ascent, crest and dive.
    whale.update(dt,false,Math.max(2.2,travelSpeed));
    whale.root.updateMatrixWorld(true);
    whale.root.traverse(o=>{if(o.isSkinnedMesh)o.skeleton.update();});
    camera.updateMatrixWorld();viewProjection.multiplyMatrices(camera.projectionMatrix,camera.matrixWorldInverse);frustum.setFromProjectionMatrix(viewProjection);
    sphereBounds.center.copy(whale.root.position);sphereBounds.center.y+=15;inView=frustum.intersectsSphere(sphereBounds);
    whale.updateWaterSilhouette(heightAt,{visible:inView,fade:THREE.MathUtils.smoothstep(t,0,.05)*(1-THREE.MathUtils.smoothstep(t,.95,1)),daylight:ocean?.uniforms.daylight?.value??1});
    let distance=-Infinity;
    for(let i=0;i<whale.contacts.length;i++){
      const attachment=whale.contacts[i];
      whale.readAttachment(attachment,blowhole);const d=blowhole.y-heightAt(blowhole.x,blowhole.z);
      if(d>distance){distance=d;contact.copy(blowhole);}
      const old=dorsalDistances[i],crossed=dorsalCrossings[i]??0;
      if(old<0&&d>=0&&!(crossed&1)){dorsalCrossings[i]=crossed|1;if(inView)effects.ripple(blowhole,1.45,current.root.rotation.y);}
      else if(old>=0&&d<0&&verticalSpeed<0&&!(crossed&2)){dorsalCrossings[i]=crossed|2;if(inView)effects.ripple(blowhole,1.5,current.root.rotation.y);}
      dorsalDistances[i]=d;
    }
    if(didBreak&&!didDive&&age>=nextBodyRipple&&distance>0){nextBodyRipple=age+1.0;if(inView)effects.ripple(contact,1.25,current.root.rotation.y,true);}
    if(distance> -3.5&&distance<0&&verticalSpeed>0&&age>=nextRipple){
      nextRipple=age+.7;if(inView)effects.ripple(contact,1.15,current.root.rotation.y);
    }
    if(!didBreak&&previousDistance<0&&distance>=0){
      didBreak=true;
      if(Number.isFinite(previousDistance))contact.lerp(previousContact,distance/(distance-previousDistance));
      contact.y=heightAt(contact.x,contact.z)+.08;
      if(inView){effects.splash(contact);audio.whaleSplash?.({position:contact,camera,visible:inView,speed:verticalSpeed});}
    }
    if(didBreak&&!didDive&&verticalSpeed<0&&previousDistance>=0&&distance<0){
      didDive=true;contact.y=heightAt(contact.x,contact.z)+.08;
      if(inView){effects.splash(contact,.5);audio.whaleDive?.({position:contact,camera,visible:inView,speed:verticalSpeed});}
    }
    previousDistance=distance;previousContact.copy(contact);
    const breath=age-2.0;
    const hasBlowhole=whale.readAttachment(whale.blowhole,blowhole);
    const above=hasBlowhole&&blowhole.y>heightAt(blowhole.x,blowhole.z)+.1;
    // Original breath window and one-shot audio event, with an underwater emission guard.
    if(!didSpout&&breath>=0&&breath<2.2&&above){didSpout=true;if(inView){effects.beginBreath();audio.whaleBlow?.({position:blowhole,camera,visible:inView});if(!didCall){didCall=true;audio.whaleCall?.({position:blowhole,camera,visible:inView});}}}
    normal.set(0,1,0).applyQuaternion(whale.root.quaternion);
    effects.update(dt,inView,above?blowhole:null,normal);
    audio.updateWhale?.({position:blowhole,camera,visible:inView});
    group.userData.whaleSurface={didBreak,didDive,didSpout};
  }
  function update(dt){
    if(globalThis.document?.hidden)return;
    dt=Math.min(dt,.25);
    if(age<0){effects.update(dt,inView,null,null);next-=dt;if(next<=0)start();return;}
    age+=dt;const isWhale=current===whale,duration=isWhale?15.5:4.5,t=age/duration;
    // Whale: surface (0-2s), blow/call (2-3.5s), glide (3.5-11.5s),
    // head-first dive (11.5-14s), then tail flukes linger above water (14-15.5s).
    const glide=isWhale?THREE.MathUtils.clamp((age-2)/12,0,1):t;
    current.root.position.copy(origin).addScaledVector(right,(glide-.5)*(isWhale?35:20));
    const arc=Math.sin(Math.PI*Math.min(1,t));
    if(isWhale){
      const emerge=THREE.MathUtils.smoothstep(age,0,2);
      const dive=THREE.MathUtils.smoothstep(age,11.5,15.5);
      const seaLevel=heightAt(current.root.position.x,current.root.position.z);
      current.root.position.y=seaLevel-17+emerge*24-dive*25;
      // Brief head lift on emergence, level cruising, then head-first dive.
      // Keep the tail elevated briefly at the end instead of pitching up throughout.
      const headLift=1-THREE.MathUtils.smoothstep(age,1.1,2.8);
      const headDive=THREE.MathUtils.smoothstep(age,11.5,13.6);
      const tailFinish=THREE.MathUtils.smoothstep(age,13.6,14.5);
      current.root.rotation.x=.18*headLift-.36*headDive+.14*tailFinish;
    }else{
      current.root.position.y=-1.4+arc*5.5;
      current.root.rotation.x=Math.cos(t*Math.PI)*-.65;
    }
    current.root.visible=!isWhale||whale.active;
    if(isWhale&&whale.active)whaleSurface(dt,t,duration);
    else{
      effects.update(dt,inView,null,null);
      if(!isWhale){
        current.tail.rotation.x=Math.sin(age*6)*.22;
        if(t>.72&&!didSplash){didSplash=true;audio.splash();splash.visible=true;}
        if(splash.visible){
          const a=Math.max(0,age-duration*.72);splash.position.copy(current.root.position);splash.position.y=.1;
          for(let i=0;i<60;i++){const angle=i*2.39996,speed=1+(i%7)*.35;drops[i*3]=Math.cos(angle)*speed*a;drops[i*3+1]=Math.max(0,(2+i%4)*a-4*a*a);drops[i*3+2]=Math.sin(angle)*speed*a;}
          splash.geometry.attributes.position.needsUpdate=true;splash.material.opacity=Math.max(0,.8-a*.6);
        }
      }
    }
    if(t>=1){current.root.visible=false;whale.silhouette.visible=false;splash.visible=false;age=-1;next=24+Math.random()*22;}
  }
  function summonWhale(){
    // Reuse the regular encounter lifecycle; no duplicate models or effects.
    if(current===whale&&age>=0)return false;
    current?.root&&(current.root.visible=false);
    age=-1;next=0;start(true);return true;
  }
  return {update,group,summonWhale};
}

