import * as THREE from 'three';

// Geometry, palette and basic gait ported from hina-survival/index.html.
// Only the visible character rig is retained; no survival state or UI.
// Deterministic appearance from the server-assigned player ID. All clients
// independently derive the same model and hair color without changing Workers.
export function appearanceForPlayer(playerId){
  let hash=2166136261;
  for(const ch of String(playerId)){hash=Math.imul(hash^ch.charCodeAt(0),16777619)>>>0;}
  return {model:['hina','daeun','boy-neat','boy-fluffy'][hash%4],hairColor:['black','brown'][Math.floor(hash/4)%2]};
}

export function createSurvivor(id,hairColor='black'){
const hana=new THREE.Group();
hana.name=({hina:'Hina',daeun:'Daeun','boy-neat':'BoyNeat','boy-fluffy':'BoyFluffy'})[id]||'Hina';
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
const head=new THREE.Group();head.name='sea-avatar-head';hana.add(head);head.position.y=2.28;
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


if(id==='boy-neat'||id==='boy-fluffy'){
 // Keep the same lightweight rig, face, limb pivots and gait.
 // Remove the feminine front bow and skirt; give each boy a simple outfit.
 for(const child of hana.children){
   if(!child.isMesh)continue;
   if((child.material===ribbon||child.material===dark)&&child.position.y>1.3)child.visible=false;
   if(child.material===seam)child.visible=false;
 }
 // Reuse the original leg rig exactly; only hide the front outfit decorations.
 // Shorter side locks and rear bob. Distinct top silhouettes at distance.
 for(const child of head.children){
   if(!child.isMesh)continue;
   const {x,y,z}=child.position;
   if((z<-.25&&y<-.10)||(Math.abs(x)>.36&&y<-.06))child.visible=false;
 }
 if(id==='boy-neat'){
   // Side-swept short fringe, cropped at the ears.
   facepart(.27,.13,.15,hair,-.21,.24,.34).rotation.z=-.18;
   facepart(.27,.12,.15,hair,.08,.28,.33).rotation.z=-.10;
 }else{
   // Fluffy crown with several staggered, angular tufts.
   for(let i=-2;i<=2;i++){
     const tuft=facepart(.18,.20+(.1*(2-Math.abs(i))),.25,i%2?hairLight:hair,i*.155,.49+(i%2)*.045,-.03);
     tuft.rotation.z=(i%2?-.23:.20);
     // Stagger crown depth to avoid coplanar faces / z-fighting.
     tuft.position.z+=i*.018;
     tuft.position.y+=(i%2)*.016;
   }
   facepart(.24,.18,.15,hair,.22,.22,.34).rotation.z=.15;
 }
}

// Recolor only the hair meshes, never skin, eyes or clothing.
const colors={black:[0x24252b,0x34363e],brown:[0x79513b,0x9a7054]};
const chosen=colors[hairColor]||colors.black;
const hairMaterials=new Map();
head.traverse(child=>{
  if(!child.isMesh||!child.material?.color)return;
  const hex=child.material.color.getHex();
  if(![0x29232b,0x3a3037,0x49313b,0x66505b].includes(hex))return;
  if(!hairMaterials.has(child.material)){
    const recolored=child.material.clone();
    recolored.color.setHex([0x3a3037,0x66505b].includes(hex)?chosen[1]:chosen[0]);
    hairMaterials.set(child.material,recolored);
  }
  child.material=hairMaterials.get(child.material);
});

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
let walkTime=0,sitBlend=0,fireworkPoseUntil=0;
function raiseRightHand(){arms[1].rotation.set(Math.PI,0,0);elbows[1].rotation.x=0;}
function fireworkPose(){fireworkPoseUntil=performance.now()+1500;raiseRightHand();}
function rightHandWorldPosition(){hana.updateWorldMatrix(true,true);return arms[1].localToWorld(new THREE.Vector3(0,-.72,0));}
function update(dt,moving,sitting=false,jumpPhase=null,inWater=false,flapping=false,titanic=false,waterKickPulse=0,waterArmCheerTime=0){
  // Release the tube grip when returning to deck poses.
  if(!inWater){const release=1-Math.exp(-Math.min(.1,dt)*18);for(const elbow of elbows)elbow.rotation.z+=(0-elbow.rotation.z)*release;}
  if(titanic){
    const blend=1-Math.exp(-Math.min(.1,dt)*12);
    for(let i=0;i<2;i++){
      arms[i].rotation.x+=(0-arms[i].rotation.x)*blend;
      arms[i].rotation.z+=((i===0?-Math.PI/2:Math.PI/2)-arms[i].rotation.z)*blend;
      elbows[i].rotation.x+=(0-elbows[i].rotation.x)*blend;
      legs[i].rotation.x+=(0-legs[i].rotation.x)*blend;
    }
    body.rotation.z=0;head.rotation.z=0;return;
  }
  if(flapping){
    const t=performance.now()*.001;
    const blend=1-Math.exp(-Math.min(.1,dt)*15);
    for(let i=0;i<2;i++){
      const target=-1.35+Math.sin(t*17+i*.5)*.7;
      arms[i].rotation.x+=(target-arms[i].rotation.x)*blend;
      arms[i].rotation.z+=((i===0?-.55:.55)-arms[i].rotation.z)*blend;
      elbows[i].rotation.x+=(-.4-elbows[i].rotation.x)*blend;
      legs[i].rotation.x+=(Math.sin(t*11+i*Math.PI)*.35-legs[i].rotation.x)*blend;
    }
    body.rotation.z=Math.sin(t*8)*.07;head.rotation.z=-body.rotation.z*.5;
    return;
  }
  const firing=performance.now()<fireworkPoseUntil;
  if(inWater){
    // Tube riding: spread both arms and rest the hands on opposite sides of the ring.
    // Keep the pose steady while moving; netPose overrides the right arm during collection.
    walkTime+=dt;
    const phase=walkTime*2;
    const blend=1-Math.exp(-Math.min(.1,dt)*12);
    sitBlend=0;hana.position.y=0;
    for(let i=0;i<2;i++){
      const side=i===0?-1:1;
      // Upper arms extend sideways, with elbows out at the tube's outer rim.
      // Each water jump briefly throws both hands overhead, then re-grips the tube.
      // Reuse the existing kick pulse so arms, legs and tube glow stay synchronized.
      // Hold the hands up for most of the one-second gesture, then re-grip.
      const cheer=waterArmCheerTime<=0?0:Math.min(1,(1-waterArmCheerTime)/.16,waterArmCheerTime/.22);
      const armX=-.22;
      const armZ=side*(1.42+THREE.MathUtils.degToRad(20)+(2.85-(1.42+THREE.MathUtils.degToRad(20)))*cheer);
      const armBlend=1-Math.exp(-Math.min(.1,dt)*22);
      arms[i].rotation.x+=(armX-arms[i].rotation.x)*armBlend;
      arms[i].rotation.z+=(armZ-arms[i].rotation.z)*armBlend;
      elbows[i].rotation.x+=(-.18-elbows[i].rotation.x)*armBlend;
      // Straighten the forearms during the cheer, then hold the tube again.
      elbows[i].rotation.z+=((-side*.85)*(1-cheer)-elbows[i].rotation.z)*armBlend;
      // While jumping with the tube, only the feet paddle alternately.
      const kicking=(jumpPhase??0)>.5;
      const kick=kicking?Math.sin(walkTime*15+i*Math.PI)*.42:0;
      // A single exaggerated opposite-leg recoil on each water re-jump.
      const recoil=(i===0?1:-1)*waterKickPulse*1.05;
      legs[i].rotation.x+=(kick+recoil-legs[i].rotation.x)*blend;
      knees[i].rotation.x+=((.22+(kicking?.22*Math.max(0,-Math.sin(walkTime*15+i*Math.PI)):0))-knees[i].rotation.x)*blend;
    }
    if(firing)raiseRightHand();
    body.rotation.z=Math.sin(phase)*.015;
    head.rotation.z=-body.rotation.z*.45;
    return;
  }
  const jump=Math.max(0,Math.min(1,jumpPhase??0));
  const blend=1-Math.exp(-Math.min(.1,dt)*18);
  // Airborne pose takes exclusive priority over walk/sit, including the first jump frame.
  if(jump>.025){
    sitBlend=0;hana.position.y=0;
    // Left fist up, right arm bent down; asymmetric legs like the supplied sketch.
    const armX=[-2.85,.32],armZ=[-.14,.18],elbowX=[-.35,-1.05];
    const legX=[-.78,.58],kneeX=[1.12,.22];
    for(let i=0;i<2;i++){
      arms[i].rotation.x+=(armX[i]-arms[i].rotation.x)*blend;
      arms[i].rotation.z+=(armZ[i]-arms[i].rotation.z)*blend;
      elbows[i].rotation.x+=(elbowX[i]-elbows[i].rotation.x)*blend;
      legs[i].rotation.x+=(legX[i]-legs[i].rotation.x)*blend;
      knees[i].rotation.x+=(kneeX[i]-knees[i].rotation.x)*blend;
    }
    if(firing)raiseRightHand();
    body.rotation.z=0;head.rotation.z=0;
    return;
  }
  sitBlend+=((sitting?1:0)-sitBlend)*blend;
  hana.position.y=-.60*sitBlend**3;
  if(moving)walkTime+=dt;
  const poseTime=Math.floor(walkTime*12)/12;
  const stride=moving?Math.sin(poseTime*16.8)*.34:0;
  const armSwing=id==='hina'?stride*3:stride*1.5;
  for(let i=0;i<2;i++){
    const legTarget=(i?-stride:stride)*(1-sitBlend)-Math.PI/2*sitBlend;
    const armTarget=sitting?-.3:(i?armSwing:-armSwing);
    legs[i].rotation.x+=(legTarget-legs[i].rotation.x)*blend;
    arms[i].rotation.x+=(armTarget-arms[i].rotation.x)*blend;
    arms[i].rotation.z+=(0-arms[i].rotation.z)*blend;
    const knee=moving?.58*Math.max(0,Math.sin(legs[i].rotation.x)*2.8)*(1-sitBlend):0;
    knees[i].rotation.x+=(knee-knees[i].rotation.x)*blend;
    elbows[i].rotation.x+=((moving?-.10:0)-elbows[i].rotation.x)*blend;
  }
  if(firing)raiseRightHand();
  body.rotation.z=id==='hina'&&moving?Math.sin(poseTime*8.4)*.016:0;
  head.rotation.z=id==='hina'&&moving?Math.sin(poseTime*8.4)*.020:0;
}
function netPose(progress){const t=Math.max(0,Math.min(1,progress));const swing=Math.sin(t*Math.PI*2);arms[1].rotation.x=-.9-.55*swing;arms[1].rotation.z=.2;elbows[1].rotation.x=-.4-.3*Math.max(0,swing);}
return {mesh:hana,update,fireworkPose,rightHandWorldPosition,netPose};
}

export function disposeSurvivor(root){
  const geometries=new Set(),materials=new Set();
  root.traverse(object=>{if(object.geometry)geometries.add(object.geometry);if(object.material)for(const material of [].concat(object.material))materials.add(material);});
  for(const geometry of geometries)geometry.dispose();for(const material of materials)material.dispose();
}
