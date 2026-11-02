import * as THREE from 'three';
import {VISUAL_DECK_Y} from './ship.js';

// Read the actual exported UCX geometry, transformed with the visual ship.
// A downward ray against upward-facing faces supplies the walkable deck height.
const down=new THREE.Vector3(0,-1,0);
const ray=new THREE.Raycaster();
const normalMatrix=new THREE.Matrix3();
const surfaceNormal=new THREE.Vector3();
const origin=new THREE.Vector3();
export function createDeckCollision(ship){
  function floorAt(x,z,fromY=VISUAL_DECK_Y+3){
    const meshes=ship.userData.colliders;
    if(!meshes?.length)return null;
    ship.updateMatrixWorld(true);
    origin.set(x,fromY,z);ray.set(origin,down);ray.near=0;ray.far=200;
    const hits=ray.intersectObjects(meshes,false);
    for(const hit of hits){
      if(!hit.face)continue;
      normalMatrix.getNormalMatrix(hit.object.matrixWorld);
      surfaceNormal.copy(hit.face.normal).applyMatrix3(normalMatrix).normalize();
      if(surfaceNormal.y>.55 && Math.abs(hit.point.y-VISUAL_DECK_Y)<5)return hit.point.y;
    }
    return null;
  }
  function safeSpot(preferredX=0,preferredZ=-33){
    if(!ship.userData.colliders?.length)return null;
    // Find a genuine UCX-supported landing point, rather than assuming -33 is safe.
    for(const radius of [0,1,2,3,4,5,7,9,11,14,17]){
      for(let i=0;i<(radius===0?1:24);i++){
        const angle=i*Math.PI/12;
        const x=preferredX+Math.cos(angle)*radius;
        const z=preferredZ+Math.sin(angle)*radius;
        const y=floorAt(x,z);
        if(y!==null)return {x,z,y};
      }
    }
    return null;
  }
  return {floorAt,safeSpot,ready:()=>Boolean(ship.userData.colliders?.length)};
}
