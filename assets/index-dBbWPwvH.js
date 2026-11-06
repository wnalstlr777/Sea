(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const pl="180",ms={ROTATE:0,DOLLY:1,PAN:2},hs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},zh=0,ql=1,kh=2,Cu=1,Pu=2,$n=3,zn=0,Jt=1,wt=2,pi=0,gs=1,ti=2,Yl=3,jl=4,Hh=5,Ui=100,Vh=101,Gh=102,Wh=103,Xh=104,qh=200,Yh=201,jh=202,Kh=203,va=204,xa=205,$h=206,Zh=207,Jh=208,Qh=209,ed=210,td=211,nd=212,id=213,sd=214,ya=0,Ma=1,Sa=2,ys=3,ba=4,Ea=5,wa=6,Ta=7,ml=0,rd=1,od=2,mi=0,ad=1,ld=2,cd=3,ud=4,hd=5,dd=6,fd=7,Kl="attached",pd="detached",Iu=300,Ms=301,Ss=302,Aa=303,Ra=304,yo=306,ki=1e3,fi=1001,co=1002,qt=1003,Du=1004,Zs=1005,an=1006,Qr=1007,On=1008,kn=1009,Lu=1010,Nu=1011,ir=1012,gl=1013,Hi=1014,wn=1015,fr=1016,_l=1017,vl=1018,sr=1020,Uu=35902,Fu=35899,Ou=1021,Bu=1022,vn=1023,rr=1026,or=1027,xl=1028,yl=1029,zu=1030,Ml=1031,Sl=1033,eo=33776,to=33777,no=33778,io=33779,Ca=35840,Pa=35841,Ia=35842,Da=35843,La=36196,Na=37492,Ua=37496,Fa=37808,Oa=37809,Ba=37810,za=37811,ka=37812,Ha=37813,Va=37814,Ga=37815,Wa=37816,Xa=37817,qa=37818,Ya=37819,ja=37820,Ka=37821,$a=36492,Za=36494,Ja=36495,Qa=36283,el=36284,tl=36285,nl=36286,md=2200,ku=2201,gd=2202,ar=2300,lr=2301,Ro=2302,ds=2400,fs=2401,uo=2402,bl=2500,_d=2501,vd=0,Hu=1,il=2,xd=3200,yd=3201,El=0,Md=1,di="",Ht="srgb",nn="srgb-linear",ho="linear",mt="srgb",Yi=7680,$l=519,Sd=512,bd=513,Ed=514,Vu=515,wd=516,Td=517,Ad=518,Rd=519,sl=35044,_i=35048,Zl="300 es",Bn=2e3,fo=2001;class xi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Jl=1234567;const er=Math.PI/180,bs=180/Math.PI;function An(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Yt[s&255]+Yt[s>>8&255]+Yt[s>>16&255]+Yt[s>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[t&63|128]+Yt[t>>8&255]+"-"+Yt[t>>16&255]+Yt[t>>24&255]+Yt[n&255]+Yt[n>>8&255]+Yt[n>>16&255]+Yt[n>>24&255]).toLowerCase()}function Qe(s,e,t){return Math.max(e,Math.min(t,s))}function wl(s,e){return(s%e+e)%e}function Cd(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Pd(s,e,t){return s!==e?(t-s)/(e-s):0}function tr(s,e,t){return(1-t)*s+t*e}function Id(s,e,t,n){return tr(s,e,1-Math.exp(-t*n))}function Dd(s,e=1){return e-Math.abs(wl(s,e*2)-e)}function Ld(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Nd(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Ud(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Fd(s,e){return s+Math.random()*(e-s)}function Od(s){return s*(.5-Math.random())}function Bd(s){s!==void 0&&(Jl=s);let e=Jl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function zd(s){return s*er}function kd(s){return s*bs}function Hd(s){return(s&s-1)===0&&s!==0}function Vd(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Gd(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Wd(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),p=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*h,l*u,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*g,l*p,a*c);break;case"YXY":s.set(l*p,a*h,l*g,a*c);break;case"ZYZ":s.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function bn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function dt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Xe={DEG2RAD:er,RAD2DEG:bs,generateUUID:An,clamp:Qe,euclideanModulo:wl,mapLinear:Cd,inverseLerp:Pd,lerp:tr,damp:Id,pingpong:Dd,smoothstep:Ld,smootherstep:Nd,randInt:Ud,randFloat:Fd,randFloatSpread:Od,seededRandom:Bd,degToRad:zd,radToDeg:kd,isPowerOfTwo:Hd,ceilPowerOfTwo:Vd,floorPowerOfTwo:Gd,setQuaternionFromProperEuler:Wd,normalize:dt,denormalize:bn};class We{constructor(e=0,t=0){We.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Tt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==d||c!==p||h!==g){let m=1-a;const f=l*d+c*p+h*g+u*_,w=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const S=Math.sqrt(x),T=Math.atan2(S,f*w);m=Math.sin(m*T)/S,a=Math.sin(a*T)/S}const v=a*w;if(l=l*m+d*v,c=c*m+p*v,h=h*m+g*v,u=u*m+_*v,m===1-a){const S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*p-c*d,e[t+1]=l*g+h*d+c*u-a*p,e[t+2]=c*g+h*p+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),p=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-i)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(r-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-i)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ql.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ql.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Co.copy(this).projectOnVector(e),this.sub(Co)}reflect(e){return this.sub(Co.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Co=new L,Ql=new Tt;class Ze{constructor(e,t,n,i,r,o,a,l,c){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],_=i[0],m=i[3],f=i[6],w=i[1],x=i[4],v=i[7],S=i[2],T=i[5],b=i[8];return r[0]=o*_+a*w+l*S,r[3]=o*m+a*x+l*T,r[6]=o*f+a*v+l*b,r[1]=c*_+h*w+u*S,r[4]=c*m+h*x+u*T,r[7]=c*f+h*v+u*b,r[2]=d*_+p*w+g*S,r[5]=d*m+p*x+g*T,r[8]=d*f+p*v+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,p=c*r-o*l,g=t*u+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(i*c-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(h*t-i*l)*_,e[5]=(i*r-a*t)*_,e[6]=p*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Po.makeScale(e,t)),this}rotate(e){return this.premultiply(Po.makeRotation(-e)),this}translate(e,t){return this.premultiply(Po.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Po=new Ze;function Gu(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function cr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Xd(){const s=cr("canvas");return s.style.display="block",s}const ec={};function ur(s){s in ec||(ec[s]=!0,console.warn(s))}function qd(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const tc=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nc=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Yd(){const s={enabled:!0,workingColorSpace:nn,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===mt&&(i.r=Qn(i.r),i.g=Qn(i.g),i.b=Qn(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===mt&&(i.r=_s(i.r),i.g=_s(i.g),i.b=_s(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===di?ho:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return ur("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return ur("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[nn]:{primaries:e,whitePoint:n,transfer:ho,toXYZ:tc,fromXYZ:nc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ht},outputColorSpaceConfig:{drawingBufferColorSpace:Ht}},[Ht]:{primaries:e,whitePoint:n,transfer:mt,toXYZ:tc,fromXYZ:nc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ht}}}),s}const nt=Yd();function Qn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function _s(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ji;class jd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ji===void 0&&(ji=cr("canvas")),ji.width=e.width,ji.height=e.height;const i=ji.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ji}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=cr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Qn(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Qn(t[n]/255)*255):t[n]=Qn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Kd=0;class Tl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=An(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Io(i[o].image)):r.push(Io(i[o]))}else r=Io(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Io(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?jd.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $d=0;const Do=new L;class Ot extends xi{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,n=fi,i=fi,r=an,o=On,a=vn,l=kn,c=Ot.DEFAULT_ANISOTROPY,h=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=An(),this.name="",this.source=new Tl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Do).x}get height(){return this.source.getSize(Do).y}get depth(){return this.source.getSize(Do).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Iu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ki:e.x=e.x-Math.floor(e.x);break;case fi:e.x=e.x<0?0:1;break;case co:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ki:e.y=e.y-Math.floor(e.y);break;case fi:e.y=e.y<0?0:1;break;case co:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=Iu;Ot.DEFAULT_ANISOTROPY=1;class st{constructor(e=0,t=0,n=0,i=1){st.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,v=(p+1)/2,S=(f+1)/2,T=(h+d)/4,b=(u+_)/4,C=(g+m)/4;return x>v&&x>S?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=T/n,r=b/n):v>S?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=T/i,r=C/i):S<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(S),n=b/r,i=C/r),this.set(n,i,r,t),this}let w=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(u-_)/w,this.z=(d-h)/w,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zd extends xi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t);const i={width:e,height:t,depth:n.depth},r=new Ot(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:an,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Tl(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vi extends Zd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Wu extends Ot{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=qt,this.minFilter=qt,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Jd extends Ot{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=qt,this.minFilter=qt,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gn{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,yn):yn.fromBufferAttribute(r,o),yn.applyMatrix4(e.matrixWorld),this.expandByPoint(yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),vr.copy(n.boundingBox)),vr.applyMatrix4(e.matrixWorld),this.union(vr)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yn),yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hs),xr.subVectors(this.max,Hs),Ki.subVectors(e.a,Hs),$i.subVectors(e.b,Hs),Zi.subVectors(e.c,Hs),si.subVectors($i,Ki),ri.subVectors(Zi,$i),Ei.subVectors(Ki,Zi);let t=[0,-si.z,si.y,0,-ri.z,ri.y,0,-Ei.z,Ei.y,si.z,0,-si.x,ri.z,0,-ri.x,Ei.z,0,-Ei.x,-si.y,si.x,0,-ri.y,ri.x,0,-Ei.y,Ei.x,0];return!Lo(t,Ki,$i,Zi,xr)||(t=[1,0,0,0,1,0,0,0,1],!Lo(t,Ki,$i,Zi,xr))?!1:(yr.crossVectors(si,ri),t=[yr.x,yr.y,yr.z],Lo(t,Ki,$i,Zi,xr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Wn=[new L,new L,new L,new L,new L,new L,new L,new L],yn=new L,vr=new Gn,Ki=new L,$i=new L,Zi=new L,si=new L,ri=new L,Ei=new L,Hs=new L,xr=new L,yr=new L,wi=new L;function Lo(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){wi.fromArray(s,r);const a=i.x*Math.abs(wi.x)+i.y*Math.abs(wi.y)+i.z*Math.abs(wi.z),l=e.dot(wi),c=t.dot(wi),h=n.dot(wi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Qd=new Gn,Vs=new L,No=new L;class Pn{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Qd.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vs.subVectors(e,this.center);const t=Vs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Vs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(No.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vs.copy(e.center).add(No)),this.expandByPoint(Vs.copy(e.center).sub(No))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Xn=new L,Uo=new L,Mr=new L,oi=new L,Fo=new L,Sr=new L,Oo=new L;class Ps{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xn.copy(this.origin).addScaledVector(this.direction,t),Xn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Uo.copy(e).add(t).multiplyScalar(.5),Mr.copy(t).sub(e).normalize(),oi.copy(this.origin).sub(Uo);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Mr),a=oi.dot(this.direction),l=-oi.dot(Mr),c=oi.lengthSq(),h=Math.abs(1-o*o);let u,d,p,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Uo).addScaledVector(Mr,d),p}intersectSphere(e,t){Xn.subVectors(e.center,this.origin);const n=Xn.dot(this.direction),i=Xn.dot(Xn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Xn)!==null}intersectTriangle(e,t,n,i,r){Fo.subVectors(t,e),Sr.subVectors(n,e),Oo.crossVectors(Fo,Sr);let o=this.direction.dot(Oo),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;oi.subVectors(this.origin,e);const l=a*this.direction.dot(Sr.crossVectors(oi,Sr));if(l<0)return null;const c=a*this.direction.dot(Fo.cross(oi));if(c<0||l+c>o)return null;const h=-a*oi.dot(Oo);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ke{constructor(e,t,n,i,r,o,a,l,c,h,u,d,p,g,_,m){Ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,h,u,d,p,g,_,m)}set(e,t,n,i,r,o,a,l,c,h,u,d,p,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ke().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ji.setFromMatrixColumn(e,0).length(),r=1/Ji.setFromMatrixColumn(e,1).length(),o=1/Ji.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,p=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,p=l*u,g=c*h,_=c*u;t[0]=d+_*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,p=l*u,g=c*h,_=c*u;t[0]=d-_*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,p=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=g*c-p,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-d*u,t[8]=g*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=o*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ef,e,tf)}lookAt(e,t,n){const i=this.elements;return hn.subVectors(e,t),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),ai.crossVectors(n,hn),ai.lengthSq()===0&&(Math.abs(n.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),ai.crossVectors(n,hn)),ai.normalize(),br.crossVectors(hn,ai),i[0]=ai.x,i[4]=br.x,i[8]=hn.x,i[1]=ai.y,i[5]=br.y,i[9]=hn.y,i[2]=ai.z,i[6]=br.z,i[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],w=n[3],x=n[7],v=n[11],S=n[15],T=i[0],b=i[4],C=i[8],y=i[12],M=i[1],A=i[5],D=i[9],F=i[13],B=i[2],O=i[6],N=i[10],j=i[14],G=i[3],Z=i[7],se=i[11],fe=i[15];return r[0]=o*T+a*M+l*B+c*G,r[4]=o*b+a*A+l*O+c*Z,r[8]=o*C+a*D+l*N+c*se,r[12]=o*y+a*F+l*j+c*fe,r[1]=h*T+u*M+d*B+p*G,r[5]=h*b+u*A+d*O+p*Z,r[9]=h*C+u*D+d*N+p*se,r[13]=h*y+u*F+d*j+p*fe,r[2]=g*T+_*M+m*B+f*G,r[6]=g*b+_*A+m*O+f*Z,r[10]=g*C+_*D+m*N+f*se,r[14]=g*y+_*F+m*j+f*fe,r[3]=w*T+x*M+v*B+S*G,r[7]=w*b+x*A+v*O+S*Z,r[11]=w*C+x*D+v*N+S*se,r[15]=w*y+x*F+v*j+S*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+r*l*u-i*c*u-r*a*d+n*c*d+i*a*p-n*l*p)+_*(+t*l*p-t*c*d+r*o*d-i*o*p+i*c*h-r*l*h)+m*(+t*c*u-t*a*p-r*o*u+n*o*p+r*a*h-n*c*h)+f*(-i*a*h-t*l*u+t*a*d+i*o*u-n*o*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],w=u*m*c-_*d*c+_*l*p-a*m*p-u*l*f+a*d*f,x=g*d*c-h*m*c-g*l*p+o*m*p+h*l*f-o*d*f,v=h*_*c-g*u*c+g*a*p-o*_*p-h*a*f+o*u*f,S=g*u*l-h*_*l-g*a*d+o*_*d+h*a*m-o*u*m,T=t*w+n*x+i*v+r*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/T;return e[0]=w*b,e[1]=(_*d*r-u*m*r-_*i*p+n*m*p+u*i*f-n*d*f)*b,e[2]=(a*m*r-_*l*r+_*i*c-n*m*c-a*i*f+n*l*f)*b,e[3]=(u*l*r-a*d*r-u*i*c+n*d*c+a*i*p-n*l*p)*b,e[4]=x*b,e[5]=(h*m*r-g*d*r+g*i*p-t*m*p-h*i*f+t*d*f)*b,e[6]=(g*l*r-o*m*r-g*i*c+t*m*c+o*i*f-t*l*f)*b,e[7]=(o*d*r-h*l*r+h*i*c-t*d*c-o*i*p+t*l*p)*b,e[8]=v*b,e[9]=(g*u*r-h*_*r-g*n*p+t*_*p+h*n*f-t*u*f)*b,e[10]=(o*_*r-g*a*r+g*n*c-t*_*c-o*n*f+t*a*f)*b,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*p-t*a*p)*b,e[12]=S*b,e[13]=(h*_*i-g*u*i+g*n*d-t*_*d-h*n*m+t*u*m)*b,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*m-t*a*m)*b,e[15]=(o*u*i-h*a*i+h*n*l-t*u*l-o*n*d+t*a*d)*b,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,p=r*h,g=r*u,_=o*h,m=o*u,f=a*u,w=l*c,x=l*h,v=l*u,S=n.x,T=n.y,b=n.z;return i[0]=(1-(_+f))*S,i[1]=(p+v)*S,i[2]=(g-x)*S,i[3]=0,i[4]=(p-v)*T,i[5]=(1-(d+f))*T,i[6]=(m+w)*T,i[7]=0,i[8]=(g+x)*b,i[9]=(m-w)*b,i[10]=(1-(d+_))*b,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Ji.set(i[0],i[1],i[2]).length();const o=Ji.set(i[4],i[5],i[6]).length(),a=Ji.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Mn.copy(this);const c=1/r,h=1/o,u=1/a;return Mn.elements[0]*=c,Mn.elements[1]*=c,Mn.elements[2]*=c,Mn.elements[4]*=h,Mn.elements[5]*=h,Mn.elements[6]*=h,Mn.elements[8]*=u,Mn.elements[9]*=u,Mn.elements[10]*=u,t.setFromRotationMatrix(Mn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Bn,l=!1){const c=this.elements,h=2*r/(t-e),u=2*r/(n-i),d=(t+e)/(t-e),p=(n+i)/(n-i);let g,_;if(l)g=r/(o-r),_=o*r/(o-r);else if(a===Bn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===fo)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Bn,l=!1){const c=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),p=-(n+i)/(n-i);let g,_;if(l)g=1/(o-r),_=o/(o-r);else if(a===Bn)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===fo)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ji=new L,Mn=new Ke,ef=new L(0,0,0),tf=new L(1,1,1),ai=new L,br=new L,hn=new L,ic=new Ke,sc=new Tt;class xn{constructor(e=0,t=0,n=0,i=xn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ic.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ic,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sc.setFromEuler(this),this.setFromQuaternion(sc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xn.DEFAULT_ORDER="XYZ";class Al{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let nf=0;const rc=new L,Qi=new Tt,qn=new Ke,Er=new L,Gs=new L,sf=new L,rf=new Tt,oc=new L(1,0,0),ac=new L(0,1,0),lc=new L(0,0,1),cc={type:"added"},of={type:"removed"},es={type:"childadded",child:null},Bo={type:"childremoved",child:null};class ft extends xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=An(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ft.DEFAULT_UP.clone();const e=new L,t=new xn,n=new Tt,i=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ke},normalMatrix:{value:new Ze}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Al,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qi.setFromAxisAngle(e,t),this.quaternion.multiply(Qi),this}rotateOnWorldAxis(e,t){return Qi.setFromAxisAngle(e,t),this.quaternion.premultiply(Qi),this}rotateX(e){return this.rotateOnAxis(oc,e)}rotateY(e){return this.rotateOnAxis(ac,e)}rotateZ(e){return this.rotateOnAxis(lc,e)}translateOnAxis(e,t){return rc.copy(e).applyQuaternion(this.quaternion),this.position.add(rc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(oc,e)}translateY(e){return this.translateOnAxis(ac,e)}translateZ(e){return this.translateOnAxis(lc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Er.copy(e):Er.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(Gs,Er,this.up):qn.lookAt(Er,Gs,this.up),this.quaternion.setFromRotationMatrix(qn),i&&(qn.extractRotation(i.matrixWorld),Qi.setFromRotationMatrix(qn),this.quaternion.premultiply(Qi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(cc),es.child=e,this.dispatchEvent(es),es.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(of),Bo.child=e,this.dispatchEvent(Bo),Bo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(cc),es.child=e,this.dispatchEvent(es),es.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,e,sf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,rf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ft.DEFAULT_UP=new L(0,1,0);ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Sn=new L,Yn=new L,zo=new L,jn=new L,ts=new L,ns=new L,uc=new L,ko=new L,Ho=new L,Vo=new L,Go=new st,Wo=new st,Xo=new st;class En{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Sn.subVectors(e,t),i.cross(Sn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Sn.subVectors(i,t),Yn.subVectors(n,t),zo.subVectors(e,t);const o=Sn.dot(Sn),a=Sn.dot(Yn),l=Sn.dot(zo),c=Yn.dot(Yn),h=Yn.dot(zo),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,jn.x),l.addScaledVector(o,jn.y),l.addScaledVector(a,jn.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return Go.setScalar(0),Wo.setScalar(0),Xo.setScalar(0),Go.fromBufferAttribute(e,t),Wo.fromBufferAttribute(e,n),Xo.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Go,r.x),o.addScaledVector(Wo,r.y),o.addScaledVector(Xo,r.z),o}static isFrontFacing(e,t,n,i){return Sn.subVectors(n,t),Yn.subVectors(e,t),Sn.cross(Yn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Sn.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),Sn.cross(Yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return En.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return En.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return En.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return En.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return En.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;ts.subVectors(i,n),ns.subVectors(r,n),ko.subVectors(e,n);const l=ts.dot(ko),c=ns.dot(ko);if(l<=0&&c<=0)return t.copy(n);Ho.subVectors(e,i);const h=ts.dot(Ho),u=ns.dot(Ho);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(ts,o);Vo.subVectors(e,r);const p=ts.dot(Vo),g=ns.dot(Vo);if(g>=0&&p<=g)return t.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(ns,a);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return uc.subVectors(r,i),a=(u-h)/(u-h+(p-g)),t.copy(i).addScaledVector(uc,a);const f=1/(m+_+d);return o=_*f,a=d*f,t.copy(n).addScaledVector(ts,o).addScaledVector(ns,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Xu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},wr={h:0,s:0,l:0};function qo(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Be{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,nt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=nt.workingColorSpace){if(e=wl(e,1),t=Qe(t,0,1),n=Qe(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=qo(o,r,e+1/3),this.g=qo(o,r,e),this.b=qo(o,r,e-1/3)}return nt.colorSpaceToWorking(this,i),this}setStyle(e,t=Ht){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ht){const n=Xu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qn(e.r),this.g=Qn(e.g),this.b=Qn(e.b),this}copyLinearToSRGB(e){return this.r=_s(e.r),this.g=_s(e.g),this.b=_s(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ht){return nt.workingToColorSpace(jt.copy(this),e),Math.round(Qe(jt.r*255,0,255))*65536+Math.round(Qe(jt.g*255,0,255))*256+Math.round(Qe(jt.b*255,0,255))}getHexString(e=Ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.workingToColorSpace(jt.copy(this),t);const n=jt.r,i=jt.g,r=jt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=nt.workingColorSpace){return nt.workingToColorSpace(jt.copy(this),t),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=Ht){nt.workingToColorSpace(jt.copy(this),e);const t=jt.r,n=jt.g,i=jt.b;return e!==Ht?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(li),this.setHSL(li.h+e,li.s+t,li.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(li),e.getHSL(wr);const n=tr(li.h,wr.h,t),i=tr(li.s,wr.s,t),r=tr(li.l,wr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new Be;Be.NAMES=Xu;let af=0;class Rn extends xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=An(),this.name="",this.type="Material",this.blending=gs,this.side=zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=va,this.blendDst=xa,this.blendEquation=Ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$l,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yi,this.stencilZFail=Yi,this.stencilZPass=Yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==gs&&(n.blending=this.blending),this.side!==zn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==va&&(n.blendSrc=this.blendSrc),this.blendDst!==xa&&(n.blendDst=this.blendDst),this.blendEquation!==Ui&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ys&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$l&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Xt extends Rn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=ml,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lt=new L,Tr=new We;let lf=0;class Mt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:lf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=sl,this.updateRanges=[],this.gpuType=wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Tr.fromBufferAttribute(this,t),Tr.applyMatrix3(e),this.setXY(t,Tr.x,Tr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=bn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=bn(t,this.array)),t}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=bn(t,this.array)),t}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=bn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=bn(t,this.array)),t}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array),r=dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sl&&(e.usage=this.usage),e}}class qu extends Mt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Yu extends Mt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class xt extends Mt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let cf=0;const gn=new Ke,Yo=new ft,is=new L,dn=new Gn,Ws=new Gn,kt=new L;class bt extends xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cf++}),this.uuid=An(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gu(e)?Yu:qu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,t,n){return gn.makeTranslation(e,t,n),this.applyMatrix4(gn),this}scale(e,t,n){return gn.makeScale(e,t,n),this.applyMatrix4(gn),this}lookAt(e){return Yo.lookAt(e),Yo.updateMatrix(),this.applyMatrix4(Yo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new xt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Ws.setFromBufferAttribute(a),this.morphTargetsRelative?(kt.addVectors(dn.min,Ws.min),dn.expandByPoint(kt),kt.addVectors(dn.max,Ws.max),dn.expandByPoint(kt)):(dn.expandByPoint(Ws.min),dn.expandByPoint(Ws.max))}dn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)kt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(kt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)kt.fromBufferAttribute(a,c),l&&(is.fromBufferAttribute(e,c),kt.add(is)),i=Math.max(i,n.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new L,l[C]=new L;const c=new L,h=new L,u=new L,d=new We,p=new We,g=new We,_=new L,m=new L;function f(C,y,M){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,C),p.fromBufferAttribute(r,y),g.fromBufferAttribute(r,M),h.sub(c),u.sub(c),p.sub(d),g.sub(d);const A=1/(p.x*g.y-g.x*p.y);isFinite(A)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(A),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(A),a[C].add(_),a[y].add(_),a[M].add(_),l[C].add(m),l[y].add(m),l[M].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let C=0,y=w.length;C<y;++C){const M=w[C],A=M.start,D=M.count;for(let F=A,B=A+D;F<B;F+=3)f(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const x=new L,v=new L,S=new L,T=new L;function b(C){S.fromBufferAttribute(i,C),T.copy(S);const y=a[C];x.copy(y),x.sub(S.multiplyScalar(S.dot(y))).normalize(),v.crossVectors(T,y);const A=v.dot(l[C])<0?-1:1;o.setXYZW(C,x.x,x.y,x.z,A)}for(let C=0,y=w.length;C<y;++C){const M=w[C],A=M.start,D=M.count;for(let F=A,B=A+D;F<B;F+=3)b(e.getX(F+0)),b(e.getX(F+1)),b(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Mt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new L,r=new L,o=new L,a=new L,l=new L,c=new L,h=new L,u=new L;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new Mt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new bt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=e(d,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hc=new Ke,Ti=new Ps,Ar=new Pn,dc=new L,Rr=new L,Cr=new L,Pr=new L,jo=new L,Ir=new L,fc=new L,Dr=new L;class $e extends ft{constructor(e=new bt,t=new Xt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Ir.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(jo.fromBufferAttribute(u,e),o?Ir.addScaledVector(jo,h):Ir.addScaledVector(jo.sub(t),h))}t.add(Ir)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ar.copy(n.boundingSphere),Ar.applyMatrix4(r),Ti.copy(e.ray).recast(e.near),!(Ar.containsPoint(Ti.origin)===!1&&(Ti.intersectSphere(Ar,dc)===null||Ti.origin.distanceToSquared(dc)>(e.far-e.near)**2))&&(hc.copy(r).invert(),Ti.copy(e.ray).applyMatrix4(hc),!(n.boundingBox!==null&&Ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ti)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],w=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=w,S=x;v<S;v+=3){const T=a.getX(v),b=a.getX(v+1),C=a.getX(v+2);i=Lr(this,f,e,n,c,h,u,T,b,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const w=a.getX(m),x=a.getX(m+1),v=a.getX(m+2);i=Lr(this,o,e,n,c,h,u,w,x,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],w=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=w,S=x;v<S;v+=3){const T=v,b=v+1,C=v+2;i=Lr(this,f,e,n,c,h,u,T,b,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const w=m,x=m+1,v=m+2;i=Lr(this,o,e,n,c,h,u,w,x,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function uf(s,e,t,n,i,r,o,a){let l;if(e.side===Jt?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===zn,a),l===null)return null;Dr.copy(a),Dr.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Dr);return c<t.near||c>t.far?null:{distance:c,point:Dr.clone(),object:s}}function Lr(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,Rr),s.getVertexPosition(l,Cr),s.getVertexPosition(c,Pr);const h=uf(s,e,t,n,Rr,Cr,Pr,fc);if(h){const u=new L;En.getBarycoord(fc,Rr,Cr,Pr,u),i&&(h.uv=En.getInterpolatedAttribute(i,a,l,c,u,new We)),r&&(h.uv1=En.getInterpolatedAttribute(r,a,l,c,u,new We)),o&&(h.normal=En.getInterpolatedAttribute(o,a,l,c,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new L,materialIndex:0};En.getNormal(Rr,Cr,Pr,d.normal),h.face=d,h.barycoord=u}return h}class gi extends bt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new xt(c,3)),this.setAttribute("normal",new xt(h,3)),this.setAttribute("uv",new xt(u,2));function g(_,m,f,w,x,v,S,T,b,C,y){const M=v/b,A=S/C,D=v/2,F=S/2,B=T/2,O=b+1,N=C+1;let j=0,G=0;const Z=new L;for(let se=0;se<N;se++){const fe=se*A-F;for(let Me=0;Me<O;Me++){const q=Me*M-D;Z[_]=q*w,Z[m]=fe*x,Z[f]=B,c.push(Z.x,Z.y,Z.z),Z[_]=0,Z[m]=0,Z[f]=T>0?1:-1,h.push(Z.x,Z.y,Z.z),u.push(Me/b),u.push(1-se/C),j+=1}}for(let se=0;se<C;se++)for(let fe=0;fe<b;fe++){const Me=d+fe+O*se,q=d+fe+O*(se+1),te=d+(fe+1)+O*(se+1),pe=d+(fe+1)+O*se;l.push(Me,q,pe),l.push(q,te,pe),G+=6}a.addGroup(p,G,y),p+=G,d+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Es(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function tn(s){const e={};for(let t=0;t<s.length;t++){const n=Es(s[t]);for(const i in n)e[i]=n[i]}return e}function hf(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function ju(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const rl={clone:Es,merge:tn};var df=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ff=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wt extends Rn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=df,this.fragmentShader=ff,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Es(e.uniforms),this.uniformsGroups=hf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ku extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=Bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ci=new L,pc=new We,mc=new We;class $t extends Ku{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=bs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(er*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bs*2*Math.atan(Math.tan(er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ci.x,ci.y).multiplyScalar(-e/ci.z),ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ci.x,ci.y).multiplyScalar(-e/ci.z)}getViewSize(e,t){return this.getViewBounds(e,pc,mc),t.subVectors(mc,pc)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(er*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ss=-90,rs=1;class pf extends ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new $t(ss,rs,e,t);i.layers=this.layers,this.add(i);const r=new $t(ss,rs,e,t);r.layers=this.layers,this.add(r);const o=new $t(ss,rs,e,t);o.layers=this.layers,this.add(o);const a=new $t(ss,rs,e,t);a.layers=this.layers,this.add(a);const l=new $t(ss,rs,e,t);l.layers=this.layers,this.add(l);const c=new $t(ss,rs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Bn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===fo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class $u extends Ot{constructor(e=[],t=Ms,n,i,r,o,a,l,c,h){super(e,t,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class mf extends vi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new $u(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new gi(5,5,5),r=new Wt({name:"CubemapFromEquirect",uniforms:Es(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Jt,blending:pi});r.uniforms.tEquirect.value=t;const o=new $e(i,r),a=t.minFilter;return t.minFilter===On&&(t.minFilter=an),new pf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}class it extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gf={type:"move"};class Ko{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new it,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new it,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new it,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(gf)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new it;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class _f extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xn,this.environmentIntensity=1,this.environmentRotation=new xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class vf{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=sl,this.updateRanges=[],this.version=0,this.uuid=An()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=An()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=An()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const en=new L;class Rl{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=bn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=bn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=bn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=bn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=bn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array),r=dt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Mt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Rl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const gc=new L,_c=new st,vc=new st,xf=new L,xc=new Ke,Nr=new L,$o=new Pn,yc=new Ke,Zo=new Ps;class yf extends $e{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Kl,this.bindMatrix=new Ke,this.bindMatrixInverse=new Ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Gn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Nr),this.boundingBox.expandByPoint(Nr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Pn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Nr),this.boundingSphere.expandByPoint(Nr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$o.copy(this.boundingSphere),$o.applyMatrix4(i),e.ray.intersectsSphere($o)!==!1&&(yc.copy(i).invert(),Zo.copy(e.ray).applyMatrix4(yc),!(this.boundingBox!==null&&Zo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Zo)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new st,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Kl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===pd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;_c.fromBufferAttribute(i.attributes.skinIndex,e),vc.fromBufferAttribute(i.attributes.skinWeight,e),gc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=vc.getComponent(r);if(o!==0){const a=_c.getComponent(r);xc.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(xf.copy(gc).applyMatrix4(xc),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Zu extends ft{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Cl extends Ot{constructor(e=null,t=1,n=1,i,r,o,a,l,c=qt,h=qt,u,d){super(null,o,a,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Mc=new Ke,Mf=new Ke;class Pl{constructor(e=[],t=[]){this.uuid=An(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ke;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Mf;Mc.multiplyMatrices(a,t[r]),Mc.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Pl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Cl(t,e,e,vn,wn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Zu),this.bones.push(o),this.boneInverses.push(new Ke().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Oi extends Mt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const os=new Ke,Sc=new Ke,Ur=[],bc=new Gn,Sf=new Ke,Xs=new $e,qs=new Pn;class po extends $e{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Oi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Sf)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Gn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,os),bc.copy(e.boundingBox).applyMatrix4(os),this.boundingBox.union(bc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Pn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,os),qs.copy(e.boundingSphere).applyMatrix4(os),this.boundingSphere.union(qs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Xs.geometry=this.geometry,Xs.material=this.material,Xs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qs.copy(this.boundingSphere),qs.applyMatrix4(n),e.ray.intersectsSphere(qs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,os),Sc.multiplyMatrices(n,os),Xs.matrixWorld=Sc,Xs.raycast(e,Ur);for(let o=0,a=Ur.length;o<a;o++){const l=Ur[o];l.instanceId=r,l.object=this,t.push(l)}Ur.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Oi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Cl(new Float32Array(i*this.count),i,this.count,xl,wn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Jo=new L,bf=new L,Ef=new Ze;class Zn{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Jo.subVectors(n,t).cross(bf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Jo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ef.getNormalMatrix(e),i=this.coplanarPoint(Jo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ai=new Pn,wf=new We(.5,.5),Fr=new L;class Mo{constructor(e=new Zn,t=new Zn,n=new Zn,i=new Zn,r=new Zn,o=new Zn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Bn,n=!1){const i=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],p=r[7],g=r[8],_=r[9],m=r[10],f=r[11],w=r[12],x=r[13],v=r[14],S=r[15];if(i[0].setComponents(c-o,p-h,f-g,S-w).normalize(),i[1].setComponents(c+o,p+h,f+g,S+w).normalize(),i[2].setComponents(c+a,p+u,f+_,S+x).normalize(),i[3].setComponents(c-a,p-u,f-_,S-x).normalize(),n)i[4].setComponents(l,d,m,v).normalize(),i[5].setComponents(c-l,p-d,f-m,S-v).normalize();else if(i[4].setComponents(c-l,p-d,f-m,S-v).normalize(),t===Bn)i[5].setComponents(c+l,p+d,f+m,S+v).normalize();else if(t===fo)i[5].setComponents(l,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(e){Ai.center.set(0,0,0);const t=wf.distanceTo(e.center);return Ai.radius=.7071067811865476+t,Ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Fr.x=i.normal.x>0?e.max.x:e.min.x,Fr.y=i.normal.y>0?e.max.y:e.min.y,Fr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Fr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Il extends Rn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const mo=new L,go=new L,Ec=new Ke,Ys=new Ps,Or=new Pn,Qo=new L,wc=new L;class So extends ft{constructor(e=new bt,t=new Il){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)mo.fromBufferAttribute(t,i-1),go.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=mo.distanceTo(go);e.setAttribute("lineDistance",new xt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere),Or.applyMatrix4(i),Or.radius+=r,e.ray.intersectsSphere(Or)===!1)return;Ec.copy(i).invert(),Ys.copy(e.ray).applyMatrix4(Ec);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){const f=h.getX(_),w=h.getX(_+1),x=Br(this,e,Ys,l,f,w,_);x&&t.push(x)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(p),f=Br(this,e,Ys,l,_,m,g-1);f&&t.push(f)}}else{const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){const f=Br(this,e,Ys,l,_,_+1,_);f&&t.push(f)}if(this.isLineLoop){const _=Br(this,e,Ys,l,g-1,p,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Br(s,e,t,n,i,r,o){const a=s.geometry.attributes.position;if(mo.fromBufferAttribute(a,i),go.fromBufferAttribute(a,r),t.distanceSqToSegment(mo,go,Qo,wc)>n)return;Qo.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Qo);if(!(c<e.near||c>e.far))return{distance:c,point:wc.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const Tc=new L,Ac=new L;class Tf extends So{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Tc.fromBufferAttribute(t,i),Ac.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Tc.distanceTo(Ac);e.setAttribute("lineDistance",new xt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Af extends So{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class pr extends Rn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Rc=new Ke,ol=new Ps,zr=new Pn,kr=new L;class Is extends ft{constructor(e=new bt,t=new pr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zr.copy(n.boundingSphere),zr.applyMatrix4(i),zr.radius+=r,e.ray.intersectsSphere(zr)===!1)return;Rc.copy(i).invert(),ol.copy(e.ray).applyMatrix4(Rc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,_=p;g<_;g++){const m=c.getX(g);kr.fromBufferAttribute(u,m),Cc(kr,m,l,i,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=d,_=p;g<_;g++)kr.fromBufferAttribute(u,g),Cc(kr,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Cc(s,e,t,n,i,r,o){const a=ol.distanceSqToPoint(s);if(a<t){const l=new L;ol.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Rf extends Ot{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ju extends Ot{constructor(e,t,n=Hi,i,r,o,a=qt,l=qt,c,h=rr,u=1){if(h!==rr&&h!==or)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Tl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Qu extends Ot{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Dl extends bt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new L,h=new We;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const p=n+u/t*i;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new xt(o,3)),this.setAttribute("normal",new xt(a,3)),this.setAttribute("uv",new xt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dl(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class yi extends bt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],p=[];let g=0;const _=[],m=n/2;let f=0;w(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new xt(u,3)),this.setAttribute("normal",new xt(d,3)),this.setAttribute("uv",new xt(p,2));function w(){const v=new L,S=new L;let T=0;const b=(t-e)/n;for(let C=0;C<=r;C++){const y=[],M=C/r,A=M*(t-e)+e;for(let D=0;D<=i;D++){const F=D/i,B=F*l+a,O=Math.sin(B),N=Math.cos(B);S.x=A*O,S.y=-M*n+m,S.z=A*N,u.push(S.x,S.y,S.z),v.set(O,b,N).normalize(),d.push(v.x,v.y,v.z),p.push(F,1-M),y.push(g++)}_.push(y)}for(let C=0;C<i;C++)for(let y=0;y<r;y++){const M=_[y][C],A=_[y+1][C],D=_[y+1][C+1],F=_[y][C+1];(e>0||y!==0)&&(h.push(M,A,F),T+=3),(t>0||y!==r-1)&&(h.push(A,D,F),T+=3)}c.addGroup(f,T,0),f+=T}function x(v){const S=g,T=new We,b=new L;let C=0;const y=v===!0?e:t,M=v===!0?1:-1;for(let D=1;D<=i;D++)u.push(0,m*M,0),d.push(0,M,0),p.push(.5,.5),g++;const A=g;for(let D=0;D<=i;D++){const B=D/i*l+a,O=Math.cos(B),N=Math.sin(B);b.x=y*N,b.y=m*M,b.z=y*O,u.push(b.x,b.y,b.z),d.push(0,M,0),T.x=O*.5+.5,T.y=N*.5*M+.5,p.push(T.x,T.y),g++}for(let D=0;D<i;D++){const F=S+D,B=A+D;v===!0?h.push(B,B+1,F):h.push(B+1,B,F),C+=3}c.addGroup(f,C,v===!0?1:2),f+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class bo extends yi{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new bo(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Mi extends bt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,d=t/l,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const w=f*d-o;for(let x=0;x<c;x++){const v=x*u-r;g.push(v,-w,0),_.push(0,0,1),m.push(x/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let w=0;w<a;w++){const x=w+c*f,v=w+c*(f+1),S=w+1+c*(f+1),T=w+1+c*f;p.push(x,v,T),p.push(v,S,T)}this.setIndex(p),this.setAttribute("position",new xt(g,3)),this.setAttribute("normal",new xt(_,3)),this.setAttribute("uv",new xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mi(e.width,e.height,e.widthSegments,e.heightSegments)}}class Hn extends bt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new L,d=new L,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const w=[],x=f/n;let v=0;f===0&&o===0?v=.5/t:f===n&&l===Math.PI&&(v=-.5/t);for(let S=0;S<=t;S++){const T=S/t;u.x=-e*Math.cos(i+T*r)*Math.sin(o+x*a),u.y=e*Math.cos(o+x*a),u.z=e*Math.sin(i+T*r)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(T+v,1-x),w.push(c++)}h.push(w)}for(let f=0;f<n;f++)for(let w=0;w<t;w++){const x=h[f][w+1],v=h[f][w],S=h[f+1][w],T=h[f+1][w+1];(f!==0||o>0)&&p.push(x,v,T),(f!==n-1||l<Math.PI)&&p.push(v,S,T)}this.setIndex(p),this.setAttribute("position",new xt(g,3)),this.setAttribute("normal",new xt(_,3)),this.setAttribute("uv",new xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Vi extends bt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],h=new L,u=new L,d=new L;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){const _=g/i*r,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){const _=(i+1)*p+g-1,m=(i+1)*(p-1)+g-1,f=(i+1)*(p-1)+g,w=(i+1)*p+g;o.push(_,m,w),o.push(m,f,w)}this.setIndex(o),this.setAttribute("position",new xt(a,3)),this.setAttribute("normal",new xt(l,3)),this.setAttribute("uv",new xt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vi(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Vt extends Rn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=El,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class In extends Vt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new We(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Cf extends Rn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=El,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=ml,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Pf extends Rn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class If extends Rn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Hr(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Df(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Lf(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Pc(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function eh(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class mr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Nf extends mr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ds,endingEnd:ds}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case fs:r=e,a=2*t-n;break;case uo:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case fs:o=e,l=2*n-t;break;case uo:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,f=-d*m+2*d*_-d*g,w=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,x=(-1-p)*m+(1.5+p)*_+.5*g,v=p*m-p*_;for(let S=0;S!==a;++S)r[S]=f*o[h+S]+w*o[c+S]+x*o[l+S]+v*o[u+S];return r}}class th extends mr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}}class Uf extends mr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Dn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Hr(t,this.TimeBufferType),this.values=Hr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Hr(e.times,Array),values:Hr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Uf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new th(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Nf(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ar:t=this.InterpolantFactoryMethodDiscrete;break;case lr:t=this.InterpolantFactoryMethodLinear;break;case Ro:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ar;case this.InterpolantFactoryMethodLinear:return lr;case this.InterpolantFactoryMethodSmooth:return Ro}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Df(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ro,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{const u=a*n,d=u-n,p=u+n;for(let g=0;g!==n;++g){const _=t[u+g];if(_!==t[d+g]||_!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let p=0;p!==n;++p)t[d+p]=t[u+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Dn.prototype.ValueTypeName="";Dn.prototype.TimeBufferType=Float32Array;Dn.prototype.ValueBufferType=Float32Array;Dn.prototype.DefaultInterpolation=lr;class Ds extends Dn{constructor(e,t,n){super(e,t,n)}}Ds.prototype.ValueTypeName="bool";Ds.prototype.ValueBufferType=Array;Ds.prototype.DefaultInterpolation=ar;Ds.prototype.InterpolantFactoryMethodLinear=void 0;Ds.prototype.InterpolantFactoryMethodSmooth=void 0;class nh extends Dn{constructor(e,t,n,i){super(e,t,n,i)}}nh.prototype.ValueTypeName="color";class ws extends Dn{constructor(e,t,n,i){super(e,t,n,i)}}ws.prototype.ValueTypeName="number";class Ff extends mr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let h=c+a;c!==h;c+=4)Tt.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Ts extends Dn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Ff(this.times,this.values,this.getValueSize(),e)}}Ts.prototype.ValueTypeName="quaternion";Ts.prototype.InterpolantFactoryMethodSmooth=void 0;class Ls extends Dn{constructor(e,t,n){super(e,t,n)}}Ls.prototype.ValueTypeName="string";Ls.prototype.ValueBufferType=Array;Ls.prototype.DefaultInterpolation=ar;Ls.prototype.InterpolantFactoryMethodLinear=void 0;Ls.prototype.InterpolantFactoryMethodSmooth=void 0;class As extends Dn{constructor(e,t,n,i){super(e,t,n,i)}}As.prototype.ValueTypeName="vector";class al{constructor(e="",t=-1,n=[],i=bl){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=An(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Bf(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(Dn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const h=Lf(l);l=Pc(l,1,h),c=Pc(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new ws(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,p,g,_){if(p.length!==0){const m=[],f=[];eh(p,m,f,g),m.length!==0&&_.push(new u(d,m,f))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)p[d[g].morphTargets[_]]=-1;for(const _ in p){const m=[],f=[];for(let w=0;w!==d[g].morphTargets.length;++w){const x=d[g];m.push(x.time),f.push(x.morphTarget===_?1:0)}i.push(new ws(".morphTargetInfluence["+_+"]",m,f))}l=p.length*o}else{const p=".bones["+t[u].name+"]";n(As,p+".position",d,"pos",i),n(Ts,p+".quaternion",d,"rot",i),n(As,p+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Of(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ws;case"vector":case"vector2":case"vector3":case"vector4":return As;case"color":return nh;case"quaternion":return Ts;case"bool":case"boolean":return Ds;case"string":return Ls}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Bf(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Of(s.type);if(s.times===void 0){const t=[],n=[];eh(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Jn={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class zf{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const ih=new zf;class Ns{constructor(e){this.manager=e!==void 0?e:ih,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Ns.DEFAULT_MATERIAL_NAME="__DEFAULT";const Kn={};class kf extends Error{constructor(e,t){super(e),this.response=t}}class sh extends Ns{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Jn.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Kn[e]!==void 0){Kn[e].push({onLoad:t,onProgress:n,onError:i});return}Kn[e]=[],Kn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Kn[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0;let _=0;const m=new ReadableStream({start(f){w();function w(){u.read().then(({done:x,value:v})=>{if(x)f.close();else{_+=v.byteLength;const S=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let T=0,b=h.length;T<b;T++){const C=h[T];C.onProgress&&C.onProgress(S)}f.enqueue(v),w()}},x=>{f.error(x)})}}});return new Response(m)}else throw new kf(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Jn.add(`file:${e}`,c);const h=Kn[e];delete Kn[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{const h=Kn[e];if(h===void 0)throw this.manager.itemError(e),c;delete Kn[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const as=new WeakMap;class Hf extends Ns{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Jn.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=as.get(o);u===void 0&&(u=[],as.set(o,u)),u.push({onLoad:t,onError:i})}return o}const a=cr("img");function l(){h(),t&&t(this);const u=as.get(this)||[];for(let d=0;d<u.length;d++){const p=u[d];p.onLoad&&p.onLoad(this)}as.delete(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),Jn.remove(`image:${e}`);const d=as.get(this)||[];for(let p=0;p<d.length;p++){const g=d[p];g.onError&&g.onError(u)}as.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Jn.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class Vf extends Ns{constructor(e){super(e)}load(e,t,n,i){const r=new Ot,o=new Hf(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Eo extends ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Gf extends Eo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ea=new Ke,Ic=new L,Dc=new L;class Ll{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.mapType=kn,this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mo,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ic.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ic),Dc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Dc),t.updateMatrixWorld(),ea.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ea,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ea)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Wf extends Ll{constructor(){super(new $t(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=bs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Xf extends Eo{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Wf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Lc=new Ke,js=new L,ta=new L;class qf extends Ll{constructor(){super(new $t(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new We(4,2),this._viewportCount=6,this._viewports=[new st(2,1,1,1),new st(0,1,1,1),new st(3,1,1,1),new st(1,1,1,1),new st(3,0,1,1),new st(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),js.setFromMatrixPosition(e.matrixWorld),n.position.copy(js),ta.copy(n.position),ta.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ta),n.updateMatrixWorld(),i.makeTranslation(-js.x,-js.y,-js.z),Lc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lc,n.coordinateSystem,n.reversedDepth)}}class Yf extends Eo{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new qf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Nl extends Ku{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class jf extends Ll{constructor(){super(new Nl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class so extends Eo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.shadow=new jf}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class nr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const na=new WeakMap;class Kf extends Ns{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Jn.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{if(na.has(o)===!0)i&&i(na.get(o)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Jn.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),na.set(l,c),Jn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Jn.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class $f extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Zf{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){Tt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const o=this._workIndex*r;Tt.multiplyQuaternionsFlat(e,o,e,t,e,n),Tt.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){const o=1-i;for(let a=0;a!==r;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const Ul="\\[\\]\\.:\\/",Jf=new RegExp("["+Ul+"]","g"),Fl="[^"+Ul+"]",Qf="[^"+Ul.replace("\\.","")+"]",ep=/((?:WC+[\/:])*)/.source.replace("WC",Fl),tp=/(WCOD+)?/.source.replace("WCOD",Qf),np=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fl),ip=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fl),sp=new RegExp("^"+ep+tp+np+ip+"$"),rp=["material","materials","bones","map"];class op{constructor(e,t,n){const i=n||ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ut{constructor(e,t,n){this.path=t,this.parsedPath=n||ut.parseTrackName(t),this.node=ut.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ut.Composite(e,t,n):new ut(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Jf,"")}static parseTrackName(e){const t=sp.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);rp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=ut.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ut.Composite=op;ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ut.prototype.GetterByBindingType=[ut.prototype._getValue_direct,ut.prototype._getValue_array,ut.prototype._getValue_arrayElement,ut.prototype._getValue_toArray];ut.prototype.SetterByBindingTypeAndVersioning=[[ut.prototype._setValue_direct,ut.prototype._setValue_direct_setNeedsUpdate,ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_array,ut.prototype._setValue_array_setNeedsUpdate,ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_arrayElement,ut.prototype._setValue_arrayElement_setNeedsUpdate,ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_fromArray,ut.prototype._setValue_fromArray_setNeedsUpdate,ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class ap{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,o=r.length,a=new Array(o),l={endingStart:ds,endingEnd:ds};for(let c=0;c!==o;++c){const h=r[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=ku,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case _d:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case bl:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const o=n===gd;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===md){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=fs,i.endingEnd=fs):(e?i.endingStart=this.zeroSlopeAtStart?fs:ds:i.endingStart=uo,t?i.endingEnd=this.zeroSlopeAtEnd?fs:ds:i.endingEnd=uo)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}}const lp=new Float32Array(1);class cp extends xi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){const d=i[u],p=d.name;let g=h[p];if(g!==void 0)++g.referenceCount,o[u]=g;else{if(g=o[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,p));continue}const _=t&&t._propertyBindings[u].binding.parsedPath;g=new Zf(ut.create(n,p,_),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,p),o[u]=g}a[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new th(new Float32Array(2),new Float32Array(2),1,lp),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let o=typeof e=="string"?al.findByName(i,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=bl),l!==void 0){const u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const h=new ap(this,o,t,n);return this._bindAction(h,c),this._addInactiveAction(h,a,r),h}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?al.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const Nc=new Ke;class wo{constructor(e,t,n=0,i=1/0){this.ray=new Ps(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Al,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Nc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Nc),this}intersectObject(e,t=!0,n=[]){return ll(e,this,n,t),n.sort(Uc),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)ll(e[i],this,n,t);return n.sort(Uc),n}}function Uc(s,e){return s.distance-e.distance}function ll(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)ll(r[o],e,t,!0)}}class Fc{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Qe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Qe(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class up extends xi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Oc(s,e,t,n){const i=hp(n);switch(t){case Ou:return s*e;case xl:return s*e/i.components*i.byteLength;case yl:return s*e/i.components*i.byteLength;case zu:return s*e*2/i.components*i.byteLength;case Ml:return s*e*2/i.components*i.byteLength;case Bu:return s*e*3/i.components*i.byteLength;case vn:return s*e*4/i.components*i.byteLength;case Sl:return s*e*4/i.components*i.byteLength;case eo:case to:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case no:case io:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Pa:case Da:return Math.max(s,16)*Math.max(e,8)/4;case Ca:case Ia:return Math.max(s,8)*Math.max(e,8)/2;case La:case Na:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ua:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Fa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Oa:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Ba:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case za:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case ka:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ha:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Va:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Ga:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Wa:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Xa:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case qa:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Ya:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case ja:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Ka:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case $a:case Za:case Ja:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Qa:case el:return Math.ceil(s/4)*Math.ceil(e/4)*8;case tl:case nl:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function hp(s){switch(s){case kn:case Lu:return{byteLength:1,components:1};case ir:case Nu:case fr:return{byteLength:2,components:1};case _l:case vl:return{byteLength:2,components:4};case Hi:case gl:case wn:return{byteLength:4,components:1};case Uu:case Fu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pl);function rh(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function dp(s){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const _=u[p];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var fp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pp=`#ifdef USE_ALPHAHASH
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
#endif`,mp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_p=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xp=`#ifdef USE_AOMAP
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
#endif`,yp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mp=`#ifdef USE_BATCHING
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
#endif`,Sp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ep=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Tp=`#ifdef USE_IRIDESCENCE
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
#endif`,Ap=`#ifdef USE_BUMPMAP
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
#endif`,Rp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Cp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ip=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Np=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Up=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Fp=`#define PI 3.141592653589793
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
} // validated`,Op=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Bp=`vec3 transformedNormal = objectNormal;
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
#endif`,zp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xp=`#ifdef USE_ENVMAP
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
#endif`,qp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yp=`#ifdef USE_ENVMAP
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
#endif`,jp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kp=`#ifdef USE_ENVMAP
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
#endif`,$p=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,em=`#ifdef USE_GRADIENTMAP
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
}`,tm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,im=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sm=`uniform bool receiveShadow;
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
#endif`,rm=`#ifdef USE_ENVMAP
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
#endif`,om=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,am=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,um=`PhysicalMaterial material;
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
#endif`,hm=`struct PhysicalMaterial {
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
}`,dm=`
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
#endif`,fm=`#if defined( RE_IndirectDiffuse )
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
#endif`,pm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_m=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ym=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sm=`#if defined( USE_POINTS_UV )
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
#endif`,bm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Em=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Am=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rm=`#ifdef USE_MORPHTARGETS
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
#endif`,Cm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Im=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Dm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Um=`#ifdef USE_NORMALMAP
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
#endif`,Fm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Om=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,km=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Vm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ym=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Km=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$m=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Zm=`float getShadowMask() {
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
}`,Jm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qm=`#ifdef USE_SKINNING
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
#endif`,eg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tg=`#ifdef USE_SKINNING
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
#endif`,ng=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ig=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,og=`#ifdef USE_TRANSMISSION
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
#endif`,ag=`#ifdef USE_TRANSMISSION
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
#endif`,lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fg=`uniform sampler2D t2D;
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
}`,pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_g=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vg=`#include <common>
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
}`,xg=`#if DEPTH_PACKING == 3200
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
}`,yg=`#define DISTANCE
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
}`,Mg=`#define DISTANCE
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
}`,Sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eg=`uniform float scale;
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
}`,wg=`uniform vec3 diffuse;
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
}`,Tg=`#include <common>
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
}`,Ag=`uniform vec3 diffuse;
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
}`,Rg=`#define LAMBERT
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
}`,Cg=`#define LAMBERT
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
}`,Pg=`#define MATCAP
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
}`,Ig=`#define MATCAP
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
}`,Dg=`#define NORMAL
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
}`,Lg=`#define NORMAL
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
}`,Ng=`#define PHONG
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
}`,Ug=`#define PHONG
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
}`,Fg=`#define STANDARD
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
}`,Og=`#define STANDARD
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
}`,Bg=`#define TOON
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
}`,zg=`#define TOON
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
}`,kg=`uniform float size;
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
}`,Hg=`uniform vec3 diffuse;
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
}`,Vg=`#include <common>
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
}`,Gg=`uniform vec3 color;
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
}`,Wg=`uniform float rotation;
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
}`,Xg=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:fp,alphahash_pars_fragment:pp,alphamap_fragment:mp,alphamap_pars_fragment:gp,alphatest_fragment:_p,alphatest_pars_fragment:vp,aomap_fragment:xp,aomap_pars_fragment:yp,batching_pars_vertex:Mp,batching_vertex:Sp,begin_vertex:bp,beginnormal_vertex:Ep,bsdfs:wp,iridescence_fragment:Tp,bumpmap_pars_fragment:Ap,clipping_planes_fragment:Rp,clipping_planes_pars_fragment:Cp,clipping_planes_pars_vertex:Pp,clipping_planes_vertex:Ip,color_fragment:Dp,color_pars_fragment:Lp,color_pars_vertex:Np,color_vertex:Up,common:Fp,cube_uv_reflection_fragment:Op,defaultnormal_vertex:Bp,displacementmap_pars_vertex:zp,displacementmap_vertex:kp,emissivemap_fragment:Hp,emissivemap_pars_fragment:Vp,colorspace_fragment:Gp,colorspace_pars_fragment:Wp,envmap_fragment:Xp,envmap_common_pars_fragment:qp,envmap_pars_fragment:Yp,envmap_pars_vertex:jp,envmap_physical_pars_fragment:rm,envmap_vertex:Kp,fog_vertex:$p,fog_pars_vertex:Zp,fog_fragment:Jp,fog_pars_fragment:Qp,gradientmap_pars_fragment:em,lightmap_pars_fragment:tm,lights_lambert_fragment:nm,lights_lambert_pars_fragment:im,lights_pars_begin:sm,lights_toon_fragment:om,lights_toon_pars_fragment:am,lights_phong_fragment:lm,lights_phong_pars_fragment:cm,lights_physical_fragment:um,lights_physical_pars_fragment:hm,lights_fragment_begin:dm,lights_fragment_maps:fm,lights_fragment_end:pm,logdepthbuf_fragment:mm,logdepthbuf_pars_fragment:gm,logdepthbuf_pars_vertex:_m,logdepthbuf_vertex:vm,map_fragment:xm,map_pars_fragment:ym,map_particle_fragment:Mm,map_particle_pars_fragment:Sm,metalnessmap_fragment:bm,metalnessmap_pars_fragment:Em,morphinstance_vertex:wm,morphcolor_vertex:Tm,morphnormal_vertex:Am,morphtarget_pars_vertex:Rm,morphtarget_vertex:Cm,normal_fragment_begin:Pm,normal_fragment_maps:Im,normal_pars_fragment:Dm,normal_pars_vertex:Lm,normal_vertex:Nm,normalmap_pars_fragment:Um,clearcoat_normal_fragment_begin:Fm,clearcoat_normal_fragment_maps:Om,clearcoat_pars_fragment:Bm,iridescence_pars_fragment:zm,opaque_fragment:km,packing:Hm,premultiplied_alpha_fragment:Vm,project_vertex:Gm,dithering_fragment:Wm,dithering_pars_fragment:Xm,roughnessmap_fragment:qm,roughnessmap_pars_fragment:Ym,shadowmap_pars_fragment:jm,shadowmap_pars_vertex:Km,shadowmap_vertex:$m,shadowmask_pars_fragment:Zm,skinbase_vertex:Jm,skinning_pars_vertex:Qm,skinning_vertex:eg,skinnormal_vertex:tg,specularmap_fragment:ng,specularmap_pars_fragment:ig,tonemapping_fragment:sg,tonemapping_pars_fragment:rg,transmission_fragment:og,transmission_pars_fragment:ag,uv_pars_fragment:lg,uv_pars_vertex:cg,uv_vertex:ug,worldpos_vertex:hg,background_vert:dg,background_frag:fg,backgroundCube_vert:pg,backgroundCube_frag:mg,cube_vert:gg,cube_frag:_g,depth_vert:vg,depth_frag:xg,distanceRGBA_vert:yg,distanceRGBA_frag:Mg,equirect_vert:Sg,equirect_frag:bg,linedashed_vert:Eg,linedashed_frag:wg,meshbasic_vert:Tg,meshbasic_frag:Ag,meshlambert_vert:Rg,meshlambert_frag:Cg,meshmatcap_vert:Pg,meshmatcap_frag:Ig,meshnormal_vert:Dg,meshnormal_frag:Lg,meshphong_vert:Ng,meshphong_frag:Ug,meshphysical_vert:Fg,meshphysical_frag:Og,meshtoon_vert:Bg,meshtoon_frag:zg,points_vert:kg,points_frag:Hg,shadow_vert:Vg,shadow_frag:Gg,sprite_vert:Wg,sprite_frag:Xg},Ie={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},Un={basic:{uniforms:tn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:tn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Be(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:tn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:tn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:tn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new Be(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:tn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:tn([Ie.points,Ie.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:tn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:tn([Ie.common,Ie.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:tn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:tn([Ie.sprite,Ie.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:tn([Ie.common,Ie.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:tn([Ie.lights,Ie.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};Un.physical={uniforms:tn([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const Vr={r:0,b:0,g:0},Ri=new xn,qg=new Ke;function Yg(s,e,t,n,i,r,o){const a=new Be(0);let l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?t:e).get(v)),v}function _(x){let v=!1;const S=g(x);S===null?f(a,l):S&&S.isColor&&(f(S,1),v=!0);const T=s.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(x,v){const S=g(v);S&&(S.isCubeTexture||S.mapping===yo)?(h===void 0&&(h=new $e(new gi(1,1,1),new Wt({name:"BackgroundCubeMaterial",uniforms:Es(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,b,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Ri.copy(v.backgroundRotation),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(qg.makeRotationFromEuler(Ri)),h.material.toneMapped=nt.getTransfer(S.colorSpace)!==mt,(u!==S||d!==S.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=S,d=S.version,p=s.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new $e(new Mi(2,2),new Wt({name:"BackgroundMaterial",uniforms:Es(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=nt.getTransfer(S.colorSpace)!==mt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||d!==S.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,u=S,d=S.version,p=s.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function f(x,v){x.getRGB(Vr,ju(s)),n.buffers.color.setClear(Vr.r,Vr.g,Vr.b,v,o)}function w(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,v=1){a.set(x),l=v,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,f(a,l)},render:_,addToRenderList:m,dispose:w}}function jg(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(M,A,D,F,B){let O=!1;const N=u(F,D,A);r!==N&&(r=N,c(r.object)),O=p(M,F,D,B),O&&g(M,F,D,B),B!==null&&e.update(B,s.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,v(M,A,D,F),B!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return s.createVertexArray()}function c(M){return s.bindVertexArray(M)}function h(M){return s.deleteVertexArray(M)}function u(M,A,D){const F=D.wireframe===!0;let B=n[M.id];B===void 0&&(B={},n[M.id]=B);let O=B[A.id];O===void 0&&(O={},B[A.id]=O);let N=O[F];return N===void 0&&(N=d(l()),O[F]=N),N}function d(M){const A=[],D=[],F=[];for(let B=0;B<t;B++)A[B]=0,D[B]=0,F[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:D,attributeDivisors:F,object:M,attributes:{},index:null}}function p(M,A,D,F){const B=r.attributes,O=A.attributes;let N=0;const j=D.getAttributes();for(const G in j)if(j[G].location>=0){const se=B[G];let fe=O[G];if(fe===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(fe=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(fe=M.instanceColor)),se===void 0||se.attribute!==fe||fe&&se.data!==fe.data)return!0;N++}return r.attributesNum!==N||r.index!==F}function g(M,A,D,F){const B={},O=A.attributes;let N=0;const j=D.getAttributes();for(const G in j)if(j[G].location>=0){let se=O[G];se===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(se=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(se=M.instanceColor));const fe={};fe.attribute=se,se&&se.data&&(fe.data=se.data),B[G]=fe,N++}r.attributes=B,r.attributesNum=N,r.index=F}function _(){const M=r.newAttributes;for(let A=0,D=M.length;A<D;A++)M[A]=0}function m(M){f(M,0)}function f(M,A){const D=r.newAttributes,F=r.enabledAttributes,B=r.attributeDivisors;D[M]=1,F[M]===0&&(s.enableVertexAttribArray(M),F[M]=1),B[M]!==A&&(s.vertexAttribDivisor(M,A),B[M]=A)}function w(){const M=r.newAttributes,A=r.enabledAttributes;for(let D=0,F=A.length;D<F;D++)A[D]!==M[D]&&(s.disableVertexAttribArray(D),A[D]=0)}function x(M,A,D,F,B,O,N){N===!0?s.vertexAttribIPointer(M,A,D,B,O):s.vertexAttribPointer(M,A,D,F,B,O)}function v(M,A,D,F){_();const B=F.attributes,O=D.getAttributes(),N=A.defaultAttributeValues;for(const j in O){const G=O[j];if(G.location>=0){let Z=B[j];if(Z===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(Z=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(Z=M.instanceColor)),Z!==void 0){const se=Z.normalized,fe=Z.itemSize,Me=e.get(Z);if(Me===void 0)continue;const q=Me.buffer,te=Me.type,pe=Me.bytesPerElement,z=te===s.INT||te===s.UNSIGNED_INT||Z.gpuType===gl;if(Z.isInterleavedBufferAttribute){const W=Z.data,de=W.stride,K=Z.offset;if(W.isInstancedInterleavedBuffer){for(let J=0;J<G.locationSize;J++)f(G.location+J,W.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let J=0;J<G.locationSize;J++)m(G.location+J);s.bindBuffer(s.ARRAY_BUFFER,q);for(let J=0;J<G.locationSize;J++)x(G.location+J,fe/G.locationSize,te,se,de*pe,(K+fe/G.locationSize*J)*pe,z)}else{if(Z.isInstancedBufferAttribute){for(let W=0;W<G.locationSize;W++)f(G.location+W,Z.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let W=0;W<G.locationSize;W++)m(G.location+W);s.bindBuffer(s.ARRAY_BUFFER,q);for(let W=0;W<G.locationSize;W++)x(G.location+W,fe/G.locationSize,te,se,fe*pe,fe/G.locationSize*W*pe,z)}}else if(N!==void 0){const se=N[j];if(se!==void 0)switch(se.length){case 2:s.vertexAttrib2fv(G.location,se);break;case 3:s.vertexAttrib3fv(G.location,se);break;case 4:s.vertexAttrib4fv(G.location,se);break;default:s.vertexAttrib1fv(G.location,se)}}}}w()}function S(){C();for(const M in n){const A=n[M];for(const D in A){const F=A[D];for(const B in F)h(F[B].object),delete F[B];delete A[D]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;const A=n[M.id];for(const D in A){const F=A[D];for(const B in F)h(F[B].object),delete F[B];delete A[D]}delete n[M.id]}function b(M){for(const A in n){const D=n[A];if(D[M.id]===void 0)continue;const F=D[M.id];for(const B in F)h(F[B].object),delete F[B];delete D[M.id]}}function C(){y(),o=!0,r!==i&&(r=i,c(r.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:y,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:m,disableUnusedAttributes:w}}function Kg(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];t.update(p,n,1)}function l(c,h,u,d){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function $g(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(b){return!(b!==vn&&n.convert(b)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const C=b===fr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==kn&&n.convert(b)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==wn&&!C)}function l(b){if(b==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),w=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),x=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),S=g>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:w,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:S,maxSamples:T}}function Zg(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Zn,a=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||i;return i=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const w=r?0:n,x=w*4;let v=f.clippingState||null;l.value=v,v=h(g,d,x,p);for(let S=0;S!==x;++S)v[S]=t[S];f.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,w=d.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<f)&&(m=new Float32Array(f));for(let x=0,v=p;x!==_;++x,v+=4)o.copy(u[x]).applyMatrix4(w,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Jg(s){let e=new WeakMap;function t(o,a){return a===Aa?o.mapping=Ms:a===Ra&&(o.mapping=Ss),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Aa||a===Ra)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new mf(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const ps=4,Bc=[.125,.215,.35,.446,.526,.582],Fi=20,ia=new Nl,zc=new Be;let sa=null,ra=0,oa=0,aa=!1;const Li=(1+Math.sqrt(5))/2,ls=1/Li,kc=[new L(-Li,ls,0),new L(Li,ls,0),new L(-ls,0,Li),new L(ls,0,Li),new L(0,Li,-ls),new L(0,Li,ls),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],Qg=new L;class Hc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){const{size:o=256,position:a=Qg}=r;sa=this._renderer.getRenderTarget(),ra=this._renderer.getActiveCubeFace(),oa=this._renderer.getActiveMipmapLevel(),aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(sa,ra,oa),this._renderer.xr.enabled=aa,e.scissorTest=!1,Gr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ms||e.mapping===Ss?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sa=this._renderer.getRenderTarget(),ra=this._renderer.getActiveCubeFace(),oa=this._renderer.getActiveMipmapLevel(),aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:an,minFilter:an,generateMipmaps:!1,type:fr,format:vn,colorSpace:nn,depthBuffer:!1},i=Vc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vc(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=e0(r)),this._blurMaterial=t0(r,e,t)}return i}_compileMaterial(e){const t=new $e(this._lodPlanes[0],e);this._renderer.compile(t,ia)}_sceneToCubeUV(e,t,n,i,r){const l=new $t(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(zc),u.toneMapping=mi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null));const _=new Xt({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1}),m=new $e(new gi,_);let f=!1;const w=e.background;w?w.isColor&&(_.color.copy(w),e.background=null,f=!0):(_.color.copy(zc),f=!0);for(let x=0;x<6;x++){const v=x%3;v===0?(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[x],r.y,r.z)):v===1?(l.up.set(0,0,c[x]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[x],r.z)):(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[x]));const S=this._cubeSize;Gr(i,v*S,x>2?S:0,S,S),u.setRenderTarget(i),f&&u.render(m,l),u.render(e,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=p,u.autoClear=d,e.background=w}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ms||e.mapping===Ss;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gc());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new $e(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Gr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,ia)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=kc[(i-r-1)%kc.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new $e(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Fi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Fi;m>Fi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Fi}`);const f=[];let w=0;for(let b=0;b<Fi;++b){const C=b/_,y=Math.exp(-C*C/2);f.push(y),b===0?w+=y:b<m&&(w+=2*y)}for(let b=0;b<f.length;b++)f[b]=f[b]/w;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const v=this._sizeLods[i],S=3*v*(i>x-ps?i-x+ps:0),T=4*(this._cubeSize-v);Gr(t,S,T,3*v,2*v),l.setRenderTarget(t),l.render(u,ia)}}function e0(s){const e=[],t=[],n=[];let i=s;const r=s-ps+1+Bc.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-ps?l=Bc[o-s+ps-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,f=1,w=new Float32Array(_*g*p),x=new Float32Array(m*g*p),v=new Float32Array(f*g*p);for(let T=0;T<p;T++){const b=T%3*2/3-1,C=T>2?0:-1,y=[b,C,0,b+2/3,C,0,b+2/3,C+1,0,b,C,0,b+2/3,C+1,0,b,C+1,0];w.set(y,_*g*T),x.set(d,m*g*T);const M=[T,T,T,T,T,T];v.set(M,f*g*T)}const S=new bt;S.setAttribute("position",new Mt(w,_)),S.setAttribute("uv",new Mt(x,m)),S.setAttribute("faceIndex",new Mt(v,f)),e.push(S),i>ps&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Vc(s,e,t){const n=new vi(s,e,t);return n.texture.mapping=yo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Gr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function t0(s,e,t){const n=new Float32Array(Fi),i=new L(0,1,0);return new Wt({name:"SphericalGaussianBlur",defines:{n:Fi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ol(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Gc(){return new Wt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ol(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Wc(){return new Wt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Ol(){return`

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
	`}function n0(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Aa||l===Ra,h=l===Ms||l===Ss;if(c||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Hc(s)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&i(p)?(t===null&&(t=new Hc(s)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function i0(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&ur("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function s0(s,e,t,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const p in d)e.update(d[p],s.ARRAY_BUFFER)}function c(u){const d=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const w=p.array;_=p.version;for(let x=0,v=w.length;x<v;x+=3){const S=w[x+0],T=w[x+1],b=w[x+2];d.push(S,T,T,b,b,S)}}else if(g!==void 0){const w=g.array;_=g.version;for(let x=0,v=w.length/3-1;x<v;x+=3){const S=x+0,T=x+1,b=x+2;d.push(S,T,T,b,b,S)}}else return;const m=new(Gu(d)?Yu:qu)(d,1);m.version=_;const f=r.get(u);f&&e.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function r0(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){s.drawElements(n,p,r,d*o),t.update(p,n,1)}function c(d,p,g){g!==0&&(s.drawElementsInstanced(n,p,r,d*o,g),t.update(p,n,g))}function h(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,n,1)}function u(d,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,_,0,g);let f=0;for(let w=0;w<g;w++)f+=p[w]*_[w];t.update(f,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function o0(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function a0(s,e,t){const n=new WeakMap,i=new st;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let y=function(){b.dispose(),n.delete(a),a.removeEventListener("dispose",y)};d!==void 0&&d.texture.dispose();const p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let x=0;p===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let v=a.attributes.position.count*x,S=1;v>e.maxTextureSize&&(S=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const T=new Float32Array(v*S*4*u),b=new Wu(T,v,S,u);b.type=wn,b.needsUpdate=!0;const C=x*4;for(let M=0;M<u;M++){const A=m[M],D=f[M],F=w[M],B=v*S*4*M;for(let O=0;O<A.count;O++){const N=O*C;p===!0&&(i.fromBufferAttribute(A,O),T[B+N+0]=i.x,T[B+N+1]=i.y,T[B+N+2]=i.z,T[B+N+3]=0),g===!0&&(i.fromBufferAttribute(D,O),T[B+N+4]=i.x,T[B+N+5]=i.y,T[B+N+6]=i.z,T[B+N+7]=0),_===!0&&(i.fromBufferAttribute(F,O),T[B+N+8]=i.x,T[B+N+9]=i.y,T[B+N+10]=i.z,T[B+N+11]=F.itemSize===4?i.w:1)}}d={count:u,texture:b,size:new We(v,S)},n.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];const g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function l0(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const oh=new Ot,Xc=new Ju(1,1),ah=new Wu,lh=new Jd,ch=new $u,qc=[],Yc=[],jc=new Float32Array(16),Kc=new Float32Array(9),$c=new Float32Array(4);function Us(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=qc[i];if(r===void 0&&(r=new Float32Array(i),qc[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Bt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function zt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function To(s,e){let t=Yc[e];t===void 0&&(t=new Int32Array(e),Yc[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function c0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function u0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;s.uniform2fv(this.addr,e),zt(t,e)}}function h0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;s.uniform3fv(this.addr,e),zt(t,e)}}function d0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;s.uniform4fv(this.addr,e),zt(t,e)}}function f0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,n))return;$c.set(n),s.uniformMatrix2fv(this.addr,!1,$c),zt(t,n)}}function p0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,n))return;Kc.set(n),s.uniformMatrix3fv(this.addr,!1,Kc),zt(t,n)}}function m0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,n))return;jc.set(n),s.uniformMatrix4fv(this.addr,!1,jc),zt(t,n)}}function g0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function _0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;s.uniform2iv(this.addr,e),zt(t,e)}}function v0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;s.uniform3iv(this.addr,e),zt(t,e)}}function x0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;s.uniform4iv(this.addr,e),zt(t,e)}}function y0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function M0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;s.uniform2uiv(this.addr,e),zt(t,e)}}function S0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;s.uniform3uiv(this.addr,e),zt(t,e)}}function b0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;s.uniform4uiv(this.addr,e),zt(t,e)}}function E0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Xc.compareFunction=Vu,r=Xc):r=oh,t.setTexture2D(e||r,i)}function w0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||lh,i)}function T0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||ch,i)}function A0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||ah,i)}function R0(s){switch(s){case 5126:return c0;case 35664:return u0;case 35665:return h0;case 35666:return d0;case 35674:return f0;case 35675:return p0;case 35676:return m0;case 5124:case 35670:return g0;case 35667:case 35671:return _0;case 35668:case 35672:return v0;case 35669:case 35673:return x0;case 5125:return y0;case 36294:return M0;case 36295:return S0;case 36296:return b0;case 35678:case 36198:case 36298:case 36306:case 35682:return E0;case 35679:case 36299:case 36307:return w0;case 35680:case 36300:case 36308:case 36293:return T0;case 36289:case 36303:case 36311:case 36292:return A0}}function C0(s,e){s.uniform1fv(this.addr,e)}function P0(s,e){const t=Us(e,this.size,2);s.uniform2fv(this.addr,t)}function I0(s,e){const t=Us(e,this.size,3);s.uniform3fv(this.addr,t)}function D0(s,e){const t=Us(e,this.size,4);s.uniform4fv(this.addr,t)}function L0(s,e){const t=Us(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function N0(s,e){const t=Us(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function U0(s,e){const t=Us(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function F0(s,e){s.uniform1iv(this.addr,e)}function O0(s,e){s.uniform2iv(this.addr,e)}function B0(s,e){s.uniform3iv(this.addr,e)}function z0(s,e){s.uniform4iv(this.addr,e)}function k0(s,e){s.uniform1uiv(this.addr,e)}function H0(s,e){s.uniform2uiv(this.addr,e)}function V0(s,e){s.uniform3uiv(this.addr,e)}function G0(s,e){s.uniform4uiv(this.addr,e)}function W0(s,e,t){const n=this.cache,i=e.length,r=To(t,i);Bt(n,r)||(s.uniform1iv(this.addr,r),zt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||oh,r[o])}function X0(s,e,t){const n=this.cache,i=e.length,r=To(t,i);Bt(n,r)||(s.uniform1iv(this.addr,r),zt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||lh,r[o])}function q0(s,e,t){const n=this.cache,i=e.length,r=To(t,i);Bt(n,r)||(s.uniform1iv(this.addr,r),zt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||ch,r[o])}function Y0(s,e,t){const n=this.cache,i=e.length,r=To(t,i);Bt(n,r)||(s.uniform1iv(this.addr,r),zt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||ah,r[o])}function j0(s){switch(s){case 5126:return C0;case 35664:return P0;case 35665:return I0;case 35666:return D0;case 35674:return L0;case 35675:return N0;case 35676:return U0;case 5124:case 35670:return F0;case 35667:case 35671:return O0;case 35668:case 35672:return B0;case 35669:case 35673:return z0;case 5125:return k0;case 36294:return H0;case 36295:return V0;case 36296:return G0;case 35678:case 36198:case 36298:case 36306:case 35682:return W0;case 35679:case 36299:case 36307:return X0;case 35680:case 36300:case 36308:case 36293:return q0;case 36289:case 36303:case 36311:case 36292:return Y0}}class K0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=R0(t.type)}}class $0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=j0(t.type)}}class Z0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const la=/(\w+)(\])?(\[|\.)?/g;function Zc(s,e){s.seq.push(e),s.map[e.id]=e}function J0(s,e,t){const n=s.name,i=n.length;for(la.lastIndex=0;;){const r=la.exec(n),o=la.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Zc(t,c===void 0?new K0(a,s,e):new $0(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new Z0(a),Zc(t,u)),t=u}}}class ro{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);J0(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Jc(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Q0=37297;let e_=0;function t_(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Qc=new Ze;function n_(s){nt._getMatrix(Qc,nt.workingColorSpace,s);const e=`mat3( ${Qc.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(s)){case ho:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function eu(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+t_(s.getShaderSource(e),a)}else return r}function i_(s,e){const t=n_(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function s_(s,e){let t;switch(e){case ad:t="Linear";break;case ld:t="Reinhard";break;case cd:t="Cineon";break;case ud:t="ACESFilmic";break;case dd:t="AgX";break;case fd:t="Neutral";break;case hd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Wr=new L;function r_(){nt.getLuminanceCoefficients(Wr);const s=Wr.x.toFixed(4),e=Wr.y.toFixed(4),t=Wr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function o_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Js).join(`
`)}function a_(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function l_(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Js(s){return s!==""}function tu(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nu(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const c_=/^[ \t]*#include +<([\w\d./]+)>/gm;function cl(s){return s.replace(c_,h_)}const u_=new Map;function h_(s,e){let t=Je[e];if(t===void 0){const n=u_.get(e);if(n!==void 0)t=Je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return cl(t)}const d_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function iu(s){return s.replace(d_,f_)}function f_(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function su(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function p_(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Cu?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Pu?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===$n&&(e="SHADOWMAP_TYPE_VSM"),e}function m_(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ms:case Ss:e="ENVMAP_TYPE_CUBE";break;case yo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function g_(s){let e="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===Ss&&(e="ENVMAP_MODE_REFRACTION"),e}function __(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ml:e="ENVMAP_BLENDING_MULTIPLY";break;case rd:e="ENVMAP_BLENDING_MIX";break;case od:e="ENVMAP_BLENDING_ADD";break}return e}function v_(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function x_(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=p_(t),c=m_(t),h=g_(t),u=__(t),d=v_(t),p=o_(t),g=a_(r),_=i.createProgram();let m,f,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Js).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Js).join(`
`),f.length>0&&(f+=`
`)):(m=[su(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Js).join(`
`),f=[su(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mi?"#define TONE_MAPPING":"",t.toneMapping!==mi?Je.tonemapping_pars_fragment:"",t.toneMapping!==mi?s_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,i_("linearToOutputTexel",t.outputColorSpace),r_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Js).join(`
`)),o=cl(o),o=tu(o,t),o=nu(o,t),a=cl(a),a=tu(a,t),a=nu(a,t),o=iu(o),a=iu(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Zl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=w+m+o,v=w+f+a,S=Jc(i,i.VERTEX_SHADER,x),T=Jc(i,i.FRAGMENT_SHADER,v);i.attachShader(_,S),i.attachShader(_,T),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function b(A){if(s.debug.checkShaderErrors){const D=i.getProgramInfoLog(_)||"",F=i.getShaderInfoLog(S)||"",B=i.getShaderInfoLog(T)||"",O=D.trim(),N=F.trim(),j=B.trim();let G=!0,Z=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(G=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,S,T);else{const se=eu(i,S,"vertex"),fe=eu(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+O+`
`+se+`
`+fe)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(N===""||j==="")&&(Z=!1);Z&&(A.diagnostics={runnable:G,programLog:O,vertexShader:{log:N,prefix:m},fragmentShader:{log:j,prefix:f}})}i.deleteShader(S),i.deleteShader(T),C=new ro(i,_),y=l_(i,_)}let C;this.getUniforms=function(){return C===void 0&&b(this),C};let y;this.getAttributes=function(){return y===void 0&&b(this),y};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(_,Q0)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=e_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=T,this}let y_=0;class M_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new S_(e),t.set(e,n)),n}}class S_{constructor(e){this.id=y_++,this.code=e,this.usedTimes=0}}function b_(s,e,t,n,i,r,o){const a=new Al,l=new M_,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,M,A,D,F){const B=D.fog,O=F.geometry,N=y.isMeshStandardMaterial?D.environment:null,j=(y.isMeshStandardMaterial?t:e).get(y.envMap||N),G=j&&j.mapping===yo?j.image.height:null,Z=g[y.type];y.precision!==null&&(p=i.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const se=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,fe=se!==void 0?se.length:0;let Me=0;O.morphAttributes.position!==void 0&&(Me=1),O.morphAttributes.normal!==void 0&&(Me=2),O.morphAttributes.color!==void 0&&(Me=3);let q,te,pe,z;if(Z){const je=Un[Z];q=je.vertexShader,te=je.fragmentShader}else q=y.vertexShader,te=y.fragmentShader,l.update(y),pe=l.getVertexShaderID(y),z=l.getFragmentShaderID(y);const W=s.getRenderTarget(),de=s.state.buffers.depth.getReversed(),K=F.isInstancedMesh===!0,J=F.isBatchedMesh===!0,Q=!!y.map,le=!!y.matcap,P=!!j,oe=!!y.aoMap,ce=!!y.lightMap,Se=!!y.bumpMap,re=!!y.normalMap,De=!!y.displacementMap,ue=!!y.emissiveMap,ve=!!y.metalnessMap,ke=!!y.roughnessMap,Ve=y.anisotropy>0,I=y.clearcoat>0,E=y.dispersion>0,U=y.iridescence>0,H=y.sheen>0,ee=y.transmission>0,V=Ve&&!!y.anisotropyMap,me=I&&!!y.clearcoatMap,he=I&&!!y.clearcoatNormalMap,we=I&&!!y.clearcoatRoughnessMap,xe=U&&!!y.iridescenceMap,ye=U&&!!y.iridescenceThicknessMap,ge=H&&!!y.sheenColorMap,Te=H&&!!y.sheenRoughnessMap,Re=!!y.specularMap,Ce=!!y.specularColorMap,Le=!!y.specularIntensityMap,k=ee&&!!y.transmissionMap,Ee=ee&&!!y.thicknessMap,Pe=!!y.gradientMap,Ue=!!y.alphaMap,be=y.alphaTest>0,_e=!!y.alphaHash,$=!!y.extensions;let ae=mi;y.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(ae=s.toneMapping);const Fe={shaderID:Z,shaderType:y.type,shaderName:y.name,vertexShader:q,fragmentShader:te,defines:y.defines,customVertexShaderID:pe,customFragmentShaderID:z,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:J,batchingColor:J&&F._colorsTexture!==null,instancing:K,instancingColor:K&&F.instanceColor!==null,instancingMorph:K&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:W===null?s.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:nn,alphaToCoverage:!!y.alphaToCoverage,map:Q,matcap:le,envMap:P,envMapMode:P&&j.mapping,envMapCubeUVHeight:G,aoMap:oe,lightMap:ce,bumpMap:Se,normalMap:re,displacementMap:d&&De,emissiveMap:ue,normalMapObjectSpace:re&&y.normalMapType===Md,normalMapTangentSpace:re&&y.normalMapType===El,metalnessMap:ve,roughnessMap:ke,anisotropy:Ve,anisotropyMap:V,clearcoat:I,clearcoatMap:me,clearcoatNormalMap:he,clearcoatRoughnessMap:we,dispersion:E,iridescence:U,iridescenceMap:xe,iridescenceThicknessMap:ye,sheen:H,sheenColorMap:ge,sheenRoughnessMap:Te,specularMap:Re,specularColorMap:Ce,specularIntensityMap:Le,transmission:ee,transmissionMap:k,thicknessMap:Ee,gradientMap:Pe,opaque:y.transparent===!1&&y.blending===gs&&y.alphaToCoverage===!1,alphaMap:Ue,alphaTest:be,alphaHash:_e,combine:y.combine,mapUv:Q&&_(y.map.channel),aoMapUv:oe&&_(y.aoMap.channel),lightMapUv:ce&&_(y.lightMap.channel),bumpMapUv:Se&&_(y.bumpMap.channel),normalMapUv:re&&_(y.normalMap.channel),displacementMapUv:De&&_(y.displacementMap.channel),emissiveMapUv:ue&&_(y.emissiveMap.channel),metalnessMapUv:ve&&_(y.metalnessMap.channel),roughnessMapUv:ke&&_(y.roughnessMap.channel),anisotropyMapUv:V&&_(y.anisotropyMap.channel),clearcoatMapUv:me&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:he&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Te&&_(y.sheenRoughnessMap.channel),specularMapUv:Re&&_(y.specularMap.channel),specularColorMapUv:Ce&&_(y.specularColorMap.channel),specularIntensityMapUv:Le&&_(y.specularIntensityMap.channel),transmissionMapUv:k&&_(y.transmissionMap.channel),thicknessMapUv:Ee&&_(y.thicknessMap.channel),alphaMapUv:Ue&&_(y.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(re||Ve),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!O.attributes.uv&&(Q||Ue),fog:!!B,useFog:y.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:de,skinning:F.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:Me,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&A.length>0,shadowMapType:s.shadowMap.type,toneMapping:ae,decodeVideoTexture:Q&&y.map.isVideoTexture===!0&&nt.getTransfer(y.map.colorSpace)===mt,decodeVideoTextureEmissive:ue&&y.emissiveMap.isVideoTexture===!0&&nt.getTransfer(y.emissiveMap.colorSpace)===mt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===wt,flipSided:y.side===Jt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:$&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($&&y.extensions.multiDraw===!0||J)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Fe.vertexUv1s=c.has(1),Fe.vertexUv2s=c.has(2),Fe.vertexUv3s=c.has(3),c.clear(),Fe}function f(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const A in y.defines)M.push(A),M.push(y.defines[A]);return y.isRawShaderMaterial===!1&&(w(M,y),x(M,y),M.push(s.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function w(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function x(y,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),y.push(a.mask)}function v(y){const M=g[y.type];let A;if(M){const D=Un[M];A=rl.clone(D.uniforms)}else A=y.uniforms;return A}function S(y,M){let A;for(let D=0,F=h.length;D<F;D++){const B=h[D];if(B.cacheKey===M){A=B,++A.usedTimes;break}}return A===void 0&&(A=new x_(s,M,y,r),h.push(A)),A}function T(y){if(--y.usedTimes===0){const M=h.indexOf(y);h[M]=h[h.length-1],h.pop(),y.destroy()}}function b(y){l.remove(y)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:v,acquireProgram:S,releaseProgram:T,releaseShaderCache:b,programs:h,dispose:C}}function E_(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function w_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function ru(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function ou(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,p,g,_,m){let f=s[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),e++,f}function a(u,d,p,g,_,m){const f=o(u,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):t.push(f)}function l(u,d,p,g,_,m){const f=o(u,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):t.unshift(f)}function c(u,d){t.length>1&&t.sort(u||w_),n.length>1&&n.sort(d||ru),i.length>1&&i.sort(d||ru)}function h(){for(let u=e,d=s.length;u<d;u++){const p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function T_(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new ou,s.set(n,[o])):i>=r.length?(o=new ou,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function A_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Be};break;case"SpotLight":t={position:new L,direction:new L,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new L,halfWidth:new L,halfHeight:new L};break}return s[e.id]=t,t}}}function R_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let C_=0;function P_(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function I_(s){const e=new A_,t=R_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const i=new L,r=new Ke,o=new Ke;function a(c){let h=0,u=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,w=0,x=0,v=0,S=0,T=0,b=0;c.sort(P_);for(let y=0,M=c.length;y<M;y++){const A=c[y],D=A.color,F=A.intensity,B=A.distance,O=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=D.r*F,u+=D.g*F,d+=D.b*F;else if(A.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(A.sh.coefficients[N],F);b++}else if(A.isDirectionalLight){const N=e.get(A);if(N.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const j=A.shadow,G=t.get(A);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,n.directionalShadow[p]=G,n.directionalShadowMap[p]=O,n.directionalShadowMatrix[p]=A.shadow.matrix,w++}n.directional[p]=N,p++}else if(A.isSpotLight){const N=e.get(A);N.position.setFromMatrixPosition(A.matrixWorld),N.color.copy(D).multiplyScalar(F),N.distance=B,N.coneCos=Math.cos(A.angle),N.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),N.decay=A.decay,n.spot[_]=N;const j=A.shadow;if(A.map&&(n.spotLightMap[S]=A.map,S++,j.updateMatrices(A),A.castShadow&&T++),n.spotLightMatrix[_]=j.matrix,A.castShadow){const G=t.get(A);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=O,v++}_++}else if(A.isRectAreaLight){const N=e.get(A);N.color.copy(D).multiplyScalar(F),N.halfWidth.set(A.width*.5,0,0),N.halfHeight.set(0,A.height*.5,0),n.rectArea[m]=N,m++}else if(A.isPointLight){const N=e.get(A);if(N.color.copy(A.color).multiplyScalar(A.intensity),N.distance=A.distance,N.decay=A.decay,A.castShadow){const j=A.shadow,G=t.get(A);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,G.shadowCameraNear=j.camera.near,G.shadowCameraFar=j.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=O,n.pointShadowMatrix[g]=A.shadow.matrix,x++}n.point[g]=N,g++}else if(A.isHemisphereLight){const N=e.get(A);N.skyColor.copy(A.color).multiplyScalar(F),N.groundColor.copy(A.groundColor).multiplyScalar(F),n.hemi[f]=N,f++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ie.LTC_FLOAT_1,n.rectAreaLTC2=Ie.LTC_FLOAT_2):(n.rectAreaLTC1=Ie.LTC_HALF_1,n.rectAreaLTC2=Ie.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==p||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==f||C.numDirectionalShadows!==w||C.numPointShadows!==x||C.numSpotShadows!==v||C.numSpotMaps!==S||C.numLightProbes!==b)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+S-T,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=b,C.directionalLength=p,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=f,C.numDirectionalShadows=w,C.numPointShadows=x,C.numSpotShadows=v,C.numSpotMaps=S,C.numLightProbes=b,n.version=C_++)}function l(c,h){let u=0,d=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let f=0,w=c.length;f<w;f++){const x=c[f];if(x.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),u++}else if(x.isSpotLight){const v=n.spot[p];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function au(s){const e=new I_(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function D_(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new au(s),e.set(i,[a])):r>=o.length?(a=new au(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const L_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,N_=`uniform sampler2D shadow_pass;
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
}`;function U_(s,e,t){let n=new Mo;const i=new We,r=new We,o=new st,a=new Pf({depthPacking:yd}),l=new If,c={},h=t.maxTextureSize,u={[zn]:Jt,[Jt]:zn,[wt]:wt},d=new Wt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:L_,fragmentShader:N_}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new bt;g.setAttribute("position",new Mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new $e(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cu;let f=this.type;this.render=function(T,b,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const y=s.getRenderTarget(),M=s.getActiveCubeFace(),A=s.getActiveMipmapLevel(),D=s.state;D.setBlending(pi),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const F=f!==$n&&this.type===$n,B=f===$n&&this.type!==$n;for(let O=0,N=T.length;O<N;O++){const j=T[O],G=j.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const Z=G.getFrameExtents();if(i.multiply(Z),r.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/Z.x),i.x=r.x*Z.x,G.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/Z.y),i.y=r.y*Z.y,G.mapSize.y=r.y)),G.map===null||F===!0||B===!0){const fe=this.type!==$n?{minFilter:qt,magFilter:qt}:{};G.map!==null&&G.map.dispose(),G.map=new vi(i.x,i.y,fe),G.map.texture.name=j.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();const se=G.getViewportCount();for(let fe=0;fe<se;fe++){const Me=G.getViewport(fe);o.set(r.x*Me.x,r.y*Me.y,r.x*Me.z,r.y*Me.w),D.viewport(o),G.updateMatrices(j,fe),n=G.getFrustum(),v(b,C,G.camera,j,this.type)}G.isPointLightShadow!==!0&&this.type===$n&&w(G,C),G.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(y,M,A)};function w(T,b){const C=e.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new vi(i.x,i.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(b,null,C,d,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(b,null,C,p,_,null)}function x(T,b,C,y){let M=null;const A=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(A!==void 0)M=A;else if(M=C.isPointLight===!0?l:a,s.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const D=M.uuid,F=b.uuid;let B=c[D];B===void 0&&(B={},c[D]=B);let O=B[F];O===void 0&&(O=M.clone(),B[F]=O,b.addEventListener("dispose",S)),M=O}if(M.visible=b.visible,M.wireframe=b.wireframe,y===$n?M.side=b.shadowSide!==null?b.shadowSide:b.side:M.side=b.shadowSide!==null?b.shadowSide:u[b.side],M.alphaMap=b.alphaMap,M.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,M.map=b.map,M.clipShadows=b.clipShadows,M.clippingPlanes=b.clippingPlanes,M.clipIntersection=b.clipIntersection,M.displacementMap=b.displacementMap,M.displacementScale=b.displacementScale,M.displacementBias=b.displacementBias,M.wireframeLinewidth=b.wireframeLinewidth,M.linewidth=b.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const D=s.properties.get(M);D.light=C}return M}function v(T,b,C,y,M){if(T.visible===!1)return;if(T.layers.test(b.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===$n)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);const F=e.update(T),B=T.material;if(Array.isArray(B)){const O=F.groups;for(let N=0,j=O.length;N<j;N++){const G=O[N],Z=B[G.materialIndex];if(Z&&Z.visible){const se=x(T,Z,y,M);T.onBeforeShadow(s,T,b,C,F,se,G),s.renderBufferDirect(C,null,F,se,T,G),T.onAfterShadow(s,T,b,C,F,se,G)}}}else if(B.visible){const O=x(T,B,y,M);T.onBeforeShadow(s,T,b,C,F,O,null),s.renderBufferDirect(C,null,F,O,T,null),T.onAfterShadow(s,T,b,C,F,O,null)}}const D=T.children;for(let F=0,B=D.length;F<B;F++)v(D[F],b,C,y,M)}function S(T){T.target.removeEventListener("dispose",S);for(const C in c){const y=c[C],M=T.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}const F_={[ya]:Ma,[Sa]:wa,[ba]:Ta,[ys]:Ea,[Ma]:ya,[wa]:Sa,[Ta]:ba,[Ea]:ys};function O_(s,e){function t(){let k=!1;const Ee=new st;let Pe=null;const Ue=new st(0,0,0,0);return{setMask:function(be){Pe!==be&&!k&&(s.colorMask(be,be,be,be),Pe=be)},setLocked:function(be){k=be},setClear:function(be,_e,$,ae,Fe){Fe===!0&&(be*=ae,_e*=ae,$*=ae),Ee.set(be,_e,$,ae),Ue.equals(Ee)===!1&&(s.clearColor(be,_e,$,ae),Ue.copy(Ee))},reset:function(){k=!1,Pe=null,Ue.set(-1,0,0,0)}}}function n(){let k=!1,Ee=!1,Pe=null,Ue=null,be=null;return{setReversed:function(_e){if(Ee!==_e){const $=e.get("EXT_clip_control");_e?$.clipControlEXT($.LOWER_LEFT_EXT,$.ZERO_TO_ONE_EXT):$.clipControlEXT($.LOWER_LEFT_EXT,$.NEGATIVE_ONE_TO_ONE_EXT),Ee=_e;const ae=be;be=null,this.setClear(ae)}},getReversed:function(){return Ee},setTest:function(_e){_e?W(s.DEPTH_TEST):de(s.DEPTH_TEST)},setMask:function(_e){Pe!==_e&&!k&&(s.depthMask(_e),Pe=_e)},setFunc:function(_e){if(Ee&&(_e=F_[_e]),Ue!==_e){switch(_e){case ya:s.depthFunc(s.NEVER);break;case Ma:s.depthFunc(s.ALWAYS);break;case Sa:s.depthFunc(s.LESS);break;case ys:s.depthFunc(s.LEQUAL);break;case ba:s.depthFunc(s.EQUAL);break;case Ea:s.depthFunc(s.GEQUAL);break;case wa:s.depthFunc(s.GREATER);break;case Ta:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ue=_e}},setLocked:function(_e){k=_e},setClear:function(_e){be!==_e&&(Ee&&(_e=1-_e),s.clearDepth(_e),be=_e)},reset:function(){k=!1,Pe=null,Ue=null,be=null,Ee=!1}}}function i(){let k=!1,Ee=null,Pe=null,Ue=null,be=null,_e=null,$=null,ae=null,Fe=null;return{setTest:function(je){k||(je?W(s.STENCIL_TEST):de(s.STENCIL_TEST))},setMask:function(je){Ee!==je&&!k&&(s.stencilMask(je),Ee=je)},setFunc:function(je,ot,at){(Pe!==je||Ue!==ot||be!==at)&&(s.stencilFunc(je,ot,at),Pe=je,Ue=ot,be=at)},setOp:function(je,ot,at){(_e!==je||$!==ot||ae!==at)&&(s.stencilOp(je,ot,at),_e=je,$=ot,ae=at)},setLocked:function(je){k=je},setClear:function(je){Fe!==je&&(s.clearStencil(je),Fe=je)},reset:function(){k=!1,Ee=null,Pe=null,Ue=null,be=null,_e=null,$=null,ae=null,Fe=null}}}const r=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,w=null,x=null,v=null,S=null,T=null,b=new Be(0,0,0),C=0,y=!1,M=null,A=null,D=null,F=null,B=null;const O=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,j=0;const G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(G)[1]),N=j>=1):G.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),N=j>=2);let Z=null,se={};const fe=s.getParameter(s.SCISSOR_BOX),Me=s.getParameter(s.VIEWPORT),q=new st().fromArray(fe),te=new st().fromArray(Me);function pe(k,Ee,Pe,Ue){const be=new Uint8Array(4),_e=s.createTexture();s.bindTexture(k,_e),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let $=0;$<Pe;$++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(Ee,0,s.RGBA,1,1,Ue,0,s.RGBA,s.UNSIGNED_BYTE,be):s.texImage2D(Ee+$,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,be);return _e}const z={};z[s.TEXTURE_2D]=pe(s.TEXTURE_2D,s.TEXTURE_2D,1),z[s.TEXTURE_CUBE_MAP]=pe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),z[s.TEXTURE_2D_ARRAY]=pe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),z[s.TEXTURE_3D]=pe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),W(s.DEPTH_TEST),o.setFunc(ys),Se(!1),re(ql),W(s.CULL_FACE),oe(pi);function W(k){h[k]!==!0&&(s.enable(k),h[k]=!0)}function de(k){h[k]!==!1&&(s.disable(k),h[k]=!1)}function K(k,Ee){return u[k]!==Ee?(s.bindFramebuffer(k,Ee),u[k]=Ee,k===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=Ee),k===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=Ee),!0):!1}function J(k,Ee){let Pe=p,Ue=!1;if(k){Pe=d.get(Ee),Pe===void 0&&(Pe=[],d.set(Ee,Pe));const be=k.textures;if(Pe.length!==be.length||Pe[0]!==s.COLOR_ATTACHMENT0){for(let _e=0,$=be.length;_e<$;_e++)Pe[_e]=s.COLOR_ATTACHMENT0+_e;Pe.length=be.length,Ue=!0}}else Pe[0]!==s.BACK&&(Pe[0]=s.BACK,Ue=!0);Ue&&s.drawBuffers(Pe)}function Q(k){return g!==k?(s.useProgram(k),g=k,!0):!1}const le={[Ui]:s.FUNC_ADD,[Vh]:s.FUNC_SUBTRACT,[Gh]:s.FUNC_REVERSE_SUBTRACT};le[Wh]=s.MIN,le[Xh]=s.MAX;const P={[qh]:s.ZERO,[Yh]:s.ONE,[jh]:s.SRC_COLOR,[va]:s.SRC_ALPHA,[ed]:s.SRC_ALPHA_SATURATE,[Jh]:s.DST_COLOR,[$h]:s.DST_ALPHA,[Kh]:s.ONE_MINUS_SRC_COLOR,[xa]:s.ONE_MINUS_SRC_ALPHA,[Qh]:s.ONE_MINUS_DST_COLOR,[Zh]:s.ONE_MINUS_DST_ALPHA,[td]:s.CONSTANT_COLOR,[nd]:s.ONE_MINUS_CONSTANT_COLOR,[id]:s.CONSTANT_ALPHA,[sd]:s.ONE_MINUS_CONSTANT_ALPHA};function oe(k,Ee,Pe,Ue,be,_e,$,ae,Fe,je){if(k===pi){_===!0&&(de(s.BLEND),_=!1);return}if(_===!1&&(W(s.BLEND),_=!0),k!==Hh){if(k!==m||je!==y){if((f!==Ui||v!==Ui)&&(s.blendEquation(s.FUNC_ADD),f=Ui,v=Ui),je)switch(k){case gs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ti:s.blendFunc(s.ONE,s.ONE);break;case Yl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case jl:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case gs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ti:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Yl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case jl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}w=null,x=null,S=null,T=null,b.set(0,0,0),C=0,m=k,y=je}return}be=be||Ee,_e=_e||Pe,$=$||Ue,(Ee!==f||be!==v)&&(s.blendEquationSeparate(le[Ee],le[be]),f=Ee,v=be),(Pe!==w||Ue!==x||_e!==S||$!==T)&&(s.blendFuncSeparate(P[Pe],P[Ue],P[_e],P[$]),w=Pe,x=Ue,S=_e,T=$),(ae.equals(b)===!1||Fe!==C)&&(s.blendColor(ae.r,ae.g,ae.b,Fe),b.copy(ae),C=Fe),m=k,y=!1}function ce(k,Ee){k.side===wt?de(s.CULL_FACE):W(s.CULL_FACE);let Pe=k.side===Jt;Ee&&(Pe=!Pe),Se(Pe),k.blending===gs&&k.transparent===!1?oe(pi):oe(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);const Ue=k.stencilWrite;a.setTest(Ue),Ue&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),ue(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?W(s.SAMPLE_ALPHA_TO_COVERAGE):de(s.SAMPLE_ALPHA_TO_COVERAGE)}function Se(k){M!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),M=k)}function re(k){k!==zh?(W(s.CULL_FACE),k!==A&&(k===ql?s.cullFace(s.BACK):k===kh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):de(s.CULL_FACE),A=k}function De(k){k!==D&&(N&&s.lineWidth(k),D=k)}function ue(k,Ee,Pe){k?(W(s.POLYGON_OFFSET_FILL),(F!==Ee||B!==Pe)&&(s.polygonOffset(Ee,Pe),F=Ee,B=Pe)):de(s.POLYGON_OFFSET_FILL)}function ve(k){k?W(s.SCISSOR_TEST):de(s.SCISSOR_TEST)}function ke(k){k===void 0&&(k=s.TEXTURE0+O-1),Z!==k&&(s.activeTexture(k),Z=k)}function Ve(k,Ee,Pe){Pe===void 0&&(Z===null?Pe=s.TEXTURE0+O-1:Pe=Z);let Ue=se[Pe];Ue===void 0&&(Ue={type:void 0,texture:void 0},se[Pe]=Ue),(Ue.type!==k||Ue.texture!==Ee)&&(Z!==Pe&&(s.activeTexture(Pe),Z=Pe),s.bindTexture(k,Ee||z[k]),Ue.type=k,Ue.texture=Ee)}function I(){const k=se[Z];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function E(){try{s.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function U(){try{s.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function H(){try{s.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ee(){try{s.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function V(){try{s.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function me(){try{s.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function he(){try{s.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function we(){try{s.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function xe(){try{s.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ye(){try{s.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ge(k){q.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),q.copy(k))}function Te(k){te.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),te.copy(k))}function Re(k,Ee){let Pe=c.get(Ee);Pe===void 0&&(Pe=new WeakMap,c.set(Ee,Pe));let Ue=Pe.get(k);Ue===void 0&&(Ue=s.getUniformBlockIndex(Ee,k.name),Pe.set(k,Ue))}function Ce(k,Ee){const Ue=c.get(Ee).get(k);l.get(Ee)!==Ue&&(s.uniformBlockBinding(Ee,Ue,k.__bindingPointIndex),l.set(Ee,Ue))}function Le(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},Z=null,se={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,w=null,x=null,v=null,S=null,T=null,b=new Be(0,0,0),C=0,y=!1,M=null,A=null,D=null,F=null,B=null,q.set(0,0,s.canvas.width,s.canvas.height),te.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:W,disable:de,bindFramebuffer:K,drawBuffers:J,useProgram:Q,setBlending:oe,setMaterial:ce,setFlipSided:Se,setCullFace:re,setLineWidth:De,setPolygonOffset:ue,setScissorTest:ve,activeTexture:ke,bindTexture:Ve,unbindTexture:I,compressedTexImage2D:E,compressedTexImage3D:U,texImage2D:xe,texImage3D:ye,updateUBOMapping:Re,uniformBlockBinding:Ce,texStorage2D:he,texStorage3D:we,texSubImage2D:H,texSubImage3D:ee,compressedTexSubImage2D:V,compressedTexSubImage3D:me,scissor:ge,viewport:Te,reset:Le}}function B_(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new We,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,E){return p?new OffscreenCanvas(I,E):cr("canvas")}function _(I,E,U){let H=1;const ee=Ve(I);if((ee.width>U||ee.height>U)&&(H=U/Math.max(ee.width,ee.height)),H<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const V=Math.floor(H*ee.width),me=Math.floor(H*ee.height);u===void 0&&(u=g(V,me));const he=E?g(V,me):u;return he.width=V,he.height=me,he.getContext("2d").drawImage(I,0,0,V,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+V+"x"+me+")."),he}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),I;return I}function m(I){return I.generateMipmaps}function f(I){s.generateMipmap(I)}function w(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function x(I,E,U,H,ee=!1){if(I!==null){if(s[I]!==void 0)return s[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let V=E;if(E===s.RED&&(U===s.FLOAT&&(V=s.R32F),U===s.HALF_FLOAT&&(V=s.R16F),U===s.UNSIGNED_BYTE&&(V=s.R8)),E===s.RED_INTEGER&&(U===s.UNSIGNED_BYTE&&(V=s.R8UI),U===s.UNSIGNED_SHORT&&(V=s.R16UI),U===s.UNSIGNED_INT&&(V=s.R32UI),U===s.BYTE&&(V=s.R8I),U===s.SHORT&&(V=s.R16I),U===s.INT&&(V=s.R32I)),E===s.RG&&(U===s.FLOAT&&(V=s.RG32F),U===s.HALF_FLOAT&&(V=s.RG16F),U===s.UNSIGNED_BYTE&&(V=s.RG8)),E===s.RG_INTEGER&&(U===s.UNSIGNED_BYTE&&(V=s.RG8UI),U===s.UNSIGNED_SHORT&&(V=s.RG16UI),U===s.UNSIGNED_INT&&(V=s.RG32UI),U===s.BYTE&&(V=s.RG8I),U===s.SHORT&&(V=s.RG16I),U===s.INT&&(V=s.RG32I)),E===s.RGB_INTEGER&&(U===s.UNSIGNED_BYTE&&(V=s.RGB8UI),U===s.UNSIGNED_SHORT&&(V=s.RGB16UI),U===s.UNSIGNED_INT&&(V=s.RGB32UI),U===s.BYTE&&(V=s.RGB8I),U===s.SHORT&&(V=s.RGB16I),U===s.INT&&(V=s.RGB32I)),E===s.RGBA_INTEGER&&(U===s.UNSIGNED_BYTE&&(V=s.RGBA8UI),U===s.UNSIGNED_SHORT&&(V=s.RGBA16UI),U===s.UNSIGNED_INT&&(V=s.RGBA32UI),U===s.BYTE&&(V=s.RGBA8I),U===s.SHORT&&(V=s.RGBA16I),U===s.INT&&(V=s.RGBA32I)),E===s.RGB&&(U===s.UNSIGNED_INT_5_9_9_9_REV&&(V=s.RGB9_E5),U===s.UNSIGNED_INT_10F_11F_11F_REV&&(V=s.R11F_G11F_B10F)),E===s.RGBA){const me=ee?ho:nt.getTransfer(H);U===s.FLOAT&&(V=s.RGBA32F),U===s.HALF_FLOAT&&(V=s.RGBA16F),U===s.UNSIGNED_BYTE&&(V=me===mt?s.SRGB8_ALPHA8:s.RGBA8),U===s.UNSIGNED_SHORT_4_4_4_4&&(V=s.RGBA4),U===s.UNSIGNED_SHORT_5_5_5_1&&(V=s.RGB5_A1)}return(V===s.R16F||V===s.R32F||V===s.RG16F||V===s.RG32F||V===s.RGBA16F||V===s.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function v(I,E){let U;return I?E===null||E===Hi||E===sr?U=s.DEPTH24_STENCIL8:E===wn?U=s.DEPTH32F_STENCIL8:E===ir&&(U=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Hi||E===sr?U=s.DEPTH_COMPONENT24:E===wn?U=s.DEPTH_COMPONENT32F:E===ir&&(U=s.DEPTH_COMPONENT16),U}function S(I,E){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==qt&&I.minFilter!==an?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function T(I){const E=I.target;E.removeEventListener("dispose",T),C(E),E.isVideoTexture&&h.delete(E)}function b(I){const E=I.target;E.removeEventListener("dispose",b),M(E)}function C(I){const E=n.get(I);if(E.__webglInit===void 0)return;const U=I.source,H=d.get(U);if(H){const ee=H[E.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&y(I),Object.keys(H).length===0&&d.delete(U)}n.remove(I)}function y(I){const E=n.get(I);s.deleteTexture(E.__webglTexture);const U=I.source,H=d.get(U);delete H[E.__cacheKey],o.memory.textures--}function M(I){const E=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(E.__webglFramebuffer[H]))for(let ee=0;ee<E.__webglFramebuffer[H].length;ee++)s.deleteFramebuffer(E.__webglFramebuffer[H][ee]);else s.deleteFramebuffer(E.__webglFramebuffer[H]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[H])}else{if(Array.isArray(E.__webglFramebuffer))for(let H=0;H<E.__webglFramebuffer.length;H++)s.deleteFramebuffer(E.__webglFramebuffer[H]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let H=0;H<E.__webglColorRenderbuffer.length;H++)E.__webglColorRenderbuffer[H]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[H]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const U=I.textures;for(let H=0,ee=U.length;H<ee;H++){const V=n.get(U[H]);V.__webglTexture&&(s.deleteTexture(V.__webglTexture),o.memory.textures--),n.remove(U[H])}n.remove(I)}let A=0;function D(){A=0}function F(){const I=A;return I>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+i.maxTextures),A+=1,I}function B(I){const E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function O(I,E){const U=n.get(I);if(I.isVideoTexture&&ve(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&U.__version!==I.version){const H=I.image;if(H===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{z(U,I,E);return}}else I.isExternalTexture&&(U.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,U.__webglTexture,s.TEXTURE0+E)}function N(I,E){const U=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&U.__version!==I.version){z(U,I,E);return}t.bindTexture(s.TEXTURE_2D_ARRAY,U.__webglTexture,s.TEXTURE0+E)}function j(I,E){const U=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&U.__version!==I.version){z(U,I,E);return}t.bindTexture(s.TEXTURE_3D,U.__webglTexture,s.TEXTURE0+E)}function G(I,E){const U=n.get(I);if(I.version>0&&U.__version!==I.version){W(U,I,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+E)}const Z={[ki]:s.REPEAT,[fi]:s.CLAMP_TO_EDGE,[co]:s.MIRRORED_REPEAT},se={[qt]:s.NEAREST,[Du]:s.NEAREST_MIPMAP_NEAREST,[Zs]:s.NEAREST_MIPMAP_LINEAR,[an]:s.LINEAR,[Qr]:s.LINEAR_MIPMAP_NEAREST,[On]:s.LINEAR_MIPMAP_LINEAR},fe={[Sd]:s.NEVER,[Rd]:s.ALWAYS,[bd]:s.LESS,[Vu]:s.LEQUAL,[Ed]:s.EQUAL,[Ad]:s.GEQUAL,[wd]:s.GREATER,[Td]:s.NOTEQUAL};function Me(I,E){if(E.type===wn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===an||E.magFilter===Qr||E.magFilter===Zs||E.magFilter===On||E.minFilter===an||E.minFilter===Qr||E.minFilter===Zs||E.minFilter===On)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,Z[E.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,Z[E.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,Z[E.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,se[E.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,se[E.minFilter]),E.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,fe[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===qt||E.minFilter!==Zs&&E.minFilter!==On||E.type===wn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");s.texParameterf(I,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function q(I,E){let U=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",T));const H=E.source;let ee=d.get(H);ee===void 0&&(ee={},d.set(H,ee));const V=B(E);if(V!==I.__cacheKey){ee[V]===void 0&&(ee[V]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,U=!0),ee[V].usedTimes++;const me=ee[I.__cacheKey];me!==void 0&&(ee[I.__cacheKey].usedTimes--,me.usedTimes===0&&y(E)),I.__cacheKey=V,I.__webglTexture=ee[V].texture}return U}function te(I,E,U){return Math.floor(Math.floor(I/U)/E)}function pe(I,E,U,H){const V=I.updateRanges;if(V.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,U,H,E.data);else{V.sort((ye,ge)=>ye.start-ge.start);let me=0;for(let ye=1;ye<V.length;ye++){const ge=V[me],Te=V[ye],Re=ge.start+ge.count,Ce=te(Te.start,E.width,4),Le=te(ge.start,E.width,4);Te.start<=Re+1&&Ce===Le&&te(Te.start+Te.count-1,E.width,4)===Ce?ge.count=Math.max(ge.count,Te.start+Te.count-ge.start):(++me,V[me]=Te)}V.length=me+1;const he=s.getParameter(s.UNPACK_ROW_LENGTH),we=s.getParameter(s.UNPACK_SKIP_PIXELS),xe=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let ye=0,ge=V.length;ye<ge;ye++){const Te=V[ye],Re=Math.floor(Te.start/4),Ce=Math.ceil(Te.count/4),Le=Re%E.width,k=Math.floor(Re/E.width),Ee=Ce,Pe=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Le),s.pixelStorei(s.UNPACK_SKIP_ROWS,k),t.texSubImage2D(s.TEXTURE_2D,0,Le,k,Ee,Pe,U,H,E.data)}I.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,he),s.pixelStorei(s.UNPACK_SKIP_PIXELS,we),s.pixelStorei(s.UNPACK_SKIP_ROWS,xe)}}function z(I,E,U){let H=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(H=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(H=s.TEXTURE_3D);const ee=q(I,E),V=E.source;t.bindTexture(H,I.__webglTexture,s.TEXTURE0+U);const me=n.get(V);if(V.version!==me.__version||ee===!0){t.activeTexture(s.TEXTURE0+U);const he=nt.getPrimaries(nt.workingColorSpace),we=E.colorSpace===di?null:nt.getPrimaries(E.colorSpace),xe=E.colorSpace===di||he===we?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let ye=_(E.image,!1,i.maxTextureSize);ye=ke(E,ye);const ge=r.convert(E.format,E.colorSpace),Te=r.convert(E.type);let Re=x(E.internalFormat,ge,Te,E.colorSpace,E.isVideoTexture);Me(H,E);let Ce;const Le=E.mipmaps,k=E.isVideoTexture!==!0,Ee=me.__version===void 0||ee===!0,Pe=V.dataReady,Ue=S(E,ye);if(E.isDepthTexture)Re=v(E.format===or,E.type),Ee&&(k?t.texStorage2D(s.TEXTURE_2D,1,Re,ye.width,ye.height):t.texImage2D(s.TEXTURE_2D,0,Re,ye.width,ye.height,0,ge,Te,null));else if(E.isDataTexture)if(Le.length>0){k&&Ee&&t.texStorage2D(s.TEXTURE_2D,Ue,Re,Le[0].width,Le[0].height);for(let be=0,_e=Le.length;be<_e;be++)Ce=Le[be],k?Pe&&t.texSubImage2D(s.TEXTURE_2D,be,0,0,Ce.width,Ce.height,ge,Te,Ce.data):t.texImage2D(s.TEXTURE_2D,be,Re,Ce.width,Ce.height,0,ge,Te,Ce.data);E.generateMipmaps=!1}else k?(Ee&&t.texStorage2D(s.TEXTURE_2D,Ue,Re,ye.width,ye.height),Pe&&pe(E,ye,ge,Te)):t.texImage2D(s.TEXTURE_2D,0,Re,ye.width,ye.height,0,ge,Te,ye.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){k&&Ee&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ue,Re,Le[0].width,Le[0].height,ye.depth);for(let be=0,_e=Le.length;be<_e;be++)if(Ce=Le[be],E.format!==vn)if(ge!==null)if(k){if(Pe)if(E.layerUpdates.size>0){const $=Oc(Ce.width,Ce.height,E.format,E.type);for(const ae of E.layerUpdates){const Fe=Ce.data.subarray(ae*$/Ce.data.BYTES_PER_ELEMENT,(ae+1)*$/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,be,0,0,ae,Ce.width,Ce.height,1,ge,Fe)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,be,0,0,0,Ce.width,Ce.height,ye.depth,ge,Ce.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,be,Re,Ce.width,Ce.height,ye.depth,0,Ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?Pe&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,be,0,0,0,Ce.width,Ce.height,ye.depth,ge,Te,Ce.data):t.texImage3D(s.TEXTURE_2D_ARRAY,be,Re,Ce.width,Ce.height,ye.depth,0,ge,Te,Ce.data)}else{k&&Ee&&t.texStorage2D(s.TEXTURE_2D,Ue,Re,Le[0].width,Le[0].height);for(let be=0,_e=Le.length;be<_e;be++)Ce=Le[be],E.format!==vn?ge!==null?k?Pe&&t.compressedTexSubImage2D(s.TEXTURE_2D,be,0,0,Ce.width,Ce.height,ge,Ce.data):t.compressedTexImage2D(s.TEXTURE_2D,be,Re,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Pe&&t.texSubImage2D(s.TEXTURE_2D,be,0,0,Ce.width,Ce.height,ge,Te,Ce.data):t.texImage2D(s.TEXTURE_2D,be,Re,Ce.width,Ce.height,0,ge,Te,Ce.data)}else if(E.isDataArrayTexture)if(k){if(Ee&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ue,Re,ye.width,ye.height,ye.depth),Pe)if(E.layerUpdates.size>0){const be=Oc(ye.width,ye.height,E.format,E.type);for(const _e of E.layerUpdates){const $=ye.data.subarray(_e*be/ye.data.BYTES_PER_ELEMENT,(_e+1)*be/ye.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,_e,ye.width,ye.height,1,ge,Te,$)}E.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,ge,Te,ye.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Re,ye.width,ye.height,ye.depth,0,ge,Te,ye.data);else if(E.isData3DTexture)k?(Ee&&t.texStorage3D(s.TEXTURE_3D,Ue,Re,ye.width,ye.height,ye.depth),Pe&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,ge,Te,ye.data)):t.texImage3D(s.TEXTURE_3D,0,Re,ye.width,ye.height,ye.depth,0,ge,Te,ye.data);else if(E.isFramebufferTexture){if(Ee)if(k)t.texStorage2D(s.TEXTURE_2D,Ue,Re,ye.width,ye.height);else{let be=ye.width,_e=ye.height;for(let $=0;$<Ue;$++)t.texImage2D(s.TEXTURE_2D,$,Re,be,_e,0,ge,Te,null),be>>=1,_e>>=1}}else if(Le.length>0){if(k&&Ee){const be=Ve(Le[0]);t.texStorage2D(s.TEXTURE_2D,Ue,Re,be.width,be.height)}for(let be=0,_e=Le.length;be<_e;be++)Ce=Le[be],k?Pe&&t.texSubImage2D(s.TEXTURE_2D,be,0,0,ge,Te,Ce):t.texImage2D(s.TEXTURE_2D,be,Re,ge,Te,Ce);E.generateMipmaps=!1}else if(k){if(Ee){const be=Ve(ye);t.texStorage2D(s.TEXTURE_2D,Ue,Re,be.width,be.height)}Pe&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ge,Te,ye)}else t.texImage2D(s.TEXTURE_2D,0,Re,ge,Te,ye);m(E)&&f(H),me.__version=V.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function W(I,E,U){if(E.image.length!==6)return;const H=q(I,E),ee=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+U);const V=n.get(ee);if(ee.version!==V.__version||H===!0){t.activeTexture(s.TEXTURE0+U);const me=nt.getPrimaries(nt.workingColorSpace),he=E.colorSpace===di?null:nt.getPrimaries(E.colorSpace),we=E.colorSpace===di||me===he?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const xe=E.isCompressedTexture||E.image[0].isCompressedTexture,ye=E.image[0]&&E.image[0].isDataTexture,ge=[];for(let _e=0;_e<6;_e++)!xe&&!ye?ge[_e]=_(E.image[_e],!0,i.maxCubemapSize):ge[_e]=ye?E.image[_e].image:E.image[_e],ge[_e]=ke(E,ge[_e]);const Te=ge[0],Re=r.convert(E.format,E.colorSpace),Ce=r.convert(E.type),Le=x(E.internalFormat,Re,Ce,E.colorSpace),k=E.isVideoTexture!==!0,Ee=V.__version===void 0||H===!0,Pe=ee.dataReady;let Ue=S(E,Te);Me(s.TEXTURE_CUBE_MAP,E);let be;if(xe){k&&Ee&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ue,Le,Te.width,Te.height);for(let _e=0;_e<6;_e++){be=ge[_e].mipmaps;for(let $=0;$<be.length;$++){const ae=be[$];E.format!==vn?Re!==null?k?Pe&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,$,0,0,ae.width,ae.height,Re,ae.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,$,Le,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Pe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,$,0,0,ae.width,ae.height,Re,Ce,ae.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,$,Le,ae.width,ae.height,0,Re,Ce,ae.data)}}}else{if(be=E.mipmaps,k&&Ee){be.length>0&&Ue++;const _e=Ve(ge[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ue,Le,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(ye){k?Pe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,ge[_e].width,ge[_e].height,Re,Ce,ge[_e].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Le,ge[_e].width,ge[_e].height,0,Re,Ce,ge[_e].data);for(let $=0;$<be.length;$++){const Fe=be[$].image[_e].image;k?Pe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,$+1,0,0,Fe.width,Fe.height,Re,Ce,Fe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,$+1,Le,Fe.width,Fe.height,0,Re,Ce,Fe.data)}}else{k?Pe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Re,Ce,ge[_e]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Le,Re,Ce,ge[_e]);for(let $=0;$<be.length;$++){const ae=be[$];k?Pe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,$+1,0,0,Re,Ce,ae.image[_e]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,$+1,Le,Re,Ce,ae.image[_e])}}}m(E)&&f(s.TEXTURE_CUBE_MAP),V.__version=ee.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function de(I,E,U,H,ee,V){const me=r.convert(U.format,U.colorSpace),he=r.convert(U.type),we=x(U.internalFormat,me,he,U.colorSpace),xe=n.get(E),ye=n.get(U);if(ye.__renderTarget=E,!xe.__hasExternalTextures){const ge=Math.max(1,E.width>>V),Te=Math.max(1,E.height>>V);ee===s.TEXTURE_3D||ee===s.TEXTURE_2D_ARRAY?t.texImage3D(ee,V,we,ge,Te,E.depth,0,me,he,null):t.texImage2D(ee,V,we,ge,Te,0,me,he,null)}t.bindFramebuffer(s.FRAMEBUFFER,I),ue(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,H,ee,ye.__webglTexture,0,De(E)):(ee===s.TEXTURE_2D||ee>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,H,ee,ye.__webglTexture,V),t.bindFramebuffer(s.FRAMEBUFFER,null)}function K(I,E,U){if(s.bindRenderbuffer(s.RENDERBUFFER,I),E.depthBuffer){const H=E.depthTexture,ee=H&&H.isDepthTexture?H.type:null,V=v(E.stencilBuffer,ee),me=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=De(E);ue(E)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,he,V,E.width,E.height):U?s.renderbufferStorageMultisample(s.RENDERBUFFER,he,V,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,V,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,I)}else{const H=E.textures;for(let ee=0;ee<H.length;ee++){const V=H[ee],me=r.convert(V.format,V.colorSpace),he=r.convert(V.type),we=x(V.internalFormat,me,he,V.colorSpace),xe=De(E);U&&ue(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,xe,we,E.width,E.height):ue(E)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,xe,we,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,we,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function J(I,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const H=n.get(E.depthTexture);H.__renderTarget=E,(!H.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),O(E.depthTexture,0);const ee=H.__webglTexture,V=De(E);if(E.depthTexture.format===rr)ue(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ee,0,V):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ee,0);else if(E.depthTexture.format===or)ue(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ee,0,V):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Q(I){const E=n.get(I),U=I.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==I.depthTexture){const H=I.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),H){const ee=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,H.removeEventListener("dispose",ee)};H.addEventListener("dispose",ee),E.__depthDisposeCallback=ee}E.__boundDepthTexture=H}if(I.depthTexture&&!E.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");const H=I.texture.mipmaps;H&&H.length>0?J(E.__webglFramebuffer[0],I):J(E.__webglFramebuffer,I)}else if(U){E.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[H]),E.__webglDepthbuffer[H]===void 0)E.__webglDepthbuffer[H]=s.createRenderbuffer(),K(E.__webglDepthbuffer[H],I,!1);else{const ee=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,V=E.__webglDepthbuffer[H];s.bindRenderbuffer(s.RENDERBUFFER,V),s.framebufferRenderbuffer(s.FRAMEBUFFER,ee,s.RENDERBUFFER,V)}}else{const H=I.texture.mipmaps;if(H&&H.length>0?t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),K(E.__webglDepthbuffer,I,!1);else{const ee=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,V=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,V),s.framebufferRenderbuffer(s.FRAMEBUFFER,ee,s.RENDERBUFFER,V)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function le(I,E,U){const H=n.get(I);E!==void 0&&de(H.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),U!==void 0&&Q(I)}function P(I){const E=I.texture,U=n.get(I),H=n.get(E);I.addEventListener("dispose",b);const ee=I.textures,V=I.isWebGLCubeRenderTarget===!0,me=ee.length>1;if(me||(H.__webglTexture===void 0&&(H.__webglTexture=s.createTexture()),H.__version=E.version,o.memory.textures++),V){U.__webglFramebuffer=[];for(let he=0;he<6;he++)if(E.mipmaps&&E.mipmaps.length>0){U.__webglFramebuffer[he]=[];for(let we=0;we<E.mipmaps.length;we++)U.__webglFramebuffer[he][we]=s.createFramebuffer()}else U.__webglFramebuffer[he]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){U.__webglFramebuffer=[];for(let he=0;he<E.mipmaps.length;he++)U.__webglFramebuffer[he]=s.createFramebuffer()}else U.__webglFramebuffer=s.createFramebuffer();if(me)for(let he=0,we=ee.length;he<we;he++){const xe=n.get(ee[he]);xe.__webglTexture===void 0&&(xe.__webglTexture=s.createTexture(),o.memory.textures++)}if(I.samples>0&&ue(I)===!1){U.__webglMultisampledFramebuffer=s.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let he=0;he<ee.length;he++){const we=ee[he];U.__webglColorRenderbuffer[he]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,U.__webglColorRenderbuffer[he]);const xe=r.convert(we.format,we.colorSpace),ye=r.convert(we.type),ge=x(we.internalFormat,xe,ye,we.colorSpace,I.isXRRenderTarget===!0),Te=De(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,Te,ge,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.RENDERBUFFER,U.__webglColorRenderbuffer[he])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(U.__webglDepthRenderbuffer=s.createRenderbuffer(),K(U.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(V){t.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture),Me(s.TEXTURE_CUBE_MAP,E);for(let he=0;he<6;he++)if(E.mipmaps&&E.mipmaps.length>0)for(let we=0;we<E.mipmaps.length;we++)de(U.__webglFramebuffer[he][we],I,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+he,we);else de(U.__webglFramebuffer[he],I,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(E)&&f(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){for(let he=0,we=ee.length;he<we;he++){const xe=ee[he],ye=n.get(xe);let ge=s.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ge=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ge,ye.__webglTexture),Me(ge,xe),de(U.__webglFramebuffer,I,xe,s.COLOR_ATTACHMENT0+he,ge,0),m(xe)&&f(ge)}t.unbindTexture()}else{let he=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(he=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(he,H.__webglTexture),Me(he,E),E.mipmaps&&E.mipmaps.length>0)for(let we=0;we<E.mipmaps.length;we++)de(U.__webglFramebuffer[we],I,E,s.COLOR_ATTACHMENT0,he,we);else de(U.__webglFramebuffer,I,E,s.COLOR_ATTACHMENT0,he,0);m(E)&&f(he),t.unbindTexture()}I.depthBuffer&&Q(I)}function oe(I){const E=I.textures;for(let U=0,H=E.length;U<H;U++){const ee=E[U];if(m(ee)){const V=w(I),me=n.get(ee).__webglTexture;t.bindTexture(V,me),f(V),t.unbindTexture()}}}const ce=[],Se=[];function re(I){if(I.samples>0){if(ue(I)===!1){const E=I.textures,U=I.width,H=I.height;let ee=s.COLOR_BUFFER_BIT;const V=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,me=n.get(I),he=E.length>1;if(he)for(let xe=0;xe<E.length;xe++)t.bindFramebuffer(s.FRAMEBUFFER,me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer);const we=I.texture.mipmaps;we&&we.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let xe=0;xe<E.length;xe++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ee|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ee|=s.STENCIL_BUFFER_BIT)),he){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,me.__webglColorRenderbuffer[xe]);const ye=n.get(E[xe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ye,0)}s.blitFramebuffer(0,0,U,H,0,0,U,H,ee,s.NEAREST),l===!0&&(ce.length=0,Se.length=0,ce.push(s.COLOR_ATTACHMENT0+xe),I.depthBuffer&&I.resolveDepthBuffer===!1&&(ce.push(V),Se.push(V),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Se)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ce))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),he)for(let xe=0;xe<E.length;xe++){t.bindFramebuffer(s.FRAMEBUFFER,me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.RENDERBUFFER,me.__webglColorRenderbuffer[xe]);const ye=n.get(E[xe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.TEXTURE_2D,ye,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){const E=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function De(I){return Math.min(i.maxSamples,I.samples)}function ue(I){const E=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ve(I){const E=o.render.frame;h.get(I)!==E&&(h.set(I,E),I.update())}function ke(I,E){const U=I.colorSpace,H=I.format,ee=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||U!==nn&&U!==di&&(nt.getTransfer(U)===mt?(H!==vn||ee!==kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),E}function Ve(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=D,this.setTexture2D=O,this.setTexture2DArray=N,this.setTexture3D=j,this.setTextureCube=G,this.rebindTextures=le,this.setupRenderTarget=P,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=de,this.useMultisampledRTT=ue}function z_(s,e){function t(n,i=di){let r;const o=nt.getTransfer(i);if(n===kn)return s.UNSIGNED_BYTE;if(n===_l)return s.UNSIGNED_SHORT_4_4_4_4;if(n===vl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Uu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Fu)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Lu)return s.BYTE;if(n===Nu)return s.SHORT;if(n===ir)return s.UNSIGNED_SHORT;if(n===gl)return s.INT;if(n===Hi)return s.UNSIGNED_INT;if(n===wn)return s.FLOAT;if(n===fr)return s.HALF_FLOAT;if(n===Ou)return s.ALPHA;if(n===Bu)return s.RGB;if(n===vn)return s.RGBA;if(n===rr)return s.DEPTH_COMPONENT;if(n===or)return s.DEPTH_STENCIL;if(n===xl)return s.RED;if(n===yl)return s.RED_INTEGER;if(n===zu)return s.RG;if(n===Ml)return s.RG_INTEGER;if(n===Sl)return s.RGBA_INTEGER;if(n===eo||n===to||n===no||n===io)if(o===mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===eo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===to)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===no)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===eo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===to)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===no)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===io)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ca||n===Pa||n===Ia||n===Da)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ca)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Pa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ia)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Da)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===La||n===Na||n===Ua)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===La||n===Na)return o===mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ua)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Fa||n===Oa||n===Ba||n===za||n===ka||n===Ha||n===Va||n===Ga||n===Wa||n===Xa||n===qa||n===Ya||n===ja||n===Ka)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Fa)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Oa)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ba)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===za)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ka)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ha)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Va)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ga)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Wa)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Xa)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===qa)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ya)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ja)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ka)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===$a||n===Za||n===Ja)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===$a)return o===mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Za)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ja)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Qa||n===el||n===tl||n===nl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Qa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===el)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===tl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===nl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===sr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const k_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,H_=`
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

}`;class V_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Qu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Wt({vertexShader:k_,fragmentShader:H_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $e(new Mi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class G_ extends xi{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null;const _=typeof XRWebGLBinding<"u",m=new V_,f={},w=t.getContextAttributes();let x=null,v=null;const S=[],T=[],b=new We;let C=null;const y=new $t;y.viewport=new st;const M=new $t;M.viewport=new st;const A=[y,M],D=new $f;let F=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let W=S[z];return W===void 0&&(W=new Ko,S[z]=W),W.getTargetRaySpace()},this.getControllerGrip=function(z){let W=S[z];return W===void 0&&(W=new Ko,S[z]=W),W.getGripSpace()},this.getHand=function(z){let W=S[z];return W===void 0&&(W=new Ko,S[z]=W),W.getHandSpace()};function O(z){const W=T.indexOf(z.inputSource);if(W===-1)return;const de=S[W];de!==void 0&&(de.update(z.inputSource,z.frame,c||o),de.dispatchEvent({type:z.type,data:z.inputSource}))}function N(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",j);for(let z=0;z<S.length;z++){const W=T[z];W!==null&&(T[z]=null,S[z].disconnect(W))}F=null,B=null,m.reset();for(const z in f)delete f[z];e.setRenderTarget(x),p=null,d=null,u=null,i=null,v=null,pe.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(z){if(i=z,i!==null){if(x=e.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",N),i.addEventListener("inputsourceschange",j),w.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(b),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,K=null,J=null;w.depth&&(J=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=w.stencil?or:rr,K=w.stencil?sr:Hi);const Q={colorFormat:t.RGBA8,depthFormat:J,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Q),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new vi(d.textureWidth,d.textureHeight,{format:vn,type:kn,depthTexture:new Ju(d.textureWidth,d.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const de={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,de),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new vi(p.framebufferWidth,p.framebufferHeight,{format:vn,type:kn,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),pe.setContext(i),pe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function j(z){for(let W=0;W<z.removed.length;W++){const de=z.removed[W],K=T.indexOf(de);K>=0&&(T[K]=null,S[K].disconnect(de))}for(let W=0;W<z.added.length;W++){const de=z.added[W];let K=T.indexOf(de);if(K===-1){for(let Q=0;Q<S.length;Q++)if(Q>=T.length){T.push(de),K=Q;break}else if(T[Q]===null){T[Q]=de,K=Q;break}if(K===-1)break}const J=S[K];J&&J.connect(de)}}const G=new L,Z=new L;function se(z,W,de){G.setFromMatrixPosition(W.matrixWorld),Z.setFromMatrixPosition(de.matrixWorld);const K=G.distanceTo(Z),J=W.projectionMatrix.elements,Q=de.projectionMatrix.elements,le=J[14]/(J[10]-1),P=J[14]/(J[10]+1),oe=(J[9]+1)/J[5],ce=(J[9]-1)/J[5],Se=(J[8]-1)/J[0],re=(Q[8]+1)/Q[0],De=le*Se,ue=le*re,ve=K/(-Se+re),ke=ve*-Se;if(W.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(ke),z.translateZ(ve),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert(),J[10]===-1)z.projectionMatrix.copy(W.projectionMatrix),z.projectionMatrixInverse.copy(W.projectionMatrixInverse);else{const Ve=le+ve,I=P+ve,E=De-ke,U=ue+(K-ke),H=oe*P/I*Ve,ee=ce*P/I*Ve;z.projectionMatrix.makePerspective(E,U,H,ee,Ve,I),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}}function fe(z,W){W===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(W.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(i===null)return;let W=z.near,de=z.far;m.texture!==null&&(m.depthNear>0&&(W=m.depthNear),m.depthFar>0&&(de=m.depthFar)),D.near=M.near=y.near=W,D.far=M.far=y.far=de,(F!==D.near||B!==D.far)&&(i.updateRenderState({depthNear:D.near,depthFar:D.far}),F=D.near,B=D.far),D.layers.mask=z.layers.mask|6,y.layers.mask=D.layers.mask&3,M.layers.mask=D.layers.mask&5;const K=z.parent,J=D.cameras;fe(D,K);for(let Q=0;Q<J.length;Q++)fe(J[Q],K);J.length===2?se(D,y,M):D.projectionMatrix.copy(y.projectionMatrix),Me(z,D,K)};function Me(z,W,de){de===null?z.matrix.copy(W.matrixWorld):(z.matrix.copy(de.matrixWorld),z.matrix.invert(),z.matrix.multiply(W.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(W.projectionMatrix),z.projectionMatrixInverse.copy(W.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=bs*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(z){l=z,d!==null&&(d.fixedFoveation=z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(z){return f[z]};let q=null;function te(z,W){if(h=W.getViewerPose(c||o),g=W,h!==null){const de=h.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let K=!1;de.length!==D.cameras.length&&(D.cameras.length=0,K=!0);for(let P=0;P<de.length;P++){const oe=de[P];let ce=null;if(p!==null)ce=p.getViewport(oe);else{const re=u.getViewSubImage(d,oe);ce=re.viewport,P===0&&(e.setRenderTargetTextures(v,re.colorTexture,re.depthStencilTexture),e.setRenderTarget(v))}let Se=A[P];Se===void 0&&(Se=new $t,Se.layers.enable(P),Se.viewport=new st,A[P]=Se),Se.matrix.fromArray(oe.transform.matrix),Se.matrix.decompose(Se.position,Se.quaternion,Se.scale),Se.projectionMatrix.fromArray(oe.projectionMatrix),Se.projectionMatrixInverse.copy(Se.projectionMatrix).invert(),Se.viewport.set(ce.x,ce.y,ce.width,ce.height),P===0&&(D.matrix.copy(Se.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),K===!0&&D.cameras.push(Se)}const J=i.enabledFeatures;if(J&&J.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const P=u.getDepthInformation(de[0]);P&&P.isValid&&P.texture&&m.init(P,i.renderState)}if(J&&J.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let P=0;P<de.length;P++){const oe=de[P].camera;if(oe){let ce=f[oe];ce||(ce=new Qu,f[oe]=ce);const Se=u.getCameraImage(oe);ce.sourceTexture=Se}}}}for(let de=0;de<S.length;de++){const K=T[de],J=S[de];K!==null&&J!==void 0&&J.update(K,W,c||o)}q&&q(z,W),W.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:W}),g=null}const pe=new rh;pe.setAnimationLoop(te),this.setAnimationLoop=function(z){q=z},this.dispose=function(){}}}const Ci=new xn,W_=new Ke;function X_(s,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,ju(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,w,x,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,v)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,w,x):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Jt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Jt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const w=e.get(f),x=w.envMap,v=w.envMapRotation;x&&(m.envMap.value=x,Ci.copy(v),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),m.envMapRotation.value.setFromMatrix4(W_.makeRotationFromEuler(Ci)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,w,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*w,m.scale.value=x*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,w){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Jt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const w=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function q_(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,x){const v=x.program;n.uniformBlockBinding(w,v)}function c(w,x){let v=i[w.id];v===void 0&&(g(w),v=h(w),i[w.id]=v,w.addEventListener("dispose",m));const S=x.program;n.updateUBOMapping(w,S);const T=e.render.frame;r[w.id]!==T&&(d(w),r[w.id]=T)}function h(w){const x=u();w.__bindingPointIndex=x;const v=s.createBuffer(),S=w.__size,T=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,S,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,v),v}function u(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){const x=i[w.id],v=w.uniforms,S=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let T=0,b=v.length;T<b;T++){const C=Array.isArray(v[T])?v[T]:[v[T]];for(let y=0,M=C.length;y<M;y++){const A=C[y];if(p(A,T,y,S)===!0){const D=A.__offset,F=Array.isArray(A.value)?A.value:[A.value];let B=0;for(let O=0;O<F.length;O++){const N=F[O],j=_(N);typeof N=="number"||typeof N=="boolean"?(A.__data[0]=N,s.bufferSubData(s.UNIFORM_BUFFER,D+B,A.__data)):N.isMatrix3?(A.__data[0]=N.elements[0],A.__data[1]=N.elements[1],A.__data[2]=N.elements[2],A.__data[3]=0,A.__data[4]=N.elements[3],A.__data[5]=N.elements[4],A.__data[6]=N.elements[5],A.__data[7]=0,A.__data[8]=N.elements[6],A.__data[9]=N.elements[7],A.__data[10]=N.elements[8],A.__data[11]=0):(N.toArray(A.__data,B),B+=j.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,D,A.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(w,x,v,S){const T=w.value,b=x+"_"+v;if(S[b]===void 0)return typeof T=="number"||typeof T=="boolean"?S[b]=T:S[b]=T.clone(),!0;{const C=S[b];if(typeof T=="number"||typeof T=="boolean"){if(C!==T)return S[b]=T,!0}else if(C.equals(T)===!1)return C.copy(T),!0}return!1}function g(w){const x=w.uniforms;let v=0;const S=16;for(let b=0,C=x.length;b<C;b++){const y=Array.isArray(x[b])?x[b]:[x[b]];for(let M=0,A=y.length;M<A;M++){const D=y[M],F=Array.isArray(D.value)?D.value:[D.value];for(let B=0,O=F.length;B<O;B++){const N=F[B],j=_(N),G=v%S,Z=G%j.boundary,se=G+Z;v+=Z,se!==0&&S-se<j.storage&&(v+=S-se),D.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=v,v+=j.storage}}}const T=v%S;return T>0&&(v+=S-T),w.__size=v,w.__cache={},this}function _(w){const x={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(x.boundary=4,x.storage=4):w.isVector2?(x.boundary=8,x.storage=8):w.isVector3||w.isColor?(x.boundary=16,x.storage=12):w.isVector4?(x.boundary=16,x.storage=16):w.isMatrix3?(x.boundary=48,x.storage=48):w.isMatrix4?(x.boundary=64,x.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),x}function m(w){const x=w.target;x.removeEventListener("dispose",m);const v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function f(){for(const w in i)s.deleteBuffer(i[w]);o=[],i={},r={}}return{bind:l,update:c,dispose:f}}class Y_{constructor(e={}){const{canvas:t=Xd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const w=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let S=!1;this._outputColorSpace=Ht;let T=0,b=0,C=null,y=-1,M=null;const A=new st,D=new st;let F=null;const B=new Be(0);let O=0,N=t.width,j=t.height,G=1,Z=null,se=null;const fe=new st(0,0,N,j),Me=new st(0,0,N,j);let q=!1;const te=new Mo;let pe=!1,z=!1;const W=new Ke,de=new L,K=new st,J={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Q=!1;function le(){return C===null?G:1}let P=n;function oe(R,X){return t.getContext(R,X)}try{const R={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${pl}`),t.addEventListener("webglcontextlost",Pe,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",be,!1),P===null){const X="webgl2";if(P=oe(X,R),P===null)throw oe(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ce,Se,re,De,ue,ve,ke,Ve,I,E,U,H,ee,V,me,he,we,xe,ye,ge,Te,Re,Ce,Le;function k(){ce=new i0(P),ce.init(),Re=new z_(P,ce),Se=new $g(P,ce,e,Re),re=new O_(P,ce),Se.reversedDepthBuffer&&d&&re.buffers.depth.setReversed(!0),De=new o0(P),ue=new E_,ve=new B_(P,ce,re,ue,Se,Re,De),ke=new Jg(v),Ve=new n0(v),I=new dp(P),Ce=new jg(P,I),E=new s0(P,I,De,Ce),U=new l0(P,E,I,De),ye=new a0(P,Se,ve),he=new Zg(ue),H=new b_(v,ke,Ve,ce,Se,Ce,he),ee=new X_(v,ue),V=new T_,me=new D_(ce),xe=new Yg(v,ke,Ve,re,U,p,l),we=new U_(v,U,Se),Le=new q_(P,De,Se,re),ge=new Kg(P,ce,De),Te=new r0(P,ce,De),De.programs=H.programs,v.capabilities=Se,v.extensions=ce,v.properties=ue,v.renderLists=V,v.shadowMap=we,v.state=re,v.info=De}k();const Ee=new G_(v,P);this.xr=Ee,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const R=ce.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ce.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(R){R!==void 0&&(G=R,this.setSize(N,j,!1))},this.getSize=function(R){return R.set(N,j)},this.setSize=function(R,X,ne=!0){if(Ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=R,j=X,t.width=Math.floor(R*G),t.height=Math.floor(X*G),ne===!0&&(t.style.width=R+"px",t.style.height=X+"px"),this.setViewport(0,0,R,X)},this.getDrawingBufferSize=function(R){return R.set(N*G,j*G).floor()},this.setDrawingBufferSize=function(R,X,ne){N=R,j=X,G=ne,t.width=Math.floor(R*ne),t.height=Math.floor(X*ne),this.setViewport(0,0,R,X)},this.getCurrentViewport=function(R){return R.copy(A)},this.getViewport=function(R){return R.copy(fe)},this.setViewport=function(R,X,ne,ie){R.isVector4?fe.set(R.x,R.y,R.z,R.w):fe.set(R,X,ne,ie),re.viewport(A.copy(fe).multiplyScalar(G).round())},this.getScissor=function(R){return R.copy(Me)},this.setScissor=function(R,X,ne,ie){R.isVector4?Me.set(R.x,R.y,R.z,R.w):Me.set(R,X,ne,ie),re.scissor(D.copy(Me).multiplyScalar(G).round())},this.getScissorTest=function(){return q},this.setScissorTest=function(R){re.setScissorTest(q=R)},this.setOpaqueSort=function(R){Z=R},this.setTransparentSort=function(R){se=R},this.getClearColor=function(R){return R.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor(...arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha(...arguments)},this.clear=function(R=!0,X=!0,ne=!0){let ie=0;if(R){let Y=!1;if(C!==null){const Ae=C.texture.format;Y=Ae===Sl||Ae===Ml||Ae===yl}if(Y){const Ae=C.texture.type,Ne=Ae===kn||Ae===Hi||Ae===ir||Ae===sr||Ae===_l||Ae===vl,ze=xe.getClearColor(),Oe=xe.getClearAlpha(),qe=ze.r,Ye=ze.g,He=ze.b;Ne?(g[0]=qe,g[1]=Ye,g[2]=He,g[3]=Oe,P.clearBufferuiv(P.COLOR,0,g)):(_[0]=qe,_[1]=Ye,_[2]=He,_[3]=Oe,P.clearBufferiv(P.COLOR,0,_))}else ie|=P.COLOR_BUFFER_BIT}X&&(ie|=P.DEPTH_BUFFER_BIT),ne&&(ie|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",be,!1),xe.dispose(),V.dispose(),me.dispose(),ue.dispose(),ke.dispose(),Ve.dispose(),U.dispose(),Ce.dispose(),Le.dispose(),H.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",at),Ee.removeEventListener("sessionend",ht),lt.stop()};function Pe(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const R=De.autoReset,X=we.enabled,ne=we.autoUpdate,ie=we.needsUpdate,Y=we.type;k(),De.autoReset=R,we.enabled=X,we.autoUpdate=ne,we.needsUpdate=ie,we.type=Y}function be(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function _e(R){const X=R.target;X.removeEventListener("dispose",_e),$(X)}function $(R){ae(R),ue.remove(R)}function ae(R){const X=ue.get(R).programs;X!==void 0&&(X.forEach(function(ne){H.releaseProgram(ne)}),R.isShaderMaterial&&H.releaseShaderCache(R))}this.renderBufferDirect=function(R,X,ne,ie,Y,Ae){X===null&&(X=J);const Ne=Y.isMesh&&Y.matrixWorld.determinant()<0,ze=ii(R,X,ne,ie,Y);re.setMaterial(ie,Ne);let Oe=ne.index,qe=1;if(ie.wireframe===!0){if(Oe=E.getWireframeAttribute(ne),Oe===void 0)return;qe=2}const Ye=ne.drawRange,He=ne.attributes.position;let tt=Ye.start*qe,pt=(Ye.start+Ye.count)*qe;Ae!==null&&(tt=Math.max(tt,Ae.start*qe),pt=Math.min(pt,(Ae.start+Ae.count)*qe)),Oe!==null?(tt=Math.max(tt,0),pt=Math.min(pt,Oe.count)):He!=null&&(tt=Math.max(tt,0),pt=Math.min(pt,He.count));const Pt=pt-tt;if(Pt<0||Pt===1/0)return;Ce.setup(Y,ie,ze,ne,Oe);let St,vt=ge;if(Oe!==null&&(St=I.get(Oe),vt=Te,vt.setIndex(St)),Y.isMesh)ie.wireframe===!0?(re.setLineWidth(ie.wireframeLinewidth*le()),vt.setMode(P.LINES)):vt.setMode(P.TRIANGLES);else if(Y.isLine){let Ge=ie.linewidth;Ge===void 0&&(Ge=1),re.setLineWidth(Ge*le()),Y.isLineSegments?vt.setMode(P.LINES):Y.isLineLoop?vt.setMode(P.LINE_LOOP):vt.setMode(P.LINE_STRIP)}else Y.isPoints?vt.setMode(P.POINTS):Y.isSprite&&vt.setMode(P.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)ur("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),vt.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(ce.get("WEBGL_multi_draw"))vt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Ge=Y._multiDrawStarts,At=Y._multiDrawCounts,rt=Y._multiDrawCount,cn=Oe?I.get(Oe).bytesPerElement:1,qi=ue.get(ie).currentProgram.getUniforms();for(let un=0;un<rt;un++)qi.setValue(P,"_gl_DrawID",un),vt.render(Ge[un]/cn,At[un])}else if(Y.isInstancedMesh)vt.renderInstances(tt,Pt,Y.count);else if(ne.isInstancedBufferGeometry){const Ge=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,At=Math.min(ne.instanceCount,Ge);vt.renderInstances(tt,Pt,At)}else vt.render(tt,Pt)};function Fe(R,X,ne){R.transparent===!0&&R.side===wt&&R.forceSinglePass===!1?(R.side=Jt,R.needsUpdate=!0,Ln(R,X,ne),R.side=zn,R.needsUpdate=!0,Ln(R,X,ne),R.side=wt):Ln(R,X,ne)}this.compile=function(R,X,ne=null){ne===null&&(ne=R),f=me.get(ne),f.init(X),x.push(f),ne.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(f.pushLight(Y),Y.castShadow&&f.pushShadow(Y))}),R!==ne&&R.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(f.pushLight(Y),Y.castShadow&&f.pushShadow(Y))}),f.setupLights();const ie=new Set;return R.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Ae=Y.material;if(Ae)if(Array.isArray(Ae))for(let Ne=0;Ne<Ae.length;Ne++){const ze=Ae[Ne];Fe(ze,ne,Y),ie.add(ze)}else Fe(Ae,ne,Y),ie.add(Ae)}),f=x.pop(),ie},this.compileAsync=function(R,X,ne=null){const ie=this.compile(R,X,ne);return new Promise(Y=>{function Ae(){if(ie.forEach(function(Ne){ue.get(Ne).currentProgram.isReady()&&ie.delete(Ne)}),ie.size===0){Y(R);return}setTimeout(Ae,10)}ce.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let je=null;function ot(R){je&&je(R)}function at(){lt.stop()}function ht(){lt.start()}const lt=new rh;lt.setAnimationLoop(ot),typeof self<"u"&&lt.setContext(self),this.setAnimationLoop=function(R){je=R,Ee.setAnimationLoop(R),R===null?lt.stop():lt.start()},Ee.addEventListener("sessionstart",at),Ee.addEventListener("sessionend",ht),this.render=function(R,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(X),X=Ee.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,X,C),f=me.get(R,x.length),f.init(X),x.push(f),W.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),te.setFromProjectionMatrix(W,Bn,X.reversedDepth),z=this.localClippingEnabled,pe=he.init(this.clippingPlanes,z),m=V.get(R,w.length),m.init(),w.push(m),Ee.enabled===!0&&Ee.isPresenting===!0){const Ae=v.xr.getDepthSensingMesh();Ae!==null&&ct(Ae,X,-1/0,v.sortObjects)}ct(R,X,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(Z,se),Q=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,Q&&xe.addToRenderList(m,R),this.info.render.frame++,pe===!0&&he.beginShadows();const ne=f.state.shadowsArray;we.render(ne,R,X),pe===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();const ie=m.opaque,Y=m.transmissive;if(f.setupLights(),X.isArrayCamera){const Ae=X.cameras;if(Y.length>0)for(let Ne=0,ze=Ae.length;Ne<ze;Ne++){const Oe=Ae[Ne];Si(ie,Y,R,Oe)}Q&&xe.render(R);for(let Ne=0,ze=Ae.length;Ne<ze;Ne++){const Oe=Ae[Ne];Et(m,R,Oe,Oe.viewport)}}else Y.length>0&&Si(ie,Y,R,X),Q&&xe.render(R),Et(m,R,X);C!==null&&b===0&&(ve.updateMultisampleRenderTarget(C),ve.updateRenderTargetMipmap(C)),R.isScene===!0&&R.onAfterRender(v,R,X),Ce.resetDefaultState(),y=-1,M=null,x.pop(),x.length>0?(f=x[x.length-1],pe===!0&&he.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function ct(R,X,ne,ie){if(R.visible===!1)return;if(R.layers.test(X.layers)){if(R.isGroup)ne=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(X);else if(R.isLight)f.pushLight(R),R.castShadow&&f.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||te.intersectsSprite(R)){ie&&K.setFromMatrixPosition(R.matrixWorld).applyMatrix4(W);const Ne=U.update(R),ze=R.material;ze.visible&&m.push(R,Ne,ze,ne,K.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||te.intersectsObject(R))){const Ne=U.update(R),ze=R.material;if(ie&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),K.copy(R.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),K.copy(Ne.boundingSphere.center)),K.applyMatrix4(R.matrixWorld).applyMatrix4(W)),Array.isArray(ze)){const Oe=Ne.groups;for(let qe=0,Ye=Oe.length;qe<Ye;qe++){const He=Oe[qe],tt=ze[He.materialIndex];tt&&tt.visible&&m.push(R,Ne,tt,ne,K.z,He)}}else ze.visible&&m.push(R,Ne,ze,ne,K.z,null)}}const Ae=R.children;for(let Ne=0,ze=Ae.length;Ne<ze;Ne++)ct(Ae[Ne],X,ne,ie)}function Et(R,X,ne,ie){const Y=R.opaque,Ae=R.transmissive,Ne=R.transparent;f.setupLightsView(ne),pe===!0&&he.setGlobalState(v.clippingPlanes,ne),ie&&re.viewport(A.copy(ie)),Y.length>0&&fn(Y,X,ne),Ae.length>0&&fn(Ae,X,ne),Ne.length>0&&fn(Ne,X,ne),re.buffers.depth.setTest(!0),re.buffers.depth.setMask(!0),re.buffers.color.setMask(!0),re.setPolygonOffset(!1)}function Si(R,X,ne,ie){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[ie.id]===void 0&&(f.state.transmissionRenderTarget[ie.id]=new vi(1,1,{generateMipmaps:!0,type:ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float")?fr:kn,minFilter:On,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));const Ae=f.state.transmissionRenderTarget[ie.id],Ne=ie.viewport||A;Ae.setSize(Ne.z*v.transmissionResolutionScale,Ne.w*v.transmissionResolutionScale);const ze=v.getRenderTarget(),Oe=v.getActiveCubeFace(),qe=v.getActiveMipmapLevel();v.setRenderTarget(Ae),v.getClearColor(B),O=v.getClearAlpha(),O<1&&v.setClearColor(16777215,.5),v.clear(),Q&&xe.render(ne);const Ye=v.toneMapping;v.toneMapping=mi;const He=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),f.setupLightsView(ie),pe===!0&&he.setGlobalState(v.clippingPlanes,ie),fn(R,ne,ie),ve.updateMultisampleRenderTarget(Ae),ve.updateRenderTargetMipmap(Ae),ce.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let pt=0,Pt=X.length;pt<Pt;pt++){const St=X[pt],vt=St.object,Ge=St.geometry,At=St.material,rt=St.group;if(At.side===wt&&vt.layers.test(ie.layers)){const cn=At.side;At.side=Jt,At.needsUpdate=!0,ni(vt,ne,ie,Ge,At,rt),At.side=cn,At.needsUpdate=!0,tt=!0}}tt===!0&&(ve.updateMultisampleRenderTarget(Ae),ve.updateRenderTargetMipmap(Ae))}v.setRenderTarget(ze,Oe,qe),v.setClearColor(B,O),He!==void 0&&(ie.viewport=He),v.toneMapping=Ye}function fn(R,X,ne){const ie=X.isScene===!0?X.overrideMaterial:null;for(let Y=0,Ae=R.length;Y<Ae;Y++){const Ne=R[Y],ze=Ne.object,Oe=Ne.geometry,qe=Ne.group;let Ye=Ne.material;Ye.allowOverride===!0&&ie!==null&&(Ye=ie),ze.layers.test(ne.layers)&&ni(ze,X,ne,Oe,Ye,qe)}}function ni(R,X,ne,ie,Y,Ae){R.onBeforeRender(v,X,ne,ie,Y,Ae),R.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Y.onBeforeRender(v,X,ne,ie,R,Ae),Y.transparent===!0&&Y.side===wt&&Y.forceSinglePass===!1?(Y.side=Jt,Y.needsUpdate=!0,v.renderBufferDirect(ne,X,ie,Y,R,Ae),Y.side=zn,Y.needsUpdate=!0,v.renderBufferDirect(ne,X,ie,Y,R,Ae),Y.side=wt):v.renderBufferDirect(ne,X,ie,Y,R,Ae),R.onAfterRender(v,X,ne,ie,Y,Ae)}function Ln(R,X,ne){X.isScene!==!0&&(X=J);const ie=ue.get(R),Y=f.state.lights,Ae=f.state.shadowsArray,Ne=Y.state.version,ze=H.getParameters(R,Y.state,Ae,X,ne),Oe=H.getProgramCacheKey(ze);let qe=ie.programs;ie.environment=R.isMeshStandardMaterial?X.environment:null,ie.fog=X.fog,ie.envMap=(R.isMeshStandardMaterial?Ve:ke).get(R.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&R.envMap===null?X.environmentRotation:R.envMapRotation,qe===void 0&&(R.addEventListener("dispose",_e),qe=new Map,ie.programs=qe);let Ye=qe.get(Oe);if(Ye!==void 0){if(ie.currentProgram===Ye&&ie.lightsStateVersion===Ne)return _r(R,ze),Ye}else ze.uniforms=H.getUniforms(R),R.onBeforeCompile(ze,v),Ye=H.acquireProgram(ze,Oe),qe.set(Oe,Ye),ie.uniforms=ze.uniforms;const He=ie.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(He.clippingPlanes=he.uniform),_r(R,ze),ie.needsLights=Uh(R),ie.lightsStateVersion=Ne,ie.needsLights&&(He.ambientLightColor.value=Y.state.ambient,He.lightProbe.value=Y.state.probe,He.directionalLights.value=Y.state.directional,He.directionalLightShadows.value=Y.state.directionalShadow,He.spotLights.value=Y.state.spot,He.spotLightShadows.value=Y.state.spotShadow,He.rectAreaLights.value=Y.state.rectArea,He.ltc_1.value=Y.state.rectAreaLTC1,He.ltc_2.value=Y.state.rectAreaLTC2,He.pointLights.value=Y.state.point,He.pointLightShadows.value=Y.state.pointShadow,He.hemisphereLights.value=Y.state.hemi,He.directionalShadowMap.value=Y.state.directionalShadowMap,He.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,He.spotShadowMap.value=Y.state.spotShadowMap,He.spotLightMatrix.value=Y.state.spotLightMatrix,He.spotLightMap.value=Y.state.spotLightMap,He.pointShadowMap.value=Y.state.pointShadowMap,He.pointShadowMatrix.value=Y.state.pointShadowMatrix),ie.currentProgram=Ye,ie.uniformsList=null,Ye}function zs(R){if(R.uniformsList===null){const X=R.currentProgram.getUniforms();R.uniformsList=ro.seqWithValue(X.seq,R.uniforms)}return R.uniformsList}function _r(R,X){const ne=ue.get(R);ne.outputColorSpace=X.outputColorSpace,ne.batching=X.batching,ne.batchingColor=X.batchingColor,ne.instancing=X.instancing,ne.instancingColor=X.instancingColor,ne.instancingMorph=X.instancingMorph,ne.skinning=X.skinning,ne.morphTargets=X.morphTargets,ne.morphNormals=X.morphNormals,ne.morphColors=X.morphColors,ne.morphTargetsCount=X.morphTargetsCount,ne.numClippingPlanes=X.numClippingPlanes,ne.numIntersection=X.numClipIntersection,ne.vertexAlphas=X.vertexAlphas,ne.vertexTangents=X.vertexTangents,ne.toneMapping=X.toneMapping}function ii(R,X,ne,ie,Y){X.isScene!==!0&&(X=J),ve.resetTextureUnits();const Ae=X.fog,Ne=ie.isMeshStandardMaterial?X.environment:null,ze=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:nn,Oe=(ie.isMeshStandardMaterial?Ve:ke).get(ie.envMap||Ne),qe=ie.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,Ye=!!ne.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),He=!!ne.morphAttributes.position,tt=!!ne.morphAttributes.normal,pt=!!ne.morphAttributes.color;let Pt=mi;ie.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Pt=v.toneMapping);const St=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,vt=St!==void 0?St.length:0,Ge=ue.get(ie),At=f.state.lights;if(pe===!0&&(z===!0||R!==M)){const Qt=R===M&&ie.id===y;he.setState(ie,R,Qt)}let rt=!1;ie.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==At.state.version||Ge.outputColorSpace!==ze||Y.isBatchedMesh&&Ge.batching===!1||!Y.isBatchedMesh&&Ge.batching===!0||Y.isBatchedMesh&&Ge.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Ge.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Ge.instancing===!1||!Y.isInstancedMesh&&Ge.instancing===!0||Y.isSkinnedMesh&&Ge.skinning===!1||!Y.isSkinnedMesh&&Ge.skinning===!0||Y.isInstancedMesh&&Ge.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ge.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Ge.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Ge.instancingMorph===!1&&Y.morphTexture!==null||Ge.envMap!==Oe||ie.fog===!0&&Ge.fog!==Ae||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==he.numPlanes||Ge.numIntersection!==he.numIntersection)||Ge.vertexAlphas!==qe||Ge.vertexTangents!==Ye||Ge.morphTargets!==He||Ge.morphNormals!==tt||Ge.morphColors!==pt||Ge.toneMapping!==Pt||Ge.morphTargetsCount!==vt)&&(rt=!0):(rt=!0,Ge.__version=ie.version);let cn=Ge.currentProgram;rt===!0&&(cn=Ln(ie,X,Y));let qi=!1,un=!1,ks=!1;const Rt=cn.getUniforms(),pn=Ge.uniforms;if(re.useProgram(cn.program)&&(qi=!0,un=!0,ks=!0),ie.id!==y&&(y=ie.id,un=!0),qi||M!==R){re.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Rt.setValue(P,"projectionMatrix",R.projectionMatrix),Rt.setValue(P,"viewMatrix",R.matrixWorldInverse);const sn=Rt.map.cameraPosition;sn!==void 0&&sn.setValue(P,de.setFromMatrixPosition(R.matrixWorld)),Se.logarithmicDepthBuffer&&Rt.setValue(P,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Rt.setValue(P,"isOrthographic",R.isOrthographicCamera===!0),M!==R&&(M=R,un=!0,ks=!0)}if(Y.isSkinnedMesh){Rt.setOptional(P,Y,"bindMatrix"),Rt.setOptional(P,Y,"bindMatrixInverse");const Qt=Y.skeleton;Qt&&(Qt.boneTexture===null&&Qt.computeBoneTexture(),Rt.setValue(P,"boneTexture",Qt.boneTexture,ve))}Y.isBatchedMesh&&(Rt.setOptional(P,Y,"batchingTexture"),Rt.setValue(P,"batchingTexture",Y._matricesTexture,ve),Rt.setOptional(P,Y,"batchingIdTexture"),Rt.setValue(P,"batchingIdTexture",Y._indirectTexture,ve),Rt.setOptional(P,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Rt.setValue(P,"batchingColorTexture",Y._colorsTexture,ve));const mn=ne.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&ye.update(Y,ne,cn),(un||Ge.receiveShadow!==Y.receiveShadow)&&(Ge.receiveShadow=Y.receiveShadow,Rt.setValue(P,"receiveShadow",Y.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(pn.envMap.value=Oe,pn.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&X.environment!==null&&(pn.envMapIntensity.value=X.environmentIntensity),un&&(Rt.setValue(P,"toneMappingExposure",v.toneMappingExposure),Ge.needsLights&&Nh(pn,ks),Ae&&ie.fog===!0&&ee.refreshFogUniforms(pn,Ae),ee.refreshMaterialUniforms(pn,ie,G,j,f.state.transmissionRenderTarget[R.id]),ro.upload(P,zs(Ge),pn,ve)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(ro.upload(P,zs(Ge),pn,ve),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Rt.setValue(P,"center",Y.center),Rt.setValue(P,"modelViewMatrix",Y.modelViewMatrix),Rt.setValue(P,"normalMatrix",Y.normalMatrix),Rt.setValue(P,"modelMatrix",Y.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const Qt=ie.uniformsGroups;for(let sn=0,Ao=Qt.length;sn<Ao;sn++){const bi=Qt[sn];Le.update(bi,cn),Le.bind(bi,cn)}}return cn}function Nh(R,X){R.ambientLightColor.needsUpdate=X,R.lightProbe.needsUpdate=X,R.directionalLights.needsUpdate=X,R.directionalLightShadows.needsUpdate=X,R.pointLights.needsUpdate=X,R.pointLightShadows.needsUpdate=X,R.spotLights.needsUpdate=X,R.spotLightShadows.needsUpdate=X,R.rectAreaLights.needsUpdate=X,R.hemisphereLights.needsUpdate=X}function Uh(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(R,X,ne){const ie=ue.get(R);ie.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),ue.get(R.texture).__webglTexture=X,ue.get(R.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:ne,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,X){const ne=ue.get(R);ne.__webglFramebuffer=X,ne.__useDefaultFramebuffer=X===void 0};const Fh=P.createFramebuffer();this.setRenderTarget=function(R,X=0,ne=0){C=R,T=X,b=ne;let ie=!0,Y=null,Ae=!1,Ne=!1;if(R){const Oe=ue.get(R);if(Oe.__useDefaultFramebuffer!==void 0)re.bindFramebuffer(P.FRAMEBUFFER,null),ie=!1;else if(Oe.__webglFramebuffer===void 0)ve.setupRenderTarget(R);else if(Oe.__hasExternalTextures)ve.rebindTextures(R,ue.get(R.texture).__webglTexture,ue.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const He=R.depthTexture;if(Oe.__boundDepthTexture!==He){if(He!==null&&ue.has(He)&&(R.width!==He.image.width||R.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ve.setupDepthRenderbuffer(R)}}const qe=R.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Ne=!0);const Ye=ue.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ye[X])?Y=Ye[X][ne]:Y=Ye[X],Ae=!0):R.samples>0&&ve.useMultisampledRTT(R)===!1?Y=ue.get(R).__webglMultisampledFramebuffer:Array.isArray(Ye)?Y=Ye[ne]:Y=Ye,A.copy(R.viewport),D.copy(R.scissor),F=R.scissorTest}else A.copy(fe).multiplyScalar(G).floor(),D.copy(Me).multiplyScalar(G).floor(),F=q;if(ne!==0&&(Y=Fh),re.bindFramebuffer(P.FRAMEBUFFER,Y)&&ie&&re.drawBuffers(R,Y),re.viewport(A),re.scissor(D),re.setScissorTest(F),Ae){const Oe=ue.get(R.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+X,Oe.__webglTexture,ne)}else if(Ne){const Oe=X;for(let qe=0;qe<R.textures.length;qe++){const Ye=ue.get(R.textures[qe]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+qe,Ye.__webglTexture,ne,Oe)}}else if(R!==null&&ne!==0){const Oe=ue.get(R.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Oe.__webglTexture,ne)}y=-1},this.readRenderTargetPixels=function(R,X,ne,ie,Y,Ae,Ne,ze=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=ue.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ne!==void 0&&(Oe=Oe[Ne]),Oe){re.bindFramebuffer(P.FRAMEBUFFER,Oe);try{const qe=R.textures[ze],Ye=qe.format,He=qe.type;if(!Se.textureFormatReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Se.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=R.width-ie&&ne>=0&&ne<=R.height-Y&&(R.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ze),P.readPixels(X,ne,ie,Y,Re.convert(Ye),Re.convert(He),Ae))}finally{const qe=C!==null?ue.get(C).__webglFramebuffer:null;re.bindFramebuffer(P.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(R,X,ne,ie,Y,Ae,Ne,ze=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=ue.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ne!==void 0&&(Oe=Oe[Ne]),Oe)if(X>=0&&X<=R.width-ie&&ne>=0&&ne<=R.height-Y){re.bindFramebuffer(P.FRAMEBUFFER,Oe);const qe=R.textures[ze],Ye=qe.format,He=qe.type;if(!Se.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Se.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const tt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,tt),P.bufferData(P.PIXEL_PACK_BUFFER,Ae.byteLength,P.STREAM_READ),R.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ze),P.readPixels(X,ne,ie,Y,Re.convert(Ye),Re.convert(He),0);const pt=C!==null?ue.get(C).__webglFramebuffer:null;re.bindFramebuffer(P.FRAMEBUFFER,pt);const Pt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await qd(P,Pt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,tt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,Ae),P.deleteBuffer(tt),P.deleteSync(Pt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,X=null,ne=0){const ie=Math.pow(2,-ne),Y=Math.floor(R.image.width*ie),Ae=Math.floor(R.image.height*ie),Ne=X!==null?X.x:0,ze=X!==null?X.y:0;ve.setTexture2D(R,0),P.copyTexSubImage2D(P.TEXTURE_2D,ne,0,0,Ne,ze,Y,Ae),re.unbindTexture()};const Oh=P.createFramebuffer(),Bh=P.createFramebuffer();this.copyTextureToTexture=function(R,X,ne=null,ie=null,Y=0,Ae=null){Ae===null&&(Y!==0?(ur("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ae=Y,Y=0):Ae=0);let Ne,ze,Oe,qe,Ye,He,tt,pt,Pt;const St=R.isCompressedTexture?R.mipmaps[Ae]:R.image;if(ne!==null)Ne=ne.max.x-ne.min.x,ze=ne.max.y-ne.min.y,Oe=ne.isBox3?ne.max.z-ne.min.z:1,qe=ne.min.x,Ye=ne.min.y,He=ne.isBox3?ne.min.z:0;else{const mn=Math.pow(2,-Y);Ne=Math.floor(St.width*mn),ze=Math.floor(St.height*mn),R.isDataArrayTexture?Oe=St.depth:R.isData3DTexture?Oe=Math.floor(St.depth*mn):Oe=1,qe=0,Ye=0,He=0}ie!==null?(tt=ie.x,pt=ie.y,Pt=ie.z):(tt=0,pt=0,Pt=0);const vt=Re.convert(X.format),Ge=Re.convert(X.type);let At;X.isData3DTexture?(ve.setTexture3D(X,0),At=P.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(ve.setTexture2DArray(X,0),At=P.TEXTURE_2D_ARRAY):(ve.setTexture2D(X,0),At=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,X.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,X.unpackAlignment);const rt=P.getParameter(P.UNPACK_ROW_LENGTH),cn=P.getParameter(P.UNPACK_IMAGE_HEIGHT),qi=P.getParameter(P.UNPACK_SKIP_PIXELS),un=P.getParameter(P.UNPACK_SKIP_ROWS),ks=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,St.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,St.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,qe),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ye),P.pixelStorei(P.UNPACK_SKIP_IMAGES,He);const Rt=R.isDataArrayTexture||R.isData3DTexture,pn=X.isDataArrayTexture||X.isData3DTexture;if(R.isDepthTexture){const mn=ue.get(R),Qt=ue.get(X),sn=ue.get(mn.__renderTarget),Ao=ue.get(Qt.__renderTarget);re.bindFramebuffer(P.READ_FRAMEBUFFER,sn.__webglFramebuffer),re.bindFramebuffer(P.DRAW_FRAMEBUFFER,Ao.__webglFramebuffer);for(let bi=0;bi<Oe;bi++)Rt&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ue.get(R).__webglTexture,Y,He+bi),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ue.get(X).__webglTexture,Ae,Pt+bi)),P.blitFramebuffer(qe,Ye,Ne,ze,tt,pt,Ne,ze,P.DEPTH_BUFFER_BIT,P.NEAREST);re.bindFramebuffer(P.READ_FRAMEBUFFER,null),re.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(Y!==0||R.isRenderTargetTexture||ue.has(R)){const mn=ue.get(R),Qt=ue.get(X);re.bindFramebuffer(P.READ_FRAMEBUFFER,Oh),re.bindFramebuffer(P.DRAW_FRAMEBUFFER,Bh);for(let sn=0;sn<Oe;sn++)Rt?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,mn.__webglTexture,Y,He+sn):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,mn.__webglTexture,Y),pn?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Qt.__webglTexture,Ae,Pt+sn):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Qt.__webglTexture,Ae),Y!==0?P.blitFramebuffer(qe,Ye,Ne,ze,tt,pt,Ne,ze,P.COLOR_BUFFER_BIT,P.NEAREST):pn?P.copyTexSubImage3D(At,Ae,tt,pt,Pt+sn,qe,Ye,Ne,ze):P.copyTexSubImage2D(At,Ae,tt,pt,qe,Ye,Ne,ze);re.bindFramebuffer(P.READ_FRAMEBUFFER,null),re.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else pn?R.isDataTexture||R.isData3DTexture?P.texSubImage3D(At,Ae,tt,pt,Pt,Ne,ze,Oe,vt,Ge,St.data):X.isCompressedArrayTexture?P.compressedTexSubImage3D(At,Ae,tt,pt,Pt,Ne,ze,Oe,vt,St.data):P.texSubImage3D(At,Ae,tt,pt,Pt,Ne,ze,Oe,vt,Ge,St):R.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,Ae,tt,pt,Ne,ze,vt,Ge,St.data):R.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,Ae,tt,pt,St.width,St.height,vt,St.data):P.texSubImage2D(P.TEXTURE_2D,Ae,tt,pt,Ne,ze,vt,Ge,St);P.pixelStorei(P.UNPACK_ROW_LENGTH,rt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,cn),P.pixelStorei(P.UNPACK_SKIP_PIXELS,qi),P.pixelStorei(P.UNPACK_SKIP_ROWS,un),P.pixelStorei(P.UNPACK_SKIP_IMAGES,ks),Ae===0&&X.generateMipmaps&&P.generateMipmap(At),re.unbindTexture()},this.initRenderTarget=function(R){ue.get(R).__webglFramebuffer===void 0&&ve.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ve.setTextureCube(R,0):R.isData3DTexture?ve.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ve.setTexture2DArray(R,0):ve.setTexture2D(R,0),re.unbindTexture()},this.resetState=function(){T=0,b=0,C=null,re.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}}const Fs=ih;let Rs=0,hr=0,uh=!1;const j_=Fs.onStart,K_=Fs.onProgress,$_=Fs.onLoad;function dr(){const s=document.querySelector("#sea-loading");if(!s)return;const e=s.querySelector(".sea-loading-progress");if(!e)return;const t=uh?100:Rs?Math.min(95,Math.round(hr/Rs*95)):0;e.style.width=t+"%",e.setAttribute("role","progressbar"),e.setAttribute("aria-valuemin","0"),e.setAttribute("aria-valuemax","100"),e.setAttribute("aria-valuenow",String(t))}Fs.onStart=(s,e,t)=>{Rs=Math.max(Rs,t),hr=Math.max(hr,e),j_?.(s,e,t),dr()};Fs.onProgress=(s,e,t)=>{Rs=Math.max(Rs,t),hr=Math.max(hr,e),K_?.(s,e,t),dr()};Fs.onLoad=()=>{$_?.(),dr()};const hh=new MutationObserver(()=>{const s=document.querySelector("#sea-loading");s&&(s.classList.contains("sea-loading-done")?(uh=!0,dr(),hh.disconnect()):dr())});hh.observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["class"]});function lu(s,e){if(e===vd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===il||e===Hu){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===il)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class _o extends Ns{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new tv(t)}),this.register(function(t){return new nv(t)}),this.register(function(t){return new hv(t)}),this.register(function(t){return new dv(t)}),this.register(function(t){return new fv(t)}),this.register(function(t){return new sv(t)}),this.register(function(t){return new rv(t)}),this.register(function(t){return new ov(t)}),this.register(function(t){return new av(t)}),this.register(function(t){return new ev(t)}),this.register(function(t){return new lv(t)}),this.register(function(t){return new iv(t)}),this.register(function(t){return new uv(t)}),this.register(function(t){return new cv(t)}),this.register(function(t){return new J_(t)}),this.register(function(t){return new pv(t)}),this.register(function(t){return new mv(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=nr.extractUrlBase(e);o=nr.resolveURL(c,this.path)}else o=nr.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new sh(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===dh){try{o[et.KHR_BINARY_GLTF]=new gv(e)}catch(u){i&&i(u);return}r=JSON.parse(o[et.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Cv(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case et.KHR_MATERIALS_UNLIT:o[u]=new Q_;break;case et.KHR_DRACO_MESH_COMPRESSION:o[u]=new _v(r,this.dracoLoader);break;case et.KHR_TEXTURE_TRANSFORM:o[u]=new vv;break;case et.KHR_MESH_QUANTIZATION:o[u]=new xv;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function Z_(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const et={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class J_{constructor(e){this.parser=e,this.name=et.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new Be(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],nn);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new so(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Yf(h),c.distance=u;break;case"spot":c=new Xf(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Nn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class Q_{constructor(){this.name=et.KHR_MATERIALS_UNLIT}getMaterialType(){return Xt}extendParams(e,t,n){const i=[];e.color=new Be(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],nn),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Ht))}return Promise.all(i)}}class ev{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class tv{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new We(a,a)}return Promise.all(r)}}class nv{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class iv{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class sv{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Be(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],nn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ht)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class rv{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class ov{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Be().setRGB(a[0],a[1],a[2],nn),Promise.all(r)}}class av{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class lv{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Be().setRGB(a[0],a[1],a[2],nn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Ht)),Promise.all(r)}}class cv{constructor(e){this.parser=e,this.name=et.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class uv{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class hv{constructor(e){this.parser=e,this.name=et.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class dv{constructor(e){this.parser=e,this.name=et.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class fv{constructor(e){this.parser=e,this.name=et.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class pv{constructor(e){this.name=et.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(p),h,u,d,i.mode,i.filter),p})})}else return null}}class mv{constructor(e){this.name=et.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==_n.TRIANGLES&&c.mode!==_n.TRIANGLE_STRIP&&c.mode!==_n.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,p=[];for(const g of u){const _=new Ke,m=new L,f=new Tt,w=new L(1,1,1),x=new po(g.geometry,g.material,d);for(let v=0;v<d;v++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&f.fromBufferAttribute(l.ROTATION,v),l.SCALE&&w.fromBufferAttribute(l.SCALE,v),x.setMatrixAt(v,_.compose(m,f,w));for(const v in l)if(v==="_COLOR_0"){const S=l[v];x.instanceColor=new Oi(S.array,S.itemSize,S.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,l[v]);ft.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),p.push(x)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}}const dh="glTF",Ks=12,cu={JSON:1313821514,BIN:5130562};class gv{constructor(e){this.name=et.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ks),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==dh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Ks,r=new DataView(e,Ks);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===cu.JSON){const c=new Uint8Array(e,Ks+o,a);this.content=n.decode(c)}else if(l===cu.BIN){const c=Ks+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class _v{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=et.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const u=ul[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=ul[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],p=vs[d.componentType];c[u]=p.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(p){for(const g in p.attributes){const _=p.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}u(p)},a,c,nn,d)})})}}class vv{constructor(){this.name=et.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class xv{constructor(){this.name=et.KHR_MESH_QUANTIZATION}}class fh extends mr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-t,u=(n-t)/h,d=u*u,p=d*u,g=e*c,_=g-c,m=-2*p+3*d,f=p-d,w=1-m,x=f-d+u;for(let v=0;v!==a;v++){const S=o[_+v+a],T=o[_+v+l]*h,b=o[g+v+a],C=o[g+v]*h;r[v]=w*S+x*T+m*b+f*C}return r}}const yv=new Tt;class Mv extends fh{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return yv.fromArray(r).normalize().toArray(r),r}}const _n={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},vs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},uu={9728:qt,9729:an,9984:Du,9985:Qr,9986:Zs,9987:On},hu={33071:fi,33648:co,10497:ki},ca={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ul={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ui={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Sv={CUBICSPLINE:void 0,LINEAR:lr,STEP:ar},ua={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function bv(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Vt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:zn})),s.DefaultMaterial}function Pi(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Nn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Ev(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function wv(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Tv(s){let e;const t=s.extensions&&s.extensions[et.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ha(t.attributes):e=s.indices+":"+ha(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+ha(s.targets[n]);return e}function ha(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function hl(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Av(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Rv=new Ke;class Cv{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Z_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new Vf(this.options.manager):this.textureLoader=new Kf(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new sh(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Pi(r,a,i),Nn(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())r(h,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[et.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(nr.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=ca[i.type],a=vs[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Mt(c,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=ca[i.type],c=vs[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(p&&p!==u){const f=Math.floor(d/p),w="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+f+":"+i.count;let x=t.cache.get(w);x||(_=new c(a,f*p,i.count*p/h),x=new vf(_,p/h),t.cache.add(w,x)),m=new Rl(x,l,d%p/h,g)}else a===null?_=new c(i.count*l):_=new c(a,d,i.count*l),m=new Mt(_,l,g);if(i.sparse!==void 0){const f=ca.SCALAR,w=vs[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,S=new w(o[1],x,i.sparse.count*f),T=new c(o[2],v,i.sparse.count*l);a!==null&&(m=new Mt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let b=0,C=S.length;b<C;b++){const y=S[b];if(m.setX(y,T[b*l]),l>=2&&m.setY(y,T[b*l+1]),l>=3&&m.setZ(y,T[b*l+2]),l>=4&&m.setW(y,T[b*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=uu[d.magFilter]||an,h.minFilter=uu[d.minFilter]||On,h.wrapS=hu[d.wrapS]||ki,h.wrapT=hu[d.wrapT]||ki,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==qt&&h.minFilter!==an,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,p){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Ot(_);m.needsUpdate=!0,d(m)}),t.load(nr.resolveURL(u,r.path),g,void 0,p)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),Nn(u,o),u.userData.mimeType=o.mimeType||Av(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[et.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[et.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[et.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new pr,Rn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Il,Rn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Vt}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[et.KHR_MATERIALS_UNLIT]){const u=i[et.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new Be(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],nn),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,Ht)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=wt);const h=r.alphaMode||ua.OPAQUE;if(h===ua.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===ua.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Xt&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new We(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Xt&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Xt){const u=r.emissiveFactor;a.emissive=new Be().setRGB(u[0],u[1],u[2],nn)}return r.emissiveTexture!==void 0&&o!==Xt&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Ht)),Promise.all(c).then(function(){const u=new o(a);return r.name&&(u.name=r.name),Nn(u,r),t.associations.set(u,{materials:e}),r.extensions&&Pi(i,u,r),u})}createUniqueName(e){const t=ut.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[et.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return du(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],h=Tv(c),u=i[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[et.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=du(new bt,c,t),i[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?bv(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let p=0,g=h.length;p<g;p++){const _=h[p],m=o[p];let f;const w=c[p];if(m.mode===_n.TRIANGLES||m.mode===_n.TRIANGLE_STRIP||m.mode===_n.TRIANGLE_FAN||m.mode===void 0)f=r.isSkinnedMesh===!0?new yf(_,w):new $e(_,w),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===_n.TRIANGLE_STRIP?f.geometry=lu(f.geometry,Hu):m.mode===_n.TRIANGLE_FAN&&(f.geometry=lu(f.geometry,il));else if(m.mode===_n.LINES)f=new Tf(_,w);else if(m.mode===_n.LINE_STRIP)f=new So(_,w);else if(m.mode===_n.LINE_LOOP)f=new Af(_,w);else if(m.mode===_n.POINTS)f=new Is(_,w);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&wv(f,r),f.name=t.createUniqueName(r.name||"mesh_"+e),Nn(f,r),m.extensions&&Pi(i,f,m),t.assignFinalMaterial(f),u.push(f)}for(let p=0,g=u.length;p<g;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return r.extensions&&Pi(i,u[0],r),u[0];const d=new it;r.extensions&&Pi(i,d,r),t.associations.set(d,{meshes:e});for(let p=0,g=u.length;p<g;p++)d.add(u[p]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new $t(Xe.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Nl(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Nn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const u=o[c];if(u){a.push(u);const d=new Ke;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Pl(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const p=i.channels[u],g=i.samplers[p.sampler],_=p.target,m=_.node,f=i.parameters!==void 0?i.parameters[g.input]:g.input,w=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",f)),l.push(this.getDependency("accessor",w)),c.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],p=u[1],g=u[2],_=u[3],m=u[4],f=[];for(let x=0,v=d.length;x<v;x++){const S=d[x],T=p[x],b=g[x],C=_[x],y=m[x];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();const M=n._createAnimationTracks(S,T,b,C,y);if(M)for(let A=0;A<M.length;A++)f.push(M[A])}const w=new al(r,void 0,f);return Nn(w,i),w})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(d,Rv)});for(let p=0,g=u.length;p<g;p++)h.add(u[p]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new Zu:c.length>1?h=new it:c.length===1?h=c[0]:h=new ft,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Nn(h,r),r.extensions&&Pi(n,h,r),r.matrix!==void 0){const u=new Ke;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new it;n.name&&(r.name=i.createUniqueName(n.name)),Nn(r,n),n.extensions&&Pi(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);const c=h=>{const u=new Map;for(const[d,p]of i.associations)(d instanceof Rn||d instanceof Ot)&&u.set(d,p);return h.traverse(d=>{const p=i.associations.get(d);p!=null&&u.set(d,p)}),u};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,l=[];ui[r.path]===ui.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(ui[r.path]){case ui.weights:c=ws;break;case ui.rotation:c=Ts;break;case ui.translation:case ui.scale:c=As;break;default:n.itemSize===1?c=ws:c=As;break}const h=i.interpolation!==void 0?Sv[i.interpolation]:lr,u=this._getArrayFromAccessor(n);for(let d=0,p=l.length;d<p;d++){const g=new c(l[d]+"."+ui[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=hl(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Ts?Mv:fh;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Pv(s,e,t){const n=e.attributes,i=new Gn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new L(l[0],l[1],l[2]),new L(c[0],c[1],c[2])),a.normalized){const h=hl(vs[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new L,l=new L;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],p=d.min,g=d.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),d.normalized){const _=hl(vs[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new Pn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function du(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=ul[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return nt.workingColorSpace!==nn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${nt.workingColorSpace}" not supported.`),Nn(s,e),Pv(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Ev(s,e.targets,t):s})}const Bi={deckY:13.6},fu=30/(650.131- -497.055),Iv=(355.25- -497.055)*(6/(650.131- -497.055)),Ft=Iv+9,Nt=Ft-Bi.deckY,Cs=-24;function Dv(){const s=new it;return s.name="imported-ship",s.userData.loadingState="loading",new _o().load("./models/Ship.glb",e=>{const t=e.scene;t.scale.setScalar(fu),t.rotation.y=-Math.PI/2,t.position.set(0,Ft-355.25*fu,Cs),t.updateMatrixWorld(!0);const n=[];t.traverse(o=>{if(!o.isMesh)return;if(o.name.startsWith("UCX_")){o.visible=!1,o.material=new Xt({side:wt,visible:!1}),n.push(o);return}const a=l=>{if(!l?.name?.toLowerCase().includes("c_boat_red_mat"))return l;const c=l.clone();return c.color.set("#101114"),c};Array.isArray(o.material)?o.material=o.material.map(a):o.material=a(o.material),o.castShadow=!0,o.receiveShadow=!0});const i=new it;i.name="sea-overview-bob",i.position.set(0,Ft-5,Cs);const r=t.clone(!0);r.position.sub(i.position),r.traverse(o=>{o.isMesh&&o.name.startsWith("UCX_")&&(o.visible=!1)}),i.add(r),i.visible=!1,s.add(i),s.add(t),s.userData.model=t,s.userData.colliders=n,new _o().load("./models/Ship_001_Glass.glb",o=>{const a=o.scene;a.name="ship-glass",a.scale.copy(t.scale),a.rotation.copy(t.rotation),a.position.copy(t.position),a.traverse(c=>{if(!c.isMesh)return;c.castShadow=!1,c.receiveShadow=!0;const h=new In({color:11983336,metalness:0,roughness:.12,transparent:!0,opacity:.28,depthWrite:!1,side:wt});c.material=h}),s.add(a);const l=a.clone(!0);l.position.sub(i.position),i.add(l),s.userData.overviewVisualMeshes.push(...a.children.filter(c=>c.isMesh))},void 0,o=>console.warn("[Sea] Optional ship glass failed to load:",o)),s.userData.overviewDisplay=i,s.userData.overviewVisualMeshes=[],t.traverse(o=>{o.isMesh&&!o.name.startsWith("UCX_")&&s.userData.overviewVisualMeshes.push(o)}),s.userData.pendingSail&&(s.userData.pendingSail(),delete s.userData.pendingSail),s.userData.loadingState="ready",console.info("[Sea] Hull height=30m (5x test), visual deck=",Ft,"UCX meshes=",n.length)},void 0,e=>{s.userData.loadingState="error",console.error("[Sea] Ship.glb loading failed:",e)}),s}const Lv=new L(0,-1,0),Xr=new wo,qr=new Ze,Ii=new L,pu=new L;function Nv(s){function e(l,c,h=Ft+9){const u=s.userData.colliders;if(!u?.length)return null;s.updateMatrixWorld(!0),pu.set(l,h,c),Xr.set(pu,Lv),Xr.near=0,Xr.far=200;const d=Xr.intersectObjects(u,!1);for(const p of d)if(p.face&&(qr.getNormalMatrix(p.object.matrixWorld),Ii.copy(p.face.normal).applyMatrix3(qr).normalize(),Math.abs(Ii.y)>.55))return p.point.y;return null}function t(l,c){const h=e(l,c);if(h===null)return null;for(const u of[.38,.72])for(let d=0;d<8;d++){const p=d*Math.PI/4,g=e(l+Math.cos(p)*u,c+Math.sin(p)*u);if(g===null||Math.abs(g-h)>.55)return null}return h}function n(l=0,c=-33){if(!s.userData.colliders?.length)return null;for(const h of[0,1,2,3,4,5,7,9,11,14,17])for(let u=0;u<(h===0?1:24);u++){const d=u*Math.PI/12,p=l+Math.cos(d)*h,g=c+Math.sin(d)*h,_=t(p,g);if(_!==null)return{x:p,z:g,y:_}}return null}const i=new wo,r=new L,o=new L;function a(l,c,h,u,d){const p=s.userData.colliders,g=Math.hypot(h,u);if(!p?.length||g<1e-6)return{x:l+h,z:c+u};s.updateMatrixWorld(!0),r.set(h/g,0,u/g);let _=g;for(const m of[.4,1.1,1.8]){o.set(l,d+m,c),i.set(o,r),i.near=0,i.far=g+.28;for(const f of i.intersectObjects(p,!1))if(f.face&&(qr.getNormalMatrix(f.object.matrixWorld),Ii.copy(f.face.normal).applyMatrix3(qr).normalize(),!(Math.abs(Ii.y)>.55)&&(Ii.dot(r)>0&&Ii.negate(),!(Ii.dot(r)>-.2)))){_=Math.min(_,Math.max(0,f.distance-.28));break}}return{x:l+r.x*_,z:c+r.z*_}}return{floorAt:e,safeSpot:n,blockedMove:a,ready:()=>!!s.userData.colliders?.length}}const mu={type:"change"},Bl={type:"start"},ph={type:"end"},Yr=new Ps,gu=new Zn,Uv=Math.cos(70*Xe.DEG2RAD),Ut=new L,rn=2*Math.PI,_t={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},da=1e-6;class Fv extends up{constructor(e,t=null){super(e,t),this.state=_t.NONE,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ms.ROTATE,MIDDLE:ms.DOLLY,RIGHT:ms.PAN},this.touches={ONE:hs.ROTATE,TWO:hs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new Tt,this._lastTargetPosition=new L,this._quat=new Tt().setFromUnitVectors(e.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Fc,this._sphericalDelta=new Fc,this._scale=1,this._panOffset=new L,this._rotateStart=new We,this._rotateEnd=new We,this._rotateDelta=new We,this._panStart=new We,this._panEnd=new We,this._panDelta=new We,this._dollyStart=new We,this._dollyEnd=new We,this._dollyDelta=new We,this._dollyDirection=new L,this._mouse=new We,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Bv.bind(this),this._onPointerDown=Ov.bind(this),this._onPointerUp=zv.bind(this),this._onContextMenu=qv.bind(this),this._onMouseWheel=Vv.bind(this),this._onKeyDown=Gv.bind(this),this._onTouchStart=Wv.bind(this),this._onTouchMove=Xv.bind(this),this._onMouseDown=kv.bind(this),this._onMouseMove=Hv.bind(this),this._interceptControlDown=Yv.bind(this),this._interceptControlUp=jv.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(mu),this.update(),this.state=_t.NONE}update(e=null){const t=this.object.position;Ut.copy(t).sub(this.target),Ut.applyQuaternion(this._quat),this._spherical.setFromVector3(Ut),this.autoRotate&&this.state===_t.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=rn:n>Math.PI&&(n-=rn),i<-Math.PI?i+=rn:i>Math.PI&&(i-=rn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ut.setFromSpherical(this._spherical),Ut.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ut),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ut.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new L(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new L(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ut.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Yr.origin.copy(this.object.position),Yr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Yr.direction))<Uv?this.object.lookAt(this.target):(gu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Yr.intersectPlane(gu,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>da||8*(1-this._lastQuaternion.dot(this.object.quaternion))>da||this._lastTargetPosition.distanceToSquared(this.target)>da?(this.dispatchEvent(mu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?rn/60*this.autoRotateSpeed*e:rn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ut.setFromMatrixColumn(t,0),Ut.multiplyScalar(-e),this._panOffset.add(Ut)}_panUp(e,t){this.screenSpacePanning===!0?Ut.setFromMatrixColumn(t,1):(Ut.setFromMatrixColumn(t,0),Ut.crossVectors(this.object.up,Ut)),Ut.multiplyScalar(e),this._panOffset.add(Ut)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Ut.copy(i).sub(this.target);let r=Ut.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(rn*this._rotateDelta.x/t.clientHeight),this._rotateUp(rn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(rn*this._rotateDelta.x/t.clientHeight),this._rotateUp(rn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new We,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Ov(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function Bv(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function zv(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ph),this.state=_t.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function kv(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ms.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=_t.DOLLY;break;case ms.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=_t.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=_t.ROTATE}break;case ms.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=_t.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=_t.PAN}break;default:this.state=_t.NONE}this.state!==_t.NONE&&this.dispatchEvent(Bl)}function Hv(s){switch(this.state){case _t.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case _t.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case _t.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function Vv(s){this.enabled===!1||this.enableZoom===!1||this.state!==_t.NONE||(s.preventDefault(),this.dispatchEvent(Bl),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(ph))}function Gv(s){this.enabled!==!1&&this._handleKeyDown(s)}function Wv(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case hs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=_t.TOUCH_ROTATE;break;case hs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=_t.TOUCH_PAN;break;default:this.state=_t.NONE}break;case 2:switch(this.touches.TWO){case hs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=_t.TOUCH_DOLLY_PAN;break;case hs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=_t.TOUCH_DOLLY_ROTATE;break;default:this.state=_t.NONE}break;default:this.state=_t.NONE}this.state!==_t.NONE&&this.dispatchEvent(Bl)}function Xv(s){switch(this._trackPointer(s),this.state){case _t.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case _t.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case _t.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case _t.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=_t.NONE}}function qv(s){this.enabled!==!1&&s.preventDefault()}function Yv(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function jv(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Kv extends $e{constructor(e,t={}){super(e),this.isWater=!0;const n=this,i=t.textureWidth!==void 0?t.textureWidth:512,r=t.textureHeight!==void 0?t.textureHeight:512,o=t.clipBias!==void 0?t.clipBias:0,a=t.alpha!==void 0?t.alpha:1,l=t.time!==void 0?t.time:0,c=t.waterNormals!==void 0?t.waterNormals:null,h=t.sunDirection!==void 0?t.sunDirection:new L(.70707,.70707,0),u=new Be(t.sunColor!==void 0?t.sunColor:16777215),d=new Be(t.waterColor!==void 0?t.waterColor:8355711),p=t.eye!==void 0?t.eye:new L(0,0,0),g=t.distortionScale!==void 0?t.distortionScale:20,_=t.side!==void 0?t.side:zn,m=t.fog!==void 0?t.fog:!1,f=new Zn,w=new L,x=new L,v=new L,S=new Ke,T=new L(0,0,-1),b=new st,C=new L,y=new L,M=new st,A=new Ke,D=new $t,F=new vi(i,r),B={name:"MirrorShader",uniforms:rl.merge([Ie.fog,Ie.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new Ke},sunColor:{value:new Be(8355711)},sunDirection:{value:new L(.70707,.70707,0)},eye:{value:new L},waterColor:{value:new Be(5592405)}}]),vertexShader:`
				uniform mat4 textureMatrix;
				uniform float time;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				#include <common>
				#include <fog_pars_vertex>
				#include <shadowmap_pars_vertex>
				#include <logdepthbuf_pars_vertex>

				void main() {
					mirrorCoord = modelMatrix * vec4( position, 1.0 );
					worldPosition = mirrorCoord.xyzw;
					mirrorCoord = textureMatrix * mirrorCoord;
					vec4 mvPosition =  modelViewMatrix * vec4( position, 1.0 );
					gl_Position = projectionMatrix * mvPosition;

				#include <beginnormal_vertex>
				#include <defaultnormal_vertex>
				#include <logdepthbuf_vertex>
				#include <fog_vertex>
				#include <shadowmap_vertex>
			}`,fragmentShader:`
				uniform sampler2D mirrorSampler;
				uniform float alpha;
				uniform float time;
				uniform float size;
				uniform float distortionScale;
				uniform sampler2D normalSampler;
				uniform vec3 sunColor;
				uniform vec3 sunDirection;
				uniform vec3 eye;
				uniform vec3 waterColor;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				vec4 getNoise( vec2 uv ) {
					vec2 uv0 = ( uv / 103.0 ) + vec2(time / 17.0, time / 29.0);
					vec2 uv1 = uv / 107.0-vec2( time / -19.0, time / 31.0 );
					vec2 uv2 = uv / vec2( 8907.0, 9803.0 ) + vec2( time / 101.0, time / 97.0 );
					vec2 uv3 = uv / vec2( 1091.0, 1027.0 ) - vec2( time / 109.0, time / -113.0 );
					vec4 noise = texture2D( normalSampler, uv0 ) +
						texture2D( normalSampler, uv1 ) +
						texture2D( normalSampler, uv2 ) +
						texture2D( normalSampler, uv3 );
					return noise * 0.5 - 1.0;
				}

				void sunLight( const vec3 surfaceNormal, const vec3 eyeDirection, float shiny, float spec, float diffuse, inout vec3 diffuseColor, inout vec3 specularColor ) {
					vec3 reflection = normalize( reflect( -sunDirection, surfaceNormal ) );
					float direction = max( 0.0, dot( eyeDirection, reflection ) );
					specularColor += pow( direction, shiny ) * sunColor * spec;
					diffuseColor += max( dot( sunDirection, surfaceNormal ), 0.0 ) * sunColor * diffuse;
				}

				#include <common>
				#include <packing>
				#include <bsdfs>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <lights_pars_begin>
				#include <shadowmap_pars_fragment>
				#include <shadowmask_pars_fragment>

				void main() {

					#include <logdepthbuf_fragment>
					vec4 noise = getNoise( worldPosition.xz * size );
					vec3 surfaceNormal = normalize( noise.xzy * vec3( 1.5, 1.0, 1.5 ) );

					vec3 diffuseLight = vec3(0.0);
					vec3 specularLight = vec3(0.0);

					vec3 worldToEye = eye-worldPosition.xyz;
					vec3 eyeDirection = normalize( worldToEye );
					sunLight( surfaceNormal, eyeDirection, 100.0, 2.0, 0.5, diffuseLight, specularLight );

					float distance = length(worldToEye);

					vec2 distortion = surfaceNormal.xz * ( 0.001 + 1.0 / distance ) * distortionScale;
					vec3 reflectionSample = vec3( texture2D( mirrorSampler, mirrorCoord.xy / mirrorCoord.w + distortion ) );

					float theta = max( dot( eyeDirection, surfaceNormal ), 0.0 );
					float rf0 = 0.3;
					float reflectance = rf0 + ( 1.0 - rf0 ) * pow( ( 1.0 - theta ), 5.0 );
					vec3 scatter = max( 0.0, dot( surfaceNormal, eyeDirection ) ) * waterColor;
					vec3 albedo = mix( ( sunColor * diffuseLight * 0.3 + scatter ) * getShadowMask(), ( vec3( 0.1 ) + reflectionSample * 0.9 + reflectionSample * specularLight ), reflectance);
					vec3 outgoingLight = albedo;
					gl_FragColor = vec4( outgoingLight, alpha );

					#include <tonemapping_fragment>
					#include <colorspace_fragment>
					#include <fog_fragment>	
				}`},O=new Wt({name:B.name,uniforms:rl.clone(B.uniforms),vertexShader:B.vertexShader,fragmentShader:B.fragmentShader,lights:!0,side:_,fog:m});O.uniforms.mirrorSampler.value=F.texture,O.uniforms.textureMatrix.value=A,O.uniforms.alpha.value=a,O.uniforms.time.value=l,O.uniforms.normalSampler.value=c,O.uniforms.sunColor.value=u,O.uniforms.waterColor.value=d,O.uniforms.sunDirection.value=h,O.uniforms.distortionScale.value=g,O.uniforms.eye.value=p,n.material=O,n.onBeforeRender=function(N,j,G){if(x.setFromMatrixPosition(n.matrixWorld),v.setFromMatrixPosition(G.matrixWorld),S.extractRotation(n.matrixWorld),w.set(0,0,1),w.applyMatrix4(S),C.subVectors(x,v),C.dot(w)>0)return;C.reflect(w).negate(),C.add(x),S.extractRotation(G.matrixWorld),T.set(0,0,-1),T.applyMatrix4(S),T.add(v),y.subVectors(x,T),y.reflect(w).negate(),y.add(x),D.position.copy(C),D.up.set(0,1,0),D.up.applyMatrix4(S),D.up.reflect(w),D.lookAt(y),D.far=G.far,D.updateMatrixWorld(),D.projectionMatrix.copy(G.projectionMatrix),A.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),A.multiply(D.projectionMatrix),A.multiply(D.matrixWorldInverse),f.setFromNormalAndCoplanarPoint(w,x),f.applyMatrix4(D.matrixWorldInverse),b.set(f.normal.x,f.normal.y,f.normal.z,f.constant);const Z=D.projectionMatrix;M.x=(Math.sign(b.x)+Z.elements[8])/Z.elements[0],M.y=(Math.sign(b.y)+Z.elements[9])/Z.elements[5],M.z=-1,M.w=(1+Z.elements[10])/Z.elements[14],b.multiplyScalar(2/b.dot(M)),Z.elements[2]=b.x,Z.elements[6]=b.y,Z.elements[10]=b.z+1-o,Z.elements[14]=b.w,p.setFromMatrixPosition(G.matrixWorld);const se=N.getRenderTarget(),fe=N.xr.enabled,Me=N.shadowMap.autoUpdate;n.visible=!1,N.xr.enabled=!1,N.shadowMap.autoUpdate=!1,N.setRenderTarget(F),N.state.buffers.depth.setMask(!0),N.autoClear===!1&&N.clear(),N.render(j,D),n.visible=!0,N.xr.enabled=fe,N.shadowMap.autoUpdate=Me,N.setRenderTarget(se);const q=G.viewport;q!==void 0&&N.state.viewport(q)}}}const{lerp:Di}=Xe,Kt=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180];for(let s=0;s<256;s++)Kt[256+s]=Kt[s];function fa(s){return s*s*s*(s*(s*6-15)+10)}function hi(s,e,t,n){const i=s&15,r=i<8?e:t,o=i<4?t:i==12||i==14?e:n;return((i&1)==0?r:-r)+((i&2)==0?o:-o)}class $v{noise(e,t,n){const i=Math.floor(e),r=Math.floor(t),o=Math.floor(n),a=i&255,l=r&255,c=o&255;e-=i,t-=r,n-=o;const h=e-1,u=t-1,d=n-1,p=fa(e),g=fa(t),_=fa(n),m=Kt[a]+l,f=Kt[m]+c,w=Kt[m+1]+c,x=Kt[a+1]+l,v=Kt[x]+c,S=Kt[x+1]+c;return Di(Di(Di(hi(Kt[f],e,t,n),hi(Kt[v],h,t,n),p),Di(hi(Kt[w],e,u,n),hi(Kt[S],h,u,n),p),g),Di(Di(hi(Kt[f+1],e,t,d),hi(Kt[v+1],h,t,d),p),Di(hi(Kt[w+1],e,u,d),hi(Kt[S+1],h,u,d),p),g),_)}}const Zv=[[.18,1,48,.95,.28],[-.28,1,29,.4,.15],[.35,1,17,.16,.1],[-.4,1,10,.06,.06]],Jv=(s,e,t)=>{const n=Math.max(0,Math.min(1,(t-s)/(e-s)));return n*n*(3-2*n)};function Qv(s,e,t,n=240,i=320){const r=s.time.value,o=s.travel.value,a=s.curvature.value,l=Math.max(1e-4,s.waveSize.value),c=s.height.value;let h=e,u=t,d=0;for(let p=0;p<3;p++){const g=Math.hypot(h,u),_=Math.max(2.6*18e3/n*Math.pow(Math.max(g/18e3,1e-6),1-1/2.6),g*Math.PI*2/i);let m=0,f=0;d=0;for(const[w,x,v,S,T]of Zv){const b=Math.hypot(w,x),C=w/b,y=x/b,M=v*l,A=2*Math.PI/M,D=Math.min(S*c,T/A)*(1-Jv(M/8,M/3,_)),F=A*(C*h+y*(u-o))-Math.sqrt(9.81*A)*r;d+=D*Math.sin(F),m+=.18*D*C*Math.cos(F),f+=.18*D*y*Math.cos(F)}h=e-m,u=t-f}return d-(e*e+t*t)*a/12e4}function ex(){const e=new $v,t=new Float32Array(256*256),n=(a,l,c)=>{const h=a/256,u=l/256,d=Xe.lerp(e.noise(h*c,u*c,4.2),e.noise((h-1)*c,u*c,4.2),h),p=Xe.lerp(e.noise(h*c,(u-1)*c,4.2),e.noise((h-1)*c,(u-1)*c,4.2),h);return Xe.lerp(d,p,u)};for(let a=0;a<256;a++)for(let l=0;l<256;l++)t[a*256+l]=n(l,a,8)+n(l,a,16)*.5+n(l,a,32)*.25+n(l,a,64)*.1;const i=new Uint8Array(256*256*4),r=(a,l)=>t[(l+256)%256*256+(a+256)%256];for(let a=0;a<256;a++)for(let l=0;l<256;l++){const c=(a*256+l)*4;i[c]=Xe.clamp(128+(r(l+1,a)-r(l-1,a))*650,0,255),i[c+1]=Xe.clamp(128+(r(l,a+1)-r(l,a-1))*650,0,255),i[c+2]=Xe.clamp(128+r(l,a)*180,0,255),i[c+3]=Xe.clamp(255*(1-Math.abs(r(l,a))*3),0,255)}const o=new Cl(i,256,256);return o.wrapS=o.wrapT=ki,o.magFilter=an,o.minFilter=On,o.generateMipmaps=!0,o.needsUpdate=!0,o}function tx(){const s=typeof matchMedia=="function"&&matchMedia("(max-width: 600px)").matches,e=s?180:240,t=s?192:320,n=[0,0,0],i=[];for(let x=1;x<=e;x++){const v=18e3*Math.pow(x/e,2.6);for(let S=0;S<t;S++){const T=S/t*Math.PI*2;n.push(Math.cos(T)*v,0,Math.sin(T)*v)}}for(let x=0;x<t;x++)i.push(0,1+(x+1)%t,1+x);for(let x=0;x<e-1;x++)for(let v=0;v<t;v++){const S=1+x*t+v,T=1+x*t+(v+1)%t,b=S+t,C=T+t;i.push(S,T,b,T,C,b)}const r=new bt;r.setAttribute("position",new xt(n,3)),r.setIndex(i);const o=ex(),a=[64,128,256,512,1024],l=new Map,c=new Mi(1,1);function h(x){if(!l.has(x)){const v=new Kv(c,{textureWidth:x,textureHeight:x});v.rotation.x=-Math.PI/2,v.updateMatrixWorld(),l.set(x,v)}return l.get(x)}let u=h(256);const d={time:{value:0},travel:{value:0},curvature:{value:1},height:{value:.825},waveSize:{value:1},normalStrength:{value:0},speed:{value:16},wake:{value:.65},horizon:{value:new Be("#52798b")},mid:{value:new Be("#17455c")},near:{value:new Be("#105064")},deep:{value:new Be("#062839")},surfaceMap:{value:o},mirrorSampler:{value:u.material.uniforms.mirrorSampler.value},textureMatrix:{value:u.material.uniforms.textureMatrix.value}},p=`
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
  `,g=new Wt({name:"OceanSurface",uniforms:d,side:wt,vertexShader:`
      uniform float time,travel,curvature,height,waveSize;
      uniform mat4 textureMatrix;
      varying vec3 world;
      varying vec2 water;
      varying vec4 mirrorCoord;
      ${p}
      void main(){
        water=position.xz-vec2(0.,travel);
        float radius=length(position.xz);
        float radialStep=2.6*18000./${e.toFixed(1)}*pow(max(radius/18000.,.000001),1.-1./2.6);
        float angularStep=radius*6.2831853/${t.toFixed(1)};
        vec3 p,unusedNormal;
        sampleSurface(water,position.xz,max(radialStep,angularStep),p,unusedNormal);
        world=p;mirrorCoord=textureMatrix*vec4(p.x,0.,p.z,1.);
        gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);
      }`,fragmentShader:`
      uniform float time,travel,height,speed,wake,daylight,sunVisible,moonVisible,moonTint,normalStrength,curvature,waveSize,horizonStrength;
      uniform vec3 horizon,mid,near,deep,zenith,skyHorizon,sunColor,sunDirection,moonDirection;
      uniform sampler2D surfaceMap,mirrorSampler;
      varying vec3 world;
      varying vec2 water;
      varying vec4 mirrorCoord;
      ${p}
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
        vec3 n=normalize(baseNormal+vec3(-ripple.x,0.,-ripple.y)*rippleGain*normalStrength);
        vec3 v=normalize(cameraPosition-world),r=reflect(-v,n);
        float nv=max(dot(n,v),0.);
        // Water reflects strongly at low viewing angles while retaining deep body colour.
        float fresnel=.035+.965*pow(1.-nv,5.);
        vec3 sky=mix(zenith,skyHorizon,(1.-smoothstep(.015,.65,max(r.y,0.)))*horizonStrength);
        vec2 uv=mirrorCoord.xy/mirrorCoord.w;
        uv+=n.xz*.004/(1.+dist*.008);
        vec3 sceneReflection=texture2D(mirrorSampler,clamp(uv,vec2(.002),vec2(.998))).rgb;
        float valid=step(0.,uv.x)*step(uv.x,1.)*step(0.,uv.y)*step(uv.y,1.)*step(0.,mirrorCoord.w);
        vec3 reflection=mix(sky,sceneReflection,valid*.8);
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
        gl_FragColor=vec4(color,1.);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}),_=new $e(r,g);_.frustumCulled=!1;let m=!0,f=-1/0;_.onBeforeRender=(x,v,S)=>{const T=performance.now();if(T-f<1e3/30)return;f=T,_.visible=!1;const b=v.getObjectByName("fry-schools-instanced"),C=b?.visible,y=v.getObjectByName("fry-night-glow"),M=y?.visible;b&&(b.visible=!1),y&&(y.visible=!1);const A=v.getObjectByName("night-stars"),D=A?.visible;A&&!m&&(A.visible=!1);try{u.onBeforeRender(x,v,S)}finally{b&&C!==void 0&&(b.visible=C),y&&M!==void 0&&(y.visible=M),A&&D!==void 0&&(A.visible=D),_.visible=!0}};function w(x){a.includes(x)&&(u=h(x),f=-1/0,d.mirrorSampler.value=u.material.uniforms.mirrorSampler.value,d.textureMatrix.value=u.material.uniforms.textureMatrix.value)}return{mesh:_,uniforms:d,heightAt:(x,v)=>Qv(d,x,v,e,t),setReflectionResolution:w,setStarReflectionEnabled:x=>{m=x}}}function nx(s,e){const t={value:0};let n=null,i=null;return new _o().load("./models/Ship_Sail.glb",r=>{n=r.scene;const o=a=>{if(!a)return;a.add(n),n.updateWorldMatrix(!0,!0);const l=[];let c=1/0,h=-1/0;const u=new L;n.traverse(g=>{if(!g.isMesh)return;const _=g.geometry.getAttribute("position"),m=new Float32Array(_.count);for(let f=0;f<_.count;f++)u.fromBufferAttribute(_,f).applyMatrix4(g.matrixWorld),m[f]=u.z,c=Math.min(c,u.z),h=Math.max(h,u.z);l.push({obj:g,zValues:m})});const d=(c+h)*.5;n.traverse(g=>{if(!g.isMesh)return;const _=g.geometry,m=_.getAttribute("color");_.getAttribute("normal")||_.computeVertexNormals();const f=_.getAttribute("position").count,w=new Float32Array(f),x=l.find(S=>S.obj===g)?.zValues;x&&_.setAttribute("sailBowZ",new Mt(x,1));for(let S=0;S<f;S++){let T=0;if(m){const b=m.getX(S),C=m.getY(S),y=m.getZ(S),M=Math.min(b,C)*(1-y),A=y*(1-C),D=b*(1-C)*(1-y);T=Xe.clamp((M+A*.48)*(1-D),0,1)}w[S]=T}_.setAttribute("sailWeight",new Mt(w,1));const v=new Vt({color:"#101114",roughness:.89,metalness:0,side:wt});v.onBeforeCompile=S=>{S.uniforms.sailTime=t,S.uniforms.sailSplitZ={value:d},S.vertexShader=S.vertexShader.replace("#include <common>",`#include <common>
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
diffuseColor.rgb=mix(vec3(1.0),diffuseColor.rgb,step(sailSplitZ,vSailBowZ));`)},g.material=v,g.castShadow=!1,g.receiveShadow=!1});const p=s.userData.overviewDisplay?.children[0];p&&(i=n.clone(!0),p.add(i)),s.userData.sailVisual=n,s.userData.sailOverview=i};s.userData.model?o(s.userData.model):s.userData.pendingSail=()=>o(s.userData.model)},void 0,r=>console.error("[Sea] Ship_Sail.glb loading failed:",r)),{update(r,o=1/60){t.value=r;const a=s.userData.overviewDisplay?.visible??!1;n&&(n.visible=!a),i&&(i.visible=a)}}}function _u(s){let e=2166136261;for(const t of String(s))e=Math.imul(e^t.charCodeAt(0),16777619)>>>0;return{model:["hina","daeun","boy-neat","boy-fluffy"][e%4],hairColor:["black","brown"][Math.floor(e/4)%2]}}function dl(s,e="black"){const t=new it;t.name={hina:"Hina",daeun:"Daeun","boy-neat":"BoyNeat","boy-fluffy":"BoyFluffy"}[s]||"Hina",t.userData.characterId=s;const n=q=>new Cf({color:q}),i=n(16042167),r=n(2695979),o=n(3813431),a=n(16117998),l=n(3748669),c=n(3157045),h=n(2367527),u=n(2631216),d=n(3418418),p=n(16777215),g=n(15312548),_=n(3156788),m=n(5522253);function f(q,te,pe,z,W,de,K){const J=new $e(new gi(q,te,pe),z);return J.position.set(W,de,K),J.castShadow=!0,J.receiveShadow=!0,t.add(J),J}const w=f(.69,.83,.4,a,0,1.46,0);f(.78,.13,.45,a,0,1.81,0),f(.52,.12,.09,c,0,1.75,.255),f(.28,.1,.11,_,-.13,1.61,.265).rotation.z=.25,f(.28,.1,.11,_,.13,1.61,.265).rotation.z=-.25,f(.1,.13,.12,_,0,1.61,.28),f(.08,.2,.09,_,-.06,1.48,.27).rotation.z=-.13,f(.08,.2,.09,_,.06,1.48,.27).rotation.z=.13,f(.77,.15,.48,l,0,1.06,0),f(.85,.39,.54,l,0,.85,0);for(let q of[-.31,-.12,.08,.28])f(.022,.33,.045,m,q,.84,.281);for(let q of[.73,.9])f(.78,.015,.045,m,0,q,.283);f(.49,.11,.37,i,0,1.95,0);const x=new it;x.name="sea-avatar-head",t.add(x),x.position.y=2.28;function v(q,te,pe,z,W,de,K){const J=new $e(new gi(q,te,pe),z);return J.position.set(W,de,K),J.castShadow=!0,x.add(J),J}v(.67,.65,.59,i,0,0,0),v(.73,.65,.19,r,0,.005,-.35),v(.78,.25,.24,r,0,.31,-.29);for(let q=-2;q<=2;q++){const te=q*.145;v(.18,.23+(2-Math.abs(q))*.04,.19,q%2?o:r,te,-.29,-.37)}v(.25,.24,.24,r,-.32,-.28,-.32),v(.25,.24,.24,r,.32,-.28,-.32),v(.76,.24,.66,r,0,.38,-.02),v(.76,.15,.65,r,0,.27,-.04),v(.19,.34,.64,r,-.33,.17,-.02),v(.19,.34,.64,r,.33,.17,-.02),v(.19,.19,.12,r,-.24,.22,.31),v(.18,.26,.12,r,-.08,.2,.31),v(.18,.17,.12,r,.11,.23,.31),v(.14,.23,.11,r,.27,.16,.3);for(let q of[-1,1])v(.18,.31,.29,r,q*.39,-.18,-.08),v(.17,.15,.23,o,q*.41,-.39,-.08),v(.135,.19,.038,d,q*.17,-.045,.312),v(.045,.05,.045,p,q*.14,-.015,.34),v(.14,.05,.028,g,q*.265,-.18,.313);v(.1,.025,.032,_,0,-.23,.319),v(.28,.17,.19,r,0,-.31,-.3);function S(q,te,pe){const z=new it;return z.position.set(q,te,pe),t.add(z),z}function T(q,te,pe,z,W,de,K,J){const Q=new $e(new gi(te,pe,z),W);return Q.position.set(de,K,J),Q.castShadow=!0,Q.receiveShadow=!0,q.add(Q),Q}const b=[S(-.46,1.78,0),S(.46,1.78,0)];for(const q of b)T(q,.19,.62,.24,a,0,-.3,0),T(q,.16,.19,.19,i,0,-.66,0);const C=[S(-.2,.75,0),S(.2,.75,0)];for(const q of C)T(q,.23,.56,.24,i,0,-.33,0),T(q,.24,.19,.25,u,0,-.56,0),T(q,.29,.16,.43,h,0,-.675,.1);if(s==="daeun"){const q=new Map;for(const[Q,le]of[[r,4796731],[o,6705243],[l,3748669],[_,3748669],[m,6574683]]){const P=Q.clone();P.color.setHex(le),q.set(Q,P)}t.traverse(Q=>{Q.isMesh&&q.has(Q.material)&&(Q.material=q.get(Q.material))});const te=x,pe=new Vt({color:4796731,roughness:.92}),z=new Vt({color:6705243,roughness:.9});for(const Q of te.children)Q.isMesh&&(Q.position.z<-.25&&Q.position.y<-.13&&Q.geometry?.type==="BoxGeometry"&&(Q.visible=!1),Math.abs(Q.position.x)>.38&&Q.position.y<-.08&&Q.geometry?.type==="BoxGeometry"&&(Q.visible=!1));const W=new it;W.name="DaeunPonytail",te.add(W),W.position.set(0,.32,-.43);const de=(Q,le,P,oe,ce,Se,re,De=0)=>{const ue=new $e(new yi(Q,le,P,6),re);return ue.position.set(oe,ce,Se),ue.rotation.z=De,ue.castShadow=!0,W.add(ue),ue},K=new $e(new Hn(.16,7,5),pe);K.scale.set(1,.85,1),K.position.set(0,.05,-.1),K.castShadow=!0,W.add(K),de(.22,.26,.44,.1,.24,-.22,pe,-.32),de(.26,.19,.55,.23,.03,-.28,pe,.32),de(.2,.12,.51,.34,-.4,-.31,z,.22),de(.14,.055,.4,.4,-.76,-.33,pe,.13);const J=new Vt({color:4800331,roughness:.93});for(const Q of C){const le=Q;if(le)for(const P of le.children)P.isMesh&&(P.material===i||P.material===u)&&(P.material=J)}}if(s==="boy-neat"||s==="boy-fluffy"){for(const q of t.children)q.isMesh&&((q.material===_||q.material===c)&&q.position.y>1.3&&(q.visible=!1),q.material===m&&(q.visible=!1));for(const q of x.children){if(!q.isMesh)continue;const{x:te,y:pe,z}=q.position;(z<-.25&&pe<-.1||Math.abs(te)>.36&&pe<-.06)&&(q.visible=!1)}if(s==="boy-neat")v(.27,.13,.15,r,-.21,.24,.34).rotation.z=-.18,v(.27,.12,.15,r,.08,.28,.33).rotation.z=-.1;else{for(let q=-2;q<=2;q++){const te=v(.18,.2+.1*(2-Math.abs(q)),.25,q%2?o:r,q*.155,.49+q%2*.045,-.03);te.rotation.z=q%2?-.23:.2,te.position.z+=q*.018,te.position.y+=q%2*.016}v(.24,.18,.15,r,.22,.22,.34).rotation.z=.15}}const y={black:[2368811,3421758],brown:[7950651,10121300]},M=y[e]||y.black,A=new Map;x.traverse(q=>{if(!q.isMesh||!q.material?.color)return;const te=q.material.color.getHex();if([2695979,3813431,4796731,6705243].includes(te)){if(!A.has(q.material)){const pe=q.material.clone();pe.color.setHex([3813431,6705243].includes(te)?M[1]:M[0]),A.set(q.material,pe)}q.material=A.get(q.material)}});function D(q,te,pe){const z=q.children.find(le=>le.isMesh&&le.geometry.type==="BoxGeometry"),W=new it;W.name=(te==="arm"?"Elbow_":"Knee_")+(pe===0?"L":"R");const de=z.position.y,K=z.geometry.parameters.height*z.scale.y;W.position.y=de;const J=z.clone(!1);J.scale.y*=.5,z.scale.y*=.5,z.position.y=de+K*.25,J.position.y=-K*.25;const Q=q.children.slice();for(const le of Q)le!==z&&(q.remove(le),le.position.y-=de,W.add(le));return W.add(J),q.add(W),W}const F=b.map((q,te)=>D(q,"arm",te)),B=C.map((q,te)=>D(q,"leg",te));let O=0,N=0,j=0;function G(){b[1].rotation.set(Math.PI,0,0),F[1].rotation.x=0}function Z(){j=performance.now()+1500,G()}function se(){return t.updateWorldMatrix(!0,!0),b[1].localToWorld(new L(0,-.72,0))}function fe(q,te,pe=!1,z=null,W=!1,de=!1,K=!1,J=0,Q=0){if(!W){const De=1-Math.exp(-Math.min(.1,q)*18);for(const ue of F)ue.rotation.z+=(0-ue.rotation.z)*De}if(K){const De=1-Math.exp(-Math.min(.1,q)*12);for(let ue=0;ue<2;ue++)b[ue].rotation.x+=(0-b[ue].rotation.x)*De,b[ue].rotation.z+=((ue===0?-Math.PI/2:Math.PI/2)-b[ue].rotation.z)*De,F[ue].rotation.x+=(0-F[ue].rotation.x)*De,C[ue].rotation.x+=(0-C[ue].rotation.x)*De;w.rotation.z=0,x.rotation.z=0;return}if(de){const De=performance.now()*.001,ue=1-Math.exp(-Math.min(.1,q)*15);for(let ve=0;ve<2;ve++){const ke=-1.35+Math.sin(De*17+ve*.5)*.7;b[ve].rotation.x+=(ke-b[ve].rotation.x)*ue,b[ve].rotation.z+=((ve===0?-.55:.55)-b[ve].rotation.z)*ue,F[ve].rotation.x+=(-.4-F[ve].rotation.x)*ue,C[ve].rotation.x+=(Math.sin(De*11+ve*Math.PI)*.35-C[ve].rotation.x)*ue}w.rotation.z=Math.sin(De*8)*.07,x.rotation.z=-w.rotation.z*.5;return}const le=performance.now()<j;if(W){O+=q;const De=O*2,ue=1-Math.exp(-Math.min(.1,q)*12);N=0,t.position.y=0;for(let ve=0;ve<2;ve++){const ke=ve===0?-1:1,Ve=Q<=0?0:Math.min(1,(1-Q)/.16,Q/.22),I=-.22,E=ke*(1.42+Xe.degToRad(20)+(2.85-(1.42+Xe.degToRad(20)))*Ve),U=1-Math.exp(-Math.min(.1,q)*22);b[ve].rotation.x+=(I-b[ve].rotation.x)*U,b[ve].rotation.z+=(E-b[ve].rotation.z)*U,F[ve].rotation.x+=(-.18-F[ve].rotation.x)*U,F[ve].rotation.z+=(-ke*.85*(1-Ve)-F[ve].rotation.z)*U;const H=(z??0)>.5,ee=H?Math.sin(O*15+ve*Math.PI)*.42:0,V=(ve===0?1:-1)*J*1.05;C[ve].rotation.x+=(ee+V-C[ve].rotation.x)*ue,B[ve].rotation.x+=(.22+(H?.22*Math.max(0,-Math.sin(O*15+ve*Math.PI)):0)-B[ve].rotation.x)*ue}le&&G(),w.rotation.z=Math.sin(De)*.015,x.rotation.z=-w.rotation.z*.45;return}const P=Math.max(0,Math.min(1,z??0)),oe=1-Math.exp(-Math.min(.1,q)*18);if(P>.025){N=0,t.position.y=0;const De=[-2.85,.32],ue=[-.14,.18],ve=[-.35,-1.05],ke=[-.78,.58],Ve=[1.12,.22];for(let I=0;I<2;I++)b[I].rotation.x+=(De[I]-b[I].rotation.x)*oe,b[I].rotation.z+=(ue[I]-b[I].rotation.z)*oe,F[I].rotation.x+=(ve[I]-F[I].rotation.x)*oe,C[I].rotation.x+=(ke[I]-C[I].rotation.x)*oe,B[I].rotation.x+=(Ve[I]-B[I].rotation.x)*oe;le&&G(),w.rotation.z=0,x.rotation.z=0;return}N+=((pe?1:0)-N)*oe,t.position.y=-.6*N**3,te&&(O+=q);const ce=Math.floor(O*12)/12,Se=te?Math.sin(ce*16.8)*.34:0,re=s==="hina"?Se*3:Se*1.5;for(let De=0;De<2;De++){const ue=(De?-Se:Se)*(1-N)-Math.PI/2*N,ve=pe?-.3:De?re:-re;C[De].rotation.x+=(ue-C[De].rotation.x)*oe,b[De].rotation.x+=(ve-b[De].rotation.x)*oe,b[De].rotation.z+=(0-b[De].rotation.z)*oe;const ke=te?.58*Math.max(0,Math.sin(C[De].rotation.x)*2.8)*(1-N):0;B[De].rotation.x+=(ke-B[De].rotation.x)*oe,F[De].rotation.x+=((te?-.1:0)-F[De].rotation.x)*oe}le&&G(),w.rotation.z=s==="hina"&&te?Math.sin(ce*8.4)*.016:0,x.rotation.z=s==="hina"&&te?Math.sin(ce*8.4)*.02:0}function Me(q){const te=Math.max(0,Math.min(1,q)),pe=Math.sin(te*Math.PI*2);b[1].rotation.x=-.9-.55*pe,b[1].rotation.z=.2,F[1].rotation.x=-.4-.3*Math.max(0,pe)}return{mesh:t,update:fe,fireworkPose:Z,rightHandWorldPosition:se,netPose:Me}}function mh(s){const e=new Set,t=new Set;s.traverse(n=>{if(n.geometry&&e.add(n.geometry),n.material)for(const i of[].concat(n.material))t.add(i)});for(const n of e)n.dispose();for(const n of t)n.dispose()}function ix(s,e,t,n){const i=new it;i.position.set(0,Bi.deckY,-27);const r=Math.random()<.5?"hina":"daeun";i.userData.characterId=r;let o=dl(r),a=!0,l=!1,c=!1,h=!1;i.userData.hairColor="black",o.mesh.rotation.y=Math.PI;const u=new it;u.add(o.mesh),i.add(u),u.position.y=Nt,s.add(i);const d=new $e(new Mi(1.5,1.5),new Wt({transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,uniforms:{},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 vUv;void main(){float r=length((vUv-.5)*2.);gl_FragColor=vec4(0.,0.,0.,(1.-smoothstep(.15,1.,r))*.18);}"}));d.rotation.x=-Math.PI/2,d.position.y=Nt+.012,i.add(d),t.target.copy(i.position).add(new L(0,Nt+1.3,0)),e.position.copy(t.target).add(new L(0,3.7,12)),t.minDistance=2,t.maxDistance=100,t.update();const p=new Set,g=new We,_=new L,m=new L,f=new L,w=["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowLeft","ArrowDown","ArrowRight"];addEventListener("keydown",$=>{$.target.closest?.("input,button,summary,textarea,select")||w.includes($.code)&&($.preventDefault(),p.add($.code))}),addEventListener("keyup",$=>p.delete($.code));const x=document.createElement("div");x.id="joystick",x.setAttribute("aria-label","갑판 이동 조이스틱"),x.innerHTML='<span class="stick-knob"></span><span class="stick-label">이동</span>',document.querySelector("#app").append(x);let v=null;const S=()=>{x.classList.remove("active"),i.userData.moving=!1,v=null,g.set(0,0),x.firstElementChild.style.transform="translate(0px,0px)"},T=$=>{const ae=x.getBoundingClientRect();g.set(($.clientX-ae.left-ae.width/2)/38,($.clientY-ae.top-ae.height/2)/38),g.length()>1&&g.normalize(),x.firstElementChild.style.transform=`translate(${g.x*30}px,${g.y*30}px)`};x.addEventListener("pointerdown",$=>{v===null&&($.preventDefault(),v=$.pointerId,x.classList.add("active"),x.setPointerCapture(v),T($))}),x.addEventListener("pointermove",$=>{$.pointerId===v&&T($)});for(const $ of["pointerup","pointercancel","lostpointercapture"])x.addEventListener($,ae=>{ae.pointerId===v&&S()});addEventListener("blur",()=>{p.clear(),S()}),document.addEventListener("visibilitychange",()=>{document.hidden&&(p.clear(),S())});function b($,ae="black"){i.userData.characterId===$&&i.userData.hairColor===ae||(u.remove(o.mesh),mh(o.mesh),o=dl($,ae),o.mesh.rotation.y=Math.PI,u.add(o.mesh),c&&(o.mesh.position.copy(U),o.mesh.quaternion.copy(E),Ve=null),i.userData.characterId=$,i.userData.hairColor=ae)}const C=document.createElement("button");C.id="sit-toggle",C.type="button",C.textContent="앉기",C.setAttribute("aria-pressed","false"),document.querySelector("#app").append(C);function y($){l=$,i.userData.sitting=$,C.textContent=$?"일어서기":"앉기",C.setAttribute("aria-pressed",String($))}C.addEventListener("click",()=>{c&&Le(),y(!l)});const M=document.createElement("button");M.id="jump-toggle",M.type="button",M.textContent="점프",M.setAttribute("aria-label","점프"),document.querySelector("#app").append(M);const A=11.6,D=20.25,F=-1.35;let B=()=>0,O=!1,N=0,j=0,G=null,Z=null,se=0,fe=0,Me=0;i.userData.waterKickPulse=0;let q=0,te=0,pe=0,z=0,W=!1,de=0,K=0,J=Ft,Q=!1;const le=Bi.deckY+Nt;let P=0,oe=0,ce=null,Se=0,re=!1;const De=1.25;let ue=null;const ve=new L;let ke=0,Ve=null;const I=1.6,E=new Tt().setFromAxisAngle(new L(1,0,0),-Math.PI/2).multiply(new Tt().setFromAxisAngle(new L(0,0,1),Math.PI)),U=new L(0,.58,-1.08);let H=null;function ee(){try{const $=window.AudioContext||window.webkitAudioContext;if(!$)return;H||(H=new $),H.state==="suspended"&&H.resume().catch(()=>{});const ae=H.currentTime;for(const[Fe,je,ot,at,ht]of[[0,270,650,.15,.18],[.065,510,960,.19,.105]]){const lt=H.createOscillator(),ct=H.createGain();lt.type="triangle",lt.frequency.setValueAtTime(je,ae+Fe),lt.frequency.exponentialRampToValueAtTime(ot,ae+Fe+at),ct.gain.setValueAtTime(1e-4,ae+Fe),ct.gain.exponentialRampToValueAtTime(ht,ae+Fe+.018),ct.gain.exponentialRampToValueAtTime(1e-4,ae+Fe+at),lt.connect(ct),ct.connect(H.destination),lt.start(ae+Fe),lt.stop(ae+Fe+at+.02),lt.onended=()=>{lt.disconnect(),ct.disconnect()}}}catch{}}function V($){if(!a)return;const ae=t.target.y+$,Fe=ae-t.target.y;t.target.y=ae,e.position.y+=Fe}function me(){O||G||(e.position.clone().sub(t.target),O=!0,i.userData.inWater=!0,W=!0,j=0,N=J-le+P,te=oe,pe=de,z=K,P=0,oe=0,ce=null,d.visible=!1)}function he($){return!1}function we($){if(!a||O||G||Z||c||!Q)return!1;const ae=Math.max(10,$.y-J+5);return Z={height:J+P,velocity:Math.sqrt(2*D*ae)},ce=null,re=!1,oe=0,P=0,l&&y(!1),ee(),!0}function xe($){if(!Z)return!1;const ae=Z,Fe=Math.min($,.05),je=ae.height;ae.height+=ae.velocity*Fe-.5*D*Fe*Fe,ae.velocity-=D*Fe;const ot=Number(p.has("KeyD")||p.has("ArrowRight"))-Number(p.has("KeyA")||p.has("ArrowLeft"))+g.x,at=Number(p.has("KeyW")||p.has("ArrowUp"))-Number(p.has("KeyS")||p.has("ArrowDown"))-g.y;e.getWorldDirection(_),_.y=0,_.normalize(),m.crossVectors(_,ft.DEFAULT_UP).normalize(),f.copy(_).multiplyScalar(at).addScaledVector(m,ot),f.lengthSq()>1&&f.normalize(),f.multiplyScalar(5.25*Fe);const ht=n.blockedMove(i.position.x,i.position.z,f.x,f.z,ae.height),lt=ht.x-i.position.x,ct=ht.z-i.position.z;if(i.position.x=ht.x,i.position.z=ht.z,a&&(e.position.x+=lt,t.target.x+=lt,e.position.z+=ct,t.target.z+=ct),f.lengthSq()>1e-8&&(i.rotation.y=Math.atan2(-f.x,-f.z)),de=Fe>0?f.x/Fe:0,K=Fe>0?f.z/Fe:0,ae.velocity<0){const Et=n.floorAt(i.position.x,i.position.z,je+.2);Et!==null&&je>=Et-.15&&ae.height<=Et&&(ae.height=Et,J=Et,P=0,oe=0,Z=null,q=.45)}if(Z&&(P=ae.height-J,ae.height<F+.3&&(oe=ae.velocity,Z=null,me())),O||(u.position.y=Nt+ae.height-le),a){const Et=(ae.height+1.3-t.target.y)*(1-Math.exp(-Fe*7));t.target.y+=Et,e.position.y+=Et}return O||o.update(Fe,!1,!1,Z?1:0,!1,!!(Z&&ae.velocity<-7)),i.userData.moving=f.lengthSq()>1e-8,!0}function ye(){if(a&&!Z){if(O){if(se>0)return;W=!0,te=16.5,se=.65,fe=.38,Me=1,i.userData.waterKickPulse=1,ee();return}P>.03&&!ce||oe>0||(c&&Le(),l&&y(!1),h=!1,ce=null,re=!1,oe=A,ee())}}let ge=-1/0;function Te($){$.preventDefault(),$.stopPropagation(),ge=performance.now(),ye()}M.addEventListener("touchstart",Te,{passive:!1}),M.addEventListener("pointerdown",$=>{if(!($.pointerType!=="touch"&&$.pointerType!=="pen")){if(performance.now()-ge<350){$.preventDefault();return}Te($)}}),M.addEventListener("click",$=>{if(performance.now()-ge<750){$.preventDefault();return}ye()}),addEventListener("keydown",$=>{if($.code!=="Space"&&$.key!==" "||$.repeat||$.altKey||$.ctrlKey||$.metaKey)return;const ae=$.target;ae?.isContentEditable||ae?.closest?.("input,textarea,select,[contenteditable],[data-aqua-ui]")||($.preventDefault(),ye())},{capture:!0});function Re($){const ae=Math.min($,.05);if(se=Math.max(0,se-ae),fe=Math.max(0,fe-ae),Me=Math.max(0,Me-ae),i.userData.waterKickPulse=fe>0?Math.sin((1-fe/.38)*Math.PI):0,xe(ae)||he())return;if(O){const ot=F+B(i.position.x,i.position.z)-le,at=N;if(W){const lt=le+N;N+=te*ae-.5*D*ae*ae,te-=D*ae;const ct=p.has("KeyW")||p.has("KeyA")||p.has("KeyS")||p.has("KeyD")||p.has("ArrowUp")||p.has("ArrowDown")||p.has("ArrowLeft")||p.has("ArrowRight")||g.lengthSq()>.01,Et=ct?0:pe*ae,Si=ct?0:z*ae,fn=n.blockedMove(i.position.x,i.position.z,Et,Si,le+N),ni=fn.x-i.position.x,Ln=fn.z-i.position.z;i.position.x=fn.x,i.position.z=fn.z,a&&(e.position.x+=ni,t.target.x+=ni,e.position.z+=Ln,t.target.z+=Ln);const zs=Math.exp(-ae*.38);if(pe*=zs,z*=zs,te<0){const _r=le+N,ii=n.floorAt(i.position.x,i.position.z,lt+.25);ii!==null&&ii>F+1&&lt>=ii-.12&&_r<=ii&&(N=ii-le,J=ii,O=!1,i.userData.inWater=!1,W=!1,te=0,q=.5,se=0,d.visible=!0)}O&&N<=ot&&(N=ot,W=!1,j=0)}else j+=ae,N=ot+Math.sin(j*1.5)*.04;const ht=N-at;V(ht),u.position.y=Nt+N,Se+=(0-Se)*(1-Math.exp(-ae*16)),o.update(ae,!1,!1,W?1:0,O,!1,!1,i.userData.waterKickPulse,Me);return}if(!ce&&(oe!==0||P>0)){const ot=P;if(P+=oe*ae-.5*D*ae*ae,oe-=D*ae,oe<0&&!ce){const at=J-Ft;for(const ht of s.children){if(!ht.name?.startsWith("remote-")||!ht.userData.headPlatformEnabled)continue;const ct=ht.userData.headPlatformY-le-at;if(ot>=ct-.12&&P<=ct&&Math.hypot(ht.position.x-i.position.x,ht.position.z-i.position.z)<.62){P=ct,oe=0,ce=ht,ve.copy(ht.position),ke=ht.rotation.y;break}}}if(P<=0&&!re){const at=n.floorAt(i.position.x,i.position.z,J+.22);at===null||at<J-.45?re=!0:(P=0,oe=0,ce=null)}}if(ce){if(ce.parent&&ce.userData.headPlatformEnabled){const at=ce.rotation.y-ke,ht=i.position.x-ve.x,lt=i.position.z-ve.z,ct=Math.cos(at),Et=Math.sin(at),Si=ce.position.x+ht*ct+lt*Et,fn=ce.position.z-ht*Et+lt*ct,ni=Si-i.position.x,Ln=fn-i.position.z;i.position.x=Si,i.position.z=fn,i.rotation.y+=at,a&&(e.position.x+=ni,t.target.x+=ni,e.position.z+=Ln,t.target.z+=Ln),ve.copy(ce.position),ke=ce.rotation.y}const ot=Math.hypot(ce.position.x-i.position.x,ce.position.z-i.position.z)<.7;!ce.parent||!ce.userData.headPlatformEnabled||!ot?(ce=null,oe=Math.min(oe,-.01)):(P=ce.userData.headPlatformY-le-(J-Ft),oe=0)}if(a){const ht=(J+P+1.3-t.target.y)*(1-Math.exp(-ae*8));t.target.y+=ht,e.position.y+=ht}const Fe=J-Ft;u.position.y=Nt+(c?0:P+Fe);const je=ce?0:P>.04||oe>0?1:0;Se+=(je-Se)*(1-Math.exp(-ae*16))}function Ce($){a&&(O||(P=0,oe=0,Se=0,ce=null,y(!1),c=!0,{...$},i.position.set($.x,Bi.deckY,$.z),i.rotation.y=$.heading??0,u.position.y=Nt,o.mesh.position.set(0,0,0),o.mesh.rotation.set(0,Math.PI,0),Ve={elapsed:0,startPos:o.mesh.position.clone(),startQuat:o.mesh.quaternion.clone()},d.visible=!1,i.userData.lying=!0,Ee()))}function Le(){c&&(c=!1,Ve=null,i.position.y=Bi.deckY,o.mesh.position.set(0,0,0),o.mesh.rotation.set(0,Math.PI,0),d.visible=!0,i.userData.lying=!1,Ee())}function k($){if(c)if(Ve){Ve.elapsed+=Math.min($,.05);const ae=Math.min(1,Ve.elapsed/I),Fe=ae*ae*(3-2*ae);o.mesh.position.copy(Ve.startPos).lerp(U,Fe),o.mesh.quaternion.copy(Ve.startQuat).slerp(E,Fe),ae>=1&&(Ve=null)}else o.mesh.position.copy(U),o.mesh.quaternion.copy(E)}function Ee(){const $=t.enableDamping;t.enableDamping=!1,t.update();const ae=le+u.position.y-Nt;t.target.set(i.position.x,O?Math.max(3,ae+1.3):ae+1.3,i.position.z),e.position.copy(t.target).add(new L(0,3.7,12)),t.update(),t.enableDamping=$}function Pe(){const $=le+u.position.y-Nt,ae=new L(i.position.x,O?Math.max(3,$+1.3):$+1.3,i.position.z);return{position:ae.clone().add(new L(0,3.7,12)),target:ae}}function Ue($){a=$,$||(p.clear(),S(),i.userData.moving=!1)}function be($,ae){if(ce)return null;const Fe=J+P,je=Math.max(Fe,ue??Fe)+(oe===0&&!re?De:.22),ot=n.floorAt($,ae,je);if(ot===null)return null;if(P>.03||oe!==0||re){if(oe>=0||Fe>ot+.28)return null;P=0,oe=0,re=!1,ue=ot}else if(ot>J+De||ot<J-1.1)return re=!0,oe=-.01,null;return ot}function _e($){q=Math.max(0,q-Math.min($,.05));const ae=!!Z;if(ue=J+P,Re($),k($),ae){i.userData.moving=!1;return}if(!a){i.userData.moving=!1,!c&&!O&&o.update($,!1,l,Se,O,!1,h);return}if(n.ready()&&!Q){const Et=n.safeSpot(i.position.x,i.position.z)||n.safeSpot(0,-33)||n.safeSpot(0,-24);Et?(i.position.x=Et.x,i.position.z=Et.z,J=Et.y,Q=!0,Ee()):window.__seaNoDeckWarning||(console.warn("[Sea] UCX has no walkable deck surface near spawn."),window.__seaNoDeckWarning=!0)}if(!O&&!G&&n.ready()&&Q&&!c&&!h){const Et=be(i.position.x,i.position.z);Et!==null?J=Et:q<=0&&!ce&&!re&&P<=.03&&oe===0&&(re=!0,oe=-.01)}re&&!O&&J+P<F+.3&&(me(),re=!1);const Fe=Number(p.has("KeyD")||p.has("ArrowRight"))-Number(p.has("KeyA")||p.has("ArrowLeft"))+g.x,je=Number(p.has("KeyW")||p.has("ArrowUp"))-Number(p.has("KeyS")||p.has("ArrowDown"))-g.y;if(!Q&&n.ready()||G||!Fe&&!je){i.userData.moving=!1,!c&&!O&&o.update($,!1,l,Se,O,re&&oe<-7,h);return}c&&Le(),l&&y(!1),h=!1,e.getWorldDirection(_),_.y=0,_.normalize(),m.crossVectors(_,ft.DEFAULT_UP).normalize(),f.copy(_).multiplyScalar(je).addScaledVector(m,Fe),f.length()>1&&f.normalize(),f.multiplyScalar(5.25*$);const ot=i.position.clone();de=$>0?f.x/$:0,K=$>0?f.z/$:0;const at=O?le+N:J+P,ht=n.blockedMove(i.position.x,i.position.z,f.x,f.z,at);i.position.set(ht.x,i.position.y,ht.z);const lt=be(i.position.x,i.position.z);!O&&lt!==null&&(J=lt),!O&&Q&&n.ready()&&lt===null&&q<=0&&!re&&P<=.03&&oe===0&&(c&&Le(),l&&y(!1),re=!0,oe=Math.min(oe,-.01));const ct=i.position.clone().sub(ot);ct.lengthSq()>1e-8&&(i.rotation.y=Math.atan2(-ct.x,-ct.z)),i.userData.moving=ct.lengthSq()>1e-8,O||o.update($,i.userData.moving,l,Se,!1,re&&oe<-7,h),e.position.add(ct),t.target.add(ct)}return{player:i,update:_e,setCharacter:b,setEnabled:Ue,resetView:Ee,deckViewPose:Pe,setWaterHeightSampler:$=>{B=$},setNetPose:$=>o.netPose($),isTitanicPosing:()=>h,toggleTitanicPose:$=>{if(O||G||Z||c||!Q)return!1;if(h)return h=!1,!1;if(!$||Math.hypot(i.position.x-$.x,i.position.z-$.z)>1.35)return!1;const ae=n.floorAt($.x,$.z,J+4);if(ae===null)return!1;y(!1),ce=null,re=!1,P=0,oe=0,Se=0;const Fe=$.x-i.position.x,je=$.z-i.position.z;return i.position.x=$.x,i.position.z=$.z,J=ae,u.position.y=Nt+ae-Ft,e.position.x+=Fe,e.position.z+=je,t.target.x+=Fe,t.target.z+=je,i.rotation.y=0,h=!0,o.update(.05,!1,!1,0,!1,!1,!0),!0},launchFireworkPose:()=>(o.fireworkPose(),i.updateWorldMatrix(!0,!0),o.rightHandWorldPosition()),getFireworkHandPosition:()=>(i.updateWorldMatrix(!0,!0),o.rightHandWorldPosition()),isSpawnReady:()=>Q,lieOn:Ce,standUp:Le,isLying:()=>c,launchTo:we,getNetworkState:()=>({sitting:l,lying:c,jump:!!Z||re||O&&W||!ce&&(P>0||oe>0),jumpHeight:Math.max(0,P),verticalOffset:u.position.y-Nt,inWater:O,returning:!!Z}),isReturning:()=>!!G,handleCorrection($){const ae=$.x-i.position.x,Fe=$.z-i.position.z;i.position.x=$.x,i.position.z=$.z,e.position.x+=ae,t.target.x+=ae,e.position.z+=Fe,t.target.z+=Fe}}}const vu="sea.player.v1",xu=s=>s&&typeof s.playerId=="string"&&/^[a-f0-9-]{36}$/.test(s.playerId)&&typeof s.token=="string"&&/^[a-f0-9]{64}$/.test(s.token);function sx(s){let e=null,t=null,n=null;const i=new URL(s);i.protocol=i.protocol==="wss:"?"https:":"http:",i.pathname="/identity",i.search="",i.hash="";async function r(){let o=null;try{o=JSON.parse(localStorage.getItem(vu))}catch{}xu(o)&&(e=o);try{const a=await fetch(i,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e||{}),signal:AbortSignal.timeout(2500),cache:"no-store"});if(a.ok){const l=await a.json();if(xu(l)){e={playerId:l.playerId,token:l.token};try{localStorage.setItem(vu,JSON.stringify(e))}catch{}}}}catch{}}return{async prepare(){n||(n=globalThis.navigator?.locks?navigator.locks.request("sea.player.identity",r):r()),await n},protocols(){return["sea-v2",...e?[`sea-identity.${e.token}`]:[],...t?[`sea-session.${t}`]:[]]},welcome(o){typeof o.sessionId=="string"&&/^[a-f0-9-]{36}$/.test(o.sessionId)&&(t=o.sessionId)}}}const rx=[{id:"A",x:-40,z:-30},{id:"B",x:40,z:-42}],xs=[{id:"s1",x:-36,z:-48},{id:"s2",x:-44,z:-10},{id:"s3",x:36,z:-60},{id:"s4",x:44,z:-22}],fl=["#9caf9c","#ccabb3","#a8c3d6","#b6afd0","#cabea8","#a6cfbe"],cs=[{id:"oarfish",name:"산갈치",rarity:"전설",weight:50,color:"#d6b3c3"},{id:"coelacanth",name:"실러캔스",rarity:"전설",weight:50,color:"#769da3"},{id:"sunfish",name:"개복치",rarity:"영웅",weight:200,color:"#9db4c2"},{id:"mandarin",name:"만다린피시",rarity:"영웅",weight:300,color:"#79b8a4"},{id:"lionfish",name:"쏠배감펭",rarity:"희귀",weight:600,color:"#c9a090"},{id:"blue-tang",name:"블루탱",rarity:"희귀",weight:800,color:"#7ea9d3"},{id:"yellow-tang",name:"옐로탱",rarity:"고급",weight:1200,color:"#d8c879"},{id:"clownfish",name:"흰동가리",rarity:"고급",weight:1500,color:"#d8aa83"},{id:"sardine",name:"정어리",rarity:"일반",weight:2300,color:"#aac1c9"},{id:"anchovy",name:"멸치",rarity:"일반",weight:3e3,color:"#b6ccc5"}],yu=2e3;function oo(s,e){const t=xs.indexOf(s);return{x:s.x+Math.sin(e/12e3+t*2)*.8,z:s.z+Math.cos(e/15e3+t)*.8}}const ox=new Vi(.82,.27,12,32).rotateX(Math.PI/2),vo=fl.map(s=>new Vt({color:s,roughness:.72,metalness:0,emissive:new Be(s),emissiveIntensity:.2}));function gh(s=0){const e=Number.isInteger(s)&&s>=0&&s<vo.length?s:0,t=new $e(ox,vo[e]);return t.name="aquaculture-tube",t.visible=!1,t.userData.color=e,t}function ax(s,e){const t=Number.isInteger(e)&&e>=0&&e<vo.length?e:0;s.userData.color!==t&&(s.material=vo[t],s.userData.color=t)}const lx=new yi(.022,.032,1.05,6).translate(0,.45,0),cx=new Vi(.28,.022,6,18).rotateX(Math.PI/2).translate(0,.98,0),ux=new Dl(.265,12).rotateX(-Math.PI/2).translate(0,.98,0),hx=new Vt({color:"#b9a98e",roughness:1}),dx=new Vt({color:"#d3ddcf",roughness:.9}),fx=new Xt({color:"#dce9e1",wireframe:!0,transparent:!0,opacity:.4,side:wt});function Mu(){const s=new it;return s.name="fry-catching-net",s.add(new $e(lx,hx),new $e(cx,dx),new $e(ux,fx)),s}function px(s,e){const t=new it;t.name="shared-aquaculture",s.add(t);const n=new Vi(10/3,.18,8,64).rotateX(Math.PI/2),i=new yi(3.24,3.13,3.2,48,4,!0).translate(0,-1.6,0),r=rx.map((S,T)=>{const b=new it;return b.name="fish-pen-"+S.id,b.position.set(S.x,0,S.z),b.add(new $e(n,new Vt({color:T?"#acbba5":"#c8bea8",roughness:.9,emissive:"#79e6cb",emissiveIntensity:0})),new $e(i,new Xt({color:"#a8c2b7",wireframe:!0,transparent:!0,opacity:.14,side:wt,depthWrite:!1,depthTest:!0}))),t.add(b),{pen:S,group:b,pulse:-1e4}}),o=document.createElement("canvas");o.width=256,o.height=128;const a=o.getContext("2d");function l(S){S.beginPath(),S.moveTo(235,64),S.bezierCurveTo(231,46,208,36,178,35),S.bezierCurveTo(137,34,108,47,80,57),S.bezierCurveTo(61,60,43,63,24,64),S.bezierCurveTo(43,65,61,68,80,74),S.bezierCurveTo(108,81,137,94,178,93),S.bezierCurveTo(208,92,231,82,235,64),S.closePath()}a.fillStyle="#1c3540",l(a),a.fill();const c=new Rf(o);c.colorSpace=Ht,c.magFilter=qt,c.generateMipmaps=!1,c.minFilter=qt;const h=new Mi(.85,.43).rotateX(-Math.PI/2),u=new Xt({color:"#ffffff",map:c,transparent:!0,opacity:.85,alphaTest:.42,depthWrite:!1,side:wt,polygonOffset:!0,polygonOffsetFactor:-1}),d=new po(h,u,50);d.name="fry-schools-instanced",d.frustumCulled=!1,d.castShadow=!1,d.receiveShadow=!1,d.renderOrder=3,t.add(d);const p=new po(h,new Xt({map:c,color:"#7bffe7",transparent:!0,opacity:.8,alphaTest:.42,blending:ti,depthWrite:!1,side:wt}),50);p.name="fry-night-glow",p.frustumCulled=!1,p.castShadow=!1,p.receiveShadow=!1,p.renderOrder=4,p.visible=!1,t.add(p);const g=Array.from({length:48},(S,T)=>({phase:T*2.39996%(Math.PI*2),drift:T*.73,spread:.85+T*17%11*.16,fear:0,catchAt:-1/0,catchDirection:0})),_=new ft,m=[],f=new Vi(.25,.014,4,20).rotateX(Math.PI/2);for(let S=0;S<4;S++){const T=new $e(f,new Xt({color:"#e7f5ed",transparent:!0,opacity:0,depthWrite:!1}));T.visible=!1,t.add(T),m.push({mesh:T,at:-1e4})}const w=new Float32Array(72),x=new bt;x.setAttribute("position",new Mt(w,3));const v=new Is(x,new pr({color:"#cbb98b",size:.09,transparent:!0,opacity:.9}));return v.frustumCulled=!1,t.add(v),{root:t,pens:r,startCatch(S,T){const b=xs.findIndex(C=>C.id===S);if(!(b<0))for(let C=0;C<12;C++){const y=g[b*12+C];y.catchAt=T,y.catchDirection=y.phase+C*.37}},feed(S,T){const b=r.find(C=>C.pen.id===S);b&&(b.pulse=T)},splash(S,T,b){const C=m.reduce((y,M)=>y.at<M.at?y:M);C.at=b,C.mesh.position.set(S,e(S,T)+.15,T)},update(S,T,b=0,C=null,y=12){const M=S*.001;t.visible=!0;const A=y>=19.5||y<5.5,D=.5+.5*Math.sin(M*1.7);d.material.color.set(A?"#a4fbe9":"#ffffff"),d.material.opacity=A?.95:.85,p.visible=A,p.material.opacity=.55+.35*D;for(let F=0;F<48;F++){const B=xs[Math.floor(F/12)],O=F%12,N=g[F],j=oo(B,S),G=T?.schools.find(P=>P.id===B.id),Z=M*(.25+F%5*.026)+N.phase,se=(.55+Math.sqrt((O+1)/12)*1.15)*N.spread;let fe=j.x+Math.cos(Z)*se+Math.sin(M*.31+N.drift)*.2,Me=j.z+Math.sin(Z*.83)*se*.72+Math.cos(M*.28+N.drift)*.2;const q=fe-(C?.x??1e8),te=Me-(C?.z??1e8),pe=Math.hypot(q,te),z=pe<3.3?Math.min(1,(3.3-pe)/1.9):0;N.fear+=(z-N.fear)*.15;const W=pe>.001?Math.atan2(te,q):N.phase,de=(S-N.catchAt)*.001,K=de>=0&&de<2.2?(1-Math.exp(-de*9))*Math.exp(-de*1.4)*1.55:0,J=N.fear*(.65+O%4*.22);fe+=Math.cos(W)*J+Math.cos(N.catchDirection)*K,Me+=Math.sin(W)*J+Math.sin(N.catchDirection)*K;const Q=-Math.sin(Z)*se*(.25+F%5*.026)+Math.cos(W)*N.fear*.6+Math.cos(N.catchDirection)*K,le=Math.cos(Z*.83)*se*.72*.83*(.25+F%5*.026)+Math.sin(W)*N.fear*.6+Math.sin(N.catchDirection)*K;_.position.set(fe,e(fe,Me)+.075,Me),_.rotation.set(0,-Math.atan2(le,Q),0),_.scale.setScalar(G&&G.availableAt<=S?.8+F%4*.075:0),_.updateMatrix(),d.setMatrixAt(F,_.matrix),p.setMatrixAt(F,_.matrix)}for(let F=0;F<r.length;F++){const B=r[F],O=T?.pens.find(pe=>pe.id===B.pen.id),N=O?.cycle,j=e(B.pen.x,B.pen.z),G=S-B.pulse,Z=B.group.children[0].material;Z.emissive.set(fl[b]||fl[0]);const se=.24+.08*(.5+.5*Math.sin(M*Math.PI*2/3));Z.emissiveIntensity=O?.members.length>=3?se:0,B.group.position.y=j+.14,B.group.rotation.x=Math.sin(M*.7+F)*.018,B.group.rotation.z=Math.cos(M*.6+F)*.018;const fe=M*.65+F,Me=B.pen.x+Math.sin(fe)*1.1,q=B.pen.z+Math.cos(fe)*1.1,te=G>=0&&G<1300?Math.sin(G/1300*Math.PI)*.6:0;_.position.set(Me,e(Me,q)+.15+te,q),_.rotation.set(0,-fe,te*.3),_.scale.setScalar(N?1+Math.min(1,(S-N.startedAt)/(N.completesAt-N.startedAt))*.8:0),_.updateMatrix(),d.setMatrixAt(48+F,_.matrix),p.setMatrixAt(48+F,_.matrix);for(let pe=0;pe<12;pe++){const z=(F*12+pe)*3,W=G/1300;w[z]=B.pen.x+Math.sin(pe*2.4)*(.4+pe*.06),w[z+2]=B.pen.z+Math.cos(pe*2.4)*(.4+pe*.06),w[z+1]=W>=0&&W<1?j+.1+(1-W)*1.1:-1e4}}x.attributes.position.needsUpdate=!0,d.instanceMatrix.needsUpdate=!0,p.instanceMatrix.needsUpdate=!0;for(const F of m){const B=(S-F.at)/850;F.mesh.visible=B>=0&&B<1,F.mesh.visible&&(F.mesh.scale.setScalar(1+B*3),F.mesh.material.opacity=(1-B)*.65)}}}}function mx({scene:s,camera:e,controls:t,character:n,url:i}){const r=document.createElement("div");r.className="multiplayer-status";const o=document.createElement("span");o.setAttribute("role","status"),o.setAttribute("aria-live","polite");const a=document.createElement("button");a.type="button",a.textContent="다시 접속",a.hidden=!0,r.append(o,a),document.querySelector("#app").append(r);const l=document.createElement("div");l.className="player-names",document.querySelector("#app").append(l);const c=new L,h=new Map;let u=null,d=null,p=null;const g=new Map;let _=null,m=!1;const f=["❤️","👋","😂","👍","🎉","😢","😮","👏"],w=new Tt().setFromAxisAngle(new L(1,0,0),-Math.PI/2).multiply(new Tt().setFromAxisAngle(new L(0,0,1),Math.PI));let x=20,v=null,S=null,T=null,b=!1,C=!1,y=!1,M=null,A=0,D=null,F=0,B=0;function O(K,J=!1){o.textContent=K,a.hidden=!J}function N(K){const J=document.createElement("span");return J.className="player-name",J.hidden=!0,J.textContent=K,l.append(J),J}function j(K){const J=h.get(K);J&&(J.root.userData.headPlatformEnabled=!1,s.remove(J.root),mh(J.avatar.mesh),J.label.remove(),J.emoteLabel.remove(),h.delete(K))}function G(){for(const K of[...h.keys()])j(K);T?.remove(),T=null}function Z(){O(`함께 항해 중 · ${h.size+1}/${x}명`)}function se(K){n.player.userData.tubeColor=K.tubeColor||0;const J=_u(K.id);n.setCharacter(J.model,J.hairColor);const Q=new L(K.x,K.y,K.z).sub(n.player.position);n.player.position.add(Q),n.player.rotation.y=K.rotation,e.position.add(Q),t.target.add(Q),t.update()}function fe(K){if(K.id===S)return;if(h.has(K.id)){Me(K);return}const J=_u(K.id),Q=dl(J.model,J.hairColor),le=new it;le.name=`remote-${K.id}`,le.userData.playerId=K.id,Q.mesh.rotation.y=Math.PI;const P=new it;P.position.y=Nt,P.add(Q.mesh),le.add(P),s.add(le),le.position.set(K.x,K.y,K.z),le.rotation.y=K.rotation;const oe=N("");oe.style.fontSize="34px",oe.style.background="transparent",oe.style.padding="0";const ce=gh(K.tubeColor||0);le.add(ce),h.set(K.id,{root:le,avatar:Q,motionPivot:P,tube:ce,label:N(K.nickname),emoteLabel:oe,emoteUntil:0,jumpHeight:0,samples:[{...K,time:performance.now()}]})}function Me(K){if(K.id===S)return;const J=h.get(K.id);if(!J){fe(K);return}J.samples.push({...K,time:performance.now()}),J.samples.length>20&&J.samples.shift()}function q(){if(C||y||M)return;const K=Math.min(1e4,500*2**Math.min(A++,5))+Math.random()*250;O("연결이 끊겼습니다 · 재접속 중…"),M=setTimeout(()=>{M=null,te()},K)}async function te(){if(C||y||m||v?.readyState===WebSocket.OPEN||v?.readyState===WebSocket.CONNECTING)return;m=!0,b=!1,n.setEnabled(!1),G(),O("공용 배에 접속 중…");try{await _?.prepare()}catch{}if(m=!1,C||y)return;let K;try{K=new WebSocket(i,_?.protocols())}catch{y=!0,O("멀티플레이 서버 주소 설정 오류");return}v=K,K.onmessage=J=>{if(v!==K||(F=performance.now(),J.data==="pong"))return;let Q;try{Q=JSON.parse(J.data)}catch{return}if(Q.type==="full"){x=Q.capacity||20,y=!0,O(`정원 초과 · 최대 ${x}명까지 탑승할 수 있습니다.`,!0),K.close(4003,"Room full");return}if(Q.type==="welcome"){if(Q.protocol!==2){y=!0,O("서버 버전이 다릅니다. 새로고침해 주세요."),K.close(1002);return}_?.welcome(Q),x=Q.capacity||20,S=Q.you,n.player.userData.playerId=S;const le=Q.players.find(P=>P.id===S);if(!le){K.close(1002);return}G(),se(le),T=N(`${le.nickname} (나)`);for(const P of Q.players)fe(P);b=!0,A=0,B=0,D=null,n.setEnabled(!0),Z();return}if(b){if(Q.type==="aquaResult"){const le=g.get(Q.requestId);le&&(clearTimeout(le.timer),g.delete(Q.requestId),Q.ok?le.resolve(Q):le.reject(new Error(Q.error)))}if(["aquaState","aquaRefresh","aquaEvent","aquaError"].includes(Q.type)&&p?.(Q),Q.type==="join"&&(fe(Q.player),Z()),Q.type==="state"&&Me(Q.player),Q.type==="emote"&&f.includes(Q.icon)){const le=h.get(Q.id);le&&(le.emoteLabel.textContent=Q.icon,le.emoteUntil=performance.now()+3e3)}if(Q.type==="fishShow"&&typeof Q.fishId=="string"){const le=h.get(Q.id);le&&u?.(Q.fishId,le)}if(Q.type==="firework"&&Number.isInteger(Q.color)&&Q.color>=0&&Q.color<5){const le=h.get(Q.id);le&&d?.(Q.color,le)}Q.type==="leave"&&(j(Q.id),Z()),Q.type==="correction"&&(se(Q.player),D=null)}},K.onclose=J=>{v===K&&(v=null,b=!1,n.setEnabled(!1),G(),J.code===4003?(y=!0,O(`정원 초과 · 최대 ${x}명까지 탑승할 수 있습니다.`,!0)):J.code===1008?(y=!0,O("연결 요청이 거부되었습니다. 다시 접속해 주세요.",!0)):q())},K.onerror=()=>{}}a.onclick=()=>{y=!1,A=0,te()};let pe=null,z=null;if(!i)O("혼자 항해 중 · 멀티플레이 서버 연결 대기");else{let K;try{K=new URL(i)}catch{return O("멀티플레이 서버 주소 설정 오류"),{update(){}}}if(!["ws:","wss:"].includes(K.protocol)||location.protocol==="https:"&&K.protocol!=="wss:")return O("멀티플레이에는 올바른 보안 WebSocket 주소가 필요합니다."),{update(){}};_=sx(i),te(),pe=setInterval(()=>{if(!b||v?.readyState!==WebSocket.OPEN||v.bufferedAmount>4096)return;const J=n.player,Q={x:J.position.x,y:J.position.y,z:J.position.z,rotation:J.rotation.y,moving:!!J.userData.moving,...n.getNetworkState()};D&&Math.hypot(Q.x-D.x,Q.z-D.z)<.005&&Math.abs(Math.atan2(Math.sin(Q.rotation-D.rotation),Math.cos(Q.rotation-D.rotation)))<.005&&Q.moving===D.moving&&Q.sitting===D.sitting&&Q.lying===D.lying&&Q.jump===D.jump&&Q.inWater===D.inWater&&Q.returning===D.returning&&Math.abs(Q.jumpHeight-D.jumpHeight)<.06&&Math.abs(Q.verticalOffset-D.verticalOffset)<.04||(v.send(JSON.stringify({type:"state",seq:B++,...Q})),D=Q)},100),z=setInterval(()=>{if(v?.readyState===WebSocket.OPEN){if(performance.now()-F>55e3){v.close(4e3,"Heartbeat timeout");return}v.send("ping")}},2e4)}function W(K,J,Q=0){c.copy(J),c.y+=Nt+Q+3.15,c.project(e);const le=c.z>-1&&c.z<1&&Math.abs(c.x)<1.1&&Math.abs(c.y)<1.1;K.hidden=!le,le&&(K.style.left=`${(c.x*.5+.5)*innerWidth}px`,K.style.top=`${(-c.y*.5+.5)*innerHeight}px`)}function de(K,J=!0){const Q=performance.now()-100;for(const le of h.values()){const P=le.samples;for(;P.length>2&&P[1].time<=Q;)P.shift();const oe=P[0],ce=P[1]||oe,Se=ce.time>oe.time?Xe.clamp((Q-oe.time)/(ce.time-oe.time),0,1):1;le.root.position.set(Xe.lerp(oe.x,ce.x,Se),Xe.lerp(oe.y,ce.y,Se),Xe.lerp(oe.z,ce.z,Se)),le.root.rotation.y=oe.rotation+Math.atan2(Math.sin(ce.rotation-oe.rotation),Math.cos(ce.rotation-oe.rotation))*Se;const re=Se<.5?oe:ce,De=Number.isFinite(oe.verticalOffset)?oe.verticalOffset:0,ue=Number.isFinite(ce.verticalOffset)?ce.verticalOffset:De,ve=Xe.lerp(De,ue,Se);le.jumpHeight+=(ve-le.jumpHeight)*Math.min(1,K*24),le.motionPivot.position.y=Nt+(re.lying?0:le.jumpHeight),le.tube.visible=!!re.inWater&&!re.returning,le.tube.position.y=le.motionPivot.position.y+le.avatar.mesh.position.y+1.5,le.tube.rotation.z=Math.sin(performance.now()*.0017+le.root.position.x)*.025,re.lying?(le.avatar.mesh.position.set(0,.58,-1.08),le.avatar.mesh.quaternion.copy(w)):(le.avatar.mesh.position.set(0,0,0),le.avatar.mesh.rotation.set(0,Math.PI,0));const ke=ce.time>oe.time?(ue-De)*1e3/(ce.time-oe.time):0,Ve=!!re.jump&&!re.returning&&ke<-7;re.lying||le.avatar.update(K,re.moving,!!re.sitting,re.jump||re.returning?1:0,!!re.inWater,Ve),le.root.userData.headPlatformEnabled=!re.lying&&!re.inWater&&!re.returning,le.root.userData.headPlatformY=le.root.position.y+le.motionPivot.position.y+le.avatar.mesh.position.y+2.83,W(le.label,le.root.position,re.lying?0:le.jumpHeight),J||(le.label.hidden=!0),le.emoteUntil>performance.now()?(W(le.emoteLabel,le.root.position,re.lying?0:le.jumpHeight),le.emoteLabel.style.top=`${parseFloat(le.emoteLabel.style.top)-38}px`,J||(le.emoteLabel.hidden=!0)):le.emoteLabel.hidden=!0}T&&(W(T,n.player.position,n.getNetworkState().lying?0:n.getNetworkState().verticalOffset),J||(T.hidden=!0))}return addEventListener("pagehide",()=>{C=!0,clearTimeout(M),M=null,v?.close(1e3,"Leaving")}),addEventListener("pageshow",K=>{K.persisted&&i&&(C=!1,v=null,te())}),addEventListener("online",()=>{i&&!b&&!y&&(clearTimeout(M),M=null,te())}),{update:de,onAquaculture(K){p=K},aquaSnapshot(){b&&v?.readyState===WebSocket.OPEN&&v.send(JSON.stringify({type:"aqua",action:"snapshot"}))},aquaRequest(K,J={}){if(!b||v?.readyState!==WebSocket.OPEN)return Promise.reject(new Error("멀티플레이 연결 후 이용할 수 있습니다."));const Q=crypto.randomUUID(),le=JSON.stringify({type:"aqua",requestId:Q,action:K,...J});return new Promise((P,oe)=>{let ce=!1;const Se={resolve:P,reject:oe,timer:null},re=()=>{Se.timer=setTimeout(()=>{!ce&&v?.readyState===WebSocket.OPEN?(ce=!0,v.send(le),re()):(g.delete(Q),oe(new Error("응답을 확인하지 못했습니다. 잠시 후 기록을 다시 확인해 주세요.")))},6e3)};g.set(Q,Se),v.send(le),re()})},forEachRemote(K){for(const J of h.values())K(J)},onFishShow(K){u=K},sendFishShow(K){b&&v?.readyState===WebSocket.OPEN&&v.send(JSON.stringify({type:"fishShow",fishId:K}))},onFirework(K){d=K},sendFirework(K){b&&v?.readyState===WebSocket.OPEN&&Number.isInteger(K)&&K>=0&&K<5&&v.send(JSON.stringify({type:"firework",color:K}))},sendEmote(K){b&&v?.readyState===WebSocket.OPEN&&f.includes(K)&&v.send(JSON.stringify({type:"emote",icon:K}))},dispose(){C=!0,clearTimeout(M),clearInterval(pe),clearInterval(z),v?.close(1e3),G(),r.remove(),l.remove()}}}const Su=""+new URL("sea_fish_atlas-w0mfpsBV.png",import.meta.url).href,gx=["🛟 튜브를 타고 바다로 내려가 치어를 잡아보세요!","🐟 바다에 있는 치어 군집을 찾아보세요!","🥅 뜰채를 사용해 치어를 잡아보세요!","⭕ 잡은 치어를 가두리에 풀어주세요!","🍚 치어에게 먹이를 주세요!","🐟 먹이를 줄수록 수확량이 늘어나요. 같은 사람은 3시간마다 먹이를 줄 수 있고, 12시간 후 물고기를 수확할 수 있어요!"],yt=(s,e,t)=>{const n=document.createElement(s);return e&&(n.className=e),t!==void 0&&(n.textContent=t),n},bu={oarfish:"깊은 바다에 사는 길고 은빛인 물고기예요. 붉은 지느러미가 물결처럼 이어져요.",coelacanth:"아주 오래된 계통의 심해어예요. 독특한 지느러미로 천천히 헤엄쳐요.",sunfish:"납작하고 커다란 몸이 특징이에요. 바다 표면 가까이에서 쉬기도 해요.",mandarin:"산호초 근처에 사는 작고 화려한 물고기예요. 알록달록한 무늬가 매력적이에요.",lionfish:"화려한 줄무늬와 긴 지느러미가 특징이에요. 지느러미 가시에는 독이 있어요.","blue-tang":"푸른 몸과 노란 꼬리가 눈에 띄어요. 산호초 주변에서 살아요.","yellow-tang":"밝은 노란색 몸을 가진 산호초 물고기예요. 주로 해조류를 먹어요.",clownfish:"말미잘 촉수 사이에서 보호받으며 살아요. 주황색 몸에 흰 줄무늬가 있어요.",sardine:"은빛 몸으로 반짝이며 커다란 무리를 이루어요. 바다 생태계의 중요한 먹이예요.",anchovy:"작고 날씬한 몸으로 무리 지어 헤엄쳐요. 플랑크톤을 먹고 자라요."},Eu=s=>{const e=Math.max(0,Math.ceil(s/1e3));return[Math.floor(e/3600),Math.floor(e%3600/60),e%60].map(t=>String(t).padStart(2,"0")).join(":")};function _x({scene:s,camera:e,character:t,multiplayer:n,ocean:i,isAvailable:r}){const o=px(s,i.heightAt),a=gh(0);s.add(a),t.setWaterHeightSampler(i.heightAt);const l=document.querySelector("#app"),c=yt("button","aqua-toggle","🐟 물고기 도감");c.id="aquaculture-toggle",c.type="button",c.setAttribute("aria-expanded","false"),c.dataset.aquaUi="",l.append(c);const h=yt("div","aqua-tutorial");h.setAttribute("role","status"),l.append(h);const u=yt("button","aqua-interact");u.dataset.aquaUi="",u.type="button",u.hidden=!0,l.append(u);const d=yt("div","aqua-toast");d.setAttribute("role","status"),d.hidden=!0,l.append(d);const p=yt("section","aqua-panel");p.dataset.aquaUi="",p.hidden=!0,p.setAttribute("aria-label","공동 양식과 물고기 도감");const g=yt("div","aqua-panel-head"),_=yt("h2","","물고기 도감");g.append(_),p.append(g);const m=yt("p","aqua-summary",""),f=yt("button","aqua-harvest");yt("div","aqua-pen-list");const w=yt("div","aqua-book");p.append(w),l.append(p);const x=yt("section","aqua-reward");x.hidden=!0,x.dataset.aquaUi="",x.setAttribute("role","dialog"),x.setAttribute("aria-label","가두리 수확 결과");const v=yt("h3","","🐟 물고기를 획득했어요!"),S=yt("div","aqua-reward-list"),T=yt("button","","물고기 챙기기 ✓");T.type="button",T.onclick=()=>{x.hidden=!0},x.append(v,S,T),l.append(x);const b=[],C=new L,y=new wo,M=new L,A=new L,D=new Map;let F=!1,B=null,O=0,N=performance.now(),j=!1,G=!1,Z=null,se=!1,fe=-1,Me=!1,q=0,te=null,pe=0;const z=()=>O?O+(performance.now()-N):Date.now();function W(U){d.textContent=U,d.hidden=!1,q=performance.now()+5e3}function de(U){if(p.hidden=!U,c.setAttribute("aria-expanded",String(U)),U){const H=document.querySelector("details[open]");H&&(H.open=!1),n.aquaSnapshot()}else c.focus()}document.addEventListener("visibilitychange",()=>{document.hidden||n.aquaSnapshot()}),c.onclick=()=>de(p.hidden),document.addEventListener("pointerdown",U=>{!p.hidden&&!p.contains(U.target)&&!c.contains(U.target)&&de(!1)}),addEventListener("keydown",U=>{U.code==="Escape"&&!p.hidden&&de(!1)});async function K(U,H={}){j=!0,u.disabled=!0;try{return await n.aquaRequest(U,H)}catch(ee){return W(ee.message),null}finally{j=!1,u.disabled=!1}}function J(U){const H=B?.personal;return H?H.penId?H.penId!==U.id?{text:"다른 가두리에 참여 중",disabled:!0}:H.pending>0?{action:"harvest",text:`🐟 물고기 ${H.pending}마리 수확하기`,disabled:!1}:U.cycle?U.cycle.feeds.length>=3?{text:"먹이 3/3 · 성장 중",disabled:!0}:H.nextFeedAt>z()?{text:`다음 먹이 ${Eu(H.nextFeedAt-z())}`,disabled:!0}:{action:"feed",text:`🍚 먹이 주기 (${U.cycle.feeds.length}/3)`,disabled:!1}:{action:"release",text:"🐟 치어 1마리 방류",disabled:H.fry<1}:{action:"join",text:`가두리 ${U.id} 참여 (${U.members.length}/3)`,disabled:U.members.length>=3}:null}async function Q(U){const H=J(U);if(!H?.action||H.disabled)return;if(H.action==="harvest"){await P(U);return}await K(H.action,{penId:U.id})&&W(H.action==="join"?`가두리 ${U.id}에 참여했습니다.`:H.action==="release"?"치어를 방류했습니다. 12시간 양식이 시작됩니다.":"먹이를 주었습니다. 기여한 만큼 보상이 보존됩니다.")}async function le(U){if(Z||j)return;const H=await K("collectStart",{schoolId:U.id});H&&(Z={school:U,challengeId:H.challengeId,start:performance.now(),duration:Math.max(yu,H.endsAt-z())},o.startCatch(U.id,z()))}u.onclick=()=>{!te||j||Z||(te.school?le(te.school):te.pen&&Q(te.pen))};async function P(U){if(j||!ke(U)||B?.personal?.penId!==U.id||!B.personal.pending)return;const H=await K("harvest",{penId:U.id});H&&(S.replaceChildren(...(H.fish||[]).map(ee=>{const V=cs.find(he=>he.id===ee),me=yt("div","aqua-reward-fish");return V&&me.append(oe(V,!0)),me.append(yt("strong","",V?.name||"물고기"),yt("small","",V?.rarity||"")),me})),x.hidden=!1)}f.hidden=!0;function oe(U,H){const ee=cs.findIndex(we=>we.id===U.id),V=yt("span","aqua-fish-sprite"+(H?"":" unowned"));V.setAttribute("role","img"),V.setAttribute("aria-label",U.name),V.style.setProperty("--fish-column",String(ee%5)),V.style.setProperty("--fish-row",String(Math.floor(ee/5)));const me=yt("span","aqua-fish-fallback");me.innerHTML=ce(U,H).outerHTML,V.append(me);const he=new Image;return he.onload=()=>{V.style.backgroundImage=`url("${Su}")`,V.classList.add("atlas-ready")},he.onerror=()=>{V.classList.remove("atlas-ready")},he.src=Su,V}function ce(U,H){const ee=document.createElementNS("http://www.w3.org/2000/svg","svg");ee.setAttribute("viewBox","0 0 120 76"),ee.setAttribute("aria-hidden","true");const V=ee.namespaceURI,me=(Le,k,Ee=ee)=>{const Pe=document.createElementNS(V,Le);for(const[Ue,be]of Object.entries(k))Pe.setAttribute(Ue,be);return Ee.append(Pe),Pe};me("defs",{});const he=me("linearGradient",{id:"fish-"+U.id,x1:"0",y1:"0",x2:"0",y2:"1"});me("stop",{offset:"0%","stop-color":"#ffffff","stop-opacity":".8"},he),me("stop",{offset:"48%","stop-color":U.color},he),me("stop",{offset:"100%","stop-color":"#183d56"},he);const we=me("g",{transform:"translate(0 3)"}),xe=U.id,ye=xe==="oarfish"||xe==="sardine"||xe==="anchovy",ge=xe==="sunfish",Te=xe==="lionfish",Re=ge?"M17 37 Q21 6 59 9 Q94 8 91 36 Q91 64 58 65 Q22 64 17 37Z":ye?"M10 37 Q31 25 77 29 Q92 32 94 37 Q91 44 77 46 Q31 49 10 37Z":"M14 37 Q27 14 62 18 Q88 20 92 37 Q88 55 62 57 Q27 60 14 37Z";if(me("path",{d:ge?"M90 36 L107 27 L108 48Z":ye?"M90 37 L114 25 L109 37 L114 49Z":"M88 37 L113 20 L107 37 L113 54Z",fill:U.color,stroke:"#224b63","stroke-width":"1.5"},we),Te||xe==="mandarin"||xe==="coelacanth"?me("path",{d:"M31 23 L39 6 L47 19 L55 5 L65 18 L75 10 L79 24Z",fill:U.color,stroke:"#345a69","stroke-width":"1"},we):me("path",{d:ge?"M43 15 L62 0 L70 15Z":"M40 22 Q57 6 74 22Z",fill:U.color,opacity:".9"},we),me("path",{d:Re,fill:"url(#fish-"+U.id+")",stroke:"#285066","stroke-width":"1.7"},we),xe==="clownfish")for(const Le of[39,65])me("path",{d:"M"+Le+" 20 Q"+(Le+12)+" 37 "+Le+" 55",fill:"none",stroke:"#f8f4e7","stroke-width":"9"},we);if(xe==="blue-tang"&&me("path",{d:"M30 30 Q55 14 82 33 Q60 48 34 43",fill:"none",stroke:"#153b87","stroke-width":"8"},we),xe==="mandarin")for(let Le=0;Le<6;Le++)me("circle",{cx:35+Le*9,cy:30+Le%2*12,r:3.6,fill:"#f6a447"},we);if(xe==="coelacanth")for(let Le=0;Le<8;Le++)me("circle",{cx:34+Le%4*12,cy:29+Math.floor(Le/4)*13,r:2.6,fill:"#c4d8e0",opacity:".8"},we);if(xe==="oarfish"&&me("path",{d:"M34 27 Q54 -5 76 13 Q90 -1 101 17",fill:"none",stroke:"#df6683","stroke-width":"5"},we),xe==="lionfish")for(let Le=0;Le<5;Le++)me("path",{d:"M"+(37+Le*11)+" 24 L"+(30+Le*14)+" 2 M"+(37+Le*11)+" 52 L"+(30+Le*14)+" 70",stroke:"#e5a285","stroke-width":"3"},we);return me("path",{d:"M52 40 Q67 48 77 40",fill:"none",stroke:"#224b63","stroke-width":"2",opacity:".65"},we),me("circle",{cx:29,cy:33,r:4.1,fill:"#f7ffff",stroke:"#204154","stroke-width":"1"},we),me("circle",{cx:30,cy:33,r:2.2,fill:"#162f43"},we),H||(me("rect",{x:0,y:0,width:120,height:76,fill:"#18343d",opacity:".8"}),ee.style.filter="grayscale(1)"),ee}const Se=new Map;function re(U,H){const ee=cs.find(he=>he.id===U);if(!ee||!H)return;Se.get(H)?.el.remove();const V=yt("div","aqua-showcase");V.append(oe(ee,!0),yt("strong","",ee.name+" 자랑 중!")),V.style.cssText="position:fixed;z-index:70;pointer-events:none;display:flex;flex-direction:column;align-items:center;transform:translate(-50%,-100%);filter:drop-shadow(0 3px 7px #0009)";const me=V.firstChild;me.style.cssText="display:block;width:120px;height:95px;background-size:500% 200%;background-repeat:no-repeat;background-position:"+cs.findIndex(he=>he.id===U)%5*25+"% "+Math.floor(cs.findIndex(he=>he.id===U)/5)*100+"%",l.append(V),Se.set(H,{el:V,start:performance.now()})}n.onFishShow((U,H)=>re(U,H.root.userData.playerId));function De(){const U=performance.now(),H=t.player.userData.playerId;function ee(V,me){const he=Se.get(V);if(!he)return;const we=new L(0,0,-1).applyQuaternion(me.quaternion),xe=me.position.clone().addScaledVector(we,1);xe.y+=2.5+Math.sin(U*.003)*.08,xe.project(e),he.el.hidden=xe.z<=0||xe.z>=1||Math.abs(xe.x)>1||Math.abs(xe.y)>1||F,he.el.style.left=(xe.x+1)*50+"%",he.el.style.top=(1-xe.y)*50+"%"}ee(H,t.player),n.forEachRemote(V=>ee(V.root.userData.playerId,V.root));for(const[V,me]of Se){const he=U-me.start;me.el.style.opacity=String(Math.min(1,he/250,(5e3-he)/400)),he>=5e3&&(me.el.remove(),Se.delete(V))}}function ue(){if(!B?.personal)return;const U=B.personal;w.replaceChildren(...cs.map(H=>{const ee=U.inventory.find(xe=>xe.fishId===H.id),V=yt("div","aqua-fish aqua-rarity-"+H.rarity+(ee?" owned":""));V.append(oe(H,!!ee),yt("strong","",H.name),yt("small","",ee?`${ee.quantity}마리 보유`:"미발견"));const me=yt("div","aqua-fish-info",bu[H.id]);me.setAttribute("role","tooltip"),V.append(me),V.tabIndex=0,V.setAttribute("aria-label",H.name+". "+bu[H.id]),ee&&(V.style.cursor="pointer",V.title="클릭해서 5초간 물고기 자랑하기",V.addEventListener("click",()=>{re(H.id,t.player.userData.playerId),n.sendFishShow(H.id),de(!1)}),V.addEventListener("keydown",xe=>{(xe.key==="Enter"||xe.key===" ")&&(xe.preventDefault(),V.click())}));let he;const we=()=>{clearTimeout(he),V.classList.remove("show-info")};return V.addEventListener("pointerdown",xe=>{xe.pointerType==="touch"&&(clearTimeout(he),he=setTimeout(()=>V.classList.add("show-info"),500))}),V.addEventListener("pointerup",we),V.addEventListener("pointercancel",we),V.addEventListener("pointerleave",we),V.addEventListener("contextmenu",xe=>{xe.pointerType==="touch"&&xe.preventDefault()}),V}))}function ve(){const U=t.getNetworkState();return U.inWater&&!U.returning&&!U.jump}function ke(U){return ve()&&Math.hypot(t.player.position.x-U.x,t.player.position.z-U.z)<=5.4}function Ve(U,H,ee,V,me,he=!1){if(he&&me){e.getWorldPosition(A),M.set(H,ee,V).sub(A);const Re=M.length();M.normalize(),y.set(A,M),y.far=Math.max(0,Re-.25),y.intersectObjects(s.children,!0).some(Le=>{let k=Le.object;for(;k;){if(k===o.root||k===a||k.name==="ocean"||k.name==="water"||k.material?.name==="OceanSurface")return!1;k=k.parent}return Le.object.isMesh&&!Le.object.material?.transparent})&&(me=!1)}C.set(H,ee,V).project(e);const we=(C.x*.5+.5)*innerWidth,xe=(-C.y*.5+.5)*innerHeight,ye=U.offsetWidth/2,ge=U.offsetHeight,Te=8;if(U.hidden=!me||C.z<0||C.z>1||we-ye<Te||we+ye>innerWidth-Te||xe-ge<Te||xe>innerHeight-Te,!U.hidden){if(U.classList.contains("aqua-school-label")){t.player.updateWorldMatrix(!0,!1);const Re=t.player.getWorldPosition(new L);if(Re.y+=2.3,Re.project(e),Re.z>0&&Re.z<1){const Ce=(Re.x*.5+.5)*innerWidth,Le=(-Re.y*.5+.5)*innerHeight;if(Math.abs(we-Ce)<Math.max(42,ye+24)&&Math.abs(xe-Le)<Math.max(75,ge+40)){U.hidden=!0;return}}}U.style.left=`${we}px`,U.style.top=`${xe}px`}}n.onAquaculture(U=>{if(U.type==="aquaError"){m.textContent="양식 서버 연결을 확인해 주세요.",W(U.error);return}if(U.type==="aquaRefresh"){n.aquaSnapshot();return}if(U.type==="aquaState"){B=U.state,O=B.serverNow,N=performance.now(),ue();return}if(U.type==="aquaEvent"){if(U.action==="feed"&&o.feed(U.penId,z()),U.action==="collectFinish"){const H=xs.find(ee=>ee.id===U.schoolId);if(H){const ee=oo(H,z());o.splash(ee.x,ee.z,z())}}if(U.action==="collectStart"&&U.actorId!==t.player.userData.playerId){const H=D.get(U.actorId);H&&s.remove(H.net);const ee=Mu();s.add(ee),D.set(U.actorId,{net:ee,start:performance.now(),duration:yu})}}});function I(U,H=12){De();const ee=r()&&!F,V=z(),me=B?.personal,he=t.getNetworkState(),we=ve();me?.pending>0&&!G&&(W("🐟 물고기가 자랐어요! 참여한 가두리로 가서 챙기세요."),G=!0),me?.pending||(G=!1);const xe=!!document.querySelector("details[open]");xe&&!p.hidden&&de(!1),c.hidden=!ee||xe,p.hidden=p.hidden||!ee,h.hidden=!ee||!p.hidden||!me||me.tutorial>=6,h.hidden||(h.textContent=gx[me.tutorial]||""),me?.tutorial===5&&!h.hidden&&!Me&&(Me=!0,setTimeout(()=>{if(h.hidden){Me=!1;return}n.aquaRequest("tutorialDone").catch(()=>{}).finally(()=>Me=!1)},12e3)),ee&&performance.now()-pe>15e3&&(pe=performance.now(),n.aquaSnapshot()),a.visible=he.inWater&&!he.returning,ax(a,t.player.userData.tubeColor||0),a.material.emissiveIntensity=.2+Math.max(0,t.player.userData.waterKickPulse||0)*.55,t.player.updateWorldMatrix(!0,!0);const ye=t.player.children[0].getWorldPosition(new L).y;if(a.position.set(t.player.position.x,ye+1.5,t.player.position.z),a.rotation.z=Math.sin(V*.0017)*.025,o.update(V,B,a.userData.color,we?t.player.position:null,H),te=null,ee&&me&&we&&!j){const ge=xs.find(Te=>{const Re=oo(Te,V);return Math.hypot(t.player.position.x-Re.x,t.player.position.z-Re.z)<=2});if(ge){const Te=B.schools.find(Re=>Re.id===ge.id);te={school:ge},u.textContent=Te.availableAt>V?`치어가 다시 모이는 중 · ${Math.ceil((Te.availableAt-V)/1e3)}초`:me.fry>=5?"치어 보유 한도 5/5":"🥅 뜰채로 치어 채집 (2초)",u.disabled=Te.availableAt>V||me.fry>=5}else{const Te=B.pens.find(ke);if(Te){te={pen:Te};const Re=J(Te);u.textContent=`가두리 ${Te.id} · ${Te.members.length}/3명
${Te.members.map(Ce=>Ce.nickname+(Ce.mine?" (나)":"")).join(" · ")||"참여자 없음"}
${Re?.text||""}`,u.disabled=Re?.disabled||!1}}}if(u.classList.toggle("aqua-pen-interact",!!te?.pen),u.hidden=!te||!p.hidden,te?.pen&&!u.hidden){const ge=te.pen;Ve(u,ge.x,i.heightAt(ge.x,ge.z)+2.3,ge.z,!0)}if(Z){u.hidden=!ee,u.disabled=!0;const ge=(performance.now()-Z.start)/Z.duration;if(u.textContent=`🥅 채집 중 ${Math.min(100,Math.floor(ge*100))}%`,Z.net||(Z.net=Mu(),s.add(Z.net)),t.setNetPose(ge),Z.net.position.copy(t.getFireworkHandPosition()),Z.net.rotation.set(Math.sin(ge*Math.PI)*-.6,t.player.rotation.y,Math.PI-.45),ge>=1){const Te=Z;Z=null,s.remove(Te.net),K("collectFinish",{challengeId:Te.challengeId}).then(Re=>{Re&&W("치어 1마리를 채집했습니다! 가두리로 가져가 보세요.")})}}n.forEachRemote(ge=>{const Te=D.get(ge.root.userData.playerId);if(!Te)return;const Re=(performance.now()-Te.start)/Te.duration;if(Re>=1){s.remove(Te.net),D.delete(ge.root.userData.playerId);return}ge.avatar.netPose(Re),ge.root.updateMatrixWorld(!0),Te.net.position.copy(ge.avatar.rightHandWorldPosition()),Te.net.rotation.set(-.4,ge.root.rotation.y,Math.PI-.45)});for(const[ge,Te]of D)performance.now()-Te.start>3e3&&(s.remove(Te.net),D.delete(ge));if(me&&ee&&we&&!se&&(me.tutorial===0||me.tutorial===1&&xs.some(ge=>{const Te=oo(ge,V);return Math.hypot(t.player.position.x-Te.x,t.player.position.z-Te.z)<3.7}))&&(se=!0,n.aquaRequest("observe").catch(()=>{}).finally(()=>{setTimeout(()=>se=!1,3e3)})),d.hidden=performance.now()>q,Math.floor(V/1e3)!==fe&&(fe=Math.floor(V/1e3),!p.hidden&&B))for(const ge of B.pens){const Te=p.querySelector(`[data-pen-clock="${ge.id}"]`),Re=p.querySelector(`[data-pen-action="${ge.id}"]`),Ce=J(ge);Te?.firstChild&&(Te.firstChild.nodeValue=ge.cycle?`먹이 ${ge.cycle.feeds.length}/3 · 남은 ${Eu(ge.cycle.completesAt-V)}`:"치어 1마리를 방류하면 시작합니다."),Re&&Ce&&(Re.textContent=Ce.text,Re.disabled=j||!Ce.action||Ce.disabled||!ke(ge))}}function E(U){F=U,o.root.visible=!U;for(const{el:H}of b)H.hidden=U;U&&(u.hidden=!0,h.hidden=!0,d.hidden=!0)}return{update:I,world:o,setOverview:E,getState:()=>B}}function vx(s,e){const t={value:0},n={value:0},i=e.camera,r=[],o=[],a=[];for(let T=0;T<4e3;T++){const b=.025+Math.random()*.975,C=Math.random()*Math.PI*2,y=Math.sqrt(1-b*b);r.push(y*Math.cos(C)*16e3,b*16e3,y*Math.sin(C)*16e3),o.push(Math.random()*Math.PI*2),a.push(Math.random()<.045?3.8+Math.random()*2.2:1.1+Math.random()*2.4)}const l=new bt;l.setAttribute("position",new xt(r,3)),l.setAttribute("phase",new xt(o,1)),l.setAttribute("size",new xt(a,1));const c=new Is(l,new Wt({uniforms:{time:t,night:n},transparent:!0,depthWrite:!1,blending:ti,vertexShader:`attribute float phase,size;uniform float time,night;varying float brightness,tint;
      void main(){brightness=night*(.5+.5*pow(.5+.5*sin(time*(1.2+size*.6)+phase),2.));tint=phase/6.283;
      gl_PointSize=size;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:"varying float brightness,tint;void main(){float d=length(gl_PointCoord-.5)*2.;float glow=exp(-d*d*4.)*(1.-smoothstep(.6,1.,d));gl_FragColor=vec4(mix(vec3(.64,.79,1.),vec3(1.,.89,.73),tint),brightness*glow);}"}));c.name="night-stars",c.renderOrder=-9,s.add(c);const h=new $e(new Hn(21e3,32,16),new Wt({uniforms:{...e.uniforms,time:t},side:Jt,transparent:!0,depthWrite:!1,vertexShader:"varying vec3 direction;void main(){direction=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`
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
        vec3 lightDir=normalize(vec3(sunDirection.x,max(sunDirection.y,.25),sunDirection.z));
        vec3 ambient=mix(vec3(.045,.065,.12),vec3(.44,.56,.70),daylight);
        vec3 directBase=mix(vec3(.12,.18,.29),sunColor,daylight)*(.2+sunVisible*.85);
        for(int i=0;i<24;i++){
          if(float(i)>=cloudSamples)break;
          vec3 p=d*(start+(float(i)+.5)*stepSize);
          float den=density(p);float a=1.-exp(-den*stepSize*.006);
          if(a<.002)continue;
          float shade=exp(-density(p+lightDir*150.)*1.8-density(p+lightDir*330.)*.9);
          sum+=(1.-alpha)*a*(ambient+directBase*shade);alpha+=(1.-alpha)*a;
          if(alpha>.98)break;
        }
        float haze=smoothstep(.035,.22,d.y);
        vec3 color=mix(skyHorizon,sum/max(alpha,.001),haze);
        gl_FragColor=vec4(color,alpha*haze*.92);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}));h.name="volumetric-clouds",h.renderOrder=-8,s.add(h);const u=new bt,d=new Float32Array(108),p=new Float32Array(108);for(let T=0;T<36;T++){const b=Math.pow(1-T/35,2);p.set([b*.75,b*.86,b],T*3)}u.setAttribute("position",new Mt(d,3).setUsage(_i)),u.setAttribute("color",new Mt(p,3));const g=new So(u,new Il({vertexColors:!0,transparent:!0,opacity:0,depthTest:!0,depthWrite:!1,blending:ti}));g.name="shooting-star",g.frustumCulled=!1,g.renderOrder=0,s.add(g);let _=-1,m=5+Math.random()*6;const f=new L,w=new L,x=new L,v=new L;function S(T){if(t.value+=T,n.value=1-Xe.smoothstep(e.uniforms.daylight.value,.1,.55),c.visible=n.value>0,g.visible=n.value>0,n.value<.2){_=-1,g.material.opacity=0;return}if(m-=T,_<0&&m<=0){i.getWorldDirection(x),x.y=0,x.lengthSq()<.001&&x.set(0,0,-1),x.normalize(),v.set(-x.z,0,x.x);const b=7500;f.copy(i.position).addScaledVector(x,b).addScaledVector(v,(Math.random()-.5)*b*.8),f.y=1250+Math.random()*1800,w.copy(v).multiplyScalar((Math.random()<.5?-1:1)*(900+Math.random()*550)),w.y=-(1050+Math.random()*400),_=0,m=12+Math.random()*16}if(_>=0){_+=T;for(let y=0;y<36;y++){const M=Math.max(0,_-y*.028);d[y*3]=f.x+w.x*M,d[y*3+1]=f.y+w.y*M,d[y*3+2]=f.z+w.z*M}u.attributes.position.needsUpdate=!0;const b=f.y+w.y*_,C=Xe.smoothstep(b,0,500);g.material.opacity=n.value*Math.min(1,_*8)*Math.max(0,1-_/2.4)*C,(_>=2.4||b<=0)&&(_=-1,g.material.opacity=0)}}return{update:S,stars:c,clouds:h,meteor:g}}const jr=[[0,"#091832","#223955","#b3d1ff",.085,.23],[6,"#524968","#ec9b78","#ffc18c",.4,.6],[12,"#428fbd","#a3d1db","#fff3d6",1,2.5],[17,"#525a8f","#f2ab77","#ffba68",.75,1.7],[18,"#343c6b","#d87b60","#ff9c43",.5,1.1],[19,"#182242","#785368","#f47b4b",.18,.35],[21,"#091832","#223955","#b3d1ff",.085,.23],[24,"#091832","#223955","#b3d1ff",.085,.23]];function xx(s){const e=i=>new L(.64*Math.tan(Xe.degToRad(20))*Math.sin(i),.64*Math.sin(i),Math.cos(i)).normalize(),t=(s-18)/12*Math.PI,n=Math.PI-.22*Math.sin(t);return{sun:e((s-6)/12*Math.PI),moon:e(n)}}function yx(s){const e=Xe.smoothstep(s,5.6,6.15)*(1-Xe.smoothstep(s,18.05,18.65)),t=s<12?1-Xe.smoothstep(s,4.7,5.3):Xe.smoothstep(s,18.65,19.2);return{sun:e,moon:t}}function Mx(s){return .5+.5*Xe.smoothstep(Math.abs(s-12),0,1)}function Sx(s,e,t){const n={horizonStrength:{value:1},cloudCover:{value:.5},cloudSamples:{value:32},cloudDetail:{value:.5},zenith:{value:new Be},skyHorizon:{value:new Be},sunColor:{value:new Be},sunDirection:{value:new L},daylight:{value:1},sunVisible:{value:1},moonDirection:{value:new L},moonVisible:{value:0},moonTint:{value:0}};Object.assign(e.uniforms,n);const i=new $e(new Hn(24e3,32,20),new Wt({uniforms:n,side:Jt,depthWrite:!1,vertexShader:"varying vec3 dir;void main(){dir=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`
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
      }`}));s.add(i);const r=new Gf("#ebfcff","#397786",1);s.add(r);const o=new so("#fff3d6",2);s.add(o);const a=new so("#82acff",1.5);s.add(a);const l=new so("#8ab5ff",0);l.position.set(-40,60,60),s.add(l);for(const g of[o,a])g.castShadow=!0,g.shadow.mapSize.set(1024,1024),Object.assign(g.shadow.camera,{left:-14,right:14,top:14,bottom:-14,near:1,far:180}),g.shadow.bias=-2e-4,g.shadow.normalBias=.025,g.shadow.radius=2,s.add(g.target);const c=vx(s,{uniforms:n,camera:t});let h=-1,u=18;function d(g,_){if(_!==void 0){const y=(g-u+36)%24-12;u=(u+y*(1-Math.exp(-_*3))+24)%24,Math.abs(y)<1e-4&&(u=g)}else u=g;if(g=u,c.update(_??0),g===h)return;h=g;const m=Xe.clamp(g,0,24);let f=0;for(;f<jr.length-2&&m>jr[f+1][0];)f++;const w=jr[f],x=jr[f+1],v=Xe.smoothstep(m,w[0],x[0]);for(const[y,M]of[["zenith",1],["skyHorizon",2],["sunColor",3]])n[y].value.set(w[M]).lerp(new Be(x[M]),v);n.horizonStrength.value=Mx(m);const{sun:S,moon:T}=xx(m);n.sunDirection.value.copy(S),n.moonDirection.value.copy(T);const b=yx(m);n.sunVisible.value=b.sun,n.moonVisible.value=b.moon,n.moonTint.value=Math.pow(Math.max(0,Math.cos(m%24*Math.PI/12)),2),o.castShadow=b.sun>0,a.castShadow=b.moon>0,n.daylight.value=Xe.lerp(w[4],x[4],v);const C=1-Xe.smoothstep(n.daylight.value,.1,.55);r.color.copy(n.skyHorizon.value).lerp(new Be("#6387c6"),C),r.groundColor.set("#223351"),r.intensity=.35+n.daylight.value*2.2,o.color.copy(n.sunColor.value),o.intensity=Xe.lerp(w[5],x[5],v)*n.sunVisible.value,o.position.copy(n.sunDirection.value).multiplyScalar(100),a.color.set("#9ebfff").lerp(new Be("#77a7ff"),n.moonTint.value),l.color.set("#a8c6ff").lerp(new Be("#83afff"),n.moonTint.value),a.position.copy(n.moonDirection.value),a.position.y=.65,a.position.normalize().multiplyScalar(100),a.intensity=1.7*n.moonVisible.value,l.intensity=.65*n.moonVisible.value}function p(g){for(const[_,m]of[[o,n.sunDirection.value],[a,n.moonDirection.value]]){const f=m.clone();f.y=Math.max(f.y,.22),f.normalize().multiplyScalar(100),_.position.copy(g).add(f),_.target.position.copy(g),_.target.updateMatrixWorld()}}return d(18),{update:d,follow:p,uniforms:n,sunlight:o,moonlight:a,ambient:r}}function bx(s){let e=0,t=0;const n=new L,i=new Tt,r=new Tt,o=matchMedia("(prefers-reduced-motion: reduce)");return{render(a,l,c,h,u){e+=c;const d=o.matches?0:h;t+=(d-t)*(1-Math.exp(-c*3));const p=t*Math.min(1,15/Math.max(u,1));n.copy(s.position),i.copy(s.quaternion),s.position.y+=Math.sin(e*Math.PI*2/8.5)*.065*p,r.setFromEuler(new xn(Math.sin(e*Math.PI*2/11)*.002*p,0,Math.sin(e*Math.PI*2/13)*.003*p)),s.quaternion.multiply(r);try{a.render(l,s)}finally{s.position.copy(n),s.quaternion.copy(i),s.updateMatrixWorld()}}}}function Ex(s,e,t){const n=new it;n.name="seagulls",s.add(n);const i=new Vt({color:"#f4f4ed",roughness:.85}),r=new Vt({color:"#333942",roughness:.9,side:wt}),o=new Vt({color:"#dfa842",roughness:.8}),a=new Vt({color:"#e3e6e6",roughness:.9,side:wt}),l=new Hn(.18,10,6),c=new Hn(.135,8,6),h=new bt;h.setAttribute("position",new xt([0,0,.13,.48,.035,.13,.83,-.035,-.07,.48,.035,.13,.66,-.02,-.27,.83,-.035,-.07,0,0,.13,.83,-.035,-.07,0,0,-.2],3)),h.computeVertexNormals();const u=new bt;u.setAttribute("position",new xt([.7,-.02,-.11,1.04,-.07,-.25,.83,-.035,-.07],3)),u.computeVertexNormals();const d=new bo(.055,.22,5),p=[];for(let v=0;v<9;v++){const S=new it,T=new $e(l,i);T.scale.set(.85,1,2),S.add(T);const b=new $e(c,i);b.position.set(0,.14,-.32),S.add(b);const C=new $e(d,o);C.rotation.x=-Math.PI/2,C.position.set(0,.12,-.49),S.add(C);const y=[];for(const M of[-1,1]){const A=new it;A.position.set(M*.08,.06,0),A.scale.x=M,A.add(new $e(h,a),new $e(u,r)),S.add(A),y.push(A)}S.scale.setScalar(1.15+v%3*.18),n.add(S),p.push({root:S,wings:y,phase:v*2.4,radius:28+v*5,height:23+v%4*4,speed:.065+v%3*.012})}let g=0,_=0,m=0;const f=p.slice(0,2),w=new L;function x(v,S=!1){const T=Math.min(v,.2);g+=T,_-=v,m=Xe.damp(m,S?1:0,1.8,T);for(const b of p){const C=g*b.speed+b.phase;if(b.root.position.set(Math.cos(C)*b.radius,b.height+Math.sin(g*.6+b.phase)*1.6,-25+Math.sin(C)*b.radius*.7),m>.001&&f.includes(b)){const A=f.indexOf(b),D=A===1?-1:1,F=(g*(1.8+A*.4)+A*47)%220,B=65+A*12+Math.sin(g*.11+A)*9,O=23+A*5+Math.sin(g*.35+A)*1.5,N=D*(F-110)-25;b.root.position.lerp(new L(B,O,N),m),b.root.rotation.y=D>0?Math.PI:0}else b.root.rotation.y=Math.atan2(Math.sin(C),-Math.cos(C)*.7);b.root.rotation.z=Math.sin(C)*.12;const M=Math.sin(g*.7+b.phase)>.15?Math.sin(g*5.5+b.phase)*.48:.1;b.wings[0].rotation.z=-M,b.wings[1].rotation.z=M}_<=0&&e&&t&&(e.updateMatrixWorld(),p.some(({root:C})=>(w.copy(C.position).project(e),w.z>-1&&w.z<1&&Math.abs(w.x)<1&&Math.abs(w.y)<1))&&t.seagull()&&(_=12+Math.random()*10))}return x(0),{update:x,flock:n}}function wx(s){let e=null,t=3;const n=45;function i(){}function r(){const l=window.AudioContext||window.webkitAudioContext;l&&(e||(e=new l),e.state==="suspended"&&e.resume().then(i).catch(()=>{}))}addEventListener("pointerdown",r),addEventListener("keydown",l=>{l.repeat||r()});function o(){const l=e.currentTime,c=e.createGain();c.gain.setValueAtTime(0,l),c.gain.linearRampToValueAtTime(.17,l+.4),c.gain.setValueAtTime(.17,l+2.2),c.gain.exponentialRampToValueAtTime(1e-4,l+3.5);const h=e.createBiquadFilter();h.type="lowpass",h.frequency.value=750,c.connect(h),h.connect(e.destination);for(const[u,d]of[[82.4,.65],[110,.45],[164.8,.28],[220,.14]]){const p=e.createOscillator(),g=e.createGain();p.type="sawtooth",p.frequency.setValueAtTime(u*.985,l),p.frequency.linearRampToValueAtTime(u,l+.5),g.gain.value=d,p.connect(g),g.connect(c),p.start(l),p.stop(l+3.6),p.onended=()=>{p.disconnect(),g.disconnect()}}setTimeout(()=>{c.disconnect(),h.disconnect()},3800)}function a(l){e?.state!=="running"||document.hidden||(t-=Math.min(l,1),t<=0&&(o(),t=n))}return{update:a}}function Tx(s,e,{waterNoise:t,isAudible:n=()=>!0}={}){const i=s.createBuffer(1,Math.ceil(s.sampleRate*3),s.sampleRate),r=i.getChannelData(0);for(let v=0;v<r.length;v++)r[v]=Math.random()*2-1;const o=new Set,a=new L,l=new L,c=new L,h=new Tt,u=(v,S,T)=>Math.max(S,Math.min(T,v)),d=(v,S)=>v+Math.random()*(S-v);function p(v,S,T=!1){if(v.positionX)for(const[b,C]of[["positionX",S.x],["positionY",S.y],["positionZ",S.z]])T?v[b].setTargetAtTime(C,s.currentTime,.025):v[b].setValueAtTime(C,s.currentTime);else v.setPosition(S.x,S.y,S.z)}function g(v){if(!v)return;v.getWorldPosition(a),v.getWorldDirection(l),c.set(0,1,0).applyQuaternion(v.getWorldQuaternion(h));const S=s.listener;if(p(S,a),S.forwardX)for(const[T,b]of[["forwardX",l.x],["forwardY",l.y],["forwardZ",l.z],["upX",c.x],["upY",c.y],["upZ",c.z]])S[T].setValueAtTime(b,s.currentTime);else S.setOrientation(l.x,l.y,l.z,c.x,c.y,c.z)}function _(v){if(o.delete(v))for(const S of v.nodes)S.disconnect()}function m(v){for(const S of v.sources)try{S.stop()}catch{}_(v)}function f(v,{position:S,camera:T,visible:b=!0,speed:C=2}={}){if(!n()||!b||!S||![S.x,S.y,S.z].every(Number.isFinite)||!T||(g(T),a.distanceToSquared(S)>500*500)||!["Whale_Splash","Whale_Blow","Whale_Dive","Whale_Call"].includes(v))return!1;o.size>=4&&m(o.values().next().value);const y=s.createPanner(),M=s.createGain();y.panningModel="HRTF",y.distanceModel="inverse",y.refDistance=70,y.maxDistance=500,y.rolloffFactor=1.35,p(y,S),M.connect(y),y.connect(e);const A={name:v,panner:y,gain:M,sources:[],nodes:[y,M],remaining:0};o.add(A);const D=s.currentTime,F=d(.94,1.06),B=v==="Whale_Splash"?u(.65+Math.abs(C)*.14,.7,1.35):1;function O(N,j,G,Z,se,fe,Me=0,q=.025){const te=s.createBufferSource(),pe=s.createBiquadFilter(),z=s.createGain();te.buffer=N,te.playbackRate.value=d(.965,1.035),pe.type=j,pe.Q.value=.55;const W=D+Me;pe.frequency.setValueAtTime(G,W),pe.frequency.exponentialRampToValueAtTime(Z,W+fe);const de=se*B*F;z.gain.setValueAtTime(1e-4,W),z.gain.linearRampToValueAtTime(de,W+q),z.gain.exponentialRampToValueAtTime(de*.38,W+Math.min(.2,fe*.4)),z.gain.exponentialRampToValueAtTime(1e-4,W+fe),te.connect(pe),pe.connect(z),z.connect(M),A.nodes.push(te,pe,z),A.sources.push(te),A.remaining++,te.onended=()=>{--A.remaining===0&&_(A)},te.start(W,d(0,Math.max(0,N.duration-fe*1.04-.05))),te.stop(W+fe+.03)}if(v==="Whale_Call")for(let N=0;N<3;N++){const j=s.createOscillator(),G=s.createBiquadFilter(),Z=s.createGain(),se=D+N*.23,fe=2.5+N*.3,Me=(N===0?610:N===1?845:1230)*d(.94,1.06);j.type="sine",j.frequency.setValueAtTime(Me,se),j.frequency.exponentialRampToValueAtTime(Me*(N===1?.69:1.28),se+fe*.54),j.frequency.exponentialRampToValueAtTime(Me*.77,se+fe),G.type="lowpass",G.frequency.value=2400,Z.gain.setValueAtTime(1e-4,se),Z.gain.exponentialRampToValueAtTime(N===0?.27:.12,se+.28),Z.gain.exponentialRampToValueAtTime(1e-4,se+fe),j.connect(G),G.connect(Z),Z.connect(M),A.nodes.push(j,G,Z),A.sources.push(j),A.remaining++,j.onended=()=>{--A.remaining===0&&_(A)},j.start(se),j.stop(se+fe+.02)}else v==="Whale_Splash"?(O(t??i,"lowpass",190,80,.68,.95),O(i,"bandpass",1100,420,.37,1.25,.02),O(i,"highpass",3400,2100,.09,1.55,.06,.045)):v==="Whale_Blow"?(O(i,"bandpass",2700,950,.48,1.55,0,.016),O(i,"highpass",1500,950,.18,.32,0,.012),O(t??i,"bandpass",680,310,.24,1.05,.08,.055)):(O(t??i,"lowpass",420,150,.35,1.2,0,.08),O(i,"bandpass",850,320,.17,1.4,.04,.1));return!0}function w({camera:v,position:S,visible:T=!0}={}){if(o.size){if(g(v),!n()){x();return}for(const b of o)b.name==="Whale_Blow"&&S&&p(b.panner,S,!0),b.gain.gain.setTargetAtTime(T?1:0,s.currentTime,.08)}}function x(){for(const v of[...o])m(v)}return{play:f,update:w,stopAll:x,get activeCount(){return o.size}}}function Ax(s){let e,t,n,i,r,o,a=!0,l=1,c=0,h=0,u=null;const d=new Set,p=y=>440*2**((y-69)/12),g=[[60,64,67,71,74],[57,60,64,67,71],[50,53,57,60,64],[55,59,62,65,69]],_=[0,2,4,3,1,2,0,4,3,2,4,1,0,3,2,1];function m(){if(e)return;const y=window.AudioContext||window.webkitAudioContext;if(!y)return;e=new y,t=e.createGain(),t.gain.value=0,t.connect(e.destination),n=e.createGain(),n.gain.value=.35*l,n.connect(e.destination),i=e.createBuffer(1,e.sampleRate*8,e.sampleRate);const M=i.getChannelData(0);let A=0;for(let N=0;N<M.length;N++)A=(A+(Math.random()*2-1)*.025)/1.025,M[N]=A*4;o=Tx(e,n,{waterNoise:i,isAudible:()=>a&&l>0&&e.state==="running"&&!document.hidden}),r=e.createBufferSource(),r.buffer=i,r.loop=!0;const D=e.createBiquadFilter();D.type="lowpass",D.frequency.value=1400;const F=e.createGain();F.gain.value=.095;const B=e.createOscillator(),O=e.createGain();B.frequency.value=.09,O.gain.value=.06,B.connect(O),O.connect(F.gain),r.connect(D),D.connect(F),F.connect(t),r.start(),B.start(),a&&(c=e.currentTime+.02,f())}function f(){u===null&&(T(),u=setInterval(T,200))}function w(){m(),e&&(e.state==="suspended"?e.resume().then(()=>{a&&T()}).catch(()=>{}):a&&T())}addEventListener("pointerdown",w),addEventListener("keydown",y=>{y.repeat||w()});function x(y,M,A,D,F,B="sine",O=y){if(!e)return;const N=e.createOscillator(),j=e.createGain();N.type=B,N.frequency.setValueAtTime(y,M),N.frequency.exponentialRampToValueAtTime(O,M+A*.8),j.gain.setValueAtTime(1e-4,M),j.gain.exponentialRampToValueAtTime(D,M+.025),j.gain.exponentialRampToValueAtTime(1e-4,M+A),N.connect(j),j.connect(F),N.start(M),N.stop(M+A+.02),F===t&&d.add(N),N.onended=()=>{d.delete(N),N.disconnect(),j.disconnect()}}function v(y,M,A,D,F){const B=e.createBufferSource(),O=e.createBiquadFilter(),N=e.createGain();B.buffer=i,O.type="highpass",O.frequency.value=F,N.gain.setValueAtTime(A,y),N.gain.exponentialRampToValueAtTime(1e-4,y+M),B.connect(O),O.connect(N),N.connect(D),B.start(y),B.stop(y+M),D===t&&d.add(B),B.onended=()=>{d.delete(B),B.disconnect(),O.disconnect(),N.disconnect()}}function S(y,M){const A=g[Math.floor(M/16)%4],D=M%16;if(D%2===0&&x(p(A[0]-24+[0,7,12,7][Math.floor(D/2)%4]),y,.48,.25,t,"triangle"),[0,5,10,14].includes(D))for(const F of A.slice(1))x(p(F),y,1.25,.075,t),x(p(F)*2,y,.38,.015,t);D%3!==1&&x(p(A[_[M%16]]+12),y,.38,.085,t),v(y,.12,.065,t,3500)}s.addEventListener("click",()=>{if(w(),!!e){if(a=!a,a)h=0,c=e.currentTime+.02,f(),T();else{clearInterval(u),u=null;for(const y of d)try{y.stop()}catch{}o.stopAll()}t.gain.setTargetAtTime(a?.38*l:0,e.currentTime,.08),n.gain.setTargetAtTime(a?.35*l:0,e.currentTime,.08),s.setAttribute("aria-pressed",String(a)),s.setAttribute("aria-label",a?"음악 켜짐, 눌러서 끄기":"음악 꺼짐, 눌러서 켜기"),s.title=a?"음악 끄기":"음악 켜기"}});function T(){if(e){if(document.hidden){t.gain.setTargetAtTime(0,e.currentTime,.1),c=e.currentTime+.02;return}if(!(!a||e.state!=="running"))for(t.gain.setTargetAtTime(.38*l,e.currentTime,.08),c<e.currentTime&&(c=e.currentTime+.02);c<e.currentTime+1.5;)S(c,h),c+=(h++%2===0?2:1)*(60/84/3)}}function b(y){if(!a||l<=0||e?.state!=="running"||document.hidden)return!1;const M=e.currentTime;if(y==="seagull")for(let A=0;A<3;A++)x(1250+A*170,M+A*.22,.19,.15,n,"triangle",820+A*80);if(y==="dolphin")for(let A=0;A<4;A++)x(1700+A*350,M+A*.12,.12,.08,n,"sine",3300+A*260);return y==="whale"&&(x(95,M,2.8,.3,n,"sine",160),x(190,M+.2,2.5,.08,n,"sine",130),v(M,.65,.24,n,250)),y==="whaleSpout"&&(v(M,1.4,.35,n,1600),v(M+.12,.95,.15,n,650)),y==="splash"&&v(M,.8,.4,n,650),!0}document.addEventListener("visibilitychange",()=>{e&&(document.hidden?(t.gain.setTargetAtTime(0,e.currentTime,.1),n.gain.setTargetAtTime(0,e.currentTime,.1),o.stopAll()):a&&(n.gain.setTargetAtTime(.35*l,e.currentTime,.08),w()))});function C(y){Number.isFinite(y)&&(l=Math.max(0,Math.min(1,y)),e&&(t.gain.setTargetAtTime(a?.38*l:0,e.currentTime,.08),n.gain.setTargetAtTime(a?.35*l:0,e.currentTime,.08),l||o.stopAll()))}return{update:T,setVolume:C,seagull:()=>b("seagull"),dolphin:()=>b("dolphin"),whale:()=>b("whale"),whaleSpout:()=>b("whaleSpout"),splash:()=>b("splash"),whaleSplash:y=>o?.play("Whale_Splash",y)??!1,whaleBlow:y=>o?.play("Whale_Blow",y)??!1,whaleDive:y=>o?.play("Whale_Dive",y)??!1,whaleCall:y=>o?.play("Whale_Call",y)??!1,updateWhale:y=>o?.update(y)}}function Rx(s,e){const t=s.skeleton.bones,n=s.geometry.attributes.position,i=s.geometry.attributes.skinIndex,r=s.geometry.attributes.skinWeight;function o(A,D){const F=t.find(N=>N.name===A);if(!F)return null;const B=t.indexOf(F);let O=-1;for(let N=0;N<n.count;N++){let j=0;for(let G=0;G<4;G++)i.getComponent(N,G)===B&&(j+=r.getComponent(N,G));j<.7||(O<0||D*n.getZ(N)>D*n.getZ(O))&&(O=N)}return O<0?null:{bone:F,index:O}}const a=o("Tail_03",-1),l=o("Tail_03",1),c=o("Fin_L",-1),h=o("Fin_R",1),u=new L,d=new L,p=new L,g=new L,_=new L,m=new L,f=new L,w=new L,x=new L(0,1,0),v=new Tt,S=new Tt,T=new Tt,b=new Tt;function C(A,D){return s.getVertexPosition(A.index,D),s.localToWorld(D)}function y(A){A.parent.getWorldQuaternion(S),T.copy(S).invert().multiply(v).multiply(S),A.quaternion.premultiply(T),A.updateWorldMatrix(!1,!0),s.skeleton.update()}function M(A,D){A.bone.getWorldPosition(m),C(A,f).sub(m);const F=f.dot(_),B=f.dot(g),O=Math.sqrt(Math.max(0,f.lengthSq()-F*F)),N=Xe.clamp(D-m.y,-O,O);w.copy(_).multiplyScalar(F).addScaledVector(g,Math.sign(B)*Math.sqrt(Math.max(0,O*O-N*N))).addScaledVector(x,N),v.setFromUnitVectors(f.normalize(),w.normalize()),y(A.bone)}return()=>{if(e.updateMatrixWorld(!0),s.skeleton.update(),e.getWorldQuaternion(b),g.set(-1,0,0).applyQuaternion(b),g.y=0,g.normalize(),_.crossVectors(x,g).normalize(),a&&l)for(let A=0;A<6&&(C(a,u),C(l,d),p.subVectors(d,u).normalize(),!(p.dot(g)>1-1e-10));A++)v.setFromUnitVectors(p,g),y(a.bone);if(c&&h){C(c,u),C(h,d);const A=(u.y+d.y)/2;M(c,A),M(h,A)}}}function Cx({load:s=t=>new _o().loadAsync(t),url:e="./models/whale_animated.glb"}={}){const t=new it;t.name="whale",t.visible=!1,t.rotation.order="YXZ";const n=new it;n.name="whale-model",n.rotation.y=-Math.PI/2,t.add(n);const i=new it;i.name="whale-shallow-silhouette",i.visible=!1;const r=[],o=[],a={root:t,silhouette:i,ready:!1,active:!1,mixer:null,actions:{},current:null,contacts:[],blowhole:null},l=new L,c=new Gn;return a.loadPromise=s(e).then(h=>{n.removeFromParent(),n.add(h.scene),n.updateMatrixWorld(!0),c.setFromObject(n);const u=100/(c.max.z-c.min.z);n.scale.setScalar(u),n.updateMatrixWorld(!0),c.setFromObject(n),n.position.set(-(c.min.x+c.max.x)/2,11.5-c.max.y,-(c.min.z+c.max.z)/2),t.add(n),n.visible=!1,t.updateMatrixWorld(!0);const d=[];h.scene.traverse(m=>{if(!m.isMesh)return;d.push(m),m.castShadow=!1,m.receiveShadow=!1,m.frustumCulled=!1;const f=new bt,w=new Float32Array(m.geometry.attributes.position.count*3),x=new Float32Array(m.geometry.attributes.position.count);f.setAttribute("position",new Mt(w,3).setUsage(_i)),f.setAttribute("aAlpha",new Mt(x,1).setUsage(_i)),f.setIndex(m.geometry.index);const v=new Wt({transparent:!0,depthWrite:!1,side:wt,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1,uniforms:{tint:{value:new Be("#245263")}},vertexShader:"attribute float aAlpha;varying float alpha;void main(){alpha=aAlpha;gl_Position=projectionMatrix*viewMatrix*vec4(position,1.);}",fragmentShader:`uniform vec3 tint;varying float alpha;void main(){if(alpha<.002)discard;gl_FragColor=vec4(tint,alpha);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`}),S=new $e(f,v);S.name="whale-local-water-projection",S.frustumCulled=!1,S.renderOrder=2,i.add(S),r.push({mesh:m,geometry:f,positions:w,alpha:x,material:v})});const p=new L(-.65,.296,0);let g=1/0;for(const m of d){const f=m.geometry.attributes.position;for(let w=0;w<f.count;w++){l.fromBufferAttribute(f,w);const x=l.distanceToSquared(p);x<g&&(g=x,a.blowhole={mesh:m,index:w})}for(const w of[-.82,-.65,-.45,-.2,.05,.3]){let x=null,v=1/0;for(let S=0;S<f.count;S++){if(l.fromBufferAttribute(f,S),l.y<.03||Math.abs(l.z)>.2)continue;const T=(l.x-w)**2+Math.abs(l.z)*.04-l.y*.015;T<v&&(v=T,x={mesh:m,index:S})}x&&a.contacts.push(x)}}const _=h.animations??[];if(_.length){a.mixer=new cp(h.scene);for(const[m,f]of[["swim",/swim/i],["idle",/idle/i]]){const w=_.find(x=>x.name===`Whale_${m==="swim"?"Swim":"Idle"}`)||_.find(x=>f.test(x.name));w&&(a.actions[m]=a.mixer.clipAction(w).setLoop(ku,1/0))}}for(const m of d)m.isSkinnedMesh&&o.push(Rx(m,t));return a.ready=!0,t.userData.loadingState="ready",t.userData.animationClips=_.map(m=>m.name),t.userData.animationDurations=Object.fromEntries(_.map(m=>[m.name,m.duration])),a}).catch(h=>(t.userData.loadingState="error",console.error("[Sea] Whale GLB loading failed",h),a)),t.userData.loadingState="loading",a.startEncounter=()=>{a.active=a.ready,n.visible=a.active,a.current=null,a.mixer?.stopAllAction()},a.update=(h,u,d)=>{if(!a.active)return;const p=a.actions[u?"idle":"swim"]??a.actions.swim??a.actions.idle;p&&p!==a.current&&(p.reset().setEffectiveWeight(1).play(),a.current&&p.crossFadeFrom(a.current,.65,!1),a.current=p),p&&(p.timeScale=u?.95:Xe.clamp(d/(24/11),.85,1.15)),a.mixer?.update(h);for(const g of o)g()},a.readAttachment=(h,u)=>h?(h.mesh.getVertexPosition(h.index,u),h.mesh.localToWorld(u),!0):!1,a.updateWaterSilhouette=(h,{visible:u=!0,fade:d=1,daylight:p=1}={})=>{if(i.visible=a.active&&t.visible&&u&&d>.001,!!i.visible)for(const g of r){g.material.uniforms.tint.value.set("#245263").multiplyScalar(.35+.65*p);for(let _=0;_<g.alpha.length;_++){g.mesh.getVertexPosition(_,l),l.applyMatrix4(g.mesh.matrixWorld);const m=h(l.x,l.z),f=m-l.y,w=1-Xe.smoothstep(f,2,9);g.alpha[_]=f>0?Math.min(1,f/1.2)*w*.3*d:0;const x=_*3;g.positions[x]=l.x,g.positions[x+1]=m+.48,g.positions[x+2]=l.z}g.geometry.attributes.position.needsUpdate=!0,g.geometry.attributes.aAlpha.needsUpdate=!0}},a}function Px(s,{heightAt:e,compact:t=!1,daylight:n=()=>1,viewportHeight:i=()=>globalThis.innerHeight??720}){const r=t?192:480,o=t?5:10,a=t?24:40,l=new Float32Array(r*3),c=new Float32Array(r),h=new Float32Array(r),u=new Float32Array(r*3),d=new Float32Array(r*3),p=new Float32Array(r),g=new Float32Array(r),_=new Uint8Array(r),m=new bt;for(const[Z,se,fe]of[["position",l,3],["aSize",c,1],["aAlpha",h,1]])m.setAttribute(Z,new Mt(se,fe).setUsage(_i));const f=new Wt({transparent:!0,depthWrite:!1,uniforms:{viewport:{value:720},light:{value:1}},vertexShader:"attribute float aSize,aAlpha;uniform float viewport;varying float alpha;void main(){vec4 p=modelViewMatrix*vec4(position,1.);gl_Position=projectionMatrix*p;gl_PointSize=clamp(aSize*viewport*projectionMatrix[1][1]/max(-p.z,1.),2.,80.);alpha=aAlpha;}",fragmentShader:`uniform float light;varying float alpha;
      void main(){float r=length(gl_PointCoord-.5)*2.;float soft=1.-smoothstep(.12,1.,r);
        vec3 c=mix(vec3(.12,.18,.25),vec3(.72,.83,.87),light);gl_FragColor=vec4(c,alpha*soft);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}),w=new Is(m,f);w.name="whale-water-particles",w.frustumCulled=!1,w.visible=!1,s.add(w);const x=[];for(let Z=0;Z<o;Z++){const se=new bt,fe=new Float32Array((a+1)*2*3),Me=[];for(let pe=0;pe<a;pe++){const z=pe*2;Me.push(z,z+1,z+2,z+1,z+3,z+2)}se.setAttribute("position",new Mt(fe,3).setUsage(_i)),se.setIndex(Me);const q=new Xt({color:10932956,transparent:!0,opacity:0,depthWrite:!1,side:wt,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),te=new $e(se,q);te.name="whale-surface-ripple",te.frustumCulled=!1,te.visible=!1,te.renderOrder=5,s.add(te),x.push({mesh:te,vertices:fe,born:-100,life:0,x:0,z:0,initial:0,speed:0,heading:0,elongation:1.15})}let v=0,S=0,T=0,b=-100,C=0;const y=new L,M=new L,A=new L(0,1,0),D=(Z,se)=>Z+Math.random()*(se-Z);function F(Z,se,fe){const Me=S++%r,q=Me*3;u[q]=Z.x,u[q+1]=Z.y,u[q+2]=Z.z,d[q]=se.x,d[q+1]=se.y,d[q+2]=se.z,p[Me]=v,_[Me]=fe,g[Me]=fe===2?D(1.2,2.4):D(.7,1.6),c[Me]=fe===2?D(3.4,6):D(.85,1.65),h[Me]=0}function B(Z,se=1,fe=0,Me=!1){const q=x[T++%o];q.x=Z.x,q.z=Z.z,q.born=v,q.life=4.8,q.initial=Me?13:se>1?3:1.8,q.speed=(Me?2:3.5)*se,q.heading=fe,q.elongation=Me?2.1:1.15}const O=new L;function N(Z,se=1){const fe=Math.round((t?42:105)*se);for(let Me=0;Me<fe;Me++){const q=D(0,Math.PI*2),te=D(2,10)*se;O.set(Math.cos(q)*te,D(4,13)*se,Math.sin(q)*te*D(.6,1.2)),F(Z,O,Me%4===0?2:1)}B(Z,1.8*se),B(Z,.9*se,.6)}function j(){b=v,C=0}function G(Z,se,fe,Me){v+=Z;const q=v-b;if(q>=0&&q<1.35&&fe)if(C+=Z*(t?220:460)*Math.max(.15,1-q/1.45),se)for(y.copy(fe),M.copy(Me??A).normalize();C>=1;){C--;const te=D(29,44)*(1-q*.25);O.copy(M).multiplyScalar(te),O.x+=D(-7,7),O.z+=D(-7,7),F(y,O,Math.random()<.8?2:1)}else C=0;if(w.visible=se,se){let te=0;for(let pe=0;pe<r;pe++){const z=v-p[pe];if(!g[pe]||z>g[pe]){h[pe]=0;continue}te++;const W=pe*3,de=_[pe]===2,K=de?1.05:.25,J=(1-Math.exp(-K*z))/K;l[W]=u[W]+d[W]*J+(de?z*z*.9:0),l[W+1]=u[W+1]+d[W+1]*J-(de?2.4:4.9)*z*z,l[W+2]=u[W+2]+d[W+2]*J;const Q=1-z/g[pe];h[pe]=(de?.48:.76)*Math.min(1,z*18)*Q*Q,l[W+1]<e(l[W],l[W+2])&&(h[pe]=0)}w.visible=te>0,m.attributes.position.needsUpdate=!0,m.attributes.aAlpha.needsUpdate=!0,m.attributes.aSize.needsUpdate=!0,f.uniforms.viewport.value=i(),f.uniforms.light.value=Xe.clamp(n(),0,1)}for(const te of x){const pe=v-te.born;if(te.mesh.visible=se&&pe<te.life,!te.mesh.visible)continue;const z=te.initial+te.speed*pe,W=1-pe/te.life;te.mesh.material.opacity=.68*Math.pow(W,1.15),te.mesh.material.color.setRGB(.18+.48*n(),.28+.5*n(),.35+.47*n());for(let de=0;de<=a;de++){const K=de/a*Math.PI*2,J=1+.06*Math.sin(K*3+te.heading),Q=Math.cos(te.heading),le=Math.sin(te.heading);for(let P=0;P<2;P++){const oe=(z+P*(1.65+pe*.28))*J,ce=Math.cos(K)*oe,Se=Math.sin(K)*oe*te.elongation,re=te.x+Q*ce+le*Se,De=te.z-le*ce+Q*Se,ue=(de*2+P)*3;te.vertices[ue]=re,te.vertices[ue+1]=e(re,De)+.72,te.vertices[ue+2]=De}}te.mesh.geometry.attributes.position.needsUpdate=!0}}return{ripple:B,splash:N,beginBreath:j,update:G,stats:{capacity:r,ringCount:o},points:w}}function Ix(s,e,t,{ocean:n,compact:i=typeof matchMedia=="function"&&matchMedia("(max-width: 600px), (pointer: coarse)").matches,loadWhale:r,viewportHeight:o}={}){const a=new it;a.name="marine-life",s.add(a);const l=new Vt({color:"#657d89",roughness:.45}),c=new Vt({color:"#bacbd1",roughness:.65}),h=new Hn(1,14,10);function u(oe,ce,Se,re,De,ue,ve,ke){const Ve=new $e(h,ce);return Ve.position.set(Se,re,De),Ve.scale.set(ue,ve,ke),oe.add(Ve),Ve}function d(){const oe=new it;oe.name="dolphin",u(oe,l,0,0,0,.65,.6,2),u(oe,c,0,-.24,0,.53,.32,1.8),u(oe,l,0,.03,-2,.22,.18,.75);const ce=new $e(new bo(.4,.85,3),l);ce.position.set(0,.6,.3),ce.rotation.y=Math.PI/2,oe.add(ce);const Se=new it;Se.position.z=1.95,oe.add(Se);for(const re of[-1,1]){const De=u(Se,l,re*.55,0,0,.7,.1,.32);De.rotation.y=re*.25;const ue=u(oe,l,re*.62,-.25,-.7,.7,.1,.24);ue.rotation.z=re*-.35}return oe.visible=!1,a.add(oe),{root:oe,tail:Se}}const p=d(),g=Cx(r?{load:r}:void 0);a.add(g.root,g.silhouette);const _=(oe,ce)=>n?.heightAt(oe,ce)??0,m=Px(a,{heightAt:_,compact:i,daylight:()=>n?.uniforms.daylight?.value??1,viewportHeight:o});a.userData.whale=g,a.userData.whaleEffectBudget=m.stats;const f=new bt,w=new Float32Array(180);f.setAttribute("position",new Mt(w,3).setUsage(_i));const x=new Is(f,new pr({color:"#d4f6ff",size:.3,transparent:!0,opacity:.8,depthWrite:!1}));x.visible=!1,x.frustumCulled=!1,a.add(x);const v=new L,S=new L,T=new L,b=new L,C=new L,y=new L,M=new L,A=new L,D=new Pn(new L,95),F=new Mo,B=new Ke;let O=12,N=-1,j=null,G=0,Z=!1,se=!1,fe=!1,Me=!1,q=!1,te=-1/0,pe=0,z=!1;const W=[],de=[];let K=0;function J(oe=!1){j=oe||G++%3===2?g:p,j.root.visible=!1,N=0,Z=!1,se=!1,fe=!1,Me=!1,q=!1,te=-1/0,pe=0,W.length=0,de.length=0,K=0,j===g&&g.startEncounter(),e.getWorldDirection(S),S.y=0,S.normalize(),T.crossVectors(S,ft.DEFAULT_UP).normalize();const ce=Math.random()<.5?-1:1,Se=j===g?i?-35+ce*8:ce*30-15:ce*26;v.copy(e.position).addScaledVector(S,j===g?125:65).addScaledVector(T,Se),v.y=0;const re=j===g?85:20;Math.abs(v.x)<re&&Math.abs(v.z)<(j===g?120:55)&&(v.x=ce*(re+5)),j.root.rotation.y=Math.atan2(-T.x,-T.z),j!==g&&t.dolphin(),a.userData.lastEncounter=j===g?"whale":"dolphin"}function Q(oe,ce,Se){const re=N<2?22:N<11.5?0:-12;g.update(oe,!1,Math.max(2.2,2.2)),g.root.updateMatrixWorld(!0),g.root.traverse(E=>{E.isSkinnedMesh&&E.skeleton.update()}),e.updateMatrixWorld(),B.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),F.setFromProjectionMatrix(B),D.center.copy(g.root.position),D.center.y+=15,z=F.intersectsSphere(D),g.updateWaterSilhouette(_,{visible:z,fade:Xe.smoothstep(ce,0,.05)*(1-Xe.smoothstep(ce,.95,1)),daylight:n?.uniforms.daylight?.value??1});const ue=E=>(y.copy(E).lerp(g.root.position,.42),y.y=_(y.x,y.z)+.12,y);let ve=-1/0;for(let E=0;E<g.contacts.length;E++){const U=g.contacts[E];g.readAttachment(U,M);const H=M.y-_(M.x,M.z);H>ve&&(ve=H,b.copy(M));const ee=W[E],V=de[E]??0;ee<0&&H>=0&&!(V&1)?(de[E]=V|1,z&&m.ripple(ue(M),1.45,j.root.rotation.y)):ee>=0&&H<0&&re<0&&!(V&2)&&(de[E]=V|2,z&&m.ripple(ue(M),1.5,j.root.rotation.y)),W[E]=H}fe&&!Me&&N>=K&&ve>0&&(K=N+1,z&&m.ripple(ue(b),1.25,j.root.rotation.y,!0)),ve>-3.5&&ve<0&&re>0&&N>=pe&&(pe=N+.7,z&&m.ripple(ue(b),1.15,j.root.rotation.y)),!fe&&te<0&&ve>=0&&(fe=!0,Number.isFinite(te)&&b.lerp(C,ve/(ve-te)),b.y=_(b.x,b.z)+.08,z&&(m.splash(ue(b)),t.whaleSplash?.({position:b,camera:e,visible:z,speed:re}))),fe&&!Me&&re<0&&te>=0&&ve<0&&(Me=!0,b.y=_(b.x,b.z)+.08,z&&(m.splash(ue(b),.5),t.whaleDive?.({position:b,camera:e,visible:z,speed:re}))),te=ve,C.copy(b);const ke=N-2,I=g.readAttachment(g.blowhole,M)&&M.y>_(M.x,M.z)+.1;!se&&ke>=0&&ke<2.2&&I&&(se=!0,z&&(m.beginBreath(),t.whaleBlow?.({position:M,camera:e,visible:z}),q||(q=!0,t.whaleCall?.({position:M,camera:e,visible:z})))),A.set(0,1,0).applyQuaternion(g.root.quaternion),m.update(oe,z,I?M:null,A),t.updateWhale?.({position:M,camera:e,visible:z}),a.userData.whaleSurface={didBreak:fe,didDive:Me,didSpout:se}}function le(oe){if(globalThis.document?.hidden)return;if(oe=Math.min(oe,.25),N<0){m.update(oe,z,null,null),O-=oe,O<=0&&J();return}N+=oe;const ce=j===g,Se=ce?18:4.5,re=N/Se,De=ce?Xe.clamp((N-2)/12,0,1):re;j.root.position.copy(v).addScaledVector(T,(De-.5)*(ce?35:20));const ue=Math.sin(Math.PI*Math.min(1,re));if(ce){const ve=Xe.smoothstep(N,0,2),ke=Xe.smoothstep(N,11.5,13.6),Ve=Xe.smoothstep(N,15.6,18),I=_(j.root.position.x,j.root.position.z);j.root.position.y=I-17+ve*19-ke*16-Ve*36;const E=1-Xe.smoothstep(N,1.1,2.8),U=Xe.smoothstep(N,11.5,13.6);j.root.rotation.x=.18*E-.65*U}else j.root.position.y=-1.4+ue*5.5,j.root.rotation.x=Math.cos(re*Math.PI)*-.65;if(j.root.visible=!ce||g.active,ce&&g.active)Q(oe,re);else if(m.update(oe,z,null,null),!ce&&(j.tail.rotation.x=Math.sin(N*6)*.22,re>.72&&!Z&&(Z=!0,t.splash(),x.visible=!0),x.visible)){const ve=Math.max(0,N-Se*.72);x.position.copy(j.root.position),x.position.y=.1;for(let ke=0;ke<60;ke++){const Ve=ke*2.39996,I=1+ke%7*.35;w[ke*3]=Math.cos(Ve)*I*ve,w[ke*3+1]=Math.max(0,(2+ke%4)*ve-4*ve*ve),w[ke*3+2]=Math.sin(Ve)*I*ve}x.geometry.attributes.position.needsUpdate=!0,x.material.opacity=Math.max(0,.8-ve*.6)}re>=1&&(j.root.visible=!1,g.silhouette.visible=!1,x.visible=!1,N=-1,O=24+Math.random()*22)}function P(){return j===g&&N>=0?!1:(j?.root&&(j.root.visible=!1),N=-1,O=0,J(!0),!0)}return{update:le,group:a,summonWhale:P}}function Dx(s){const e=new it;e.name="night-jellyfish-schools",s.add(e);const t=48,n=14,i=new Mi(3.2,3.2),r=new Float32Array(t),o=new Float32Array(t),a=new Float32Array(t),l=new Float32Array(t),c=new Float32Array(t),h=v=>{const S=Math.sin(v*127.1+19.17)*43758.5453;return S-Math.floor(S)};for(let v=0;v<t;v++)r[v]=h(v+5)*Math.PI*2,a[v]=.58+h(v+31)*.58,l[v]=.55+h(v+71)*1.35,c[v]=h(v+109)*Math.PI*2;i.setAttribute("aPhase",new Oi(r,1)),i.setAttribute("aRate",new Oi(l,1)),i.setAttribute("aFlicker",new Oi(c,1));const u=new Oi(o,1);u.setUsage(_i),i.setAttribute("aFade",u);const d=new Wt({transparent:!0,depthWrite:!1,depthTest:!0,side:wt,blending:ti,uniforms:{uTime:{value:0}},vertexShader:`attribute float aPhase;attribute float aFade;
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
      }`}),p=new po(i,d,t);p.name="jellyfish-one-drawcall",p.frustumCulled=!1,p.castShadow=!1,p.receiveShadow=!1,p.renderOrder=2,e.add(p);const g=new ft,_=[[-19,-24],[20,-10],[-15,14]],m=6;let f=0;const w=(v,S,T)=>{const b=Xe.clamp((T-v)/(S-v),0,1);return b*b*(3-2*b)};let x=0;return{group:e,update(v,S,T=!1){const b=Math.min(v,.1);x+=b,f=Xe.damp(f,T?1:0,1.4,b),d.uniforms.uTime.value=x;const C=(S%24+24)%24,y=C>=18?w(18,20,C):C<7?1-w(5,7,C):0;for(let M=0;M<t;M++){if(M>=t-m){const q=M-(t-m),te=r[M],pe=65+q%3*9+Math.sin(x*.1+te)*4,z=-38+Math.floor(q/3)*28+Math.cos(x*.08+te)*5,W=1.72+Math.sin(x*.45+te)*.18;g.position.set(pe,W,z),g.rotation.set(-Math.PI/2,0,0);const de=a[M]*(1+.06*Math.sin(x*.9+te));g.scale.set(de,de,de),g.updateMatrix(),p.setMatrixAt(M,g.matrix),o[M]=y*f*(.55+.45*Math.sin(x*.35+te)**2);continue}const A=Math.floor(M/n),D=M%n,F=r[M],[B,O]=_[A],N=x*.032+A*2.09,j=w(-.6,.35,Math.sin(N))*.85+.15;o[M]=y*j;const G=D*2.39996+F*.22,Z=1.4+Math.sqrt(D+1)*1.55,se=Math.sin(x*.12+A*1.9)*3.2,fe=Math.cos(x*.095+A*2.1)*4;g.position.set(B+Math.cos(G)*Z+se+Math.sin(x*.23+F)*.55,1.72+Math.sin(x*.8+F)*.09,O+Math.sin(G)*Z+fe+Math.cos(x*.19+F)*.65),g.rotation.set(-Math.PI/2,0,0);const Me=a[M]*(1+.045*Math.sin(x*1.4+F));g.scale.set(Me,Me,Me),g.updateMatrix(),p.setMatrixAt(M,g.matrix)}u.needsUpdate=!0,p.instanceMatrix.needsUpdate=!0,p.visible=y>.002}}}function Lx({scene:s,camera:e,renderer:t,controls:n,player:i,isAvailable:r,onChoose:o=()=>{}}){const a=["❤️","👋","😂","👍","🎉","😢","😮","👏"],l=t.domElement,c=new wo,h=new We,u=new L,d=document.createElement("div");d.id="sea-emote-wheel",d.setAttribute("aria-label","이모지 선택");const p=document.createElement("div");p.id="sea-emote-bubble",p.setAttribute("aria-live","polite"),document.body.append(d,p);const g=document.createElement("style");g.textContent=`
    #sea-emote-wheel{position:fixed;z-index:100020;width:236px;height:236px;display:none;pointer-events:none;transform:translate(-50%,-50%)}
    #sea-emote-wheel.open{display:block}
    #sea-emote-wheel button{position:absolute;left:50%;top:50%;width:49px;height:49px;transform:translate(-50%,-50%) translate(var(--dx),var(--dy));border:1px solid #a2dbe5a8;border-radius:50%;background:#0b3549e8;box-shadow:0 3px 14px #001b2a99;color:white;font-size:25px;cursor:pointer;pointer-events:auto;touch-action:manipulation;transition:background .12s,scale .12s}
    #sea-emote-wheel button:hover,#sea-emote-wheel button:focus-visible{background:#26738a;scale:1.12}
    #sea-emote-bubble{position:fixed;z-index:100010;display:none;pointer-events:none;font-size:38px;line-height:1;transform:translate(-50%,-100%);filter:drop-shadow(0 3px 5px #00192399);animation:sea-emote-pop .22s ease-out both}
    @keyframes sea-emote-pop{from{opacity:0;scale:.45}to{opacity:1;scale:1}}
    @media(max-width:600px){#sea-emote-wheel{width:210px;height:210px}#sea-emote-wheel button{width:46px;height:46px;font-size:24px}}
  `,document.head.append(g);let _=!1,m=null,f=null,w=null,x=0,v=null;function S(A,D){const F=A.getObjectByName("sea-avatar-head");F?(F.getWorldPosition(u),u.y+=D===3.15?.8:.45):(A.getWorldPosition(u),u.y+=D),u.project(e);const B=l.getBoundingClientRect();return{x:B.left+(u.x+1)*B.width/2,y:B.top+(1-u.y)*B.height/2,visible:u.z>-1&&u.z<1}}function T(A,D){if(!r())return null;const F=l.getBoundingClientRect();h.set((A-F.left)/F.width*2-1,-(D-F.top)/F.height*2+1),c.setFromCamera(h,e);const B=[i,...s.children.filter(O=>O.name?.startsWith("remote-"))];for(const O of B)if(c.intersectObject(O,!0).some(N=>N.object.isMesh&&N.object.visible))return O;return null}function b(){_=!1,m=null,d.style.visibility="visible",d.classList.remove("open")}function C(A){if(!r())return;const D=S(A,1.7);if(!D.visible)return;const F=118;d.style.left=`${Math.max(F,Math.min(innerWidth-F,D.x))}px`,d.style.top=`${Math.max(F,Math.min(innerHeight-F,D.y))}px`,m=A,_=!0,d.classList.add("open")}function y(A){b(),v=A,p.textContent=A,p.style.display="block",p.style.animation="none",p.offsetWidth,p.style.animation="",x=performance.now()+3e3,o(A)}a.forEach((A,D)=>{const F=-Math.PI/2+D*Math.PI/4,B=document.createElement("button");B.type="button",B.textContent=A,B.setAttribute("aria-label",`${A} 표현`),B.style.setProperty("--dx",`${Math.cos(F)*88}px`),B.style.setProperty("--dy",`${Math.sin(F)*88}px`),B.addEventListener("pointerdown",O=>O.stopPropagation()),B.addEventListener("click",O=>{O.stopPropagation(),y(A)}),d.append(B)}),l.addEventListener("contextmenu",A=>{const D=T(A.clientX,A.clientY);D&&(A.preventDefault(),C(D))}),l.addEventListener("pointerdown",A=>{if(A.pointerType==="mouse"||A.button!==0)return;const D=T(A.clientX,A.clientY);D&&(f={id:A.pointerId,x:A.clientX,y:A.clientY,target:D},clearTimeout(w),w=setTimeout(()=>{f&&(C(f.target),f=null,n.enabled=!1,requestAnimationFrame(()=>{n.enabled=!0}))},500))}),l.addEventListener("pointermove",A=>{f?.id===A.pointerId&&Math.hypot(A.clientX-f.x,A.clientY-f.y)>12&&(clearTimeout(w),f=null)});for(const A of["pointerup","pointercancel","pointerleave"])l.addEventListener(A,D=>{f?.id===D.pointerId&&(clearTimeout(w),f=null)});document.addEventListener("pointerdown",A=>{_&&!d.contains(A.target)&&A.target!==l&&b()}),document.addEventListener("keydown",A=>{A.key==="Escape"&&b()});function M(){if(_&&!r()&&b(),_&&m)if(!m.parent)b();else{const D=S(m,1.7);if(!D.visible)d.style.visibility="hidden";else{d.style.visibility="visible";const F=118;d.style.left=`${Math.max(F,Math.min(innerWidth-F,D.x))}px`,d.style.top=`${Math.max(F,Math.min(innerHeight-F,D.y))}px`}}if(!v)return;if(performance.now()>x){p.style.display="none",v=null;return}const A=S(i,3.15);p.style.display=A.visible?"block":"none",p.style.left=`${A.x}px`,p.style.top=`${A.y}px`}return{update:M}}function Nx(s,e,t){const n=document.createElement("button");n.id="fireworks-toggle",n.type="button",n.textContent="폭죽",n.setAttribute("aria-label","폭죽 발사"),document.querySelector("#app").append(n);const i=new it;s.add(i);const r=[],o=["#ffb95a","#76d9ff","#ff7ec4","#c8ff89","#d7a6ff"];let a=null;function l(_,m,f,w="sine",x=1){try{const v=window.AudioContext||window.webkitAudioContext;if(!v)return;a??=new v,a.state==="suspended"&&a.resume().catch(()=>{});const S=a.currentTime,T=a.createOscillator(),b=a.createGain();T.type=w,T.frequency.setValueAtTime(_,S),T.frequency.exponentialRampToValueAtTime(Math.max(20,_*x),S+m),b.gain.setValueAtTime(1e-4,S),b.gain.exponentialRampToValueAtTime(f,S+.025),b.gain.exponentialRampToValueAtTime(1e-4,S+m),T.connect(b),b.connect(a.destination),T.start(S),T.stop(S+m+.02)}catch{}}function c(_){_.burst=!0,_.age=0,_.rocket.visible=!1;const m=72,f=new Float32Array(m*3),w=[];for(let T=0;T<m;T++){const b=1-2*(T+.5)/m,C=T*2.399963,y=Math.sqrt(1-b*b),M=8+Math.random()*7;w.push(new L(Math.cos(C)*y,b,Math.sin(C)*y).multiplyScalar(M))}const x=new bt;x.setAttribute("position",new Mt(f,3).setUsage(_i));const v=new pr({color:_.color,size:.65,transparent:!0,depthWrite:!1,blending:ti}),S=new Is(x,v);S.position.copy(_.rocket.position),i.add(S),_.particles=S,_.velocities=w,l(130,.36,.13,"triangle",.2),l(65,.48,.1,"sawtooth",.25)}const h=[];function u(_,m){const f=new Be(o[_]),w=new $e(new Hn(.32,10,8),new Xt({color:f,transparent:!0,opacity:.9,depthWrite:!1,blending:ti}));w.visible=!1,i.add(w),h.push({age:0,glow:w,color:f,getHandPosition:m})}function d(){if(r.length>=12||h.some(m=>m.local))return;const _=Math.floor(Math.random()*o.length);e.launchFireworkPose(),u(_,()=>e.getFireworkHandPosition()),h[h.length-1].local=!0,t?.(_)}function p(_,m){!Number.isInteger(_)||_<0||_>=o.length||r.length+h.length>=24||(m.avatar.fireworkPose(),u(_,()=>(m.root.updateWorldMatrix(!0,!0),m.avatar.rightHandWorldPosition())))}n.addEventListener("click",d);function g(_){_=Math.min(_,.05);for(let m=h.length-1;m>=0;m--){const f=h[m];if(f.age+=_,f.age>=.45&&(f.glow.visible=!0,f.glow.position.copy(f.getHandPosition()),f.glow.scale.setScalar(1+Math.sin(f.age*27)*.18)),f.age>=1){const w=f.getHandPosition(),x=new $e(new Hn(.28,6,6),new Xt({color:f.color}));x.position.copy(w),i.add(x),r.push({rocket:x,color:f.color,age:0,burst:!1,particles:null,velocities:null}),i.remove(f.glow),f.glow.geometry.dispose(),f.glow.material.dispose(),h.splice(m,1),l(440,.9,.07,"sawtooth",3.5)}}for(let m=r.length-1;m>=0;m--){const f=r[m];if(f.age+=_,!f.burst)f.rocket.position.y+=22*_,f.age>=1.1&&c(f);else{const w=f.particles.geometry.attributes.position;for(let x=0;x<f.velocities.length;x++){const v=f.velocities[x];v.y-=6*_;const S=x*3;w.array[S]+=v.x*_,w.array[S+1]+=v.y*_,w.array[S+2]+=v.z*_}w.needsUpdate=!0,f.particles.material.opacity=Math.max(0,1-f.age/1.8),f.age>=1.8&&(i.remove(f.rocket,f.particles),f.rocket.geometry.dispose(),f.rocket.material.dispose(),f.particles.geometry.dispose(),f.particles.material.dispose(),r.splice(m,1))}}}return{update:g,launchRemote:p}}function Ux(){const s=document.createElement("canvas");s.className="sea-rain-overlay",s.setAttribute("aria-hidden","true"),document.querySelector("#app").append(s);const e=s.getContext("2d"),t=Array.from({length:52},()=>({x:Math.random(),y:Math.random(),speed:.7+Math.random()*.8,length:9+Math.random()*13,depth:Math.random()}));let n=0,i=0,r=0;function o(){const l=Math.min(devicePixelRatio||1,1.5);n=innerWidth,i=innerHeight,s.width=Math.round(n*l),s.height=Math.round(i*l),e.setTransform(l,0,0,l,0,0)}o(),addEventListener("resize",o);function a(l,c){if(r+=(Math.max(0,Math.min(1,c))-r)*(1-Math.exp(-Math.min(l,.1)*1.8)),s.style.display=r<.008?"none":"block",r<.008)return;e.clearRect(0,0,n,i);const h=Math.floor(t.length*r);for(let u=0;u<h;u++){const d=t[u];d.y+=l*d.speed*(.7+r),d.y>1.06&&(d.y=-.06,d.x=Math.random());const p=d.x*n,g=d.y*i,_=d.length*(.65+d.depth*.65),m=(.09+d.depth*.13)*r,f=e.createLinearGradient(p,g,p,g+_);f.addColorStop(0,"rgba(215,239,250,0)"),f.addColorStop(.4,`rgba(215,239,250,${m})`),f.addColorStop(1,"rgba(215,239,250,0)"),e.strokeStyle=f,e.lineWidth=.55+d.depth*.5,e.beginPath(),e.moveTo(p,g),e.lineTo(p,g+_),e.stroke()}}return{update:a}}const _h=document.querySelector("#app");navigator.maxTouchPoints>0&&document.documentElement.classList.add("sea-touch-capable");const Fn=document.createElement("div");Fn.id="sea-loading";Fn.setAttribute("role","status");Fn.setAttribute("aria-live","polite");Fn.innerHTML='<div class="sea-loading-inner"><div class="sea-loading-mark">≈</div><div class="sea-loading-title">배타고</div><div class="sea-loading-subtitle">바다를 준비하고 있습니다...</div><div class="sea-loading-track"><div class="sea-loading-progress"></div></div></div>';document.body.append(Fn);_h.innerHTML='<header class="heading"><h1>배타고</h1><p>끝없이 펼쳐지는 바다, 항해의 시작.</p><span class="tag">PROTOTYPE / 0.1</span></header><section class="time-control" aria-label="하늘과 시간 조절"><label><span>구름 양 <output id="cloud-label">35%</output></span><input id="cloud-cover" aria-label="구름 양" type="range" min="0" max="1" step="0.01" value="0.35"></label><label><span>시간 <output id="time-label">18:00</output></span><input id="time-of-day" aria-label="하루 시간" type="range" min="0" max="24" step="0.05" value="0"></label><button id="sky-mode-toggle" type="button" aria-pressed="true" aria-label="자동 순환 중, 눌러서 수동으로 전환">자동</button></section><button id="camera-toggle" type="button" aria-label="바다 전체 감상" title="카메라 시점 전환" aria-pressed="false"><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3z"/><circle cx="12" cy="13.5" r="3.5"/></svg></button><button id="music-toggle" type="button" aria-label="재즈와 파도 소리" title="재즈와 파도 소리" aria-pressed="true"><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 18V5l11-2v13"/><ellipse cx="6.5" cy="18" rx="2.5" ry="1.6"/><ellipse cx="17.5" cy="16" rx="2.5" ry="1.6"/><path class="music-mute-slash" d="M3 21L21 3" stroke-width="2.3"/></svg></button><details><summary aria-label="바다 설정 메뉴"><span class="desktop-menu-title">OCEAN CONTROLS · 바다 설정</span><span class="mobile-menu-title" aria-hidden="true">☰</span></summary><div class="panel"><div class="section">SKY / 낮과 밤</div><div class="time-presets"><button data-hour="12">낮</button><button data-hour="18">석양</button><button data-hour="0">밤</button></div><label class="rain-setting"><input id="rain-toggle" type="checkbox"> 비 내리기 <small>구름 75% 이상 자동</small></label><div class="section">SURFACE / 수면</div><div id="sliders"></div><div class="section">GRAPHICS / 화질</div><label><span>그래픽 품질</span><select id="graphics-quality" aria-label="그래픽 품질"><option value="high">상 · PC 최고화질</option><option value="medium">중 · 모바일 기본</option><option value="low">하 · 저사양 모바일</option></select></label><div class="section">PALETTE / 거리별 바다색</div><div id="colors"></div><button id="reset">기본값으로 초기화</button><p id="stats" aria-label="렌더링 성능">수면 준비 중</p></div></details>';const Fx=Ux(),vh=document.querySelector("#rain-toggle"),zl=document.querySelector("details"),xh=matchMedia("(max-width: 600px)"),yh=()=>{zl.open=!1};yh();xh.addEventListener("change",yh);addEventListener("keydown",s=>{s.key==="Escape"&&xh.matches&&(zl.open=!1)});const Gt=new Y_({antialias:!0});Gt.setPixelRatio(Math.min(devicePixelRatio,2));Gt.setSize(innerWidth,innerHeight);Gt.setClearColor("#a3d1db");_h.prepend(Gt.domElement);Gt.shadowMap.enabled=!0;Gt.shadowMap.type=Pu;const ln=new _f,Dt=new $t(50,innerWidth/innerHeight,.5,5e4);Dt.position.set(0,Bi.deckY+Nt+2,-12);const Ct=new Fv(Dt,Gt.domElement);Ct.target.set(0,Bi.deckY+Nt+1.7,-33);Ct.enableDamping=!0;Ct.enablePan=!1;Ct.minDistance=3;Ct.maxDistance=320;Ct.minPolarAngle=.15;Ct.maxPolarAngle=Math.PI/2-.02;Ct.update();let Zt=null,Vn=!1,on=!1;function Mh(){const s=Dt.aspect<.8;return new L(s?166:140,Ft-5+1,Cs)}function Sh(s){Zt&&(Zt=null,Vn=!0),on=s,typeof xo<"u"&&xo.setOverview(s),document.body.classList.toggle("sea-overview",s);const e=document.querySelector("#camera-toggle");e.setAttribute("aria-pressed",String(s)),e.setAttribute("aria-label",s?"갑판 시점으로 전환":"바다 전체 감상"),e.title=s?"갑판 시점으로 전환":"바다 전체 감상",gt.setEnabled(!s),s?(Dt.position.copy(Mh()),Ct.target.set(0,Ft-5,Cs),Ct.update()):gt.resetView()}document.querySelector("#camera-toggle").onclick=()=>Sh(!on);const Cn=tx();ln.add(Cn.mesh);const Gi=Sx(ln,Cn,Dt),bh=Ax(document.querySelector("#music-toggle")),Ox=Ex(ln,Dt,bh),Eh=Ix(ln,Dt,bh,{ocean:Cn,viewportHeight:()=>Gt.domElement.height}),Os=document.createElement("button");Os.type="button";Os.id="whale-summon";Os.textContent="🐋 고래 등장";Os.setAttribute("aria-label","고래 등장");Os.addEventListener("click",()=>{Eh.summonWhale(),zl.open=!1});const kl=document.createElement("div");kl.className="section";kl.textContent="MARINE LIFE / 해양 생물";const Hl=document.createElement("div");Hl.className="time-presets";Hl.append(Os);const Bx=document.querySelector("#sliders");Bx.before(kl,Hl);const zx=wx(),ei=Dv();ln.add(ei);const kx=nx(ei),Wi=new it;Wi.name="night-bow-beam";const wh=[];for(let s=0;s<6;s++){const e=(s+1)/6,t=new Wt({uniforms:{uOpacity:{value:0},uLayer:{value:e},uColor:{value:new Be("#fff0d6")}},vertexShader:`
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
      }`,transparent:!0,depthWrite:!1,side:wt,blending:ti}),n=new $e(new yi(1.1*e,38*e,32,32,1,!0),t);n.rotation.x=Math.PI/2,n.renderOrder=4,Wi.add(n),wh.push(t)}Wi.position.set(0,6,-36);Wi.visible=!1;let Kr=0;function Hx(s){const e=It.hour,t=1-Xe.smoothstep(Math.min(e,24-e),4.5,6.5),n=!!(Zt&&!Vn&&Zt.elapsed<3),i=on||n?t*.11:0;Kr+=(i-Kr)*(1-Math.exp(-s*2.5));for(const r of wh)r.uniforms.uOpacity.value=Kr;Wi.visible=Kr>.002}let us=0;function Vx(s,e){const n=on||Zt&&!Vn&&Zt.elapsed<3?1:0;us+=(n-us)*(1-Math.exp(-Math.min(s,.05)*2.2));const i=ei.userData.overviewDisplay;if(!i)return;Wi.parent!==i&&i.add(Wi);const r=us>.002;i.visible=r;for(const a of ei.userData.overviewVisualMeshes)a.visible=!r;if(!r){i.position.y=Ft-5,i.rotation.set(0,0,0);return}const o=e*2*Math.PI/(5.6/1.5);i.position.y=Ft-5+us*(.18*Math.sin(o)),i.rotation.x=us*Xe.degToRad(1.8)*Math.sin(o+.5),i.rotation.z=us*Xe.degToRad(.6)*Math.sin(o*.83+1.3)}const zi=Nv(ei),Gx=Dx(ln),gt=ix(ln,Dt,Ct,zi),Th=[];for(const[s,e,t,n]of[[-3.5,"조종실",{x:0,z:-18.7,y:21},6543592],[3.5,"망루",{x:0,z:-21,y:70.9},16762216]]){const i=new it;i.position.set(s,Ft+.35,Cs+2);const r=new $e(new yi(.9,.9,.3,24),new Vt({color:n,emissive:n,emissiveIntensity:.28,roughness:.55}));r.castShadow=!1,i.add(r);const o=new $e(new Vi(.65,.055,6,28),new Xt({color:16777215}));o.rotation.x=-Math.PI/2,o.position.y=.19,i.add(o),ln.add(i),Th.push({root:i,target:t,label:e,armed:!0})}const Ah=Nx(ln,gt,s=>gr.sendFirework(s)),pa=new L,wu=new L(0,Ft-5,Cs);function Wx(){pa.copy(Mh()),Zt={elapsed:0,fromPosition:pa.clone(),fromTarget:wu.clone()},gt.setEnabled(!1),Dt.position.copy(pa),Ct.target.copy(wu),Ct.update()}function Vl(){Zt=null,Vn=!0,gt.setEnabled(!0);const s=gt.deckViewPose();Dt.position.copy(s.position),Ct.target.copy(s.target),Ct.update()}function Xx(s){if(Vn||on)return;if(!Zt){zi.ready()&&gt.isSpawnReady()&&Wx();return}if(Zt.elapsed+=s,Zt.elapsed>=7.5){Vl();return}const e=gt.deckViewPose(),t=Math.max(0,Math.min(1,(Zt.elapsed-3)/4.5)),n=t*t*(3-2*t);Dt.position.copy(Zt.fromPosition).lerp(e.position,n),Ct.target.copy(Zt.fromTarget).lerp(e.target,n),Ct.update()}addEventListener("keydown",s=>{Zt&&["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(s.code)&&(s.preventDefault(),Vl())},{capture:!0});Gt.domElement.addEventListener("pointerdown",()=>{Zt&&Vl()});const Tn=document.createElement("button");Tn.type="button";Tn.innerHTML='<svg width="30" height="30" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><circle cx="16" cy="6" r="3" fill="currentColor" stroke="none"/><path d="M16 11v11M3 13h26M16 22l-6 8M16 22l6 8"/></svg>';Tn.title="바다를 향해 양팔 벌리기";Tn.setAttribute("aria-label","타이타닉 포즈");Tn.style.cssText="position:fixed;z-index:30;display:none;width:48px;height:48px;border:1px solid #ffffffaa;border-radius:50%;background:#07313ddd;color:white;font-size:25px;cursor:pointer;transform:translate(-50%,-100%)";document.querySelector("#app").append(Tn);Tn.onclick=()=>gt.toggleTitanicPose(Ni);const Ni=new L(0,Ft,-44),qx=1.35,$s=new L,gr=mx({scene:ln,camera:Dt,controls:Ct,character:gt,url:"wss://sea-multiplayer.wnalstlr777.workers.dev/room".trim()}),xo=_x({scene:ln,camera:Dt,character:gt,multiplayer:gr,ocean:Cn,isAvailable:()=>Vn&&!on});gr.onFirework((s,e)=>Ah.launchRemote(s,e));const Yx=Lx({scene:ln,camera:Dt,renderer:Gt,controls:Ct,player:gt.player,isAvailable:()=>Vn&&!on,onChoose:s=>gr.sendEmote(s)});Ct.maxDistance=320;new URLSearchParams(location.search).get("view")==="ocean"&&(Vn=!0,Sh(!0));const jx=bx(Dt),It={cameraMotion:matchMedia("(prefers-reduced-motion: reduce)").matches?0:.6,hour:0,cloudCover:.35,curvature:1,height:.825,reflectionResolution:256,waveSize:1,normalStrength:0,naturalSpeed:.6,speed:16,wake:.65},ma={...It};let $r=0,Tu=0;const Rh=document.querySelector("#cloud-cover");Gi.uniforms.cloudCover.value=It.cloudCover;function Gl(s){It.cloudCover=s,Gi.uniforms.cloudCover.value=s,Rh.value=s,document.querySelector("#cloud-label").value=`${Math.round(s*100)}%`}Rh.addEventListener("input",s=>{Xi(!1),Gl(Number(s.target.value))});const Ch=document.querySelector("#graphics-quality"),Au={high:{reflection:512,pixelRatio:1.5,cloudSamples:24,cloudDetail:0},medium:{reflection:256,pixelRatio:1.25,cloudSamples:20,cloudDetail:0},low:{reflection:128,pixelRatio:1,cloudSamples:12,cloudDetail:0}},Ph=/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||navigator.maxTouchPoints>0||matchMedia("(pointer:coarse)").matches?"low":"medium";function Wl(s){const e=Au[s]||Au.medium;Ch.value=s,Gt.setPixelRatio(Math.min(devicePixelRatio,e.pixelRatio)),Gt.setSize(innerWidth,innerHeight),It.reflectionResolution=e.reflection,Cn.setReflectionResolution(e.reflection),Cn.setStarReflectionEnabled(s==="high"),Gi.uniforms.cloudSamples.value=e.cloudSamples,Gi.uniforms.cloudDetail.value=e.cloudDetail}Ch.addEventListener("change",s=>Wl(s.target.value));Wl(Ph);const Ih=document.querySelector("#time-of-day");function Bs(s){It.hour=s,Ih.value=s;const e=Math.round(s*60);document.querySelector("#time-label").value=`${String(Math.floor(e/60)).padStart(2,"0")}:${String(e%60).padStart(2,"0")}`,document.querySelectorAll("[data-hour]").forEach(t=>t.setAttribute("aria-pressed",String(Number(t.dataset.hour)===s)))}Ih.addEventListener("input",s=>{Xi(!1),Bs(Number(s.target.value))});document.querySelectorAll("[data-hour]").forEach(s=>s.addEventListener("click",()=>{Xi(!1),Bs(Number(s.dataset.hour))}));Bs(0);const ao=300;let Xl=!0,Qs=0;const lo=document.querySelector("#sky-mode-toggle");function Xi(s){Xl=s,lo.textContent=s?"자동":"수동",lo.setAttribute("aria-pressed",String(s)),document.querySelector(".time-control").classList.toggle("sky-auto",s),lo.setAttribute("aria-label",s?"자동 순환 중, 눌러서 수동으로 전환":"수동 고정 중, 눌러서 자동으로 전환"),s&&(Qs=It.hour%24/24*ao)}lo.addEventListener("click",()=>Xi(!Xl));Xi(!0);function Kx(s){Xl&&(Qs=(Qs+s)%ao,Bs(Qs/ao*24),Gl(.35+.25*Math.sin(Qs/ao*Math.PI*2)))}const ga=new URLSearchParams(location.search).get("hour");ga!==null&&Number.isFinite(Number(ga))&&(Bs(Math.max(0,Math.min(24,Number(ga)))),Xi(!1));const Dh=[["cameraMotion","카메라 흔들림",0,1,.05],["curvature","지평선 곡률",0,4,.05],["height","파도 높이",0,2,.025],["waveSize","파도 크기 · 파장 배율",.5,3,.05],["normalStrength","잔물결 강도 · 0=끔",0,1,.05],["naturalSpeed","자연 파도 속도",0,3,.05],["speed","항해 속도 · m/s",0,20,.1],["wake","항적 강도",0,1,.05]];for(const[s,e,t,n,i]of Dh){const r=document.createElement("label");r.innerHTML=`<span>${e}<output>${It[s].toFixed(2)}</output></span><input aria-label="${e}" type="range" min="${t}" max="${n}" step="${i}" value="${It[s]}">`,r.querySelector("input").addEventListener("input",o=>{It[s]=Number(o.target.value),r.querySelector("output").value=It[s].toFixed(2)}),document.querySelector("#sliders").append(r)}const Lh={horizon:"#52798b",mid:"#17455c",near:"#105064",deep:"#062839"};for(const[s,e]of Object.entries(Lh)){const t=document.createElement("label");t.className="color",t.innerHTML=`<span>${s[0].toUpperCase()+s.slice(1)} <small>${e}</small></span><input aria-label="${s} color" type="color" value="${e}">`,t.querySelector("input").addEventListener("input",n=>{Cn.uniforms[s].value.set(n.target.value),t.querySelector("small").textContent=n.target.value}),document.querySelector("#colors").append(t)}document.querySelector("#reset").onclick=()=>{Object.assign(It,ma),Bs(ma.hour),Gl(ma.cloudCover),Xi(!0),vh.checked=!1,Wl(Ph),document.querySelectorAll("#sliders input").forEach((s,e)=>{s.value=It[Dh[e][0]],s.dispatchEvent(new Event("input"))}),document.querySelectorAll("#colors input").forEach((s,e)=>{s.value=Object.values(Lh)[e],s.dispatchEvent(new Event("input"))})};addEventListener("resize",()=>{Dt.aspect=innerWidth/innerHeight,Dt.updateProjectionMatrix(),Gt.setSize(innerWidth,innerHeight)});let Zr=performance.now(),Jr=0,_a=0,Ru=!1,$x=0;const Zx=performance.now();function Jx(){if(Ru)return;if(ei.userData.loadingState==="error"){Fn.querySelector(".sea-loading-subtitle").textContent="배 모델을 불러오지 못했습니다. 새로고침해 주세요.";return}const s=ei.userData.loadingState==="ready"&&zi.ready()&&gt.isSpawnReady();if(!s&&performance.now()-Zx>9e3){const e=ei.userData.loadingState!=="ready"?"선박 모델을 불러오는 중입니다.":zi.ready()?"캐릭터 시작 위치를 찾지 못했습니다.":"갑판 충돌 데이터를 확인 중입니다.";Fn.querySelector(".sea-loading-subtitle").textContent=e+" 새로고침 후에도 계속되면 알려주세요."}s&&++$x>=2&&(Ru=!0,Fn.classList.add("sea-loading-done"),Fn.addEventListener("transitionend",()=>Fn.remove(),{once:!0}))}Gt.setAnimationLoop(s=>{if(document.hidden){Zr=s;return}if(s-Zr<1e3/60-1)return;const e=(s-Zr)/1e3,t=Math.min(e,.05);Zr=s,Kx(e),Fx.update(t,Math.max(vh.checked?1:0,Xe.smoothstep(It.cloudCover,.72,.95))),$r+=t*It.naturalSpeed,Tu+=t*It.speed;for(const n of["curvature","height","waveSize","normalStrength","speed","wake"])Cn.uniforms[n].value=It[n];Cn.uniforms.time.value=$r,Cn.uniforms.travel.value=Tu,Gi.update(It.hour,t),Ox.update(e,on),Eh.update(e),Gx.update(t,It.hour,on),zx.update(e),gt.update(t);for(const n of Th){if(n.root.visible=!on,zi.ready()){const l=zi.floorAt(n.root.position.x,n.root.position.z,Ft+3);l!==null&&(n.root.position.y=l+.35)}const i=Math.hypot(gt.player.position.x-n.root.position.x,gt.player.position.z-n.root.position.z),r=gt.player.position.y+Nt+gt.getNetworkState().verticalOffset,o=n.root.position.y+.15,a=Math.abs(r-o)<.55;(i>1.35||!a)&&(n.armed=!0),n.armed&&i<.78&&a&&!on&&Vn&&!gt.isLying()&&gt.launchTo(n.target)&&(n.armed=!1)}if(Ah.update(e),Ct.update(),Xx(t),Jx(),Vx(t,$r),Hx(t),kx.update($r),Tn.style.display="none",!on&&!gt.isLying()&&!gt.isTitanicPosing()&&Math.hypot(gt.player.position.x-Ni.x,gt.player.position.z-Ni.z)<qx){const n=zi.floorAt(Ni.x,Ni.z,Ft+5);n!==null&&Math.abs(gt.player.position.y+Nt+gt.getNetworkState().verticalOffset-n)<1.4&&(Dt.updateMatrixWorld(),$s.set(Ni.x,n+1.8,Ni.z-.75).project(Dt),$s.z>0&&$s.z<1&&(Tn.style.left=`${($s.x*.5+.5)*innerWidth}px`,Tn.style.top=`${(-$s.y*.5+.5)*innerHeight}px`,Tn.style.display="block"))}Dt.updateMatrixWorld(),gr.update(t,Vn&&!on),xo.update(t,It.hour),xo.setOverview(on),Yx.update(),Gi.follow(gt.player.position.clone().add(new L(0,Nt,0))),jx.render(Gt,ln,t,It.cameraMotion,Ct.getDistance()),Jr+=e,_a++,Jr>.5&&(document.querySelector("#stats").textContent=`${Math.round(_a/Jr)} FPS · ${Gt.info.render.calls} CALLS · ${Gt.info.render.triangles.toLocaleString()} TRIANGLES`,Jr=0,_a=0)});window.oceanCruise={renderer:Gt,scene:ln,camera:Dt,controls:Ct,ship:ei,player:gt.player,lighting:Gi,params:It,uniforms:Cn.uniforms};
