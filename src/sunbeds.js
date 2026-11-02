import * as THREE from 'three';
import {SHIP} from './deck.js';
import {VISUAL_DECK_Y,SHIP_CENTER_Z} from './ship.js';

// Five frameless, floor-level blue loungers. Local +Z is the raised head end.
export function createSunbeds(scene){
  const group=new THREE.Group();group.name='sunbeds';scene.add(group);
  const cushion=new THREE.MeshStandardMaterial({color:0x24638c,roughness:.88});
  const beds=[];
  // Five loungers in a single transverse row, rotated 90 degrees clockwise as a set.
  // Rotate both the row positions and bed headings so the loungers do not overlap.
  const positions=[-4.8,-2.4,0,2.4,4.8].map(dx=>[dx,SHIP_CENTER_Z-9]);
  const box=(parent,w,h,d,x,y,z,tilt=0)=>{
    const mesh=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),cushion);
    mesh.position.set(x,y,z);mesh.rotation.x=tilt;
    mesh.castShadow=true;mesh.receiveShadow=true;parent.add(mesh);
  };
  for(const [x,z] of positions){
    const bed=new THREE.Group();bed.position.set(x,VISUAL_DECK_Y,z);bed.rotation.y=0;bed.scale.setScalar(.75);group.add(bed);
    // Cushion only: no feet, rails, platform, frame or separate trim.
    // Flat section ends at +0.55; raised section begins there and climbs toward +Z.
    box(bed,1.55,.24,2.40,0,.15,-.64);
    box(bed,1.55,.24,1.35,0,.44,1.07,-.45);
    beds.push({position:new THREE.Vector3(x,VISUAL_DECK_Y,z),anchor:{x,y:VISUAL_DECK_Y,z,heading:0}});
  }
  return {group,beds};
}
