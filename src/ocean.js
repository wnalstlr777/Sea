import * as THREE from 'three';
import {Water} from 'three/addons/objects/Water.js';
import {ImprovedNoise} from 'three/addons/math/ImprovedNoise.js';

// Bake a seamless normal / turbulence map once. Mipmaps filter distant ripples.
function createSurfaceTexture(){
  const size=256,noise=new ImprovedNoise(),field=new Float32Array(size*size);
  const tile=(x,y,scale)=>{
    const u=x/size,v=y/size;
    const a=THREE.MathUtils.lerp(noise.noise(u*scale,v*scale,4.2),noise.noise((u-1)*scale,v*scale,4.2),u);
    const b=THREE.MathUtils.lerp(noise.noise(u*scale,(v-1)*scale,4.2),noise.noise((u-1)*scale,(v-1)*scale,4.2),u);
    return THREE.MathUtils.lerp(a,b,v);
  };
  for(let y=0;y<size;y++)for(let x=0;x<size;x++)field[y*size+x]=tile(x,y,8)+tile(x,y,16)*.5+tile(x,y,32)*.25+tile(x,y,64)*.10;
  const data=new Uint8Array(size*size*4),at=(x,y)=>field[((y+size)%size)*size+(x+size)%size];
  for(let y=0;y<size;y++)for(let x=0;x<size;x++){
    const i=(y*size+x)*4;
    data[i]=THREE.MathUtils.clamp(128+(at(x+1,y)-at(x-1,y))*650,0,255);
    data[i+1]=THREE.MathUtils.clamp(128+(at(x,y+1)-at(x,y-1))*650,0,255);
    data[i+2]=THREE.MathUtils.clamp(128+at(x,y)*180,0,255);
    data[i+3]=THREE.MathUtils.clamp(255*(1.-Math.abs(at(x,y))*3.),0,255);
  }
  const texture=new THREE.DataTexture(data,size,size);
  texture.wrapS=texture.wrapT=THREE.RepeatWrapping;
  texture.magFilter=THREE.LinearFilter;texture.minFilter=THREE.LinearMipmapLinearFilter;
  texture.generateMipmaps=true;texture.needsUpdate=true;
  return texture;
}

export function createOcean(){
  const compact=typeof matchMedia==='function'&&matchMedia('(max-width: 600px)').matches;
  const rings=compact?180:240,sectors=compact?192:320,positions=[0,0,0],indices=[];
  for(let i=1;i<=rings;i++){
    const r=18000*Math.pow(i/rings,2.6);
    for(let j=0;j<sectors;j++){const a=j/sectors*Math.PI*2;positions.push(Math.cos(a)*r,0,Math.sin(a)*r);}
  }
  for(let j=0;j<sectors;j++)indices.push(0,1+(j+1)%sectors,1+j);
  for(let i=0;i<rings-1;i++)for(let j=0;j<sectors;j++){
    const a=1+i*sectors+j,b=1+i*sectors+(j+1)%sectors,c=a+sectors,d=b+sectors;
    indices.push(a,b,c,b,d,c);
  }
  const geometry=new THREE.BufferGeometry();
  geometry.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));geometry.setIndex(indices);
  const surfaceMap=createSurfaceTexture();
  // Reuse Three.js Water's mirrored camera and oblique clipping for scene reflections.
  // The capture plane stays flat; the visible mesh retains the curved horizon.
  const mirror=new Water(new THREE.PlaneGeometry(1,1),{textureWidth:compact?256:512,textureHeight:compact?256:512});
  mirror.rotation.x=-Math.PI/2;mirror.updateMatrixWorld();
  const uniforms={
    time:{value:0},travel:{value:0},curvature:{value:1},height:{value:.55},speed:{value:8},wake:{value:.65},
    horizon:{value:new THREE.Color('#52798b')},mid:{value:new THREE.Color('#17455c')},
    near:{value:new THREE.Color('#105064')},deep:{value:new THREE.Color('#062839')},
    surfaceMap:{value:surfaceMap},mirrorSampler:mirror.material.uniforms.mirrorSampler,
    textureMatrix:mirror.material.uniforms.textureMatrix,
  };
  const material=new THREE.ShaderMaterial({name:'OceanSurface',uniforms,side:THREE.DoubleSide,
    vertexShader:`
      uniform float time,travel,curvature,height;
      uniform mat4 textureMatrix;
      varying vec3 world,macroNormal;
      varying vec2 water;
      varying float crest;
      varying vec4 mirrorCoord;
      void wave(vec2 anchor,vec2 direction,float wavelength,float amplitude,float steepness,inout vec3 p,inout vec3 dx,inout vec3 dz,inout float compression){
        vec2 d=normalize(direction);float k=6.2831853/wavelength;
        float phase=k*dot(d,anchor)-sqrt(9.81*k)*time;
        float a=amplitude*height;
        float s=sin(phase),c=cos(phase),q=steepness;
        p+=vec3(q*a*d.x*c,a*s,q*a*d.y*c);
        dx+=vec3(-q*a*k*d.x*d.x*s,a*k*d.x*c,-q*a*k*d.x*d.y*s);
        dz+=vec3(-q*a*k*d.x*d.y*s,a*k*d.y*c,-q*a*k*d.y*d.y*s);
        compression+=q*a*k*s;
      }
      void main(){
        water=position.xz-vec2(0.,travel);
        vec3 p=position,dx=vec3(1.,0.,0.),dz=vec3(0.,0.,1.);crest=0.;
        wave(water,vec2(.85,.35),42.,.95,.65,p,dx,dz,crest);
        wave(water,vec2(-.3,.95),23.,.48,.6,p,dx,dz,crest);
        wave(water,vec2(.6,.8),13.,.25,.55,p,dx,dz,crest);
        wave(water,vec2(-.8,.6),7.1,.14,.5,p,dx,dz,crest);
        wave(water,vec2(.95,-.2),3.9,.065,.45,p,dx,dz,crest);
        wave(water,vec2(.4,.9),2.1,.035,.4,p,dx,dz,crest);
        p.y-=dot(p.xz,p.xz)*curvature/120000.;
        dx.y-=2.*p.x*curvature/120000.;dz.y-=2.*p.z*curvature/120000.;
        macroNormal=normalize(cross(dz,dx));world=p;
        mirrorCoord=textureMatrix*vec4(p.x,0.,p.z,1.);
        gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);
      }`,
    fragmentShader:`
      uniform float time,travel,height,speed,wake,daylight,sunVisible,moonVisible;
      uniform vec3 horizon,mid,near,deep,zenith,skyHorizon,sunColor,sunDirection,moonDirection;
      uniform sampler2D surfaceMap,mirrorSampler;
      varying vec3 world,macroNormal;
      varying vec2 water;
      varying float crest;
      varying vec4 mirrorCoord;
      vec4 turbulence(vec2 p){
        vec4 a=texture2D(surfaceMap,p/38.+vec2(time*.012,-time*.009));
        vec4 b=texture2D(surfaceMap,vec2(-p.y,p.x)/19.+vec2(-time*.014,time*.011));
        vec4 c=texture2D(surfaceMap,p/7.3+vec2(time*.018,time*.013));
        return a*.5+b*.32+c*.18;
      }
      float highlight(vec3 n,vec3 v,vec3 l,float roughness){
        vec3 h=normalize(v+l);float nh=max(dot(n,h),0.);
        float a2=pow(roughness,4.);
        float den=1.-nh*nh+nh*nh*a2;
        float distribution=a2/max(den*den,.000001);
        float nv=max(dot(n,v),.03),nl=max(dot(n,l),0.);
        float k=pow(roughness+1.,2.)/8.;
        float geometry=nv/(nv*(1.-k)+k)*nl/(nl*(1.-k)+k);
        float f=.02+.98*pow(1.-max(dot(v,h),0.),5.);
        return min(distribution*geometry*f/max(4.*nv,.08),5.);
      }
      void main(){
        float dist=length(cameraPosition-world);
        vec4 tex=turbulence(water);
        vec2 ripple=(tex.rg*2.-1.)*.48;
        float rippleGain=mix(.55,1.,clamp(height,0.,1.));
        vec3 n=normalize(macroNormal+vec3(-ripple.x,0.,-ripple.y)*rippleGain);
        vec3 v=normalize(cameraPosition-world),r=reflect(-v,n);
        float nv=max(dot(n,v),0.);
        // Water reflects strongly at low viewing angles while retaining deep body colour.
        float fresnel=.035+.965*pow(1.-nv,5.);
        vec3 sky=mix(skyHorizon,zenith,smoothstep(.015,.65,max(r.y,0.)));
        float cloud=texture2D(surfaceMap,r.xz/(abs(r.y)+.35)*.13).b;
        sky=mix(sky,skyHorizon*1.18,smoothstep(.48,.76,cloud)*.2*daylight);
        vec2 uv=mirrorCoord.xy/mirrorCoord.w;
        uv+=n.xz*.018/(1.+dist*.008);
        vec3 sceneReflection=texture2D(mirrorSampler,clamp(uv,vec2(.002),vec2(.998))).rgb;
        float valid=step(0.,uv.x)*step(uv.x,1.)*step(0.,uv.y)*step(uv.y,1.)*step(0.,mirrorCoord.w);
        vec3 reflection=mix(sky,sceneReflection,valid*.8);
        vec3 body=mix(deep,near,clamp(.38+world.y*.16+tex.b*.22,0.,1.));
        body=mix(body,mid,smoothstep(100.,1200.,dist)*.32);
        body=mix(body,horizon,smoothstep(900.,7000.,dist)*.22);
        body*=mix(.12,1.,daylight)*(.65+.45*max(dot(n,normalize(sunDirection)),0.));
        // Forward scattering illuminates thin wave crests against the light.
        float scatter=pow(max(dot(v,-normalize(sunDirection)),0.),3.)*max(world.y,0.);
        body+=near*scatter*sunVisible*.35;
        vec3 color=mix(body,reflection,clamp(fresnel+.14,0.,1.));
        float variance=dot(dFdx(n),dFdx(n))+dot(dFdy(n),dFdy(n));
        float roughness=clamp(.19+sqrt(variance)*.35,.19,.42);
        color+=sunColor*highlight(n,v,normalize(sunDirection),roughness)*sunVisible*2.6;
        color+=vec3(.64,.76,1.)*highlight(n,v,normalize(moonDirection),roughness)*moonVisible*1.4;
        // Broken foam networks on steep crests rather than solid stripes.
        vec4 fine=texture2D(surfaceMap,water/5.7+vec2(time*.025,-time*.017));
        float whitecaps=smoothstep(.12,.27,crest)*smoothstep(.43,.72,tex.b)*smoothstep(.58,.85,fine.a);
        // Stern at +40m: turbulent prop wash, spreading shoulders, and hull contact foam.
        float aft=max(world.z-37.,0.);
        float bend=(tex.b-.5)*5.;
        float width=5.+aft*.17;
        float core=exp(-pow((world.x+bend)/(width*.65),2.));
        float shoulders=exp(-pow((abs(world.x+bend)-8.-aft*.23)/(1.6+aft*.025),2.));
        float trail=(core*.85+shoulders*.8)*smoothstep(0.,7.,world.z-37.)*(1.-smoothstep(65.,260.,aft));
        float hullWidth=mix(0.,12.,smoothstep(-40.,-20.,world.z));
        float contact=exp(-pow((abs(world.x)-hullWidth+(tex.b-.5)*1.8)/1.3,2.))*(1.-smoothstep(32.,43.,abs(world.z)));
        float bubbles=smoothstep(.32,.69,fine.b*.65+tex.b*.35);
        float lace=smoothstep(.58,.86,fine.a);
        float propulsion=clamp(speed/8.,0.,1.)*wake;
        float foam=clamp(whitecaps*.65+(trail*(.2+bubbles*.65+lace*.5)+contact*(.35+bubbles*.65))*propulsion,0.,.96);
        vec3 foamColor=mix(vec3(.07,.12,.2),vec3(.78,.86,.85),daylight);
        foamColor=mix(foamColor,skyHorizon,.18);
        color=mix(color,foamColor,foam);
        // Keep foreground and mid-distance texture; blend before the curved tangent.
        float haze=1.-exp(-pow(dist/3800.,1.45));
        color=mix(color,skyHorizon,haze);
        gl_FragColor=vec4(color,1.);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`});
  const mesh=new THREE.Mesh(geometry,material);mesh.frustumCulled=false;
  mesh.onBeforeRender=(renderer,scene,camera)=>{
    mesh.visible=false;
    try{mirror.onBeforeRender(renderer,scene,camera);}finally{mesh.visible=true;}
  };
  return {mesh,uniforms};
}
