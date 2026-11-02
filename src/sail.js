import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';

// Vertex colors are animation weights, NOT visible albedo:
// red = fixed, blue = medium, yellow = strongest.
export function createSail(ship){
  const time={value:0};
  let root=null,overviewRoot=null;
  const loader=new GLTFLoader();
  loader.load(`${import.meta.env.BASE_URL}models/Ship_Sail.glb`,gltf=>{
    root=gltf.scene;
    const boat=ship.userData.model;
    if(!boat){
      // Ship and sail load asynchronously; wait until ship is available.
      ship.userData.pendingSail=()=>attach(boatReady());
    }else attach(boat);
    function boatReady(){return ship.userData.model;}
    function attach(boatModel){
      if(!boatModel)return;
      // Local coordinates are the same original Blender coordinates as Ship.glb.
      boatModel.add(root);
      root.traverse(obj=>{
        if(!obj.isMesh)return;
        const material=new THREE.MeshStandardMaterial({color:'#101114',roughness:.89,metalness:0,side:THREE.DoubleSide});
        material.onBeforeCompile=shader=>{
          shader.uniforms.sailTime=time;
          shader.vertexShader=shader.vertexShader.replace('#include <common>',`#include <common>
attribute vec4 sailMask;
uniform float sailTime;`);
          shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>',`#include <begin_vertex>
// Preserve the authored sail shape. Wind adds a subtle, slow billow
// and a small irregular flutter, strongest only at the free edges.
float r=sailMask.r, g=sailMask.g, b=sailMask.b;
float fixedWeight=clamp(r*(1.0-g)*(1.0-b),0.0,1.0);
float strongWeight=clamp(min(r,g)*(1.0-b),0.0,1.0);
float mediumWeight=clamp(b*(1.0-g),0.0,1.0);
float weight=clamp((mediumWeight*0.28+strongWeight)*(1.0-fixedWeight),0.0,1.0);
// Slowly varying breeze, never a full back-and-forth sweep.
float breeze=0.55+0.25*sin(sailTime*0.43)+0.12*sin(sailTime*0.79+1.7);
float billow=weight*breeze*16.0;
// Two traveling ripples at incommensurate frequencies avoid a mechanical loop.
float rippleA=sin(sailTime*5.8-position.y*0.075+position.x*0.035);
float rippleB=sin(sailTime*8.3+position.y*0.12+position.z*0.047+1.3);
float flutter=weight*(rippleA*4.75+rippleB*2.0);
// Favor a single cloth-normal-ish direction; keep secondary motion subtle.
transformed.x+=billow+flutter;
transformed.z+=weight*(1.50*sin(sailTime*4.7-position.y*0.068)+0.90*sin(sailTime*7.1+position.x*0.044));`);
        };
        // Use a dedicated attribute name: Three.js reserves `color` for material vertex colors.
        const mask=obj.geometry.getAttribute('color');
        if(mask)obj.geometry.setAttribute('sailMask',mask);
        else console.warn('[Sea] Sail mesh missing COLOR_0:',obj.name);
        obj.material=material;
        obj.castShadow=false;obj.receiveShadow=false;
      });
      // Render-only overview clone shares materials and uniforms with the deck sail.
      // Reparent into overview displayRoot so it rocks together with the ship.
      const pivot=ship.userData.overviewDisplay;
      const displayRoot=pivot?.children[0];
      if(displayRoot){overviewRoot=root.clone(true);displayRoot.add(overviewRoot);}
      // When overview is active, main.js hides only pre-existing visual meshes;
      // toggle the two sails independently.
      root.updateMatrixWorld(true);
      console.info('[Sea] Sail attached:',root.name,'mesh count:',root.getObjectByProperty('isMesh',true)?.name||'check scene graph');
      ship.userData.sailVisual=root;
      ship.userData.sailOverview=overviewRoot;
    }
  },undefined,error=>console.error('[Sea] Ship_Sail.glb loading failed:',error));
  return {update(t){time.value=t;const overview=ship.userData.overviewDisplay?.visible??false;
    if(root)root.visible=!overview;
    if(overviewRoot)overviewRoot.visible=overview;
  }};
}
