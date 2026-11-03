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
      // Detect bow/aft from individual vertices, not mesh centers:
      // both sails may be exported as one mesh from Blender.
      const sailMeshes=[];
      let frontZ=Infinity,rearZ=-Infinity;
      const vertex=new THREE.Vector3();
      root.traverse(obj=>{
        if(!obj.isMesh)return;
        const positions=obj.geometry.getAttribute('position');
        const zValues=new Float32Array(positions.count);
        for(let i=0;i<positions.count;i++){
          vertex.fromBufferAttribute(positions,i).applyMatrix4(obj.matrixWorld);
          zValues[i]=vertex.z;
          frontZ=Math.min(frontZ,vertex.z);
          rearZ=Math.max(rearZ,vertex.z);
        }
        sailMeshes.push({obj,zValues});
      });
      const splitZ=(frontZ+rearZ)*.5;
      root.traverse(obj=>{
        if(!obj.isMesh)return;
        const geo=obj.geometry;
        const colors=geo.getAttribute('color');
        if(!geo.getAttribute('normal'))geo.computeVertexNormals();
        const count=geo.getAttribute('position').count;
        const weights=new Float32Array(count);
        const bowZ=sailMeshes.find(item=>item.obj===obj)?.zValues;
        if(bowZ)geo.setAttribute('sailBowZ',new THREE.BufferAttribute(bowZ,1));
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
          color:'#101114',roughness:.89,metalness:0,side:THREE.DoubleSide
        });
        material.onBeforeCompile=shader=>{
          shader.uniforms.sailTime=time;
          shader.uniforms.sailSplitZ={value:splitZ};
          shader.vertexShader=shader.vertexShader.replace('#include <common>',`#include <common>
attribute float sailWeight;
attribute float sailBowZ;
varying float vSailBowZ;
uniform float sailTime;`);
          shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>',`#include <begin_vertex>
vSailBowZ=sailBowZ;
float w=clamp(sailWeight,0.0,1.0);
float slow=0.65+0.40*sin(sailTime*2.70+position.y*0.010);
// Broad, slow cloth billow: one dominant traveling wave with a subtle secondary swell.
float ripple=sin(sailTime*7.50-position.y*0.026+position.x*0.009)*1.0
           +sin(sailTime*4.68+position.y*0.016-position.z*0.012+1.3)*0.22;
float displacement=w*(slow*11.0+ripple*21.0);
transformed+=normalize(normal)*displacement;`);
          shader.fragmentShader=shader.fragmentShader.replace('#include <common>',`#include <common>
varying float vSailBowZ;
uniform float sailSplitZ;`);
          shader.fragmentShader=shader.fragmentShader.replace('#include <color_fragment>',`#include <color_fragment>
// White bow sail, dark aft sail; works even when both share one mesh.
diffuseColor.rgb=mix(vec3(1.0),diffuseColor.rgb,step(sailSplitZ,vSailBowZ));`);
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
