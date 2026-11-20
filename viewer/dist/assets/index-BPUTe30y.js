(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const No="180",Sc=0,da=1,yc=2,Ec=0,ml=1,bc=2,Ln=3,qn=0,Ht=1,Yt=2,Wn=0,Ii=1,fa=2,pa=3,ma=4,Tc=5,ri=100,wc=101,Ac=102,Rc=103,Cc=104,Pc=200,Lc=201,Dc=202,Ic=203,Hs=204,Gs=205,Uc=206,Nc=207,Fc=208,Oc=209,kc=210,Bc=211,zc=212,Hc=213,Gc=214,Vs=0,Ws=1,Xs=2,Fi=3,qs=4,Ys=5,js=6,Ks=7,Fo=0,Vc=1,Wc=2,Xn=0,Xc=1,qc=2,Yc=3,gl=4,jc=5,Kc=6,$c=7,_l=300,Oi=301,ki=302,$s=303,Zs=304,Jr=306,Js=1e3,ai=1001,Qs=1002,fn=1003,Zc=1004,xr=1005,Mn=1006,os=1007,li=1008,bn=1009,vl=1010,xl=1011,sr=1012,Oo=1013,hi=1014,In=1015,fr=1016,ko=1017,Bo=1018,or=1020,Ml=35902,Sl=35899,yl=1021,El=1022,dn=1023,ar=1026,lr=1027,bl=1028,zo=1029,Tl=1030,Ho=1031,Go=1033,Hr=33776,Gr=33777,Vr=33778,Wr=33779,eo=35840,to=35841,no=35842,io=35843,ro=36196,so=37492,oo=37496,ao=37808,lo=37809,co=37810,ho=37811,uo=37812,fo=37813,po=37814,mo=37815,go=37816,_o=37817,vo=37818,xo=37819,Mo=37820,So=37821,yo=36492,Eo=36494,bo=36495,To=36283,wo=36284,Ao=36285,Ro=36286,Jc=3200,Qc=3201,Vo=0,eh=1,Gn="",Bt="srgb",Bi="srgb-linear",qr="linear",nt="srgb",mi=7680,ga=519,th=512,nh=513,ih=514,wl=515,rh=516,sh=517,oh=518,ah=519,_a=35044,va="300 es",Sn=2e3,Yr=2001;class Vi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let xa=1234567;const ir=Math.PI/180,cr=180/Math.PI;function Wi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Lt[i&255]+Lt[i>>8&255]+Lt[i>>16&255]+Lt[i>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[t&63|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[n&255]+Lt[n>>8&255]+Lt[n>>16&255]+Lt[n>>24&255]).toLowerCase()}function Ye(i,e,t){return Math.max(e,Math.min(t,i))}function Wo(i,e){return(i%e+e)%e}function lh(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function ch(i,e,t){return i!==e?(t-i)/(e-i):0}function rr(i,e,t){return(1-t)*i+t*e}function hh(i,e,t,n){return rr(i,e,1-Math.exp(-t*n))}function uh(i,e=1){return e-Math.abs(Wo(i,e*2)-e)}function dh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function fh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function ph(i,e){return i+Math.floor(Math.random()*(e-i+1))}function mh(i,e){return i+Math.random()*(e-i)}function gh(i){return i*(.5-Math.random())}function _h(i){i!==void 0&&(xa=i);let e=xa+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function vh(i){return i*ir}function xh(i){return i*cr}function Mh(i){return(i&i-1)===0&&i!==0}function Sh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function yh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Eh(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),h=o((e+n)/2),u=s((e-n)/2),p=o((e-n)/2),d=s((n-e)/2),_=o((n-e)/2);switch(r){case"XYX":i.set(a*h,l*u,l*p,a*c);break;case"YZY":i.set(l*p,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*p,a*h,a*c);break;case"XZX":i.set(a*h,l*_,l*d,a*c);break;case"YXY":i.set(l*d,a*h,l*_,a*c);break;case"ZYZ":i.set(l*_,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ci(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ut(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const yt={DEG2RAD:ir,RAD2DEG:cr,generateUUID:Wi,clamp:Ye,euclideanModulo:Wo,mapLinear:lh,inverseLerp:ch,lerp:rr,damp:hh,pingpong:uh,smoothstep:dh,smootherstep:fh,randInt:ph,randFloat:mh,randFloatSpread:gh,seededRandom:_h,degToRad:vh,radToDeg:xh,isPowerOfTwo:Mh,ceilPowerOfTwo:Sh,floorPowerOfTwo:yh,setQuaternionFromProperEuler:Eh,normalize:Ut,denormalize:Ci};class Ie{constructor(e=0,t=0){Ie.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pr{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],h=n[r+2],u=n[r+3];const p=s[o+0],d=s[o+1],_=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=p,e[t+1]=d,e[t+2]=_,e[t+3]=g;return}if(u!==g||l!==p||c!==d||h!==_){let m=1-a;const f=l*p+c*d+h*_+u*g,b=f>=0?1:-1,E=1-f*f;if(E>Number.EPSILON){const w=Math.sqrt(E),R=Math.atan2(w,f*b);m=Math.sin(m*R)/w,a=Math.sin(a*R)/w}const v=a*b;if(l=l*m+p*v,c=c*m+d*v,h=h*m+_*v,u=u*m+g*v,m===1-a){const w=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=w,c*=w,h*=w,u*=w}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],h=n[r+3],u=s[o],p=s[o+1],d=s[o+2],_=s[o+3];return e[t]=a*_+h*u+l*d-c*p,e[t+1]=l*_+h*p+c*u-a*d,e[t+2]=c*_+h*d+a*p-l*u,e[t+3]=h*_-a*u-l*p-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(r/2),u=a(s/2),p=l(n/2),d=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=p*h*u+c*d*_,this._y=c*d*u-p*h*_,this._z=c*h*_+p*d*u,this._w=c*h*u-p*d*_;break;case"YXZ":this._x=p*h*u+c*d*_,this._y=c*d*u-p*h*_,this._z=c*h*_-p*d*u,this._w=c*h*u+p*d*_;break;case"ZXY":this._x=p*h*u-c*d*_,this._y=c*d*u+p*h*_,this._z=c*h*_+p*d*u,this._w=c*h*u-p*d*_;break;case"ZYX":this._x=p*h*u-c*d*_,this._y=c*d*u+p*h*_,this._z=c*h*_-p*d*u,this._w=c*h*u+p*d*_;break;case"YZX":this._x=p*h*u+c*d*_,this._y=c*d*u+p*h*_,this._z=c*h*_-p*d*u,this._w=c*h*u-p*d*_;break;case"XZY":this._x=p*h*u-c*d*_,this._y=c*d*u-p*h*_,this._z=c*h*_+p*d*u,this._w=c*h*u+p*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],p=n+a+u;if(p>0){const d=.5/Math.sqrt(p+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-r*a,this._w=o*h-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,p=Math.sin(t*h)/c;return this._w=o*u+this._w*p,this._x=n*u+this._x*p,this._y=r*u+this._y*p,this._z=s*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ma.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ma.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),h=2*(a*t-s*r),u=2*(s*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=r+l*u+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return as.copy(this).projectOnVector(e),this.sub(as)}reflect(e){return this.sub(as.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const as=new I,Ma=new pr;class ze{constructor(e,t,n,r,s,o,a,l,c){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],p=n[2],d=n[5],_=n[8],g=r[0],m=r[3],f=r[6],b=r[1],E=r[4],v=r[7],w=r[2],R=r[5],T=r[8];return s[0]=o*g+a*b+l*w,s[3]=o*m+a*E+l*R,s[6]=o*f+a*v+l*T,s[1]=c*g+h*b+u*w,s[4]=c*m+h*E+u*R,s[7]=c*f+h*v+u*T,s[2]=p*g+d*b+_*w,s[5]=p*m+d*E+_*R,s[8]=p*f+d*v+_*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,p=a*l-h*s,d=c*s-o*l,_=t*u+n*p+r*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=u*g,e[1]=(r*c-h*n)*g,e[2]=(a*n-r*o)*g,e[3]=p*g,e[4]=(h*t-r*l)*g,e[5]=(r*s-a*t)*g,e[6]=d*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ls.makeScale(e,t)),this}rotate(e){return this.premultiply(ls.makeRotation(-e)),this}translate(e,t){return this.premultiply(ls.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ls=new ze;function Al(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function jr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function bh(){const i=jr("canvas");return i.style.display="block",i}const Sa={};function hr(i){i in Sa||(Sa[i]=!0,console.warn(i))}function Th(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const ya=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ea=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wh(){const i={enabled:!0,workingColorSpace:Bi,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===nt&&(r.r=Nn(r.r),r.g=Nn(r.g),r.b=Nn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===nt&&(r.r=Ui(r.r),r.g=Ui(r.g),r.b=Ui(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Gn?qr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return hr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return hr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Bi]:{primaries:e,whitePoint:n,transfer:qr,toXYZ:ya,fromXYZ:Ea,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Bt},outputColorSpaceConfig:{drawingBufferColorSpace:Bt}},[Bt]:{primaries:e,whitePoint:n,transfer:nt,toXYZ:ya,fromXYZ:Ea,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Bt}}}),i}const Qe=wh();function Nn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ui(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let gi;class Ah{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{gi===void 0&&(gi=jr("canvas")),gi.width=e.width,gi.height=e.height;const r=gi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=gi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=jr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Nn(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Nn(t[n]/255)*255):t[n]=Nn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Rh=0;class Xo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Rh++}),this.uuid=Wi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(cs(r[o].image)):s.push(cs(r[o]))}else s=cs(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function cs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ah.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ch=0;const hs=new I;class Ft extends Vi{constructor(e=Ft.DEFAULT_IMAGE,t=Ft.DEFAULT_MAPPING,n=ai,r=ai,s=Mn,o=li,a=dn,l=bn,c=Ft.DEFAULT_ANISOTROPY,h=Gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ch++}),this.uuid=Wi(),this.name="",this.source=new Xo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(hs).x}get height(){return this.source.getSize(hs).y}get depth(){return this.source.getSize(hs).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_l)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Js:e.x=e.x-Math.floor(e.x);break;case ai:e.x=e.x<0?0:1;break;case Qs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Js:e.y=e.y-Math.floor(e.y);break;case ai:e.y=e.y<0?0:1;break;case Qs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ft.DEFAULT_IMAGE=null;Ft.DEFAULT_MAPPING=_l;Ft.DEFAULT_ANISOTROPY=1;class mt{constructor(e=0,t=0,n=0,r=1){mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],h=l[4],u=l[8],p=l[1],d=l[5],_=l[9],g=l[2],m=l[6],f=l[10];if(Math.abs(h-p)<.01&&Math.abs(u-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+p)<.1&&Math.abs(u+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,v=(d+1)/2,w=(f+1)/2,R=(h+p)/4,T=(u+g)/4,P=(_+m)/4;return E>v&&E>w?E<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(E),r=R/n,s=T/n):v>w?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=R/r,s=P/r):w<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),n=T/s,r=P/s),this.set(n,r,s,t),this}let b=Math.sqrt((m-_)*(m-_)+(u-g)*(u-g)+(p-h)*(p-h));return Math.abs(b)<.001&&(b=1),this.x=(m-_)/b,this.y=(u-g)/b,this.z=(p-h)/b,this.w=Math.acos((c+d+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ph extends Vi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);const r={width:e,height:t,depth:n.depth},s=new Ft(r);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Mn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Xo(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ui extends Ph{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Rl extends Ft{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=fn,this.minFilter=fn,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Lh extends Ft{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=fn,this.minFilter=fn,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mr{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,sn):sn.fromBufferAttribute(s,o),sn.applyMatrix4(e.matrixWorld),this.expandByPoint(sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Mr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Mr.copy(n.boundingBox)),Mr.applyMatrix4(e.matrixWorld),this.union(Mr)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,sn),sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($i),Sr.subVectors(this.max,$i),_i.subVectors(e.a,$i),vi.subVectors(e.b,$i),xi.subVectors(e.c,$i),Fn.subVectors(vi,_i),On.subVectors(xi,vi),$n.subVectors(_i,xi);let t=[0,-Fn.z,Fn.y,0,-On.z,On.y,0,-$n.z,$n.y,Fn.z,0,-Fn.x,On.z,0,-On.x,$n.z,0,-$n.x,-Fn.y,Fn.x,0,-On.y,On.x,0,-$n.y,$n.x,0];return!us(t,_i,vi,xi,Sr)||(t=[1,0,0,0,1,0,0,0,1],!us(t,_i,vi,xi,Sr))?!1:(yr.crossVectors(Fn,On),t=[yr.x,yr.y,yr.z],us(t,_i,vi,xi,Sr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const wn=[new I,new I,new I,new I,new I,new I,new I,new I],sn=new I,Mr=new mr,_i=new I,vi=new I,xi=new I,Fn=new I,On=new I,$n=new I,$i=new I,Sr=new I,yr=new I,Zn=new I;function us(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Zn.fromArray(i,s);const a=r.x*Math.abs(Zn.x)+r.y*Math.abs(Zn.y)+r.z*Math.abs(Zn.z),l=e.dot(Zn),c=t.dot(Zn),h=n.dot(Zn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Dh=new mr,Zi=new I,ds=new I;class qo{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Dh.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zi.subVectors(e,this.center);const t=Zi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Zi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ds.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zi.copy(e.center).add(ds)),this.expandByPoint(Zi.copy(e.center).sub(ds))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const An=new I,fs=new I,Er=new I,kn=new I,ps=new I,br=new I,ms=new I;class Ih{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,An)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=An.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(An.copy(this.origin).addScaledVector(this.direction,t),An.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){fs.copy(e).add(t).multiplyScalar(.5),Er.copy(t).sub(e).normalize(),kn.copy(this.origin).sub(fs);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Er),a=kn.dot(this.direction),l=-kn.dot(Er),c=kn.lengthSq(),h=Math.abs(1-o*o);let u,p,d,_;if(h>0)if(u=o*l-a,p=o*a-l,_=s*h,u>=0)if(p>=-_)if(p<=_){const g=1/h;u*=g,p*=g,d=u*(u+o*p+2*a)+p*(o*u+p+2*l)+c}else p=s,u=Math.max(0,-(o*p+a)),d=-u*u+p*(p+2*l)+c;else p=-s,u=Math.max(0,-(o*p+a)),d=-u*u+p*(p+2*l)+c;else p<=-_?(u=Math.max(0,-(-o*s+a)),p=u>0?-s:Math.min(Math.max(-s,-l),s),d=-u*u+p*(p+2*l)+c):p<=_?(u=0,p=Math.min(Math.max(-s,-l),s),d=p*(p+2*l)+c):(u=Math.max(0,-(o*s+a)),p=u>0?s:Math.min(Math.max(-s,-l),s),d=-u*u+p*(p+2*l)+c);else p=o>0?-s:s,u=Math.max(0,-(o*p+a)),d=-u*u+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(fs).addScaledVector(Er,p),d}intersectSphere(e,t){An.subVectors(e.center,this.origin);const n=An.dot(this.direction),r=An.dot(An)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return c>=0?(n=(e.min.x-p.x)*c,r=(e.max.x-p.x)*c):(n=(e.max.x-p.x)*c,r=(e.min.x-p.x)*c),h>=0?(s=(e.min.y-p.y)*h,o=(e.max.y-p.y)*h):(s=(e.max.y-p.y)*h,o=(e.min.y-p.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(e.min.z-p.z)*u,l=(e.max.z-p.z)*u):(a=(e.max.z-p.z)*u,l=(e.min.z-p.z)*u),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,An)!==null}intersectTriangle(e,t,n,r,s){ps.subVectors(t,e),br.subVectors(n,e),ms.crossVectors(ps,br);let o=this.direction.dot(ms),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;kn.subVectors(this.origin,e);const l=a*this.direction.dot(br.crossVectors(kn,br));if(l<0)return null;const c=a*this.direction.dot(ps.cross(kn));if(c<0||l+c>o)return null;const h=-a*kn.dot(ms);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vt{constructor(e,t,n,r,s,o,a,l,c,h,u,p,d,_,g,m){vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,h,u,p,d,_,g,m)}set(e,t,n,r,s,o,a,l,c,h,u,p,d,_,g,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=p,f[3]=d,f[7]=_,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Mi.setFromMatrixColumn(e,0).length(),s=1/Mi.setFromMatrixColumn(e,1).length(),o=1/Mi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const p=o*h,d=o*u,_=a*h,g=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+_*c,t[5]=p-g*c,t[9]=-a*l,t[2]=g-p*c,t[6]=_+d*c,t[10]=o*l}else if(e.order==="YXZ"){const p=l*h,d=l*u,_=c*h,g=c*u;t[0]=p+g*a,t[4]=_*a-d,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-_,t[6]=g+p*a,t[10]=o*l}else if(e.order==="ZXY"){const p=l*h,d=l*u,_=c*h,g=c*u;t[0]=p-g*a,t[4]=-o*u,t[8]=_+d*a,t[1]=d+_*a,t[5]=o*h,t[9]=g-p*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const p=o*h,d=o*u,_=a*h,g=a*u;t[0]=l*h,t[4]=_*c-d,t[8]=p*c+g,t[1]=l*u,t[5]=g*c+p,t[9]=d*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const p=o*l,d=o*c,_=a*l,g=a*c;t[0]=l*h,t[4]=g-p*u,t[8]=_*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*u+_,t[10]=p-g*u}else if(e.order==="XZY"){const p=o*l,d=o*c,_=a*l,g=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=p*u+g,t[5]=o*h,t[9]=d*u-_,t[2]=_*u-d,t[6]=a*h,t[10]=g*u+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Uh,e,Nh)}lookAt(e,t,n){const r=this.elements;return Xt.subVectors(e,t),Xt.lengthSq()===0&&(Xt.z=1),Xt.normalize(),Bn.crossVectors(n,Xt),Bn.lengthSq()===0&&(Math.abs(n.z)===1?Xt.x+=1e-4:Xt.z+=1e-4,Xt.normalize(),Bn.crossVectors(n,Xt)),Bn.normalize(),Tr.crossVectors(Xt,Bn),r[0]=Bn.x,r[4]=Tr.x,r[8]=Xt.x,r[1]=Bn.y,r[5]=Tr.y,r[9]=Xt.y,r[2]=Bn.z,r[6]=Tr.z,r[10]=Xt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],p=n[9],d=n[13],_=n[2],g=n[6],m=n[10],f=n[14],b=n[3],E=n[7],v=n[11],w=n[15],R=r[0],T=r[4],P=r[8],M=r[12],S=r[1],D=r[5],O=r[9],A=r[13],N=r[2],F=r[6],V=r[10],q=r[14],G=r[3],ne=r[7],le=r[11],K=r[15];return s[0]=o*R+a*S+l*N+c*G,s[4]=o*T+a*D+l*F+c*ne,s[8]=o*P+a*O+l*V+c*le,s[12]=o*M+a*A+l*q+c*K,s[1]=h*R+u*S+p*N+d*G,s[5]=h*T+u*D+p*F+d*ne,s[9]=h*P+u*O+p*V+d*le,s[13]=h*M+u*A+p*q+d*K,s[2]=_*R+g*S+m*N+f*G,s[6]=_*T+g*D+m*F+f*ne,s[10]=_*P+g*O+m*V+f*le,s[14]=_*M+g*A+m*q+f*K,s[3]=b*R+E*S+v*N+w*G,s[7]=b*T+E*D+v*F+w*ne,s[11]=b*P+E*O+v*V+w*le,s[15]=b*M+E*A+v*q+w*K,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],p=e[10],d=e[14],_=e[3],g=e[7],m=e[11],f=e[15];return _*(+s*l*u-r*c*u-s*a*p+n*c*p+r*a*d-n*l*d)+g*(+t*l*d-t*c*p+s*o*p-r*o*d+r*c*h-s*l*h)+m*(+t*c*u-t*a*d-s*o*u+n*o*d+s*a*h-n*c*h)+f*(-r*a*h-t*l*u+t*a*p+r*o*u-n*o*p+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],p=e[10],d=e[11],_=e[12],g=e[13],m=e[14],f=e[15],b=u*m*c-g*p*c+g*l*d-a*m*d-u*l*f+a*p*f,E=_*p*c-h*m*c-_*l*d+o*m*d+h*l*f-o*p*f,v=h*g*c-_*u*c+_*a*d-o*g*d-h*a*f+o*u*f,w=_*u*l-h*g*l-_*a*p+o*g*p+h*a*m-o*u*m,R=t*b+n*E+r*v+s*w;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/R;return e[0]=b*T,e[1]=(g*p*s-u*m*s-g*r*d+n*m*d+u*r*f-n*p*f)*T,e[2]=(a*m*s-g*l*s+g*r*c-n*m*c-a*r*f+n*l*f)*T,e[3]=(u*l*s-a*p*s-u*r*c+n*p*c+a*r*d-n*l*d)*T,e[4]=E*T,e[5]=(h*m*s-_*p*s+_*r*d-t*m*d-h*r*f+t*p*f)*T,e[6]=(_*l*s-o*m*s-_*r*c+t*m*c+o*r*f-t*l*f)*T,e[7]=(o*p*s-h*l*s+h*r*c-t*p*c-o*r*d+t*l*d)*T,e[8]=v*T,e[9]=(_*u*s-h*g*s-_*n*d+t*g*d+h*n*f-t*u*f)*T,e[10]=(o*g*s-_*a*s+_*n*c-t*g*c-o*n*f+t*a*f)*T,e[11]=(h*a*s-o*u*s-h*n*c+t*u*c+o*n*d-t*a*d)*T,e[12]=w*T,e[13]=(h*g*r-_*u*r+_*n*p-t*g*p-h*n*m+t*u*m)*T,e[14]=(_*a*r-o*g*r-_*n*l+t*g*l+o*n*m-t*a*m)*T,e[15]=(o*u*r-h*a*r+h*n*l-t*u*l-o*n*p+t*a*p)*T,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+n,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,u=a+a,p=s*c,d=s*h,_=s*u,g=o*h,m=o*u,f=a*u,b=l*c,E=l*h,v=l*u,w=n.x,R=n.y,T=n.z;return r[0]=(1-(g+f))*w,r[1]=(d+v)*w,r[2]=(_-E)*w,r[3]=0,r[4]=(d-v)*R,r[5]=(1-(p+f))*R,r[6]=(m+b)*R,r[7]=0,r[8]=(_+E)*T,r[9]=(m-b)*T,r[10]=(1-(p+g))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Mi.set(r[0],r[1],r[2]).length();const o=Mi.set(r[4],r[5],r[6]).length(),a=Mi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],on.copy(this);const c=1/s,h=1/o,u=1/a;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=h,on.elements[5]*=h,on.elements[6]*=h,on.elements[8]*=u,on.elements[9]*=u,on.elements[10]*=u,t.setFromRotationMatrix(on),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=Sn,l=!1){const c=this.elements,h=2*s/(t-e),u=2*s/(n-r),p=(t+e)/(t-e),d=(n+r)/(n-r);let _,g;if(l)_=s/(o-s),g=o*s/(o-s);else if(a===Sn)_=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Yr)_=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=Sn,l=!1){const c=this.elements,h=2/(t-e),u=2/(n-r),p=-(t+e)/(t-e),d=-(n+r)/(n-r);let _,g;if(l)_=1/(o-s),g=o/(o-s);else if(a===Sn)_=-2/(o-s),g=-(o+s)/(o-s);else if(a===Yr)_=-1/(o-s),g=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=p,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Mi=new I,on=new vt,Uh=new I(0,0,0),Nh=new I(1,1,1),Bn=new I,Tr=new I,Xt=new I,ba=new vt,Ta=new pr;class gn{constructor(e=0,t=0,n=0,r=gn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],u=r[2],p=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ba.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ba,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ta.setFromEuler(this),this.setFromQuaternion(Ta,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gn.DEFAULT_ORDER="XYZ";class Cl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Fh=0;const wa=new I,Si=new pr,Rn=new vt,wr=new I,Ji=new I,Oh=new I,kh=new pr,Aa=new I(1,0,0),Ra=new I(0,1,0),Ca=new I(0,0,1),Pa={type:"added"},Bh={type:"removed"},yi={type:"childadded",child:null},gs={type:"childremoved",child:null};class Pt extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fh++}),this.uuid=Wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pt.DEFAULT_UP.clone();const e=new I,t=new gn,n=new pr,r=new I(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new vt},normalMatrix:{value:new ze}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=Pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Si.setFromAxisAngle(e,t),this.quaternion.multiply(Si),this}rotateOnWorldAxis(e,t){return Si.setFromAxisAngle(e,t),this.quaternion.premultiply(Si),this}rotateX(e){return this.rotateOnAxis(Aa,e)}rotateY(e){return this.rotateOnAxis(Ra,e)}rotateZ(e){return this.rotateOnAxis(Ca,e)}translateOnAxis(e,t){return wa.copy(e).applyQuaternion(this.quaternion),this.position.add(wa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Aa,e)}translateY(e){return this.translateOnAxis(Ra,e)}translateZ(e){return this.translateOnAxis(Ca,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Rn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?wr.copy(e):wr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ji.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rn.lookAt(Ji,wr,this.up):Rn.lookAt(wr,Ji,this.up),this.quaternion.setFromRotationMatrix(Rn),r&&(Rn.extractRotation(r.matrixWorld),Si.setFromRotationMatrix(Rn),this.quaternion.premultiply(Si.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pa),yi.child=e,this.dispatchEvent(yi),yi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Bh),gs.child=e,this.dispatchEvent(gs),gs.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Rn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Rn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Rn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pa),yi.child=e,this.dispatchEvent(yi),yi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ji,e,Oh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ji,kh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),p=o(e.skeletons),d=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),p.length>0&&(n.skeletons=p),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=r,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Pt.DEFAULT_UP=new I(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const an=new I,Cn=new I,_s=new I,Pn=new I,Ei=new I,bi=new I,La=new I,vs=new I,xs=new I,Ms=new I,Ss=new mt,ys=new mt,Es=new mt;class un{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),an.subVectors(e,t),r.cross(an);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){an.subVectors(r,t),Cn.subVectors(n,t),_s.subVectors(e,t);const o=an.dot(an),a=an.dot(Cn),l=an.dot(_s),c=Cn.dot(Cn),h=Cn.dot(_s),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;const p=1/u,d=(c*l-a*h)*p,_=(o*h-a*l)*p;return s.set(1-d-_,_,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Pn)===null?!1:Pn.x>=0&&Pn.y>=0&&Pn.x+Pn.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,Pn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Pn.x),l.addScaledVector(o,Pn.y),l.addScaledVector(a,Pn.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return Ss.setScalar(0),ys.setScalar(0),Es.setScalar(0),Ss.fromBufferAttribute(e,t),ys.fromBufferAttribute(e,n),Es.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Ss,s.x),o.addScaledVector(ys,s.y),o.addScaledVector(Es,s.z),o}static isFrontFacing(e,t,n,r){return an.subVectors(n,t),Cn.subVectors(e,t),an.cross(Cn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return an.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),an.cross(Cn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return un.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return un.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;Ei.subVectors(r,n),bi.subVectors(s,n),vs.subVectors(e,n);const l=Ei.dot(vs),c=bi.dot(vs);if(l<=0&&c<=0)return t.copy(n);xs.subVectors(e,r);const h=Ei.dot(xs),u=bi.dot(xs);if(h>=0&&u<=h)return t.copy(r);const p=l*u-h*c;if(p<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Ei,o);Ms.subVectors(e,s);const d=Ei.dot(Ms),_=bi.dot(Ms);if(_>=0&&d<=_)return t.copy(s);const g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(bi,a);const m=h*_-d*u;if(m<=0&&u-h>=0&&d-_>=0)return La.subVectors(s,r),a=(u-h)/(u-h+(d-_)),t.copy(r).addScaledVector(La,a);const f=1/(m+g+p);return o=g*f,a=p*f,t.copy(n).addScaledVector(Ei,o).addScaledVector(bi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Pl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zn={h:0,s:0,l:0},Ar={h:0,s:0,l:0};function bs(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class $e{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Qe.workingColorSpace){if(e=Wo(e,1),t=Ye(t,0,1),n=Ye(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=bs(o,s,e+1/3),this.g=bs(o,s,e),this.b=bs(o,s,e-1/3)}return Qe.colorSpaceToWorking(this,r),this}setStyle(e,t=Bt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Bt){const n=Pl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Nn(e.r),this.g=Nn(e.g),this.b=Nn(e.b),this}copyLinearToSRGB(e){return this.r=Ui(e.r),this.g=Ui(e.g),this.b=Ui(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bt){return Qe.workingToColorSpace(Dt.copy(this),e),Math.round(Ye(Dt.r*255,0,255))*65536+Math.round(Ye(Dt.g*255,0,255))*256+Math.round(Ye(Dt.b*255,0,255))}getHexString(e=Bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.workingToColorSpace(Dt.copy(this),t);const n=Dt.r,r=Dt.g,s=Dt.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-n)/u+2;break;case s:l=(n-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Qe.workingColorSpace){return Qe.workingToColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=Bt){Qe.workingToColorSpace(Dt.copy(this),e);const t=Dt.r,n=Dt.g,r=Dt.b;return e!==Bt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(zn),this.setHSL(zn.h+e,zn.s+t,zn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(zn),e.getHSL(Ar);const n=rr(zn.h,Ar.h,t),r=rr(zn.s,Ar.s,t),s=rr(zn.l,Ar.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dt=new $e;$e.NAMES=Pl;let zh=0;class Xi extends Vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zh++}),this.uuid=Wi(),this.name="",this.type="Material",this.blending=Ii,this.side=qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hs,this.blendDst=Gs,this.blendEquation=ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=Fi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ga,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mi,this.stencilZFail=mi,this.stencilZPass=mi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ii&&(n.blending=this.blending),this.side!==qn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Hs&&(n.blendSrc=this.blendSrc),this.blendDst!==Gs&&(n.blendDst=this.blendDst),this.blendEquation!==ri&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Fi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ga&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==mi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==mi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==mi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class qi extends Xi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=Fo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new I,Rr=new Ie;let Hh=0;class rn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Hh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=_a,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Rr.fromBufferAttribute(this,t),Rr.applyMatrix3(e),this.setXY(t,Rr.x,Rr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ci(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ut(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ci(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ci(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ci(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ci(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),r=Ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),r=Ut(r,this.array),s=Ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_a&&(e.usage=this.usage),e}}class Ll extends rn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Dl extends rn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ct extends rn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Gh=0;const Jt=new vt,Ts=new Pt,Ti=new I,qt=new mr,Qi=new mr,Rt=new I;class Gt extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gh++}),this.uuid=Wi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Al(e)?Dl:Ll)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ze().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jt.makeRotationFromQuaternion(e),this.applyMatrix4(Jt),this}rotateX(e){return Jt.makeRotationX(e),this.applyMatrix4(Jt),this}rotateY(e){return Jt.makeRotationY(e),this.applyMatrix4(Jt),this}rotateZ(e){return Jt.makeRotationZ(e),this.applyMatrix4(Jt),this}translate(e,t,n){return Jt.makeTranslation(e,t,n),this.applyMatrix4(Jt),this}scale(e,t,n){return Jt.makeScale(e,t,n),this.applyMatrix4(Jt),this}lookAt(e){return Ts.lookAt(e),Ts.updateMatrix(),this.applyMatrix4(Ts.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ti).negate(),this.translate(Ti.x,Ti.y,Ti.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ct(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];qt.setFromBufferAttribute(s),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Qi.setFromBufferAttribute(a),this.morphTargetsRelative?(Rt.addVectors(qt.min,Qi.min),qt.expandByPoint(Rt),Rt.addVectors(qt.max,Qi.max),qt.expandByPoint(Rt)):(qt.expandByPoint(Qi.min),qt.expandByPoint(Qi.max))}qt.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Rt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Rt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Rt.fromBufferAttribute(a,c),l&&(Ti.fromBufferAttribute(e,c),Rt.add(Ti)),r=Math.max(r,n.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new I,l[P]=new I;const c=new I,h=new I,u=new I,p=new Ie,d=new Ie,_=new Ie,g=new I,m=new I;function f(P,M,S){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,S),p.fromBufferAttribute(s,P),d.fromBufferAttribute(s,M),_.fromBufferAttribute(s,S),h.sub(c),u.sub(c),d.sub(p),_.sub(p);const D=1/(d.x*_.y-_.x*d.y);isFinite(D)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(u,-d.y).multiplyScalar(D),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-_.x).multiplyScalar(D),a[P].add(g),a[M].add(g),a[S].add(g),l[P].add(m),l[M].add(m),l[S].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let P=0,M=b.length;P<M;++P){const S=b[P],D=S.start,O=S.count;for(let A=D,N=D+O;A<N;A+=3)f(e.getX(A+0),e.getX(A+1),e.getX(A+2))}const E=new I,v=new I,w=new I,R=new I;function T(P){w.fromBufferAttribute(r,P),R.copy(w);const M=a[P];E.copy(M),E.sub(w.multiplyScalar(w.dot(M))).normalize(),v.crossVectors(R,M);const D=v.dot(l[P])<0?-1:1;o.setXYZW(P,E.x,E.y,E.z,D)}for(let P=0,M=b.length;P<M;++P){const S=b[P],D=S.start,O=S.count;for(let A=D,N=D+O;A<N;A+=3)T(e.getX(A+0)),T(e.getX(A+1)),T(e.getX(A+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new rn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,d=n.count;p<d;p++)n.setXYZ(p,0,0,0);const r=new I,s=new I,o=new I,a=new I,l=new I,c=new I,h=new I,u=new I;if(e)for(let p=0,d=e.count;p<d;p+=3){const _=e.getX(p+0),g=e.getX(p+1),m=e.getX(p+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,d=t.count;p<d;p+=3)r.fromBufferAttribute(t,p+0),s.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,p=new c.constructor(l.length*h);let d=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*h;for(let f=0;f<h;f++)p[_++]=c[d++]}return new rn(p,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Gt,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const p=c[h],d=e(p,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,p=c.length;u<p;u++){const d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let p=0,d=u.length;p<d;p++)h.push(u[p].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Da=new vt,Jn=new Ih,Cr=new qo,Ia=new I,Pr=new I,Lr=new I,Dr=new I,ws=new I,Ir=new I,Ua=new I,Ur=new I;class Ct extends Pt{constructor(e=new Gt,t=new qi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ir.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&(ws.fromBufferAttribute(u,e),o?Ir.addScaledVector(ws,h):Ir.addScaledVector(ws.sub(t),h))}t.add(Ir)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere),Cr.applyMatrix4(s),Jn.copy(e.ray).recast(e.near),!(Cr.containsPoint(Jn.origin)===!1&&(Jn.intersectSphere(Cr,Ia)===null||Jn.origin.distanceToSquared(Ia)>(e.far-e.near)**2))&&(Da.copy(s).invert(),Jn.copy(e.ray).applyMatrix4(Da),!(n.boundingBox!==null&&Jn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Jn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,p=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=p.length;_<g;_++){const m=p[_],f=o[m.materialIndex],b=Math.max(m.start,d.start),E=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=b,w=E;v<w;v+=3){const R=a.getX(v),T=a.getX(v+1),P=a.getX(v+2);r=Nr(this,f,e,n,c,h,u,R,T,P),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let m=_,f=g;m<f;m+=3){const b=a.getX(m),E=a.getX(m+1),v=a.getX(m+2);r=Nr(this,o,e,n,c,h,u,b,E,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=p.length;_<g;_++){const m=p[_],f=o[m.materialIndex],b=Math.max(m.start,d.start),E=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=b,w=E;v<w;v+=3){const R=v,T=v+1,P=v+2;r=Nr(this,f,e,n,c,h,u,R,T,P),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let m=_,f=g;m<f;m+=3){const b=m,E=m+1,v=m+2;r=Nr(this,o,e,n,c,h,u,b,E,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Vh(i,e,t,n,r,s,o,a){let l;if(e.side===Ht?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===qn,a),l===null)return null;Ur.copy(a),Ur.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ur);return c<t.near||c>t.far?null:{distance:c,point:Ur.clone(),object:i}}function Nr(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,Pr),i.getVertexPosition(l,Lr),i.getVertexPosition(c,Dr);const h=Vh(i,e,t,n,Pr,Lr,Dr,Ua);if(h){const u=new I;un.getBarycoord(Ua,Pr,Lr,Dr,u),r&&(h.uv=un.getInterpolatedAttribute(r,a,l,c,u,new Ie)),s&&(h.uv1=un.getInterpolatedAttribute(s,a,l,c,u,new Ie)),o&&(h.normal=un.getInterpolatedAttribute(o,a,l,c,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const p={a,b:l,c,normal:new I,materialIndex:0};un.getNormal(Pr,Lr,Dr,p.normal),h.face=p,h.barycoord=u}return h}class fi extends Gt{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let p=0,d=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,r,o,2),_("x","z","y",1,-1,e,n,-t,r,o,3),_("x","y","z",1,-1,e,t,n,r,s,4),_("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new ct(c,3)),this.setAttribute("normal",new ct(h,3)),this.setAttribute("uv",new ct(u,2));function _(g,m,f,b,E,v,w,R,T,P,M){const S=v/T,D=w/P,O=v/2,A=w/2,N=R/2,F=T+1,V=P+1;let q=0,G=0;const ne=new I;for(let le=0;le<V;le++){const K=le*D-A;for(let we=0;we<F;we++){const He=we*S-O;ne[g]=He*b,ne[m]=K*E,ne[f]=N,c.push(ne.x,ne.y,ne.z),ne[g]=0,ne[m]=0,ne[f]=R>0?1:-1,h.push(ne.x,ne.y,ne.z),u.push(we/T),u.push(1-le/P),q+=1}}for(let le=0;le<P;le++)for(let K=0;K<T;K++){const we=p+K+F*le,He=p+K+F*(le+1),Xe=p+(K+1)+F*(le+1),je=p+(K+1)+F*le;l.push(we,He,je),l.push(He,Xe,je),G+=6}a.addGroup(d,G,M),d+=G,p+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function zi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Nt(i){const e={};for(let t=0;t<i.length;t++){const n=zi(i[t]);for(const r in n)e[r]=n[r]}return e}function Wh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Il(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const Xh={clone:zi,merge:Nt};var qh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yn extends Xi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qh,this.fragmentShader=Yh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zi(e.uniforms),this.uniformsGroups=Wh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ul extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=Sn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Hn=new I,Na=new Ie,Fa=new Ie;class cn extends Ul{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=cr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ir*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cr*2*Math.atan(Math.tan(ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Hn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Hn.x,Hn.y).multiplyScalar(-e/Hn.z),Hn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hn.x,Hn.y).multiplyScalar(-e/Hn.z)}getViewSize(e,t){return this.getViewBounds(e,Na,Fa),t.subVectors(Fa,Na)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ir*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const wi=-90,Ai=1;class jh extends Pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new cn(wi,Ai,e,t);r.layers=this.layers,this.add(r);const s=new cn(wi,Ai,e,t);s.layers=this.layers,this.add(s);const o=new cn(wi,Ai,e,t);o.layers=this.layers,this.add(o);const a=new cn(wi,Ai,e,t);a.layers=this.layers,this.add(a);const l=new cn(wi,Ai,e,t);l.layers=this.layers,this.add(l);const c=new cn(wi,Ai,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Sn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Yr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,u=e.getRenderTarget(),p=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(u,p,d),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Nl extends Ft{constructor(e=[],t=Oi,n,r,s,o,a,l,c,h){super(e,t,n,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Kh extends ui{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Nl(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new fi(5,5,5),s=new Yn({name:"CubemapFromEquirect",uniforms:zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ht,blending:Wn});s.uniforms.tEquirect.value=t;const o=new Ct(r,s),a=t.minFilter;return t.minFilter===li&&(t.minFilter=Mn),new jh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}class ot extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $h={type:"move"};class As{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ot,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ot,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ot,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),f=this._getHandJoint(c,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],p=h.position.distanceTo(u.position),d=.02,_=.005;c.inputState.pinching&&p>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($h)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ot;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Zh extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gn,this.environmentIntensity=1,this.environmentRotation=new gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Rs=new I,Jh=new I,Qh=new ze;class ni{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Rs.subVectors(n,t).cross(Jh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Rs),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Qh.getNormalMatrix(e),r=this.coplanarPoint(Rs).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qn=new qo,eu=new Ie(.5,.5),Fr=new I;class Yo{constructor(e=new ni,t=new ni,n=new ni,r=new ni,s=new ni,o=new ni){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Sn,n=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],u=s[5],p=s[6],d=s[7],_=s[8],g=s[9],m=s[10],f=s[11],b=s[12],E=s[13],v=s[14],w=s[15];if(r[0].setComponents(c-o,d-h,f-_,w-b).normalize(),r[1].setComponents(c+o,d+h,f+_,w+b).normalize(),r[2].setComponents(c+a,d+u,f+g,w+E).normalize(),r[3].setComponents(c-a,d-u,f-g,w-E).normalize(),n)r[4].setComponents(l,p,m,v).normalize(),r[5].setComponents(c-l,d-p,f-m,w-v).normalize();else if(r[4].setComponents(c-l,d-p,f-m,w-v).normalize(),t===Sn)r[5].setComponents(c+l,d+p,f+m,w+v).normalize();else if(t===Yr)r[5].setComponents(l,p,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qn)}intersectsSprite(e){Qn.center.set(0,0,0);const t=eu.distanceTo(e.center);return Qn.radius=.7071067811865476+t,Qn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Fr.x=r.normal.x>0?e.max.x:e.min.x,Fr.y=r.normal.y>0?e.max.y:e.min.y,Fr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Fr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class tu extends Ft{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Fl extends Ft{constructor(e,t,n=hi,r,s,o,a=fn,l=fn,c,h=ar,u=1){if(h!==ar&&h!==lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:e,height:t,depth:u};super(p,r,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Xo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ol extends Ft{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class di extends Gt{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],u=[],p=[],d=[];let _=0;const g=[],m=n/2;let f=0;b(),o===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new ct(u,3)),this.setAttribute("normal",new ct(p,3)),this.setAttribute("uv",new ct(d,2));function b(){const v=new I,w=new I;let R=0;const T=(t-e)/n;for(let P=0;P<=s;P++){const M=[],S=P/s,D=S*(t-e)+e;for(let O=0;O<=r;O++){const A=O/r,N=A*l+a,F=Math.sin(N),V=Math.cos(N);w.x=D*F,w.y=-S*n+m,w.z=D*V,u.push(w.x,w.y,w.z),v.set(F,T,V).normalize(),p.push(v.x,v.y,v.z),d.push(A,1-S),M.push(_++)}g.push(M)}for(let P=0;P<r;P++)for(let M=0;M<s;M++){const S=g[M][P],D=g[M+1][P],O=g[M+1][P+1],A=g[M][P+1];(e>0||M!==0)&&(h.push(S,D,A),R+=3),(t>0||M!==s-1)&&(h.push(D,O,A),R+=3)}c.addGroup(f,R,0),f+=R}function E(v){const w=_,R=new Ie,T=new I;let P=0;const M=v===!0?e:t,S=v===!0?1:-1;for(let O=1;O<=r;O++)u.push(0,m*S,0),p.push(0,S,0),d.push(.5,.5),_++;const D=_;for(let O=0;O<=r;O++){const N=O/r*l+a,F=Math.cos(N),V=Math.sin(N);T.x=M*V,T.y=m*S,T.z=M*F,u.push(T.x,T.y,T.z),p.push(0,S,0),R.x=F*.5+.5,R.y=V*.5*S+.5,d.push(R.x,R.y),_++}for(let O=0;O<r;O++){const A=w+O,N=D+O;v===!0?h.push(N,N+1,A):h.push(N+1,N,A),P+=3}c.addGroup(f,P,v===!0?1:2),f+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new di(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class jo extends di{constructor(e=1,t=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new jo(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ko extends Gt{constructor(e=[new Ie(0,-.5),new Ie(.5,0),new Ie(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=Ye(r,0,Math.PI*2);const s=[],o=[],a=[],l=[],c=[],h=1/t,u=new I,p=new Ie,d=new I,_=new I,g=new I;let m=0,f=0;for(let b=0;b<=e.length-1;b++)switch(b){case 0:m=e[b+1].x-e[b].x,f=e[b+1].y-e[b].y,d.x=f*1,d.y=-m,d.z=f*0,g.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(g.x,g.y,g.z);break;default:m=e[b+1].x-e[b].x,f=e[b+1].y-e[b].y,d.x=f*1,d.y=-m,d.z=f*0,_.copy(d),d.x+=g.x,d.y+=g.y,d.z+=g.z,d.normalize(),l.push(d.x,d.y,d.z),g.copy(_)}for(let b=0;b<=t;b++){const E=n+b*h*r,v=Math.sin(E),w=Math.cos(E);for(let R=0;R<=e.length-1;R++){u.x=e[R].x*v,u.y=e[R].y,u.z=e[R].x*w,o.push(u.x,u.y,u.z),p.x=b/t,p.y=R/(e.length-1),a.push(p.x,p.y);const T=l[3*R+0]*v,P=l[3*R+1],M=l[3*R+0]*w;c.push(T,P,M)}}for(let b=0;b<t;b++)for(let E=0;E<e.length-1;E++){const v=E+b*e.length,w=v,R=v+e.length,T=v+e.length+1,P=v+1;s.push(w,R,P),s.push(T,P,R)}this.setIndex(s),this.setAttribute("position",new ct(o,3)),this.setAttribute("uv",new ct(a,2)),this.setAttribute("normal",new ct(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ko(e.points,e.segments,e.phiStart,e.phiLength)}}class gr extends Gt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,h=l+1,u=e/a,p=t/l,d=[],_=[],g=[],m=[];for(let f=0;f<h;f++){const b=f*p-o;for(let E=0;E<c;E++){const v=E*u-s;_.push(v,-b,0),g.push(0,0,1),m.push(E/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let b=0;b<a;b++){const E=b+c*f,v=b+c*(f+1),w=b+1+c*(f+1),R=b+1+c*f;d.push(E,v,R),d.push(v,w,R)}this.setIndex(d),this.setAttribute("position",new ct(_,3)),this.setAttribute("normal",new ct(g,3)),this.setAttribute("uv",new ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Qr extends Gt{constructor(e=.5,t=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);const a=[],l=[],c=[],h=[];let u=e;const p=(t-e)/r,d=new I,_=new Ie;for(let g=0;g<=r;g++){for(let m=0;m<=n;m++){const f=s+m/n*o;d.x=u*Math.cos(f),d.y=u*Math.sin(f),l.push(d.x,d.y,d.z),c.push(0,0,1),_.x=(d.x/t+1)/2,_.y=(d.y/t+1)/2,h.push(_.x,_.y)}u+=p}for(let g=0;g<r;g++){const m=g*(n+1);for(let f=0;f<n;f++){const b=f+m,E=b,v=b+n+1,w=b+n+2,R=b+1;a.push(E,v,R),a.push(v,w,R)}}this.setIndex(a),this.setAttribute("position",new ct(l,3)),this.setAttribute("normal",new ct(c,3)),this.setAttribute("uv",new ct(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qr(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class zt extends Gt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new I,p=new I,d=[],_=[],g=[],m=[];for(let f=0;f<=n;f++){const b=[],E=f/n;let v=0;f===0&&o===0?v=.5/t:f===n&&l===Math.PI&&(v=-.5/t);for(let w=0;w<=t;w++){const R=w/t;u.x=-e*Math.cos(r+R*s)*Math.sin(o+E*a),u.y=e*Math.cos(o+E*a),u.z=e*Math.sin(r+R*s)*Math.sin(o+E*a),_.push(u.x,u.y,u.z),p.copy(u).normalize(),g.push(p.x,p.y,p.z),m.push(R+v,1-E),b.push(c++)}h.push(b)}for(let f=0;f<n;f++)for(let b=0;b<t;b++){const E=h[f][b+1],v=h[f][b],w=h[f+1][b],R=h[f+1][b+1];(f!==0||o>0)&&d.push(E,v,R),(f!==n-1||l<Math.PI)&&d.push(v,w,R)}this.setIndex(d),this.setAttribute("position",new ct(_,3)),this.setAttribute("normal",new ct(g,3)),this.setAttribute("uv",new ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Kr extends Gt{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const o=[],a=[],l=[],c=[],h=new I,u=new I,p=new I;for(let d=0;d<=n;d++)for(let _=0;_<=r;_++){const g=_/r*s,m=d/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(g),u.y=(e+t*Math.cos(m))*Math.sin(g),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(g),h.y=e*Math.sin(g),p.subVectors(u,h).normalize(),l.push(p.x,p.y,p.z),c.push(_/r),c.push(d/n)}for(let d=1;d<=n;d++)for(let _=1;_<=r;_++){const g=(r+1)*d+_-1,m=(r+1)*(d-1)+_-1,f=(r+1)*(d-1)+_,b=(r+1)*d+_;o.push(g,m,b),o.push(m,f,b)}this.setIndex(o),this.setAttribute("position",new ct(a,3)),this.setAttribute("normal",new ct(l,3)),this.setAttribute("uv",new ct(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class kl extends Xi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vo,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class nu extends Xi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vo,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=Fo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class iu extends Xi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ru extends Xi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Bl extends Pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class su extends Bl{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Cs=new vt,Oa=new I,ka=new I;class ou{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ie(512,512),this.mapType=bn,this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yo,this._frameExtents=new Ie(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Oa.setFromMatrixPosition(e.matrixWorld),t.position.copy(Oa),ka.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ka),t.updateMatrixWorld(),Cs.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cs,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Cs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class $o extends Ul{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class au extends ou{constructor(){super(new $o(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ba extends Bl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.shadow=new au}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class lu extends cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function za(i,e,t,n){const r=cu(n);switch(t){case yl:return i*e;case bl:return i*e/r.components*r.byteLength;case zo:return i*e/r.components*r.byteLength;case Tl:return i*e*2/r.components*r.byteLength;case Ho:return i*e*2/r.components*r.byteLength;case El:return i*e*3/r.components*r.byteLength;case dn:return i*e*4/r.components*r.byteLength;case Go:return i*e*4/r.components*r.byteLength;case Hr:case Gr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Vr:case Wr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case to:case io:return Math.max(i,16)*Math.max(e,8)/4;case eo:case no:return Math.max(i,8)*Math.max(e,8)/2;case ro:case so:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case oo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ao:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case lo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case co:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ho:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case uo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case fo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case po:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case mo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case go:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case _o:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case vo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case xo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Mo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case So:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case yo:case Eo:case bo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case To:case wo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ao:case Ro:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function cu(i){switch(i){case bn:case vl:return{byteLength:1,components:1};case sr:case xl:case fr:return{byteLength:2,components:1};case ko:case Bo:return{byteLength:2,components:4};case hi:case Oo:case In:return{byteLength:4,components:1};case Ml:case Sl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:No}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=No);function zl(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function hu(i){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,_)=>d.start-_.start);let p=0;for(let d=1;d<u.length;d++){const _=u[p],g=u[d];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++p,u[p]=g)}u.length=p+1;for(let d=0,_=u.length;d<_;d++){const g=u[d];i.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var uu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,du=`#ifdef USE_ALPHAHASH
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
#endif`,fu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_u=`#ifdef USE_AOMAP
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
#endif`,vu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xu=`#ifdef USE_BATCHING
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
#endif`,Mu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Su=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Eu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bu=`#ifdef USE_IRIDESCENCE
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
#endif`,Tu=`#ifdef USE_BUMPMAP
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
#endif`,wu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Au=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ru=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Pu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Du=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Iu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Uu=`#define PI 3.141592653589793
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
} // validated`,Nu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Fu=`vec3 transformedNormal = objectNormal;
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
#endif`,Ou=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ku=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vu=`#ifdef USE_ENVMAP
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
#endif`,Wu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xu=`#ifdef USE_ENVMAP
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
#endif`,qu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yu=`#ifdef USE_ENVMAP
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
#endif`,ju=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ku=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$u=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ju=`#ifdef USE_GRADIENTMAP
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
}`,Qu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ed=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,td=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nd=`uniform bool receiveShadow;
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
#endif`,id=`#ifdef USE_ENVMAP
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
#endif`,rd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,od=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ad=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ld=`PhysicalMaterial material;
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
#endif`,cd=`struct PhysicalMaterial {
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
}`,hd=`
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
#endif`,ud=`#if defined( RE_IndirectDiffuse )
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
#endif`,dd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,md=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_d=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Md=`#if defined( USE_POINTS_UV )
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
#endif`,Sd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ed=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Td=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wd=`#ifdef USE_MORPHTARGETS
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
#endif`,Ad=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Cd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Pd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ld=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Id=`#ifdef USE_NORMALMAP
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
#endif`,Ud=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Nd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Od=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Kd=`float getShadowMask() {
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
}`,$d=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zd=`#ifdef USE_SKINNING
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
#endif`,Jd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qd=`#ifdef USE_SKINNING
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
#endif`,ef=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sf=`#ifdef USE_TRANSMISSION
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
#endif`,of=`#ifdef USE_TRANSMISSION
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
#endif`,af=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,df=`uniform sampler2D t2D;
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
}`,ff=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,mf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_f=`#include <common>
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
}`,vf=`#if DEPTH_PACKING == 3200
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
}`,xf=`#define DISTANCE
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
}`,Mf=`#define DISTANCE
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
}`,Sf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ef=`uniform float scale;
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
}`,bf=`uniform vec3 diffuse;
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
}`,Tf=`#include <common>
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
}`,wf=`uniform vec3 diffuse;
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
}`,Af=`#define LAMBERT
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
}`,Rf=`#define LAMBERT
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
}`,Cf=`#define MATCAP
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
}`,Pf=`#define MATCAP
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
}`,Lf=`#define NORMAL
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
}`,Df=`#define NORMAL
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
}`,If=`#define PHONG
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
}`,Uf=`#define PHONG
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
}`,Nf=`#define STANDARD
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
}`,Ff=`#define STANDARD
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
}`,Of=`#define TOON
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
}`,kf=`#define TOON
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
}`,Bf=`uniform float size;
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
}`,zf=`uniform vec3 diffuse;
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
}`,Hf=`#include <common>
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
}`,Gf=`uniform vec3 color;
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
}`,Vf=`uniform float rotation;
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
}`,Wf=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:uu,alphahash_pars_fragment:du,alphamap_fragment:fu,alphamap_pars_fragment:pu,alphatest_fragment:mu,alphatest_pars_fragment:gu,aomap_fragment:_u,aomap_pars_fragment:vu,batching_pars_vertex:xu,batching_vertex:Mu,begin_vertex:Su,beginnormal_vertex:yu,bsdfs:Eu,iridescence_fragment:bu,bumpmap_pars_fragment:Tu,clipping_planes_fragment:wu,clipping_planes_pars_fragment:Au,clipping_planes_pars_vertex:Ru,clipping_planes_vertex:Cu,color_fragment:Pu,color_pars_fragment:Lu,color_pars_vertex:Du,color_vertex:Iu,common:Uu,cube_uv_reflection_fragment:Nu,defaultnormal_vertex:Fu,displacementmap_pars_vertex:Ou,displacementmap_vertex:ku,emissivemap_fragment:Bu,emissivemap_pars_fragment:zu,colorspace_fragment:Hu,colorspace_pars_fragment:Gu,envmap_fragment:Vu,envmap_common_pars_fragment:Wu,envmap_pars_fragment:Xu,envmap_pars_vertex:qu,envmap_physical_pars_fragment:id,envmap_vertex:Yu,fog_vertex:ju,fog_pars_vertex:Ku,fog_fragment:$u,fog_pars_fragment:Zu,gradientmap_pars_fragment:Ju,lightmap_pars_fragment:Qu,lights_lambert_fragment:ed,lights_lambert_pars_fragment:td,lights_pars_begin:nd,lights_toon_fragment:rd,lights_toon_pars_fragment:sd,lights_phong_fragment:od,lights_phong_pars_fragment:ad,lights_physical_fragment:ld,lights_physical_pars_fragment:cd,lights_fragment_begin:hd,lights_fragment_maps:ud,lights_fragment_end:dd,logdepthbuf_fragment:fd,logdepthbuf_pars_fragment:pd,logdepthbuf_pars_vertex:md,logdepthbuf_vertex:gd,map_fragment:_d,map_pars_fragment:vd,map_particle_fragment:xd,map_particle_pars_fragment:Md,metalnessmap_fragment:Sd,metalnessmap_pars_fragment:yd,morphinstance_vertex:Ed,morphcolor_vertex:bd,morphnormal_vertex:Td,morphtarget_pars_vertex:wd,morphtarget_vertex:Ad,normal_fragment_begin:Rd,normal_fragment_maps:Cd,normal_pars_fragment:Pd,normal_pars_vertex:Ld,normal_vertex:Dd,normalmap_pars_fragment:Id,clearcoat_normal_fragment_begin:Ud,clearcoat_normal_fragment_maps:Nd,clearcoat_pars_fragment:Fd,iridescence_pars_fragment:Od,opaque_fragment:kd,packing:Bd,premultiplied_alpha_fragment:zd,project_vertex:Hd,dithering_fragment:Gd,dithering_pars_fragment:Vd,roughnessmap_fragment:Wd,roughnessmap_pars_fragment:Xd,shadowmap_pars_fragment:qd,shadowmap_pars_vertex:Yd,shadowmap_vertex:jd,shadowmask_pars_fragment:Kd,skinbase_vertex:$d,skinning_pars_vertex:Zd,skinning_vertex:Jd,skinnormal_vertex:Qd,specularmap_fragment:ef,specularmap_pars_fragment:tf,tonemapping_fragment:nf,tonemapping_pars_fragment:rf,transmission_fragment:sf,transmission_pars_fragment:of,uv_pars_fragment:af,uv_pars_vertex:lf,uv_vertex:cf,worldpos_vertex:hf,background_vert:uf,background_frag:df,backgroundCube_vert:ff,backgroundCube_frag:pf,cube_vert:mf,cube_frag:gf,depth_vert:_f,depth_frag:vf,distanceRGBA_vert:xf,distanceRGBA_frag:Mf,equirect_vert:Sf,equirect_frag:yf,linedashed_vert:Ef,linedashed_frag:bf,meshbasic_vert:Tf,meshbasic_frag:wf,meshlambert_vert:Af,meshlambert_frag:Rf,meshmatcap_vert:Cf,meshmatcap_frag:Pf,meshnormal_vert:Lf,meshnormal_frag:Df,meshphong_vert:If,meshphong_frag:Uf,meshphysical_vert:Nf,meshphysical_frag:Ff,meshtoon_vert:Of,meshtoon_frag:kf,points_vert:Bf,points_frag:zf,shadow_vert:Hf,shadow_frag:Gf,sprite_vert:Vf,sprite_frag:Wf},ae={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},xn={basic:{uniforms:Nt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Nt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new $e(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Nt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Nt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Nt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new $e(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Nt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Nt([ae.points,ae.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Nt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Nt([ae.common,ae.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Nt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Nt([ae.sprite,ae.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Nt([ae.common,ae.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Nt([ae.lights,ae.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};xn.physical={uniforms:Nt([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const Or={r:0,b:0,g:0},ei=new gn,Xf=new vt;function qf(i,e,t,n,r,s,o){const a=new $e(0);let l=s===!0?0:1,c,h,u=null,p=0,d=null;function _(E){let v=E.isScene===!0?E.background:null;return v&&v.isTexture&&(v=(E.backgroundBlurriness>0?t:e).get(v)),v}function g(E){let v=!1;const w=_(E);w===null?f(a,l):w&&w.isColor&&(f(w,1),v=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,v){const w=_(v);w&&(w.isCubeTexture||w.mapping===Jr)?(h===void 0&&(h=new Ct(new fi(1,1,1),new Yn({name:"BackgroundCubeMaterial",uniforms:zi(xn.backgroundCube.uniforms),vertexShader:xn.backgroundCube.vertexShader,fragmentShader:xn.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,T,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),ei.copy(v.backgroundRotation),ei.x*=-1,ei.y*=-1,ei.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(ei.y*=-1,ei.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Xf.makeRotationFromEuler(ei)),h.material.toneMapped=Qe.getTransfer(w.colorSpace)!==nt,(u!==w||p!==w.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=w,p=w.version,d=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new Ct(new gr(2,2),new Yn({name:"BackgroundMaterial",uniforms:zi(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(w.colorSpace)!==nt,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||p!==w.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=w,p=w.version,d=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function f(E,v){E.getRGB(Or,Il(i)),n.buffers.color.setClear(Or.r,Or.g,Or.b,v,o)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,v=1){a.set(E),l=v,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,f(a,l)},render:g,addToRenderList:m,dispose:b}}function Yf(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=p(null);let s=r,o=!1;function a(S,D,O,A,N){let F=!1;const V=u(A,O,D);s!==V&&(s=V,c(s.object)),F=d(S,A,O,N),F&&_(S,A,O,N),N!==null&&e.update(N,i.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,v(S,D,O,A),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,D,O){const A=O.wireframe===!0;let N=n[S.id];N===void 0&&(N={},n[S.id]=N);let F=N[D.id];F===void 0&&(F={},N[D.id]=F);let V=F[A];return V===void 0&&(V=p(l()),F[A]=V),V}function p(S){const D=[],O=[],A=[];for(let N=0;N<t;N++)D[N]=0,O[N]=0,A[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:O,attributeDivisors:A,object:S,attributes:{},index:null}}function d(S,D,O,A){const N=s.attributes,F=D.attributes;let V=0;const q=O.getAttributes();for(const G in q)if(q[G].location>=0){const le=N[G];let K=F[G];if(K===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(K=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(K=S.instanceColor)),le===void 0||le.attribute!==K||K&&le.data!==K.data)return!0;V++}return s.attributesNum!==V||s.index!==A}function _(S,D,O,A){const N={},F=D.attributes;let V=0;const q=O.getAttributes();for(const G in q)if(q[G].location>=0){let le=F[G];le===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(le=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(le=S.instanceColor));const K={};K.attribute=le,le&&le.data&&(K.data=le.data),N[G]=K,V++}s.attributes=N,s.attributesNum=V,s.index=A}function g(){const S=s.newAttributes;for(let D=0,O=S.length;D<O;D++)S[D]=0}function m(S){f(S,0)}function f(S,D){const O=s.newAttributes,A=s.enabledAttributes,N=s.attributeDivisors;O[S]=1,A[S]===0&&(i.enableVertexAttribArray(S),A[S]=1),N[S]!==D&&(i.vertexAttribDivisor(S,D),N[S]=D)}function b(){const S=s.newAttributes,D=s.enabledAttributes;for(let O=0,A=D.length;O<A;O++)D[O]!==S[O]&&(i.disableVertexAttribArray(O),D[O]=0)}function E(S,D,O,A,N,F,V){V===!0?i.vertexAttribIPointer(S,D,O,N,F):i.vertexAttribPointer(S,D,O,A,N,F)}function v(S,D,O,A){g();const N=A.attributes,F=O.getAttributes(),V=D.defaultAttributeValues;for(const q in F){const G=F[q];if(G.location>=0){let ne=N[q];if(ne===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(ne=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(ne=S.instanceColor)),ne!==void 0){const le=ne.normalized,K=ne.itemSize,we=e.get(ne);if(we===void 0)continue;const He=we.buffer,Xe=we.type,je=we.bytesPerElement,j=Xe===i.INT||Xe===i.UNSIGNED_INT||ne.gpuType===Oo;if(ne.isInterleavedBufferAttribute){const J=ne.data,he=J.stride,pe=ne.offset;if(J.isInstancedInterleavedBuffer){for(let fe=0;fe<G.locationSize;fe++)f(G.location+fe,J.meshPerAttribute);S.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let fe=0;fe<G.locationSize;fe++)m(G.location+fe);i.bindBuffer(i.ARRAY_BUFFER,He);for(let fe=0;fe<G.locationSize;fe++)E(G.location+fe,K/G.locationSize,Xe,le,he*je,(pe+K/G.locationSize*fe)*je,j)}else{if(ne.isInstancedBufferAttribute){for(let J=0;J<G.locationSize;J++)f(G.location+J,ne.meshPerAttribute);S.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let J=0;J<G.locationSize;J++)m(G.location+J);i.bindBuffer(i.ARRAY_BUFFER,He);for(let J=0;J<G.locationSize;J++)E(G.location+J,K/G.locationSize,Xe,le,K*je,K/G.locationSize*J*je,j)}}else if(V!==void 0){const le=V[q];if(le!==void 0)switch(le.length){case 2:i.vertexAttrib2fv(G.location,le);break;case 3:i.vertexAttrib3fv(G.location,le);break;case 4:i.vertexAttrib4fv(G.location,le);break;default:i.vertexAttrib1fv(G.location,le)}}}}b()}function w(){P();for(const S in n){const D=n[S];for(const O in D){const A=D[O];for(const N in A)h(A[N].object),delete A[N];delete D[O]}delete n[S]}}function R(S){if(n[S.id]===void 0)return;const D=n[S.id];for(const O in D){const A=D[O];for(const N in A)h(A[N].object),delete A[N];delete D[O]}delete n[S.id]}function T(S){for(const D in n){const O=n[D];if(O[S.id]===void 0)continue;const A=O[S.id];for(const N in A)h(A[N].object),delete A[N];delete O[S.id]}}function P(){M(),o=!0,s!==r&&(s=r,c(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:M,dispose:w,releaseStatesOfGeometry:R,releaseStatesOfProgram:T,initAttributes:g,enableAttribute:m,disableUnusedAttributes:b}}function jf(i,e,t){let n;function r(c){n=c}function s(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let _=0;_<u;_++)d+=h[_];t.update(d,n,1)}function l(c,h,u,p){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)o(c[_],h[_],p[_]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,p,0,u);let _=0;for(let g=0;g<u;g++)_+=h[g]*p[g];t.update(_,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Kf(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==dn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const P=T===fr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==bn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==In&&!P)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=_>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:p,maxTextures:d,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:b,maxVaryings:E,maxFragmentUniforms:v,vertexTextures:w,maxSamples:R}}function $f(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new ni,a=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){const d=u.length!==0||p||n!==0||r;return r=p,n=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,p){t=h(u,p,0)},this.setState=function(u,p,d){const _=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!r||_===null||_.length===0||s&&!m)s?h(null):c();else{const b=s?0:n,E=b*4;let v=f.clippingState||null;l.value=v,v=h(_,p,E,d);for(let w=0;w!==E;++w)v[w]=t[w];f.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,p,d,_){const g=u!==null?u.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const f=d+g*4,b=p.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<f)&&(m=new Float32Array(f));for(let E=0,v=d;E!==g;++E,v+=4)o.copy(u[E]).applyMatrix4(b,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function Zf(i){let e=new WeakMap;function t(o,a){return a===$s?o.mapping=Oi:a===Zs&&(o.mapping=ki),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===$s||a===Zs)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Kh(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Li=4,Ha=[.125,.215,.35,.446,.526,.582],si=20,Ps=new $o,Ga=new $e;let Ls=null,Ds=0,Is=0,Us=!1;const ii=(1+Math.sqrt(5))/2,Ri=1/ii,Va=[new I(-ii,Ri,0),new I(ii,Ri,0),new I(-Ri,0,ii),new I(Ri,0,ii),new I(0,ii,-Ri),new I(0,ii,Ri),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],Jf=new I;class Wa{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){const{size:o=256,position:a=Jf}=s;Ls=this._renderer.getRenderTarget(),Ds=this._renderer.getActiveCubeFace(),Is=this._renderer.getActiveMipmapLevel(),Us=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ya(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ls,Ds,Is),this._renderer.xr.enabled=Us,e.scissorTest=!1,kr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Oi||e.mapping===ki?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ls=this._renderer.getRenderTarget(),Ds=this._renderer.getActiveCubeFace(),Is=this._renderer.getActiveMipmapLevel(),Us=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:fr,format:dn,colorSpace:Bi,depthBuffer:!1},r=Xa(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xa(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qf(s)),this._blurMaterial=ep(s,e,t)}return r}_compileMaterial(e){const t=new Ct(this._lodPlanes[0],e);this._renderer.compile(t,Ps)}_sceneToCubeUV(e,t,n,r,s){const l=new cn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,p=u.autoClear,d=u.toneMapping;u.getClearColor(Ga),u.toneMapping=Xn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null));const g=new qi({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1}),m=new Ct(new fi,g);let f=!1;const b=e.background;b?b.isColor&&(g.color.copy(b),e.background=null,f=!0):(g.color.copy(Ga),f=!0);for(let E=0;E<6;E++){const v=E%3;v===0?(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[E],s.y,s.z)):v===1?(l.up.set(0,0,c[E]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[E],s.z)):(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[E]));const w=this._cubeSize;kr(r,v*w,E>2?w:0,w,w),u.setRenderTarget(r),f&&u.render(m,l),u.render(e,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=p,e.background=b}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Oi||e.mapping===ki;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ya()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qa());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ct(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;kr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ps)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Va[(r-s-1)%Va.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ct(this._lodPlanes[r],c),p=c.uniforms,d=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*si-1),g=s/_,m=isFinite(s)?1+Math.floor(h*g):si;m>si&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${si}`);const f=[];let b=0;for(let T=0;T<si;++T){const P=T/g,M=Math.exp(-P*P/2);f.push(M),T===0?b+=M:T<m&&(b+=2*M)}for(let T=0;T<f.length;T++)f[T]=f[T]/b;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=f,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:E}=this;p.dTheta.value=_,p.mipInt.value=E-n;const v=this._sizeLods[r],w=3*v*(r>E-Li?r-E+Li:0),R=4*(this._cubeSize-v);kr(t,w,R,3*v,2*v),l.setRenderTarget(t),l.render(u,Ps)}}function Qf(i){const e=[],t=[],n=[];let r=i;const s=i-Li+1+Ha.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-Li?l=Ha[o-i+Li-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,p=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,_=6,g=3,m=2,f=1,b=new Float32Array(g*_*d),E=new Float32Array(m*_*d),v=new Float32Array(f*_*d);for(let R=0;R<d;R++){const T=R%3*2/3-1,P=R>2?0:-1,M=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];b.set(M,g*_*R),E.set(p,m*_*R);const S=[R,R,R,R,R,R];v.set(S,f*_*R)}const w=new Gt;w.setAttribute("position",new rn(b,g)),w.setAttribute("uv",new rn(E,m)),w.setAttribute("faceIndex",new rn(v,f)),e.push(w),r>Li&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Xa(i,e,t){const n=new ui(i,e,t);return n.texture.mapping=Jr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function kr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function ep(i,e,t){const n=new Float32Array(si),r=new I(0,1,0);return new Yn({name:"SphericalGaussianBlur",defines:{n:si,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Zo(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function qa(){return new Yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zo(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Ya(){return new Yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Zo(){return`

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
	`}function tp(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===$s||l===Zs,h=l===Oi||l===ki;if(c||h){let u=e.get(a);const p=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return t===null&&(t=new Wa(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return c&&d&&d.height>0||h&&d&&r(d)?(t===null&&(t=new Wa(i)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function r(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function np(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&hr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function ip(i,e,t,n){const r={},s=new WeakMap;function o(u){const p=u.target;p.index!==null&&e.remove(p.index);for(const _ in p.attributes)e.remove(p.attributes[_]);p.removeEventListener("dispose",o),delete r[p.id];const d=s.get(p);d&&(e.remove(d),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(u,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,t.memory.geometries++),p}function l(u){const p=u.attributes;for(const d in p)e.update(p[d],i.ARRAY_BUFFER)}function c(u){const p=[],d=u.index,_=u.attributes.position;let g=0;if(d!==null){const b=d.array;g=d.version;for(let E=0,v=b.length;E<v;E+=3){const w=b[E+0],R=b[E+1],T=b[E+2];p.push(w,R,R,T,T,w)}}else if(_!==void 0){const b=_.array;g=_.version;for(let E=0,v=b.length/3-1;E<v;E+=3){const w=E+0,R=E+1,T=E+2;p.push(w,R,R,T,T,w)}}else return;const m=new(Al(p)?Dl:Ll)(p,1);m.version=g;const f=s.get(u);f&&e.remove(f),s.set(u,m)}function h(u){const p=s.get(u);if(p){const d=u.index;d!==null&&p.version<d.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function rp(i,e,t){let n;function r(p){n=p}let s,o;function a(p){s=p.type,o=p.bytesPerElement}function l(p,d){i.drawElements(n,d,s,p*o),t.update(d,n,1)}function c(p,d,_){_!==0&&(i.drawElementsInstanced(n,d,s,p*o,_),t.update(d,n,_))}function h(p,d,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,p,0,_);let m=0;for(let f=0;f<_;f++)m+=d[f];t.update(m,n,1)}function u(p,d,_,g){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<p.length;f++)c(p[f]/o,d[f],g[f]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,p,0,g,0,_);let f=0;for(let b=0;b<_;b++)f+=d[b]*g[b];t.update(f,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function sp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function op(i,e,t){const n=new WeakMap,r=new mt;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let p=n.get(a);if(p===void 0||p.count!==u){let S=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var d=S;p!==void 0&&p.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let v=0;_===!0&&(v=1),g===!0&&(v=2),m===!0&&(v=3);let w=a.attributes.position.count*v,R=1;w>e.maxTextureSize&&(R=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const T=new Float32Array(w*R*4*u),P=new Rl(T,w,R,u);P.type=In,P.needsUpdate=!0;const M=v*4;for(let D=0;D<u;D++){const O=f[D],A=b[D],N=E[D],F=w*R*4*D;for(let V=0;V<O.count;V++){const q=V*M;_===!0&&(r.fromBufferAttribute(O,V),T[F+q+0]=r.x,T[F+q+1]=r.y,T[F+q+2]=r.z,T[F+q+3]=0),g===!0&&(r.fromBufferAttribute(A,V),T[F+q+4]=r.x,T[F+q+5]=r.y,T[F+q+6]=r.z,T[F+q+7]=0),m===!0&&(r.fromBufferAttribute(N,V),T[F+q+8]=r.x,T[F+q+9]=r.y,T[F+q+10]=r.z,T[F+q+11]=N.itemSize===4?r.w:1)}}p={count:u,texture:P,size:new Ie(w,R)},n.set(a,p),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const g=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:s}}function ap(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==c&&(p.update(),r.set(p,c))}return u}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Hl=new Ft,ja=new Fl(1,1),Gl=new Rl,Vl=new Lh,Wl=new Nl,Ka=[],$a=[],Za=new Float32Array(16),Ja=new Float32Array(9),Qa=new Float32Array(4);function Yi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Ka[r];if(s===void 0&&(s=new Float32Array(r),Ka[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Tt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function wt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function es(i,e){let t=$a[e];t===void 0&&(t=new Int32Array(e),$a[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function lp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function cp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2fv(this.addr,e),wt(t,e)}}function hp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;i.uniform3fv(this.addr,e),wt(t,e)}}function up(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4fv(this.addr,e),wt(t,e)}}function dp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(Tt(t,n))return;Qa.set(n),i.uniformMatrix2fv(this.addr,!1,Qa),wt(t,n)}}function fp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(Tt(t,n))return;Ja.set(n),i.uniformMatrix3fv(this.addr,!1,Ja),wt(t,n)}}function pp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(Tt(t,n))return;Za.set(n),i.uniformMatrix4fv(this.addr,!1,Za),wt(t,n)}}function mp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function gp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2iv(this.addr,e),wt(t,e)}}function _p(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;i.uniform3iv(this.addr,e),wt(t,e)}}function vp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4iv(this.addr,e),wt(t,e)}}function xp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Mp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2uiv(this.addr,e),wt(t,e)}}function Sp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;i.uniform3uiv(this.addr,e),wt(t,e)}}function yp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4uiv(this.addr,e),wt(t,e)}}function Ep(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(ja.compareFunction=wl,s=ja):s=Hl,t.setTexture2D(e||s,r)}function bp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Vl,r)}function Tp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Wl,r)}function wp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Gl,r)}function Ap(i){switch(i){case 5126:return lp;case 35664:return cp;case 35665:return hp;case 35666:return up;case 35674:return dp;case 35675:return fp;case 35676:return pp;case 5124:case 35670:return mp;case 35667:case 35671:return gp;case 35668:case 35672:return _p;case 35669:case 35673:return vp;case 5125:return xp;case 36294:return Mp;case 36295:return Sp;case 36296:return yp;case 35678:case 36198:case 36298:case 36306:case 35682:return Ep;case 35679:case 36299:case 36307:return bp;case 35680:case 36300:case 36308:case 36293:return Tp;case 36289:case 36303:case 36311:case 36292:return wp}}function Rp(i,e){i.uniform1fv(this.addr,e)}function Cp(i,e){const t=Yi(e,this.size,2);i.uniform2fv(this.addr,t)}function Pp(i,e){const t=Yi(e,this.size,3);i.uniform3fv(this.addr,t)}function Lp(i,e){const t=Yi(e,this.size,4);i.uniform4fv(this.addr,t)}function Dp(i,e){const t=Yi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ip(i,e){const t=Yi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Up(i,e){const t=Yi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Np(i,e){i.uniform1iv(this.addr,e)}function Fp(i,e){i.uniform2iv(this.addr,e)}function Op(i,e){i.uniform3iv(this.addr,e)}function kp(i,e){i.uniform4iv(this.addr,e)}function Bp(i,e){i.uniform1uiv(this.addr,e)}function zp(i,e){i.uniform2uiv(this.addr,e)}function Hp(i,e){i.uniform3uiv(this.addr,e)}function Gp(i,e){i.uniform4uiv(this.addr,e)}function Vp(i,e,t){const n=this.cache,r=e.length,s=es(t,r);Tt(n,s)||(i.uniform1iv(this.addr,s),wt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Hl,s[o])}function Wp(i,e,t){const n=this.cache,r=e.length,s=es(t,r);Tt(n,s)||(i.uniform1iv(this.addr,s),wt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Vl,s[o])}function Xp(i,e,t){const n=this.cache,r=e.length,s=es(t,r);Tt(n,s)||(i.uniform1iv(this.addr,s),wt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Wl,s[o])}function qp(i,e,t){const n=this.cache,r=e.length,s=es(t,r);Tt(n,s)||(i.uniform1iv(this.addr,s),wt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Gl,s[o])}function Yp(i){switch(i){case 5126:return Rp;case 35664:return Cp;case 35665:return Pp;case 35666:return Lp;case 35674:return Dp;case 35675:return Ip;case 35676:return Up;case 5124:case 35670:return Np;case 35667:case 35671:return Fp;case 35668:case 35672:return Op;case 35669:case 35673:return kp;case 5125:return Bp;case 36294:return zp;case 36295:return Hp;case 36296:return Gp;case 35678:case 36198:case 36298:case 36306:case 35682:return Vp;case 35679:case 36299:case 36307:return Wp;case 35680:case 36300:case 36308:case 36293:return Xp;case 36289:case 36303:case 36311:case 36292:return qp}}class jp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ap(t.type)}}class Kp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Yp(t.type)}}class $p{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Ns=/(\w+)(\])?(\[|\.)?/g;function el(i,e){i.seq.push(e),i.map[e.id]=e}function Zp(i,e,t){const n=i.name,r=n.length;for(Ns.lastIndex=0;;){const s=Ns.exec(n),o=Ns.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){el(t,c===void 0?new jp(a,i,e):new Kp(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new $p(a),el(t,u)),t=u}}}class Xr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Zp(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function tl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Jp=37297;let Qp=0;function em(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const nl=new ze;function tm(i){Qe._getMatrix(nl,Qe.workingColorSpace,i);const e=`mat3( ${nl.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(i)){case qr:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function il(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+em(i.getShaderSource(e),a)}else return s}function nm(i,e){const t=tm(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function im(i,e){let t;switch(e){case Xc:t="Linear";break;case qc:t="Reinhard";break;case Yc:t="Cineon";break;case gl:t="ACESFilmic";break;case Kc:t="AgX";break;case $c:t="Neutral";break;case jc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Br=new I;function rm(){Qe.getLuminanceCoefficients(Br);const i=Br.x.toFixed(4),e=Br.y.toFixed(4),t=Br.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(nr).join(`
`)}function om(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function am(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function nr(i){return i!==""}function rl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const lm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Co(i){return i.replace(lm,hm)}const cm=new Map;function hm(i,e){let t=We[e];if(t===void 0){const n=cm.get(e);if(n!==void 0)t=We[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Co(t)}const um=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ol(i){return i.replace(um,dm)}function dm(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function al(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function fm(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ml?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===bc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ln&&(e="SHADOWMAP_TYPE_VSM"),e}function pm(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Oi:case ki:e="ENVMAP_TYPE_CUBE";break;case Jr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function mm(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===ki&&(e="ENVMAP_MODE_REFRACTION"),e}function gm(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Fo:e="ENVMAP_BLENDING_MULTIPLY";break;case Vc:e="ENVMAP_BLENDING_MIX";break;case Wc:e="ENVMAP_BLENDING_ADD";break}return e}function _m(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function vm(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=fm(t),c=pm(t),h=mm(t),u=gm(t),p=_m(t),d=sm(t),_=om(s),g=r.createProgram();let m,f,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(nr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(nr).join(`
`),f.length>0&&(f+=`
`)):(m=[al(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(nr).join(`
`),f=[al(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xn?"#define TONE_MAPPING":"",t.toneMapping!==Xn?We.tonemapping_pars_fragment:"",t.toneMapping!==Xn?im("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,nm("linearToOutputTexel",t.outputColorSpace),rm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(nr).join(`
`)),o=Co(o),o=rl(o,t),o=sl(o,t),a=Co(a),a=rl(a,t),a=sl(a,t),o=ol(o),a=ol(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===va?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===va?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const E=b+m+o,v=b+f+a,w=tl(r,r.VERTEX_SHADER,E),R=tl(r,r.FRAGMENT_SHADER,v);r.attachShader(g,w),r.attachShader(g,R),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function T(D){if(i.debug.checkShaderErrors){const O=r.getProgramInfoLog(g)||"",A=r.getShaderInfoLog(w)||"",N=r.getShaderInfoLog(R)||"",F=O.trim(),V=A.trim(),q=N.trim();let G=!0,ne=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,w,R);else{const le=il(r,w,"vertex"),K=il(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+F+`
`+le+`
`+K)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(V===""||q==="")&&(ne=!1);ne&&(D.diagnostics={runnable:G,programLog:F,vertexShader:{log:V,prefix:m},fragmentShader:{log:q,prefix:f}})}r.deleteShader(w),r.deleteShader(R),P=new Xr(r,g),M=am(r,g)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(g,Jp)),S},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Qp++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=R,this}let xm=0;class Mm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Sm(e),t.set(e,n)),n}}class Sm{constructor(e){this.id=xm++,this.code=e,this.usedTimes=0}}function ym(i,e,t,n,r,s,o){const a=new Cl,l=new Mm,c=new Set,h=[],u=r.logarithmicDepthBuffer,p=r.vertexTextures;let d=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,S,D,O,A){const N=O.fog,F=A.geometry,V=M.isMeshStandardMaterial?O.environment:null,q=(M.isMeshStandardMaterial?t:e).get(M.envMap||V),G=q&&q.mapping===Jr?q.image.height:null,ne=_[M.type];M.precision!==null&&(d=r.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const le=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,K=le!==void 0?le.length:0;let we=0;F.morphAttributes.position!==void 0&&(we=1),F.morphAttributes.normal!==void 0&&(we=2),F.morphAttributes.color!==void 0&&(we=3);let He,Xe,je,j;if(ne){const et=xn[ne];He=et.vertexShader,Xe=et.fragmentShader}else He=M.vertexShader,Xe=M.fragmentShader,l.update(M),je=l.getVertexShaderID(M),j=l.getFragmentShaderID(M);const J=i.getRenderTarget(),he=i.state.buffers.depth.getReversed(),pe=A.isInstancedMesh===!0,fe=A.isBatchedMesh===!0,Ge=!!M.map,Et=!!M.matcap,L=!!q,at=!!M.aoMap,Oe=!!M.lightMap,Le=!!M.bumpMap,xe=!!M.normalMap,lt=!!M.displacementMap,Me=!!M.emissiveMap,Ve=!!M.metalnessMap,At=!!M.roughnessMap,gt=M.anisotropy>0,C=M.clearcoat>0,x=M.dispersion>0,H=M.iridescence>0,$=M.sheen>0,Q=M.transmission>0,Y=gt&&!!M.anisotropyMap,be=C&&!!M.clearcoatMap,se=C&&!!M.clearcoatNormalMap,Se=C&&!!M.clearcoatRoughnessMap,ye=H&&!!M.iridescenceMap,ie=H&&!!M.iridescenceThicknessMap,de=$&&!!M.sheenColorMap,Pe=$&&!!M.sheenRoughnessMap,Ee=!!M.specularMap,ce=!!M.specularColorMap,Be=!!M.specularIntensityMap,U=Q&&!!M.transmissionMap,re=Q&&!!M.thicknessMap,oe=!!M.gradientMap,ge=!!M.alphaMap,ee=M.alphaTest>0,Z=!!M.alphaHash,ve=!!M.extensions;let Ne=Xn;M.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Ne=i.toneMapping);const rt={shaderID:ne,shaderType:M.type,shaderName:M.name,vertexShader:He,fragmentShader:Xe,defines:M.defines,customVertexShaderID:je,customFragmentShaderID:j,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:fe,batchingColor:fe&&A._colorsTexture!==null,instancing:pe,instancingColor:pe&&A.instanceColor!==null,instancingMorph:pe&&A.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Bi,alphaToCoverage:!!M.alphaToCoverage,map:Ge,matcap:Et,envMap:L,envMapMode:L&&q.mapping,envMapCubeUVHeight:G,aoMap:at,lightMap:Oe,bumpMap:Le,normalMap:xe,displacementMap:p&&lt,emissiveMap:Me,normalMapObjectSpace:xe&&M.normalMapType===eh,normalMapTangentSpace:xe&&M.normalMapType===Vo,metalnessMap:Ve,roughnessMap:At,anisotropy:gt,anisotropyMap:Y,clearcoat:C,clearcoatMap:be,clearcoatNormalMap:se,clearcoatRoughnessMap:Se,dispersion:x,iridescence:H,iridescenceMap:ye,iridescenceThicknessMap:ie,sheen:$,sheenColorMap:de,sheenRoughnessMap:Pe,specularMap:Ee,specularColorMap:ce,specularIntensityMap:Be,transmission:Q,transmissionMap:U,thicknessMap:re,gradientMap:oe,opaque:M.transparent===!1&&M.blending===Ii&&M.alphaToCoverage===!1,alphaMap:ge,alphaTest:ee,alphaHash:Z,combine:M.combine,mapUv:Ge&&g(M.map.channel),aoMapUv:at&&g(M.aoMap.channel),lightMapUv:Oe&&g(M.lightMap.channel),bumpMapUv:Le&&g(M.bumpMap.channel),normalMapUv:xe&&g(M.normalMap.channel),displacementMapUv:lt&&g(M.displacementMap.channel),emissiveMapUv:Me&&g(M.emissiveMap.channel),metalnessMapUv:Ve&&g(M.metalnessMap.channel),roughnessMapUv:At&&g(M.roughnessMap.channel),anisotropyMapUv:Y&&g(M.anisotropyMap.channel),clearcoatMapUv:be&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:se&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:de&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&g(M.sheenRoughnessMap.channel),specularMapUv:Ee&&g(M.specularMap.channel),specularColorMapUv:ce&&g(M.specularColorMap.channel),specularIntensityMapUv:Be&&g(M.specularIntensityMap.channel),transmissionMapUv:U&&g(M.transmissionMap.channel),thicknessMapUv:re&&g(M.thicknessMap.channel),alphaMapUv:ge&&g(M.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(xe||gt),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:A.isPoints===!0&&!!F.attributes.uv&&(Ge||ge),fog:!!N,useFog:M.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:he,skinning:A.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:we,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ne,decodeVideoTexture:Ge&&M.map.isVideoTexture===!0&&Qe.getTransfer(M.map.colorSpace)===nt,decodeVideoTextureEmissive:Me&&M.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(M.emissiveMap.colorSpace)===nt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Yt,flipSided:M.side===Ht,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ve&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&M.extensions.multiDraw===!0||fe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return rt.vertexUv1s=c.has(1),rt.vertexUv2s=c.has(2),rt.vertexUv3s=c.has(3),c.clear(),rt}function f(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const D in M.defines)S.push(D),S.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(b(S,M),E(S,M),S.push(i.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function b(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function E(M,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),M.push(a.mask)}function v(M){const S=_[M.type];let D;if(S){const O=xn[S];D=Xh.clone(O.uniforms)}else D=M.uniforms;return D}function w(M,S){let D;for(let O=0,A=h.length;O<A;O++){const N=h[O];if(N.cacheKey===S){D=N,++D.usedTimes;break}}return D===void 0&&(D=new vm(i,S,M,s),h.push(D)),D}function R(M){if(--M.usedTimes===0){const S=h.indexOf(M);h[S]=h[h.length-1],h.pop(),M.destroy()}}function T(M){l.remove(M)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:v,acquireProgram:w,releaseProgram:R,releaseShaderCache:T,programs:h,dispose:P}}function Em(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function bm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function ll(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function cl(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(u,p,d,_,g,m){let f=i[e];return f===void 0?(f={id:u.id,object:u,geometry:p,material:d,groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},i[e]=f):(f.id=u.id,f.object=u,f.geometry=p,f.material=d,f.groupOrder=_,f.renderOrder=u.renderOrder,f.z=g,f.group=m),e++,f}function a(u,p,d,_,g,m){const f=o(u,p,d,_,g,m);d.transmission>0?n.push(f):d.transparent===!0?r.push(f):t.push(f)}function l(u,p,d,_,g,m){const f=o(u,p,d,_,g,m);d.transmission>0?n.unshift(f):d.transparent===!0?r.unshift(f):t.unshift(f)}function c(u,p){t.length>1&&t.sort(u||bm),n.length>1&&n.sort(p||ll),r.length>1&&r.sort(p||ll)}function h(){for(let u=e,p=i.length;u<p;u++){const d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function Tm(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new cl,i.set(n,[o])):r>=s.length?(o=new cl,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function wm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new $e};break;case"SpotLight":t={position:new I,direction:new I,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function Am(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Rm=0;function Cm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Pm(i){const e=new wm,t=Am(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const r=new I,s=new vt,o=new vt;function a(c){let h=0,u=0,p=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let d=0,_=0,g=0,m=0,f=0,b=0,E=0,v=0,w=0,R=0,T=0;c.sort(Cm);for(let M=0,S=c.length;M<S;M++){const D=c[M],O=D.color,A=D.intensity,N=D.distance,F=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=O.r*A,u+=O.g*A,p+=O.b*A;else if(D.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(D.sh.coefficients[V],A);T++}else if(D.isDirectionalLight){const V=e.get(D);if(V.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const q=D.shadow,G=t.get(D);G.shadowIntensity=q.intensity,G.shadowBias=q.bias,G.shadowNormalBias=q.normalBias,G.shadowRadius=q.radius,G.shadowMapSize=q.mapSize,n.directionalShadow[d]=G,n.directionalShadowMap[d]=F,n.directionalShadowMatrix[d]=D.shadow.matrix,b++}n.directional[d]=V,d++}else if(D.isSpotLight){const V=e.get(D);V.position.setFromMatrixPosition(D.matrixWorld),V.color.copy(O).multiplyScalar(A),V.distance=N,V.coneCos=Math.cos(D.angle),V.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),V.decay=D.decay,n.spot[g]=V;const q=D.shadow;if(D.map&&(n.spotLightMap[w]=D.map,w++,q.updateMatrices(D),D.castShadow&&R++),n.spotLightMatrix[g]=q.matrix,D.castShadow){const G=t.get(D);G.shadowIntensity=q.intensity,G.shadowBias=q.bias,G.shadowNormalBias=q.normalBias,G.shadowRadius=q.radius,G.shadowMapSize=q.mapSize,n.spotShadow[g]=G,n.spotShadowMap[g]=F,v++}g++}else if(D.isRectAreaLight){const V=e.get(D);V.color.copy(O).multiplyScalar(A),V.halfWidth.set(D.width*.5,0,0),V.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=V,m++}else if(D.isPointLight){const V=e.get(D);if(V.color.copy(D.color).multiplyScalar(D.intensity),V.distance=D.distance,V.decay=D.decay,D.castShadow){const q=D.shadow,G=t.get(D);G.shadowIntensity=q.intensity,G.shadowBias=q.bias,G.shadowNormalBias=q.normalBias,G.shadowRadius=q.radius,G.shadowMapSize=q.mapSize,G.shadowCameraNear=q.camera.near,G.shadowCameraFar=q.camera.far,n.pointShadow[_]=G,n.pointShadowMap[_]=F,n.pointShadowMatrix[_]=D.shadow.matrix,E++}n.point[_]=V,_++}else if(D.isHemisphereLight){const V=e.get(D);V.skyColor.copy(D.color).multiplyScalar(A),V.groundColor.copy(D.groundColor).multiplyScalar(A),n.hemi[f]=V,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ae.LTC_FLOAT_1,n.rectAreaLTC2=ae.LTC_FLOAT_2):(n.rectAreaLTC1=ae.LTC_HALF_1,n.rectAreaLTC2=ae.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=p;const P=n.hash;(P.directionalLength!==d||P.pointLength!==_||P.spotLength!==g||P.rectAreaLength!==m||P.hemiLength!==f||P.numDirectionalShadows!==b||P.numPointShadows!==E||P.numSpotShadows!==v||P.numSpotMaps!==w||P.numLightProbes!==T)&&(n.directional.length=d,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=f,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=v+w-R,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=T,P.directionalLength=d,P.pointLength=_,P.spotLength=g,P.rectAreaLength=m,P.hemiLength=f,P.numDirectionalShadows=b,P.numPointShadows=E,P.numSpotShadows=v,P.numSpotMaps=w,P.numLightProbes=T,n.version=Rm++)}function l(c,h){let u=0,p=0,d=0,_=0,g=0;const m=h.matrixWorldInverse;for(let f=0,b=c.length;f<b;f++){const E=c[f];if(E.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),u++}else if(E.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),d++}else if(E.isRectAreaLight){const v=n.rectArea[_];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(E.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(E.width*.5,0,0),v.halfHeight.set(0,E.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),_++}else if(E.isPointLight){const v=n.point[p];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),p++}else if(E.isHemisphereLight){const v=n.hemi[g];v.direction.setFromMatrixPosition(E.matrixWorld),v.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function hl(i){const e=new Pm(i),t=[],n=[];function r(h){c.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Lm(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new hl(i),e.set(r,[a])):s>=o.length?(a=new hl(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const Dm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Im=`uniform sampler2D shadow_pass;
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
}`;function Um(i,e,t){let n=new Yo;const r=new Ie,s=new Ie,o=new mt,a=new iu({depthPacking:Qc}),l=new ru,c={},h=t.maxTextureSize,u={[qn]:Ht,[Ht]:qn,[Yt]:Yt},p=new Yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:Dm,fragmentShader:Im}),d=p.clone();d.defines.HORIZONTAL_PASS=1;const _=new Gt;_.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Ct(_,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ml;let f=this.type;this.render=function(R,T,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const M=i.getRenderTarget(),S=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Wn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const A=f!==Ln&&this.type===Ln,N=f===Ln&&this.type!==Ln;for(let F=0,V=R.length;F<V;F++){const q=R[F],G=q.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const ne=G.getFrameExtents();if(r.multiply(ne),s.copy(G.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/ne.x),r.x=s.x*ne.x,G.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/ne.y),r.y=s.y*ne.y,G.mapSize.y=s.y)),G.map===null||A===!0||N===!0){const K=this.type!==Ln?{minFilter:fn,magFilter:fn}:{};G.map!==null&&G.map.dispose(),G.map=new ui(r.x,r.y,K),G.map.texture.name=q.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const le=G.getViewportCount();for(let K=0;K<le;K++){const we=G.getViewport(K);o.set(s.x*we.x,s.y*we.y,s.x*we.z,s.y*we.w),O.viewport(o),G.updateMatrices(q,K),n=G.getFrustum(),v(T,P,G.camera,q,this.type)}G.isPointLightShadow!==!0&&this.type===Ln&&b(G,P),G.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(M,S,D)};function b(R,T){const P=e.update(g);p.defines.VSM_SAMPLES!==R.blurSamples&&(p.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,p.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ui(r.x,r.y)),p.uniforms.shadow_pass.value=R.map.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(T,null,P,p,g,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(T,null,P,d,g,null)}function E(R,T,P,M){let S=null;const D=P.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(D!==void 0)S=D;else if(S=P.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const O=S.uuid,A=T.uuid;let N=c[O];N===void 0&&(N={},c[O]=N);let F=N[A];F===void 0&&(F=S.clone(),N[A]=F,T.addEventListener("dispose",w)),S=F}if(S.visible=T.visible,S.wireframe=T.wireframe,M===Ln?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:u[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const O=i.properties.get(S);O.light=P}return S}function v(R,T,P,M,S){if(R.visible===!1)return;if(R.layers.test(T.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===Ln)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,R.matrixWorld);const A=e.update(R),N=R.material;if(Array.isArray(N)){const F=A.groups;for(let V=0,q=F.length;V<q;V++){const G=F[V],ne=N[G.materialIndex];if(ne&&ne.visible){const le=E(R,ne,M,S);R.onBeforeShadow(i,R,T,P,A,le,G),i.renderBufferDirect(P,null,A,le,R,G),R.onAfterShadow(i,R,T,P,A,le,G)}}}else if(N.visible){const F=E(R,N,M,S);R.onBeforeShadow(i,R,T,P,A,F,null),i.renderBufferDirect(P,null,A,F,R,null),R.onAfterShadow(i,R,T,P,A,F,null)}}const O=R.children;for(let A=0,N=O.length;A<N;A++)v(O[A],T,P,M,S)}function w(R){R.target.removeEventListener("dispose",w);for(const P in c){const M=c[P],S=R.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const Nm={[Vs]:Ws,[Xs]:js,[qs]:Ks,[Fi]:Ys,[Ws]:Vs,[js]:Xs,[Ks]:qs,[Ys]:Fi};function Fm(i,e){function t(){let U=!1;const re=new mt;let oe=null;const ge=new mt(0,0,0,0);return{setMask:function(ee){oe!==ee&&!U&&(i.colorMask(ee,ee,ee,ee),oe=ee)},setLocked:function(ee){U=ee},setClear:function(ee,Z,ve,Ne,rt){rt===!0&&(ee*=Ne,Z*=Ne,ve*=Ne),re.set(ee,Z,ve,Ne),ge.equals(re)===!1&&(i.clearColor(ee,Z,ve,Ne),ge.copy(re))},reset:function(){U=!1,oe=null,ge.set(-1,0,0,0)}}}function n(){let U=!1,re=!1,oe=null,ge=null,ee=null;return{setReversed:function(Z){if(re!==Z){const ve=e.get("EXT_clip_control");Z?ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.ZERO_TO_ONE_EXT):ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.NEGATIVE_ONE_TO_ONE_EXT),re=Z;const Ne=ee;ee=null,this.setClear(Ne)}},getReversed:function(){return re},setTest:function(Z){Z?J(i.DEPTH_TEST):he(i.DEPTH_TEST)},setMask:function(Z){oe!==Z&&!U&&(i.depthMask(Z),oe=Z)},setFunc:function(Z){if(re&&(Z=Nm[Z]),ge!==Z){switch(Z){case Vs:i.depthFunc(i.NEVER);break;case Ws:i.depthFunc(i.ALWAYS);break;case Xs:i.depthFunc(i.LESS);break;case Fi:i.depthFunc(i.LEQUAL);break;case qs:i.depthFunc(i.EQUAL);break;case Ys:i.depthFunc(i.GEQUAL);break;case js:i.depthFunc(i.GREATER);break;case Ks:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ge=Z}},setLocked:function(Z){U=Z},setClear:function(Z){ee!==Z&&(re&&(Z=1-Z),i.clearDepth(Z),ee=Z)},reset:function(){U=!1,oe=null,ge=null,ee=null,re=!1}}}function r(){let U=!1,re=null,oe=null,ge=null,ee=null,Z=null,ve=null,Ne=null,rt=null;return{setTest:function(et){U||(et?J(i.STENCIL_TEST):he(i.STENCIL_TEST))},setMask:function(et){re!==et&&!U&&(i.stencilMask(et),re=et)},setFunc:function(et,Tn,_n){(oe!==et||ge!==Tn||ee!==_n)&&(i.stencilFunc(et,Tn,_n),oe=et,ge=Tn,ee=_n)},setOp:function(et,Tn,_n){(Z!==et||ve!==Tn||Ne!==_n)&&(i.stencilOp(et,Tn,_n),Z=et,ve=Tn,Ne=_n)},setLocked:function(et){U=et},setClear:function(et){rt!==et&&(i.clearStencil(et),rt=et)},reset:function(){U=!1,re=null,oe=null,ge=null,ee=null,Z=null,ve=null,Ne=null,rt=null}}}const s=new t,o=new n,a=new r,l=new WeakMap,c=new WeakMap;let h={},u={},p=new WeakMap,d=[],_=null,g=!1,m=null,f=null,b=null,E=null,v=null,w=null,R=null,T=new $e(0,0,0),P=0,M=!1,S=null,D=null,O=null,A=null,N=null;const F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,q=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(G)[1]),V=q>=1):G.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),V=q>=2);let ne=null,le={};const K=i.getParameter(i.SCISSOR_BOX),we=i.getParameter(i.VIEWPORT),He=new mt().fromArray(K),Xe=new mt().fromArray(we);function je(U,re,oe,ge){const ee=new Uint8Array(4),Z=i.createTexture();i.bindTexture(U,Z),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ve=0;ve<oe;ve++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(re,0,i.RGBA,1,1,ge,0,i.RGBA,i.UNSIGNED_BYTE,ee):i.texImage2D(re+ve,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ee);return Z}const j={};j[i.TEXTURE_2D]=je(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=je(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=je(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=je(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(i.DEPTH_TEST),o.setFunc(Fi),Le(!1),xe(da),J(i.CULL_FACE),at(Wn);function J(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function he(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function pe(U,re){return u[U]!==re?(i.bindFramebuffer(U,re),u[U]=re,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=re),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=re),!0):!1}function fe(U,re){let oe=d,ge=!1;if(U){oe=p.get(re),oe===void 0&&(oe=[],p.set(re,oe));const ee=U.textures;if(oe.length!==ee.length||oe[0]!==i.COLOR_ATTACHMENT0){for(let Z=0,ve=ee.length;Z<ve;Z++)oe[Z]=i.COLOR_ATTACHMENT0+Z;oe.length=ee.length,ge=!0}}else oe[0]!==i.BACK&&(oe[0]=i.BACK,ge=!0);ge&&i.drawBuffers(oe)}function Ge(U){return _!==U?(i.useProgram(U),_=U,!0):!1}const Et={[ri]:i.FUNC_ADD,[wc]:i.FUNC_SUBTRACT,[Ac]:i.FUNC_REVERSE_SUBTRACT};Et[Rc]=i.MIN,Et[Cc]=i.MAX;const L={[Pc]:i.ZERO,[Lc]:i.ONE,[Dc]:i.SRC_COLOR,[Hs]:i.SRC_ALPHA,[kc]:i.SRC_ALPHA_SATURATE,[Fc]:i.DST_COLOR,[Uc]:i.DST_ALPHA,[Ic]:i.ONE_MINUS_SRC_COLOR,[Gs]:i.ONE_MINUS_SRC_ALPHA,[Oc]:i.ONE_MINUS_DST_COLOR,[Nc]:i.ONE_MINUS_DST_ALPHA,[Bc]:i.CONSTANT_COLOR,[zc]:i.ONE_MINUS_CONSTANT_COLOR,[Hc]:i.CONSTANT_ALPHA,[Gc]:i.ONE_MINUS_CONSTANT_ALPHA};function at(U,re,oe,ge,ee,Z,ve,Ne,rt,et){if(U===Wn){g===!0&&(he(i.BLEND),g=!1);return}if(g===!1&&(J(i.BLEND),g=!0),U!==Tc){if(U!==m||et!==M){if((f!==ri||v!==ri)&&(i.blendEquation(i.FUNC_ADD),f=ri,v=ri),et)switch(U){case Ii:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fa:i.blendFunc(i.ONE,i.ONE);break;case pa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ma:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Ii:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case pa:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ma:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}b=null,E=null,w=null,R=null,T.set(0,0,0),P=0,m=U,M=et}return}ee=ee||re,Z=Z||oe,ve=ve||ge,(re!==f||ee!==v)&&(i.blendEquationSeparate(Et[re],Et[ee]),f=re,v=ee),(oe!==b||ge!==E||Z!==w||ve!==R)&&(i.blendFuncSeparate(L[oe],L[ge],L[Z],L[ve]),b=oe,E=ge,w=Z,R=ve),(Ne.equals(T)===!1||rt!==P)&&(i.blendColor(Ne.r,Ne.g,Ne.b,rt),T.copy(Ne),P=rt),m=U,M=!1}function Oe(U,re){U.side===Yt?he(i.CULL_FACE):J(i.CULL_FACE);let oe=U.side===Ht;re&&(oe=!oe),Le(oe),U.blending===Ii&&U.transparent===!1?at(Wn):at(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);const ge=U.stencilWrite;a.setTest(ge),ge&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Me(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):he(i.SAMPLE_ALPHA_TO_COVERAGE)}function Le(U){S!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),S=U)}function xe(U){U!==Sc?(J(i.CULL_FACE),U!==D&&(U===da?i.cullFace(i.BACK):U===yc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):he(i.CULL_FACE),D=U}function lt(U){U!==O&&(V&&i.lineWidth(U),O=U)}function Me(U,re,oe){U?(J(i.POLYGON_OFFSET_FILL),(A!==re||N!==oe)&&(i.polygonOffset(re,oe),A=re,N=oe)):he(i.POLYGON_OFFSET_FILL)}function Ve(U){U?J(i.SCISSOR_TEST):he(i.SCISSOR_TEST)}function At(U){U===void 0&&(U=i.TEXTURE0+F-1),ne!==U&&(i.activeTexture(U),ne=U)}function gt(U,re,oe){oe===void 0&&(ne===null?oe=i.TEXTURE0+F-1:oe=ne);let ge=le[oe];ge===void 0&&(ge={type:void 0,texture:void 0},le[oe]=ge),(ge.type!==U||ge.texture!==re)&&(ne!==oe&&(i.activeTexture(oe),ne=oe),i.bindTexture(U,re||j[U]),ge.type=U,ge.texture=re)}function C(){const U=le[ne];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function x(){try{i.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function H(){try{i.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $(){try{i.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(){try{i.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function be(){try{i.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function se(){try{i.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Se(){try{i.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ye(){try{i.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{i.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function de(U){He.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),He.copy(U))}function Pe(U){Xe.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Xe.copy(U))}function Ee(U,re){let oe=c.get(re);oe===void 0&&(oe=new WeakMap,c.set(re,oe));let ge=oe.get(U);ge===void 0&&(ge=i.getUniformBlockIndex(re,U.name),oe.set(U,ge))}function ce(U,re){const ge=c.get(re).get(U);l.get(re)!==ge&&(i.uniformBlockBinding(re,ge,U.__bindingPointIndex),l.set(re,ge))}function Be(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ne=null,le={},u={},p=new WeakMap,d=[],_=null,g=!1,m=null,f=null,b=null,E=null,v=null,w=null,R=null,T=new $e(0,0,0),P=0,M=!1,S=null,D=null,O=null,A=null,N=null,He.set(0,0,i.canvas.width,i.canvas.height),Xe.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:J,disable:he,bindFramebuffer:pe,drawBuffers:fe,useProgram:Ge,setBlending:at,setMaterial:Oe,setFlipSided:Le,setCullFace:xe,setLineWidth:lt,setPolygonOffset:Me,setScissorTest:Ve,activeTexture:At,bindTexture:gt,unbindTexture:C,compressedTexImage2D:x,compressedTexImage3D:H,texImage2D:ye,texImage3D:ie,updateUBOMapping:Ee,uniformBlockBinding:ce,texStorage2D:se,texStorage3D:Se,texSubImage2D:$,texSubImage3D:Q,compressedTexSubImage2D:Y,compressedTexSubImage3D:be,scissor:de,viewport:Pe,reset:Be}}function Om(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ie,h=new WeakMap;let u;const p=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,x){return d?new OffscreenCanvas(C,x):jr("canvas")}function g(C,x,H){let $=1;const Q=gt(C);if((Q.width>H||Q.height>H)&&($=H/Math.max(Q.width,Q.height)),$<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Y=Math.floor($*Q.width),be=Math.floor($*Q.height);u===void 0&&(u=_(Y,be));const se=x?_(Y,be):u;return se.width=Y,se.height=be,se.getContext("2d").drawImage(C,0,0,Y,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Y+"x"+be+")."),se}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),C;return C}function m(C){return C.generateMipmaps}function f(C){i.generateMipmap(C)}function b(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(C,x,H,$,Q=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Y=x;if(x===i.RED&&(H===i.FLOAT&&(Y=i.R32F),H===i.HALF_FLOAT&&(Y=i.R16F),H===i.UNSIGNED_BYTE&&(Y=i.R8)),x===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(Y=i.R8UI),H===i.UNSIGNED_SHORT&&(Y=i.R16UI),H===i.UNSIGNED_INT&&(Y=i.R32UI),H===i.BYTE&&(Y=i.R8I),H===i.SHORT&&(Y=i.R16I),H===i.INT&&(Y=i.R32I)),x===i.RG&&(H===i.FLOAT&&(Y=i.RG32F),H===i.HALF_FLOAT&&(Y=i.RG16F),H===i.UNSIGNED_BYTE&&(Y=i.RG8)),x===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(Y=i.RG8UI),H===i.UNSIGNED_SHORT&&(Y=i.RG16UI),H===i.UNSIGNED_INT&&(Y=i.RG32UI),H===i.BYTE&&(Y=i.RG8I),H===i.SHORT&&(Y=i.RG16I),H===i.INT&&(Y=i.RG32I)),x===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),H===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),H===i.UNSIGNED_INT&&(Y=i.RGB32UI),H===i.BYTE&&(Y=i.RGB8I),H===i.SHORT&&(Y=i.RGB16I),H===i.INT&&(Y=i.RGB32I)),x===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),H===i.UNSIGNED_INT&&(Y=i.RGBA32UI),H===i.BYTE&&(Y=i.RGBA8I),H===i.SHORT&&(Y=i.RGBA16I),H===i.INT&&(Y=i.RGBA32I)),x===i.RGB&&(H===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),x===i.RGBA){const be=Q?qr:Qe.getTransfer($);H===i.FLOAT&&(Y=i.RGBA32F),H===i.HALF_FLOAT&&(Y=i.RGBA16F),H===i.UNSIGNED_BYTE&&(Y=be===nt?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function v(C,x){let H;return C?x===null||x===hi||x===or?H=i.DEPTH24_STENCIL8:x===In?H=i.DEPTH32F_STENCIL8:x===sr&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===hi||x===or?H=i.DEPTH_COMPONENT24:x===In?H=i.DEPTH_COMPONENT32F:x===sr&&(H=i.DEPTH_COMPONENT16),H}function w(C,x){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==fn&&C.minFilter!==Mn?Math.log2(Math.max(x.width,x.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?x.mipmaps.length:1}function R(C){const x=C.target;x.removeEventListener("dispose",R),P(x),x.isVideoTexture&&h.delete(x)}function T(C){const x=C.target;x.removeEventListener("dispose",T),S(x)}function P(C){const x=n.get(C);if(x.__webglInit===void 0)return;const H=C.source,$=p.get(H);if($){const Q=$[x.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&M(C),Object.keys($).length===0&&p.delete(H)}n.remove(C)}function M(C){const x=n.get(C);i.deleteTexture(x.__webglTexture);const H=C.source,$=p.get(H);delete $[x.__cacheKey],o.memory.textures--}function S(C){const x=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(x.__webglFramebuffer[$]))for(let Q=0;Q<x.__webglFramebuffer[$].length;Q++)i.deleteFramebuffer(x.__webglFramebuffer[$][Q]);else i.deleteFramebuffer(x.__webglFramebuffer[$]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[$])}else{if(Array.isArray(x.__webglFramebuffer))for(let $=0;$<x.__webglFramebuffer.length;$++)i.deleteFramebuffer(x.__webglFramebuffer[$]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let $=0;$<x.__webglColorRenderbuffer.length;$++)x.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[$]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const H=C.textures;for(let $=0,Q=H.length;$<Q;$++){const Y=n.get(H[$]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(H[$])}n.remove(C)}let D=0;function O(){D=0}function A(){const C=D;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),D+=1,C}function N(C){const x=[];return x.push(C.wrapS),x.push(C.wrapT),x.push(C.wrapR||0),x.push(C.magFilter),x.push(C.minFilter),x.push(C.anisotropy),x.push(C.internalFormat),x.push(C.format),x.push(C.type),x.push(C.generateMipmaps),x.push(C.premultiplyAlpha),x.push(C.flipY),x.push(C.unpackAlignment),x.push(C.colorSpace),x.join()}function F(C,x){const H=n.get(C);if(C.isVideoTexture&&Ve(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&H.__version!==C.version){const $=C.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(H,C,x);return}}else C.isExternalTexture&&(H.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+x)}function V(C,x){const H=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){j(H,C,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+x)}function q(C,x){const H=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){j(H,C,x);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+x)}function G(C,x){const H=n.get(C);if(C.version>0&&H.__version!==C.version){J(H,C,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+x)}const ne={[Js]:i.REPEAT,[ai]:i.CLAMP_TO_EDGE,[Qs]:i.MIRRORED_REPEAT},le={[fn]:i.NEAREST,[Zc]:i.NEAREST_MIPMAP_NEAREST,[xr]:i.NEAREST_MIPMAP_LINEAR,[Mn]:i.LINEAR,[os]:i.LINEAR_MIPMAP_NEAREST,[li]:i.LINEAR_MIPMAP_LINEAR},K={[th]:i.NEVER,[ah]:i.ALWAYS,[nh]:i.LESS,[wl]:i.LEQUAL,[ih]:i.EQUAL,[oh]:i.GEQUAL,[rh]:i.GREATER,[sh]:i.NOTEQUAL};function we(C,x){if(x.type===In&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Mn||x.magFilter===os||x.magFilter===xr||x.magFilter===li||x.minFilter===Mn||x.minFilter===os||x.minFilter===xr||x.minFilter===li)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,ne[x.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,ne[x.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,ne[x.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,le[x.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,le[x.minFilter]),x.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,K[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===fn||x.minFilter!==xr&&x.minFilter!==li||x.type===In&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function He(C,x){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,x.addEventListener("dispose",R));const $=x.source;let Q=p.get($);Q===void 0&&(Q={},p.set($,Q));const Y=N(x);if(Y!==C.__cacheKey){Q[Y]===void 0&&(Q[Y]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),Q[Y].usedTimes++;const be=Q[C.__cacheKey];be!==void 0&&(Q[C.__cacheKey].usedTimes--,be.usedTimes===0&&M(x)),C.__cacheKey=Y,C.__webglTexture=Q[Y].texture}return H}function Xe(C,x,H){return Math.floor(Math.floor(C/H)/x)}function je(C,x,H,$){const Y=C.updateRanges;if(Y.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,H,$,x.data);else{Y.sort((ie,de)=>ie.start-de.start);let be=0;for(let ie=1;ie<Y.length;ie++){const de=Y[be],Pe=Y[ie],Ee=de.start+de.count,ce=Xe(Pe.start,x.width,4),Be=Xe(de.start,x.width,4);Pe.start<=Ee+1&&ce===Be&&Xe(Pe.start+Pe.count-1,x.width,4)===ce?de.count=Math.max(de.count,Pe.start+Pe.count-de.start):(++be,Y[be]=Pe)}Y.length=be+1;const se=i.getParameter(i.UNPACK_ROW_LENGTH),Se=i.getParameter(i.UNPACK_SKIP_PIXELS),ye=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let ie=0,de=Y.length;ie<de;ie++){const Pe=Y[ie],Ee=Math.floor(Pe.start/4),ce=Math.ceil(Pe.count/4),Be=Ee%x.width,U=Math.floor(Ee/x.width),re=ce,oe=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Be),i.pixelStorei(i.UNPACK_SKIP_ROWS,U),t.texSubImage2D(i.TEXTURE_2D,0,Be,U,re,oe,H,$,x.data)}C.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,se),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Se),i.pixelStorei(i.UNPACK_SKIP_ROWS,ye)}}function j(C,x,H){let $=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&($=i.TEXTURE_3D);const Q=He(C,x),Y=x.source;t.bindTexture($,C.__webglTexture,i.TEXTURE0+H);const be=n.get(Y);if(Y.version!==be.__version||Q===!0){t.activeTexture(i.TEXTURE0+H);const se=Qe.getPrimaries(Qe.workingColorSpace),Se=x.colorSpace===Gn?null:Qe.getPrimaries(x.colorSpace),ye=x.colorSpace===Gn||se===Se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);let ie=g(x.image,!1,r.maxTextureSize);ie=At(x,ie);const de=s.convert(x.format,x.colorSpace),Pe=s.convert(x.type);let Ee=E(x.internalFormat,de,Pe,x.colorSpace,x.isVideoTexture);we($,x);let ce;const Be=x.mipmaps,U=x.isVideoTexture!==!0,re=be.__version===void 0||Q===!0,oe=Y.dataReady,ge=w(x,ie);if(x.isDepthTexture)Ee=v(x.format===lr,x.type),re&&(U?t.texStorage2D(i.TEXTURE_2D,1,Ee,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,Ee,ie.width,ie.height,0,de,Pe,null));else if(x.isDataTexture)if(Be.length>0){U&&re&&t.texStorage2D(i.TEXTURE_2D,ge,Ee,Be[0].width,Be[0].height);for(let ee=0,Z=Be.length;ee<Z;ee++)ce=Be[ee],U?oe&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,ce.width,ce.height,de,Pe,ce.data):t.texImage2D(i.TEXTURE_2D,ee,Ee,ce.width,ce.height,0,de,Pe,ce.data);x.generateMipmaps=!1}else U?(re&&t.texStorage2D(i.TEXTURE_2D,ge,Ee,ie.width,ie.height),oe&&je(x,ie,de,Pe)):t.texImage2D(i.TEXTURE_2D,0,Ee,ie.width,ie.height,0,de,Pe,ie.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){U&&re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ge,Ee,Be[0].width,Be[0].height,ie.depth);for(let ee=0,Z=Be.length;ee<Z;ee++)if(ce=Be[ee],x.format!==dn)if(de!==null)if(U){if(oe)if(x.layerUpdates.size>0){const ve=za(ce.width,ce.height,x.format,x.type);for(const Ne of x.layerUpdates){const rt=ce.data.subarray(Ne*ve/ce.data.BYTES_PER_ELEMENT,(Ne+1)*ve/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,Ne,ce.width,ce.height,1,de,rt)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,ce.width,ce.height,ie.depth,de,ce.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ee,Ee,ce.width,ce.height,ie.depth,0,ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?oe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,ce.width,ce.height,ie.depth,de,Pe,ce.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ee,Ee,ce.width,ce.height,ie.depth,0,de,Pe,ce.data)}else{U&&re&&t.texStorage2D(i.TEXTURE_2D,ge,Ee,Be[0].width,Be[0].height);for(let ee=0,Z=Be.length;ee<Z;ee++)ce=Be[ee],x.format!==dn?de!==null?U?oe&&t.compressedTexSubImage2D(i.TEXTURE_2D,ee,0,0,ce.width,ce.height,de,ce.data):t.compressedTexImage2D(i.TEXTURE_2D,ee,Ee,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?oe&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,ce.width,ce.height,de,Pe,ce.data):t.texImage2D(i.TEXTURE_2D,ee,Ee,ce.width,ce.height,0,de,Pe,ce.data)}else if(x.isDataArrayTexture)if(U){if(re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ge,Ee,ie.width,ie.height,ie.depth),oe)if(x.layerUpdates.size>0){const ee=za(ie.width,ie.height,x.format,x.type);for(const Z of x.layerUpdates){const ve=ie.data.subarray(Z*ee/ie.data.BYTES_PER_ELEMENT,(Z+1)*ee/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,ie.width,ie.height,1,de,Pe,ve)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,de,Pe,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ee,ie.width,ie.height,ie.depth,0,de,Pe,ie.data);else if(x.isData3DTexture)U?(re&&t.texStorage3D(i.TEXTURE_3D,ge,Ee,ie.width,ie.height,ie.depth),oe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,de,Pe,ie.data)):t.texImage3D(i.TEXTURE_3D,0,Ee,ie.width,ie.height,ie.depth,0,de,Pe,ie.data);else if(x.isFramebufferTexture){if(re)if(U)t.texStorage2D(i.TEXTURE_2D,ge,Ee,ie.width,ie.height);else{let ee=ie.width,Z=ie.height;for(let ve=0;ve<ge;ve++)t.texImage2D(i.TEXTURE_2D,ve,Ee,ee,Z,0,de,Pe,null),ee>>=1,Z>>=1}}else if(Be.length>0){if(U&&re){const ee=gt(Be[0]);t.texStorage2D(i.TEXTURE_2D,ge,Ee,ee.width,ee.height)}for(let ee=0,Z=Be.length;ee<Z;ee++)ce=Be[ee],U?oe&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,de,Pe,ce):t.texImage2D(i.TEXTURE_2D,ee,Ee,de,Pe,ce);x.generateMipmaps=!1}else if(U){if(re){const ee=gt(ie);t.texStorage2D(i.TEXTURE_2D,ge,Ee,ee.width,ee.height)}oe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,de,Pe,ie)}else t.texImage2D(i.TEXTURE_2D,0,Ee,de,Pe,ie);m(x)&&f($),be.__version=Y.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function J(C,x,H){if(x.image.length!==6)return;const $=He(C,x),Q=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+H);const Y=n.get(Q);if(Q.version!==Y.__version||$===!0){t.activeTexture(i.TEXTURE0+H);const be=Qe.getPrimaries(Qe.workingColorSpace),se=x.colorSpace===Gn?null:Qe.getPrimaries(x.colorSpace),Se=x.colorSpace===Gn||be===se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const ye=x.isCompressedTexture||x.image[0].isCompressedTexture,ie=x.image[0]&&x.image[0].isDataTexture,de=[];for(let Z=0;Z<6;Z++)!ye&&!ie?de[Z]=g(x.image[Z],!0,r.maxCubemapSize):de[Z]=ie?x.image[Z].image:x.image[Z],de[Z]=At(x,de[Z]);const Pe=de[0],Ee=s.convert(x.format,x.colorSpace),ce=s.convert(x.type),Be=E(x.internalFormat,Ee,ce,x.colorSpace),U=x.isVideoTexture!==!0,re=Y.__version===void 0||$===!0,oe=Q.dataReady;let ge=w(x,Pe);we(i.TEXTURE_CUBE_MAP,x);let ee;if(ye){U&&re&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,Be,Pe.width,Pe.height);for(let Z=0;Z<6;Z++){ee=de[Z].mipmaps;for(let ve=0;ve<ee.length;ve++){const Ne=ee[ve];x.format!==dn?Ee!==null?U?oe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve,0,0,Ne.width,Ne.height,Ee,Ne.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve,Be,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve,0,0,Ne.width,Ne.height,Ee,ce,Ne.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve,Be,Ne.width,Ne.height,0,Ee,ce,Ne.data)}}}else{if(ee=x.mipmaps,U&&re){ee.length>0&&ge++;const Z=gt(de[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,Be,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ie){U?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,de[Z].width,de[Z].height,Ee,ce,de[Z].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Be,de[Z].width,de[Z].height,0,Ee,ce,de[Z].data);for(let ve=0;ve<ee.length;ve++){const rt=ee[ve].image[Z].image;U?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve+1,0,0,rt.width,rt.height,Ee,ce,rt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve+1,Be,rt.width,rt.height,0,Ee,ce,rt.data)}}else{U?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ee,ce,de[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Be,Ee,ce,de[Z]);for(let ve=0;ve<ee.length;ve++){const Ne=ee[ve];U?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve+1,0,0,Ee,ce,Ne.image[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve+1,Be,Ee,ce,Ne.image[Z])}}}m(x)&&f(i.TEXTURE_CUBE_MAP),Y.__version=Q.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function he(C,x,H,$,Q,Y){const be=s.convert(H.format,H.colorSpace),se=s.convert(H.type),Se=E(H.internalFormat,be,se,H.colorSpace),ye=n.get(x),ie=n.get(H);if(ie.__renderTarget=x,!ye.__hasExternalTextures){const de=Math.max(1,x.width>>Y),Pe=Math.max(1,x.height>>Y);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,Y,Se,de,Pe,x.depth,0,be,se,null):t.texImage2D(Q,Y,Se,de,Pe,0,be,se,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),Me(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,Q,ie.__webglTexture,0,lt(x)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,Q,ie.__webglTexture,Y),t.bindFramebuffer(i.FRAMEBUFFER,null)}function pe(C,x,H){if(i.bindRenderbuffer(i.RENDERBUFFER,C),x.depthBuffer){const $=x.depthTexture,Q=$&&$.isDepthTexture?$.type:null,Y=v(x.stencilBuffer,Q),be=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=lt(x);Me(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,se,Y,x.width,x.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,se,Y,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Y,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,be,i.RENDERBUFFER,C)}else{const $=x.textures;for(let Q=0;Q<$.length;Q++){const Y=$[Q],be=s.convert(Y.format,Y.colorSpace),se=s.convert(Y.type),Se=E(Y.internalFormat,be,se,Y.colorSpace),ye=lt(x);H&&Me(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,Se,x.width,x.height):Me(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ye,Se,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Se,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function fe(C,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(x.depthTexture);$.__renderTarget=x,(!$.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),F(x.depthTexture,0);const Q=$.__webglTexture,Y=lt(x);if(x.depthTexture.format===ar)Me(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(x.depthTexture.format===lr)Me(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ge(C){const x=n.get(C),H=C.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==C.depthTexture){const $=C.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),$){const Q=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,$.removeEventListener("dispose",Q)};$.addEventListener("dispose",Q),x.__depthDisposeCallback=Q}x.__boundDepthTexture=$}if(C.depthTexture&&!x.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");const $=C.texture.mipmaps;$&&$.length>0?fe(x.__webglFramebuffer[0],C):fe(x.__webglFramebuffer,C)}else if(H){x.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[$]),x.__webglDepthbuffer[$]===void 0)x.__webglDepthbuffer[$]=i.createRenderbuffer(),pe(x.__webglDepthbuffer[$],C,!1);else{const Q=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,Y)}}else{const $=C.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),pe(x.__webglDepthbuffer,C,!1);else{const Q=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,Y)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Et(C,x,H){const $=n.get(C);x!==void 0&&he($.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&Ge(C)}function L(C){const x=C.texture,H=n.get(C),$=n.get(x);C.addEventListener("dispose",T);const Q=C.textures,Y=C.isWebGLCubeRenderTarget===!0,be=Q.length>1;if(be||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=x.version,o.memory.textures++),Y){H.__webglFramebuffer=[];for(let se=0;se<6;se++)if(x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer[se]=[];for(let Se=0;Se<x.mipmaps.length;Se++)H.__webglFramebuffer[se][Se]=i.createFramebuffer()}else H.__webglFramebuffer[se]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer=[];for(let se=0;se<x.mipmaps.length;se++)H.__webglFramebuffer[se]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(be)for(let se=0,Se=Q.length;se<Se;se++){const ye=n.get(Q[se]);ye.__webglTexture===void 0&&(ye.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&Me(C)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let se=0;se<Q.length;se++){const Se=Q[se];H.__webglColorRenderbuffer[se]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[se]);const ye=s.convert(Se.format,Se.colorSpace),ie=s.convert(Se.type),de=E(Se.internalFormat,ye,ie,Se.colorSpace,C.isXRRenderTarget===!0),Pe=lt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe,de,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,H.__webglColorRenderbuffer[se])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),pe(H.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),we(i.TEXTURE_CUBE_MAP,x);for(let se=0;se<6;se++)if(x.mipmaps&&x.mipmaps.length>0)for(let Se=0;Se<x.mipmaps.length;Se++)he(H.__webglFramebuffer[se][Se],C,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Se);else he(H.__webglFramebuffer[se],C,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);m(x)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let se=0,Se=Q.length;se<Se;se++){const ye=Q[se],ie=n.get(ye);let de=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(de=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,ie.__webglTexture),we(de,ye),he(H.__webglFramebuffer,C,ye,i.COLOR_ATTACHMENT0+se,de,0),m(ye)&&f(de)}t.unbindTexture()}else{let se=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(se=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(se,$.__webglTexture),we(se,x),x.mipmaps&&x.mipmaps.length>0)for(let Se=0;Se<x.mipmaps.length;Se++)he(H.__webglFramebuffer[Se],C,x,i.COLOR_ATTACHMENT0,se,Se);else he(H.__webglFramebuffer,C,x,i.COLOR_ATTACHMENT0,se,0);m(x)&&f(se),t.unbindTexture()}C.depthBuffer&&Ge(C)}function at(C){const x=C.textures;for(let H=0,$=x.length;H<$;H++){const Q=x[H];if(m(Q)){const Y=b(C),be=n.get(Q).__webglTexture;t.bindTexture(Y,be),f(Y),t.unbindTexture()}}}const Oe=[],Le=[];function xe(C){if(C.samples>0){if(Me(C)===!1){const x=C.textures,H=C.width,$=C.height;let Q=i.COLOR_BUFFER_BIT;const Y=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=n.get(C),se=x.length>1;if(se)for(let ye=0;ye<x.length;ye++)t.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer);const Se=C.texture.mipmaps;Se&&Se.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let ye=0;ye<x.length;ye++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),se){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,be.__webglColorRenderbuffer[ye]);const ie=n.get(x[ye]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ie,0)}i.blitFramebuffer(0,0,H,$,0,0,H,$,Q,i.NEAREST),l===!0&&(Oe.length=0,Le.length=0,Oe.push(i.COLOR_ATTACHMENT0+ye),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Oe.push(Y),Le.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Le)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Oe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),se)for(let ye=0;ye<x.length;ye++){t.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,be.__webglColorRenderbuffer[ye]);const ie=n.get(x[ye]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,ie,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const x=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function lt(C){return Math.min(r.maxSamples,C.samples)}function Me(C){const x=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ve(C){const x=o.render.frame;h.get(C)!==x&&(h.set(C,x),C.update())}function At(C,x){const H=C.colorSpace,$=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||H!==Bi&&H!==Gn&&(Qe.getTransfer(H)===nt?($!==dn||Q!==bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),x}function gt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=A,this.resetTextureUnits=O,this.setTexture2D=F,this.setTexture2DArray=V,this.setTexture3D=q,this.setTextureCube=G,this.rebindTextures=Et,this.setupRenderTarget=L,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=he,this.useMultisampledRTT=Me}function km(i,e){function t(n,r=Gn){let s;const o=Qe.getTransfer(r);if(n===bn)return i.UNSIGNED_BYTE;if(n===ko)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Bo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ml)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Sl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===vl)return i.BYTE;if(n===xl)return i.SHORT;if(n===sr)return i.UNSIGNED_SHORT;if(n===Oo)return i.INT;if(n===hi)return i.UNSIGNED_INT;if(n===In)return i.FLOAT;if(n===fr)return i.HALF_FLOAT;if(n===yl)return i.ALPHA;if(n===El)return i.RGB;if(n===dn)return i.RGBA;if(n===ar)return i.DEPTH_COMPONENT;if(n===lr)return i.DEPTH_STENCIL;if(n===bl)return i.RED;if(n===zo)return i.RED_INTEGER;if(n===Tl)return i.RG;if(n===Ho)return i.RG_INTEGER;if(n===Go)return i.RGBA_INTEGER;if(n===Hr||n===Gr||n===Vr||n===Wr)if(o===nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Hr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Gr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Vr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Wr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Hr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Gr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Vr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Wr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===eo||n===to||n===no||n===io)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===eo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===to)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===no)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===io)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ro||n===so||n===oo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ro||n===so)return o===nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===oo)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ao||n===lo||n===co||n===ho||n===uo||n===fo||n===po||n===mo||n===go||n===_o||n===vo||n===xo||n===Mo||n===So)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ao)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===lo)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===co)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ho)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===uo)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fo)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===po)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===mo)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===go)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===_o)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===vo)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===xo)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Mo)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===So)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===yo||n===Eo||n===bo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===yo)return o===nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Eo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===bo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===To||n===wo||n===Ao||n===Ro)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===To)return s.COMPRESSED_RED_RGTC1_EXT;if(n===wo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ao)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ro)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===or?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Bm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zm=`
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

}`;class Hm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Ol(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Yn({vertexShader:Bm,fragmentShader:zm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ct(new gr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Gm extends Vi{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,p=null,d=null,_=null;const g=typeof XRWebGLBinding<"u",m=new Hm,f={},b=t.getContextAttributes();let E=null,v=null;const w=[],R=[],T=new Ie;let P=null;const M=new cn;M.viewport=new mt;const S=new cn;S.viewport=new mt;const D=[M,S],O=new lu;let A=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let J=w[j];return J===void 0&&(J=new As,w[j]=J),J.getTargetRaySpace()},this.getControllerGrip=function(j){let J=w[j];return J===void 0&&(J=new As,w[j]=J),J.getGripSpace()},this.getHand=function(j){let J=w[j];return J===void 0&&(J=new As,w[j]=J),J.getHandSpace()};function F(j){const J=R.indexOf(j.inputSource);if(J===-1)return;const he=w[J];he!==void 0&&(he.update(j.inputSource,j.frame,c||o),he.dispatchEvent({type:j.type,data:j.inputSource}))}function V(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",q);for(let j=0;j<w.length;j++){const J=R[j];J!==null&&(R[j]=null,w[j].disconnect(J))}A=null,N=null,m.reset();for(const j in f)delete f[j];e.setRenderTarget(E),d=null,p=null,u=null,r=null,v=null,je.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return p!==null?p:d},this.getBinding=function(){return u===null&&g&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(E=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",V),r.addEventListener("inputsourceschange",q),b.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(T),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,pe=null,fe=null;b.depth&&(fe=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=b.stencil?lr:ar,pe=b.stencil?or:hi);const Ge={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:s};u=this.getBinding(),p=u.createProjectionLayer(Ge),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),v=new ui(p.textureWidth,p.textureHeight,{format:dn,type:bn,depthTexture:new Fl(p.textureWidth,p.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const he={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,he),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new ui(d.framebufferWidth,d.framebufferHeight,{format:dn,type:bn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),je.setContext(r),je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function q(j){for(let J=0;J<j.removed.length;J++){const he=j.removed[J],pe=R.indexOf(he);pe>=0&&(R[pe]=null,w[pe].disconnect(he))}for(let J=0;J<j.added.length;J++){const he=j.added[J];let pe=R.indexOf(he);if(pe===-1){for(let Ge=0;Ge<w.length;Ge++)if(Ge>=R.length){R.push(he),pe=Ge;break}else if(R[Ge]===null){R[Ge]=he,pe=Ge;break}if(pe===-1)break}const fe=w[pe];fe&&fe.connect(he)}}const G=new I,ne=new I;function le(j,J,he){G.setFromMatrixPosition(J.matrixWorld),ne.setFromMatrixPosition(he.matrixWorld);const pe=G.distanceTo(ne),fe=J.projectionMatrix.elements,Ge=he.projectionMatrix.elements,Et=fe[14]/(fe[10]-1),L=fe[14]/(fe[10]+1),at=(fe[9]+1)/fe[5],Oe=(fe[9]-1)/fe[5],Le=(fe[8]-1)/fe[0],xe=(Ge[8]+1)/Ge[0],lt=Et*Le,Me=Et*xe,Ve=pe/(-Le+xe),At=Ve*-Le;if(J.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(At),j.translateZ(Ve),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),fe[10]===-1)j.projectionMatrix.copy(J.projectionMatrix),j.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const gt=Et+Ve,C=L+Ve,x=lt-At,H=Me+(pe-At),$=at*L/C*gt,Q=Oe*L/C*gt;j.projectionMatrix.makePerspective(x,H,$,Q,gt,C),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function K(j,J){J===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(J.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let J=j.near,he=j.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(he=m.depthFar)),O.near=S.near=M.near=J,O.far=S.far=M.far=he,(A!==O.near||N!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),A=O.near,N=O.far),O.layers.mask=j.layers.mask|6,M.layers.mask=O.layers.mask&3,S.layers.mask=O.layers.mask&5;const pe=j.parent,fe=O.cameras;K(O,pe);for(let Ge=0;Ge<fe.length;Ge++)K(fe[Ge],pe);fe.length===2?le(O,M,S):O.projectionMatrix.copy(M.projectionMatrix),we(j,O,pe)};function we(j,J,he){he===null?j.matrix.copy(J.matrixWorld):(j.matrix.copy(he.matrixWorld),j.matrix.invert(),j.matrix.multiply(J.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(J.projectionMatrix),j.projectionMatrixInverse.copy(J.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=cr*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(p===null&&d===null))return l},this.setFoveation=function(j){l=j,p!==null&&(p.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(j){return f[j]};let He=null;function Xe(j,J){if(h=J.getViewerPose(c||o),_=J,h!==null){const he=h.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let pe=!1;he.length!==O.cameras.length&&(O.cameras.length=0,pe=!0);for(let L=0;L<he.length;L++){const at=he[L];let Oe=null;if(d!==null)Oe=d.getViewport(at);else{const xe=u.getViewSubImage(p,at);Oe=xe.viewport,L===0&&(e.setRenderTargetTextures(v,xe.colorTexture,xe.depthStencilTexture),e.setRenderTarget(v))}let Le=D[L];Le===void 0&&(Le=new cn,Le.layers.enable(L),Le.viewport=new mt,D[L]=Le),Le.matrix.fromArray(at.transform.matrix),Le.matrix.decompose(Le.position,Le.quaternion,Le.scale),Le.projectionMatrix.fromArray(at.projectionMatrix),Le.projectionMatrixInverse.copy(Le.projectionMatrix).invert(),Le.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),L===0&&(O.matrix.copy(Le.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),pe===!0&&O.cameras.push(Le)}const fe=r.enabledFeatures;if(fe&&fe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&g){u=n.getBinding();const L=u.getDepthInformation(he[0]);L&&L.isValid&&L.texture&&m.init(L,r.renderState)}if(fe&&fe.includes("camera-access")&&g){e.state.unbindTexture(),u=n.getBinding();for(let L=0;L<he.length;L++){const at=he[L].camera;if(at){let Oe=f[at];Oe||(Oe=new Ol,f[at]=Oe);const Le=u.getCameraImage(at);Oe.sourceTexture=Le}}}}for(let he=0;he<w.length;he++){const pe=R[he],fe=w[he];pe!==null&&fe!==void 0&&fe.update(pe,J,c||o)}He&&He(j,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),_=null}const je=new zl;je.setAnimationLoop(Xe),this.setAnimationLoop=function(j){He=j},this.dispose=function(){}}}const ti=new gn,Vm=new vt;function Wm(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Il(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,b,E,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),u(m,f)):f.isMeshPhongMaterial?(s(m,f),h(m,f)):f.isMeshStandardMaterial?(s(m,f),p(m,f),f.isMeshPhysicalMaterial&&d(m,f,v)):f.isMeshMatcapMaterial?(s(m,f),_(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),g(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,b,E):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ht&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ht&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const b=e.get(f),E=b.envMap,v=b.envMapRotation;E&&(m.envMap.value=E,ti.copy(v),ti.x*=-1,ti.y*=-1,ti.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ti.y*=-1,ti.z*=-1),m.envMapRotation.value.setFromMatrix4(Vm.makeRotationFromEuler(ti)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,b,E){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*b,m.scale.value=E*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function p(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function d(m,f,b){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ht&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){const b=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Xm(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,E){const v=E.program;n.uniformBlockBinding(b,v)}function c(b,E){let v=r[b.id];v===void 0&&(_(b),v=h(b),r[b.id]=v,b.addEventListener("dispose",m));const w=E.program;n.updateUBOMapping(b,w);const R=e.render.frame;s[b.id]!==R&&(p(b),s[b.id]=R)}function h(b){const E=u();b.__bindingPointIndex=E;const v=i.createBuffer(),w=b.__size,R=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,w,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,v),v}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(b){const E=r[b.id],v=b.uniforms,w=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let R=0,T=v.length;R<T;R++){const P=Array.isArray(v[R])?v[R]:[v[R]];for(let M=0,S=P.length;M<S;M++){const D=P[M];if(d(D,R,M,w)===!0){const O=D.__offset,A=Array.isArray(D.value)?D.value:[D.value];let N=0;for(let F=0;F<A.length;F++){const V=A[F],q=g(V);typeof V=="number"||typeof V=="boolean"?(D.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,O+N,D.__data)):V.isMatrix3?(D.__data[0]=V.elements[0],D.__data[1]=V.elements[1],D.__data[2]=V.elements[2],D.__data[3]=0,D.__data[4]=V.elements[3],D.__data[5]=V.elements[4],D.__data[6]=V.elements[5],D.__data[7]=0,D.__data[8]=V.elements[6],D.__data[9]=V.elements[7],D.__data[10]=V.elements[8],D.__data[11]=0):(V.toArray(D.__data,N),N+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(b,E,v,w){const R=b.value,T=E+"_"+v;if(w[T]===void 0)return typeof R=="number"||typeof R=="boolean"?w[T]=R:w[T]=R.clone(),!0;{const P=w[T];if(typeof R=="number"||typeof R=="boolean"){if(P!==R)return w[T]=R,!0}else if(P.equals(R)===!1)return P.copy(R),!0}return!1}function _(b){const E=b.uniforms;let v=0;const w=16;for(let T=0,P=E.length;T<P;T++){const M=Array.isArray(E[T])?E[T]:[E[T]];for(let S=0,D=M.length;S<D;S++){const O=M[S],A=Array.isArray(O.value)?O.value:[O.value];for(let N=0,F=A.length;N<F;N++){const V=A[N],q=g(V),G=v%w,ne=G%q.boundary,le=G+ne;v+=ne,le!==0&&w-le<q.storage&&(v+=w-le),O.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=v,v+=q.storage}}}const R=v%w;return R>0&&(v+=w-R),b.__size=v,b.__cache={},this}function g(b){const E={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(E.boundary=4,E.storage=4):b.isVector2?(E.boundary=8,E.storage=8):b.isVector3||b.isColor?(E.boundary=16,E.storage=12):b.isVector4?(E.boundary=16,E.storage=16):b.isMatrix3?(E.boundary=48,E.storage=48):b.isMatrix4?(E.boundary=64,E.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),E}function m(b){const E=b.target;E.removeEventListener("dispose",m);const v=o.indexOf(E.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function f(){for(const b in r)i.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}class qm{constructor(e={}){const{canvas:t=bh(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,f=null;const b=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let w=!1;this._outputColorSpace=Bt;let R=0,T=0,P=null,M=-1,S=null;const D=new mt,O=new mt;let A=null;const N=new $e(0);let F=0,V=t.width,q=t.height,G=1,ne=null,le=null;const K=new mt(0,0,V,q),we=new mt(0,0,V,q);let He=!1;const Xe=new Yo;let je=!1,j=!1;const J=new vt,he=new I,pe=new mt,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function Et(){return P===null?G:1}let L=n;function at(y,k){return t.getContext(y,k)}try{const y={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${No}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",ge,!1),t.addEventListener("webglcontextcreationerror",ee,!1),L===null){const k="webgl2";if(L=at(k,y),L===null)throw at(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Oe,Le,xe,lt,Me,Ve,At,gt,C,x,H,$,Q,Y,be,se,Se,ye,ie,de,Pe,Ee,ce,Be;function U(){Oe=new np(L),Oe.init(),Ee=new km(L,Oe),Le=new Kf(L,Oe,e,Ee),xe=new Fm(L,Oe),Le.reversedDepthBuffer&&p&&xe.buffers.depth.setReversed(!0),lt=new sp(L),Me=new Em,Ve=new Om(L,Oe,xe,Me,Le,Ee,lt),At=new Zf(v),gt=new tp(v),C=new hu(L),ce=new Yf(L,C),x=new ip(L,C,lt,ce),H=new ap(L,x,C,lt),ie=new op(L,Le,Ve),se=new $f(Me),$=new ym(v,At,gt,Oe,Le,ce,se),Q=new Wm(v,Me),Y=new Tm,be=new Lm(Oe),ye=new qf(v,At,gt,xe,H,d,l),Se=new Um(v,H,Le),Be=new Xm(L,lt,Le,xe),de=new jf(L,Oe,lt),Pe=new rp(L,Oe,lt),lt.programs=$.programs,v.capabilities=Le,v.extensions=Oe,v.properties=Me,v.renderLists=Y,v.shadowMap=Se,v.state=xe,v.info=lt}U();const re=new Gm(v,L);this.xr=re,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const y=Oe.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Oe.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(y){y!==void 0&&(G=y,this.setSize(V,q,!1))},this.getSize=function(y){return y.set(V,q)},this.setSize=function(y,k,W=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=y,q=k,t.width=Math.floor(y*G),t.height=Math.floor(k*G),W===!0&&(t.style.width=y+"px",t.style.height=k+"px"),this.setViewport(0,0,y,k)},this.getDrawingBufferSize=function(y){return y.set(V*G,q*G).floor()},this.setDrawingBufferSize=function(y,k,W){V=y,q=k,G=W,t.width=Math.floor(y*W),t.height=Math.floor(k*W),this.setViewport(0,0,y,k)},this.getCurrentViewport=function(y){return y.copy(D)},this.getViewport=function(y){return y.copy(K)},this.setViewport=function(y,k,W,X){y.isVector4?K.set(y.x,y.y,y.z,y.w):K.set(y,k,W,X),xe.viewport(D.copy(K).multiplyScalar(G).round())},this.getScissor=function(y){return y.copy(we)},this.setScissor=function(y,k,W,X){y.isVector4?we.set(y.x,y.y,y.z,y.w):we.set(y,k,W,X),xe.scissor(O.copy(we).multiplyScalar(G).round())},this.getScissorTest=function(){return He},this.setScissorTest=function(y){xe.setScissorTest(He=y)},this.setOpaqueSort=function(y){ne=y},this.setTransparentSort=function(y){le=y},this.getClearColor=function(y){return y.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor(...arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha(...arguments)},this.clear=function(y=!0,k=!0,W=!0){let X=0;if(y){let B=!1;if(P!==null){const te=P.texture.format;B=te===Go||te===Ho||te===zo}if(B){const te=P.texture.type,ue=te===bn||te===hi||te===sr||te===or||te===ko||te===Bo,_e=ye.getClearColor(),me=ye.getClearAlpha(),Re=_e.r,De=_e.g,Te=_e.b;ue?(_[0]=Re,_[1]=De,_[2]=Te,_[3]=me,L.clearBufferuiv(L.COLOR,0,_)):(g[0]=Re,g[1]=De,g[2]=Te,g[3]=me,L.clearBufferiv(L.COLOR,0,g))}else X|=L.COLOR_BUFFER_BIT}k&&(X|=L.DEPTH_BUFFER_BIT),W&&(X|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",ge,!1),t.removeEventListener("webglcontextcreationerror",ee,!1),ye.dispose(),Y.dispose(),be.dispose(),Me.dispose(),At.dispose(),gt.dispose(),H.dispose(),ce.dispose(),Be.dispose(),$.dispose(),re.dispose(),re.removeEventListener("sessionstart",_n),re.removeEventListener("sessionend",oa),jn.stop()};function oe(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const y=lt.autoReset,k=Se.enabled,W=Se.autoUpdate,X=Se.needsUpdate,B=Se.type;U(),lt.autoReset=y,Se.enabled=k,Se.autoUpdate=W,Se.needsUpdate=X,Se.type=B}function ee(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Z(y){const k=y.target;k.removeEventListener("dispose",Z),ve(k)}function ve(y){Ne(y),Me.remove(y)}function Ne(y){const k=Me.get(y).programs;k!==void 0&&(k.forEach(function(W){$.releaseProgram(W)}),y.isShaderMaterial&&$.releaseShaderCache(y))}this.renderBufferDirect=function(y,k,W,X,B,te){k===null&&(k=fe);const ue=B.isMesh&&B.matrixWorld.determinant()<0,_e=mc(y,k,W,X,B);xe.setMaterial(X,ue);let me=W.index,Re=1;if(X.wireframe===!0){if(me=x.getWireframeAttribute(W),me===void 0)return;Re=2}const De=W.drawRange,Te=W.attributes.position;let Ke=De.start*Re,tt=(De.start+De.count)*Re;te!==null&&(Ke=Math.max(Ke,te.start*Re),tt=Math.min(tt,(te.start+te.count)*Re)),me!==null?(Ke=Math.max(Ke,0),tt=Math.min(tt,me.count)):Te!=null&&(Ke=Math.max(Ke,0),tt=Math.min(tt,Te.count));const ft=tt-Ke;if(ft<0||ft===1/0)return;ce.setup(B,X,_e,W,me);let st,it=de;if(me!==null&&(st=C.get(me),it=Pe,it.setIndex(st)),B.isMesh)X.wireframe===!0?(xe.setLineWidth(X.wireframeLinewidth*Et()),it.setMode(L.LINES)):it.setMode(L.TRIANGLES);else if(B.isLine){let Ae=X.linewidth;Ae===void 0&&(Ae=1),xe.setLineWidth(Ae*Et()),B.isLineSegments?it.setMode(L.LINES):B.isLineLoop?it.setMode(L.LINE_LOOP):it.setMode(L.LINE_STRIP)}else B.isPoints?it.setMode(L.POINTS):B.isSprite&&it.setMode(L.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)hr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),it.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Oe.get("WEBGL_multi_draw"))it.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Ae=B._multiDrawStarts,ht=B._multiDrawCounts,Ze=B._multiDrawCount,Vt=me?C.get(me).bytesPerElement:1,pi=Me.get(X).currentProgram.getUniforms();for(let Wt=0;Wt<Ze;Wt++)pi.setValue(L,"_gl_DrawID",Wt),it.render(Ae[Wt]/Vt,ht[Wt])}else if(B.isInstancedMesh)it.renderInstances(Ke,ft,B.count);else if(W.isInstancedBufferGeometry){const Ae=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,ht=Math.min(W.instanceCount,Ae);it.renderInstances(Ke,ft,ht)}else it.render(Ke,ft)};function rt(y,k,W){y.transparent===!0&&y.side===Yt&&y.forceSinglePass===!1?(y.side=Ht,y.needsUpdate=!0,vr(y,k,W),y.side=qn,y.needsUpdate=!0,vr(y,k,W),y.side=Yt):vr(y,k,W)}this.compile=function(y,k,W=null){W===null&&(W=y),f=be.get(W),f.init(k),E.push(f),W.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),y!==W&&y.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),f.setupLights();const X=new Set;return y.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const te=B.material;if(te)if(Array.isArray(te))for(let ue=0;ue<te.length;ue++){const _e=te[ue];rt(_e,W,B),X.add(_e)}else rt(te,W,B),X.add(te)}),f=E.pop(),X},this.compileAsync=function(y,k,W=null){const X=this.compile(y,k,W);return new Promise(B=>{function te(){if(X.forEach(function(ue){Me.get(ue).currentProgram.isReady()&&X.delete(ue)}),X.size===0){B(y);return}setTimeout(te,10)}Oe.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let et=null;function Tn(y){et&&et(y)}function _n(){jn.stop()}function oa(){jn.start()}const jn=new zl;jn.setAnimationLoop(Tn),typeof self<"u"&&jn.setContext(self),this.setAnimationLoop=function(y){et=y,re.setAnimationLoop(y),y===null?jn.stop():jn.start()},re.addEventListener("sessionstart",_n),re.addEventListener("sessionend",oa),this.render=function(y,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(k),k=re.getCamera()),y.isScene===!0&&y.onBeforeRender(v,y,k,P),f=be.get(y,E.length),f.init(k),E.push(f),J.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Xe.setFromProjectionMatrix(J,Sn,k.reversedDepth),j=this.localClippingEnabled,je=se.init(this.clippingPlanes,j),m=Y.get(y,b.length),m.init(),b.push(m),re.enabled===!0&&re.isPresenting===!0){const te=v.xr.getDepthSensingMesh();te!==null&&rs(te,k,-1/0,v.sortObjects)}rs(y,k,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ne,le),Ge=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,Ge&&ye.addToRenderList(m,y),this.info.render.frame++,je===!0&&se.beginShadows();const W=f.state.shadowsArray;Se.render(W,y,k),je===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,B=m.transmissive;if(f.setupLights(),k.isArrayCamera){const te=k.cameras;if(B.length>0)for(let ue=0,_e=te.length;ue<_e;ue++){const me=te[ue];la(X,B,y,me)}Ge&&ye.render(y);for(let ue=0,_e=te.length;ue<_e;ue++){const me=te[ue];aa(m,y,me,me.viewport)}}else B.length>0&&la(X,B,y,k),Ge&&ye.render(y),aa(m,y,k);P!==null&&T===0&&(Ve.updateMultisampleRenderTarget(P),Ve.updateRenderTargetMipmap(P)),y.isScene===!0&&y.onAfterRender(v,y,k),ce.resetDefaultState(),M=-1,S=null,E.pop(),E.length>0?(f=E[E.length-1],je===!0&&se.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function rs(y,k,W,X){if(y.visible===!1)return;if(y.layers.test(k.layers)){if(y.isGroup)W=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(k);else if(y.isLight)f.pushLight(y),y.castShadow&&f.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Xe.intersectsSprite(y)){X&&pe.setFromMatrixPosition(y.matrixWorld).applyMatrix4(J);const ue=H.update(y),_e=y.material;_e.visible&&m.push(y,ue,_e,W,pe.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Xe.intersectsObject(y))){const ue=H.update(y),_e=y.material;if(X&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),pe.copy(y.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),pe.copy(ue.boundingSphere.center)),pe.applyMatrix4(y.matrixWorld).applyMatrix4(J)),Array.isArray(_e)){const me=ue.groups;for(let Re=0,De=me.length;Re<De;Re++){const Te=me[Re],Ke=_e[Te.materialIndex];Ke&&Ke.visible&&m.push(y,ue,Ke,W,pe.z,Te)}}else _e.visible&&m.push(y,ue,_e,W,pe.z,null)}}const te=y.children;for(let ue=0,_e=te.length;ue<_e;ue++)rs(te[ue],k,W,X)}function aa(y,k,W,X){const B=y.opaque,te=y.transmissive,ue=y.transparent;f.setupLightsView(W),je===!0&&se.setGlobalState(v.clippingPlanes,W),X&&xe.viewport(D.copy(X)),B.length>0&&_r(B,k,W),te.length>0&&_r(te,k,W),ue.length>0&&_r(ue,k,W),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function la(y,k,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[X.id]===void 0&&(f.state.transmissionRenderTarget[X.id]=new ui(1,1,{generateMipmaps:!0,type:Oe.has("EXT_color_buffer_half_float")||Oe.has("EXT_color_buffer_float")?fr:bn,minFilter:li,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const te=f.state.transmissionRenderTarget[X.id],ue=X.viewport||D;te.setSize(ue.z*v.transmissionResolutionScale,ue.w*v.transmissionResolutionScale);const _e=v.getRenderTarget(),me=v.getActiveCubeFace(),Re=v.getActiveMipmapLevel();v.setRenderTarget(te),v.getClearColor(N),F=v.getClearAlpha(),F<1&&v.setClearColor(16777215,.5),v.clear(),Ge&&ye.render(W);const De=v.toneMapping;v.toneMapping=Xn;const Te=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),f.setupLightsView(X),je===!0&&se.setGlobalState(v.clippingPlanes,X),_r(y,W,X),Ve.updateMultisampleRenderTarget(te),Ve.updateRenderTargetMipmap(te),Oe.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let tt=0,ft=k.length;tt<ft;tt++){const st=k[tt],it=st.object,Ae=st.geometry,ht=st.material,Ze=st.group;if(ht.side===Yt&&it.layers.test(X.layers)){const Vt=ht.side;ht.side=Ht,ht.needsUpdate=!0,ca(it,W,X,Ae,ht,Ze),ht.side=Vt,ht.needsUpdate=!0,Ke=!0}}Ke===!0&&(Ve.updateMultisampleRenderTarget(te),Ve.updateRenderTargetMipmap(te))}v.setRenderTarget(_e,me,Re),v.setClearColor(N,F),Te!==void 0&&(X.viewport=Te),v.toneMapping=De}function _r(y,k,W){const X=k.isScene===!0?k.overrideMaterial:null;for(let B=0,te=y.length;B<te;B++){const ue=y[B],_e=ue.object,me=ue.geometry,Re=ue.group;let De=ue.material;De.allowOverride===!0&&X!==null&&(De=X),_e.layers.test(W.layers)&&ca(_e,k,W,me,De,Re)}}function ca(y,k,W,X,B,te){y.onBeforeRender(v,k,W,X,B,te),y.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),B.onBeforeRender(v,k,W,X,y,te),B.transparent===!0&&B.side===Yt&&B.forceSinglePass===!1?(B.side=Ht,B.needsUpdate=!0,v.renderBufferDirect(W,k,X,B,y,te),B.side=qn,B.needsUpdate=!0,v.renderBufferDirect(W,k,X,B,y,te),B.side=Yt):v.renderBufferDirect(W,k,X,B,y,te),y.onAfterRender(v,k,W,X,B,te)}function vr(y,k,W){k.isScene!==!0&&(k=fe);const X=Me.get(y),B=f.state.lights,te=f.state.shadowsArray,ue=B.state.version,_e=$.getParameters(y,B.state,te,k,W),me=$.getProgramCacheKey(_e);let Re=X.programs;X.environment=y.isMeshStandardMaterial?k.environment:null,X.fog=k.fog,X.envMap=(y.isMeshStandardMaterial?gt:At).get(y.envMap||X.environment),X.envMapRotation=X.environment!==null&&y.envMap===null?k.environmentRotation:y.envMapRotation,Re===void 0&&(y.addEventListener("dispose",Z),Re=new Map,X.programs=Re);let De=Re.get(me);if(De!==void 0){if(X.currentProgram===De&&X.lightsStateVersion===ue)return ua(y,_e),De}else _e.uniforms=$.getUniforms(y),y.onBeforeCompile(_e,v),De=$.acquireProgram(_e,me),Re.set(me,De),X.uniforms=_e.uniforms;const Te=X.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Te.clippingPlanes=se.uniform),ua(y,_e),X.needsLights=_c(y),X.lightsStateVersion=ue,X.needsLights&&(Te.ambientLightColor.value=B.state.ambient,Te.lightProbe.value=B.state.probe,Te.directionalLights.value=B.state.directional,Te.directionalLightShadows.value=B.state.directionalShadow,Te.spotLights.value=B.state.spot,Te.spotLightShadows.value=B.state.spotShadow,Te.rectAreaLights.value=B.state.rectArea,Te.ltc_1.value=B.state.rectAreaLTC1,Te.ltc_2.value=B.state.rectAreaLTC2,Te.pointLights.value=B.state.point,Te.pointLightShadows.value=B.state.pointShadow,Te.hemisphereLights.value=B.state.hemi,Te.directionalShadowMap.value=B.state.directionalShadowMap,Te.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Te.spotShadowMap.value=B.state.spotShadowMap,Te.spotLightMatrix.value=B.state.spotLightMatrix,Te.spotLightMap.value=B.state.spotLightMap,Te.pointShadowMap.value=B.state.pointShadowMap,Te.pointShadowMatrix.value=B.state.pointShadowMatrix),X.currentProgram=De,X.uniformsList=null,De}function ha(y){if(y.uniformsList===null){const k=y.currentProgram.getUniforms();y.uniformsList=Xr.seqWithValue(k.seq,y.uniforms)}return y.uniformsList}function ua(y,k){const W=Me.get(y);W.outputColorSpace=k.outputColorSpace,W.batching=k.batching,W.batchingColor=k.batchingColor,W.instancing=k.instancing,W.instancingColor=k.instancingColor,W.instancingMorph=k.instancingMorph,W.skinning=k.skinning,W.morphTargets=k.morphTargets,W.morphNormals=k.morphNormals,W.morphColors=k.morphColors,W.morphTargetsCount=k.morphTargetsCount,W.numClippingPlanes=k.numClippingPlanes,W.numIntersection=k.numClipIntersection,W.vertexAlphas=k.vertexAlphas,W.vertexTangents=k.vertexTangents,W.toneMapping=k.toneMapping}function mc(y,k,W,X,B){k.isScene!==!0&&(k=fe),Ve.resetTextureUnits();const te=k.fog,ue=X.isMeshStandardMaterial?k.environment:null,_e=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Bi,me=(X.isMeshStandardMaterial?gt:At).get(X.envMap||ue),Re=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,De=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Te=!!W.morphAttributes.position,Ke=!!W.morphAttributes.normal,tt=!!W.morphAttributes.color;let ft=Xn;X.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ft=v.toneMapping);const st=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,it=st!==void 0?st.length:0,Ae=Me.get(X),ht=f.state.lights;if(je===!0&&(j===!0||y!==S)){const It=y===S&&X.id===M;se.setState(X,y,It)}let Ze=!1;X.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==ht.state.version||Ae.outputColorSpace!==_e||B.isBatchedMesh&&Ae.batching===!1||!B.isBatchedMesh&&Ae.batching===!0||B.isBatchedMesh&&Ae.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ae.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ae.instancing===!1||!B.isInstancedMesh&&Ae.instancing===!0||B.isSkinnedMesh&&Ae.skinning===!1||!B.isSkinnedMesh&&Ae.skinning===!0||B.isInstancedMesh&&Ae.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ae.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ae.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ae.instancingMorph===!1&&B.morphTexture!==null||Ae.envMap!==me||X.fog===!0&&Ae.fog!==te||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==se.numPlanes||Ae.numIntersection!==se.numIntersection)||Ae.vertexAlphas!==Re||Ae.vertexTangents!==De||Ae.morphTargets!==Te||Ae.morphNormals!==Ke||Ae.morphColors!==tt||Ae.toneMapping!==ft||Ae.morphTargetsCount!==it)&&(Ze=!0):(Ze=!0,Ae.__version=X.version);let Vt=Ae.currentProgram;Ze===!0&&(Vt=vr(X,k,B));let pi=!1,Wt=!1,Ki=!1;const ut=Vt.getUniforms(),$t=Ae.uniforms;if(xe.useProgram(Vt.program)&&(pi=!0,Wt=!0,Ki=!0),X.id!==M&&(M=X.id,Wt=!0),pi||S!==y){xe.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),ut.setValue(L,"projectionMatrix",y.projectionMatrix),ut.setValue(L,"viewMatrix",y.matrixWorldInverse);const kt=ut.map.cameraPosition;kt!==void 0&&kt.setValue(L,he.setFromMatrixPosition(y.matrixWorld)),Le.logarithmicDepthBuffer&&ut.setValue(L,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&ut.setValue(L,"isOrthographic",y.isOrthographicCamera===!0),S!==y&&(S=y,Wt=!0,Ki=!0)}if(B.isSkinnedMesh){ut.setOptional(L,B,"bindMatrix"),ut.setOptional(L,B,"bindMatrixInverse");const It=B.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),ut.setValue(L,"boneTexture",It.boneTexture,Ve))}B.isBatchedMesh&&(ut.setOptional(L,B,"batchingTexture"),ut.setValue(L,"batchingTexture",B._matricesTexture,Ve),ut.setOptional(L,B,"batchingIdTexture"),ut.setValue(L,"batchingIdTexture",B._indirectTexture,Ve),ut.setOptional(L,B,"batchingColorTexture"),B._colorsTexture!==null&&ut.setValue(L,"batchingColorTexture",B._colorsTexture,Ve));const Zt=W.morphAttributes;if((Zt.position!==void 0||Zt.normal!==void 0||Zt.color!==void 0)&&ie.update(B,W,Vt),(Wt||Ae.receiveShadow!==B.receiveShadow)&&(Ae.receiveShadow=B.receiveShadow,ut.setValue(L,"receiveShadow",B.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&($t.envMap.value=me,$t.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&k.environment!==null&&($t.envMapIntensity.value=k.environmentIntensity),Wt&&(ut.setValue(L,"toneMappingExposure",v.toneMappingExposure),Ae.needsLights&&gc($t,Ki),te&&X.fog===!0&&Q.refreshFogUniforms($t,te),Q.refreshMaterialUniforms($t,X,G,q,f.state.transmissionRenderTarget[y.id]),Xr.upload(L,ha(Ae),$t,Ve)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Xr.upload(L,ha(Ae),$t,Ve),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&ut.setValue(L,"center",B.center),ut.setValue(L,"modelViewMatrix",B.modelViewMatrix),ut.setValue(L,"normalMatrix",B.normalMatrix),ut.setValue(L,"modelMatrix",B.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const It=X.uniformsGroups;for(let kt=0,ss=It.length;kt<ss;kt++){const Kn=It[kt];Be.update(Kn,Vt),Be.bind(Kn,Vt)}}return Vt}function gc(y,k){y.ambientLightColor.needsUpdate=k,y.lightProbe.needsUpdate=k,y.directionalLights.needsUpdate=k,y.directionalLightShadows.needsUpdate=k,y.pointLights.needsUpdate=k,y.pointLightShadows.needsUpdate=k,y.spotLights.needsUpdate=k,y.spotLightShadows.needsUpdate=k,y.rectAreaLights.needsUpdate=k,y.hemisphereLights.needsUpdate=k}function _c(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(y,k,W){const X=Me.get(y);X.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),Me.get(y.texture).__webglTexture=k,Me.get(y.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:W,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,k){const W=Me.get(y);W.__webglFramebuffer=k,W.__useDefaultFramebuffer=k===void 0};const vc=L.createFramebuffer();this.setRenderTarget=function(y,k=0,W=0){P=y,R=k,T=W;let X=!0,B=null,te=!1,ue=!1;if(y){const me=Me.get(y);if(me.__useDefaultFramebuffer!==void 0)xe.bindFramebuffer(L.FRAMEBUFFER,null),X=!1;else if(me.__webglFramebuffer===void 0)Ve.setupRenderTarget(y);else if(me.__hasExternalTextures)Ve.rebindTextures(y,Me.get(y.texture).__webglTexture,Me.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Te=y.depthTexture;if(me.__boundDepthTexture!==Te){if(Te!==null&&Me.has(Te)&&(y.width!==Te.image.width||y.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ve.setupDepthRenderbuffer(y)}}const Re=y.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(ue=!0);const De=Me.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(De[k])?B=De[k][W]:B=De[k],te=!0):y.samples>0&&Ve.useMultisampledRTT(y)===!1?B=Me.get(y).__webglMultisampledFramebuffer:Array.isArray(De)?B=De[W]:B=De,D.copy(y.viewport),O.copy(y.scissor),A=y.scissorTest}else D.copy(K).multiplyScalar(G).floor(),O.copy(we).multiplyScalar(G).floor(),A=He;if(W!==0&&(B=vc),xe.bindFramebuffer(L.FRAMEBUFFER,B)&&X&&xe.drawBuffers(y,B),xe.viewport(D),xe.scissor(O),xe.setScissorTest(A),te){const me=Me.get(y.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+k,me.__webglTexture,W)}else if(ue){const me=k;for(let Re=0;Re<y.textures.length;Re++){const De=Me.get(y.textures[Re]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Re,De.__webglTexture,W,me)}}else if(y!==null&&W!==0){const me=Me.get(y.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,me.__webglTexture,W)}M=-1},this.readRenderTargetPixels=function(y,k,W,X,B,te,ue,_e=0){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=Me.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ue!==void 0&&(me=me[ue]),me){xe.bindFramebuffer(L.FRAMEBUFFER,me);try{const Re=y.textures[_e],De=Re.format,Te=Re.type;if(!Le.textureFormatReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Le.textureTypeReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=y.width-X&&W>=0&&W<=y.height-B&&(y.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+_e),L.readPixels(k,W,X,B,Ee.convert(De),Ee.convert(Te),te))}finally{const Re=P!==null?Me.get(P).__webglFramebuffer:null;xe.bindFramebuffer(L.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(y,k,W,X,B,te,ue,_e=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=Me.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ue!==void 0&&(me=me[ue]),me)if(k>=0&&k<=y.width-X&&W>=0&&W<=y.height-B){xe.bindFramebuffer(L.FRAMEBUFFER,me);const Re=y.textures[_e],De=Re.format,Te=Re.type;if(!Le.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Le.textureTypeReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ke=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ke),L.bufferData(L.PIXEL_PACK_BUFFER,te.byteLength,L.STREAM_READ),y.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+_e),L.readPixels(k,W,X,B,Ee.convert(De),Ee.convert(Te),0);const tt=P!==null?Me.get(P).__webglFramebuffer:null;xe.bindFramebuffer(L.FRAMEBUFFER,tt);const ft=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Th(L,ft,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ke),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,te),L.deleteBuffer(Ke),L.deleteSync(ft),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,k=null,W=0){const X=Math.pow(2,-W),B=Math.floor(y.image.width*X),te=Math.floor(y.image.height*X),ue=k!==null?k.x:0,_e=k!==null?k.y:0;Ve.setTexture2D(y,0),L.copyTexSubImage2D(L.TEXTURE_2D,W,0,0,ue,_e,B,te),xe.unbindTexture()};const xc=L.createFramebuffer(),Mc=L.createFramebuffer();this.copyTextureToTexture=function(y,k,W=null,X=null,B=0,te=null){te===null&&(B!==0?(hr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),te=B,B=0):te=0);let ue,_e,me,Re,De,Te,Ke,tt,ft;const st=y.isCompressedTexture?y.mipmaps[te]:y.image;if(W!==null)ue=W.max.x-W.min.x,_e=W.max.y-W.min.y,me=W.isBox3?W.max.z-W.min.z:1,Re=W.min.x,De=W.min.y,Te=W.isBox3?W.min.z:0;else{const Zt=Math.pow(2,-B);ue=Math.floor(st.width*Zt),_e=Math.floor(st.height*Zt),y.isDataArrayTexture?me=st.depth:y.isData3DTexture?me=Math.floor(st.depth*Zt):me=1,Re=0,De=0,Te=0}X!==null?(Ke=X.x,tt=X.y,ft=X.z):(Ke=0,tt=0,ft=0);const it=Ee.convert(k.format),Ae=Ee.convert(k.type);let ht;k.isData3DTexture?(Ve.setTexture3D(k,0),ht=L.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(Ve.setTexture2DArray(k,0),ht=L.TEXTURE_2D_ARRAY):(Ve.setTexture2D(k,0),ht=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,k.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,k.unpackAlignment);const Ze=L.getParameter(L.UNPACK_ROW_LENGTH),Vt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),pi=L.getParameter(L.UNPACK_SKIP_PIXELS),Wt=L.getParameter(L.UNPACK_SKIP_ROWS),Ki=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,st.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,st.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Re),L.pixelStorei(L.UNPACK_SKIP_ROWS,De),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Te);const ut=y.isDataArrayTexture||y.isData3DTexture,$t=k.isDataArrayTexture||k.isData3DTexture;if(y.isDepthTexture){const Zt=Me.get(y),It=Me.get(k),kt=Me.get(Zt.__renderTarget),ss=Me.get(It.__renderTarget);xe.bindFramebuffer(L.READ_FRAMEBUFFER,kt.__webglFramebuffer),xe.bindFramebuffer(L.DRAW_FRAMEBUFFER,ss.__webglFramebuffer);for(let Kn=0;Kn<me;Kn++)ut&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Me.get(y).__webglTexture,B,Te+Kn),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Me.get(k).__webglTexture,te,ft+Kn)),L.blitFramebuffer(Re,De,ue,_e,Ke,tt,ue,_e,L.DEPTH_BUFFER_BIT,L.NEAREST);xe.bindFramebuffer(L.READ_FRAMEBUFFER,null),xe.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(B!==0||y.isRenderTargetTexture||Me.has(y)){const Zt=Me.get(y),It=Me.get(k);xe.bindFramebuffer(L.READ_FRAMEBUFFER,xc),xe.bindFramebuffer(L.DRAW_FRAMEBUFFER,Mc);for(let kt=0;kt<me;kt++)ut?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Zt.__webglTexture,B,Te+kt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Zt.__webglTexture,B),$t?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,It.__webglTexture,te,ft+kt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,It.__webglTexture,te),B!==0?L.blitFramebuffer(Re,De,ue,_e,Ke,tt,ue,_e,L.COLOR_BUFFER_BIT,L.NEAREST):$t?L.copyTexSubImage3D(ht,te,Ke,tt,ft+kt,Re,De,ue,_e):L.copyTexSubImage2D(ht,te,Ke,tt,Re,De,ue,_e);xe.bindFramebuffer(L.READ_FRAMEBUFFER,null),xe.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else $t?y.isDataTexture||y.isData3DTexture?L.texSubImage3D(ht,te,Ke,tt,ft,ue,_e,me,it,Ae,st.data):k.isCompressedArrayTexture?L.compressedTexSubImage3D(ht,te,Ke,tt,ft,ue,_e,me,it,st.data):L.texSubImage3D(ht,te,Ke,tt,ft,ue,_e,me,it,Ae,st):y.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,te,Ke,tt,ue,_e,it,Ae,st.data):y.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,te,Ke,tt,st.width,st.height,it,st.data):L.texSubImage2D(L.TEXTURE_2D,te,Ke,tt,ue,_e,it,Ae,st);L.pixelStorei(L.UNPACK_ROW_LENGTH,Ze),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Vt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,pi),L.pixelStorei(L.UNPACK_SKIP_ROWS,Wt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ki),te===0&&k.generateMipmaps&&L.generateMipmap(ht),xe.unbindTexture()},this.initRenderTarget=function(y){Me.get(y).__webglFramebuffer===void 0&&Ve.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Ve.setTextureCube(y,0):y.isData3DTexture?Ve.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Ve.setTexture2DArray(y,0):Ve.setTexture2D(y,0),xe.unbindTexture()},this.resetState=function(){R=0,T=0,P=null,xe.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}const er=new I;function Qt(i,e,t,n,r,s){const o=2*Math.PI*r/4,a=Math.max(s-2*r,0),l=Math.PI/4;er.copy(e),er[n]=0,er.normalize();const c=.5*o/(o+a),h=1-er.angleTo(i)/l;return Math.sign(er[t])===1?h*c:a/(o+a)+c+c*(1-h)}class ts extends fi{constructor(e=1,t=1,n=1,r=2,s=.1){const o=r*2+1;if(s=Math.min(e/2,t/2,n/2,s),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:r,radius:s},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const l=new I,c=new I,h=new I(e,t,n).divideScalar(2).subScalar(s),u=this.attributes.position.array,p=this.attributes.normal.array,d=this.attributes.uv.array,_=u.length/6,g=new I,m=.5/o;for(let f=0,b=0;f<u.length;f+=3,b+=2)switch(l.fromArray(u,f),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),u[f+0]=h.x*Math.sign(l.x)+c.x*s,u[f+1]=h.y*Math.sign(l.y)+c.y*s,u[f+2]=h.z*Math.sign(l.z)+c.z*s,p[f+0]=c.x,p[f+1]=c.y,p[f+2]=c.z,Math.floor(f/_)){case 0:g.set(1,0,0),d[b+0]=Qt(g,c,"z","y",s,n),d[b+1]=1-Qt(g,c,"y","z",s,t);break;case 1:g.set(-1,0,0),d[b+0]=1-Qt(g,c,"z","y",s,n),d[b+1]=1-Qt(g,c,"y","z",s,t);break;case 2:g.set(0,1,0),d[b+0]=1-Qt(g,c,"x","z",s,e),d[b+1]=Qt(g,c,"z","x",s,n);break;case 3:g.set(0,-1,0),d[b+0]=1-Qt(g,c,"x","z",s,e),d[b+1]=1-Qt(g,c,"z","x",s,n);break;case 4:g.set(0,0,1),d[b+0]=1-Qt(g,c,"x","y",s,e),d[b+1]=1-Qt(g,c,"y","x",s,t);break;case 5:g.set(0,0,-1),d[b+0]=Qt(g,c,"x","y",s,e),d[b+1]=1-Qt(g,c,"y","x",s,t);break}}static fromJSON(e){return new ts(e.width,e.height,e.depth,e.segments,e.radius)}}const Ym=(i,e)=>Math.atan2(Math.sin(e-i),Math.cos(e-i)),jm=(i,e)=>Math.atan2(e[0]-i[0],e[1]-i[1]),ln=(i,e)=>i.robots[e];function Ni([i,e],t){return t===void 0?[i,e-.91]:t===2?[i,e+1]:[i+1.05,e]}class Xl{constructor(e){this.ep=e;for(const t of Object.keys(e.layout.starts))this.tracks.set(t,[])}ep;tracks=new Map;length=0;eventIndex=-1;parkingPoint(e,t,n){const r=this.ep.frames[t],s=ln(r,e);if(e!=="Patch"||!n)return s;const o=ln(r,"Jack"),a=s[0]-o[0],l=s[1]-o[1];if(Math.abs(a)+Math.abs(l)!==1)return s;if(r.fork_online===!1)return[s[0]+.16*a,s[1]+.16*l];const c=ln(this.ep.frames[t-1],e);return c[0]===s[0]&&c[1]===s[1]?[n.x,n.z]:s}duringHandling(e,t,n,r,s){const o=this.ep.layout,a=ln(t,e),l=h=>jm(a,h),c=t.motion;if(n){if(r==="repair"){if(e==="Jack")return l(ln(t,s))-.65;if(e===s)return l(ln(t,"Jack"))}return e!==s?void 0:r==="collect"?l([n.shelf[0],n.row-1.04]):r==="stage"?l(ln(t,n.courier)):r==="manifest"?l(Ni(n.desk,n.row)):r==="load"?t.cargoByBag?.[n.id].holder===e||a[0]>n.unload[0]+1?Math.PI/2:l(ln(t,n.courier)):void 0}if(!(!c||c.kind==="move")){if(c.kind==="repair"&&e===c.to)return l(ln(t,c.actor))-.65;if(e===c.actor){if(c.kind==="pick")return l([o.shelf[0],0]);if(c.kind==="place")return l([o.socket[0],o.socket[1]-.8]);if(c.kind==="scan"&&o.desk)return l(Ni(o.desk));if(c.kind==="transfer"||c.kind==="repair"){const h=ln(t,c.from===e?c.to:c.from);if(c.kind==="repair")return l(ln(t,c.to));if(h)return l(h)}}}}extend(){const{frames:e,events:t,layout:n}=this.ep;for(;this.length<e.length;this.length++){const r=this.length,s=e[r];for(;this.eventIndex+1<t.length&&t[this.eventIndex+1].tick<=(r===0?0:r-1);)this.eventIndex++;const o=n.yard?t[this.eventIndex]?.planGraph?.nodes.filter(a=>a.state==="running")??[]:[];for(const[a,l]of this.tracks){const c=l[r-1],[h,u]=this.parkingPoint(a,r,c);if(!c){l.push({x:h,z:u,yaw:.22,distance:0});continue}const p=h-c.x,d=u-c.z,_=Math.hypot(p,d),g=o.find(v=>v.actor===a||a==="Jack"&&v.op.endsWith("/repair")),[m,f]=g?.op.split("/")??[],b=n.yard?.orders.find(v=>v.id===m),E=_?Math.atan2(p,d):this.duringHandling(a,s,b,f,g?.actor??"");l.push({x:h,z:u,distance:c.distance+_,yaw:c.yaw+(E===void 0?0:Ym(c.yaw,E))})}}}sample(e,t){this.extend();const n=this.tracks.get(e),r=Math.min(Math.floor(t),n.length-1),s=n[r],o=n[r+1]??s,a=Math.min(1,t-r),l=o.yaw-s.yaw,c=o.distance>s.distance,h=c?Math.min(.42,Math.abs(l)*.16):0,u=yt.clamp((a-h)/(1-h),0,1),p=n[r-1],d=n[r+2],_=(E,v)=>v.x-E.x===o.x-s.x&&v.z-E.z===o.z-s.z,g=c&&h<.01&&p&&_(p,s)?1:0,m=c&&d&&_(o,d)?1:0,f=u*u*(3-2*u)+g*u*(1-u)*(1-u)-m*u*u*(1-u),b=s.yaw+l*yt.smoothstep(a,0,h||.72);return{x:yt.lerp(s.x,o.x,f),z:yt.lerp(s.z,o.z,f),yaw:b,distance:yt.lerp(s.distance,o.distance,f)}}}function Km(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},o={},a=i[0].morphTargetsRelative,l=new Gt;let c=0;for(let h=0;h<i.length;++h){const u=i[h];let p=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(u.attributes[d]),p++}if(p!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!r.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(t){let h=0;const u=[];for(let p=0;p<i.length;++p){const d=i[p].index;for(let _=0;_<d.count;++_)u.push(d.getX(_)+h);h+=i[p].attributes.position.count}l.setIndex(u)}for(const h in s){const u=ul(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let p=0;p<u;++p){const d=[];for(let g=0;g<o[h].length;++g)d.push(o[h][g][p]);const _=ul(d);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(_)}}return l}function ul(i){let e,t,n,r=-1,s=0;for(let c=0;c<i.length;++c){const h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=h.gpuType),r!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*t}const o=new e(s),a=new rn(o,t,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const u=l/t;for(let p=0,d=h.count;p<d;p++)for(let _=0;_<t;_++){const g=h.getComponent(p,_);a.setComponent(p+u,_,g)}}else o.set(h.array,l);l+=h.count*t}return r!==void 0&&(a.gpuType=r),a}function pn(i,e=[]){const t=i.children.filter(a=>a instanceof Ct&&a.visible&&!a.children.length&&!e.includes(a)&&a.material instanceof kl&&!a.material.map&&!a.material.vertexColors&&a.material.emissive.getHex()===0);if(t.length<2)return;const n=t.map(a=>{const l=a.geometry.index?a.geometry.toNonIndexed():a.geometry.clone();a.updateMatrix(),l.applyMatrix4(a.matrix);for(const h of Object.keys(l.attributes))h!=="position"&&h!=="normal"&&l.deleteAttribute(h);const c=new Float32Array(l.getAttribute("position").count*3);for(let h=0;h<c.length;h+=3)a.material.color.toArray(c,h);return l.setAttribute("color",new rn(c,3)),l}),r=Km(n),s=new nu({vertexColors:!0}),o=new Ct(r,s);o.castShadow=!0,o.receiveShadow=!0,i.add(o);for(const a of t)i.remove(a),a.geometry.dispose(),a.material.dispose();for(const a of n)a.dispose()}function Dn(i){i.traverse(e=>{e.castShadow=!1})}function Jo(i,e,t,n=.016){const r=[0,n,0],s=[.06,.09,.08,.4],o=[],a=24;for(const[h,u]of[[.64,.29],[1,0]])for(let p=0;p<a;p++){const d=2*Math.PI*p/a;r.push(e*h*Math.sin(d),n,t*h*Math.cos(d)),s.push(.06,.09,.08,u)}for(let h=0;h<a;h++){const u=1+h,p=1+(h+1)%a;o.push(0,u,p,u,u+a,p+a,u,p+a,p)}const l=new Gt;l.setAttribute("position",new ct(r,3)),l.setAttribute("color",new ct(s,4)),l.setIndex(o);const c=new Ct(l,new qi({vertexColors:!0,transparent:!0,depthWrite:!1,side:Yt,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-1,forceSinglePass:!0}));i.add(c)}function ql(i,e){return Math.min(Math.max(1.65,window.devicePixelRatio||1),3,Math.sqrt(83e5/(i*e)))}function Yl(i,e){new ResizeObserver(e).observe(i);function t(){window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`).addEventListener("change",()=>{e(),t()},{once:!0})}t()}const ke=12621654,qe=4216916,ci=1584690,bt=15785648,Po={Wick:15966276,Skim:7522726,Jack:6332112,Patch:6928305},$m=new I(0,1,0),Ue=(i,e=0,t=1)=>yt.smoothstep(i,e,t);function pt(i,e,t,n,r,s,o=!1){const a=new kl({color:t,roughness:.62,metalness:.16,emissive:o?t:0,emissiveIntensity:o?.6:0}),l=new Ct(e,a);return l.position.set(n,r,s),l.castShadow=!0,l.receiveShadow=!0,i.add(l),l}function z(i,e,t,n,r,s,o,a,l=0){return pt(i,l&&(l>=.016||Math.min(e,t,n)>.065)?new ts(e,t,n,l<.055?1:2,Math.min(l,t/2,e/2,n/2)):new fi(e,t,n),r,s,o,a)}function dt(i,e,t,n,r,s,o){return pt(i,new di(e,e,t,24),n,r,s,o)}function jl(i,e,t,n,r,s){z(i,n,r,s,12423774,e,r/2,t,.035);for(const h of[-1,1]){const u=t+h*s/2;for(const d of[-.32,.32])z(i,.055,r*.97,.019,6452075,e+d*n,r/2,u);for(const d of[.11,.87])z(i,n-.012,r*.12,.028,14728067,e,d*r,u);const p=z(i,n*.81,r*.076,.016,14728067,e,r/2,u);p.rotation.z=h*Math.atan2(r*.59,n*.79)}for(const h of[-.32,.32])z(i,.056,.016,s,6452075,e+h*n,r+.003,t);const c=z(i,.125,.105,.016,bt,e+.09,r*.63,t+s/2+.018,.006);c.rotation.z=-.1}function vn(i,e,t,n,r,s,o,a="#244841",l="#ffe8aa"){const c=document.createElement("canvas");c.width=768,c.height=Math.round(768*n/t);const h=c.getContext("2d");h.fillStyle=a,h.fillRect(0,0,c.width,c.height),h.strokeStyle=l,h.lineWidth=3,h.strokeRect(6,6,c.width-12,c.height-12),h.fillStyle=l,h.textAlign="center",h.textBaseline="middle",h.font="bold "+Math.round(Math.min(c.height*.61,c.width/(e.length*.65)))+"px sans-serif",h.fillText(e,c.width/2,c.height*.53);const u=new tu(c);u.colorSpace=Bt;const p=new Ct(new gr(t,n),new qi({map:u,side:Yt}));return p.position.set(r,s,o),i.add(p),p}class dl{constructor(e,t,n){this.body=e,this.shoulder=t?new I(.36,.5,.12):new I(.34,.71,.03),this.upper=t?.63:.91,this.lower=t?.61:.84;const r=new ot;e.add(r);const s=t?Po.Patch:Po.Wick;for(const[o,a]of[this.upper,this.lower].entries()){const l=new ot;z(l,o?.095:.14,a,.14,o?bt:s,0,0,0,.045),z(l,.042,a*.65,.043,ke,.074,0,0,.012),pn(l),r.add(l),this.links.push(l)}for(let o=0;o<3;o++){const a=pt(r,new zt(o===2?.079:.115,18,12),o===1?ke:qe,0,0,0);if(o<2){const l=dt(a,o===0?.061:.071,.032,ke,o===0?.095:.102,0,0);l.rotation.z=Math.PI/2}this.joints.push(a)}if(r.add(this.hand),t){z(this.hand,.17,.17,.28,s,0,0,-.18,.05),this.hand.add(this.bit);const o=dt(this.bit,.082,.12,qe,0,0,-.085);o.rotation.x=Math.PI/2;const a=pt(this.bit,new di(n?.018:.043,n?.026:.043,.12,6),n?7597518:ke,0,0,-.057);a.rotation.x=Math.PI/2,z(this.bit,.026,.023,.08,bt,.046,.012,-.06)}else{z(this.hand,.37,.095,.12,qe,0,.045,-.15,.025);for(const o of[-1,1]){const a=z(this.hand,.052,.09,.27,bt,o*.21,.033,-.013,.015);z(a,.069,.038,.082,ci,-o*.013,-.035,.075,.01),this.fingers.push(a)}}this.pose(this.shoulder.clone().add(new I(.12,.11,.48)),1,0)}body;shoulder;links=[];joints=[];hand=new ot;fingers=[];bit=new ot;upper;lower;pose(e,t,n){const r=e.clone().sub(this.shoulder),s=Math.hypot(r.x,r.z),o=yt.clamp(r.length(),Math.abs(this.upper-this.lower)+.001,this.upper+this.lower-.001),a=r.clone().normalize(),l=this.shoulder.clone().addScaledVector(a,o),c=(this.upper*this.upper-this.lower*this.lower+o*o)/(2*o),h=Math.sqrt(Math.max(0,this.upper*this.upper-c*c));let u=s>.001?new I(-a.y*r.x/s,s/r.length(),-a.y*r.z/s):new I(1,0,0);const p=new I(.78,.85,-.08);p.addScaledVector(a,-p.dot(a)),p.lengthSq()>.08&&(u=p.normalize());const d=this.shoulder.clone().addScaledVector(a,c).addScaledVector(u,h),_=[this.shoulder,d,l];return this.links.forEach((g,m)=>{g.position.copy(_[m]).lerp(_[m+1],.5),g.quaternion.setFromUnitVectors($m,_[m+1].clone().sub(_[m]).normalize())}),this.joints.forEach((g,m)=>g.position.copy(_[m])),this.hand.position.copy(l),this.hand.rotation.y=Math.atan2(r.x,r.z),this.fingers.forEach((g,m)=>g.position.x=(m?1:-1)*(.256+.075*t)),this.bit.rotation.z=n,this.body.localToWorld(l.clone())}}function Kl(i,e,t,n,r,s=.12){const o=new ot;o.position.set(e,n,t),i.add(o);const a=dt(o,n,s,ci,0,0,0);a.rotation.z=Math.PI/2;const l=r*(s/2+.003),c=dt(o,n*.73,.012,6781819,l,0,0);c.rotation.z=Math.PI/2;const h=dt(o,n*.41,.021,ke,l+r*.008,0,0);h.rotation.z=Math.PI/2;for(let u=0;u<3;u++){const p=u*Math.PI*2/3,d=z(o,.011,n*.38,n*.115,bt,l+r*.012,Math.cos(p)*n*.51,Math.sin(p)*n*.51);d.rotation.x=p}return pn(o),{spin:o,side:r,radius:n}}function $l(i,e,t){i.body.position.set(e.x,t,e.z),i.body.rotation.y=e.yaw;const n=i.body.scale.x;for(const r of i.wheels){const s=e.distance/n-r.spin.position.x*(e.yaw-.22);r.spin.rotation.x=s/r.radius}i.body.updateMatrixWorld(!0)}function Zl(i,e,t){for(const[n,r]of(i.beacons??[]).entries()){const s=t?.4+.95*(.5+.5*Math.sin(e*3.2+n*Math.PI)):.14;r.material.emissiveIntensity=s}}function Jl(i,e,t,n,r){const s=new ot;return s.rotation.y=e?Math.PI/2:0,i.add(s),t.flatMap(o=>[-1,1].map(a=>Kl(s,a*r,o,n,a,.095)))}function Ql(i,e){const t=new ot,n=Po[i],r=[],s={body:t,wheels:r},o=i==="Skim",a=i==="Patch",l=i==="Jack",c=o?.097:a?.14:.16;z(t,o?.81:.76,o?.14:.26,a?.78:.83,n,0,o?.134:.29,0,.09),z(t,o?.75:.71,.052,.76,qe,0,o?.085:.18,0,.024);for(const d of[-1,1])for(const _ of[-.25,.245])r.push(Kl(t,d*.374,_,c,d));z(t,o?.65:.66,.056,.072,qe,0,o?.09:.235,o?.416:.407,.017);for(const d of[-1,1])z(t,.07,.031,.021,16767129,d*.26,o?.096:.241,o?.455:.447,.007),o||z(t,.037,.075,.21,bt,d*.373,.335,-.16,.01);let h=.14,u=.421;if(i==="Wick"){dt(t,.16,.5,qe,-.08,.62,-.14);for(const d of[.49,.62,.75])dt(t,.168,.046,ke,-.08,d,-.14);dt(t,.095,.44,bt,-.08,.91,-.14),z(t,.61,.39,.48,n,-.07,1.15,-.11,.115),z(t,.56,.054,.46,bt,-.07,1.36,-.11,.024),dt(t,.025,.16,ke,-.26,1.43,-.22),pt(t,new zt(.046,12,10),bt,-.26,1.53,-.22,!0),z(t,.43,.145,.17,qe,.13,.695,.015,.035),z(t,.23,.09,.133,ke,.19,.776,.015,.025),s.arm=new dl(t,!1,!1),h=1.15,u=.139}else if(l){z(t,.62,.47,.49,n,0,.57,-.13,.105),z(t,.62,.065,.49,bt,0,.807,-.13,.026);const d=new ot,_=new ot;d.position.set(0,.23,.32),t.add(d);for(const m of[-1,1])z(d,.086,.9,.105,ke,m*.255,.41,0,.023),z(d,.036,.72,.042,bt,m*.255,.4,.072,.01),z(_,.102,.057,.53,qe,m*.185,0,.19,.018),z(_,.104,.059,.093,bt,m*.185,0,.415,.014);z(d,.58,.085,.11,qe,0,.84,0,.022);const g=pt(d,new di(.117,.117,.045,20),11032627,.27,.21,.072);g.rotation.x=Math.PI/2,s.collarRing=g,z(_,.52,.12,.11,qe,0,.046,-.005,.02),d.add(_),s.collar=pt(d,new di(.077,.077,.07,6),16763763,.27,.21,.104),s.collar.rotation.x=Math.PI/2,s.mast=d,s.fork=_,dt(t,.083,.09,ke,-.21,.86,-.16),s.light=pt(t,new zt(.077,14,12),16737865,-.21,.93,-.16,!0),h=.61,u=.125}else if(a){z(t,.66,.44,.64,15328718,-.035,.55,-.095,.095),z(t,.68,.075,.68,16117462,-.035,.79,-.1,.035),z(t,.69,.08,.72,4427146,-.035,.4,-.065,.026),z(t,.6,.15,.2,14214361,-.035,.455,.245,.065),z(t,.55,.17,.045,5402484,-.035,.645,.227,.045);for(const d of[-1,1]){const _=-.035+d*.336;z(t,.018,.14,.19,4679532,_,.65,.087,.012);const g=dt(t,.125,.022,3307124,_,.594,-.185);g.rotation.z=Math.PI/2,z(t,.015,.15,.043,16772551,_+d*.02,.594,-.185,.006),z(t,.016,.043,.15,16772551,_+d*.022,.594,-.185,.006),z(t,.08,.039,.065,16168548,d*.244,.49,.338,.009),z(t,.005,.23,.025,8559e3,_,.595,-.035)}for(const d of[-.17,.1])z(t,.24,.28,.024,13095881,d,.55,-.417,.02),z(t,.15,.084,.026,5138796,d,.618,-.435,.009);z(t,.4,.095,.021,3438460,-.035,.475,-.445,.007);for(const d of[-.19,-.09,.01,.11]){const _=z(t,.032,.075,.009,16308117,d,.475,-.459,.003);_.rotation.z=-.55}z(t,.125,.036,.016,3508361,-.17,.558,-.447,.003),z(t,.037,.125,.017,3508361,-.17,.558,-.449,.003),z(t,.44,.04,.125,qe,-.035,.844,-.045,.018),s.beacons=[6675688,16756054].map((d,_)=>pt(t,new ts(.15,.077,.1,2,.025),d,-.168+_*.268,.896,-.045,!0));for(const d of[-.33,-.28,-.23])z(t,.23,.014,.017,qe,-.045,.835,d);s.arm=new dl(t,!0,e),h=.597,u=.242}else{z(t,.64,.045,.6,qe,0,.222,-.02,.018);for(const d of[-1,1])z(t,.047,.037,.56,ke,d*.303,.248,-.018,.012),z(t,.061,.065,.16,4424824,d*.346,.201,-.235,.014);for(const d of[-.17,0,.17])z(t,.52,.012,.034,7967115,0,.25,d,.004)}const p=i==="Wick"?-.07:a?-.035:0;z(t,o?.47:.45,o?.11:.193,.044,ci,p,h,u,.04);for(const d of[-1,1])pt(t,new zt(o?.037:.048,14,10),16773054,p+d*.114,h,u+.021,!0).scale.set(.82,1,.61);if(i==="Wick"){for(const d of[-.28,-.195,-.11])z(t,.018,.035,.046,qe,-.371,1.14,d,.004);z(t,.29,.026,.055,ke,-.07,1.258,.146,.009)}if(l)for(const d of[-1,1])z(t,.045,.27,.095,3163733,d*.277,.54,-.315,.012),z(t,.075,.055,.075,16768135,d*.23,.785,.127,.013);if(o||z(t,.08,.017,.013,10992299,p,h-.06,u+.025,.006),i==="Wick"){z(t,.55,.036,.15,n,-.07,1.276,.114,.017);for(const d of[-1,1]){const _=dt(t,.108,.044,qe,-.07+d*.3,1.13,-.096);_.rotation.z=Math.PI/2;const g=dt(t,.071,.012,ke,-.07+d*.326,1.13,-.096);g.rotation.z=Math.PI/2}}else if(l){z(t,.58,.042,.37,8627881,0,.795,-.075,.017);for(const d of[-1,1]){z(t,.08,.025,.39,bt,d*.3,.405,.03,.009);for(const _ of[-.17,-.085,0]){const g=z(t,.01,.083,.042,16762475,d*.382,.305,_);g.rotation.x=-.5}}}else if(a)for(const d of[-1,1])z(t,.014,.022,.55,15772770,-.035+d*.345,.445,-.065,.005),pt(t,new zt(.061,16,10),d<0?8382445:16758876,-.035+d*.134,.921,-.045).scale.set(1.05,.58,.69);else for(const d of[-1,1]){z(t,.049,.047,.49,13163720,d*.343,.221,-.008,.018);for(const _ of[-.08,0,.08])z(t,.014,.016,.036,3693399,d*.371,.223,_)}for(const d of[-1,1]){const _=z(t,.036,o?.018:.03,.015,9158339,p+d*(o?.2:.19),h,u+.025,.006);_.rotation.z=d*.2}return pn(t,[s.light,...s.beacons??[]]),s.fork&&pn(s.fork),s.mast&&pn(s.mast,[s.collar,s.collarRing]),Dn(t),Jo(t,.58,.62),s}function ec(i,e,t="47"){pt(i,new Ko([new Ie(.12,.025),new Ie(.222,.055),new Ie(.24,.18),new Ie(.205,.3),new Ie(.109,.39),new Ie(.09,.424),new Ie(.134,.479),new Ie(.086,.48)],36),14174524,0,0,0).scale.set(1.02,e/18,.78);for(const o of[-1,1]){const a=pt(i,new Kr(.222,.007,5,24),16228471,0,.191*e/18,0);a.rotation.y=o*.72,a.scale.set(.87,.79*e/18,1)}const r=pt(i,new Kr(.101,.02,8,24),ke,0,.402*e/18,0);r.rotation.x=Math.PI/2,r.scale.y=.82,z(i,.103,.14,.028,bt,.09,.3*e/18,.155,.009).rotation.z=-.22;const s=vn(i,t,.125,.103,0,.19*e/18,.188,"#e7d6a6","#713924");s.rotation.z=.06,z(i,.46,.036,.4,qe,0,.004,0,.025),pn(i),Dn(i)}function Vn(i,e,t,n){const r=Math.max(i.y,e.y)+n,s=i.clone().lerp(e,Ue(t,.23,.72));return s.y=t<.45?yt.lerp(i.y,r,Ue(t,0,.26)):yt.lerp(r,e.y,Ue(t,.72,1)),s}function tc(i,e){const t=e==="Wick"?new I(.4,.75,.49):e==="Jack"?new I(0,.36,.56):new I(0,.27,-.015);return i.body.localToWorld(t)}function nc(i,e){const t=i.mast.worldToLocal(e.clone());i.fork.position.set(0,Math.max(-.07,t.y-.046),yt.clamp(t.z-.215,-.25,.57))}function ic(i,e,t,n,r){const s=t===void 0?0:Math.max(0,e-t),o=n||t===void 0?0:(.13+.87*Ue(s,0,.52))*(1-Ue(r,.42,.94));i.mast.rotation.z=o*(-.63+(s<.55?.065*Math.sin(s*15)*(1-Ue(s,.18,.55)):0)),i.mast.rotation.x=o*.08;const a=i.collarRing.material,l=t===void 0?11032627:n?6670244:15893072;a.color.setHex(l),a.emissive.setHex(t===void 0?0:l),a.emissiveIntensity=n?.33:.46,i.light.visible=!n,i.light.scale.setScalar(1.04),i.body.updateMatrixWorld(!0)}class Zm{constructor(e,t,n){this.ep=t,this.drive=new Xl(t);const r=t.layout.yard,s=t.layout.width,o=t.layout.depth,a=(s-1)/2,l=(o-1)/2;z(e,s+1.12,.43,o+1.12,7429189,a,-.29,l,.15),z(e,s+.87,.1,o+.85,ke,a,-.12,l),z(e,s,.12,o,5795179,a,-.055,l);const c=[6261629,7309715,10453604];for(const[h,u]of r.orders.entries()){const p=u.row,d=c[h];z(e,s-.1,.032,3.8,h%2?7766396:7174516,a,.017,p),z(e,20,.025,.07,d,12,.052,p);for(const v of[1,4,7,10,13,16,19,22])z(e,.055,.024,3.8,5399391,v,.042,p);for(const v of[-1.4,1.4])z(e,.28,.74,1.8,qe,12,.39,p+v,.05),z(e,.33,.06,1.8,ke,12,.77,p+v);z(e,.34,.13,1.18,d,12,.91,p);const _=u.shelf[0];z(e,1.64,.12,.69,ke,_,1.18,p-1.04);for(const v of[-.77,.77])for(const w of[-.4,.4])z(e,.12,1.17,.12,qe,_+v,.57,p-1.04+w*.71);z(e,1.3,.55,.65,9136454,_,.32,p-1.04,.04);const[g,m]=Ni(u.desk,u.row);z(e,.69,.62,.52,qe,g,.32,m,.045),z(e,.65,.06,.45,bt,g,.65,m,.02),z(e,2.3,.07,1,d,15.5,.06,p),z(e,.34,.43,.48,qe,23.85,.24,p,.04);for(const v of[-.25,.25])z(e,.83,.09,.045,ke,23.94,.625,p+v);for(let v=0;v<.8;v+=.15){const w=dt(e,.045,.48,qe,23.57+v,.645,p);w.rotation.x=Math.PI/2}if(u.id==="47"){z(e,.82,.12,.79,5213569,u.lift[0],.1,u.lift[1],.035);for(const v of[-.24,0,.24])z(e,.63,.03,.045,ke,u.lift[0],.175,u.lift[1]+v)}const f=new ot;f.position.set(24.55,.08,p),this.coaches.add(f),z(f,1.37,.12,3.48,ke,0,.545,0,.04),z(f,.1,.96,3.48,3233895,.63,.98,0,.04);for(const v of[-1,1])z(f,1.36,.96,1.16,3233895,0,.98,v*1.16,.065),z(f,1.45,.16,1.27,qe,0,1.49,v*1.18,.055),z(f,.055,.9,.065,ke,-.66,.97,v*.6,.012);z(f,.5,.14,1.19,qe,.47,1.48,0,.04);for(const v of[-1.25,-.67,.65,1.23])z(f,.04,.4,.39,15124357,-.68,1.02,v,.03);this.rail.push(...Jl(f,!1,[-1.22,1.22],.215,.44)),pn(f),Dn(f),Jo(f,.88,1.88,-.045);const b=new ot;ec(b,t.scenario.parcel_cm,u.id),e.add(b),this.bags.set(u.id,b);const E=vn(e,u.coach.toUpperCase()+"   /   BAG "+u.id,3.13,.4,21.7,1.03,p-1.28);E.rotation.y=-.38}e.add(this.coaches);for(const h of[24.1,24.95])z(e,.13,.1,23,qe,h,-.01,10);for(let h=-1;h<21;h+=.55)z(e,1.45,.1,.16,5589561,24.52,-.085,h);for(const[h,u]of t.layout.obstacles)jl(e,h,u,.9,.64,.88);for(const[h,u]of Object.entries(r.bodies)){const p=Ql(u,t.scenario.service_kit==="probe");p.body.scale.setScalar(.92),e.add(p.body),this.robots.set(h,p);const d=new Ct(new Qr(.63,.77,28),new qi({color:15844211,side:Yt}));d.rotation.x=-Math.PI/2,e.add(d),this.rings.set(h,d);const _=document.createElement("span");_.className="body-label junction-label working "+u.toLowerCase(),_.hidden=!0,n.append(_),this.labels.set(h,_)}dt(e,.09,2,qe,23.8,1,11.85),this.light=pt(e,new zt(.21,12,8),15438455,23.8,2.12,11.85,!0),pn(e,[this.light])}ep;robots=new Map;bags=new Map;coaches=new ot;drive;rail=[];light;rings=new Map;labels=new Map;anchor(e){const t=this.robots.get(e);if(t)return t.body.position.clone().add(new I(0,.62,0));const n=this.ep.layout.yard.orders[0];if(e==="Socket")return new I(n.door[0],.92,n.door[1]);if(e==="Waybill")return new I(n.desk[0],.58,n.desk[1]);if(e==="Mail lift")return new I(n.lift[0],.45,n.lift[1])}dispose(){for(const e of this.labels.values())e.remove()}draw(e,t,n,r){const s=this.ep,o=s.frames[Math.floor(e)],a=s.layout.yard,l=s.events.filter(A=>A.tick<=e),h=l.at(-1)?.planGraph?.nodes.filter(A=>A.state==="running")??[],u=new Map(h.map(A=>[A.actor,A.op.split("/")[0]])),p=new Map,d=new Map;for(const[A,N]of this.robots){$l(N,this.drive.sample(A,e),.058);const F=this.rings.get(A);F.visible=u.has(A),F.position.set(N.body.position.x,.092,N.body.position.z),N.fork&&d.set(A,N.body.localToWorld(new I(0,.27,.41)))}const _=s.frames.find(A=>A.signal==="green")?.tick,g=_===void 0?0:Math.max(0,e-_);this.coaches.position.z=7.8*Ue(g,.6,6.6);for(const A of this.rail)A.spin.rotation.x=this.coaches.position.z/A.radius;this.light.material.color.setHex(o.signal==="green"?8446382:15698028),this.light.material.emissive.copy(this.light.material.color);const m=(A,N)=>this.robots.get(A).body.localToWorld(N),f=(A,N)=>s.frames[A].robots[N];function b(A,N,F){const V=l.filter(G=>G.kind==="assignment"&&G.active?.includes(A)).at(-1)?.tick;if(V===void 0)return 0;let q=Math.floor(e);if(!F(q))return 0;for(;q>V&&F(q-1);)q--;return yt.clamp((e-q)/N,0,1)}const E=(A,N,F)=>{const V=f(A,N);return V[0]===F[0]&&V[1]===F[1]};for(const A of a.orders){const N=this.bags.get(A.id),F=o.cargoByBag[A.id].holder,V=new I(A.shelf[0],1.256,A.row-.82),q=new I(24.57,.7,A.row+this.coaches.position.z),G=new I(23.86,.7,A.row),ne=j=>tc(this.robots.get(j),a.bodies[j]),le=new I(A.lift[0],.29,A.lift[1]);let K=this.robots.has(F)?ne(F):F===A.coach?q:F==="Mail lift"?le:V;const we=A.picker,He=m(we,new I(.54,.74,.34));let Xe=F===we?K:He,je=F===we?0:1;a.bodies[F]==="Jack"&&d.set(F,K);for(const j of h.filter(J=>J.op.startsWith(A.id+"/"))){const J=j.op.split("/")[1],he=j.actor;if(J==="collect"){const pe=b(j.uid,2,fe=>E(fe,he,A.shelf));Xe=He.clone().lerp(V,Ue(pe,0,.34)),je=1-Ue(pe,.32,.45),pe>.45&&(Xe=K=Vn(V,ne(he),Ue(pe,.45,1),.16))}else if(J==="stage"){const pe=b(j.uid,2,fe=>E(fe,we,A.handoff)&&E(fe,A.courier,A.deck));K=Vn(ne(we),ne(A.courier),Ue(pe,0,.72),.15),Xe=K.clone().lerp(He,Ue(pe,.79,1)),je=Ue(pe,.7,.79)}else if(J==="load"){if(F===A.courier){const pe=b(j.uid,2,L=>E(L,he,A.unload)&&E(L,A.courier,A.berth)),fe=ne(he),Ge=ne(A.courier),Et=pe<.38?fe.clone().lerp(Ge,Ue(pe,0,.37)):Vn(Ge,fe,Ue(pe,.38,1),.06);d.set(he,Et),K=pe<.38?Ge:Et}else if(F===he){const pe=b(j.uid,2,Ge=>E(Ge,he,A.door)),fe=Vn(ne(he),G,Ue(pe,0,.65),.06);K=pe>.65?G.clone().lerp(q,Ue(pe,.65,.95)):fe.clone(),d.set(he,fe.lerp(ne(he),Ue(pe,.74,1)))}}else if(J==="hoist"&&F==="Mail lift"){const pe=b(j.uid,14,fe=>s.frames[fe].cargoByBag[A.id].holder==="Mail lift");K=Vn(le,q,pe,.1)}}p.set(we,{at:Xe,open:je}),N.position.copy(K)}for(const[A,N]of p){const F=this.robots.get(A);F.arm.pose(F.body.worldToLocal(N.at.clone()),N.open,0)}const v=this.robots.get("Jack"),w=this.robots.get("Patch"),R=h.find(A=>A.op.endsWith("/repair")),T=R?b(R.uid,4,A=>{const N=f(A,R.actor),F=f(A,"Jack");return Math.abs(N[0]-F[0])+Math.abs(N[1]-F[1])===1}):0,P=l.find(A=>A.kind==="fork fault");ic(v,e,P?.tick,o.fork_online!==!1,T);for(const[A,N]of d)nc(this.robots.get(A),N);if(w){const A=new I(.58,.73,.38),N=w.body.worldToLocal(v.collar.getWorldPosition(new I));A.lerp(N,Ue(T,0,.22)*(1-Ue(T,.84,1))),w.arm.pose(A,0,Math.PI*14*T),Zl(w,e,!!P&&o.fork_online===!1)}const M=s.layout.width,S=s.layout.depth,D=new I((M-1)/2,0,(S-1)/2);t.position.copy(D).add(r?new I(0,32,.01):new I(-3,22,25)),t.lookAt(D);const O=Math.max(S*.84,(M+1.4)/n);Object.assign(t,{left:-O*n/2,right:O*n/2,top:O/2,bottom:-O/2,near:.05,far:110}),t.updateProjectionMatrix(),t.updateMatrixWorld();for(const[A,N]of this.labels){const F=A==="Jack"&&o.fork_online===!1&&!u.has(A);if(N.hidden=!u.has(A)&&!F,N.hidden)continue;const V=this.robots.get(A).body.position.clone().add(new I(0,1.72,0)).project(t);N.style.left=(V.x+1)*50+"%",N.style.top=(1-V.y)*50+"%";const q=A+" · "+(F?"forks":u.get(A));N.textContent!==q&&(N.textContent=q),N.classList.toggle("broken",F)}}}class ns{constructor(e){this.host=e,this.renderer=new qm({antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.renderer.shadowMap.autoUpdate=!1,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ec,this.renderer.setClearColor(1649963,0),this.renderer.outputColorSpace=Bt,this.renderer.toneMapping=gl,this.renderer.toneMappingExposure=1.08,e.append(this.renderer.domElement),this.renderer.domElement.setAttribute("aria-label","Animated postal depot and robot crew"),this.scene.add(this.root),this.scene.add(new su(14479103,9541774,1.74));const t=new Ba(11460330,.76);t.position.set(3,6,-8),this.scene.add(t);const n=this.sun;n.position.set(0,12,8),n.target.position.set(6,0,3),n.castShadow=!0,n.shadow.mapSize.set(2048,2048),Object.assign(n.shadow.camera,{left:-12,right:12,top:12,bottom:-12,far:40}),n.shadow.normalBias=.025,this.scene.add(n,n.target),Yl(e,()=>this.resize())}host;junction;drive;rail=[];liftRail;scene=new Zh;root=new ot;camera=new $o;renderer;sun=new Ba(16769975,2.05);rigs={};names=[];labels=new Map;at=0;mailbag=new ot;shutter=new ot;gateLamp;windows=[];markers=new Map;ep;top=!1;review=!1;composition(e){this.review=e}ratio=1;motionScale=1;lateFrames=0;socket=new I;train;door;scanLine;signature;scanLamp;signalLamp;noteMovingFrame(e){this.lateFrames=e>48?this.lateFrames+1:0,!(this.lateFrames<5||this.motionScale<=.55)&&(this.lateFrames=0,this.motionScale=Math.max(.55,this.motionScale*.76),this.resize())}restoreDetail(){this.lateFrames=0,this.motionScale!==1&&(this.motionScale=1,this.resize())}resize(){const{width:e,height:t}=this.host.getBoundingClientRect();if(!e||!t)return;const n=ql(e,t),r=Math.min(n,Math.max(1,n*this.motionScale));this.renderer.setDrawingBufferSize(e,t,r),this.ratio=e/t,this.ep&&this.draw(this.at)}view(e){this.top=e,this.draw(this.at)}anchor(e){let t=this.junction?.anchor(e==="Fork"?"Jack":e);if(!this.junction){const n=this.rigs[e];if(n)t=n.body.position.clone().add(new I(0,e==="Wick"?1.06:e==="Skim"?.24:.64,0));else if(e==="Bag")t=this.mailbag.position.clone().add(new I(0,.32,0));else if(e==="Fork"&&this.rigs.Jack?.collar)t=this.rigs.Jack.collar.getWorldPosition(new I);else{const r=this.markers.get(e);r&&(t=r.position.clone().add(new I(0,e==="Waybill"?.53:.19,0)))}}if(t)return t.project(this.camera),{x:(t.x+1)/2,y:(1-t.y)/2}}focus(e){for(const[t,n]of this.markers)n.visible=e.includes(t)}load(e){this.ep=e,this.drive=new Xl(e),this.at=0,this.rail=[],this.liftRail=void 0,this.train=void 0,this.door=void 0,this.scanLamp=void 0,this.scanLine=void 0,this.signature=void 0,this.signalLamp=void 0,this.names=Object.keys(e.layout.starts),this.rigs={};for(const g of this.labels.values())g.remove();this.labels.clear(),this.root.traverse(g=>{if(g instanceof Ct){g.geometry.dispose();for(const m of[g.material].flat())m.map?.dispose(),m.dispose()}}),this.root.clear(),this.windows=[],this.markers.clear(),this.shutter=new ot;const t=this.root,n=e.layout,r=(n.width-1)/2,s=(n.depth-1)/2;this.sun.position.set(r-6,14,s+6),this.sun.target.position.set(r,0,s);const o=Math.max(n.width*.64,n.depth*.8);if(Object.assign(this.sun.shadow.camera,{left:-o,right:o,top:o,bottom:-o}),this.sun.shadow.camera.updateProjectionMatrix(),this.renderer.shadowMap.needsUpdate=!0,this.junction?.dispose(),this.junction=void 0,n.yard){this.junction=new Zm(t,e,this.host),this.draw(0),this.resize();return}z(t,n.width+1.05,.4,n.depth+1.84,7296828,r,-.31,s-.45,.12),z(t,n.width+.87,.12,n.depth+1.68,ke,r,-.16,s-.45,.055);for(let g=0;g<n.width;g++)for(let m=0;m<n.depth;m++){const f=(g+m)%2;z(t,.99,.12,.99,g<6?f?5664876:5400680:f?9733491:10259835,g,-.065,m)}if(n.depth>7){for(const g of[9.47,10.53])z(t,.035,.014,.95,13283192,g,.007,7);z(t,1.09,.014,.035,13283192,10,.007,7.45)}const a=26;for(const g of[-1,-.53])z(t,a+.5,.065,.07,qe,(a-.5)/2,-.02,g);for(let g=0;g<=a-.5;g+=.52)z(t,.14,.08,.85,4933436,g,-.08,-.78);{const g=a-12.5,m=12.5+g/2;for(const f of[-1.11,-.42])z(t,g,.19,.09,qe,m,-.22,f),z(t,g,.05,.14,10060889,m,-.33,f);for(let f=13;f<a;f+=2.08){z(t,.27,.21,1,qe,f,-.4,-.77);for(const b of[-1.04,-.49]){z(t,.17,.8,.18,4347482,f,-.83,b);const E=z(t,1.18,.1,.1,6452340,f+.53,-.68,b);E.rotation.z=.46}z(t,.43,.23,.96,7038292,f,-1.25,-.77,.04)}}const l=new ot;l.position.set(9.65,0,-.73),t.add(l),this.train=l,this.rail=Jl(l,!0,[-2,-1.4,1.4,2],.215,.34);{z(l,3.45,1.13,1.02,2312788,-.93,.88,0,.11),z(l,.81,1.13,1.02,2312788,2.23,.88,0,.1),z(l,1.07,1.11,.12,1517613,1.32,.87,-.44),z(l,5.19,.13,1.04,3160123,0,.39,.01,.035),z(l,1.14,.1,.95,12165750,1.33,.74,.05,.02);for(const g of[.8,1.84])z(l,.06,.88,.07,ke,g,.94,.48,.015),z(l,.18,.26,.27,9592896,g+.11,.88,-.15,.016);this.door=new ot,this.door.position.set(.23,.97,.55),l.add(this.door),z(this.door,1.04,.92,.07,3498346,0,0,0,.035);for(const g of[-.34,.34])z(this.door,.97,.025,.081,ke,0,g,.011);vn(this.door,"POST",.52,.19,0,.08,.045,"#254850","#f2d59d"),z(l,5.42,.055,1.14,ke,0,1.39,0,.021);for(const g of[-1.95,-.95,.05])z(l,.41,.068,.47,qe,g,1.58,-.04,.033);vn(l,"MAIL  ·  COACH B",1.2,.18,1.34,1.38,.571,"#3e3931","#f7da9b")}z(l,5.42,.23,1.11,2308672,0,1.41,0,.11),z(l,5.22,.065,.055,ke,0,.65,.514);const c=.51,h=[-1.88,-1.23,-.58];for(const[g,m]of h.entries()){z(l,.54,.375,.045,2704714,m,1.04,c+.015,.026);const f=z(l,.46,.295,.02,4350819,m,1.04,c+.044,.009);f.name=`Coach_window_${g+1}`,this.windows.push(f)}vn(l,"M O O N M A I L",2.35,.23,0,.49,.515);for(const g of[-2.34,2.34])z(l,.33,.77,.025,2506051,g,.88,.516,.035),z(l,.21,.21,.032,ke,g,1.06,.529,.03),z(l,.05,.04,.04,bt,g+.08,.79,.54);for(const g of[7.1,12.35])dt(t,.135,.14,ci,g,.07,.28),dt(t,.046,1.7,qe,g,.88,.28),dt(t,.12,.1,ke,g,1.73,.28),pt(t,new zt(.13,16,12),16764280,g,1.88,.28,!0),pt(t,new jo(.19,.13,16),qe,g,2.02,.28);const u=vn(t,"NIGHT MAIL   •   PLATFORM 1",2.6,.32,9.7,1.9,-.52);for(const g of[8.55,10.85])dt(t,.048,u.position.y,qe,g,u.position.y/2,-1.42),z(t,.08,.1,.96,qe,g,u.position.y,-.98),z(t,.23,.13,.23,ke,g,.015,-1.42,.02);for(const g of[-2.51,-1.6,-.8,0,.8,1.6,2.51]){z(l,.021,.83,.035,4744291,g,.89,.5);for(const m of[.56,1.25])pt(l,new zt(.024,8,6),ke,g,m,.524)}for(const g of[-2.48,2.48]){const m=dt(l,.085,.045,ke,g,.57,.52);m.rotation.x=Math.PI/2,pt(l,new zt(.055,12,8),16763001,g,.57,.551,!0)}for(let g=0;g<n.depth;g++)g===2||g===5||(z(t,.27,.83,.99,qe,6,.41,g,.03),z(t,.32,.055,.99,ke,6,.85,g));for(const g of[1.49,2.51])z(t,.34,1.89,.12,ke,6,.945,g,.025);z(t,.37,.16,1.15,ci,6,1.91,2),z(t,.1,.17,.36,ci,6.19,1.92,2,.025),this.gateLamp=pt(t,new zt(.087,14,10),8119464,6.253,1.93,2,!0);for(const g of[1.49,2.51])for(let m=0;m<4;m++)z(t,.348,.072,.129,ci,6,.17+m*.19,g,.008);this.shutter.position.set(6,0,2),t.add(this.shutter);for(let g=0;g<10;g++)z(this.shutter,.19,.17,1,g%2?9205089:10586479,0,.1+g*.18,0);for(const g of[4.48,5.52])z(t,.4,.76,.1,5680537,6,.38,g);z(t,.42,.12,1.13,6600353,6,.82,5);const p=n.shelf[0];for(const g of[p-.45,p+.45])for(const m of[-.38,.34])z(t,.065,1.66,.065,qe,g,.83,m);for(const g of[.32,.82,1.43])z(t,1.09,.09,.85,ke,p,g,0);for(const g of[-.25,.18])for(const m of[.51,1.01])z(t,.31,.3,.35,11898464,p+g,m,0,.025);for(const[g,m]of n.obstacles.slice(2))jl(t,g,m,.76,.6,.7);const[d,_]=n.socket;z(t,.89,.87,.64,qe,d,.435,_-.8,.065),z(t,.94,.06,.69,ke,d,.9,_-.8);{for(const b of[d-.22,d+.22])z(t,.055,.09,1.42,ke,b,.91,.48,.015);for(let b=-.14;b<1.22;b+=.19){const E=dt(t,.045,.48,qe,d,.9,b);E.rotation.z=Math.PI/2}const[g,m]=Ni(n.desk??[9,3]);z(t,.72,.69,.4,3624529,g,.345,m,.045),z(t,.78,.065,.47,ke,g,.72,m,.025),z(t,.31,.04,.27,bt,g,.78,m,.01),this.scanLine=z(t,.235,.008,.025,10942161,g,.806,m,.003),this.scanLine.material.emissive.setHex(6347686),this.signature=new ot,this.signature.position.set(g,.806,m),t.add(this.signature),z(this.signature,.13,.005,.011,3695452,-.012,0,-.025),z(this.signature,.085,.005,.011,3695452,-.034,0,.004);const f=z(this.signature,.064,.005,.013,3439717,.054,.001,.04);f.rotation.y=-.38,vn(t,"WAYBILLS",.55,.13,g,.55,m+.206),this.scanLamp=pt(t,new zt(.062,12,10),11187867,g+.27,.82,m+.02,!0),dt(t,.064,1.6,qe,12.16,.81,1.22),z(t,.33,.47,.21,2305587,12.16,1.58,1.22,.08),this.signalLamp=pt(t,new zt(.103,16,12),15628630,12.16,1.6,1.35,!0);for(const b of[1.5,4.5]){z(t,2.36,.031,.08,bt,9.35,.013,b,.012);for(const E of[8.35,9.05,9.75,10.45])z(t,.14,.04,.16,ke,E,.017,b,.012)}for(const b of[1,3.8,8,12])for(const E of[6.35,-.45])dt(t,.057,.025,ke,b,.018,E)}this.socket.set(d,.95,_-.8);for(const g of n.berths)for(const[m,f]of g)for(const b of[-.4,.4])z(t,.05,.012,.78,14663024,m+b,.006,f);vn(t,"SORTING HALL",2.38,.29,2.25,.33,n.depth-.26),vn(t,"PLATFORM  01",2.38,.29,9.6,.33,n.depth-.26),this.mailbag=new ot,ec(this.mailbag,e.scenario.parcel_cm),t.add(this.mailbag);for(const g of this.names){const m=Ql(g,e.scenario.service_kit==="probe");if(m.body.scale.setScalar(.94),this.rigs[g]=m,t.add(m.body),g==="Wick"&&(z(m.body,.68,.065,.36,3492178,-.07,1.385,-.03,.03),z(m.body,.56,.1,.35,4613489,-.07,1.431,-.1,.042),z(m.body,.085,.045,.025,ke,-.07,1.43,.09,.01)),g==="Jack")for(const b of[-1,1])z(m.body,.035,.07,.23,bt,b*.38,.295,-.17,.012);const f=document.createElement("span");f.className="body-label "+g.toLowerCase(),f.textContent=g,this.host.append(f),this.labels.set(g,f)}if(n.lift){for(const[f,b]of[n.lift,n.baggage].entries()){if(!b)continue;const[E,v]=b;z(t,.88,.12,.83,f?10191455:5351828,E,.05,v,.045);for(let R=0;R<5;R++)z(t,.72,.03,.045,ke,E,.12,v-.29+R*.14);vn(t,f?"BAGGAGE":"MAIL LIFT",.92,.2,E,.27,v+.42)}const[g,m]=n.lift;this.liftRail=new ot,this.liftRail.position.set(g,0,m-.42),t.add(this.liftRail);for(const f of[-.14,.14])z(this.liftRail,.048,.065,3.07,ke,f,.92,-1.53)}for(const[g,m]of Object.entries({...n.gates,...n.starts,Shelf:[n.shelf[0],0],Waybill:n.desk?Ni(n.desk):n.socket,Socket:n.socket,...n.lift?{"Mail lift":n.lift}:{}})){const f=new Ct(new Qr(.49,.56,40),new qi({color:16768122,side:Yt}));f.rotation.x=-Math.PI/2,f.position.set(m[0],g==="Shelf"?1.49:.024,m[1]),f.visible=!1,this.markers.set(g,f),t.add(f)}pn(l,this.windows),Dn(l),Jo(l,2.82,.7,.008),pn(this.shutter),Dn(this.shutter),this.liftRail&&Dn(this.liftRail),this.signature&&Dn(this.signature),this.scanLine&&Dn(this.scanLine),Dn(this.mailbag),pn(t,[this.gateLamp,this.signalLamp,this.scanLamp,this.scanLine]),this.draw(0),this.resize()}cameraShot(e,t){const n=this.ep,r=n.layout,s=new I(4.8,8.6,14.3),o=new I(-7.5,5.3,7.5),a=new I(-5.8,7.3,13),l=n.scenario.mission==="mail"&&this.review&&this.host.clientWidth>780,c=this.ratio*(l?.64:1),h={aim:new I((r.width-1)/2,.3,(r.depth-1)/2-.4),span:Math.max(r.depth*.86,((r.width+1.05)*.95+(r.depth+1.84)*.318+.18)/c),names:this.names,angle:s},u=(T,P,M,S,D=s)=>{const O=Math.min(n.frames.length-1,Math.max(0,T)),A=n.frames[Math.floor(O)],N=n.frames[Math.ceil(O)],F=Ue(O%1),V=new I(0,.53,0);if(S)V.set(S[0],.65,S[1]);else if(P.length)for(const q of P){const G=A.robots[q],ne=N.robots[q];V.x+=yt.lerp(G[0],ne[0],F)/P.length,V.z+=yt.lerp(G[1],ne[1],F)/P.length}return{aim:V,span:Math.max(M,M*1.32/c),names:P,angle:D}},p=(T,P)=>{const M=T.motion;return T.kind==="jam"?u(P,[],4.7,r.gates.Shutter):T.kind==="fork fault"||["read","proposal"].includes(T.kind)&&(T.targetRevision??0)>1&&n.events.some(S=>S.kind==="fork fault"&&S.tick<T.tick)?u(P,["Jack"],3.12,void 0,a):T.kind==="repair"||M?.kind==="repair"||T.choices?.some(S=>S.repair)&&T.title.includes("repairs")?u(P,["Patch","Jack"],3.05,void 0,a):M?.kind==="move"?u(P,[M.actor],4.5,r.gates[String(T.proof?.rows[0]?.gate??"Hatch")]):M?.kind==="pick"||T.kind==="pick"?u(P,[M?.actor??T.actors[0]],3.25,[r.shelf[0],.64],o):M?.kind==="place"||T.kind==="place"||T.kind==="delivered"||T.kind==="feed"?u(P,T.actors,3.7,r.socket):T.kind==="dock"||T.choices?.some(S=>S.via)&&T.title.includes("lift")?u(P,["Skim"],5.6,r.lift):M?.kind==="transfer"||T.kind==="transfer"?u(P,T.actors,3.9):T.kind==="decision"&&T.actors.length===1?u(P,T.actors,4.8,void 0,T.actors[0]==="Wick"?o:s):h},d=n.events.filter(T=>T.tick<=e&&T.kind!=="move"&&T.kind!=="order"),_=d.at(-1),g=d.at(-2);let m=_?p(_,e):h;const f=g&&_?p(g,_.tick):h;let E=_?_.kind==="fork fault"?1:Ue(e-_.tick,0,1.15):1;if(n.scenario.mission==="mail"){const T=n.events.filter(P=>P.kind!=="completed"&&P.tick<=e).at(-1);if(T?.kind==="read"&&T.targetRevision===1){m=u(e,["Wick","Skim"],3.95,void 0,new I(4.8,4.9,11));const P=Ue(e-T.tick,.18,.43);m.aim.lerp(h.aim,1-P),m.angle.lerp(h.angle,1-P),m.span=yt.lerp(h.span,m.span,P)}else if(T?.kind==="assignment"){const P=T.op,M=T.actors[0];if(P==="collect")m=u(e,[M],3.9,[r.shelf[0],1.2],o);else if(P==="stage")m=u(e,["Wick","Skim"],4.4);else if(P==="cross")m=u(e,["Skim"],4.2,r.gates.Hatch);else if(P==="manifest")m=u(e,[M],4.1,r.desk,a);else if(P==="repair")m=u(e,[M,"Jack"],3.24,void 0,new I(-11.8,5.9,3.2));else if(P==="load"&&t?.kind==="place")m=u(e,[],4.1,[r.socket[0],r.socket[1]-.85],new I(-6.5,5,9));else if(P==="load"&&t?.kind==="transfer")m=u(e,["Skim",M],3.5,void 0,new I(-4.6,4.1,9));else if(P==="load"||P==="hoist")m=u(e,[M],5.6,void 0,a);else{const S=n.frames.find(O=>O.signal==="green")?.tick,D=S===void 0?0:Ue(e-S,1.4,6);m=u(e,[],7,[10+4.5*D,1])}}else T?.kind==="fork fault"?m=u(e,["Jack"],3.55,void 0,new I(5.2,5.8,12)):T&&["read","proposal","rejected"].includes(T.kind)&&(T.targetRevision??0)>1&&n.events.some(P=>P.kind==="fork fault"&&P.tick<T.tick)||T?.kind==="decision"&&(T.planGraph?.revision??0)>1?m=u(e,["Jack",...n.layout.starts.Patch?["Patch"]:[]],4.9,void 0,a):T?.kind==="delivered"?m=u(e,[],8.6,[14.5,1]):m=h;E=1}const v=f.aim.clone().lerp(m.aim,E);let w=yt.lerp(f.span,m.span,E),R=m.names;this.top&&(v.copy(h.aim),w=Math.max(r.depth+.68,(r.width+.94)/this.ratio),R=this.names),this.camera.position.copy(v).add(this.top?new I(0,25,.012):f.angle.clone().lerp(m.angle,E)),this.camera.lookAt(v),Object.assign(this.camera,{left:-w*this.ratio*(l?.692:.5),right:w*this.ratio*(l?.308:.5),top:w/2,bottom:-w/2,near:.05,far:85}),this.camera.updateProjectionMatrix(),this.camera.updateMatrixWorld();for(const[T,P]of this.labels){const S=this.rigs[T].body.position.clone().add(new I(0,T==="Wick"?1.75:T==="Skim"?.94:1.22,0)).project(this.camera),D=(S.x+1)*50,O=(1-S.y)*50;P.hidden=!R.includes(T)||D<4||D>96||O<7||O>92,P.style.left=D+"%",P.style.top=O+"%",P.classList.toggle("working",t?.actor===T)}}draw(e){if(!this.ep?.frames.length)return;if(this.junction){this.at=yt.clamp(e,0,this.ep.frames.length-1),this.junction.draw(this.at,this.camera,this.ratio,this.top),this.renderer.render(this.scene,this.camera);return}const t=this.ep,{frames:n,layout:r}=t,s=yt.clamp(e,0,n.length-1);this.at=s;const o=Math.floor(s),a=n[o],l=n[Math.min(o+1,n.length-1)],c=Ue(s-o);let h=[l.motion,a.motion].find(A=>A&&A.start<=s&&A.end>s);if(h||(h=t.events.find(A=>A.motion&&A.motion.start===s)?.motion),!h&&!t.scenario.service_kit){const A=t.events.find(N=>["pick","place","transfer"].includes(N.kind)&&s>=N.tick-2&&s<N.tick);A&&(h={kind:A.kind,actor:A.actors[0],from:n[A.tick-2].holder,to:n[A.tick].holder,start:A.tick-2,end:A.tick})}const u=h?yt.clamp((s-h.start)/(h.end-h.start),0,1):0,p=new I(r.shelf[0],1.5,.08);for(const A of this.names){const N=this.rigs[A],F=N.body;$l(N,this.drive.sample(A,s),0),this.markers.get(A)?.position.set(F.position.x,.024,F.position.z)}const d=this.rigs.Jack,_=t.events.find(A=>A.kind==="fork fault"&&A.tick<=s),g=h?.kind==="repair"?u:0;ic(d,s,_?.tick,a.fork_online!==!1,g);const m=n.find(A=>A.signal==="green")?.tick,f=m===void 0?0:Math.max(0,s-m),b=6.8*Ue(f,1.4,6);if(this.liftRail){const A=h?.kind==="dock"?Ue(u,.25,1):a.holder==="Mail lift"?1:0;this.liftRail.visible=A>.001,this.liftRail.scale.z=Math.max(.001,A)}this.train&&(this.train.position.x=9.65+b);for(const A of this.rail)A.spin.rotation.x=b/A.radius;if(this.door&&(this.door.position.x=.23+1.11*Ue(f,0,1.4)),this.signalLamp){const A=a.signal==="green"?7398573:15760743;this.signalLamp.material.color.setHex(A),this.signalLamp.material.emissive.setHex(A)}if(this.scanLine&&r.desk&&(this.scanLine.visible=h?.kind==="scan",this.scanLine.position.z=Ni(r.desk)[1]-.095+.19*(.5-.5*Math.cos(u*Math.PI*4))),this.signature&&(this.signature.visible=a.manifest==="signed"),this.scanLamp){const A=a.manifest==="signed"?8510889:h?.kind==="scan"?16767604:10137250;this.scanLamp.material.emissive.setHex(A),this.scanLamp.scale.setScalar(h?.kind==="scan"?1.15+.3*Math.sin(u*24):1)}const E=new I(r.socket[0]+b,.81,-.32-.38*Ue(f,0,.8)),v=A=>{if(A==="Shelf")return p.clone();if(A===r.destination)return E.clone();if(A==="Socket")return this.socket.clone();if(A==="Mail lift"&&r.lift){const N=n.find(G=>G.holder==="Mail lift")?.tick??s,F=n.find(G=>G.tick>N&&(G.holder==="Socket"||G.holder===r.destination))?.tick??N+15,V=yt.clamp((s-N)/(F-N),0,1);return new I(r.lift[0],.27+.7*Ue(V,0,.32),r.lift[1]).lerp(E,Ue(V,.32,1))}return tc(this.rigs[A],A)};let w=v(a.holder).lerp(v(l.holder),c);const R=this.rigs.Wick,T=v("Wick"),P=R.body.localToWorld(new I(.54,.74,.34));let M=(a.holder==="Wick"?T:P).clone(),S=a.holder==="Wick"?0:1,D=a.holder==="Jack"?v("Jack"):d.body.localToWorld(new I(0,.27,.41));if(h?.kind==="pick"&&h.actor==="Wick")if(u<.44)M=P.clone().lerp(p,Ue(u,0,.4)),w=p.clone(),S=1-Ue(u,.34,.44);else{const A=Ue(u,.44,.96);M=Vn(p,T,A,.16),w=M.clone(),S=0}else if(h&&(h.kind==="transfer"||h.kind==="place")){const A=v(h.from),N=v(h.to);if(h.actor==="Wick"){const F=Ue(u,0,.65);w=Vn(A,N,F,.17),M=w.clone().lerp(P,Ue(u,.73,1)),S=Ue(u,.62,.76)}else if(h.to==="Jack")if(D=D.lerp(A,Ue(u,0,.36)),u>=.37){const F=Ue(u,.37,.96);D=A.clone().lerp(N,F),D.y+=Math.sin(F*Math.PI)*.09,w=D.clone()}else w=A;else if(h.actor==="Jack"){const F=this.socket;D=Vn(A,F,Ue(u,0,.62),.07),w=D.clone(),u>.62&&(w=F.clone().lerp(N,Ue(u,.62,.93))),u>.7&&(D=F.clone().lerp(v("Jack"),Ue(u,.7,.99)))}}R.arm.pose(R.body.worldToLocal(M.clone()),S,0),nc(d,D),d.collar.rotation.set(Math.PI/2,0,0),d.collar.rotateY(h?.kind==="repair"?u*Math.PI*5:0),d.body.updateMatrixWorld(!0);const O=this.rigs.Patch;if(O){const A=new I(.58,.73,.38);if(Zl(O,s,!!_&&a.fork_online===!1),h?.kind==="repair"){const N=d.collar.getWorldPosition(new I),F=O.body.worldToLocal(N),V=Ue(u,0,.16)*(1-Ue(u,.87,1));A.lerp(F,V),O.arm.pose(A,0,Math.PI*16*u)}else O.arm.pose(A,0,0)}if(this.mailbag.position.copy(w),this.shutter.scale.y=yt.lerp(a.shutter?.085:1,l.shutter?.085:1,c),this.shutter.position.y=1.83*(1-this.shutter.scale.y),this.gateLamp){const A=a.shutter?8575930:16414550;this.gateLamp.material.color.setHex(A),this.gateLamp.material.emissive.setHex(A)}for(const A of this.windows){const N=A.material;N.color.setHex(a.holder==="Socket"||a.holder===r.destination?16767625:4814194),N.emissive.setHex(a.holder==="Socket"||a.holder===r.destination?16034116:860189)}this.cameraShot(s,h),this.renderer.render(this.scene,this.camera)}}class Jm{canvas=document.createElement("canvas");ep;tick=0;focused=[];constructor(e){e.replaceChildren(this.canvas),this.canvas.style.width=this.canvas.style.height="100%",Yl(e,()=>this.draw(this.tick))}load(e){this.ep=e,this.draw(0)}composition(e){}view(e){this.draw(this.tick)}focus(e){this.focused=e}anchor(e){const t=this.ep;if(!t)return;const n=t.frames[Math.floor(this.tick)],r=t.layout,s=r.yard?.orders[0],o={...n.robots,...r.gates,Fork:n.robots.Jack,Shelf:r.shelf,Waybill:s?.desk??r.desk,Socket:s?.door??r.socket,"Mail lift":s?.lift??r.lift};e==="Bag"&&(e=n.holder===r.destination?"Socket":n.holder);const a=o[e];if(!a)return;const l=this.canvas.clientWidth,c=this.canvas.clientHeight,h=Math.min(l/(r.width+1),c/(r.depth+1));return{x:.5+(a[0]+.5-r.width/2)*h/l,y:.5+(a[1]+.5-r.depth/2)*h/c}}draw(e){this.tick=e;const t=this.ep;if(!t)return;const n=this.canvas,r=n.getContext("2d"),s=n.clientWidth,o=n.clientHeight;if(!s||!o)return;const a=ql(s,o),l=Math.round(s*a),c=Math.round(o*a);(n.width!==l||n.height!==c)&&(n.width=l,n.height=c),r.setTransform(n.width/s,0,0,n.height/o,0,0),r.clearRect(0,0,s,o);const{width:h,depth:u,wall:p,yard:d}=t.layout,_=Math.min(s/(h+1),o/(u+1)),g=(s-_*h)/2,m=(o-_*u)/2,f=t.frames[Math.floor(e)];r.translate(g,m),r.scale(_,_);const b=(v,w,R)=>{r.fillStyle=R,r.fillRect(v+.025,w+.025,.95,.95)};for(let v=0;v<h;v++)for(let w=0;w<u;w++)b(v,w,v===p?"#718270":v<p?"#c3c7a7":"#d6c9a4");if(d)for(const v of d.orders)b(...v.hatch,"#78b9a3"),b(...v.shelf,"#a67147"),b(...v.desk,"#6298a4"),b(...v.door,"#d7b375"),r.fillStyle=f.signal==="green"?"#8ed9ae":"#345864",r.fillRect(v.door[0]+1.1,v.row-1,.85,3);else b(6,2,f.shutter?"#d6c9a4":"#a67147"),b(6,5,"#78b9a3");t.layout.lift&&b(...t.layout.lift,"#72b69d"),t.layout.baggage&&b(...t.layout.baggage,"#ad9670");for(const v of t.layout.obstacles)b(...v,"#91764f");for(const v of this.focused){const w={...f.robots,...t.layout.gates,Socket:t.layout.socket,...t.layout.lift?{"Mail lift":t.layout.lift}:{}}[v];w&&(r.strokeStyle="#ffde82",r.lineWidth=.09,r.strokeRect(w[0]+.04,w[1]+.04,.92,.92))}r.textAlign="center",r.font=".42px sans-serif";for(const[v,w]of Object.entries(f.robots)){if(r.fillStyle={Wick:"#f5a04c",Skim:"#78c79f",Jack:"#73b0df",Patch:"#b699d7"}[d?.bodies[v]??v]??"#afd6c0",r.beginPath(),r.arc(w[0]+.5,w[1]+.5,.44,0,Math.PI*2),r.fill(),v==="Jack"&&f.fork_online===!1){r.strokeStyle="#b3311a",r.lineWidth=.08,r.beginPath();for(const R of[.17,.39])r.moveTo(w[0]+R,w[1]+.28),r.lineTo(w[0]+R+.2,w[1]-.03);r.stroke()}f.motion?.actor===v&&["pick","place","repair","transfer"].includes(f.motion.kind)&&(r.strokeStyle=v==="Patch"?"#a26dd2":"#b77432",r.lineWidth=.1,r.beginPath(),r.moveTo(w[0]+.57,w[1]+.43),r.lineTo(w[0]+.76,w[1]+.2),r.lineTo(w[0]+.66,w[1]-.04),r.stroke()),r.fillStyle="#14342a",r.fillText(v[0],w[0]+.5,w[1]+.64)}if(d){r.fillStyle="#573716",r.font="bold .48px sans-serif";for(const v of d.orders){const w=f.cargoByBag?.[v.id]?.holder,R=w===v.coach?v.door:w==="Mail lift"?v.lift:Object.entries(f.robots).find(([T])=>T===w)?.[1]??v.shelf;r.fillStyle="#ffdd85",r.fillRect(R[0]+.47,R[1]-.09,.63,.48),r.fillStyle="#573716",r.fillText(v.id,R[0]+.78,R[1]+.32)}return}const E=f.holder==="Mail lift"&&t.layout.lift?t.layout.lift:f.holder==="Shelf"?t.layout.shelf:f.holder==="Socket"||f.holder===t.layout.destination?t.layout.socket:f.robots[f.holder];E&&(r.fillStyle="#ffdc77",r.font=".68px Georgia",r.fillText(t.scenario.mission==="mail"?"✉":"☾",E[0]+.8,E[1]+.3))}}const Qm={Wick:"picker",Skim:"courier",Jack:"forklift",Patch:"mechanic"};function e0(i,e,t){const n=i.layout.yard,r=h=>`[data-op="${h}"]`,s=h=>r(n&&h!=="depart"?"47/"+h:h),o=(h,u,p,d=!1)=>({target:h,caption:u,selector:p,alert:d}),a=i.scenario.service_kit==="probe"?"inspection probe":"hex driver";if(e.kind==="order"&&!n)return t<.42?o("Bag","Bag on the shelf",r("bag")):t<.72?o("Socket","Destination coach",r("goal")):o("Waybill","Delivery slip",r("bill"));if(e.kind==="read"){if(e.targetRevision===1&&!n)return t<.34?o("Bag","Current holder",r("holder")):t<.69?o("Wick","Wick · long arm",r("pick")):o("Skim","Skim · low courier",r("cross"));if(e.targetRevision===2&&e.modelInput?.operators[n?"47/repair":"repair"]&&i.layout.starts.Patch)return o("Patch","Patch · "+a,r("tool"),a==="inspection probe")}if(e.kind==="fork fault")return t<.53?o("Fork","Jack · broken fork",n?s("load"):".guard",!0):t<.78?o("Fork","Loading blocked",s("load"),!0):t<.95?o("Fork","Departure waits",r("depart"),!0):o("Jack","Scanner still works",s("manifest"));if(e.kind==="rejected"&&e.feedback?.counterexample.toLowerCase().includes("repair"))return o("Patch","Tool cannot repair",s("repair"),!0);if(e.kind==="decision"||e.kind==="proposal"){const h=(e.targetRevision??e.planGraph?.revision??1)>1,u=e.proposal?.steps.map(p=>p.op)??e.new??[];if(h&&u.some(p=>p.endsWith("repair")))return o("Patch","Patch · "+a,s("repair"));if(h&&u.some(p=>p.endsWith("hoist")))return o("Mail lift","Station lift",s("hoist"));if(!h&&!n)return t<.4?o("Wick","Wick · pickup",r("collect")):t<.73?o("Waybill","Independent signature",r("manifest")):o("Socket","Both jobs must finish",r("depart"))}const l=e.planGraph?.nodes.filter(h=>h.state==="running")??[],c=e.op?e.planGraph?.nodes.find(h=>h.op===e.op):l[0];if(c){const h=c.op.split("/").at(-1);if(h==="depart")return o("Socket","Train released",r(c.op));if(h==="stage"&&(e.kind==="completed"||!n&&i.frames[Math.floor(e.tick)].holder==="Skim"))return o("Skim","Skim holds the bag",r(c.op));if(h==="hoist")return o("Mail lift","Station lift",r(c.op));if(c.actor&&c.actor in(n?.bodies??i.layout.starts))return o(c.actor,c.actor+" · "+(Qm[n?.bodies[c.actor]??c.actor]??c.label),r(c.op))}if(e.kind==="delivered")return o("Socket","Train released",r("depart"))}const Fs="http://www.w3.org/2000/svg";function fl(i,e,t=!1){for(const l of i.querySelectorAll(".paired"))l.classList.remove("paired","attention");if(i.querySelector(".paired-mark")?.remove(),!e)return!1;const n=i.querySelector(e),r=n?.querySelector("rect.plate");if(!n||!r)return!1;n.classList.add("paired"),t&&n.classList.add("attention");const s=document.createElementNS(Fs,"g");s.setAttribute("class","paired-mark"),s.setAttribute("transform",`translate(${r.x.baseVal.value+r.width.baseVal.value-4} ${r.y.baseVal.value+2})`),s.setAttribute("aria-hidden","true");const o=document.createElementNS(Fs,"circle");o.setAttribute("r","7");const a=document.createElementNS(Fs,t?"text":"circle");return t?(a.setAttribute("y","3.5"),a.setAttribute("text-anchor","middle"),a.textContent="!"):a.setAttribute("r","2.5"),s.append(o,a),n.append(s),!0}function en(i,e={}){const t=document.createElementNS("http://www.w3.org/2000/svg",i);for(const[n,r]of Object.entries(e))t.setAttribute(n,String(r));return t}function tr(i,e,t,n=""){const r=en("text",{x:i,y:e,class:n});return r.textContent=t,r}const Os={collect:[65,29],stage:[212,29],cross:[359,29],repair:[65,100],load:[212,100],hoist:[212,100],manifest:[65,171],depart:[359,171]};function t0(i){const e=i.planGraph,t=new Map,n=new Set;let r=0;function s(){const u=r++;return[65+u%3*147,242+Math.floor(u/3)*71]}for(const u of[...e.nodes].sort((p,d)=>parseInt(d.uid)-parseInt(p.uid))){const p=Os[u.op],d=p.join(",");t.set(u.uid,n.has(d)?s():p),n.add(d)}const o=i.issues?.find(u=>u.fact==="forks"),a=o&&n.has(Os.repair.join(","))?s():Os.repair,l=en("svg",{viewBox:"0 0 424 "+(206+Math.ceil(r/3)*71),role:"img","aria-label":"Committed action dependencies, revision "+e.revision}),c=en("defs");l.append(c);for(const[u,p]of[["normal","#92aaa3"],["done","#9bd0b7"],["stale","#ff9c87"],["added","#f4be72"]]){const d=en("marker",{id:"arrow-"+u,viewBox:"0 0 9 9",refX:8,refY:4.5,markerWidth:4,markerHeight:4,orient:"auto"});d.append(en("path",{d:"M0 0L9 4.5L0 9z",fill:p})),c.append(d)}const h=new Map(e.nodes.map(u=>[u.uid,u]));for(const u of e.edges){const p=h.get(u.source),d=h.get(u.target);if(!p||!d)continue;const[_,g]=t.get(p.uid),[m,f]=t.get(d.uid);let b;if(g===f)b="M"+(_+59)+" "+g+" H"+(m-61);else{const v=Math.sign(f-g),w=g+v*21,R=f-v*22,T=(w+R)/2;b="M"+_+" "+w+" C"+_+" "+T+" "+m+" "+T+" "+m+" "+R}const E=d.state==="stale"&&p.state==="stale"?"stale":p.state==="done"?"done":i.new?.includes(d.op)&&e.revision>1?"added":"normal";l.append(en("path",{d:b,class:"g-edge "+E,"marker-end":"url(#arrow-"+E+")"}))}if(o){const u=h.get(o.uid);if(u){const[p,d]=t.get(u.uid),[_,g]=a;l.append(en("path",{d:g===d?"M"+(_+59)+" "+g+" H"+(p-61):"M"+(_+59)+" "+g+" Q"+p+" "+g+" "+p+" "+(d+22),class:"g-edge stale","marker-end":"url(#arrow-stale)"}));const m=en("g",{class:"g-node guard"});m.append(en("rect",{class:"plate",x:_-58,y:g-20,width:116,height:40,rx:6}),tr(_-48,g-1,"Fork carriage"),tr(_-48,g+13,o.expected+" → "+o.actual,"who")),l.append(m)}}for(const u of e.nodes){const[p,d]=t.get(u.uid),_=e.revision>1&&i.new?.includes(u.op),g=en("g",{class:"g-node "+u.state+(_?" added":""),"data-op":u.op,"data-uid":u.uid,"data-state":u.state});g.append(en("rect",{class:"plate",x:p-58,y:d-20,width:116,height:40,rx:6}),tr(p-53,d-1,u.state==="done"?"✓":u.state==="stale"?"×":u.state==="running"?"▸":"·","state-icon"),tr(p-40,d-1,u.op==="stage"?"Hand off bag":u.op==="repair"?"Repair fork":u.label),tr(p-40,d+13,u.actor,"who"));const m=en("title");m.textContent=u.uid+" · "+u.actor+" · "+u.state,g.append(m),l.append(g)}return l}const n0="http://www.w3.org/2000/svg";function hn(i,e={}){const t=document.createElementNS(n0,i);for(const[n,r]of Object.entries(e))t.setAttribute(n,String(r));return t}function yn(i,e,t,n){const r=hn("text",{x:i,y:e,class:n});return r.textContent=t,r}function Qo(i,e){return hn("svg",{viewBox:"0 0 524 "+i,role:"img","aria-label":e})}function Mt(i,e,t,n,r,s,o,a=""){const l=hn("g",{class:"g-node "+o,"data-op":a});return l.append(hn("rect",{class:"plate",x:e,y:t,width:n,height:42,rx:7}),yn(e+10,t+18,r,"label"),yn(e+10,t+33,s,"who")),i.append(l),l}function Pi(i,e,t=""){i.append(hn("path",{d:e,class:"g-edge "+t}))}const Lo={collect:"Pick",stage:"Handoff",cross:"Hatch",load:"Load",manifest:"Sign",repair:"Repair",hoist:"Hoist",depart:"Release train"};function i0(i){const e=i.proposal?.steps??[];return{revision:i.targetRevision??1,nodes:e.map(t=>({uid:"draft/"+t.op,op:t.op,label:{collect:"Collect bag",stage:"Hand off bag",cross:"Cross hatch",manifest:"Sign waybill",repair:"Reseat collar",load:"Load coach",hoist:"Use mail lift",depart:"Release train"}[t.op]??Lo[t.op.split("/").at(-1)]??t.op,state:"proposed",actor:t.actor==="auto"?"Unassigned":t.actor})),edges:e.flatMap(t=>t.after.map(n=>({source:"draft/"+n,target:"draft/"+t.op})))}}function pl(i,e,t){const n=e.layout.yard,r=e.events[0],s=r.proof?.rows??[],o=Qo(n?204:194,"State read from the station graph"),a=i.modelInput;if(a&&(i.targetRevision??1)>1){const c=e.events.filter(g=>g.seq<i.seq&&g.issues?.length).at(-1)?.issues?.[0],h=a.operators[n?"47/repair":"repair"],u=Object.keys(h?.eligible_and_approach??{}),p=a.instrument_interfaces.find(g=>g.patient==="Jack")??a.instrument_interfaces[0],d=Object.entries(a.retained),_=c?.fact==="forks"?"Jack’s forks":c?.fact??"Observation";if(Pi(o,"M153 53 H195 M333 53 H375 M84 73 V131 H99 M254 131 H294","done"),Mt(o,8,30,147,_,String(c?.actual??"Updated"),"stale","observation"),Mt(o,197,30,138,"Station state","Graph read","read","state"),Mt(o,375,30,141,"Active goal","Release train","read","goal"),c?.fact==="forks"&&p){Mt(o,12,110,218,p.robot+" · "+p.instrument,"Mechanic’s mounted tool","read","tool");const g=u.includes(p.robot);Mt(o,295,110,214,g?"Fits the fork collar":"Cannot repair this fork",g?"Repair is possible":"Another way to load is needed",g?"done":"stale","fit")}else Mt(o,115,110,290,d.length+" pending jobs kept","These assignments can still run","done","retained");return o}if(a&&!n){const c=h=>Object.keys(a.operators[h]?.eligible_and_approach??{}).join(", ")||"None";return Pi(o,"M155 43 H197 M335 43 H375 M263 65 V115 M155 136 H197 M335 136 H375","done"),Mt(o,7,22,148,a.current_holder,"Current holder","done","holder"),Mt(o,197,22,138,"Bag 47","Mail to deliver","read","bag"),Mt(o,375,22,141,a.destination,"Destination","read","goal"),Mt(o,7,115,148,c("collect"),"Arm reaches shelf","read","pick"),Mt(o,197,115,138,"Robot abilities","Jobs their bodies can do","read","capabilities"),Mt(o,375,115,141,c("cross"),"Fits with the bag","read","cross"),o}if(n){for(const[c,h]of n.orders.entries()){const u=8+c*63,p=s.find(_=>_.order===h.id),d=a?.orders?.[h.id];Pi(o,`M140 ${u+20} H194 M331 ${u+20} H383`,"done"),Mt(o,6,u,136,"Bag "+h.id,d?.holder??t.cargoByBag?.[h.id].holder??"","done"),Mt(o,196,u,134,"Delivery route","From the bag’s address","read"),Mt(o,385,u,132,String(d?.coach??p?.coach??"Unresolved"),"Destination","read")}return o}const l=s[0];return l&&(Pi(o,"M140 70 H196 M327 70 H383 M263 91 V139","done"),Mt(o,6,50,134,String(t.holder),"Current holder","done","holder"),Mt(o,196,50,132,String(l.bag),"Mail to deliver","read","bag"),Mt(o,383,50,136,"Delivery route","Bag’s address","read","address"),Mt(o,193,137,138,String(l.bill),t.manifest??"unsigned","read","bill"),Mt(o,382,137,137,String(l.coach),"Destination","read","goal"),Pi(o,"M453 91 V137","done"),o.append(yn(145,61,"holds","edge-label"),yn(332,61,"sent to","edge-label"),yn(267,120,"covers","edge-label"),yn(457,120,"serves","edge-label")),i.kind==="read"&&o.setAttribute("class","reading")),o}function r0(i,e,t){const n=e.layout.yard.orders,r={collect:0,stage:1,manifest:1,cross:2,repair:2,load:3,hoist:3,depart:4},s=[64,64,64,64,90],o=18,a=7,l=getComputedStyle(document.documentElement),c=document.createElement("canvas").getContext("2d"),h="600 12px "+l.getPropertyValue("--sans").trim(),u="10px "+l.getPropertyValue("--mono").trim();function p(E,v){c.font=h;const w=Math.max(...["✓ ","× ","▸ "].map(R=>c.measureText(R+E).width));return c.font=u,Math.ceil(Math.max(w,c.measureText(v).width))+2*a}const d=new Map;for(const E of i.nodes){const v=E.op.split("/").at(-1),w=r[v]??2;s[w]=Math.max(s[w],p(Lo[v]??v,E.actor))}const _=[39];for(let E=1;E<s.length;E++)_.push(_[E-1]+s[E-1]+o);const g=Qo(274,"Three order branches and a shared departure");g.setAttribute("viewBox",`0 0 ${_[4]+s[4]+8} 274`);for(const E of i.nodes){const[v,w]=E.op.split("/"),R=w??v,T=r[R]??2,P=Math.max(0,n.findIndex(S=>S.id===v)),M=R==="depart"?116:17+P*85+(R==="manifest"||R==="repair"?36:0);d.set(E.uid,[_[T],M,s[T]])}const m=hn("defs"),f=hn("marker",{id:"yard-arrow",viewBox:"0 0 8 8",refX:7,refY:4,markerWidth:3.8,markerHeight:3.8,orient:"auto"});f.append(hn("path",{d:"M0 0L8 4L0 8z",fill:"context-stroke"})),m.append(f),g.append(m);const b=new Map(i.nodes.map(E=>[E.uid,E]));for(const E of i.edges){const v=d.get(E.source),w=d.get(E.target);if(!v||!w)continue;const R=b.get(E.source),T=b.get(E.target),P=v[1]+12,M=w[1]+12,S=v[0]+v[2],D=w[0]-3,O=D-(T.op==="depart"?18:6),N=R.op.endsWith("/manifest")&&T.op==="depart"?`M${S} ${P} v16 H${O-10} V${M} H${D}`:`M${S} ${P} H${O} V${M} H${D}`;Pi(g,N,R.state==="stale"&&T.state==="stale"?"stale":R.state==="done"?"done":T.state==="running"?"added":""),g.lastElementChild.setAttribute("marker-end","url(#yard-arrow)")}n.forEach((E,v)=>g.append(yn(4,33+v*85,E.id,"lane-id")));for(const E of i.nodes){const[v,w,R]=d.get(E.uid),T=E.op.split("/").at(-1),P=i.revision>1&&t.new?.includes(E.op),M=hn("g",{class:"g-node "+E.state+(P?" added":""),"data-op":E.op,"data-state":E.state,"data-uid":E.uid});M.append(hn("rect",{class:"plate",x:v,y:w,width:R,height:31,rx:5}),yn(v+a,w+13,(E.state==="done"?"✓ ":E.state==="stale"?"× ":E.state==="running"?"▸ ":"")+(Lo[T]??T),"yard-label"),yn(v+a,w+25,E.actor,"yard-who"));const S=hn("title");S.textContent=E.uid+" · "+E.actor+" · "+E.state,M.append(S),g.append(M)}return g}function s0(i,e,t){const n=e.kind==="rejected",r=e.kind==="proposal"?e:n?i.events.filter(c=>c.seq<e.seq&&c.kind==="proposal").at(-1):void 0,s=r?i0(r):e.planGraph,o=!!r;if(e.kind==="read")return pl(e,i,t);if(!s?.nodes.length){if(o){const c=Qo(120,"Empty proposal");return c.append(yn(16,65,"Hold requested","label")),c}return pl(e,i,t)}const a=i.layout.yard?r0(s,i,e):t0({...e,planGraph:s});o&&(a.classList.add("draft-graph"),a.setAttribute("aria-label",(n?"Returned draft for revision ":"Orchestrator proposal for revision ")+r.targetRevision));const l=n?i.events.filter(c=>c.seq<e.seq&&c.kind==="read").at(-1)?.modelInput:void 0;for(const c of a.querySelectorAll("[data-op]")){const h=c.getAttribute("data-op"),u=l?.operators[h??""];u&&Object.keys(u.eligible_and_approach).length===0&&c.classList.add("rejected-node"),e.retained?.includes(h??"")&&c.classList.add("retained"),e.issues?.some(p=>p.uid===c.getAttribute("data-uid"))&&c.classList.add("direct-fault"),e.kind==="completed"&&(e.uid===c.getAttribute("data-uid")||e.active?.includes(c.getAttribute("data-uid")??""))&&c.classList.add("just-done")}return a}const Fe=i=>document.getElementById(i),Je=(i,e)=>{Fe(i).textContent=e},ji=Fe("projector"),rc=Fe("sources"),ur=Fe("time");let Kt;try{Kt=new ns(Fe("world"))}catch{Kt=new Jm(Fe("world")),Fe("map").disabled=!0}const sc=new URLSearchParams(location.search),ks=sc.get("reel");let Ce,jt="",_t=0,Hi=!1,$r=!1,Un=0,Bs=0,Do="",Gi=-1,dr=!1,zr=!1,En,mn=!1,Di=!1,St;const ea=i=>Ce?.layout.yard?{order:1.4,read:.65,proposal:1.2,decision:1.1,"fork fault":1.6,hold:2,delivered:1}[i.kind]??0:{order:2.7,read:2.8,proposal:3.1,decision:3.3,"fork fault":4.2,violation:3.4,rejected:2.6,hold:2.5,delivered:1.8}[i.kind]??0,ta=i=>ea(i)>0,oc=i=>i.kind!=="completed",na=i=>i.events.filter(oc);function Ot(i){!i&&Hi&&Kt instanceof ns&&Kt.restoreDetail(),Hi=i,Je("play",i?"Ⅱ Pause":!mn&&Ce&&_t>=Ce.frames.length-1?"↻ Replay":jt==="post"?"▶ Play tour":"▶ Play run"),Fe("play").setAttribute("aria-label",i?"Pause":jt==="post"?"Play tour":"Play run")}function oi(){if(!Ce)return;Je("source",Di?"Orchestrator is planning…":mn?"Live run":jt?"Recorded model run":Ce.outcome?"Run complete":"Stopped"),Fe("source").classList.toggle("live",mn),Fe("stop").hidden=!mn;const i=Fe("database");i.hidden=!jt&&!Ce.outcome,i.href=jt?"./episodes/"+jt+".rl":"/api/episodes/"+Ce.id+"/graph"}function ac(){if(!Ce)return;ur.max=String(Ce.frames.length-1);const i=Fe("pins");if(i.replaceChildren(),!mn)for(const e of na(Ce).filter(ta)){const t=document.createElement("i");t.style.left=100*e.tick/(Ce.frames.length-1)+"%",i.append(t)}}function o0(i,e){const t=Ce,n=t.layout.yard,r=e.planGraph?.revision??0,s=e.kind,o=s==="proposal",a=s==="read",l=s==="decision",c=s==="fork fault"||s==="violation",h=s==="rejected",u=t.controller!=="azure",p=u?"Local planner":"Orchestrator",d=e.targetRevision??r,_=t.events.filter(K=>K.seq<=e.seq),g=_.filter(K=>K.kind==="read").at(-1),m=_.filter(K=>K.kind==="proposal"&&K.seq>(g?.seq??-1)).at(-1),f=g?.modelInput,b=e.planGraph?.nodes.length??0,E=t.frames[Math.floor(_t)],v=_.filter(K=>K.issues?.length).at(-1),w=E.cargoByBag,R=n?.orders.length??1,T=n?n.orders.filter(K=>w?.[K.id].holder===K.coach).length:+(E.holder===t.layout.destination),P=n?n.orders.filter(K=>w?.[K.id].manifest==="signed").length:+(E.manifest==="signed"),M=Fe("goals");M.replaceChildren();for(const[K,we]of[[n?T+" / "+R+" bags aboard":"Bag 47 aboard Coach B",T===R],[n?P+" / "+R+" bills signed":"Signed waybill",P===R]]){const He=document.createElement("span");He.textContent=K,He.title=K.toLowerCase().includes("bill")?"A waybill is the delivery slip. Signing it is an independent job.":"Each bag must reach the coach serving its address.",He.classList.toggle("achieved",we),M.append(He)}Je("author",p);const S=a||o?"model":l||h?"verify":s==="order"||c?"state":"execute";for(const K of Fe("pipeline").querySelectorAll("[data-role]"))K.classList.toggle("lit",K.dataset.role===S||a&&K.dataset.role==="state"),K.classList.toggle("pass",l&&K.dataset.role==="state");const D=e.planGraph?.nodes??[],O=D.filter(K=>K.state==="running");let A="Running the plan",N=i.title,F=i.reason??"",V="Executing the plan",q="Recorded state",G=n?T+" bags aboard · "+P+" waybills signed · Signal "+E.signal:"Bag 47 with "+E.holder+" · Waybill "+E.manifest+" · Forks "+(E.fork_online?"online":"offline");if(s==="order")A="Starting state",N=n?"One plan for nine robots.":"Which robot can do each job?",F=n?"Nine robots share three orders. Relate holds all six departure conditions and the assignments in one plan.":"The bag starts on the shelf. The train needs the bag aboard and a signed delivery slip before it can leave.",V="Initial station state";else if(a){A="Reading the knowledge graph",N=d>1?"Read what changed.":"What can each body do?",V=d>1?"Facts after the fault":"Facts available to the orchestrator",u&&(V="State sent to the planner");const K=f?.operators??{},we=n?"47/repair":"repair";if(d>1){F="The orchestrator reads the failed tool, the available equipment and the jobs that still have valid assignments.";const He=Object.keys(K[we]?.eligible_and_approach??{}),Xe=v?.issues?.[0];G=Xe?.fact==="forks"?"Forks "+Xe.actual+" · Eligible repairers: "+(He.join(", ")||"none"):(Xe?.fact??"Recorded state")+" · "+(Xe?.actual??"updated")}else F=n?"One graph read gathers all three orders, their goals and the workers eligible in each bay.":"Relate stores the starting scene, the goal and each body’s capabilities. The orchestrator reads which arm can reach the shelf and which courier fits the hatch.",G=n?f?.goal??G:"Holder: "+(f?.current_holder??E.holder)+" · Destination: "+(f?.destination??"")+" · Waybill "+(f?.world.manifest??E.manifest);q="What the graph returned"}else if(o){const K=e.proposal?.steps??[],we=K.reduce((Xe,je)=>Xe+je.after.length,0);A="Planning",N=d>1?"A plan for the remaining jobs.":"The orchestrator proposes a plan.",u&&d===1&&(N="The planner proposes a plan."),F=d>1?"The orchestrator submits the jobs that still need doing. The validator checks them against the updated graph.":"An arrow means the earlier action must finish first. Loading the bag and signing its delivery slip can happen independently.",V="Proposed action plan",q="What was proposed";const He=K.filter(Xe=>Xe.actor==="auto").length;G=K.length+" proposed actions · "+we+" prerequisites · "+(He?He+" assignments for the validator":"Robots selected by the "+p)}else if(l){A="Validation",N=r===1?"Which assignments pass?":"Reuse the surviving actions.";const K=e.new?.length??0,we=b-K;F=r===1?"The validator uses Z3 to check robot abilities and the order of the jobs. Relate stores the accepted assignments.":n?"Only the failed load and the shared departure need replacing. Both other orders keep their loading jobs.":e.new?.includes("repair")?"Patch’s driver fits the collar. The new load waits for the repair, and Jack keeps his waybill assignment.":i.reason??"The surviving actions keep their IDs.",V="Approved action plan",q="Validator approved",G=r===1?b+" stored actions · "+(e.planGraph?.edges.length??0)+" dependencies · Revision "+r:we+" original jobs kept · "+K+" new actions · Revision "+r}else if(c||h)A=h?"Plan check":"Equipment failure",N=h?e.feedback?.counterexample.includes("repair")?"This tool cannot repair the fork.":"Why did the plan fail?":s==="fork fault"?"Which jobs does the fork stop?":i.title,h&&(F=e.feedback?.counterexample?.includes("repair")?"The mechanic’s probe fits a test socket. No robot can repair this fork, so the orchestrator gets another attempt.":"The validator returns the failed check to the agent for another proposal."),V=h?"Rejected proposal":"Impact on the stored plan",q=h?"Why the plan failed":"Effect on the plan",v&&c?(G=(v.proof?.rows??[]).length+" jobs affected. "+(s==="fork fault"?"The delivery slip can still be signed.":"The orchestrator will read the updated conditions."),F=n&&s==="fork fault"?"Jack’s fork carriage went offline. Follow its loading job to the shared departure. The other two loading branches survive.":s==="fork fault"?"The forklift cannot load the coach. Departure needs that load. The same robot can still sign using its scanner.":i.reason??""):G=e.feedback?.counterexample??e.reason??G;else if(s==="hold")A="Departure held",V="Last stored revision";else if(E.signal==="green")A="Order fulfilled",V="Goal reached",q="Signal green",N=n?"All three orders are ready.":"The train can leave.",F=n?"All three bags are in their addressed coaches. All three waybills are signed. The shared train can leave.":"Bag 47 is aboard Coach B. Its waybill is signed. The departure signal is green.";else if(n)A="Running the plan",O.length?(N=O.length>1?O.length+" jobs under way.":O[0].label+".",F=O.map(K=>K.actor+" · "+K.label.toLowerCase()+(K.op.includes("/")?" "+K.op.split("/")[0]:"")).join("   /   ")):(N="Completed jobs are recorded.",F="The executor reads the updated graph for the next ready jobs."),G=O.length+" running · "+D.filter(K=>K.state==="done").length+" complete · Signal "+E.signal;else if(A="Updating the graph",["stage","cross"].includes(i.op??"")&&(N=i.op==="stage"?"Who holds the bag now?":"The crossing can start.",F=i.op==="stage"?"The executor records who holds the bag. The next action can use that fact as soon as the handoff is complete.":"The courier has the bag. The executor checks that the hatch is open and starts the crossing."),s==="assignment"&&i.op==="collect"){const K=i.proof?.rows[0];K&&(q="Why this robot qualifies",G=K.robot+" → "+K.body+" → "+K.skill+" · "+K.reach+" cm reach / "+K.height+" cm shelf")}else if(s==="assignment"&&i.op==="repair"){const K=i.proof?.rows[0];K&&(q="Tool fit",G=K.actor+" → "+K.instrument+" → "+K.port)}s==="assignment"&&!n&&(i.op==="manifest"&&(N="Signing is still possible.",F="The forklift’s scanner works independently of its broken fork."),i.op==="repair"&&(N="Repair the fork.",F="The mechanic’s hex driver fits the collar. Loading can resume after the repair."),i.op==="load"&&(N="Load the coach.",F="The executor checks the fork and the bag’s holder before the load."),i.op==="hoist"&&(N="Use the station lift.",F="The lift accepts the courier’s tray and feeds the destination coach."),i.op==="depart"&&(N="Check the departure conditions.",F="The bag must be aboard and its delivery slip signed.")),Je("chapter",A),Je("line",N),Je("narration",F),Je("graph-title",V),Je("revision",h?"":o?"Draft "+d:r?"Revision "+r:""),Je("evidence-label",q),Je("witness",G);const ne=s==="order"?"Parcel → ADDRESSED_TO → Route ← SERVES ← Coach":a?d>1&&v?.issues?.[0]?.fact==="forks"?"Robot → MOUNTS → Instrument → FITS → Interface":"Robot → INSTANCE_OF → Embodiment → HAS_SKILL → Skill":o?"propose_dag(steps)  ·  op / actor / after":h?"propose_dag → counterexample → revised proposal":l?r>1?"PlanRevision → REVISES → PlanRevision":"PlanRevision → INCLUDES → Action → ASSIGNED_TO → Robot":s==="fork fault"?"Event → INVALIDATES → Action ← DEPENDS_ON ← Action":i.op==="stage"||s==="transfer"?"Parcel → HELD_BY → current holder":"Action → DEPENDS_ON → finished prerequisite";Je("relation",ne),Fe("drawing").replaceChildren(s0(t,e,E)),Io="",Je("source-title",N),Je("proof-note","Recorded at step "+e.tick+". In an action plan, an arrow leads from the earlier job to the job it enables."),Je("query",e.proof?.query??""),Je("rows",JSON.stringify(e.proof?.rows??[],null,2));const le=_.filter(K=>K.kind==="decision"&&K.seq>=(g?.seq??-1)).at(-1);Je("raw",JSON.stringify({read_dispatch_graph:f,propose_dag:m?.proposal??le?.proposal,accepted_revision:le?.planGraph?.revision,bindings:le?.bindings,feedback:e.feedback},null,2))}const ia=Fe("world"),tn=document.createElement("div");tn.className="scene-link";tn.hidden=!0;const lc=document.createElement("i"),cc=document.createElement("span");tn.append(lc,cc);ia.append(tn);let Io="",Uo="";function ra(){const i=Uo?Kt.anchor(Uo):void 0;tn.hidden=!i||i.x<.025||i.x>.975||i.y<.035||i.y>.965,ia.classList.toggle("has-link",!tn.hidden),!(!i||tn.hidden)&&(tn.style.left=i.x*100+"%",tn.style.top=i.y*100+"%",tn.classList.toggle("leftwards",i.x>.61),tn.classList.toggle("below",i.y<.17))}new ResizeObserver(ra).observe(ia);function hc(i,e){if(!Ce)return;const t=e0(Ce,i,e),n=i.seq+"|"+(t?[t.target,t.caption,t.selector,t.alert].join("|"):"");n!==Io&&(Io=n,Uo=t&&fl(Fe("drawing"),t.selector,t.alert)?t.target:"",t||fl(Fe("drawing")),tn.classList.toggle("attention",!!t?.alert),lc.textContent=t?.alert?"!":"",cc.textContent=t?.caption??"",ra())}function nn(i){if(!Ce?.frames.length)return;_t=Math.min(Math.max(i,0),Ce.frames.length-1),ur.value=String(_t),Je("tick","Step "+Math.floor(_t));const e=Ce.events.filter(r=>r.tick<=_t),t=e.filter(oc).at(-1),n=e.at(-1);if(t&&n){const r=Ce.frames[Math.floor(_t)],s=t.seq+"-"+n.seq+"-"+r.holder+"-"+r.signal+"-"+(r.cargoByBag?Object.values(r.cargoByBag).map(o=>o.holder).join("|"):"");Do!==s&&(Do=s,St=t,o0(t,n)),hc(n,Math.min(1,_t-n.tick))}Kt.draw(_t),$r=Hi&&Un<=0,ra()}function uc(i,e){Ce=i,jt=e,Do="",St=void 0,_t=0,Un=0,Gi=-1,Fe("kit").value=i.scenario.service_kit??"driver",Fe("seed").value=String(i.scenario.seed),Fe("fault").value=i.scenario.mail_fault??(i.scenario.fork_fault?"forks":"none");const t=!!i.layout.yard;Fe("station").value=t?"yard":"mail";const n=Object.keys(i.layout.starts).length;Je("map-label",t?n+" robots · three orders":n+" robots · one order"+(i.scenario.service_kit==="probe"?" · inspection probe":"")),Je("mode","");for(const r of document.querySelectorAll("[data-station]"))r.setAttribute("aria-pressed",String(r.dataset.station==="yard"===t));Kt.composition(!1),Kt.load(i),ac(),oi(),nn(0),Ot(!1)}function sa(){return En?.abort(),En=new AbortController,mn=!1,Di=!1,Ot(!1),Je("status",""),En}function a0(i){if(!Ce||!i)return 0;if(i==="rejected"||i==="retry"){const e=Ce.events.find(t=>t.kind==="rejected");return!e||i==="rejected"?e?.tick??0:Ce.events.find(t=>t.seq>e.seq&&t.kind==="proposal")?.tick??e.tick}if(i==="fault")return(Ce.events.find(e=>["fork fault","violation"].includes(e.kind))?.tick??0)+.6;if(i==="replan")return Ce.events.find(e=>e.kind==="decision"&&e.planGraph?.revision===2)?.tick??0;if(["read","proposal","reread","redraft"].includes(i)){const e=i==="reread"?"read":i==="redraft"?"proposal":i;return Ce.events.find(t=>t.kind===e&&(t.targetRevision??1)===(i==="reread"||i==="redraft"?2:1))?.tick??0}return i==="plan"?Ce.events.find(e=>e.kind==="decision")?.tick??0:Number.isFinite(Number(i))?Number(i):0}async function dc(i,e){Ce&&!!Ce.layout.yard!=!!i.layout.yard&&!matchMedia("(prefers-reduced-motion: reduce)").matches?document.startViewTransition?await document.startViewTransition(e).finished:(e(),await Fe("spread").animate([{opacity:.2,transform:"scale(1.025)"},{opacity:1,transform:"none"}],{duration:500}).finished):e()}async function is(i,e){const t=sa();try{const n=await fetch("/api/recordings/"+i,{signal:t.signal,cache:"no-cache"});if(!n.ok)throw Error("The recorded episode could not be opened.");const r=await n.json();if(En!==t||(await dc(r,()=>{t===En&&(uc(r,i),nn(a0(e)),Ot(!1))}),t!==En))return;const o=new URLSearchParams({reel:i});e&&o.set("at",e),history.replaceState(null,"","?"+o)}catch(n){t===En&&Je("status",n.message)}}async function l0(){const i=sa(),e=Fe("fault").value;ji.close(),mn=!0,oi(),Je("status","Opening a new Relate store…");let t=!1,n=!1;try{const r=await fetch("/api/live?pace=0.34&controller="+Fe("controller").value,{method:"POST",signal:i.signal,headers:{"Content-Type":"application/json"},body:JSON.stringify({mission:Fe("station").value,seed:Number(Fe("seed").value),service_kit:Fe("kit").value,mail_fault:e==="none"?null:e,fork_fault:!1,jam:!0,parcel_cm:18})});if(!r.ok||!r.body||!r.headers.get("content-type")?.includes("ndjson"))throw Error("Fresh runs require the local Moonmail server.");const s=async l=>{if(En===i){if(l.type==="error")throw Error(l.message);l.type==="init"?await dc(l,()=>{En===i&&(t=!0,uc({...l,outcome:""},""),Je("status",""),Zr(),Ot(!0),history.replaceState(null,"",location.pathname))}):l.type==="thinking"?(Di=!0,oi()):l.type==="update"&&Ce?(l.events.length&&(Di=!1),Ce.frames.push(...l.frames),Ce.events.push(...l.events),ur.max=String(Ce.frames.length-1),oi(),nn(_t)):l.type==="complete"&&Ce&&(n=!0,mn=!1,Di=!1,Ce.frames=l.episode.frames,Ce.events=l.episode.events,Ce.outcome=l.episode.outcome,oi(),ac(),nn(_t))}},o=r.body.pipeThrough(new TextDecoderStream).getReader();let a="";try{for(;;){const l=await o.read();if(l.done)break;const c=(a+l.value).split(`
`);a=c.pop();for(const h of c)h.trim()&&await s(JSON.parse(h))}a.trim()&&await s(JSON.parse(a))}finally{o.releaseLock()}if(!n)throw Error("The run ended before the final commit.")}catch(r){i===En&&(mn=!1,Di=!1,oi(),Ot(!1),Je("status",r.message),t&&Je("source","Live interrupted"))}}function Zr(){St&&ta(St)&&St.seq!==Gi&&(Un=ea(St),$r=!1,Kt instanceof ns&&Kt.restoreDetail(),Gi=St.seq)}Fe("play").onclick=()=>{if(Ce){if(Hi){Ot(!1);return}!mn&&_t>=Ce.frames.length-1&&(nn(0),Gi=-1),dr=jt==="post",Zr(),Ot(!0)}};Fe("next").onclick=()=>{if(!Ce)return;Ot(!1),Un=0;const i=na(Ce).find(e=>e.tick>_t+.01);nn(i?i.tick+(i.kind==="fork fault"?.45:0):Ce.frames.length-1),Ot(!1)};ur.oninput=()=>{Ot(!1),Un=0,Gi=-1,nn(Number(ur.value)),Ot(!1)};let zs=0;async function fc(){const i=++zs,e=Fe("store-inspector");if(e.hidden=!jt&&!Ce?.outcome,e.hidden||!Ce)return;const t=jt?"/api/recordings/"+jt:"/api/episodes/"+Ce.id,n=Fe("store-rows");n.replaceChildren(),Je("store-query",""),Je("store-status","Reading the Relate database…");try{const r=await fetch(t+"/evidence/"+Fe("store-question").value,{cache:"no-store"});if(!r.ok)throw Error("The database could not be read.");const s=await r.json();if(i!==zs)return;if(Je("store-query",s.query),Je("store-status",s.rows.length+(s.rows.length===1?" row":" rows")+" from "+s.database),s.rows.length){const o=Object.keys(s.rows[0]),a=n.createTHead().insertRow();for(const c of o){const h=document.createElement("th");h.scope="col",h.textContent=c.replaceAll("_"," "),a.append(h)}const l=n.createTBody();for(const c of s.rows){const h=l.insertRow();for(const u of o)h.insertCell().textContent=String(c[u])}}}catch{i===zs&&Je("store-status","The saved database could not be read.")}}Fe("store-question").onchange=()=>{fc()};Fe("proof").onclick=()=>{Ot(!1),rc.showModal(),Fe("store-question").value=St?.kind==="delivered"?"departure":St?.issues?.length||St?.kind==="fork fault"?"fault":"tools",fc()};Fe("options").onclick=()=>{Ot(!1),ji.showModal()};document.querySelectorAll("dialog .close").forEach(i=>i.onclick=()=>i.closest("dialog").close());document.querySelectorAll("[data-reel]").forEach(i=>i.onclick=()=>{ji.close(),dr=!1,is(i.dataset.reel,i.dataset.reel==="yard"?null:_t>2?"replan":null)});document.querySelectorAll("[data-station]").forEach(i=>i.onclick=()=>{dr=!1,is(i.dataset.station,null)});Fe("map").onclick=()=>{zr=!zr,Kt.view(zr),Je("map",zr?"Follow camera":"Overhead camera"),ji.close(),nn(_t)};Fe("launch").onsubmit=i=>{i.preventDefault(),l0()};Fe("stop").onclick=()=>{sa(),oi(),ji.close(),Je("status","Live run stopped.")};document.addEventListener("keydown",i=>{ji.open||rc.open||["INPUT","SELECT","BUTTON"].includes(i.target.tagName)||(i.code==="Space"?(i.preventDefault(),Fe("play").click()):i.key==="ArrowRight"&&(i.preventDefault(),Fe("next").click()))});function pc(i){Hi&&$r&&Kt instanceof ns&&Kt.noteMovingFrame(i-Bs),$r=!1;const e=Math.min(.32,(i-Bs)/1e3);if(Bs=i,Hi&&Ce)if(Un>0){if(Un=Math.max(0,Un-e),St){const t=1-Un/ea(St);if(St.kind==="fork fault"){const n=t<.03?0:t<.065?.18:t<.13?.37:.6;_t<St.tick+n&&nn(St.tick+n)}if(St.kind==="read"&&St.targetRevision===1&&!Ce.layout.yard){const n=Math.min(.44,Math.floor(t*20)/20);_t<St.tick+n&&nn(St.tick+n)}hc(St,t)}}else if(_t<Ce.frames.length-1){const t=na(Ce).find(r=>ta(r)&&r.tick>_t+1e-5&&r.seq!==Gi),n=_t+e*(Ce.layout.yard?6.4:2.65);t&&n>=t.tick?(nn(t.tick),Zr()):nn(n)}else mn||(Ot(!1),dr&&jt==="post"&&(dr=!1,is("yard",null).then(()=>{jt==="yard"&&(Zr(),Ot(!0))})));requestAnimationFrame(pc)}async function c0(){await is(ks==="yard"?"yard":ks==="post-probe"||ks==="probe"?"post-probe":"post",sc.get("at"));try{const i=await fetch("/api/live");if(i.ok){const{controllers:e}=await i.json();Array.isArray(e)&&e.includes("azure")&&Fe("controller").add(new Option("LLM orchestrator","azure"))}}catch{}}c0();requestAnimationFrame(pc);
