(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function zr(e,t){const n=new Set(e.split(","));return t?r=>n.has(r.toLowerCase()):r=>n.has(r)}const Z={},kt=[],_e=()=>{},Xa=()=>!1,$n=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Gr=e=>e.startsWith("onUpdate:"),se=Object.assign,Jr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Za=Object.prototype.hasOwnProperty,K=(e,t)=>Za.call(e,t),$=Array.isArray,Dt=e=>Bn(e)==="[object Map]",Js=e=>Bn(e)==="[object Set]",j=e=>typeof e=="function",oe=e=>typeof e=="string",Ht=e=>typeof e=="symbol",ee=e=>e!==null&&typeof e=="object",Ys=e=>(ee(e)||j(e))&&j(e.then)&&j(e.catch),Qs=Object.prototype.toString,Bn=e=>Qs.call(e),ec=e=>Bn(e).slice(8,-1),Xs=e=>Bn(e)==="[object Object]",Yr=e=>oe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Yt=zr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ln=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},tc=/-(\w)/g,Be=Ln(e=>e.replace(tc,(t,n)=>n?n.toUpperCase():"")),nc=/\B([A-Z])/g,Kt=Ln(e=>e.replace(nc,"-$1").toLowerCase()),Fn=Ln(e=>e.charAt(0).toUpperCase()+e.slice(1)),Zn=Ln(e=>e?`on${Fn(e)}`:""),it=(e,t)=>!Object.is(e,t),er=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Cn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},rc=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Bo;const Zs=()=>Bo||(Bo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Qr(e){if($(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],o=oe(r)?ac(r):Qr(r);if(o)for(const s in o)t[s]=o[s]}return t}else if(oe(e)||ee(e))return e}const oc=/;(?![^(]*\))/g,sc=/:([^]+)/,ic=/\/\*[^]*?\*\//g;function ac(e){const t={};return e.replace(ic,"").split(oc).forEach(n=>{if(n){const r=n.split(sc);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Xr(e){let t="";if(oe(e))t=e;else if($(e))for(let n=0;n<e.length;n++){const r=Xr(e[n]);r&&(t+=r+" ")}else if(ee(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const cc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",lc=zr(cc);function ei(e){return!!e||e===""}const uc=e=>oe(e)?e:e==null?"":$(e)||ee(e)&&(e.toString===Qs||!j(e.toString))?JSON.stringify(e,ti,2):String(e),ti=(e,t)=>t&&t.__v_isRef?ti(e,t.value):Dt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,o],s)=>(n[tr(r,s)+" =>"]=o,n),{})}:Js(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>tr(n))}:Ht(t)?tr(t):ee(t)&&!$(t)&&!Xs(t)?String(t):t,tr=(e,t="")=>{var n;return Ht(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ee;class fc{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ee,!t&&Ee&&(this.index=(Ee.scopes||(Ee.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Ee;try{return Ee=this,t()}finally{Ee=n}}}on(){Ee=this}off(){Ee=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0,this._active=!1}}}function dc(e,t=Ee){t&&t.active&&t.effects.push(e)}function hc(){return Ee}let gt;class Zr{constructor(t,n,r,o){this.fn=t,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,dc(this,o)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,St();for(let t=0;t<this._depsLength;t++){const n=this.deps[t];if(n.computed&&(pc(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),It()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=nt,n=gt;try{return nt=!0,gt=this,this._runnings++,Lo(this),this.fn()}finally{Fo(this),this._runnings--,gt=n,nt=t}}stop(){var t;this.active&&(Lo(this),Fo(this),(t=this.onStop)==null||t.call(this),this.active=!1)}}function pc(e){return e.value}function Lo(e){e._trackId++,e._depsLength=0}function Fo(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)ni(e.deps[t],e);e.deps.length=e._depsLength}}function ni(e,t){const n=e.get(t);n!==void 0&&t._trackId!==n&&(e.delete(t),e.size===0&&e.cleanup())}let nt=!0,Sr=0;const ri=[];function St(){ri.push(nt),nt=!1}function It(){const e=ri.pop();nt=e===void 0?!0:e}function eo(){Sr++}function to(){for(Sr--;!Sr&&Ir.length;)Ir.shift()()}function oi(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const r=e.deps[e._depsLength];r!==t?(r&&ni(r,e),e.deps[e._depsLength++]=t):e._depsLength++}}const Ir=[];function si(e,t,n){eo();for(const r of e.keys()){let o;r._dirtyLevel<t&&(o??(o=e.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=t),r._shouldSchedule&&(o??(o=e.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&Ir.push(r.scheduler)))}to()}const ii=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},Ar=new WeakMap,mt=Symbol(""),Tr=Symbol("");function ge(e,t,n){if(nt&&gt){let r=Ar.get(e);r||Ar.set(e,r=new Map);let o=r.get(n);o||r.set(n,o=ii(()=>r.delete(n))),oi(gt,o)}}function Ke(e,t,n,r,o,s){const i=Ar.get(e);if(!i)return;let c=[];if(t==="clear")c=[...i.values()];else if(n==="length"&&$(e)){const a=Number(r);i.forEach((f,l)=>{(l==="length"||!Ht(l)&&l>=a)&&c.push(f)})}else switch(n!==void 0&&c.push(i.get(n)),t){case"add":$(e)?Yr(n)&&c.push(i.get("length")):(c.push(i.get(mt)),Dt(e)&&c.push(i.get(Tr)));break;case"delete":$(e)||(c.push(i.get(mt)),Dt(e)&&c.push(i.get(Tr)));break;case"set":Dt(e)&&c.push(i.get(mt));break}eo();for(const a of c)a&&si(a,4);to()}const gc=zr("__proto__,__v_isRef,__isVue"),ai=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ht)),jo=mc();function mc(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=V(this);for(let s=0,i=this.length;s<i;s++)ge(r,"get",s+"");const o=r[t](...n);return o===-1||o===!1?r[t](...n.map(V)):o}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){St(),eo();const r=V(this)[t].apply(this,n);return to(),It(),r}}),e}function bc(e){const t=V(this);return ge(t,"has",e),t.hasOwnProperty(e)}class ci{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){const o=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!o;if(n==="__v_isReadonly")return o;if(n==="__v_isShallow")return s;if(n==="__v_raw")return r===(o?s?xc:di:s?fi:ui).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const i=$(t);if(!o){if(i&&K(jo,n))return Reflect.get(jo,n,r);if(n==="hasOwnProperty")return bc}const c=Reflect.get(t,n,r);return(Ht(n)?ai.has(n):gc(n))||(o||ge(t,"get",n),s)?c:me(c)?i&&Yr(n)?c:c.value:ee(c)?o?pi(c):Hn(c):c}}class li extends ci{constructor(t=!1){super(!1,t)}set(t,n,r,o){let s=t[n];if(!this._isShallow){const a=Bt(s);if(!On(r)&&!Bt(r)&&(s=V(s),r=V(r)),!$(t)&&me(s)&&!me(r))return a?!1:(s.value=r,!0)}const i=$(t)&&Yr(n)?Number(n)<t.length:K(t,n),c=Reflect.set(t,n,r,o);return t===V(o)&&(i?it(r,s)&&Ke(t,"set",n,r):Ke(t,"add",n,r)),c}deleteProperty(t,n){const r=K(t,n);t[n];const o=Reflect.deleteProperty(t,n);return o&&r&&Ke(t,"delete",n,void 0),o}has(t,n){const r=Reflect.has(t,n);return(!Ht(n)||!ai.has(n))&&ge(t,"has",n),r}ownKeys(t){return ge(t,"iterate",$(t)?"length":mt),Reflect.ownKeys(t)}}class _c extends ci{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const yc=new li,wc=new _c,vc=new li(!0),no=e=>e,jn=e=>Reflect.getPrototypeOf(e);function gn(e,t,n=!1,r=!1){e=e.__v_raw;const o=V(e),s=V(t);n||(it(t,s)&&ge(o,"get",t),ge(o,"get",s));const{has:i}=jn(o),c=r?no:n?so:nn;if(i.call(o,t))return c(e.get(t));if(i.call(o,s))return c(e.get(s));e!==o&&e.get(t)}function mn(e,t=!1){const n=this.__v_raw,r=V(n),o=V(e);return t||(it(e,o)&&ge(r,"has",e),ge(r,"has",o)),e===o?n.has(e):n.has(e)||n.has(o)}function bn(e,t=!1){return e=e.__v_raw,!t&&ge(V(e),"iterate",mt),Reflect.get(e,"size",e)}function Ho(e){e=V(e);const t=V(this);return jn(t).has.call(t,e)||(t.add(e),Ke(t,"add",e,e)),this}function Ko(e,t){t=V(t);const n=V(this),{has:r,get:o}=jn(n);let s=r.call(n,e);s||(e=V(e),s=r.call(n,e));const i=o.call(n,e);return n.set(e,t),s?it(t,i)&&Ke(n,"set",e,t):Ke(n,"add",e,t),this}function Vo(e){const t=V(this),{has:n,get:r}=jn(t);let o=n.call(t,e);o||(e=V(e),o=n.call(t,e)),r&&r.call(t,e);const s=t.delete(e);return o&&Ke(t,"delete",e,void 0),s}function Uo(){const e=V(this),t=e.size!==0,n=e.clear();return t&&Ke(e,"clear",void 0,void 0),n}function _n(e,t){return function(r,o){const s=this,i=s.__v_raw,c=V(i),a=t?no:e?so:nn;return!e&&ge(c,"iterate",mt),i.forEach((f,l)=>r.call(o,a(f),a(l),s))}}function yn(e,t,n){return function(...r){const o=this.__v_raw,s=V(o),i=Dt(s),c=e==="entries"||e===Symbol.iterator&&i,a=e==="keys"&&i,f=o[e](...r),l=n?no:t?so:nn;return!t&&ge(s,"iterate",a?Tr:mt),{next(){const{value:h,done:p}=f.next();return p?{value:h,done:p}:{value:c?[l(h[0]),l(h[1])]:l(h),done:p}},[Symbol.iterator](){return this}}}}function Ye(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Ec(){const e={get(s){return gn(this,s)},get size(){return bn(this)},has:mn,add:Ho,set:Ko,delete:Vo,clear:Uo,forEach:_n(!1,!1)},t={get(s){return gn(this,s,!1,!0)},get size(){return bn(this)},has:mn,add:Ho,set:Ko,delete:Vo,clear:Uo,forEach:_n(!1,!0)},n={get(s){return gn(this,s,!0)},get size(){return bn(this,!0)},has(s){return mn.call(this,s,!0)},add:Ye("add"),set:Ye("set"),delete:Ye("delete"),clear:Ye("clear"),forEach:_n(!0,!1)},r={get(s){return gn(this,s,!0,!0)},get size(){return bn(this,!0)},has(s){return mn.call(this,s,!0)},add:Ye("add"),set:Ye("set"),delete:Ye("delete"),clear:Ye("clear"),forEach:_n(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=yn(s,!1,!1),n[s]=yn(s,!0,!1),t[s]=yn(s,!1,!0),r[s]=yn(s,!0,!0)}),[e,n,t,r]}const[Sc,Ic,Ac,Tc]=Ec();function ro(e,t){const n=t?e?Tc:Ac:e?Ic:Sc;return(r,o,s)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?r:Reflect.get(K(n,o)&&o in r?n:r,o,s)}const Cc={get:ro(!1,!1)},Oc={get:ro(!1,!0)},Rc={get:ro(!0,!1)},ui=new WeakMap,fi=new WeakMap,di=new WeakMap,xc=new WeakMap;function kc(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Dc(e){return e.__v_skip||!Object.isExtensible(e)?0:kc(ec(e))}function Hn(e){return Bt(e)?e:oo(e,!1,yc,Cc,ui)}function hi(e){return oo(e,!1,vc,Oc,fi)}function pi(e){return oo(e,!0,wc,Rc,di)}function oo(e,t,n,r,o){if(!ee(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=o.get(e);if(s)return s;const i=Dc(e);if(i===0)return e;const c=new Proxy(e,i===2?r:n);return o.set(e,c),c}function Pt(e){return Bt(e)?Pt(e.__v_raw):!!(e&&e.__v_isReactive)}function Bt(e){return!!(e&&e.__v_isReadonly)}function On(e){return!!(e&&e.__v_isShallow)}function gi(e){return Pt(e)||Bt(e)}function V(e){const t=e&&e.__v_raw;return t?V(t):e}function mi(e){return Object.isExtensible(e)&&Cn(e,"__v_skip",!0),e}const nn=e=>ee(e)?Hn(e):e,so=e=>ee(e)?pi(e):e;class bi{constructor(t,n,r,o){this.getter=t,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Zr(()=>t(this._value),()=>vn(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=r}get value(){const t=V(this);return(!t._cacheable||t.effect.dirty)&&it(t._value,t._value=t.effect.run())&&vn(t,4),_i(t),t.effect._dirtyLevel>=2&&vn(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function Pc(e,t,n=!1){let r,o;const s=j(e);return s?(r=e,o=_e):(r=e.get,o=e.set),new bi(r,o,s||!o,n)}function _i(e){var t;nt&&gt&&(e=V(e),oi(gt,(t=e.dep)!=null?t:e.dep=ii(()=>e.dep=void 0,e instanceof bi?e:void 0)))}function vn(e,t=4,n){e=V(e);const r=e.dep;r&&si(r,t)}function me(e){return!!(e&&e.__v_isRef===!0)}function yi(e){return wi(e,!1)}function Mc(e){return wi(e,!0)}function wi(e,t){return me(e)?e:new Nc(e,t)}class Nc{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:V(t),this._value=n?t:nn(t)}get value(){return _i(this),this._value}set value(t){const n=this.__v_isShallow||On(t)||Bt(t);t=n?t:V(t),it(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:nn(t),vn(this,4))}}function Mt(e){return me(e)?e.value:e}const $c={get:(e,t,n)=>Mt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const o=e[t];return me(o)&&!me(n)?(o.value=n,!0):Reflect.set(e,t,n,r)}};function vi(e){return Pt(e)?e:new Proxy(e,$c)}/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function rt(e,t,n,r){try{return r?e(...r):e()}catch(o){Kn(o,t,n)}}function Ce(e,t,n,r){if(j(e)){const s=rt(e,t,n,r);return s&&Ys(s)&&s.catch(i=>{Kn(i,t,n)}),s}const o=[];for(let s=0;s<e.length;s++)o.push(Ce(e[s],t,n,r));return o}function Kn(e,t,n,r=!0){const o=t?t.vnode:null;if(t){let s=t.parent;const i=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;s;){const f=s.ec;if(f){for(let l=0;l<f.length;l++)if(f[l](e,i,c)===!1)return}s=s.parent}const a=t.appContext.config.errorHandler;if(a){rt(a,null,10,[e,i,c]);return}}Bc(e,n,o,r)}function Bc(e,t,n,r=!0){console.error(e)}let rn=!1,Cr=!1;const ae=[];let $e=0;const Nt=[];let Xe=null,ht=0;const Ei=Promise.resolve();let io=null;function Si(e){const t=io||Ei;return e?t.then(this?e.bind(this):e):t}function Lc(e){let t=$e+1,n=ae.length;for(;t<n;){const r=t+n>>>1,o=ae[r],s=on(o);s<e||s===e&&o.pre?t=r+1:n=r}return t}function ao(e){(!ae.length||!ae.includes(e,rn&&e.allowRecurse?$e+1:$e))&&(e.id==null?ae.push(e):ae.splice(Lc(e.id),0,e),Ii())}function Ii(){!rn&&!Cr&&(Cr=!0,io=Ei.then(Ti))}function Fc(e){const t=ae.indexOf(e);t>$e&&ae.splice(t,1)}function jc(e){$(e)?Nt.push(...e):(!Xe||!Xe.includes(e,e.allowRecurse?ht+1:ht))&&Nt.push(e),Ii()}function Wo(e,t,n=rn?$e+1:0){for(;n<ae.length;n++){const r=ae[n];if(r&&r.pre){if(e&&r.id!==e.uid)continue;ae.splice(n,1),n--,r()}}}function Ai(e){if(Nt.length){const t=[...new Set(Nt)].sort((n,r)=>on(n)-on(r));if(Nt.length=0,Xe){Xe.push(...t);return}for(Xe=t,ht=0;ht<Xe.length;ht++)Xe[ht]();Xe=null,ht=0}}const on=e=>e.id==null?1/0:e.id,Hc=(e,t)=>{const n=on(e)-on(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Ti(e){Cr=!1,rn=!0,ae.sort(Hc);const t=_e;try{for($e=0;$e<ae.length;$e++){const n=ae[$e];n&&n.active!==!1&&rt(n,null,14)}}finally{$e=0,ae.length=0,Ai(),rn=!1,io=null,(ae.length||Nt.length)&&Ti()}}function Kc(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||Z;let o=n;const s=t.startsWith("update:"),i=s&&t.slice(7);if(i&&i in r){const l=`${i==="modelValue"?"model":i}Modifiers`,{number:h,trim:p}=r[l]||Z;p&&(o=n.map(y=>oe(y)?y.trim():y)),h&&(o=n.map(rc))}let c,a=r[c=Zn(t)]||r[c=Zn(Be(t))];!a&&s&&(a=r[c=Zn(Kt(t))]),a&&Ce(a,e,6,o);const f=r[c+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,Ce(f,e,6,o)}}function Ci(e,t,n=!1){const r=t.emitsCache,o=r.get(e);if(o!==void 0)return o;const s=e.emits;let i={},c=!1;if(!j(e)){const a=f=>{const l=Ci(f,t,!0);l&&(c=!0,se(i,l))};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!s&&!c?(ee(e)&&r.set(e,null),null):($(s)?s.forEach(a=>i[a]=null):se(i,s),ee(e)&&r.set(e,i),i)}function Vn(e,t){return!e||!$n(t)?!1:(t=t.slice(2).replace(/Once$/,""),K(e,t[0].toLowerCase()+t.slice(1))||K(e,Kt(t))||K(e,t))}let Ae=null,Un=null;function Rn(e){const t=Ae;return Ae=e,Un=e&&e.type.__scopeId||null,t}function Vc(e){Un=e}function Uc(){Un=null}function co(e,t=Ae,n){if(!t||e._n)return e;const r=(...o)=>{r._d&&ns(-1);const s=Rn(t);let i;try{i=e(...o)}finally{Rn(s),r._d&&ns(1)}return i};return r._n=!0,r._c=!0,r._d=!0,r}function nr(e){const{type:t,vnode:n,proxy:r,withProxy:o,props:s,propsOptions:[i],slots:c,attrs:a,emit:f,render:l,renderCache:h,data:p,setupState:y,ctx:O,inheritAttrs:P}=e;let B,x;const M=Rn(e);try{if(n.shapeFlag&4){const U=o||r,te=U;B=Ne(l.call(te,U,h,s,y,p,O)),x=a}else{const U=t;B=Ne(U.length>1?U(s,{attrs:a,slots:c,emit:f}):U(s,null)),x=t.props?a:Wc(a)}}catch(U){Zt.length=0,Kn(U,e,1),B=de(bt)}let L=B;if(x&&P!==!1){const U=Object.keys(x),{shapeFlag:te}=L;U.length&&te&7&&(i&&U.some(Gr)&&(x=qc(x,i)),L=Lt(L,x))}return n.dirs&&(L=Lt(L),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&(L.transition=n.transition),B=L,Rn(M),B}const Wc=e=>{let t;for(const n in e)(n==="class"||n==="style"||$n(n))&&((t||(t={}))[n]=e[n]);return t},qc=(e,t)=>{const n={};for(const r in e)(!Gr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function zc(e,t,n){const{props:r,children:o,component:s}=e,{props:i,children:c,patchFlag:a}=t,f=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return r?qo(r,i,f):!!i;if(a&8){const l=t.dynamicProps;for(let h=0;h<l.length;h++){const p=l[h];if(i[p]!==r[p]&&!Vn(f,p))return!0}}}else return(o||c)&&(!c||!c.$stable)?!0:r===i?!1:r?i?qo(r,i,f):!0:!!i;return!1}function qo(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let o=0;o<r.length;o++){const s=r[o];if(t[s]!==e[s]&&!Vn(n,s))return!0}return!1}function Gc({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const Oi="components";function lo(e,t){return Yc(Oi,e,!0,t)||e}const Jc=Symbol.for("v-ndc");function Yc(e,t,n=!0,r=!1){const o=Ae||ce;if(o){const s=o.type;if(e===Oi){const c=Vl(s,!1);if(c&&(c===t||c===Be(t)||c===Fn(Be(t))))return s}const i=zo(o[e]||s[e],t)||zo(o.appContext[e],t);return!i&&r?s:i}}function zo(e,t){return e&&(e[t]||e[Be(t)]||e[Fn(Be(t))])}const Qc=e=>e.__isSuspense;function Xc(e,t){t&&t.pendingBranch?$(e)?t.effects.push(...e):t.effects.push(e):jc(e)}const Zc=Symbol.for("v-scx"),el=()=>Ve(Zc),wn={};function En(e,t,n){return Ri(e,t,n)}function Ri(e,t,{immediate:n,deep:r,flush:o,once:s,onTrack:i,onTrigger:c}=Z){if(t&&s){const F=t;t=(...ue)=>{F(...ue),te()}}const a=ce,f=F=>r===!0?F:xt(F,r===!1?1:void 0);let l,h=!1,p=!1;if(me(e)?(l=()=>e.value,h=On(e)):Pt(e)?(l=()=>f(e),h=!0):$(e)?(p=!0,h=e.some(F=>Pt(F)||On(F)),l=()=>e.map(F=>{if(me(F))return F.value;if(Pt(F))return f(F);if(j(F))return rt(F,a,2)})):j(e)?t?l=()=>rt(e,a,2):l=()=>(y&&y(),Ce(e,a,3,[O])):l=_e,t&&r){const F=l;l=()=>xt(F())}let y,O=F=>{y=L.onStop=()=>{rt(F,a,4),y=L.onStop=void 0}},P;if(Gn)if(O=_e,t?n&&Ce(t,a,3,[l(),p?[]:void 0,O]):l(),o==="sync"){const F=el();P=F.__watcherHandles||(F.__watcherHandles=[])}else return _e;let B=p?new Array(e.length).fill(wn):wn;const x=()=>{if(!(!L.active||!L.dirty))if(t){const F=L.run();(r||h||(p?F.some((ue,we)=>it(ue,B[we])):it(F,B)))&&(y&&y(),Ce(t,a,3,[F,B===wn?void 0:p&&B[0]===wn?[]:B,O]),B=F)}else L.run()};x.allowRecurse=!!t;let M;o==="sync"?M=x:o==="post"?M=()=>pe(x,a&&a.suspense):(x.pre=!0,a&&(x.id=a.uid),M=()=>ao(x));const L=new Zr(l,_e,M),U=hc(),te=()=>{L.stop(),U&&Jr(U.effects,L)};return t?n?x():B=L.run():o==="post"?pe(L.run.bind(L),a&&a.suspense):L.run(),P&&P.push(te),te}function tl(e,t,n){const r=this.proxy,o=oe(e)?e.includes(".")?xi(r,e):()=>r[e]:e.bind(r,r);let s;j(t)?s=t:(s=t.handler,n=t);const i=dn(this),c=Ri(o,s.bind(r),n);return i(),c}function xi(e,t){const n=t.split(".");return()=>{let r=e;for(let o=0;o<n.length&&r;o++)r=r[n[o]];return r}}function xt(e,t,n=0,r){if(!ee(e)||e.__v_skip)return e;if(t&&t>0){if(n>=t)return e;n++}if(r=r||new Set,r.has(e))return e;if(r.add(e),me(e))xt(e.value,t,n,r);else if($(e))for(let o=0;o<e.length;o++)xt(e[o],t,n,r);else if(Js(e)||Dt(e))e.forEach(o=>{xt(o,t,n,r)});else if(Xs(e))for(const o in e)xt(e[o],t,n,r);return e}function ut(e,t,n,r){const o=e.dirs,s=t&&t.dirs;for(let i=0;i<o.length;i++){const c=o[i];s&&(c.oldValue=s[i].value);let a=c.dir[r];a&&(St(),Ce(a,n,8,[e.el,c,e,t]),It())}}/*! #__NO_SIDE_EFFECTS__ */function ki(e,t){return j(e)?(()=>se({name:e.name},t,{setup:e}))():e}const Sn=e=>!!e.type.__asyncLoader,Di=e=>e.type.__isKeepAlive;function nl(e,t){Pi(e,"a",t)}function rl(e,t){Pi(e,"da",t)}function Pi(e,t,n=ce){const r=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(Wn(t,r,n),n){let o=n.parent;for(;o&&o.parent;)Di(o.parent.vnode)&&ol(r,t,n,o),o=o.parent}}function ol(e,t,n,r){const o=Wn(t,e,r,!0);Ni(()=>{Jr(r[t],o)},n)}function Wn(e,t,n=ce,r=!1){if(n){const o=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;St();const c=dn(n),a=Ce(t,n,e,i);return c(),It(),a});return r?o.unshift(s):o.push(s),s}}const ze=e=>(t,n=ce)=>(!Gn||e==="sp")&&Wn(e,(...r)=>t(...r),n),sl=ze("bm"),Mi=ze("m"),il=ze("bu"),al=ze("u"),cl=ze("bum"),Ni=ze("um"),ll=ze("sp"),ul=ze("rtg"),fl=ze("rtc");function dl(e,t=ce){Wn("ec",e,t)}const Or=e=>e?Gi(e)?po(e)||e.proxy:Or(e.parent):null,Qt=se(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Or(e.parent),$root:e=>Or(e.root),$emit:e=>e.emit,$options:e=>uo(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,ao(e.update)}),$nextTick:e=>e.n||(e.n=Si.bind(e.proxy)),$watch:e=>tl.bind(e)}),rr=(e,t)=>e!==Z&&!e.__isScriptSetup&&K(e,t),hl={get({_:e},t){const{ctx:n,setupState:r,data:o,props:s,accessCache:i,type:c,appContext:a}=e;let f;if(t[0]!=="$"){const y=i[t];if(y!==void 0)switch(y){case 1:return r[t];case 2:return o[t];case 4:return n[t];case 3:return s[t]}else{if(rr(r,t))return i[t]=1,r[t];if(o!==Z&&K(o,t))return i[t]=2,o[t];if((f=e.propsOptions[0])&&K(f,t))return i[t]=3,s[t];if(n!==Z&&K(n,t))return i[t]=4,n[t];Rr&&(i[t]=0)}}const l=Qt[t];let h,p;if(l)return t==="$attrs"&&ge(e,"get",t),l(e);if((h=c.__cssModules)&&(h=h[t]))return h;if(n!==Z&&K(n,t))return i[t]=4,n[t];if(p=a.config.globalProperties,K(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:o,ctx:s}=e;return rr(o,t)?(o[t]=n,!0):r!==Z&&K(r,t)?(r[t]=n,!0):K(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:o,propsOptions:s}},i){let c;return!!n[i]||e!==Z&&K(e,i)||rr(t,i)||(c=s[0])&&K(c,i)||K(r,i)||K(Qt,i)||K(o.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:K(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Go(e){return $(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Rr=!0;function pl(e){const t=uo(e),n=e.proxy,r=e.ctx;Rr=!1,t.beforeCreate&&Jo(t.beforeCreate,e,"bc");const{data:o,computed:s,methods:i,watch:c,provide:a,inject:f,created:l,beforeMount:h,mounted:p,beforeUpdate:y,updated:O,activated:P,deactivated:B,beforeDestroy:x,beforeUnmount:M,destroyed:L,unmounted:U,render:te,renderTracked:F,renderTriggered:ue,errorCaptured:we,serverPrefetch:ct,expose:xe,inheritAttrs:Ge,components:lt,directives:ke,filters:Wt}=t;if(f&&gl(f,r,null),i)for(const G in i){const W=i[G];j(W)&&(r[G]=W.bind(n))}if(o){const G=o.call(n,n);ee(G)&&(e.data=Hn(G))}if(Rr=!0,s)for(const G in s){const W=s[G],Le=j(W)?W.bind(n,n):j(W.get)?W.get.bind(n,n):_e,Je=!j(W)&&j(W.set)?W.set.bind(n):_e,De=Ie({get:Le,set:Je});Object.defineProperty(r,G,{enumerable:!0,configurable:!0,get:()=>De.value,set:he=>De.value=he})}if(c)for(const G in c)$i(c[G],r,n,G);if(a){const G=j(a)?a.call(n):a;Reflect.ownKeys(G).forEach(W=>{In(W,G[W])})}l&&Jo(l,e,"c");function ne(G,W){$(W)?W.forEach(Le=>G(Le.bind(n))):W&&G(W.bind(n))}if(ne(sl,h),ne(Mi,p),ne(il,y),ne(al,O),ne(nl,P),ne(rl,B),ne(dl,we),ne(fl,F),ne(ul,ue),ne(cl,M),ne(Ni,U),ne(ll,ct),$(xe))if(xe.length){const G=e.exposed||(e.exposed={});xe.forEach(W=>{Object.defineProperty(G,W,{get:()=>n[W],set:Le=>n[W]=Le})})}else e.exposed||(e.exposed={});te&&e.render===_e&&(e.render=te),Ge!=null&&(e.inheritAttrs=Ge),lt&&(e.components=lt),ke&&(e.directives=ke)}function gl(e,t,n=_e){$(e)&&(e=xr(e));for(const r in e){const o=e[r];let s;ee(o)?"default"in o?s=Ve(o.from||r,o.default,!0):s=Ve(o.from||r):s=Ve(o),me(s)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:i=>s.value=i}):t[r]=s}}function Jo(e,t,n){Ce($(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function $i(e,t,n,r){const o=r.includes(".")?xi(n,r):()=>n[r];if(oe(e)){const s=t[e];j(s)&&En(o,s)}else if(j(e))En(o,e.bind(n));else if(ee(e))if($(e))e.forEach(s=>$i(s,t,n,r));else{const s=j(e.handler)?e.handler.bind(n):t[e.handler];j(s)&&En(o,s,e)}}function uo(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:o,optionsCache:s,config:{optionMergeStrategies:i}}=e.appContext,c=s.get(t);let a;return c?a=c:!o.length&&!n&&!r?a=t:(a={},o.length&&o.forEach(f=>xn(a,f,i,!0)),xn(a,t,i)),ee(t)&&s.set(t,a),a}function xn(e,t,n,r=!1){const{mixins:o,extends:s}=t;s&&xn(e,s,n,!0),o&&o.forEach(i=>xn(e,i,n,!0));for(const i in t)if(!(r&&i==="expose")){const c=ml[i]||n&&n[i];e[i]=c?c(e[i],t[i]):t[i]}return e}const ml={data:Yo,props:Qo,emits:Qo,methods:Jt,computed:Jt,beforeCreate:fe,created:fe,beforeMount:fe,mounted:fe,beforeUpdate:fe,updated:fe,beforeDestroy:fe,beforeUnmount:fe,destroyed:fe,unmounted:fe,activated:fe,deactivated:fe,errorCaptured:fe,serverPrefetch:fe,components:Jt,directives:Jt,watch:_l,provide:Yo,inject:bl};function Yo(e,t){return t?e?function(){return se(j(e)?e.call(this,this):e,j(t)?t.call(this,this):t)}:t:e}function bl(e,t){return Jt(xr(e),xr(t))}function xr(e){if($(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function fe(e,t){return e?[...new Set([].concat(e,t))]:t}function Jt(e,t){return e?se(Object.create(null),e,t):t}function Qo(e,t){return e?$(e)&&$(t)?[...new Set([...e,...t])]:se(Object.create(null),Go(e),Go(t??{})):t}function _l(e,t){if(!e)return t;if(!t)return e;const n=se(Object.create(null),e);for(const r in t)n[r]=fe(e[r],t[r]);return n}function Bi(){return{app:null,config:{isNativeTag:Xa,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let yl=0;function wl(e,t){return function(r,o=null){j(r)||(r=se({},r)),o!=null&&!ee(o)&&(o=null);const s=Bi(),i=new WeakSet;let c=!1;const a=s.app={_uid:yl++,_component:r,_props:o,_container:null,_context:s,_instance:null,version:Wl,get config(){return s.config},set config(f){},use(f,...l){return i.has(f)||(f&&j(f.install)?(i.add(f),f.install(a,...l)):j(f)&&(i.add(f),f(a,...l))),a},mixin(f){return s.mixins.includes(f)||s.mixins.push(f),a},component(f,l){return l?(s.components[f]=l,a):s.components[f]},directive(f,l){return l?(s.directives[f]=l,a):s.directives[f]},mount(f,l,h){if(!c){const p=de(r,o);return p.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),l&&t?t(p,f):e(p,f,h),c=!0,a._container=f,f.__vue_app__=a,po(p.component)||p.component.proxy}},unmount(){c&&(e(null,a._container),delete a._container.__vue_app__)},provide(f,l){return s.provides[f]=l,a},runWithContext(f){const l=Xt;Xt=a;try{return f()}finally{Xt=l}}};return a}}let Xt=null;function In(e,t){if(ce){let n=ce.provides;const r=ce.parent&&ce.parent.provides;r===n&&(n=ce.provides=Object.create(r)),n[e]=t}}function Ve(e,t,n=!1){const r=ce||Ae;if(r||Xt){const o=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Xt._context.provides;if(o&&e in o)return o[e];if(arguments.length>1)return n&&j(t)?t.call(r&&r.proxy):t}}function vl(e,t,n,r=!1){const o={},s={};Cn(s,zn,1),e.propsDefaults=Object.create(null),Li(e,t,o,s);for(const i in e.propsOptions[0])i in o||(o[i]=void 0);n?e.props=r?o:hi(o):e.type.props?e.props=o:e.props=s,e.attrs=s}function El(e,t,n,r){const{props:o,attrs:s,vnode:{patchFlag:i}}=e,c=V(o),[a]=e.propsOptions;let f=!1;if((r||i>0)&&!(i&16)){if(i&8){const l=e.vnode.dynamicProps;for(let h=0;h<l.length;h++){let p=l[h];if(Vn(e.emitsOptions,p))continue;const y=t[p];if(a)if(K(s,p))y!==s[p]&&(s[p]=y,f=!0);else{const O=Be(p);o[O]=kr(a,c,O,y,e,!1)}else y!==s[p]&&(s[p]=y,f=!0)}}}else{Li(e,t,o,s)&&(f=!0);let l;for(const h in c)(!t||!K(t,h)&&((l=Kt(h))===h||!K(t,l)))&&(a?n&&(n[h]!==void 0||n[l]!==void 0)&&(o[h]=kr(a,c,h,void 0,e,!0)):delete o[h]);if(s!==c)for(const h in s)(!t||!K(t,h))&&(delete s[h],f=!0)}f&&Ke(e,"set","$attrs")}function Li(e,t,n,r){const[o,s]=e.propsOptions;let i=!1,c;if(t)for(let a in t){if(Yt(a))continue;const f=t[a];let l;o&&K(o,l=Be(a))?!s||!s.includes(l)?n[l]=f:(c||(c={}))[l]=f:Vn(e.emitsOptions,a)||(!(a in r)||f!==r[a])&&(r[a]=f,i=!0)}if(s){const a=V(n),f=c||Z;for(let l=0;l<s.length;l++){const h=s[l];n[h]=kr(o,a,h,f[h],e,!K(f,h))}}return i}function kr(e,t,n,r,o,s){const i=e[n];if(i!=null){const c=K(i,"default");if(c&&r===void 0){const a=i.default;if(i.type!==Function&&!i.skipFactory&&j(a)){const{propsDefaults:f}=o;if(n in f)r=f[n];else{const l=dn(o);r=f[n]=a.call(null,t),l()}}else r=a}i[0]&&(s&&!c?r=!1:i[1]&&(r===""||r===Kt(n))&&(r=!0))}return r}function Fi(e,t,n=!1){const r=t.propsCache,o=r.get(e);if(o)return o;const s=e.props,i={},c=[];let a=!1;if(!j(e)){const l=h=>{a=!0;const[p,y]=Fi(h,t,!0);se(i,p),y&&c.push(...y)};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}if(!s&&!a)return ee(e)&&r.set(e,kt),kt;if($(s))for(let l=0;l<s.length;l++){const h=Be(s[l]);Xo(h)&&(i[h]=Z)}else if(s)for(const l in s){const h=Be(l);if(Xo(h)){const p=s[l],y=i[h]=$(p)||j(p)?{type:p}:se({},p);if(y){const O=ts(Boolean,y.type),P=ts(String,y.type);y[0]=O>-1,y[1]=P<0||O<P,(O>-1||K(y,"default"))&&c.push(h)}}}const f=[i,c];return ee(e)&&r.set(e,f),f}function Xo(e){return e[0]!=="$"&&!Yt(e)}function Zo(e){return e===null?"null":typeof e=="function"?e.name||"":typeof e=="object"&&e.constructor&&e.constructor.name||""}function es(e,t){return Zo(e)===Zo(t)}function ts(e,t){return $(t)?t.findIndex(n=>es(n,e)):j(t)&&es(t,e)?0:-1}const ji=e=>e[0]==="_"||e==="$stable",fo=e=>$(e)?e.map(Ne):[Ne(e)],Sl=(e,t,n)=>{if(t._n)return t;const r=co((...o)=>fo(t(...o)),n);return r._c=!1,r},Hi=(e,t,n)=>{const r=e._ctx;for(const o in e){if(ji(o))continue;const s=e[o];if(j(s))t[o]=Sl(o,s,r);else if(s!=null){const i=fo(s);t[o]=()=>i}}},Ki=(e,t)=>{const n=fo(t);e.slots.default=()=>n},Il=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=V(t),Cn(t,"_",n)):Hi(t,e.slots={})}else e.slots={},t&&Ki(e,t);Cn(e.slots,zn,1)},Al=(e,t,n)=>{const{vnode:r,slots:o}=e;let s=!0,i=Z;if(r.shapeFlag&32){const c=t._;c?n&&c===1?s=!1:(se(o,t),!n&&c===1&&delete o._):(s=!t.$stable,Hi(t,o)),i=t}else t&&(Ki(e,t),i={default:1});if(s)for(const c in o)!ji(c)&&i[c]==null&&delete o[c]};function Dr(e,t,n,r,o=!1){if($(e)){e.forEach((p,y)=>Dr(p,t&&($(t)?t[y]:t),n,r,o));return}if(Sn(r)&&!o)return;const s=r.shapeFlag&4?po(r.component)||r.component.proxy:r.el,i=o?null:s,{i:c,r:a}=e,f=t&&t.r,l=c.refs===Z?c.refs={}:c.refs,h=c.setupState;if(f!=null&&f!==a&&(oe(f)?(l[f]=null,K(h,f)&&(h[f]=null)):me(f)&&(f.value=null)),j(a))rt(a,c,12,[i,l]);else{const p=oe(a),y=me(a);if(p||y){const O=()=>{if(e.f){const P=p?K(h,a)?h[a]:l[a]:a.value;o?$(P)&&Jr(P,s):$(P)?P.includes(s)||P.push(s):p?(l[a]=[s],K(h,a)&&(h[a]=l[a])):(a.value=[s],e.k&&(l[e.k]=a.value))}else p?(l[a]=i,K(h,a)&&(h[a]=i)):y&&(a.value=i,e.k&&(l[e.k]=i))};i?(O.id=-1,pe(O,n)):O()}}}const pe=Xc;function Tl(e){return Cl(e)}function Cl(e,t){const n=Zs();n.__VUE__=!0;const{insert:r,remove:o,patchProp:s,createElement:i,createText:c,createComment:a,setText:f,setElementText:l,parentNode:h,nextSibling:p,setScopeId:y=_e,insertStaticContent:O}=e,P=(u,d,g,_=null,m=null,E=null,A=void 0,v=null,S=!!d.dynamicChildren)=>{if(u===d)return;u&&!zt(u,d)&&(_=b(u),he(u,m,E,!0),u=null),d.patchFlag===-2&&(S=!1,d.dynamicChildren=null);const{type:w,ref:C,shapeFlag:D}=d;switch(w){case qn:B(u,d,g,_);break;case bt:x(u,d,g,_);break;case sr:u==null&&M(d,g,_,A);break;case Se:lt(u,d,g,_,m,E,A,v,S);break;default:D&1?te(u,d,g,_,m,E,A,v,S):D&6?ke(u,d,g,_,m,E,A,v,S):(D&64||D&128)&&w.process(u,d,g,_,m,E,A,v,S,R)}C!=null&&m&&Dr(C,u&&u.ref,E,d||u,!d)},B=(u,d,g,_)=>{if(u==null)r(d.el=c(d.children),g,_);else{const m=d.el=u.el;d.children!==u.children&&f(m,d.children)}},x=(u,d,g,_)=>{u==null?r(d.el=a(d.children||""),g,_):d.el=u.el},M=(u,d,g,_)=>{[u.el,u.anchor]=O(u.children,d,g,_,u.el,u.anchor)},L=({el:u,anchor:d},g,_)=>{let m;for(;u&&u!==d;)m=p(u),r(u,g,_),u=m;r(d,g,_)},U=({el:u,anchor:d})=>{let g;for(;u&&u!==d;)g=p(u),o(u),u=g;o(d)},te=(u,d,g,_,m,E,A,v,S)=>{d.type==="svg"?A="svg":d.type==="math"&&(A="mathml"),u==null?F(d,g,_,m,E,A,v,S):ct(u,d,m,E,A,v,S)},F=(u,d,g,_,m,E,A,v)=>{let S,w;const{props:C,shapeFlag:D,transition:k,dirs:N}=u;if(S=u.el=i(u.type,E,C&&C.is,C),D&8?l(S,u.children):D&16&&we(u.children,S,null,_,m,or(u,E),A,v),N&&ut(u,null,_,"created"),ue(S,u,u.scopeId,A,_),C){for(const J in C)J!=="value"&&!Yt(J)&&s(S,J,null,C[J],E,u.children,_,m,ie);"value"in C&&s(S,"value",null,C.value,E),(w=C.onVnodeBeforeMount)&&Me(w,_,u)}N&&ut(u,null,_,"beforeMount");const H=Ol(m,k);H&&k.beforeEnter(S),r(S,d,g),((w=C&&C.onVnodeMounted)||H||N)&&pe(()=>{w&&Me(w,_,u),H&&k.enter(S),N&&ut(u,null,_,"mounted")},m)},ue=(u,d,g,_,m)=>{if(g&&y(u,g),_)for(let E=0;E<_.length;E++)y(u,_[E]);if(m){let E=m.subTree;if(d===E){const A=m.vnode;ue(u,A,A.scopeId,A.slotScopeIds,m.parent)}}},we=(u,d,g,_,m,E,A,v,S=0)=>{for(let w=S;w<u.length;w++){const C=u[w]=v?Ze(u[w]):Ne(u[w]);P(null,C,d,g,_,m,E,A,v)}},ct=(u,d,g,_,m,E,A)=>{const v=d.el=u.el;let{patchFlag:S,dynamicChildren:w,dirs:C}=d;S|=u.patchFlag&16;const D=u.props||Z,k=d.props||Z;let N;if(g&&ft(g,!1),(N=k.onVnodeBeforeUpdate)&&Me(N,g,d,u),C&&ut(d,u,g,"beforeUpdate"),g&&ft(g,!0),w?xe(u.dynamicChildren,w,v,g,_,or(d,m),E):A||W(u,d,v,null,g,_,or(d,m),E,!1),S>0){if(S&16)Ge(v,d,D,k,g,_,m);else if(S&2&&D.class!==k.class&&s(v,"class",null,k.class,m),S&4&&s(v,"style",D.style,k.style,m),S&8){const H=d.dynamicProps;for(let J=0;J<H.length;J++){const X=H[J],re=D[X],ve=k[X];(ve!==re||X==="value")&&s(v,X,re,ve,m,u.children,g,_,ie)}}S&1&&u.children!==d.children&&l(v,d.children)}else!A&&w==null&&Ge(v,d,D,k,g,_,m);((N=k.onVnodeUpdated)||C)&&pe(()=>{N&&Me(N,g,d,u),C&&ut(d,u,g,"updated")},_)},xe=(u,d,g,_,m,E,A)=>{for(let v=0;v<d.length;v++){const S=u[v],w=d[v],C=S.el&&(S.type===Se||!zt(S,w)||S.shapeFlag&70)?h(S.el):g;P(S,w,C,null,_,m,E,A,!0)}},Ge=(u,d,g,_,m,E,A)=>{if(g!==_){if(g!==Z)for(const v in g)!Yt(v)&&!(v in _)&&s(u,v,g[v],null,A,d.children,m,E,ie);for(const v in _){if(Yt(v))continue;const S=_[v],w=g[v];S!==w&&v!=="value"&&s(u,v,w,S,A,d.children,m,E,ie)}"value"in _&&s(u,"value",g.value,_.value,A)}},lt=(u,d,g,_,m,E,A,v,S)=>{const w=d.el=u?u.el:c(""),C=d.anchor=u?u.anchor:c("");let{patchFlag:D,dynamicChildren:k,slotScopeIds:N}=d;N&&(v=v?v.concat(N):N),u==null?(r(w,g,_),r(C,g,_),we(d.children||[],g,C,m,E,A,v,S)):D>0&&D&64&&k&&u.dynamicChildren?(xe(u.dynamicChildren,k,g,m,E,A,v),(d.key!=null||m&&d===m.subTree)&&Vi(u,d,!0)):W(u,d,g,C,m,E,A,v,S)},ke=(u,d,g,_,m,E,A,v,S)=>{d.slotScopeIds=v,u==null?d.shapeFlag&512?m.ctx.activate(d,g,_,A,S):Wt(d,g,_,m,E,A,S):At(u,d,S)},Wt=(u,d,g,_,m,E,A)=>{const v=u.component=Ll(u,_,m);if(Di(u)&&(v.ctx.renderer=R),Fl(v),v.asyncDep){if(m&&m.registerDep(v,ne),!u.el){const S=v.subTree=de(bt);x(null,S,d,g)}}else ne(v,u,d,g,m,E,A)},At=(u,d,g)=>{const _=d.component=u.component;if(zc(u,d,g))if(_.asyncDep&&!_.asyncResolved){G(_,d,g);return}else _.next=d,Fc(_.update),_.effect.dirty=!0,_.update();else d.el=u.el,_.vnode=d},ne=(u,d,g,_,m,E,A)=>{const v=()=>{if(u.isMounted){let{next:C,bu:D,u:k,parent:N,vnode:H}=u;{const Ot=Ui(u);if(Ot){C&&(C.el=H.el,G(u,C,A)),Ot.asyncDep.then(()=>{u.isUnmounted||v()});return}}let J=C,X;ft(u,!1),C?(C.el=H.el,G(u,C,A)):C=H,D&&er(D),(X=C.props&&C.props.onVnodeBeforeUpdate)&&Me(X,N,C,H),ft(u,!0);const re=nr(u),ve=u.subTree;u.subTree=re,P(ve,re,h(ve.el),b(ve),u,m,E),C.el=re.el,J===null&&Gc(u,re.el),k&&pe(k,m),(X=C.props&&C.props.onVnodeUpdated)&&pe(()=>Me(X,N,C,H),m)}else{let C;const{el:D,props:k}=d,{bm:N,m:H,parent:J}=u,X=Sn(d);if(ft(u,!1),N&&er(N),!X&&(C=k&&k.onVnodeBeforeMount)&&Me(C,J,d),ft(u,!0),D&&Q){const re=()=>{u.subTree=nr(u),Q(D,u.subTree,u,m,null)};X?d.type.__asyncLoader().then(()=>!u.isUnmounted&&re()):re()}else{const re=u.subTree=nr(u);P(null,re,g,_,u,m,E),d.el=re.el}if(H&&pe(H,m),!X&&(C=k&&k.onVnodeMounted)){const re=d;pe(()=>Me(C,J,re),m)}(d.shapeFlag&256||J&&Sn(J.vnode)&&J.vnode.shapeFlag&256)&&u.a&&pe(u.a,m),u.isMounted=!0,d=g=_=null}},S=u.effect=new Zr(v,_e,()=>ao(w),u.scope),w=u.update=()=>{S.dirty&&S.run()};w.id=u.uid,ft(u,!0),w()},G=(u,d,g)=>{d.component=u;const _=u.vnode.props;u.vnode=d,u.next=null,El(u,d.props,_,g),Al(u,d.children,g),St(),Wo(u),It()},W=(u,d,g,_,m,E,A,v,S=!1)=>{const w=u&&u.children,C=u?u.shapeFlag:0,D=d.children,{patchFlag:k,shapeFlag:N}=d;if(k>0){if(k&128){Je(w,D,g,_,m,E,A,v,S);return}else if(k&256){Le(w,D,g,_,m,E,A,v,S);return}}N&8?(C&16&&ie(w,m,E),D!==w&&l(g,D)):C&16?N&16?Je(w,D,g,_,m,E,A,v,S):ie(w,m,E,!0):(C&8&&l(g,""),N&16&&we(D,g,_,m,E,A,v,S))},Le=(u,d,g,_,m,E,A,v,S)=>{u=u||kt,d=d||kt;const w=u.length,C=d.length,D=Math.min(w,C);let k;for(k=0;k<D;k++){const N=d[k]=S?Ze(d[k]):Ne(d[k]);P(u[k],N,g,null,m,E,A,v,S)}w>C?ie(u,m,E,!0,!1,D):we(d,g,_,m,E,A,v,S,D)},Je=(u,d,g,_,m,E,A,v,S)=>{let w=0;const C=d.length;let D=u.length-1,k=C-1;for(;w<=D&&w<=k;){const N=u[w],H=d[w]=S?Ze(d[w]):Ne(d[w]);if(zt(N,H))P(N,H,g,null,m,E,A,v,S);else break;w++}for(;w<=D&&w<=k;){const N=u[D],H=d[k]=S?Ze(d[k]):Ne(d[k]);if(zt(N,H))P(N,H,g,null,m,E,A,v,S);else break;D--,k--}if(w>D){if(w<=k){const N=k+1,H=N<C?d[N].el:_;for(;w<=k;)P(null,d[w]=S?Ze(d[w]):Ne(d[w]),g,H,m,E,A,v,S),w++}}else if(w>k)for(;w<=D;)he(u[w],m,E,!0),w++;else{const N=w,H=w,J=new Map;for(w=H;w<=k;w++){const be=d[w]=S?Ze(d[w]):Ne(d[w]);be.key!=null&&J.set(be.key,w)}let X,re=0;const ve=k-H+1;let Ot=!1,Mo=0;const qt=new Array(ve);for(w=0;w<ve;w++)qt[w]=0;for(w=N;w<=D;w++){const be=u[w];if(re>=ve){he(be,m,E,!0);continue}let Pe;if(be.key!=null)Pe=J.get(be.key);else for(X=H;X<=k;X++)if(qt[X-H]===0&&zt(be,d[X])){Pe=X;break}Pe===void 0?he(be,m,E,!0):(qt[Pe-H]=w+1,Pe>=Mo?Mo=Pe:Ot=!0,P(be,d[Pe],g,null,m,E,A,v,S),re++)}const No=Ot?Rl(qt):kt;for(X=No.length-1,w=ve-1;w>=0;w--){const be=H+w,Pe=d[be],$o=be+1<C?d[be+1].el:_;qt[w]===0?P(null,Pe,g,$o,m,E,A,v,S):Ot&&(X<0||w!==No[X]?De(Pe,g,$o,2):X--)}}},De=(u,d,g,_,m=null)=>{const{el:E,type:A,transition:v,children:S,shapeFlag:w}=u;if(w&6){De(u.component.subTree,d,g,_);return}if(w&128){u.suspense.move(d,g,_);return}if(w&64){A.move(u,d,g,R);return}if(A===Se){r(E,d,g);for(let D=0;D<S.length;D++)De(S[D],d,g,_);r(u.anchor,d,g);return}if(A===sr){L(u,d,g);return}if(_!==2&&w&1&&v)if(_===0)v.beforeEnter(E),r(E,d,g),pe(()=>v.enter(E),m);else{const{leave:D,delayLeave:k,afterLeave:N}=v,H=()=>r(E,d,g),J=()=>{D(E,()=>{H(),N&&N()})};k?k(E,H,J):J()}else r(E,d,g)},he=(u,d,g,_=!1,m=!1)=>{const{type:E,props:A,ref:v,children:S,dynamicChildren:w,shapeFlag:C,patchFlag:D,dirs:k}=u;if(v!=null&&Dr(v,null,g,u,!0),C&256){d.ctx.deactivate(u);return}const N=C&1&&k,H=!Sn(u);let J;if(H&&(J=A&&A.onVnodeBeforeUnmount)&&Me(J,d,u),C&6)pn(u.component,g,_);else{if(C&128){u.suspense.unmount(g,_);return}N&&ut(u,null,d,"beforeUnmount"),C&64?u.type.remove(u,d,g,m,R,_):w&&(E!==Se||D>0&&D&64)?ie(w,d,g,!1,!0):(E===Se&&D&384||!m&&C&16)&&ie(S,d,g),_&&Tt(u)}(H&&(J=A&&A.onVnodeUnmounted)||N)&&pe(()=>{J&&Me(J,d,u),N&&ut(u,null,d,"unmounted")},g)},Tt=u=>{const{type:d,el:g,anchor:_,transition:m}=u;if(d===Se){Ct(g,_);return}if(d===sr){U(u);return}const E=()=>{o(g),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(u.shapeFlag&1&&m&&!m.persisted){const{leave:A,delayLeave:v}=m,S=()=>A(g,E);v?v(u.el,E,S):S()}else E()},Ct=(u,d)=>{let g;for(;u!==d;)g=p(u),o(u),u=g;o(d)},pn=(u,d,g)=>{const{bum:_,scope:m,update:E,subTree:A,um:v}=u;_&&er(_),m.stop(),E&&(E.active=!1,he(A,u,d,g)),v&&pe(v,d),pe(()=>{u.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},ie=(u,d,g,_=!1,m=!1,E=0)=>{for(let A=E;A<u.length;A++)he(u[A],d,g,_,m)},b=u=>u.shapeFlag&6?b(u.component.subTree):u.shapeFlag&128?u.suspense.next():p(u.anchor||u.el);let T=!1;const I=(u,d,g)=>{u==null?d._vnode&&he(d._vnode,null,null,!0):P(d._vnode||null,u,d,null,null,null,g),T||(T=!0,Wo(),Ai(),T=!1),d._vnode=u},R={p:P,um:he,m:De,r:Tt,mt:Wt,mc:we,pc:W,pbc:xe,n:b,o:e};let q,Q;return t&&([q,Q]=t(R)),{render:I,hydrate:q,createApp:wl(I,q)}}function or({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function ft({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Ol(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Vi(e,t,n=!1){const r=e.children,o=t.children;if($(r)&&$(o))for(let s=0;s<r.length;s++){const i=r[s];let c=o[s];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=o[s]=Ze(o[s]),c.el=i.el),n||Vi(i,c)),c.type===qn&&(c.el=i.el)}}function Rl(e){const t=e.slice(),n=[0];let r,o,s,i,c;const a=e.length;for(r=0;r<a;r++){const f=e[r];if(f!==0){if(o=n[n.length-1],e[o]<f){t[r]=o,n.push(r);continue}for(s=0,i=n.length-1;s<i;)c=s+i>>1,e[n[c]]<f?s=c+1:i=c;f<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}for(s=n.length,i=n[s-1];s-- >0;)n[s]=i,i=t[i];return n}function Ui(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Ui(t)}const xl=e=>e.__isTeleport,Se=Symbol.for("v-fgt"),qn=Symbol.for("v-txt"),bt=Symbol.for("v-cmt"),sr=Symbol.for("v-stc"),Zt=[];let Te=null;function sn(e=!1){Zt.push(Te=e?null:[])}function kl(){Zt.pop(),Te=Zt[Zt.length-1]||null}let an=1;function ns(e){an+=e}function Wi(e){return e.dynamicChildren=an>0?Te||kt:null,kl(),an>0&&Te&&Te.push(e),e}function Pr(e,t,n,r,o,s){return Wi(le(e,t,n,r,o,s,!0))}function qi(e,t,n,r,o){return Wi(de(e,t,n,r,o,!0))}function Mr(e){return e?e.__v_isVNode===!0:!1}function zt(e,t){return e.type===t.type&&e.key===t.key}const zn="__vInternal",zi=({key:e})=>e??null,An=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?oe(e)||me(e)||j(e)?{i:Ae,r:e,k:t,f:!!n}:e:null);function le(e,t=null,n=null,r=0,o=null,s=e===Se?0:1,i=!1,c=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&zi(t),ref:t&&An(t),scopeId:Un,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:Ae};return c?(ho(a,n),s&128&&e.normalize(a)):n&&(a.shapeFlag|=oe(n)?8:16),an>0&&!i&&Te&&(a.patchFlag>0||s&6)&&a.patchFlag!==32&&Te.push(a),a}const de=Dl;function Dl(e,t=null,n=null,r=0,o=null,s=!1){if((!e||e===Jc)&&(e=bt),Mr(e)){const c=Lt(e,t,!0);return n&&ho(c,n),an>0&&!s&&Te&&(c.shapeFlag&6?Te[Te.indexOf(e)]=c:Te.push(c)),c.patchFlag|=-2,c}if(Ul(e)&&(e=e.__vccOpts),t){t=Pl(t);let{class:c,style:a}=t;c&&!oe(c)&&(t.class=Xr(c)),ee(a)&&(gi(a)&&!$(a)&&(a=se({},a)),t.style=Qr(a))}const i=oe(e)?1:Qc(e)?128:xl(e)?64:ee(e)?4:j(e)?2:0;return le(e,t,n,r,o,i,s,!0)}function Pl(e){return e?gi(e)||zn in e?se({},e):e:null}function Lt(e,t,n=!1){const{props:r,ref:o,patchFlag:s,children:i}=e,c=t?Nl(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&zi(c),ref:t&&t.ref?n&&o?$(o)?o.concat(An(t)):[o,An(t)]:An(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Se?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Lt(e.ssContent),ssFallback:e.ssFallback&&Lt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function We(e=" ",t=0){return de(qn,null,e,t)}function Ml(e="",t=!1){return t?(sn(),qi(bt,null,e)):de(bt,null,e)}function Ne(e){return e==null||typeof e=="boolean"?de(bt):$(e)?de(Se,null,e.slice()):typeof e=="object"?Ze(e):de(qn,null,String(e))}function Ze(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Lt(e)}function ho(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if($(t))n=16;else if(typeof t=="object")if(r&65){const o=t.default;o&&(o._c&&(o._d=!1),ho(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!(zn in t)?t._ctx=Ae:o===3&&Ae&&(Ae.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else j(t)?(t={default:t,_ctx:Ae},n=32):(t=String(t),r&64?(n=16,t=[We(t)]):n=8);e.children=t,e.shapeFlag|=n}function Nl(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const o in r)if(o==="class")t.class!==r.class&&(t.class=Xr([t.class,r.class]));else if(o==="style")t.style=Qr([t.style,r.style]);else if($n(o)){const s=t[o],i=r[o];i&&s!==i&&!($(s)&&s.includes(i))&&(t[o]=s?[].concat(s,i):i)}else o!==""&&(t[o]=r[o])}return t}function Me(e,t,n,r=null){Ce(e,t,7,[n,r])}const $l=Bi();let Bl=0;function Ll(e,t,n){const r=e.type,o=(t?t.appContext:e.appContext)||$l,s={uid:Bl++,vnode:e,type:r,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new fc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Fi(r,o),emitsOptions:Ci(r,o),emit:null,emitted:null,propsDefaults:Z,inheritAttrs:r.inheritAttrs,ctx:Z,data:Z,props:Z,attrs:Z,slots:Z,refs:Z,setupState:Z,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=Kc.bind(null,s),e.ce&&e.ce(s),s}let ce=null,kn,Nr;{const e=Zs(),t=(n,r)=>{let o;return(o=e[n])||(o=e[n]=[]),o.push(r),s=>{o.length>1?o.forEach(i=>i(s)):o[0](s)}};kn=t("__VUE_INSTANCE_SETTERS__",n=>ce=n),Nr=t("__VUE_SSR_SETTERS__",n=>Gn=n)}const dn=e=>{const t=ce;return kn(e),e.scope.on(),()=>{e.scope.off(),kn(t)}},rs=()=>{ce&&ce.scope.off(),kn(null)};function Gi(e){return e.vnode.shapeFlag&4}let Gn=!1;function Fl(e,t=!1){t&&Nr(t);const{props:n,children:r}=e.vnode,o=Gi(e);vl(e,n,o,t),Il(e,r);const s=o?jl(e,t):void 0;return t&&Nr(!1),s}function jl(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=mi(new Proxy(e.ctx,hl));const{setup:r}=n;if(r){const o=e.setupContext=r.length>1?Kl(e):null,s=dn(e);St();const i=rt(r,e,0,[e.props,o]);if(It(),s(),Ys(i)){if(i.then(rs,rs),t)return i.then(c=>{os(e,c,t)}).catch(c=>{Kn(c,e,0)});e.asyncDep=i}else os(e,i,t)}else Ji(e,t)}function os(e,t,n){j(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ee(t)&&(e.setupState=vi(t)),Ji(e,n)}let ss;function Ji(e,t,n){const r=e.type;if(!e.render){if(!t&&ss&&!r.render){const o=r.template||uo(e).template;if(o){const{isCustomElement:s,compilerOptions:i}=e.appContext.config,{delimiters:c,compilerOptions:a}=r,f=se(se({isCustomElement:s,delimiters:c},i),a);r.render=ss(o,f)}}e.render=r.render||_e}{const o=dn(e);St();try{pl(e)}finally{It(),o()}}}function Hl(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return ge(e,"get","$attrs"),t[n]}}))}function Kl(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return Hl(e)},slots:e.slots,emit:e.emit,expose:t}}function po(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(vi(mi(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Qt)return Qt[n](e)},has(t,n){return n in t||n in Qt}}))}function Vl(e,t=!0){return j(e)?e.displayName||e.name:e.name||t&&e.__name}function Ul(e){return j(e)&&"__vccOpts"in e}const Ie=(e,t)=>Pc(e,t,Gn);function Yi(e,t,n){const r=arguments.length;return r===2?ee(t)&&!$(t)?Mr(t)?de(e,null,[t]):de(e,t):de(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Mr(n)&&(n=[n]),de(e,t,n))}const Wl="3.4.21";/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const ql="http://www.w3.org/2000/svg",zl="http://www.w3.org/1998/Math/MathML",et=typeof document<"u"?document:null,is=et&&et.createElement("template"),Gl={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const o=t==="svg"?et.createElementNS(ql,e):t==="mathml"?et.createElementNS(zl,e):et.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&o.setAttribute("multiple",r.multiple),o},createText:e=>et.createTextNode(e),createComment:e=>et.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>et.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,o,s){const i=n?n.previousSibling:t.lastChild;if(o&&(o===s||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===s||!(o=o.nextSibling)););else{is.innerHTML=r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e;const c=is.content;if(r==="svg"||r==="mathml"){const a=c.firstChild;for(;a.firstChild;)c.appendChild(a.firstChild);c.removeChild(a)}t.insertBefore(c,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Jl=Symbol("_vtc");function Yl(e,t,n){const r=e[Jl];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const as=Symbol("_vod"),Ql=Symbol("_vsh"),Xl=Symbol(""),Zl=/(^|;)\s*display\s*:/;function eu(e,t,n){const r=e.style,o=oe(n);let s=!1;if(n&&!o){if(t)if(oe(t))for(const i of t.split(";")){const c=i.slice(0,i.indexOf(":")).trim();n[c]==null&&Tn(r,c,"")}else for(const i in t)n[i]==null&&Tn(r,i,"");for(const i in n)i==="display"&&(s=!0),Tn(r,i,n[i])}else if(o){if(t!==n){const i=r[Xl];i&&(n+=";"+i),r.cssText=n,s=Zl.test(n)}}else t&&e.removeAttribute("style");as in e&&(e[as]=s?r.display:"",e[Ql]&&(r.display="none"))}const cs=/\s*!important$/;function Tn(e,t,n){if($(n))n.forEach(r=>Tn(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=tu(e,t);cs.test(n)?e.setProperty(Kt(r),n.replace(cs,""),"important"):e[r]=n}}const ls=["Webkit","Moz","ms"],ir={};function tu(e,t){const n=ir[t];if(n)return n;let r=Be(t);if(r!=="filter"&&r in e)return ir[t]=r;r=Fn(r);for(let o=0;o<ls.length;o++){const s=ls[o]+r;if(s in e)return ir[t]=s}return t}const us="http://www.w3.org/1999/xlink";function nu(e,t,n,r,o){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(us,t.slice(6,t.length)):e.setAttributeNS(us,t,n);else{const s=lc(t);n==null||s&&!ei(n)?e.removeAttribute(t):e.setAttribute(t,s?"":n)}}function ru(e,t,n,r,o,s,i){if(t==="innerHTML"||t==="textContent"){r&&i(r,o,s),e[t]=n??"";return}const c=e.tagName;if(t==="value"&&c!=="PROGRESS"&&!c.includes("-")){const f=c==="OPTION"?e.getAttribute("value")||"":e.value,l=n??"";(f!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let a=!1;if(n===""||n==null){const f=typeof e[t];f==="boolean"?n=ei(n):n==null&&f==="string"?(n="",a=!0):f==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(t)}function ou(e,t,n,r){e.addEventListener(t,n,r)}function su(e,t,n,r){e.removeEventListener(t,n,r)}const fs=Symbol("_vei");function iu(e,t,n,r,o=null){const s=e[fs]||(e[fs]={}),i=s[t];if(r&&i)i.value=r;else{const[c,a]=au(t);if(r){const f=s[t]=uu(r,o);ou(e,c,f,a)}else i&&(su(e,c,i,a),s[t]=void 0)}}const ds=/(?:Once|Passive|Capture)$/;function au(e){let t;if(ds.test(e)){t={};let r;for(;r=e.match(ds);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Kt(e.slice(2)),t]}let ar=0;const cu=Promise.resolve(),lu=()=>ar||(cu.then(()=>ar=0),ar=Date.now());function uu(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ce(fu(r,n.value),t,5,[r])};return n.value=e,n.attached=lu(),n}function fu(e,t){if($(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>o=>!o._stopped&&r&&r(o))}else return t}const hs=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,du=(e,t,n,r,o,s,i,c,a)=>{const f=o==="svg";t==="class"?Yl(e,r,f):t==="style"?eu(e,n,r):$n(t)?Gr(t)||iu(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):hu(e,t,r,f))?ru(e,t,r,s,i,c,a):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),nu(e,t,r,f))};function hu(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&hs(t)&&j(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const o=e.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return hs(t)&&oe(n)?!1:t in e}const pu=se({patchProp:du},Gl);let ps;function gu(){return ps||(ps=Tl(pu))}const mu=(...e)=>{const t=gu().createApp(...e),{mount:n}=t;return t.mount=r=>{const o=_u(r);if(!o)return;const s=t._component;!j(s)&&!s.render&&!s.template&&(s.template=o.innerHTML),o.innerHTML="";const i=n(o,!1,bu(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),i},t};function bu(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function _u(e){return oe(e)?document.querySelector(e):e}const Qi=(e,t)=>{const n=e.__vccOpts||e;for(const[r,o]of t)n[r]=o;return n},yu={};function wu(e,t){const n=lo("RouterView");return sn(),qi(n)}const vu=Qi(yu,[["render",wu]]);/*!
  * vue-router v4.3.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Rt=typeof document<"u";function Eu(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const z=Object.assign;function cr(e,t){const n={};for(const r in t){const o=t[r];n[r]=Re(o)?o.map(e):e(o)}return n}const en=()=>{},Re=Array.isArray,Xi=/#/g,Su=/&/g,Iu=/\//g,Au=/=/g,Tu=/\?/g,Zi=/\+/g,Cu=/%5B/g,Ou=/%5D/g,ea=/%5E/g,Ru=/%60/g,ta=/%7B/g,xu=/%7C/g,na=/%7D/g,ku=/%20/g;function go(e){return encodeURI(""+e).replace(xu,"|").replace(Cu,"[").replace(Ou,"]")}function Du(e){return go(e).replace(ta,"{").replace(na,"}").replace(ea,"^")}function $r(e){return go(e).replace(Zi,"%2B").replace(ku,"+").replace(Xi,"%23").replace(Su,"%26").replace(Ru,"`").replace(ta,"{").replace(na,"}").replace(ea,"^")}function Pu(e){return $r(e).replace(Au,"%3D")}function Mu(e){return go(e).replace(Xi,"%23").replace(Tu,"%3F")}function Nu(e){return e==null?"":Mu(e).replace(Iu,"%2F")}function cn(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const $u=/\/$/,Bu=e=>e.replace($u,"");function lr(e,t,n="/"){let r,o={},s="",i="";const c=t.indexOf("#");let a=t.indexOf("?");return c<a&&c>=0&&(a=-1),a>-1&&(r=t.slice(0,a),s=t.slice(a+1,c>-1?c:t.length),o=e(s)),c>-1&&(r=r||t.slice(0,c),i=t.slice(c,t.length)),r=Hu(r??t,n),{fullPath:r+(s&&"?")+s+i,path:r,query:o,hash:cn(i)}}function Lu(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function gs(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Fu(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&Ft(t.matched[r],n.matched[o])&&ra(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Ft(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ra(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!ju(e[n],t[n]))return!1;return!0}function ju(e,t){return Re(e)?ms(e,t):Re(t)?ms(t,e):e===t}function ms(e,t){return Re(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Hu(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),o=r[r.length-1];(o===".."||o===".")&&r.push("");let s=n.length-1,i,c;for(i=0;i<r.length;i++)if(c=r[i],c!==".")if(c==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i).join("/")}var ln;(function(e){e.pop="pop",e.push="push"})(ln||(ln={}));var tn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(tn||(tn={}));function Ku(e){if(!e)if(Rt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Bu(e)}const Vu=/^[^#]+#/;function Uu(e,t){return e.replace(Vu,"#")+t}function Wu(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Jn=()=>({left:window.scrollX,top:window.scrollY});function qu(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=Wu(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function bs(e,t){return(history.state?history.state.position-t:-1)+e}const Br=new Map;function zu(e,t){Br.set(e,t)}function Gu(e){const t=Br.get(e);return Br.delete(e),t}let Ju=()=>location.protocol+"//"+location.host;function oa(e,t){const{pathname:n,search:r,hash:o}=t,s=e.indexOf("#");if(s>-1){let c=o.includes(e.slice(s))?e.slice(s).length:1,a=o.slice(c);return a[0]!=="/"&&(a="/"+a),gs(a,"")}return gs(n,e)+r+o}function Yu(e,t,n,r){let o=[],s=[],i=null;const c=({state:p})=>{const y=oa(e,location),O=n.value,P=t.value;let B=0;if(p){if(n.value=y,t.value=p,i&&i===O){i=null;return}B=P?p.position-P.position:0}else r(y);o.forEach(x=>{x(n.value,O,{delta:B,type:ln.pop,direction:B?B>0?tn.forward:tn.back:tn.unknown})})};function a(){i=n.value}function f(p){o.push(p);const y=()=>{const O=o.indexOf(p);O>-1&&o.splice(O,1)};return s.push(y),y}function l(){const{history:p}=window;p.state&&p.replaceState(z({},p.state,{scroll:Jn()}),"")}function h(){for(const p of s)p();s=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",l,{passive:!0}),{pauseListeners:a,listen:f,destroy:h}}function _s(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?Jn():null}}function Qu(e){const{history:t,location:n}=window,r={value:oa(e,n)},o={value:t.state};o.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(a,f,l){const h=e.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?e:e.slice(h))+a:Ju()+e+a;try{t[l?"replaceState":"pushState"](f,"",p),o.value=f}catch(y){console.error(y),n[l?"replace":"assign"](p)}}function i(a,f){const l=z({},t.state,_s(o.value.back,a,o.value.forward,!0),f,{position:o.value.position});s(a,l,!0),r.value=a}function c(a,f){const l=z({},o.value,t.state,{forward:a,scroll:Jn()});s(l.current,l,!0);const h=z({},_s(r.value,a,null),{position:l.position+1},f);s(a,h,!1),r.value=a}return{location:r,state:o,push:c,replace:i}}function Xu(e){e=Ku(e);const t=Qu(e),n=Yu(e,t.state,t.location,t.replace);function r(s,i=!0){i||n.pauseListeners(),history.go(s)}const o=z({location:"",base:e,go:r,createHref:Uu.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function Zu(e){return typeof e=="string"||e&&typeof e=="object"}function sa(e){return typeof e=="string"||typeof e=="symbol"}const Qe={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ia=Symbol("");var ys;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(ys||(ys={}));function jt(e,t){return z(new Error,{type:e,[ia]:!0},t)}function Fe(e,t){return e instanceof Error&&ia in e&&(t==null||!!(e.type&t))}const ws="[^/]+?",ef={sensitive:!1,strict:!1,start:!0,end:!0},tf=/[.+*?^${}()[\]/\\]/g;function nf(e,t){const n=z({},ef,t),r=[];let o=n.start?"^":"";const s=[];for(const f of e){const l=f.length?[]:[90];n.strict&&!f.length&&(o+="/");for(let h=0;h<f.length;h++){const p=f[h];let y=40+(n.sensitive?.25:0);if(p.type===0)h||(o+="/"),o+=p.value.replace(tf,"\\$&"),y+=40;else if(p.type===1){const{value:O,repeatable:P,optional:B,regexp:x}=p;s.push({name:O,repeatable:P,optional:B});const M=x||ws;if(M!==ws){y+=10;try{new RegExp(`(${M})`)}catch(U){throw new Error(`Invalid custom RegExp for param "${O}" (${M}): `+U.message)}}let L=P?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;h||(L=B&&f.length<2?`(?:/${L})`:"/"+L),B&&(L+="?"),o+=L,y+=20,B&&(y+=-8),P&&(y+=-20),M===".*"&&(y+=-50)}l.push(y)}r.push(l)}if(n.strict&&n.end){const f=r.length-1;r[f][r[f].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const i=new RegExp(o,n.sensitive?"":"i");function c(f){const l=f.match(i),h={};if(!l)return null;for(let p=1;p<l.length;p++){const y=l[p]||"",O=s[p-1];h[O.name]=y&&O.repeatable?y.split("/"):y}return h}function a(f){let l="",h=!1;for(const p of e){(!h||!l.endsWith("/"))&&(l+="/"),h=!1;for(const y of p)if(y.type===0)l+=y.value;else if(y.type===1){const{value:O,repeatable:P,optional:B}=y,x=O in f?f[O]:"";if(Re(x)&&!P)throw new Error(`Provided param "${O}" is an array but it is not repeatable (* or + modifiers)`);const M=Re(x)?x.join("/"):x;if(!M)if(B)p.length<2&&(l.endsWith("/")?l=l.slice(0,-1):h=!0);else throw new Error(`Missing required param "${O}"`);l+=M}}return l||"/"}return{re:i,score:r,keys:s,parse:c,stringify:a}}function rf(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function of(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const s=rf(r[n],o[n]);if(s)return s;n++}if(Math.abs(o.length-r.length)===1){if(vs(r))return 1;if(vs(o))return-1}return o.length-r.length}function vs(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const sf={type:0,value:""},af=/[a-zA-Z0-9_]/;function cf(e){if(!e)return[[]];if(e==="/")return[[sf]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(y){throw new Error(`ERR (${n})/"${f}": ${y}`)}let n=0,r=n;const o=[];let s;function i(){s&&o.push(s),s=[]}let c=0,a,f="",l="";function h(){f&&(n===0?s.push({type:0,value:f}):n===1||n===2||n===3?(s.length>1&&(a==="*"||a==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:f,regexp:l,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):t("Invalid state to consume buffer"),f="")}function p(){f+=a}for(;c<e.length;){if(a=e[c++],a==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:a==="/"?(f&&h(),i()):a===":"?(h(),n=1):p();break;case 4:p(),n=r;break;case 1:a==="("?n=2:af.test(a)?p():(h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--);break;case 2:a===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--,l="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),h(),i(),o}function lf(e,t,n){const r=nf(cf(e.path),n),o=z(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function uf(e,t){const n=[],r=new Map;t=Is({strict:!1,end:!0,sensitive:!1},t);function o(l){return r.get(l)}function s(l,h,p){const y=!p,O=ff(l);O.aliasOf=p&&p.record;const P=Is(t,l),B=[O];if("alias"in l){const L=typeof l.alias=="string"?[l.alias]:l.alias;for(const U of L)B.push(z({},O,{components:p?p.record.components:O.components,path:U,aliasOf:p?p.record:O}))}let x,M;for(const L of B){const{path:U}=L;if(h&&U[0]!=="/"){const te=h.record.path,F=te[te.length-1]==="/"?"":"/";L.path=h.record.path+(U&&F+U)}if(x=lf(L,h,P),p?p.alias.push(x):(M=M||x,M!==x&&M.alias.push(x),y&&l.name&&!Ss(x)&&i(l.name)),O.children){const te=O.children;for(let F=0;F<te.length;F++)s(te[F],x,p&&p.children[F])}p=p||x,(x.record.components&&Object.keys(x.record.components).length||x.record.name||x.record.redirect)&&a(x)}return M?()=>{i(M)}:en}function i(l){if(sa(l)){const h=r.get(l);h&&(r.delete(l),n.splice(n.indexOf(h),1),h.children.forEach(i),h.alias.forEach(i))}else{const h=n.indexOf(l);h>-1&&(n.splice(h,1),l.record.name&&r.delete(l.record.name),l.children.forEach(i),l.alias.forEach(i))}}function c(){return n}function a(l){let h=0;for(;h<n.length&&of(l,n[h])>=0&&(l.record.path!==n[h].record.path||!aa(l,n[h]));)h++;n.splice(h,0,l),l.record.name&&!Ss(l)&&r.set(l.record.name,l)}function f(l,h){let p,y={},O,P;if("name"in l&&l.name){if(p=r.get(l.name),!p)throw jt(1,{location:l});P=p.record.name,y=z(Es(h.params,p.keys.filter(M=>!M.optional).concat(p.parent?p.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),l.params&&Es(l.params,p.keys.map(M=>M.name))),O=p.stringify(y)}else if(l.path!=null)O=l.path,p=n.find(M=>M.re.test(O)),p&&(y=p.parse(O),P=p.record.name);else{if(p=h.name?r.get(h.name):n.find(M=>M.re.test(h.path)),!p)throw jt(1,{location:l,currentLocation:h});P=p.record.name,y=z({},h.params,l.params),O=p.stringify(y)}const B=[];let x=p;for(;x;)B.unshift(x.record),x=x.parent;return{name:P,path:O,params:y,matched:B,meta:hf(B)}}return e.forEach(l=>s(l)),{addRoute:s,resolve:f,removeRoute:i,getRoutes:c,getRecordMatcher:o}}function Es(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function ff(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:df(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function df(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Ss(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function hf(e){return e.reduce((t,n)=>z(t,n.meta),{})}function Is(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function aa(e,t){return t.children.some(n=>n===e||aa(e,n))}function pf(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<r.length;++o){const s=r[o].replace(Zi," "),i=s.indexOf("="),c=cn(i<0?s:s.slice(0,i)),a=i<0?null:cn(s.slice(i+1));if(c in t){let f=t[c];Re(f)||(f=t[c]=[f]),f.push(a)}else t[c]=a}return t}function As(e){let t="";for(let n in e){const r=e[n];if(n=Pu(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Re(r)?r.map(s=>s&&$r(s)):[r&&$r(r)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function gf(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Re(r)?r.map(o=>o==null?null:""+o):r==null?r:""+r)}return t}const mf=Symbol(""),Ts=Symbol(""),mo=Symbol(""),ca=Symbol(""),Lr=Symbol("");function Gt(){let e=[];function t(r){return e.push(r),()=>{const o=e.indexOf(r);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function tt(e,t,n,r,o,s=i=>i()){const i=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((c,a)=>{const f=p=>{p===!1?a(jt(4,{from:n,to:t})):p instanceof Error?a(p):Zu(p)?a(jt(2,{from:t,to:p})):(i&&r.enterCallbacks[o]===i&&typeof p=="function"&&i.push(p),c())},l=s(()=>e.call(r&&r.instances[o],t,n,f));let h=Promise.resolve(l);e.length<3&&(h=h.then(f)),h.catch(p=>a(p))})}function ur(e,t,n,r,o=s=>s()){const s=[];for(const i of e)for(const c in i.components){let a=i.components[c];if(!(t!=="beforeRouteEnter"&&!i.instances[c]))if(bf(a)){const l=(a.__vccOpts||a)[t];l&&s.push(tt(l,n,r,i,c,o))}else{let f=a();s.push(()=>f.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${c}" at "${i.path}"`));const h=Eu(l)?l.default:l;i.components[c]=h;const y=(h.__vccOpts||h)[t];return y&&tt(y,n,r,i,c,o)()}))}}return s}function bf(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Cs(e){const t=Ve(mo),n=Ve(ca),r=Ie(()=>t.resolve(Mt(e.to))),o=Ie(()=>{const{matched:a}=r.value,{length:f}=a,l=a[f-1],h=n.matched;if(!l||!h.length)return-1;const p=h.findIndex(Ft.bind(null,l));if(p>-1)return p;const y=Os(a[f-2]);return f>1&&Os(l)===y&&h[h.length-1].path!==y?h.findIndex(Ft.bind(null,a[f-2])):p}),s=Ie(()=>o.value>-1&&vf(n.params,r.value.params)),i=Ie(()=>o.value>-1&&o.value===n.matched.length-1&&ra(n.params,r.value.params));function c(a={}){return wf(a)?t[Mt(e.replace)?"replace":"push"](Mt(e.to)).catch(en):Promise.resolve()}return{route:r,href:Ie(()=>r.value.href),isActive:s,isExactActive:i,navigate:c}}const _f=ki({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Cs,setup(e,{slots:t}){const n=Hn(Cs(e)),{options:r}=Ve(mo),o=Ie(()=>({[Rs(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Rs(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=t.default&&t.default(n);return e.custom?s:Yi("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},s)}}}),yf=_f;function wf(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function vf(e,t){for(const n in t){const r=t[n],o=e[n];if(typeof r=="string"){if(r!==o)return!1}else if(!Re(o)||o.length!==r.length||r.some((s,i)=>s!==o[i]))return!1}return!0}function Os(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Rs=(e,t,n)=>e??t??n,Ef=ki({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Ve(Lr),o=Ie(()=>e.route||r.value),s=Ve(Ts,0),i=Ie(()=>{let f=Mt(s);const{matched:l}=o.value;let h;for(;(h=l[f])&&!h.components;)f++;return f}),c=Ie(()=>o.value.matched[i.value]);In(Ts,Ie(()=>i.value+1)),In(mf,c),In(Lr,o);const a=yi();return En(()=>[a.value,c.value,e.name],([f,l,h],[p,y,O])=>{l&&(l.instances[h]=f,y&&y!==l&&f&&f===p&&(l.leaveGuards.size||(l.leaveGuards=y.leaveGuards),l.updateGuards.size||(l.updateGuards=y.updateGuards))),f&&l&&(!y||!Ft(l,y)||!p)&&(l.enterCallbacks[h]||[]).forEach(P=>P(f))},{flush:"post"}),()=>{const f=o.value,l=e.name,h=c.value,p=h&&h.components[l];if(!p)return xs(n.default,{Component:p,route:f});const y=h.props[l],O=y?y===!0?f.params:typeof y=="function"?y(f):y:null,B=Yi(p,z({},O,t,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(h.instances[l]=null)},ref:a}));return xs(n.default,{Component:B,route:f})||B}}});function xs(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Sf=Ef;function If(e){const t=uf(e.routes,e),n=e.parseQuery||pf,r=e.stringifyQuery||As,o=e.history,s=Gt(),i=Gt(),c=Gt(),a=Mc(Qe);let f=Qe;Rt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=cr.bind(null,b=>""+b),h=cr.bind(null,Nu),p=cr.bind(null,cn);function y(b,T){let I,R;return sa(b)?(I=t.getRecordMatcher(b),R=T):R=b,t.addRoute(R,I)}function O(b){const T=t.getRecordMatcher(b);T&&t.removeRoute(T)}function P(){return t.getRoutes().map(b=>b.record)}function B(b){return!!t.getRecordMatcher(b)}function x(b,T){if(T=z({},T||a.value),typeof b=="string"){const d=lr(n,b,T.path),g=t.resolve({path:d.path},T),_=o.createHref(d.fullPath);return z(d,g,{params:p(g.params),hash:cn(d.hash),redirectedFrom:void 0,href:_})}let I;if(b.path!=null)I=z({},b,{path:lr(n,b.path,T.path).path});else{const d=z({},b.params);for(const g in d)d[g]==null&&delete d[g];I=z({},b,{params:h(d)}),T.params=h(T.params)}const R=t.resolve(I,T),q=b.hash||"";R.params=l(p(R.params));const Q=Lu(r,z({},b,{hash:Du(q),path:R.path})),u=o.createHref(Q);return z({fullPath:Q,hash:q,query:r===As?gf(b.query):b.query||{}},R,{redirectedFrom:void 0,href:u})}function M(b){return typeof b=="string"?lr(n,b,a.value.path):z({},b)}function L(b,T){if(f!==b)return jt(8,{from:T,to:b})}function U(b){return ue(b)}function te(b){return U(z(M(b),{replace:!0}))}function F(b){const T=b.matched[b.matched.length-1];if(T&&T.redirect){const{redirect:I}=T;let R=typeof I=="function"?I(b):I;return typeof R=="string"&&(R=R.includes("?")||R.includes("#")?R=M(R):{path:R},R.params={}),z({query:b.query,hash:b.hash,params:R.path!=null?{}:b.params},R)}}function ue(b,T){const I=f=x(b),R=a.value,q=b.state,Q=b.force,u=b.replace===!0,d=F(I);if(d)return ue(z(M(d),{state:typeof d=="object"?z({},q,d.state):q,force:Q,replace:u}),T||I);const g=I;g.redirectedFrom=T;let _;return!Q&&Fu(r,R,I)&&(_=jt(16,{to:g,from:R}),De(R,R,!0,!1)),(_?Promise.resolve(_):xe(g,R)).catch(m=>Fe(m)?Fe(m,2)?m:Je(m):W(m,g,R)).then(m=>{if(m){if(Fe(m,2))return ue(z({replace:u},M(m.to),{state:typeof m.to=="object"?z({},q,m.to.state):q,force:Q}),T||g)}else m=lt(g,R,!0,u,q);return Ge(g,R,m),m})}function we(b,T){const I=L(b,T);return I?Promise.reject(I):Promise.resolve()}function ct(b){const T=Ct.values().next().value;return T&&typeof T.runWithContext=="function"?T.runWithContext(b):b()}function xe(b,T){let I;const[R,q,Q]=Af(b,T);I=ur(R.reverse(),"beforeRouteLeave",b,T);for(const d of R)d.leaveGuards.forEach(g=>{I.push(tt(g,b,T))});const u=we.bind(null,b,T);return I.push(u),ie(I).then(()=>{I=[];for(const d of s.list())I.push(tt(d,b,T));return I.push(u),ie(I)}).then(()=>{I=ur(q,"beforeRouteUpdate",b,T);for(const d of q)d.updateGuards.forEach(g=>{I.push(tt(g,b,T))});return I.push(u),ie(I)}).then(()=>{I=[];for(const d of Q)if(d.beforeEnter)if(Re(d.beforeEnter))for(const g of d.beforeEnter)I.push(tt(g,b,T));else I.push(tt(d.beforeEnter,b,T));return I.push(u),ie(I)}).then(()=>(b.matched.forEach(d=>d.enterCallbacks={}),I=ur(Q,"beforeRouteEnter",b,T,ct),I.push(u),ie(I))).then(()=>{I=[];for(const d of i.list())I.push(tt(d,b,T));return I.push(u),ie(I)}).catch(d=>Fe(d,8)?d:Promise.reject(d))}function Ge(b,T,I){c.list().forEach(R=>ct(()=>R(b,T,I)))}function lt(b,T,I,R,q){const Q=L(b,T);if(Q)return Q;const u=T===Qe,d=Rt?history.state:{};I&&(R||u?o.replace(b.fullPath,z({scroll:u&&d&&d.scroll},q)):o.push(b.fullPath,q)),a.value=b,De(b,T,I,u),Je()}let ke;function Wt(){ke||(ke=o.listen((b,T,I)=>{if(!pn.listening)return;const R=x(b),q=F(R);if(q){ue(z(q,{replace:!0}),R).catch(en);return}f=R;const Q=a.value;Rt&&zu(bs(Q.fullPath,I.delta),Jn()),xe(R,Q).catch(u=>Fe(u,12)?u:Fe(u,2)?(ue(u.to,R).then(d=>{Fe(d,20)&&!I.delta&&I.type===ln.pop&&o.go(-1,!1)}).catch(en),Promise.reject()):(I.delta&&o.go(-I.delta,!1),W(u,R,Q))).then(u=>{u=u||lt(R,Q,!1),u&&(I.delta&&!Fe(u,8)?o.go(-I.delta,!1):I.type===ln.pop&&Fe(u,20)&&o.go(-1,!1)),Ge(R,Q,u)}).catch(en)}))}let At=Gt(),ne=Gt(),G;function W(b,T,I){Je(b);const R=ne.list();return R.length?R.forEach(q=>q(b,T,I)):console.error(b),Promise.reject(b)}function Le(){return G&&a.value!==Qe?Promise.resolve():new Promise((b,T)=>{At.add([b,T])})}function Je(b){return G||(G=!b,Wt(),At.list().forEach(([T,I])=>b?I(b):T()),At.reset()),b}function De(b,T,I,R){const{scrollBehavior:q}=e;if(!Rt||!q)return Promise.resolve();const Q=!I&&Gu(bs(b.fullPath,0))||(R||!I)&&history.state&&history.state.scroll||null;return Si().then(()=>q(b,T,Q)).then(u=>u&&qu(u)).catch(u=>W(u,b,T))}const he=b=>o.go(b);let Tt;const Ct=new Set,pn={currentRoute:a,listening:!0,addRoute:y,removeRoute:O,hasRoute:B,getRoutes:P,resolve:x,options:e,push:U,replace:te,go:he,back:()=>he(-1),forward:()=>he(1),beforeEach:s.add,beforeResolve:i.add,afterEach:c.add,onError:ne.add,isReady:Le,install(b){const T=this;b.component("RouterLink",yf),b.component("RouterView",Sf),b.config.globalProperties.$router=T,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>Mt(a)}),Rt&&!Tt&&a.value===Qe&&(Tt=!0,U(o.location).catch(q=>{}));const I={};for(const q in Qe)Object.defineProperty(I,q,{get:()=>a.value[q],enumerable:!0});b.provide(mo,T),b.provide(ca,hi(I)),b.provide(Lr,a);const R=b.unmount;Ct.add(b),b.unmount=function(){Ct.delete(b),Ct.size<1&&(f=Qe,ke&&ke(),ke=null,a.value=Qe,Tt=!1,G=!1),R()}}};function ie(b){return b.reduce((T,I)=>T.then(()=>ct(I)),Promise.resolve())}return pn}function Af(e,t){const n=[],r=[],o=[],s=Math.max(t.matched.length,e.matched.length);for(let i=0;i<s;i++){const c=t.matched[i];c&&(e.matched.find(f=>Ft(f,c))?r.push(c):n.push(c));const a=e.matched[i];a&&(t.matched.find(f=>Ft(f,a))||o.push(a))}return[n,r,o]}const Tf={},Yn=e=>(Vc("data-v-b2da00b5"),e=e(),Uc(),e),Cf=Yn(()=>le("div",{class:"card"},[le("p",null,[We(" Edit "),le("code",null,"components/HelloWorld.vue"),We(" to test HMR ")])],-1)),Of=Yn(()=>le("p",null,[We(" Check out "),le("a",{href:"https://vuejs.org/guide/quick-start.html#local",target:"_blank"},"create-vue"),We(", the official Vue + Vite starter ")],-1)),Rf=Yn(()=>le("p",null,[We(" Install "),le("a",{href:"https://github.com/johnsoncodehk/volar",target:"_blank"},"Volar"),We(" in your IDE for a better DX ")],-1)),xf=Yn(()=>le("p",{class:"read-the-docs"},"Click on the Vite and Vue logos to learn more",-1)),kf={style:{"margin-bottom":"20px"}};function Df(e,t){const n=lo("router-link");return sn(),Pr(Se,null,[Cf,Of,Rf,xf,le("div",kf,[de(n,{to:"/notification"},{default:co(()=>[We("Go to Home")]),_:1})])],64)}const Pf=Qi(Tf,[["render",Df],["__scopeId","data-v-b2da00b5"]]),Mf=le("h1",{style:{"margin-bottom":"20px"}},"Notification",-1),Nf=le("div",{style:{"margin-bottom":"20px"}},"ПРИВЕТ!!!!",-1),$f={key:0},Bf={__name:"Home",setup(e){const t=yi(""),n=async()=>{if(Notification.permission==="granted")console.log("granted"),t.value="granted";else if(Notification.permission!=="denied"){const o=await Notification.requestPermission();t.value=o,o==="granted"&&(t.value="granted")}};return Mi(async()=>{if(Notification.permission==="granted")return t.value=Notification.permission;await Notification.requestPermission(),t.value=Notification.permission}),(o,s)=>{const i=lo("router-link");return sn(),Pr(Se,null,[Mf,Nf,le("div",null,[de(i,{to:"/notification/about"},{default:co(()=>[We("Go to About")]),_:1})]),t.value!=="granted"?(sn(),Pr("div",$f,[le("h1",null,uc(t.value),1),le("button",{onClick:n},"Запросить разрешение")])):Ml("",!0)],64)}}},Lf=[{path:"/notification",component:Bf},{path:"/notification/about",component:Pf}],Ff=If({history:Xu(),routes:Lf});/**
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
 */const la=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let o=e.charCodeAt(r);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=o&63|128):(o&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=o&63|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=o&63|128)}return t},jf=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const o=e[n++];if(o<128)t[r++]=String.fromCharCode(o);else if(o>191&&o<224){const s=e[n++];t[r++]=String.fromCharCode((o&31)<<6|s&63)}else if(o>239&&o<365){const s=e[n++],i=e[n++],c=e[n++],a=((o&7)<<18|(s&63)<<12|(i&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(a>>10)),t[r++]=String.fromCharCode(56320+(a&1023))}else{const s=e[n++],i=e[n++];t[r++]=String.fromCharCode((o&15)<<12|(s&63)<<6|i&63)}}return t.join("")},ua={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<e.length;o+=3){const s=e[o],i=o+1<e.length,c=i?e[o+1]:0,a=o+2<e.length,f=a?e[o+2]:0,l=s>>2,h=(s&3)<<4|c>>4;let p=(c&15)<<2|f>>6,y=f&63;a||(y=64,i||(p=64)),r.push(n[l],n[h],n[p],n[y])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(la(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):jf(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<e.length;){const s=n[e.charAt(o++)],c=o<e.length?n[e.charAt(o)]:0;++o;const f=o<e.length?n[e.charAt(o)]:64;++o;const h=o<e.length?n[e.charAt(o)]:64;if(++o,s==null||c==null||f==null||h==null)throw new Hf;const p=s<<2|c>>4;if(r.push(p),f!==64){const y=c<<4&240|f>>2;if(r.push(y),h!==64){const O=f<<6&192|h;r.push(O)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Hf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Kf=function(e){const t=la(e);return ua.encodeByteArray(t,!0)},fa=function(e){return Kf(e).replace(/\./g,"")},Vf=function(e){try{return ua.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Uf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Wf=()=>Uf().__FIREBASE_DEFAULTS__,qf=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},zf=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Vf(e[1]);return t&&JSON.parse(t)},Gf=()=>{try{return Wf()||qf()||zf()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},da=()=>{var e;return(e=Gf())===null||e===void 0?void 0:e.config};/**
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
 */class Jf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}function ha(){try{return typeof indexedDB=="object"}catch{return!1}}function pa(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var s;t(((s=o.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
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
 */const Yf="FirebaseError";class Vt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Yf,Object.setPrototypeOf(this,Vt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,hn.prototype.create)}}class hn{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},o=`${this.service}/${t}`,s=this.errors[t],i=s?Qf(s,r):"Error",c=`${this.serviceName}: ${i} (${o}).`;return new Vt(o,c,r)}}function Qf(e,t){return e.replace(Xf,(n,r)=>{const o=t[r];return o!=null?String(o):`<${r}?>`})}const Xf=/\{\$([^}]+)}/g;function Fr(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const o of n){if(!r.includes(o))return!1;const s=e[o],i=t[o];if(ks(s)&&ks(i)){if(!Fr(s,i))return!1}else if(s!==i)return!1}for(const o of r)if(!n.includes(o))return!1;return!0}function ks(e){return e!==null&&typeof e=="object"}/**
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
 */function ga(e){return e&&e._delegate?e._delegate:e}class qe{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const dt="[DEFAULT]";/**
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
 */class Zf{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Jf;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),o=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(o)return null;throw s}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(td(t))try{this.getOrInitializeService({instanceIdentifier:dt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:o});r.resolve(s)}catch{}}}}clearInstance(t=dt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=dt){return this.instances.has(t)}getOptions(t=dt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,i]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);r===c&&i.resolve(o)}return o}onInit(t,n){var r;const o=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(o))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(o,s);const i=this.instances.get(o);return i&&t(i,o),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const o of r)try{o(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ed(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=dt){return this.component?this.component.multipleInstances?t:dt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ed(e){return e===dt?void 0:e}function td(e){return e.instantiationMode==="EAGER"}/**
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
 */class nd{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Zf(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Y;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(Y||(Y={}));const rd={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},od=Y.INFO,sd={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},id=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),o=sd[t];if(o)console[o](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ad{constructor(t){this.name=t,this._logLevel=od,this._logHandler=id,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Y))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?rd[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...t),this._logHandler(this,Y.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...t),this._logHandler(this,Y.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...t),this._logHandler(this,Y.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...t),this._logHandler(this,Y.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...t),this._logHandler(this,Y.ERROR,...t)}}const cd=(e,t)=>t.some(n=>e instanceof n);let Ds,Ps;function ld(){return Ds||(Ds=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ud(){return Ps||(Ps=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ma=new WeakMap,jr=new WeakMap,ba=new WeakMap,fr=new WeakMap,bo=new WeakMap;function fd(e){const t=new Promise((n,r)=>{const o=()=>{e.removeEventListener("success",s),e.removeEventListener("error",i)},s=()=>{n(Ue(e.result)),o()},i=()=>{r(e.error),o()};e.addEventListener("success",s),e.addEventListener("error",i)});return t.then(n=>{n instanceof IDBCursor&&ma.set(n,e)}).catch(()=>{}),bo.set(t,e),t}function dd(e){if(jr.has(e))return;const t=new Promise((n,r)=>{const o=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",i),e.removeEventListener("abort",i)},s=()=>{n(),o()},i=()=>{r(e.error||new DOMException("AbortError","AbortError")),o()};e.addEventListener("complete",s),e.addEventListener("error",i),e.addEventListener("abort",i)});jr.set(e,t)}let Hr={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return jr.get(e);if(t==="objectStoreNames")return e.objectStoreNames||ba.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ue(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function hd(e){Hr=e(Hr)}function pd(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(dr(this),t,...n);return ba.set(r,t.sort?t.sort():[t]),Ue(r)}:ud().includes(e)?function(...t){return e.apply(dr(this),t),Ue(ma.get(this))}:function(...t){return Ue(e.apply(dr(this),t))}}function gd(e){return typeof e=="function"?pd(e):(e instanceof IDBTransaction&&dd(e),cd(e,ld())?new Proxy(e,Hr):e)}function Ue(e){if(e instanceof IDBRequest)return fd(e);if(fr.has(e))return fr.get(e);const t=gd(e);return t!==e&&(fr.set(e,t),bo.set(t,e)),t}const dr=e=>bo.get(e);function Ut(e,t,{blocked:n,upgrade:r,blocking:o,terminated:s}={}){const i=indexedDB.open(e,t),c=Ue(i);return r&&i.addEventListener("upgradeneeded",a=>{r(Ue(i.result),a.oldVersion,a.newVersion,Ue(i.transaction),a)}),n&&i.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),c.then(a=>{s&&a.addEventListener("close",()=>s()),o&&a.addEventListener("versionchange",f=>o(f.oldVersion,f.newVersion,f))}).catch(()=>{}),c}function $t(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",r=>t(r.oldVersion,r)),Ue(n).then(()=>{})}const md=["get","getKey","getAll","getAllKeys","count"],bd=["put","add","delete","clear"],hr=new Map;function Ms(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(hr.get(t))return hr.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,o=bd.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(o||md.includes(n)))return;const s=async function(i,...c){const a=this.transaction(i,o?"readwrite":"readonly");let f=a.store;return r&&(f=f.index(c.shift())),(await Promise.all([f[n](...c),o&&a.done]))[0]};return hr.set(t,s),s}hd(e=>({...e,get:(t,n,r)=>Ms(t,n)||e.get(t,n,r),has:(t,n)=>!!Ms(t,n)||e.has(t,n)}));/**
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
 */class _d{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(yd(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function yd(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Kr="@firebase/app",Ns="0.9.28";/**
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
 */const _t=new ad("@firebase/app"),wd="@firebase/app-compat",vd="@firebase/analytics-compat",Ed="@firebase/analytics",Sd="@firebase/app-check-compat",Id="@firebase/app-check",Ad="@firebase/auth",Td="@firebase/auth-compat",Cd="@firebase/database",Od="@firebase/database-compat",Rd="@firebase/functions",xd="@firebase/functions-compat",kd="@firebase/installations",Dd="@firebase/installations-compat",Pd="@firebase/messaging",Md="@firebase/messaging-compat",Nd="@firebase/performance",$d="@firebase/performance-compat",Bd="@firebase/remote-config",Ld="@firebase/remote-config-compat",Fd="@firebase/storage",jd="@firebase/storage-compat",Hd="@firebase/firestore",Kd="@firebase/firestore-compat",Vd="firebase";/**
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
 */const Vr="[DEFAULT]",Ud={[Kr]:"fire-core",[wd]:"fire-core-compat",[Ed]:"fire-analytics",[vd]:"fire-analytics-compat",[Id]:"fire-app-check",[Sd]:"fire-app-check-compat",[Ad]:"fire-auth",[Td]:"fire-auth-compat",[Cd]:"fire-rtdb",[Od]:"fire-rtdb-compat",[Rd]:"fire-fn",[xd]:"fire-fn-compat",[kd]:"fire-iid",[Dd]:"fire-iid-compat",[Pd]:"fire-fcm",[Md]:"fire-fcm-compat",[Nd]:"fire-perf",[$d]:"fire-perf-compat",[Bd]:"fire-rc",[Ld]:"fire-rc-compat",[Fd]:"fire-gcs",[jd]:"fire-gcs-compat",[Hd]:"fire-fst",[Kd]:"fire-fst-compat","fire-js":"fire-js",[Vd]:"fire-js-all"};/**
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
 */const Dn=new Map,Ur=new Map;function Wd(e,t){try{e.container.addComponent(t)}catch(n){_t.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function at(e){const t=e.name;if(Ur.has(t))return _t.debug(`There were multiple attempts to register component ${t}.`),!1;Ur.set(t,e);for(const n of Dn.values())Wd(n,e);return!0}function _o(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const qd={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ot=new hn("app","Firebase",qd);/**
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
 */class zd{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new qe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ot.create("app-deleted",{appName:this._name})}}function _a(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Vr,automaticDataCollectionEnabled:!1},t),o=r.name;if(typeof o!="string"||!o)throw ot.create("bad-app-name",{appName:String(o)});if(n||(n=da()),!n)throw ot.create("no-options");const s=Dn.get(o);if(s){if(Fr(n,s.options)&&Fr(r,s.config))return s;throw ot.create("duplicate-app",{appName:o})}const i=new nd(o);for(const a of Ur.values())i.addComponent(a);const c=new zd(n,r,i);return Dn.set(o,c),c}function Gd(e=Vr){const t=Dn.get(e);if(!t&&e===Vr&&da())return _a();if(!t)throw ot.create("no-app",{appName:e});return t}function st(e,t,n){var r;let o=(r=Ud[e])!==null&&r!==void 0?r:e;n&&(o+=`-${n}`);const s=o.match(/\s|\//),i=t.match(/\s|\//);if(s||i){const c=[`Unable to register library "${o}" with version "${t}":`];s&&c.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&i&&c.push("and"),i&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),_t.warn(c.join(" "));return}at(new qe(`${o}-version`,()=>({library:o,version:t}),"VERSION"))}/**
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
 */const Jd="firebase-heartbeat-database",Yd=1,un="firebase-heartbeat-store";let pr=null;function ya(){return pr||(pr=Ut(Jd,Yd,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(un)}catch(n){console.warn(n)}}}}).catch(e=>{throw ot.create("idb-open",{originalErrorMessage:e.message})})),pr}async function Qd(e){try{const n=(await ya()).transaction(un),r=await n.objectStore(un).get(wa(e));return await n.done,r}catch(t){if(t instanceof Vt)_t.warn(t.message);else{const n=ot.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});_t.warn(n.message)}}}async function $s(e,t){try{const r=(await ya()).transaction(un,"readwrite");await r.objectStore(un).put(t,wa(e)),await r.done}catch(n){if(n instanceof Vt)_t.warn(n.message);else{const r=ot.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});_t.warn(r.message)}}}function wa(e){return`${e.name}!${e.options.appId}`}/**
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
 */const Xd=1024,Zd=30*24*60*60*1e3;class eh{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new nh(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Bs();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const c=new Date(i.date).valueOf();return Date.now()-c<=Zd}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Bs(),{heartbeatsToSend:r,unsentEntries:o}=th(this._heartbeatsCache.heartbeats),s=fa(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Bs(){return new Date().toISOString().substring(0,10)}function th(e,t=Xd){const n=[];let r=e.slice();for(const o of e){const s=n.find(i=>i.agent===o.agent);if(s){if(s.dates.push(o.date),Ls(n)>t){s.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),Ls(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class nh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ha()?pa().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Qd(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return $s(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return $s(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...t.heartbeats]})}else return}}function Ls(e){return fa(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function rh(e){at(new qe("platform-logger",t=>new _d(t),"PRIVATE")),at(new qe("heartbeat",t=>new eh(t),"PRIVATE")),st(Kr,Ns,e),st(Kr,Ns,"esm2017"),st("fire-js","")}rh("");var oh="firebase",sh="10.8.1";/**
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
 */st(oh,sh,"app");const va="@firebase/installations",yo="0.6.5";/**
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
 */const Ea=1e4,Sa=`w:${yo}`,Ia="FIS_v2",ih="https://firebaseinstallations.googleapis.com/v1",ah=60*60*1e3,ch="installations",lh="Installations";/**
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
 */const uh={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},yt=new hn(ch,lh,uh);function Aa(e){return e instanceof Vt&&e.code.includes("request-failed")}/**
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
 */function Ta({projectId:e}){return`${ih}/projects/${e}/installations`}function Ca(e){return{token:e.token,requestStatus:2,expiresIn:dh(e.expiresIn),creationTime:Date.now()}}async function Oa(e,t){const r=(await t.json()).error;return yt.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Ra({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function fh(e,{refreshToken:t}){const n=Ra(e);return n.append("Authorization",hh(t)),n}async function xa(e){const t=await e();return t.status>=500&&t.status<600?e():t}function dh(e){return Number(e.replace("s","000"))}function hh(e){return`${Ia} ${e}`}/**
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
 */async function ph({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Ta(e),o=Ra(e),s=t.getImmediate({optional:!0});if(s){const f=await s.getHeartbeatsHeader();f&&o.append("x-firebase-client",f)}const i={fid:n,authVersion:Ia,appId:e.appId,sdkVersion:Sa},c={method:"POST",headers:o,body:JSON.stringify(i)},a=await xa(()=>fetch(r,c));if(a.ok){const f=await a.json();return{fid:f.fid||n,registrationStatus:2,refreshToken:f.refreshToken,authToken:Ca(f.authToken)}}else throw await Oa("Create Installation",a)}/**
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
 */function ka(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function gh(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const mh=/^[cdef][\w-]{21}$/,Wr="";function bh(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=_h(e);return mh.test(n)?n:Wr}catch{return Wr}}function _h(e){return gh(e).substr(0,22)}/**
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
 */function Qn(e){return`${e.appName}!${e.appId}`}/**
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
 */const Da=new Map;function Pa(e,t){const n=Qn(e);Ma(n,t),yh(n,t)}function Ma(e,t){const n=Da.get(e);if(n)for(const r of n)r(t)}function yh(e,t){const n=wh();n&&n.postMessage({key:e,fid:t}),vh()}let pt=null;function wh(){return!pt&&"BroadcastChannel"in self&&(pt=new BroadcastChannel("[Firebase] FID Change"),pt.onmessage=e=>{Ma(e.data.key,e.data.fid)}),pt}function vh(){Da.size===0&&pt&&(pt.close(),pt=null)}/**
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
 */const Eh="firebase-installations-database",Sh=1,wt="firebase-installations-store";let gr=null;function wo(){return gr||(gr=Ut(Eh,Sh,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(wt)}}})),gr}async function Pn(e,t){const n=Qn(e),o=(await wo()).transaction(wt,"readwrite"),s=o.objectStore(wt),i=await s.get(n);return await s.put(t,n),await o.done,(!i||i.fid!==t.fid)&&Pa(e,t.fid),t}async function Na(e){const t=Qn(e),r=(await wo()).transaction(wt,"readwrite");await r.objectStore(wt).delete(t),await r.done}async function Xn(e,t){const n=Qn(e),o=(await wo()).transaction(wt,"readwrite"),s=o.objectStore(wt),i=await s.get(n),c=t(i);return c===void 0?await s.delete(n):await s.put(c,n),await o.done,c&&(!i||i.fid!==c.fid)&&Pa(e,c.fid),c}/**
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
 */async function vo(e){let t;const n=await Xn(e.appConfig,r=>{const o=Ih(r),s=Ah(e,o);return t=s.registrationPromise,s.installationEntry});return n.fid===Wr?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Ih(e){const t=e||{fid:bh(),registrationStatus:0};return $a(t)}function Ah(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(yt.create("app-offline"));return{installationEntry:t,registrationPromise:o}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=Th(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Ch(e)}:{installationEntry:t}}async function Th(e,t){try{const n=await ph(e,t);return Pn(e.appConfig,n)}catch(n){throw Aa(n)&&n.customData.serverCode===409?await Na(e.appConfig):await Pn(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Ch(e){let t=await Fs(e.appConfig);for(;t.registrationStatus===1;)await ka(100),t=await Fs(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await vo(e);return r||n}return t}function Fs(e){return Xn(e,t=>{if(!t)throw yt.create("installation-not-found");return $a(t)})}function $a(e){return Oh(e)?{fid:e.fid,registrationStatus:0}:e}function Oh(e){return e.registrationStatus===1&&e.registrationTime+Ea<Date.now()}/**
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
 */async function Rh({appConfig:e,heartbeatServiceProvider:t},n){const r=xh(e,n),o=fh(e,n),s=t.getImmediate({optional:!0});if(s){const f=await s.getHeartbeatsHeader();f&&o.append("x-firebase-client",f)}const i={installation:{sdkVersion:Sa,appId:e.appId}},c={method:"POST",headers:o,body:JSON.stringify(i)},a=await xa(()=>fetch(r,c));if(a.ok){const f=await a.json();return Ca(f)}else throw await Oa("Generate Auth Token",a)}function xh(e,{fid:t}){return`${Ta(e)}/${t}/authTokens:generate`}/**
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
 */async function Eo(e,t=!1){let n;const r=await Xn(e.appConfig,s=>{if(!Ba(s))throw yt.create("not-registered");const i=s.authToken;if(!t&&Ph(i))return s;if(i.requestStatus===1)return n=kh(e,t),s;{if(!navigator.onLine)throw yt.create("app-offline");const c=Nh(s);return n=Dh(e,c),c}});return n?await n:r.authToken}async function kh(e,t){let n=await js(e.appConfig);for(;n.authToken.requestStatus===1;)await ka(100),n=await js(e.appConfig);const r=n.authToken;return r.requestStatus===0?Eo(e,t):r}function js(e){return Xn(e,t=>{if(!Ba(t))throw yt.create("not-registered");const n=t.authToken;return $h(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Dh(e,t){try{const n=await Rh(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Pn(e.appConfig,r),n}catch(n){if(Aa(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Na(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Pn(e.appConfig,r)}throw n}}function Ba(e){return e!==void 0&&e.registrationStatus===2}function Ph(e){return e.requestStatus===2&&!Mh(e)}function Mh(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+ah}function Nh(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function $h(e){return e.requestStatus===1&&e.requestTime+Ea<Date.now()}/**
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
 */async function Bh(e){const t=e,{installationEntry:n,registrationPromise:r}=await vo(t);return r?r.catch(console.error):Eo(t).catch(console.error),n.fid}/**
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
 */async function Lh(e,t=!1){const n=e;return await Fh(n),(await Eo(n,t)).token}async function Fh(e){const{registrationPromise:t}=await vo(e);t&&await t}/**
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
 */function jh(e){if(!e||!e.options)throw mr("App Configuration");if(!e.name)throw mr("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw mr(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function mr(e){return yt.create("missing-app-config-values",{valueName:e})}/**
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
 */const La="installations",Hh="installations-internal",Kh=e=>{const t=e.getProvider("app").getImmediate(),n=jh(t),r=_o(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Vh=e=>{const t=e.getProvider("app").getImmediate(),n=_o(t,La).getImmediate();return{getId:()=>Bh(n),getToken:o=>Lh(n,o)}};function Uh(){at(new qe(La,Kh,"PUBLIC")),at(new qe(Hh,Vh,"PRIVATE"))}Uh();st(va,yo);st(va,yo,"esm2017");/**
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
 */const Fa="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Wh="https://fcmregistrations.googleapis.com/v1",ja="FCM_MSG",qh="google.c.a.c_id",zh=3,Gh=1;var Mn;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Mn||(Mn={}));/**
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
 */var Nn;(function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"})(Nn||(Nn={}));/**
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
 */function je(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Jh(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),o=new Uint8Array(r.length);for(let s=0;s<r.length;++s)o[s]=r.charCodeAt(s);return o}/**
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
 */const br="fcm_token_details_db",Yh=5,Hs="fcm_token_object_Store";async function Qh(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(br))return null;let t=null;return(await Ut(br,Yh,{upgrade:async(r,o,s,i)=>{var c;if(o<2||!r.objectStoreNames.contains(Hs))return;const a=i.objectStore(Hs),f=await a.index("fcmSenderId").get(e);if(await a.clear(),!!f){if(o===2){const l=f;if(!l.auth||!l.p256dh||!l.endpoint)return;t={token:l.fcmToken,createTime:(c=l.createTime)!==null&&c!==void 0?c:Date.now(),subscriptionOptions:{auth:l.auth,p256dh:l.p256dh,endpoint:l.endpoint,swScope:l.swScope,vapidKey:typeof l.vapidKey=="string"?l.vapidKey:je(l.vapidKey)}}}else if(o===3){const l=f;t={token:l.fcmToken,createTime:l.createTime,subscriptionOptions:{auth:je(l.auth),p256dh:je(l.p256dh),endpoint:l.endpoint,swScope:l.swScope,vapidKey:je(l.vapidKey)}}}else if(o===4){const l=f;t={token:l.fcmToken,createTime:l.createTime,subscriptionOptions:{auth:je(l.auth),p256dh:je(l.p256dh),endpoint:l.endpoint,swScope:l.swScope,vapidKey:je(l.vapidKey)}}}}}})).close(),await $t(br),await $t("fcm_vapid_details_db"),await $t("undefined"),Xh(t)?t:null}function Xh(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
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
 */const Zh="firebase-messaging-database",ep=1,vt="firebase-messaging-store";let _r=null;function So(){return _r||(_r=Ut(Zh,ep,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(vt)}}})),_r}async function Io(e){const t=To(e),r=await(await So()).transaction(vt).objectStore(vt).get(t);if(r)return r;{const o=await Qh(e.appConfig.senderId);if(o)return await Ao(e,o),o}}async function Ao(e,t){const n=To(e),o=(await So()).transaction(vt,"readwrite");return await o.objectStore(vt).put(t,n),await o.done,t}async function tp(e){const t=To(e),r=(await So()).transaction(vt,"readwrite");await r.objectStore(vt).delete(t),await r.done}function To({appConfig:e}){return e.appId}/**
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
 */const np={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Oe=new hn("messaging","Messaging",np);/**
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
 */async function rp(e,t){const n=await Oo(e),r=Ka(t),o={method:"POST",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(Co(e.appConfig),o)).json()}catch(i){throw Oe.create("token-subscribe-failed",{errorInfo:i==null?void 0:i.toString()})}if(s.error){const i=s.error.message;throw Oe.create("token-subscribe-failed",{errorInfo:i})}if(!s.token)throw Oe.create("token-subscribe-no-token");return s.token}async function op(e,t){const n=await Oo(e),r=Ka(t.subscriptionOptions),o={method:"PATCH",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(`${Co(e.appConfig)}/${t.token}`,o)).json()}catch(i){throw Oe.create("token-update-failed",{errorInfo:i==null?void 0:i.toString()})}if(s.error){const i=s.error.message;throw Oe.create("token-update-failed",{errorInfo:i})}if(!s.token)throw Oe.create("token-update-no-token");return s.token}async function Ha(e,t){const r={method:"DELETE",headers:await Oo(e)};try{const s=await(await fetch(`${Co(e.appConfig)}/${t}`,r)).json();if(s.error){const i=s.error.message;throw Oe.create("token-unsubscribe-failed",{errorInfo:i})}}catch(o){throw Oe.create("token-unsubscribe-failed",{errorInfo:o==null?void 0:o.toString()})}}function Co({projectId:e}){return`${Wh}/projects/${e}/registrations`}async function Oo({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function Ka({p256dh:e,auth:t,endpoint:n,vapidKey:r}){const o={web:{endpoint:n,auth:t,p256dh:e}};return r!==Fa&&(o.web.applicationPubKey=r),o}/**
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
 */const sp=7*24*60*60*1e3;async function ip(e){const t=await cp(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:je(t.getKey("auth")),p256dh:je(t.getKey("p256dh"))},r=await Io(e.firebaseDependencies);if(r){if(lp(r.subscriptionOptions,n))return Date.now()>=r.createTime+sp?ap(e,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await Ha(e.firebaseDependencies,r.token)}catch(o){console.warn(o)}return Ks(e.firebaseDependencies,n)}else return Ks(e.firebaseDependencies,n)}async function qr(e){const t=await Io(e.firebaseDependencies);t&&(await Ha(e.firebaseDependencies,t.token),await tp(e.firebaseDependencies));const n=await e.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function ap(e,t){try{const n=await op(e.firebaseDependencies,t),r=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await Ao(e.firebaseDependencies,r),n}catch(n){throw await qr(e),n}}async function Ks(e,t){const r={token:await rp(e,t),createTime:Date.now(),subscriptionOptions:t};return await Ao(e,r),r.token}async function cp(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Jh(t)})}function lp(e,t){const n=t.vapidKey===e.vapidKey,r=t.endpoint===e.endpoint,o=t.auth===e.auth,s=t.p256dh===e.p256dh;return n&&r&&o&&s}/**
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
 */function up(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return fp(t,e),dp(t,e),hp(t,e),t}function fp(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const r=t.notification.body;r&&(e.notification.body=r);const o=t.notification.image;o&&(e.notification.image=o);const s=t.notification.icon;s&&(e.notification.icon=s)}function dp(e,t){t.data&&(e.data=t.data)}function hp(e,t){var n,r,o,s,i;if(!t.fcmOptions&&!(!((n=t.notification)===null||n===void 0)&&n.click_action))return;e.fcmOptions={};const c=(o=(r=t.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&o!==void 0?o:(s=t.notification)===null||s===void 0?void 0:s.click_action;c&&(e.fcmOptions.link=c);const a=(i=t.fcmOptions)===null||i===void 0?void 0:i.analytics_label;a&&(e.fcmOptions.analyticsLabel=a)}/**
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
 */function pp(e){return typeof e=="object"&&!!e&&qh in e}/**
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
 */function gp(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */Va("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");Va("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");async function mp(e,t){const n=bp(t,await e.firebaseDependencies.installations.getId());_p(e,n,t.productId)}function bp(e,t){var n,r;const o={};return e.from&&(o.project_number=e.from),e.fcmMessageId&&(o.message_id=e.fcmMessageId),o.instance_id=t,e.notification?o.message_type=Mn.DISPLAY_NOTIFICATION.toString():o.message_type=Mn.DATA_MESSAGE.toString(),o.sdk_platform=zh.toString(),o.package_name=self.origin.replace(/(^\w+:|^)\/\//,""),e.collapse_key&&(o.collapse_key=e.collapse_key),o.event=Gh.toString(),!((n=e.fcmOptions)===null||n===void 0)&&n.analytics_label&&(o.analytics_label=(r=e.fcmOptions)===null||r===void 0?void 0:r.analytics_label),o}function _p(e,t,n){const r={};r.event_time_ms=Math.floor(Date.now()).toString(),r.source_extension_json_proto3=JSON.stringify(t),n&&(r.compliance_data=yp(n)),e.logEvents.push(r)}function yp(e){return{privacy_context:{prequest:{origin_associated_product_id:e}}}}function Va(e,t){const n=[];for(let r=0;r<e.length;r++)n.push(e.charAt(r)),r<t.length&&n.push(t.charAt(r));return n.join("")}/**
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
 */async function wp(e,t){var n,r;const{newSubscription:o}=e;if(!o){await qr(t);return}const s=await Io(t.firebaseDependencies);await qr(t),t.vapidKey=(r=(n=s==null?void 0:s.subscriptionOptions)===null||n===void 0?void 0:n.vapidKey)!==null&&r!==void 0?r:Fa,await ip(t)}async function vp(e,t){const n=Ip(e);if(!n)return;t.deliveryMetricsExportedToBigQueryEnabled&&await mp(t,n);const r=await Ua();if(Tp(r))return Cp(r,n);if(n.notification&&await Op(Sp(n)),!!t&&t.onBackgroundMessageHandler){const o=up(n);typeof t.onBackgroundMessageHandler=="function"?await t.onBackgroundMessageHandler(o):t.onBackgroundMessageHandler.next(o)}}async function Ep(e){var t,n;const r=(n=(t=e.notification)===null||t===void 0?void 0:t.data)===null||n===void 0?void 0:n[ja];if(r){if(e.action)return}else return;e.stopImmediatePropagation(),e.notification.close();const o=Rp(r);if(!o)return;const s=new URL(o,self.location.href),i=new URL(self.location.origin);if(s.host!==i.host)return;let c=await Ap(s);if(c?c=await c.focus():(c=await self.clients.openWindow(o),await gp(3e3)),!!c)return r.messageType=Nn.NOTIFICATION_CLICKED,r.isFirebaseMessaging=!0,c.postMessage(r)}function Sp(e){const t=Object.assign({},e.notification);return t.data={[ja]:e},t}function Ip({data:e}){if(!e)return null;try{return e.json()}catch{return null}}async function Ap(e){const t=await Ua();for(const n of t){const r=new URL(n.url,self.location.href);if(e.host===r.host)return n}return null}function Tp(e){return e.some(t=>t.visibilityState==="visible"&&!t.url.startsWith("chrome-extension://"))}function Cp(e,t){t.isFirebaseMessaging=!0,t.messageType=Nn.PUSH_RECEIVED;for(const n of e)n.postMessage(t)}function Ua(){return self.clients.matchAll({type:"window",includeUncontrolled:!0})}function Op(e){var t;const{actions:n}=e,{maxActions:r}=Notification;return n&&r&&n.length>r&&console.warn(`This browser only supports ${r} actions. The remaining actions will not be displayed.`),self.registration.showNotification((t=e.title)!==null&&t!==void 0?t:"",e)}function Rp(e){var t,n,r;const o=(n=(t=e.fcmOptions)===null||t===void 0?void 0:t.link)!==null&&n!==void 0?n:(r=e.notification)===null||r===void 0?void 0:r.click_action;return o||(pp(e.data)?self.location.origin:null)}/**
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
 */function xp(e){if(!e||!e.options)throw yr("App Configuration Object");if(!e.name)throw yr("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const r of t)if(!n[r])throw yr(r);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function yr(e){return Oe.create("missing-app-config-values",{valueName:e})}/**
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
 */let kp=class{constructor(t,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const o=xp(t);this.firebaseDependencies={app:t,appConfig:o,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}};/**
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
 */const Dp=e=>{const t=new kp(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return self.addEventListener("push",n=>{n.waitUntil(vp(n,t))}),self.addEventListener("pushsubscriptionchange",n=>{n.waitUntil(wp(n,t))}),self.addEventListener("notificationclick",n=>{n.waitUntil(Ep(n))}),t};function Pp(){at(new qe("messaging-sw",Dp,"PUBLIC"))}/**
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
 */async function Mp(){return ha()&&await pa()&&"PushManager"in self&&"Notification"in self&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function Np(e=Gd()){return Mp().then(t=>{if(!t)throw Oe.create("unsupported-browser")},t=>{throw Oe.create("indexed-db-unsupported")}),_o(ga(e),"messaging-sw").getImmediate()}/**
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
 */Pp();/**
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
 */const $p="/firebase-messaging-sw.js",Bp="/firebase-cloud-messaging-push-scope",Wa="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Lp="https://fcmregistrations.googleapis.com/v1",qa="google.c.a.c_id",Fp="google.c.a.c_l",jp="google.c.a.ts",Hp="google.c.a.e";var Vs;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Vs||(Vs={}));/**
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
 */var fn;(function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"})(fn||(fn={}));/**
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
 */function He(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Kp(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),o=new Uint8Array(r.length);for(let s=0;s<r.length;++s)o[s]=r.charCodeAt(s);return o}/**
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
 */const wr="fcm_token_details_db",Vp=5,Us="fcm_token_object_Store";async function Up(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(wr))return null;let t=null;return(await Ut(wr,Vp,{upgrade:async(r,o,s,i)=>{var c;if(o<2||!r.objectStoreNames.contains(Us))return;const a=i.objectStore(Us),f=await a.index("fcmSenderId").get(e);if(await a.clear(),!!f){if(o===2){const l=f;if(!l.auth||!l.p256dh||!l.endpoint)return;t={token:l.fcmToken,createTime:(c=l.createTime)!==null&&c!==void 0?c:Date.now(),subscriptionOptions:{auth:l.auth,p256dh:l.p256dh,endpoint:l.endpoint,swScope:l.swScope,vapidKey:typeof l.vapidKey=="string"?l.vapidKey:He(l.vapidKey)}}}else if(o===3){const l=f;t={token:l.fcmToken,createTime:l.createTime,subscriptionOptions:{auth:He(l.auth),p256dh:He(l.p256dh),endpoint:l.endpoint,swScope:l.swScope,vapidKey:He(l.vapidKey)}}}else if(o===4){const l=f;t={token:l.fcmToken,createTime:l.createTime,subscriptionOptions:{auth:He(l.auth),p256dh:He(l.p256dh),endpoint:l.endpoint,swScope:l.swScope,vapidKey:He(l.vapidKey)}}}}}})).close(),await $t(wr),await $t("fcm_vapid_details_db"),await $t("undefined"),Wp(t)?t:null}function Wp(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
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
 */const qp="firebase-messaging-database",zp=1,Et="firebase-messaging-store";let vr=null;function Ro(){return vr||(vr=Ut(qp,zp,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Et)}}})),vr}async function za(e){const t=ko(e),r=await(await Ro()).transaction(Et).objectStore(Et).get(t);if(r)return r;{const o=await Up(e.appConfig.senderId);if(o)return await xo(e,o),o}}async function xo(e,t){const n=ko(e),o=(await Ro()).transaction(Et,"readwrite");return await o.objectStore(Et).put(t,n),await o.done,t}async function Gp(e){const t=ko(e),r=(await Ro()).transaction(Et,"readwrite");await r.objectStore(Et).delete(t),await r.done}function ko({appConfig:e}){return e.appId}/**
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
 */const Jp={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},ye=new hn("messaging","Messaging",Jp);/**
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
 */async function Yp(e,t){const n=await Po(e),r=Ja(t),o={method:"POST",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(Do(e.appConfig),o)).json()}catch(i){throw ye.create("token-subscribe-failed",{errorInfo:i==null?void 0:i.toString()})}if(s.error){const i=s.error.message;throw ye.create("token-subscribe-failed",{errorInfo:i})}if(!s.token)throw ye.create("token-subscribe-no-token");return s.token}async function Qp(e,t){const n=await Po(e),r=Ja(t.subscriptionOptions),o={method:"PATCH",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(`${Do(e.appConfig)}/${t.token}`,o)).json()}catch(i){throw ye.create("token-update-failed",{errorInfo:i==null?void 0:i.toString()})}if(s.error){const i=s.error.message;throw ye.create("token-update-failed",{errorInfo:i})}if(!s.token)throw ye.create("token-update-no-token");return s.token}async function Ga(e,t){const r={method:"DELETE",headers:await Po(e)};try{const s=await(await fetch(`${Do(e.appConfig)}/${t}`,r)).json();if(s.error){const i=s.error.message;throw ye.create("token-unsubscribe-failed",{errorInfo:i})}}catch(o){throw ye.create("token-unsubscribe-failed",{errorInfo:o==null?void 0:o.toString()})}}function Do({projectId:e}){return`${Lp}/projects/${e}/registrations`}async function Po({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function Ja({p256dh:e,auth:t,endpoint:n,vapidKey:r}){const o={web:{endpoint:n,auth:t,p256dh:e}};return r!==Wa&&(o.web.applicationPubKey=r),o}/**
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
 */const Xp=7*24*60*60*1e3;async function Zp(e){const t=await ng(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:He(t.getKey("auth")),p256dh:He(t.getKey("p256dh"))},r=await za(e.firebaseDependencies);if(r){if(rg(r.subscriptionOptions,n))return Date.now()>=r.createTime+Xp?tg(e,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await Ga(e.firebaseDependencies,r.token)}catch(o){console.warn(o)}return Ws(e.firebaseDependencies,n)}else return Ws(e.firebaseDependencies,n)}async function eg(e){const t=await za(e.firebaseDependencies);t&&(await Ga(e.firebaseDependencies,t.token),await Gp(e.firebaseDependencies));const n=await e.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function tg(e,t){try{const n=await Qp(e.firebaseDependencies,t),r=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await xo(e.firebaseDependencies,r),n}catch(n){throw await eg(e),n}}async function Ws(e,t){const r={token:await Yp(e,t),createTime:Date.now(),subscriptionOptions:t};return await xo(e,r),r.token}async function ng(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Kp(t)})}function rg(e,t){const n=t.vapidKey===e.vapidKey,r=t.endpoint===e.endpoint,o=t.auth===e.auth,s=t.p256dh===e.p256dh;return n&&r&&o&&s}/**
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
 */function qs(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return og(t,e),sg(t,e),ig(t,e),t}function og(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const r=t.notification.body;r&&(e.notification.body=r);const o=t.notification.image;o&&(e.notification.image=o);const s=t.notification.icon;s&&(e.notification.icon=s)}function sg(e,t){t.data&&(e.data=t.data)}function ig(e,t){var n,r,o,s,i;if(!t.fcmOptions&&!(!((n=t.notification)===null||n===void 0)&&n.click_action))return;e.fcmOptions={};const c=(o=(r=t.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&o!==void 0?o:(s=t.notification)===null||s===void 0?void 0:s.click_action;c&&(e.fcmOptions.link=c);const a=(i=t.fcmOptions)===null||i===void 0?void 0:i.analytics_label;a&&(e.fcmOptions.analyticsLabel=a)}/**
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
 */function ag(e){return typeof e=="object"&&!!e&&qa in e}/**
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
 */Ya("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");Ya("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function Ya(e,t){const n=[];for(let r=0;r<e.length;r++)n.push(e.charAt(r)),r<t.length&&n.push(t.charAt(r));return n.join("")}/**
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
 */function cg(e){if(!e||!e.options)throw Er("App Configuration Object");if(!e.name)throw Er("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const r of t)if(!n[r])throw Er(r);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Er(e){return ye.create("missing-app-config-values",{valueName:e})}/**
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
 */class lg{constructor(t,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const o=cg(t);this.firebaseDependencies={app:t,appConfig:o,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
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
 */async function ug(e){try{e.swRegistration=await navigator.serviceWorker.register($p,{scope:Bp}),e.swRegistration.update().catch(()=>{})}catch(t){throw ye.create("failed-service-worker-registration",{browserErrorMessage:t==null?void 0:t.message})}}/**
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
 */async function fg(e,t){if(!t&&!e.swRegistration&&await ug(e),!(!t&&e.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw ye.create("invalid-sw-registration");e.swRegistration=t}}/**
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
 */async function dg(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=Wa)}/**
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
 */async function Qa(e,t){if(!navigator)throw ye.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw ye.create("permission-blocked");return await dg(e,t==null?void 0:t.vapidKey),await fg(e,t==null?void 0:t.serviceWorkerRegistration),Zp(e)}/**
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
 */async function hg(e,t,n){const r=pg(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[qa],message_name:n[Fp],message_time:n[jp],message_device_time:Math.floor(Date.now()/1e3)})}function pg(e){switch(e){case fn.NOTIFICATION_CLICKED:return"notification_open";case fn.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function gg(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===fn.PUSH_RECEIVED&&(typeof e.onMessageHandler=="function"?e.onMessageHandler(qs(n)):e.onMessageHandler.next(qs(n)));const r=n.data;ag(r)&&r[Hp]==="1"&&await hg(e,n.messageType,r)}const zs="@firebase/messaging",Gs="0.12.6";/**
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
 */const mg=e=>{const t=new lg(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>gg(t,n)),t},bg=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:r=>Qa(t,r)}};function _g(){at(new qe("messaging",mg,"PUBLIC")),at(new qe("messaging-internal",bg,"PRIVATE")),st(zs,Gs),st(zs,Gs,"esm2017")}async function yg(e,t){return e=ga(e),Qa(e,t)}_g();const wg={apiKey:"AIzaSyC2K5T81hk-OPCqhp4WwbEGu6ri9j-eRR4",authDomain:"efr-dev-c3d2a.firebaseapp.com",projectId:"efr-dev-c3d2a",storageBucket:"efr-dev-c3d2a.appspot.com",messagingSenderId:"799673773049",appId:"1:799673773049:web:8a0ae20839901e61e12b28"},vg=_a(wg),Eg=Np(vg);navigator.serviceWorker.register("sw.js").then(e=>{yg(Eg,{serviceWorkerRegistration:e,vapidKey:"BN9wKiZjn9PpeG4VKQriDQZ2EfUXAdIiLdcISZca4RnoJYXQ57vWi2CLIN6zBhCZpdFfK6rWIVGYOOqi3cBEo0E"}).then(t=>{if(t)return console.log("Token is: "+t);console.log("No registration token available. Request permission to generate one.")}).catch(t=>{console.log("An error occurred while retrieving token. ",t)})});mu(vu).use(Ff).mount("#app");
