import * as THREE from 'three';

// Correct the rig's asymmetric flukes after the original swim/idle clip is sampled.
// Bone rotations preserve the mesh, scale, forward pitch and vertical swimming motion.
export function createWhalePose(mesh,root){
  const bones=mesh.skeleton.bones,positions=mesh.geometry.attributes.position;
  const indices=mesh.geometry.attributes.skinIndex,weights=mesh.geometry.attributes.skinWeight;
  function tip(name,side){
    const bone=bones.find(b=>b.name===name);if(!bone)return null;
    const boneIndex=bones.indexOf(bone);let index=-1;
    for(let i=0;i<positions.count;i++){
      let influence=0;
      for(let j=0;j<4;j++)if(indices.getComponent(i,j)===boneIndex)influence+=weights.getComponent(i,j);
      if(influence<.7)continue;
      if(index<0||side*positions.getZ(i)>side*positions.getZ(index))index=i;
    }
    return index<0?null:{bone,index};
  }
  const tailLeft=tip('Tail_03',-1),tailRight=tip('Tail_03',1);
  const finLeft=tip('Fin_L',-1),finRight=tip('Fin_R',1);
  const left=new THREE.Vector3(),right=new THREE.Vector3(),span=new THREE.Vector3();
  const side=new THREE.Vector3(),forward=new THREE.Vector3(),pivot=new THREE.Vector3();
  const current=new THREE.Vector3(),target=new THREE.Vector3(),up=new THREE.Vector3(0,1,0);
  const correction=new THREE.Quaternion(),parentRotation=new THREE.Quaternion(),localCorrection=new THREE.Quaternion(),heading=new THREE.Quaternion();
  function read(tip,p){mesh.getVertexPosition(tip.index,p);return mesh.localToWorld(p);}
  function rotate(bone){
    bone.parent.getWorldQuaternion(parentRotation);
    localCorrection.copy(parentRotation).invert().multiply(correction).multiply(parentRotation);
    bone.quaternion.premultiply(localCorrection);
    bone.updateWorldMatrix(false,true);mesh.skeleton.update();
  }
  function levelFin(tip,height){
    tip.bone.getWorldPosition(pivot);read(tip,current).sub(pivot);
    const along=current.dot(forward),across=current.dot(side);
    const radius=Math.sqrt(Math.max(0,current.lengthSq()-along*along));
    const vertical=THREE.MathUtils.clamp(height-pivot.y,-radius,radius);
    target.copy(forward).multiplyScalar(along)
      .addScaledVector(side,Math.sign(across)*Math.sqrt(Math.max(0,radius*radius-vertical*vertical)))
      .addScaledVector(up,vertical);
    correction.setFromUnitVectors(current.normalize(),target.normalize());rotate(tip.bone);
  }
  return ()=>{
    root.updateMatrixWorld(true);mesh.skeleton.update();
    root.getWorldQuaternion(heading);
    side.set(-1,0,0).applyQuaternion(heading);side.y=0;side.normalize();
    forward.crossVectors(up,side).normalize();
    if(tailLeft&&tailRight){
      // The right fluke also blends into Tail_02, so converge using skinned tips.
      for(let i=0;i<6;i++){
        read(tailLeft,left);read(tailRight,right);span.subVectors(right,left).normalize();
        if(span.dot(side)>1-1e-10)break;
        correction.setFromUnitVectors(span,side);rotate(tailLeft.bone);
      }
    }
    if(finLeft&&finRight){
      read(finLeft,left);read(finRight,right);
      const height=(left.y+right.y)/2;
      levelFin(finLeft,height);levelFin(finRight,height);
    }
  };
}
