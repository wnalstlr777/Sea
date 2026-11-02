import * as THREE from 'three';

// Geometry, palette and basic gait ported from hina-survival/index.html.
// Only the visible character rig is retained; no survival state or UI.
export function createSurvivor(id){
const hana=new THREE.Group();
hana.name=id==='hina'?'Hina':'Daeun';
hana.userData.characterId=id;
const mat=color=>new THREE.MeshLambertMaterial({color});
const skin=mat(0xf4c8b7),hair=mat(0x29232b),hairLight=mat(0x3a3037),shirt=mat(0xf5f0ee),skirt=mat(0x39333d),dark=mat(0x302c35),shoe=mat(0x242027),sock=mat(0x282630),eye=mat(0x342932),eyeShine=mat(0xffffff),blush=mat(0xe9a6a4),ribbon=mat(0x302b34),seam=mat(0x54434d);
function part(w,h,d,m,x,y,z){const p=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),m);p.position.set(x,y,z);p.castShadow=true;p.receiveShadow=true;hana.add(p);return p}
const body=part(.69,.83,.40,shirt,0,1.46,0);
part(.78,.13,.45,shirt,0,1.81,0);part(.52,.12,.09,dark,0,1.75,.255);
part(.28,.10,.11,ribbon,-.13,1.61,.265).rotation.z=.25;
part(.28,.10,.11,ribbon,.13,1.61,.265).rotation.z=-.25;
part(.10,.13,.12,ribbon,0,1.61,.28);
part(.08,.20,.09,ribbon,-.06,1.48,.27).rotation.z=-.13;
part(.08,.20,.09,ribbon,.06,1.48,.27).rotation.z=.13;
part(.77,.15,.48,skirt,0,1.06,0);part(.85,.39,.54,skirt,0,.85,0);
for(let x of [-.31,-.12,.08,.28])part(.022,.33,.045,seam,x,.84,.281);
for(let y of [.73,.90])part(.78,.015,.045,seam,0,y,.283);
part(.49,.11,.37,skin,0,1.95,0);
const head=new THREE.Group();hana.add(head);head.position.y=2.28;
function facepart(w,h,d,m,x,y,z){const p=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),m);p.position.set(x,y,z);p.castShadow=true;head.add(p);return p}
facepart(.67,.65,.59,skin,0,0,0);
// Back hair: opaque cap and overlapping locks prevent the bare scalp from showing behind.
facepart(.73,.65,.19,hair,0,.005,-.35);
facepart(.78,.25,.24,hair,0,.31,-.29);
for(let i=-2;i<=2;i++){
 const x=i*.145;
 facepart(.18,.23+(2-Math.abs(i))*.04,.19,i%2?hairLight:hair,x,-.29,-.37);
}
facepart(.25,.24,.24,hair,-.32,-.28,-.32);
facepart(.25,.24,.24,hair,.32,-.28,-.32);
facepart(.76,.24,.66,hair,0,.38,-.02);facepart(.76,.15,.65,hair,0,.27,-.04);
facepart(.19,.34,.64,hair,-.33,.17,-.02);facepart(.19,.34,.64,hair,.33,.17,-.02);
facepart(.19,.19,.12,hair,-.24,.22,.31);facepart(.18,.26,.12,hair,-.08,.20,.31);facepart(.18,.17,.12,hair,.11,.23,.31);
facepart(.14,.23,.11,hair,.27,.16,.30);
for(let side of [-1,1]){
 facepart(.18,.31,.29,hair,side*.39,-.18,-.08);
 facepart(.17,.15,.23,hairLight,side*.41,-.39,-.08);
 facepart(.135,.19,.038,eye,side*.17,-.045,.312);
 facepart(.045,.05,.045,eyeShine,side*.14,-.015,.34);
 facepart(.14,.05,.028,blush,side*.265,-.18,.313);
}
facepart(.10,.025,.032,ribbon,0,-.23,.319);
facepart(.28,.17,.19,hair,0,-.31,-.30);
// Shoulder/hip pivot groups: unlike rotating a box around its center, these
// rotate whole articulated limbs from the joint and carry hands and shoes.
function pivotAt(x,y,z){const g=new THREE.Group();g.position.set(x,y,z);hana.add(g);return g;}
function limbCube(parent,w,h,d,m,x,y,z){const p=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),m);p.position.set(x,y,z);p.castShadow=true;p.receiveShadow=true;parent.add(p);return p;}
const arms=[pivotAt(-.46,1.78,0),pivotAt(.46,1.78,0)];
for(const a of arms){limbCube(a,.19,.62,.24,shirt,0,-.30,0);limbCube(a,.16,.19,.19,skin,0,-.66,0);}
const legs=[pivotAt(-.20,.75,0),pivotAt(.20,.75,0)];
for(const l of legs){
 limbCube(l,.23,.56,.24,skin,0,-.33,0);
 limbCube(l,.24,.19,.25,sock,0,-.56,0);
 limbCube(l,.29,.16,.43,shoe,0,-.675,.10);
}

if(id==='daeun'){
 const palette=new Map();for(const [from,color] of [[hair,0x49313b],[hairLight,0x66505b],[skirt,0x39333d],[ribbon,0x39333d],[seam,0x64525b]]){const m=from.clone();m.color.setHex(color);palette.set(from,m);}
 hana.traverse(o=>{if(o.isMesh&&palette.has(o.material))o.material=palette.get(o.material);});
 // Daeun's ponytail and tights use the source palette and geometry.
 const daeunHead=head;
 const ponyHair=new THREE.MeshStandardMaterial({color:0x49313b,roughness:.92});
 const ponyHighlight=new THREE.MeshStandardMaterial({color:0x66505b,roughness:.9});
 // Hide the short bob's hanging back/side locks for Daeun.
 for(const child of daeunHead.children){
  if(!child.isMesh)continue;
  if(child.position.z<-.25&&child.position.y<-.13&&child.geometry?.type==='BoxGeometry')child.visible=false;
  if(Math.abs(child.position.x)>.38&&child.position.y<-.08&&child.geometry?.type==='BoxGeometry')child.visible=false;
 }
 const ponyRoot=new THREE.Group();ponyRoot.name='DaeunPonytail';daeunHead.add(ponyRoot);
 ponyRoot.position.set(0,.32,-.43);
 const pony=(rTop,rBottom,height,x,y,z,material,tilt=0)=>{
  const o=new THREE.Mesh(new THREE.CylinderGeometry(rTop,rBottom,height,6),material);
  o.position.set(x,y,z);o.rotation.z=tilt;o.castShadow=true;ponyRoot.add(o);return o;
 };
 const tie=new THREE.Mesh(new THREE.SphereGeometry(.16,7,5),ponyHair);tie.scale.set(1,.85,1);tie.position.set(0,.05,-.10);tie.castShadow=true;ponyRoot.add(tie);
 pony(.22,.26,.44,.10,.24,-.22,ponyHair,-.32);
 pony(.26,.19,.55,.23,.03,-.28,ponyHair,.32);
 pony(.20,.12,.51,.34,-.40,-.31,ponyHighlight,.22);
 pony(.14,.055,.40,.40,-.76,-.33,ponyHair,.13);
 // Tights are a uniform material override on both leg meshes, not a change to Hina's legs.
 const tights=new THREE.MeshStandardMaterial({color:0x493f4b,roughness:.93});
 for(const originalLeg of legs){const leg=originalLeg;if(!leg)continue;
  for(const child of leg.children){if(child.isMesh&&(child.material===skin||child.material===sock))child.material=tights;}
 }

}

// Keep the source's elbow/knee articulation without its action system.
function split(pivot,kind,side){
  const upper=pivot.children.find(o=>o.isMesh&&o.geometry.type==='BoxGeometry');
  const joint=new THREE.Group();joint.name=(kind==='arm'?'Elbow_':'Knee_')+(side===0?'L':'R');
  const cut=upper.position.y,height=upper.geometry.parameters.height*upper.scale.y;
  joint.position.y=cut;
  const lower=upper.clone(false);lower.scale.y*=.5;upper.scale.y*=.5;
  upper.position.y=cut+height*.25;lower.position.y=-height*.25;
  // Move hands, socks and shoes with the distal joint.
  const children=pivot.children.slice();
  for(const child of children)if(child!==upper){pivot.remove(child);child.position.y-=cut;joint.add(child);}
  joint.add(lower);pivot.add(joint);return joint;
}
const elbows=arms.map((a,i)=>split(a,'arm',i));
const knees=legs.map((l,i)=>split(l,'leg',i));
let walkTime=0;
function update(dt,moving){
  if(moving)walkTime+=dt;
  const poseTime=Math.floor(walkTime*12)/12;
  const weight=Math.min(1,dt*(moving?18:7.2));
  const stride=moving?Math.sin(poseTime*16.8)*.34:0;
  const armSwing=id==='hina'?stride*3:stride*1.5;
  for(let i=0;i<2;i++){
    const legTarget=i?-stride:stride,armTarget=i?armSwing:-armSwing;
    legs[i].rotation.x+= (legTarget-legs[i].rotation.x)*(id==='hina'?weight:1);
    arms[i].rotation.x+= (armTarget-arms[i].rotation.x)*(id==='hina'?weight:1);
    const blend=1-Math.exp(-Math.min(.1,dt)*18);
    const knee=moving?.58*Math.max(0,Math.sin(legs[i].rotation.x)*2.8):0;
    knees[i].rotation.x+=(knee-knees[i].rotation.x)*blend;
    elbows[i].rotation.x+=((moving?-.10:0)-elbows[i].rotation.x)*blend;
  }
  body.rotation.z=id==='hina'&&moving?Math.sin(poseTime*8.4)*.016:0;
  head.rotation.z=id==='hina'&&moving?Math.sin(poseTime*8.4)*.020:0;
}
return {mesh:hana,update};
}
