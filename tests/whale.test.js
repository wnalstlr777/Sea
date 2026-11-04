import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {createWhaleModel} from '../src/whale-model.js';
import {createMarineLife} from '../src/marine-life.js';
import {createWhaleWaterEffects} from '../src/whale-water-effects.js';
import {oceanHeightAt} from '../src/ocean-height.js';

// Node has no image decoder; these tests exercise real GLB geometry, skin and clips.
// Browser rendering uses the real embedded PNG and is checked separately.
globalThis.self=globalThis;
globalThis.createImageBitmap=async()=>({width:1024,height:1024,close(){}});
async function asset(){
  const bytes=await readFile(new URL('../public/models/whale_animated.glb',import.meta.url));
  return new GLTFLoader().parseAsync(bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength),'');
}
const uniforms=(height=0)=>Object.fromEntries(Object.entries({height,waveSize:1,curvature:0,time:0,travel:0}).map(([k,v])=>[k,{value:v}]));

test('real GLB keeps triangles, skin, clips and heading; mixer crossfades without root motion',async()=>{
  const whale=createWhaleModel({load:asset});await whale.loadPromise;
  assert.equal(whale.ready,true);assert.deepEqual(whale.root.userData.animationClips.sort(),['Whale_Idle','Whale_Swim']);
  let triangles=0,bones=0;const materials=new Set();whale.root.traverse(o=>{
    if(o.isMesh){triangles+=(o.geometry.index?.count??o.geometry.attributes.position.count)/3;materials.add(o.material);}
    if(o.isBone)bones++;
  });assert.equal(triangles,1092);assert.equal(bones,7);assert.equal(materials.size,1);
  const box=new THREE.Box3().setFromObject(whale.root);assert.ok(Math.abs(box.max.z-box.min.z-100)<.01);
  assert.ok(Math.abs(box.max.y-11.5)<.01);
  whale.startEncounter();whale.update(.1,false,24/11);
  assert.equal(whale.current.getClip().name,'Whale_Swim');
  whale.update(.1,true,24/11);whale.update(.8,true,24/11);
  assert.equal(whale.current.getClip().name,'Whale_Idle');assert.ok(whale.current.getEffectiveWeight()>.99);
  assert.ok(whale.root.position.equals(new THREE.Vector3()));
  assert.equal(whale.actions.swim.getClip().duration,4);assert.equal(whale.actions.idle.getClip().duration,6);
  const p=new THREE.Vector3();whale.root.updateMatrixWorld(true);whale.root.traverse(o=>{if(o.isSkinnedMesh)o.skeleton.update();});
  whale.readAttachment(whale.blowhole,p);assert.ok(p.z< -20,'blowhole belongs to the head');
});

test('late loading never pops into an ongoing encounter; missing clips still permit movement',async()=>{
  let resolve;const whale=createWhaleModel({load:()=>new Promise(r=>{resolve=r;})});
  whale.root.position.set(200,40,-120);whale.root.rotation.y=1.2;whale.startEncounter();
  const gltf=await asset();gltf.animations=[];resolve(gltf);await whale.loadPromise;
  assert.equal(whale.active,false);assert.equal(whale.root.children[0].visible,false);
  whale.startEncounter();whale.update(.1,false,3);assert.equal(whale.active,true);assert.equal(whale.mixer,null);
  assert.deepEqual(whale.root.position.toArray(),[200,40,-120]);
});

test('existing encounter schedule/path survives; surface and breath events fire once',async()=>{
    const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(75,1.6,.5,2000);camera.position.set(0,12,0);camera.lookAt(0,0,-170);
    let elapsed=0,whaleStart=0,breaths=0,splashes=0,dives=0,markedWhale=false;const encounters=[];
    const audio={dolphin(){encounters.push('dolphin');},whale(){assert.fail('No ordinary-swimming whale sound');},whaleSpout(){assert.fail('Use synchronized Whale_Blow');},splash(){},
      whaleSplash({position,speed}){splashes++;assert.ok(Math.abs(position.y-.08)<1e-6);assert.ok(speed>0);},
      whaleBlow({position}){breaths++;assert.ok(position.y>0);},
      whaleDive({position}){dives++;assert.ok(Math.abs(position.y-.08)<1e-6);}};
    const life=createMarineLife(scene,camera,audio,{loadWhale:asset,compact:true,ocean:{heightAt:()=>0,uniforms:{daylight:{value:1}}}});
    const whale=life.group.userData.whale;await whale.loadPromise;
    let sawBreak=false,sawDive=false,sawSwim=false,sawIdle=false,previous=null;
    for(let i=0;i<5000;i++){
      elapsed+=.05;life.update(.05);
      if(life.group.userData.lastEncounter==='whale'&&!markedWhale){markedWhale=true;encounters.push('whale');whaleStart=elapsed;}
      if(whale.root.visible){
        const age=elapsed-whaleStart,expected=-16+Math.sin(Math.PI*Math.min(1,age/11))*16;
        assert.ok(Math.abs(whale.root.position.y-expected)<1e-6);
        if(previous){const motion=whale.root.position.clone().sub(previous);motion.y=0;
          const forward=new THREE.Vector3(0,0,-1).applyQuaternion(whale.root.quaternion);forward.y=0;
          assert.ok(forward.normalize().dot(motion.normalize())>.999);
        }
        previous=whale.root.position.clone();sawSwim ||= whale.current?.getClip().name==='Whale_Swim';sawIdle ||= whale.current?.getClip().name==='Whale_Idle';
        sawBreak ||= life.group.userData.whaleSurface?.didBreak;sawDive ||= life.group.userData.whaleSurface?.didDive;
      }
      if(encounters.length===4)break;
    }
    assert.deepEqual(encounters,['dolphin','dolphin','whale','dolphin']);assert.equal(breaths,1);assert.equal(splashes,1);assert.equal(dives,1);
    assert.ok(sawBreak&&sawDive&&sawSwim&&sawIdle,JSON.stringify({sawBreak,sawDive,sawSwim,sawIdle}));
    assert.equal(life.group.getObjectsByProperty('name','whale').length,1);
});

test('mobile effects use a smaller fixed pool and expire without rebuilding geometry',()=>{
  const parent=new THREE.Group(),desktop=createWhaleWaterEffects(parent,{heightAt:()=>0}),mobile=createWhaleWaterEffects(parent,{heightAt:()=>0,compact:true});
  assert.ok(mobile.stats.capacity<desktop.stats.capacity);const geometry=mobile.points.geometry;
  mobile.splash(new THREE.Vector3(0,.1,0));mobile.beginBreath();
  for(let i=0;i<100;i++)mobile.update(.05,true,new THREE.Vector3(0,1,0),new THREE.Vector3(0,1,0));
  assert.equal(mobile.points.geometry,geometry);assert.equal(mobile.points.visible,false);
  assert.ok([...geometry.attributes.position.array].every(Number.isFinite));
});

test('ocean height follows shader travel/time and curved horizon, including wave band limiting',()=>{
  const u=uniforms();assert.equal(oceanHeightAt(u,100,200),0);
  u.curvature.value=1;assert.ok(Math.abs(oceanHeightAt(u,100,200)+50000/120000)<1e-9);
  u.height.value=.825;const before=oceanHeightAt(u,70,-170);u.time.value=2;assert.notEqual(oceanHeightAt(u,70,-170),before);
  const phase=oceanHeightAt(u,70,-170);u.travel.value=33;assert.notEqual(oceanHeightAt(u,70,-170),phase);
  // All geometric waves are filtered out at the very distant horizon.
  assert.ok(Math.abs(oceanHeightAt(u,10000,0)+100000000/120000)<1e-8);
});
