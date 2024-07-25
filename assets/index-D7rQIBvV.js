function cS(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const o=Object.getOwnPropertyDescriptor(i,r);o&&Object.defineProperty(t,r,o.get?o:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();var Us=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Oh(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Jv={exports:{}},Nu={},e0={exports:{}},$e={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vs=Symbol.for("react.element"),fS=Symbol.for("react.portal"),dS=Symbol.for("react.fragment"),hS=Symbol.for("react.strict_mode"),pS=Symbol.for("react.profiler"),mS=Symbol.for("react.provider"),gS=Symbol.for("react.context"),vS=Symbol.for("react.forward_ref"),_S=Symbol.for("react.suspense"),yS=Symbol.for("react.memo"),xS=Symbol.for("react.lazy"),sm=Symbol.iterator;function SS(t){return t===null||typeof t!="object"?null:(t=sm&&t[sm]||t["@@iterator"],typeof t=="function"?t:null)}var t0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},n0=Object.assign,i0={};function aa(t,e,n){this.props=t,this.context=e,this.refs=i0,this.updater=n||t0}aa.prototype.isReactComponent={};aa.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};aa.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function r0(){}r0.prototype=aa.prototype;function Fh(t,e,n){this.props=t,this.context=e,this.refs=i0,this.updater=n||t0}var kh=Fh.prototype=new r0;kh.constructor=Fh;n0(kh,aa.prototype);kh.isPureReactComponent=!0;var lm=Array.isArray,o0=Object.prototype.hasOwnProperty,Bh={current:null},a0={key:!0,ref:!0,__self:!0,__source:!0};function s0(t,e,n){var i,r={},o=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(o=""+e.key),e)o0.call(e,i)&&!a0.hasOwnProperty(i)&&(r[i]=e[i]);var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in s=t.defaultProps,s)r[i]===void 0&&(r[i]=s[i]);return{$$typeof:vs,type:t,key:o,ref:a,props:r,_owner:Bh.current}}function ES(t,e){return{$$typeof:vs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function zh(t){return typeof t=="object"&&t!==null&&t.$$typeof===vs}function MS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var um=/\/+/g;function Sc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?MS(""+t.key):e.toString(36)}function Cl(t,e,n,i,r){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case vs:case fS:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Sc(a,0):i,lm(r)?(n="",t!=null&&(n=t.replace(um,"$&/")+"/"),Cl(r,e,n,"",function(u){return u})):r!=null&&(zh(r)&&(r=ES(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(um,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",lm(t))for(var s=0;s<t.length;s++){o=t[s];var l=i+Sc(o,s);a+=Cl(o,e,n,l,r)}else if(l=SS(t),typeof l=="function")for(t=l.call(t),s=0;!(o=t.next()).done;)o=o.value,l=i+Sc(o,s++),a+=Cl(o,e,n,l,r);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Os(t,e,n){if(t==null)return t;var i=[],r=0;return Cl(t,i,"","",function(o){return e.call(n,o,r++)}),i}function wS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Qt={current:null},Rl={transition:null},TS={ReactCurrentDispatcher:Qt,ReactCurrentBatchConfig:Rl,ReactCurrentOwner:Bh};function l0(){throw Error("act(...) is not supported in production builds of React.")}$e.Children={map:Os,forEach:function(t,e,n){Os(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Os(t,function(){e++}),e},toArray:function(t){return Os(t,function(e){return e})||[]},only:function(t){if(!zh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};$e.Component=aa;$e.Fragment=dS;$e.Profiler=pS;$e.PureComponent=Fh;$e.StrictMode=hS;$e.Suspense=_S;$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=TS;$e.act=l0;$e.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=n0({},t.props),r=t.key,o=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,a=Bh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var s=t.type.defaultProps;for(l in e)o0.call(e,l)&&!a0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&s!==void 0?s[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}return{$$typeof:vs,type:t.type,key:r,ref:o,props:i,_owner:a}};$e.createContext=function(t){return t={$$typeof:gS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:mS,_context:t},t.Consumer=t};$e.createElement=s0;$e.createFactory=function(t){var e=s0.bind(null,t);return e.type=t,e};$e.createRef=function(){return{current:null}};$e.forwardRef=function(t){return{$$typeof:vS,render:t}};$e.isValidElement=zh;$e.lazy=function(t){return{$$typeof:xS,_payload:{_status:-1,_result:t},_init:wS}};$e.memo=function(t,e){return{$$typeof:yS,type:t,compare:e===void 0?null:e}};$e.startTransition=function(t){var e=Rl.transition;Rl.transition={};try{t()}finally{Rl.transition=e}};$e.unstable_act=l0;$e.useCallback=function(t,e){return Qt.current.useCallback(t,e)};$e.useContext=function(t){return Qt.current.useContext(t)};$e.useDebugValue=function(){};$e.useDeferredValue=function(t){return Qt.current.useDeferredValue(t)};$e.useEffect=function(t,e){return Qt.current.useEffect(t,e)};$e.useId=function(){return Qt.current.useId()};$e.useImperativeHandle=function(t,e,n){return Qt.current.useImperativeHandle(t,e,n)};$e.useInsertionEffect=function(t,e){return Qt.current.useInsertionEffect(t,e)};$e.useLayoutEffect=function(t,e){return Qt.current.useLayoutEffect(t,e)};$e.useMemo=function(t,e){return Qt.current.useMemo(t,e)};$e.useReducer=function(t,e,n){return Qt.current.useReducer(t,e,n)};$e.useRef=function(t){return Qt.current.useRef(t)};$e.useState=function(t){return Qt.current.useState(t)};$e.useSyncExternalStore=function(t,e,n){return Qt.current.useSyncExternalStore(t,e,n)};$e.useTransition=function(){return Qt.current.useTransition()};$e.version="18.3.1";e0.exports=$e;var te=e0.exports;const xi=Oh(te),AS=cS({__proto__:null,default:xi},[te]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var CS=te,RS=Symbol.for("react.element"),bS=Symbol.for("react.fragment"),PS=Object.prototype.hasOwnProperty,DS=CS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,LS={key:!0,ref:!0,__self:!0,__source:!0};function u0(t,e,n){var i,r={},o=null,a=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)PS.call(e,i)&&!LS.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:RS,type:t,key:o,ref:a,props:r,_owner:DS.current}}Nu.Fragment=bS;Nu.jsx=u0;Nu.jsxs=u0;Jv.exports=Nu;var O=Jv.exports,Uf={},c0={exports:{}},yn={},f0={exports:{}},d0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,X){var $=N.length;N.push(X);e:for(;0<$;){var oe=$-1>>>1,Ee=N[oe];if(0<r(Ee,X))N[oe]=X,N[$]=Ee,$=oe;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var X=N[0],$=N.pop();if($!==X){N[0]=$;e:for(var oe=0,Ee=N.length,je=Ee>>>1;oe<je;){var j=2*(oe+1)-1,ne=N[j],de=j+1,ce=N[de];if(0>r(ne,$))de<Ee&&0>r(ce,ne)?(N[oe]=ce,N[de]=$,oe=de):(N[oe]=ne,N[j]=$,oe=j);else if(de<Ee&&0>r(ce,$))N[oe]=ce,N[de]=$,oe=de;else break e}}return X}function r(N,X){var $=N.sortIndex-X.sortIndex;return $!==0?$:N.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();t.unstable_now=function(){return a.now()-s}}var l=[],u=[],c=1,f=null,h=3,p=!1,g=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(N){for(var X=n(u);X!==null;){if(X.callback===null)i(u);else if(X.startTime<=N)i(u),X.sortIndex=X.expirationTime,e(l,X);else break;X=n(u)}}function x(N){if(y=!1,v(N),!g)if(n(l)!==null)g=!0,W(b);else{var X=n(u);X!==null&&Z(x,X.startTime-N)}}function b(N,X){g=!1,y&&(y=!1,d(C),C=-1),p=!0;var $=h;try{for(v(X),f=n(l);f!==null&&(!(f.expirationTime>X)||N&&!D());){var oe=f.callback;if(typeof oe=="function"){f.callback=null,h=f.priorityLevel;var Ee=oe(f.expirationTime<=X);X=t.unstable_now(),typeof Ee=="function"?f.callback=Ee:f===n(l)&&i(l),v(X)}else i(l);f=n(l)}if(f!==null)var je=!0;else{var j=n(u);j!==null&&Z(x,j.startTime-X),je=!1}return je}finally{f=null,h=$,p=!1}}var T=!1,A=null,C=-1,w=5,S=-1;function D(){return!(t.unstable_now()-S<w)}function H(){if(A!==null){var N=t.unstable_now();S=N;var X=!0;try{X=A(!0,N)}finally{X?V():(T=!1,A=null)}}else T=!1}var V;if(typeof _=="function")V=function(){_(H)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,K=q.port2;q.port1.onmessage=H,V=function(){K.postMessage(null)}}else V=function(){m(H,0)};function W(N){A=N,T||(T=!0,V())}function Z(N,X){C=m(function(){N(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,W(b))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(h){case 1:case 2:case 3:var X=3;break;default:X=h}var $=h;h=X;try{return N()}finally{h=$}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,X){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var $=h;h=N;try{return X()}finally{h=$}},t.unstable_scheduleCallback=function(N,X,$){var oe=t.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?oe+$:oe):$=oe,N){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=$+Ee,N={id:c++,callback:X,priorityLevel:N,startTime:$,expirationTime:Ee,sortIndex:-1},$>oe?(N.sortIndex=$,e(u,N),n(l)===null&&N===n(u)&&(y?(d(C),C=-1):y=!0,Z(x,$-oe))):(N.sortIndex=Ee,e(l,N),g||p||(g=!0,W(b))),N},t.unstable_shouldYield=D,t.unstable_wrapCallback=function(N){var X=h;return function(){var $=h;h=X;try{return N.apply(this,arguments)}finally{h=$}}}})(d0);f0.exports=d0;var NS=f0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var IS=te,_n=NS;function ie(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h0=new Set,Ya={};function $r(t,e){$o(t,e),$o(t+"Capture",e)}function $o(t,e){for(Ya[t]=e,t=0;t<e.length;t++)h0.add(e[t])}var Ei=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Of=Object.prototype.hasOwnProperty,US=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,cm={},fm={};function OS(t){return Of.call(fm,t)?!0:Of.call(cm,t)?!1:US.test(t)?fm[t]=!0:(cm[t]=!0,!1)}function FS(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function kS(t,e,n,i){if(e===null||typeof e>"u"||FS(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Jt(t,e,n,i,r,o,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=a}var zt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){zt[t]=new Jt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];zt[e]=new Jt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){zt[t]=new Jt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){zt[t]=new Jt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){zt[t]=new Jt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){zt[t]=new Jt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){zt[t]=new Jt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){zt[t]=new Jt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){zt[t]=new Jt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Vh=/[\-:]([a-z])/g;function Hh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Vh,Hh);zt[e]=new Jt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Vh,Hh);zt[e]=new Jt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Vh,Hh);zt[e]=new Jt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){zt[t]=new Jt(t,1,!1,t.toLowerCase(),null,!1,!1)});zt.xlinkHref=new Jt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){zt[t]=new Jt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Gh(t,e,n,i){var r=zt.hasOwnProperty(e)?zt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(kS(e,n,r,i)&&(n=null),i||r===null?OS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ri=IS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Fs=Symbol.for("react.element"),Mo=Symbol.for("react.portal"),wo=Symbol.for("react.fragment"),Wh=Symbol.for("react.strict_mode"),Ff=Symbol.for("react.profiler"),p0=Symbol.for("react.provider"),m0=Symbol.for("react.context"),jh=Symbol.for("react.forward_ref"),kf=Symbol.for("react.suspense"),Bf=Symbol.for("react.suspense_list"),Xh=Symbol.for("react.memo"),Vi=Symbol.for("react.lazy"),g0=Symbol.for("react.offscreen"),dm=Symbol.iterator;function _a(t){return t===null||typeof t!="object"?null:(t=dm&&t[dm]||t["@@iterator"],typeof t=="function"?t:null)}var vt=Object.assign,Ec;function Na(t){if(Ec===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ec=e&&e[1]||""}return`
`+Ec+t}var Mc=!1;function wc(t,e){if(!t||Mc)return"";Mc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),o=i.stack.split(`
`),a=r.length-1,s=o.length-1;1<=a&&0<=s&&r[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(r[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||r[a]!==o[s]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=s);break}}}finally{Mc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Na(t):""}function BS(t){switch(t.tag){case 5:return Na(t.type);case 16:return Na("Lazy");case 13:return Na("Suspense");case 19:return Na("SuspenseList");case 0:case 2:case 15:return t=wc(t.type,!1),t;case 11:return t=wc(t.type.render,!1),t;case 1:return t=wc(t.type,!0),t;default:return""}}function zf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case wo:return"Fragment";case Mo:return"Portal";case Ff:return"Profiler";case Wh:return"StrictMode";case kf:return"Suspense";case Bf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case m0:return(t.displayName||"Context")+".Consumer";case p0:return(t._context.displayName||"Context")+".Provider";case jh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Xh:return e=t.displayName||null,e!==null?e:zf(t.type)||"Memo";case Vi:e=t._payload,t=t._init;try{return zf(t(e))}catch{}}return null}function zS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zf(e);case 8:return e===Wh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ar(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function v0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function VS(t){var e=v0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,o.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ks(t){t._valueTracker||(t._valueTracker=VS(t))}function _0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=v0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Yl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Vf(t,e){var n=e.checked;return vt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function hm(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=ar(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function y0(t,e){e=e.checked,e!=null&&Gh(t,"checked",e,!1)}function Hf(t,e){y0(t,e);var n=ar(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Gf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Gf(t,e.type,ar(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function pm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Gf(t,e,n){(e!=="number"||Yl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ia=Array.isArray;function ko(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ar(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Wf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return vt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function mm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ie(92));if(Ia(n)){if(1<n.length)throw Error(ie(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ar(n)}}function x0(t,e){var n=ar(e.value),i=ar(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function gm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function S0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function jf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?S0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Bs,E0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Bs=Bs||document.createElement("div"),Bs.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Bs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function qa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ba={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},HS=["Webkit","ms","Moz","O"];Object.keys(Ba).forEach(function(t){HS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ba[e]=Ba[t]})});function M0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ba.hasOwnProperty(t)&&Ba[t]?(""+e).trim():e+"px"}function w0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=M0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var GS=vt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xf(t,e){if(e){if(GS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function $f(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yf=null;function $h(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var qf=null,Bo=null,zo=null;function vm(t){if(t=xs(t)){if(typeof qf!="function")throw Error(ie(280));var e=t.stateNode;e&&(e=ku(e),qf(t.stateNode,t.type,e))}}function T0(t){Bo?zo?zo.push(t):zo=[t]:Bo=t}function A0(){if(Bo){var t=Bo,e=zo;if(zo=Bo=null,vm(t),e)for(t=0;t<e.length;t++)vm(e[t])}}function C0(t,e){return t(e)}function R0(){}var Tc=!1;function b0(t,e,n){if(Tc)return t(e,n);Tc=!0;try{return C0(t,e,n)}finally{Tc=!1,(Bo!==null||zo!==null)&&(R0(),A0())}}function Ka(t,e){var n=t.stateNode;if(n===null)return null;var i=ku(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ie(231,e,typeof n));return n}var Kf=!1;if(Ei)try{var ya={};Object.defineProperty(ya,"passive",{get:function(){Kf=!0}}),window.addEventListener("test",ya,ya),window.removeEventListener("test",ya,ya)}catch{Kf=!1}function WS(t,e,n,i,r,o,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var za=!1,ql=null,Kl=!1,Zf=null,jS={onError:function(t){za=!0,ql=t}};function XS(t,e,n,i,r,o,a,s,l){za=!1,ql=null,WS.apply(jS,arguments)}function $S(t,e,n,i,r,o,a,s,l){if(XS.apply(this,arguments),za){if(za){var u=ql;za=!1,ql=null}else throw Error(ie(198));Kl||(Kl=!0,Zf=u)}}function Yr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function P0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function _m(t){if(Yr(t)!==t)throw Error(ie(188))}function YS(t){var e=t.alternate;if(!e){if(e=Yr(t),e===null)throw Error(ie(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return _m(r),t;if(o===i)return _m(r),e;o=o.sibling}throw Error(ie(188))}if(n.return!==i.return)n=r,i=o;else{for(var a=!1,s=r.child;s;){if(s===n){a=!0,n=r,i=o;break}if(s===i){a=!0,i=r,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,i=r;break}if(s===i){a=!0,i=o,n=r;break}s=s.sibling}if(!a)throw Error(ie(189))}}if(n.alternate!==i)throw Error(ie(190))}if(n.tag!==3)throw Error(ie(188));return n.stateNode.current===n?t:e}function D0(t){return t=YS(t),t!==null?L0(t):null}function L0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=L0(t);if(e!==null)return e;t=t.sibling}return null}var N0=_n.unstable_scheduleCallback,ym=_n.unstable_cancelCallback,qS=_n.unstable_shouldYield,KS=_n.unstable_requestPaint,Et=_n.unstable_now,ZS=_n.unstable_getCurrentPriorityLevel,Yh=_n.unstable_ImmediatePriority,I0=_n.unstable_UserBlockingPriority,Zl=_n.unstable_NormalPriority,QS=_n.unstable_LowPriority,U0=_n.unstable_IdlePriority,Iu=null,ni=null;function JS(t){if(ni&&typeof ni.onCommitFiberRoot=="function")try{ni.onCommitFiberRoot(Iu,t,void 0,(t.current.flags&128)===128)}catch{}}var Gn=Math.clz32?Math.clz32:nE,eE=Math.log,tE=Math.LN2;function nE(t){return t>>>=0,t===0?32:31-(eE(t)/tE|0)|0}var zs=64,Vs=4194304;function Ua(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ql(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,o=t.pingedLanes,a=n&268435455;if(a!==0){var s=a&~r;s!==0?i=Ua(s):(o&=a,o!==0&&(i=Ua(o)))}else a=n&~r,a!==0?i=Ua(a):o!==0&&(i=Ua(o));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,o=e&-e,r>=o||r===16&&(o&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Gn(e),r=1<<n,i|=t[n],e&=~r;return i}function iE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rE(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,o=t.pendingLanes;0<o;){var a=31-Gn(o),s=1<<a,l=r[a];l===-1?(!(s&n)||s&i)&&(r[a]=iE(s,e)):l<=e&&(t.expiredLanes|=s),o&=~s}}function Qf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function O0(){var t=zs;return zs<<=1,!(zs&4194240)&&(zs=64),t}function Ac(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function _s(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Gn(e),t[e]=n}function oE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Gn(n),o=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~o}}function qh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Gn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var it=0;function F0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var k0,Kh,B0,z0,V0,Jf=!1,Hs=[],qi=null,Ki=null,Zi=null,Za=new Map,Qa=new Map,Gi=[],aE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xm(t,e){switch(t){case"focusin":case"focusout":qi=null;break;case"dragenter":case"dragleave":Ki=null;break;case"mouseover":case"mouseout":Zi=null;break;case"pointerover":case"pointerout":Za.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qa.delete(e.pointerId)}}function xa(t,e,n,i,r,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},e!==null&&(e=xs(e),e!==null&&Kh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function sE(t,e,n,i,r){switch(e){case"focusin":return qi=xa(qi,t,e,n,i,r),!0;case"dragenter":return Ki=xa(Ki,t,e,n,i,r),!0;case"mouseover":return Zi=xa(Zi,t,e,n,i,r),!0;case"pointerover":var o=r.pointerId;return Za.set(o,xa(Za.get(o)||null,t,e,n,i,r)),!0;case"gotpointercapture":return o=r.pointerId,Qa.set(o,xa(Qa.get(o)||null,t,e,n,i,r)),!0}return!1}function H0(t){var e=Pr(t.target);if(e!==null){var n=Yr(e);if(n!==null){if(e=n.tag,e===13){if(e=P0(n),e!==null){t.blockedOn=e,V0(t.priority,function(){B0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function bl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ed(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Yf=i,n.target.dispatchEvent(i),Yf=null}else return e=xs(n),e!==null&&Kh(e),t.blockedOn=n,!1;e.shift()}return!0}function Sm(t,e,n){bl(t)&&n.delete(e)}function lE(){Jf=!1,qi!==null&&bl(qi)&&(qi=null),Ki!==null&&bl(Ki)&&(Ki=null),Zi!==null&&bl(Zi)&&(Zi=null),Za.forEach(Sm),Qa.forEach(Sm)}function Sa(t,e){t.blockedOn===e&&(t.blockedOn=null,Jf||(Jf=!0,_n.unstable_scheduleCallback(_n.unstable_NormalPriority,lE)))}function Ja(t){function e(r){return Sa(r,t)}if(0<Hs.length){Sa(Hs[0],t);for(var n=1;n<Hs.length;n++){var i=Hs[n];i.blockedOn===t&&(i.blockedOn=null)}}for(qi!==null&&Sa(qi,t),Ki!==null&&Sa(Ki,t),Zi!==null&&Sa(Zi,t),Za.forEach(e),Qa.forEach(e),n=0;n<Gi.length;n++)i=Gi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Gi.length&&(n=Gi[0],n.blockedOn===null);)H0(n),n.blockedOn===null&&Gi.shift()}var Vo=Ri.ReactCurrentBatchConfig,Jl=!0;function uE(t,e,n,i){var r=it,o=Vo.transition;Vo.transition=null;try{it=1,Zh(t,e,n,i)}finally{it=r,Vo.transition=o}}function cE(t,e,n,i){var r=it,o=Vo.transition;Vo.transition=null;try{it=4,Zh(t,e,n,i)}finally{it=r,Vo.transition=o}}function Zh(t,e,n,i){if(Jl){var r=ed(t,e,n,i);if(r===null)Oc(t,e,i,eu,n),xm(t,i);else if(sE(r,t,e,n,i))i.stopPropagation();else if(xm(t,i),e&4&&-1<aE.indexOf(t)){for(;r!==null;){var o=xs(r);if(o!==null&&k0(o),o=ed(t,e,n,i),o===null&&Oc(t,e,i,eu,n),o===r)break;r=o}r!==null&&i.stopPropagation()}else Oc(t,e,i,null,n)}}var eu=null;function ed(t,e,n,i){if(eu=null,t=$h(i),t=Pr(t),t!==null)if(e=Yr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=P0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return eu=t,null}function G0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ZS()){case Yh:return 1;case I0:return 4;case Zl:case QS:return 16;case U0:return 536870912;default:return 16}default:return 16}}var Xi=null,Qh=null,Pl=null;function W0(){if(Pl)return Pl;var t,e=Qh,n=e.length,i,r="value"in Xi?Xi.value:Xi.textContent,o=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[o-i];i++);return Pl=r.slice(t,1<i?1-i:void 0)}function Dl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Gs(){return!0}function Em(){return!1}function xn(t){function e(n,i,r,o,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in t)t.hasOwnProperty(s)&&(n=t[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Gs:Em,this.isPropagationStopped=Em,this}return vt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Gs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Gs)},persist:function(){},isPersistent:Gs}),e}var sa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jh=xn(sa),ys=vt({},sa,{view:0,detail:0}),fE=xn(ys),Cc,Rc,Ea,Uu=vt({},ys,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ep,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ea&&(Ea&&t.type==="mousemove"?(Cc=t.screenX-Ea.screenX,Rc=t.screenY-Ea.screenY):Rc=Cc=0,Ea=t),Cc)},movementY:function(t){return"movementY"in t?t.movementY:Rc}}),Mm=xn(Uu),dE=vt({},Uu,{dataTransfer:0}),hE=xn(dE),pE=vt({},ys,{relatedTarget:0}),bc=xn(pE),mE=vt({},sa,{animationName:0,elapsedTime:0,pseudoElement:0}),gE=xn(mE),vE=vt({},sa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),_E=xn(vE),yE=vt({},sa,{data:0}),wm=xn(yE),xE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},SE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},EE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ME(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=EE[t])?!!e[t]:!1}function ep(){return ME}var wE=vt({},ys,{key:function(t){if(t.key){var e=xE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Dl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?SE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ep,charCode:function(t){return t.type==="keypress"?Dl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Dl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),TE=xn(wE),AE=vt({},Uu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tm=xn(AE),CE=vt({},ys,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ep}),RE=xn(CE),bE=vt({},sa,{propertyName:0,elapsedTime:0,pseudoElement:0}),PE=xn(bE),DE=vt({},Uu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),LE=xn(DE),NE=[9,13,27,32],tp=Ei&&"CompositionEvent"in window,Va=null;Ei&&"documentMode"in document&&(Va=document.documentMode);var IE=Ei&&"TextEvent"in window&&!Va,j0=Ei&&(!tp||Va&&8<Va&&11>=Va),Am=" ",Cm=!1;function X0(t,e){switch(t){case"keyup":return NE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var To=!1;function UE(t,e){switch(t){case"compositionend":return $0(e);case"keypress":return e.which!==32?null:(Cm=!0,Am);case"textInput":return t=e.data,t===Am&&Cm?null:t;default:return null}}function OE(t,e){if(To)return t==="compositionend"||!tp&&X0(t,e)?(t=W0(),Pl=Qh=Xi=null,To=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return j0&&e.locale!=="ko"?null:e.data;default:return null}}var FE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!FE[t.type]:e==="textarea"}function Y0(t,e,n,i){T0(i),e=tu(e,"onChange"),0<e.length&&(n=new Jh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ha=null,es=null;function kE(t){o_(t,0)}function Ou(t){var e=Ro(t);if(_0(e))return t}function BE(t,e){if(t==="change")return e}var q0=!1;if(Ei){var Pc;if(Ei){var Dc="oninput"in document;if(!Dc){var bm=document.createElement("div");bm.setAttribute("oninput","return;"),Dc=typeof bm.oninput=="function"}Pc=Dc}else Pc=!1;q0=Pc&&(!document.documentMode||9<document.documentMode)}function Pm(){Ha&&(Ha.detachEvent("onpropertychange",K0),es=Ha=null)}function K0(t){if(t.propertyName==="value"&&Ou(es)){var e=[];Y0(e,es,t,$h(t)),b0(kE,e)}}function zE(t,e,n){t==="focusin"?(Pm(),Ha=e,es=n,Ha.attachEvent("onpropertychange",K0)):t==="focusout"&&Pm()}function VE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ou(es)}function HE(t,e){if(t==="click")return Ou(e)}function GE(t,e){if(t==="input"||t==="change")return Ou(e)}function WE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Xn=typeof Object.is=="function"?Object.is:WE;function ts(t,e){if(Xn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Of.call(e,r)||!Xn(t[r],e[r]))return!1}return!0}function Dm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Lm(t,e){var n=Dm(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Dm(n)}}function Z0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Z0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Q0(){for(var t=window,e=Yl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Yl(t.document)}return e}function np(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function jE(t){var e=Q0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Z0(n.ownerDocument.documentElement,n)){if(i!==null&&np(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!t.extend&&o>i&&(r=i,i=o,o=r),r=Lm(n,o);var a=Lm(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),o>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var XE=Ei&&"documentMode"in document&&11>=document.documentMode,Ao=null,td=null,Ga=null,nd=!1;function Nm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;nd||Ao==null||Ao!==Yl(i)||(i=Ao,"selectionStart"in i&&np(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ga&&ts(Ga,i)||(Ga=i,i=tu(td,"onSelect"),0<i.length&&(e=new Jh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ao)))}function Ws(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Co={animationend:Ws("Animation","AnimationEnd"),animationiteration:Ws("Animation","AnimationIteration"),animationstart:Ws("Animation","AnimationStart"),transitionend:Ws("Transition","TransitionEnd")},Lc={},J0={};Ei&&(J0=document.createElement("div").style,"AnimationEvent"in window||(delete Co.animationend.animation,delete Co.animationiteration.animation,delete Co.animationstart.animation),"TransitionEvent"in window||delete Co.transitionend.transition);function Fu(t){if(Lc[t])return Lc[t];if(!Co[t])return t;var e=Co[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in J0)return Lc[t]=e[n];return t}var e_=Fu("animationend"),t_=Fu("animationiteration"),n_=Fu("animationstart"),i_=Fu("transitionend"),r_=new Map,Im="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function cr(t,e){r_.set(t,e),$r(e,[t])}for(var Nc=0;Nc<Im.length;Nc++){var Ic=Im[Nc],$E=Ic.toLowerCase(),YE=Ic[0].toUpperCase()+Ic.slice(1);cr($E,"on"+YE)}cr(e_,"onAnimationEnd");cr(t_,"onAnimationIteration");cr(n_,"onAnimationStart");cr("dblclick","onDoubleClick");cr("focusin","onFocus");cr("focusout","onBlur");cr(i_,"onTransitionEnd");$o("onMouseEnter",["mouseout","mouseover"]);$o("onMouseLeave",["mouseout","mouseover"]);$o("onPointerEnter",["pointerout","pointerover"]);$o("onPointerLeave",["pointerout","pointerover"]);$r("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$r("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$r("onBeforeInput",["compositionend","keypress","textInput","paste"]);$r("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$r("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$r("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Oa));function Um(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,$S(i,e,void 0,t),t.currentTarget=null}function o_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var a=i.length-1;0<=a;a--){var s=i[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==o&&r.isPropagationStopped())break e;Um(r,s,u),o=l}else for(a=0;a<i.length;a++){if(s=i[a],l=s.instance,u=s.currentTarget,s=s.listener,l!==o&&r.isPropagationStopped())break e;Um(r,s,u),o=l}}}if(Kl)throw t=Zf,Kl=!1,Zf=null,t}function ut(t,e){var n=e[sd];n===void 0&&(n=e[sd]=new Set);var i=t+"__bubble";n.has(i)||(a_(e,t,2,!1),n.add(i))}function Uc(t,e,n){var i=0;e&&(i|=4),a_(n,t,i,e)}var js="_reactListening"+Math.random().toString(36).slice(2);function ns(t){if(!t[js]){t[js]=!0,h0.forEach(function(n){n!=="selectionchange"&&(qE.has(n)||Uc(n,!1,t),Uc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[js]||(e[js]=!0,Uc("selectionchange",!1,e))}}function a_(t,e,n,i){switch(G0(e)){case 1:var r=uE;break;case 4:r=cE;break;default:r=Zh}n=r.bind(null,e,n,t),r=void 0,!Kf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Oc(t,e,n,i,r){var o=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var s=i.stateNode.containerInfo;if(s===r||s.nodeType===8&&s.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;s!==null;){if(a=Pr(s),a===null)return;if(l=a.tag,l===5||l===6){i=o=a;continue e}s=s.parentNode}}i=i.return}b0(function(){var u=o,c=$h(n),f=[];e:{var h=r_.get(t);if(h!==void 0){var p=Jh,g=t;switch(t){case"keypress":if(Dl(n)===0)break e;case"keydown":case"keyup":p=TE;break;case"focusin":g="focus",p=bc;break;case"focusout":g="blur",p=bc;break;case"beforeblur":case"afterblur":p=bc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Mm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=hE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=RE;break;case e_:case t_:case n_:p=gE;break;case i_:p=PE;break;case"scroll":p=fE;break;case"wheel":p=LE;break;case"copy":case"cut":case"paste":p=_E;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Tm}var y=(e&4)!==0,m=!y&&t==="scroll",d=y?h!==null?h+"Capture":null:h;y=[];for(var _=u,v;_!==null;){v=_;var x=v.stateNode;if(v.tag===5&&x!==null&&(v=x,d!==null&&(x=Ka(_,d),x!=null&&y.push(is(_,x,v)))),m)break;_=_.return}0<y.length&&(h=new p(h,g,null,n,c),f.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==Yf&&(g=n.relatedTarget||n.fromElement)&&(Pr(g)||g[Mi]))break e;if((p||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=u,g=g?Pr(g):null,g!==null&&(m=Yr(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=u),p!==g)){if(y=Mm,x="onMouseLeave",d="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(y=Tm,x="onPointerLeave",d="onPointerEnter",_="pointer"),m=p==null?h:Ro(p),v=g==null?h:Ro(g),h=new y(x,_+"leave",p,n,c),h.target=m,h.relatedTarget=v,x=null,Pr(c)===u&&(y=new y(d,_+"enter",g,n,c),y.target=v,y.relatedTarget=m,x=y),m=x,p&&g)t:{for(y=p,d=g,_=0,v=y;v;v=ro(v))_++;for(v=0,x=d;x;x=ro(x))v++;for(;0<_-v;)y=ro(y),_--;for(;0<v-_;)d=ro(d),v--;for(;_--;){if(y===d||d!==null&&y===d.alternate)break t;y=ro(y),d=ro(d)}y=null}else y=null;p!==null&&Om(f,h,p,y,!1),g!==null&&m!==null&&Om(f,m,g,y,!0)}}e:{if(h=u?Ro(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var b=BE;else if(Rm(h))if(q0)b=GE;else{b=VE;var T=zE}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(b=HE);if(b&&(b=b(t,u))){Y0(f,b,n,c);break e}T&&T(t,h,u),t==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&Gf(h,"number",h.value)}switch(T=u?Ro(u):window,t){case"focusin":(Rm(T)||T.contentEditable==="true")&&(Ao=T,td=u,Ga=null);break;case"focusout":Ga=td=Ao=null;break;case"mousedown":nd=!0;break;case"contextmenu":case"mouseup":case"dragend":nd=!1,Nm(f,n,c);break;case"selectionchange":if(XE)break;case"keydown":case"keyup":Nm(f,n,c)}var A;if(tp)e:{switch(t){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else To?X0(t,n)&&(C="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(j0&&n.locale!=="ko"&&(To||C!=="onCompositionStart"?C==="onCompositionEnd"&&To&&(A=W0()):(Xi=c,Qh="value"in Xi?Xi.value:Xi.textContent,To=!0)),T=tu(u,C),0<T.length&&(C=new wm(C,t,null,n,c),f.push({event:C,listeners:T}),A?C.data=A:(A=$0(n),A!==null&&(C.data=A)))),(A=IE?UE(t,n):OE(t,n))&&(u=tu(u,"onBeforeInput"),0<u.length&&(c=new wm("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=A))}o_(f,e)})}function is(t,e,n){return{instance:t,listener:e,currentTarget:n}}function tu(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=Ka(t,n),o!=null&&i.unshift(is(t,o,r)),o=Ka(t,e),o!=null&&i.push(is(t,o,r))),t=t.return}return i}function ro(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Om(t,e,n,i,r){for(var o=e._reactName,a=[];n!==null&&n!==i;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===i)break;s.tag===5&&u!==null&&(s=u,r?(l=Ka(n,o),l!=null&&a.unshift(is(n,l,s))):r||(l=Ka(n,o),l!=null&&a.push(is(n,l,s)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var KE=/\r\n?/g,ZE=/\u0000|\uFFFD/g;function Fm(t){return(typeof t=="string"?t:""+t).replace(KE,`
`).replace(ZE,"")}function Xs(t,e,n){if(e=Fm(e),Fm(t)!==e&&n)throw Error(ie(425))}function nu(){}var id=null,rd=null;function od(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ad=typeof setTimeout=="function"?setTimeout:void 0,QE=typeof clearTimeout=="function"?clearTimeout:void 0,km=typeof Promise=="function"?Promise:void 0,JE=typeof queueMicrotask=="function"?queueMicrotask:typeof km<"u"?function(t){return km.resolve(null).then(t).catch(eM)}:ad;function eM(t){setTimeout(function(){throw t})}function Fc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ja(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ja(e)}function Qi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Bm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var la=Math.random().toString(36).slice(2),ei="__reactFiber$"+la,rs="__reactProps$"+la,Mi="__reactContainer$"+la,sd="__reactEvents$"+la,tM="__reactListeners$"+la,nM="__reactHandles$"+la;function Pr(t){var e=t[ei];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Mi]||n[ei]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Bm(t);t!==null;){if(n=t[ei])return n;t=Bm(t)}return e}t=n,n=t.parentNode}return null}function xs(t){return t=t[ei]||t[Mi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ro(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ie(33))}function ku(t){return t[rs]||null}var ld=[],bo=-1;function fr(t){return{current:t}}function ft(t){0>bo||(t.current=ld[bo],ld[bo]=null,bo--)}function at(t,e){bo++,ld[bo]=t.current,t.current=e}var sr={},Xt=fr(sr),an=fr(!1),Br=sr;function Yo(t,e){var n=t.type.contextTypes;if(!n)return sr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in n)r[o]=e[o];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function sn(t){return t=t.childContextTypes,t!=null}function iu(){ft(an),ft(Xt)}function zm(t,e,n){if(Xt.current!==sr)throw Error(ie(168));at(Xt,e),at(an,n)}function s_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ie(108,zS(t)||"Unknown",r));return vt({},n,i)}function ru(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||sr,Br=Xt.current,at(Xt,t),at(an,an.current),!0}function Vm(t,e,n){var i=t.stateNode;if(!i)throw Error(ie(169));n?(t=s_(t,e,Br),i.__reactInternalMemoizedMergedChildContext=t,ft(an),ft(Xt),at(Xt,t)):ft(an),at(an,n)}var hi=null,Bu=!1,kc=!1;function l_(t){hi===null?hi=[t]:hi.push(t)}function iM(t){Bu=!0,l_(t)}function dr(){if(!kc&&hi!==null){kc=!0;var t=0,e=it;try{var n=hi;for(it=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}hi=null,Bu=!1}catch(r){throw hi!==null&&(hi=hi.slice(t+1)),N0(Yh,dr),r}finally{it=e,kc=!1}}return null}var Po=[],Do=0,ou=null,au=0,Mn=[],wn=0,zr=null,mi=1,gi="";function wr(t,e){Po[Do++]=au,Po[Do++]=ou,ou=t,au=e}function u_(t,e,n){Mn[wn++]=mi,Mn[wn++]=gi,Mn[wn++]=zr,zr=t;var i=mi;t=gi;var r=32-Gn(i)-1;i&=~(1<<r),n+=1;var o=32-Gn(e)+r;if(30<o){var a=r-r%5;o=(i&(1<<a)-1).toString(32),i>>=a,r-=a,mi=1<<32-Gn(e)+r|n<<r|i,gi=o+t}else mi=1<<o|n<<r|i,gi=t}function ip(t){t.return!==null&&(wr(t,1),u_(t,1,0))}function rp(t){for(;t===ou;)ou=Po[--Do],Po[Do]=null,au=Po[--Do],Po[Do]=null;for(;t===zr;)zr=Mn[--wn],Mn[wn]=null,gi=Mn[--wn],Mn[wn]=null,mi=Mn[--wn],Mn[wn]=null}var vn=null,gn=null,ht=!1,zn=null;function c_(t,e){var n=An(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Hm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,vn=t,gn=Qi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,vn=t,gn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=zr!==null?{id:mi,overflow:gi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=An(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,vn=t,gn=null,!0):!1;default:return!1}}function ud(t){return(t.mode&1)!==0&&(t.flags&128)===0}function cd(t){if(ht){var e=gn;if(e){var n=e;if(!Hm(t,e)){if(ud(t))throw Error(ie(418));e=Qi(n.nextSibling);var i=vn;e&&Hm(t,e)?c_(i,n):(t.flags=t.flags&-4097|2,ht=!1,vn=t)}}else{if(ud(t))throw Error(ie(418));t.flags=t.flags&-4097|2,ht=!1,vn=t}}}function Gm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;vn=t}function $s(t){if(t!==vn)return!1;if(!ht)return Gm(t),ht=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!od(t.type,t.memoizedProps)),e&&(e=gn)){if(ud(t))throw f_(),Error(ie(418));for(;e;)c_(t,e),e=Qi(e.nextSibling)}if(Gm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ie(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){gn=Qi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}gn=null}}else gn=vn?Qi(t.stateNode.nextSibling):null;return!0}function f_(){for(var t=gn;t;)t=Qi(t.nextSibling)}function qo(){gn=vn=null,ht=!1}function op(t){zn===null?zn=[t]:zn.push(t)}var rM=Ri.ReactCurrentBatchConfig;function Ma(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ie(309));var i=n.stateNode}if(!i)throw Error(ie(147,t));var r=i,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(a){var s=r.refs;a===null?delete s[o]:s[o]=a},e._stringRef=o,e)}if(typeof t!="string")throw Error(ie(284));if(!n._owner)throw Error(ie(290,t))}return t}function Ys(t,e){throw t=Object.prototype.toString.call(e),Error(ie(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Wm(t){var e=t._init;return e(t._payload)}function d_(t){function e(d,_){if(t){var v=d.deletions;v===null?(d.deletions=[_],d.flags|=16):v.push(_)}}function n(d,_){if(!t)return null;for(;_!==null;)e(d,_),_=_.sibling;return null}function i(d,_){for(d=new Map;_!==null;)_.key!==null?d.set(_.key,_):d.set(_.index,_),_=_.sibling;return d}function r(d,_){return d=nr(d,_),d.index=0,d.sibling=null,d}function o(d,_,v){return d.index=v,t?(v=d.alternate,v!==null?(v=v.index,v<_?(d.flags|=2,_):v):(d.flags|=2,_)):(d.flags|=1048576,_)}function a(d){return t&&d.alternate===null&&(d.flags|=2),d}function s(d,_,v,x){return _===null||_.tag!==6?(_=jc(v,d.mode,x),_.return=d,_):(_=r(_,v),_.return=d,_)}function l(d,_,v,x){var b=v.type;return b===wo?c(d,_,v.props.children,x,v.key):_!==null&&(_.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Vi&&Wm(b)===_.type)?(x=r(_,v.props),x.ref=Ma(d,_,v),x.return=d,x):(x=kl(v.type,v.key,v.props,null,d.mode,x),x.ref=Ma(d,_,v),x.return=d,x)}function u(d,_,v,x){return _===null||_.tag!==4||_.stateNode.containerInfo!==v.containerInfo||_.stateNode.implementation!==v.implementation?(_=Xc(v,d.mode,x),_.return=d,_):(_=r(_,v.children||[]),_.return=d,_)}function c(d,_,v,x,b){return _===null||_.tag!==7?(_=Or(v,d.mode,x,b),_.return=d,_):(_=r(_,v),_.return=d,_)}function f(d,_,v){if(typeof _=="string"&&_!==""||typeof _=="number")return _=jc(""+_,d.mode,v),_.return=d,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Fs:return v=kl(_.type,_.key,_.props,null,d.mode,v),v.ref=Ma(d,null,_),v.return=d,v;case Mo:return _=Xc(_,d.mode,v),_.return=d,_;case Vi:var x=_._init;return f(d,x(_._payload),v)}if(Ia(_)||_a(_))return _=Or(_,d.mode,v,null),_.return=d,_;Ys(d,_)}return null}function h(d,_,v,x){var b=_!==null?_.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return b!==null?null:s(d,_,""+v,x);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Fs:return v.key===b?l(d,_,v,x):null;case Mo:return v.key===b?u(d,_,v,x):null;case Vi:return b=v._init,h(d,_,b(v._payload),x)}if(Ia(v)||_a(v))return b!==null?null:c(d,_,v,x,null);Ys(d,v)}return null}function p(d,_,v,x,b){if(typeof x=="string"&&x!==""||typeof x=="number")return d=d.get(v)||null,s(_,d,""+x,b);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Fs:return d=d.get(x.key===null?v:x.key)||null,l(_,d,x,b);case Mo:return d=d.get(x.key===null?v:x.key)||null,u(_,d,x,b);case Vi:var T=x._init;return p(d,_,v,T(x._payload),b)}if(Ia(x)||_a(x))return d=d.get(v)||null,c(_,d,x,b,null);Ys(_,x)}return null}function g(d,_,v,x){for(var b=null,T=null,A=_,C=_=0,w=null;A!==null&&C<v.length;C++){A.index>C?(w=A,A=null):w=A.sibling;var S=h(d,A,v[C],x);if(S===null){A===null&&(A=w);break}t&&A&&S.alternate===null&&e(d,A),_=o(S,_,C),T===null?b=S:T.sibling=S,T=S,A=w}if(C===v.length)return n(d,A),ht&&wr(d,C),b;if(A===null){for(;C<v.length;C++)A=f(d,v[C],x),A!==null&&(_=o(A,_,C),T===null?b=A:T.sibling=A,T=A);return ht&&wr(d,C),b}for(A=i(d,A);C<v.length;C++)w=p(A,d,C,v[C],x),w!==null&&(t&&w.alternate!==null&&A.delete(w.key===null?C:w.key),_=o(w,_,C),T===null?b=w:T.sibling=w,T=w);return t&&A.forEach(function(D){return e(d,D)}),ht&&wr(d,C),b}function y(d,_,v,x){var b=_a(v);if(typeof b!="function")throw Error(ie(150));if(v=b.call(v),v==null)throw Error(ie(151));for(var T=b=null,A=_,C=_=0,w=null,S=v.next();A!==null&&!S.done;C++,S=v.next()){A.index>C?(w=A,A=null):w=A.sibling;var D=h(d,A,S.value,x);if(D===null){A===null&&(A=w);break}t&&A&&D.alternate===null&&e(d,A),_=o(D,_,C),T===null?b=D:T.sibling=D,T=D,A=w}if(S.done)return n(d,A),ht&&wr(d,C),b;if(A===null){for(;!S.done;C++,S=v.next())S=f(d,S.value,x),S!==null&&(_=o(S,_,C),T===null?b=S:T.sibling=S,T=S);return ht&&wr(d,C),b}for(A=i(d,A);!S.done;C++,S=v.next())S=p(A,d,C,S.value,x),S!==null&&(t&&S.alternate!==null&&A.delete(S.key===null?C:S.key),_=o(S,_,C),T===null?b=S:T.sibling=S,T=S);return t&&A.forEach(function(H){return e(d,H)}),ht&&wr(d,C),b}function m(d,_,v,x){if(typeof v=="object"&&v!==null&&v.type===wo&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Fs:e:{for(var b=v.key,T=_;T!==null;){if(T.key===b){if(b=v.type,b===wo){if(T.tag===7){n(d,T.sibling),_=r(T,v.props.children),_.return=d,d=_;break e}}else if(T.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Vi&&Wm(b)===T.type){n(d,T.sibling),_=r(T,v.props),_.ref=Ma(d,T,v),_.return=d,d=_;break e}n(d,T);break}else e(d,T);T=T.sibling}v.type===wo?(_=Or(v.props.children,d.mode,x,v.key),_.return=d,d=_):(x=kl(v.type,v.key,v.props,null,d.mode,x),x.ref=Ma(d,_,v),x.return=d,d=x)}return a(d);case Mo:e:{for(T=v.key;_!==null;){if(_.key===T)if(_.tag===4&&_.stateNode.containerInfo===v.containerInfo&&_.stateNode.implementation===v.implementation){n(d,_.sibling),_=r(_,v.children||[]),_.return=d,d=_;break e}else{n(d,_);break}else e(d,_);_=_.sibling}_=Xc(v,d.mode,x),_.return=d,d=_}return a(d);case Vi:return T=v._init,m(d,_,T(v._payload),x)}if(Ia(v))return g(d,_,v,x);if(_a(v))return y(d,_,v,x);Ys(d,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,_!==null&&_.tag===6?(n(d,_.sibling),_=r(_,v),_.return=d,d=_):(n(d,_),_=jc(v,d.mode,x),_.return=d,d=_),a(d)):n(d,_)}return m}var Ko=d_(!0),h_=d_(!1),su=fr(null),lu=null,Lo=null,ap=null;function sp(){ap=Lo=lu=null}function lp(t){var e=su.current;ft(su),t._currentValue=e}function fd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ho(t,e){lu=t,ap=Lo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(on=!0),t.firstContext=null)}function Pn(t){var e=t._currentValue;if(ap!==t)if(t={context:t,memoizedValue:e,next:null},Lo===null){if(lu===null)throw Error(ie(308));Lo=t,lu.dependencies={lanes:0,firstContext:t}}else Lo=Lo.next=t;return e}var Dr=null;function up(t){Dr===null?Dr=[t]:Dr.push(t)}function p_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,up(e)):(n.next=r.next,r.next=n),e.interleaved=n,wi(t,i)}function wi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Hi=!1;function cp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function m_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Si(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ji(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ke&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,wi(t,n)}return r=i.interleaved,r===null?(e.next=e,up(i)):(e.next=r.next,r.next=e),i.interleaved=e,wi(t,n)}function Ll(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,qh(t,n)}}function jm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?r=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?r=o=e:o=o.next=e}else r=o=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function uu(t,e,n,i){var r=t.updateQueue;Hi=!1;var o=r.firstBaseUpdate,a=r.lastBaseUpdate,s=r.shared.pending;if(s!==null){r.shared.pending=null;var l=s,u=l.next;l.next=null,a===null?o=u:a.next=u,a=l;var c=t.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==a&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(o!==null){var f=r.baseState;a=0,c=u=l=null,s=o;do{var h=s.lane,p=s.eventTime;if((i&h)===h){c!==null&&(c=c.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var g=t,y=s;switch(h=e,p=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){f=g.call(p,f,h);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,h=typeof g=="function"?g.call(p,f,h):g,h==null)break e;f=vt({},f,h);break e;case 2:Hi=!0}}s.callback!==null&&s.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[s]:h.push(s))}else p={eventTime:p,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=p,l=f):c=c.next=p,a|=h;if(s=s.next,s===null){if(s=r.shared.pending,s===null)break;h=s,s=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(c===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else o===null&&(r.shared.lanes=0);Hr|=a,t.lanes=a,t.memoizedState=f}}function Xm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ie(191,r));r.call(i)}}}var Ss={},ii=fr(Ss),os=fr(Ss),as=fr(Ss);function Lr(t){if(t===Ss)throw Error(ie(174));return t}function fp(t,e){switch(at(as,e),at(os,t),at(ii,Ss),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:jf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=jf(e,t)}ft(ii),at(ii,e)}function Zo(){ft(ii),ft(os),ft(as)}function g_(t){Lr(as.current);var e=Lr(ii.current),n=jf(e,t.type);e!==n&&(at(os,t),at(ii,n))}function dp(t){os.current===t&&(ft(ii),ft(os))}var mt=fr(0);function cu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Bc=[];function hp(){for(var t=0;t<Bc.length;t++)Bc[t]._workInProgressVersionPrimary=null;Bc.length=0}var Nl=Ri.ReactCurrentDispatcher,zc=Ri.ReactCurrentBatchConfig,Vr=0,gt=null,bt=null,It=null,fu=!1,Wa=!1,ss=0,oM=0;function Vt(){throw Error(ie(321))}function pp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Xn(t[n],e[n]))return!1;return!0}function mp(t,e,n,i,r,o){if(Vr=o,gt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Nl.current=t===null||t.memoizedState===null?uM:cM,t=n(i,r),Wa){o=0;do{if(Wa=!1,ss=0,25<=o)throw Error(ie(301));o+=1,It=bt=null,e.updateQueue=null,Nl.current=fM,t=n(i,r)}while(Wa)}if(Nl.current=du,e=bt!==null&&bt.next!==null,Vr=0,It=bt=gt=null,fu=!1,e)throw Error(ie(300));return t}function gp(){var t=ss!==0;return ss=0,t}function Zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return It===null?gt.memoizedState=It=t:It=It.next=t,It}function Dn(){if(bt===null){var t=gt.alternate;t=t!==null?t.memoizedState:null}else t=bt.next;var e=It===null?gt.memoizedState:It.next;if(e!==null)It=e,bt=t;else{if(t===null)throw Error(ie(310));bt=t,t={memoizedState:bt.memoizedState,baseState:bt.baseState,baseQueue:bt.baseQueue,queue:bt.queue,next:null},It===null?gt.memoizedState=It=t:It=It.next=t}return It}function ls(t,e){return typeof e=="function"?e(t):e}function Vc(t){var e=Dn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=bt,r=i.baseQueue,o=n.pending;if(o!==null){if(r!==null){var a=r.next;r.next=o.next,o.next=a}i.baseQueue=r=o,n.pending=null}if(r!==null){o=r.next,i=i.baseState;var s=a=null,l=null,u=o;do{var c=u.lane;if((Vr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=f,a=i):l=l.next=f,gt.lanes|=c,Hr|=c}u=u.next}while(u!==null&&u!==o);l===null?a=i:l.next=s,Xn(i,e.memoizedState)||(on=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do o=r.lane,gt.lanes|=o,Hr|=o,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Hc(t){var e=Dn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,o=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do o=t(o,a.action),a=a.next;while(a!==r);Xn(o,e.memoizedState)||(on=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,i]}function v_(){}function __(t,e){var n=gt,i=Dn(),r=e(),o=!Xn(i.memoizedState,r);if(o&&(i.memoizedState=r,on=!0),i=i.queue,vp(S_.bind(null,n,i,t),[t]),i.getSnapshot!==e||o||It!==null&&It.memoizedState.tag&1){if(n.flags|=2048,us(9,x_.bind(null,n,i,r,e),void 0,null),Ot===null)throw Error(ie(349));Vr&30||y_(n,e,r)}return r}function y_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function x_(t,e,n,i){e.value=n,e.getSnapshot=i,E_(e)&&M_(t)}function S_(t,e,n){return n(function(){E_(e)&&M_(t)})}function E_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Xn(t,n)}catch{return!0}}function M_(t){var e=wi(t,1);e!==null&&Wn(e,t,1,-1)}function $m(t){var e=Zn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ls,lastRenderedState:t},e.queue=t,t=t.dispatch=lM.bind(null,gt,t),[e.memoizedState,t]}function us(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function w_(){return Dn().memoizedState}function Il(t,e,n,i){var r=Zn();gt.flags|=t,r.memoizedState=us(1|e,n,void 0,i===void 0?null:i)}function zu(t,e,n,i){var r=Dn();i=i===void 0?null:i;var o=void 0;if(bt!==null){var a=bt.memoizedState;if(o=a.destroy,i!==null&&pp(i,a.deps)){r.memoizedState=us(e,n,o,i);return}}gt.flags|=t,r.memoizedState=us(1|e,n,o,i)}function Ym(t,e){return Il(8390656,8,t,e)}function vp(t,e){return zu(2048,8,t,e)}function T_(t,e){return zu(4,2,t,e)}function A_(t,e){return zu(4,4,t,e)}function C_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function R_(t,e,n){return n=n!=null?n.concat([t]):null,zu(4,4,C_.bind(null,e,t),n)}function _p(){}function b_(t,e){var n=Dn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&pp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function P_(t,e){var n=Dn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&pp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function D_(t,e,n){return Vr&21?(Xn(n,e)||(n=O0(),gt.lanes|=n,Hr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,on=!0),t.memoizedState=n)}function aM(t,e){var n=it;it=n!==0&&4>n?n:4,t(!0);var i=zc.transition;zc.transition={};try{t(!1),e()}finally{it=n,zc.transition=i}}function L_(){return Dn().memoizedState}function sM(t,e,n){var i=tr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},N_(t))I_(e,n);else if(n=p_(t,e,n,i),n!==null){var r=qt();Wn(n,t,i,r),U_(n,e,i)}}function lM(t,e,n){var i=tr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(N_(t))I_(e,r);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var a=e.lastRenderedState,s=o(a,n);if(r.hasEagerState=!0,r.eagerState=s,Xn(s,a)){var l=e.interleaved;l===null?(r.next=r,up(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=p_(t,e,r,i),n!==null&&(r=qt(),Wn(n,t,i,r),U_(n,e,i))}}function N_(t){var e=t.alternate;return t===gt||e!==null&&e===gt}function I_(t,e){Wa=fu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function U_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,qh(t,n)}}var du={readContext:Pn,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useInsertionEffect:Vt,useLayoutEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useMutableSource:Vt,useSyncExternalStore:Vt,useId:Vt,unstable_isNewReconciler:!1},uM={readContext:Pn,useCallback:function(t,e){return Zn().memoizedState=[t,e===void 0?null:e],t},useContext:Pn,useEffect:Ym,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Il(4194308,4,C_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Il(4194308,4,t,e)},useInsertionEffect:function(t,e){return Il(4,2,t,e)},useMemo:function(t,e){var n=Zn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Zn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=sM.bind(null,gt,t),[i.memoizedState,t]},useRef:function(t){var e=Zn();return t={current:t},e.memoizedState=t},useState:$m,useDebugValue:_p,useDeferredValue:function(t){return Zn().memoizedState=t},useTransition:function(){var t=$m(!1),e=t[0];return t=aM.bind(null,t[1]),Zn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=gt,r=Zn();if(ht){if(n===void 0)throw Error(ie(407));n=n()}else{if(n=e(),Ot===null)throw Error(ie(349));Vr&30||y_(i,e,n)}r.memoizedState=n;var o={value:n,getSnapshot:e};return r.queue=o,Ym(S_.bind(null,i,o,t),[t]),i.flags|=2048,us(9,x_.bind(null,i,o,n,e),void 0,null),n},useId:function(){var t=Zn(),e=Ot.identifierPrefix;if(ht){var n=gi,i=mi;n=(i&~(1<<32-Gn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ss++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=oM++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},cM={readContext:Pn,useCallback:b_,useContext:Pn,useEffect:vp,useImperativeHandle:R_,useInsertionEffect:T_,useLayoutEffect:A_,useMemo:P_,useReducer:Vc,useRef:w_,useState:function(){return Vc(ls)},useDebugValue:_p,useDeferredValue:function(t){var e=Dn();return D_(e,bt.memoizedState,t)},useTransition:function(){var t=Vc(ls)[0],e=Dn().memoizedState;return[t,e]},useMutableSource:v_,useSyncExternalStore:__,useId:L_,unstable_isNewReconciler:!1},fM={readContext:Pn,useCallback:b_,useContext:Pn,useEffect:vp,useImperativeHandle:R_,useInsertionEffect:T_,useLayoutEffect:A_,useMemo:P_,useReducer:Hc,useRef:w_,useState:function(){return Hc(ls)},useDebugValue:_p,useDeferredValue:function(t){var e=Dn();return bt===null?e.memoizedState=t:D_(e,bt.memoizedState,t)},useTransition:function(){var t=Hc(ls)[0],e=Dn().memoizedState;return[t,e]},useMutableSource:v_,useSyncExternalStore:__,useId:L_,unstable_isNewReconciler:!1};function kn(t,e){if(t&&t.defaultProps){e=vt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function dd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:vt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Vu={isMounted:function(t){return(t=t._reactInternals)?Yr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=qt(),r=tr(t),o=Si(i,r);o.payload=e,n!=null&&(o.callback=n),e=Ji(t,o,r),e!==null&&(Wn(e,t,r,i),Ll(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=qt(),r=tr(t),o=Si(i,r);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Ji(t,o,r),e!==null&&(Wn(e,t,r,i),Ll(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=qt(),i=tr(t),r=Si(n,i);r.tag=2,e!=null&&(r.callback=e),e=Ji(t,r,i),e!==null&&(Wn(e,t,i,n),Ll(e,t,i))}};function qm(t,e,n,i,r,o,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,a):e.prototype&&e.prototype.isPureReactComponent?!ts(n,i)||!ts(r,o):!0}function O_(t,e,n){var i=!1,r=sr,o=e.contextType;return typeof o=="object"&&o!==null?o=Pn(o):(r=sn(e)?Br:Xt.current,i=e.contextTypes,o=(i=i!=null)?Yo(t,r):sr),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Vu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=o),e}function Km(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Vu.enqueueReplaceState(e,e.state,null)}function hd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},cp(t);var o=e.contextType;typeof o=="object"&&o!==null?r.context=Pn(o):(o=sn(e)?Br:Xt.current,r.context=Yo(t,o)),r.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(dd(t,e,o,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Vu.enqueueReplaceState(r,r.state,null),uu(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Qo(t,e){try{var n="",i=e;do n+=BS(i),i=i.return;while(i);var r=n}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:r,digest:null}}function Gc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function pd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var dM=typeof WeakMap=="function"?WeakMap:Map;function F_(t,e,n){n=Si(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){pu||(pu=!0,wd=i),pd(t,e)},n}function k_(t,e,n){n=Si(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){pd(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){pd(t,e),typeof i!="function"&&(er===null?er=new Set([this]):er.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Zm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new dM;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=AM.bind(null,t,e,n),e.then(t,t))}function Qm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Jm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Si(-1,1),e.tag=2,Ji(n,e,1))),n.lanes|=1),t)}var hM=Ri.ReactCurrentOwner,on=!1;function Yt(t,e,n,i){e.child=t===null?h_(e,null,n,i):Ko(e,t.child,n,i)}function eg(t,e,n,i,r){n=n.render;var o=e.ref;return Ho(e,r),i=mp(t,e,n,i,o,r),n=gp(),t!==null&&!on?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ti(t,e,r)):(ht&&n&&ip(e),e.flags|=1,Yt(t,e,i,r),e.child)}function tg(t,e,n,i,r){if(t===null){var o=n.type;return typeof o=="function"&&!Ap(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,B_(t,e,o,i,r)):(t=kl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&r)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:ts,n(a,i)&&t.ref===e.ref)return Ti(t,e,r)}return e.flags|=1,t=nr(o,i),t.ref=e.ref,t.return=e,e.child=t}function B_(t,e,n,i,r){if(t!==null){var o=t.memoizedProps;if(ts(o,i)&&t.ref===e.ref)if(on=!1,e.pendingProps=i=o,(t.lanes&r)!==0)t.flags&131072&&(on=!0);else return e.lanes=t.lanes,Ti(t,e,r)}return md(t,e,n,i,r)}function z_(t,e,n){var i=e.pendingProps,r=i.children,o=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},at(Io,mn),mn|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,at(Io,mn),mn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,at(Io,mn),mn|=i}else o!==null?(i=o.baseLanes|n,e.memoizedState=null):i=n,at(Io,mn),mn|=i;return Yt(t,e,r,n),e.child}function V_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function md(t,e,n,i,r){var o=sn(n)?Br:Xt.current;return o=Yo(e,o),Ho(e,r),n=mp(t,e,n,i,o,r),i=gp(),t!==null&&!on?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ti(t,e,r)):(ht&&i&&ip(e),e.flags|=1,Yt(t,e,n,r),e.child)}function ng(t,e,n,i,r){if(sn(n)){var o=!0;ru(e)}else o=!1;if(Ho(e,r),e.stateNode===null)Ul(t,e),O_(e,n,i),hd(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,s=e.memoizedProps;a.props=s;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Pn(u):(u=sn(n)?Br:Xt.current,u=Yo(e,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==i||l!==u)&&Km(e,a,i,u),Hi=!1;var h=e.memoizedState;a.state=h,uu(e,i,a,r),l=e.memoizedState,s!==i||h!==l||an.current||Hi?(typeof c=="function"&&(dd(e,n,c,i),l=e.memoizedState),(s=Hi||qm(e,n,s,i,h,l,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=u,i=s):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,m_(t,e),s=e.memoizedProps,u=e.type===e.elementType?s:kn(e.type,s),a.props=u,f=e.pendingProps,h=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Pn(l):(l=sn(n)?Br:Xt.current,l=Yo(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==f||h!==l)&&Km(e,a,i,l),Hi=!1,h=e.memoizedState,a.state=h,uu(e,i,a,r);var g=e.memoizedState;s!==f||h!==g||an.current||Hi?(typeof p=="function"&&(dd(e,n,p,i),g=e.memoizedState),(u=Hi||qm(e,n,u,i,h,g,l)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,g,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,g,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),a.props=i,a.state=g,a.context=l,i=u):(typeof a.componentDidUpdate!="function"||s===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return gd(t,e,n,i,o,r)}function gd(t,e,n,i,r,o){V_(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Vm(e,n,!1),Ti(t,e,o);i=e.stateNode,hM.current=e;var s=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Ko(e,t.child,null,o),e.child=Ko(e,null,s,o)):Yt(t,e,s,o),e.memoizedState=i.state,r&&Vm(e,n,!0),e.child}function H_(t){var e=t.stateNode;e.pendingContext?zm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&zm(t,e.context,!1),fp(t,e.containerInfo)}function ig(t,e,n,i,r){return qo(),op(r),e.flags|=256,Yt(t,e,n,i),e.child}var vd={dehydrated:null,treeContext:null,retryLane:0};function _d(t){return{baseLanes:t,cachePool:null,transitions:null}}function G_(t,e,n){var i=e.pendingProps,r=mt.current,o=!1,a=(e.flags&128)!==0,s;if((s=a)||(s=t!==null&&t.memoizedState===null?!1:(r&2)!==0),s?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),at(mt,r&1),t===null)return cd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,o?(i=e.mode,o=e.child,a={mode:"hidden",children:a},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Wu(a,i,0,null),t=Or(t,i,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=_d(n),e.memoizedState=vd,t):yp(e,a));if(r=t.memoizedState,r!==null&&(s=r.dehydrated,s!==null))return pM(t,e,a,i,s,r,n);if(o){o=i.fallback,a=e.mode,r=t.child,s=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=nr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),s!==null?o=nr(s,o):(o=Or(o,a,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,a=t.child.memoizedState,a=a===null?_d(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=t.childLanes&~n,e.memoizedState=vd,i}return o=t.child,t=o.sibling,i=nr(o,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function yp(t,e){return e=Wu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function qs(t,e,n,i){return i!==null&&op(i),Ko(e,t.child,null,n),t=yp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function pM(t,e,n,i,r,o,a){if(n)return e.flags&256?(e.flags&=-257,i=Gc(Error(ie(422))),qs(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=i.fallback,r=e.mode,i=Wu({mode:"visible",children:i.children},r,0,null),o=Or(o,r,a,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,e.mode&1&&Ko(e,t.child,null,a),e.child.memoizedState=_d(a),e.memoizedState=vd,o);if(!(e.mode&1))return qs(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var s=i.dgst;return i=s,o=Error(ie(419)),i=Gc(o,i,void 0),qs(t,e,a,i)}if(s=(a&t.childLanes)!==0,on||s){if(i=Ot,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,wi(t,r),Wn(i,t,r,-1))}return Tp(),i=Gc(Error(ie(421))),qs(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=CM.bind(null,t),r._reactRetry=e,null):(t=o.treeContext,gn=Qi(r.nextSibling),vn=e,ht=!0,zn=null,t!==null&&(Mn[wn++]=mi,Mn[wn++]=gi,Mn[wn++]=zr,mi=t.id,gi=t.overflow,zr=e),e=yp(e,i.children),e.flags|=4096,e)}function rg(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),fd(t.return,e,n)}function Wc(t,e,n,i,r){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r)}function W_(t,e,n){var i=e.pendingProps,r=i.revealOrder,o=i.tail;if(Yt(t,e,i.children,n),i=mt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&rg(t,n,e);else if(t.tag===19)rg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(at(mt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&cu(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Wc(e,!1,r,n,o);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&cu(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Wc(e,!0,n,null,o);break;case"together":Wc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ul(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ti(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Hr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ie(153));if(e.child!==null){for(t=e.child,n=nr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=nr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function mM(t,e,n){switch(e.tag){case 3:H_(e),qo();break;case 5:g_(e);break;case 1:sn(e.type)&&ru(e);break;case 4:fp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;at(su,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(at(mt,mt.current&1),e.flags|=128,null):n&e.child.childLanes?G_(t,e,n):(at(mt,mt.current&1),t=Ti(t,e,n),t!==null?t.sibling:null);at(mt,mt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return W_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),at(mt,mt.current),i)break;return null;case 22:case 23:return e.lanes=0,z_(t,e,n)}return Ti(t,e,n)}var j_,yd,X_,$_;j_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};yd=function(){};X_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Lr(ii.current);var o=null;switch(n){case"input":r=Vf(t,r),i=Vf(t,i),o=[];break;case"select":r=vt({},r,{value:void 0}),i=vt({},i,{value:void 0}),o=[];break;case"textarea":r=Wf(t,r),i=Wf(t,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=nu)}Xf(n,i);var a;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var s=r[u];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ya.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in i){var l=i[u];if(s=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ya.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ut("scroll",t),o||s===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};$_=function(t,e,n,i){n!==i&&(e.flags|=4)};function wa(t,e){if(!ht)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ht(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function gM(t,e,n){var i=e.pendingProps;switch(rp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ht(e),null;case 1:return sn(e.type)&&iu(),Ht(e),null;case 3:return i=e.stateNode,Zo(),ft(an),ft(Xt),hp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&($s(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,zn!==null&&(Cd(zn),zn=null))),yd(t,e),Ht(e),null;case 5:dp(e);var r=Lr(as.current);if(n=e.type,t!==null&&e.stateNode!=null)X_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return Ht(e),null}if(t=Lr(ii.current),$s(e)){i=e.stateNode,n=e.type;var o=e.memoizedProps;switch(i[ei]=e,i[rs]=o,t=(e.mode&1)!==0,n){case"dialog":ut("cancel",i),ut("close",i);break;case"iframe":case"object":case"embed":ut("load",i);break;case"video":case"audio":for(r=0;r<Oa.length;r++)ut(Oa[r],i);break;case"source":ut("error",i);break;case"img":case"image":case"link":ut("error",i),ut("load",i);break;case"details":ut("toggle",i);break;case"input":hm(i,o),ut("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},ut("invalid",i);break;case"textarea":mm(i,o),ut("invalid",i)}Xf(n,o),r=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?i.textContent!==s&&(o.suppressHydrationWarning!==!0&&Xs(i.textContent,s,t),r=["children",s]):typeof s=="number"&&i.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&Xs(i.textContent,s,t),r=["children",""+s]):Ya.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&ut("scroll",i)}switch(n){case"input":ks(i),pm(i,o,!0);break;case"textarea":ks(i),gm(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=nu)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=S0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[ei]=e,t[rs]=i,j_(t,e,!1,!1),e.stateNode=t;e:{switch(a=$f(n,i),n){case"dialog":ut("cancel",t),ut("close",t),r=i;break;case"iframe":case"object":case"embed":ut("load",t),r=i;break;case"video":case"audio":for(r=0;r<Oa.length;r++)ut(Oa[r],t);r=i;break;case"source":ut("error",t),r=i;break;case"img":case"image":case"link":ut("error",t),ut("load",t),r=i;break;case"details":ut("toggle",t),r=i;break;case"input":hm(t,i),r=Vf(t,i),ut("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=vt({},i,{value:void 0}),ut("invalid",t);break;case"textarea":mm(t,i),r=Wf(t,i),ut("invalid",t);break;default:r=i}Xf(n,r),s=r;for(o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="style"?w0(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&E0(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&qa(t,l):typeof l=="number"&&qa(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ya.hasOwnProperty(o)?l!=null&&o==="onScroll"&&ut("scroll",t):l!=null&&Gh(t,o,l,a))}switch(n){case"input":ks(t),pm(t,i,!1);break;case"textarea":ks(t),gm(t);break;case"option":i.value!=null&&t.setAttribute("value",""+ar(i.value));break;case"select":t.multiple=!!i.multiple,o=i.value,o!=null?ko(t,!!i.multiple,o,!1):i.defaultValue!=null&&ko(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=nu)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ht(e),null;case 6:if(t&&e.stateNode!=null)$_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ie(166));if(n=Lr(as.current),Lr(ii.current),$s(e)){if(i=e.stateNode,n=e.memoizedProps,i[ei]=e,(o=i.nodeValue!==n)&&(t=vn,t!==null))switch(t.tag){case 3:Xs(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Xs(i.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ei]=e,e.stateNode=i}return Ht(e),null;case 13:if(ft(mt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ht&&gn!==null&&e.mode&1&&!(e.flags&128))f_(),qo(),e.flags|=98560,o=!1;else if(o=$s(e),i!==null&&i.dehydrated!==null){if(t===null){if(!o)throw Error(ie(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(ie(317));o[ei]=e}else qo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ht(e),o=!1}else zn!==null&&(Cd(zn),zn=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||mt.current&1?Pt===0&&(Pt=3):Tp())),e.updateQueue!==null&&(e.flags|=4),Ht(e),null);case 4:return Zo(),yd(t,e),t===null&&ns(e.stateNode.containerInfo),Ht(e),null;case 10:return lp(e.type._context),Ht(e),null;case 17:return sn(e.type)&&iu(),Ht(e),null;case 19:if(ft(mt),o=e.memoizedState,o===null)return Ht(e),null;if(i=(e.flags&128)!==0,a=o.rendering,a===null)if(i)wa(o,!1);else{if(Pt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=cu(t),a!==null){for(e.flags|=128,wa(o,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)o=n,t=i,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,t=a.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return at(mt,mt.current&1|2),e.child}t=t.sibling}o.tail!==null&&Et()>Jo&&(e.flags|=128,i=!0,wa(o,!1),e.lanes=4194304)}else{if(!i)if(t=cu(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),wa(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!ht)return Ht(e),null}else 2*Et()-o.renderingStartTime>Jo&&n!==1073741824&&(e.flags|=128,i=!0,wa(o,!1),e.lanes=4194304);o.isBackwards?(a.sibling=e.child,e.child=a):(n=o.last,n!==null?n.sibling=a:e.child=a,o.last=a)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Et(),e.sibling=null,n=mt.current,at(mt,i?n&1|2:n&1),e):(Ht(e),null);case 22:case 23:return wp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?mn&1073741824&&(Ht(e),e.subtreeFlags&6&&(e.flags|=8192)):Ht(e),null;case 24:return null;case 25:return null}throw Error(ie(156,e.tag))}function vM(t,e){switch(rp(e),e.tag){case 1:return sn(e.type)&&iu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Zo(),ft(an),ft(Xt),hp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return dp(e),null;case 13:if(ft(mt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));qo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ft(mt),null;case 4:return Zo(),null;case 10:return lp(e.type._context),null;case 22:case 23:return wp(),null;case 24:return null;default:return null}}var Ks=!1,jt=!1,_M=typeof WeakSet=="function"?WeakSet:Set,ye=null;function No(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){xt(t,e,i)}else n.current=null}function xd(t,e,n){try{n()}catch(i){xt(t,e,i)}}var og=!1;function yM(t,e){if(id=Jl,t=Q0(),np(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,u=0,c=0,f=t,h=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(s=a+r),f!==o||i!==0&&f.nodeType!==3||(l=a+i),f.nodeType===3&&(a+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===t)break t;if(h===n&&++u===r&&(s=a),h===o&&++c===i&&(l=a),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(rd={focusedElem:t,selectionRange:n},Jl=!1,ye=e;ye!==null;)if(e=ye,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ye=t;else for(;ye!==null;){e=ye;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,m=g.memoizedState,d=e.stateNode,_=d.getSnapshotBeforeUpdate(e.elementType===e.type?y:kn(e.type,y),m);d.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(x){xt(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,ye=t;break}ye=e.return}return g=og,og=!1,g}function ja(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var o=r.destroy;r.destroy=void 0,o!==void 0&&xd(e,n,o)}r=r.next}while(r!==i)}}function Hu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Sd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Y_(t){var e=t.alternate;e!==null&&(t.alternate=null,Y_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ei],delete e[rs],delete e[sd],delete e[tM],delete e[nM])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function q_(t){return t.tag===5||t.tag===3||t.tag===4}function ag(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||q_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ed(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=nu));else if(i!==4&&(t=t.child,t!==null))for(Ed(t,e,n),t=t.sibling;t!==null;)Ed(t,e,n),t=t.sibling}function Md(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Md(t,e,n),t=t.sibling;t!==null;)Md(t,e,n),t=t.sibling}var kt=null,Bn=!1;function Ni(t,e,n){for(n=n.child;n!==null;)K_(t,e,n),n=n.sibling}function K_(t,e,n){if(ni&&typeof ni.onCommitFiberUnmount=="function")try{ni.onCommitFiberUnmount(Iu,n)}catch{}switch(n.tag){case 5:jt||No(n,e);case 6:var i=kt,r=Bn;kt=null,Ni(t,e,n),kt=i,Bn=r,kt!==null&&(Bn?(t=kt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):kt.removeChild(n.stateNode));break;case 18:kt!==null&&(Bn?(t=kt,n=n.stateNode,t.nodeType===8?Fc(t.parentNode,n):t.nodeType===1&&Fc(t,n),Ja(t)):Fc(kt,n.stateNode));break;case 4:i=kt,r=Bn,kt=n.stateNode.containerInfo,Bn=!0,Ni(t,e,n),kt=i,Bn=r;break;case 0:case 11:case 14:case 15:if(!jt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&xd(n,e,a),r=r.next}while(r!==i)}Ni(t,e,n);break;case 1:if(!jt&&(No(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(s){xt(n,e,s)}Ni(t,e,n);break;case 21:Ni(t,e,n);break;case 22:n.mode&1?(jt=(i=jt)||n.memoizedState!==null,Ni(t,e,n),jt=i):Ni(t,e,n);break;default:Ni(t,e,n)}}function sg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new _M),e.forEach(function(i){var r=RM.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function In(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var o=t,a=e,s=a;e:for(;s!==null;){switch(s.tag){case 5:kt=s.stateNode,Bn=!1;break e;case 3:kt=s.stateNode.containerInfo,Bn=!0;break e;case 4:kt=s.stateNode.containerInfo,Bn=!0;break e}s=s.return}if(kt===null)throw Error(ie(160));K_(o,a,r),kt=null,Bn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){xt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Z_(e,t),e=e.sibling}function Z_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(In(e,t),qn(t),i&4){try{ja(3,t,t.return),Hu(3,t)}catch(y){xt(t,t.return,y)}try{ja(5,t,t.return)}catch(y){xt(t,t.return,y)}}break;case 1:In(e,t),qn(t),i&512&&n!==null&&No(n,n.return);break;case 5:if(In(e,t),qn(t),i&512&&n!==null&&No(n,n.return),t.flags&32){var r=t.stateNode;try{qa(r,"")}catch(y){xt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var o=t.memoizedProps,a=n!==null?n.memoizedProps:o,s=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&y0(r,o),$f(s,a);var u=$f(s,o);for(a=0;a<l.length;a+=2){var c=l[a],f=l[a+1];c==="style"?w0(r,f):c==="dangerouslySetInnerHTML"?E0(r,f):c==="children"?qa(r,f):Gh(r,c,f,u)}switch(s){case"input":Hf(r,o);break;case"textarea":x0(r,o);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?ko(r,!!o.multiple,p,!1):h!==!!o.multiple&&(o.defaultValue!=null?ko(r,!!o.multiple,o.defaultValue,!0):ko(r,!!o.multiple,o.multiple?[]:"",!1))}r[rs]=o}catch(y){xt(t,t.return,y)}}break;case 6:if(In(e,t),qn(t),i&4){if(t.stateNode===null)throw Error(ie(162));r=t.stateNode,o=t.memoizedProps;try{r.nodeValue=o}catch(y){xt(t,t.return,y)}}break;case 3:if(In(e,t),qn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ja(e.containerInfo)}catch(y){xt(t,t.return,y)}break;case 4:In(e,t),qn(t);break;case 13:In(e,t),qn(t),r=t.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(Ep=Et())),i&4&&sg(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(jt=(u=jt)||c,In(e,t),jt=u):In(e,t),qn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(ye=t,c=t.child;c!==null;){for(f=ye=c;ye!==null;){switch(h=ye,p=h.child,h.tag){case 0:case 11:case 14:case 15:ja(4,h,h.return);break;case 1:No(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(y){xt(i,n,y)}}break;case 5:No(h,h.return);break;case 22:if(h.memoizedState!==null){ug(f);continue}}p!==null?(p.return=h,ye=p):ug(f)}c=c.sibling}e:for(c=null,f=t;;){if(f.tag===5){if(c===null){c=f;try{r=f.stateNode,u?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=M0("display",a))}catch(y){xt(t,t.return,y)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(y){xt(t,t.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:In(e,t),qn(t),i&4&&sg(t);break;case 21:break;default:In(e,t),qn(t)}}function qn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(q_(n)){var i=n;break e}n=n.return}throw Error(ie(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(qa(r,""),i.flags&=-33);var o=ag(t);Md(t,o,r);break;case 3:case 4:var a=i.stateNode.containerInfo,s=ag(t);Ed(t,s,a);break;default:throw Error(ie(161))}}catch(l){xt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function xM(t,e,n){ye=t,Q_(t)}function Q_(t,e,n){for(var i=(t.mode&1)!==0;ye!==null;){var r=ye,o=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||Ks;if(!a){var s=r.alternate,l=s!==null&&s.memoizedState!==null||jt;s=Ks;var u=jt;if(Ks=a,(jt=l)&&!u)for(ye=r;ye!==null;)a=ye,l=a.child,a.tag===22&&a.memoizedState!==null?cg(r):l!==null?(l.return=a,ye=l):cg(r);for(;o!==null;)ye=o,Q_(o),o=o.sibling;ye=r,Ks=s,jt=u}lg(t)}else r.subtreeFlags&8772&&o!==null?(o.return=r,ye=o):lg(t)}}function lg(t){for(;ye!==null;){var e=ye;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:jt||Hu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!jt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:kn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&Xm(e,o,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Xm(e,a,n)}break;case 5:var s=e.stateNode;if(n===null&&e.flags&4){n=s;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Ja(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}jt||e.flags&512&&Sd(e)}catch(h){xt(e,e.return,h)}}if(e===t){ye=null;break}if(n=e.sibling,n!==null){n.return=e.return,ye=n;break}ye=e.return}}function ug(t){for(;ye!==null;){var e=ye;if(e===t){ye=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ye=n;break}ye=e.return}}function cg(t){for(;ye!==null;){var e=ye;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Hu(4,e)}catch(l){xt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){xt(e,r,l)}}var o=e.return;try{Sd(e)}catch(l){xt(e,o,l)}break;case 5:var a=e.return;try{Sd(e)}catch(l){xt(e,a,l)}}}catch(l){xt(e,e.return,l)}if(e===t){ye=null;break}var s=e.sibling;if(s!==null){s.return=e.return,ye=s;break}ye=e.return}}var SM=Math.ceil,hu=Ri.ReactCurrentDispatcher,xp=Ri.ReactCurrentOwner,Rn=Ri.ReactCurrentBatchConfig,Ke=0,Ot=null,Tt=null,Bt=0,mn=0,Io=fr(0),Pt=0,cs=null,Hr=0,Gu=0,Sp=0,Xa=null,nn=null,Ep=0,Jo=1/0,di=null,pu=!1,wd=null,er=null,Zs=!1,$i=null,mu=0,$a=0,Td=null,Ol=-1,Fl=0;function qt(){return Ke&6?Et():Ol!==-1?Ol:Ol=Et()}function tr(t){return t.mode&1?Ke&2&&Bt!==0?Bt&-Bt:rM.transition!==null?(Fl===0&&(Fl=O0()),Fl):(t=it,t!==0||(t=window.event,t=t===void 0?16:G0(t.type)),t):1}function Wn(t,e,n,i){if(50<$a)throw $a=0,Td=null,Error(ie(185));_s(t,n,i),(!(Ke&2)||t!==Ot)&&(t===Ot&&(!(Ke&2)&&(Gu|=n),Pt===4&&Wi(t,Bt)),ln(t,i),n===1&&Ke===0&&!(e.mode&1)&&(Jo=Et()+500,Bu&&dr()))}function ln(t,e){var n=t.callbackNode;rE(t,e);var i=Ql(t,t===Ot?Bt:0);if(i===0)n!==null&&ym(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&ym(n),e===1)t.tag===0?iM(fg.bind(null,t)):l_(fg.bind(null,t)),JE(function(){!(Ke&6)&&dr()}),n=null;else{switch(F0(i)){case 1:n=Yh;break;case 4:n=I0;break;case 16:n=Zl;break;case 536870912:n=U0;break;default:n=Zl}n=ay(n,J_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function J_(t,e){if(Ol=-1,Fl=0,Ke&6)throw Error(ie(327));var n=t.callbackNode;if(Go()&&t.callbackNode!==n)return null;var i=Ql(t,t===Ot?Bt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=gu(t,i);else{e=i;var r=Ke;Ke|=2;var o=ty();(Ot!==t||Bt!==e)&&(di=null,Jo=Et()+500,Ur(t,e));do try{wM();break}catch(s){ey(t,s)}while(!0);sp(),hu.current=o,Ke=r,Tt!==null?e=0:(Ot=null,Bt=0,e=Pt)}if(e!==0){if(e===2&&(r=Qf(t),r!==0&&(i=r,e=Ad(t,r))),e===1)throw n=cs,Ur(t,0),Wi(t,i),ln(t,Et()),n;if(e===6)Wi(t,i);else{if(r=t.current.alternate,!(i&30)&&!EM(r)&&(e=gu(t,i),e===2&&(o=Qf(t),o!==0&&(i=o,e=Ad(t,o))),e===1))throw n=cs,Ur(t,0),Wi(t,i),ln(t,Et()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ie(345));case 2:Tr(t,nn,di);break;case 3:if(Wi(t,i),(i&130023424)===i&&(e=Ep+500-Et(),10<e)){if(Ql(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){qt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=ad(Tr.bind(null,t,nn,di),e);break}Tr(t,nn,di);break;case 4:if(Wi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Gn(i);o=1<<a,a=e[a],a>r&&(r=a),i&=~o}if(i=r,i=Et()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*SM(i/1960))-i,10<i){t.timeoutHandle=ad(Tr.bind(null,t,nn,di),i);break}Tr(t,nn,di);break;case 5:Tr(t,nn,di);break;default:throw Error(ie(329))}}}return ln(t,Et()),t.callbackNode===n?J_.bind(null,t):null}function Ad(t,e){var n=Xa;return t.current.memoizedState.isDehydrated&&(Ur(t,e).flags|=256),t=gu(t,e),t!==2&&(e=nn,nn=n,e!==null&&Cd(e)),t}function Cd(t){nn===null?nn=t:nn.push.apply(nn,t)}function EM(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],o=r.getSnapshot;r=r.value;try{if(!Xn(o(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Wi(t,e){for(e&=~Sp,e&=~Gu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Gn(e),i=1<<n;t[n]=-1,e&=~i}}function fg(t){if(Ke&6)throw Error(ie(327));Go();var e=Ql(t,0);if(!(e&1))return ln(t,Et()),null;var n=gu(t,e);if(t.tag!==0&&n===2){var i=Qf(t);i!==0&&(e=i,n=Ad(t,i))}if(n===1)throw n=cs,Ur(t,0),Wi(t,e),ln(t,Et()),n;if(n===6)throw Error(ie(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Tr(t,nn,di),ln(t,Et()),null}function Mp(t,e){var n=Ke;Ke|=1;try{return t(e)}finally{Ke=n,Ke===0&&(Jo=Et()+500,Bu&&dr())}}function Gr(t){$i!==null&&$i.tag===0&&!(Ke&6)&&Go();var e=Ke;Ke|=1;var n=Rn.transition,i=it;try{if(Rn.transition=null,it=1,t)return t()}finally{it=i,Rn.transition=n,Ke=e,!(Ke&6)&&dr()}}function wp(){mn=Io.current,ft(Io)}function Ur(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,QE(n)),Tt!==null)for(n=Tt.return;n!==null;){var i=n;switch(rp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&iu();break;case 3:Zo(),ft(an),ft(Xt),hp();break;case 5:dp(i);break;case 4:Zo();break;case 13:ft(mt);break;case 19:ft(mt);break;case 10:lp(i.type._context);break;case 22:case 23:wp()}n=n.return}if(Ot=t,Tt=t=nr(t.current,null),Bt=mn=e,Pt=0,cs=null,Sp=Gu=Hr=0,nn=Xa=null,Dr!==null){for(e=0;e<Dr.length;e++)if(n=Dr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,o=n.pending;if(o!==null){var a=o.next;o.next=r,i.next=a}n.pending=i}Dr=null}return t}function ey(t,e){do{var n=Tt;try{if(sp(),Nl.current=du,fu){for(var i=gt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}fu=!1}if(Vr=0,It=bt=gt=null,Wa=!1,ss=0,xp.current=null,n===null||n.return===null){Pt=1,cs=e,Tt=null;break}e:{var o=t,a=n.return,s=n,l=e;if(e=Bt,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=s,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Qm(a);if(p!==null){p.flags&=-257,Jm(p,a,s,o,e),p.mode&1&&Zm(o,u,e),e=p,l=u;var g=e.updateQueue;if(g===null){var y=new Set;y.add(l),e.updateQueue=y}else g.add(l);break e}else{if(!(e&1)){Zm(o,u,e),Tp();break e}l=Error(ie(426))}}else if(ht&&s.mode&1){var m=Qm(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Jm(m,a,s,o,e),op(Qo(l,s));break e}}o=l=Qo(l,s),Pt!==4&&(Pt=2),Xa===null?Xa=[o]:Xa.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var d=F_(o,l,e);jm(o,d);break e;case 1:s=l;var _=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof _.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(er===null||!er.has(v)))){o.flags|=65536,e&=-e,o.lanes|=e;var x=k_(o,s,e);jm(o,x);break e}}o=o.return}while(o!==null)}iy(n)}catch(b){e=b,Tt===n&&n!==null&&(Tt=n=n.return);continue}break}while(!0)}function ty(){var t=hu.current;return hu.current=du,t===null?du:t}function Tp(){(Pt===0||Pt===3||Pt===2)&&(Pt=4),Ot===null||!(Hr&268435455)&&!(Gu&268435455)||Wi(Ot,Bt)}function gu(t,e){var n=Ke;Ke|=2;var i=ty();(Ot!==t||Bt!==e)&&(di=null,Ur(t,e));do try{MM();break}catch(r){ey(t,r)}while(!0);if(sp(),Ke=n,hu.current=i,Tt!==null)throw Error(ie(261));return Ot=null,Bt=0,Pt}function MM(){for(;Tt!==null;)ny(Tt)}function wM(){for(;Tt!==null&&!qS();)ny(Tt)}function ny(t){var e=oy(t.alternate,t,mn);t.memoizedProps=t.pendingProps,e===null?iy(t):Tt=e,xp.current=null}function iy(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=vM(n,e),n!==null){n.flags&=32767,Tt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Pt=6,Tt=null;return}}else if(n=gM(n,e,mn),n!==null){Tt=n;return}if(e=e.sibling,e!==null){Tt=e;return}Tt=e=t}while(e!==null);Pt===0&&(Pt=5)}function Tr(t,e,n){var i=it,r=Rn.transition;try{Rn.transition=null,it=1,TM(t,e,n,i)}finally{Rn.transition=r,it=i}return null}function TM(t,e,n,i){do Go();while($i!==null);if(Ke&6)throw Error(ie(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ie(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(oE(t,o),t===Ot&&(Tt=Ot=null,Bt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Zs||(Zs=!0,ay(Zl,function(){return Go(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Rn.transition,Rn.transition=null;var a=it;it=1;var s=Ke;Ke|=4,xp.current=null,yM(t,n),Z_(n,t),jE(rd),Jl=!!id,rd=id=null,t.current=n,xM(n),KS(),Ke=s,it=a,Rn.transition=o}else t.current=n;if(Zs&&(Zs=!1,$i=t,mu=r),o=t.pendingLanes,o===0&&(er=null),JS(n.stateNode),ln(t,Et()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(pu)throw pu=!1,t=wd,wd=null,t;return mu&1&&t.tag!==0&&Go(),o=t.pendingLanes,o&1?t===Td?$a++:($a=0,Td=t):$a=0,dr(),null}function Go(){if($i!==null){var t=F0(mu),e=Rn.transition,n=it;try{if(Rn.transition=null,it=16>t?16:t,$i===null)var i=!1;else{if(t=$i,$i=null,mu=0,Ke&6)throw Error(ie(331));var r=Ke;for(Ke|=4,ye=t.current;ye!==null;){var o=ye,a=o.child;if(ye.flags&16){var s=o.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(ye=u;ye!==null;){var c=ye;switch(c.tag){case 0:case 11:case 15:ja(8,c,o)}var f=c.child;if(f!==null)f.return=c,ye=f;else for(;ye!==null;){c=ye;var h=c.sibling,p=c.return;if(Y_(c),c===u){ye=null;break}if(h!==null){h.return=p,ye=h;break}ye=p}}}var g=o.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}ye=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,ye=a;else e:for(;ye!==null;){if(o=ye,o.flags&2048)switch(o.tag){case 0:case 11:case 15:ja(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,ye=d;break e}ye=o.return}}var _=t.current;for(ye=_;ye!==null;){a=ye;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,ye=v;else e:for(a=_;ye!==null;){if(s=ye,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Hu(9,s)}}catch(b){xt(s,s.return,b)}if(s===a){ye=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,ye=x;break e}ye=s.return}}if(Ke=r,dr(),ni&&typeof ni.onPostCommitFiberRoot=="function")try{ni.onPostCommitFiberRoot(Iu,t)}catch{}i=!0}return i}finally{it=n,Rn.transition=e}}return!1}function dg(t,e,n){e=Qo(n,e),e=F_(t,e,1),t=Ji(t,e,1),e=qt(),t!==null&&(_s(t,1,e),ln(t,e))}function xt(t,e,n){if(t.tag===3)dg(t,t,n);else for(;e!==null;){if(e.tag===3){dg(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(er===null||!er.has(i))){t=Qo(n,t),t=k_(e,t,1),e=Ji(e,t,1),t=qt(),e!==null&&(_s(e,1,t),ln(e,t));break}}e=e.return}}function AM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=qt(),t.pingedLanes|=t.suspendedLanes&n,Ot===t&&(Bt&n)===n&&(Pt===4||Pt===3&&(Bt&130023424)===Bt&&500>Et()-Ep?Ur(t,0):Sp|=n),ln(t,e)}function ry(t,e){e===0&&(t.mode&1?(e=Vs,Vs<<=1,!(Vs&130023424)&&(Vs=4194304)):e=1);var n=qt();t=wi(t,e),t!==null&&(_s(t,e,n),ln(t,n))}function CM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ry(t,n)}function RM(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ie(314))}i!==null&&i.delete(e),ry(t,n)}var oy;oy=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||an.current)on=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return on=!1,mM(t,e,n);on=!!(t.flags&131072)}else on=!1,ht&&e.flags&1048576&&u_(e,au,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ul(t,e),t=e.pendingProps;var r=Yo(e,Xt.current);Ho(e,n),r=mp(null,e,i,t,r,n);var o=gp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,sn(i)?(o=!0,ru(e)):o=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,cp(e),r.updater=Vu,e.stateNode=r,r._reactInternals=e,hd(e,i,t,n),e=gd(null,e,i,!0,o,n)):(e.tag=0,ht&&o&&ip(e),Yt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ul(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=PM(i),t=kn(i,t),r){case 0:e=md(null,e,i,t,n);break e;case 1:e=ng(null,e,i,t,n);break e;case 11:e=eg(null,e,i,t,n);break e;case 14:e=tg(null,e,i,kn(i.type,t),n);break e}throw Error(ie(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:kn(i,r),md(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:kn(i,r),ng(t,e,i,r,n);case 3:e:{if(H_(e),t===null)throw Error(ie(387));i=e.pendingProps,o=e.memoizedState,r=o.element,m_(t,e),uu(e,i,null,n);var a=e.memoizedState;if(i=a.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){r=Qo(Error(ie(423)),e),e=ig(t,e,i,n,r);break e}else if(i!==r){r=Qo(Error(ie(424)),e),e=ig(t,e,i,n,r);break e}else for(gn=Qi(e.stateNode.containerInfo.firstChild),vn=e,ht=!0,zn=null,n=h_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(qo(),i===r){e=Ti(t,e,n);break e}Yt(t,e,i,n)}e=e.child}return e;case 5:return g_(e),t===null&&cd(e),i=e.type,r=e.pendingProps,o=t!==null?t.memoizedProps:null,a=r.children,od(i,r)?a=null:o!==null&&od(i,o)&&(e.flags|=32),V_(t,e),Yt(t,e,a,n),e.child;case 6:return t===null&&cd(e),null;case 13:return G_(t,e,n);case 4:return fp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ko(e,null,i,n):Yt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:kn(i,r),eg(t,e,i,r,n);case 7:return Yt(t,e,e.pendingProps,n),e.child;case 8:return Yt(t,e,e.pendingProps.children,n),e.child;case 12:return Yt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,o=e.memoizedProps,a=r.value,at(su,i._currentValue),i._currentValue=a,o!==null)if(Xn(o.value,a)){if(o.children===r.children&&!an.current){e=Ti(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var l=s.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=Si(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),fd(o.return,n,e),s.lanes|=n;break}l=l.next}}else if(o.tag===10)a=o.type===e.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(ie(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),fd(a,n,e),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===e){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}Yt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ho(e,n),r=Pn(r),i=i(r),e.flags|=1,Yt(t,e,i,n),e.child;case 14:return i=e.type,r=kn(i,e.pendingProps),r=kn(i.type,r),tg(t,e,i,r,n);case 15:return B_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:kn(i,r),Ul(t,e),e.tag=1,sn(i)?(t=!0,ru(e)):t=!1,Ho(e,n),O_(e,i,r),hd(e,i,r,n),gd(null,e,i,!0,t,n);case 19:return W_(t,e,n);case 22:return z_(t,e,n)}throw Error(ie(156,e.tag))};function ay(t,e){return N0(t,e)}function bM(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function An(t,e,n,i){return new bM(t,e,n,i)}function Ap(t){return t=t.prototype,!(!t||!t.isReactComponent)}function PM(t){if(typeof t=="function")return Ap(t)?1:0;if(t!=null){if(t=t.$$typeof,t===jh)return 11;if(t===Xh)return 14}return 2}function nr(t,e){var n=t.alternate;return n===null?(n=An(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function kl(t,e,n,i,r,o){var a=2;if(i=t,typeof t=="function")Ap(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case wo:return Or(n.children,r,o,e);case Wh:a=8,r|=8;break;case Ff:return t=An(12,n,e,r|2),t.elementType=Ff,t.lanes=o,t;case kf:return t=An(13,n,e,r),t.elementType=kf,t.lanes=o,t;case Bf:return t=An(19,n,e,r),t.elementType=Bf,t.lanes=o,t;case g0:return Wu(n,r,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case p0:a=10;break e;case m0:a=9;break e;case jh:a=11;break e;case Xh:a=14;break e;case Vi:a=16,i=null;break e}throw Error(ie(130,t==null?t:typeof t,""))}return e=An(a,n,e,r),e.elementType=t,e.type=i,e.lanes=o,e}function Or(t,e,n,i){return t=An(7,t,i,e),t.lanes=n,t}function Wu(t,e,n,i){return t=An(22,t,i,e),t.elementType=g0,t.lanes=n,t.stateNode={isHidden:!1},t}function jc(t,e,n){return t=An(6,t,null,e),t.lanes=n,t}function Xc(t,e,n){return e=An(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function DM(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ac(0),this.expirationTimes=Ac(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ac(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Cp(t,e,n,i,r,o,a,s,l){return t=new DM(t,e,n,s,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=An(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},cp(o),t}function LM(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Mo,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function sy(t){if(!t)return sr;t=t._reactInternals;e:{if(Yr(t)!==t||t.tag!==1)throw Error(ie(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(sn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ie(171))}if(t.tag===1){var n=t.type;if(sn(n))return s_(t,n,e)}return e}function ly(t,e,n,i,r,o,a,s,l){return t=Cp(n,i,!0,t,r,o,a,s,l),t.context=sy(null),n=t.current,i=qt(),r=tr(n),o=Si(i,r),o.callback=e??null,Ji(n,o,r),t.current.lanes=r,_s(t,r,i),ln(t,i),t}function ju(t,e,n,i){var r=e.current,o=qt(),a=tr(r);return n=sy(n),e.context===null?e.context=n:e.pendingContext=n,e=Si(o,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Ji(r,e,a),t!==null&&(Wn(t,r,a,o),Ll(t,r,a)),a}function vu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function hg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Rp(t,e){hg(t,e),(t=t.alternate)&&hg(t,e)}function NM(){return null}var uy=typeof reportError=="function"?reportError:function(t){console.error(t)};function bp(t){this._internalRoot=t}Xu.prototype.render=bp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ie(409));ju(t,e,null,null)};Xu.prototype.unmount=bp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Gr(function(){ju(null,t,null,null)}),e[Mi]=null}};function Xu(t){this._internalRoot=t}Xu.prototype.unstable_scheduleHydration=function(t){if(t){var e=z0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Gi.length&&e!==0&&e<Gi[n].priority;n++);Gi.splice(n,0,t),n===0&&H0(t)}};function Pp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function $u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function pg(){}function IM(t,e,n,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var u=vu(a);o.call(u)}}var a=ly(e,i,t,0,null,!1,!1,"",pg);return t._reactRootContainer=a,t[Mi]=a.current,ns(t.nodeType===8?t.parentNode:t),Gr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var s=i;i=function(){var u=vu(l);s.call(u)}}var l=Cp(t,0,!1,null,null,!1,!1,"",pg);return t._reactRootContainer=l,t[Mi]=l.current,ns(t.nodeType===8?t.parentNode:t),Gr(function(){ju(e,l,n,i)}),l}function Yu(t,e,n,i,r){var o=n._reactRootContainer;if(o){var a=o;if(typeof r=="function"){var s=r;r=function(){var l=vu(a);s.call(l)}}ju(e,a,t,r)}else a=IM(n,e,t,r,i);return vu(a)}k0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ua(e.pendingLanes);n!==0&&(qh(e,n|1),ln(e,Et()),!(Ke&6)&&(Jo=Et()+500,dr()))}break;case 13:Gr(function(){var i=wi(t,1);if(i!==null){var r=qt();Wn(i,t,1,r)}}),Rp(t,1)}};Kh=function(t){if(t.tag===13){var e=wi(t,134217728);if(e!==null){var n=qt();Wn(e,t,134217728,n)}Rp(t,134217728)}};B0=function(t){if(t.tag===13){var e=tr(t),n=wi(t,e);if(n!==null){var i=qt();Wn(n,t,e,i)}Rp(t,e)}};z0=function(){return it};V0=function(t,e){var n=it;try{return it=t,e()}finally{it=n}};qf=function(t,e,n){switch(e){case"input":if(Hf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=ku(i);if(!r)throw Error(ie(90));_0(i),Hf(i,r)}}}break;case"textarea":x0(t,n);break;case"select":e=n.value,e!=null&&ko(t,!!n.multiple,e,!1)}};C0=Mp;R0=Gr;var UM={usingClientEntryPoint:!1,Events:[xs,Ro,ku,T0,A0,Mp]},Ta={findFiberByHostInstance:Pr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},OM={bundleType:Ta.bundleType,version:Ta.version,rendererPackageName:Ta.rendererPackageName,rendererConfig:Ta.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ri.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=D0(t),t===null?null:t.stateNode},findFiberByHostInstance:Ta.findFiberByHostInstance||NM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qs.isDisabled&&Qs.supportsFiber)try{Iu=Qs.inject(OM),ni=Qs}catch{}}yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=UM;yn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pp(e))throw Error(ie(200));return LM(t,e,null,n)};yn.createRoot=function(t,e){if(!Pp(t))throw Error(ie(299));var n=!1,i="",r=uy;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Cp(t,1,!1,null,null,n,!1,i,r),t[Mi]=e.current,ns(t.nodeType===8?t.parentNode:t),new bp(e)};yn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ie(188)):(t=Object.keys(t).join(","),Error(ie(268,t)));return t=D0(e),t=t===null?null:t.stateNode,t};yn.flushSync=function(t){return Gr(t)};yn.hydrate=function(t,e,n){if(!$u(e))throw Error(ie(200));return Yu(null,t,e,!0,n)};yn.hydrateRoot=function(t,e,n){if(!Pp(t))throw Error(ie(405));var i=n!=null&&n.hydratedSources||null,r=!1,o="",a=uy;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=ly(e,null,t,1,n??null,r,!1,o,a),t[Mi]=e.current,ns(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Xu(e)};yn.render=function(t,e,n){if(!$u(e))throw Error(ie(200));return Yu(null,t,e,!1,n)};yn.unmountComponentAtNode=function(t){if(!$u(t))throw Error(ie(40));return t._reactRootContainer?(Gr(function(){Yu(null,null,t,!1,function(){t._reactRootContainer=null,t[Mi]=null})}),!0):!1};yn.unstable_batchedUpdates=Mp;yn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!$u(n))throw Error(ie(200));if(t==null||t._reactInternals===void 0)throw Error(ie(38));return Yu(t,e,n,!1,i)};yn.version="18.3.1-next-f1338f8080-20240426";function cy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cy)}catch(t){console.error(t)}}cy(),c0.exports=yn;var FM=c0.exports,mg=FM;Uf.createRoot=mg.createRoot,Uf.hydrateRoot=mg.hydrateRoot;/**
 * @remix-run/router v1.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fs(){return fs=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},fs.apply(this,arguments)}var Yi;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Yi||(Yi={}));const gg="popstate";function kM(t){t===void 0&&(t={});function e(i,r){let{pathname:o,search:a,hash:s}=i.location;return Rd("",{pathname:o,search:a,hash:s},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:_u(r)}return zM(e,n,null,t)}function Ct(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function fy(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function BM(){return Math.random().toString(36).substr(2,8)}function vg(t,e){return{usr:t.state,key:t.key,idx:e}}function Rd(t,e,n,i){return n===void 0&&(n=null),fs({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ua(e):e,{state:n,key:e&&e.key||i||BM()})}function _u(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function ua(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function zM(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:o=!1}=i,a=r.history,s=Yi.Pop,l=null,u=c();u==null&&(u=0,a.replaceState(fs({},a.state,{idx:u}),""));function c(){return(a.state||{idx:null}).idx}function f(){s=Yi.Pop;let m=c(),d=m==null?null:m-u;u=m,l&&l({action:s,location:y.location,delta:d})}function h(m,d){s=Yi.Push;let _=Rd(y.location,m,d);u=c()+1;let v=vg(_,u),x=y.createHref(_);try{a.pushState(v,"",x)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;r.location.assign(x)}o&&l&&l({action:s,location:y.location,delta:1})}function p(m,d){s=Yi.Replace;let _=Rd(y.location,m,d);u=c();let v=vg(_,u),x=y.createHref(_);a.replaceState(v,"",x),o&&l&&l({action:s,location:y.location,delta:0})}function g(m){let d=r.location.origin!=="null"?r.location.origin:r.location.href,_=typeof m=="string"?m:_u(m);return _=_.replace(/ $/,"%20"),Ct(d,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,d)}let y={get action(){return s},get location(){return t(r,a)},listen(m){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(gg,f),l=m,()=>{r.removeEventListener(gg,f),l=null}},createHref(m){return e(r,m)},createURL:g,encodeLocation(m){let d=g(m);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:h,replace:p,go(m){return a.go(m)}};return y}var _g;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(_g||(_g={}));function VM(t,e,n){return n===void 0&&(n="/"),HM(t,e,n,!1)}function HM(t,e,n,i){let r=typeof e=="string"?ua(e):e,o=Dp(r.pathname||"/",n);if(o==null)return null;let a=dy(t);GM(a);let s=null;for(let l=0;s==null&&l<a.length;++l){let u=e1(o);s=QM(a[l],u,i)}return s}function dy(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(o,a,s)=>{let l={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};l.relativePath.startsWith("/")&&(Ct(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let u=ir([i,l.relativePath]),c=n.concat(l);o.children&&o.children.length>0&&(Ct(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),dy(o.children,e,c,u)),!(o.path==null&&!o.index)&&e.push({path:u,score:KM(u,o.index),routesMeta:c})};return t.forEach((o,a)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))r(o,a);else for(let l of hy(o.path))r(o,a,l)}),e}function hy(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),o=n.replace(/\?$/,"");if(i.length===0)return r?[o,""]:[o];let a=hy(i.join("/")),s=[];return s.push(...a.map(l=>l===""?o:[o,l].join("/"))),r&&s.push(...a),s.map(l=>t.startsWith("/")&&l===""?"/":l)}function GM(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:ZM(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const WM=/^:[\w-]+$/,jM=3,XM=2,$M=1,YM=10,qM=-2,yg=t=>t==="*";function KM(t,e){let n=t.split("/"),i=n.length;return n.some(yg)&&(i+=qM),e&&(i+=XM),n.filter(r=>!yg(r)).reduce((r,o)=>r+(WM.test(o)?jM:o===""?$M:YM),i)}function ZM(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function QM(t,e,n){let{routesMeta:i}=t,r={},o="/",a=[];for(let s=0;s<i.length;++s){let l=i[s],u=s===i.length-1,c=o==="/"?e:e.slice(o.length)||"/",f=xg({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},c),h=l.route;if(!f&&u&&n&&!i[i.length-1].route.index&&(f=xg({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},c)),!f)return null;Object.assign(r,f.params),a.push({params:r,pathname:ir([o,f.pathname]),pathnameBase:r1(ir([o,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(o=ir([o,f.pathnameBase]))}return a}function xg(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=JM(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let o=r[0],a=o.replace(/(.)\/+$/,"$1"),s=r.slice(1);return{params:i.reduce((u,c,f)=>{let{paramName:h,isOptional:p}=c;if(h==="*"){let y=s[f]||"";a=o.slice(0,o.length-y.length).replace(/(.)\/+$/,"$1")}const g=s[f];return p&&!g?u[h]=void 0:u[h]=(g||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:a,pattern:t}}function JM(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),fy(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,s,l)=>(i.push({paramName:s,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function e1(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return fy(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Dp(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function t1(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?ua(t):t;return{pathname:n?n.startsWith("/")?n:n1(n,e):e,search:o1(i),hash:a1(r)}}function n1(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function $c(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function i1(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function py(t,e){let n=i1(t);return e?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function my(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=ua(t):(r=fs({},t),Ct(!r.pathname||!r.pathname.includes("?"),$c("?","pathname","search",r)),Ct(!r.pathname||!r.pathname.includes("#"),$c("#","pathname","hash",r)),Ct(!r.search||!r.search.includes("#"),$c("#","search","hash",r)));let o=t===""||r.pathname==="",a=o?"/":r.pathname,s;if(a==null)s=n;else{let f=e.length-1;if(!i&&a.startsWith("..")){let h=a.split("/");for(;h[0]==="..";)h.shift(),f-=1;r.pathname=h.join("/")}s=f>=0?e[f]:"/"}let l=t1(r,s),u=a&&a!=="/"&&a.endsWith("/"),c=(o||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const ir=t=>t.join("/").replace(/\/\/+/g,"/"),r1=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),o1=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,a1=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function s1(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const gy=["post","put","patch","delete"];new Set(gy);const l1=["get",...gy];new Set(l1);/**
 * React Router v6.25.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ds(){return ds=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ds.apply(this,arguments)}const Lp=te.createContext(null),u1=te.createContext(null),qr=te.createContext(null),qu=te.createContext(null),Kr=te.createContext({outlet:null,matches:[],isDataRoute:!1}),vy=te.createContext(null);function c1(t,e){let{relative:n}=e===void 0?{}:e;Es()||Ct(!1);let{basename:i,navigator:r}=te.useContext(qr),{hash:o,pathname:a,search:s}=yy(t,{relative:n}),l=a;return i!=="/"&&(l=a==="/"?i:ir([i,a])),r.createHref({pathname:l,search:s,hash:o})}function Es(){return te.useContext(qu)!=null}function Ku(){return Es()||Ct(!1),te.useContext(qu).location}function _y(t){te.useContext(qr).static||te.useLayoutEffect(t)}function f1(){let{isDataRoute:t}=te.useContext(Kr);return t?w1():d1()}function d1(){Es()||Ct(!1);let t=te.useContext(Lp),{basename:e,future:n,navigator:i}=te.useContext(qr),{matches:r}=te.useContext(Kr),{pathname:o}=Ku(),a=JSON.stringify(py(r,n.v7_relativeSplatPath)),s=te.useRef(!1);return _y(()=>{s.current=!0}),te.useCallback(function(u,c){if(c===void 0&&(c={}),!s.current)return;if(typeof u=="number"){i.go(u);return}let f=my(u,JSON.parse(a),o,c.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:ir([e,f.pathname])),(c.replace?i.replace:i.push)(f,c.state,c)},[e,i,a,o,t])}function yy(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=te.useContext(qr),{matches:r}=te.useContext(Kr),{pathname:o}=Ku(),a=JSON.stringify(py(r,i.v7_relativeSplatPath));return te.useMemo(()=>my(t,JSON.parse(a),o,n==="path"),[t,a,o,n])}function h1(t,e){return p1(t,e)}function p1(t,e,n,i){Es()||Ct(!1);let{navigator:r}=te.useContext(qr),{matches:o}=te.useContext(Kr),a=o[o.length-1],s=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let u=Ku(),c;if(e){var f;let m=typeof e=="string"?ua(e):e;l==="/"||(f=m.pathname)!=null&&f.startsWith(l)||Ct(!1),c=m}else c=u;let h=c.pathname||"/",p=h;if(l!=="/"){let m=l.replace(/^\//,"").split("/");p="/"+h.replace(/^\//,"").split("/").slice(m.length).join("/")}let g=VM(t,{pathname:p}),y=y1(g&&g.map(m=>Object.assign({},m,{params:Object.assign({},s,m.params),pathname:ir([l,r.encodeLocation?r.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?l:ir([l,r.encodeLocation?r.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),o,n,i);return e&&y?te.createElement(qu.Provider,{value:{location:ds({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Yi.Pop}},y):y}function m1(){let t=M1(),e=s1(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return te.createElement(te.Fragment,null,te.createElement("h2",null,"Unexpected Application Error!"),te.createElement("h3",{style:{fontStyle:"italic"}},e),n?te.createElement("pre",{style:r},n):null,null)}const g1=te.createElement(m1,null);class v1 extends te.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?te.createElement(Kr.Provider,{value:this.props.routeContext},te.createElement(vy.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function _1(t){let{routeContext:e,match:n,children:i}=t,r=te.useContext(Lp);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),te.createElement(Kr.Provider,{value:e},i)}function y1(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var o;if((o=n)!=null&&o.errors)t=n.matches;else return null}let a=t,s=(r=n)==null?void 0:r.errors;if(s!=null){let c=a.findIndex(f=>f.route.id&&(s==null?void 0:s[f.route.id])!==void 0);c>=0||Ct(!1),a=a.slice(0,Math.min(a.length,c+1))}let l=!1,u=-1;if(n&&i&&i.v7_partialHydration)for(let c=0;c<a.length;c++){let f=a[c];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=c),f.route.id){let{loaderData:h,errors:p}=n,g=f.route.loader&&h[f.route.id]===void 0&&(!p||p[f.route.id]===void 0);if(f.route.lazy||g){l=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((c,f,h)=>{let p,g=!1,y=null,m=null;n&&(p=s&&f.route.id?s[f.route.id]:void 0,y=f.route.errorElement||g1,l&&(u<0&&h===0?(g=!0,m=null):u===h&&(g=!0,m=f.route.hydrateFallbackElement||null)));let d=e.concat(a.slice(0,h+1)),_=()=>{let v;return p?v=y:g?v=m:f.route.Component?v=te.createElement(f.route.Component,null):f.route.element?v=f.route.element:v=c,te.createElement(_1,{match:f,routeContext:{outlet:c,matches:d,isDataRoute:n!=null},children:v})};return n&&(f.route.ErrorBoundary||f.route.errorElement||h===0)?te.createElement(v1,{location:n.location,revalidation:n.revalidation,component:y,error:p,children:_(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):_()},null)}var xy=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(xy||{}),yu=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(yu||{});function x1(t){let e=te.useContext(Lp);return e||Ct(!1),e}function S1(t){let e=te.useContext(u1);return e||Ct(!1),e}function E1(t){let e=te.useContext(Kr);return e||Ct(!1),e}function Sy(t){let e=E1(),n=e.matches[e.matches.length-1];return n.route.id||Ct(!1),n.route.id}function M1(){var t;let e=te.useContext(vy),n=S1(yu.UseRouteError),i=Sy(yu.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function w1(){let{router:t}=x1(xy.UseNavigateStable),e=Sy(yu.UseNavigateStable),n=te.useRef(!1);return _y(()=>{n.current=!0}),te.useCallback(function(r,o){o===void 0&&(o={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,ds({fromRouteId:e},o)))},[t,e])}function bd(t){Ct(!1)}function T1(t){let{basename:e="/",children:n=null,location:i,navigationType:r=Yi.Pop,navigator:o,static:a=!1,future:s}=t;Es()&&Ct(!1);let l=e.replace(/^\/*/,"/"),u=te.useMemo(()=>({basename:l,navigator:o,static:a,future:ds({v7_relativeSplatPath:!1},s)}),[l,s,o,a]);typeof i=="string"&&(i=ua(i));let{pathname:c="/",search:f="",hash:h="",state:p=null,key:g="default"}=i,y=te.useMemo(()=>{let m=Dp(c,l);return m==null?null:{location:{pathname:m,search:f,hash:h,state:p,key:g},navigationType:r}},[l,c,f,h,p,g,r]);return y==null?null:te.createElement(qr.Provider,{value:u},te.createElement(qu.Provider,{children:n,value:y}))}function A1(t){let{children:e,location:n}=t;return h1(Pd(e),n)}new Promise(()=>{});function Pd(t,e){e===void 0&&(e=[]);let n=[];return te.Children.forEach(t,(i,r)=>{if(!te.isValidElement(i))return;let o=[...e,r];if(i.type===te.Fragment){n.push.apply(n,Pd(i.props.children,o));return}i.type!==bd&&Ct(!1),!i.props.index||!i.props.children||Ct(!1);let a={id:i.props.id||o.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(a.children=Pd(i.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.25.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Dd(){return Dd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Dd.apply(this,arguments)}function C1(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,o;for(o=0;o<i.length;o++)r=i[o],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function R1(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function b1(t,e){return t.button===0&&(!e||e==="_self")&&!R1(t)}const P1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],D1="6";try{window.__reactRouterVersion=D1}catch{}const L1="startTransition",Sg=AS[L1];function N1(t){let{basename:e,children:n,future:i,window:r}=t,o=te.useRef();o.current==null&&(o.current=kM({window:r,v5Compat:!0}));let a=o.current,[s,l]=te.useState({action:a.action,location:a.location}),{v7_startTransition:u}=i||{},c=te.useCallback(f=>{u&&Sg?Sg(()=>l(f)):l(f)},[l,u]);return te.useLayoutEffect(()=>a.listen(c),[a,c]),te.createElement(T1,{basename:e,children:n,location:s.location,navigationType:s.action,navigator:a,future:i})}const I1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",U1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,xu=te.forwardRef(function(e,n){let{onClick:i,relative:r,reloadDocument:o,replace:a,state:s,target:l,to:u,preventScrollReset:c,unstable_viewTransition:f}=e,h=C1(e,P1),{basename:p}=te.useContext(qr),g,y=!1;if(typeof u=="string"&&U1.test(u)&&(g=u,I1))try{let v=new URL(window.location.href),x=u.startsWith("//")?new URL(v.protocol+u):new URL(u),b=Dp(x.pathname,p);x.origin===v.origin&&b!=null?u=b+x.search+x.hash:y=!0}catch{}let m=c1(u,{relative:r}),d=O1(u,{replace:a,state:s,target:l,preventScrollReset:c,relative:r,unstable_viewTransition:f});function _(v){i&&i(v),v.defaultPrevented||d(v)}return te.createElement("a",Dd({},h,{href:g||m,onClick:y||o?i:_,ref:n,target:l}))});var Eg;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Eg||(Eg={}));var Mg;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Mg||(Mg={}));function O1(t,e){let{target:n,replace:i,state:r,preventScrollReset:o,relative:a,unstable_viewTransition:s}=e===void 0?{}:e,l=f1(),u=Ku(),c=yy(t,{relative:a});return te.useCallback(f=>{if(b1(f,n)){f.preventDefault();let h=i!==void 0?i:_u(u)===_u(c);l(t,{replace:h,state:r,preventScrollReset:o,relative:a,unstable_viewTransition:s})}},[u,l,c,i,r,n,t,o,a,s])}function Ey(t){var e,n,i="";if(typeof t=="string"||typeof t=="number")i+=t;else if(typeof t=="object")if(Array.isArray(t)){var r=t.length;for(e=0;e<r;e++)t[e]&&(n=Ey(t[e]))&&(i&&(i+=" "),i+=n)}else for(n in t)t[n]&&(i&&(i+=" "),i+=n);return i}function Zu(){for(var t,e,n=0,i="",r=arguments.length;n<r;n++)(t=arguments[n])&&(e=Ey(t))&&(i&&(i+=" "),i+=e);return i}const F1=(t,e,n,i)=>{if(n==="length"||n==="prototype"||n==="arguments"||n==="caller")return;const r=Object.getOwnPropertyDescriptor(t,n),o=Object.getOwnPropertyDescriptor(e,n);!k1(r,o)&&i||Object.defineProperty(t,n,o)},k1=function(t,e){return t===void 0||t.configurable||t.writable===e.writable&&t.enumerable===e.enumerable&&t.configurable===e.configurable&&(t.writable||t.value===e.value)},B1=(t,e)=>{const n=Object.getPrototypeOf(e);n!==Object.getPrototypeOf(t)&&Object.setPrototypeOf(t,n)},z1=(t,e)=>`/* Wrapped ${t}*/
${e}`,V1=Object.getOwnPropertyDescriptor(Function.prototype,"toString"),H1=Object.getOwnPropertyDescriptor(Function.prototype.toString,"name"),G1=(t,e,n)=>{const i=n===""?"":`with ${n.trim()}() `,r=z1.bind(null,i,e.toString());Object.defineProperty(r,"name",H1),Object.defineProperty(t,"toString",{...V1,value:r})},W1=(t,e,{ignoreNonConfigurable:n=!1}={})=>{const{name:i}=t;for(const r of Reflect.ownKeys(e))F1(t,e,r,n);return B1(t,e),G1(t,e,i),t};var j1=W1,Ld={exports:{}},X1=()=>{const t={};return t.promise=new Promise((e,n)=>{t.resolve=e,t.reject=n}),t};(function(t,e){var n=Us&&Us.__awaiter||function(a,s,l,u){return new(l||(l=Promise))(function(c,f){function h(y){try{g(u.next(y))}catch(m){f(m)}}function p(y){try{g(u.throw(y))}catch(m){f(m)}}function g(y){y.done?c(y.value):new l(function(m){m(y.value)}).then(h,p)}g((u=u.apply(a,s||[])).next())})},i=Us&&Us.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(e,"__esModule",{value:!0});const r=i(X1);function o(a,s="maxAge"){let l,u,c;const f=()=>n(this,void 0,void 0,function*(){if(l!==void 0)return;const g=y=>n(this,void 0,void 0,function*(){c=r.default();const m=y[1][s]-Date.now();if(m<=0){a.delete(y[0]),c.resolve();return}return l=y[0],u=setTimeout(()=>{a.delete(y[0]),c&&c.resolve()},m),typeof u.unref=="function"&&u.unref(),c.promise});try{for(const y of a)yield g(y)}catch{}l=void 0}),h=()=>{l=void 0,u!==void 0&&(clearTimeout(u),u=void 0),c!==void 0&&(c.reject(void 0),c=void 0)},p=a.set.bind(a);return a.set=(g,y)=>{a.has(g)&&a.delete(g);const m=p(g,y);return l&&l===g&&h(),f(),m},f(),a}e.default=o,t.exports=o,t.exports.default=o})(Ld,Ld.exports);var $1=Ld.exports;const Y1=j1,q1=$1,Yc=new WeakMap,My=new WeakMap,Su=(t,{cacheKey:e,cache:n=new Map,maxAge:i}={})=>{typeof i=="number"&&q1(n);const r=function(...o){const a=e?e(o):o[0],s=n.get(a);if(s)return s.data;const l=t.apply(this,o);return n.set(a,{data:l,maxAge:i?Date.now()+i:Number.POSITIVE_INFINITY}),l};return Y1(r,t,{ignoreNonConfigurable:!0}),My.set(r,n),r};Su.decorator=(t={})=>(e,n,i)=>{const r=e[n];if(typeof r!="function")throw new TypeError("The decorated value must be a function");delete i.value,delete i.writable,i.get=function(){if(!Yc.has(this)){const o=Su(r,t);return Yc.set(this,o),o}return Yc.get(this)}};Su.clear=t=>{const e=My.get(t);if(!e)throw new TypeError("Can't clear a function that was not memoized!");if(typeof e.clear!="function")throw new TypeError("The cache Map can't be cleared!");e.clear()};var K1=Su;const wy=Oh(K1);function Z1(t){return typeof t=="string"}function Q1(t,e,n){return n.indexOf(t)===e}function J1(t){return t.toLowerCase()===t}function wg(t){return t.indexOf(",")===-1?t:t.split(",")}function Nd(t){if(!t)return t;if(t==="C"||t==="posix"||t==="POSIX")return"en-US";if(t.indexOf(".")!==-1){var e=t.split(".")[0],n=e===void 0?"":e;return Nd(n)}if(t.indexOf("@")!==-1){var i=t.split("@")[0],n=i===void 0?"":i;return Nd(n)}if(t.indexOf("-")===-1||!J1(t))return t;var r=t.split("-"),o=r[0],a=r[1],s=a===void 0?"":a;return"".concat(o,"-").concat(s.toUpperCase())}function ew(t){var e=t===void 0?{}:t,n=e.useFallbackLocale,i=n===void 0?!0:n,r=e.fallbackLocale,o=r===void 0?"en-US":r,a=[];if(typeof navigator<"u"){for(var s=navigator.languages||[],l=[],u=0,c=s;u<c.length;u++){var f=c[u];l=l.concat(wg(f))}var h=navigator.language,p=h&&wg(h);a=a.concat(l,p)}return i&&a.push(o),a.filter(Z1).map(Nd).filter(Q1)}var tw=wy(ew,{cacheKey:JSON.stringify});function nw(t){return tw(t)[0]||null}var Ty=wy(nw,{cacheKey:JSON.stringify});function bi(t,e,n){return function(r,o){o===void 0&&(o=n);var a=t(r)+o;return e(a)}}function Ms(t){return function(n){return new Date(t(n).getTime()-1)}}function ws(t,e){return function(i){return[t(i),e(i)]}}function pt(t){if(t instanceof Date)return t.getFullYear();if(typeof t=="number")return t;var e=parseInt(t,10);if(typeof t=="string"&&!isNaN(e))return e;throw new Error("Failed to get year from date: ".concat(t,"."))}function hr(t){if(t instanceof Date)return t.getMonth();throw new Error("Failed to get month from date: ".concat(t,"."))}function Qu(t){if(t instanceof Date)return t.getDate();throw new Error("Failed to get year from date: ".concat(t,"."))}function ca(t){var e=pt(t),n=e+(-e+1)%100,i=new Date;return i.setFullYear(n,0,1),i.setHours(0,0,0,0),i}var iw=bi(pt,ca,-100),Ay=bi(pt,ca,100),Np=Ms(Ay),rw=bi(pt,Np,-100),Cy=ws(ca,Np);function pr(t){var e=pt(t),n=e+(-e+1)%10,i=new Date;return i.setFullYear(n,0,1),i.setHours(0,0,0,0),i}var Ry=bi(pt,pr,-10),Ip=bi(pt,pr,10),Ju=Ms(Ip),by=bi(pt,Ju,-10),Py=ws(pr,Ju);function fa(t){var e=pt(t),n=new Date;return n.setFullYear(e,0,1),n.setHours(0,0,0,0),n}var Dy=bi(pt,fa,-1),Up=bi(pt,fa,1),ec=Ms(Up),Ly=bi(pt,ec,-1),ow=ws(fa,ec);function Op(t,e){return function(i,r){r===void 0&&(r=e);var o=pt(i),a=hr(i)+r,s=new Date;return s.setFullYear(o,a,1),s.setHours(0,0,0,0),t(s)}}function Zr(t){var e=pt(t),n=hr(t),i=new Date;return i.setFullYear(e,n,1),i.setHours(0,0,0,0),i}var Ny=Op(Zr,-1),Fp=Op(Zr,1),Ts=Ms(Fp),Iy=Op(Ts,-1),aw=ws(Zr,Ts);function sw(t,e){return function(i,r){r===void 0&&(r=e);var o=pt(i),a=hr(i),s=Qu(i)+r,l=new Date;return l.setFullYear(o,a,s),l.setHours(0,0,0,0),t(l)}}function As(t){var e=pt(t),n=hr(t),i=Qu(t),r=new Date;return r.setFullYear(e,n,i),r.setHours(0,0,0,0),r}var lw=sw(As,1),kp=Ms(lw),uw=ws(As,kp);function Uy(t){return Qu(Ts(t))}var Aa,At={GREGORY:"gregory",HEBREW:"hebrew",ISLAMIC:"islamic",ISO_8601:"iso8601"},cw=(Aa={},Aa[At.GREGORY]=["en-CA","en-US","es-AR","es-BO","es-CL","es-CO","es-CR","es-DO","es-EC","es-GT","es-HN","es-MX","es-NI","es-PA","es-PE","es-PR","es-SV","es-VE","pt-BR"],Aa[At.HEBREW]=["he","he-IL"],Aa[At.ISLAMIC]=["ar","ar-AE","ar-BH","ar-DZ","ar-EG","ar-IQ","ar-JO","ar-KW","ar-LY","ar-OM","ar-QA","ar-SA","ar-SD","ar-SY","ar-YE","dv","dv-MV","ps","ps-AR"],Aa),Bp=[0,1,2,3,4,5,6],qc=new Map;function fw(t){return function(n,i){var r=n||Ty();qc.has(r)||qc.set(r,new Map);var o=qc.get(r);return o.has(t)||o.set(t,new Intl.DateTimeFormat(r||void 0,t).format),o.get(t)(i)}}function dw(t){var e=new Date(t);return new Date(e.setHours(12))}function Qr(t){return function(e,n){return fw(t)(e,dw(n))}}var hw={day:"numeric"},pw={day:"numeric",month:"long",year:"numeric"},mw={month:"long"},gw={month:"long",year:"numeric"},vw={weekday:"short"},_w={weekday:"long"},yw={year:"numeric"},xw=Qr(hw),Sw=Qr(pw),Ew=Qr(mw),Oy=Qr(gw),Mw=Qr(vw),ww=Qr(_w),tc=Qr(yw),Tw=Bp[0],Aw=Bp[5],Tg=Bp[6];function hs(t,e){e===void 0&&(e=At.ISO_8601);var n=t.getDay();switch(e){case At.ISO_8601:return(n+6)%7;case At.ISLAMIC:return(n+1)%7;case At.HEBREW:case At.GREGORY:return n;default:throw new Error("Unsupported calendar type.")}}function Cw(t){var e=ca(t);return pt(e)}function Rw(t){var e=pr(t);return pt(e)}function Id(t,e){e===void 0&&(e=At.ISO_8601);var n=pt(t),i=hr(t),r=t.getDate()-hs(t,e);return new Date(n,i,r)}function bw(t,e){e===void 0&&(e=At.ISO_8601);var n=e===At.GREGORY?At.GREGORY:At.ISO_8601,i=Id(t,e),r=pt(t)+1,o,a;do o=new Date(r,0,n===At.ISO_8601?4:1),a=Id(o,e),r-=1;while(t<a);return Math.round((i.getTime()-a.getTime())/(864e5*7))+1}function Fr(t,e){switch(t){case"century":return ca(e);case"decade":return pr(e);case"year":return fa(e);case"month":return Zr(e);case"day":return As(e);default:throw new Error("Invalid rangeType: ".concat(t))}}function Pw(t,e){switch(t){case"century":return iw(e);case"decade":return Ry(e);case"year":return Dy(e);case"month":return Ny(e);default:throw new Error("Invalid rangeType: ".concat(t))}}function Fy(t,e){switch(t){case"century":return Ay(e);case"decade":return Ip(e);case"year":return Up(e);case"month":return Fp(e);default:throw new Error("Invalid rangeType: ".concat(t))}}function Dw(t,e){switch(t){case"decade":return Ry(e,-100);case"year":return Dy(e,-10);case"month":return Ny(e,-12);default:throw new Error("Invalid rangeType: ".concat(t))}}function Lw(t,e){switch(t){case"decade":return Ip(e,100);case"year":return Up(e,10);case"month":return Fp(e,12);default:throw new Error("Invalid rangeType: ".concat(t))}}function ky(t,e){switch(t){case"century":return Np(e);case"decade":return Ju(e);case"year":return ec(e);case"month":return Ts(e);case"day":return kp(e);default:throw new Error("Invalid rangeType: ".concat(t))}}function Nw(t,e){switch(t){case"century":return rw(e);case"decade":return by(e);case"year":return Ly(e);case"month":return Iy(e);default:throw new Error("Invalid rangeType: ".concat(t))}}function Iw(t,e){switch(t){case"decade":return by(e,-100);case"year":return Ly(e,-10);case"month":return Iy(e,-12);default:throw new Error("Invalid rangeType: ".concat(t))}}function Ag(t,e){switch(t){case"century":return Cy(e);case"decade":return Py(e);case"year":return ow(e);case"month":return aw(e);case"day":return uw(e);default:throw new Error("Invalid rangeType: ".concat(t))}}function Uw(t,e,n){var i=[e,n].sort(function(r,o){return r.getTime()-o.getTime()});return[Fr(t,i[0]),ky(t,i[1])]}function By(t,e,n){return e===void 0&&(e=tc),n.map(function(i){return e(t,i)}).join(" – ")}function Ow(t,e,n){return By(t,e,Cy(n))}function zy(t,e,n){return By(t,e,Py(n))}function Fw(t){return t.getDay()===new Date().getDay()}function Vy(t,e){e===void 0&&(e=At.ISO_8601);var n=t.getDay();switch(e){case At.ISLAMIC:case At.HEBREW:return n===Aw||n===Tg;case At.ISO_8601:case At.GREGORY:return n===Tg||n===Tw;default:throw new Error("Unsupported calendar type.")}}var Kn="react-calendar__navigation";function kw(t){var e=t.activeStartDate,n=t.drillUp,i=t.formatMonthYear,r=i===void 0?Oy:i,o=t.formatYear,a=o===void 0?tc:o,s=t.locale,l=t.maxDate,u=t.minDate,c=t.navigationAriaLabel,f=c===void 0?"":c,h=t.navigationAriaLive,p=t.navigationLabel,g=t.next2AriaLabel,y=g===void 0?"":g,m=t.next2Label,d=m===void 0?"»":m,_=t.nextAriaLabel,v=_===void 0?"":_,x=t.nextLabel,b=x===void 0?"›":x,T=t.prev2AriaLabel,A=T===void 0?"":T,C=t.prev2Label,w=C===void 0?"«":C,S=t.prevAriaLabel,D=S===void 0?"":S,H=t.prevLabel,V=H===void 0?"‹":H,q=t.setActiveStartDate,K=t.showDoubleView,W=t.view,Z=t.views,N=Z.indexOf(W)>0,X=W!=="century",$=Pw(W,e),oe=X?Dw(W,e):void 0,Ee=Fy(W,e),je=X?Lw(W,e):void 0,j=function(){if($.getFullYear()<0)return!0;var Re=Nw(W,e);return u&&u>=Re}(),ne=X&&function(){if(oe.getFullYear()<0)return!0;var Re=Iw(W,e);return u&&u>=Re}(),de=l&&l<Ee,ce=X&&l&&l<je;function Pe(){q($,"prev")}function De(){q(oe,"prev2")}function He(){q(Ee,"next")}function rt(){q(je,"next2")}function P(Re){var qe=function(){switch(W){case"century":return Ow(s,a,Re);case"decade":return zy(s,a,Re);case"year":return a(s,Re);case"month":return r(s,Re);default:throw new Error("Invalid view: ".concat(W,"."))}}();return p?p({date:Re,label:qe,locale:s||Ty()||void 0,view:W}):qe}function dt(){var Re="".concat(Kn,"__label");return O.jsxs("button",{"aria-label":f,"aria-live":h,className:Re,disabled:!N,onClick:n,style:{flexGrow:1},type:"button",children:[O.jsx("span",{className:"".concat(Re,"__labelText ").concat(Re,"__labelText--from"),children:P(e)}),K?O.jsxs(O.Fragment,{children:[O.jsx("span",{className:"".concat(Re,"__divider"),children:" – "}),O.jsx("span",{className:"".concat(Re,"__labelText ").concat(Re,"__labelText--to"),children:P(Ee)})]}):null]})}return O.jsxs("div",{className:Kn,children:[w!==null&&X?O.jsx("button",{"aria-label":A,className:"".concat(Kn,"__arrow ").concat(Kn,"__prev2-button"),disabled:ne,onClick:De,type:"button",children:w}):null,V!==null&&O.jsx("button",{"aria-label":D,className:"".concat(Kn,"__arrow ").concat(Kn,"__prev-button"),disabled:j,onClick:Pe,type:"button",children:V}),dt(),b!==null&&O.jsx("button",{"aria-label":v,className:"".concat(Kn,"__arrow ").concat(Kn,"__next-button"),disabled:de,onClick:He,type:"button",children:b}),d!==null&&X?O.jsx("button",{"aria-label":y,className:"".concat(Kn,"__arrow ").concat(Kn,"__next2-button"),disabled:ce,onClick:rt,type:"button",children:d}):null]})}var Uo=function(){return Uo=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++){e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},Uo.apply(this,arguments)},Bw=function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n};function Cg(t){return"".concat(t,"%")}function zp(t){var e=t.children,n=t.className,i=t.count,r=t.direction,o=t.offset,a=t.style,s=t.wrap,l=Bw(t,["children","className","count","direction","offset","style","wrap"]);return O.jsx("div",Uo({className:n,style:Uo({display:"flex",flexDirection:r,flexWrap:s?"wrap":"nowrap"},a)},l,{children:te.Children.map(e,function(u,c){var f=o&&c===0?Cg(100*o/i):null;return te.cloneElement(u,Uo(Uo({},u.props),{style:{flexBasis:Cg(100/i),flexShrink:0,flexGrow:0,overflow:"hidden",marginLeft:f,marginInlineStart:f,marginInlineEnd:0}}))})}))}function zw(t,e,n){return e&&e>t?e:n&&n<t?n:t}function ps(t,e){return e[0]<=t&&e[1]>=t}function Vw(t,e){return t[0]<=e[0]&&t[1]>=e[1]}function Hy(t,e){return ps(t[0],e)||ps(t[1],e)}function Rg(t,e,n){var i=Hy(e,t),r=[];if(i){r.push(n);var o=ps(t[0],e),a=ps(t[1],e);o&&r.push("".concat(n,"Start")),a&&r.push("".concat(n,"End")),o&&a&&r.push("".concat(n,"BothEnds"))}return r}function Hw(t){return Array.isArray(t)?t[0]!==null&&t[1]!==null:t!==null}function Gw(t){if(!t)throw new Error("args is required");var e=t.value,n=t.date,i=t.hover,r="react-calendar__tile",o=[r];if(!n)return o;var a=new Date,s=function(){if(Array.isArray(n))return n;var p=t.dateType;if(!p)throw new Error("dateType is required when date is not an array of two dates");return Ag(p,n)}();if(ps(a,s)&&o.push("".concat(r,"--now")),!e||!Hw(e))return o;var l=function(){if(Array.isArray(e))return e;var p=t.valueType;if(!p)throw new Error("valueType is required when value is not an array of two dates");return Ag(p,e)}();Vw(l,s)?o.push("".concat(r,"--active")):Hy(l,s)&&o.push("".concat(r,"--hasActive"));var u=Rg(l,s,"".concat(r,"--range"));o.push.apply(o,u);var c=Array.isArray(e)?e:[e];if(i&&c.length===1){var f=i>l[0]?[l[0],i]:[i,l[0]],h=Rg(f,s,"".concat(r,"--hover"));o.push.apply(o,h)}return o}function nc(t){for(var e=t.className,n=t.count,i=n===void 0?3:n,r=t.dateTransform,o=t.dateType,a=t.end,s=t.hover,l=t.offset,u=t.renderTile,c=t.start,f=t.step,h=f===void 0?1:f,p=t.value,g=t.valueType,y=[],m=c;m<=a;m+=h){var d=r(m);y.push(u({classes:Gw({date:d,dateType:o,hover:s,value:p,valueType:g}),date:d}))}return O.jsx(zp,{className:e,count:i,offset:l,wrap:!0,children:y})}function ic(t){var e=t.activeStartDate,n=t.children,i=t.classes,r=t.date,o=t.formatAbbr,a=t.locale,s=t.maxDate,l=t.maxDateTransform,u=t.minDate,c=t.minDateTransform,f=t.onClick,h=t.onMouseOver,p=t.style,g=t.tileClassName,y=t.tileContent,m=t.tileDisabled,d=t.view,_=te.useMemo(function(){var x={activeStartDate:e,date:r,view:d};return typeof g=="function"?g(x):g},[e,r,g,d]),v=te.useMemo(function(){var x={activeStartDate:e,date:r,view:d};return typeof y=="function"?y(x):y},[e,r,y,d]);return O.jsxs("button",{className:Zu(i,_),disabled:u&&c(u)>r||s&&l(s)<r||m&&m({activeStartDate:e,date:r,view:d}),onClick:f?function(x){return f(r,x)}:void 0,onFocus:h?function(){return h(r)}:void 0,onMouseOver:h?function(){return h(r)}:void 0,style:p,type:"button",children:[o?O.jsx("abbr",{"aria-label":o(a,r),children:n}):n,v]})}var Ud=function(){return Ud=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++){e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},Ud.apply(this,arguments)},Ww=function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n},Kc="react-calendar__century-view__decades__decade";function jw(t){var e=t.classes,n=e===void 0?[]:e,i=t.currentCentury,r=t.formatYear,o=r===void 0?tc:r,a=Ww(t,["classes","currentCentury","formatYear"]),s=a.date,l=a.locale,u=[];return n&&u.push.apply(u,n),Kc&&u.push(Kc),ca(s).getFullYear()!==i&&u.push("".concat(Kc,"--neighboringCentury")),O.jsx(ic,Ud({},a,{classes:u,maxDateTransform:Ju,minDateTransform:pr,view:"century",children:zy(l,o,s)}))}var Od=function(){return Od=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++){e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},Od.apply(this,arguments)},bg=function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n};function Xw(t){var e=t.activeStartDate,n=t.hover,i=t.showNeighboringCentury,r=t.value,o=t.valueType,a=bg(t,["activeStartDate","hover","showNeighboringCentury","value","valueType"]),s=Cw(e),l=s+(i?119:99);return O.jsx(nc,{className:"react-calendar__century-view__decades",dateTransform:pr,dateType:"decade",end:l,hover:n,renderTile:function(u){var c=u.date,f=bg(u,["date"]);return O.jsx(jw,Od({},a,f,{activeStartDate:e,currentCentury:s,date:c}),c.getTime())},start:s,step:10,value:r,valueType:o})}var Fd=function(){return Fd=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++){e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},Fd.apply(this,arguments)};function $w(t){function e(){return O.jsx(Xw,Fd({},t))}return O.jsx("div",{className:"react-calendar__century-view",children:e()})}var kd=function(){return kd=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++){e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},kd.apply(this,arguments)},Yw=function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n},Zc="react-calendar__decade-view__years__year";function qw(t){var e=t.classes,n=e===void 0?[]:e,i=t.currentDecade,r=t.formatYear,o=r===void 0?tc:r,a=Yw(t,["classes","currentDecade","formatYear"]),s=a.date,l=a.locale,u=[];return n&&u.push.apply(u,n),Zc&&u.push(Zc),pr(s).getFullYear()!==i&&u.push("".concat(Zc,"--neighboringDecade")),O.jsx(ic,kd({},a,{classes:u,maxDateTransform:ec,minDateTransform:fa,view:"decade",children:o(l,s)}))}var Bd=function(){return Bd=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++){e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},Bd.apply(this,arguments)},Pg=function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n};function Kw(t){var e=t.activeStartDate,n=t.hover,i=t.showNeighboringDecade,r=t.value,o=t.valueType,a=Pg(t,["activeStartDate","hover","showNeighboringDecade","value","valueType"]),s=Rw(e),l=s+(i?11:9);return O.jsx(nc,{className:"react-calendar__decade-view__years",dateTransform:fa,dateType:"year",end:l,hover:n,renderTile:function(u){var c=u.date,f=Pg(u,["date"]);return O.jsx(qw,Bd({},a,f,{activeStartDate:e,currentDecade:s,date:c}),c.getTime())},start:s,value:r,valueType:o})}var zd=function(){return zd=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++){e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},zd.apply(this,arguments)};function Zw(t){function e(){return O.jsx(Kw,zd({},t))}return O.jsx("div",{className:"react-calendar__decade-view",children:e()})}var Vd=function(){return Vd=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++){e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},Vd.apply(this,arguments)},Qw=function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n},Dg=function(t,e,n){if(n||arguments.length===2)for(var i=0,r=e.length,o;i<r;i++)(o||!(i in e))&&(o||(o=Array.prototype.slice.call(e,0,i)),o[i]=e[i]);return t.concat(o||Array.prototype.slice.call(e))},Jw="react-calendar__year-view__months__month";function eT(t){var e=t.classes,n=e===void 0?[]:e,i=t.formatMonth,r=i===void 0?Ew:i,o=t.formatMonthYear,a=o===void 0?Oy:o,s=Qw(t,["classes","formatMonth","formatMonthYear"]),l=s.date,u=s.locale;return O.jsx(ic,Vd({},s,{classes:Dg(Dg([],n,!0),[Jw],!1),formatAbbr:a,maxDateTransform:Ts,minDateTransform:Zr,view:"year",children:r(u,l)}))}var Hd=function(){return Hd=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++){e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},Hd.apply(this,arguments)},Lg=function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n};function tT(t){var e=t.activeStartDate,n=t.hover,i=t.value,r=t.valueType,o=Lg(t,["activeStartDate","hover","value","valueType"]),a=0,s=11,l=pt(e);return O.jsx(nc,{className:"react-calendar__year-view__months",dateTransform:function(u){var c=new Date;return c.setFullYear(l,u,1),Zr(c)},dateType:"month",end:s,hover:n,renderTile:function(u){var c=u.date,f=Lg(u,["date"]);return O.jsx(eT,Hd({},o,f,{activeStartDate:e,date:c}),c.getTime())},start:a,value:i,valueType:r})}var Gd=function(){return Gd=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++){e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},Gd.apply(this,arguments)};function nT(t){function e(){return O.jsx(tT,Gd({},t))}return O.jsx("div",{className:"react-calendar__year-view",children:e()})}var Wd=function(){return Wd=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++){e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},Wd.apply(this,arguments)},iT=function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n},Js="react-calendar__month-view__days__day";function rT(t){var e=t.calendarType,n=t.classes,i=n===void 0?[]:n,r=t.currentMonthIndex,o=t.formatDay,a=o===void 0?xw:o,s=t.formatLongDate,l=s===void 0?Sw:s,u=iT(t,["calendarType","classes","currentMonthIndex","formatDay","formatLongDate"]),c=u.date,f=u.locale,h=[];return i&&h.push.apply(h,i),Js&&h.push(Js),Vy(c,e)&&h.push("".concat(Js,"--weekend")),c.getMonth()!==r&&h.push("".concat(Js,"--neighboringMonth")),O.jsx(ic,Wd({},u,{classes:h,formatAbbr:l,maxDateTransform:kp,minDateTransform:As,view:"month",children:a(f,c)}))}var jd=function(){return jd=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++){e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},jd.apply(this,arguments)},Ng=function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n};function oT(t){var e=t.activeStartDate,n=t.calendarType,i=t.hover,r=t.showFixedNumberOfWeeks,o=t.showNeighboringMonth,a=t.value,s=t.valueType,l=Ng(t,["activeStartDate","calendarType","hover","showFixedNumberOfWeeks","showNeighboringMonth","value","valueType"]),u=pt(e),c=hr(e),f=r||o,h=hs(e,n),p=f?0:h,g=(f?-h:0)+1,y=function(){if(r)return g+6*7-1;var m=Uy(e);if(o){var d=new Date;d.setFullYear(u,c,m),d.setHours(0,0,0,0);var _=7-hs(d,n)-1;return m+_}return m}();return O.jsx(nc,{className:"react-calendar__month-view__days",count:7,dateTransform:function(m){var d=new Date;return d.setFullYear(u,c,m),As(d)},dateType:"day",hover:i,end:y,renderTile:function(m){var d=m.date,_=Ng(m,["date"]);return O.jsx(rT,jd({},l,_,{activeStartDate:e,calendarType:n,currentMonthIndex:c,date:d}),d.getTime())},offset:p,start:g,value:a,valueType:s})}var Gy="react-calendar__month-view__weekdays",Qc="".concat(Gy,"__weekday");function aT(t){for(var e=t.calendarType,n=t.formatShortWeekday,i=n===void 0?Mw:n,r=t.formatWeekday,o=r===void 0?ww:r,a=t.locale,s=t.onMouseLeave,l=new Date,u=Zr(l),c=pt(u),f=hr(u),h=[],p=1;p<=7;p+=1){var g=new Date(c,f,p-hs(u,e)),y=o(a,g);h.push(O.jsx("div",{className:Zu(Qc,Fw(g)&&"".concat(Qc,"--current"),Vy(g,e)&&"".concat(Qc,"--weekend")),children:O.jsx("abbr",{"aria-label":y,title:y,children:i(a,g).replace(".","")})},p))}return O.jsx(zp,{className:Gy,count:7,onFocus:s,onMouseOver:s,children:h})}var Eu=function(){return Eu=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++){e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},Eu.apply(this,arguments)},Ig=function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n},Ug="react-calendar__tile";function sT(t){var e=t.onClickWeekNumber,n=t.weekNumber,i=O.jsx("span",{children:n});if(e){var r=t.date,o=t.onClickWeekNumber,a=t.weekNumber,s=Ig(t,["date","onClickWeekNumber","weekNumber"]);return O.jsx("button",Eu({},s,{className:Ug,onClick:function(l){return o(a,r,l)},type:"button",children:i}))}else{t.date,t.onClickWeekNumber,t.weekNumber;var s=Ig(t,["date","onClickWeekNumber","weekNumber"]);return O.jsx("div",Eu({},s,{className:Ug,children:i}))}}function lT(t){var e=t.activeStartDate,n=t.calendarType,i=t.onClickWeekNumber,r=t.onMouseLeave,o=t.showFixedNumberOfWeeks,a=function(){if(o)return 6;var u=Uy(e),c=hs(e,n),f=u-(7-c);return 1+Math.ceil(f/7)}(),s=function(){for(var u=pt(e),c=hr(e),f=Qu(e),h=[],p=0;p<a;p+=1)h.push(Id(new Date(u,c,f+p*7),n));return h}(),l=s.map(function(u){return bw(u,n)});return O.jsx(zp,{className:"react-calendar__month-view__weekNumbers",count:a,direction:"column",onFocus:r,onMouseOver:r,style:{flexBasis:"calc(100% * (1 / 8)",flexShrink:0},children:l.map(function(u,c){var f=s[c];if(!f)throw new Error("date is not defined");return O.jsx(sT,{date:f,onClickWeekNumber:i,weekNumber:u},u)})})}var Xd=function(){return Xd=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++){e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},Xd.apply(this,arguments)},uT=function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n};function cT(t){if(t)for(var e=0,n=Object.entries(cw);e<n.length;e++){var i=n[e],r=i[0],o=i[1];if(o.includes(t))return r}return At.ISO_8601}function fT(t){var e=t.activeStartDate,n=t.locale,i=t.onMouseLeave,r=t.showFixedNumberOfWeeks,o=t.calendarType,a=o===void 0?cT(n):o,s=t.formatShortWeekday,l=t.formatWeekday,u=t.onClickWeekNumber,c=t.showWeekNumbers,f=uT(t,["calendarType","formatShortWeekday","formatWeekday","onClickWeekNumber","showWeekNumbers"]);function h(){return O.jsx(aT,{calendarType:a,formatShortWeekday:s,formatWeekday:l,locale:n,onMouseLeave:i})}function p(){return c?O.jsx(lT,{activeStartDate:e,calendarType:a,onClickWeekNumber:u,onMouseLeave:i,showFixedNumberOfWeeks:r}):null}function g(){return O.jsx(oT,Xd({calendarType:a},f))}var y="react-calendar__month-view";return O.jsx("div",{className:Zu(y,c?"".concat(y,"--weekNumbers"):""),children:O.jsxs("div",{style:{display:"flex",alignItems:"flex-end"},children:[p(),O.jsxs("div",{style:{flexGrow:1,width:"100%"},children:[h(),g()]})]})})}var Oo=function(){return Oo=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++){e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},Oo.apply(this,arguments)},el="react-calendar",Bl=["century","decade","year","month"],dT=["decade","year","month","day"],Vp=new Date;Vp.setFullYear(1,0,1);Vp.setHours(0,0,0,0);var hT=new Date(864e13);function Fa(t){return t instanceof Date?t:new Date(t)}function Wy(t,e){return Bl.slice(Bl.indexOf(t),Bl.indexOf(e)+1)}function pT(t,e,n){var i=Wy(e,n);return i.indexOf(t)!==-1}function Hp(t,e,n){return t&&pT(t,e,n)?t:n}function jy(t){var e=Bl.indexOf(t);return dT[e]}function mT(t,e){var n=Array.isArray(t)?t[e]:t;if(!n)return null;var i=Fa(n);if(isNaN(i.getTime()))throw new Error("Invalid date: ".concat(t));return i}function Xy(t,e){var n=t.value,i=t.minDate,r=t.maxDate,o=t.maxDetail,a=mT(n,e);if(!a)return null;var s=jy(o),l=function(){switch(e){case 0:return Fr(s,a);case 1:return ky(s,a);default:throw new Error("Invalid index value: ".concat(e))}}();return zw(l,i,r)}var Gp=function(t){return Xy(t,0)},$y=function(t){return Xy(t,1)},gT=function(t){return[Gp,$y].map(function(e){return e(t)})};function Yy(t){var e=t.maxDate,n=t.maxDetail,i=t.minDate,r=t.minDetail,o=t.value,a=t.view,s=Hp(a,r,n),l=Gp({value:o,minDate:i,maxDate:e,maxDetail:n})||new Date;return Fr(s,l)}function vT(t){var e=t.activeStartDate,n=t.defaultActiveStartDate,i=t.defaultValue,r=t.defaultView,o=t.maxDate,a=t.maxDetail,s=t.minDate,l=t.minDetail,u=t.value,c=t.view,f=Hp(c,l,a),h=e||n;return h?Fr(f,h):Yy({maxDate:o,maxDetail:a,minDate:s,minDetail:l,value:u||i,view:c||r})}function Jc(t){return t&&(!Array.isArray(t)||t.length===1)}function tl(t,e){return t instanceof Date&&e instanceof Date&&t.getTime()===e.getTime()}var _T=te.forwardRef(function(e,n){var i=e.activeStartDate,r=e.allowPartialRange,o=e.calendarType,a=e.className,s=e.defaultActiveStartDate,l=e.defaultValue,u=e.defaultView,c=e.formatDay,f=e.formatLongDate,h=e.formatMonth,p=e.formatMonthYear,g=e.formatShortWeekday,y=e.formatWeekday,m=e.formatYear,d=e.goToRangeStartOnSelect,_=d===void 0?!0:d,v=e.inputRef,x=e.locale,b=e.maxDate,T=b===void 0?hT:b,A=e.maxDetail,C=A===void 0?"month":A,w=e.minDate,S=w===void 0?Vp:w,D=e.minDetail,H=D===void 0?"century":D,V=e.navigationAriaLabel,q=e.navigationAriaLive,K=e.navigationLabel,W=e.next2AriaLabel,Z=e.next2Label,N=e.nextAriaLabel,X=e.nextLabel,$=e.onActiveStartDateChange,oe=e.onChange,Ee=e.onClickDay,je=e.onClickDecade,j=e.onClickMonth,ne=e.onClickWeekNumber,de=e.onClickYear,ce=e.onDrillDown,Pe=e.onDrillUp,De=e.onViewChange,He=e.prev2AriaLabel,rt=e.prev2Label,P=e.prevAriaLabel,dt=e.prevLabel,Re=e.returnValue,qe=Re===void 0?"start":Re,ge=e.selectRange,st=e.showDoubleView,Ne=e.showFixedNumberOfWeeks,Oe=e.showNavigation,R=Oe===void 0?!0:Oe,M=e.showNeighboringCentury,z=e.showNeighboringDecade,ee=e.showNeighboringMonth,re=ee===void 0?!0:ee,J=e.showWeekNumbers,Te=e.tileClassName,he=e.tileContent,ve=e.tileDisabled,Fe=e.value,ae=e.view,me=te.useState(s),Ye=me[0],Ae=me[1],_e=te.useState(null),Ue=_e[0],Be=_e[1],ot=te.useState(Array.isArray(l)?l.map(function(Xe){return Xe!==null?Fa(Xe):null}):l!=null?Fa(l):null),I=ot[0],se=ot[1],Y=te.useState(u),Q=Y[0],ue=Y[1],xe=i||Ye||vT({activeStartDate:i,defaultActiveStartDate:s,defaultValue:l,defaultView:u,maxDate:T,maxDetail:C,minDate:S,minDetail:H,value:Fe,view:ae}),be=function(){var Xe=function(){return ge&&Jc(I)?I:Fe!==void 0?Fe:I}();return Xe?Array.isArray(Xe)?Xe.map(function(E){return E!==null?Fa(E):null}):Xe!==null?Fa(Xe):null:null}(),lt=jy(C),ze=Hp(ae||Q,H,C),Ve=Wy(H,C),Ln=ge?Ue:null,en=Ve.indexOf(ze)<Ve.length-1,ga=Ve.indexOf(ze)>0,Yn=te.useCallback(function(Xe){var E=function(){switch(qe){case"start":return Gp;case"end":return $y;case"range":return gT;default:throw new Error("Invalid returnValue.")}}();return E({maxDate:T,maxDetail:C,minDate:S,value:Xe})},[T,C,S,qe]),gr=te.useCallback(function(Xe,E){Ae(Xe);var L={action:E,activeStartDate:Xe,value:be,view:ze};$&&!tl(xe,Xe)&&$(L)},[xe,$,be,ze]),vr=te.useCallback(function(Xe,E){var L=function(){switch(ze){case"century":return je;case"decade":return de;case"year":return j;case"month":return Ee;default:throw new Error("Invalid view: ".concat(ze,"."))}}();L&&L(Xe,E)},[Ee,je,j,de,ze]),Jr=te.useCallback(function(Xe,E){if(en){vr(Xe,E);var L=Ve[Ve.indexOf(ze)+1];if(!L)throw new Error("Attempted to drill down from the lowest view.");Ae(Xe),ue(L);var F={action:"drillDown",activeStartDate:Xe,value:be,view:L};$&&!tl(xe,Xe)&&$(F),De&&ze!==L&&De(F),ce&&ce(F)}},[xe,en,$,vr,ce,De,be,ze,Ve]),Di=te.useCallback(function(){if(ga){var Xe=Ve[Ve.indexOf(ze)-1];if(!Xe)throw new Error("Attempted to drill up from the highest view.");var E=Fr(Xe,xe);Ae(E),ue(Xe);var L={action:"drillUp",activeStartDate:E,value:be,view:Xe};$&&!tl(xe,E)&&$(L),De&&ze!==Xe&&De(L),Pe&&Pe(L)}},[xe,ga,$,Pe,De,be,ze,Ve]),eo=te.useCallback(function(Xe,E){var L=be;vr(Xe,E);var F=ge&&!Jc(L),k;if(ge)if(F)k=Fr(lt,Xe);else{if(!L)throw new Error("previousValue is required");if(Array.isArray(L))throw new Error("previousValue must not be an array");k=Uw(lt,L,Xe)}else k=Yn(Xe);var U=!ge||F||_?Yy({maxDate:T,maxDetail:C,minDate:S,minDetail:H,value:k,view:ze}):null;E.persist(),Ae(U),se(k);var le={action:"onChange",activeStartDate:U,value:k,view:ze};if($&&!tl(xe,U)&&$(le),oe)if(ge){var pe=Jc(k);if(!pe)oe(k||null,E);else if(r){if(Array.isArray(k))throw new Error("value must not be an array");oe([k||null,null],E)}}else oe(k||null,E)},[xe,r,Yn,_,T,C,S,H,$,oe,vr,ge,be,lt,ze]);function to(Xe){Be(Xe)}function no(){Be(null)}te.useImperativeHandle(n,function(){return{activeStartDate:xe,drillDown:Jr,drillUp:Di,onChange:eo,setActiveStartDate:gr,value:be,view:ze}},[xe,Jr,Di,eo,gr,be,ze]);function va(Xe){var E=Xe?Fy(ze,xe):Fr(ze,xe),L=en?Jr:eo,F={activeStartDate:E,hover:Ln,locale:x,maxDate:T,minDate:S,onClick:L,onMouseOver:ge?to:void 0,tileClassName:Te,tileContent:he,tileDisabled:ve,value:be,valueType:lt};switch(ze){case"century":return O.jsx($w,Oo({formatYear:m,showNeighboringCentury:M},F));case"decade":return O.jsx(Zw,Oo({formatYear:m,showNeighboringDecade:z},F));case"year":return O.jsx(nT,Oo({formatMonth:h,formatMonthYear:p},F));case"month":return O.jsx(fT,Oo({calendarType:o,formatDay:c,formatLongDate:f,formatShortWeekday:g,formatWeekday:y,onClickWeekNumber:ne,onMouseLeave:ge?no:void 0,showFixedNumberOfWeeks:typeof Ne<"u"?Ne:st,showNeighboringMonth:re,showWeekNumbers:J},F));default:throw new Error("Invalid view: ".concat(ze,"."))}}function gc(){return R?O.jsx(kw,{activeStartDate:xe,drillUp:Di,formatMonthYear:p,formatYear:m,locale:x,maxDate:T,minDate:S,navigationAriaLabel:V,navigationAriaLive:q,navigationLabel:K,next2AriaLabel:W,next2Label:Z,nextAriaLabel:N,nextLabel:X,prev2AriaLabel:He,prev2Label:rt,prevAriaLabel:P,prevLabel:dt,setActiveStartDate:gr,showDoubleView:st,view:ze,views:Ve}):null}var vc=Array.isArray(be)?be:[be];return O.jsxs("div",{className:Zu(el,ge&&vc.length===1&&"".concat(el,"--selectRange"),st&&"".concat(el,"--doubleView"),a),ref:v,children:[gc(),O.jsxs("div",{className:"".concat(el,"__viewContainer"),onBlur:ge?no:void 0,onMouseLeave:ge?no:void 0,children:[va(),st?va(!0):null]})]})});function qy(t,e){return function(){return t.apply(e,arguments)}}const{toString:yT}=Object.prototype,{getPrototypeOf:Wp}=Object,rc=(t=>e=>{const n=yT.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),$n=t=>(t=t.toLowerCase(),e=>rc(e)===t),oc=t=>e=>typeof e===t,{isArray:da}=Array,ms=oc("undefined");function xT(t){return t!==null&&!ms(t)&&t.constructor!==null&&!ms(t.constructor)&&bn(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Ky=$n("ArrayBuffer");function ST(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Ky(t.buffer),e}const ET=oc("string"),bn=oc("function"),Zy=oc("number"),ac=t=>t!==null&&typeof t=="object",MT=t=>t===!0||t===!1,zl=t=>{if(rc(t)!=="object")return!1;const e=Wp(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},wT=$n("Date"),TT=$n("File"),AT=$n("Blob"),CT=$n("FileList"),RT=t=>ac(t)&&bn(t.pipe),bT=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||bn(t.append)&&((e=rc(t))==="formdata"||e==="object"&&bn(t.toString)&&t.toString()==="[object FormData]"))},PT=$n("URLSearchParams"),[DT,LT,NT,IT]=["ReadableStream","Request","Response","Headers"].map($n),UT=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Cs(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let i,r;if(typeof t!="object"&&(t=[t]),da(t))for(i=0,r=t.length;i<r;i++)e.call(null,t[i],i,t);else{const o=n?Object.getOwnPropertyNames(t):Object.keys(t),a=o.length;let s;for(i=0;i<a;i++)s=o[i],e.call(null,t[s],s,t)}}function Qy(t,e){e=e.toLowerCase();const n=Object.keys(t);let i=n.length,r;for(;i-- >0;)if(r=n[i],e===r.toLowerCase())return r;return null}const Jy=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,ex=t=>!ms(t)&&t!==Jy;function $d(){const{caseless:t}=ex(this)&&this||{},e={},n=(i,r)=>{const o=t&&Qy(e,r)||r;zl(e[o])&&zl(i)?e[o]=$d(e[o],i):zl(i)?e[o]=$d({},i):da(i)?e[o]=i.slice():e[o]=i};for(let i=0,r=arguments.length;i<r;i++)arguments[i]&&Cs(arguments[i],n);return e}const OT=(t,e,n,{allOwnKeys:i}={})=>(Cs(e,(r,o)=>{n&&bn(r)?t[o]=qy(r,n):t[o]=r},{allOwnKeys:i}),t),FT=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),kT=(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},BT=(t,e,n,i)=>{let r,o,a;const s={};if(e=e||{},t==null)return e;do{for(r=Object.getOwnPropertyNames(t),o=r.length;o-- >0;)a=r[o],(!i||i(a,t,e))&&!s[a]&&(e[a]=t[a],s[a]=!0);t=n!==!1&&Wp(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},zT=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return i!==-1&&i===n},VT=t=>{if(!t)return null;if(da(t))return t;let e=t.length;if(!Zy(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},HT=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Wp(Uint8Array)),GT=(t,e)=>{const i=(t&&t[Symbol.iterator]).call(t);let r;for(;(r=i.next())&&!r.done;){const o=r.value;e.call(t,o[0],o[1])}},WT=(t,e)=>{let n;const i=[];for(;(n=t.exec(e))!==null;)i.push(n);return i},jT=$n("HTMLFormElement"),XT=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,i,r){return i.toUpperCase()+r}),Og=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),$T=$n("RegExp"),tx=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};Cs(n,(r,o)=>{let a;(a=e(r,o,t))!==!1&&(i[o]=a||r)}),Object.defineProperties(t,i)},YT=t=>{tx(t,(e,n)=>{if(bn(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const i=t[n];if(bn(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},qT=(t,e)=>{const n={},i=r=>{r.forEach(o=>{n[o]=!0})};return da(t)?i(t):i(String(t).split(e)),n},KT=()=>{},ZT=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e,ef="abcdefghijklmnopqrstuvwxyz",Fg="0123456789",nx={DIGIT:Fg,ALPHA:ef,ALPHA_DIGIT:ef+ef.toUpperCase()+Fg},QT=(t=16,e=nx.ALPHA_DIGIT)=>{let n="";const{length:i}=e;for(;t--;)n+=e[Math.random()*i|0];return n};function JT(t){return!!(t&&bn(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const eA=t=>{const e=new Array(10),n=(i,r)=>{if(ac(i)){if(e.indexOf(i)>=0)return;if(!("toJSON"in i)){e[r]=i;const o=da(i)?[]:{};return Cs(i,(a,s)=>{const l=n(a,r+1);!ms(l)&&(o[s]=l)}),e[r]=void 0,o}}return i};return n(t,0)},tA=$n("AsyncFunction"),nA=t=>t&&(ac(t)||bn(t))&&bn(t.then)&&bn(t.catch),G={isArray:da,isArrayBuffer:Ky,isBuffer:xT,isFormData:bT,isArrayBufferView:ST,isString:ET,isNumber:Zy,isBoolean:MT,isObject:ac,isPlainObject:zl,isReadableStream:DT,isRequest:LT,isResponse:NT,isHeaders:IT,isUndefined:ms,isDate:wT,isFile:TT,isBlob:AT,isRegExp:$T,isFunction:bn,isStream:RT,isURLSearchParams:PT,isTypedArray:HT,isFileList:CT,forEach:Cs,merge:$d,extend:OT,trim:UT,stripBOM:FT,inherits:kT,toFlatObject:BT,kindOf:rc,kindOfTest:$n,endsWith:zT,toArray:VT,forEachEntry:GT,matchAll:WT,isHTMLForm:jT,hasOwnProperty:Og,hasOwnProp:Og,reduceDescriptors:tx,freezeMethods:YT,toObjectSet:qT,toCamelCase:XT,noop:KT,toFiniteNumber:ZT,findKey:Qy,global:Jy,isContextDefined:ex,ALPHABET:nx,generateString:QT,isSpecCompliantForm:JT,toJSONObject:eA,isAsyncFn:tA,isThenable:nA};function ke(t,e,n,i,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),i&&(this.request=i),r&&(this.response=r)}G.inherits(ke,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:G.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const ix=ke.prototype,rx={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{rx[t]={value:t}});Object.defineProperties(ke,rx);Object.defineProperty(ix,"isAxiosError",{value:!0});ke.from=(t,e,n,i,r,o)=>{const a=Object.create(ix);return G.toFlatObject(t,a,function(l){return l!==Error.prototype},s=>s!=="isAxiosError"),ke.call(a,t.message,e,n,i,r),a.cause=t,a.name=t.name,o&&Object.assign(a,o),a};const iA=null;function Yd(t){return G.isPlainObject(t)||G.isArray(t)}function ox(t){return G.endsWith(t,"[]")?t.slice(0,-2):t}function kg(t,e,n){return t?t.concat(e).map(function(r,o){return r=ox(r),!n&&o?"["+r+"]":r}).join(n?".":""):e}function rA(t){return G.isArray(t)&&!t.some(Yd)}const oA=G.toFlatObject(G,{},null,function(e){return/^is[A-Z]/.test(e)});function sc(t,e,n){if(!G.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=G.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,m){return!G.isUndefined(m[y])});const i=n.metaTokens,r=n.visitor||c,o=n.dots,a=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&G.isSpecCompliantForm(e);if(!G.isFunction(r))throw new TypeError("visitor must be a function");function u(g){if(g===null)return"";if(G.isDate(g))return g.toISOString();if(!l&&G.isBlob(g))throw new ke("Blob is not supported. Use a Buffer instead.");return G.isArrayBuffer(g)||G.isTypedArray(g)?l&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function c(g,y,m){let d=g;if(g&&!m&&typeof g=="object"){if(G.endsWith(y,"{}"))y=i?y:y.slice(0,-2),g=JSON.stringify(g);else if(G.isArray(g)&&rA(g)||(G.isFileList(g)||G.endsWith(y,"[]"))&&(d=G.toArray(g)))return y=ox(y),d.forEach(function(v,x){!(G.isUndefined(v)||v===null)&&e.append(a===!0?kg([y],x,o):a===null?y:y+"[]",u(v))}),!1}return Yd(g)?!0:(e.append(kg(m,y,o),u(g)),!1)}const f=[],h=Object.assign(oA,{defaultVisitor:c,convertValue:u,isVisitable:Yd});function p(g,y){if(!G.isUndefined(g)){if(f.indexOf(g)!==-1)throw Error("Circular reference detected in "+y.join("."));f.push(g),G.forEach(g,function(d,_){(!(G.isUndefined(d)||d===null)&&r.call(e,d,G.isString(_)?_.trim():_,y,h))===!0&&p(d,y?y.concat(_):[_])}),f.pop()}}if(!G.isObject(t))throw new TypeError("data must be an object");return p(t),e}function Bg(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(i){return e[i]})}function jp(t,e){this._pairs=[],t&&sc(t,this,e)}const ax=jp.prototype;ax.append=function(e,n){this._pairs.push([e,n])};ax.toString=function(e){const n=e?function(i){return e.call(this,i,Bg)}:Bg;return this._pairs.map(function(r){return n(r[0])+"="+n(r[1])},"").join("&")};function aA(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function sx(t,e,n){if(!e)return t;const i=n&&n.encode||aA,r=n&&n.serialize;let o;if(r?o=r(e,n):o=G.isURLSearchParams(e)?e.toString():new jp(e,n).toString(i),o){const a=t.indexOf("#");a!==-1&&(t=t.slice(0,a)),t+=(t.indexOf("?")===-1?"?":"&")+o}return t}class zg{constructor(){this.handlers=[]}use(e,n,i){return this.handlers.push({fulfilled:e,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){G.forEach(this.handlers,function(i){i!==null&&e(i)})}}const lx={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},sA=typeof URLSearchParams<"u"?URLSearchParams:jp,lA=typeof FormData<"u"?FormData:null,uA=typeof Blob<"u"?Blob:null,cA={isBrowser:!0,classes:{URLSearchParams:sA,FormData:lA,Blob:uA},protocols:["http","https","file","blob","url","data"]},Xp=typeof window<"u"&&typeof document<"u",fA=(t=>Xp&&["ReactNative","NativeScript","NS"].indexOf(t)<0)(typeof navigator<"u"&&navigator.product),dA=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",hA=Xp&&window.location.href||"http://localhost",pA=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Xp,hasStandardBrowserEnv:fA,hasStandardBrowserWebWorkerEnv:dA,origin:hA},Symbol.toStringTag,{value:"Module"})),jn={...pA,...cA};function mA(t,e){return sc(t,new jn.classes.URLSearchParams,Object.assign({visitor:function(n,i,r,o){return jn.isNode&&G.isBuffer(n)?(this.append(i,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},e))}function gA(t){return G.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function vA(t){const e={},n=Object.keys(t);let i;const r=n.length;let o;for(i=0;i<r;i++)o=n[i],e[o]=t[o];return e}function ux(t){function e(n,i,r,o){let a=n[o++];if(a==="__proto__")return!0;const s=Number.isFinite(+a),l=o>=n.length;return a=!a&&G.isArray(r)?r.length:a,l?(G.hasOwnProp(r,a)?r[a]=[r[a],i]:r[a]=i,!s):((!r[a]||!G.isObject(r[a]))&&(r[a]=[]),e(n,i,r[a],o)&&G.isArray(r[a])&&(r[a]=vA(r[a])),!s)}if(G.isFormData(t)&&G.isFunction(t.entries)){const n={};return G.forEachEntry(t,(i,r)=>{e(gA(i),r,n,0)}),n}return null}function _A(t,e,n){if(G.isString(t))try{return(e||JSON.parse)(t),G.trim(t)}catch(i){if(i.name!=="SyntaxError")throw i}return(n||JSON.stringify)(t)}const Rs={transitional:lx,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const i=n.getContentType()||"",r=i.indexOf("application/json")>-1,o=G.isObject(e);if(o&&G.isHTMLForm(e)&&(e=new FormData(e)),G.isFormData(e))return r?JSON.stringify(ux(e)):e;if(G.isArrayBuffer(e)||G.isBuffer(e)||G.isStream(e)||G.isFile(e)||G.isBlob(e)||G.isReadableStream(e))return e;if(G.isArrayBufferView(e))return e.buffer;if(G.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(o){if(i.indexOf("application/x-www-form-urlencoded")>-1)return mA(e,this.formSerializer).toString();if((s=G.isFileList(e))||i.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return sc(s?{"files[]":e}:e,l&&new l,this.formSerializer)}}return o||r?(n.setContentType("application/json",!1),_A(e)):e}],transformResponse:[function(e){const n=this.transitional||Rs.transitional,i=n&&n.forcedJSONParsing,r=this.responseType==="json";if(G.isResponse(e)||G.isReadableStream(e))return e;if(e&&G.isString(e)&&(i&&!this.responseType||r)){const a=!(n&&n.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(s){if(a)throw s.name==="SyntaxError"?ke.from(s,ke.ERR_BAD_RESPONSE,this,null,this.response):s}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:jn.classes.FormData,Blob:jn.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};G.forEach(["delete","get","head","post","put","patch"],t=>{Rs.headers[t]={}});const yA=G.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),xA=t=>{const e={};let n,i,r;return t&&t.split(`
`).forEach(function(a){r=a.indexOf(":"),n=a.substring(0,r).trim().toLowerCase(),i=a.substring(r+1).trim(),!(!n||e[n]&&yA[n])&&(n==="set-cookie"?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)}),e},Vg=Symbol("internals");function Ca(t){return t&&String(t).trim().toLowerCase()}function Vl(t){return t===!1||t==null?t:G.isArray(t)?t.map(Vl):String(t)}function SA(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}const EA=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function tf(t,e,n,i,r){if(G.isFunction(i))return i.call(this,e,n);if(r&&(e=n),!!G.isString(e)){if(G.isString(i))return e.indexOf(i)!==-1;if(G.isRegExp(i))return i.test(e)}}function MA(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,i)=>n.toUpperCase()+i)}function wA(t,e){const n=G.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(t,i+n,{value:function(r,o,a){return this[i].call(this,e,r,o,a)},configurable:!0})})}class un{constructor(e){e&&this.set(e)}set(e,n,i){const r=this;function o(s,l,u){const c=Ca(l);if(!c)throw new Error("header name must be a non-empty string");const f=G.findKey(r,c);(!f||r[f]===void 0||u===!0||u===void 0&&r[f]!==!1)&&(r[f||l]=Vl(s))}const a=(s,l)=>G.forEach(s,(u,c)=>o(u,c,l));if(G.isPlainObject(e)||e instanceof this.constructor)a(e,n);else if(G.isString(e)&&(e=e.trim())&&!EA(e))a(xA(e),n);else if(G.isHeaders(e))for(const[s,l]of e.entries())o(l,s,i);else e!=null&&o(n,e,i);return this}get(e,n){if(e=Ca(e),e){const i=G.findKey(this,e);if(i){const r=this[i];if(!n)return r;if(n===!0)return SA(r);if(G.isFunction(n))return n.call(this,r,i);if(G.isRegExp(n))return n.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Ca(e),e){const i=G.findKey(this,e);return!!(i&&this[i]!==void 0&&(!n||tf(this,this[i],i,n)))}return!1}delete(e,n){const i=this;let r=!1;function o(a){if(a=Ca(a),a){const s=G.findKey(i,a);s&&(!n||tf(i,i[s],s,n))&&(delete i[s],r=!0)}}return G.isArray(e)?e.forEach(o):o(e),r}clear(e){const n=Object.keys(this);let i=n.length,r=!1;for(;i--;){const o=n[i];(!e||tf(this,this[o],o,e,!0))&&(delete this[o],r=!0)}return r}normalize(e){const n=this,i={};return G.forEach(this,(r,o)=>{const a=G.findKey(i,o);if(a){n[a]=Vl(r),delete n[o];return}const s=e?MA(o):String(o).trim();s!==o&&delete n[o],n[s]=Vl(r),i[s]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return G.forEach(this,(i,r)=>{i!=null&&i!==!1&&(n[r]=e&&G.isArray(i)?i.join(", "):i)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const i=new this(e);return n.forEach(r=>i.set(r)),i}static accessor(e){const i=(this[Vg]=this[Vg]={accessors:{}}).accessors,r=this.prototype;function o(a){const s=Ca(a);i[s]||(wA(r,a),i[s]=!0)}return G.isArray(e)?e.forEach(o):o(e),this}}un.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);G.reduceDescriptors(un.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(i){this[n]=i}}});G.freezeMethods(un);function nf(t,e){const n=this||Rs,i=e||n,r=un.from(i.headers);let o=i.data;return G.forEach(t,function(s){o=s.call(n,o,r.normalize(),e?e.status:void 0)}),r.normalize(),o}function cx(t){return!!(t&&t.__CANCEL__)}function ha(t,e,n){ke.call(this,t??"canceled",ke.ERR_CANCELED,e,n),this.name="CanceledError"}G.inherits(ha,ke,{__CANCEL__:!0});function fx(t,e,n){const i=n.config.validateStatus;!n.status||!i||i(n.status)?t(n):e(new ke("Request failed with status code "+n.status,[ke.ERR_BAD_REQUEST,ke.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function TA(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function AA(t,e){t=t||10;const n=new Array(t),i=new Array(t);let r=0,o=0,a;return e=e!==void 0?e:1e3,function(l){const u=Date.now(),c=i[o];a||(a=u),n[r]=l,i[r]=u;let f=o,h=0;for(;f!==r;)h+=n[f++],f=f%t;if(r=(r+1)%t,r===o&&(o=(o+1)%t),u-a<e)return;const p=c&&u-c;return p?Math.round(h*1e3/p):void 0}}function CA(t,e){let n=0;const i=1e3/e;let r=null;return function(){const a=this===!0,s=Date.now();if(a||s-n>i)return r&&(clearTimeout(r),r=null),n=s,t.apply(null,arguments);r||(r=setTimeout(()=>(r=null,n=Date.now(),t.apply(null,arguments)),i-(s-n)))}}const Mu=(t,e,n=3)=>{let i=0;const r=AA(50,250);return CA(o=>{const a=o.loaded,s=o.lengthComputable?o.total:void 0,l=a-i,u=r(l),c=a<=s;i=a;const f={loaded:a,total:s,progress:s?a/s:void 0,bytes:l,rate:u||void 0,estimated:u&&s&&c?(s-a)/u:void 0,event:o,lengthComputable:s!=null};f[e?"download":"upload"]=!0,t(f)},n)},RA=jn.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let i;function r(o){let a=o;return e&&(n.setAttribute("href",a),a=n.href),n.setAttribute("href",a),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return i=r(window.location.href),function(a){const s=G.isString(a)?r(a):a;return s.protocol===i.protocol&&s.host===i.host}}():function(){return function(){return!0}}(),bA=jn.hasStandardBrowserEnv?{write(t,e,n,i,r,o){const a=[t+"="+encodeURIComponent(e)];G.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),G.isString(i)&&a.push("path="+i),G.isString(r)&&a.push("domain="+r),o===!0&&a.push("secure"),document.cookie=a.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function PA(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function DA(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function dx(t,e){return t&&!PA(e)?DA(t,e):e}const Hg=t=>t instanceof un?{...t}:t;function Wr(t,e){e=e||{};const n={};function i(u,c,f){return G.isPlainObject(u)&&G.isPlainObject(c)?G.merge.call({caseless:f},u,c):G.isPlainObject(c)?G.merge({},c):G.isArray(c)?c.slice():c}function r(u,c,f){if(G.isUndefined(c)){if(!G.isUndefined(u))return i(void 0,u,f)}else return i(u,c,f)}function o(u,c){if(!G.isUndefined(c))return i(void 0,c)}function a(u,c){if(G.isUndefined(c)){if(!G.isUndefined(u))return i(void 0,u)}else return i(void 0,c)}function s(u,c,f){if(f in e)return i(u,c);if(f in t)return i(void 0,u)}const l={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:s,headers:(u,c)=>r(Hg(u),Hg(c),!0)};return G.forEach(Object.keys(Object.assign({},t,e)),function(c){const f=l[c]||r,h=f(t[c],e[c],c);G.isUndefined(h)&&f!==s||(n[c]=h)}),n}const hx=t=>{const e=Wr({},t);let{data:n,withXSRFToken:i,xsrfHeaderName:r,xsrfCookieName:o,headers:a,auth:s}=e;e.headers=a=un.from(a),e.url=sx(dx(e.baseURL,e.url),t.params,t.paramsSerializer),s&&a.set("Authorization","Basic "+btoa((s.username||"")+":"+(s.password?unescape(encodeURIComponent(s.password)):"")));let l;if(G.isFormData(n)){if(jn.hasStandardBrowserEnv||jn.hasStandardBrowserWebWorkerEnv)a.setContentType(void 0);else if((l=a.getContentType())!==!1){const[u,...c]=l?l.split(";").map(f=>f.trim()).filter(Boolean):[];a.setContentType([u||"multipart/form-data",...c].join("; "))}}if(jn.hasStandardBrowserEnv&&(i&&G.isFunction(i)&&(i=i(e)),i||i!==!1&&RA(e.url))){const u=r&&o&&bA.read(o);u&&a.set(r,u)}return e},LA=typeof XMLHttpRequest<"u",NA=LA&&function(t){return new Promise(function(n,i){const r=hx(t);let o=r.data;const a=un.from(r.headers).normalize();let{responseType:s}=r,l;function u(){r.cancelToken&&r.cancelToken.unsubscribe(l),r.signal&&r.signal.removeEventListener("abort",l)}let c=new XMLHttpRequest;c.open(r.method.toUpperCase(),r.url,!0),c.timeout=r.timeout;function f(){if(!c)return;const p=un.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),y={data:!s||s==="text"||s==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:p,config:t,request:c};fx(function(d){n(d),u()},function(d){i(d),u()},y),c=null}"onloadend"in c?c.onloadend=f:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(f)},c.onabort=function(){c&&(i(new ke("Request aborted",ke.ECONNABORTED,r,c)),c=null)},c.onerror=function(){i(new ke("Network Error",ke.ERR_NETWORK,r,c)),c=null},c.ontimeout=function(){let g=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const y=r.transitional||lx;r.timeoutErrorMessage&&(g=r.timeoutErrorMessage),i(new ke(g,y.clarifyTimeoutError?ke.ETIMEDOUT:ke.ECONNABORTED,r,c)),c=null},o===void 0&&a.setContentType(null),"setRequestHeader"in c&&G.forEach(a.toJSON(),function(g,y){c.setRequestHeader(y,g)}),G.isUndefined(r.withCredentials)||(c.withCredentials=!!r.withCredentials),s&&s!=="json"&&(c.responseType=r.responseType),typeof r.onDownloadProgress=="function"&&c.addEventListener("progress",Mu(r.onDownloadProgress,!0)),typeof r.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",Mu(r.onUploadProgress)),(r.cancelToken||r.signal)&&(l=p=>{c&&(i(!p||p.type?new ha(null,t,c):p),c.abort(),c=null)},r.cancelToken&&r.cancelToken.subscribe(l),r.signal&&(r.signal.aborted?l():r.signal.addEventListener("abort",l)));const h=TA(r.url);if(h&&jn.protocols.indexOf(h)===-1){i(new ke("Unsupported protocol "+h+":",ke.ERR_BAD_REQUEST,t));return}c.send(o||null)})},IA=(t,e)=>{let n=new AbortController,i;const r=function(l){if(!i){i=!0,a();const u=l instanceof Error?l:this.reason;n.abort(u instanceof ke?u:new ha(u instanceof Error?u.message:u))}};let o=e&&setTimeout(()=>{r(new ke(`timeout ${e} of ms exceeded`,ke.ETIMEDOUT))},e);const a=()=>{t&&(o&&clearTimeout(o),o=null,t.forEach(l=>{l&&(l.removeEventListener?l.removeEventListener("abort",r):l.unsubscribe(r))}),t=null)};t.forEach(l=>l&&l.addEventListener&&l.addEventListener("abort",r));const{signal:s}=n;return s.unsubscribe=a,[s,()=>{o&&clearTimeout(o),o=null}]},UA=function*(t,e){let n=t.byteLength;if(!e||n<e){yield t;return}let i=0,r;for(;i<n;)r=i+e,yield t.slice(i,r),i=r},OA=async function*(t,e,n){for await(const i of t)yield*UA(ArrayBuffer.isView(i)?i:await n(String(i)),e)},Gg=(t,e,n,i,r)=>{const o=OA(t,e,r);let a=0;return new ReadableStream({type:"bytes",async pull(s){const{done:l,value:u}=await o.next();if(l){s.close(),i();return}let c=u.byteLength;n&&n(a+=c),s.enqueue(new Uint8Array(u))},cancel(s){return i(s),o.return()}},{highWaterMark:2})},Wg=(t,e)=>{const n=t!=null;return i=>setTimeout(()=>e({lengthComputable:n,total:t,loaded:i}))},lc=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",px=lc&&typeof ReadableStream=="function",qd=lc&&(typeof TextEncoder=="function"?(t=>e=>t.encode(e))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),FA=px&&(()=>{let t=!1;const e=new Request(jn.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!e})(),jg=64*1024,Kd=px&&!!(()=>{try{return G.isReadableStream(new Response("").body)}catch{}})(),wu={stream:Kd&&(t=>t.body)};lc&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!wu[e]&&(wu[e]=G.isFunction(t[e])?n=>n[e]():(n,i)=>{throw new ke(`Response type '${e}' is not supported`,ke.ERR_NOT_SUPPORT,i)})})})(new Response);const kA=async t=>{if(t==null)return 0;if(G.isBlob(t))return t.size;if(G.isSpecCompliantForm(t))return(await new Request(t).arrayBuffer()).byteLength;if(G.isArrayBufferView(t))return t.byteLength;if(G.isURLSearchParams(t)&&(t=t+""),G.isString(t))return(await qd(t)).byteLength},BA=async(t,e)=>{const n=G.toFiniteNumber(t.getContentLength());return n??kA(e)},zA=lc&&(async t=>{let{url:e,method:n,data:i,signal:r,cancelToken:o,timeout:a,onDownloadProgress:s,onUploadProgress:l,responseType:u,headers:c,withCredentials:f="same-origin",fetchOptions:h}=hx(t);u=u?(u+"").toLowerCase():"text";let[p,g]=r||o||a?IA([r,o],a):[],y,m;const d=()=>{!y&&setTimeout(()=>{p&&p.unsubscribe()}),y=!0};let _;try{if(l&&FA&&n!=="get"&&n!=="head"&&(_=await BA(c,i))!==0){let T=new Request(e,{method:"POST",body:i,duplex:"half"}),A;G.isFormData(i)&&(A=T.headers.get("content-type"))&&c.setContentType(A),T.body&&(i=Gg(T.body,jg,Wg(_,Mu(l)),null,qd))}G.isString(f)||(f=f?"cors":"omit"),m=new Request(e,{...h,signal:p,method:n.toUpperCase(),headers:c.normalize().toJSON(),body:i,duplex:"half",withCredentials:f});let v=await fetch(m);const x=Kd&&(u==="stream"||u==="response");if(Kd&&(s||x)){const T={};["status","statusText","headers"].forEach(C=>{T[C]=v[C]});const A=G.toFiniteNumber(v.headers.get("content-length"));v=new Response(Gg(v.body,jg,s&&Wg(A,Mu(s,!0)),x&&d,qd),T)}u=u||"text";let b=await wu[G.findKey(wu,u)||"text"](v,t);return!x&&d(),g&&g(),await new Promise((T,A)=>{fx(T,A,{data:b,headers:un.from(v.headers),status:v.status,statusText:v.statusText,config:t,request:m})})}catch(v){throw d(),v&&v.name==="TypeError"&&/fetch/i.test(v.message)?Object.assign(new ke("Network Error",ke.ERR_NETWORK,t,m),{cause:v.cause||v}):ke.from(v,v&&v.code,t,m)}}),Zd={http:iA,xhr:NA,fetch:zA};G.forEach(Zd,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const Xg=t=>`- ${t}`,VA=t=>G.isFunction(t)||t===null||t===!1,mx={getAdapter:t=>{t=G.isArray(t)?t:[t];const{length:e}=t;let n,i;const r={};for(let o=0;o<e;o++){n=t[o];let a;if(i=n,!VA(n)&&(i=Zd[(a=String(n)).toLowerCase()],i===void 0))throw new ke(`Unknown adapter '${a}'`);if(i)break;r[a||"#"+o]=i}if(!i){const o=Object.entries(r).map(([s,l])=>`adapter ${s} `+(l===!1?"is not supported by the environment":"is not available in the build"));let a=e?o.length>1?`since :
`+o.map(Xg).join(`
`):" "+Xg(o[0]):"as no adapter specified";throw new ke("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return i},adapters:Zd};function rf(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new ha(null,t)}function $g(t){return rf(t),t.headers=un.from(t.headers),t.data=nf.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),mx.getAdapter(t.adapter||Rs.adapter)(t).then(function(i){return rf(t),i.data=nf.call(t,t.transformResponse,i),i.headers=un.from(i.headers),i},function(i){return cx(i)||(rf(t),i&&i.response&&(i.response.data=nf.call(t,t.transformResponse,i.response),i.response.headers=un.from(i.response.headers))),Promise.reject(i)})}const gx="1.7.2",$p={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{$p[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}});const Yg={};$p.transitional=function(e,n,i){function r(o,a){return"[Axios v"+gx+"] Transitional option '"+o+"'"+a+(i?". "+i:"")}return(o,a,s)=>{if(e===!1)throw new ke(r(a," has been removed"+(n?" in "+n:"")),ke.ERR_DEPRECATED);return n&&!Yg[a]&&(Yg[a]=!0,console.warn(r(a," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(o,a,s):!0}};function HA(t,e,n){if(typeof t!="object")throw new ke("options must be an object",ke.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let r=i.length;for(;r-- >0;){const o=i[r],a=e[o];if(a){const s=t[o],l=s===void 0||a(s,o,t);if(l!==!0)throw new ke("option "+o+" must be "+l,ke.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new ke("Unknown option "+o,ke.ERR_BAD_OPTION)}}const Qd={assertOptions:HA,validators:$p},Ii=Qd.validators;class kr{constructor(e){this.defaults=e,this.interceptors={request:new zg,response:new zg}}async request(e,n){try{return await this._request(e,n)}catch(i){if(i instanceof Error){let r;Error.captureStackTrace?Error.captureStackTrace(r={}):r=new Error;const o=r.stack?r.stack.replace(/^.+\n/,""):"";try{i.stack?o&&!String(i.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(i.stack+=`
`+o):i.stack=o}catch{}}throw i}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Wr(this.defaults,n);const{transitional:i,paramsSerializer:r,headers:o}=n;i!==void 0&&Qd.assertOptions(i,{silentJSONParsing:Ii.transitional(Ii.boolean),forcedJSONParsing:Ii.transitional(Ii.boolean),clarifyTimeoutError:Ii.transitional(Ii.boolean)},!1),r!=null&&(G.isFunction(r)?n.paramsSerializer={serialize:r}:Qd.assertOptions(r,{encode:Ii.function,serialize:Ii.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let a=o&&G.merge(o.common,o[n.method]);o&&G.forEach(["delete","get","head","post","put","patch","common"],g=>{delete o[g]}),n.headers=un.concat(a,o);const s=[];let l=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(l=l&&y.synchronous,s.unshift(y.fulfilled,y.rejected))});const u=[];this.interceptors.response.forEach(function(y){u.push(y.fulfilled,y.rejected)});let c,f=0,h;if(!l){const g=[$g.bind(this),void 0];for(g.unshift.apply(g,s),g.push.apply(g,u),h=g.length,c=Promise.resolve(n);f<h;)c=c.then(g[f++],g[f++]);return c}h=s.length;let p=n;for(f=0;f<h;){const g=s[f++],y=s[f++];try{p=g(p)}catch(m){y.call(this,m);break}}try{c=$g.call(this,p)}catch(g){return Promise.reject(g)}for(f=0,h=u.length;f<h;)c=c.then(u[f++],u[f++]);return c}getUri(e){e=Wr(this.defaults,e);const n=dx(e.baseURL,e.url);return sx(n,e.params,e.paramsSerializer)}}G.forEach(["delete","get","head","options"],function(e){kr.prototype[e]=function(n,i){return this.request(Wr(i||{},{method:e,url:n,data:(i||{}).data}))}});G.forEach(["post","put","patch"],function(e){function n(i){return function(o,a,s){return this.request(Wr(s||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:o,data:a}))}}kr.prototype[e]=n(),kr.prototype[e+"Form"]=n(!0)});class Yp{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const i=this;this.promise.then(r=>{if(!i._listeners)return;let o=i._listeners.length;for(;o-- >0;)i._listeners[o](r);i._listeners=null}),this.promise.then=r=>{let o;const a=new Promise(s=>{i.subscribe(s),o=s}).then(r);return a.cancel=function(){i.unsubscribe(o)},a},e(function(o,a,s){i.reason||(i.reason=new ha(o,a,s),n(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new Yp(function(r){e=r}),cancel:e}}}function GA(t){return function(n){return t.apply(null,n)}}function WA(t){return G.isObject(t)&&t.isAxiosError===!0}const Jd={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Jd).forEach(([t,e])=>{Jd[e]=t});function vx(t){const e=new kr(t),n=qy(kr.prototype.request,e);return G.extend(n,kr.prototype,e,{allOwnKeys:!0}),G.extend(n,e,null,{allOwnKeys:!0}),n.create=function(r){return vx(Wr(t,r))},n}const St=vx(Rs);St.Axios=kr;St.CanceledError=ha;St.CancelToken=Yp;St.isCancel=cx;St.VERSION=gx;St.toFormData=sc;St.AxiosError=ke;St.Cancel=St.CanceledError;St.all=function(e){return Promise.all(e)};St.spread=GA;St.isAxiosError=WA;St.mergeConfig=Wr;St.AxiosHeaders=un;St.formToJSON=t=>ux(G.isHTMLForm(t)?new FormData(t):t);St.getAdapter=mx.getAdapter;St.HttpStatusCode=Jd;St.default=St;var jA={BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const qg=t=>{let e;const n=new Set,i=(c,f)=>{const h=typeof c=="function"?c(e):c;if(!Object.is(h,e)){const p=e;e=f??(typeof h!="object"||h===null)?h:Object.assign({},e,h),n.forEach(g=>g(e,p))}},r=()=>e,l={setState:i,getState:r,getInitialState:()=>u,subscribe:c=>(n.add(c),()=>n.delete(c)),destroy:()=>{(jA?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},u=e=t(i,r,l);return l},XA=t=>t?qg(t):qg;var _x={exports:{}},yx={},xx={exports:{}},Sx={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ea=te;function $A(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var YA=typeof Object.is=="function"?Object.is:$A,qA=ea.useState,KA=ea.useEffect,ZA=ea.useLayoutEffect,QA=ea.useDebugValue;function JA(t,e){var n=e(),i=qA({inst:{value:n,getSnapshot:e}}),r=i[0].inst,o=i[1];return ZA(function(){r.value=n,r.getSnapshot=e,of(r)&&o({inst:r})},[t,n,e]),KA(function(){return of(r)&&o({inst:r}),t(function(){of(r)&&o({inst:r})})},[t]),QA(n),n}function of(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!YA(t,n)}catch{return!0}}function eC(t,e){return e()}var tC=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?eC:JA;Sx.useSyncExternalStore=ea.useSyncExternalStore!==void 0?ea.useSyncExternalStore:tC;xx.exports=Sx;var nC=xx.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uc=te,iC=nC;function rC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var oC=typeof Object.is=="function"?Object.is:rC,aC=iC.useSyncExternalStore,sC=uc.useRef,lC=uc.useEffect,uC=uc.useMemo,cC=uc.useDebugValue;yx.useSyncExternalStoreWithSelector=function(t,e,n,i,r){var o=sC(null);if(o.current===null){var a={hasValue:!1,value:null};o.current=a}else a=o.current;o=uC(function(){function l(p){if(!u){if(u=!0,c=p,p=i(p),r!==void 0&&a.hasValue){var g=a.value;if(r(g,p))return f=g}return f=p}if(g=f,oC(c,p))return g;var y=i(p);return r!==void 0&&r(g,y)?g:(c=p,f=y)}var u=!1,c,f,h=n===void 0?null:n;return[function(){return l(e())},h===null?void 0:function(){return l(h())}]},[e,n,i,r]);var s=aC(t,o[0],o[1]);return lC(function(){a.hasValue=!0,a.value=s},[s]),cC(s),s};_x.exports=yx;var fC=_x.exports;const dC=Oh(fC);var Ex={BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{useDebugValue:hC}=xi,{useSyncExternalStoreWithSelector:pC}=dC;let Kg=!1;const mC=t=>t;function gC(t,e=mC,n){(Ex?"production":void 0)!=="production"&&n&&!Kg&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),Kg=!0);const i=pC(t.subscribe,t.getState,t.getServerState||t.getInitialState,e,n);return hC(i),i}const Zg=t=>{(Ex?"production":void 0)!=="production"&&typeof t!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof t=="function"?XA(t):t,n=(i,r)=>gC(e,i,r);return Object.assign(n,e),n},cc=t=>t?Zg(t):Zg,vC=cc((t,e)=>({data:[],loading:!0,fetchData:async()=>{try{t({loading:!0});const i=(await St.get("https://sohibkor-admin.ru:3000/api/evens")).data;t({data:i}),t({loading:!1}),console.log(i)}catch(n){console.error(n),document.getElementById("root").innerHTML='<h1 style="text-align: center; padding: 20px 0 ;"> error: Ошибка :( <h1/>',t({loading:!1})}finally{t({loading:!1})}}})),_C=cc((t,e)=>({loadingSubmit:!0,handleSubmit:async(n,i,r,o)=>{try{const a=await St.post("https://sohibkor-admin.ru:4000/submit",{name:n,email:i,message:r,selectedDay:o});console.log(a.data)}catch(a){console.error("Ошибка отправки заявки:",a)}}})),yC=cc((t,e)=>({loadingAi:!1,askQuestion:async n=>{t({loadingAi:!0});try{return(await St.post("https://sohibkor-admin.online:5600/ask",{question:n})).data.answer}catch(i){return console.error("Error:",i),"Произошла ошибка. Попробуйте снова."}finally{t({loadingAi:!1})}}})),Mx=cc((t,e)=>({StateBurger:!1,ShowBurger:()=>{t({StateBurger:!e().StateBurger})}})),wx="data:image/svg+xml,%3csvg%20width='30'%20height='30'%20viewBox='0%200%2030%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%208.3C0%203.71604%203.71604%200%208.3%200V11.7C8.3%2016.284%204.58396%2020%200%2020V8.3Z'%20fill='%2301CAD9'/%3e%3cpath%20d='M9.5%208.3C9.5%203.71604%2013.216%200%2017.8%200V21.7C17.8%2026.284%2014.084%2030%209.5%2030V8.3Z'%20fill='%2301CAD9'/%3e%3cpath%20d='M19%200C23.4183%200%2027%203.58172%2027%208V20C22.5817%2020%2019%2016.4183%2019%2012V0Z'%20fill='%2301CAD9'/%3e%3cpath%20d='M19%2026C19%2023.7909%2020.7909%2022%2023%2022C25.2091%2022%2027%2023.7909%2027%2026C27%2028.2091%2025.2091%2030%2023%2030C20.7909%2030%2019%2028.2091%2019%2026Z'%20fill='%2301CAD9'/%3e%3c/svg%3e",xC="data:image/svg+xml,%3csvg%20width='30'%20height='30'%20viewBox='0%200%2030%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%208.3C0%203.71604%203.71604%200%208.3%200V11.7C8.3%2016.284%204.58396%2020%200%2020V8.3Z'%20fill='white'/%3e%3cpath%20d='M9.5%208.3C9.5%203.71604%2013.216%200%2017.8%200V21.7C17.8%2026.284%2014.084%2030%209.5%2030V8.3Z'%20fill='white'/%3e%3cpath%20d='M19%200C23.4183%200%2027%203.58172%2027%208V20C22.5817%2020%2019%2016.4183%2019%2012V0Z'%20fill='white'/%3e%3cpath%20d='M19%2026C19%2023.7909%2020.7909%2022%2023%2022C25.2091%2022%2027%2023.7909%2027%2026C27%2028.2091%2025.2091%2030%2023%2030C20.7909%2030%2019%2028.2091%2019%2026Z'%20fill='white'/%3e%3c/svg%3e",Qg="/assets/00%201-B1HBPMBQ.jpg";function SC({title:t}){return O.jsx("div",{className:"footer",children:O.jsxs("div",{className:"NavBar",children:[O.jsx(xu,{to:"/",children:O.jsx("img",{className:"LogoHome",src:t=="INTELLIGENT"?wx:xC,alt:""})}),O.jsx("button",{className:"ButtonTeam",onClick:()=>{document.location.href="https://t.me/ai_intelligent_tj"},children:"Сообщество"}),O.jsx(xu,{to:"/content",children:O.jsx("img",{className:"LogoAi",src:(t=="NOROV AI",Qg),alt:""})})]})})}const EC=()=>{const[t,e]=te.useState(!0),[n,i]=te.useState(""),[r,o]=te.useState(null),[a,s]=te.useState(""),[l,u]=te.useState(""),[c,f]=te.useState(""),[h,p]=te.useState(""),[g,y]=te.useState(!1),{data:m,loading:d,fetchData:_}=vC(T=>({data:T.data,loading:T.loading,fetchData:T.fetchData})),{loadingSubmit:v,handleSubmit:x}=_C(T=>({loadingSubmit:T.loadingSubmit,handleSubmit:T.handleSubmit}));te.useEffect(()=>{_()},[]),te.useEffect(()=>{y(d)},[d]);const b=T=>{const A=T.toLocaleDateString("en-CA");i(A);const C=m.find(w=>w.date.split("T")[0]===A);o(C),e(!0),document.location.href="#Info"};return O.jsxs("div",{className:"container",children:[O.jsxs("div",{className:"calendarContainer",children:[O.jsx("div",{className:"titleCalendar",children:O.jsx("h3",{children:"Календарь мероприятий"})}),O.jsx(_T,{onClickDay:T=>b(T),className:"calendar",tileClassName:({date:T,view:A})=>{const C=T.toLocaleDateString("en-CA");return m.find(w=>w.date.split("T")[0]===C)?"marked":""}})]}),O.jsx("div",{className:`divImgLogoCenter ${g?"anim":""}`,style:{zIndex:g?2:-2,filter:g?"none":" brightness(70%)"},children:O.jsxs("div",{className:"loadingLogo",children:[O.jsx("span",{className:`s1 ${g?"anim1":""}`}),O.jsx("span",{className:`s2 ${g?"anim2":""}`}),O.jsx("span",{className:`s3 ${g?"anim3":""}`})]})}),O.jsx(SC,{title:"INTELLIGENT"}),t&&O.jsx("div",{className:"modalDiv",children:O.jsxs("div",{className:"modalContent",children:[r?O.jsx(O.Fragment,{children:O.jsxs("div",{className:"infoContent",children:[O.jsx("p",{className:"modalText",children:n}),O.jsx("p",{className:"title",children:r.title}),O.jsx("img",{src:r.image,alt:r.title,className:"modalImage"}),O.jsx("div",{className:"subtitle",children:O.jsx("p",{children:r.subtitle})}),O.jsxs("div",{children:[O.jsx("label",{htmlFor:"#name",children:"Ваше Имя :"}),O.jsx("br",{}),O.jsx("input",{id:"name",className:"input",placeholder:"Ваше имя",value:a,onChange:T=>s(T.target.value)})]}),O.jsxs("div",{children:[O.jsx("label",{htmlFor:"#Email",children:"Ваш Email:"}),O.jsx("br",{}),O.jsx("input",{id:"Email",className:"input",placeholder:"Ваш Email",value:l,onChange:T=>u(T.target.value)})]}),O.jsxs("div",{children:[O.jsx("label",{htmlFor:"#сообщение",children:"Ваше сообщение:"}),O.jsx("br",{}),O.jsx("textarea",{id:"сообщение",className:"input",placeholder:"Ваше сообщение",value:c,onChange:T=>f(T.target.value)})]}),O.jsx("button",{className:"submitButton",onClick:()=>{x(a,l,c,n),s(""),u(""),f(""),setTimeout(()=>{p("")},4e3)},children:"Подать заявку"})]})}):"",h&&O.jsx("p",{className:"successMessage",children:h})]})}),O.jsx("div",{id:"Info",style:{maxWidth:"1200px",height:"50px",width:"10%"}})]})},MC="data:image/svg+xml,%3csvg%20width='40'%20height='17'%20viewBox='0%200%2040%2017'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_275_831)'%3e%3cline%20y1='2'%20x2='40'%20y2='2'%20stroke='%2301CAD9'%20stroke-width='4'/%3e%3cpath%20d='M0%2015H15H30'%20stroke='%2301CAD9'%20stroke-width='4'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_275_831'%3e%3crect%20width='40'%20height='17'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";var Tx={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Jg=xi.createContext&&xi.createContext(Tx),wC=["attr","size","title"];function TC(t,e){if(t==null)return{};var n=AC(t,e),i,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)i=o[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}function AC(t,e){if(t==null)return{};var n={};for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){if(e.indexOf(i)>=0)continue;n[i]=t[i]}return n}function Tu(){return Tu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Tu.apply(this,arguments)}function ev(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function Au(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ev(Object(n),!0).forEach(function(i){CC(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ev(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function CC(t,e,n){return e=RC(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function RC(t){var e=bC(t,"string");return typeof e=="symbol"?e:e+""}function bC(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Ax(t){return t&&t.map((e,n)=>xi.createElement(e.tag,Au({key:n},e.attr),Ax(e.child)))}function PC(t){return e=>xi.createElement(DC,Tu({attr:Au({},t.attr)},e),Ax(t.child))}function DC(t){var e=n=>{var{attr:i,size:r,title:o}=t,a=TC(t,wC),s=r||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),xi.createElement("svg",Tu({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,i,a,{className:l,style:Au(Au({color:t.color||n.color},n.style),t.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),o&&xi.createElement("title",null,o),t.children)};return Jg!==void 0?xi.createElement(Jg.Consumer,null,n=>e(n)):e(Tx)}function LC(t){return PC({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"},child:[]}]})(t)}function Cx({title:t}){const{StateBurger:e,ShowBurger:n}=Mx(i=>({StateBurger:i.StateBurger,ShowBurger:i.ShowBurger}));return O.jsx("div",{className:"AiContent__head",children:O.jsxs("div",{className:"contentHeader",children:[t=="NOROV AI"&&O.jsx("img",{className:"BurgerHeader",onClick:()=>n(),src:MC,alt:""}),t=="NOROV AI"&&O.jsx(xu,{to:"/",children:O.jsx(LC,{className:"Backe"})}),O.jsx("h1",{children:t}),t!=="NOROV AI"&&O.jsx(xu,{className:"LogoHeader",to:"/",children:O.jsx("img",{src:wx,alt:""})})]})})}function NC(){return O.jsxs(O.Fragment,{children:[O.jsx(Cx,{title:"INTELLIGENT"}),O.jsx(EC,{})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qp="166",IC=0,tv=1,UC=2,Rx=1,OC=2,fi=3,lr=0,cn=1,pi=2,rr=0,Wo=1,eh=2,nv=3,iv=4,FC=5,Rr=100,kC=101,BC=102,zC=103,VC=104,HC=200,GC=201,WC=202,jC=203,th=204,nh=205,XC=206,$C=207,YC=208,qC=209,KC=210,ZC=211,QC=212,JC=213,eR=214,tR=0,nR=1,iR=2,Cu=3,rR=4,oR=5,aR=6,sR=7,bx=0,lR=1,uR=2,or=0,cR=1,fR=2,dR=3,hR=4,pR=5,mR=6,gR=7,Px=300,ta=301,na=302,ih=303,rh=304,fc=306,oh=1e3,Nr=1001,ah=1002,Cn=1003,vR=1004,nl=1005,Vn=1006,af=1007,Ir=1008,Ai=1009,Dx=1010,Lx=1011,gs=1012,Kp=1013,jr=1014,vi=1015,bs=1016,Zp=1017,Qp=1018,ia=1020,Nx=35902,Ix=1021,Ux=1022,Hn=1023,Ox=1024,Fx=1025,jo=1026,ra=1027,kx=1028,Jp=1029,Bx=1030,em=1031,tm=1033,Hl=33776,Gl=33777,Wl=33778,jl=33779,sh=35840,lh=35841,uh=35842,ch=35843,fh=36196,dh=37492,hh=37496,ph=37808,mh=37809,gh=37810,vh=37811,_h=37812,yh=37813,xh=37814,Sh=37815,Eh=37816,Mh=37817,wh=37818,Th=37819,Ah=37820,Ch=37821,Xl=36492,Rh=36494,bh=36495,zx=36283,Ph=36284,Dh=36285,Lh=36286,_R=3200,yR=3201,xR=0,SR=1,ji="",Qn="srgb",mr="srgb-linear",nm="display-p3",dc="display-p3-linear",Ru="linear",ct="srgb",bu="rec709",Pu="p3",oo=7680,rv=519,ER=512,MR=513,wR=514,Vx=515,TR=516,AR=517,CR=518,RR=519,ov=35044,av="300 es",_i=2e3,Du=2001;class pa{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,a=r.length;o<a;o++)r[o].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sf=Math.PI/180,Nh=180/Math.PI;function Ps(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Gt[t&255]+Gt[t>>8&255]+Gt[t>>16&255]+Gt[t>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[n&63|128]+Gt[n>>8&255]+"-"+Gt[n>>16&255]+Gt[n>>24&255]+Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]).toLowerCase()}function rn(t,e,n){return Math.max(e,Math.min(n,t))}function bR(t,e){return(t%e+e)%e}function lf(t,e,n){return(1-n)*t+n*e}function Ra(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function tn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ze{constructor(e=0,n=0){Ze.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,a=this.y-e.y;return this.x=o*i-a*r+e.x,this.y=o*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,n,i,r,o,a,s,l,u){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,a,s,l,u)}set(e,n,i,r,o,a,s,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=s,c[3]=n,c[4]=o,c[5]=l,c[6]=i,c[7]=a,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,a=i[0],s=i[3],l=i[6],u=i[1],c=i[4],f=i[7],h=i[2],p=i[5],g=i[8],y=r[0],m=r[3],d=r[6],_=r[1],v=r[4],x=r[7],b=r[2],T=r[5],A=r[8];return o[0]=a*y+s*_+l*b,o[3]=a*m+s*v+l*T,o[6]=a*d+s*x+l*A,o[1]=u*y+c*_+f*b,o[4]=u*m+c*v+f*T,o[7]=u*d+c*x+f*A,o[2]=h*y+p*_+g*b,o[5]=h*m+p*v+g*T,o[8]=h*d+p*x+g*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],a=e[4],s=e[5],l=e[6],u=e[7],c=e[8];return n*a*c-n*s*u-i*o*c+i*s*l+r*o*u-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],a=e[4],s=e[5],l=e[6],u=e[7],c=e[8],f=c*a-s*u,h=s*l-c*o,p=u*o-a*l,g=n*f+i*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return e[0]=f*y,e[1]=(r*u-c*i)*y,e[2]=(s*i-r*a)*y,e[3]=h*y,e[4]=(c*n-r*l)*y,e[5]=(r*o-s*n)*y,e[6]=p*y,e[7]=(i*l-u*n)*y,e[8]=(a*n-i*o)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,a,s){const l=Math.cos(o),u=Math.sin(o);return this.set(i*l,i*u,-i*(l*a+u*s)+a+e,-r*u,r*l,-r*(-u*a+l*s)+s+n,0,0,1),this}scale(e,n){return this.premultiply(uf.makeScale(e,n)),this}rotate(e){return this.premultiply(uf.makeRotation(-e)),this}translate(e,n){return this.premultiply(uf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const uf=new We;function Hx(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Lu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function PR(){const t=Lu("canvas");return t.style.display="block",t}const sv={};function Gx(t){t in sv||(sv[t]=!0,console.warn(t))}function DR(t,e,n){return new Promise(function(i,r){function o(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(o,n);break;default:i()}}setTimeout(o,n)})}const lv=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),uv=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),il={[mr]:{transfer:Ru,primaries:bu,toReference:t=>t,fromReference:t=>t},[Qn]:{transfer:ct,primaries:bu,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[dc]:{transfer:Ru,primaries:Pu,toReference:t=>t.applyMatrix3(uv),fromReference:t=>t.applyMatrix3(lv)},[nm]:{transfer:ct,primaries:Pu,toReference:t=>t.convertSRGBToLinear().applyMatrix3(uv),fromReference:t=>t.applyMatrix3(lv).convertLinearToSRGB()}},LR=new Set([mr,dc]),tt={enabled:!0,_workingColorSpace:mr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!LR.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=il[e].toReference,r=il[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return il[t].primaries},getTransfer:function(t){return t===ji?Ru:il[t].transfer}};function Xo(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function cf(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ao;class NR{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ao===void 0&&(ao=Lu("canvas")),ao.width=e.width,ao.height=e.height;const i=ao.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ao}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Lu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let a=0;a<o.length;a++)o[a]=Xo(o[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Xo(n[i]/255)*255):n[i]=Xo(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let IR=0;class Wx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:IR++}),this.uuid=Ps(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let a=0,s=r.length;a<s;a++)r[a].isDataTexture?o.push(ff(r[a].image)):o.push(ff(r[a]))}else o=ff(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function ff(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?NR.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let UR=0;class Kt extends pa{constructor(e=Kt.DEFAULT_IMAGE,n=Kt.DEFAULT_MAPPING,i=Nr,r=Nr,o=Vn,a=Ir,s=Hn,l=Ai,u=Kt.DEFAULT_ANISOTROPY,c=ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:UR++}),this.uuid=Ps(),this.name="",this.source=new Wx(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=a,this.anisotropy=u,this.format=s,this.internalFormat=null,this.type=l,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Px)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case oh:e.x=e.x-Math.floor(e.x);break;case Nr:e.x=e.x<0?0:1;break;case ah:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case oh:e.y=e.y-Math.floor(e.y);break;case Nr:e.y=e.y<0?0:1;break;case ah:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=Px;Kt.DEFAULT_ANISOTROPY=1;class Ut{constructor(e=0,n=0,i=0,r=1){Ut.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*o,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*o,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*o,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const l=e.elements,u=l[0],c=l[4],f=l[8],h=l[1],p=l[5],g=l[9],y=l[2],m=l[6],d=l[10];if(Math.abs(c-h)<.01&&Math.abs(f-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+h)<.1&&Math.abs(f+y)<.1&&Math.abs(g+m)<.1&&Math.abs(u+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(u+1)/2,x=(p+1)/2,b=(d+1)/2,T=(c+h)/4,A=(f+y)/4,C=(g+m)/4;return v>x&&v>b?v<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(v),r=T/i,o=A/i):x>b?x<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(x),i=T/r,o=C/r):b<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(b),i=A/o,r=C/o),this.set(i,r,o,n),this}let _=Math.sqrt((m-g)*(m-g)+(f-y)*(f-y)+(h-c)*(h-c));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(f-y)/_,this.z=(h-c)/_,this.w=Math.acos((u+p+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class OR extends pa{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ut(0,0,e,n),this.scissorTest=!1,this.viewport=new Ut(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const o=new Kt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let s=0;s<a;s++)this.textures[s]=o.clone(),this.textures[s].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Wx(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xr extends OR{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class jx extends Kt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class FR extends Kt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ds{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,a,s){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const h=o[a+0],p=o[a+1],g=o[a+2],y=o[a+3];if(s===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f;return}if(s===1){e[n+0]=h,e[n+1]=p,e[n+2]=g,e[n+3]=y;return}if(f!==y||l!==h||u!==p||c!==g){let m=1-s;const d=l*h+u*p+c*g+f*y,_=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const b=Math.sqrt(v),T=Math.atan2(b,d*_);m=Math.sin(m*T)/b,s=Math.sin(s*T)/b}const x=s*_;if(l=l*m+h*x,u=u*m+p*x,c=c*m+g*x,f=f*m+y*x,m===1-s){const b=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=b,u*=b,c*=b,f*=b}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,o,a){const s=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=o[a],h=o[a+1],p=o[a+2],g=o[a+3];return e[n]=s*g+c*f+l*p-u*h,e[n+1]=l*g+c*h+u*f-s*p,e[n+2]=u*g+c*p+s*h-l*f,e[n+3]=c*g-s*f-l*h-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,o=e._z,a=e._order,s=Math.cos,l=Math.sin,u=s(i/2),c=s(r/2),f=s(o/2),h=l(i/2),p=l(r/2),g=l(o/2);switch(a){case"XYZ":this._x=h*c*f+u*p*g,this._y=u*p*f-h*c*g,this._z=u*c*g+h*p*f,this._w=u*c*f-h*p*g;break;case"YXZ":this._x=h*c*f+u*p*g,this._y=u*p*f-h*c*g,this._z=u*c*g-h*p*f,this._w=u*c*f+h*p*g;break;case"ZXY":this._x=h*c*f-u*p*g,this._y=u*p*f+h*c*g,this._z=u*c*g+h*p*f,this._w=u*c*f-h*p*g;break;case"ZYX":this._x=h*c*f-u*p*g,this._y=u*p*f+h*c*g,this._z=u*c*g-h*p*f,this._w=u*c*f+h*p*g;break;case"YZX":this._x=h*c*f+u*p*g,this._y=u*p*f+h*c*g,this._z=u*c*g-h*p*f,this._w=u*c*f-h*p*g;break;case"XZY":this._x=h*c*f-u*p*g,this._y=u*p*f-h*c*g,this._z=u*c*g+h*p*f,this._w=u*c*f+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],a=n[1],s=n[5],l=n[9],u=n[2],c=n[6],f=n[10],h=i+s+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(c-l)*p,this._y=(o-u)*p,this._z=(a-r)*p}else if(i>s&&i>f){const p=2*Math.sqrt(1+i-s-f);this._w=(c-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(o+u)/p}else if(s>f){const p=2*Math.sqrt(1+s-i-f);this._w=(o-u)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+f-i-s);this._w=(a-r)/p,this._x=(o+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,a=e._w,s=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+a*s+r*u-o*l,this._y=r*c+a*l+o*s-i*u,this._z=o*c+a*u+i*l-r*s,this._w=a*c-i*s-r*l-o*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,a=this._w;let s=a*e._w+i*e._x+r*e._y+o*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=a,this._x=i,this._y=r,this._z=o,this;const l=1-s*s;if(l<=Number.EPSILON){const p=1-n;return this._w=p*a+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*o+n*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,s),f=Math.sin((1-n)*c)/u,h=Math.sin(n*c)/u;return this._w=a*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=o*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(n),o*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,n=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(cv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(cv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,a=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*a,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*a,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,a=e.y,s=e.z,l=e.w,u=2*(a*r-s*i),c=2*(s*n-o*r),f=2*(o*i-a*n);return this.x=n+l*u+a*f-s*c,this.y=i+l*c+s*u-o*f,this.z=r+l*f+o*c-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,a=n.x,s=n.y,l=n.z;return this.x=r*l-o*s,this.y=o*a-i*l,this.z=i*s-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return df.copy(this).projectOnVector(e),this.sub(df)}reflect(e){return this.sub(df.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const df=new B,cv=new Ds;class Ls{constructor(e=new B(1/0,1/0,1/0),n=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Un.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Un.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Un.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(n===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let a=0,s=o.count;a<s;a++)e.isMesh===!0?e.getVertexPosition(a,Un):Un.fromBufferAttribute(o,a),Un.applyMatrix4(e.matrixWorld),this.expandByPoint(Un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),rl.copy(i.boundingBox)),rl.applyMatrix4(e.matrixWorld),this.union(rl)}const r=e.children;for(let o=0,a=r.length;o<a;o++)this.expandByObject(r[o],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Un),Un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ba),ol.subVectors(this.max,ba),so.subVectors(e.a,ba),lo.subVectors(e.b,ba),uo.subVectors(e.c,ba),Ui.subVectors(lo,so),Oi.subVectors(uo,lo),_r.subVectors(so,uo);let n=[0,-Ui.z,Ui.y,0,-Oi.z,Oi.y,0,-_r.z,_r.y,Ui.z,0,-Ui.x,Oi.z,0,-Oi.x,_r.z,0,-_r.x,-Ui.y,Ui.x,0,-Oi.y,Oi.x,0,-_r.y,_r.x,0];return!hf(n,so,lo,uo,ol)||(n=[1,0,0,0,1,0,0,0,1],!hf(n,so,lo,uo,ol))?!1:(al.crossVectors(Ui,Oi),n=[al.x,al.y,al.z],hf(n,so,lo,uo,ol))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ai=[new B,new B,new B,new B,new B,new B,new B,new B],Un=new B,rl=new Ls,so=new B,lo=new B,uo=new B,Ui=new B,Oi=new B,_r=new B,ba=new B,ol=new B,al=new B,yr=new B;function hf(t,e,n,i,r){for(let o=0,a=t.length-3;o<=a;o+=3){yr.fromArray(t,o);const s=r.x*Math.abs(yr.x)+r.y*Math.abs(yr.y)+r.z*Math.abs(yr.z),l=e.dot(yr),u=n.dot(yr),c=i.dot(yr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>s)return!1}return!0}const kR=new Ls,Pa=new B,pf=new B;class hc{constructor(e=new B,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):kR.setFromPoints(e).getCenter(i);let r=0;for(let o=0,a=e.length;o<a;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pa.subVectors(e,this.center);const n=Pa.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Pa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pa.copy(e.center).add(pf)),this.expandByPoint(Pa.copy(e.center).sub(pf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const si=new B,mf=new B,sl=new B,Fi=new B,gf=new B,ll=new B,vf=new B;class Xx{constructor(e=new B,n=new B(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,si)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=si.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(si.copy(this.origin).addScaledVector(this.direction,n),si.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){mf.copy(e).add(n).multiplyScalar(.5),sl.copy(n).sub(e).normalize(),Fi.copy(this.origin).sub(mf);const o=e.distanceTo(n)*.5,a=-this.direction.dot(sl),s=Fi.dot(this.direction),l=-Fi.dot(sl),u=Fi.lengthSq(),c=Math.abs(1-a*a);let f,h,p,g;if(c>0)if(f=a*l-s,h=a*s-l,g=o*c,f>=0)if(h>=-g)if(h<=g){const y=1/c;f*=y,h*=y,p=f*(f+a*h+2*s)+h*(a*f+h+2*l)+u}else h=o,f=Math.max(0,-(a*h+s)),p=-f*f+h*(h+2*l)+u;else h=-o,f=Math.max(0,-(a*h+s)),p=-f*f+h*(h+2*l)+u;else h<=-g?(f=Math.max(0,-(-a*o+s)),h=f>0?-o:Math.min(Math.max(-o,-l),o),p=-f*f+h*(h+2*l)+u):h<=g?(f=0,h=Math.min(Math.max(-o,-l),o),p=h*(h+2*l)+u):(f=Math.max(0,-(a*o+s)),h=f>0?o:Math.min(Math.max(-o,-l),o),p=-f*f+h*(h+2*l)+u);else h=a>0?-o:o,f=Math.max(0,-(a*h+s)),p=-f*f+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(mf).addScaledVector(sl,h),p}intersectSphere(e,n){si.subVectors(e.center,this.origin);const i=si.dot(this.direction),r=si.dot(si)-i*i,o=e.radius*e.radius;if(r>o)return null;const a=Math.sqrt(o-r),s=i-a,l=i+a;return l<0?null:s<0?this.at(l,n):this.at(s,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,a,s,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(o=(e.min.y-h.y)*c,a=(e.max.y-h.y)*c):(o=(e.max.y-h.y)*c,a=(e.min.y-h.y)*c),i>a||o>r||((o>i||isNaN(i))&&(i=o),(a<r||isNaN(r))&&(r=a),f>=0?(s=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(s=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||s>r)||((s>i||i!==i)&&(i=s),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,si)!==null}intersectTriangle(e,n,i,r,o){gf.subVectors(n,e),ll.subVectors(i,e),vf.crossVectors(gf,ll);let a=this.direction.dot(vf),s;if(a>0){if(r)return null;s=1}else if(a<0)s=-1,a=-a;else return null;Fi.subVectors(this.origin,e);const l=s*this.direction.dot(ll.crossVectors(Fi,ll));if(l<0)return null;const u=s*this.direction.dot(gf.cross(Fi));if(u<0||l+u>a)return null;const c=-s*Fi.dot(vf);return c<0?null:this.at(c/a,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rt{constructor(e,n,i,r,o,a,s,l,u,c,f,h,p,g,y,m){Rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,a,s,l,u,c,f,h,p,g,y,m)}set(e,n,i,r,o,a,s,l,u,c,f,h,p,g,y,m){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=o,d[5]=a,d[9]=s,d[13]=l,d[2]=u,d[6]=c,d[10]=f,d[14]=h,d[3]=p,d[7]=g,d[11]=y,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/co.setFromMatrixColumn(e,0).length(),o=1/co.setFromMatrixColumn(e,1).length(),a=1/co.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,a=Math.cos(i),s=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(o),f=Math.sin(o);if(e.order==="XYZ"){const h=a*c,p=a*f,g=s*c,y=s*f;n[0]=l*c,n[4]=-l*f,n[8]=u,n[1]=p+g*u,n[5]=h-y*u,n[9]=-s*l,n[2]=y-h*u,n[6]=g+p*u,n[10]=a*l}else if(e.order==="YXZ"){const h=l*c,p=l*f,g=u*c,y=u*f;n[0]=h+y*s,n[4]=g*s-p,n[8]=a*u,n[1]=a*f,n[5]=a*c,n[9]=-s,n[2]=p*s-g,n[6]=y+h*s,n[10]=a*l}else if(e.order==="ZXY"){const h=l*c,p=l*f,g=u*c,y=u*f;n[0]=h-y*s,n[4]=-a*f,n[8]=g+p*s,n[1]=p+g*s,n[5]=a*c,n[9]=y-h*s,n[2]=-a*u,n[6]=s,n[10]=a*l}else if(e.order==="ZYX"){const h=a*c,p=a*f,g=s*c,y=s*f;n[0]=l*c,n[4]=g*u-p,n[8]=h*u+y,n[1]=l*f,n[5]=y*u+h,n[9]=p*u-g,n[2]=-u,n[6]=s*l,n[10]=a*l}else if(e.order==="YZX"){const h=a*l,p=a*u,g=s*l,y=s*u;n[0]=l*c,n[4]=y-h*f,n[8]=g*f+p,n[1]=f,n[5]=a*c,n[9]=-s*c,n[2]=-u*c,n[6]=p*f+g,n[10]=h-y*f}else if(e.order==="XZY"){const h=a*l,p=a*u,g=s*l,y=s*u;n[0]=l*c,n[4]=-f,n[8]=u*c,n[1]=h*f+y,n[5]=a*c,n[9]=p*f-g,n[2]=g*f-p,n[6]=s*c,n[10]=y*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(BR,e,zR)}lookAt(e,n,i){const r=this.elements;return hn.subVectors(e,n),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),ki.crossVectors(i,hn),ki.lengthSq()===0&&(Math.abs(i.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),ki.crossVectors(i,hn)),ki.normalize(),ul.crossVectors(hn,ki),r[0]=ki.x,r[4]=ul.x,r[8]=hn.x,r[1]=ki.y,r[5]=ul.y,r[9]=hn.y,r[2]=ki.z,r[6]=ul.z,r[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,a=i[0],s=i[4],l=i[8],u=i[12],c=i[1],f=i[5],h=i[9],p=i[13],g=i[2],y=i[6],m=i[10],d=i[14],_=i[3],v=i[7],x=i[11],b=i[15],T=r[0],A=r[4],C=r[8],w=r[12],S=r[1],D=r[5],H=r[9],V=r[13],q=r[2],K=r[6],W=r[10],Z=r[14],N=r[3],X=r[7],$=r[11],oe=r[15];return o[0]=a*T+s*S+l*q+u*N,o[4]=a*A+s*D+l*K+u*X,o[8]=a*C+s*H+l*W+u*$,o[12]=a*w+s*V+l*Z+u*oe,o[1]=c*T+f*S+h*q+p*N,o[5]=c*A+f*D+h*K+p*X,o[9]=c*C+f*H+h*W+p*$,o[13]=c*w+f*V+h*Z+p*oe,o[2]=g*T+y*S+m*q+d*N,o[6]=g*A+y*D+m*K+d*X,o[10]=g*C+y*H+m*W+d*$,o[14]=g*w+y*V+m*Z+d*oe,o[3]=_*T+v*S+x*q+b*N,o[7]=_*A+v*D+x*K+b*X,o[11]=_*C+v*H+x*W+b*$,o[15]=_*w+v*V+x*Z+b*oe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],a=e[1],s=e[5],l=e[9],u=e[13],c=e[2],f=e[6],h=e[10],p=e[14],g=e[3],y=e[7],m=e[11],d=e[15];return g*(+o*l*f-r*u*f-o*s*h+i*u*h+r*s*p-i*l*p)+y*(+n*l*p-n*u*h+o*a*h-r*a*p+r*u*c-o*l*c)+m*(+n*u*f-n*s*p-o*a*f+i*a*p+o*s*c-i*u*c)+d*(-r*s*c-n*l*f+n*s*h+r*a*f-i*a*h+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],a=e[4],s=e[5],l=e[6],u=e[7],c=e[8],f=e[9],h=e[10],p=e[11],g=e[12],y=e[13],m=e[14],d=e[15],_=f*m*u-y*h*u+y*l*p-s*m*p-f*l*d+s*h*d,v=g*h*u-c*m*u-g*l*p+a*m*p+c*l*d-a*h*d,x=c*y*u-g*f*u+g*s*p-a*y*p-c*s*d+a*f*d,b=g*f*l-c*y*l-g*s*h+a*y*h+c*s*m-a*f*m,T=n*_+i*v+r*x+o*b;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=_*A,e[1]=(y*h*o-f*m*o-y*r*p+i*m*p+f*r*d-i*h*d)*A,e[2]=(s*m*o-y*l*o+y*r*u-i*m*u-s*r*d+i*l*d)*A,e[3]=(f*l*o-s*h*o-f*r*u+i*h*u+s*r*p-i*l*p)*A,e[4]=v*A,e[5]=(c*m*o-g*h*o+g*r*p-n*m*p-c*r*d+n*h*d)*A,e[6]=(g*l*o-a*m*o-g*r*u+n*m*u+a*r*d-n*l*d)*A,e[7]=(a*h*o-c*l*o+c*r*u-n*h*u-a*r*p+n*l*p)*A,e[8]=x*A,e[9]=(g*f*o-c*y*o-g*i*p+n*y*p+c*i*d-n*f*d)*A,e[10]=(a*y*o-g*s*o+g*i*u-n*y*u-a*i*d+n*s*d)*A,e[11]=(c*s*o-a*f*o-c*i*u+n*f*u+a*i*p-n*s*p)*A,e[12]=b*A,e[13]=(c*y*r-g*f*r+g*i*h-n*y*h-c*i*m+n*f*m)*A,e[14]=(g*s*r-a*y*r-g*i*l+n*y*l+a*i*m-n*s*m)*A,e[15]=(a*f*r-c*s*r+c*i*l-n*f*l-a*i*h+n*s*h)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,a=e.x,s=e.y,l=e.z,u=o*a,c=o*s;return this.set(u*a+i,u*s-r*l,u*l+r*s,0,u*s+r*l,c*s+i,c*l-r*a,0,u*l-r*s,c*l+r*a,o*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,a){return this.set(1,i,o,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,a=n._y,s=n._z,l=n._w,u=o+o,c=a+a,f=s+s,h=o*u,p=o*c,g=o*f,y=a*c,m=a*f,d=s*f,_=l*u,v=l*c,x=l*f,b=i.x,T=i.y,A=i.z;return r[0]=(1-(y+d))*b,r[1]=(p+x)*b,r[2]=(g-v)*b,r[3]=0,r[4]=(p-x)*T,r[5]=(1-(h+d))*T,r[6]=(m+_)*T,r[7]=0,r[8]=(g+v)*A,r[9]=(m-_)*A,r[10]=(1-(h+y))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let o=co.set(r[0],r[1],r[2]).length();const a=co.set(r[4],r[5],r[6]).length(),s=co.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],On.copy(this);const u=1/o,c=1/a,f=1/s;return On.elements[0]*=u,On.elements[1]*=u,On.elements[2]*=u,On.elements[4]*=c,On.elements[5]*=c,On.elements[6]*=c,On.elements[8]*=f,On.elements[9]*=f,On.elements[10]*=f,n.setFromRotationMatrix(On),i.x=o,i.y=a,i.z=s,this}makePerspective(e,n,i,r,o,a,s=_i){const l=this.elements,u=2*o/(n-e),c=2*o/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let p,g;if(s===_i)p=-(a+o)/(a-o),g=-2*a*o/(a-o);else if(s===Du)p=-a/(a-o),g=-a*o/(a-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,o,a,s=_i){const l=this.elements,u=1/(n-e),c=1/(i-r),f=1/(a-o),h=(n+e)*u,p=(i+r)*c;let g,y;if(s===_i)g=(a+o)*f,y=-2*f;else if(s===Du)g=o*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const co=new B,On=new Rt,BR=new B(0,0,0),zR=new B(1,1,1),ki=new B,ul=new B,hn=new B,fv=new Rt,dv=new Ds;class Ci{constructor(e=0,n=0,i=0,r=Ci.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],a=r[4],s=r[8],l=r[1],u=r[5],c=r[9],f=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(rn(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-rn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(s,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(rn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-rn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(rn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(s,p));break;case"XZY":this._z=Math.asin(-rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(s,o)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return fv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fv,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return dv.setFromEuler(this),this.setFromQuaternion(dv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ci.DEFAULT_ORDER="XYZ";class $x{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let VR=0;const hv=new B,fo=new Ds,li=new Rt,cl=new B,Da=new B,HR=new B,GR=new Ds,pv=new B(1,0,0),mv=new B(0,1,0),gv=new B(0,0,1),vv={type:"added"},WR={type:"removed"},ho={type:"childadded",child:null},_f={type:"childremoved",child:null};class Zt extends pa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:VR++}),this.uuid=Ps(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Zt.DEFAULT_UP.clone();const e=new B,n=new Ci,i=new Ds,r=new B(1,1,1);function o(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Rt},normalMatrix:{value:new We}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=Zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $x,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return fo.setFromAxisAngle(e,n),this.quaternion.multiply(fo),this}rotateOnWorldAxis(e,n){return fo.setFromAxisAngle(e,n),this.quaternion.premultiply(fo),this}rotateX(e){return this.rotateOnAxis(pv,e)}rotateY(e){return this.rotateOnAxis(mv,e)}rotateZ(e){return this.rotateOnAxis(gv,e)}translateOnAxis(e,n){return hv.copy(e).applyQuaternion(this.quaternion),this.position.add(hv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(pv,e)}translateY(e){return this.translateOnAxis(mv,e)}translateZ(e){return this.translateOnAxis(gv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?cl.copy(e):cl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Da.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(Da,cl,this.up):li.lookAt(cl,Da,this.up),this.quaternion.setFromRotationMatrix(li),r&&(li.extractRotation(r.matrixWorld),fo.setFromRotationMatrix(li),this.quaternion.premultiply(fo.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vv),ho.child=e,this.dispatchEvent(ho),ho.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(WR),_f.child=e,this.dispatchEvent(_f),_f.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),li.multiply(e.parent.matrixWorld)),e.applyMatrix4(li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vv),ho.child=e,this.dispatchEvent(ho),ho.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Da,e,HR),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Da,GR,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(s=>({boxInitialized:s.boxInitialized,boxMin:s.box.min.toArray(),boxMax:s.box.max.toArray(),sphereInitialized:s.sphereInitialized,sphereRadius:s.sphere.radius,sphereCenter:s.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];o(e.shapes,f)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,u=this.material.length;l<u;l++)s.push(o(e.materials,this.material[l]));r.material=s}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let s=0;s<this.children.length;s++)r.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];r.animations.push(o(e.animations,l))}}if(n){const s=a(e.geometries),l=a(e.materials),u=a(e.textures),c=a(e.images),f=a(e.shapes),h=a(e.skeletons),p=a(e.animations),g=a(e.nodes);s.length>0&&(i.geometries=s),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(s){const l=[];for(const u in s){const c=s[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Zt.DEFAULT_UP=new B(0,1,0);Zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fn=new B,ui=new B,yf=new B,ci=new B,po=new B,mo=new B,_v=new B,xf=new B,Sf=new B,Ef=new B;class ti{constructor(e=new B,n=new B,i=new B){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Fn.subVectors(e,n),r.cross(Fn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){Fn.subVectors(r,n),ui.subVectors(i,n),yf.subVectors(e,n);const a=Fn.dot(Fn),s=Fn.dot(ui),l=Fn.dot(yf),u=ui.dot(ui),c=ui.dot(yf),f=a*u-s*s;if(f===0)return o.set(0,0,0),null;const h=1/f,p=(u*l-s*c)*h,g=(a*c-s*l)*h;return o.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getInterpolation(e,n,i,r,o,a,s,l){return this.getBarycoord(e,n,i,r,ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,ci.x),l.addScaledVector(a,ci.y),l.addScaledVector(s,ci.z),l)}static isFrontFacing(e,n,i,r){return Fn.subVectors(i,n),ui.subVectors(e,n),Fn.cross(ui).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),Fn.cross(ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ti.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,o){return ti.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let a,s;po.subVectors(r,i),mo.subVectors(o,i),xf.subVectors(e,i);const l=po.dot(xf),u=mo.dot(xf);if(l<=0&&u<=0)return n.copy(i);Sf.subVectors(e,r);const c=po.dot(Sf),f=mo.dot(Sf);if(c>=0&&f<=c)return n.copy(r);const h=l*f-c*u;if(h<=0&&l>=0&&c<=0)return a=l/(l-c),n.copy(i).addScaledVector(po,a);Ef.subVectors(e,o);const p=po.dot(Ef),g=mo.dot(Ef);if(g>=0&&p<=g)return n.copy(o);const y=p*u-l*g;if(y<=0&&u>=0&&g<=0)return s=u/(u-g),n.copy(i).addScaledVector(mo,s);const m=c*g-p*f;if(m<=0&&f-c>=0&&p-g>=0)return _v.subVectors(o,r),s=(f-c)/(f-c+(p-g)),n.copy(r).addScaledVector(_v,s);const d=1/(m+y+h);return a=y*d,s=h*d,n.copy(i).addScaledVector(po,a).addScaledVector(mo,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Yx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bi={h:0,s:0,l:0},fl={h:0,s:0,l:0};function Mf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class nt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=tt.workingColorSpace){return this.r=e,this.g=n,this.b=i,tt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=tt.workingColorSpace){if(e=bR(e,1),n=rn(n,0,1),i=rn(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,a=2*i-o;this.r=Mf(a,o,e+1/3),this.g=Mf(a,o,e),this.b=Mf(a,o,e-1/3)}return tt.toWorkingColorSpace(this,r),this}setStyle(e,n=Qn){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const a=r[1],s=r[2];switch(a){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],a=o.length;if(a===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Qn){const i=Yx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xo(e.r),this.g=Xo(e.g),this.b=Xo(e.b),this}copyLinearToSRGB(e){return this.r=cf(e.r),this.g=cf(e.g),this.b=cf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qn){return tt.fromWorkingColorSpace(Wt.copy(this),e),Math.round(rn(Wt.r*255,0,255))*65536+Math.round(rn(Wt.g*255,0,255))*256+Math.round(rn(Wt.b*255,0,255))}getHexString(e=Qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=tt.workingColorSpace){tt.fromWorkingColorSpace(Wt.copy(this),n);const i=Wt.r,r=Wt.g,o=Wt.b,a=Math.max(i,r,o),s=Math.min(i,r,o);let l,u;const c=(s+a)/2;if(s===a)l=0,u=0;else{const f=a-s;switch(u=c<=.5?f/(a+s):f/(2-a-s),a){case i:l=(r-o)/f+(r<o?6:0);break;case r:l=(o-i)/f+2;break;case o:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=tt.workingColorSpace){return tt.fromWorkingColorSpace(Wt.copy(this),n),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=Qn){tt.fromWorkingColorSpace(Wt.copy(this),e);const n=Wt.r,i=Wt.g,r=Wt.b;return e!==Qn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Bi),this.setHSL(Bi.h+e,Bi.s+n,Bi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Bi),e.getHSL(fl);const i=lf(Bi.h,fl.h,n),r=lf(Bi.s,fl.s,n),o=lf(Bi.l,fl.l,n);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new nt;nt.NAMES=Yx;let jR=0;class Ns extends pa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jR++}),this.uuid=Ps(),this.name="",this.type="Material",this.blending=Wo,this.side=lr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=th,this.blendDst=nh,this.blendEquation=Rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=Cu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oo,this.stencilZFail=oo,this.stencilZPass=oo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Wo&&(i.blending=this.blending),this.side!==lr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==th&&(i.blendSrc=this.blendSrc),this.blendDst!==nh&&(i.blendDst=this.blendDst),this.blendEquation!==Rr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Cu&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==oo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==oo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==oo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const a=[];for(const s in o){const l=o[s];delete l.metadata,a.push(l)}return a}if(n){const o=r(e.textures),a=r(e.images);o.length>0&&(i.textures=o),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class qx extends Ns{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=bx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new B,dl=new Ze;class ri{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=ov,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Gx("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)dl.fromBufferAttribute(this,n),dl.applyMatrix3(e),this.setXY(n,dl.x,dl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix3(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix4(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyNormalMatrix(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.transformDirection(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ra(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=tn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ra(n,this.array)),n}setX(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ra(n,this.array)),n}setY(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ra(n,this.array)),n}setZ(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ra(n,this.array)),n}setW(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array),r=tn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array),r=tn(r,this.array),o=tn(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ov&&(e.usage=this.usage),e}}class Kx extends ri{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Zx extends ri{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class oi extends ri{constructor(e,n,i){super(new Float32Array(e),n,i)}}let XR=0;const En=new Rt,wf=new Zt,go=new B,pn=new Ls,La=new Ls,Nt=new B;class Pi extends pa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:XR++}),this.uuid=Ps(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hx(e)?Zx:Kx)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new We().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,n,i){return En.makeTranslation(e,n,i),this.applyMatrix4(En),this}scale(e,n,i){return En.makeScale(e,n,i),this.applyMatrix4(En),this}lookAt(e){return wf.lookAt(e),wf.updateMatrix(),this.applyMatrix4(wf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(go).negate(),this.translate(go.x,go.y,go.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new oi(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ls);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];pn.setFromBufferAttribute(o),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),n)for(let o=0,a=n.length;o<a;o++){const s=n[o];La.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(pn.min,La.min),pn.expandByPoint(Nt),Nt.addVectors(pn.max,La.max),pn.expandByPoint(Nt)):(pn.expandByPoint(La.min),pn.expandByPoint(La.max))}pn.getCenter(i);let r=0;for(let o=0,a=e.count;o<a;o++)Nt.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(Nt));if(n)for(let o=0,a=n.length;o<a;o++){const s=n[o],l=this.morphTargetsRelative;for(let u=0,c=s.count;u<c;u++)Nt.fromBufferAttribute(s,u),l&&(go.fromBufferAttribute(e,u),Nt.add(go)),r=Math.max(r,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,o=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ri(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),s=[],l=[];for(let C=0;C<i.count;C++)s[C]=new B,l[C]=new B;const u=new B,c=new B,f=new B,h=new Ze,p=new Ze,g=new Ze,y=new B,m=new B;function d(C,w,S){u.fromBufferAttribute(i,C),c.fromBufferAttribute(i,w),f.fromBufferAttribute(i,S),h.fromBufferAttribute(o,C),p.fromBufferAttribute(o,w),g.fromBufferAttribute(o,S),c.sub(u),f.sub(u),p.sub(h),g.sub(h);const D=1/(p.x*g.y-g.x*p.y);isFinite(D)&&(y.copy(c).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(D),m.copy(f).multiplyScalar(p.x).addScaledVector(c,-g.x).multiplyScalar(D),s[C].add(y),s[w].add(y),s[S].add(y),l[C].add(m),l[w].add(m),l[S].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let C=0,w=_.length;C<w;++C){const S=_[C],D=S.start,H=S.count;for(let V=D,q=D+H;V<q;V+=3)d(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const v=new B,x=new B,b=new B,T=new B;function A(C){b.fromBufferAttribute(r,C),T.copy(b);const w=s[C];v.copy(w),v.sub(b.multiplyScalar(b.dot(w))).normalize(),x.crossVectors(T,w);const D=x.dot(l[C])<0?-1:1;a.setXYZW(C,v.x,v.y,v.z,D)}for(let C=0,w=_.length;C<w;++C){const S=_[C],D=S.start,H=S.count;for(let V=D,q=D+H;V<q;V+=3)A(e.getX(V+0)),A(e.getX(V+1)),A(e.getX(V+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ri(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new B,o=new B,a=new B,s=new B,l=new B,u=new B,c=new B,f=new B;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),y=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,g),o.fromBufferAttribute(n,y),a.fromBufferAttribute(n,m),c.subVectors(a,o),f.subVectors(r,o),c.cross(f),s.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,m),s.add(c),l.add(c),u.add(c),i.setXYZ(g,s.x,s.y,s.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),o.fromBufferAttribute(n,h+1),a.fromBufferAttribute(n,h+2),c.subVectors(a,o),f.subVectors(r,o),c.cross(f),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Nt.fromBufferAttribute(e,n),Nt.normalize(),e.setXYZ(n,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(s,l){const u=s.array,c=s.itemSize,f=s.normalized,h=new u.constructor(l.length*c);let p=0,g=0;for(let y=0,m=l.length;y<m;y++){s.isInterleavedBufferAttribute?p=l[y]*s.data.stride+s.offset:p=l[y]*c;for(let d=0;d<c;d++)h[g++]=u[p++]}return new ri(h,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Pi,i=this.index.array,r=this.attributes;for(const s in r){const l=r[s],u=e(l,i);n.setAttribute(s,u)}const o=this.morphAttributes;for(const s in o){const l=[],u=o[s];for(let c=0,f=u.length;c<f;c++){const h=u[c],p=e(h,i);l.push(p)}n.morphAttributes[s]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let s=0,l=a.length;s<l;s++){const u=a[s];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,h=u.length;f<h;f++){const p=u[f];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const o=e.morphAttributes;for(const u in o){const c=[],f=o[u];for(let h=0,p=f.length;h<p;h++)c.push(f[h].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,c=a.length;u<c;u++){const f=a[u];this.addGroup(f.start,f.count,f.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yv=new Rt,xr=new Xx,hl=new hc,xv=new B,vo=new B,_o=new B,yo=new B,Tf=new B,pl=new B,ml=new Ze,gl=new Ze,vl=new Ze,Sv=new B,Ev=new B,Mv=new B,_l=new B,yl=new B;class yi extends Zt{constructor(e=new Pi,n=new qx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=r.length;o<a;o++){const s=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const s=this.morphTargetInfluences;if(o&&s){pl.set(0,0,0);for(let l=0,u=o.length;l<u;l++){const c=s[l],f=o[l];c!==0&&(Tf.fromBufferAttribute(f,e),a?pl.addScaledVector(Tf,c):pl.addScaledVector(Tf.sub(n),c))}n.add(pl)}return n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),hl.copy(i.boundingSphere),hl.applyMatrix4(o),xr.copy(e.ray).recast(e.near),!(hl.containsPoint(xr.origin)===!1&&(xr.intersectSphere(hl,xv)===null||xr.origin.distanceToSquared(xv)>(e.far-e.near)**2))&&(yv.copy(o).invert(),xr.copy(e.ray).applyMatrix4(yv),!(i.boundingBox!==null&&xr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,xr)))}_computeIntersections(e,n,i){let r;const o=this.geometry,a=this.material,s=o.index,l=o.attributes.position,u=o.attributes.uv,c=o.attributes.uv1,f=o.attributes.normal,h=o.groups,p=o.drawRange;if(s!==null)if(Array.isArray(a))for(let g=0,y=h.length;g<y;g++){const m=h[g],d=a[m.materialIndex],_=Math.max(m.start,p.start),v=Math.min(s.count,Math.min(m.start+m.count,p.start+p.count));for(let x=_,b=v;x<b;x+=3){const T=s.getX(x),A=s.getX(x+1),C=s.getX(x+2);r=xl(this,d,e,i,u,c,f,T,A,C),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),y=Math.min(s.count,p.start+p.count);for(let m=g,d=y;m<d;m+=3){const _=s.getX(m),v=s.getX(m+1),x=s.getX(m+2);r=xl(this,a,e,i,u,c,f,_,v,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=h.length;g<y;g++){const m=h[g],d=a[m.materialIndex],_=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=_,b=v;x<b;x+=3){const T=x,A=x+1,C=x+2;r=xl(this,d,e,i,u,c,f,T,A,C),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=g,d=y;m<d;m+=3){const _=m,v=m+1,x=m+2;r=xl(this,a,e,i,u,c,f,_,v,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function $R(t,e,n,i,r,o,a,s){let l;if(e.side===cn?l=i.intersectTriangle(a,o,r,!0,s):l=i.intersectTriangle(r,o,a,e.side===lr,s),l===null)return null;yl.copy(s),yl.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(yl);return u<n.near||u>n.far?null:{distance:u,point:yl.clone(),object:t}}function xl(t,e,n,i,r,o,a,s,l,u){t.getVertexPosition(s,vo),t.getVertexPosition(l,_o),t.getVertexPosition(u,yo);const c=$R(t,e,n,i,vo,_o,yo,_l);if(c){r&&(ml.fromBufferAttribute(r,s),gl.fromBufferAttribute(r,l),vl.fromBufferAttribute(r,u),c.uv=ti.getInterpolation(_l,vo,_o,yo,ml,gl,vl,new Ze)),o&&(ml.fromBufferAttribute(o,s),gl.fromBufferAttribute(o,l),vl.fromBufferAttribute(o,u),c.uv1=ti.getInterpolation(_l,vo,_o,yo,ml,gl,vl,new Ze)),a&&(Sv.fromBufferAttribute(a,s),Ev.fromBufferAttribute(a,l),Mv.fromBufferAttribute(a,u),c.normal=ti.getInterpolation(_l,vo,_o,yo,Sv,Ev,Mv,new B),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a:s,b:l,c:u,normal:new B,materialIndex:0};ti.getNormal(vo,_o,yo,f.normal),c.face=f}return c}class Is extends Pi{constructor(e=1,n=1,i=1,r=1,o=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:a};const s=this;r=Math.floor(r),o=Math.floor(o),a=Math.floor(a);const l=[],u=[],c=[],f=[];let h=0,p=0;g("z","y","x",-1,-1,i,n,e,a,o,0),g("z","y","x",1,-1,i,n,-e,a,o,1),g("x","z","y",1,1,e,i,n,r,a,2),g("x","z","y",1,-1,e,i,-n,r,a,3),g("x","y","z",1,-1,e,n,i,r,o,4),g("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new oi(u,3)),this.setAttribute("normal",new oi(c,3)),this.setAttribute("uv",new oi(f,2));function g(y,m,d,_,v,x,b,T,A,C,w){const S=x/A,D=b/C,H=x/2,V=b/2,q=T/2,K=A+1,W=C+1;let Z=0,N=0;const X=new B;for(let $=0;$<W;$++){const oe=$*D-V;for(let Ee=0;Ee<K;Ee++){const je=Ee*S-H;X[y]=je*_,X[m]=oe*v,X[d]=q,u.push(X.x,X.y,X.z),X[y]=0,X[m]=0,X[d]=T>0?1:-1,c.push(X.x,X.y,X.z),f.push(Ee/A),f.push(1-$/C),Z+=1}}for(let $=0;$<C;$++)for(let oe=0;oe<A;oe++){const Ee=h+oe+K*$,je=h+oe+K*($+1),j=h+(oe+1)+K*($+1),ne=h+(oe+1)+K*$;l.push(Ee,je,ne),l.push(je,j,ne),N+=6}s.addGroup(p,N,w),p+=N,h+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Is(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function oa(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function $t(t){const e={};for(let n=0;n<t.length;n++){const i=oa(t[n]);for(const r in i)e[r]=i[r]}return e}function YR(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Qx(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const qR={clone:oa,merge:$t};var KR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ZR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ur extends Ns{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=KR,this.fragmentShader=ZR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=oa(e.uniforms),this.uniformsGroups=YR(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Jx extends Zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=_i}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const zi=new B,wv=new Ze,Tv=new Ze;class Tn extends Jx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Nh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(sf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Nh*2*Math.atan(Math.tan(sf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zi.x,zi.y).multiplyScalar(-e/zi.z),zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(zi.x,zi.y).multiplyScalar(-e/zi.z)}getViewSize(e,n){return this.getViewBounds(e,wv,Tv),n.subVectors(Tv,wv)}setViewOffset(e,n,i,r,o,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(sf*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;o+=a.offsetX*r/l,n-=a.offsetY*i/u,r*=a.width/l,i*=a.height/u}const s=this.filmOffset;s!==0&&(o+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const xo=-90,So=1;class QR extends Zt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Tn(xo,So,e,n);r.layers=this.layers,this.add(r);const o=new Tn(xo,So,e,n);o.layers=this.layers,this.add(o);const a=new Tn(xo,So,e,n);a.layers=this.layers,this.add(a);const s=new Tn(xo,So,e,n);s.layers=this.layers,this.add(s);const l=new Tn(xo,So,e,n);l.layers=this.layers,this.add(l);const u=new Tn(xo,So,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,o,a,s,l]=n;for(const u of n)this.remove(u);if(e===_i)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Du)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,a,s,l,u,c]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,o),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,s),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,c),e.setRenderTarget(f,h,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class eS extends Kt{constructor(e,n,i,r,o,a,s,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:ta,super(e,n,i,r,o,a,s,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class JR extends Xr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new eS(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Vn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Is(5,5,5),o=new ur({name:"CubemapFromEquirect",uniforms:oa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:rr});o.uniforms.tEquirect.value=n;const a=new yi(r,o),s=n.minFilter;return n.minFilter===Ir&&(n.minFilter=Vn),new QR(1,10,this).update(e,a),n.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const o=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(o)}}const Af=new B,e2=new B,t2=new We;class Ar{constructor(e=new B(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Af.subVectors(i,n).cross(e2.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Af),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||t2.getNormalMatrix(e),r=this.coplanarPoint(Af).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Sr=new hc,Sl=new B;class tS{constructor(e=new Ar,n=new Ar,i=new Ar,r=new Ar,o=new Ar,a=new Ar){this.planes=[e,n,i,r,o,a]}set(e,n,i,r,o,a){const s=this.planes;return s[0].copy(e),s[1].copy(n),s[2].copy(i),s[3].copy(r),s[4].copy(o),s[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=_i){const i=this.planes,r=e.elements,o=r[0],a=r[1],s=r[2],l=r[3],u=r[4],c=r[5],f=r[6],h=r[7],p=r[8],g=r[9],y=r[10],m=r[11],d=r[12],_=r[13],v=r[14],x=r[15];if(i[0].setComponents(l-o,h-u,m-p,x-d).normalize(),i[1].setComponents(l+o,h+u,m+p,x+d).normalize(),i[2].setComponents(l+a,h+c,m+g,x+_).normalize(),i[3].setComponents(l-a,h-c,m-g,x-_).normalize(),i[4].setComponents(l-s,h-f,m-y,x-v).normalize(),n===_i)i[5].setComponents(l+s,h+f,m+y,x+v).normalize();else if(n===Du)i[5].setComponents(s,f,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Sr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Sr)}intersectsSprite(e){return Sr.center.set(0,0,0),Sr.radius=.7071067811865476,Sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Sr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Sl.x=r.normal.x>0?e.max.x:e.min.x,Sl.y=r.normal.y>0?e.max.y:e.min.y,Sl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Sl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function nS(){let t=null,e=!1,n=null,i=null;function r(o,a){n(o,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function n2(t){const e=new WeakMap;function n(s,l){const u=s.array,c=s.usage,f=u.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,u,c),s.onUploadCallback();let p;if(u instanceof Float32Array)p=t.FLOAT;else if(u instanceof Uint16Array)s.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=t.SHORT;else if(u instanceof Uint32Array)p=t.UNSIGNED_INT;else if(u instanceof Int32Array)p=t.INT;else if(u instanceof Int8Array)p=t.BYTE;else if(u instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:s.version,size:f}}function i(s,l,u){const c=l.array,f=l._updateRange,h=l.updateRanges;if(t.bindBuffer(u,s),f.count===-1&&h.length===0&&t.bufferSubData(u,0,c),h.length!==0){for(let p=0,g=h.length;p<g;p++){const y=h[p];t.bufferSubData(u,y.start*c.BYTES_PER_ELEMENT,c,y.start,y.count)}l.clearUpdateRanges()}f.count!==-1&&(t.bufferSubData(u,f.offset*c.BYTES_PER_ELEMENT,c,f.offset,f.count),f.count=-1),l.onUploadCallback()}function r(s){return s.isInterleavedBufferAttribute&&(s=s.data),e.get(s)}function o(s){s.isInterleavedBufferAttribute&&(s=s.data);const l=e.get(s);l&&(t.deleteBuffer(l.buffer),e.delete(s))}function a(s,l){if(s.isGLBufferAttribute){const c=e.get(s);(!c||c.version<s.version)&&e.set(s,{buffer:s.buffer,type:s.type,bytesPerElement:s.elementSize,version:s.version});return}s.isInterleavedBufferAttribute&&(s=s.data);const u=e.get(s);if(u===void 0)e.set(s,n(s,l));else if(u.version<s.version){if(u.size!==s.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,s,l),u.version=s.version}}return{get:r,remove:o,update:a}}class pc extends Pi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,a=n/2,s=Math.floor(i),l=Math.floor(r),u=s+1,c=l+1,f=e/s,h=n/l,p=[],g=[],y=[],m=[];for(let d=0;d<c;d++){const _=d*h-a;for(let v=0;v<u;v++){const x=v*f-o;g.push(x,-_,0),y.push(0,0,1),m.push(v/s),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let _=0;_<s;_++){const v=_+u*d,x=_+u*(d+1),b=_+1+u*(d+1),T=_+1+u*d;p.push(v,x,T),p.push(x,b,T)}this.setIndex(p),this.setAttribute("position",new oi(g,3)),this.setAttribute("normal",new oi(y,3)),this.setAttribute("uv",new oi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pc(e.width,e.height,e.widthSegments,e.heightSegments)}}var i2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,r2=`#ifdef USE_ALPHAHASH
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
#endif`,o2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,a2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,s2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,l2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,u2=`#ifdef USE_AOMAP
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
#endif`,c2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,f2=`#ifdef USE_BATCHING
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
#endif`,d2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,h2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,p2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,m2=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,g2=`#ifdef USE_IRIDESCENCE
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
#endif`,v2=`#ifdef USE_BUMPMAP
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
#endif`,_2=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,y2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,x2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,S2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,E2=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,M2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,w2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,T2=`#if defined( USE_COLOR_ALPHA )
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
#endif`,A2=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,C2=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,R2=`vec3 transformedNormal = objectNormal;
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
#endif`,b2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,P2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,D2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,L2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,N2="gl_FragColor = linearToOutputTexel( gl_FragColor );",I2=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,U2=`#ifdef USE_ENVMAP
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
#endif`,O2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,F2=`#ifdef USE_ENVMAP
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
#endif`,k2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,B2=`#ifdef USE_ENVMAP
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
#endif`,z2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,V2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,H2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,G2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,W2=`#ifdef USE_GRADIENTMAP
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
}`,j2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,X2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Y2=`uniform bool receiveShadow;
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
#endif`,q2=`#ifdef USE_ENVMAP
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
#endif`,K2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Z2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Q2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,J2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,eb=`PhysicalMaterial material;
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
#endif`,tb=`struct PhysicalMaterial {
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
}`,nb=`
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
#endif`,ib=`#if defined( RE_IndirectDiffuse )
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
#endif`,rb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ob=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ab=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ub=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,db=`#if defined( USE_POINTS_UV )
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
#endif`,hb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_b=`#ifdef USE_MORPHTARGETS
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
#endif`,yb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Sb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Eb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tb=`#ifdef USE_NORMALMAP
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
#endif`,Ab=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Db=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,Lb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ib=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ub=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ob=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
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
#endif`,Bb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Vb=`float getShadowMask() {
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
}`,Hb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gb=`#ifdef USE_SKINNING
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
#endif`,Wb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jb=`#ifdef USE_SKINNING
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
#endif`,Xb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$b=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qb=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kb=`#ifdef USE_TRANSMISSION
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
#endif`,Zb=`#ifdef USE_TRANSMISSION
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
#endif`,Qb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tP=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nP=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,iP=`uniform sampler2D t2D;
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
}`,rP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oP=`#ifdef ENVMAP_TYPE_CUBE
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
}`,aP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sP=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lP=`#include <common>
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
}`,uP=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,cP=`#define DISTANCE
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
}`,fP=`#define DISTANCE
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
}`,dP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hP=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pP=`uniform float scale;
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
}`,mP=`uniform vec3 diffuse;
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
}`,gP=`#include <common>
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
}`,vP=`uniform vec3 diffuse;
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
}`,_P=`#define LAMBERT
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
}`,yP=`#define LAMBERT
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
}`,xP=`#define MATCAP
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
}`,SP=`#define MATCAP
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
}`,EP=`#define NORMAL
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
}`,MP=`#define NORMAL
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
}`,wP=`#define PHONG
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
}`,TP=`#define PHONG
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
}`,AP=`#define STANDARD
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
}`,CP=`#define STANDARD
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
}`,RP=`#define TOON
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
}`,bP=`#define TOON
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
}`,PP=`uniform float size;
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
}`,DP=`uniform vec3 diffuse;
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
}`,LP=`#include <common>
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
}`,NP=`uniform vec3 color;
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
}`,IP=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,UP=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:i2,alphahash_pars_fragment:r2,alphamap_fragment:o2,alphamap_pars_fragment:a2,alphatest_fragment:s2,alphatest_pars_fragment:l2,aomap_fragment:u2,aomap_pars_fragment:c2,batching_pars_vertex:f2,batching_vertex:d2,begin_vertex:h2,beginnormal_vertex:p2,bsdfs:m2,iridescence_fragment:g2,bumpmap_pars_fragment:v2,clipping_planes_fragment:_2,clipping_planes_pars_fragment:y2,clipping_planes_pars_vertex:x2,clipping_planes_vertex:S2,color_fragment:E2,color_pars_fragment:M2,color_pars_vertex:w2,color_vertex:T2,common:A2,cube_uv_reflection_fragment:C2,defaultnormal_vertex:R2,displacementmap_pars_vertex:b2,displacementmap_vertex:P2,emissivemap_fragment:D2,emissivemap_pars_fragment:L2,colorspace_fragment:N2,colorspace_pars_fragment:I2,envmap_fragment:U2,envmap_common_pars_fragment:O2,envmap_pars_fragment:F2,envmap_pars_vertex:k2,envmap_physical_pars_fragment:q2,envmap_vertex:B2,fog_vertex:z2,fog_pars_vertex:V2,fog_fragment:H2,fog_pars_fragment:G2,gradientmap_pars_fragment:W2,lightmap_pars_fragment:j2,lights_lambert_fragment:X2,lights_lambert_pars_fragment:$2,lights_pars_begin:Y2,lights_toon_fragment:K2,lights_toon_pars_fragment:Z2,lights_phong_fragment:Q2,lights_phong_pars_fragment:J2,lights_physical_fragment:eb,lights_physical_pars_fragment:tb,lights_fragment_begin:nb,lights_fragment_maps:ib,lights_fragment_end:rb,logdepthbuf_fragment:ob,logdepthbuf_pars_fragment:ab,logdepthbuf_pars_vertex:sb,logdepthbuf_vertex:lb,map_fragment:ub,map_pars_fragment:cb,map_particle_fragment:fb,map_particle_pars_fragment:db,metalnessmap_fragment:hb,metalnessmap_pars_fragment:pb,morphinstance_vertex:mb,morphcolor_vertex:gb,morphnormal_vertex:vb,morphtarget_pars_vertex:_b,morphtarget_vertex:yb,normal_fragment_begin:xb,normal_fragment_maps:Sb,normal_pars_fragment:Eb,normal_pars_vertex:Mb,normal_vertex:wb,normalmap_pars_fragment:Tb,clearcoat_normal_fragment_begin:Ab,clearcoat_normal_fragment_maps:Cb,clearcoat_pars_fragment:Rb,iridescence_pars_fragment:bb,opaque_fragment:Pb,packing:Db,premultiplied_alpha_fragment:Lb,project_vertex:Nb,dithering_fragment:Ib,dithering_pars_fragment:Ub,roughnessmap_fragment:Ob,roughnessmap_pars_fragment:Fb,shadowmap_pars_fragment:kb,shadowmap_pars_vertex:Bb,shadowmap_vertex:zb,shadowmask_pars_fragment:Vb,skinbase_vertex:Hb,skinning_pars_vertex:Gb,skinning_vertex:Wb,skinnormal_vertex:jb,specularmap_fragment:Xb,specularmap_pars_fragment:$b,tonemapping_fragment:Yb,tonemapping_pars_fragment:qb,transmission_fragment:Kb,transmission_pars_fragment:Zb,uv_pars_fragment:Qb,uv_pars_vertex:Jb,uv_vertex:eP,worldpos_vertex:tP,background_vert:nP,background_frag:iP,backgroundCube_vert:rP,backgroundCube_frag:oP,cube_vert:aP,cube_frag:sP,depth_vert:lP,depth_frag:uP,distanceRGBA_vert:cP,distanceRGBA_frag:fP,equirect_vert:dP,equirect_frag:hP,linedashed_vert:pP,linedashed_frag:mP,meshbasic_vert:gP,meshbasic_frag:vP,meshlambert_vert:_P,meshlambert_frag:yP,meshmatcap_vert:xP,meshmatcap_frag:SP,meshnormal_vert:EP,meshnormal_frag:MP,meshphong_vert:wP,meshphong_frag:TP,meshphysical_vert:AP,meshphysical_frag:CP,meshtoon_vert:RP,meshtoon_frag:bP,points_vert:PP,points_frag:DP,shadow_vert:LP,shadow_frag:NP,sprite_vert:IP,sprite_frag:UP},fe={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Jn={basic:{uniforms:$t([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:$t([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new nt(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:$t([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:$t([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:$t([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new nt(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:$t([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:$t([fe.points,fe.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:$t([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:$t([fe.common,fe.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:$t([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:$t([fe.sprite,fe.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:$t([fe.common,fe.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:$t([fe.lights,fe.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};Jn.physical={uniforms:$t([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const El={r:0,b:0,g:0},Er=new Ci,OP=new Rt;function FP(t,e,n,i,r,o,a){const s=new nt(0);let l=o===!0?0:1,u,c,f=null,h=0,p=null;function g(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?n:e).get(v)),v}function y(_){let v=!1;const x=g(_);x===null?d(s,l):x&&x.isColor&&(d(x,1),v=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(_,v){const x=g(v);x&&(x.isCubeTexture||x.mapping===fc)?(c===void 0&&(c=new yi(new Is(1,1,1),new ur({name:"BackgroundCubeMaterial",uniforms:oa(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),Er.copy(v.backgroundRotation),Er.x*=-1,Er.y*=-1,Er.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Er.y*=-1,Er.z*=-1),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(OP.makeRotationFromEuler(Er)),c.material.toneMapped=tt.getTransfer(x.colorSpace)!==ct,(f!==x||h!==x.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=x,h=x.version,p=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new yi(new pc(2,2),new ur({name:"BackgroundMaterial",uniforms:oa(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:lr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=x,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.toneMapped=tt.getTransfer(x.colorSpace)!==ct,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||h!==x.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=x,h=x.version,p=t.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null))}function d(_,v){_.getRGB(El,Qx(t)),i.buffers.color.setClear(El.r,El.g,El.b,v,a)}return{getClearColor:function(){return s},setClearColor:function(_,v=1){s.set(_),l=v,d(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,d(s,l)},render:y,addToRenderList:m}}function kP(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let o=r,a=!1;function s(S,D,H,V,q){let K=!1;const W=f(V,H,D);o!==W&&(o=W,u(o.object)),K=p(S,V,H,q),K&&g(S,V,H,q),q!==null&&e.update(q,t.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,x(S,D,H,V),q!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return t.createVertexArray()}function u(S){return t.bindVertexArray(S)}function c(S){return t.deleteVertexArray(S)}function f(S,D,H){const V=H.wireframe===!0;let q=i[S.id];q===void 0&&(q={},i[S.id]=q);let K=q[D.id];K===void 0&&(K={},q[D.id]=K);let W=K[V];return W===void 0&&(W=h(l()),K[V]=W),W}function h(S){const D=[],H=[],V=[];for(let q=0;q<n;q++)D[q]=0,H[q]=0,V[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:H,attributeDivisors:V,object:S,attributes:{},index:null}}function p(S,D,H,V){const q=o.attributes,K=D.attributes;let W=0;const Z=H.getAttributes();for(const N in Z)if(Z[N].location>=0){const $=q[N];let oe=K[N];if(oe===void 0&&(N==="instanceMatrix"&&S.instanceMatrix&&(oe=S.instanceMatrix),N==="instanceColor"&&S.instanceColor&&(oe=S.instanceColor)),$===void 0||$.attribute!==oe||oe&&$.data!==oe.data)return!0;W++}return o.attributesNum!==W||o.index!==V}function g(S,D,H,V){const q={},K=D.attributes;let W=0;const Z=H.getAttributes();for(const N in Z)if(Z[N].location>=0){let $=K[N];$===void 0&&(N==="instanceMatrix"&&S.instanceMatrix&&($=S.instanceMatrix),N==="instanceColor"&&S.instanceColor&&($=S.instanceColor));const oe={};oe.attribute=$,$&&$.data&&(oe.data=$.data),q[N]=oe,W++}o.attributes=q,o.attributesNum=W,o.index=V}function y(){const S=o.newAttributes;for(let D=0,H=S.length;D<H;D++)S[D]=0}function m(S){d(S,0)}function d(S,D){const H=o.newAttributes,V=o.enabledAttributes,q=o.attributeDivisors;H[S]=1,V[S]===0&&(t.enableVertexAttribArray(S),V[S]=1),q[S]!==D&&(t.vertexAttribDivisor(S,D),q[S]=D)}function _(){const S=o.newAttributes,D=o.enabledAttributes;for(let H=0,V=D.length;H<V;H++)D[H]!==S[H]&&(t.disableVertexAttribArray(H),D[H]=0)}function v(S,D,H,V,q,K,W){W===!0?t.vertexAttribIPointer(S,D,H,q,K):t.vertexAttribPointer(S,D,H,V,q,K)}function x(S,D,H,V){y();const q=V.attributes,K=H.getAttributes(),W=D.defaultAttributeValues;for(const Z in K){const N=K[Z];if(N.location>=0){let X=q[Z];if(X===void 0&&(Z==="instanceMatrix"&&S.instanceMatrix&&(X=S.instanceMatrix),Z==="instanceColor"&&S.instanceColor&&(X=S.instanceColor)),X!==void 0){const $=X.normalized,oe=X.itemSize,Ee=e.get(X);if(Ee===void 0)continue;const je=Ee.buffer,j=Ee.type,ne=Ee.bytesPerElement,de=j===t.INT||j===t.UNSIGNED_INT||X.gpuType===Kp;if(X.isInterleavedBufferAttribute){const ce=X.data,Pe=ce.stride,De=X.offset;if(ce.isInstancedInterleavedBuffer){for(let He=0;He<N.locationSize;He++)d(N.location+He,ce.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let He=0;He<N.locationSize;He++)m(N.location+He);t.bindBuffer(t.ARRAY_BUFFER,je);for(let He=0;He<N.locationSize;He++)v(N.location+He,oe/N.locationSize,j,$,Pe*ne,(De+oe/N.locationSize*He)*ne,de)}else{if(X.isInstancedBufferAttribute){for(let ce=0;ce<N.locationSize;ce++)d(N.location+ce,X.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let ce=0;ce<N.locationSize;ce++)m(N.location+ce);t.bindBuffer(t.ARRAY_BUFFER,je);for(let ce=0;ce<N.locationSize;ce++)v(N.location+ce,oe/N.locationSize,j,$,oe*ne,oe/N.locationSize*ce*ne,de)}}else if(W!==void 0){const $=W[Z];if($!==void 0)switch($.length){case 2:t.vertexAttrib2fv(N.location,$);break;case 3:t.vertexAttrib3fv(N.location,$);break;case 4:t.vertexAttrib4fv(N.location,$);break;default:t.vertexAttrib1fv(N.location,$)}}}}_()}function b(){C();for(const S in i){const D=i[S];for(const H in D){const V=D[H];for(const q in V)c(V[q].object),delete V[q];delete D[H]}delete i[S]}}function T(S){if(i[S.id]===void 0)return;const D=i[S.id];for(const H in D){const V=D[H];for(const q in V)c(V[q].object),delete V[q];delete D[H]}delete i[S.id]}function A(S){for(const D in i){const H=i[D];if(H[S.id]===void 0)continue;const V=H[S.id];for(const q in V)c(V[q].object),delete V[q];delete H[S.id]}}function C(){w(),a=!0,o!==r&&(o=r,u(o.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:s,reset:C,resetDefaultState:w,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:m,disableUnusedAttributes:_}}function BP(t,e,n){let i;function r(u){i=u}function o(u,c){t.drawArrays(i,u,c),n.update(c,i,1)}function a(u,c,f){f!==0&&(t.drawArraysInstanced(i,u,c,f),n.update(c,i,f))}function s(u,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,f);let p=0;for(let g=0;g<f;g++)p+=c[g];n.update(p,i,1)}function l(u,c,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<u.length;g++)a(u[g],c[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,c,0,h,0,f);let g=0;for(let y=0;y<f;y++)g+=c[y];for(let y=0;y<h.length;y++)n.update(g,i,h[y])}}this.setMode=r,this.render=o,this.renderInstances=a,this.renderMultiDraw=s,this.renderMultiDrawInstances=l}function zP(t,e,n,i){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(T){return!(T!==Hn&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(T){const A=T===bs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Ai&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==vi&&!A)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const f=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),y=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),d=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),x=p>0,b=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:s,precision:u,logarithmicDepthBuffer:f,maxTextures:h,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:y,maxAttributes:m,maxVertexUniforms:d,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:x,maxSamples:b}}function VP(t){const e=this;let n=null,i=0,r=!1,o=!1;const a=new Ar,s=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){o=!0,c(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,h){n=c(f,h,0)},this.setState=function(f,h,p){const g=f.clippingPlanes,y=f.clipIntersection,m=f.clipShadows,d=t.get(f);if(!r||g===null||g.length===0||o&&!m)o?c(null):u();else{const _=o?0:i,v=_*4;let x=d.clippingState||null;l.value=x,x=c(g,h,v,p);for(let b=0;b!==v;++b)x[b]=n[b];d.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,h,p,g){const y=f!==null?f.length:0;let m=null;if(y!==0){if(m=l.value,g!==!0||m===null){const d=p+y*4,_=h.matrixWorldInverse;s.getNormalMatrix(_),(m===null||m.length<d)&&(m=new Float32Array(d));for(let v=0,x=p;v!==y;++v,x+=4)a.copy(f[v]).applyMatrix4(_,s),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function HP(t){let e=new WeakMap;function n(a,s){return s===ih?a.mapping=ta:s===rh&&(a.mapping=na),a}function i(a){if(a&&a.isTexture){const s=a.mapping;if(s===ih||s===rh)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const u=new JR(l.height);return u.fromEquirectangularTexture(t,a),e.set(a,u),a.addEventListener("dispose",r),n(u.texture,a.mapping)}else return null}}return a}function r(a){const s=a.target;s.removeEventListener("dispose",r);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class GP extends Jx{constructor(e=-1,n=1,i=1,r=-1,o=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,a=i+e,s=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=u*this.view.offsetX,a=o+u*this.view.width,s-=c*this.view.offsetY,l=s-c*this.view.height}this.projectionMatrix.makeOrthographic(o,a,s,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Fo=4,Av=[.125,.215,.35,.446,.526,.582],br=20,Cf=new GP,Cv=new nt;let Rf=null,bf=0,Pf=0,Df=!1;const Cr=(1+Math.sqrt(5))/2,Eo=1/Cr,Rv=[new B(-Cr,Eo,0),new B(Cr,Eo,0),new B(-Eo,0,Cr),new B(Eo,0,Cr),new B(0,Cr,-Eo),new B(0,Cr,Eo),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)];class bv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Rf=this._renderer.getRenderTarget(),bf=this._renderer.getActiveCubeFace(),Pf=this._renderer.getActiveMipmapLevel(),Df=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Rf,bf,Pf),this._renderer.xr.enabled=Df,e.scissorTest=!1,Ml(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ta||e.mapping===na?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Rf=this._renderer.getRenderTarget(),bf=this._renderer.getActiveCubeFace(),Pf=this._renderer.getActiveMipmapLevel(),Df=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:bs,format:Hn,colorSpace:mr,depthBuffer:!1},r=Pv(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pv(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=WP(o)),this._blurMaterial=jP(o,e,n)}return r}_compileMaterial(e){const n=new yi(this._lodPlanes[0],e);this._renderer.compile(n,Cf)}_sceneToCubeUV(e,n,i,r){const s=new Tn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,h=c.toneMapping;c.getClearColor(Cv),c.toneMapping=or,c.autoClear=!1;const p=new qx({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),g=new yi(new Is,p);let y=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,y=!0):(p.color.copy(Cv),y=!0);for(let d=0;d<6;d++){const _=d%3;_===0?(s.up.set(0,l[d],0),s.lookAt(u[d],0,0)):_===1?(s.up.set(0,0,l[d]),s.lookAt(0,u[d],0)):(s.up.set(0,l[d],0),s.lookAt(0,0,u[d]));const v=this._cubeSize;Ml(r,_*v,d>2?v:0,v,v),c.setRenderTarget(r),y&&c.render(g,s),c.render(e,s)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=h,c.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ta||e.mapping===na;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dv());const o=r?this._cubemapMaterial:this._equirectMaterial,a=new yi(this._lodPlanes[0],o),s=o.uniforms;s.envMap.value=e;const l=this._cubeSize;Ml(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Cf)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let o=1;o<r;o++){const a=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),s=Rv[(r-o-1)%Rv.length];this._blur(e,o-1,o,a,s)}n.autoClear=i}_blur(e,n,i,r,o){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",o),this._halfBlur(a,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,a,s){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new yi(this._lodPlanes[r],u),h=u.uniforms,p=this._sizeLods[i]-1,g=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*br-1),y=o/g,m=isFinite(o)?1+Math.floor(c*y):br;m>br&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${br}`);const d=[];let _=0;for(let A=0;A<br;++A){const C=A/y,w=Math.exp(-C*C/2);d.push(w),A===0?_+=w:A<m&&(_+=2*w)}for(let A=0;A<d.length;A++)d[A]=d[A]/_;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=a==="latitudinal",s&&(h.poleAxis.value=s);const{_lodMax:v}=this;h.dTheta.value=g,h.mipInt.value=v-i;const x=this._sizeLods[r],b=3*x*(r>v-Fo?r-v+Fo:0),T=4*(this._cubeSize-x);Ml(n,b,T,3*x,2*x),l.setRenderTarget(n),l.render(f,Cf)}}function WP(t){const e=[],n=[],i=[];let r=t;const o=t-Fo+1+Av.length;for(let a=0;a<o;a++){const s=Math.pow(2,r);n.push(s);let l=1/s;a>t-Fo?l=Av[a-t+Fo-1]:a===0&&(l=0),i.push(l);const u=1/(s-2),c=-u,f=1+u,h=[c,c,f,c,f,f,c,c,f,f,c,f],p=6,g=6,y=3,m=2,d=1,_=new Float32Array(y*g*p),v=new Float32Array(m*g*p),x=new Float32Array(d*g*p);for(let T=0;T<p;T++){const A=T%3*2/3-1,C=T>2?0:-1,w=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];_.set(w,y*g*T),v.set(h,m*g*T);const S=[T,T,T,T,T,T];x.set(S,d*g*T)}const b=new Pi;b.setAttribute("position",new ri(_,y)),b.setAttribute("uv",new ri(v,m)),b.setAttribute("faceIndex",new ri(x,d)),e.push(b),r>Fo&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Pv(t,e,n){const i=new Xr(t,e,n);return i.texture.mapping=fc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ml(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function jP(t,e,n){const i=new Float32Array(br),r=new B(0,1,0);return new ur({name:"SphericalGaussianBlur",defines:{n:br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:im(),fragmentShader:`

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
		`,blending:rr,depthTest:!1,depthWrite:!1})}function Dv(){return new ur({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:im(),fragmentShader:`

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
		`,blending:rr,depthTest:!1,depthWrite:!1})}function Lv(){return new ur({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:im(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function im(){return`

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
	`}function XP(t){let e=new WeakMap,n=null;function i(s){if(s&&s.isTexture){const l=s.mapping,u=l===ih||l===rh,c=l===ta||l===na;if(u||c){let f=e.get(s);const h=f!==void 0?f.texture.pmremVersion:0;if(s.isRenderTargetTexture&&s.pmremVersion!==h)return n===null&&(n=new bv(t)),f=u?n.fromEquirectangular(s,f):n.fromCubemap(s,f),f.texture.pmremVersion=s.pmremVersion,e.set(s,f),f.texture;if(f!==void 0)return f.texture;{const p=s.image;return u&&p&&p.height>0||c&&p&&r(p)?(n===null&&(n=new bv(t)),f=u?n.fromEquirectangular(s):n.fromCubemap(s),f.texture.pmremVersion=s.pmremVersion,e.set(s,f),s.addEventListener("dispose",o),f.texture):null}}}return s}function r(s){let l=0;const u=6;for(let c=0;c<u;c++)s[c]!==void 0&&l++;return l===u}function o(s){const l=s.target;l.removeEventListener("dispose",o);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function $P(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Gx("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function YP(t,e,n,i){const r={},o=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const y=h.morphAttributes[g];for(let m=0,d=y.length;m<d;m++)e.remove(y[m])}h.removeEventListener("dispose",a),delete r[h.id];const p=o.get(h);p&&(e.remove(p),o.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function s(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const y=p[g];for(let m=0,d=y.length;m<d;m++)e.update(y[m],t.ARRAY_BUFFER)}}function u(f){const h=[],p=f.index,g=f.attributes.position;let y=0;if(p!==null){const _=p.array;y=p.version;for(let v=0,x=_.length;v<x;v+=3){const b=_[v+0],T=_[v+1],A=_[v+2];h.push(b,T,T,A,A,b)}}else if(g!==void 0){const _=g.array;y=g.version;for(let v=0,x=_.length/3-1;v<x;v+=3){const b=v+0,T=v+1,A=v+2;h.push(b,T,T,A,A,b)}}else return;const m=new(Hx(h)?Zx:Kx)(h,1);m.version=y;const d=o.get(f);d&&e.remove(d),o.set(f,m)}function c(f){const h=o.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&u(f)}else u(f);return o.get(f)}return{get:s,update:l,getWireframeAttribute:c}}function qP(t,e,n){let i;function r(h){i=h}let o,a;function s(h){o=h.type,a=h.bytesPerElement}function l(h,p){t.drawElements(i,p,o,h*a),n.update(p,i,1)}function u(h,p,g){g!==0&&(t.drawElementsInstanced(i,p,o,h*a,g),n.update(p,i,g))}function c(h,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,o,h,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];n.update(m,i,1)}function f(h,p,g,y){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<h.length;d++)u(h[d]/a,p[d],y[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,o,h,0,y,0,g);let d=0;for(let _=0;_<g;_++)d+=p[_];for(let _=0;_<y.length;_++)n.update(d,i,y[_])}}this.setMode=r,this.setIndex=s,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function KP(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,a,s){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=s*(o/3);break;case t.LINES:n.lines+=s*(o/2);break;case t.LINE_STRIP:n.lines+=s*(o-1);break;case t.LINE_LOOP:n.lines+=s*o;break;case t.POINTS:n.points+=s*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function ZP(t,e,n){const i=new WeakMap,r=new Ut;function o(a,s,l){const u=a.morphTargetInfluences,c=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,f=c!==void 0?c.length:0;let h=i.get(s);if(h===void 0||h.count!==f){let S=function(){C.dispose(),i.delete(s),s.removeEventListener("dispose",S)};var p=S;h!==void 0&&h.texture.dispose();const g=s.morphAttributes.position!==void 0,y=s.morphAttributes.normal!==void 0,m=s.morphAttributes.color!==void 0,d=s.morphAttributes.position||[],_=s.morphAttributes.normal||[],v=s.morphAttributes.color||[];let x=0;g===!0&&(x=1),y===!0&&(x=2),m===!0&&(x=3);let b=s.attributes.position.count*x,T=1;b>e.maxTextureSize&&(T=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const A=new Float32Array(b*T*4*f),C=new jx(A,b,T,f);C.type=vi,C.needsUpdate=!0;const w=x*4;for(let D=0;D<f;D++){const H=d[D],V=_[D],q=v[D],K=b*T*4*D;for(let W=0;W<H.count;W++){const Z=W*w;g===!0&&(r.fromBufferAttribute(H,W),A[K+Z+0]=r.x,A[K+Z+1]=r.y,A[K+Z+2]=r.z,A[K+Z+3]=0),y===!0&&(r.fromBufferAttribute(V,W),A[K+Z+4]=r.x,A[K+Z+5]=r.y,A[K+Z+6]=r.z,A[K+Z+7]=0),m===!0&&(r.fromBufferAttribute(q,W),A[K+Z+8]=r.x,A[K+Z+9]=r.y,A[K+Z+10]=r.z,A[K+Z+11]=q.itemSize===4?r.w:1)}}h={count:f,texture:C,size:new Ze(b,T)},i.set(s,h),s.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let g=0;for(let m=0;m<u.length;m++)g+=u[m];const y=s.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:o}}function QP(t,e,n,i){let r=new WeakMap;function o(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function a(){r=new WeakMap}function s(l){const u=l.target;u.removeEventListener("dispose",s),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:a}}class iS extends Kt{constructor(e,n,i,r,o,a,s,l,u,c=jo){if(c!==jo&&c!==ra)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===jo&&(i=jr),i===void 0&&c===ra&&(i=ia),super(null,r,o,a,s,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=s!==void 0?s:Cn,this.minFilter=l!==void 0?l:Cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const rS=new Kt,Nv=new iS(1,1),oS=new jx,aS=new FR,sS=new eS,Iv=[],Uv=[],Ov=new Float32Array(16),Fv=new Float32Array(9),kv=new Float32Array(4);function ma(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=Iv[r];if(o===void 0&&(o=new Float32Array(r),Iv[r]=o),e!==0){i.toArray(o,0);for(let a=1,s=0;a!==e;++a)s+=n,t[a].toArray(o,s)}return o}function Dt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Lt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function mc(t,e){let n=Uv[e];n===void 0&&(n=new Int32Array(e),Uv[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function JP(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function eD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2fv(this.addr,e),Lt(n,e)}}function tD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Dt(n,e))return;t.uniform3fv(this.addr,e),Lt(n,e)}}function nD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4fv(this.addr,e),Lt(n,e)}}function iD(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Lt(n,e)}else{if(Dt(n,i))return;kv.set(i),t.uniformMatrix2fv(this.addr,!1,kv),Lt(n,i)}}function rD(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Lt(n,e)}else{if(Dt(n,i))return;Fv.set(i),t.uniformMatrix3fv(this.addr,!1,Fv),Lt(n,i)}}function oD(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Lt(n,e)}else{if(Dt(n,i))return;Ov.set(i),t.uniformMatrix4fv(this.addr,!1,Ov),Lt(n,i)}}function aD(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function sD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2iv(this.addr,e),Lt(n,e)}}function lD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dt(n,e))return;t.uniform3iv(this.addr,e),Lt(n,e)}}function uD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4iv(this.addr,e),Lt(n,e)}}function cD(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function fD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2uiv(this.addr,e),Lt(n,e)}}function dD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dt(n,e))return;t.uniform3uiv(this.addr,e),Lt(n,e)}}function hD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4uiv(this.addr,e),Lt(n,e)}}function pD(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let o;this.type===t.SAMPLER_2D_SHADOW?(Nv.compareFunction=Vx,o=Nv):o=rS,n.setTexture2D(e||o,r)}function mD(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||aS,r)}function gD(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||sS,r)}function vD(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||oS,r)}function _D(t){switch(t){case 5126:return JP;case 35664:return eD;case 35665:return tD;case 35666:return nD;case 35674:return iD;case 35675:return rD;case 35676:return oD;case 5124:case 35670:return aD;case 35667:case 35671:return sD;case 35668:case 35672:return lD;case 35669:case 35673:return uD;case 5125:return cD;case 36294:return fD;case 36295:return dD;case 36296:return hD;case 35678:case 36198:case 36298:case 36306:case 35682:return pD;case 35679:case 36299:case 36307:return mD;case 35680:case 36300:case 36308:case 36293:return gD;case 36289:case 36303:case 36311:case 36292:return vD}}function yD(t,e){t.uniform1fv(this.addr,e)}function xD(t,e){const n=ma(e,this.size,2);t.uniform2fv(this.addr,n)}function SD(t,e){const n=ma(e,this.size,3);t.uniform3fv(this.addr,n)}function ED(t,e){const n=ma(e,this.size,4);t.uniform4fv(this.addr,n)}function MD(t,e){const n=ma(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function wD(t,e){const n=ma(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function TD(t,e){const n=ma(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function AD(t,e){t.uniform1iv(this.addr,e)}function CD(t,e){t.uniform2iv(this.addr,e)}function RD(t,e){t.uniform3iv(this.addr,e)}function bD(t,e){t.uniform4iv(this.addr,e)}function PD(t,e){t.uniform1uiv(this.addr,e)}function DD(t,e){t.uniform2uiv(this.addr,e)}function LD(t,e){t.uniform3uiv(this.addr,e)}function ND(t,e){t.uniform4uiv(this.addr,e)}function ID(t,e,n){const i=this.cache,r=e.length,o=mc(n,r);Dt(i,o)||(t.uniform1iv(this.addr,o),Lt(i,o));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||rS,o[a])}function UD(t,e,n){const i=this.cache,r=e.length,o=mc(n,r);Dt(i,o)||(t.uniform1iv(this.addr,o),Lt(i,o));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||aS,o[a])}function OD(t,e,n){const i=this.cache,r=e.length,o=mc(n,r);Dt(i,o)||(t.uniform1iv(this.addr,o),Lt(i,o));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||sS,o[a])}function FD(t,e,n){const i=this.cache,r=e.length,o=mc(n,r);Dt(i,o)||(t.uniform1iv(this.addr,o),Lt(i,o));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||oS,o[a])}function kD(t){switch(t){case 5126:return yD;case 35664:return xD;case 35665:return SD;case 35666:return ED;case 35674:return MD;case 35675:return wD;case 35676:return TD;case 5124:case 35670:return AD;case 35667:case 35671:return CD;case 35668:case 35672:return RD;case 35669:case 35673:return bD;case 5125:return PD;case 36294:return DD;case 36295:return LD;case 36296:return ND;case 35678:case 36198:case 36298:case 36306:case 35682:return ID;case 35679:case 36299:case 36307:return UD;case 35680:case 36300:case 36308:case 36293:return OD;case 36289:case 36303:case 36311:case 36292:return FD}}class BD{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=_D(n.type)}}class zD{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=kD(n.type)}}class VD{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,a=r.length;o!==a;++o){const s=r[o];s.setValue(e,n[s.id],i)}}}const Lf=/(\w+)(\])?(\[|\.)?/g;function Bv(t,e){t.seq.push(e),t.map[e.id]=e}function HD(t,e,n){const i=t.name,r=i.length;for(Lf.lastIndex=0;;){const o=Lf.exec(i),a=Lf.lastIndex;let s=o[1];const l=o[2]==="]",u=o[3];if(l&&(s=s|0),u===void 0||u==="["&&a+2===r){Bv(n,u===void 0?new BD(s,t,e):new zD(s,t,e));break}else{let f=n.map[s];f===void 0&&(f=new VD(s),Bv(n,f)),n=f}}}class $l{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),a=e.getUniformLocation(n,o.name);HD(o,a,this)}}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,a=n.length;o!==a;++o){const s=n[o],l=i[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function zv(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const GD=37297;let WD=0;function jD(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let a=r;a<o;a++){const s=a+1;i.push(`${s===e?">":" "} ${s}: ${n[a]}`)}return i.join(`
`)}function XD(t){const e=tt.getPrimaries(tt.workingColorSpace),n=tt.getPrimaries(t);let i;switch(e===n?i="":e===Pu&&n===bu?i="LinearDisplayP3ToLinearSRGB":e===bu&&n===Pu&&(i="LinearSRGBToLinearDisplayP3"),t){case mr:case dc:return[i,"LinearTransferOETF"];case Qn:case nm:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Vv(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+jD(t.getShaderSource(e),a)}else return r}function $D(t,e){const n=XD(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function YD(t,e){let n;switch(e){case cR:n="Linear";break;case fR:n="Reinhard";break;case dR:n="OptimizedCineon";break;case hR:n="ACESFilmic";break;case mR:n="AgX";break;case gR:n="Neutral";break;case pR:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function qD(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ka).join(`
`)}function KD(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function ZD(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),a=o.name;let s=1;o.type===t.FLOAT_MAT2&&(s=2),o.type===t.FLOAT_MAT3&&(s=3),o.type===t.FLOAT_MAT4&&(s=4),n[a]={type:o.type,location:t.getAttribLocation(e,a),locationSize:s}}return n}function ka(t){return t!==""}function Hv(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gv(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const QD=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ih(t){return t.replace(QD,eL)}const JD=new Map;function eL(t,e){let n=Ge[e];if(n===void 0){const i=JD.get(e);if(i!==void 0)n=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ih(n)}const tL=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wv(t){return t.replace(tL,nL)}function nL(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function jv(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function iL(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Rx?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===OC?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===fi&&(e="SHADOWMAP_TYPE_VSM"),e}function rL(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ta:case na:e="ENVMAP_TYPE_CUBE";break;case fc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function oL(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case na:e="ENVMAP_MODE_REFRACTION";break}return e}function aL(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case bx:e="ENVMAP_BLENDING_MULTIPLY";break;case lR:e="ENVMAP_BLENDING_MIX";break;case uR:e="ENVMAP_BLENDING_ADD";break}return e}function sL(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function lL(t,e,n,i){const r=t.getContext(),o=n.defines;let a=n.vertexShader,s=n.fragmentShader;const l=iL(n),u=rL(n),c=oL(n),f=aL(n),h=sL(n),p=qD(n),g=KD(o),y=r.createProgram();let m,d,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ka).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ka).join(`
`),d.length>0&&(d+=`
`)):(m=[jv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ka).join(`
`),d=[jv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==or?"#define TONE_MAPPING":"",n.toneMapping!==or?Ge.tonemapping_pars_fragment:"",n.toneMapping!==or?YD("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,$D("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ka).join(`
`)),a=Ih(a),a=Hv(a,n),a=Gv(a,n),s=Ih(s),s=Hv(s,n),s=Gv(s,n),a=Wv(a),s=Wv(s),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",n.glslVersion===av?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===av?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const v=_+m+a,x=_+d+s,b=zv(r,r.VERTEX_SHADER,v),T=zv(r,r.FRAGMENT_SHADER,x);r.attachShader(y,b),r.attachShader(y,T),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function A(D){if(t.debug.checkShaderErrors){const H=r.getProgramInfoLog(y).trim(),V=r.getShaderInfoLog(b).trim(),q=r.getShaderInfoLog(T).trim();let K=!0,W=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(K=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,b,T);else{const Z=Vv(r,b,"vertex"),N=Vv(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+H+`
`+Z+`
`+N)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(V===""||q==="")&&(W=!1);W&&(D.diagnostics={runnable:K,programLog:H,vertexShader:{log:V,prefix:m},fragmentShader:{log:q,prefix:d}})}r.deleteShader(b),r.deleteShader(T),C=new $l(r,y),w=ZD(r,y)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(y,GD)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=WD++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=b,this.fragmentShader=T,this}let uL=0;class cL{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(o)===!1&&(a.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new fL(e),n.set(e,i)),i}}class fL{constructor(e){this.id=uL++,this.code=e,this.usedTimes=0}}function dL(t,e,n,i,r,o,a){const s=new $x,l=new cL,u=new Set,c=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(w){return u.add(w),w===0?"uv":`uv${w}`}function m(w,S,D,H,V){const q=H.fog,K=V.geometry,W=w.isMeshStandardMaterial?H.environment:null,Z=(w.isMeshStandardMaterial?n:e).get(w.envMap||W),N=Z&&Z.mapping===fc?Z.image.height:null,X=g[w.type];w.precision!==null&&(p=r.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const $=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,oe=$!==void 0?$.length:0;let Ee=0;K.morphAttributes.position!==void 0&&(Ee=1),K.morphAttributes.normal!==void 0&&(Ee=2),K.morphAttributes.color!==void 0&&(Ee=3);let je,j,ne,de;if(X){const Ve=Jn[X];je=Ve.vertexShader,j=Ve.fragmentShader}else je=w.vertexShader,j=w.fragmentShader,l.update(w),ne=l.getVertexShaderID(w),de=l.getFragmentShaderID(w);const ce=t.getRenderTarget(),Pe=V.isInstancedMesh===!0,De=V.isBatchedMesh===!0,He=!!w.map,rt=!!w.matcap,P=!!Z,dt=!!w.aoMap,Re=!!w.lightMap,qe=!!w.bumpMap,ge=!!w.normalMap,st=!!w.displacementMap,Ne=!!w.emissiveMap,Oe=!!w.metalnessMap,R=!!w.roughnessMap,M=w.anisotropy>0,z=w.clearcoat>0,ee=w.dispersion>0,re=w.iridescence>0,J=w.sheen>0,Te=w.transmission>0,he=M&&!!w.anisotropyMap,ve=z&&!!w.clearcoatMap,Fe=z&&!!w.clearcoatNormalMap,ae=z&&!!w.clearcoatRoughnessMap,me=re&&!!w.iridescenceMap,Ye=re&&!!w.iridescenceThicknessMap,Ae=J&&!!w.sheenColorMap,_e=J&&!!w.sheenRoughnessMap,Ue=!!w.specularMap,Be=!!w.specularColorMap,ot=!!w.specularIntensityMap,I=Te&&!!w.transmissionMap,se=Te&&!!w.thicknessMap,Y=!!w.gradientMap,Q=!!w.alphaMap,ue=w.alphaTest>0,xe=!!w.alphaHash,be=!!w.extensions;let lt=or;w.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(lt=t.toneMapping);const ze={shaderID:X,shaderType:w.type,shaderName:w.name,vertexShader:je,fragmentShader:j,defines:w.defines,customVertexShaderID:ne,customFragmentShaderID:de,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:De,batchingColor:De&&V._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&V.instanceColor!==null,instancingMorph:Pe&&V.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ce===null?t.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:mr,alphaToCoverage:!!w.alphaToCoverage,map:He,matcap:rt,envMap:P,envMapMode:P&&Z.mapping,envMapCubeUVHeight:N,aoMap:dt,lightMap:Re,bumpMap:qe,normalMap:ge,displacementMap:h&&st,emissiveMap:Ne,normalMapObjectSpace:ge&&w.normalMapType===SR,normalMapTangentSpace:ge&&w.normalMapType===xR,metalnessMap:Oe,roughnessMap:R,anisotropy:M,anisotropyMap:he,clearcoat:z,clearcoatMap:ve,clearcoatNormalMap:Fe,clearcoatRoughnessMap:ae,dispersion:ee,iridescence:re,iridescenceMap:me,iridescenceThicknessMap:Ye,sheen:J,sheenColorMap:Ae,sheenRoughnessMap:_e,specularMap:Ue,specularColorMap:Be,specularIntensityMap:ot,transmission:Te,transmissionMap:I,thicknessMap:se,gradientMap:Y,opaque:w.transparent===!1&&w.blending===Wo&&w.alphaToCoverage===!1,alphaMap:Q,alphaTest:ue,alphaHash:xe,combine:w.combine,mapUv:He&&y(w.map.channel),aoMapUv:dt&&y(w.aoMap.channel),lightMapUv:Re&&y(w.lightMap.channel),bumpMapUv:qe&&y(w.bumpMap.channel),normalMapUv:ge&&y(w.normalMap.channel),displacementMapUv:st&&y(w.displacementMap.channel),emissiveMapUv:Ne&&y(w.emissiveMap.channel),metalnessMapUv:Oe&&y(w.metalnessMap.channel),roughnessMapUv:R&&y(w.roughnessMap.channel),anisotropyMapUv:he&&y(w.anisotropyMap.channel),clearcoatMapUv:ve&&y(w.clearcoatMap.channel),clearcoatNormalMapUv:Fe&&y(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&y(w.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&y(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ye&&y(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&y(w.sheenColorMap.channel),sheenRoughnessMapUv:_e&&y(w.sheenRoughnessMap.channel),specularMapUv:Ue&&y(w.specularMap.channel),specularColorMapUv:Be&&y(w.specularColorMap.channel),specularIntensityMapUv:ot&&y(w.specularIntensityMap.channel),transmissionMapUv:I&&y(w.transmissionMap.channel),thicknessMapUv:se&&y(w.thicknessMap.channel),alphaMapUv:Q&&y(w.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(ge||M),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!K.attributes.uv&&(He||Q),fog:!!q,useFog:w.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:V.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:Ee,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&D.length>0,shadowMapType:t.shadowMap.type,toneMapping:lt,decodeVideoTexture:He&&w.map.isVideoTexture===!0&&tt.getTransfer(w.map.colorSpace)===ct,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===pi,flipSided:w.side===cn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:be&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&w.extensions.multiDraw===!0||De)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return ze.vertexUv1s=u.has(1),ze.vertexUv2s=u.has(2),ze.vertexUv3s=u.has(3),u.clear(),ze}function d(w){const S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(const D in w.defines)S.push(D),S.push(w.defines[D]);return w.isRawShaderMaterial===!1&&(_(S,w),v(S,w),S.push(t.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function _(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function v(w,S){s.disableAll(),S.supportsVertexTextures&&s.enable(0),S.instancing&&s.enable(1),S.instancingColor&&s.enable(2),S.instancingMorph&&s.enable(3),S.matcap&&s.enable(4),S.envMap&&s.enable(5),S.normalMapObjectSpace&&s.enable(6),S.normalMapTangentSpace&&s.enable(7),S.clearcoat&&s.enable(8),S.iridescence&&s.enable(9),S.alphaTest&&s.enable(10),S.vertexColors&&s.enable(11),S.vertexAlphas&&s.enable(12),S.vertexUv1s&&s.enable(13),S.vertexUv2s&&s.enable(14),S.vertexUv3s&&s.enable(15),S.vertexTangents&&s.enable(16),S.anisotropy&&s.enable(17),S.alphaHash&&s.enable(18),S.batching&&s.enable(19),S.dispersion&&s.enable(20),S.batchingColor&&s.enable(21),w.push(s.mask),s.disableAll(),S.fog&&s.enable(0),S.useFog&&s.enable(1),S.flatShading&&s.enable(2),S.logarithmicDepthBuffer&&s.enable(3),S.skinning&&s.enable(4),S.morphTargets&&s.enable(5),S.morphNormals&&s.enable(6),S.morphColors&&s.enable(7),S.premultipliedAlpha&&s.enable(8),S.shadowMapEnabled&&s.enable(9),S.doubleSided&&s.enable(10),S.flipSided&&s.enable(11),S.useDepthPacking&&s.enable(12),S.dithering&&s.enable(13),S.transmission&&s.enable(14),S.sheen&&s.enable(15),S.opaque&&s.enable(16),S.pointsUvs&&s.enable(17),S.decodeVideoTexture&&s.enable(18),S.alphaToCoverage&&s.enable(19),w.push(s.mask)}function x(w){const S=g[w.type];let D;if(S){const H=Jn[S];D=qR.clone(H.uniforms)}else D=w.uniforms;return D}function b(w,S){let D;for(let H=0,V=c.length;H<V;H++){const q=c[H];if(q.cacheKey===S){D=q,++D.usedTimes;break}}return D===void 0&&(D=new lL(t,S,w,o),c.push(D)),D}function T(w){if(--w.usedTimes===0){const S=c.indexOf(w);c[S]=c[c.length-1],c.pop(),w.destroy()}}function A(w){l.remove(w)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:x,acquireProgram:b,releaseProgram:T,releaseShaderCache:A,programs:c,dispose:C}}function hL(){let t=new WeakMap;function e(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function n(o){t.delete(o)}function i(o,a,s){t.get(o)[a]=s}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function pL(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Xv(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function $v(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function a(f,h,p,g,y,m){let d=t[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:g,renderOrder:f.renderOrder,z:y,group:m},t[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=y,d.group=m),e++,d}function s(f,h,p,g,y,m){const d=a(f,h,p,g,y,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):n.push(d)}function l(f,h,p,g,y,m){const d=a(f,h,p,g,y,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):n.unshift(d)}function u(f,h){n.length>1&&n.sort(f||pL),i.length>1&&i.sort(h||Xv),r.length>1&&r.sort(h||Xv)}function c(){for(let f=e,h=t.length;f<h;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:s,unshift:l,finish:c,sort:u}}function mL(){let t=new WeakMap;function e(i,r){const o=t.get(i);let a;return o===void 0?(a=new $v,t.set(i,[a])):r>=o.length?(a=new $v,o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function gL(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new B,color:new nt};break;case"SpotLight":n={position:new B,direction:new B,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new B,color:new nt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new B,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":n={color:new nt,position:new B,halfWidth:new B,halfHeight:new B};break}return t[e.id]=n,n}}}function vL(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let _L=0;function yL(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function xL(t){const e=new gL,n=vL(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new B);const r=new B,o=new Rt,a=new Rt;function s(u){let c=0,f=0,h=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,g=0,y=0,m=0,d=0,_=0,v=0,x=0,b=0,T=0,A=0;u.sort(yL);for(let w=0,S=u.length;w<S;w++){const D=u[w],H=D.color,V=D.intensity,q=D.distance,K=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)c+=H.r*V,f+=H.g*V,h+=H.b*V;else if(D.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(D.sh.coefficients[W],V);A++}else if(D.isDirectionalLight){const W=e.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Z=D.shadow,N=n.get(D);N.shadowIntensity=Z.intensity,N.shadowBias=Z.bias,N.shadowNormalBias=Z.normalBias,N.shadowRadius=Z.radius,N.shadowMapSize=Z.mapSize,i.directionalShadow[p]=N,i.directionalShadowMap[p]=K,i.directionalShadowMatrix[p]=D.shadow.matrix,_++}i.directional[p]=W,p++}else if(D.isSpotLight){const W=e.get(D);W.position.setFromMatrixPosition(D.matrixWorld),W.color.copy(H).multiplyScalar(V),W.distance=q,W.coneCos=Math.cos(D.angle),W.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),W.decay=D.decay,i.spot[y]=W;const Z=D.shadow;if(D.map&&(i.spotLightMap[b]=D.map,b++,Z.updateMatrices(D),D.castShadow&&T++),i.spotLightMatrix[y]=Z.matrix,D.castShadow){const N=n.get(D);N.shadowIntensity=Z.intensity,N.shadowBias=Z.bias,N.shadowNormalBias=Z.normalBias,N.shadowRadius=Z.radius,N.shadowMapSize=Z.mapSize,i.spotShadow[y]=N,i.spotShadowMap[y]=K,x++}y++}else if(D.isRectAreaLight){const W=e.get(D);W.color.copy(H).multiplyScalar(V),W.halfWidth.set(D.width*.5,0,0),W.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=W,m++}else if(D.isPointLight){const W=e.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),W.distance=D.distance,W.decay=D.decay,D.castShadow){const Z=D.shadow,N=n.get(D);N.shadowIntensity=Z.intensity,N.shadowBias=Z.bias,N.shadowNormalBias=Z.normalBias,N.shadowRadius=Z.radius,N.shadowMapSize=Z.mapSize,N.shadowCameraNear=Z.camera.near,N.shadowCameraFar=Z.camera.far,i.pointShadow[g]=N,i.pointShadowMap[g]=K,i.pointShadowMatrix[g]=D.shadow.matrix,v++}i.point[g]=W,g++}else if(D.isHemisphereLight){const W=e.get(D);W.skyColor.copy(D.color).multiplyScalar(V),W.groundColor.copy(D.groundColor).multiplyScalar(V),i.hemi[d]=W,d++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=f,i.ambient[2]=h;const C=i.hash;(C.directionalLength!==p||C.pointLength!==g||C.spotLength!==y||C.rectAreaLength!==m||C.hemiLength!==d||C.numDirectionalShadows!==_||C.numPointShadows!==v||C.numSpotShadows!==x||C.numSpotMaps!==b||C.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=x+b-T,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=A,C.directionalLength=p,C.pointLength=g,C.spotLength=y,C.rectAreaLength=m,C.hemiLength=d,C.numDirectionalShadows=_,C.numPointShadows=v,C.numSpotShadows=x,C.numSpotMaps=b,C.numLightProbes=A,i.version=_L++)}function l(u,c){let f=0,h=0,p=0,g=0,y=0;const m=c.matrixWorldInverse;for(let d=0,_=u.length;d<_;d++){const v=u[d];if(v.isDirectionalLight){const x=i.directional[f];x.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),f++}else if(v.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),p++}else if(v.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),a.identity(),o.copy(v.matrixWorld),o.premultiply(m),a.extractRotation(o),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){const x=i.point[h];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),h++}else if(v.isHemisphereLight){const x=i.hemi[y];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(m),y++}}}return{setup:s,setupView:l,state:i}}function Yv(t){const e=new xL(t),n=[],i=[];function r(c){u.camera=c,n.length=0,i.length=0}function o(c){n.push(c)}function a(c){i.push(c)}function s(){e.setup(n)}function l(c){e.setupView(n,c)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:s,setupLightsView:l,pushLight:o,pushShadow:a}}function SL(t){let e=new WeakMap;function n(r,o=0){const a=e.get(r);let s;return a===void 0?(s=new Yv(t),e.set(r,[s])):o>=a.length?(s=new Yv(t),a.push(s)):s=a[o],s}function i(){e=new WeakMap}return{get:n,dispose:i}}class EL extends Ns{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_R,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ML extends Ns{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const wL=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,TL=`uniform sampler2D shadow_pass;
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
}`;function AL(t,e,n){let i=new tS;const r=new Ze,o=new Ze,a=new Ut,s=new EL({depthPacking:yR}),l=new ML,u={},c=n.maxTextureSize,f={[lr]:cn,[cn]:lr,[pi]:pi},h=new ur({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:wL,fragmentShader:TL}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new Pi;g.setAttribute("position",new ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new yi(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rx;let d=this.type;this.render=function(T,A,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const w=t.getRenderTarget(),S=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),H=t.state;H.setBlending(rr),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const V=d!==fi&&this.type===fi,q=d===fi&&this.type!==fi;for(let K=0,W=T.length;K<W;K++){const Z=T[K],N=Z.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const X=N.getFrameExtents();if(r.multiply(X),o.copy(N.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(o.x=Math.floor(c/X.x),r.x=o.x*X.x,N.mapSize.x=o.x),r.y>c&&(o.y=Math.floor(c/X.y),r.y=o.y*X.y,N.mapSize.y=o.y)),N.map===null||V===!0||q===!0){const oe=this.type!==fi?{minFilter:Cn,magFilter:Cn}:{};N.map!==null&&N.map.dispose(),N.map=new Xr(r.x,r.y,oe),N.map.texture.name=Z.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const $=N.getViewportCount();for(let oe=0;oe<$;oe++){const Ee=N.getViewport(oe);a.set(o.x*Ee.x,o.y*Ee.y,o.x*Ee.z,o.y*Ee.w),H.viewport(a),N.updateMatrices(Z,oe),i=N.getFrustum(),x(A,C,N.camera,Z,this.type)}N.isPointLightShadow!==!0&&this.type===fi&&_(N,C),N.needsUpdate=!1}d=this.type,m.needsUpdate=!1,t.setRenderTarget(w,S,D)};function _(T,A){const C=e.update(y);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Xr(r.x,r.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(A,null,C,h,y,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(A,null,C,p,y,null)}function v(T,A,C,w){let S=null;const D=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)S=D;else if(S=C.isPointLight===!0?l:s,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const H=S.uuid,V=A.uuid;let q=u[H];q===void 0&&(q={},u[H]=q);let K=q[V];K===void 0&&(K=S.clone(),q[V]=K,A.addEventListener("dispose",b)),S=K}if(S.visible=A.visible,S.wireframe=A.wireframe,w===fi?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:f[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const H=t.properties.get(S);H.light=C}return S}function x(T,A,C,w,S){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===fi)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);const V=e.update(T),q=T.material;if(Array.isArray(q)){const K=V.groups;for(let W=0,Z=K.length;W<Z;W++){const N=K[W],X=q[N.materialIndex];if(X&&X.visible){const $=v(T,X,w,S);T.onBeforeShadow(t,T,A,C,V,$,N),t.renderBufferDirect(C,null,V,$,T,N),T.onAfterShadow(t,T,A,C,V,$,N)}}}else if(q.visible){const K=v(T,q,w,S);T.onBeforeShadow(t,T,A,C,V,K,null),t.renderBufferDirect(C,null,V,K,T,null),T.onAfterShadow(t,T,A,C,V,K,null)}}const H=T.children;for(let V=0,q=H.length;V<q;V++)x(H[V],A,C,w,S)}function b(T){T.target.removeEventListener("dispose",b);for(const C in u){const w=u[C],S=T.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}function CL(t){function e(){let I=!1;const se=new Ut;let Y=null;const Q=new Ut(0,0,0,0);return{setMask:function(ue){Y!==ue&&!I&&(t.colorMask(ue,ue,ue,ue),Y=ue)},setLocked:function(ue){I=ue},setClear:function(ue,xe,be,lt,ze){ze===!0&&(ue*=lt,xe*=lt,be*=lt),se.set(ue,xe,be,lt),Q.equals(se)===!1&&(t.clearColor(ue,xe,be,lt),Q.copy(se))},reset:function(){I=!1,Y=null,Q.set(-1,0,0,0)}}}function n(){let I=!1,se=null,Y=null,Q=null;return{setTest:function(ue){ue?de(t.DEPTH_TEST):ce(t.DEPTH_TEST)},setMask:function(ue){se!==ue&&!I&&(t.depthMask(ue),se=ue)},setFunc:function(ue){if(Y!==ue){switch(ue){case tR:t.depthFunc(t.NEVER);break;case nR:t.depthFunc(t.ALWAYS);break;case iR:t.depthFunc(t.LESS);break;case Cu:t.depthFunc(t.LEQUAL);break;case rR:t.depthFunc(t.EQUAL);break;case oR:t.depthFunc(t.GEQUAL);break;case aR:t.depthFunc(t.GREATER);break;case sR:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Y=ue}},setLocked:function(ue){I=ue},setClear:function(ue){Q!==ue&&(t.clearDepth(ue),Q=ue)},reset:function(){I=!1,se=null,Y=null,Q=null}}}function i(){let I=!1,se=null,Y=null,Q=null,ue=null,xe=null,be=null,lt=null,ze=null;return{setTest:function(Ve){I||(Ve?de(t.STENCIL_TEST):ce(t.STENCIL_TEST))},setMask:function(Ve){se!==Ve&&!I&&(t.stencilMask(Ve),se=Ve)},setFunc:function(Ve,Ln,en){(Y!==Ve||Q!==Ln||ue!==en)&&(t.stencilFunc(Ve,Ln,en),Y=Ve,Q=Ln,ue=en)},setOp:function(Ve,Ln,en){(xe!==Ve||be!==Ln||lt!==en)&&(t.stencilOp(Ve,Ln,en),xe=Ve,be=Ln,lt=en)},setLocked:function(Ve){I=Ve},setClear:function(Ve){ze!==Ve&&(t.clearStencil(Ve),ze=Ve)},reset:function(){I=!1,se=null,Y=null,Q=null,ue=null,xe=null,be=null,lt=null,ze=null}}}const r=new e,o=new n,a=new i,s=new WeakMap,l=new WeakMap;let u={},c={},f=new WeakMap,h=[],p=null,g=!1,y=null,m=null,d=null,_=null,v=null,x=null,b=null,T=new nt(0,0,0),A=0,C=!1,w=null,S=null,D=null,H=null,V=null;const q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,W=0;const Z=t.getParameter(t.VERSION);Z.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(Z)[1]),K=W>=1):Z.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),K=W>=2);let N=null,X={};const $=t.getParameter(t.SCISSOR_BOX),oe=t.getParameter(t.VIEWPORT),Ee=new Ut().fromArray($),je=new Ut().fromArray(oe);function j(I,se,Y,Q){const ue=new Uint8Array(4),xe=t.createTexture();t.bindTexture(I,xe),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let be=0;be<Y;be++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(se,0,t.RGBA,1,1,Q,0,t.RGBA,t.UNSIGNED_BYTE,ue):t.texImage2D(se+be,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ue);return xe}const ne={};ne[t.TEXTURE_2D]=j(t.TEXTURE_2D,t.TEXTURE_2D,1),ne[t.TEXTURE_CUBE_MAP]=j(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[t.TEXTURE_2D_ARRAY]=j(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ne[t.TEXTURE_3D]=j(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),de(t.DEPTH_TEST),o.setFunc(Cu),qe(!1),ge(tv),de(t.CULL_FACE),dt(rr);function de(I){u[I]!==!0&&(t.enable(I),u[I]=!0)}function ce(I){u[I]!==!1&&(t.disable(I),u[I]=!1)}function Pe(I,se){return c[I]!==se?(t.bindFramebuffer(I,se),c[I]=se,I===t.DRAW_FRAMEBUFFER&&(c[t.FRAMEBUFFER]=se),I===t.FRAMEBUFFER&&(c[t.DRAW_FRAMEBUFFER]=se),!0):!1}function De(I,se){let Y=h,Q=!1;if(I){Y=f.get(se),Y===void 0&&(Y=[],f.set(se,Y));const ue=I.textures;if(Y.length!==ue.length||Y[0]!==t.COLOR_ATTACHMENT0){for(let xe=0,be=ue.length;xe<be;xe++)Y[xe]=t.COLOR_ATTACHMENT0+xe;Y.length=ue.length,Q=!0}}else Y[0]!==t.BACK&&(Y[0]=t.BACK,Q=!0);Q&&t.drawBuffers(Y)}function He(I){return p!==I?(t.useProgram(I),p=I,!0):!1}const rt={[Rr]:t.FUNC_ADD,[kC]:t.FUNC_SUBTRACT,[BC]:t.FUNC_REVERSE_SUBTRACT};rt[zC]=t.MIN,rt[VC]=t.MAX;const P={[HC]:t.ZERO,[GC]:t.ONE,[WC]:t.SRC_COLOR,[th]:t.SRC_ALPHA,[KC]:t.SRC_ALPHA_SATURATE,[YC]:t.DST_COLOR,[XC]:t.DST_ALPHA,[jC]:t.ONE_MINUS_SRC_COLOR,[nh]:t.ONE_MINUS_SRC_ALPHA,[qC]:t.ONE_MINUS_DST_COLOR,[$C]:t.ONE_MINUS_DST_ALPHA,[ZC]:t.CONSTANT_COLOR,[QC]:t.ONE_MINUS_CONSTANT_COLOR,[JC]:t.CONSTANT_ALPHA,[eR]:t.ONE_MINUS_CONSTANT_ALPHA};function dt(I,se,Y,Q,ue,xe,be,lt,ze,Ve){if(I===rr){g===!0&&(ce(t.BLEND),g=!1);return}if(g===!1&&(de(t.BLEND),g=!0),I!==FC){if(I!==y||Ve!==C){if((m!==Rr||v!==Rr)&&(t.blendEquation(t.FUNC_ADD),m=Rr,v=Rr),Ve)switch(I){case Wo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case eh:t.blendFunc(t.ONE,t.ONE);break;case nv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case iv:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Wo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case eh:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case nv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case iv:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}d=null,_=null,x=null,b=null,T.set(0,0,0),A=0,y=I,C=Ve}return}ue=ue||se,xe=xe||Y,be=be||Q,(se!==m||ue!==v)&&(t.blendEquationSeparate(rt[se],rt[ue]),m=se,v=ue),(Y!==d||Q!==_||xe!==x||be!==b)&&(t.blendFuncSeparate(P[Y],P[Q],P[xe],P[be]),d=Y,_=Q,x=xe,b=be),(lt.equals(T)===!1||ze!==A)&&(t.blendColor(lt.r,lt.g,lt.b,ze),T.copy(lt),A=ze),y=I,C=!1}function Re(I,se){I.side===pi?ce(t.CULL_FACE):de(t.CULL_FACE);let Y=I.side===cn;se&&(Y=!Y),qe(Y),I.blending===Wo&&I.transparent===!1?dt(rr):dt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const Q=I.stencilWrite;a.setTest(Q),Q&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Ne(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?de(t.SAMPLE_ALPHA_TO_COVERAGE):ce(t.SAMPLE_ALPHA_TO_COVERAGE)}function qe(I){w!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),w=I)}function ge(I){I!==IC?(de(t.CULL_FACE),I!==S&&(I===tv?t.cullFace(t.BACK):I===UC?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ce(t.CULL_FACE),S=I}function st(I){I!==D&&(K&&t.lineWidth(I),D=I)}function Ne(I,se,Y){I?(de(t.POLYGON_OFFSET_FILL),(H!==se||V!==Y)&&(t.polygonOffset(se,Y),H=se,V=Y)):ce(t.POLYGON_OFFSET_FILL)}function Oe(I){I?de(t.SCISSOR_TEST):ce(t.SCISSOR_TEST)}function R(I){I===void 0&&(I=t.TEXTURE0+q-1),N!==I&&(t.activeTexture(I),N=I)}function M(I,se,Y){Y===void 0&&(N===null?Y=t.TEXTURE0+q-1:Y=N);let Q=X[Y];Q===void 0&&(Q={type:void 0,texture:void 0},X[Y]=Q),(Q.type!==I||Q.texture!==se)&&(N!==Y&&(t.activeTexture(Y),N=Y),t.bindTexture(I,se||ne[I]),Q.type=I,Q.texture=se)}function z(){const I=X[N];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function ee(){try{t.compressedTexImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function re(){try{t.compressedTexImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{t.texSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Te(){try{t.texSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function he(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ve(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Fe(){try{t.texStorage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ae(){try{t.texStorage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function me(){try{t.texImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ye(){try{t.texImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ae(I){Ee.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),Ee.copy(I))}function _e(I){je.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),je.copy(I))}function Ue(I,se){let Y=l.get(se);Y===void 0&&(Y=new WeakMap,l.set(se,Y));let Q=Y.get(I);Q===void 0&&(Q=t.getUniformBlockIndex(se,I.name),Y.set(I,Q))}function Be(I,se){const Q=l.get(se).get(I);s.get(se)!==Q&&(t.uniformBlockBinding(se,Q,I.__bindingPointIndex),s.set(se,Q))}function ot(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},N=null,X={},c={},f=new WeakMap,h=[],p=null,g=!1,y=null,m=null,d=null,_=null,v=null,x=null,b=null,T=new nt(0,0,0),A=0,C=!1,w=null,S=null,D=null,H=null,V=null,Ee.set(0,0,t.canvas.width,t.canvas.height),je.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:de,disable:ce,bindFramebuffer:Pe,drawBuffers:De,useProgram:He,setBlending:dt,setMaterial:Re,setFlipSided:qe,setCullFace:ge,setLineWidth:st,setPolygonOffset:Ne,setScissorTest:Oe,activeTexture:R,bindTexture:M,unbindTexture:z,compressedTexImage2D:ee,compressedTexImage3D:re,texImage2D:me,texImage3D:Ye,updateUBOMapping:Ue,uniformBlockBinding:Be,texStorage2D:Fe,texStorage3D:ae,texSubImage2D:J,texSubImage3D:Te,compressedTexSubImage2D:he,compressedTexSubImage3D:ve,scissor:Ae,viewport:_e,reset:ot}}function qv(t,e,n,i){const r=RL(i);switch(n){case Ix:return t*e;case Ox:return t*e;case Fx:return t*e*2;case kx:return t*e/r.components*r.byteLength;case Jp:return t*e/r.components*r.byteLength;case Bx:return t*e*2/r.components*r.byteLength;case em:return t*e*2/r.components*r.byteLength;case Ux:return t*e*3/r.components*r.byteLength;case Hn:return t*e*4/r.components*r.byteLength;case tm:return t*e*4/r.components*r.byteLength;case Hl:case Gl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Wl:case jl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case lh:case ch:return Math.max(t,16)*Math.max(e,8)/4;case sh:case uh:return Math.max(t,8)*Math.max(e,8)/2;case fh:case dh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case hh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ph:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case mh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case gh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case vh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case _h:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case yh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case xh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Sh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Eh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Mh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case wh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Th:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Ah:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Ch:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Xl:case Rh:case bh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case zx:case Ph:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Dh:case Lh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function RL(t){switch(t){case Ai:case Dx:return{byteLength:1,components:1};case gs:case Lx:case bs:return{byteLength:2,components:1};case Zp:case Qp:return{byteLength:2,components:4};case jr:case Kp:case vi:return{byteLength:4,components:1};case Nx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function bL(t,e,n,i,r,o,a){const s=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ze,c=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,M){return p?new OffscreenCanvas(R,M):Lu("canvas")}function y(R,M,z){let ee=1;const re=Oe(R);if((re.width>z||re.height>z)&&(ee=z/Math.max(re.width,re.height)),ee<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const J=Math.floor(ee*re.width),Te=Math.floor(ee*re.height);f===void 0&&(f=g(J,Te));const he=M?g(J,Te):f;return he.width=J,he.height=Te,he.getContext("2d").drawImage(R,0,0,J,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+J+"x"+Te+")."),he}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),R;return R}function m(R){return R.generateMipmaps&&R.minFilter!==Cn&&R.minFilter!==Vn}function d(R){t.generateMipmap(R)}function _(R,M,z,ee,re=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let J=M;if(M===t.RED&&(z===t.FLOAT&&(J=t.R32F),z===t.HALF_FLOAT&&(J=t.R16F),z===t.UNSIGNED_BYTE&&(J=t.R8)),M===t.RED_INTEGER&&(z===t.UNSIGNED_BYTE&&(J=t.R8UI),z===t.UNSIGNED_SHORT&&(J=t.R16UI),z===t.UNSIGNED_INT&&(J=t.R32UI),z===t.BYTE&&(J=t.R8I),z===t.SHORT&&(J=t.R16I),z===t.INT&&(J=t.R32I)),M===t.RG&&(z===t.FLOAT&&(J=t.RG32F),z===t.HALF_FLOAT&&(J=t.RG16F),z===t.UNSIGNED_BYTE&&(J=t.RG8)),M===t.RG_INTEGER&&(z===t.UNSIGNED_BYTE&&(J=t.RG8UI),z===t.UNSIGNED_SHORT&&(J=t.RG16UI),z===t.UNSIGNED_INT&&(J=t.RG32UI),z===t.BYTE&&(J=t.RG8I),z===t.SHORT&&(J=t.RG16I),z===t.INT&&(J=t.RG32I)),M===t.RGB&&z===t.UNSIGNED_INT_5_9_9_9_REV&&(J=t.RGB9_E5),M===t.RGBA){const Te=re?Ru:tt.getTransfer(ee);z===t.FLOAT&&(J=t.RGBA32F),z===t.HALF_FLOAT&&(J=t.RGBA16F),z===t.UNSIGNED_BYTE&&(J=Te===ct?t.SRGB8_ALPHA8:t.RGBA8),z===t.UNSIGNED_SHORT_4_4_4_4&&(J=t.RGBA4),z===t.UNSIGNED_SHORT_5_5_5_1&&(J=t.RGB5_A1)}return(J===t.R16F||J===t.R32F||J===t.RG16F||J===t.RG32F||J===t.RGBA16F||J===t.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function v(R,M){let z;return R?M===null||M===jr||M===ia?z=t.DEPTH24_STENCIL8:M===vi?z=t.DEPTH32F_STENCIL8:M===gs&&(z=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===jr||M===ia?z=t.DEPTH_COMPONENT24:M===vi?z=t.DEPTH_COMPONENT32F:M===gs&&(z=t.DEPTH_COMPONENT16),z}function x(R,M){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Cn&&R.minFilter!==Vn?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function b(R){const M=R.target;M.removeEventListener("dispose",b),A(M),M.isVideoTexture&&c.delete(M)}function T(R){const M=R.target;M.removeEventListener("dispose",T),w(M)}function A(R){const M=i.get(R);if(M.__webglInit===void 0)return;const z=R.source,ee=h.get(z);if(ee){const re=ee[M.__cacheKey];re.usedTimes--,re.usedTimes===0&&C(R),Object.keys(ee).length===0&&h.delete(z)}i.remove(R)}function C(R){const M=i.get(R);t.deleteTexture(M.__webglTexture);const z=R.source,ee=h.get(z);delete ee[M.__cacheKey],a.memory.textures--}function w(R){const M=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(M.__webglFramebuffer[ee]))for(let re=0;re<M.__webglFramebuffer[ee].length;re++)t.deleteFramebuffer(M.__webglFramebuffer[ee][re]);else t.deleteFramebuffer(M.__webglFramebuffer[ee]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[ee])}else{if(Array.isArray(M.__webglFramebuffer))for(let ee=0;ee<M.__webglFramebuffer.length;ee++)t.deleteFramebuffer(M.__webglFramebuffer[ee]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ee=0;ee<M.__webglColorRenderbuffer.length;ee++)M.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[ee]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const z=R.textures;for(let ee=0,re=z.length;ee<re;ee++){const J=i.get(z[ee]);J.__webglTexture&&(t.deleteTexture(J.__webglTexture),a.memory.textures--),i.remove(z[ee])}i.remove(R)}let S=0;function D(){S=0}function H(){const R=S;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),S+=1,R}function V(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function q(R,M){const z=i.get(R);if(R.isVideoTexture&&st(R),R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){const ee=R.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{je(z,R,M);return}}n.bindTexture(t.TEXTURE_2D,z.__webglTexture,t.TEXTURE0+M)}function K(R,M){const z=i.get(R);if(R.version>0&&z.__version!==R.version){je(z,R,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,z.__webglTexture,t.TEXTURE0+M)}function W(R,M){const z=i.get(R);if(R.version>0&&z.__version!==R.version){je(z,R,M);return}n.bindTexture(t.TEXTURE_3D,z.__webglTexture,t.TEXTURE0+M)}function Z(R,M){const z=i.get(R);if(R.version>0&&z.__version!==R.version){j(z,R,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,z.__webglTexture,t.TEXTURE0+M)}const N={[oh]:t.REPEAT,[Nr]:t.CLAMP_TO_EDGE,[ah]:t.MIRRORED_REPEAT},X={[Cn]:t.NEAREST,[vR]:t.NEAREST_MIPMAP_NEAREST,[nl]:t.NEAREST_MIPMAP_LINEAR,[Vn]:t.LINEAR,[af]:t.LINEAR_MIPMAP_NEAREST,[Ir]:t.LINEAR_MIPMAP_LINEAR},$={[ER]:t.NEVER,[RR]:t.ALWAYS,[MR]:t.LESS,[Vx]:t.LEQUAL,[wR]:t.EQUAL,[CR]:t.GEQUAL,[TR]:t.GREATER,[AR]:t.NOTEQUAL};function oe(R,M){if(M.type===vi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Vn||M.magFilter===af||M.magFilter===nl||M.magFilter===Ir||M.minFilter===Vn||M.minFilter===af||M.minFilter===nl||M.minFilter===Ir)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,N[M.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,N[M.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,N[M.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,X[M.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,X[M.minFilter]),M.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,$[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Cn||M.minFilter!==nl&&M.minFilter!==Ir||M.type===vi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Ee(R,M){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",b));const ee=M.source;let re=h.get(ee);re===void 0&&(re={},h.set(ee,re));const J=V(M);if(J!==R.__cacheKey){re[J]===void 0&&(re[J]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,z=!0),re[J].usedTimes++;const Te=re[R.__cacheKey];Te!==void 0&&(re[R.__cacheKey].usedTimes--,Te.usedTimes===0&&C(M)),R.__cacheKey=J,R.__webglTexture=re[J].texture}return z}function je(R,M,z){let ee=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ee=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ee=t.TEXTURE_3D);const re=Ee(R,M),J=M.source;n.bindTexture(ee,R.__webglTexture,t.TEXTURE0+z);const Te=i.get(J);if(J.version!==Te.__version||re===!0){n.activeTexture(t.TEXTURE0+z);const he=tt.getPrimaries(tt.workingColorSpace),ve=M.colorSpace===ji?null:tt.getPrimaries(M.colorSpace),Fe=M.colorSpace===ji||he===ve?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let ae=y(M.image,!1,r.maxTextureSize);ae=Ne(M,ae);const me=o.convert(M.format,M.colorSpace),Ye=o.convert(M.type);let Ae=_(M.internalFormat,me,Ye,M.colorSpace,M.isVideoTexture);oe(ee,M);let _e;const Ue=M.mipmaps,Be=M.isVideoTexture!==!0,ot=Te.__version===void 0||re===!0,I=J.dataReady,se=x(M,ae);if(M.isDepthTexture)Ae=v(M.format===ra,M.type),ot&&(Be?n.texStorage2D(t.TEXTURE_2D,1,Ae,ae.width,ae.height):n.texImage2D(t.TEXTURE_2D,0,Ae,ae.width,ae.height,0,me,Ye,null));else if(M.isDataTexture)if(Ue.length>0){Be&&ot&&n.texStorage2D(t.TEXTURE_2D,se,Ae,Ue[0].width,Ue[0].height);for(let Y=0,Q=Ue.length;Y<Q;Y++)_e=Ue[Y],Be?I&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,_e.width,_e.height,me,Ye,_e.data):n.texImage2D(t.TEXTURE_2D,Y,Ae,_e.width,_e.height,0,me,Ye,_e.data);M.generateMipmaps=!1}else Be?(ot&&n.texStorage2D(t.TEXTURE_2D,se,Ae,ae.width,ae.height),I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ae.width,ae.height,me,Ye,ae.data)):n.texImage2D(t.TEXTURE_2D,0,Ae,ae.width,ae.height,0,me,Ye,ae.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Be&&ot&&n.texStorage3D(t.TEXTURE_2D_ARRAY,se,Ae,Ue[0].width,Ue[0].height,ae.depth);for(let Y=0,Q=Ue.length;Y<Q;Y++)if(_e=Ue[Y],M.format!==Hn)if(me!==null)if(Be){if(I)if(M.layerUpdates.size>0){const ue=qv(_e.width,_e.height,M.format,M.type);for(const xe of M.layerUpdates){const be=_e.data.subarray(xe*ue/_e.data.BYTES_PER_ELEMENT,(xe+1)*ue/_e.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,xe,_e.width,_e.height,1,me,be,0,0)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,_e.width,_e.height,ae.depth,me,_e.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Y,Ae,_e.width,_e.height,ae.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?I&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,_e.width,_e.height,ae.depth,me,Ye,_e.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Y,Ae,_e.width,_e.height,ae.depth,0,me,Ye,_e.data)}else{Be&&ot&&n.texStorage2D(t.TEXTURE_2D,se,Ae,Ue[0].width,Ue[0].height);for(let Y=0,Q=Ue.length;Y<Q;Y++)_e=Ue[Y],M.format!==Hn?me!==null?Be?I&&n.compressedTexSubImage2D(t.TEXTURE_2D,Y,0,0,_e.width,_e.height,me,_e.data):n.compressedTexImage2D(t.TEXTURE_2D,Y,Ae,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?I&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,_e.width,_e.height,me,Ye,_e.data):n.texImage2D(t.TEXTURE_2D,Y,Ae,_e.width,_e.height,0,me,Ye,_e.data)}else if(M.isDataArrayTexture)if(Be){if(ot&&n.texStorage3D(t.TEXTURE_2D_ARRAY,se,Ae,ae.width,ae.height,ae.depth),I)if(M.layerUpdates.size>0){const Y=qv(ae.width,ae.height,M.format,M.type);for(const Q of M.layerUpdates){const ue=ae.data.subarray(Q*Y/ae.data.BYTES_PER_ELEMENT,(Q+1)*Y/ae.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Q,ae.width,ae.height,1,me,Ye,ue)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,me,Ye,ae.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ae,ae.width,ae.height,ae.depth,0,me,Ye,ae.data);else if(M.isData3DTexture)Be?(ot&&n.texStorage3D(t.TEXTURE_3D,se,Ae,ae.width,ae.height,ae.depth),I&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,me,Ye,ae.data)):n.texImage3D(t.TEXTURE_3D,0,Ae,ae.width,ae.height,ae.depth,0,me,Ye,ae.data);else if(M.isFramebufferTexture){if(ot)if(Be)n.texStorage2D(t.TEXTURE_2D,se,Ae,ae.width,ae.height);else{let Y=ae.width,Q=ae.height;for(let ue=0;ue<se;ue++)n.texImage2D(t.TEXTURE_2D,ue,Ae,Y,Q,0,me,Ye,null),Y>>=1,Q>>=1}}else if(Ue.length>0){if(Be&&ot){const Y=Oe(Ue[0]);n.texStorage2D(t.TEXTURE_2D,se,Ae,Y.width,Y.height)}for(let Y=0,Q=Ue.length;Y<Q;Y++)_e=Ue[Y],Be?I&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,me,Ye,_e):n.texImage2D(t.TEXTURE_2D,Y,Ae,me,Ye,_e);M.generateMipmaps=!1}else if(Be){if(ot){const Y=Oe(ae);n.texStorage2D(t.TEXTURE_2D,se,Ae,Y.width,Y.height)}I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,me,Ye,ae)}else n.texImage2D(t.TEXTURE_2D,0,Ae,me,Ye,ae);m(M)&&d(ee),Te.__version=J.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function j(R,M,z){if(M.image.length!==6)return;const ee=Ee(R,M),re=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+z);const J=i.get(re);if(re.version!==J.__version||ee===!0){n.activeTexture(t.TEXTURE0+z);const Te=tt.getPrimaries(tt.workingColorSpace),he=M.colorSpace===ji?null:tt.getPrimaries(M.colorSpace),ve=M.colorSpace===ji||Te===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Fe=M.isCompressedTexture||M.image[0].isCompressedTexture,ae=M.image[0]&&M.image[0].isDataTexture,me=[];for(let Q=0;Q<6;Q++)!Fe&&!ae?me[Q]=y(M.image[Q],!0,r.maxCubemapSize):me[Q]=ae?M.image[Q].image:M.image[Q],me[Q]=Ne(M,me[Q]);const Ye=me[0],Ae=o.convert(M.format,M.colorSpace),_e=o.convert(M.type),Ue=_(M.internalFormat,Ae,_e,M.colorSpace),Be=M.isVideoTexture!==!0,ot=J.__version===void 0||ee===!0,I=re.dataReady;let se=x(M,Ye);oe(t.TEXTURE_CUBE_MAP,M);let Y;if(Fe){Be&&ot&&n.texStorage2D(t.TEXTURE_CUBE_MAP,se,Ue,Ye.width,Ye.height);for(let Q=0;Q<6;Q++){Y=me[Q].mipmaps;for(let ue=0;ue<Y.length;ue++){const xe=Y[ue];M.format!==Hn?Ae!==null?Be?I&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ue,0,0,xe.width,xe.height,Ae,xe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ue,Ue,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ue,0,0,xe.width,xe.height,Ae,_e,xe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ue,Ue,xe.width,xe.height,0,Ae,_e,xe.data)}}}else{if(Y=M.mipmaps,Be&&ot){Y.length>0&&se++;const Q=Oe(me[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,se,Ue,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ae){Be?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,me[Q].width,me[Q].height,Ae,_e,me[Q].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ue,me[Q].width,me[Q].height,0,Ae,_e,me[Q].data);for(let ue=0;ue<Y.length;ue++){const be=Y[ue].image[Q].image;Be?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ue+1,0,0,be.width,be.height,Ae,_e,be.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ue+1,Ue,be.width,be.height,0,Ae,_e,be.data)}}else{Be?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ae,_e,me[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ue,Ae,_e,me[Q]);for(let ue=0;ue<Y.length;ue++){const xe=Y[ue];Be?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ue+1,0,0,Ae,_e,xe.image[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ue+1,Ue,Ae,_e,xe.image[Q])}}}m(M)&&d(t.TEXTURE_CUBE_MAP),J.__version=re.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function ne(R,M,z,ee,re,J){const Te=o.convert(z.format,z.colorSpace),he=o.convert(z.type),ve=_(z.internalFormat,Te,he,z.colorSpace);if(!i.get(M).__hasExternalTextures){const ae=Math.max(1,M.width>>J),me=Math.max(1,M.height>>J);re===t.TEXTURE_3D||re===t.TEXTURE_2D_ARRAY?n.texImage3D(re,J,ve,ae,me,M.depth,0,Te,he,null):n.texImage2D(re,J,ve,ae,me,0,Te,he,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),ge(M)?s.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,re,i.get(z).__webglTexture,0,qe(M)):(re===t.TEXTURE_2D||re>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ee,re,i.get(z).__webglTexture,J),n.bindFramebuffer(t.FRAMEBUFFER,null)}function de(R,M,z){if(t.bindRenderbuffer(t.RENDERBUFFER,R),M.depthBuffer){const ee=M.depthTexture,re=ee&&ee.isDepthTexture?ee.type:null,J=v(M.stencilBuffer,re),Te=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=qe(M);ge(M)?s.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,he,J,M.width,M.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,he,J,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,J,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Te,t.RENDERBUFFER,R)}else{const ee=M.textures;for(let re=0;re<ee.length;re++){const J=ee[re],Te=o.convert(J.format,J.colorSpace),he=o.convert(J.type),ve=_(J.internalFormat,Te,he,J.colorSpace),Fe=qe(M);z&&ge(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Fe,ve,M.width,M.height):ge(M)?s.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Fe,ve,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ve,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ce(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),q(M.depthTexture,0);const ee=i.get(M.depthTexture).__webglTexture,re=qe(M);if(M.depthTexture.format===jo)ge(M)?s.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0,re):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0);else if(M.depthTexture.format===ra)ge(M)?s.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0,re):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Pe(R){const M=i.get(R),z=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");ce(M.__webglFramebuffer,R)}else if(z){M.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[ee]),M.__webglDepthbuffer[ee]=t.createRenderbuffer(),de(M.__webglDepthbuffer[ee],R,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),de(M.__webglDepthbuffer,R,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function De(R,M,z){const ee=i.get(R);M!==void 0&&ne(ee.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),z!==void 0&&Pe(R)}function He(R){const M=R.texture,z=i.get(R),ee=i.get(M);R.addEventListener("dispose",T);const re=R.textures,J=R.isWebGLCubeRenderTarget===!0,Te=re.length>1;if(Te||(ee.__webglTexture===void 0&&(ee.__webglTexture=t.createTexture()),ee.__version=M.version,a.memory.textures++),J){z.__webglFramebuffer=[];for(let he=0;he<6;he++)if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[he]=[];for(let ve=0;ve<M.mipmaps.length;ve++)z.__webglFramebuffer[he][ve]=t.createFramebuffer()}else z.__webglFramebuffer[he]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let he=0;he<M.mipmaps.length;he++)z.__webglFramebuffer[he]=t.createFramebuffer()}else z.__webglFramebuffer=t.createFramebuffer();if(Te)for(let he=0,ve=re.length;he<ve;he++){const Fe=i.get(re[he]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=t.createTexture(),a.memory.textures++)}if(R.samples>0&&ge(R)===!1){z.__webglMultisampledFramebuffer=t.createFramebuffer(),z.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let he=0;he<re.length;he++){const ve=re[he];z.__webglColorRenderbuffer[he]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,z.__webglColorRenderbuffer[he]);const Fe=o.convert(ve.format,ve.colorSpace),ae=o.convert(ve.type),me=_(ve.internalFormat,Fe,ae,ve.colorSpace,R.isXRRenderTarget===!0),Ye=qe(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ye,me,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,z.__webglColorRenderbuffer[he])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=t.createRenderbuffer(),de(z.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(J){n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),oe(t.TEXTURE_CUBE_MAP,M);for(let he=0;he<6;he++)if(M.mipmaps&&M.mipmaps.length>0)for(let ve=0;ve<M.mipmaps.length;ve++)ne(z.__webglFramebuffer[he][ve],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,ve);else ne(z.__webglFramebuffer[he],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(M)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Te){for(let he=0,ve=re.length;he<ve;he++){const Fe=re[he],ae=i.get(Fe);n.bindTexture(t.TEXTURE_2D,ae.__webglTexture),oe(t.TEXTURE_2D,Fe),ne(z.__webglFramebuffer,R,Fe,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,0),m(Fe)&&d(t.TEXTURE_2D)}n.unbindTexture()}else{let he=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(he=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(he,ee.__webglTexture),oe(he,M),M.mipmaps&&M.mipmaps.length>0)for(let ve=0;ve<M.mipmaps.length;ve++)ne(z.__webglFramebuffer[ve],R,M,t.COLOR_ATTACHMENT0,he,ve);else ne(z.__webglFramebuffer,R,M,t.COLOR_ATTACHMENT0,he,0);m(M)&&d(he),n.unbindTexture()}R.depthBuffer&&Pe(R)}function rt(R){const M=R.textures;for(let z=0,ee=M.length;z<ee;z++){const re=M[z];if(m(re)){const J=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Te=i.get(re).__webglTexture;n.bindTexture(J,Te),d(J),n.unbindTexture()}}}const P=[],dt=[];function Re(R){if(R.samples>0){if(ge(R)===!1){const M=R.textures,z=R.width,ee=R.height;let re=t.COLOR_BUFFER_BIT;const J=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Te=i.get(R),he=M.length>1;if(he)for(let ve=0;ve<M.length;ve++)n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let ve=0;ve<M.length;ve++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(re|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(re|=t.STENCIL_BUFFER_BIT)),he){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Te.__webglColorRenderbuffer[ve]);const Fe=i.get(M[ve]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Fe,0)}t.blitFramebuffer(0,0,z,ee,0,0,z,ee,re,t.NEAREST),l===!0&&(P.length=0,dt.length=0,P.push(t.COLOR_ATTACHMENT0+ve),R.depthBuffer&&R.resolveDepthBuffer===!1&&(P.push(J),dt.push(J),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,dt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,P))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),he)for(let ve=0;ve<M.length;ve++){n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,Te.__webglColorRenderbuffer[ve]);const Fe=i.get(M[ve]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,Fe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const M=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function qe(R){return Math.min(r.maxSamples,R.samples)}function ge(R){const M=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function st(R){const M=a.render.frame;c.get(R)!==M&&(c.set(R,M),R.update())}function Ne(R,M){const z=R.colorSpace,ee=R.format,re=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==mr&&z!==ji&&(tt.getTransfer(z)===ct?(ee!==Hn||re!==Ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),M}function Oe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=H,this.resetTextureUnits=D,this.setTexture2D=q,this.setTexture2DArray=K,this.setTexture3D=W,this.setTextureCube=Z,this.rebindTextures=De,this.setupRenderTarget=He,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=Re,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=ge}function PL(t,e){function n(i,r=ji){let o;const a=tt.getTransfer(r);if(i===Ai)return t.UNSIGNED_BYTE;if(i===Zp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Qp)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Nx)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Dx)return t.BYTE;if(i===Lx)return t.SHORT;if(i===gs)return t.UNSIGNED_SHORT;if(i===Kp)return t.INT;if(i===jr)return t.UNSIGNED_INT;if(i===vi)return t.FLOAT;if(i===bs)return t.HALF_FLOAT;if(i===Ix)return t.ALPHA;if(i===Ux)return t.RGB;if(i===Hn)return t.RGBA;if(i===Ox)return t.LUMINANCE;if(i===Fx)return t.LUMINANCE_ALPHA;if(i===jo)return t.DEPTH_COMPONENT;if(i===ra)return t.DEPTH_STENCIL;if(i===kx)return t.RED;if(i===Jp)return t.RED_INTEGER;if(i===Bx)return t.RG;if(i===em)return t.RG_INTEGER;if(i===tm)return t.RGBA_INTEGER;if(i===Hl||i===Gl||i===Wl||i===jl)if(a===ct)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Hl)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Gl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Wl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===jl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Hl)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Gl)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Wl)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===jl)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===sh||i===lh||i===uh||i===ch)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===sh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===lh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===uh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ch)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===fh||i===dh||i===hh)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===fh||i===dh)return a===ct?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===hh)return a===ct?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ph||i===mh||i===gh||i===vh||i===_h||i===yh||i===xh||i===Sh||i===Eh||i===Mh||i===wh||i===Th||i===Ah||i===Ch)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===ph)return a===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===mh)return a===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===gh)return a===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===vh)return a===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===_h)return a===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===yh)return a===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===xh)return a===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Sh)return a===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Eh)return a===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Mh)return a===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===wh)return a===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Th)return a===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ah)return a===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ch)return a===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Xl||i===Rh||i===bh)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===Xl)return a===ct?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Rh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===bh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===zx||i===Ph||i===Dh||i===Lh)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===Xl)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Ph)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Dh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Lh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ia?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class DL extends Tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class wl extends Zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const LL={type:"move"};class Nf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,a=null;const s=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),d=this._getHandJoint(u,y);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=c.position.distanceTo(f.position),p=.02,g=.005;u.inputState.pinching&&h>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(LL)))}return s!==null&&(s.visible=r!==null),l!==null&&(l.visible=o!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new wl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const NL=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,IL=`
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

}`;class UL{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Kt,o=e.properties.get(r);o.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new ur({vertexShader:NL,fragmentShader:IL,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new yi(new pc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class OL extends pa{constructor(e,n){super();const i=this;let r=null,o=1,a=null,s="local-floor",l=1,u=null,c=null,f=null,h=null,p=null,g=null;const y=new UL,m=n.getContextAttributes();let d=null,_=null;const v=[],x=[],b=new Ze;let T=null;const A=new Tn;A.layers.enable(1),A.viewport=new Ut;const C=new Tn;C.layers.enable(2),C.viewport=new Ut;const w=[A,C],S=new DL;S.layers.enable(1),S.layers.enable(2);let D=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ne=v[j];return ne===void 0&&(ne=new Nf,v[j]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(j){let ne=v[j];return ne===void 0&&(ne=new Nf,v[j]=ne),ne.getGripSpace()},this.getHand=function(j){let ne=v[j];return ne===void 0&&(ne=new Nf,v[j]=ne),ne.getHandSpace()};function V(j){const ne=x.indexOf(j.inputSource);if(ne===-1)return;const de=v[ne];de!==void 0&&(de.update(j.inputSource,j.frame,u||a),de.dispatchEvent({type:j.type,data:j.inputSource}))}function q(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",K);for(let j=0;j<v.length;j++){const ne=x[j];ne!==null&&(x[j]=null,v[j].disconnect(ne))}D=null,H=null,y.reset(),e.setRenderTarget(d),p=null,h=null,f=null,r=null,_=null,je.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){o=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(j){u=j},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",q),r.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await n.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(b),r.renderState.layers===void 0){const ne={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(r,n,ne),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Xr(p.framebufferWidth,p.framebufferHeight,{format:Hn,type:Ai,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ne=null,de=null,ce=null;m.depth&&(ce=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ne=m.stencil?ra:jo,de=m.stencil?ia:jr);const Pe={colorFormat:n.RGBA8,depthFormat:ce,scaleFactor:o};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(Pe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),_=new Xr(h.textureWidth,h.textureHeight,{format:Hn,type:Ai,depthTexture:new iS(h.textureWidth,h.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(s),je.setContext(r),je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function K(j){for(let ne=0;ne<j.removed.length;ne++){const de=j.removed[ne],ce=x.indexOf(de);ce>=0&&(x[ce]=null,v[ce].disconnect(de))}for(let ne=0;ne<j.added.length;ne++){const de=j.added[ne];let ce=x.indexOf(de);if(ce===-1){for(let De=0;De<v.length;De++)if(De>=x.length){x.push(de),ce=De;break}else if(x[De]===null){x[De]=de,ce=De;break}if(ce===-1)break}const Pe=v[ce];Pe&&Pe.connect(de)}}const W=new B,Z=new B;function N(j,ne,de){W.setFromMatrixPosition(ne.matrixWorld),Z.setFromMatrixPosition(de.matrixWorld);const ce=W.distanceTo(Z),Pe=ne.projectionMatrix.elements,De=de.projectionMatrix.elements,He=Pe[14]/(Pe[10]-1),rt=Pe[14]/(Pe[10]+1),P=(Pe[9]+1)/Pe[5],dt=(Pe[9]-1)/Pe[5],Re=(Pe[8]-1)/Pe[0],qe=(De[8]+1)/De[0],ge=He*Re,st=He*qe,Ne=ce/(-Re+qe),Oe=Ne*-Re;ne.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Oe),j.translateZ(Ne),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const R=He+Ne,M=rt+Ne,z=ge-Oe,ee=st+(ce-Oe),re=P*rt/M*R,J=dt*rt/M*R;j.projectionMatrix.makePerspective(z,ee,re,J,R,M),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function X(j,ne){ne===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ne.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;y.texture!==null&&(j.near=y.depthNear,j.far=y.depthFar),S.near=C.near=A.near=j.near,S.far=C.far=A.far=j.far,(D!==S.near||H!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),D=S.near,H=S.far,A.near=D,A.far=H,C.near=D,C.far=H,A.updateProjectionMatrix(),C.updateProjectionMatrix(),j.updateProjectionMatrix());const ne=j.parent,de=S.cameras;X(S,ne);for(let ce=0;ce<de.length;ce++)X(de[ce],ne);de.length===2?N(S,A,C):S.projectionMatrix.copy(A.projectionMatrix),$(j,S,ne)};function $(j,ne,de){de===null?j.matrix.copy(ne.matrixWorld):(j.matrix.copy(de.matrixWorld),j.matrix.invert(),j.matrix.multiply(ne.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ne.projectionMatrix),j.projectionMatrixInverse.copy(ne.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Nh*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(j){l=j,h!==null&&(h.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(S)};let oe=null;function Ee(j,ne){if(c=ne.getViewerPose(u||a),g=ne,c!==null){const de=c.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let ce=!1;de.length!==S.cameras.length&&(S.cameras.length=0,ce=!0);for(let De=0;De<de.length;De++){const He=de[De];let rt=null;if(p!==null)rt=p.getViewport(He);else{const dt=f.getViewSubImage(h,He);rt=dt.viewport,De===0&&(e.setRenderTargetTextures(_,dt.colorTexture,h.ignoreDepthValues?void 0:dt.depthStencilTexture),e.setRenderTarget(_))}let P=w[De];P===void 0&&(P=new Tn,P.layers.enable(De),P.viewport=new Ut,w[De]=P),P.matrix.fromArray(He.transform.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale),P.projectionMatrix.fromArray(He.projectionMatrix),P.projectionMatrixInverse.copy(P.projectionMatrix).invert(),P.viewport.set(rt.x,rt.y,rt.width,rt.height),De===0&&(S.matrix.copy(P.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ce===!0&&S.cameras.push(P)}const Pe=r.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")){const De=f.getDepthInformation(de[0]);De&&De.isValid&&De.texture&&y.init(e,De,r.renderState)}}for(let de=0;de<v.length;de++){const ce=x[de],Pe=v[de];ce!==null&&Pe!==void 0&&Pe.update(ce,ne,u||a)}oe&&oe(j,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),g=null}const je=new nS;je.setAnimationLoop(Ee),this.setAnimationLoop=function(j){oe=j},this.dispose=function(){}}}const Mr=new Ci,FL=new Rt;function kL(t,e){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Qx(t)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,_,v,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?o(m,d):d.isMeshToonMaterial?(o(m,d),f(m,d)):d.isMeshPhongMaterial?(o(m,d),c(m,d)):d.isMeshStandardMaterial?(o(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,x)):d.isMeshMatcapMaterial?(o(m,d),g(m,d)):d.isMeshDepthMaterial?o(m,d):d.isMeshDistanceMaterial?(o(m,d),y(m,d)):d.isMeshNormalMaterial?o(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&s(m,d)):d.isPointsMaterial?l(m,d,_,v):d.isSpriteMaterial?u(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function o(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===cn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===cn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const _=e.get(d),v=_.envMap,x=_.envMapRotation;v&&(m.envMap.value=v,Mr.copy(x),Mr.x*=-1,Mr.y*=-1,Mr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Mr.y*=-1,Mr.z*=-1),m.envMapRotation.value.setFromMatrix4(FL.makeRotationFromEuler(Mr)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function s(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,_,v){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*_,m.scale.value=v*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,_){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===cn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function y(m,d){const _=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function BL(t,e,n,i){let r={},o={},a=[];const s=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,v){const x=v.program;i.uniformBlockBinding(_,x)}function u(_,v){let x=r[_.id];x===void 0&&(g(_),x=c(_),r[_.id]=x,_.addEventListener("dispose",m));const b=v.program;i.updateUBOMapping(_,b);const T=e.render.frame;o[_.id]!==T&&(h(_),o[_.id]=T)}function c(_){const v=f();_.__bindingPointIndex=v;const x=t.createBuffer(),b=_.__size,T=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,b,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,x),x}function f(){for(let _=0;_<s;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const v=r[_.id],x=_.uniforms,b=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let T=0,A=x.length;T<A;T++){const C=Array.isArray(x[T])?x[T]:[x[T]];for(let w=0,S=C.length;w<S;w++){const D=C[w];if(p(D,T,w,b)===!0){const H=D.__offset,V=Array.isArray(D.value)?D.value:[D.value];let q=0;for(let K=0;K<V.length;K++){const W=V[K],Z=y(W);typeof W=="number"||typeof W=="boolean"?(D.__data[0]=W,t.bufferSubData(t.UNIFORM_BUFFER,H+q,D.__data)):W.isMatrix3?(D.__data[0]=W.elements[0],D.__data[1]=W.elements[1],D.__data[2]=W.elements[2],D.__data[3]=0,D.__data[4]=W.elements[3],D.__data[5]=W.elements[4],D.__data[6]=W.elements[5],D.__data[7]=0,D.__data[8]=W.elements[6],D.__data[9]=W.elements[7],D.__data[10]=W.elements[8],D.__data[11]=0):(W.toArray(D.__data,q),q+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,H,D.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,v,x,b){const T=_.value,A=v+"_"+x;if(b[A]===void 0)return typeof T=="number"||typeof T=="boolean"?b[A]=T:b[A]=T.clone(),!0;{const C=b[A];if(typeof T=="number"||typeof T=="boolean"){if(C!==T)return b[A]=T,!0}else if(C.equals(T)===!1)return C.copy(T),!0}return!1}function g(_){const v=_.uniforms;let x=0;const b=16;for(let A=0,C=v.length;A<C;A++){const w=Array.isArray(v[A])?v[A]:[v[A]];for(let S=0,D=w.length;S<D;S++){const H=w[S],V=Array.isArray(H.value)?H.value:[H.value];for(let q=0,K=V.length;q<K;q++){const W=V[q],Z=y(W),N=x%b;N!==0&&b-N<Z.boundary&&(x+=b-N),H.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=x,x+=Z.storage}}}const T=x%b;return T>0&&(x+=b-T),_.__size=x,_.__cache={},this}function y(_){const v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function m(_){const v=_.target;v.removeEventListener("dispose",m);const x=a.indexOf(v.__bindingPointIndex);a.splice(x,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete o[v.id]}function d(){for(const _ in r)t.deleteBuffer(r[_]);a=[],r={},o={}}return{bind:l,update:u,dispose:d}}class zL{constructor(e={}){const{canvas:n=PR(),context:i=null,depth:r=!0,stencil:o=!1,alpha:a=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=a;const p=new Uint32Array(4),g=new Int32Array(4);let y=null,m=null;const d=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qn,this.toneMapping=or,this.toneMappingExposure=1;const v=this;let x=!1,b=0,T=0,A=null,C=-1,w=null;const S=new Ut,D=new Ut;let H=null;const V=new nt(0);let q=0,K=n.width,W=n.height,Z=1,N=null,X=null;const $=new Ut(0,0,K,W),oe=new Ut(0,0,K,W);let Ee=!1;const je=new tS;let j=!1,ne=!1;const de=new Rt,ce=new B,Pe=new Ut,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let He=!1;function rt(){return A===null?Z:1}let P=i;function dt(E,L){return n.getContext(E,L)}try{const E={alpha:!0,depth:r,stencil:o,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${qp}`),n.addEventListener("webglcontextlost",Y,!1),n.addEventListener("webglcontextrestored",Q,!1),n.addEventListener("webglcontextcreationerror",ue,!1),P===null){const L="webgl2";if(P=dt(L,E),P===null)throw dt(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Re,qe,ge,st,Ne,Oe,R,M,z,ee,re,J,Te,he,ve,Fe,ae,me,Ye,Ae,_e,Ue,Be,ot;function I(){Re=new $P(P),Re.init(),Ue=new PL(P,Re),qe=new zP(P,Re,e,Ue),ge=new CL(P),st=new KP(P),Ne=new hL,Oe=new bL(P,Re,ge,Ne,qe,Ue,st),R=new HP(v),M=new XP(v),z=new n2(P),Be=new kP(P,z),ee=new YP(P,z,st,Be),re=new QP(P,ee,z,st),Ye=new ZP(P,qe,Oe),Fe=new VP(Ne),J=new dL(v,R,M,Re,qe,Be,Fe),Te=new kL(v,Ne),he=new mL,ve=new SL(Re),me=new FP(v,R,M,ge,re,h,l),ae=new AL(v,re,qe),ot=new BL(P,st,qe,ge),Ae=new BP(P,Re,st),_e=new qP(P,Re,st),st.programs=J.programs,v.capabilities=qe,v.extensions=Re,v.properties=Ne,v.renderLists=he,v.shadowMap=ae,v.state=ge,v.info=st}I();const se=new OL(v,P);this.xr=se,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const E=Re.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Re.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(E){E!==void 0&&(Z=E,this.setSize(K,W,!1))},this.getSize=function(E){return E.set(K,W)},this.setSize=function(E,L,F=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=E,W=L,n.width=Math.floor(E*Z),n.height=Math.floor(L*Z),F===!0&&(n.style.width=E+"px",n.style.height=L+"px"),this.setViewport(0,0,E,L)},this.getDrawingBufferSize=function(E){return E.set(K*Z,W*Z).floor()},this.setDrawingBufferSize=function(E,L,F){K=E,W=L,Z=F,n.width=Math.floor(E*F),n.height=Math.floor(L*F),this.setViewport(0,0,E,L)},this.getCurrentViewport=function(E){return E.copy(S)},this.getViewport=function(E){return E.copy($)},this.setViewport=function(E,L,F,k){E.isVector4?$.set(E.x,E.y,E.z,E.w):$.set(E,L,F,k),ge.viewport(S.copy($).multiplyScalar(Z).round())},this.getScissor=function(E){return E.copy(oe)},this.setScissor=function(E,L,F,k){E.isVector4?oe.set(E.x,E.y,E.z,E.w):oe.set(E,L,F,k),ge.scissor(D.copy(oe).multiplyScalar(Z).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(E){ge.setScissorTest(Ee=E)},this.setOpaqueSort=function(E){N=E},this.setTransparentSort=function(E){X=E},this.getClearColor=function(E){return E.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor.apply(me,arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha.apply(me,arguments)},this.clear=function(E=!0,L=!0,F=!0){let k=0;if(E){let U=!1;if(A!==null){const le=A.texture.format;U=le===tm||le===em||le===Jp}if(U){const le=A.texture.type,pe=le===Ai||le===jr||le===gs||le===ia||le===Zp||le===Qp,Se=me.getClearColor(),Me=me.getClearAlpha(),Le=Se.r,Ie=Se.g,Ce=Se.b;pe?(p[0]=Le,p[1]=Ie,p[2]=Ce,p[3]=Me,P.clearBufferuiv(P.COLOR,0,p)):(g[0]=Le,g[1]=Ie,g[2]=Ce,g[3]=Me,P.clearBufferiv(P.COLOR,0,g))}else k|=P.COLOR_BUFFER_BIT}L&&(k|=P.DEPTH_BUFFER_BIT),F&&(k|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Y,!1),n.removeEventListener("webglcontextrestored",Q,!1),n.removeEventListener("webglcontextcreationerror",ue,!1),he.dispose(),ve.dispose(),Ne.dispose(),R.dispose(),M.dispose(),re.dispose(),Be.dispose(),ot.dispose(),J.dispose(),se.dispose(),se.removeEventListener("sessionstart",en),se.removeEventListener("sessionend",ga),Yn.stop()};function Y(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function Q(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const E=st.autoReset,L=ae.enabled,F=ae.autoUpdate,k=ae.needsUpdate,U=ae.type;I(),st.autoReset=E,ae.enabled=L,ae.autoUpdate=F,ae.needsUpdate=k,ae.type=U}function ue(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function xe(E){const L=E.target;L.removeEventListener("dispose",xe),be(L)}function be(E){lt(E),Ne.remove(E)}function lt(E){const L=Ne.get(E).programs;L!==void 0&&(L.forEach(function(F){J.releaseProgram(F)}),E.isShaderMaterial&&J.releaseShaderCache(E))}this.renderBufferDirect=function(E,L,F,k,U,le){L===null&&(L=De);const pe=U.isMesh&&U.matrixWorld.determinant()<0,Se=gc(E,L,F,k,U);ge.setMaterial(k,pe);let Me=F.index,Le=1;if(k.wireframe===!0){if(Me=ee.getWireframeAttribute(F),Me===void 0)return;Le=2}const Ie=F.drawRange,Ce=F.attributes.position;let Qe=Ie.start*Le,_t=(Ie.start+Ie.count)*Le;le!==null&&(Qe=Math.max(Qe,le.start*Le),_t=Math.min(_t,(le.start+le.count)*Le)),Me!==null?(Qe=Math.max(Qe,0),_t=Math.min(_t,Me.count)):Ce!=null&&(Qe=Math.max(Qe,0),_t=Math.min(_t,Ce.count));const yt=_t-Qe;if(yt<0||yt===1/0)return;Be.setup(U,k,Se,F,Me);let fn,Je=Ae;if(Me!==null&&(fn=z.get(Me),Je=_e,Je.setIndex(fn)),U.isMesh)k.wireframe===!0?(ge.setLineWidth(k.wireframeLinewidth*rt()),Je.setMode(P.LINES)):Je.setMode(P.TRIANGLES);else if(U.isLine){let we=k.linewidth;we===void 0&&(we=1),ge.setLineWidth(we*rt()),U.isLineSegments?Je.setMode(P.LINES):U.isLineLoop?Je.setMode(P.LINE_LOOP):Je.setMode(P.LINE_STRIP)}else U.isPoints?Je.setMode(P.POINTS):U.isSprite&&Je.setMode(P.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Je.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Re.get("WEBGL_multi_draw"))Je.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const we=U._multiDrawStarts,Ft=U._multiDrawCounts,et=U._multiDrawCount,Nn=Me?z.get(Me).bytesPerElement:1,io=Ne.get(k).currentProgram.getUniforms();for(let dn=0;dn<et;dn++)io.setValue(P,"_gl_DrawID",dn),Je.render(we[dn]/Nn,Ft[dn])}else if(U.isInstancedMesh)Je.renderInstances(Qe,yt,U.count);else if(F.isInstancedBufferGeometry){const we=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,Ft=Math.min(F.instanceCount,we);Je.renderInstances(Qe,yt,Ft)}else Je.render(Qe,yt)};function ze(E,L,F){E.transparent===!0&&E.side===pi&&E.forceSinglePass===!1?(E.side=cn,E.needsUpdate=!0,to(E,L,F),E.side=lr,E.needsUpdate=!0,to(E,L,F),E.side=pi):to(E,L,F)}this.compile=function(E,L,F=null){F===null&&(F=E),m=ve.get(F),m.init(L),_.push(m),F.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),E!==F&&E.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),m.setupLights();const k=new Set;return E.traverse(function(U){const le=U.material;if(le)if(Array.isArray(le))for(let pe=0;pe<le.length;pe++){const Se=le[pe];ze(Se,F,U),k.add(Se)}else ze(le,F,U),k.add(le)}),_.pop(),m=null,k},this.compileAsync=function(E,L,F=null){const k=this.compile(E,L,F);return new Promise(U=>{function le(){if(k.forEach(function(pe){Ne.get(pe).currentProgram.isReady()&&k.delete(pe)}),k.size===0){U(E);return}setTimeout(le,10)}Re.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let Ve=null;function Ln(E){Ve&&Ve(E)}function en(){Yn.stop()}function ga(){Yn.start()}const Yn=new nS;Yn.setAnimationLoop(Ln),typeof self<"u"&&Yn.setContext(self),this.setAnimationLoop=function(E){Ve=E,se.setAnimationLoop(E),E===null?Yn.stop():Yn.start()},se.addEventListener("sessionstart",en),se.addEventListener("sessionend",ga),this.render=function(E,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(L),L=se.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,L,A),m=ve.get(E,_.length),m.init(L),_.push(m),de.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),je.setFromProjectionMatrix(de),ne=this.localClippingEnabled,j=Fe.init(this.clippingPlanes,ne),y=he.get(E,d.length),y.init(),d.push(y),se.enabled===!0&&se.isPresenting===!0){const le=v.xr.getDepthSensingMesh();le!==null&&gr(le,L,-1/0,v.sortObjects)}gr(E,L,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(N,X),He=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,He&&me.addToRenderList(y,E),this.info.render.frame++,j===!0&&Fe.beginShadows();const F=m.state.shadowsArray;ae.render(F,E,L),j===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=y.opaque,U=y.transmissive;if(m.setupLights(),L.isArrayCamera){const le=L.cameras;if(U.length>0)for(let pe=0,Se=le.length;pe<Se;pe++){const Me=le[pe];Jr(k,U,E,Me)}He&&me.render(E);for(let pe=0,Se=le.length;pe<Se;pe++){const Me=le[pe];vr(y,E,Me,Me.viewport)}}else U.length>0&&Jr(k,U,E,L),He&&me.render(E),vr(y,E,L);A!==null&&(Oe.updateMultisampleRenderTarget(A),Oe.updateRenderTargetMipmap(A)),E.isScene===!0&&E.onAfterRender(v,E,L),Be.resetDefaultState(),C=-1,w=null,_.pop(),_.length>0?(m=_[_.length-1],j===!0&&Fe.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,d.pop(),d.length>0?y=d[d.length-1]:y=null};function gr(E,L,F,k){if(E.visible===!1)return;if(E.layers.test(L.layers)){if(E.isGroup)F=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(L);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||je.intersectsSprite(E)){k&&Pe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(de);const pe=re.update(E),Se=E.material;Se.visible&&y.push(E,pe,Se,F,Pe.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||je.intersectsObject(E))){const pe=re.update(E),Se=E.material;if(k&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Pe.copy(E.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Pe.copy(pe.boundingSphere.center)),Pe.applyMatrix4(E.matrixWorld).applyMatrix4(de)),Array.isArray(Se)){const Me=pe.groups;for(let Le=0,Ie=Me.length;Le<Ie;Le++){const Ce=Me[Le],Qe=Se[Ce.materialIndex];Qe&&Qe.visible&&y.push(E,pe,Qe,F,Pe.z,Ce)}}else Se.visible&&y.push(E,pe,Se,F,Pe.z,null)}}const le=E.children;for(let pe=0,Se=le.length;pe<Se;pe++)gr(le[pe],L,F,k)}function vr(E,L,F,k){const U=E.opaque,le=E.transmissive,pe=E.transparent;m.setupLightsView(F),j===!0&&Fe.setGlobalState(v.clippingPlanes,F),k&&ge.viewport(S.copy(k)),U.length>0&&Di(U,L,F),le.length>0&&Di(le,L,F),pe.length>0&&Di(pe,L,F),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Jr(E,L,F,k){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[k.id]===void 0&&(m.state.transmissionRenderTarget[k.id]=new Xr(1,1,{generateMipmaps:!0,type:Re.has("EXT_color_buffer_half_float")||Re.has("EXT_color_buffer_float")?bs:Ai,minFilter:Ir,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const le=m.state.transmissionRenderTarget[k.id],pe=k.viewport||S;le.setSize(pe.z,pe.w);const Se=v.getRenderTarget();v.setRenderTarget(le),v.getClearColor(V),q=v.getClearAlpha(),q<1&&v.setClearColor(16777215,.5),He?me.render(F):v.clear();const Me=v.toneMapping;v.toneMapping=or;const Le=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),m.setupLightsView(k),j===!0&&Fe.setGlobalState(v.clippingPlanes,k),Di(E,F,k),Oe.updateMultisampleRenderTarget(le),Oe.updateRenderTargetMipmap(le),Re.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let Ce=0,Qe=L.length;Ce<Qe;Ce++){const _t=L[Ce],yt=_t.object,fn=_t.geometry,Je=_t.material,we=_t.group;if(Je.side===pi&&yt.layers.test(k.layers)){const Ft=Je.side;Je.side=cn,Je.needsUpdate=!0,eo(yt,F,k,fn,Je,we),Je.side=Ft,Je.needsUpdate=!0,Ie=!0}}Ie===!0&&(Oe.updateMultisampleRenderTarget(le),Oe.updateRenderTargetMipmap(le))}v.setRenderTarget(Se),v.setClearColor(V,q),Le!==void 0&&(k.viewport=Le),v.toneMapping=Me}function Di(E,L,F){const k=L.isScene===!0?L.overrideMaterial:null;for(let U=0,le=E.length;U<le;U++){const pe=E[U],Se=pe.object,Me=pe.geometry,Le=k===null?pe.material:k,Ie=pe.group;Se.layers.test(F.layers)&&eo(Se,L,F,Me,Le,Ie)}}function eo(E,L,F,k,U,le){E.onBeforeRender(v,L,F,k,U,le),E.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),U.transparent===!0&&U.side===pi&&U.forceSinglePass===!1?(U.side=cn,U.needsUpdate=!0,v.renderBufferDirect(F,L,k,U,E,le),U.side=lr,U.needsUpdate=!0,v.renderBufferDirect(F,L,k,U,E,le),U.side=pi):v.renderBufferDirect(F,L,k,U,E,le),E.onAfterRender(v,L,F,k,U,le)}function to(E,L,F){L.isScene!==!0&&(L=De);const k=Ne.get(E),U=m.state.lights,le=m.state.shadowsArray,pe=U.state.version,Se=J.getParameters(E,U.state,le,L,F),Me=J.getProgramCacheKey(Se);let Le=k.programs;k.environment=E.isMeshStandardMaterial?L.environment:null,k.fog=L.fog,k.envMap=(E.isMeshStandardMaterial?M:R).get(E.envMap||k.environment),k.envMapRotation=k.environment!==null&&E.envMap===null?L.environmentRotation:E.envMapRotation,Le===void 0&&(E.addEventListener("dispose",xe),Le=new Map,k.programs=Le);let Ie=Le.get(Me);if(Ie!==void 0){if(k.currentProgram===Ie&&k.lightsStateVersion===pe)return va(E,Se),Ie}else Se.uniforms=J.getUniforms(E),E.onBeforeCompile(Se,v),Ie=J.acquireProgram(Se,Me),Le.set(Me,Ie),k.uniforms=Se.uniforms;const Ce=k.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ce.clippingPlanes=Fe.uniform),va(E,Se),k.needsLights=Xe(E),k.lightsStateVersion=pe,k.needsLights&&(Ce.ambientLightColor.value=U.state.ambient,Ce.lightProbe.value=U.state.probe,Ce.directionalLights.value=U.state.directional,Ce.directionalLightShadows.value=U.state.directionalShadow,Ce.spotLights.value=U.state.spot,Ce.spotLightShadows.value=U.state.spotShadow,Ce.rectAreaLights.value=U.state.rectArea,Ce.ltc_1.value=U.state.rectAreaLTC1,Ce.ltc_2.value=U.state.rectAreaLTC2,Ce.pointLights.value=U.state.point,Ce.pointLightShadows.value=U.state.pointShadow,Ce.hemisphereLights.value=U.state.hemi,Ce.directionalShadowMap.value=U.state.directionalShadowMap,Ce.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Ce.spotShadowMap.value=U.state.spotShadowMap,Ce.spotLightMatrix.value=U.state.spotLightMatrix,Ce.spotLightMap.value=U.state.spotLightMap,Ce.pointShadowMap.value=U.state.pointShadowMap,Ce.pointShadowMatrix.value=U.state.pointShadowMatrix),k.currentProgram=Ie,k.uniformsList=null,Ie}function no(E){if(E.uniformsList===null){const L=E.currentProgram.getUniforms();E.uniformsList=$l.seqWithValue(L.seq,E.uniforms)}return E.uniformsList}function va(E,L){const F=Ne.get(E);F.outputColorSpace=L.outputColorSpace,F.batching=L.batching,F.batchingColor=L.batchingColor,F.instancing=L.instancing,F.instancingColor=L.instancingColor,F.instancingMorph=L.instancingMorph,F.skinning=L.skinning,F.morphTargets=L.morphTargets,F.morphNormals=L.morphNormals,F.morphColors=L.morphColors,F.morphTargetsCount=L.morphTargetsCount,F.numClippingPlanes=L.numClippingPlanes,F.numIntersection=L.numClipIntersection,F.vertexAlphas=L.vertexAlphas,F.vertexTangents=L.vertexTangents,F.toneMapping=L.toneMapping}function gc(E,L,F,k,U){L.isScene!==!0&&(L=De),Oe.resetTextureUnits();const le=L.fog,pe=k.isMeshStandardMaterial?L.environment:null,Se=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:mr,Me=(k.isMeshStandardMaterial?M:R).get(k.envMap||pe),Le=k.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Ie=!!F.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ce=!!F.morphAttributes.position,Qe=!!F.morphAttributes.normal,_t=!!F.morphAttributes.color;let yt=or;k.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(yt=v.toneMapping);const fn=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Je=fn!==void 0?fn.length:0,we=Ne.get(k),Ft=m.state.lights;if(j===!0&&(ne===!0||E!==w)){const Sn=E===w&&k.id===C;Fe.setState(k,E,Sn)}let et=!1;k.version===we.__version?(we.needsLights&&we.lightsStateVersion!==Ft.state.version||we.outputColorSpace!==Se||U.isBatchedMesh&&we.batching===!1||!U.isBatchedMesh&&we.batching===!0||U.isBatchedMesh&&we.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&we.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&we.instancing===!1||!U.isInstancedMesh&&we.instancing===!0||U.isSkinnedMesh&&we.skinning===!1||!U.isSkinnedMesh&&we.skinning===!0||U.isInstancedMesh&&we.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&we.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&we.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&we.instancingMorph===!1&&U.morphTexture!==null||we.envMap!==Me||k.fog===!0&&we.fog!==le||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==Fe.numPlanes||we.numIntersection!==Fe.numIntersection)||we.vertexAlphas!==Le||we.vertexTangents!==Ie||we.morphTargets!==Ce||we.morphNormals!==Qe||we.morphColors!==_t||we.toneMapping!==yt||we.morphTargetsCount!==Je)&&(et=!0):(et=!0,we.__version=k.version);let Nn=we.currentProgram;et===!0&&(Nn=to(k,L,U));let io=!1,dn=!1,_c=!1;const Mt=Nn.getUniforms(),Li=we.uniforms;if(ge.useProgram(Nn.program)&&(io=!0,dn=!0,_c=!0),k.id!==C&&(C=k.id,dn=!0),io||w!==E){Mt.setValue(P,"projectionMatrix",E.projectionMatrix),Mt.setValue(P,"viewMatrix",E.matrixWorldInverse);const Sn=Mt.map.cameraPosition;Sn!==void 0&&Sn.setValue(P,ce.setFromMatrixPosition(E.matrixWorld)),qe.logarithmicDepthBuffer&&Mt.setValue(P,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Mt.setValue(P,"isOrthographic",E.isOrthographicCamera===!0),w!==E&&(w=E,dn=!0,_c=!0)}if(U.isSkinnedMesh){Mt.setOptional(P,U,"bindMatrix"),Mt.setOptional(P,U,"bindMatrixInverse");const Sn=U.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),Mt.setValue(P,"boneTexture",Sn.boneTexture,Oe))}U.isBatchedMesh&&(Mt.setOptional(P,U,"batchingTexture"),Mt.setValue(P,"batchingTexture",U._matricesTexture,Oe),Mt.setOptional(P,U,"batchingIdTexture"),Mt.setValue(P,"batchingIdTexture",U._indirectTexture,Oe),Mt.setOptional(P,U,"batchingColorTexture"),U._colorsTexture!==null&&Mt.setValue(P,"batchingColorTexture",U._colorsTexture,Oe));const yc=F.morphAttributes;if((yc.position!==void 0||yc.normal!==void 0||yc.color!==void 0)&&Ye.update(U,F,Nn),(dn||we.receiveShadow!==U.receiveShadow)&&(we.receiveShadow=U.receiveShadow,Mt.setValue(P,"receiveShadow",U.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Li.envMap.value=Me,Li.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&L.environment!==null&&(Li.envMapIntensity.value=L.environmentIntensity),dn&&(Mt.setValue(P,"toneMappingExposure",v.toneMappingExposure),we.needsLights&&vc(Li,_c),le&&k.fog===!0&&Te.refreshFogUniforms(Li,le),Te.refreshMaterialUniforms(Li,k,Z,W,m.state.transmissionRenderTarget[E.id]),$l.upload(P,no(we),Li,Oe)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&($l.upload(P,no(we),Li,Oe),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Mt.setValue(P,"center",U.center),Mt.setValue(P,"modelViewMatrix",U.modelViewMatrix),Mt.setValue(P,"normalMatrix",U.normalMatrix),Mt.setValue(P,"modelMatrix",U.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Sn=k.uniformsGroups;for(let xc=0,uS=Sn.length;xc<uS;xc++){const am=Sn[xc];ot.update(am,Nn),ot.bind(am,Nn)}}return Nn}function vc(E,L){E.ambientLightColor.needsUpdate=L,E.lightProbe.needsUpdate=L,E.directionalLights.needsUpdate=L,E.directionalLightShadows.needsUpdate=L,E.pointLights.needsUpdate=L,E.pointLightShadows.needsUpdate=L,E.spotLights.needsUpdate=L,E.spotLightShadows.needsUpdate=L,E.rectAreaLights.needsUpdate=L,E.hemisphereLights.needsUpdate=L}function Xe(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(E,L,F){Ne.get(E.texture).__webglTexture=L,Ne.get(E.depthTexture).__webglTexture=F;const k=Ne.get(E);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=F===void 0,k.__autoAllocateDepthBuffer||Re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,L){const F=Ne.get(E);F.__webglFramebuffer=L,F.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(E,L=0,F=0){A=E,b=L,T=F;let k=!0,U=null,le=!1,pe=!1;if(E){const Me=Ne.get(E);Me.__useDefaultFramebuffer!==void 0?(ge.bindFramebuffer(P.FRAMEBUFFER,null),k=!1):Me.__webglFramebuffer===void 0?Oe.setupRenderTarget(E):Me.__hasExternalTextures&&Oe.rebindTextures(E,Ne.get(E.texture).__webglTexture,Ne.get(E.depthTexture).__webglTexture);const Le=E.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(pe=!0);const Ie=Ne.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ie[L])?U=Ie[L][F]:U=Ie[L],le=!0):E.samples>0&&Oe.useMultisampledRTT(E)===!1?U=Ne.get(E).__webglMultisampledFramebuffer:Array.isArray(Ie)?U=Ie[F]:U=Ie,S.copy(E.viewport),D.copy(E.scissor),H=E.scissorTest}else S.copy($).multiplyScalar(Z).floor(),D.copy(oe).multiplyScalar(Z).floor(),H=Ee;if(ge.bindFramebuffer(P.FRAMEBUFFER,U)&&k&&ge.drawBuffers(E,U),ge.viewport(S),ge.scissor(D),ge.setScissorTest(H),le){const Me=Ne.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+L,Me.__webglTexture,F)}else if(pe){const Me=Ne.get(E.texture),Le=L||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Me.__webglTexture,F||0,Le)}C=-1},this.readRenderTargetPixels=function(E,L,F,k,U,le,pe){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Ne.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&pe!==void 0&&(Se=Se[pe]),Se){ge.bindFramebuffer(P.FRAMEBUFFER,Se);try{const Me=E.texture,Le=Me.format,Ie=Me.type;if(!qe.textureFormatReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qe.textureTypeReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=E.width-k&&F>=0&&F<=E.height-U&&P.readPixels(L,F,k,U,Ue.convert(Le),Ue.convert(Ie),le)}finally{const Me=A!==null?Ne.get(A).__webglFramebuffer:null;ge.bindFramebuffer(P.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(E,L,F,k,U,le,pe){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=Ne.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&pe!==void 0&&(Se=Se[pe]),Se){ge.bindFramebuffer(P.FRAMEBUFFER,Se);try{const Me=E.texture,Le=Me.format,Ie=Me.type;if(!qe.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qe.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=E.width-k&&F>=0&&F<=E.height-U){const Ce=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ce),P.bufferData(P.PIXEL_PACK_BUFFER,le.byteLength,P.STREAM_READ),P.readPixels(L,F,k,U,Ue.convert(Le),Ue.convert(Ie),0),P.flush();const Qe=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);await DR(P,Qe,4);try{P.bindBuffer(P.PIXEL_PACK_BUFFER,Ce),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,le)}finally{P.deleteBuffer(Ce),P.deleteSync(Qe)}return le}}finally{const Me=A!==null?Ne.get(A).__webglFramebuffer:null;ge.bindFramebuffer(P.FRAMEBUFFER,Me)}}},this.copyFramebufferToTexture=function(E,L=null,F=0){E.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,E=arguments[1]);const k=Math.pow(2,-F),U=Math.floor(E.image.width*k),le=Math.floor(E.image.height*k),pe=L!==null?L.x:0,Se=L!==null?L.y:0;Oe.setTexture2D(E,0),P.copyTexSubImage2D(P.TEXTURE_2D,F,0,0,pe,Se,U,le),ge.unbindTexture()},this.copyTextureToTexture=function(E,L,F=null,k=null,U=0){E.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,E=arguments[1],L=arguments[2],U=arguments[3]||0,F=null);let le,pe,Se,Me,Le,Ie;F!==null?(le=F.max.x-F.min.x,pe=F.max.y-F.min.y,Se=F.min.x,Me=F.min.y):(le=E.image.width,pe=E.image.height,Se=0,Me=0),k!==null?(Le=k.x,Ie=k.y):(Le=0,Ie=0);const Ce=Ue.convert(L.format),Qe=Ue.convert(L.type);Oe.setTexture2D(L,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,L.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,L.unpackAlignment);const _t=P.getParameter(P.UNPACK_ROW_LENGTH),yt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),fn=P.getParameter(P.UNPACK_SKIP_PIXELS),Je=P.getParameter(P.UNPACK_SKIP_ROWS),we=P.getParameter(P.UNPACK_SKIP_IMAGES),Ft=E.isCompressedTexture?E.mipmaps[U]:E.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,Ft.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ft.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Se),P.pixelStorei(P.UNPACK_SKIP_ROWS,Me),E.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,U,Le,Ie,le,pe,Ce,Qe,Ft.data):E.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,U,Le,Ie,Ft.width,Ft.height,Ce,Ft.data):P.texSubImage2D(P.TEXTURE_2D,U,Le,Ie,le,pe,Ce,Qe,Ft),P.pixelStorei(P.UNPACK_ROW_LENGTH,_t),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,yt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,fn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Je),P.pixelStorei(P.UNPACK_SKIP_IMAGES,we),U===0&&L.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),ge.unbindTexture()},this.copyTextureToTexture3D=function(E,L,F=null,k=null,U=0){E.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,k=arguments[1]||null,E=arguments[2],L=arguments[3],U=arguments[4]||0);let le,pe,Se,Me,Le,Ie,Ce,Qe,_t;const yt=E.isCompressedTexture?E.mipmaps[U]:E.image;F!==null?(le=F.max.x-F.min.x,pe=F.max.y-F.min.y,Se=F.max.z-F.min.z,Me=F.min.x,Le=F.min.y,Ie=F.min.z):(le=yt.width,pe=yt.height,Se=yt.depth,Me=0,Le=0,Ie=0),k!==null?(Ce=k.x,Qe=k.y,_t=k.z):(Ce=0,Qe=0,_t=0);const fn=Ue.convert(L.format),Je=Ue.convert(L.type);let we;if(L.isData3DTexture)Oe.setTexture3D(L,0),we=P.TEXTURE_3D;else if(L.isDataArrayTexture||L.isCompressedArrayTexture)Oe.setTexture2DArray(L,0),we=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,L.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,L.unpackAlignment);const Ft=P.getParameter(P.UNPACK_ROW_LENGTH),et=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Nn=P.getParameter(P.UNPACK_SKIP_PIXELS),io=P.getParameter(P.UNPACK_SKIP_ROWS),dn=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,yt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,yt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Me),P.pixelStorei(P.UNPACK_SKIP_ROWS,Le),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ie),E.isDataTexture||E.isData3DTexture?P.texSubImage3D(we,U,Ce,Qe,_t,le,pe,Se,fn,Je,yt.data):L.isCompressedArrayTexture?P.compressedTexSubImage3D(we,U,Ce,Qe,_t,le,pe,Se,fn,yt.data):P.texSubImage3D(we,U,Ce,Qe,_t,le,pe,Se,fn,Je,yt),P.pixelStorei(P.UNPACK_ROW_LENGTH,Ft),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,et),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Nn),P.pixelStorei(P.UNPACK_SKIP_ROWS,io),P.pixelStorei(P.UNPACK_SKIP_IMAGES,dn),U===0&&L.generateMipmaps&&P.generateMipmap(we),ge.unbindTexture()},this.initRenderTarget=function(E){Ne.get(E).__webglFramebuffer===void 0&&Oe.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Oe.setTextureCube(E,0):E.isData3DTexture?Oe.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Oe.setTexture2DArray(E,0):Oe.setTexture2D(E,0),ge.unbindTexture()},this.resetState=function(){b=0,T=0,A=null,ge.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===nm?"display-p3":"srgb",n.unpackColorSpace=tt.workingColorSpace===dc?"display-p3":"srgb"}}class VL extends Zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ci,this.environmentIntensity=1,this.environmentRotation=new Ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class lS extends Ns{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Kv=new Rt,Uh=new Xx,Tl=new hc,Al=new B;class HL extends Zt{constructor(e=new Pi,n=new lS){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,o=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Tl.copy(i.boundingSphere),Tl.applyMatrix4(r),Tl.radius+=o,e.ray.intersectsSphere(Tl)===!1)return;Kv.copy(r).invert(),Uh.copy(e.ray).applyMatrix4(Kv);const s=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,u=i.index,f=i.attributes.position;if(u!==null){const h=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=h,y=p;g<y;g++){const m=u.getX(g);Al.fromBufferAttribute(f,m),Zv(Al,m,l,r,e,n,this)}}else{const h=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let g=h,y=p;g<y;g++)Al.fromBufferAttribute(f,g),Zv(Al,g,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=r.length;o<a;o++){const s=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=o}}}}}function Zv(t,e,n,i,r,o,a){const s=Uh.distanceSqToPoint(t);if(s<n){const l=new B;Uh.closestPointToPoint(t,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;o.push({distance:u,distanceToRay:Math.sqrt(s),point:l,index:e,face:null,object:a})}}class GL extends Kt{constructor(e,n,i,r,o,a,s,l,u){super(e,n,i,r,o,a,s,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class rm extends Pi{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const o=[],a=[];s(r),u(i),c(),this.setAttribute("position",new oi(o,3)),this.setAttribute("normal",new oi(o.slice(),3)),this.setAttribute("uv",new oi(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function s(_){const v=new B,x=new B,b=new B;for(let T=0;T<n.length;T+=3)p(n[T+0],v),p(n[T+1],x),p(n[T+2],b),l(v,x,b,_)}function l(_,v,x,b){const T=b+1,A=[];for(let C=0;C<=T;C++){A[C]=[];const w=_.clone().lerp(x,C/T),S=v.clone().lerp(x,C/T),D=T-C;for(let H=0;H<=D;H++)H===0&&C===T?A[C][H]=w:A[C][H]=w.clone().lerp(S,H/D)}for(let C=0;C<T;C++)for(let w=0;w<2*(T-C)-1;w++){const S=Math.floor(w/2);w%2===0?(h(A[C][S+1]),h(A[C+1][S]),h(A[C][S])):(h(A[C][S+1]),h(A[C+1][S+1]),h(A[C+1][S]))}}function u(_){const v=new B;for(let x=0;x<o.length;x+=3)v.x=o[x+0],v.y=o[x+1],v.z=o[x+2],v.normalize().multiplyScalar(_),o[x+0]=v.x,o[x+1]=v.y,o[x+2]=v.z}function c(){const _=new B;for(let v=0;v<o.length;v+=3){_.x=o[v+0],_.y=o[v+1],_.z=o[v+2];const x=m(_)/2/Math.PI+.5,b=d(_)/Math.PI+.5;a.push(x,1-b)}g(),f()}function f(){for(let _=0;_<a.length;_+=6){const v=a[_+0],x=a[_+2],b=a[_+4],T=Math.max(v,x,b),A=Math.min(v,x,b);T>.9&&A<.1&&(v<.2&&(a[_+0]+=1),x<.2&&(a[_+2]+=1),b<.2&&(a[_+4]+=1))}}function h(_){o.push(_.x,_.y,_.z)}function p(_,v){const x=_*3;v.x=e[x+0],v.y=e[x+1],v.z=e[x+2]}function g(){const _=new B,v=new B,x=new B,b=new B,T=new Ze,A=new Ze,C=new Ze;for(let w=0,S=0;w<o.length;w+=9,S+=6){_.set(o[w+0],o[w+1],o[w+2]),v.set(o[w+3],o[w+4],o[w+5]),x.set(o[w+6],o[w+7],o[w+8]),T.set(a[S+0],a[S+1]),A.set(a[S+2],a[S+3]),C.set(a[S+4],a[S+5]),b.copy(_).add(v).add(x).divideScalar(3);const D=m(b);y(T,S+0,_,D),y(A,S+2,v,D),y(C,S+4,x,D)}}function y(_,v,x,b){b<0&&_.x===1&&(a[v]=_.x-1),x.x===0&&x.z===0&&(a[v]=b/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function d(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rm(e.vertices,e.indices,e.radius,e.details)}}class om extends rm{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,o,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new om(e.radius,e.detail)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qp);const WL=`
vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 permute(vec4 x) {
  return mod289(((x*34.0)+10.0)*x);
}
vec4 taylorInvSqrt(vec4 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}
float snoise(vec3 v) {
  const vec2  C = vec2(1.0/6.0, 1.0/3.0);
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i  = floor(v + dot(v, C.yyy));
  vec3 x0 =   v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;
  i = mod289(i);
  vec4 p = permute(permute(permute(
              i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0));
  float n_ = 0.142857142857;
  vec3  ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);
  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;
  vec4 m = max(0.5 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 105.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1),
                               dot(p2,x2), dot(p3,x3)));
}
`,jL=()=>{const t=te.useRef(null);return te.useEffect(()=>{let e,n,i,r,o,a;const s=()=>{e=t.current,n=new VL,i=new Tn(75,1.3333333333333333,.1,1e3),i.position.z=3,r=new zL({alpha:!0,antialias:!0}),r.setPixelRatio(window.devicePixelRatio),r.setSize(400,300),e.appendChild(r.domElement),o=new c,n.add(o),window.addEventListener("resize",l)},l=()=>{i.aspect=1.3333333333333333,i.updateProjectionMatrix(),r.setSize(400,300)},u=()=>{a=requestAnimationFrame(u);const f=performance.now()*.001;o.animate(f),r.render(n,i)};class c extends Zt{constructor(){super(),this.radius=1.5,this.detail=40,this.particleSizeMin=.01,this.particleSizeMax=.08,this.build()}build(){this.geometry=new om(1,this.detail),this.material=new lS({map:this.dot(),blending:eh,color:117465,depthTest:!1}),this.setupShader(this.material),this.mesh=new HL(this.geometry,this.material),this.add(this.mesh)}dot(h=32,p="#FFFFFF"){const g=h*.5,y=document.createElement("canvas");y.width=y.height=h;const m=y.getContext("2d"),d=new Path2D;return d.arc(g,g,g,0,2*Math.PI),m.fillStyle=p,m.fill(d),new GL(y)}setupShader(h){h.onBeforeCompile=p=>{p.uniforms.time={value:0},p.uniforms.radius={value:this.radius},p.uniforms.particleSizeMin={value:this.particleSizeMin},p.uniforms.particleSizeMax={value:this.particleSizeMax},p.vertexShader=`uniform float particleSizeMax;
`+p.vertexShader,p.vertexShader=`uniform float particleSizeMin;
`+p.vertexShader,p.vertexShader=`uniform float radius;
`+p.vertexShader,p.vertexShader=`uniform float time;
`+p.vertexShader,p.vertexShader=WL+`
`+p.vertexShader,p.vertexShader=p.vertexShader.replace("#include <begin_vertex>",`
              vec3 p = position;
              float n = snoise(vec3(p.x * 0.6 + time * 0.2, p.y * 0.4 + time * 0.3, p.z * 0.2 + time * 0.2));
              p += n * 1.2;
              float l = radius / length(p);
              p *= l;
              float s = mix(particleSizeMin, particleSizeMax, n);
              vec3 transformed = vec3(p.x, p.y, p.z);
            `),p.vertexShader=p.vertexShader.replace("gl_PointSize = size;","gl_PointSize = s;"),h.userData.shader=p}}animate(h){this.mesh.rotation.set(0,h*.2,0),this.material.userData.shader&&(this.material.userData.shader.uniforms.time.value=h)}}return s(),u(),()=>{cancelAnimationFrame(a),window.removeEventListener("resize",l),e.removeChild(r.domElement)}},[]),O.jsx("div",{className:"AnimationAiMdiv",ref:t,style:{width:"100%",maxHeight:"400px",margin:"0 auto",display:"flex",justifyContent:"center",alignItems:"center"}})},Qv="data:image/svg+xml,%3csvg%20width='15'%20height='15'%20viewBox='0%200%2015%2015'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12.3669%206.6849L3.25236%201.48253C3.09872%201.39635%202.92249%201.35895%202.74709%201.3753C2.57169%201.39165%202.40542%201.46098%202.27036%201.57408C2.1353%201.68718%202.03785%201.8387%201.99095%202.0085C1.94404%202.1783%201.94992%202.35836%202.00778%202.52474L3.68964%207.43305C3.68942%207.43486%203.68942%207.43668%203.68964%207.43848C3.68933%207.44027%203.68933%207.44211%203.68964%207.4439L2.00778%2012.3631C1.96144%2012.494%201.94717%2012.634%201.96618%2012.7716C1.98518%2012.9091%202.0369%2013.0401%202.11699%2013.1535C2.19708%2013.2669%202.30322%2013.3595%202.42648%2013.4234C2.54974%2013.4873%202.68653%2013.5207%202.82538%2013.5208C2.97603%2013.5205%203.12402%2013.4812%203.25507%2013.4069L12.3648%208.19586C12.4991%208.12058%2012.6111%208.01091%2012.6891%207.8781C12.7671%207.74528%2012.8083%207.59411%2012.8086%207.44009C12.8089%207.28606%2012.7682%207.13474%2012.6906%207.00165C12.6131%206.86855%2012.5016%206.75848%2012.3675%206.68273L12.3669%206.6849ZM2.82538%2012.6528V12.6479L4.46058%207.87847H7.59969C7.7148%207.87847%207.82519%207.83275%207.90659%207.75135C7.98799%207.66995%208.03371%207.55956%208.03371%207.44445C8.03371%207.32933%207.98799%207.21894%207.90659%207.13754C7.82519%207.05615%207.7148%207.01042%207.59969%207.01042H4.46492L2.82864%202.24262L2.82538%202.23611L11.94%207.43522L2.82538%2012.6528Z'%20fill='%2301CAD9'/%3e%3c/svg%3e",XL="_LoadingDiv_1fabk_31",$L="_content_1fabk_47",YL="_cube_1fabk_67",If={LoadingDiv:XL,content:$L,"spin-all":"_spin-all_1fabk_1",cube:YL,"spin-cube":"_spin-cube_1fabk_1","spin-cube-before":"_spin-cube-before_1fabk_1","spin-cube-after":"_spin-cube-after_1fabk_1"};function qL(){return O.jsx("div",{className:If.LoadingDiv,children:O.jsx("div",{className:If.content,children:O.jsx("div",{className:If.cube})})})}const KL=["Общие вопросы о налогах?","Какие налоги должны платить предприниматели в Таджикистане?","Какие основные налоги существуют для физических и юридических лиц?","Каковы налоговые ставки для разных типов предпринимательской деятельности?","Как зарегистрировать бизнес в Таджикистане?","Какие документы нужны для регистрации ИП/ООО?","Каковы особенности налогообложения для малого и среднего бизнеса?","Какие налоговые льготы доступны для новых предприятий?","Какие документы нужно предоставить для налоговой отчетности?","Что делать, если я пропустил срок подачи налоговой декларации?","Как исправить ошибки в поданной налоговой декларации?","Специальные режимы и льготы?","Какие существуют специальные налоговые режимы для предпринимателей?","Какие налоговые льготы предусмотрены для IT-компаний?","Какие налоговые льготы доступны для сельскохозяйственных производителей?","Налоговые проверки и споры?","Как подготовиться к налоговой проверке?","Что делать в случае получения уведомления о налоговой проверке?","Как обжаловать решение налоговой инспекции?","Какие штрафы предусмотрены за неуплату налогов?","Электронные сервисы и онлайн-платежи?","Как пользоваться онлайн-сервисами налоговой службы Таджикистана?","Какие электронные сервисы доступны для предпринимателей?","Как оплатить налоги онлайн?","Как зарегистрироваться в личном кабинете налогоплательщика?"];function ZL(){const[t,e]=te.useState(""),[n,i]=te.useState([]),[r,o]=te.useState(!1),{loadingAi:a,askQuestion:s}=yC(g=>({loadingAi:g.loadingAi,askQuestion:g.askQuestion})),l=async()=>{if(!a&&t.trim()!==""){o(!0),i([...n,{text:t,isUser:!0}]),e("");const g=await s(t);i([...n,{text:t,isUser:!0},{text:`AI: ${g}`,isUser:!1}])}};function u(g){e(y=>g),l(),p(!1)}function c(g){e(y=>g),l()}const f=g=>{g.key==="Enter"&&l()},{StateBurger:h,ShowBurger:p}=Mx(g=>({StateBurger:g.StateBurger,ShowBurger:g.ShowBurger}));return O.jsxs(O.Fragment,{children:[O.jsxs("div",{className:"AiContent",children:[O.jsx("div",{style:{height:"80px",width:"100%"}}),O.jsx(Cx,{title:"NOROV AI"}),O.jsxs("div",{className:"AiContent__body",children:[O.jsx("div",{className:`AnimationAi ${r?"filterB":""}`,children:O.jsx(jL,{})}),O.jsxs("div",{id:"chat-history",children:[n.map((g,y)=>O.jsx(O.Fragment,{children:O.jsx("div",{className:`message ${g.isUser?"user-message":"ai-message"}`,children:g.text},y)})),a?O.jsxs("div",{className:"LoadingAi",children:["Generating...",O.jsx(qL,{})]}):""]}),r?"":O.jsxs("div",{className:"Padskazka",children:[O.jsx("div",{onClick:()=>c("Какие сроки уплаты налогов в Таджикистане?"),children:O.jsx("p",{children:"Какие сроки уплаты налогов в Таджикистане?"})}),O.jsx("div",{onClick:()=>c("Регистрация и налогообложение"),children:O.jsx("p",{children:"Регистрация и налогообложение"})}),O.jsx("div",{onClick:()=>c("Налоговая отчетность"),children:O.jsx("p",{children:"Налоговая отчетность"})}),O.jsx("div",{onClick:()=>c("Как заполнить налоговую декларацию?"),children:O.jsx("p",{children:"Как заполнить налоговую декларацию?"})})]})]}),O.jsx("div",{className:"AiContent__text",children:O.jsxs("div",{children:[O.jsx("input",{type:"text",id:"input-question",value:t,onChange:g=>e(g.target.value),onKeyDown:f,placeholder:"Введите свой вопрос...",autoComplete:"off"}),a?O.jsx("button",{id:"btn-send",className:"filterB",children:O.jsx("img",{src:Qv,alt:"iconSend"})}):O.jsx("button",{id:"btn-send",onClick:l,children:O.jsx("img",{src:Qv,alt:"iconSend"})})]})})]}),O.jsxs("div",{className:"BurgerMenu",style:{left:h?0:"-100%"},children:[O.jsxs("div",{className:"Bmenu",children:[O.jsx("h1",{children:"Часто задовемые вопросы"}),KL.map((g,y)=>O.jsx("div",{onClick:()=>{u(g)},children:O.jsx("input",{type:"text",value:g})},y))]}),O.jsx("div",{className:"Fon",onClick:()=>{p(!1)}})]})]})}function QL(){return O.jsx(O.Fragment,{children:O.jsxs(A1,{children:[O.jsx(bd,{path:"/",element:O.jsx(NC,{})}),O.jsx(bd,{path:"/content",element:O.jsx(ZL,{})})]})})}function JL(){return O.jsx(O.Fragment,{children:O.jsx(QL,{})})}function e3(){return O.jsx(O.Fragment,{children:O.jsx(JL,{})})}Uf.createRoot(document.getElementById("root")).render(O.jsx(N1,{children:O.jsx(e3,{})}));
