// Shared world coordinates and presentation data; inventory and time are server-owned.
export const PENS=[{id:'A',x:-40,z:-30},{id:'B',x:40,z:-42}];
export const SCHOOLS=[{id:'s1',x:-36,z:-48},{id:'s2',x:-44,z:-10},{id:'s3',x:36,z:-60},{id:'s4',x:44,z:-22}];
export const TUBE_COLORS=['#9caf9c','#ccabb3','#a8c3d6','#b6afd0','#cabea8','#a6cfbe'];
export const FISH=[
 {id:'oarfish',name:'산갈치',rarity:'전설',weight:50,color:'#d6b3c3'},
 {id:'coelacanth',name:'실러캔스',rarity:'전설',weight:50,color:'#769da3'},
 {id:'sunfish',name:'개복치',rarity:'영웅',weight:200,color:'#9db4c2'},
 {id:'mandarin',name:'만다린피시',rarity:'영웅',weight:300,color:'#79b8a4'},
 {id:'lionfish',name:'쏠배감펭',rarity:'희귀',weight:600,color:'#c9a090'},
 {id:'blue-tang',name:'블루탱',rarity:'희귀',weight:800,color:'#7ea9d3'},
 {id:'yellow-tang',name:'옐로탱',rarity:'고급',weight:1200,color:'#d8c879'},
 {id:'clownfish',name:'흰동가리',rarity:'고급',weight:1500,color:'#d8aa83'},
 {id:'sardine',name:'정어리',rarity:'일반',weight:2300,color:'#aac1c9'},
 {id:'anchovy',name:'멸치',rarity:'일반',weight:3000,color:'#b6ccc5'}
];
export const GROW_MS=12*3600000,FEED_MS=3*3600000,INACTIVE_MS=48*3600000,COLLECT_MS=2000,RESPAWN_MS=30000;
export function schoolPosition(school,now){const i=SCHOOLS.indexOf(school);return {x:school.x+Math.sin(now/12000+i*2)*.8,z:school.z+Math.cos(now/15000+i)*.8};}
export function tubeColorFor(id){let n=0;for(const c of id)n=(Math.imul(n,31)+c.charCodeAt(0))|0;return (n>>>0)%TUBE_COLORS.length;}
