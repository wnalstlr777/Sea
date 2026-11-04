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
    // Glass was exported in the same Blender coordinates as Ship.glb.
    // Apply the identical scale, Y rotation, and origin offset.
    new GLTFLoader().load(`${import.meta.env.BASE_URL}models/Ship_001_Glass.glb`,glassGltf=>{
      const glass=glassGltf.scene;
      glass.name='ship-glass';
      glass.scale.copy(root.scale);
      glass.rotation.copy(root.rotation);
      glass.position.copy(root.position);
      glass.traverse(obj=>{
        if(!obj.isMesh)return;
        obj.castShadow=false;
        obj.receiveShadow=true;
        const glassMaterial=new THREE.MeshPhysicalMaterial({
          color:0xb6d9e8,metalness:0,roughness:.12,
          transparent:true,opacity:.28,depthWrite:false,
          side:THREE.DoubleSide
        });
        obj.material=glassMaterial;
      });
      ship.add(glass);
      // Overview uses a duplicate under the same pivot as the hull.
      const overviewGlass=glass.clone(true);
      overviewGlass.position.sub(displayPivot.position);
      displayPivot.add(overviewGlass);
      ship.userData.overviewVisualMeshes.push(...glass.children.filter(obj=>obj.isMesh));
    },undefined,error=>console.warn('[Sea] Optional ship glass failed to load:',error));


    ship.userData.overviewDisplay=displayPivot;
    ship.userData.overviewVisualMeshes=[];
    root.traverse(obj=>{if(obj.isMesh&&!obj.name.startsWith('UCX_'))ship.userData.overviewVisualMeshes.push(obj);});
    if(ship.userData.pendingSail){ship.userData.pendingSail();delete ship.userData.pendingSail;}
    ship.userData.loadingState='ready';
    console.info('[Sea] Hull height=30m (5x test), visual deck=',VISUAL_DECK_Y,'UCX meshes=',colliders.length);
  },undefined,error=>{ship.userData.loadingState='error';console.error('[Sea] Ship.glb loading failed:',error);});
  return ship;
}
