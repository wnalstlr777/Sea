import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';

// The GLB is Y-up, with its head along source -X. The encounter travels along -Z.
export function createWhaleModel({load= url=>new GLTFLoader().loadAsync(url),url=`${import.meta.env?.BASE_URL??'./'}models/whale_animated.glb`}={}){
  const root=new THREE.Group();root.name='whale';root.visible=false;
  const model=new THREE.Group();model.name='whale-model';model.rotation.y=-Math.PI/2;root.add(model);
  const state={root,ready:false,active:false,mixer:null,actions:{},current:null,contacts:[],blowhole:null};
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
    state.ready=true;root.userData.loadingState='ready';root.userData.animationClips=clips.map(c=>c.name);
    return state;
  }).catch(error=>{root.userData.loadingState='error';console.error('[Sea] Whale GLB loading failed',error);return state;});
  root.userData.loadingState='loading';
  state.startEncounter=()=>{
    // Loading mid-encounter never causes a pop: reveal only at the next scheduled encounter.
    state.active=state.ready;model.visible=state.active;
    state.current=null;state.mixer?.stopAllAction();
  };
  state.update=(dt,idle,speed)=>{
    if(!state.active||!state.mixer)return;
    const next=state.actions[idle?'idle':'swim']??state.actions.swim??state.actions.idle;
    if(next&&next!==state.current){
      next.reset().setEffectiveWeight(1).play();
      if(state.current)next.crossFadeFrom(state.current,.65,false);
      state.current=next;
    }
    if(next)next.timeScale=idle?.95:THREE.MathUtils.clamp(speed/(24/11),.85,1.15);
    state.mixer.update(dt);
  };
  state.readAttachment=(attachment,target)=>{
    if(!attachment)return false;
    attachment.mesh.getVertexPosition(attachment.index,target);
    attachment.mesh.localToWorld(target);return true;
  };
  return state;
}
