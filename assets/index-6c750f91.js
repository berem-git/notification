(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ur(e,t){const n=new Set(e.split(","));return t?r=>n.has(r.toLowerCase()):r=>n.has(r)}const j={},it=[],ie=()=>{},Pi=()=>!1,en=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),fr=e=>e.startsWith("onUpdate:"),Z=Object.assign,dr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Ri=Object.prototype.hasOwnProperty,M=(e,t)=>Ri.call(e,t),O=Array.isArray,at=e=>tn(e)==="[object Map]",zs=e=>tn(e)==="[object Set]",x=e=>typeof e=="function",G=e=>typeof e=="string",ht=e=>typeof e=="symbol",K=e=>e!==null&&typeof e=="object",Gs=e=>(K(e)||x(e))&&x(e.then)&&x(e.catch),Js=Object.prototype.toString,tn=e=>Js.call(e),Ni=e=>tn(e).slice(8,-1),Ys=e=>tn(e)==="[object Object]",hr=e=>G(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,wt=ur(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),nn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},$i=/-(\w)/g,ut=nn(e=>e.replace($i,(t,n)=>n?n.toUpperCase():"")),Bi=/\B([A-Z])/g,pt=nn(e=>e.replace(Bi,"-$1").toLowerCase()),Xs=nn(e=>e.charAt(0).toUpperCase()+e.slice(1)),En=nn(e=>e?`on${Xs(e)}`:""),ke=(e,t)=>!Object.is(e,t),In=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},zt=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},ki=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Yr;const Zs=()=>Yr||(Yr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function pr(e){if(O(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=G(r)?Hi(r):pr(r);if(s)for(const o in s)t[o]=s[o]}return t}else if(G(e)||K(e))return e}const Li=/;(?![^(]*\))/g,Fi=/:([^]+)/,ji=/\/\*[^]*?\*\//g;function Hi(e){const t={};return e.replace(ji,"").split(Li).forEach(n=>{if(n){const r=n.split(Fi);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function gr(e){let t="";if(G(e))t=e;else if(O(e))for(let n=0;n<e.length;n++){const r=gr(e[n]);r&&(t+=r+" ")}else if(K(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Vi="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ki=ur(Vi);function Qs(e){return!!e||e===""}const Xr=e=>G(e)?e:e==null?"":O(e)||K(e)&&(e.toString===Js||!x(e.toString))?JSON.stringify(e,eo,2):String(e),eo=(e,t)=>t&&t.__v_isRef?eo(e,t.value):at(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],o)=>(n[vn(r,o)+" =>"]=s,n),{})}:zs(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>vn(n))}:ht(t)?vn(t):K(t)&&!O(t)&&!Ys(t)?String(t):t,vn=(e,t="")=>{var n;return ht(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let le;class Ui{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=le,!t&&le&&(this.index=(le.scopes||(le.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=le;try{return le=this,t()}finally{le=n}}}on(){le=this}off(){le=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Wi(e,t=le){t&&t.active&&t.effects.push(e)}function qi(){return le}let ze;class mr{constructor(t,n,r,s){this.fn=t,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Wi(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,tt();for(let t=0;t<this._depsLength;t++){const n=this.deps[t];if(n.computed&&(zi(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),nt()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=Me,n=ze;try{return Me=!0,ze=this,this._runnings++,Zr(this),this.fn()}finally{Qr(this),this._runnings--,ze=n,Me=t}}stop(){var t;this.active&&(Zr(this),Qr(this),(t=this.onStop)==null||t.call(this),this.active=!1)}}function zi(e){return e.value}function Zr(e){e._trackId++,e._depsLength=0}function Qr(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)to(e.deps[t],e);e.deps.length=e._depsLength}}function to(e,t){const n=e.get(t);n!==void 0&&t._trackId!==n&&(e.delete(t),e.size===0&&e.cleanup())}let Me=!0,Un=0;const no=[];function tt(){no.push(Me),Me=!1}function nt(){const e=no.pop();Me=e===void 0?!0:e}function br(){Un++}function _r(){for(Un--;!Un&&Wn.length;)Wn.shift()()}function ro(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const r=e.deps[e._depsLength];r!==t?(r&&to(r,e),e.deps[e._depsLength++]=t):e._depsLength++}}const Wn=[];function so(e,t,n){br();for(const r of e.keys()){let s;r._dirtyLevel<t&&(s??(s=e.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=t),r._shouldSchedule&&(s??(s=e.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&Wn.push(r.scheduler)))}_r()}const oo=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},qn=new WeakMap,Ge=Symbol(""),zn=Symbol("");function re(e,t,n){if(Me&&ze){let r=qn.get(e);r||qn.set(e,r=new Map);let s=r.get(n);s||r.set(n,s=oo(()=>r.delete(n))),ro(ze,s)}}function Se(e,t,n,r,s,o){const i=qn.get(e);if(!i)return;let a=[];if(t==="clear")a=[...i.values()];else if(n==="length"&&O(e)){const l=Number(r);i.forEach((f,d)=>{(d==="length"||!ht(d)&&d>=l)&&a.push(f)})}else switch(n!==void 0&&a.push(i.get(n)),t){case"add":O(e)?hr(n)&&a.push(i.get("length")):(a.push(i.get(Ge)),at(e)&&a.push(i.get(zn)));break;case"delete":O(e)||(a.push(i.get(Ge)),at(e)&&a.push(i.get(zn)));break;case"set":at(e)&&a.push(i.get(Ge));break}br();for(const l of a)l&&so(l,4);_r()}const Gi=ur("__proto__,__v_isRef,__isVue"),io=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ht)),es=Ji();function Ji(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=R(this);for(let o=0,i=this.length;o<i;o++)re(r,"get",o+"");const s=r[t](...n);return s===-1||s===!1?r[t](...n.map(R)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){tt(),br();const r=R(this)[t].apply(this,n);return _r(),nt(),r}}),e}function Yi(e){const t=R(this);return re(t,"has",e),t.hasOwnProperty(e)}class ao{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){const s=this._isReadonly,o=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return o;if(n==="__v_raw")return r===(s?o?la:fo:o?uo:lo).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const i=O(t);if(!s){if(i&&M(es,n))return Reflect.get(es,n,r);if(n==="hasOwnProperty")return Yi}const a=Reflect.get(t,n,r);return(ht(n)?io.has(n):Gi(n))||(s||re(t,"get",n),o)?a:se(a)?i&&hr(n)?a:a.value:K(a)?s?ho(a):Er(a):a}}class co extends ao{constructor(t=!1){super(!1,t)}set(t,n,r,s){let o=t[n];if(!this._isShallow){const l=ft(o);if(!Gt(r)&&!ft(r)&&(o=R(o),r=R(r)),!O(t)&&se(o)&&!se(r))return l?!1:(o.value=r,!0)}const i=O(t)&&hr(n)?Number(n)<t.length:M(t,n),a=Reflect.set(t,n,r,s);return t===R(s)&&(i?ke(r,o)&&Se(t,"set",n,r):Se(t,"add",n,r)),a}deleteProperty(t,n){const r=M(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&Se(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!ht(n)||!io.has(n))&&re(t,"has",n),r}ownKeys(t){return re(t,"iterate",O(t)?"length":Ge),Reflect.ownKeys(t)}}class Xi extends ao{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Zi=new co,Qi=new Xi,ea=new co(!0),yr=e=>e,rn=e=>Reflect.getPrototypeOf(e);function Bt(e,t,n=!1,r=!1){e=e.__v_raw;const s=R(e),o=R(t);n||(ke(t,o)&&re(s,"get",t),re(s,"get",o));const{has:i}=rn(s),a=r?yr:n?vr:St;if(i.call(s,t))return a(e.get(t));if(i.call(s,o))return a(e.get(o));e!==s&&e.get(t)}function kt(e,t=!1){const n=this.__v_raw,r=R(n),s=R(e);return t||(ke(e,s)&&re(r,"has",e),re(r,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function Lt(e,t=!1){return e=e.__v_raw,!t&&re(R(e),"iterate",Ge),Reflect.get(e,"size",e)}function ts(e){e=R(e);const t=R(this);return rn(t).has.call(t,e)||(t.add(e),Se(t,"add",e,e)),this}function ns(e,t){t=R(t);const n=R(this),{has:r,get:s}=rn(n);let o=r.call(n,e);o||(e=R(e),o=r.call(n,e));const i=s.call(n,e);return n.set(e,t),o?ke(t,i)&&Se(n,"set",e,t):Se(n,"add",e,t),this}function rs(e){const t=R(this),{has:n,get:r}=rn(t);let s=n.call(t,e);s||(e=R(e),s=n.call(t,e)),r&&r.call(t,e);const o=t.delete(e);return s&&Se(t,"delete",e,void 0),o}function ss(){const e=R(this),t=e.size!==0,n=e.clear();return t&&Se(e,"clear",void 0,void 0),n}function Ft(e,t){return function(r,s){const o=this,i=o.__v_raw,a=R(i),l=t?yr:e?vr:St;return!e&&re(a,"iterate",Ge),i.forEach((f,d)=>r.call(s,l(f),l(d),o))}}function jt(e,t,n){return function(...r){const s=this.__v_raw,o=R(s),i=at(o),a=e==="entries"||e===Symbol.iterator&&i,l=e==="keys"&&i,f=s[e](...r),d=n?yr:t?vr:St;return!t&&re(o,"iterate",l?zn:Ge),{next(){const{value:w,done:v}=f.next();return v?{value:w,done:v}:{value:a?[d(w[0]),d(w[1])]:d(w),done:v}},[Symbol.iterator](){return this}}}}function Ce(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function ta(){const e={get(o){return Bt(this,o)},get size(){return Lt(this)},has:kt,add:ts,set:ns,delete:rs,clear:ss,forEach:Ft(!1,!1)},t={get(o){return Bt(this,o,!1,!0)},get size(){return Lt(this)},has:kt,add:ts,set:ns,delete:rs,clear:ss,forEach:Ft(!1,!0)},n={get(o){return Bt(this,o,!0)},get size(){return Lt(this,!0)},has(o){return kt.call(this,o,!0)},add:Ce("add"),set:Ce("set"),delete:Ce("delete"),clear:Ce("clear"),forEach:Ft(!0,!1)},r={get(o){return Bt(this,o,!0,!0)},get size(){return Lt(this,!0)},has(o){return kt.call(this,o,!0)},add:Ce("add"),set:Ce("set"),delete:Ce("delete"),clear:Ce("clear"),forEach:Ft(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{e[o]=jt(o,!1,!1),n[o]=jt(o,!0,!1),t[o]=jt(o,!1,!0),r[o]=jt(o,!0,!0)}),[e,n,t,r]}const[na,ra,sa,oa]=ta();function wr(e,t){const n=t?e?oa:sa:e?ra:na;return(r,s,o)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(M(n,s)&&s in r?n:r,s,o)}const ia={get:wr(!1,!1)},aa={get:wr(!1,!0)},ca={get:wr(!0,!1)},lo=new WeakMap,uo=new WeakMap,fo=new WeakMap,la=new WeakMap;function ua(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function fa(e){return e.__v_skip||!Object.isExtensible(e)?0:ua(Ni(e))}function Er(e){return ft(e)?e:Ir(e,!1,Zi,ia,lo)}function da(e){return Ir(e,!1,ea,aa,uo)}function ho(e){return Ir(e,!0,Qi,ca,fo)}function Ir(e,t,n,r,s){if(!K(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=s.get(e);if(o)return o;const i=fa(e);if(i===0)return e;const a=new Proxy(e,i===2?r:n);return s.set(e,a),a}function ct(e){return ft(e)?ct(e.__v_raw):!!(e&&e.__v_isReactive)}function ft(e){return!!(e&&e.__v_isReadonly)}function Gt(e){return!!(e&&e.__v_isShallow)}function po(e){return ct(e)||ft(e)}function R(e){const t=e&&e.__v_raw;return t?R(t):e}function go(e){return Object.isExtensible(e)&&zt(e,"__v_skip",!0),e}const St=e=>K(e)?Er(e):e,vr=e=>K(e)?ho(e):e;class mo{constructor(t,n,r,s){this.getter=t,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new mr(()=>t(this._value),()=>Vt(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const t=R(this);return(!t._cacheable||t.effect.dirty)&&ke(t._value,t._value=t.effect.run())&&Vt(t,4),bo(t),t.effect._dirtyLevel>=2&&Vt(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function ha(e,t,n=!1){let r,s;const o=x(e);return o?(r=e,s=ie):(r=e.get,s=e.set),new mo(r,s,o||!s,n)}function bo(e){var t;Me&&ze&&(e=R(e),ro(ze,(t=e.dep)!=null?t:e.dep=oo(()=>e.dep=void 0,e instanceof mo?e:void 0)))}function Vt(e,t=4,n){e=R(e);const r=e.dep;r&&so(r,t)}function se(e){return!!(e&&e.__v_isRef===!0)}function pa(e){return ga(e,!1)}function ga(e,t){return se(e)?e:new ma(e,t)}class ma{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:R(t),this._value=n?t:St(t)}get value(){return bo(this),this._value}set value(t){const n=this.__v_isShallow||Gt(t)||ft(t);t=n?t:R(t),ke(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:St(t),Vt(this,4))}}function ba(e){return se(e)?e.value:e}const _a={get:(e,t,n)=>ba(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return se(s)&&!se(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function _o(e){return ct(e)?e:new Proxy(e,_a)}/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Pe(e,t,n,r){try{return r?e(...r):e()}catch(s){sn(s,t,n)}}function de(e,t,n,r){if(x(e)){const o=Pe(e,t,n,r);return o&&Gs(o)&&o.catch(i=>{sn(i,t,n)}),o}const s=[];for(let o=0;o<e.length;o++)s.push(de(e[o],t,n,r));return s}function sn(e,t,n,r=!0){const s=t?t.vnode:null;if(t){let o=t.parent;const i=t.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;o;){const f=o.ec;if(f){for(let d=0;d<f.length;d++)if(f[d](e,i,a)===!1)return}o=o.parent}const l=t.appContext.config.errorHandler;if(l){Pe(l,null,10,[e,i,a]);return}}ya(e,n,s,r)}function ya(e,t,n,r=!0){console.error(e)}let Tt=!1,Gn=!1;const Y=[];let ye=0;const lt=[];let Oe=null,We=0;const yo=Promise.resolve();let Sr=null;function wa(e){const t=Sr||yo;return e?t.then(this?e.bind(this):e):t}function Ea(e){let t=ye+1,n=Y.length;for(;t<n;){const r=t+n>>>1,s=Y[r],o=At(s);o<e||o===e&&s.pre?t=r+1:n=r}return t}function Tr(e){(!Y.length||!Y.includes(e,Tt&&e.allowRecurse?ye+1:ye))&&(e.id==null?Y.push(e):Y.splice(Ea(e.id),0,e),wo())}function wo(){!Tt&&!Gn&&(Gn=!0,Sr=yo.then(Io))}function Ia(e){const t=Y.indexOf(e);t>ye&&Y.splice(t,1)}function va(e){O(e)?lt.push(...e):(!Oe||!Oe.includes(e,e.allowRecurse?We+1:We))&&lt.push(e),wo()}function os(e,t,n=Tt?ye+1:0){for(;n<Y.length;n++){const r=Y[n];if(r&&r.pre){if(e&&r.id!==e.uid)continue;Y.splice(n,1),n--,r()}}}function Eo(e){if(lt.length){const t=[...new Set(lt)].sort((n,r)=>At(n)-At(r));if(lt.length=0,Oe){Oe.push(...t);return}for(Oe=t,We=0;We<Oe.length;We++)Oe[We]();Oe=null,We=0}}const At=e=>e.id==null?1/0:e.id,Sa=(e,t)=>{const n=At(e)-At(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Io(e){Gn=!1,Tt=!0,Y.sort(Sa);const t=ie;try{for(ye=0;ye<Y.length;ye++){const n=Y[ye];n&&n.active!==!1&&Pe(n,null,14)}}finally{ye=0,Y.length=0,Eo(),Tt=!1,Sr=null,(Y.length||lt.length)&&Io()}}function Ta(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||j;let s=n;const o=t.startsWith("update:"),i=o&&t.slice(7);if(i&&i in r){const d=`${i==="modelValue"?"model":i}Modifiers`,{number:w,trim:v}=r[d]||j;v&&(s=n.map(A=>G(A)?A.trim():A)),w&&(s=n.map(ki))}let a,l=r[a=En(t)]||r[a=En(ut(t))];!l&&o&&(l=r[a=En(pt(t))]),l&&de(l,e,6,s);const f=r[a+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,de(f,e,6,s)}}function vo(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const o=e.emits;let i={},a=!1;if(!x(e)){const l=f=>{const d=vo(f,t,!0);d&&(a=!0,Z(i,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!o&&!a?(K(e)&&r.set(e,null),null):(O(o)?o.forEach(l=>i[l]=null):Z(i,o),K(e)&&r.set(e,i),i)}function on(e,t){return!e||!en(t)?!1:(t=t.slice(2).replace(/Once$/,""),M(e,t[0].toLowerCase()+t.slice(1))||M(e,pt(t))||M(e,t))}let we=null,an=null;function Jt(e){const t=we;return we=e,an=e&&e.type.__scopeId||null,t}function So(e){an=e}function To(){an=null}function Aa(e,t=we,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&gs(-1);const o=Jt(t);let i;try{i=e(...s)}finally{Jt(o),r._d&&gs(1)}return i};return r._n=!0,r._c=!0,r._d=!0,r}function Sn(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:o,propsOptions:[i],slots:a,attrs:l,emit:f,render:d,renderCache:w,data:v,setupState:A,ctx:H,inheritAttrs:N}=e;let W,U;const he=Jt(e);try{if(n.shapeFlag&4){const q=s||r,ae=q;W=_e(d.call(ae,q,w,o,A,v,H)),U=l}else{const q=t;W=_e(q.length>1?q(o,{attrs:l,slots:a,emit:f}):q(o,null)),U=t.props?l:Ca(l)}}catch(q){vt.length=0,sn(q,e,1),W=Re(Ct)}let B=W;if(U&&N!==!1){const q=Object.keys(U),{shapeFlag:ae}=B;q.length&&ae&7&&(i&&q.some(fr)&&(U=Oa(U,i)),B=dt(B,U))}return n.dirs&&(B=dt(B),B.dirs=B.dirs?B.dirs.concat(n.dirs):n.dirs),n.transition&&(B.transition=n.transition),W=B,Jt(he),W}const Ca=e=>{let t;for(const n in e)(n==="class"||n==="style"||en(n))&&((t||(t={}))[n]=e[n]);return t},Oa=(e,t)=>{const n={};for(const r in e)(!fr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function xa(e,t,n){const{props:r,children:s,component:o}=e,{props:i,children:a,patchFlag:l}=t,f=o.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?is(r,i,f):!!i;if(l&8){const d=t.dynamicProps;for(let w=0;w<d.length;w++){const v=d[w];if(i[v]!==r[v]&&!on(f,v))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===i?!1:r?i?is(r,i,f):!0:!!i;return!1}function is(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const o=r[s];if(t[o]!==e[o]&&!on(n,o))return!0}return!1}function Da({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const Ma=Symbol.for("v-ndc"),Pa=e=>e.__isSuspense;function Ra(e,t){t&&t.pendingBranch?O(e)?t.effects.push(...e):t.effects.push(e):va(e)}const Na=Symbol.for("v-scx"),$a=()=>Ut(Na),Ht={};function Tn(e,t,n){return Ao(e,t,n)}function Ao(e,t,{immediate:n,deep:r,flush:s,once:o,onTrack:i,onTrigger:a}=j){if(t&&o){const P=t;t=(...Ee)=>{P(...Ee),ae()}}const l=te,f=P=>r===!0?P:ot(P,r===!1?1:void 0);let d,w=!1,v=!1;if(se(e)?(d=()=>e.value,w=Gt(e)):ct(e)?(d=()=>f(e),w=!0):O(e)?(v=!0,w=e.some(P=>ct(P)||Gt(P)),d=()=>e.map(P=>{if(se(P))return P.value;if(ct(P))return f(P);if(x(P))return Pe(P,l,2)})):x(e)?t?d=()=>Pe(e,l,2):d=()=>(A&&A(),de(e,l,3,[H])):d=ie,t&&r){const P=d;d=()=>ot(P())}let A,H=P=>{A=B.onStop=()=>{Pe(P,l,4),A=B.onStop=void 0}},N;if(fn)if(H=ie,t?n&&de(t,l,3,[d(),v?[]:void 0,H]):d(),s==="sync"){const P=$a();N=P.__watcherHandles||(P.__watcherHandles=[])}else return ie;let W=v?new Array(e.length).fill(Ht):Ht;const U=()=>{if(!(!B.active||!B.dirty))if(t){const P=B.run();(r||w||(v?P.some((Ee,pe)=>ke(Ee,W[pe])):ke(P,W)))&&(A&&A(),de(t,l,3,[P,W===Ht?void 0:v&&W[0]===Ht?[]:W,H]),W=P)}else B.run()};U.allowRecurse=!!t;let he;s==="sync"?he=U:s==="post"?he=()=>ne(U,l&&l.suspense):(U.pre=!0,l&&(U.id=l.uid),he=()=>Tr(U));const B=new mr(d,ie,he),q=qi(),ae=()=>{B.stop(),q&&dr(q.effects,B)};return t?n?U():W=B.run():s==="post"?ne(B.run.bind(B),l&&l.suspense):B.run(),N&&N.push(ae),ae}function Ba(e,t,n){const r=this.proxy,s=G(e)?e.includes(".")?Co(r,e):()=>r[e]:e.bind(r,r);let o;x(t)?o=t:(o=t.handler,n=t);const i=Mt(this),a=Ao(s,o.bind(r),n);return i(),a}function Co(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function ot(e,t,n=0,r){if(!K(e)||e.__v_skip)return e;if(t&&t>0){if(n>=t)return e;n++}if(r=r||new Set,r.has(e))return e;if(r.add(e),se(e))ot(e.value,t,n,r);else if(O(e))for(let s=0;s<e.length;s++)ot(e[s],t,n,r);else if(zs(e)||at(e))e.forEach(s=>{ot(s,t,n,r)});else if(Ys(e))for(const s in e)ot(e[s],t,n,r);return e}function Ve(e,t,n,r){const s=e.dirs,o=t&&t.dirs;for(let i=0;i<s.length;i++){const a=s[i];o&&(a.oldValue=o[i].value);let l=a.dir[r];l&&(tt(),de(l,n,8,[e.el,a,e,t]),nt())}}const Kt=e=>!!e.type.__asyncLoader,Oo=e=>e.type.__isKeepAlive;function ka(e,t){xo(e,"a",t)}function La(e,t){xo(e,"da",t)}function xo(e,t,n=te){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(cn(t,r,n),n){let s=n.parent;for(;s&&s.parent;)Oo(s.parent.vnode)&&Fa(r,t,n,s),s=s.parent}}function Fa(e,t,n,r){const s=cn(t,e,r,!0);Do(()=>{dr(r[t],s)},n)}function cn(e,t,n=te,r=!1){if(n){const s=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;tt();const a=Mt(n),l=de(t,n,e,i);return a(),nt(),l});return r?s.unshift(o):s.push(o),o}}const Ae=e=>(t,n=te)=>(!fn||e==="sp")&&cn(e,(...r)=>t(...r),n),ja=Ae("bm"),Ha=Ae("m"),Va=Ae("bu"),Ka=Ae("u"),Ua=Ae("bum"),Do=Ae("um"),Wa=Ae("sp"),qa=Ae("rtg"),za=Ae("rtc");function Ga(e,t=te){cn("ec",e,t)}const Jn=e=>e?Ko(e)?xr(e)||e.proxy:Jn(e.parent):null,Et=Z(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Jn(e.parent),$root:e=>Jn(e.root),$emit:e=>e.emit,$options:e=>Ar(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,Tr(e.update)}),$nextTick:e=>e.n||(e.n=wa.bind(e.proxy)),$watch:e=>Ba.bind(e)}),An=(e,t)=>e!==j&&!e.__isScriptSetup&&M(e,t),Ja={get({_:e},t){const{ctx:n,setupState:r,data:s,props:o,accessCache:i,type:a,appContext:l}=e;let f;if(t[0]!=="$"){const A=i[t];if(A!==void 0)switch(A){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return o[t]}else{if(An(r,t))return i[t]=1,r[t];if(s!==j&&M(s,t))return i[t]=2,s[t];if((f=e.propsOptions[0])&&M(f,t))return i[t]=3,o[t];if(n!==j&&M(n,t))return i[t]=4,n[t];Yn&&(i[t]=0)}}const d=Et[t];let w,v;if(d)return t==="$attrs"&&re(e,"get",t),d(e);if((w=a.__cssModules)&&(w=w[t]))return w;if(n!==j&&M(n,t))return i[t]=4,n[t];if(v=l.config.globalProperties,M(v,t))return v[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:o}=e;return An(s,t)?(s[t]=n,!0):r!==j&&M(r,t)?(r[t]=n,!0):M(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:o}},i){let a;return!!n[i]||e!==j&&M(e,i)||An(t,i)||(a=o[0])&&M(a,i)||M(r,i)||M(Et,i)||M(s.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:M(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function as(e){return O(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Yn=!0;function Ya(e){const t=Ar(e),n=e.proxy,r=e.ctx;Yn=!1,t.beforeCreate&&cs(t.beforeCreate,e,"bc");const{data:s,computed:o,methods:i,watch:a,provide:l,inject:f,created:d,beforeMount:w,mounted:v,beforeUpdate:A,updated:H,activated:N,deactivated:W,beforeDestroy:U,beforeUnmount:he,destroyed:B,unmounted:q,render:ae,renderTracked:P,renderTriggered:Ee,errorCaptured:pe,serverPrefetch:mn,expose:Fe,inheritAttrs:mt,components:Pt,directives:Rt,filters:bn}=t;if(f&&Xa(f,r,null),i)for(const V in i){const k=i[V];x(k)&&(r[V]=k.bind(n))}if(s){const V=s.call(n,n);K(V)&&(e.data=Er(V))}if(Yn=!0,o)for(const V in o){const k=o[V],je=x(k)?k.bind(n,n):x(k.get)?k.get.bind(n,n):ie,Nt=!x(k)&&x(k.set)?k.set.bind(n):ie,He=Oc({get:je,set:Nt});Object.defineProperty(r,V,{enumerable:!0,configurable:!0,get:()=>He.value,set:ge=>He.value=ge})}if(a)for(const V in a)Mo(a[V],r,n,V);if(l){const V=x(l)?l.call(n):l;Reflect.ownKeys(V).forEach(k=>{rc(k,V[k])})}d&&cs(d,e,"c");function Q(V,k){O(k)?k.forEach(je=>V(je.bind(n))):k&&V(k.bind(n))}if(Q(ja,w),Q(Ha,v),Q(Va,A),Q(Ka,H),Q(ka,N),Q(La,W),Q(Ga,pe),Q(za,P),Q(qa,Ee),Q(Ua,he),Q(Do,q),Q(Wa,mn),O(Fe))if(Fe.length){const V=e.exposed||(e.exposed={});Fe.forEach(k=>{Object.defineProperty(V,k,{get:()=>n[k],set:je=>n[k]=je})})}else e.exposed||(e.exposed={});ae&&e.render===ie&&(e.render=ae),mt!=null&&(e.inheritAttrs=mt),Pt&&(e.components=Pt),Rt&&(e.directives=Rt)}function Xa(e,t,n=ie){O(e)&&(e=Xn(e));for(const r in e){const s=e[r];let o;K(s)?"default"in s?o=Ut(s.from||r,s.default,!0):o=Ut(s.from||r):o=Ut(s),se(o)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:i=>o.value=i}):t[r]=o}}function cs(e,t,n){de(O(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Mo(e,t,n,r){const s=r.includes(".")?Co(n,r):()=>n[r];if(G(e)){const o=t[e];x(o)&&Tn(s,o)}else if(x(e))Tn(s,e.bind(n));else if(K(e))if(O(e))e.forEach(o=>Mo(o,t,n,r));else{const o=x(e.handler)?e.handler.bind(n):t[e.handler];x(o)&&Tn(s,o,e)}}function Ar(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:i}}=e.appContext,a=o.get(t);let l;return a?l=a:!s.length&&!n&&!r?l=t:(l={},s.length&&s.forEach(f=>Yt(l,f,i,!0)),Yt(l,t,i)),K(t)&&o.set(t,l),l}function Yt(e,t,n,r=!1){const{mixins:s,extends:o}=t;o&&Yt(e,o,n,!0),s&&s.forEach(i=>Yt(e,i,n,!0));for(const i in t)if(!(r&&i==="expose")){const a=Za[i]||n&&n[i];e[i]=a?a(e[i],t[i]):t[i]}return e}const Za={data:ls,props:us,emits:us,methods:yt,computed:yt,beforeCreate:ee,created:ee,beforeMount:ee,mounted:ee,beforeUpdate:ee,updated:ee,beforeDestroy:ee,beforeUnmount:ee,destroyed:ee,unmounted:ee,activated:ee,deactivated:ee,errorCaptured:ee,serverPrefetch:ee,components:yt,directives:yt,watch:ec,provide:ls,inject:Qa};function ls(e,t){return t?e?function(){return Z(x(e)?e.call(this,this):e,x(t)?t.call(this,this):t)}:t:e}function Qa(e,t){return yt(Xn(e),Xn(t))}function Xn(e){if(O(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ee(e,t){return e?[...new Set([].concat(e,t))]:t}function yt(e,t){return e?Z(Object.create(null),e,t):t}function us(e,t){return e?O(e)&&O(t)?[...new Set([...e,...t])]:Z(Object.create(null),as(e),as(t??{})):t}function ec(e,t){if(!e)return t;if(!t)return e;const n=Z(Object.create(null),e);for(const r in t)n[r]=ee(e[r],t[r]);return n}function Po(){return{app:null,config:{isNativeTag:Pi,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let tc=0;function nc(e,t){return function(r,s=null){x(r)||(r=Z({},r)),s!=null&&!K(s)&&(s=null);const o=Po(),i=new WeakSet;let a=!1;const l=o.app={_uid:tc++,_component:r,_props:s,_container:null,_context:o,_instance:null,version:xc,get config(){return o.config},set config(f){},use(f,...d){return i.has(f)||(f&&x(f.install)?(i.add(f),f.install(l,...d)):x(f)&&(i.add(f),f(l,...d))),l},mixin(f){return o.mixins.includes(f)||o.mixins.push(f),l},component(f,d){return d?(o.components[f]=d,l):o.components[f]},directive(f,d){return d?(o.directives[f]=d,l):o.directives[f]},mount(f,d,w){if(!a){const v=Re(r,s);return v.appContext=o,w===!0?w="svg":w===!1&&(w=void 0),d&&t?t(v,f):e(v,f,w),a=!0,l._container=f,f.__vue_app__=l,xr(v.component)||v.component.proxy}},unmount(){a&&(e(null,l._container),delete l._container.__vue_app__)},provide(f,d){return o.provides[f]=d,l},runWithContext(f){const d=It;It=l;try{return f()}finally{It=d}}};return l}}let It=null;function rc(e,t){if(te){let n=te.provides;const r=te.parent&&te.parent.provides;r===n&&(n=te.provides=Object.create(r)),n[e]=t}}function Ut(e,t,n=!1){const r=te||we;if(r||It){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:It._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&x(t)?t.call(r&&r.proxy):t}}function sc(e,t,n,r=!1){const s={},o={};zt(o,un,1),e.propsDefaults=Object.create(null),Ro(e,t,s,o);for(const i in e.propsOptions[0])i in s||(s[i]=void 0);n?e.props=r?s:da(s):e.type.props?e.props=s:e.props=o,e.attrs=o}function oc(e,t,n,r){const{props:s,attrs:o,vnode:{patchFlag:i}}=e,a=R(s),[l]=e.propsOptions;let f=!1;if((r||i>0)&&!(i&16)){if(i&8){const d=e.vnode.dynamicProps;for(let w=0;w<d.length;w++){let v=d[w];if(on(e.emitsOptions,v))continue;const A=t[v];if(l)if(M(o,v))A!==o[v]&&(o[v]=A,f=!0);else{const H=ut(v);s[H]=Zn(l,a,H,A,e,!1)}else A!==o[v]&&(o[v]=A,f=!0)}}}else{Ro(e,t,s,o)&&(f=!0);let d;for(const w in a)(!t||!M(t,w)&&((d=pt(w))===w||!M(t,d)))&&(l?n&&(n[w]!==void 0||n[d]!==void 0)&&(s[w]=Zn(l,a,w,void 0,e,!0)):delete s[w]);if(o!==a)for(const w in o)(!t||!M(t,w))&&(delete o[w],f=!0)}f&&Se(e,"set","$attrs")}function Ro(e,t,n,r){const[s,o]=e.propsOptions;let i=!1,a;if(t)for(let l in t){if(wt(l))continue;const f=t[l];let d;s&&M(s,d=ut(l))?!o||!o.includes(d)?n[d]=f:(a||(a={}))[d]=f:on(e.emitsOptions,l)||(!(l in r)||f!==r[l])&&(r[l]=f,i=!0)}if(o){const l=R(n),f=a||j;for(let d=0;d<o.length;d++){const w=o[d];n[w]=Zn(s,l,w,f[w],e,!M(f,w))}}return i}function Zn(e,t,n,r,s,o){const i=e[n];if(i!=null){const a=M(i,"default");if(a&&r===void 0){const l=i.default;if(i.type!==Function&&!i.skipFactory&&x(l)){const{propsDefaults:f}=s;if(n in f)r=f[n];else{const d=Mt(s);r=f[n]=l.call(null,t),d()}}else r=l}i[0]&&(o&&!a?r=!1:i[1]&&(r===""||r===pt(n))&&(r=!0))}return r}function No(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const o=e.props,i={},a=[];let l=!1;if(!x(e)){const d=w=>{l=!0;const[v,A]=No(w,t,!0);Z(i,v),A&&a.push(...A)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!o&&!l)return K(e)&&r.set(e,it),it;if(O(o))for(let d=0;d<o.length;d++){const w=ut(o[d]);fs(w)&&(i[w]=j)}else if(o)for(const d in o){const w=ut(d);if(fs(w)){const v=o[d],A=i[w]=O(v)||x(v)?{type:v}:Z({},v);if(A){const H=ps(Boolean,A.type),N=ps(String,A.type);A[0]=H>-1,A[1]=N<0||H<N,(H>-1||M(A,"default"))&&a.push(w)}}}const f=[i,a];return K(e)&&r.set(e,f),f}function fs(e){return e[0]!=="$"&&!wt(e)}function ds(e){return e===null?"null":typeof e=="function"?e.name||"":typeof e=="object"&&e.constructor&&e.constructor.name||""}function hs(e,t){return ds(e)===ds(t)}function ps(e,t){return O(t)?t.findIndex(n=>hs(n,e)):x(t)&&hs(t,e)?0:-1}const $o=e=>e[0]==="_"||e==="$stable",Cr=e=>O(e)?e.map(_e):[_e(e)],ic=(e,t,n)=>{if(t._n)return t;const r=Aa((...s)=>Cr(t(...s)),n);return r._c=!1,r},Bo=(e,t,n)=>{const r=e._ctx;for(const s in e){if($o(s))continue;const o=e[s];if(x(o))t[s]=ic(s,o,r);else if(o!=null){const i=Cr(o);t[s]=()=>i}}},ko=(e,t)=>{const n=Cr(t);e.slots.default=()=>n},ac=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=R(t),zt(t,"_",n)):Bo(t,e.slots={})}else e.slots={},t&&ko(e,t);zt(e.slots,un,1)},cc=(e,t,n)=>{const{vnode:r,slots:s}=e;let o=!0,i=j;if(r.shapeFlag&32){const a=t._;a?n&&a===1?o=!1:(Z(s,t),!n&&a===1&&delete s._):(o=!t.$stable,Bo(t,s)),i=t}else t&&(ko(e,t),i={default:1});if(o)for(const a in s)!$o(a)&&i[a]==null&&delete s[a]};function Qn(e,t,n,r,s=!1){if(O(e)){e.forEach((v,A)=>Qn(v,t&&(O(t)?t[A]:t),n,r,s));return}if(Kt(r)&&!s)return;const o=r.shapeFlag&4?xr(r.component)||r.component.proxy:r.el,i=s?null:o,{i:a,r:l}=e,f=t&&t.r,d=a.refs===j?a.refs={}:a.refs,w=a.setupState;if(f!=null&&f!==l&&(G(f)?(d[f]=null,M(w,f)&&(w[f]=null)):se(f)&&(f.value=null)),x(l))Pe(l,a,12,[i,d]);else{const v=G(l),A=se(l);if(v||A){const H=()=>{if(e.f){const N=v?M(w,l)?w[l]:d[l]:l.value;s?O(N)&&dr(N,o):O(N)?N.includes(o)||N.push(o):v?(d[l]=[o],M(w,l)&&(w[l]=d[l])):(l.value=[o],e.k&&(d[e.k]=l.value))}else v?(d[l]=i,M(w,l)&&(w[l]=i)):A&&(l.value=i,e.k&&(d[e.k]=i))};i?(H.id=-1,ne(H,n)):H()}}}const ne=Ra;function lc(e){return uc(e)}function uc(e,t){const n=Zs();n.__VUE__=!0;const{insert:r,remove:s,patchProp:o,createElement:i,createText:a,createComment:l,setText:f,setElementText:d,parentNode:w,nextSibling:v,setScopeId:A=ie,insertStaticContent:H}=e,N=(c,u,h,p=null,g=null,_=null,E=void 0,b=null,y=!!u.dynamicChildren)=>{if(c===u)return;c&&!_t(c,u)&&(p=$t(c),ge(c,g,_,!0),c=null),u.patchFlag===-2&&(y=!1,u.dynamicChildren=null);const{type:m,ref:I,shapeFlag:T}=u;switch(m){case ln:W(c,u,h,p);break;case Ct:U(c,u,h,p);break;case On:c==null&&he(u,h,p,E);break;case ue:Pt(c,u,h,p,g,_,E,b,y);break;default:T&1?ae(c,u,h,p,g,_,E,b,y):T&6?Rt(c,u,h,p,g,_,E,b,y):(T&64||T&128)&&m.process(c,u,h,p,g,_,E,b,y,rt)}I!=null&&g&&Qn(I,c&&c.ref,_,u||c,!u)},W=(c,u,h,p)=>{if(c==null)r(u.el=a(u.children),h,p);else{const g=u.el=c.el;u.children!==c.children&&f(g,u.children)}},U=(c,u,h,p)=>{c==null?r(u.el=l(u.children||""),h,p):u.el=c.el},he=(c,u,h,p)=>{[c.el,c.anchor]=H(c.children,u,h,p,c.el,c.anchor)},B=({el:c,anchor:u},h,p)=>{let g;for(;c&&c!==u;)g=v(c),r(c,h,p),c=g;r(u,h,p)},q=({el:c,anchor:u})=>{let h;for(;c&&c!==u;)h=v(c),s(c),c=h;s(u)},ae=(c,u,h,p,g,_,E,b,y)=>{u.type==="svg"?E="svg":u.type==="math"&&(E="mathml"),c==null?P(u,h,p,g,_,E,b,y):mn(c,u,g,_,E,b,y)},P=(c,u,h,p,g,_,E,b)=>{let y,m;const{props:I,shapeFlag:T,transition:S,dirs:C}=c;if(y=c.el=i(c.type,_,I&&I.is,I),T&8?d(y,c.children):T&16&&pe(c.children,y,null,p,g,Cn(c,_),E,b),C&&Ve(c,null,p,"created"),Ee(y,c,c.scopeId,E,p),I){for(const $ in I)$!=="value"&&!wt($)&&o(y,$,null,I[$],_,c.children,p,g,Ie);"value"in I&&o(y,"value",null,I.value,_),(m=I.onVnodeBeforeMount)&&be(m,p,c)}C&&Ve(c,null,p,"beforeMount");const D=fc(g,S);D&&S.beforeEnter(y),r(y,u,h),((m=I&&I.onVnodeMounted)||D||C)&&ne(()=>{m&&be(m,p,c),D&&S.enter(y),C&&Ve(c,null,p,"mounted")},g)},Ee=(c,u,h,p,g)=>{if(h&&A(c,h),p)for(let _=0;_<p.length;_++)A(c,p[_]);if(g){let _=g.subTree;if(u===_){const E=g.vnode;Ee(c,E,E.scopeId,E.slotScopeIds,g.parent)}}},pe=(c,u,h,p,g,_,E,b,y=0)=>{for(let m=y;m<c.length;m++){const I=c[m]=b?xe(c[m]):_e(c[m]);N(null,I,u,h,p,g,_,E,b)}},mn=(c,u,h,p,g,_,E)=>{const b=u.el=c.el;let{patchFlag:y,dynamicChildren:m,dirs:I}=u;y|=c.patchFlag&16;const T=c.props||j,S=u.props||j;let C;if(h&&Ke(h,!1),(C=S.onVnodeBeforeUpdate)&&be(C,h,u,c),I&&Ve(u,c,h,"beforeUpdate"),h&&Ke(h,!0),m?Fe(c.dynamicChildren,m,b,h,p,Cn(u,g),_):E||k(c,u,b,null,h,p,Cn(u,g),_,!1),y>0){if(y&16)mt(b,u,T,S,h,p,g);else if(y&2&&T.class!==S.class&&o(b,"class",null,S.class,g),y&4&&o(b,"style",T.style,S.style,g),y&8){const D=u.dynamicProps;for(let $=0;$<D.length;$++){const F=D[$],z=T[F],ce=S[F];(ce!==z||F==="value")&&o(b,F,z,ce,g,c.children,h,p,Ie)}}y&1&&c.children!==u.children&&d(b,u.children)}else!E&&m==null&&mt(b,u,T,S,h,p,g);((C=S.onVnodeUpdated)||I)&&ne(()=>{C&&be(C,h,u,c),I&&Ve(u,c,h,"updated")},p)},Fe=(c,u,h,p,g,_,E)=>{for(let b=0;b<u.length;b++){const y=c[b],m=u[b],I=y.el&&(y.type===ue||!_t(y,m)||y.shapeFlag&70)?w(y.el):h;N(y,m,I,null,p,g,_,E,!0)}},mt=(c,u,h,p,g,_,E)=>{if(h!==p){if(h!==j)for(const b in h)!wt(b)&&!(b in p)&&o(c,b,h[b],null,E,u.children,g,_,Ie);for(const b in p){if(wt(b))continue;const y=p[b],m=h[b];y!==m&&b!=="value"&&o(c,b,m,y,E,u.children,g,_,Ie)}"value"in p&&o(c,"value",h.value,p.value,E)}},Pt=(c,u,h,p,g,_,E,b,y)=>{const m=u.el=c?c.el:a(""),I=u.anchor=c?c.anchor:a("");let{patchFlag:T,dynamicChildren:S,slotScopeIds:C}=u;C&&(b=b?b.concat(C):C),c==null?(r(m,h,p),r(I,h,p),pe(u.children||[],h,I,g,_,E,b,y)):T>0&&T&64&&S&&c.dynamicChildren?(Fe(c.dynamicChildren,S,h,g,_,E,b),(u.key!=null||g&&u===g.subTree)&&Lo(c,u,!0)):k(c,u,h,I,g,_,E,b,y)},Rt=(c,u,h,p,g,_,E,b,y)=>{u.slotScopeIds=b,c==null?u.shapeFlag&512?g.ctx.activate(u,h,p,E,y):bn(u,h,p,g,_,E,y):Ur(c,u,y)},bn=(c,u,h,p,g,_,E)=>{const b=c.component=Ic(c,p,g);if(Oo(c)&&(b.ctx.renderer=rt),vc(b),b.asyncDep){if(g&&g.registerDep(b,Q),!c.el){const y=b.subTree=Re(Ct);U(null,y,u,h)}}else Q(b,c,u,h,g,_,E)},Ur=(c,u,h)=>{const p=u.component=c.component;if(xa(c,u,h))if(p.asyncDep&&!p.asyncResolved){V(p,u,h);return}else p.next=u,Ia(p.update),p.effect.dirty=!0,p.update();else u.el=c.el,p.vnode=u},Q=(c,u,h,p,g,_,E)=>{const b=()=>{if(c.isMounted){let{next:I,bu:T,u:S,parent:C,vnode:D}=c;{const st=Fo(c);if(st){I&&(I.el=D.el,V(c,I,E)),st.asyncDep.then(()=>{c.isUnmounted||b()});return}}let $=I,F;Ke(c,!1),I?(I.el=D.el,V(c,I,E)):I=D,T&&In(T),(F=I.props&&I.props.onVnodeBeforeUpdate)&&be(F,C,I,D),Ke(c,!0);const z=Sn(c),ce=c.subTree;c.subTree=z,N(ce,z,w(ce.el),$t(ce),c,g,_),I.el=z.el,$===null&&Da(c,z.el),S&&ne(S,g),(F=I.props&&I.props.onVnodeUpdated)&&ne(()=>be(F,C,I,D),g)}else{let I;const{el:T,props:S}=u,{bm:C,m:D,parent:$}=c,F=Kt(u);if(Ke(c,!1),C&&In(C),!F&&(I=S&&S.onVnodeBeforeMount)&&be(I,$,u),Ke(c,!0),T&&wn){const z=()=>{c.subTree=Sn(c),wn(T,c.subTree,c,g,null)};F?u.type.__asyncLoader().then(()=>!c.isUnmounted&&z()):z()}else{const z=c.subTree=Sn(c);N(null,z,h,p,c,g,_),u.el=z.el}if(D&&ne(D,g),!F&&(I=S&&S.onVnodeMounted)){const z=u;ne(()=>be(I,$,z),g)}(u.shapeFlag&256||$&&Kt($.vnode)&&$.vnode.shapeFlag&256)&&c.a&&ne(c.a,g),c.isMounted=!0,u=h=p=null}},y=c.effect=new mr(b,ie,()=>Tr(m),c.scope),m=c.update=()=>{y.dirty&&y.run()};m.id=c.uid,Ke(c,!0),m()},V=(c,u,h)=>{u.component=c;const p=c.vnode.props;c.vnode=u,c.next=null,oc(c,u.props,p,h),cc(c,u.children,h),tt(),os(c),nt()},k=(c,u,h,p,g,_,E,b,y=!1)=>{const m=c&&c.children,I=c?c.shapeFlag:0,T=u.children,{patchFlag:S,shapeFlag:C}=u;if(S>0){if(S&128){Nt(m,T,h,p,g,_,E,b,y);return}else if(S&256){je(m,T,h,p,g,_,E,b,y);return}}C&8?(I&16&&Ie(m,g,_),T!==m&&d(h,T)):I&16?C&16?Nt(m,T,h,p,g,_,E,b,y):Ie(m,g,_,!0):(I&8&&d(h,""),C&16&&pe(T,h,p,g,_,E,b,y))},je=(c,u,h,p,g,_,E,b,y)=>{c=c||it,u=u||it;const m=c.length,I=u.length,T=Math.min(m,I);let S;for(S=0;S<T;S++){const C=u[S]=y?xe(u[S]):_e(u[S]);N(c[S],C,h,null,g,_,E,b,y)}m>I?Ie(c,g,_,!0,!1,T):pe(u,h,p,g,_,E,b,y,T)},Nt=(c,u,h,p,g,_,E,b,y)=>{let m=0;const I=u.length;let T=c.length-1,S=I-1;for(;m<=T&&m<=S;){const C=c[m],D=u[m]=y?xe(u[m]):_e(u[m]);if(_t(C,D))N(C,D,h,null,g,_,E,b,y);else break;m++}for(;m<=T&&m<=S;){const C=c[T],D=u[S]=y?xe(u[S]):_e(u[S]);if(_t(C,D))N(C,D,h,null,g,_,E,b,y);else break;T--,S--}if(m>T){if(m<=S){const C=S+1,D=C<I?u[C].el:p;for(;m<=S;)N(null,u[m]=y?xe(u[m]):_e(u[m]),h,D,g,_,E,b,y),m++}}else if(m>S)for(;m<=T;)ge(c[m],g,_,!0),m++;else{const C=m,D=m,$=new Map;for(m=D;m<=S;m++){const oe=u[m]=y?xe(u[m]):_e(u[m]);oe.key!=null&&$.set(oe.key,m)}let F,z=0;const ce=S-D+1;let st=!1,zr=0;const bt=new Array(ce);for(m=0;m<ce;m++)bt[m]=0;for(m=C;m<=T;m++){const oe=c[m];if(z>=ce){ge(oe,g,_,!0);continue}let me;if(oe.key!=null)me=$.get(oe.key);else for(F=D;F<=S;F++)if(bt[F-D]===0&&_t(oe,u[F])){me=F;break}me===void 0?ge(oe,g,_,!0):(bt[me-D]=m+1,me>=zr?zr=me:st=!0,N(oe,u[me],h,null,g,_,E,b,y),z++)}const Gr=st?dc(bt):it;for(F=Gr.length-1,m=ce-1;m>=0;m--){const oe=D+m,me=u[oe],Jr=oe+1<I?u[oe+1].el:p;bt[m]===0?N(null,me,h,Jr,g,_,E,b,y):st&&(F<0||m!==Gr[F]?He(me,h,Jr,2):F--)}}},He=(c,u,h,p,g=null)=>{const{el:_,type:E,transition:b,children:y,shapeFlag:m}=c;if(m&6){He(c.component.subTree,u,h,p);return}if(m&128){c.suspense.move(u,h,p);return}if(m&64){E.move(c,u,h,rt);return}if(E===ue){r(_,u,h);for(let T=0;T<y.length;T++)He(y[T],u,h,p);r(c.anchor,u,h);return}if(E===On){B(c,u,h);return}if(p!==2&&m&1&&b)if(p===0)b.beforeEnter(_),r(_,u,h),ne(()=>b.enter(_),g);else{const{leave:T,delayLeave:S,afterLeave:C}=b,D=()=>r(_,u,h),$=()=>{T(_,()=>{D(),C&&C()})};S?S(_,D,$):$()}else r(_,u,h)},ge=(c,u,h,p=!1,g=!1)=>{const{type:_,props:E,ref:b,children:y,dynamicChildren:m,shapeFlag:I,patchFlag:T,dirs:S}=c;if(b!=null&&Qn(b,null,h,c,!0),I&256){u.ctx.deactivate(c);return}const C=I&1&&S,D=!Kt(c);let $;if(D&&($=E&&E.onVnodeBeforeUnmount)&&be($,u,c),I&6)Mi(c.component,h,p);else{if(I&128){c.suspense.unmount(h,p);return}C&&Ve(c,null,u,"beforeUnmount"),I&64?c.type.remove(c,u,h,g,rt,p):m&&(_!==ue||T>0&&T&64)?Ie(m,u,h,!1,!0):(_===ue&&T&384||!g&&I&16)&&Ie(y,u,h),p&&Wr(c)}(D&&($=E&&E.onVnodeUnmounted)||C)&&ne(()=>{$&&be($,u,c),C&&Ve(c,null,u,"unmounted")},h)},Wr=c=>{const{type:u,el:h,anchor:p,transition:g}=c;if(u===ue){Di(h,p);return}if(u===On){q(c);return}const _=()=>{s(h),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(c.shapeFlag&1&&g&&!g.persisted){const{leave:E,delayLeave:b}=g,y=()=>E(h,_);b?b(c.el,_,y):y()}else _()},Di=(c,u)=>{let h;for(;c!==u;)h=v(c),s(c),c=h;s(u)},Mi=(c,u,h)=>{const{bum:p,scope:g,update:_,subTree:E,um:b}=c;p&&In(p),g.stop(),_&&(_.active=!1,ge(E,c,u,h)),b&&ne(b,u),ne(()=>{c.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},Ie=(c,u,h,p=!1,g=!1,_=0)=>{for(let E=_;E<c.length;E++)ge(c[E],u,h,p,g)},$t=c=>c.shapeFlag&6?$t(c.component.subTree):c.shapeFlag&128?c.suspense.next():v(c.anchor||c.el);let _n=!1;const qr=(c,u,h)=>{c==null?u._vnode&&ge(u._vnode,null,null,!0):N(u._vnode||null,c,u,null,null,null,h),_n||(_n=!0,os(),Eo(),_n=!1),u._vnode=c},rt={p:N,um:ge,m:He,r:Wr,mt:bn,mc:pe,pc:k,pbc:Fe,n:$t,o:e};let yn,wn;return t&&([yn,wn]=t(rt)),{render:qr,hydrate:yn,createApp:nc(qr,yn)}}function Cn({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Ke({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function fc(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Lo(e,t,n=!1){const r=e.children,s=t.children;if(O(r)&&O(s))for(let o=0;o<r.length;o++){const i=r[o];let a=s[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[o]=xe(s[o]),a.el=i.el),n||Lo(i,a)),a.type===ln&&(a.el=i.el)}}function dc(e){const t=e.slice(),n=[0];let r,s,o,i,a;const l=e.length;for(r=0;r<l;r++){const f=e[r];if(f!==0){if(s=n[n.length-1],e[s]<f){t[r]=s,n.push(r);continue}for(o=0,i=n.length-1;o<i;)a=o+i>>1,e[n[a]]<f?o=a+1:i=a;f<e[n[o]]&&(o>0&&(t[r]=n[o-1]),n[o]=r)}}for(o=n.length,i=n[o-1];o-- >0;)n[o]=i,i=t[i];return n}function Fo(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Fo(t)}const hc=e=>e.__isTeleport,ue=Symbol.for("v-fgt"),ln=Symbol.for("v-txt"),Ct=Symbol.for("v-cmt"),On=Symbol.for("v-stc"),vt=[];let fe=null;function jo(e=!1){vt.push(fe=e?null:[])}function pc(){vt.pop(),fe=vt[vt.length-1]||null}let Ot=1;function gs(e){Ot+=e}function gc(e){return e.dynamicChildren=Ot>0?fe||it:null,pc(),Ot>0&&fe&&fe.push(e),e}function Ho(e,t,n,r,s,o){return gc(J(e,t,n,r,s,o,!0))}function mc(e){return e?e.__v_isVNode===!0:!1}function _t(e,t){return e.type===t.type&&e.key===t.key}const un="__vInternal",Vo=({key:e})=>e??null,Wt=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?G(e)||se(e)||x(e)?{i:we,r:e,k:t,f:!!n}:e:null);function J(e,t=null,n=null,r=0,s=null,o=e===ue?0:1,i=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Vo(t),ref:t&&Wt(t),scopeId:an,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:we};return a?(Or(l,n),o&128&&e.normalize(l)):n&&(l.shapeFlag|=G(n)?8:16),Ot>0&&!i&&fe&&(l.patchFlag>0||o&6)&&l.patchFlag!==32&&fe.push(l),l}const Re=bc;function bc(e,t=null,n=null,r=0,s=null,o=!1){if((!e||e===Ma)&&(e=Ct),mc(e)){const a=dt(e,t,!0);return n&&Or(a,n),Ot>0&&!o&&fe&&(a.shapeFlag&6?fe[fe.indexOf(e)]=a:fe.push(a)),a.patchFlag|=-2,a}if(Cc(e)&&(e=e.__vccOpts),t){t=_c(t);let{class:a,style:l}=t;a&&!G(a)&&(t.class=gr(a)),K(l)&&(po(l)&&!O(l)&&(l=Z({},l)),t.style=pr(l))}const i=G(e)?1:Pa(e)?128:hc(e)?64:K(e)?4:x(e)?2:0;return J(e,t,n,r,s,i,o,!0)}function _c(e){return e?po(e)||un in e?Z({},e):e:null}function dt(e,t,n=!1){const{props:r,ref:s,patchFlag:o,children:i}=e,a=t?yc(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&Vo(a),ref:t&&t.ref?n&&s?O(s)?s.concat(Wt(t)):[s,Wt(t)]:Wt(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ue?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&dt(e.ssContent),ssFallback:e.ssFallback&&dt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Je(e=" ",t=0){return Re(ln,null,e,t)}function _e(e){return e==null||typeof e=="boolean"?Re(Ct):O(e)?Re(ue,null,e.slice()):typeof e=="object"?xe(e):Re(ln,null,String(e))}function xe(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:dt(e)}function Or(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(O(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),Or(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!(un in t)?t._ctx=we:s===3&&we&&(we.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else x(t)?(t={default:t,_ctx:we},n=32):(t=String(t),r&64?(n=16,t=[Je(t)]):n=8);e.children=t,e.shapeFlag|=n}function yc(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=gr([t.class,r.class]));else if(s==="style")t.style=pr([t.style,r.style]);else if(en(s)){const o=t[s],i=r[s];i&&o!==i&&!(O(o)&&o.includes(i))&&(t[s]=o?[].concat(o,i):i)}else s!==""&&(t[s]=r[s])}return t}function be(e,t,n,r=null){de(e,t,7,[n,r])}const wc=Po();let Ec=0;function Ic(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||wc,o={uid:Ec++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ui(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:No(r,s),emitsOptions:vo(r,s),emit:null,emitted:null,propsDefaults:j,inheritAttrs:r.inheritAttrs,ctx:j,data:j,props:j,attrs:j,slots:j,refs:j,setupState:j,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=Ta.bind(null,o),e.ce&&e.ce(o),o}let te=null,Xt,er;{const e=Zs(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),o=>{s.length>1?s.forEach(i=>i(o)):s[0](o)}};Xt=t("__VUE_INSTANCE_SETTERS__",n=>te=n),er=t("__VUE_SSR_SETTERS__",n=>fn=n)}const Mt=e=>{const t=te;return Xt(e),e.scope.on(),()=>{e.scope.off(),Xt(t)}},ms=()=>{te&&te.scope.off(),Xt(null)};function Ko(e){return e.vnode.shapeFlag&4}let fn=!1;function vc(e,t=!1){t&&er(t);const{props:n,children:r}=e.vnode,s=Ko(e);sc(e,n,s,t),ac(e,r);const o=s?Sc(e,t):void 0;return t&&er(!1),o}function Sc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=go(new Proxy(e.ctx,Ja));const{setup:r}=n;if(r){const s=e.setupContext=r.length>1?Ac(e):null,o=Mt(e);tt();const i=Pe(r,e,0,[e.props,s]);if(nt(),o(),Gs(i)){if(i.then(ms,ms),t)return i.then(a=>{bs(e,a,t)}).catch(a=>{sn(a,e,0)});e.asyncDep=i}else bs(e,i,t)}else Uo(e,t)}function bs(e,t,n){x(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:K(t)&&(e.setupState=_o(t)),Uo(e,n)}let _s;function Uo(e,t,n){const r=e.type;if(!e.render){if(!t&&_s&&!r.render){const s=r.template||Ar(e).template;if(s){const{isCustomElement:o,compilerOptions:i}=e.appContext.config,{delimiters:a,compilerOptions:l}=r,f=Z(Z({isCustomElement:o,delimiters:a},i),l);r.render=_s(s,f)}}e.render=r.render||ie}{const s=Mt(e);tt();try{Ya(e)}finally{nt(),s()}}}function Tc(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return re(e,"get","$attrs"),t[n]}}))}function Ac(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return Tc(e)},slots:e.slots,emit:e.emit,expose:t}}function xr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(_o(go(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Et)return Et[n](e)},has(t,n){return n in t||n in Et}}))}function Cc(e){return x(e)&&"__vccOpts"in e}const Oc=(e,t)=>ha(e,t,fn),xc="3.4.21";/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Dc="http://www.w3.org/2000/svg",Mc="http://www.w3.org/1998/Math/MathML",De=typeof document<"u"?document:null,ys=De&&De.createElement("template"),Pc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?De.createElementNS(Dc,e):t==="mathml"?De.createElementNS(Mc,e):De.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>De.createTextNode(e),createComment:e=>De.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>De.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,o){const i=n?n.previousSibling:t.lastChild;if(s&&(s===o||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===o||!(s=s.nextSibling)););else{ys.innerHTML=r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e;const a=ys.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Rc=Symbol("_vtc");function Nc(e,t,n){const r=e[Rc];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const ws=Symbol("_vod"),$c=Symbol("_vsh"),Bc=Symbol(""),kc=/(^|;)\s*display\s*:/;function Lc(e,t,n){const r=e.style,s=G(n);let o=!1;if(n&&!s){if(t)if(G(t))for(const i of t.split(";")){const a=i.slice(0,i.indexOf(":")).trim();n[a]==null&&qt(r,a,"")}else for(const i in t)n[i]==null&&qt(r,i,"");for(const i in n)i==="display"&&(o=!0),qt(r,i,n[i])}else if(s){if(t!==n){const i=r[Bc];i&&(n+=";"+i),r.cssText=n,o=kc.test(n)}}else t&&e.removeAttribute("style");ws in e&&(e[ws]=o?r.display:"",e[$c]&&(r.display="none"))}const Es=/\s*!important$/;function qt(e,t,n){if(O(n))n.forEach(r=>qt(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Fc(e,t);Es.test(n)?e.setProperty(pt(r),n.replace(Es,""),"important"):e[r]=n}}const Is=["Webkit","Moz","ms"],xn={};function Fc(e,t){const n=xn[t];if(n)return n;let r=ut(t);if(r!=="filter"&&r in e)return xn[t]=r;r=Xs(r);for(let s=0;s<Is.length;s++){const o=Is[s]+r;if(o in e)return xn[t]=o}return t}const vs="http://www.w3.org/1999/xlink";function jc(e,t,n,r,s){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(vs,t.slice(6,t.length)):e.setAttributeNS(vs,t,n);else{const o=Ki(t);n==null||o&&!Qs(n)?e.removeAttribute(t):e.setAttribute(t,o?"":n)}}function Hc(e,t,n,r,s,o,i){if(t==="innerHTML"||t==="textContent"){r&&i(r,s,o),e[t]=n??"";return}const a=e.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){const f=a==="OPTION"?e.getAttribute("value")||"":e.value,d=n??"";(f!==d||!("_value"in e))&&(e.value=d),n==null&&e.removeAttribute(t),e._value=n;return}let l=!1;if(n===""||n==null){const f=typeof e[t];f==="boolean"?n=Qs(n):n==null&&f==="string"?(n="",l=!0):f==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function Vc(e,t,n,r){e.addEventListener(t,n,r)}function Kc(e,t,n,r){e.removeEventListener(t,n,r)}const Ss=Symbol("_vei");function Uc(e,t,n,r,s=null){const o=e[Ss]||(e[Ss]={}),i=o[t];if(r&&i)i.value=r;else{const[a,l]=Wc(t);if(r){const f=o[t]=Gc(r,s);Vc(e,a,f,l)}else i&&(Kc(e,a,i,l),o[t]=void 0)}}const Ts=/(?:Once|Passive|Capture)$/;function Wc(e){let t;if(Ts.test(e)){t={};let r;for(;r=e.match(Ts);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):pt(e.slice(2)),t]}let Dn=0;const qc=Promise.resolve(),zc=()=>Dn||(qc.then(()=>Dn=0),Dn=Date.now());function Gc(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;de(Jc(r,n.value),t,5,[r])};return n.value=e,n.attached=zc(),n}function Jc(e,t){if(O(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const As=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Yc=(e,t,n,r,s,o,i,a,l)=>{const f=s==="svg";t==="class"?Nc(e,r,f):t==="style"?Lc(e,n,r):en(t)?fr(t)||Uc(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Xc(e,t,r,f))?Hc(e,t,r,o,i,a,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),jc(e,t,r,f))};function Xc(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&As(t)&&x(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return As(t)&&G(n)?!1:t in e}const Zc=Z({patchProp:Yc},Pc);let Cs;function Qc(){return Cs||(Cs=lc(Zc))}const el=(...e)=>{const t=Qc().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=nl(r);if(!s)return;const o=t._component;!x(o)&&!o.render&&!o.template&&(o.template=s.innerHTML),s.innerHTML="";const i=n(s,!1,tl(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),i},t};function tl(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function nl(e){return G(e)?document.querySelector(e):e}const rl="/notification/vite.svg",sl="/notification/assets/vue-5532db34.svg";const Wo=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},dn=e=>(So("data-v-a96fa91f"),e=e(),To(),e),ol={class:"card"},il=dn(()=>J("p",null,[Je(" Edit "),J("code",null,"components/HelloWorld.vue"),Je(" to test HMR ")],-1)),al=dn(()=>J("p",null,[Je(" Check out "),J("a",{href:"https://vuejs.org/guide/quick-start.html#local",target:"_blank"},"create-vue"),Je(", the official Vue + Vite starter ")],-1)),cl=dn(()=>J("p",null,[Je(" Install "),J("a",{href:"https://github.com/johnsoncodehk/volar",target:"_blank"},"Volar"),Je(" in your IDE for a better DX ")],-1)),ll=dn(()=>J("p",{class:"read-the-docs"},"Click on the Vite and Vue logos to learn more",-1)),ul={__name:"HelloWorld",props:{msg:String},setup(e){const t=pa(0);return(n,r)=>(jo(),Ho(ue,null,[J("h1",null,Xr(e.msg),1),J("div",ol,[J("button",{type:"button",onClick:r[0]||(r[0]=s=>t.value++)},"count is "+Xr(t.value),1),il]),al,cl,ll],64))}},fl=Wo(ul,[["__scopeId","data-v-a96fa91f"]]);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qo=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},dl=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=e[n++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=e[n++],i=e[n++],a=e[n++],l=((s&7)<<18|(o&63)<<12|(i&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=e[n++],i=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|i&63)}}return t.join("")},zo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const o=e[s],i=s+1<e.length,a=i?e[s+1]:0,l=s+2<e.length,f=l?e[s+2]:0,d=o>>2,w=(o&3)<<4|a>>4;let v=(a&15)<<2|f>>6,A=f&63;l||(A=64,i||(v=64)),r.push(n[d],n[w],n[v],n[A])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(qo(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):dl(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const o=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const f=s<e.length?n[e.charAt(s)]:64;++s;const w=s<e.length?n[e.charAt(s)]:64;if(++s,o==null||a==null||f==null||w==null)throw new hl;const v=o<<2|a>>4;if(r.push(v),f!==64){const A=a<<4&240|f>>2;if(r.push(A),w!==64){const H=f<<6&192|w;r.push(H)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class hl extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const pl=function(e){const t=qo(e);return zo.encodeByteArray(t,!0)},Go=function(e){return pl(e).replace(/\./g,"")},gl=function(e){try{return zo.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ml(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bl=()=>ml().__FIREBASE_DEFAULTS__,_l=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},yl=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&gl(e[1]);return t&&JSON.parse(t)},wl=()=>{try{return bl()||_l()||yl()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Jo=()=>{var e;return(e=wl())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}function Yo(){try{return typeof indexedDB=="object"}catch{return!1}}function Xo(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}function Il(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vl="FirebaseError";class gt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=vl,Object.setPrototypeOf(this,gt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,hn.prototype.create)}}class hn{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,o=this.errors[t],i=o?Sl(o,r):"Error",a=`${this.serviceName}: ${i} (${s}).`;return new gt(s,a,r)}}function Sl(e,t){return e.replace(Tl,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Tl=/\{\$([^}]+)}/g;function tr(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const o=e[s],i=t[s];if(Os(o)&&Os(i)){if(!tr(o,i))return!1}else if(o!==i)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Os(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dr(e){return e&&e._delegate?e._delegate:e}class Le{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ue="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new El;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Ol(t))try{this.getOrInitializeService({instanceIdentifier:Ue})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=Ue){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ue){return this.instances.has(t)}getOptions(t=Ue){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,i]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&i.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const i=this.instances.get(s);return i&&t(i,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Cl(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Ue){return this.component?this.component.multipleInstances?t:Ue:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Cl(e){return e===Ue?void 0:e}function Ol(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Al(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var L;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(L||(L={}));const Dl={debug:L.DEBUG,verbose:L.VERBOSE,info:L.INFO,warn:L.WARN,error:L.ERROR,silent:L.SILENT},Ml=L.INFO,Pl={[L.DEBUG]:"log",[L.VERBOSE]:"log",[L.INFO]:"info",[L.WARN]:"warn",[L.ERROR]:"error"},Rl=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=Pl[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Nl{constructor(t){this.name=t,this._logLevel=Ml,this._logHandler=Rl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in L))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Dl[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,L.DEBUG,...t),this._logHandler(this,L.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,L.VERBOSE,...t),this._logHandler(this,L.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,L.INFO,...t),this._logHandler(this,L.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,L.WARN,...t),this._logHandler(this,L.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,L.ERROR,...t),this._logHandler(this,L.ERROR,...t)}}const $l=(e,t)=>t.some(n=>e instanceof n);let xs,Ds;function Bl(){return xs||(xs=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function kl(){return Ds||(Ds=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Zo=new WeakMap,nr=new WeakMap,Qo=new WeakMap,Mn=new WeakMap,Mr=new WeakMap;function Ll(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",o),e.removeEventListener("error",i)},o=()=>{n(Ne(e.result)),s()},i=()=>{r(e.error),s()};e.addEventListener("success",o),e.addEventListener("error",i)});return t.then(n=>{n instanceof IDBCursor&&Zo.set(n,e)}).catch(()=>{}),Mr.set(t,e),t}function Fl(e){if(nr.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",i),e.removeEventListener("abort",i)},o=()=>{n(),s()},i=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",o),e.addEventListener("error",i),e.addEventListener("abort",i)});nr.set(e,t)}let rr={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return nr.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Qo.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ne(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function jl(e){rr=e(rr)}function Hl(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Pn(this),t,...n);return Qo.set(r,t.sort?t.sort():[t]),Ne(r)}:kl().includes(e)?function(...t){return e.apply(Pn(this),t),Ne(Zo.get(this))}:function(...t){return Ne(e.apply(Pn(this),t))}}function Vl(e){return typeof e=="function"?Hl(e):(e instanceof IDBTransaction&&Fl(e),$l(e,Bl())?new Proxy(e,rr):e)}function Ne(e){if(e instanceof IDBRequest)return Ll(e);if(Mn.has(e))return Mn.get(e);const t=Vl(e);return t!==e&&(Mn.set(e,t),Mr.set(t,e)),t}const Pn=e=>Mr.get(e);function Kl(e,t,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){const i=indexedDB.open(e,t),a=Ne(i);return r&&i.addEventListener("upgradeneeded",l=>{r(Ne(i.result),l.oldVersion,l.newVersion,Ne(i.transaction),l)}),n&&i.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),s&&l.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),a}const Ul=["get","getKey","getAll","getAllKeys","count"],Wl=["put","add","delete","clear"],Rn=new Map;function Ms(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Rn.get(t))return Rn.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=Wl.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Ul.includes(n)))return;const o=async function(i,...a){const l=this.transaction(i,s?"readwrite":"readonly");let f=l.store;return r&&(f=f.index(a.shift())),(await Promise.all([f[n](...a),s&&l.done]))[0]};return Rn.set(t,o),o}jl(e=>({...e,get:(t,n,r)=>Ms(t,n)||e.get(t,n,r),has:(t,n)=>!!Ms(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(zl(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function zl(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const sr="@firebase/app",Ps="0.9.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ye=new Nl("@firebase/app"),Gl="@firebase/app-compat",Jl="@firebase/analytics-compat",Yl="@firebase/analytics",Xl="@firebase/app-check-compat",Zl="@firebase/app-check",Ql="@firebase/auth",eu="@firebase/auth-compat",tu="@firebase/database",nu="@firebase/database-compat",ru="@firebase/functions",su="@firebase/functions-compat",ou="@firebase/installations",iu="@firebase/installations-compat",au="@firebase/messaging",cu="@firebase/messaging-compat",lu="@firebase/performance",uu="@firebase/performance-compat",fu="@firebase/remote-config",du="@firebase/remote-config-compat",hu="@firebase/storage",pu="@firebase/storage-compat",gu="@firebase/firestore",mu="@firebase/firestore-compat",bu="firebase";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or="[DEFAULT]",_u={[sr]:"fire-core",[Gl]:"fire-core-compat",[Yl]:"fire-analytics",[Jl]:"fire-analytics-compat",[Zl]:"fire-app-check",[Xl]:"fire-app-check-compat",[Ql]:"fire-auth",[eu]:"fire-auth-compat",[tu]:"fire-rtdb",[nu]:"fire-rtdb-compat",[ru]:"fire-fn",[su]:"fire-fn-compat",[ou]:"fire-iid",[iu]:"fire-iid-compat",[au]:"fire-fcm",[cu]:"fire-fcm-compat",[lu]:"fire-perf",[uu]:"fire-perf-compat",[fu]:"fire-rc",[du]:"fire-rc-compat",[hu]:"fire-gcs",[pu]:"fire-gcs-compat",[gu]:"fire-fst",[mu]:"fire-fst-compat","fire-js":"fire-js",[bu]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt=new Map,ir=new Map;function yu(e,t){try{e.container.addComponent(t)}catch(n){Ye.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Xe(e){const t=e.name;if(ir.has(t))return Ye.debug(`There were multiple attempts to register component ${t}.`),!1;ir.set(t,e);for(const n of Zt.values())yu(n,e);return!0}function Pr(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wu={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},$e=new hn("app","Firebase",wu);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Le("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw $e.create("app-deleted",{appName:this._name})}}function ei(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:or,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw $e.create("bad-app-name",{appName:String(s)});if(n||(n=Jo()),!n)throw $e.create("no-options");const o=Zt.get(s);if(o){if(tr(n,o.options)&&tr(r,o.config))return o;throw $e.create("duplicate-app",{appName:s})}const i=new xl(s);for(const l of ir.values())i.addComponent(l);const a=new Eu(n,r,i);return Zt.set(s,a),a}function Iu(e=or){const t=Zt.get(e);if(!t&&e===or&&Jo())return ei();if(!t)throw $e.create("no-app",{appName:e});return t}function Be(e,t,n){var r;let s=(r=_u[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),i=t.match(/\s|\//);if(o||i){const a=[`Unable to register library "${s}" with version "${t}":`];o&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&i&&a.push("and"),i&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ye.warn(a.join(" "));return}Xe(new Le(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vu="firebase-heartbeat-database",Su=1,xt="firebase-heartbeat-store";let Nn=null;function ti(){return Nn||(Nn=Kl(vu,Su,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(xt)}}}).catch(e=>{throw $e.create("idb-open",{originalErrorMessage:e.message})})),Nn}async function Tu(e){try{return await(await ti()).transaction(xt).objectStore(xt).get(ni(e))}catch(t){if(t instanceof gt)Ye.warn(t.message);else{const n=$e.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Ye.warn(n.message)}}}async function Rs(e,t){try{const r=(await ti()).transaction(xt,"readwrite");await r.objectStore(xt).put(t,ni(e)),await r.done}catch(n){if(n instanceof gt)Ye.warn(n.message);else{const r=$e.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ye.warn(r.message)}}}function ni(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Au=1024,Cu=30*24*60*60*1e3;class Ou{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Du(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ns();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const o=new Date(s.date).valueOf();return Date.now()-o<=Cu}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ns(),{heartbeatsToSend:n,unsentEntries:r}=xu(this._heartbeatsCache.heartbeats),s=Go(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Ns(){return new Date().toISOString().substring(0,10)}function xu(e,t=Au){const n=[];let r=e.slice();for(const s of e){const o=n.find(i=>i.agent===s.agent);if(o){if(o.dates.push(s.date),$s(n)>t){o.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),$s(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Du{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Yo()?Xo().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Tu(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Rs(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Rs(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function $s(e){return Go(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mu(e){Xe(new Le("platform-logger",t=>new ql(t),"PRIVATE")),Xe(new Le("heartbeat",t=>new Ou(t),"PRIVATE")),Be(sr,Ps,e),Be(sr,Ps,"esm2017"),Be("fire-js","")}Mu("");var Pu="firebase",Ru="9.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Be(Pu,Ru,"app");const Nu=(e,t)=>t.some(n=>e instanceof n);let Bs,ks;function $u(){return Bs||(Bs=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Bu(){return ks||(ks=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ri=new WeakMap,ar=new WeakMap,si=new WeakMap,$n=new WeakMap,Rr=new WeakMap;function ku(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",o),e.removeEventListener("error",i)},o=()=>{n(Te(e.result)),s()},i=()=>{r(e.error),s()};e.addEventListener("success",o),e.addEventListener("error",i)});return t.then(n=>{n instanceof IDBCursor&&ri.set(n,e)}).catch(()=>{}),Rr.set(t,e),t}function Lu(e){if(ar.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",i),e.removeEventListener("abort",i)},o=()=>{n(),s()},i=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",o),e.addEventListener("error",i),e.addEventListener("abort",i)});ar.set(e,t)}let cr={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ar.get(e);if(t==="objectStoreNames")return e.objectStoreNames||si.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Te(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Fu(e){cr=e(cr)}function ju(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Bn(this),t,...n);return si.set(r,t.sort?t.sort():[t]),Te(r)}:Bu().includes(e)?function(...t){return e.apply(Bn(this),t),Te(ri.get(this))}:function(...t){return Te(e.apply(Bn(this),t))}}function Hu(e){return typeof e=="function"?ju(e):(e instanceof IDBTransaction&&Lu(e),Nu(e,$u())?new Proxy(e,cr):e)}function Te(e){if(e instanceof IDBRequest)return ku(e);if($n.has(e))return $n.get(e);const t=Hu(e);return t!==e&&($n.set(e,t),Rr.set(t,e)),t}const Bn=e=>Rr.get(e);function Nr(e,t,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){const i=indexedDB.open(e,t),a=Te(i);return r&&i.addEventListener("upgradeneeded",l=>{r(Te(i.result),l.oldVersion,l.newVersion,Te(i.transaction))}),n&&i.addEventListener("blocked",()=>n()),a.then(l=>{o&&l.addEventListener("close",()=>o()),s&&l.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}function kn(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",()=>t()),Te(n).then(()=>{})}const Vu=["get","getKey","getAll","getAllKeys","count"],Ku=["put","add","delete","clear"],Ln=new Map;function Ls(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ln.get(t))return Ln.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=Ku.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Vu.includes(n)))return;const o=async function(i,...a){const l=this.transaction(i,s?"readwrite":"readonly");let f=l.store;return r&&(f=f.index(a.shift())),(await Promise.all([f[n](...a),s&&l.done]))[0]};return Ln.set(t,o),o}Fu(e=>({...e,get:(t,n,r)=>Ls(t,n)||e.get(t,n,r),has:(t,n)=>!!Ls(t,n)||e.has(t,n)}));const oi="@firebase/installations",$r="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii=1e4,ai=`w:${$r}`,ci="FIS_v2",Uu="https://firebaseinstallations.googleapis.com/v1",Wu=60*60*1e3,qu="installations",zu="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gu={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ze=new hn(qu,zu,Gu);function li(e){return e instanceof gt&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui({projectId:e}){return`${Uu}/projects/${e}/installations`}function fi(e){return{token:e.token,requestStatus:2,expiresIn:Yu(e.expiresIn),creationTime:Date.now()}}async function di(e,t){const r=(await t.json()).error;return Ze.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function hi({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Ju(e,{refreshToken:t}){const n=hi(e);return n.append("Authorization",Xu(t)),n}async function pi(e){const t=await e();return t.status>=500&&t.status<600?e():t}function Yu(e){return Number(e.replace("s","000"))}function Xu(e){return`${ci} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zu({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=ui(e),s=hi(e),o=t.getImmediate({optional:!0});if(o){const f=await o.getHeartbeatsHeader();f&&s.append("x-firebase-client",f)}const i={fid:n,authVersion:ci,appId:e.appId,sdkVersion:ai},a={method:"POST",headers:s,body:JSON.stringify(i)},l=await pi(()=>fetch(r,a));if(l.ok){const f=await l.json();return{fid:f.fid||n,registrationStatus:2,refreshToken:f.refreshToken,authToken:fi(f.authToken)}}else throw await di("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qu(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ef=/^[cdef][\w-]{21}$/,lr="";function tf(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=nf(e);return ef.test(n)?n:lr}catch{return lr}}function nf(e){return Qu(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mi=new Map;function bi(e,t){const n=pn(e);_i(n,t),rf(n,t)}function _i(e,t){const n=mi.get(e);if(n)for(const r of n)r(t)}function rf(e,t){const n=sf();n&&n.postMessage({key:e,fid:t}),of()}let qe=null;function sf(){return!qe&&"BroadcastChannel"in self&&(qe=new BroadcastChannel("[Firebase] FID Change"),qe.onmessage=e=>{_i(e.data.key,e.data.fid)}),qe}function of(){mi.size===0&&qe&&(qe.close(),qe=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const af="firebase-installations-database",cf=1,Qe="firebase-installations-store";let Fn=null;function Br(){return Fn||(Fn=Nr(af,cf,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Qe)}}})),Fn}async function Qt(e,t){const n=pn(e),s=(await Br()).transaction(Qe,"readwrite"),o=s.objectStore(Qe),i=await o.get(n);return await o.put(t,n),await s.done,(!i||i.fid!==t.fid)&&bi(e,t.fid),t}async function yi(e){const t=pn(e),r=(await Br()).transaction(Qe,"readwrite");await r.objectStore(Qe).delete(t),await r.done}async function gn(e,t){const n=pn(e),s=(await Br()).transaction(Qe,"readwrite"),o=s.objectStore(Qe),i=await o.get(n),a=t(i);return a===void 0?await o.delete(n):await o.put(a,n),await s.done,a&&(!i||i.fid!==a.fid)&&bi(e,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kr(e){let t;const n=await gn(e.appConfig,r=>{const s=lf(r),o=uf(e,s);return t=o.registrationPromise,o.installationEntry});return n.fid===lr?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function lf(e){const t=e||{fid:tf(),registrationStatus:0};return wi(t)}function uf(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Ze.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=ff(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:df(e)}:{installationEntry:t}}async function ff(e,t){try{const n=await Zu(e,t);return Qt(e.appConfig,n)}catch(n){throw li(n)&&n.customData.serverCode===409?await yi(e.appConfig):await Qt(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function df(e){let t=await Fs(e.appConfig);for(;t.registrationStatus===1;)await gi(100),t=await Fs(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await kr(e);return r||n}return t}function Fs(e){return gn(e,t=>{if(!t)throw Ze.create("installation-not-found");return wi(t)})}function wi(e){return hf(e)?{fid:e.fid,registrationStatus:0}:e}function hf(e){return e.registrationStatus===1&&e.registrationTime+ii<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pf({appConfig:e,heartbeatServiceProvider:t},n){const r=gf(e,n),s=Ju(e,n),o=t.getImmediate({optional:!0});if(o){const f=await o.getHeartbeatsHeader();f&&s.append("x-firebase-client",f)}const i={installation:{sdkVersion:ai,appId:e.appId}},a={method:"POST",headers:s,body:JSON.stringify(i)},l=await pi(()=>fetch(r,a));if(l.ok){const f=await l.json();return fi(f)}else throw await di("Generate Auth Token",l)}function gf(e,{fid:t}){return`${ui(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lr(e,t=!1){let n;const r=await gn(e.appConfig,o=>{if(!Ei(o))throw Ze.create("not-registered");const i=o.authToken;if(!t&&_f(i))return o;if(i.requestStatus===1)return n=mf(e,t),o;{if(!navigator.onLine)throw Ze.create("app-offline");const a=wf(o);return n=bf(e,a),a}});return n?await n:r.authToken}async function mf(e,t){let n=await js(e.appConfig);for(;n.authToken.requestStatus===1;)await gi(100),n=await js(e.appConfig);const r=n.authToken;return r.requestStatus===0?Lr(e,t):r}function js(e){return gn(e,t=>{if(!Ei(t))throw Ze.create("not-registered");const n=t.authToken;return Ef(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function bf(e,t){try{const n=await pf(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Qt(e.appConfig,r),n}catch(n){if(li(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await yi(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Qt(e.appConfig,r)}throw n}}function Ei(e){return e!==void 0&&e.registrationStatus===2}function _f(e){return e.requestStatus===2&&!yf(e)}function yf(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Wu}function wf(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Ef(e){return e.requestStatus===1&&e.requestTime+ii<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function If(e){const t=e,{installationEntry:n,registrationPromise:r}=await kr(t);return r?r.catch(console.error):Lr(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vf(e,t=!1){const n=e;return await Sf(n),(await Lr(n,t)).token}async function Sf(e){const{registrationPromise:t}=await kr(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tf(e){if(!e||!e.options)throw jn("App Configuration");if(!e.name)throw jn("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw jn(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function jn(e){return Ze.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii="installations",Af="installations-internal",Cf=e=>{const t=e.getProvider("app").getImmediate(),n=Tf(t),r=Pr(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Of=e=>{const t=e.getProvider("app").getImmediate(),n=Pr(t,Ii).getImmediate();return{getId:()=>If(n),getToken:s=>vf(n,s)}};function xf(){Xe(new Le(Ii,Cf,"PUBLIC")),Xe(new Le(Af,Of,"PRIVATE"))}xf();Be(oi,$r);Be(oi,$r,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Df="/firebase-messaging-sw.js",Mf="/firebase-cloud-messaging-push-scope",vi="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Pf="https://fcmregistrations.googleapis.com/v1",Si="google.c.a.c_id",Rf="google.c.a.c_l",Nf="google.c.a.ts",$f="google.c.a.e";var Hs;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Hs||(Hs={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var Dt;(function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"})(Dt||(Dt={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Bf(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),s=new Uint8Array(r.length);for(let o=0;o<r.length;++o)s[o]=r.charCodeAt(o);return s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hn="fcm_token_details_db",kf=5,Vs="fcm_token_object_Store";async function Lf(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(o=>o.name).includes(Hn))return null;let t=null;return(await Nr(Hn,kf,{upgrade:async(r,s,o,i)=>{var a;if(s<2||!r.objectStoreNames.contains(Vs))return;const l=i.objectStore(Vs),f=await l.index("fcmSenderId").get(e);if(await l.clear(),!!f){if(s===2){const d=f;if(!d.auth||!d.p256dh||!d.endpoint)return;t={token:d.fcmToken,createTime:(a=d.createTime)!==null&&a!==void 0?a:Date.now(),subscriptionOptions:{auth:d.auth,p256dh:d.p256dh,endpoint:d.endpoint,swScope:d.swScope,vapidKey:typeof d.vapidKey=="string"?d.vapidKey:ve(d.vapidKey)}}}else if(s===3){const d=f;t={token:d.fcmToken,createTime:d.createTime,subscriptionOptions:{auth:ve(d.auth),p256dh:ve(d.p256dh),endpoint:d.endpoint,swScope:d.swScope,vapidKey:ve(d.vapidKey)}}}else if(s===4){const d=f;t={token:d.fcmToken,createTime:d.createTime,subscriptionOptions:{auth:ve(d.auth),p256dh:ve(d.p256dh),endpoint:d.endpoint,swScope:d.swScope,vapidKey:ve(d.vapidKey)}}}}}})).close(),await kn(Hn),await kn("fcm_vapid_details_db"),await kn("undefined"),Ff(t)?t:null}function Ff(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jf="firebase-messaging-database",Hf=1,et="firebase-messaging-store";let Vn=null;function Fr(){return Vn||(Vn=Nr(jf,Hf,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(et)}}})),Vn}async function Ti(e){const t=Hr(e),r=await(await Fr()).transaction(et).objectStore(et).get(t);if(r)return r;{const s=await Lf(e.appConfig.senderId);if(s)return await jr(e,s),s}}async function jr(e,t){const n=Hr(e),s=(await Fr()).transaction(et,"readwrite");return await s.objectStore(et).put(t,n),await s.done,t}async function Vf(e){const t=Hr(e),r=(await Fr()).transaction(et,"readwrite");await r.objectStore(et).delete(t),await r.done}function Hr({appConfig:e}){return e.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kf={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},X=new hn("messaging","Messaging",Kf);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uf(e,t){const n=await Kr(e),r=Ci(t),s={method:"POST",headers:n,body:JSON.stringify(r)};let o;try{o=await(await fetch(Vr(e.appConfig),s)).json()}catch(i){throw X.create("token-subscribe-failed",{errorInfo:i==null?void 0:i.toString()})}if(o.error){const i=o.error.message;throw X.create("token-subscribe-failed",{errorInfo:i})}if(!o.token)throw X.create("token-subscribe-no-token");return o.token}async function Wf(e,t){const n=await Kr(e),r=Ci(t.subscriptionOptions),s={method:"PATCH",headers:n,body:JSON.stringify(r)};let o;try{o=await(await fetch(`${Vr(e.appConfig)}/${t.token}`,s)).json()}catch(i){throw X.create("token-update-failed",{errorInfo:i==null?void 0:i.toString()})}if(o.error){const i=o.error.message;throw X.create("token-update-failed",{errorInfo:i})}if(!o.token)throw X.create("token-update-no-token");return o.token}async function Ai(e,t){const r={method:"DELETE",headers:await Kr(e)};try{const o=await(await fetch(`${Vr(e.appConfig)}/${t}`,r)).json();if(o.error){const i=o.error.message;throw X.create("token-unsubscribe-failed",{errorInfo:i})}}catch(s){throw X.create("token-unsubscribe-failed",{errorInfo:s==null?void 0:s.toString()})}}function Vr({projectId:e}){return`${Pf}/projects/${e}/registrations`}async function Kr({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function Ci({p256dh:e,auth:t,endpoint:n,vapidKey:r}){const s={web:{endpoint:n,auth:t,p256dh:e}};return r!==vi&&(s.web.applicationPubKey=r),s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qf=7*24*60*60*1e3;async function zf(e){const t=await Yf(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:ve(t.getKey("auth")),p256dh:ve(t.getKey("p256dh"))},r=await Ti(e.firebaseDependencies);if(r){if(Xf(r.subscriptionOptions,n))return Date.now()>=r.createTime+qf?Jf(e,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await Ai(e.firebaseDependencies,r.token)}catch(s){console.warn(s)}return Ks(e.firebaseDependencies,n)}else return Ks(e.firebaseDependencies,n)}async function Gf(e){const t=await Ti(e.firebaseDependencies);t&&(await Ai(e.firebaseDependencies,t.token),await Vf(e.firebaseDependencies));const n=await e.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function Jf(e,t){try{const n=await Wf(e.firebaseDependencies,t),r=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await jr(e.firebaseDependencies,r),n}catch(n){throw await Gf(e),n}}async function Ks(e,t){const r={token:await Uf(e,t),createTime:Date.now(),subscriptionOptions:t};return await jr(e,r),r.token}async function Yf(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Bf(t)})}function Xf(e,t){const n=t.vapidKey===e.vapidKey,r=t.endpoint===e.endpoint,s=t.auth===e.auth,o=t.p256dh===e.p256dh;return n&&r&&s&&o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Us(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return Zf(t,e),Qf(t,e),ed(t,e),t}function Zf(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const r=t.notification.body;r&&(e.notification.body=r);const s=t.notification.image;s&&(e.notification.image=s);const o=t.notification.icon;o&&(e.notification.icon=o)}function Qf(e,t){t.data&&(e.data=t.data)}function ed(e,t){var n,r,s,o,i;if(!t.fcmOptions&&!(!((n=t.notification)===null||n===void 0)&&n.click_action))return;e.fcmOptions={};const a=(s=(r=t.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&s!==void 0?s:(o=t.notification)===null||o===void 0?void 0:o.click_action;a&&(e.fcmOptions.link=a);const l=(i=t.fcmOptions)===null||i===void 0?void 0:i.analytics_label;l&&(e.fcmOptions.analyticsLabel=l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function td(e){return typeof e=="object"&&!!e&&Si in e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Oi("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");Oi("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function Oi(e,t){const n=[];for(let r=0;r<e.length;r++)n.push(e.charAt(r)),r<t.length&&n.push(t.charAt(r));return n.join("")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nd(e){if(!e||!e.options)throw Kn("App Configuration Object");if(!e.name)throw Kn("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const r of t)if(!n[r])throw Kn(r);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Kn(e){return X.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(t,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const s=nd(t);this.firebaseDependencies={app:t,appConfig:s,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sd(e){try{e.swRegistration=await navigator.serviceWorker.register(Df,{scope:Mf}),e.swRegistration.update().catch(()=>{})}catch(t){throw X.create("failed-service-worker-registration",{browserErrorMessage:t==null?void 0:t.message})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function od(e,t){if(!t&&!e.swRegistration&&await sd(e),!(!t&&e.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw X.create("invalid-sw-registration");e.swRegistration=t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function id(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=vi)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xi(e,t){if(!navigator)throw X.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw X.create("permission-blocked");return await id(e,t==null?void 0:t.vapidKey),await od(e,t==null?void 0:t.serviceWorkerRegistration),zf(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ad(e,t,n){const r=cd(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[Si],message_name:n[Rf],message_time:n[Nf],message_device_time:Math.floor(Date.now()/1e3)})}function cd(e){switch(e){case Dt.NOTIFICATION_CLICKED:return"notification_open";case Dt.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ld(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===Dt.PUSH_RECEIVED&&(typeof e.onMessageHandler=="function"?e.onMessageHandler(Us(n)):e.onMessageHandler.next(Us(n)));const r=n.data;td(r)&&r[$f]==="1"&&await ad(e,n.messageType,r)}const Ws="@firebase/messaging",qs="0.12.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ud=e=>{const t=new rd(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>ld(t,n)),t},fd=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:r=>xi(t,r)}};function dd(){Xe(new Le("messaging",ud,"PUBLIC")),Xe(new Le("messaging-internal",fd,"PRIVATE")),Be(Ws,qs),Be(Ws,qs,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hd(){try{await Xo()}catch{return!1}return typeof window<"u"&&Yo()&&Il()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pd(e,t){if(!navigator)throw X.create("only-available-in-window");return e.onMessageHandler=t,()=>{e.onMessageHandler=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gd(e=Iu()){return hd().then(t=>{if(!t)throw X.create("unsupported-browser")},t=>{throw X.create("indexed-db-unsupported")}),Pr(Dr(e),"messaging").getImmediate()}async function md(e,t){return e=Dr(e),xi(e,t)}function bd(e,t){return e=Dr(e),pd(e,t)}dd();const _d=e=>(So("data-v-79bea6b4"),e=e(),To(),e),yd=_d(()=>J("div",null,[J("a",{href:"https://vitejs.dev",target:"_blank"},[J("img",{src:rl,class:"logo",alt:"Vite logo"})]),J("a",{href:"https://vuejs.org/",target:"_blank"},[J("img",{src:sl,class:"logo vue",alt:"Vue logo"})])],-1)),wd={__name:"App",setup(e){ei({apiKey:"AIzaSyDMf8LGtCOipiic6cSO8m6THwTBUKJUwoA",authDomain:"notification-50717.firebaseapp.com",projectId:"notification-50717",storageBucket:"notification-50717.appspot.com",messagingSenderId:"967435761286",appId:"1:967435761286:web:ba5a4d77f65c4f72d08307"});const n=gd();return bd(n,r=>{console.log(1),console.log("Message received. ",r)}),navigator.serviceWorker.register("/notification/firebase-messaging-sw.js").then(r=>{md(n,{vapidKey:"BK7cmnDdPN-pWVfJxxExDhg652h9JFXWxif96vRvOHrKnVbp3Foc5evmKE5AbkkBwDL6Ed_Fd4hvpqq7gfqFgJI",serviceWorkerRegistration:r}).then(s=>{s?console.log("Token is:",s):console.log("No registration token available. Request permission to generate one.")}).catch(s=>{})}).catch(r=>{}),(r,s)=>(jo(),Ho(ue,null,[yd,Re(fl,{msg:"Vite + Vue"})],64))}},Ed=Wo(wd,[["__scopeId","data-v-79bea6b4"]]);el(Ed).mount("#app");
