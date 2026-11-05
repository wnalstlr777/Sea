import * as THREE from 'three';

// Local-only emote prototype. No multiplayer packets are sent yet.
export function createEmoteWheel({scene,camera,renderer,controls,player,isAvailable,onChoose=()=>{}}){
  const icons=['❤️','👋','😂','👍','🎉','😢','😮','👏'];
  const canvas=renderer.domElement;
  const raycaster=new THREE.Raycaster(),pointer=new THREE.Vector2(),screen=new THREE.Vector3();
  const wheel=document.createElement('div');wheel.id='sea-emote-wheel';
  wheel.setAttribute('aria-label','이모지 선택');
  const bubble=document.createElement('div');bubble.id='sea-emote-bubble';bubble.setAttribute('aria-live','polite');
  document.body.append(wheel,bubble);
  const style=document.createElement('style');style.textContent=`
    #sea-emote-wheel{position:fixed;z-index:100020;width:236px;height:236px;display:none;pointer-events:none;transform:translate(-50%,-50%)}
    #sea-emote-wheel.open{display:block}
    #sea-emote-wheel button{position:absolute;left:50%;top:50%;width:49px;height:49px;transform:translate(-50%,-50%) translate(var(--dx),var(--dy));border:1px solid #a2dbe5a8;border-radius:50%;background:#0b3549e8;box-shadow:0 3px 14px #001b2a99;color:white;font-size:25px;cursor:pointer;pointer-events:auto;touch-action:manipulation;transition:background .12s,scale .12s}
    #sea-emote-wheel button:hover,#sea-emote-wheel button:focus-visible{background:#26738a;scale:1.12}
    #sea-emote-bubble{position:fixed;z-index:100010;display:none;pointer-events:none;font-size:38px;line-height:1;transform:translate(-50%,-100%);filter:drop-shadow(0 3px 5px #00192399);animation:sea-emote-pop .22s ease-out both}
    @keyframes sea-emote-pop{from{opacity:0;scale:.45}to{opacity:1;scale:1}}
    @media(max-width:600px){#sea-emote-wheel{width:210px;height:210px}#sea-emote-wheel button{width:46px;height:46px;font-size:24px}}
  `;document.head.append(style);
  let open=false,activeTarget=null,held=null,holdTimer=null,bubbleUntil=0,selected=null;
  function project(object,height){
    // Use the animated head joint, not the whole avatar bounding box (which
    // can include contact meshes and shifts dramatically when swimming).
    const head=object.getObjectByName('sea-avatar-head');
    if(head){head.getWorldPosition(screen);screen.y+=height===3.15?.8:.45;}
    else{object.getWorldPosition(screen);screen.y+=height;}
    screen.project(camera);
    const rect=canvas.getBoundingClientRect();
    return {x:rect.left+(screen.x+1)*rect.width/2,y:rect.top+(1-screen.y)*rect.height/2,visible:screen.z>-1&&screen.z<1};
  }
  function pick(x,y){
    if(!isAvailable())return null;
    const rect=canvas.getBoundingClientRect();
    pointer.set((x-rect.left)/rect.width*2-1,-(y-rect.top)/rect.height*2+1);
    raycaster.setFromCamera(pointer,camera);
    const candidates=[player,...scene.children.filter(o=>o.name?.startsWith('remote-'))];
    for(const root of candidates){if(raycaster.intersectObject(root,true).some(hit=>hit.object.isMesh&&hit.object.visible))return root;}
    return null;
  }
  function close(){open=false;activeTarget=null;wheel.style.visibility='visible';wheel.classList.remove('open');}
  function show(target){
    if(!isAvailable())return;
    const p=project(target,1.7);if(!p.visible)return;
    const margin=118;
    wheel.style.left=`${Math.max(margin,Math.min(innerWidth-margin,p.x))}px`;
    wheel.style.top=`${Math.max(margin,Math.min(innerHeight-margin,p.y))}px`;
    activeTarget=target;open=true;wheel.classList.add('open');
  }
  function choose(icon){
    close();selected=icon;bubble.textContent=icon;bubble.style.display='block';
    bubble.style.animation='none';void bubble.offsetWidth;bubble.style.animation='';
    bubbleUntil=performance.now()+3000;onChoose(icon);
  }
  icons.forEach((icon,i)=>{
    const angle=-Math.PI/2+i*Math.PI/4;
    const button=document.createElement('button');button.type='button';button.textContent=icon;
    button.setAttribute('aria-label',`${icon} 표현`);
    button.style.setProperty('--dx',`${Math.cos(angle)*88}px`);
    button.style.setProperty('--dy',`${Math.sin(angle)*88}px`);
    button.addEventListener('pointerdown',e=>e.stopPropagation());
    button.addEventListener('click',e=>{e.stopPropagation();choose(icon);});
    wheel.append(button);
  });
  canvas.addEventListener('contextmenu',e=>{
    const target=pick(e.clientX,e.clientY);
    if(!target)return;
    e.preventDefault();show(target);
  });
  canvas.addEventListener('pointerdown',e=>{
    if(e.pointerType==='mouse'||e.button!==0)return;
    const target=pick(e.clientX,e.clientY);if(!target)return;
    held={id:e.pointerId,x:e.clientX,y:e.clientY,target};
    clearTimeout(holdTimer);
    holdTimer=setTimeout(()=>{
      if(!held)return;
      show(held.target);held=null;
      // Do not let an active orbit drag continue after a long press.
      controls.enabled=false;requestAnimationFrame(()=>{controls.enabled=true;});
    },500);
  });
  canvas.addEventListener('pointermove',e=>{
    if(held?.id===e.pointerId&&Math.hypot(e.clientX-held.x,e.clientY-held.y)>12){clearTimeout(holdTimer);held=null;}
  });
  for(const event of ['pointerup','pointercancel','pointerleave'])canvas.addEventListener(event,e=>{
    if(held?.id===e.pointerId){clearTimeout(holdTimer);held=null;}
  });
  document.addEventListener('pointerdown',e=>{if(open&&!wheel.contains(e.target)&&e.target!==canvas)close();});
  document.addEventListener('keydown',e=>{if(e.key==='Escape')close();});
  function update(){
    if(open&&!isAvailable())close();
    if(open&&activeTarget){
      if(!activeTarget.parent){close();}
      else{
        const p=project(activeTarget,1.7);
        if(!p.visible){wheel.style.visibility='hidden';}
        else{
          wheel.style.visibility='visible';
          const margin=118;
          wheel.style.left=`${Math.max(margin,Math.min(innerWidth-margin,p.x))}px`;
          wheel.style.top=`${Math.max(margin,Math.min(innerHeight-margin,p.y))}px`;
        }
      }
    }
    if(!selected)return;
    if(performance.now()>bubbleUntil){bubble.style.display='none';selected=null;return;}
    const p=project(player,3.15);
    bubble.style.display=p.visible?'block':'none';
    bubble.style.left=`${p.x}px`;bubble.style.top=`${p.y}px`;
  }
  return {update};
}
