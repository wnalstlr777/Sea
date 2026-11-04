// CPU counterpart of OceanSurface.sampleSurface, including mesh band limiting,
// ship travel, horizontal Gerstner displacement and curved horizon.
const waves=[[.18,1,48,.95,.28],[-.28,1,29,.40,.15],[.35,1,17,.16,.10],[-.4,1,10,.06,.06]];
const smooth=(a,b,x)=>{const t=Math.max(0,Math.min(1,(x-a)/(b-a)));return t*t*(3-2*t);};
export function oceanHeightAt(uniforms,x,z,rings=240,sectors=320){
  const time=uniforms.time.value,travel=uniforms.travel.value,curvature=uniforms.curvature.value;
  const waveSize=Math.max(.0001,uniforms.waveSize.value),height=uniforms.height.value;
  let ax=x,az=z,y=0;
  for(let iteration=0;iteration<3;iteration++){
    const radius=Math.hypot(ax,az);
    const spacing=Math.max(2.6*18000/rings*Math.pow(Math.max(radius/18000,.000001),1-1/2.6),radius*Math.PI*2/sectors);
    let dx=0,dz=0;y=0;
    for(const [vx,vz,length,amplitude,slope] of waves){
      const norm=Math.hypot(vx,vz),nx=vx/norm,nz=vz/norm,L=length*waveSize,k=2*Math.PI/L;
      const a=Math.min(amplitude*height,slope/k)*(1-smooth(L/8,L/3,spacing));
      const phase=k*(nx*ax+nz*(az-travel))-Math.sqrt(9.81*k)*time;
      y+=a*Math.sin(phase);dx+=.18*a*nx*Math.cos(phase);dz+=.18*a*nz*Math.cos(phase);
    }
    ax=x-dx;az=z-dz;
  }
  return y-(x*x+z*z)*curvature/120000;
}
