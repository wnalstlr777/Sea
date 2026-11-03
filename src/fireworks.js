import * as THREE from 'three';

// Lightweight local-only firework: a rising spark, then a colorful burst.
export function createFireworks(scene,character){
  const button=document.createElement('button');
  button.id='fireworks-toggle';
  button.type='button';
  button.textContent='🎆 폭죽';
  button.setAttribute('aria-label','폭죽 발사');
  document.querySelector('#app').append(button);

  const effects=new THREE.Group();
  scene.add(effects);
  const active=[];
  const colors=['#ffb95a','#76d9ff','#ff7ec4','#c8ff89','#d7a6ff'];
  let audioContext=null;
  function sound(frequency,duration,volume,type='sine',sweep=1){
    try{
      const Audio=window.AudioContext||window.webkitAudioContext;
      if(!Audio)return;
      audioContext??=new Audio();
      if(audioContext.state==='suspended')audioContext.resume().catch(()=>{});
      const now=audioContext.currentTime;
      const oscillator=audioContext.createOscillator(),gain=audioContext.createGain();
      oscillator.type=type;
      oscillator.frequency.setValueAtTime(frequency,now);
      oscillator.frequency.exponentialRampToValueAtTime(Math.max(20,frequency*sweep),now+duration);
      gain.gain.setValueAtTime(.0001,now);
      gain.gain.exponentialRampToValueAtTime(volume,now+.025);
      gain.gain.exponentialRampToValueAtTime(.0001,now+duration);
      oscillator.connect(gain);gain.connect(audioContext.destination);
      oscillator.start(now);oscillator.stop(now+duration+.02);
    }catch{}
  }
  function burst(effect){
    effect.burst=true;
    effect.age=0;
    effect.rocket.visible=false;
    const count=72,positions=new Float32Array(count*3);
    const velocities=[];
    for(let i=0;i<count;i++){
      const z=1-2*(i+.5)/count;
      const a=i*2.399963;
      const r=Math.sqrt(1-z*z);
      const speed=8+Math.random()*7;
      velocities.push(new THREE.Vector3(Math.cos(a)*r,z,Math.sin(a)*r).multiplyScalar(speed));
    }
    const geometry=new THREE.BufferGeometry();
    geometry.setAttribute('position',new THREE.BufferAttribute(positions,3).setUsage(THREE.DynamicDrawUsage));
    const material=new THREE.PointsMaterial({color:effect.color,size:.65,transparent:true,depthWrite:false,blending:THREE.AdditiveBlending});
    const particles=new THREE.Points(geometry,material);
    particles.position.copy(effect.rocket.position);
    effects.add(particles);
    effect.particles=particles;effect.velocities=velocities;
    sound(130,.36,.13,'triangle',.2);
    sound(65,.48,.1,'sawtooth',.25);
  }
  let pending=null;
  function launch(){
    if(active.length>=5||pending)return;
    // Pose first, hold the raised hand, then show an ignition glow.
    character.launchFireworkPose();
    const color=new THREE.Color(colors[Math.floor(Math.random()*colors.length)]);
    const glow=new THREE.Mesh(
      new THREE.SphereGeometry(.32,10,8),
      new THREE.MeshBasicMaterial({color,transparent:true,opacity:.9,depthWrite:false,blending:THREE.AdditiveBlending})
    );
    glow.visible=false;
    effects.add(glow);
    pending={age:0,glow,color};
  }
  button.addEventListener('click',launch);
  function update(dt){
    dt=Math.min(dt,.05);
    if(pending){
      pending.age+=dt;
      // Raise for 0.45s, glow in the hand for 0.55s, then launch.
      if(pending.age>=.45){
        pending.glow.visible=true;
        pending.glow.position.copy(character.getFireworkHandPosition());
        const pulse=1+Math.sin(pending.age*27)*.18;
        pending.glow.scale.setScalar(pulse);
      }
      if(pending.age>=1){
        const position=character.getFireworkHandPosition();
        const rocket=new THREE.Mesh(new THREE.SphereGeometry(.28,6,6),new THREE.MeshBasicMaterial({color:pending.color}));
        rocket.position.copy(position);effects.add(rocket);
        active.push({rocket,color:pending.color,age:0,burst:false,particles:null,velocities:null});
        effects.remove(pending.glow);
        pending.glow.geometry.dispose();pending.glow.material.dispose();
        pending=null;
        sound(440,.9,.07,'sawtooth',3.5);
      }
    }

    for(let i=active.length-1;i>=0;i--){
      const effect=active[i];
      effect.age+=dt;
      if(!effect.burst){
        effect.rocket.position.y+=22*dt;
        if(effect.age>=1.1)burst(effect);
      }else{
        const points=effect.particles.geometry.attributes.position;
        for(let j=0;j<effect.velocities.length;j++){
          const velocity=effect.velocities[j];
          velocity.y-=6*dt;
          const k=j*3;
          points.array[k]+=velocity.x*dt;
          points.array[k+1]+=velocity.y*dt;
          points.array[k+2]+=velocity.z*dt;
        }
        points.needsUpdate=true;
        effect.particles.material.opacity=Math.max(0,1-effect.age/1.8);
        if(effect.age>=1.8){
          effects.remove(effect.rocket,effect.particles);
          effect.rocket.geometry.dispose();effect.rocket.material.dispose();
          effect.particles.geometry.dispose();effect.particles.material.dispose();
          active.splice(i,1);
        }
      }
    }
  }
  return {update};
}
