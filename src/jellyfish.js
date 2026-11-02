import * as THREE from 'three';

// Surface-projected glow and silhouettes: the ocean itself remains opaque.
export function createJellyfish(scene){
  const group=new THREE.Group();group.name='underwater-jellyfish-glow';scene.add(group);
  const geometry=new THREE.PlaneGeometry(5.2,5.2);
  const material=new THREE.ShaderMaterial({transparent:true,depthWrite:false,depthTest:true,side:THREE.DoubleSide,blending:THREE.AdditiveBlending,uniforms:{time:{value:0},visibility:{value:1}},vertexShader:`varying vec2 uv0;void main(){uv0=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:`varying vec2 uv0;uniform float time;uniform float visibility;void main(){vec2 p=(uv0-.5)*2.;float r=length(p);float glow=exp(-r*r*5.);float bell=1.-smoothstep(.3,.46,length(vec2(p.x,p.y*.8)));float tentacles=0.;for(int i=0;i<5;i++){float x=(float(i)-2.)*.10+.03*sin(time*1.2+float(i)+p.y*9.);float strand=(1.-smoothstep(.015,.04,abs(p.x-x)))*(1.-smoothstep(-.15,.0,p.y))*smoothstep(-.9,-.65,p.y);tentacles+=strand;}float alpha=(glow*.35+bell*.24+tentacles*.16)*visibility;gl_FragColor=vec4(.17,.85,.9,alpha);}`});
  const positions=[[-20,-30],[22,-25],[-24,0],[22,16],[-18,35]];
  const items=positions.map(([x,z],i)=>{const mesh=new THREE.Mesh(geometry,material);mesh.rotation.x=-Math.PI/2;mesh.position.set(x,1.7,z);mesh.scale.setScalar(.85+(i%3)*.13);mesh.renderOrder=2;group.add(mesh);return {mesh,x,z,phase:i*1.7};});
  let time=0;
  return {group,update(dt,hour){time+=dt;material.uniforms.time.value=time;const night=hour>=19||hour<=5?1:hour>17?(hour-17)/2:(7-hour)/2;material.uniforms.visibility.value=THREE.MathUtils.clamp(night,0,1);for(const item of items){item.mesh.position.x=item.x+Math.sin(time*.16+item.phase)*2;item.mesh.position.z=item.z+Math.cos(time*.13+item.phase)*2;item.mesh.position.y=1.7+Math.sin(time*.9+item.phase)*.12;}}};
}
