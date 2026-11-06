import * as THREE from 'three';
import {PENS,SCHOOLS,TUBE_COLORS,schoolPosition} from './aquaculture-data.js';
// Reuse one rounded geometry; each player receives a muted, single-color material.
const tubeGeometry=new THREE.TorusGeometry(.82,.27,12,32).rotateX(Math.PI/2);
const tubeMaterials=TUBE_COLORS.map(color=>new THREE.MeshStandardMaterial({
 color,roughness:.72,metalness:0,
 emissive:new THREE.Color(color),emissiveIntensity:.2
}));
export function createTube(color=0){
 const index=Number.isInteger(color)&&color>=0&&color<tubeMaterials.length?color:0;
 const mesh=new THREE.Mesh(tubeGeometry,tubeMaterials[index]);
 mesh.name='aquaculture-tube';mesh.visible=false;mesh.userData.color=index;
 return mesh;
}
export function setTubeColor(tube,color){
 const index=Number.isInteger(color)&&color>=0&&color<tubeMaterials.length?color:0;
 if(tube.userData.color!==index){tube.material=tubeMaterials[index];tube.userData.color=index;}
}
const handleGeometry=new THREE.CylinderGeometry(.022,.032,1.05,6).translate(0,.45,0),rimGeometry=new THREE.TorusGeometry(.28,.022,6,18).rotateX(Math.PI/2).translate(0,.98,0),netGeometry=new THREE.CircleGeometry(.265,12).rotateX(-Math.PI/2).translate(0,.98,0);
const wood=new THREE.MeshStandardMaterial({color:'#b9a98e',roughness:1}),rim=new THREE.MeshStandardMaterial({color:'#d3ddcf',roughness:.9}),netMat=new THREE.MeshBasicMaterial({color:'#dce9e1',wireframe:true,transparent:true,opacity:.4,side:THREE.DoubleSide});
export function createNet(){const group=new THREE.Group();group.name='fry-catching-net';group.add(new THREE.Mesh(handleGeometry,wood),new THREE.Mesh(rimGeometry,rim),new THREE.Mesh(netGeometry,netMat));return group;}
export function createAquaWorld(scene,heightAt){
 const root=new THREE.Group();root.name='shared-aquaculture';scene.add(root);
 const ringGeo=new THREE.TorusGeometry(10/3,.18,8,64).rotateX(Math.PI/2),meshGeo=new THREE.CylinderGeometry(3.24,3.13,3.2,48,4,true).translate(0,-1.6,0);
 const pens=PENS.map((pen,i)=>{const group=new THREE.Group();group.name='fish-pen-'+pen.id;group.position.set(pen.x,0,pen.z);group.add(new THREE.Mesh(ringGeo,new THREE.MeshStandardMaterial({color:i?'#acbba5':'#c8bea8',roughness:.9,emissive:'#79e6cb',emissiveIntensity:0})),new THREE.Mesh(meshGeo,new THREE.MeshBasicMaterial({color:'#a8c2b7',wireframe:true,transparent:true,opacity:.14,side:THREE.DoubleSide,depthWrite:false,depthTest:true})));// Local translucent net overlay keeps the submerged grid visible without changing the opaque ocean shader.
 root.add(group);return {pen,group,pulse:-10000};});
 // Soft underwater silhouettes: a single reusable alpha texture on flat instances.
 // No shadows, reflections or extra lights. The water remains opaque.
 const silhouette=document.createElement('canvas');
 silhouette.width=256;silhouette.height=128;
 const ctx=silhouette.getContext('2d');
 function fishPath(target){
  // Rounded, plump head at +X; a steadily narrowing, finless tail at -X.
  target.beginPath();
  target.moveTo(235,64);
  target.bezierCurveTo(231,46,208,36,178,35);
  target.bezierCurveTo(137,34,108,47,80,57);
  target.bezierCurveTo(61,60,43,63,24,64);
  target.bezierCurveTo(43,65,61,68,80,74);
  target.bezierCurveTo(108,81,137,94,178,93);
  target.bezierCurveTo(208,92,231,82,235,64);
  target.closePath();
 }
 ctx.fillStyle='#1c3540';fishPath(ctx);ctx.fill();
 const fishTexture=new THREE.CanvasTexture(silhouette);
 fishTexture.colorSpace=THREE.SRGBColorSpace;
 fishTexture.magFilter=THREE.NearestFilter;
 fishTexture.generateMipmaps=false;
 fishTexture.minFilter=THREE.NearestFilter;
 const fishGeometry=new THREE.PlaneGeometry(.85,.43).rotateX(-Math.PI/2);
 const fishMaterial=new THREE.MeshBasicMaterial({
  color:'#ffffff',map:fishTexture,transparent:true,opacity:.85,
  alphaTest:.42,depthWrite:false,side:THREE.DoubleSide,
  polygonOffset:true,polygonOffsetFactor:-1
 });
 const fish=new THREE.InstancedMesh(fishGeometry,fishMaterial,50);
 fish.name='fry-schools-instanced';fish.frustumCulled=false;
 fish.castShadow=false;fish.receiveShadow=false;fish.renderOrder=3;root.add(fish);
 // Reuse the same crisp silhouette for night glow: no blurred halo.
 const halo=new THREE.InstancedMesh(fishGeometry,new THREE.MeshBasicMaterial({
  map:fishTexture,color:'#7bffe7',transparent:true,opacity:.8,
  alphaTest:.42,blending:THREE.AdditiveBlending,depthWrite:false,
  side:THREE.DoubleSide
 }),50);
 halo.name='fry-night-glow';halo.frustumCulled=false;
 halo.castShadow=false;halo.receiveShadow=false;halo.renderOrder=4;
 halo.visible=false;root.add(halo);
 const schoolMotion=Array.from({length:48},(_,i)=>({
  phase:(i*2.39996)%(Math.PI*2),drift:i*.73,spread:.85+(i*17%11)*.16,
  fear:0,catchAt:-Infinity,catchDirection:0
 }));
 const dummy=new THREE.Object3D(),splashes=[];
 const splashGeometry=new THREE.TorusGeometry(.25,.014,4,20).rotateX(Math.PI/2);
 for(let i=0;i<4;i++){const mesh=new THREE.Mesh(splashGeometry,new THREE.MeshBasicMaterial({color:'#e7f5ed',transparent:true,opacity:0,depthWrite:false}));mesh.visible=false;root.add(mesh);splashes.push({mesh,at:-10000});}
 const pelletsPos=new Float32Array(24*3),pelletsGeo=new THREE.BufferGeometry();pelletsGeo.setAttribute('position',new THREE.BufferAttribute(pelletsPos,3));const pellets=new THREE.Points(pelletsGeo,new THREE.PointsMaterial({color:'#cbb98b',size:.09,transparent:true,opacity:.9}));pellets.frustumCulled=false;root.add(pellets);
 return {root,pens,
  startCatch(schoolId,now){
   const schoolIndex=SCHOOLS.findIndex(s=>s.id===schoolId);
   if(schoolIndex<0)return;
   for(let n=0;n<12;n++){
    const motion=schoolMotion[schoolIndex*12+n];
    motion.catchAt=now;motion.catchDirection=motion.phase+n*.37;
   }
  },
  feed(penId,now){const p=pens.find(p=>p.pen.id===penId);if(p)p.pulse=now;},
  splash(x,z,now){const s=splashes.reduce((a,b)=>a.at<b.at?a:b);s.at=now;s.mesh.position.set(x,heightAt(x,z)+.15,z);},
  update(now,state,tubeColor=0,playerPosition=null,hour=12){
   const seconds=now*.001;root.visible=true;
   // Night-only gentle glow; MeshBasicMaterial has no physical emissive channel.
   // A subtle color/opacity pulse gives the silhouette a luminous appearance without lights.
   const night=hour>=19.5||hour<5.5;
   const pulse=.5+.5*Math.sin(seconds*1.7);
   fish.material.color.set(night?'#a4fbe9':'#ffffff');
   fish.material.opacity=night?.95:.85;
   halo.visible=night;
   halo.material.opacity=.55+.35*pulse;
   for(let i=0;i<48;i++){
    const school=SCHOOLS[Math.floor(i/12)],n=i%12;
    const motion=schoolMotion[i],center=schoolPosition(school,now);
    const availability=state?.schools.find(s=>s.id===school.id);
    // Independent, smooth elliptical swimming rather than rigid synchronized orbiting.
    const t=seconds*(.25+(i%5)*.026)+motion.phase;
    const radius=(.55+Math.sqrt((n+1)/12)*1.15)*motion.spread;
    let x=center.x+Math.cos(t)*radius+Math.sin(seconds*.31+motion.drift)*.20;
    let z=center.z+Math.sin(t*.83)*radius*.72+Math.cos(seconds*.28+motion.drift)*.20;
    const dx=x-(playerPosition?.x??1e8),dz=z-(playerPosition?.z??1e8);
    const distance=Math.hypot(dx,dz);
    // Keep collision/collection anchored to the original school center.
    // A nearby swimmer makes individual silhouettes scatter and regroup smoothly.
    const targetFear=distance<3.3?Math.min(1,(3.3-distance)/1.9):0;
    motion.fear+=(targetFear-motion.fear)*.15;
    const away=distance>.001?Math.atan2(dz,dx):motion.phase;
    // Net interaction: a quick outward dart, then gradual slowing so the
    // existing two-second server-authoritative catch still succeeds.
    const catchAge=(now-motion.catchAt)*.001;
    const catchBurst=catchAge>=0&&catchAge<2.2
      ?(1-Math.exp(-catchAge*9))*Math.exp(-catchAge*1.4)*1.55:0;
    const flee=motion.fear*(.65+(n%4)*.22);
    x+=Math.cos(away)*flee+Math.cos(motion.catchDirection)*catchBurst;
    z+=Math.sin(away)*flee+Math.sin(motion.catchDirection)*catchBurst;
    const vx=-Math.sin(t)*radius*(.25+(i%5)*.026)
      +Math.cos(away)*motion.fear*.6+Math.cos(motion.catchDirection)*catchBurst;
    const vz=Math.cos(t*.83)*radius*.72*.83*(.25+(i%5)*.026)
      +Math.sin(away)*motion.fear*.6+Math.sin(motion.catchDirection)*catchBurst;
    dummy.position.set(x,heightAt(x,z)+.075,z);
    dummy.rotation.set(0,-Math.atan2(vz,vx),0);
    dummy.scale.setScalar(availability&&availability.availableAt<=now?.8+(i%4)*.075:0);
    dummy.updateMatrix();fish.setMatrixAt(i,dummy.matrix);halo.setMatrixAt(i,dummy.matrix);
   }
   for(let i=0;i<pens.length;i++){
    const p=pens[i],status=state?.pens.find(c=>c.id===p.pen.id),c=status?.cycle,water=heightAt(p.pen.x,p.pen.z),age=now-p.pulse;
    const ringMaterial=p.group.children[0].material;
    ringMaterial.emissive.set(TUBE_COLORS[tubeColor]||TUBE_COLORS[0]);
    // Slow, gentle 3-second breathing glow, slightly brighter than the tube.
     const glow=.24+.08*(.5+.5*Math.sin(seconds*Math.PI*2/3));
     ringMaterial.emissiveIntensity=status?.members.length>=3?glow:0;
    p.group.position.y=water+.14;p.group.rotation.x=Math.sin(seconds*.7+i)*.018;p.group.rotation.z=Math.cos(seconds*.6+i)*.018;
    const angle=seconds*.65+i,x=p.pen.x+Math.sin(angle)*1.1,z=p.pen.z+Math.cos(angle)*1.1,hop=age>=0&&age<1300?Math.sin(age/1300*Math.PI)*.6:0;
    dummy.position.set(x,heightAt(x,z)+.15+hop,z);dummy.rotation.set(0,-angle,hop*.3);dummy.scale.setScalar(c?1+Math.min(1,(now-c.startedAt)/(c.completesAt-c.startedAt))*.8:0);dummy.updateMatrix();fish.setMatrixAt(48+i,dummy.matrix);halo.setMatrixAt(48+i,dummy.matrix);
    for(let j=0;j<12;j++){const k=(i*12+j)*3,fall=age/1300;pelletsPos[k]=p.pen.x+Math.sin(j*2.4)*(.4+j*.06);pelletsPos[k+2]=p.pen.z+Math.cos(j*2.4)*(.4+j*.06);pelletsPos[k+1]=fall>=0&&fall<1?water+.1+(1-fall)*1.1:-10000;}
   }
   pelletsGeo.attributes.position.needsUpdate=true;fish.instanceMatrix.needsUpdate=true;halo.instanceMatrix.needsUpdate=true;
   for(const s of splashes){const a=(now-s.at)/850;s.mesh.visible=a>=0&&a<1;if(s.mesh.visible){s.mesh.scale.setScalar(1+a*3);s.mesh.material.opacity=(1-a)*.65;}}
  }
 };
}
