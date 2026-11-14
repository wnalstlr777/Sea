(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const vl="180",ms={ROTATE:0,DOLLY:1,PAN:2},hs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},jh=0,Zl=1,Yh=2,Fu=1,Ou=2,$n=3,ti=0,Qt=1,wt=2,gi=0,gs=1,ni=2,Jl=3,Ql=4,Kh=5,Ui=100,$h=101,Zh=102,Jh=103,Qh=104,ed=200,td=201,nd=202,id=203,ba=204,wa=205,sd=206,rd=207,od=208,ad=209,ld=210,cd=211,ud=212,hd=213,dd=214,Ea=0,Ta=1,Aa=2,ys=3,Ra=4,Ca=5,Pa=6,Ia=7,xl=0,fd=1,pd=2,_i=0,md=1,gd=2,_d=3,vd=4,xd=5,yd=6,Md=7,ec="attached",Sd="detached",zu=300,Ms=301,Ss=302,Da=303,La=304,yo=306,ki=1e3,Zn=1001,uo=1002,qt=1003,Bu=1004,Js=1005,rn=1006,eo=1007,An=1008,kn=1009,ku=1010,Hu=1011,sr=1012,yl=1013,Hi=1014,Rn=1015,mr=1016,Ml=1017,Sl=1018,rr=1020,Vu=35902,Gu=35899,Wu=1021,Xu=1022,pn=1023,or=1026,ar=1027,bl=1028,wl=1029,qu=1030,El=1031,Tl=1033,to=33776,no=33777,io=33778,so=33779,Na=35840,Ua=35841,Fa=35842,Oa=35843,za=36196,Ba=37492,ka=37496,Ha=37808,Va=37809,Ga=37810,Wa=37811,Xa=37812,qa=37813,ja=37814,Ya=37815,Ka=37816,$a=37817,Za=37818,Ja=37819,Qa=37820,el=37821,tl=36492,nl=36494,il=36495,sl=36283,rl=36284,ol=36285,al=36286,bd=2200,ju=2201,wd=2202,lr=2300,cr=2301,Co=2302,ds=2400,fs=2401,ho=2402,Al=2500,Ed=2501,Td=0,Yu=1,ll=2,Ad=3200,Rd=3201,Rl=0,Cd=1,mi="",Gt="srgb",on="srgb-linear",fo="linear",_t="srgb",ji=7680,tc=519,Pd=512,Id=513,Dd=514,Ku=515,Ld=516,Nd=517,Ud=518,Fd=519,cl=35044,ii=35048,nc="300 es",Bn=2e3,po=2001;class Mi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ic=1234567;const tr=Math.PI/180,bs=180/Math.PI;function Pn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Yt[s&255]+Yt[s>>8&255]+Yt[s>>16&255]+Yt[s>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[t&63|128]+Yt[t>>8&255]+"-"+Yt[t>>16&255]+Yt[t>>24&255]+Yt[n&255]+Yt[n>>8&255]+Yt[n>>16&255]+Yt[n>>24&255]).toLowerCase()}function Qe(s,e,t){return Math.max(e,Math.min(t,s))}function Cl(s,e){return(s%e+e)%e}function Od(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function zd(s,e,t){return s!==e?(t-s)/(e-s):0}function nr(s,e,t){return(1-t)*s+t*e}function Bd(s,e,t,n){return nr(s,e,1-Math.exp(-t*n))}function kd(s,e=1){return e-Math.abs(Cl(s,e*2)-e)}function Hd(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Vd(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Gd(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Wd(s,e){return s+Math.random()*(e-s)}function Xd(s){return s*(.5-Math.random())}function qd(s){s!==void 0&&(ic=s);let e=ic+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function jd(s){return s*tr}function Yd(s){return s*bs}function Kd(s){return(s&s-1)===0&&s!==0}function $d(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Zd(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Jd(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),p=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*h,l*u,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*g,l*p,a*c);break;case"YXY":s.set(l*p,a*h,l*g,a*c);break;case"ZYZ":s.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function En(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function mt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Ge={DEG2RAD:tr,RAD2DEG:bs,generateUUID:Pn,clamp:Qe,euclideanModulo:Cl,mapLinear:Od,inverseLerp:zd,lerp:nr,damp:Bd,pingpong:kd,smoothstep:Hd,smootherstep:Vd,randInt:Gd,randFloat:Wd,randFloatSpread:Xd,seededRandom:qd,degToRad:jd,radToDeg:Yd,isPowerOfTwo:Kd,ceilPowerOfTwo:$d,floorPowerOfTwo:Zd,setQuaternionFromProperEuler:Jd,normalize:mt,denormalize:En};class ke{constructor(e=0,t=0){ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Tt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==d||c!==p||h!==g){let m=1-a;const f=l*d+c*p+h*g+u*_,b=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const S=Math.sqrt(x),E=Math.atan2(S,f*b);m=Math.sin(m*E)/S,a=Math.sin(a*E)/S}const v=a*b;if(l=l*m+d*v,c=c*m+p*v,h=h*m+g*v,u=u*m+_*v,m===1-a){const S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*p-c*d,e[t+1]=l*g+h*d+c*u-a*p,e[t+2]=c*g+h*p+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),p=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-i)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(r-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-i)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Po.copy(this).projectOnVector(e),this.sub(Po)}reflect(e){return this.sub(Po.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Po=new N,sc=new Tt;class $e{constructor(e,t,n,i,r,o,a,l,c){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],_=i[0],m=i[3],f=i[6],b=i[1],x=i[4],v=i[7],S=i[2],E=i[5],w=i[8];return r[0]=o*_+a*b+l*S,r[3]=o*m+a*x+l*E,r[6]=o*f+a*v+l*w,r[1]=c*_+h*b+u*S,r[4]=c*m+h*x+u*E,r[7]=c*f+h*v+u*w,r[2]=d*_+p*b+g*S,r[5]=d*m+p*x+g*E,r[8]=d*f+p*v+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,p=c*r-o*l,g=t*u+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(i*c-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(h*t-i*l)*_,e[5]=(i*r-a*t)*_,e[6]=p*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Io.makeScale(e,t)),this}rotate(e){return this.premultiply(Io.makeRotation(-e)),this}translate(e,t){return this.premultiply(Io.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Io=new $e;function $u(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ur(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Qd(){const s=ur("canvas");return s.style.display="block",s}const rc={};function hr(s){s in rc||(rc[s]=!0,console.warn(s))}function ef(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const oc=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ac=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function tf(){const s={enabled:!0,workingColorSpace:on,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===_t&&(i.r=Qn(i.r),i.g=Qn(i.g),i.b=Qn(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_t&&(i.r=_s(i.r),i.g=_s(i.g),i.b=_s(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===mi?fo:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return hr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return hr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[on]:{primaries:e,whitePoint:n,transfer:fo,toXYZ:oc,fromXYZ:ac,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Gt},outputColorSpaceConfig:{drawingBufferColorSpace:Gt}},[Gt]:{primaries:e,whitePoint:n,transfer:_t,toXYZ:oc,fromXYZ:ac,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Gt}}}),s}const st=tf();function Qn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function _s(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Yi;class nf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Yi===void 0&&(Yi=ur("canvas")),Yi.width=e.width,Yi.height=e.height;const i=Yi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Yi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ur("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Qn(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Qn(t[n]/255)*255):t[n]=Qn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let sf=0;class Pl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=Pn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Do(i[o].image)):r.push(Do(i[o]))}else r=Do(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Do(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?nf.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rf=0;const Lo=new N;class Bt extends Mi{constructor(e=Bt.DEFAULT_IMAGE,t=Bt.DEFAULT_MAPPING,n=Zn,i=Zn,r=rn,o=An,a=pn,l=kn,c=Bt.DEFAULT_ANISOTROPY,h=mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rf++}),this.uuid=Pn(),this.name="",this.source=new Pl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Lo).x}get height(){return this.source.getSize(Lo).y}get depth(){return this.source.getSize(Lo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ki:e.x=e.x-Math.floor(e.x);break;case Zn:e.x=e.x<0?0:1;break;case uo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ki:e.y=e.y-Math.floor(e.y);break;case Zn:e.y=e.y<0?0:1;break;case uo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=zu;Bt.DEFAULT_ANISOTROPY=1;class rt{constructor(e=0,t=0,n=0,i=1){rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,v=(p+1)/2,S=(f+1)/2,E=(h+d)/4,w=(u+_)/4,C=(g+m)/4;return x>v&&x>S?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=E/n,r=w/n):v>S?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=E/i,r=C/i):S<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(S),n=w/r,i=C/r),this.set(n,i,r,t),this}let b=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-_)/b,this.z=(d-h)/b,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class of extends Mi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);const i={width:e,height:t,depth:n.depth},r=new Bt(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Pl(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vi extends of{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Zu extends Bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=qt,this.minFilter=qt,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class af extends Bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=qt,this.minFilter=qt,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gn{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Sn):Sn.fromBufferAttribute(r,o),Sn.applyMatrix4(e.matrixWorld),this.expandByPoint(Sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xr.copy(n.boundingBox)),xr.applyMatrix4(e.matrixWorld),this.union(xr)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Sn),Sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vs),yr.subVectors(this.max,Vs),Ki.subVectors(e.a,Vs),$i.subVectors(e.b,Vs),Zi.subVectors(e.c,Vs),oi.subVectors($i,Ki),ai.subVectors(Zi,$i),wi.subVectors(Ki,Zi);let t=[0,-oi.z,oi.y,0,-ai.z,ai.y,0,-wi.z,wi.y,oi.z,0,-oi.x,ai.z,0,-ai.x,wi.z,0,-wi.x,-oi.y,oi.x,0,-ai.y,ai.x,0,-wi.y,wi.x,0];return!No(t,Ki,$i,Zi,yr)||(t=[1,0,0,0,1,0,0,0,1],!No(t,Ki,$i,Zi,yr))?!1:(Mr.crossVectors(oi,ai),t=[Mr.x,Mr.y,Mr.z],No(t,Ki,$i,Zi,yr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Wn=[new N,new N,new N,new N,new N,new N,new N,new N],Sn=new N,xr=new Gn,Ki=new N,$i=new N,Zi=new N,oi=new N,ai=new N,wi=new N,Vs=new N,yr=new N,Mr=new N,Ei=new N;function No(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ei.fromArray(s,r);const a=i.x*Math.abs(Ei.x)+i.y*Math.abs(Ei.y)+i.z*Math.abs(Ei.z),l=e.dot(Ei),c=t.dot(Ei),h=n.dot(Ei);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const lf=new Gn,Gs=new N,Uo=new N;class Dn{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):lf.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gs.subVectors(e,this.center);const t=Gs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Gs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Uo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gs.copy(e.center).add(Uo)),this.expandByPoint(Gs.copy(e.center).sub(Uo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Xn=new N,Fo=new N,Sr=new N,li=new N,Oo=new N,br=new N,zo=new N;class Ps{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xn.copy(this.origin).addScaledVector(this.direction,t),Xn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Fo.copy(e).add(t).multiplyScalar(.5),Sr.copy(t).sub(e).normalize(),li.copy(this.origin).sub(Fo);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Sr),a=li.dot(this.direction),l=-li.dot(Sr),c=li.lengthSq(),h=Math.abs(1-o*o);let u,d,p,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Fo).addScaledVector(Sr,d),p}intersectSphere(e,t){Xn.subVectors(e.center,this.origin);const n=Xn.dot(this.direction),i=Xn.dot(Xn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Xn)!==null}intersectTriangle(e,t,n,i,r){Oo.subVectors(t,e),br.subVectors(n,e),zo.crossVectors(Oo,br);let o=this.direction.dot(zo),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;li.subVectors(this.origin,e);const l=a*this.direction.dot(br.crossVectors(li,br));if(l<0)return null;const c=a*this.direction.dot(Oo.cross(li));if(c<0||l+c>o)return null;const h=-a*li.dot(zo);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ze{constructor(e,t,n,i,r,o,a,l,c,h,u,d,p,g,_,m){Ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,h,u,d,p,g,_,m)}set(e,t,n,i,r,o,a,l,c,h,u,d,p,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ze().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ji.setFromMatrixColumn(e,0).length(),r=1/Ji.setFromMatrixColumn(e,1).length(),o=1/Ji.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,p=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,p=l*u,g=c*h,_=c*u;t[0]=d+_*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,p=l*u,g=c*h,_=c*u;t[0]=d-_*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,p=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=g*c-p,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-d*u,t[8]=g*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=o*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cf,e,uf)}lookAt(e,t,n){const i=this.elements;return dn.subVectors(e,t),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),ci.crossVectors(n,dn),ci.lengthSq()===0&&(Math.abs(n.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),ci.crossVectors(n,dn)),ci.normalize(),wr.crossVectors(dn,ci),i[0]=ci.x,i[4]=wr.x,i[8]=dn.x,i[1]=ci.y,i[5]=wr.y,i[9]=dn.y,i[2]=ci.z,i[6]=wr.z,i[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],b=n[3],x=n[7],v=n[11],S=n[15],E=i[0],w=i[4],C=i[8],y=i[12],M=i[1],A=i[5],D=i[9],L=i[13],z=i[2],O=i[6],F=i[10],W=i[14],V=i[3],Q=i[7],se=i[11],he=i[15];return r[0]=o*E+a*M+l*z+c*V,r[4]=o*w+a*A+l*O+c*Q,r[8]=o*C+a*D+l*F+c*se,r[12]=o*y+a*L+l*W+c*he,r[1]=h*E+u*M+d*z+p*V,r[5]=h*w+u*A+d*O+p*Q,r[9]=h*C+u*D+d*F+p*se,r[13]=h*y+u*L+d*W+p*he,r[2]=g*E+_*M+m*z+f*V,r[6]=g*w+_*A+m*O+f*Q,r[10]=g*C+_*D+m*F+f*se,r[14]=g*y+_*L+m*W+f*he,r[3]=b*E+x*M+v*z+S*V,r[7]=b*w+x*A+v*O+S*Q,r[11]=b*C+x*D+v*F+S*se,r[15]=b*y+x*L+v*W+S*he,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+r*l*u-i*c*u-r*a*d+n*c*d+i*a*p-n*l*p)+_*(+t*l*p-t*c*d+r*o*d-i*o*p+i*c*h-r*l*h)+m*(+t*c*u-t*a*p-r*o*u+n*o*p+r*a*h-n*c*h)+f*(-i*a*h-t*l*u+t*a*d+i*o*u-n*o*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],b=u*m*c-_*d*c+_*l*p-a*m*p-u*l*f+a*d*f,x=g*d*c-h*m*c-g*l*p+o*m*p+h*l*f-o*d*f,v=h*_*c-g*u*c+g*a*p-o*_*p-h*a*f+o*u*f,S=g*u*l-h*_*l-g*a*d+o*_*d+h*a*m-o*u*m,E=t*b+n*x+i*v+r*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=b*w,e[1]=(_*d*r-u*m*r-_*i*p+n*m*p+u*i*f-n*d*f)*w,e[2]=(a*m*r-_*l*r+_*i*c-n*m*c-a*i*f+n*l*f)*w,e[3]=(u*l*r-a*d*r-u*i*c+n*d*c+a*i*p-n*l*p)*w,e[4]=x*w,e[5]=(h*m*r-g*d*r+g*i*p-t*m*p-h*i*f+t*d*f)*w,e[6]=(g*l*r-o*m*r-g*i*c+t*m*c+o*i*f-t*l*f)*w,e[7]=(o*d*r-h*l*r+h*i*c-t*d*c-o*i*p+t*l*p)*w,e[8]=v*w,e[9]=(g*u*r-h*_*r-g*n*p+t*_*p+h*n*f-t*u*f)*w,e[10]=(o*_*r-g*a*r+g*n*c-t*_*c-o*n*f+t*a*f)*w,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*p-t*a*p)*w,e[12]=S*w,e[13]=(h*_*i-g*u*i+g*n*d-t*_*d-h*n*m+t*u*m)*w,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*m-t*a*m)*w,e[15]=(o*u*i-h*a*i+h*n*l-t*u*l-o*n*d+t*a*d)*w,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,p=r*h,g=r*u,_=o*h,m=o*u,f=a*u,b=l*c,x=l*h,v=l*u,S=n.x,E=n.y,w=n.z;return i[0]=(1-(_+f))*S,i[1]=(p+v)*S,i[2]=(g-x)*S,i[3]=0,i[4]=(p-v)*E,i[5]=(1-(d+f))*E,i[6]=(m+b)*E,i[7]=0,i[8]=(g+x)*w,i[9]=(m-b)*w,i[10]=(1-(d+_))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Ji.set(i[0],i[1],i[2]).length();const o=Ji.set(i[4],i[5],i[6]).length(),a=Ji.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],bn.copy(this);const c=1/r,h=1/o,u=1/a;return bn.elements[0]*=c,bn.elements[1]*=c,bn.elements[2]*=c,bn.elements[4]*=h,bn.elements[5]*=h,bn.elements[6]*=h,bn.elements[8]*=u,bn.elements[9]*=u,bn.elements[10]*=u,t.setFromRotationMatrix(bn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Bn,l=!1){const c=this.elements,h=2*r/(t-e),u=2*r/(n-i),d=(t+e)/(t-e),p=(n+i)/(n-i);let g,_;if(l)g=r/(o-r),_=o*r/(o-r);else if(a===Bn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===po)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Bn,l=!1){const c=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),p=-(n+i)/(n-i);let g,_;if(l)g=1/(o-r),_=o/(o-r);else if(a===Bn)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===po)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ji=new N,bn=new Ze,cf=new N(0,0,0),uf=new N(1,1,1),ci=new N,wr=new N,dn=new N,lc=new Ze,cc=new Tt;class Mn{constructor(e=0,t=0,n=0,i=Mn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return lc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return cc.setFromEuler(this),this.setFromQuaternion(cc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mn.DEFAULT_ORDER="XYZ";class Il{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hf=0;const uc=new N,Qi=new Tt,qn=new Ze,Er=new N,Ws=new N,df=new N,ff=new Tt,hc=new N(1,0,0),dc=new N(0,1,0),fc=new N(0,0,1),pc={type:"added"},pf={type:"removed"},es={type:"childadded",child:null},Bo={type:"childremoved",child:null};class dt extends Mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hf++}),this.uuid=Pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dt.DEFAULT_UP.clone();const e=new N,t=new Mn,n=new Tt,i=new N(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ze},normalMatrix:{value:new $e}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Il,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qi.setFromAxisAngle(e,t),this.quaternion.multiply(Qi),this}rotateOnWorldAxis(e,t){return Qi.setFromAxisAngle(e,t),this.quaternion.premultiply(Qi),this}rotateX(e){return this.rotateOnAxis(hc,e)}rotateY(e){return this.rotateOnAxis(dc,e)}rotateZ(e){return this.rotateOnAxis(fc,e)}translateOnAxis(e,t){return uc.copy(e).applyQuaternion(this.quaternion),this.position.add(uc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hc,e)}translateY(e){return this.translateOnAxis(dc,e)}translateZ(e){return this.translateOnAxis(fc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Er.copy(e):Er.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(Ws,Er,this.up):qn.lookAt(Er,Ws,this.up),this.quaternion.setFromRotationMatrix(qn),i&&(qn.extractRotation(i.matrixWorld),Qi.setFromRotationMatrix(qn),this.quaternion.premultiply(Qi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(pc),es.child=e,this.dispatchEvent(es),es.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(pf),Bo.child=e,this.dispatchEvent(Bo),Bo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(pc),es.child=e,this.dispatchEvent(es),es.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,e,df),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,ff,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}dt.DEFAULT_UP=new N(0,1,0);dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wn=new N,jn=new N,ko=new N,Yn=new N,ts=new N,ns=new N,mc=new N,Ho=new N,Vo=new N,Go=new N,Wo=new rt,Xo=new rt,qo=new rt;class Tn{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),wn.subVectors(e,t),i.cross(wn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){wn.subVectors(i,t),jn.subVectors(n,t),ko.subVectors(e,t);const o=wn.dot(wn),a=wn.dot(jn),l=wn.dot(ko),c=jn.dot(jn),h=jn.dot(ko),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Yn.x),l.addScaledVector(o,Yn.y),l.addScaledVector(a,Yn.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return Wo.setScalar(0),Xo.setScalar(0),qo.setScalar(0),Wo.fromBufferAttribute(e,t),Xo.fromBufferAttribute(e,n),qo.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Wo,r.x),o.addScaledVector(Xo,r.y),o.addScaledVector(qo,r.z),o}static isFrontFacing(e,t,n,i){return wn.subVectors(n,t),jn.subVectors(e,t),wn.cross(jn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wn.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),wn.cross(jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Tn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Tn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;ts.subVectors(i,n),ns.subVectors(r,n),Ho.subVectors(e,n);const l=ts.dot(Ho),c=ns.dot(Ho);if(l<=0&&c<=0)return t.copy(n);Vo.subVectors(e,i);const h=ts.dot(Vo),u=ns.dot(Vo);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(ts,o);Go.subVectors(e,r);const p=ts.dot(Go),g=ns.dot(Go);if(g>=0&&p<=g)return t.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(ns,a);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return mc.subVectors(r,i),a=(u-h)/(u-h+(p-g)),t.copy(i).addScaledVector(mc,a);const f=1/(m+_+d);return o=_*f,a=d*f,t.copy(n).addScaledVector(ts,o).addScaledVector(ns,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ju={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},Tr={h:0,s:0,l:0};function jo(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=st.workingColorSpace){return this.r=e,this.g=t,this.b=n,st.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=st.workingColorSpace){if(e=Cl(e,1),t=Qe(t,0,1),n=Qe(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=jo(o,r,e+1/3),this.g=jo(o,r,e),this.b=jo(o,r,e-1/3)}return st.colorSpaceToWorking(this,i),this}setStyle(e,t=Gt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){const n=Ju[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qn(e.r),this.g=Qn(e.g),this.b=Qn(e.b),this}copyLinearToSRGB(e){return this.r=_s(e.r),this.g=_s(e.g),this.b=_s(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return st.workingToColorSpace(Kt.copy(this),e),Math.round(Qe(Kt.r*255,0,255))*65536+Math.round(Qe(Kt.g*255,0,255))*256+Math.round(Qe(Kt.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.workingToColorSpace(Kt.copy(this),t);const n=Kt.r,i=Kt.g,r=Kt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=st.workingColorSpace){return st.workingToColorSpace(Kt.copy(this),t),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=Gt){st.workingToColorSpace(Kt.copy(this),e);const t=Kt.r,n=Kt.g,i=Kt.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ui),this.setHSL(ui.h+e,ui.s+t,ui.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ui),e.getHSL(Tr);const n=nr(ui.h,Tr.h,t),i=nr(ui.s,Tr.s,t),r=nr(ui.l,Tr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kt=new ze;ze.NAMES=Ju;let mf=0;class In extends Mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mf++}),this.uuid=Pn(),this.name="",this.type="Material",this.blending=gs,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ba,this.blendDst=wa,this.blendEquation=Ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ji,this.stencilZFail=ji,this.stencilZPass=ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==gs&&(n.blending=this.blending),this.side!==ti&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ba&&(n.blendSrc=this.blendSrc),this.blendDst!==wa&&(n.blendDst=this.blendDst),this.blendEquation!==Ui&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ys&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ji&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ji&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ji&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Wt extends In{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.combine=xl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Nt=new N,Ar=new ke;let gf=0;class Mt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=cl,this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ar.fromBufferAttribute(this,t),Ar.applyMatrix3(e),this.setXY(t,Ar.x,Ar.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=En(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=En(t,this.array)),t}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=En(t,this.array)),t}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=En(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=En(t,this.array)),t}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array),r=mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==cl&&(e.usage=this.usage),e}}class Qu extends Mt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class eh extends Mt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ft extends Mt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let _f=0;const vn=new Ze,Yo=new dt,is=new N,fn=new Gn,Xs=new Gn,Vt=new N;class St extends Mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=Pn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($u(e)?eh:Qu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new $e().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vn.makeRotationFromQuaternion(e),this.applyMatrix4(vn),this}rotateX(e){return vn.makeRotationX(e),this.applyMatrix4(vn),this}rotateY(e){return vn.makeRotationY(e),this.applyMatrix4(vn),this}rotateZ(e){return vn.makeRotationZ(e),this.applyMatrix4(vn),this}translate(e,t,n){return vn.makeTranslation(e,t,n),this.applyMatrix4(vn),this}scale(e,t,n){return vn.makeScale(e,t,n),this.applyMatrix4(vn),this}lookAt(e){return Yo.lookAt(e),Yo.updateMatrix(),this.applyMatrix4(Yo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ft(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];fn.setFromBufferAttribute(r),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Xs.setFromBufferAttribute(a),this.morphTargetsRelative?(Vt.addVectors(fn.min,Xs.min),fn.expandByPoint(Vt),Vt.addVectors(fn.max,Xs.max),fn.expandByPoint(Vt)):(fn.expandByPoint(Xs.min),fn.expandByPoint(Xs.max))}fn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Vt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Vt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Vt.fromBufferAttribute(a,c),l&&(is.fromBufferAttribute(e,c),Vt.add(is)),i=Math.max(i,n.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new N,l[C]=new N;const c=new N,h=new N,u=new N,d=new ke,p=new ke,g=new ke,_=new N,m=new N;function f(C,y,M){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,C),p.fromBufferAttribute(r,y),g.fromBufferAttribute(r,M),h.sub(c),u.sub(c),p.sub(d),g.sub(d);const A=1/(p.x*g.y-g.x*p.y);isFinite(A)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(A),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(A),a[C].add(_),a[y].add(_),a[M].add(_),l[C].add(m),l[y].add(m),l[M].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let C=0,y=b.length;C<y;++C){const M=b[C],A=M.start,D=M.count;for(let L=A,z=A+D;L<z;L+=3)f(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const x=new N,v=new N,S=new N,E=new N;function w(C){S.fromBufferAttribute(i,C),E.copy(S);const y=a[C];x.copy(y),x.sub(S.multiplyScalar(S.dot(y))).normalize(),v.crossVectors(E,y);const A=v.dot(l[C])<0?-1:1;o.setXYZW(C,x.x,x.y,x.z,A)}for(let C=0,y=b.length;C<y;++C){const M=b[C],A=M.start,D=M.count;for(let L=A,z=A+D;L<z;L+=3)w(e.getX(L+0)),w(e.getX(L+1)),w(e.getX(L+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Mt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new N,r=new N,o=new N,a=new N,l=new N,c=new N,h=new N,u=new N;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Vt.fromBufferAttribute(e,t),Vt.normalize(),e.setXYZ(t,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new Mt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new St,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=e(d,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gc=new Ze,Ti=new Ps,Rr=new Dn,_c=new N,Cr=new N,Pr=new N,Ir=new N,Ko=new N,Dr=new N,vc=new N,Lr=new N;class Ye extends dt{constructor(e=new St,t=new Wt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Dr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Ko.fromBufferAttribute(u,e),o?Dr.addScaledVector(Ko,h):Dr.addScaledVector(Ko.sub(t),h))}t.add(Dr)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Rr.copy(n.boundingSphere),Rr.applyMatrix4(r),Ti.copy(e.ray).recast(e.near),!(Rr.containsPoint(Ti.origin)===!1&&(Ti.intersectSphere(Rr,_c)===null||Ti.origin.distanceToSquared(_c)>(e.far-e.near)**2))&&(gc.copy(r).invert(),Ti.copy(e.ray).applyMatrix4(gc),!(n.boundingBox!==null&&Ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ti)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],b=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=b,S=x;v<S;v+=3){const E=a.getX(v),w=a.getX(v+1),C=a.getX(v+2);i=Nr(this,f,e,n,c,h,u,E,w,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const b=a.getX(m),x=a.getX(m+1),v=a.getX(m+2);i=Nr(this,o,e,n,c,h,u,b,x,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],b=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=b,S=x;v<S;v+=3){const E=v,w=v+1,C=v+2;i=Nr(this,f,e,n,c,h,u,E,w,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const b=m,x=m+1,v=m+2;i=Nr(this,o,e,n,c,h,u,b,x,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function vf(s,e,t,n,i,r,o,a){let l;if(e.side===Qt?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===ti,a),l===null)return null;Lr.copy(a),Lr.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Lr);return c<t.near||c>t.far?null:{distance:c,point:Lr.clone(),object:s}}function Nr(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,Cr),s.getVertexPosition(l,Pr),s.getVertexPosition(c,Ir);const h=vf(s,e,t,n,Cr,Pr,Ir,vc);if(h){const u=new N;Tn.getBarycoord(vc,Cr,Pr,Ir,u),i&&(h.uv=Tn.getInterpolatedAttribute(i,a,l,c,u,new ke)),r&&(h.uv1=Tn.getInterpolatedAttribute(r,a,l,c,u,new ke)),o&&(h.normal=Tn.getInterpolatedAttribute(o,a,l,c,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new N,materialIndex:0};Tn.getNormal(Cr,Pr,Ir,d.normal),h.face=d,h.barycoord=u}return h}class vi extends St{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ft(c,3)),this.setAttribute("normal",new ft(h,3)),this.setAttribute("uv",new ft(u,2));function g(_,m,f,b,x,v,S,E,w,C,y){const M=v/w,A=S/C,D=v/2,L=S/2,z=E/2,O=w+1,F=C+1;let W=0,V=0;const Q=new N;for(let se=0;se<F;se++){const he=se*A-L;for(let Me=0;Me<O;Me++){const j=Me*M-D;Q[_]=j*b,Q[m]=he*x,Q[f]=z,c.push(Q.x,Q.y,Q.z),Q[_]=0,Q[m]=0,Q[f]=E>0?1:-1,h.push(Q.x,Q.y,Q.z),u.push(Me/w),u.push(1-se/C),W+=1}}for(let se=0;se<C;se++)for(let he=0;he<w;he++){const Me=d+he+O*se,j=d+he+O*(se+1),te=d+(he+1)+O*(se+1),ue=d+(he+1)+O*se;l.push(Me,j,ue),l.push(j,te,ue),V+=6}a.addGroup(p,V,y),p+=V,d+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ws(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function nn(s){const e={};for(let t=0;t<s.length;t++){const n=ws(s[t]);for(const i in n)e[i]=n[i]}return e}function xf(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function th(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const yf={clone:ws,merge:nn};var Mf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class jt extends In{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mf,this.fragmentShader=Sf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ws(e.uniforms),this.uniformsGroups=xf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class nh extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=Bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hi=new N,xc=new ke,yc=new ke;class sn extends nh{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=bs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(tr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bs*2*Math.atan(Math.tan(tr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hi.x,hi.y).multiplyScalar(-e/hi.z),hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hi.x,hi.y).multiplyScalar(-e/hi.z)}getViewSize(e,t){return this.getViewBounds(e,xc,yc),t.subVectors(yc,xc)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(tr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ss=-90,rs=1;class bf extends dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new sn(ss,rs,e,t);i.layers=this.layers,this.add(i);const r=new sn(ss,rs,e,t);r.layers=this.layers,this.add(r);const o=new sn(ss,rs,e,t);o.layers=this.layers,this.add(o);const a=new sn(ss,rs,e,t);a.layers=this.layers,this.add(a);const l=new sn(ss,rs,e,t);l.layers=this.layers,this.add(l);const c=new sn(ss,rs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Bn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===po)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ih extends Bt{constructor(e=[],t=Ms,n,i,r,o,a,l,c,h){super(e,t,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wf extends Vi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ih(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new vi(5,5,5),r=new jt({name:"CubemapFromEquirect",uniforms:ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qt,blending:gi});r.uniforms.tEquirect.value=t;const o=new Ye(i,r),a=t.minFilter;return t.minFilter===An&&(t.minFilter=rn),new bf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}class it extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ef={type:"move"};class $o{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new it,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new it,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new it,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ef)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new it;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Tf extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mn,this.environmentIntensity=1,this.environmentRotation=new Mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Af{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=cl,this.updateRanges=[],this.version=0,this.uuid=Pn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const tn=new N;class Dl{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=En(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=En(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=En(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=En(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=En(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array),r=mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Mt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Dl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Mc=new N,Sc=new rt,bc=new rt,Rf=new N,wc=new Ze,Ur=new N,Zo=new Dn,Ec=new Ze,Jo=new Ps;class Cf extends Ye{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ec,this.bindMatrix=new Ze,this.bindMatrixInverse=new Ze,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Gn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ur),this.boundingBox.expandByPoint(Ur)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Dn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ur),this.boundingSphere.expandByPoint(Ur)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zo.copy(this.boundingSphere),Zo.applyMatrix4(i),e.ray.intersectsSphere(Zo)!==!1&&(Ec.copy(i).invert(),Jo.copy(e.ray).applyMatrix4(Ec),!(this.boundingBox!==null&&Jo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Jo)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new rt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ec?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Sd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Sc.fromBufferAttribute(i.attributes.skinIndex,e),bc.fromBufferAttribute(i.attributes.skinWeight,e),Mc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=bc.getComponent(r);if(o!==0){const a=Sc.getComponent(r);wc.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Rf.copy(Mc).applyMatrix4(wc),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class sh extends dt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Mo extends Bt{constructor(e=null,t=1,n=1,i,r,o,a,l,c=qt,h=qt,u,d){super(null,o,a,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Tc=new Ze,Pf=new Ze;class Ll{constructor(e=[],t=[]){this.uuid=Pn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ze)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ze;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Pf;Tc.multiplyMatrices(a,t[r]),Tc.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Ll(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Mo(t,e,e,pn,Rn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new sh),this.bones.push(o),this.boneInverses.push(new Ze().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Oi extends Mt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const os=new Ze,Ac=new Ze,Fr=[],Rc=new Gn,If=new Ze,qs=new Ye,js=new Dn;class dr extends Ye{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Oi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,If)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Gn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,os),Rc.copy(e.boundingBox).applyMatrix4(os),this.boundingBox.union(Rc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Dn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,os),js.copy(e.boundingSphere).applyMatrix4(os),this.boundingSphere.union(js)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(qs.geometry=this.geometry,qs.material=this.material,qs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),js.copy(this.boundingSphere),js.applyMatrix4(n),e.ray.intersectsSphere(js)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,os),Ac.multiplyMatrices(n,os),qs.matrixWorld=Ac,qs.raycast(e,Fr);for(let o=0,a=Fr.length;o<a;o++){const l=Fr[o];l.instanceId=r,l.object=this,t.push(l)}Fr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Oi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Mo(new Float32Array(i*this.count),i,this.count,bl,Rn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Qo=new N,Df=new N,Lf=new $e;class pi{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Qo.subVectors(n,t).cross(Df.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Qo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Lf.getNormalMatrix(e),i=this.coplanarPoint(Qo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ai=new Dn,Nf=new ke(.5,.5),Or=new N;class So{constructor(e=new pi,t=new pi,n=new pi,i=new pi,r=new pi,o=new pi){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Bn,n=!1){const i=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],p=r[7],g=r[8],_=r[9],m=r[10],f=r[11],b=r[12],x=r[13],v=r[14],S=r[15];if(i[0].setComponents(c-o,p-h,f-g,S-b).normalize(),i[1].setComponents(c+o,p+h,f+g,S+b).normalize(),i[2].setComponents(c+a,p+u,f+_,S+x).normalize(),i[3].setComponents(c-a,p-u,f-_,S-x).normalize(),n)i[4].setComponents(l,d,m,v).normalize(),i[5].setComponents(c-l,p-d,f-m,S-v).normalize();else if(i[4].setComponents(c-l,p-d,f-m,S-v).normalize(),t===Bn)i[5].setComponents(c+l,p+d,f+m,S+v).normalize();else if(t===po)i[5].setComponents(l,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(e){Ai.center.set(0,0,0);const t=Nf.distanceTo(e.center);return Ai.radius=.7071067811865476+t,Ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Or.x=i.normal.x>0?e.max.x:e.min.x,Or.y=i.normal.y>0?e.max.y:e.min.y,Or.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Or)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Nl extends In{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const mo=new N,go=new N,Cc=new Ze,Ys=new Ps,zr=new Dn,ea=new N,Pc=new N;class bo extends dt{constructor(e=new St,t=new Nl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)mo.fromBufferAttribute(t,i-1),go.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=mo.distanceTo(go);e.setAttribute("lineDistance",new ft(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zr.copy(n.boundingSphere),zr.applyMatrix4(i),zr.radius+=r,e.ray.intersectsSphere(zr)===!1)return;Cc.copy(i).invert(),Ys.copy(e.ray).applyMatrix4(Cc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){const f=h.getX(_),b=h.getX(_+1),x=Br(this,e,Ys,l,f,b,_);x&&t.push(x)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(p),f=Br(this,e,Ys,l,_,m,g-1);f&&t.push(f)}}else{const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){const f=Br(this,e,Ys,l,_,_+1,_);f&&t.push(f)}if(this.isLineLoop){const _=Br(this,e,Ys,l,g-1,p,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Br(s,e,t,n,i,r,o){const a=s.geometry.attributes.position;if(mo.fromBufferAttribute(a,i),go.fromBufferAttribute(a,r),t.distanceSqToSegment(mo,go,ea,Pc)>n)return;ea.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(ea);if(!(c<e.near||c>e.far))return{distance:c,point:Pc.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const Ic=new N,Dc=new N;class Uf extends bo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Ic.fromBufferAttribute(t,i),Dc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ic.distanceTo(Dc);e.setAttribute("lineDistance",new ft(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ff extends bo{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class gr extends In{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Lc=new Ze,ul=new Ps,kr=new Dn,Hr=new N;class Is extends dt{constructor(e=new St,t=new gr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere),kr.applyMatrix4(i),kr.radius+=r,e.ray.intersectsSphere(kr)===!1)return;Lc.copy(i).invert(),ul.copy(e.ray).applyMatrix4(Lc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,_=p;g<_;g++){const m=c.getX(g);Hr.fromBufferAttribute(u,m),Nc(Hr,m,l,i,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=d,_=p;g<_;g++)Hr.fromBufferAttribute(u,g),Nc(Hr,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Nc(s,e,t,n,i,r,o){const a=ul.distanceSqToPoint(s);if(a<t){const l=new N;ul.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Of extends Bt{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class rh extends Bt{constructor(e,t,n=Hi,i,r,o,a=qt,l=qt,c,h=or,u=1){if(h!==or&&h!==ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Pl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class oh extends Bt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ul extends St{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new N,h=new ke;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const p=n+u/t*i;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ft(o,3)),this.setAttribute("normal",new ft(a,3)),this.setAttribute("uv",new ft(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ul(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Hn extends St{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],p=[];let g=0;const _=[],m=n/2;let f=0;b(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new ft(u,3)),this.setAttribute("normal",new ft(d,3)),this.setAttribute("uv",new ft(p,2));function b(){const v=new N,S=new N;let E=0;const w=(t-e)/n;for(let C=0;C<=r;C++){const y=[],M=C/r,A=M*(t-e)+e;for(let D=0;D<=i;D++){const L=D/i,z=L*l+a,O=Math.sin(z),F=Math.cos(z);S.x=A*O,S.y=-M*n+m,S.z=A*F,u.push(S.x,S.y,S.z),v.set(O,w,F).normalize(),d.push(v.x,v.y,v.z),p.push(L,1-M),y.push(g++)}_.push(y)}for(let C=0;C<i;C++)for(let y=0;y<r;y++){const M=_[y][C],A=_[y+1][C],D=_[y+1][C+1],L=_[y][C+1];(e>0||y!==0)&&(h.push(M,A,L),E+=3),(t>0||y!==r-1)&&(h.push(A,D,L),E+=3)}c.addGroup(f,E,0),f+=E}function x(v){const S=g,E=new ke,w=new N;let C=0;const y=v===!0?e:t,M=v===!0?1:-1;for(let D=1;D<=i;D++)u.push(0,m*M,0),d.push(0,M,0),p.push(.5,.5),g++;const A=g;for(let D=0;D<=i;D++){const z=D/i*l+a,O=Math.cos(z),F=Math.sin(z);w.x=y*F,w.y=m*M,w.z=y*O,u.push(w.x,w.y,w.z),d.push(0,M,0),E.x=O*.5+.5,E.y=F*.5*M+.5,p.push(E.x,E.y),g++}for(let D=0;D<i;D++){const L=S+D,z=A+D;v===!0?h.push(z,z+1,L):h.push(z+1,z,L),C+=3}c.addGroup(f,C,v===!0?1:2),f+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class wo extends Hn{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new wo(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Fl extends St{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new ft(r,3)),this.setAttribute("normal",new ft(r.slice(),3)),this.setAttribute("uv",new ft(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(b){const x=new N,v=new N,S=new N;for(let E=0;E<t.length;E+=3)p(t[E+0],x),p(t[E+1],v),p(t[E+2],S),l(x,v,S,b)}function l(b,x,v,S){const E=S+1,w=[];for(let C=0;C<=E;C++){w[C]=[];const y=b.clone().lerp(v,C/E),M=x.clone().lerp(v,C/E),A=E-C;for(let D=0;D<=A;D++)D===0&&C===E?w[C][D]=y:w[C][D]=y.clone().lerp(M,D/A)}for(let C=0;C<E;C++)for(let y=0;y<2*(E-C)-1;y++){const M=Math.floor(y/2);y%2===0?(d(w[C][M+1]),d(w[C+1][M]),d(w[C][M])):(d(w[C][M+1]),d(w[C+1][M+1]),d(w[C+1][M]))}}function c(b){const x=new N;for(let v=0;v<r.length;v+=3)x.x=r[v+0],x.y=r[v+1],x.z=r[v+2],x.normalize().multiplyScalar(b),r[v+0]=x.x,r[v+1]=x.y,r[v+2]=x.z}function h(){const b=new N;for(let x=0;x<r.length;x+=3){b.x=r[x+0],b.y=r[x+1],b.z=r[x+2];const v=m(b)/2/Math.PI+.5,S=f(b)/Math.PI+.5;o.push(v,1-S)}g(),u()}function u(){for(let b=0;b<o.length;b+=6){const x=o[b+0],v=o[b+2],S=o[b+4],E=Math.max(x,v,S),w=Math.min(x,v,S);E>.9&&w<.1&&(x<.2&&(o[b+0]+=1),v<.2&&(o[b+2]+=1),S<.2&&(o[b+4]+=1))}}function d(b){r.push(b.x,b.y,b.z)}function p(b,x){const v=b*3;x.x=e[v+0],x.y=e[v+1],x.z=e[v+2]}function g(){const b=new N,x=new N,v=new N,S=new N,E=new ke,w=new ke,C=new ke;for(let y=0,M=0;y<r.length;y+=9,M+=6){b.set(r[y+0],r[y+1],r[y+2]),x.set(r[y+3],r[y+4],r[y+5]),v.set(r[y+6],r[y+7],r[y+8]),E.set(o[M+0],o[M+1]),w.set(o[M+2],o[M+3]),C.set(o[M+4],o[M+5]),S.copy(b).add(x).add(v).divideScalar(3);const A=m(S);_(E,M+0,b,A),_(w,M+2,x,A),_(C,M+4,v,A)}}function _(b,x,v,S){S<0&&b.x===1&&(o[x]=b.x-1),v.x===0&&v.z===0&&(o[x]=S/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function f(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fl(e.vertices,e.indices,e.radius,e.details)}}class Ol extends Fl{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ol(e.radius,e.detail)}}class Wi extends St{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,d=t/l,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const b=f*d-o;for(let x=0;x<c;x++){const v=x*u-r;g.push(v,-b,0),_.push(0,0,1),m.push(x/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let b=0;b<a;b++){const x=b+c*f,v=b+c*(f+1),S=b+1+c*(f+1),E=b+1+c*f;p.push(x,v,E),p.push(v,S,E)}this.setIndex(p),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(_,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wi(e.width,e.height,e.widthSegments,e.heightSegments)}}class Vn extends St{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new N,d=new N,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const b=[],x=f/n;let v=0;f===0&&o===0?v=.5/t:f===n&&l===Math.PI&&(v=-.5/t);for(let S=0;S<=t;S++){const E=S/t;u.x=-e*Math.cos(i+E*r)*Math.sin(o+x*a),u.y=e*Math.cos(o+x*a),u.z=e*Math.sin(i+E*r)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(E+v,1-x),b.push(c++)}h.push(b)}for(let f=0;f<n;f++)for(let b=0;b<t;b++){const x=h[f][b+1],v=h[f][b],S=h[f+1][b],E=h[f+1][b+1];(f!==0||o>0)&&p.push(x,v,E),(f!==n-1||l<Math.PI)&&p.push(v,S,E)}this.setIndex(p),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(_,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class xi extends St{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],h=new N,u=new N,d=new N;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){const _=g/i*r,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){const _=(i+1)*p+g-1,m=(i+1)*(p-1)+g-1,f=(i+1)*(p-1)+g,b=(i+1)*p+g;o.push(_,m,b),o.push(m,f,b)}this.setIndex(o),this.setAttribute("position",new ft(a,3)),this.setAttribute("normal",new ft(l,3)),this.setAttribute("uv",new ft(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xi(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Lt extends In{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rl,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ln extends Lt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ke(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class zf extends In{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rl,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.combine=xl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Bf extends In{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ad,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class kf extends In{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Vr(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Hf(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Vf(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Uc(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function ah(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class _r{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Gf extends _r{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ds,endingEnd:ds}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case fs:r=e,a=2*t-n;break;case ho:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case fs:o=e,l=2*n-t;break;case ho:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,f=-d*m+2*d*_-d*g,b=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,x=(-1-p)*m+(1.5+p)*_+.5*g,v=p*m-p*_;for(let S=0;S!==a;++S)r[S]=f*o[h+S]+b*o[c+S]+x*o[l+S]+v*o[u+S];return r}}class lh extends _r{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}}class Wf extends _r{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Nn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Vr(t,this.TimeBufferType),this.values=Vr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Vr(e.times,Array),values:Vr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Wf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new lh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Gf(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case lr:t=this.InterpolantFactoryMethodDiscrete;break;case cr:t=this.InterpolantFactoryMethodLinear;break;case Co:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return lr;case this.InterpolantFactoryMethodLinear:return cr;case this.InterpolantFactoryMethodSmooth:return Co}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Hf(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Co,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{const u=a*n,d=u-n,p=u+n;for(let g=0;g!==n;++g){const _=t[u+g];if(_!==t[d+g]||_!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let p=0;p!==n;++p)t[d+p]=t[u+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Nn.prototype.ValueTypeName="";Nn.prototype.TimeBufferType=Float32Array;Nn.prototype.ValueBufferType=Float32Array;Nn.prototype.DefaultInterpolation=cr;class Ds extends Nn{constructor(e,t,n){super(e,t,n)}}Ds.prototype.ValueTypeName="bool";Ds.prototype.ValueBufferType=Array;Ds.prototype.DefaultInterpolation=lr;Ds.prototype.InterpolantFactoryMethodLinear=void 0;Ds.prototype.InterpolantFactoryMethodSmooth=void 0;class ch extends Nn{constructor(e,t,n,i){super(e,t,n,i)}}ch.prototype.ValueTypeName="color";class Es extends Nn{constructor(e,t,n,i){super(e,t,n,i)}}Es.prototype.ValueTypeName="number";class Xf extends _r{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let h=c+a;c!==h;c+=4)Tt.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Ts extends Nn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Xf(this.times,this.values,this.getValueSize(),e)}}Ts.prototype.ValueTypeName="quaternion";Ts.prototype.InterpolantFactoryMethodSmooth=void 0;class Ls extends Nn{constructor(e,t,n){super(e,t,n)}}Ls.prototype.ValueTypeName="string";Ls.prototype.ValueBufferType=Array;Ls.prototype.DefaultInterpolation=lr;Ls.prototype.InterpolantFactoryMethodLinear=void 0;Ls.prototype.InterpolantFactoryMethodSmooth=void 0;class As extends Nn{constructor(e,t,n,i){super(e,t,n,i)}}As.prototype.ValueTypeName="vector";class hl{constructor(e="",t=-1,n=[],i=Al){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Pn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(jf(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(Nn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const h=Vf(l);l=Uc(l,1,h),c=Uc(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Es(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,p,g,_){if(p.length!==0){const m=[],f=[];ah(p,m,f,g),m.length!==0&&_.push(new u(d,m,f))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)p[d[g].morphTargets[_]]=-1;for(const _ in p){const m=[],f=[];for(let b=0;b!==d[g].morphTargets.length;++b){const x=d[g];m.push(x.time),f.push(x.morphTarget===_?1:0)}i.push(new Es(".morphTargetInfluence["+_+"]",m,f))}l=p.length*o}else{const p=".bones["+t[u].name+"]";n(As,p+".position",d,"pos",i),n(Ts,p+".quaternion",d,"rot",i),n(As,p+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function qf(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Es;case"vector":case"vector2":case"vector3":case"vector4":return As;case"color":return ch;case"quaternion":return Ts;case"bool":case"boolean":return Ds;case"string":return Ls}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function jf(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=qf(s.type);if(s.times===void 0){const t=[],n=[];ah(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Jn={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Yf{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const uh=new Yf;class Ns{constructor(e){this.manager=e!==void 0?e:uh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Ns.DEFAULT_MATERIAL_NAME="__DEFAULT";const Kn={};class Kf extends Error{constructor(e,t){super(e),this.response=t}}class hh extends Ns{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Jn.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Kn[e]!==void 0){Kn[e].push({onLoad:t,onProgress:n,onError:i});return}Kn[e]=[],Kn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Kn[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0;let _=0;const m=new ReadableStream({start(f){b();function b(){u.read().then(({done:x,value:v})=>{if(x)f.close();else{_+=v.byteLength;const S=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let E=0,w=h.length;E<w;E++){const C=h[E];C.onProgress&&C.onProgress(S)}f.enqueue(v),b()}},x=>{f.error(x)})}}});return new Response(m)}else throw new Kf(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Jn.add(`file:${e}`,c);const h=Kn[e];delete Kn[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{const h=Kn[e];if(h===void 0)throw this.manager.itemError(e),c;delete Kn[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const as=new WeakMap;class $f extends Ns{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Jn.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=as.get(o);u===void 0&&(u=[],as.set(o,u)),u.push({onLoad:t,onError:i})}return o}const a=ur("img");function l(){h(),t&&t(this);const u=as.get(this)||[];for(let d=0;d<u.length;d++){const p=u[d];p.onLoad&&p.onLoad(this)}as.delete(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),Jn.remove(`image:${e}`);const d=as.get(this)||[];for(let p=0;p<d.length;p++){const g=d[p];g.onError&&g.onError(u)}as.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Jn.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class Zf extends Ns{constructor(e){super(e)}load(e,t,n,i){const r=new Bt,o=new $f(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Eo extends dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Jf extends Eo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ta=new Ze,Fc=new N,Oc=new N;class zl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.mapType=kn,this.map=null,this.mapPass=null,this.matrix=new Ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new So,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Fc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Fc),Oc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Oc),t.updateMatrixWorld(),ta.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ta,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ta)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Qf extends zl{constructor(){super(new sn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=bs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class ep extends Eo{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Qf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const zc=new Ze,Ks=new N,na=new N;class tp extends zl{constructor(){super(new sn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ke(4,2),this._viewportCount=6,this._viewports=[new rt(2,1,1,1),new rt(0,1,1,1),new rt(3,1,1,1),new rt(1,1,1,1),new rt(3,0,1,1),new rt(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ks.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ks),na.copy(n.position),na.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(na),n.updateMatrixWorld(),i.makeTranslation(-Ks.x,-Ks.y,-Ks.z),zc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zc,n.coordinateSystem,n.reversedDepth)}}class np extends Eo{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new tp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Bl extends nh{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ip extends zl{constructor(){super(new Bl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ro extends Eo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.shadow=new ip}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ir{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const ia=new WeakMap;class sp extends Ns{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Jn.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{if(ia.has(o)===!0)i&&i(ia.get(o)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Jn.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),ia.set(l,c),Jn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Jn.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class rp extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class op{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){Tt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const o=this._workIndex*r;Tt.multiplyQuaternionsFlat(e,o,e,t,e,n),Tt.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){const o=1-i;for(let a=0;a!==r;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const kl="\\[\\]\\.:\\/",ap=new RegExp("["+kl+"]","g"),Hl="[^"+kl+"]",lp="[^"+kl.replace("\\.","")+"]",cp=/((?:WC+[\/:])*)/.source.replace("WC",Hl),up=/(WCOD+)?/.source.replace("WCOD",lp),hp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Hl),dp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Hl),fp=new RegExp("^"+cp+up+hp+dp+"$"),pp=["material","materials","bones","map"];class mp{constructor(e,t,n){const i=n||ht.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ht{constructor(e,t,n){this.path=t,this.parsedPath=n||ht.parseTrackName(t),this.node=ht.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ht.Composite(e,t,n):new ht(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ap,"")}static parseTrackName(e){const t=fp.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);pp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=ht.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ht.Composite=mp;ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ht.prototype.GetterByBindingType=[ht.prototype._getValue_direct,ht.prototype._getValue_array,ht.prototype._getValue_arrayElement,ht.prototype._getValue_toArray];ht.prototype.SetterByBindingTypeAndVersioning=[[ht.prototype._setValue_direct,ht.prototype._setValue_direct_setNeedsUpdate,ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_array,ht.prototype._setValue_array_setNeedsUpdate,ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_arrayElement,ht.prototype._setValue_arrayElement_setNeedsUpdate,ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_fromArray,ht.prototype._setValue_fromArray_setNeedsUpdate,ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class gp{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,o=r.length,a=new Array(o),l={endingStart:ds,endingEnd:ds};for(let c=0;c!==o;++c){const h=r[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=ju,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Ed:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case Al:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const o=n===wd;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===bd){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=fs,i.endingEnd=fs):(e?i.endingStart=this.zeroSlopeAtStart?fs:ds:i.endingStart=ho,t?i.endingEnd=this.zeroSlopeAtEnd?fs:ds:i.endingEnd=ho)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}}const _p=new Float32Array(1);class vp extends Mi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){const d=i[u],p=d.name;let g=h[p];if(g!==void 0)++g.referenceCount,o[u]=g;else{if(g=o[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,p));continue}const _=t&&t._propertyBindings[u].binding.parsedPath;g=new op(ht.create(n,p,_),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,p),o[u]=g}a[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new lh(new Float32Array(2),new Float32Array(2),1,_p),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let o=typeof e=="string"?hl.findByName(i,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Al),l!==void 0){const u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const h=new gp(this,o,t,n);return this._bindAction(h,c),this._addInactiveAction(h,a,r),h}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?hl.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const Bc=new Ze;class To{constructor(e,t,n=0,i=1/0){this.ray=new Ps(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Il,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Bc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Bc),this}intersectObject(e,t=!0,n=[]){return dl(e,this,n,t),n.sort(kc),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)dl(e[i],this,n,t);return n.sort(kc),n}}function kc(s,e){return s.distance-e.distance}function dl(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)dl(r[o],e,t,!0)}}class Hc{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Qe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Qe(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class xp extends Mi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Vc(s,e,t,n){const i=yp(n);switch(t){case Wu:return s*e;case bl:return s*e/i.components*i.byteLength;case wl:return s*e/i.components*i.byteLength;case qu:return s*e*2/i.components*i.byteLength;case El:return s*e*2/i.components*i.byteLength;case Xu:return s*e*3/i.components*i.byteLength;case pn:return s*e*4/i.components*i.byteLength;case Tl:return s*e*4/i.components*i.byteLength;case to:case no:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case io:case so:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ua:case Oa:return Math.max(s,16)*Math.max(e,8)/4;case Na:case Fa:return Math.max(s,8)*Math.max(e,8)/2;case za:case Ba:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ka:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ha:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Va:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Ga:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Wa:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Xa:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case qa:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case ja:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Ya:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Ka:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case $a:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Za:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Ja:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Qa:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case el:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case tl:case nl:case il:return Math.ceil(s/4)*Math.ceil(e/4)*16;case sl:case rl:return Math.ceil(s/4)*Math.ceil(e/4)*8;case ol:case al:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function yp(s){switch(s){case kn:case ku:return{byteLength:1,components:1};case sr:case Hu:case mr:return{byteLength:2,components:1};case Ml:case Sl:return{byteLength:2,components:4};case Hi:case yl:case Rn:return{byteLength:4,components:1};case Vu:case Gu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vl);function dh(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Mp(s){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const _=u[p];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var Sp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,wp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ep=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ap=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Cp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ip=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Np=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Up=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Fp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Op=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,zp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Wp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Xp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,jp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Yp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$p=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,em=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,tm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,im=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,rm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,om=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,am=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,um=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,pm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,mm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_m=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ym=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Mm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Sm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,bm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Em=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Am=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Im=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Um=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Om=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,zm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,km=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Hm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Xm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ym=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Km=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$m=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Zm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ng=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ig=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,sg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,rg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,og=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ag=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ug=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,hg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_g=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,yg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Mg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ag=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Rg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Cg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Pg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ng=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ug=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Fg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Og=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,kg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Vg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Gg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,qg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,$g=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,e0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Je={alphahash_fragment:Sp,alphahash_pars_fragment:bp,alphamap_fragment:wp,alphamap_pars_fragment:Ep,alphatest_fragment:Tp,alphatest_pars_fragment:Ap,aomap_fragment:Rp,aomap_pars_fragment:Cp,batching_pars_vertex:Pp,batching_vertex:Ip,begin_vertex:Dp,beginnormal_vertex:Lp,bsdfs:Np,iridescence_fragment:Up,bumpmap_pars_fragment:Fp,clipping_planes_fragment:Op,clipping_planes_pars_fragment:zp,clipping_planes_pars_vertex:Bp,clipping_planes_vertex:kp,color_fragment:Hp,color_pars_fragment:Vp,color_pars_vertex:Gp,color_vertex:Wp,common:Xp,cube_uv_reflection_fragment:qp,defaultnormal_vertex:jp,displacementmap_pars_vertex:Yp,displacementmap_vertex:Kp,emissivemap_fragment:$p,emissivemap_pars_fragment:Zp,colorspace_fragment:Jp,colorspace_pars_fragment:Qp,envmap_fragment:em,envmap_common_pars_fragment:tm,envmap_pars_fragment:nm,envmap_pars_vertex:im,envmap_physical_pars_fragment:pm,envmap_vertex:sm,fog_vertex:rm,fog_pars_vertex:om,fog_fragment:am,fog_pars_fragment:lm,gradientmap_pars_fragment:cm,lightmap_pars_fragment:um,lights_lambert_fragment:hm,lights_lambert_pars_fragment:dm,lights_pars_begin:fm,lights_toon_fragment:mm,lights_toon_pars_fragment:gm,lights_phong_fragment:_m,lights_phong_pars_fragment:vm,lights_physical_fragment:xm,lights_physical_pars_fragment:ym,lights_fragment_begin:Mm,lights_fragment_maps:Sm,lights_fragment_end:bm,logdepthbuf_fragment:wm,logdepthbuf_pars_fragment:Em,logdepthbuf_pars_vertex:Tm,logdepthbuf_vertex:Am,map_fragment:Rm,map_pars_fragment:Cm,map_particle_fragment:Pm,map_particle_pars_fragment:Im,metalnessmap_fragment:Dm,metalnessmap_pars_fragment:Lm,morphinstance_vertex:Nm,morphcolor_vertex:Um,morphnormal_vertex:Fm,morphtarget_pars_vertex:Om,morphtarget_vertex:zm,normal_fragment_begin:Bm,normal_fragment_maps:km,normal_pars_fragment:Hm,normal_pars_vertex:Vm,normal_vertex:Gm,normalmap_pars_fragment:Wm,clearcoat_normal_fragment_begin:Xm,clearcoat_normal_fragment_maps:qm,clearcoat_pars_fragment:jm,iridescence_pars_fragment:Ym,opaque_fragment:Km,packing:$m,premultiplied_alpha_fragment:Zm,project_vertex:Jm,dithering_fragment:Qm,dithering_pars_fragment:eg,roughnessmap_fragment:tg,roughnessmap_pars_fragment:ng,shadowmap_pars_fragment:ig,shadowmap_pars_vertex:sg,shadowmap_vertex:rg,shadowmask_pars_fragment:og,skinbase_vertex:ag,skinning_pars_vertex:lg,skinning_vertex:cg,skinnormal_vertex:ug,specularmap_fragment:hg,specularmap_pars_fragment:dg,tonemapping_fragment:fg,tonemapping_pars_fragment:pg,transmission_fragment:mg,transmission_pars_fragment:gg,uv_pars_fragment:_g,uv_pars_vertex:vg,uv_vertex:xg,worldpos_vertex:yg,background_vert:Mg,background_frag:Sg,backgroundCube_vert:bg,backgroundCube_frag:wg,cube_vert:Eg,cube_frag:Tg,depth_vert:Ag,depth_frag:Rg,distanceRGBA_vert:Cg,distanceRGBA_frag:Pg,equirect_vert:Ig,equirect_frag:Dg,linedashed_vert:Lg,linedashed_frag:Ng,meshbasic_vert:Ug,meshbasic_frag:Fg,meshlambert_vert:Og,meshlambert_frag:zg,meshmatcap_vert:Bg,meshmatcap_frag:kg,meshnormal_vert:Hg,meshnormal_frag:Vg,meshphong_vert:Gg,meshphong_frag:Wg,meshphysical_vert:Xg,meshphysical_frag:qg,meshtoon_vert:jg,meshtoon_frag:Yg,points_vert:Kg,points_frag:$g,shadow_vert:Zg,shadow_frag:Jg,sprite_vert:Qg,sprite_frag:e0},Le={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},On={basic:{uniforms:nn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:nn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new ze(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:nn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:nn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:nn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new ze(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:nn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:nn([Le.points,Le.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:nn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:nn([Le.common,Le.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:nn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:nn([Le.sprite,Le.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:nn([Le.common,Le.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:nn([Le.lights,Le.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};On.physical={uniforms:nn([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const Gr={r:0,b:0,g:0},Ri=new Mn,t0=new Ze;function n0(s,e,t,n,i,r,o){const a=new ze(0);let l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?t:e).get(v)),v}function _(x){let v=!1;const S=g(x);S===null?f(a,l):S&&S.isColor&&(f(S,1),v=!0);const E=s.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(x,v){const S=g(v);S&&(S.isCubeTexture||S.mapping===yo)?(h===void 0&&(h=new Ye(new vi(1,1,1),new jt({name:"BackgroundCubeMaterial",uniforms:ws(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Ri.copy(v.backgroundRotation),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(t0.makeRotationFromEuler(Ri)),h.material.toneMapped=st.getTransfer(S.colorSpace)!==_t,(u!==S||d!==S.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=S,d=S.version,p=s.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Ye(new Wi(2,2),new jt({name:"BackgroundMaterial",uniforms:ws(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=st.getTransfer(S.colorSpace)!==_t,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||d!==S.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,u=S,d=S.version,p=s.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function f(x,v){x.getRGB(Gr,th(s)),n.buffers.color.setClear(Gr.r,Gr.g,Gr.b,v,o)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,v=1){a.set(x),l=v,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,f(a,l)},render:_,addToRenderList:m,dispose:b}}function i0(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(M,A,D,L,z){let O=!1;const F=u(L,D,A);r!==F&&(r=F,c(r.object)),O=p(M,L,D,z),O&&g(M,L,D,z),z!==null&&e.update(z,s.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,v(M,A,D,L),z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return s.createVertexArray()}function c(M){return s.bindVertexArray(M)}function h(M){return s.deleteVertexArray(M)}function u(M,A,D){const L=D.wireframe===!0;let z=n[M.id];z===void 0&&(z={},n[M.id]=z);let O=z[A.id];O===void 0&&(O={},z[A.id]=O);let F=O[L];return F===void 0&&(F=d(l()),O[L]=F),F}function d(M){const A=[],D=[],L=[];for(let z=0;z<t;z++)A[z]=0,D[z]=0,L[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:D,attributeDivisors:L,object:M,attributes:{},index:null}}function p(M,A,D,L){const z=r.attributes,O=A.attributes;let F=0;const W=D.getAttributes();for(const V in W)if(W[V].location>=0){const se=z[V];let he=O[V];if(he===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(he=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(he=M.instanceColor)),se===void 0||se.attribute!==he||he&&se.data!==he.data)return!0;F++}return r.attributesNum!==F||r.index!==L}function g(M,A,D,L){const z={},O=A.attributes;let F=0;const W=D.getAttributes();for(const V in W)if(W[V].location>=0){let se=O[V];se===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(se=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(se=M.instanceColor));const he={};he.attribute=se,se&&se.data&&(he.data=se.data),z[V]=he,F++}r.attributes=z,r.attributesNum=F,r.index=L}function _(){const M=r.newAttributes;for(let A=0,D=M.length;A<D;A++)M[A]=0}function m(M){f(M,0)}function f(M,A){const D=r.newAttributes,L=r.enabledAttributes,z=r.attributeDivisors;D[M]=1,L[M]===0&&(s.enableVertexAttribArray(M),L[M]=1),z[M]!==A&&(s.vertexAttribDivisor(M,A),z[M]=A)}function b(){const M=r.newAttributes,A=r.enabledAttributes;for(let D=0,L=A.length;D<L;D++)A[D]!==M[D]&&(s.disableVertexAttribArray(D),A[D]=0)}function x(M,A,D,L,z,O,F){F===!0?s.vertexAttribIPointer(M,A,D,z,O):s.vertexAttribPointer(M,A,D,L,z,O)}function v(M,A,D,L){_();const z=L.attributes,O=D.getAttributes(),F=A.defaultAttributeValues;for(const W in O){const V=O[W];if(V.location>=0){let Q=z[W];if(Q===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(Q=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(Q=M.instanceColor)),Q!==void 0){const se=Q.normalized,he=Q.itemSize,Me=e.get(Q);if(Me===void 0)continue;const j=Me.buffer,te=Me.type,ue=Me.bytesPerElement,B=te===s.INT||te===s.UNSIGNED_INT||Q.gpuType===yl;if(Q.isInterleavedBufferAttribute){const X=Q.data,pe=X.stride,K=Q.offset;if(X.isInstancedInterleavedBuffer){for(let Z=0;Z<V.locationSize;Z++)f(V.location+Z,X.meshPerAttribute);M.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let Z=0;Z<V.locationSize;Z++)m(V.location+Z);s.bindBuffer(s.ARRAY_BUFFER,j);for(let Z=0;Z<V.locationSize;Z++)x(V.location+Z,he/V.locationSize,te,se,pe*ue,(K+he/V.locationSize*Z)*ue,B)}else{if(Q.isInstancedBufferAttribute){for(let X=0;X<V.locationSize;X++)f(V.location+X,Q.meshPerAttribute);M.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let X=0;X<V.locationSize;X++)m(V.location+X);s.bindBuffer(s.ARRAY_BUFFER,j);for(let X=0;X<V.locationSize;X++)x(V.location+X,he/V.locationSize,te,se,he*ue,he/V.locationSize*X*ue,B)}}else if(F!==void 0){const se=F[W];if(se!==void 0)switch(se.length){case 2:s.vertexAttrib2fv(V.location,se);break;case 3:s.vertexAttrib3fv(V.location,se);break;case 4:s.vertexAttrib4fv(V.location,se);break;default:s.vertexAttrib1fv(V.location,se)}}}}b()}function S(){C();for(const M in n){const A=n[M];for(const D in A){const L=A[D];for(const z in L)h(L[z].object),delete L[z];delete A[D]}delete n[M]}}function E(M){if(n[M.id]===void 0)return;const A=n[M.id];for(const D in A){const L=A[D];for(const z in L)h(L[z].object),delete L[z];delete A[D]}delete n[M.id]}function w(M){for(const A in n){const D=n[A];if(D[M.id]===void 0)continue;const L=D[M.id];for(const z in L)h(L[z].object),delete L[z];delete D[M.id]}}function C(){y(),o=!0,r!==i&&(r=i,c(r.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:y,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:b}}function s0(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];t.update(p,n,1)}function l(c,h,u,d){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function r0(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){return!(w!==pn&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const C=w===mr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==kn&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Rn&&!C)}function l(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),x=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),S=g>0,E=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:b,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:S,maxSamples:E}}function o0(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new pi,a=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||i;return i=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const b=r?0:n,x=b*4;let v=f.clippingState||null;l.value=v,v=h(g,d,x,p);for(let S=0;S!==x;++S)v[S]=t[S];f.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<f)&&(m=new Float32Array(f));for(let x=0,v=p;x!==_;++x,v+=4)o.copy(u[x]).applyMatrix4(b,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function a0(s){let e=new WeakMap;function t(o,a){return a===Da?o.mapping=Ms:a===La&&(o.mapping=Ss),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Da||a===La)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new wf(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const ps=4,Gc=[.125,.215,.35,.446,.526,.582],Fi=20,sa=new Bl,Wc=new ze;let ra=null,oa=0,aa=0,la=!1;const Li=(1+Math.sqrt(5))/2,ls=1/Li,Xc=[new N(-Li,ls,0),new N(Li,ls,0),new N(-ls,0,Li),new N(ls,0,Li),new N(0,Li,-ls),new N(0,Li,ls),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],l0=new N;class qc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){const{size:o=256,position:a=l0}=r;ra=this._renderer.getRenderTarget(),oa=this._renderer.getActiveCubeFace(),aa=this._renderer.getActiveMipmapLevel(),la=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ra,oa,aa),this._renderer.xr.enabled=la,e.scissorTest=!1,Wr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ms||e.mapping===Ss?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ra=this._renderer.getRenderTarget(),oa=this._renderer.getActiveCubeFace(),aa=this._renderer.getActiveMipmapLevel(),la=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:mr,format:pn,colorSpace:on,depthBuffer:!1},i=jc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jc(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=c0(r)),this._blurMaterial=u0(r,e,t)}return i}_compileMaterial(e){const t=new Ye(this._lodPlanes[0],e);this._renderer.compile(t,sa)}_sceneToCubeUV(e,t,n,i,r){const l=new sn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(Wc),u.toneMapping=_i,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null));const _=new Wt({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1}),m=new Ye(new vi,_);let f=!1;const b=e.background;b?b.isColor&&(_.color.copy(b),e.background=null,f=!0):(_.color.copy(Wc),f=!0);for(let x=0;x<6;x++){const v=x%3;v===0?(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[x],r.y,r.z)):v===1?(l.up.set(0,0,c[x]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[x],r.z)):(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[x]));const S=this._cubeSize;Wr(i,v*S,x>2?S:0,S,S),u.setRenderTarget(i),f&&u.render(m,l),u.render(e,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=p,u.autoClear=d,e.background=b}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ms||e.mapping===Ss;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yc());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Ye(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Wr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,sa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Xc[(i-r-1)%Xc.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ye(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Fi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Fi;m>Fi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Fi}`);const f=[];let b=0;for(let w=0;w<Fi;++w){const C=w/_,y=Math.exp(-C*C/2);f.push(y),w===0?b+=y:w<m&&(b+=2*y)}for(let w=0;w<f.length;w++)f[w]=f[w]/b;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const v=this._sizeLods[i],S=3*v*(i>x-ps?i-x+ps:0),E=4*(this._cubeSize-v);Wr(t,S,E,3*v,2*v),l.setRenderTarget(t),l.render(u,sa)}}function c0(s){const e=[],t=[],n=[];let i=s;const r=s-ps+1+Gc.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-ps?l=Gc[o-s+ps-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,f=1,b=new Float32Array(_*g*p),x=new Float32Array(m*g*p),v=new Float32Array(f*g*p);for(let E=0;E<p;E++){const w=E%3*2/3-1,C=E>2?0:-1,y=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];b.set(y,_*g*E),x.set(d,m*g*E);const M=[E,E,E,E,E,E];v.set(M,f*g*E)}const S=new St;S.setAttribute("position",new Mt(b,_)),S.setAttribute("uv",new Mt(x,m)),S.setAttribute("faceIndex",new Mt(v,f)),e.push(S),i>ps&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function jc(s,e,t){const n=new Vi(s,e,t);return n.texture.mapping=yo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Wr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function u0(s,e,t){const n=new Float32Array(Fi),i=new N(0,1,0);return new jt({name:"SphericalGaussianBlur",defines:{n:Fi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Yc(){return new jt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Kc(){return new jt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Vl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function h0(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Da||l===La,h=l===Ms||l===Ss;if(c||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new qc(s)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&i(p)?(t===null&&(t=new qc(s)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function d0(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&hr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function f0(s,e,t,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const p in d)e.update(d[p],s.ARRAY_BUFFER)}function c(u){const d=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const b=p.array;_=p.version;for(let x=0,v=b.length;x<v;x+=3){const S=b[x+0],E=b[x+1],w=b[x+2];d.push(S,E,E,w,w,S)}}else if(g!==void 0){const b=g.array;_=g.version;for(let x=0,v=b.length/3-1;x<v;x+=3){const S=x+0,E=x+1,w=x+2;d.push(S,E,E,w,w,S)}}else return;const m=new($u(d)?eh:Qu)(d,1);m.version=_;const f=r.get(u);f&&e.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function p0(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){s.drawElements(n,p,r,d*o),t.update(p,n,1)}function c(d,p,g){g!==0&&(s.drawElementsInstanced(n,p,r,d*o,g),t.update(p,n,g))}function h(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,n,1)}function u(d,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,_,0,g);let f=0;for(let b=0;b<g;b++)f+=p[b]*_[b];t.update(f,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function m0(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function g0(s,e,t){const n=new WeakMap,i=new rt;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let y=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",y)};d!==void 0&&d.texture.dispose();const p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let x=0;p===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let v=a.attributes.position.count*x,S=1;v>e.maxTextureSize&&(S=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const E=new Float32Array(v*S*4*u),w=new Zu(E,v,S,u);w.type=Rn,w.needsUpdate=!0;const C=x*4;for(let M=0;M<u;M++){const A=m[M],D=f[M],L=b[M],z=v*S*4*M;for(let O=0;O<A.count;O++){const F=O*C;p===!0&&(i.fromBufferAttribute(A,O),E[z+F+0]=i.x,E[z+F+1]=i.y,E[z+F+2]=i.z,E[z+F+3]=0),g===!0&&(i.fromBufferAttribute(D,O),E[z+F+4]=i.x,E[z+F+5]=i.y,E[z+F+6]=i.z,E[z+F+7]=0),_===!0&&(i.fromBufferAttribute(L,O),E[z+F+8]=i.x,E[z+F+9]=i.y,E[z+F+10]=i.z,E[z+F+11]=L.itemSize===4?i.w:1)}}d={count:u,texture:w,size:new ke(v,S)},n.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];const g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function _0(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const fh=new Bt,$c=new rh(1,1),ph=new Zu,mh=new af,gh=new ih,Zc=[],Jc=[],Qc=new Float32Array(16),eu=new Float32Array(9),tu=new Float32Array(4);function Us(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Zc[i];if(r===void 0&&(r=new Float32Array(i),Zc[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function kt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Ht(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Ao(s,e){let t=Jc[e];t===void 0&&(t=new Int32Array(e),Jc[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function v0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function x0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;s.uniform2fv(this.addr,e),Ht(t,e)}}function y0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;s.uniform3fv(this.addr,e),Ht(t,e)}}function M0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;s.uniform4fv(this.addr,e),Ht(t,e)}}function S0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(kt(t,n))return;tu.set(n),s.uniformMatrix2fv(this.addr,!1,tu),Ht(t,n)}}function b0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(kt(t,n))return;eu.set(n),s.uniformMatrix3fv(this.addr,!1,eu),Ht(t,n)}}function w0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(kt(t,n))return;Qc.set(n),s.uniformMatrix4fv(this.addr,!1,Qc),Ht(t,n)}}function E0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function T0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;s.uniform2iv(this.addr,e),Ht(t,e)}}function A0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;s.uniform3iv(this.addr,e),Ht(t,e)}}function R0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;s.uniform4iv(this.addr,e),Ht(t,e)}}function C0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function P0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;s.uniform2uiv(this.addr,e),Ht(t,e)}}function I0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;s.uniform3uiv(this.addr,e),Ht(t,e)}}function D0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;s.uniform4uiv(this.addr,e),Ht(t,e)}}function L0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?($c.compareFunction=Ku,r=$c):r=fh,t.setTexture2D(e||r,i)}function N0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||mh,i)}function U0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||gh,i)}function F0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||ph,i)}function O0(s){switch(s){case 5126:return v0;case 35664:return x0;case 35665:return y0;case 35666:return M0;case 35674:return S0;case 35675:return b0;case 35676:return w0;case 5124:case 35670:return E0;case 35667:case 35671:return T0;case 35668:case 35672:return A0;case 35669:case 35673:return R0;case 5125:return C0;case 36294:return P0;case 36295:return I0;case 36296:return D0;case 35678:case 36198:case 36298:case 36306:case 35682:return L0;case 35679:case 36299:case 36307:return N0;case 35680:case 36300:case 36308:case 36293:return U0;case 36289:case 36303:case 36311:case 36292:return F0}}function z0(s,e){s.uniform1fv(this.addr,e)}function B0(s,e){const t=Us(e,this.size,2);s.uniform2fv(this.addr,t)}function k0(s,e){const t=Us(e,this.size,3);s.uniform3fv(this.addr,t)}function H0(s,e){const t=Us(e,this.size,4);s.uniform4fv(this.addr,t)}function V0(s,e){const t=Us(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function G0(s,e){const t=Us(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function W0(s,e){const t=Us(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function X0(s,e){s.uniform1iv(this.addr,e)}function q0(s,e){s.uniform2iv(this.addr,e)}function j0(s,e){s.uniform3iv(this.addr,e)}function Y0(s,e){s.uniform4iv(this.addr,e)}function K0(s,e){s.uniform1uiv(this.addr,e)}function $0(s,e){s.uniform2uiv(this.addr,e)}function Z0(s,e){s.uniform3uiv(this.addr,e)}function J0(s,e){s.uniform4uiv(this.addr,e)}function Q0(s,e,t){const n=this.cache,i=e.length,r=Ao(t,i);kt(n,r)||(s.uniform1iv(this.addr,r),Ht(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||fh,r[o])}function e_(s,e,t){const n=this.cache,i=e.length,r=Ao(t,i);kt(n,r)||(s.uniform1iv(this.addr,r),Ht(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||mh,r[o])}function t_(s,e,t){const n=this.cache,i=e.length,r=Ao(t,i);kt(n,r)||(s.uniform1iv(this.addr,r),Ht(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||gh,r[o])}function n_(s,e,t){const n=this.cache,i=e.length,r=Ao(t,i);kt(n,r)||(s.uniform1iv(this.addr,r),Ht(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||ph,r[o])}function i_(s){switch(s){case 5126:return z0;case 35664:return B0;case 35665:return k0;case 35666:return H0;case 35674:return V0;case 35675:return G0;case 35676:return W0;case 5124:case 35670:return X0;case 35667:case 35671:return q0;case 35668:case 35672:return j0;case 35669:case 35673:return Y0;case 5125:return K0;case 36294:return $0;case 36295:return Z0;case 36296:return J0;case 35678:case 36198:case 36298:case 36306:case 35682:return Q0;case 35679:case 36299:case 36307:return e_;case 35680:case 36300:case 36308:case 36293:return t_;case 36289:case 36303:case 36311:case 36292:return n_}}class s_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=O0(t.type)}}class r_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=i_(t.type)}}class o_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const ca=/(\w+)(\])?(\[|\.)?/g;function nu(s,e){s.seq.push(e),s.map[e.id]=e}function a_(s,e,t){const n=s.name,i=n.length;for(ca.lastIndex=0;;){const r=ca.exec(n),o=ca.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){nu(t,c===void 0?new s_(a,s,e):new r_(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new o_(a),nu(t,u)),t=u}}}class oo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);a_(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function iu(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const l_=37297;let c_=0;function u_(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const su=new $e;function h_(s){st._getMatrix(su,st.workingColorSpace,s);const e=`mat3( ${su.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(s)){case fo:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function ru(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+u_(s.getShaderSource(e),a)}else return r}function d_(s,e){const t=h_(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function f_(s,e){let t;switch(e){case md:t="Linear";break;case gd:t="Reinhard";break;case _d:t="Cineon";break;case vd:t="ACESFilmic";break;case yd:t="AgX";break;case Md:t="Neutral";break;case xd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Xr=new N;function p_(){st.getLuminanceCoefficients(Xr);const s=Xr.x.toFixed(4),e=Xr.y.toFixed(4),t=Xr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function m_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qs).join(`
`)}function g_(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function __(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Qs(s){return s!==""}function ou(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function au(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const v_=/^[ \t]*#include +<([\w\d./]+)>/gm;function fl(s){return s.replace(v_,y_)}const x_=new Map;function y_(s,e){let t=Je[e];if(t===void 0){const n=x_.get(e);if(n!==void 0)t=Je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return fl(t)}const M_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lu(s){return s.replace(M_,S_)}function S_(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function cu(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function b_(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Fu?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Ou?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===$n&&(e="SHADOWMAP_TYPE_VSM"),e}function w_(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ms:case Ss:e="ENVMAP_TYPE_CUBE";break;case yo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function E_(s){let e="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===Ss&&(e="ENVMAP_MODE_REFRACTION"),e}function T_(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case xl:e="ENVMAP_BLENDING_MULTIPLY";break;case fd:e="ENVMAP_BLENDING_MIX";break;case pd:e="ENVMAP_BLENDING_ADD";break}return e}function A_(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function R_(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=b_(t),c=w_(t),h=E_(t),u=T_(t),d=A_(t),p=m_(t),g=g_(r),_=i.createProgram();let m,f,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Qs).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Qs).join(`
`),f.length>0&&(f+=`
`)):(m=[cu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qs).join(`
`),f=[cu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_i?"#define TONE_MAPPING":"",t.toneMapping!==_i?Je.tonemapping_pars_fragment:"",t.toneMapping!==_i?f_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,d_("linearToOutputTexel",t.outputColorSpace),p_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qs).join(`
`)),o=fl(o),o=ou(o,t),o=au(o,t),a=fl(a),a=ou(a,t),a=au(a,t),o=lu(o),a=lu(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===nc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=b+m+o,v=b+f+a,S=iu(i,i.VERTEX_SHADER,x),E=iu(i,i.FRAGMENT_SHADER,v);i.attachShader(_,S),i.attachShader(_,E),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function w(A){if(s.debug.checkShaderErrors){const D=i.getProgramInfoLog(_)||"",L=i.getShaderInfoLog(S)||"",z=i.getShaderInfoLog(E)||"",O=D.trim(),F=L.trim(),W=z.trim();let V=!0,Q=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,S,E);else{const se=ru(i,S,"vertex"),he=ru(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+O+`
`+se+`
`+he)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(F===""||W==="")&&(Q=!1);Q&&(A.diagnostics={runnable:V,programLog:O,vertexShader:{log:F,prefix:m},fragmentShader:{log:W,prefix:f}})}i.deleteShader(S),i.deleteShader(E),C=new oo(i,_),y=__(i,_)}let C;this.getUniforms=function(){return C===void 0&&w(this),C};let y;this.getAttributes=function(){return y===void 0&&w(this),y};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(_,l_)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=c_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=E,this}let C_=0;class P_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new I_(e),t.set(e,n)),n}}class I_{constructor(e){this.id=C_++,this.code=e,this.usedTimes=0}}function D_(s,e,t,n,i,r,o){const a=new Il,l=new P_,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,M,A,D,L){const z=D.fog,O=L.geometry,F=y.isMeshStandardMaterial?D.environment:null,W=(y.isMeshStandardMaterial?t:e).get(y.envMap||F),V=W&&W.mapping===yo?W.image.height:null,Q=g[y.type];y.precision!==null&&(p=i.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const se=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,he=se!==void 0?se.length:0;let Me=0;O.morphAttributes.position!==void 0&&(Me=1),O.morphAttributes.normal!==void 0&&(Me=2),O.morphAttributes.color!==void 0&&(Me=3);let j,te,ue,B;if(Q){const Ke=On[Q];j=Ke.vertexShader,te=Ke.fragmentShader}else j=y.vertexShader,te=y.fragmentShader,l.update(y),ue=l.getVertexShaderID(y),B=l.getFragmentShaderID(y);const X=s.getRenderTarget(),pe=s.state.buffers.depth.getReversed(),K=L.isInstancedMesh===!0,Z=L.isBatchedMesh===!0,J=!!y.map,le=!!y.matcap,P=!!W,oe=!!y.aoMap,ce=!!y.lightMap,Se=!!y.bumpMap,re=!!y.normalMap,Ie=!!y.displacementMap,de=!!y.emissiveMap,ve=!!y.metalnessMap,He=!!y.roughnessMap,We=y.anisotropy>0,I=y.clearcoat>0,T=y.dispersion>0,U=y.iridescence>0,H=y.sheen>0,ee=y.transmission>0,G=We&&!!y.anisotropyMap,me=I&&!!y.clearcoatMap,fe=I&&!!y.clearcoatNormalMap,Ee=I&&!!y.clearcoatRoughnessMap,xe=U&&!!y.iridescenceMap,ye=U&&!!y.iridescenceThicknessMap,ge=H&&!!y.sheenColorMap,Te=H&&!!y.sheenRoughnessMap,Re=!!y.specularMap,Ce=!!y.specularColorMap,De=!!y.specularIntensityMap,k=ee&&!!y.transmissionMap,we=ee&&!!y.thicknessMap,Pe=!!y.gradientMap,Ue=!!y.alphaMap,be=y.alphaTest>0,_e=!!y.alphaHash,$=!!y.extensions;let ae=_i;y.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(ae=s.toneMapping);const Fe={shaderID:Q,shaderType:y.type,shaderName:y.name,vertexShader:j,fragmentShader:te,defines:y.defines,customVertexShaderID:ue,customFragmentShaderID:B,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Z,batchingColor:Z&&L._colorsTexture!==null,instancing:K,instancingColor:K&&L.instanceColor!==null,instancingMorph:K&&L.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:X===null?s.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:on,alphaToCoverage:!!y.alphaToCoverage,map:J,matcap:le,envMap:P,envMapMode:P&&W.mapping,envMapCubeUVHeight:V,aoMap:oe,lightMap:ce,bumpMap:Se,normalMap:re,displacementMap:d&&Ie,emissiveMap:de,normalMapObjectSpace:re&&y.normalMapType===Cd,normalMapTangentSpace:re&&y.normalMapType===Rl,metalnessMap:ve,roughnessMap:He,anisotropy:We,anisotropyMap:G,clearcoat:I,clearcoatMap:me,clearcoatNormalMap:fe,clearcoatRoughnessMap:Ee,dispersion:T,iridescence:U,iridescenceMap:xe,iridescenceThicknessMap:ye,sheen:H,sheenColorMap:ge,sheenRoughnessMap:Te,specularMap:Re,specularColorMap:Ce,specularIntensityMap:De,transmission:ee,transmissionMap:k,thicknessMap:we,gradientMap:Pe,opaque:y.transparent===!1&&y.blending===gs&&y.alphaToCoverage===!1,alphaMap:Ue,alphaTest:be,alphaHash:_e,combine:y.combine,mapUv:J&&_(y.map.channel),aoMapUv:oe&&_(y.aoMap.channel),lightMapUv:ce&&_(y.lightMap.channel),bumpMapUv:Se&&_(y.bumpMap.channel),normalMapUv:re&&_(y.normalMap.channel),displacementMapUv:Ie&&_(y.displacementMap.channel),emissiveMapUv:de&&_(y.emissiveMap.channel),metalnessMapUv:ve&&_(y.metalnessMap.channel),roughnessMapUv:He&&_(y.roughnessMap.channel),anisotropyMapUv:G&&_(y.anisotropyMap.channel),clearcoatMapUv:me&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:fe&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Te&&_(y.sheenRoughnessMap.channel),specularMapUv:Re&&_(y.specularMap.channel),specularColorMapUv:Ce&&_(y.specularColorMap.channel),specularIntensityMapUv:De&&_(y.specularIntensityMap.channel),transmissionMapUv:k&&_(y.transmissionMap.channel),thicknessMapUv:we&&_(y.thicknessMap.channel),alphaMapUv:Ue&&_(y.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(re||We),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!O.attributes.uv&&(J||Ue),fog:!!z,useFog:y.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:pe,skinning:L.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:Me,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&A.length>0,shadowMapType:s.shadowMap.type,toneMapping:ae,decodeVideoTexture:J&&y.map.isVideoTexture===!0&&st.getTransfer(y.map.colorSpace)===_t,decodeVideoTextureEmissive:de&&y.emissiveMap.isVideoTexture===!0&&st.getTransfer(y.emissiveMap.colorSpace)===_t,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===wt,flipSided:y.side===Qt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:$&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($&&y.extensions.multiDraw===!0||Z)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Fe.vertexUv1s=c.has(1),Fe.vertexUv2s=c.has(2),Fe.vertexUv3s=c.has(3),c.clear(),Fe}function f(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const A in y.defines)M.push(A),M.push(y.defines[A]);return y.isRawShaderMaterial===!1&&(b(M,y),x(M,y),M.push(s.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function b(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function x(y,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),y.push(a.mask)}function v(y){const M=g[y.type];let A;if(M){const D=On[M];A=yf.clone(D.uniforms)}else A=y.uniforms;return A}function S(y,M){let A;for(let D=0,L=h.length;D<L;D++){const z=h[D];if(z.cacheKey===M){A=z,++A.usedTimes;break}}return A===void 0&&(A=new R_(s,M,y,r),h.push(A)),A}function E(y){if(--y.usedTimes===0){const M=h.indexOf(y);h[M]=h[h.length-1],h.pop(),y.destroy()}}function w(y){l.remove(y)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:v,acquireProgram:S,releaseProgram:E,releaseShaderCache:w,programs:h,dispose:C}}function L_(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function N_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function uu(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function hu(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,p,g,_,m){let f=s[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),e++,f}function a(u,d,p,g,_,m){const f=o(u,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):t.push(f)}function l(u,d,p,g,_,m){const f=o(u,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):t.unshift(f)}function c(u,d){t.length>1&&t.sort(u||N_),n.length>1&&n.sort(d||uu),i.length>1&&i.sort(d||uu)}function h(){for(let u=e,d=s.length;u<d;u++){const p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function U_(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new hu,s.set(n,[o])):i>=r.length?(o=new hu,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function F_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new ze};break;case"SpotLight":t={position:new N,direction:new N,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new N,halfWidth:new N,halfHeight:new N};break}return s[e.id]=t,t}}}function O_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let z_=0;function B_(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function k_(s){const e=new F_,t=O_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);const i=new N,r=new Ze,o=new Ze;function a(c){let h=0,u=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,b=0,x=0,v=0,S=0,E=0,w=0;c.sort(B_);for(let y=0,M=c.length;y<M;y++){const A=c[y],D=A.color,L=A.intensity,z=A.distance,O=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=D.r*L,u+=D.g*L,d+=D.b*L;else if(A.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(A.sh.coefficients[F],L);w++}else if(A.isDirectionalLight){const F=e.get(A);if(F.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const W=A.shadow,V=t.get(A);V.shadowIntensity=W.intensity,V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=O,n.directionalShadowMatrix[p]=A.shadow.matrix,b++}n.directional[p]=F,p++}else if(A.isSpotLight){const F=e.get(A);F.position.setFromMatrixPosition(A.matrixWorld),F.color.copy(D).multiplyScalar(L),F.distance=z,F.coneCos=Math.cos(A.angle),F.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),F.decay=A.decay,n.spot[_]=F;const W=A.shadow;if(A.map&&(n.spotLightMap[S]=A.map,S++,W.updateMatrices(A),A.castShadow&&E++),n.spotLightMatrix[_]=W.matrix,A.castShadow){const V=t.get(A);V.shadowIntensity=W.intensity,V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=O,v++}_++}else if(A.isRectAreaLight){const F=e.get(A);F.color.copy(D).multiplyScalar(L),F.halfWidth.set(A.width*.5,0,0),F.halfHeight.set(0,A.height*.5,0),n.rectArea[m]=F,m++}else if(A.isPointLight){const F=e.get(A);if(F.color.copy(A.color).multiplyScalar(A.intensity),F.distance=A.distance,F.decay=A.decay,A.castShadow){const W=A.shadow,V=t.get(A);V.shadowIntensity=W.intensity,V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,V.shadowCameraNear=W.camera.near,V.shadowCameraFar=W.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=O,n.pointShadowMatrix[g]=A.shadow.matrix,x++}n.point[g]=F,g++}else if(A.isHemisphereLight){const F=e.get(A);F.skyColor.copy(A.color).multiplyScalar(L),F.groundColor.copy(A.groundColor).multiplyScalar(L),n.hemi[f]=F,f++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Le.LTC_FLOAT_1,n.rectAreaLTC2=Le.LTC_FLOAT_2):(n.rectAreaLTC1=Le.LTC_HALF_1,n.rectAreaLTC2=Le.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==p||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==f||C.numDirectionalShadows!==b||C.numPointShadows!==x||C.numSpotShadows!==v||C.numSpotMaps!==S||C.numLightProbes!==w)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+S-E,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=w,C.directionalLength=p,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=f,C.numDirectionalShadows=b,C.numPointShadows=x,C.numSpotShadows=v,C.numSpotMaps=S,C.numLightProbes=w,n.version=z_++)}function l(c,h){let u=0,d=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let f=0,b=c.length;f<b;f++){const x=c[f];if(x.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),u++}else if(x.isSpotLight){const v=n.spot[p];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function du(s){const e=new k_(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function H_(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new du(s),e.set(i,[a])):r>=o.length?(a=new du(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const V_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,G_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function W_(s,e,t){let n=new So;const i=new ke,r=new ke,o=new rt,a=new Bf({depthPacking:Rd}),l=new kf,c={},h=t.maxTextureSize,u={[ti]:Qt,[Qt]:ti,[wt]:wt},d=new jt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:V_,fragmentShader:G_}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new St;g.setAttribute("position",new Mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ye(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fu;let f=this.type;this.render=function(E,w,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const y=s.getRenderTarget(),M=s.getActiveCubeFace(),A=s.getActiveMipmapLevel(),D=s.state;D.setBlending(gi),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const L=f!==$n&&this.type===$n,z=f===$n&&this.type!==$n;for(let O=0,F=E.length;O<F;O++){const W=E[O],V=W.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const Q=V.getFrameExtents();if(i.multiply(Q),r.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/Q.x),i.x=r.x*Q.x,V.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/Q.y),i.y=r.y*Q.y,V.mapSize.y=r.y)),V.map===null||L===!0||z===!0){const he=this.type!==$n?{minFilter:qt,magFilter:qt}:{};V.map!==null&&V.map.dispose(),V.map=new Vi(i.x,i.y,he),V.map.texture.name=W.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const se=V.getViewportCount();for(let he=0;he<se;he++){const Me=V.getViewport(he);o.set(r.x*Me.x,r.y*Me.y,r.x*Me.z,r.y*Me.w),D.viewport(o),V.updateMatrices(W,he),n=V.getFrustum(),v(w,C,V.camera,W,this.type)}V.isPointLightShadow!==!0&&this.type===$n&&b(V,C),V.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(y,M,A)};function b(E,w){const C=e.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Vi(i.x,i.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(w,null,C,d,_,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(w,null,C,p,_,null)}function x(E,w,C,y){let M=null;const A=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(A!==void 0)M=A;else if(M=C.isPointLight===!0?l:a,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const D=M.uuid,L=w.uuid;let z=c[D];z===void 0&&(z={},c[D]=z);let O=z[L];O===void 0&&(O=M.clone(),z[L]=O,w.addEventListener("dispose",S)),M=O}if(M.visible=w.visible,M.wireframe=w.wireframe,y===$n?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:u[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const D=s.properties.get(M);D.light=C}return M}function v(E,w,C,y,M){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===$n)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);const L=e.update(E),z=E.material;if(Array.isArray(z)){const O=L.groups;for(let F=0,W=O.length;F<W;F++){const V=O[F],Q=z[V.materialIndex];if(Q&&Q.visible){const se=x(E,Q,y,M);E.onBeforeShadow(s,E,w,C,L,se,V),s.renderBufferDirect(C,null,L,se,E,V),E.onAfterShadow(s,E,w,C,L,se,V)}}}else if(z.visible){const O=x(E,z,y,M);E.onBeforeShadow(s,E,w,C,L,O,null),s.renderBufferDirect(C,null,L,O,E,null),E.onAfterShadow(s,E,w,C,L,O,null)}}const D=E.children;for(let L=0,z=D.length;L<z;L++)v(D[L],w,C,y,M)}function S(E){E.target.removeEventListener("dispose",S);for(const C in c){const y=c[C],M=E.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}const X_={[Ea]:Ta,[Aa]:Pa,[Ra]:Ia,[ys]:Ca,[Ta]:Ea,[Pa]:Aa,[Ia]:Ra,[Ca]:ys};function q_(s,e){function t(){let k=!1;const we=new rt;let Pe=null;const Ue=new rt(0,0,0,0);return{setMask:function(be){Pe!==be&&!k&&(s.colorMask(be,be,be,be),Pe=be)},setLocked:function(be){k=be},setClear:function(be,_e,$,ae,Fe){Fe===!0&&(be*=ae,_e*=ae,$*=ae),we.set(be,_e,$,ae),Ue.equals(we)===!1&&(s.clearColor(be,_e,$,ae),Ue.copy(we))},reset:function(){k=!1,Pe=null,Ue.set(-1,0,0,0)}}}function n(){let k=!1,we=!1,Pe=null,Ue=null,be=null;return{setReversed:function(_e){if(we!==_e){const $=e.get("EXT_clip_control");_e?$.clipControlEXT($.LOWER_LEFT_EXT,$.ZERO_TO_ONE_EXT):$.clipControlEXT($.LOWER_LEFT_EXT,$.NEGATIVE_ONE_TO_ONE_EXT),we=_e;const ae=be;be=null,this.setClear(ae)}},getReversed:function(){return we},setTest:function(_e){_e?X(s.DEPTH_TEST):pe(s.DEPTH_TEST)},setMask:function(_e){Pe!==_e&&!k&&(s.depthMask(_e),Pe=_e)},setFunc:function(_e){if(we&&(_e=X_[_e]),Ue!==_e){switch(_e){case Ea:s.depthFunc(s.NEVER);break;case Ta:s.depthFunc(s.ALWAYS);break;case Aa:s.depthFunc(s.LESS);break;case ys:s.depthFunc(s.LEQUAL);break;case Ra:s.depthFunc(s.EQUAL);break;case Ca:s.depthFunc(s.GEQUAL);break;case Pa:s.depthFunc(s.GREATER);break;case Ia:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ue=_e}},setLocked:function(_e){k=_e},setClear:function(_e){be!==_e&&(we&&(_e=1-_e),s.clearDepth(_e),be=_e)},reset:function(){k=!1,Pe=null,Ue=null,be=null,we=!1}}}function i(){let k=!1,we=null,Pe=null,Ue=null,be=null,_e=null,$=null,ae=null,Fe=null;return{setTest:function(Ke){k||(Ke?X(s.STENCIL_TEST):pe(s.STENCIL_TEST))},setMask:function(Ke){we!==Ke&&!k&&(s.stencilMask(Ke),we=Ke)},setFunc:function(Ke,at,lt){(Pe!==Ke||Ue!==at||be!==lt)&&(s.stencilFunc(Ke,at,lt),Pe=Ke,Ue=at,be=lt)},setOp:function(Ke,at,lt){(_e!==Ke||$!==at||ae!==lt)&&(s.stencilOp(Ke,at,lt),_e=Ke,$=at,ae=lt)},setLocked:function(Ke){k=Ke},setClear:function(Ke){Fe!==Ke&&(s.clearStencil(Ke),Fe=Ke)},reset:function(){k=!1,we=null,Pe=null,Ue=null,be=null,_e=null,$=null,ae=null,Fe=null}}}const r=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,b=null,x=null,v=null,S=null,E=null,w=new ze(0,0,0),C=0,y=!1,M=null,A=null,D=null,L=null,z=null;const O=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,W=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(V)[1]),F=W>=1):V.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),F=W>=2);let Q=null,se={};const he=s.getParameter(s.SCISSOR_BOX),Me=s.getParameter(s.VIEWPORT),j=new rt().fromArray(he),te=new rt().fromArray(Me);function ue(k,we,Pe,Ue){const be=new Uint8Array(4),_e=s.createTexture();s.bindTexture(k,_e),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let $=0;$<Pe;$++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(we,0,s.RGBA,1,1,Ue,0,s.RGBA,s.UNSIGNED_BYTE,be):s.texImage2D(we+$,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,be);return _e}const B={};B[s.TEXTURE_2D]=ue(s.TEXTURE_2D,s.TEXTURE_2D,1),B[s.TEXTURE_CUBE_MAP]=ue(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),B[s.TEXTURE_2D_ARRAY]=ue(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),B[s.TEXTURE_3D]=ue(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),X(s.DEPTH_TEST),o.setFunc(ys),Se(!1),re(Zl),X(s.CULL_FACE),oe(gi);function X(k){h[k]!==!0&&(s.enable(k),h[k]=!0)}function pe(k){h[k]!==!1&&(s.disable(k),h[k]=!1)}function K(k,we){return u[k]!==we?(s.bindFramebuffer(k,we),u[k]=we,k===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=we),k===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=we),!0):!1}function Z(k,we){let Pe=p,Ue=!1;if(k){Pe=d.get(we),Pe===void 0&&(Pe=[],d.set(we,Pe));const be=k.textures;if(Pe.length!==be.length||Pe[0]!==s.COLOR_ATTACHMENT0){for(let _e=0,$=be.length;_e<$;_e++)Pe[_e]=s.COLOR_ATTACHMENT0+_e;Pe.length=be.length,Ue=!0}}else Pe[0]!==s.BACK&&(Pe[0]=s.BACK,Ue=!0);Ue&&s.drawBuffers(Pe)}function J(k){return g!==k?(s.useProgram(k),g=k,!0):!1}const le={[Ui]:s.FUNC_ADD,[$h]:s.FUNC_SUBTRACT,[Zh]:s.FUNC_REVERSE_SUBTRACT};le[Jh]=s.MIN,le[Qh]=s.MAX;const P={[ed]:s.ZERO,[td]:s.ONE,[nd]:s.SRC_COLOR,[ba]:s.SRC_ALPHA,[ld]:s.SRC_ALPHA_SATURATE,[od]:s.DST_COLOR,[sd]:s.DST_ALPHA,[id]:s.ONE_MINUS_SRC_COLOR,[wa]:s.ONE_MINUS_SRC_ALPHA,[ad]:s.ONE_MINUS_DST_COLOR,[rd]:s.ONE_MINUS_DST_ALPHA,[cd]:s.CONSTANT_COLOR,[ud]:s.ONE_MINUS_CONSTANT_COLOR,[hd]:s.CONSTANT_ALPHA,[dd]:s.ONE_MINUS_CONSTANT_ALPHA};function oe(k,we,Pe,Ue,be,_e,$,ae,Fe,Ke){if(k===gi){_===!0&&(pe(s.BLEND),_=!1);return}if(_===!1&&(X(s.BLEND),_=!0),k!==Kh){if(k!==m||Ke!==y){if((f!==Ui||v!==Ui)&&(s.blendEquation(s.FUNC_ADD),f=Ui,v=Ui),Ke)switch(k){case gs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ni:s.blendFunc(s.ONE,s.ONE);break;case Jl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ql:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case gs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ni:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Jl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ql:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}b=null,x=null,S=null,E=null,w.set(0,0,0),C=0,m=k,y=Ke}return}be=be||we,_e=_e||Pe,$=$||Ue,(we!==f||be!==v)&&(s.blendEquationSeparate(le[we],le[be]),f=we,v=be),(Pe!==b||Ue!==x||_e!==S||$!==E)&&(s.blendFuncSeparate(P[Pe],P[Ue],P[_e],P[$]),b=Pe,x=Ue,S=_e,E=$),(ae.equals(w)===!1||Fe!==C)&&(s.blendColor(ae.r,ae.g,ae.b,Fe),w.copy(ae),C=Fe),m=k,y=!1}function ce(k,we){k.side===wt?pe(s.CULL_FACE):X(s.CULL_FACE);let Pe=k.side===Qt;we&&(Pe=!Pe),Se(Pe),k.blending===gs&&k.transparent===!1?oe(gi):oe(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);const Ue=k.stencilWrite;a.setTest(Ue),Ue&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),de(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?X(s.SAMPLE_ALPHA_TO_COVERAGE):pe(s.SAMPLE_ALPHA_TO_COVERAGE)}function Se(k){M!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),M=k)}function re(k){k!==jh?(X(s.CULL_FACE),k!==A&&(k===Zl?s.cullFace(s.BACK):k===Yh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):pe(s.CULL_FACE),A=k}function Ie(k){k!==D&&(F&&s.lineWidth(k),D=k)}function de(k,we,Pe){k?(X(s.POLYGON_OFFSET_FILL),(L!==we||z!==Pe)&&(s.polygonOffset(we,Pe),L=we,z=Pe)):pe(s.POLYGON_OFFSET_FILL)}function ve(k){k?X(s.SCISSOR_TEST):pe(s.SCISSOR_TEST)}function He(k){k===void 0&&(k=s.TEXTURE0+O-1),Q!==k&&(s.activeTexture(k),Q=k)}function We(k,we,Pe){Pe===void 0&&(Q===null?Pe=s.TEXTURE0+O-1:Pe=Q);let Ue=se[Pe];Ue===void 0&&(Ue={type:void 0,texture:void 0},se[Pe]=Ue),(Ue.type!==k||Ue.texture!==we)&&(Q!==Pe&&(s.activeTexture(Pe),Q=Pe),s.bindTexture(k,we||B[k]),Ue.type=k,Ue.texture=we)}function I(){const k=se[Q];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function T(){try{s.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function U(){try{s.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function H(){try{s.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ee(){try{s.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function G(){try{s.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function me(){try{s.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function fe(){try{s.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ee(){try{s.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function xe(){try{s.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ye(){try{s.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ge(k){j.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),j.copy(k))}function Te(k){te.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),te.copy(k))}function Re(k,we){let Pe=c.get(we);Pe===void 0&&(Pe=new WeakMap,c.set(we,Pe));let Ue=Pe.get(k);Ue===void 0&&(Ue=s.getUniformBlockIndex(we,k.name),Pe.set(k,Ue))}function Ce(k,we){const Ue=c.get(we).get(k);l.get(we)!==Ue&&(s.uniformBlockBinding(we,Ue,k.__bindingPointIndex),l.set(we,Ue))}function De(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},Q=null,se={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,b=null,x=null,v=null,S=null,E=null,w=new ze(0,0,0),C=0,y=!1,M=null,A=null,D=null,L=null,z=null,j.set(0,0,s.canvas.width,s.canvas.height),te.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:X,disable:pe,bindFramebuffer:K,drawBuffers:Z,useProgram:J,setBlending:oe,setMaterial:ce,setFlipSided:Se,setCullFace:re,setLineWidth:Ie,setPolygonOffset:de,setScissorTest:ve,activeTexture:He,bindTexture:We,unbindTexture:I,compressedTexImage2D:T,compressedTexImage3D:U,texImage2D:xe,texImage3D:ye,updateUBOMapping:Re,uniformBlockBinding:Ce,texStorage2D:fe,texStorage3D:Ee,texSubImage2D:H,texSubImage3D:ee,compressedTexSubImage2D:G,compressedTexSubImage3D:me,scissor:ge,viewport:Te,reset:De}}function j_(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ke,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,T){return p?new OffscreenCanvas(I,T):ur("canvas")}function _(I,T,U){let H=1;const ee=We(I);if((ee.width>U||ee.height>U)&&(H=U/Math.max(ee.width,ee.height)),H<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const G=Math.floor(H*ee.width),me=Math.floor(H*ee.height);u===void 0&&(u=g(G,me));const fe=T?g(G,me):u;return fe.width=G,fe.height=me,fe.getContext("2d").drawImage(I,0,0,G,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+G+"x"+me+")."),fe}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),I;return I}function m(I){return I.generateMipmaps}function f(I){s.generateMipmap(I)}function b(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function x(I,T,U,H,ee=!1){if(I!==null){if(s[I]!==void 0)return s[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let G=T;if(T===s.RED&&(U===s.FLOAT&&(G=s.R32F),U===s.HALF_FLOAT&&(G=s.R16F),U===s.UNSIGNED_BYTE&&(G=s.R8)),T===s.RED_INTEGER&&(U===s.UNSIGNED_BYTE&&(G=s.R8UI),U===s.UNSIGNED_SHORT&&(G=s.R16UI),U===s.UNSIGNED_INT&&(G=s.R32UI),U===s.BYTE&&(G=s.R8I),U===s.SHORT&&(G=s.R16I),U===s.INT&&(G=s.R32I)),T===s.RG&&(U===s.FLOAT&&(G=s.RG32F),U===s.HALF_FLOAT&&(G=s.RG16F),U===s.UNSIGNED_BYTE&&(G=s.RG8)),T===s.RG_INTEGER&&(U===s.UNSIGNED_BYTE&&(G=s.RG8UI),U===s.UNSIGNED_SHORT&&(G=s.RG16UI),U===s.UNSIGNED_INT&&(G=s.RG32UI),U===s.BYTE&&(G=s.RG8I),U===s.SHORT&&(G=s.RG16I),U===s.INT&&(G=s.RG32I)),T===s.RGB_INTEGER&&(U===s.UNSIGNED_BYTE&&(G=s.RGB8UI),U===s.UNSIGNED_SHORT&&(G=s.RGB16UI),U===s.UNSIGNED_INT&&(G=s.RGB32UI),U===s.BYTE&&(G=s.RGB8I),U===s.SHORT&&(G=s.RGB16I),U===s.INT&&(G=s.RGB32I)),T===s.RGBA_INTEGER&&(U===s.UNSIGNED_BYTE&&(G=s.RGBA8UI),U===s.UNSIGNED_SHORT&&(G=s.RGBA16UI),U===s.UNSIGNED_INT&&(G=s.RGBA32UI),U===s.BYTE&&(G=s.RGBA8I),U===s.SHORT&&(G=s.RGBA16I),U===s.INT&&(G=s.RGBA32I)),T===s.RGB&&(U===s.UNSIGNED_INT_5_9_9_9_REV&&(G=s.RGB9_E5),U===s.UNSIGNED_INT_10F_11F_11F_REV&&(G=s.R11F_G11F_B10F)),T===s.RGBA){const me=ee?fo:st.getTransfer(H);U===s.FLOAT&&(G=s.RGBA32F),U===s.HALF_FLOAT&&(G=s.RGBA16F),U===s.UNSIGNED_BYTE&&(G=me===_t?s.SRGB8_ALPHA8:s.RGBA8),U===s.UNSIGNED_SHORT_4_4_4_4&&(G=s.RGBA4),U===s.UNSIGNED_SHORT_5_5_5_1&&(G=s.RGB5_A1)}return(G===s.R16F||G===s.R32F||G===s.RG16F||G===s.RG32F||G===s.RGBA16F||G===s.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function v(I,T){let U;return I?T===null||T===Hi||T===rr?U=s.DEPTH24_STENCIL8:T===Rn?U=s.DEPTH32F_STENCIL8:T===sr&&(U=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Hi||T===rr?U=s.DEPTH_COMPONENT24:T===Rn?U=s.DEPTH_COMPONENT32F:T===sr&&(U=s.DEPTH_COMPONENT16),U}function S(I,T){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==qt&&I.minFilter!==rn?Math.log2(Math.max(T.width,T.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?T.mipmaps.length:1}function E(I){const T=I.target;T.removeEventListener("dispose",E),C(T),T.isVideoTexture&&h.delete(T)}function w(I){const T=I.target;T.removeEventListener("dispose",w),M(T)}function C(I){const T=n.get(I);if(T.__webglInit===void 0)return;const U=I.source,H=d.get(U);if(H){const ee=H[T.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&y(I),Object.keys(H).length===0&&d.delete(U)}n.remove(I)}function y(I){const T=n.get(I);s.deleteTexture(T.__webglTexture);const U=I.source,H=d.get(U);delete H[T.__cacheKey],o.memory.textures--}function M(I){const T=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(T.__webglFramebuffer[H]))for(let ee=0;ee<T.__webglFramebuffer[H].length;ee++)s.deleteFramebuffer(T.__webglFramebuffer[H][ee]);else s.deleteFramebuffer(T.__webglFramebuffer[H]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[H])}else{if(Array.isArray(T.__webglFramebuffer))for(let H=0;H<T.__webglFramebuffer.length;H++)s.deleteFramebuffer(T.__webglFramebuffer[H]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let H=0;H<T.__webglColorRenderbuffer.length;H++)T.__webglColorRenderbuffer[H]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[H]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const U=I.textures;for(let H=0,ee=U.length;H<ee;H++){const G=n.get(U[H]);G.__webglTexture&&(s.deleteTexture(G.__webglTexture),o.memory.textures--),n.remove(U[H])}n.remove(I)}let A=0;function D(){A=0}function L(){const I=A;return I>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+i.maxTextures),A+=1,I}function z(I){const T=[];return T.push(I.wrapS),T.push(I.wrapT),T.push(I.wrapR||0),T.push(I.magFilter),T.push(I.minFilter),T.push(I.anisotropy),T.push(I.internalFormat),T.push(I.format),T.push(I.type),T.push(I.generateMipmaps),T.push(I.premultiplyAlpha),T.push(I.flipY),T.push(I.unpackAlignment),T.push(I.colorSpace),T.join()}function O(I,T){const U=n.get(I);if(I.isVideoTexture&&ve(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&U.__version!==I.version){const H=I.image;if(H===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{B(U,I,T);return}}else I.isExternalTexture&&(U.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,U.__webglTexture,s.TEXTURE0+T)}function F(I,T){const U=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&U.__version!==I.version){B(U,I,T);return}t.bindTexture(s.TEXTURE_2D_ARRAY,U.__webglTexture,s.TEXTURE0+T)}function W(I,T){const U=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&U.__version!==I.version){B(U,I,T);return}t.bindTexture(s.TEXTURE_3D,U.__webglTexture,s.TEXTURE0+T)}function V(I,T){const U=n.get(I);if(I.version>0&&U.__version!==I.version){X(U,I,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+T)}const Q={[ki]:s.REPEAT,[Zn]:s.CLAMP_TO_EDGE,[uo]:s.MIRRORED_REPEAT},se={[qt]:s.NEAREST,[Bu]:s.NEAREST_MIPMAP_NEAREST,[Js]:s.NEAREST_MIPMAP_LINEAR,[rn]:s.LINEAR,[eo]:s.LINEAR_MIPMAP_NEAREST,[An]:s.LINEAR_MIPMAP_LINEAR},he={[Pd]:s.NEVER,[Fd]:s.ALWAYS,[Id]:s.LESS,[Ku]:s.LEQUAL,[Dd]:s.EQUAL,[Ud]:s.GEQUAL,[Ld]:s.GREATER,[Nd]:s.NOTEQUAL};function Me(I,T){if(T.type===Rn&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===rn||T.magFilter===eo||T.magFilter===Js||T.magFilter===An||T.minFilter===rn||T.minFilter===eo||T.minFilter===Js||T.minFilter===An)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,Q[T.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,Q[T.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,Q[T.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,se[T.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,se[T.minFilter]),T.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,he[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===qt||T.minFilter!==Js&&T.minFilter!==An||T.type===Rn&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");s.texParameterf(I,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function j(I,T){let U=!1;I.__webglInit===void 0&&(I.__webglInit=!0,T.addEventListener("dispose",E));const H=T.source;let ee=d.get(H);ee===void 0&&(ee={},d.set(H,ee));const G=z(T);if(G!==I.__cacheKey){ee[G]===void 0&&(ee[G]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,U=!0),ee[G].usedTimes++;const me=ee[I.__cacheKey];me!==void 0&&(ee[I.__cacheKey].usedTimes--,me.usedTimes===0&&y(T)),I.__cacheKey=G,I.__webglTexture=ee[G].texture}return U}function te(I,T,U){return Math.floor(Math.floor(I/U)/T)}function ue(I,T,U,H){const G=I.updateRanges;if(G.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,U,H,T.data);else{G.sort((ye,ge)=>ye.start-ge.start);let me=0;for(let ye=1;ye<G.length;ye++){const ge=G[me],Te=G[ye],Re=ge.start+ge.count,Ce=te(Te.start,T.width,4),De=te(ge.start,T.width,4);Te.start<=Re+1&&Ce===De&&te(Te.start+Te.count-1,T.width,4)===Ce?ge.count=Math.max(ge.count,Te.start+Te.count-ge.start):(++me,G[me]=Te)}G.length=me+1;const fe=s.getParameter(s.UNPACK_ROW_LENGTH),Ee=s.getParameter(s.UNPACK_SKIP_PIXELS),xe=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let ye=0,ge=G.length;ye<ge;ye++){const Te=G[ye],Re=Math.floor(Te.start/4),Ce=Math.ceil(Te.count/4),De=Re%T.width,k=Math.floor(Re/T.width),we=Ce,Pe=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,De),s.pixelStorei(s.UNPACK_SKIP_ROWS,k),t.texSubImage2D(s.TEXTURE_2D,0,De,k,we,Pe,U,H,T.data)}I.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,fe),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ee),s.pixelStorei(s.UNPACK_SKIP_ROWS,xe)}}function B(I,T,U){let H=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(H=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(H=s.TEXTURE_3D);const ee=j(I,T),G=T.source;t.bindTexture(H,I.__webglTexture,s.TEXTURE0+U);const me=n.get(G);if(G.version!==me.__version||ee===!0){t.activeTexture(s.TEXTURE0+U);const fe=st.getPrimaries(st.workingColorSpace),Ee=T.colorSpace===mi?null:st.getPrimaries(T.colorSpace),xe=T.colorSpace===mi||fe===Ee?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let ye=_(T.image,!1,i.maxTextureSize);ye=He(T,ye);const ge=r.convert(T.format,T.colorSpace),Te=r.convert(T.type);let Re=x(T.internalFormat,ge,Te,T.colorSpace,T.isVideoTexture);Me(H,T);let Ce;const De=T.mipmaps,k=T.isVideoTexture!==!0,we=me.__version===void 0||ee===!0,Pe=G.dataReady,Ue=S(T,ye);if(T.isDepthTexture)Re=v(T.format===ar,T.type),we&&(k?t.texStorage2D(s.TEXTURE_2D,1,Re,ye.width,ye.height):t.texImage2D(s.TEXTURE_2D,0,Re,ye.width,ye.height,0,ge,Te,null));else if(T.isDataTexture)if(De.length>0){k&&we&&t.texStorage2D(s.TEXTURE_2D,Ue,Re,De[0].width,De[0].height);for(let be=0,_e=De.length;be<_e;be++)Ce=De[be],k?Pe&&t.texSubImage2D(s.TEXTURE_2D,be,0,0,Ce.width,Ce.height,ge,Te,Ce.data):t.texImage2D(s.TEXTURE_2D,be,Re,Ce.width,Ce.height,0,ge,Te,Ce.data);T.generateMipmaps=!1}else k?(we&&t.texStorage2D(s.TEXTURE_2D,Ue,Re,ye.width,ye.height),Pe&&ue(T,ye,ge,Te)):t.texImage2D(s.TEXTURE_2D,0,Re,ye.width,ye.height,0,ge,Te,ye.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){k&&we&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ue,Re,De[0].width,De[0].height,ye.depth);for(let be=0,_e=De.length;be<_e;be++)if(Ce=De[be],T.format!==pn)if(ge!==null)if(k){if(Pe)if(T.layerUpdates.size>0){const $=Vc(Ce.width,Ce.height,T.format,T.type);for(const ae of T.layerUpdates){const Fe=Ce.data.subarray(ae*$/Ce.data.BYTES_PER_ELEMENT,(ae+1)*$/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,be,0,0,ae,Ce.width,Ce.height,1,ge,Fe)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,be,0,0,0,Ce.width,Ce.height,ye.depth,ge,Ce.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,be,Re,Ce.width,Ce.height,ye.depth,0,Ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?Pe&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,be,0,0,0,Ce.width,Ce.height,ye.depth,ge,Te,Ce.data):t.texImage3D(s.TEXTURE_2D_ARRAY,be,Re,Ce.width,Ce.height,ye.depth,0,ge,Te,Ce.data)}else{k&&we&&t.texStorage2D(s.TEXTURE_2D,Ue,Re,De[0].width,De[0].height);for(let be=0,_e=De.length;be<_e;be++)Ce=De[be],T.format!==pn?ge!==null?k?Pe&&t.compressedTexSubImage2D(s.TEXTURE_2D,be,0,0,Ce.width,Ce.height,ge,Ce.data):t.compressedTexImage2D(s.TEXTURE_2D,be,Re,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Pe&&t.texSubImage2D(s.TEXTURE_2D,be,0,0,Ce.width,Ce.height,ge,Te,Ce.data):t.texImage2D(s.TEXTURE_2D,be,Re,Ce.width,Ce.height,0,ge,Te,Ce.data)}else if(T.isDataArrayTexture)if(k){if(we&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ue,Re,ye.width,ye.height,ye.depth),Pe)if(T.layerUpdates.size>0){const be=Vc(ye.width,ye.height,T.format,T.type);for(const _e of T.layerUpdates){const $=ye.data.subarray(_e*be/ye.data.BYTES_PER_ELEMENT,(_e+1)*be/ye.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,_e,ye.width,ye.height,1,ge,Te,$)}T.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,ge,Te,ye.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Re,ye.width,ye.height,ye.depth,0,ge,Te,ye.data);else if(T.isData3DTexture)k?(we&&t.texStorage3D(s.TEXTURE_3D,Ue,Re,ye.width,ye.height,ye.depth),Pe&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,ge,Te,ye.data)):t.texImage3D(s.TEXTURE_3D,0,Re,ye.width,ye.height,ye.depth,0,ge,Te,ye.data);else if(T.isFramebufferTexture){if(we)if(k)t.texStorage2D(s.TEXTURE_2D,Ue,Re,ye.width,ye.height);else{let be=ye.width,_e=ye.height;for(let $=0;$<Ue;$++)t.texImage2D(s.TEXTURE_2D,$,Re,be,_e,0,ge,Te,null),be>>=1,_e>>=1}}else if(De.length>0){if(k&&we){const be=We(De[0]);t.texStorage2D(s.TEXTURE_2D,Ue,Re,be.width,be.height)}for(let be=0,_e=De.length;be<_e;be++)Ce=De[be],k?Pe&&t.texSubImage2D(s.TEXTURE_2D,be,0,0,ge,Te,Ce):t.texImage2D(s.TEXTURE_2D,be,Re,ge,Te,Ce);T.generateMipmaps=!1}else if(k){if(we){const be=We(ye);t.texStorage2D(s.TEXTURE_2D,Ue,Re,be.width,be.height)}Pe&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ge,Te,ye)}else t.texImage2D(s.TEXTURE_2D,0,Re,ge,Te,ye);m(T)&&f(H),me.__version=G.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function X(I,T,U){if(T.image.length!==6)return;const H=j(I,T),ee=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+U);const G=n.get(ee);if(ee.version!==G.__version||H===!0){t.activeTexture(s.TEXTURE0+U);const me=st.getPrimaries(st.workingColorSpace),fe=T.colorSpace===mi?null:st.getPrimaries(T.colorSpace),Ee=T.colorSpace===mi||me===fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const xe=T.isCompressedTexture||T.image[0].isCompressedTexture,ye=T.image[0]&&T.image[0].isDataTexture,ge=[];for(let _e=0;_e<6;_e++)!xe&&!ye?ge[_e]=_(T.image[_e],!0,i.maxCubemapSize):ge[_e]=ye?T.image[_e].image:T.image[_e],ge[_e]=He(T,ge[_e]);const Te=ge[0],Re=r.convert(T.format,T.colorSpace),Ce=r.convert(T.type),De=x(T.internalFormat,Re,Ce,T.colorSpace),k=T.isVideoTexture!==!0,we=G.__version===void 0||H===!0,Pe=ee.dataReady;let Ue=S(T,Te);Me(s.TEXTURE_CUBE_MAP,T);let be;if(xe){k&&we&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ue,De,Te.width,Te.height);for(let _e=0;_e<6;_e++){be=ge[_e].mipmaps;for(let $=0;$<be.length;$++){const ae=be[$];T.format!==pn?Re!==null?k?Pe&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,$,0,0,ae.width,ae.height,Re,ae.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,$,De,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Pe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,$,0,0,ae.width,ae.height,Re,Ce,ae.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,$,De,ae.width,ae.height,0,Re,Ce,ae.data)}}}else{if(be=T.mipmaps,k&&we){be.length>0&&Ue++;const _e=We(ge[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ue,De,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(ye){k?Pe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,ge[_e].width,ge[_e].height,Re,Ce,ge[_e].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,De,ge[_e].width,ge[_e].height,0,Re,Ce,ge[_e].data);for(let $=0;$<be.length;$++){const Fe=be[$].image[_e].image;k?Pe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,$+1,0,0,Fe.width,Fe.height,Re,Ce,Fe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,$+1,De,Fe.width,Fe.height,0,Re,Ce,Fe.data)}}else{k?Pe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Re,Ce,ge[_e]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,De,Re,Ce,ge[_e]);for(let $=0;$<be.length;$++){const ae=be[$];k?Pe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,$+1,0,0,Re,Ce,ae.image[_e]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,$+1,De,Re,Ce,ae.image[_e])}}}m(T)&&f(s.TEXTURE_CUBE_MAP),G.__version=ee.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function pe(I,T,U,H,ee,G){const me=r.convert(U.format,U.colorSpace),fe=r.convert(U.type),Ee=x(U.internalFormat,me,fe,U.colorSpace),xe=n.get(T),ye=n.get(U);if(ye.__renderTarget=T,!xe.__hasExternalTextures){const ge=Math.max(1,T.width>>G),Te=Math.max(1,T.height>>G);ee===s.TEXTURE_3D||ee===s.TEXTURE_2D_ARRAY?t.texImage3D(ee,G,Ee,ge,Te,T.depth,0,me,fe,null):t.texImage2D(ee,G,Ee,ge,Te,0,me,fe,null)}t.bindFramebuffer(s.FRAMEBUFFER,I),de(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,H,ee,ye.__webglTexture,0,Ie(T)):(ee===s.TEXTURE_2D||ee>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,H,ee,ye.__webglTexture,G),t.bindFramebuffer(s.FRAMEBUFFER,null)}function K(I,T,U){if(s.bindRenderbuffer(s.RENDERBUFFER,I),T.depthBuffer){const H=T.depthTexture,ee=H&&H.isDepthTexture?H.type:null,G=v(T.stencilBuffer,ee),me=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=Ie(T);de(T)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,fe,G,T.width,T.height):U?s.renderbufferStorageMultisample(s.RENDERBUFFER,fe,G,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,G,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,I)}else{const H=T.textures;for(let ee=0;ee<H.length;ee++){const G=H[ee],me=r.convert(G.format,G.colorSpace),fe=r.convert(G.type),Ee=x(G.internalFormat,me,fe,G.colorSpace),xe=Ie(T);U&&de(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,xe,Ee,T.width,T.height):de(T)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,xe,Ee,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Ee,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Z(I,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,I),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const H=n.get(T.depthTexture);H.__renderTarget=T,(!H.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),O(T.depthTexture,0);const ee=H.__webglTexture,G=Ie(T);if(T.depthTexture.format===or)de(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ee,0,G):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ee,0);else if(T.depthTexture.format===ar)de(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ee,0,G):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function J(I){const T=n.get(I),U=I.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==I.depthTexture){const H=I.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),H){const ee=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,H.removeEventListener("dispose",ee)};H.addEventListener("dispose",ee),T.__depthDisposeCallback=ee}T.__boundDepthTexture=H}if(I.depthTexture&&!T.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");const H=I.texture.mipmaps;H&&H.length>0?Z(T.__webglFramebuffer[0],I):Z(T.__webglFramebuffer,I)}else if(U){T.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[H]),T.__webglDepthbuffer[H]===void 0)T.__webglDepthbuffer[H]=s.createRenderbuffer(),K(T.__webglDepthbuffer[H],I,!1);else{const ee=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,G=T.__webglDepthbuffer[H];s.bindRenderbuffer(s.RENDERBUFFER,G),s.framebufferRenderbuffer(s.FRAMEBUFFER,ee,s.RENDERBUFFER,G)}}else{const H=I.texture.mipmaps;if(H&&H.length>0?t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),K(T.__webglDepthbuffer,I,!1);else{const ee=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,G=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,G),s.framebufferRenderbuffer(s.FRAMEBUFFER,ee,s.RENDERBUFFER,G)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function le(I,T,U){const H=n.get(I);T!==void 0&&pe(H.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),U!==void 0&&J(I)}function P(I){const T=I.texture,U=n.get(I),H=n.get(T);I.addEventListener("dispose",w);const ee=I.textures,G=I.isWebGLCubeRenderTarget===!0,me=ee.length>1;if(me||(H.__webglTexture===void 0&&(H.__webglTexture=s.createTexture()),H.__version=T.version,o.memory.textures++),G){U.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(T.mipmaps&&T.mipmaps.length>0){U.__webglFramebuffer[fe]=[];for(let Ee=0;Ee<T.mipmaps.length;Ee++)U.__webglFramebuffer[fe][Ee]=s.createFramebuffer()}else U.__webglFramebuffer[fe]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){U.__webglFramebuffer=[];for(let fe=0;fe<T.mipmaps.length;fe++)U.__webglFramebuffer[fe]=s.createFramebuffer()}else U.__webglFramebuffer=s.createFramebuffer();if(me)for(let fe=0,Ee=ee.length;fe<Ee;fe++){const xe=n.get(ee[fe]);xe.__webglTexture===void 0&&(xe.__webglTexture=s.createTexture(),o.memory.textures++)}if(I.samples>0&&de(I)===!1){U.__webglMultisampledFramebuffer=s.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let fe=0;fe<ee.length;fe++){const Ee=ee[fe];U.__webglColorRenderbuffer[fe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,U.__webglColorRenderbuffer[fe]);const xe=r.convert(Ee.format,Ee.colorSpace),ye=r.convert(Ee.type),ge=x(Ee.internalFormat,xe,ye,Ee.colorSpace,I.isXRRenderTarget===!0),Te=Ie(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,Te,ge,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,U.__webglColorRenderbuffer[fe])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(U.__webglDepthRenderbuffer=s.createRenderbuffer(),K(U.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(G){t.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture),Me(s.TEXTURE_CUBE_MAP,T);for(let fe=0;fe<6;fe++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ee=0;Ee<T.mipmaps.length;Ee++)pe(U.__webglFramebuffer[fe][Ee],I,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ee);else pe(U.__webglFramebuffer[fe],I,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(T)&&f(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){for(let fe=0,Ee=ee.length;fe<Ee;fe++){const xe=ee[fe],ye=n.get(xe);let ge=s.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ge=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ge,ye.__webglTexture),Me(ge,xe),pe(U.__webglFramebuffer,I,xe,s.COLOR_ATTACHMENT0+fe,ge,0),m(xe)&&f(ge)}t.unbindTexture()}else{let fe=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(fe=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(fe,H.__webglTexture),Me(fe,T),T.mipmaps&&T.mipmaps.length>0)for(let Ee=0;Ee<T.mipmaps.length;Ee++)pe(U.__webglFramebuffer[Ee],I,T,s.COLOR_ATTACHMENT0,fe,Ee);else pe(U.__webglFramebuffer,I,T,s.COLOR_ATTACHMENT0,fe,0);m(T)&&f(fe),t.unbindTexture()}I.depthBuffer&&J(I)}function oe(I){const T=I.textures;for(let U=0,H=T.length;U<H;U++){const ee=T[U];if(m(ee)){const G=b(I),me=n.get(ee).__webglTexture;t.bindTexture(G,me),f(G),t.unbindTexture()}}}const ce=[],Se=[];function re(I){if(I.samples>0){if(de(I)===!1){const T=I.textures,U=I.width,H=I.height;let ee=s.COLOR_BUFFER_BIT;const G=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,me=n.get(I),fe=T.length>1;if(fe)for(let xe=0;xe<T.length;xe++)t.bindFramebuffer(s.FRAMEBUFFER,me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer);const Ee=I.texture.mipmaps;Ee&&Ee.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let xe=0;xe<T.length;xe++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ee|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ee|=s.STENCIL_BUFFER_BIT)),fe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,me.__webglColorRenderbuffer[xe]);const ye=n.get(T[xe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ye,0)}s.blitFramebuffer(0,0,U,H,0,0,U,H,ee,s.NEAREST),l===!0&&(ce.length=0,Se.length=0,ce.push(s.COLOR_ATTACHMENT0+xe),I.depthBuffer&&I.resolveDepthBuffer===!1&&(ce.push(G),Se.push(G),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Se)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ce))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),fe)for(let xe=0;xe<T.length;xe++){t.bindFramebuffer(s.FRAMEBUFFER,me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.RENDERBUFFER,me.__webglColorRenderbuffer[xe]);const ye=n.get(T[xe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.TEXTURE_2D,ye,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){const T=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function Ie(I){return Math.min(i.maxSamples,I.samples)}function de(I){const T=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ve(I){const T=o.render.frame;h.get(I)!==T&&(h.set(I,T),I.update())}function He(I,T){const U=I.colorSpace,H=I.format,ee=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||U!==on&&U!==mi&&(st.getTransfer(U)===_t?(H!==pn||ee!==kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),T}function We(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=D,this.setTexture2D=O,this.setTexture2DArray=F,this.setTexture3D=W,this.setTextureCube=V,this.rebindTextures=le,this.setupRenderTarget=P,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=J,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=de}function Y_(s,e){function t(n,i=mi){let r;const o=st.getTransfer(i);if(n===kn)return s.UNSIGNED_BYTE;if(n===Ml)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Sl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Vu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Gu)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===ku)return s.BYTE;if(n===Hu)return s.SHORT;if(n===sr)return s.UNSIGNED_SHORT;if(n===yl)return s.INT;if(n===Hi)return s.UNSIGNED_INT;if(n===Rn)return s.FLOAT;if(n===mr)return s.HALF_FLOAT;if(n===Wu)return s.ALPHA;if(n===Xu)return s.RGB;if(n===pn)return s.RGBA;if(n===or)return s.DEPTH_COMPONENT;if(n===ar)return s.DEPTH_STENCIL;if(n===bl)return s.RED;if(n===wl)return s.RED_INTEGER;if(n===qu)return s.RG;if(n===El)return s.RG_INTEGER;if(n===Tl)return s.RGBA_INTEGER;if(n===to||n===no||n===io||n===so)if(o===_t)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===to)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===no)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===so)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===to)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===no)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===io)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===so)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Na||n===Ua||n===Fa||n===Oa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Na)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ua)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Oa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===za||n===Ba||n===ka)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===za||n===Ba)return o===_t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ka)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ha||n===Va||n===Ga||n===Wa||n===Xa||n===qa||n===ja||n===Ya||n===Ka||n===$a||n===Za||n===Ja||n===Qa||n===el)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ha)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Va)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ga)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Wa)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Xa)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===qa)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ja)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ya)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ka)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===$a)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Za)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ja)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Qa)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===el)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===tl||n===nl||n===il)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===tl)return o===_t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===nl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===il)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===sl||n===rl||n===ol||n===al)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===sl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===rl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ol)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===al)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===rr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const K_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Z_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new oh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new jt({vertexShader:K_,fragmentShader:$_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ye(new Wi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class J_ extends Mi{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null;const _=typeof XRWebGLBinding<"u",m=new Z_,f={},b=t.getContextAttributes();let x=null,v=null;const S=[],E=[],w=new ke;let C=null;const y=new sn;y.viewport=new rt;const M=new sn;M.viewport=new rt;const A=[y,M],D=new rp;let L=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let X=S[B];return X===void 0&&(X=new $o,S[B]=X),X.getTargetRaySpace()},this.getControllerGrip=function(B){let X=S[B];return X===void 0&&(X=new $o,S[B]=X),X.getGripSpace()},this.getHand=function(B){let X=S[B];return X===void 0&&(X=new $o,S[B]=X),X.getHandSpace()};function O(B){const X=E.indexOf(B.inputSource);if(X===-1)return;const pe=S[X];pe!==void 0&&(pe.update(B.inputSource,B.frame,c||o),pe.dispatchEvent({type:B.type,data:B.inputSource}))}function F(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",F),i.removeEventListener("inputsourceschange",W);for(let B=0;B<S.length;B++){const X=E[B];X!==null&&(E[B]=null,S[B].disconnect(X))}L=null,z=null,m.reset();for(const B in f)delete f[B];e.setRenderTarget(x),p=null,d=null,u=null,i=null,v=null,ue.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(B){if(i=B,i!==null){if(x=e.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",F),i.addEventListener("inputsourceschange",W),b.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,K=null,Z=null;b.depth&&(Z=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=b.stencil?ar:or,K=b.stencil?rr:Hi);const J={colorFormat:t.RGBA8,depthFormat:Z,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(J),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Vi(d.textureWidth,d.textureHeight,{format:pn,type:kn,depthTexture:new rh(d.textureWidth,d.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const pe={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,pe),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Vi(p.framebufferWidth,p.framebufferHeight,{format:pn,type:kn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),ue.setContext(i),ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function W(B){for(let X=0;X<B.removed.length;X++){const pe=B.removed[X],K=E.indexOf(pe);K>=0&&(E[K]=null,S[K].disconnect(pe))}for(let X=0;X<B.added.length;X++){const pe=B.added[X];let K=E.indexOf(pe);if(K===-1){for(let J=0;J<S.length;J++)if(J>=E.length){E.push(pe),K=J;break}else if(E[J]===null){E[J]=pe,K=J;break}if(K===-1)break}const Z=S[K];Z&&Z.connect(pe)}}const V=new N,Q=new N;function se(B,X,pe){V.setFromMatrixPosition(X.matrixWorld),Q.setFromMatrixPosition(pe.matrixWorld);const K=V.distanceTo(Q),Z=X.projectionMatrix.elements,J=pe.projectionMatrix.elements,le=Z[14]/(Z[10]-1),P=Z[14]/(Z[10]+1),oe=(Z[9]+1)/Z[5],ce=(Z[9]-1)/Z[5],Se=(Z[8]-1)/Z[0],re=(J[8]+1)/J[0],Ie=le*Se,de=le*re,ve=K/(-Se+re),He=ve*-Se;if(X.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(He),B.translateZ(ve),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert(),Z[10]===-1)B.projectionMatrix.copy(X.projectionMatrix),B.projectionMatrixInverse.copy(X.projectionMatrixInverse);else{const We=le+ve,I=P+ve,T=Ie-He,U=de+(K-He),H=oe*P/I*We,ee=ce*P/I*We;B.projectionMatrix.makePerspective(T,U,H,ee,We,I),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}}function he(B,X){X===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(X.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(i===null)return;let X=B.near,pe=B.far;m.texture!==null&&(m.depthNear>0&&(X=m.depthNear),m.depthFar>0&&(pe=m.depthFar)),D.near=M.near=y.near=X,D.far=M.far=y.far=pe,(L!==D.near||z!==D.far)&&(i.updateRenderState({depthNear:D.near,depthFar:D.far}),L=D.near,z=D.far),D.layers.mask=B.layers.mask|6,y.layers.mask=D.layers.mask&3,M.layers.mask=D.layers.mask&5;const K=B.parent,Z=D.cameras;he(D,K);for(let J=0;J<Z.length;J++)he(Z[J],K);Z.length===2?se(D,y,M):D.projectionMatrix.copy(y.projectionMatrix),Me(B,D,K)};function Me(B,X,pe){pe===null?B.matrix.copy(X.matrixWorld):(B.matrix.copy(pe.matrixWorld),B.matrix.invert(),B.matrix.multiply(X.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(X.projectionMatrix),B.projectionMatrixInverse.copy(X.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=bs*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(B){l=B,d!==null&&(d.fixedFoveation=B),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=B)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(B){return f[B]};let j=null;function te(B,X){if(h=X.getViewerPose(c||o),g=X,h!==null){const pe=h.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let K=!1;pe.length!==D.cameras.length&&(D.cameras.length=0,K=!0);for(let P=0;P<pe.length;P++){const oe=pe[P];let ce=null;if(p!==null)ce=p.getViewport(oe);else{const re=u.getViewSubImage(d,oe);ce=re.viewport,P===0&&(e.setRenderTargetTextures(v,re.colorTexture,re.depthStencilTexture),e.setRenderTarget(v))}let Se=A[P];Se===void 0&&(Se=new sn,Se.layers.enable(P),Se.viewport=new rt,A[P]=Se),Se.matrix.fromArray(oe.transform.matrix),Se.matrix.decompose(Se.position,Se.quaternion,Se.scale),Se.projectionMatrix.fromArray(oe.projectionMatrix),Se.projectionMatrixInverse.copy(Se.projectionMatrix).invert(),Se.viewport.set(ce.x,ce.y,ce.width,ce.height),P===0&&(D.matrix.copy(Se.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),K===!0&&D.cameras.push(Se)}const Z=i.enabledFeatures;if(Z&&Z.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const P=u.getDepthInformation(pe[0]);P&&P.isValid&&P.texture&&m.init(P,i.renderState)}if(Z&&Z.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let P=0;P<pe.length;P++){const oe=pe[P].camera;if(oe){let ce=f[oe];ce||(ce=new oh,f[oe]=ce);const Se=u.getCameraImage(oe);ce.sourceTexture=Se}}}}for(let pe=0;pe<S.length;pe++){const K=E[pe],Z=S[pe];K!==null&&Z!==void 0&&Z.update(K,X,c||o)}j&&j(B,X),X.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:X}),g=null}const ue=new dh;ue.setAnimationLoop(te),this.setAnimationLoop=function(B){j=B},this.dispose=function(){}}}const Ci=new Mn,Q_=new Ze;function ev(s,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,th(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,b,x,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,v)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,b,x):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Qt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Qt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const b=e.get(f),x=b.envMap,v=b.envMapRotation;x&&(m.envMap.value=x,Ci.copy(v),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),m.envMapRotation.value.setFromMatrix4(Q_.makeRotationFromEuler(Ci)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,b,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*b,m.scale.value=x*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,b){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Qt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const b=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function tv(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,x){const v=x.program;n.uniformBlockBinding(b,v)}function c(b,x){let v=i[b.id];v===void 0&&(g(b),v=h(b),i[b.id]=v,b.addEventListener("dispose",m));const S=x.program;n.updateUBOMapping(b,S);const E=e.render.frame;r[b.id]!==E&&(d(b),r[b.id]=E)}function h(b){const x=u();b.__bindingPointIndex=x;const v=s.createBuffer(),S=b.__size,E=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,S,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,v),v}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const x=i[b.id],v=b.uniforms,S=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let E=0,w=v.length;E<w;E++){const C=Array.isArray(v[E])?v[E]:[v[E]];for(let y=0,M=C.length;y<M;y++){const A=C[y];if(p(A,E,y,S)===!0){const D=A.__offset,L=Array.isArray(A.value)?A.value:[A.value];let z=0;for(let O=0;O<L.length;O++){const F=L[O],W=_(F);typeof F=="number"||typeof F=="boolean"?(A.__data[0]=F,s.bufferSubData(s.UNIFORM_BUFFER,D+z,A.__data)):F.isMatrix3?(A.__data[0]=F.elements[0],A.__data[1]=F.elements[1],A.__data[2]=F.elements[2],A.__data[3]=0,A.__data[4]=F.elements[3],A.__data[5]=F.elements[4],A.__data[6]=F.elements[5],A.__data[7]=0,A.__data[8]=F.elements[6],A.__data[9]=F.elements[7],A.__data[10]=F.elements[8],A.__data[11]=0):(F.toArray(A.__data,z),z+=W.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,D,A.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(b,x,v,S){const E=b.value,w=x+"_"+v;if(S[w]===void 0)return typeof E=="number"||typeof E=="boolean"?S[w]=E:S[w]=E.clone(),!0;{const C=S[w];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return S[w]=E,!0}else if(C.equals(E)===!1)return C.copy(E),!0}return!1}function g(b){const x=b.uniforms;let v=0;const S=16;for(let w=0,C=x.length;w<C;w++){const y=Array.isArray(x[w])?x[w]:[x[w]];for(let M=0,A=y.length;M<A;M++){const D=y[M],L=Array.isArray(D.value)?D.value:[D.value];for(let z=0,O=L.length;z<O;z++){const F=L[z],W=_(F),V=v%S,Q=V%W.boundary,se=V+Q;v+=Q,se!==0&&S-se<W.storage&&(v+=S-se),D.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=v,v+=W.storage}}}const E=v%S;return E>0&&(v+=S-E),b.__size=v,b.__cache={},this}function _(b){const x={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(x.boundary=4,x.storage=4):b.isVector2?(x.boundary=8,x.storage=8):b.isVector3||b.isColor?(x.boundary=16,x.storage=12):b.isVector4?(x.boundary=16,x.storage=16):b.isMatrix3?(x.boundary=48,x.storage=48):b.isMatrix4?(x.boundary=64,x.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),x}function m(b){const x=b.target;x.removeEventListener("dispose",m);const v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function f(){for(const b in i)s.deleteBuffer(i[b]);o=[],i={},r={}}return{bind:l,update:c,dispose:f}}class nv{constructor(e={}){const{canvas:t=Qd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const b=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let S=!1;this._outputColorSpace=Gt;let E=0,w=0,C=null,y=-1,M=null;const A=new rt,D=new rt;let L=null;const z=new ze(0);let O=0,F=t.width,W=t.height,V=1,Q=null,se=null;const he=new rt(0,0,F,W),Me=new rt(0,0,F,W);let j=!1;const te=new So;let ue=!1,B=!1;const X=new Ze,pe=new N,K=new rt,Z={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let J=!1;function le(){return C===null?V:1}let P=n;function oe(R,q){return t.getContext(R,q)}try{const R={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${vl}`),t.addEventListener("webglcontextlost",Pe,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",be,!1),P===null){const q="webgl2";if(P=oe(q,R),P===null)throw oe(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ce,Se,re,Ie,de,ve,He,We,I,T,U,H,ee,G,me,fe,Ee,xe,ye,ge,Te,Re,Ce,De;function k(){ce=new d0(P),ce.init(),Re=new Y_(P,ce),Se=new r0(P,ce,e,Re),re=new q_(P,ce),Se.reversedDepthBuffer&&d&&re.buffers.depth.setReversed(!0),Ie=new m0(P),de=new L_,ve=new j_(P,ce,re,de,Se,Re,Ie),He=new a0(v),We=new h0(v),I=new Mp(P),Ce=new i0(P,I),T=new f0(P,I,Ie,Ce),U=new _0(P,T,I,Ie),ye=new g0(P,Se,ve),fe=new o0(de),H=new D_(v,He,We,ce,Se,Ce,fe),ee=new ev(v,de),G=new U_,me=new H_(ce),xe=new n0(v,He,We,re,U,p,l),Ee=new W_(v,U,Se),De=new tv(P,Ie,Se,re),ge=new s0(P,ce,Ie),Te=new p0(P,ce,Ie),Ie.programs=H.programs,v.capabilities=Se,v.extensions=ce,v.properties=de,v.renderLists=G,v.shadowMap=Ee,v.state=re,v.info=Ie}k();const we=new J_(v,P);this.xr=we,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const R=ce.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ce.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(R){R!==void 0&&(V=R,this.setSize(F,W,!1))},this.getSize=function(R){return R.set(F,W)},this.setSize=function(R,q,ne=!0){if(we.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=R,W=q,t.width=Math.floor(R*V),t.height=Math.floor(q*V),ne===!0&&(t.style.width=R+"px",t.style.height=q+"px"),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(F*V,W*V).floor()},this.setDrawingBufferSize=function(R,q,ne){F=R,W=q,V=ne,t.width=Math.floor(R*ne),t.height=Math.floor(q*ne),this.setViewport(0,0,R,q)},this.getCurrentViewport=function(R){return R.copy(A)},this.getViewport=function(R){return R.copy(he)},this.setViewport=function(R,q,ne,ie){R.isVector4?he.set(R.x,R.y,R.z,R.w):he.set(R,q,ne,ie),re.viewport(A.copy(he).multiplyScalar(V).round())},this.getScissor=function(R){return R.copy(Me)},this.setScissor=function(R,q,ne,ie){R.isVector4?Me.set(R.x,R.y,R.z,R.w):Me.set(R,q,ne,ie),re.scissor(D.copy(Me).multiplyScalar(V).round())},this.getScissorTest=function(){return j},this.setScissorTest=function(R){re.setScissorTest(j=R)},this.setOpaqueSort=function(R){Q=R},this.setTransparentSort=function(R){se=R},this.getClearColor=function(R){return R.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor(...arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha(...arguments)},this.clear=function(R=!0,q=!0,ne=!0){let ie=0;if(R){let Y=!1;if(C!==null){const Ae=C.texture.format;Y=Ae===Tl||Ae===El||Ae===wl}if(Y){const Ae=C.texture.type,Ne=Ae===kn||Ae===Hi||Ae===sr||Ae===rr||Ae===Ml||Ae===Sl,Be=xe.getClearColor(),Oe=xe.getClearAlpha(),qe=Be.r,je=Be.g,Ve=Be.b;Ne?(g[0]=qe,g[1]=je,g[2]=Ve,g[3]=Oe,P.clearBufferuiv(P.COLOR,0,g)):(_[0]=qe,_[1]=je,_[2]=Ve,_[3]=Oe,P.clearBufferiv(P.COLOR,0,_))}else ie|=P.COLOR_BUFFER_BIT}q&&(ie|=P.DEPTH_BUFFER_BIT),ne&&(ie|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",be,!1),xe.dispose(),G.dispose(),me.dispose(),de.dispose(),He.dispose(),We.dispose(),U.dispose(),Ce.dispose(),De.dispose(),H.dispose(),we.dispose(),we.removeEventListener("sessionstart",lt),we.removeEventListener("sessionend",pt),ct.stop()};function Pe(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const R=Ie.autoReset,q=Ee.enabled,ne=Ee.autoUpdate,ie=Ee.needsUpdate,Y=Ee.type;k(),Ie.autoReset=R,Ee.enabled=q,Ee.autoUpdate=ne,Ee.needsUpdate=ie,Ee.type=Y}function be(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function _e(R){const q=R.target;q.removeEventListener("dispose",_e),$(q)}function $(R){ae(R),de.remove(R)}function ae(R){const q=de.get(R).programs;q!==void 0&&(q.forEach(function(ne){H.releaseProgram(ne)}),R.isShaderMaterial&&H.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,ne,ie,Y,Ae){q===null&&(q=Z);const Ne=Y.isMesh&&Y.matrixWorld.determinant()<0,Be=ri(R,q,ne,ie,Y);re.setMaterial(ie,Ne);let Oe=ne.index,qe=1;if(ie.wireframe===!0){if(Oe=T.getWireframeAttribute(ne),Oe===void 0)return;qe=2}const je=ne.drawRange,Ve=ne.attributes.position;let nt=je.start*qe,gt=(je.start+je.count)*qe;Ae!==null&&(nt=Math.max(nt,Ae.start*qe),gt=Math.min(gt,(Ae.start+Ae.count)*qe)),Oe!==null?(nt=Math.max(nt,0),gt=Math.min(gt,Oe.count)):Ve!=null&&(nt=Math.max(nt,0),gt=Math.min(gt,Ve.count));const Pt=gt-nt;if(Pt<0||Pt===1/0)return;Ce.setup(Y,ie,Be,ne,Oe);let bt,xt=ge;if(Oe!==null&&(bt=I.get(Oe),xt=Te,xt.setIndex(bt)),Y.isMesh)ie.wireframe===!0?(re.setLineWidth(ie.wireframeLinewidth*le()),xt.setMode(P.LINES)):xt.setMode(P.TRIANGLES);else if(Y.isLine){let Xe=ie.linewidth;Xe===void 0&&(Xe=1),re.setLineWidth(Xe*le()),Y.isLineSegments?xt.setMode(P.LINES):Y.isLineLoop?xt.setMode(P.LINE_LOOP):xt.setMode(P.LINE_STRIP)}else Y.isPoints?xt.setMode(P.POINTS):Y.isSprite&&xt.setMode(P.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)hr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),xt.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(ce.get("WEBGL_multi_draw"))xt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Xe=Y._multiDrawStarts,At=Y._multiDrawCounts,ot=Y._multiDrawCount,un=Oe?I.get(Oe).bytesPerElement:1,qi=de.get(ie).currentProgram.getUniforms();for(let hn=0;hn<ot;hn++)qi.setValue(P,"_gl_DrawID",hn),xt.render(Xe[hn]/un,At[hn])}else if(Y.isInstancedMesh)xt.renderInstances(nt,Pt,Y.count);else if(ne.isInstancedBufferGeometry){const Xe=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,At=Math.min(ne.instanceCount,Xe);xt.renderInstances(nt,Pt,At)}else xt.render(nt,Pt)};function Fe(R,q,ne){R.transparent===!0&&R.side===wt&&R.forceSinglePass===!1?(R.side=Qt,R.needsUpdate=!0,Un(R,q,ne),R.side=ti,R.needsUpdate=!0,Un(R,q,ne),R.side=wt):Un(R,q,ne)}this.compile=function(R,q,ne=null){ne===null&&(ne=R),f=me.get(ne),f.init(q),x.push(f),ne.traverseVisible(function(Y){Y.isLight&&Y.layers.test(q.layers)&&(f.pushLight(Y),Y.castShadow&&f.pushShadow(Y))}),R!==ne&&R.traverseVisible(function(Y){Y.isLight&&Y.layers.test(q.layers)&&(f.pushLight(Y),Y.castShadow&&f.pushShadow(Y))}),f.setupLights();const ie=new Set;return R.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Ae=Y.material;if(Ae)if(Array.isArray(Ae))for(let Ne=0;Ne<Ae.length;Ne++){const Be=Ae[Ne];Fe(Be,ne,Y),ie.add(Be)}else Fe(Ae,ne,Y),ie.add(Ae)}),f=x.pop(),ie},this.compileAsync=function(R,q,ne=null){const ie=this.compile(R,q,ne);return new Promise(Y=>{function Ae(){if(ie.forEach(function(Ne){de.get(Ne).currentProgram.isReady()&&ie.delete(Ne)}),ie.size===0){Y(R);return}setTimeout(Ae,10)}ce.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let Ke=null;function at(R){Ke&&Ke(R)}function lt(){ct.stop()}function pt(){ct.start()}const ct=new dh;ct.setAnimationLoop(at),typeof self<"u"&&ct.setContext(self),this.setAnimationLoop=function(R){Ke=R,we.setAnimationLoop(R),R===null?ct.stop():ct.start()},we.addEventListener("sessionstart",lt),we.addEventListener("sessionend",pt),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(we.cameraAutoUpdate===!0&&we.updateCamera(q),q=we.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,q,C),f=me.get(R,x.length),f.init(q),x.push(f),X.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),te.setFromProjectionMatrix(X,Bn,q.reversedDepth),B=this.localClippingEnabled,ue=fe.init(this.clippingPlanes,B),m=G.get(R,b.length),m.init(),b.push(m),we.enabled===!0&&we.isPresenting===!0){const Ae=v.xr.getDepthSensingMesh();Ae!==null&&ut(Ae,q,-1/0,v.sortObjects)}ut(R,q,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(Q,se),J=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,J&&xe.addToRenderList(m,R),this.info.render.frame++,ue===!0&&fe.beginShadows();const ne=f.state.shadowsArray;Ee.render(ne,R,q),ue===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const ie=m.opaque,Y=m.transmissive;if(f.setupLights(),q.isArrayCamera){const Ae=q.cameras;if(Y.length>0)for(let Ne=0,Be=Ae.length;Ne<Be;Ne++){const Oe=Ae[Ne];Si(ie,Y,R,Oe)}J&&xe.render(R);for(let Ne=0,Be=Ae.length;Ne<Be;Ne++){const Oe=Ae[Ne];Et(m,R,Oe,Oe.viewport)}}else Y.length>0&&Si(ie,Y,R,q),J&&xe.render(R),Et(m,R,q);C!==null&&w===0&&(ve.updateMultisampleRenderTarget(C),ve.updateRenderTargetMipmap(C)),R.isScene===!0&&R.onAfterRender(v,R,q),Ce.resetDefaultState(),y=-1,M=null,x.pop(),x.length>0?(f=x[x.length-1],ue===!0&&fe.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function ut(R,q,ne,ie){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)ne=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)f.pushLight(R),R.castShadow&&f.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||te.intersectsSprite(R)){ie&&K.setFromMatrixPosition(R.matrixWorld).applyMatrix4(X);const Ne=U.update(R),Be=R.material;Be.visible&&m.push(R,Ne,Be,ne,K.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||te.intersectsObject(R))){const Ne=U.update(R),Be=R.material;if(ie&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),K.copy(R.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),K.copy(Ne.boundingSphere.center)),K.applyMatrix4(R.matrixWorld).applyMatrix4(X)),Array.isArray(Be)){const Oe=Ne.groups;for(let qe=0,je=Oe.length;qe<je;qe++){const Ve=Oe[qe],nt=Be[Ve.materialIndex];nt&&nt.visible&&m.push(R,Ne,nt,ne,K.z,Ve)}}else Be.visible&&m.push(R,Ne,Be,ne,K.z,null)}}const Ae=R.children;for(let Ne=0,Be=Ae.length;Ne<Be;Ne++)ut(Ae[Ne],q,ne,ie)}function Et(R,q,ne,ie){const Y=R.opaque,Ae=R.transmissive,Ne=R.transparent;f.setupLightsView(ne),ue===!0&&fe.setGlobalState(v.clippingPlanes,ne),ie&&re.viewport(A.copy(ie)),Y.length>0&&mn(Y,q,ne),Ae.length>0&&mn(Ae,q,ne),Ne.length>0&&mn(Ne,q,ne),re.buffers.depth.setTest(!0),re.buffers.depth.setMask(!0),re.buffers.color.setMask(!0),re.setPolygonOffset(!1)}function Si(R,q,ne,ie){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[ie.id]===void 0&&(f.state.transmissionRenderTarget[ie.id]=new Vi(1,1,{generateMipmaps:!0,type:ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float")?mr:kn,minFilter:An,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));const Ae=f.state.transmissionRenderTarget[ie.id],Ne=ie.viewport||A;Ae.setSize(Ne.z*v.transmissionResolutionScale,Ne.w*v.transmissionResolutionScale);const Be=v.getRenderTarget(),Oe=v.getActiveCubeFace(),qe=v.getActiveMipmapLevel();v.setRenderTarget(Ae),v.getClearColor(z),O=v.getClearAlpha(),O<1&&v.setClearColor(16777215,.5),v.clear(),J&&xe.render(ne);const je=v.toneMapping;v.toneMapping=_i;const Ve=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),f.setupLightsView(ie),ue===!0&&fe.setGlobalState(v.clippingPlanes,ie),mn(R,ne,ie),ve.updateMultisampleRenderTarget(Ae),ve.updateRenderTargetMipmap(Ae),ce.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let gt=0,Pt=q.length;gt<Pt;gt++){const bt=q[gt],xt=bt.object,Xe=bt.geometry,At=bt.material,ot=bt.group;if(At.side===wt&&xt.layers.test(ie.layers)){const un=At.side;At.side=Qt,At.needsUpdate=!0,si(xt,ne,ie,Xe,At,ot),At.side=un,At.needsUpdate=!0,nt=!0}}nt===!0&&(ve.updateMultisampleRenderTarget(Ae),ve.updateRenderTargetMipmap(Ae))}v.setRenderTarget(Be,Oe,qe),v.setClearColor(z,O),Ve!==void 0&&(ie.viewport=Ve),v.toneMapping=je}function mn(R,q,ne){const ie=q.isScene===!0?q.overrideMaterial:null;for(let Y=0,Ae=R.length;Y<Ae;Y++){const Ne=R[Y],Be=Ne.object,Oe=Ne.geometry,qe=Ne.group;let je=Ne.material;je.allowOverride===!0&&ie!==null&&(je=ie),Be.layers.test(ne.layers)&&si(Be,q,ne,Oe,je,qe)}}function si(R,q,ne,ie,Y,Ae){R.onBeforeRender(v,q,ne,ie,Y,Ae),R.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Y.onBeforeRender(v,q,ne,ie,R,Ae),Y.transparent===!0&&Y.side===wt&&Y.forceSinglePass===!1?(Y.side=Qt,Y.needsUpdate=!0,v.renderBufferDirect(ne,q,ie,Y,R,Ae),Y.side=ti,Y.needsUpdate=!0,v.renderBufferDirect(ne,q,ie,Y,R,Ae),Y.side=wt):v.renderBufferDirect(ne,q,ie,Y,R,Ae),R.onAfterRender(v,q,ne,ie,Y,Ae)}function Un(R,q,ne){q.isScene!==!0&&(q=Z);const ie=de.get(R),Y=f.state.lights,Ae=f.state.shadowsArray,Ne=Y.state.version,Be=H.getParameters(R,Y.state,Ae,q,ne),Oe=H.getProgramCacheKey(Be);let qe=ie.programs;ie.environment=R.isMeshStandardMaterial?q.environment:null,ie.fog=q.fog,ie.envMap=(R.isMeshStandardMaterial?We:He).get(R.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,qe===void 0&&(R.addEventListener("dispose",_e),qe=new Map,ie.programs=qe);let je=qe.get(Oe);if(je!==void 0){if(ie.currentProgram===je&&ie.lightsStateVersion===Ne)return vr(R,Be),je}else Be.uniforms=H.getUniforms(R),R.onBeforeCompile(Be,v),je=H.acquireProgram(Be,Oe),qe.set(Oe,je),ie.uniforms=Be.uniforms;const Ve=ie.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ve.clippingPlanes=fe.uniform),vr(R,Be),ie.needsLights=Gh(R),ie.lightsStateVersion=Ne,ie.needsLights&&(Ve.ambientLightColor.value=Y.state.ambient,Ve.lightProbe.value=Y.state.probe,Ve.directionalLights.value=Y.state.directional,Ve.directionalLightShadows.value=Y.state.directionalShadow,Ve.spotLights.value=Y.state.spot,Ve.spotLightShadows.value=Y.state.spotShadow,Ve.rectAreaLights.value=Y.state.rectArea,Ve.ltc_1.value=Y.state.rectAreaLTC1,Ve.ltc_2.value=Y.state.rectAreaLTC2,Ve.pointLights.value=Y.state.point,Ve.pointLightShadows.value=Y.state.pointShadow,Ve.hemisphereLights.value=Y.state.hemi,Ve.directionalShadowMap.value=Y.state.directionalShadowMap,Ve.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ve.spotShadowMap.value=Y.state.spotShadowMap,Ve.spotLightMatrix.value=Y.state.spotLightMatrix,Ve.spotLightMap.value=Y.state.spotLightMap,Ve.pointShadowMap.value=Y.state.pointShadowMap,Ve.pointShadowMatrix.value=Y.state.pointShadowMatrix),ie.currentProgram=je,ie.uniformsList=null,je}function ks(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=oo.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function vr(R,q){const ne=de.get(R);ne.outputColorSpace=q.outputColorSpace,ne.batching=q.batching,ne.batchingColor=q.batchingColor,ne.instancing=q.instancing,ne.instancingColor=q.instancingColor,ne.instancingMorph=q.instancingMorph,ne.skinning=q.skinning,ne.morphTargets=q.morphTargets,ne.morphNormals=q.morphNormals,ne.morphColors=q.morphColors,ne.morphTargetsCount=q.morphTargetsCount,ne.numClippingPlanes=q.numClippingPlanes,ne.numIntersection=q.numClipIntersection,ne.vertexAlphas=q.vertexAlphas,ne.vertexTangents=q.vertexTangents,ne.toneMapping=q.toneMapping}function ri(R,q,ne,ie,Y){q.isScene!==!0&&(q=Z),ve.resetTextureUnits();const Ae=q.fog,Ne=ie.isMeshStandardMaterial?q.environment:null,Be=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:on,Oe=(ie.isMeshStandardMaterial?We:He).get(ie.envMap||Ne),qe=ie.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,je=!!ne.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Ve=!!ne.morphAttributes.position,nt=!!ne.morphAttributes.normal,gt=!!ne.morphAttributes.color;let Pt=_i;ie.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Pt=v.toneMapping);const bt=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,xt=bt!==void 0?bt.length:0,Xe=de.get(ie),At=f.state.lights;if(ue===!0&&(B===!0||R!==M)){const en=R===M&&ie.id===y;fe.setState(ie,R,en)}let ot=!1;ie.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==At.state.version||Xe.outputColorSpace!==Be||Y.isBatchedMesh&&Xe.batching===!1||!Y.isBatchedMesh&&Xe.batching===!0||Y.isBatchedMesh&&Xe.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Xe.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Xe.instancing===!1||!Y.isInstancedMesh&&Xe.instancing===!0||Y.isSkinnedMesh&&Xe.skinning===!1||!Y.isSkinnedMesh&&Xe.skinning===!0||Y.isInstancedMesh&&Xe.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Xe.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Xe.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Xe.instancingMorph===!1&&Y.morphTexture!==null||Xe.envMap!==Oe||ie.fog===!0&&Xe.fog!==Ae||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==fe.numPlanes||Xe.numIntersection!==fe.numIntersection)||Xe.vertexAlphas!==qe||Xe.vertexTangents!==je||Xe.morphTargets!==Ve||Xe.morphNormals!==nt||Xe.morphColors!==gt||Xe.toneMapping!==Pt||Xe.morphTargetsCount!==xt)&&(ot=!0):(ot=!0,Xe.__version=ie.version);let un=Xe.currentProgram;ot===!0&&(un=Un(ie,q,Y));let qi=!1,hn=!1,Hs=!1;const Rt=un.getUniforms(),gn=Xe.uniforms;if(re.useProgram(un.program)&&(qi=!0,hn=!0,Hs=!0),ie.id!==y&&(y=ie.id,hn=!0),qi||M!==R){re.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Rt.setValue(P,"projectionMatrix",R.projectionMatrix),Rt.setValue(P,"viewMatrix",R.matrixWorldInverse);const ln=Rt.map.cameraPosition;ln!==void 0&&ln.setValue(P,pe.setFromMatrixPosition(R.matrixWorld)),Se.logarithmicDepthBuffer&&Rt.setValue(P,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Rt.setValue(P,"isOrthographic",R.isOrthographicCamera===!0),M!==R&&(M=R,hn=!0,Hs=!0)}if(Y.isSkinnedMesh){Rt.setOptional(P,Y,"bindMatrix"),Rt.setOptional(P,Y,"bindMatrixInverse");const en=Y.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),Rt.setValue(P,"boneTexture",en.boneTexture,ve))}Y.isBatchedMesh&&(Rt.setOptional(P,Y,"batchingTexture"),Rt.setValue(P,"batchingTexture",Y._matricesTexture,ve),Rt.setOptional(P,Y,"batchingIdTexture"),Rt.setValue(P,"batchingIdTexture",Y._indirectTexture,ve),Rt.setOptional(P,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Rt.setValue(P,"batchingColorTexture",Y._colorsTexture,ve));const _n=ne.morphAttributes;if((_n.position!==void 0||_n.normal!==void 0||_n.color!==void 0)&&ye.update(Y,ne,un),(hn||Xe.receiveShadow!==Y.receiveShadow)&&(Xe.receiveShadow=Y.receiveShadow,Rt.setValue(P,"receiveShadow",Y.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(gn.envMap.value=Oe,gn.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&q.environment!==null&&(gn.envMapIntensity.value=q.environmentIntensity),hn&&(Rt.setValue(P,"toneMappingExposure",v.toneMappingExposure),Xe.needsLights&&Vh(gn,Hs),Ae&&ie.fog===!0&&ee.refreshFogUniforms(gn,Ae),ee.refreshMaterialUniforms(gn,ie,V,W,f.state.transmissionRenderTarget[R.id]),oo.upload(P,ks(Xe),gn,ve)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(oo.upload(P,ks(Xe),gn,ve),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Rt.setValue(P,"center",Y.center),Rt.setValue(P,"modelViewMatrix",Y.modelViewMatrix),Rt.setValue(P,"normalMatrix",Y.normalMatrix),Rt.setValue(P,"modelMatrix",Y.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const en=ie.uniformsGroups;for(let ln=0,Ro=en.length;ln<Ro;ln++){const bi=en[ln];De.update(bi,un),De.bind(bi,un)}}return un}function Vh(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function Gh(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(R,q,ne){const ie=de.get(R);ie.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),de.get(R.texture).__webglTexture=q,de.get(R.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:ne,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,q){const ne=de.get(R);ne.__webglFramebuffer=q,ne.__useDefaultFramebuffer=q===void 0};const Wh=P.createFramebuffer();this.setRenderTarget=function(R,q=0,ne=0){C=R,E=q,w=ne;let ie=!0,Y=null,Ae=!1,Ne=!1;if(R){const Oe=de.get(R);if(Oe.__useDefaultFramebuffer!==void 0)re.bindFramebuffer(P.FRAMEBUFFER,null),ie=!1;else if(Oe.__webglFramebuffer===void 0)ve.setupRenderTarget(R);else if(Oe.__hasExternalTextures)ve.rebindTextures(R,de.get(R.texture).__webglTexture,de.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ve=R.depthTexture;if(Oe.__boundDepthTexture!==Ve){if(Ve!==null&&de.has(Ve)&&(R.width!==Ve.image.width||R.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ve.setupDepthRenderbuffer(R)}}const qe=R.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Ne=!0);const je=de.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(je[q])?Y=je[q][ne]:Y=je[q],Ae=!0):R.samples>0&&ve.useMultisampledRTT(R)===!1?Y=de.get(R).__webglMultisampledFramebuffer:Array.isArray(je)?Y=je[ne]:Y=je,A.copy(R.viewport),D.copy(R.scissor),L=R.scissorTest}else A.copy(he).multiplyScalar(V).floor(),D.copy(Me).multiplyScalar(V).floor(),L=j;if(ne!==0&&(Y=Wh),re.bindFramebuffer(P.FRAMEBUFFER,Y)&&ie&&re.drawBuffers(R,Y),re.viewport(A),re.scissor(D),re.setScissorTest(L),Ae){const Oe=de.get(R.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+q,Oe.__webglTexture,ne)}else if(Ne){const Oe=q;for(let qe=0;qe<R.textures.length;qe++){const je=de.get(R.textures[qe]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+qe,je.__webglTexture,ne,Oe)}}else if(R!==null&&ne!==0){const Oe=de.get(R.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Oe.__webglTexture,ne)}y=-1},this.readRenderTargetPixels=function(R,q,ne,ie,Y,Ae,Ne,Be=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=de.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ne!==void 0&&(Oe=Oe[Ne]),Oe){re.bindFramebuffer(P.FRAMEBUFFER,Oe);try{const qe=R.textures[Be],je=qe.format,Ve=qe.type;if(!Se.textureFormatReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Se.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-ie&&ne>=0&&ne<=R.height-Y&&(R.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Be),P.readPixels(q,ne,ie,Y,Re.convert(je),Re.convert(Ve),Ae))}finally{const qe=C!==null?de.get(C).__webglFramebuffer:null;re.bindFramebuffer(P.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(R,q,ne,ie,Y,Ae,Ne,Be=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=de.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ne!==void 0&&(Oe=Oe[Ne]),Oe)if(q>=0&&q<=R.width-ie&&ne>=0&&ne<=R.height-Y){re.bindFramebuffer(P.FRAMEBUFFER,Oe);const qe=R.textures[Be],je=qe.format,Ve=qe.type;if(!Se.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Se.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const nt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,nt),P.bufferData(P.PIXEL_PACK_BUFFER,Ae.byteLength,P.STREAM_READ),R.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Be),P.readPixels(q,ne,ie,Y,Re.convert(je),Re.convert(Ve),0);const gt=C!==null?de.get(C).__webglFramebuffer:null;re.bindFramebuffer(P.FRAMEBUFFER,gt);const Pt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await ef(P,Pt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,nt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,Ae),P.deleteBuffer(nt),P.deleteSync(Pt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,q=null,ne=0){const ie=Math.pow(2,-ne),Y=Math.floor(R.image.width*ie),Ae=Math.floor(R.image.height*ie),Ne=q!==null?q.x:0,Be=q!==null?q.y:0;ve.setTexture2D(R,0),P.copyTexSubImage2D(P.TEXTURE_2D,ne,0,0,Ne,Be,Y,Ae),re.unbindTexture()};const Xh=P.createFramebuffer(),qh=P.createFramebuffer();this.copyTextureToTexture=function(R,q,ne=null,ie=null,Y=0,Ae=null){Ae===null&&(Y!==0?(hr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ae=Y,Y=0):Ae=0);let Ne,Be,Oe,qe,je,Ve,nt,gt,Pt;const bt=R.isCompressedTexture?R.mipmaps[Ae]:R.image;if(ne!==null)Ne=ne.max.x-ne.min.x,Be=ne.max.y-ne.min.y,Oe=ne.isBox3?ne.max.z-ne.min.z:1,qe=ne.min.x,je=ne.min.y,Ve=ne.isBox3?ne.min.z:0;else{const _n=Math.pow(2,-Y);Ne=Math.floor(bt.width*_n),Be=Math.floor(bt.height*_n),R.isDataArrayTexture?Oe=bt.depth:R.isData3DTexture?Oe=Math.floor(bt.depth*_n):Oe=1,qe=0,je=0,Ve=0}ie!==null?(nt=ie.x,gt=ie.y,Pt=ie.z):(nt=0,gt=0,Pt=0);const xt=Re.convert(q.format),Xe=Re.convert(q.type);let At;q.isData3DTexture?(ve.setTexture3D(q,0),At=P.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(ve.setTexture2DArray(q,0),At=P.TEXTURE_2D_ARRAY):(ve.setTexture2D(q,0),At=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,q.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,q.unpackAlignment);const ot=P.getParameter(P.UNPACK_ROW_LENGTH),un=P.getParameter(P.UNPACK_IMAGE_HEIGHT),qi=P.getParameter(P.UNPACK_SKIP_PIXELS),hn=P.getParameter(P.UNPACK_SKIP_ROWS),Hs=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,bt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,bt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,qe),P.pixelStorei(P.UNPACK_SKIP_ROWS,je),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ve);const Rt=R.isDataArrayTexture||R.isData3DTexture,gn=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){const _n=de.get(R),en=de.get(q),ln=de.get(_n.__renderTarget),Ro=de.get(en.__renderTarget);re.bindFramebuffer(P.READ_FRAMEBUFFER,ln.__webglFramebuffer),re.bindFramebuffer(P.DRAW_FRAMEBUFFER,Ro.__webglFramebuffer);for(let bi=0;bi<Oe;bi++)Rt&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,de.get(R).__webglTexture,Y,Ve+bi),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,de.get(q).__webglTexture,Ae,Pt+bi)),P.blitFramebuffer(qe,je,Ne,Be,nt,gt,Ne,Be,P.DEPTH_BUFFER_BIT,P.NEAREST);re.bindFramebuffer(P.READ_FRAMEBUFFER,null),re.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(Y!==0||R.isRenderTargetTexture||de.has(R)){const _n=de.get(R),en=de.get(q);re.bindFramebuffer(P.READ_FRAMEBUFFER,Xh),re.bindFramebuffer(P.DRAW_FRAMEBUFFER,qh);for(let ln=0;ln<Oe;ln++)Rt?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,_n.__webglTexture,Y,Ve+ln):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,_n.__webglTexture,Y),gn?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,en.__webglTexture,Ae,Pt+ln):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,en.__webglTexture,Ae),Y!==0?P.blitFramebuffer(qe,je,Ne,Be,nt,gt,Ne,Be,P.COLOR_BUFFER_BIT,P.NEAREST):gn?P.copyTexSubImage3D(At,Ae,nt,gt,Pt+ln,qe,je,Ne,Be):P.copyTexSubImage2D(At,Ae,nt,gt,qe,je,Ne,Be);re.bindFramebuffer(P.READ_FRAMEBUFFER,null),re.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else gn?R.isDataTexture||R.isData3DTexture?P.texSubImage3D(At,Ae,nt,gt,Pt,Ne,Be,Oe,xt,Xe,bt.data):q.isCompressedArrayTexture?P.compressedTexSubImage3D(At,Ae,nt,gt,Pt,Ne,Be,Oe,xt,bt.data):P.texSubImage3D(At,Ae,nt,gt,Pt,Ne,Be,Oe,xt,Xe,bt):R.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,Ae,nt,gt,Ne,Be,xt,Xe,bt.data):R.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,Ae,nt,gt,bt.width,bt.height,xt,bt.data):P.texSubImage2D(P.TEXTURE_2D,Ae,nt,gt,Ne,Be,xt,Xe,bt);P.pixelStorei(P.UNPACK_ROW_LENGTH,ot),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,un),P.pixelStorei(P.UNPACK_SKIP_PIXELS,qi),P.pixelStorei(P.UNPACK_SKIP_ROWS,hn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Hs),Ae===0&&q.generateMipmaps&&P.generateMipmap(At),re.unbindTexture()},this.initRenderTarget=function(R){de.get(R).__webglFramebuffer===void 0&&ve.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ve.setTextureCube(R,0):R.isData3DTexture?ve.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ve.setTexture2DArray(R,0):ve.setTexture2D(R,0),re.unbindTexture()},this.resetState=function(){E=0,w=0,C=null,re.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}}const Fs=uh;let Rs=0,fr=0,_h=!1;const iv=Fs.onStart,sv=Fs.onProgress,rv=Fs.onLoad;function pr(){const s=document.querySelector("#sea-loading");if(!s)return;const e=s.querySelector(".sea-loading-progress");if(!e)return;const t=_h?100:Rs?Math.min(95,Math.round(fr/Rs*95)):0;e.style.width=t+"%",e.setAttribute("role","progressbar"),e.setAttribute("aria-valuemin","0"),e.setAttribute("aria-valuemax","100"),e.setAttribute("aria-valuenow",String(t))}Fs.onStart=(s,e,t)=>{Rs=Math.max(Rs,t),fr=Math.max(fr,e),iv?.(s,e,t),pr()};Fs.onProgress=(s,e,t)=>{Rs=Math.max(Rs,t),fr=Math.max(fr,e),sv?.(s,e,t),pr()};Fs.onLoad=()=>{rv?.(),pr()};const vh=new MutationObserver(()=>{const s=document.querySelector("#sea-loading");s&&(s.classList.contains("sea-loading-done")?(_h=!0,pr(),vh.disconnect()):pr())});vh.observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["class"]});function fu(s,e){if(e===Td)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===ll||e===Yu){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===ll)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class _o extends Ns{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new uv(t)}),this.register(function(t){return new hv(t)}),this.register(function(t){return new yv(t)}),this.register(function(t){return new Mv(t)}),this.register(function(t){return new Sv(t)}),this.register(function(t){return new fv(t)}),this.register(function(t){return new pv(t)}),this.register(function(t){return new mv(t)}),this.register(function(t){return new gv(t)}),this.register(function(t){return new cv(t)}),this.register(function(t){return new _v(t)}),this.register(function(t){return new dv(t)}),this.register(function(t){return new xv(t)}),this.register(function(t){return new vv(t)}),this.register(function(t){return new av(t)}),this.register(function(t){return new bv(t)}),this.register(function(t){return new wv(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=ir.extractUrlBase(e);o=ir.resolveURL(c,this.path)}else o=ir.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new hh(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===xh){try{o[tt.KHR_BINARY_GLTF]=new Ev(e)}catch(u){i&&i(u);return}r=JSON.parse(o[tt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new zv(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case tt.KHR_MATERIALS_UNLIT:o[u]=new lv;break;case tt.KHR_DRACO_MESH_COMPRESSION:o[u]=new Tv(r,this.dracoLoader);break;case tt.KHR_TEXTURE_TRANSFORM:o[u]=new Av;break;case tt.KHR_MESH_QUANTIZATION:o[u]=new Rv;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function ov(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const tt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class av{constructor(e){this.parser=e,this.name=tt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new ze(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],on);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new ro(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new np(h),c.distance=u;break;case"spot":c=new ep(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Fn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class lv{constructor(){this.name=tt.KHR_MATERIALS_UNLIT}getMaterialType(){return Wt}extendParams(e,t,n){const i=[];e.color=new ze(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],on),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Gt))}return Promise.all(i)}}class cv{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class uv{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ke(a,a)}return Promise.all(r)}}class hv{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class dv{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class fv{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new ze(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],on)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Gt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class pv{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class mv{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new ze().setRGB(a[0],a[1],a[2],on),Promise.all(r)}}class gv{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class _v{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new ze().setRGB(a[0],a[1],a[2],on),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Gt)),Promise.all(r)}}class vv{constructor(e){this.parser=e,this.name=tt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class xv{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class yv{constructor(e){this.parser=e,this.name=tt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class Mv{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class Sv{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class bv{constructor(e){this.name=tt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(p),h,u,d,i.mode,i.filter),p})})}else return null}}class wv{constructor(e){this.name=tt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==xn.TRIANGLES&&c.mode!==xn.TRIANGLE_STRIP&&c.mode!==xn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,p=[];for(const g of u){const _=new Ze,m=new N,f=new Tt,b=new N(1,1,1),x=new dr(g.geometry,g.material,d);for(let v=0;v<d;v++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&f.fromBufferAttribute(l.ROTATION,v),l.SCALE&&b.fromBufferAttribute(l.SCALE,v),x.setMatrixAt(v,_.compose(m,f,b));for(const v in l)if(v==="_COLOR_0"){const S=l[v];x.instanceColor=new Oi(S.array,S.itemSize,S.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,l[v]);dt.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),p.push(x)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}}const xh="glTF",$s=12,pu={JSON:1313821514,BIN:5130562};class Ev{constructor(e){this.name=tt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,$s),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==xh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-$s,r=new DataView(e,$s);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===pu.JSON){const c=new Uint8Array(e,$s+o,a);this.content=n.decode(c)}else if(l===pu.BIN){const c=$s+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Tv{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=tt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const u=pl[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=pl[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],p=vs[d.componentType];c[u]=p.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(p){for(const g in p.attributes){const _=p.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}u(p)},a,c,on,d)})})}}class Av{constructor(){this.name=tt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Rv{constructor(){this.name=tt.KHR_MESH_QUANTIZATION}}class yh extends _r{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-t,u=(n-t)/h,d=u*u,p=d*u,g=e*c,_=g-c,m=-2*p+3*d,f=p-d,b=1-m,x=f-d+u;for(let v=0;v!==a;v++){const S=o[_+v+a],E=o[_+v+l]*h,w=o[g+v+a],C=o[g+v]*h;r[v]=b*S+x*E+m*w+f*C}return r}}const Cv=new Tt;class Pv extends yh{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return Cv.fromArray(r).normalize().toArray(r),r}}const xn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},vs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},mu={9728:qt,9729:rn,9984:Bu,9985:eo,9986:Js,9987:An},gu={33071:Zn,33648:uo,10497:ki},ua={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},pl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},di={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Iv={CUBICSPLINE:void 0,LINEAR:cr,STEP:lr},ha={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Dv(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Lt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ti})),s.DefaultMaterial}function Pi(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Fn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Lv(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function Nv(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Uv(s){let e;const t=s.extensions&&s.extensions[tt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+da(t.attributes):e=s.indices+":"+da(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+da(s.targets[n]);return e}function da(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function ml(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Fv(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Ov=new Ze;class zv{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new ov,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new Zf(this.options.manager):this.textureLoader=new sp(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new hh(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Pi(r,a,i),Fn(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())r(h,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[tt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(ir.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=ua[i.type],a=vs[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Mt(c,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=ua[i.type],c=vs[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(p&&p!==u){const f=Math.floor(d/p),b="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+f+":"+i.count;let x=t.cache.get(b);x||(_=new c(a,f*p,i.count*p/h),x=new Af(_,p/h),t.cache.add(b,x)),m=new Dl(x,l,d%p/h,g)}else a===null?_=new c(i.count*l):_=new c(a,d,i.count*l),m=new Mt(_,l,g);if(i.sparse!==void 0){const f=ua.SCALAR,b=vs[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,S=new b(o[1],x,i.sparse.count*f),E=new c(o[2],v,i.sparse.count*l);a!==null&&(m=new Mt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let w=0,C=S.length;w<C;w++){const y=S[w];if(m.setX(y,E[w*l]),l>=2&&m.setY(y,E[w*l+1]),l>=3&&m.setZ(y,E[w*l+2]),l>=4&&m.setW(y,E[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=mu[d.magFilter]||rn,h.minFilter=mu[d.minFilter]||An,h.wrapS=gu[d.wrapS]||ki,h.wrapT=gu[d.wrapT]||ki,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==qt&&h.minFilter!==rn,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,p){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Bt(_);m.needsUpdate=!0,d(m)}),t.load(ir.resolveURL(u,r.path),g,void 0,p)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),Fn(u,o),u.userData.mimeType=o.mimeType||Fv(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[tt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[tt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[tt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new gr,In.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Nl,In.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Lt}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[tt.KHR_MATERIALS_UNLIT]){const u=i[tt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new ze(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],on),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,Gt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=wt);const h=r.alphaMode||ha.OPAQUE;if(h===ha.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===ha.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Wt&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ke(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Wt&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Wt){const u=r.emissiveFactor;a.emissive=new ze().setRGB(u[0],u[1],u[2],on)}return r.emissiveTexture!==void 0&&o!==Wt&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Gt)),Promise.all(c).then(function(){const u=new o(a);return r.name&&(u.name=r.name),Fn(u,r),t.associations.set(u,{materials:e}),r.extensions&&Pi(i,u,r),u})}createUniqueName(e){const t=ht.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[tt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return _u(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],h=Uv(c),u=i[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[tt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=_u(new St,c,t),i[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?Dv(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let p=0,g=h.length;p<g;p++){const _=h[p],m=o[p];let f;const b=c[p];if(m.mode===xn.TRIANGLES||m.mode===xn.TRIANGLE_STRIP||m.mode===xn.TRIANGLE_FAN||m.mode===void 0)f=r.isSkinnedMesh===!0?new Cf(_,b):new Ye(_,b),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===xn.TRIANGLE_STRIP?f.geometry=fu(f.geometry,Yu):m.mode===xn.TRIANGLE_FAN&&(f.geometry=fu(f.geometry,ll));else if(m.mode===xn.LINES)f=new Uf(_,b);else if(m.mode===xn.LINE_STRIP)f=new bo(_,b);else if(m.mode===xn.LINE_LOOP)f=new Ff(_,b);else if(m.mode===xn.POINTS)f=new Is(_,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&Nv(f,r),f.name=t.createUniqueName(r.name||"mesh_"+e),Fn(f,r),m.extensions&&Pi(i,f,m),t.assignFinalMaterial(f),u.push(f)}for(let p=0,g=u.length;p<g;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return r.extensions&&Pi(i,u[0],r),u[0];const d=new it;r.extensions&&Pi(i,d,r),t.associations.set(d,{meshes:e});for(let p=0,g=u.length;p<g;p++)d.add(u[p]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new sn(Ge.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Bl(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Fn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const u=o[c];if(u){a.push(u);const d=new Ze;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ll(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const p=i.channels[u],g=i.samplers[p.sampler],_=p.target,m=_.node,f=i.parameters!==void 0?i.parameters[g.input]:g.input,b=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",f)),l.push(this.getDependency("accessor",b)),c.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],p=u[1],g=u[2],_=u[3],m=u[4],f=[];for(let x=0,v=d.length;x<v;x++){const S=d[x],E=p[x],w=g[x],C=_[x],y=m[x];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();const M=n._createAnimationTracks(S,E,w,C,y);if(M)for(let A=0;A<M.length;A++)f.push(M[A])}const b=new hl(r,void 0,f);return Fn(b,i),b})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(d,Ov)});for(let p=0,g=u.length;p<g;p++)h.add(u[p]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new sh:c.length>1?h=new it:c.length===1?h=c[0]:h=new dt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Fn(h,r),r.extensions&&Pi(n,h,r),r.matrix!==void 0){const u=new Ze;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new it;n.name&&(r.name=i.createUniqueName(n.name)),Fn(r,n),n.extensions&&Pi(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);const c=h=>{const u=new Map;for(const[d,p]of i.associations)(d instanceof In||d instanceof Bt)&&u.set(d,p);return h.traverse(d=>{const p=i.associations.get(d);p!=null&&u.set(d,p)}),u};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,l=[];di[r.path]===di.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(di[r.path]){case di.weights:c=Es;break;case di.rotation:c=Ts;break;case di.translation:case di.scale:c=As;break;default:n.itemSize===1?c=Es:c=As;break}const h=i.interpolation!==void 0?Iv[i.interpolation]:cr,u=this._getArrayFromAccessor(n);for(let d=0,p=l.length;d<p;d++){const g=new c(l[d]+"."+di[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=ml(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Ts?Pv:yh;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Bv(s,e,t){const n=e.attributes,i=new Gn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new N(l[0],l[1],l[2]),new N(c[0],c[1],c[2])),a.normalized){const h=ml(vs[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new N,l=new N;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],p=d.min,g=d.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),d.normalized){const _=ml(vs[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new Dn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function _u(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=pl[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return st.workingColorSpace!==on&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${st.workingColorSpace}" not supported.`),Fn(s,e),Bv(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Lv(s,e.targets,t):s})}const zi={deckY:13.6},vu=30/(650.131- -497.055),kv=(355.25- -497.055)*(6/(650.131- -497.055)),zt=kv+9,Ut=zt-zi.deckY,Cs=-24;function Hv(){const s=new it;return s.name="imported-ship",s.userData.loadingState="loading",new _o().load("./models/Ship.glb",e=>{const t=e.scene;t.scale.setScalar(vu),t.rotation.y=-Math.PI/2,t.position.set(0,zt-355.25*vu,Cs),t.updateMatrixWorld(!0);const n=[];t.traverse(o=>{if(!o.isMesh)return;if(o.name.startsWith("UCX_")){o.visible=!1,o.material=new Wt({side:wt,visible:!1}),n.push(o);return}const a=l=>{if(!l?.name?.toLowerCase().includes("c_boat_red_mat"))return l;const c=l.clone();return c.color.set("#101114"),c};Array.isArray(o.material)?o.material=o.material.map(a):o.material=a(o.material),o.castShadow=!0,o.receiveShadow=!0});const i=new it;i.name="sea-overview-bob",i.position.set(0,zt-5,Cs);const r=t.clone(!0);r.position.sub(i.position),r.traverse(o=>{o.isMesh&&o.name.startsWith("UCX_")&&(o.visible=!1)}),i.add(r),i.visible=!1,s.add(i),s.add(t),s.userData.model=t,s.userData.colliders=n,new _o().load("./models/Ship_001_Glass.glb",o=>{const a=o.scene;a.name="ship-glass",a.scale.copy(t.scale),a.rotation.copy(t.rotation),a.position.copy(t.position),a.traverse(c=>{if(!c.isMesh)return;c.castShadow=!1,c.receiveShadow=!0;const h=new Ln({color:11983336,metalness:0,roughness:.12,transparent:!0,opacity:.28,depthWrite:!1,side:wt});c.material=h}),s.add(a);const l=a.clone(!0);l.position.sub(i.position),i.add(l),s.userData.overviewVisualMeshes.push(...a.children.filter(c=>c.isMesh))},void 0,o=>console.warn("[Sea] Optional ship glass failed to load:",o)),s.userData.overviewDisplay=i,s.userData.overviewVisualMeshes=[],t.traverse(o=>{o.isMesh&&!o.name.startsWith("UCX_")&&s.userData.overviewVisualMeshes.push(o)}),s.userData.pendingSail&&(s.userData.pendingSail(),delete s.userData.pendingSail),s.userData.loadingState="ready",console.info("[Sea] Hull height=30m (5x test), visual deck=",zt,"UCX meshes=",n.length)},void 0,e=>{s.userData.loadingState="error",console.error("[Sea] Ship.glb loading failed:",e)}),s}const Vv=new N(0,-1,0),qr=new To,jr=new $e,Ii=new N,xu=new N;function Gv(s){function e(l,c,h=zt+9){const u=s.userData.colliders;if(!u?.length)return null;s.updateMatrixWorld(!0),xu.set(l,h,c),qr.set(xu,Vv),qr.near=0,qr.far=200;const d=qr.intersectObjects(u,!1);for(const p of d)if(p.face&&(jr.getNormalMatrix(p.object.matrixWorld),Ii.copy(p.face.normal).applyMatrix3(jr).normalize(),Math.abs(Ii.y)>.55))return p.point.y;return null}function t(l,c){const h=e(l,c);if(h===null)return null;for(const u of[.38,.72])for(let d=0;d<8;d++){const p=d*Math.PI/4,g=e(l+Math.cos(p)*u,c+Math.sin(p)*u);if(g===null||Math.abs(g-h)>.55)return null}return h}function n(l=0,c=-33){if(!s.userData.colliders?.length)return null;for(const h of[0,1,2,3,4,5,7,9,11,14,17])for(let u=0;u<(h===0?1:24);u++){const d=u*Math.PI/12,p=l+Math.cos(d)*h,g=c+Math.sin(d)*h,_=t(p,g);if(_!==null)return{x:p,z:g,y:_}}return null}const i=new To,r=new N,o=new N;function a(l,c,h,u,d){const p=s.userData.colliders,g=Math.hypot(h,u);if(!p?.length||g<1e-6)return{x:l+h,z:c+u};s.updateMatrixWorld(!0),r.set(h/g,0,u/g);let _=g;for(const m of[.4,1.1,1.8]){o.set(l,d+m,c),i.set(o,r),i.near=0,i.far=g+.28;for(const f of i.intersectObjects(p,!1))if(f.face&&(jr.getNormalMatrix(f.object.matrixWorld),Ii.copy(f.face.normal).applyMatrix3(jr).normalize(),!(Math.abs(Ii.y)>.55)&&(Ii.dot(r)>0&&Ii.negate(),!(Ii.dot(r)>-.2)))){_=Math.min(_,Math.max(0,f.distance-.28));break}}return{x:l+r.x*_,z:c+r.z*_}}return{floorAt:e,safeSpot:n,blockedMove:a,ready:()=>!!s.userData.colliders?.length}}const yu={type:"change"},Gl={type:"start"},Mh={type:"end"},Yr=new Ps,Mu=new pi,Wv=Math.cos(70*Ge.DEG2RAD),Ot=new N,cn=2*Math.PI,vt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},fa=1e-6;class Xv extends xp{constructor(e,t=null){super(e,t),this.state=vt.NONE,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ms.ROTATE,MIDDLE:ms.DOLLY,RIGHT:ms.PAN},this.touches={ONE:hs.ROTATE,TWO:hs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new Tt,this._lastTargetPosition=new N,this._quat=new Tt().setFromUnitVectors(e.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Hc,this._sphericalDelta=new Hc,this._scale=1,this._panOffset=new N,this._rotateStart=new ke,this._rotateEnd=new ke,this._rotateDelta=new ke,this._panStart=new ke,this._panEnd=new ke,this._panDelta=new ke,this._dollyStart=new ke,this._dollyEnd=new ke,this._dollyDelta=new ke,this._dollyDirection=new N,this._mouse=new ke,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=jv.bind(this),this._onPointerDown=qv.bind(this),this._onPointerUp=Yv.bind(this),this._onContextMenu=tx.bind(this),this._onMouseWheel=Zv.bind(this),this._onKeyDown=Jv.bind(this),this._onTouchStart=Qv.bind(this),this._onTouchMove=ex.bind(this),this._onMouseDown=Kv.bind(this),this._onMouseMove=$v.bind(this),this._interceptControlDown=nx.bind(this),this._interceptControlUp=ix.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(yu),this.update(),this.state=vt.NONE}update(e=null){const t=this.object.position;Ot.copy(t).sub(this.target),Ot.applyQuaternion(this._quat),this._spherical.setFromVector3(Ot),this.autoRotate&&this.state===vt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=cn:n>Math.PI&&(n-=cn),i<-Math.PI?i+=cn:i>Math.PI&&(i-=cn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ot.setFromSpherical(this._spherical),Ot.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ot),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ot.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new N(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new N(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ot.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Yr.origin.copy(this.object.position),Yr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Yr.direction))<Wv?this.object.lookAt(this.target):(Mu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Yr.intersectPlane(Mu,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>fa||8*(1-this._lastQuaternion.dot(this.object.quaternion))>fa||this._lastTargetPosition.distanceToSquared(this.target)>fa?(this.dispatchEvent(yu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?cn/60*this.autoRotateSpeed*e:cn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ot.setFromMatrixColumn(t,0),Ot.multiplyScalar(-e),this._panOffset.add(Ot)}_panUp(e,t){this.screenSpacePanning===!0?Ot.setFromMatrixColumn(t,1):(Ot.setFromMatrixColumn(t,0),Ot.crossVectors(this.object.up,Ot)),Ot.multiplyScalar(e),this._panOffset.add(Ot)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Ot.copy(i).sub(this.target);let r=Ot.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(cn*this._rotateDelta.x/t.clientHeight),this._rotateUp(cn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(cn*this._rotateDelta.x/t.clientHeight),this._rotateUp(cn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ke,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function qv(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function jv(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function Yv(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Mh),this.state=vt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Kv(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ms.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=vt.DOLLY;break;case ms.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=vt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=vt.ROTATE}break;case ms.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=vt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=vt.PAN}break;default:this.state=vt.NONE}this.state!==vt.NONE&&this.dispatchEvent(Gl)}function $v(s){switch(this.state){case vt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case vt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case vt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function Zv(s){this.enabled===!1||this.enableZoom===!1||this.state!==vt.NONE||(s.preventDefault(),this.dispatchEvent(Gl),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Mh))}function Jv(s){this.enabled!==!1&&this._handleKeyDown(s)}function Qv(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case hs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=vt.TOUCH_ROTATE;break;case hs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=vt.TOUCH_PAN;break;default:this.state=vt.NONE}break;case 2:switch(this.touches.TWO){case hs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=vt.TOUCH_DOLLY_PAN;break;case hs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=vt.TOUCH_DOLLY_ROTATE;break;default:this.state=vt.NONE}break;default:this.state=vt.NONE}this.state!==vt.NONE&&this.dispatchEvent(Gl)}function ex(s){switch(this._trackPointer(s),this.state){case vt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case vt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case vt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case vt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=vt.NONE}}function tx(s){this.enabled!==!1&&s.preventDefault()}function nx(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ix(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const{lerp:Di}=Ge,$t=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180];for(let s=0;s<256;s++)$t[256+s]=$t[s];function pa(s){return s*s*s*(s*(s*6-15)+10)}function fi(s,e,t,n){const i=s&15,r=i<8?e:t,o=i<4?t:i==12||i==14?e:n;return((i&1)==0?r:-r)+((i&2)==0?o:-o)}class sx{noise(e,t,n){const i=Math.floor(e),r=Math.floor(t),o=Math.floor(n),a=i&255,l=r&255,c=o&255;e-=i,t-=r,n-=o;const h=e-1,u=t-1,d=n-1,p=pa(e),g=pa(t),_=pa(n),m=$t[a]+l,f=$t[m]+c,b=$t[m+1]+c,x=$t[a+1]+l,v=$t[x]+c,S=$t[x+1]+c;return Di(Di(Di(fi($t[f],e,t,n),fi($t[v],h,t,n),p),Di(fi($t[b],e,u,n),fi($t[S],h,u,n),p),g),Di(Di(fi($t[f+1],e,t,d),fi($t[v+1],h,t,d),p),Di(fi($t[b+1],e,u,d),fi($t[S+1],h,u,d),p),g),_)}}const rx=[[.18,1,48,.95,.28],[-.28,1,29,.4,.15],[.35,1,17,.16,.1],[-.4,1,10,.06,.06]],ox=(s,e,t)=>{const n=Math.max(0,Math.min(1,(t-s)/(e-s)));return n*n*(3-2*n)};function ax(s,e,t,n=240,i=320){const r=s.time.value,o=s.travel.value,a=s.curvature.value,l=Math.max(1e-4,s.waveSize.value),c=s.height.value;let h=e,u=t,d=0;for(let p=0;p<3;p++){const g=Math.hypot(h,u),_=Math.max(2.6*18e3/n*Math.pow(Math.max(g/18e3,1e-6),1-1/2.6),g*Math.PI*2/i);let m=0,f=0;d=0;for(const[b,x,v,S,E]of rx){const w=Math.hypot(b,x),C=b/w,y=x/w,M=v*l,A=2*Math.PI/M,D=Math.min(S*c,E/A)*(1-ox(M/8,M/3,_)),L=A*(C*h+y*(u-o))-Math.sqrt(9.81*A)*r;d+=D*Math.sin(L),m+=.18*D*C*Math.cos(L),f+=.18*D*y*Math.cos(L)}h=e-m,u=t-f}return d-(e*e+t*t)*a/12e4}function lx(){const e=new sx,t=new Float32Array(256*256),n=(a,l,c)=>{const h=a/256,u=l/256,d=Ge.lerp(e.noise(h*c,u*c,4.2),e.noise((h-1)*c,u*c,4.2),h),p=Ge.lerp(e.noise(h*c,(u-1)*c,4.2),e.noise((h-1)*c,(u-1)*c,4.2),h);return Ge.lerp(d,p,u)};for(let a=0;a<256;a++)for(let l=0;l<256;l++)t[a*256+l]=n(l,a,8)+n(l,a,16)*.5+n(l,a,32)*.25+n(l,a,64)*.1;const i=new Uint8Array(256*256*4),r=(a,l)=>t[(l+256)%256*256+(a+256)%256];for(let a=0;a<256;a++)for(let l=0;l<256;l++){const c=(a*256+l)*4;i[c]=Ge.clamp(128+(r(l+1,a)-r(l-1,a))*650,0,255),i[c+1]=Ge.clamp(128+(r(l,a+1)-r(l,a-1))*650,0,255),i[c+2]=Ge.clamp(128+r(l,a)*180,0,255),i[c+3]=Ge.clamp(255*(1-Math.abs(r(l,a))*3),0,255)}const o=new Mo(i,256,256);return o.wrapS=o.wrapT=ki,o.magFilter=rn,o.minFilter=An,o.generateMipmaps=!0,o.needsUpdate=!0,o}function cx(){const e=new Uint8Array(16384);for(let n=0;n<64;n++)for(let i=0;i<64;i++){const r=(i+.5)/64*2-1,o=(n+.5)/64*2-1,a=Math.hypot(r,o),l=Math.atan2(o,r),c=Math.sin(a*31+Math.sin(l*7)*.38)*Math.exp(-a*1.6),h=31*Math.cos(a*31+Math.sin(l*7)*.38)*Math.exp(-a*1.6)-1.6*c,u=a>.001?r/a*h*.045:0,d=a>.001?o/a*h*.045:0,p=(n*64+i)*4;e[p]=Math.round(127.5+127.5*Math.max(-1,Math.min(1,u))),e[p+1]=Math.round(127.5+127.5*Math.max(-1,Math.min(1,d))),e[p+2]=255,e[p+3]=255}const t=new Mo(e,64,64,pn);return t.wrapS=t.wrapT=Zn,t.magFilter=rn,t.minFilter=An,t.generateMipmaps=!0,t.needsUpdate=!0,t}function ux(){const s=typeof matchMedia=="function"&&matchMedia("(max-width: 600px)").matches,e=s?180:240,t=s?192:320,n=[0,0,0],i=[];for(let _=1;_<=e;_++){const m=18e3*Math.pow(_/e,2.6);for(let f=0;f<t;f++){const b=f/t*Math.PI*2;n.push(Math.cos(b)*m,0,Math.sin(b)*m)}}for(let _=0;_<t;_++)i.push(0,1+(_+1)%t,1+_);for(let _=0;_<e-1;_++)for(let m=0;m<t;m++){const f=1+_*t+m,b=1+_*t+(m+1)%t,x=f+t,v=b+t;i.push(f,b,x,b,v,x)}const r=new St;r.setAttribute("position",new ft(n,3)),r.setIndex(i);const o=lx(),a={time:{value:0},travel:{value:0},transparencyCenter:{value:new ke},overviewOpaque:{value:0},curvature:{value:1},height:{value:.825},waveSize:{value:1},normalStrength:{value:0},speed:{value:16},wake:{value:.65},horizon:{value:new ze("#52798b")},mid:{value:new ze("#17455c")},near:{value:new ze("#105064")},deep:{value:new ze("#062839")},surfaceMap:{value:o},swimmerNormalMap:{value:cx()},swimmerVelocities:{value:Array.from({length:4},()=>new ke)},swimmerWake:{value:Array.from({length:10},()=>new rt(0,0,-100,0))},swimmerRipples:{value:Array.from({length:4},()=>new rt(0,0,-100,0))}},l=`
    void wave(vec2 anchor,vec2 direction,float wavelength,float amplitude,float maxSlope,float spacing,inout vec3 p,inout vec3 dx,inout vec3 dz){
      vec2 d=normalize(direction);float lengthScale=wavelength*waveSize;
      float k=6.2831853/lengthScale;
      float resolved=1.-smoothstep(lengthScale/8.,lengthScale/3.,spacing);
      float a=min(amplitude*height,maxSlope/k)*resolved;
      float phase=k*dot(d,anchor)-sqrt(9.81*k)*time;
      float s=sin(phase),c=cos(phase),q=.18;
      p+=vec3(q*a*d.x*c,a*s,q*a*d.y*c);
      dx+=vec3(-q*a*k*d.x*d.x*s,a*k*d.x*c,-q*a*k*d.x*d.y*s);
      dz+=vec3(-q*a*k*d.x*d.y*s,a*k*d.y*c,-q*a*k*d.y*d.y*s);
    }
    void sampleSurface(vec2 anchor,vec2 location,float spacing,out vec3 p,out vec3 n){
      p=vec3(location.x,0.,location.y);
      vec3 dx=vec3(1.,0.,0.),dz=vec3(0.,0.,1.);
      wave(anchor,vec2(.18,1.),48.,.95,.28,spacing,p,dx,dz);
      wave(anchor,vec2(-.28,1.),29.,.40,.15,spacing,p,dx,dz);
      wave(anchor,vec2(.35,1.),17.,.16,.10,spacing,p,dx,dz);
      wave(anchor,vec2(-.4,1.),10.,.06,.06,spacing,p,dx,dz);
      p.y-=dot(p.xz,p.xz)*curvature/120000.;
      dx.y-=2.*dot(p.xz,dx.xz)*curvature/120000.;
      dz.y-=2.*dot(p.xz,dz.xz)*curvature/120000.;
      n=normalize(cross(dz,dx));
    }
  `,c=new jt({name:"OceanSurface",uniforms:a,side:wt,transparent:!0,depthWrite:!1,vertexShader:`
      uniform float time,travel,curvature,height,waveSize;
      varying vec3 world;
      varying vec2 water;
      ${l}
      void main(){
        water=position.xz-vec2(0.,travel);
        float radius=length(position.xz);
        float radialStep=2.6*18000./${e.toFixed(1)}*pow(max(radius/18000.,.000001),1.-1./2.6);
        float angularStep=radius*6.2831853/${t.toFixed(1)};
        vec3 p,unusedNormal;
        sampleSurface(water,position.xz,max(radialStep,angularStep),p,unusedNormal);
        world=p;
        gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);
      }`,fragmentShader:`
      uniform float time,travel,height,speed,wake,daylight,sunVisible,moonVisible,moonTint,normalStrength,curvature,waveSize,horizonStrength,overviewOpaque;
      uniform vec2 transparencyCenter;
      uniform vec4 swimmerRipples[4];
      uniform vec2 swimmerVelocities[4];
      uniform vec4 swimmerWake[10];
      uniform vec3 horizon,mid,near,deep,zenith,skyHorizon,sunColor,sunDirection,moonDirection;
      uniform sampler2D surfaceMap,swimmerNormalMap;
      varying vec3 world;
      varying vec2 water;
      varying vec4 mirrorCoord;
      ${l}
      vec4 turbulence(vec2 p){
        vec4 a=texture2D(surfaceMap,p/38.+vec2(time*.003,-time*.002));
        vec4 b=texture2D(surfaceMap,vec2(-p.y,p.x)/19.+vec2(-time*.0035,time*.0025));
        vec4 c=texture2D(surfaceMap,p/12.7+vec2(time*.004,time*.003));
        return a*.58+b*.32+c*.10;
      }
      float highlight(vec3 n,vec3 v,vec3 l,float roughness){
        vec3 h=normalize(v+l);float nh=max(dot(n,h),0.);
        float a2=pow(roughness,4.);
        float den=1.-nh*nh+nh*nh*a2;
        float distribution=a2/max(den*den,.000001);
        float nv=max(dot(n,v),.03),nl=max(dot(n,l),0.);
        float k=pow(roughness+1.,2.)/8.;
        float geometry=nv/(nv*(1.-k)+k)*nl/(nl*(1.-k)+k);
        float f=.02+.98*pow(1.-max(dot(v,h),0.),5.);
        return min(distribution*geometry*f/max(4.*nv,.08),5.);
      }
      void main(){
        float dist=length(cameraPosition-world);
        vec4 tex=turbulence(water);
        vec2 ripple=(tex.rg*2.-1.)*.48;
        float rippleGain=mix(.55,1.,clamp(height,0.,1.));
        float pixelSpacing=max(length(dFdx(water)),length(dFdy(water)));
        vec3 surfacePosition,baseNormal;
        sampleSurface(water,water+vec2(0.,travel),pixelSpacing,surfacePosition,baseNormal);
        vec3 swimmerNormal=vec3(0.);
        float swimmerFoam=0.;
        // Several fast outward-moving wavefronts per swimmer. Only sample the
        // 64px normal map within a small local radius to protect mobile GPUs.
        for(int i=0;i<4;i++){
          vec4 swimmer=swimmerRipples[i];
          if(swimmer.w<.001)continue;
          vec2 offset=world.xz-swimmer.xy;
          float distanceToSwimmer=length(offset);
          if(distanceToSwimmer>4.5)continue;
          float age=swimmer.z;
          vec2 velocity=swimmerVelocities[i];
          float motion=length(velocity);
          vec2 heading=velocity/max(motion,.001);
          // When moving, extend the disturbance behind the swimmer and
          // suppress it ahead; stationary swimmers keep circular ripples.
          float behind=dot(offset,-heading);
          float wakeMask=mix(1.,smoothstep(-.7,1.3,behind),smoothstep(.08,.55,motion));
          float falloff=(1.-smoothstep(2.2,4.5,distanceToSwimmer))*wakeMask;
          // Repeat 3-4 rings, advancing ~3m/sec rather than one slow ring.
          float phase=distanceToSwimmer*6.-time*9.+float(i)*1.7;
          float ring=cos(phase)*(.5+.5*cos(phase*.33));
          vec2 normalUV=offset/9.+.5;
          vec2 texNormal=texture2D(swimmerNormalMap,normalUV).rg*2.-1.;
          vec2 direction=offset/max(distanceToSwimmer,.05);
          swimmerNormal.xz+=(-direction*ring*.18+texNormal*.13)*falloff*swimmer.w;
          float impact=(1.-smoothstep(0.,1.1,age));
          swimmerFoam+=falloff*(.045+.085*max(ring,0.)+.18*impact*exp(-distanceToSwimmer*1.3))*swimmer.w;
        }
        // Persistent swimmer trail: successive foam patches remain in world
        // space as the character moves, unlike a ripple locked to the avatar.
        float wakeFoam=0.;
        for(int j=0;j<10;j++){
          vec4 trail=swimmerWake[j];
          if(trail.w<.01)continue;
          vec2 delta=world.xz-trail.xy;
          float radius=length(delta);
          if(radius>2.6)continue;
          float age=max(0.,time-trail.z);
          float fade=1.-smoothstep(.6,2.8,age);
          float width=.35+age*.24;
          float ring=exp(-pow((radius-(.35+age*.52))/width,2.));
          float foam=exp(-radius*radius/(.48+age*.55));
          float strength=fade*trail.w;
          wakeFoam+=strength*(ring*.22+foam*.36);
          swimmerNormal.xz+=delta/max(radius,.12)*ring*strength*.13;
        }
        vec3 n=normalize(baseNormal+vec3(-ripple.x,0.,-ripple.y)*rippleGain*normalStrength+swimmerNormal);
        vec3 v=normalize(cameraPosition-world),r=reflect(-v,n);
        float nv=max(dot(n,v),0.);
        // Water reflects strongly at low viewing angles while retaining deep body colour.
        float fresnel=.035+.965*pow(1.-nv,5.);
        vec3 sky=mix(zenith,skyHorizon,(1.-smoothstep(.015,.65,max(r.y,0.)))*horizonStrength);
        // Procedural sky reflection only: no extra camera or texture samples.
        vec3 reflection=sky;
        vec3 body=mix(deep,near,clamp(.38+world.y*.16+tex.b*.22,0.,1.));
        body=mix(body,mid,smoothstep(100.,1200.,dist)*.32);
        body=mix(body,horizon,smoothstep(900.,7000.,dist)*.22*horizonStrength);
        // Saturated blue body colour in daylight; retain the sunset/night palette.
        float blueDay=smoothstep(.65,1.,daylight);
        vec3 dayBlue=mix(vec3(.008,.045,.25),vec3(.015,.22,.48),clamp(.45+world.y*.12+tex.b*.2,0.,1.));
        body=mix(body,dayBlue,blueDay*.65);
        body*=mix(.12,1.,daylight)*(.65+.45*max(dot(n,normalize(sunDirection)),0.));
        // Forward scattering illuminates thin wave crests against the light.
        float scatter=pow(max(dot(v,-normalize(sunDirection)),0.),3.)*max(world.y,0.);
        body+=near*scatter*sunVisible*.35;
        vec3 color=mix(body,reflection,clamp(fresnel+.14,0.,1.));
        float variance=dot(dFdx(n),dFdx(n))+dot(dFdy(n),dFdy(n));
        float roughness=clamp(.19+sqrt(variance)*.35,.19,.42);
        color+=sunColor*highlight(n,v,normalize(sunDirection),roughness)*sunVisible*2.6;
        // Irregular moon-glitter: break up straight horizontal bands with the
        // existing moving turbulence, without extra geometry or draw calls.
        float moonSpec=highlight(n,v,normalize(moonDirection),roughness);
        float brokenGlitter=.70+.30*smoothstep(.22,.76,tex.b*.65+tex.a*.35);
        brokenGlitter*=.82+.18*sin(water.x*.31+tex.r*9.+time*.48);
        vec3 moonColor=mix(vec3(.70,.78,.96),vec3(.52,.70,1.),moonTint);
        color+=moonColor*moonSpec*moonVisible*1.4*brokenGlitter;
        // Follow the imported hull stern at world Z about -2 (5x scale, 180-degree heading).
        float aft=max(world.z+30.,0.);
        float width=3.8+aft*.085;
        float bend=(tex.b-.5)*1.5*(1.-exp(-aft*.03));
        float core=exp(-pow((world.x+bend)/width,2.));
        float sternMask=smoothstep(-30.,-22.,world.z)*(1.-smoothstep(53.,160.,aft));
        // Larger, lengthwise-stretched wake foam: fewer repeats across the beam,
        // substantially fewer along the stern trail. Break up obvious UV tiling.
        vec2 wakeUV=water/vec2(27.0,85.0);
        wakeUV.x+=(tex.b-.5)*.17+sin(water.y*.021+time*.07)*.055;
        wakeUV.y+=(tex.a-.5)*.19+sin(water.x*.037-time*.05)*.08;
        vec4 fine=texture2D(surfaceMap,wakeUV+vec2(time*.003,-time*.002));
        float bubbles=smoothstep(.36,.72,fine.b*.72+tex.b*.28);
        float lace=smoothstep(.58,.86,fine.a);
        float propulsion=clamp(speed/8.,0.,1.)*wake;
        float foam=clamp(core*sternMask*(.08+bubbles*.55+lace*.2)*propulsion*1.15,0.,.78);
        vec3 foamColor=mix(vec3(.10,.16,.23),vec3(.86,.92,.92),daylight);
        foamColor=mix(foamColor,skyHorizon,.18);
        color=mix(color,foamColor,foam);
        // Keep foreground and mid-distance texture; blend before the curved tangent.
        float haze=1.-exp(-pow(dist/3800.,1.45));
        // Soft atmospheric scattering at the far horizon, especially at night.
        float farAir=smoothstep(800.,7000.,dist)*(.08+.12*(1.-daylight));
        vec3 airColor=mix(skyHorizon,vec3(.11,.19,.33),1.-smoothstep(.05,.6,daylight));
        color=mix(color,airColor,farAir);
        // Fade into the same sky colour at grazing angles before the curved edge.
        float horizonHaze=(1.-smoothstep(.005,.075,nv))*smoothstep(120.,600.,dist);
        vec3 horizonSky=mix(zenith,skyHorizon,horizonStrength);
        float sunAngle=acos(clamp(dot(-v,sunDirection),-1.,1.));
        horizonSky+=sunColor*exp(-sunAngle*12.)*.45*sunVisible*smoothstep(-.04,.02,-v.y);
        color=mix(color,horizonSky,max(haze*horizonStrength,horizonHaze));
        // Cheap hull occlusion: a soft, elongated shadow painted into the water
        // shader. No extra mesh, draw call, reflection pass or shadow map.
        // Centered beneath the imported ship (SHIP_CENTER_Z = -24).
        vec2 hullLocal=world.xz-vec2(0.,-24.);
        float hullEllipse=length(hullLocal/vec2(10.,26.));
        float contactShadow=1.-smoothstep(.55,1.12,hullEllipse);
        // Project a broad soft shadow opposite the active light direction.
        // Keep the offset bounded at low sun/moon angles.
        float moonBlend=1.-smoothstep(.08,.28,sunVisible);
        vec3 lightDir=normalize(mix(sunDirection,moonDirection,moonBlend));
        float elevation=max(abs(lightDir.y),.22);
        vec2 shadowOffset=-lightDir.xz/elevation*3.5;
        vec2 castLocal=hullLocal-shadowOffset;
        float castEllipse=length(castLocal/vec2(10.5,27.));
        float castShadow=(1.-smoothstep(.65,1.35,castEllipse));
        float castStrength=mix(.23,.32,sunVisible);
        castStrength*=mix(.35,1.,max(sunVisible,moonVisible));
        // A fixed contact shade anchors the hull, while the cast shade follows light.
        float shade=contactShadow*.13+castShadow*castStrength;
        shade*=mix(.65,1.,overviewOpaque);
        color*=1.-clamp(shade,0.,.55);
        color=mix(color,vec3(.72,.85,.88),clamp(wakeFoam,0.,.38));
        // Calm, deeper ocean grade across day, sunset and night. Apply after
        // reflections, atmospheric blending and foam so none stays overly bright.
        // Keep the hue, but gently reduce saturation and overall luminance.
        float oceanLuma=dot(color,vec3(.2126,.7152,.0722));
        color=mix(vec3(oceanLuma),color,.88);
        color*=mix(.78,.83,daylight);
        float radius=length(world.xz-transparencyCenter);
        float waterAlpha=mix(.85,1.,smoothstep(10.,15.,radius));
        gl_FragColor=vec4(color,mix(waterAlpha,1.,overviewOpaque));
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}),h=new Ye(r,c);h.frustumCulled=!1;let u=!1;function d(_){a.overviewOpaque.value=_?1:0,u!==_&&(u=_,c.transparent=!_,c.depthWrite=_,c.needsUpdate=!0)}function p(_){}function g(_){}return{mesh:h,uniforms:a,setOverviewOpaque:d,heightAt:(_,m)=>ax(a,_,m,e,t),setReflectionResolution:p,setStarReflectionEnabled:g}}function hx(s,e){const t={value:0};let n=null,i=null;return new _o().load("./models/Ship_Sail.glb",r=>{n=r.scene;const o=a=>{if(!a)return;a.add(n),n.updateWorldMatrix(!0,!0);const l=[];let c=1/0,h=-1/0;const u=new N;n.traverse(g=>{if(!g.isMesh)return;const _=g.geometry.getAttribute("position"),m=new Float32Array(_.count);for(let f=0;f<_.count;f++)u.fromBufferAttribute(_,f).applyMatrix4(g.matrixWorld),m[f]=u.z,c=Math.min(c,u.z),h=Math.max(h,u.z);l.push({obj:g,zValues:m})});const d=(c+h)*.5;n.traverse(g=>{if(!g.isMesh)return;const _=g.geometry,m=_.getAttribute("color");_.getAttribute("normal")||_.computeVertexNormals();const f=_.getAttribute("position").count,b=new Float32Array(f),x=l.find(S=>S.obj===g)?.zValues;x&&_.setAttribute("sailBowZ",new Mt(x,1));for(let S=0;S<f;S++){let E=0;if(m){const w=m.getX(S),C=m.getY(S),y=m.getZ(S),M=Math.min(w,C)*(1-y),A=y*(1-C),D=w*(1-C)*(1-y);E=Ge.clamp((M+A*.48)*(1-D),0,1)}b[S]=E}_.setAttribute("sailWeight",new Mt(b,1));const v=new Lt({color:"#101114",roughness:.89,metalness:0,side:wt});v.onBeforeCompile=S=>{S.uniforms.sailTime=t,S.uniforms.sailSplitZ={value:d},S.vertexShader=S.vertexShader.replace("#include <common>",`#include <common>
attribute float sailWeight;
attribute float sailBowZ;
varying float vSailBowZ;
uniform float sailTime;`),S.vertexShader=S.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vSailBowZ=sailBowZ;
float w=clamp(sailWeight,0.0,1.0);
float slow=0.65+0.14*sin(sailTime*4.05+position.y*0.005);
// Broad, slow cloth billow: one dominant traveling wave with a subtle secondary swell.
float ripple=sin(sailTime*11.25-position.y*0.013+position.x*0.0045)*1.0
           +sin(sailTime*7.02+position.y*0.008-position.z*0.006+1.3)*0.22;
float displacement=w*(slow*11.0+ripple*7.35);
transformed+=normalize(normal)*displacement;`),S.fragmentShader=S.fragmentShader.replace("#include <common>",`#include <common>
varying float vSailBowZ;
uniform float sailSplitZ;`),S.fragmentShader=S.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
// White bow sail, dark aft sail; works even when both share one mesh.
diffuseColor.rgb=mix(vec3(1.0),diffuseColor.rgb,step(sailSplitZ,vSailBowZ));`)},g.material=v,g.castShadow=!1,g.receiveShadow=!1});const p=s.userData.overviewDisplay?.children[0];p&&(i=n.clone(!0),p.add(i)),s.userData.sailVisual=n,s.userData.sailOverview=i};s.userData.model?o(s.userData.model):s.userData.pendingSail=()=>o(s.userData.model)},void 0,r=>console.error("[Sea] Ship_Sail.glb loading failed:",r)),{update(r,o=1/60){t.value=r;const a=s.userData.overviewDisplay?.visible??!1;n&&(n.visible=!a),i&&(i.visible=a)}}}function Su(s){let e=2166136261;for(const t of String(s))e=Math.imul(e^t.charCodeAt(0),16777619)>>>0;return{model:["hina","daeun","boy-neat","boy-fluffy"][e%4],hairColor:["black","brown"][Math.floor(e/4)%2]}}function gl(s,e="black"){const t=new it;t.name={hina:"Hina",daeun:"Daeun","boy-neat":"BoyNeat","boy-fluffy":"BoyFluffy"}[s]||"Hina",t.userData.characterId=s;const n=j=>new zf({color:j}),i=n(16042167),r=n(2695979),o=n(3813431),a=n(16117998),l=n(3748669),c=n(3157045),h=n(2367527),u=n(2631216),d=n(3418418),p=n(16777215),g=n(15312548),_=n(3156788),m=n(5522253);function f(j,te,ue,B,X,pe,K){const Z=new Ye(new vi(j,te,ue),B);return Z.position.set(X,pe,K),Z.castShadow=!0,Z.receiveShadow=!0,t.add(Z),Z}const b=f(.69,.83,.4,a,0,1.46,0);f(.78,.13,.45,a,0,1.81,0),f(.52,.12,.09,c,0,1.75,.255),f(.28,.1,.11,_,-.13,1.61,.265).rotation.z=.25,f(.28,.1,.11,_,.13,1.61,.265).rotation.z=-.25,f(.1,.13,.12,_,0,1.61,.28),f(.08,.2,.09,_,-.06,1.48,.27).rotation.z=-.13,f(.08,.2,.09,_,.06,1.48,.27).rotation.z=.13,f(.77,.15,.48,l,0,1.06,0),f(.85,.39,.54,l,0,.85,0);for(let j of[-.31,-.12,.08,.28])f(.022,.33,.045,m,j,.84,.281);for(let j of[.73,.9])f(.78,.015,.045,m,0,j,.283);f(.49,.11,.37,i,0,1.95,0);const x=new it;x.name="sea-avatar-head",t.add(x),x.position.y=2.28;function v(j,te,ue,B,X,pe,K){const Z=new Ye(new vi(j,te,ue),B);return Z.position.set(X,pe,K),Z.castShadow=!0,x.add(Z),Z}v(.67,.65,.59,i,0,0,0),v(.73,.65,.19,r,0,.005,-.35),v(.78,.25,.24,r,0,.31,-.29);for(let j=-2;j<=2;j++){const te=j*.145;v(.18,.23+(2-Math.abs(j))*.04,.19,j%2?o:r,te,-.29,-.37)}v(.25,.24,.24,r,-.32,-.28,-.32),v(.25,.24,.24,r,.32,-.28,-.32),v(.76,.24,.66,r,0,.38,-.02),v(.76,.15,.65,r,0,.27,-.04),v(.19,.34,.64,r,-.33,.17,-.02),v(.19,.34,.64,r,.33,.17,-.02),v(.19,.19,.12,r,-.24,.22,.31),v(.18,.26,.12,r,-.08,.2,.31),v(.18,.17,.12,r,.11,.23,.31),v(.14,.23,.11,r,.27,.16,.3);for(let j of[-1,1])v(.18,.31,.29,r,j*.39,-.18,-.08),v(.17,.15,.23,o,j*.41,-.39,-.08),v(.135,.19,.038,d,j*.17,-.045,.312),v(.045,.05,.045,p,j*.14,-.015,.34),v(.14,.05,.028,g,j*.265,-.18,.313);v(.1,.025,.032,_,0,-.23,.319),v(.28,.17,.19,r,0,-.31,-.3);function S(j,te,ue){const B=new it;return B.position.set(j,te,ue),t.add(B),B}function E(j,te,ue,B,X,pe,K,Z){const J=new Ye(new vi(te,ue,B),X);return J.position.set(pe,K,Z),J.castShadow=!0,J.receiveShadow=!0,j.add(J),J}const w=[S(-.46,1.78,0),S(.46,1.78,0)];for(const j of w)E(j,.19,.62,.24,a,0,-.3,0),E(j,.16,.19,.19,i,0,-.66,0);const C=[S(-.2,.75,0),S(.2,.75,0)];for(const j of C)E(j,.23,.56,.24,i,0,-.33,0),E(j,.24,.19,.25,u,0,-.56,0),E(j,.29,.16,.43,h,0,-.675,.1);if(s==="daeun"){const j=new Map;for(const[J,le]of[[r,4796731],[o,6705243],[l,3748669],[_,3748669],[m,6574683]]){const P=J.clone();P.color.setHex(le),j.set(J,P)}t.traverse(J=>{J.isMesh&&j.has(J.material)&&(J.material=j.get(J.material))});const te=x,ue=new Lt({color:4796731,roughness:.92}),B=new Lt({color:6705243,roughness:.9});for(const J of te.children)J.isMesh&&(J.position.z<-.25&&J.position.y<-.13&&J.geometry?.type==="BoxGeometry"&&(J.visible=!1),Math.abs(J.position.x)>.38&&J.position.y<-.08&&J.geometry?.type==="BoxGeometry"&&(J.visible=!1));const X=new it;X.name="DaeunPonytail",te.add(X),X.position.set(0,.32,-.43);const pe=(J,le,P,oe,ce,Se,re,Ie=0)=>{const de=new Ye(new Hn(J,le,P,6),re);return de.position.set(oe,ce,Se),de.rotation.z=Ie,de.castShadow=!0,X.add(de),de},K=new Ye(new Vn(.16,7,5),ue);K.scale.set(1,.85,1),K.position.set(0,.05,-.1),K.castShadow=!0,X.add(K),pe(.22,.26,.44,.1,.24,-.22,ue,-.32),pe(.26,.19,.55,.23,.03,-.28,ue,.32),pe(.2,.12,.51,.34,-.4,-.31,B,.22),pe(.14,.055,.4,.4,-.76,-.33,ue,.13);const Z=new Lt({color:4800331,roughness:.93});for(const J of C){const le=J;if(le)for(const P of le.children)P.isMesh&&(P.material===i||P.material===u)&&(P.material=Z)}}if(s==="boy-neat"||s==="boy-fluffy"){for(const j of t.children)j.isMesh&&((j.material===_||j.material===c)&&j.position.y>1.3&&(j.visible=!1),j.material===m&&(j.visible=!1));for(const j of x.children){if(!j.isMesh)continue;const{x:te,y:ue,z:B}=j.position;(B<-.25&&ue<-.1||Math.abs(te)>.36&&ue<-.06)&&(j.visible=!1)}if(s==="boy-neat")v(.27,.13,.15,r,-.21,.24,.34).rotation.z=-.18,v(.27,.12,.15,r,.08,.28,.33).rotation.z=-.1;else{for(let j=-2;j<=2;j++){const te=v(.18,.2+.1*(2-Math.abs(j)),.25,j%2?o:r,j*.155,.49+j%2*.045,-.03);te.rotation.z=j%2?-.23:.2,te.position.z+=j*.018,te.position.y+=j%2*.016}v(.24,.18,.15,r,.22,.22,.34).rotation.z=.15}}const y={black:[2368811,3421758],brown:[7950651,10121300]},M=y[e]||y.black,A=new Map;x.traverse(j=>{if(!j.isMesh||!j.material?.color)return;const te=j.material.color.getHex();if([2695979,3813431,4796731,6705243].includes(te)){if(!A.has(j.material)){const ue=j.material.clone();ue.color.setHex([3813431,6705243].includes(te)?M[1]:M[0]),A.set(j.material,ue)}j.material=A.get(j.material)}});function D(j,te,ue){const B=j.children.find(le=>le.isMesh&&le.geometry.type==="BoxGeometry"),X=new it;X.name=(te==="arm"?"Elbow_":"Knee_")+(ue===0?"L":"R");const pe=B.position.y,K=B.geometry.parameters.height*B.scale.y;X.position.y=pe;const Z=B.clone(!1);Z.scale.y*=.5,B.scale.y*=.5,B.position.y=pe+K*.25,Z.position.y=-K*.25;const J=j.children.slice();for(const le of J)le!==B&&(j.remove(le),le.position.y-=pe,X.add(le));return X.add(Z),j.add(X),X}const L=w.map((j,te)=>D(j,"arm",te)),z=C.map((j,te)=>D(j,"leg",te));let O=0,F=0,W=0;function V(){w[1].rotation.set(Math.PI,0,0),L[1].rotation.x=0}function Q(){W=performance.now()+1500,V()}function se(){return t.updateWorldMatrix(!0,!0),w[1].localToWorld(new N(0,-.72,0))}function he(j,te,ue=!1,B=null,X=!1,pe=!1,K=!1,Z=0,J=0){if(!X){const Ie=1-Math.exp(-Math.min(.1,j)*18);for(const de of L)de.rotation.z+=(0-de.rotation.z)*Ie}if(K){const Ie=1-Math.exp(-Math.min(.1,j)*12);for(let de=0;de<2;de++)w[de].rotation.x+=(0-w[de].rotation.x)*Ie,w[de].rotation.z+=((de===0?-Math.PI/2:Math.PI/2)-w[de].rotation.z)*Ie,L[de].rotation.x+=(0-L[de].rotation.x)*Ie,C[de].rotation.x+=(0-C[de].rotation.x)*Ie;b.rotation.z=0,x.rotation.z=0;return}if(pe){const Ie=performance.now()*.001,de=1-Math.exp(-Math.min(.1,j)*15);for(let ve=0;ve<2;ve++){const He=-1.35+Math.sin(Ie*17+ve*.5)*.7;w[ve].rotation.x+=(He-w[ve].rotation.x)*de,w[ve].rotation.z+=((ve===0?-.55:.55)-w[ve].rotation.z)*de,L[ve].rotation.x+=(-.4-L[ve].rotation.x)*de,C[ve].rotation.x+=(Math.sin(Ie*11+ve*Math.PI)*.35-C[ve].rotation.x)*de}b.rotation.z=Math.sin(Ie*8)*.07,x.rotation.z=-b.rotation.z*.5;return}const le=performance.now()<W;if(X){O+=j;const Ie=O*2,de=1-Math.exp(-Math.min(.1,j)*12);F=0,t.position.y=0;for(let ve=0;ve<2;ve++){const He=ve===0?-1:1,We=J<=0?0:Math.min(1,(1-J)/.16,J/.22),I=-.22,T=He*(1.42+Ge.degToRad(20)+(2.85-(1.42+Ge.degToRad(20)))*We),U=1-Math.exp(-Math.min(.1,j)*22);w[ve].rotation.x+=(I-w[ve].rotation.x)*U,w[ve].rotation.z+=(T-w[ve].rotation.z)*U,L[ve].rotation.x+=(-.18-L[ve].rotation.x)*U,L[ve].rotation.z+=(-He*.85*(1-We)-L[ve].rotation.z)*U;const H=(B??0)>.5,ee=H?Math.sin(O*15+ve*Math.PI)*.42:0,G=(ve===0?1:-1)*Z*1.05;C[ve].rotation.x+=(ee+G-C[ve].rotation.x)*de,z[ve].rotation.x+=(.22+(H?.22*Math.max(0,-Math.sin(O*15+ve*Math.PI)):0)-z[ve].rotation.x)*de}le&&V(),b.rotation.z=Math.sin(Ie)*.015,x.rotation.z=-b.rotation.z*.45;return}const P=Math.max(0,Math.min(1,B??0)),oe=1-Math.exp(-Math.min(.1,j)*18);if(P>.025){F=0,t.position.y=0;const Ie=[-2.85,.32],de=[-.14,.18],ve=[-.35,-1.05],He=[-.78,.58],We=[1.12,.22];for(let I=0;I<2;I++)w[I].rotation.x+=(Ie[I]-w[I].rotation.x)*oe,w[I].rotation.z+=(de[I]-w[I].rotation.z)*oe,L[I].rotation.x+=(ve[I]-L[I].rotation.x)*oe,C[I].rotation.x+=(He[I]-C[I].rotation.x)*oe,z[I].rotation.x+=(We[I]-z[I].rotation.x)*oe;le&&V(),b.rotation.z=0,x.rotation.z=0;return}F+=((ue?1:0)-F)*oe,t.position.y=-.6*F**3,te&&(O+=j);const ce=Math.floor(O*12)/12,Se=te?Math.sin(ce*16.8)*.34:0,re=s==="hina"?Se*3:Se*1.5;for(let Ie=0;Ie<2;Ie++){const de=(Ie?-Se:Se)*(1-F)-Math.PI/2*F,ve=ue?-.3:Ie?re:-re;C[Ie].rotation.x+=(de-C[Ie].rotation.x)*oe,w[Ie].rotation.x+=(ve-w[Ie].rotation.x)*oe,w[Ie].rotation.z+=(0-w[Ie].rotation.z)*oe;const He=te?.58*Math.max(0,Math.sin(C[Ie].rotation.x)*2.8)*(1-F):0;z[Ie].rotation.x+=(He-z[Ie].rotation.x)*oe,L[Ie].rotation.x+=((te?-.1:0)-L[Ie].rotation.x)*oe}le&&V(),b.rotation.z=s==="hina"&&te?Math.sin(ce*8.4)*.016:0,x.rotation.z=s==="hina"&&te?Math.sin(ce*8.4)*.02:0}function Me(j){const te=Math.max(0,Math.min(1,j)),ue=Math.sin(te*Math.PI*2);w[1].rotation.x=-.9-.55*ue,w[1].rotation.z=.2,L[1].rotation.x=-.4-.3*Math.max(0,ue)}return{mesh:t,update:he,fireworkPose:Q,rightHandWorldPosition:se,netPose:Me}}function Sh(s){const e=new Set,t=new Set;s.traverse(n=>{if(n.geometry&&e.add(n.geometry),n.material)for(const i of[].concat(n.material))t.add(i)});for(const n of e)n.dispose();for(const n of t)n.dispose()}function dx(s,e,t,n){const i=new it;i.position.set(0,zi.deckY,-27);const r=Math.random()<.5?"hina":"daeun";i.userData.characterId=r;let o=gl(r),a=!0,l=!1,c=!1,h=!1;i.userData.hairColor="black",o.mesh.rotation.y=Math.PI;const u=new it;u.add(o.mesh),i.add(u),u.position.y=Ut,s.add(i);const d=new Ye(new Wi(1.5,1.5),new jt({transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,uniforms:{},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 vUv;void main(){float r=length((vUv-.5)*2.);gl_FragColor=vec4(0.,0.,0.,(1.-smoothstep(.15,1.,r))*.18);}"}));d.rotation.x=-Math.PI/2,d.position.y=Ut+.012,i.add(d),t.target.copy(i.position).add(new N(0,Ut+1.3,0)),e.position.copy(t.target).add(new N(0,3.7,12)),t.minDistance=2,t.maxDistance=100,t.update();const p=new Set,g=new ke,_=new N,m=new N,f=new N,b=["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowLeft","ArrowDown","ArrowRight"];addEventListener("keydown",$=>{$.target.closest?.("input,button,summary,textarea,select")||b.includes($.code)&&($.preventDefault(),p.add($.code))}),addEventListener("keyup",$=>p.delete($.code));const x=document.createElement("div");x.id="joystick",x.setAttribute("aria-label","갑판 이동 조이스틱"),x.innerHTML='<span class="stick-knob"></span><span class="stick-label">이동</span>',document.querySelector("#app").append(x);let v=null;const S=()=>{x.classList.remove("active"),i.userData.moving=!1,v=null,g.set(0,0),x.firstElementChild.style.transform="translate(0px,0px)"},E=$=>{const ae=x.getBoundingClientRect();g.set(($.clientX-ae.left-ae.width/2)/38,($.clientY-ae.top-ae.height/2)/38),g.length()>1&&g.normalize(),x.firstElementChild.style.transform=`translate(${g.x*30}px,${g.y*30}px)`};x.addEventListener("pointerdown",$=>{v===null&&($.preventDefault(),v=$.pointerId,x.classList.add("active"),x.setPointerCapture(v),E($))}),x.addEventListener("pointermove",$=>{$.pointerId===v&&E($)});for(const $ of["pointerup","pointercancel","lostpointercapture"])x.addEventListener($,ae=>{ae.pointerId===v&&S()});addEventListener("blur",()=>{p.clear(),S()}),document.addEventListener("visibilitychange",()=>{document.hidden&&(p.clear(),S())});function w($,ae="black"){i.userData.characterId===$&&i.userData.hairColor===ae||(u.remove(o.mesh),Sh(o.mesh),o=gl($,ae),o.mesh.rotation.y=Math.PI,u.add(o.mesh),c&&(o.mesh.position.copy(U),o.mesh.quaternion.copy(T),We=null),i.userData.characterId=$,i.userData.hairColor=ae)}const C=document.createElement("button");C.id="sit-toggle",C.type="button",C.textContent="앉기",C.setAttribute("aria-pressed","false"),document.querySelector("#app").append(C);function y($){l=$,i.userData.sitting=$,C.textContent=$?"일어서기":"앉기",C.setAttribute("aria-pressed",String($))}C.addEventListener("click",()=>{c&&De(),y(!l)});const M=document.createElement("button");M.id="jump-toggle",M.type="button",M.textContent="점프",M.setAttribute("aria-label","점프"),document.querySelector("#app").append(M);const A=11.6,D=20.25,L=-1.35;let z=()=>0,O=!1,F=0,W=0,V=null,Q=null,se=0,he=0,Me=0;i.userData.waterKickPulse=0;let j=0,te=0,ue=0,B=0,X=!1,pe=0,K=0,Z=zt,J=!1;const le=zi.deckY+Ut;let P=0,oe=0,ce=null,Se=0,re=!1;const Ie=1.25;let de=null;const ve=new N;let He=0,We=null;const I=1.6,T=new Tt().setFromAxisAngle(new N(1,0,0),-Math.PI/2).multiply(new Tt().setFromAxisAngle(new N(0,0,1),Math.PI)),U=new N(0,.58,-1.08);let H=null;function ee(){try{const $=window.AudioContext||window.webkitAudioContext;if(!$)return;H||(H=new $),H.state==="suspended"&&H.resume().catch(()=>{});const ae=H.currentTime;for(const[Fe,Ke,at,lt,pt]of[[0,270,650,.15,.18],[.065,510,960,.19,.105]]){const ct=H.createOscillator(),ut=H.createGain();ct.type="triangle",ct.frequency.setValueAtTime(Ke,ae+Fe),ct.frequency.exponentialRampToValueAtTime(at,ae+Fe+lt),ut.gain.setValueAtTime(1e-4,ae+Fe),ut.gain.exponentialRampToValueAtTime(pt,ae+Fe+.018),ut.gain.exponentialRampToValueAtTime(1e-4,ae+Fe+lt),ct.connect(ut),ut.connect(H.destination),ct.start(ae+Fe),ct.stop(ae+Fe+lt+.02),ct.onended=()=>{ct.disconnect(),ut.disconnect()}}}catch{}}function G($){if(!a)return;const ae=t.target.y+$,Fe=ae-t.target.y;t.target.y=ae,e.position.y+=Fe}function me(){O||V||(e.position.clone().sub(t.target),O=!0,i.userData.inWater=!0,X=!0,W=0,F=Z-le+P,te=oe,ue=pe,B=K,P=0,oe=0,ce=null,d.visible=!1)}function fe($){return!1}function Ee($){if(!a||O||V||Q||c||!J)return!1;const ae=Math.max(10,$.y-Z+5);return Q={height:Z+P,velocity:Math.sqrt(2*D*ae)},ce=null,re=!1,oe=0,P=0,l&&y(!1),ee(),!0}function xe($){if(!Q)return!1;const ae=Q,Fe=Math.min($,.05),Ke=ae.height;ae.height+=ae.velocity*Fe-.5*D*Fe*Fe,ae.velocity-=D*Fe;const at=Number(p.has("KeyD")||p.has("ArrowRight"))-Number(p.has("KeyA")||p.has("ArrowLeft"))+g.x,lt=Number(p.has("KeyW")||p.has("ArrowUp"))-Number(p.has("KeyS")||p.has("ArrowDown"))-g.y;e.getWorldDirection(_),_.y=0,_.normalize(),m.crossVectors(_,dt.DEFAULT_UP).normalize(),f.copy(_).multiplyScalar(lt).addScaledVector(m,at),f.lengthSq()>1&&f.normalize(),f.multiplyScalar(5.25*Fe);const pt=n.blockedMove(i.position.x,i.position.z,f.x,f.z,ae.height),ct=pt.x-i.position.x,ut=pt.z-i.position.z;if(i.position.x=pt.x,i.position.z=pt.z,a&&(e.position.x+=ct,t.target.x+=ct,e.position.z+=ut,t.target.z+=ut),f.lengthSq()>1e-8&&(i.rotation.y=Math.atan2(-f.x,-f.z)),pe=Fe>0?f.x/Fe:0,K=Fe>0?f.z/Fe:0,ae.velocity<0){const Et=n.floorAt(i.position.x,i.position.z,Ke+.2);Et!==null&&Ke>=Et-.15&&ae.height<=Et&&(ae.height=Et,Z=Et,P=0,oe=0,Q=null,j=.45)}if(Q&&(P=ae.height-Z,ae.height<L+.3&&(oe=ae.velocity,Q=null,me())),O||(u.position.y=Ut+ae.height-le),a){const Et=(ae.height+1.3-t.target.y)*(1-Math.exp(-Fe*7));t.target.y+=Et,e.position.y+=Et}return O||o.update(Fe,!1,!1,Q?1:0,!1,!!(Q&&ae.velocity<-7)),i.userData.moving=f.lengthSq()>1e-8,!0}function ye(){if(a&&!Q){if(O){if(se>0)return;X=!0,te=16.5,se=.65,he=.38,Me=1,i.userData.waterKickPulse=1,ee();return}P>.03&&!ce||oe>0||(c&&De(),l&&y(!1),h=!1,ce=null,re=!1,oe=A,ee())}}let ge=-1/0;function Te($){$.preventDefault(),$.stopPropagation(),ge=performance.now(),ye()}M.addEventListener("touchstart",Te,{passive:!1}),M.addEventListener("pointerdown",$=>{if(!($.pointerType!=="touch"&&$.pointerType!=="pen")){if(performance.now()-ge<350){$.preventDefault();return}Te($)}}),M.addEventListener("click",$=>{if(performance.now()-ge<750){$.preventDefault();return}ye()}),addEventListener("keydown",$=>{if($.code!=="Space"&&$.key!==" "||$.repeat||$.altKey||$.ctrlKey||$.metaKey)return;const ae=$.target;ae?.isContentEditable||ae?.closest?.("input,textarea,select,[contenteditable],[data-aqua-ui]")||($.preventDefault(),ye())},{capture:!0});function Re($){const ae=Math.min($,.05);if(se=Math.max(0,se-ae),he=Math.max(0,he-ae),Me=Math.max(0,Me-ae),i.userData.waterKickPulse=he>0?Math.sin((1-he/.38)*Math.PI):0,xe(ae)||fe())return;if(O){const at=L+z(i.position.x,i.position.z)-le,lt=F;if(X){const ct=le+F;F+=te*ae-.5*D*ae*ae,te-=D*ae;const ut=p.has("KeyW")||p.has("KeyA")||p.has("KeyS")||p.has("KeyD")||p.has("ArrowUp")||p.has("ArrowDown")||p.has("ArrowLeft")||p.has("ArrowRight")||g.lengthSq()>.01,Et=ut?0:ue*ae,Si=ut?0:B*ae,mn=n.blockedMove(i.position.x,i.position.z,Et,Si,le+F),si=mn.x-i.position.x,Un=mn.z-i.position.z;i.position.x=mn.x,i.position.z=mn.z,a&&(e.position.x+=si,t.target.x+=si,e.position.z+=Un,t.target.z+=Un);const ks=Math.exp(-ae*.38);if(ue*=ks,B*=ks,te<0){const vr=le+F,ri=n.floorAt(i.position.x,i.position.z,ct+.25);ri!==null&&ri>L+1&&ct>=ri-.12&&vr<=ri&&(F=ri-le,Z=ri,O=!1,i.userData.inWater=!1,X=!1,te=0,j=.5,se=0,d.visible=!0)}O&&F<=at&&(F=at,X=!1,W=0)}else W+=ae,F=at+Math.sin(W*1.5)*.04;const pt=F-lt;G(pt),u.position.y=Ut+F,Se+=(0-Se)*(1-Math.exp(-ae*16)),o.update(ae,!1,!1,X?1:0,O,!1,!1,i.userData.waterKickPulse,Me);return}if(!ce&&(oe!==0||P>0)){const at=P;if(P+=oe*ae-.5*D*ae*ae,oe-=D*ae,oe<0&&!ce){const lt=Z-zt;for(const pt of s.children){if(!pt.name?.startsWith("remote-")||!pt.userData.headPlatformEnabled)continue;const ut=pt.userData.headPlatformY-le-lt;if(at>=ut-.12&&P<=ut&&Math.hypot(pt.position.x-i.position.x,pt.position.z-i.position.z)<.62){P=ut,oe=0,ce=pt,ve.copy(pt.position),He=pt.rotation.y;break}}}if(P<=0&&!re){const lt=n.floorAt(i.position.x,i.position.z,Z+.22);lt===null||lt<Z-.45?re=!0:(P=0,oe=0,ce=null)}}if(ce){if(ce.parent&&ce.userData.headPlatformEnabled){const lt=ce.rotation.y-He,pt=i.position.x-ve.x,ct=i.position.z-ve.z,ut=Math.cos(lt),Et=Math.sin(lt),Si=ce.position.x+pt*ut+ct*Et,mn=ce.position.z-pt*Et+ct*ut,si=Si-i.position.x,Un=mn-i.position.z;i.position.x=Si,i.position.z=mn,i.rotation.y+=lt,a&&(e.position.x+=si,t.target.x+=si,e.position.z+=Un,t.target.z+=Un),ve.copy(ce.position),He=ce.rotation.y}const at=Math.hypot(ce.position.x-i.position.x,ce.position.z-i.position.z)<.7;!ce.parent||!ce.userData.headPlatformEnabled||!at?(ce=null,oe=Math.min(oe,-.01)):(P=ce.userData.headPlatformY-le-(Z-zt),oe=0)}if(a){const pt=(Z+P+1.3-t.target.y)*(1-Math.exp(-ae*8));t.target.y+=pt,e.position.y+=pt}const Fe=Z-zt;u.position.y=Ut+(c?0:P+Fe);const Ke=ce?0:P>.04||oe>0?1:0;Se+=(Ke-Se)*(1-Math.exp(-ae*16))}function Ce($){a&&(O||(P=0,oe=0,Se=0,ce=null,y(!1),c=!0,{...$},i.position.set($.x,zi.deckY,$.z),i.rotation.y=$.heading??0,u.position.y=Ut,o.mesh.position.set(0,0,0),o.mesh.rotation.set(0,Math.PI,0),We={elapsed:0,startPos:o.mesh.position.clone(),startQuat:o.mesh.quaternion.clone()},d.visible=!1,i.userData.lying=!0,we()))}function De(){c&&(c=!1,We=null,i.position.y=zi.deckY,o.mesh.position.set(0,0,0),o.mesh.rotation.set(0,Math.PI,0),d.visible=!0,i.userData.lying=!1,we())}function k($){if(c)if(We){We.elapsed+=Math.min($,.05);const ae=Math.min(1,We.elapsed/I),Fe=ae*ae*(3-2*ae);o.mesh.position.copy(We.startPos).lerp(U,Fe),o.mesh.quaternion.copy(We.startQuat).slerp(T,Fe),ae>=1&&(We=null)}else o.mesh.position.copy(U),o.mesh.quaternion.copy(T)}function we(){const $=t.enableDamping;t.enableDamping=!1,t.update();const ae=le+u.position.y-Ut;t.target.set(i.position.x,O?Math.max(3,ae+1.3):ae+1.3,i.position.z),e.position.copy(t.target).add(new N(0,3.7,12)),t.update(),t.enableDamping=$}function Pe(){const $=le+u.position.y-Ut,ae=new N(i.position.x,O?Math.max(3,$+1.3):$+1.3,i.position.z);return{position:ae.clone().add(new N(0,3.7,12)),target:ae}}function Ue($){a=$,$||(p.clear(),S(),i.userData.moving=!1)}function be($,ae){if(ce)return null;const Fe=Z+P,Ke=Math.max(Fe,de??Fe)+(oe===0&&!re?Ie:.22),at=n.floorAt($,ae,Ke);if(at===null)return null;if(P>.03||oe!==0||re){if(oe>=0||Fe>at+.28)return null;P=0,oe=0,re=!1,de=at}else if(at>Z+Ie||at<Z-1.1)return re=!0,oe=-.01,null;return at}function _e($){j=Math.max(0,j-Math.min($,.05));const ae=!!Q;if(de=Z+P,Re($),k($),ae){i.userData.moving=!1;return}if(!a){i.userData.moving=!1,!c&&!O&&o.update($,!1,l,Se,O,!1,h);return}if(n.ready()&&!J){const Et=n.safeSpot(i.position.x,i.position.z)||n.safeSpot(0,-33)||n.safeSpot(0,-24);Et?(i.position.x=Et.x,i.position.z=Et.z,Z=Et.y,J=!0,we()):window.__seaNoDeckWarning||(console.warn("[Sea] UCX has no walkable deck surface near spawn."),window.__seaNoDeckWarning=!0)}if(!O&&!V&&n.ready()&&J&&!c&&!h){const Et=be(i.position.x,i.position.z);Et!==null?Z=Et:j<=0&&!ce&&!re&&P<=.03&&oe===0&&(re=!0,oe=-.01)}re&&!O&&Z+P<L+.3&&(me(),re=!1);const Fe=Number(p.has("KeyD")||p.has("ArrowRight"))-Number(p.has("KeyA")||p.has("ArrowLeft"))+g.x,Ke=Number(p.has("KeyW")||p.has("ArrowUp"))-Number(p.has("KeyS")||p.has("ArrowDown"))-g.y;if(!J&&n.ready()||V||!Fe&&!Ke){i.userData.moving=!1,!c&&!O&&o.update($,!1,l,Se,O,re&&oe<-7,h);return}c&&De(),l&&y(!1),h=!1,e.getWorldDirection(_),_.y=0,_.normalize(),m.crossVectors(_,dt.DEFAULT_UP).normalize(),f.copy(_).multiplyScalar(Ke).addScaledVector(m,Fe),f.length()>1&&f.normalize(),f.multiplyScalar(5.25*$);const at=i.position.clone();pe=$>0?f.x/$:0,K=$>0?f.z/$:0;const lt=O?le+F:Z+P,pt=n.blockedMove(i.position.x,i.position.z,f.x,f.z,lt);i.position.set(pt.x,i.position.y,pt.z);const ct=be(i.position.x,i.position.z);!O&&ct!==null&&(Z=ct),!O&&J&&n.ready()&&ct===null&&j<=0&&!re&&P<=.03&&oe===0&&(c&&De(),l&&y(!1),re=!0,oe=Math.min(oe,-.01));const ut=i.position.clone().sub(at);ut.lengthSq()>1e-8&&(i.rotation.y=Math.atan2(-ut.x,-ut.z)),i.userData.moving=ut.lengthSq()>1e-8,O||o.update($,i.userData.moving,l,Se,!1,re&&oe<-7,h),e.position.add(ut),t.target.add(ut)}return{player:i,update:_e,setCharacter:w,setEnabled:Ue,resetView:we,deckViewPose:Pe,setWaterHeightSampler:$=>{z=$},setNetPose:$=>o.netPose($),isTitanicPosing:()=>h,toggleTitanicPose:$=>{if(O||V||Q||c||!J)return!1;if(h)return h=!1,!1;if(!$||Math.hypot(i.position.x-$.x,i.position.z-$.z)>1.35)return!1;const ae=n.floorAt($.x,$.z,Z+4);if(ae===null)return!1;y(!1),ce=null,re=!1,P=0,oe=0,Se=0;const Fe=$.x-i.position.x,Ke=$.z-i.position.z;return i.position.x=$.x,i.position.z=$.z,Z=ae,u.position.y=Ut+ae-zt,e.position.x+=Fe,e.position.z+=Ke,t.target.x+=Fe,t.target.z+=Ke,i.rotation.y=0,h=!0,o.update(.05,!1,!1,0,!1,!1,!0),!0},launchFireworkPose:()=>(o.fireworkPose(),i.updateWorldMatrix(!0,!0),o.rightHandWorldPosition()),getFireworkHandPosition:()=>(i.updateWorldMatrix(!0,!0),o.rightHandWorldPosition()),isSpawnReady:()=>J,lieOn:Ce,standUp:De,isLying:()=>c,launchTo:Ee,getNetworkState:()=>({sitting:l,lying:c,jump:!!Q||re||O&&X||!ce&&(P>0||oe>0),jumpHeight:Math.max(0,P),verticalOffset:u.position.y-Ut,inWater:O,returning:!!Q}),isReturning:()=>!!V,handleCorrection($){const ae=$.x-i.position.x,Fe=$.z-i.position.z;i.position.x=$.x,i.position.z=$.z,e.position.x+=ae,t.target.x+=ae,e.position.z+=Fe,t.target.z+=Fe}}}const bu="sea.player.v1",wu=s=>s&&typeof s.playerId=="string"&&/^[a-f0-9-]{36}$/.test(s.playerId)&&typeof s.token=="string"&&/^[a-f0-9]{64}$/.test(s.token);function fx(s){let e=null,t=null,n=null;const i=new URL(s);i.protocol=i.protocol==="wss:"?"https:":"http:",i.pathname="/identity",i.search="",i.hash="";async function r(){let o=null;try{o=JSON.parse(localStorage.getItem(bu))}catch{}wu(o)&&(e=o);try{const a=await fetch(i,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e||{}),signal:AbortSignal.timeout(2500),cache:"no-store"});if(a.ok){const l=await a.json();if(wu(l)){e={playerId:l.playerId,token:l.token};try{localStorage.setItem(bu,JSON.stringify(e))}catch{}}}}catch{}}return{async prepare(){n||(n=globalThis.navigator?.locks?navigator.locks.request("sea.player.identity",r):r()),await n},protocols(){return["sea-v2",...e?[`sea-identity.${e.token}`]:[],...t?[`sea-session.${t}`]:[]]},welcome(o){typeof o.sessionId=="string"&&/^[a-f0-9-]{36}$/.test(o.sessionId)&&(t=o.sessionId)}}}const px=[{id:"A",x:-40,z:-30},{id:"B",x:40,z:-42}],xs=[{id:"s1",x:-36,z:-48},{id:"s2",x:-44,z:-10},{id:"s3",x:36,z:-60},{id:"s4",x:44,z:-22}],_l=["#9caf9c","#ccabb3","#a8c3d6","#b6afd0","#cabea8","#a6cfbe"],cs=[{id:"oarfish",name:"산갈치",rarity:"전설",weight:50,color:"#d6b3c3"},{id:"coelacanth",name:"실러캔스",rarity:"전설",weight:50,color:"#769da3"},{id:"sunfish",name:"개복치",rarity:"영웅",weight:200,color:"#9db4c2"},{id:"mandarin",name:"만다린피시",rarity:"영웅",weight:300,color:"#79b8a4"},{id:"lionfish",name:"쏠배감펭",rarity:"희귀",weight:600,color:"#c9a090"},{id:"blue-tang",name:"블루탱",rarity:"희귀",weight:800,color:"#7ea9d3"},{id:"yellow-tang",name:"옐로탱",rarity:"고급",weight:1200,color:"#d8c879"},{id:"clownfish",name:"흰동가리",rarity:"고급",weight:1500,color:"#d8aa83"},{id:"sardine",name:"정어리",rarity:"일반",weight:2300,color:"#aac1c9"},{id:"anchovy",name:"멸치",rarity:"일반",weight:3e3,color:"#b6ccc5"}],Eu=2e3;function ao(s,e){const t=xs.indexOf(s);return{x:s.x+Math.sin(e/12e3+t*2)*.8,z:s.z+Math.cos(e/15e3+t)*.8}}const mx=new xi(.82,.27,12,32).rotateX(Math.PI/2),vo=_l.map(s=>new Lt({color:s,roughness:.72,metalness:0,emissive:new ze(s),emissiveIntensity:.2}));function bh(s=0){const e=Number.isInteger(s)&&s>=0&&s<vo.length?s:0,t=new Ye(mx,vo[e]);return t.name="aquaculture-tube",t.visible=!1,t.userData.color=e,t}function gx(s,e){const t=Number.isInteger(e)&&e>=0&&e<vo.length?e:0;s.userData.color!==t&&(s.material=vo[t],s.userData.color=t)}const _x=new Hn(.022,.032,1.05,6).translate(0,.45,0),vx=new xi(.28,.022,6,18).rotateX(Math.PI/2).translate(0,.98,0),xx=new Ul(.265,12).rotateX(-Math.PI/2).translate(0,.98,0),yx=new Lt({color:"#b9a98e",roughness:1}),Mx=new Lt({color:"#d3ddcf",roughness:.9}),Sx=new Wt({color:"#dce9e1",wireframe:!0,transparent:!0,opacity:.4,side:wt});function Tu(){const s=new it;return s.name="fry-catching-net",s.add(new Ye(_x,yx),new Ye(vx,Mx),new Ye(xx,Sx)),s}function bx(s,e){const t=new it;t.name="shared-aquaculture",s.add(t);const n=new xi(10/3,.18,8,64).rotateX(Math.PI/2),i=new Hn(3.24,3.13,3.2,48,4,!0).translate(0,-1.6,0),r=px.map((S,E)=>{const w=new it;return w.name="fish-pen-"+S.id,w.position.set(S.x,0,S.z),w.add(new Ye(n,new Lt({color:E?"#acbba5":"#c8bea8",roughness:.9,emissive:"#79e6cb",emissiveIntensity:0})),new Ye(i,new Wt({color:"#a8c2b7",wireframe:!0,transparent:!0,opacity:.14,side:wt,depthWrite:!1,depthTest:!0}))),t.add(w),{pen:S,group:w,pulse:-1e4}}),o=document.createElement("canvas");o.width=256,o.height=128;const a=o.getContext("2d");function l(S){S.beginPath(),S.moveTo(235,64),S.bezierCurveTo(231,46,208,36,178,35),S.bezierCurveTo(137,34,108,47,80,57),S.bezierCurveTo(61,60,43,63,24,64),S.bezierCurveTo(43,65,61,68,80,74),S.bezierCurveTo(108,81,137,94,178,93),S.bezierCurveTo(208,92,231,82,235,64),S.closePath()}a.fillStyle="#1c3540",l(a),a.fill();const c=new Of(o);c.colorSpace=Gt,c.magFilter=qt,c.generateMipmaps=!1,c.minFilter=qt;const h=new Wi(.85,.43).rotateX(-Math.PI/2),u=new Wt({color:"#ffffff",map:c,transparent:!0,opacity:.85,alphaTest:.42,depthWrite:!1,side:wt,polygonOffset:!0,polygonOffsetFactor:-1}),d=new dr(h,u,50);d.name="fry-schools-instanced",d.frustumCulled=!1,d.castShadow=!1,d.receiveShadow=!1,d.renderOrder=3,t.add(d);const p=new dr(h,new Wt({map:c,color:"#7bffe7",transparent:!0,opacity:.8,alphaTest:.42,blending:ni,depthWrite:!1,side:wt}),50);p.name="fry-night-glow",p.frustumCulled=!1,p.castShadow=!1,p.receiveShadow=!1,p.renderOrder=4,p.visible=!1,t.add(p);const g=Array.from({length:48},(S,E)=>({phase:E*2.39996%(Math.PI*2),drift:E*.73,spread:.85+E*17%11*.16,fear:0,catchAt:-1/0,catchDirection:0})),_=new dt,m=[],f=new xi(.25,.014,4,20).rotateX(Math.PI/2);for(let S=0;S<4;S++){const E=new Ye(f,new Wt({color:"#e7f5ed",transparent:!0,opacity:0,depthWrite:!1}));E.visible=!1,t.add(E),m.push({mesh:E,at:-1e4})}const b=new Float32Array(72),x=new St;x.setAttribute("position",new Mt(b,3));const v=new Is(x,new gr({color:"#cbb98b",size:.09,transparent:!0,opacity:.9}));return v.frustumCulled=!1,t.add(v),{root:t,pens:r,startCatch(S,E){const w=xs.findIndex(C=>C.id===S);if(!(w<0))for(let C=0;C<12;C++){const y=g[w*12+C];y.catchAt=E,y.catchDirection=y.phase+C*.37}},feed(S,E){const w=r.find(C=>C.pen.id===S);w&&(w.pulse=E)},splash(S,E,w){const C=m.reduce((y,M)=>y.at<M.at?y:M);C.at=w,C.mesh.position.set(S,e(S,E)+.15,E)},update(S,E,w=0,C=null,y=12){const M=S*.001;t.visible=!0;const A=y>=19.5||y<5.5,D=.5+.5*Math.sin(M*1.7);d.material.color.set(A?"#a4fbe9":"#ffffff"),d.material.opacity=A?.95:.85,p.visible=A,p.material.opacity=.55+.35*D;for(let L=0;L<48;L++){const z=xs[Math.floor(L/12)],O=L%12,F=g[L],W=ao(z,S),V=E?.schools.find(P=>P.id===z.id),Q=M*(.25+L%5*.026)+F.phase,se=(.55+Math.sqrt((O+1)/12)*1.15)*F.spread;let he=W.x+Math.cos(Q)*se+Math.sin(M*.31+F.drift)*.2,Me=W.z+Math.sin(Q*.83)*se*.72+Math.cos(M*.28+F.drift)*.2;const j=he-(C?.x??1e8),te=Me-(C?.z??1e8),ue=Math.hypot(j,te),B=ue<3.3?Math.min(1,(3.3-ue)/1.9):0;F.fear+=(B-F.fear)*.15;const X=ue>.001?Math.atan2(te,j):F.phase,pe=(S-F.catchAt)*.001,K=pe>=0&&pe<2.2?(1-Math.exp(-pe*9))*Math.exp(-pe*1.4)*1.55:0,Z=F.fear*(.65+O%4*.22);he+=Math.cos(X)*Z+Math.cos(F.catchDirection)*K,Me+=Math.sin(X)*Z+Math.sin(F.catchDirection)*K;const J=-Math.sin(Q)*se*(.25+L%5*.026)+Math.cos(X)*F.fear*.6+Math.cos(F.catchDirection)*K,le=Math.cos(Q*.83)*se*.72*.83*(.25+L%5*.026)+Math.sin(X)*F.fear*.6+Math.sin(F.catchDirection)*K;_.position.set(he,e(he,Me)+.075,Me),_.rotation.set(0,-Math.atan2(le,J),0),_.scale.setScalar(V&&V.availableAt<=S?.8+L%4*.075:0),_.updateMatrix(),d.setMatrixAt(L,_.matrix),p.setMatrixAt(L,_.matrix)}for(let L=0;L<r.length;L++){const z=r[L],O=E?.pens.find(ue=>ue.id===z.pen.id),F=O?.cycle,W=e(z.pen.x,z.pen.z),V=S-z.pulse,Q=z.group.children[0].material;Q.emissive.set(_l[w]||_l[0]);const se=.24+.08*(.5+.5*Math.sin(M*Math.PI*2/3));Q.emissiveIntensity=O?.members.length>=3?se:0,z.group.position.y=W+.14,z.group.rotation.x=Math.sin(M*.7+L)*.018,z.group.rotation.z=Math.cos(M*.6+L)*.018;const he=M*.65+L,Me=z.pen.x+Math.sin(he)*1.1,j=z.pen.z+Math.cos(he)*1.1,te=V>=0&&V<1300?Math.sin(V/1300*Math.PI)*.6:0;_.position.set(Me,e(Me,j)+.15+te,j),_.rotation.set(0,-he,te*.3),_.scale.setScalar(F?1+Math.min(1,(S-F.startedAt)/(F.completesAt-F.startedAt))*.8:0),_.updateMatrix(),d.setMatrixAt(48+L,_.matrix),p.setMatrixAt(48+L,_.matrix);for(let ue=0;ue<12;ue++){const B=(L*12+ue)*3,X=V/1300;b[B]=z.pen.x+Math.sin(ue*2.4)*(.4+ue*.06),b[B+2]=z.pen.z+Math.cos(ue*2.4)*(.4+ue*.06),b[B+1]=X>=0&&X<1?W+.1+(1-X)*1.1:-1e4}}x.attributes.position.needsUpdate=!0,d.instanceMatrix.needsUpdate=!0,p.instanceMatrix.needsUpdate=!0;for(const L of m){const z=(S-L.at)/850;L.mesh.visible=z>=0&&z<1,L.mesh.visible&&(L.mesh.scale.setScalar(1+z*3),L.mesh.material.opacity=(1-z)*.65)}}}}function wx({scene:s,camera:e,controls:t,character:n,url:i}){const r=document.createElement("div");r.className="multiplayer-status";const o=document.createElement("span");o.setAttribute("role","status"),o.setAttribute("aria-live","polite");const a=document.createElement("button");a.type="button",a.textContent="다시 접속",a.hidden=!0,r.append(o,a),document.querySelector("#app").append(r);const l=document.createElement("div");l.className="player-names",document.querySelector("#app").append(l);const c=new N,h=new Map;let u=null,d=null,p=null;const g=new Map;let _=null,m=!1;const f=["❤️","👋","😂","👍","🎉","😢","😮","👏"],b=new Tt().setFromAxisAngle(new N(1,0,0),-Math.PI/2).multiply(new Tt().setFromAxisAngle(new N(0,0,1),Math.PI));let x=20,v=null,S=null,E=null,w=!1,C=!1,y=!1,M=null,A=0,D=null,L=0,z=0;function O(K,Z=!1){o.textContent=K,a.hidden=!Z}function F(K){const Z=document.createElement("span");return Z.className="player-name",Z.hidden=!0,Z.textContent=K,l.append(Z),Z}function W(K){const Z=h.get(K);Z&&(Z.root.userData.headPlatformEnabled=!1,s.remove(Z.root),Sh(Z.avatar.mesh),Z.label.remove(),Z.emoteLabel.remove(),h.delete(K))}function V(){for(const K of[...h.keys()])W(K);E?.remove(),E=null}function Q(){O(`함께 항해 중 · ${h.size+1}/${x}명`)}function se(K){n.player.userData.tubeColor=K.tubeColor||0;const Z=Su(K.id);n.setCharacter(Z.model,Z.hairColor);const J=new N(K.x,K.y,K.z).sub(n.player.position);n.player.position.add(J),n.player.rotation.y=K.rotation,e.position.add(J),t.target.add(J),t.update()}function he(K){if(K.id===S)return;if(h.has(K.id)){Me(K);return}const Z=Su(K.id),J=gl(Z.model,Z.hairColor),le=new it;le.name=`remote-${K.id}`,le.userData.playerId=K.id,J.mesh.rotation.y=Math.PI;const P=new it;P.position.y=Ut,P.add(J.mesh),le.add(P),s.add(le),le.position.set(K.x,K.y,K.z),le.rotation.y=K.rotation;const oe=F("");oe.style.fontSize="34px",oe.style.background="transparent",oe.style.padding="0";const ce=bh(K.tubeColor||0);le.add(ce),h.set(K.id,{root:le,avatar:J,motionPivot:P,tube:ce,label:F(K.nickname),emoteLabel:oe,emoteUntil:0,jumpHeight:0,samples:[{...K,time:performance.now()}]})}function Me(K){if(K.id===S)return;const Z=h.get(K.id);if(!Z){he(K);return}Z.samples.push({...K,time:performance.now()}),Z.samples.length>20&&Z.samples.shift()}function j(){if(C||y||M)return;const K=Math.min(1e4,500*2**Math.min(A++,5))+Math.random()*250;O("연결이 끊겼습니다 · 재접속 중…"),M=setTimeout(()=>{M=null,te()},K)}async function te(){if(C||y||m||v?.readyState===WebSocket.OPEN||v?.readyState===WebSocket.CONNECTING)return;m=!0,w=!1,n.setEnabled(!1),V(),O("공용 배에 접속 중…");try{await _?.prepare()}catch{}if(m=!1,C||y)return;let K;try{K=new WebSocket(i,_?.protocols())}catch{y=!0,O("멀티플레이 서버 주소 설정 오류");return}v=K,K.onmessage=Z=>{if(v!==K||(L=performance.now(),Z.data==="pong"))return;let J;try{J=JSON.parse(Z.data)}catch{return}if(J.type==="full"){x=J.capacity||20,y=!0,O(`정원 초과 · 최대 ${x}명까지 탑승할 수 있습니다.`,!0),K.close(4003,"Room full");return}if(J.type==="welcome"){if(J.protocol!==2){y=!0,O("서버 버전이 다릅니다. 새로고침해 주세요."),K.close(1002);return}_?.welcome(J),x=J.capacity||20,S=J.you,n.player.userData.playerId=S;const le=J.players.find(P=>P.id===S);if(!le){K.close(1002);return}V(),se(le),E=F(`${le.nickname} (나)`);for(const P of J.players)he(P);w=!0,A=0,z=0,D=null,n.setEnabled(!0),Q();return}if(w){if(J.type==="aquaResult"){const le=g.get(J.requestId);le&&(clearTimeout(le.timer),g.delete(J.requestId),J.ok?le.resolve(J):le.reject(new Error(J.error)))}if(["aquaState","aquaRefresh","aquaEvent","aquaError"].includes(J.type)&&p?.(J),J.type==="join"&&(he(J.player),Q()),J.type==="state"&&Me(J.player),J.type==="emote"&&f.includes(J.icon)){const le=h.get(J.id);le&&(le.emoteLabel.textContent=J.icon,le.emoteUntil=performance.now()+3e3)}if(J.type==="fishShow"&&typeof J.fishId=="string"){const le=h.get(J.id);le&&u?.(J.fishId,le)}if(J.type==="firework"&&Number.isInteger(J.color)&&J.color>=0&&J.color<5){const le=h.get(J.id);le&&d?.(J.color,le)}J.type==="leave"&&(W(J.id),Q()),J.type==="correction"&&(se(J.player),D=null)}},K.onclose=Z=>{v===K&&(v=null,w=!1,n.setEnabled(!1),V(),Z.code===4003?(y=!0,O(`정원 초과 · 최대 ${x}명까지 탑승할 수 있습니다.`,!0)):Z.code===1008?(y=!0,O("연결 요청이 거부되었습니다. 다시 접속해 주세요.",!0)):j())},K.onerror=()=>{}}a.onclick=()=>{y=!1,A=0,te()};let ue=null,B=null;if(!i)O("혼자 항해 중 · 멀티플레이 서버 연결 대기");else{let K;try{K=new URL(i)}catch{return O("멀티플레이 서버 주소 설정 오류"),{update(){}}}if(!["ws:","wss:"].includes(K.protocol)||location.protocol==="https:"&&K.protocol!=="wss:")return O("멀티플레이에는 올바른 보안 WebSocket 주소가 필요합니다."),{update(){}};_=fx(i),te(),ue=setInterval(()=>{if(!w||v?.readyState!==WebSocket.OPEN||v.bufferedAmount>4096)return;const Z=n.player,J={x:Z.position.x,y:Z.position.y,z:Z.position.z,rotation:Z.rotation.y,moving:!!Z.userData.moving,...n.getNetworkState()};D&&Math.hypot(J.x-D.x,J.z-D.z)<.005&&Math.abs(Math.atan2(Math.sin(J.rotation-D.rotation),Math.cos(J.rotation-D.rotation)))<.005&&J.moving===D.moving&&J.sitting===D.sitting&&J.lying===D.lying&&J.jump===D.jump&&J.inWater===D.inWater&&J.returning===D.returning&&Math.abs(J.jumpHeight-D.jumpHeight)<.06&&Math.abs(J.verticalOffset-D.verticalOffset)<.04||(v.send(JSON.stringify({type:"state",seq:z++,...J})),D=J)},100),B=setInterval(()=>{if(v?.readyState===WebSocket.OPEN){if(performance.now()-L>55e3){v.close(4e3,"Heartbeat timeout");return}v.send("ping")}},2e4)}function X(K,Z,J=0){c.copy(Z),c.y+=Ut+J+3.15,c.project(e);const le=c.z>-1&&c.z<1&&Math.abs(c.x)<1.1&&Math.abs(c.y)<1.1;K.hidden=!le,le&&(K.style.left=`${(c.x*.5+.5)*innerWidth}px`,K.style.top=`${(-c.y*.5+.5)*innerHeight}px`)}function pe(K,Z=!0){const J=performance.now()-100;for(const le of h.values()){const P=le.samples;for(;P.length>2&&P[1].time<=J;)P.shift();const oe=P[0],ce=P[1]||oe,Se=ce.time>oe.time?Ge.clamp((J-oe.time)/(ce.time-oe.time),0,1):1;le.root.position.set(Ge.lerp(oe.x,ce.x,Se),Ge.lerp(oe.y,ce.y,Se),Ge.lerp(oe.z,ce.z,Se)),le.root.rotation.y=oe.rotation+Math.atan2(Math.sin(ce.rotation-oe.rotation),Math.cos(ce.rotation-oe.rotation))*Se;const re=Se<.5?oe:ce,Ie=Number.isFinite(oe.verticalOffset)?oe.verticalOffset:0,de=Number.isFinite(ce.verticalOffset)?ce.verticalOffset:Ie,ve=Ge.lerp(Ie,de,Se);le.jumpHeight+=(ve-le.jumpHeight)*Math.min(1,K*24),le.motionPivot.position.y=Ut+(re.lying?0:le.jumpHeight),le.tube.visible=!!re.inWater&&!re.returning,le.tube.position.y=le.motionPivot.position.y+le.avatar.mesh.position.y+1.5,le.tube.rotation.z=Math.sin(performance.now()*.0017+le.root.position.x)*.025,re.lying?(le.avatar.mesh.position.set(0,.58,-1.08),le.avatar.mesh.quaternion.copy(b)):(le.avatar.mesh.position.set(0,0,0),le.avatar.mesh.rotation.set(0,Math.PI,0));const He=ce.time>oe.time?(de-Ie)*1e3/(ce.time-oe.time):0,We=!!re.jump&&!re.returning&&He<-7;re.lying||le.avatar.update(K,re.moving,!!re.sitting,re.jump||re.returning?1:0,!!re.inWater,We),le.root.userData.headPlatformEnabled=!re.lying&&!re.inWater&&!re.returning,le.root.userData.headPlatformY=le.root.position.y+le.motionPivot.position.y+le.avatar.mesh.position.y+2.83,X(le.label,le.root.position,re.lying?0:le.jumpHeight),Z||(le.label.hidden=!0),le.emoteUntil>performance.now()?(X(le.emoteLabel,le.root.position,re.lying?0:le.jumpHeight),le.emoteLabel.style.top=`${parseFloat(le.emoteLabel.style.top)-38}px`,Z||(le.emoteLabel.hidden=!0)):le.emoteLabel.hidden=!0}E&&(X(E,n.player.position,n.getNetworkState().lying?0:n.getNetworkState().verticalOffset),Z||(E.hidden=!0))}return addEventListener("pagehide",()=>{C=!0,clearTimeout(M),M=null,v?.close(1e3,"Leaving")}),addEventListener("pageshow",K=>{K.persisted&&i&&(C=!1,v=null,te())}),addEventListener("online",()=>{i&&!w&&!y&&(clearTimeout(M),M=null,te())}),{update:pe,onAquaculture(K){p=K},aquaSnapshot(){w&&v?.readyState===WebSocket.OPEN&&v.send(JSON.stringify({type:"aqua",action:"snapshot"}))},aquaRequest(K,Z={}){if(!w||v?.readyState!==WebSocket.OPEN)return Promise.reject(new Error("멀티플레이 연결 후 이용할 수 있습니다."));const J=crypto.randomUUID(),le=JSON.stringify({type:"aqua",requestId:J,action:K,...Z});return new Promise((P,oe)=>{let ce=!1;const Se={resolve:P,reject:oe,timer:null},re=()=>{Se.timer=setTimeout(()=>{!ce&&v?.readyState===WebSocket.OPEN?(ce=!0,v.send(le),re()):(g.delete(J),oe(new Error("응답을 확인하지 못했습니다. 잠시 후 기록을 다시 확인해 주세요.")))},6e3)};g.set(J,Se),v.send(le),re()})},forEachRemote(K){for(const Z of h.values())K(Z)},onFishShow(K){u=K},sendFishShow(K){w&&v?.readyState===WebSocket.OPEN&&v.send(JSON.stringify({type:"fishShow",fishId:K}))},onFirework(K){d=K},sendFirework(K){w&&v?.readyState===WebSocket.OPEN&&Number.isInteger(K)&&K>=0&&K<5&&v.send(JSON.stringify({type:"firework",color:K}))},sendEmote(K){w&&v?.readyState===WebSocket.OPEN&&f.includes(K)&&v.send(JSON.stringify({type:"emote",icon:K}))},dispose(){C=!0,clearTimeout(M),clearInterval(ue),clearInterval(B),v?.close(1e3),V(),r.remove(),l.remove()}}}const Au=""+new URL("sea_fish_atlas-w0mfpsBV.png",import.meta.url).href,Ex=["🛟 튜브를 타고 바다로 내려가 치어를 잡아보세요!","🐟 바다에 있는 치어 군집을 찾아보세요!","🥅 뜰채를 사용해 치어를 잡아보세요!","⭕ 잡은 치어를 가두리에 풀어주세요!","🍚 치어에게 먹이를 주세요!","🐟 먹이를 줄수록 수확량이 늘어나요. 같은 사람은 3시간마다 먹이를 줄 수 있고, 12시간 후 물고기를 수확할 수 있어요!"],yt=(s,e,t)=>{const n=document.createElement(s);return e&&(n.className=e),t!==void 0&&(n.textContent=t),n},Ru={oarfish:"깊은 바다에 사는 길고 은빛인 물고기예요. 붉은 지느러미가 물결처럼 이어져요.",coelacanth:"아주 오래된 계통의 심해어예요. 독특한 지느러미로 천천히 헤엄쳐요.",sunfish:"납작하고 커다란 몸이 특징이에요. 바다 표면 가까이에서 쉬기도 해요.",mandarin:"산호초 근처에 사는 작고 화려한 물고기예요. 알록달록한 무늬가 매력적이에요.",lionfish:"화려한 줄무늬와 긴 지느러미가 특징이에요. 지느러미 가시에는 독이 있어요.","blue-tang":"푸른 몸과 노란 꼬리가 눈에 띄어요. 산호초 주변에서 살아요.","yellow-tang":"밝은 노란색 몸을 가진 산호초 물고기예요. 주로 해조류를 먹어요.",clownfish:"말미잘 촉수 사이에서 보호받으며 살아요. 주황색 몸에 흰 줄무늬가 있어요.",sardine:"은빛 몸으로 반짝이며 커다란 무리를 이루어요. 바다 생태계의 중요한 먹이예요.",anchovy:"작고 날씬한 몸으로 무리 지어 헤엄쳐요. 플랑크톤을 먹고 자라요."},Cu=s=>{const e=Math.max(0,Math.ceil(s/1e3));return[Math.floor(e/3600),Math.floor(e%3600/60),e%60].map(t=>String(t).padStart(2,"0")).join(":")};function Tx({scene:s,camera:e,character:t,multiplayer:n,ocean:i,isAvailable:r}){const o=bx(s,i.heightAt),a=bh(0);s.add(a),t.setWaterHeightSampler(i.heightAt);const l=document.querySelector("#app"),c=yt("button","aqua-toggle","🐟 물고기 도감");c.id="aquaculture-toggle",c.type="button",c.setAttribute("aria-expanded","false"),c.dataset.aquaUi="",l.append(c);const h=yt("div","aqua-tutorial");h.setAttribute("role","status"),l.append(h);const u=yt("button","aqua-interact");u.dataset.aquaUi="",u.type="button",u.hidden=!0,l.append(u);const d=yt("div","aqua-toast");d.setAttribute("role","status"),d.hidden=!0,l.append(d);const p=yt("section","aqua-panel");p.dataset.aquaUi="",p.hidden=!0,p.setAttribute("aria-label","공동 양식과 물고기 도감");const g=yt("div","aqua-panel-head"),_=yt("h2","","물고기 도감");g.append(_),p.append(g);const m=yt("p","aqua-summary",""),f=yt("button","aqua-harvest");yt("div","aqua-pen-list");const b=yt("div","aqua-book");p.append(b),l.append(p);const x=yt("section","aqua-reward");x.hidden=!0,x.dataset.aquaUi="",x.setAttribute("role","dialog"),x.setAttribute("aria-label","가두리 수확 결과");const v=yt("h3","","🐟 물고기를 획득했어요!"),S=yt("div","aqua-reward-list"),E=yt("button","","물고기 챙기기 ✓");E.type="button",E.onclick=()=>{x.hidden=!0},x.append(v,S,E),l.append(x);const w=[],C=new N,y=new To,M=new N,A=new N,D=new Map;let L=!1,z=null,O=0,F=performance.now(),W=!1,V=!1,Q=null,se=!1,he=-1,Me=!1,j=0,te=null,ue=0;const B=()=>O?O+(performance.now()-F):Date.now();function X(U){d.textContent=U,d.hidden=!1,j=performance.now()+5e3}function pe(U){if(p.hidden=!U,c.setAttribute("aria-expanded",String(U)),U){const H=document.querySelector("details[open]");H&&(H.open=!1),n.aquaSnapshot()}else c.focus()}document.addEventListener("visibilitychange",()=>{document.hidden||n.aquaSnapshot()}),c.onclick=()=>pe(p.hidden),document.addEventListener("pointerdown",U=>{!p.hidden&&!p.contains(U.target)&&!c.contains(U.target)&&pe(!1)}),addEventListener("keydown",U=>{U.code==="Escape"&&!p.hidden&&pe(!1)});async function K(U,H={}){W=!0,u.disabled=!0;try{return await n.aquaRequest(U,H)}catch(ee){return X(ee.message),null}finally{W=!1,u.disabled=!1}}function Z(U){const H=z?.personal;return H?H.penId?H.penId!==U.id?{text:"다른 가두리에 참여 중",disabled:!0}:H.pending>0?{action:"harvest",text:`🐟 물고기 ${H.pending}마리 수확하기`,disabled:!1}:U.cycle?U.cycle.feeds.length>=3?{text:"먹이 3/3 · 성장 중",disabled:!0}:H.nextFeedAt>B()?{text:`다음 먹이 ${Cu(H.nextFeedAt-B())}`,disabled:!0}:{action:"feed",text:`🍚 먹이 주기 (${U.cycle.feeds.length}/3)`,disabled:!1}:{action:"release",text:"🐟 치어 1마리 방류",disabled:H.fry<1}:{action:"join",text:`가두리 ${U.id} 참여 (${U.members.length}/3)`,disabled:U.members.length>=3}:null}async function J(U){const H=Z(U);if(!H?.action||H.disabled)return;if(H.action==="harvest"){await P(U);return}await K(H.action,{penId:U.id})&&X(H.action==="join"?`가두리 ${U.id}에 참여했습니다.`:H.action==="release"?"치어를 방류했습니다. 12시간 양식이 시작됩니다.":"먹이를 주었습니다. 기여한 만큼 보상이 보존됩니다.")}async function le(U){if(Q||W)return;const H=await K("collectStart",{schoolId:U.id});H&&(Q={school:U,challengeId:H.challengeId,start:performance.now(),duration:Math.max(Eu,H.endsAt-B())},o.startCatch(U.id,B()))}u.onclick=()=>{!te||W||Q||(te.school?le(te.school):te.pen&&J(te.pen))};async function P(U){if(W||!He(U)||z?.personal?.penId!==U.id||!z.personal.pending)return;const H=await K("harvest",{penId:U.id});H&&(S.replaceChildren(...(H.fish||[]).map(ee=>{const G=cs.find(fe=>fe.id===ee),me=yt("div","aqua-reward-fish");return G&&me.append(oe(G,!0)),me.append(yt("strong","",G?.name||"물고기"),yt("small","",G?.rarity||"")),me})),x.hidden=!1)}f.hidden=!0;function oe(U,H){const ee=cs.findIndex(Ee=>Ee.id===U.id),G=yt("span","aqua-fish-sprite"+(H?"":" unowned"));G.setAttribute("role","img"),G.setAttribute("aria-label",U.name),G.style.setProperty("--fish-column",String(ee%5)),G.style.setProperty("--fish-row",String(Math.floor(ee/5)));const me=yt("span","aqua-fish-fallback");me.innerHTML=ce(U,H).outerHTML,G.append(me);const fe=new Image;return fe.onload=()=>{G.style.backgroundImage=`url("${Au}")`,G.classList.add("atlas-ready")},fe.onerror=()=>{G.classList.remove("atlas-ready")},fe.src=Au,G}function ce(U,H){const ee=document.createElementNS("http://www.w3.org/2000/svg","svg");ee.setAttribute("viewBox","0 0 120 76"),ee.setAttribute("aria-hidden","true");const G=ee.namespaceURI,me=(De,k,we=ee)=>{const Pe=document.createElementNS(G,De);for(const[Ue,be]of Object.entries(k))Pe.setAttribute(Ue,be);return we.append(Pe),Pe};me("defs",{});const fe=me("linearGradient",{id:"fish-"+U.id,x1:"0",y1:"0",x2:"0",y2:"1"});me("stop",{offset:"0%","stop-color":"#ffffff","stop-opacity":".8"},fe),me("stop",{offset:"48%","stop-color":U.color},fe),me("stop",{offset:"100%","stop-color":"#183d56"},fe);const Ee=me("g",{transform:"translate(0 3)"}),xe=U.id,ye=xe==="oarfish"||xe==="sardine"||xe==="anchovy",ge=xe==="sunfish",Te=xe==="lionfish",Re=ge?"M17 37 Q21 6 59 9 Q94 8 91 36 Q91 64 58 65 Q22 64 17 37Z":ye?"M10 37 Q31 25 77 29 Q92 32 94 37 Q91 44 77 46 Q31 49 10 37Z":"M14 37 Q27 14 62 18 Q88 20 92 37 Q88 55 62 57 Q27 60 14 37Z";if(me("path",{d:ge?"M90 36 L107 27 L108 48Z":ye?"M90 37 L114 25 L109 37 L114 49Z":"M88 37 L113 20 L107 37 L113 54Z",fill:U.color,stroke:"#224b63","stroke-width":"1.5"},Ee),Te||xe==="mandarin"||xe==="coelacanth"?me("path",{d:"M31 23 L39 6 L47 19 L55 5 L65 18 L75 10 L79 24Z",fill:U.color,stroke:"#345a69","stroke-width":"1"},Ee):me("path",{d:ge?"M43 15 L62 0 L70 15Z":"M40 22 Q57 6 74 22Z",fill:U.color,opacity:".9"},Ee),me("path",{d:Re,fill:"url(#fish-"+U.id+")",stroke:"#285066","stroke-width":"1.7"},Ee),xe==="clownfish")for(const De of[39,65])me("path",{d:"M"+De+" 20 Q"+(De+12)+" 37 "+De+" 55",fill:"none",stroke:"#f8f4e7","stroke-width":"9"},Ee);if(xe==="blue-tang"&&me("path",{d:"M30 30 Q55 14 82 33 Q60 48 34 43",fill:"none",stroke:"#153b87","stroke-width":"8"},Ee),xe==="mandarin")for(let De=0;De<6;De++)me("circle",{cx:35+De*9,cy:30+De%2*12,r:3.6,fill:"#f6a447"},Ee);if(xe==="coelacanth")for(let De=0;De<8;De++)me("circle",{cx:34+De%4*12,cy:29+Math.floor(De/4)*13,r:2.6,fill:"#c4d8e0",opacity:".8"},Ee);if(xe==="oarfish"&&me("path",{d:"M34 27 Q54 -5 76 13 Q90 -1 101 17",fill:"none",stroke:"#df6683","stroke-width":"5"},Ee),xe==="lionfish")for(let De=0;De<5;De++)me("path",{d:"M"+(37+De*11)+" 24 L"+(30+De*14)+" 2 M"+(37+De*11)+" 52 L"+(30+De*14)+" 70",stroke:"#e5a285","stroke-width":"3"},Ee);return me("path",{d:"M52 40 Q67 48 77 40",fill:"none",stroke:"#224b63","stroke-width":"2",opacity:".65"},Ee),me("circle",{cx:29,cy:33,r:4.1,fill:"#f7ffff",stroke:"#204154","stroke-width":"1"},Ee),me("circle",{cx:30,cy:33,r:2.2,fill:"#162f43"},Ee),H||(me("rect",{x:0,y:0,width:120,height:76,fill:"#18343d",opacity:".8"}),ee.style.filter="grayscale(1)"),ee}const Se=new Map;function re(U,H){const ee=cs.find(fe=>fe.id===U);if(!ee||!H)return;Se.get(H)?.el.remove();const G=yt("div","aqua-showcase");G.append(oe(ee,!0),yt("strong","",ee.name+" 자랑 중!")),G.style.cssText="position:fixed;z-index:70;pointer-events:none;display:flex;flex-direction:column;align-items:center;transform:translate(-50%,-100%);filter:drop-shadow(0 3px 7px #0009)";const me=G.firstChild;me.style.cssText="display:block;width:120px;height:95px;background-size:500% 200%;background-repeat:no-repeat;background-position:"+cs.findIndex(fe=>fe.id===U)%5*25+"% "+Math.floor(cs.findIndex(fe=>fe.id===U)/5)*100+"%",l.append(G),Se.set(H,{el:G,start:performance.now()})}n.onFishShow((U,H)=>re(U,H.root.userData.playerId));function Ie(){const U=performance.now(),H=t.player.userData.playerId;function ee(G,me){const fe=Se.get(G);if(!fe)return;const Ee=new N(0,0,-1).applyQuaternion(me.quaternion),xe=me.position.clone().addScaledVector(Ee,1);xe.y+=2.5+Math.sin(U*.003)*.08,xe.project(e),fe.el.hidden=xe.z<=0||xe.z>=1||Math.abs(xe.x)>1||Math.abs(xe.y)>1||L,fe.el.style.left=(xe.x+1)*50+"%",fe.el.style.top=(1-xe.y)*50+"%"}ee(H,t.player),n.forEachRemote(G=>ee(G.root.userData.playerId,G.root));for(const[G,me]of Se){const fe=U-me.start;me.el.style.opacity=String(Math.min(1,fe/250,(5e3-fe)/400)),fe>=5e3&&(me.el.remove(),Se.delete(G))}}function de(){if(!z?.personal)return;const U=z.personal;b.replaceChildren(...cs.map(H=>{const ee=U.inventory.find(xe=>xe.fishId===H.id),G=yt("div","aqua-fish aqua-rarity-"+H.rarity+(ee?" owned":""));G.append(oe(H,!!ee),yt("strong","",H.name),yt("small","",ee?`${ee.quantity}마리 보유`:"미발견"));const me=yt("div","aqua-fish-info",Ru[H.id]);me.setAttribute("role","tooltip"),G.append(me),G.tabIndex=0,G.setAttribute("aria-label",H.name+". "+Ru[H.id]),ee&&(G.style.cursor="pointer",G.title="클릭해서 5초간 물고기 자랑하기",G.addEventListener("click",()=>{re(H.id,t.player.userData.playerId),n.sendFishShow(H.id),pe(!1)}),G.addEventListener("keydown",xe=>{(xe.key==="Enter"||xe.key===" ")&&(xe.preventDefault(),G.click())}));let fe;const Ee=()=>{clearTimeout(fe),G.classList.remove("show-info")};return G.addEventListener("pointerdown",xe=>{xe.pointerType==="touch"&&(clearTimeout(fe),fe=setTimeout(()=>G.classList.add("show-info"),500))}),G.addEventListener("pointerup",Ee),G.addEventListener("pointercancel",Ee),G.addEventListener("pointerleave",Ee),G.addEventListener("contextmenu",xe=>{xe.pointerType==="touch"&&xe.preventDefault()}),G}))}function ve(){const U=t.getNetworkState();return U.inWater&&!U.returning&&!U.jump}function He(U){return ve()&&Math.hypot(t.player.position.x-U.x,t.player.position.z-U.z)<=5.4}function We(U,H,ee,G,me,fe=!1){if(fe&&me){e.getWorldPosition(A),M.set(H,ee,G).sub(A);const Re=M.length();M.normalize(),y.set(A,M),y.far=Math.max(0,Re-.25),y.intersectObjects(s.children,!0).some(De=>{let k=De.object;for(;k;){if(k===o.root||k===a||k.name==="ocean"||k.name==="water"||k.material?.name==="OceanSurface")return!1;k=k.parent}return De.object.isMesh&&!De.object.material?.transparent})&&(me=!1)}C.set(H,ee,G).project(e);const Ee=(C.x*.5+.5)*innerWidth,xe=(-C.y*.5+.5)*innerHeight,ye=U.offsetWidth/2,ge=U.offsetHeight,Te=8;if(U.hidden=!me||C.z<0||C.z>1||Ee-ye<Te||Ee+ye>innerWidth-Te||xe-ge<Te||xe>innerHeight-Te,!U.hidden){if(U.classList.contains("aqua-school-label")){t.player.updateWorldMatrix(!0,!1);const Re=t.player.getWorldPosition(new N);if(Re.y+=2.3,Re.project(e),Re.z>0&&Re.z<1){const Ce=(Re.x*.5+.5)*innerWidth,De=(-Re.y*.5+.5)*innerHeight;if(Math.abs(Ee-Ce)<Math.max(42,ye+24)&&Math.abs(xe-De)<Math.max(75,ge+40)){U.hidden=!0;return}}}U.style.left=`${Ee}px`,U.style.top=`${xe}px`}}n.onAquaculture(U=>{if(U.type==="aquaError"){m.textContent="양식 서버 연결을 확인해 주세요.",X(U.error);return}if(U.type==="aquaRefresh"){n.aquaSnapshot();return}if(U.type==="aquaState"){z=U.state,O=z.serverNow,F=performance.now(),de();return}if(U.type==="aquaEvent"){if(U.action==="feed"&&o.feed(U.penId,B()),U.action==="collectFinish"){const H=xs.find(ee=>ee.id===U.schoolId);if(H){const ee=ao(H,B());o.splash(ee.x,ee.z,B())}}if(U.action==="collectStart"&&U.actorId!==t.player.userData.playerId){const H=D.get(U.actorId);H&&s.remove(H.net);const ee=Tu();s.add(ee),D.set(U.actorId,{net:ee,start:performance.now(),duration:Eu})}}});function I(U,H=12){Ie();const ee=r()&&!L,G=B(),me=z?.personal,fe=t.getNetworkState(),Ee=ve();me?.pending>0&&!V&&(X("🐟 물고기가 자랐어요! 참여한 가두리로 가서 챙기세요."),V=!0),me?.pending||(V=!1);const xe=!!document.querySelector("details[open]");xe&&!p.hidden&&pe(!1),c.hidden=!ee||xe,p.hidden=p.hidden||!ee,h.hidden=!ee||!p.hidden||!me||me.tutorial>=6,h.hidden||(h.textContent=Ex[me.tutorial]||""),me?.tutorial===5&&!h.hidden&&!Me&&(Me=!0,setTimeout(()=>{if(h.hidden){Me=!1;return}n.aquaRequest("tutorialDone").catch(()=>{}).finally(()=>Me=!1)},12e3)),ee&&performance.now()-ue>15e3&&(ue=performance.now(),n.aquaSnapshot()),a.visible=fe.inWater&&!fe.returning,gx(a,t.player.userData.tubeColor||0),a.material.emissiveIntensity=.2+Math.max(0,t.player.userData.waterKickPulse||0)*.55,t.player.updateWorldMatrix(!0,!0);const ye=t.player.children[0].getWorldPosition(new N).y;if(a.position.set(t.player.position.x,ye+1.5,t.player.position.z),a.rotation.z=Math.sin(G*.0017)*.025,o.update(G,z,a.userData.color,Ee?t.player.position:null,H),te=null,ee&&me&&Ee&&!W){const ge=xs.find(Te=>{const Re=ao(Te,G);return Math.hypot(t.player.position.x-Re.x,t.player.position.z-Re.z)<=2});if(ge){const Te=z.schools.find(Re=>Re.id===ge.id);te={school:ge},u.textContent=Te.availableAt>G?`치어가 다시 모이는 중 · ${Math.ceil((Te.availableAt-G)/1e3)}초`:me.fry>=5?"치어 보유 한도 5/5":"🥅 뜰채로 치어 채집 (2초)",u.disabled=Te.availableAt>G||me.fry>=5}else{const Te=z.pens.find(He);if(Te){te={pen:Te};const Re=Z(Te);u.textContent=`가두리 ${Te.id} · ${Te.members.length}/3명
${Te.members.map(Ce=>Ce.nickname+(Ce.mine?" (나)":"")).join(" · ")||"참여자 없음"}
${Re?.text||""}`,u.disabled=Re?.disabled||!1}}}if(u.classList.toggle("aqua-pen-interact",!!te?.pen),u.hidden=!te||!p.hidden,te?.pen&&!u.hidden){const ge=te.pen;We(u,ge.x,i.heightAt(ge.x,ge.z)+2.3,ge.z,!0)}if(Q){u.hidden=!ee,u.disabled=!0;const ge=(performance.now()-Q.start)/Q.duration;if(u.textContent=`🥅 채집 중 ${Math.min(100,Math.floor(ge*100))}%`,Q.net||(Q.net=Tu(),s.add(Q.net)),t.setNetPose(ge),Q.net.position.copy(t.getFireworkHandPosition()),Q.net.rotation.set(Math.sin(ge*Math.PI)*-.6,t.player.rotation.y,Math.PI-.45),ge>=1){const Te=Q;Q=null,s.remove(Te.net),K("collectFinish",{challengeId:Te.challengeId}).then(Re=>{Re&&X("치어 1마리를 채집했습니다! 가두리로 가져가 보세요.")})}}n.forEachRemote(ge=>{const Te=D.get(ge.root.userData.playerId);if(!Te)return;const Re=(performance.now()-Te.start)/Te.duration;if(Re>=1){s.remove(Te.net),D.delete(ge.root.userData.playerId);return}ge.avatar.netPose(Re),ge.root.updateMatrixWorld(!0),Te.net.position.copy(ge.avatar.rightHandWorldPosition()),Te.net.rotation.set(-.4,ge.root.rotation.y,Math.PI-.45)});for(const[ge,Te]of D)performance.now()-Te.start>3e3&&(s.remove(Te.net),D.delete(ge));if(me&&ee&&Ee&&!se&&(me.tutorial===0||me.tutorial===1&&xs.some(ge=>{const Te=ao(ge,G);return Math.hypot(t.player.position.x-Te.x,t.player.position.z-Te.z)<3.7}))&&(se=!0,n.aquaRequest("observe").catch(()=>{}).finally(()=>{setTimeout(()=>se=!1,3e3)})),d.hidden=performance.now()>j,Math.floor(G/1e3)!==he&&(he=Math.floor(G/1e3),!p.hidden&&z))for(const ge of z.pens){const Te=p.querySelector(`[data-pen-clock="${ge.id}"]`),Re=p.querySelector(`[data-pen-action="${ge.id}"]`),Ce=Z(ge);Te?.firstChild&&(Te.firstChild.nodeValue=ge.cycle?`먹이 ${ge.cycle.feeds.length}/3 · 남은 ${Cu(ge.cycle.completesAt-G)}`:"치어 1마리를 방류하면 시작합니다."),Re&&Ce&&(Re.textContent=Ce.text,Re.disabled=W||!Ce.action||Ce.disabled||!He(ge))}}function T(U){L=U,o.root.visible=!U;for(const{el:H}of w)H.hidden=U;U&&(u.hidden=!0,h.hidden=!0,d.hidden=!0)}return{update:I,world:o,setOverview:T,getState:()=>z}}function Ax(s,e){const t={value:0},n={value:0},i=e.camera,r=[],o=[],a=[];for(let E=0;E<4e3;E++){const w=.025+Math.random()*.975,C=Math.random()*Math.PI*2,y=Math.sqrt(1-w*w);r.push(y*Math.cos(C)*16e3,w*16e3,y*Math.sin(C)*16e3),o.push(Math.random()*Math.PI*2),a.push(Math.random()<.045?3.8+Math.random()*2.2:1.1+Math.random()*2.4)}const l=new St;l.setAttribute("position",new ft(r,3)),l.setAttribute("phase",new ft(o,1)),l.setAttribute("size",new ft(a,1));const c=new Is(l,new jt({uniforms:{time:t,night:n},transparent:!0,depthWrite:!1,blending:ni,vertexShader:`attribute float phase,size;uniform float time,night;varying float brightness,tint;
      void main(){brightness=night*(.5+.5*pow(.5+.5*sin(time*(1.2+size*.6)+phase),2.));tint=phase/6.283;
      gl_PointSize=size;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:"varying float brightness,tint;void main(){float d=length(gl_PointCoord-.5)*2.;float glow=exp(-d*d*4.)*(1.-smoothstep(.6,1.,d));gl_FragColor=vec4(mix(vec3(.64,.79,1.),vec3(1.,.89,.73),tint),brightness*glow);}"}));c.name="night-stars",c.renderOrder=-9,s.add(c);const h=new Ye(new Vn(21e3,32,16),new jt({uniforms:{...e.uniforms,time:t},side:Qt,transparent:!0,depthWrite:!1,vertexShader:"varying vec3 direction;void main(){direction=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`
      uniform float time,daylight,sunVisible,cloudCover,cloudSamples,cloudDetail;uniform vec3 sunDirection,sunColor,skyHorizon;varying vec3 direction;
      float hash(vec3 p){return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.5453);}
      float noise(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
        return mix(mix(mix(hash(i),hash(i+vec3(1,0,0)),f.x),mix(hash(i+vec3(0,1,0)),hash(i+vec3(1,1,0)),f.x),f.y),
                   mix(mix(hash(i+vec3(0,0,1)),hash(i+vec3(1,0,1)),f.x),mix(hash(i+vec3(0,1,1)),hash(i+vec3(1,1,1)),f.x),f.y),f.z);}
      float density(vec3 p){
        vec3 q=p*.0025+vec3(time*.036,0.,time*.012);
        float n=noise(q)*.70+noise(q*2.03)*.23+noise(q*4.11)*.07;
        // High mode adds fine-scale structure without changing the large cloud shapes.
        n+=cloudDetail*(noise(q*8.17)-.5)*.035;
        float layer=smoothstep(650.,780.,p.y)*(1.-smoothstep(980.,1200.,p.y));
        float threshold=mix(.82,.18,cloudCover);
        return smoothstep(threshold,threshold+.18,n)*layer*cloudCover;
      }
      void main(){
        vec3 d=normalize(direction);if(d.y<.018||cloudCover<=0.)discard;
        float start=650./d.y,finish=min(1200./d.y,16000.);
        if(finish<=start)discard;
        float stepSize=(finish-start)/cloudSamples;vec3 sum=vec3(0.);float alpha=0.;
        // Stable per-pixel jitter breaks up visible horizontal raymarch bands
        // without increasing the number of volume samples.
        float jitter=fract(52.9829189*fract(dot(gl_FragCoord.xy,vec2(.06711056,.00583715))));
        vec3 lightDir=normalize(vec3(sunDirection.x,max(sunDirection.y,.25),sunDirection.z));
        // Warm clouds toward sunset; keep shaded portions cooler for contrast.
        // Cloud colors come directly from the same sky gradient uniform.
        // No separate dawn/sunset tint clocks: cloud and sky change together.
        vec3 ambient=skyHorizon*mix(.24,.56,daylight);
        vec3 directBase=skyHorizon*mix(.52,1.15,daylight);
        // Sun-facing rims inherit the current sky hue, including dawn violet
        // and sunset crimson, rather than holding a tint after the sky changes.
        float lowSun=1.-smoothstep(.12,.48,max(sunDirection.y,0.));
        float backlight=pow(max(dot(d,normalize(sunDirection)),0.),5.)*lowSun*sunVisible;
        for(int i=0;i<24;i++){
          if(float(i)>=cloudSamples)break;
          vec3 p=d*(start+(float(i)+jitter)*stepSize);
          float den=density(p);float a=1.-exp(-den*stepSize*.006);
          if(a<.002)continue;
          float shade=exp(-density(p+lightDir*150.)*1.8-density(p+lightDir*330.)*.9);
          // Density gradient approximates a thin rim without extra cloud samples.
          float rim=(1.-smoothstep(.12,.55,den))*backlight;
          vec3 rimColor=skyHorizon*rim*.85;
          sum+=(1.-alpha)*a*(ambient+directBase*shade+rimColor);alpha+=(1.-alpha)*a;
          if(alpha>.98)break;
        }
        float haze=smoothstep(.035,.22,d.y);
        vec3 color=mix(skyHorizon,sum/max(alpha,.001),haze);
        // Subtle 8-bit output dithering; avoid a separate noise texture.
        float dither=(jitter-.5)/255.;
        gl_FragColor=vec4(color+vec3(dither),alpha*haze*.92);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}));h.name="volumetric-clouds",h.renderOrder=-8,s.add(h);const u=new St,d=new Float32Array(108),p=new Float32Array(108);for(let E=0;E<36;E++){const w=Math.pow(1-E/35,2);p.set([w*.75,w*.86,w],E*3)}u.setAttribute("position",new Mt(d,3).setUsage(ii)),u.setAttribute("color",new Mt(p,3));const g=new bo(u,new Nl({vertexColors:!0,transparent:!0,opacity:0,depthTest:!0,depthWrite:!1,blending:ni}));g.name="shooting-star",g.frustumCulled=!1,g.renderOrder=0,s.add(g);let _=-1,m=5+Math.random()*6;const f=new N,b=new N,x=new N,v=new N;function S(E){if(t.value+=E,n.value=1-Ge.smoothstep(e.uniforms.daylight.value,.1,.55),c.visible=n.value>0,g.visible=n.value>0,n.value<.2){_=-1,g.material.opacity=0;return}if(m-=E,_<0&&m<=0){i.getWorldDirection(x),x.y=0,x.lengthSq()<.001&&x.set(0,0,-1),x.normalize(),v.set(-x.z,0,x.x);const w=7500;f.copy(i.position).addScaledVector(x,w).addScaledVector(v,(Math.random()-.5)*w*.8),f.y=1250+Math.random()*1800,b.copy(v).multiplyScalar((Math.random()<.5?-1:1)*(900+Math.random()*550)),b.y=-(1050+Math.random()*400),_=0,m=12+Math.random()*16}if(_>=0){_+=E;for(let y=0;y<36;y++){const M=Math.max(0,_-y*.028);d[y*3]=f.x+b.x*M,d[y*3+1]=f.y+b.y*M,d[y*3+2]=f.z+b.z*M}u.attributes.position.needsUpdate=!0;const w=f.y+b.y*_,C=Ge.smoothstep(w,0,500);g.material.opacity=n.value*Math.min(1,_*8)*Math.max(0,1-_/2.4)*C,(_>=2.4||w<=0)&&(_=-1,g.material.opacity=0)}}return{update:S,stars:c,clouds:h,meteor:g}}const Kr=[[0,"#091832","#223955","#b3d1ff",.085,.23],[4.7,"#17203e","#323858","#b3d1ff",.1,.24],[5.5,"#33284f","#76518f","#d2a3ee",.23,.4],[6,"#52416d","#a879ba","#e9b6e9",.4,.6],[6.7,"#655c91","#b69bc9","#f3d2d6",.52,.85],[7.8,"#4987b1","#a7c7d5","#fff3d6",.78,1.6],[12,"#428fbd","#a3d1db","#fff3d6",1,2.5],[17,"#63527e","#ee8669","#ffad63",.75,1.7],[17.7,"#603c67","#df6657","#ff754f",.62,1.35],[18.25,"#422c59","#b84454","#f14e48",.42,.85],[19,"#182242","#78405e","#e96357",.18,.35],[21,"#091832","#223955","#b3d1ff",.085,.23],[24,"#091832","#223955","#b3d1ff",.085,.23]];function Rx(s){const e=r=>new N(.64*Math.tan(Ge.degToRad(20))*Math.sin(r),.64*Math.sin(r),Math.cos(r)).normalize(),t=(s-18)/12*Math.PI,n=Math.PI-.22*Math.sin(t),i=e((s-6)/12*Math.PI);return i.y*=.68,i.normalize(),{sun:i,moon:e(n)}}function Cx(s){const e=Ge.smoothstep(s,5.6,6.15)*(1-Ge.smoothstep(s,18.05,18.65)),t=s<12?1-Ge.smoothstep(s,4.7,5.3):Ge.smoothstep(s,18.65,19.2);return{sun:e,moon:t}}function Px(s){return .5+.5*Ge.smoothstep(Math.abs(s-12),0,1)}function Ix(s,e,t){const n={horizonStrength:{value:1},cloudCover:{value:.5},cloudSamples:{value:32},cloudDetail:{value:.5},zenith:{value:new ze},skyHorizon:{value:new ze},sunColor:{value:new ze},sunDirection:{value:new N},daylight:{value:1},sunVisible:{value:1},moonDirection:{value:new N},moonVisible:{value:0},moonTint:{value:0},dawnTint:{value:0}};Object.assign(e.uniforms,n);const i=new Ye(new Vn(24e3,32,20),new jt({uniforms:n,side:Qt,depthWrite:!1,vertexShader:"varying vec3 dir;void main(){dir=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`
      uniform vec3 zenith,skyHorizon,sunColor,sunDirection,moonDirection;uniform float daylight,sunVisible,moonVisible,horizonStrength,moonTint;varying vec3 dir;
      void main(){
        vec3 d=normalize(dir);float h=d.y;
        vec3 c=mix(zenith,skyHorizon,(1.-smoothstep(.015,.6,h))*horizonStrength);
        float angle=acos(clamp(dot(d,sunDirection),-1.,1.));
        float disc=1.-smoothstep(.024,.0285,angle);
        float glow=exp(-angle*12.)*.45;
        float atmosphere=smoothstep(-.04,.02,h);
        c+=sunColor*(disc*2.2+glow)*sunVisible*atmosphere;
        float moonAngle=acos(clamp(dot(d,moonDirection),-1.,1.));
        float moonDisc=1.-smoothstep(.0285,.0315,moonAngle);
        vec3 moonRight=normalize(cross(vec3(0.,1.,0.),moonDirection));
        vec3 moonUp=cross(moonDirection,moonRight);
        vec2 uv=vec2(dot(d,moonRight),dot(d,moonUp))/.03;
        float texture=.92-.17*exp(-length(uv-vec2(-.3,.25))*5.)-.13*exp(-length(uv-vec2(.35,-.2))*6.);
        c+=mix(vec3(.72,.79,.95),vec3(.57,.73,1.),moonTint)*(moonDisc*texture+exp(-moonAngle*23.)*.12)*moonVisible*atmosphere;
        gl_FragColor=vec4(c,1.);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}));i.name="ocean-reflection-sky",s.add(i);const r=new Jf("#ebfcff","#397786",1);s.add(r);const o=new ro("#fff3d6",2);s.add(o);const a=new ro("#82acff",1.5);s.add(a);const l=new ro("#8ab5ff",0);l.position.set(-40,60,60),s.add(l);for(const m of[o,a])m.castShadow=!0,m.shadow.mapSize.set(1024,1024),Object.assign(m.shadow.camera,{left:-14,right:14,top:14,bottom:-14,near:1,far:180}),m.shadow.bias=-2e-4,m.shadow.normalBias=.025,m.shadow.radius=2,s.add(m.target);const c=Ax(s,{uniforms:n,camera:t});let h=-1,u=18,d=!1;function p(m){d!==m&&(d=m,h=-1)}function g(m,f){if(f!==void 0){const A=(m-u+36)%24-12;u=(u+A*(1-Math.exp(-f*3))+24)%24,Math.abs(A)<1e-4&&(u=m)}else u=m;if(m=u,c.update(f??0),m===h)return;h=m;const b=Ge.clamp(m,0,24);let x=0;for(;x<Kr.length-2&&b>Kr[x+1][0];)x++;const v=Kr[x],S=Kr[x+1],E=Ge.smoothstep(b,v[0],S[0]);for(const[A,D]of[["zenith",1],["skyHorizon",2],["sunColor",3]])n[A].value.set(v[D]).lerp(new ze(S[D]),E);n.horizonStrength.value=Px(b);const{sun:w,moon:C}=Rx(b);for(const A of[w,C]){const D=Math.hypot(A.x,A.z),L=t.aspect<.8?-.1:-.28;A.x=-D*Math.sqrt(1-L*L),A.z=D*L,A.normalize()}n.sunDirection.value.copy(w),n.moonDirection.value.copy(C);const y=Cx(b);n.sunVisible.value=y.sun,n.moonVisible.value=y.moon,n.moonTint.value=Math.pow(Math.max(0,Math.cos(b%24*Math.PI/12)),2),n.dawnTint.value=Ge.smoothstep(b,4.7,5.7)*(1-Ge.smoothstep(b,6.6,8)),o.castShadow=y.sun>0,a.castShadow=y.moon>0,n.daylight.value=Ge.lerp(v[4],S[4],E);const M=1-Ge.smoothstep(n.daylight.value,.1,.55);r.color.copy(n.skyHorizon.value).lerp(new ze("#6387c6"),M),r.groundColor.set("#223351"),r.intensity=.35+n.daylight.value*2.2,o.color.copy(n.sunColor.value),o.intensity=Ge.lerp(v[5],S[5],E)*n.sunVisible.value,o.position.copy(n.sunDirection.value).multiplyScalar(100),a.color.set("#9ebfff").lerp(new ze("#77a7ff"),n.moonTint.value),l.color.set("#a8c6ff").lerp(new ze("#83afff"),n.moonTint.value),a.position.copy(n.moonDirection.value),a.position.y=.65,a.position.normalize().multiplyScalar(100),a.intensity=1.7*n.moonVisible.value,l.intensity=.65*n.moonVisible.value}function _(m){for(const[f,b]of[[o,n.sunDirection.value],[a,n.moonDirection.value]]){const x=b.clone();x.y=Math.max(x.y,.22),x.normalize().multiplyScalar(100),f.position.copy(m).add(x),f.target.position.copy(m),f.target.updateMatrixWorld()}}return g(18),{update:g,follow:_,setOverviewCelestials:p,uniforms:n,sunlight:o,moonlight:a,ambient:r}}function Dx(s){let e=0,t=0;const n=new N,i=new Tt,r=new Tt,o=matchMedia("(prefers-reduced-motion: reduce)");return{render(a,l,c,h,u){e+=c;const d=o.matches?0:h;t+=(d-t)*(1-Math.exp(-c*3));const p=t*Math.min(1,15/Math.max(u,1));n.copy(s.position),i.copy(s.quaternion),s.position.y+=Math.sin(e*Math.PI*2/8.5)*.065*p,r.setFromEuler(new Mn(Math.sin(e*Math.PI*2/11)*.002*p,0,Math.sin(e*Math.PI*2/13)*.003*p)),s.quaternion.multiply(r);try{a.render(l,s)}finally{s.position.copy(n),s.quaternion.copy(i),s.updateMatrixWorld()}}}}function Lx(s,e,t){const n=new it;n.name="seagulls",s.add(n);const i=new Lt({color:"#f4f4ed",roughness:.85}),r=new Lt({color:"#333942",roughness:.9,side:wt}),o=new Lt({color:"#dfa842",roughness:.8}),a=new Lt({color:"#e3e6e6",roughness:.9,side:wt}),l=new Vn(.18,10,6),c=new Vn(.135,8,6),h=new St;h.setAttribute("position",new ft([0,0,.13,.48,.035,.13,.83,-.035,-.07,.48,.035,.13,.66,-.02,-.27,.83,-.035,-.07,0,0,.13,.83,-.035,-.07,0,0,-.2],3)),h.computeVertexNormals();const u=new St;u.setAttribute("position",new ft([.7,-.02,-.11,1.04,-.07,-.25,.83,-.035,-.07],3)),u.computeVertexNormals();const d=new wo(.055,.22,5),p=[];for(let v=0;v<9;v++){const S=new it,E=new Ye(l,i);E.scale.set(.85,1,2),S.add(E);const w=new Ye(c,i);w.position.set(0,.14,-.32),S.add(w);const C=new Ye(d,o);C.rotation.x=-Math.PI/2,C.position.set(0,.12,-.49),S.add(C);const y=[];for(const M of[-1,1]){const A=new it;A.position.set(M*.08,.06,0),A.scale.x=M,A.add(new Ye(h,a),new Ye(u,r)),S.add(A),y.push(A)}S.scale.setScalar(1.15+v%3*.18),n.add(S),p.push({root:S,wings:y,phase:v*2.4,radius:28+v*5,height:23+v%4*4,speed:.065+v%3*.012})}let g=0,_=0,m=0;const f=p.slice(0,2),b=new N;function x(v,S=!1){const E=Math.min(v,.2);g+=E,_-=v,m=Ge.damp(m,S?1:0,1.8,E);for(const w of p){const C=g*w.speed+w.phase;if(w.root.position.set(Math.cos(C)*w.radius,w.height+Math.sin(g*.6+w.phase)*1.6,-25+Math.sin(C)*w.radius*.7),m>.001&&f.includes(w)){const A=f.indexOf(w),D=A===1?-1:1,L=(g*(1.8+A*.4)+A*47)%220,z=65+A*12+Math.sin(g*.11+A)*9,O=23+A*5+Math.sin(g*.35+A)*1.5,F=D*(L-110)-25;w.root.position.lerp(new N(z,O,F),m),w.root.rotation.y=D>0?Math.PI:0}else w.root.rotation.y=Math.atan2(Math.sin(C),-Math.cos(C)*.7);w.root.rotation.z=Math.sin(C)*.12;const M=Math.sin(g*.7+w.phase)>.15?Math.sin(g*5.5+w.phase)*.48:.1;w.wings[0].rotation.z=-M,w.wings[1].rotation.z=M}_<=0&&e&&t&&(e.updateMatrixWorld(),p.some(({root:C})=>(b.copy(C.position).project(e),b.z>-1&&b.z<1&&Math.abs(b.x)<1&&Math.abs(b.y)<1))&&t.seagull()&&(_=12+Math.random()*10))}return x(0),{update:x,flock:n}}function Nx(s){let e=null,t=3;const n=45;function i(){}function r(){const l=window.AudioContext||window.webkitAudioContext;l&&(e||(e=new l),e.state==="suspended"&&e.resume().then(i).catch(()=>{}))}addEventListener("pointerdown",r),addEventListener("keydown",l=>{l.repeat||r()});function o(){const l=e.currentTime,c=e.createGain();c.gain.setValueAtTime(0,l),c.gain.linearRampToValueAtTime(.17,l+.4),c.gain.setValueAtTime(.17,l+2.2),c.gain.exponentialRampToValueAtTime(1e-4,l+3.5);const h=e.createBiquadFilter();h.type="lowpass",h.frequency.value=750,c.connect(h),h.connect(e.destination);for(const[u,d]of[[82.4,.65],[110,.45],[164.8,.28],[220,.14]]){const p=e.createOscillator(),g=e.createGain();p.type="sawtooth",p.frequency.setValueAtTime(u*.985,l),p.frequency.linearRampToValueAtTime(u,l+.5),g.gain.value=d,p.connect(g),g.connect(c),p.start(l),p.stop(l+3.6),p.onended=()=>{p.disconnect(),g.disconnect()}}setTimeout(()=>{c.disconnect(),h.disconnect()},3800)}function a(l){e?.state!=="running"||document.hidden||(t-=Math.min(l,1),t<=0&&(o(),t=n))}return{update:a}}function Ux(s,e,{waterNoise:t,isAudible:n=()=>!0}={}){const i=s.createBuffer(1,Math.ceil(s.sampleRate*3),s.sampleRate),r=i.getChannelData(0);for(let v=0;v<r.length;v++)r[v]=Math.random()*2-1;const o=new Set,a=new N,l=new N,c=new N,h=new Tt,u=(v,S,E)=>Math.max(S,Math.min(E,v)),d=(v,S)=>v+Math.random()*(S-v);function p(v,S,E=!1){if(v.positionX)for(const[w,C]of[["positionX",S.x],["positionY",S.y],["positionZ",S.z]])E?v[w].setTargetAtTime(C,s.currentTime,.025):v[w].setValueAtTime(C,s.currentTime);else v.setPosition(S.x,S.y,S.z)}function g(v){if(!v)return;v.getWorldPosition(a),v.getWorldDirection(l),c.set(0,1,0).applyQuaternion(v.getWorldQuaternion(h));const S=s.listener;if(p(S,a),S.forwardX)for(const[E,w]of[["forwardX",l.x],["forwardY",l.y],["forwardZ",l.z],["upX",c.x],["upY",c.y],["upZ",c.z]])S[E].setValueAtTime(w,s.currentTime);else S.setOrientation(l.x,l.y,l.z,c.x,c.y,c.z)}function _(v){if(o.delete(v))for(const S of v.nodes)S.disconnect()}function m(v){for(const S of v.sources)try{S.stop()}catch{}_(v)}function f(v,{position:S,camera:E,visible:w=!0,speed:C=2}={}){if(!n()||!w||!S||![S.x,S.y,S.z].every(Number.isFinite)||!E||(g(E),a.distanceToSquared(S)>500*500)||!["Whale_Splash","Whale_Blow","Whale_Dive","Whale_Call"].includes(v))return!1;o.size>=4&&m(o.values().next().value);const y=s.createPanner(),M=s.createGain();y.panningModel="HRTF",y.distanceModel="inverse",y.refDistance=70,y.maxDistance=500,y.rolloffFactor=1.35,p(y,S),M.connect(y),y.connect(e);const A={name:v,panner:y,gain:M,sources:[],nodes:[y,M],remaining:0};o.add(A);const D=s.currentTime,L=d(.94,1.06),z=v==="Whale_Splash"?u(.65+Math.abs(C)*.14,.7,1.35):1;function O(F,W,V,Q,se,he,Me=0,j=.025){const te=s.createBufferSource(),ue=s.createBiquadFilter(),B=s.createGain();te.buffer=F,te.playbackRate.value=d(.965,1.035),ue.type=W,ue.Q.value=.55;const X=D+Me;ue.frequency.setValueAtTime(V,X),ue.frequency.exponentialRampToValueAtTime(Q,X+he);const pe=se*z*L;B.gain.setValueAtTime(1e-4,X),B.gain.linearRampToValueAtTime(pe,X+j),B.gain.exponentialRampToValueAtTime(pe*.38,X+Math.min(.2,he*.4)),B.gain.exponentialRampToValueAtTime(1e-4,X+he),te.connect(ue),ue.connect(B),B.connect(M),A.nodes.push(te,ue,B),A.sources.push(te),A.remaining++,te.onended=()=>{--A.remaining===0&&_(A)},te.start(X,d(0,Math.max(0,F.duration-he*1.04-.05))),te.stop(X+he+.03)}if(v==="Whale_Call")for(let F=0;F<3;F++){const W=s.createOscillator(),V=s.createBiquadFilter(),Q=s.createGain(),se=D+F*.23,he=2.5+F*.3,Me=(F===0?610:F===1?845:1230)*d(.94,1.06);W.type="sine",W.frequency.setValueAtTime(Me,se),W.frequency.exponentialRampToValueAtTime(Me*(F===1?.69:1.28),se+he*.54),W.frequency.exponentialRampToValueAtTime(Me*.77,se+he),V.type="lowpass",V.frequency.value=2400,Q.gain.setValueAtTime(1e-4,se),Q.gain.exponentialRampToValueAtTime(F===0?.27:.12,se+.28),Q.gain.exponentialRampToValueAtTime(1e-4,se+he),W.connect(V),V.connect(Q),Q.connect(M),A.nodes.push(W,V,Q),A.sources.push(W),A.remaining++,W.onended=()=>{--A.remaining===0&&_(A)},W.start(se),W.stop(se+he+.02)}else v==="Whale_Splash"?(O(t??i,"lowpass",190,80,.68,.95),O(i,"bandpass",1100,420,.37,1.25,.02),O(i,"highpass",3400,2100,.09,1.55,.06,.045)):v==="Whale_Blow"?(O(i,"bandpass",2700,950,.48,1.55,0,.016),O(i,"highpass",1500,950,.18,.32,0,.012),O(t??i,"bandpass",680,310,.24,1.05,.08,.055)):(O(t??i,"lowpass",420,150,.35,1.2,0,.08),O(i,"bandpass",850,320,.17,1.4,.04,.1));return!0}function b({camera:v,position:S,visible:E=!0}={}){if(o.size){if(g(v),!n()){x();return}for(const w of o)w.name==="Whale_Blow"&&S&&p(w.panner,S,!0),w.gain.gain.setTargetAtTime(E?1:0,s.currentTime,.08)}}function x(){for(const v of[...o])m(v)}return{play:f,update:b,stopAll:x,get activeCount(){return o.size}}}function Fx(s){let e,t,n,i,r,o,a=!0,l=1,c=0,h=0,u=null;const d=new Set,p=y=>440*2**((y-69)/12),g=[[60,64,67,71,74],[57,60,64,67,71],[50,53,57,60,64],[55,59,62,65,69]],_=[0,2,4,3,1,2,0,4,3,2,4,1,0,3,2,1];function m(){if(e)return;const y=window.AudioContext||window.webkitAudioContext;if(!y)return;e=new y,t=e.createGain(),t.gain.value=0,t.connect(e.destination),n=e.createGain(),n.gain.value=.35*l,n.connect(e.destination),i=e.createBuffer(1,e.sampleRate*8,e.sampleRate);const M=i.getChannelData(0);let A=0;for(let F=0;F<M.length;F++)A=(A+(Math.random()*2-1)*.025)/1.025,M[F]=A*4;o=Ux(e,n,{waterNoise:i,isAudible:()=>a&&l>0&&e.state==="running"&&!document.hidden}),r=e.createBufferSource(),r.buffer=i,r.loop=!0;const D=e.createBiquadFilter();D.type="lowpass",D.frequency.value=1400;const L=e.createGain();L.gain.value=.095;const z=e.createOscillator(),O=e.createGain();z.frequency.value=.09,O.gain.value=.06,z.connect(O),O.connect(L.gain),r.connect(D),D.connect(L),L.connect(t),r.start(),z.start(),a&&(c=e.currentTime+.02,f())}function f(){u===null&&(E(),u=setInterval(E,200))}function b(){m(),e&&(e.state==="suspended"?e.resume().then(()=>{a&&E()}).catch(()=>{}):a&&E())}addEventListener("pointerdown",b),addEventListener("keydown",y=>{y.repeat||b()});function x(y,M,A,D,L,z="sine",O=y){if(!e)return;const F=e.createOscillator(),W=e.createGain();F.type=z,F.frequency.setValueAtTime(y,M),F.frequency.exponentialRampToValueAtTime(O,M+A*.8),W.gain.setValueAtTime(1e-4,M),W.gain.exponentialRampToValueAtTime(D,M+.025),W.gain.exponentialRampToValueAtTime(1e-4,M+A),F.connect(W),W.connect(L),F.start(M),F.stop(M+A+.02),L===t&&d.add(F),F.onended=()=>{d.delete(F),F.disconnect(),W.disconnect()}}function v(y,M,A,D,L){const z=e.createBufferSource(),O=e.createBiquadFilter(),F=e.createGain();z.buffer=i,O.type="highpass",O.frequency.value=L,F.gain.setValueAtTime(A,y),F.gain.exponentialRampToValueAtTime(1e-4,y+M),z.connect(O),O.connect(F),F.connect(D),z.start(y),z.stop(y+M),D===t&&d.add(z),z.onended=()=>{d.delete(z),z.disconnect(),O.disconnect(),F.disconnect()}}function S(y,M){const A=g[Math.floor(M/16)%4],D=M%16;if(D%2===0&&x(p(A[0]-24+[0,7,12,7][Math.floor(D/2)%4]),y,.48,.25,t,"triangle"),[0,5,10,14].includes(D))for(const L of A.slice(1))x(p(L),y,1.25,.075,t),x(p(L)*2,y,.38,.015,t);D%3!==1&&x(p(A[_[M%16]]+12),y,.38,.085,t),v(y,.12,.065,t,3500)}s.addEventListener("click",()=>{if(b(),!!e){if(a=!a,a)h=0,c=e.currentTime+.02,f(),E();else{clearInterval(u),u=null;for(const y of d)try{y.stop()}catch{}o.stopAll()}t.gain.setTargetAtTime(a?.38*l:0,e.currentTime,.08),n.gain.setTargetAtTime(a?.35*l:0,e.currentTime,.08),s.setAttribute("aria-pressed",String(a)),s.setAttribute("aria-label",a?"음악 켜짐, 눌러서 끄기":"음악 꺼짐, 눌러서 켜기"),s.title=a?"음악 끄기":"음악 켜기"}});function E(){if(e){if(document.hidden){t.gain.setTargetAtTime(0,e.currentTime,.1),c=e.currentTime+.02;return}if(!(!a||e.state!=="running"))for(t.gain.setTargetAtTime(.38*l,e.currentTime,.08),c<e.currentTime&&(c=e.currentTime+.02);c<e.currentTime+1.5;)S(c,h),c+=(h++%2===0?2:1)*(60/84/3)}}function w(y){if(!a||l<=0||e?.state!=="running"||document.hidden)return!1;const M=e.currentTime;if(y==="seagull")for(let A=0;A<3;A++)x(1250+A*170,M+A*.22,.19,.15,n,"triangle",820+A*80);if(y==="dolphin")for(let A=0;A<4;A++)x(1700+A*350,M+A*.12,.12,.08,n,"sine",3300+A*260);return y==="whale"&&(x(95,M,2.8,.3,n,"sine",160),x(190,M+.2,2.5,.08,n,"sine",130),v(M,.65,.24,n,250)),y==="whaleSpout"&&(v(M,1.4,.35,n,1600),v(M+.12,.95,.15,n,650)),y==="splash"&&v(M,.8,.4,n,650),!0}document.addEventListener("visibilitychange",()=>{e&&(document.hidden?(t.gain.setTargetAtTime(0,e.currentTime,.1),n.gain.setTargetAtTime(0,e.currentTime,.1),o.stopAll()):a&&(n.gain.setTargetAtTime(.35*l,e.currentTime,.08),b()))});function C(y){Number.isFinite(y)&&(l=Math.max(0,Math.min(1,y)),e&&(t.gain.setTargetAtTime(a?.38*l:0,e.currentTime,.08),n.gain.setTargetAtTime(a?.35*l:0,e.currentTime,.08),l||o.stopAll()))}return{update:E,setVolume:C,seagull:()=>w("seagull"),dolphin:()=>w("dolphin"),whale:()=>w("whale"),whaleSpout:()=>w("whaleSpout"),splash:()=>w("splash"),whaleSplash:y=>o?.play("Whale_Splash",y)??!1,whaleBlow:y=>o?.play("Whale_Blow",y)??!1,whaleDive:y=>o?.play("Whale_Dive",y)??!1,whaleCall:y=>o?.play("Whale_Call",y)??!1,updateWhale:y=>o?.update(y)}}function Ox(s,e){const t=s.skeleton.bones,n=s.geometry.attributes.position,i=s.geometry.attributes.skinIndex,r=s.geometry.attributes.skinWeight;function o(A,D){const L=t.find(F=>F.name===A);if(!L)return null;const z=t.indexOf(L);let O=-1;for(let F=0;F<n.count;F++){let W=0;for(let V=0;V<4;V++)i.getComponent(F,V)===z&&(W+=r.getComponent(F,V));W<.7||(O<0||D*n.getZ(F)>D*n.getZ(O))&&(O=F)}return O<0?null:{bone:L,index:O}}const a=o("Tail_03",-1),l=o("Tail_03",1),c=o("Fin_L",-1),h=o("Fin_R",1),u=new N,d=new N,p=new N,g=new N,_=new N,m=new N,f=new N,b=new N,x=new N(0,1,0),v=new Tt,S=new Tt,E=new Tt,w=new Tt;function C(A,D){return s.getVertexPosition(A.index,D),s.localToWorld(D)}function y(A){A.parent.getWorldQuaternion(S),E.copy(S).invert().multiply(v).multiply(S),A.quaternion.premultiply(E),A.updateWorldMatrix(!1,!0),s.skeleton.update()}function M(A,D){A.bone.getWorldPosition(m),C(A,f).sub(m);const L=f.dot(_),z=f.dot(g),O=Math.sqrt(Math.max(0,f.lengthSq()-L*L)),F=Ge.clamp(D-m.y,-O,O);b.copy(_).multiplyScalar(L).addScaledVector(g,Math.sign(z)*Math.sqrt(Math.max(0,O*O-F*F))).addScaledVector(x,F),v.setFromUnitVectors(f.normalize(),b.normalize()),y(A.bone)}return()=>{if(e.updateMatrixWorld(!0),s.skeleton.update(),e.getWorldQuaternion(w),g.set(-1,0,0).applyQuaternion(w),g.y=0,g.normalize(),_.crossVectors(x,g).normalize(),a&&l)for(let A=0;A<6&&(C(a,u),C(l,d),p.subVectors(d,u).normalize(),!(p.dot(g)>1-1e-10));A++)v.setFromUnitVectors(p,g),y(a.bone);if(c&&h){C(c,u),C(h,d);const A=(u.y+d.y)/2;M(c,A),M(h,A)}}}function zx({load:s=t=>new _o().loadAsync(t),url:e="./models/whale_animated.glb"}={}){const t=new it;t.name="whale",t.visible=!1,t.rotation.order="YXZ";const n=new it;n.name="whale-model",n.rotation.y=-Math.PI/2,t.add(n);const i=new it;i.name="whale-shallow-silhouette",i.visible=!1;const r=[],o=[],a={root:t,silhouette:i,ready:!1,active:!1,mixer:null,actions:{},current:null,contacts:[],blowhole:null},l=new N,c=new Gn;return a.loadPromise=s(e).then(h=>{n.removeFromParent(),n.add(h.scene),n.updateMatrixWorld(!0),c.setFromObject(n);const u=100/(c.max.z-c.min.z);n.scale.setScalar(u),n.updateMatrixWorld(!0),c.setFromObject(n),n.position.set(-(c.min.x+c.max.x)/2,11.5-c.max.y,-(c.min.z+c.max.z)/2),t.add(n),n.visible=!1,t.updateMatrixWorld(!0);const d=[];h.scene.traverse(m=>{if(!m.isMesh)return;d.push(m),m.castShadow=!1,m.receiveShadow=!1,m.frustumCulled=!1;const f=new St,b=new Float32Array(m.geometry.attributes.position.count*3),x=new Float32Array(m.geometry.attributes.position.count);f.setAttribute("position",new Mt(b,3).setUsage(ii)),f.setAttribute("aAlpha",new Mt(x,1).setUsage(ii)),f.setIndex(m.geometry.index);const v=new jt({transparent:!0,depthWrite:!1,side:wt,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1,uniforms:{tint:{value:new ze("#245263")}},vertexShader:"attribute float aAlpha;varying float alpha;void main(){alpha=aAlpha;gl_Position=projectionMatrix*viewMatrix*vec4(position,1.);}",fragmentShader:`uniform vec3 tint;varying float alpha;void main(){if(alpha<.002)discard;gl_FragColor=vec4(tint,alpha);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`}),S=new Ye(f,v);S.name="whale-local-water-projection",S.frustumCulled=!1,S.renderOrder=2,i.add(S),r.push({mesh:m,geometry:f,positions:b,alpha:x,material:v})});const p=new N(-.65,.296,0);let g=1/0;for(const m of d){const f=m.geometry.attributes.position;for(let b=0;b<f.count;b++){l.fromBufferAttribute(f,b);const x=l.distanceToSquared(p);x<g&&(g=x,a.blowhole={mesh:m,index:b})}for(const b of[-.82,-.65,-.45,-.2,.05,.3]){let x=null,v=1/0;for(let S=0;S<f.count;S++){if(l.fromBufferAttribute(f,S),l.y<.03||Math.abs(l.z)>.2)continue;const E=(l.x-b)**2+Math.abs(l.z)*.04-l.y*.015;E<v&&(v=E,x={mesh:m,index:S})}x&&a.contacts.push(x)}}const _=h.animations??[];if(_.length){a.mixer=new vp(h.scene);for(const[m,f]of[["swim",/swim/i],["idle",/idle/i]]){const b=_.find(x=>x.name===`Whale_${m==="swim"?"Swim":"Idle"}`)||_.find(x=>f.test(x.name));b&&(a.actions[m]=a.mixer.clipAction(b).setLoop(ju,1/0))}}for(const m of d)m.isSkinnedMesh&&o.push(Ox(m,t));return a.ready=!0,t.userData.loadingState="ready",t.userData.animationClips=_.map(m=>m.name),t.userData.animationDurations=Object.fromEntries(_.map(m=>[m.name,m.duration])),a}).catch(h=>(t.userData.loadingState="error",console.error("[Sea] Whale GLB loading failed",h),a)),t.userData.loadingState="loading",a.startEncounter=()=>{a.active=a.ready,n.visible=a.active,a.current=null,a.mixer?.stopAllAction()},a.update=(h,u,d)=>{if(!a.active)return;const p=a.actions[u?"idle":"swim"]??a.actions.swim??a.actions.idle;p&&p!==a.current&&(p.reset().setEffectiveWeight(1).play(),a.current&&p.crossFadeFrom(a.current,.65,!1),a.current=p),p&&(p.timeScale=u?.95:Ge.clamp(d/(24/11),.85,1.15)),a.mixer?.update(h);for(const g of o)g()},a.readAttachment=(h,u)=>h?(h.mesh.getVertexPosition(h.index,u),h.mesh.localToWorld(u),!0):!1,a.updateWaterSilhouette=(h,{visible:u=!0,fade:d=1,daylight:p=1}={})=>{if(i.visible=a.active&&t.visible&&u&&d>.001,!!i.visible)for(const g of r){g.material.uniforms.tint.value.set("#245263").multiplyScalar(.35+.65*p);for(let _=0;_<g.alpha.length;_++){g.mesh.getVertexPosition(_,l),l.applyMatrix4(g.mesh.matrixWorld);const m=h(l.x,l.z),f=m-l.y,b=1-Ge.smoothstep(f,2,9);g.alpha[_]=f>0?Math.min(1,f/1.2)*b*.3*d:0;const x=_*3;g.positions[x]=l.x,g.positions[x+1]=m+.48,g.positions[x+2]=l.z}g.geometry.attributes.position.needsUpdate=!0,g.geometry.attributes.aAlpha.needsUpdate=!0}},a}function Bx(s,{heightAt:e,compact:t=!1,daylight:n=()=>1,viewportHeight:i=()=>globalThis.innerHeight??720}){const r=t?192:480,o=t?5:10,a=t?24:40,l=new Float32Array(r*3),c=new Float32Array(r),h=new Float32Array(r),u=new Float32Array(r*3),d=new Float32Array(r*3),p=new Float32Array(r),g=new Float32Array(r),_=new Uint8Array(r),m=new St;for(const[Q,se,he]of[["position",l,3],["aSize",c,1],["aAlpha",h,1]])m.setAttribute(Q,new Mt(se,he).setUsage(ii));const f=new jt({transparent:!0,depthWrite:!1,uniforms:{viewport:{value:720},light:{value:1}},vertexShader:"attribute float aSize,aAlpha;uniform float viewport;varying float alpha;void main(){vec4 p=modelViewMatrix*vec4(position,1.);gl_Position=projectionMatrix*p;gl_PointSize=clamp(aSize*viewport*projectionMatrix[1][1]/max(-p.z,1.),2.,80.);alpha=aAlpha;}",fragmentShader:`uniform float light;varying float alpha;
      void main(){float r=length(gl_PointCoord-.5)*2.;float soft=1.-smoothstep(.12,1.,r);
        vec3 c=mix(vec3(.12,.18,.25),vec3(.72,.83,.87),light);gl_FragColor=vec4(c,alpha*soft);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}),b=new Is(m,f);b.name="whale-water-particles",b.frustumCulled=!1,b.visible=!1,s.add(b);const x=[];for(let Q=0;Q<o;Q++){const se=new St,he=new Float32Array((a+1)*2*3),Me=[];for(let ue=0;ue<a;ue++){const B=ue*2;Me.push(B,B+1,B+2,B+1,B+3,B+2)}se.setAttribute("position",new Mt(he,3).setUsage(ii)),se.setIndex(Me);const j=new Wt({color:10932956,transparent:!0,opacity:0,depthWrite:!1,side:wt,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),te=new Ye(se,j);te.name="whale-surface-ripple",te.frustumCulled=!1,te.visible=!1,te.renderOrder=5,s.add(te),x.push({mesh:te,vertices:he,born:-100,life:0,x:0,z:0,initial:0,speed:0,heading:0,elongation:1.15})}let v=0,S=0,E=0,w=-100,C=0;const y=new N,M=new N,A=new N(0,1,0),D=(Q,se)=>Q+Math.random()*(se-Q);function L(Q,se,he){const Me=S++%r,j=Me*3;u[j]=Q.x,u[j+1]=Q.y,u[j+2]=Q.z,d[j]=se.x,d[j+1]=se.y,d[j+2]=se.z,p[Me]=v,_[Me]=he,g[Me]=he===2?D(1.2,2.4):D(.7,1.6),c[Me]=he===2?D(3.4,6):D(.85,1.65),h[Me]=0}function z(Q,se=1,he=0,Me=!1){const j=x[E++%o];j.x=Q.x,j.z=Q.z,j.born=v,j.life=4.8,j.initial=Me?13:se>1?3:1.8,j.speed=(Me?2:3.5)*se,j.heading=he,j.elongation=Me?2.1:1.15}const O=new N;function F(Q,se=1){const he=Math.round((t?42:105)*se);for(let Me=0;Me<he;Me++){const j=D(0,Math.PI*2),te=D(2,10)*se;O.set(Math.cos(j)*te,D(4,13)*se,Math.sin(j)*te*D(.6,1.2)),L(Q,O,Me%4===0?2:1)}z(Q,1.8*se),z(Q,.9*se,.6)}function W(){w=v,C=0}function V(Q,se,he,Me){v+=Q;const j=v-w;if(j>=0&&j<1.35&&he)if(C+=Q*(t?220:460)*Math.max(.15,1-j/1.45),se)for(y.copy(he),M.copy(Me??A).normalize();C>=1;){C--;const te=D(29,44)*(1-j*.25);O.copy(M).multiplyScalar(te),O.x+=D(-7,7),O.z+=D(-7,7),L(y,O,Math.random()<.8?2:1)}else C=0;if(b.visible=se,se){let te=0;for(let ue=0;ue<r;ue++){const B=v-p[ue];if(!g[ue]||B>g[ue]){h[ue]=0;continue}te++;const X=ue*3,pe=_[ue]===2,K=pe?1.05:.25,Z=(1-Math.exp(-K*B))/K;l[X]=u[X]+d[X]*Z+(pe?B*B*.9:0),l[X+1]=u[X+1]+d[X+1]*Z-(pe?2.4:4.9)*B*B,l[X+2]=u[X+2]+d[X+2]*Z;const J=1-B/g[ue];h[ue]=(pe?.48:.76)*Math.min(1,B*18)*J*J,l[X+1]<e(l[X],l[X+2])&&(h[ue]=0)}b.visible=te>0,m.attributes.position.needsUpdate=!0,m.attributes.aAlpha.needsUpdate=!0,m.attributes.aSize.needsUpdate=!0,f.uniforms.viewport.value=i(),f.uniforms.light.value=Ge.clamp(n(),0,1)}for(const te of x){const ue=v-te.born;if(te.mesh.visible=se&&ue<te.life,!te.mesh.visible)continue;const B=te.initial+te.speed*ue,X=1-ue/te.life;te.mesh.material.opacity=.68*Math.pow(X,1.15),te.mesh.material.color.setRGB(.18+.48*n(),.28+.5*n(),.35+.47*n());for(let pe=0;pe<=a;pe++){const K=pe/a*Math.PI*2,Z=1+.06*Math.sin(K*3+te.heading),J=Math.cos(te.heading),le=Math.sin(te.heading);for(let P=0;P<2;P++){const oe=(B+P*(1.65+ue*.28))*Z,ce=Math.cos(K)*oe,Se=Math.sin(K)*oe*te.elongation,re=te.x+J*ce+le*Se,Ie=te.z-le*ce+J*Se,de=(pe*2+P)*3;te.vertices[de]=re,te.vertices[de+1]=e(re,Ie)+.72,te.vertices[de+2]=Ie}}te.mesh.geometry.attributes.position.needsUpdate=!0}}return{ripple:z,splash:F,beginBreath:W,update:V,stats:{capacity:r,ringCount:o},points:b}}function kx(s,e,t,{ocean:n,compact:i=typeof matchMedia=="function"&&matchMedia("(max-width: 600px), (pointer: coarse)").matches,loadWhale:r,viewportHeight:o}={}){const a=new it;a.name="marine-life",s.add(a);const l=new Lt({color:"#657d89",roughness:.45}),c=new Lt({color:"#bacbd1",roughness:.65}),h=new Vn(1,14,10);function u(oe,ce,Se,re,Ie,de,ve,He){const We=new Ye(h,ce);return We.position.set(Se,re,Ie),We.scale.set(de,ve,He),oe.add(We),We}function d(){const oe=new it;oe.name="dolphin",u(oe,l,0,0,0,.65,.6,2),u(oe,c,0,-.24,0,.53,.32,1.8),u(oe,l,0,.03,-2,.22,.18,.75);const ce=new Ye(new wo(.4,.85,3),l);ce.position.set(0,.6,.3),ce.rotation.y=Math.PI/2,oe.add(ce);const Se=new it;Se.position.z=1.95,oe.add(Se);for(const re of[-1,1]){const Ie=u(Se,l,re*.55,0,0,.7,.1,.32);Ie.rotation.y=re*.25;const de=u(oe,l,re*.62,-.25,-.7,.7,.1,.24);de.rotation.z=re*-.35}return oe.visible=!1,a.add(oe),{root:oe,tail:Se}}const p=d(),g=zx(r?{load:r}:void 0);a.add(g.root,g.silhouette);const _=(oe,ce)=>n?.heightAt(oe,ce)??0,m=Bx(a,{heightAt:_,compact:i,daylight:()=>n?.uniforms.daylight?.value??1,viewportHeight:o});a.userData.whale=g,a.userData.whaleEffectBudget=m.stats;const f=new St,b=new Float32Array(180);f.setAttribute("position",new Mt(b,3).setUsage(ii));const x=new Is(f,new gr({color:"#d4f6ff",size:.3,transparent:!0,opacity:.8,depthWrite:!1}));x.visible=!1,x.frustumCulled=!1,a.add(x);const v=new N,S=new N,E=new N,w=new N,C=new N,y=new N,M=new N,A=new N,D=new Dn(new N,95),L=new So,z=new Ze;let O=12,F=-1,W=null,V=0,Q=!1,se=!1,he=!1,Me=!1,j=!1,te=-1/0,ue=0,B=!1;const X=[],pe=[];let K=0;function Z(oe=!1){W=oe||V++%3===2?g:p,W.root.visible=!1,F=0,Q=!1,se=!1,he=!1,Me=!1,j=!1,te=-1/0,ue=0,X.length=0,pe.length=0,K=0,W===g&&g.startEncounter(),e.getWorldDirection(S),S.y=0,S.normalize(),E.crossVectors(S,dt.DEFAULT_UP).normalize();const ce=Math.random()<.5?-1:1,Se=W===g?i?-35+ce*8:ce*30-15:ce*26;v.copy(e.position).addScaledVector(S,W===g?125:65).addScaledVector(E,Se),v.y=0;const re=W===g?85:20;Math.abs(v.x)<re&&Math.abs(v.z)<(W===g?120:55)&&(v.x=ce*(re+5)),W.root.rotation.y=Math.atan2(-E.x,-E.z),W!==g&&t.dolphin(),a.userData.lastEncounter=W===g?"whale":"dolphin"}function J(oe,ce,Se){const re=F<2?22:F<11.5?0:-12;g.update(oe,!1,Math.max(2.2,2.2)),g.root.updateMatrixWorld(!0),g.root.traverse(T=>{T.isSkinnedMesh&&T.skeleton.update()}),e.updateMatrixWorld(),z.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),L.setFromProjectionMatrix(z),D.center.copy(g.root.position),D.center.y+=15,B=L.intersectsSphere(D),g.updateWaterSilhouette(_,{visible:B,fade:Ge.smoothstep(ce,0,.05)*(1-Ge.smoothstep(ce,.95,1)),daylight:n?.uniforms.daylight?.value??1});const de=T=>(y.copy(T).lerp(g.root.position,.42),y.y=_(y.x,y.z)+.12,y);let ve=-1/0;for(let T=0;T<g.contacts.length;T++){const U=g.contacts[T];g.readAttachment(U,M);const H=M.y-_(M.x,M.z);H>ve&&(ve=H,w.copy(M));const ee=X[T],G=pe[T]??0;ee<0&&H>=0&&!(G&1)?(pe[T]=G|1,B&&m.ripple(de(M),1.45,W.root.rotation.y)):ee>=0&&H<0&&re<0&&!(G&2)&&(pe[T]=G|2,B&&m.ripple(de(M),1.5,W.root.rotation.y)),X[T]=H}he&&!Me&&F>=K&&ve>0&&(K=F+1,B&&m.ripple(de(w),1.25,W.root.rotation.y,!0)),ve>-3.5&&ve<0&&re>0&&F>=ue&&(ue=F+.7,B&&m.ripple(de(w),1.15,W.root.rotation.y)),!he&&te<0&&ve>=0&&(he=!0,Number.isFinite(te)&&w.lerp(C,ve/(ve-te)),w.y=_(w.x,w.z)+.08,B&&(m.splash(de(w)),t.whaleSplash?.({position:w,camera:e,visible:B,speed:re}))),he&&!Me&&re<0&&te>=0&&ve<0&&(Me=!0,w.y=_(w.x,w.z)+.08,B&&(m.splash(de(w),.5),t.whaleDive?.({position:w,camera:e,visible:B,speed:re}))),te=ve,C.copy(w);const He=F-2,I=g.readAttachment(g.blowhole,M)&&M.y>_(M.x,M.z)+.1;!se&&He>=0&&He<2.2&&I&&(se=!0,B&&(m.beginBreath(),t.whaleBlow?.({position:M,camera:e,visible:B}),j||(j=!0,t.whaleCall?.({position:M,camera:e,visible:B})))),A.set(0,1,0).applyQuaternion(g.root.quaternion),m.update(oe,B,I?M:null,A),t.updateWhale?.({position:M,camera:e,visible:B}),a.userData.whaleSurface={didBreak:he,didDive:Me,didSpout:se}}function le(oe){if(globalThis.document?.hidden)return;if(oe=Math.min(oe,.25),F<0){m.update(oe,B,null,null),O-=oe,O<=0&&Z();return}F+=oe;const ce=W===g,Se=ce?18:4.5,re=F/Se,Ie=ce?Ge.clamp((F-2)/12,0,1):re;W.root.position.copy(v).addScaledVector(E,(Ie-.5)*(ce?35:20));const de=Math.sin(Math.PI*Math.min(1,re));if(ce){const ve=Ge.smoothstep(F,0,2),He=Ge.smoothstep(F,11.5,13.6),We=Ge.smoothstep(F,15.6,18),I=_(W.root.position.x,W.root.position.z);W.root.position.y=I-17+ve*19-He*16-We*36;const T=1-Ge.smoothstep(F,1.1,2.8),U=Ge.smoothstep(F,11.5,13.6);W.root.rotation.x=.18*T-.65*U}else W.root.position.y=-1.4+de*5.5,W.root.rotation.x=Math.cos(re*Math.PI)*-.65;if(W.root.visible=!ce||g.active,ce&&g.active)J(oe,re);else if(m.update(oe,B,null,null),!ce&&(W.tail.rotation.x=Math.sin(F*6)*.22,re>.72&&!Q&&(Q=!0,t.splash(),x.visible=!0),x.visible)){const ve=Math.max(0,F-Se*.72);x.position.copy(W.root.position),x.position.y=.1;for(let He=0;He<60;He++){const We=He*2.39996,I=1+He%7*.35;b[He*3]=Math.cos(We)*I*ve,b[He*3+1]=Math.max(0,(2+He%4)*ve-4*ve*ve),b[He*3+2]=Math.sin(We)*I*ve}x.geometry.attributes.position.needsUpdate=!0,x.material.opacity=Math.max(0,.8-ve*.6)}re>=1&&(W.root.visible=!1,g.silhouette.visible=!1,x.visible=!1,F=-1,O=24+Math.random()*22)}function P(){return W===g&&F>=0?!1:(W?.root&&(W.root.visible=!1),F=-1,O=0,Z(!0),!0)}return{update:le,group:a,summonWhale:P}}function Hx(s){const e=new it;e.name="night-jellyfish-schools",s.add(e);const t=48,n=14,i=new Wi(3.2,3.2),r=new Float32Array(t),o=new Float32Array(t),a=new Float32Array(t),l=new Float32Array(t),c=new Float32Array(t),h=v=>{const S=Math.sin(v*127.1+19.17)*43758.5453;return S-Math.floor(S)};for(let v=0;v<t;v++)r[v]=h(v+5)*Math.PI*2,a[v]=.58+h(v+31)*.58,l[v]=.55+h(v+71)*1.35,c[v]=h(v+109)*Math.PI*2;i.setAttribute("aPhase",new Oi(r,1)),i.setAttribute("aRate",new Oi(l,1)),i.setAttribute("aFlicker",new Oi(c,1));const u=new Oi(o,1);u.setUsage(ii),i.setAttribute("aFade",u);const d=new jt({transparent:!0,depthWrite:!1,depthTest:!0,side:wt,blending:ni,uniforms:{uTime:{value:0}},vertexShader:`attribute float aPhase;attribute float aFade;
      attribute float aRate;attribute float aFlicker;
      varying vec2 vUv;varying float vFade;varying float vPhase;
      varying float vRate;varying float vFlicker;
      void main(){
        vUv=uv;vFade=aFade;vPhase=aPhase;
        vRate=aRate;vFlicker=aFlicker;
        vec4 p=instanceMatrix*vec4(position,1.0);
        gl_Position=projectionMatrix*modelViewMatrix*p;
      }`,fragmentShader:`precision mediump float;
      uniform float uTime;
      varying vec2 vUv;varying float vFade;varying float vPhase;
      varying float vRate;varying float vFlicker;
      void main(){
        vec2 p=(vUv-.5)*2.;
        float r=length(p);
        float bell=1.-smoothstep(.29,.49,length(vec2(p.x,p.y*1.13)));
        float rim=exp(-pow((length(vec2(p.x,p.y*1.13))-.34)*11.,2.));
        float threads=0.;
        for(int j=0;j<5;j++){
          float k=float(j)-2.;
          float bend=.033*sin(uTime*1.5+vPhase+k*1.4+p.y*9.);
          float line=1.-smoothstep(.014,.039,abs(p.x-k*.11-bend));
          threads+=line*smoothstep(-.85,-.60,p.y)*(1.-smoothstep(-.16,-.03,p.y));
        }
        // Each jellyfish has its own breathing rate and two asynchronous rhythms.
        float breath=.5+.5*sin(uTime*vRate+vPhase);
        float slow=.5+.5*sin(uTime*(vRate*.39)+vFlicker);
        float glimmer=pow(max(0.,sin(uTime*(vRate*2.6)+vFlicker*1.7)),12.);
        float pulse=.22+.65*breath*breath*(.55+.45*slow)+.22*glimmer;
        float halo=exp(-r*r*5.)*.23;
        float alpha=(halo+bell*.36+rim*.25+threads*.12)*vFade*pulse;
        vec3 cyan=vec3(.12,.88,1.);
        vec3 violet=vec3(.50,.44,1.);
        vec3 color=mix(cyan,violet,.24+.18*sin(vPhase*2.));
        gl_FragColor=vec4(color,alpha);
      }`}),p=new dr(i,d,t);p.name="jellyfish-one-drawcall",p.frustumCulled=!1,p.castShadow=!1,p.receiveShadow=!1,p.renderOrder=2,e.add(p);const g=new dt,_=[[-19,-24],[20,-10],[-15,14]],m=6;let f=0;const b=(v,S,E)=>{const w=Ge.clamp((E-v)/(S-v),0,1);return w*w*(3-2*w)};let x=0;return{group:e,update(v,S,E=!1){const w=Math.min(v,.1);x+=w,f=Ge.damp(f,E?1:0,1.4,w),d.uniforms.uTime.value=x;const C=(S%24+24)%24,y=C>=18?b(18,20,C):C<7?1-b(5,7,C):0;for(let M=0;M<t;M++){if(M>=t-m){const j=M-(t-m),te=r[M],ue=65+j%3*9+Math.sin(x*.1+te)*4,B=-38+Math.floor(j/3)*28+Math.cos(x*.08+te)*5,X=1.72+Math.sin(x*.45+te)*.18;g.position.set(ue,X,B),g.rotation.set(-Math.PI/2,0,0);const pe=a[M]*(1+.06*Math.sin(x*.9+te));g.scale.set(pe,pe,pe),g.updateMatrix(),p.setMatrixAt(M,g.matrix),o[M]=y*f*(.55+.45*Math.sin(x*.35+te)**2);continue}const A=Math.floor(M/n),D=M%n,L=r[M],[z,O]=_[A],F=x*.032+A*2.09,W=b(-.6,.35,Math.sin(F))*.85+.15;o[M]=y*W;const V=D*2.39996+L*.22,Q=1.4+Math.sqrt(D+1)*1.55,se=Math.sin(x*.12+A*1.9)*3.2,he=Math.cos(x*.095+A*2.1)*4;g.position.set(z+Math.cos(V)*Q+se+Math.sin(x*.23+L)*.55,1.72+Math.sin(x*.8+L)*.09,O+Math.sin(V)*Q+he+Math.cos(x*.19+L)*.65),g.rotation.set(-Math.PI/2,0,0);const Me=a[M]*(1+.045*Math.sin(x*1.4+L));g.scale.set(Me,Me,Me),g.updateMatrix(),p.setMatrixAt(M,g.matrix)}u.needsUpdate=!0,p.instanceMatrix.needsUpdate=!0,p.visible=y>.002}}}function Vx({scene:s,camera:e,renderer:t,controls:n,player:i,isAvailable:r,onChoose:o=()=>{}}){const a=["❤️","👋","😂","👍","🎉","😢","😮","👏"],l=t.domElement,c=new To,h=new ke,u=new N,d=document.createElement("div");d.id="sea-emote-wheel",d.setAttribute("aria-label","이모지 선택");const p=document.createElement("div");p.id="sea-emote-bubble",p.setAttribute("aria-live","polite"),document.body.append(d,p);const g=document.createElement("style");g.textContent=`
    #sea-emote-wheel{position:fixed;z-index:100020;width:236px;height:236px;display:none;pointer-events:none;transform:translate(-50%,-50%)}
    #sea-emote-wheel.open{display:block}
    #sea-emote-wheel button{position:absolute;left:50%;top:50%;width:49px;height:49px;transform:translate(-50%,-50%) translate(var(--dx),var(--dy));border:1px solid #a2dbe5a8;border-radius:50%;background:#0b3549e8;box-shadow:0 3px 14px #001b2a99;color:white;font-size:25px;cursor:pointer;pointer-events:auto;touch-action:manipulation;transition:background .12s,scale .12s}
    #sea-emote-wheel button:hover,#sea-emote-wheel button:focus-visible{background:#26738a;scale:1.12}
    #sea-emote-bubble{position:fixed;z-index:100010;display:none;pointer-events:none;font-size:38px;line-height:1;transform:translate(-50%,-100%);filter:drop-shadow(0 3px 5px #00192399);animation:sea-emote-pop .22s ease-out both}
    @keyframes sea-emote-pop{from{opacity:0;scale:.45}to{opacity:1;scale:1}}
    @media(max-width:600px){#sea-emote-wheel{width:210px;height:210px}#sea-emote-wheel button{width:46px;height:46px;font-size:24px}}
  `,document.head.append(g);let _=!1,m=null,f=null,b=null,x=0,v=null;function S(A,D){const L=A.getObjectByName("sea-avatar-head");L?(L.getWorldPosition(u),u.y+=D===3.15?.8:.45):(A.getWorldPosition(u),u.y+=D),u.project(e);const z=l.getBoundingClientRect();return{x:z.left+(u.x+1)*z.width/2,y:z.top+(1-u.y)*z.height/2,visible:u.z>-1&&u.z<1}}function E(A,D){if(!r())return null;const L=l.getBoundingClientRect();h.set((A-L.left)/L.width*2-1,-(D-L.top)/L.height*2+1),c.setFromCamera(h,e);const z=[i,...s.children.filter(O=>O.name?.startsWith("remote-"))];for(const O of z)if(c.intersectObject(O,!0).some(F=>F.object.isMesh&&F.object.visible))return O;return null}function w(){_=!1,m=null,d.style.visibility="visible",d.classList.remove("open")}function C(A){if(!r())return;const D=S(A,1.7);if(!D.visible)return;const L=118;d.style.left=`${Math.max(L,Math.min(innerWidth-L,D.x))}px`,d.style.top=`${Math.max(L,Math.min(innerHeight-L,D.y))}px`,m=A,_=!0,d.classList.add("open")}function y(A){w(),v=A,p.textContent=A,p.style.display="block",p.style.animation="none",p.offsetWidth,p.style.animation="",x=performance.now()+3e3,o(A)}a.forEach((A,D)=>{const L=-Math.PI/2+D*Math.PI/4,z=document.createElement("button");z.type="button",z.textContent=A,z.setAttribute("aria-label",`${A} 표현`),z.style.setProperty("--dx",`${Math.cos(L)*88}px`),z.style.setProperty("--dy",`${Math.sin(L)*88}px`),z.addEventListener("pointerdown",O=>O.stopPropagation()),z.addEventListener("click",O=>{O.stopPropagation(),y(A)}),d.append(z)}),l.addEventListener("contextmenu",A=>{const D=E(A.clientX,A.clientY);D&&(A.preventDefault(),C(D))}),l.addEventListener("pointerdown",A=>{if(A.pointerType==="mouse"||A.button!==0)return;const D=E(A.clientX,A.clientY);D&&(f={id:A.pointerId,x:A.clientX,y:A.clientY,target:D},clearTimeout(b),b=setTimeout(()=>{f&&(C(f.target),f=null,n.enabled=!1,requestAnimationFrame(()=>{n.enabled=!0}))},500))}),l.addEventListener("pointermove",A=>{f?.id===A.pointerId&&Math.hypot(A.clientX-f.x,A.clientY-f.y)>12&&(clearTimeout(b),f=null)});for(const A of["pointerup","pointercancel","pointerleave"])l.addEventListener(A,D=>{f?.id===D.pointerId&&(clearTimeout(b),f=null)});document.addEventListener("pointerdown",A=>{_&&!d.contains(A.target)&&A.target!==l&&w()}),document.addEventListener("keydown",A=>{A.key==="Escape"&&w()});function M(){if(_&&!r()&&w(),_&&m)if(!m.parent)w();else{const D=S(m,1.7);if(!D.visible)d.style.visibility="hidden";else{d.style.visibility="visible";const L=118;d.style.left=`${Math.max(L,Math.min(innerWidth-L,D.x))}px`,d.style.top=`${Math.max(L,Math.min(innerHeight-L,D.y))}px`}}if(!v)return;if(performance.now()>x){p.style.display="none",v=null;return}const A=S(i,3.15);p.style.display=A.visible?"block":"none",p.style.left=`${A.x}px`,p.style.top=`${A.y}px`}return{update:M}}function Gx(s,e,t){const n=document.createElement("button");n.id="fireworks-toggle",n.type="button",n.textContent="폭죽",n.setAttribute("aria-label","폭죽 발사"),document.querySelector("#app").append(n);const i=new it;s.add(i);const r=[],o=["#ffb95a","#76d9ff","#ff7ec4","#c8ff89","#d7a6ff"];let a=null;function l(_,m,f,b="sine",x=1){try{const v=window.AudioContext||window.webkitAudioContext;if(!v)return;a??=new v,a.state==="suspended"&&a.resume().catch(()=>{});const S=a.currentTime,E=a.createOscillator(),w=a.createGain();E.type=b,E.frequency.setValueAtTime(_,S),E.frequency.exponentialRampToValueAtTime(Math.max(20,_*x),S+m),w.gain.setValueAtTime(1e-4,S),w.gain.exponentialRampToValueAtTime(f,S+.025),w.gain.exponentialRampToValueAtTime(1e-4,S+m),E.connect(w),w.connect(a.destination),E.start(S),E.stop(S+m+.02)}catch{}}function c(_){_.burst=!0,_.age=0,_.rocket.visible=!1;const m=72,f=new Float32Array(m*3),b=[];for(let E=0;E<m;E++){const w=1-2*(E+.5)/m,C=E*2.399963,y=Math.sqrt(1-w*w),M=8+Math.random()*7;b.push(new N(Math.cos(C)*y,w,Math.sin(C)*y).multiplyScalar(M))}const x=new St;x.setAttribute("position",new Mt(f,3).setUsage(ii));const v=new gr({color:_.color,size:.65,transparent:!0,depthWrite:!1,blending:ni}),S=new Is(x,v);S.position.copy(_.rocket.position),i.add(S),_.particles=S,_.velocities=b,l(130,.36,.13,"triangle",.2),l(65,.48,.1,"sawtooth",.25)}const h=[];function u(_,m){const f=new ze(o[_]),b=new Ye(new Vn(.32,10,8),new Wt({color:f,transparent:!0,opacity:.9,depthWrite:!1,blending:ni}));b.visible=!1,i.add(b),h.push({age:0,glow:b,color:f,getHandPosition:m})}function d(){if(r.length>=12||h.some(m=>m.local))return;const _=Math.floor(Math.random()*o.length);e.launchFireworkPose(),u(_,()=>e.getFireworkHandPosition()),h[h.length-1].local=!0,t?.(_)}function p(_,m){!Number.isInteger(_)||_<0||_>=o.length||r.length+h.length>=24||(m.avatar.fireworkPose(),u(_,()=>(m.root.updateWorldMatrix(!0,!0),m.avatar.rightHandWorldPosition())))}n.addEventListener("click",d);function g(_){_=Math.min(_,.05);for(let m=h.length-1;m>=0;m--){const f=h[m];if(f.age+=_,f.age>=.45&&(f.glow.visible=!0,f.glow.position.copy(f.getHandPosition()),f.glow.scale.setScalar(1+Math.sin(f.age*27)*.18)),f.age>=1){const b=f.getHandPosition(),x=new Ye(new Vn(.28,6,6),new Wt({color:f.color}));x.position.copy(b),i.add(x),r.push({rocket:x,color:f.color,age:0,burst:!1,particles:null,velocities:null}),i.remove(f.glow),f.glow.geometry.dispose(),f.glow.material.dispose(),h.splice(m,1),l(440,.9,.07,"sawtooth",3.5)}}for(let m=r.length-1;m>=0;m--){const f=r[m];if(f.age+=_,!f.burst)f.rocket.position.y+=22*_,f.age>=1.1&&c(f);else{const b=f.particles.geometry.attributes.position;for(let x=0;x<f.velocities.length;x++){const v=f.velocities[x];v.y-=6*_;const S=x*3;b.array[S]+=v.x*_,b.array[S+1]+=v.y*_,b.array[S+2]+=v.z*_}b.needsUpdate=!0,f.particles.material.opacity=Math.max(0,1-f.age/1.8),f.age>=1.8&&(i.remove(f.rocket,f.particles),f.rocket.geometry.dispose(),f.rocket.material.dispose(),f.particles.geometry.dispose(),f.particles.material.dispose(),r.splice(m,1))}}}return{update:g,launchRemote:p}}function Wx(){const s=document.createElement("canvas");s.className="sea-rain-overlay",s.setAttribute("aria-hidden","true"),document.querySelector("#app").append(s);const e=s.getContext("2d"),t=Array.from({length:52},()=>({x:Math.random(),y:Math.random(),speed:.7+Math.random()*.8,length:9+Math.random()*13,depth:Math.random()}));let n=0,i=0,r=0;function o(){const l=Math.min(devicePixelRatio||1,1.5);n=innerWidth,i=innerHeight,s.width=Math.round(n*l),s.height=Math.round(i*l),e.setTransform(l,0,0,l,0,0)}o(),addEventListener("resize",o);function a(l,c){if(r+=(Math.max(0,Math.min(1,c))-r)*(1-Math.exp(-Math.min(l,.1)*1.8)),s.style.display=r<.008?"none":"block",r<.008)return;e.clearRect(0,0,n,i);const h=Math.floor(t.length*r);for(let u=0;u<h;u++){const d=t[u];d.y+=l*d.speed*(.7+r),d.y>1.06&&(d.y=-.06,d.x=Math.random());const p=d.x*n,g=d.y*i,_=d.length*(.65+d.depth*.65),m=(.09+d.depth*.13)*r,f=e.createLinearGradient(p,g,p,g+_);f.addColorStop(0,"rgba(215,239,250,0)"),f.addColorStop(.4,`rgba(215,239,250,${m})`),f.addColorStop(1,"rgba(215,239,250,0)"),e.strokeStyle=f,e.lineWidth=.55+d.depth*.5,e.beginPath(),e.moveTo(p,g),e.lineTo(p,g+_),e.stroke()}}return{update:a}}function Xx({scene:s,ocean:e,player:t,camera:n}){const r=new Ol(.48,0),o=new Lt({color:16777215,roughness:.9,flatShading:!0}),a=new dr(r,o,30);a.name="floating-trash",a.instanceMatrix.setUsage(ii),a.frustumCulled=!1,s.add(a);const l=new dt,c=[],h=["#b3a89b","#b8c7b0","#aeb4c2","#c3a98b","#8dada7","#c5c0a9"];for(let L=0;L<30;L++){const z=L*2.399963229728653,O=22+Math.sqrt((L+.5)/30)*55,F=Math.cos(z)*O,W=-24+Math.sin(z)*O,V=(.55+L%5*.12)*(3+L*17%11/10);c.push({x:F,z:W,scale:V,phase:L*1.71,collected:!1}),a.setColorAt(L,new ze(h[L%h.length]))}a.instanceColor&&(a.instanceColor.needsUpdate=!0);const u=new it;u.name="cleanup-net";const d=new Ye(new Hn(.045,.055,2.2,7),new Lt({color:"#9c7651",roughness:.9}));d.position.y=1.1,u.add(d);const p=new Ye(new xi(.52,.055,7,22),new Lt({color:"#c4d4d1",metalness:.35,roughness:.4}));p.rotation.x=Math.PI/2,p.position.y=2.24,u.add(p);const g=new Ye(new Hn(.48,.1,.8,12,3,!0),new Wt({color:"#b8d9d3",wireframe:!0,transparent:!0,opacity:.7,side:wt}));g.position.y=1.84,u.add(g),u.position.set(.65,1,-.18),u.rotation.z=-.24,u.scale.setScalar(.85),t.add(u),u.visible=!1;const _=document.createElement("div");_.style.cssText="position:fixed;z-index:23;display:none;transform:translate(-50%,-100%);padding:8px 12px;border-radius:11px;background:rgba(12,45,51,.85);color:white;font:600 14px system-ui,sans-serif;pointer-events:none;white-space:nowrap",document.body.append(_);const m=document.createElement("button");m.type="button",m.textContent="잠자리채로 줍기",m.style.cssText="position:fixed;z-index:22;display:none;transform:translate(-50%,-100%);padding:10px 14px;border:1px solid #9ac7cb;border-radius:12px;background:rgba(32,77,88,.9);color:white;font:600 14px system-ui;cursor:pointer;touch-action:manipulation",document.body.append(m);const f=new N;let b=0,x=0,v=-1,S=0,E=-1,w=0,C=0;function y(){v<0||E>=0||c[v].collected||(E=v,w=S,u.visible=!0,x=S+3)}m.addEventListener("click",y);function M(L){L.code==="KeyE"&&!L.repeat&&v>=0&&(L.preventDefault(),y())}window.addEventListener("keydown",M);function A(L){const z=document.querySelectorAll('button, input, select, .joystick, [id*="joystick"], [class*="joystick"]');for(const O of z){if(O===m||!O.isConnected)continue;const F=getComputedStyle(O);if(F.display==="none"||F.visibility==="hidden"||F.pointerEvents==="none")continue;const W=O.getBoundingClientRect();if(!(W.width<1||W.height<1)&&L.left<W.right+10&&L.right>W.left-10&&L.top<W.bottom+10&&L.bottom>W.top-10)return!0}return!1}function D(L,z){S=L;let O=4.5;v=-1,E>=0&&(!z||Math.hypot(c[E].x-t.position.x,c[E].z-t.position.z)>4.5)&&(E=-1,u.visible=!1),E>=0&&S-w>=3&&(c[E].collected=!0,b++,_.textContent=`수거 완료 ${b} / 30`,C=S+1.7,E=-1,u.visible=!1);for(let W=0;W<30;W++){const V=c[W];if(V.collected)l.position.set(0,-1e4,0),l.scale.setScalar(1e-5);else{const Q=e.heightAt(V.x,V.z);if(l.position.set(V.x,Q+.17+Math.sin(L*1.4+V.phase)*.09,V.z),l.rotation.set(Math.sin(L*.7+V.phase)*.18,L*.14+V.phase,Math.cos(L*.6+V.phase)*.17),l.scale.set(V.scale*1.25,V.scale*.48,V.scale*.8),z){const se=Math.hypot(V.x-t.position.x,V.z-t.position.z);se<O&&(O=se,v=W)}}l.updateMatrix(),a.setMatrixAt(W,l.matrix)}a.instanceMatrix.needsUpdate=!0,m.style.display="none",_.style.display="none";const F=E>=0?E:v;if(F>=0&&z){const W=c[F];if(f.set(W.x,e.heightAt(W.x,W.z)+W.scale*1.2,W.z).project(n),f.z>-1&&f.z<1&&Math.abs(f.x)<.9&&Math.abs(f.y)<.9){const V=(f.x*.5+.5)*window.innerWidth,Q=(-f.y*.5+.5)*window.innerHeight,se=E>=0?Math.max(0,3-(S-w)):0;m.textContent=E>=0?`수거 중 ${se.toFixed(1)}초`:"잠자리채로 줍기 (E)",m.disabled=E>=0,m.style.opacity=E>=0?".85":"1";const he=E>=0?135:158,Me=46,j=20,te=Math.max(j+he/2,Math.min(window.innerWidth-j-he/2,V)),ue=Math.max(j+Me,Math.min(window.innerHeight*.65,Q-8)),B={left:te-he/2,right:te+he/2,top:ue-Me,bottom:ue};A(B)||(m.style.left=`${te}px`,m.style.top=`${ue}px`,m.style.display="block")}}if(S<C){const W=Number.parseFloat(m.style.left)||window.innerWidth*.5,V=Number.parseFloat(m.style.top)||window.innerHeight*.5;_.style.left=`${Math.max(85,Math.min(window.innerWidth-85,W))}px`,_.style.top=`${Math.max(72,Math.min(window.innerHeight*.65,V-50))}px`,_.style.display="block"}u.visible&&(u.rotation.z=-.24+Math.sin((x-L)*11)*.3,L>=x&&(u.visible=!1))}return{update:D,dispose(){window.removeEventListener("keydown",M),_.remove(),m.remove(),s.remove(a),a.dispose(),r.dispose(),o.dispose()}}}const wh=document.querySelector("#app");navigator.maxTouchPoints>0&&document.documentElement.classList.add("sea-touch-capable");const zn=document.createElement("div");zn.id="sea-loading";zn.setAttribute("role","status");zn.setAttribute("aria-live","polite");zn.innerHTML='<div class="sea-loading-inner"><div class="sea-loading-mark">≈</div><div class="sea-loading-title">배타고</div><div class="sea-loading-subtitle">바다를 준비하고 있습니다...</div><div class="sea-loading-track"><div class="sea-loading-progress"></div></div></div>';document.body.append(zn);wh.innerHTML='<header class="heading"><h1>배타고</h1><p>끝없이 펼쳐지는 바다, 항해의 시작.</p><span class="tag">PROTOTYPE / 0.1</span></header><section class="time-control" aria-label="하늘과 시간 조절"><label><span>구름 양 <output id="cloud-label">35%</output></span><input id="cloud-cover" aria-label="구름 양" type="range" min="0" max="1" step="0.01" value="0.35"></label><label><span>시간 <output id="time-label">18:00</output></span><input id="time-of-day" aria-label="하루 시간" type="range" min="0" max="24" step="0.05" value="0"></label><button id="sky-mode-toggle" type="button" aria-pressed="true" aria-label="자동 순환 중, 눌러서 수동으로 전환">자동</button></section><button id="camera-toggle" type="button" aria-label="바다 전체 감상" title="카메라 시점 전환" aria-pressed="false"><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3z"/><circle cx="12" cy="13.5" r="3.5"/></svg></button><button id="music-toggle" type="button" aria-label="재즈와 파도 소리" title="재즈와 파도 소리" aria-pressed="true"><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 18V5l11-2v13"/><ellipse cx="6.5" cy="18" rx="2.5" ry="1.6"/><ellipse cx="17.5" cy="16" rx="2.5" ry="1.6"/><path class="music-mute-slash" d="M3 21L21 3" stroke-width="2.3"/></svg></button><details><summary aria-label="바다 설정 메뉴"><span class="desktop-menu-title">OCEAN CONTROLS · 바다 설정</span><span class="mobile-menu-title" aria-hidden="true">☰</span></summary><div class="panel"><div class="section">SKY / 낮과 밤</div><div class="time-presets"><button data-hour="12">낮</button><button data-hour="18">석양</button><button data-hour="0">밤</button></div><label class="rain-setting"><input id="rain-toggle" type="checkbox"> 비 내리기 <small>구름 75% 이상 자동</small></label><div class="section">SURFACE / 수면</div><div id="sliders"></div><div class="section">GRAPHICS / 화질</div><label><span>그래픽 품질</span><select id="graphics-quality" aria-label="그래픽 품질"><option value="high">상 · PC 최고화질</option><option value="medium">중 · 모바일 기본</option><option value="low">하 · 저사양 모바일</option></select></label><div class="section">PALETTE / 거리별 바다색</div><div id="colors"></div><button id="reset">기본값으로 초기화</button><p id="stats" aria-label="렌더링 성능">수면 준비 중</p></div></details>';const qx=Wx(),Eh=document.querySelector("#rain-toggle"),Wl=document.querySelector("details"),Th=matchMedia("(max-width: 600px)"),Ah=()=>{Wl.open=!1};Ah();Th.addEventListener("change",Ah);addEventListener("keydown",s=>{s.key==="Escape"&&Th.matches&&(Wl.open=!1)});const Xt=new nv({antialias:!0});Xt.setPixelRatio(Math.min(devicePixelRatio,2));Xt.setSize(innerWidth,innerHeight);Xt.setClearColor("#a3d1db");wh.prepend(Xt.domElement);Xt.shadowMap.enabled=!0;Xt.shadowMap.type=Ou;const an=new Tf,Dt=new sn(50,innerWidth/innerHeight,.5,5e4);Dt.position.set(0,zi.deckY+Ut+2,-12);const Ct=new Xv(Dt,Xt.domElement);Ct.target.set(0,zi.deckY+Ut+1.7,-33);Ct.enableDamping=!0;Ct.enablePan=!1;Ct.minDistance=3;Ct.maxDistance=320;Ct.minPolarAngle=.15;Ct.maxPolarAngle=Math.PI/2-.02;Ct.update();let Jt=null,yn=!1,Zt=!1;function Rh(){const s=Dt.aspect<.8;return new N(s?166:140,zt-5+1,Cs)}function Ch(s){Jt&&(Jt=null,yn=!0),Zt=s,yi.setOverviewCelestials(s),typeof xo<"u"&&xo.setOverview(s),document.body.classList.toggle("sea-overview",s);const e=document.querySelector("#camera-toggle");e.setAttribute("aria-pressed",String(s)),e.setAttribute("aria-label",s?"갑판 시점으로 전환":"바다 전체 감상"),e.title=s?"갑판 시점으로 전환":"바다 전체 감상",et.setEnabled(!s),s?(Dt.position.copy(Rh()),Ct.target.set(0,zt-5,Cs),Ct.update()):et.resetView()}document.querySelector("#camera-toggle").onclick=()=>Ch(!Zt);const Ft=ux();an.add(Ft.mesh);const yi=Ix(an,Ft,Dt),Ph=Fx(document.querySelector("#music-toggle")),jx=Lx(an,Dt,Ph),Ih=kx(an,Dt,Ph,{ocean:Ft,viewportHeight:()=>Xt.domElement.height}),Os=document.createElement("button");Os.type="button";Os.id="whale-summon";Os.textContent="🐋 고래 등장";Os.setAttribute("aria-label","고래 등장");Os.addEventListener("click",()=>{Ih.summonWhale(),Wl.open=!1});const Xl=document.createElement("div");Xl.className="section";Xl.textContent="MARINE LIFE / 해양 생물";const ql=document.createElement("div");ql.className="time-presets";ql.append(Os);const Yx=document.querySelector("#sliders");Yx.before(Xl,ql);const Kx=Nx(),ei=Hv();an.add(ei);const $x=hx(ei),Gi=new it;Gi.name="night-bow-beam";const Dh=[];for(let s=0;s<6;s++){const e=(s+1)/6,t=new jt({uniforms:{uOpacity:{value:0},uLayer:{value:e},uColor:{value:new ze("#fff0d6")}},vertexShader:`
      varying vec3 vLocal;
      varying vec3 vNormalWorld;
      varying vec3 vWorldPos;
      void main(){
        vLocal=position;
        vec4 world=modelMatrix*vec4(position,1.);
        vWorldPos=world.xyz;
        vNormalWorld=normalize(mat3(modelMatrix)*normal);
        gl_Position=projectionMatrix*viewMatrix*world;
      }`,fragmentShader:`
      uniform float uOpacity;
      uniform float uLayer;
      uniform vec3 uColor;
      varying vec3 vLocal;
      varying vec3 vNormalWorld;
      varying vec3 vWorldPos;
      void main(){
        // Height: near end (+Y) and far end (-Y) both dissolve into air.
        float along=(16.-vLocal.y)/32.;
        float startFade=smoothstep(0.,.16,along);
        float endFade=1.-smoothstep(.57,1.,along);
        // Feather the silhouette based on view angle; no visible cone outline.
        vec3 viewDir=normalize(cameraPosition-vWorldPos);
        float facing=abs(dot(normalize(vNormalWorld),viewDir));
        float feather=smoothstep(.0,.72,facing);
        float layerFade=(pow(1.-uLayer,1.35)*.9+.08)*mix(.6,1.,smoothstep(0.,.65,uLayer));
        float alpha=uOpacity*startFade*endFade*feather*layerFade;
        gl_FragColor=vec4(uColor,alpha);
      }`,transparent:!0,depthWrite:!1,side:wt,blending:ni}),n=new Ye(new Hn(1.1*e,38*e,32,32,1,!0),t);n.rotation.x=Math.PI/2,n.renderOrder=4,Gi.add(n),Dh.push(t)}Gi.position.set(0,6,-36);Gi.visible=!1;let $r=0;function Zx(s){const e=It.hour,t=1-Ge.smoothstep(Math.min(e,24-e),4.5,6.5),n=!!(Jt&&!yn&&Jt.elapsed<3),i=Zt||n?t*.11:0;$r+=(i-$r)*(1-Math.exp(-s*2.5));for(const r of Dh)r.uniforms.uOpacity.value=$r;Gi.visible=$r>.002}let us=0;function Jx(s,e){const n=Zt||Jt&&!yn&&Jt.elapsed<3?1:0;us+=(n-us)*(1-Math.exp(-Math.min(s,.05)*2.2));const i=ei.userData.overviewDisplay;if(!i)return;Gi.parent!==i&&i.add(Gi);const r=us>.002;i.visible=r;for(const a of ei.userData.overviewVisualMeshes)a.visible=!r;if(!r){i.position.y=zt-5,i.rotation.set(0,0,0);return}const o=e*2*Math.PI/(5.6/1.5);i.position.y=zt-5+us*(.18*Math.sin(o)),i.rotation.x=us*Ge.degToRad(1.8)*Math.sin(o+.5),i.rotation.z=us*Ge.degToRad(.6)*Math.sin(o*.83+1.3)}const Bi=Gv(ei),Qx=Hx(an),et=dx(an,Dt,Ct,Bi),ey=Xx({scene:an,ocean:Ft,player:et.player,camera:Dt}),Lh=[];for(const[s,e,t,n]of[[-3.5,"조종실",{x:0,z:-18.7,y:21},6543592],[3.5,"망루",{x:0,z:-21,y:70.9},16762216]]){const i=new it;i.position.set(s,zt+.35,Cs+2);const r=new Ye(new Hn(.9,.9,.3,24),new Lt({color:n,emissive:n,emissiveIntensity:.28,roughness:.55}));r.castShadow=!1,i.add(r);const o=new Ye(new xi(.65,.055,6,28),new Wt({color:16777215}));o.rotation.x=-Math.PI/2,o.position.y=.19,i.add(o),an.add(i),Lh.push({root:i,target:t,label:e,armed:!0})}const Nh=Gx(an,et,s=>zs.sendFirework(s)),ma=new N,Pu=new N(0,zt-5,Cs);function ty(){ma.copy(Rh()),Jt={elapsed:0,fromPosition:ma.clone(),fromTarget:Pu.clone()},et.setEnabled(!1),Dt.position.copy(ma),Ct.target.copy(Pu),Ct.update()}function Uh(){const s=et.deckViewPose();return s.position.copy(s.target).add(new N(12,3.7,0)),s}function jl(){Jt=null,yn=!0,et.setEnabled(!0);const s=Uh();Dt.position.copy(s.position),Ct.target.copy(s.target),Ct.update()}function ny(s){if(yn||Zt)return;if(!Jt){Bi.ready()&&et.isSpawnReady()&&ty();return}if(Jt.elapsed+=s,Jt.elapsed>=7.5){jl();return}const e=Uh(),t=Math.max(0,Math.min(1,(Jt.elapsed-3)/4.5)),n=t*t*(3-2*t);Dt.position.copy(Jt.fromPosition).lerp(e.position,n),Ct.target.copy(Jt.fromTarget).lerp(e.target,n),Ct.update()}addEventListener("keydown",s=>{Jt&&["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(s.code)&&(s.preventDefault(),jl())},{capture:!0});Xt.domElement.addEventListener("pointerdown",()=>{Jt&&jl()});const Cn=document.createElement("button");Cn.type="button";Cn.innerHTML='<svg width="30" height="30" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><circle cx="16" cy="6" r="3" fill="currentColor" stroke="none"/><path d="M16 11v11M3 13h26M16 22l-6 8M16 22l6 8"/></svg>';Cn.title="바다를 향해 양팔 벌리기";Cn.setAttribute("aria-label","타이타닉 포즈");Cn.style.cssText="position:fixed;z-index:30;display:none;width:48px;height:48px;border:1px solid #ffffffaa;border-radius:50%;background:#07313ddd;color:white;font-size:25px;cursor:pointer;transform:translate(-50%,-100%)";document.querySelector("#app").append(Cn);Cn.onclick=()=>et.toggleTitanicPose(Ni);const Ni=new N(0,zt,-44),iy=1.35,Zs=new N,zs=wx({scene:an,camera:Dt,controls:Ct,character:et,url:"wss://sea-multiplayer.wnalstlr777.workers.dev/room".trim()}),xo=Tx({scene:an,camera:Dt,character:et,multiplayer:zs,ocean:Ft,isAvailable:()=>yn&&!Zt}),Iu=Ft.uniforms.swimmerRipples.value,sy=Ft.uniforms.swimmerVelocities.value,ga=Ft.uniforms.swimmerWake.value;let _a=0,Du=-10,va=et.player.position.x,xa=et.player.position.z;function ry(){const s=Ft.uniforms.time.value,e=et.getNetworkState(),t=et.player.position,n=t.x-va,i=t.z-xa,r=Math.hypot(n,i);e.inWater&&!e.returning&&e.moving&&r>.23&&s-Du>.14?(ga[_a].set(t.x-n*.65,t.z-i*.65,s,Math.min(1,r*2)),_a=(_a+1)%ga.length,Du=s,va=t.x,xa=t.z):(!e.inWater||e.returning||!e.moving)&&(va=t.x,xa=t.z);for(const o of ga)if(o.w>0){const a=s-o.z;a>2.8?o.w=0:o.z=s-a}}const oy=Array.from({length:4},()=>({wet:!1,entered:0,x:0,z:0,id:null}));function ay(s){const e=Ft.uniforms.time.value,t=et.getNetworkState(),n=[{id:"local",position:et.player.position,inWater:t.inWater&&!t.returning,moving:t.moving}];zs.forEachRemote(a=>{const l=a.samples[a.samples.length-1];l?.inWater&&!l.returning&&n.push({id:a.root.uuid,position:a.root.position,inWater:!0,moving:l.moving})});const i=et.player.position,r=n.slice(1).sort((a,l)=>a.position.distanceToSquared(i)-l.position.distanceToSquared(i)),o=[n[0],...r.slice(0,3)];for(let a=0;a<4;a++){const l=o[a],c=oy[a],h=!!l?.inWater;h&&(!c.wet||c.id!==l.id)&&(c.entered=e,c.x=l.position.x,c.z=l.position.z);const u=h?(l.position.x-c.x)/Math.max(s,.016):0,d=h?(l.position.z-c.z)/Math.max(s,.016):0;sy[a].set(u,d),h?(c.x=l.position.x,c.z=l.position.z,c.id=l.id):c.id=null,c.wet=h,h?Iu[a].set(l.position.x,l.position.z,e-c.entered,l.moving?1:.7):Iu[a].set(0,0,-100,0)}}zs.onFirework((s,e)=>Nh.launchRemote(s,e));const ly=Vx({scene:an,camera:Dt,renderer:Xt,controls:Ct,player:et.player,isAvailable:()=>yn&&!Zt,onChoose:s=>zs.sendEmote(s)});Ct.maxDistance=320;new URLSearchParams(location.search).get("view")==="ocean"&&(yn=!0,Ch(!0));const cy=Dx(Dt),It={cameraMotion:matchMedia("(prefers-reduced-motion: reduce)").matches?0:.6,hour:0,cloudCover:.35,curvature:0,height:.825,reflectionResolution:256,waveSize:1,normalStrength:0,naturalSpeed:.6,speed:16,wake:.65},ya={...It};let Zr=0,Lu=0;const Fh=document.querySelector("#cloud-cover");yi.uniforms.cloudCover.value=It.cloudCover;function Yl(s){It.cloudCover=s,yi.uniforms.cloudCover.value=s,Fh.value=s,document.querySelector("#cloud-label").value=`${Math.round(s*100)}%`}Fh.addEventListener("input",s=>{Xi(!1),Yl(Number(s.target.value))});const Oh=document.querySelector("#graphics-quality"),Nu={high:{reflection:512,pixelRatio:1.5,cloudSamples:24,cloudDetail:0},medium:{reflection:256,pixelRatio:1.25,cloudSamples:20,cloudDetail:0},low:{reflection:128,pixelRatio:1,cloudSamples:12,cloudDetail:0}},zh=/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||navigator.maxTouchPoints>0||matchMedia("(pointer:coarse)").matches?"low":"medium";function Kl(s){const e=Nu[s]||Nu.medium;Oh.value=s,Xt.setPixelRatio(Math.min(devicePixelRatio,e.pixelRatio)),Xt.setSize(innerWidth,innerHeight),It.reflectionResolution=e.reflection,Ft.setReflectionResolution(e.reflection),Ft.setStarReflectionEnabled(s==="high"),yi.uniforms.cloudSamples.value=e.cloudSamples,yi.uniforms.cloudDetail.value=e.cloudDetail}Oh.addEventListener("change",s=>Kl(s.target.value));Kl(zh);const Bh=document.querySelector("#time-of-day");function Bs(s){It.hour=s,Bh.value=s;const e=Math.round(s*60);document.querySelector("#time-label").value=`${String(Math.floor(e/60)).padStart(2,"0")}:${String(e%60).padStart(2,"0")}`,document.querySelectorAll("[data-hour]").forEach(t=>t.setAttribute("aria-pressed",String(Number(t.dataset.hour)===s)))}Bh.addEventListener("input",s=>{Xi(!1),Bs(Number(s.target.value))});document.querySelectorAll("[data-hour]").forEach(s=>s.addEventListener("click",()=>{Xi(!1),Bs(Number(s.dataset.hour))}));Bs(0);const lo=300;let $l=!0,er=0;const co=document.querySelector("#sky-mode-toggle");function Xi(s){$l=s,co.textContent=s?"자동":"수동",co.setAttribute("aria-pressed",String(s)),document.querySelector(".time-control").classList.toggle("sky-auto",s),co.setAttribute("aria-label",s?"자동 순환 중, 눌러서 수동으로 전환":"수동 고정 중, 눌러서 자동으로 전환"),s&&(er=It.hour%24/24*lo)}co.addEventListener("click",()=>Xi(!$l));Xi(!0);function uy(s){$l&&(er=(er+s)%lo,Bs(er/lo*24),Yl(.35+.25*Math.sin(er/lo*Math.PI*2)))}const Ma=new URLSearchParams(location.search).get("hour");Ma!==null&&Number.isFinite(Number(Ma))&&(Bs(Math.max(0,Math.min(24,Number(Ma)))),Xi(!1));const kh=[["cameraMotion","카메라 흔들림",0,1,.05],["curvature","지평선 곡률",0,4,.05],["height","파도 높이",0,2,.025],["waveSize","파도 크기 · 파장 배율",.5,3,.05],["normalStrength","잔물결 강도 · 0=끔",0,1,.05],["naturalSpeed","자연 파도 속도",0,3,.05],["speed","항해 속도 · m/s",0,20,.1],["wake","항적 강도",0,1,.05]];for(const[s,e,t,n,i]of kh){const r=document.createElement("label");r.innerHTML=`<span>${e}<output>${It[s].toFixed(2)}</output></span><input aria-label="${e}" type="range" min="${t}" max="${n}" step="${i}" value="${It[s]}">`,r.querySelector("input").addEventListener("input",o=>{It[s]=Number(o.target.value),r.querySelector("output").value=It[s].toFixed(2)}),document.querySelector("#sliders").append(r)}const Hh={horizon:"#52798b",mid:"#17455c",near:"#105064",deep:"#062839"};for(const[s,e]of Object.entries(Hh)){const t=document.createElement("label");t.className="color",t.innerHTML=`<span>${s[0].toUpperCase()+s.slice(1)} <small>${e}</small></span><input aria-label="${s} color" type="color" value="${e}">`,t.querySelector("input").addEventListener("input",n=>{Ft.uniforms[s].value.set(n.target.value),t.querySelector("small").textContent=n.target.value}),document.querySelector("#colors").append(t)}document.querySelector("#reset").onclick=()=>{Object.assign(It,ya),Bs(ya.hour),Yl(ya.cloudCover),Xi(!0),Eh.checked=!1,Kl(zh),document.querySelectorAll("#sliders input").forEach((s,e)=>{s.value=It[kh[e][0]],s.dispatchEvent(new Event("input"))}),document.querySelectorAll("#colors input").forEach((s,e)=>{s.value=Object.values(Hh)[e],s.dispatchEvent(new Event("input"))})};addEventListener("resize",()=>{Dt.aspect=innerWidth/innerHeight,Dt.updateProjectionMatrix(),Xt.setSize(innerWidth,innerHeight)});let Jr=performance.now(),Qr=0,Sa=0,Uu=!1,hy=0;const dy=performance.now();function fy(){if(Uu)return;if(ei.userData.loadingState==="error"){zn.querySelector(".sea-loading-subtitle").textContent="배 모델을 불러오지 못했습니다. 새로고침해 주세요.";return}const s=ei.userData.loadingState==="ready"&&Bi.ready()&&et.isSpawnReady();if(!s&&performance.now()-dy>9e3){const e=ei.userData.loadingState!=="ready"?"선박 모델을 불러오는 중입니다.":Bi.ready()?"캐릭터 시작 위치를 찾지 못했습니다.":"갑판 충돌 데이터를 확인 중입니다.";zn.querySelector(".sea-loading-subtitle").textContent=e+" 새로고침 후에도 계속되면 알려주세요."}s&&++hy>=2&&(Uu=!0,zn.classList.add("sea-loading-done"),zn.addEventListener("transitionend",()=>zn.remove(),{once:!0}))}Xt.setAnimationLoop(s=>{if(document.hidden){Jr=s;return}if(s-Jr<1e3/60-1)return;const e=(s-Jr)/1e3,t=Math.min(e,.05);Jr=s,uy(e),qx.update(t,Math.max(Eh.checked?1:0,Ge.smoothstep(It.cloudCover,.72,.95))),Zr+=t*It.naturalSpeed,Lu+=t*It.speed;for(const n of["curvature","height","waveSize","normalStrength","speed","wake"])Ft.uniforms[n].value=It[n];Ft.uniforms.time.value=Zr,Ft.uniforms.travel.value=Lu,yi.update(It.hour,t),jx.update(e,Zt),Ih.update(e),Qx.update(t,It.hour,Zt),Kx.update(e),et.update(t);for(const n of Lh){if(n.root.visible=!Zt,Bi.ready()){const l=Bi.floorAt(n.root.position.x,n.root.position.z,zt+3);l!==null&&(n.root.position.y=l+.35)}const i=Math.hypot(et.player.position.x-n.root.position.x,et.player.position.z-n.root.position.z),r=et.player.position.y+Ut+et.getNetworkState().verticalOffset,o=n.root.position.y+.15,a=Math.abs(r-o)<.55;(i>1.35||!a)&&(n.armed=!0),n.armed&&i<.78&&a&&!Zt&&yn&&!et.isLying()&&et.launchTo(n.target)&&(n.armed=!1)}if(Nh.update(e),Ct.update(),ny(t),fy(),Jx(t,Zr),Zx(t),$x.update(Zr),Cn.style.display="none",!Zt&&!et.isLying()&&!et.isTitanicPosing()&&Math.hypot(et.player.position.x-Ni.x,et.player.position.z-Ni.z)<iy){const n=Bi.floorAt(Ni.x,Ni.z,zt+5);n!==null&&Math.abs(et.player.position.y+Ut+et.getNetworkState().verticalOffset-n)<1.4&&(Dt.updateMatrixWorld(),Zs.set(Ni.x,n+1.8,Ni.z-.75).project(Dt),Zs.z>0&&Zs.z<1&&(Cn.style.left=`${(Zs.x*.5+.5)*innerWidth}px`,Cn.style.top=`${(-Zs.y*.5+.5)*innerHeight}px`,Cn.style.display="block"))}Ft.uniforms.transparencyCenter.value.set(et.player.position.x,et.player.position.z),Ft.setOverviewOpaque(Zt||!yn),Dt.updateMatrixWorld(),zs.update(t,yn&&!Zt),ay(t),ry(),ey.update(Ft.uniforms.time.value,yn&&!Zt),xo.update(t,It.hour),xo.setOverview(Zt),ly.update(),yi.follow(et.player.position.clone().add(new N(0,Ut,0))),cy.render(Xt,an,t,It.cameraMotion,Ct.getDistance()),Qr+=e,Sa++,Qr>.5&&(document.querySelector("#stats").textContent=`${Math.round(Sa/Qr)} FPS · ${Xt.info.render.calls} CALLS · ${Xt.info.render.triangles.toLocaleString()} TRIANGLES`,Qr=0,Sa=0)});window.oceanCruise={renderer:Xt,scene:an,camera:Dt,controls:Ct,ship:ei,player:et.player,lighting:yi,params:It,uniforms:Ft.uniforms};
