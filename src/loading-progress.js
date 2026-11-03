import * as THREE from 'three';
// Tracks real Three.js loader completions. Final 100% waits for the game's readiness gate.
const manager=THREE.DefaultLoadingManager;
let total=0,loaded=0,complete=false;
const previousStart=manager.onStart,previousProgress=manager.onProgress,previousLoad=manager.onLoad;
function show(){
 const cover=document.querySelector('#sea-loading');
 if(!cover)return;
 const bar=cover.querySelector('.sea-loading-progress');
 if(!bar)return;
 const progress=complete?100:total?Math.min(95,Math.round(loaded/total*95)):0;
 bar.style.width=progress+'%';
 bar.setAttribute('role','progressbar');bar.setAttribute('aria-valuemin','0');bar.setAttribute('aria-valuemax','100');bar.setAttribute('aria-valuenow',String(progress));
}
manager.onStart=(url,itemsLoaded,itemsTotal)=>{total=Math.max(total,itemsTotal);loaded=Math.max(loaded,itemsLoaded);previousStart?.(url,itemsLoaded,itemsTotal);show()};
manager.onProgress=(url,itemsLoaded,itemsTotal)=>{total=Math.max(total,itemsTotal);loaded=Math.max(loaded,itemsLoaded);previousProgress?.(url,itemsLoaded,itemsTotal);show()};
manager.onLoad=()=>{previousLoad?.();show()};
const observer=new MutationObserver(()=>{
 const cover=document.querySelector('#sea-loading');
 if(!cover)return;
 if(cover.classList.contains('sea-loading-done')){complete=true;show();observer.disconnect()}
 else show();
});
observer.observe(document.documentElement,{childList:true,subtree:true,attributes:true,attributeFilter:['class']});
