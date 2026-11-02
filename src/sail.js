import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';

// Red: fixed / blue: medium / yellow: strong. Vertex colors are masks, not albedo.
export function createSail(ship){
  const time={value:0};
  let root=null,overviewRoot=null;
  new GLTFLoader().load(`${import.meta.env.BASE_URL}models/Ship_Sail.glb`,gltf=>{
    root=gltf.scene;
    const attach=boat=>{
      if(!boat)return;
      boat.add(root);
      let meshes=0;
      root.traverse(obj=>{
        if(!obj.isMesh)return;
        meshes++;
        const geo=obj.geometry;
        const colors=geo.getAttribute('color');
        if(!geo.getAttribute('normal'))geo.computeVertexNormals();
        // Use a guaranteed vec3 attribute, independent of GLB RGB/RGBA layout.
        const count=geo.getAttribute('position').count;
        const weights=new Float32Array(count);
        let fixed=0,medium=0,strong=0;
        for(let i=0;i<count;i++){
          let w=0;
          if(colors){
            const red=colors.getX(i),green=colors.getY(i),blue=colors.getZ(i);
            // Compare channels instead of assuming sRGB values are exactly 0 or 1.
            const yellow=Math.min(red,green)*(1-blue);
            const blueMask=blue*(1-green);
            const redMask=red*(1-green)*(1-blue);
            w=THREE.MathUtils.clamp((yellow+blueMask*.48)*(1-redMask),0,1);
          }
          weights[i]=w;
          if(w>.55)strong++;else if(w>.04)medium++;else fixed++;
        }
        geo.setAttribute('sailWeight',new THREE.BufferAttribute(weights,1));
        const material=new THREE.MeshStandardMaterial({
          color:'#101114',roughness:.89,metalness:0,side:THREE.DoubleSide
        });
        material.onBeforeCompile=shader=>{
          shader.uniforms.sailTime=time;
          shader.vertexShader=shader.vertexShader.replace('#include <common>',`#include <common>
attribute float sailWeight;
uniform float sailTime;`);
          shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>',`#include <begin_vertex>
float w=clamp(sailWeight,0.0,1.0);
// Displace along the actual mesh normal instead of arbitrary ship axes.
// Low-frequency breathing + irregular traveling ripples.
float slow=0.65+0.20*sin(sailTime*0.65+position.y*0.018);
float ripple=sin(sailTime*5.2-position.y*0.095+position.x*0.021)*0.9
           +sin(sailTime*7.7+position.y*0.063-position.z*0.041+1.3)*0.38;
float displacement=w*(slow*11.0+ripple*5.0);
transformed+=normalize(normal)*displacement;`);
        };
        obj.material=material;
        obj.castShadow=false;
        obj.receiveShadow=false;
        console.info('[Sea] Sail weights:',obj.name,{vertices:count,fixed,medium,strong});
        if(!colors)console.warn('[Sea] Sail mesh has no vertex colors:',obj.name);
      });
      const displayRoot=ship.userData.overviewDisplay?.children[0];
      if(displayRoot){overviewRoot=root.clone(true);displayRoot.add(overviewRoot);}
      ship.userData.sailVisual=root;
      ship.userData.sailOverview=overviewRoot;
      console.info('[Sea] Sail ready, meshes:',meshes);
    };
    if(ship.userData.model)attach(ship.userData.model);
    else ship.userData.pendingSail=()=>attach(ship.userData.model);
  },undefined,error=>console.error('[Sea] Ship_Sail.glb loading failed:',error));
  return {update(t){
    time.value=t;
    const overview=ship.userData.overviewDisplay?.visible??false;
    if(root)root.visible=!overview;
    if(overviewRoot)overviewRoot.visible=overview;
  }};
}
