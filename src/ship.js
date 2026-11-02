import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {SHIP,DECK,PLAYER_RADIUS,constrainToDeck,isOnDeck} from './deck.js';
export {SHIP,DECK,PLAYER_RADIUS,constrainToDeck,isOnDeck} from './deck.js';

// GLB is already Y-up. The *hull* (not the mast) is 6m tall.
// Hull bounds from Ship geometry: Y -497.055 .. +650.131 source units.
export const HULL_SCALE=5*6/(650.131-(-497.055));
// Keep the deck at its previous visual height while enlarging the hull.
const PREVIOUS_DECK_Y=(355.25-(-497.055))*(6/(650.131-(-497.055)));
export const VISUAL_DECK_Y=PREVIOUS_DECK_Y+9; // Ship, UCX and all imported deck elements share this deck datum; lowered 2m again.
export const NETWORK_TO_VISUAL_Y=VISUAL_DECK_Y-SHIP.deckY;
export const SHIP_CENTER_Z=-24;
export function createShip(){
  const ship=new THREE.Group();ship.name='imported-ship';ship.userData.loadingState='loading';
  new GLTFLoader().load(`${import.meta.env.BASE_URL}models/Ship.glb`,gltf=>{
    const root=gltf.scene;
    root.scale.setScalar(HULL_SCALE);
    // Long source X axis runs along the game's Z axis.
    root.rotation.y=-Math.PI/2; // Turn the imported boat 180 degrees; keep world and camera unchanged.
    root.position.set(0,VISUAL_DECK_Y-355.25*HULL_SCALE,SHIP_CENTER_Z);
    root.updateMatrixWorld(true);
    const colliders=[];
    root.traverse(obj=>{
      if(!obj.isMesh)return;
      if(obj.name.startsWith('UCX_')){obj.visible=false;obj.material=new THREE.MeshBasicMaterial({side:THREE.DoubleSide,visible:false});colliders.push(obj);return;}
      // Recolor only the ship's named red material; leave white/metal/wood intact.
      const recolor=material=>{
        if(!material?.name?.toLowerCase().includes('c_boat_red_mat'))return material;
        const gray=material.clone();
        gray.color.set('#101114');
        return gray;
      };
      if(Array.isArray(obj.material))obj.material=obj.material.map(recolor);
      else obj.material=recolor(obj.material);
      obj.castShadow=true;obj.receiveShadow=true;
    });
    // Render-only duplicate: shared geometries/materials, independent transforms.
    // The original model and UCX remain in their exact existing positions.
    const displayPivot=new THREE.Group();
    displayPivot.name='sea-overview-bob';
    displayPivot.position.set(0,VISUAL_DECK_Y-5,SHIP_CENTER_Z);
    const displayRoot=root.clone(true);
    displayRoot.position.sub(displayPivot.position);
    displayRoot.traverse(obj=>{if(obj.isMesh&&obj.name.startsWith('UCX_'))obj.visible=false;});
    displayPivot.add(displayRoot);
    displayPivot.visible=false;
    ship.add(displayPivot);
    ship.add(root);ship.userData.model=root;ship.userData.colliders=colliders;
    ship.userData.overviewDisplay=displayPivot;
    ship.userData.overviewVisualMeshes=[];
    root.traverse(obj=>{if(obj.isMesh&&!obj.name.startsWith('UCX_'))ship.userData.overviewVisualMeshes.push(obj);});
    ship.userData.loadingState='ready';
    console.info('[Sea] Hull height=30m (5x test), visual deck=',VISUAL_DECK_Y,'UCX meshes=',colliders.length);
  },undefined,error=>{ship.userData.loadingState='error';console.error('[Sea] Ship.glb loading failed:',error);});
  return ship;
}
