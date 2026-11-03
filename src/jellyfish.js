import * as THREE from 'three';

// Night-only bioluminescent schools. One instanced draw call, no lights/shadows.
export function createJellyfish(scene){
  const group=new THREE.Group();
  group.name='night-jellyfish-schools';
  scene.add(group);
  const count=48, perSchool=14;
  const geometry=new THREE.PlaneGeometry(3.2,3.2);
  const phases=new Float32Array(count);
  const fades=new Float32Array(count);
  const sizes=new Float32Array(count);
  const rates=new Float32Array(count);
  const flickers=new Float32Array(count);
  const seed=i=>{
    const n=Math.sin(i*127.1+19.17)*43758.5453;
    return n-Math.floor(n);
  };
  for(let i=0;i<count;i++){
    phases[i]=seed(i+5)*Math.PI*2;
    sizes[i]=.58+seed(i+31)*.58;
    rates[i]=.55+seed(i+71)*1.35;
    flickers[i]=seed(i+109)*Math.PI*2;
  }
  geometry.setAttribute('aPhase',new THREE.InstancedBufferAttribute(phases,1));
  geometry.setAttribute('aRate',new THREE.InstancedBufferAttribute(rates,1));
  geometry.setAttribute('aFlicker',new THREE.InstancedBufferAttribute(flickers,1));
  const fadeAttribute=new THREE.InstancedBufferAttribute(fades,1);
  fadeAttribute.setUsage(THREE.DynamicDrawUsage);
  geometry.setAttribute('aFade',fadeAttribute);
  const material=new THREE.ShaderMaterial({
    transparent:true,depthWrite:false,depthTest:true,
    side:THREE.DoubleSide,blending:THREE.AdditiveBlending,
    uniforms:{uTime:{value:0}},
    vertexShader:`attribute float aPhase;attribute float aFade;
      attribute float aRate;attribute float aFlicker;
      varying vec2 vUv;varying float vFade;varying float vPhase;
      varying float vRate;varying float vFlicker;
      void main(){
        vUv=uv;vFade=aFade;vPhase=aPhase;
        vRate=aRate;vFlicker=aFlicker;
        vec4 p=instanceMatrix*vec4(position,1.0);
        gl_Position=projectionMatrix*modelViewMatrix*p;
      }`,
    fragmentShader:`precision mediump float;
      uniform float uTime;
      varying vec2 vUv;varying float vFade;varying float vPhase;
      varying float vRate;varying float vFlicker;
      void main(){
        vec2 p=(vUv-.5)*2.;
        float r=length(p);
        float bell=1.-smoothstep(.29,.49,length(vec2(p.x,p.y*1.13)));
        float rim=exp(-pow((length(vec2(p.x,p.y*1.13))-.34)*11.,2.));
        float threads=0.;
        for(int j=0;j<5;j++){
          float k=float(j)-2.;
          float bend=.033*sin(uTime*1.5+vPhase+k*1.4+p.y*9.);
          float line=1.-smoothstep(.014,.039,abs(p.x-k*.11-bend));
          threads+=line*smoothstep(-.85,-.60,p.y)*(1.-smoothstep(-.16,-.03,p.y));
        }
        // Each jellyfish has its own breathing rate and two asynchronous rhythms.
        float breath=.5+.5*sin(uTime*vRate+vPhase);
        float slow=.5+.5*sin(uTime*(vRate*.39)+vFlicker);
        float glimmer=pow(max(0.,sin(uTime*(vRate*2.6)+vFlicker*1.7)),12.);
        float pulse=.22+.65*breath*breath*(.55+.45*slow)+.22*glimmer;
        float halo=exp(-r*r*5.)*.23;
        float alpha=(halo+bell*.36+rim*.25+threads*.12)*vFade*pulse;
        vec3 cyan=vec3(.12,.88,1.);
        vec3 violet=vec3(.50,.44,1.);
        vec3 color=mix(cyan,violet,.24+.18*sin(vPhase*2.));
        gl_FragColor=vec4(color,alpha);
      }`
  });
  const mesh=new THREE.InstancedMesh(geometry,material,count);
  mesh.name='jellyfish-one-drawcall';
  mesh.frustumCulled=false;
  mesh.castShadow=false;mesh.receiveShadow=false;
  mesh.renderOrder=2;
  group.add(mesh);
  const dummy=new THREE.Object3D();
  const centers=[[-19,-24],[20,-10],[-15,14]];
  // Six extra glowing jellyfish drift through the water between the overview camera and ship.
  const foregroundCount=6;
  let foregroundBlend=0;
  const smooth=(a,b,x)=>{const t=THREE.MathUtils.clamp((x-a)/(b-a),0,1);return t*t*(3-2*t);};
  let time=0;
  return {group,update(dt,hour,overview=false){
    const step=Math.min(dt,.1);
    time+=step;
    foregroundBlend=THREE.MathUtils.damp(foregroundBlend,overview?1:0,1.4,step);
    material.uniforms.uTime.value=time;
    const h=((hour%24)+24)%24;
    const night=h>=18?smooth(18,20,h):h<7?1-smooth(5,7,h):0;
    for(let i=0;i<count;i++){
      if(i>=count-foregroundCount){
        const j=i-(count-foregroundCount);
        const phase=phases[i];
        const x=65+(j%3)*9+Math.sin(time*.10+phase)*4;
        const z=-38+Math.floor(j/3)*28+Math.cos(time*.08+phase)*5;
        const y=1.72+Math.sin(time*.45+phase)*.18;
        dummy.position.set(x,y,z);
        dummy.rotation.set(-Math.PI/2,0,0);
        const size=sizes[i]*(1+.06*Math.sin(time*.9+phase));
        dummy.scale.set(size,size,size);
        dummy.updateMatrix();mesh.setMatrixAt(i,dummy.matrix);
        fades[i]=night*foregroundBlend*(.55+.45*Math.sin(time*.35+phase)**2);
        continue;
      }
      const school=Math.floor(i/perSchool);
      const index=i%perSchool;
      const phase=phases[i];
      const [cx,cz]=centers[school];
      const cycle=time*.032+school*2.09;
      const presence=smooth(-.6,.35,Math.sin(cycle))*.85+.15;
      fades[i]=night*presence;
      const angle=index*2.39996+phase*.22;
      const radius=1.4+Math.sqrt(index+1)*1.55;
      const driftX=Math.sin(time*.12+school*1.9)*3.2;
      const driftZ=Math.cos(time*.095+school*2.1)*4.0;
      dummy.position.set(
        cx+Math.cos(angle)*radius+driftX+Math.sin(time*.23+phase)*.55,
        1.72+Math.sin(time*.8+phase)*.09,
        cz+Math.sin(angle)*radius+driftZ+Math.cos(time*.19+phase)*.65
      );
      dummy.rotation.set(-Math.PI/2,0,0);
      const size=sizes[i]*(1+.045*Math.sin(time*1.4+phase));
      dummy.scale.set(size,size,size);
      dummy.updateMatrix();
      mesh.setMatrixAt(i,dummy.matrix);
    }
    fadeAttribute.needsUpdate=true;
    mesh.instanceMatrix.needsUpdate=true;
    mesh.visible=night>.002;
  }};
}
