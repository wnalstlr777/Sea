// A low, layered ship horn, synthesized locally; no sound-file downloads.
// Browsers require a real user gesture before any audio can start.
export function createShipHorn(button){
  let context=null,enabled=true,remaining=3;
  const interval=45;
  function label(){button.textContent=!enabled?'뱃고동 · 꺼짐':context?.state==='running'?'뱃고동 · 45초 간격':'뱃고동 · 화면을 눌러 소리 시작';button.setAttribute('aria-pressed',String(enabled));}
  function unlock(){
    if(!enabled)return;
    const Audio=window.AudioContext||window.webkitAudioContext;
    if(!Audio)return;
    if(!context)context=new Audio();
    if(context.state==='suspended')context.resume().then(label).catch(()=>{});
    label();
  }
  addEventListener('pointerdown',unlock);
  addEventListener('keydown',event=>{if(!event.repeat)unlock();});
  button.addEventListener('click',()=>{enabled=!enabled;if(enabled){unlock();remaining=3;}else if(context?.state==='running'){context.suspend().catch(()=>{});}label();});
  function play(){
    const now=context.currentTime;
    const envelope=context.createGain();envelope.gain.setValueAtTime(0,now);
    envelope.gain.linearRampToValueAtTime(.17,now+.4);
    envelope.gain.setValueAtTime(.17,now+2.2);
    envelope.gain.exponentialRampToValueAtTime(.0001,now+3.5);
    const filter=context.createBiquadFilter();filter.type='lowpass';filter.frequency.value=750;
    envelope.connect(filter);filter.connect(context.destination);
    for(const [frequency,gain] of [[82.4,.65],[110,.45],[164.8,.28],[220,.14]]){
      const oscillator=context.createOscillator(),level=context.createGain();oscillator.type='sawtooth';
      oscillator.frequency.setValueAtTime(frequency*.985,now);oscillator.frequency.linearRampToValueAtTime(frequency,now+.5);
      level.gain.value=gain;oscillator.connect(level);level.connect(envelope);
      oscillator.start(now);oscillator.stop(now+3.6);
      oscillator.onended=()=>{oscillator.disconnect();level.disconnect();};
    }
    // Disconnect the envelope after the last voice to release the audio graph.
    setTimeout(()=>{envelope.disconnect();filter.disconnect();},3800);
  }
  function update(dt){
    if(!enabled||context?.state!=='running'||document.hidden)return;
    remaining-=Math.min(dt,1);
    if(remaining<=0){play();remaining=interval;}
  }
  label();return {update};
}
