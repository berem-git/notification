(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ur(e,t){const n=new Set(e.split(","));return t?r=>n.has(r.toLowerCase()):r=>n.has(r)}const Z={},xt=[],_e=()=>{},Wa=()=>!1,Mn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Wr=e=>e.startsWith("onUpdate:"),oe=Object.assign,qr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},qa=Object.prototype.hasOwnProperty,K=(e,t)=>qa.call(e,t),F=Array.isArray,zt=e=>$n(e)==="[object Map]",za=e=>$n(e)==="[object Set]",j=e=>typeof e=="function",se=e=>typeof e=="string",Nn=e=>typeof e=="symbol",ee=e=>e!==null&&typeof e=="object",zs=e=>(ee(e)||j(e))&&j(e.then)&&j(e.catch),Ga=Object.prototype.toString,$n=e=>Ga.call(e),Ja=e=>$n(e).slice(8,-1),Ya=e=>$n(e)==="[object Object]",zr=e=>se(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Gt=Ur(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Bn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Qa=/-(\w)/g,Be=Bn(e=>e.replace(Qa,(t,n)=>n?n.toUpperCase():"")),Xa=/\B([A-Z])/g,Ft=Bn(e=>e.replace(Xa,"-$1").toLowerCase()),Ln=Bn(e=>e.charAt(0).toUpperCase()+e.slice(1)),Xn=Bn(e=>e?`on${Ln(e)}`:""),it=(e,t)=>!Object.is(e,t),Zn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},An=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Za=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let No;const Gs=()=>No||(No=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Gr(e){if(F(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],o=se(r)?rc(r):Gr(r);if(o)for(const s in o)t[s]=o[s]}return t}else if(se(e)||ee(e))return e}const ec=/;(?![^(]*\))/g,tc=/:([^]+)/,nc=/\/\*[^]*?\*\//g;function rc(e){const t={};return e.replace(nc,"").split(ec).forEach(n=>{if(n){const r=n.split(tc);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Jr(e){let t="";if(se(e))t=e;else if(F(e))for(let n=0;n<e.length;n++){const r=Jr(e[n]);r&&(t+=r+" ")}else if(ee(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const oc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",sc=Ur(oc);function Js(e){return!!e||e===""}/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ee;class ic{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ee,!t&&Ee&&(this.index=(Ee.scopes||(Ee.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Ee;try{return Ee=this,t()}finally{Ee=n}}}on(){Ee=this}off(){Ee=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0,this._active=!1}}}function ac(e,t=Ee){t&&t.active&&t.effects.push(e)}function cc(){return Ee}let gt;class Yr{constructor(t,n,r,o){this.fn=t,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,ac(this,o)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Et();for(let t=0;t<this._depsLength;t++){const n=this.deps[t];if(n.computed&&(lc(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),St()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=nt,n=gt;try{return nt=!0,gt=this,this._runnings++,$o(this),this.fn()}finally{Bo(this),this._runnings--,gt=n,nt=t}}stop(){var t;this.active&&($o(this),Bo(this),(t=this.onStop)==null||t.call(this),this.active=!1)}}function lc(e){return e.value}function $o(e){e._trackId++,e._depsLength=0}function Bo(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)Ys(e.deps[t],e);e.deps.length=e._depsLength}}function Ys(e,t){const n=e.get(t);n!==void 0&&t._trackId!==n&&(e.delete(t),e.size===0&&e.cleanup())}let nt=!0,vr=0;const Qs=[];function Et(){Qs.push(nt),nt=!1}function St(){const e=Qs.pop();nt=e===void 0?!0:e}function Qr(){vr++}function Xr(){for(vr--;!vr&&Er.length;)Er.shift()()}function Xs(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const r=e.deps[e._depsLength];r!==t?(r&&Ys(r,e),e.deps[e._depsLength++]=t):e._depsLength++}}const Er=[];function Zs(e,t,n){Qr();for(const r of e.keys()){let o;r._dirtyLevel<t&&(o??(o=e.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=t),r._shouldSchedule&&(o??(o=e.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&Er.push(r.scheduler)))}Xr()}const ei=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},Sr=new WeakMap,mt=Symbol(""),Ir=Symbol("");function ge(e,t,n){if(nt&&gt){let r=Sr.get(e);r||Sr.set(e,r=new Map);let o=r.get(n);o||r.set(n,o=ei(()=>r.delete(n))),Xs(gt,o)}}function Ke(e,t,n,r,o,s){const i=Sr.get(e);if(!i)return;let c=[];if(t==="clear")c=[...i.values()];else if(n==="length"&&F(e)){const a=Number(r);i.forEach((f,l)=>{(l==="length"||!Nn(l)&&l>=a)&&c.push(f)})}else switch(n!==void 0&&c.push(i.get(n)),t){case"add":F(e)?zr(n)&&c.push(i.get("length")):(c.push(i.get(mt)),zt(e)&&c.push(i.get(Ir)));break;case"delete":F(e)||(c.push(i.get(mt)),zt(e)&&c.push(i.get(Ir)));break;case"set":zt(e)&&c.push(i.get(mt));break}Qr();for(const a of c)a&&Zs(a,4);Xr()}const uc=Ur("__proto__,__v_isRef,__isVue"),ti=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Nn)),Lo=fc();function fc(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=V(this);for(let s=0,i=this.length;s<i;s++)ge(r,"get",s+"");const o=r[t](...n);return o===-1||o===!1?r[t](...n.map(V)):o}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Et(),Qr();const r=V(this)[t].apply(this,n);return Xr(),St(),r}}),e}function dc(e){const t=V(this);return ge(t,"has",e),t.hasOwnProperty(e)}class ni{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){const o=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!o;if(n==="__v_isReadonly")return o;if(n==="__v_isShallow")return s;if(n==="__v_raw")return r===(o?s?Ac:ii:s?si:oi).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const i=F(t);if(!o){if(i&&K(Lo,n))return Reflect.get(Lo,n,r);if(n==="hasOwnProperty")return dc}const c=Reflect.get(t,n,r);return(Nn(n)?ti.has(n):uc(n))||(o||ge(t,"get",n),s)?c:me(c)?i&&zr(n)?c:c.value:ee(c)?o?ci(c):jn(c):c}}class ri extends ni{constructor(t=!1){super(!1,t)}set(t,n,r,o){let s=t[n];if(!this._isShallow){const a=Nt(s);if(!Tn(r)&&!Nt(r)&&(s=V(s),r=V(r)),!F(t)&&me(s)&&!me(r))return a?!1:(s.value=r,!0)}const i=F(t)&&zr(n)?Number(n)<t.length:K(t,n),c=Reflect.set(t,n,r,o);return t===V(o)&&(i?it(r,s)&&Ke(t,"set",n,r):Ke(t,"add",n,r)),c}deleteProperty(t,n){const r=K(t,n);t[n];const o=Reflect.deleteProperty(t,n);return o&&r&&Ke(t,"delete",n,void 0),o}has(t,n){const r=Reflect.has(t,n);return(!Nn(n)||!ti.has(n))&&ge(t,"has",n),r}ownKeys(t){return ge(t,"iterate",F(t)?"length":mt),Reflect.ownKeys(t)}}class hc extends ni{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const pc=new ri,gc=new hc,mc=new ri(!0),Zr=e=>e,Fn=e=>Reflect.getPrototypeOf(e);function hn(e,t,n=!1,r=!1){e=e.__v_raw;const o=V(e),s=V(t);n||(it(t,s)&&ge(o,"get",t),ge(o,"get",s));const{has:i}=Fn(o),c=r?Zr:n?no:en;if(i.call(o,t))return c(e.get(t));if(i.call(o,s))return c(e.get(s));e!==o&&e.get(t)}function pn(e,t=!1){const n=this.__v_raw,r=V(n),o=V(e);return t||(it(e,o)&&ge(r,"has",e),ge(r,"has",o)),e===o?n.has(e):n.has(e)||n.has(o)}function gn(e,t=!1){return e=e.__v_raw,!t&&ge(V(e),"iterate",mt),Reflect.get(e,"size",e)}function Fo(e){e=V(e);const t=V(this);return Fn(t).has.call(t,e)||(t.add(e),Ke(t,"add",e,e)),this}function jo(e,t){t=V(t);const n=V(this),{has:r,get:o}=Fn(n);let s=r.call(n,e);s||(e=V(e),s=r.call(n,e));const i=o.call(n,e);return n.set(e,t),s?it(t,i)&&Ke(n,"set",e,t):Ke(n,"add",e,t),this}function Ho(e){const t=V(this),{has:n,get:r}=Fn(t);let o=n.call(t,e);o||(e=V(e),o=n.call(t,e)),r&&r.call(t,e);const s=t.delete(e);return o&&Ke(t,"delete",e,void 0),s}function Ko(){const e=V(this),t=e.size!==0,n=e.clear();return t&&Ke(e,"clear",void 0,void 0),n}function mn(e,t){return function(r,o){const s=this,i=s.__v_raw,c=V(i),a=t?Zr:e?no:en;return!e&&ge(c,"iterate",mt),i.forEach((f,l)=>r.call(o,a(f),a(l),s))}}function bn(e,t,n){return function(...r){const o=this.__v_raw,s=V(o),i=zt(s),c=e==="entries"||e===Symbol.iterator&&i,a=e==="keys"&&i,f=o[e](...r),l=n?Zr:t?no:en;return!t&&ge(s,"iterate",a?Ir:mt),{next(){const{value:h,done:p}=f.next();return p?{value:h,done:p}:{value:c?[l(h[0]),l(h[1])]:l(h),done:p}},[Symbol.iterator](){return this}}}}function Ye(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function bc(){const e={get(s){return hn(this,s)},get size(){return gn(this)},has:pn,add:Fo,set:jo,delete:Ho,clear:Ko,forEach:mn(!1,!1)},t={get(s){return hn(this,s,!1,!0)},get size(){return gn(this)},has:pn,add:Fo,set:jo,delete:Ho,clear:Ko,forEach:mn(!1,!0)},n={get(s){return hn(this,s,!0)},get size(){return gn(this,!0)},has(s){return pn.call(this,s,!0)},add:Ye("add"),set:Ye("set"),delete:Ye("delete"),clear:Ye("clear"),forEach:mn(!0,!1)},r={get(s){return hn(this,s,!0,!0)},get size(){return gn(this,!0)},has(s){return pn.call(this,s,!0)},add:Ye("add"),set:Ye("set"),delete:Ye("delete"),clear:Ye("clear"),forEach:mn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=bn(s,!1,!1),n[s]=bn(s,!0,!1),t[s]=bn(s,!1,!0),r[s]=bn(s,!0,!0)}),[e,n,t,r]}const[_c,yc,wc,vc]=bc();function eo(e,t){const n=t?e?vc:wc:e?yc:_c;return(r,o,s)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?r:Reflect.get(K(n,o)&&o in r?n:r,o,s)}const Ec={get:eo(!1,!1)},Sc={get:eo(!1,!0)},Ic={get:eo(!0,!1)},oi=new WeakMap,si=new WeakMap,ii=new WeakMap,Ac=new WeakMap;function Tc(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Cc(e){return e.__v_skip||!Object.isExtensible(e)?0:Tc(Ja(e))}function jn(e){return Nt(e)?e:to(e,!1,pc,Ec,oi)}function ai(e){return to(e,!1,mc,Sc,si)}function ci(e){return to(e,!0,gc,Ic,ii)}function to(e,t,n,r,o){if(!ee(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=o.get(e);if(s)return s;const i=Cc(e);if(i===0)return e;const c=new Proxy(e,i===2?r:n);return o.set(e,c),c}function kt(e){return Nt(e)?kt(e.__v_raw):!!(e&&e.__v_isReactive)}function Nt(e){return!!(e&&e.__v_isReadonly)}function Tn(e){return!!(e&&e.__v_isShallow)}function li(e){return kt(e)||Nt(e)}function V(e){const t=e&&e.__v_raw;return t?V(t):e}function ui(e){return Object.isExtensible(e)&&An(e,"__v_skip",!0),e}const en=e=>ee(e)?jn(e):e,no=e=>ee(e)?ci(e):e;class fi{constructor(t,n,r,o){this.getter=t,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Yr(()=>t(this._value),()=>yn(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=r}get value(){const t=V(this);return(!t._cacheable||t.effect.dirty)&&it(t._value,t._value=t.effect.run())&&yn(t,4),di(t),t.effect._dirtyLevel>=2&&yn(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function Oc(e,t,n=!1){let r,o;const s=j(e);return s?(r=e,o=_e):(r=e.get,o=e.set),new fi(r,o,s||!o,n)}function di(e){var t;nt&&gt&&(e=V(e),Xs(gt,(t=e.dep)!=null?t:e.dep=ei(()=>e.dep=void 0,e instanceof fi?e:void 0)))}function yn(e,t=4,n){e=V(e);const r=e.dep;r&&Zs(r,t)}function me(e){return!!(e&&e.__v_isRef===!0)}function Rc(e){return hi(e,!1)}function xc(e){return hi(e,!0)}function hi(e,t){return me(e)?e:new kc(e,t)}class kc{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:V(t),this._value=n?t:en(t)}get value(){return di(this),this._value}set value(t){const n=this.__v_isShallow||Tn(t)||Nt(t);t=n?t:V(t),it(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:en(t),yn(this,4))}}function Dt(e){return me(e)?e.value:e}const Dc={get:(e,t,n)=>Dt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const o=e[t];return me(o)&&!me(n)?(o.value=n,!0):Reflect.set(e,t,n,r)}};function pi(e){return kt(e)?e:new Proxy(e,Dc)}/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function rt(e,t,n,r){try{return r?e(...r):e()}catch(o){Hn(o,t,n)}}function Ce(e,t,n,r){if(j(e)){const s=rt(e,t,n,r);return s&&zs(s)&&s.catch(i=>{Hn(i,t,n)}),s}const o=[];for(let s=0;s<e.length;s++)o.push(Ce(e[s],t,n,r));return o}function Hn(e,t,n,r=!0){const o=t?t.vnode:null;if(t){let s=t.parent;const i=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;s;){const f=s.ec;if(f){for(let l=0;l<f.length;l++)if(f[l](e,i,c)===!1)return}s=s.parent}const a=t.appContext.config.errorHandler;if(a){rt(a,null,10,[e,i,c]);return}}Pc(e,n,o,r)}function Pc(e,t,n,r=!0){console.error(e)}let tn=!1,Ar=!1;const ae=[];let $e=0;const Pt=[];let Xe=null,ht=0;const gi=Promise.resolve();let ro=null;function mi(e){const t=ro||gi;return e?t.then(this?e.bind(this):e):t}function Mc(e){let t=$e+1,n=ae.length;for(;t<n;){const r=t+n>>>1,o=ae[r],s=nn(o);s<e||s===e&&o.pre?t=r+1:n=r}return t}function oo(e){(!ae.length||!ae.includes(e,tn&&e.allowRecurse?$e+1:$e))&&(e.id==null?ae.push(e):ae.splice(Mc(e.id),0,e),bi())}function bi(){!tn&&!Ar&&(Ar=!0,ro=gi.then(yi))}function Nc(e){const t=ae.indexOf(e);t>$e&&ae.splice(t,1)}function $c(e){F(e)?Pt.push(...e):(!Xe||!Xe.includes(e,e.allowRecurse?ht+1:ht))&&Pt.push(e),bi()}function Vo(e,t,n=tn?$e+1:0){for(;n<ae.length;n++){const r=ae[n];if(r&&r.pre){if(e&&r.id!==e.uid)continue;ae.splice(n,1),n--,r()}}}function _i(e){if(Pt.length){const t=[...new Set(Pt)].sort((n,r)=>nn(n)-nn(r));if(Pt.length=0,Xe){Xe.push(...t);return}for(Xe=t,ht=0;ht<Xe.length;ht++)Xe[ht]();Xe=null,ht=0}}const nn=e=>e.id==null?1/0:e.id,Bc=(e,t)=>{const n=nn(e)-nn(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function yi(e){Ar=!1,tn=!0,ae.sort(Bc);const t=_e;try{for($e=0;$e<ae.length;$e++){const n=ae[$e];n&&n.active!==!1&&rt(n,null,14)}}finally{$e=0,ae.length=0,_i(),tn=!1,ro=null,(ae.length||Pt.length)&&yi()}}function Lc(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||Z;let o=n;const s=t.startsWith("update:"),i=s&&t.slice(7);if(i&&i in r){const l=`${i==="modelValue"?"model":i}Modifiers`,{number:h,trim:p}=r[l]||Z;p&&(o=n.map(y=>se(y)?y.trim():y)),h&&(o=n.map(Za))}let c,a=r[c=Xn(t)]||r[c=Xn(Be(t))];!a&&s&&(a=r[c=Xn(Ft(t))]),a&&Ce(a,e,6,o);const f=r[c+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,Ce(f,e,6,o)}}function wi(e,t,n=!1){const r=t.emitsCache,o=r.get(e);if(o!==void 0)return o;const s=e.emits;let i={},c=!1;if(!j(e)){const a=f=>{const l=wi(f,t,!0);l&&(c=!0,oe(i,l))};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!s&&!c?(ee(e)&&r.set(e,null),null):(F(s)?s.forEach(a=>i[a]=null):oe(i,s),ee(e)&&r.set(e,i),i)}function Kn(e,t){return!e||!Mn(t)?!1:(t=t.slice(2).replace(/Once$/,""),K(e,t[0].toLowerCase()+t.slice(1))||K(e,Ft(t))||K(e,t))}let Ae=null,Vn=null;function Cn(e){const t=Ae;return Ae=e,Vn=e&&e.type.__scopeId||null,t}function Fc(e){Vn=e}function jc(){Vn=null}function so(e,t=Ae,n){if(!t||e._n)return e;const r=(...o)=>{r._d&&es(-1);const s=Cn(t);let i;try{i=e(...o)}finally{Cn(s),r._d&&es(1)}return i};return r._n=!0,r._c=!0,r._d=!0,r}function er(e){const{type:t,vnode:n,proxy:r,withProxy:o,props:s,propsOptions:[i],slots:c,attrs:a,emit:f,render:l,renderCache:h,data:p,setupState:y,ctx:O,inheritAttrs:P}=e;let $,x;const M=Cn(e);try{if(n.shapeFlag&4){const U=o||r,te=U;$=Ne(l.call(te,U,h,s,y,p,O)),x=a}else{const U=t;$=Ne(U.length>1?U(s,{attrs:a,slots:c,emit:f}):U(s,null)),x=t.props?a:Hc(a)}}catch(U){Qt.length=0,Hn(U,e,1),$=he(rn)}let B=$;if(x&&P!==!1){const U=Object.keys(x),{shapeFlag:te}=B;U.length&&te&7&&(i&&U.some(Wr)&&(x=Kc(x,i)),B=$t(B,x))}return n.dirs&&(B=$t(B),B.dirs=B.dirs?B.dirs.concat(n.dirs):n.dirs),n.transition&&(B.transition=n.transition),$=B,Cn(M),$}const Hc=e=>{let t;for(const n in e)(n==="class"||n==="style"||Mn(n))&&((t||(t={}))[n]=e[n]);return t},Kc=(e,t)=>{const n={};for(const r in e)(!Wr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Vc(e,t,n){const{props:r,children:o,component:s}=e,{props:i,children:c,patchFlag:a}=t,f=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return r?Uo(r,i,f):!!i;if(a&8){const l=t.dynamicProps;for(let h=0;h<l.length;h++){const p=l[h];if(i[p]!==r[p]&&!Kn(f,p))return!0}}}else return(o||c)&&(!c||!c.$stable)?!0:r===i?!1:r?i?Uo(r,i,f):!0:!!i;return!1}function Uo(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let o=0;o<r.length;o++){const s=r[o];if(t[s]!==e[s]&&!Kn(n,s))return!0}return!1}function Uc({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const vi="components";function io(e,t){return qc(vi,e,!0,t)||e}const Wc=Symbol.for("v-ndc");function qc(e,t,n=!0,r=!1){const o=Ae||ce;if(o){const s=o.type;if(e===vi){const c=Fl(s,!1);if(c&&(c===t||c===Be(t)||c===Ln(Be(t))))return s}const i=Wo(o[e]||s[e],t)||Wo(o.appContext[e],t);return!i&&r?s:i}}function Wo(e,t){return e&&(e[t]||e[Be(t)]||e[Ln(Be(t))])}const zc=e=>e.__isSuspense;function Gc(e,t){t&&t.pendingBranch?F(e)?t.effects.push(...e):t.effects.push(e):$c(e)}const Jc=Symbol.for("v-scx"),Yc=()=>Ve(Jc),_n={};function wn(e,t,n){return Ei(e,t,n)}function Ei(e,t,{immediate:n,deep:r,flush:o,once:s,onTrack:i,onTrigger:c}=Z){if(t&&s){const L=t;t=(...le)=>{L(...le),te()}}const a=ce,f=L=>r===!0?L:Rt(L,r===!1?1:void 0);let l,h=!1,p=!1;if(me(e)?(l=()=>e.value,h=Tn(e)):kt(e)?(l=()=>f(e),h=!0):F(e)?(p=!0,h=e.some(L=>kt(L)||Tn(L)),l=()=>e.map(L=>{if(me(L))return L.value;if(kt(L))return f(L);if(j(L))return rt(L,a,2)})):j(e)?t?l=()=>rt(e,a,2):l=()=>(y&&y(),Ce(e,a,3,[O])):l=_e,t&&r){const L=l;l=()=>Rt(L())}let y,O=L=>{y=B.onStop=()=>{rt(L,a,4),y=B.onStop=void 0}},P;if(zn)if(O=_e,t?n&&Ce(t,a,3,[l(),p?[]:void 0,O]):l(),o==="sync"){const L=Yc();P=L.__watcherHandles||(L.__watcherHandles=[])}else return _e;let $=p?new Array(e.length).fill(_n):_n;const x=()=>{if(!(!B.active||!B.dirty))if(t){const L=B.run();(r||h||(p?L.some((le,we)=>it(le,$[we])):it(L,$)))&&(y&&y(),Ce(t,a,3,[L,$===_n?void 0:p&&$[0]===_n?[]:$,O]),$=L)}else B.run()};x.allowRecurse=!!t;let M;o==="sync"?M=x:o==="post"?M=()=>de(x,a&&a.suspense):(x.pre=!0,a&&(x.id=a.uid),M=()=>oo(x));const B=new Yr(l,_e,M),U=cc(),te=()=>{B.stop(),U&&qr(U.effects,B)};return t?n?x():$=B.run():o==="post"?de(B.run.bind(B),a&&a.suspense):B.run(),P&&P.push(te),te}function Qc(e,t,n){const r=this.proxy,o=se(e)?e.includes(".")?Si(r,e):()=>r[e]:e.bind(r,r);let s;j(t)?s=t:(s=t.handler,n=t);const i=un(this),c=Ei(o,s.bind(r),n);return i(),c}function Si(e,t){const n=t.split(".");return()=>{let r=e;for(let o=0;o<n.length&&r;o++)r=r[n[o]];return r}}function Rt(e,t,n=0,r){if(!ee(e)||e.__v_skip)return e;if(t&&t>0){if(n>=t)return e;n++}if(r=r||new Set,r.has(e))return e;if(r.add(e),me(e))Rt(e.value,t,n,r);else if(F(e))for(let o=0;o<e.length;o++)Rt(e[o],t,n,r);else if(za(e)||zt(e))e.forEach(o=>{Rt(o,t,n,r)});else if(Ya(e))for(const o in e)Rt(e[o],t,n,r);return e}function ut(e,t,n,r){const o=e.dirs,s=t&&t.dirs;for(let i=0;i<o.length;i++){const c=o[i];s&&(c.oldValue=s[i].value);let a=c.dir[r];a&&(Et(),Ce(a,n,8,[e.el,c,e,t]),St())}}/*! #__NO_SIDE_EFFECTS__ */function Ii(e,t){return j(e)?(()=>oe({name:e.name},t,{setup:e}))():e}const vn=e=>!!e.type.__asyncLoader,Ai=e=>e.type.__isKeepAlive;function Xc(e,t){Ti(e,"a",t)}function Zc(e,t){Ti(e,"da",t)}function Ti(e,t,n=ce){const r=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(Un(t,r,n),n){let o=n.parent;for(;o&&o.parent;)Ai(o.parent.vnode)&&el(r,t,n,o),o=o.parent}}function el(e,t,n,r){const o=Un(t,e,r,!0);Oi(()=>{qr(r[t],o)},n)}function Un(e,t,n=ce,r=!1){if(n){const o=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;Et();const c=un(n),a=Ce(t,n,e,i);return c(),St(),a});return r?o.unshift(s):o.push(s),s}}const ze=e=>(t,n=ce)=>(!zn||e==="sp")&&Un(e,(...r)=>t(...r),n),tl=ze("bm"),Ci=ze("m"),nl=ze("bu"),rl=ze("u"),ol=ze("bum"),Oi=ze("um"),sl=ze("sp"),il=ze("rtg"),al=ze("rtc");function cl(e,t=ce){Un("ec",e,t)}const Tr=e=>e?Hi(e)?fo(e)||e.proxy:Tr(e.parent):null,Jt=oe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Tr(e.parent),$root:e=>Tr(e.root),$emit:e=>e.emit,$options:e=>ao(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,oo(e.update)}),$nextTick:e=>e.n||(e.n=mi.bind(e.proxy)),$watch:e=>Qc.bind(e)}),tr=(e,t)=>e!==Z&&!e.__isScriptSetup&&K(e,t),ll={get({_:e},t){const{ctx:n,setupState:r,data:o,props:s,accessCache:i,type:c,appContext:a}=e;let f;if(t[0]!=="$"){const y=i[t];if(y!==void 0)switch(y){case 1:return r[t];case 2:return o[t];case 4:return n[t];case 3:return s[t]}else{if(tr(r,t))return i[t]=1,r[t];if(o!==Z&&K(o,t))return i[t]=2,o[t];if((f=e.propsOptions[0])&&K(f,t))return i[t]=3,s[t];if(n!==Z&&K(n,t))return i[t]=4,n[t];Cr&&(i[t]=0)}}const l=Jt[t];let h,p;if(l)return t==="$attrs"&&ge(e,"get",t),l(e);if((h=c.__cssModules)&&(h=h[t]))return h;if(n!==Z&&K(n,t))return i[t]=4,n[t];if(p=a.config.globalProperties,K(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:o,ctx:s}=e;return tr(o,t)?(o[t]=n,!0):r!==Z&&K(r,t)?(r[t]=n,!0):K(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:o,propsOptions:s}},i){let c;return!!n[i]||e!==Z&&K(e,i)||tr(t,i)||(c=s[0])&&K(c,i)||K(r,i)||K(Jt,i)||K(o.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:K(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function qo(e){return F(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Cr=!0;function ul(e){const t=ao(e),n=e.proxy,r=e.ctx;Cr=!1,t.beforeCreate&&zo(t.beforeCreate,e,"bc");const{data:o,computed:s,methods:i,watch:c,provide:a,inject:f,created:l,beforeMount:h,mounted:p,beforeUpdate:y,updated:O,activated:P,deactivated:$,beforeDestroy:x,beforeUnmount:M,destroyed:B,unmounted:U,render:te,renderTracked:L,renderTriggered:le,errorCaptured:we,serverPrefetch:ct,expose:xe,inheritAttrs:Ge,components:lt,directives:ke,filters:Kt}=t;if(f&&fl(f,r,null),i)for(const G in i){const W=i[G];j(W)&&(r[G]=W.bind(n))}if(o){const G=o.call(n,n);ee(G)&&(e.data=jn(G))}if(Cr=!0,s)for(const G in s){const W=s[G],Le=j(W)?W.bind(n,n):j(W.get)?W.get.bind(n,n):_e,Je=!j(W)&&j(W.set)?W.set.bind(n):_e,De=Ie({get:Le,set:Je});Object.defineProperty(r,G,{enumerable:!0,configurable:!0,get:()=>De.value,set:fe=>De.value=fe})}if(c)for(const G in c)Ri(c[G],r,n,G);if(a){const G=j(a)?a.call(n):a;Reflect.ownKeys(G).forEach(W=>{En(W,G[W])})}l&&zo(l,e,"c");function ne(G,W){F(W)?W.forEach(Le=>G(Le.bind(n))):W&&G(W.bind(n))}if(ne(tl,h),ne(Ci,p),ne(nl,y),ne(rl,O),ne(Xc,P),ne(Zc,$),ne(cl,we),ne(al,L),ne(il,le),ne(ol,M),ne(Oi,U),ne(sl,ct),F(xe))if(xe.length){const G=e.exposed||(e.exposed={});xe.forEach(W=>{Object.defineProperty(G,W,{get:()=>n[W],set:Le=>n[W]=Le})})}else e.exposed||(e.exposed={});te&&e.render===_e&&(e.render=te),Ge!=null&&(e.inheritAttrs=Ge),lt&&(e.components=lt),ke&&(e.directives=ke)}function fl(e,t,n=_e){F(e)&&(e=Or(e));for(const r in e){const o=e[r];let s;ee(o)?"default"in o?s=Ve(o.from||r,o.default,!0):s=Ve(o.from||r):s=Ve(o),me(s)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:i=>s.value=i}):t[r]=s}}function zo(e,t,n){Ce(F(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Ri(e,t,n,r){const o=r.includes(".")?Si(n,r):()=>n[r];if(se(e)){const s=t[e];j(s)&&wn(o,s)}else if(j(e))wn(o,e.bind(n));else if(ee(e))if(F(e))e.forEach(s=>Ri(s,t,n,r));else{const s=j(e.handler)?e.handler.bind(n):t[e.handler];j(s)&&wn(o,s,e)}}function ao(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:o,optionsCache:s,config:{optionMergeStrategies:i}}=e.appContext,c=s.get(t);let a;return c?a=c:!o.length&&!n&&!r?a=t:(a={},o.length&&o.forEach(f=>On(a,f,i,!0)),On(a,t,i)),ee(t)&&s.set(t,a),a}function On(e,t,n,r=!1){const{mixins:o,extends:s}=t;s&&On(e,s,n,!0),o&&o.forEach(i=>On(e,i,n,!0));for(const i in t)if(!(r&&i==="expose")){const c=dl[i]||n&&n[i];e[i]=c?c(e[i],t[i]):t[i]}return e}const dl={data:Go,props:Jo,emits:Jo,methods:qt,computed:qt,beforeCreate:ue,created:ue,beforeMount:ue,mounted:ue,beforeUpdate:ue,updated:ue,beforeDestroy:ue,beforeUnmount:ue,destroyed:ue,unmounted:ue,activated:ue,deactivated:ue,errorCaptured:ue,serverPrefetch:ue,components:qt,directives:qt,watch:pl,provide:Go,inject:hl};function Go(e,t){return t?e?function(){return oe(j(e)?e.call(this,this):e,j(t)?t.call(this,this):t)}:t:e}function hl(e,t){return qt(Or(e),Or(t))}function Or(e){if(F(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ue(e,t){return e?[...new Set([].concat(e,t))]:t}function qt(e,t){return e?oe(Object.create(null),e,t):t}function Jo(e,t){return e?F(e)&&F(t)?[...new Set([...e,...t])]:oe(Object.create(null),qo(e),qo(t??{})):t}function pl(e,t){if(!e)return t;if(!t)return e;const n=oe(Object.create(null),e);for(const r in t)n[r]=ue(e[r],t[r]);return n}function xi(){return{app:null,config:{isNativeTag:Wa,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let gl=0;function ml(e,t){return function(r,o=null){j(r)||(r=oe({},r)),o!=null&&!ee(o)&&(o=null);const s=xi(),i=new WeakSet;let c=!1;const a=s.app={_uid:gl++,_component:r,_props:o,_container:null,_context:s,_instance:null,version:Hl,get config(){return s.config},set config(f){},use(f,...l){return i.has(f)||(f&&j(f.install)?(i.add(f),f.install(a,...l)):j(f)&&(i.add(f),f(a,...l))),a},mixin(f){return s.mixins.includes(f)||s.mixins.push(f),a},component(f,l){return l?(s.components[f]=l,a):s.components[f]},directive(f,l){return l?(s.directives[f]=l,a):s.directives[f]},mount(f,l,h){if(!c){const p=he(r,o);return p.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),l&&t?t(p,f):e(p,f,h),c=!0,a._container=f,f.__vue_app__=a,fo(p.component)||p.component.proxy}},unmount(){c&&(e(null,a._container),delete a._container.__vue_app__)},provide(f,l){return s.provides[f]=l,a},runWithContext(f){const l=Yt;Yt=a;try{return f()}finally{Yt=l}}};return a}}let Yt=null;function En(e,t){if(ce){let n=ce.provides;const r=ce.parent&&ce.parent.provides;r===n&&(n=ce.provides=Object.create(r)),n[e]=t}}function Ve(e,t,n=!1){const r=ce||Ae;if(r||Yt){const o=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Yt._context.provides;if(o&&e in o)return o[e];if(arguments.length>1)return n&&j(t)?t.call(r&&r.proxy):t}}function bl(e,t,n,r=!1){const o={},s={};An(s,qn,1),e.propsDefaults=Object.create(null),ki(e,t,o,s);for(const i in e.propsOptions[0])i in o||(o[i]=void 0);n?e.props=r?o:ai(o):e.type.props?e.props=o:e.props=s,e.attrs=s}function _l(e,t,n,r){const{props:o,attrs:s,vnode:{patchFlag:i}}=e,c=V(o),[a]=e.propsOptions;let f=!1;if((r||i>0)&&!(i&16)){if(i&8){const l=e.vnode.dynamicProps;for(let h=0;h<l.length;h++){let p=l[h];if(Kn(e.emitsOptions,p))continue;const y=t[p];if(a)if(K(s,p))y!==s[p]&&(s[p]=y,f=!0);else{const O=Be(p);o[O]=Rr(a,c,O,y,e,!1)}else y!==s[p]&&(s[p]=y,f=!0)}}}else{ki(e,t,o,s)&&(f=!0);let l;for(const h in c)(!t||!K(t,h)&&((l=Ft(h))===h||!K(t,l)))&&(a?n&&(n[h]!==void 0||n[l]!==void 0)&&(o[h]=Rr(a,c,h,void 0,e,!0)):delete o[h]);if(s!==c)for(const h in s)(!t||!K(t,h))&&(delete s[h],f=!0)}f&&Ke(e,"set","$attrs")}function ki(e,t,n,r){const[o,s]=e.propsOptions;let i=!1,c;if(t)for(let a in t){if(Gt(a))continue;const f=t[a];let l;o&&K(o,l=Be(a))?!s||!s.includes(l)?n[l]=f:(c||(c={}))[l]=f:Kn(e.emitsOptions,a)||(!(a in r)||f!==r[a])&&(r[a]=f,i=!0)}if(s){const a=V(n),f=c||Z;for(let l=0;l<s.length;l++){const h=s[l];n[h]=Rr(o,a,h,f[h],e,!K(f,h))}}return i}function Rr(e,t,n,r,o,s){const i=e[n];if(i!=null){const c=K(i,"default");if(c&&r===void 0){const a=i.default;if(i.type!==Function&&!i.skipFactory&&j(a)){const{propsDefaults:f}=o;if(n in f)r=f[n];else{const l=un(o);r=f[n]=a.call(null,t),l()}}else r=a}i[0]&&(s&&!c?r=!1:i[1]&&(r===""||r===Ft(n))&&(r=!0))}return r}function Di(e,t,n=!1){const r=t.propsCache,o=r.get(e);if(o)return o;const s=e.props,i={},c=[];let a=!1;if(!j(e)){const l=h=>{a=!0;const[p,y]=Di(h,t,!0);oe(i,p),y&&c.push(...y)};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}if(!s&&!a)return ee(e)&&r.set(e,xt),xt;if(F(s))for(let l=0;l<s.length;l++){const h=Be(s[l]);Yo(h)&&(i[h]=Z)}else if(s)for(const l in s){const h=Be(l);if(Yo(h)){const p=s[l],y=i[h]=F(p)||j(p)?{type:p}:oe({},p);if(y){const O=Zo(Boolean,y.type),P=Zo(String,y.type);y[0]=O>-1,y[1]=P<0||O<P,(O>-1||K(y,"default"))&&c.push(h)}}}const f=[i,c];return ee(e)&&r.set(e,f),f}function Yo(e){return e[0]!=="$"&&!Gt(e)}function Qo(e){return e===null?"null":typeof e=="function"?e.name||"":typeof e=="object"&&e.constructor&&e.constructor.name||""}function Xo(e,t){return Qo(e)===Qo(t)}function Zo(e,t){return F(t)?t.findIndex(n=>Xo(n,e)):j(t)&&Xo(t,e)?0:-1}const Pi=e=>e[0]==="_"||e==="$stable",co=e=>F(e)?e.map(Ne):[Ne(e)],yl=(e,t,n)=>{if(t._n)return t;const r=so((...o)=>co(t(...o)),n);return r._c=!1,r},Mi=(e,t,n)=>{const r=e._ctx;for(const o in e){if(Pi(o))continue;const s=e[o];if(j(s))t[o]=yl(o,s,r);else if(s!=null){const i=co(s);t[o]=()=>i}}},Ni=(e,t)=>{const n=co(t);e.slots.default=()=>n},wl=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=V(t),An(t,"_",n)):Mi(t,e.slots={})}else e.slots={},t&&Ni(e,t);An(e.slots,qn,1)},vl=(e,t,n)=>{const{vnode:r,slots:o}=e;let s=!0,i=Z;if(r.shapeFlag&32){const c=t._;c?n&&c===1?s=!1:(oe(o,t),!n&&c===1&&delete o._):(s=!t.$stable,Mi(t,o)),i=t}else t&&(Ni(e,t),i={default:1});if(s)for(const c in o)!Pi(c)&&i[c]==null&&delete o[c]};function xr(e,t,n,r,o=!1){if(F(e)){e.forEach((p,y)=>xr(p,t&&(F(t)?t[y]:t),n,r,o));return}if(vn(r)&&!o)return;const s=r.shapeFlag&4?fo(r.component)||r.component.proxy:r.el,i=o?null:s,{i:c,r:a}=e,f=t&&t.r,l=c.refs===Z?c.refs={}:c.refs,h=c.setupState;if(f!=null&&f!==a&&(se(f)?(l[f]=null,K(h,f)&&(h[f]=null)):me(f)&&(f.value=null)),j(a))rt(a,c,12,[i,l]);else{const p=se(a),y=me(a);if(p||y){const O=()=>{if(e.f){const P=p?K(h,a)?h[a]:l[a]:a.value;o?F(P)&&qr(P,s):F(P)?P.includes(s)||P.push(s):p?(l[a]=[s],K(h,a)&&(h[a]=l[a])):(a.value=[s],e.k&&(l[e.k]=a.value))}else p?(l[a]=i,K(h,a)&&(h[a]=i)):y&&(a.value=i,e.k&&(l[e.k]=i))};i?(O.id=-1,de(O,n)):O()}}}const de=Gc;function El(e){return Sl(e)}function Sl(e,t){const n=Gs();n.__VUE__=!0;const{insert:r,remove:o,patchProp:s,createElement:i,createText:c,createComment:a,setText:f,setElementText:l,parentNode:h,nextSibling:p,setScopeId:y=_e,insertStaticContent:O}=e,P=(u,d,g,_=null,m=null,E=null,A=void 0,v=null,S=!!d.dynamicChildren)=>{if(u===d)return;u&&!Ut(u,d)&&(_=b(u),fe(u,m,E,!0),u=null),d.patchFlag===-2&&(S=!1,d.dynamicChildren=null);const{type:w,ref:C,shapeFlag:D}=d;switch(w){case Wn:$(u,d,g,_);break;case rn:x(u,d,g,_);break;case rr:u==null&&M(d,g,_,A);break;case Se:lt(u,d,g,_,m,E,A,v,S);break;default:D&1?te(u,d,g,_,m,E,A,v,S):D&6?ke(u,d,g,_,m,E,A,v,S):(D&64||D&128)&&w.process(u,d,g,_,m,E,A,v,S,R)}C!=null&&m&&xr(C,u&&u.ref,E,d||u,!d)},$=(u,d,g,_)=>{if(u==null)r(d.el=c(d.children),g,_);else{const m=d.el=u.el;d.children!==u.children&&f(m,d.children)}},x=(u,d,g,_)=>{u==null?r(d.el=a(d.children||""),g,_):d.el=u.el},M=(u,d,g,_)=>{[u.el,u.anchor]=O(u.children,d,g,_,u.el,u.anchor)},B=({el:u,anchor:d},g,_)=>{let m;for(;u&&u!==d;)m=p(u),r(u,g,_),u=m;r(d,g,_)},U=({el:u,anchor:d})=>{let g;for(;u&&u!==d;)g=p(u),o(u),u=g;o(d)},te=(u,d,g,_,m,E,A,v,S)=>{d.type==="svg"?A="svg":d.type==="math"&&(A="mathml"),u==null?L(d,g,_,m,E,A,v,S):ct(u,d,m,E,A,v,S)},L=(u,d,g,_,m,E,A,v)=>{let S,w;const{props:C,shapeFlag:D,transition:k,dirs:N}=u;if(S=u.el=i(u.type,E,C&&C.is,C),D&8?l(S,u.children):D&16&&we(u.children,S,null,_,m,nr(u,E),A,v),N&&ut(u,null,_,"created"),le(S,u,u.scopeId,A,_),C){for(const J in C)J!=="value"&&!Gt(J)&&s(S,J,null,C[J],E,u.children,_,m,ie);"value"in C&&s(S,"value",null,C.value,E),(w=C.onVnodeBeforeMount)&&Me(w,_,u)}N&&ut(u,null,_,"beforeMount");const H=Il(m,k);H&&k.beforeEnter(S),r(S,d,g),((w=C&&C.onVnodeMounted)||H||N)&&de(()=>{w&&Me(w,_,u),H&&k.enter(S),N&&ut(u,null,_,"mounted")},m)},le=(u,d,g,_,m)=>{if(g&&y(u,g),_)for(let E=0;E<_.length;E++)y(u,_[E]);if(m){let E=m.subTree;if(d===E){const A=m.vnode;le(u,A,A.scopeId,A.slotScopeIds,m.parent)}}},we=(u,d,g,_,m,E,A,v,S=0)=>{for(let w=S;w<u.length;w++){const C=u[w]=v?Ze(u[w]):Ne(u[w]);P(null,C,d,g,_,m,E,A,v)}},ct=(u,d,g,_,m,E,A)=>{const v=d.el=u.el;let{patchFlag:S,dynamicChildren:w,dirs:C}=d;S|=u.patchFlag&16;const D=u.props||Z,k=d.props||Z;let N;if(g&&ft(g,!1),(N=k.onVnodeBeforeUpdate)&&Me(N,g,d,u),C&&ut(d,u,g,"beforeUpdate"),g&&ft(g,!0),w?xe(u.dynamicChildren,w,v,g,_,nr(d,m),E):A||W(u,d,v,null,g,_,nr(d,m),E,!1),S>0){if(S&16)Ge(v,d,D,k,g,_,m);else if(S&2&&D.class!==k.class&&s(v,"class",null,k.class,m),S&4&&s(v,"style",D.style,k.style,m),S&8){const H=d.dynamicProps;for(let J=0;J<H.length;J++){const X=H[J],re=D[X],ve=k[X];(ve!==re||X==="value")&&s(v,X,re,ve,m,u.children,g,_,ie)}}S&1&&u.children!==d.children&&l(v,d.children)}else!A&&w==null&&Ge(v,d,D,k,g,_,m);((N=k.onVnodeUpdated)||C)&&de(()=>{N&&Me(N,g,d,u),C&&ut(d,u,g,"updated")},_)},xe=(u,d,g,_,m,E,A)=>{for(let v=0;v<d.length;v++){const S=u[v],w=d[v],C=S.el&&(S.type===Se||!Ut(S,w)||S.shapeFlag&70)?h(S.el):g;P(S,w,C,null,_,m,E,A,!0)}},Ge=(u,d,g,_,m,E,A)=>{if(g!==_){if(g!==Z)for(const v in g)!Gt(v)&&!(v in _)&&s(u,v,g[v],null,A,d.children,m,E,ie);for(const v in _){if(Gt(v))continue;const S=_[v],w=g[v];S!==w&&v!=="value"&&s(u,v,w,S,A,d.children,m,E,ie)}"value"in _&&s(u,"value",g.value,_.value,A)}},lt=(u,d,g,_,m,E,A,v,S)=>{const w=d.el=u?u.el:c(""),C=d.anchor=u?u.anchor:c("");let{patchFlag:D,dynamicChildren:k,slotScopeIds:N}=d;N&&(v=v?v.concat(N):N),u==null?(r(w,g,_),r(C,g,_),we(d.children||[],g,C,m,E,A,v,S)):D>0&&D&64&&k&&u.dynamicChildren?(xe(u.dynamicChildren,k,g,m,E,A,v),(d.key!=null||m&&d===m.subTree)&&$i(u,d,!0)):W(u,d,g,C,m,E,A,v,S)},ke=(u,d,g,_,m,E,A,v,S)=>{d.slotScopeIds=v,u==null?d.shapeFlag&512?m.ctx.activate(d,g,_,A,S):Kt(d,g,_,m,E,A,S):It(u,d,S)},Kt=(u,d,g,_,m,E,A)=>{const v=u.component=Ml(u,_,m);if(Ai(u)&&(v.ctx.renderer=R),Nl(v),v.asyncDep){if(m&&m.registerDep(v,ne),!u.el){const S=v.subTree=he(rn);x(null,S,d,g)}}else ne(v,u,d,g,m,E,A)},It=(u,d,g)=>{const _=d.component=u.component;if(Vc(u,d,g))if(_.asyncDep&&!_.asyncResolved){G(_,d,g);return}else _.next=d,Nc(_.update),_.effect.dirty=!0,_.update();else d.el=u.el,_.vnode=d},ne=(u,d,g,_,m,E,A)=>{const v=()=>{if(u.isMounted){let{next:C,bu:D,u:k,parent:N,vnode:H}=u;{const Ct=Bi(u);if(Ct){C&&(C.el=H.el,G(u,C,A)),Ct.asyncDep.then(()=>{u.isUnmounted||v()});return}}let J=C,X;ft(u,!1),C?(C.el=H.el,G(u,C,A)):C=H,D&&Zn(D),(X=C.props&&C.props.onVnodeBeforeUpdate)&&Me(X,N,C,H),ft(u,!0);const re=er(u),ve=u.subTree;u.subTree=re,P(ve,re,h(ve.el),b(ve),u,m,E),C.el=re.el,J===null&&Uc(u,re.el),k&&de(k,m),(X=C.props&&C.props.onVnodeUpdated)&&de(()=>Me(X,N,C,H),m)}else{let C;const{el:D,props:k}=d,{bm:N,m:H,parent:J}=u,X=vn(d);if(ft(u,!1),N&&Zn(N),!X&&(C=k&&k.onVnodeBeforeMount)&&Me(C,J,d),ft(u,!0),D&&Q){const re=()=>{u.subTree=er(u),Q(D,u.subTree,u,m,null)};X?d.type.__asyncLoader().then(()=>!u.isUnmounted&&re()):re()}else{const re=u.subTree=er(u);P(null,re,g,_,u,m,E),d.el=re.el}if(H&&de(H,m),!X&&(C=k&&k.onVnodeMounted)){const re=d;de(()=>Me(C,J,re),m)}(d.shapeFlag&256||J&&vn(J.vnode)&&J.vnode.shapeFlag&256)&&u.a&&de(u.a,m),u.isMounted=!0,d=g=_=null}},S=u.effect=new Yr(v,_e,()=>oo(w),u.scope),w=u.update=()=>{S.dirty&&S.run()};w.id=u.uid,ft(u,!0),w()},G=(u,d,g)=>{d.component=u;const _=u.vnode.props;u.vnode=d,u.next=null,_l(u,d.props,_,g),vl(u,d.children,g),Et(),Vo(u),St()},W=(u,d,g,_,m,E,A,v,S=!1)=>{const w=u&&u.children,C=u?u.shapeFlag:0,D=d.children,{patchFlag:k,shapeFlag:N}=d;if(k>0){if(k&128){Je(w,D,g,_,m,E,A,v,S);return}else if(k&256){Le(w,D,g,_,m,E,A,v,S);return}}N&8?(C&16&&ie(w,m,E),D!==w&&l(g,D)):C&16?N&16?Je(w,D,g,_,m,E,A,v,S):ie(w,m,E,!0):(C&8&&l(g,""),N&16&&we(D,g,_,m,E,A,v,S))},Le=(u,d,g,_,m,E,A,v,S)=>{u=u||xt,d=d||xt;const w=u.length,C=d.length,D=Math.min(w,C);let k;for(k=0;k<D;k++){const N=d[k]=S?Ze(d[k]):Ne(d[k]);P(u[k],N,g,null,m,E,A,v,S)}w>C?ie(u,m,E,!0,!1,D):we(d,g,_,m,E,A,v,S,D)},Je=(u,d,g,_,m,E,A,v,S)=>{let w=0;const C=d.length;let D=u.length-1,k=C-1;for(;w<=D&&w<=k;){const N=u[w],H=d[w]=S?Ze(d[w]):Ne(d[w]);if(Ut(N,H))P(N,H,g,null,m,E,A,v,S);else break;w++}for(;w<=D&&w<=k;){const N=u[D],H=d[k]=S?Ze(d[k]):Ne(d[k]);if(Ut(N,H))P(N,H,g,null,m,E,A,v,S);else break;D--,k--}if(w>D){if(w<=k){const N=k+1,H=N<C?d[N].el:_;for(;w<=k;)P(null,d[w]=S?Ze(d[w]):Ne(d[w]),g,H,m,E,A,v,S),w++}}else if(w>k)for(;w<=D;)fe(u[w],m,E,!0),w++;else{const N=w,H=w,J=new Map;for(w=H;w<=k;w++){const be=d[w]=S?Ze(d[w]):Ne(d[w]);be.key!=null&&J.set(be.key,w)}let X,re=0;const ve=k-H+1;let Ct=!1,Do=0;const Vt=new Array(ve);for(w=0;w<ve;w++)Vt[w]=0;for(w=N;w<=D;w++){const be=u[w];if(re>=ve){fe(be,m,E,!0);continue}let Pe;if(be.key!=null)Pe=J.get(be.key);else for(X=H;X<=k;X++)if(Vt[X-H]===0&&Ut(be,d[X])){Pe=X;break}Pe===void 0?fe(be,m,E,!0):(Vt[Pe-H]=w+1,Pe>=Do?Do=Pe:Ct=!0,P(be,d[Pe],g,null,m,E,A,v,S),re++)}const Po=Ct?Al(Vt):xt;for(X=Po.length-1,w=ve-1;w>=0;w--){const be=H+w,Pe=d[be],Mo=be+1<C?d[be+1].el:_;Vt[w]===0?P(null,Pe,g,Mo,m,E,A,v,S):Ct&&(X<0||w!==Po[X]?De(Pe,g,Mo,2):X--)}}},De=(u,d,g,_,m=null)=>{const{el:E,type:A,transition:v,children:S,shapeFlag:w}=u;if(w&6){De(u.component.subTree,d,g,_);return}if(w&128){u.suspense.move(d,g,_);return}if(w&64){A.move(u,d,g,R);return}if(A===Se){r(E,d,g);for(let D=0;D<S.length;D++)De(S[D],d,g,_);r(u.anchor,d,g);return}if(A===rr){B(u,d,g);return}if(_!==2&&w&1&&v)if(_===0)v.beforeEnter(E),r(E,d,g),de(()=>v.enter(E),m);else{const{leave:D,delayLeave:k,afterLeave:N}=v,H=()=>r(E,d,g),J=()=>{D(E,()=>{H(),N&&N()})};k?k(E,H,J):J()}else r(E,d,g)},fe=(u,d,g,_=!1,m=!1)=>{const{type:E,props:A,ref:v,children:S,dynamicChildren:w,shapeFlag:C,patchFlag:D,dirs:k}=u;if(v!=null&&xr(v,null,g,u,!0),C&256){d.ctx.deactivate(u);return}const N=C&1&&k,H=!vn(u);let J;if(H&&(J=A&&A.onVnodeBeforeUnmount)&&Me(J,d,u),C&6)dn(u.component,g,_);else{if(C&128){u.suspense.unmount(g,_);return}N&&ut(u,null,d,"beforeUnmount"),C&64?u.type.remove(u,d,g,m,R,_):w&&(E!==Se||D>0&&D&64)?ie(w,d,g,!1,!0):(E===Se&&D&384||!m&&C&16)&&ie(S,d,g),_&&At(u)}(H&&(J=A&&A.onVnodeUnmounted)||N)&&de(()=>{J&&Me(J,d,u),N&&ut(u,null,d,"unmounted")},g)},At=u=>{const{type:d,el:g,anchor:_,transition:m}=u;if(d===Se){Tt(g,_);return}if(d===rr){U(u);return}const E=()=>{o(g),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(u.shapeFlag&1&&m&&!m.persisted){const{leave:A,delayLeave:v}=m,S=()=>A(g,E);v?v(u.el,E,S):S()}else E()},Tt=(u,d)=>{let g;for(;u!==d;)g=p(u),o(u),u=g;o(d)},dn=(u,d,g)=>{const{bum:_,scope:m,update:E,subTree:A,um:v}=u;_&&Zn(_),m.stop(),E&&(E.active=!1,fe(A,u,d,g)),v&&de(v,d),de(()=>{u.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},ie=(u,d,g,_=!1,m=!1,E=0)=>{for(let A=E;A<u.length;A++)fe(u[A],d,g,_,m)},b=u=>u.shapeFlag&6?b(u.component.subTree):u.shapeFlag&128?u.suspense.next():p(u.anchor||u.el);let T=!1;const I=(u,d,g)=>{u==null?d._vnode&&fe(d._vnode,null,null,!0):P(d._vnode||null,u,d,null,null,null,g),T||(T=!0,Vo(),_i(),T=!1),d._vnode=u},R={p:P,um:fe,m:De,r:At,mt:Kt,mc:we,pc:W,pbc:xe,n:b,o:e};let q,Q;return t&&([q,Q]=t(R)),{render:I,hydrate:q,createApp:ml(I,q)}}function nr({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function ft({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Il(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function $i(e,t,n=!1){const r=e.children,o=t.children;if(F(r)&&F(o))for(let s=0;s<r.length;s++){const i=r[s];let c=o[s];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=o[s]=Ze(o[s]),c.el=i.el),n||$i(i,c)),c.type===Wn&&(c.el=i.el)}}function Al(e){const t=e.slice(),n=[0];let r,o,s,i,c;const a=e.length;for(r=0;r<a;r++){const f=e[r];if(f!==0){if(o=n[n.length-1],e[o]<f){t[r]=o,n.push(r);continue}for(s=0,i=n.length-1;s<i;)c=s+i>>1,e[n[c]]<f?s=c+1:i=c;f<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}for(s=n.length,i=n[s-1];s-- >0;)n[s]=i,i=t[i];return n}function Bi(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Bi(t)}const Tl=e=>e.__isTeleport,Se=Symbol.for("v-fgt"),Wn=Symbol.for("v-txt"),rn=Symbol.for("v-cmt"),rr=Symbol.for("v-stc"),Qt=[];let Te=null;function lo(e=!1){Qt.push(Te=e?null:[])}function Cl(){Qt.pop(),Te=Qt[Qt.length-1]||null}let on=1;function es(e){on+=e}function Li(e){return e.dynamicChildren=on>0?Te||xt:null,Cl(),on>0&&Te&&Te.push(e),e}function Fi(e,t,n,r,o,s){return Li(pe(e,t,n,r,o,s,!0))}function Ol(e,t,n,r,o){return Li(he(e,t,n,r,o,!0))}function kr(e){return e?e.__v_isVNode===!0:!1}function Ut(e,t){return e.type===t.type&&e.key===t.key}const qn="__vInternal",ji=({key:e})=>e??null,Sn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?se(e)||me(e)||j(e)?{i:Ae,r:e,k:t,f:!!n}:e:null);function pe(e,t=null,n=null,r=0,o=null,s=e===Se?0:1,i=!1,c=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ji(t),ref:t&&Sn(t),scopeId:Vn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:Ae};return c?(uo(a,n),s&128&&e.normalize(a)):n&&(a.shapeFlag|=se(n)?8:16),on>0&&!i&&Te&&(a.patchFlag>0||s&6)&&a.patchFlag!==32&&Te.push(a),a}const he=Rl;function Rl(e,t=null,n=null,r=0,o=null,s=!1){if((!e||e===Wc)&&(e=rn),kr(e)){const c=$t(e,t,!0);return n&&uo(c,n),on>0&&!s&&Te&&(c.shapeFlag&6?Te[Te.indexOf(e)]=c:Te.push(c)),c.patchFlag|=-2,c}if(jl(e)&&(e=e.__vccOpts),t){t=xl(t);let{class:c,style:a}=t;c&&!se(c)&&(t.class=Jr(c)),ee(a)&&(li(a)&&!F(a)&&(a=oe({},a)),t.style=Gr(a))}const i=se(e)?1:zc(e)?128:Tl(e)?64:ee(e)?4:j(e)?2:0;return pe(e,t,n,r,o,i,s,!0)}function xl(e){return e?li(e)||qn in e?oe({},e):e:null}function $t(e,t,n=!1){const{props:r,ref:o,patchFlag:s,children:i}=e,c=t?kl(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&ji(c),ref:t&&t.ref?n&&o?F(o)?o.concat(Sn(t)):[o,Sn(t)]:Sn(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Se?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&$t(e.ssContent),ssFallback:e.ssFallback&&$t(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function We(e=" ",t=0){return he(Wn,null,e,t)}function Ne(e){return e==null||typeof e=="boolean"?he(rn):F(e)?he(Se,null,e.slice()):typeof e=="object"?Ze(e):he(Wn,null,String(e))}function Ze(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:$t(e)}function uo(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(F(t))n=16;else if(typeof t=="object")if(r&65){const o=t.default;o&&(o._c&&(o._d=!1),uo(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!(qn in t)?t._ctx=Ae:o===3&&Ae&&(Ae.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else j(t)?(t={default:t,_ctx:Ae},n=32):(t=String(t),r&64?(n=16,t=[We(t)]):n=8);e.children=t,e.shapeFlag|=n}function kl(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const o in r)if(o==="class")t.class!==r.class&&(t.class=Jr([t.class,r.class]));else if(o==="style")t.style=Gr([t.style,r.style]);else if(Mn(o)){const s=t[o],i=r[o];i&&s!==i&&!(F(s)&&s.includes(i))&&(t[o]=s?[].concat(s,i):i)}else o!==""&&(t[o]=r[o])}return t}function Me(e,t,n,r=null){Ce(e,t,7,[n,r])}const Dl=xi();let Pl=0;function Ml(e,t,n){const r=e.type,o=(t?t.appContext:e.appContext)||Dl,s={uid:Pl++,vnode:e,type:r,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new ic(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Di(r,o),emitsOptions:wi(r,o),emit:null,emitted:null,propsDefaults:Z,inheritAttrs:r.inheritAttrs,ctx:Z,data:Z,props:Z,attrs:Z,slots:Z,refs:Z,setupState:Z,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=Lc.bind(null,s),e.ce&&e.ce(s),s}let ce=null,Rn,Dr;{const e=Gs(),t=(n,r)=>{let o;return(o=e[n])||(o=e[n]=[]),o.push(r),s=>{o.length>1?o.forEach(i=>i(s)):o[0](s)}};Rn=t("__VUE_INSTANCE_SETTERS__",n=>ce=n),Dr=t("__VUE_SSR_SETTERS__",n=>zn=n)}const un=e=>{const t=ce;return Rn(e),e.scope.on(),()=>{e.scope.off(),Rn(t)}},ts=()=>{ce&&ce.scope.off(),Rn(null)};function Hi(e){return e.vnode.shapeFlag&4}let zn=!1;function Nl(e,t=!1){t&&Dr(t);const{props:n,children:r}=e.vnode,o=Hi(e);bl(e,n,o,t),wl(e,r);const s=o?$l(e,t):void 0;return t&&Dr(!1),s}function $l(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=ui(new Proxy(e.ctx,ll));const{setup:r}=n;if(r){const o=e.setupContext=r.length>1?Ll(e):null,s=un(e);Et();const i=rt(r,e,0,[e.props,o]);if(St(),s(),zs(i)){if(i.then(ts,ts),t)return i.then(c=>{ns(e,c,t)}).catch(c=>{Hn(c,e,0)});e.asyncDep=i}else ns(e,i,t)}else Ki(e,t)}function ns(e,t,n){j(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ee(t)&&(e.setupState=pi(t)),Ki(e,n)}let rs;function Ki(e,t,n){const r=e.type;if(!e.render){if(!t&&rs&&!r.render){const o=r.template||ao(e).template;if(o){const{isCustomElement:s,compilerOptions:i}=e.appContext.config,{delimiters:c,compilerOptions:a}=r,f=oe(oe({isCustomElement:s,delimiters:c},i),a);r.render=rs(o,f)}}e.render=r.render||_e}{const o=un(e);Et();try{ul(e)}finally{St(),o()}}}function Bl(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return ge(e,"get","$attrs"),t[n]}}))}function Ll(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return Bl(e)},slots:e.slots,emit:e.emit,expose:t}}function fo(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(pi(ui(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Jt)return Jt[n](e)},has(t,n){return n in t||n in Jt}}))}function Fl(e,t=!0){return j(e)?e.displayName||e.name:e.name||t&&e.__name}function jl(e){return j(e)&&"__vccOpts"in e}const Ie=(e,t)=>Oc(e,t,zn);function Vi(e,t,n){const r=arguments.length;return r===2?ee(t)&&!F(t)?kr(t)?he(e,null,[t]):he(e,t):he(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&kr(n)&&(n=[n]),he(e,t,n))}const Hl="3.4.21";/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Kl="http://www.w3.org/2000/svg",Vl="http://www.w3.org/1998/Math/MathML",et=typeof document<"u"?document:null,os=et&&et.createElement("template"),Ul={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const o=t==="svg"?et.createElementNS(Kl,e):t==="mathml"?et.createElementNS(Vl,e):et.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&o.setAttribute("multiple",r.multiple),o},createText:e=>et.createTextNode(e),createComment:e=>et.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>et.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,o,s){const i=n?n.previousSibling:t.lastChild;if(o&&(o===s||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===s||!(o=o.nextSibling)););else{os.innerHTML=r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e;const c=os.content;if(r==="svg"||r==="mathml"){const a=c.firstChild;for(;a.firstChild;)c.appendChild(a.firstChild);c.removeChild(a)}t.insertBefore(c,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Wl=Symbol("_vtc");function ql(e,t,n){const r=e[Wl];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const ss=Symbol("_vod"),zl=Symbol("_vsh"),Gl=Symbol(""),Jl=/(^|;)\s*display\s*:/;function Yl(e,t,n){const r=e.style,o=se(n);let s=!1;if(n&&!o){if(t)if(se(t))for(const i of t.split(";")){const c=i.slice(0,i.indexOf(":")).trim();n[c]==null&&In(r,c,"")}else for(const i in t)n[i]==null&&In(r,i,"");for(const i in n)i==="display"&&(s=!0),In(r,i,n[i])}else if(o){if(t!==n){const i=r[Gl];i&&(n+=";"+i),r.cssText=n,s=Jl.test(n)}}else t&&e.removeAttribute("style");ss in e&&(e[ss]=s?r.display:"",e[zl]&&(r.display="none"))}const is=/\s*!important$/;function In(e,t,n){if(F(n))n.forEach(r=>In(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Ql(e,t);is.test(n)?e.setProperty(Ft(r),n.replace(is,""),"important"):e[r]=n}}const as=["Webkit","Moz","ms"],or={};function Ql(e,t){const n=or[t];if(n)return n;let r=Be(t);if(r!=="filter"&&r in e)return or[t]=r;r=Ln(r);for(let o=0;o<as.length;o++){const s=as[o]+r;if(s in e)return or[t]=s}return t}const cs="http://www.w3.org/1999/xlink";function Xl(e,t,n,r,o){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(cs,t.slice(6,t.length)):e.setAttributeNS(cs,t,n);else{const s=sc(t);n==null||s&&!Js(n)?e.removeAttribute(t):e.setAttribute(t,s?"":n)}}function Zl(e,t,n,r,o,s,i){if(t==="innerHTML"||t==="textContent"){r&&i(r,o,s),e[t]=n??"";return}const c=e.tagName;if(t==="value"&&c!=="PROGRESS"&&!c.includes("-")){const f=c==="OPTION"?e.getAttribute("value")||"":e.value,l=n??"";(f!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let a=!1;if(n===""||n==null){const f=typeof e[t];f==="boolean"?n=Js(n):n==null&&f==="string"?(n="",a=!0):f==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(t)}function eu(e,t,n,r){e.addEventListener(t,n,r)}function tu(e,t,n,r){e.removeEventListener(t,n,r)}const ls=Symbol("_vei");function nu(e,t,n,r,o=null){const s=e[ls]||(e[ls]={}),i=s[t];if(r&&i)i.value=r;else{const[c,a]=ru(t);if(r){const f=s[t]=iu(r,o);eu(e,c,f,a)}else i&&(tu(e,c,i,a),s[t]=void 0)}}const us=/(?:Once|Passive|Capture)$/;function ru(e){let t;if(us.test(e)){t={};let r;for(;r=e.match(us);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Ft(e.slice(2)),t]}let sr=0;const ou=Promise.resolve(),su=()=>sr||(ou.then(()=>sr=0),sr=Date.now());function iu(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ce(au(r,n.value),t,5,[r])};return n.value=e,n.attached=su(),n}function au(e,t){if(F(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>o=>!o._stopped&&r&&r(o))}else return t}const fs=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,cu=(e,t,n,r,o,s,i,c,a)=>{const f=o==="svg";t==="class"?ql(e,r,f):t==="style"?Yl(e,n,r):Mn(t)?Wr(t)||nu(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):lu(e,t,r,f))?Zl(e,t,r,s,i,c,a):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Xl(e,t,r,f))};function lu(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&fs(t)&&j(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const o=e.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return fs(t)&&se(n)?!1:t in e}const uu=oe({patchProp:cu},Ul);let ds;function fu(){return ds||(ds=El(uu))}const du=(...e)=>{const t=fu().createApp(...e),{mount:n}=t;return t.mount=r=>{const o=pu(r);if(!o)return;const s=t._component;!j(s)&&!s.render&&!s.template&&(s.template=o.innerHTML),o.innerHTML="";const i=n(o,!1,hu(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),i},t};function hu(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function pu(e){return se(e)?document.querySelector(e):e}const gu={__name:"App",setup(e){return Ci(async()=>{Notification.permission!=="granted"&&await Notification.requestPermission()}),(n,r)=>{const o=io("RouterView");return lo(),Ol(o)}}};/*!
  * vue-router v4.3.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Ot=typeof document<"u";function mu(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const z=Object.assign;function ir(e,t){const n={};for(const r in t){const o=t[r];n[r]=Re(o)?o.map(e):e(o)}return n}const Xt=()=>{},Re=Array.isArray,Ui=/#/g,bu=/&/g,_u=/\//g,yu=/=/g,wu=/\?/g,Wi=/\+/g,vu=/%5B/g,Eu=/%5D/g,qi=/%5E/g,Su=/%60/g,zi=/%7B/g,Iu=/%7C/g,Gi=/%7D/g,Au=/%20/g;function ho(e){return encodeURI(""+e).replace(Iu,"|").replace(vu,"[").replace(Eu,"]")}function Tu(e){return ho(e).replace(zi,"{").replace(Gi,"}").replace(qi,"^")}function Pr(e){return ho(e).replace(Wi,"%2B").replace(Au,"+").replace(Ui,"%23").replace(bu,"%26").replace(Su,"`").replace(zi,"{").replace(Gi,"}").replace(qi,"^")}function Cu(e){return Pr(e).replace(yu,"%3D")}function Ou(e){return ho(e).replace(Ui,"%23").replace(wu,"%3F")}function Ru(e){return e==null?"":Ou(e).replace(_u,"%2F")}function sn(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const xu=/\/$/,ku=e=>e.replace(xu,"");function ar(e,t,n="/"){let r,o={},s="",i="";const c=t.indexOf("#");let a=t.indexOf("?");return c<a&&c>=0&&(a=-1),a>-1&&(r=t.slice(0,a),s=t.slice(a+1,c>-1?c:t.length),o=e(s)),c>-1&&(r=r||t.slice(0,c),i=t.slice(c,t.length)),r=Nu(r??t,n),{fullPath:r+(s&&"?")+s+i,path:r,query:o,hash:sn(i)}}function Du(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function hs(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Pu(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&Bt(t.matched[r],n.matched[o])&&Ji(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Bt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ji(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Mu(e[n],t[n]))return!1;return!0}function Mu(e,t){return Re(e)?ps(e,t):Re(t)?ps(t,e):e===t}function ps(e,t){return Re(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Nu(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),o=r[r.length-1];(o===".."||o===".")&&r.push("");let s=n.length-1,i,c;for(i=0;i<r.length;i++)if(c=r[i],c!==".")if(c==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i).join("/")}var an;(function(e){e.pop="pop",e.push="push"})(an||(an={}));var Zt;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Zt||(Zt={}));function $u(e){if(!e)if(Ot){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),ku(e)}const Bu=/^[^#]+#/;function Lu(e,t){return e.replace(Bu,"#")+t}function Fu(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Gn=()=>({left:window.scrollX,top:window.scrollY});function ju(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=Fu(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function gs(e,t){return(history.state?history.state.position-t:-1)+e}const Mr=new Map;function Hu(e,t){Mr.set(e,t)}function Ku(e){const t=Mr.get(e);return Mr.delete(e),t}let Vu=()=>location.protocol+"//"+location.host;function Yi(e,t){const{pathname:n,search:r,hash:o}=t,s=e.indexOf("#");if(s>-1){let c=o.includes(e.slice(s))?e.slice(s).length:1,a=o.slice(c);return a[0]!=="/"&&(a="/"+a),hs(a,"")}return hs(n,e)+r+o}function Uu(e,t,n,r){let o=[],s=[],i=null;const c=({state:p})=>{const y=Yi(e,location),O=n.value,P=t.value;let $=0;if(p){if(n.value=y,t.value=p,i&&i===O){i=null;return}$=P?p.position-P.position:0}else r(y);o.forEach(x=>{x(n.value,O,{delta:$,type:an.pop,direction:$?$>0?Zt.forward:Zt.back:Zt.unknown})})};function a(){i=n.value}function f(p){o.push(p);const y=()=>{const O=o.indexOf(p);O>-1&&o.splice(O,1)};return s.push(y),y}function l(){const{history:p}=window;p.state&&p.replaceState(z({},p.state,{scroll:Gn()}),"")}function h(){for(const p of s)p();s=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",l,{passive:!0}),{pauseListeners:a,listen:f,destroy:h}}function ms(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?Gn():null}}function Wu(e){const{history:t,location:n}=window,r={value:Yi(e,n)},o={value:t.state};o.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(a,f,l){const h=e.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?e:e.slice(h))+a:Vu()+e+a;try{t[l?"replaceState":"pushState"](f,"",p),o.value=f}catch(y){console.error(y),n[l?"replace":"assign"](p)}}function i(a,f){const l=z({},t.state,ms(o.value.back,a,o.value.forward,!0),f,{position:o.value.position});s(a,l,!0),r.value=a}function c(a,f){const l=z({},o.value,t.state,{forward:a,scroll:Gn()});s(l.current,l,!0);const h=z({},ms(r.value,a,null),{position:l.position+1},f);s(a,h,!1),r.value=a}return{location:r,state:o,push:c,replace:i}}function qu(e){e=$u(e);const t=Wu(e),n=Uu(e,t.state,t.location,t.replace);function r(s,i=!0){i||n.pauseListeners(),history.go(s)}const o=z({location:"",base:e,go:r,createHref:Lu.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function zu(e){return typeof e=="string"||e&&typeof e=="object"}function Qi(e){return typeof e=="string"||typeof e=="symbol"}const Qe={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Xi=Symbol("");var bs;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(bs||(bs={}));function Lt(e,t){return z(new Error,{type:e,[Xi]:!0},t)}function Fe(e,t){return e instanceof Error&&Xi in e&&(t==null||!!(e.type&t))}const _s="[^/]+?",Gu={sensitive:!1,strict:!1,start:!0,end:!0},Ju=/[.+*?^${}()[\]/\\]/g;function Yu(e,t){const n=z({},Gu,t),r=[];let o=n.start?"^":"";const s=[];for(const f of e){const l=f.length?[]:[90];n.strict&&!f.length&&(o+="/");for(let h=0;h<f.length;h++){const p=f[h];let y=40+(n.sensitive?.25:0);if(p.type===0)h||(o+="/"),o+=p.value.replace(Ju,"\\$&"),y+=40;else if(p.type===1){const{value:O,repeatable:P,optional:$,regexp:x}=p;s.push({name:O,repeatable:P,optional:$});const M=x||_s;if(M!==_s){y+=10;try{new RegExp(`(${M})`)}catch(U){throw new Error(`Invalid custom RegExp for param "${O}" (${M}): `+U.message)}}let B=P?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;h||(B=$&&f.length<2?`(?:/${B})`:"/"+B),$&&(B+="?"),o+=B,y+=20,$&&(y+=-8),P&&(y+=-20),M===".*"&&(y+=-50)}l.push(y)}r.push(l)}if(n.strict&&n.end){const f=r.length-1;r[f][r[f].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const i=new RegExp(o,n.sensitive?"":"i");function c(f){const l=f.match(i),h={};if(!l)return null;for(let p=1;p<l.length;p++){const y=l[p]||"",O=s[p-1];h[O.name]=y&&O.repeatable?y.split("/"):y}return h}function a(f){let l="",h=!1;for(const p of e){(!h||!l.endsWith("/"))&&(l+="/"),h=!1;for(const y of p)if(y.type===0)l+=y.value;else if(y.type===1){const{value:O,repeatable:P,optional:$}=y,x=O in f?f[O]:"";if(Re(x)&&!P)throw new Error(`Provided param "${O}" is an array but it is not repeatable (* or + modifiers)`);const M=Re(x)?x.join("/"):x;if(!M)if($)p.length<2&&(l.endsWith("/")?l=l.slice(0,-1):h=!0);else throw new Error(`Missing required param "${O}"`);l+=M}}return l||"/"}return{re:i,score:r,keys:s,parse:c,stringify:a}}function Qu(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Xu(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const s=Qu(r[n],o[n]);if(s)return s;n++}if(Math.abs(o.length-r.length)===1){if(ys(r))return 1;if(ys(o))return-1}return o.length-r.length}function ys(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Zu={type:0,value:""},ef=/[a-zA-Z0-9_]/;function tf(e){if(!e)return[[]];if(e==="/")return[[Zu]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(y){throw new Error(`ERR (${n})/"${f}": ${y}`)}let n=0,r=n;const o=[];let s;function i(){s&&o.push(s),s=[]}let c=0,a,f="",l="";function h(){f&&(n===0?s.push({type:0,value:f}):n===1||n===2||n===3?(s.length>1&&(a==="*"||a==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:f,regexp:l,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):t("Invalid state to consume buffer"),f="")}function p(){f+=a}for(;c<e.length;){if(a=e[c++],a==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:a==="/"?(f&&h(),i()):a===":"?(h(),n=1):p();break;case 4:p(),n=r;break;case 1:a==="("?n=2:ef.test(a)?p():(h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--);break;case 2:a===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--,l="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),h(),i(),o}function nf(e,t,n){const r=Yu(tf(e.path),n),o=z(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function rf(e,t){const n=[],r=new Map;t=Es({strict:!1,end:!0,sensitive:!1},t);function o(l){return r.get(l)}function s(l,h,p){const y=!p,O=of(l);O.aliasOf=p&&p.record;const P=Es(t,l),$=[O];if("alias"in l){const B=typeof l.alias=="string"?[l.alias]:l.alias;for(const U of B)$.push(z({},O,{components:p?p.record.components:O.components,path:U,aliasOf:p?p.record:O}))}let x,M;for(const B of $){const{path:U}=B;if(h&&U[0]!=="/"){const te=h.record.path,L=te[te.length-1]==="/"?"":"/";B.path=h.record.path+(U&&L+U)}if(x=nf(B,h,P),p?p.alias.push(x):(M=M||x,M!==x&&M.alias.push(x),y&&l.name&&!vs(x)&&i(l.name)),O.children){const te=O.children;for(let L=0;L<te.length;L++)s(te[L],x,p&&p.children[L])}p=p||x,(x.record.components&&Object.keys(x.record.components).length||x.record.name||x.record.redirect)&&a(x)}return M?()=>{i(M)}:Xt}function i(l){if(Qi(l)){const h=r.get(l);h&&(r.delete(l),n.splice(n.indexOf(h),1),h.children.forEach(i),h.alias.forEach(i))}else{const h=n.indexOf(l);h>-1&&(n.splice(h,1),l.record.name&&r.delete(l.record.name),l.children.forEach(i),l.alias.forEach(i))}}function c(){return n}function a(l){let h=0;for(;h<n.length&&Xu(l,n[h])>=0&&(l.record.path!==n[h].record.path||!Zi(l,n[h]));)h++;n.splice(h,0,l),l.record.name&&!vs(l)&&r.set(l.record.name,l)}function f(l,h){let p,y={},O,P;if("name"in l&&l.name){if(p=r.get(l.name),!p)throw Lt(1,{location:l});P=p.record.name,y=z(ws(h.params,p.keys.filter(M=>!M.optional).concat(p.parent?p.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),l.params&&ws(l.params,p.keys.map(M=>M.name))),O=p.stringify(y)}else if(l.path!=null)O=l.path,p=n.find(M=>M.re.test(O)),p&&(y=p.parse(O),P=p.record.name);else{if(p=h.name?r.get(h.name):n.find(M=>M.re.test(h.path)),!p)throw Lt(1,{location:l,currentLocation:h});P=p.record.name,y=z({},h.params,l.params),O=p.stringify(y)}const $=[];let x=p;for(;x;)$.unshift(x.record),x=x.parent;return{name:P,path:O,params:y,matched:$,meta:af($)}}return e.forEach(l=>s(l)),{addRoute:s,resolve:f,removeRoute:i,getRoutes:c,getRecordMatcher:o}}function ws(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function of(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:sf(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function sf(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function vs(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function af(e){return e.reduce((t,n)=>z(t,n.meta),{})}function Es(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Zi(e,t){return t.children.some(n=>n===e||Zi(e,n))}function cf(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<r.length;++o){const s=r[o].replace(Wi," "),i=s.indexOf("="),c=sn(i<0?s:s.slice(0,i)),a=i<0?null:sn(s.slice(i+1));if(c in t){let f=t[c];Re(f)||(f=t[c]=[f]),f.push(a)}else t[c]=a}return t}function Ss(e){let t="";for(let n in e){const r=e[n];if(n=Cu(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Re(r)?r.map(s=>s&&Pr(s)):[r&&Pr(r)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function lf(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Re(r)?r.map(o=>o==null?null:""+o):r==null?r:""+r)}return t}const uf=Symbol(""),Is=Symbol(""),po=Symbol(""),ea=Symbol(""),Nr=Symbol("");function Wt(){let e=[];function t(r){return e.push(r),()=>{const o=e.indexOf(r);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function tt(e,t,n,r,o,s=i=>i()){const i=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((c,a)=>{const f=p=>{p===!1?a(Lt(4,{from:n,to:t})):p instanceof Error?a(p):zu(p)?a(Lt(2,{from:t,to:p})):(i&&r.enterCallbacks[o]===i&&typeof p=="function"&&i.push(p),c())},l=s(()=>e.call(r&&r.instances[o],t,n,f));let h=Promise.resolve(l);e.length<3&&(h=h.then(f)),h.catch(p=>a(p))})}function cr(e,t,n,r,o=s=>s()){const s=[];for(const i of e)for(const c in i.components){let a=i.components[c];if(!(t!=="beforeRouteEnter"&&!i.instances[c]))if(ff(a)){const l=(a.__vccOpts||a)[t];l&&s.push(tt(l,n,r,i,c,o))}else{let f=a();s.push(()=>f.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${c}" at "${i.path}"`));const h=mu(l)?l.default:l;i.components[c]=h;const y=(h.__vccOpts||h)[t];return y&&tt(y,n,r,i,c,o)()}))}}return s}function ff(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function As(e){const t=Ve(po),n=Ve(ea),r=Ie(()=>t.resolve(Dt(e.to))),o=Ie(()=>{const{matched:a}=r.value,{length:f}=a,l=a[f-1],h=n.matched;if(!l||!h.length)return-1;const p=h.findIndex(Bt.bind(null,l));if(p>-1)return p;const y=Ts(a[f-2]);return f>1&&Ts(l)===y&&h[h.length-1].path!==y?h.findIndex(Bt.bind(null,a[f-2])):p}),s=Ie(()=>o.value>-1&&gf(n.params,r.value.params)),i=Ie(()=>o.value>-1&&o.value===n.matched.length-1&&Ji(n.params,r.value.params));function c(a={}){return pf(a)?t[Dt(e.replace)?"replace":"push"](Dt(e.to)).catch(Xt):Promise.resolve()}return{route:r,href:Ie(()=>r.value.href),isActive:s,isExactActive:i,navigate:c}}const df=Ii({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:As,setup(e,{slots:t}){const n=jn(As(e)),{options:r}=Ve(po),o=Ie(()=>({[Cs(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Cs(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=t.default&&t.default(n);return e.custom?s:Vi("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},s)}}}),hf=df;function pf(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function gf(e,t){for(const n in t){const r=t[n],o=e[n];if(typeof r=="string"){if(r!==o)return!1}else if(!Re(o)||o.length!==r.length||r.some((s,i)=>s!==o[i]))return!1}return!0}function Ts(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Cs=(e,t,n)=>e??t??n,mf=Ii({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Ve(Nr),o=Ie(()=>e.route||r.value),s=Ve(Is,0),i=Ie(()=>{let f=Dt(s);const{matched:l}=o.value;let h;for(;(h=l[f])&&!h.components;)f++;return f}),c=Ie(()=>o.value.matched[i.value]);En(Is,Ie(()=>i.value+1)),En(uf,c),En(Nr,o);const a=Rc();return wn(()=>[a.value,c.value,e.name],([f,l,h],[p,y,O])=>{l&&(l.instances[h]=f,y&&y!==l&&f&&f===p&&(l.leaveGuards.size||(l.leaveGuards=y.leaveGuards),l.updateGuards.size||(l.updateGuards=y.updateGuards))),f&&l&&(!y||!Bt(l,y)||!p)&&(l.enterCallbacks[h]||[]).forEach(P=>P(f))},{flush:"post"}),()=>{const f=o.value,l=e.name,h=c.value,p=h&&h.components[l];if(!p)return Os(n.default,{Component:p,route:f});const y=h.props[l],O=y?y===!0?f.params:typeof y=="function"?y(f):y:null,$=Vi(p,z({},O,t,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(h.instances[l]=null)},ref:a}));return Os(n.default,{Component:$,route:f})||$}}});function Os(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const bf=mf;function _f(e){const t=rf(e.routes,e),n=e.parseQuery||cf,r=e.stringifyQuery||Ss,o=e.history,s=Wt(),i=Wt(),c=Wt(),a=xc(Qe);let f=Qe;Ot&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=ir.bind(null,b=>""+b),h=ir.bind(null,Ru),p=ir.bind(null,sn);function y(b,T){let I,R;return Qi(b)?(I=t.getRecordMatcher(b),R=T):R=b,t.addRoute(R,I)}function O(b){const T=t.getRecordMatcher(b);T&&t.removeRoute(T)}function P(){return t.getRoutes().map(b=>b.record)}function $(b){return!!t.getRecordMatcher(b)}function x(b,T){if(T=z({},T||a.value),typeof b=="string"){const d=ar(n,b,T.path),g=t.resolve({path:d.path},T),_=o.createHref(d.fullPath);return z(d,g,{params:p(g.params),hash:sn(d.hash),redirectedFrom:void 0,href:_})}let I;if(b.path!=null)I=z({},b,{path:ar(n,b.path,T.path).path});else{const d=z({},b.params);for(const g in d)d[g]==null&&delete d[g];I=z({},b,{params:h(d)}),T.params=h(T.params)}const R=t.resolve(I,T),q=b.hash||"";R.params=l(p(R.params));const Q=Du(r,z({},b,{hash:Tu(q),path:R.path})),u=o.createHref(Q);return z({fullPath:Q,hash:q,query:r===Ss?lf(b.query):b.query||{}},R,{redirectedFrom:void 0,href:u})}function M(b){return typeof b=="string"?ar(n,b,a.value.path):z({},b)}function B(b,T){if(f!==b)return Lt(8,{from:T,to:b})}function U(b){return le(b)}function te(b){return U(z(M(b),{replace:!0}))}function L(b){const T=b.matched[b.matched.length-1];if(T&&T.redirect){const{redirect:I}=T;let R=typeof I=="function"?I(b):I;return typeof R=="string"&&(R=R.includes("?")||R.includes("#")?R=M(R):{path:R},R.params={}),z({query:b.query,hash:b.hash,params:R.path!=null?{}:b.params},R)}}function le(b,T){const I=f=x(b),R=a.value,q=b.state,Q=b.force,u=b.replace===!0,d=L(I);if(d)return le(z(M(d),{state:typeof d=="object"?z({},q,d.state):q,force:Q,replace:u}),T||I);const g=I;g.redirectedFrom=T;let _;return!Q&&Pu(r,R,I)&&(_=Lt(16,{to:g,from:R}),De(R,R,!0,!1)),(_?Promise.resolve(_):xe(g,R)).catch(m=>Fe(m)?Fe(m,2)?m:Je(m):W(m,g,R)).then(m=>{if(m){if(Fe(m,2))return le(z({replace:u},M(m.to),{state:typeof m.to=="object"?z({},q,m.to.state):q,force:Q}),T||g)}else m=lt(g,R,!0,u,q);return Ge(g,R,m),m})}function we(b,T){const I=B(b,T);return I?Promise.reject(I):Promise.resolve()}function ct(b){const T=Tt.values().next().value;return T&&typeof T.runWithContext=="function"?T.runWithContext(b):b()}function xe(b,T){let I;const[R,q,Q]=yf(b,T);I=cr(R.reverse(),"beforeRouteLeave",b,T);for(const d of R)d.leaveGuards.forEach(g=>{I.push(tt(g,b,T))});const u=we.bind(null,b,T);return I.push(u),ie(I).then(()=>{I=[];for(const d of s.list())I.push(tt(d,b,T));return I.push(u),ie(I)}).then(()=>{I=cr(q,"beforeRouteUpdate",b,T);for(const d of q)d.updateGuards.forEach(g=>{I.push(tt(g,b,T))});return I.push(u),ie(I)}).then(()=>{I=[];for(const d of Q)if(d.beforeEnter)if(Re(d.beforeEnter))for(const g of d.beforeEnter)I.push(tt(g,b,T));else I.push(tt(d.beforeEnter,b,T));return I.push(u),ie(I)}).then(()=>(b.matched.forEach(d=>d.enterCallbacks={}),I=cr(Q,"beforeRouteEnter",b,T,ct),I.push(u),ie(I))).then(()=>{I=[];for(const d of i.list())I.push(tt(d,b,T));return I.push(u),ie(I)}).catch(d=>Fe(d,8)?d:Promise.reject(d))}function Ge(b,T,I){c.list().forEach(R=>ct(()=>R(b,T,I)))}function lt(b,T,I,R,q){const Q=B(b,T);if(Q)return Q;const u=T===Qe,d=Ot?history.state:{};I&&(R||u?o.replace(b.fullPath,z({scroll:u&&d&&d.scroll},q)):o.push(b.fullPath,q)),a.value=b,De(b,T,I,u),Je()}let ke;function Kt(){ke||(ke=o.listen((b,T,I)=>{if(!dn.listening)return;const R=x(b),q=L(R);if(q){le(z(q,{replace:!0}),R).catch(Xt);return}f=R;const Q=a.value;Ot&&Hu(gs(Q.fullPath,I.delta),Gn()),xe(R,Q).catch(u=>Fe(u,12)?u:Fe(u,2)?(le(u.to,R).then(d=>{Fe(d,20)&&!I.delta&&I.type===an.pop&&o.go(-1,!1)}).catch(Xt),Promise.reject()):(I.delta&&o.go(-I.delta,!1),W(u,R,Q))).then(u=>{u=u||lt(R,Q,!1),u&&(I.delta&&!Fe(u,8)?o.go(-I.delta,!1):I.type===an.pop&&Fe(u,20)&&o.go(-1,!1)),Ge(R,Q,u)}).catch(Xt)}))}let It=Wt(),ne=Wt(),G;function W(b,T,I){Je(b);const R=ne.list();return R.length?R.forEach(q=>q(b,T,I)):console.error(b),Promise.reject(b)}function Le(){return G&&a.value!==Qe?Promise.resolve():new Promise((b,T)=>{It.add([b,T])})}function Je(b){return G||(G=!b,Kt(),It.list().forEach(([T,I])=>b?I(b):T()),It.reset()),b}function De(b,T,I,R){const{scrollBehavior:q}=e;if(!Ot||!q)return Promise.resolve();const Q=!I&&Ku(gs(b.fullPath,0))||(R||!I)&&history.state&&history.state.scroll||null;return mi().then(()=>q(b,T,Q)).then(u=>u&&ju(u)).catch(u=>W(u,b,T))}const fe=b=>o.go(b);let At;const Tt=new Set,dn={currentRoute:a,listening:!0,addRoute:y,removeRoute:O,hasRoute:$,getRoutes:P,resolve:x,options:e,push:U,replace:te,go:fe,back:()=>fe(-1),forward:()=>fe(1),beforeEach:s.add,beforeResolve:i.add,afterEach:c.add,onError:ne.add,isReady:Le,install(b){const T=this;b.component("RouterLink",hf),b.component("RouterView",bf),b.config.globalProperties.$router=T,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>Dt(a)}),Ot&&!At&&a.value===Qe&&(At=!0,U(o.location).catch(q=>{}));const I={};for(const q in Qe)Object.defineProperty(I,q,{get:()=>a.value[q],enumerable:!0});b.provide(po,T),b.provide(ea,ai(I)),b.provide(Nr,a);const R=b.unmount;Tt.add(b),b.unmount=function(){Tt.delete(b),Tt.size<1&&(f=Qe,ke&&ke(),ke=null,a.value=Qe,At=!1,G=!1),R()}}};function ie(b){return b.reduce((T,I)=>T.then(()=>ct(I)),Promise.resolve())}return dn}function yf(e,t){const n=[],r=[],o=[],s=Math.max(t.matched.length,e.matched.length);for(let i=0;i<s;i++){const c=t.matched[i];c&&(e.matched.find(f=>Bt(f,c))?r.push(c):n.push(c));const a=e.matched[i];a&&(t.matched.find(f=>Bt(f,a))||o.push(a))}return[n,r,o]}const ta=(e,t)=>{const n=e.__vccOpts||e;for(const[r,o]of t)n[r]=o;return n},wf={},Jn=e=>(Fc("data-v-b2da00b5"),e=e(),jc(),e),vf=Jn(()=>pe("div",{class:"card"},[pe("p",null,[We(" Edit "),pe("code",null,"components/HelloWorld.vue"),We(" to test HMR ")])],-1)),Ef=Jn(()=>pe("p",null,[We(" Check out "),pe("a",{href:"https://vuejs.org/guide/quick-start.html#local",target:"_blank"},"create-vue"),We(", the official Vue + Vite starter ")],-1)),Sf=Jn(()=>pe("p",null,[We(" Install "),pe("a",{href:"https://github.com/johnsoncodehk/volar",target:"_blank"},"Volar"),We(" in your IDE for a better DX ")],-1)),If=Jn(()=>pe("p",{class:"read-the-docs"},"Click on the Vite and Vue logos to learn more",-1)),Af={style:{"margin-bottom":"20px"}};function Tf(e,t){const n=io("router-link");return lo(),Fi(Se,null,[vf,Ef,Sf,If,pe("div",Af,[he(n,{to:"/notification"},{default:so(()=>[We("Go to Home")]),_:1})])],64)}const Cf=ta(wf,[["render",Tf],["__scopeId","data-v-b2da00b5"]]),Of={},Rf=pe("h1",{style:{"margin-bottom":"20px"}},"Notification",-1),xf=pe("div",{style:{"margin-bottom":"20px"}},"ПРИВЕТ!!!!",-1);function kf(e,t){const n=io("router-link");return lo(),Fi(Se,null,[Rf,xf,pe("div",null,[he(n,{to:"/notification/about"},{default:so(()=>[We("Go to About")]),_:1})])],64)}const Df=ta(Of,[["render",kf]]),Pf=[{path:"/notification",component:Df},{path:"/notification/about",component:Cf}],Mf=_f({history:qu(),routes:Pf});/**
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
 */const na=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let o=e.charCodeAt(r);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=o&63|128):(o&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=o&63|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=o&63|128)}return t},Nf=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const o=e[n++];if(o<128)t[r++]=String.fromCharCode(o);else if(o>191&&o<224){const s=e[n++];t[r++]=String.fromCharCode((o&31)<<6|s&63)}else if(o>239&&o<365){const s=e[n++],i=e[n++],c=e[n++],a=((o&7)<<18|(s&63)<<12|(i&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(a>>10)),t[r++]=String.fromCharCode(56320+(a&1023))}else{const s=e[n++],i=e[n++];t[r++]=String.fromCharCode((o&15)<<12|(s&63)<<6|i&63)}}return t.join("")},ra={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<e.length;o+=3){const s=e[o],i=o+1<e.length,c=i?e[o+1]:0,a=o+2<e.length,f=a?e[o+2]:0,l=s>>2,h=(s&3)<<4|c>>4;let p=(c&15)<<2|f>>6,y=f&63;a||(y=64,i||(p=64)),r.push(n[l],n[h],n[p],n[y])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(na(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Nf(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<e.length;){const s=n[e.charAt(o++)],c=o<e.length?n[e.charAt(o)]:0;++o;const f=o<e.length?n[e.charAt(o)]:64;++o;const h=o<e.length?n[e.charAt(o)]:64;if(++o,s==null||c==null||f==null||h==null)throw new $f;const p=s<<2|c>>4;if(r.push(p),f!==64){const y=c<<4&240|f>>2;if(r.push(y),h!==64){const O=f<<6&192|h;r.push(O)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class $f extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Bf=function(e){const t=na(e);return ra.encodeByteArray(t,!0)},oa=function(e){return Bf(e).replace(/\./g,"")},Lf=function(e){try{return ra.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Ff(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const jf=()=>Ff().__FIREBASE_DEFAULTS__,Hf=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Kf=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Lf(e[1]);return t&&JSON.parse(t)},Vf=()=>{try{return jf()||Hf()||Kf()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},sa=()=>{var e;return(e=Vf())===null||e===void 0?void 0:e.config};/**
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
 */class Uf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}function ia(){try{return typeof indexedDB=="object"}catch{return!1}}function aa(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var s;t(((s=o.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
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
 */const Wf="FirebaseError";class jt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Wf,Object.setPrototypeOf(this,jt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fn.prototype.create)}}class fn{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},o=`${this.service}/${t}`,s=this.errors[t],i=s?qf(s,r):"Error",c=`${this.serviceName}: ${i} (${o}).`;return new jt(o,c,r)}}function qf(e,t){return e.replace(zf,(n,r)=>{const o=t[r];return o!=null?String(o):`<${r}?>`})}const zf=/\{\$([^}]+)}/g;function $r(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const o of n){if(!r.includes(o))return!1;const s=e[o],i=t[o];if(Rs(s)&&Rs(i)){if(!$r(s,i))return!1}else if(s!==i)return!1}for(const o of r)if(!n.includes(o))return!1;return!0}function Rs(e){return e!==null&&typeof e=="object"}/**
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
 */function ca(e){return e&&e._delegate?e._delegate:e}class qe{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */class Gf{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Uf;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),o=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(o)return null;throw s}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Yf(t))try{this.getOrInitializeService({instanceIdentifier:dt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:o});r.resolve(s)}catch{}}}}clearInstance(t=dt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=dt){return this.instances.has(t)}getOptions(t=dt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,i]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);r===c&&i.resolve(o)}return o}onInit(t,n){var r;const o=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(o))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(o,s);const i=this.instances.get(o);return i&&t(i,o),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const o of r)try{o(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Jf(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=dt){return this.component?this.component.multipleInstances?t:dt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Jf(e){return e===dt?void 0:e}function Yf(e){return e.instantiationMode==="EAGER"}/**
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
 */class Qf{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Gf(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Y;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(Y||(Y={}));const Xf={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},Zf=Y.INFO,ed={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},td=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),o=ed[t];if(o)console[o](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class nd{constructor(t){this.name=t,this._logLevel=Zf,this._logHandler=td,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Y))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Xf[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...t),this._logHandler(this,Y.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...t),this._logHandler(this,Y.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...t),this._logHandler(this,Y.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...t),this._logHandler(this,Y.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...t),this._logHandler(this,Y.ERROR,...t)}}const rd=(e,t)=>t.some(n=>e instanceof n);let xs,ks;function od(){return xs||(xs=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sd(){return ks||(ks=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const la=new WeakMap,Br=new WeakMap,ua=new WeakMap,lr=new WeakMap,go=new WeakMap;function id(e){const t=new Promise((n,r)=>{const o=()=>{e.removeEventListener("success",s),e.removeEventListener("error",i)},s=()=>{n(Ue(e.result)),o()},i=()=>{r(e.error),o()};e.addEventListener("success",s),e.addEventListener("error",i)});return t.then(n=>{n instanceof IDBCursor&&la.set(n,e)}).catch(()=>{}),go.set(t,e),t}function ad(e){if(Br.has(e))return;const t=new Promise((n,r)=>{const o=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",i),e.removeEventListener("abort",i)},s=()=>{n(),o()},i=()=>{r(e.error||new DOMException("AbortError","AbortError")),o()};e.addEventListener("complete",s),e.addEventListener("error",i),e.addEventListener("abort",i)});Br.set(e,t)}let Lr={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Br.get(e);if(t==="objectStoreNames")return e.objectStoreNames||ua.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ue(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function cd(e){Lr=e(Lr)}function ld(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(ur(this),t,...n);return ua.set(r,t.sort?t.sort():[t]),Ue(r)}:sd().includes(e)?function(...t){return e.apply(ur(this),t),Ue(la.get(this))}:function(...t){return Ue(e.apply(ur(this),t))}}function ud(e){return typeof e=="function"?ld(e):(e instanceof IDBTransaction&&ad(e),rd(e,od())?new Proxy(e,Lr):e)}function Ue(e){if(e instanceof IDBRequest)return id(e);if(lr.has(e))return lr.get(e);const t=ud(e);return t!==e&&(lr.set(e,t),go.set(t,e)),t}const ur=e=>go.get(e);function Ht(e,t,{blocked:n,upgrade:r,blocking:o,terminated:s}={}){const i=indexedDB.open(e,t),c=Ue(i);return r&&i.addEventListener("upgradeneeded",a=>{r(Ue(i.result),a.oldVersion,a.newVersion,Ue(i.transaction),a)}),n&&i.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),c.then(a=>{s&&a.addEventListener("close",()=>s()),o&&a.addEventListener("versionchange",f=>o(f.oldVersion,f.newVersion,f))}).catch(()=>{}),c}function Mt(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",r=>t(r.oldVersion,r)),Ue(n).then(()=>{})}const fd=["get","getKey","getAll","getAllKeys","count"],dd=["put","add","delete","clear"],fr=new Map;function Ds(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(fr.get(t))return fr.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,o=dd.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(o||fd.includes(n)))return;const s=async function(i,...c){const a=this.transaction(i,o?"readwrite":"readonly");let f=a.store;return r&&(f=f.index(c.shift())),(await Promise.all([f[n](...c),o&&a.done]))[0]};return fr.set(t,s),s}cd(e=>({...e,get:(t,n,r)=>Ds(t,n)||e.get(t,n,r),has:(t,n)=>!!Ds(t,n)||e.has(t,n)}));/**
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
 */class hd{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(pd(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function pd(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Fr="@firebase/app",Ps="0.9.28";/**
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
 */const bt=new nd("@firebase/app"),gd="@firebase/app-compat",md="@firebase/analytics-compat",bd="@firebase/analytics",_d="@firebase/app-check-compat",yd="@firebase/app-check",wd="@firebase/auth",vd="@firebase/auth-compat",Ed="@firebase/database",Sd="@firebase/database-compat",Id="@firebase/functions",Ad="@firebase/functions-compat",Td="@firebase/installations",Cd="@firebase/installations-compat",Od="@firebase/messaging",Rd="@firebase/messaging-compat",xd="@firebase/performance",kd="@firebase/performance-compat",Dd="@firebase/remote-config",Pd="@firebase/remote-config-compat",Md="@firebase/storage",Nd="@firebase/storage-compat",$d="@firebase/firestore",Bd="@firebase/firestore-compat",Ld="firebase";/**
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
 */const jr="[DEFAULT]",Fd={[Fr]:"fire-core",[gd]:"fire-core-compat",[bd]:"fire-analytics",[md]:"fire-analytics-compat",[yd]:"fire-app-check",[_d]:"fire-app-check-compat",[wd]:"fire-auth",[vd]:"fire-auth-compat",[Ed]:"fire-rtdb",[Sd]:"fire-rtdb-compat",[Id]:"fire-fn",[Ad]:"fire-fn-compat",[Td]:"fire-iid",[Cd]:"fire-iid-compat",[Od]:"fire-fcm",[Rd]:"fire-fcm-compat",[xd]:"fire-perf",[kd]:"fire-perf-compat",[Dd]:"fire-rc",[Pd]:"fire-rc-compat",[Md]:"fire-gcs",[Nd]:"fire-gcs-compat",[$d]:"fire-fst",[Bd]:"fire-fst-compat","fire-js":"fire-js",[Ld]:"fire-js-all"};/**
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
 */const xn=new Map,Hr=new Map;function jd(e,t){try{e.container.addComponent(t)}catch(n){bt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function at(e){const t=e.name;if(Hr.has(t))return bt.debug(`There were multiple attempts to register component ${t}.`),!1;Hr.set(t,e);for(const n of xn.values())jd(n,e);return!0}function mo(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const Hd={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ot=new fn("app","Firebase",Hd);/**
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
 */class Kd{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new qe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ot.create("app-deleted",{appName:this._name})}}function fa(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:jr,automaticDataCollectionEnabled:!1},t),o=r.name;if(typeof o!="string"||!o)throw ot.create("bad-app-name",{appName:String(o)});if(n||(n=sa()),!n)throw ot.create("no-options");const s=xn.get(o);if(s){if($r(n,s.options)&&$r(r,s.config))return s;throw ot.create("duplicate-app",{appName:o})}const i=new Qf(o);for(const a of Hr.values())i.addComponent(a);const c=new Kd(n,r,i);return xn.set(o,c),c}function Vd(e=jr){const t=xn.get(e);if(!t&&e===jr&&sa())return fa();if(!t)throw ot.create("no-app",{appName:e});return t}function st(e,t,n){var r;let o=(r=Fd[e])!==null&&r!==void 0?r:e;n&&(o+=`-${n}`);const s=o.match(/\s|\//),i=t.match(/\s|\//);if(s||i){const c=[`Unable to register library "${o}" with version "${t}":`];s&&c.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&i&&c.push("and"),i&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),bt.warn(c.join(" "));return}at(new qe(`${o}-version`,()=>({library:o,version:t}),"VERSION"))}/**
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
 */const Ud="firebase-heartbeat-database",Wd=1,cn="firebase-heartbeat-store";let dr=null;function da(){return dr||(dr=Ht(Ud,Wd,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(cn)}catch(n){console.warn(n)}}}}).catch(e=>{throw ot.create("idb-open",{originalErrorMessage:e.message})})),dr}async function qd(e){try{const n=(await da()).transaction(cn),r=await n.objectStore(cn).get(ha(e));return await n.done,r}catch(t){if(t instanceof jt)bt.warn(t.message);else{const n=ot.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});bt.warn(n.message)}}}async function Ms(e,t){try{const r=(await da()).transaction(cn,"readwrite");await r.objectStore(cn).put(t,ha(e)),await r.done}catch(n){if(n instanceof jt)bt.warn(n.message);else{const r=ot.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});bt.warn(r.message)}}}function ha(e){return`${e.name}!${e.options.appId}`}/**
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
 */const zd=1024,Gd=30*24*60*60*1e3;class Jd{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Qd(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ns();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const c=new Date(i.date).valueOf();return Date.now()-c<=Gd}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ns(),{heartbeatsToSend:r,unsentEntries:o}=Yd(this._heartbeatsCache.heartbeats),s=oa(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Ns(){return new Date().toISOString().substring(0,10)}function Yd(e,t=zd){const n=[];let r=e.slice();for(const o of e){const s=n.find(i=>i.agent===o.agent);if(s){if(s.dates.push(o.date),$s(n)>t){s.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),$s(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Qd{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ia()?aa().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await qd(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return Ms(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return Ms(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...t.heartbeats]})}else return}}function $s(e){return oa(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function Xd(e){at(new qe("platform-logger",t=>new hd(t),"PRIVATE")),at(new qe("heartbeat",t=>new Jd(t),"PRIVATE")),st(Fr,Ps,e),st(Fr,Ps,"esm2017"),st("fire-js","")}Xd("");var Zd="firebase",eh="10.8.1";/**
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
 */st(Zd,eh,"app");const pa="@firebase/installations",bo="0.6.5";/**
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
 */const ga=1e4,ma=`w:${bo}`,ba="FIS_v2",th="https://firebaseinstallations.googleapis.com/v1",nh=60*60*1e3,rh="installations",oh="Installations";/**
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
 */const sh={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},_t=new fn(rh,oh,sh);function _a(e){return e instanceof jt&&e.code.includes("request-failed")}/**
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
 */function ya({projectId:e}){return`${th}/projects/${e}/installations`}function wa(e){return{token:e.token,requestStatus:2,expiresIn:ah(e.expiresIn),creationTime:Date.now()}}async function va(e,t){const r=(await t.json()).error;return _t.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Ea({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function ih(e,{refreshToken:t}){const n=Ea(e);return n.append("Authorization",ch(t)),n}async function Sa(e){const t=await e();return t.status>=500&&t.status<600?e():t}function ah(e){return Number(e.replace("s","000"))}function ch(e){return`${ba} ${e}`}/**
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
 */async function lh({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=ya(e),o=Ea(e),s=t.getImmediate({optional:!0});if(s){const f=await s.getHeartbeatsHeader();f&&o.append("x-firebase-client",f)}const i={fid:n,authVersion:ba,appId:e.appId,sdkVersion:ma},c={method:"POST",headers:o,body:JSON.stringify(i)},a=await Sa(()=>fetch(r,c));if(a.ok){const f=await a.json();return{fid:f.fid||n,registrationStatus:2,refreshToken:f.refreshToken,authToken:wa(f.authToken)}}else throw await va("Create Installation",a)}/**
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
 */function Ia(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function uh(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const fh=/^[cdef][\w-]{21}$/,Kr="";function dh(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=hh(e);return fh.test(n)?n:Kr}catch{return Kr}}function hh(e){return uh(e).substr(0,22)}/**
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
 */const Aa=new Map;function Ta(e,t){const n=Yn(e);Ca(n,t),ph(n,t)}function Ca(e,t){const n=Aa.get(e);if(n)for(const r of n)r(t)}function ph(e,t){const n=gh();n&&n.postMessage({key:e,fid:t}),mh()}let pt=null;function gh(){return!pt&&"BroadcastChannel"in self&&(pt=new BroadcastChannel("[Firebase] FID Change"),pt.onmessage=e=>{Ca(e.data.key,e.data.fid)}),pt}function mh(){Aa.size===0&&pt&&(pt.close(),pt=null)}/**
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
 */const bh="firebase-installations-database",_h=1,yt="firebase-installations-store";let hr=null;function _o(){return hr||(hr=Ht(bh,_h,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(yt)}}})),hr}async function kn(e,t){const n=Yn(e),o=(await _o()).transaction(yt,"readwrite"),s=o.objectStore(yt),i=await s.get(n);return await s.put(t,n),await o.done,(!i||i.fid!==t.fid)&&Ta(e,t.fid),t}async function Oa(e){const t=Yn(e),r=(await _o()).transaction(yt,"readwrite");await r.objectStore(yt).delete(t),await r.done}async function Qn(e,t){const n=Yn(e),o=(await _o()).transaction(yt,"readwrite"),s=o.objectStore(yt),i=await s.get(n),c=t(i);return c===void 0?await s.delete(n):await s.put(c,n),await o.done,c&&(!i||i.fid!==c.fid)&&Ta(e,c.fid),c}/**
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
 */async function yo(e){let t;const n=await Qn(e.appConfig,r=>{const o=yh(r),s=wh(e,o);return t=s.registrationPromise,s.installationEntry});return n.fid===Kr?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function yh(e){const t=e||{fid:dh(),registrationStatus:0};return Ra(t)}function wh(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(_t.create("app-offline"));return{installationEntry:t,registrationPromise:o}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=vh(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Eh(e)}:{installationEntry:t}}async function vh(e,t){try{const n=await lh(e,t);return kn(e.appConfig,n)}catch(n){throw _a(n)&&n.customData.serverCode===409?await Oa(e.appConfig):await kn(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Eh(e){let t=await Bs(e.appConfig);for(;t.registrationStatus===1;)await Ia(100),t=await Bs(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await yo(e);return r||n}return t}function Bs(e){return Qn(e,t=>{if(!t)throw _t.create("installation-not-found");return Ra(t)})}function Ra(e){return Sh(e)?{fid:e.fid,registrationStatus:0}:e}function Sh(e){return e.registrationStatus===1&&e.registrationTime+ga<Date.now()}/**
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
 */async function Ih({appConfig:e,heartbeatServiceProvider:t},n){const r=Ah(e,n),o=ih(e,n),s=t.getImmediate({optional:!0});if(s){const f=await s.getHeartbeatsHeader();f&&o.append("x-firebase-client",f)}const i={installation:{sdkVersion:ma,appId:e.appId}},c={method:"POST",headers:o,body:JSON.stringify(i)},a=await Sa(()=>fetch(r,c));if(a.ok){const f=await a.json();return wa(f)}else throw await va("Generate Auth Token",a)}function Ah(e,{fid:t}){return`${ya(e)}/${t}/authTokens:generate`}/**
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
 */async function wo(e,t=!1){let n;const r=await Qn(e.appConfig,s=>{if(!xa(s))throw _t.create("not-registered");const i=s.authToken;if(!t&&Oh(i))return s;if(i.requestStatus===1)return n=Th(e,t),s;{if(!navigator.onLine)throw _t.create("app-offline");const c=xh(s);return n=Ch(e,c),c}});return n?await n:r.authToken}async function Th(e,t){let n=await Ls(e.appConfig);for(;n.authToken.requestStatus===1;)await Ia(100),n=await Ls(e.appConfig);const r=n.authToken;return r.requestStatus===0?wo(e,t):r}function Ls(e){return Qn(e,t=>{if(!xa(t))throw _t.create("not-registered");const n=t.authToken;return kh(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Ch(e,t){try{const n=await Ih(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await kn(e.appConfig,r),n}catch(n){if(_a(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Oa(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await kn(e.appConfig,r)}throw n}}function xa(e){return e!==void 0&&e.registrationStatus===2}function Oh(e){return e.requestStatus===2&&!Rh(e)}function Rh(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+nh}function xh(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function kh(e){return e.requestStatus===1&&e.requestTime+ga<Date.now()}/**
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
 */async function Dh(e){const t=e,{installationEntry:n,registrationPromise:r}=await yo(t);return r?r.catch(console.error):wo(t).catch(console.error),n.fid}/**
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
 */async function Ph(e,t=!1){const n=e;return await Mh(n),(await wo(n,t)).token}async function Mh(e){const{registrationPromise:t}=await yo(e);t&&await t}/**
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
 */function Nh(e){if(!e||!e.options)throw pr("App Configuration");if(!e.name)throw pr("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw pr(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function pr(e){return _t.create("missing-app-config-values",{valueName:e})}/**
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
 */const ka="installations",$h="installations-internal",Bh=e=>{const t=e.getProvider("app").getImmediate(),n=Nh(t),r=mo(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Lh=e=>{const t=e.getProvider("app").getImmediate(),n=mo(t,ka).getImmediate();return{getId:()=>Dh(n),getToken:o=>Ph(n,o)}};function Fh(){at(new qe(ka,Bh,"PUBLIC")),at(new qe($h,Lh,"PRIVATE"))}Fh();st(pa,bo);st(pa,bo,"esm2017");/**
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
 */const Da="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",jh="https://fcmregistrations.googleapis.com/v1",Pa="FCM_MSG",Hh="google.c.a.c_id",Kh=3,Vh=1;var Dn;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Dn||(Dn={}));/**
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
 */function je(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Uh(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),o=new Uint8Array(r.length);for(let s=0;s<r.length;++s)o[s]=r.charCodeAt(s);return o}/**
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
 */const gr="fcm_token_details_db",Wh=5,Fs="fcm_token_object_Store";async function qh(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(gr))return null;let t=null;return(await Ht(gr,Wh,{upgrade:async(r,o,s,i)=>{var c;if(o<2||!r.objectStoreNames.contains(Fs))return;const a=i.objectStore(Fs),f=await a.index("fcmSenderId").get(e);if(await a.clear(),!!f){if(o===2){const l=f;if(!l.auth||!l.p256dh||!l.endpoint)return;t={token:l.fcmToken,createTime:(c=l.createTime)!==null&&c!==void 0?c:Date.now(),subscriptionOptions:{auth:l.auth,p256dh:l.p256dh,endpoint:l.endpoint,swScope:l.swScope,vapidKey:typeof l.vapidKey=="string"?l.vapidKey:je(l.vapidKey)}}}else if(o===3){const l=f;t={token:l.fcmToken,createTime:l.createTime,subscriptionOptions:{auth:je(l.auth),p256dh:je(l.p256dh),endpoint:l.endpoint,swScope:l.swScope,vapidKey:je(l.vapidKey)}}}else if(o===4){const l=f;t={token:l.fcmToken,createTime:l.createTime,subscriptionOptions:{auth:je(l.auth),p256dh:je(l.p256dh),endpoint:l.endpoint,swScope:l.swScope,vapidKey:je(l.vapidKey)}}}}}})).close(),await Mt(gr),await Mt("fcm_vapid_details_db"),await Mt("undefined"),zh(t)?t:null}function zh(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
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
 */const Gh="firebase-messaging-database",Jh=1,wt="firebase-messaging-store";let mr=null;function vo(){return mr||(mr=Ht(Gh,Jh,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(wt)}}})),mr}async function Eo(e){const t=Io(e),r=await(await vo()).transaction(wt).objectStore(wt).get(t);if(r)return r;{const o=await qh(e.appConfig.senderId);if(o)return await So(e,o),o}}async function So(e,t){const n=Io(e),o=(await vo()).transaction(wt,"readwrite");return await o.objectStore(wt).put(t,n),await o.done,t}async function Yh(e){const t=Io(e),r=(await vo()).transaction(wt,"readwrite");await r.objectStore(wt).delete(t),await r.done}function Io({appConfig:e}){return e.appId}/**
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
 */const Qh={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Oe=new fn("messaging","Messaging",Qh);/**
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
 */async function Xh(e,t){const n=await To(e),r=Na(t),o={method:"POST",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(Ao(e.appConfig),o)).json()}catch(i){throw Oe.create("token-subscribe-failed",{errorInfo:i==null?void 0:i.toString()})}if(s.error){const i=s.error.message;throw Oe.create("token-subscribe-failed",{errorInfo:i})}if(!s.token)throw Oe.create("token-subscribe-no-token");return s.token}async function Zh(e,t){const n=await To(e),r=Na(t.subscriptionOptions),o={method:"PATCH",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(`${Ao(e.appConfig)}/${t.token}`,o)).json()}catch(i){throw Oe.create("token-update-failed",{errorInfo:i==null?void 0:i.toString()})}if(s.error){const i=s.error.message;throw Oe.create("token-update-failed",{errorInfo:i})}if(!s.token)throw Oe.create("token-update-no-token");return s.token}async function Ma(e,t){const r={method:"DELETE",headers:await To(e)};try{const s=await(await fetch(`${Ao(e.appConfig)}/${t}`,r)).json();if(s.error){const i=s.error.message;throw Oe.create("token-unsubscribe-failed",{errorInfo:i})}}catch(o){throw Oe.create("token-unsubscribe-failed",{errorInfo:o==null?void 0:o.toString()})}}function Ao({projectId:e}){return`${jh}/projects/${e}/registrations`}async function To({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function Na({p256dh:e,auth:t,endpoint:n,vapidKey:r}){const o={web:{endpoint:n,auth:t,p256dh:e}};return r!==Da&&(o.web.applicationPubKey=r),o}/**
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
 */const ep=7*24*60*60*1e3;async function tp(e){const t=await rp(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:je(t.getKey("auth")),p256dh:je(t.getKey("p256dh"))},r=await Eo(e.firebaseDependencies);if(r){if(op(r.subscriptionOptions,n))return Date.now()>=r.createTime+ep?np(e,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await Ma(e.firebaseDependencies,r.token)}catch(o){console.warn(o)}return js(e.firebaseDependencies,n)}else return js(e.firebaseDependencies,n)}async function Vr(e){const t=await Eo(e.firebaseDependencies);t&&(await Ma(e.firebaseDependencies,t.token),await Yh(e.firebaseDependencies));const n=await e.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function np(e,t){try{const n=await Zh(e.firebaseDependencies,t),r=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await So(e.firebaseDependencies,r),n}catch(n){throw await Vr(e),n}}async function js(e,t){const r={token:await Xh(e,t),createTime:Date.now(),subscriptionOptions:t};return await So(e,r),r.token}async function rp(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Uh(t)})}function op(e,t){const n=t.vapidKey===e.vapidKey,r=t.endpoint===e.endpoint,o=t.auth===e.auth,s=t.p256dh===e.p256dh;return n&&r&&o&&s}/**
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
 */function sp(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return ip(t,e),ap(t,e),cp(t,e),t}function ip(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const r=t.notification.body;r&&(e.notification.body=r);const o=t.notification.image;o&&(e.notification.image=o);const s=t.notification.icon;s&&(e.notification.icon=s)}function ap(e,t){t.data&&(e.data=t.data)}function cp(e,t){var n,r,o,s,i;if(!t.fcmOptions&&!(!((n=t.notification)===null||n===void 0)&&n.click_action))return;e.fcmOptions={};const c=(o=(r=t.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&o!==void 0?o:(s=t.notification)===null||s===void 0?void 0:s.click_action;c&&(e.fcmOptions.link=c);const a=(i=t.fcmOptions)===null||i===void 0?void 0:i.analytics_label;a&&(e.fcmOptions.analyticsLabel=a)}/**
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
 */function lp(e){return typeof e=="object"&&!!e&&Hh in e}/**
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
 */function up(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */$a("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");$a("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");async function fp(e,t){const n=dp(t,await e.firebaseDependencies.installations.getId());hp(e,n,t.productId)}function dp(e,t){var n,r;const o={};return e.from&&(o.project_number=e.from),e.fcmMessageId&&(o.message_id=e.fcmMessageId),o.instance_id=t,e.notification?o.message_type=Dn.DISPLAY_NOTIFICATION.toString():o.message_type=Dn.DATA_MESSAGE.toString(),o.sdk_platform=Kh.toString(),o.package_name=self.origin.replace(/(^\w+:|^)\/\//,""),e.collapse_key&&(o.collapse_key=e.collapse_key),o.event=Vh.toString(),!((n=e.fcmOptions)===null||n===void 0)&&n.analytics_label&&(o.analytics_label=(r=e.fcmOptions)===null||r===void 0?void 0:r.analytics_label),o}function hp(e,t,n){const r={};r.event_time_ms=Math.floor(Date.now()).toString(),r.source_extension_json_proto3=JSON.stringify(t),n&&(r.compliance_data=pp(n)),e.logEvents.push(r)}function pp(e){return{privacy_context:{prequest:{origin_associated_product_id:e}}}}function $a(e,t){const n=[];for(let r=0;r<e.length;r++)n.push(e.charAt(r)),r<t.length&&n.push(t.charAt(r));return n.join("")}/**
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
 */async function gp(e,t){var n,r;const{newSubscription:o}=e;if(!o){await Vr(t);return}const s=await Eo(t.firebaseDependencies);await Vr(t),t.vapidKey=(r=(n=s==null?void 0:s.subscriptionOptions)===null||n===void 0?void 0:n.vapidKey)!==null&&r!==void 0?r:Da,await tp(t)}async function mp(e,t){const n=yp(e);if(!n)return;t.deliveryMetricsExportedToBigQueryEnabled&&await fp(t,n);const r=await Ba();if(vp(r))return Ep(r,n);if(n.notification&&await Sp(_p(n)),!!t&&t.onBackgroundMessageHandler){const o=sp(n);typeof t.onBackgroundMessageHandler=="function"?await t.onBackgroundMessageHandler(o):t.onBackgroundMessageHandler.next(o)}}async function bp(e){var t,n;const r=(n=(t=e.notification)===null||t===void 0?void 0:t.data)===null||n===void 0?void 0:n[Pa];if(r){if(e.action)return}else return;e.stopImmediatePropagation(),e.notification.close();const o=Ip(r);if(!o)return;const s=new URL(o,self.location.href),i=new URL(self.location.origin);if(s.host!==i.host)return;let c=await wp(s);if(c?c=await c.focus():(c=await self.clients.openWindow(o),await up(3e3)),!!c)return r.messageType=Pn.NOTIFICATION_CLICKED,r.isFirebaseMessaging=!0,c.postMessage(r)}function _p(e){const t=Object.assign({},e.notification);return t.data={[Pa]:e},t}function yp({data:e}){if(!e)return null;try{return e.json()}catch{return null}}async function wp(e){const t=await Ba();for(const n of t){const r=new URL(n.url,self.location.href);if(e.host===r.host)return n}return null}function vp(e){return e.some(t=>t.visibilityState==="visible"&&!t.url.startsWith("chrome-extension://"))}function Ep(e,t){t.isFirebaseMessaging=!0,t.messageType=Pn.PUSH_RECEIVED;for(const n of e)n.postMessage(t)}function Ba(){return self.clients.matchAll({type:"window",includeUncontrolled:!0})}function Sp(e){var t;const{actions:n}=e,{maxActions:r}=Notification;return n&&r&&n.length>r&&console.warn(`This browser only supports ${r} actions. The remaining actions will not be displayed.`),self.registration.showNotification((t=e.title)!==null&&t!==void 0?t:"",e)}function Ip(e){var t,n,r;const o=(n=(t=e.fcmOptions)===null||t===void 0?void 0:t.link)!==null&&n!==void 0?n:(r=e.notification)===null||r===void 0?void 0:r.click_action;return o||(lp(e.data)?self.location.origin:null)}/**
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
 */function Ap(e){if(!e||!e.options)throw br("App Configuration Object");if(!e.name)throw br("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const r of t)if(!n[r])throw br(r);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function br(e){return Oe.create("missing-app-config-values",{valueName:e})}/**
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
 */let Tp=class{constructor(t,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const o=Ap(t);this.firebaseDependencies={app:t,appConfig:o,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}};/**
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
 */const Cp=e=>{const t=new Tp(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return self.addEventListener("push",n=>{n.waitUntil(mp(n,t))}),self.addEventListener("pushsubscriptionchange",n=>{n.waitUntil(gp(n,t))}),self.addEventListener("notificationclick",n=>{n.waitUntil(bp(n))}),t};function Op(){at(new qe("messaging-sw",Cp,"PUBLIC"))}/**
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
 */async function Rp(){return ia()&&await aa()&&"PushManager"in self&&"Notification"in self&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function xp(e=Vd()){return Rp().then(t=>{if(!t)throw Oe.create("unsupported-browser")},t=>{throw Oe.create("indexed-db-unsupported")}),mo(ca(e),"messaging-sw").getImmediate()}/**
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
 */Op();/**
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
 */const kp="/firebase-messaging-sw.js",Dp="/firebase-cloud-messaging-push-scope",La="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Pp="https://fcmregistrations.googleapis.com/v1",Fa="google.c.a.c_id",Mp="google.c.a.c_l",Np="google.c.a.ts",$p="google.c.a.e";var Hs;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Hs||(Hs={}));/**
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
 */function He(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Bp(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),o=new Uint8Array(r.length);for(let s=0;s<r.length;++s)o[s]=r.charCodeAt(s);return o}/**
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
 */const _r="fcm_token_details_db",Lp=5,Ks="fcm_token_object_Store";async function Fp(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(_r))return null;let t=null;return(await Ht(_r,Lp,{upgrade:async(r,o,s,i)=>{var c;if(o<2||!r.objectStoreNames.contains(Ks))return;const a=i.objectStore(Ks),f=await a.index("fcmSenderId").get(e);if(await a.clear(),!!f){if(o===2){const l=f;if(!l.auth||!l.p256dh||!l.endpoint)return;t={token:l.fcmToken,createTime:(c=l.createTime)!==null&&c!==void 0?c:Date.now(),subscriptionOptions:{auth:l.auth,p256dh:l.p256dh,endpoint:l.endpoint,swScope:l.swScope,vapidKey:typeof l.vapidKey=="string"?l.vapidKey:He(l.vapidKey)}}}else if(o===3){const l=f;t={token:l.fcmToken,createTime:l.createTime,subscriptionOptions:{auth:He(l.auth),p256dh:He(l.p256dh),endpoint:l.endpoint,swScope:l.swScope,vapidKey:He(l.vapidKey)}}}else if(o===4){const l=f;t={token:l.fcmToken,createTime:l.createTime,subscriptionOptions:{auth:He(l.auth),p256dh:He(l.p256dh),endpoint:l.endpoint,swScope:l.swScope,vapidKey:He(l.vapidKey)}}}}}})).close(),await Mt(_r),await Mt("fcm_vapid_details_db"),await Mt("undefined"),jp(t)?t:null}function jp(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
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
 */const Hp="firebase-messaging-database",Kp=1,vt="firebase-messaging-store";let yr=null;function Co(){return yr||(yr=Ht(Hp,Kp,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(vt)}}})),yr}async function ja(e){const t=Ro(e),r=await(await Co()).transaction(vt).objectStore(vt).get(t);if(r)return r;{const o=await Fp(e.appConfig.senderId);if(o)return await Oo(e,o),o}}async function Oo(e,t){const n=Ro(e),o=(await Co()).transaction(vt,"readwrite");return await o.objectStore(vt).put(t,n),await o.done,t}async function Vp(e){const t=Ro(e),r=(await Co()).transaction(vt,"readwrite");await r.objectStore(vt).delete(t),await r.done}function Ro({appConfig:e}){return e.appId}/**
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
 */const Up={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},ye=new fn("messaging","Messaging",Up);/**
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
 */async function Wp(e,t){const n=await ko(e),r=Ka(t),o={method:"POST",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(xo(e.appConfig),o)).json()}catch(i){throw ye.create("token-subscribe-failed",{errorInfo:i==null?void 0:i.toString()})}if(s.error){const i=s.error.message;throw ye.create("token-subscribe-failed",{errorInfo:i})}if(!s.token)throw ye.create("token-subscribe-no-token");return s.token}async function qp(e,t){const n=await ko(e),r=Ka(t.subscriptionOptions),o={method:"PATCH",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(`${xo(e.appConfig)}/${t.token}`,o)).json()}catch(i){throw ye.create("token-update-failed",{errorInfo:i==null?void 0:i.toString()})}if(s.error){const i=s.error.message;throw ye.create("token-update-failed",{errorInfo:i})}if(!s.token)throw ye.create("token-update-no-token");return s.token}async function Ha(e,t){const r={method:"DELETE",headers:await ko(e)};try{const s=await(await fetch(`${xo(e.appConfig)}/${t}`,r)).json();if(s.error){const i=s.error.message;throw ye.create("token-unsubscribe-failed",{errorInfo:i})}}catch(o){throw ye.create("token-unsubscribe-failed",{errorInfo:o==null?void 0:o.toString()})}}function xo({projectId:e}){return`${Pp}/projects/${e}/registrations`}async function ko({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function Ka({p256dh:e,auth:t,endpoint:n,vapidKey:r}){const o={web:{endpoint:n,auth:t,p256dh:e}};return r!==La&&(o.web.applicationPubKey=r),o}/**
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
 */const zp=7*24*60*60*1e3;async function Gp(e){const t=await Qp(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:He(t.getKey("auth")),p256dh:He(t.getKey("p256dh"))},r=await ja(e.firebaseDependencies);if(r){if(Xp(r.subscriptionOptions,n))return Date.now()>=r.createTime+zp?Yp(e,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await Ha(e.firebaseDependencies,r.token)}catch(o){console.warn(o)}return Vs(e.firebaseDependencies,n)}else return Vs(e.firebaseDependencies,n)}async function Jp(e){const t=await ja(e.firebaseDependencies);t&&(await Ha(e.firebaseDependencies,t.token),await Vp(e.firebaseDependencies));const n=await e.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function Yp(e,t){try{const n=await qp(e.firebaseDependencies,t),r=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await Oo(e.firebaseDependencies,r),n}catch(n){throw await Jp(e),n}}async function Vs(e,t){const r={token:await Wp(e,t),createTime:Date.now(),subscriptionOptions:t};return await Oo(e,r),r.token}async function Qp(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Bp(t)})}function Xp(e,t){const n=t.vapidKey===e.vapidKey,r=t.endpoint===e.endpoint,o=t.auth===e.auth,s=t.p256dh===e.p256dh;return n&&r&&o&&s}/**
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
 */function Us(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return Zp(t,e),eg(t,e),tg(t,e),t}function Zp(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const r=t.notification.body;r&&(e.notification.body=r);const o=t.notification.image;o&&(e.notification.image=o);const s=t.notification.icon;s&&(e.notification.icon=s)}function eg(e,t){t.data&&(e.data=t.data)}function tg(e,t){var n,r,o,s,i;if(!t.fcmOptions&&!(!((n=t.notification)===null||n===void 0)&&n.click_action))return;e.fcmOptions={};const c=(o=(r=t.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&o!==void 0?o:(s=t.notification)===null||s===void 0?void 0:s.click_action;c&&(e.fcmOptions.link=c);const a=(i=t.fcmOptions)===null||i===void 0?void 0:i.analytics_label;a&&(e.fcmOptions.analyticsLabel=a)}/**
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
 */function ng(e){return typeof e=="object"&&!!e&&Fa in e}/**
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
 */Va("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");Va("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function Va(e,t){const n=[];for(let r=0;r<e.length;r++)n.push(e.charAt(r)),r<t.length&&n.push(t.charAt(r));return n.join("")}/**
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
 */function rg(e){if(!e||!e.options)throw wr("App Configuration Object");if(!e.name)throw wr("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const r of t)if(!n[r])throw wr(r);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function wr(e){return ye.create("missing-app-config-values",{valueName:e})}/**
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
 */class og{constructor(t,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const o=rg(t);this.firebaseDependencies={app:t,appConfig:o,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
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
 */async function sg(e){try{e.swRegistration=await navigator.serviceWorker.register(kp,{scope:Dp}),e.swRegistration.update().catch(()=>{})}catch(t){throw ye.create("failed-service-worker-registration",{browserErrorMessage:t==null?void 0:t.message})}}/**
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
 */async function ig(e,t){if(!t&&!e.swRegistration&&await sg(e),!(!t&&e.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw ye.create("invalid-sw-registration");e.swRegistration=t}}/**
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
 */async function ag(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=La)}/**
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
 */async function Ua(e,t){if(!navigator)throw ye.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw ye.create("permission-blocked");return await ag(e,t==null?void 0:t.vapidKey),await ig(e,t==null?void 0:t.serviceWorkerRegistration),Gp(e)}/**
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
 */async function cg(e,t,n){const r=lg(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[Fa],message_name:n[Mp],message_time:n[Np],message_device_time:Math.floor(Date.now()/1e3)})}function lg(e){switch(e){case ln.NOTIFICATION_CLICKED:return"notification_open";case ln.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function ug(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===ln.PUSH_RECEIVED&&(typeof e.onMessageHandler=="function"?e.onMessageHandler(Us(n)):e.onMessageHandler.next(Us(n)));const r=n.data;ng(r)&&r[$p]==="1"&&await cg(e,n.messageType,r)}const Ws="@firebase/messaging",qs="0.12.6";/**
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
 */const fg=e=>{const t=new og(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>ug(t,n)),t},dg=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:r=>Ua(t,r)}};function hg(){at(new qe("messaging",fg,"PUBLIC")),at(new qe("messaging-internal",dg,"PRIVATE")),st(Ws,qs),st(Ws,qs,"esm2017")}async function pg(e,t){return e=ca(e),Ua(e,t)}hg();const gg={apiKey:"AIzaSyC2K5T81hk-OPCqhp4WwbEGu6ri9j-eRR4",authDomain:"efr-dev-c3d2a.firebaseapp.com",projectId:"efr-dev-c3d2a",storageBucket:"efr-dev-c3d2a.appspot.com",messagingSenderId:"799673773049",appId:"1:799673773049:web:8a0ae20839901e61e12b28"},mg=fa(gg),bg=xp(mg);navigator.serviceWorker.register("sw.js").then(e=>{pg(bg,{serviceWorkerRegistration:e,vapidKey:"BN9wKiZjn9PpeG4VKQriDQZ2EfUXAdIiLdcISZca4RnoJYXQ57vWi2CLIN6zBhCZpdFfK6rWIVGYOOqi3cBEo0E"}).then(t=>{if(t)return console.log("Token is: "+t);console.log("No registration token available. Request permission to generate one.")}).catch(t=>{console.log("An error occurred while retrieving token. ",t)})});du(gu).use(Mf).mount("#app");
