import * as THREE from 'three';

// Lightweight local cleanup prototype: 30 bobbing pieces, one instanced draw call.
// Collection state is per client until multiplayer persistence is designed.
export function createSeaCleanup({scene,ocean,player,camera}){
  const TOTAL=30;
  const geometry=new THREE.IcosahedronGeometry(.48,0);
  const material=new THREE.MeshStandardMaterial({color:0xffffff,roughness:.9,flatShading:true});
  const trash=new THREE.InstancedMesh(geometry,material,TOTAL);
  trash.name='floating-trash';trash.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  trash.frustumCulled=false;scene.add(trash);
  const dummy=new THREE.Object3D();
  const pieces=[];
  const palette=['#b3a89b','#b8c7b0','#aeb4c2','#c3a98b','#8dada7','#c5c0a9'];
  for(let i=0;i<TOTAL;i++){
    const angle=i*2.399963229728653;
    const radius=22+Math.sqrt((i+.5)/TOTAL)*55;
    const x=Math.cos(angle)*radius,z=-24+Math.sin(angle)*radius;
    const scale=(.55+(i%5)*.12)*(3+((i*17)%11)/10);
    pieces.push({x,z,scale,phase:i*1.71,collected:false});
    trash.setColorAt(i,new THREE.Color(palette[i%palette.length]));
  }
  if(trash.instanceColor)trash.instanceColor.needsUpdate=true;
  const net=new THREE.Group();net.name='cleanup-net';
  const handle=new THREE.Mesh(new THREE.CylinderGeometry(.045,.055,2.2,7),new THREE.MeshStandardMaterial({color:'#9c7651',roughness:.9}));
  handle.position.y=1.1;net.add(handle);
  const hoop=new THREE.Mesh(new THREE.TorusGeometry(.52,.055,7,22),new THREE.MeshStandardMaterial({color:'#c4d4d1',metalness:.35,roughness:.4}));
  hoop.rotation.x=Math.PI/2;hoop.position.y=2.24;net.add(hoop);
  const mesh=new THREE.Mesh(new THREE.CylinderGeometry(.48,.10,.8,12,3,true),new THREE.MeshBasicMaterial({color:'#b8d9d3',wireframe:true,transparent:true,opacity:.7,side:THREE.DoubleSide}));
  mesh.position.y=1.84;net.add(mesh);
  net.position.set(.65,1.0,-.18);net.rotation.z=-.24;net.scale.setScalar(.85);
  player.add(net);net.visible=false;
  // Counter stays out of the movement joystick area; interaction appears
  // only above a nearby piece of trash.
  const hud=document.createElement('div');
  hud.id='cleanup-hud';
  hud.style.cssText='position:fixed;right:16px;top:76px;z-index:18;padding:9px 13px;border-radius:12px;background:rgba(12,29,41,.7);color:#fff;font:600 14px system-ui,sans-serif;pointer-events:none';
  const counter=document.createElement('span');counter.textContent='바다 청소 0 / 30';
  hud.append(counter);document.body.append(hud);
  const button=document.createElement('button');
  button.type='button';button.textContent='잠자리채로 줍기';
  button.style.cssText='position:fixed;z-index:22;display:none;transform:translate(-50%,-100%);padding:10px 14px;border:1px solid #9ac7cb;border-radius:12px;background:rgba(32,77,88,.9);color:white;font:600 14px system-ui;cursor:pointer;touch-action:manipulation';
  document.body.append(button);
  const projection=new THREE.Vector3();
  let count=0,netUntil=0,nearest=-1,now=0,nextCollectAt=0;
  function collect(){
    if(nearest<0||now<nextCollectAt||pieces[nearest].collected)return;
    pieces[nearest].collected=true;count++;counter.textContent=`바다 청소 ${count} / ${TOTAL}`;
    netUntil=now+1.1;net.visible=true;
    nextCollectAt=now+3;
    nearest=-1;button.style.display='none';
  }
  button.addEventListener('click',collect);
  function onKey(e){if(e.code==='KeyE'&&!e.repeat&&nearest>=0){e.preventDefault();collect();}}
  window.addEventListener('keydown',onKey);
  function update(time,enabled){
    now=time;
    let min=4.5;nearest=-1;
    for(let i=0;i<TOTAL;i++){
      const p=pieces[i];
      if(p.collected){dummy.position.set(0,-10000,0);dummy.scale.setScalar(.00001);}
      else{
        const bob=ocean.heightAt(p.x,p.z);
        dummy.position.set(p.x,bob+.17+Math.sin(time*1.4+p.phase)*.09,p.z);
        dummy.rotation.set(Math.sin(time*.7+p.phase)*.18,time*.14+p.phase,Math.cos(time*.6+p.phase)*.17);
        dummy.scale.set(p.scale*1.25,p.scale*.48,p.scale*.8);
        if(enabled){
          const d=Math.hypot(p.x-player.position.x,p.z-player.position.z);
          if(d<min){min=d;nearest=i;}
        }
      }
      dummy.updateMatrix();trash.setMatrixAt(i,dummy.matrix);
    }
    trash.instanceMatrix.needsUpdate=true;
    button.style.display='none';
    if(nearest>=0&&enabled){
      const p=pieces[nearest];
      projection.set(p.x,ocean.heightAt(p.x,p.z)+p.scale*1.2,p.z).project(camera);
      if(projection.z>-1&&projection.z<1&&Math.abs(projection.x)<.9&&Math.abs(projection.y)<.9){
        const x=(projection.x*.5+.5)*window.innerWidth;
        const y=(-projection.y*.5+.5)*window.innerHeight;
        // Avoid placing the action over the lower movement controls.
        if(y<window.innerHeight*.72){
          button.style.left=`${x}px`;button.style.top=`${y}px`;
          button.style.display='block';
          const wait=Math.max(0,nextCollectAt-now);
          button.disabled=wait>0;
          button.textContent=wait>0?`다음 수거 ${wait.toFixed(1)}초`:'잠자리채로 줍기 (E)';
          button.style.opacity=wait>0?'.7':'1';
        }
      }
    }
    if(net.visible){net.rotation.z=-.24+Math.sin((netUntil-time)*11)*.3;if(time>=netUntil)net.visible=false;}
  }
  return {update,dispose(){window.removeEventListener('keydown',onKey);hud.remove();button.remove();scene.remove(trash);trash.dispose();geometry.dispose();material.dispose();}};
}
