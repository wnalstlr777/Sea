import * as THREE from 'three';

// Radial, nonuniform tessellation: detail near the ship, coverage to the horizon.
export function createOcean() {
  const rings=220, sectors=256, positions=[0,0,0], indices=[];
  for(let i=1;i<=rings;i++){
    const r=18000*Math.pow(i/rings,2.4);
    for(let j=0;j<sectors;j++){const a=j/sectors*Math.PI*2;positions.push(Math.cos(a)*r,0,Math.sin(a)*r);}
  }
  for(let j=0;j<sectors;j++)indices.push(0,1+(j+1)%sectors,1+j);
  for(let i=0;i<rings-1;i++)for(let j=0;j<sectors;j++){
    const a=1+i*sectors+j,b=1+i*sectors+(j+1)%sectors,c=a+sectors,d=b+sectors;
    indices.push(a,b,c,b,d,c);
  }
  const geometry=new THREE.BufferGeometry();
  geometry.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));geometry.setIndex(indices);
  const uniforms={time:{value:0},travel:{value:0},curvature:{value:1},height:{value:.55},speed:{value:8},wake:{value:.65},horizon:{value:new THREE.Color('#83cbd0')},mid:{value:new THREE.Color('#218f9c')},near:{value:new THREE.Color('#087e89')},deep:{value:new THREE.Color('#075368')}};
  const material=new THREE.ShaderMaterial({uniforms,side:THREE.DoubleSide,
    vertexShader:`
      uniform float time,travel,curvature,height;
      varying vec3 world; varying vec2 water;
      float waves(vec2 p){return sin(p.x*.19+p.y*.11+time*.8)*.46+sin(p.x*-.31+p.y*.23+time*1.15)*.24+sin(p.y*.63+p.x*.37-time*1.5)*.12;}
      void main(){
        vec3 p=position; water=p.xz+vec2(0.,-travel);
        float r=length(p.xz);
        // Isotropic spherical-cap approximation. No preferred camera direction.
        p.y=-dot(p.xz,p.xz)*curvature/120000. + waves(water)*height*(1.-smoothstep(180.,1500.,r));
        world=p;gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);
      }`,
    fragmentShader:`
      uniform float time,travel,height,speed,wake;
      uniform vec3 horizon,mid,near,deep,skyHorizon,sunColor,sunDirection,moonDirection;
      uniform float daylight,sunVisible,moonVisible;
      varying vec3 world; varying vec2 water;
      float wave(vec2 p){return sin(p.x*.19+p.y*.11+time*.8)*.46+sin(p.x*-.31+p.y*.23+time*1.15)*.24+sin(p.y*.63+p.x*.37-time*1.5)*.12;}
      void main(){
        float dist=length(world.xz-cameraPosition.xz);
        float detail=1.-smoothstep(120.,900.,dist);
        float dx=(wave(water+vec2(.15,0.))-wave(water-vec2(.15,0.)))/.3;
        float dz=(wave(water+vec2(0.,.15))-wave(water-vec2(0.,.15)))/.3;
        float rippleFade=1.-smoothstep(.2,1.,length(fwidth(water)));
        float ripples=sin(water.x*2.8+water.y*1.7+time*1.8)*sin(water.y*3.3-time)*rippleFade;
        vec3 n=normalize(vec3(-dx*height*detail+ ripples*.035*detail,1.,-dz*height*detail));
        vec3 view=normalize(cameraPosition-world),light=normalize(sunDirection);
        float fresnel=pow(1.-max(dot(n,view),0.),3.);
        vec3 color=mix(deep,near,.50+.22*wave(water));
        color=mix(color,mid,smoothstep(60.,650.,dist));
        color=mix(color,horizon,smoothstep(200.,1200.,dist));
        color=mix(color,skyHorizon,fresnel*.23);
        float glint=pow(max(dot(n,normalize(view+light)),0.),100.);
        color*=mix(.10,1.,daylight);
        color+=sunColor*glint*sunVisible*1.5;
        float reflection=pow(max(dot(reflect(-view,n),light),0.),60.);
        color+=sunColor*reflection*sunVisible*.6;
        float moonReflection=pow(max(dot(reflect(-view,n),moonDirection),0.),85.);
        color+=vec3(.42,.58,.9)*moonReflection*moonVisible*.7;
        // Bow is -Z; stern wake remains in world +Z regardless of orbit.
        float behind=world.z-40.;
        float width=12.+max(behind,0.)*.16;
        float edges=exp(-pow((abs(world.x)-width)/1.5,2.));
        float center=exp(-pow(world.x/(width*.75),2.))*.25;
        float foam=.5+.5*sin(behind*1.9-travel*2.+sin(world.x*2.));
        float trail=(edges+center)*smoothstep(0.,8.,behind)*(1.-smoothstep(30.,200.,behind));
        float sides=exp(-pow((abs(world.x)-12.5)/.8,2.))*(1.-smoothstep(34.,44.,abs(world.z)));
        float strength=clamp(speed/8.,0.,1.)*wake;
        color=mix(color,(skyHorizon*mix(.2,1.,daylight)),clamp((trail+sides)*(.25+.5*foam)*strength,0.,.8));
        // Atmospheric fade hides the outer mesh boundary at every azimuth.
        // Fade before the curved surface's tangent, so sky and water meet in haze.
        float angularHaze=pow(1.-clamp(-normalize(world-cameraPosition).y/.16,0.,1.),3.);
        float haze=max(smoothstep(140.,450.,dist),angularHaze*smoothstep(100.,450.,dist));
        color=mix(color,skyHorizon,haze);
        gl_FragColor=vec4(color,1.);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`});
  const mesh=new THREE.Mesh(geometry,material);mesh.frustumCulled=false;
  return {mesh,uniforms};
}
