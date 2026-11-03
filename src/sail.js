import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';

// Red: fixed / blue: medium / yellow: strong. Vertex colors are masks, not albedo.
export function createSail(ship, lighting){
  const time={value:0};
  let root=null,overviewRoot=null;
  new GLTFLoader().load(`${import.meta.env.BASE_URL}models/Ship_Sail.glb`,gltf=>{
    root=gltf.scene;
    const attach=boat=>{
      if(!boat)return;
      boat.add(root);
      root.updateWorldMatrix(true,true);
      // The bow points toward world -Z. Determine the forward sail from
      // mesh bounds, independent of Blender mesh names or hierarchy.
      const sailMeshes=[];
      root.traverse(obj=>{
        if(!obj.isMesh)return;
        obj.geometry.computeBoundingBox();
        const center=obj.geometry.boundingBox.getCenter(new THREE.Vector3());
        obj.localToWorld(center);
        sailMeshes.push({obj,z:center.z});
      });
      const frontZ=Math.min(...sailMeshes.map(item=>item.z));
      const rearZ=Math.max(...sailMeshes.map(item=>item.z));
      const splitZ=(frontZ+rearZ)*.5;
      root.traverse(obj=>{
        if(!obj.isMesh)return;
        const geo=obj.geometry;
        const colors=geo.getAttribute('color');
        if(!geo.getAttribute('normal'))geo.computeVertexNormals();
        const count=geo.getAttribute('position').count;
        const weights=new Float32Array(count);
        for(let i=0;i<count;i++){
          let w=0;
          if(colors){
            const red=colors.getX(i),green=colors.getY(i),blue=colors.getZ(i);
            const yellow=Math.min(red,green)*(1-blue);
            const blueMask=blue*(1-green);
            const redMask=red*(1-green)*(1-blue);
            w=THREE.MathUtils.clamp((yellow+blueMask*.48)*(1-redMask),0,1);
          }
          weights[i]=w;
        }
        geo.setAttribute('sailWeight',new THREE.BufferAttribute(weights,1));
        const material=new THREE.MeshStandardMaterial({
          color:(rearZ-frontZ>0.01&&sailMeshes.find(item=>item.obj===obj)?.z<splitZ)?'#ffffff':'#101114',roughness:.89,metalness:0,side:THREE.DoubleSide
        });
        material.onBeforeCompile=shader=>{
          shader.uniforms.sailTime=time;
          shader.vertexShader=shader.vertexShader.replace('#include <common>',`#include <common>
attribute float sailWeight;
uniform float sailTime;`);
          shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>',`#include <begin_vertex>
float w=clamp(sailWeight,0.0,1.0);
float slow=0.65+0.20*sin(sailTime*2.70+position.y*0.010);
// Broad, slow cloth billow: one dominant traveling wave with a subtle secondary swell.
float ripple=sin(sailTime*7.50-position.y*0.026+position.x*0.009)*1.0
           +sin(sailTime*4.68+position.y*0.016-position.z*0.012+1.3)*0.22;
float displacement=w*(slow*11.0+ripple*10.5);
transformed+=normalize(normal)*displacement;`);
        };
        obj.material=material;
        obj.castShadow=false;
        obj.receiveShadow=false;
      });
      const displayRoot=ship.userData.overviewDisplay?.children[0];
      if(displayRoot){overviewRoot=root.clone(true);displayRoot.add(overviewRoot);}
      ship.userData.sailVisual=root;
      ship.userData.sailOverview=overviewRoot;
    };
    if(ship.userData.model)attach(ship.userData.model);
    else ship.userData.pendingSail=()=>attach(ship.userData.model);
  },undefined,error=>console.error('[Sea] Ship_Sail.glb loading failed:',error));
  return {update(t,dt=1/60){
    time.value=t;
    const overview=ship.userData.overviewDisplay?.visible??false;
    if(root)root.visible=!overview;
    if(overviewRoot)overviewRoot.visible=overview;
  }};
}
