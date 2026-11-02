import * as THREE from 'three';

export function createSeagulls(scene){
  const flock=new THREE.Group();flock.name='seagulls';scene.add(flock);
  const white=new THREE.MeshStandardMaterial({color:'#f4f4ed',roughness:.85});
  const black=new THREE.MeshStandardMaterial({color:'#333942',roughness:.9,side:THREE.DoubleSide});
  const yellow=new THREE.MeshStandardMaterial({color:'#dfa842',roughness:.8});
  const feather=new THREE.MeshStandardMaterial({color:'#e3e6e6',roughness:.9,side:THREE.DoubleSide});
  const bodyGeometry=new THREE.SphereGeometry(.18,10,6),headGeometry=new THREE.SphereGeometry(.135,8,6);
  const wingGeometry=new THREE.BufferGeometry();
  wingGeometry.setAttribute('position',new THREE.Float32BufferAttribute([0,0,.13,.48,.035,.13,.83,-.035,-.07,.48,.035,.13,.66,-.02,-.27,.83,-.035,-.07,0,0,.13,.83,-.035,-.07,0,0,-.20],3));
  wingGeometry.computeVertexNormals();
  const tipGeometry=new THREE.BufferGeometry();
  tipGeometry.setAttribute('position',new THREE.Float32BufferAttribute([.70,-.02,-.11,1.04,-.07,-.25,.83,-.035,-.07],3));tipGeometry.computeVertexNormals();
  const beakGeometry=new THREE.ConeGeometry(.055,.22,5);
  const birds=[];
  for(let i=0;i<9;i++){
    const root=new THREE.Group(),body=new THREE.Mesh(bodyGeometry,white);body.scale.set(.85,1,2);root.add(body);
    const head=new THREE.Mesh(headGeometry,white);head.position.set(0,.14,-.32);root.add(head);
    const beak=new THREE.Mesh(beakGeometry,yellow);beak.rotation.x=-Math.PI/2;beak.position.set(0,.12,-.49);root.add(beak);
    const wings=[];
    for(const side of [-1,1]){const wing=new THREE.Group();wing.position.set(side*.08,.06,0);wing.scale.x=side;wing.add(new THREE.Mesh(wingGeometry,feather),new THREE.Mesh(tipGeometry,black));root.add(wing);wings.push(wing);}
    root.scale.setScalar(1.15+(i%3)*.18);flock.add(root);
    birds.push({root,wings,phase:i*2.4,radius:28+i*5,height:23+(i%4)*4,speed:.065+(i%3)*.012});
  }
  let time=0;
  function update(dt){
    time+=dt;
    for(const bird of birds){
      const a=time*bird.speed+bird.phase;
      bird.root.position.set(Math.cos(a)*bird.radius,bird.height+Math.sin(time*.6+bird.phase)*1.6,-25+Math.sin(a)*bird.radius*.7);
      bird.root.rotation.y=Math.atan2(Math.sin(a),-Math.cos(a)*.7);
      bird.root.rotation.z=Math.sin(a)*.12;
      const flapping=Math.sin(time*.7+bird.phase)>.15;
      const flap=flapping?Math.sin(time*5.5+bird.phase)*.48:.10;
      bird.wings[0].rotation.z=-flap;bird.wings[1].rotation.z=flap;
    }
  }
  update(0);return {update,flock};
}
