import test from 'node:test';
import assert from 'node:assert/strict';
import {celestialDirections} from '../src/lighting.js';
test('sun has lateral movement and crosses sunset horizon continuously',()=>{
  const before=celestialDirections(17).sun,after=celestialDirections(19).sun;
  assert.ok(before.x>0&&after.x<0);assert.ok(before.y>0&&after.y<0);
  assert.ok(celestialDirections(18).sun.z<-.99);
  for(let h=0;h<24;h+=.01){const a=celestialDirections(h),b=celestialDirections(h+.01);assert.ok(a.sun.distanceTo(b.sun)<.01);assert.ok(a.moon.distanceTo(b.moon)<.01);}
});
test('moon is above front horizon at midnight; cycle wraps continuously',()=>{
  assert.ok(celestialDirections(0).moon.y>.06);assert.ok(celestialDirections(0).moon.z<0);
  for(const key of ['sun','moon'])assert.ok(celestialDirections(0)[key].distanceTo(celestialDirections(24)[key])<1e-6);
});
