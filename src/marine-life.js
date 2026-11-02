import * as THREE from 'three';

// Reusable small meshes: one dolphin/whale encounter at a time, outside the hull.
export function createMarineLife(scene,camera,audio){
  const group=new THREE.Group();group.name='marine-life';scene.add(group);
  const grey=new THREE.MeshStandardMaterial({color:'#657d89',roughness:.45});
  const belly=new THREE.MeshStandardMaterial({color:'#bacbd1',roughness:.65});
  const whaleGrey=new THREE.MeshStandardMaterial({color:'#304b5e',roughness:.55});
  const sphere=new THREE.SphereGeometry(1,14,10);
  function ellipsoid(parent,material,x,y,z,sx,sy,sz){const mesh=new THREE.Mesh(sphere,material);mesh.position.set(x,y,z);mesh.scale.set(sx,sy,sz);parent.add(mesh);return mesh;}
  function animal(whale){
    const root=new THREE.Group();root.name=whale?'whale':'dolphin';const material=whale?whaleGrey:grey;
    ellipsoid(root,material,0,0,0,whale?2: .65,whale?1.5:.6,whale?5:2);
    ellipsoid(root,belly,0,whale?-.65:-.24,0,whale?1.6:.53,whale?.75:.32,whale?4:1.8);
    if(!whale)ellipsoid(root,material,0,.03,-2,.22,.18,.75);
    const fin=new THREE.Mesh(new THREE.ConeGeometry(whale?.8:.4,whale?1.5:.85,3),material);fin.position.set(0,whale?1.5:.6,.3);fin.rotation.y=Math.PI/2;root.add(fin);
    const tail=new THREE.Group();tail.position.z=whale?4.8:1.95;root.add(tail);
    for(const side of [-1,1]){
      const fluke=ellipsoid(tail,material,side*(whale?1.1:.55),0,0,whale?1.4:.7,whale?.18:.10,whale?.6:.32);fluke.rotation.y=side*.25;
      const flipper=ellipsoid(root,material,side*(whale?1.7:.62),-.25,-.7,whale?1.6:.7,.10,whale?.48:.24);flipper.rotation.z=side*-.35;
    }
    root.visible=false;group.add(root);return {root,tail};
  }
  const dolphin=animal(false),whale=animal(true);whale.root.scale.setScalar(10);
  const splashGeometry=new THREE.BufferGeometry(),drops=new Float32Array(60*3);
  splashGeometry.setAttribute('position',new THREE.BufferAttribute(drops,3).setUsage(THREE.DynamicDrawUsage));
  const splash=new THREE.Points(splashGeometry,new THREE.PointsMaterial({color:'#d4f6ff',size:.3,transparent:true,opacity:.8,depthWrite:false}));splash.visible=false;splash.frustumCulled=false;group.add(splash);
  const spoutCount=80,spoutPositions=new Float32Array(spoutCount*3);
  const spoutGeometry=new THREE.BufferGeometry();
  spoutGeometry.setAttribute('position',new THREE.BufferAttribute(spoutPositions,3).setUsage(THREE.DynamicDrawUsage));
  const spout=new THREE.Points(spoutGeometry,new THREE.PointsMaterial({color:'#b8eaff',size:3.5,transparent:true,opacity:.65,depthWrite:false}));
  spout.frustumCulled=false;spout.visible=false;group.add(spout);
  const origin=new THREE.Vector3(),direction=new THREE.Vector3(),right=new THREE.Vector3();
  let next=12,age=-1,current=null,encounters=0,didSplash=false;
  function start(){
    current=encounters++%3===2?whale:dolphin;current.root.visible=true;age=0;didSplash=false;
    camera.getWorldDirection(direction);direction.y=0;direction.normalize();right.crossVectors(direction,THREE.Object3D.DEFAULT_UP).normalize();
    // Beyond the bow, to either side, within the current viewing direction.
    const side=Math.random()<.5?-1:1;
    origin.copy(camera.position).addScaledVector(direction,current===whale?170:65).addScaledVector(right,side*(current===whale?70:26));origin.y=0;
    // Guarantee clearance from the fixed ship footprint, even when looking aft.
    const clearance=current===whale?85:20;
    if(Math.abs(origin.x)<clearance&&Math.abs(origin.z)<(current===whale?120:55))origin.x=side*(clearance+5);
    current.root.rotation.y=Math.atan2(-right.x,-right.z);
    if(current===whale)audio.whale();else audio.dolphin();
    group.userData.lastEncounter=current===whale?'whale':'dolphin';
  }
  function update(dt){
    if(document.hidden)return;
    dt=Math.min(dt,.25);
    if(age<0){next-=dt;if(next<=0)start();return;}
    age+=dt;const isWhale=current===whale,duration=isWhale?11:4.5,t=age/duration;
    current.root.position.copy(origin).addScaledVector(right,(t-.5)*(isWhale?24:20));
    const arc=Math.sin(Math.PI*Math.min(1,t));
    current.root.position.y=isWhale?-16+arc*16:-1.4+arc*5.5;
    current.root.rotation.x=isWhale?Math.cos(t*Math.PI)*.08:Math.cos(t*Math.PI)*-.65;
    current.tail.rotation.x=Math.sin(age*(isWhale?2:6))*.22;
    // A brief breath near the top of the whale's surfacing arc.
    const breath=isWhale?(age-duration*.37):-1;
    spout.visible=isWhale&&breath>=0&&breath<2.2;
    if(spout.visible){
      // The whale's nose is at local -Z, scaled by ten.
      spout.position.copy(current.root.position);
      const nose=new THREE.Vector3(0,5,-39).applyEuler(current.root.rotation);
      spout.position.add(nose);
      for(let i=0;i<spoutCount;i++){
        const phase=(breath*1.8+i/spoutCount)%1;
        const angle=i*2.39996;
        const spread=phase*phase*25;
        spoutPositions[i*3]=Math.cos(angle)*spread;
        spoutPositions[i*3+1]=phase*60-20*phase*phase;
        spoutPositions[i*3+2]=Math.sin(angle)*spread;
      }
      spoutGeometry.attributes.position.needsUpdate=true;
      spout.material.opacity=.65*Math.min(1,(2.2-breath)*2);
    }
    if(t>.72&&!didSplash){didSplash=true;audio.splash();splash.visible=true;}
    if(splash.visible){
      const a=Math.max(0,age-duration*.72);splash.position.copy(current.root.position);splash.position.y=.1;
      for(let i=0;i<60;i++){const angle=i*2.39996,speed=1+(i%7)*.35;drops[i*3]=Math.cos(angle)*speed*a;drops[i*3+1]=Math.max(0,(2+i%4)*a-4*a*a);drops[i*3+2]=Math.sin(angle)*speed*a;}
      splash.geometry.attributes.position.needsUpdate=true;splash.material.opacity=Math.max(0,.8-a*.6);
    }
    if(t>=1){current.root.visible=false;splash.visible=false;spout.visible=false;age=-1;next=24+Math.random()*22;}
  }
  return {update,group};
}
