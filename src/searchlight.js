import * as THREE from 'three';
import {VISUAL_DECK_Y} from './ship.js';

// One bow searchlight. The ocean uses a custom shader, so illuminate its
// existing surface directly instead of placing a flat decal above the waves.
export function createBowSearchlight(ship, lighting) {
  const lamp = new THREE.SpotLight('#fff0d2', 0, 165, Math.PI / 5.8, .72, 1.5);
  lamp.castShadow = false;
  const target = new THREE.Object3D();
  ship.add(lamp, target);
  lamp.target = target;

  // Visible lamp housing + soft halo; both move with the active ship visual.
  const housing = new THREE.Mesh(
    new THREE.SphereGeometry(.95, 12, 8),
    new THREE.MeshBasicMaterial({color:'#fff0c4', toneMapped:false})
  );
  ship.add(housing);
  const halo = new THREE.Sprite(new THREE.SpriteMaterial({
    color:'#fff4d5', transparent:true, opacity:0,
    blending:THREE.AdditiveBlending, depthTest:true, depthWrite:false
  }));
  halo.scale.set(7,7,1);
  ship.add(halo);

  const localStart=new THREE.Vector3(),localEnd=new THREE.Vector3();
  const worldStart=new THREE.Vector3(),worldEnd=new THREE.Vector3();
  const center=new THREE.Vector3(),direction=new THREE.Vector3();
  const bowPoint=new THREE.Vector3(),aimPoint=new THREE.Vector3();
  let configured=false, intensity=0, oceanUniforms=null;

  function connectOcean(){
    if(oceanUniforms)return;
    const ocean=ship.parent?.children.find(obj=>obj.material?.name==='OceanSurface');
    if(!ocean)return;
    const material=ocean.material;
    if(!material.fragmentShader.includes('uniform float searchlightStrength;')){
      const shader=`
        uniform float searchlightStrength;
        uniform vec3 searchlightCenter;
        uniform vec2 searchlightForward;
      `;
      material.fragmentShader=material.fragmentShader.replace('uniform float time,travel,height,speed,wake,daylight',shader+'\n      uniform float time,travel,height,speed,wake,daylight');
      const lightCode=`
        // Elliptical cone footprint on the actual curved, animated ocean surface.
        vec2 offset=world.xz-searchlightCenter.xz;
        float forwardDist=dot(offset,searchlightForward);
        float sideDist=abs(offset.x*searchlightForward.y-offset.y*searchlightForward.x);
        float along=exp(-pow(forwardDist/44.,2.));
        float across=exp(-pow(sideDist/(10.+max(forwardDist,0.)*.22),2.));
        float front=smoothstep(-18.,0.,forwardDist);
        float beam=along*across*front*searchlightStrength;
        float ripples=.74+.26*clamp(n.y+tex.b*.6,0.,1.);
        color+=vec3(.9,.83,.65)*beam*.9*ripples;
      `;
      material.fragmentShader=material.fragmentShader.replace('gl_FragColor=vec4(color,1.);',lightCode+'\n        gl_FragColor=vec4(color,1.);');
      material.uniforms.searchlightStrength={value:0};
      material.uniforms.searchlightCenter={value:new THREE.Vector3()};
      material.uniforms.searchlightForward={value:new THREE.Vector2(0,-1)};
      material.needsUpdate=true;
    }
    oceanUniforms=material.uniforms;
  }

  function update(dt){
    const boat=ship.userData.model;
    if(!boat)return;
    connectOcean();
    boat.updateWorldMatrix(true,false);
    const overview=ship.userData.overviewDisplay?.visible??false;
    const overviewBoat=ship.userData.overviewDisplay?.children[0];
    if(overview&&overviewBoat)overviewBoat.updateWorldMatrix(true,false);
    if(!configured){
      const bounds=new THREE.Box3().setFromObject(boat);
      const bowZ=bounds.min.z+5;
      bowPoint.set(0,VISUAL_DECK_Y+3,bowZ);
      aimPoint.set(0,-2,bowZ-85);
      localStart.copy(boat.worldToLocal(bowPoint.clone()));
      localEnd.copy(boat.worldToLocal(aimPoint.clone()));
      configured=true;
    }
    const visual=overview&&overviewBoat?overviewBoat:boat;
    worldStart.copy(localStart);visual.localToWorld(worldStart);
    worldEnd.copy(localEnd);visual.localToWorld(worldEnd);
    lamp.position.copy(worldStart);
    housing.position.copy(worldStart);
    halo.position.copy(worldStart);
    target.position.copy(worldEnd);
    target.updateMatrixWorld();

    const daylight=lighting?.uniforms?.daylight?.value
      ??globalThis.oceanCruise?.lighting?.uniforms?.daylight?.value??1;
    const desired=1-THREE.MathUtils.smoothstep(daylight,.13,.53);
    intensity+=(desired-intensity)*(1-Math.exp(-Math.min(dt||0,.1)*1.7));
    lamp.intensity=intensity*150;
    lamp.visible=intensity>.002;
    housing.visible=intensity>.002;
    halo.visible=intensity>.002;
    halo.material.opacity=intensity*.8;

    // Intersect the moving beam with the ocean's mean water level.
    direction.subVectors(worldEnd,worldStart);
    const t=Math.abs(direction.y)>.001?THREE.MathUtils.clamp((0-worldStart.y)/direction.y,0,2):1;
    center.copy(worldStart).addScaledVector(direction,t);
    const forward=new THREE.Vector2(direction.x,direction.z).normalize();
    if(oceanUniforms){
      oceanUniforms.searchlightStrength.value=intensity;
      oceanUniforms.searchlightCenter.value.copy(center);
      oceanUniforms.searchlightForward.value.copy(forward);
    }
  }
  return {update};
}
