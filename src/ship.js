import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {SHIP,DECK,PLAYER_RADIUS,constrainToDeck,isOnDeck} from './deck.js';
export {SHIP,DECK,PLAYER_RADIUS,constrainToDeck,isOnDeck} from './deck.js';

// GLB is already Y-up. The *hull* (not the mast) is 6m tall.
// Hull bounds from Ship geometry: Y -497.055 .. +650.131 source units.
export const HULL_SCALE=6/(650.131-(-497.055));
export const VISUAL_DECK_Y=(355.25-(-497.055))*HULL_SCALE;
export const NETWORK_TO_VISUAL_Y=VISUAL_DECK_Y-SHIP.deckY;
export const SHIP_CENTER_Z=-24;
export function createShip(){
  const ship=new THREE.Group();ship.name='imported-ship';
  new GLTFLoader().load(`${import.meta.env.BASE_URL}models/Ship.glb`,gltf=>{
    const root=gltf.scene;
    root.scale.setScalar(HULL_SCALE);
    // Long source X axis runs along the game's Z axis.
    root.rotation.y=Math.PI/2;
    root.position.set(0,497.055*HULL_SCALE,SHIP_CENTER_Z);
    root.updateMatrixWorld(true);
    const colliders=[];
    root.traverse(obj=>{
      if(!obj.isMesh)return;
      if(obj.name.startsWith('UCX_')){obj.visible=false;colliders.push(obj);return;}
      obj.castShadow=true;obj.receiveShadow=true;
    });
    ship.add(root);ship.userData.model=root;ship.userData.colliders=colliders;
    console.info('[Sea] Hull height=6m, visual deck=',VISUAL_DECK_Y,'UCX meshes=',colliders.length);
  },undefined,error=>console.error('[Sea] Ship.glb loading failed:',error));
  return ship;
}
