const STORAGE_KEY='sea.player.v1';
const valid=value=>value&&typeof value.playerId==='string'&&/^[a-f0-9-]{36}$/.test(value.playerId)&&typeof value.token==='string'&&/^[a-f0-9]{64}$/.test(value.token);

// Identity survives reloads; the visit session only survives automatic reconnects.
// New tabs/reloads start a new visit and never submit counters or play time.
export function createPlayerRecordsClient(socketUrl){
  let identity=null,sessionId=null,pending=null;
  const endpoint=new URL(socketUrl);endpoint.protocol=endpoint.protocol==='wss:'?'https:':'http:';endpoint.pathname='/identity';endpoint.search='';endpoint.hash='';
  async function load(){
    let saved=null;try{saved=JSON.parse(localStorage.getItem(STORAGE_KEY));}catch{}
    if(valid(saved))identity=saved;
    try{
      const response=await fetch(endpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(identity||{}),signal:AbortSignal.timeout(2500),cache:'no-store'});
      if(response.ok){const result=await response.json();if(valid(result)){identity={playerId:result.playerId,token:result.token};try{localStorage.setItem(STORAGE_KEY,JSON.stringify(identity));}catch{}}}
    }catch{} // Storage/records outages must not prevent multiplayer.
  }
  return {
    async prepare(){
      if(!pending)pending=globalThis.navigator?.locks?navigator.locks.request('sea.player.identity',load):load();
      await pending;
    },
    protocols(){return ['sea-v2',...(identity?[`sea-identity.${identity.token}`]:[]),...(sessionId?[`sea-session.${sessionId}`]:[])];},
    welcome(packet){if(typeof packet.sessionId==='string'&&/^[a-f0-9-]{36}$/.test(packet.sessionId))sessionId=packet.sessionId;}
  };
}
