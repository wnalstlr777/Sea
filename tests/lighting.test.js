import test from 'node:test';
import * as THREE from 'three';
import assert from 'node:assert/strict';
import {celestialDirections,celestialVisibility} from '../src/lighting.js';
test('sun has lateral movement and crosses sunset horizon continuously',()=>{
  const before=celestialDirections(17).sun,after=celestialDirections(19).sun;
  assert.ok(before.x>0&&after.x<0);assert.ok(before.y>0&&after.y<0);
  assert.ok(celestialDirections(18).sun.z<-.99);
  for(let h=0;h<24;h+=.01){const a=celestialDirections(h),b=celestialDirections(h+.01);assert.ok(a.sun.distanceTo(b.sun)<.01);assert.ok(a.moon.distanceTo(b.moon)<.01);}
});
test('moon is above front horizon at midnight; cycle wraps continuously',()=>{
  assert.ok(celestialDirections(0).moon.y>.06);assert.ok(celestialDirections(0).moon.z<-.99);
  for(const key of ['sun','moon'])assert.ok(celestialDirections(0)[key].distanceTo(celestialDirections(24)[key])<1e-6);
});

test('sun and moon never coexist, including twilight and midnight wrap',()=>{
  for(let hour=0;hour<=24;hour+=.001){const v=celestialVisibility(hour);assert.ok(!(v.sun>0&&v.moon>0),String(hour));}
  assert.equal(celestialVisibility(12).sun,1);assert.equal(celestialVisibility(0).moon,1);
});

test('horizon reduction is localized smoothly around noon',async()=>{
  const {horizonGradientStrength}=await import('../src/lighting.js');
  for(const hour of [0,6,10,11,13,15,18,24])assert.equal(horizonGradientStrength(hour),1);
  assert.equal(horizonGradientStrength(12),.5);
  assert.equal(horizonGradientStrength(11.5),horizonGradientStrength(12.5));
  for(let hour=11;hour<13;hour+=.01)assert.ok(Math.abs(horizonGradientStrength(hour+.01)-horizonGradientStrength(hour))<.01);
});
test('sun sets 20 degrees from vertical and moon retraces the same path',()=>{
  const near=celestialDirections(17.9).sun;
  const tilt=Math.atan2(Math.abs(near.x),near.y)*180/Math.PI;
  assert.ok(tilt>=15&&tilt<=25);
  assert.ok(celestialDirections(18).sun.distanceTo(celestialDirections(18).moon)<1e-6);
  for(let hours=0;hours<=6;hours+=.1){
    assert.ok(celestialDirections(18-.11*Math.sin(hours/12*Math.PI)*12/Math.PI).sun.distanceTo(celestialDirections(18+hours).moon)<1e-6);
  }
});

test('moon stays inside the upper mobile deck view throughout the visible night',()=>{
  const camera=new THREE.PerspectiveCamera(50,390/844,.5,50000);
  camera.position.set(0,3.5,7);camera.lookAt(0,1.3,0);camera.updateMatrixWorld();
  for(let hour=19.2;hour<=28.7;hour+=.1){
    const moon=celestialDirections(hour%24).moon;
    const center=moon.clone().multiplyScalar(24000).project(camera);
    assert.ok(Math.abs(center.x)<.8&&center.y>.55&&center.y<.94,`${hour}: ${center.toArray()}`);
  }
  assert.ok(celestialDirections(19).moon.y<celestialDirections(21).moon.y);
  assert.ok(celestialDirections(21).moon.y<celestialDirections(24).moon.y);
});
