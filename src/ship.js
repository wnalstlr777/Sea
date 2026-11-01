import * as THREE from 'three';

export const SHIP={length:80,width:24,height:6,deckY:6.8};
// Clockwise XZ outline shared by the visible deck, railing and collider.
export const DECK=[[-4,20],[4,20],[6,15],[6,-10],[4,-17],[0,-20],[-4,-17],[-6,-10],[-6,15]].map(([x,z])=>[x*2,z*2]);
export const PLAYER_RADIUS=.42;

export function constrainToDeck(position,radius=PLAYER_RADIUS){
  // Intersect inward-offset half planes, keeping the whole capsule on deck.
  for(let pass=0;pass<12;pass++)for(let i=0;i<DECK.length;i++){
    const a=DECK[i],b=DECK[(i+1)%DECK.length];
    const dx=b[0]-a[0],dz=b[1]-a[1],len=Math.hypot(dx,dz);
    const nx=dz/len,nz=-dx/len;
    const distance=(position.x-a[0])*nx+(position.z-a[1])*nz;
    if(distance<radius){position.x+=nx*(radius-distance);position.z+=nz*(radius-distance);}
  }
  position.y=SHIP.deckY;
  return position;
}
export function isOnDeck(position,radius=PLAYER_RADIUS){
  return DECK.every((a,i)=>{const b=DECK[(i+1)%DECK.length],dx=b[0]-a[0],dz=b[1]-a[1];return ((position.x-a[0])*dz-(position.z-a[1])*dx)/Math.hypot(dx,dz)>=radius-1e-6;});
}
export function createShip(){
  const ship=new THREE.Group();
  const vertices=[],indices=[],n=DECK.length;
  for(const [scale,y] of [[.72,.3],[1,5.8],[1,SHIP.deckY]])for(const [x,z] of DECK)vertices.push(x*scale,y,z*scale);
  for(let ring=0;ring<2;ring++)for(let i=0;i<n;i++){const a=ring*n+i,b=ring*n+(i+1)%n;indices.push(a,b,a+n,b,b+n,a+n);}
  const hullGeometry=new THREE.BufferGeometry();hullGeometry.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));hullGeometry.setIndex(indices);hullGeometry.computeVertexNormals();
  ship.add(new THREE.Mesh(hullGeometry,new THREE.MeshStandardMaterial({color:'#e5efec',roughness:.55,side:THREE.DoubleSide})));
  const shape=new THREE.Shape(DECK.map(([x,z])=>new THREE.Vector2(x,-z)));
  const deck=new THREE.Mesh(new THREE.ShapeGeometry(shape),new THREE.MeshStandardMaterial({color:'#bcaa85',roughness:.9,side:THREE.DoubleSide}));deck.rotation.x=-Math.PI/2;deck.position.y=SHIP.deckY;ship.add(deck);
  const railSegments=[];
  for(const y of [SHIP.deckY+.35,SHIP.deckY+1.05])for(let i=0;i<n;i++){
    const a=DECK[i],b=DECK[(i+1)%n];railSegments.push([new THREE.Vector3(a[0],y,a[1]),new THREE.Vector3(b[0],y,b[1])]);
  }
  for(let i=0;i<n;i++){
    const a=DECK[i],b=DECK[(i+1)%n],count=Math.ceil(Math.hypot(b[0]-a[0],b[1]-a[1])/2.5);
    for(let j=0;j<count;j++){const x=THREE.MathUtils.lerp(a[0],b[0],j/count),z=THREE.MathUtils.lerp(a[1],b[1],j/count);railSegments.push([new THREE.Vector3(x,SHIP.deckY,z),new THREE.Vector3(x,SHIP.deckY+1.05,z)]);}
  }
  const rails=new THREE.InstancedMesh(new THREE.CylinderGeometry(.025,.025,1,6),new THREE.MeshStandardMaterial({color:'#a8b8bf',roughness:.65,metalness:.15,emissive:0}),railSegments.length);
  rails.name='deck-rails';const matrix=new THREE.Matrix4(),rotation=new THREE.Quaternion(),up=new THREE.Vector3(0,1,0);
  railSegments.forEach(([a,b],i)=>{const direction=b.clone().sub(a);rotation.setFromUnitVectors(up,direction.clone().normalize());matrix.compose(a.clone().add(b).multiplyScalar(.5),rotation,new THREE.Vector3(1,direction.length(),1));rails.setMatrixAt(i,matrix);});rails.instanceMatrix.needsUpdate=true;ship.add(rails);
  // Flush plank joints also receive lighting instead of glowing like unlit lines.
  const seams=[];for(let z=-38;z<40;z+=1){const left=constrainToDeck({x:-40,y:0,z},.08),right=constrainToDeck({x:40,y:0,z},.08);if(Math.abs(left.z-z)<.01&&Math.abs(right.z-z)<.01)seams.push([left.x,right.x,z]);}
  const joints=new THREE.InstancedMesh(new THREE.BoxGeometry(1,.006,.012),new THREE.MeshStandardMaterial({color:'#927b59',roughness:1}),seams.length);
  seams.forEach(([left,right,z],i)=>{matrix.compose(new THREE.Vector3((left+right)/2,SHIP.deckY+.004,z),new THREE.Quaternion(),new THREE.Vector3(right-left,1,1));joints.setMatrixAt(i,matrix);});joints.instanceMatrix.needsUpdate=true;ship.add(joints);
  return ship;
}
