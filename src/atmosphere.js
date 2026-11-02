import * as THREE from 'three';

// GPU sky effects share the existing time-of-day lighting, with no image downloads.
export function createAtmosphere(scene,lighting){
  const time={value:0},night={value:0};
  const positions=[],phases=[],sizes=[];
  for(let i=0;i<4000;i++){
    const y=.025+Math.random()*.975,a=Math.random()*Math.PI*2,r=Math.sqrt(1-y*y);
    positions.push(r*Math.cos(a)*16000,y*16000,r*Math.sin(a)*16000);
    phases.push(Math.random()*Math.PI*2);sizes.push(1.1+Math.random()*2.4);
  }
  const starsGeometry=new THREE.BufferGeometry();
  starsGeometry.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));
  starsGeometry.setAttribute('phase',new THREE.Float32BufferAttribute(phases,1));
  starsGeometry.setAttribute('size',new THREE.Float32BufferAttribute(sizes,1));
  const stars=new THREE.Points(starsGeometry,new THREE.ShaderMaterial({
    uniforms:{time,night},transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,
    vertexShader:`attribute float phase,size;uniform float time,night;varying float brightness,tint;
      void main(){brightness=night*(.5+.5*pow(.5+.5*sin(time*(1.2+size*.6)+phase),2.));tint=phase/6.283;
      gl_PointSize=size;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
    fragmentShader:`varying float brightness,tint;void main(){float d=length(gl_PointCoord-.5)*2.;float glow=exp(-d*d*4.)*(1.-smoothstep(.6,1.,d));gl_FragColor=vec4(mix(vec3(.64,.79,1.),vec3(1.,.89,.73),tint),brightness*glow);}`
  }));stars.name='night-stars';stars.renderOrder=-9;scene.add(stars);

  // A thin volume of drifting fractal cumulus, integrated front to back.
  // Density samples along sunlight produce shaded bases and bright sunlit edges.
  const clouds=new THREE.Mesh(new THREE.SphereGeometry(21000,32,16),new THREE.ShaderMaterial({
    uniforms:{...lighting.uniforms,time},side:THREE.BackSide,transparent:true,depthWrite:false,
    vertexShader:`varying vec3 direction;void main(){direction=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
    fragmentShader:`
      uniform float time,daylight,sunVisible,cloudCover;uniform vec3 sunDirection,sunColor,skyHorizon;varying vec3 direction;
      float hash(vec3 p){return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.5453);}
      float noise(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
        return mix(mix(mix(hash(i),hash(i+vec3(1,0,0)),f.x),mix(hash(i+vec3(0,1,0)),hash(i+vec3(1,1,0)),f.x),f.y),
                   mix(mix(hash(i+vec3(0,0,1)),hash(i+vec3(1,0,1)),f.x),mix(hash(i+vec3(0,1,1)),hash(i+vec3(1,1,1)),f.x),f.y),f.z);}
      float density(vec3 p){
        vec3 q=p*.0025+vec3(time*.012,0.,time*.004);
        float n=noise(q)*.70+noise(q*2.03)*.23+noise(q*4.11)*.07;
        float layer=smoothstep(650.,780.,p.y)*(1.-smoothstep(980.,1200.,p.y));
        float threshold=mix(.82,.18,cloudCover);
        return smoothstep(threshold,threshold+.18,n)*layer*cloudCover;
      }
      void main(){
        vec3 d=normalize(direction);if(d.y<.018||cloudCover<=0.)discard;
        float start=650./d.y,finish=min(1200./d.y,16000.);
        if(finish<=start)discard;
        float stepSize=(finish-start)/32.;vec3 sum=vec3(0.);float alpha=0.;
        vec3 lightDir=normalize(vec3(sunDirection.x,max(sunDirection.y,.25),sunDirection.z));
        for(int i=0;i<32;i++){
          vec3 p=d*(start+(float(i)+.5)*stepSize);
          float den=density(p);float a=1.-exp(-den*stepSize*.006);
          float shade=exp(-density(p+lightDir*150.)*1.8-density(p+lightDir*330.)*.9);
          vec3 ambient=mix(vec3(.045,.065,.12),vec3(.44,.56,.70),daylight);
          vec3 direct=mix(vec3(.12,.18,.29),sunColor,daylight)*shade*(.2+sunVisible*.85);
          sum+=(1.-alpha)*a*(ambient+direct);alpha+=(1.-alpha)*a;
          if(alpha>.98)break;
        }
        float haze=smoothstep(.035,.22,d.y);
        vec3 color=mix(skyHorizon,sum/max(alpha,.001),haze);
        gl_FragColor=vec4(color,alpha*haze*.92);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`
  }));clouds.name='volumetric-clouds';clouds.renderOrder=-8;scene.add(clouds);

  const meteorGeometry=new THREE.BufferGeometry();
  const trail=new Float32Array(36*3),colors=new Float32Array(36*3);
  for(let i=0;i<36;i++){const v=Math.pow(1-i/35,2);colors.set([v*.75,v*.86,v],i*3);}
  meteorGeometry.setAttribute('position',new THREE.BufferAttribute(trail,3).setUsage(THREE.DynamicDrawUsage));
  meteorGeometry.setAttribute('color',new THREE.BufferAttribute(colors,3));
  const meteor=new THREE.Line(meteorGeometry,new THREE.LineBasicMaterial({vertexColors:true,transparent:true,opacity:0,depthWrite:false,blending:THREE.AdditiveBlending}));
  meteor.name='shooting-star';meteor.frustumCulled=false;meteor.renderOrder=-9;scene.add(meteor);
  let age=-1,nextMeteor=5+Math.random()*6;
  const origin=new THREE.Vector3(),velocity=new THREE.Vector3();
  function update(dt){
    time.value+=dt;night.value=1-THREE.MathUtils.smoothstep(lighting.uniforms.daylight.value,.1,.55);
    stars.visible=night.value>0;meteor.visible=night.value>0;
    if(night.value<.2){age=-1;meteor.material.opacity=0;return;}
    nextMeteor-=dt;
    if(age<0&&nextMeteor<=0){
      // Place in the forward half of the sky, then fall diagonally toward the horizon.
      const angle=Math.random()*Math.PI*1.3-Math.PI*.65;
      origin.set(Math.sin(angle)*7500,3500+Math.random()*3500,-Math.cos(angle)*7500);
      velocity.set(2200+Math.random()*1600,-2200,600);
      age=0;nextMeteor=12+Math.random()*16;
    }
    if(age>=0){
      age+=dt;
      for(let i=0;i<36;i++){
        const t=Math.max(0,age-i*.014);
        trail[i*3]=origin.x+velocity.x*t;trail[i*3+1]=origin.y+velocity.y*t;trail[i*3+2]=origin.z+velocity.z*t;
      }
      meteorGeometry.attributes.position.needsUpdate=true;
      meteor.material.opacity=night.value*Math.min(1,age*8)*Math.max(0,1-age/1.5);
      if(age>=1.5){age=-1;meteor.material.opacity=0;}
    }
  }
  return {update,stars,clouds,meteor};
}
