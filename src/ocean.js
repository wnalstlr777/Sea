import * as THREE from 'three';
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
  const uniforms={
    time:{value:0},travel:{value:0},curvature:{value:1},height:{value:.55},waveSize:{value:1},normalStrength:{value:0},speed:{value:8},wake:{value:.65},
    horizon:{value:new THREE.Color('#52798b')},mid:{value:new THREE.Color('#17455c')},
    near:{value:new THREE.Color('#105064')},deep:{value:new THREE.Color('#062839')},
    surfaceMap:{value:surfaceMap},
  };
  // Band-limit displacement to the mesh spacing. Shading evaluates the same
  // waves per pixel, so sparse radial triangles cannot create reflected spokes.
  const surfaceField=`
    void wave(vec2 anchor,vec2 direction,float wavelength,float amplitude,float maxSlope,float spacing,inout vec3 p,inout vec3 dx,inout vec3 dz){
      vec2 d=normalize(direction);float lengthScale=wavelength*waveSize;
      float k=6.2831853/lengthScale;
      float resolved=1.-smoothstep(lengthScale/8.,lengthScale/3.,spacing);
      float a=min(amplitude*height,maxSlope/k)*resolved;
      float phase=k*dot(d,anchor)-sqrt(9.81*k)*time;
      float s=sin(phase),c=cos(phase),q=.18;
      p+=vec3(q*a*d.x*c,a*s,q*a*d.y*c);
      dx+=vec3(-q*a*k*d.x*d.x*s,a*k*d.x*c,-q*a*k*d.x*d.y*s);
      dz+=vec3(-q*a*k*d.x*d.y*s,a*k*d.y*c,-q*a*k*d.y*d.y*s);
    }
    void sampleSurface(vec2 anchor,vec2 location,float spacing,out vec3 p,out vec3 n){
      p=vec3(location.x,0.,location.y);
      vec3 dx=vec3(1.,0.,0.),dz=vec3(0.,0.,1.);
      wave(anchor,vec2(.18,1.),48.,.95,.28,spacing,p,dx,dz);
      wave(anchor,vec2(-.28,1.),29.,.40,.15,spacing,p,dx,dz);
      wave(anchor,vec2(.35,1.),17.,.16,.10,spacing,p,dx,dz);
      wave(anchor,vec2(-.4,1.),10.,.06,.06,spacing,p,dx,dz);
      p.y-=dot(p.xz,p.xz)*curvature/120000.;
      dx.y-=2.*dot(p.xz,dx.xz)*curvature/120000.;
      dz.y-=2.*dot(p.xz,dz.xz)*curvature/120000.;
      n=normalize(cross(dz,dx));
    }
  `;
  const material=new THREE.ShaderMaterial({name:'OceanSurface',uniforms,side:THREE.DoubleSide,
    vertexShader:`
      uniform float time,travel,curvature,height,waveSize;
      varying vec3 world;
      varying vec2 water;
      ${surfaceField}
      void main(){
        water=position.xz-vec2(0.,travel);
        float radius=length(position.xz);
        float radialStep=2.6*18000./${rings.toFixed(1)}*pow(max(radius/18000.,.000001),1.-1./2.6);
        float angularStep=radius*6.2831853/${sectors.toFixed(1)};
        vec3 p,unusedNormal;
        sampleSurface(water,position.xz,max(radialStep,angularStep),p,unusedNormal);
        world=p;
        gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);
      }`,
    fragmentShader:`
      uniform float time,travel,height,speed,wake,daylight,sunVisible,moonVisible,normalStrength,curvature,waveSize;
      uniform vec3 horizon,mid,near,deep,zenith,skyHorizon,sunColor,sunDirection,moonDirection;
      uniform sampler2D surfaceMap;
      varying vec3 world;
      varying vec2 water;
      ${surfaceField}
      vec4 turbulence(vec2 p){
        vec4 a=texture2D(surfaceMap,p/38.+vec2(time*.003,-time*.002));
        vec4 b=texture2D(surfaceMap,vec2(-p.y,p.x)/19.+vec2(-time*.0035,time*.0025));
        vec4 c=texture2D(surfaceMap,p/12.7+vec2(time*.004,time*.003));
        return a*.58+b*.32+c*.10;
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
        float pixelSpacing=max(length(dFdx(water)),length(dFdy(water)));
        vec3 surfacePosition,baseNormal;
        sampleSurface(water,water+vec2(0.,travel),pixelSpacing,surfacePosition,baseNormal);
        vec3 n=normalize(baseNormal+vec3(-ripple.x,0.,-ripple.y)*rippleGain*normalStrength);
        vec3 v=normalize(cameraPosition-world);
        vec3 body=mix(deep,near,clamp(.38+world.y*.16+tex.b*.22,0.,1.));
        body=mix(body,mid,smoothstep(100.,1200.,dist)*.32);
        body=mix(body,horizon,smoothstep(900.,7000.,dist)*.22);
        // Saturated blue body colour in daylight; retain the sunset/night palette.
        float blueDay=smoothstep(.65,1.,daylight);
        vec3 dayBlue=mix(vec3(.008,.045,.25),vec3(.015,.22,.48),clamp(.45+world.y*.12+tex.b*.2,0.,1.));
        body=mix(body,dayBlue,blueDay*.65);
        body*=mix(.12,1.,daylight)*(.65+.45*max(dot(n,normalize(sunDirection)),0.));
        // Forward scattering illuminates thin wave crests against the light.
        float scatter=pow(max(dot(v,-normalize(sunDirection)),0.),3.)*max(world.y,0.);
        body+=near*scatter*sunVisible*.35;
        vec3 color=body; // Only the sun/moon specular highlights below reflect on the sea.
        float variance=dot(dFdx(n),dFdx(n))+dot(dFdy(n),dFdy(n));
        float roughness=clamp(.19+sqrt(variance)*.35,.19,.42);
        color+=sunColor*highlight(n,v,normalize(sunDirection),roughness)*sunVisible*2.6;
        color+=vec3(.64,.76,1.)*highlight(n,v,normalize(moonDirection),roughness)*moonVisible*1.4;
        // Only the stern (+Z beyond 41m) produces foam. No hull-side or crest foam.
        float aft=max(world.z-41.,0.);
        float width=3.5+aft*.085;
        float bend=(tex.b-.5)*1.5*(1.-exp(-aft*.03));
        float core=exp(-pow((world.x+bend)/width,2.));
        float sternMask=smoothstep(41.,47.,world.z)*(1.-smoothstep(80.,240.,aft));
        vec4 fine=texture2D(surfaceMap,water/5.7+vec2(time*.006,-time*.004));
        float bubbles=smoothstep(.4,.68,fine.b*.65+tex.b*.35);
        float lace=smoothstep(.58,.86,fine.a);
        float propulsion=clamp(speed/8.,0.,1.)*wake;
        float foam=clamp(core*sternMask*(.08+bubbles*.55+lace*.2)*propulsion,0.,.7);
        vec3 foamColor=mix(vec3(.07,.12,.2),vec3(.78,.86,.85),daylight);
        foamColor=mix(foamColor,skyHorizon,.18);
        color=mix(color,foamColor,foam);
        // Keep foreground and mid-distance texture; blend before the curved tangent.
        float haze=1.-exp(-pow(dist/7600.,1.45));
        color=mix(color,skyHorizon,haze);
        gl_FragColor=vec4(color,1.);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`});
  const mesh=new THREE.Mesh(geometry,material);mesh.frustumCulled=false;
  return {mesh,uniforms};
}
