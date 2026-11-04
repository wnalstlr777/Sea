// Subtle vertical rainfall, rendered without lens droplets or screen smears.
export function createRain(){
  const canvas=document.createElement('canvas');
  canvas.className='sea-rain-overlay';canvas.setAttribute('aria-hidden','true');
  document.querySelector('#app').append(canvas);
  const ctx=canvas.getContext('2d');
  // One third of the original 155 streaks; varied depth for a softer result.
  const streaks=Array.from({length:52},()=>({
    x:Math.random(),y:Math.random(),speed:.7+Math.random()*.8,
    length:9+Math.random()*13,depth:Math.random()
  }));
  let w=0,h=0,intensity=0;
  function resize(){
    const dpr=Math.min(devicePixelRatio||1,1.5);
    w=innerWidth;h=innerHeight;
    canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr);
    ctx.setTransform(dpr,0,0,dpr,0,0);
  }
  resize();addEventListener('resize',resize);
  function update(dt,target){
    intensity+=(Math.max(0,Math.min(1,target))-intensity)*(1-Math.exp(-Math.min(dt,.1)*1.8));
    canvas.style.display=intensity<.008?'none':'block';
    if(intensity<.008)return;
    ctx.clearRect(0,0,w,h);
    const count=Math.floor(streaks.length*intensity);
    for(let i=0;i<count;i++){
      const p=streaks[i];
      p.y+=dt*p.speed*(.7+intensity);
      if(p.y>1.06){p.y=-.06;p.x=Math.random();}
      const x=p.x*w,y=p.y*h;
      const length=p.length*(.65+p.depth*.65);
      const alpha=(.09+p.depth*.13)*intensity;
      const gradient=ctx.createLinearGradient(x,y,x,y+length);
      gradient.addColorStop(0,'rgba(215,239,250,0)');
      gradient.addColorStop(.4,`rgba(215,239,250,${alpha})`);
      gradient.addColorStop(1,'rgba(215,239,250,0)');
      ctx.strokeStyle=gradient;ctx.lineWidth=.55+p.depth*.5;
      ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x,y+length);ctx.stroke();
    }
  }
  return {update};
}
