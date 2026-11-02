import * as THREE from 'three';

// Read the actual exported UCX geometry, transformed with the visual ship.
// A downward ray against upward-facing faces supplies the walkable deck height.
const down=new THREE.Vector3(0,-1,0);
const ray=new THREE.Raycaster();
const normalMatrix=new THREE.Matrix3();
const surfaceNormal=new THREE.Vector3();
const origin=new THREE.Vector3();
export function createDeckCollision(ship){
  function floorAt(x,z,fromY=100){
    const meshes=ship.userData.colliders;
    if(!meshes?.length)return null;
    ship.updateMatrixWorld(true);
    origin.set(x,fromY,z);ray.set(origin,down);ray.near=0;ray.far=200;
    const hits=ray.intersectObjects(meshes,false);
    for(const hit of hits){
      if(!hit.face)continue;
      normalMatrix.getNormalMatrix(hit.object.matrixWorld);
      surfaceNormal.copy(hit.face.normal).applyMatrix3(normalMatrix).normalize();
      if(surfaceNormal.y>.55)return hit.point.y;
    }
    return null;
  }
  return {floorAt,ready:()=>Boolean(ship.userData.colliders?.length)};
}
