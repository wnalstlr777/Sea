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
// Vertex colors are authored in sRGB and imported as linear attributes.
// Red mask is stationary; blue is medium, yellow is strong.
float r=sailMask.r, g=sailMask.g, b=sailMask.b;
float fixedWeight=clamp(r*(1.0-g)*(1.0-b),0.0,1.0);
float strongWeight=clamp(min(r,g)*(1.0-b),0.0,1.0);
float mediumWeight=clamp(b*(1.0-g),0.0,1.0);
float weight=clamp((mediumWeight*.45+strongWeight)*(1.0-fixedWeight),0.0,1.0);
float wave=sin(sailTime*1.6+position.y*.013+position.x*.008)*.65
          +sin(sailTime*2.7+position.y*.028-position.z*.017)*.25;
transformed.x+=weight*wave*10.0;
transformed.z+=weight*sin(sailTime*1.25+position.x*.012)*4.0;`);
        };
        // Use a dedicated attribute name: Three.js reserves `color` for material vertex colors.
        const mask=obj.geometry.getAttribute('color');
        if(mask)obj.geometry.setAttribute('sailMask',mask);
        else console.warn('[Sea] Sail mesh missing COLOR_0:',obj.name);
        obj.material=material;
        obj.castShadow=true;obj.receiveShadow=true;
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
