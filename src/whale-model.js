import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {createWhalePose} from './whale-pose.js';

// The GLB is Y-up, with its head along source -X. The encounter travels along -Z.
export function createWhaleModel({load= url=>new GLTFLoader().loadAsync(url),url=`${import.meta.env?.BASE_URL??'./'}models/whale_animated.glb`}={}){
  const root=new THREE.Group();root.name='whale';root.visible=false;
  // Pitch around the whale's local side axis before applying its travel heading.
  root.rotation.order='YXZ';
  const model=new THREE.Group();model.name='whale-model';model.rotation.y=-Math.PI/2;root.add(model);
  const silhouette=new THREE.Group();silhouette.name='whale-shallow-silhouette';silhouette.visible=false;
  const waterSkins=[];
  const levelPoses=[];
  const state={root,silhouette,ready:false,active:false,mixer:null,actions:{},current:null,contacts:[],blowhole:null};
  const p=new THREE.Vector3(),box=new THREE.Box3();
  state.loadPromise=load(url).then(gltf=>{
    // Normalize independently of a moving encounter root if loading finishes late.
    model.removeFromParent();model.add(gltf.scene);model.updateMatrixWorld(true);box.setFromObject(model);
    const scale=100/(box.max.z-box.min.z);model.scale.setScalar(scale);
    model.updateMatrixWorld(true);box.setFromObject(model);
    // Leave clearance beneath the original -16m spawn depth even with its .08rad pitch.
    model.position.set(-(box.min.x+box.max.x)/2,11.5-box.max.y,-(box.min.z+box.max.z)/2);
    root.add(model);model.visible=false;root.updateMatrixWorld(true);
    const mesh=[];gltf.scene.traverse(o=>{
      if(!o.isMesh)return;mesh.push(o);o.castShadow=false;o.receiveShadow=false;
      // Animated fin/tail bounds change each frame; one low-poly whale is cheaper to keep drawable.
      o.frustumCulled=false;
      // A small local water projection reveals only shallow submerged parts.
      // The original skinned mesh, texture and the ocean's opacity stay unchanged.
      const geometry=new THREE.BufferGeometry(),positions=new Float32Array(o.geometry.attributes.position.count*3),alpha=new Float32Array(o.geometry.attributes.position.count);
      geometry.setAttribute('position',new THREE.BufferAttribute(positions,3).setUsage(THREE.DynamicDrawUsage));
      geometry.setAttribute('aAlpha',new THREE.BufferAttribute(alpha,1).setUsage(THREE.DynamicDrawUsage));geometry.setIndex(o.geometry.index);
      const material=new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.DoubleSide,polygonOffset:true,polygonOffsetFactor:-1,polygonOffsetUnits:-1,
        uniforms:{tint:{value:new THREE.Color('#245263')}},
        vertexShader:`attribute float aAlpha;varying float alpha;void main(){alpha=aAlpha;gl_Position=projectionMatrix*viewMatrix*vec4(position,1.);}`,
        fragmentShader:`uniform vec3 tint;varying float alpha;void main(){if(alpha<.002)discard;gl_FragColor=vec4(tint,alpha);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`});
      const overlay=new THREE.Mesh(geometry,material);overlay.name='whale-local-water-projection';overlay.frustumCulled=false;overlay.renderOrder=2;silhouette.add(overlay);
      waterSkins.push({mesh:o,geometry,positions,alpha,material});
    });
    // Source landmark checked in Blender: dorsal head around (-.65, 0, .296).
    // Converted into glTF Y-up mesh coordinates here. Keep vertex attachments skinned.
    const target=new THREE.Vector3(-.65,.296,0);let best=Infinity;
    for(const m of mesh){
      const a=m.geometry.attributes.position;
      for(let i=0;i<a.count;i++){
        p.fromBufferAttribute(a,i);const d=p.distanceToSquared(target);
        if(d<best){best=d;state.blowhole={mesh:m,index:i};}
      }
      for(const x of [-.82,-.65,-.45,-.2,.05,.3]){
        let nearest=null,score=Infinity;
        for(let i=0;i<a.count;i++){
          p.fromBufferAttribute(a,i);
          if(p.y<.03||Math.abs(p.z)>.20)continue;
          const d=(p.x-x)**2+Math.abs(p.z)*.04-p.y*.015;
          if(d<score){score=d;nearest={mesh:m,index:i};}
        }
        if(nearest)state.contacts.push(nearest);
      }
    }
    const clips=gltf.animations??[];
    if(clips.length){
      state.mixer=new THREE.AnimationMixer(gltf.scene);
      for(const [key,pattern] of [['swim',/swim/i],['idle',/idle/i]]){
        const clip=clips.find(c=>c.name===`Whale_${key==='swim'?'Swim':'Idle'}`)||clips.find(c=>pattern.test(c.name));
        if(clip)state.actions[key]=state.mixer.clipAction(clip).setLoop(THREE.LoopRepeat,Infinity);
      }
    }
    for(const m of mesh)if(m.isSkinnedMesh)levelPoses.push(createWhalePose(m,root));
    state.ready=true;root.userData.loadingState='ready';root.userData.animationClips=clips.map(c=>c.name);
    root.userData.animationDurations=Object.fromEntries(clips.map(c=>[c.name,c.duration]));
    return state;
  }).catch(error=>{root.userData.loadingState='error';console.error('[Sea] Whale GLB loading failed',error);return state;});
  root.userData.loadingState='loading';
  state.startEncounter=()=>{
    // Loading mid-encounter never causes a pop: reveal only at the next scheduled encounter.
    state.active=state.ready;model.visible=state.active;
    state.current=null;state.mixer?.stopAllAction();
  };
  state.update=(dt,idle,speed)=>{
    if(!state.active)return;
    const next=state.actions[idle?'idle':'swim']??state.actions.swim??state.actions.idle;
    if(next&&next!==state.current){
      next.reset().setEffectiveWeight(1).play();
      if(state.current)next.crossFadeFrom(state.current,.65,false);
      state.current=next;
    }
    if(next)next.timeScale=idle?.95:THREE.MathUtils.clamp(speed/(24/11),.85,1.15);
    state.mixer?.update(dt);
    for(const level of levelPoses)level();
  };
  state.readAttachment=(attachment,target)=>{
    if(!attachment)return false;
    attachment.mesh.getVertexPosition(attachment.index,target);
    attachment.mesh.localToWorld(target);return true;
  };
  state.updateWaterSilhouette=(heightAt,{visible=true,fade=1,daylight=1}={})=>{
    silhouette.visible=state.active&&root.visible&&visible&&fade>.001;
    if(!silhouette.visible)return;
    for(const skin of waterSkins){
      skin.material.uniforms.tint.value.set('#245263').multiplyScalar(.35+.65*daylight);
      for(let i=0;i<skin.alpha.length;i++){
        skin.mesh.getVertexPosition(i,p);p.applyMatrix4(skin.mesh.matrixWorld);
        const water=heightAt(p.x,p.z),depth=water-p.y;
        const shallow=1-THREE.MathUtils.smoothstep(depth,2,9);
        skin.alpha[i]=depth>0?Math.min(1,depth/1.2)*shallow*.30*fade:0;
        const k=i*3;skin.positions[k]=p.x;skin.positions[k+1]=water+.48;skin.positions[k+2]=p.z;
      }
      skin.geometry.attributes.position.needsUpdate=true;skin.geometry.attributes.aAlpha.needsUpdate=true;
    }
  };
  return state;
}

