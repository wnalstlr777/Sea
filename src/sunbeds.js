import * as THREE from 'three';
import {SHIP} from './deck.js';

// Five lightweight loungers on the open deck, each with a fixed lying anchor.
export function createSunbeds(scene){
  const group=new THREE.Group();group.name='sunbeds';scene.add(group);
  const frame=new THREE.MeshStandardMaterial({color:0xd6b78c,roughness:.82});
  const cushion=new THREE.MeshStandardMaterial({color:0x78b5b4,roughness:.9});
  const metal=new THREE.MeshStandardMaterial({color:0xf2e5d4,roughness:.7});
  const beds=[];
  const positions=[[-3.7,-11],[3.7,-11],[-3.7,1],[3.7,1],[-3.7,13]];
  const box=(parent,w,h,d,material,x,y,z,tilt=0)=>{const mesh=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),material);mesh.position.set(x,y,z);mesh.rotation.x=tilt;mesh.castShadow=true;mesh.receiveShadow=true;parent.add(mesh);};
  for(const [x,z] of positions){
    const bed=new THREE.Group();bed.position.set(x,SHIP.deckY,z);group.add(bed);
    box(bed,1.7,.15,3.6,frame,0,.45,0);
    box(bed,1.48,.13,2.35,cushion,0,.56,.60);
    box(bed,1.48,.13,1.38,cushion,0,.88,-1.05,-.36);
    for(const sx of [-.65,.65])for(const sz of [-1.4,1.4])box(bed,.12,.45,.12,metal,sx,.22,sz);
    beds.push({position:new THREE.Vector3(x,SHIP.deckY,z),anchor:new THREE.Vector3(x,SHIP.deckY+.68,z+1.13)});
  }
  return {group,beds};
}
