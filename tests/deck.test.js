import test from 'node:test';
import assert from 'node:assert/strict';
import {constrainToDeck,isOnDeck,SHIP} from '../src/ship.js';
test('capsule stays within all hull edges including tapered bow and corners',()=>{
  for(let x=-40;x<=40;x+=.5)for(let z=-70;z<=70;z+=.5){const p=constrainToDeck({x,y:-100,z},.54);assert.ok(isOnDeck(p,.54),JSON.stringify(p));assert.equal(p.y,SHIP.deckY);}
});
test('sustained walking into bow, stern and sides cannot escape; edge movement slides',()=>{
  for(const [dx,dz] of [[0,-1],[0,1],[-1,0],[1,0],[1,-1],[-1,-1]]){
    const p={x:0,y:SHIP.deckY,z:0};for(let i=0;i<2000;i++){p.x+=dx*.175;p.z+=dz*.175;constrainToDeck(p,.54);assert.ok(isOnDeck(p,.54));}
  }
  const p=constrainToDeck({x:12,y:0,z:0},.54);const x=p.x;p.z-=1;constrainToDeck(p,.54);assert.equal(p.x,x);assert.equal(p.z,-1);
});

test("ship footprint doubles while deck and railing height stay fixed",()=>{assert.equal(SHIP.length,80);assert.equal(SHIP.width,24);assert.equal(SHIP.deckY,6.8);});
