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
export function createLighting(scene,ocean){
  const uniforms={zenith:{value:new THREE.Color()},skyHorizon:{value:new THREE.Color()},sunColor:{value:new THREE.Color()},sunDirection:{value:new THREE.Vector3()},daylight:{value:1},sunVisible:{value:1}};
  Object.assign(ocean.uniforms,uniforms);
  const sky=new THREE.Mesh(new THREE.SphereGeometry(24000,32,20),new THREE.ShaderMaterial({uniforms,side:THREE.BackSide,depthWrite:false,
    vertexShader:`varying vec3 dir;void main(){dir=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
    fragmentShader:`
      uniform vec3 zenith,skyHorizon,sunColor,sunDirection;uniform float daylight,sunVisible;varying vec3 dir;
      void main(){
        vec3 d=normalize(dir);float h=d.y;
        vec3 c=mix(skyHorizon,zenith,smoothstep(-.02,.7,h));
        float angle=acos(clamp(dot(d,sunDirection),-1.,1.));
        float disc=1.-smoothstep(.016,.019,angle);
        float glow=exp(-angle*12.)*.45;
        c+=sunColor*(disc*2.2+glow)*sunVisible*smoothstep(-.055,-.015,h);
        gl_FragColor=vec4(c,1.);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}));scene.add(sky);
  const ambient=new THREE.HemisphereLight('#ebfcff','#397786',1);scene.add(ambient);
  const sunlight=new THREE.DirectionalLight('#fff3d6',2);scene.add(sunlight);
  let previousHour=-1;
  function update(hour){
    if(hour===previousHour)return;previousHour=hour;
    const t=THREE.MathUtils.clamp(hour,0,24);let index=0;while(index<stops.length-2&&t>stops[index+1][0])index++;
    const a=stops[index],b=stops[index+1],f=THREE.MathUtils.smoothstep(t,a[0],b[0]);
    for(const [key,column] of [['zenith',1],['skyHorizon',2],['sunColor',3]])uniforms[key].value.set(a[column]).lerp(new THREE.Color(b[column]),f);
    const elevation=Math.sin((t-6)/12*Math.PI);
    // The setting sun stays straight ahead of the bow (-Z).
    uniforms.sunDirection.value.set(0,elevation+.025,-Math.max(.04,Math.abs(Math.cos((t-6)/12*Math.PI)))).normalize();
    uniforms.sunVisible.value=THREE.MathUtils.smoothstep(elevation,-.09,.01);
    uniforms.daylight.value=THREE.MathUtils.lerp(a[4],b[4],f);
    ambient.color.copy(uniforms.skyHorizon.value);ambient.groundColor.set('#345266');ambient.intensity=.18+uniforms.daylight.value*2.2;
    sunlight.color.copy(uniforms.sunColor.value);sunlight.intensity=THREE.MathUtils.lerp(a[5],b[5],f)*uniforms.sunVisible.value;sunlight.position.copy(uniforms.sunDirection.value).multiplyScalar(100);
  }
  update(18);return {update,uniforms};
}
