import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {createBoatMotion} from '../src/camera-motion.js';
test('boat motion remains small and restores camera without drift',()=>{
  globalThis.matchMedia=()=>({matches:false});const camera=new THREE.PerspectiveCamera();camera.position.set(0,10,5);const original=camera.position.clone(),rotation=camera.quaternion.clone();const motion=createBoatMotion(camera);let moved=false;
  const renderer={render(){assert.ok(camera.position.distanceTo(original)<=.066);assert.ok(camera.quaternion.angleTo(rotation)<.006);if(camera.position.distanceTo(original)>.001)moved=true;}};
  for(let i=0;i<1000;i++){motion.render(renderer,new THREE.Scene(),1/60,.6,7);assert.ok(camera.position.equals(original));assert.ok(camera.quaternion.equals(rotation));}assert.ok(moved);
});
test('reduced motion disables boat motion',()=>{
  globalThis.matchMedia=()=>({matches:true});const camera=new THREE.PerspectiveCamera(),motion=createBoatMotion(camera);
  motion.render({render(){assert.equal(camera.position.y,0);assert.equal(camera.quaternion.angleTo(new THREE.Quaternion()),0);}},new THREE.Scene(),1,.6,7);
});
