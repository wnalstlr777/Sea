import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {createMarineLife} from '../src/marine-life.js';

globalThis.self=globalThis;
globalThis.createImageBitmap=async()=>({width:1024,height:1024,close(){}});

test('real whale stays level throughout encounters and exposes both flukes for two seconds',async()=>{
  const bytes=await readFile(new URL('../public/models/whale_animated.glb',import.meta.url));
  const load=()=>new GLTFLoader().parseAsync(bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength),'');
  for(const heading of [-Math.PI/2,0,Math.PI/2,Math.PI,-.7]){
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
    // Independent geometry landmarks: widest left/right flukes and pectoral fins.
    const landmark=(minX,maxX,side)=>{
      let index=-1;
      for(let i=0;i<positions.count;i++){
        if(positions.getX(i)<minX||positions.getX(i)>maxX)continue;
        if(index<0||side*positions.getZ(i)>side*positions.getZ(index))index=i;
      }
      assert.ok(index>=0);return index;
    };
    const flukes=[landmark(.95,2,-1),landmark(.95,2,1)];
    const fins=[landmark(-.4,.2,-1),landmark(-.4,.2,1)];
    const heights=indices=>indices.map(i=>mesh.localToWorld(mesh.getVertexPosition(i,new THREE.Vector3())).y);
    let heldFrames=0;
    for(let frame=1;frame<=360;frame++){
      life.update(.05);whale.root.updateMatrixWorld(true);mesh.skeleton.update();
      const age=frame*.05;
      for(const pair of [flukes,fins]){
        const y=heights(pair);
        assert.ok(Math.abs(y[0]-y[1])<.01,`uneven tips ${pair} at ${age}, heading ${heading}: ${y}`);
      }
      const bodySide=new THREE.Vector3(1,0,0).applyQuaternion(whale.root.getObjectByName('Body').getWorldQuaternion(new THREE.Quaternion()));
      assert.ok(Math.abs(bodySide.y)<.00001,`body roll at ${age}`);
      if(age>=13.6&&age<=15.6){
        assert.ok(Math.min(...heights(tail))>1,`tail submerged at ${age}, heading ${heading}`);
        assert.ok(Math.max(...heights(head))<0,`head exposed at ${age}`);
        assert.ok(Math.min(...heights(flukes))>1,`fluke tips submerged at ${age}`);
        heldFrames++;
      }
      if(age===17.5)assert.ok(Math.max(...heights(tail))<0,'tail finally submerges');
    }
    assert.ok(heldFrames>=40);
    assert.equal(life.group.userData.whaleSurface.didBreak,true);
    assert.equal(life.group.userData.whaleSurface.didSpout,true);
    assert.equal(life.group.userData.whaleSurface.didDive,true);
    life.update(.05);assert.equal(whale.root.visible,false);
  }
});
