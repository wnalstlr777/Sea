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
  const lineMaterial=new THREE.LineBasicMaterial({color:'#f1faf5'});
  for(const y of [SHIP.deckY+.35,SHIP.deckY+1.05]){
    const line=new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(DECK.map(([x,z])=>new THREE.Vector3(x,y,z))),lineMaterial);ship.add(line);
  }
  const posts=[];
  for(let i=0;i<n;i++){
    const a=DECK[i],b=DECK[(i+1)%n],count=Math.ceil(Math.hypot(b[0]-a[0],b[1]-a[1])/2.5);
    for(let j=0;j<count;j++){const x=THREE.MathUtils.lerp(a[0],b[0],j/count),z=THREE.MathUtils.lerp(a[1],b[1],j/count);posts.push(new THREE.Vector3(x,SHIP.deckY,z),new THREE.Vector3(x,SHIP.deckY+1.05,z));}
  }
  ship.add(new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(posts),lineMaterial));
  // Flush deck strips suggest planks without adding upper floors or obstacles.
  const seams=[];for(let z=-38;z<40;z+=1){const left=constrainToDeck({x:-40,y:0,z},.08),right=constrainToDeck({x:40,y:0,z},.08);if(Math.abs(left.z-z)<.01&&Math.abs(right.z-z)<.01)seams.push(new THREE.Vector3(left.x,SHIP.deckY+.008,z),new THREE.Vector3(right.x,SHIP.deckY+.008,z));}
  ship.add(new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(seams),new THREE.LineBasicMaterial({color:'#a99572',transparent:true,opacity:.4})));
  return ship;
}
