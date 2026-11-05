import * as THREE from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
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
 const ringGeo=new THREE.TorusGeometry(2.5,.18,8,48).rotateX(Math.PI/2),meshGeo=new THREE.CylinderGeometry(2.36,2.2,3.2,24,4,true).translate(0,-1.6,0);
 const pens=PENS.map((pen,i)=>{const group=new THREE.Group();group.name='fish-pen-'+pen.id;group.position.set(pen.x,0,pen.z);group.add(new THREE.Mesh(ringGeo,new THREE.MeshStandardMaterial({color:i?'#acbba5':'#c8bea8',roughness:.9,emissive:'#79e6cb',emissiveIntensity:0})),new THREE.Mesh(meshGeo,new THREE.MeshBasicMaterial({color:'#a8c2b7',wireframe:true,transparent:true,opacity:.14,side:THREE.DoubleSide,depthWrite:false,depthTest:true})));// Local translucent net overlay keeps the submerged grid visible without changing the opaque ocean shader.
 root.add(group);return {pen,group,pulse:-10000};});
 const body=new THREE.SphereGeometry(.09,6,4).scale(1.8,.65,.7),tail=new THREE.ConeGeometry(.07,.13,3).rotateZ(Math.PI/2).translate(-.19,0,0);
 const fish=new THREE.InstancedMesh(mergeGeometries([body,tail]),new THREE.MeshStandardMaterial({color:'#94cbc4',roughness:.7}),50);body.dispose();tail.dispose();fish.name='fry-schools-instanced';fish.frustumCulled=false;root.add(fish);
 const dummy=new THREE.Object3D(),splashes=[];
 const splashGeometry=new THREE.TorusGeometry(.25,.014,4,20).rotateX(Math.PI/2);
 for(let i=0;i<4;i++){const mesh=new THREE.Mesh(splashGeometry,new THREE.MeshBasicMaterial({color:'#e7f5ed',transparent:true,opacity:0,depthWrite:false}));mesh.visible=false;root.add(mesh);splashes.push({mesh,at:-10000});}
 const pelletsPos=new Float32Array(24*3),pelletsGeo=new THREE.BufferGeometry();pelletsGeo.setAttribute('position',new THREE.BufferAttribute(pelletsPos,3));const pellets=new THREE.Points(pelletsGeo,new THREE.PointsMaterial({color:'#cbb98b',size:.09,transparent:true,opacity:.9}));pellets.frustumCulled=false;root.add(pellets);
 return {root,pens,
  feed(penId,now){const p=pens.find(p=>p.pen.id===penId);if(p)p.pulse=now;},
  splash(x,z,now){const s=splashes.reduce((a,b)=>a.at<b.at?a:b);s.at=now;s.mesh.position.set(x,heightAt(x,z)+.15,z);},
  update(now,state){
   const seconds=now*.001;root.visible=true;
   for(let i=0;i<48;i++){
    const school=SCHOOLS[Math.floor(i/12)],n=i%12,center=schoolPosition(school,now),availability=state?.schools.find(s=>s.id===school.id);
    const angle=n*2.39996+seconds*.25,radius=.25+Math.sqrt(n/12)*.75;
    const x=center.x+Math.cos(angle)*radius,z=center.z+Math.sin(angle)*radius;
    dummy.position.set(x,heightAt(x,z)+.1+Math.sin(seconds*3+n)*.035,z);dummy.rotation.set(0,-angle-Math.PI/2,0);dummy.scale.setScalar(availability&&availability.availableAt<=now?1:0);dummy.updateMatrix();fish.setMatrixAt(i,dummy.matrix);
   }
   for(let i=0;i<pens.length;i++){
    const p=pens[i],status=state?.pens.find(c=>c.id===p.pen.id),c=status?.cycle,water=heightAt(p.pen.x,p.pen.z),age=now-p.pulse;
    p.group.children[0].material.emissiveIntensity=status?.members.length>=3?.95:0;
    p.group.position.y=water+.14;p.group.rotation.x=Math.sin(seconds*.7+i)*.018;p.group.rotation.z=Math.cos(seconds*.6+i)*.018;
    const angle=seconds*.65+i,x=p.pen.x+Math.sin(angle)*1.1,z=p.pen.z+Math.cos(angle)*1.1,hop=age>=0&&age<1300?Math.sin(age/1300*Math.PI)*.6:0;
    dummy.position.set(x,heightAt(x,z)+.15+hop,z);dummy.rotation.set(0,-angle,hop*.3);dummy.scale.setScalar(c?1+Math.min(1,(now-c.startedAt)/(c.completesAt-c.startedAt))*.8:0);dummy.updateMatrix();fish.setMatrixAt(48+i,dummy.matrix);
    for(let j=0;j<12;j++){const k=(i*12+j)*3,fall=age/1300;pelletsPos[k]=p.pen.x+Math.sin(j*2.4)*(.4+j*.06);pelletsPos[k+2]=p.pen.z+Math.cos(j*2.4)*(.4+j*.06);pelletsPos[k+1]=fall>=0&&fall<1?water+.1+(1-fall)*1.1:-10000;}
   }
   pelletsGeo.attributes.position.needsUpdate=true;fish.instanceMatrix.needsUpdate=true;
   for(const s of splashes){const a=(now-s.at)/850;s.mesh.visible=a>=0&&a<1;if(s.mesh.visible){s.mesh.scale.setScalar(1+a*3);s.mesh.material.opacity=(1-a)*.65;}}
  }
 };
}
