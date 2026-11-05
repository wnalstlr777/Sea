import * as THREE from 'three';
import {VISUAL_DECK_Y} from './ship.js';

// Read the actual exported UCX geometry, transformed with the visual ship.
// A downward ray finds the highest deck surface, including exported UCX faces with reversed winding.
const down=new THREE.Vector3(0,-1,0);
const ray=new THREE.Raycaster();
const normalMatrix=new THREE.Matrix3();
const surfaceNormal=new THREE.Vector3();
const origin=new THREE.Vector3();
export function createDeckCollision(ship){
  function floorAt(x,z,fromY=VISUAL_DECK_Y+9){
    const meshes=ship.userData.colliders;
    if(!meshes?.length)return null;
    ship.updateMatrixWorld(true);
    origin.set(x,fromY,z);ray.set(origin,down);ray.near=0;ray.far=200;
    const hits=ray.intersectObjects(meshes,false);
    for(const hit of hits){
      if(!hit.face)continue;
      normalMatrix.getNormalMatrix(hit.object.matrixWorld);
      surfaceNormal.copy(hit.face.normal).applyMatrix3(normalMatrix).normalize();
      // Some UCX_Bottom02 top faces are wound downward in the exported GLB.
      // DoubleSide raycasts already hit both sides; accept either face winding.
      if(Math.abs(surfaceNormal.y)>.55)return hit.point.y;
    }
    return null;
  }
  // A landing is safe only if the center AND the surrounding foot area
  // are all supported at approximately the same height.
  function stableFloor(x,z){
    const y=floorAt(x,z);
    if(y===null)return null;
    for(const r of [.38,.72]){
      for(let i=0;i<8;i++){
        const a=i*Math.PI/4;
        const nearby=floorAt(x+Math.cos(a)*r,z+Math.sin(a)*r);
        if(nearby===null||Math.abs(nearby-y)>.55)return null;
      }
    }
    return y;
  }
  function safeSpot(preferredX=0,preferredZ=-33){
    if(!ship.userData.colliders?.length)return null;
    // Search inward supported areas first, never choose a narrow ledge.
    for(const radius of [0,1,2,3,4,5,7,9,11,14,17]){
      for(let i=0;i<(radius===0?1:24);i++){
        const angle=i*Math.PI/12;
        const x=preferredX+Math.cos(angle)*radius;
        const z=preferredZ+Math.sin(angle)*radius;
        const y=stableFloor(x,z);
        if(y!==null)return {x,z,y};
      }
    }
    return null;
  }
  // Horizontal body sweep: floor-only raycasts cannot stop hull penetration.
  const sideRay=new THREE.Raycaster(),direction=new THREE.Vector3(),sideOrigin=new THREE.Vector3();
  function blockedMove(x,z,dx,dz,feetY){
    const meshes=ship.userData.colliders, distance=Math.hypot(dx,dz);
    if(!meshes?.length||distance<1e-6)return {x:x+dx,z:z+dz};
    ship.updateMatrixWorld(true);
    direction.set(dx/distance,0,dz/distance);
    let allowed=distance;
    for(const h of [.4,1.1,1.8]){
      sideOrigin.set(x,feetY+h,z);
      sideRay.set(sideOrigin,direction);sideRay.near=0;sideRay.far=distance+.28;
      for(const hit of sideRay.intersectObjects(meshes,false)){
        if(!hit.face)continue;
        normalMatrix.getNormalMatrix(hit.object.matrixWorld);
        surfaceNormal.copy(hit.face.normal).applyMatrix3(normalMatrix).normalize();
        if(Math.abs(surfaceNormal.y)>.55)continue;
        if(surfaceNormal.dot(direction)>0)surfaceNormal.negate();
        if(surfaceNormal.dot(direction)>-.2)continue;
        allowed=Math.min(allowed,Math.max(0,hit.distance-.28));
        break;
      }
    }
    return {x:x+direction.x*allowed,z:z+direction.z*allowed};
  }
  return {floorAt,safeSpot,blockedMove,ready:()=>Boolean(ship.userData.colliders?.length)};
}
