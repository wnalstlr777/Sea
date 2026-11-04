// Lightweight screen-space rain: distant streaks plus slow lens droplets.
export function createRain(){
  const canvas=document.createElement('canvas');
  canvas.className='sea-rain-overlay';canvas.setAttribute('aria-hidden','true');
  document.querySelector('#app').append(canvas);
  const ctx=canvas.getContext('2d');
  const streaks=Array.from({length:155},()=>({x:Math.random(),y:Math.random(),speed:.65+Math.random()*.95,length:8+Math.random()*19}));
  const drops=Array.from({length:24},()=>({x:Math.random(),y:Math.random(),speed:.025+Math.random()*.045,r:1.4+Math.random()*2.6}));
  let w=0,h=0,intensity=0;
  function resize(){const dpr=Math.min(devicePixelRatio||1,1.5);w=innerWidth;h=innerHeight;canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);}
  resize();addEventListener('resize',resize);
  function update(dt,target){
    intensity+=(Math.max(0,Math.min(1,target))-intensity)*(1-Math.exp(-Math.min(dt,.1)*1.8));
    canvas.style.display=intensity<.008?'none':'block';
    if(intensity<.008)return;
    ctx.clearRect(0,0,w,h);
    const count=Math.floor(streaks.length*intensity);
    ctx.lineWidth=1;ctx.strokeStyle='rgba(205,232,244,.32)';ctx.beginPath();
    for(let i=0;i<count;i++){
      const p=streaks[i];p.y+=dt*p.speed*(.6+intensity);p.x-=dt*.11;
      if(p.y>1.1){p.y=-.1;p.x=Math.random();}if(p.x<-.1)p.x=1.1;
      const x=p.x*w,y=p.y*h;ctx.moveTo(x,y);ctx.lineTo(x-3-intensity*5,y+p.length*(.7+intensity));
    }
    ctx.stroke();
    // Droplets cling to the virtual lens and slowly trail down the screen.
    const wetCount=Math.floor(drops.length*Math.max(0,(intensity-.2)/.8));
    for(let i=0;i<wetCount;i++){
      const p=drops[i];p.y+=dt*p.speed*(.5+intensity);
      if(p.y>1.05){p.y=-.08;p.x=Math.random();}
      const x=p.x*w,y=p.y*h,r=p.r;
      const glow=ctx.createRadialGradient(x-r*.4,y-r*.5,.2,x,y,r*2.4);
      glow.addColorStop(0,'rgba(236,250,255,.30)');glow.addColorStop(.4,'rgba(195,227,240,.10)');glow.addColorStop(1,'rgba(195,227,240,0)');
      ctx.fillStyle=glow;ctx.beginPath();ctx.ellipse(x,y,r*2,r*3.1,0,0,Math.PI*2);ctx.fill();
      ctx.strokeStyle='rgba(220,243,251,.24)';ctx.lineWidth=Math.max(.7,r*.32);
      ctx.beginPath();ctx.moveTo(x,y-r);ctx.quadraticCurveTo(x-r*.5,y+r*2,x-r*.7,y+r*5);ctx.stroke();
    }
  }
  return {update};
}
