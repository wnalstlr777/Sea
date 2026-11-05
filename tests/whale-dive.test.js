import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {createMarineLife} from '../src/marine-life.js';

globalThis.self=globalThis;
globalThis.createImageBitmap=async()=>({width:1024,height:1024,close(){}});

test('real whale keeps its flukes above water for two seconds in both travel directions',async()=>{
  const bytes=await readFile(new URL('../public/models/whale_animated.glb',import.meta.url));
  const load=()=>new GLTFLoader().parseAsync(bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength),'');
  for(const heading of [-Math.PI/2,Math.PI/2]){
    const camera=new THREE.PerspectiveCamera(75,1.6,.5,2000);
    camera.position.set(0,12,0);camera.lookAt(0,0,-170);
    const life=createMarineLife(new THREE.Scene(),camera,{}, {loadWhale:load,compact:true,ocean:{heightAt:()=>0,uniforms:{daylight:{value:1}}}});
    const whale=life.group.userData.whale;await whale.loadPromise;life.summonWhale();whale.root.rotation.y=heading;
    let mesh;whale.root.traverse(o=>{if(o.isSkinnedMesh)mesh=o;});
    const positions=mesh.geometry.attributes.position,tail=[],head=[];
    let tailTip=-Infinity;
    for(let i=0;i<positions.count;i++)tailTip=Math.max(tailTip,positions.getX(i));
    for(let i=0;i<positions.count;i++){
      if(positions.getX(i)>tailTip-.08)tail.push(i);
      if(positions.getX(i)<-.65)head.push(i);
    }
    assert.ok(tail.length>0&&head.length>0);
    const heights=indices=>indices.map(i=>mesh.localToWorld(mesh.getVertexPosition(i,new THREE.Vector3())).y);
    let heldFrames=0;
    for(let frame=1;frame<=360;frame++){
      life.update(.05);whale.root.updateMatrixWorld(true);mesh.skeleton.update();
      const age=frame*.05;
      if(age>=13.6&&age<=15.6){
        assert.ok(Math.min(...heights(tail))>1,`tail submerged at ${age}, heading ${heading}`);
        assert.ok(Math.max(...heights(head))<0,`head exposed at ${age}`);
        heldFrames++;
      }
      if(age===17.5)assert.ok(Math.max(...heights(tail))<0,'tail finally submerges');
    }
    assert.ok(heldFrames>=40);
    life.update(.05);assert.equal(whale.root.visible,false);
  }
});
