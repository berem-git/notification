(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ur(e,t){const n=new Set(e.split(","));return t?r=>n.has(r.toLowerCase()):r=>n.has(r)}const Z={},xt=[],_e=()=>{},Va=()=>!1,Mn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Wr=e=>e.startsWith("onUpdate:"),se=Object.assign,qr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Ua=Object.prototype.hasOwnProperty,K=(e,t)=>Ua.call(e,t),F=Array.isArray,zt=e=>$n(e)==="[object Map]",Wa=e=>$n(e)==="[object Set]",j=e=>typeof e=="function",oe=e=>typeof e=="string",Nn=e=>typeof e=="symbol",ee=e=>e!==null&&typeof e=="object",Jo=e=>(ee(e)||j(e))&&j(e.then)&&j(e.catch),qa=Object.prototype.toString,$n=e=>qa.call(e),za=e=>$n(e).slice(8,-1),Ga=e=>$n(e)==="[object Object]",zr=e=>oe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Gt=Ur(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ln=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Ja=/-(\w)/g,Le=Ln(e=>e.replace(Ja,(t,n)=>n?n.toUpperCase():"")),Ya=/\B([A-Z])/g,Ft=Ln(e=>e.replace(Ya,"-$1").toLowerCase()),Bn=Ln(e=>e.charAt(0).toUpperCase()+e.slice(1)),Xn=Ln(e=>e?`on${Bn(e)}`:""),it=(e,t)=>!Object.is(e,t),Zn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},An=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Qa=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let $s;const Yo=()=>$s||($s=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Gr(e){if(F(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=oe(r)?tc(r):Gr(r);if(s)for(const o in s)t[o]=s[o]}return t}else if(oe(e)||ee(e))return e}const Xa=/;(?![^(]*\))/g,Za=/:([^]+)/,ec=/\/\*[^]*?\*\//g;function tc(e){const t={};return e.replace(ec,"").split(Xa).forEach(n=>{if(n){const r=n.split(Za);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Jr(e){let t="";if(oe(e))t=e;else if(F(e))for(let n=0;n<e.length;n++){const r=Jr(e[n]);r&&(t+=r+" ")}else if(ee(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const nc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",rc=Ur(nc);function Qo(e){return!!e||e===""}/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ee;class sc{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ee,!t&&Ee&&(this.index=(Ee.scopes||(Ee.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Ee;try{return Ee=this,t()}finally{Ee=n}}}on(){Ee=this}off(){Ee=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function oc(e,t=Ee){t&&t.active&&t.effects.push(e)}function ic(){return Ee}let gt;class Yr{constructor(t,n,r,s){this.fn=t,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,oc(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Et();for(let t=0;t<this._depsLength;t++){const n=this.deps[t];if(n.computed&&(ac(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),St()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=nt,n=gt;try{return nt=!0,gt=this,this._runnings++,Ls(this),this.fn()}finally{Bs(this),this._runnings--,gt=n,nt=t}}stop(){var t;this.active&&(Ls(this),Bs(this),(t=this.onStop)==null||t.call(this),this.active=!1)}}function ac(e){return e.value}function Ls(e){e._trackId++,e._depsLength=0}function Bs(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)Xo(e.deps[t],e);e.deps.length=e._depsLength}}function Xo(e,t){const n=e.get(t);n!==void 0&&t._trackId!==n&&(e.delete(t),e.size===0&&e.cleanup())}let nt=!0,vr=0;const Zo=[];function Et(){Zo.push(nt),nt=!1}function St(){const e=Zo.pop();nt=e===void 0?!0:e}function Qr(){vr++}function Xr(){for(vr--;!vr&&Er.length;)Er.shift()()}function ei(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const r=e.deps[e._depsLength];r!==t?(r&&Xo(r,e),e.deps[e._depsLength++]=t):e._depsLength++}}const Er=[];function ti(e,t,n){Qr();for(const r of e.keys()){let s;r._dirtyLevel<t&&(s??(s=e.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=t),r._shouldSchedule&&(s??(s=e.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&Er.push(r.scheduler)))}Xr()}const ni=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},Sr=new WeakMap,mt=Symbol(""),Ir=Symbol("");function ge(e,t,n){if(nt&&gt){let r=Sr.get(e);r||Sr.set(e,r=new Map);let s=r.get(n);s||r.set(n,s=ni(()=>r.delete(n))),ei(gt,s)}}function Ke(e,t,n,r,s,o){const i=Sr.get(e);if(!i)return;let c=[];if(t==="clear")c=[...i.values()];else if(n==="length"&&F(e)){const a=Number(r);i.forEach((f,l)=>{(l==="length"||!Nn(l)&&l>=a)&&c.push(f)})}else switch(n!==void 0&&c.push(i.get(n)),t){case"add":F(e)?zr(n)&&c.push(i.get("length")):(c.push(i.get(mt)),zt(e)&&c.push(i.get(Ir)));break;case"delete":F(e)||(c.push(i.get(mt)),zt(e)&&c.push(i.get(Ir)));break;case"set":zt(e)&&c.push(i.get(mt));break}Qr();for(const a of c)a&&ti(a,4);Xr()}const cc=Ur("__proto__,__v_isRef,__isVue"),ri=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Nn)),Fs=lc();function lc(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=V(this);for(let o=0,i=this.length;o<i;o++)ge(r,"get",o+"");const s=r[t](...n);return s===-1||s===!1?r[t](...n.map(V)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Et(),Qr();const r=V(this)[t].apply(this,n);return Xr(),St(),r}}),e}function uc(e){const t=V(this);return ge(t,"has",e),t.hasOwnProperty(e)}class si{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){const s=this._isReadonly,o=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return o;if(n==="__v_raw")return r===(s?o?Sc:ci:o?ai:ii).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const i=F(t);if(!s){if(i&&K(Fs,n))return Reflect.get(Fs,n,r);if(n==="hasOwnProperty")return uc}const c=Reflect.get(t,n,r);return(Nn(n)?ri.has(n):cc(n))||(s||ge(t,"get",n),o)?c:me(c)?i&&zr(n)?c:c.value:ee(c)?s?ui(c):jn(c):c}}class oi extends si{constructor(t=!1){super(!1,t)}set(t,n,r,s){let o=t[n];if(!this._isShallow){const a=Nt(o);if(!Tn(r)&&!Nt(r)&&(o=V(o),r=V(r)),!F(t)&&me(o)&&!me(r))return a?!1:(o.value=r,!0)}const i=F(t)&&zr(n)?Number(n)<t.length:K(t,n),c=Reflect.set(t,n,r,s);return t===V(s)&&(i?it(r,o)&&Ke(t,"set",n,r):Ke(t,"add",n,r)),c}deleteProperty(t,n){const r=K(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&Ke(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!Nn(n)||!ri.has(n))&&ge(t,"has",n),r}ownKeys(t){return ge(t,"iterate",F(t)?"length":mt),Reflect.ownKeys(t)}}class fc extends si{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const dc=new oi,hc=new fc,pc=new oi(!0),Zr=e=>e,Fn=e=>Reflect.getPrototypeOf(e);function hn(e,t,n=!1,r=!1){e=e.__v_raw;const s=V(e),o=V(t);n||(it(t,o)&&ge(s,"get",t),ge(s,"get",o));const{has:i}=Fn(s),c=r?Zr:n?ns:en;if(i.call(s,t))return c(e.get(t));if(i.call(s,o))return c(e.get(o));e!==s&&e.get(t)}function pn(e,t=!1){const n=this.__v_raw,r=V(n),s=V(e);return t||(it(e,s)&&ge(r,"has",e),ge(r,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function gn(e,t=!1){return e=e.__v_raw,!t&&ge(V(e),"iterate",mt),Reflect.get(e,"size",e)}function js(e){e=V(e);const t=V(this);return Fn(t).has.call(t,e)||(t.add(e),Ke(t,"add",e,e)),this}function Hs(e,t){t=V(t);const n=V(this),{has:r,get:s}=Fn(n);let o=r.call(n,e);o||(e=V(e),o=r.call(n,e));const i=s.call(n,e);return n.set(e,t),o?it(t,i)&&Ke(n,"set",e,t):Ke(n,"add",e,t),this}function Ks(e){const t=V(this),{has:n,get:r}=Fn(t);let s=n.call(t,e);s||(e=V(e),s=n.call(t,e)),r&&r.call(t,e);const o=t.delete(e);return s&&Ke(t,"delete",e,void 0),o}function Vs(){const e=V(this),t=e.size!==0,n=e.clear();return t&&Ke(e,"clear",void 0,void 0),n}function mn(e,t){return function(r,s){const o=this,i=o.__v_raw,c=V(i),a=t?Zr:e?ns:en;return!e&&ge(c,"iterate",mt),i.forEach((f,l)=>r.call(s,a(f),a(l),o))}}function bn(e,t,n){return function(...r){const s=this.__v_raw,o=V(s),i=zt(o),c=e==="entries"||e===Symbol.iterator&&i,a=e==="keys"&&i,f=s[e](...r),l=n?Zr:t?ns:en;return!t&&ge(o,"iterate",a?Ir:mt),{next(){const{value:h,done:p}=f.next();return p?{value:h,done:p}:{value:c?[l(h[0]),l(h[1])]:l(h),done:p}},[Symbol.iterator](){return this}}}}function Ye(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function gc(){const e={get(o){return hn(this,o)},get size(){return gn(this)},has:pn,add:js,set:Hs,delete:Ks,clear:Vs,forEach:mn(!1,!1)},t={get(o){return hn(this,o,!1,!0)},get size(){return gn(this)},has:pn,add:js,set:Hs,delete:Ks,clear:Vs,forEach:mn(!1,!0)},n={get(o){return hn(this,o,!0)},get size(){return gn(this,!0)},has(o){return pn.call(this,o,!0)},add:Ye("add"),set:Ye("set"),delete:Ye("delete"),clear:Ye("clear"),forEach:mn(!0,!1)},r={get(o){return hn(this,o,!0,!0)},get size(){return gn(this,!0)},has(o){return pn.call(this,o,!0)},add:Ye("add"),set:Ye("set"),delete:Ye("delete"),clear:Ye("clear"),forEach:mn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{e[o]=bn(o,!1,!1),n[o]=bn(o,!0,!1),t[o]=bn(o,!1,!0),r[o]=bn(o,!0,!0)}),[e,n,t,r]}const[mc,bc,_c,yc]=gc();function es(e,t){const n=t?e?yc:_c:e?bc:mc;return(r,s,o)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(K(n,s)&&s in r?n:r,s,o)}const wc={get:es(!1,!1)},vc={get:es(!1,!0)},Ec={get:es(!0,!1)},ii=new WeakMap,ai=new WeakMap,ci=new WeakMap,Sc=new WeakMap;function Ic(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ac(e){return e.__v_skip||!Object.isExtensible(e)?0:Ic(za(e))}function jn(e){return Nt(e)?e:ts(e,!1,dc,wc,ii)}function li(e){return ts(e,!1,pc,vc,ai)}function ui(e){return ts(e,!0,hc,Ec,ci)}function ts(e,t,n,r,s){if(!ee(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=s.get(e);if(o)return o;const i=Ac(e);if(i===0)return e;const c=new Proxy(e,i===2?r:n);return s.set(e,c),c}function kt(e){return Nt(e)?kt(e.__v_raw):!!(e&&e.__v_isReactive)}function Nt(e){return!!(e&&e.__v_isReadonly)}function Tn(e){return!!(e&&e.__v_isShallow)}function fi(e){return kt(e)||Nt(e)}function V(e){const t=e&&e.__v_raw;return t?V(t):e}function di(e){return Object.isExtensible(e)&&An(e,"__v_skip",!0),e}const en=e=>ee(e)?jn(e):e,ns=e=>ee(e)?ui(e):e;class hi{constructor(t,n,r,s){this.getter=t,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Yr(()=>t(this._value),()=>yn(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const t=V(this);return(!t._cacheable||t.effect.dirty)&&it(t._value,t._value=t.effect.run())&&yn(t,4),pi(t),t.effect._dirtyLevel>=2&&yn(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function Tc(e,t,n=!1){let r,s;const o=j(e);return o?(r=e,s=_e):(r=e.get,s=e.set),new hi(r,s,o||!s,n)}function pi(e){var t;nt&&gt&&(e=V(e),ei(gt,(t=e.dep)!=null?t:e.dep=ni(()=>e.dep=void 0,e instanceof hi?e:void 0)))}function yn(e,t=4,n){e=V(e);const r=e.dep;r&&ti(r,t)}function me(e){return!!(e&&e.__v_isRef===!0)}function Cc(e){return gi(e,!1)}function Oc(e){return gi(e,!0)}function gi(e,t){return me(e)?e:new Rc(e,t)}class Rc{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:V(t),this._value=n?t:en(t)}get value(){return pi(this),this._value}set value(t){const n=this.__v_isShallow||Tn(t)||Nt(t);t=n?t:V(t),it(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:en(t),yn(this,4))}}function Dt(e){return me(e)?e.value:e}const xc={get:(e,t,n)=>Dt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return me(s)&&!me(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function mi(e){return kt(e)?e:new Proxy(e,xc)}/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function rt(e,t,n,r){try{return r?e(...r):e()}catch(s){Hn(s,t,n)}}function Ce(e,t,n,r){if(j(e)){const o=rt(e,t,n,r);return o&&Jo(o)&&o.catch(i=>{Hn(i,t,n)}),o}const s=[];for(let o=0;o<e.length;o++)s.push(Ce(e[o],t,n,r));return s}function Hn(e,t,n,r=!0){const s=t?t.vnode:null;if(t){let o=t.parent;const i=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;o;){const f=o.ec;if(f){for(let l=0;l<f.length;l++)if(f[l](e,i,c)===!1)return}o=o.parent}const a=t.appContext.config.errorHandler;if(a){rt(a,null,10,[e,i,c]);return}}kc(e,n,s,r)}function kc(e,t,n,r=!0){console.error(e)}let tn=!1,Ar=!1;const ae=[];let $e=0;const Pt=[];let Xe=null,ht=0;const bi=Promise.resolve();let rs=null;function _i(e){const t=rs||bi;return e?t.then(this?e.bind(this):e):t}function Dc(e){let t=$e+1,n=ae.length;for(;t<n;){const r=t+n>>>1,s=ae[r],o=nn(s);o<e||o===e&&s.pre?t=r+1:n=r}return t}function ss(e){(!ae.length||!ae.includes(e,tn&&e.allowRecurse?$e+1:$e))&&(e.id==null?ae.push(e):ae.splice(Dc(e.id),0,e),yi())}function yi(){!tn&&!Ar&&(Ar=!0,rs=bi.then(vi))}function Pc(e){const t=ae.indexOf(e);t>$e&&ae.splice(t,1)}function Mc(e){F(e)?Pt.push(...e):(!Xe||!Xe.includes(e,e.allowRecurse?ht+1:ht))&&Pt.push(e),yi()}function Us(e,t,n=tn?$e+1:0){for(;n<ae.length;n++){const r=ae[n];if(r&&r.pre){if(e&&r.id!==e.uid)continue;ae.splice(n,1),n--,r()}}}function wi(e){if(Pt.length){const t=[...new Set(Pt)].sort((n,r)=>nn(n)-nn(r));if(Pt.length=0,Xe){Xe.push(...t);return}for(Xe=t,ht=0;ht<Xe.length;ht++)Xe[ht]();Xe=null,ht=0}}const nn=e=>e.id==null?1/0:e.id,Nc=(e,t)=>{const n=nn(e)-nn(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function vi(e){Ar=!1,tn=!0,ae.sort(Nc);const t=_e;try{for($e=0;$e<ae.length;$e++){const n=ae[$e];n&&n.active!==!1&&rt(n,null,14)}}finally{$e=0,ae.length=0,wi(),tn=!1,rs=null,(ae.length||Pt.length)&&vi()}}function $c(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||Z;let s=n;const o=t.startsWith("update:"),i=o&&t.slice(7);if(i&&i in r){const l=`${i==="modelValue"?"model":i}Modifiers`,{number:h,trim:p}=r[l]||Z;p&&(s=n.map(y=>oe(y)?y.trim():y)),h&&(s=n.map(Qa))}let c,a=r[c=Xn(t)]||r[c=Xn(Le(t))];!a&&o&&(a=r[c=Xn(Ft(t))]),a&&Ce(a,e,6,s);const f=r[c+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,Ce(f,e,6,s)}}function Ei(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const o=e.emits;let i={},c=!1;if(!j(e)){const a=f=>{const l=Ei(f,t,!0);l&&(c=!0,se(i,l))};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!o&&!c?(ee(e)&&r.set(e,null),null):(F(o)?o.forEach(a=>i[a]=null):se(i,o),ee(e)&&r.set(e,i),i)}function Kn(e,t){return!e||!Mn(t)?!1:(t=t.slice(2).replace(/Once$/,""),K(e,t[0].toLowerCase()+t.slice(1))||K(e,Ft(t))||K(e,t))}let Ae=null,Vn=null;function Cn(e){const t=Ae;return Ae=e,Vn=e&&e.type.__scopeId||null,t}function Lc(e){Vn=e}function Bc(){Vn=null}function os(e,t=Ae,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&to(-1);const o=Cn(t);let i;try{i=e(...s)}finally{Cn(o),r._d&&to(1)}return i};return r._n=!0,r._c=!0,r._d=!0,r}function er(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:o,propsOptions:[i],slots:c,attrs:a,emit:f,render:l,renderCache:h,data:p,setupState:y,ctx:O,inheritAttrs:P}=e;let $,x;const M=Cn(e);try{if(n.shapeFlag&4){const U=s||r,te=U;$=Ne(l.call(te,U,h,o,y,p,O)),x=a}else{const U=t;$=Ne(U.length>1?U(o,{attrs:a,slots:c,emit:f}):U(o,null)),x=t.props?a:Fc(a)}}catch(U){Qt.length=0,Hn(U,e,1),$=he(rn)}let L=$;if(x&&P!==!1){const U=Object.keys(x),{shapeFlag:te}=L;U.length&&te&7&&(i&&U.some(Wr)&&(x=jc(x,i)),L=$t(L,x))}return n.dirs&&(L=$t(L),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&(L.transition=n.transition),$=L,Cn(M),$}const Fc=e=>{let t;for(const n in e)(n==="class"||n==="style"||Mn(n))&&((t||(t={}))[n]=e[n]);return t},jc=(e,t)=>{const n={};for(const r in e)(!Wr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Hc(e,t,n){const{props:r,children:s,component:o}=e,{props:i,children:c,patchFlag:a}=t,f=o.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return r?Ws(r,i,f):!!i;if(a&8){const l=t.dynamicProps;for(let h=0;h<l.length;h++){const p=l[h];if(i[p]!==r[p]&&!Kn(f,p))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===i?!1:r?i?Ws(r,i,f):!0:!!i;return!1}function Ws(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const o=r[s];if(t[o]!==e[o]&&!Kn(n,o))return!0}return!1}function Kc({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const Si="components";function is(e,t){return Uc(Si,e,!0,t)||e}const Vc=Symbol.for("v-ndc");function Uc(e,t,n=!0,r=!1){const s=Ae||ce;if(s){const o=s.type;if(e===Si){const c=Bl(o,!1);if(c&&(c===t||c===Le(t)||c===Bn(Le(t))))return o}const i=qs(s[e]||o[e],t)||qs(s.appContext[e],t);return!i&&r?o:i}}function qs(e,t){return e&&(e[t]||e[Le(t)]||e[Bn(Le(t))])}const Wc=e=>e.__isSuspense;function qc(e,t){t&&t.pendingBranch?F(e)?t.effects.push(...e):t.effects.push(e):Mc(e)}const zc=Symbol.for("v-scx"),Gc=()=>Ve(zc),_n={};function wn(e,t,n){return Ii(e,t,n)}function Ii(e,t,{immediate:n,deep:r,flush:s,once:o,onTrack:i,onTrigger:c}=Z){if(t&&o){const B=t;t=(...le)=>{B(...le),te()}}const a=ce,f=B=>r===!0?B:Rt(B,r===!1?1:void 0);let l,h=!1,p=!1;if(me(e)?(l=()=>e.value,h=Tn(e)):kt(e)?(l=()=>f(e),h=!0):F(e)?(p=!0,h=e.some(B=>kt(B)||Tn(B)),l=()=>e.map(B=>{if(me(B))return B.value;if(kt(B))return f(B);if(j(B))return rt(B,a,2)})):j(e)?t?l=()=>rt(e,a,2):l=()=>(y&&y(),Ce(e,a,3,[O])):l=_e,t&&r){const B=l;l=()=>Rt(B())}let y,O=B=>{y=L.onStop=()=>{rt(B,a,4),y=L.onStop=void 0}},P;if(zn)if(O=_e,t?n&&Ce(t,a,3,[l(),p?[]:void 0,O]):l(),s==="sync"){const B=Gc();P=B.__watcherHandles||(B.__watcherHandles=[])}else return _e;let $=p?new Array(e.length).fill(_n):_n;const x=()=>{if(!(!L.active||!L.dirty))if(t){const B=L.run();(r||h||(p?B.some((le,we)=>it(le,$[we])):it(B,$)))&&(y&&y(),Ce(t,a,3,[B,$===_n?void 0:p&&$[0]===_n?[]:$,O]),$=B)}else L.run()};x.allowRecurse=!!t;let M;s==="sync"?M=x:s==="post"?M=()=>de(x,a&&a.suspense):(x.pre=!0,a&&(x.id=a.uid),M=()=>ss(x));const L=new Yr(l,_e,M),U=ic(),te=()=>{L.stop(),U&&qr(U.effects,L)};return t?n?x():$=L.run():s==="post"?de(L.run.bind(L),a&&a.suspense):L.run(),P&&P.push(te),te}function Jc(e,t,n){const r=this.proxy,s=oe(e)?e.includes(".")?Ai(r,e):()=>r[e]:e.bind(r,r);let o;j(t)?o=t:(o=t.handler,n=t);const i=un(this),c=Ii(s,o.bind(r),n);return i(),c}function Ai(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Rt(e,t,n=0,r){if(!ee(e)||e.__v_skip)return e;if(t&&t>0){if(n>=t)return e;n++}if(r=r||new Set,r.has(e))return e;if(r.add(e),me(e))Rt(e.value,t,n,r);else if(F(e))for(let s=0;s<e.length;s++)Rt(e[s],t,n,r);else if(Wa(e)||zt(e))e.forEach(s=>{Rt(s,t,n,r)});else if(Ga(e))for(const s in e)Rt(e[s],t,n,r);return e}function ut(e,t,n,r){const s=e.dirs,o=t&&t.dirs;for(let i=0;i<s.length;i++){const c=s[i];o&&(c.oldValue=o[i].value);let a=c.dir[r];a&&(Et(),Ce(a,n,8,[e.el,c,e,t]),St())}}/*! #__NO_SIDE_EFFECTS__ */function Ti(e,t){return j(e)?(()=>se({name:e.name},t,{setup:e}))():e}const vn=e=>!!e.type.__asyncLoader,Ci=e=>e.type.__isKeepAlive;function Yc(e,t){Oi(e,"a",t)}function Qc(e,t){Oi(e,"da",t)}function Oi(e,t,n=ce){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(Un(t,r,n),n){let s=n.parent;for(;s&&s.parent;)Ci(s.parent.vnode)&&Xc(r,t,n,s),s=s.parent}}function Xc(e,t,n,r){const s=Un(t,e,r,!0);Ri(()=>{qr(r[t],s)},n)}function Un(e,t,n=ce,r=!1){if(n){const s=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;Et();const c=un(n),a=Ce(t,n,e,i);return c(),St(),a});return r?s.unshift(o):s.push(o),o}}const ze=e=>(t,n=ce)=>(!zn||e==="sp")&&Un(e,(...r)=>t(...r),n),Zc=ze("bm"),el=ze("m"),tl=ze("bu"),nl=ze("u"),rl=ze("bum"),Ri=ze("um"),sl=ze("sp"),ol=ze("rtg"),il=ze("rtc");function al(e,t=ce){Un("ec",e,t)}const Tr=e=>e?ji(e)?ds(e)||e.proxy:Tr(e.parent):null,Jt=se(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Tr(e.parent),$root:e=>Tr(e.root),$emit:e=>e.emit,$options:e=>as(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,ss(e.update)}),$nextTick:e=>e.n||(e.n=_i.bind(e.proxy)),$watch:e=>Jc.bind(e)}),tr=(e,t)=>e!==Z&&!e.__isScriptSetup&&K(e,t),cl={get({_:e},t){const{ctx:n,setupState:r,data:s,props:o,accessCache:i,type:c,appContext:a}=e;let f;if(t[0]!=="$"){const y=i[t];if(y!==void 0)switch(y){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return o[t]}else{if(tr(r,t))return i[t]=1,r[t];if(s!==Z&&K(s,t))return i[t]=2,s[t];if((f=e.propsOptions[0])&&K(f,t))return i[t]=3,o[t];if(n!==Z&&K(n,t))return i[t]=4,n[t];Cr&&(i[t]=0)}}const l=Jt[t];let h,p;if(l)return t==="$attrs"&&ge(e,"get",t),l(e);if((h=c.__cssModules)&&(h=h[t]))return h;if(n!==Z&&K(n,t))return i[t]=4,n[t];if(p=a.config.globalProperties,K(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:o}=e;return tr(s,t)?(s[t]=n,!0):r!==Z&&K(r,t)?(r[t]=n,!0):K(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:o}},i){let c;return!!n[i]||e!==Z&&K(e,i)||tr(t,i)||(c=o[0])&&K(c,i)||K(r,i)||K(Jt,i)||K(s.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:K(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function zs(e){return F(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Cr=!0;function ll(e){const t=as(e),n=e.proxy,r=e.ctx;Cr=!1,t.beforeCreate&&Gs(t.beforeCreate,e,"bc");const{data:s,computed:o,methods:i,watch:c,provide:a,inject:f,created:l,beforeMount:h,mounted:p,beforeUpdate:y,updated:O,activated:P,deactivated:$,beforeDestroy:x,beforeUnmount:M,destroyed:L,unmounted:U,render:te,renderTracked:B,renderTriggered:le,errorCaptured:we,serverPrefetch:ct,expose:xe,inheritAttrs:Ge,components:lt,directives:ke,filters:Kt}=t;if(f&&ul(f,r,null),i)for(const G in i){const W=i[G];j(W)&&(r[G]=W.bind(n))}if(s){const G=s.call(n,n);ee(G)&&(e.data=jn(G))}if(Cr=!0,o)for(const G in o){const W=o[G],Be=j(W)?W.bind(n,n):j(W.get)?W.get.bind(n,n):_e,Je=!j(W)&&j(W.set)?W.set.bind(n):_e,De=Ie({get:Be,set:Je});Object.defineProperty(r,G,{enumerable:!0,configurable:!0,get:()=>De.value,set:fe=>De.value=fe})}if(c)for(const G in c)xi(c[G],r,n,G);if(a){const G=j(a)?a.call(n):a;Reflect.ownKeys(G).forEach(W=>{En(W,G[W])})}l&&Gs(l,e,"c");function ne(G,W){F(W)?W.forEach(Be=>G(Be.bind(n))):W&&G(W.bind(n))}if(ne(Zc,h),ne(el,p),ne(tl,y),ne(nl,O),ne(Yc,P),ne(Qc,$),ne(al,we),ne(il,B),ne(ol,le),ne(rl,M),ne(Ri,U),ne(sl,ct),F(xe))if(xe.length){const G=e.exposed||(e.exposed={});xe.forEach(W=>{Object.defineProperty(G,W,{get:()=>n[W],set:Be=>n[W]=Be})})}else e.exposed||(e.exposed={});te&&e.render===_e&&(e.render=te),Ge!=null&&(e.inheritAttrs=Ge),lt&&(e.components=lt),ke&&(e.directives=ke)}function ul(e,t,n=_e){F(e)&&(e=Or(e));for(const r in e){const s=e[r];let o;ee(s)?"default"in s?o=Ve(s.from||r,s.default,!0):o=Ve(s.from||r):o=Ve(s),me(o)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:i=>o.value=i}):t[r]=o}}function Gs(e,t,n){Ce(F(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function xi(e,t,n,r){const s=r.includes(".")?Ai(n,r):()=>n[r];if(oe(e)){const o=t[e];j(o)&&wn(s,o)}else if(j(e))wn(s,e.bind(n));else if(ee(e))if(F(e))e.forEach(o=>xi(o,t,n,r));else{const o=j(e.handler)?e.handler.bind(n):t[e.handler];j(o)&&wn(s,o,e)}}function as(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:i}}=e.appContext,c=o.get(t);let a;return c?a=c:!s.length&&!n&&!r?a=t:(a={},s.length&&s.forEach(f=>On(a,f,i,!0)),On(a,t,i)),ee(t)&&o.set(t,a),a}function On(e,t,n,r=!1){const{mixins:s,extends:o}=t;o&&On(e,o,n,!0),s&&s.forEach(i=>On(e,i,n,!0));for(const i in t)if(!(r&&i==="expose")){const c=fl[i]||n&&n[i];e[i]=c?c(e[i],t[i]):t[i]}return e}const fl={data:Js,props:Ys,emits:Ys,methods:qt,computed:qt,beforeCreate:ue,created:ue,beforeMount:ue,mounted:ue,beforeUpdate:ue,updated:ue,beforeDestroy:ue,beforeUnmount:ue,destroyed:ue,unmounted:ue,activated:ue,deactivated:ue,errorCaptured:ue,serverPrefetch:ue,components:qt,directives:qt,watch:hl,provide:Js,inject:dl};function Js(e,t){return t?e?function(){return se(j(e)?e.call(this,this):e,j(t)?t.call(this,this):t)}:t:e}function dl(e,t){return qt(Or(e),Or(t))}function Or(e){if(F(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ue(e,t){return e?[...new Set([].concat(e,t))]:t}function qt(e,t){return e?se(Object.create(null),e,t):t}function Ys(e,t){return e?F(e)&&F(t)?[...new Set([...e,...t])]:se(Object.create(null),zs(e),zs(t??{})):t}function hl(e,t){if(!e)return t;if(!t)return e;const n=se(Object.create(null),e);for(const r in t)n[r]=ue(e[r],t[r]);return n}function ki(){return{app:null,config:{isNativeTag:Va,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let pl=0;function gl(e,t){return function(r,s=null){j(r)||(r=se({},r)),s!=null&&!ee(s)&&(s=null);const o=ki(),i=new WeakSet;let c=!1;const a=o.app={_uid:pl++,_component:r,_props:s,_container:null,_context:o,_instance:null,version:jl,get config(){return o.config},set config(f){},use(f,...l){return i.has(f)||(f&&j(f.install)?(i.add(f),f.install(a,...l)):j(f)&&(i.add(f),f(a,...l))),a},mixin(f){return o.mixins.includes(f)||o.mixins.push(f),a},component(f,l){return l?(o.components[f]=l,a):o.components[f]},directive(f,l){return l?(o.directives[f]=l,a):o.directives[f]},mount(f,l,h){if(!c){const p=he(r,s);return p.appContext=o,h===!0?h="svg":h===!1&&(h=void 0),l&&t?t(p,f):e(p,f,h),c=!0,a._container=f,f.__vue_app__=a,ds(p.component)||p.component.proxy}},unmount(){c&&(e(null,a._container),delete a._container.__vue_app__)},provide(f,l){return o.provides[f]=l,a},runWithContext(f){const l=Yt;Yt=a;try{return f()}finally{Yt=l}}};return a}}let Yt=null;function En(e,t){if(ce){let n=ce.provides;const r=ce.parent&&ce.parent.provides;r===n&&(n=ce.provides=Object.create(r)),n[e]=t}}function Ve(e,t,n=!1){const r=ce||Ae;if(r||Yt){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Yt._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&j(t)?t.call(r&&r.proxy):t}}function ml(e,t,n,r=!1){const s={},o={};An(o,qn,1),e.propsDefaults=Object.create(null),Di(e,t,s,o);for(const i in e.propsOptions[0])i in s||(s[i]=void 0);n?e.props=r?s:li(s):e.type.props?e.props=s:e.props=o,e.attrs=o}function bl(e,t,n,r){const{props:s,attrs:o,vnode:{patchFlag:i}}=e,c=V(s),[a]=e.propsOptions;let f=!1;if((r||i>0)&&!(i&16)){if(i&8){const l=e.vnode.dynamicProps;for(let h=0;h<l.length;h++){let p=l[h];if(Kn(e.emitsOptions,p))continue;const y=t[p];if(a)if(K(o,p))y!==o[p]&&(o[p]=y,f=!0);else{const O=Le(p);s[O]=Rr(a,c,O,y,e,!1)}else y!==o[p]&&(o[p]=y,f=!0)}}}else{Di(e,t,s,o)&&(f=!0);let l;for(const h in c)(!t||!K(t,h)&&((l=Ft(h))===h||!K(t,l)))&&(a?n&&(n[h]!==void 0||n[l]!==void 0)&&(s[h]=Rr(a,c,h,void 0,e,!0)):delete s[h]);if(o!==c)for(const h in o)(!t||!K(t,h))&&(delete o[h],f=!0)}f&&Ke(e,"set","$attrs")}function Di(e,t,n,r){const[s,o]=e.propsOptions;let i=!1,c;if(t)for(let a in t){if(Gt(a))continue;const f=t[a];let l;s&&K(s,l=Le(a))?!o||!o.includes(l)?n[l]=f:(c||(c={}))[l]=f:Kn(e.emitsOptions,a)||(!(a in r)||f!==r[a])&&(r[a]=f,i=!0)}if(o){const a=V(n),f=c||Z;for(let l=0;l<o.length;l++){const h=o[l];n[h]=Rr(s,a,h,f[h],e,!K(f,h))}}return i}function Rr(e,t,n,r,s,o){const i=e[n];if(i!=null){const c=K(i,"default");if(c&&r===void 0){const a=i.default;if(i.type!==Function&&!i.skipFactory&&j(a)){const{propsDefaults:f}=s;if(n in f)r=f[n];else{const l=un(s);r=f[n]=a.call(null,t),l()}}else r=a}i[0]&&(o&&!c?r=!1:i[1]&&(r===""||r===Ft(n))&&(r=!0))}return r}function Pi(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const o=e.props,i={},c=[];let a=!1;if(!j(e)){const l=h=>{a=!0;const[p,y]=Pi(h,t,!0);se(i,p),y&&c.push(...y)};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}if(!o&&!a)return ee(e)&&r.set(e,xt),xt;if(F(o))for(let l=0;l<o.length;l++){const h=Le(o[l]);Qs(h)&&(i[h]=Z)}else if(o)for(const l in o){const h=Le(l);if(Qs(h)){const p=o[l],y=i[h]=F(p)||j(p)?{type:p}:se({},p);if(y){const O=eo(Boolean,y.type),P=eo(String,y.type);y[0]=O>-1,y[1]=P<0||O<P,(O>-1||K(y,"default"))&&c.push(h)}}}const f=[i,c];return ee(e)&&r.set(e,f),f}function Qs(e){return e[0]!=="$"&&!Gt(e)}function Xs(e){return e===null?"null":typeof e=="function"?e.name||"":typeof e=="object"&&e.constructor&&e.constructor.name||""}function Zs(e,t){return Xs(e)===Xs(t)}function eo(e,t){return F(t)?t.findIndex(n=>Zs(n,e)):j(t)&&Zs(t,e)?0:-1}const Mi=e=>e[0]==="_"||e==="$stable",cs=e=>F(e)?e.map(Ne):[Ne(e)],_l=(e,t,n)=>{if(t._n)return t;const r=os((...s)=>cs(t(...s)),n);return r._c=!1,r},Ni=(e,t,n)=>{const r=e._ctx;for(const s in e){if(Mi(s))continue;const o=e[s];if(j(o))t[s]=_l(s,o,r);else if(o!=null){const i=cs(o);t[s]=()=>i}}},$i=(e,t)=>{const n=cs(t);e.slots.default=()=>n},yl=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=V(t),An(t,"_",n)):Ni(t,e.slots={})}else e.slots={},t&&$i(e,t);An(e.slots,qn,1)},wl=(e,t,n)=>{const{vnode:r,slots:s}=e;let o=!0,i=Z;if(r.shapeFlag&32){const c=t._;c?n&&c===1?o=!1:(se(s,t),!n&&c===1&&delete s._):(o=!t.$stable,Ni(t,s)),i=t}else t&&($i(e,t),i={default:1});if(o)for(const c in s)!Mi(c)&&i[c]==null&&delete s[c]};function xr(e,t,n,r,s=!1){if(F(e)){e.forEach((p,y)=>xr(p,t&&(F(t)?t[y]:t),n,r,s));return}if(vn(r)&&!s)return;const o=r.shapeFlag&4?ds(r.component)||r.component.proxy:r.el,i=s?null:o,{i:c,r:a}=e,f=t&&t.r,l=c.refs===Z?c.refs={}:c.refs,h=c.setupState;if(f!=null&&f!==a&&(oe(f)?(l[f]=null,K(h,f)&&(h[f]=null)):me(f)&&(f.value=null)),j(a))rt(a,c,12,[i,l]);else{const p=oe(a),y=me(a);if(p||y){const O=()=>{if(e.f){const P=p?K(h,a)?h[a]:l[a]:a.value;s?F(P)&&qr(P,o):F(P)?P.includes(o)||P.push(o):p?(l[a]=[o],K(h,a)&&(h[a]=l[a])):(a.value=[o],e.k&&(l[e.k]=a.value))}else p?(l[a]=i,K(h,a)&&(h[a]=i)):y&&(a.value=i,e.k&&(l[e.k]=i))};i?(O.id=-1,de(O,n)):O()}}}const de=qc;function vl(e){return El(e)}function El(e,t){const n=Yo();n.__VUE__=!0;const{insert:r,remove:s,patchProp:o,createElement:i,createText:c,createComment:a,setText:f,setElementText:l,parentNode:h,nextSibling:p,setScopeId:y=_e,insertStaticContent:O}=e,P=(u,d,g,_=null,m=null,E=null,A=void 0,v=null,S=!!d.dynamicChildren)=>{if(u===d)return;u&&!Ut(u,d)&&(_=b(u),fe(u,m,E,!0),u=null),d.patchFlag===-2&&(S=!1,d.dynamicChildren=null);const{type:w,ref:C,shapeFlag:D}=d;switch(w){case Wn:$(u,d,g,_);break;case rn:x(u,d,g,_);break;case rr:u==null&&M(d,g,_,A);break;case Se:lt(u,d,g,_,m,E,A,v,S);break;default:D&1?te(u,d,g,_,m,E,A,v,S):D&6?ke(u,d,g,_,m,E,A,v,S):(D&64||D&128)&&w.process(u,d,g,_,m,E,A,v,S,R)}C!=null&&m&&xr(C,u&&u.ref,E,d||u,!d)},$=(u,d,g,_)=>{if(u==null)r(d.el=c(d.children),g,_);else{const m=d.el=u.el;d.children!==u.children&&f(m,d.children)}},x=(u,d,g,_)=>{u==null?r(d.el=a(d.children||""),g,_):d.el=u.el},M=(u,d,g,_)=>{[u.el,u.anchor]=O(u.children,d,g,_,u.el,u.anchor)},L=({el:u,anchor:d},g,_)=>{let m;for(;u&&u!==d;)m=p(u),r(u,g,_),u=m;r(d,g,_)},U=({el:u,anchor:d})=>{let g;for(;u&&u!==d;)g=p(u),s(u),u=g;s(d)},te=(u,d,g,_,m,E,A,v,S)=>{d.type==="svg"?A="svg":d.type==="math"&&(A="mathml"),u==null?B(d,g,_,m,E,A,v,S):ct(u,d,m,E,A,v,S)},B=(u,d,g,_,m,E,A,v)=>{let S,w;const{props:C,shapeFlag:D,transition:k,dirs:N}=u;if(S=u.el=i(u.type,E,C&&C.is,C),D&8?l(S,u.children):D&16&&we(u.children,S,null,_,m,nr(u,E),A,v),N&&ut(u,null,_,"created"),le(S,u,u.scopeId,A,_),C){for(const J in C)J!=="value"&&!Gt(J)&&o(S,J,null,C[J],E,u.children,_,m,ie);"value"in C&&o(S,"value",null,C.value,E),(w=C.onVnodeBeforeMount)&&Me(w,_,u)}N&&ut(u,null,_,"beforeMount");const H=Sl(m,k);H&&k.beforeEnter(S),r(S,d,g),((w=C&&C.onVnodeMounted)||H||N)&&de(()=>{w&&Me(w,_,u),H&&k.enter(S),N&&ut(u,null,_,"mounted")},m)},le=(u,d,g,_,m)=>{if(g&&y(u,g),_)for(let E=0;E<_.length;E++)y(u,_[E]);if(m){let E=m.subTree;if(d===E){const A=m.vnode;le(u,A,A.scopeId,A.slotScopeIds,m.parent)}}},we=(u,d,g,_,m,E,A,v,S=0)=>{for(let w=S;w<u.length;w++){const C=u[w]=v?Ze(u[w]):Ne(u[w]);P(null,C,d,g,_,m,E,A,v)}},ct=(u,d,g,_,m,E,A)=>{const v=d.el=u.el;let{patchFlag:S,dynamicChildren:w,dirs:C}=d;S|=u.patchFlag&16;const D=u.props||Z,k=d.props||Z;let N;if(g&&ft(g,!1),(N=k.onVnodeBeforeUpdate)&&Me(N,g,d,u),C&&ut(d,u,g,"beforeUpdate"),g&&ft(g,!0),w?xe(u.dynamicChildren,w,v,g,_,nr(d,m),E):A||W(u,d,v,null,g,_,nr(d,m),E,!1),S>0){if(S&16)Ge(v,d,D,k,g,_,m);else if(S&2&&D.class!==k.class&&o(v,"class",null,k.class,m),S&4&&o(v,"style",D.style,k.style,m),S&8){const H=d.dynamicProps;for(let J=0;J<H.length;J++){const X=H[J],re=D[X],ve=k[X];(ve!==re||X==="value")&&o(v,X,re,ve,m,u.children,g,_,ie)}}S&1&&u.children!==d.children&&l(v,d.children)}else!A&&w==null&&Ge(v,d,D,k,g,_,m);((N=k.onVnodeUpdated)||C)&&de(()=>{N&&Me(N,g,d,u),C&&ut(d,u,g,"updated")},_)},xe=(u,d,g,_,m,E,A)=>{for(let v=0;v<d.length;v++){const S=u[v],w=d[v],C=S.el&&(S.type===Se||!Ut(S,w)||S.shapeFlag&70)?h(S.el):g;P(S,w,C,null,_,m,E,A,!0)}},Ge=(u,d,g,_,m,E,A)=>{if(g!==_){if(g!==Z)for(const v in g)!Gt(v)&&!(v in _)&&o(u,v,g[v],null,A,d.children,m,E,ie);for(const v in _){if(Gt(v))continue;const S=_[v],w=g[v];S!==w&&v!=="value"&&o(u,v,w,S,A,d.children,m,E,ie)}"value"in _&&o(u,"value",g.value,_.value,A)}},lt=(u,d,g,_,m,E,A,v,S)=>{const w=d.el=u?u.el:c(""),C=d.anchor=u?u.anchor:c("");let{patchFlag:D,dynamicChildren:k,slotScopeIds:N}=d;N&&(v=v?v.concat(N):N),u==null?(r(w,g,_),r(C,g,_),we(d.children||[],g,C,m,E,A,v,S)):D>0&&D&64&&k&&u.dynamicChildren?(xe(u.dynamicChildren,k,g,m,E,A,v),(d.key!=null||m&&d===m.subTree)&&Li(u,d,!0)):W(u,d,g,C,m,E,A,v,S)},ke=(u,d,g,_,m,E,A,v,S)=>{d.slotScopeIds=v,u==null?d.shapeFlag&512?m.ctx.activate(d,g,_,A,S):Kt(d,g,_,m,E,A,S):It(u,d,S)},Kt=(u,d,g,_,m,E,A)=>{const v=u.component=Pl(u,_,m);if(Ci(u)&&(v.ctx.renderer=R),Ml(v),v.asyncDep){if(m&&m.registerDep(v,ne),!u.el){const S=v.subTree=he(rn);x(null,S,d,g)}}else ne(v,u,d,g,m,E,A)},It=(u,d,g)=>{const _=d.component=u.component;if(Hc(u,d,g))if(_.asyncDep&&!_.asyncResolved){G(_,d,g);return}else _.next=d,Pc(_.update),_.effect.dirty=!0,_.update();else d.el=u.el,_.vnode=d},ne=(u,d,g,_,m,E,A)=>{const v=()=>{if(u.isMounted){let{next:C,bu:D,u:k,parent:N,vnode:H}=u;{const Ct=Bi(u);if(Ct){C&&(C.el=H.el,G(u,C,A)),Ct.asyncDep.then(()=>{u.isUnmounted||v()});return}}let J=C,X;ft(u,!1),C?(C.el=H.el,G(u,C,A)):C=H,D&&Zn(D),(X=C.props&&C.props.onVnodeBeforeUpdate)&&Me(X,N,C,H),ft(u,!0);const re=er(u),ve=u.subTree;u.subTree=re,P(ve,re,h(ve.el),b(ve),u,m,E),C.el=re.el,J===null&&Kc(u,re.el),k&&de(k,m),(X=C.props&&C.props.onVnodeUpdated)&&de(()=>Me(X,N,C,H),m)}else{let C;const{el:D,props:k}=d,{bm:N,m:H,parent:J}=u,X=vn(d);if(ft(u,!1),N&&Zn(N),!X&&(C=k&&k.onVnodeBeforeMount)&&Me(C,J,d),ft(u,!0),D&&Q){const re=()=>{u.subTree=er(u),Q(D,u.subTree,u,m,null)};X?d.type.__asyncLoader().then(()=>!u.isUnmounted&&re()):re()}else{const re=u.subTree=er(u);P(null,re,g,_,u,m,E),d.el=re.el}if(H&&de(H,m),!X&&(C=k&&k.onVnodeMounted)){const re=d;de(()=>Me(C,J,re),m)}(d.shapeFlag&256||J&&vn(J.vnode)&&J.vnode.shapeFlag&256)&&u.a&&de(u.a,m),u.isMounted=!0,d=g=_=null}},S=u.effect=new Yr(v,_e,()=>ss(w),u.scope),w=u.update=()=>{S.dirty&&S.run()};w.id=u.uid,ft(u,!0),w()},G=(u,d,g)=>{d.component=u;const _=u.vnode.props;u.vnode=d,u.next=null,bl(u,d.props,_,g),wl(u,d.children,g),Et(),Us(u),St()},W=(u,d,g,_,m,E,A,v,S=!1)=>{const w=u&&u.children,C=u?u.shapeFlag:0,D=d.children,{patchFlag:k,shapeFlag:N}=d;if(k>0){if(k&128){Je(w,D,g,_,m,E,A,v,S);return}else if(k&256){Be(w,D,g,_,m,E,A,v,S);return}}N&8?(C&16&&ie(w,m,E),D!==w&&l(g,D)):C&16?N&16?Je(w,D,g,_,m,E,A,v,S):ie(w,m,E,!0):(C&8&&l(g,""),N&16&&we(D,g,_,m,E,A,v,S))},Be=(u,d,g,_,m,E,A,v,S)=>{u=u||xt,d=d||xt;const w=u.length,C=d.length,D=Math.min(w,C);let k;for(k=0;k<D;k++){const N=d[k]=S?Ze(d[k]):Ne(d[k]);P(u[k],N,g,null,m,E,A,v,S)}w>C?ie(u,m,E,!0,!1,D):we(d,g,_,m,E,A,v,S,D)},Je=(u,d,g,_,m,E,A,v,S)=>{let w=0;const C=d.length;let D=u.length-1,k=C-1;for(;w<=D&&w<=k;){const N=u[w],H=d[w]=S?Ze(d[w]):Ne(d[w]);if(Ut(N,H))P(N,H,g,null,m,E,A,v,S);else break;w++}for(;w<=D&&w<=k;){const N=u[D],H=d[k]=S?Ze(d[k]):Ne(d[k]);if(Ut(N,H))P(N,H,g,null,m,E,A,v,S);else break;D--,k--}if(w>D){if(w<=k){const N=k+1,H=N<C?d[N].el:_;for(;w<=k;)P(null,d[w]=S?Ze(d[w]):Ne(d[w]),g,H,m,E,A,v,S),w++}}else if(w>k)for(;w<=D;)fe(u[w],m,E,!0),w++;else{const N=w,H=w,J=new Map;for(w=H;w<=k;w++){const be=d[w]=S?Ze(d[w]):Ne(d[w]);be.key!=null&&J.set(be.key,w)}let X,re=0;const ve=k-H+1;let Ct=!1,Ps=0;const Vt=new Array(ve);for(w=0;w<ve;w++)Vt[w]=0;for(w=N;w<=D;w++){const be=u[w];if(re>=ve){fe(be,m,E,!0);continue}let Pe;if(be.key!=null)Pe=J.get(be.key);else for(X=H;X<=k;X++)if(Vt[X-H]===0&&Ut(be,d[X])){Pe=X;break}Pe===void 0?fe(be,m,E,!0):(Vt[Pe-H]=w+1,Pe>=Ps?Ps=Pe:Ct=!0,P(be,d[Pe],g,null,m,E,A,v,S),re++)}const Ms=Ct?Il(Vt):xt;for(X=Ms.length-1,w=ve-1;w>=0;w--){const be=H+w,Pe=d[be],Ns=be+1<C?d[be+1].el:_;Vt[w]===0?P(null,Pe,g,Ns,m,E,A,v,S):Ct&&(X<0||w!==Ms[X]?De(Pe,g,Ns,2):X--)}}},De=(u,d,g,_,m=null)=>{const{el:E,type:A,transition:v,children:S,shapeFlag:w}=u;if(w&6){De(u.component.subTree,d,g,_);return}if(w&128){u.suspense.move(d,g,_);return}if(w&64){A.move(u,d,g,R);return}if(A===Se){r(E,d,g);for(let D=0;D<S.length;D++)De(S[D],d,g,_);r(u.anchor,d,g);return}if(A===rr){L(u,d,g);return}if(_!==2&&w&1&&v)if(_===0)v.beforeEnter(E),r(E,d,g),de(()=>v.enter(E),m);else{const{leave:D,delayLeave:k,afterLeave:N}=v,H=()=>r(E,d,g),J=()=>{D(E,()=>{H(),N&&N()})};k?k(E,H,J):J()}else r(E,d,g)},fe=(u,d,g,_=!1,m=!1)=>{const{type:E,props:A,ref:v,children:S,dynamicChildren:w,shapeFlag:C,patchFlag:D,dirs:k}=u;if(v!=null&&xr(v,null,g,u,!0),C&256){d.ctx.deactivate(u);return}const N=C&1&&k,H=!vn(u);let J;if(H&&(J=A&&A.onVnodeBeforeUnmount)&&Me(J,d,u),C&6)dn(u.component,g,_);else{if(C&128){u.suspense.unmount(g,_);return}N&&ut(u,null,d,"beforeUnmount"),C&64?u.type.remove(u,d,g,m,R,_):w&&(E!==Se||D>0&&D&64)?ie(w,d,g,!1,!0):(E===Se&&D&384||!m&&C&16)&&ie(S,d,g),_&&At(u)}(H&&(J=A&&A.onVnodeUnmounted)||N)&&de(()=>{J&&Me(J,d,u),N&&ut(u,null,d,"unmounted")},g)},At=u=>{const{type:d,el:g,anchor:_,transition:m}=u;if(d===Se){Tt(g,_);return}if(d===rr){U(u);return}const E=()=>{s(g),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(u.shapeFlag&1&&m&&!m.persisted){const{leave:A,delayLeave:v}=m,S=()=>A(g,E);v?v(u.el,E,S):S()}else E()},Tt=(u,d)=>{let g;for(;u!==d;)g=p(u),s(u),u=g;s(d)},dn=(u,d,g)=>{const{bum:_,scope:m,update:E,subTree:A,um:v}=u;_&&Zn(_),m.stop(),E&&(E.active=!1,fe(A,u,d,g)),v&&de(v,d),de(()=>{u.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},ie=(u,d,g,_=!1,m=!1,E=0)=>{for(let A=E;A<u.length;A++)fe(u[A],d,g,_,m)},b=u=>u.shapeFlag&6?b(u.component.subTree):u.shapeFlag&128?u.suspense.next():p(u.anchor||u.el);let T=!1;const I=(u,d,g)=>{u==null?d._vnode&&fe(d._vnode,null,null,!0):P(d._vnode||null,u,d,null,null,null,g),T||(T=!0,Us(),wi(),T=!1),d._vnode=u},R={p:P,um:fe,m:De,r:At,mt:Kt,mc:we,pc:W,pbc:xe,n:b,o:e};let q,Q;return t&&([q,Q]=t(R)),{render:I,hydrate:q,createApp:gl(I,q)}}function nr({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function ft({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Sl(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Li(e,t,n=!1){const r=e.children,s=t.children;if(F(r)&&F(s))for(let o=0;o<r.length;o++){const i=r[o];let c=s[o];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[o]=Ze(s[o]),c.el=i.el),n||Li(i,c)),c.type===Wn&&(c.el=i.el)}}function Il(e){const t=e.slice(),n=[0];let r,s,o,i,c;const a=e.length;for(r=0;r<a;r++){const f=e[r];if(f!==0){if(s=n[n.length-1],e[s]<f){t[r]=s,n.push(r);continue}for(o=0,i=n.length-1;o<i;)c=o+i>>1,e[n[c]]<f?o=c+1:i=c;f<e[n[o]]&&(o>0&&(t[r]=n[o-1]),n[o]=r)}}for(o=n.length,i=n[o-1];o-- >0;)n[o]=i,i=t[i];return n}function Bi(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Bi(t)}const Al=e=>e.__isTeleport,Se=Symbol.for("v-fgt"),Wn=Symbol.for("v-txt"),rn=Symbol.for("v-cmt"),rr=Symbol.for("v-stc"),Qt=[];let Te=null;function ls(e=!1){Qt.push(Te=e?null:[])}function Tl(){Qt.pop(),Te=Qt[Qt.length-1]||null}let sn=1;function to(e){sn+=e}function Cl(e){return e.dynamicChildren=sn>0?Te||xt:null,Tl(),sn>0&&Te&&Te.push(e),e}function us(e,t,n,r,s,o){return Cl(pe(e,t,n,r,s,o,!0))}function kr(e){return e?e.__v_isVNode===!0:!1}function Ut(e,t){return e.type===t.type&&e.key===t.key}const qn="__vInternal",Fi=({key:e})=>e??null,Sn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?oe(e)||me(e)||j(e)?{i:Ae,r:e,k:t,f:!!n}:e:null);function pe(e,t=null,n=null,r=0,s=null,o=e===Se?0:1,i=!1,c=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Fi(t),ref:t&&Sn(t),scopeId:Vn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ae};return c?(fs(a,n),o&128&&e.normalize(a)):n&&(a.shapeFlag|=oe(n)?8:16),sn>0&&!i&&Te&&(a.patchFlag>0||o&6)&&a.patchFlag!==32&&Te.push(a),a}const he=Ol;function Ol(e,t=null,n=null,r=0,s=null,o=!1){if((!e||e===Vc)&&(e=rn),kr(e)){const c=$t(e,t,!0);return n&&fs(c,n),sn>0&&!o&&Te&&(c.shapeFlag&6?Te[Te.indexOf(e)]=c:Te.push(c)),c.patchFlag|=-2,c}if(Fl(e)&&(e=e.__vccOpts),t){t=Rl(t);let{class:c,style:a}=t;c&&!oe(c)&&(t.class=Jr(c)),ee(a)&&(fi(a)&&!F(a)&&(a=se({},a)),t.style=Gr(a))}const i=oe(e)?1:Wc(e)?128:Al(e)?64:ee(e)?4:j(e)?2:0;return pe(e,t,n,r,s,i,o,!0)}function Rl(e){return e?fi(e)||qn in e?se({},e):e:null}function $t(e,t,n=!1){const{props:r,ref:s,patchFlag:o,children:i}=e,c=t?xl(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Fi(c),ref:t&&t.ref?n&&s?F(s)?s.concat(Sn(t)):[s,Sn(t)]:Sn(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Se?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&$t(e.ssContent),ssFallback:e.ssFallback&&$t(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function We(e=" ",t=0){return he(Wn,null,e,t)}function Ne(e){return e==null||typeof e=="boolean"?he(rn):F(e)?he(Se,null,e.slice()):typeof e=="object"?Ze(e):he(Wn,null,String(e))}function Ze(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:$t(e)}function fs(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(F(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),fs(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!(qn in t)?t._ctx=Ae:s===3&&Ae&&(Ae.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else j(t)?(t={default:t,_ctx:Ae},n=32):(t=String(t),r&64?(n=16,t=[We(t)]):n=8);e.children=t,e.shapeFlag|=n}function xl(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=Jr([t.class,r.class]));else if(s==="style")t.style=Gr([t.style,r.style]);else if(Mn(s)){const o=t[s],i=r[s];i&&o!==i&&!(F(o)&&o.includes(i))&&(t[s]=o?[].concat(o,i):i)}else s!==""&&(t[s]=r[s])}return t}function Me(e,t,n,r=null){Ce(e,t,7,[n,r])}const kl=ki();let Dl=0;function Pl(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||kl,o={uid:Dl++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new sc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Pi(r,s),emitsOptions:Ei(r,s),emit:null,emitted:null,propsDefaults:Z,inheritAttrs:r.inheritAttrs,ctx:Z,data:Z,props:Z,attrs:Z,slots:Z,refs:Z,setupState:Z,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=$c.bind(null,o),e.ce&&e.ce(o),o}let ce=null,Rn,Dr;{const e=Yo(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),o=>{s.length>1?s.forEach(i=>i(o)):s[0](o)}};Rn=t("__VUE_INSTANCE_SETTERS__",n=>ce=n),Dr=t("__VUE_SSR_SETTERS__",n=>zn=n)}const un=e=>{const t=ce;return Rn(e),e.scope.on(),()=>{e.scope.off(),Rn(t)}},no=()=>{ce&&ce.scope.off(),Rn(null)};function ji(e){return e.vnode.shapeFlag&4}let zn=!1;function Ml(e,t=!1){t&&Dr(t);const{props:n,children:r}=e.vnode,s=ji(e);ml(e,n,s,t),yl(e,r);const o=s?Nl(e,t):void 0;return t&&Dr(!1),o}function Nl(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=di(new Proxy(e.ctx,cl));const{setup:r}=n;if(r){const s=e.setupContext=r.length>1?Ll(e):null,o=un(e);Et();const i=rt(r,e,0,[e.props,s]);if(St(),o(),Jo(i)){if(i.then(no,no),t)return i.then(c=>{ro(e,c,t)}).catch(c=>{Hn(c,e,0)});e.asyncDep=i}else ro(e,i,t)}else Hi(e,t)}function ro(e,t,n){j(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ee(t)&&(e.setupState=mi(t)),Hi(e,n)}let so;function Hi(e,t,n){const r=e.type;if(!e.render){if(!t&&so&&!r.render){const s=r.template||as(e).template;if(s){const{isCustomElement:o,compilerOptions:i}=e.appContext.config,{delimiters:c,compilerOptions:a}=r,f=se(se({isCustomElement:o,delimiters:c},i),a);r.render=so(s,f)}}e.render=r.render||_e}{const s=un(e);Et();try{ll(e)}finally{St(),s()}}}function $l(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return ge(e,"get","$attrs"),t[n]}}))}function Ll(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return $l(e)},slots:e.slots,emit:e.emit,expose:t}}function ds(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(mi(di(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Jt)return Jt[n](e)},has(t,n){return n in t||n in Jt}}))}function Bl(e,t=!0){return j(e)?e.displayName||e.name:e.name||t&&e.__name}function Fl(e){return j(e)&&"__vccOpts"in e}const Ie=(e,t)=>Tc(e,t,zn);function Ki(e,t,n){const r=arguments.length;return r===2?ee(t)&&!F(t)?kr(t)?he(e,null,[t]):he(e,t):he(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&kr(n)&&(n=[n]),he(e,t,n))}const jl="3.4.21";/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Hl="http://www.w3.org/2000/svg",Kl="http://www.w3.org/1998/Math/MathML",et=typeof document<"u"?document:null,oo=et&&et.createElement("template"),Vl={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?et.createElementNS(Hl,e):t==="mathml"?et.createElementNS(Kl,e):et.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>et.createTextNode(e),createComment:e=>et.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>et.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,o){const i=n?n.previousSibling:t.lastChild;if(s&&(s===o||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===o||!(s=s.nextSibling)););else{oo.innerHTML=r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e;const c=oo.content;if(r==="svg"||r==="mathml"){const a=c.firstChild;for(;a.firstChild;)c.appendChild(a.firstChild);c.removeChild(a)}t.insertBefore(c,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Ul=Symbol("_vtc");function Wl(e,t,n){const r=e[Ul];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const io=Symbol("_vod"),ql=Symbol("_vsh"),zl=Symbol(""),Gl=/(^|;)\s*display\s*:/;function Jl(e,t,n){const r=e.style,s=oe(n);let o=!1;if(n&&!s){if(t)if(oe(t))for(const i of t.split(";")){const c=i.slice(0,i.indexOf(":")).trim();n[c]==null&&In(r,c,"")}else for(const i in t)n[i]==null&&In(r,i,"");for(const i in n)i==="display"&&(o=!0),In(r,i,n[i])}else if(s){if(t!==n){const i=r[zl];i&&(n+=";"+i),r.cssText=n,o=Gl.test(n)}}else t&&e.removeAttribute("style");io in e&&(e[io]=o?r.display:"",e[ql]&&(r.display="none"))}const ao=/\s*!important$/;function In(e,t,n){if(F(n))n.forEach(r=>In(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Yl(e,t);ao.test(n)?e.setProperty(Ft(r),n.replace(ao,""),"important"):e[r]=n}}const co=["Webkit","Moz","ms"],sr={};function Yl(e,t){const n=sr[t];if(n)return n;let r=Le(t);if(r!=="filter"&&r in e)return sr[t]=r;r=Bn(r);for(let s=0;s<co.length;s++){const o=co[s]+r;if(o in e)return sr[t]=o}return t}const lo="http://www.w3.org/1999/xlink";function Ql(e,t,n,r,s){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(lo,t.slice(6,t.length)):e.setAttributeNS(lo,t,n);else{const o=rc(t);n==null||o&&!Qo(n)?e.removeAttribute(t):e.setAttribute(t,o?"":n)}}function Xl(e,t,n,r,s,o,i){if(t==="innerHTML"||t==="textContent"){r&&i(r,s,o),e[t]=n??"";return}const c=e.tagName;if(t==="value"&&c!=="PROGRESS"&&!c.includes("-")){const f=c==="OPTION"?e.getAttribute("value")||"":e.value,l=n??"";(f!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let a=!1;if(n===""||n==null){const f=typeof e[t];f==="boolean"?n=Qo(n):n==null&&f==="string"?(n="",a=!0):f==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(t)}function Zl(e,t,n,r){e.addEventListener(t,n,r)}function eu(e,t,n,r){e.removeEventListener(t,n,r)}const uo=Symbol("_vei");function tu(e,t,n,r,s=null){const o=e[uo]||(e[uo]={}),i=o[t];if(r&&i)i.value=r;else{const[c,a]=nu(t);if(r){const f=o[t]=ou(r,s);Zl(e,c,f,a)}else i&&(eu(e,c,i,a),o[t]=void 0)}}const fo=/(?:Once|Passive|Capture)$/;function nu(e){let t;if(fo.test(e)){t={};let r;for(;r=e.match(fo);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Ft(e.slice(2)),t]}let or=0;const ru=Promise.resolve(),su=()=>or||(ru.then(()=>or=0),or=Date.now());function ou(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ce(iu(r,n.value),t,5,[r])};return n.value=e,n.attached=su(),n}function iu(e,t){if(F(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const ho=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,au=(e,t,n,r,s,o,i,c,a)=>{const f=s==="svg";t==="class"?Wl(e,r,f):t==="style"?Jl(e,n,r):Mn(t)?Wr(t)||tu(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):cu(e,t,r,f))?Xl(e,t,r,o,i,c,a):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Ql(e,t,r,f))};function cu(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&ho(t)&&j(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ho(t)&&oe(n)?!1:t in e}const lu=se({patchProp:au},Vl);let po;function uu(){return po||(po=vl(lu))}const fu=(...e)=>{const t=uu().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=hu(r);if(!s)return;const o=t._component;!j(o)&&!o.render&&!o.template&&(o.template=s.innerHTML),s.innerHTML="";const i=n(s,!1,du(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),i},t};function du(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function hu(e){return oe(e)?document.querySelector(e):e}const hs=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},pu={},gu={class:"app"};function mu(e,t){const n=is("RouterView");return ls(),us("div",gu,[he(n)])}const bu=hs(pu,[["render",mu]]);/*!
  * vue-router v4.3.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Ot=typeof document<"u";function _u(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const z=Object.assign;function ir(e,t){const n={};for(const r in t){const s=t[r];n[r]=Re(s)?s.map(e):e(s)}return n}const Xt=()=>{},Re=Array.isArray,Vi=/#/g,yu=/&/g,wu=/\//g,vu=/=/g,Eu=/\?/g,Ui=/\+/g,Su=/%5B/g,Iu=/%5D/g,Wi=/%5E/g,Au=/%60/g,qi=/%7B/g,Tu=/%7C/g,zi=/%7D/g,Cu=/%20/g;function ps(e){return encodeURI(""+e).replace(Tu,"|").replace(Su,"[").replace(Iu,"]")}function Ou(e){return ps(e).replace(qi,"{").replace(zi,"}").replace(Wi,"^")}function Pr(e){return ps(e).replace(Ui,"%2B").replace(Cu,"+").replace(Vi,"%23").replace(yu,"%26").replace(Au,"`").replace(qi,"{").replace(zi,"}").replace(Wi,"^")}function Ru(e){return Pr(e).replace(vu,"%3D")}function xu(e){return ps(e).replace(Vi,"%23").replace(Eu,"%3F")}function ku(e){return e==null?"":xu(e).replace(wu,"%2F")}function on(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const Du=/\/$/,Pu=e=>e.replace(Du,"");function ar(e,t,n="/"){let r,s={},o="",i="";const c=t.indexOf("#");let a=t.indexOf("?");return c<a&&c>=0&&(a=-1),a>-1&&(r=t.slice(0,a),o=t.slice(a+1,c>-1?c:t.length),s=e(o)),c>-1&&(r=r||t.slice(0,c),i=t.slice(c,t.length)),r=Lu(r??t,n),{fullPath:r+(o&&"?")+o+i,path:r,query:s,hash:on(i)}}function Mu(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function go(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Nu(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Lt(t.matched[r],n.matched[s])&&Gi(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Lt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Gi(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!$u(e[n],t[n]))return!1;return!0}function $u(e,t){return Re(e)?mo(e,t):Re(t)?mo(t,e):e===t}function mo(e,t){return Re(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Lu(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let o=n.length-1,i,c;for(i=0;i<r.length;i++)if(c=r[i],c!==".")if(c==="..")o>1&&o--;else break;return n.slice(0,o).join("/")+"/"+r.slice(i).join("/")}var an;(function(e){e.pop="pop",e.push="push"})(an||(an={}));var Zt;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Zt||(Zt={}));function Bu(e){if(!e)if(Ot){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Pu(e)}const Fu=/^[^#]+#/;function ju(e,t){return e.replace(Fu,"#")+t}function Hu(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Gn=()=>({left:window.scrollX,top:window.scrollY});function Ku(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=Hu(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function bo(e,t){return(history.state?history.state.position-t:-1)+e}const Mr=new Map;function Vu(e,t){Mr.set(e,t)}function Uu(e){const t=Mr.get(e);return Mr.delete(e),t}let Wu=()=>location.protocol+"//"+location.host;function Ji(e,t){const{pathname:n,search:r,hash:s}=t,o=e.indexOf("#");if(o>-1){let c=s.includes(e.slice(o))?e.slice(o).length:1,a=s.slice(c);return a[0]!=="/"&&(a="/"+a),go(a,"")}return go(n,e)+r+s}function qu(e,t,n,r){let s=[],o=[],i=null;const c=({state:p})=>{const y=Ji(e,location),O=n.value,P=t.value;let $=0;if(p){if(n.value=y,t.value=p,i&&i===O){i=null;return}$=P?p.position-P.position:0}else r(y);s.forEach(x=>{x(n.value,O,{delta:$,type:an.pop,direction:$?$>0?Zt.forward:Zt.back:Zt.unknown})})};function a(){i=n.value}function f(p){s.push(p);const y=()=>{const O=s.indexOf(p);O>-1&&s.splice(O,1)};return o.push(y),y}function l(){const{history:p}=window;p.state&&p.replaceState(z({},p.state,{scroll:Gn()}),"")}function h(){for(const p of o)p();o=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",l,{passive:!0}),{pauseListeners:a,listen:f,destroy:h}}function _o(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?Gn():null}}function zu(e){const{history:t,location:n}=window,r={value:Ji(e,n)},s={value:t.state};s.value||o(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function o(a,f,l){const h=e.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?e:e.slice(h))+a:Wu()+e+a;try{t[l?"replaceState":"pushState"](f,"",p),s.value=f}catch(y){console.error(y),n[l?"replace":"assign"](p)}}function i(a,f){const l=z({},t.state,_o(s.value.back,a,s.value.forward,!0),f,{position:s.value.position});o(a,l,!0),r.value=a}function c(a,f){const l=z({},s.value,t.state,{forward:a,scroll:Gn()});o(l.current,l,!0);const h=z({},_o(r.value,a,null),{position:l.position+1},f);o(a,h,!1),r.value=a}return{location:r,state:s,push:c,replace:i}}function Gu(e){e=Bu(e);const t=zu(e),n=qu(e,t.state,t.location,t.replace);function r(o,i=!0){i||n.pauseListeners(),history.go(o)}const s=z({location:"",base:e,go:r,createHref:ju.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function Ju(e){return typeof e=="string"||e&&typeof e=="object"}function Yi(e){return typeof e=="string"||typeof e=="symbol"}const Qe={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Qi=Symbol("");var yo;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(yo||(yo={}));function Bt(e,t){return z(new Error,{type:e,[Qi]:!0},t)}function Fe(e,t){return e instanceof Error&&Qi in e&&(t==null||!!(e.type&t))}const wo="[^/]+?",Yu={sensitive:!1,strict:!1,start:!0,end:!0},Qu=/[.+*?^${}()[\]/\\]/g;function Xu(e,t){const n=z({},Yu,t),r=[];let s=n.start?"^":"";const o=[];for(const f of e){const l=f.length?[]:[90];n.strict&&!f.length&&(s+="/");for(let h=0;h<f.length;h++){const p=f[h];let y=40+(n.sensitive?.25:0);if(p.type===0)h||(s+="/"),s+=p.value.replace(Qu,"\\$&"),y+=40;else if(p.type===1){const{value:O,repeatable:P,optional:$,regexp:x}=p;o.push({name:O,repeatable:P,optional:$});const M=x||wo;if(M!==wo){y+=10;try{new RegExp(`(${M})`)}catch(U){throw new Error(`Invalid custom RegExp for param "${O}" (${M}): `+U.message)}}let L=P?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;h||(L=$&&f.length<2?`(?:/${L})`:"/"+L),$&&(L+="?"),s+=L,y+=20,$&&(y+=-8),P&&(y+=-20),M===".*"&&(y+=-50)}l.push(y)}r.push(l)}if(n.strict&&n.end){const f=r.length-1;r[f][r[f].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const i=new RegExp(s,n.sensitive?"":"i");function c(f){const l=f.match(i),h={};if(!l)return null;for(let p=1;p<l.length;p++){const y=l[p]||"",O=o[p-1];h[O.name]=y&&O.repeatable?y.split("/"):y}return h}function a(f){let l="",h=!1;for(const p of e){(!h||!l.endsWith("/"))&&(l+="/"),h=!1;for(const y of p)if(y.type===0)l+=y.value;else if(y.type===1){const{value:O,repeatable:P,optional:$}=y,x=O in f?f[O]:"";if(Re(x)&&!P)throw new Error(`Provided param "${O}" is an array but it is not repeatable (* or + modifiers)`);const M=Re(x)?x.join("/"):x;if(!M)if($)p.length<2&&(l.endsWith("/")?l=l.slice(0,-1):h=!0);else throw new Error(`Missing required param "${O}"`);l+=M}}return l||"/"}return{re:i,score:r,keys:o,parse:c,stringify:a}}function Zu(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function ef(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const o=Zu(r[n],s[n]);if(o)return o;n++}if(Math.abs(s.length-r.length)===1){if(vo(r))return 1;if(vo(s))return-1}return s.length-r.length}function vo(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const tf={type:0,value:""},nf=/[a-zA-Z0-9_]/;function rf(e){if(!e)return[[]];if(e==="/")return[[tf]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(y){throw new Error(`ERR (${n})/"${f}": ${y}`)}let n=0,r=n;const s=[];let o;function i(){o&&s.push(o),o=[]}let c=0,a,f="",l="";function h(){f&&(n===0?o.push({type:0,value:f}):n===1||n===2||n===3?(o.length>1&&(a==="*"||a==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:f,regexp:l,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):t("Invalid state to consume buffer"),f="")}function p(){f+=a}for(;c<e.length;){if(a=e[c++],a==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:a==="/"?(f&&h(),i()):a===":"?(h(),n=1):p();break;case 4:p(),n=r;break;case 1:a==="("?n=2:nf.test(a)?p():(h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--);break;case 2:a===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--,l="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),h(),i(),s}function sf(e,t,n){const r=Xu(rf(e.path),n),s=z(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function of(e,t){const n=[],r=new Map;t=Io({strict:!1,end:!0,sensitive:!1},t);function s(l){return r.get(l)}function o(l,h,p){const y=!p,O=af(l);O.aliasOf=p&&p.record;const P=Io(t,l),$=[O];if("alias"in l){const L=typeof l.alias=="string"?[l.alias]:l.alias;for(const U of L)$.push(z({},O,{components:p?p.record.components:O.components,path:U,aliasOf:p?p.record:O}))}let x,M;for(const L of $){const{path:U}=L;if(h&&U[0]!=="/"){const te=h.record.path,B=te[te.length-1]==="/"?"":"/";L.path=h.record.path+(U&&B+U)}if(x=sf(L,h,P),p?p.alias.push(x):(M=M||x,M!==x&&M.alias.push(x),y&&l.name&&!So(x)&&i(l.name)),O.children){const te=O.children;for(let B=0;B<te.length;B++)o(te[B],x,p&&p.children[B])}p=p||x,(x.record.components&&Object.keys(x.record.components).length||x.record.name||x.record.redirect)&&a(x)}return M?()=>{i(M)}:Xt}function i(l){if(Yi(l)){const h=r.get(l);h&&(r.delete(l),n.splice(n.indexOf(h),1),h.children.forEach(i),h.alias.forEach(i))}else{const h=n.indexOf(l);h>-1&&(n.splice(h,1),l.record.name&&r.delete(l.record.name),l.children.forEach(i),l.alias.forEach(i))}}function c(){return n}function a(l){let h=0;for(;h<n.length&&ef(l,n[h])>=0&&(l.record.path!==n[h].record.path||!Xi(l,n[h]));)h++;n.splice(h,0,l),l.record.name&&!So(l)&&r.set(l.record.name,l)}function f(l,h){let p,y={},O,P;if("name"in l&&l.name){if(p=r.get(l.name),!p)throw Bt(1,{location:l});P=p.record.name,y=z(Eo(h.params,p.keys.filter(M=>!M.optional).concat(p.parent?p.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),l.params&&Eo(l.params,p.keys.map(M=>M.name))),O=p.stringify(y)}else if(l.path!=null)O=l.path,p=n.find(M=>M.re.test(O)),p&&(y=p.parse(O),P=p.record.name);else{if(p=h.name?r.get(h.name):n.find(M=>M.re.test(h.path)),!p)throw Bt(1,{location:l,currentLocation:h});P=p.record.name,y=z({},h.params,l.params),O=p.stringify(y)}const $=[];let x=p;for(;x;)$.unshift(x.record),x=x.parent;return{name:P,path:O,params:y,matched:$,meta:lf($)}}return e.forEach(l=>o(l)),{addRoute:o,resolve:f,removeRoute:i,getRoutes:c,getRecordMatcher:s}}function Eo(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function af(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:cf(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function cf(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function So(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function lf(e){return e.reduce((t,n)=>z(t,n.meta),{})}function Io(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Xi(e,t){return t.children.some(n=>n===e||Xi(e,n))}function uf(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const o=r[s].replace(Ui," "),i=o.indexOf("="),c=on(i<0?o:o.slice(0,i)),a=i<0?null:on(o.slice(i+1));if(c in t){let f=t[c];Re(f)||(f=t[c]=[f]),f.push(a)}else t[c]=a}return t}function Ao(e){let t="";for(let n in e){const r=e[n];if(n=Ru(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Re(r)?r.map(o=>o&&Pr(o)):[r&&Pr(r)]).forEach(o=>{o!==void 0&&(t+=(t.length?"&":"")+n,o!=null&&(t+="="+o))})}return t}function ff(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Re(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const df=Symbol(""),To=Symbol(""),gs=Symbol(""),Zi=Symbol(""),Nr=Symbol("");function Wt(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function tt(e,t,n,r,s,o=i=>i()){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,a)=>{const f=p=>{p===!1?a(Bt(4,{from:n,to:t})):p instanceof Error?a(p):Ju(p)?a(Bt(2,{from:t,to:p})):(i&&r.enterCallbacks[s]===i&&typeof p=="function"&&i.push(p),c())},l=o(()=>e.call(r&&r.instances[s],t,n,f));let h=Promise.resolve(l);e.length<3&&(h=h.then(f)),h.catch(p=>a(p))})}function cr(e,t,n,r,s=o=>o()){const o=[];for(const i of e)for(const c in i.components){let a=i.components[c];if(!(t!=="beforeRouteEnter"&&!i.instances[c]))if(hf(a)){const l=(a.__vccOpts||a)[t];l&&o.push(tt(l,n,r,i,c,s))}else{let f=a();o.push(()=>f.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${c}" at "${i.path}"`));const h=_u(l)?l.default:l;i.components[c]=h;const y=(h.__vccOpts||h)[t];return y&&tt(y,n,r,i,c,s)()}))}}return o}function hf(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Co(e){const t=Ve(gs),n=Ve(Zi),r=Ie(()=>t.resolve(Dt(e.to))),s=Ie(()=>{const{matched:a}=r.value,{length:f}=a,l=a[f-1],h=n.matched;if(!l||!h.length)return-1;const p=h.findIndex(Lt.bind(null,l));if(p>-1)return p;const y=Oo(a[f-2]);return f>1&&Oo(l)===y&&h[h.length-1].path!==y?h.findIndex(Lt.bind(null,a[f-2])):p}),o=Ie(()=>s.value>-1&&bf(n.params,r.value.params)),i=Ie(()=>s.value>-1&&s.value===n.matched.length-1&&Gi(n.params,r.value.params));function c(a={}){return mf(a)?t[Dt(e.replace)?"replace":"push"](Dt(e.to)).catch(Xt):Promise.resolve()}return{route:r,href:Ie(()=>r.value.href),isActive:o,isExactActive:i,navigate:c}}const pf=Ti({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Co,setup(e,{slots:t}){const n=jn(Co(e)),{options:r}=Ve(gs),s=Ie(()=>({[Ro(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ro(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=t.default&&t.default(n);return e.custom?o:Ki("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},o)}}}),gf=pf;function mf(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function bf(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Re(s)||s.length!==r.length||r.some((o,i)=>o!==s[i]))return!1}return!0}function Oo(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ro=(e,t,n)=>e??t??n,_f=Ti({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Ve(Nr),s=Ie(()=>e.route||r.value),o=Ve(To,0),i=Ie(()=>{let f=Dt(o);const{matched:l}=s.value;let h;for(;(h=l[f])&&!h.components;)f++;return f}),c=Ie(()=>s.value.matched[i.value]);En(To,Ie(()=>i.value+1)),En(df,c),En(Nr,s);const a=Cc();return wn(()=>[a.value,c.value,e.name],([f,l,h],[p,y,O])=>{l&&(l.instances[h]=f,y&&y!==l&&f&&f===p&&(l.leaveGuards.size||(l.leaveGuards=y.leaveGuards),l.updateGuards.size||(l.updateGuards=y.updateGuards))),f&&l&&(!y||!Lt(l,y)||!p)&&(l.enterCallbacks[h]||[]).forEach(P=>P(f))},{flush:"post"}),()=>{const f=s.value,l=e.name,h=c.value,p=h&&h.components[l];if(!p)return xo(n.default,{Component:p,route:f});const y=h.props[l],O=y?y===!0?f.params:typeof y=="function"?y(f):y:null,$=Ki(p,z({},O,t,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(h.instances[l]=null)},ref:a}));return xo(n.default,{Component:$,route:f})||$}}});function xo(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const yf=_f;function wf(e){const t=of(e.routes,e),n=e.parseQuery||uf,r=e.stringifyQuery||Ao,s=e.history,o=Wt(),i=Wt(),c=Wt(),a=Oc(Qe);let f=Qe;Ot&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=ir.bind(null,b=>""+b),h=ir.bind(null,ku),p=ir.bind(null,on);function y(b,T){let I,R;return Yi(b)?(I=t.getRecordMatcher(b),R=T):R=b,t.addRoute(R,I)}function O(b){const T=t.getRecordMatcher(b);T&&t.removeRoute(T)}function P(){return t.getRoutes().map(b=>b.record)}function $(b){return!!t.getRecordMatcher(b)}function x(b,T){if(T=z({},T||a.value),typeof b=="string"){const d=ar(n,b,T.path),g=t.resolve({path:d.path},T),_=s.createHref(d.fullPath);return z(d,g,{params:p(g.params),hash:on(d.hash),redirectedFrom:void 0,href:_})}let I;if(b.path!=null)I=z({},b,{path:ar(n,b.path,T.path).path});else{const d=z({},b.params);for(const g in d)d[g]==null&&delete d[g];I=z({},b,{params:h(d)}),T.params=h(T.params)}const R=t.resolve(I,T),q=b.hash||"";R.params=l(p(R.params));const Q=Mu(r,z({},b,{hash:Ou(q),path:R.path})),u=s.createHref(Q);return z({fullPath:Q,hash:q,query:r===Ao?ff(b.query):b.query||{}},R,{redirectedFrom:void 0,href:u})}function M(b){return typeof b=="string"?ar(n,b,a.value.path):z({},b)}function L(b,T){if(f!==b)return Bt(8,{from:T,to:b})}function U(b){return le(b)}function te(b){return U(z(M(b),{replace:!0}))}function B(b){const T=b.matched[b.matched.length-1];if(T&&T.redirect){const{redirect:I}=T;let R=typeof I=="function"?I(b):I;return typeof R=="string"&&(R=R.includes("?")||R.includes("#")?R=M(R):{path:R},R.params={}),z({query:b.query,hash:b.hash,params:R.path!=null?{}:b.params},R)}}function le(b,T){const I=f=x(b),R=a.value,q=b.state,Q=b.force,u=b.replace===!0,d=B(I);if(d)return le(z(M(d),{state:typeof d=="object"?z({},q,d.state):q,force:Q,replace:u}),T||I);const g=I;g.redirectedFrom=T;let _;return!Q&&Nu(r,R,I)&&(_=Bt(16,{to:g,from:R}),De(R,R,!0,!1)),(_?Promise.resolve(_):xe(g,R)).catch(m=>Fe(m)?Fe(m,2)?m:Je(m):W(m,g,R)).then(m=>{if(m){if(Fe(m,2))return le(z({replace:u},M(m.to),{state:typeof m.to=="object"?z({},q,m.to.state):q,force:Q}),T||g)}else m=lt(g,R,!0,u,q);return Ge(g,R,m),m})}function we(b,T){const I=L(b,T);return I?Promise.reject(I):Promise.resolve()}function ct(b){const T=Tt.values().next().value;return T&&typeof T.runWithContext=="function"?T.runWithContext(b):b()}function xe(b,T){let I;const[R,q,Q]=vf(b,T);I=cr(R.reverse(),"beforeRouteLeave",b,T);for(const d of R)d.leaveGuards.forEach(g=>{I.push(tt(g,b,T))});const u=we.bind(null,b,T);return I.push(u),ie(I).then(()=>{I=[];for(const d of o.list())I.push(tt(d,b,T));return I.push(u),ie(I)}).then(()=>{I=cr(q,"beforeRouteUpdate",b,T);for(const d of q)d.updateGuards.forEach(g=>{I.push(tt(g,b,T))});return I.push(u),ie(I)}).then(()=>{I=[];for(const d of Q)if(d.beforeEnter)if(Re(d.beforeEnter))for(const g of d.beforeEnter)I.push(tt(g,b,T));else I.push(tt(d.beforeEnter,b,T));return I.push(u),ie(I)}).then(()=>(b.matched.forEach(d=>d.enterCallbacks={}),I=cr(Q,"beforeRouteEnter",b,T,ct),I.push(u),ie(I))).then(()=>{I=[];for(const d of i.list())I.push(tt(d,b,T));return I.push(u),ie(I)}).catch(d=>Fe(d,8)?d:Promise.reject(d))}function Ge(b,T,I){c.list().forEach(R=>ct(()=>R(b,T,I)))}function lt(b,T,I,R,q){const Q=L(b,T);if(Q)return Q;const u=T===Qe,d=Ot?history.state:{};I&&(R||u?s.replace(b.fullPath,z({scroll:u&&d&&d.scroll},q)):s.push(b.fullPath,q)),a.value=b,De(b,T,I,u),Je()}let ke;function Kt(){ke||(ke=s.listen((b,T,I)=>{if(!dn.listening)return;const R=x(b),q=B(R);if(q){le(z(q,{replace:!0}),R).catch(Xt);return}f=R;const Q=a.value;Ot&&Vu(bo(Q.fullPath,I.delta),Gn()),xe(R,Q).catch(u=>Fe(u,12)?u:Fe(u,2)?(le(u.to,R).then(d=>{Fe(d,20)&&!I.delta&&I.type===an.pop&&s.go(-1,!1)}).catch(Xt),Promise.reject()):(I.delta&&s.go(-I.delta,!1),W(u,R,Q))).then(u=>{u=u||lt(R,Q,!1),u&&(I.delta&&!Fe(u,8)?s.go(-I.delta,!1):I.type===an.pop&&Fe(u,20)&&s.go(-1,!1)),Ge(R,Q,u)}).catch(Xt)}))}let It=Wt(),ne=Wt(),G;function W(b,T,I){Je(b);const R=ne.list();return R.length?R.forEach(q=>q(b,T,I)):console.error(b),Promise.reject(b)}function Be(){return G&&a.value!==Qe?Promise.resolve():new Promise((b,T)=>{It.add([b,T])})}function Je(b){return G||(G=!b,Kt(),It.list().forEach(([T,I])=>b?I(b):T()),It.reset()),b}function De(b,T,I,R){const{scrollBehavior:q}=e;if(!Ot||!q)return Promise.resolve();const Q=!I&&Uu(bo(b.fullPath,0))||(R||!I)&&history.state&&history.state.scroll||null;return _i().then(()=>q(b,T,Q)).then(u=>u&&Ku(u)).catch(u=>W(u,b,T))}const fe=b=>s.go(b);let At;const Tt=new Set,dn={currentRoute:a,listening:!0,addRoute:y,removeRoute:O,hasRoute:$,getRoutes:P,resolve:x,options:e,push:U,replace:te,go:fe,back:()=>fe(-1),forward:()=>fe(1),beforeEach:o.add,beforeResolve:i.add,afterEach:c.add,onError:ne.add,isReady:Be,install(b){const T=this;b.component("RouterLink",gf),b.component("RouterView",yf),b.config.globalProperties.$router=T,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>Dt(a)}),Ot&&!At&&a.value===Qe&&(At=!0,U(s.location).catch(q=>{}));const I={};for(const q in Qe)Object.defineProperty(I,q,{get:()=>a.value[q],enumerable:!0});b.provide(gs,T),b.provide(Zi,li(I)),b.provide(Nr,a);const R=b.unmount;Tt.add(b),b.unmount=function(){Tt.delete(b),Tt.size<1&&(f=Qe,ke&&ke(),ke=null,a.value=Qe,At=!1,G=!1),R()}}};function ie(b){return b.reduce((T,I)=>T.then(()=>ct(I)),Promise.resolve())}return dn}function vf(e,t){const n=[],r=[],s=[],o=Math.max(t.matched.length,e.matched.length);for(let i=0;i<o;i++){const c=t.matched[i];c&&(e.matched.find(f=>Lt(f,c))?r.push(c):n.push(c));const a=e.matched[i];a&&(t.matched.find(f=>Lt(f,a))||s.push(a))}return[n,r,s]}const Ef={},Jn=e=>(Lc("data-v-0b076877"),e=e(),Bc(),e),Sf=Jn(()=>pe("div",{class:"card"},[pe("p",null,[We(" Edit "),pe("code",null,"components/HelloWorld.vue"),We(" to test HMR ")])],-1)),If=Jn(()=>pe("p",null,[We(" Check out "),pe("a",{href:"https://vuejs.org/guide/quick-start.html#local",target:"_blank"},"create-vue"),We(", the official Vue + Vite starter ")],-1)),Af=Jn(()=>pe("p",null,[We(" Install "),pe("a",{href:"https://github.com/johnsoncodehk/volar",target:"_blank"},"Volar"),We(" in your IDE for a better DX ")],-1)),Tf=Jn(()=>pe("p",{class:"read-the-docs"},"Click on the Vite and Vue logos to learn more",-1)),Cf={style:{"margin-bottom":"20px"}};function Of(e,t){const n=is("router-link");return ls(),us(Se,null,[Sf,If,Af,Tf,pe("div",Cf,[he(n,{to:"/"},{default:os(()=>[We("Go to Home")]),_:1})])],64)}const Rf=hs(Ef,[["render",Of],["__scopeId","data-v-0b076877"]]),xf={},kf=pe("h1",{style:{"margin-bottom":"20px"}},"Notification",-1),Df=pe("div",{style:{"margin-bottom":"20px"}},"ПРИВЕТ!!!!",-1);function Pf(e,t){const n=is("router-link");return ls(),us(Se,null,[kf,Df,pe("div",null,[he(n,{to:"/about"},{default:os(()=>[We("Go to About")]),_:1})])],64)}const Mf=hs(xf,[["render",Pf]]),Nf=[{path:"/",component:Mf},{path:"/about",component:Rf}],$f=wf({history:Gu(),routes:Nf});/**
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
 */const ea=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},Lf=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=e[n++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=e[n++],i=e[n++],c=e[n++],a=((s&7)<<18|(o&63)<<12|(i&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(a>>10)),t[r++]=String.fromCharCode(56320+(a&1023))}else{const o=e[n++],i=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|i&63)}}return t.join("")},ta={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const o=e[s],i=s+1<e.length,c=i?e[s+1]:0,a=s+2<e.length,f=a?e[s+2]:0,l=o>>2,h=(o&3)<<4|c>>4;let p=(c&15)<<2|f>>6,y=f&63;a||(y=64,i||(p=64)),r.push(n[l],n[h],n[p],n[y])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ea(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Lf(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const o=n[e.charAt(s++)],c=s<e.length?n[e.charAt(s)]:0;++s;const f=s<e.length?n[e.charAt(s)]:64;++s;const h=s<e.length?n[e.charAt(s)]:64;if(++s,o==null||c==null||f==null||h==null)throw new Bf;const p=o<<2|c>>4;if(r.push(p),f!==64){const y=c<<4&240|f>>2;if(r.push(y),h!==64){const O=f<<6&192|h;r.push(O)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Bf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ff=function(e){const t=ea(e);return ta.encodeByteArray(t,!0)},na=function(e){return Ff(e).replace(/\./g,"")},jf=function(e){try{return ta.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Hf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Kf=()=>Hf().__FIREBASE_DEFAULTS__,Vf=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Uf=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&jf(e[1]);return t&&JSON.parse(t)},Wf=()=>{try{return Kf()||Vf()||Uf()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},ra=()=>{var e;return(e=Wf())===null||e===void 0?void 0:e.config};/**
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
 */class qf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}function sa(){try{return typeof indexedDB=="object"}catch{return!1}}function oa(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}/**
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
 */const zf="FirebaseError";class jt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=zf,Object.setPrototypeOf(this,jt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fn.prototype.create)}}class fn{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,o=this.errors[t],i=o?Gf(o,r):"Error",c=`${this.serviceName}: ${i} (${s}).`;return new jt(s,c,r)}}function Gf(e,t){return e.replace(Jf,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Jf=/\{\$([^}]+)}/g;function $r(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const o=e[s],i=t[s];if(ko(o)&&ko(i)){if(!$r(o,i))return!1}else if(o!==i)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ko(e){return e!==null&&typeof e=="object"}/**
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
 */function ia(e){return e&&e._delegate?e._delegate:e}class qe{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */class Yf{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new qf;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Xf(t))try{this.getOrInitializeService({instanceIdentifier:dt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=dt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=dt){return this.instances.has(t)}getOptions(t=dt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,i]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);r===c&&i.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const i=this.instances.get(s);return i&&t(i,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Qf(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=dt){return this.component?this.component.multipleInstances?t:dt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Qf(e){return e===dt?void 0:e}function Xf(e){return e.instantiationMode==="EAGER"}/**
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
 */class Zf{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Yf(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Y;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(Y||(Y={}));const ed={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},td=Y.INFO,nd={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},rd=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=nd[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class sd{constructor(t){this.name=t,this._logLevel=td,this._logHandler=rd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Y))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?ed[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...t),this._logHandler(this,Y.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...t),this._logHandler(this,Y.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...t),this._logHandler(this,Y.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...t),this._logHandler(this,Y.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...t),this._logHandler(this,Y.ERROR,...t)}}const od=(e,t)=>t.some(n=>e instanceof n);let Do,Po;function id(){return Do||(Do=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ad(){return Po||(Po=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const aa=new WeakMap,Lr=new WeakMap,ca=new WeakMap,lr=new WeakMap,ms=new WeakMap;function cd(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",o),e.removeEventListener("error",i)},o=()=>{n(Ue(e.result)),s()},i=()=>{r(e.error),s()};e.addEventListener("success",o),e.addEventListener("error",i)});return t.then(n=>{n instanceof IDBCursor&&aa.set(n,e)}).catch(()=>{}),ms.set(t,e),t}function ld(e){if(Lr.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",i),e.removeEventListener("abort",i)},o=()=>{n(),s()},i=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",o),e.addEventListener("error",i),e.addEventListener("abort",i)});Lr.set(e,t)}let Br={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Lr.get(e);if(t==="objectStoreNames")return e.objectStoreNames||ca.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ue(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function ud(e){Br=e(Br)}function fd(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(ur(this),t,...n);return ca.set(r,t.sort?t.sort():[t]),Ue(r)}:ad().includes(e)?function(...t){return e.apply(ur(this),t),Ue(aa.get(this))}:function(...t){return Ue(e.apply(ur(this),t))}}function dd(e){return typeof e=="function"?fd(e):(e instanceof IDBTransaction&&ld(e),od(e,id())?new Proxy(e,Br):e)}function Ue(e){if(e instanceof IDBRequest)return cd(e);if(lr.has(e))return lr.get(e);const t=dd(e);return t!==e&&(lr.set(e,t),ms.set(t,e)),t}const ur=e=>ms.get(e);function Ht(e,t,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){const i=indexedDB.open(e,t),c=Ue(i);return r&&i.addEventListener("upgradeneeded",a=>{r(Ue(i.result),a.oldVersion,a.newVersion,Ue(i.transaction),a)}),n&&i.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),c.then(a=>{o&&a.addEventListener("close",()=>o()),s&&a.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),c}function Mt(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",r=>t(r.oldVersion,r)),Ue(n).then(()=>{})}const hd=["get","getKey","getAll","getAllKeys","count"],pd=["put","add","delete","clear"],fr=new Map;function Mo(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(fr.get(t))return fr.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=pd.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||hd.includes(n)))return;const o=async function(i,...c){const a=this.transaction(i,s?"readwrite":"readonly");let f=a.store;return r&&(f=f.index(c.shift())),(await Promise.all([f[n](...c),s&&a.done]))[0]};return fr.set(t,o),o}ud(e=>({...e,get:(t,n,r)=>Mo(t,n)||e.get(t,n,r),has:(t,n)=>!!Mo(t,n)||e.has(t,n)}));/**
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
 */class gd{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(md(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function md(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Fr="@firebase/app",No="0.9.28";/**
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
 */const bt=new sd("@firebase/app"),bd="@firebase/app-compat",_d="@firebase/analytics-compat",yd="@firebase/analytics",wd="@firebase/app-check-compat",vd="@firebase/app-check",Ed="@firebase/auth",Sd="@firebase/auth-compat",Id="@firebase/database",Ad="@firebase/database-compat",Td="@firebase/functions",Cd="@firebase/functions-compat",Od="@firebase/installations",Rd="@firebase/installations-compat",xd="@firebase/messaging",kd="@firebase/messaging-compat",Dd="@firebase/performance",Pd="@firebase/performance-compat",Md="@firebase/remote-config",Nd="@firebase/remote-config-compat",$d="@firebase/storage",Ld="@firebase/storage-compat",Bd="@firebase/firestore",Fd="@firebase/firestore-compat",jd="firebase";/**
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
 */const jr="[DEFAULT]",Hd={[Fr]:"fire-core",[bd]:"fire-core-compat",[yd]:"fire-analytics",[_d]:"fire-analytics-compat",[vd]:"fire-app-check",[wd]:"fire-app-check-compat",[Ed]:"fire-auth",[Sd]:"fire-auth-compat",[Id]:"fire-rtdb",[Ad]:"fire-rtdb-compat",[Td]:"fire-fn",[Cd]:"fire-fn-compat",[Od]:"fire-iid",[Rd]:"fire-iid-compat",[xd]:"fire-fcm",[kd]:"fire-fcm-compat",[Dd]:"fire-perf",[Pd]:"fire-perf-compat",[Md]:"fire-rc",[Nd]:"fire-rc-compat",[$d]:"fire-gcs",[Ld]:"fire-gcs-compat",[Bd]:"fire-fst",[Fd]:"fire-fst-compat","fire-js":"fire-js",[jd]:"fire-js-all"};/**
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
 */const xn=new Map,Hr=new Map;function Kd(e,t){try{e.container.addComponent(t)}catch(n){bt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function at(e){const t=e.name;if(Hr.has(t))return bt.debug(`There were multiple attempts to register component ${t}.`),!1;Hr.set(t,e);for(const n of xn.values())Kd(n,e);return!0}function bs(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const Vd={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},st=new fn("app","Firebase",Vd);/**
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
 */class Ud{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new qe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw st.create("app-deleted",{appName:this._name})}}function la(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:jr,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw st.create("bad-app-name",{appName:String(s)});if(n||(n=ra()),!n)throw st.create("no-options");const o=xn.get(s);if(o){if($r(n,o.options)&&$r(r,o.config))return o;throw st.create("duplicate-app",{appName:s})}const i=new Zf(s);for(const a of Hr.values())i.addComponent(a);const c=new Ud(n,r,i);return xn.set(s,c),c}function Wd(e=jr){const t=xn.get(e);if(!t&&e===jr&&ra())return la();if(!t)throw st.create("no-app",{appName:e});return t}function ot(e,t,n){var r;let s=(r=Hd[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),i=t.match(/\s|\//);if(o||i){const c=[`Unable to register library "${s}" with version "${t}":`];o&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&i&&c.push("and"),i&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),bt.warn(c.join(" "));return}at(new qe(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const qd="firebase-heartbeat-database",zd=1,cn="firebase-heartbeat-store";let dr=null;function ua(){return dr||(dr=Ht(qd,zd,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(cn)}catch(n){console.warn(n)}}}}).catch(e=>{throw st.create("idb-open",{originalErrorMessage:e.message})})),dr}async function Gd(e){try{const n=(await ua()).transaction(cn),r=await n.objectStore(cn).get(fa(e));return await n.done,r}catch(t){if(t instanceof jt)bt.warn(t.message);else{const n=st.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});bt.warn(n.message)}}}async function $o(e,t){try{const r=(await ua()).transaction(cn,"readwrite");await r.objectStore(cn).put(t,fa(e)),await r.done}catch(n){if(n instanceof jt)bt.warn(n.message);else{const r=st.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});bt.warn(r.message)}}}function fa(e){return`${e.name}!${e.options.appId}`}/**
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
 */const Jd=1024,Yd=30*24*60*60*1e3;class Qd{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Zd(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Lo();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(i=>i.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const c=new Date(i.date).valueOf();return Date.now()-c<=Yd}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Lo(),{heartbeatsToSend:r,unsentEntries:s}=Xd(this._heartbeatsCache.heartbeats),o=na(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function Lo(){return new Date().toISOString().substring(0,10)}function Xd(e,t=Jd){const n=[];let r=e.slice();for(const s of e){const o=n.find(i=>i.agent===s.agent);if(o){if(o.dates.push(s.date),Bo(n)>t){o.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Bo(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Zd{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sa()?oa().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Gd(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return $o(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return $o(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Bo(e){return na(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function eh(e){at(new qe("platform-logger",t=>new gd(t),"PRIVATE")),at(new qe("heartbeat",t=>new Qd(t),"PRIVATE")),ot(Fr,No,e),ot(Fr,No,"esm2017"),ot("fire-js","")}eh("");var th="firebase",nh="10.8.1";/**
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
 */ot(th,nh,"app");const da="@firebase/installations",_s="0.6.5";/**
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
 */const ha=1e4,pa=`w:${_s}`,ga="FIS_v2",rh="https://firebaseinstallations.googleapis.com/v1",sh=60*60*1e3,oh="installations",ih="Installations";/**
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
 */const ah={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},_t=new fn(oh,ih,ah);function ma(e){return e instanceof jt&&e.code.includes("request-failed")}/**
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
 */function ba({projectId:e}){return`${rh}/projects/${e}/installations`}function _a(e){return{token:e.token,requestStatus:2,expiresIn:lh(e.expiresIn),creationTime:Date.now()}}async function ya(e,t){const r=(await t.json()).error;return _t.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function wa({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function ch(e,{refreshToken:t}){const n=wa(e);return n.append("Authorization",uh(t)),n}async function va(e){const t=await e();return t.status>=500&&t.status<600?e():t}function lh(e){return Number(e.replace("s","000"))}function uh(e){return`${ga} ${e}`}/**
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
 */async function fh({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=ba(e),s=wa(e),o=t.getImmediate({optional:!0});if(o){const f=await o.getHeartbeatsHeader();f&&s.append("x-firebase-client",f)}const i={fid:n,authVersion:ga,appId:e.appId,sdkVersion:pa},c={method:"POST",headers:s,body:JSON.stringify(i)},a=await va(()=>fetch(r,c));if(a.ok){const f=await a.json();return{fid:f.fid||n,registrationStatus:2,refreshToken:f.refreshToken,authToken:_a(f.authToken)}}else throw await ya("Create Installation",a)}/**
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
 */function Ea(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function dh(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const hh=/^[cdef][\w-]{21}$/,Kr="";function ph(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=gh(e);return hh.test(n)?n:Kr}catch{return Kr}}function gh(e){return dh(e).substr(0,22)}/**
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
 */function Yn(e){return`${e.appName}!${e.appId}`}/**
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
 */const Sa=new Map;function Ia(e,t){const n=Yn(e);Aa(n,t),mh(n,t)}function Aa(e,t){const n=Sa.get(e);if(n)for(const r of n)r(t)}function mh(e,t){const n=bh();n&&n.postMessage({key:e,fid:t}),_h()}let pt=null;function bh(){return!pt&&"BroadcastChannel"in self&&(pt=new BroadcastChannel("[Firebase] FID Change"),pt.onmessage=e=>{Aa(e.data.key,e.data.fid)}),pt}function _h(){Sa.size===0&&pt&&(pt.close(),pt=null)}/**
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
 */const yh="firebase-installations-database",wh=1,yt="firebase-installations-store";let hr=null;function ys(){return hr||(hr=Ht(yh,wh,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(yt)}}})),hr}async function kn(e,t){const n=Yn(e),s=(await ys()).transaction(yt,"readwrite"),o=s.objectStore(yt),i=await o.get(n);return await o.put(t,n),await s.done,(!i||i.fid!==t.fid)&&Ia(e,t.fid),t}async function Ta(e){const t=Yn(e),r=(await ys()).transaction(yt,"readwrite");await r.objectStore(yt).delete(t),await r.done}async function Qn(e,t){const n=Yn(e),s=(await ys()).transaction(yt,"readwrite"),o=s.objectStore(yt),i=await o.get(n),c=t(i);return c===void 0?await o.delete(n):await o.put(c,n),await s.done,c&&(!i||i.fid!==c.fid)&&Ia(e,c.fid),c}/**
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
 */async function ws(e){let t;const n=await Qn(e.appConfig,r=>{const s=vh(r),o=Eh(e,s);return t=o.registrationPromise,o.installationEntry});return n.fid===Kr?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function vh(e){const t=e||{fid:ph(),registrationStatus:0};return Ca(t)}function Eh(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(_t.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=Sh(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Ih(e)}:{installationEntry:t}}async function Sh(e,t){try{const n=await fh(e,t);return kn(e.appConfig,n)}catch(n){throw ma(n)&&n.customData.serverCode===409?await Ta(e.appConfig):await kn(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Ih(e){let t=await Fo(e.appConfig);for(;t.registrationStatus===1;)await Ea(100),t=await Fo(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await ws(e);return r||n}return t}function Fo(e){return Qn(e,t=>{if(!t)throw _t.create("installation-not-found");return Ca(t)})}function Ca(e){return Ah(e)?{fid:e.fid,registrationStatus:0}:e}function Ah(e){return e.registrationStatus===1&&e.registrationTime+ha<Date.now()}/**
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
 */async function Th({appConfig:e,heartbeatServiceProvider:t},n){const r=Ch(e,n),s=ch(e,n),o=t.getImmediate({optional:!0});if(o){const f=await o.getHeartbeatsHeader();f&&s.append("x-firebase-client",f)}const i={installation:{sdkVersion:pa,appId:e.appId}},c={method:"POST",headers:s,body:JSON.stringify(i)},a=await va(()=>fetch(r,c));if(a.ok){const f=await a.json();return _a(f)}else throw await ya("Generate Auth Token",a)}function Ch(e,{fid:t}){return`${ba(e)}/${t}/authTokens:generate`}/**
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
 */async function vs(e,t=!1){let n;const r=await Qn(e.appConfig,o=>{if(!Oa(o))throw _t.create("not-registered");const i=o.authToken;if(!t&&xh(i))return o;if(i.requestStatus===1)return n=Oh(e,t),o;{if(!navigator.onLine)throw _t.create("app-offline");const c=Dh(o);return n=Rh(e,c),c}});return n?await n:r.authToken}async function Oh(e,t){let n=await jo(e.appConfig);for(;n.authToken.requestStatus===1;)await Ea(100),n=await jo(e.appConfig);const r=n.authToken;return r.requestStatus===0?vs(e,t):r}function jo(e){return Qn(e,t=>{if(!Oa(t))throw _t.create("not-registered");const n=t.authToken;return Ph(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Rh(e,t){try{const n=await Th(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await kn(e.appConfig,r),n}catch(n){if(ma(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Ta(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await kn(e.appConfig,r)}throw n}}function Oa(e){return e!==void 0&&e.registrationStatus===2}function xh(e){return e.requestStatus===2&&!kh(e)}function kh(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+sh}function Dh(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Ph(e){return e.requestStatus===1&&e.requestTime+ha<Date.now()}/**
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
 */async function Mh(e){const t=e,{installationEntry:n,registrationPromise:r}=await ws(t);return r?r.catch(console.error):vs(t).catch(console.error),n.fid}/**
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
 */async function Nh(e,t=!1){const n=e;return await $h(n),(await vs(n,t)).token}async function $h(e){const{registrationPromise:t}=await ws(e);t&&await t}/**
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
 */function Lh(e){if(!e||!e.options)throw pr("App Configuration");if(!e.name)throw pr("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw pr(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function pr(e){return _t.create("missing-app-config-values",{valueName:e})}/**
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
 */const Ra="installations",Bh="installations-internal",Fh=e=>{const t=e.getProvider("app").getImmediate(),n=Lh(t),r=bs(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},jh=e=>{const t=e.getProvider("app").getImmediate(),n=bs(t,Ra).getImmediate();return{getId:()=>Mh(n),getToken:s=>Nh(n,s)}};function Hh(){at(new qe(Ra,Fh,"PUBLIC")),at(new qe(Bh,jh,"PRIVATE"))}Hh();ot(da,_s);ot(da,_s,"esm2017");/**
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
 */const xa="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Kh="https://fcmregistrations.googleapis.com/v1",ka="FCM_MSG",Vh="google.c.a.c_id",Uh=3,Wh=1;var Dn;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Dn||(Dn={}));/**
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
 */var Pn;(function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"})(Pn||(Pn={}));/**
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
 */function je(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function qh(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),s=new Uint8Array(r.length);for(let o=0;o<r.length;++o)s[o]=r.charCodeAt(o);return s}/**
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
 */const gr="fcm_token_details_db",zh=5,Ho="fcm_token_object_Store";async function Gh(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(o=>o.name).includes(gr))return null;let t=null;return(await Ht(gr,zh,{upgrade:async(r,s,o,i)=>{var c;if(s<2||!r.objectStoreNames.contains(Ho))return;const a=i.objectStore(Ho),f=await a.index("fcmSenderId").get(e);if(await a.clear(),!!f){if(s===2){const l=f;if(!l.auth||!l.p256dh||!l.endpoint)return;t={token:l.fcmToken,createTime:(c=l.createTime)!==null&&c!==void 0?c:Date.now(),subscriptionOptions:{auth:l.auth,p256dh:l.p256dh,endpoint:l.endpoint,swScope:l.swScope,vapidKey:typeof l.vapidKey=="string"?l.vapidKey:je(l.vapidKey)}}}else if(s===3){const l=f;t={token:l.fcmToken,createTime:l.createTime,subscriptionOptions:{auth:je(l.auth),p256dh:je(l.p256dh),endpoint:l.endpoint,swScope:l.swScope,vapidKey:je(l.vapidKey)}}}else if(s===4){const l=f;t={token:l.fcmToken,createTime:l.createTime,subscriptionOptions:{auth:je(l.auth),p256dh:je(l.p256dh),endpoint:l.endpoint,swScope:l.swScope,vapidKey:je(l.vapidKey)}}}}}})).close(),await Mt(gr),await Mt("fcm_vapid_details_db"),await Mt("undefined"),Jh(t)?t:null}function Jh(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
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
 */const Yh="firebase-messaging-database",Qh=1,wt="firebase-messaging-store";let mr=null;function Es(){return mr||(mr=Ht(Yh,Qh,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(wt)}}})),mr}async function Ss(e){const t=As(e),r=await(await Es()).transaction(wt).objectStore(wt).get(t);if(r)return r;{const s=await Gh(e.appConfig.senderId);if(s)return await Is(e,s),s}}async function Is(e,t){const n=As(e),s=(await Es()).transaction(wt,"readwrite");return await s.objectStore(wt).put(t,n),await s.done,t}async function Xh(e){const t=As(e),r=(await Es()).transaction(wt,"readwrite");await r.objectStore(wt).delete(t),await r.done}function As({appConfig:e}){return e.appId}/**
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
 */const Zh={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Oe=new fn("messaging","Messaging",Zh);/**
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
 */async function ep(e,t){const n=await Cs(e),r=Pa(t),s={method:"POST",headers:n,body:JSON.stringify(r)};let o;try{o=await(await fetch(Ts(e.appConfig),s)).json()}catch(i){throw Oe.create("token-subscribe-failed",{errorInfo:i==null?void 0:i.toString()})}if(o.error){const i=o.error.message;throw Oe.create("token-subscribe-failed",{errorInfo:i})}if(!o.token)throw Oe.create("token-subscribe-no-token");return o.token}async function tp(e,t){const n=await Cs(e),r=Pa(t.subscriptionOptions),s={method:"PATCH",headers:n,body:JSON.stringify(r)};let o;try{o=await(await fetch(`${Ts(e.appConfig)}/${t.token}`,s)).json()}catch(i){throw Oe.create("token-update-failed",{errorInfo:i==null?void 0:i.toString()})}if(o.error){const i=o.error.message;throw Oe.create("token-update-failed",{errorInfo:i})}if(!o.token)throw Oe.create("token-update-no-token");return o.token}async function Da(e,t){const r={method:"DELETE",headers:await Cs(e)};try{const o=await(await fetch(`${Ts(e.appConfig)}/${t}`,r)).json();if(o.error){const i=o.error.message;throw Oe.create("token-unsubscribe-failed",{errorInfo:i})}}catch(s){throw Oe.create("token-unsubscribe-failed",{errorInfo:s==null?void 0:s.toString()})}}function Ts({projectId:e}){return`${Kh}/projects/${e}/registrations`}async function Cs({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function Pa({p256dh:e,auth:t,endpoint:n,vapidKey:r}){const s={web:{endpoint:n,auth:t,p256dh:e}};return r!==xa&&(s.web.applicationPubKey=r),s}/**
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
 */const np=7*24*60*60*1e3;async function rp(e){const t=await op(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:je(t.getKey("auth")),p256dh:je(t.getKey("p256dh"))},r=await Ss(e.firebaseDependencies);if(r){if(ip(r.subscriptionOptions,n))return Date.now()>=r.createTime+np?sp(e,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await Da(e.firebaseDependencies,r.token)}catch(s){console.warn(s)}return Ko(e.firebaseDependencies,n)}else return Ko(e.firebaseDependencies,n)}async function Vr(e){const t=await Ss(e.firebaseDependencies);t&&(await Da(e.firebaseDependencies,t.token),await Xh(e.firebaseDependencies));const n=await e.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function sp(e,t){try{const n=await tp(e.firebaseDependencies,t),r=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await Is(e.firebaseDependencies,r),n}catch(n){throw await Vr(e),n}}async function Ko(e,t){const r={token:await ep(e,t),createTime:Date.now(),subscriptionOptions:t};return await Is(e,r),r.token}async function op(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:qh(t)})}function ip(e,t){const n=t.vapidKey===e.vapidKey,r=t.endpoint===e.endpoint,s=t.auth===e.auth,o=t.p256dh===e.p256dh;return n&&r&&s&&o}/**
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
 */function ap(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return cp(t,e),lp(t,e),up(t,e),t}function cp(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const r=t.notification.body;r&&(e.notification.body=r);const s=t.notification.image;s&&(e.notification.image=s);const o=t.notification.icon;o&&(e.notification.icon=o)}function lp(e,t){t.data&&(e.data=t.data)}function up(e,t){var n,r,s,o,i;if(!t.fcmOptions&&!(!((n=t.notification)===null||n===void 0)&&n.click_action))return;e.fcmOptions={};const c=(s=(r=t.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&s!==void 0?s:(o=t.notification)===null||o===void 0?void 0:o.click_action;c&&(e.fcmOptions.link=c);const a=(i=t.fcmOptions)===null||i===void 0?void 0:i.analytics_label;a&&(e.fcmOptions.analyticsLabel=a)}/**
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
 */function fp(e){return typeof e=="object"&&!!e&&Vh in e}/**
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
 */function dp(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */Ma("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");Ma("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");async function hp(e,t){const n=pp(t,await e.firebaseDependencies.installations.getId());gp(e,n,t.productId)}function pp(e,t){var n,r;const s={};return e.from&&(s.project_number=e.from),e.fcmMessageId&&(s.message_id=e.fcmMessageId),s.instance_id=t,e.notification?s.message_type=Dn.DISPLAY_NOTIFICATION.toString():s.message_type=Dn.DATA_MESSAGE.toString(),s.sdk_platform=Uh.toString(),s.package_name=self.origin.replace(/(^\w+:|^)\/\//,""),e.collapse_key&&(s.collapse_key=e.collapse_key),s.event=Wh.toString(),!((n=e.fcmOptions)===null||n===void 0)&&n.analytics_label&&(s.analytics_label=(r=e.fcmOptions)===null||r===void 0?void 0:r.analytics_label),s}function gp(e,t,n){const r={};r.event_time_ms=Math.floor(Date.now()).toString(),r.source_extension_json_proto3=JSON.stringify(t),n&&(r.compliance_data=mp(n)),e.logEvents.push(r)}function mp(e){return{privacy_context:{prequest:{origin_associated_product_id:e}}}}function Ma(e,t){const n=[];for(let r=0;r<e.length;r++)n.push(e.charAt(r)),r<t.length&&n.push(t.charAt(r));return n.join("")}/**
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
 */async function bp(e,t){var n,r;const{newSubscription:s}=e;if(!s){await Vr(t);return}const o=await Ss(t.firebaseDependencies);await Vr(t),t.vapidKey=(r=(n=o==null?void 0:o.subscriptionOptions)===null||n===void 0?void 0:n.vapidKey)!==null&&r!==void 0?r:xa,await rp(t)}async function _p(e,t){const n=vp(e);if(!n)return;t.deliveryMetricsExportedToBigQueryEnabled&&await hp(t,n);const r=await Na();if(Sp(r))return Ip(r,n);if(n.notification&&await Ap(wp(n)),!!t&&t.onBackgroundMessageHandler){const s=ap(n);typeof t.onBackgroundMessageHandler=="function"?await t.onBackgroundMessageHandler(s):t.onBackgroundMessageHandler.next(s)}}async function yp(e){var t,n;const r=(n=(t=e.notification)===null||t===void 0?void 0:t.data)===null||n===void 0?void 0:n[ka];if(r){if(e.action)return}else return;e.stopImmediatePropagation(),e.notification.close();const s=Tp(r);if(!s)return;const o=new URL(s,self.location.href),i=new URL(self.location.origin);if(o.host!==i.host)return;let c=await Ep(o);if(c?c=await c.focus():(c=await self.clients.openWindow(s),await dp(3e3)),!!c)return r.messageType=Pn.NOTIFICATION_CLICKED,r.isFirebaseMessaging=!0,c.postMessage(r)}function wp(e){const t=Object.assign({},e.notification);return t.data={[ka]:e},t}function vp({data:e}){if(!e)return null;try{return e.json()}catch{return null}}async function Ep(e){const t=await Na();for(const n of t){const r=new URL(n.url,self.location.href);if(e.host===r.host)return n}return null}function Sp(e){return e.some(t=>t.visibilityState==="visible"&&!t.url.startsWith("chrome-extension://"))}function Ip(e,t){t.isFirebaseMessaging=!0,t.messageType=Pn.PUSH_RECEIVED;for(const n of e)n.postMessage(t)}function Na(){return self.clients.matchAll({type:"window",includeUncontrolled:!0})}function Ap(e){var t;const{actions:n}=e,{maxActions:r}=Notification;return n&&r&&n.length>r&&console.warn(`This browser only supports ${r} actions. The remaining actions will not be displayed.`),self.registration.showNotification((t=e.title)!==null&&t!==void 0?t:"",e)}function Tp(e){var t,n,r;const s=(n=(t=e.fcmOptions)===null||t===void 0?void 0:t.link)!==null&&n!==void 0?n:(r=e.notification)===null||r===void 0?void 0:r.click_action;return s||(fp(e.data)?self.location.origin:null)}/**
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
 */function Cp(e){if(!e||!e.options)throw br("App Configuration Object");if(!e.name)throw br("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const r of t)if(!n[r])throw br(r);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function br(e){return Oe.create("missing-app-config-values",{valueName:e})}/**
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
 */let Op=class{constructor(t,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const s=Cp(t);this.firebaseDependencies={app:t,appConfig:s,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}};/**
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
 */const Rp=e=>{const t=new Op(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return self.addEventListener("push",n=>{n.waitUntil(_p(n,t))}),self.addEventListener("pushsubscriptionchange",n=>{n.waitUntil(bp(n,t))}),self.addEventListener("notificationclick",n=>{n.waitUntil(yp(n))}),t};function xp(){at(new qe("messaging-sw",Rp,"PUBLIC"))}/**
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
 */async function kp(){return sa()&&await oa()&&"PushManager"in self&&"Notification"in self&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function Dp(e=Wd()){return kp().then(t=>{if(!t)throw Oe.create("unsupported-browser")},t=>{throw Oe.create("indexed-db-unsupported")}),bs(ia(e),"messaging-sw").getImmediate()}/**
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
 */xp();/**
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
 */const Pp="/firebase-messaging-sw.js",Mp="/firebase-cloud-messaging-push-scope",$a="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Np="https://fcmregistrations.googleapis.com/v1",La="google.c.a.c_id",$p="google.c.a.c_l",Lp="google.c.a.ts",Bp="google.c.a.e";var Vo;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Vo||(Vo={}));/**
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
 */var ln;(function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"})(ln||(ln={}));/**
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
 */function He(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Fp(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),s=new Uint8Array(r.length);for(let o=0;o<r.length;++o)s[o]=r.charCodeAt(o);return s}/**
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
 */const _r="fcm_token_details_db",jp=5,Uo="fcm_token_object_Store";async function Hp(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(o=>o.name).includes(_r))return null;let t=null;return(await Ht(_r,jp,{upgrade:async(r,s,o,i)=>{var c;if(s<2||!r.objectStoreNames.contains(Uo))return;const a=i.objectStore(Uo),f=await a.index("fcmSenderId").get(e);if(await a.clear(),!!f){if(s===2){const l=f;if(!l.auth||!l.p256dh||!l.endpoint)return;t={token:l.fcmToken,createTime:(c=l.createTime)!==null&&c!==void 0?c:Date.now(),subscriptionOptions:{auth:l.auth,p256dh:l.p256dh,endpoint:l.endpoint,swScope:l.swScope,vapidKey:typeof l.vapidKey=="string"?l.vapidKey:He(l.vapidKey)}}}else if(s===3){const l=f;t={token:l.fcmToken,createTime:l.createTime,subscriptionOptions:{auth:He(l.auth),p256dh:He(l.p256dh),endpoint:l.endpoint,swScope:l.swScope,vapidKey:He(l.vapidKey)}}}else if(s===4){const l=f;t={token:l.fcmToken,createTime:l.createTime,subscriptionOptions:{auth:He(l.auth),p256dh:He(l.p256dh),endpoint:l.endpoint,swScope:l.swScope,vapidKey:He(l.vapidKey)}}}}}})).close(),await Mt(_r),await Mt("fcm_vapid_details_db"),await Mt("undefined"),Kp(t)?t:null}function Kp(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
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
 */const Vp="firebase-messaging-database",Up=1,vt="firebase-messaging-store";let yr=null;function Os(){return yr||(yr=Ht(Vp,Up,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(vt)}}})),yr}async function Ba(e){const t=xs(e),r=await(await Os()).transaction(vt).objectStore(vt).get(t);if(r)return r;{const s=await Hp(e.appConfig.senderId);if(s)return await Rs(e,s),s}}async function Rs(e,t){const n=xs(e),s=(await Os()).transaction(vt,"readwrite");return await s.objectStore(vt).put(t,n),await s.done,t}async function Wp(e){const t=xs(e),r=(await Os()).transaction(vt,"readwrite");await r.objectStore(vt).delete(t),await r.done}function xs({appConfig:e}){return e.appId}/**
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
 */const qp={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},ye=new fn("messaging","Messaging",qp);/**
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
 */async function zp(e,t){const n=await Ds(e),r=ja(t),s={method:"POST",headers:n,body:JSON.stringify(r)};let o;try{o=await(await fetch(ks(e.appConfig),s)).json()}catch(i){throw ye.create("token-subscribe-failed",{errorInfo:i==null?void 0:i.toString()})}if(o.error){const i=o.error.message;throw ye.create("token-subscribe-failed",{errorInfo:i})}if(!o.token)throw ye.create("token-subscribe-no-token");return o.token}async function Gp(e,t){const n=await Ds(e),r=ja(t.subscriptionOptions),s={method:"PATCH",headers:n,body:JSON.stringify(r)};let o;try{o=await(await fetch(`${ks(e.appConfig)}/${t.token}`,s)).json()}catch(i){throw ye.create("token-update-failed",{errorInfo:i==null?void 0:i.toString()})}if(o.error){const i=o.error.message;throw ye.create("token-update-failed",{errorInfo:i})}if(!o.token)throw ye.create("token-update-no-token");return o.token}async function Fa(e,t){const r={method:"DELETE",headers:await Ds(e)};try{const o=await(await fetch(`${ks(e.appConfig)}/${t}`,r)).json();if(o.error){const i=o.error.message;throw ye.create("token-unsubscribe-failed",{errorInfo:i})}}catch(s){throw ye.create("token-unsubscribe-failed",{errorInfo:s==null?void 0:s.toString()})}}function ks({projectId:e}){return`${Np}/projects/${e}/registrations`}async function Ds({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function ja({p256dh:e,auth:t,endpoint:n,vapidKey:r}){const s={web:{endpoint:n,auth:t,p256dh:e}};return r!==$a&&(s.web.applicationPubKey=r),s}/**
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
 */const Jp=7*24*60*60*1e3;async function Yp(e){const t=await Zp(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:He(t.getKey("auth")),p256dh:He(t.getKey("p256dh"))},r=await Ba(e.firebaseDependencies);if(r){if(eg(r.subscriptionOptions,n))return Date.now()>=r.createTime+Jp?Xp(e,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await Fa(e.firebaseDependencies,r.token)}catch(s){console.warn(s)}return Wo(e.firebaseDependencies,n)}else return Wo(e.firebaseDependencies,n)}async function Qp(e){const t=await Ba(e.firebaseDependencies);t&&(await Fa(e.firebaseDependencies,t.token),await Wp(e.firebaseDependencies));const n=await e.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function Xp(e,t){try{const n=await Gp(e.firebaseDependencies,t),r=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await Rs(e.firebaseDependencies,r),n}catch(n){throw await Qp(e),n}}async function Wo(e,t){const r={token:await zp(e,t),createTime:Date.now(),subscriptionOptions:t};return await Rs(e,r),r.token}async function Zp(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Fp(t)})}function eg(e,t){const n=t.vapidKey===e.vapidKey,r=t.endpoint===e.endpoint,s=t.auth===e.auth,o=t.p256dh===e.p256dh;return n&&r&&s&&o}/**
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
 */function qo(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return tg(t,e),ng(t,e),rg(t,e),t}function tg(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const r=t.notification.body;r&&(e.notification.body=r);const s=t.notification.image;s&&(e.notification.image=s);const o=t.notification.icon;o&&(e.notification.icon=o)}function ng(e,t){t.data&&(e.data=t.data)}function rg(e,t){var n,r,s,o,i;if(!t.fcmOptions&&!(!((n=t.notification)===null||n===void 0)&&n.click_action))return;e.fcmOptions={};const c=(s=(r=t.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&s!==void 0?s:(o=t.notification)===null||o===void 0?void 0:o.click_action;c&&(e.fcmOptions.link=c);const a=(i=t.fcmOptions)===null||i===void 0?void 0:i.analytics_label;a&&(e.fcmOptions.analyticsLabel=a)}/**
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
 */function sg(e){return typeof e=="object"&&!!e&&La in e}/**
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
 */Ha("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");Ha("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function Ha(e,t){const n=[];for(let r=0;r<e.length;r++)n.push(e.charAt(r)),r<t.length&&n.push(t.charAt(r));return n.join("")}/**
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
 */function og(e){if(!e||!e.options)throw wr("App Configuration Object");if(!e.name)throw wr("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const r of t)if(!n[r])throw wr(r);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function wr(e){return ye.create("missing-app-config-values",{valueName:e})}/**
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
 */class ig{constructor(t,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const s=og(t);this.firebaseDependencies={app:t,appConfig:s,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
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
 */async function ag(e){try{e.swRegistration=await navigator.serviceWorker.register(Pp,{scope:Mp}),e.swRegistration.update().catch(()=>{})}catch(t){throw ye.create("failed-service-worker-registration",{browserErrorMessage:t==null?void 0:t.message})}}/**
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
 */async function cg(e,t){if(!t&&!e.swRegistration&&await ag(e),!(!t&&e.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw ye.create("invalid-sw-registration");e.swRegistration=t}}/**
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
 */async function lg(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=$a)}/**
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
 */async function Ka(e,t){if(!navigator)throw ye.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw ye.create("permission-blocked");return await lg(e,t==null?void 0:t.vapidKey),await cg(e,t==null?void 0:t.serviceWorkerRegistration),Yp(e)}/**
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
 */async function ug(e,t,n){const r=fg(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[La],message_name:n[$p],message_time:n[Lp],message_device_time:Math.floor(Date.now()/1e3)})}function fg(e){switch(e){case ln.NOTIFICATION_CLICKED:return"notification_open";case ln.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function dg(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===ln.PUSH_RECEIVED&&(typeof e.onMessageHandler=="function"?e.onMessageHandler(qo(n)):e.onMessageHandler.next(qo(n)));const r=n.data;sg(r)&&r[Bp]==="1"&&await ug(e,n.messageType,r)}const zo="@firebase/messaging",Go="0.12.6";/**
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
 */const hg=e=>{const t=new ig(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>dg(t,n)),t},pg=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:r=>Ka(t,r)}};function gg(){at(new qe("messaging",hg,"PUBLIC")),at(new qe("messaging-internal",pg,"PRIVATE")),ot(zo,Go),ot(zo,Go,"esm2017")}async function mg(e,t){return e=ia(e),Ka(e,t)}gg();const bg={apiKey:"AIzaSyC2K5T81hk-OPCqhp4WwbEGu6ri9j-eRR4",authDomain:"efr-dev-c3d2a.firebaseapp.com",projectId:"efr-dev-c3d2a",storageBucket:"efr-dev-c3d2a.appspot.com",messagingSenderId:"799673773049",appId:"1:799673773049:web:8a0ae20839901e61e12b28"},_g=la(bg),yg=Dp(_g);navigator.serviceWorker.register("sw.js").then(e=>{mg(yg,{serviceWorkerRegistration:e,vapidKey:"BN9wKiZjn9PpeG4VKQriDQZ2EfUXAdIiLdcISZca4RnoJYXQ57vWi2CLIN6zBhCZpdFfK6rWIVGYOOqi3cBEo0E"}).then(t=>{if(t)return console.log("Token is: "+t);console.log("No registration token available. Request permission to generate one.")}).catch(t=>{console.log("An error occurred while retrieving token. ",t)})});fu(bu).use($f).mount("#app");
