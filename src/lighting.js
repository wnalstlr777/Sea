import * as THREE from 'three';

const stops=[
  [0,'#060e24','#18263c','#a6c7ff',.07,.23],
  [6,'#524968','#ec9b78','#ffc18c',.4,.6],
  [12,'#428fbd','#a3d1db','#fff3d6',1,2.5],
  [17,'#525a8f','#f2ab77','#ffba68',.75,1.7],
  [18,'#343c6b','#d87b60','#ff9c43',.5,1.1],
  [19,'#182242','#785368','#f47b4b',.18,.35],
  [21,'#060e24','#18263c','#a6c7ff',.07,.23],
  [24,'#060e24','#18263c','#a6c7ff',.07,.23],
];
// Inclined arcs include lateral travel instead of the old X=0 vertical path.
export function celestialDirections(hour){
  const angle=(hour-6)/12*Math.PI;
  const sun=new THREE.Vector3(.7*Math.sin(angle),.64*Math.sin(angle),Math.cos(angle)).normalize();
  const moonAngle=(hour<12?hour+24:hour)-18;
  const phase=moonAngle/12*Math.PI;
  const moon=new THREE.Vector3(-.8*Math.cos(phase),.075*Math.sin(phase),-.85).normalize();
  return {sun,moon};
}
export function createLighting(scene,ocean){
  const uniforms={zenith:{value:new THREE.Color()},skyHorizon:{value:new THREE.Color()},sunColor:{value:new THREE.Color()},sunDirection:{value:new THREE.Vector3()},daylight:{value:1},sunVisible:{value:1},moonDirection:{value:new THREE.Vector3()},moonVisible:{value:0}};
  Object.assign(ocean.uniforms,uniforms);
  const sky=new THREE.Mesh(new THREE.SphereGeometry(24000,32,20),new THREE.ShaderMaterial({uniforms,side:THREE.BackSide,depthWrite:false,
    vertexShader:`varying vec3 dir;void main(){dir=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
    fragmentShader:`
      uniform vec3 zenith,skyHorizon,sunColor,sunDirection,moonDirection;uniform float daylight,sunVisible,moonVisible;varying vec3 dir;
      void main(){
        vec3 d=normalize(dir);float h=d.y;
        vec3 c=mix(skyHorizon,zenith,smoothstep(.015,.6,h));
        float angle=acos(clamp(dot(d,sunDirection),-1.,1.));
        float disc=1.-smoothstep(.016,.019,angle);
        float glow=exp(-angle*12.)*.45;
        float atmosphere=smoothstep(-.04,.02,h);
        c+=sunColor*(disc*2.2+glow)*sunVisible*atmosphere;
        float moonAngle=acos(clamp(dot(d,moonDirection),-1.,1.));
        float moonDisc=1.-smoothstep(.019,.021,moonAngle);
        vec3 moonRight=normalize(cross(vec3(0.,1.,0.),moonDirection));
        vec3 moonUp=cross(moonDirection,moonRight);
        vec2 uv=vec2(dot(d,moonRight),dot(d,moonUp))/.02;
        float texture=.92-.17*exp(-length(uv-vec2(-.3,.25))*5.)-.13*exp(-length(uv-vec2(.35,-.2))*6.);
        c+=vec3(.64,.76,1.)*(moonDisc*texture+exp(-moonAngle*23.)*.12)*moonVisible*atmosphere;
        gl_FragColor=vec4(c,1.);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}));scene.add(sky);
  const ambient=new THREE.HemisphereLight('#ebfcff','#397786',1);scene.add(ambient);
  const sunlight=new THREE.DirectionalLight('#fff3d6',2);scene.add(sunlight);
  const moonlight=new THREE.DirectionalLight('#82acff',1.5);scene.add(moonlight);
  // A soft sky fill keeps the camera-facing side of the capsule readable.
  const moonFill=new THREE.DirectionalLight('#8ab5ff',0);moonFill.position.set(-40,60,60);scene.add(moonFill);
  let previousHour=-1,displayHour=18;
  function update(hour,dt){
    if(dt!==undefined){
      const delta=((hour-displayHour+36)%24)-12;
      displayHour=(displayHour+delta*(1.-Math.exp(-dt*3.))+24)%24;
      if(Math.abs(delta)<.0001)displayHour=hour;
    }else displayHour=hour;
    hour=displayHour;
    if(hour===previousHour)return;previousHour=hour;
    const t=THREE.MathUtils.clamp(hour,0,24);let index=0;while(index<stops.length-2&&t>stops[index+1][0])index++;
    const a=stops[index],b=stops[index+1],f=THREE.MathUtils.smoothstep(t,a[0],b[0]);
    for(const [key,column] of [['zenith',1],['skyHorizon',2],['sunColor',3]])uniforms[key].value.set(a[column]).lerp(new THREE.Color(b[column]),f);
    const {sun,moon}=celestialDirections(t);
    uniforms.sunDirection.value.copy(sun);
    uniforms.moonDirection.value.copy(moon);
    uniforms.sunVisible.value=THREE.MathUtils.smoothstep(sun.y,-.075,.025);
    uniforms.moonVisible.value=THREE.MathUtils.smoothstep(moon.y,-.06,.08)*(1.-THREE.MathUtils.smoothstep(sun.y,-.1,.15));
    uniforms.daylight.value=THREE.MathUtils.lerp(a[4],b[4],f);
    const night=1.-THREE.MathUtils.smoothstep(uniforms.daylight.value,.1,.55);
    ambient.color.copy(uniforms.skyHorizon.value).lerp(new THREE.Color('#6387c6'),night);
    ambient.groundColor.set('#223351');ambient.intensity=.35+uniforms.daylight.value*2.2;
    sunlight.color.copy(uniforms.sunColor.value);sunlight.intensity=THREE.MathUtils.lerp(a[5],b[5],f)*uniforms.sunVisible.value;sunlight.position.copy(uniforms.sunDirection.value).multiplyScalar(100);
    // Lift the lighting angle above the stylized low moon so deck surfaces receive it.
    moonlight.position.copy(uniforms.moonDirection.value);moonlight.position.y=.65;moonlight.position.normalize().multiplyScalar(100);moonlight.intensity=1.7*uniforms.moonVisible.value;moonFill.intensity=.65*uniforms.moonVisible.value;
  }
  update(18);return {update,uniforms,moonlight,ambient};
}
