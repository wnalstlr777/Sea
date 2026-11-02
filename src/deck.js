export const SHIP={length:80,width:24,height:12,deckY:13.6};
// Clockwise XZ outline shared by the visible deck, railing and collider.
// Walkable conservative rectangle inside the three UCX deck regions.
// Network Y remains 13.6 until a server protocol migration.
export const DECK=[[-6.2,-11],[6.2,-11],[6.2,-37],[-6.2,-37]]; // 5x ship: conservative walkable deck
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
