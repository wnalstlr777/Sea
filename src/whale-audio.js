import {Vector3,Quaternion} from 'three';

// Original noise synthesis only: no recordings, paid services or tonal/UI oscillators.
// Reuse the ambience's brown water noise; cache broadband air noise once per context.
export function createWhaleAudio(context,bus,{waterNoise,isAudible=()=>true}={}){
  const air=context.createBuffer(1,Math.ceil(context.sampleRate*3),context.sampleRate);
  const samples=air.getChannelData(0);
  for(let i=0;i<samples.length;i++)samples[i]=Math.random()*2-1;
  const voices=new Set(),listenerPosition=new Vector3(),forward=new Vector3(),up=new Vector3(),rotation=new Quaternion();
  const clamp=(n,a,b)=>Math.max(a,Math.min(b,n));
  const vary=(a,b)=>a+Math.random()*(b-a);
  function position(node,p,smooth=false){
    if(node.positionX){
      for(const [key,value] of [['positionX',p.x],['positionY',p.y],['positionZ',p.z]]){
        if(smooth)node[key].setTargetAtTime(value,context.currentTime,.025);
        else node[key].setValueAtTime(value,context.currentTime);
      }
    }else node.setPosition(p.x,p.y,p.z);
  }
  function listener(camera){
    if(!camera)return;
    camera.getWorldPosition(listenerPosition);camera.getWorldDirection(forward);
    up.set(0,1,0).applyQuaternion(camera.getWorldQuaternion(rotation));
    const target=context.listener;position(target,listenerPosition);
    if(target.forwardX){
      for(const [key,value] of [['forwardX',forward.x],['forwardY',forward.y],['forwardZ',forward.z],['upX',up.x],['upY',up.y],['upZ',up.z]])target[key].setValueAtTime(value,context.currentTime);
    }else target.setOrientation(forward.x,forward.y,forward.z,up.x,up.y,up.z);
  }
  function cleanup(voice){
    if(!voices.delete(voice))return;
    for(const node of voice.nodes)node.disconnect();
  }
  function stop(voice){
    for(const source of voice.sources){try{source.stop();}catch{}}
    cleanup(voice);
  }
  function play(name,{position:p,camera,visible=true,speed=2}={}){
    if(!isAudible()||!visible||!p||![p.x,p.y,p.z].every(Number.isFinite)||!camera)return false;
    listener(camera);
    if(listenerPosition.distanceToSquared(p)>500*500)return false;
    if(!['Whale_Splash','Whale_Blow','Whale_Dive'].includes(name))return false;
    if(voices.size>=4)stop(voices.values().next().value);
    const panner=context.createPanner(),gain=context.createGain();
    panner.panningModel='HRTF';panner.distanceModel='inverse';panner.refDistance=70;panner.maxDistance=500;panner.rolloffFactor=1.35;
    position(panner,p);gain.connect(panner);panner.connect(bus);
    const voice={name,panner,gain,sources:[],nodes:[panner,gain],remaining:0};voices.add(voice);
    const now=context.currentTime,variation=vary(.94,1.06);
    const impact=name==='Whale_Splash'?clamp(.65+Math.abs(speed)*.14,.7,1.35):1;
    function layer(buffer,type,from,to,volume,duration,delay=0,attack=.025){
      const source=context.createBufferSource(),filter=context.createBiquadFilter(),envelope=context.createGain();
      source.buffer=buffer;source.playbackRate.value=vary(.965,1.035);
      filter.type=type;filter.Q.value=.55;
      const start=now+delay;
      filter.frequency.setValueAtTime(from,start);filter.frequency.exponentialRampToValueAtTime(to,start+duration);
      const level=volume*impact*variation;
      envelope.gain.setValueAtTime(.0001,start);envelope.gain.linearRampToValueAtTime(level,start+attack);
      envelope.gain.exponentialRampToValueAtTime(level*.38,start+Math.min(.20,duration*.4));
      envelope.gain.exponentialRampToValueAtTime(.0001,start+duration);
      source.connect(filter);filter.connect(envelope);envelope.connect(gain);
      voice.nodes.push(source,filter,envelope);voice.sources.push(source);voice.remaining++;
      source.onended=()=>{if(--voice.remaining===0)cleanup(voice);};
      source.start(start,vary(0,Math.max(0,buffer.duration-duration*1.04-.05)));source.stop(start+duration+.03);
    }
    if(name==='Whale_Splash'){
      layer(waterNoise??air,'lowpass',190,80,.68,.95);
      layer(air,'bandpass',1100,420,.37,1.25,.02);
      layer(air,'highpass',3400,2100,.09,1.55,.06,.045);
    }else if(name==='Whale_Blow'){
      layer(air,'bandpass',2700,950,.48,1.55,0,.016);
      layer(air,'highpass',1500,950,.18,.32,0,.012);
      layer(waterNoise??air,'bandpass',680,310,.24,1.05,.08,.055);
    }else{
      layer(waterNoise??air,'lowpass',420,150,.35,1.2,0,.08);
      layer(air,'bandpass',850,320,.17,1.4,.04,.10);
    }
    return true;
  }
  function update({camera,position:p,visible=true}={}){
    if(!voices.size)return;
    listener(camera);
    if(!isAudible()){stopAll();return;}
    for(const voice of voices){
      if(voice.name==='Whale_Blow'&&p)position(voice.panner,p,true);
      // Native distance attenuation handles listener movement; suppress offscreen tails too.
      voice.gain.gain.setTargetAtTime(visible?1:0,context.currentTime,.08);
    }
  }
  function stopAll(){for(const voice of [...voices])stop(voice);}
  return {play,update,stopAll,get activeCount(){return voices.size;}};
}
