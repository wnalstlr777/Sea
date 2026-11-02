import * as THREE from 'three';
import {SHIP} from './deck.js';

// Five compact resort loungers. Local -Z is the head / backrest end.
export function createSunbeds(scene){
  const group=new THREE.Group();group.name='sunbeds';scene.add(group);
  const frame=new THREE.MeshStandardMaterial({color:0xd7c4a7,roughness:.78});
  const cushion=new THREE.MeshStandardMaterial({color:0x5a9da9,roughness:.9});
  const edge=new THREE.MeshStandardMaterial({color:0x8bc4c9,roughness:.86});
  const beds=[];
  const positions=[[-3.7,-11],[3.7,-11],[-3.7,1],[3.7,1],[-3.7,13]];
  const box=(parent,w,h,d,material,x,y,z,tilt=0)=>{
    const mesh=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),material);
    mesh.position.set(x,y,z);mesh.rotation.x=tilt;mesh.castShadow=true;mesh.receiveShadow=true;parent.add(mesh);return mesh;
  };
  for(const [x,z] of positions){
    const bed=new THREE.Group();bed.position.set(x,SHIP.deckY,z);group.add(bed);
    // Connected lower platform and elevated backrest meet at z=-0.58.
    box(bed,1.65,.19,3.55,frame,0,.47,0);
    for(const sx of [-.66,.66])for(const sz of [-1.38,1.38])box(bed,.16,.45,.18,frame,sx,.22,sz);
    // Seat extends toward the foot (+Z). The inclined backrest joins the seat without floating.
    box(bed,1.49,.19,2.38,cushion,0,.64,.60);
    box(bed,1.51,.22,1.40,cushion,0,.94,-1.13,-.47);
    box(bed,1.56,.07,2.39,edge,0,.54,.60);
    // Subtle side supports under the reclining back.
    for(const sx of [-.69,.69])box(bed,.10,.26,1.20,frame,sx,.69,-1.12,-.47);
    beds.push({position:new THREE.Vector3(x,SHIP.deckY,z),anchor:new THREE.Vector3(x,SHIP.deckY+.76,z+1.23)});
  }
  return {group,beds};
}
