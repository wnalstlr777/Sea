import * as THREE from 'three';

export function createWhaleWaterEffects(parent,{heightAt,compact=false,daylight=()=>1,viewportHeight=()=>globalThis.innerHeight??720}){
  const capacity=compact?144:360,ringCount=compact?5:10,segments=compact?24:40;
  const positions=new Float32Array(capacity*3),sizes=new Float32Array(capacity),alphas=new Float32Array(capacity);
  const initial=new Float32Array(capacity*3),velocity=new Float32Array(capacity*3),birth=new Float32Array(capacity),life=new Float32Array(capacity),kind=new Uint8Array(capacity);
  const geometry=new THREE.BufferGeometry();
  for(const [name,array,size] of [['position',positions,3],['aSize',sizes,1],['aAlpha',alphas,1]])geometry.setAttribute(name,new THREE.BufferAttribute(array,size).setUsage(THREE.DynamicDrawUsage));
  const material=new THREE.ShaderMaterial({transparent:true,depthWrite:false,uniforms:{viewport:{value:720},light:{value:1}},
    vertexShader:`attribute float aSize,aAlpha;uniform float viewport;varying float alpha;void main(){vec4 p=modelViewMatrix*vec4(position,1.);gl_Position=projectionMatrix*p;gl_PointSize=clamp(aSize*viewport*projectionMatrix[1][1]/max(-p.z,1.),1.,54.);alpha=aAlpha;}`,
    fragmentShader:`uniform float light;varying float alpha;
      void main(){float r=length(gl_PointCoord-.5)*2.;float soft=1.-smoothstep(.12,1.,r);
        vec3 c=mix(vec3(.12,.18,.25),vec3(.72,.83,.87),light);gl_FragColor=vec4(c,alpha*soft);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`});
  const points=new THREE.Points(geometry,material);points.name='whale-water-particles';points.frustumCulled=false;points.visible=false;parent.add(points);
  const rings=[];
  for(let r=0;r<ringCount;r++){
    const g=new THREE.BufferGeometry(),vertices=new Float32Array((segments+1)*2*3),indices=[];
    for(let i=0;i<segments;i++){const j=i*2;indices.push(j,j+1,j+2,j+1,j+3,j+2);}
    g.setAttribute('position',new THREE.BufferAttribute(vertices,3).setUsage(THREE.DynamicDrawUsage));g.setIndex(indices);
    const m=new THREE.MeshBasicMaterial({color:0x93bbc8,transparent:true,opacity:0,depthWrite:false,side:THREE.DoubleSide});
    const mesh=new THREE.Mesh(g,m);mesh.frustumCulled=false;mesh.visible=false;parent.add(mesh);
    rings.push({mesh,vertices,born:-100,life:0,x:0,z:0,initial:0,speed:0,heading:0});
  }
  let time=0,cursor=0,ringCursor=0,breathStart=-100,breathLeft=0;
  const emitPosition=new THREE.Vector3(),emitDirection=new THREE.Vector3(),up=new THREE.Vector3(0,1,0);
  const random=(a,b)=>a+Math.random()*(b-a);
  function particle(p,v,type){
    const i=cursor++%capacity,k=i*3;initial[k]=p.x;initial[k+1]=p.y;initial[k+2]=p.z;
    velocity[k]=v.x;velocity[k+1]=v.y;velocity[k+2]=v.z;
    birth[i]=time;kind[i]=type;life[i]=type===2?random(1.2,2.4):random(.7,1.6);
    sizes[i]=type===2?random(1.0,2.7):random(.25,.85);alphas[i]=0;
  }
  function ripple(p,strength=1,heading=0){
    const r=rings[ringCursor++%ringCount];r.x=p.x;r.z=p.z;r.born=time;r.life=3.2;
    r.initial=strength>1?2:1;r.speed=2.0*strength;r.heading=heading;
  }
  const v=new THREE.Vector3();
  function splash(p,strength=1){
    const count=Math.round((compact?28:70)*strength);
    for(let i=0;i<count;i++){
      const angle=random(0,Math.PI*2),speed=random(2,10)*strength;
      v.set(Math.cos(angle)*speed,random(4,13)*strength,Math.sin(angle)*speed*random(.6,1.2));
      particle(p,v,i%4===0?2:1);
    }
    ripple(p,1.8*strength);ripple(p,.9*strength,.6);
  }
  function beginBreath(){breathStart=time;breathLeft=0;}
  function update(dt,visible,blowhole,normal){
    time+=dt;
    const breathAge=time-breathStart;
    if(breathAge>=0&&breathAge<.65&&blowhole){
      // Follow the animated/skinned blowhole during emission. Released drops stay in world space.
      breathLeft+=dt*(compact?100:250)*(1-breathAge/.8);
      if(visible){
        emitPosition.copy(blowhole);emitDirection.copy(normal??up).normalize();
        while(breathLeft>=1){
          breathLeft--;const speed=random(18,32)*(1-breathAge*.45);
          v.copy(emitDirection).multiplyScalar(speed);v.x+=random(-4,4);v.z+=random(-4,4);
          particle(emitPosition,v,Math.random()<.8?2:1);
        }
      }else breathLeft=0;
    }
    points.visible=visible;
    if(visible){
      let alive=0;
      for(let i=0;i<capacity;i++){
        const a=time-birth[i];if(!life[i]||a>life[i]){alphas[i]=0;continue;}alive++;
        const k=i*3,mist=kind[i]===2,drag=mist?1.05:.25,t=(1-Math.exp(-drag*a))/drag;
        positions[k]=initial[k]+velocity[k]*t+(mist?a*a*.9:0);
        positions[k+1]=initial[k+1]+velocity[k+1]*t-(mist?2.4:4.9)*a*a;
        positions[k+2]=initial[k+2]+velocity[k+2]*t;
        const fade=1-a/life[i];alphas[i]=(mist?.23:.57)*Math.min(1,a*18)*fade*fade;
        if(positions[k+1]<heightAt(positions[k],positions[k+2]))alphas[i]=0;
      }
      points.visible=alive>0;geometry.attributes.position.needsUpdate=true;geometry.attributes.aAlpha.needsUpdate=true;geometry.attributes.aSize.needsUpdate=true;
      material.uniforms.viewport.value=viewportHeight();material.uniforms.light.value=THREE.MathUtils.clamp(daylight(),0,1);
    }
    for(const r of rings){
      const age=time-r.born;r.mesh.visible=visible&&age<r.life;
      if(!r.mesh.visible)continue;
      const radius=r.initial+r.speed*age,fade=1-age/r.life;
      r.mesh.material.opacity=.20*fade*fade;
      r.mesh.material.color.setRGB(.12+.42*daylight(),.20+.48*daylight(),.28+.44*daylight());
      for(let i=0;i<=segments;i++){
        const angle=i/segments*Math.PI*2+r.heading,irregular=1+.06*Math.sin(angle*3+r.heading);
        for(let side=0;side<2;side++){
          const d=(radius+side*(.16+age*.08))*irregular,x=r.x+Math.cos(angle)*d,z=r.z+Math.sin(angle)*d*.82;
          const k=(i*2+side)*3;r.vertices[k]=x;r.vertices[k+1]=heightAt(x,z)+.10;r.vertices[k+2]=z;
        }
      }
      r.mesh.geometry.attributes.position.needsUpdate=true;
    }
  }
  return {ripple,splash,beginBreath,update,stats:{capacity,ringCount},points};
}
