(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const jo="180",Gc=0,Pa=1,Vc=2,Wc=0,Nl=1,Xc=2,Dn=3,Yn=0,Ht=1,jt=2,Xn=0,Bi=1,La=2,Da=3,Ia=4,qc=5,ai=100,Yc=101,jc=102,$c=103,Kc=104,Jc=200,Zc=201,Qc=202,eh=203,to=204,no=205,th=206,nh=207,ih=208,rh=209,sh=210,oh=211,ah=212,lh=213,ch=214,io=0,ro=1,so=2,Gi=3,oo=4,ao=5,lo=6,co=7,$o=0,hh=1,dh=2,qn=0,uh=1,fh=2,ph=3,Fl=4,mh=5,gh=6,_h=7,Ol=300,Vi=301,Wi=302,ho=303,uo=304,ds=306,fo=1e3,di=1001,po=1002,pn=1003,vh=1004,br=1005,Sn=1006,Ms=1007,ui=1008,Tn=1009,kl=1010,Bl=1011,cr=1012,Ko=1013,pi=1014,Un=1015,_r=1016,Jo=1017,Zo=1018,hr=1020,zl=35902,Hl=35899,Gl=1021,Vl=1022,fn=1023,dr=1026,ur=1027,Wl=1028,Qo=1029,Xl=1030,ea=1031,ta=1033,jr=33776,$r=33777,Kr=33778,Jr=33779,mo=35840,go=35841,_o=35842,vo=35843,xo=36196,Mo=37492,So=37496,yo=37808,Eo=37809,bo=37810,To=37811,wo=37812,Ao=37813,Ro=37814,Co=37815,Po=37816,Lo=37817,Do=37818,Io=37819,Uo=37820,No=37821,Fo=36492,Oo=36494,ko=36495,Bo=36283,zo=36284,Ho=36285,Go=36286,xh=3200,Mh=3201,na=0,Sh=1,Vn="",Bt="srgb",Xi="srgb-linear",ts="linear",nt="srgb",Mi=7680,Ua=519,yh=512,Eh=513,bh=514,ql=515,Th=516,wh=517,Ah=518,Rh=519,Na=35044,Fa="300 es",yn=2e3,ns=2001;class ji{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Oa=1234567;const ar=Math.PI/180,fr=180/Math.PI;function $i(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Dt[i&255]+Dt[i>>8&255]+Dt[i>>16&255]+Dt[i>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]).toLowerCase()}function $e(i,e,t){return Math.max(e,Math.min(t,i))}function ia(i,e){return(i%e+e)%e}function Ch(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Ph(i,e,t){return i!==e?(t-i)/(e-i):0}function lr(i,e,t){return(1-t)*i+t*e}function Lh(i,e,t,n){return lr(i,e,1-Math.exp(-t*n))}function Dh(i,e=1){return e-Math.abs(ia(i,e*2)-e)}function Ih(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Uh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Nh(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Fh(i,e){return i+Math.random()*(e-i)}function Oh(i){return i*(.5-Math.random())}function kh(i){i!==void 0&&(Oa=i);let e=Oa+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Bh(i){return i*ar}function zh(i){return i*fr}function Hh(i){return(i&i-1)===0&&i!==0}function Gh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Vh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Wh(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+n)/2),h=o((e+n)/2),d=s((e-n)/2),m=o((e-n)/2),u=s((n-e)/2),_=o((n-e)/2);switch(r){case"XYX":i.set(a*h,c*d,c*m,a*l);break;case"YZY":i.set(c*m,a*h,c*d,a*l);break;case"ZXZ":i.set(c*d,c*m,a*h,a*l);break;case"XZX":i.set(a*h,c*_,c*u,a*l);break;case"YXY":i.set(c*u,a*h,c*_,a*l);break;case"ZYZ":i.set(c*_,c*u,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ui(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Nt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const St={DEG2RAD:ar,RAD2DEG:fr,generateUUID:$i,clamp:$e,euclideanModulo:ia,mapLinear:Ch,inverseLerp:Ph,lerp:lr,damp:Lh,pingpong:Dh,smoothstep:Ih,smootherstep:Uh,randInt:Nh,randFloat:Fh,randFloatSpread:Oh,seededRandom:kh,degToRad:Bh,radToDeg:zh,isPowerOfTwo:Hh,ceilPowerOfTwo:Gh,floorPowerOfTwo:Vh,setQuaternionFromProperEuler:Wh,normalize:Nt,denormalize:Ui};class Ue{constructor(e=0,t=0){Ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class vr{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let c=n[r+0],l=n[r+1],h=n[r+2],d=n[r+3];const m=s[o+0],u=s[o+1],_=s[o+2],g=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=m,e[t+1]=u,e[t+2]=_,e[t+3]=g;return}if(d!==g||c!==m||l!==u||h!==_){let p=1-a;const f=c*m+l*u+h*_+d*g,y=f>=0?1:-1,b=1-f*f;if(b>Number.EPSILON){const w=Math.sqrt(b),R=Math.atan2(w,f*y);p=Math.sin(p*R)/w,a=Math.sin(a*R)/w}const v=a*y;if(c=c*p+m*v,l=l*p+u*v,h=h*p+_*v,d=d*p+g*v,p===1-a){const w=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=w,l*=w,h*=w,d*=w}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],c=n[r+1],l=n[r+2],h=n[r+3],d=s[o],m=s[o+1],u=s[o+2],_=s[o+3];return e[t]=a*_+h*d+c*u-l*m,e[t+1]=c*_+h*m+l*d-a*u,e[t+2]=l*_+h*u+a*m-c*d,e[t+3]=h*_-a*d-c*m-l*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(r/2),d=a(s/2),m=c(n/2),u=c(r/2),_=c(s/2);switch(o){case"XYZ":this._x=m*h*d+l*u*_,this._y=l*u*d-m*h*_,this._z=l*h*_+m*u*d,this._w=l*h*d-m*u*_;break;case"YXZ":this._x=m*h*d+l*u*_,this._y=l*u*d-m*h*_,this._z=l*h*_-m*u*d,this._w=l*h*d+m*u*_;break;case"ZXY":this._x=m*h*d-l*u*_,this._y=l*u*d+m*h*_,this._z=l*h*_+m*u*d,this._w=l*h*d-m*u*_;break;case"ZYX":this._x=m*h*d-l*u*_,this._y=l*u*d+m*h*_,this._z=l*h*_-m*u*d,this._w=l*h*d+m*u*_;break;case"YZX":this._x=m*h*d+l*u*_,this._y=l*u*d+m*h*_,this._z=l*h*_-m*u*d,this._w=l*h*d-m*u*_;break;case"XZY":this._x=m*h*d-l*u*_,this._y=l*u*d-m*h*_,this._z=l*h*_+m*u*d,this._w=l*h*d+m*u*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],d=t[10],m=n+a+d;if(m>0){const u=.5/Math.sqrt(m+1);this._w=.25/u,this._x=(h-c)*u,this._y=(s-l)*u,this._z=(o-r)*u}else if(n>a&&n>d){const u=2*Math.sqrt(1+n-a-d);this._w=(h-c)/u,this._x=.25*u,this._y=(r+o)/u,this._z=(s+l)/u}else if(a>d){const u=2*Math.sqrt(1+a-n-d);this._w=(s-l)/u,this._x=(r+o)/u,this._y=.25*u,this._z=(c+h)/u}else{const u=2*Math.sqrt(1+d-n-a);this._w=(o-r)/u,this._x=(s+l)/u,this._y=(c+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+r*l-s*c,this._y=r*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-r*a,this._w=o*h-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const u=1-t;return this._w=u*o+t*this._w,this._x=u*n+t*this._x,this._y=u*r+t*this._y,this._z=u*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-t)*h)/l,m=Math.sin(t*h)/l;return this._w=o*d+this._w*m,this._x=n*d+this._x*m,this._y=r*d+this._y*m,this._z=s*d+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ka.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ka.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*n),h=2*(a*t-s*r),d=2*(s*n-o*t);return this.x=t+c*l+o*d-a*h,this.y=n+c*h+a*l-s*d,this.z=r+c*d+s*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ss.copy(this).projectOnVector(e),this.sub(Ss)}reflect(e){return this.sub(Ss.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ss=new I,ka=new vr;class Ve{constructor(e,t,n,r,s,o,a,c,l){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l)}set(e,t,n,r,s,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],m=n[2],u=n[5],_=n[8],g=r[0],p=r[3],f=r[6],y=r[1],b=r[4],v=r[7],w=r[2],R=r[5],T=r[8];return s[0]=o*g+a*y+c*w,s[3]=o*p+a*b+c*R,s[6]=o*f+a*v+c*T,s[1]=l*g+h*y+d*w,s[4]=l*p+h*b+d*R,s[7]=l*f+h*v+d*T,s[2]=m*g+u*y+_*w,s[5]=m*p+u*b+_*R,s[8]=m*f+u*v+_*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*s*h+n*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=h*o-a*l,m=a*c-h*s,u=l*s-o*c,_=t*d+n*m+r*u;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=d*g,e[1]=(r*l-h*n)*g,e[2]=(a*n-r*o)*g,e[3]=m*g,e[4]=(h*t-r*c)*g,e[5]=(r*s-a*t)*g,e[6]=u*g,e[7]=(n*c-l*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ys.makeScale(e,t)),this}rotate(e){return this.premultiply(ys.makeRotation(-e)),this}translate(e,t){return this.premultiply(ys.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ys=new Ve;function Yl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function is(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Xh(){const i=is("canvas");return i.style.display="block",i}const Ba={};function pr(i){i in Ba||(Ba[i]=!0,console.warn(i))}function qh(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const za=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ha=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Yh(){const i={enabled:!0,workingColorSpace:Xi,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===nt&&(r.r=Fn(r.r),r.g=Fn(r.g),r.b=Fn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===nt&&(r.r=zi(r.r),r.g=zi(r.g),r.b=zi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Vn?ts:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return pr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return pr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Xi]:{primaries:e,whitePoint:n,transfer:ts,toXYZ:za,fromXYZ:Ha,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Bt},outputColorSpaceConfig:{drawingBufferColorSpace:Bt}},[Bt]:{primaries:e,whitePoint:n,transfer:nt,toXYZ:za,fromXYZ:Ha,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Bt}}}),i}const Qe=Yh();function Fn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function zi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Si;class jh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Si===void 0&&(Si=is("canvas")),Si.width=e.width,Si.height=e.height;const r=Si.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Si}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=is("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Fn(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Fn(t[n]/255)*255):t[n]=Fn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $h=0;class ra{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$h++}),this.uuid=$i(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Es(r[o].image)):s.push(Es(r[o]))}else s=Es(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Es(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?jh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Kh=0;const bs=new I;class Ot extends ji{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,n=di,r=di,s=Sn,o=ui,a=fn,c=Tn,l=Ot.DEFAULT_ANISOTROPY,h=Vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kh++}),this.uuid=$i(),this.name="",this.source=new ra(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(bs).x}get height(){return this.source.getSize(bs).y}get depth(){return this.source.getSize(bs).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ol)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fo:e.x=e.x-Math.floor(e.x);break;case di:e.x=e.x<0?0:1;break;case po:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fo:e.y=e.y-Math.floor(e.y);break;case di:e.y=e.y<0?0:1;break;case po:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=Ol;Ot.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,t=0,n=0,r=1){gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],h=c[4],d=c[8],m=c[1],u=c[5],_=c[9],g=c[2],p=c[6],f=c[10];if(Math.abs(h-m)<.01&&Math.abs(d-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+m)<.1&&Math.abs(d+g)<.1&&Math.abs(_+p)<.1&&Math.abs(l+u+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(l+1)/2,v=(u+1)/2,w=(f+1)/2,R=(h+m)/4,T=(d+g)/4,P=(_+p)/4;return b>v&&b>w?b<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(b),r=R/n,s=T/n):v>w?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=R/r,s=P/r):w<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),n=T/s,r=P/s),this.set(n,r,s,t),this}let y=Math.sqrt((p-_)*(p-_)+(d-g)*(d-g)+(m-h)*(m-h));return Math.abs(y)<.001&&(y=1),this.x=(p-_)/y,this.y=(d-g)/y,this.z=(m-h)/y,this.w=Math.acos((l+u+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Jh extends ji{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);const r={width:e,height:t,depth:n.depth},s=new Ot(r);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new ra(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mi extends Jh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class jl extends Ot{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=pn,this.minFilter=pn,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Zh extends Ot{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=pn,this.minFilter=pn,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xr{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,sn):sn.fromBufferAttribute(s,o),sn.applyMatrix4(e.matrixWorld),this.expandByPoint(sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Tr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Tr.copy(n.boundingBox)),Tr.applyMatrix4(e.matrixWorld),this.union(Tr)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,sn),sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(er),wr.subVectors(this.max,er),yi.subVectors(e.a,er),Ei.subVectors(e.b,er),bi.subVectors(e.c,er),On.subVectors(Ei,yi),kn.subVectors(bi,Ei),Zn.subVectors(yi,bi);let t=[0,-On.z,On.y,0,-kn.z,kn.y,0,-Zn.z,Zn.y,On.z,0,-On.x,kn.z,0,-kn.x,Zn.z,0,-Zn.x,-On.y,On.x,0,-kn.y,kn.x,0,-Zn.y,Zn.x,0];return!Ts(t,yi,Ei,bi,wr)||(t=[1,0,0,0,1,0,0,0,1],!Ts(t,yi,Ei,bi,wr))?!1:(Ar.crossVectors(On,kn),t=[Ar.x,Ar.y,Ar.z],Ts(t,yi,Ei,bi,wr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(An[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),An[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),An[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),An[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),An[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),An[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),An[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),An[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(An),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const An=[new I,new I,new I,new I,new I,new I,new I,new I],sn=new I,Tr=new xr,yi=new I,Ei=new I,bi=new I,On=new I,kn=new I,Zn=new I,er=new I,wr=new I,Ar=new I,Qn=new I;function Ts(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Qn.fromArray(i,s);const a=r.x*Math.abs(Qn.x)+r.y*Math.abs(Qn.y)+r.z*Math.abs(Qn.z),c=e.dot(Qn),l=t.dot(Qn),h=n.dot(Qn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Qh=new xr,tr=new I,ws=new I;class sa{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Qh.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;tr.subVectors(e,this.center);const t=tr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(tr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ws.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(tr.copy(e.center).add(ws)),this.expandByPoint(tr.copy(e.center).sub(ws))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Rn=new I,As=new I,Rr=new I,Bn=new I,Rs=new I,Cr=new I,Cs=new I;class ed{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Rn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Rn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Rn.copy(this.origin).addScaledVector(this.direction,t),Rn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){As.copy(e).add(t).multiplyScalar(.5),Rr.copy(t).sub(e).normalize(),Bn.copy(this.origin).sub(As);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Rr),a=Bn.dot(this.direction),c=-Bn.dot(Rr),l=Bn.lengthSq(),h=Math.abs(1-o*o);let d,m,u,_;if(h>0)if(d=o*c-a,m=o*a-c,_=s*h,d>=0)if(m>=-_)if(m<=_){const g=1/h;d*=g,m*=g,u=d*(d+o*m+2*a)+m*(o*d+m+2*c)+l}else m=s,d=Math.max(0,-(o*m+a)),u=-d*d+m*(m+2*c)+l;else m=-s,d=Math.max(0,-(o*m+a)),u=-d*d+m*(m+2*c)+l;else m<=-_?(d=Math.max(0,-(-o*s+a)),m=d>0?-s:Math.min(Math.max(-s,-c),s),u=-d*d+m*(m+2*c)+l):m<=_?(d=0,m=Math.min(Math.max(-s,-c),s),u=m*(m+2*c)+l):(d=Math.max(0,-(o*s+a)),m=d>0?s:Math.min(Math.max(-s,-c),s),u=-d*d+m*(m+2*c)+l);else m=o>0?-s:s,d=Math.max(0,-(o*m+a)),u=-d*d+m*(m+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(As).addScaledVector(Rr,m),u}intersectSphere(e,t){Rn.subVectors(e.center,this.origin);const n=Rn.dot(this.direction),r=Rn.dot(Rn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,m=this.origin;return l>=0?(n=(e.min.x-m.x)*l,r=(e.max.x-m.x)*l):(n=(e.max.x-m.x)*l,r=(e.min.x-m.x)*l),h>=0?(s=(e.min.y-m.y)*h,o=(e.max.y-m.y)*h):(s=(e.max.y-m.y)*h,o=(e.min.y-m.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-m.z)*d,c=(e.max.z-m.z)*d):(a=(e.max.z-m.z)*d,c=(e.min.z-m.z)*d),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Rn)!==null}intersectTriangle(e,t,n,r,s){Rs.subVectors(t,e),Cr.subVectors(n,e),Cs.crossVectors(Rs,Cr);let o=this.direction.dot(Cs),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Bn.subVectors(this.origin,e);const c=a*this.direction.dot(Cr.crossVectors(Bn,Cr));if(c<0)return null;const l=a*this.direction.dot(Rs.cross(Bn));if(l<0||c+l>o)return null;const h=-a*Bn.dot(Cs);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vt{constructor(e,t,n,r,s,o,a,c,l,h,d,m,u,_,g,p){vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l,h,d,m,u,_,g,p)}set(e,t,n,r,s,o,a,c,l,h,d,m,u,_,g,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=d,f[14]=m,f[3]=u,f[7]=_,f[11]=g,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Ti.setFromMatrixColumn(e,0).length(),s=1/Ti.setFromMatrixColumn(e,1).length(),o=1/Ti.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const m=o*h,u=o*d,_=a*h,g=a*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=u+_*l,t[5]=m-g*l,t[9]=-a*c,t[2]=g-m*l,t[6]=_+u*l,t[10]=o*c}else if(e.order==="YXZ"){const m=c*h,u=c*d,_=l*h,g=l*d;t[0]=m+g*a,t[4]=_*a-u,t[8]=o*l,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=u*a-_,t[6]=g+m*a,t[10]=o*c}else if(e.order==="ZXY"){const m=c*h,u=c*d,_=l*h,g=l*d;t[0]=m-g*a,t[4]=-o*d,t[8]=_+u*a,t[1]=u+_*a,t[5]=o*h,t[9]=g-m*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const m=o*h,u=o*d,_=a*h,g=a*d;t[0]=c*h,t[4]=_*l-u,t[8]=m*l+g,t[1]=c*d,t[5]=g*l+m,t[9]=u*l-_,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const m=o*c,u=o*l,_=a*c,g=a*l;t[0]=c*h,t[4]=g-m*d,t[8]=_*d+u,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=u*d+_,t[10]=m-g*d}else if(e.order==="XZY"){const m=o*c,u=o*l,_=a*c,g=a*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=m*d+g,t[5]=o*h,t[9]=u*d-_,t[2]=_*d-u,t[6]=a*h,t[10]=g*d+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(td,e,nd)}lookAt(e,t,n){const r=this.elements;return Xt.subVectors(e,t),Xt.lengthSq()===0&&(Xt.z=1),Xt.normalize(),zn.crossVectors(n,Xt),zn.lengthSq()===0&&(Math.abs(n.z)===1?Xt.x+=1e-4:Xt.z+=1e-4,Xt.normalize(),zn.crossVectors(n,Xt)),zn.normalize(),Pr.crossVectors(Xt,zn),r[0]=zn.x,r[4]=Pr.x,r[8]=Xt.x,r[1]=zn.y,r[5]=Pr.y,r[9]=Xt.y,r[2]=zn.z,r[6]=Pr.z,r[10]=Xt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],m=n[9],u=n[13],_=n[2],g=n[6],p=n[10],f=n[14],y=n[3],b=n[7],v=n[11],w=n[15],R=r[0],T=r[4],P=r[8],S=r[12],M=r[1],L=r[5],O=r[9],A=r[13],U=r[2],N=r[6],V=r[10],Y=r[14],H=r[3],ee=r[7],se=r[11],q=r[15];return s[0]=o*R+a*M+c*U+l*H,s[4]=o*T+a*L+c*N+l*ee,s[8]=o*P+a*O+c*V+l*se,s[12]=o*S+a*A+c*Y+l*q,s[1]=h*R+d*M+m*U+u*H,s[5]=h*T+d*L+m*N+u*ee,s[9]=h*P+d*O+m*V+u*se,s[13]=h*S+d*A+m*Y+u*q,s[2]=_*R+g*M+p*U+f*H,s[6]=_*T+g*L+p*N+f*ee,s[10]=_*P+g*O+p*V+f*se,s[14]=_*S+g*A+p*Y+f*q,s[3]=y*R+b*M+v*U+w*H,s[7]=y*T+b*L+v*N+w*ee,s[11]=y*P+b*O+v*V+w*se,s[15]=y*S+b*A+v*Y+w*q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],d=e[6],m=e[10],u=e[14],_=e[3],g=e[7],p=e[11],f=e[15];return _*(+s*c*d-r*l*d-s*a*m+n*l*m+r*a*u-n*c*u)+g*(+t*c*u-t*l*m+s*o*m-r*o*u+r*l*h-s*c*h)+p*(+t*l*d-t*a*u-s*o*d+n*o*u+s*a*h-n*l*h)+f*(-r*a*h-t*c*d+t*a*m+r*o*d-n*o*m+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=e[9],m=e[10],u=e[11],_=e[12],g=e[13],p=e[14],f=e[15],y=d*p*l-g*m*l+g*c*u-a*p*u-d*c*f+a*m*f,b=_*m*l-h*p*l-_*c*u+o*p*u+h*c*f-o*m*f,v=h*g*l-_*d*l+_*a*u-o*g*u-h*a*f+o*d*f,w=_*d*c-h*g*c-_*a*m+o*g*m+h*a*p-o*d*p,R=t*y+n*b+r*v+s*w;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/R;return e[0]=y*T,e[1]=(g*m*s-d*p*s-g*r*u+n*p*u+d*r*f-n*m*f)*T,e[2]=(a*p*s-g*c*s+g*r*l-n*p*l-a*r*f+n*c*f)*T,e[3]=(d*c*s-a*m*s-d*r*l+n*m*l+a*r*u-n*c*u)*T,e[4]=b*T,e[5]=(h*p*s-_*m*s+_*r*u-t*p*u-h*r*f+t*m*f)*T,e[6]=(_*c*s-o*p*s-_*r*l+t*p*l+o*r*f-t*c*f)*T,e[7]=(o*m*s-h*c*s+h*r*l-t*m*l-o*r*u+t*c*u)*T,e[8]=v*T,e[9]=(_*d*s-h*g*s-_*n*u+t*g*u+h*n*f-t*d*f)*T,e[10]=(o*g*s-_*a*s+_*n*l-t*g*l-o*n*f+t*a*f)*T,e[11]=(h*a*s-o*d*s-h*n*l+t*d*l+o*n*u-t*a*u)*T,e[12]=w*T,e[13]=(h*g*r-_*d*r+_*n*m-t*g*m-h*n*p+t*d*p)*T,e[14]=(_*a*r-o*g*r-_*n*c+t*g*c+o*n*p-t*a*p)*T,e[15]=(o*d*r-h*a*r+h*n*c-t*d*c-o*n*m+t*a*m)*T,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,h*a+n,h*c-r*o,0,l*c-r*a,h*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,h=o+o,d=a+a,m=s*l,u=s*h,_=s*d,g=o*h,p=o*d,f=a*d,y=c*l,b=c*h,v=c*d,w=n.x,R=n.y,T=n.z;return r[0]=(1-(g+f))*w,r[1]=(u+v)*w,r[2]=(_-b)*w,r[3]=0,r[4]=(u-v)*R,r[5]=(1-(m+f))*R,r[6]=(p+y)*R,r[7]=0,r[8]=(_+b)*T,r[9]=(p-y)*T,r[10]=(1-(m+g))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Ti.set(r[0],r[1],r[2]).length();const o=Ti.set(r[4],r[5],r[6]).length(),a=Ti.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],on.copy(this);const l=1/s,h=1/o,d=1/a;return on.elements[0]*=l,on.elements[1]*=l,on.elements[2]*=l,on.elements[4]*=h,on.elements[5]*=h,on.elements[6]*=h,on.elements[8]*=d,on.elements[9]*=d,on.elements[10]*=d,t.setFromRotationMatrix(on),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=yn,c=!1){const l=this.elements,h=2*s/(t-e),d=2*s/(n-r),m=(t+e)/(t-e),u=(n+r)/(n-r);let _,g;if(c)_=s/(o-s),g=o*s/(o-s);else if(a===yn)_=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===ns)_=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=m,l[12]=0,l[1]=0,l[5]=d,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=yn,c=!1){const l=this.elements,h=2/(t-e),d=2/(n-r),m=-(t+e)/(t-e),u=-(n+r)/(n-r);let _,g;if(c)_=1/(o-s),g=o/(o-s);else if(a===yn)_=-2/(o-s),g=-(o+s)/(o-s);else if(a===ns)_=-1/(o-s),g=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=m,l[1]=0,l[5]=d,l[9]=0,l[13]=u,l[2]=0,l[6]=0,l[10]=_,l[14]=g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ti=new I,on=new vt,td=new I(0,0,0),nd=new I(1,1,1),zn=new I,Pr=new I,Xt=new I,Ga=new vt,Va=new vr;class _n{constructor(e=0,t=0,n=0,r=_n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],h=r[9],d=r[2],m=r[6],u=r[10];switch(t){case"XYZ":this._y=Math.asin($e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(m,l),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin($e(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-$e(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(m,u),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin($e(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-$e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ga.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ga,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Va.setFromEuler(this),this.setFromQuaternion(Va,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_n.DEFAULT_ORDER="XYZ";class $l{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let id=0;const Wa=new I,wi=new vr,Cn=new vt,Lr=new I,nr=new I,rd=new I,sd=new vr,Xa=new I(1,0,0),qa=new I(0,1,0),Ya=new I(0,0,1),ja={type:"added"},od={type:"removed"},Ai={type:"childadded",child:null},Ps={type:"childremoved",child:null};class Pt extends ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:id++}),this.uuid=$i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pt.DEFAULT_UP.clone();const e=new I,t=new _n,n=new vr,r=new I(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new vt},normalMatrix:{value:new Ve}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=Pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $l,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wi.setFromAxisAngle(e,t),this.quaternion.multiply(wi),this}rotateOnWorldAxis(e,t){return wi.setFromAxisAngle(e,t),this.quaternion.premultiply(wi),this}rotateX(e){return this.rotateOnAxis(Xa,e)}rotateY(e){return this.rotateOnAxis(qa,e)}rotateZ(e){return this.rotateOnAxis(Ya,e)}translateOnAxis(e,t){return Wa.copy(e).applyQuaternion(this.quaternion),this.position.add(Wa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xa,e)}translateY(e){return this.translateOnAxis(qa,e)}translateZ(e){return this.translateOnAxis(Ya,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Lr.copy(e):Lr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(nr,Lr,this.up):Cn.lookAt(Lr,nr,this.up),this.quaternion.setFromRotationMatrix(Cn),r&&(Cn.extractRotation(r.matrixWorld),wi.setFromRotationMatrix(Cn),this.quaternion.premultiply(wi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ja),Ai.child=e,this.dispatchEvent(Ai),Ai.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(od),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Cn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ja),Ai.child=e,this.dispatchEvent(Ai),Ai.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,e,rd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,sd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),d=o(e.shapes),m=o(e.skeletons),u=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),m.length>0&&(n.skeletons=m),u.length>0&&(n.animations=u),_.length>0&&(n.nodes=_)}return n.object=r,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Pt.DEFAULT_UP=new I(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const an=new I,Pn=new I,Ls=new I,Ln=new I,Ri=new I,Ci=new I,$a=new I,Ds=new I,Is=new I,Us=new I,Ns=new gt,Fs=new gt,Os=new gt;class un{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),an.subVectors(e,t),r.cross(an);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){an.subVectors(r,t),Pn.subVectors(n,t),Ls.subVectors(e,t);const o=an.dot(an),a=an.dot(Pn),c=an.dot(Ls),l=Pn.dot(Pn),h=Pn.dot(Ls),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;const m=1/d,u=(l*c-a*h)*m,_=(o*h-a*c)*m;return s.set(1-u-_,_,u)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Ln)===null?!1:Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getInterpolation(e,t,n,r,s,o,a,c){return this.getBarycoord(e,t,n,r,Ln)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Ln.x),c.addScaledVector(o,Ln.y),c.addScaledVector(a,Ln.z),c)}static getInterpolatedAttribute(e,t,n,r,s,o){return Ns.setScalar(0),Fs.setScalar(0),Os.setScalar(0),Ns.fromBufferAttribute(e,t),Fs.fromBufferAttribute(e,n),Os.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Ns,s.x),o.addScaledVector(Fs,s.y),o.addScaledVector(Os,s.z),o}static isFrontFacing(e,t,n,r){return an.subVectors(n,t),Pn.subVectors(e,t),an.cross(Pn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return an.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),an.cross(Pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return un.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return un.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;Ri.subVectors(r,n),Ci.subVectors(s,n),Ds.subVectors(e,n);const c=Ri.dot(Ds),l=Ci.dot(Ds);if(c<=0&&l<=0)return t.copy(n);Is.subVectors(e,r);const h=Ri.dot(Is),d=Ci.dot(Is);if(h>=0&&d<=h)return t.copy(r);const m=c*d-h*l;if(m<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Ri,o);Us.subVectors(e,s);const u=Ri.dot(Us),_=Ci.dot(Us);if(_>=0&&u<=_)return t.copy(s);const g=u*l-c*_;if(g<=0&&l>=0&&_<=0)return a=l/(l-_),t.copy(n).addScaledVector(Ci,a);const p=h*_-u*d;if(p<=0&&d-h>=0&&u-_>=0)return $a.subVectors(s,r),a=(d-h)/(d-h+(u-_)),t.copy(r).addScaledVector($a,a);const f=1/(p+g+m);return o=g*f,a=m*f,t.copy(n).addScaledVector(Ri,o).addScaledVector(Ci,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Kl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},Dr={h:0,s:0,l:0};function ks(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Je{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Qe.workingColorSpace){if(e=ia(e,1),t=$e(t,0,1),n=$e(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=ks(o,s,e+1/3),this.g=ks(o,s,e),this.b=ks(o,s,e-1/3)}return Qe.colorSpaceToWorking(this,r),this}setStyle(e,t=Bt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Bt){const n=Kl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fn(e.r),this.g=Fn(e.g),this.b=Fn(e.b),this}copyLinearToSRGB(e){return this.r=zi(e.r),this.g=zi(e.g),this.b=zi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bt){return Qe.workingToColorSpace(It.copy(this),e),Math.round($e(It.r*255,0,255))*65536+Math.round($e(It.g*255,0,255))*256+Math.round($e(It.b*255,0,255))}getHexString(e=Bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.workingToColorSpace(It.copy(this),t);const n=It.r,r=It.g,s=It.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-n)/d+2;break;case s:c=(n-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Qe.workingColorSpace){return Qe.workingToColorSpace(It.copy(this),t),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=Bt){Qe.workingToColorSpace(It.copy(this),e);const t=It.r,n=It.g,r=It.b;return e!==Bt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Hn),this.setHSL(Hn.h+e,Hn.s+t,Hn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Hn),e.getHSL(Dr);const n=lr(Hn.h,Dr.h,t),r=lr(Hn.s,Dr.s,t),s=lr(Hn.l,Dr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const It=new Je;Je.NAMES=Kl;let ad=0;class Ki extends ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=$i(),this.name="",this.type="Material",this.blending=Bi,this.side=Yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=to,this.blendDst=no,this.blendEquation=ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=Gi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ua,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mi,this.stencilZFail=Mi,this.stencilZPass=Mi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Bi&&(n.blending=this.blending),this.side!==Yn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==to&&(n.blendSrc=this.blendSrc),this.blendDst!==no&&(n.blendDst=this.blendDst),this.blendEquation!==ai&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Gi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ua&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Mi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Mi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ji extends Ki{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=$o,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new I,Ir=new Ue;let ld=0;class rn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ld++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Na,this.updateRanges=[],this.gpuType=Un,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ir.fromBufferAttribute(this,t),Ir.applyMatrix3(e),this.setXY(t,Ir.x,Ir.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ui(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Nt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ui(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ui(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ui(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ui(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),r=Nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),r=Nt(r,this.array),s=Nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Na&&(e.usage=this.usage),e}}class Jl extends rn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Zl extends rn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ht extends rn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let cd=0;const Qt=new vt,Bs=new Pt,Pi=new I,qt=new xr,ir=new xr,At=new I;class Gt extends ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cd++}),this.uuid=$i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yl(e)?Zl:Jl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ve().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qt.makeRotationFromQuaternion(e),this.applyMatrix4(Qt),this}rotateX(e){return Qt.makeRotationX(e),this.applyMatrix4(Qt),this}rotateY(e){return Qt.makeRotationY(e),this.applyMatrix4(Qt),this}rotateZ(e){return Qt.makeRotationZ(e),this.applyMatrix4(Qt),this}translate(e,t,n){return Qt.makeTranslation(e,t,n),this.applyMatrix4(Qt),this}scale(e,t,n){return Qt.makeScale(e,t,n),this.applyMatrix4(Qt),this}lookAt(e){return Bs.lookAt(e),Bs.updateMatrix(),this.applyMatrix4(Bs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pi).negate(),this.translate(Pi.x,Pi.y,Pi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ht(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];qt.setFromBufferAttribute(s),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ir.setFromBufferAttribute(a),this.morphTargetsRelative?(At.addVectors(qt.min,ir.min),qt.expandByPoint(At),At.addVectors(qt.max,ir.max),qt.expandByPoint(At)):(qt.expandByPoint(ir.min),qt.expandByPoint(ir.max))}qt.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)At.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(At));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)At.fromBufferAttribute(a,l),c&&(Pi.fromBufferAttribute(e,l),At.add(Pi)),r=Math.max(r,n.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new I,c[P]=new I;const l=new I,h=new I,d=new I,m=new Ue,u=new Ue,_=new Ue,g=new I,p=new I;function f(P,S,M){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,S),d.fromBufferAttribute(n,M),m.fromBufferAttribute(s,P),u.fromBufferAttribute(s,S),_.fromBufferAttribute(s,M),h.sub(l),d.sub(l),u.sub(m),_.sub(m);const L=1/(u.x*_.y-_.x*u.y);isFinite(L)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(d,-u.y).multiplyScalar(L),p.copy(d).multiplyScalar(u.x).addScaledVector(h,-_.x).multiplyScalar(L),a[P].add(g),a[S].add(g),a[M].add(g),c[P].add(p),c[S].add(p),c[M].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let P=0,S=y.length;P<S;++P){const M=y[P],L=M.start,O=M.count;for(let A=L,U=L+O;A<U;A+=3)f(e.getX(A+0),e.getX(A+1),e.getX(A+2))}const b=new I,v=new I,w=new I,R=new I;function T(P){w.fromBufferAttribute(r,P),R.copy(w);const S=a[P];b.copy(S),b.sub(w.multiplyScalar(w.dot(S))).normalize(),v.crossVectors(R,S);const L=v.dot(c[P])<0?-1:1;o.setXYZW(P,b.x,b.y,b.z,L)}for(let P=0,S=y.length;P<S;++P){const M=y[P],L=M.start,O=M.count;for(let A=L,U=L+O;A<U;A+=3)T(e.getX(A+0)),T(e.getX(A+1)),T(e.getX(A+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new rn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,u=n.count;m<u;m++)n.setXYZ(m,0,0,0);const r=new I,s=new I,o=new I,a=new I,c=new I,l=new I,h=new I,d=new I;if(e)for(let m=0,u=e.count;m<u;m+=3){const _=e.getX(m+0),g=e.getX(m+1),p=e.getX(m+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,p),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let m=0,u=t.count;m<u;m+=3)r.fromBufferAttribute(t,m+0),s.fromBufferAttribute(t,m+1),o.fromBufferAttribute(t,m+2),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),n.setXYZ(m+0,h.x,h.y,h.z),n.setXYZ(m+1,h.x,h.y,h.z),n.setXYZ(m+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,d=a.normalized,m=new l.constructor(c.length*h);let u=0,_=0;for(let g=0,p=c.length;g<p;g++){a.isInterleavedBufferAttribute?u=c[g]*a.data.stride+a.offset:u=c[g]*h;for(let f=0;f<h;f++)m[_++]=l[u++]}return new rn(m,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Gt,n=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let h=0,d=l.length;h<d;h++){const m=l[h],u=e(m,n);c.push(u)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,m=l.length;d<m;d++){const u=l[d];h.push(u.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],d=s[l];for(let m=0,u=d.length;m<u;m++)h.push(d[m].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ka=new vt,ei=new ed,Ur=new sa,Ja=new I,Nr=new I,Fr=new I,Or=new I,zs=new I,kr=new I,Za=new I,Br=new I;class Ct extends Pt{constructor(e=new Gt,t=new Ji){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){kr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=a[c],d=s[c];h!==0&&(zs.fromBufferAttribute(d,e),o?kr.addScaledVector(zs,h):kr.addScaledVector(zs.sub(t),h))}t.add(kr)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere),Ur.applyMatrix4(s),ei.copy(e.ray).recast(e.near),!(Ur.containsPoint(ei.origin)===!1&&(ei.intersectSphere(Ur,Ja)===null||ei.origin.distanceToSquared(Ja)>(e.far-e.near)**2))&&(Ka.copy(s).invert(),ei.copy(e.ray).applyMatrix4(Ka),!(n.boundingBox!==null&&ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ei)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,m=s.groups,u=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=m.length;_<g;_++){const p=m[_],f=o[p.materialIndex],y=Math.max(p.start,u.start),b=Math.min(a.count,Math.min(p.start+p.count,u.start+u.count));for(let v=y,w=b;v<w;v+=3){const R=a.getX(v),T=a.getX(v+1),P=a.getX(v+2);r=zr(this,f,e,n,l,h,d,R,T,P),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,u.start),g=Math.min(a.count,u.start+u.count);for(let p=_,f=g;p<f;p+=3){const y=a.getX(p),b=a.getX(p+1),v=a.getX(p+2);r=zr(this,o,e,n,l,h,d,y,b,v),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,g=m.length;_<g;_++){const p=m[_],f=o[p.materialIndex],y=Math.max(p.start,u.start),b=Math.min(c.count,Math.min(p.start+p.count,u.start+u.count));for(let v=y,w=b;v<w;v+=3){const R=v,T=v+1,P=v+2;r=zr(this,f,e,n,l,h,d,R,T,P),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,u.start),g=Math.min(c.count,u.start+u.count);for(let p=_,f=g;p<f;p+=3){const y=p,b=p+1,v=p+2;r=zr(this,o,e,n,l,h,d,y,b,v),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function hd(i,e,t,n,r,s,o,a){let c;if(e.side===Ht?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,e.side===Yn,a),c===null)return null;Br.copy(a),Br.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Br);return l<t.near||l>t.far?null:{distance:l,point:Br.clone(),object:i}}function zr(i,e,t,n,r,s,o,a,c,l){i.getVertexPosition(a,Nr),i.getVertexPosition(c,Fr),i.getVertexPosition(l,Or);const h=hd(i,e,t,n,Nr,Fr,Or,Za);if(h){const d=new I;un.getBarycoord(Za,Nr,Fr,Or,d),r&&(h.uv=un.getInterpolatedAttribute(r,a,c,l,d,new Ue)),s&&(h.uv1=un.getInterpolatedAttribute(s,a,c,l,d,new Ue)),o&&(h.normal=un.getInterpolatedAttribute(o,a,c,l,d,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const m={a,b:c,c:l,normal:new I,materialIndex:0};un.getNormal(Nr,Fr,Or,m.normal),h.face=m,h.barycoord=d}return h}class vi extends Gt{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],h=[],d=[];let m=0,u=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,r,o,2),_("x","z","y",1,-1,e,n,-t,r,o,3),_("x","y","z",1,-1,e,t,n,r,s,4),_("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new ht(l,3)),this.setAttribute("normal",new ht(h,3)),this.setAttribute("uv",new ht(d,2));function _(g,p,f,y,b,v,w,R,T,P,S){const M=v/T,L=w/P,O=v/2,A=w/2,U=R/2,N=T+1,V=P+1;let Y=0,H=0;const ee=new I;for(let se=0;se<V;se++){const q=se*L-A;for(let ve=0;ve<N;ve++){const Fe=ve*M-O;ee[g]=Fe*y,ee[p]=q*b,ee[f]=U,l.push(ee.x,ee.y,ee.z),ee[g]=0,ee[p]=0,ee[f]=R>0?1:-1,h.push(ee.x,ee.y,ee.z),d.push(ve/T),d.push(1-se/P),Y+=1}}for(let se=0;se<P;se++)for(let q=0;q<T;q++){const ve=m+q+N*se,Fe=m+q+N*(se+1),ze=m+(q+1)+N*(se+1),He=m+(q+1)+N*se;c.push(ve,Fe,He),c.push(Fe,ze,He),H+=6}a.addGroup(u,H,S),u+=H,m+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function qi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Ft(i){const e={};for(let t=0;t<i.length;t++){const n=qi(i[t]);for(const r in n)e[r]=n[r]}return e}function dd(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ql(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const ud={clone:qi,merge:Ft};var fd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class jn extends Ki{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fd,this.fragmentShader=pd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qi(e.uniforms),this.uniformsGroups=dd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ec extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Gn=new I,Qa=new Ue,el=new Ue;class hn extends ec{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=fr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ar*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fr*2*Math.atan(Math.tan(ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Gn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Gn.x,Gn.y).multiplyScalar(-e/Gn.z),Gn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gn.x,Gn.y).multiplyScalar(-e/Gn.z)}getViewSize(e,t){return this.getViewBounds(e,Qa,el),t.subVectors(el,Qa)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ar*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Li=-90,Di=1;class md extends Pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new hn(Li,Di,e,t);r.layers=this.layers,this.add(r);const s=new hn(Li,Di,e,t);s.layers=this.layers,this.add(s);const o=new hn(Li,Di,e,t);o.layers=this.layers,this.add(o);const a=new hn(Li,Di,e,t);a.layers=this.layers,this.add(a);const c=new hn(Li,Di,e,t);c.layers=this.layers,this.add(c);const l=new hn(Li,Di,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===yn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ns)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,h]=this.children,d=e.getRenderTarget(),m=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(d,m,u),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class tc extends Ot{constructor(e=[],t=Vi,n,r,s,o,a,c,l,h){super(e,t,n,r,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class gd extends mi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new tc(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new vi(5,5,5),s=new jn({name:"CubemapFromEquirect",uniforms:qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ht,blending:Xn});s.uniforms.tEquirect.value=t;const o=new Ct(r,s),a=t.minFilter;return t.minFilter===ui&&(t.minFilter=Sn),new md(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}class ot extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _d={type:"move"};class Hs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ot,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ot,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ot,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,n),f=this._getHandJoint(l,g);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],m=h.position.distanceTo(d.position),u=.02,_=.005;l.inputState.pinching&&m>u+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&m<=u-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_d)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ot;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class vd extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _n,this.environmentIntensity=1,this.environmentRotation=new _n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Gs=new I,xd=new I,Md=new Ve;class si{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Gs.subVectors(n,t).cross(xd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Gs),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Md.getNormalMatrix(e),r=this.coplanarPoint(Gs).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ti=new sa,Sd=new Ue(.5,.5),Hr=new I;class oa{constructor(e=new si,t=new si,n=new si,r=new si,s=new si,o=new si){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=yn,n=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],l=s[3],h=s[4],d=s[5],m=s[6],u=s[7],_=s[8],g=s[9],p=s[10],f=s[11],y=s[12],b=s[13],v=s[14],w=s[15];if(r[0].setComponents(l-o,u-h,f-_,w-y).normalize(),r[1].setComponents(l+o,u+h,f+_,w+y).normalize(),r[2].setComponents(l+a,u+d,f+g,w+b).normalize(),r[3].setComponents(l-a,u-d,f-g,w-b).normalize(),n)r[4].setComponents(c,m,p,v).normalize(),r[5].setComponents(l-c,u-m,f-p,w-v).normalize();else if(r[4].setComponents(l-c,u-m,f-p,w-v).normalize(),t===yn)r[5].setComponents(l+c,u+m,f+p,w+v).normalize();else if(t===ns)r[5].setComponents(c,m,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ti.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ti.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ti)}intersectsSprite(e){ti.center.set(0,0,0);const t=Sd.distanceTo(e.center);return ti.radius=.7071067811865476+t,ti.applyMatrix4(e.matrixWorld),this.intersectsSphere(ti)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Hr.x=r.normal.x>0?e.max.x:e.min.x,Hr.y=r.normal.y>0?e.max.y:e.min.y,Hr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Hr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class yd extends Ot{constructor(e,t,n,r,s,o,a,c,l){super(e,t,n,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class nc extends Ot{constructor(e,t,n=pi,r,s,o,a=pn,c=pn,l,h=dr,d=1){if(h!==dr&&h!==ur)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:e,height:t,depth:d};super(m,r,s,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ra(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ic extends Ot{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class gi extends Gt{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const h=[],d=[],m=[],u=[];let _=0;const g=[],p=n/2;let f=0;y(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new ht(d,3)),this.setAttribute("normal",new ht(m,3)),this.setAttribute("uv",new ht(u,2));function y(){const v=new I,w=new I;let R=0;const T=(t-e)/n;for(let P=0;P<=s;P++){const S=[],M=P/s,L=M*(t-e)+e;for(let O=0;O<=r;O++){const A=O/r,U=A*c+a,N=Math.sin(U),V=Math.cos(U);w.x=L*N,w.y=-M*n+p,w.z=L*V,d.push(w.x,w.y,w.z),v.set(N,T,V).normalize(),m.push(v.x,v.y,v.z),u.push(A,1-M),S.push(_++)}g.push(S)}for(let P=0;P<r;P++)for(let S=0;S<s;S++){const M=g[S][P],L=g[S+1][P],O=g[S+1][P+1],A=g[S][P+1];(e>0||S!==0)&&(h.push(M,L,A),R+=3),(t>0||S!==s-1)&&(h.push(L,O,A),R+=3)}l.addGroup(f,R,0),f+=R}function b(v){const w=_,R=new Ue,T=new I;let P=0;const S=v===!0?e:t,M=v===!0?1:-1;for(let O=1;O<=r;O++)d.push(0,p*M,0),m.push(0,M,0),u.push(.5,.5),_++;const L=_;for(let O=0;O<=r;O++){const U=O/r*c+a,N=Math.cos(U),V=Math.sin(U);T.x=S*V,T.y=p*M,T.z=S*N,d.push(T.x,T.y,T.z),m.push(0,M,0),R.x=N*.5+.5,R.y=V*.5*M+.5,u.push(R.x,R.y),_++}for(let O=0;O<r;O++){const A=w+O,U=L+O;v===!0?h.push(U,U+1,A):h.push(U+1,U,A),P+=3}l.addGroup(f,P,v===!0?1:2),f+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class aa extends gi{constructor(e=1,t=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new aa(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class la extends Gt{constructor(e=[new Ue(0,-.5),new Ue(.5,0),new Ue(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=$e(r,0,Math.PI*2);const s=[],o=[],a=[],c=[],l=[],h=1/t,d=new I,m=new Ue,u=new I,_=new I,g=new I;let p=0,f=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:p=e[y+1].x-e[y].x,f=e[y+1].y-e[y].y,u.x=f*1,u.y=-p,u.z=f*0,g.copy(u),u.normalize(),c.push(u.x,u.y,u.z);break;case e.length-1:c.push(g.x,g.y,g.z);break;default:p=e[y+1].x-e[y].x,f=e[y+1].y-e[y].y,u.x=f*1,u.y=-p,u.z=f*0,_.copy(u),u.x+=g.x,u.y+=g.y,u.z+=g.z,u.normalize(),c.push(u.x,u.y,u.z),g.copy(_)}for(let y=0;y<=t;y++){const b=n+y*h*r,v=Math.sin(b),w=Math.cos(b);for(let R=0;R<=e.length-1;R++){d.x=e[R].x*v,d.y=e[R].y,d.z=e[R].x*w,o.push(d.x,d.y,d.z),m.x=y/t,m.y=R/(e.length-1),a.push(m.x,m.y);const T=c[3*R+0]*v,P=c[3*R+1],S=c[3*R+0]*w;l.push(T,P,S)}}for(let y=0;y<t;y++)for(let b=0;b<e.length-1;b++){const v=b+y*e.length,w=v,R=v+e.length,T=v+e.length+1,P=v+1;s.push(w,R,P),s.push(T,P,R)}this.setIndex(s),this.setAttribute("position",new ht(o,3)),this.setAttribute("uv",new ht(a,2)),this.setAttribute("normal",new ht(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new la(e.points,e.segments,e.phiStart,e.phiLength)}}class Mr extends Gt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(r),l=a+1,h=c+1,d=e/a,m=t/c,u=[],_=[],g=[],p=[];for(let f=0;f<h;f++){const y=f*m-o;for(let b=0;b<l;b++){const v=b*d-s;_.push(v,-y,0),g.push(0,0,1),p.push(b/a),p.push(1-f/c)}}for(let f=0;f<c;f++)for(let y=0;y<a;y++){const b=y+l*f,v=y+l*(f+1),w=y+1+l*(f+1),R=y+1+l*f;u.push(b,v,R),u.push(v,w,R)}this.setIndex(u),this.setAttribute("position",new ht(_,3)),this.setAttribute("normal",new ht(g,3)),this.setAttribute("uv",new ht(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mr(e.width,e.height,e.widthSegments,e.heightSegments)}}class us extends Gt{constructor(e=.5,t=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);const a=[],c=[],l=[],h=[];let d=e;const m=(t-e)/r,u=new I,_=new Ue;for(let g=0;g<=r;g++){for(let p=0;p<=n;p++){const f=s+p/n*o;u.x=d*Math.cos(f),u.y=d*Math.sin(f),c.push(u.x,u.y,u.z),l.push(0,0,1),_.x=(u.x/t+1)/2,_.y=(u.y/t+1)/2,h.push(_.x,_.y)}d+=m}for(let g=0;g<r;g++){const p=g*(n+1);for(let f=0;f<n;f++){const y=f+p,b=y,v=y+n+1,w=y+n+2,R=y+1;a.push(b,v,R),a.push(v,w,R)}}this.setIndex(a),this.setAttribute("position",new ht(c,3)),this.setAttribute("normal",new ht(l,3)),this.setAttribute("uv",new ht(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new us(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class zt extends Gt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],d=new I,m=new I,u=[],_=[],g=[],p=[];for(let f=0;f<=n;f++){const y=[],b=f/n;let v=0;f===0&&o===0?v=.5/t:f===n&&c===Math.PI&&(v=-.5/t);for(let w=0;w<=t;w++){const R=w/t;d.x=-e*Math.cos(r+R*s)*Math.sin(o+b*a),d.y=e*Math.cos(o+b*a),d.z=e*Math.sin(r+R*s)*Math.sin(o+b*a),_.push(d.x,d.y,d.z),m.copy(d).normalize(),g.push(m.x,m.y,m.z),p.push(R+v,1-b),y.push(l++)}h.push(y)}for(let f=0;f<n;f++)for(let y=0;y<t;y++){const b=h[f][y+1],v=h[f][y],w=h[f+1][y],R=h[f+1][y+1];(f!==0||o>0)&&u.push(b,v,R),(f!==n-1||c<Math.PI)&&u.push(v,w,R)}this.setIndex(u),this.setAttribute("position",new ht(_,3)),this.setAttribute("normal",new ht(g,3)),this.setAttribute("uv",new ht(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class rs extends Gt{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const o=[],a=[],c=[],l=[],h=new I,d=new I,m=new I;for(let u=0;u<=n;u++)for(let _=0;_<=r;_++){const g=_/r*s,p=u/n*Math.PI*2;d.x=(e+t*Math.cos(p))*Math.cos(g),d.y=(e+t*Math.cos(p))*Math.sin(g),d.z=t*Math.sin(p),a.push(d.x,d.y,d.z),h.x=e*Math.cos(g),h.y=e*Math.sin(g),m.subVectors(d,h).normalize(),c.push(m.x,m.y,m.z),l.push(_/r),l.push(u/n)}for(let u=1;u<=n;u++)for(let _=1;_<=r;_++){const g=(r+1)*u+_-1,p=(r+1)*(u-1)+_-1,f=(r+1)*(u-1)+_,y=(r+1)*u+_;o.push(g,p,y),o.push(p,f,y)}this.setIndex(o),this.setAttribute("position",new ht(a,3)),this.setAttribute("normal",new ht(c,3)),this.setAttribute("uv",new ht(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rs(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class rc extends Ki{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=na,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ed extends Ki{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=na,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=$o,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class bd extends Ki{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Td extends Ki{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class sc extends Pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class wd extends sc{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Vs=new vt,tl=new I,nl=new I;class Ad{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.mapType=Tn,this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new oa,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;tl.setFromMatrixPosition(e.matrixWorld),t.position.copy(tl),nl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(nl),t.updateMatrixWorld(),Vs.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vs,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Vs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ca extends ec{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Rd extends Ad{constructor(){super(new ca(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class il extends sc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.shadow=new Rd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Cd extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function rl(i,e,t,n){const r=Pd(n);switch(t){case Gl:return i*e;case Wl:return i*e/r.components*r.byteLength;case Qo:return i*e/r.components*r.byteLength;case Xl:return i*e*2/r.components*r.byteLength;case ea:return i*e*2/r.components*r.byteLength;case Vl:return i*e*3/r.components*r.byteLength;case fn:return i*e*4/r.components*r.byteLength;case ta:return i*e*4/r.components*r.byteLength;case jr:case $r:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Kr:case Jr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case go:case vo:return Math.max(i,16)*Math.max(e,8)/4;case mo:case _o:return Math.max(i,8)*Math.max(e,8)/2;case xo:case Mo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case So:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case yo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Eo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case bo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case To:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case wo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ao:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ro:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Co:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Po:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Lo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Do:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Io:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Uo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case No:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Fo:case Oo:case ko:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Bo:case zo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ho:case Go:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Pd(i){switch(i){case Tn:case kl:return{byteLength:1,components:1};case cr:case Bl:case _r:return{byteLength:2,components:1};case Jo:case Zo:return{byteLength:2,components:4};case pi:case Ko:case Un:return{byteLength:4,components:1};case zl:case Hl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jo);function oc(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Ld(i){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,d=l.byteLength,m=i.createBuffer();i.bindBuffer(c,m),i.bufferData(c,l,h),a.onUploadCallback();let u;if(l instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)u=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)u=i.SHORT;else if(l instanceof Uint32Array)u=i.UNSIGNED_INT;else if(l instanceof Int32Array)u=i.INT;else if(l instanceof Int8Array)u=i.BYTE;else if(l instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:m,type:u,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){const h=c.array,d=c.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,h);else{d.sort((u,_)=>u.start-_.start);let m=0;for(let u=1;u<d.length;u++){const _=d[m],g=d[u];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++m,d[m]=g)}d.length=m+1;for(let u=0,_=d.length;u<_;u++){const g=d[u];i.bufferSubData(l,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var Dd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Id=`#ifdef USE_ALPHAHASH
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
#endif`,Ud=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Od=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kd=`#ifdef USE_AOMAP
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
#endif`,Bd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zd=`#ifdef USE_BATCHING
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
#endif`,Hd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Xd=`#ifdef USE_IRIDESCENCE
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
#endif`,qd=`#ifdef USE_BUMPMAP
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
#endif`,Yd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$d=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Qd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,eu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,tu=`#define PI 3.141592653589793
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
} // validated`,nu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,iu=`vec3 transformedNormal = objectNormal;
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
#endif`,ru=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,su=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ou=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,au=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lu="gl_FragColor = linearToOutputTexel( gl_FragColor );",cu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hu=`#ifdef USE_ENVMAP
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
#endif`,du=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,uu=`#ifdef USE_ENVMAP
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
#endif`,fu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pu=`#ifdef USE_ENVMAP
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
#endif`,mu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_u=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xu=`#ifdef USE_GRADIENTMAP
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
}`,Mu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Su=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Eu=`uniform bool receiveShadow;
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
#endif`,bu=`#ifdef USE_ENVMAP
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
#endif`,Tu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Au=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ru=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cu=`PhysicalMaterial material;
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
#endif`,Pu=`struct PhysicalMaterial {
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
}`,Lu=`
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
#endif`,Du=`#if defined( RE_IndirectDiffuse )
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
#endif`,Iu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Uu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Nu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ou=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ku=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Hu=`#if defined( USE_POINTS_UV )
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
#endif`,Gu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yu=`#ifdef USE_MORPHTARGETS
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
#endif`,ju=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$u=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ku=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ju=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ef=`#ifdef USE_NORMALMAP
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
#endif`,tf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,of=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,af=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,lf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,df=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ff=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_f=`float getShadowMask() {
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
}`,vf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xf=`#ifdef USE_SKINNING
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
#endif`,Mf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sf=`#ifdef USE_SKINNING
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
#endif`,yf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ef=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wf=`#ifdef USE_TRANSMISSION
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
#endif`,Af=`#ifdef USE_TRANSMISSION
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
#endif`,Rf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Df=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,If=`uniform sampler2D t2D;
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
}`,Uf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ff=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Of=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kf=`#include <common>
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
}`,Bf=`#if DEPTH_PACKING == 3200
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
}`,zf=`#define DISTANCE
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
}`,Hf=`#define DISTANCE
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
}`,Gf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wf=`uniform float scale;
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
}`,Xf=`uniform vec3 diffuse;
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
}`,qf=`#include <common>
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
}`,Yf=`uniform vec3 diffuse;
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
}`,jf=`#define LAMBERT
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
}`,$f=`#define LAMBERT
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
}`,Kf=`#define MATCAP
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
}`,Jf=`#define MATCAP
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
}`,Zf=`#define NORMAL
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
}`,Qf=`#define NORMAL
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
}`,ep=`#define PHONG
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
}`,tp=`#define PHONG
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
}`,np=`#define STANDARD
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
}`,ip=`#define STANDARD
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
}`,rp=`#define TOON
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
}`,sp=`#define TOON
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
}`,op=`uniform float size;
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
}`,ap=`uniform vec3 diffuse;
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
}`,lp=`#include <common>
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
}`,cp=`uniform vec3 color;
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
}`,hp=`uniform float rotation;
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
}`,dp=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:Dd,alphahash_pars_fragment:Id,alphamap_fragment:Ud,alphamap_pars_fragment:Nd,alphatest_fragment:Fd,alphatest_pars_fragment:Od,aomap_fragment:kd,aomap_pars_fragment:Bd,batching_pars_vertex:zd,batching_vertex:Hd,begin_vertex:Gd,beginnormal_vertex:Vd,bsdfs:Wd,iridescence_fragment:Xd,bumpmap_pars_fragment:qd,clipping_planes_fragment:Yd,clipping_planes_pars_fragment:jd,clipping_planes_pars_vertex:$d,clipping_planes_vertex:Kd,color_fragment:Jd,color_pars_fragment:Zd,color_pars_vertex:Qd,color_vertex:eu,common:tu,cube_uv_reflection_fragment:nu,defaultnormal_vertex:iu,displacementmap_pars_vertex:ru,displacementmap_vertex:su,emissivemap_fragment:ou,emissivemap_pars_fragment:au,colorspace_fragment:lu,colorspace_pars_fragment:cu,envmap_fragment:hu,envmap_common_pars_fragment:du,envmap_pars_fragment:uu,envmap_pars_vertex:fu,envmap_physical_pars_fragment:bu,envmap_vertex:pu,fog_vertex:mu,fog_pars_vertex:gu,fog_fragment:_u,fog_pars_fragment:vu,gradientmap_pars_fragment:xu,lightmap_pars_fragment:Mu,lights_lambert_fragment:Su,lights_lambert_pars_fragment:yu,lights_pars_begin:Eu,lights_toon_fragment:Tu,lights_toon_pars_fragment:wu,lights_phong_fragment:Au,lights_phong_pars_fragment:Ru,lights_physical_fragment:Cu,lights_physical_pars_fragment:Pu,lights_fragment_begin:Lu,lights_fragment_maps:Du,lights_fragment_end:Iu,logdepthbuf_fragment:Uu,logdepthbuf_pars_fragment:Nu,logdepthbuf_pars_vertex:Fu,logdepthbuf_vertex:Ou,map_fragment:ku,map_pars_fragment:Bu,map_particle_fragment:zu,map_particle_pars_fragment:Hu,metalnessmap_fragment:Gu,metalnessmap_pars_fragment:Vu,morphinstance_vertex:Wu,morphcolor_vertex:Xu,morphnormal_vertex:qu,morphtarget_pars_vertex:Yu,morphtarget_vertex:ju,normal_fragment_begin:$u,normal_fragment_maps:Ku,normal_pars_fragment:Ju,normal_pars_vertex:Zu,normal_vertex:Qu,normalmap_pars_fragment:ef,clearcoat_normal_fragment_begin:tf,clearcoat_normal_fragment_maps:nf,clearcoat_pars_fragment:rf,iridescence_pars_fragment:sf,opaque_fragment:of,packing:af,premultiplied_alpha_fragment:lf,project_vertex:cf,dithering_fragment:hf,dithering_pars_fragment:df,roughnessmap_fragment:uf,roughnessmap_pars_fragment:ff,shadowmap_pars_fragment:pf,shadowmap_pars_vertex:mf,shadowmap_vertex:gf,shadowmask_pars_fragment:_f,skinbase_vertex:vf,skinning_pars_vertex:xf,skinning_vertex:Mf,skinnormal_vertex:Sf,specularmap_fragment:yf,specularmap_pars_fragment:Ef,tonemapping_fragment:bf,tonemapping_pars_fragment:Tf,transmission_fragment:wf,transmission_pars_fragment:Af,uv_pars_fragment:Rf,uv_pars_vertex:Cf,uv_vertex:Pf,worldpos_vertex:Lf,background_vert:Df,background_frag:If,backgroundCube_vert:Uf,backgroundCube_frag:Nf,cube_vert:Ff,cube_frag:Of,depth_vert:kf,depth_frag:Bf,distanceRGBA_vert:zf,distanceRGBA_frag:Hf,equirect_vert:Gf,equirect_frag:Vf,linedashed_vert:Wf,linedashed_frag:Xf,meshbasic_vert:qf,meshbasic_frag:Yf,meshlambert_vert:jf,meshlambert_frag:$f,meshmatcap_vert:Kf,meshmatcap_frag:Jf,meshnormal_vert:Zf,meshnormal_frag:Qf,meshphong_vert:ep,meshphong_frag:tp,meshphysical_vert:np,meshphysical_frag:ip,meshtoon_vert:rp,meshtoon_frag:sp,points_vert:op,points_frag:ap,shadow_vert:lp,shadow_frag:cp,sprite_vert:hp,sprite_frag:dp},ce={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},Mn={basic:{uniforms:Ft([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Ft([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Je(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Ft([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Ft([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Ft([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Je(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Ft([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Ft([ce.points,ce.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Ft([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Ft([ce.common,ce.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Ft([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Ft([ce.sprite,ce.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:Ft([ce.common,ce.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:Ft([ce.lights,ce.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};Mn.physical={uniforms:Ft([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const Gr={r:0,b:0,g:0},ni=new _n,up=new vt;function fp(i,e,t,n,r,s,o){const a=new Je(0);let c=s===!0?0:1,l,h,d=null,m=0,u=null;function _(b){let v=b.isScene===!0?b.background:null;return v&&v.isTexture&&(v=(b.backgroundBlurriness>0?t:e).get(v)),v}function g(b){let v=!1;const w=_(b);w===null?f(a,c):w&&w.isColor&&(f(w,1),v=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(b,v){const w=_(v);w&&(w.isCubeTexture||w.mapping===ds)?(h===void 0&&(h=new Ct(new vi(1,1,1),new jn({name:"BackgroundCubeMaterial",uniforms:qi(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,T,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),ni.copy(v.backgroundRotation),ni.x*=-1,ni.y*=-1,ni.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(ni.y*=-1,ni.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(up.makeRotationFromEuler(ni)),h.material.toneMapped=Qe.getTransfer(w.colorSpace)!==nt,(d!==w||m!==w.version||u!==i.toneMapping)&&(h.material.needsUpdate=!0,d=w,m=w.version,u=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new Ct(new Mr(2,2),new jn({name:"BackgroundMaterial",uniforms:qi(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=Qe.getTransfer(w.colorSpace)!==nt,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(d!==w||m!==w.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,d=w,m=w.version,u=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function f(b,v){b.getRGB(Gr,Ql(i)),n.buffers.color.setClear(Gr.r,Gr.g,Gr.b,v,o)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,v=1){a.set(b),c=v,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,f(a,c)},render:g,addToRenderList:p,dispose:y}}function pp(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=m(null);let s=r,o=!1;function a(M,L,O,A,U){let N=!1;const V=d(A,O,L);s!==V&&(s=V,l(s.object)),N=u(M,A,O,U),N&&_(M,A,O,U),U!==null&&e.update(U,i.ELEMENT_ARRAY_BUFFER),(N||o)&&(o=!1,v(M,L,O,A),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function d(M,L,O){const A=O.wireframe===!0;let U=n[M.id];U===void 0&&(U={},n[M.id]=U);let N=U[L.id];N===void 0&&(N={},U[L.id]=N);let V=N[A];return V===void 0&&(V=m(c()),N[A]=V),V}function m(M){const L=[],O=[],A=[];for(let U=0;U<t;U++)L[U]=0,O[U]=0,A[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:O,attributeDivisors:A,object:M,attributes:{},index:null}}function u(M,L,O,A){const U=s.attributes,N=L.attributes;let V=0;const Y=O.getAttributes();for(const H in Y)if(Y[H].location>=0){const se=U[H];let q=N[H];if(q===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(q=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(q=M.instanceColor)),se===void 0||se.attribute!==q||q&&se.data!==q.data)return!0;V++}return s.attributesNum!==V||s.index!==A}function _(M,L,O,A){const U={},N=L.attributes;let V=0;const Y=O.getAttributes();for(const H in Y)if(Y[H].location>=0){let se=N[H];se===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(se=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(se=M.instanceColor));const q={};q.attribute=se,se&&se.data&&(q.data=se.data),U[H]=q,V++}s.attributes=U,s.attributesNum=V,s.index=A}function g(){const M=s.newAttributes;for(let L=0,O=M.length;L<O;L++)M[L]=0}function p(M){f(M,0)}function f(M,L){const O=s.newAttributes,A=s.enabledAttributes,U=s.attributeDivisors;O[M]=1,A[M]===0&&(i.enableVertexAttribArray(M),A[M]=1),U[M]!==L&&(i.vertexAttribDivisor(M,L),U[M]=L)}function y(){const M=s.newAttributes,L=s.enabledAttributes;for(let O=0,A=L.length;O<A;O++)L[O]!==M[O]&&(i.disableVertexAttribArray(O),L[O]=0)}function b(M,L,O,A,U,N,V){V===!0?i.vertexAttribIPointer(M,L,O,U,N):i.vertexAttribPointer(M,L,O,A,U,N)}function v(M,L,O,A){g();const U=A.attributes,N=O.getAttributes(),V=L.defaultAttributeValues;for(const Y in N){const H=N[Y];if(H.location>=0){let ee=U[Y];if(ee===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(ee=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(ee=M.instanceColor)),ee!==void 0){const se=ee.normalized,q=ee.itemSize,ve=e.get(ee);if(ve===void 0)continue;const Fe=ve.buffer,ze=ve.type,He=ve.bytesPerElement,j=ze===i.INT||ze===i.UNSIGNED_INT||ee.gpuType===Ko;if(ee.isInterleavedBufferAttribute){const Z=ee.data,de=Z.stride,me=ee.offset;if(Z.isInstancedInterleavedBuffer){for(let pe=0;pe<H.locationSize;pe++)f(H.location+pe,Z.meshPerAttribute);M.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let pe=0;pe<H.locationSize;pe++)p(H.location+pe);i.bindBuffer(i.ARRAY_BUFFER,Fe);for(let pe=0;pe<H.locationSize;pe++)b(H.location+pe,q/H.locationSize,ze,se,de*He,(me+q/H.locationSize*pe)*He,j)}else{if(ee.isInstancedBufferAttribute){for(let Z=0;Z<H.locationSize;Z++)f(H.location+Z,ee.meshPerAttribute);M.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Z=0;Z<H.locationSize;Z++)p(H.location+Z);i.bindBuffer(i.ARRAY_BUFFER,Fe);for(let Z=0;Z<H.locationSize;Z++)b(H.location+Z,q/H.locationSize,ze,se,q*He,q/H.locationSize*Z*He,j)}}else if(V!==void 0){const se=V[Y];if(se!==void 0)switch(se.length){case 2:i.vertexAttrib2fv(H.location,se);break;case 3:i.vertexAttrib3fv(H.location,se);break;case 4:i.vertexAttrib4fv(H.location,se);break;default:i.vertexAttrib1fv(H.location,se)}}}}y()}function w(){P();for(const M in n){const L=n[M];for(const O in L){const A=L[O];for(const U in A)h(A[U].object),delete A[U];delete L[O]}delete n[M]}}function R(M){if(n[M.id]===void 0)return;const L=n[M.id];for(const O in L){const A=L[O];for(const U in A)h(A[U].object),delete A[U];delete L[O]}delete n[M.id]}function T(M){for(const L in n){const O=n[L];if(O[M.id]===void 0)continue;const A=O[M.id];for(const U in A)h(A[U].object),delete A[U];delete O[M.id]}}function P(){S(),o=!0,s!==r&&(s=r,l(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:S,dispose:w,releaseStatesOfGeometry:R,releaseStatesOfProgram:T,initAttributes:g,enableAttribute:p,disableUnusedAttributes:y}}function mp(i,e,t){let n;function r(l){n=l}function s(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,d){d!==0&&(i.drawArraysInstanced(n,l,h,d),t.update(h,n,d))}function a(l,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let u=0;for(let _=0;_<d;_++)u+=h[_];t.update(u,n,1)}function c(l,h,d,m){if(d===0)return;const u=e.get("WEBGL_multi_draw");if(u===null)for(let _=0;_<l.length;_++)o(l[_],h[_],m[_]);else{u.multiDrawArraysInstancedWEBGL(n,l,0,h,0,m,0,d);let _=0;for(let g=0;g<d;g++)_+=h[g]*m[g];t.update(_,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function gp(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==fn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const P=T===_r&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Tn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Un&&!P)}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=_>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:m,maxTextures:u,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:v,vertexTextures:w,maxSamples:R}}function _p(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new si,a=new Ve,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,m){const u=d.length!==0||m||n!==0||r;return r=m,n=d.length,u},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,m){t=h(d,m,0)},this.setState=function(d,m,u){const _=d.clippingPlanes,g=d.clipIntersection,p=d.clipShadows,f=i.get(d);if(!r||_===null||_.length===0||s&&!p)s?h(null):l();else{const y=s?0:n,b=y*4;let v=f.clippingState||null;c.value=v,v=h(_,m,b,u);for(let w=0;w!==b;++w)v[w]=t[w];f.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,m,u,_){const g=d!==null?d.length:0;let p=null;if(g!==0){if(p=c.value,_!==!0||p===null){const f=u+g*4,y=m.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<f)&&(p=new Float32Array(f));for(let b=0,v=u;b!==g;++b,v+=4)o.copy(d[b]).applyMatrix4(y,a),o.normal.toArray(p,v),p[v+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function vp(i){let e=new WeakMap;function t(o,a){return a===ho?o.mapping=Vi:a===uo&&(o.mapping=Wi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ho||a===uo)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new gd(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Oi=4,sl=[.125,.215,.35,.446,.526,.582],li=20,Ws=new ca,ol=new Je;let Xs=null,qs=0,Ys=0,js=!1;const oi=(1+Math.sqrt(5))/2,Ii=1/oi,al=[new I(-oi,Ii,0),new I(oi,Ii,0),new I(-Ii,0,oi),new I(Ii,0,oi),new I(0,oi,-Ii),new I(0,oi,Ii),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],xp=new I;class ll{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){const{size:o=256,position:a=xp}=s;Xs=this._renderer.getRenderTarget(),qs=this._renderer.getActiveCubeFace(),Ys=this._renderer.getActiveMipmapLevel(),js=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xs,qs,Ys),this._renderer.xr.enabled=js,e.scissorTest=!1,Vr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Vi||e.mapping===Wi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xs=this._renderer.getRenderTarget(),qs=this._renderer.getActiveCubeFace(),Ys=this._renderer.getActiveMipmapLevel(),js=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:_r,format:fn,colorSpace:Xi,depthBuffer:!1},r=cl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cl(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Mp(s)),this._blurMaterial=Sp(s,e,t)}return r}_compileMaterial(e){const t=new Ct(this._lodPlanes[0],e);this._renderer.compile(t,Ws)}_sceneToCubeUV(e,t,n,r,s){const c=new hn(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,m=d.autoClear,u=d.toneMapping;d.getClearColor(ol),d.toneMapping=qn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null));const g=new Ji({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1}),p=new Ct(new vi,g);let f=!1;const y=e.background;y?y.isColor&&(g.color.copy(y),e.background=null,f=!0):(g.color.copy(ol),f=!0);for(let b=0;b<6;b++){const v=b%3;v===0?(c.up.set(0,l[b],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[b],s.y,s.z)):v===1?(c.up.set(0,0,l[b]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[b],s.z)):(c.up.set(0,l[b],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[b]));const w=this._cubeSize;Vr(r,v*w,b>2?w:0,w,w),d.setRenderTarget(r),f&&d.render(p,c),d.render(e,c)}p.geometry.dispose(),p.material.dispose(),d.toneMapping=u,d.autoClear=m,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Vi||e.mapping===Wi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=dl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hl());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ct(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;Vr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Ws)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=al[(r-s-1)%al.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Ct(this._lodPlanes[r],l),m=l.uniforms,u=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*u):2*Math.PI/(2*li-1),g=s/_,p=isFinite(s)?1+Math.floor(h*g):li;p>li&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${li}`);const f=[];let y=0;for(let T=0;T<li;++T){const P=T/g,S=Math.exp(-P*P/2);f.push(S),T===0?y+=S:T<p&&(y+=2*S)}for(let T=0;T<f.length;T++)f[T]=f[T]/y;m.envMap.value=e.texture,m.samples.value=p,m.weights.value=f,m.latitudinal.value=o==="latitudinal",a&&(m.poleAxis.value=a);const{_lodMax:b}=this;m.dTheta.value=_,m.mipInt.value=b-n;const v=this._sizeLods[r],w=3*v*(r>b-Oi?r-b+Oi:0),R=4*(this._cubeSize-v);Vr(t,w,R,3*v,2*v),c.setRenderTarget(t),c.render(d,Ws)}}function Mp(i){const e=[],t=[],n=[];let r=i;const s=i-Oi+1+sl.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>i-Oi?c=sl[o-i+Oi-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,d=1+l,m=[h,h,d,h,d,d,h,h,d,d,h,d],u=6,_=6,g=3,p=2,f=1,y=new Float32Array(g*_*u),b=new Float32Array(p*_*u),v=new Float32Array(f*_*u);for(let R=0;R<u;R++){const T=R%3*2/3-1,P=R>2?0:-1,S=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];y.set(S,g*_*R),b.set(m,p*_*R);const M=[R,R,R,R,R,R];v.set(M,f*_*R)}const w=new Gt;w.setAttribute("position",new rn(y,g)),w.setAttribute("uv",new rn(b,p)),w.setAttribute("faceIndex",new rn(v,f)),e.push(w),r>Oi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function cl(i,e,t){const n=new mi(i,e,t);return n.texture.mapping=ds,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Sp(i,e,t){const n=new Float32Array(li),r=new I(0,1,0);return new jn({name:"SphericalGaussianBlur",defines:{n:li,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ha(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function hl(){return new jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ha(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function dl(){return new jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ha(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function ha(){return`

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
	`}function yp(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===ho||c===uo,h=c===Vi||c===Wi;if(l||h){let d=e.get(a);const m=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==m)return t===null&&(t=new ll(i)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const u=a.image;return l&&u&&u.height>0||h&&u&&r(u)?(t===null&&(t=new ll(i)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Ep(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&pr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function bp(i,e,t,n){const r={},s=new WeakMap;function o(d){const m=d.target;m.index!==null&&e.remove(m.index);for(const _ in m.attributes)e.remove(m.attributes[_]);m.removeEventListener("dispose",o),delete r[m.id];const u=s.get(m);u&&(e.remove(u),s.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function a(d,m){return r[m.id]===!0||(m.addEventListener("dispose",o),r[m.id]=!0,t.memory.geometries++),m}function c(d){const m=d.attributes;for(const u in m)e.update(m[u],i.ARRAY_BUFFER)}function l(d){const m=[],u=d.index,_=d.attributes.position;let g=0;if(u!==null){const y=u.array;g=u.version;for(let b=0,v=y.length;b<v;b+=3){const w=y[b+0],R=y[b+1],T=y[b+2];m.push(w,R,R,T,T,w)}}else if(_!==void 0){const y=_.array;g=_.version;for(let b=0,v=y.length/3-1;b<v;b+=3){const w=b+0,R=b+1,T=b+2;m.push(w,R,R,T,T,w)}}else return;const p=new(Yl(m)?Zl:Jl)(m,1);p.version=g;const f=s.get(d);f&&e.remove(f),s.set(d,p)}function h(d){const m=s.get(d);if(m){const u=d.index;u!==null&&m.version<u.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function Tp(i,e,t){let n;function r(m){n=m}let s,o;function a(m){s=m.type,o=m.bytesPerElement}function c(m,u){i.drawElements(n,u,s,m*o),t.update(u,n,1)}function l(m,u,_){_!==0&&(i.drawElementsInstanced(n,u,s,m*o,_),t.update(u,n,_))}function h(m,u,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,m,0,_);let p=0;for(let f=0;f<_;f++)p+=u[f];t.update(p,n,1)}function d(m,u,_,g){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<m.length;f++)l(m[f]/o,u[f],g[f]);else{p.multiDrawElementsInstancedWEBGL(n,u,0,s,m,0,g,0,_);let f=0;for(let y=0;y<_;y++)f+=u[y]*g[y];t.update(f,n,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function wp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Ap(i,e,t){const n=new WeakMap,r=new gt;function s(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let m=n.get(a);if(m===void 0||m.count!==d){let M=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var u=M;m!==void 0&&m.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let v=0;_===!0&&(v=1),g===!0&&(v=2),p===!0&&(v=3);let w=a.attributes.position.count*v,R=1;w>e.maxTextureSize&&(R=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const T=new Float32Array(w*R*4*d),P=new jl(T,w,R,d);P.type=Un,P.needsUpdate=!0;const S=v*4;for(let L=0;L<d;L++){const O=f[L],A=y[L],U=b[L],N=w*R*4*L;for(let V=0;V<O.count;V++){const Y=V*S;_===!0&&(r.fromBufferAttribute(O,V),T[N+Y+0]=r.x,T[N+Y+1]=r.y,T[N+Y+2]=r.z,T[N+Y+3]=0),g===!0&&(r.fromBufferAttribute(A,V),T[N+Y+4]=r.x,T[N+Y+5]=r.y,T[N+Y+6]=r.z,T[N+Y+7]=0),p===!0&&(r.fromBufferAttribute(U,V),T[N+Y+8]=r.x,T[N+Y+9]=r.y,T[N+Y+10]=r.z,T[N+Y+11]=U.itemSize===4?r.w:1)}}m={count:d,texture:P,size:new Ue(w,R)},n.set(a,m),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let _=0;for(let p=0;p<l.length;p++)_+=l[p];const g=a.morphTargetsRelative?1:1-_;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}return{update:s}}function Rp(i,e,t,n){let r=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,d=e.get(c,h);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const m=c.skeleton;r.get(m)!==l&&(m.update(),r.set(m,l))}return d}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const ac=new Ot,ul=new nc(1,1),lc=new jl,cc=new Zh,hc=new tc,fl=[],pl=[],ml=new Float32Array(16),gl=new Float32Array(9),_l=new Float32Array(4);function Zi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=fl[r];if(s===void 0&&(s=new Float32Array(r),fl[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function bt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Tt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function fs(i,e){let t=pl[e];t===void 0&&(t=new Int32Array(e),pl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Cp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Pp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2fv(this.addr,e),Tt(t,e)}}function Lp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;i.uniform3fv(this.addr,e),Tt(t,e)}}function Dp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4fv(this.addr,e),Tt(t,e)}}function Ip(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(bt(t,n))return;_l.set(n),i.uniformMatrix2fv(this.addr,!1,_l),Tt(t,n)}}function Up(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(bt(t,n))return;gl.set(n),i.uniformMatrix3fv(this.addr,!1,gl),Tt(t,n)}}function Np(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(bt(t,n))return;ml.set(n),i.uniformMatrix4fv(this.addr,!1,ml),Tt(t,n)}}function Fp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Op(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2iv(this.addr,e),Tt(t,e)}}function kp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;i.uniform3iv(this.addr,e),Tt(t,e)}}function Bp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4iv(this.addr,e),Tt(t,e)}}function zp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Hp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2uiv(this.addr,e),Tt(t,e)}}function Gp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;i.uniform3uiv(this.addr,e),Tt(t,e)}}function Vp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4uiv(this.addr,e),Tt(t,e)}}function Wp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(ul.compareFunction=ql,s=ul):s=ac,t.setTexture2D(e||s,r)}function Xp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||cc,r)}function qp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||hc,r)}function Yp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||lc,r)}function jp(i){switch(i){case 5126:return Cp;case 35664:return Pp;case 35665:return Lp;case 35666:return Dp;case 35674:return Ip;case 35675:return Up;case 35676:return Np;case 5124:case 35670:return Fp;case 35667:case 35671:return Op;case 35668:case 35672:return kp;case 35669:case 35673:return Bp;case 5125:return zp;case 36294:return Hp;case 36295:return Gp;case 36296:return Vp;case 35678:case 36198:case 36298:case 36306:case 35682:return Wp;case 35679:case 36299:case 36307:return Xp;case 35680:case 36300:case 36308:case 36293:return qp;case 36289:case 36303:case 36311:case 36292:return Yp}}function $p(i,e){i.uniform1fv(this.addr,e)}function Kp(i,e){const t=Zi(e,this.size,2);i.uniform2fv(this.addr,t)}function Jp(i,e){const t=Zi(e,this.size,3);i.uniform3fv(this.addr,t)}function Zp(i,e){const t=Zi(e,this.size,4);i.uniform4fv(this.addr,t)}function Qp(i,e){const t=Zi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function em(i,e){const t=Zi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function tm(i,e){const t=Zi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function nm(i,e){i.uniform1iv(this.addr,e)}function im(i,e){i.uniform2iv(this.addr,e)}function rm(i,e){i.uniform3iv(this.addr,e)}function sm(i,e){i.uniform4iv(this.addr,e)}function om(i,e){i.uniform1uiv(this.addr,e)}function am(i,e){i.uniform2uiv(this.addr,e)}function lm(i,e){i.uniform3uiv(this.addr,e)}function cm(i,e){i.uniform4uiv(this.addr,e)}function hm(i,e,t){const n=this.cache,r=e.length,s=fs(t,r);bt(n,s)||(i.uniform1iv(this.addr,s),Tt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||ac,s[o])}function dm(i,e,t){const n=this.cache,r=e.length,s=fs(t,r);bt(n,s)||(i.uniform1iv(this.addr,s),Tt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||cc,s[o])}function um(i,e,t){const n=this.cache,r=e.length,s=fs(t,r);bt(n,s)||(i.uniform1iv(this.addr,s),Tt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||hc,s[o])}function fm(i,e,t){const n=this.cache,r=e.length,s=fs(t,r);bt(n,s)||(i.uniform1iv(this.addr,s),Tt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||lc,s[o])}function pm(i){switch(i){case 5126:return $p;case 35664:return Kp;case 35665:return Jp;case 35666:return Zp;case 35674:return Qp;case 35675:return em;case 35676:return tm;case 5124:case 35670:return nm;case 35667:case 35671:return im;case 35668:case 35672:return rm;case 35669:case 35673:return sm;case 5125:return om;case 36294:return am;case 36295:return lm;case 36296:return cm;case 35678:case 36198:case 36298:case 36306:case 35682:return hm;case 35679:case 36299:case 36307:return dm;case 35680:case 36300:case 36308:case 36293:return um;case 36289:case 36303:case 36311:case 36292:return fm}}class mm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=jp(t.type)}}class gm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=pm(t.type)}}class _m{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const $s=/(\w+)(\])?(\[|\.)?/g;function vl(i,e){i.seq.push(e),i.map[e.id]=e}function vm(i,e,t){const n=i.name,r=n.length;for($s.lastIndex=0;;){const s=$s.exec(n),o=$s.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){vl(t,l===void 0?new mm(a,i,e):new gm(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new _m(a),vl(t,d)),t=d}}}class Zr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);vm(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function xl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const xm=37297;let Mm=0;function Sm(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Ml=new Ve;function ym(i){Qe._getMatrix(Ml,Qe.workingColorSpace,i);const e=`mat3( ${Ml.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(i)){case ts:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Sl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+Sm(i.getShaderSource(e),a)}else return s}function Em(i,e){const t=ym(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function bm(i,e){let t;switch(e){case uh:t="Linear";break;case fh:t="Reinhard";break;case ph:t="Cineon";break;case Fl:t="ACESFilmic";break;case gh:t="AgX";break;case _h:t="Neutral";break;case mh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Wr=new I;function Tm(){Qe.getLuminanceCoefficients(Wr);const i=Wr.x.toFixed(4),e=Wr.y.toFixed(4),t=Wr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(or).join(`
`)}function Am(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Rm(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function or(i){return i!==""}function yl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function El(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Cm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vo(i){return i.replace(Cm,Lm)}const Pm=new Map;function Lm(i,e){let t=qe[e];if(t===void 0){const n=Pm.get(e);if(n!==void 0)t=qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Vo(t)}const Dm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bl(i){return i.replace(Dm,Im)}function Im(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Tl(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Um(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Nl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Xc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Dn&&(e="SHADOWMAP_TYPE_VSM"),e}function Nm(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Vi:case Wi:e="ENVMAP_TYPE_CUBE";break;case ds:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Fm(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Wi&&(e="ENVMAP_MODE_REFRACTION"),e}function Om(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case $o:e="ENVMAP_BLENDING_MULTIPLY";break;case hh:e="ENVMAP_BLENDING_MIX";break;case dh:e="ENVMAP_BLENDING_ADD";break}return e}function km(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Bm(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Um(t),l=Nm(t),h=Fm(t),d=Om(t),m=km(t),u=wm(t),_=Am(s),g=r.createProgram();let p,f,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(or).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(or).join(`
`),f.length>0&&(f+=`
`)):(p=[Tl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(or).join(`
`),f=[Tl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qn?"#define TONE_MAPPING":"",t.toneMapping!==qn?qe.tonemapping_pars_fragment:"",t.toneMapping!==qn?bm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,Em("linearToOutputTexel",t.outputColorSpace),Tm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(or).join(`
`)),o=Vo(o),o=yl(o,t),o=El(o,t),a=Vo(a),a=yl(a,t),a=El(a,t),o=bl(o),a=bl(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",t.glslVersion===Fa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const b=y+p+o,v=y+f+a,w=xl(r,r.VERTEX_SHADER,b),R=xl(r,r.FRAGMENT_SHADER,v);r.attachShader(g,w),r.attachShader(g,R),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function T(L){if(i.debug.checkShaderErrors){const O=r.getProgramInfoLog(g)||"",A=r.getShaderInfoLog(w)||"",U=r.getShaderInfoLog(R)||"",N=O.trim(),V=A.trim(),Y=U.trim();let H=!0,ee=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,w,R);else{const se=Sl(r,w,"vertex"),q=Sl(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+N+`
`+se+`
`+q)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(V===""||Y==="")&&(ee=!1);ee&&(L.diagnostics={runnable:H,programLog:N,vertexShader:{log:V,prefix:p},fragmentShader:{log:Y,prefix:f}})}r.deleteShader(w),r.deleteShader(R),P=new Zr(r,g),S=Rm(r,g)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(g,xm)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Mm++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=R,this}let zm=0;class Hm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Gm(e),t.set(e,n)),n}}class Gm{constructor(e){this.id=zm++,this.code=e,this.usedTimes=0}}function Vm(i,e,t,n,r,s,o){const a=new $l,c=new Hm,l=new Set,h=[],d=r.logarithmicDepthBuffer,m=r.vertexTextures;let u=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return l.add(S),S===0?"uv":`uv${S}`}function p(S,M,L,O,A){const U=O.fog,N=A.geometry,V=S.isMeshStandardMaterial?O.environment:null,Y=(S.isMeshStandardMaterial?t:e).get(S.envMap||V),H=Y&&Y.mapping===ds?Y.image.height:null,ee=_[S.type];S.precision!==null&&(u=r.getMaxPrecision(S.precision),u!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",u,"instead."));const se=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,q=se!==void 0?se.length:0;let ve=0;N.morphAttributes.position!==void 0&&(ve=1),N.morphAttributes.normal!==void 0&&(ve=2),N.morphAttributes.color!==void 0&&(ve=3);let Fe,ze,He,j;if(ee){const et=Mn[ee];Fe=et.vertexShader,ze=et.fragmentShader}else Fe=S.vertexShader,ze=S.fragmentShader,c.update(S),He=c.getVertexShaderID(S),j=c.getFragmentShaderID(S);const Z=i.getRenderTarget(),de=i.state.buffers.depth.getReversed(),me=A.isInstancedMesh===!0,pe=A.isBatchedMesh===!0,We=!!S.map,yt=!!S.matcap,D=!!Y,at=!!S.aoMap,ke=!!S.lightMap,De=!!S.bumpMap,Se=!!S.normalMap,lt=!!S.displacementMap,ye=!!S.emissiveMap,Xe=!!S.metalnessMap,wt=!!S.roughnessMap,_t=S.anisotropy>0,C=S.clearcoat>0,x=S.dispersion>0,G=S.iridescence>0,K=S.sheen>0,Q=S.transmission>0,$=_t&&!!S.anisotropyMap,we=C&&!!S.clearcoatMap,oe=C&&!!S.clearcoatNormalMap,Ee=C&&!!S.clearcoatRoughnessMap,be=G&&!!S.iridescenceMap,ie=G&&!!S.iridescenceThicknessMap,fe=K&&!!S.sheenColorMap,Le=K&&!!S.sheenRoughnessMap,Te=!!S.specularMap,he=!!S.specularColorMap,Ge=!!S.specularIntensityMap,F=Q&&!!S.transmissionMap,re=Q&&!!S.thicknessMap,ae=!!S.gradientMap,_e=!!S.alphaMap,te=S.alphaTest>0,J=!!S.alphaHash,Me=!!S.extensions;let Oe=qn;S.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Oe=i.toneMapping);const rt={shaderID:ee,shaderType:S.type,shaderName:S.name,vertexShader:Fe,fragmentShader:ze,defines:S.defines,customVertexShaderID:He,customFragmentShaderID:j,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:u,batching:pe,batchingColor:pe&&A._colorsTexture!==null,instancing:me,instancingColor:me&&A.instanceColor!==null,instancingMorph:me&&A.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Z===null?i.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Xi,alphaToCoverage:!!S.alphaToCoverage,map:We,matcap:yt,envMap:D,envMapMode:D&&Y.mapping,envMapCubeUVHeight:H,aoMap:at,lightMap:ke,bumpMap:De,normalMap:Se,displacementMap:m&&lt,emissiveMap:ye,normalMapObjectSpace:Se&&S.normalMapType===Sh,normalMapTangentSpace:Se&&S.normalMapType===na,metalnessMap:Xe,roughnessMap:wt,anisotropy:_t,anisotropyMap:$,clearcoat:C,clearcoatMap:we,clearcoatNormalMap:oe,clearcoatRoughnessMap:Ee,dispersion:x,iridescence:G,iridescenceMap:be,iridescenceThicknessMap:ie,sheen:K,sheenColorMap:fe,sheenRoughnessMap:Le,specularMap:Te,specularColorMap:he,specularIntensityMap:Ge,transmission:Q,transmissionMap:F,thicknessMap:re,gradientMap:ae,opaque:S.transparent===!1&&S.blending===Bi&&S.alphaToCoverage===!1,alphaMap:_e,alphaTest:te,alphaHash:J,combine:S.combine,mapUv:We&&g(S.map.channel),aoMapUv:at&&g(S.aoMap.channel),lightMapUv:ke&&g(S.lightMap.channel),bumpMapUv:De&&g(S.bumpMap.channel),normalMapUv:Se&&g(S.normalMap.channel),displacementMapUv:lt&&g(S.displacementMap.channel),emissiveMapUv:ye&&g(S.emissiveMap.channel),metalnessMapUv:Xe&&g(S.metalnessMap.channel),roughnessMapUv:wt&&g(S.roughnessMap.channel),anisotropyMapUv:$&&g(S.anisotropyMap.channel),clearcoatMapUv:we&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:oe&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:Le&&g(S.sheenRoughnessMap.channel),specularMapUv:Te&&g(S.specularMap.channel),specularColorMapUv:he&&g(S.specularColorMap.channel),specularIntensityMapUv:Ge&&g(S.specularIntensityMap.channel),transmissionMapUv:F&&g(S.transmissionMap.channel),thicknessMapUv:re&&g(S.thicknessMap.channel),alphaMapUv:_e&&g(S.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Se||_t),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:A.isPoints===!0&&!!N.attributes.uv&&(We||_e),fog:!!U,useFog:S.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:de,skinning:A.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:ve,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Oe,decodeVideoTexture:We&&S.map.isVideoTexture===!0&&Qe.getTransfer(S.map.colorSpace)===nt,decodeVideoTextureEmissive:ye&&S.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(S.emissiveMap.colorSpace)===nt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===jt,flipSided:S.side===Ht,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Me&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&S.extensions.multiDraw===!0||pe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return rt.vertexUv1s=l.has(1),rt.vertexUv2s=l.has(2),rt.vertexUv3s=l.has(3),l.clear(),rt}function f(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const L in S.defines)M.push(L),M.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(y(M,S),b(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function y(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function b(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function v(S){const M=_[S.type];let L;if(M){const O=Mn[M];L=ud.clone(O.uniforms)}else L=S.uniforms;return L}function w(S,M){let L;for(let O=0,A=h.length;O<A;O++){const U=h[O];if(U.cacheKey===M){L=U,++L.usedTimes;break}}return L===void 0&&(L=new Bm(i,M,S,s),h.push(L)),L}function R(S){if(--S.usedTimes===0){const M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function T(S){c.remove(S)}function P(){c.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:v,acquireProgram:w,releaseProgram:R,releaseShaderCache:T,programs:h,dispose:P}}function Wm(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,c){i.get(o)[a]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Xm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function wl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Al(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(d,m,u,_,g,p){let f=i[e];return f===void 0?(f={id:d.id,object:d,geometry:m,material:u,groupOrder:_,renderOrder:d.renderOrder,z:g,group:p},i[e]=f):(f.id=d.id,f.object=d,f.geometry=m,f.material=u,f.groupOrder=_,f.renderOrder=d.renderOrder,f.z=g,f.group=p),e++,f}function a(d,m,u,_,g,p){const f=o(d,m,u,_,g,p);u.transmission>0?n.push(f):u.transparent===!0?r.push(f):t.push(f)}function c(d,m,u,_,g,p){const f=o(d,m,u,_,g,p);u.transmission>0?n.unshift(f):u.transparent===!0?r.unshift(f):t.unshift(f)}function l(d,m){t.length>1&&t.sort(d||Xm),n.length>1&&n.sort(m||wl),r.length>1&&r.sort(m||wl)}function h(){for(let d=e,m=i.length;d<m;d++){const u=i[d];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:h,sort:l}}function qm(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new Al,i.set(n,[o])):r>=s.length?(o=new Al,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Ym(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Je};break;case"SpotLight":t={position:new I,direction:new I,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function jm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let $m=0;function Km(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Jm(i){const e=new Ym,t=jm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);const r=new I,s=new vt,o=new vt;function a(l){let h=0,d=0,m=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let u=0,_=0,g=0,p=0,f=0,y=0,b=0,v=0,w=0,R=0,T=0;l.sort(Km);for(let S=0,M=l.length;S<M;S++){const L=l[S],O=L.color,A=L.intensity,U=L.distance,N=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=O.r*A,d+=O.g*A,m+=O.b*A;else if(L.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(L.sh.coefficients[V],A);T++}else if(L.isDirectionalLight){const V=e.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Y=L.shadow,H=t.get(L);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,n.directionalShadow[u]=H,n.directionalShadowMap[u]=N,n.directionalShadowMatrix[u]=L.shadow.matrix,y++}n.directional[u]=V,u++}else if(L.isSpotLight){const V=e.get(L);V.position.setFromMatrixPosition(L.matrixWorld),V.color.copy(O).multiplyScalar(A),V.distance=U,V.coneCos=Math.cos(L.angle),V.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),V.decay=L.decay,n.spot[g]=V;const Y=L.shadow;if(L.map&&(n.spotLightMap[w]=L.map,w++,Y.updateMatrices(L),L.castShadow&&R++),n.spotLightMatrix[g]=Y.matrix,L.castShadow){const H=t.get(L);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,n.spotShadow[g]=H,n.spotShadowMap[g]=N,v++}g++}else if(L.isRectAreaLight){const V=e.get(L);V.color.copy(O).multiplyScalar(A),V.halfWidth.set(L.width*.5,0,0),V.halfHeight.set(0,L.height*.5,0),n.rectArea[p]=V,p++}else if(L.isPointLight){const V=e.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),V.distance=L.distance,V.decay=L.decay,L.castShadow){const Y=L.shadow,H=t.get(L);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,H.shadowCameraNear=Y.camera.near,H.shadowCameraFar=Y.camera.far,n.pointShadow[_]=H,n.pointShadowMap[_]=N,n.pointShadowMatrix[_]=L.shadow.matrix,b++}n.point[_]=V,_++}else if(L.isHemisphereLight){const V=e.get(L);V.skyColor.copy(L.color).multiplyScalar(A),V.groundColor.copy(L.groundColor).multiplyScalar(A),n.hemi[f]=V,f++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=m;const P=n.hash;(P.directionalLength!==u||P.pointLength!==_||P.spotLength!==g||P.rectAreaLength!==p||P.hemiLength!==f||P.numDirectionalShadows!==y||P.numPointShadows!==b||P.numSpotShadows!==v||P.numSpotMaps!==w||P.numLightProbes!==T)&&(n.directional.length=u,n.spot.length=g,n.rectArea.length=p,n.point.length=_,n.hemi.length=f,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=v+w-R,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=T,P.directionalLength=u,P.pointLength=_,P.spotLength=g,P.rectAreaLength=p,P.hemiLength=f,P.numDirectionalShadows=y,P.numPointShadows=b,P.numSpotShadows=v,P.numSpotMaps=w,P.numLightProbes=T,n.version=$m++)}function c(l,h){let d=0,m=0,u=0,_=0,g=0;const p=h.matrixWorldInverse;for(let f=0,y=l.length;f<y;f++){const b=l[f];if(b.isDirectionalLight){const v=n.directional[d];v.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(p),d++}else if(b.isSpotLight){const v=n.spot[u];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(p),u++}else if(b.isRectAreaLight){const v=n.rectArea[_];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(p),o.identity(),s.copy(b.matrixWorld),s.premultiply(p),o.extractRotation(s),v.halfWidth.set(b.width*.5,0,0),v.halfHeight.set(0,b.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),_++}else if(b.isPointLight){const v=n.point[m];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(p),m++}else if(b.isHemisphereLight){const v=n.hemi[g];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(p),g++}}}return{setup:a,setupView:c,state:n}}function Rl(i){const e=new Jm(i),t=[],n=[];function r(h){l.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function Zm(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Rl(i),e.set(r,[a])):s>=o.length?(a=new Rl(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const Qm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,e0=`uniform sampler2D shadow_pass;
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
}`;function t0(i,e,t){let n=new oa;const r=new Ue,s=new Ue,o=new gt,a=new bd({depthPacking:Mh}),c=new Td,l={},h=t.maxTextureSize,d={[Yn]:Ht,[Ht]:Yn,[jt]:jt},m=new jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:Qm,fragmentShader:e0}),u=m.clone();u.defines.HORIZONTAL_PASS=1;const _=new Gt;_.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Ct(_,m),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nl;let f=this.type;this.render=function(R,T,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const S=i.getRenderTarget(),M=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Xn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const A=f!==Dn&&this.type===Dn,U=f===Dn&&this.type!==Dn;for(let N=0,V=R.length;N<V;N++){const Y=R[N],H=Y.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const ee=H.getFrameExtents();if(r.multiply(ee),s.copy(H.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/ee.x),r.x=s.x*ee.x,H.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/ee.y),r.y=s.y*ee.y,H.mapSize.y=s.y)),H.map===null||A===!0||U===!0){const q=this.type!==Dn?{minFilter:pn,magFilter:pn}:{};H.map!==null&&H.map.dispose(),H.map=new mi(r.x,r.y,q),H.map.texture.name=Y.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const se=H.getViewportCount();for(let q=0;q<se;q++){const ve=H.getViewport(q);o.set(s.x*ve.x,s.y*ve.y,s.x*ve.z,s.y*ve.w),O.viewport(o),H.updateMatrices(Y,q),n=H.getFrustum(),v(T,P,H.camera,Y,this.type)}H.isPointLightShadow!==!0&&this.type===Dn&&y(H,P),H.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(S,M,L)};function y(R,T){const P=e.update(g);m.defines.VSM_SAMPLES!==R.blurSamples&&(m.defines.VSM_SAMPLES=R.blurSamples,u.defines.VSM_SAMPLES=R.blurSamples,m.needsUpdate=!0,u.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new mi(r.x,r.y)),m.uniforms.shadow_pass.value=R.map.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(T,null,P,m,g,null),u.uniforms.shadow_pass.value=R.mapPass.texture,u.uniforms.resolution.value=R.mapSize,u.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(T,null,P,u,g,null)}function b(R,T,P,S){let M=null;const L=P.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(L!==void 0)M=L;else if(M=P.isPointLight===!0?c:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const O=M.uuid,A=T.uuid;let U=l[O];U===void 0&&(U={},l[O]=U);let N=U[A];N===void 0&&(N=M.clone(),U[A]=N,T.addEventListener("dispose",w)),M=N}if(M.visible=T.visible,M.wireframe=T.wireframe,S===Dn?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:d[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const O=i.properties.get(M);O.light=P}return M}function v(R,T,P,S,M){if(R.visible===!1)return;if(R.layers.test(T.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===Dn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,R.matrixWorld);const A=e.update(R),U=R.material;if(Array.isArray(U)){const N=A.groups;for(let V=0,Y=N.length;V<Y;V++){const H=N[V],ee=U[H.materialIndex];if(ee&&ee.visible){const se=b(R,ee,S,M);R.onBeforeShadow(i,R,T,P,A,se,H),i.renderBufferDirect(P,null,A,se,R,H),R.onAfterShadow(i,R,T,P,A,se,H)}}}else if(U.visible){const N=b(R,U,S,M);R.onBeforeShadow(i,R,T,P,A,N,null),i.renderBufferDirect(P,null,A,N,R,null),R.onAfterShadow(i,R,T,P,A,N,null)}}const O=R.children;for(let A=0,U=O.length;A<U;A++)v(O[A],T,P,S,M)}function w(R){R.target.removeEventListener("dispose",w);for(const P in l){const S=l[P],M=R.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const n0={[io]:ro,[so]:lo,[oo]:co,[Gi]:ao,[ro]:io,[lo]:so,[co]:oo,[ao]:Gi};function i0(i,e){function t(){let F=!1;const re=new gt;let ae=null;const _e=new gt(0,0,0,0);return{setMask:function(te){ae!==te&&!F&&(i.colorMask(te,te,te,te),ae=te)},setLocked:function(te){F=te},setClear:function(te,J,Me,Oe,rt){rt===!0&&(te*=Oe,J*=Oe,Me*=Oe),re.set(te,J,Me,Oe),_e.equals(re)===!1&&(i.clearColor(te,J,Me,Oe),_e.copy(re))},reset:function(){F=!1,ae=null,_e.set(-1,0,0,0)}}}function n(){let F=!1,re=!1,ae=null,_e=null,te=null;return{setReversed:function(J){if(re!==J){const Me=e.get("EXT_clip_control");J?Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.ZERO_TO_ONE_EXT):Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.NEGATIVE_ONE_TO_ONE_EXT),re=J;const Oe=te;te=null,this.setClear(Oe)}},getReversed:function(){return re},setTest:function(J){J?Z(i.DEPTH_TEST):de(i.DEPTH_TEST)},setMask:function(J){ae!==J&&!F&&(i.depthMask(J),ae=J)},setFunc:function(J){if(re&&(J=n0[J]),_e!==J){switch(J){case io:i.depthFunc(i.NEVER);break;case ro:i.depthFunc(i.ALWAYS);break;case so:i.depthFunc(i.LESS);break;case Gi:i.depthFunc(i.LEQUAL);break;case oo:i.depthFunc(i.EQUAL);break;case ao:i.depthFunc(i.GEQUAL);break;case lo:i.depthFunc(i.GREATER);break;case co:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_e=J}},setLocked:function(J){F=J},setClear:function(J){te!==J&&(re&&(J=1-J),i.clearDepth(J),te=J)},reset:function(){F=!1,ae=null,_e=null,te=null,re=!1}}}function r(){let F=!1,re=null,ae=null,_e=null,te=null,J=null,Me=null,Oe=null,rt=null;return{setTest:function(et){F||(et?Z(i.STENCIL_TEST):de(i.STENCIL_TEST))},setMask:function(et){re!==et&&!F&&(i.stencilMask(et),re=et)},setFunc:function(et,wn,vn){(ae!==et||_e!==wn||te!==vn)&&(i.stencilFunc(et,wn,vn),ae=et,_e=wn,te=vn)},setOp:function(et,wn,vn){(J!==et||Me!==wn||Oe!==vn)&&(i.stencilOp(et,wn,vn),J=et,Me=wn,Oe=vn)},setLocked:function(et){F=et},setClear:function(et){rt!==et&&(i.clearStencil(et),rt=et)},reset:function(){F=!1,re=null,ae=null,_e=null,te=null,J=null,Me=null,Oe=null,rt=null}}}const s=new t,o=new n,a=new r,c=new WeakMap,l=new WeakMap;let h={},d={},m=new WeakMap,u=[],_=null,g=!1,p=null,f=null,y=null,b=null,v=null,w=null,R=null,T=new Je(0,0,0),P=0,S=!1,M=null,L=null,O=null,A=null,U=null;const N=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,Y=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(H)[1]),V=Y>=1):H.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),V=Y>=2);let ee=null,se={};const q=i.getParameter(i.SCISSOR_BOX),ve=i.getParameter(i.VIEWPORT),Fe=new gt().fromArray(q),ze=new gt().fromArray(ve);function He(F,re,ae,_e){const te=new Uint8Array(4),J=i.createTexture();i.bindTexture(F,J),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Me=0;Me<ae;Me++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(re,0,i.RGBA,1,1,_e,0,i.RGBA,i.UNSIGNED_BYTE,te):i.texImage2D(re+Me,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,te);return J}const j={};j[i.TEXTURE_2D]=He(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=He(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=He(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=He(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Z(i.DEPTH_TEST),o.setFunc(Gi),De(!1),Se(Pa),Z(i.CULL_FACE),at(Xn);function Z(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function de(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function me(F,re){return d[F]!==re?(i.bindFramebuffer(F,re),d[F]=re,F===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=re),F===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=re),!0):!1}function pe(F,re){let ae=u,_e=!1;if(F){ae=m.get(re),ae===void 0&&(ae=[],m.set(re,ae));const te=F.textures;if(ae.length!==te.length||ae[0]!==i.COLOR_ATTACHMENT0){for(let J=0,Me=te.length;J<Me;J++)ae[J]=i.COLOR_ATTACHMENT0+J;ae.length=te.length,_e=!0}}else ae[0]!==i.BACK&&(ae[0]=i.BACK,_e=!0);_e&&i.drawBuffers(ae)}function We(F){return _!==F?(i.useProgram(F),_=F,!0):!1}const yt={[ai]:i.FUNC_ADD,[Yc]:i.FUNC_SUBTRACT,[jc]:i.FUNC_REVERSE_SUBTRACT};yt[$c]=i.MIN,yt[Kc]=i.MAX;const D={[Jc]:i.ZERO,[Zc]:i.ONE,[Qc]:i.SRC_COLOR,[to]:i.SRC_ALPHA,[sh]:i.SRC_ALPHA_SATURATE,[ih]:i.DST_COLOR,[th]:i.DST_ALPHA,[eh]:i.ONE_MINUS_SRC_COLOR,[no]:i.ONE_MINUS_SRC_ALPHA,[rh]:i.ONE_MINUS_DST_COLOR,[nh]:i.ONE_MINUS_DST_ALPHA,[oh]:i.CONSTANT_COLOR,[ah]:i.ONE_MINUS_CONSTANT_COLOR,[lh]:i.CONSTANT_ALPHA,[ch]:i.ONE_MINUS_CONSTANT_ALPHA};function at(F,re,ae,_e,te,J,Me,Oe,rt,et){if(F===Xn){g===!0&&(de(i.BLEND),g=!1);return}if(g===!1&&(Z(i.BLEND),g=!0),F!==qc){if(F!==p||et!==S){if((f!==ai||v!==ai)&&(i.blendEquation(i.FUNC_ADD),f=ai,v=ai),et)switch(F){case Bi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case La:i.blendFunc(i.ONE,i.ONE);break;case Da:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ia:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Bi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case La:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Da:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ia:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}y=null,b=null,w=null,R=null,T.set(0,0,0),P=0,p=F,S=et}return}te=te||re,J=J||ae,Me=Me||_e,(re!==f||te!==v)&&(i.blendEquationSeparate(yt[re],yt[te]),f=re,v=te),(ae!==y||_e!==b||J!==w||Me!==R)&&(i.blendFuncSeparate(D[ae],D[_e],D[J],D[Me]),y=ae,b=_e,w=J,R=Me),(Oe.equals(T)===!1||rt!==P)&&(i.blendColor(Oe.r,Oe.g,Oe.b,rt),T.copy(Oe),P=rt),p=F,S=!1}function ke(F,re){F.side===jt?de(i.CULL_FACE):Z(i.CULL_FACE);let ae=F.side===Ht;re&&(ae=!ae),De(ae),F.blending===Bi&&F.transparent===!1?at(Xn):at(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);const _e=F.stencilWrite;a.setTest(_e),_e&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ye(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Z(i.SAMPLE_ALPHA_TO_COVERAGE):de(i.SAMPLE_ALPHA_TO_COVERAGE)}function De(F){M!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),M=F)}function Se(F){F!==Gc?(Z(i.CULL_FACE),F!==L&&(F===Pa?i.cullFace(i.BACK):F===Vc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):de(i.CULL_FACE),L=F}function lt(F){F!==O&&(V&&i.lineWidth(F),O=F)}function ye(F,re,ae){F?(Z(i.POLYGON_OFFSET_FILL),(A!==re||U!==ae)&&(i.polygonOffset(re,ae),A=re,U=ae)):de(i.POLYGON_OFFSET_FILL)}function Xe(F){F?Z(i.SCISSOR_TEST):de(i.SCISSOR_TEST)}function wt(F){F===void 0&&(F=i.TEXTURE0+N-1),ee!==F&&(i.activeTexture(F),ee=F)}function _t(F,re,ae){ae===void 0&&(ee===null?ae=i.TEXTURE0+N-1:ae=ee);let _e=se[ae];_e===void 0&&(_e={type:void 0,texture:void 0},se[ae]=_e),(_e.type!==F||_e.texture!==re)&&(ee!==ae&&(i.activeTexture(ae),ee=ae),i.bindTexture(F,re||j[F]),_e.type=F,_e.texture=re)}function C(){const F=se[ee];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function x(){try{i.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function G(){try{i.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function K(){try{i.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Q(){try{i.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function $(){try{i.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function we(){try{i.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function oe(){try{i.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ee(){try{i.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function be(){try{i.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ie(){try{i.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function fe(F){Fe.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),Fe.copy(F))}function Le(F){ze.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),ze.copy(F))}function Te(F,re){let ae=l.get(re);ae===void 0&&(ae=new WeakMap,l.set(re,ae));let _e=ae.get(F);_e===void 0&&(_e=i.getUniformBlockIndex(re,F.name),ae.set(F,_e))}function he(F,re){const _e=l.get(re).get(F);c.get(re)!==_e&&(i.uniformBlockBinding(re,_e,F.__bindingPointIndex),c.set(re,_e))}function Ge(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ee=null,se={},d={},m=new WeakMap,u=[],_=null,g=!1,p=null,f=null,y=null,b=null,v=null,w=null,R=null,T=new Je(0,0,0),P=0,S=!1,M=null,L=null,O=null,A=null,U=null,Fe.set(0,0,i.canvas.width,i.canvas.height),ze.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:Z,disable:de,bindFramebuffer:me,drawBuffers:pe,useProgram:We,setBlending:at,setMaterial:ke,setFlipSided:De,setCullFace:Se,setLineWidth:lt,setPolygonOffset:ye,setScissorTest:Xe,activeTexture:wt,bindTexture:_t,unbindTexture:C,compressedTexImage2D:x,compressedTexImage3D:G,texImage2D:be,texImage3D:ie,updateUBOMapping:Te,uniformBlockBinding:he,texStorage2D:oe,texStorage3D:Ee,texSubImage2D:K,texSubImage3D:Q,compressedTexSubImage2D:$,compressedTexSubImage3D:we,scissor:fe,viewport:Le,reset:Ge}}function r0(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ue,h=new WeakMap;let d;const m=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,x){return u?new OffscreenCanvas(C,x):is("canvas")}function g(C,x,G){let K=1;const Q=_t(C);if((Q.width>G||Q.height>G)&&(K=G/Math.max(Q.width,Q.height)),K<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const $=Math.floor(K*Q.width),we=Math.floor(K*Q.height);d===void 0&&(d=_($,we));const oe=x?_($,we):d;return oe.width=$,oe.height=we,oe.getContext("2d").drawImage(C,0,0,$,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+$+"x"+we+")."),oe}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),C;return C}function p(C){return C.generateMipmaps}function f(C){i.generateMipmap(C)}function y(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(C,x,G,K,Q=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let $=x;if(x===i.RED&&(G===i.FLOAT&&($=i.R32F),G===i.HALF_FLOAT&&($=i.R16F),G===i.UNSIGNED_BYTE&&($=i.R8)),x===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&($=i.R8UI),G===i.UNSIGNED_SHORT&&($=i.R16UI),G===i.UNSIGNED_INT&&($=i.R32UI),G===i.BYTE&&($=i.R8I),G===i.SHORT&&($=i.R16I),G===i.INT&&($=i.R32I)),x===i.RG&&(G===i.FLOAT&&($=i.RG32F),G===i.HALF_FLOAT&&($=i.RG16F),G===i.UNSIGNED_BYTE&&($=i.RG8)),x===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&($=i.RG8UI),G===i.UNSIGNED_SHORT&&($=i.RG16UI),G===i.UNSIGNED_INT&&($=i.RG32UI),G===i.BYTE&&($=i.RG8I),G===i.SHORT&&($=i.RG16I),G===i.INT&&($=i.RG32I)),x===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&($=i.RGB8UI),G===i.UNSIGNED_SHORT&&($=i.RGB16UI),G===i.UNSIGNED_INT&&($=i.RGB32UI),G===i.BYTE&&($=i.RGB8I),G===i.SHORT&&($=i.RGB16I),G===i.INT&&($=i.RGB32I)),x===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&($=i.RGBA8UI),G===i.UNSIGNED_SHORT&&($=i.RGBA16UI),G===i.UNSIGNED_INT&&($=i.RGBA32UI),G===i.BYTE&&($=i.RGBA8I),G===i.SHORT&&($=i.RGBA16I),G===i.INT&&($=i.RGBA32I)),x===i.RGB&&(G===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),x===i.RGBA){const we=Q?ts:Qe.getTransfer(K);G===i.FLOAT&&($=i.RGBA32F),G===i.HALF_FLOAT&&($=i.RGBA16F),G===i.UNSIGNED_BYTE&&($=we===nt?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function v(C,x){let G;return C?x===null||x===pi||x===hr?G=i.DEPTH24_STENCIL8:x===Un?G=i.DEPTH32F_STENCIL8:x===cr&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===pi||x===hr?G=i.DEPTH_COMPONENT24:x===Un?G=i.DEPTH_COMPONENT32F:x===cr&&(G=i.DEPTH_COMPONENT16),G}function w(C,x){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==pn&&C.minFilter!==Sn?Math.log2(Math.max(x.width,x.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?x.mipmaps.length:1}function R(C){const x=C.target;x.removeEventListener("dispose",R),P(x),x.isVideoTexture&&h.delete(x)}function T(C){const x=C.target;x.removeEventListener("dispose",T),M(x)}function P(C){const x=n.get(C);if(x.__webglInit===void 0)return;const G=C.source,K=m.get(G);if(K){const Q=K[x.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&S(C),Object.keys(K).length===0&&m.delete(G)}n.remove(C)}function S(C){const x=n.get(C);i.deleteTexture(x.__webglTexture);const G=C.source,K=m.get(G);delete K[x.__cacheKey],o.memory.textures--}function M(C){const x=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(x.__webglFramebuffer[K]))for(let Q=0;Q<x.__webglFramebuffer[K].length;Q++)i.deleteFramebuffer(x.__webglFramebuffer[K][Q]);else i.deleteFramebuffer(x.__webglFramebuffer[K]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[K])}else{if(Array.isArray(x.__webglFramebuffer))for(let K=0;K<x.__webglFramebuffer.length;K++)i.deleteFramebuffer(x.__webglFramebuffer[K]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let K=0;K<x.__webglColorRenderbuffer.length;K++)x.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[K]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const G=C.textures;for(let K=0,Q=G.length;K<Q;K++){const $=n.get(G[K]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(G[K])}n.remove(C)}let L=0;function O(){L=0}function A(){const C=L;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),L+=1,C}function U(C){const x=[];return x.push(C.wrapS),x.push(C.wrapT),x.push(C.wrapR||0),x.push(C.magFilter),x.push(C.minFilter),x.push(C.anisotropy),x.push(C.internalFormat),x.push(C.format),x.push(C.type),x.push(C.generateMipmaps),x.push(C.premultiplyAlpha),x.push(C.flipY),x.push(C.unpackAlignment),x.push(C.colorSpace),x.join()}function N(C,x){const G=n.get(C);if(C.isVideoTexture&&Xe(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&G.__version!==C.version){const K=C.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(G,C,x);return}}else C.isExternalTexture&&(G.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+x)}function V(C,x){const G=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){j(G,C,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+x)}function Y(C,x){const G=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){j(G,C,x);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+x)}function H(C,x){const G=n.get(C);if(C.version>0&&G.__version!==C.version){Z(G,C,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+x)}const ee={[fo]:i.REPEAT,[di]:i.CLAMP_TO_EDGE,[po]:i.MIRRORED_REPEAT},se={[pn]:i.NEAREST,[vh]:i.NEAREST_MIPMAP_NEAREST,[br]:i.NEAREST_MIPMAP_LINEAR,[Sn]:i.LINEAR,[Ms]:i.LINEAR_MIPMAP_NEAREST,[ui]:i.LINEAR_MIPMAP_LINEAR},q={[yh]:i.NEVER,[Rh]:i.ALWAYS,[Eh]:i.LESS,[ql]:i.LEQUAL,[bh]:i.EQUAL,[Ah]:i.GEQUAL,[Th]:i.GREATER,[wh]:i.NOTEQUAL};function ve(C,x){if(x.type===Un&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Sn||x.magFilter===Ms||x.magFilter===br||x.magFilter===ui||x.minFilter===Sn||x.minFilter===Ms||x.minFilter===br||x.minFilter===ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,ee[x.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,ee[x.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,ee[x.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,se[x.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,se[x.minFilter]),x.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,q[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===pn||x.minFilter!==br&&x.minFilter!==ui||x.type===Un&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Fe(C,x){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,x.addEventListener("dispose",R));const K=x.source;let Q=m.get(K);Q===void 0&&(Q={},m.set(K,Q));const $=U(x);if($!==C.__cacheKey){Q[$]===void 0&&(Q[$]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),Q[$].usedTimes++;const we=Q[C.__cacheKey];we!==void 0&&(Q[C.__cacheKey].usedTimes--,we.usedTimes===0&&S(x)),C.__cacheKey=$,C.__webglTexture=Q[$].texture}return G}function ze(C,x,G){return Math.floor(Math.floor(C/G)/x)}function He(C,x,G,K){const $=C.updateRanges;if($.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,G,K,x.data);else{$.sort((ie,fe)=>ie.start-fe.start);let we=0;for(let ie=1;ie<$.length;ie++){const fe=$[we],Le=$[ie],Te=fe.start+fe.count,he=ze(Le.start,x.width,4),Ge=ze(fe.start,x.width,4);Le.start<=Te+1&&he===Ge&&ze(Le.start+Le.count-1,x.width,4)===he?fe.count=Math.max(fe.count,Le.start+Le.count-fe.start):(++we,$[we]=Le)}$.length=we+1;const oe=i.getParameter(i.UNPACK_ROW_LENGTH),Ee=i.getParameter(i.UNPACK_SKIP_PIXELS),be=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let ie=0,fe=$.length;ie<fe;ie++){const Le=$[ie],Te=Math.floor(Le.start/4),he=Math.ceil(Le.count/4),Ge=Te%x.width,F=Math.floor(Te/x.width),re=he,ae=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ge),i.pixelStorei(i.UNPACK_SKIP_ROWS,F),t.texSubImage2D(i.TEXTURE_2D,0,Ge,F,re,ae,G,K,x.data)}C.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,oe),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ee),i.pixelStorei(i.UNPACK_SKIP_ROWS,be)}}function j(C,x,G){let K=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(K=i.TEXTURE_3D);const Q=Fe(C,x),$=x.source;t.bindTexture(K,C.__webglTexture,i.TEXTURE0+G);const we=n.get($);if($.version!==we.__version||Q===!0){t.activeTexture(i.TEXTURE0+G);const oe=Qe.getPrimaries(Qe.workingColorSpace),Ee=x.colorSpace===Vn?null:Qe.getPrimaries(x.colorSpace),be=x.colorSpace===Vn||oe===Ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let ie=g(x.image,!1,r.maxTextureSize);ie=wt(x,ie);const fe=s.convert(x.format,x.colorSpace),Le=s.convert(x.type);let Te=b(x.internalFormat,fe,Le,x.colorSpace,x.isVideoTexture);ve(K,x);let he;const Ge=x.mipmaps,F=x.isVideoTexture!==!0,re=we.__version===void 0||Q===!0,ae=$.dataReady,_e=w(x,ie);if(x.isDepthTexture)Te=v(x.format===ur,x.type),re&&(F?t.texStorage2D(i.TEXTURE_2D,1,Te,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,Te,ie.width,ie.height,0,fe,Le,null));else if(x.isDataTexture)if(Ge.length>0){F&&re&&t.texStorage2D(i.TEXTURE_2D,_e,Te,Ge[0].width,Ge[0].height);for(let te=0,J=Ge.length;te<J;te++)he=Ge[te],F?ae&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,he.width,he.height,fe,Le,he.data):t.texImage2D(i.TEXTURE_2D,te,Te,he.width,he.height,0,fe,Le,he.data);x.generateMipmaps=!1}else F?(re&&t.texStorage2D(i.TEXTURE_2D,_e,Te,ie.width,ie.height),ae&&He(x,ie,fe,Le)):t.texImage2D(i.TEXTURE_2D,0,Te,ie.width,ie.height,0,fe,Le,ie.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){F&&re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,Te,Ge[0].width,Ge[0].height,ie.depth);for(let te=0,J=Ge.length;te<J;te++)if(he=Ge[te],x.format!==fn)if(fe!==null)if(F){if(ae)if(x.layerUpdates.size>0){const Me=rl(he.width,he.height,x.format,x.type);for(const Oe of x.layerUpdates){const rt=he.data.subarray(Oe*Me/he.data.BYTES_PER_ELEMENT,(Oe+1)*Me/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,Oe,he.width,he.height,1,fe,rt)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,he.width,he.height,ie.depth,fe,he.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,te,Te,he.width,he.height,ie.depth,0,he.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?ae&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,he.width,he.height,ie.depth,fe,Le,he.data):t.texImage3D(i.TEXTURE_2D_ARRAY,te,Te,he.width,he.height,ie.depth,0,fe,Le,he.data)}else{F&&re&&t.texStorage2D(i.TEXTURE_2D,_e,Te,Ge[0].width,Ge[0].height);for(let te=0,J=Ge.length;te<J;te++)he=Ge[te],x.format!==fn?fe!==null?F?ae&&t.compressedTexSubImage2D(i.TEXTURE_2D,te,0,0,he.width,he.height,fe,he.data):t.compressedTexImage2D(i.TEXTURE_2D,te,Te,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?ae&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,he.width,he.height,fe,Le,he.data):t.texImage2D(i.TEXTURE_2D,te,Te,he.width,he.height,0,fe,Le,he.data)}else if(x.isDataArrayTexture)if(F){if(re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,Te,ie.width,ie.height,ie.depth),ae)if(x.layerUpdates.size>0){const te=rl(ie.width,ie.height,x.format,x.type);for(const J of x.layerUpdates){const Me=ie.data.subarray(J*te/ie.data.BYTES_PER_ELEMENT,(J+1)*te/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,ie.width,ie.height,1,fe,Le,Me)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,fe,Le,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Te,ie.width,ie.height,ie.depth,0,fe,Le,ie.data);else if(x.isData3DTexture)F?(re&&t.texStorage3D(i.TEXTURE_3D,_e,Te,ie.width,ie.height,ie.depth),ae&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,fe,Le,ie.data)):t.texImage3D(i.TEXTURE_3D,0,Te,ie.width,ie.height,ie.depth,0,fe,Le,ie.data);else if(x.isFramebufferTexture){if(re)if(F)t.texStorage2D(i.TEXTURE_2D,_e,Te,ie.width,ie.height);else{let te=ie.width,J=ie.height;for(let Me=0;Me<_e;Me++)t.texImage2D(i.TEXTURE_2D,Me,Te,te,J,0,fe,Le,null),te>>=1,J>>=1}}else if(Ge.length>0){if(F&&re){const te=_t(Ge[0]);t.texStorage2D(i.TEXTURE_2D,_e,Te,te.width,te.height)}for(let te=0,J=Ge.length;te<J;te++)he=Ge[te],F?ae&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,fe,Le,he):t.texImage2D(i.TEXTURE_2D,te,Te,fe,Le,he);x.generateMipmaps=!1}else if(F){if(re){const te=_t(ie);t.texStorage2D(i.TEXTURE_2D,_e,Te,te.width,te.height)}ae&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe,Le,ie)}else t.texImage2D(i.TEXTURE_2D,0,Te,fe,Le,ie);p(x)&&f(K),we.__version=$.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function Z(C,x,G){if(x.image.length!==6)return;const K=Fe(C,x),Q=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+G);const $=n.get(Q);if(Q.version!==$.__version||K===!0){t.activeTexture(i.TEXTURE0+G);const we=Qe.getPrimaries(Qe.workingColorSpace),oe=x.colorSpace===Vn?null:Qe.getPrimaries(x.colorSpace),Ee=x.colorSpace===Vn||we===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const be=x.isCompressedTexture||x.image[0].isCompressedTexture,ie=x.image[0]&&x.image[0].isDataTexture,fe=[];for(let J=0;J<6;J++)!be&&!ie?fe[J]=g(x.image[J],!0,r.maxCubemapSize):fe[J]=ie?x.image[J].image:x.image[J],fe[J]=wt(x,fe[J]);const Le=fe[0],Te=s.convert(x.format,x.colorSpace),he=s.convert(x.type),Ge=b(x.internalFormat,Te,he,x.colorSpace),F=x.isVideoTexture!==!0,re=$.__version===void 0||K===!0,ae=Q.dataReady;let _e=w(x,Le);ve(i.TEXTURE_CUBE_MAP,x);let te;if(be){F&&re&&t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,Ge,Le.width,Le.height);for(let J=0;J<6;J++){te=fe[J].mipmaps;for(let Me=0;Me<te.length;Me++){const Oe=te[Me];x.format!==fn?Te!==null?F?ae&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Me,0,0,Oe.width,Oe.height,Te,Oe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Me,Ge,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Me,0,0,Oe.width,Oe.height,Te,he,Oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Me,Ge,Oe.width,Oe.height,0,Te,he,Oe.data)}}}else{if(te=x.mipmaps,F&&re){te.length>0&&_e++;const J=_t(fe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,Ge,J.width,J.height)}for(let J=0;J<6;J++)if(ie){F?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,fe[J].width,fe[J].height,Te,he,fe[J].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ge,fe[J].width,fe[J].height,0,Te,he,fe[J].data);for(let Me=0;Me<te.length;Me++){const rt=te[Me].image[J].image;F?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Me+1,0,0,rt.width,rt.height,Te,he,rt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Me+1,Ge,rt.width,rt.height,0,Te,he,rt.data)}}else{F?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Te,he,fe[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ge,Te,he,fe[J]);for(let Me=0;Me<te.length;Me++){const Oe=te[Me];F?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Me+1,0,0,Te,he,Oe.image[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Me+1,Ge,Te,he,Oe.image[J])}}}p(x)&&f(i.TEXTURE_CUBE_MAP),$.__version=Q.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function de(C,x,G,K,Q,$){const we=s.convert(G.format,G.colorSpace),oe=s.convert(G.type),Ee=b(G.internalFormat,we,oe,G.colorSpace),be=n.get(x),ie=n.get(G);if(ie.__renderTarget=x,!be.__hasExternalTextures){const fe=Math.max(1,x.width>>$),Le=Math.max(1,x.height>>$);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,$,Ee,fe,Le,x.depth,0,we,oe,null):t.texImage2D(Q,$,Ee,fe,Le,0,we,oe,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),ye(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,Q,ie.__webglTexture,0,lt(x)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,Q,ie.__webglTexture,$),t.bindFramebuffer(i.FRAMEBUFFER,null)}function me(C,x,G){if(i.bindRenderbuffer(i.RENDERBUFFER,C),x.depthBuffer){const K=x.depthTexture,Q=K&&K.isDepthTexture?K.type:null,$=v(x.stencilBuffer,Q),we=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=lt(x);ye(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,$,x.width,x.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,$,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,$,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,we,i.RENDERBUFFER,C)}else{const K=x.textures;for(let Q=0;Q<K.length;Q++){const $=K[Q],we=s.convert($.format,$.colorSpace),oe=s.convert($.type),Ee=b($.internalFormat,we,oe,$.colorSpace),be=lt(x);G&&ye(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,be,Ee,x.width,x.height):ye(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,be,Ee,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Ee,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function pe(C,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(x.depthTexture);K.__renderTarget=x,(!K.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),N(x.depthTexture,0);const Q=K.__webglTexture,$=lt(x);if(x.depthTexture.format===dr)ye(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(x.depthTexture.format===ur)ye(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function We(C){const x=n.get(C),G=C.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==C.depthTexture){const K=C.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),K){const Q=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,K.removeEventListener("dispose",Q)};K.addEventListener("dispose",Q),x.__depthDisposeCallback=Q}x.__boundDepthTexture=K}if(C.depthTexture&&!x.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");const K=C.texture.mipmaps;K&&K.length>0?pe(x.__webglFramebuffer[0],C):pe(x.__webglFramebuffer,C)}else if(G){x.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[K]),x.__webglDepthbuffer[K]===void 0)x.__webglDepthbuffer[K]=i.createRenderbuffer(),me(x.__webglDepthbuffer[K],C,!1);else{const Q=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=x.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,$)}}else{const K=C.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),me(x.__webglDepthbuffer,C,!1);else{const Q=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,$)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function yt(C,x,G){const K=n.get(C);x!==void 0&&de(K.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&We(C)}function D(C){const x=C.texture,G=n.get(C),K=n.get(x);C.addEventListener("dispose",T);const Q=C.textures,$=C.isWebGLCubeRenderTarget===!0,we=Q.length>1;if(we||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=x.version,o.memory.textures++),$){G.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(x.mipmaps&&x.mipmaps.length>0){G.__webglFramebuffer[oe]=[];for(let Ee=0;Ee<x.mipmaps.length;Ee++)G.__webglFramebuffer[oe][Ee]=i.createFramebuffer()}else G.__webglFramebuffer[oe]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){G.__webglFramebuffer=[];for(let oe=0;oe<x.mipmaps.length;oe++)G.__webglFramebuffer[oe]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(we)for(let oe=0,Ee=Q.length;oe<Ee;oe++){const be=n.get(Q[oe]);be.__webglTexture===void 0&&(be.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&ye(C)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let oe=0;oe<Q.length;oe++){const Ee=Q[oe];G.__webglColorRenderbuffer[oe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[oe]);const be=s.convert(Ee.format,Ee.colorSpace),ie=s.convert(Ee.type),fe=b(Ee.internalFormat,be,ie,Ee.colorSpace,C.isXRRenderTarget===!0),Le=lt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Le,fe,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,G.__webglColorRenderbuffer[oe])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),me(G.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),ve(i.TEXTURE_CUBE_MAP,x);for(let oe=0;oe<6;oe++)if(x.mipmaps&&x.mipmaps.length>0)for(let Ee=0;Ee<x.mipmaps.length;Ee++)de(G.__webglFramebuffer[oe][Ee],C,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ee);else de(G.__webglFramebuffer[oe],C,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);p(x)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let oe=0,Ee=Q.length;oe<Ee;oe++){const be=Q[oe],ie=n.get(be);let fe=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(fe=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(fe,ie.__webglTexture),ve(fe,be),de(G.__webglFramebuffer,C,be,i.COLOR_ATTACHMENT0+oe,fe,0),p(be)&&f(fe)}t.unbindTexture()}else{let oe=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(oe=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(oe,K.__webglTexture),ve(oe,x),x.mipmaps&&x.mipmaps.length>0)for(let Ee=0;Ee<x.mipmaps.length;Ee++)de(G.__webglFramebuffer[Ee],C,x,i.COLOR_ATTACHMENT0,oe,Ee);else de(G.__webglFramebuffer,C,x,i.COLOR_ATTACHMENT0,oe,0);p(x)&&f(oe),t.unbindTexture()}C.depthBuffer&&We(C)}function at(C){const x=C.textures;for(let G=0,K=x.length;G<K;G++){const Q=x[G];if(p(Q)){const $=y(C),we=n.get(Q).__webglTexture;t.bindTexture($,we),f($),t.unbindTexture()}}}const ke=[],De=[];function Se(C){if(C.samples>0){if(ye(C)===!1){const x=C.textures,G=C.width,K=C.height;let Q=i.COLOR_BUFFER_BIT;const $=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,we=n.get(C),oe=x.length>1;if(oe)for(let be=0;be<x.length;be++)t.bindFramebuffer(i.FRAMEBUFFER,we.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,we.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer);const Ee=C.texture.mipmaps;Ee&&Ee.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let be=0;be<x.length;be++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),oe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,we.__webglColorRenderbuffer[be]);const ie=n.get(x[be]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ie,0)}i.blitFramebuffer(0,0,G,K,0,0,G,K,Q,i.NEAREST),c===!0&&(ke.length=0,De.length=0,ke.push(i.COLOR_ATTACHMENT0+be),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ke.push($),De.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,De)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ke))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),oe)for(let be=0;be<x.length;be++){t.bindFramebuffer(i.FRAMEBUFFER,we.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,we.__webglColorRenderbuffer[be]);const ie=n.get(x[be]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,we.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,ie,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const x=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function lt(C){return Math.min(r.maxSamples,C.samples)}function ye(C){const x=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Xe(C){const x=o.render.frame;h.get(C)!==x&&(h.set(C,x),C.update())}function wt(C,x){const G=C.colorSpace,K=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||G!==Xi&&G!==Vn&&(Qe.getTransfer(G)===nt?(K!==fn||Q!==Tn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),x}function _t(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=A,this.resetTextureUnits=O,this.setTexture2D=N,this.setTexture2DArray=V,this.setTexture3D=Y,this.setTextureCube=H,this.rebindTextures=yt,this.setupRenderTarget=D,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=de,this.useMultisampledRTT=ye}function s0(i,e){function t(n,r=Vn){let s;const o=Qe.getTransfer(r);if(n===Tn)return i.UNSIGNED_BYTE;if(n===Jo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Zo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===zl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Hl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===kl)return i.BYTE;if(n===Bl)return i.SHORT;if(n===cr)return i.UNSIGNED_SHORT;if(n===Ko)return i.INT;if(n===pi)return i.UNSIGNED_INT;if(n===Un)return i.FLOAT;if(n===_r)return i.HALF_FLOAT;if(n===Gl)return i.ALPHA;if(n===Vl)return i.RGB;if(n===fn)return i.RGBA;if(n===dr)return i.DEPTH_COMPONENT;if(n===ur)return i.DEPTH_STENCIL;if(n===Wl)return i.RED;if(n===Qo)return i.RED_INTEGER;if(n===Xl)return i.RG;if(n===ea)return i.RG_INTEGER;if(n===ta)return i.RGBA_INTEGER;if(n===jr||n===$r||n===Kr||n===Jr)if(o===nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===jr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$r)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Kr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Jr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===jr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$r)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Kr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Jr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===mo||n===go||n===_o||n===vo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===mo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===go)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_o)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===vo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xo||n===Mo||n===So)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===xo||n===Mo)return o===nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===So)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===yo||n===Eo||n===bo||n===To||n===wo||n===Ao||n===Ro||n===Co||n===Po||n===Lo||n===Do||n===Io||n===Uo||n===No)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===yo)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Eo)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===bo)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===To)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===wo)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ao)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ro)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Co)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Po)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Lo)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Do)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Io)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Uo)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===No)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Fo||n===Oo||n===ko)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Fo)return o===nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Oo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ko)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Bo||n===zo||n===Ho||n===Go)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Bo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===zo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ho)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Go)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===hr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const o0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,a0=`
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

}`;class l0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new ic(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new jn({vertexShader:o0,fragmentShader:a0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ct(new Mr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class c0 extends ji{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,m=null,u=null,_=null;const g=typeof XRWebGLBinding<"u",p=new l0,f={},y=t.getContextAttributes();let b=null,v=null;const w=[],R=[],T=new Ue;let P=null;const S=new hn;S.viewport=new gt;const M=new hn;M.viewport=new gt;const L=[S,M],O=new Cd;let A=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let Z=w[j];return Z===void 0&&(Z=new Hs,w[j]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(j){let Z=w[j];return Z===void 0&&(Z=new Hs,w[j]=Z),Z.getGripSpace()},this.getHand=function(j){let Z=w[j];return Z===void 0&&(Z=new Hs,w[j]=Z),Z.getHandSpace()};function N(j){const Z=R.indexOf(j.inputSource);if(Z===-1)return;const de=w[Z];de!==void 0&&(de.update(j.inputSource,j.frame,l||o),de.dispatchEvent({type:j.type,data:j.inputSource}))}function V(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",Y);for(let j=0;j<w.length;j++){const Z=R[j];Z!==null&&(R[j]=null,w[j].disconnect(Z))}A=null,U=null,p.reset();for(const j in f)delete f[j];e.setRenderTarget(b),u=null,m=null,d=null,r=null,v=null,He.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return m!==null?m:u},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(b=e.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",V),r.addEventListener("inputsourceschange",Y),y.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(T),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,me=null,pe=null;y.depth&&(pe=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=y.stencil?ur:dr,me=y.stencil?hr:pi);const We={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:s};d=this.getBinding(),m=d.createProjectionLayer(We),r.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),v=new mi(m.textureWidth,m.textureHeight,{format:fn,type:Tn,depthTexture:new nc(m.textureWidth,m.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const de={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};u=new XRWebGLLayer(r,t,de),r.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),v=new mi(u.framebufferWidth,u.framebufferHeight,{format:fn,type:Tn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),He.setContext(r),He.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function Y(j){for(let Z=0;Z<j.removed.length;Z++){const de=j.removed[Z],me=R.indexOf(de);me>=0&&(R[me]=null,w[me].disconnect(de))}for(let Z=0;Z<j.added.length;Z++){const de=j.added[Z];let me=R.indexOf(de);if(me===-1){for(let We=0;We<w.length;We++)if(We>=R.length){R.push(de),me=We;break}else if(R[We]===null){R[We]=de,me=We;break}if(me===-1)break}const pe=w[me];pe&&pe.connect(de)}}const H=new I,ee=new I;function se(j,Z,de){H.setFromMatrixPosition(Z.matrixWorld),ee.setFromMatrixPosition(de.matrixWorld);const me=H.distanceTo(ee),pe=Z.projectionMatrix.elements,We=de.projectionMatrix.elements,yt=pe[14]/(pe[10]-1),D=pe[14]/(pe[10]+1),at=(pe[9]+1)/pe[5],ke=(pe[9]-1)/pe[5],De=(pe[8]-1)/pe[0],Se=(We[8]+1)/We[0],lt=yt*De,ye=yt*Se,Xe=me/(-De+Se),wt=Xe*-De;if(Z.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(wt),j.translateZ(Xe),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),pe[10]===-1)j.projectionMatrix.copy(Z.projectionMatrix),j.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const _t=yt+Xe,C=D+Xe,x=lt-wt,G=ye+(me-wt),K=at*D/C*_t,Q=ke*D/C*_t;j.projectionMatrix.makePerspective(x,G,K,Q,_t,C),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function q(j,Z){Z===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(Z.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let Z=j.near,de=j.far;p.texture!==null&&(p.depthNear>0&&(Z=p.depthNear),p.depthFar>0&&(de=p.depthFar)),O.near=M.near=S.near=Z,O.far=M.far=S.far=de,(A!==O.near||U!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),A=O.near,U=O.far),O.layers.mask=j.layers.mask|6,S.layers.mask=O.layers.mask&3,M.layers.mask=O.layers.mask&5;const me=j.parent,pe=O.cameras;q(O,me);for(let We=0;We<pe.length;We++)q(pe[We],me);pe.length===2?se(O,S,M):O.projectionMatrix.copy(S.projectionMatrix),ve(j,O,me)};function ve(j,Z,de){de===null?j.matrix.copy(Z.matrixWorld):(j.matrix.copy(de.matrixWorld),j.matrix.invert(),j.matrix.multiply(Z.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(Z.projectionMatrix),j.projectionMatrixInverse.copy(Z.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=fr*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(m===null&&u===null))return c},this.setFoveation=function(j){c=j,m!==null&&(m.fixedFoveation=j),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=j)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(O)},this.getCameraTexture=function(j){return f[j]};let Fe=null;function ze(j,Z){if(h=Z.getViewerPose(l||o),_=Z,h!==null){const de=h.views;u!==null&&(e.setRenderTargetFramebuffer(v,u.framebuffer),e.setRenderTarget(v));let me=!1;de.length!==O.cameras.length&&(O.cameras.length=0,me=!0);for(let D=0;D<de.length;D++){const at=de[D];let ke=null;if(u!==null)ke=u.getViewport(at);else{const Se=d.getViewSubImage(m,at);ke=Se.viewport,D===0&&(e.setRenderTargetTextures(v,Se.colorTexture,Se.depthStencilTexture),e.setRenderTarget(v))}let De=L[D];De===void 0&&(De=new hn,De.layers.enable(D),De.viewport=new gt,L[D]=De),De.matrix.fromArray(at.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(at.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(ke.x,ke.y,ke.width,ke.height),D===0&&(O.matrix.copy(De.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),me===!0&&O.cameras.push(De)}const pe=r.enabledFeatures;if(pe&&pe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&g){d=n.getBinding();const D=d.getDepthInformation(de[0]);D&&D.isValid&&D.texture&&p.init(D,r.renderState)}if(pe&&pe.includes("camera-access")&&g){e.state.unbindTexture(),d=n.getBinding();for(let D=0;D<de.length;D++){const at=de[D].camera;if(at){let ke=f[at];ke||(ke=new ic,f[at]=ke);const De=d.getCameraImage(at);ke.sourceTexture=De}}}}for(let de=0;de<w.length;de++){const me=R[de],pe=w[de];me!==null&&pe!==void 0&&pe.update(me,Z,l||o)}Fe&&Fe(j,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),_=null}const He=new oc;He.setAnimationLoop(ze),this.setAnimationLoop=function(j){Fe=j},this.dispose=function(){}}}const ii=new _n,h0=new vt;function d0(i,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,Ql(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,y,b,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(p,f):f.isMeshToonMaterial?(s(p,f),d(p,f)):f.isMeshPhongMaterial?(s(p,f),h(p,f)):f.isMeshStandardMaterial?(s(p,f),m(p,f),f.isMeshPhysicalMaterial&&u(p,f,v)):f.isMeshMatcapMaterial?(s(p,f),_(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),g(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?c(p,f,y,b):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Ht&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Ht&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const y=e.get(f),b=y.envMap,v=y.envMapRotation;b&&(p.envMap.value=b,ii.copy(v),ii.x*=-1,ii.y*=-1,ii.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ii.y*=-1,ii.z*=-1),p.envMapRotation.value.setFromMatrix4(h0.makeRotationFromEuler(ii)),p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function c(p,f,y,b){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*y,p.scale.value=b*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function d(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function m(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function u(p,f,y){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ht&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,f){f.matcap&&(p.matcap.value=f.matcap)}function g(p,f){const y=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function u0(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,b){const v=b.program;n.uniformBlockBinding(y,v)}function l(y,b){let v=r[y.id];v===void 0&&(_(y),v=h(y),r[y.id]=v,y.addEventListener("dispose",p));const w=b.program;n.updateUBOMapping(y,w);const R=e.render.frame;s[y.id]!==R&&(m(y),s[y.id]=R)}function h(y){const b=d();y.__bindingPointIndex=b;const v=i.createBuffer(),w=y.__size,R=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,w,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,v),v}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(y){const b=r[y.id],v=y.uniforms,w=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let R=0,T=v.length;R<T;R++){const P=Array.isArray(v[R])?v[R]:[v[R]];for(let S=0,M=P.length;S<M;S++){const L=P[S];if(u(L,R,S,w)===!0){const O=L.__offset,A=Array.isArray(L.value)?L.value:[L.value];let U=0;for(let N=0;N<A.length;N++){const V=A[N],Y=g(V);typeof V=="number"||typeof V=="boolean"?(L.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,O+U,L.__data)):V.isMatrix3?(L.__data[0]=V.elements[0],L.__data[1]=V.elements[1],L.__data[2]=V.elements[2],L.__data[3]=0,L.__data[4]=V.elements[3],L.__data[5]=V.elements[4],L.__data[6]=V.elements[5],L.__data[7]=0,L.__data[8]=V.elements[6],L.__data[9]=V.elements[7],L.__data[10]=V.elements[8],L.__data[11]=0):(V.toArray(L.__data,U),U+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(y,b,v,w){const R=y.value,T=b+"_"+v;if(w[T]===void 0)return typeof R=="number"||typeof R=="boolean"?w[T]=R:w[T]=R.clone(),!0;{const P=w[T];if(typeof R=="number"||typeof R=="boolean"){if(P!==R)return w[T]=R,!0}else if(P.equals(R)===!1)return P.copy(R),!0}return!1}function _(y){const b=y.uniforms;let v=0;const w=16;for(let T=0,P=b.length;T<P;T++){const S=Array.isArray(b[T])?b[T]:[b[T]];for(let M=0,L=S.length;M<L;M++){const O=S[M],A=Array.isArray(O.value)?O.value:[O.value];for(let U=0,N=A.length;U<N;U++){const V=A[U],Y=g(V),H=v%w,ee=H%Y.boundary,se=H+ee;v+=ee,se!==0&&w-se<Y.storage&&(v+=w-se),O.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=v,v+=Y.storage}}}const R=v%w;return R>0&&(v+=w-R),y.__size=v,y.__cache={},this}function g(y){const b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),b}function p(y){const b=y.target;b.removeEventListener("dispose",p);const v=o.indexOf(b.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function f(){for(const y in r)i.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:c,update:l,dispose:f}}class f0{constructor(e={}){const{canvas:t=Xh(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:m=!1}=e;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=o;const _=new Uint32Array(4),g=new Int32Array(4);let p=null,f=null;const y=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let w=!1;this._outputColorSpace=Bt;let R=0,T=0,P=null,S=-1,M=null;const L=new gt,O=new gt;let A=null;const U=new Je(0);let N=0,V=t.width,Y=t.height,H=1,ee=null,se=null;const q=new gt(0,0,V,Y),ve=new gt(0,0,V,Y);let Fe=!1;const ze=new oa;let He=!1,j=!1;const Z=new vt,de=new I,me=new gt,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function yt(){return P===null?H:1}let D=n;function at(E,k){return t.getContext(E,k)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${jo}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",_e,!1),t.addEventListener("webglcontextcreationerror",te,!1),D===null){const k="webgl2";if(D=at(k,E),D===null)throw at(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ke,De,Se,lt,ye,Xe,wt,_t,C,x,G,K,Q,$,we,oe,Ee,be,ie,fe,Le,Te,he,Ge;function F(){ke=new Ep(D),ke.init(),Te=new s0(D,ke),De=new gp(D,ke,e,Te),Se=new i0(D,ke),De.reversedDepthBuffer&&m&&Se.buffers.depth.setReversed(!0),lt=new wp(D),ye=new Wm,Xe=new r0(D,ke,Se,ye,De,Te,lt),wt=new vp(v),_t=new yp(v),C=new Ld(D),he=new pp(D,C),x=new bp(D,C,lt,he),G=new Rp(D,x,C,lt),ie=new Ap(D,De,Xe),oe=new _p(ye),K=new Vm(v,wt,_t,ke,De,he,oe),Q=new d0(v,ye),$=new qm,we=new Zm(ke),be=new fp(v,wt,_t,Se,G,u,c),Ee=new t0(v,G,De),Ge=new u0(D,lt,De,Se),fe=new mp(D,ke,lt),Le=new Tp(D,ke,lt),lt.programs=K.programs,v.capabilities=De,v.extensions=ke,v.properties=ye,v.renderLists=$,v.shadowMap=Ee,v.state=Se,v.info=lt}F();const re=new c0(v,D);this.xr=re,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const E=ke.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ke.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(E){E!==void 0&&(H=E,this.setSize(V,Y,!1))},this.getSize=function(E){return E.set(V,Y)},this.setSize=function(E,k,W=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=E,Y=k,t.width=Math.floor(E*H),t.height=Math.floor(k*H),W===!0&&(t.style.width=E+"px",t.style.height=k+"px"),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(V*H,Y*H).floor()},this.setDrawingBufferSize=function(E,k,W){V=E,Y=k,H=W,t.width=Math.floor(E*W),t.height=Math.floor(k*W),this.setViewport(0,0,E,k)},this.getCurrentViewport=function(E){return E.copy(L)},this.getViewport=function(E){return E.copy(q)},this.setViewport=function(E,k,W,X){E.isVector4?q.set(E.x,E.y,E.z,E.w):q.set(E,k,W,X),Se.viewport(L.copy(q).multiplyScalar(H).round())},this.getScissor=function(E){return E.copy(ve)},this.setScissor=function(E,k,W,X){E.isVector4?ve.set(E.x,E.y,E.z,E.w):ve.set(E,k,W,X),Se.scissor(O.copy(ve).multiplyScalar(H).round())},this.getScissorTest=function(){return Fe},this.setScissorTest=function(E){Se.setScissorTest(Fe=E)},this.setOpaqueSort=function(E){ee=E},this.setTransparentSort=function(E){se=E},this.getClearColor=function(E){return E.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor(...arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha(...arguments)},this.clear=function(E=!0,k=!0,W=!0){let X=0;if(E){let B=!1;if(P!==null){const ne=P.texture.format;B=ne===ta||ne===ea||ne===Qo}if(B){const ne=P.texture.type,ue=ne===Tn||ne===pi||ne===cr||ne===hr||ne===Jo||ne===Zo,xe=be.getClearColor(),ge=be.getClearAlpha(),Pe=xe.r,Ie=xe.g,Re=xe.b;ue?(_[0]=Pe,_[1]=Ie,_[2]=Re,_[3]=ge,D.clearBufferuiv(D.COLOR,0,_)):(g[0]=Pe,g[1]=Ie,g[2]=Re,g[3]=ge,D.clearBufferiv(D.COLOR,0,g))}else X|=D.COLOR_BUFFER_BIT}k&&(X|=D.DEPTH_BUFFER_BIT),W&&(X|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",_e,!1),t.removeEventListener("webglcontextcreationerror",te,!1),be.dispose(),$.dispose(),we.dispose(),ye.dispose(),wt.dispose(),_t.dispose(),G.dispose(),he.dispose(),Ge.dispose(),K.dispose(),re.dispose(),re.removeEventListener("sessionstart",vn),re.removeEventListener("sessionend",ba),Kn.stop()};function ae(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const E=lt.autoReset,k=Ee.enabled,W=Ee.autoUpdate,X=Ee.needsUpdate,B=Ee.type;F(),lt.autoReset=E,Ee.enabled=k,Ee.autoUpdate=W,Ee.needsUpdate=X,Ee.type=B}function te(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function J(E){const k=E.target;k.removeEventListener("dispose",J),Me(k)}function Me(E){Oe(E),ye.remove(E)}function Oe(E){const k=ye.get(E).programs;k!==void 0&&(k.forEach(function(W){K.releaseProgram(W)}),E.isShaderMaterial&&K.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,W,X,B,ne){k===null&&(k=pe);const ue=B.isMesh&&B.matrixWorld.determinant()<0,xe=Fc(E,k,W,X,B);Se.setMaterial(X,ue);let ge=W.index,Pe=1;if(X.wireframe===!0){if(ge=x.getWireframeAttribute(W),ge===void 0)return;Pe=2}const Ie=W.drawRange,Re=W.attributes.position;let Ke=Ie.start*Pe,tt=(Ie.start+Ie.count)*Pe;ne!==null&&(Ke=Math.max(Ke,ne.start*Pe),tt=Math.min(tt,(ne.start+ne.count)*Pe)),ge!==null?(Ke=Math.max(Ke,0),tt=Math.min(tt,ge.count)):Re!=null&&(Ke=Math.max(Ke,0),tt=Math.min(tt,Re.count));const pt=tt-Ke;if(pt<0||pt===1/0)return;he.setup(B,X,xe,W,ge);let st,it=fe;if(ge!==null&&(st=C.get(ge),it=Le,it.setIndex(st)),B.isMesh)X.wireframe===!0?(Se.setLineWidth(X.wireframeLinewidth*yt()),it.setMode(D.LINES)):it.setMode(D.TRIANGLES);else if(B.isLine){let Ce=X.linewidth;Ce===void 0&&(Ce=1),Se.setLineWidth(Ce*yt()),B.isLineSegments?it.setMode(D.LINES):B.isLineLoop?it.setMode(D.LINE_LOOP):it.setMode(D.LINE_STRIP)}else B.isPoints?it.setMode(D.POINTS):B.isSprite&&it.setMode(D.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)pr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),it.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(ke.get("WEBGL_multi_draw"))it.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Ce=B._multiDrawStarts,dt=B._multiDrawCounts,Ze=B._multiDrawCount,Vt=ge?C.get(ge).bytesPerElement:1,xi=ye.get(X).currentProgram.getUniforms();for(let Wt=0;Wt<Ze;Wt++)xi.setValue(D,"_gl_DrawID",Wt),it.render(Ce[Wt]/Vt,dt[Wt])}else if(B.isInstancedMesh)it.renderInstances(Ke,pt,B.count);else if(W.isInstancedBufferGeometry){const Ce=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,dt=Math.min(W.instanceCount,Ce);it.renderInstances(Ke,pt,dt)}else it.render(Ke,pt)};function rt(E,k,W){E.transparent===!0&&E.side===jt&&E.forceSinglePass===!1?(E.side=Ht,E.needsUpdate=!0,Er(E,k,W),E.side=Yn,E.needsUpdate=!0,Er(E,k,W),E.side=jt):Er(E,k,W)}this.compile=function(E,k,W=null){W===null&&(W=E),f=we.get(W),f.init(k),b.push(f),W.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),E!==W&&E.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),f.setupLights();const X=new Set;return E.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const ne=B.material;if(ne)if(Array.isArray(ne))for(let ue=0;ue<ne.length;ue++){const xe=ne[ue];rt(xe,W,B),X.add(xe)}else rt(ne,W,B),X.add(ne)}),f=b.pop(),X},this.compileAsync=function(E,k,W=null){const X=this.compile(E,k,W);return new Promise(B=>{function ne(){if(X.forEach(function(ue){ye.get(ue).currentProgram.isReady()&&X.delete(ue)}),X.size===0){B(E);return}setTimeout(ne,10)}ke.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let et=null;function wn(E){et&&et(E)}function vn(){Kn.stop()}function ba(){Kn.start()}const Kn=new oc;Kn.setAnimationLoop(wn),typeof self<"u"&&Kn.setContext(self),this.setAnimationLoop=function(E){et=E,re.setAnimationLoop(E),E===null?Kn.stop():Kn.start()},re.addEventListener("sessionstart",vn),re.addEventListener("sessionend",ba),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(k),k=re.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,k,P),f=we.get(E,b.length),f.init(k),b.push(f),Z.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),ze.setFromProjectionMatrix(Z,yn,k.reversedDepth),j=this.localClippingEnabled,He=oe.init(this.clippingPlanes,j),p=$.get(E,y.length),p.init(),y.push(p),re.enabled===!0&&re.isPresenting===!0){const ne=v.xr.getDepthSensingMesh();ne!==null&&vs(ne,k,-1/0,v.sortObjects)}vs(E,k,0,v.sortObjects),p.finish(),v.sortObjects===!0&&p.sort(ee,se),We=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,We&&be.addToRenderList(p,E),this.info.render.frame++,He===!0&&oe.beginShadows();const W=f.state.shadowsArray;Ee.render(W,E,k),He===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=p.opaque,B=p.transmissive;if(f.setupLights(),k.isArrayCamera){const ne=k.cameras;if(B.length>0)for(let ue=0,xe=ne.length;ue<xe;ue++){const ge=ne[ue];wa(X,B,E,ge)}We&&be.render(E);for(let ue=0,xe=ne.length;ue<xe;ue++){const ge=ne[ue];Ta(p,E,ge,ge.viewport)}}else B.length>0&&wa(X,B,E,k),We&&be.render(E),Ta(p,E,k);P!==null&&T===0&&(Xe.updateMultisampleRenderTarget(P),Xe.updateRenderTargetMipmap(P)),E.isScene===!0&&E.onAfterRender(v,E,k),he.resetDefaultState(),S=-1,M=null,b.pop(),b.length>0?(f=b[b.length-1],He===!0&&oe.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,y.pop(),y.length>0?p=y[y.length-1]:p=null};function vs(E,k,W,X){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ze.intersectsSprite(E)){X&&me.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Z);const ue=G.update(E),xe=E.material;xe.visible&&p.push(E,ue,xe,W,me.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||ze.intersectsObject(E))){const ue=G.update(E),xe=E.material;if(X&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),me.copy(E.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),me.copy(ue.boundingSphere.center)),me.applyMatrix4(E.matrixWorld).applyMatrix4(Z)),Array.isArray(xe)){const ge=ue.groups;for(let Pe=0,Ie=ge.length;Pe<Ie;Pe++){const Re=ge[Pe],Ke=xe[Re.materialIndex];Ke&&Ke.visible&&p.push(E,ue,Ke,W,me.z,Re)}}else xe.visible&&p.push(E,ue,xe,W,me.z,null)}}const ne=E.children;for(let ue=0,xe=ne.length;ue<xe;ue++)vs(ne[ue],k,W,X)}function Ta(E,k,W,X){const B=E.opaque,ne=E.transmissive,ue=E.transparent;f.setupLightsView(W),He===!0&&oe.setGlobalState(v.clippingPlanes,W),X&&Se.viewport(L.copy(X)),B.length>0&&yr(B,k,W),ne.length>0&&yr(ne,k,W),ue.length>0&&yr(ue,k,W),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function wa(E,k,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[X.id]===void 0&&(f.state.transmissionRenderTarget[X.id]=new mi(1,1,{generateMipmaps:!0,type:ke.has("EXT_color_buffer_half_float")||ke.has("EXT_color_buffer_float")?_r:Tn,minFilter:ui,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const ne=f.state.transmissionRenderTarget[X.id],ue=X.viewport||L;ne.setSize(ue.z*v.transmissionResolutionScale,ue.w*v.transmissionResolutionScale);const xe=v.getRenderTarget(),ge=v.getActiveCubeFace(),Pe=v.getActiveMipmapLevel();v.setRenderTarget(ne),v.getClearColor(U),N=v.getClearAlpha(),N<1&&v.setClearColor(16777215,.5),v.clear(),We&&be.render(W);const Ie=v.toneMapping;v.toneMapping=qn;const Re=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),f.setupLightsView(X),He===!0&&oe.setGlobalState(v.clippingPlanes,X),yr(E,W,X),Xe.updateMultisampleRenderTarget(ne),Xe.updateRenderTargetMipmap(ne),ke.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let tt=0,pt=k.length;tt<pt;tt++){const st=k[tt],it=st.object,Ce=st.geometry,dt=st.material,Ze=st.group;if(dt.side===jt&&it.layers.test(X.layers)){const Vt=dt.side;dt.side=Ht,dt.needsUpdate=!0,Aa(it,W,X,Ce,dt,Ze),dt.side=Vt,dt.needsUpdate=!0,Ke=!0}}Ke===!0&&(Xe.updateMultisampleRenderTarget(ne),Xe.updateRenderTargetMipmap(ne))}v.setRenderTarget(xe,ge,Pe),v.setClearColor(U,N),Re!==void 0&&(X.viewport=Re),v.toneMapping=Ie}function yr(E,k,W){const X=k.isScene===!0?k.overrideMaterial:null;for(let B=0,ne=E.length;B<ne;B++){const ue=E[B],xe=ue.object,ge=ue.geometry,Pe=ue.group;let Ie=ue.material;Ie.allowOverride===!0&&X!==null&&(Ie=X),xe.layers.test(W.layers)&&Aa(xe,k,W,ge,Ie,Pe)}}function Aa(E,k,W,X,B,ne){E.onBeforeRender(v,k,W,X,B,ne),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),B.onBeforeRender(v,k,W,X,E,ne),B.transparent===!0&&B.side===jt&&B.forceSinglePass===!1?(B.side=Ht,B.needsUpdate=!0,v.renderBufferDirect(W,k,X,B,E,ne),B.side=Yn,B.needsUpdate=!0,v.renderBufferDirect(W,k,X,B,E,ne),B.side=jt):v.renderBufferDirect(W,k,X,B,E,ne),E.onAfterRender(v,k,W,X,B,ne)}function Er(E,k,W){k.isScene!==!0&&(k=pe);const X=ye.get(E),B=f.state.lights,ne=f.state.shadowsArray,ue=B.state.version,xe=K.getParameters(E,B.state,ne,k,W),ge=K.getProgramCacheKey(xe);let Pe=X.programs;X.environment=E.isMeshStandardMaterial?k.environment:null,X.fog=k.fog,X.envMap=(E.isMeshStandardMaterial?_t:wt).get(E.envMap||X.environment),X.envMapRotation=X.environment!==null&&E.envMap===null?k.environmentRotation:E.envMapRotation,Pe===void 0&&(E.addEventListener("dispose",J),Pe=new Map,X.programs=Pe);let Ie=Pe.get(ge);if(Ie!==void 0){if(X.currentProgram===Ie&&X.lightsStateVersion===ue)return Ca(E,xe),Ie}else xe.uniforms=K.getUniforms(E),E.onBeforeCompile(xe,v),Ie=K.acquireProgram(xe,ge),Pe.set(ge,Ie),X.uniforms=xe.uniforms;const Re=X.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Re.clippingPlanes=oe.uniform),Ca(E,xe),X.needsLights=kc(E),X.lightsStateVersion=ue,X.needsLights&&(Re.ambientLightColor.value=B.state.ambient,Re.lightProbe.value=B.state.probe,Re.directionalLights.value=B.state.directional,Re.directionalLightShadows.value=B.state.directionalShadow,Re.spotLights.value=B.state.spot,Re.spotLightShadows.value=B.state.spotShadow,Re.rectAreaLights.value=B.state.rectArea,Re.ltc_1.value=B.state.rectAreaLTC1,Re.ltc_2.value=B.state.rectAreaLTC2,Re.pointLights.value=B.state.point,Re.pointLightShadows.value=B.state.pointShadow,Re.hemisphereLights.value=B.state.hemi,Re.directionalShadowMap.value=B.state.directionalShadowMap,Re.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Re.spotShadowMap.value=B.state.spotShadowMap,Re.spotLightMatrix.value=B.state.spotLightMatrix,Re.spotLightMap.value=B.state.spotLightMap,Re.pointShadowMap.value=B.state.pointShadowMap,Re.pointShadowMatrix.value=B.state.pointShadowMatrix),X.currentProgram=Ie,X.uniformsList=null,Ie}function Ra(E){if(E.uniformsList===null){const k=E.currentProgram.getUniforms();E.uniformsList=Zr.seqWithValue(k.seq,E.uniforms)}return E.uniformsList}function Ca(E,k){const W=ye.get(E);W.outputColorSpace=k.outputColorSpace,W.batching=k.batching,W.batchingColor=k.batchingColor,W.instancing=k.instancing,W.instancingColor=k.instancingColor,W.instancingMorph=k.instancingMorph,W.skinning=k.skinning,W.morphTargets=k.morphTargets,W.morphNormals=k.morphNormals,W.morphColors=k.morphColors,W.morphTargetsCount=k.morphTargetsCount,W.numClippingPlanes=k.numClippingPlanes,W.numIntersection=k.numClipIntersection,W.vertexAlphas=k.vertexAlphas,W.vertexTangents=k.vertexTangents,W.toneMapping=k.toneMapping}function Fc(E,k,W,X,B){k.isScene!==!0&&(k=pe),Xe.resetTextureUnits();const ne=k.fog,ue=X.isMeshStandardMaterial?k.environment:null,xe=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Xi,ge=(X.isMeshStandardMaterial?_t:wt).get(X.envMap||ue),Pe=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ie=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Re=!!W.morphAttributes.position,Ke=!!W.morphAttributes.normal,tt=!!W.morphAttributes.color;let pt=qn;X.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(pt=v.toneMapping);const st=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,it=st!==void 0?st.length:0,Ce=ye.get(X),dt=f.state.lights;if(He===!0&&(j===!0||E!==M)){const Ut=E===M&&X.id===S;oe.setState(X,E,Ut)}let Ze=!1;X.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==dt.state.version||Ce.outputColorSpace!==xe||B.isBatchedMesh&&Ce.batching===!1||!B.isBatchedMesh&&Ce.batching===!0||B.isBatchedMesh&&Ce.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ce.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ce.instancing===!1||!B.isInstancedMesh&&Ce.instancing===!0||B.isSkinnedMesh&&Ce.skinning===!1||!B.isSkinnedMesh&&Ce.skinning===!0||B.isInstancedMesh&&Ce.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ce.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ce.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ce.instancingMorph===!1&&B.morphTexture!==null||Ce.envMap!==ge||X.fog===!0&&Ce.fog!==ne||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==oe.numPlanes||Ce.numIntersection!==oe.numIntersection)||Ce.vertexAlphas!==Pe||Ce.vertexTangents!==Ie||Ce.morphTargets!==Re||Ce.morphNormals!==Ke||Ce.morphColors!==tt||Ce.toneMapping!==pt||Ce.morphTargetsCount!==it)&&(Ze=!0):(Ze=!0,Ce.__version=X.version);let Vt=Ce.currentProgram;Ze===!0&&(Vt=Er(X,k,B));let xi=!1,Wt=!1,Qi=!1;const ut=Vt.getUniforms(),Jt=Ce.uniforms;if(Se.useProgram(Vt.program)&&(xi=!0,Wt=!0,Qi=!0),X.id!==S&&(S=X.id,Wt=!0),xi||M!==E){Se.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ut.setValue(D,"projectionMatrix",E.projectionMatrix),ut.setValue(D,"viewMatrix",E.matrixWorldInverse);const kt=ut.map.cameraPosition;kt!==void 0&&kt.setValue(D,de.setFromMatrixPosition(E.matrixWorld)),De.logarithmicDepthBuffer&&ut.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&ut.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,Wt=!0,Qi=!0)}if(B.isSkinnedMesh){ut.setOptional(D,B,"bindMatrix"),ut.setOptional(D,B,"bindMatrixInverse");const Ut=B.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),ut.setValue(D,"boneTexture",Ut.boneTexture,Xe))}B.isBatchedMesh&&(ut.setOptional(D,B,"batchingTexture"),ut.setValue(D,"batchingTexture",B._matricesTexture,Xe),ut.setOptional(D,B,"batchingIdTexture"),ut.setValue(D,"batchingIdTexture",B._indirectTexture,Xe),ut.setOptional(D,B,"batchingColorTexture"),B._colorsTexture!==null&&ut.setValue(D,"batchingColorTexture",B._colorsTexture,Xe));const Zt=W.morphAttributes;if((Zt.position!==void 0||Zt.normal!==void 0||Zt.color!==void 0)&&ie.update(B,W,Vt),(Wt||Ce.receiveShadow!==B.receiveShadow)&&(Ce.receiveShadow=B.receiveShadow,ut.setValue(D,"receiveShadow",B.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Jt.envMap.value=ge,Jt.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&k.environment!==null&&(Jt.envMapIntensity.value=k.environmentIntensity),Wt&&(ut.setValue(D,"toneMappingExposure",v.toneMappingExposure),Ce.needsLights&&Oc(Jt,Qi),ne&&X.fog===!0&&Q.refreshFogUniforms(Jt,ne),Q.refreshMaterialUniforms(Jt,X,H,Y,f.state.transmissionRenderTarget[E.id]),Zr.upload(D,Ra(Ce),Jt,Xe)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Zr.upload(D,Ra(Ce),Jt,Xe),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&ut.setValue(D,"center",B.center),ut.setValue(D,"modelViewMatrix",B.modelViewMatrix),ut.setValue(D,"normalMatrix",B.normalMatrix),ut.setValue(D,"modelMatrix",B.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Ut=X.uniformsGroups;for(let kt=0,xs=Ut.length;kt<xs;kt++){const Jn=Ut[kt];Ge.update(Jn,Vt),Ge.bind(Jn,Vt)}}return Vt}function Oc(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function kc(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(E,k,W){const X=ye.get(E);X.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),ye.get(E.texture).__webglTexture=k,ye.get(E.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:W,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,k){const W=ye.get(E);W.__webglFramebuffer=k,W.__useDefaultFramebuffer=k===void 0};const Bc=D.createFramebuffer();this.setRenderTarget=function(E,k=0,W=0){P=E,R=k,T=W;let X=!0,B=null,ne=!1,ue=!1;if(E){const ge=ye.get(E);if(ge.__useDefaultFramebuffer!==void 0)Se.bindFramebuffer(D.FRAMEBUFFER,null),X=!1;else if(ge.__webglFramebuffer===void 0)Xe.setupRenderTarget(E);else if(ge.__hasExternalTextures)Xe.rebindTextures(E,ye.get(E.texture).__webglTexture,ye.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Re=E.depthTexture;if(ge.__boundDepthTexture!==Re){if(Re!==null&&ye.has(Re)&&(E.width!==Re.image.width||E.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Xe.setupDepthRenderbuffer(E)}}const Pe=E.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(ue=!0);const Ie=ye.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ie[k])?B=Ie[k][W]:B=Ie[k],ne=!0):E.samples>0&&Xe.useMultisampledRTT(E)===!1?B=ye.get(E).__webglMultisampledFramebuffer:Array.isArray(Ie)?B=Ie[W]:B=Ie,L.copy(E.viewport),O.copy(E.scissor),A=E.scissorTest}else L.copy(q).multiplyScalar(H).floor(),O.copy(ve).multiplyScalar(H).floor(),A=Fe;if(W!==0&&(B=Bc),Se.bindFramebuffer(D.FRAMEBUFFER,B)&&X&&Se.drawBuffers(E,B),Se.viewport(L),Se.scissor(O),Se.setScissorTest(A),ne){const ge=ye.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+k,ge.__webglTexture,W)}else if(ue){const ge=k;for(let Pe=0;Pe<E.textures.length;Pe++){const Ie=ye.get(E.textures[Pe]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Pe,Ie.__webglTexture,W,ge)}}else if(E!==null&&W!==0){const ge=ye.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ge.__webglTexture,W)}S=-1},this.readRenderTargetPixels=function(E,k,W,X,B,ne,ue,xe=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=ye.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ue!==void 0&&(ge=ge[ue]),ge){Se.bindFramebuffer(D.FRAMEBUFFER,ge);try{const Pe=E.textures[xe],Ie=Pe.format,Re=Pe.type;if(!De.textureFormatReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!De.textureTypeReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-X&&W>=0&&W<=E.height-B&&(E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+xe),D.readPixels(k,W,X,B,Te.convert(Ie),Te.convert(Re),ne))}finally{const Pe=P!==null?ye.get(P).__webglFramebuffer:null;Se.bindFramebuffer(D.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(E,k,W,X,B,ne,ue,xe=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=ye.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ue!==void 0&&(ge=ge[ue]),ge)if(k>=0&&k<=E.width-X&&W>=0&&W<=E.height-B){Se.bindFramebuffer(D.FRAMEBUFFER,ge);const Pe=E.textures[xe],Ie=Pe.format,Re=Pe.type;if(!De.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!De.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ke=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ke),D.bufferData(D.PIXEL_PACK_BUFFER,ne.byteLength,D.STREAM_READ),E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+xe),D.readPixels(k,W,X,B,Te.convert(Ie),Te.convert(Re),0);const tt=P!==null?ye.get(P).__webglFramebuffer:null;Se.bindFramebuffer(D.FRAMEBUFFER,tt);const pt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await qh(D,pt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ke),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ne),D.deleteBuffer(Ke),D.deleteSync(pt),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,k=null,W=0){const X=Math.pow(2,-W),B=Math.floor(E.image.width*X),ne=Math.floor(E.image.height*X),ue=k!==null?k.x:0,xe=k!==null?k.y:0;Xe.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,ue,xe,B,ne),Se.unbindTexture()};const zc=D.createFramebuffer(),Hc=D.createFramebuffer();this.copyTextureToTexture=function(E,k,W=null,X=null,B=0,ne=null){ne===null&&(B!==0?(pr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ne=B,B=0):ne=0);let ue,xe,ge,Pe,Ie,Re,Ke,tt,pt;const st=E.isCompressedTexture?E.mipmaps[ne]:E.image;if(W!==null)ue=W.max.x-W.min.x,xe=W.max.y-W.min.y,ge=W.isBox3?W.max.z-W.min.z:1,Pe=W.min.x,Ie=W.min.y,Re=W.isBox3?W.min.z:0;else{const Zt=Math.pow(2,-B);ue=Math.floor(st.width*Zt),xe=Math.floor(st.height*Zt),E.isDataArrayTexture?ge=st.depth:E.isData3DTexture?ge=Math.floor(st.depth*Zt):ge=1,Pe=0,Ie=0,Re=0}X!==null?(Ke=X.x,tt=X.y,pt=X.z):(Ke=0,tt=0,pt=0);const it=Te.convert(k.format),Ce=Te.convert(k.type);let dt;k.isData3DTexture?(Xe.setTexture3D(k,0),dt=D.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(Xe.setTexture2DArray(k,0),dt=D.TEXTURE_2D_ARRAY):(Xe.setTexture2D(k,0),dt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,k.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,k.unpackAlignment);const Ze=D.getParameter(D.UNPACK_ROW_LENGTH),Vt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),xi=D.getParameter(D.UNPACK_SKIP_PIXELS),Wt=D.getParameter(D.UNPACK_SKIP_ROWS),Qi=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,st.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,st.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Pe),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ie),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Re);const ut=E.isDataArrayTexture||E.isData3DTexture,Jt=k.isDataArrayTexture||k.isData3DTexture;if(E.isDepthTexture){const Zt=ye.get(E),Ut=ye.get(k),kt=ye.get(Zt.__renderTarget),xs=ye.get(Ut.__renderTarget);Se.bindFramebuffer(D.READ_FRAMEBUFFER,kt.__webglFramebuffer),Se.bindFramebuffer(D.DRAW_FRAMEBUFFER,xs.__webglFramebuffer);for(let Jn=0;Jn<ge;Jn++)ut&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ye.get(E).__webglTexture,B,Re+Jn),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ye.get(k).__webglTexture,ne,pt+Jn)),D.blitFramebuffer(Pe,Ie,ue,xe,Ke,tt,ue,xe,D.DEPTH_BUFFER_BIT,D.NEAREST);Se.bindFramebuffer(D.READ_FRAMEBUFFER,null),Se.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(B!==0||E.isRenderTargetTexture||ye.has(E)){const Zt=ye.get(E),Ut=ye.get(k);Se.bindFramebuffer(D.READ_FRAMEBUFFER,zc),Se.bindFramebuffer(D.DRAW_FRAMEBUFFER,Hc);for(let kt=0;kt<ge;kt++)ut?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Zt.__webglTexture,B,Re+kt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Zt.__webglTexture,B),Jt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ut.__webglTexture,ne,pt+kt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ut.__webglTexture,ne),B!==0?D.blitFramebuffer(Pe,Ie,ue,xe,Ke,tt,ue,xe,D.COLOR_BUFFER_BIT,D.NEAREST):Jt?D.copyTexSubImage3D(dt,ne,Ke,tt,pt+kt,Pe,Ie,ue,xe):D.copyTexSubImage2D(dt,ne,Ke,tt,Pe,Ie,ue,xe);Se.bindFramebuffer(D.READ_FRAMEBUFFER,null),Se.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Jt?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(dt,ne,Ke,tt,pt,ue,xe,ge,it,Ce,st.data):k.isCompressedArrayTexture?D.compressedTexSubImage3D(dt,ne,Ke,tt,pt,ue,xe,ge,it,st.data):D.texSubImage3D(dt,ne,Ke,tt,pt,ue,xe,ge,it,Ce,st):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ne,Ke,tt,ue,xe,it,Ce,st.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ne,Ke,tt,st.width,st.height,it,st.data):D.texSubImage2D(D.TEXTURE_2D,ne,Ke,tt,ue,xe,it,Ce,st);D.pixelStorei(D.UNPACK_ROW_LENGTH,Ze),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Vt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,xi),D.pixelStorei(D.UNPACK_SKIP_ROWS,Wt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Qi),ne===0&&k.generateMipmaps&&D.generateMipmap(dt),Se.unbindTexture()},this.initRenderTarget=function(E){ye.get(E).__webglFramebuffer===void 0&&Xe.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Xe.setTextureCube(E,0):E.isData3DTexture?Xe.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Xe.setTexture2DArray(E,0):Xe.setTexture2D(E,0),Se.unbindTexture()},this.resetState=function(){R=0,T=0,P=null,Se.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}const rr=new I;function en(i,e,t,n,r,s){const o=2*Math.PI*r/4,a=Math.max(s-2*r,0),c=Math.PI/4;rr.copy(e),rr[n]=0,rr.normalize();const l=.5*o/(o+a),h=1-rr.angleTo(i)/c;return Math.sign(rr[t])===1?h*l:a/(o+a)+l+l*(1-h)}class ps extends vi{constructor(e=1,t=1,n=1,r=2,s=.1){const o=r*2+1;if(s=Math.min(e/2,t/2,n/2,s),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:r,radius:s},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const c=new I,l=new I,h=new I(e,t,n).divideScalar(2).subScalar(s),d=this.attributes.position.array,m=this.attributes.normal.array,u=this.attributes.uv.array,_=d.length/6,g=new I,p=.5/o;for(let f=0,y=0;f<d.length;f+=3,y+=2)switch(c.fromArray(d,f),l.copy(c),l.x-=Math.sign(l.x)*p,l.y-=Math.sign(l.y)*p,l.z-=Math.sign(l.z)*p,l.normalize(),d[f+0]=h.x*Math.sign(c.x)+l.x*s,d[f+1]=h.y*Math.sign(c.y)+l.y*s,d[f+2]=h.z*Math.sign(c.z)+l.z*s,m[f+0]=l.x,m[f+1]=l.y,m[f+2]=l.z,Math.floor(f/_)){case 0:g.set(1,0,0),u[y+0]=en(g,l,"z","y",s,n),u[y+1]=1-en(g,l,"y","z",s,t);break;case 1:g.set(-1,0,0),u[y+0]=1-en(g,l,"z","y",s,n),u[y+1]=1-en(g,l,"y","z",s,t);break;case 2:g.set(0,1,0),u[y+0]=1-en(g,l,"x","z",s,e),u[y+1]=en(g,l,"z","x",s,n);break;case 3:g.set(0,-1,0),u[y+0]=1-en(g,l,"x","z",s,e),u[y+1]=1-en(g,l,"z","x",s,n);break;case 4:g.set(0,0,1),u[y+0]=1-en(g,l,"x","y",s,e),u[y+1]=1-en(g,l,"y","x",s,t);break;case 5:g.set(0,0,-1),u[y+0]=en(g,l,"x","y",s,e),u[y+1]=1-en(g,l,"y","x",s,t);break}}static fromJSON(e){return new ps(e.width,e.height,e.depth,e.segments,e.radius)}}const p0=(i,e)=>Math.atan2(Math.sin(e-i),Math.cos(e-i)),m0=(i,e)=>Math.atan2(e[0]-i[0],e[1]-i[1]),ln=(i,e)=>i.robots[e];function Hi([i,e],t){return t===void 0?[i,e-.91]:t===2?[i,e+1]:[i+1.05,e]}class dc{constructor(e){this.ep=e;for(const t of Object.keys(e.layout.starts))this.tracks.set(t,[])}ep;tracks=new Map;length=0;eventIndex=-1;parkingPoint(e,t,n){const r=this.ep.frames[t],s=ln(r,e);if(e!=="Patch"||!n)return s;const o=ln(r,"Jack"),a=s[0]-o[0],c=s[1]-o[1];if(Math.abs(a)+Math.abs(c)!==1)return s;if(r.fork_online===!1)return[s[0]+.16*a,s[1]+.16*c];const l=ln(this.ep.frames[t-1],e);return l[0]===s[0]&&l[1]===s[1]?[n.x,n.z]:s}duringHandling(e,t,n,r,s){const o=this.ep.layout,a=ln(t,e),c=h=>m0(a,h),l=t.motion;if(n){if(r==="repair"){if(e==="Jack")return c(ln(t,s))-.65;if(e===s)return c(ln(t,"Jack"))}return e!==s?void 0:r==="collect"?c([n.shelf[0],n.row-1.04]):r==="stage"?c(ln(t,n.courier)):r==="manifest"?c(Hi(n.desk,n.row)):r==="load"?t.cargoByBag?.[n.id].holder===e||a[0]>n.unload[0]+1?Math.PI/2:c(ln(t,n.courier)):void 0}if(!(!l||l.kind==="move")){if(l.kind==="repair"&&e===l.to)return c(ln(t,l.actor))-.65;if(e===l.actor){if(l.kind==="pick")return c([o.shelf[0],0]);if(l.kind==="place")return c([o.socket[0],o.socket[1]-.8]);if(l.kind==="scan"&&o.desk)return c(Hi(o.desk));if(l.kind==="transfer"||l.kind==="repair"){const h=ln(t,l.from===e?l.to:l.from);if(l.kind==="repair")return c(ln(t,l.to));if(h)return c(h)}}}}extend(){const{frames:e,events:t,layout:n}=this.ep;for(;this.length<e.length;this.length++){const r=this.length,s=e[r];for(;this.eventIndex+1<t.length&&t[this.eventIndex+1].tick<=(r===0?0:r-1);)this.eventIndex++;const o=n.yard?t[this.eventIndex]?.planGraph?.nodes.filter(a=>a.state==="running")??[]:[];for(const[a,c]of this.tracks){const l=c[r-1],[h,d]=this.parkingPoint(a,r,l);if(!l){c.push({x:h,z:d,yaw:.22,distance:0});continue}const m=h-l.x,u=d-l.z,_=Math.hypot(m,u),g=o.find(v=>v.actor===a||a==="Jack"&&v.op.endsWith("/repair")),[p,f]=g?.op.split("/")??[],y=n.yard?.orders.find(v=>v.id===p),b=_?Math.atan2(m,u):this.duringHandling(a,s,y,f,g?.actor??"");c.push({x:h,z:d,distance:l.distance+_,yaw:l.yaw+(b===void 0?0:p0(l.yaw,b))})}}}sample(e,t){this.extend();const n=this.tracks.get(e),r=Math.min(Math.floor(t),n.length-1),s=n[r],o=n[r+1]??s,a=Math.min(1,t-r),c=o.yaw-s.yaw,l=o.distance>s.distance,h=l?Math.min(.42,Math.abs(c)*.16):0,d=St.clamp((a-h)/(1-h),0,1),m=n[r-1],u=n[r+2],_=(b,v)=>v.x-b.x===o.x-s.x&&v.z-b.z===o.z-s.z,g=l&&h<.01&&m&&_(m,s)?1:0,p=l&&u&&_(o,u)?1:0,f=d*d*(3-2*d)+g*d*(1-d)*(1-d)-p*d*d*(1-d),y=s.yaw+c*St.smoothstep(a,0,h||.72);return{x:St.lerp(s.x,o.x,f),z:St.lerp(s.z,o.z,f),yaw:y,distance:St.lerp(s.distance,o.distance,f)}}}function g0(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},o={},a=i[0].morphTargetsRelative,c=new Gt;let l=0;for(let h=0;h<i.length;++h){const d=i[h];let m=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const u in d.attributes){if(!n.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+u+'" attribute exists among all geometries, or in none of them.'),null;s[u]===void 0&&(s[u]=[]),s[u].push(d.attributes[u]),m++}if(m!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const u in d.morphAttributes){if(!r.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[u]===void 0&&(o[u]=[]),o[u].push(d.morphAttributes[u])}if(e){let u;if(t)u=d.index.count;else if(d.attributes.position!==void 0)u=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,u,h),l+=u}}if(t){let h=0;const d=[];for(let m=0;m<i.length;++m){const u=i[m].index;for(let _=0;_<u.count;++_)d.push(u.getX(_)+h);h+=i[m].attributes.position.count}c.setIndex(d)}for(const h in s){const d=Cl(s[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,d)}for(const h in o){const d=o[h][0].length;if(d===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let m=0;m<d;++m){const u=[];for(let g=0;g<o[h].length;++g)u.push(o[h][g][m]);const _=Cl(u);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(_)}}return c}function Cl(i){let e,t,n,r=-1,s=0;for(let l=0;l<i.length;++l){const h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=h.gpuType),r!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*t}const o=new e(s),a=new rn(o,t,n);let c=0;for(let l=0;l<i.length;++l){const h=i[l];if(h.isInterleavedBufferAttribute){const d=c/t;for(let m=0,u=h.count;m<u;m++)for(let _=0;_<t;_++){const g=h.getComponent(m,_);a.setComponent(m+d,_,g)}}else o.set(h.array,c);c+=h.count*t}return r!==void 0&&(a.gpuType=r),a}function mn(i,e=[]){const t=i.children.filter(a=>a instanceof Ct&&a.visible&&!a.children.length&&!e.includes(a)&&a.material instanceof rc&&!a.material.map&&!a.material.vertexColors&&a.material.emissive.getHex()===0);if(t.length<2)return;const n=t.map(a=>{const c=a.geometry.index?a.geometry.toNonIndexed():a.geometry.clone();a.updateMatrix(),c.applyMatrix4(a.matrix);for(const h of Object.keys(c.attributes))h!=="position"&&h!=="normal"&&c.deleteAttribute(h);const l=new Float32Array(c.getAttribute("position").count*3);for(let h=0;h<l.length;h+=3)a.material.color.toArray(l,h);return c.setAttribute("color",new rn(l,3)),c}),r=g0(n),s=new Ed({vertexColors:!0}),o=new Ct(r,s);o.castShadow=!0,o.receiveShadow=!0,i.add(o);for(const a of t)i.remove(a),a.geometry.dispose(),a.material.dispose();for(const a of n)a.dispose()}function In(i){i.traverse(e=>{e.castShadow=!1})}function da(i,e,t,n=.016){const r=[0,n,0],s=[.06,.09,.08,.4],o=[],a=24;for(const[h,d]of[[.64,.29],[1,0]])for(let m=0;m<a;m++){const u=2*Math.PI*m/a;r.push(e*h*Math.sin(u),n,t*h*Math.cos(u)),s.push(.06,.09,.08,d)}for(let h=0;h<a;h++){const d=1+h,m=1+(h+1)%a;o.push(0,d,m,d,d+a,m+a,d,m+a,m)}const c=new Gt;c.setAttribute("position",new ht(r,3)),c.setAttribute("color",new ht(s,4)),c.setIndex(o);const l=new Ct(c,new Ji({vertexColors:!0,transparent:!0,depthWrite:!1,side:jt,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-1,forceSinglePass:!0}));i.add(l)}function uc(i,e){return Math.min(Math.max(1.65,window.devicePixelRatio||1),3,Math.sqrt(83e5/(i*e)))}function fc(i,e){new ResizeObserver(e).observe(i);function t(){window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`).addEventListener("change",()=>{e(),t()},{once:!0})}t()}const Be=12621654,je=4216916,fi=1584690,Et=15785648,Wo={Wick:15966276,Skim:7522726,Jack:6332112,Patch:6928305},_0=new I(0,1,0),Ne=(i,e=0,t=1)=>St.smoothstep(i,e,t);function mt(i,e,t,n,r,s,o=!1){const a=new rc({color:t,roughness:.62,metalness:.16,emissive:o?t:0,emissiveIntensity:o?.6:0}),c=new Ct(e,a);return c.position.set(n,r,s),c.castShadow=!0,c.receiveShadow=!0,i.add(c),c}function z(i,e,t,n,r,s,o,a,c=0){return mt(i,c&&(c>=.016||Math.min(e,t,n)>.065)?new ps(e,t,n,c<.055?1:2,Math.min(c,t/2,e/2,n/2)):new vi(e,t,n),r,s,o,a)}function ft(i,e,t,n,r,s,o){return mt(i,new gi(e,e,t,24),n,r,s,o)}function pc(i,e,t,n,r,s){z(i,n,r,s,12423774,e,r/2,t,.035);for(const h of[-1,1]){const d=t+h*s/2;for(const u of[-.32,.32])z(i,.055,r*.97,.019,6452075,e+u*n,r/2,d);for(const u of[.11,.87])z(i,n-.012,r*.12,.028,14728067,e,u*r,d);const m=z(i,n*.81,r*.076,.016,14728067,e,r/2,d);m.rotation.z=h*Math.atan2(r*.59,n*.79)}for(const h of[-.32,.32])z(i,.056,.016,s,6452075,e+h*n,r+.003,t);const l=z(i,.125,.105,.016,Et,e+.09,r*.63,t+s/2+.018,.006);l.rotation.z=-.1}function xn(i,e,t,n,r,s,o,a="#244841",c="#ffe8aa"){const l=document.createElement("canvas");l.width=768,l.height=Math.round(768*n/t);const h=l.getContext("2d");h.fillStyle=a,h.fillRect(0,0,l.width,l.height),h.strokeStyle=c,h.lineWidth=3,h.strokeRect(6,6,l.width-12,l.height-12),h.fillStyle=c,h.textAlign="center",h.textBaseline="middle",h.font="bold "+Math.round(Math.min(l.height*.61,l.width/(e.length*.65)))+"px sans-serif",h.fillText(e,l.width/2,l.height*.53);const d=new yd(l);d.colorSpace=Bt;const m=new Ct(new Mr(t,n),new Ji({map:d,side:jt}));return m.position.set(r,s,o),i.add(m),m}class Pl{constructor(e,t,n){this.body=e,this.shoulder=t?new I(.36,.5,.12):new I(.34,.71,.03),this.upper=t?.63:.91,this.lower=t?.61:.84;const r=new ot;e.add(r);const s=t?Wo.Patch:Wo.Wick;for(const[o,a]of[this.upper,this.lower].entries()){const c=new ot;z(c,o?.095:.14,a,.14,o?Et:s,0,0,0,.045),z(c,.042,a*.65,.043,Be,.074,0,0,.012),mn(c),r.add(c),this.links.push(c)}for(let o=0;o<3;o++){const a=mt(r,new zt(o===2?.079:.115,18,12),o===1?Be:je,0,0,0);if(o<2){const c=ft(a,o===0?.061:.071,.032,Be,o===0?.095:.102,0,0);c.rotation.z=Math.PI/2}this.joints.push(a)}if(r.add(this.hand),t){z(this.hand,.17,.17,.28,s,0,0,-.18,.05),this.hand.add(this.bit);const o=ft(this.bit,.082,.12,je,0,0,-.085);o.rotation.x=Math.PI/2;const a=mt(this.bit,new gi(n?.018:.043,n?.026:.043,.12,6),n?7597518:Be,0,0,-.057);a.rotation.x=Math.PI/2,z(this.bit,.026,.023,.08,Et,.046,.012,-.06)}else{z(this.hand,.37,.095,.12,je,0,.045,-.15,.025);for(const o of[-1,1]){const a=z(this.hand,.052,.09,.27,Et,o*.21,.033,-.013,.015);z(a,.069,.038,.082,fi,-o*.013,-.035,.075,.01),this.fingers.push(a)}}this.pose(this.shoulder.clone().add(new I(.12,.11,.48)),1,0)}body;shoulder;links=[];joints=[];hand=new ot;fingers=[];bit=new ot;upper;lower;pose(e,t,n){const r=e.clone().sub(this.shoulder),s=Math.hypot(r.x,r.z),o=St.clamp(r.length(),Math.abs(this.upper-this.lower)+.001,this.upper+this.lower-.001),a=r.clone().normalize(),c=this.shoulder.clone().addScaledVector(a,o),l=(this.upper*this.upper-this.lower*this.lower+o*o)/(2*o),h=Math.sqrt(Math.max(0,this.upper*this.upper-l*l));let d=s>.001?new I(-a.y*r.x/s,s/r.length(),-a.y*r.z/s):new I(1,0,0);const m=new I(.78,.85,-.08);m.addScaledVector(a,-m.dot(a)),m.lengthSq()>.08&&(d=m.normalize());const u=this.shoulder.clone().addScaledVector(a,l).addScaledVector(d,h),_=[this.shoulder,u,c];return this.links.forEach((g,p)=>{g.position.copy(_[p]).lerp(_[p+1],.5),g.quaternion.setFromUnitVectors(_0,_[p+1].clone().sub(_[p]).normalize())}),this.joints.forEach((g,p)=>g.position.copy(_[p])),this.hand.position.copy(c),this.hand.rotation.y=Math.atan2(r.x,r.z),this.fingers.forEach((g,p)=>g.position.x=(p?1:-1)*(.256+.075*t)),this.bit.rotation.z=n,this.body.localToWorld(c.clone())}}function mc(i,e,t,n,r,s=.12){const o=new ot;o.position.set(e,n,t),i.add(o);const a=ft(o,n,s,fi,0,0,0);a.rotation.z=Math.PI/2;const c=r*(s/2+.003),l=ft(o,n*.73,.012,6781819,c,0,0);l.rotation.z=Math.PI/2;const h=ft(o,n*.41,.021,Be,c+r*.008,0,0);h.rotation.z=Math.PI/2;for(let d=0;d<3;d++){const m=d*Math.PI*2/3,u=z(o,.011,n*.38,n*.115,Et,c+r*.012,Math.cos(m)*n*.51,Math.sin(m)*n*.51);u.rotation.x=m}return mn(o),{spin:o,side:r,radius:n}}function gc(i,e,t){i.body.position.set(e.x,t,e.z),i.body.rotation.y=e.yaw;const n=i.body.scale.x;for(const r of i.wheels){const s=e.distance/n-r.spin.position.x*(e.yaw-.22);r.spin.rotation.x=s/r.radius}i.body.updateMatrixWorld(!0)}function _c(i,e,t){for(const[n,r]of(i.beacons??[]).entries()){const s=t?.4+.95*(.5+.5*Math.sin(e*3.2+n*Math.PI)):.14;r.material.emissiveIntensity=s}}function vc(i,e,t,n,r){const s=new ot;return s.rotation.y=e?Math.PI/2:0,i.add(s),t.flatMap(o=>[-1,1].map(a=>mc(s,a*r,o,n,a,.095)))}function xc(i,e){const t=new ot,n=Wo[i],r=[],s={body:t,wheels:r},o=i==="Skim",a=i==="Patch",c=i==="Jack",l=o?.097:a?.14:.16;z(t,o?.81:.76,o?.14:.26,a?.78:.83,n,0,o?.134:.29,0,.09),z(t,o?.75:.71,.052,.76,je,0,o?.085:.18,0,.024);for(const u of[-1,1])for(const _ of[-.25,.245])r.push(mc(t,u*.374,_,l,u));z(t,o?.65:.66,.056,.072,je,0,o?.09:.235,o?.416:.407,.017);for(const u of[-1,1])z(t,.07,.031,.021,16767129,u*.26,o?.096:.241,o?.455:.447,.007),o||z(t,.037,.075,.21,Et,u*.373,.335,-.16,.01);let h=.14,d=.421;if(i==="Wick"){ft(t,.16,.5,je,-.08,.62,-.14);for(const u of[.49,.62,.75])ft(t,.168,.046,Be,-.08,u,-.14);ft(t,.095,.44,Et,-.08,.91,-.14),z(t,.61,.39,.48,n,-.07,1.15,-.11,.115),z(t,.56,.054,.46,Et,-.07,1.36,-.11,.024),ft(t,.025,.16,Be,-.26,1.43,-.22),mt(t,new zt(.046,12,10),Et,-.26,1.53,-.22,!0),z(t,.43,.145,.17,je,.13,.695,.015,.035),z(t,.23,.09,.133,Be,.19,.776,.015,.025),s.arm=new Pl(t,!1,!1),h=1.15,d=.139}else if(c){z(t,.62,.47,.49,n,0,.57,-.13,.105),z(t,.62,.065,.49,Et,0,.807,-.13,.026);const u=new ot,_=new ot;u.position.set(0,.23,.32),t.add(u);for(const p of[-1,1])z(u,.086,.9,.105,Be,p*.255,.41,0,.023),z(u,.036,.72,.042,Et,p*.255,.4,.072,.01),z(_,.102,.057,.53,je,p*.185,0,.19,.018),z(_,.104,.059,.093,Et,p*.185,0,.415,.014);z(u,.58,.085,.11,je,0,.84,0,.022);const g=mt(u,new gi(.117,.117,.045,20),11032627,.27,.21,.072);g.rotation.x=Math.PI/2,s.collarRing=g,z(_,.52,.12,.11,je,0,.046,-.005,.02),u.add(_),s.collar=mt(u,new gi(.077,.077,.07,6),16763763,.27,.21,.104),s.collar.rotation.x=Math.PI/2,s.mast=u,s.fork=_,ft(t,.083,.09,Be,-.21,.86,-.16),s.light=mt(t,new zt(.077,14,12),16737865,-.21,.93,-.16,!0),h=.61,d=.125}else if(a){z(t,.66,.44,.64,15328718,-.035,.55,-.095,.095),z(t,.68,.075,.68,16117462,-.035,.79,-.1,.035),z(t,.69,.08,.72,4427146,-.035,.4,-.065,.026),z(t,.6,.15,.2,14214361,-.035,.455,.245,.065),z(t,.55,.17,.045,5402484,-.035,.645,.227,.045);for(const u of[-1,1]){const _=-.035+u*.336;z(t,.018,.14,.19,4679532,_,.65,.087,.012);const g=ft(t,.125,.022,3307124,_,.594,-.185);g.rotation.z=Math.PI/2,z(t,.015,.15,.043,16772551,_+u*.02,.594,-.185,.006),z(t,.016,.043,.15,16772551,_+u*.022,.594,-.185,.006),z(t,.08,.039,.065,16168548,u*.244,.49,.338,.009),z(t,.005,.23,.025,8559e3,_,.595,-.035)}for(const u of[-.17,.1])z(t,.24,.28,.024,13095881,u,.55,-.417,.02),z(t,.15,.084,.026,5138796,u,.618,-.435,.009);z(t,.4,.095,.021,3438460,-.035,.475,-.445,.007);for(const u of[-.19,-.09,.01,.11]){const _=z(t,.032,.075,.009,16308117,u,.475,-.459,.003);_.rotation.z=-.55}z(t,.125,.036,.016,3508361,-.17,.558,-.447,.003),z(t,.037,.125,.017,3508361,-.17,.558,-.449,.003),z(t,.44,.04,.125,je,-.035,.844,-.045,.018),s.beacons=[6675688,16756054].map((u,_)=>mt(t,new ps(.15,.077,.1,2,.025),u,-.168+_*.268,.896,-.045,!0));for(const u of[-.33,-.28,-.23])z(t,.23,.014,.017,je,-.045,.835,u);s.arm=new Pl(t,!0,e),h=.597,d=.242}else{z(t,.64,.045,.6,je,0,.222,-.02,.018);for(const u of[-1,1])z(t,.047,.037,.56,Be,u*.303,.248,-.018,.012),z(t,.061,.065,.16,4424824,u*.346,.201,-.235,.014);for(const u of[-.17,0,.17])z(t,.52,.012,.034,7967115,0,.25,u,.004)}const m=i==="Wick"?-.07:a?-.035:0;z(t,o?.47:.45,o?.11:.193,.044,fi,m,h,d,.04);for(const u of[-1,1])mt(t,new zt(o?.037:.048,14,10),16773054,m+u*.114,h,d+.021,!0).scale.set(.82,1,.61);if(i==="Wick"){for(const u of[-.28,-.195,-.11])z(t,.018,.035,.046,je,-.371,1.14,u,.004);z(t,.29,.026,.055,Be,-.07,1.258,.146,.009)}if(c)for(const u of[-1,1])z(t,.045,.27,.095,3163733,u*.277,.54,-.315,.012),z(t,.075,.055,.075,16768135,u*.23,.785,.127,.013);if(o||z(t,.08,.017,.013,10992299,m,h-.06,d+.025,.006),i==="Wick"){z(t,.55,.036,.15,n,-.07,1.276,.114,.017);for(const u of[-1,1]){const _=ft(t,.108,.044,je,-.07+u*.3,1.13,-.096);_.rotation.z=Math.PI/2;const g=ft(t,.071,.012,Be,-.07+u*.326,1.13,-.096);g.rotation.z=Math.PI/2}}else if(c){z(t,.58,.042,.37,8627881,0,.795,-.075,.017);for(const u of[-1,1]){z(t,.08,.025,.39,Et,u*.3,.405,.03,.009);for(const _ of[-.17,-.085,0]){const g=z(t,.01,.083,.042,16762475,u*.382,.305,_);g.rotation.x=-.5}}}else if(a)for(const u of[-1,1])z(t,.014,.022,.55,15772770,-.035+u*.345,.445,-.065,.005),mt(t,new zt(.061,16,10),u<0?8382445:16758876,-.035+u*.134,.921,-.045).scale.set(1.05,.58,.69);else for(const u of[-1,1]){z(t,.049,.047,.49,13163720,u*.343,.221,-.008,.018);for(const _ of[-.08,0,.08])z(t,.014,.016,.036,3693399,u*.371,.223,_)}for(const u of[-1,1]){const _=z(t,.036,o?.018:.03,.015,9158339,m+u*(o?.2:.19),h,d+.025,.006);_.rotation.z=u*.2}return mn(t,[s.light,...s.beacons??[]]),s.fork&&mn(s.fork),s.mast&&mn(s.mast,[s.collar,s.collarRing]),In(t),da(t,.58,.62),s}function Mc(i,e,t="47"){mt(i,new la([new Ue(.12,.025),new Ue(.222,.055),new Ue(.24,.18),new Ue(.205,.3),new Ue(.109,.39),new Ue(.09,.424),new Ue(.134,.479),new Ue(.086,.48)],36),14174524,0,0,0).scale.set(1.02,e/18,.78);for(const o of[-1,1]){const a=mt(i,new rs(.222,.007,5,24),16228471,0,.191*e/18,0);a.rotation.y=o*.72,a.scale.set(.87,.79*e/18,1)}const r=mt(i,new rs(.101,.02,8,24),Be,0,.402*e/18,0);r.rotation.x=Math.PI/2,r.scale.y=.82,z(i,.103,.14,.028,Et,.09,.3*e/18,.155,.009).rotation.z=-.22;const s=xn(i,t,.125,.103,0,.19*e/18,.188,"#e7d6a6","#713924");s.rotation.z=.06,z(i,.46,.036,.4,je,0,.004,0,.025),mn(i),In(i)}function Wn(i,e,t,n){const r=Math.max(i.y,e.y)+n,s=i.clone().lerp(e,Ne(t,.23,.72));return s.y=t<.45?St.lerp(i.y,r,Ne(t,0,.26)):St.lerp(r,e.y,Ne(t,.72,1)),s}function Sc(i,e){const t=e==="Wick"?new I(.4,.75,.49):e==="Jack"?new I(0,.36,.56):new I(0,.27,-.015);return i.body.localToWorld(t)}function yc(i,e){const t=i.mast.worldToLocal(e.clone());i.fork.position.set(0,Math.max(-.07,t.y-.046),St.clamp(t.z-.215,-.25,.57))}function Ec(i,e,t,n,r){const s=t===void 0?0:Math.max(0,e-t),o=n||t===void 0?0:(.13+.87*Ne(s,0,.52))*(1-Ne(r,.42,.94));i.mast.rotation.z=o*(-.63+(s<.55?.065*Math.sin(s*15)*(1-Ne(s,.18,.55)):0)),i.mast.rotation.x=o*.08;const a=i.collarRing.material,c=t===void 0?11032627:n?6670244:15893072;a.color.setHex(c),a.emissive.setHex(t===void 0?0:c),a.emissiveIntensity=n?.33:.46,i.light.visible=!n,i.light.scale.setScalar(1.04),i.body.updateMatrixWorld(!0)}class v0{constructor(e,t,n){this.ep=t,this.drive=new dc(t);const r=t.layout.yard,s=t.layout.width,o=t.layout.depth,a=(s-1)/2,c=(o-1)/2;z(e,s+1.12,.43,o+1.12,7429189,a,-.29,c,.15),z(e,s+.87,.1,o+.85,Be,a,-.12,c),z(e,s,.12,o,5795179,a,-.055,c);const l=[6261629,7309715,10453604];for(const[h,d]of r.orders.entries()){const m=d.row,u=l[h];z(e,s-.1,.032,3.8,h%2?7766396:7174516,a,.017,m),z(e,20,.025,.07,u,12,.052,m);for(const v of[1,4,7,10,13,16,19,22])z(e,.055,.024,3.8,5399391,v,.042,m);for(const v of[-1.4,1.4])z(e,.28,.74,1.8,je,12,.39,m+v,.05),z(e,.33,.06,1.8,Be,12,.77,m+v);z(e,.34,.13,1.18,u,12,.91,m);const _=d.shelf[0];z(e,1.64,.12,.69,Be,_,1.18,m-1.04);for(const v of[-.77,.77])for(const w of[-.4,.4])z(e,.12,1.17,.12,je,_+v,.57,m-1.04+w*.71);z(e,1.3,.55,.65,9136454,_,.32,m-1.04,.04);const[g,p]=Hi(d.desk,d.row);z(e,.69,.62,.52,je,g,.32,p,.045),z(e,.65,.06,.45,Et,g,.65,p,.02),z(e,2.3,.07,1,u,15.5,.06,m),z(e,.34,.43,.48,je,23.85,.24,m,.04);for(const v of[-.25,.25])z(e,.83,.09,.045,Be,23.94,.625,m+v);for(let v=0;v<.8;v+=.15){const w=ft(e,.045,.48,je,23.57+v,.645,m);w.rotation.x=Math.PI/2}if(d.id==="47"){z(e,.82,.12,.79,5213569,d.lift[0],.1,d.lift[1],.035);for(const v of[-.24,0,.24])z(e,.63,.03,.045,Be,d.lift[0],.175,d.lift[1]+v)}const f=new ot;f.position.set(24.55,.08,m),this.coaches.add(f),z(f,1.37,.12,3.48,Be,0,.545,0,.04),z(f,.1,.96,3.48,3233895,.63,.98,0,.04);for(const v of[-1,1])z(f,1.36,.96,1.16,3233895,0,.98,v*1.16,.065),z(f,1.45,.16,1.27,je,0,1.49,v*1.18,.055),z(f,.055,.9,.065,Be,-.66,.97,v*.6,.012);z(f,.5,.14,1.19,je,.47,1.48,0,.04);for(const v of[-1.25,-.67,.65,1.23])z(f,.04,.4,.39,15124357,-.68,1.02,v,.03);this.rail.push(...vc(f,!1,[-1.22,1.22],.215,.44)),mn(f),In(f),da(f,.88,1.88,-.045);const y=new ot;Mc(y,t.scenario.parcel_cm,d.id),e.add(y),this.bags.set(d.id,y);const b=xn(e,d.coach.toUpperCase()+"   /   BAG "+d.id,3.13,.4,21.7,1.03,m-1.28);b.rotation.y=-.38}e.add(this.coaches);for(const h of[24.1,24.95])z(e,.13,.1,23,je,h,-.01,10);for(let h=-1;h<21;h+=.55)z(e,1.45,.1,.16,5589561,24.52,-.085,h);for(const[h,d]of t.layout.obstacles)pc(e,h,d,.9,.64,.88);for(const[h,d]of Object.entries(r.bodies)){const m=xc(d,t.scenario.service_kit==="probe");m.body.scale.setScalar(.92),e.add(m.body),this.robots.set(h,m);const u=new Ct(new us(.63,.77,28),new Ji({color:15844211,side:jt}));u.rotation.x=-Math.PI/2,e.add(u),this.rings.set(h,u);const _=document.createElement("span");_.className="body-label junction-label working "+d.toLowerCase(),_.hidden=!0,n.append(_),this.labels.set(h,_)}ft(e,.09,2,je,23.8,1,11.85),this.light=mt(e,new zt(.21,12,8),15438455,23.8,2.12,11.85,!0),mn(e,[this.light])}ep;robots=new Map;bags=new Map;coaches=new ot;drive;rail=[];light;rings=new Map;labels=new Map;anchor(e){const t=this.robots.get(e);if(t)return t.body.position.clone().add(new I(0,.62,0));const n=this.ep.layout.yard.orders[0];if(e==="Socket")return new I(n.door[0],.92,n.door[1]);if(e==="Waybill")return new I(n.desk[0],.58,n.desk[1]);if(e==="Mail lift")return new I(n.lift[0],.45,n.lift[1])}dispose(){for(const e of this.labels.values())e.remove()}draw(e,t,n,r){const s=this.ep,o=s.frames[Math.floor(e)],a=s.layout.yard,c=s.events.filter(A=>A.tick<=e),h=c.at(-1)?.planGraph?.nodes.filter(A=>A.state==="running")??[],d=new Map(h.map(A=>[A.actor,A.op.split("/")[0]])),m=new Map,u=new Map;for(const[A,U]of this.robots){gc(U,this.drive.sample(A,e),.058);const N=this.rings.get(A);N.visible=d.has(A),N.position.set(U.body.position.x,.092,U.body.position.z),U.fork&&u.set(A,U.body.localToWorld(new I(0,.27,.41)))}const _=s.frames.find(A=>A.signal==="green")?.tick,g=_===void 0?0:Math.max(0,e-_);this.coaches.position.z=7.8*Ne(g,.6,6.6);for(const A of this.rail)A.spin.rotation.x=this.coaches.position.z/A.radius;this.light.material.color.setHex(o.signal==="green"?8446382:15698028),this.light.material.emissive.copy(this.light.material.color);const p=(A,U)=>this.robots.get(A).body.localToWorld(U),f=(A,U)=>s.frames[A].robots[U];function y(A,U,N){const V=c.filter(H=>H.kind==="assignment"&&H.active?.includes(A)).at(-1)?.tick;if(V===void 0)return 0;let Y=Math.floor(e);if(!N(Y))return 0;for(;Y>V&&N(Y-1);)Y--;return St.clamp((e-Y)/U,0,1)}const b=(A,U,N)=>{const V=f(A,U);return V[0]===N[0]&&V[1]===N[1]};for(const A of a.orders){const U=this.bags.get(A.id),N=o.cargoByBag[A.id].holder,V=new I(A.shelf[0],1.256,A.row-.82),Y=new I(24.57,.7,A.row+this.coaches.position.z),H=new I(23.86,.7,A.row),ee=j=>Sc(this.robots.get(j),a.bodies[j]),se=new I(A.lift[0],.29,A.lift[1]);let q=this.robots.has(N)?ee(N):N===A.coach?Y:N==="Mail lift"?se:V;const ve=A.picker,Fe=this.robots.has(ve)?p(ve,new I(.54,.74,.34)):V;let ze=N===ve?q:Fe,He=N===ve?0:1;a.bodies[N]==="Jack"&&u.set(N,q);for(const j of h.filter(Z=>Z.op.startsWith(A.id+"/"))){const Z=j.op.split("/")[1],de=j.actor;if(Z==="collect"){const me=y(j.uid,2,pe=>b(pe,de,A.shelf));ze=Fe.clone().lerp(V,Ne(me,0,.34)),He=1-Ne(me,.32,.45),me>.45&&(ze=q=Wn(V,ee(de),Ne(me,.45,1),.16))}else if(Z==="stage"){const me=y(j.uid,2,pe=>b(pe,ve,A.handoff)&&b(pe,A.courier,A.deck));q=Wn(ee(ve),ee(A.courier),Ne(me,0,.72),.15),ze=q.clone().lerp(Fe,Ne(me,.79,1)),He=Ne(me,.7,.79)}else if(Z==="load"){if(N===A.courier){const me=y(j.uid,2,D=>b(D,de,A.unload)&&b(D,A.courier,A.berth)),pe=ee(de),We=ee(A.courier),yt=me<.38?pe.clone().lerp(We,Ne(me,0,.37)):Wn(We,pe,Ne(me,.38,1),.06);u.set(de,yt),q=me<.38?We:yt}else if(N===de){const me=y(j.uid,2,We=>b(We,de,A.door)),pe=Wn(ee(de),H,Ne(me,0,.65),.06);q=me>.65?H.clone().lerp(Y,Ne(me,.65,.95)):pe.clone(),u.set(de,pe.lerp(ee(de),Ne(me,.74,1)))}}else if(Z==="hoist"&&N==="Mail lift"){const me=y(j.uid,14,pe=>s.frames[pe].cargoByBag[A.id].holder==="Mail lift");q=Wn(se,Y,me,.1)}}this.robots.has(ve)&&m.set(ve,{at:ze,open:He}),U.position.copy(q)}for(const[A,U]of m){const N=this.robots.get(A);N.arm.pose(N.body.worldToLocal(U.at.clone()),U.open,0)}const v=h.find(A=>A.op.endsWith("/repair")),w=this.robots.get("Jack"),R=this.robots.get(v?.actor??"Patch"),T=v?y(v.uid,4,A=>{const U=f(A,v.actor),N=f(A,"Jack");return Math.abs(U[0]-N[0])+Math.abs(U[1]-N[1])===1}):0,P=c.find(A=>A.kind==="fork fault");w&&Ec(w,e,P?.tick,o.fork_online!==!1,T);for(const[A,U]of u)yc(this.robots.get(A),U);if(R&&w){const A=new I(.58,.73,.38),U=R.body.worldToLocal(w.collar.getWorldPosition(new I));A.lerp(U,Ne(T,0,.22)*(1-Ne(T,.84,1))),R.arm.pose(A,0,Math.PI*14*T),_c(R,e,!!P&&o.fork_online===!1)}const S=s.layout.width,M=s.layout.depth,L=new I((S-1)/2,0,(M-1)/2);t.position.copy(L).add(r?new I(0,32,.01):new I(-3,22,25)),t.lookAt(L);const O=Math.max(M*.84,(S+1.4)/n);Object.assign(t,{left:-O*n/2,right:O*n/2,top:O/2,bottom:-O/2,near:.05,far:110}),t.updateProjectionMatrix(),t.updateMatrixWorld();for(const[A,U]of this.labels){const N=A==="Jack"&&o.fork_online===!1&&!d.has(A);if(U.hidden=!d.has(A)&&!N,U.hidden)continue;const V=this.robots.get(A).body.position.clone().add(new I(0,1.72,0)).project(t);U.style.left=(V.x+1)*50+"%",U.style.top=(1-V.y)*50+"%";const Y=A+" · "+(N?"forks":d.get(A));U.textContent!==Y&&(U.textContent=Y),U.classList.toggle("broken",N)}}}class ms{constructor(e){this.host=e,this.renderer=new f0({antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.renderer.shadowMap.autoUpdate=!1,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Wc,this.renderer.setClearColor(1649963,0),this.renderer.outputColorSpace=Bt,this.renderer.toneMapping=Fl,this.renderer.toneMappingExposure=1.08,e.append(this.renderer.domElement),this.renderer.domElement.setAttribute("aria-label","Animated postal depot and robot crew"),this.scene.add(this.root),this.scene.add(new wd(14479103,9541774,1.74));const t=new il(11460330,.76);t.position.set(3,6,-8),this.scene.add(t);const n=this.sun;n.position.set(0,12,8),n.target.position.set(6,0,3),n.castShadow=!0,n.shadow.mapSize.set(2048,2048),Object.assign(n.shadow.camera,{left:-12,right:12,top:12,bottom:-12,far:40}),n.shadow.normalBias=.025,this.scene.add(n,n.target),fc(e,()=>this.resize())}host;junction;drive;rail=[];liftRail;scene=new vd;root=new ot;camera=new ca;renderer;sun=new il(16769975,2.05);rigs={};names=[];labels=new Map;at=0;mailbag=new ot;shutter=new ot;gateLamp;windows=[];markers=new Map;ep;top=!1;review=!1;composition(e){this.review=e}ratio=1;motionScale=1;lateFrames=0;socket=new I;train;door;scanLine;signature;scanLamp;signalLamp;noteMovingFrame(e){this.lateFrames=e>48?this.lateFrames+1:0,!(this.lateFrames<5||this.motionScale<=.55)&&(this.lateFrames=0,this.motionScale=Math.max(.55,this.motionScale*.76),this.resize())}restoreDetail(){this.lateFrames=0,this.motionScale!==1&&(this.motionScale=1,this.resize())}resize(){const{width:e,height:t}=this.host.getBoundingClientRect();if(!e||!t)return;const n=uc(e,t),r=Math.min(n,Math.max(1,n*this.motionScale));this.renderer.setDrawingBufferSize(e,t,r),this.ratio=e/t,this.ep&&this.draw(this.at)}view(e){this.top=e,this.draw(this.at)}anchor(e){let t=this.junction?.anchor(e==="Fork"?"Jack":e);if(!this.junction){const n=this.rigs[e];if(n)t=n.body.position.clone().add(new I(0,e==="Wick"?1.06:e==="Skim"?.24:.64,0));else if(e==="Bag")t=this.mailbag.position.clone().add(new I(0,.32,0));else if(e==="Fork"&&this.rigs.Jack?.collar)t=this.rigs.Jack.collar.getWorldPosition(new I);else{const r=this.markers.get(e);r&&(t=r.position.clone().add(new I(0,e==="Waybill"?.53:.19,0)))}}if(t)return t.project(this.camera),{x:(t.x+1)/2,y:(1-t.y)/2}}focus(e){for(const[t,n]of this.markers)n.visible=e.includes(t)}load(e){this.ep=e,this.drive=new dc(e),this.at=0,this.rail=[],this.liftRail=void 0,this.train=void 0,this.door=void 0,this.scanLamp=void 0,this.scanLine=void 0,this.signature=void 0,this.signalLamp=void 0,this.names=Object.keys(e.layout.starts),this.rigs={};for(const g of this.labels.values())g.remove();this.labels.clear(),this.root.traverse(g=>{if(g instanceof Ct){g.geometry.dispose();for(const p of[g.material].flat())p.map?.dispose(),p.dispose()}}),this.root.clear(),this.windows=[],this.markers.clear(),this.shutter=new ot;const t=this.root,n=e.layout,r=(n.width-1)/2,s=(n.depth-1)/2;this.sun.position.set(r-6,14,s+6),this.sun.target.position.set(r,0,s);const o=Math.max(n.width*.64,n.depth*.8);if(Object.assign(this.sun.shadow.camera,{left:-o,right:o,top:o,bottom:-o}),this.sun.shadow.camera.updateProjectionMatrix(),this.renderer.shadowMap.needsUpdate=!0,this.junction?.dispose(),this.junction=void 0,n.yard){this.junction=new v0(t,e,this.host),this.draw(0),this.resize();return}z(t,n.width+1.05,.4,n.depth+1.84,7296828,r,-.31,s-.45,.12),z(t,n.width+.87,.12,n.depth+1.68,Be,r,-.16,s-.45,.055);for(let g=0;g<n.width;g++)for(let p=0;p<n.depth;p++){const f=(g+p)%2;z(t,.99,.12,.99,g<6?f?5664876:5400680:f?9733491:10259835,g,-.065,p)}if(n.depth>7){for(const g of[9.47,10.53])z(t,.035,.014,.95,13283192,g,.007,7);z(t,1.09,.014,.035,13283192,10,.007,7.45)}const a=26;for(const g of[-1,-.53])z(t,a+.5,.065,.07,je,(a-.5)/2,-.02,g);for(let g=0;g<=a-.5;g+=.52)z(t,.14,.08,.85,4933436,g,-.08,-.78);{const g=a-12.5,p=12.5+g/2;for(const f of[-1.11,-.42])z(t,g,.19,.09,je,p,-.22,f),z(t,g,.05,.14,10060889,p,-.33,f);for(let f=13;f<a;f+=2.08){z(t,.27,.21,1,je,f,-.4,-.77);for(const y of[-1.04,-.49]){z(t,.17,.8,.18,4347482,f,-.83,y);const b=z(t,1.18,.1,.1,6452340,f+.53,-.68,y);b.rotation.z=.46}z(t,.43,.23,.96,7038292,f,-1.25,-.77,.04)}}const c=new ot;c.position.set(9.65,0,-.73),t.add(c),this.train=c,this.rail=vc(c,!0,[-2,-1.4,1.4,2],.215,.34);{z(c,3.45,1.13,1.02,2312788,-.93,.88,0,.11),z(c,.81,1.13,1.02,2312788,2.23,.88,0,.1),z(c,1.07,1.11,.12,1517613,1.32,.87,-.44),z(c,5.19,.13,1.04,3160123,0,.39,.01,.035),z(c,1.14,.1,.95,12165750,1.33,.74,.05,.02);for(const g of[.8,1.84])z(c,.06,.88,.07,Be,g,.94,.48,.015),z(c,.18,.26,.27,9592896,g+.11,.88,-.15,.016);this.door=new ot,this.door.position.set(.23,.97,.55),c.add(this.door),z(this.door,1.04,.92,.07,3498346,0,0,0,.035);for(const g of[-.34,.34])z(this.door,.97,.025,.081,Be,0,g,.011);xn(this.door,"POST",.52,.19,0,.08,.045,"#254850","#f2d59d"),z(c,5.42,.055,1.14,Be,0,1.39,0,.021);for(const g of[-1.95,-.95,.05])z(c,.41,.068,.47,je,g,1.58,-.04,.033);xn(c,"MAIL  ·  COACH B",1.2,.18,1.34,1.38,.571,"#3e3931","#f7da9b")}z(c,5.42,.23,1.11,2308672,0,1.41,0,.11),z(c,5.22,.065,.055,Be,0,.65,.514);const l=.51,h=[-1.88,-1.23,-.58];for(const[g,p]of h.entries()){z(c,.54,.375,.045,2704714,p,1.04,l+.015,.026);const f=z(c,.46,.295,.02,4350819,p,1.04,l+.044,.009);f.name=`Coach_window_${g+1}`,this.windows.push(f)}xn(c,"M O O N M A I L",2.35,.23,0,.49,.515);for(const g of[-2.34,2.34])z(c,.33,.77,.025,2506051,g,.88,.516,.035),z(c,.21,.21,.032,Be,g,1.06,.529,.03),z(c,.05,.04,.04,Et,g+.08,.79,.54);for(const g of[7.1,12.35])ft(t,.135,.14,fi,g,.07,.28),ft(t,.046,1.7,je,g,.88,.28),ft(t,.12,.1,Be,g,1.73,.28),mt(t,new zt(.13,16,12),16764280,g,1.88,.28,!0),mt(t,new aa(.19,.13,16),je,g,2.02,.28);const d=xn(t,"NIGHT MAIL   •   PLATFORM 1",2.6,.32,9.7,1.9,-.52);for(const g of[8.55,10.85])ft(t,.048,d.position.y,je,g,d.position.y/2,-1.42),z(t,.08,.1,.96,je,g,d.position.y,-.98),z(t,.23,.13,.23,Be,g,.015,-1.42,.02);for(const g of[-2.51,-1.6,-.8,0,.8,1.6,2.51]){z(c,.021,.83,.035,4744291,g,.89,.5);for(const p of[.56,1.25])mt(c,new zt(.024,8,6),Be,g,p,.524)}for(const g of[-2.48,2.48]){const p=ft(c,.085,.045,Be,g,.57,.52);p.rotation.x=Math.PI/2,mt(c,new zt(.055,12,8),16763001,g,.57,.551,!0)}for(let g=0;g<n.depth;g++)g===2||g===5||(z(t,.27,.83,.99,je,6,.41,g,.03),z(t,.32,.055,.99,Be,6,.85,g));for(const g of[1.49,2.51])z(t,.34,1.89,.12,Be,6,.945,g,.025);z(t,.37,.16,1.15,fi,6,1.91,2),z(t,.1,.17,.36,fi,6.19,1.92,2,.025),this.gateLamp=mt(t,new zt(.087,14,10),8119464,6.253,1.93,2,!0);for(const g of[1.49,2.51])for(let p=0;p<4;p++)z(t,.348,.072,.129,fi,6,.17+p*.19,g,.008);this.shutter.position.set(6,0,2),t.add(this.shutter);for(let g=0;g<10;g++)z(this.shutter,.19,.17,1,g%2?9205089:10586479,0,.1+g*.18,0);for(const g of[4.48,5.52])z(t,.4,.76,.1,5680537,6,.38,g);z(t,.42,.12,1.13,6600353,6,.82,5);const m=n.shelf[0];for(const g of[m-.45,m+.45])for(const p of[-.38,.34])z(t,.065,1.66,.065,je,g,.83,p);for(const g of[.32,.82,1.43])z(t,1.09,.09,.85,Be,m,g,0);for(const g of[-.25,.18])for(const p of[.51,1.01])z(t,.31,.3,.35,11898464,m+g,p,0,.025);for(const[g,p]of n.obstacles.slice(2))pc(t,g,p,.76,.6,.7);const[u,_]=n.socket;z(t,.89,.87,.64,je,u,.435,_-.8,.065),z(t,.94,.06,.69,Be,u,.9,_-.8);{for(const y of[u-.22,u+.22])z(t,.055,.09,1.42,Be,y,.91,.48,.015);for(let y=-.14;y<1.22;y+=.19){const b=ft(t,.045,.48,je,u,.9,y);b.rotation.z=Math.PI/2}const[g,p]=Hi(n.desk??[9,3]);z(t,.72,.69,.4,3624529,g,.345,p,.045),z(t,.78,.065,.47,Be,g,.72,p,.025),z(t,.31,.04,.27,Et,g,.78,p,.01),this.scanLine=z(t,.235,.008,.025,10942161,g,.806,p,.003),this.scanLine.material.emissive.setHex(6347686),this.signature=new ot,this.signature.position.set(g,.806,p),t.add(this.signature),z(this.signature,.13,.005,.011,3695452,-.012,0,-.025),z(this.signature,.085,.005,.011,3695452,-.034,0,.004);const f=z(this.signature,.064,.005,.013,3439717,.054,.001,.04);f.rotation.y=-.38,xn(t,"WAYBILLS",.55,.13,g,.55,p+.206),this.scanLamp=mt(t,new zt(.062,12,10),11187867,g+.27,.82,p+.02,!0),ft(t,.064,1.6,je,12.16,.81,1.22),z(t,.33,.47,.21,2305587,12.16,1.58,1.22,.08),this.signalLamp=mt(t,new zt(.103,16,12),15628630,12.16,1.6,1.35,!0);for(const y of[1.5,4.5]){z(t,2.36,.031,.08,Et,9.35,.013,y,.012);for(const b of[8.35,9.05,9.75,10.45])z(t,.14,.04,.16,Be,b,.017,y,.012)}for(const y of[1,3.8,8,12])for(const b of[6.35,-.45])ft(t,.057,.025,Be,y,.018,b)}this.socket.set(u,.95,_-.8);for(const g of n.berths)for(const[p,f]of g)for(const y of[-.4,.4])z(t,.05,.012,.78,14663024,p+y,.006,f);xn(t,"SORTING HALL",2.38,.29,2.25,.33,n.depth-.26),xn(t,"PLATFORM  01",2.38,.29,9.6,.33,n.depth-.26),this.mailbag=new ot,Mc(this.mailbag,e.scenario.parcel_cm),t.add(this.mailbag);for(const g of this.names){const p=xc(g,e.scenario.service_kit==="probe");if(p.body.scale.setScalar(.94),this.rigs[g]=p,t.add(p.body),g==="Wick"&&(z(p.body,.68,.065,.36,3492178,-.07,1.385,-.03,.03),z(p.body,.56,.1,.35,4613489,-.07,1.431,-.1,.042),z(p.body,.085,.045,.025,Be,-.07,1.43,.09,.01)),g==="Jack")for(const y of[-1,1])z(p.body,.035,.07,.23,Et,y*.38,.295,-.17,.012);const f=document.createElement("span");f.className="body-label "+g.toLowerCase(),f.textContent=g,this.host.append(f),this.labels.set(g,f)}if(n.lift){for(const[f,y]of[n.lift,n.baggage].entries()){if(!y)continue;const[b,v]=y;z(t,.88,.12,.83,f?10191455:5351828,b,.05,v,.045);for(let R=0;R<5;R++)z(t,.72,.03,.045,Be,b,.12,v-.29+R*.14);xn(t,f?"BAGGAGE":"MAIL LIFT",.92,.2,b,.27,v+.42)}const[g,p]=n.lift;this.liftRail=new ot,this.liftRail.position.set(g,0,p-.42),t.add(this.liftRail);for(const f of[-.14,.14])z(this.liftRail,.048,.065,3.07,Be,f,.92,-1.53)}for(const[g,p]of Object.entries({...n.gates,...n.starts,Shelf:[n.shelf[0],0],Waybill:n.desk?Hi(n.desk):n.socket,Socket:n.socket,...n.lift?{"Mail lift":n.lift}:{}})){const f=new Ct(new us(.49,.56,40),new Ji({color:16768122,side:jt}));f.rotation.x=-Math.PI/2,f.position.set(p[0],g==="Shelf"?1.49:.024,p[1]),f.visible=!1,this.markers.set(g,f),t.add(f)}mn(c,this.windows),In(c),da(c,2.82,.7,.008),mn(this.shutter),In(this.shutter),this.liftRail&&In(this.liftRail),this.signature&&In(this.signature),this.scanLine&&In(this.scanLine),In(this.mailbag),mn(t,[this.gateLamp,this.signalLamp,this.scanLamp,this.scanLine]),this.draw(0),this.resize()}cameraShot(e,t){const n=this.ep,r=n.layout,s=new I(4.8,8.6,14.3),o=new I(-7.5,5.3,7.5),a=new I(-5.8,7.3,13),c=n.scenario.mission==="mail"&&this.review&&this.host.clientWidth>780,l=this.ratio*(c?.64:1),h={aim:new I((r.width-1)/2,.3,(r.depth-1)/2-.4),span:Math.max(r.depth*.86,((r.width+1.05)*.95+(r.depth+1.84)*.318+.18)/l),names:this.names,angle:s},d=(T,P,S,M,L=s)=>{const O=Math.min(n.frames.length-1,Math.max(0,T)),A=n.frames[Math.floor(O)],U=n.frames[Math.ceil(O)],N=Ne(O%1),V=new I(0,.53,0);if(M)V.set(M[0],.65,M[1]);else if(P.length)for(const Y of P){const H=A.robots[Y],ee=U.robots[Y];V.x+=St.lerp(H[0],ee[0],N)/P.length,V.z+=St.lerp(H[1],ee[1],N)/P.length}return{aim:V,span:Math.max(S,S*1.32/l),names:P,angle:L}},m=(T,P)=>{const S=T.motion;return T.kind==="jam"?d(P,[],4.7,r.gates.Shutter):T.kind==="fork fault"||["read","proposal"].includes(T.kind)&&(T.targetRevision??0)>1&&n.events.some(M=>M.kind==="fork fault"&&M.tick<T.tick)?d(P,["Jack"],3.12,void 0,a):T.kind==="repair"||S?.kind==="repair"||T.choices?.some(M=>M.repair)&&T.title.includes("repairs")?d(P,["Patch","Jack"],3.05,void 0,a):S?.kind==="move"?d(P,[S.actor],4.5,r.gates[String(T.proof?.rows[0]?.gate??"Hatch")]):S?.kind==="pick"||T.kind==="pick"?d(P,[S?.actor??T.actors[0]],3.25,[r.shelf[0],.64],o):S?.kind==="place"||T.kind==="place"||T.kind==="delivered"||T.kind==="feed"?d(P,T.actors,3.7,r.socket):T.kind==="dock"||T.choices?.some(M=>M.via)&&T.title.includes("lift")?d(P,["Skim"],5.6,r.lift):S?.kind==="transfer"||T.kind==="transfer"?d(P,T.actors,3.9):T.kind==="decision"&&T.actors.length===1?d(P,T.actors,4.8,void 0,T.actors[0]==="Wick"?o:s):h},u=n.events.filter(T=>T.tick<=e&&T.kind!=="move"&&T.kind!=="order"),_=u.at(-1),g=u.at(-2);let p=_?m(_,e):h;const f=g&&_?m(g,_.tick):h;let b=_?_.kind==="fork fault"?1:Ne(e-_.tick,0,1.15):1;if(n.scenario.mission==="mail"){const T=n.events.filter(P=>P.kind!=="completed"&&P.tick<=e).at(-1);if(T?.kind==="read"&&T.targetRevision===1){p=d(e,["Wick","Skim"],3.95,void 0,new I(4.8,4.9,11));const P=Ne(e-T.tick,.18,.43);p.aim.lerp(h.aim,1-P),p.angle.lerp(h.angle,1-P),p.span=St.lerp(h.span,p.span,P)}else if(T?.kind==="assignment"){const P=T.op,S=T.actors[0];if(P==="collect")p=d(e,[S],3.9,[r.shelf[0],1.2],o);else if(P==="stage")p=d(e,["Wick","Skim"],4.4);else if(P==="cross")p=d(e,["Skim"],4.2,r.gates.Hatch);else if(P==="manifest")p=d(e,[S],4.1,r.desk,a);else if(P==="repair")p=d(e,[S,"Jack"],3.24,void 0,new I(-11.8,5.9,3.2));else if(P==="load"&&t?.kind==="place")p=d(e,[],4.1,[r.socket[0],r.socket[1]-.85],new I(-6.5,5,9));else if(P==="load"&&t?.kind==="transfer")p=d(e,["Skim",S],3.5,void 0,new I(-4.6,4.1,9));else if(P==="load"||P==="hoist")p=d(e,[S],5.6,void 0,a);else{const M=n.frames.find(O=>O.signal==="green")?.tick,L=M===void 0?0:Ne(e-M,1.4,6);p=d(e,[],7,[10+4.5*L,1])}}else T?.kind==="fork fault"?p=d(e,["Jack"],3.55,void 0,new I(5.2,5.8,12)):T&&["read","proposal","rejected"].includes(T.kind)&&(T.targetRevision??0)>1&&n.events.some(P=>P.kind==="fork fault"&&P.tick<T.tick)||T?.kind==="decision"&&(T.planGraph?.revision??0)>1?p=d(e,["Jack",...n.layout.starts.Patch?["Patch"]:[]],4.9,void 0,a):T?.kind==="delivered"?p=d(e,[],8.6,[14.5,1]):p=h;b=1}const v=f.aim.clone().lerp(p.aim,b);let w=St.lerp(f.span,p.span,b),R=p.names;this.top&&(v.copy(h.aim),w=Math.max(r.depth+.68,(r.width+.94)/this.ratio),R=this.names),this.camera.position.copy(v).add(this.top?new I(0,25,.012):f.angle.clone().lerp(p.angle,b)),this.camera.lookAt(v),Object.assign(this.camera,{left:-w*this.ratio*(c?.692:.5),right:w*this.ratio*(c?.308:.5),top:w/2,bottom:-w/2,near:.05,far:85}),this.camera.updateProjectionMatrix(),this.camera.updateMatrixWorld();for(const[T,P]of this.labels){const M=this.rigs[T].body.position.clone().add(new I(0,T==="Wick"?1.75:T==="Skim"?.94:1.22,0)).project(this.camera),L=(M.x+1)*50,O=(1-M.y)*50;P.hidden=!R.includes(T)||L<4||L>96||O<7||O>92,P.style.left=L+"%",P.style.top=O+"%",P.classList.toggle("working",t?.actor===T)}}draw(e){if(!this.ep?.frames.length)return;if(this.junction){this.at=St.clamp(e,0,this.ep.frames.length-1),this.junction.draw(this.at,this.camera,this.ratio,this.top),this.renderer.render(this.scene,this.camera);return}const t=this.ep,{frames:n,layout:r}=t,s=St.clamp(e,0,n.length-1);this.at=s;const o=Math.floor(s),a=n[o],c=n[Math.min(o+1,n.length-1)],l=Ne(s-o);let h=[c.motion,a.motion].find(A=>A&&A.start<=s&&A.end>s);if(h||(h=t.events.find(A=>A.motion&&A.motion.start===s)?.motion),!h&&!t.scenario.service_kit){const A=t.events.find(U=>["pick","place","transfer"].includes(U.kind)&&s>=U.tick-2&&s<U.tick);A&&(h={kind:A.kind,actor:A.actors[0],from:n[A.tick-2].holder,to:n[A.tick].holder,start:A.tick-2,end:A.tick})}const d=h?St.clamp((s-h.start)/(h.end-h.start),0,1):0,m=new I(r.shelf[0],1.5,.08);for(const A of this.names){const U=this.rigs[A],N=U.body;gc(U,this.drive.sample(A,s),0),this.markers.get(A)?.position.set(N.position.x,.024,N.position.z)}const u=this.rigs.Jack,_=t.events.find(A=>A.kind==="fork fault"&&A.tick<=s),g=h?.kind==="repair"?d:0;Ec(u,s,_?.tick,a.fork_online!==!1,g);const p=n.find(A=>A.signal==="green")?.tick,f=p===void 0?0:Math.max(0,s-p),y=6.8*Ne(f,1.4,6);if(this.liftRail){const A=h?.kind==="dock"?Ne(d,.25,1):a.holder==="Mail lift"?1:0;this.liftRail.visible=A>.001,this.liftRail.scale.z=Math.max(.001,A)}this.train&&(this.train.position.x=9.65+y);for(const A of this.rail)A.spin.rotation.x=y/A.radius;if(this.door&&(this.door.position.x=.23+1.11*Ne(f,0,1.4)),this.signalLamp){const A=a.signal==="green"?7398573:15760743;this.signalLamp.material.color.setHex(A),this.signalLamp.material.emissive.setHex(A)}if(this.scanLine&&r.desk&&(this.scanLine.visible=h?.kind==="scan",this.scanLine.position.z=Hi(r.desk)[1]-.095+.19*(.5-.5*Math.cos(d*Math.PI*4))),this.signature&&(this.signature.visible=a.manifest==="signed"),this.scanLamp){const A=a.manifest==="signed"?8510889:h?.kind==="scan"?16767604:10137250;this.scanLamp.material.emissive.setHex(A),this.scanLamp.scale.setScalar(h?.kind==="scan"?1.15+.3*Math.sin(d*24):1)}const b=new I(r.socket[0]+y,.81,-.32-.38*Ne(f,0,.8)),v=A=>{if(A==="Shelf")return m.clone();if(A===r.destination)return b.clone();if(A==="Socket")return this.socket.clone();if(A==="Mail lift"&&r.lift){const U=n.find(H=>H.holder==="Mail lift")?.tick??s,N=n.find(H=>H.tick>U&&(H.holder==="Socket"||H.holder===r.destination))?.tick??U+15,V=St.clamp((s-U)/(N-U),0,1);return new I(r.lift[0],.27+.7*Ne(V,0,.32),r.lift[1]).lerp(b,Ne(V,.32,1))}return Sc(this.rigs[A],A)};let w=v(a.holder).lerp(v(c.holder),l);const R=this.rigs.Wick,T=v("Wick"),P=R.body.localToWorld(new I(.54,.74,.34));let S=(a.holder==="Wick"?T:P).clone(),M=a.holder==="Wick"?0:1,L=a.holder==="Jack"?v("Jack"):u.body.localToWorld(new I(0,.27,.41));if(h?.kind==="pick"&&h.actor==="Wick")if(d<.44)S=P.clone().lerp(m,Ne(d,0,.4)),w=m.clone(),M=1-Ne(d,.34,.44);else{const A=Ne(d,.44,.96);S=Wn(m,T,A,.16),w=S.clone(),M=0}else if(h&&(h.kind==="transfer"||h.kind==="place")){const A=v(h.from),U=v(h.to);if(h.actor==="Wick"){const N=Ne(d,0,.65);w=Wn(A,U,N,.17),S=w.clone().lerp(P,Ne(d,.73,1)),M=Ne(d,.62,.76)}else if(h.to==="Jack")if(L=L.lerp(A,Ne(d,0,.36)),d>=.37){const N=Ne(d,.37,.96);L=A.clone().lerp(U,N),L.y+=Math.sin(N*Math.PI)*.09,w=L.clone()}else w=A;else if(h.actor==="Jack"){const N=this.socket;L=Wn(A,N,Ne(d,0,.62),.07),w=L.clone(),d>.62&&(w=N.clone().lerp(U,Ne(d,.62,.93))),d>.7&&(L=N.clone().lerp(v("Jack"),Ne(d,.7,.99)))}}R.arm.pose(R.body.worldToLocal(S.clone()),M,0),yc(u,L),u.collar.rotation.set(Math.PI/2,0,0),u.collar.rotateY(h?.kind==="repair"?d*Math.PI*5:0),u.body.updateMatrixWorld(!0);const O=this.rigs.Patch;if(O){const A=new I(.58,.73,.38);if(_c(O,s,!!_&&a.fork_online===!1),h?.kind==="repair"){const U=u.collar.getWorldPosition(new I),N=O.body.worldToLocal(U),V=Ne(d,0,.16)*(1-Ne(d,.87,1));A.lerp(N,V),O.arm.pose(A,0,Math.PI*16*d)}else O.arm.pose(A,0,0)}if(this.mailbag.position.copy(w),this.shutter.scale.y=St.lerp(a.shutter?.085:1,c.shutter?.085:1,l),this.shutter.position.y=1.83*(1-this.shutter.scale.y),this.gateLamp){const A=a.shutter?8575930:16414550;this.gateLamp.material.color.setHex(A),this.gateLamp.material.emissive.setHex(A)}for(const A of this.windows){const U=A.material;U.color.setHex(a.holder==="Socket"||a.holder===r.destination?16767625:4814194),U.emissive.setHex(a.holder==="Socket"||a.holder===r.destination?16034116:860189)}this.cameraShot(s,h),this.renderer.render(this.scene,this.camera)}}class x0{canvas=document.createElement("canvas");ep;tick=0;focused=[];constructor(e){e.replaceChildren(this.canvas),this.canvas.style.width=this.canvas.style.height="100%",fc(e,()=>this.draw(this.tick))}load(e){this.ep=e,this.draw(0)}composition(e){}view(e){this.draw(this.tick)}focus(e){this.focused=e}anchor(e){const t=this.ep;if(!t)return;const n=t.frames[Math.floor(this.tick)],r=t.layout,s=r.yard?.orders[0],o={...n.robots,...r.gates,Fork:n.robots.Jack,Shelf:r.shelf,Waybill:s?.desk??r.desk,Socket:s?.door??r.socket,"Mail lift":s?.lift??r.lift};e==="Bag"&&(e=n.holder===r.destination?"Socket":n.holder);const a=o[e];if(!a)return;const c=this.canvas.clientWidth,l=this.canvas.clientHeight,h=Math.min(c/(r.width+1),l/(r.depth+1));return{x:.5+(a[0]+.5-r.width/2)*h/c,y:.5+(a[1]+.5-r.depth/2)*h/l}}draw(e){this.tick=e;const t=this.ep;if(!t)return;const n=this.canvas,r=n.getContext("2d"),s=n.clientWidth,o=n.clientHeight;if(!s||!o)return;const a=uc(s,o),c=Math.round(s*a),l=Math.round(o*a);(n.width!==c||n.height!==l)&&(n.width=c,n.height=l),r.setTransform(n.width/s,0,0,n.height/o,0,0),r.clearRect(0,0,s,o);const{width:h,depth:d,wall:m,yard:u}=t.layout,_=Math.min(s/(h+1),o/(d+1)),g=(s-_*h)/2,p=(o-_*d)/2,f=t.frames[Math.floor(e)];r.translate(g,p),r.scale(_,_);const y=(v,w,R)=>{r.fillStyle=R,r.fillRect(v+.025,w+.025,.95,.95)};for(let v=0;v<h;v++)for(let w=0;w<d;w++)y(v,w,v===m?"#718270":v<m?"#c3c7a7":"#d6c9a4");if(u)for(const v of u.orders)y(...v.hatch,"#78b9a3"),y(...v.shelf,"#a67147"),y(...v.desk,"#6298a4"),y(...v.door,"#d7b375"),r.fillStyle=f.signal==="green"?"#8ed9ae":"#345864",r.fillRect(v.door[0]+1.1,v.row-1,.85,3);else y(6,2,f.shutter?"#d6c9a4":"#a67147"),y(6,5,"#78b9a3");t.layout.lift&&y(...t.layout.lift,"#72b69d"),t.layout.baggage&&y(...t.layout.baggage,"#ad9670");for(const v of t.layout.obstacles)y(...v,"#91764f");for(const v of this.focused){const w={...f.robots,...t.layout.gates,Socket:t.layout.socket,...t.layout.lift?{"Mail lift":t.layout.lift}:{}}[v];w&&(r.strokeStyle="#ffde82",r.lineWidth=.09,r.strokeRect(w[0]+.04,w[1]+.04,.92,.92))}r.textAlign="center",r.font=".42px sans-serif";for(const[v,w]of Object.entries(f.robots)){if(r.fillStyle={Wick:"#f5a04c",Skim:"#78c79f",Jack:"#73b0df",Patch:"#b699d7"}[u?.bodies[v]??v]??"#afd6c0",r.beginPath(),r.arc(w[0]+.5,w[1]+.5,.44,0,Math.PI*2),r.fill(),v==="Jack"&&f.fork_online===!1){r.strokeStyle="#b3311a",r.lineWidth=.08,r.beginPath();for(const R of[.17,.39])r.moveTo(w[0]+R,w[1]+.28),r.lineTo(w[0]+R+.2,w[1]-.03);r.stroke()}f.motion?.actor===v&&["pick","place","repair","transfer"].includes(f.motion.kind)&&(r.strokeStyle=v==="Patch"?"#a26dd2":"#b77432",r.lineWidth=.1,r.beginPath(),r.moveTo(w[0]+.57,w[1]+.43),r.lineTo(w[0]+.76,w[1]+.2),r.lineTo(w[0]+.66,w[1]-.04),r.stroke()),r.fillStyle="#14342a",r.fillText(v[0],w[0]+.5,w[1]+.64)}if(u){r.fillStyle="#573716",r.font="bold .48px sans-serif";for(const v of u.orders){const w=f.cargoByBag?.[v.id]?.holder,R=w===v.coach?v.door:w==="Mail lift"?v.lift:Object.entries(f.robots).find(([T])=>T===w)?.[1]??v.shelf;r.fillStyle="#ffdd85",r.fillRect(R[0]+.47,R[1]-.09,.63,.48),r.fillStyle="#573716",r.fillText(v.id,R[0]+.78,R[1]+.32)}return}const b=f.holder==="Mail lift"&&t.layout.lift?t.layout.lift:f.holder==="Shelf"?t.layout.shelf:f.holder==="Socket"||f.holder===t.layout.destination?t.layout.socket:f.robots[f.holder];b&&(r.fillStyle="#ffdc77",r.font=".68px Georgia",r.fillText(t.scenario.mission==="mail"?"✉":"☾",b[0]+.8,b[1]+.3))}}const M0={Wick:"picker",Skim:"courier",Jack:"forklift",Patch:"mechanic"};function S0(i,e,t){const n=i.layout.yard,r=h=>`[data-op="${h}"]`,s=h=>r(n&&h!=="depart"?"47/"+h:h),o=(h,d,m,u=!1)=>({target:h,caption:d,selector:m,alert:u}),a=i.scenario.service_kit==="probe"?"inspection probe":"hex driver";if(e.kind==="order"&&!n)return t<.42?o("Bag","Bag on the shelf",r("bag")):t<.72?o("Socket","Destination coach",r("goal")):o("Waybill","Delivery slip",r("bill"));if(e.kind==="read"){if(e.targetRevision===1&&!n)return t<.34?o("Bag","Current holder",r("holder")):t<.69?o("Wick","Wick · long arm",r("pick")):o("Skim","Skim · low courier",r("cross"));if(e.targetRevision===2&&e.modelInput?.world.forks==="offline"&&e.modelInput?.operators[n?"47/repair":"repair"]&&i.layout.starts.Patch)return o("Patch","Patch · "+a,r("tool"),a==="inspection probe")}if(e.kind==="fork fault")return t<.53?o("Fork","Jack · broken fork",n?s("load"):".guard",!0):t<.78?o("Fork","Loading blocked",s("load"),!0):t<.95?o("Fork","Departure waits",r("depart"),!0):o("Jack","Scanner still works",s("manifest"));if(e.kind==="rejected"&&i.layout.starts.Patch&&e.feedback?.counterexample.toLowerCase().includes("repair has no eligible body"))return o("Patch","Tool cannot repair",s("repair"),!0);if(e.kind==="decision"||e.kind==="proposal"){const h=(e.targetRevision??e.planGraph?.revision??1)>1,d=e.proposal?.steps.map(m=>m.op)??e.new??[];if(h&&d.some(m=>m.endsWith("repair"))){const m=e.bindings?.[n?"47/repair":"repair"]??e.proposal?.steps.find(u=>u.op.endsWith("repair"))?.actor;if(m&&m!=="auto"&&m in i.layout.starts)return o(m,m+" · "+a,s("repair"))}if(h&&d.some(m=>m.endsWith("hoist")))return o("Mail lift","Station lift",s("hoist"));if(!h&&!n)return t<.4?o("Wick","Wick · pickup",r("collect")):t<.73?o("Waybill","Independent signature",r("manifest")):o("Socket","Both jobs must finish",r("depart"))}const c=e.planGraph?.nodes.filter(h=>h.state==="running")??[],l=e.op?e.planGraph?.nodes.find(h=>h.op===e.op):c[0];if(l){const h=l.op.split("/").at(-1);if(h==="depart")return o("Socket","Train released",r(l.op));if(h==="stage"&&(e.kind==="completed"||!n&&i.frames[Math.floor(e.tick)].holder==="Skim"))return o("Skim","Skim holds the bag",r(l.op));if(h==="hoist")return o("Mail lift","Station lift",r(l.op));if(l.actor&&l.actor in(n?.bodies??i.layout.starts))return o(l.actor,l.actor+" · "+(M0[n?.bodies[l.actor]??l.actor]??l.label),r(l.op))}if(e.kind==="hold")return o("Socket","Train held",r("depart"),!0);if(e.kind==="delivered")return o("Socket","Train released",r("depart"))}const Ks="http://www.w3.org/2000/svg";function Ll(i,e,t=!1){for(const c of i.querySelectorAll(".paired"))c.classList.remove("paired","attention");if(i.querySelector(".paired-mark")?.remove(),!e)return!1;const n=i.querySelector(e),r=n?.querySelector("rect.plate");if(!n||!r)return!1;n.classList.add("paired"),t&&n.classList.add("attention");const s=document.createElementNS(Ks,"g");s.setAttribute("class","paired-mark"),s.setAttribute("transform",`translate(${r.x.baseVal.value+r.width.baseVal.value-4} ${r.y.baseVal.value+2})`),s.setAttribute("aria-hidden","true");const o=document.createElementNS(Ks,"circle");o.setAttribute("r","7");const a=document.createElementNS(Ks,t?"text":"circle");return t?(a.setAttribute("y","3.5"),a.setAttribute("text-anchor","middle"),a.textContent="!"):a.setAttribute("r","2.5"),s.append(o,a),n.append(s),!0}function tn(i,e={}){const t=document.createElementNS("http://www.w3.org/2000/svg",i);for(const[n,r]of Object.entries(e))t.setAttribute(n,String(r));return t}function sr(i,e,t,n=""){const r=tn("text",{x:i,y:e,class:n});return r.textContent=t,r}const Js={collect:[65,29],stage:[212,29],cross:[359,29],repair:[65,100],load:[212,100],hoist:[212,100],manifest:[65,171],depart:[359,171]};function y0(i){const e=i.planGraph,t=new Map,n=new Set;let r=0;function s(){const d=r++;return[65+d%3*147,242+Math.floor(d/3)*71]}for(const d of[...e.nodes].sort((m,u)=>parseInt(u.uid)-parseInt(m.uid))){const m=Js[d.op],u=m.join(",");t.set(d.uid,n.has(u)?s():m),n.add(u)}const o=i.issues?.find(d=>d.fact==="forks"),a=o&&n.has(Js.repair.join(","))?s():Js.repair,c=tn("svg",{viewBox:"0 0 424 "+(206+Math.ceil(r/3)*71),role:"img","aria-label":"Committed action dependencies, revision "+e.revision}),l=tn("defs");c.append(l);for(const[d,m]of[["normal","#92aaa3"],["done","#9bd0b7"],["stale","#ff9c87"],["added","#f4be72"]]){const u=tn("marker",{id:"arrow-"+d,viewBox:"0 0 9 9",refX:8,refY:4.5,markerWidth:4,markerHeight:4,orient:"auto"});u.append(tn("path",{d:"M0 0L9 4.5L0 9z",fill:m})),l.append(u)}const h=new Map(e.nodes.map(d=>[d.uid,d]));for(const d of e.edges){const m=h.get(d.source),u=h.get(d.target);if(!m||!u)continue;const[_,g]=t.get(m.uid),[p,f]=t.get(u.uid);let y;if(g===f)y="M"+(_+59)+" "+g+" H"+(p-61);else{const v=Math.sign(f-g),w=g+v*21,R=f-v*22,T=(w+R)/2;y="M"+_+" "+w+" C"+_+" "+T+" "+p+" "+T+" "+p+" "+R}const b=u.state==="stale"&&m.state==="stale"?"stale":m.state==="done"?"done":i.new?.includes(u.op)&&e.revision>1?"added":"normal";c.append(tn("path",{d:y,class:"g-edge "+b,"marker-end":"url(#arrow-"+b+")"}))}if(o){const d=h.get(o.uid);if(d){const[m,u]=t.get(d.uid),[_,g]=a;c.append(tn("path",{d:g===u?"M"+(_+59)+" "+g+" H"+(m-61):"M"+(_+59)+" "+g+" Q"+m+" "+g+" "+m+" "+(u+22),class:"g-edge stale","marker-end":"url(#arrow-stale)"}));const p=tn("g",{class:"g-node guard"});p.append(tn("rect",{class:"plate",x:_-58,y:g-20,width:116,height:40,rx:6}),sr(_-48,g-1,"Fork carriage"),sr(_-48,g+13,o.expected+" → "+o.actual,"who")),c.append(p)}}for(const d of e.nodes){const[m,u]=t.get(d.uid),_=e.revision>1&&i.new?.includes(d.op),g=tn("g",{class:"g-node "+d.state+(_?" added":""),"data-op":d.op,"data-uid":d.uid,"data-state":d.state});g.append(tn("rect",{class:"plate",x:m-58,y:u-20,width:116,height:40,rx:6}),sr(m-53,u-1,d.state==="done"?"✓":d.state==="stale"?"×":d.state==="running"?"▸":"·","state-icon"),sr(m-40,u-1,d.op==="stage"?"Hand off bag":d.op==="repair"?"Repair fork":d.label),sr(m-40,u+13,d.actor,"who"));const p=tn("title");p.textContent=d.uid+" · "+d.actor+" · "+d.state,g.append(p),c.append(g)}return c}const E0="http://www.w3.org/2000/svg";function dn(i,e={}){const t=document.createElementNS(E0,i);for(const[n,r]of Object.entries(e))t.setAttribute(n,String(r));return t}function En(i,e,t,n){const r=dn("text",{x:i,y:e,class:n});return r.textContent=t,r}function ua(i,e){return dn("svg",{viewBox:"0 0 524 "+i,role:"img","aria-label":e})}function Mt(i,e,t,n,r,s,o,a=""){const c=dn("g",{class:"g-node "+o,"data-op":a});return c.append(dn("rect",{class:"plate",x:e,y:t,width:n,height:42,rx:7}),En(e+10,t+18,r,"label"),En(e+10,t+33,s,"who")),i.append(c),c}function Ni(i,e,t=""){i.append(dn("path",{d:e,class:"g-edge "+t}))}const Xo={collect:"Pick",stage:"Handoff",cross:"Hatch",load:"Load",manifest:"Sign",repair:"Repair",hoist:"Hoist",depart:"Release train"};function b0(i){const e=i.proposal?.steps??[];return{revision:i.targetRevision??1,nodes:e.map(t=>({uid:"draft/"+t.op,op:t.op,label:{collect:"Collect bag",stage:"Hand off bag",cross:"Cross hatch",manifest:"Sign waybill",repair:"Reseat collar",load:"Load coach",hoist:"Use mail lift",depart:"Release train"}[t.op]??Xo[t.op.split("/").at(-1)]??t.op,state:"proposed",actor:t.actor==="auto"?"Unassigned":t.actor})),edges:e.flatMap(t=>t.after.map(n=>({source:"draft/"+n,target:"draft/"+t.op})))}}function Dl(i,e,t){const n=e.layout.yard,r=e.events[0],s=r.proof?.rows??[],o=ua(n?204:194,"State read from the station graph"),a=i.modelInput;if(a&&(i.targetRevision??1)>1){const l=e.events.filter(p=>p.seq<i.seq&&p.issues?.length).at(-1)?.issues?.[0],h=a.operators[n?"47/repair":"repair"],d=Object.keys(h?.eligible_and_approach??{}),m=a.instrument_interfaces.find(p=>p.patient==="Jack")??a.instrument_interfaces[0],u=Object.entries(a.retained),_=l?.fact.split("/").at(-1),g={forks:"Jack’s forks",address:"Coach route",hatch:"Service hatch"}[_??""]??l?.fact??"Observation";if(Ni(o,"M153 53 H195 M333 53 H375 M84 73 V131 H99 M254 131 H294","done"),Mt(o,8,30,147,g,String(l?.actual??"Updated"),"stale","observation"),Mt(o,197,30,138,"Station state","Graph read","read","state"),Mt(o,375,30,141,"Active goal","Release train","read","goal"),l?.fact==="forks"&&m){Mt(o,12,110,218,m.robot+" · "+m.instrument,"Mechanic’s mounted tool","read","tool");const p=d.includes(m.robot);Mt(o,295,110,214,p?"Fits the fork collar":"Cannot repair this fork",p?"Repair is possible":"Another way to load is needed",p?"done":"stale","fit")}else Mt(o,115,110,290,u.length+" pending jobs kept","These assignments can still run","done","retained");return o}if(a&&!n){const l=h=>Object.keys(a.operators[h]?.eligible_and_approach??{}).join(", ")||"None";return Ni(o,"M155 43 H197 M335 43 H375 M263 65 V115 M155 136 H197 M335 136 H375","done"),Mt(o,7,22,148,a.current_holder,"Current holder","done","holder"),Mt(o,197,22,138,"Bag 47","Mail to deliver","read","bag"),Mt(o,375,22,141,a.destination,"Destination","read","goal"),Mt(o,7,115,148,l("collect"),"Arm reaches shelf","read","pick"),Mt(o,197,115,138,"Robot abilities","Jobs their bodies can do","read","capabilities"),Mt(o,375,115,141,l("cross"),"Fits with the bag","read","cross"),o}if(n){for(const[l,h]of n.orders.entries()){const d=8+l*63,m=s.find(_=>_.order===h.id),u=a?.orders?.[h.id];Ni(o,`M140 ${d+20} H194 M331 ${d+20} H383`,"done"),Mt(o,6,d,136,"Bag "+h.id,u?.holder??t.cargoByBag?.[h.id].holder??"","done"),Mt(o,196,d,134,"Delivery route","From the bag’s address","read"),Mt(o,385,d,132,String(u?.coach??m?.coach??"Unresolved"),"Destination","read")}return o}const c=s[0];return c&&(Ni(o,"M140 70 H196 M327 70 H383 M263 91 V139","done"),Mt(o,6,50,134,String(t.holder),"Current holder","done","holder"),Mt(o,196,50,132,String(c.bag),"Mail to deliver","read","bag"),Mt(o,383,50,136,"Delivery route","Bag’s address","read","address"),Mt(o,193,137,138,String(c.bill),t.manifest??"unsigned","read","bill"),Mt(o,382,137,137,String(c.coach),"Destination","read","goal"),Ni(o,"M453 91 V137","done"),o.append(En(145,61,"holds","edge-label"),En(332,61,"sent to","edge-label"),En(267,120,"covers","edge-label"),En(457,120,"serves","edge-label")),i.kind==="read"&&o.setAttribute("class","reading")),o}function T0(i,e,t){const n=e.layout.yard.orders,r={collect:0,stage:1,manifest:1,cross:2,repair:2,load:3,hoist:3,depart:4},s=[64,64,64,64,90],o=18,a=7,c=getComputedStyle(document.documentElement),l=document.createElement("canvas").getContext("2d"),h="600 12px "+c.getPropertyValue("--sans").trim(),d="10px "+c.getPropertyValue("--mono").trim();function m(v,w){l.font=h;const R=Math.max(...["✓ ","× ","▸ "].map(T=>l.measureText(T+v).width));return l.font=d,Math.ceil(Math.max(R,l.measureText(w).width))+2*a}const u=new Map;for(const v of i.nodes){const w=v.op.split("/").at(-1),R=r[w]??2;s[R]=Math.max(s[R],m(Xo[w]??w,v.actor))}const _=[39];for(let v=1;v<s.length;v++)_.push(_[v-1]+s[v-1]+o);const g=19+n.length*85,p=ua(g,"Order branches and a shared departure");p.setAttribute("viewBox",`0 0 ${_[4]+s[4]+8} ${g}`);for(const v of i.nodes){const[w,R]=v.op.split("/"),T=R??w,P=r[T]??2,S=Math.max(0,n.findIndex(L=>L.id===w)),M=T==="depart"?g/2-21:17+S*85+(T==="manifest"||T==="repair"?36:0);u.set(v.uid,[_[P],M,s[P]])}const f=dn("defs"),y=dn("marker",{id:"yard-arrow",viewBox:"0 0 8 8",refX:7,refY:4,markerWidth:3.8,markerHeight:3.8,orient:"auto"});y.append(dn("path",{d:"M0 0L8 4L0 8z",fill:"context-stroke"})),f.append(y),p.append(f);const b=new Map(i.nodes.map(v=>[v.uid,v]));for(const v of i.edges){const w=u.get(v.source),R=u.get(v.target);if(!w||!R)continue;const T=b.get(v.source),P=b.get(v.target),S=w[1]+12,M=R[1]+12,L=w[0]+w[2],O=R[0]-3,A=O-(P.op==="depart"?18:6),N=T.op.endsWith("/manifest")&&P.op==="depart"?`M${L} ${S} v16 H${A-10} V${M} H${O}`:`M${L} ${S} H${A} V${M} H${O}`;Ni(p,N,T.state==="stale"&&P.state==="stale"?"stale":T.state==="done"?"done":P.state==="running"?"added":""),p.lastElementChild.setAttribute("marker-end","url(#yard-arrow)")}n.forEach((v,w)=>p.append(En(4,33+w*85,v.id,"lane-id")));for(const v of i.nodes){const[w,R,T]=u.get(v.uid),P=v.op.split("/").at(-1),S=i.revision>1&&t.new?.includes(v.op),M=dn("g",{class:"g-node "+v.state+(S?" added":""),"data-op":v.op,"data-state":v.state,"data-uid":v.uid});M.append(dn("rect",{class:"plate",x:w,y:R,width:T,height:31,rx:5}),En(w+a,R+13,(v.state==="done"?"✓ ":v.state==="stale"?"× ":v.state==="running"?"▸ ":"")+(Xo[P]??P),"yard-label"),En(w+a,R+25,v.actor,"yard-who"));const L=dn("title");L.textContent=v.uid+" · "+v.actor+" · "+v.state,M.append(L),p.append(M)}return p}function w0(i,e,t){const n=e.kind==="rejected",r=e.kind==="proposal"?e:n?i.events.filter(l=>l.seq<e.seq&&l.kind==="proposal").at(-1):void 0,s=r?b0(r):e.planGraph,o=!!r;if(e.kind==="read")return Dl(e,i,t);if(!s?.nodes.length){if(o){const l=ua(120,"Empty proposal");return l.append(En(16,65,"Hold requested","label")),l}return Dl(e,i,t)}const a=i.layout.yard?T0(s,i,e):y0({...e,planGraph:s});o&&(a.classList.add("draft-graph"),a.setAttribute("aria-label",(n?"Returned draft for revision ":"Orchestrator proposal for revision ")+r.targetRevision));const c=n?i.events.filter(l=>l.seq<e.seq&&l.kind==="read").at(-1)?.modelInput:void 0;for(const l of a.querySelectorAll("[data-op]")){const h=l.getAttribute("data-op"),d=c?.operators[h??""];d&&Object.keys(d.eligible_and_approach).length===0&&l.classList.add("rejected-node"),e.retained?.includes(h??"")&&l.classList.add("retained"),e.issues?.some(m=>m.uid===l.getAttribute("data-uid"))&&l.classList.add("direct-fault"),e.kind==="completed"&&(e.uid===l.getAttribute("data-uid")||e.active?.includes(l.getAttribute("data-uid")??""))&&l.classList.add("just-done")}return a}const A0="http://www.w3.org/2000/svg";function Qr(i,e){const t=document.createElementNS(A0,i);for(const[n,r]of Object.entries(e))t.setAttribute(n,String(r));return t}function ri(i,e,t,n=""){const r=Qr("text",{x:i,y:e,class:n,"text-anchor":"middle"});return r.textContent=t,r}function R0(i,e,t){const n=i.skills.filter(_=>_.robot===e),r=i.mounts.find(_=>_.robot===e),s=Qr("svg",{viewBox:"0 0 570 194",role:"img","aria-label":e+" and its embodiment, skills and mounted equipment"});if(!n.length)return{svg:s,note:"This roster has no robots."};const o=e!=="Jack"||t.fork_online!==!1,a=(_,g="")=>s.append(Qr("path",{d:_,class:"body-edge "+g}));function c(_,g,p,f,y="",b=""){s.append(Qr("rect",{x:_,y:g,width:p,height:y?40:28,rx:5,class:"body-node "+b})),s.append(ri(_+p/2,g+(y?16:18),f,"body-title")),y&&s.append(ri(_+p/2,g+31,y,"body-sub"))}const l=n[0],d=n.map(_=>_.skill).sort((_,g)=>+(_===r?.provides)-+(g===r?.provides)||_.localeCompare(g)).map((_,g)=>({skill:_,y:10+g*36}));a("M88 89 H113 V42 H197"),s.append(ri(151,34,"INSTANCE_OF","body-rel"));const m=d[d.length-1].y+14;a(`M331 42 H403 M403 24 V${Math.max(42,m)}`),s.append(ri(365,33,"HAS_SKILL","body-rel"));for(const{skill:_,y:g}of d)a(`M403 ${g+14} H437`),c(437,g,122,_==="Fork"?"Lift a tray":_);if(c(4,69,84,e,"Robot","actor"),c(197,22,134,l.body==="Lift"?"Forklift chassis":l.body,"Embodiment","chassis"),r){a("M88 89 H113 V151 H197"),s.append(ri(151,143,"MOUNTS","body-rel"));const _=r.mounted.replace(/ \([^)]*\)$/,"");if(c(197,131,134,_,r.provides?o?"Online":"Offline":"Instrument",o?"tool":"offline"),r.provides){const g=d.find(p=>p.skill===r.provides);g&&(a(`M331 151 H419 V${g.y+21} H437`,o?"supply":"lost"),s.append(ri(372,143,"PROVIDES","body-rel")))}else r.fits&&(a("M331 151 H437","supply"),s.append(ri(382,143,"FITS","body-rel")),c(437,131,122,r.fits,"Interface"))}let u="Chassis height "+l.height_cm+" cm · Reach "+l.reach_cm+" cm.";return r?.provides&&(u+=o?" Loading needs both the chassis skill and a working carriage.":" The carriage is offline. The chassis still supports scanning."),r?.fits&&(u+=" The tool must fit the collar for a repair."),l.body==="Courier"&&(u+=" Crossing also depends on the loaded deck fitting through the hatch."),l.body==="Picker"&&(u+=" Pickup checks this arm’s reach against the shelf height."),{svg:s,note:u}}const C0={orders:2,pickers:2,couriers:2,forklifts:1,mechanics:1},ci=i=>document.querySelector("#fleet-"+i);function Fi(i,e,t){const n=i==="orders"?1:0,r=Array.from({length:e-n+1},(o,a)=>new Option(String(a+n),String(a+n))),s=ci(i);s.replaceChildren(...r),s.value=String(Math.min(t,e))}function bc(i=C0){Fi("orders",3,i.orders),Fi("pickers",i.orders,i.pickers),Fi("couriers",i.orders,i.couriers),Fi("forklifts",3,i.forklifts),Fi("mechanics",2,i.mechanics)}function fa(){return{orders:+ci("orders").value,pickers:+ci("pickers").value,couriers:+ci("couriers").value,forklifts:+ci("forklifts").value,mechanics:+ci("mechanics").value}}function P0(){const i=fa();for(const e of["pickers","couriers"]){const t=i[e]===ci(e).options.length-1;Fi(e,i.orders,t?i.orders:i[e])}}const Xr=[{target:"body-tab",title:"Meet the robots",side:"left",instruction:"Click Robot bodies to see how a robot’s chassis and equipment connect to its skills."},{target:"plan-tab",title:"Return to the jobs",side:"left",instruction:"Compare robots with the selector. Click Dispatch graph to see the jobs and their dependencies."},{target:"next",title:"Follow one decision",side:"above",instruction:"Click Next event to advance the map and graph together. The timeline lets you revisit any step."},{target:"proof",title:"Ask Relate",side:"left",instruction:"Click Query graph. Playback pauses so you can inspect what the graph knew at this step."},{target:"store-question",title:"Read the evidence",side:"right",instruction:"Choose a question and read its rows. Expand the Cypher underneath. Continue when you’re ready."},{target:"options",title:"Change the experiment",side:"below",instruction:"Open Run options to replay a saved LLM decision or start a new dispatch with your own fleet."},{target:"controller",title:"Choose a planner",side:"right",instruction:"Use Local planner and Start live run without a key. To enable LLM orchestrator, open Connect a live LLM."}],cn=i=>document.getElementById(i),Il="moonmail-walkthrough-v2",qr=(i,e,t)=>Math.max(e,Math.min(i,t));function Tc(i){const e=i.closest("dialog"),t=(e??i.closest("#book"))?.getBoundingClientRect(),n=e?.querySelector(".dialog-head")?.getBoundingClientRect();return{top:Math.max(0,n?.bottom??t?.top??0),bottom:Math.min(window.innerHeight,t?.bottom??window.innerHeight)}}function Ul(i){const e=i.getBoundingClientRect(),t=Tc(i);(e.top<t.top+6||e.bottom>t.bottom-6)&&i.scrollIntoView({block:"center",inline:"nearest",behavior:"instant"})}function L0(){const i=cn("walkthrough"),e=i.querySelector(".guide-note"),t=i.querySelector(".guide-ring"),n=i.querySelector(".guide-arrow line"),r=cn("guide-open"),s=new ResizeObserver(h);let o=-1,a=null,c=null,l=0;function h(){a&&!l&&(l=requestAnimationFrame(d))}function d(){if(l=0,!a)return;const p=a.getBoundingClientRect(),f=i.getBoundingClientRect(),y=f.width,b=f.height,v=Tc(a),w=p.width>0&&p.top>=v.top-1&&p.bottom<=v.bottom+1;if(i.style.visibility=w?"visible":"hidden",!w)return;const R=4,T=10,P=26,S=p.left-f.left-R,M=p.top-f.top-R,L=p.right-f.left+R,O=p.bottom-f.top+R;Object.assign(t.style,{left:S+"px",top:M+"px",width:L-S+"px",height:O-M+"px"});const A=e.offsetWidth,U=e.offsetHeight,N={above:M-P-T-U,below:b-O-P-T-U,left:S-P-T-A,right:y-L-P-T-A},V=[Xr[o].side,"above","below","left","right"],Y=V.find(He=>N[He]>=0)??V.reduce((He,j)=>N[He]>N[j]?He:j),H=(S+L)/2,ee=(M+O)/2;let se=H-A/2,q=ee-U/2;Y==="above"&&(q=M-P-U),Y==="below"&&(q=O+P),Y==="left"&&(se=S-P-A),Y==="right"&&(se=L+P),se=qr(se,T,y-A-T),q=qr(q,T,b-U-T),e.style.left=se+"px",e.style.top=q+"px";const ve=Y==="above"||Y==="below",Fe=ve?qr(H,se+12,se+A-12):Y==="left"?se+A:se,ze=ve?Y==="above"?q+U:q:qr(ee,q+12,q+U-12);n.setAttribute("x1",String(Fe)),n.setAttribute("y1",String(ze)),n.setAttribute("x2",String(ve?Fe:Y==="left"?S-3:L+3)),n.setAttribute("y2",String(ve?Y==="above"?M-3:O+3:ze))}function m(){s.disconnect(),a&&(c===null?a.removeAttribute("aria-describedby"):a.setAttribute("aria-describedby",c)),a=null}function u(p=!1){if(!a)return;const f=a;m(),cancelAnimationFrame(l),l=0,o=-1,i.hidePopover?.(),i.hidden=!0,document.body.append(i),r.setAttribute("aria-expanded","false"),p&&f.focus({preventScroll:!0})}function _(p,f=!0){m(),o=p;const y=Xr[p],b=cn(y.target);a=b;const v=b.closest("dialog")??document.body;i.parentElement!==v&&(i.hidePopover?.(),v.append(i)),i.hidden=!1,i.showPopover?.();const w=p===Xr.length-1;cn("guide-heading").textContent=y.title;const R=w&&!b.querySelector('[value="azure"]')?.disabled;cn("guide-instruction").textContent=R?"Choose LLM orchestrator for fresh model decisions or Local planner for a keyless run. Select Start live run when ready.":y.instruction,cn("guide-progress").textContent=`${p+1} / ${Xr.length}`,cn("guide-dismiss").textContent=w?"Done":"Skip guide",cn("guide-continue").hidden=b.id!=="store-question",c=b.getAttribute("aria-describedby"),b.setAttribute("aria-describedby",[c,"guide-heading guide-instruction"].filter(Boolean).join(" ")),Ul(b),f&&b.focus({preventScroll:!0}),s.observe(b),s.observe(e),s.observe(v),d()}function g(p=!0){try{localStorage.setItem(Il,"1")}catch{}r.setAttribute("aria-expanded","true"),_(0,p)}return document.addEventListener("click",p=>{!a||!(p.target instanceof Element)||(a.contains(p.target)&&!a.matches("select")?_(o+1):(p.target.closest("#play, #recordings-tab, [data-reel]")||document.querySelector("dialog[open]")&&!a.closest("dialog"))&&u())}),document.addEventListener("close",p=>{!a||p.target!==a.closest("dialog")||(p.target===cn("sources")?_(o+1):u())},!0),document.addEventListener("keydown",p=>{a&&p.key==="Escape"&&(p.preventDefault(),p.stopPropagation(),u(!0))},!0),cn("guide-dismiss").addEventListener("click",()=>u(!0)),cn("guide-continue").addEventListener("click",()=>a?.closest("dialog")?.close()),window.addEventListener("resize",()=>{a&&(document.activeElement===a||document.activeElement===document.body)&&Ul(a),h()}),window.addEventListener("scroll",h,!0),{get active(){return a!==null},start:g,finish:u,offer(p){if(p.has("guide")){g();return}if(!p.size)try{localStorage.getItem(Il)||g(!1)}catch{}}}}const le=i=>document.getElementById(i),Ye=(i,e)=>{le(i).textContent=e},$n=le("projector"),ss=le("sources"),mr=le("time"),gr=L0();let Kt;try{Kt=new ms(le("world"))}catch{Kt=new x0(le("world")),le("map").disabled=!0}const qo=new URLSearchParams(location.search),Zs=qo.get("reel");let Ae,nn="",ct=0,_i=!1,os=!1,Nn=0,Qs=0,Yo="",Yi=-1,as=!1,Yr=!1,gs=!1,bn,gn=!1,ki=!1,Rt;const pa=i=>Ae?.layout.yard?{order:1.4,read:.65,proposal:1.2,decision:1.1,"fork fault":1.6,violation:2.4,hold:2,delivered:1}[i.kind]??0:{order:2.7,read:2.8,proposal:3.1,decision:3.3,"fork fault":4.2,violation:3.4,rejected:2.6,hold:2.5,delivered:1.8}[i.kind]??0,ma=i=>pa(i)>0,wc=i=>i.kind!=="completed",ga=i=>i.events.filter(wc);function Lt(i){!i&&_i&&Kt instanceof ms&&Kt.restoreDetail(),_i=i;const e=!gn&&Ae&&ct>=Ae.frames.length-1;Ye("play",i?"Ⅱ Pause":e?"↻ Replay":"▶ Play"),le("play").setAttribute("aria-label",i?"Pause":e?"Replay":"Play")}function hi(){if(!Ae)return;Ye("source",ki?"Orchestrator is planning…":gn?"Live run":nn?"Recorded model run":Ae.outcome?"Run complete":"Stopped"),le("source").classList.toggle("live",gn),le("stop").hidden=!gn;const i=le("database");i.hidden=!nn&&!Ae.outcome,le("cypher-console").hidden=i.hidden,i.href=nn?"./episodes/"+nn+".rl":"/api/episodes/"+Ae.id+"/graph"}function Ac(){if(!Ae)return;mr.max=String(Ae.frames.length-1);const i=le("pins");if(i.replaceChildren(),!gn)for(const e of ga(Ae).filter(ma)){const t=document.createElement("i");t.style.left=100*e.tick/(Ae.frames.length-1)+"%",i.append(t)}}function D0(i,e,t){const n=e.proof?.state;if(n)for(const r of i.events[0]?.proof?.rows??[]){const s=r.order===void 0?"":r.order+"/",o=t.cargoByBag?.[String(r.order)]?.holder??t.holder;if(n[s+"address"]==="unresolved")return{title:`${r.coach} loses its route.`,reason:`${o} holds ${r.bag} for ${r.route}. No coach on this train serves that route, so the train must stay.`};if(n[s+"hatch"]==="closed"&&n[s+"cargo"]==="staged")return{title:`${r.bag}’s hatch closes.`,reason:`${o} holds ${r.bag} on the sorting side. The hatch is closed, so the bag cannot reach the train.`}}}function I0(i,e){const t=Ae,n=t.layout.yard,r=e.planGraph?.revision??0,s=e.kind,o=s==="proposal",a=s==="read",c=s==="decision",l=s==="fork fault"||s==="violation",h=s==="rejected",d=t.controller!=="azure",m=d?"Local planner":"Orchestrator",u=e.targetRevision??r,_=t.events.filter(q=>q.seq<=e.seq),g=_.filter(q=>q.kind==="read").at(-1),p=_.filter(q=>q.kind==="proposal"&&q.seq>(g?.seq??-1)).at(-1),f=g?.modelInput,y=e.planGraph?.nodes.length??0,b=t.frames[Math.floor(ct)],v=D0(t,e,b),w=_.filter(q=>q.issues?.length).at(-1),R=b.cargoByBag,T=n?.orders.length??1,P=n?n.orders.filter(q=>R?.[q.id].holder===q.coach).length:+(b.holder===t.layout.destination),S=n?n.orders.filter(q=>R?.[q.id].manifest==="signed").length:+(b.manifest==="signed"),M=le("goals");M.replaceChildren();for(const[q,ve]of[[n?P+" / "+T+" bags aboard":"Bag 47 aboard Coach B",P===T],[n?S+" / "+T+" bills signed":"Signed waybill",S===T]]){const Fe=document.createElement("span");Fe.textContent=q,Fe.title=q.toLowerCase().includes("bill")?"A waybill is the delivery slip. Signing it is an independent job.":"Each bag must reach the coach serving its address.",Fe.classList.toggle("achieved",ve),M.append(Fe)}Ye("author",m);const L=a||o?"model":c||h||s==="hold"?"verify":s==="order"||l?"state":"execute";for(const q of le("pipeline").querySelectorAll("[data-role]"))q.classList.toggle("lit",q.dataset.role===L||a&&q.dataset.role==="state"),q.classList.toggle("pass",c&&q.dataset.role==="state");const O=e.planGraph?.nodes??[],A=O.filter(q=>q.state==="running");let U=i.title,N=i.reason??"",V="Executing the plan",Y="Recorded state",H=n?P+" bags aboard · "+S+" waybills signed · Signal "+b.signal:"Bag 47 with "+b.holder+" · Waybill "+b.manifest+" · Forks "+(b.fork_online?"online":"offline");if(s==="order")U=n?"One plan for the fleet.":"Which robot can do each job?",N=n?`Relate links ${Object.keys(t.layout.starts).length} robots to the active orders. Each bag needs a load and a signature before departure.`:"The bag starts on the shelf. The train needs the bag aboard and a signed delivery slip before it can leave.",V="Initial station state";else if(a){U=u>1?"Read what changed.":"What can each body do?",V=u>1?"Facts after the fault":"Facts available to the orchestrator",d&&(V="State sent to the planner");const q=f?.operators??{},ve=n?"47/repair":"repair";if(u>1){N=v?.reason??"The orchestrator reads the failed tool, the available equipment and the jobs that still have valid assignments.";const Fe=Object.keys(q[ve]?.eligible_and_approach??{}),ze=w?.issues?.[0];H=ze?.fact==="forks"?"Forks "+ze.actual+" · Eligible repairers: "+(Fe.join(", ")||"none"):(ze?.fact??"Recorded state")+" · "+(ze?.actual??"updated")}else N=n?"One graph read gathers the active orders, their goals and the robots eligible in each bay.":"Relate stores the starting scene, the goal and each body’s capabilities. The orchestrator reads which arm can reach the shelf and which courier fits the hatch.",H=n?f?.goal??H:"Holder: "+(f?.current_holder??b.holder)+" · Destination: "+(f?.destination??"")+" · Waybill "+(f?.world.manifest??b.manifest);Y="What the graph returned"}else if(o){const q=e.proposal?.steps??[],ve=q.reduce((ze,He)=>ze+He.after.length,0);U=u>1?"A plan for the remaining jobs.":"The orchestrator proposes a plan.",d&&u===1&&(U="The planner proposes a plan."),N=u>1?"The "+m.toLowerCase()+" submits the remaining jobs. The validator checks them against the updated graph.":"An arrow means the earlier action must finish first. Loading the bag and signing its delivery slip can happen independently.",V="Proposed action plan",Y="What was proposed";const Fe=q.filter(ze=>ze.actor==="auto").length;H=q.length+" proposed actions · "+ve+" prerequisites · "+(Fe?Fe+" assignments for the validator":"Robots selected by the "+m),q.length||(U="The planner requests a hold.",N=v?.reason??"The planner found no plan that meets every departure condition.",H="The validator checks whether any feasible route to departure remains.")}else if(c){U=r===1?"Which assignments pass?":"Reuse the surviving actions.";const q=e.new?.length??0,ve=y-q;N=r===1?"The validator uses Z3 to check robot abilities and the order of the jobs. Relate stores the accepted assignments.":n?`This revision reuses ${ve} original actions and adds ${q}. Follow the new prerequisites into the shared departure.`:e.new?.includes("repair")?"The mechanic’s driver fits the collar. The new load waits for that repair, and the existing signature action keeps its identity.":i.reason??"The surviving actions keep their IDs.",V="Approved action plan",Y="Validator approved",H=r===1?y+" stored actions · "+(e.planGraph?.edges.length??0)+" dependencies · Revision "+r:ve+" original jobs kept · "+q+" new actions · Revision "+r}else if(l||h){const q=t.scenario.service_kit==="probe"&&t.layout.starts.Patch&&e.feedback?.counterexample.includes("repair has no eligible body");U=h?q?"This tool cannot repair the fork.":"Why did the plan fail?":s==="fork fault"?"Which jobs does the fork stop?":i.title,h&&(N=q?"The mechanic’s probe fits a test socket. No robot can repair this fork, so the orchestrator gets another attempt.":e.feedback?.counterexample??"The validator returns the failed check to the agent for another proposal."),V=h?"Rejected proposal":"Impact on the stored plan",Y=h?"Why the plan failed":"Effect on the plan",w&&l?(H=(w.proof?.rows??[]).length+" jobs affected. "+(s==="fork fault"?"The delivery slip can still be signed.":"The orchestrator will read the updated conditions."),N=n&&s==="fork fault"?"Jack’s carriage went offline. The marked loads need that carriage, and departure depends on those loads.":s==="fork fault"?"The forklift cannot load the coach. Departure needs that load. The same robot can still sign using its scanner.":i.reason??""):H=e.feedback?.counterexample??e.reason??H,s==="violation"&&v&&(U=v.title,N=v.reason)}else if(s==="hold")U="The train is held.",N=v?.reason??N,V="Departure blocked";else if(b.signal==="green")V="Goal reached",Y="Signal green",U="The train can leave.",N=n?"Every bag is in its addressed coach and every waybill is signed. The shared train can leave.":"Bag 47 is aboard Coach B. Its waybill is signed. The departure signal is green.";else if(n)A.length?(U=A.length>1?A.length+" jobs under way.":A[0].label+".",N=A.map(q=>q.actor+" · "+q.label.toLowerCase()+(q.op.includes("/")?" "+q.op.split("/")[0]:"")).join("   /   ")):(U="Completed jobs are recorded.",N="The executor reads the updated graph for the next ready jobs."),H=A.length+" running · "+O.filter(q=>q.state==="done").length+" complete · Signal "+b.signal;else if(["stage","cross"].includes(i.op??"")&&(U=i.op==="stage"?"Who holds the bag now?":"The crossing can start.",N=i.op==="stage"?"The executor records who holds the bag. The next action can use that fact as soon as the handoff is complete.":"The courier has the bag. The executor checks that the hatch is open and starts the crossing."),s==="assignment"&&i.op==="collect"){const q=i.proof?.rows[0];q&&(Y="Why this robot qualifies",H=q.robot+" → "+q.body+" → "+q.skill+" · "+q.reach+" cm reach / "+q.height+" cm shelf")}else if(s==="assignment"&&i.op==="repair"){const q=i.proof?.rows[0];q&&(Y="Tool fit",H=q.actor+" → "+q.instrument+" → "+q.port)}s==="assignment"&&!n&&(i.op==="manifest"&&(U="Signing is still possible.",N="The forklift’s scanner works independently of its broken fork."),i.op==="repair"&&(U="Repair the fork.",N="The mechanic’s hex driver fits the collar. Loading can resume after the repair."),i.op==="load"&&(U="Load the coach.",N="The executor checks the fork and the bag’s holder before the load."),i.op==="hoist"&&(U="Use the station lift.",N="The lift accepts the courier’s tray and feeds the destination coach."),i.op==="depart"&&(U="Check the departure conditions.",N="The bag must be aboard and its delivery slip signed.")),Ye("line",U),Ye("narration",N),Ye("graph-title",V),Ye("revision",h?"":o?"Draft "+u:r?"Revision "+r:""),Ye("evidence-label",Y),Ye("witness",H);const ee=s==="order"?"Parcel → ADDRESSED_TO → Route ← SERVES ← Coach":a?u>1&&w?.issues?.[0]?.fact==="forks"?"Robot → MOUNTS → Instrument → FITS → Interface":"Robot → INSTANCE_OF → Embodiment → HAS_SKILL → Skill":o?"propose_dag(steps)  ·  op / actor / after":h?"propose_dag → counterexample → revised proposal":c?r>1?"PlanRevision → REVISES → PlanRevision":"PlanRevision → INCLUDES → Action → ASSIGNED_TO → Robot":s==="hold"?"Release train → REQUIRES → current world facts":l?"Event → INVALIDATES → Action ← DEPENDS_ON ← Action":i.op==="stage"||s==="transfer"?"Parcel → HELD_BY → current holder":"Action → DEPENDS_ON → finished prerequisite";Ye("relation",ee),le("drawing").replaceChildren(w0(t,e,b)),ls="",Ye("source-title",U),Ye("proof-note","Event recorded at step "+e.tick+"."),Ye("query",e.proof?.query??""),Ye("rows",JSON.stringify(e.proof?.rows??[],null,2));const se=_.filter(q=>q.kind==="decision"&&q.seq>=(g?.seq??-1)).at(-1);Ye("raw",JSON.stringify({read_dispatch_graph:f,propose_dag:p?.proposal??se?.proposal,accepted_revision:se?.planGraph?.revision,bindings:se?.bindings,feedback:e.feedback},null,2))}const _a=le("world"),Yt=document.createElement("div");Yt.className="scene-link";Yt.hidden=!0;const va=document.createElement("i"),xa=document.createElement("span");Yt.append(va,xa);_a.append(Yt);let ls="",cs="";function _s(){const i=cs?Kt.anchor(cs):void 0;Yt.hidden=!i||i.x<.025||i.x>.975||i.y<.035||i.y>.965,_a.classList.toggle("has-link",!Yt.hidden),!(!i||Yt.hidden)&&(Yt.style.left=i.x*100+"%",Yt.style.top=i.y*100+"%",Yt.classList.toggle("leftwards",i.x>.61),Yt.classList.toggle("below",i.y<.17))}new ResizeObserver(_s).observe(_a);function Rc(i,e){if(!Ae||gs)return;const t=S0(Ae,i,e),n=i.seq+"|"+(t?[t.target,t.caption,t.selector,t.alert].join("|"):"");n!==ls&&(ls=n,cs=t&&Ll(le("drawing"),t.selector,t.alert)?t.target:"",t||Ll(le("drawing")),Yt.classList.toggle("attention",!!t?.alert),va.textContent=t?.alert?"!":"",xa.textContent=t?.caption??"",_s())}function $t(i){if(!Ae?.frames.length)return;ct=Math.min(Math.max(i,0),Ae.frames.length-1),mr.value=String(ct),Ye("tick","Step "+Math.floor(ct));const e=Ae.events.filter(r=>r.tick<=ct),t=e.filter(wc).at(-1),n=e.at(-1);if(t&&n){const r=Ae.frames[Math.floor(ct)],s=t.seq+"-"+n.seq+"-"+r.holder+"-"+r.signal+"-"+(r.cargoByBag?Object.values(r.cargoByBag).map(o=>o.holder).join("|"):"");Yo!==s&&(Yo=s,Rt=t,I0(t,n),gs&&ya()),Rc(n,Math.min(1,ct-n.tick))}Kt.draw(ct),os=_i&&Nn<=0,_s()}function Cc(i,e){Ae=i,nn=e,Yo="",Rt=void 0,ct=0,Nn=0,Yi=-1,le("kit").value=i.scenario.service_kit??"driver",le("seed").value=String(i.scenario.seed),le("fault").value=i.scenario.mail_fault??(i.scenario.fork_fault?"forks":"none");const t=!!i.layout.yard;le("station").value=i.scenario.fleet?"custom":t?"yard":"mail",i.scenario.fleet&&bc(i.scenario.fleet);const n=le("body-robot"),r=n.value,s=[...new Set(i.fleetGraph.skills.map(a=>a.robot))];n.replaceChildren(...s.map(a=>new Option(a,a))),n.value=s.includes(r)?r:s.includes("Jack")?"Jack":s[0]??"",Sr();const o=Object.keys(i.layout.starts).length;Ye("map-label",t?o+" robots · "+i.layout.yard.orders.length+(i.layout.yard.orders.length===1?" order":" orders"):o+" robots · one order"+(i.scenario.service_kit==="probe"?" · inspection probe":"")),le("guide-open").disabled=!1,Kt.composition(!1),Kt.load(i),Ac(),hi(),$t(0),Lt(!1)}function Ma(){return bn?.abort(),bn=new AbortController,gn=!1,ki=!1,Lt(!1),Ye("status",""),bn}function U0(i){if(!Ae||!i)return 0;if(i==="rejected"||i==="retry"){const e=Ae.events.find(t=>t.kind==="rejected");return!e||i==="rejected"?e?.tick??0:Ae.events.find(t=>t.seq>e.seq&&t.kind==="proposal")?.tick??e.tick}if(i==="fault")return(Ae.events.find(e=>["fork fault","violation"].includes(e.kind))?.tick??0)+.6;if(i==="replan")return Ae.events.find(e=>e.kind==="decision"&&e.planGraph?.revision===2)?.tick??0;if(["read","proposal","reread","redraft"].includes(i)){const e=i==="reread"?"read":i==="redraft"?"proposal":i;return Ae.events.find(t=>t.kind===e&&(t.targetRevision??1)===(i==="reread"||i==="redraft"?2:1))?.tick??0}return i==="plan"?Ae.events.find(e=>e.kind==="decision")?.tick??0:Number.isFinite(Number(i))?Number(i):0}async function Pc(i,e){Ae&&!!Ae.layout.yard!=!!i.layout.yard&&!matchMedia("(prefers-reduced-motion: reduce)").matches?document.startViewTransition?await document.startViewTransition(e).finished:(e(),await le("spread").animate([{opacity:.2,transform:"scale(1.025)"},{opacity:1,transform:"none"}],{duration:500}).finished):e()}async function Sa(i,e){const t=Ma();try{const n=await fetch("/api/recordings/"+i,{signal:t.signal,cache:"no-cache"});if(!n.ok)throw Error("The recorded episode could not be opened.");const r=await n.json();if(bn!==t||(await Pc(r,()=>{t===bn&&(Cc(r,i),$t(U0(e)),Lt(!1))}),t!==bn))return;const o=new URLSearchParams({reel:i});e&&o.set("at",e),history.replaceState(null,"","?"+o)}catch(n){t===bn&&Ye("status",n.message)}}async function N0(){gr.finish();const i=Ma(),e=le("fault").value,t=le("station").value;$n.close(),gn=!0,hi(),Ye("status","Opening a new Relate store…");let n=!1,r=!1;try{const s=await fetch("/api/live?pace=0.34&controller="+le("controller").value,{method:"POST",signal:i.signal,headers:{"Content-Type":"application/json"},body:JSON.stringify({mission:t==="custom"?"yard":t,...t==="custom"?{fleet:fa()}:{},seed:Number(le("seed").value),service_kit:le("kit").value,mail_fault:e==="none"?null:e,fork_fault:!1,jam:!0,parcel_cm:18})});if(!s.ok||!s.body||!s.headers.get("content-type")?.includes("ndjson"))throw Error("Fresh runs require the local Moonmail server.");const o=async l=>{if(bn===i){if(l.type==="error")throw Error(l.message);l.type==="init"?await Pc(l,()=>{bn===i&&(n=!0,Cc({...l,outcome:""},""),Ye("status",""),hs(),Lt(!0),history.replaceState(null,"",location.pathname))}):l.type==="thinking"?(ki=!0,hi()):l.type==="update"&&Ae?(l.events.length&&(ki=!1),Ae.frames.push(...l.frames),Ae.events.push(...l.events),mr.max=String(Ae.frames.length-1),hi(),$t(ct)):l.type==="complete"&&Ae&&(r=!0,gn=!1,ki=!1,Ae.frames=l.episode.frames,Ae.events=l.episode.events,Ae.outcome=l.episode.outcome,hi(),Ac(),$t(ct))}},a=s.body.pipeThrough(new TextDecoderStream).getReader();let c="";try{for(;;){const l=await a.read();if(l.done)break;const h=(c+l.value).split(`
`);c=h.pop();for(const d of h)d.trim()&&await o(JSON.parse(d))}c.trim()&&await o(JSON.parse(c))}finally{a.releaseLock()}if(!r)throw Error("The run ended before the final commit.")}catch(s){i===bn&&(gn=!1,ki=!1,hi(),Lt(!1),Ye("status",s.message),n&&Ye("source","Live interrupted"))}}function hs(){Rt&&ma(Rt)&&Rt.seq!==Yi&&(Nn=pa(Rt),os=!1,Kt instanceof ms&&Kt.restoreDetail(),Yi=Rt.seq)}le("play").onclick=()=>{if(Ae){if(_i){Lt(!1);return}!gn&&ct>=Ae.frames.length-1&&($t(0),Yi=-1),as=nn==="post",hs(),Lt(!0)}};le("next").onclick=()=>{if(!Ae)return;Lt(!1),Nn=0;const i=ga(Ae).find(e=>e.tick>ct+.01);$t(i?i.tick+(i.kind==="fork fault"?.45:0):Ae.frames.length-1),Lt(!1)};mr.oninput=()=>{Lt(!1),Nn=0,Yi=-1,$t(Number(mr.value)),Lt(!1)};function Lc(i,e){if(i.replaceChildren(),!e.length)return;const t=Object.keys(e[0]),n=i.createTHead().insertRow();for(const s of t){const o=document.createElement("th");o.scope="col",o.textContent=s.replaceAll("_"," "),n.append(o)}const r=i.createTBody();for(const s of e){const o=r.insertRow();for(const a of t){const c=s[a];o.insertCell().textContent=typeof c=="string"?c:JSON.stringify(c)}}}function Dc(){return nn?"/api/recordings/"+nn:"/api/episodes/"+Ae.id}let eo=0,es=0;le("cypher-run").onclick=async()=>{if(!Ae||!nn&&!Ae.outcome)return;const i=++es,e=le("cypher-rows");e.replaceChildren(),Ye("cypher-status","Reading the completed file…");try{const t=await fetch(Dc()+"/query",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({statement:le("cypher-text").value,tick:Math.floor(ct)})}),n=await t.json();if(i!==es)return;if(!t.ok)throw Error(typeof n.detail=="string"?n.detail:"The query could not be executed.");Lc(e,n.rows),Ye("cypher-status",n.truncated?"Showing the first 100 rows.":n.rows.length+(n.rows.length===1?" row.":" rows."))}catch(t){i===es&&Ye("cypher-status",t.message)}};async function Ic(){const i=++eo;if(!Ae)return;const e=Math.floor(ct);Ye("inspect-step","Paused at step "+e);const t=Dc(),n=le("store-rows");n.replaceChildren(),Ye("store-query",""),Ye("store-status","Reading the Relate database…");try{const r=le("store-question").value,s=await fetch(t+"/evidence/"+r+"?tick="+e,{cache:"no-store"});if(!s.ok)throw Error("The database could not be read.");const o=await s.json();if(i!==eo)return;Ye("store-query",o.query+(Object.keys(o.bindings).length?`

Parameters  `+JSON.stringify(o.bindings):""));const a=o.event_tick==null?"":" · "+(r==="candidates"?"planning read":"graph commit")+" at step "+o.event_tick;Ye("store-status",o.rows.length?o.rows.length+(o.rows.length===1?" row":" rows")+" from "+o.database+a:"No matching rows by step "+e+"."),Lc(n,o.rows)}catch{i===eo&&Ye("store-status","The saved database could not be read.")}}le("store-question").onchange=()=>{Ic()};function ya(){if(!Ae)return;const i=le("body-robot").value,{svg:e,note:t}=R0(Ae.fleetGraph,i,Ae.frames[Math.floor(ct)]);le("body-drawing").replaceChildren(e),Ye("body-note",t),cs=i,Yt.classList.remove("attention"),va.textContent="",xa.textContent=i,_s()}function Uc(i){gs=i,le("body-graph").hidden=!i,le("graph").hidden=i,le("plan-tab").setAttribute("aria-pressed",String(!i)),le("body-tab").setAttribute("aria-pressed",String(i)),i?(Lt(!1),ya()):(ls="",$t(ct))}le("body-robot").onchange=ya;le("body-tab").onclick=()=>Uc(!0);le("plan-tab").onclick=()=>Uc(!1);le("proof").onclick=()=>{Lt(!1),ss.showModal(),ss.scrollTop=0,le("store-question").focus({preventScroll:!0}),++es,le("cypher-console").open=!1,le("cypher-console").hidden=!nn&&!Ae?.outcome,Ye("cypher-status",""),le("cypher-rows").replaceChildren();const i=Rt,e=i?.kind==="hold"&&Ae?.events.some(t=>t.seq<i.seq&&t.issues?.length);le("store-question").value=gs?"bodies":i?.kind==="delivered"?"departure":i?.issues?.length||i?.kind==="fork fault"||e?"fault":i?.kind==="read"?"candidates":"facts",Ic()};function Sr(){const i=le("station").selectedOptions[0],e=i.value==="custom",t=fa();le("fleet-fields").hidden=!e,le("kit").disabled=e&&t.mechanics===0;const n=le("fault"),r=n.querySelector('[value="forks"]');r.disabled=e&&t.forklifts===0,r.disabled&&n.value==="forks"&&(n.value="none"),Ye("fleet-summary",t.pickers+t.couriers+t.forklifts+t.mechanics+" robots · "+t.orders+(t.orders===1?" active bay":" active bays"));const s=le("fault").selectedOptions[0];Ye("seed-hint",i?.dataset.seedHint??""),Ye("fault-hint",s?.dataset.hint??"")}bc();le("fleet-fields").onchange=i=>{i.target.id==="fleet-orders"&&P0(),Sr()};le("station").onchange=Sr;le("fault").onchange=Sr;function Ea(i){le("recordings-pane").hidden=!i,le("new-run-pane").hidden=i,le("recordings-tab").setAttribute("aria-pressed",String(i)),le("new-run-tab").setAttribute("aria-pressed",String(!i))}le("new-run-tab").onclick=()=>Ea(!1);le("recordings-tab").onclick=()=>Ea(!0);le("options").onclick=()=>{Lt(!1),Ea(!1),Sr(),$n.showModal(),$n.scrollTop=0};le("guide-open").onclick=()=>{Lt(!1),gr.start()};document.querySelectorAll("dialog .close").forEach(i=>i.onclick=()=>i.closest("dialog").close());document.querySelectorAll("[data-reel]").forEach(i=>i.onclick=()=>{$n.close(),as=!1,Sa(i.dataset.reel,null)});le("map").onclick=()=>{Yr=!Yr,Kt.view(Yr),Ye("map",Yr?"Follow camera":"Overhead camera"),$n.close(),$t(ct)};le("launch").onsubmit=i=>{i.preventDefault(),N0()};le("stop").onclick=()=>{Ma(),hi(),$n.close(),Ye("status","Live run stopped.")};document.addEventListener("keydown",i=>{$n.open||gr.active||ss.open||["INPUT","SELECT","BUTTON"].includes(i.target.tagName)||(i.code==="Space"?(i.preventDefault(),le("play").click()):i.key==="ArrowRight"&&(i.preventDefault(),le("next").click()))});function Nc(i){_i&&os&&Kt instanceof ms&&Kt.noteMovingFrame(i-Qs),os=!1;const e=Math.min(.32,(i-Qs)/1e3);if(Qs=i,_i&&Ae)if(Nn>0){if(Nn=Math.max(0,Nn-e),Rt){const t=1-Nn/pa(Rt);if(Rt.kind==="fork fault"){const n=t<.03?0:t<.065?.18:t<.13?.37:.6;ct<Rt.tick+n&&$t(Rt.tick+n)}if(Rt.kind==="read"&&Rt.targetRevision===1&&!Ae.layout.yard){const n=Math.min(.44,Math.floor(t*20)/20);ct<Rt.tick+n&&$t(Rt.tick+n)}Rc(Rt,t)}}else if(ct<Ae.frames.length-1){const t=ga(Ae).find(r=>ma(r)&&r.tick>ct+1e-5&&r.seq!==Yi),n=ct+e*(Ae.layout.yard?6.4:2.65);t&&n>=t.tick?($t(t.tick),hs()):$t(n)}else gn||(Lt(!1),as&&nn==="post"&&(as=!1,Sa("yard",null).then(()=>{nn==="yard"&&(hs(),Lt(!0))})));requestAnimationFrame(Nc)}async function F0(){await Sa(Zs==="yard"?"yard":Zs==="post-probe"||Zs==="probe"?"post-probe":"post",qo.get("at")),Ae&&!$n.open&&!ss.open&&!_i&&!gr.active&&gr.offer(qo);try{const i=await fetch("/api/live");if(i.ok){const{controllers:e}=await i.json(),t=le("controller").querySelector('[value="azure"]');t.disabled=!Array.isArray(e)||!e.includes("azure")}}catch{}}F0();requestAnimationFrame(Nc);
