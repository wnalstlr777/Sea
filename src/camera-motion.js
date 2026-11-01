import * as THREE from 'three';

// Render-only offsets: OrbitControls and movement always use the stable camera.
export function createBoatMotion(camera){
  let time=0,strength=0;
  const position=new THREE.Vector3(),quaternion=new THREE.Quaternion(),rotation=new THREE.Quaternion();
  const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)');
  return {
    render(renderer,scene,dt,amount,distance){
      time+=dt;
      const target=reducedMotion.matches?0:amount;
      strength+=(target-strength)*(1.-Math.exp(-dt*3.));
      const gain=strength*Math.min(1,15/Math.max(distance,1));
      position.copy(camera.position);quaternion.copy(camera.quaternion);
      camera.position.y+=Math.sin(time*Math.PI*2/8.5)*.065*gain;
      rotation.setFromEuler(new THREE.Euler(Math.sin(time*Math.PI*2/11)*.002*gain,0,Math.sin(time*Math.PI*2/13)*.003*gain));
      camera.quaternion.multiply(rotation);
      try{renderer.render(scene,camera);}finally{camera.position.copy(position);camera.quaternion.copy(quaternion);camera.updateMatrixWorld();}
    }
  };
}
