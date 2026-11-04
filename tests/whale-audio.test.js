import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {createWhaleAudio} from '../src/whale-audio.js';
import {createSeaAudio} from '../src/sea-audio.js';

class Param{
  value=0;events=[];
  setValueAtTime(value){this.value=value;this.events.push(value);}
  setTargetAtTime(value){this.setValueAtTime(value);}
  linearRampToValueAtTime(value){this.setValueAtTime(value);}
  exponentialRampToValueAtTime(value){this.setValueAtTime(value);}
}
class Node{
  gain=new Param();frequency=new Param();Q=new Param();playbackRate=new Param();
  positionX=new Param();positionY=new Param();positionZ=new Param();
  connect(target){this.target=target;return target;}
  disconnect(){this.disconnected=true;}
  start(){this.started=true;}
  stop(){this.stopped=true;}
  finish(){this.onended?.();}
}
class Context{
  currentTime=0;sampleRate=2000;state='running';sources=[];gains=[];panners=[];oscillators=[];destination=new Node();
  listener=Object.assign(new Node(),Object.fromEntries(['forwardX','forwardY','forwardZ','upX','upY','upZ'].map(k=>[k,new Param()])));
  createBuffer(channels,length,rate){const data=new Float32Array(length);return {duration:length/rate,getChannelData:()=>data};}
  createBufferSource(){const n=new Node();this.sources.push(n);return n;}
  createBiquadFilter(){return new Node();}
  createGain(){const n=new Node();this.gains.push(n);return n;}
  createPanner(){const n=new Node();this.panners.push(n);return n;}
  createOscillator(){const n=new Node();this.oscillators.push(n);return n;}
  resume(){this.state='running';return Promise.resolve();}
}
function fixture(){
  const context=new Context(),bus=context.createGain(),camera=new THREE.PerspectiveCamera();camera.position.set(0,5,0);
  const waterNoise=context.createBuffer(1,16000,2000);
  return {context,bus,camera,waterNoise};
}
test('three whale sounds use reusable noise, spatial attenuation and clean up native nodes',()=>{
  const {context,bus,camera,waterNoise}=fixture();const audio=createWhaleAudio(context,bus,{waterNoise});
  for(const name of ['Whale_Splash','Whale_Blow','Whale_Dive'])assert.equal(audio.play(name,{position:new THREE.Vector3(70,0,-170),camera}),true);
  assert.equal(context.oscillators.length,0,'No tonal electronic whale effects');assert.equal(audio.activeCount,3);
  assert.ok(context.panners.every(p=>p.distanceModel==='inverse'&&p.rolloffFactor>0));
  assert.ok(context.sources.filter(s=>s.buffer===waterNoise).length>=3,'Existing ambience noise reused');
  for(const source of context.sources)source.finish();
  assert.equal(audio.activeCount,0);assert.ok(context.panners.every(p=>p.disconnected));
});
test('muted, offscreen and very distant whale events create no sources',()=>{
  const {context,bus,camera}=fixture();let enabled=false;
  const audio=createWhaleAudio(context,bus,{isAudible:()=>enabled});const options={position:new THREE.Vector3(0,0,-100),camera};
  assert.equal(audio.play('Whale_Blow',options),false);enabled=true;
  assert.equal(audio.play('Whale_Blow',{...options,visible:false}),false);
  assert.equal(audio.play('Whale_Blow',{...options,position:new THREE.Vector3(0,0,-700)}),false);
  assert.equal(context.sources.length,0);
});
test('blow follows its emitter, listener follows camera, offscreen tails mute and voice count stays bounded',()=>{
  const {context,bus,camera}=fixture();const audio=createWhaleAudio(context,bus);
  const position=new THREE.Vector3(0,2,-100);
  audio.play('Whale_Blow',{position,camera});position.x=12;camera.position.x=4;
  audio.update({position,camera,visible:false});
  assert.equal(context.panners[0].positionX.value,12);assert.equal(context.listener.positionX.value,4);
  assert.equal(context.panners[0].target,bus);
  for(let i=0;i<8;i++)audio.play('Whale_Splash',{position,camera});
  assert.equal(audio.activeCount,4);audio.stopAll();assert.equal(audio.activeCount,0);
  assert.ok(context.sources.every(s=>s.stopped));
});
test('fast surfacing increases splash level within a bounded range',()=>{
  function level(speed){const {context,bus,camera}=fixture();const audio=createWhaleAudio(context,bus);audio.play('Whale_Splash',{position:new THREE.Vector3(0,0,-100),camera,speed});return Math.max(...context.gains.flatMap(n=>n.gain.events));}
  const slow=level(.2),fast=level(6);assert.ok(fast>slow*1.5);assert.ok(fast<1);
});
test('sea audio waits for a gesture and routes whale effects through existing mute/volume controls',()=>{
  const previous={window:globalThis.window,document:globalThis.document,add:globalThis.addEventListener,interval:globalThis.setInterval,clear:globalThis.clearInterval};
  const events={},buttonEvents={};let created;
  globalThis.window={AudioContext:class extends Context{constructor(){super();created=this;}}};
  globalThis.document={hidden:false,addEventListener:(name,fn)=>{events[name]=fn;}};
  globalThis.addEventListener=(name,fn)=>{events[name]=fn;};globalThis.setInterval=()=>1;globalThis.clearInterval=()=>{};
  try{
    const button={addEventListener:(name,fn)=>{buttonEvents[name]=fn;},setAttribute(){}};
    const audio=createSeaAudio(button);const camera=new THREE.PerspectiveCamera();const options={position:new THREE.Vector3(0,0,-100),camera};
    assert.equal(created,undefined);assert.equal(audio.whaleBlow(options),false);
    events.pointerdown();assert.ok(created);assert.equal(audio.whaleSplash(options),true);
    audio.setVolume(.25);assert.equal(created.gains[1].gain.value,.35*.25);
    buttonEvents.click();assert.equal(audio.whaleBlow(options),false);assert.equal(audio.splash(),false);assert.equal(created.gains[1].gain.value,0);
    buttonEvents.click();assert.equal(audio.whaleDive(options),true);
    globalThis.document.hidden=true;events.visibilitychange();assert.equal(audio.whaleDive(options),false);assert.equal(created.gains[1].gain.value,0);
  }finally{globalThis.window=previous.window;globalThis.document=previous.document;globalThis.addEventListener=previous.add;globalThis.setInterval=previous.interval;globalThis.clearInterval=previous.clear;}
});
