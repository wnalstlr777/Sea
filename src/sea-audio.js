// Original procedural jazz and sea ambience. No third-party recordings or melodies.
export function createSeaAudio(button){
  let context,musicBus,effectsBus,noiseBuffer,waves,enabled=false,nextNote=0,step=0,scheduler=null;
  const voices=new Set();
  function init(){
    if(context)return;
    const Audio=window.AudioContext||window.webkitAudioContext;if(!Audio)return;
    context=new Audio();musicBus=context.createGain();musicBus.gain.value=0;musicBus.connect(context.destination);
    effectsBus=context.createGain();effectsBus.gain.value=.35;effectsBus.connect(context.destination);
    noiseBuffer=context.createBuffer(1,context.sampleRate*8,context.sampleRate);
    const samples=noiseBuffer.getChannelData(0);let brown=0;
    for(let i=0;i<samples.length;i++){brown=(brown+(Math.random()*2-1)*.025)/1.025;samples[i]=brown*4;}
    waves=context.createBufferSource();waves.buffer=noiseBuffer;waves.loop=true;
    const filter=context.createBiquadFilter();filter.type='lowpass';filter.frequency.value=1400;
    const waveGain=context.createGain();waveGain.gain.value=.19;
    const swell=context.createOscillator(),depth=context.createGain();swell.frequency.value=.09;depth.gain.value=.12;
    swell.connect(depth);depth.connect(waveGain.gain);waves.connect(filter);filter.connect(waveGain);waveGain.connect(musicBus);
    waves.start();swell.start();
  }
  function unlock(){init();if(context?.state==='suspended')context.resume().catch(()=>{});}
  addEventListener('pointerdown',unlock);addEventListener('keydown',e=>{if(!e.repeat)unlock();});
  function tone(frequency,at,duration,volume,bus,type='sine',endFrequency=frequency){
    if(!context)return;
    const oscillator=context.createOscillator(),gain=context.createGain();oscillator.type=type;
    oscillator.frequency.setValueAtTime(frequency,at);oscillator.frequency.exponentialRampToValueAtTime(endFrequency,at+duration*.8);
    gain.gain.setValueAtTime(.0001,at);gain.gain.exponentialRampToValueAtTime(volume,at+.025);
    gain.gain.exponentialRampToValueAtTime(.0001,at+duration);
    oscillator.connect(gain);gain.connect(bus);oscillator.start(at);oscillator.stop(at+duration+.02);
    if(bus===musicBus)voices.add(oscillator);
    oscillator.onended=()=>{voices.delete(oscillator);oscillator.disconnect();gain.disconnect();};
  }
  function hiss(at,duration,volume,bus,cutoff){
    const source=context.createBufferSource(),filter=context.createBiquadFilter(),gain=context.createGain();
    source.buffer=noiseBuffer;filter.type='highpass';filter.frequency.value=cutoff;
    gain.gain.setValueAtTime(volume,at);gain.gain.exponentialRampToValueAtTime(.0001,at+duration);
    source.connect(filter);filter.connect(gain);gain.connect(bus);source.start(at);source.stop(at+duration);
    if(bus===musicBus)voices.add(source);
    source.onended=()=>{voices.delete(source);source.disconnect();filter.disconnect();gain.disconnect();};
  }
  const hz=midi=>440*2**((midi-69)/12);
  const chords=[[60,64,67,71,74],[57,60,64,67,71],[50,53,57,60,64],[55,59,62,65,69]];
  const melody=[0,2,4,3,1,2,0,4,3,2,4,1,0,3,2,1];
  function schedule(at,index){
    const chord=chords[Math.floor(index/16)%4],beat=index%16;
    // Swing eighths, walking bass, soft electric-piano voicings and brushed noise.
    if(beat%2===0)tone(hz(chord[0]-24+[0,7,12,7][Math.floor(beat/2)%4]),at,.48,.25,musicBus,'triangle');
    if([0,5,10,14].includes(beat))for(const note of chord.slice(1)){
      tone(hz(note),at,1.25,.075,musicBus);tone(hz(note)*2,at,.38,.015,musicBus);
    }
    if(beat%3!==1)tone(hz(chord[melody[index%16]]+12),at,.38,.085,musicBus);
    hiss(at,.12,.065,musicBus,3500);
  }
  button.addEventListener('click',()=>{
    unlock();if(!context)return;enabled=!enabled;
    if(enabled){step=0;nextNote=context.currentTime+.08;scheduler=setInterval(update,200);}
    else{clearInterval(scheduler);scheduler=null;for(const voice of voices){try{voice.stop();}catch{}}}
    musicBus.gain.setTargetAtTime(enabled?.38:0,context.currentTime,.2);
    button.textContent=enabled?'재즈 + 파도 · 끄기':'재즈 + 파도 · 켜기';button.setAttribute('aria-pressed',String(enabled));
  });
  function update(){
    if(!context)return;
    if(document.hidden){musicBus.gain.setTargetAtTime(0,context.currentTime,.1);nextNote=context.currentTime+.1;return;}
    if(!enabled||context.state!=='running')return;
    musicBus.gain.setTargetAtTime(.38,context.currentTime,.2);
    if(nextNote<context.currentTime)nextNote=context.currentTime+.05;
    while(nextNote<context.currentTime+1.5){schedule(nextNote,step);nextNote+=(step++%2===0?2:1)*(60/84/3);}
  }
  function effect(kind){
    if(context?.state!=='running'||document.hidden)return false;
    const now=context.currentTime;
    if(kind==='seagull')for(let i=0;i<3;i++)tone(1250+i*170,now+i*.22,.19,.15,effectsBus,'triangle',820+i*80);
    if(kind==='dolphin')for(let i=0;i<4;i++)tone(1700+i*350,now+i*.12,.12,.08,effectsBus,'sine',3300+i*260);
    if(kind==='whale'){
      tone(95,now,2.8,.30,effectsBus,'sine',160);tone(190,now+.2,2.5,.08,effectsBus,'sine',130);
      hiss(now,.65,.24,effectsBus,250);
    }
    if(kind==='splash')hiss(now,.8,.40,effectsBus,650);
    return true;
  }
  document.addEventListener('visibilitychange',()=>{if(context&&document.hidden)musicBus.gain.setTargetAtTime(0,context.currentTime,.1);});
  return {update,seagull:()=>effect('seagull'),dolphin:()=>effect('dolphin'),whale:()=>effect('whale'),splash:()=>effect('splash')};
}
