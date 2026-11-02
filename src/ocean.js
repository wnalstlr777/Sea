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
      float waves(vec2 p){return sin(p.x*.19+p.y*.11+time*.8)*.46+sin(p.x*-.31+p.y*.23+time*1.15)*.24;}
      void main(){
        vec3 p=position; water=p.xz+vec2(0.,-travel);
        float r=length(p.xz);
        // Isotropic spherical-cap approximation. No preferred camera direction.
        p.y=-dot(p.xz,p.xz)*curvature/120000. + waves(water)*height*(1.-smoothstep(55.,180.,r));
        world=p;gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);
      }`,
    fragmentShader:`
      uniform float time,travel,height,speed,wake;
      uniform vec3 horizon,mid,near,deep,zenith,skyHorizon,sunColor,sunDirection,moonDirection;
      uniform float daylight,sunVisible,moonVisible;
      varying vec3 world; varying vec2 water;
      // Filter each directional wave using its screen-space footprint.
      // Analytic gradients avoid sampling a high-frequency checkerboard pattern.
      float filteredWave(vec2 p,vec2 k,float phase){
        float angle=dot(p,k)+phase;
        float footprint=length(vec2(dFdx(angle),dFdy(angle)));
        return exp(-.5*footprint*footprint)*sin(angle);
      }
      vec2 filteredSlope(vec2 p,vec2 k,float phase,float amplitude){
        float angle=dot(p,k)+phase;
        float footprint=length(vec2(dFdx(angle),dFdy(angle)));
        return k*cos(angle)*amplitude*exp(-.5*footprint*footprint);
      }
      void main(){
        float dist=length(world.xz-cameraPosition.xz);
        float detail=1.-smoothstep(65.,350.,dist);
        vec2 p=world.xz-vec2(0.,travel);
        vec2 slope=filteredSlope(p,vec2(.19,.11),time*.8,.46)+filteredSlope(p,vec2(-.31,.23),time*1.15,.24);
        vec2 ripples=filteredSlope(p,vec2(.83,.41),time*1.4,.045)
          +filteredSlope(p,vec2(-.37,1.13),-time*1.7,.032)
          +filteredSlope(p,vec2(2.13,.73),time*2.1,.012)
          +filteredSlope(p,vec2(-1.21,2.71),-time*2.6,.008);
        float rippleDetail=1.-smoothstep(120.,900.,dist);
        vec3 n=normalize(vec3(-slope.x*height*detail-ripples.x*rippleDetail,1.,-slope.y*height*detail-ripples.y*rippleDetail));
        vec3 view=normalize(cameraPosition-world),light=normalize(sunDirection);
        float fresnel=.02+.98*pow(1.-max(dot(n,view),0.),5.);
        vec3 reflected=reflect(-view,n);
        vec3 skyReflection=mix(skyHorizon,zenith,smoothstep(.015,.6,max(reflected.y,0.)));
        vec3 color=mix(deep,near,.50+.10*filteredWave(p,vec2(.19,.11),time*.8));
        color=mix(color,mid,smoothstep(60.,650.,dist));
        color=mix(color,horizon,smoothstep(200.,1200.,dist));
        color*=mix(.10,1.,daylight);
        color=mix(color,skyReflection,fresnel);
        // Screen-space normal variance broadens distant highlights, preventing shimmer.
        float variance=dot(dFdx(n),dFdx(n))+dot(dFdy(n),dFdy(n));
        float roughness=clamp(.055+sqrt(variance)*.7,.055,.32);
        float alpha2=pow(roughness,4.);
        vec3 sunHalf=normalize(view+light);
        float sunNdotH=max(dot(n,sunHalf),0.);
        float sunDenom=1.-sunNdotH*sunNdotH+sunNdotH*sunNdotH*alpha2;
        float sunLobe=alpha2/max(sunDenom*sunDenom,.0000001);
        vec3 moonHalf=normalize(view+normalize(moonDirection));
        float moonNdotH=max(dot(n,moonHalf),0.);
        float moonDenom=1.-moonNdotH*moonNdotH+moonNdotH*moonNdotH*alpha2;
        float moonLobe=alpha2/max(moonDenom*moonDenom,.0000001);
        float sunFacing=smoothstep(-.02,.08,light.y)*max(dot(n,light),0.);
        float moonFacing=smoothstep(-.02,.06,moonDirection.y)*max(dot(n,moonDirection),0.);
        color+=sunColor*min(sunLobe*.035,7.)*sunFacing*sunVisible*(.2+.8*fresnel);
        color+=vec3(.64,.76,1.)*min(moonLobe*.025,4.)*moonFacing*moonVisible*(.2+.8*fresnel);
        // Bow is -Z; stern wake remains in world +Z regardless of orbit.
        float behind=world.z-40.;
        float width=12.+max(behind,0.)*.16;
        float edges=exp(-pow((abs(world.x)-width)/1.5,2.));
        float center=exp(-pow(world.x/(width*.75),2.))*.25;
        float foam=.5+.5*filteredWave(p,vec2(.25,1.1),-travel*.4);
        float trail=(edges+center)*smoothstep(0.,8.,behind)*(1.-smoothstep(30.,200.,behind));
        float sides=exp(-pow((abs(world.x)-12.5)/.8,2.))*(1.-smoothstep(34.,44.,abs(world.z)));
        float strength=clamp(speed/8.,0.,1.)*wake;
        color=mix(color,(skyHorizon*mix(.2,1.,daylight)),clamp((trail+sides)*(.25+.5*foam)*strength,0.,.8));
        // Atmospheric fade hides the outer mesh boundary at every azimuth.
        // Fade before the curved surface's tangent, so sky and water meet in haze.
        float angularHaze=pow(1.-clamp(-normalize(world-cameraPosition).y/.16,0.,1.),3.);
        float haze=max(smoothstep(600.,2200.,dist),angularHaze*smoothstep(350.,1600.,dist));
        color=mix(color,skyHorizon,haze);
        gl_FragColor=vec4(color,1.);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`});
  const mesh=new THREE.Mesh(geometry,material);mesh.frustumCulled=false;
  return {mesh,uniforms};
}
