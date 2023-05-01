(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function QS(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Fv={exports:{}},Au={},bv={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ea=Symbol.for("react.element"),XS=Symbol.for("react.portal"),YS=Symbol.for("react.fragment"),JS=Symbol.for("react.strict_mode"),ZS=Symbol.for("react.profiler"),eT=Symbol.for("react.provider"),tT=Symbol.for("react.context"),nT=Symbol.for("react.forward_ref"),rT=Symbol.for("react.suspense"),iT=Symbol.for("react.memo"),sT=Symbol.for("react.lazy"),Lm=Symbol.iterator;function oT(t){return t===null||typeof t!="object"?null:(t=Lm&&t[Lm]||t["@@iterator"],typeof t=="function"?t:null)}var Vv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},zv=Object.assign,Bv={};function ms(t,e,n){this.props=t,this.context=e,this.refs=Bv,this.updater=n||Vv}ms.prototype.isReactComponent={};ms.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ms.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function jv(){}jv.prototype=ms.prototype;function df(t,e,n){this.props=t,this.context=e,this.refs=Bv,this.updater=n||Vv}var ff=df.prototype=new jv;ff.constructor=df;zv(ff,ms.prototype);ff.isPureReactComponent=!0;var Mm=Array.isArray,Hv=Object.prototype.hasOwnProperty,pf={current:null},Wv={key:!0,ref:!0,__self:!0,__source:!0};function Kv(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Hv.call(e,r)&&!Wv.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ea,type:t,key:s,ref:o,props:i,_owner:pf.current}}function aT(t,e){return{$$typeof:ea,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function mf(t){return typeof t=="object"&&t!==null&&t.$$typeof===ea}function lT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var $m=/\/+/g;function $c(t,e){return typeof t=="object"&&t!==null&&t.key!=null?lT(""+t.key):e.toString(36)}function ll(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ea:case XS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+$c(o,0):r,Mm(i)?(n="",t!=null&&(n=t.replace($m,"$&/")+"/"),ll(i,e,n,"",function(u){return u})):i!=null&&(mf(i)&&(i=aT(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace($m,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Mm(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+$c(s,a);o+=ll(s,e,n,l,i)}else if(l=oT(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+$c(s,a++),o+=ll(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function xa(t,e,n){if(t==null)return t;var r=[],i=0;return ll(t,r,"","",function(s){return e.call(n,s,i++)}),r}function uT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var wt={current:null},ul={transition:null},cT={ReactCurrentDispatcher:wt,ReactCurrentBatchConfig:ul,ReactCurrentOwner:pf};ne.Children={map:xa,forEach:function(t,e,n){xa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return xa(t,function(){e++}),e},toArray:function(t){return xa(t,function(e){return e})||[]},only:function(t){if(!mf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ne.Component=ms;ne.Fragment=YS;ne.Profiler=ZS;ne.PureComponent=df;ne.StrictMode=JS;ne.Suspense=rT;ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cT;ne.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=zv({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=pf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Hv.call(e,l)&&!Wv.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ea,type:t.type,key:i,ref:s,props:r,_owner:o}};ne.createContext=function(t){return t={$$typeof:tT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:eT,_context:t},t.Consumer=t};ne.createElement=Kv;ne.createFactory=function(t){var e=Kv.bind(null,t);return e.type=t,e};ne.createRef=function(){return{current:null}};ne.forwardRef=function(t){return{$$typeof:nT,render:t}};ne.isValidElement=mf;ne.lazy=function(t){return{$$typeof:sT,_payload:{_status:-1,_result:t},_init:uT}};ne.memo=function(t,e){return{$$typeof:iT,type:t,compare:e===void 0?null:e}};ne.startTransition=function(t){var e=ul.transition;ul.transition={};try{t()}finally{ul.transition=e}};ne.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ne.useCallback=function(t,e){return wt.current.useCallback(t,e)};ne.useContext=function(t){return wt.current.useContext(t)};ne.useDebugValue=function(){};ne.useDeferredValue=function(t){return wt.current.useDeferredValue(t)};ne.useEffect=function(t,e){return wt.current.useEffect(t,e)};ne.useId=function(){return wt.current.useId()};ne.useImperativeHandle=function(t,e,n){return wt.current.useImperativeHandle(t,e,n)};ne.useInsertionEffect=function(t,e){return wt.current.useInsertionEffect(t,e)};ne.useLayoutEffect=function(t,e){return wt.current.useLayoutEffect(t,e)};ne.useMemo=function(t,e){return wt.current.useMemo(t,e)};ne.useReducer=function(t,e,n){return wt.current.useReducer(t,e,n)};ne.useRef=function(t){return wt.current.useRef(t)};ne.useState=function(t){return wt.current.useState(t)};ne.useSyncExternalStore=function(t,e,n){return wt.current.useSyncExternalStore(t,e,n)};ne.useTransition=function(){return wt.current.useTransition()};ne.version="18.2.0";bv.exports=ne;var D=bv.exports;const hT=QS(D);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dT=D,fT=Symbol.for("react.element"),pT=Symbol.for("react.fragment"),mT=Object.prototype.hasOwnProperty,gT=dT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,yT={key:!0,ref:!0,__self:!0,__source:!0};function qv(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)mT.call(e,r)&&!yT.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:fT,type:t,key:s,ref:o,props:i,_owner:gT.current}}Au.Fragment=pT;Au.jsx=qv;Au.jsxs=qv;Fv.exports=Au;var gf=Fv.exports;const Uc=gf.Fragment,ee=gf.jsx,Jn=gf.jsxs;var Mh={},Gv={exports:{}},Ot={},Qv={exports:{}},Xv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,G){var J=O.length;O.push(G);e:for(;0<J;){var Z=J-1>>>1,ve=O[Z];if(0<i(ve,G))O[Z]=G,O[J]=ve,J=Z;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var G=O[0],J=O.pop();if(J!==G){O[0]=J;e:for(var Z=0,ve=O.length,$r=ve>>>1;Z<$r;){var Cn=2*(Z+1)-1,$t=O[Cn],Rn=Cn+1,vi=O[Rn];if(0>i($t,J))Rn<ve&&0>i(vi,$t)?(O[Z]=vi,O[Rn]=J,Z=Rn):(O[Z]=$t,O[Cn]=J,Z=Cn);else if(Rn<ve&&0>i(vi,J))O[Z]=vi,O[Rn]=J,Z=Rn;else break e}}return G}function i(O,G){var J=O.sortIndex-G.sortIndex;return J!==0?J:O.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,g=!1,y=!1,v=!1,_=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(O){for(var G=n(u);G!==null;){if(G.callback===null)r(u);else if(G.startTime<=O)r(u),G.sortIndex=G.expirationTime,e(l,G);else break;G=n(u)}}function w(O){if(v=!1,m(O),!y)if(n(l)!==null)y=!0,Mt(I);else{var G=n(u);G!==null&&Mr(w,G.startTime-O)}}function I(O,G){y=!1,v&&(v=!1,h(x),x=-1),g=!0;var J=f;try{for(m(G),d=n(l);d!==null&&(!(d.expirationTime>G)||O&&!pt());){var Z=d.callback;if(typeof Z=="function"){d.callback=null,f=d.priorityLevel;var ve=Z(d.expirationTime<=G);G=t.unstable_now(),typeof ve=="function"?d.callback=ve:d===n(l)&&r(l),m(G)}else r(l);d=n(l)}if(d!==null)var $r=!0;else{var Cn=n(u);Cn!==null&&Mr(w,Cn.startTime-G),$r=!1}return $r}finally{d=null,f=J,g=!1}}var A=!1,N=null,x=-1,j=5,Y=-1;function pt(){return!(t.unstable_now()-Y<j)}function Gt(){if(N!==null){var O=t.unstable_now();Y=O;var G=!0;try{G=N(!0,O)}finally{G?Qt():(A=!1,N=null)}}else A=!1}var Qt;if(typeof p=="function")Qt=function(){p(Gt)};else if(typeof MessageChannel<"u"){var In=new MessageChannel,kn=In.port2;In.port1.onmessage=Gt,Qt=function(){kn.postMessage(null)}}else Qt=function(){_(Gt,0)};function Mt(O){N=O,A||(A=!0,Qt())}function Mr(O,G){x=_(function(){O(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){y||g||(y=!0,Mt(I))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(O){switch(f){case 1:case 2:case 3:var G=3;break;default:G=f}var J=f;f=G;try{return O()}finally{f=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,G){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var J=f;f=O;try{return G()}finally{f=J}},t.unstable_scheduleCallback=function(O,G,J){var Z=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?Z+J:Z):J=Z,O){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=J+ve,O={id:c++,callback:G,priorityLevel:O,startTime:J,expirationTime:ve,sortIndex:-1},J>Z?(O.sortIndex=J,e(u,O),n(l)===null&&O===n(u)&&(v?(h(x),x=-1):v=!0,Mr(w,J-Z))):(O.sortIndex=ve,e(l,O),y||g||(y=!0,Mt(I))),O},t.unstable_shouldYield=pt,t.unstable_wrapCallback=function(O){var G=f;return function(){var J=f;f=G;try{return O.apply(this,arguments)}finally{f=J}}}})(Xv);Qv.exports=Xv;var vT=Qv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yv=D,Pt=vT;function C(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Jv=new Set,Eo={};function di(t,e){es(t,e),es(t+"Capture",e)}function es(t,e){for(Eo[t]=e,t=0;t<e.length;t++)Jv.add(e[t])}var bn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$h=Object.prototype.hasOwnProperty,wT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Um={},Fm={};function ET(t){return $h.call(Fm,t)?!0:$h.call(Um,t)?!1:wT.test(t)?Fm[t]=!0:(Um[t]=!0,!1)}function _T(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function ST(t,e,n,r){if(e===null||typeof e>"u"||_T(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Et(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ze[t]=new Et(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ze[e]=new Et(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ze[t]=new Et(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ze[t]=new Et(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ze[t]=new Et(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ze[t]=new Et(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ze[t]=new Et(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ze[t]=new Et(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ze[t]=new Et(t,5,!1,t.toLowerCase(),null,!1,!1)});var yf=/[\-:]([a-z])/g;function vf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(yf,vf);Ze[e]=new Et(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(yf,vf);Ze[e]=new Et(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(yf,vf);Ze[e]=new Et(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ze[t]=new Et(t,1,!1,t.toLowerCase(),null,!1,!1)});Ze.xlinkHref=new Et("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ze[t]=new Et(t,1,!1,t.toLowerCase(),null,!0,!0)});function wf(t,e,n,r){var i=Ze.hasOwnProperty(e)?Ze[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ST(e,n,i,r)&&(n=null),r||i===null?ET(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Gn=Yv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Oa=Symbol.for("react.element"),ki=Symbol.for("react.portal"),Ci=Symbol.for("react.fragment"),Ef=Symbol.for("react.strict_mode"),Uh=Symbol.for("react.profiler"),Zv=Symbol.for("react.provider"),e0=Symbol.for("react.context"),_f=Symbol.for("react.forward_ref"),Fh=Symbol.for("react.suspense"),bh=Symbol.for("react.suspense_list"),Sf=Symbol.for("react.memo"),Zn=Symbol.for("react.lazy"),t0=Symbol.for("react.offscreen"),bm=Symbol.iterator;function Os(t){return t===null||typeof t!="object"?null:(t=bm&&t[bm]||t["@@iterator"],typeof t=="function"?t:null)}var Ie=Object.assign,Fc;function Ks(t){if(Fc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Fc=e&&e[1]||""}return`
`+Fc+t}var bc=!1;function Vc(t,e){if(!t||bc)return"";bc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{bc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ks(t):""}function TT(t){switch(t.tag){case 5:return Ks(t.type);case 16:return Ks("Lazy");case 13:return Ks("Suspense");case 19:return Ks("SuspenseList");case 0:case 2:case 15:return t=Vc(t.type,!1),t;case 11:return t=Vc(t.type.render,!1),t;case 1:return t=Vc(t.type,!0),t;default:return""}}function Vh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ci:return"Fragment";case ki:return"Portal";case Uh:return"Profiler";case Ef:return"StrictMode";case Fh:return"Suspense";case bh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case e0:return(t.displayName||"Context")+".Consumer";case Zv:return(t._context.displayName||"Context")+".Provider";case _f:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Sf:return e=t.displayName||null,e!==null?e:Vh(t.type)||"Memo";case Zn:e=t._payload,t=t._init;try{return Vh(t(e))}catch{}}return null}function IT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Vh(e);case 8:return e===Ef?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ir(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function n0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function kT(t){var e=n0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function La(t){t._valueTracker||(t._valueTracker=kT(t))}function r0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=n0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Al(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function zh(t,e){var n=e.checked;return Ie({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Vm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ir(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function i0(t,e){e=e.checked,e!=null&&wf(t,"checked",e,!1)}function Bh(t,e){i0(t,e);var n=Ir(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?jh(t,e.type,n):e.hasOwnProperty("defaultValue")&&jh(t,e.type,Ir(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function zm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function jh(t,e,n){(e!=="number"||Al(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var qs=Array.isArray;function zi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ir(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Hh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(C(91));return Ie({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Bm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(C(92));if(qs(n)){if(1<n.length)throw Error(C(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ir(n)}}function s0(t,e){var n=Ir(e.value),r=Ir(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function jm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function o0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Wh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?o0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ma,a0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ma=Ma||document.createElement("div"),Ma.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ma.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function _o(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var no={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},CT=["Webkit","ms","Moz","O"];Object.keys(no).forEach(function(t){CT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),no[e]=no[t]})});function l0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||no.hasOwnProperty(t)&&no[t]?(""+e).trim():e+"px"}function u0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=l0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var RT=Ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Kh(t,e){if(e){if(RT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(C(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(C(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(C(61))}if(e.style!=null&&typeof e.style!="object")throw Error(C(62))}}function qh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gh=null;function Tf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Qh=null,Bi=null,ji=null;function Hm(t){if(t=ra(t)){if(typeof Qh!="function")throw Error(C(280));var e=t.stateNode;e&&(e=Ou(e),Qh(t.stateNode,t.type,e))}}function c0(t){Bi?ji?ji.push(t):ji=[t]:Bi=t}function h0(){if(Bi){var t=Bi,e=ji;if(ji=Bi=null,Hm(t),e)for(t=0;t<e.length;t++)Hm(e[t])}}function d0(t,e){return t(e)}function f0(){}var zc=!1;function p0(t,e,n){if(zc)return t(e,n);zc=!0;try{return d0(t,e,n)}finally{zc=!1,(Bi!==null||ji!==null)&&(f0(),h0())}}function So(t,e){var n=t.stateNode;if(n===null)return null;var r=Ou(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(C(231,e,typeof n));return n}var Xh=!1;if(bn)try{var Ls={};Object.defineProperty(Ls,"passive",{get:function(){Xh=!0}}),window.addEventListener("test",Ls,Ls),window.removeEventListener("test",Ls,Ls)}catch{Xh=!1}function AT(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var ro=!1,Nl=null,Dl=!1,Yh=null,NT={onError:function(t){ro=!0,Nl=t}};function DT(t,e,n,r,i,s,o,a,l){ro=!1,Nl=null,AT.apply(NT,arguments)}function PT(t,e,n,r,i,s,o,a,l){if(DT.apply(this,arguments),ro){if(ro){var u=Nl;ro=!1,Nl=null}else throw Error(C(198));Dl||(Dl=!0,Yh=u)}}function fi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function m0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Wm(t){if(fi(t)!==t)throw Error(C(188))}function xT(t){var e=t.alternate;if(!e){if(e=fi(t),e===null)throw Error(C(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Wm(i),t;if(s===r)return Wm(i),e;s=s.sibling}throw Error(C(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?t:e}function g0(t){return t=xT(t),t!==null?y0(t):null}function y0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=y0(t);if(e!==null)return e;t=t.sibling}return null}var v0=Pt.unstable_scheduleCallback,Km=Pt.unstable_cancelCallback,OT=Pt.unstable_shouldYield,LT=Pt.unstable_requestPaint,De=Pt.unstable_now,MT=Pt.unstable_getCurrentPriorityLevel,If=Pt.unstable_ImmediatePriority,w0=Pt.unstable_UserBlockingPriority,Pl=Pt.unstable_NormalPriority,$T=Pt.unstable_LowPriority,E0=Pt.unstable_IdlePriority,Nu=null,mn=null;function UT(t){if(mn&&typeof mn.onCommitFiberRoot=="function")try{mn.onCommitFiberRoot(Nu,t,void 0,(t.current.flags&128)===128)}catch{}}var nn=Math.clz32?Math.clz32:VT,FT=Math.log,bT=Math.LN2;function VT(t){return t>>>=0,t===0?32:31-(FT(t)/bT|0)|0}var $a=64,Ua=4194304;function Gs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function xl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Gs(a):(s&=o,s!==0&&(r=Gs(s)))}else o=n&~i,o!==0?r=Gs(o):s!==0&&(r=Gs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-nn(e),i=1<<n,r|=t[n],e&=~i;return r}function zT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function BT(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-nn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=zT(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Jh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function _0(){var t=$a;return $a<<=1,!($a&4194240)&&($a=64),t}function Bc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ta(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-nn(e),t[e]=n}function jT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-nn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function kf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-nn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ce=0;function S0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var T0,Cf,I0,k0,C0,Zh=!1,Fa=[],hr=null,dr=null,fr=null,To=new Map,Io=new Map,tr=[],HT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qm(t,e){switch(t){case"focusin":case"focusout":hr=null;break;case"dragenter":case"dragleave":dr=null;break;case"mouseover":case"mouseout":fr=null;break;case"pointerover":case"pointerout":To.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Io.delete(e.pointerId)}}function Ms(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ra(e),e!==null&&Cf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function WT(t,e,n,r,i){switch(e){case"focusin":return hr=Ms(hr,t,e,n,r,i),!0;case"dragenter":return dr=Ms(dr,t,e,n,r,i),!0;case"mouseover":return fr=Ms(fr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return To.set(s,Ms(To.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Io.set(s,Ms(Io.get(s)||null,t,e,n,r,i)),!0}return!1}function R0(t){var e=Vr(t.target);if(e!==null){var n=fi(e);if(n!==null){if(e=n.tag,e===13){if(e=m0(n),e!==null){t.blockedOn=e,C0(t.priority,function(){I0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function cl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ed(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Gh=r,n.target.dispatchEvent(r),Gh=null}else return e=ra(n),e!==null&&Cf(e),t.blockedOn=n,!1;e.shift()}return!0}function Gm(t,e,n){cl(t)&&n.delete(e)}function KT(){Zh=!1,hr!==null&&cl(hr)&&(hr=null),dr!==null&&cl(dr)&&(dr=null),fr!==null&&cl(fr)&&(fr=null),To.forEach(Gm),Io.forEach(Gm)}function $s(t,e){t.blockedOn===e&&(t.blockedOn=null,Zh||(Zh=!0,Pt.unstable_scheduleCallback(Pt.unstable_NormalPriority,KT)))}function ko(t){function e(i){return $s(i,t)}if(0<Fa.length){$s(Fa[0],t);for(var n=1;n<Fa.length;n++){var r=Fa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(hr!==null&&$s(hr,t),dr!==null&&$s(dr,t),fr!==null&&$s(fr,t),To.forEach(e),Io.forEach(e),n=0;n<tr.length;n++)r=tr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<tr.length&&(n=tr[0],n.blockedOn===null);)R0(n),n.blockedOn===null&&tr.shift()}var Hi=Gn.ReactCurrentBatchConfig,Ol=!0;function qT(t,e,n,r){var i=ce,s=Hi.transition;Hi.transition=null;try{ce=1,Rf(t,e,n,r)}finally{ce=i,Hi.transition=s}}function GT(t,e,n,r){var i=ce,s=Hi.transition;Hi.transition=null;try{ce=4,Rf(t,e,n,r)}finally{ce=i,Hi.transition=s}}function Rf(t,e,n,r){if(Ol){var i=ed(t,e,n,r);if(i===null)Jc(t,e,r,Ll,n),qm(t,r);else if(WT(i,t,e,n,r))r.stopPropagation();else if(qm(t,r),e&4&&-1<HT.indexOf(t)){for(;i!==null;){var s=ra(i);if(s!==null&&T0(s),s=ed(t,e,n,r),s===null&&Jc(t,e,r,Ll,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Jc(t,e,r,null,n)}}var Ll=null;function ed(t,e,n,r){if(Ll=null,t=Tf(r),t=Vr(t),t!==null)if(e=fi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=m0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ll=t,null}function A0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(MT()){case If:return 1;case w0:return 4;case Pl:case $T:return 16;case E0:return 536870912;default:return 16}default:return 16}}var lr=null,Af=null,hl=null;function N0(){if(hl)return hl;var t,e=Af,n=e.length,r,i="value"in lr?lr.value:lr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return hl=i.slice(t,1<r?1-r:void 0)}function dl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ba(){return!0}function Qm(){return!1}function Lt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ba:Qm,this.isPropagationStopped=Qm,this}return Ie(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ba)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ba)},persist:function(){},isPersistent:ba}),e}var gs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nf=Lt(gs),na=Ie({},gs,{view:0,detail:0}),QT=Lt(na),jc,Hc,Us,Du=Ie({},na,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Df,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Us&&(Us&&t.type==="mousemove"?(jc=t.screenX-Us.screenX,Hc=t.screenY-Us.screenY):Hc=jc=0,Us=t),jc)},movementY:function(t){return"movementY"in t?t.movementY:Hc}}),Xm=Lt(Du),XT=Ie({},Du,{dataTransfer:0}),YT=Lt(XT),JT=Ie({},na,{relatedTarget:0}),Wc=Lt(JT),ZT=Ie({},gs,{animationName:0,elapsedTime:0,pseudoElement:0}),eI=Lt(ZT),tI=Ie({},gs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),nI=Lt(tI),rI=Ie({},gs,{data:0}),Ym=Lt(rI),iI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},oI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function aI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=oI[t])?!!e[t]:!1}function Df(){return aI}var lI=Ie({},na,{key:function(t){if(t.key){var e=iI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=dl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?sI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Df,charCode:function(t){return t.type==="keypress"?dl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?dl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),uI=Lt(lI),cI=Ie({},Du,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jm=Lt(cI),hI=Ie({},na,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Df}),dI=Lt(hI),fI=Ie({},gs,{propertyName:0,elapsedTime:0,pseudoElement:0}),pI=Lt(fI),mI=Ie({},Du,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),gI=Lt(mI),yI=[9,13,27,32],Pf=bn&&"CompositionEvent"in window,io=null;bn&&"documentMode"in document&&(io=document.documentMode);var vI=bn&&"TextEvent"in window&&!io,D0=bn&&(!Pf||io&&8<io&&11>=io),Zm=String.fromCharCode(32),eg=!1;function P0(t,e){switch(t){case"keyup":return yI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function x0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ri=!1;function wI(t,e){switch(t){case"compositionend":return x0(e);case"keypress":return e.which!==32?null:(eg=!0,Zm);case"textInput":return t=e.data,t===Zm&&eg?null:t;default:return null}}function EI(t,e){if(Ri)return t==="compositionend"||!Pf&&P0(t,e)?(t=N0(),hl=Af=lr=null,Ri=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return D0&&e.locale!=="ko"?null:e.data;default:return null}}var _I={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!_I[t.type]:e==="textarea"}function O0(t,e,n,r){c0(r),e=Ml(e,"onChange"),0<e.length&&(n=new Nf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var so=null,Co=null;function SI(t){H0(t,0)}function Pu(t){var e=Di(t);if(r0(e))return t}function TI(t,e){if(t==="change")return e}var L0=!1;if(bn){var Kc;if(bn){var qc="oninput"in document;if(!qc){var ng=document.createElement("div");ng.setAttribute("oninput","return;"),qc=typeof ng.oninput=="function"}Kc=qc}else Kc=!1;L0=Kc&&(!document.documentMode||9<document.documentMode)}function rg(){so&&(so.detachEvent("onpropertychange",M0),Co=so=null)}function M0(t){if(t.propertyName==="value"&&Pu(Co)){var e=[];O0(e,Co,t,Tf(t)),p0(SI,e)}}function II(t,e,n){t==="focusin"?(rg(),so=e,Co=n,so.attachEvent("onpropertychange",M0)):t==="focusout"&&rg()}function kI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Pu(Co)}function CI(t,e){if(t==="click")return Pu(e)}function RI(t,e){if(t==="input"||t==="change")return Pu(e)}function AI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var sn=typeof Object.is=="function"?Object.is:AI;function Ro(t,e){if(sn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!$h.call(e,i)||!sn(t[i],e[i]))return!1}return!0}function ig(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function sg(t,e){var n=ig(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ig(n)}}function $0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?$0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function U0(){for(var t=window,e=Al();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Al(t.document)}return e}function xf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function NI(t){var e=U0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&$0(n.ownerDocument.documentElement,n)){if(r!==null&&xf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=sg(n,s);var o=sg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var DI=bn&&"documentMode"in document&&11>=document.documentMode,Ai=null,td=null,oo=null,nd=!1;function og(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;nd||Ai==null||Ai!==Al(r)||(r=Ai,"selectionStart"in r&&xf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),oo&&Ro(oo,r)||(oo=r,r=Ml(td,"onSelect"),0<r.length&&(e=new Nf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ai)))}function Va(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ni={animationend:Va("Animation","AnimationEnd"),animationiteration:Va("Animation","AnimationIteration"),animationstart:Va("Animation","AnimationStart"),transitionend:Va("Transition","TransitionEnd")},Gc={},F0={};bn&&(F0=document.createElement("div").style,"AnimationEvent"in window||(delete Ni.animationend.animation,delete Ni.animationiteration.animation,delete Ni.animationstart.animation),"TransitionEvent"in window||delete Ni.transitionend.transition);function xu(t){if(Gc[t])return Gc[t];if(!Ni[t])return t;var e=Ni[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in F0)return Gc[t]=e[n];return t}var b0=xu("animationend"),V0=xu("animationiteration"),z0=xu("animationstart"),B0=xu("transitionend"),j0=new Map,ag="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dr(t,e){j0.set(t,e),di(e,[t])}for(var Qc=0;Qc<ag.length;Qc++){var Xc=ag[Qc],PI=Xc.toLowerCase(),xI=Xc[0].toUpperCase()+Xc.slice(1);Dr(PI,"on"+xI)}Dr(b0,"onAnimationEnd");Dr(V0,"onAnimationIteration");Dr(z0,"onAnimationStart");Dr("dblclick","onDoubleClick");Dr("focusin","onFocus");Dr("focusout","onBlur");Dr(B0,"onTransitionEnd");es("onMouseEnter",["mouseout","mouseover"]);es("onMouseLeave",["mouseout","mouseover"]);es("onPointerEnter",["pointerout","pointerover"]);es("onPointerLeave",["pointerout","pointerover"]);di("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));di("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));di("onBeforeInput",["compositionend","keypress","textInput","paste"]);di("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));di("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));di("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),OI=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qs));function lg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,PT(r,e,void 0,t),t.currentTarget=null}function H0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;lg(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;lg(i,a,u),s=l}}}if(Dl)throw t=Yh,Dl=!1,Yh=null,t}function pe(t,e){var n=e[ad];n===void 0&&(n=e[ad]=new Set);var r=t+"__bubble";n.has(r)||(W0(e,t,2,!1),n.add(r))}function Yc(t,e,n){var r=0;e&&(r|=4),W0(n,t,r,e)}var za="_reactListening"+Math.random().toString(36).slice(2);function Ao(t){if(!t[za]){t[za]=!0,Jv.forEach(function(n){n!=="selectionchange"&&(OI.has(n)||Yc(n,!1,t),Yc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[za]||(e[za]=!0,Yc("selectionchange",!1,e))}}function W0(t,e,n,r){switch(A0(e)){case 1:var i=qT;break;case 4:i=GT;break;default:i=Rf}n=i.bind(null,e,n,t),i=void 0,!Xh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Jc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Vr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}p0(function(){var u=s,c=Tf(n),d=[];e:{var f=j0.get(t);if(f!==void 0){var g=Nf,y=t;switch(t){case"keypress":if(dl(n)===0)break e;case"keydown":case"keyup":g=uI;break;case"focusin":y="focus",g=Wc;break;case"focusout":y="blur",g=Wc;break;case"beforeblur":case"afterblur":g=Wc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Xm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=YT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=dI;break;case b0:case V0:case z0:g=eI;break;case B0:g=pI;break;case"scroll":g=QT;break;case"wheel":g=gI;break;case"copy":case"cut":case"paste":g=nI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Jm}var v=(e&4)!==0,_=!v&&t==="scroll",h=v?f!==null?f+"Capture":null:f;v=[];for(var p=u,m;p!==null;){m=p;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,h!==null&&(w=So(p,h),w!=null&&v.push(No(p,w,m)))),_)break;p=p.return}0<v.length&&(f=new g(f,y,null,n,c),d.push({event:f,listeners:v}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&n!==Gh&&(y=n.relatedTarget||n.fromElement)&&(Vr(y)||y[Vn]))break e;if((g||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?Vr(y):null,y!==null&&(_=fi(y),y!==_||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(v=Xm,w="onMouseLeave",h="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(v=Jm,w="onPointerLeave",h="onPointerEnter",p="pointer"),_=g==null?f:Di(g),m=y==null?f:Di(y),f=new v(w,p+"leave",g,n,c),f.target=_,f.relatedTarget=m,w=null,Vr(c)===u&&(v=new v(h,p+"enter",y,n,c),v.target=m,v.relatedTarget=_,w=v),_=w,g&&y)t:{for(v=g,h=y,p=0,m=v;m;m=_i(m))p++;for(m=0,w=h;w;w=_i(w))m++;for(;0<p-m;)v=_i(v),p--;for(;0<m-p;)h=_i(h),m--;for(;p--;){if(v===h||h!==null&&v===h.alternate)break t;v=_i(v),h=_i(h)}v=null}else v=null;g!==null&&ug(d,f,g,v,!1),y!==null&&_!==null&&ug(d,_,y,v,!0)}}e:{if(f=u?Di(u):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var I=TI;else if(tg(f))if(L0)I=RI;else{I=kI;var A=II}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(I=CI);if(I&&(I=I(t,u))){O0(d,I,n,c);break e}A&&A(t,f,u),t==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&jh(f,"number",f.value)}switch(A=u?Di(u):window,t){case"focusin":(tg(A)||A.contentEditable==="true")&&(Ai=A,td=u,oo=null);break;case"focusout":oo=td=Ai=null;break;case"mousedown":nd=!0;break;case"contextmenu":case"mouseup":case"dragend":nd=!1,og(d,n,c);break;case"selectionchange":if(DI)break;case"keydown":case"keyup":og(d,n,c)}var N;if(Pf)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Ri?P0(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(D0&&n.locale!=="ko"&&(Ri||x!=="onCompositionStart"?x==="onCompositionEnd"&&Ri&&(N=N0()):(lr=c,Af="value"in lr?lr.value:lr.textContent,Ri=!0)),A=Ml(u,x),0<A.length&&(x=new Ym(x,t,null,n,c),d.push({event:x,listeners:A}),N?x.data=N:(N=x0(n),N!==null&&(x.data=N)))),(N=vI?wI(t,n):EI(t,n))&&(u=Ml(u,"onBeforeInput"),0<u.length&&(c=new Ym("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=N))}H0(d,e)})}function No(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ml(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=So(t,n),s!=null&&r.unshift(No(t,s,i)),s=So(t,e),s!=null&&r.push(No(t,s,i))),t=t.return}return r}function _i(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ug(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=So(n,s),l!=null&&o.unshift(No(n,l,a))):i||(l=So(n,s),l!=null&&o.push(No(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var LI=/\r\n?/g,MI=/\u0000|\uFFFD/g;function cg(t){return(typeof t=="string"?t:""+t).replace(LI,`
`).replace(MI,"")}function Ba(t,e,n){if(e=cg(e),cg(t)!==e&&n)throw Error(C(425))}function $l(){}var rd=null,id=null;function sd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var od=typeof setTimeout=="function"?setTimeout:void 0,$I=typeof clearTimeout=="function"?clearTimeout:void 0,hg=typeof Promise=="function"?Promise:void 0,UI=typeof queueMicrotask=="function"?queueMicrotask:typeof hg<"u"?function(t){return hg.resolve(null).then(t).catch(FI)}:od;function FI(t){setTimeout(function(){throw t})}function Zc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ko(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ko(e)}function pr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function dg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ys=Math.random().toString(36).slice(2),hn="__reactFiber$"+ys,Do="__reactProps$"+ys,Vn="__reactContainer$"+ys,ad="__reactEvents$"+ys,bI="__reactListeners$"+ys,VI="__reactHandles$"+ys;function Vr(t){var e=t[hn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Vn]||n[hn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=dg(t);t!==null;){if(n=t[hn])return n;t=dg(t)}return e}t=n,n=t.parentNode}return null}function ra(t){return t=t[hn]||t[Vn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Di(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(C(33))}function Ou(t){return t[Do]||null}var ld=[],Pi=-1;function Pr(t){return{current:t}}function ge(t){0>Pi||(t.current=ld[Pi],ld[Pi]=null,Pi--)}function fe(t,e){Pi++,ld[Pi]=t.current,t.current=e}var kr={},ht=Pr(kr),Tt=Pr(!1),Jr=kr;function ts(t,e){var n=t.type.contextTypes;if(!n)return kr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function It(t){return t=t.childContextTypes,t!=null}function Ul(){ge(Tt),ge(ht)}function fg(t,e,n){if(ht.current!==kr)throw Error(C(168));fe(ht,e),fe(Tt,n)}function K0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(C(108,IT(t)||"Unknown",i));return Ie({},n,r)}function Fl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||kr,Jr=ht.current,fe(ht,t),fe(Tt,Tt.current),!0}function pg(t,e,n){var r=t.stateNode;if(!r)throw Error(C(169));n?(t=K0(t,e,Jr),r.__reactInternalMemoizedMergedChildContext=t,ge(Tt),ge(ht),fe(ht,t)):ge(Tt),fe(Tt,n)}var Dn=null,Lu=!1,eh=!1;function q0(t){Dn===null?Dn=[t]:Dn.push(t)}function zI(t){Lu=!0,q0(t)}function xr(){if(!eh&&Dn!==null){eh=!0;var t=0,e=ce;try{var n=Dn;for(ce=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Dn=null,Lu=!1}catch(i){throw Dn!==null&&(Dn=Dn.slice(t+1)),v0(If,xr),i}finally{ce=e,eh=!1}}return null}var xi=[],Oi=0,bl=null,Vl=0,bt=[],Vt=0,Zr=null,Pn=1,xn="";function Ur(t,e){xi[Oi++]=Vl,xi[Oi++]=bl,bl=t,Vl=e}function G0(t,e,n){bt[Vt++]=Pn,bt[Vt++]=xn,bt[Vt++]=Zr,Zr=t;var r=Pn;t=xn;var i=32-nn(r)-1;r&=~(1<<i),n+=1;var s=32-nn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Pn=1<<32-nn(e)+i|n<<i|r,xn=s+t}else Pn=1<<s|n<<i|r,xn=t}function Of(t){t.return!==null&&(Ur(t,1),G0(t,1,0))}function Lf(t){for(;t===bl;)bl=xi[--Oi],xi[Oi]=null,Vl=xi[--Oi],xi[Oi]=null;for(;t===Zr;)Zr=bt[--Vt],bt[Vt]=null,xn=bt[--Vt],bt[Vt]=null,Pn=bt[--Vt],bt[Vt]=null}var Dt=null,At=null,we=!1,en=null;function Q0(t,e){var n=jt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function mg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Dt=t,At=pr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Dt=t,At=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Zr!==null?{id:Pn,overflow:xn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=jt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Dt=t,At=null,!0):!1;default:return!1}}function ud(t){return(t.mode&1)!==0&&(t.flags&128)===0}function cd(t){if(we){var e=At;if(e){var n=e;if(!mg(t,e)){if(ud(t))throw Error(C(418));e=pr(n.nextSibling);var r=Dt;e&&mg(t,e)?Q0(r,n):(t.flags=t.flags&-4097|2,we=!1,Dt=t)}}else{if(ud(t))throw Error(C(418));t.flags=t.flags&-4097|2,we=!1,Dt=t}}}function gg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Dt=t}function ja(t){if(t!==Dt)return!1;if(!we)return gg(t),we=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!sd(t.type,t.memoizedProps)),e&&(e=At)){if(ud(t))throw X0(),Error(C(418));for(;e;)Q0(t,e),e=pr(e.nextSibling)}if(gg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(C(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){At=pr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}At=null}}else At=Dt?pr(t.stateNode.nextSibling):null;return!0}function X0(){for(var t=At;t;)t=pr(t.nextSibling)}function ns(){At=Dt=null,we=!1}function Mf(t){en===null?en=[t]:en.push(t)}var BI=Gn.ReactCurrentBatchConfig;function Yt(t,e){if(t&&t.defaultProps){e=Ie({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var zl=Pr(null),Bl=null,Li=null,$f=null;function Uf(){$f=Li=Bl=null}function Ff(t){var e=zl.current;ge(zl),t._currentValue=e}function hd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Wi(t,e){Bl=t,$f=Li=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(St=!0),t.firstContext=null)}function Kt(t){var e=t._currentValue;if($f!==t)if(t={context:t,memoizedValue:e,next:null},Li===null){if(Bl===null)throw Error(C(308));Li=t,Bl.dependencies={lanes:0,firstContext:t}}else Li=Li.next=t;return e}var zr=null;function bf(t){zr===null?zr=[t]:zr.push(t)}function Y0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,bf(e)):(n.next=i.next,i.next=n),e.interleaved=n,zn(t,r)}function zn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var er=!1;function Vf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function J0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Un(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function mr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,zn(t,n)}return i=r.interleaved,i===null?(e.next=e,bf(r)):(e.next=i.next,i.next=e),r.interleaved=e,zn(t,n)}function fl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,kf(t,n)}}function yg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function jl(t,e,n,r){var i=t.updateQueue;er=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,g=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,v=a;switch(f=e,g=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){d=y.call(g,d,f);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,f=typeof y=="function"?y.call(g,d,f):y,f==null)break e;d=Ie({},d,f);break e;case 2:er=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else g={eventTime:g,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=d):c=c.next=g,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ti|=o,t.lanes=o,t.memoizedState=d}}function vg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(C(191,i));i.call(r)}}}var Z0=new Yv.Component().refs;function dd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ie({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Mu={isMounted:function(t){return(t=t._reactInternals)?fi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=vt(),i=yr(t),s=Un(r,i);s.payload=e,n!=null&&(s.callback=n),e=mr(t,s,i),e!==null&&(rn(e,t,i,r),fl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=vt(),i=yr(t),s=Un(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=mr(t,s,i),e!==null&&(rn(e,t,i,r),fl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=vt(),r=yr(t),i=Un(n,r);i.tag=2,e!=null&&(i.callback=e),e=mr(t,i,r),e!==null&&(rn(e,t,r,n),fl(e,t,r))}};function wg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ro(n,r)||!Ro(i,s):!0}function ew(t,e,n){var r=!1,i=kr,s=e.contextType;return typeof s=="object"&&s!==null?s=Kt(s):(i=It(e)?Jr:ht.current,r=e.contextTypes,s=(r=r!=null)?ts(t,i):kr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Mu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Eg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Mu.enqueueReplaceState(e,e.state,null)}function fd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Z0,Vf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Kt(s):(s=It(e)?Jr:ht.current,i.context=ts(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(dd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Mu.enqueueReplaceState(i,i.state,null),jl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Fs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===Z0&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,t))}return t}function Ha(t,e){throw t=Object.prototype.toString.call(e),Error(C(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function _g(t){var e=t._init;return e(t._payload)}function tw(t){function e(h,p){if(t){var m=h.deletions;m===null?(h.deletions=[p],h.flags|=16):m.push(p)}}function n(h,p){if(!t)return null;for(;p!==null;)e(h,p),p=p.sibling;return null}function r(h,p){for(h=new Map;p!==null;)p.key!==null?h.set(p.key,p):h.set(p.index,p),p=p.sibling;return h}function i(h,p){return h=vr(h,p),h.index=0,h.sibling=null,h}function s(h,p,m){return h.index=m,t?(m=h.alternate,m!==null?(m=m.index,m<p?(h.flags|=2,p):m):(h.flags|=2,p)):(h.flags|=1048576,p)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,p,m,w){return p===null||p.tag!==6?(p=ah(m,h.mode,w),p.return=h,p):(p=i(p,m),p.return=h,p)}function l(h,p,m,w){var I=m.type;return I===Ci?c(h,p,m.props.children,w,m.key):p!==null&&(p.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Zn&&_g(I)===p.type)?(w=i(p,m.props),w.ref=Fs(h,p,m),w.return=h,w):(w=wl(m.type,m.key,m.props,null,h.mode,w),w.ref=Fs(h,p,m),w.return=h,w)}function u(h,p,m,w){return p===null||p.tag!==4||p.stateNode.containerInfo!==m.containerInfo||p.stateNode.implementation!==m.implementation?(p=lh(m,h.mode,w),p.return=h,p):(p=i(p,m.children||[]),p.return=h,p)}function c(h,p,m,w,I){return p===null||p.tag!==7?(p=Gr(m,h.mode,w,I),p.return=h,p):(p=i(p,m),p.return=h,p)}function d(h,p,m){if(typeof p=="string"&&p!==""||typeof p=="number")return p=ah(""+p,h.mode,m),p.return=h,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Oa:return m=wl(p.type,p.key,p.props,null,h.mode,m),m.ref=Fs(h,null,p),m.return=h,m;case ki:return p=lh(p,h.mode,m),p.return=h,p;case Zn:var w=p._init;return d(h,w(p._payload),m)}if(qs(p)||Os(p))return p=Gr(p,h.mode,m,null),p.return=h,p;Ha(h,p)}return null}function f(h,p,m,w){var I=p!==null?p.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return I!==null?null:a(h,p,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Oa:return m.key===I?l(h,p,m,w):null;case ki:return m.key===I?u(h,p,m,w):null;case Zn:return I=m._init,f(h,p,I(m._payload),w)}if(qs(m)||Os(m))return I!==null?null:c(h,p,m,w,null);Ha(h,m)}return null}function g(h,p,m,w,I){if(typeof w=="string"&&w!==""||typeof w=="number")return h=h.get(m)||null,a(p,h,""+w,I);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Oa:return h=h.get(w.key===null?m:w.key)||null,l(p,h,w,I);case ki:return h=h.get(w.key===null?m:w.key)||null,u(p,h,w,I);case Zn:var A=w._init;return g(h,p,m,A(w._payload),I)}if(qs(w)||Os(w))return h=h.get(m)||null,c(p,h,w,I,null);Ha(p,w)}return null}function y(h,p,m,w){for(var I=null,A=null,N=p,x=p=0,j=null;N!==null&&x<m.length;x++){N.index>x?(j=N,N=null):j=N.sibling;var Y=f(h,N,m[x],w);if(Y===null){N===null&&(N=j);break}t&&N&&Y.alternate===null&&e(h,N),p=s(Y,p,x),A===null?I=Y:A.sibling=Y,A=Y,N=j}if(x===m.length)return n(h,N),we&&Ur(h,x),I;if(N===null){for(;x<m.length;x++)N=d(h,m[x],w),N!==null&&(p=s(N,p,x),A===null?I=N:A.sibling=N,A=N);return we&&Ur(h,x),I}for(N=r(h,N);x<m.length;x++)j=g(N,h,x,m[x],w),j!==null&&(t&&j.alternate!==null&&N.delete(j.key===null?x:j.key),p=s(j,p,x),A===null?I=j:A.sibling=j,A=j);return t&&N.forEach(function(pt){return e(h,pt)}),we&&Ur(h,x),I}function v(h,p,m,w){var I=Os(m);if(typeof I!="function")throw Error(C(150));if(m=I.call(m),m==null)throw Error(C(151));for(var A=I=null,N=p,x=p=0,j=null,Y=m.next();N!==null&&!Y.done;x++,Y=m.next()){N.index>x?(j=N,N=null):j=N.sibling;var pt=f(h,N,Y.value,w);if(pt===null){N===null&&(N=j);break}t&&N&&pt.alternate===null&&e(h,N),p=s(pt,p,x),A===null?I=pt:A.sibling=pt,A=pt,N=j}if(Y.done)return n(h,N),we&&Ur(h,x),I;if(N===null){for(;!Y.done;x++,Y=m.next())Y=d(h,Y.value,w),Y!==null&&(p=s(Y,p,x),A===null?I=Y:A.sibling=Y,A=Y);return we&&Ur(h,x),I}for(N=r(h,N);!Y.done;x++,Y=m.next())Y=g(N,h,x,Y.value,w),Y!==null&&(t&&Y.alternate!==null&&N.delete(Y.key===null?x:Y.key),p=s(Y,p,x),A===null?I=Y:A.sibling=Y,A=Y);return t&&N.forEach(function(Gt){return e(h,Gt)}),we&&Ur(h,x),I}function _(h,p,m,w){if(typeof m=="object"&&m!==null&&m.type===Ci&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Oa:e:{for(var I=m.key,A=p;A!==null;){if(A.key===I){if(I=m.type,I===Ci){if(A.tag===7){n(h,A.sibling),p=i(A,m.props.children),p.return=h,h=p;break e}}else if(A.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Zn&&_g(I)===A.type){n(h,A.sibling),p=i(A,m.props),p.ref=Fs(h,A,m),p.return=h,h=p;break e}n(h,A);break}else e(h,A);A=A.sibling}m.type===Ci?(p=Gr(m.props.children,h.mode,w,m.key),p.return=h,h=p):(w=wl(m.type,m.key,m.props,null,h.mode,w),w.ref=Fs(h,p,m),w.return=h,h=w)}return o(h);case ki:e:{for(A=m.key;p!==null;){if(p.key===A)if(p.tag===4&&p.stateNode.containerInfo===m.containerInfo&&p.stateNode.implementation===m.implementation){n(h,p.sibling),p=i(p,m.children||[]),p.return=h,h=p;break e}else{n(h,p);break}else e(h,p);p=p.sibling}p=lh(m,h.mode,w),p.return=h,h=p}return o(h);case Zn:return A=m._init,_(h,p,A(m._payload),w)}if(qs(m))return y(h,p,m,w);if(Os(m))return v(h,p,m,w);Ha(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,p!==null&&p.tag===6?(n(h,p.sibling),p=i(p,m),p.return=h,h=p):(n(h,p),p=ah(m,h.mode,w),p.return=h,h=p),o(h)):n(h,p)}return _}var rs=tw(!0),nw=tw(!1),ia={},gn=Pr(ia),Po=Pr(ia),xo=Pr(ia);function Br(t){if(t===ia)throw Error(C(174));return t}function zf(t,e){switch(fe(xo,e),fe(Po,t),fe(gn,ia),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Wh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Wh(e,t)}ge(gn),fe(gn,e)}function is(){ge(gn),ge(Po),ge(xo)}function rw(t){Br(xo.current);var e=Br(gn.current),n=Wh(e,t.type);e!==n&&(fe(Po,t),fe(gn,n))}function Bf(t){Po.current===t&&(ge(gn),ge(Po))}var Se=Pr(0);function Hl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var th=[];function jf(){for(var t=0;t<th.length;t++)th[t]._workInProgressVersionPrimary=null;th.length=0}var pl=Gn.ReactCurrentDispatcher,nh=Gn.ReactCurrentBatchConfig,ei=0,Te=null,Ue=null,He=null,Wl=!1,ao=!1,Oo=0,jI=0;function tt(){throw Error(C(321))}function Hf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!sn(t[n],e[n]))return!1;return!0}function Wf(t,e,n,r,i,s){if(ei=s,Te=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,pl.current=t===null||t.memoizedState===null?qI:GI,t=n(r,i),ao){s=0;do{if(ao=!1,Oo=0,25<=s)throw Error(C(301));s+=1,He=Ue=null,e.updateQueue=null,pl.current=QI,t=n(r,i)}while(ao)}if(pl.current=Kl,e=Ue!==null&&Ue.next!==null,ei=0,He=Ue=Te=null,Wl=!1,e)throw Error(C(300));return t}function Kf(){var t=Oo!==0;return Oo=0,t}function cn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?Te.memoizedState=He=t:He=He.next=t,He}function qt(){if(Ue===null){var t=Te.alternate;t=t!==null?t.memoizedState:null}else t=Ue.next;var e=He===null?Te.memoizedState:He.next;if(e!==null)He=e,Ue=t;else{if(t===null)throw Error(C(310));Ue=t,t={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},He===null?Te.memoizedState=He=t:He=He.next=t}return He}function Lo(t,e){return typeof e=="function"?e(t):e}function rh(t){var e=qt(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=Ue,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((ei&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,Te.lanes|=c,ti|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,sn(r,e.memoizedState)||(St=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Te.lanes|=s,ti|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ih(t){var e=qt(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);sn(s,e.memoizedState)||(St=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function iw(){}function sw(t,e){var n=Te,r=qt(),i=e(),s=!sn(r.memoizedState,i);if(s&&(r.memoizedState=i,St=!0),r=r.queue,qf(lw.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||He!==null&&He.memoizedState.tag&1){if(n.flags|=2048,Mo(9,aw.bind(null,n,r,i,e),void 0,null),We===null)throw Error(C(349));ei&30||ow(n,e,i)}return i}function ow(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Te.updateQueue,e===null?(e={lastEffect:null,stores:null},Te.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function aw(t,e,n,r){e.value=n,e.getSnapshot=r,uw(e)&&cw(t)}function lw(t,e,n){return n(function(){uw(e)&&cw(t)})}function uw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!sn(t,n)}catch{return!0}}function cw(t){var e=zn(t,1);e!==null&&rn(e,t,1,-1)}function Sg(t){var e=cn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Lo,lastRenderedState:t},e.queue=t,t=t.dispatch=KI.bind(null,Te,t),[e.memoizedState,t]}function Mo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Te.updateQueue,e===null?(e={lastEffect:null,stores:null},Te.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function hw(){return qt().memoizedState}function ml(t,e,n,r){var i=cn();Te.flags|=t,i.memoizedState=Mo(1|e,n,void 0,r===void 0?null:r)}function $u(t,e,n,r){var i=qt();r=r===void 0?null:r;var s=void 0;if(Ue!==null){var o=Ue.memoizedState;if(s=o.destroy,r!==null&&Hf(r,o.deps)){i.memoizedState=Mo(e,n,s,r);return}}Te.flags|=t,i.memoizedState=Mo(1|e,n,s,r)}function Tg(t,e){return ml(8390656,8,t,e)}function qf(t,e){return $u(2048,8,t,e)}function dw(t,e){return $u(4,2,t,e)}function fw(t,e){return $u(4,4,t,e)}function pw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function mw(t,e,n){return n=n!=null?n.concat([t]):null,$u(4,4,pw.bind(null,e,t),n)}function Gf(){}function gw(t,e){var n=qt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Hf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function yw(t,e){var n=qt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Hf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function vw(t,e,n){return ei&21?(sn(n,e)||(n=_0(),Te.lanes|=n,ti|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,St=!0),t.memoizedState=n)}function HI(t,e){var n=ce;ce=n!==0&&4>n?n:4,t(!0);var r=nh.transition;nh.transition={};try{t(!1),e()}finally{ce=n,nh.transition=r}}function ww(){return qt().memoizedState}function WI(t,e,n){var r=yr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ew(t))_w(e,n);else if(n=Y0(t,e,n,r),n!==null){var i=vt();rn(n,t,r,i),Sw(n,e,r)}}function KI(t,e,n){var r=yr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ew(t))_w(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,sn(a,o)){var l=e.interleaved;l===null?(i.next=i,bf(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Y0(t,e,i,r),n!==null&&(i=vt(),rn(n,t,r,i),Sw(n,e,r))}}function Ew(t){var e=t.alternate;return t===Te||e!==null&&e===Te}function _w(t,e){ao=Wl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Sw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,kf(t,n)}}var Kl={readContext:Kt,useCallback:tt,useContext:tt,useEffect:tt,useImperativeHandle:tt,useInsertionEffect:tt,useLayoutEffect:tt,useMemo:tt,useReducer:tt,useRef:tt,useState:tt,useDebugValue:tt,useDeferredValue:tt,useTransition:tt,useMutableSource:tt,useSyncExternalStore:tt,useId:tt,unstable_isNewReconciler:!1},qI={readContext:Kt,useCallback:function(t,e){return cn().memoizedState=[t,e===void 0?null:e],t},useContext:Kt,useEffect:Tg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ml(4194308,4,pw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ml(4194308,4,t,e)},useInsertionEffect:function(t,e){return ml(4,2,t,e)},useMemo:function(t,e){var n=cn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=cn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=WI.bind(null,Te,t),[r.memoizedState,t]},useRef:function(t){var e=cn();return t={current:t},e.memoizedState=t},useState:Sg,useDebugValue:Gf,useDeferredValue:function(t){return cn().memoizedState=t},useTransition:function(){var t=Sg(!1),e=t[0];return t=HI.bind(null,t[1]),cn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Te,i=cn();if(we){if(n===void 0)throw Error(C(407));n=n()}else{if(n=e(),We===null)throw Error(C(349));ei&30||ow(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Tg(lw.bind(null,r,s,t),[t]),r.flags|=2048,Mo(9,aw.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=cn(),e=We.identifierPrefix;if(we){var n=xn,r=Pn;n=(r&~(1<<32-nn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Oo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=jI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},GI={readContext:Kt,useCallback:gw,useContext:Kt,useEffect:qf,useImperativeHandle:mw,useInsertionEffect:dw,useLayoutEffect:fw,useMemo:yw,useReducer:rh,useRef:hw,useState:function(){return rh(Lo)},useDebugValue:Gf,useDeferredValue:function(t){var e=qt();return vw(e,Ue.memoizedState,t)},useTransition:function(){var t=rh(Lo)[0],e=qt().memoizedState;return[t,e]},useMutableSource:iw,useSyncExternalStore:sw,useId:ww,unstable_isNewReconciler:!1},QI={readContext:Kt,useCallback:gw,useContext:Kt,useEffect:qf,useImperativeHandle:mw,useInsertionEffect:dw,useLayoutEffect:fw,useMemo:yw,useReducer:ih,useRef:hw,useState:function(){return ih(Lo)},useDebugValue:Gf,useDeferredValue:function(t){var e=qt();return Ue===null?e.memoizedState=t:vw(e,Ue.memoizedState,t)},useTransition:function(){var t=ih(Lo)[0],e=qt().memoizedState;return[t,e]},useMutableSource:iw,useSyncExternalStore:sw,useId:ww,unstable_isNewReconciler:!1};function ss(t,e){try{var n="",r=e;do n+=TT(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function sh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function pd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var XI=typeof WeakMap=="function"?WeakMap:Map;function Tw(t,e,n){n=Un(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Gl||(Gl=!0,Id=r),pd(t,e)},n}function Iw(t,e,n){n=Un(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){pd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){pd(t,e),typeof r!="function"&&(gr===null?gr=new Set([this]):gr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Ig(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new XI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=ck.bind(null,t,e,n),e.then(t,t))}function kg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Cg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Un(-1,1),e.tag=2,mr(n,e,1))),n.lanes|=1),t)}var YI=Gn.ReactCurrentOwner,St=!1;function gt(t,e,n,r){e.child=t===null?nw(e,null,n,r):rs(e,t.child,n,r)}function Rg(t,e,n,r,i){n=n.render;var s=e.ref;return Wi(e,i),r=Wf(t,e,n,r,s,i),n=Kf(),t!==null&&!St?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Bn(t,e,i)):(we&&n&&Of(e),e.flags|=1,gt(t,e,r,i),e.child)}function Ag(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!np(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,kw(t,e,s,r,i)):(t=wl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ro,n(o,r)&&t.ref===e.ref)return Bn(t,e,i)}return e.flags|=1,t=vr(s,r),t.ref=e.ref,t.return=e,e.child=t}function kw(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ro(s,r)&&t.ref===e.ref)if(St=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(St=!0);else return e.lanes=t.lanes,Bn(t,e,i)}return md(t,e,n,r,i)}function Cw(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},fe($i,Rt),Rt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,fe($i,Rt),Rt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,fe($i,Rt),Rt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,fe($i,Rt),Rt|=r;return gt(t,e,i,n),e.child}function Rw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function md(t,e,n,r,i){var s=It(n)?Jr:ht.current;return s=ts(e,s),Wi(e,i),n=Wf(t,e,n,r,s,i),r=Kf(),t!==null&&!St?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Bn(t,e,i)):(we&&r&&Of(e),e.flags|=1,gt(t,e,n,i),e.child)}function Ng(t,e,n,r,i){if(It(n)){var s=!0;Fl(e)}else s=!1;if(Wi(e,i),e.stateNode===null)gl(t,e),ew(e,n,r),fd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Kt(u):(u=It(n)?Jr:ht.current,u=ts(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Eg(e,o,r,u),er=!1;var f=e.memoizedState;o.state=f,jl(e,r,o,i),l=e.memoizedState,a!==r||f!==l||Tt.current||er?(typeof c=="function"&&(dd(e,n,c,r),l=e.memoizedState),(a=er||wg(e,n,a,r,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,J0(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Yt(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Kt(l):(l=It(n)?Jr:ht.current,l=ts(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Eg(e,o,r,l),er=!1,f=e.memoizedState,o.state=f,jl(e,r,o,i);var y=e.memoizedState;a!==d||f!==y||Tt.current||er?(typeof g=="function"&&(dd(e,n,g,r),y=e.memoizedState),(u=er||wg(e,n,u,r,f,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return gd(t,e,n,r,s,i)}function gd(t,e,n,r,i,s){Rw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&pg(e,n,!1),Bn(t,e,s);r=e.stateNode,YI.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=rs(e,t.child,null,s),e.child=rs(e,null,a,s)):gt(t,e,a,s),e.memoizedState=r.state,i&&pg(e,n,!0),e.child}function Aw(t){var e=t.stateNode;e.pendingContext?fg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&fg(t,e.context,!1),zf(t,e.containerInfo)}function Dg(t,e,n,r,i){return ns(),Mf(i),e.flags|=256,gt(t,e,n,r),e.child}var yd={dehydrated:null,treeContext:null,retryLane:0};function vd(t){return{baseLanes:t,cachePool:null,transitions:null}}function Nw(t,e,n){var r=e.pendingProps,i=Se.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),fe(Se,i&1),t===null)return cd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=bu(o,r,0,null),t=Gr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=vd(n),e.memoizedState=yd,t):Qf(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return JI(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=vr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=vr(a,s):(s=Gr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?vd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=yd,r}return s=t.child,t=s.sibling,r=vr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Qf(t,e){return e=bu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Wa(t,e,n,r){return r!==null&&Mf(r),rs(e,t.child,null,n),t=Qf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function JI(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=sh(Error(C(422))),Wa(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=bu({mode:"visible",children:r.children},i,0,null),s=Gr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&rs(e,t.child,null,o),e.child.memoizedState=vd(o),e.memoizedState=yd,s);if(!(e.mode&1))return Wa(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(C(419)),r=sh(s,r,void 0),Wa(t,e,o,r)}if(a=(o&t.childLanes)!==0,St||a){if(r=We,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,zn(t,i),rn(r,t,i,-1))}return tp(),r=sh(Error(C(421))),Wa(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=hk.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,At=pr(i.nextSibling),Dt=e,we=!0,en=null,t!==null&&(bt[Vt++]=Pn,bt[Vt++]=xn,bt[Vt++]=Zr,Pn=t.id,xn=t.overflow,Zr=e),e=Qf(e,r.children),e.flags|=4096,e)}function Pg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),hd(t.return,e,n)}function oh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Dw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(gt(t,e,r.children,n),r=Se.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Pg(t,n,e);else if(t.tag===19)Pg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(fe(Se,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Hl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),oh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Hl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}oh(e,!0,n,null,s);break;case"together":oh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function gl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Bn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ti|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(C(153));if(e.child!==null){for(t=e.child,n=vr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=vr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function ZI(t,e,n){switch(e.tag){case 3:Aw(e),ns();break;case 5:rw(e);break;case 1:It(e.type)&&Fl(e);break;case 4:zf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;fe(zl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(fe(Se,Se.current&1),e.flags|=128,null):n&e.child.childLanes?Nw(t,e,n):(fe(Se,Se.current&1),t=Bn(t,e,n),t!==null?t.sibling:null);fe(Se,Se.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Dw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),fe(Se,Se.current),r)break;return null;case 22:case 23:return e.lanes=0,Cw(t,e,n)}return Bn(t,e,n)}var Pw,wd,xw,Ow;Pw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};wd=function(){};xw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Br(gn.current);var s=null;switch(n){case"input":i=zh(t,i),r=zh(t,r),s=[];break;case"select":i=Ie({},i,{value:void 0}),r=Ie({},r,{value:void 0}),s=[];break;case"textarea":i=Hh(t,i),r=Hh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=$l)}Kh(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Eo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Eo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&pe("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Ow=function(t,e,n,r){n!==r&&(e.flags|=4)};function bs(t,e){if(!we)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function nt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function ek(t,e,n){var r=e.pendingProps;switch(Lf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(e),null;case 1:return It(e.type)&&Ul(),nt(e),null;case 3:return r=e.stateNode,is(),ge(Tt),ge(ht),jf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ja(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,en!==null&&(Rd(en),en=null))),wd(t,e),nt(e),null;case 5:Bf(e);var i=Br(xo.current);if(n=e.type,t!==null&&e.stateNode!=null)xw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(C(166));return nt(e),null}if(t=Br(gn.current),ja(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[hn]=e,r[Do]=s,t=(e.mode&1)!==0,n){case"dialog":pe("cancel",r),pe("close",r);break;case"iframe":case"object":case"embed":pe("load",r);break;case"video":case"audio":for(i=0;i<Qs.length;i++)pe(Qs[i],r);break;case"source":pe("error",r);break;case"img":case"image":case"link":pe("error",r),pe("load",r);break;case"details":pe("toggle",r);break;case"input":Vm(r,s),pe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},pe("invalid",r);break;case"textarea":Bm(r,s),pe("invalid",r)}Kh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ba(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ba(r.textContent,a,t),i=["children",""+a]):Eo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&pe("scroll",r)}switch(n){case"input":La(r),zm(r,s,!0);break;case"textarea":La(r),jm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=$l)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=o0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[hn]=e,t[Do]=r,Pw(t,e,!1,!1),e.stateNode=t;e:{switch(o=qh(n,r),n){case"dialog":pe("cancel",t),pe("close",t),i=r;break;case"iframe":case"object":case"embed":pe("load",t),i=r;break;case"video":case"audio":for(i=0;i<Qs.length;i++)pe(Qs[i],t);i=r;break;case"source":pe("error",t),i=r;break;case"img":case"image":case"link":pe("error",t),pe("load",t),i=r;break;case"details":pe("toggle",t),i=r;break;case"input":Vm(t,r),i=zh(t,r),pe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ie({},r,{value:void 0}),pe("invalid",t);break;case"textarea":Bm(t,r),i=Hh(t,r),pe("invalid",t);break;default:i=r}Kh(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?u0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&a0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&_o(t,l):typeof l=="number"&&_o(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Eo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&pe("scroll",t):l!=null&&wf(t,s,l,o))}switch(n){case"input":La(t),zm(t,r,!1);break;case"textarea":La(t),jm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ir(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?zi(t,!!r.multiple,s,!1):r.defaultValue!=null&&zi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=$l)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return nt(e),null;case 6:if(t&&e.stateNode!=null)Ow(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(C(166));if(n=Br(xo.current),Br(gn.current),ja(e)){if(r=e.stateNode,n=e.memoizedProps,r[hn]=e,(s=r.nodeValue!==n)&&(t=Dt,t!==null))switch(t.tag){case 3:Ba(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ba(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[hn]=e,e.stateNode=r}return nt(e),null;case 13:if(ge(Se),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(we&&At!==null&&e.mode&1&&!(e.flags&128))X0(),ns(),e.flags|=98560,s=!1;else if(s=ja(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(C(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(C(317));s[hn]=e}else ns(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;nt(e),s=!1}else en!==null&&(Rd(en),en=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Se.current&1?Fe===0&&(Fe=3):tp())),e.updateQueue!==null&&(e.flags|=4),nt(e),null);case 4:return is(),wd(t,e),t===null&&Ao(e.stateNode.containerInfo),nt(e),null;case 10:return Ff(e.type._context),nt(e),null;case 17:return It(e.type)&&Ul(),nt(e),null;case 19:if(ge(Se),s=e.memoizedState,s===null)return nt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)bs(s,!1);else{if(Fe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Hl(t),o!==null){for(e.flags|=128,bs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return fe(Se,Se.current&1|2),e.child}t=t.sibling}s.tail!==null&&De()>os&&(e.flags|=128,r=!0,bs(s,!1),e.lanes=4194304)}else{if(!r)if(t=Hl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),bs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!we)return nt(e),null}else 2*De()-s.renderingStartTime>os&&n!==1073741824&&(e.flags|=128,r=!0,bs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=De(),e.sibling=null,n=Se.current,fe(Se,r?n&1|2:n&1),e):(nt(e),null);case 22:case 23:return ep(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Rt&1073741824&&(nt(e),e.subtreeFlags&6&&(e.flags|=8192)):nt(e),null;case 24:return null;case 25:return null}throw Error(C(156,e.tag))}function tk(t,e){switch(Lf(e),e.tag){case 1:return It(e.type)&&Ul(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return is(),ge(Tt),ge(ht),jf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Bf(e),null;case 13:if(ge(Se),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(C(340));ns()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ge(Se),null;case 4:return is(),null;case 10:return Ff(e.type._context),null;case 22:case 23:return ep(),null;case 24:return null;default:return null}}var Ka=!1,st=!1,nk=typeof WeakSet=="function"?WeakSet:Set,L=null;function Mi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ce(t,e,r)}else n.current=null}function Ed(t,e,n){try{n()}catch(r){Ce(t,e,r)}}var xg=!1;function rk(t,e){if(rd=Ol,t=U0(),xf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,f=null;t:for(;;){for(var g;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)f=d,d=g;for(;;){if(d===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++c===r&&(l=o),(g=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(id={focusedElem:t,selectionRange:n},Ol=!1,L=e;L!==null;)if(e=L,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,L=t;else for(;L!==null;){e=L;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,_=y.memoizedState,h=e.stateNode,p=h.getSnapshotBeforeUpdate(e.elementType===e.type?v:Yt(e.type,v),_);h.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(w){Ce(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,L=t;break}L=e.return}return y=xg,xg=!1,y}function lo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ed(e,n,s)}i=i.next}while(i!==r)}}function Uu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function _d(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Lw(t){var e=t.alternate;e!==null&&(t.alternate=null,Lw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[hn],delete e[Do],delete e[ad],delete e[bI],delete e[VI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Mw(t){return t.tag===5||t.tag===3||t.tag===4}function Og(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Mw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Sd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=$l));else if(r!==4&&(t=t.child,t!==null))for(Sd(t,e,n),t=t.sibling;t!==null;)Sd(t,e,n),t=t.sibling}function Td(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Td(t,e,n),t=t.sibling;t!==null;)Td(t,e,n),t=t.sibling}var Ge=null,Zt=!1;function Xn(t,e,n){for(n=n.child;n!==null;)$w(t,e,n),n=n.sibling}function $w(t,e,n){if(mn&&typeof mn.onCommitFiberUnmount=="function")try{mn.onCommitFiberUnmount(Nu,n)}catch{}switch(n.tag){case 5:st||Mi(n,e);case 6:var r=Ge,i=Zt;Ge=null,Xn(t,e,n),Ge=r,Zt=i,Ge!==null&&(Zt?(t=Ge,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ge.removeChild(n.stateNode));break;case 18:Ge!==null&&(Zt?(t=Ge,n=n.stateNode,t.nodeType===8?Zc(t.parentNode,n):t.nodeType===1&&Zc(t,n),ko(t)):Zc(Ge,n.stateNode));break;case 4:r=Ge,i=Zt,Ge=n.stateNode.containerInfo,Zt=!0,Xn(t,e,n),Ge=r,Zt=i;break;case 0:case 11:case 14:case 15:if(!st&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ed(n,e,o),i=i.next}while(i!==r)}Xn(t,e,n);break;case 1:if(!st&&(Mi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ce(n,e,a)}Xn(t,e,n);break;case 21:Xn(t,e,n);break;case 22:n.mode&1?(st=(r=st)||n.memoizedState!==null,Xn(t,e,n),st=r):Xn(t,e,n);break;default:Xn(t,e,n)}}function Lg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new nk),e.forEach(function(r){var i=dk.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Xt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ge=a.stateNode,Zt=!1;break e;case 3:Ge=a.stateNode.containerInfo,Zt=!0;break e;case 4:Ge=a.stateNode.containerInfo,Zt=!0;break e}a=a.return}if(Ge===null)throw Error(C(160));$w(s,o,i),Ge=null,Zt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ce(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Uw(e,t),e=e.sibling}function Uw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Xt(e,t),un(t),r&4){try{lo(3,t,t.return),Uu(3,t)}catch(v){Ce(t,t.return,v)}try{lo(5,t,t.return)}catch(v){Ce(t,t.return,v)}}break;case 1:Xt(e,t),un(t),r&512&&n!==null&&Mi(n,n.return);break;case 5:if(Xt(e,t),un(t),r&512&&n!==null&&Mi(n,n.return),t.flags&32){var i=t.stateNode;try{_o(i,"")}catch(v){Ce(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&i0(i,s),qh(a,o);var u=qh(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?u0(i,d):c==="dangerouslySetInnerHTML"?a0(i,d):c==="children"?_o(i,d):wf(i,c,d,u)}switch(a){case"input":Bh(i,s);break;case"textarea":s0(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?zi(i,!!s.multiple,g,!1):f!==!!s.multiple&&(s.defaultValue!=null?zi(i,!!s.multiple,s.defaultValue,!0):zi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Do]=s}catch(v){Ce(t,t.return,v)}}break;case 6:if(Xt(e,t),un(t),r&4){if(t.stateNode===null)throw Error(C(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){Ce(t,t.return,v)}}break;case 3:if(Xt(e,t),un(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ko(e.containerInfo)}catch(v){Ce(t,t.return,v)}break;case 4:Xt(e,t),un(t);break;case 13:Xt(e,t),un(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Jf=De())),r&4&&Lg(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(st=(u=st)||c,Xt(e,t),st=u):Xt(e,t),un(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(L=t,c=t.child;c!==null;){for(d=L=c;L!==null;){switch(f=L,g=f.child,f.tag){case 0:case 11:case 14:case 15:lo(4,f,f.return);break;case 1:Mi(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){Ce(r,n,v)}}break;case 5:Mi(f,f.return);break;case 22:if(f.memoizedState!==null){$g(d);continue}}g!==null?(g.return=f,L=g):$g(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=l0("display",o))}catch(v){Ce(t,t.return,v)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){Ce(t,t.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Xt(e,t),un(t),r&4&&Lg(t);break;case 21:break;default:Xt(e,t),un(t)}}function un(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Mw(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(_o(i,""),r.flags&=-33);var s=Og(t);Td(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Og(t);Sd(t,a,o);break;default:throw Error(C(161))}}catch(l){Ce(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ik(t,e,n){L=t,Fw(t)}function Fw(t,e,n){for(var r=(t.mode&1)!==0;L!==null;){var i=L,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ka;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||st;a=Ka;var u=st;if(Ka=o,(st=l)&&!u)for(L=i;L!==null;)o=L,l=o.child,o.tag===22&&o.memoizedState!==null?Ug(i):l!==null?(l.return=o,L=l):Ug(i);for(;s!==null;)L=s,Fw(s),s=s.sibling;L=i,Ka=a,st=u}Mg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,L=s):Mg(t)}}function Mg(t){for(;L!==null;){var e=L;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:st||Uu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!st)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Yt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&vg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}vg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&ko(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}st||e.flags&512&&_d(e)}catch(f){Ce(e,e.return,f)}}if(e===t){L=null;break}if(n=e.sibling,n!==null){n.return=e.return,L=n;break}L=e.return}}function $g(t){for(;L!==null;){var e=L;if(e===t){L=null;break}var n=e.sibling;if(n!==null){n.return=e.return,L=n;break}L=e.return}}function Ug(t){for(;L!==null;){var e=L;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Uu(4,e)}catch(l){Ce(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ce(e,i,l)}}var s=e.return;try{_d(e)}catch(l){Ce(e,s,l)}break;case 5:var o=e.return;try{_d(e)}catch(l){Ce(e,o,l)}}}catch(l){Ce(e,e.return,l)}if(e===t){L=null;break}var a=e.sibling;if(a!==null){a.return=e.return,L=a;break}L=e.return}}var sk=Math.ceil,ql=Gn.ReactCurrentDispatcher,Xf=Gn.ReactCurrentOwner,Ht=Gn.ReactCurrentBatchConfig,se=0,We=null,Le=null,Ye=0,Rt=0,$i=Pr(0),Fe=0,$o=null,ti=0,Fu=0,Yf=0,uo=null,_t=null,Jf=0,os=1/0,An=null,Gl=!1,Id=null,gr=null,qa=!1,ur=null,Ql=0,co=0,kd=null,yl=-1,vl=0;function vt(){return se&6?De():yl!==-1?yl:yl=De()}function yr(t){return t.mode&1?se&2&&Ye!==0?Ye&-Ye:BI.transition!==null?(vl===0&&(vl=_0()),vl):(t=ce,t!==0||(t=window.event,t=t===void 0?16:A0(t.type)),t):1}function rn(t,e,n,r){if(50<co)throw co=0,kd=null,Error(C(185));ta(t,n,r),(!(se&2)||t!==We)&&(t===We&&(!(se&2)&&(Fu|=n),Fe===4&&nr(t,Ye)),kt(t,r),n===1&&se===0&&!(e.mode&1)&&(os=De()+500,Lu&&xr()))}function kt(t,e){var n=t.callbackNode;BT(t,e);var r=xl(t,t===We?Ye:0);if(r===0)n!==null&&Km(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Km(n),e===1)t.tag===0?zI(Fg.bind(null,t)):q0(Fg.bind(null,t)),UI(function(){!(se&6)&&xr()}),n=null;else{switch(S0(r)){case 1:n=If;break;case 4:n=w0;break;case 16:n=Pl;break;case 536870912:n=E0;break;default:n=Pl}n=Kw(n,bw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function bw(t,e){if(yl=-1,vl=0,se&6)throw Error(C(327));var n=t.callbackNode;if(Ki()&&t.callbackNode!==n)return null;var r=xl(t,t===We?Ye:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Xl(t,r);else{e=r;var i=se;se|=2;var s=zw();(We!==t||Ye!==e)&&(An=null,os=De()+500,qr(t,e));do try{lk();break}catch(a){Vw(t,a)}while(1);Uf(),ql.current=s,se=i,Le!==null?e=0:(We=null,Ye=0,e=Fe)}if(e!==0){if(e===2&&(i=Jh(t),i!==0&&(r=i,e=Cd(t,i))),e===1)throw n=$o,qr(t,0),nr(t,r),kt(t,De()),n;if(e===6)nr(t,r);else{if(i=t.current.alternate,!(r&30)&&!ok(i)&&(e=Xl(t,r),e===2&&(s=Jh(t),s!==0&&(r=s,e=Cd(t,s))),e===1))throw n=$o,qr(t,0),nr(t,r),kt(t,De()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(C(345));case 2:Fr(t,_t,An);break;case 3:if(nr(t,r),(r&130023424)===r&&(e=Jf+500-De(),10<e)){if(xl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){vt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=od(Fr.bind(null,t,_t,An),e);break}Fr(t,_t,An);break;case 4:if(nr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-nn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=De()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*sk(r/1960))-r,10<r){t.timeoutHandle=od(Fr.bind(null,t,_t,An),r);break}Fr(t,_t,An);break;case 5:Fr(t,_t,An);break;default:throw Error(C(329))}}}return kt(t,De()),t.callbackNode===n?bw.bind(null,t):null}function Cd(t,e){var n=uo;return t.current.memoizedState.isDehydrated&&(qr(t,e).flags|=256),t=Xl(t,e),t!==2&&(e=_t,_t=n,e!==null&&Rd(e)),t}function Rd(t){_t===null?_t=t:_t.push.apply(_t,t)}function ok(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!sn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function nr(t,e){for(e&=~Yf,e&=~Fu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-nn(e),r=1<<n;t[n]=-1,e&=~r}}function Fg(t){if(se&6)throw Error(C(327));Ki();var e=xl(t,0);if(!(e&1))return kt(t,De()),null;var n=Xl(t,e);if(t.tag!==0&&n===2){var r=Jh(t);r!==0&&(e=r,n=Cd(t,r))}if(n===1)throw n=$o,qr(t,0),nr(t,e),kt(t,De()),n;if(n===6)throw Error(C(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Fr(t,_t,An),kt(t,De()),null}function Zf(t,e){var n=se;se|=1;try{return t(e)}finally{se=n,se===0&&(os=De()+500,Lu&&xr())}}function ni(t){ur!==null&&ur.tag===0&&!(se&6)&&Ki();var e=se;se|=1;var n=Ht.transition,r=ce;try{if(Ht.transition=null,ce=1,t)return t()}finally{ce=r,Ht.transition=n,se=e,!(se&6)&&xr()}}function ep(){Rt=$i.current,ge($i)}function qr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,$I(n)),Le!==null)for(n=Le.return;n!==null;){var r=n;switch(Lf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ul();break;case 3:is(),ge(Tt),ge(ht),jf();break;case 5:Bf(r);break;case 4:is();break;case 13:ge(Se);break;case 19:ge(Se);break;case 10:Ff(r.type._context);break;case 22:case 23:ep()}n=n.return}if(We=t,Le=t=vr(t.current,null),Ye=Rt=e,Fe=0,$o=null,Yf=Fu=ti=0,_t=uo=null,zr!==null){for(e=0;e<zr.length;e++)if(n=zr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}zr=null}return t}function Vw(t,e){do{var n=Le;try{if(Uf(),pl.current=Kl,Wl){for(var r=Te.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Wl=!1}if(ei=0,He=Ue=Te=null,ao=!1,Oo=0,Xf.current=null,n===null||n.return===null){Fe=1,$o=e,Le=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ye,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=kg(o);if(g!==null){g.flags&=-257,Cg(g,o,a,s,e),g.mode&1&&Ig(s,u,e),e=g,l=u;var y=e.updateQueue;if(y===null){var v=new Set;v.add(l),e.updateQueue=v}else y.add(l);break e}else{if(!(e&1)){Ig(s,u,e),tp();break e}l=Error(C(426))}}else if(we&&a.mode&1){var _=kg(o);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Cg(_,o,a,s,e),Mf(ss(l,a));break e}}s=l=ss(l,a),Fe!==4&&(Fe=2),uo===null?uo=[s]:uo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=Tw(s,l,e);yg(s,h);break e;case 1:a=l;var p=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(gr===null||!gr.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=Iw(s,a,e);yg(s,w);break e}}s=s.return}while(s!==null)}jw(n)}catch(I){e=I,Le===n&&n!==null&&(Le=n=n.return);continue}break}while(1)}function zw(){var t=ql.current;return ql.current=Kl,t===null?Kl:t}function tp(){(Fe===0||Fe===3||Fe===2)&&(Fe=4),We===null||!(ti&268435455)&&!(Fu&268435455)||nr(We,Ye)}function Xl(t,e){var n=se;se|=2;var r=zw();(We!==t||Ye!==e)&&(An=null,qr(t,e));do try{ak();break}catch(i){Vw(t,i)}while(1);if(Uf(),se=n,ql.current=r,Le!==null)throw Error(C(261));return We=null,Ye=0,Fe}function ak(){for(;Le!==null;)Bw(Le)}function lk(){for(;Le!==null&&!OT();)Bw(Le)}function Bw(t){var e=Ww(t.alternate,t,Rt);t.memoizedProps=t.pendingProps,e===null?jw(t):Le=e,Xf.current=null}function jw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=tk(n,e),n!==null){n.flags&=32767,Le=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Fe=6,Le=null;return}}else if(n=ek(n,e,Rt),n!==null){Le=n;return}if(e=e.sibling,e!==null){Le=e;return}Le=e=t}while(e!==null);Fe===0&&(Fe=5)}function Fr(t,e,n){var r=ce,i=Ht.transition;try{Ht.transition=null,ce=1,uk(t,e,n,r)}finally{Ht.transition=i,ce=r}return null}function uk(t,e,n,r){do Ki();while(ur!==null);if(se&6)throw Error(C(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(C(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(jT(t,s),t===We&&(Le=We=null,Ye=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||qa||(qa=!0,Kw(Pl,function(){return Ki(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ht.transition,Ht.transition=null;var o=ce;ce=1;var a=se;se|=4,Xf.current=null,rk(t,n),Uw(n,t),NI(id),Ol=!!rd,id=rd=null,t.current=n,ik(n),LT(),se=a,ce=o,Ht.transition=s}else t.current=n;if(qa&&(qa=!1,ur=t,Ql=i),s=t.pendingLanes,s===0&&(gr=null),UT(n.stateNode),kt(t,De()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Gl)throw Gl=!1,t=Id,Id=null,t;return Ql&1&&t.tag!==0&&Ki(),s=t.pendingLanes,s&1?t===kd?co++:(co=0,kd=t):co=0,xr(),null}function Ki(){if(ur!==null){var t=S0(Ql),e=Ht.transition,n=ce;try{if(Ht.transition=null,ce=16>t?16:t,ur===null)var r=!1;else{if(t=ur,ur=null,Ql=0,se&6)throw Error(C(331));var i=se;for(se|=4,L=t.current;L!==null;){var s=L,o=s.child;if(L.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(L=u;L!==null;){var c=L;switch(c.tag){case 0:case 11:case 15:lo(8,c,s)}var d=c.child;if(d!==null)d.return=c,L=d;else for(;L!==null;){c=L;var f=c.sibling,g=c.return;if(Lw(c),c===u){L=null;break}if(f!==null){f.return=g,L=f;break}L=g}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var _=v.sibling;v.sibling=null,v=_}while(v!==null)}}L=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,L=o;else e:for(;L!==null;){if(s=L,s.flags&2048)switch(s.tag){case 0:case 11:case 15:lo(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,L=h;break e}L=s.return}}var p=t.current;for(L=p;L!==null;){o=L;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,L=m;else e:for(o=p;L!==null;){if(a=L,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Uu(9,a)}}catch(I){Ce(a,a.return,I)}if(a===o){L=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,L=w;break e}L=a.return}}if(se=i,xr(),mn&&typeof mn.onPostCommitFiberRoot=="function")try{mn.onPostCommitFiberRoot(Nu,t)}catch{}r=!0}return r}finally{ce=n,Ht.transition=e}}return!1}function bg(t,e,n){e=ss(n,e),e=Tw(t,e,1),t=mr(t,e,1),e=vt(),t!==null&&(ta(t,1,e),kt(t,e))}function Ce(t,e,n){if(t.tag===3)bg(t,t,n);else for(;e!==null;){if(e.tag===3){bg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(gr===null||!gr.has(r))){t=ss(n,t),t=Iw(e,t,1),e=mr(e,t,1),t=vt(),e!==null&&(ta(e,1,t),kt(e,t));break}}e=e.return}}function ck(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=vt(),t.pingedLanes|=t.suspendedLanes&n,We===t&&(Ye&n)===n&&(Fe===4||Fe===3&&(Ye&130023424)===Ye&&500>De()-Jf?qr(t,0):Yf|=n),kt(t,e)}function Hw(t,e){e===0&&(t.mode&1?(e=Ua,Ua<<=1,!(Ua&130023424)&&(Ua=4194304)):e=1);var n=vt();t=zn(t,e),t!==null&&(ta(t,e,n),kt(t,n))}function hk(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Hw(t,n)}function dk(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(e),Hw(t,n)}var Ww;Ww=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Tt.current)St=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return St=!1,ZI(t,e,n);St=!!(t.flags&131072)}else St=!1,we&&e.flags&1048576&&G0(e,Vl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;gl(t,e),t=e.pendingProps;var i=ts(e,ht.current);Wi(e,n),i=Wf(null,e,r,t,i,n);var s=Kf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,It(r)?(s=!0,Fl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Vf(e),i.updater=Mu,e.stateNode=i,i._reactInternals=e,fd(e,r,t,n),e=gd(null,e,r,!0,s,n)):(e.tag=0,we&&s&&Of(e),gt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(gl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=pk(r),t=Yt(r,t),i){case 0:e=md(null,e,r,t,n);break e;case 1:e=Ng(null,e,r,t,n);break e;case 11:e=Rg(null,e,r,t,n);break e;case 14:e=Ag(null,e,r,Yt(r.type,t),n);break e}throw Error(C(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yt(r,i),md(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yt(r,i),Ng(t,e,r,i,n);case 3:e:{if(Aw(e),t===null)throw Error(C(387));r=e.pendingProps,s=e.memoizedState,i=s.element,J0(t,e),jl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ss(Error(C(423)),e),e=Dg(t,e,r,n,i);break e}else if(r!==i){i=ss(Error(C(424)),e),e=Dg(t,e,r,n,i);break e}else for(At=pr(e.stateNode.containerInfo.firstChild),Dt=e,we=!0,en=null,n=nw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ns(),r===i){e=Bn(t,e,n);break e}gt(t,e,r,n)}e=e.child}return e;case 5:return rw(e),t===null&&cd(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,sd(r,i)?o=null:s!==null&&sd(r,s)&&(e.flags|=32),Rw(t,e),gt(t,e,o,n),e.child;case 6:return t===null&&cd(e),null;case 13:return Nw(t,e,n);case 4:return zf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=rs(e,null,r,n):gt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yt(r,i),Rg(t,e,r,i,n);case 7:return gt(t,e,e.pendingProps,n),e.child;case 8:return gt(t,e,e.pendingProps.children,n),e.child;case 12:return gt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,fe(zl,r._currentValue),r._currentValue=o,s!==null)if(sn(s.value,o)){if(s.children===i.children&&!Tt.current){e=Bn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Un(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),hd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(C(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),hd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}gt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Wi(e,n),i=Kt(i),r=r(i),e.flags|=1,gt(t,e,r,n),e.child;case 14:return r=e.type,i=Yt(r,e.pendingProps),i=Yt(r.type,i),Ag(t,e,r,i,n);case 15:return kw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yt(r,i),gl(t,e),e.tag=1,It(r)?(t=!0,Fl(e)):t=!1,Wi(e,n),ew(e,r,i),fd(e,r,i,n),gd(null,e,r,!0,t,n);case 19:return Dw(t,e,n);case 22:return Cw(t,e,n)}throw Error(C(156,e.tag))};function Kw(t,e){return v0(t,e)}function fk(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jt(t,e,n,r){return new fk(t,e,n,r)}function np(t){return t=t.prototype,!(!t||!t.isReactComponent)}function pk(t){if(typeof t=="function")return np(t)?1:0;if(t!=null){if(t=t.$$typeof,t===_f)return 11;if(t===Sf)return 14}return 2}function vr(t,e){var n=t.alternate;return n===null?(n=jt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function wl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")np(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ci:return Gr(n.children,i,s,e);case Ef:o=8,i|=8;break;case Uh:return t=jt(12,n,e,i|2),t.elementType=Uh,t.lanes=s,t;case Fh:return t=jt(13,n,e,i),t.elementType=Fh,t.lanes=s,t;case bh:return t=jt(19,n,e,i),t.elementType=bh,t.lanes=s,t;case t0:return bu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Zv:o=10;break e;case e0:o=9;break e;case _f:o=11;break e;case Sf:o=14;break e;case Zn:o=16,r=null;break e}throw Error(C(130,t==null?t:typeof t,""))}return e=jt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Gr(t,e,n,r){return t=jt(7,t,r,e),t.lanes=n,t}function bu(t,e,n,r){return t=jt(22,t,r,e),t.elementType=t0,t.lanes=n,t.stateNode={isHidden:!1},t}function ah(t,e,n){return t=jt(6,t,null,e),t.lanes=n,t}function lh(t,e,n){return e=jt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function mk(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bc(0),this.expirationTimes=Bc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function rp(t,e,n,r,i,s,o,a,l){return t=new mk(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=jt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vf(s),t}function gk(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ki,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function qw(t){if(!t)return kr;t=t._reactInternals;e:{if(fi(t)!==t||t.tag!==1)throw Error(C(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(It(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(C(171))}if(t.tag===1){var n=t.type;if(It(n))return K0(t,n,e)}return e}function Gw(t,e,n,r,i,s,o,a,l){return t=rp(n,r,!0,t,i,s,o,a,l),t.context=qw(null),n=t.current,r=vt(),i=yr(n),s=Un(r,i),s.callback=e??null,mr(n,s,i),t.current.lanes=i,ta(t,i,r),kt(t,r),t}function Vu(t,e,n,r){var i=e.current,s=vt(),o=yr(i);return n=qw(n),e.context===null?e.context=n:e.pendingContext=n,e=Un(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=mr(i,e,o),t!==null&&(rn(t,i,o,s),fl(t,i,o)),o}function Yl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Vg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ip(t,e){Vg(t,e),(t=t.alternate)&&Vg(t,e)}function yk(){return null}var Qw=typeof reportError=="function"?reportError:function(t){console.error(t)};function sp(t){this._internalRoot=t}zu.prototype.render=sp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(C(409));Vu(t,e,null,null)};zu.prototype.unmount=sp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ni(function(){Vu(null,t,null,null)}),e[Vn]=null}};function zu(t){this._internalRoot=t}zu.prototype.unstable_scheduleHydration=function(t){if(t){var e=k0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<tr.length&&e!==0&&e<tr[n].priority;n++);tr.splice(n,0,t),n===0&&R0(t)}};function op(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Bu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function zg(){}function vk(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Yl(o);s.call(u)}}var o=Gw(e,r,t,0,null,!1,!1,"",zg);return t._reactRootContainer=o,t[Vn]=o.current,Ao(t.nodeType===8?t.parentNode:t),ni(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Yl(l);a.call(u)}}var l=rp(t,0,!1,null,null,!1,!1,"",zg);return t._reactRootContainer=l,t[Vn]=l.current,Ao(t.nodeType===8?t.parentNode:t),ni(function(){Vu(e,l,n,r)}),l}function ju(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Yl(o);a.call(l)}}Vu(e,o,t,i)}else o=vk(n,e,t,i,r);return Yl(o)}T0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Gs(e.pendingLanes);n!==0&&(kf(e,n|1),kt(e,De()),!(se&6)&&(os=De()+500,xr()))}break;case 13:ni(function(){var r=zn(t,1);if(r!==null){var i=vt();rn(r,t,1,i)}}),ip(t,1)}};Cf=function(t){if(t.tag===13){var e=zn(t,134217728);if(e!==null){var n=vt();rn(e,t,134217728,n)}ip(t,134217728)}};I0=function(t){if(t.tag===13){var e=yr(t),n=zn(t,e);if(n!==null){var r=vt();rn(n,t,e,r)}ip(t,e)}};k0=function(){return ce};C0=function(t,e){var n=ce;try{return ce=t,e()}finally{ce=n}};Qh=function(t,e,n){switch(e){case"input":if(Bh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ou(r);if(!i)throw Error(C(90));r0(r),Bh(r,i)}}}break;case"textarea":s0(t,n);break;case"select":e=n.value,e!=null&&zi(t,!!n.multiple,e,!1)}};d0=Zf;f0=ni;var wk={usingClientEntryPoint:!1,Events:[ra,Di,Ou,c0,h0,Zf]},Vs={findFiberByHostInstance:Vr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Ek={bundleType:Vs.bundleType,version:Vs.version,rendererPackageName:Vs.rendererPackageName,rendererConfig:Vs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Gn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=g0(t),t===null?null:t.stateNode},findFiberByHostInstance:Vs.findFiberByHostInstance||yk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ga=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ga.isDisabled&&Ga.supportsFiber)try{Nu=Ga.inject(Ek),mn=Ga}catch{}}Ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wk;Ot.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!op(e))throw Error(C(200));return gk(t,e,null,n)};Ot.createRoot=function(t,e){if(!op(t))throw Error(C(299));var n=!1,r="",i=Qw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=rp(t,1,!1,null,null,n,!1,r,i),t[Vn]=e.current,Ao(t.nodeType===8?t.parentNode:t),new sp(e)};Ot.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(C(188)):(t=Object.keys(t).join(","),Error(C(268,t)));return t=g0(e),t=t===null?null:t.stateNode,t};Ot.flushSync=function(t){return ni(t)};Ot.hydrate=function(t,e,n){if(!Bu(e))throw Error(C(200));return ju(null,t,e,!0,n)};Ot.hydrateRoot=function(t,e,n){if(!op(t))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Qw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Gw(e,null,t,1,n??null,i,!1,s,o),t[Vn]=e.current,Ao(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new zu(e)};Ot.render=function(t,e,n){if(!Bu(e))throw Error(C(200));return ju(null,t,e,!1,n)};Ot.unmountComponentAtNode=function(t){if(!Bu(t))throw Error(C(40));return t._reactRootContainer?(ni(function(){ju(null,null,t,!1,function(){t._reactRootContainer=null,t[Vn]=null})}),!0):!1};Ot.unstable_batchedUpdates=Zf;Ot.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Bu(n))throw Error(C(200));if(t==null||t._reactInternals===void 0)throw Error(C(38));return ju(t,e,n,!1,r)};Ot.version="18.2.0-next-9e3b772b8-20220608";function Xw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Xw)}catch(t){console.error(t)}}Xw(),Gv.exports=Ot;var _k=Gv.exports,Bg=_k;Mh.createRoot=Bg.createRoot,Mh.hydrateRoot=Bg.hydrateRoot;/**
 * @remix-run/router v1.6.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function le(){return le=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},le.apply(this,arguments)}var xe;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(xe||(xe={}));const jg="popstate";function Sk(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:l=""}=Sn(i.location.hash.substr(1));return Uo("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");a=u===-1?l:l.slice(0,u)}return a+"#"+(typeof s=="string"?s:sa(s))}function r(i,s){ri(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return Ik(e,n,r,t)}function re(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function ri(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Tk(){return Math.random().toString(36).substr(2,8)}function Hg(t,e){return{usr:t.state,key:t.key,idx:e}}function Uo(t,e,n,r){return n===void 0&&(n=null),le({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Sn(e):e,{state:n,key:e&&e.key||r||Tk()})}function sa(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Sn(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Ik(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=xe.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(le({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=xe.Pop;let _=c(),h=_==null?null:_-u;u=_,l&&l({action:a,location:v.location,delta:h})}function f(_,h){a=xe.Push;let p=Uo(v.location,_,h);n&&n(p,_),u=c()+1;let m=Hg(p,u),w=v.createHref(p);try{o.pushState(m,"",w)}catch{i.location.assign(w)}s&&l&&l({action:a,location:v.location,delta:1})}function g(_,h){a=xe.Replace;let p=Uo(v.location,_,h);n&&n(p,_),u=c();let m=Hg(p,u),w=v.createHref(p);o.replaceState(m,"",w),s&&l&&l({action:a,location:v.location,delta:0})}function y(_){let h=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof _=="string"?_:sa(_);return re(h,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,h)}let v={get action(){return a},get location(){return t(i,o)},listen(_){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(jg,d),l=_,()=>{i.removeEventListener(jg,d),l=null}},createHref(_){return e(i,_)},createURL:y,encodeLocation(_){let h=y(_);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:f,replace:g,go(_){return o.go(_)}};return v}var $e;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})($e||($e={}));const kk=new Set(["lazy","caseSensitive","path","id","index","children"]);function Ck(t){return t.index===!0}function Yw(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,s],a=typeof i.id=="string"?i.id:o.join("-");if(re(i.index!==!0||!i.children,"Cannot specify children on an index route"),re(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),Ck(i)){let l=le({},i,e(i),{id:a});return r[a]=l,l}else{let l=le({},i,e(i),{id:a,children:void 0});return r[a]=l,i.children&&(l.children=Yw(i.children,e,o,r)),l}})}function Ui(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Sn(e):e,i=Hu(r.pathname||"/",n);if(i==null)return null;let s=Jw(t);Rk(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=$k(s[a],bk(i));return o}function Jw(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(re(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=wr([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(re(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Jw(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:Lk(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of Zw(s.path))i(s,o,l)}),e}function Zw(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Zw(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function Rk(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Mk(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Ak=/^:\w+$/,Nk=3,Dk=2,Pk=1,xk=10,Ok=-2,Wg=t=>t==="*";function Lk(t,e){let n=t.split("/"),r=n.length;return n.some(Wg)&&(r+=Ok),e&&(r+=Dk),n.filter(i=>!Wg(i)).reduce((i,s)=>i+(Ak.test(s)?Nk:s===""?Pk:xk),r)}function Mk(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function $k(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=Uk({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:wr([i,c.pathname]),pathnameBase:jk(wr([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=wr([i,c.pathnameBase]))}return s}function Uk(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Fk(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let f=a[d]||"";o=s.slice(0,s.length-f.length).replace(/(.)\/+$/,"$1")}return u[c]=Vk(a[d]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function Fk(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),ri(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function bk(t){try{return decodeURI(t)}catch(e){return ri(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Vk(t,e){try{return decodeURIComponent(t)}catch(n){return ri(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Hu(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function zk(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Sn(t):t;return{pathname:n?n.startsWith("/")?n:Bk(n,e):e,search:Hk(r),hash:Wk(i)}}function Bk(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function uh(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ap(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function e1(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Sn(t):(i=le({},t),re(!i.pathname||!i.pathname.includes("?"),uh("?","pathname","search",i)),re(!i.pathname||!i.pathname.includes("#"),uh("#","pathname","hash",i)),re(!i.search||!i.search.includes("#"),uh("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let d=e.length-1;if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}a=d>=0?e[d]:"/"}let l=zk(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const wr=t=>t.join("/").replace(/\/\/+/g,"/"),jk=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Hk=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Wk=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class lp{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function t1(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const n1=["post","put","patch","delete"],Kk=new Set(n1),qk=["get",...n1],Gk=new Set(qk),Qk=new Set([301,302,303,307,308]),Xk=new Set([307,308]),ch={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},Yk={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},Kg={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},r1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,i1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Jk=!i1,Zk=t=>({hasErrorBoundary:!!t.hasErrorBoundary});function eC(t){re(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let e;if(t.mapRouteProperties)e=t.mapRouteProperties;else if(t.detectErrorBoundary){let E=t.detectErrorBoundary;e=S=>({hasErrorBoundary:E(S)})}else e=Zk;let n={},r=Yw(t.routes,e,void 0,n),i,s=t.basename||"/",o=le({v7_normalizeFormMethod:!1,v7_prependBasename:!1},t.future),a=null,l=new Set,u=null,c=null,d=null,f=t.hydrationData!=null,g=Ui(r,t.history.location,s),y=null;if(g==null){let E=Jt(404,{pathname:t.history.location.pathname}),{matches:S,route:k}=Zg(r);g=S,y={[k.id]:E}}let v=!g.some(E=>E.route.lazy)&&(!g.some(E=>E.route.loader)||t.hydrationData!=null),_,h={historyAction:t.history.action,location:t.history.location,matches:g,initialized:v,navigation:ch,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||y,fetchers:new Map,blockers:new Map},p=xe.Pop,m=!1,w,I=!1,A=!1,N=[],x=[],j=new Map,Y=0,pt=-1,Gt=new Map,Qt=new Set,In=new Map,kn=new Map,Mt=new Map,Mr=!1;function O(){return a=t.history.listen(E=>{let{action:S,location:k,delta:M}=E;if(Mr){Mr=!1;return}ri(Mt.size===0||M!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let U=Pm({currentLocation:h.location,nextLocation:k,historyAction:S});if(U&&M!=null){Mr=!0,t.history.go(M*-1),Aa(U,{state:"blocked",location:k,proceed(){Aa(U,{state:"proceeding",proceed:void 0,reset:void 0,location:k}),t.history.go(M)},reset(){Ps(U),Z({blockers:new Map(_.state.blockers)})}});return}return $t(S,k)}),h.initialized||$t(xe.Pop,h.location),_}function G(){a&&a(),l.clear(),w&&w.abort(),h.fetchers.forEach((E,S)=>Ac(S)),h.blockers.forEach((E,S)=>Ps(S))}function J(E){return l.add(E),()=>l.delete(E)}function Z(E){h=le({},h,E),l.forEach(S=>S(h))}function ve(E,S){var k,M;let U=h.actionData!=null&&h.navigation.formMethod!=null&&Nn(h.navigation.formMethod)&&h.navigation.state==="loading"&&((k=E.state)==null?void 0:k._isRedirect)!==!0,W;S.actionData?Object.keys(S.actionData).length>0?W=S.actionData:W=null:U?W=h.actionData:W=null;let X=S.loaderData?Jg(h.loaderData,S.loaderData,S.matches||[],S.errors):h.loaderData;for(let[b]of Mt)Ps(b);let z=m===!0||h.navigation.formMethod!=null&&Nn(h.navigation.formMethod)&&((M=E.state)==null?void 0:M._isRedirect)!==!0;i&&(r=i,i=void 0),Z(le({},S,{actionData:W,loaderData:X,historyAction:p,location:E,initialized:!0,navigation:ch,revalidation:"idle",restoreScrollPosition:xm(E,S.matches||h.matches),preventScrollReset:z,blockers:new Map(h.blockers)})),I||p===xe.Pop||(p===xe.Push?t.history.push(E,E.state):p===xe.Replace&&t.history.replace(E,E.state)),p=xe.Pop,m=!1,I=!1,A=!1,N=[],x=[]}async function $r(E,S){if(typeof E=="number"){t.history.go(E);return}let k=Ad(h.location,h.matches,s,o.v7_prependBasename,E,S==null?void 0:S.fromRouteId,S==null?void 0:S.relative),{path:M,submission:U,error:W}=qg(o.v7_normalizeFormMethod,!1,k,S),X=h.location,z=Uo(h.location,M,S&&S.state);z=le({},z,t.history.encodeLocation(z));let b=S&&S.replace!=null?S.replace:void 0,oe=xe.Push;b===!0?oe=xe.Replace:b===!1||U!=null&&Nn(U.formMethod)&&U.formAction===h.location.pathname+h.location.search&&(oe=xe.Replace);let de=S&&"preventScrollReset"in S?S.preventScrollReset===!0:void 0,et=Pm({currentLocation:X,nextLocation:z,historyAction:oe});if(et){Aa(et,{state:"blocked",location:z,proceed(){Aa(et,{state:"proceeding",proceed:void 0,reset:void 0,location:z}),$r(E,S)},reset(){Ps(et),Z({blockers:new Map(h.blockers)})}});return}return await $t(oe,z,{submission:U,pendingError:W,preventScrollReset:de,replace:S&&S.replace})}function Cn(){if(Cc(),Z({revalidation:"loading"}),h.navigation.state!=="submitting"){if(h.navigation.state==="idle"){$t(h.historyAction,h.location,{startUninterruptedRevalidation:!0});return}$t(p||h.historyAction,h.navigation.location,{overrideNavigation:h.navigation})}}async function $t(E,S,k){w&&w.abort(),w=null,p=E,I=(k&&k.startUninterruptedRevalidation)===!0,KS(h.location,h.matches),m=(k&&k.preventScrollReset)===!0;let M=i||r,U=k&&k.overrideNavigation,W=Ui(M,S,s);if(!W){let ze=Jt(404,{pathname:S.pathname}),{matches:Be,route:Ut}=Zg(M);Nc(),ve(S,{matches:Be,loaderData:{},errors:{[Ut.id]:ze}});return}if(sC(h.location,S)&&!(k&&k.submission&&Nn(k.submission.formMethod))){ve(S,{matches:W});return}w=new AbortController;let X=Bs(t.history,S,w.signal,k&&k.submission),z,b;if(k&&k.pendingError)b={[Fi(W).route.id]:k.pendingError};else if(k&&k.submission&&Nn(k.submission.formMethod)){let ze=await Rn(X,S,k.submission,W,{replace:k.replace});if(ze.shortCircuited)return;z=ze.pendingActionData,b=ze.pendingActionError,U=le({state:"loading",location:S},k.submission),X=new Request(X.url,{signal:X.signal})}let{shortCircuited:oe,loaderData:de,errors:et}=await vi(X,S,W,U,k&&k.submission,k&&k.fetcherSubmission,k&&k.replace,z,b);oe||(w=null,ve(S,le({matches:W},z?{actionData:z}:{},{loaderData:de,errors:et})))}async function Rn(E,S,k,M,U){Cc();let W=le({state:"submitting",location:S},k);Z({navigation:W});let X,z=Nd(M,S);if(!z.route.action&&!z.route.lazy)X={type:$e.error,error:Jt(405,{method:E.method,pathname:S.pathname,routeId:z.route.id})};else if(X=await zs("action",E,z,M,n,e,s),E.signal.aborted)return{shortCircuited:!0};if(qi(X)){let b;return U&&U.replace!=null?b=U.replace:b=X.location===h.location.pathname+h.location.search,await Ds(h,X,{submission:k,replace:b}),{shortCircuited:!0}}if(ho(X)){let b=Fi(M,z.route.id);return(U&&U.replace)!==!0&&(p=xe.Push),{pendingActionData:{},pendingActionError:{[b.route.id]:X.error}}}if(jr(X))throw Jt(400,{type:"defer-action"});return{pendingActionData:{[z.route.id]:X.data}}}async function vi(E,S,k,M,U,W,X,z,b){let oe=M;oe||(oe=le({state:"loading",location:S,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},U));let de=U||W?U||W:oe.formMethod&&oe.formAction&&oe.formData&&oe.formEncType?{formMethod:oe.formMethod,formAction:oe.formAction,formData:oe.formData,formEncType:oe.formEncType}:void 0,et=i||r,[ze,Be]=Gg(t.history,h,k,de,S,A,N,x,In,et,s,z,b);if(Nc(_e=>!(k&&k.some(Ft=>Ft.route.id===_e))||ze&&ze.some(Ft=>Ft.route.id===_e)),ze.length===0&&Be.length===0){let _e=Nm();return ve(S,le({matches:k,loaderData:{},errors:b||null},z?{actionData:z}:{},_e?{fetchers:new Map(h.fetchers)}:{})),{shortCircuited:!0}}if(!I){Be.forEach(Ft=>{let Ei=h.fetchers.get(Ft.key),Lc={state:"loading",data:Ei&&Ei.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};h.fetchers.set(Ft.key,Lc)});let _e=z||h.actionData;Z(le({navigation:oe},_e?Object.keys(_e).length===0?{actionData:null}:{actionData:_e}:{},Be.length>0?{fetchers:new Map(h.fetchers)}:{}))}pt=++Y,Be.forEach(_e=>{_e.controller&&j.set(_e.key,_e.controller)});let Ut=()=>Be.forEach(_e=>wi(_e.key));w&&w.signal.addEventListener("abort",Ut);let{results:xs,loaderResults:Dc,fetcherResults:Na}=await Rm(h.matches,k,ze,Be,E);if(E.signal.aborted)return{shortCircuited:!0};w&&w.signal.removeEventListener("abort",Ut),Be.forEach(_e=>j.delete(_e.key));let Qn=ey(xs);if(Qn)return await Ds(h,Qn,{replace:X}),{shortCircuited:!0};let{loaderData:Da,errors:Pc}=Yg(h,k,ze,Dc,b,Be,Na,kn);kn.forEach((_e,Ft)=>{_e.subscribe(Ei=>{(Ei||_e.done)&&kn.delete(Ft)})});let xc=Nm(),Oc=Dm(pt),Pa=xc||Oc||Be.length>0;return le({loaderData:Da,errors:Pc},Pa?{fetchers:new Map(h.fetchers)}:{})}function Cm(E){return h.fetchers.get(E)||Yk}function zS(E,S,k,M){if(Jk)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");j.has(E)&&wi(E);let U=i||r,W=Ad(h.location,h.matches,s,o.v7_prependBasename,k,S,M==null?void 0:M.relative),X=Ui(U,W,s);if(!X){Rc(E,S,Jt(404,{pathname:W}));return}let{path:z,submission:b}=qg(o.v7_normalizeFormMethod,!0,W,M),oe=Nd(X,z);if(m=(M&&M.preventScrollReset)===!0,b&&Nn(b.formMethod)){BS(E,S,z,oe,X,b);return}In.set(E,{routeId:S,path:z}),jS(E,S,z,oe,X,b)}async function BS(E,S,k,M,U,W){if(Cc(),In.delete(E),!M.route.action&&!M.route.lazy){let Ct=Jt(405,{method:W.formMethod,pathname:k,routeId:S});Rc(E,S,Ct);return}let X=h.fetchers.get(E),z=le({state:"submitting"},W,{data:X&&X.data," _hasFetcherDoneAnything ":!0});h.fetchers.set(E,z),Z({fetchers:new Map(h.fetchers)});let b=new AbortController,oe=Bs(t.history,k,b.signal,W);j.set(E,b);let de=await zs("action",oe,M,U,n,e,s);if(oe.signal.aborted){j.get(E)===b&&j.delete(E);return}if(qi(de)){j.delete(E),Qt.add(E);let Ct=le({state:"loading"},W,{data:void 0," _hasFetcherDoneAnything ":!0});return h.fetchers.set(E,Ct),Z({fetchers:new Map(h.fetchers)}),Ds(h,de,{submission:W,isFetchActionRedirect:!0})}if(ho(de)){Rc(E,S,de.error);return}if(jr(de))throw Jt(400,{type:"defer-action"});let et=h.navigation.location||h.location,ze=Bs(t.history,et,b.signal),Be=i||r,Ut=h.navigation.state!=="idle"?Ui(Be,h.navigation.location,s):h.matches;re(Ut,"Didn't find any matches after fetcher action");let xs=++Y;Gt.set(E,xs);let Dc=le({state:"loading",data:de.data},W,{" _hasFetcherDoneAnything ":!0});h.fetchers.set(E,Dc);let[Na,Qn]=Gg(t.history,h,Ut,W,et,A,N,x,In,Be,s,{[M.route.id]:de.data},void 0);Qn.filter(Ct=>Ct.key!==E).forEach(Ct=>{let Mc=Ct.key,Om=h.fetchers.get(Mc),GS={state:"loading",data:Om&&Om.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};h.fetchers.set(Mc,GS),Ct.controller&&j.set(Mc,Ct.controller)}),Z({fetchers:new Map(h.fetchers)});let Da=()=>Qn.forEach(Ct=>wi(Ct.key));b.signal.addEventListener("abort",Da);let{results:Pc,loaderResults:xc,fetcherResults:Oc}=await Rm(h.matches,Ut,Na,Qn,ze);if(b.signal.aborted)return;b.signal.removeEventListener("abort",Da),Gt.delete(E),j.delete(E),Qn.forEach(Ct=>j.delete(Ct.key));let Pa=ey(Pc);if(Pa)return Ds(h,Pa);let{loaderData:_e,errors:Ft}=Yg(h,h.matches,Na,xc,void 0,Qn,Oc,kn),Ei={state:"idle",data:de.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};h.fetchers.set(E,Ei);let Lc=Dm(xs);h.navigation.state==="loading"&&xs>pt?(re(p,"Expected pending action"),w&&w.abort(),ve(h.navigation.location,{matches:Ut,loaderData:_e,errors:Ft,fetchers:new Map(h.fetchers)})):(Z(le({errors:Ft,loaderData:Jg(h.loaderData,_e,Ut,Ft)},Lc?{fetchers:new Map(h.fetchers)}:{})),A=!1)}async function jS(E,S,k,M,U,W){let X=h.fetchers.get(E),z=le({state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},W,{data:X&&X.data," _hasFetcherDoneAnything ":!0});h.fetchers.set(E,z),Z({fetchers:new Map(h.fetchers)});let b=new AbortController,oe=Bs(t.history,k,b.signal);j.set(E,b);let de=await zs("loader",oe,M,U,n,e,s);if(jr(de)&&(de=await l1(de,oe.signal,!0)||de),j.get(E)===b&&j.delete(E),oe.signal.aborted)return;if(qi(de)){Qt.add(E),await Ds(h,de);return}if(ho(de)){let ze=Fi(h.matches,S);h.fetchers.delete(E),Z({fetchers:new Map(h.fetchers),errors:{[ze.route.id]:de.error}});return}re(!jr(de),"Unhandled fetcher deferred data");let et={state:"idle",data:de.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};h.fetchers.set(E,et),Z({fetchers:new Map(h.fetchers)})}async function Ds(E,S,k){var M;let{submission:U,replace:W,isFetchActionRedirect:X}=k===void 0?{}:k;S.revalidate&&(A=!0);let z=Uo(E.location,S.location,le({_isRedirect:!0},X?{_isFetchActionRedirect:!0}:{}));if(re(z,"Expected a location on the redirect navigation"),r1.test(S.location)&&i1&&typeof((M=window)==null?void 0:M.location)<"u"){let Be=t.history.createURL(S.location),Ut=Hu(Be.pathname,s)==null;if(window.location.origin!==Be.origin||Ut){W?window.location.replace(S.location):window.location.assign(S.location);return}}w=null;let b=W===!0?xe.Replace:xe.Push,{formMethod:oe,formAction:de,formEncType:et,formData:ze}=E.navigation;!U&&oe&&de&&ze&&et&&(U={formMethod:oe,formAction:de,formEncType:et,formData:ze}),Xk.has(S.status)&&U&&Nn(U.formMethod)?await $t(b,z,{submission:le({},U,{formAction:S.location}),preventScrollReset:m}):X?await $t(b,z,{overrideNavigation:{state:"loading",location:z,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},fetcherSubmission:U,preventScrollReset:m}):await $t(b,z,{overrideNavigation:{state:"loading",location:z,formMethod:U?U.formMethod:void 0,formAction:U?U.formAction:void 0,formEncType:U?U.formEncType:void 0,formData:U?U.formData:void 0},preventScrollReset:m})}async function Rm(E,S,k,M,U){let W=await Promise.all([...k.map(b=>zs("loader",U,b,S,n,e,s)),...M.map(b=>b.matches&&b.match&&b.controller?zs("loader",Bs(t.history,b.path,b.controller.signal),b.match,b.matches,n,e,s):{type:$e.error,error:Jt(404,{pathname:b.path})})]),X=W.slice(0,k.length),z=W.slice(k.length);return await Promise.all([ty(E,k,X,X.map(()=>U.signal),!1,h.loaderData),ty(E,M.map(b=>b.match),z,M.map(b=>b.controller?b.controller.signal:null),!0)]),{results:W,loaderResults:X,fetcherResults:z}}function Cc(){A=!0,N.push(...Nc()),In.forEach((E,S)=>{j.has(S)&&(x.push(S),wi(S))})}function Rc(E,S,k){let M=Fi(h.matches,S);Ac(E),Z({errors:{[M.route.id]:k},fetchers:new Map(h.fetchers)})}function Ac(E){j.has(E)&&wi(E),In.delete(E),Gt.delete(E),Qt.delete(E),h.fetchers.delete(E)}function wi(E){let S=j.get(E);re(S,"Expected fetch controller: "+E),S.abort(),j.delete(E)}function Am(E){for(let S of E){let M={state:"idle",data:Cm(S).data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};h.fetchers.set(S,M)}}function Nm(){let E=[],S=!1;for(let k of Qt){let M=h.fetchers.get(k);re(M,"Expected fetcher: "+k),M.state==="loading"&&(Qt.delete(k),E.push(k),S=!0)}return Am(E),S}function Dm(E){let S=[];for(let[k,M]of Gt)if(M<E){let U=h.fetchers.get(k);re(U,"Expected fetcher: "+k),U.state==="loading"&&(wi(k),Gt.delete(k),S.push(k))}return Am(S),S.length>0}function HS(E,S){let k=h.blockers.get(E)||Kg;return Mt.get(E)!==S&&Mt.set(E,S),k}function Ps(E){h.blockers.delete(E),Mt.delete(E)}function Aa(E,S){let k=h.blockers.get(E)||Kg;re(k.state==="unblocked"&&S.state==="blocked"||k.state==="blocked"&&S.state==="blocked"||k.state==="blocked"&&S.state==="proceeding"||k.state==="blocked"&&S.state==="unblocked"||k.state==="proceeding"&&S.state==="unblocked","Invalid blocker state transition: "+k.state+" -> "+S.state),h.blockers.set(E,S),Z({blockers:new Map(h.blockers)})}function Pm(E){let{currentLocation:S,nextLocation:k,historyAction:M}=E;if(Mt.size===0)return;Mt.size>1&&ri(!1,"A router only supports one blocker at a time");let U=Array.from(Mt.entries()),[W,X]=U[U.length-1],z=h.blockers.get(W);if(!(z&&z.state==="proceeding")&&X({currentLocation:S,nextLocation:k,historyAction:M}))return W}function Nc(E){let S=[];return kn.forEach((k,M)=>{(!E||E(M))&&(k.cancel(),S.push(M),kn.delete(M))}),S}function WS(E,S,k){if(u=E,d=S,c=k||(M=>M.key),!f&&h.navigation===ch){f=!0;let M=xm(h.location,h.matches);M!=null&&Z({restoreScrollPosition:M})}return()=>{u=null,d=null,c=null}}function KS(E,S){if(u&&c&&d){let k=S.map(U=>ny(U,h.loaderData)),M=c(E,k)||E.key;u[M]=d()}}function xm(E,S){if(u&&c&&d){let k=S.map(W=>ny(W,h.loaderData)),M=c(E,k)||E.key,U=u[M];if(typeof U=="number")return U}return null}function qS(E){i=E}return _={get basename(){return s},get state(){return h},get routes(){return r},initialize:O,subscribe:J,enableScrollRestoration:WS,navigate:$r,fetch:zS,revalidate:Cn,createHref:E=>t.history.createHref(E),encodeLocation:E=>t.history.encodeLocation(E),getFetcher:Cm,deleteFetcher:Ac,dispose:G,getBlocker:HS,deleteBlocker:Ps,_internalFetchControllers:j,_internalActiveDeferreds:kn,_internalSetRoutes:qS},_}function tC(t){return t!=null&&"formData"in t}function Ad(t,e,n,r,i,s,o){let a,l;if(s!=null&&o!=="path"){a=[];for(let c of e)if(a.push(c),c.route.id===s){l=c;break}}else a=e,l=e[e.length-1];let u=e1(i||".",ap(a).map(c=>c.pathnameBase),t.pathname,o==="path");return i==null&&(u.search=t.search,u.hash=t.hash),(i==null||i===""||i===".")&&l&&l.route.index&&!up(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(u.pathname=u.pathname==="/"?n:wr([n,u.pathname])),sa(u)}function qg(t,e,n,r){if(!r||!tC(r))return{path:n};if(r.formMethod&&!lC(r.formMethod))return{path:n,error:Jt(405,{method:r.formMethod})};let i;if(r.formData){let a=r.formMethod||"get";if(i={formMethod:t?a.toUpperCase():a.toLowerCase(),formAction:a1(n),formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:r.formData},Nn(i.formMethod))return{path:n,submission:i}}let s=Sn(n),o=o1(r.formData);return e&&s.search&&up(s.search)&&o.append("index",""),s.search="?"+o,{path:sa(s),submission:i}}function nC(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function Gg(t,e,n,r,i,s,o,a,l,u,c,d,f){let g=f?Object.values(f)[0]:d?Object.values(d)[0]:void 0,y=t.createURL(e.location),v=t.createURL(i),_=f?Object.keys(f)[0]:void 0,p=nC(n,_).filter((w,I)=>{if(w.route.lazy)return!0;if(w.route.loader==null)return!1;if(rC(e.loaderData,e.matches[I],w)||o.some(x=>x===w.route.id))return!0;let A=e.matches[I],N=w;return Qg(w,le({currentUrl:y,currentParams:A.params,nextUrl:v,nextParams:N.params},r,{actionResult:g,defaultShouldRevalidate:s||y.toString()===v.toString()||y.search!==v.search||s1(A,N)}))}),m=[];return l.forEach((w,I)=>{if(!n.some(j=>j.route.id===w.routeId))return;let A=Ui(u,w.path,c);if(!A){m.push({key:I,routeId:w.routeId,path:w.path,matches:null,match:null,controller:null});return}let N=Nd(A,w.path);if(a.includes(I)){m.push({key:I,routeId:w.routeId,path:w.path,matches:A,match:N,controller:new AbortController});return}Qg(N,le({currentUrl:y,currentParams:e.matches[e.matches.length-1].params,nextUrl:v,nextParams:n[n.length-1].params},r,{actionResult:g,defaultShouldRevalidate:s}))&&m.push({key:I,routeId:w.routeId,path:w.path,matches:A,match:N,controller:new AbortController})}),[p,m]}function rC(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function s1(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function Qg(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function Xg(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];re(i,"No route found in manifest");let s={};for(let o in r){let l=i[o]!==void 0&&o!=="hasErrorBoundary";ri(!l,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!l&&!kk.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,le({},e(i),{lazy:void 0}))}async function zs(t,e,n,r,i,s,o,a,l,u){a===void 0&&(a=!1),l===void 0&&(l=!1);let c,d,f,g=_=>{let h,p=new Promise((m,w)=>h=w);return f=()=>h(),e.signal.addEventListener("abort",f),Promise.race([_({request:e,params:n.params,context:u}),p])};try{let _=n.route[t];if(n.route.lazy)if(_)d=(await Promise.all([g(_),Xg(n.route,s,i)]))[0];else if(await Xg(n.route,s,i),_=n.route[t],_)d=await g(_);else if(t==="action"){let h=new URL(e.url),p=h.pathname+h.search;throw Jt(405,{method:e.method,pathname:p,routeId:n.route.id})}else return{type:$e.data,data:void 0};else if(_)d=await g(_);else{let h=new URL(e.url),p=h.pathname+h.search;throw Jt(404,{pathname:p})}re(d!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(_){c=$e.error,d=_}finally{f&&e.signal.removeEventListener("abort",f)}if(aC(d)){let _=d.status;if(Qk.has(_)){let m=d.headers.get("Location");if(re(m,"Redirects returned/thrown from loaders/actions must have a Location header"),!r1.test(m))m=Ad(new URL(e.url),r.slice(0,r.indexOf(n)+1),o,!0,m);else if(!a){let w=new URL(e.url),I=m.startsWith("//")?new URL(w.protocol+m):new URL(m),A=Hu(I.pathname,o)!=null;I.origin===w.origin&&A&&(m=I.pathname+I.search+I.hash)}if(a)throw d.headers.set("Location",m),d;return{type:$e.redirect,status:_,location:m,revalidate:d.headers.get("X-Remix-Revalidate")!==null}}if(l)throw{type:c||$e.data,response:d};let h,p=d.headers.get("Content-Type");return p&&/\bapplication\/json\b/.test(p)?h=await d.json():h=await d.text(),c===$e.error?{type:c,error:new lp(_,d.statusText,h),headers:d.headers}:{type:$e.data,data:h,statusCode:d.status,headers:d.headers}}if(c===$e.error)return{type:c,error:d};if(oC(d)){var y,v;return{type:$e.deferred,deferredData:d,statusCode:(y=d.init)==null?void 0:y.status,headers:((v=d.init)==null?void 0:v.headers)&&new Headers(d.init.headers)}}return{type:$e.data,data:d}}function Bs(t,e,n,r){let i=t.createURL(a1(e)).toString(),s={signal:n};if(r&&Nn(r.formMethod)){let{formMethod:o,formEncType:a,formData:l}=r;s.method=o.toUpperCase(),s.body=a==="application/x-www-form-urlencoded"?o1(l):l}return new Request(i,s)}function o1(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,r instanceof File?r.name:r);return e}function iC(t,e,n,r,i){let s={},o=null,a,l=!1,u={};return n.forEach((c,d)=>{let f=e[d].route.id;if(re(!qi(c),"Cannot handle redirect results in processLoaderData"),ho(c)){let g=Fi(t,f),y=c.error;r&&(y=Object.values(r)[0],r=void 0),o=o||{},o[g.route.id]==null&&(o[g.route.id]=y),s[f]=void 0,l||(l=!0,a=t1(c.error)?c.error.status:500),c.headers&&(u[f]=c.headers)}else jr(c)?(i.set(f,c.deferredData),s[f]=c.deferredData.data):s[f]=c.data,c.statusCode!=null&&c.statusCode!==200&&!l&&(a=c.statusCode),c.headers&&(u[f]=c.headers)}),r&&(o=r,s[Object.keys(r)[0]]=void 0),{loaderData:s,errors:o,statusCode:a||200,loaderHeaders:u}}function Yg(t,e,n,r,i,s,o,a){let{loaderData:l,errors:u}=iC(e,n,r,i,a);for(let c=0;c<s.length;c++){let{key:d,match:f,controller:g}=s[c];re(o!==void 0&&o[c]!==void 0,"Did not find corresponding fetcher result");let y=o[c];if(!(g&&g.signal.aborted))if(ho(y)){let v=Fi(t.matches,f==null?void 0:f.route.id);u&&u[v.route.id]||(u=le({},u,{[v.route.id]:y.error})),t.fetchers.delete(d)}else if(qi(y))re(!1,"Unhandled fetcher revalidation redirect");else if(jr(y))re(!1,"Unhandled fetcher deferred data");else{let v={state:"idle",data:y.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};t.fetchers.set(d,v)}}return{loaderData:l,errors:u}}function Jg(t,e,n,r){let i=le({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function Fi(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function Zg(t){let e=t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function Jt(t,e){let{pathname:n,routeId:r,method:i,type:s}=e===void 0?{}:e,o="Unknown Server Error",a="Unknown @remix-run/router error";return t===400?(o="Bad Request",i&&n&&r?a="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"&&(a="defer() is not supported in actions")):t===403?(o="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):t===404?(o="Not Found",a='No route matches URL "'+n+'"'):t===405&&(o="Method Not Allowed",i&&n&&r?a="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(a='Invalid request method "'+i.toUpperCase()+'"')),new lp(t||500,o,new Error(a),!0)}function ey(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(qi(n))return n}}function a1(t){let e=typeof t=="string"?Sn(t):t;return sa(le({},e,{hash:""}))}function sC(t,e){return t.pathname===e.pathname&&t.search===e.search&&t.hash!==e.hash}function jr(t){return t.type===$e.deferred}function ho(t){return t.type===$e.error}function qi(t){return(t&&t.type)===$e.redirect}function oC(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function aC(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function lC(t){return Gk.has(t.toLowerCase())}function Nn(t){return Kk.has(t.toLowerCase())}async function ty(t,e,n,r,i,s){for(let o=0;o<n.length;o++){let a=n[o],l=e[o];if(!l)continue;let u=t.find(d=>d.route.id===l.route.id),c=u!=null&&!s1(u,l)&&(s&&s[l.route.id])!==void 0;if(jr(a)&&(i||c)){let d=r[o];re(d,"Expected an AbortSignal for revalidating fetcher deferred result"),await l1(a,d,i).then(f=>{f&&(n[o]=f||n[o])})}}}async function l1(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:$e.data,data:t.deferredData.unwrappedData}}catch(i){return{type:$e.error,error:i}}return{type:$e.data,data:t.deferredData.data}}}function up(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function ny(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function Nd(t,e){let n=typeof e=="string"?Sn(e).search:e.search;if(t[t.length-1].route.index&&up(n||""))return t[t.length-1];let r=ap(t);return r[r.length-1]}/**
 * React Router v6.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Jl(){return Jl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Jl.apply(this,arguments)}const Wu=D.createContext(null),u1=D.createContext(null),Ku=D.createContext(null),qu=D.createContext(null),vs=D.createContext({outlet:null,matches:[]}),c1=D.createContext(null);function Gu(){return D.useContext(qu)!=null}function h1(){return Gu()||re(!1),D.useContext(qu).location}function d1(t){D.useContext(Ku).static||D.useLayoutEffect(t)}function uC(){return D.useContext(Wu)!=null?TC():cC()}function cC(){Gu()||re(!1);let{basename:t,navigator:e}=D.useContext(Ku),{matches:n}=D.useContext(vs),{pathname:r}=h1(),i=JSON.stringify(ap(n).map(a=>a.pathnameBase)),s=D.useRef(!1);return d1(()=>{s.current=!0}),D.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let u=e1(a,JSON.parse(i),r,l.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:wr([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state,l)},[t,e,i,r])}const hC=D.createContext(null);function dC(t){let e=D.useContext(vs).outlet;return e&&D.createElement(hC.Provider,{value:t},e)}function fC(t,e,n){Gu()||re(!1);let{navigator:r}=D.useContext(Ku),{matches:i}=D.useContext(vs),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=h1(),u;if(e){var c;let v=typeof e=="string"?Sn(e):e;a==="/"||(c=v.pathname)!=null&&c.startsWith(a)||re(!1),u=v}else u=l;let d=u.pathname||"/",f=a==="/"?d:d.slice(a.length)||"/",g=Ui(t,{pathname:f}),y=vC(g&&g.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:wr([a,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:wr([a,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,n);return e&&y?D.createElement(qu.Provider,{value:{location:Jl({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:xe.Pop}},y):y}function pC(){let t=SC(),e=t1(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return D.createElement(D.Fragment,null,D.createElement("h2",null,"Unexpected Application Error!"),D.createElement("h3",{style:{fontStyle:"italic"}},e),n?D.createElement("pre",{style:i},n):null,s)}const mC=D.createElement(pC,null);class gC extends D.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?D.createElement(vs.Provider,{value:this.props.routeContext},D.createElement(c1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function yC(t){let{routeContext:e,match:n,children:r}=t,i=D.useContext(Wu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),D.createElement(vs.Provider,{value:e},r)}function vC(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||re(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,d=null;n&&(d=l.route.errorElement||mC);let f=e.concat(s.slice(0,u+1)),g=()=>{let y;return c?y=d:l.route.element?y=l.route.element:y=a,D.createElement(yC,{match:l,routeContext:{outlet:a,matches:f},children:y})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?D.createElement(gC,{location:n.location,revalidation:n.revalidation,component:d,error:c,children:g(),routeContext:{outlet:null,matches:f}}):g()},null)}var Dd;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(Dd||(Dd={}));var Fo;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(Fo||(Fo={}));function wC(t){let e=D.useContext(Wu);return e||re(!1),e}function EC(t){let e=D.useContext(u1);return e||re(!1),e}function _C(t){let e=D.useContext(vs);return e||re(!1),e}function f1(t){let e=_C(),n=e.matches[e.matches.length-1];return n.route.id||re(!1),n.route.id}function SC(){var t;let e=D.useContext(c1),n=EC(Fo.UseRouteError),r=f1(Fo.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function TC(){let{router:t}=wC(Dd.UseNavigateStable),e=f1(Fo.UseNavigateStable),n=D.useRef(!1);return d1(()=>{n.current=!0}),D.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Jl({fromRouteId:e},s)))},[t,e])}function IC(t){let{fallbackElement:e,router:n}=t,[r,i]=D.useState(n.state);D.useLayoutEffect(()=>n.subscribe(i),[n,i]);let s=D.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:l=>n.navigate(l),push:(l,u,c)=>n.navigate(l,{state:u,preventScrollReset:c==null?void 0:c.preventScrollReset}),replace:(l,u,c)=>n.navigate(l,{replace:!0,state:u,preventScrollReset:c==null?void 0:c.preventScrollReset})}),[n]),o=n.basename||"/",a=D.useMemo(()=>({router:n,navigator:s,static:!1,basename:o}),[n,s,o]);return D.createElement(D.Fragment,null,D.createElement(Wu.Provider,{value:a},D.createElement(u1.Provider,{value:r},D.createElement(RC,{basename:n.basename,location:n.state.location,navigationType:n.state.historyAction,navigator:s},n.state.initialized?D.createElement(kC,{routes:n.routes,state:r}):e))),null)}function kC(t){let{routes:e,state:n}=t;return fC(e,void 0,n)}function CC(t){return dC(t.context)}function RC(t){let{basename:e="/",children:n=null,location:r,navigationType:i=xe.Pop,navigator:s,static:o=!1}=t;Gu()&&re(!1);let a=e.replace(/^\/*/,"/"),l=D.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Sn(r));let{pathname:u="/",search:c="",hash:d="",state:f=null,key:g="default"}=r,y=D.useMemo(()=>{let v=Hu(u,a);return v==null?null:{location:{pathname:v,search:c,hash:d,state:f,key:g},navigationType:i}},[a,u,c,d,f,g,i]);return y==null?null:D.createElement(Ku.Provider,{value:l},D.createElement(qu.Provider,{children:n,value:y}))}var ry;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(ry||(ry={}));new Promise(()=>{});function AC(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:D.createElement(t.Component),Component:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:D.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zl(){return Zl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Zl.apply(this,arguments)}function NC(t,e){return eC({basename:e==null?void 0:e.basename,future:Zl({},e==null?void 0:e.future,{v7_prependBasename:!0}),history:Sk({window:e==null?void 0:e.window}),hydrationData:(e==null?void 0:e.hydrationData)||DC(),routes:t,mapRouteProperties:AC}).initialize()}function DC(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=Zl({},e,{errors:PC(e.errors)})),e}function PC(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new lp(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){let s=new Error(i.message);s.stack="",n[r]=s}else n[r]=i;return n}var iy;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(iy||(iy={}));var sy;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(sy||(sy={}));const p1=D.createContext(null);/**
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
 */const m1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},xC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},g1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(f=64)),r.push(n[c],n[d],n[f],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(m1(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):xC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new OC;const f=s<<2|a>>4;if(r.push(f),u!==64){const g=a<<4&240|u>>2;if(r.push(g),d!==64){const y=u<<6&192|d;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class OC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const LC=function(t){const e=m1(t);return g1.encodeByteArray(e,!0)},eu=function(t){return LC(t).replace(/\./g,"")},y1=function(t){try{return g1.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function MC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const $C=()=>MC().__FIREBASE_DEFAULTS__,UC=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},FC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&y1(t[1]);return e&&JSON.parse(e)},Qu=()=>{try{return $C()||UC()||FC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},v1=t=>{var e,n;return(n=(e=Qu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},w1=t=>{const e=v1(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},bC=()=>{var t;return(t=Qu())===null||t===void 0?void 0:t.config},E1=t=>{var e;return(e=Qu())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class VC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function _1(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[eu(JSON.stringify(n)),eu(JSON.stringify(o)),a].join(".")}/**
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
 */function dt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zC(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(dt())}function BC(){var t;const e=(t=Qu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function jC(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function HC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function WC(){const t=dt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function KC(){try{return typeof indexedDB=="object"}catch{return!1}}function qC(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const GC="FirebaseError";class Tn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=GC,Object.setPrototypeOf(this,Tn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,oa.prototype.create)}}class oa{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?QC(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Tn(i,a,r)}}function QC(t,e){return t.replace(XC,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const XC=/\{\$([^}]+)}/g;function YC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function tu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(oy(s)&&oy(o)){if(!tu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function oy(t){return t!==null&&typeof t=="object"}/**
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
 */function aa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Xs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ys(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function JC(t,e){const n=new ZC(t,e);return n.subscribe.bind(n)}class ZC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");eR(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=hh),i.error===void 0&&(i.error=hh),i.complete===void 0&&(i.complete=hh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function eR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function hh(){}/**
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
 */function Ve(t){return t&&t._delegate?t._delegate:t}class Cr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const br="[DEFAULT]";/**
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
 */class tR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new VC;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(rR(e))try{this.getOrInitializeService({instanceIdentifier:br})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=br){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=br){return this.instances.has(e)}getOptions(e=br){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:nR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=br){return this.component?this.component.multipleInstances?e:br:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nR(t){return t===br?void 0:t}function rR(t){return t.instantiationMode==="EAGER"}/**
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
 */class iR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new tR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const sR={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},oR=ae.INFO,aR={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},lR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=aR[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class cp{constructor(e){this.name=e,this._logLevel=oR,this._logHandler=lR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?sR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const uR=(t,e)=>e.some(n=>t instanceof n);let ay,ly;function cR(){return ay||(ay=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hR(){return ly||(ly=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const S1=new WeakMap,Pd=new WeakMap,T1=new WeakMap,dh=new WeakMap,hp=new WeakMap;function dR(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Er(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&S1.set(n,t)}).catch(()=>{}),hp.set(e,t),e}function fR(t){if(Pd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Pd.set(t,e)}let xd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Pd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||T1.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Er(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function pR(t){xd=t(xd)}function mR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(fh(this),e,...n);return T1.set(r,e.sort?e.sort():[e]),Er(r)}:hR().includes(t)?function(...e){return t.apply(fh(this),e),Er(S1.get(this))}:function(...e){return Er(t.apply(fh(this),e))}}function gR(t){return typeof t=="function"?mR(t):(t instanceof IDBTransaction&&fR(t),uR(t,cR())?new Proxy(t,xd):t)}function Er(t){if(t instanceof IDBRequest)return dR(t);if(dh.has(t))return dh.get(t);const e=gR(t);return e!==t&&(dh.set(t,e),hp.set(e,t)),e}const fh=t=>hp.get(t);function yR(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Er(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Er(o.result),l.oldVersion,l.newVersion,Er(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const vR=["get","getKey","getAll","getAllKeys","count"],wR=["put","add","delete","clear"],ph=new Map;function uy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ph.get(e))return ph.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=wR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||vR.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return ph.set(e,s),s}pR(t=>({...t,get:(e,n,r)=>uy(e,n)||t.get(e,n,r),has:(e,n)=>!!uy(e,n)||t.has(e,n)}));/**
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
 */class ER{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(_R(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function _R(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Od="@firebase/app",cy="0.9.9";/**
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
 */const ii=new cp("@firebase/app"),SR="@firebase/app-compat",TR="@firebase/analytics-compat",IR="@firebase/analytics",kR="@firebase/app-check-compat",CR="@firebase/app-check",RR="@firebase/auth",AR="@firebase/auth-compat",NR="@firebase/database",DR="@firebase/database-compat",PR="@firebase/functions",xR="@firebase/functions-compat",OR="@firebase/installations",LR="@firebase/installations-compat",MR="@firebase/messaging",$R="@firebase/messaging-compat",UR="@firebase/performance",FR="@firebase/performance-compat",bR="@firebase/remote-config",VR="@firebase/remote-config-compat",zR="@firebase/storage",BR="@firebase/storage-compat",jR="@firebase/firestore",HR="@firebase/firestore-compat",WR="firebase",KR="9.21.0";/**
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
 */const Ld="[DEFAULT]",qR={[Od]:"fire-core",[SR]:"fire-core-compat",[IR]:"fire-analytics",[TR]:"fire-analytics-compat",[CR]:"fire-app-check",[kR]:"fire-app-check-compat",[RR]:"fire-auth",[AR]:"fire-auth-compat",[NR]:"fire-rtdb",[DR]:"fire-rtdb-compat",[PR]:"fire-fn",[xR]:"fire-fn-compat",[OR]:"fire-iid",[LR]:"fire-iid-compat",[MR]:"fire-fcm",[$R]:"fire-fcm-compat",[UR]:"fire-perf",[FR]:"fire-perf-compat",[bR]:"fire-rc",[VR]:"fire-rc-compat",[zR]:"fire-gcs",[BR]:"fire-gcs-compat",[jR]:"fire-fst",[HR]:"fire-fst-compat","fire-js":"fire-js",[WR]:"fire-js-all"};/**
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
 */const nu=new Map,Md=new Map;function GR(t,e){try{t.container.addComponent(e)}catch(n){ii.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function si(t){const e=t.name;if(Md.has(e))return ii.debug(`There were multiple attempts to register component ${e}.`),!1;Md.set(e,t);for(const n of nu.values())GR(n,t);return!0}function Xu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const QR={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},_r=new oa("app","Firebase",QR);/**
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
 */class XR{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Cr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _r.create("app-deleted",{appName:this._name})}}/**
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
 */const pi=KR;function I1(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ld,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw _r.create("bad-app-name",{appName:String(i)});if(n||(n=bC()),!n)throw _r.create("no-options");const s=nu.get(i);if(s){if(tu(n,s.options)&&tu(r,s.config))return s;throw _r.create("duplicate-app",{appName:i})}const o=new iR(i);for(const l of Md.values())o.addComponent(l);const a=new XR(n,r,o);return nu.set(i,a),a}function dp(t=Ld){const e=nu.get(t);if(!e&&t===Ld)return I1();if(!e)throw _r.create("no-app",{appName:t});return e}function yn(t,e,n){var r;let i=(r=qR[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ii.warn(a.join(" "));return}si(new Cr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const YR="firebase-heartbeat-database",JR=1,bo="firebase-heartbeat-store";let mh=null;function k1(){return mh||(mh=yR(YR,JR,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(bo)}}}).catch(t=>{throw _r.create("idb-open",{originalErrorMessage:t.message})})),mh}async function ZR(t){try{return(await k1()).transaction(bo).objectStore(bo).get(C1(t))}catch(e){if(e instanceof Tn)ii.warn(e.message);else{const n=_r.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ii.warn(n.message)}}}async function hy(t,e){try{const r=(await k1()).transaction(bo,"readwrite");return await r.objectStore(bo).put(e,C1(t)),r.done}catch(n){if(n instanceof Tn)ii.warn(n.message);else{const r=_r.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ii.warn(r.message)}}}function C1(t){return`${t.name}!${t.options.appId}`}/**
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
 */const eA=1024,tA=30*24*60*60*1e3;class nA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new iA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=dy();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=tA}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=dy(),{heartbeatsToSend:n,unsentEntries:r}=rA(this._heartbeatsCache.heartbeats),i=eu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function dy(){return new Date().toISOString().substring(0,10)}function rA(t,e=eA){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),fy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),fy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class iA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return KC()?qC().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await ZR(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return hy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return hy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function fy(t){return eu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function sA(t){si(new Cr("platform-logger",e=>new ER(e),"PRIVATE")),si(new Cr("heartbeat",e=>new nA(e),"PRIVATE")),yn(Od,cy,t),yn(Od,cy,"esm2017"),yn("fire-js","")}sA("");var oA="firebase",aA="9.21.0";/**
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
 */yn(oA,aA,"app");function fp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function R1(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const lA=R1,A1=new oa("auth","Firebase",R1());/**
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
 */const ru=new cp("@firebase/auth");function uA(t,...e){ru.logLevel<=ae.WARN&&ru.warn(`Auth (${pi}): ${t}`,...e)}function El(t,...e){ru.logLevel<=ae.ERROR&&ru.error(`Auth (${pi}): ${t}`,...e)}/**
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
 */function on(t,...e){throw pp(t,...e)}function vn(t,...e){return pp(t,...e)}function cA(t,e,n){const r=Object.assign(Object.assign({},lA()),{[e]:n});return new oa("auth","Firebase",r).create(e,{appName:t.name})}function pp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return A1.create(t,...e)}function B(t,e,...n){if(!t)throw pp(e,...n)}function On(t){const e="INTERNAL ASSERTION FAILED: "+t;throw El(e),new Error(e)}function jn(t,e){t||On(e)}/**
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
 */function $d(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function hA(){return py()==="http:"||py()==="https:"}function py(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function dA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(hA()||jC()||"connection"in navigator)?navigator.onLine:!0}function fA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class la{constructor(e,n){this.shortDelay=e,this.longDelay=n,jn(n>e,"Short delay should be less than long delay!"),this.isMobile=zC()||HC()}get(){return dA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function mp(t,e){jn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class N1{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;On("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;On("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;On("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const pA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const mA=new la(3e4,6e4);function ws(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Es(t,e,n,r,i={}){return D1(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=aa(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),N1.fetch()(P1(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function D1(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},pA),e);try{const i=new gA(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Qa(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Qa(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Qa(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Qa(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw cA(t,c,u);on(t,c)}}catch(i){if(i instanceof Tn)throw i;on(t,"network-request-failed",{message:String(i)})}}async function ua(t,e,n,r,i={}){const s=await Es(t,e,n,r,i);return"mfaPendingCredential"in s&&on(t,"multi-factor-auth-required",{_serverResponse:s}),s}function P1(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?mp(t.config,i):`${t.config.apiScheme}://${i}`}class gA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(vn(this.auth,"network-request-failed")),mA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Qa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=vn(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function yA(t,e){return Es(t,"POST","/v1/accounts:delete",e)}async function vA(t,e){return Es(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function fo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function wA(t,e=!1){const n=Ve(t),r=await n.getIdToken(e),i=gp(r);B(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:fo(gh(i.auth_time)),issuedAtTime:fo(gh(i.iat)),expirationTime:fo(gh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function gh(t){return Number(t)*1e3}function gp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return El("JWT malformed, contained fewer than 3 sections"),null;try{const i=y1(n);return i?JSON.parse(i):(El("Failed to decode base64 JWT payload"),null)}catch(i){return El("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function EA(t){const e=gp(t);return B(e,"internal-error"),B(typeof e.exp<"u","internal-error"),B(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Vo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Tn&&_A(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function _A({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class SA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class x1{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=fo(this.lastLoginAt),this.creationTime=fo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function iu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Vo(t,vA(n,{idToken:r}));B(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?kA(s.providerUserInfo):[],a=IA(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new x1(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function TA(t){const e=Ve(t);await iu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function IA(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function kA(t){return t.map(e=>{var{providerId:n}=e,r=fp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function CA(t,e){const n=await D1(t,{},async()=>{const r=aa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=P1(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",N1.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class zo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){B(e.idToken,"internal-error"),B(typeof e.idToken<"u","internal-error"),B(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):EA(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return B(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await CA(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new zo;return r&&(B(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(B(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(B(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new zo,this.toJSON())}_performRefresh(){return On("not implemented")}}/**
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
 */function Yn(t,e){B(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Qr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=fp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new SA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new x1(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Vo(this,this.stsTokenManager.getToken(this.auth,e));return B(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return wA(this,e)}reload(){return TA(this)}_assign(e){this!==e&&(B(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Qr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await iu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Vo(this,yA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,h=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:w,isAnonymous:I,providerData:A,stsTokenManager:N}=n;B(m&&N,e,"internal-error");const x=zo.fromJSON(this.name,N);B(typeof m=="string",e,"internal-error"),Yn(d,e.name),Yn(f,e.name),B(typeof w=="boolean",e,"internal-error"),B(typeof I=="boolean",e,"internal-error"),Yn(g,e.name),Yn(y,e.name),Yn(v,e.name),Yn(_,e.name),Yn(h,e.name),Yn(p,e.name);const j=new Qr({uid:m,auth:e,email:f,emailVerified:w,displayName:d,isAnonymous:I,photoURL:y,phoneNumber:g,tenantId:v,stsTokenManager:x,createdAt:h,lastLoginAt:p});return A&&Array.isArray(A)&&(j.providerData=A.map(Y=>Object.assign({},Y))),_&&(j._redirectEventId=_),j}static async _fromIdTokenResponse(e,n,r=!1){const i=new zo;i.updateFromServerResponse(n);const s=new Qr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await iu(s),s}}/**
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
 */const my=new Map;function Ln(t){jn(t instanceof Function,"Expected a class definition");let e=my.get(t);return e?(jn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,my.set(t,e),e)}/**
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
 */class O1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}O1.type="NONE";const gy=O1;/**
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
 */function _l(t,e,n){return`firebase:${t}:${e}:${n}`}class Gi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=_l(this.userKey,i.apiKey,s),this.fullPersistenceKey=_l("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Qr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Gi(Ln(gy),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Ln(gy);const o=_l(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=Qr._fromJSON(e,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Gi(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Gi(s,e,r))}}/**
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
 */function yy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if($1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(L1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(F1(e))return"Blackberry";if(b1(e))return"Webos";if(yp(e))return"Safari";if((e.includes("chrome/")||M1(e))&&!e.includes("edge/"))return"Chrome";if(U1(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function L1(t=dt()){return/firefox\//i.test(t)}function yp(t=dt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function M1(t=dt()){return/crios\//i.test(t)}function $1(t=dt()){return/iemobile/i.test(t)}function U1(t=dt()){return/android/i.test(t)}function F1(t=dt()){return/blackberry/i.test(t)}function b1(t=dt()){return/webos/i.test(t)}function Yu(t=dt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function RA(t=dt()){var e;return Yu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function AA(){return WC()&&document.documentMode===10}function V1(t=dt()){return Yu(t)||U1(t)||b1(t)||F1(t)||/windows phone/i.test(t)||$1(t)}function NA(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function z1(t,e=[]){let n;switch(t){case"Browser":n=yy(dt());break;case"Worker":n=`${yy(dt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${pi}/${r}`}async function B1(t,e){return Es(t,"GET","/v2/recaptchaConfig",ws(t,e))}function vy(t){return t!==void 0&&t.enterprise!==void 0}class j1{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function DA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function H1(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=vn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",DA().appendChild(r)})}function PA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const xA="https://www.google.com/recaptcha/enterprise.js?render=",OA="recaptcha-enterprise",LA="NO_RECAPTCHA";class W1{constructor(e){this.type=OA,this.auth=_s(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{B1(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new j1(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;vy(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(LA)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&vy(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}H1(xA+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function su(t,e,n,r=!1){const i=new W1(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class MA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class $A{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new wy(this),this.idTokenSubscription=new wy(this),this.beforeStateQueue=new MA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=A1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ln(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Gi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await iu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=fA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ve(e):null;return n&&B(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&B(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ln(e))})}async initializeRecaptchaConfig(){const e=await B1(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new j1(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new W1(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new oa("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ln(e)||this._popupRedirectResolver;B(n,this,"argument-error"),this.redirectPersistenceManager=await Gi.create(this,[Ln(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return B(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=z1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&uA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function _s(t){return Ve(t)}class wy{constructor(e){this.auth=e,this.observer=null,this.addObserver=JC(n=>this.observer=n)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function UA(t,e){const n=Xu(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(tu(s,e??{}))return i;on(i,"already-initialized")}return n.initialize({options:e})}function FA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ln);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function bA(t,e,n){const r=_s(t);B(r._canInitEmulator,r,"emulator-config-failed"),B(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=K1(e),{host:o,port:a}=VA(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||zA()}function K1(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function VA(t){const e=K1(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Ey(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Ey(o)}}}function Ey(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function zA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class vp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return On("not implemented")}_getIdTokenResponse(e){return On("not implemented")}_linkToIdToken(e,n){return On("not implemented")}_getReauthenticationResolver(e){return On("not implemented")}}async function BA(t,e){return Es(t,"POST","/v1/accounts:update",e)}/**
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
 */async function yh(t,e){return ua(t,"POST","/v1/accounts:signInWithPassword",ws(t,e))}/**
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
 */async function jA(t,e){return ua(t,"POST","/v1/accounts:signInWithEmailLink",ws(t,e))}async function HA(t,e){return ua(t,"POST","/v1/accounts:signInWithEmailLink",ws(t,e))}/**
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
 */class Bo extends vp{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Bo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Bo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await su(e,r,"signInWithPassword");return yh(e,i)}else return yh(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await su(e,r,"signInWithPassword");return yh(e,s)}else return Promise.reject(i)});case"emailLink":return jA(e,{email:this._email,oobCode:this._password});default:on(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return BA(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return HA(e,{idToken:n,email:this._email,oobCode:this._password});default:on(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Qi(t,e){return ua(t,"POST","/v1/accounts:signInWithIdp",ws(t,e))}/**
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
 */const WA="http://localhost";class oi extends vp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new oi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):on("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=fp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new oi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Qi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Qi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Qi(e,n)}buildRequest(){const e={requestUri:WA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=aa(n)}return e}}/**
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
 */function KA(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function qA(t){const e=Xs(Ys(t)).link,n=e?Xs(Ys(e)).deep_link_id:null,r=Xs(Ys(t)).deep_link_id;return(r?Xs(Ys(r)).link:null)||r||n||e||t}class wp{constructor(e){var n,r,i,s,o,a;const l=Xs(Ys(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=KA((i=l.mode)!==null&&i!==void 0?i:null);B(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=qA(e);try{return new wp(n)}catch{return null}}}/**
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
 */class Ss{constructor(){this.providerId=Ss.PROVIDER_ID}static credential(e,n){return Bo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=wp.parseLink(n);return B(r,"argument-error"),Bo._fromEmailAndCode(e,r.code,r.tenantId)}}Ss.PROVIDER_ID="password";Ss.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ss.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class q1{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ca extends q1{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class rr extends ca{constructor(){super("facebook.com")}static credential(e){return oi._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rr.credential(e.oauthAccessToken)}catch{return null}}}rr.FACEBOOK_SIGN_IN_METHOD="facebook.com";rr.PROVIDER_ID="facebook.com";/**
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
 */class ir extends ca{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return oi._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ir.credential(n,r)}catch{return null}}}ir.GOOGLE_SIGN_IN_METHOD="google.com";ir.PROVIDER_ID="google.com";/**
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
 */class sr extends ca{constructor(){super("github.com")}static credential(e){return oi._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sr.credential(e.oauthAccessToken)}catch{return null}}}sr.GITHUB_SIGN_IN_METHOD="github.com";sr.PROVIDER_ID="github.com";/**
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
 */class or extends ca{constructor(){super("twitter.com")}static credential(e,n){return oi._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return or.credential(n,r)}catch{return null}}}or.TWITTER_SIGN_IN_METHOD="twitter.com";or.PROVIDER_ID="twitter.com";/**
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
 */async function vh(t,e){return ua(t,"POST","/v1/accounts:signUp",ws(t,e))}/**
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
 */class ai{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Qr._fromIdTokenResponse(e,r,i),o=_y(r);return new ai({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=_y(r);return new ai({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function _y(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ou extends Tn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ou.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ou(e,n,r,i)}}function G1(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ou._fromErrorAndOperation(t,s,e,r):s})}async function GA(t,e,n=!1){const r=await Vo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ai._forOperation(t,"link",r)}/**
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
 */async function QA(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Vo(t,G1(r,i,e,t),n);B(s.idToken,r,"internal-error");const o=gp(s.idToken);B(o,r,"internal-error");const{sub:a}=o;return B(t.uid===a,r,"user-mismatch"),ai._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&on(r,"user-mismatch"),s}}/**
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
 */async function Q1(t,e,n=!1){const r="signIn",i=await G1(t,r,e),s=await ai._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function XA(t,e){return Q1(_s(t),e)}async function YA(t,e,n){var r;const i=_s(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await su(i,s,"signUpPassword");o=vh(i,u)}else o=vh(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await su(i,s,"signUpPassword");return vh(i,c)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),l=await ai._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function JA(t,e,n){return XA(Ve(t),Ss.credential(e,n))}function ZA(t,e,n,r){return Ve(t).onIdTokenChanged(e,n,r)}function eN(t,e,n){return Ve(t).beforeAuthStateChanged(e,n)}function tN(t,e,n,r){return Ve(t).onAuthStateChanged(e,n,r)}function nN(t){return Ve(t).signOut()}const au="__sak";/**
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
 */class X1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(au,"1"),this.storage.removeItem(au),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function rN(){const t=dt();return yp(t)||Yu(t)}const iN=1e3,sN=10;class Y1 extends X1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=rN()&&NA(),this.fallbackToPolling=V1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);AA()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,sN):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},iN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Y1.type="LOCAL";const oN=Y1;/**
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
 */class J1 extends X1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}J1.type="SESSION";const Z1=J1;/**
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
 */function aN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ju{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ju(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await aN(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ju.receivers=[];/**
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
 */function Ep(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class lN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Ep("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function wn(){return window}function uN(t){wn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eE(){return typeof wn().WorkerGlobalScope<"u"&&typeof wn().importScripts=="function"}async function cN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function hN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function dN(){return eE()?self:null}/**
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
 */const tE="firebaseLocalStorageDb",fN=1,lu="firebaseLocalStorage",nE="fbase_key";class ha{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Zu(t,e){return t.transaction([lu],e?"readwrite":"readonly").objectStore(lu)}function pN(){const t=indexedDB.deleteDatabase(tE);return new ha(t).toPromise()}function Ud(){const t=indexedDB.open(tE,fN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(lu,{keyPath:nE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(lu)?e(r):(r.close(),await pN(),e(await Ud()))})})}async function Sy(t,e,n){const r=Zu(t,!0).put({[nE]:e,value:n});return new ha(r).toPromise()}async function mN(t,e){const n=Zu(t,!1).get(e),r=await new ha(n).toPromise();return r===void 0?null:r.value}function Ty(t,e){const n=Zu(t,!0).delete(e);return new ha(n).toPromise()}const gN=800,yN=3;class rE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ud(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>yN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return eE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ju._getInstance(dN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await cN(),!this.activeServiceWorker)return;this.sender=new lN(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||hN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ud();return await Sy(e,au,"1"),await Ty(e,au),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Sy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>mN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ty(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Zu(i,!1).getAll();return new ha(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),gN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}rE.type="LOCAL";const vN=rE;new la(3e4,6e4);/**
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
 */function wN(t,e){return e?Ln(e):(B(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class _p extends vp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Qi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Qi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function EN(t){return Q1(t.auth,new _p(t),t.bypassAuthState)}function _N(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),QA(n,new _p(t),t.bypassAuthState)}async function SN(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),GA(n,new _p(t),t.bypassAuthState)}/**
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
 */class iE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return EN;case"linkViaPopup":case"linkViaRedirect":return SN;case"reauthViaPopup":case"reauthViaRedirect":return _N;default:on(this.auth,"internal-error")}}resolve(e){jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const TN=new la(2e3,1e4);class bi extends iE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,bi.currentPopupAction&&bi.currentPopupAction.cancel(),bi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return B(e,this.auth,"internal-error"),e}async onExecution(){jn(this.filter.length===1,"Popup operations only handle one event");const e=Ep();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(vn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(vn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,bi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(vn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,TN.get())};e()}}bi.currentPopupAction=null;/**
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
 */const IN="pendingRedirect",Sl=new Map;class kN extends iE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Sl.get(this.auth._key());if(!e){try{const r=await CN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Sl.set(this.auth._key(),e)}return this.bypassAuthState||Sl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function CN(t,e){const n=NN(e),r=AN(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function RN(t,e){Sl.set(t._key(),e)}function AN(t){return Ln(t._redirectPersistence)}function NN(t){return _l(IN,t.config.apiKey,t.name)}async function DN(t,e,n=!1){const r=_s(t),i=wN(r,e),o=await new kN(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const PN=10*60*1e3;class xN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ON(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!sE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(vn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=PN&&this.cachedEventUids.clear(),this.cachedEventUids.has(Iy(e))}saveEventToCache(e){this.cachedEventUids.add(Iy(e)),this.lastProcessedEventTime=Date.now()}}function Iy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function sE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ON(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return sE(t);default:return!1}}/**
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
 */async function LN(t,e={}){return Es(t,"GET","/v1/projects",e)}/**
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
 */const MN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,$N=/^https?/;async function UN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await LN(t);for(const n of e)try{if(FN(n))return}catch{}on(t,"unauthorized-domain")}function FN(t){const e=$d(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!$N.test(n))return!1;if(MN.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bN=new la(3e4,6e4);function ky(){const t=wn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function VN(t){return new Promise((e,n)=>{var r,i,s;function o(){ky(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ky(),n(vn(t,"network-request-failed"))},timeout:bN.get()})}if(!((i=(r=wn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=wn().gapi)===null||s===void 0)&&s.load)o();else{const a=PA("iframefcb");return wn()[a]=()=>{gapi.load?o():n(vn(t,"network-request-failed"))},H1(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Tl=null,e})}let Tl=null;function zN(t){return Tl=Tl||VN(t),Tl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BN=new la(5e3,15e3),jN="__/auth/iframe",HN="emulator/auth/iframe",WN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},KN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function qN(t){const e=t.config;B(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?mp(e,HN):`https://${t.config.authDomain}/${jN}`,r={apiKey:e.apiKey,appName:t.name,v:pi},i=KN.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${aa(r).slice(1)}`}async function GN(t){const e=await zN(t),n=wn().gapi;return B(n,t,"internal-error"),e.open({where:document.body,url:qN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:WN,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=vn(t,"network-request-failed"),a=wn().setTimeout(()=>{s(o)},BN.get());function l(){wn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},XN=500,YN=600,JN="_blank",ZN="http://localhost";class Cy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function eD(t,e,n,r=XN,i=YN){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},QN),{width:r.toString(),height:i.toString(),top:s,left:o}),u=dt().toLowerCase();n&&(a=M1(u)?JN:n),L1(u)&&(e=e||ZN,l.scrollbars="yes");const c=Object.entries(l).reduce((f,[g,y])=>`${f}${g}=${y},`,"");if(RA(u)&&a!=="_self")return tD(e||"",a),new Cy(null);const d=window.open(e||"",a,c);B(d,t,"popup-blocked");try{d.focus()}catch{}return new Cy(d)}function tD(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const nD="__/auth/handler",rD="emulator/auth/handler",iD=encodeURIComponent("fac");async function Ry(t,e,n,r,i,s){B(t.config.authDomain,t,"auth-domain-config-required"),B(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:pi,eventId:i};if(e instanceof q1){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",YC(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries(s||{}))o[c]=d}if(e instanceof ca){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${iD}=${encodeURIComponent(l)}`:"";return`${sD(t)}?${aa(a).slice(1)}${u}`}function sD({config:t}){return t.emulator?mp(t,rD):`https://${t.authDomain}/${nD}`}/**
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
 */const wh="webStorageSupport";class oD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Z1,this._completeRedirectFn=DN,this._overrideRedirectResult=RN}async _openPopup(e,n,r,i){var s;jn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Ry(e,n,r,$d(),i);return eD(e,o,Ep())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Ry(e,n,r,$d(),i);return uN(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(jn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await GN(e),r=new xN(e);return n.register("authEvent",i=>(B(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(wh,{type:wh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[wh];o!==void 0&&n(!!o),on(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=UN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return V1()||yp()||Yu()}}const aD=oD;var Ay="@firebase/auth",Ny="0.23.1";/**
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
 */class lD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function uD(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function cD(t){si(new Cr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;B(o&&!o.includes(":"),"invalid-api-key",{appName:r.name}),B(!(a!=null&&a.includes(":")),"argument-error",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:z1(t)},u=new $A(r,i,s,l);return FA(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),si(new Cr("auth-internal",e=>{const n=_s(e.getProvider("auth").getImmediate());return(r=>new lD(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),yn(Ay,Ny,uD(t)),yn(Ay,Ny,"esm2017")}/**
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
 */const hD=5*60,dD=E1("authIdTokenMaxAge")||hD;let Dy=null;const fD=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>dD)return;const i=n==null?void 0:n.token;Dy!==i&&(Dy=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function pD(t=dp()){const e=Xu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=UA(t,{popupRedirectResolver:aD,persistence:[vN,oN,Z1]}),r=E1("authTokenSyncURL");if(r){const s=fD(r);eN(n,s,()=>s(n.currentUser)),ZA(n,o=>s(o))}const i=v1("auth");return i&&bA(n,`http://${i}`),n}cD("Browser");var mD=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},P,Sp=Sp||{},K=mD||self;function uu(){}function ec(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function da(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function gD(t){return Object.prototype.hasOwnProperty.call(t,Eh)&&t[Eh]||(t[Eh]=++yD)}var Eh="closure_uid_"+(1e9*Math.random()>>>0),yD=0;function vD(t,e,n){return t.call.apply(t.bind,arguments)}function wD(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function lt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?lt=vD:lt=wD,lt.apply(null,arguments)}function Xa(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function qe(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Or(){this.s=this.s,this.o=this.o}var ED=0;Or.prototype.s=!1;Or.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),ED!=0)&&gD(this)};Or.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const oE=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Tp(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Py(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(ec(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function ut(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ut.prototype.h=function(){this.defaultPrevented=!0};var _D=function(){if(!K.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{K.addEventListener("test",uu,e),K.removeEventListener("test",uu,e)}catch{}return t}();function cu(t){return/^[\s\xa0]*$/.test(t)}var xy=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function _h(t,e){return t<e?-1:t>e?1:0}function tc(){var t=K.navigator;return t&&(t=t.userAgent)?t:""}function dn(t){return tc().indexOf(t)!=-1}function Ip(t){return Ip[" "](t),t}Ip[" "]=uu;function aE(t,e,n){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:t[e]=n(e)}var SD=dn("Opera"),as=dn("Trident")||dn("MSIE"),lE=dn("Edge"),Fd=lE||as,uE=dn("Gecko")&&!(tc().toLowerCase().indexOf("webkit")!=-1&&!dn("Edge"))&&!(dn("Trident")||dn("MSIE"))&&!dn("Edge"),TD=tc().toLowerCase().indexOf("webkit")!=-1&&!dn("Edge");function cE(){var t=K.document;return t?t.documentMode:void 0}var hu;e:{var Sh="",Th=function(){var t=tc();if(uE)return/rv:([^\);]+)(\)|;)/.exec(t);if(lE)return/Edge\/([\d\.]+)/.exec(t);if(as)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(TD)return/WebKit\/(\S+)/.exec(t);if(SD)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Th&&(Sh=Th?Th[1]:""),as){var Ih=cE();if(Ih!=null&&Ih>parseFloat(Sh)){hu=String(Ih);break e}}hu=Sh}var ID={};function kD(){return aE(ID,9,function(){let t=0;const e=xy(String(hu)).split("."),n=xy("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=_h(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||_h(i[2].length==0,s[2].length==0)||_h(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var bd;if(K.document&&as){var Oy=cE();bd=Oy||parseInt(hu,10)||void 0}else bd=void 0;var CD=bd;function jo(t,e){if(ut.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(uE){e:{try{Ip(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:RD[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&jo.$.h.call(this)}}qe(jo,ut);var RD={2:"touch",3:"pen",4:"mouse"};jo.prototype.h=function(){jo.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var fa="closure_listenable_"+(1e6*Math.random()|0),AD=0;function ND(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++AD,this.fa=this.ia=!1}function nc(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function kp(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function hE(t){const e={};for(const n in t)e[n]=t[n];return e}const Ly="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function dE(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Ly.length;s++)n=Ly[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function rc(t){this.src=t,this.g={},this.h=0}rc.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=zd(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new ND(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Vd(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=oE(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(nc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function zd(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Cp="closure_lm_"+(1e6*Math.random()|0),kh={};function fE(t,e,n,r,i){if(r&&r.once)return mE(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)fE(t,e[s],n,r,i);return null}return n=Np(n),t&&t[fa]?t.O(e,n,da(r)?!!r.capture:!!r,i):pE(t,e,n,!1,r,i)}function pE(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=da(i)?!!i.capture:!!i,a=Ap(t);if(a||(t[Cp]=a=new rc(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=DD(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)_D||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(yE(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function DD(){function t(n){return e.call(t.src,t.listener,n)}const e=PD;return t}function mE(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)mE(t,e[s],n,r,i);return null}return n=Np(n),t&&t[fa]?t.P(e,n,da(r)?!!r.capture:!!r,i):pE(t,e,n,!0,r,i)}function gE(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)gE(t,e[s],n,r,i);else r=da(r)?!!r.capture:!!r,n=Np(n),t&&t[fa]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=zd(s,n,r,i),-1<n&&(nc(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Ap(t))&&(e=t.g[e.toString()],t=-1,e&&(t=zd(e,n,r,i)),(n=-1<t?e[t]:null)&&Rp(n))}function Rp(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[fa])Vd(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(yE(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Ap(e))?(Vd(n,t),n.h==0&&(n.src=null,e[Cp]=null)):nc(t)}}}function yE(t){return t in kh?kh[t]:kh[t]="on"+t}function PD(t,e){if(t.fa)t=!0;else{e=new jo(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Rp(t),t=n.call(r,e)}return t}function Ap(t){return t=t[Cp],t instanceof rc?t:null}var Ch="__closure_events_fn_"+(1e9*Math.random()>>>0);function Np(t){return typeof t=="function"?t:(t[Ch]||(t[Ch]=function(e){return t.handleEvent(e)}),t[Ch])}function Ke(){Or.call(this),this.i=new rc(this),this.S=this,this.J=null}qe(Ke,Or);Ke.prototype[fa]=!0;Ke.prototype.removeEventListener=function(t,e,n,r){gE(this,t,e,n,r)};function Je(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new ut(e,t);else if(e instanceof ut)e.target=e.target||t;else{var i=e;e=new ut(r,t),dE(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Ya(o,r,!0,e)&&i}if(o=e.g=t,i=Ya(o,r,!0,e)&&i,i=Ya(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Ya(o,r,!1,e)&&i}Ke.prototype.N=function(){if(Ke.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)nc(n[r]);delete t.g[e],t.h--}}this.J=null};Ke.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ke.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Ya(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Vd(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Dp=K.JSON.stringify;function xD(){var t=EE;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class OD{constructor(){this.h=this.g=null}add(e,n){const r=vE.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var vE=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new LD,t=>t.reset());class LD{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function MD(t){K.setTimeout(()=>{throw t},0)}function wE(t,e){Bd||$D(),jd||(Bd(),jd=!0),EE.add(t,e)}var Bd;function $D(){var t=K.Promise.resolve(void 0);Bd=function(){t.then(UD)}}var jd=!1,EE=new OD;function UD(){for(var t;t=xD();){try{t.h.call(t.g)}catch(n){MD(n)}var e=vE;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}jd=!1}function ic(t,e){Ke.call(this),this.h=t||1,this.g=e||K,this.j=lt(this.qb,this),this.l=Date.now()}qe(ic,Ke);P=ic.prototype;P.ga=!1;P.T=null;P.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Je(this,"tick"),this.ga&&(Pp(this),this.start()))}};P.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Pp(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}P.N=function(){ic.$.N.call(this),Pp(this),delete this.g};function xp(t,e,n){if(typeof t=="function")n&&(t=lt(t,n));else if(t&&typeof t.handleEvent=="function")t=lt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:K.setTimeout(t,e||0)}function _E(t){t.g=xp(()=>{t.g=null,t.i&&(t.i=!1,_E(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class FD extends Or{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:_E(this)}N(){super.N(),this.g&&(K.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ho(t){Or.call(this),this.h=t,this.g={}}qe(Ho,Or);var My=[];function SE(t,e,n,r){Array.isArray(n)||(n&&(My[0]=n.toString()),n=My);for(var i=0;i<n.length;i++){var s=fE(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function TE(t){kp(t.g,function(e,n){this.g.hasOwnProperty(n)&&Rp(e)},t),t.g={}}Ho.prototype.N=function(){Ho.$.N.call(this),TE(this)};Ho.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function sc(){this.g=!0}sc.prototype.Ea=function(){this.g=!1};function bD(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var d=c.split("_");o=2<=d.length&&d[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function VD(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Vi(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+BD(t,n)+(r?" "+r:"")})}function zD(t,e){t.info(function(){return"TIMEOUT: "+e})}sc.prototype.info=function(){};function BD(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Dp(n)}catch{return e}}var mi={},$y=null;function oc(){return $y=$y||new Ke}mi.Ta="serverreachability";function IE(t){ut.call(this,mi.Ta,t)}qe(IE,ut);function Wo(t){const e=oc();Je(e,new IE(e))}mi.STAT_EVENT="statevent";function kE(t,e){ut.call(this,mi.STAT_EVENT,t),this.stat=e}qe(kE,ut);function yt(t){const e=oc();Je(e,new kE(e,t))}mi.Ua="timingevent";function CE(t,e){ut.call(this,mi.Ua,t),this.size=e}qe(CE,ut);function pa(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return K.setTimeout(function(){t()},e)}var ac={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},RE={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Op(){}Op.prototype.h=null;function Uy(t){return t.h||(t.h=t.i())}function AE(){}var ma={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Lp(){ut.call(this,"d")}qe(Lp,ut);function Mp(){ut.call(this,"c")}qe(Mp,ut);var Hd;function lc(){}qe(lc,Op);lc.prototype.g=function(){return new XMLHttpRequest};lc.prototype.i=function(){return{}};Hd=new lc;function ga(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Ho(this),this.P=jD,t=Fd?125:void 0,this.V=new ic(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new NE}function NE(){this.i=null,this.g="",this.h=!1}var jD=45e3,Wd={},du={};P=ga.prototype;P.setTimeout=function(t){this.P=t};function Kd(t,e,n){t.L=1,t.v=cc(Hn(e)),t.s=n,t.S=!0,DE(t,null)}function DE(t,e){t.G=Date.now(),ya(t),t.A=Hn(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),FE(n.i,"t",r),t.C=0,n=t.l.I,t.h=new NE,t.g=s_(t.l,n?e:null,!t.s),0<t.O&&(t.M=new FD(lt(t.Pa,t,t.g),t.O)),SE(t.U,t.g,"readystatechange",t.nb),e=t.I?hE(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Wo(),bD(t.j,t.u,t.A,t.m,t.W,t.s)}P.nb=function(t){t=t.target;const e=this.M;e&&Mn(t)==3?e.l():this.Pa(t)};P.Pa=function(t){try{if(t==this.g)e:{const c=Mn(this.g);var e=this.g.Ia();const d=this.g.da();if(!(3>c)&&(c!=3||Fd||this.g&&(this.h.h||this.g.ja()||zy(this.g)))){this.J||c!=4||e==7||(e==8||0>=d?Wo(3):Wo(2)),uc(this);var n=this.g.da();this.aa=n;t:if(PE(this)){var r=zy(this.g);t="";var i=r.length,s=Mn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Hr(this),po(this);var o="";break t}this.h.i=new K.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,VD(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!cu(a)){var u=a;break t}}u=null}if(n=u)Vi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,qd(this,n);else{this.i=!1,this.o=3,yt(12),Hr(this),po(this);break e}}this.S?(xE(this,c,o),Fd&&this.i&&c==3&&(SE(this.U,this.V,"tick",this.mb),this.V.start())):(Vi(this.j,this.m,o,null),qd(this,o)),c==4&&Hr(this),this.i&&!this.J&&(c==4?t_(this.l,this):(this.i=!1,ya(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,yt(12)):(this.o=0,yt(13)),Hr(this),po(this)}}}catch{}finally{}};function PE(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function xE(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=HD(t,n),i==du){e==4&&(t.o=4,yt(14),r=!1),Vi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Wd){t.o=4,yt(15),Vi(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Vi(t.j,t.m,i,null),qd(t,i);PE(t)&&i!=du&&i!=Wd&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,yt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ca&&(t.ca=!0,e=t.l,e.g==t&&e.ca&&!e.L&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Bp(e),e.L=!0,yt(11))):(Vi(t.j,t.m,n,"[Invalid Chunked Response]"),Hr(t),po(t))}P.mb=function(){if(this.g){var t=Mn(this.g),e=this.g.ja();this.C<e.length&&(uc(this),xE(this,t,e),this.i&&t!=4&&ya(this))}};function HD(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?du:(n=Number(e.substring(n,r)),isNaN(n)?Wd:(r+=1,r+n>e.length?du:(e=e.substr(r,n),t.C=r+n,e)))}P.cancel=function(){this.J=!0,Hr(this)};function ya(t){t.Y=Date.now()+t.P,OE(t,t.P)}function OE(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=pa(lt(t.lb,t),e)}function uc(t){t.B&&(K.clearTimeout(t.B),t.B=null)}P.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(zD(this.j,this.A),this.L!=2&&(Wo(),yt(17)),Hr(this),this.o=2,po(this)):OE(this,this.Y-t)};function po(t){t.l.H==0||t.J||t_(t.l,t)}function Hr(t){uc(t);var e=t.M;e&&typeof e.ra=="function"&&e.ra(),t.M=null,Pp(t.V),TE(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ra())}function qd(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Gd(n.h,t))){if(!t.K&&Gd(n.h,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)mu(n),fc(n);else break e;zp(n),yt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.M&&n.A==0&&!n.v&&(n.v=pa(lt(n.ib,n),6e3));if(1>=zE(n.h)&&n.na){try{n.na()}catch{}n.na=void 0}}else Wr(n,11)}else if((t.K||n.g==t)&&mu(n),!cu(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.J=u[1],n.oa=u[2];const c=u[3];c!=null&&(n.qa=c,n.j.info("VER="+n.qa));const d=u[4];d!=null&&(n.Ga=d,n.j.info("SVER="+n.Ga));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.K=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.h;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&($p(s,s.h),s.h=null))}if(r.F){const v=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,Ee(r.G,r.F,v))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-t.G,n.j.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=i_(r,r.I?r.oa:null,r.Y),o.K){BE(r.h,o);var a=o,l=r.K;l&&a.setTimeout(l),a.B&&(uc(a),ya(a)),r.g=o}else ZE(r);0<n.i.length&&pc(n)}else u[0]!="stop"&&u[0]!="close"||Wr(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Wr(n,7):Vp(n):u[0]!="noop"&&n.l&&n.l.Aa(u),n.A=0)}}Wo(4)}catch{}}function WD(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ec(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function KD(t){if(t.sa&&typeof t.sa=="function")return t.sa();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ec(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function LE(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ec(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=KD(t),r=WD(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var ME=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function qD(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Xr(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Xr){this.h=e!==void 0?e:t.h,fu(this,t.j),this.s=t.s,this.g=t.g,pu(this,t.m),this.l=t.l,e=t.i;var n=new Ko;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Fy(this,n),this.o=t.o}else t&&(n=String(t).match(ME))?(this.h=!!e,fu(this,n[1]||"",!0),this.s=Js(n[2]||""),this.g=Js(n[3]||"",!0),pu(this,n[4]),this.l=Js(n[5]||"",!0),Fy(this,n[6]||"",!0),this.o=Js(n[7]||"")):(this.h=!!e,this.i=new Ko(null,this.h))}Xr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Zs(e,by,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Zs(e,by,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Zs(n,n.charAt(0)=="/"?XD:QD,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Zs(n,JD)),t.join("")};function Hn(t){return new Xr(t)}function fu(t,e,n){t.j=n?Js(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function pu(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Fy(t,e,n){e instanceof Ko?(t.i=e,ZD(t.i,t.h)):(n||(e=Zs(e,YD)),t.i=new Ko(e,t.h))}function Ee(t,e,n){t.i.set(e,n)}function cc(t){return Ee(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Js(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Zs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,GD),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function GD(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var by=/[#\/\?@]/g,QD=/[#\?:]/g,XD=/[#\?]/g,YD=/[#\?@]/g,JD=/#/g;function Ko(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Lr(t){t.g||(t.g=new Map,t.h=0,t.i&&qD(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}P=Ko.prototype;P.add=function(t,e){Lr(this),this.i=null,t=Ts(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function $E(t,e){Lr(t),e=Ts(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function UE(t,e){return Lr(t),e=Ts(t,e),t.g.has(e)}P.forEach=function(t,e){Lr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};P.sa=function(){Lr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};P.Z=function(t){Lr(this);let e=[];if(typeof t=="string")UE(this,t)&&(e=e.concat(this.g.get(Ts(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};P.set=function(t,e){return Lr(this),this.i=null,t=Ts(this,t),UE(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};P.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function FE(t,e,n){$E(t,e),0<n.length&&(t.i=null,t.g.set(Ts(t,e),Tp(n)),t.h+=n.length)}P.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Ts(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function ZD(t,e){e&&!t.j&&(Lr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&($E(this,r),FE(this,i,n))},t)),t.j=e}var e2=class{constructor(t,e){this.h=t,this.g=e}};function bE(t){this.l=t||t2,K.PerformanceNavigationTiming?(t=K.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(K.g&&K.g.Ka&&K.g.Ka()&&K.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var t2=10;function VE(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function zE(t){return t.h?1:t.g?t.g.size:0}function Gd(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function $p(t,e){t.g?t.g.add(e):t.h=e}function BE(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}bE.prototype.cancel=function(){if(this.i=jE(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function jE(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Tp(t.i)}function Up(){}Up.prototype.stringify=function(t){return K.JSON.stringify(t,void 0)};Up.prototype.parse=function(t){return K.JSON.parse(t,void 0)};function n2(){this.g=new Up}function r2(t,e,n){const r=n||"";try{LE(t,function(i,s){let o=i;da(i)&&(o=Dp(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function i2(t,e){const n=new sc;if(K.Image){const r=new Image;r.onload=Xa(Ja,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Xa(Ja,n,r,"TestLoadImage: error",!1,e),r.onabort=Xa(Ja,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Xa(Ja,n,r,"TestLoadImage: timeout",!1,e),K.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Ja(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function va(t){this.l=t.fc||null,this.j=t.ob||!1}qe(va,Op);va.prototype.g=function(){return new hc(this.l,this.j)};va.prototype.i=function(t){return function(){return t}}({});function hc(t,e){Ke.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Fp,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}qe(hc,Ke);var Fp=0;P=hc.prototype;P.open=function(t,e){if(this.readyState!=Fp)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,qo(this)};P.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||K).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};P.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,wa(this)),this.readyState=Fp};P.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,qo(this)),this.g&&(this.readyState=3,qo(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof K.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;HE(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function HE(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}P.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?wa(this):qo(this),this.readyState==3&&HE(this)}};P.Za=function(t){this.g&&(this.response=this.responseText=t,wa(this))};P.Ya=function(t){this.g&&(this.response=t,wa(this))};P.ka=function(){this.g&&wa(this)};function wa(t){t.readyState=4,t.l=null,t.j=null,t.A=null,qo(t)}P.setRequestHeader=function(t,e){this.v.append(t,e)};P.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};P.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function qo(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(hc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var s2=K.JSON.parse;function Re(t){Ke.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=WE,this.L=this.M=!1}qe(Re,Ke);var WE="",o2=/^https?$/i,a2=["POST","PUT"];P=Re.prototype;P.Oa=function(t){this.M=t};P.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Hd.g(),this.C=this.u?Uy(this.u):Uy(Hd),this.g.onreadystatechange=lt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){Vy(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=K.FormData&&t instanceof K.FormData,!(0<=oE(a2,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{GE(this),0<this.B&&((this.L=l2(this.g))?(this.g.timeout=this.B,this.g.ontimeout=lt(this.ua,this)):this.A=xp(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Vy(this,s)}};function l2(t){return as&&kD()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}P.ua=function(){typeof Sp<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Je(this,"timeout"),this.abort(8))};function Vy(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,KE(t),dc(t)}function KE(t){t.F||(t.F=!0,Je(t,"complete"),Je(t,"error"))}P.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Je(this,"complete"),Je(this,"abort"),dc(this))};P.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),dc(this,!0)),Re.$.N.call(this)};P.La=function(){this.s||(this.G||this.v||this.l?qE(this):this.kb())};P.kb=function(){qE(this)};function qE(t){if(t.h&&typeof Sp<"u"&&(!t.C[1]||Mn(t)!=4||t.da()!=2)){if(t.v&&Mn(t)==4)xp(t.La,0,t);else if(Je(t,"readystatechange"),Mn(t)==4){t.h=!1;try{const a=t.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.I).match(ME)[1]||null;if(!i&&K.self&&K.self.location){var s=K.self.location.protocol;i=s.substr(0,s.length-1)}r=!o2.test(i?i.toLowerCase():"")}n=r}if(n)Je(t,"complete"),Je(t,"success");else{t.m=6;try{var o=2<Mn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.da()+"]",KE(t)}}finally{dc(t)}}}}function dc(t,e){if(t.g){GE(t);const n=t.g,r=t.C[0]?uu:null;t.g=null,t.C=null,e||Je(t,"ready");try{n.onreadystatechange=r}catch{}}}function GE(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(K.clearTimeout(t.A),t.A=null)}function Mn(t){return t.g?t.g.readyState:0}P.da=function(){try{return 2<Mn(this)?this.g.status:-1}catch{return-1}};P.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};P.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),s2(e)}};function zy(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case WE:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}P.Ia=function(){return this.m};P.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function QE(t){let e="";return kp(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function bp(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=QE(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ee(t,e,n))}function js(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function XE(t){this.Ga=0,this.i=[],this.j=new sc,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=js("failFast",!1,t),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=js("baseRetryDelayMs",5e3,t),this.hb=js("retryDelaySeedMs",1e4,t),this.eb=js("forwardChannelMaxRetries",2,t),this.xa=js("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.K=void 0,this.I=t&&t.supportsCrossDomainXhr||!1,this.J="",this.h=new bE(t&&t.concurrentRequestLimit),this.Ja=new n2,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.j.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}P=XE.prototype;P.qa=8;P.H=1;function Vp(t){if(YE(t),t.H==3){var e=t.W++,n=Hn(t.G);Ee(n,"SID",t.J),Ee(n,"RID",e),Ee(n,"TYPE","terminate"),Ea(t,n),e=new ga(t,t.j,e,void 0),e.L=2,e.v=cc(Hn(n)),n=!1,K.navigator&&K.navigator.sendBeacon&&(n=K.navigator.sendBeacon(e.v.toString(),"")),!n&&K.Image&&(new Image().src=e.v,n=!0),n||(e.g=s_(e.l,null),e.g.ha(e.v)),e.G=Date.now(),ya(e)}r_(t)}function fc(t){t.g&&(Bp(t),t.g.cancel(),t.g=null)}function YE(t){fc(t),t.u&&(K.clearTimeout(t.u),t.u=null),mu(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&K.clearTimeout(t.m),t.m=null)}function pc(t){VE(t.h)||t.m||(t.m=!0,wE(t.Na,t),t.C=0)}function u2(t,e){return zE(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.F.concat(t.i),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=pa(lt(t.Na,t,e),n_(t,t.C)),t.C++,!0)}P.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new ga(this,this.j,t,void 0);let s=this.s;if(this.U&&(s?(s=hE(s),dE(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=JE(this,i,e),n=Hn(this.G),Ee(n,"RID",t),Ee(n,"CVER",22),this.F&&Ee(n,"X-HTTP-Session-Id",this.F),Ea(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(QE(s)))+"&"+e:this.o&&bp(n,this.o,s)),$p(this.h,i),this.bb&&Ee(n,"TYPE","init"),this.P?(Ee(n,"$req",e),Ee(n,"SID","null"),i.ba=!0,Kd(i,n,null)):Kd(i,n,e),this.H=2}}else this.H==3&&(t?By(this,t):this.i.length==0||VE(this.h)||By(this))};function By(t,e){var n;e?n=e.m:n=t.W++;const r=Hn(t.G);Ee(r,"SID",t.J),Ee(r,"RID",n),Ee(r,"AID",t.V),Ea(t,r),t.o&&t.s&&bp(r,t.o,t.s),n=new ga(t,t.j,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.i=e.F.concat(t.i)),e=JE(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),$p(t.h,n),Kd(n,r,e)}function Ea(t,e){t.ma&&kp(t.ma,function(n,r){Ee(e,r,n)}),t.l&&LE({},function(n,r){Ee(e,r,n)})}function JE(t,e,n){n=Math.min(t.i.length,n);var r=t.l?lt(t.l.Va,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{r2(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.F=t,r}function ZE(t){t.g||t.u||(t.ba=1,wE(t.Ma,t),t.A=0)}function zp(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=pa(lt(t.Ma,t),n_(t,t.A)),t.A++,!0)}P.Ma=function(){if(this.u=null,e_(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var t=2*this.S;this.j.info("BP detection timer enabled: "+t),this.B=pa(lt(this.jb,this),t)}};P.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,yt(10),fc(this),e_(this))};function Bp(t){t.B!=null&&(K.clearTimeout(t.B),t.B=null)}function e_(t){t.g=new ga(t,t.j,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Hn(t.wa);Ee(e,"RID","rpc"),Ee(e,"SID",t.J),Ee(e,"CI",t.M?"0":"1"),Ee(e,"AID",t.V),Ee(e,"TYPE","xmlhttp"),Ea(t,e),t.o&&t.s&&bp(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.oa,n.L=1,n.v=cc(Hn(e)),n.s=null,n.S=!0,DE(n,t)}P.ib=function(){this.v!=null&&(this.v=null,fc(this),zp(this),yt(19))};function mu(t){t.v!=null&&(K.clearTimeout(t.v),t.v=null)}function t_(t,e){var n=null;if(t.g==e){mu(t),Bp(t),t.g=null;var r=2}else if(Gd(t.h,e))n=e.F,BE(t.h,e),r=1;else return;if(t.H!=0){if(t.ta=e.aa,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=oc(),Je(r,new CE(r,n)),pc(t)}else ZE(t);else if(i=e.o,i==3||i==0&&0<t.ta||!(r==1&&u2(t,e)||r==2&&zp(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Wr(t,5);break;case 4:Wr(t,10);break;case 3:Wr(t,6);break;default:Wr(t,2)}}}function n_(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.l||(n*=2),n*e}function Wr(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=lt(t.pb,t);n||(n=new Xr("//www.google.com/images/cleardot.gif"),K.location&&K.location.protocol=="http"||fu(n,"https"),cc(n)),i2(n.toString(),r)}else yt(2);t.H=0,t.l&&t.l.za(e),r_(t),YE(t)}P.pb=function(t){t?(this.j.info("Successfully pinged google.com"),yt(2)):(this.j.info("Failed to ping google.com"),yt(1))};function r_(t){if(t.H=0,t.pa=[],t.l){const e=jE(t.h);(e.length!=0||t.i.length!=0)&&(Py(t.pa,e),Py(t.pa,t.i),t.h.i.length=0,Tp(t.i),t.i.length=0),t.l.ya()}}function i_(t,e,n){var r=n instanceof Xr?Hn(n):new Xr(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),pu(r,r.m);else{var i=K.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Xr(null,void 0);r&&fu(s,r),e&&(s.g=e),i&&pu(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&Ee(r,n,e),Ee(r,"VER",t.qa),Ea(t,r),r}function s_(t,e,n){if(e&&!t.I)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Re(new va({ob:!0})):new Re(t.va),e.Oa(t.I),e}function o_(){}P=o_.prototype;P.Ba=function(){};P.Aa=function(){};P.za=function(){};P.ya=function(){};P.Va=function(){};function gu(){if(as&&!(10<=Number(CD)))throw Error("Environmental error: no available transport.")}gu.prototype.g=function(t,e){return new xt(t,e)};function xt(t,e){Ke.call(this),this.g=new XE(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!cu(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!cu(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Is(this)}qe(xt,Ke);xt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var t=this.g,e=this.l,n=this.h||void 0;yt(0),t.Y=e,t.ma=n||{},t.M=t.aa,t.G=i_(t,null,t.Y),pc(t)};xt.prototype.close=function(){Vp(this.g)};xt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Dp(t),t=n);e.i.push(new e2(e.fb++,t)),e.H==3&&pc(e)};xt.prototype.N=function(){this.g.l=null,delete this.j,Vp(this.g),delete this.g,xt.$.N.call(this)};function a_(t){Lp.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}qe(a_,Lp);function l_(){Mp.call(this),this.status=1}qe(l_,Mp);function Is(t){this.g=t}qe(Is,o_);Is.prototype.Ba=function(){Je(this.g,"a")};Is.prototype.Aa=function(t){Je(this.g,new a_(t))};Is.prototype.za=function(t){Je(this.g,new l_)};Is.prototype.ya=function(){Je(this.g,"b")};function c2(){this.blockSize=-1}function an(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}qe(an,c2);an.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Rh(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}an.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)Rh(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Rh(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Rh(this,r),i=0;break}}this.h=i,this.i+=e};an.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function he(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var h2={};function jp(t){return-128<=t&&128>t?aE(h2,t,function(e){return new he([e|0],0>e?-1:0)}):new he([t|0],0>t?-1:0)}function fn(t){if(isNaN(t)||!isFinite(t))return Xi;if(0>t)return Xe(fn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Qd;return new he(e,0)}function u_(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Xe(u_(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=fn(Math.pow(e,8)),r=Xi,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=fn(Math.pow(e,s)),r=r.R(s).add(fn(o))):(r=r.R(n),r=r.add(fn(o)))}return r}var Qd=4294967296,Xi=jp(0),Xd=jp(1),jy=jp(16777216);P=he.prototype;P.ea=function(){if(zt(this))return-Xe(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Qd+r)*e,e*=Qd}return t};P.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if($n(this))return"0";if(zt(this))return"-"+Xe(this).toString(t);for(var e=fn(Math.pow(t,6)),n=this,r="";;){var i=vu(n,e).g;n=yu(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,$n(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};P.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function $n(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function zt(t){return t.h==-1}P.X=function(t){return t=yu(this,t),zt(t)?-1:$n(t)?0:1};function Xe(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new he(n,~t.h).add(Xd)}P.abs=function(){return zt(this)?Xe(this):this};P.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new he(n,n[n.length-1]&-2147483648?-1:0)};function yu(t,e){return t.add(Xe(e))}P.R=function(t){if($n(this)||$n(t))return Xi;if(zt(this))return zt(t)?Xe(this).R(Xe(t)):Xe(Xe(this).R(t));if(zt(t))return Xe(this.R(Xe(t)));if(0>this.X(jy)&&0>t.X(jy))return fn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,Za(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Za(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Za(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Za(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new he(n,0)};function Za(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Hs(t,e){this.g=t,this.h=e}function vu(t,e){if($n(e))throw Error("division by zero");if($n(t))return new Hs(Xi,Xi);if(zt(t))return e=vu(Xe(t),e),new Hs(Xe(e.g),Xe(e.h));if(zt(e))return e=vu(t,Xe(e)),new Hs(Xe(e.g),e.h);if(30<t.g.length){if(zt(t)||zt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Xd,r=e;0>=r.X(t);)n=Hy(n),r=Hy(r);var i=Si(n,1),s=Si(r,1);for(r=Si(r,2),n=Si(n,2);!$n(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Si(r,1),n=Si(n,1)}return e=yu(t,i.R(e)),new Hs(i,e)}for(i=Xi;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=fn(n),o=s.R(e);zt(o)||0<o.X(t);)n-=r,s=fn(n),o=s.R(e);$n(s)&&(s=Xd),i=i.add(s),t=yu(t,o)}return new Hs(i,t)}P.gb=function(t){return vu(this,t).h};P.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new he(n,this.h&t.h)};P.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new he(n,this.h|t.h)};P.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new he(n,this.h^t.h)};function Hy(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new he(n,t.h)}function Si(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new he(i,t.h)}gu.prototype.createWebChannel=gu.prototype.g;xt.prototype.send=xt.prototype.u;xt.prototype.open=xt.prototype.m;xt.prototype.close=xt.prototype.close;ac.NO_ERROR=0;ac.TIMEOUT=8;ac.HTTP_ERROR=6;RE.COMPLETE="complete";AE.EventType=ma;ma.OPEN="a";ma.CLOSE="b";ma.ERROR="c";ma.MESSAGE="d";Ke.prototype.listen=Ke.prototype.O;Re.prototype.listenOnce=Re.prototype.P;Re.prototype.getLastError=Re.prototype.Sa;Re.prototype.getLastErrorCode=Re.prototype.Ia;Re.prototype.getStatus=Re.prototype.da;Re.prototype.getResponseJson=Re.prototype.Wa;Re.prototype.getResponseText=Re.prototype.ja;Re.prototype.send=Re.prototype.ha;Re.prototype.setWithCredentials=Re.prototype.Oa;an.prototype.digest=an.prototype.l;an.prototype.reset=an.prototype.reset;an.prototype.update=an.prototype.j;he.prototype.add=he.prototype.add;he.prototype.multiply=he.prototype.R;he.prototype.modulo=he.prototype.gb;he.prototype.compare=he.prototype.X;he.prototype.toNumber=he.prototype.ea;he.prototype.toString=he.prototype.toString;he.prototype.getBits=he.prototype.D;he.fromNumber=fn;he.fromString=u_;var d2=function(){return new gu},f2=function(){return oc()},Ah=ac,p2=RE,m2=mi,Wy={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},g2=va,el=AE,y2=Re,v2=an,Yi=he;const Ky="@firebase/firestore";/**
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
 */class it{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}it.UNAUTHENTICATED=new it(null),it.GOOGLE_CREDENTIALS=new it("google-credentials-uid"),it.FIRST_PARTY=new it("first-party-uid"),it.MOCK_USER=new it("mock-user");/**
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
 */let ks="9.21.0";/**
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
 */const li=new cp("@firebase/firestore");function qy(){return li.logLevel}function F(t,...e){if(li.logLevel<=ae.DEBUG){const n=e.map(Hp);li.debug(`Firestore (${ks}): ${t}`,...n)}}function Wn(t,...e){if(li.logLevel<=ae.ERROR){const n=e.map(Hp);li.error(`Firestore (${ks}): ${t}`,...n)}}function ls(t,...e){if(li.logLevel<=ae.WARN){const n=e.map(Hp);li.warn(`Firestore (${ks}): ${t}`,...n)}}function Hp(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function H(t="Unexpected state"){const e=`FIRESTORE (${ks}) INTERNAL ASSERTION FAILED: `+t;throw Wn(e),new Error(e)}function ye(t,e){t||H()}function Q(t,e){return t}/**
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
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends Tn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Sr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class c_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class w2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(it.UNAUTHENTICATED))}shutdown(){}}class E2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class _2{constructor(e){this.t=e,this.currentUser=it.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Sr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Sr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Sr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ye(typeof r.accessToken=="string"),new c_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ye(e===null||typeof e=="string"),new it(e)}}class S2{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=it.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class T2{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new S2(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(it.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class I2{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class k2{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=s=>{s.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,F("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ye(typeof n.token=="string"),this.T=n.token,new I2(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function C2(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class h_{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=C2(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ue(t,e){return t<e?-1:t>e?1:0}function us(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class be{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new $(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return be.fromMillis(Date.now())}static fromDate(e){return be.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new be(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new q(e)}static min(){return new q(new be(0,0))}static max(){return new q(new be(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Go{constructor(e,n,r){n===void 0?n=0:n>e.length&&H(),r===void 0?r=e.length-n:r>e.length-n&&H(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Go.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Go?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class me extends Go{construct(e,n,r){return new me(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(T.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new me(n)}static emptyPath(){return new me([])}}const R2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class at extends Go{construct(e,n,r){return new at(e,n,r)}static isValidIdentifier(e){return R2.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),at.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new at(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new $(T.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new $(T.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new $(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new $(T.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new at(n)}static emptyPath(){return new at([])}}/**
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
 */class V{constructor(e){this.path=e}static fromPath(e){return new V(me.fromString(e))}static fromName(e){return new V(me.fromString(e).popFirst(5))}static empty(){return new V(me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return me.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new V(new me(e.slice()))}}function A2(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=q.fromTimestamp(r===1e9?new be(n+1,0):new be(n,r));return new Rr(i,V.empty(),e)}function N2(t){return new Rr(t.readTime,t.key,-1)}class Rr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Rr(q.min(),V.empty(),-1)}static max(){return new Rr(q.max(),V.empty(),-1)}}function D2(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=V.comparator(t.documentKey,e.documentKey),n!==0?n:ue(t.largestBatchId,e.largestBatchId))}/**
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
 */const P2="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class x2{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function _a(t){if(t.code!==T.FAILED_PRECONDITION||t.message!==P2)throw t;F("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&H(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new R((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof R?n:R.resolve(n)}catch(n){return R.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):R.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):R.reject(n)}static resolve(e){return new R((n,r)=>{n(e)})}static reject(e){return new R((n,r)=>{r(e)})}static waitFor(e){return new R((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=R.resolve(!1);for(const r of e)n=n.next(i=>i?R.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new R((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new R((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Sa(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Wp.ct=-1;function mc(t){return t==null}function wu(t){return t===0&&1/t==-1/0}function O2(t){return typeof t=="number"&&Number.isInteger(t)&&!wu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Gy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Cs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function d_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class ke{constructor(e,n){this.comparator=e,this.root=n||Qe.EMPTY}insert(e,n){return new ke(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Qe.BLACK,null,null))}remove(e){return new ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Qe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new tl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new tl(this.root,e,this.comparator,!1)}getReverseIterator(){return new tl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new tl(this.root,e,this.comparator,!0)}}class tl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Qe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Qe.RED,this.left=i??Qe.EMPTY,this.right=s??Qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Qe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Qe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw H();const e=this.left.check();if(e!==this.right.check())throw H();return e+(this.isRed()?0:1)}}Qe.EMPTY=null,Qe.RED=!0,Qe.BLACK=!1;Qe.EMPTY=new class{constructor(){this.size=0}get key(){throw H()}get value(){throw H()}get color(){throw H()}get left(){throw H()}get right(){throw H()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Qe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ct{constructor(e){this.comparator=e,this.data=new ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Qy(this.data.getIterator())}getIteratorFrom(e){return new Qy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ct)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ct(this.comparator);return n.data=e,n}}class Qy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class tn{constructor(e){this.fields=e,e.sort(at.comparator)}static empty(){return new tn([])}unionWith(e){let n=new ct(at.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new tn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return us(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ft{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new f_("Invalid base64 string: "+i):i}}(e);return new ft(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new ft(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ft.EMPTY_BYTE_STRING=new ft("");const L2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ar(t){if(ye(!!t),typeof t=="string"){let e=0;const n=L2.exec(t);if(ye(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Oe(t.seconds),nanos:Oe(t.nanos)}}function Oe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ui(t){return typeof t=="string"?ft.fromBase64String(t):ft.fromUint8Array(t)}/**
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
 */function Kp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function qp(t){const e=t.mapValue.fields.__previous_value__;return Kp(e)?qp(e):e}function Qo(t){const e=Ar(t.mapValue.fields.__local_write_time__.timestampValue);return new be(e.seconds,e.nanos)}/**
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
 */class M2{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Xo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Xo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Xo&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const nl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ci(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Kp(t)?4:$2(t)?9007199254740991:10:H()}function _n(t,e){if(t===e)return!0;const n=ci(t);if(n!==ci(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Qo(t).isEqual(Qo(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Ar(r.timestampValue),o=Ar(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return ui(r.bytesValue).isEqual(ui(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Oe(r.geoPointValue.latitude)===Oe(i.geoPointValue.latitude)&&Oe(r.geoPointValue.longitude)===Oe(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Oe(r.integerValue)===Oe(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Oe(r.doubleValue),o=Oe(i.doubleValue);return s===o?wu(s)===wu(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return us(t.arrayValue.values||[],e.arrayValue.values||[],_n);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Gy(s)!==Gy(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!_n(s[a],o[a])))return!1;return!0}(t,e);default:return H()}}function Yo(t,e){return(t.values||[]).find(n=>_n(n,e))!==void 0}function cs(t,e){if(t===e)return 0;const n=ci(t),r=ci(e);if(n!==r)return ue(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ue(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Oe(i.integerValue||i.doubleValue),a=Oe(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Xy(t.timestampValue,e.timestampValue);case 4:return Xy(Qo(t),Qo(e));case 5:return ue(t.stringValue,e.stringValue);case 6:return function(i,s){const o=ui(i),a=ui(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=ue(o[l],a[l]);if(u!==0)return u}return ue(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=ue(Oe(i.latitude),Oe(s.latitude));return o!==0?o:ue(Oe(i.longitude),Oe(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=cs(o[l],a[l]);if(u)return u}return ue(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===nl.mapValue&&s===nl.mapValue)return 0;if(i===nl.mapValue)return 1;if(s===nl.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const d=ue(a[c],u[c]);if(d!==0)return d;const f=cs(o[a[c]],l[u[c]]);if(f!==0)return f}return ue(a.length,u.length)}(t.mapValue,e.mapValue);default:throw H()}}function Xy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ue(t,e);const n=Ar(t),r=Ar(e),i=ue(n.seconds,r.seconds);return i!==0?i:ue(n.nanos,r.nanos)}function hs(t){return Yd(t)}function Yd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=Ar(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ui(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,V.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Yd(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Yd(r.fields[a])}`;return s+"}"}(t.mapValue):H();var e,n}function Yy(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Jd(t){return!!t&&"integerValue"in t}function Gp(t){return!!t&&"arrayValue"in t}function Jy(t){return!!t&&"nullValue"in t}function Zy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Il(t){return!!t&&"mapValue"in t}function mo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Cs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=mo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=mo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function $2(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Bt{constructor(e){this.value=e}static empty(){return new Bt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Il(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=mo(n)}setAll(e){let n=at.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=mo(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Il(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return _n(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Il(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Cs(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Bt(mo(this.value))}}function p_(t){const e=[];return Cs(t.fields,(n,r)=>{const i=new at([n]);if(Il(r)){const s=p_(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new tn(e)}/**
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
 */class ot{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ot(e,0,q.min(),q.min(),q.min(),Bt.empty(),0)}static newFoundDocument(e,n,r,i){return new ot(e,1,n,q.min(),r,i,0)}static newNoDocument(e,n){return new ot(e,2,n,q.min(),q.min(),Bt.empty(),0)}static newUnknownDocument(e,n){return new ot(e,3,n,q.min(),q.min(),Bt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Bt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Bt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ot&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ot(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Eu{constructor(e,n){this.position=e,this.inclusive=n}}function ev(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=V.comparator(V.fromName(o.referenceValue),n.key):r=cs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function tv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!_n(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class go{constructor(e,n="asc"){this.field=e,this.dir=n}}function U2(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class m_{}class Me extends m_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new b2(e,n,r):n==="array-contains"?new B2(e,r):n==="in"?new j2(e,r):n==="not-in"?new H2(e,r):n==="array-contains-any"?new W2(e,r):new Me(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new V2(e,r):new z2(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(cs(n,this.value)):n!==null&&ci(this.value)===ci(n)&&this.matchesComparison(cs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return H()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class ln extends m_{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new ln(e,n)}matches(e){return g_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function g_(t){return t.op==="and"}function y_(t){return F2(t)&&g_(t)}function F2(t){for(const e of t.filters)if(e instanceof ln)return!1;return!0}function Zd(t){if(t instanceof Me)return t.field.canonicalString()+t.op.toString()+hs(t.value);if(y_(t))return t.filters.map(e=>Zd(e)).join(",");{const e=t.filters.map(n=>Zd(n)).join(",");return`${t.op}(${e})`}}function v_(t,e){return t instanceof Me?function(n,r){return r instanceof Me&&n.op===r.op&&n.field.isEqual(r.field)&&_n(n.value,r.value)}(t,e):t instanceof ln?function(n,r){return r instanceof ln&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&v_(s,r.filters[o]),!0):!1}(t,e):void H()}function w_(t){return t instanceof Me?function(e){return`${e.field.canonicalString()} ${e.op} ${hs(e.value)}`}(t):t instanceof ln?function(e){return e.op.toString()+" {"+e.getFilters().map(w_).join(" ,")+"}"}(t):"Filter"}class b2 extends Me{constructor(e,n,r){super(e,n,r),this.key=V.fromName(r.referenceValue)}matches(e){const n=V.comparator(e.key,this.key);return this.matchesComparison(n)}}class V2 extends Me{constructor(e,n){super(e,"in",n),this.keys=E_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class z2 extends Me{constructor(e,n){super(e,"not-in",n),this.keys=E_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function E_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>V.fromName(r.referenceValue))}class B2 extends Me{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Gp(n)&&Yo(n.arrayValue,this.value)}}class j2 extends Me{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Yo(this.value.arrayValue,n)}}class H2 extends Me{constructor(e,n){super(e,"not-in",n)}matches(e){if(Yo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Yo(this.value.arrayValue,n)}}class W2 extends Me{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Gp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Yo(this.value.arrayValue,r))}}/**
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
 */class K2{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ft=null}}function nv(t,e=null,n=[],r=[],i=null,s=null,o=null){return new K2(t,e,n,r,i,s,o)}function Qp(t){const e=Q(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Zd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),mc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>hs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>hs(r)).join(",")),e.ft=n}return e.ft}function Xp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!U2(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!v_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!tv(t.startAt,e.startAt)&&tv(t.endAt,e.endAt)}function ef(t){return V.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Ta{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this._t=null,this.startAt,this.endAt}}function q2(t,e,n,r,i,s,o,a){return new Ta(t,e,n,r,i,s,o,a)}function __(t){return new Ta(t)}function rv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function S_(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Yp(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function T_(t){return t.collectionGroup!==null}function Ji(t){const e=Q(t);if(e.dt===null){e.dt=[];const n=Yp(e),r=S_(e);if(n!==null&&r===null)n.isKeyField()||e.dt.push(new go(n)),e.dt.push(new go(at.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.dt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new go(at.keyField(),s))}}}return e.dt}function Kn(t){const e=Q(t);if(!e._t)if(e.limitType==="F")e._t=nv(e.path,e.collectionGroup,Ji(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Ji(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new go(s.field,o))}const r=e.endAt?new Eu(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Eu(e.startAt.position,e.startAt.inclusive):null;e._t=nv(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function tf(t,e){e.getFirstInequalityField(),Yp(t);const n=t.filters.concat([e]);return new Ta(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function nf(t,e,n){return new Ta(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function gc(t,e){return Xp(Kn(t),Kn(e))&&t.limitType===e.limitType}function I_(t){return`${Qp(Kn(t))}|lt:${t.limitType}`}function rf(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>w_(r)).join(", ")}]`),mc(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>hs(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>hs(r)).join(",")),`Target(${n})`}(Kn(t))}; limitType=${t.limitType})`}function yc(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):V.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of Ji(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=ev(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Ji(n),r)||n.endAt&&!function(i,s,o){const a=ev(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Ji(n),r))}(t,e)}function G2(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function k_(t){return(e,n)=>{let r=!1;for(const i of Ji(t)){const s=Q2(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Q2(t,e,n){const r=t.field.isKeyField()?V.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?cs(a,l):H()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return H()}}/**
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
 */class Rs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Cs(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return d_(this.inner)}size(){return this.innerSize}}/**
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
 */const X2=new ke(V.comparator);function qn(){return X2}const C_=new ke(V.comparator);function eo(...t){let e=C_;for(const n of t)e=e.insert(n.key,n);return e}function R_(t){let e=C_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Kr(){return yo()}function A_(){return yo()}function yo(){return new Rs(t=>t.toString(),(t,e)=>t.isEqual(e))}const Y2=new ke(V.comparator),J2=new ct(V.comparator);function te(...t){let e=J2;for(const n of t)e=e.add(n);return e}const Z2=new ct(ue);function eP(){return Z2}/**
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
 */function N_(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:wu(e)?"-0":e}}function D_(t){return{integerValue:""+t}}function tP(t,e){return O2(e)?D_(e):N_(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(){this._=void 0}}function nP(t,e,n){return t instanceof _u?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Kp(i)&&(i=qp(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Jo?x_(t,e):t instanceof Zo?O_(t,e):function(r,i){const s=P_(r,i),o=iv(s)+iv(r.wt);return Jd(s)&&Jd(r.wt)?D_(o):N_(r.serializer,o)}(t,e)}function rP(t,e,n){return t instanceof Jo?x_(t,e):t instanceof Zo?O_(t,e):n}function P_(t,e){return t instanceof Su?Jd(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class _u extends vc{}class Jo extends vc{constructor(e){super(),this.elements=e}}function x_(t,e){const n=L_(e);for(const r of t.elements)n.some(i=>_n(i,r))||n.push(r);return{arrayValue:{values:n}}}class Zo extends vc{constructor(e){super(),this.elements=e}}function O_(t,e){let n=L_(e);for(const r of t.elements)n=n.filter(i=>!_n(i,r));return{arrayValue:{values:n}}}class Su extends vc{constructor(e,n){super(),this.serializer=e,this.wt=n}}function iv(t){return Oe(t.integerValue||t.doubleValue)}function L_(t){return Gp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function iP(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Jo&&r instanceof Jo||n instanceof Zo&&r instanceof Zo?us(n.elements,r.elements,_n):n instanceof Su&&r instanceof Su?_n(n.wt,r.wt):n instanceof _u&&r instanceof _u}(t.transform,e.transform)}class sP{constructor(e,n){this.version=e,this.transformResults=n}}class Fn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Fn}static exists(e){return new Fn(void 0,e)}static updateTime(e){return new Fn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function kl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class wc{}function M_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new U_(t.key,Fn.none()):new Ia(t.key,t.data,Fn.none());{const n=t.data,r=Bt.empty();let i=new ct(at.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new gi(t.key,r,new tn(i.toArray()),Fn.none())}}function oP(t,e,n){t instanceof Ia?function(r,i,s){const o=r.value.clone(),a=ov(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof gi?function(r,i,s){if(!kl(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=ov(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll($_(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function vo(t,e,n,r){return t instanceof Ia?function(i,s,o,a){if(!kl(i.precondition,s))return o;const l=i.value.clone(),u=av(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof gi?function(i,s,o,a){if(!kl(i.precondition,s))return o;const l=av(i.fieldTransforms,a,s),u=s.data;return u.setAll($_(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return kl(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function aP(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=P_(r.transform,i||null);s!=null&&(n===null&&(n=Bt.empty()),n.set(r.field,s))}return n||null}function sv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&us(n,r,(i,s)=>iP(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ia extends wc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class gi extends wc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function $_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function ov(t,e,n){const r=new Map;ye(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,rP(o,a,n[i]))}return r}function av(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,nP(s,o,e))}return r}class U_ extends wc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class lP extends wc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class uP{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&oP(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=vo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=vo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=A_();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=M_(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(q.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&us(this.mutations,e.mutations,(n,r)=>sv(n,r))&&us(this.baseMutations,e.baseMutations,(n,r)=>sv(n,r))}}class Jp{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ye(e.mutations.length===r.length);let i=Y2;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Jp(e,n,r,i)}}/**
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
 */class cP{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class hP{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Pe,ie;function dP(t){switch(t){default:return H();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function F_(t){if(t===void 0)return Wn("GRPC error has no .code"),T.UNKNOWN;switch(t){case Pe.OK:return T.OK;case Pe.CANCELLED:return T.CANCELLED;case Pe.UNKNOWN:return T.UNKNOWN;case Pe.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case Pe.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case Pe.INTERNAL:return T.INTERNAL;case Pe.UNAVAILABLE:return T.UNAVAILABLE;case Pe.UNAUTHENTICATED:return T.UNAUTHENTICATED;case Pe.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case Pe.NOT_FOUND:return T.NOT_FOUND;case Pe.ALREADY_EXISTS:return T.ALREADY_EXISTS;case Pe.PERMISSION_DENIED:return T.PERMISSION_DENIED;case Pe.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case Pe.ABORTED:return T.ABORTED;case Pe.OUT_OF_RANGE:return T.OUT_OF_RANGE;case Pe.UNIMPLEMENTED:return T.UNIMPLEMENTED;case Pe.DATA_LOSS:return T.DATA_LOSS;default:return H()}}(ie=Pe||(Pe={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return rl}static getOrCreateInstance(){return rl===null&&(rl=new Zp),rl}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let rl=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fP(){return new TextEncoder}/**
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
 */const pP=new Yi([4294967295,4294967295],0);function lv(t){const e=fP().encode(t),n=new v2;return n.update(e),new Uint8Array(n.digest())}function uv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Yi([n,r],0),new Yi([i,s],0)]}class em{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new to(`Invalid padding: ${n}`);if(r<0)throw new to(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new to(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new to(`Invalid padding when bitmap length is 0: ${n}`);this.yt=8*e.length-n,this.It=Yi.fromNumber(this.yt)}Tt(e,n,r){let i=e.add(n.multiply(Yi.fromNumber(r)));return i.compare(pP)===1&&(i=new Yi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.It).toNumber()}Et(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}At(e){if(this.yt===0)return!1;const n=lv(e),[r,i]=uv(n);for(let s=0;s<this.hashCount;s++){const o=this.Tt(r,i,s);if(!this.Et(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new em(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.yt===0)return;const n=lv(e),[r,i]=uv(n);for(let s=0;s<this.hashCount;s++){const o=this.Tt(r,i,s);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class to extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ec{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ka.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ec(q.min(),i,new ke(ue),qn(),te())}}class ka{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ka(r,n,te(),te(),te())}}/**
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
 */class Cl{constructor(e,n,r,i){this.vt=e,this.removedTargetIds=n,this.key=r,this.Pt=i}}class b_{constructor(e,n){this.targetId=e,this.bt=n}}class V_{constructor(e,n,r=ft.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class cv{constructor(){this.Vt=0,this.St=dv(),this.Dt=ft.EMPTY_BYTE_STRING,this.Ct=!1,this.xt=!0}get current(){return this.Ct}get resumeToken(){return this.Dt}get Nt(){return this.Vt!==0}get kt(){return this.xt}Mt(e){e.approximateByteSize()>0&&(this.xt=!0,this.Dt=e)}Ot(){let e=te(),n=te(),r=te();return this.St.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:H()}}),new ka(this.Dt,this.Ct,e,n,r)}$t(){this.xt=!1,this.St=dv()}Ft(e,n){this.xt=!0,this.St=this.St.insert(e,n)}Bt(e){this.xt=!0,this.St=this.St.remove(e)}Lt(){this.Vt+=1}qt(){this.Vt-=1}Ut(){this.xt=!0,this.Ct=!0}}class mP{constructor(e){this.Kt=e,this.Gt=new Map,this.Qt=qn(),this.jt=hv(),this.zt=new ke(ue)}Wt(e){for(const n of e.vt)e.Pt&&e.Pt.isFoundDocument()?this.Ht(n,e.Pt):this.Jt(n,e.key,e.Pt);for(const n of e.removedTargetIds)this.Jt(n,e.key,e.Pt)}Yt(e){this.forEachTarget(e,n=>{const r=this.Xt(n);switch(e.state){case 0:this.Zt(n)&&r.Mt(e.resumeToken);break;case 1:r.qt(),r.Nt||r.$t(),r.Mt(e.resumeToken);break;case 2:r.qt(),r.Nt||this.removeTarget(n);break;case 3:this.Zt(n)&&(r.Ut(),r.Mt(e.resumeToken));break;case 4:this.Zt(n)&&(this.te(n),r.Mt(e.resumeToken));break;default:H()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Gt.forEach((r,i)=>{this.Zt(i)&&n(i)})}ee(e){var n;const r=e.targetId,i=e.bt.count,s=this.ne(r);if(s){const o=s.target;if(ef(o))if(i===0){const a=new V(o.path);this.Jt(r,a,ot.newNoDocument(a,q.min()))}else ye(i===1);else{const a=this.se(r);if(a!==i){const l=this.ie(e,a);if(l!==0){this.te(r);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.zt=this.zt.insert(r,u)}(n=Zp.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(u,c,d){var f,g,y,v,_,h;const p={localCacheCount:c,existenceFilterCount:d.count},m=d.unchangedNames;return m&&(p.bloomFilter={applied:u===0,hashCount:(f=m==null?void 0:m.hashCount)!==null&&f!==void 0?f:0,bitmapLength:(v=(y=(g=m==null?void 0:m.bits)===null||g===void 0?void 0:g.bitmap)===null||y===void 0?void 0:y.length)!==null&&v!==void 0?v:0,padding:(h=(_=m==null?void 0:m.bits)===null||_===void 0?void 0:_.padding)!==null&&h!==void 0?h:0}),p}(l,a,e.bt))}}}}ie(e,n){const{unchangedNames:r,count:i}=e.bt;if(!r||!r.bits)return 1;const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let l,u;try{l=ui(s).toUint8Array()}catch(c){if(c instanceof f_)return ls("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw c}try{u=new em(l,o,a)}catch(c){return ls(c instanceof to?"BloomFilter error: ":"Applying bloom filter failed: ",c),1}return u.yt===0?1:i!==n-this.re(e.targetId,u)?2:0}re(e,n){const r=this.Kt.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Kt.oe(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;n.At(a)||(this.Jt(e,s,null),i++)}),i}ue(e){const n=new Map;this.Gt.forEach((s,o)=>{const a=this.ne(o);if(a){if(s.current&&ef(a.target)){const l=new V(a.target.path);this.Qt.get(l)!==null||this.ce(o,l)||this.Jt(o,l,ot.newNoDocument(l,e))}s.kt&&(n.set(o,s.Ot()),s.$t())}});let r=te();this.jt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.ne(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.Qt.forEach((s,o)=>o.setReadTime(e));const i=new Ec(e,n,this.zt,this.Qt,r);return this.Qt=qn(),this.jt=hv(),this.zt=new ke(ue),i}Ht(e,n){if(!this.Zt(e))return;const r=this.ce(e,n.key)?2:0;this.Xt(e).Ft(n.key,r),this.Qt=this.Qt.insert(n.key,n),this.jt=this.jt.insert(n.key,this.ae(n.key).add(e))}Jt(e,n,r){if(!this.Zt(e))return;const i=this.Xt(e);this.ce(e,n)?i.Ft(n,1):i.Bt(n),this.jt=this.jt.insert(n,this.ae(n).delete(e)),r&&(this.Qt=this.Qt.insert(n,r))}removeTarget(e){this.Gt.delete(e)}se(e){const n=this.Xt(e).Ot();return this.Kt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Lt(e){this.Xt(e).Lt()}Xt(e){let n=this.Gt.get(e);return n||(n=new cv,this.Gt.set(e,n)),n}ae(e){let n=this.jt.get(e);return n||(n=new ct(ue),this.jt=this.jt.insert(e,n)),n}Zt(e){const n=this.ne(e)!==null;return n||F("WatchChangeAggregator","Detected inactive target",e),n}ne(e){const n=this.Gt.get(e);return n&&n.Nt?null:this.Kt.he(e)}te(e){this.Gt.set(e,new cv),this.Kt.getRemoteKeysForTarget(e).forEach(n=>{this.Jt(e,n,null)})}ce(e,n){return this.Kt.getRemoteKeysForTarget(e).has(n)}}function hv(){return new ke(V.comparator)}function dv(){return new ke(V.comparator)}const gP=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),yP=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),vP=(()=>({and:"AND",or:"OR"}))();class wP{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function sf(t,e){return t.useProto3Json||mc(e)?e:{value:e}}function Tu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function z_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function EP(t,e){return Tu(t,e.toTimestamp())}function En(t){return ye(!!t),q.fromTimestamp(function(e){const n=Ar(e);return new be(n.seconds,n.nanos)}(t))}function tm(t,e){return function(n){return new me(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function B_(t){const e=me.fromString(t);return ye(K_(e)),e}function of(t,e){return tm(t.databaseId,e.path)}function Nh(t,e){const n=B_(e);if(n.get(1)!==t.databaseId.projectId)throw new $(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new V(j_(n))}function af(t,e){return tm(t.databaseId,e)}function _P(t){const e=B_(t);return e.length===4?me.emptyPath():j_(e)}function lf(t){return new me(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function j_(t){return ye(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function fv(t,e,n){return{name:of(t,e),fields:n.value.mapValue.fields}}function SP(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:H()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.useProto3Json?(ye(u===void 0||typeof u=="string"),ft.fromBase64String(u||"")):(ye(u===void 0||u instanceof Uint8Array),ft.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?T.UNKNOWN:F_(l.code);return new $(u,l.message||"")}(o);n=new V_(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Nh(t,r.document.name),s=En(r.document.updateTime),o=r.document.createTime?En(r.document.createTime):q.min(),a=new Bt({mapValue:{fields:r.document.fields}}),l=ot.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Cl(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Nh(t,r.document),s=r.readTime?En(r.readTime):q.min(),o=ot.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Cl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Nh(t,r.document),s=r.removedTargetIds||[];n=new Cl([],s,i,null)}else{if(!("filter"in e))return H();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new hP(i,s),a=r.targetId;n=new b_(a,o)}}return n}function TP(t,e){let n;if(e instanceof Ia)n={update:fv(t,e.key,e.value)};else if(e instanceof U_)n={delete:of(t,e.key)};else if(e instanceof gi)n={update:fv(t,e.key,e.data),updateMask:xP(e.fieldMask)};else{if(!(e instanceof lP))return H();n={verify:of(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof _u)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Jo)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Zo)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Su)return{fieldPath:s.field.canonicalString(),increment:o.wt};throw H()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:EP(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:H()}(t,e.precondition)),n}function IP(t,e){return t&&t.length>0?(ye(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?En(r.updateTime):En(i);return s.isEqual(q.min())&&(s=En(i)),new sP(s,r.transformResults||[])}(n,e))):[]}function kP(t,e){return{documents:[af(t,e.path)]}}function CP(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=af(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=af(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return W_(ln.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:Ti(c.field),direction:NP(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=sf(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function RP(t){let e=_P(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ye(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const d=H_(c);return d instanceof ln&&y_(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(d){return new go(Ii(d.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(d.direction))}(c)));let a=null;n.limit&&(a=function(c){let d;return d=typeof c=="object"?c.value:c,mc(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(c){const d=!!c.before,f=c.values||[];return new Eu(f,d)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const d=!c.before,f=c.values||[];return new Eu(f,d)}(n.endAt)),q2(e,i,o,s,a,"F",l,u)}function AP(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return H()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function H_(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Ii(e.unaryFilter.field);return Me.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Ii(e.unaryFilter.field);return Me.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ii(e.unaryFilter.field);return Me.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Ii(e.unaryFilter.field);return Me.create(s,"!=",{nullValue:"NULL_VALUE"});default:return H()}}(t):t.fieldFilter!==void 0?function(e){return Me.create(Ii(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return H()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return ln.create(e.compositeFilter.filters.map(n=>H_(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return H()}}(e.compositeFilter.op))}(t):H()}function NP(t){return gP[t]}function DP(t){return yP[t]}function PP(t){return vP[t]}function Ti(t){return{fieldPath:t.canonicalString()}}function Ii(t){return at.fromServerFormat(t.fieldPath)}function W_(t){return t instanceof Me?function(e){if(e.op==="=="){if(Zy(e.value))return{unaryFilter:{field:Ti(e.field),op:"IS_NAN"}};if(Jy(e.value))return{unaryFilter:{field:Ti(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Zy(e.value))return{unaryFilter:{field:Ti(e.field),op:"IS_NOT_NAN"}};if(Jy(e.value))return{unaryFilter:{field:Ti(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ti(e.field),op:DP(e.op),value:e.value}}}(t):t instanceof ln?function(e){const n=e.getFilters().map(r=>W_(r));return n.length===1?n[0]:{compositeFilter:{op:PP(e.op),filters:n}}}(t):H()}function xP(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function K_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class cr{constructor(e,n,r,i,s=q.min(),o=q.min(),a=ft.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new cr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new cr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new cr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new cr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class OP{constructor(e){this.le=e}}function LP(t){const e=RP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?nf(e,e.limit,"L"):e}/**
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
 */class MP{constructor(){this.sn=new $P}addToCollectionParentIndex(e,n){return this.sn.add(n),R.resolve()}getCollectionParents(e,n){return R.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return R.resolve()}deleteFieldIndex(e,n){return R.resolve()}getDocumentsMatchingTarget(e,n){return R.resolve(null)}getIndexType(e,n){return R.resolve(0)}getFieldIndexes(e,n){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,n){return R.resolve(Rr.min())}getMinOffsetFromCollectionGroup(e,n){return R.resolve(Rr.min())}updateCollectionGroup(e,n,r){return R.resolve()}updateIndexEntries(e,n){return R.resolve()}}class $P{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ct(me.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ct(me.comparator)).toArray()}}/**
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
 */class ds{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static Nn(){return new ds(0)}static kn(){return new ds(-1)}}/**
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
 */class UP{constructor(){this.changes=new Rs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ot.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?R.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class FP{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class bP{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&vo(r.mutation,i,tn.empty(),be.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=te()){const i=Kr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=eo();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Kr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,te()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=qn();const o=yo(),a=yo();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof gi)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),vo(c.mutation,u,c.mutation.getFieldMask(),be.now())):o.set(u.key,tn.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var d;return a.set(u,new FP(c,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const r=yo();let i=new ke((o,a)=>o-a),s=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||tn.empty();c=a.applyToLocalView(u,c),r.set(l,c);const d=(i.get(a.batchId)||te()).add(l);i=i.insert(a.batchId,d)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,d=A_();c.forEach(f=>{if(!s.has(f)){const g=M_(n.get(f),r.get(f));g!==null&&d.set(f,g),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return R.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return V.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):T_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):R.resolve(Kr());let a=-1,l=s;return o.next(u=>R.forEach(u,(c,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),s.get(c)?R.resolve():this.remoteDocumentCache.getEntry(e,c).next(f=>{l=l.insert(c,f)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,te())).next(c=>({batchId:a,changes:R_(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new V(n)).next(r=>{let i=eo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=eo();return this.indexManager.getCollectionParents(e,i).next(o=>R.forEach(o,a=>{const l=function(u,c){return new Ta(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,d)=>{s=s.insert(c,d)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,ot.newInvalidDocument(u)))});let o=eo();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&vo(u.mutation,l,tn.empty(),be.now()),yc(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class VP{constructor(e){this.serializer=e,this.us=new Map,this.cs=new Map}getBundleMetadata(e,n){return R.resolve(this.us.get(n))}saveBundleMetadata(e,n){var r;return this.us.set(n.id,{id:(r=n).id,version:r.version,createTime:En(r.createTime)}),R.resolve()}getNamedQuery(e,n){return R.resolve(this.cs.get(n))}saveNamedQuery(e,n){return this.cs.set(n.name,function(r){return{name:r.name,query:LP(r.bundledQuery),readTime:En(r.readTime)}}(n)),R.resolve()}}/**
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
 */class zP{constructor(){this.overlays=new ke(V.comparator),this.hs=new Map}getOverlay(e,n){return R.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Kr();return R.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.de(e,n,s)}),R.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hs.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hs.delete(r)),R.resolve()}getOverlaysForCollection(e,n,r){const i=Kr(),s=n.length+1,o=new V(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return R.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ke((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Kr(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Kr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return R.resolve(a)}de(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hs.get(i.largestBatchId).delete(r.key);this.hs.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new cP(n,r));let s=this.hs.get(n);s===void 0&&(s=te(),this.hs.set(n,s)),this.hs.set(n,s.add(r.key))}}/**
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
 */class nm{constructor(){this.ls=new ct(je.fs),this.ds=new ct(je._s)}isEmpty(){return this.ls.isEmpty()}addReference(e,n){const r=new je(e,n);this.ls=this.ls.add(r),this.ds=this.ds.add(r)}ws(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.gs(new je(e,n))}ys(e,n){e.forEach(r=>this.removeReference(r,n))}ps(e){const n=new V(new me([])),r=new je(n,e),i=new je(n,e+1),s=[];return this.ds.forEachInRange([r,i],o=>{this.gs(o),s.push(o.key)}),s}Is(){this.ls.forEach(e=>this.gs(e))}gs(e){this.ls=this.ls.delete(e),this.ds=this.ds.delete(e)}Ts(e){const n=new V(new me([])),r=new je(n,e),i=new je(n,e+1);let s=te();return this.ds.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new je(e,0),r=this.ls.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class je{constructor(e,n){this.key=e,this.Es=n}static fs(e,n){return V.comparator(e.key,n.key)||ue(e.Es,n.Es)}static _s(e,n){return ue(e.Es,n.Es)||V.comparator(e.key,n.key)}}/**
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
 */class BP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.As=1,this.Rs=new ct(je.fs)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.As;this.As++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new uP(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new je(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return R.resolve(o)}lookupMutationBatch(e,n){return R.resolve(this.vs(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Ps(r),s=i<0?0:i;return R.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.As-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new je(n,0),i=new je(n,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([r,i],o=>{const a=this.vs(o.Es);s.push(a)}),R.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ct(ue);return n.forEach(i=>{const s=new je(i,0),o=new je(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{r=r.add(a.Es)})}),R.resolve(this.bs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;V.isDocumentKey(s)||(s=s.child(""));const o=new je(new V(s),0);let a=new ct(ue);return this.Rs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.Es)),!0)},o),R.resolve(this.bs(a))}bs(e){const n=[];return e.forEach(r=>{const i=this.vs(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ye(this.Vs(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return R.forEach(n.mutations,i=>{const s=new je(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=r})}Dn(e){}containsKey(e,n){const r=new je(n,0),i=this.Rs.firstAfterOrEqual(r);return R.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}Vs(e,n){return this.Ps(e)}Ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}vs(e){const n=this.Ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class jP{constructor(e){this.Ss=e,this.docs=new ke(V.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ss(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return R.resolve(r?r.document.mutableCopy():ot.newInvalidDocument(n))}getEntries(e,n){let r=qn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ot.newInvalidDocument(i))}),R.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=qn();const o=n.path,a=new V(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||D2(N2(c),r)<=0||(i.has(c.key)||yc(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return R.resolve(s)}getAllFromCollectionGroup(e,n,r,i){H()}Ds(e,n){return R.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new HP(this)}getSize(e){return R.resolve(this.size)}}class HP extends UP{constructor(e){super(),this.rs=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.rs.addEntry(e,i)):this.rs.removeEntry(r)}),R.waitFor(n)}getFromCache(e,n){return this.rs.getEntry(e,n)}getAllFromCache(e,n){return this.rs.getEntries(e,n)}}/**
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
 */class WP{constructor(e){this.persistence=e,this.Cs=new Rs(n=>Qp(n),Xp),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.xs=0,this.Ns=new nm,this.targetCount=0,this.ks=ds.Nn()}forEachTarget(e,n){return this.Cs.forEach((r,i)=>n(i)),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.xs)}allocateTargetId(e){return this.highestTargetId=this.ks.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.xs&&(this.xs=n),R.resolve()}$n(e){this.Cs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ks=new ds(n),this.highestTargetId=n),e.sequenceNumber>this.xs&&(this.xs=e.sequenceNumber)}addTargetData(e,n){return this.$n(n),this.targetCount+=1,R.resolve()}updateTargetData(e,n){return this.$n(n),R.resolve()}removeTargetData(e,n){return this.Cs.delete(n.target),this.Ns.ps(n.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Cs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Cs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),R.waitFor(s).next(()=>i)}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,n){const r=this.Cs.get(n)||null;return R.resolve(r)}addMatchingKeys(e,n,r){return this.Ns.ws(n,r),R.resolve()}removeMatchingKeys(e,n,r){this.Ns.ys(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),R.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ns.ps(n),R.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ns.Ts(n);return R.resolve(r)}containsKey(e,n){return R.resolve(this.Ns.containsKey(n))}}/**
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
 */class KP{constructor(e,n){this.Ms={},this.overlays={},this.Os=new Wp(0),this.$s=!1,this.$s=!0,this.referenceDelegate=e(this),this.Fs=new WP(this),this.indexManager=new MP,this.remoteDocumentCache=function(r){return new jP(r)}(r=>this.referenceDelegate.Bs(r)),this.serializer=new OP(n),this.Ls=new VP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.$s=!1,Promise.resolve()}get started(){return this.$s}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new zP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Ms[e.toKey()];return r||(r=new BP(n,this.referenceDelegate),this.Ms[e.toKey()]=r),r}getTargetCache(){return this.Fs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ls}runTransaction(e,n,r){F("MemoryPersistence","Starting transaction:",e);const i=new qP(this.Os.next());return this.referenceDelegate.qs(),r(i).next(s=>this.referenceDelegate.Us(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ks(e,n){return R.or(Object.values(this.Ms).map(r=>()=>r.containsKey(e,n)))}}class qP extends x2{constructor(e){super(),this.currentSequenceNumber=e}}class rm{constructor(e){this.persistence=e,this.Gs=new nm,this.Qs=null}static js(e){return new rm(e)}get zs(){if(this.Qs)return this.Qs;throw H()}addReference(e,n,r){return this.Gs.addReference(r,n),this.zs.delete(r.toString()),R.resolve()}removeReference(e,n,r){return this.Gs.removeReference(r,n),this.zs.add(r.toString()),R.resolve()}markPotentiallyOrphaned(e,n){return this.zs.add(n.toString()),R.resolve()}removeTarget(e,n){this.Gs.ps(n.targetId).forEach(i=>this.zs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.zs.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}qs(){this.Qs=new Set}Us(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.zs,r=>{const i=V.fromPath(r);return this.Ws(e,i).next(s=>{s||n.removeEntry(i,q.min())})}).next(()=>(this.Qs=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ws(e,n).next(r=>{r?this.zs.delete(n.toString()):this.zs.add(n.toString())})}Bs(e){return 0}Ws(e,n){return R.or([()=>R.resolve(this.Gs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ks(e,n)])}}/**
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
 */class im{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Fi=i}static Bi(e,n){let r=te(),i=te();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new im(e,n.fromCache,r,i)}}/**
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
 */class GP{constructor(){this.Li=!1}initialize(e,n){this.qi=e,this.indexManager=n,this.Li=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ui(e,n).next(s=>s||this.Ki(e,n,i,r)).next(s=>s||this.Gi(e,n))}Ui(e,n){if(rv(n))return R.resolve(null);let r=Kn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=nf(n,null,"F"),r=Kn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=te(...s);return this.qi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Qi(n,a);return this.ji(n,u,o,l.readTime)?this.Ui(e,nf(n,null,"F")):this.zi(e,u,n,l)}))})))}Ki(e,n,r,i){return rv(n)||i.isEqual(q.min())?this.Gi(e,n):this.qi.getDocuments(e,r).next(s=>{const o=this.Qi(n,s);return this.ji(n,o,r,i)?this.Gi(e,n):(qy()<=ae.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),rf(n)),this.zi(e,o,n,A2(i,-1)))})}Qi(e,n){let r=new ct(k_(e));return n.forEach((i,s)=>{yc(e,s)&&(r=r.add(s))}),r}ji(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Gi(e,n){return qy()<=ae.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",rf(n)),this.qi.getDocumentsMatchingQuery(e,n,Rr.min())}zi(e,n,r,i){return this.qi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class QP{constructor(e,n,r,i){this.persistence=e,this.Wi=n,this.serializer=i,this.Hi=new ke(ue),this.Ji=new Rs(s=>Qp(s),Xp),this.Yi=new Map,this.Xi=e.getRemoteDocumentCache(),this.Fs=e.getTargetCache(),this.Ls=e.getBundleCache(),this.Zi(r)}Zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new bP(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Wi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Hi))}}function XP(t,e,n,r){return new QP(t,e,n,r)}async function q_(t,e){const n=Q(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Zi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=te();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({tr:u,removedBatchIds:o,addedBatchIds:a}))})})}function YP(t,e){const n=Q(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Xi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,d=c.keys();let f=R.resolve();return d.forEach(g=>{f=f.next(()=>u.getEntry(a,g)).next(y=>{const v=l.docVersions.get(g);ye(v!==null),y.version.compareTo(v)<0&&(c.applyToRemoteDocument(y,l),y.isValidDocument()&&(y.setReadTime(l.commitVersion),u.addEntry(y)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=te();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function G_(t){const e=Q(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Fs.getLastRemoteSnapshotVersion(n))}function JP(t,e){const n=Q(t),r=e.snapshotVersion;let i=n.Hi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Hi;const a=[];e.targetChanges.forEach((c,d)=>{const f=i.get(d);if(!f)return;a.push(n.Fs.removeMatchingKeys(s,c.removedDocuments,d).next(()=>n.Fs.addMatchingKeys(s,c.addedDocuments,d)));let g=f.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(d)!==null?g=g.withResumeToken(ft.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):c.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(c.resumeToken,r)),i=i.insert(d,g),function(y,v,_){return y.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(f,g,c)&&a.push(n.Fs.updateTargetData(s,g))});let l=qn(),u=te();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(ZP(s,o,e.documentUpdates).next(c=>{l=c.er,u=c.nr})),!r.isEqual(q.min())){const c=n.Fs.getLastRemoteSnapshotVersion(s).next(d=>n.Fs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return R.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Hi=i,s))}function ZP(t,e,n){let r=te(),i=te();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=qn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(q.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):F("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{er:o,nr:i}})}function ex(t,e){const n=Q(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function tx(t,e){const n=Q(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Fs.getTargetData(r,e).next(s=>s?(i=s,R.resolve(i)):n.Fs.allocateTargetId(r).next(o=>(i=new cr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Fs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Hi.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Hi=n.Hi.insert(r.targetId,r),n.Ji.set(e,r.targetId)),r})}async function uf(t,e,n){const r=Q(t),i=r.Hi.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Sa(o))throw o;F("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Hi=r.Hi.remove(e),r.Ji.delete(i.target)}function pv(t,e,n){const r=Q(t);let i=q.min(),s=te();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=Q(a),d=c.Ji.get(u);return d!==void 0?R.resolve(c.Hi.get(d)):c.Fs.getTargetData(l,u)}(r,o,Kn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Fs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Wi.getDocumentsMatchingQuery(o,e,n?i:q.min(),n?s:te())).next(a=>(nx(r,G2(e),a),{documents:a,sr:s})))}function nx(t,e,n){let r=t.Yi.get(e)||q.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Yi.set(e,r)}class mv{constructor(){this.activeTargetIds=eP()}hr(e){this.activeTargetIds=this.activeTargetIds.add(e)}lr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ar(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class rx{constructor(){this.Wr=new mv,this.Hr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Wr.hr(e),this.Hr[e]||"not-current"}updateQueryState(e,n,r){this.Hr[e]=n}removeLocalQueryTarget(e){this.Wr.lr(e)}isLocalQueryTarget(e){return this.Wr.activeTargetIds.has(e)}clearQueryState(e){delete this.Hr[e]}getAllActiveQueryTargets(){return this.Wr.activeTargetIds}isActiveQueryTarget(e){return this.Wr.activeTargetIds.has(e)}start(){return this.Wr=new mv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class ix{Jr(e){}shutdown(){}}/**
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
 */class gv{constructor(){this.Yr=()=>this.Xr(),this.Zr=()=>this.eo(),this.no=[],this.so()}Jr(e){this.no.push(e)}shutdown(){window.removeEventListener("online",this.Yr),window.removeEventListener("offline",this.Zr)}so(){window.addEventListener("online",this.Yr),window.addEventListener("offline",this.Zr)}Xr(){F("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.no)e(0)}eo(){F("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.no)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let il=null;function Dh(){return il===null?il=268435456+Math.round(2147483648*Math.random()):il++,"0x"+il.toString(16)}/**
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
 */const sx={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class ox{constructor(e){this.io=e.io,this.ro=e.ro}oo(e){this.uo=e}co(e){this.ao=e}onMessage(e){this.ho=e}close(){this.ro()}send(e){this.io(e)}lo(){this.uo()}fo(e){this.ao(e)}_o(e){this.ho(e)}}/**
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
 */const rt="WebChannelConnection";class ax extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.wo=n+"://"+e.host,this.mo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get yo(){return!1}po(e,n,r,i,s){const o=Dh(),a=this.Io(e,n);F("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this.To(l,i,s),this.Eo(e,a,l,r).then(u=>(F("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw ls("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}Ao(e,n,r,i,s,o){return this.po(e,n,r,i,s)}To(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+ks,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Io(e,n){const r=sx[e];return`${this.wo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Eo(e,n,r,i){const s=Dh();return new Promise((o,a)=>{const l=new y2;l.setWithCredentials(!0),l.listenOnce(p2.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Ah.NO_ERROR:const c=l.getResponseJson();F(rt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case Ah.TIMEOUT:F(rt,`RPC '${e}' ${s} timed out`),a(new $(T.DEADLINE_EXCEEDED,"Request time out"));break;case Ah.HTTP_ERROR:const d=l.getStatus();if(F(rt,`RPC '${e}' ${s} failed with status:`,d,"response text:",l.getResponseText()),d>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const g=f==null?void 0:f.error;if(g&&g.status&&g.message){const y=function(v){const _=v.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(_)>=0?_:T.UNKNOWN}(g.status);a(new $(y,g.message))}else a(new $(T.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new $(T.UNAVAILABLE,"Connection failed."));break;default:H()}}finally{F(rt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);F(rt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Ro(e,n,r){const i=Dh(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=d2(),a=f2(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(l.xmlHttpFactory=new g2({})),this.To(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=s.join("");F(rt,`Creating RPC '${e}' stream ${i}: ${u}`,l);const c=o.createWebChannel(u,l);let d=!1,f=!1;const g=new ox({io:v=>{f?F(rt,`Not sending because RPC '${e}' stream ${i} is closed:`,v):(d||(F(rt,`Opening RPC '${e}' stream ${i} transport.`),c.open(),d=!0),F(rt,`RPC '${e}' stream ${i} sending:`,v),c.send(v))},ro:()=>c.close()}),y=(v,_,h)=>{v.listen(_,p=>{try{h(p)}catch(m){setTimeout(()=>{throw m},0)}})};return y(c,el.EventType.OPEN,()=>{f||F(rt,`RPC '${e}' stream ${i} transport opened.`)}),y(c,el.EventType.CLOSE,()=>{f||(f=!0,F(rt,`RPC '${e}' stream ${i} transport closed`),g.fo())}),y(c,el.EventType.ERROR,v=>{f||(f=!0,ls(rt,`RPC '${e}' stream ${i} transport errored:`,v),g.fo(new $(T.UNAVAILABLE,"The operation could not be completed")))}),y(c,el.EventType.MESSAGE,v=>{var _;if(!f){const h=v.data[0];ye(!!h);const p=h,m=p.error||((_=p[0])===null||_===void 0?void 0:_.error);if(m){F(rt,`RPC '${e}' stream ${i} received error:`,m);const w=m.status;let I=function(N){const x=Pe[N];if(x!==void 0)return F_(x)}(w),A=m.message;I===void 0&&(I=T.INTERNAL,A="Unknown error status: "+w+" with message "+m.message),f=!0,g.fo(new $(I,A)),c.close()}else F(rt,`RPC '${e}' stream ${i} received:`,h),g._o(h)}}),y(a,m2.STAT_EVENT,v=>{v.stat===Wy.PROXY?F(rt,`RPC '${e}' stream ${i} detected buffering proxy`):v.stat===Wy.NOPROXY&&F(rt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{g.lo()},0),g}}function Ph(){return typeof document<"u"?document:null}/**
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
 */function _c(t){return new wP(t,!0)}/**
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
 */class Q_{constructor(e,n,r=1e3,i=1.5,s=6e4){this.si=e,this.timerId=n,this.vo=r,this.Po=i,this.bo=s,this.Vo=0,this.So=null,this.Do=Date.now(),this.reset()}reset(){this.Vo=0}Co(){this.Vo=this.bo}xo(e){this.cancel();const n=Math.floor(this.Vo+this.No()),r=Math.max(0,Date.now()-this.Do),i=Math.max(0,n-r);i>0&&F("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Vo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.So=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Do=Date.now(),e())),this.Vo*=this.Po,this.Vo<this.vo&&(this.Vo=this.vo),this.Vo>this.bo&&(this.Vo=this.bo)}ko(){this.So!==null&&(this.So.skipDelay(),this.So=null)}cancel(){this.So!==null&&(this.So.cancel(),this.So=null)}No(){return(Math.random()-.5)*this.Vo}}/**
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
 */class X_{constructor(e,n,r,i,s,o,a,l){this.si=e,this.Mo=r,this.Oo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.$o=0,this.Fo=null,this.Bo=null,this.stream=null,this.Lo=new Q_(e,n)}qo(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Ko()}async stop(){this.qo()&&await this.close(0)}Go(){this.state=0,this.Lo.reset()}Qo(){this.Uo()&&this.Fo===null&&(this.Fo=this.si.enqueueAfterDelay(this.Mo,6e4,()=>this.jo()))}zo(e){this.Wo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Wo(){this.Fo&&(this.Fo.cancel(),this.Fo=null)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}async close(e,n){this.Wo(),this.Ho(),this.Lo.cancel(),this.$o++,e!==4?this.Lo.reset():n&&n.code===T.RESOURCE_EXHAUSTED?(Wn(n.toString()),Wn("Using maximum backoff delay to prevent overloading the backend."),this.Lo.Co()):n&&n.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Jo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.co(n)}Jo(){}auth(){this.state=1;const e=this.Yo(this.$o),n=this.$o;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.$o===n&&this.Xo(r,i)},r=>{e(()=>{const i=new $(T.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Zo(i)})})}Xo(e,n){const r=this.Yo(this.$o);this.stream=this.tu(e,n),this.stream.oo(()=>{r(()=>(this.state=2,this.Bo=this.si.enqueueAfterDelay(this.Oo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener.oo()))}),this.stream.co(i=>{r(()=>this.Zo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Ko(){this.state=5,this.Lo.xo(async()=>{this.state=0,this.start()})}Zo(e){return F("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Yo(e){return n=>{this.si.enqueueAndForget(()=>this.$o===e?n():(F("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class lx extends X_{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}tu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.Lo.reset();const n=SP(this.serializer,e),r=function(i){if(!("targetChange"in i))return q.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?q.min():s.readTime?En(s.readTime):q.min()}(e);return this.listener.eu(n,r)}nu(e){const n={};n.database=lf(this.serializer),n.addTarget=function(i,s){let o;const a=s.target;if(o=ef(a)?{documents:kP(i,a)}:{query:CP(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){o.resumeToken=z_(i,s.resumeToken);const l=sf(i,s.expectedCount);l!==null&&(o.expectedCount=l)}else if(s.snapshotVersion.compareTo(q.min())>0){o.readTime=Tu(i,s.snapshotVersion.toTimestamp());const l=sf(i,s.expectedCount);l!==null&&(o.expectedCount=l)}return o}(this.serializer,e);const r=AP(this.serializer,e);r&&(n.labels=r),this.zo(n)}su(e){const n={};n.database=lf(this.serializer),n.removeTarget=e,this.zo(n)}}class ux extends X_{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.iu=!1}get ru(){return this.iu}start(){this.iu=!1,this.lastStreamToken=void 0,super.start()}Jo(){this.iu&&this.ou([])}tu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(ye(!!e.streamToken),this.lastStreamToken=e.streamToken,this.iu){this.Lo.reset();const n=IP(e.writeResults,e.commitTime),r=En(e.commitTime);return this.listener.uu(r,n)}return ye(!e.writeResults||e.writeResults.length===0),this.iu=!0,this.listener.cu()}au(){const e={};e.database=lf(this.serializer),this.zo(e)}ou(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>TP(this.serializer,r))};this.zo(n)}}/**
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
 */class cx extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.hu=!1}lu(){if(this.hu)throw new $(T.FAILED_PRECONDITION,"The client has already been terminated.")}po(e,n,r){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.po(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new $(T.UNKNOWN,i.toString())})}Ao(e,n,r,i){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Ao(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new $(T.UNKNOWN,s.toString())})}terminate(){this.hu=!0}}class hx{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.du=0,this._u=null,this.wu=!0}mu(){this.du===0&&(this.gu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.yu("Backend didn't respond within 10 seconds."),this.gu("Offline"),Promise.resolve())))}pu(e){this.state==="Online"?this.gu("Unknown"):(this.du++,this.du>=1&&(this.Iu(),this.yu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.gu("Offline")))}set(e){this.Iu(),this.du=0,e==="Online"&&(this.wu=!1),this.gu(e)}gu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}yu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.wu?(Wn(n),this.wu=!1):F("OnlineStateTracker",n)}Iu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
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
 */class dx{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Tu=[],this.Eu=new Map,this.Au=new Set,this.Ru=[],this.vu=s,this.vu.Jr(o=>{r.enqueueAndForget(async()=>{yi(this)&&(F("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=Q(a);l.Au.add(4),await Ca(l),l.Pu.set("Unknown"),l.Au.delete(4),await Sc(l)}(this))})}),this.Pu=new hx(r,i)}}async function Sc(t){if(yi(t))for(const e of t.Ru)await e(!0)}async function Ca(t){for(const e of t.Ru)await e(!1)}function Y_(t,e){const n=Q(t);n.Eu.has(e.targetId)||(n.Eu.set(e.targetId,e),am(n)?om(n):As(n).Uo()&&sm(n,e))}function J_(t,e){const n=Q(t),r=As(n);n.Eu.delete(e),r.Uo()&&Z_(n,e),n.Eu.size===0&&(r.Uo()?r.Qo():yi(n)&&n.Pu.set("Unknown"))}function sm(t,e){if(t.bu.Lt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(q.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}As(t).nu(e)}function Z_(t,e){t.bu.Lt(e),As(t).su(e)}function om(t){t.bu=new mP({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),he:e=>t.Eu.get(e)||null,oe:()=>t.datastore.serializer.databaseId}),As(t).start(),t.Pu.mu()}function am(t){return yi(t)&&!As(t).qo()&&t.Eu.size>0}function yi(t){return Q(t).Au.size===0}function eS(t){t.bu=void 0}async function fx(t){t.Eu.forEach((e,n)=>{sm(t,e)})}async function px(t,e){eS(t),am(t)?(t.Pu.pu(e),om(t)):t.Pu.set("Unknown")}async function mx(t,e,n){if(t.Pu.set("Online"),e instanceof V_&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Eu.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Eu.delete(o),r.bu.removeTarget(o))}(t,e)}catch(r){F("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Iu(t,r)}else if(e instanceof Cl?t.bu.Wt(e):e instanceof b_?t.bu.ee(e):t.bu.Yt(e),!n.isEqual(q.min()))try{const r=await G_(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.bu.ue(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.Eu.get(l);u&&i.Eu.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach((a,l)=>{const u=i.Eu.get(a);if(!u)return;i.Eu.set(a,u.withResumeToken(ft.EMPTY_BYTE_STRING,u.snapshotVersion)),Z_(i,a);const c=new cr(u.target,a,l,u.sequenceNumber);sm(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){F("RemoteStore","Failed to raise snapshot:",r),await Iu(t,r)}}async function Iu(t,e,n){if(!Sa(e))throw e;t.Au.add(1),await Ca(t),t.Pu.set("Offline"),n||(n=()=>G_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{F("RemoteStore","Retrying IndexedDB access"),await n(),t.Au.delete(1),await Sc(t)})}function tS(t,e){return e().catch(n=>Iu(t,n,e))}async function Tc(t){const e=Q(t),n=Nr(e);let r=e.Tu.length>0?e.Tu[e.Tu.length-1].batchId:-1;for(;gx(e);)try{const i=await ex(e.localStore,r);if(i===null){e.Tu.length===0&&n.Qo();break}r=i.batchId,yx(e,i)}catch(i){await Iu(e,i)}nS(e)&&rS(e)}function gx(t){return yi(t)&&t.Tu.length<10}function yx(t,e){t.Tu.push(e);const n=Nr(t);n.Uo()&&n.ru&&n.ou(e.mutations)}function nS(t){return yi(t)&&!Nr(t).qo()&&t.Tu.length>0}function rS(t){Nr(t).start()}async function vx(t){Nr(t).au()}async function wx(t){const e=Nr(t);for(const n of t.Tu)e.ou(n.mutations)}async function Ex(t,e,n){const r=t.Tu.shift(),i=Jp.from(r,e,n);await tS(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Tc(t)}async function _x(t,e){e&&Nr(t).ru&&await async function(n,r){if(i=r.code,dP(i)&&i!==T.ABORTED){const s=n.Tu.shift();Nr(n).Go(),await tS(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Tc(n)}var i}(t,e),nS(t)&&rS(t)}async function yv(t,e){const n=Q(t);n.asyncQueue.verifyOperationInProgress(),F("RemoteStore","RemoteStore received new credentials");const r=yi(n);n.Au.add(3),await Ca(n),r&&n.Pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Au.delete(3),await Sc(n)}async function Sx(t,e){const n=Q(t);e?(n.Au.delete(2),await Sc(n)):e||(n.Au.add(2),await Ca(n),n.Pu.set("Unknown"))}function As(t){return t.Vu||(t.Vu=function(e,n,r){const i=Q(e);return i.lu(),new lx(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{oo:fx.bind(null,t),co:px.bind(null,t),eu:mx.bind(null,t)}),t.Ru.push(async e=>{e?(t.Vu.Go(),am(t)?om(t):t.Pu.set("Unknown")):(await t.Vu.stop(),eS(t))})),t.Vu}function Nr(t){return t.Su||(t.Su=function(e,n,r){const i=Q(e);return i.lu(),new ux(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{oo:vx.bind(null,t),co:_x.bind(null,t),cu:wx.bind(null,t),uu:Ex.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Go(),await Tc(t)):(await t.Su.stop(),t.Tu.length>0&&(F("RemoteStore",`Stopping write stream with ${t.Tu.length} pending writes`),t.Tu=[]))})),t.Su}/**
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
 */class lm{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Sr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new lm(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(T.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function um(t,e){if(Wn("AsyncQueue",`${e}: ${t}`),Sa(t))return new $(T.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Zi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||V.comparator(n.key,r.key):(n,r)=>V.comparator(n.key,r.key),this.keyedMap=eo(),this.sortedSet=new ke(this.comparator)}static emptySet(e){return new Zi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Zi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Zi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class vv{constructor(){this.Du=new ke(V.comparator)}track(e){const n=e.doc.key,r=this.Du.get(n);r?e.type!==0&&r.type===3?this.Du=this.Du.insert(n,e):e.type===3&&r.type!==1?this.Du=this.Du.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Du=this.Du.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Du=this.Du.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Du=this.Du.remove(n):e.type===1&&r.type===2?this.Du=this.Du.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Du=this.Du.insert(n,{type:2,doc:e.doc}):H():this.Du=this.Du.insert(n,e)}Cu(){const e=[];return this.Du.inorderTraversal((n,r)=>{e.push(r)}),e}}class fs{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new fs(e,n,Zi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&gc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class Tx{constructor(){this.xu=void 0,this.listeners=[]}}class Ix{constructor(){this.queries=new Rs(e=>I_(e),gc),this.onlineState="Unknown",this.Nu=new Set}}async function kx(t,e){const n=Q(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Tx),i)try{s.xu=await n.onListen(r)}catch(o){const a=um(o,`Initialization of query '${rf(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.ku(n.onlineState),s.xu&&e.Mu(s.xu)&&cm(n)}async function Cx(t,e){const n=Q(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Rx(t,e){const n=Q(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Mu(i)&&(r=!0);o.xu=i}}r&&cm(n)}function Ax(t,e,n){const r=Q(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function cm(t){t.Nu.forEach(e=>{e.next()})}class Nx{constructor(e,n,r){this.query=e,this.Ou=n,this.$u=!1,this.Fu=null,this.onlineState="Unknown",this.options=r||{}}Mu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new fs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.$u?this.Bu(e)&&(this.Ou.next(e),n=!0):this.Lu(e,this.onlineState)&&(this.qu(e),n=!0),this.Fu=e,n}onError(e){this.Ou.error(e)}ku(e){this.onlineState=e;let n=!1;return this.Fu&&!this.$u&&this.Lu(this.Fu,e)&&(this.qu(this.Fu),n=!0),n}Lu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Uu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Bu(e){if(e.docChanges.length>0)return!0;const n=this.Fu&&this.Fu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}qu(e){e=fs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.$u=!0,this.Ou.next(e)}}/**
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
 */class iS{constructor(e){this.key=e}}class sS{constructor(e){this.key=e}}class Dx{constructor(e,n){this.query=e,this.Ju=n,this.Yu=null,this.hasCachedResults=!1,this.current=!1,this.Xu=te(),this.mutatedKeys=te(),this.Zu=k_(e),this.tc=new Zi(this.Zu)}get ec(){return this.Ju}nc(e,n){const r=n?n.sc:new vv,i=n?n.tc:this.tc;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,d)=>{const f=i.get(c),g=yc(this.query,d)?d:null,y=!!f&&this.mutatedKeys.has(f.key),v=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let _=!1;f&&g?f.data.isEqual(g.data)?y!==v&&(r.track({type:3,doc:g}),_=!0):this.ic(f,g)||(r.track({type:2,doc:g}),_=!0,(l&&this.Zu(g,l)>0||u&&this.Zu(g,u)<0)&&(a=!0)):!f&&g?(r.track({type:0,doc:g}),_=!0):f&&!g&&(r.track({type:1,doc:f}),_=!0,(l||u)&&(a=!0)),_&&(g?(o=o.add(g),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{tc:o,sc:r,ji:a,mutatedKeys:s}}ic(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.tc;this.tc=e.tc,this.mutatedKeys=e.mutatedKeys;const s=e.sc.Cu();s.sort((u,c)=>function(d,f){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return H()}};return g(d)-g(f)}(u.type,c.type)||this.Zu(u.doc,c.doc)),this.rc(r);const o=n?this.oc():[],a=this.Xu.size===0&&this.current?1:0,l=a!==this.Yu;return this.Yu=a,s.length!==0||l?{snapshot:new fs(this.query,e.tc,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),uc:o}:{uc:o}}ku(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tc:this.tc,sc:new vv,mutatedKeys:this.mutatedKeys,ji:!1},!1)):{uc:[]}}cc(e){return!this.Ju.has(e)&&!!this.tc.has(e)&&!this.tc.get(e).hasLocalMutations}rc(e){e&&(e.addedDocuments.forEach(n=>this.Ju=this.Ju.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ju=this.Ju.delete(n)),this.current=e.current)}oc(){if(!this.current)return[];const e=this.Xu;this.Xu=te(),this.tc.forEach(r=>{this.cc(r.key)&&(this.Xu=this.Xu.add(r.key))});const n=[];return e.forEach(r=>{this.Xu.has(r)||n.push(new sS(r))}),this.Xu.forEach(r=>{e.has(r)||n.push(new iS(r))}),n}ac(e){this.Ju=e.sr,this.Xu=te();const n=this.nc(e.documents);return this.applyChanges(n,!0)}hc(){return fs.fromInitialDocuments(this.query,this.tc,this.mutatedKeys,this.Yu===0,this.hasCachedResults)}}class Px{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class xx{constructor(e){this.key=e,this.lc=!1}}class Ox{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.fc={},this.dc=new Rs(a=>I_(a),gc),this._c=new Map,this.wc=new Set,this.mc=new ke(V.comparator),this.gc=new Map,this.yc=new nm,this.Ic={},this.Tc=new Map,this.Ec=ds.kn(),this.onlineState="Unknown",this.Ac=void 0}get isPrimaryClient(){return this.Ac===!0}}async function Lx(t,e){const n=Hx(t);let r,i;const s=n.dc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.hc();else{const o=await tx(n.localStore,Kn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await Mx(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&Y_(n.remoteStore,o)}return i}async function Mx(t,e,n,r,i){t.Rc=(d,f,g)=>async function(y,v,_,h){let p=v.view.nc(_);p.ji&&(p=await pv(y.localStore,v.query,!1).then(({documents:I})=>v.view.nc(I,p)));const m=h&&h.targetChanges.get(v.targetId),w=v.view.applyChanges(p,y.isPrimaryClient,m);return Ev(y,v.targetId,w.uc),w.snapshot}(t,d,f,g);const s=await pv(t.localStore,e,!0),o=new Dx(e,s.sr),a=o.nc(s.documents),l=ka.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);Ev(t,n,u.uc);const c=new Px(e,n,o);return t.dc.set(e,c),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),u.snapshot}async function $x(t,e){const n=Q(t),r=n.dc.get(e),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter(s=>!gc(s,e))),void n.dc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await uf(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),J_(n.remoteStore,r.targetId),cf(n,r.targetId)}).catch(_a)):(cf(n,r.targetId),await uf(n.localStore,r.targetId,!0))}async function Ux(t,e,n){const r=Wx(t);try{const i=await function(s,o){const a=Q(s),l=be.now(),u=o.reduce((f,g)=>f.add(g.key),te());let c,d;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let g=qn(),y=te();return a.Xi.getEntries(f,u).next(v=>{g=v,g.forEach((_,h)=>{h.isValidDocument()||(y=y.add(_))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,g)).next(v=>{c=v;const _=[];for(const h of o){const p=aP(h,c.get(h.key).overlayedDocument);p!=null&&_.push(new gi(h.key,p,p_(p.value.mapValue),Fn.exists(!0)))}return a.mutationQueue.addMutationBatch(f,l,_,o)}).next(v=>{d=v;const _=v.applyToLocalDocumentSet(c,y);return a.documentOverlayCache.saveOverlays(f,v.batchId,_)})}).then(()=>({batchId:d.batchId,changes:R_(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.Ic[s.currentUser.toKey()];l||(l=new ke(ue)),l=l.insert(o,a),s.Ic[s.currentUser.toKey()]=l}(r,i.batchId,n),await Ra(r,i.changes),await Tc(r.remoteStore)}catch(i){const s=um(i,"Failed to persist write");n.reject(s)}}async function oS(t,e){const n=Q(t);try{const r=await JP(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.gc.get(s);o&&(ye(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.lc=!0:i.modifiedDocuments.size>0?ye(o.lc):i.removedDocuments.size>0&&(ye(o.lc),o.lc=!1))}),await Ra(n,r,e)}catch(r){await _a(r)}}function wv(t,e,n){const r=Q(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.dc.forEach((s,o)=>{const a=o.view.ku(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=Q(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const d of c.listeners)d.ku(o)&&(l=!0)}),l&&cm(a)}(r.eventManager,e),i.length&&r.fc.eu(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Fx(t,e,n){const r=Q(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.gc.get(e),s=i&&i.key;if(s){let o=new ke(V.comparator);o=o.insert(s,ot.newNoDocument(s,q.min()));const a=te().add(s),l=new Ec(q.min(),new Map,new ke(ue),o,a);await oS(r,l),r.mc=r.mc.remove(s),r.gc.delete(e),hm(r)}else await uf(r.localStore,e,!1).then(()=>cf(r,e,n)).catch(_a)}async function bx(t,e){const n=Q(t),r=e.batch.batchId;try{const i=await YP(n.localStore,e);lS(n,r,null),aS(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ra(n,i)}catch(i){await _a(i)}}async function Vx(t,e,n){const r=Q(t);try{const i=await function(s,o){const a=Q(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(ye(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);lS(r,e,n),aS(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ra(r,i)}catch(i){await _a(i)}}function aS(t,e){(t.Tc.get(e)||[]).forEach(n=>{n.resolve()}),t.Tc.delete(e)}function lS(t,e,n){const r=Q(t);let i=r.Ic[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ic[r.currentUser.toKey()]=i}}function cf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.dc.delete(r),n&&t.fc.vc(r,n);t._c.delete(e),t.isPrimaryClient&&t.yc.ps(e).forEach(r=>{t.yc.containsKey(r)||uS(t,r)})}function uS(t,e){t.wc.delete(e.path.canonicalString());const n=t.mc.get(e);n!==null&&(J_(t.remoteStore,n),t.mc=t.mc.remove(e),t.gc.delete(n),hm(t))}function Ev(t,e,n){for(const r of n)r instanceof iS?(t.yc.addReference(r.key,e),zx(t,r)):r instanceof sS?(F("SyncEngine","Document no longer in limbo: "+r.key),t.yc.removeReference(r.key,e),t.yc.containsKey(r.key)||uS(t,r.key)):H()}function zx(t,e){const n=e.key,r=n.path.canonicalString();t.mc.get(n)||t.wc.has(r)||(F("SyncEngine","New document in limbo: "+n),t.wc.add(r),hm(t))}function hm(t){for(;t.wc.size>0&&t.mc.size<t.maxConcurrentLimboResolutions;){const e=t.wc.values().next().value;t.wc.delete(e);const n=new V(me.fromString(e)),r=t.Ec.next();t.gc.set(r,new xx(n)),t.mc=t.mc.insert(n,r),Y_(t.remoteStore,new cr(Kn(__(n.path)),r,"TargetPurposeLimboResolution",Wp.ct))}}async function Ra(t,e,n){const r=Q(t),i=[],s=[],o=[];r.dc.isEmpty()||(r.dc.forEach((a,l)=>{o.push(r.Rc(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=im.Bi(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.fc.eu(i),await async function(a,l){const u=Q(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>R.forEach(l,d=>R.forEach(d.$i,f=>u.persistence.referenceDelegate.addReference(c,d.targetId,f)).next(()=>R.forEach(d.Fi,f=>u.persistence.referenceDelegate.removeReference(c,d.targetId,f)))))}catch(c){if(!Sa(c))throw c;F("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const d=c.targetId;if(!c.fromCache){const f=u.Hi.get(d),g=f.snapshotVersion,y=f.withLastLimboFreeSnapshotVersion(g);u.Hi=u.Hi.insert(d,y)}}}(r.localStore,s))}async function Bx(t,e){const n=Q(t);if(!n.currentUser.isEqual(e)){F("SyncEngine","User change. New user:",e.toKey());const r=await q_(n.localStore,e);n.currentUser=e,function(i,s){i.Tc.forEach(o=>{o.forEach(a=>{a.reject(new $(T.CANCELLED,s))})}),i.Tc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ra(n,r.tr)}}function jx(t,e){const n=Q(t),r=n.gc.get(e);if(r&&r.lc)return te().add(r.key);{let i=te();const s=n._c.get(e);if(!s)return i;for(const o of s){const a=n.dc.get(o);i=i.unionWith(a.view.ec)}return i}}function Hx(t){const e=Q(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=oS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=jx.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Fx.bind(null,e),e.fc.eu=Rx.bind(null,e.eventManager),e.fc.vc=Ax.bind(null,e.eventManager),e}function Wx(t){const e=Q(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=bx.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Vx.bind(null,e),e}class _v{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=_c(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return XP(this.persistence,new GP,e.initialUser,this.serializer)}createPersistence(e){return new KP(rm.js,this.serializer)}createSharedClientState(e){return new rx}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Kx{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>wv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Bx.bind(null,this.syncEngine),await Sx(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Ix}createDatastore(e){const n=_c(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new ax(i));var i;return function(s,o,a,l){return new cx(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>wv(this.syncEngine,a,0),o=gv.D()?new gv:new ix,new dx(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new Ox(r,i,s,o,a,l);return u&&(c.Ac=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Q(e);F("RemoteStore","RemoteStore shutting down."),n.Au.add(5),await Ca(n),n.vu.shutdown(),n.Pu.set("Unknown")}(this.remoteStore)}}/**
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
 */class qx{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Vc(this.observer.next,e)}error(e){this.observer.error?this.Vc(this.observer.error,e):Wn("Uncaught Error in snapshot listener:",e.toString())}Sc(){this.muted=!0}Vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class Gx{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=it.UNAUTHENTICATED,this.clientId=h_.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{F("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(F("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new $(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Sr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=um(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function xh(t,e){t.asyncQueue.verifyOperationInProgress(),F("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await q_(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Sv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Xx(t);F("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>yv(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>yv(e.remoteStore,s)),t._onlineComponents=e}function Qx(t){return t.name==="FirebaseError"?t.code===T.FAILED_PRECONDITION||t.code===T.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function Xx(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){F("FirestoreClient","Using user provided OfflineComponentProvider");try{await xh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Qx(n))throw n;ls("Error using user provided cache. Falling back to memory cache: "+n),await xh(t,new _v)}}else F("FirestoreClient","Using default OfflineComponentProvider"),await xh(t,new _v);return t._offlineComponents}async function cS(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(F("FirestoreClient","Using user provided OnlineComponentProvider"),await Sv(t,t._uninitializedComponentsProvider._online)):(F("FirestoreClient","Using default OnlineComponentProvider"),await Sv(t,new Kx))),t._onlineComponents}function Yx(t){return cS(t).then(e=>e.syncEngine)}async function Jx(t){const e=await cS(t),n=e.eventManager;return n.onListen=Lx.bind(null,e.syncEngine),n.onUnlisten=$x.bind(null,e.syncEngine),n}function Zx(t,e,n={}){const r=new Sr;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new qx({next:d=>{s.enqueueAndForget(()=>Cx(i,c)),d.fromCache&&a.source==="server"?l.reject(new $(T.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(d)},error:d=>l.reject(d)}),c=new Nx(o,u,{includeMetadataChanges:!0,Uu:!0});return kx(i,c)}(await Jx(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */const Tv=new Map;/**
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
 */function hS(t,e,n){if(!n)throw new $(T.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function eO(t,e,n,r){if(e===!0&&r===!0)throw new $(T.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Iv(t){if(!V.isDocumentKey(t))throw new $(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function kv(t){if(V.isDocumentKey(t))throw new $(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ic(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":H()}function ku(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ic(t);throw new $(T.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Cv{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new $(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new $(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}eO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!1:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class kc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Cv({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new $(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new $(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Cv(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new w2;switch(n.type){case"firstParty":return new T2(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new $(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Tv.get(e);n&&(F("ComponentProvider","Removing Datastore"),Tv.delete(e),n.terminate())}(this),Promise.resolve()}}function tO(t,e,n,r={}){var i;const s=(t=ku(t,kc))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&ls("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=it.MOCK_USER;else{o=_1(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new $(T.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new it(l)}t._authCredentials=new E2(new c_(o,a))}}/**
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
 */class Wt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Tr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Wt(this.firestore,e,this._key)}}class Ns{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ns(this.firestore,e,this._query)}}class Tr extends Ns{constructor(e,n,r){super(e,n,__(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Wt(this.firestore,null,new V(e))}withConverter(e){return new Tr(this.firestore,e,this._path)}}function Rv(t,e,...n){if(t=Ve(t),hS("collection","path",e),t instanceof kc){const r=me.fromString(e,...n);return kv(r),new Tr(t,null,r)}{if(!(t instanceof Wt||t instanceof Tr))throw new $(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(me.fromString(e,...n));return kv(r),new Tr(t.firestore,null,r)}}function nO(t,e,...n){if(t=Ve(t),arguments.length===1&&(e=h_.A()),hS("doc","path",e),t instanceof kc){const r=me.fromString(e,...n);return Iv(r),new Wt(t,null,new V(r))}{if(!(t instanceof Wt||t instanceof Tr))throw new $(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(me.fromString(e,...n));return Iv(r),new Wt(t.firestore,t instanceof Tr?t.converter:null,new V(r))}}/**
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
 */class rO{constructor(){this.Kc=Promise.resolve(),this.Gc=[],this.Qc=!1,this.jc=[],this.zc=null,this.Wc=!1,this.Hc=!1,this.Jc=[],this.Lo=new Q_(this,"async_queue_retry"),this.Yc=()=>{const n=Ph();n&&F("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Lo.ko()};const e=Ph();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Yc)}get isShuttingDown(){return this.Qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Xc(),this.Zc(e)}enterRestrictedMode(e){if(!this.Qc){this.Qc=!0,this.Hc=e||!1;const n=Ph();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Yc)}}enqueue(e){if(this.Xc(),this.Qc)return new Promise(()=>{});const n=new Sr;return this.Zc(()=>this.Qc&&this.Hc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Gc.push(e),this.ta()))}async ta(){if(this.Gc.length!==0){try{await this.Gc[0](),this.Gc.shift(),this.Lo.reset()}catch(e){if(!Sa(e))throw e;F("AsyncQueue","Operation failed with retryable error: "+e)}this.Gc.length>0&&this.Lo.xo(()=>this.ta())}}Zc(e){const n=this.Kc.then(()=>(this.Wc=!0,e().catch(r=>{this.zc=r,this.Wc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Wn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Wc=!1,r))));return this.Kc=n,n}enqueueAfterDelay(e,n,r){this.Xc(),this.Jc.indexOf(e)>-1&&(n=0);const i=lm.createAndSchedule(this,e,n,r,s=>this.ea(s));return this.jc.push(i),i}Xc(){this.zc&&H()}verifyOperationInProgress(){}async na(){let e;do e=this.Kc,await e;while(e!==this.Kc)}sa(e){for(const n of this.jc)if(n.timerId===e)return!0;return!1}ia(e){return this.na().then(()=>{this.jc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.jc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.na()})}ra(e){this.Jc.push(e)}ea(e){const n=this.jc.indexOf(e);this.jc.splice(n,1)}}class dm extends kc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new rO,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||fS(this),this._firestoreClient.terminate()}}function iO(t,e){const n=typeof t=="object"?t:dp(),r=typeof t=="string"?t:e||"(default)",i=Xu(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=w1("firestore");s&&tO(i,...s)}return i}function dS(t){return t._firestoreClient||fS(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function fS(t){var e,n,r;const i=t._freezeSettings(),s=function(o,a,l,u){return new M2(o,a,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new Gx(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
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
 */class ps{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ps(ft.fromBase64String(e))}catch(n){throw new $(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ps(ft.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class fm{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new at(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class pS{constructor(e){this._methodName=e}}/**
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
 */class pm{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}}/**
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
 */const sO=/^__.*__$/;class oO{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new gi(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ia(e,this.data,n,this.fieldTransforms)}}function mS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw H()}}class mm{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.oa(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ua(){return this.settings.ua}ca(e){return new mm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}aa(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ca({path:r,ha:!1});return i.la(e),i}fa(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ca({path:r,ha:!1});return i.oa(),i}da(e){return this.ca({path:void 0,ha:!0})}_a(e){return Cu(e,this.settings.methodName,this.settings.wa||!1,this.path,this.settings.ma)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}oa(){if(this.path)for(let e=0;e<this.path.length;e++)this.la(this.path.get(e))}la(e){if(e.length===0)throw this._a("Document fields must not be empty");if(mS(this.ua)&&sO.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class aO{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||_c(e)}ga(e,n,r,i=!1){return new mm({ua:e,methodName:n,ma:r,path:at.emptyPath(),ha:!1,wa:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function gS(t){const e=t._freezeSettings(),n=_c(t._databaseId);return new aO(t._databaseId,!!e.ignoreUndefinedProperties,n)}function lO(t,e,n,r,i,s={}){const o=t.ga(s.merge||s.mergeFields?2:0,e,n,i);wS("Data must be an object, but it was:",o,r);const a=yS(r,o);let l,u;if(s.merge)l=new tn(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const d of s.mergeFields){const f=cO(e,d,n);if(!o.contains(f))throw new $(T.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);dO(c,f)||c.push(f)}l=new tn(c),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new oO(new Bt(a),l,u)}function uO(t,e,n,r=!1){return gm(n,t.ga(r?4:3,e))}function gm(t,e){if(vS(t=Ve(t)))return wS("Unsupported field value:",e,t),yS(t,e);if(t instanceof pS)return function(n,r){if(!mS(r.ua))throw r._a(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ha&&e.ua!==4)throw e._a("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=gm(o,r.da(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=Ve(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return tP(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=be.fromDate(n);return{timestampValue:Tu(r.serializer,i)}}if(n instanceof be){const i=new be(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Tu(r.serializer,i)}}if(n instanceof pm)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ps)return{bytesValue:z_(r.serializer,n._byteString)};if(n instanceof Wt){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:tm(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r._a(`Unsupported field value: ${Ic(n)}`)}(t,e)}function yS(t,e){const n={};return d_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Cs(t,(r,i)=>{const s=gm(i,e.aa(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function vS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof be||t instanceof pm||t instanceof ps||t instanceof Wt||t instanceof pS)}function wS(t,e,n){if(!vS(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Ic(n);throw r==="an object"?e._a(t+" a custom object"):e._a(t+" "+r)}}function cO(t,e,n){if((e=Ve(e))instanceof fm)return e._internalPath;if(typeof e=="string")return ES(t,e);throw Cu("Field path arguments must be of type string or ",t,!1,void 0,n)}const hO=new RegExp("[~\\*/\\[\\]]");function ES(t,e,n){if(e.search(hO)>=0)throw Cu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new fm(...e.split("."))._internalPath}catch{throw Cu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Cu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new $(T.INVALID_ARGUMENT,a+t+l)}function dO(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class _S{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Wt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new fO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(SS("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class fO extends _S{data(){return super.data()}}function SS(t,e){return typeof e=="string"?ES(t,e):e instanceof fm?e._internalPath:e._delegate._internalPath}/**
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
 */function pO(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new $(T.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ym{}class mO extends ym{}function gO(t,e,...n){let r=[];e instanceof ym&&r.push(e),r=r.concat(n),function(i){const s=i.filter(a=>a instanceof wm).length,o=i.filter(a=>a instanceof vm).length;if(s>1||s>0&&o>0)throw new $(T.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class vm extends mO{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new vm(e,n,r)}_apply(e){const n=this._parse(e);return TS(e._query,n),new Ns(e.firestore,e.converter,tf(e._query,n))}_parse(e){const n=gS(e.firestore);return function(i,s,o,a,l,u,c){let d;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new $(T.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Nv(c,u);const f=[];for(const g of c)f.push(Av(a,i,g));d={arrayValue:{values:f}}}else d=Av(a,i,c)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Nv(c,u),d=uO(o,s,c,u==="in"||u==="not-in");return Me.create(l,u,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class wm extends ym{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new wm(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:ln.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)TS(s,a),s=tf(s,a)}(e._query,n),new Ns(e.firestore,e.converter,tf(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Av(t,e,n){if(typeof(n=Ve(n))=="string"){if(n==="")throw new $(T.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!T_(e)&&n.indexOf("/")!==-1)throw new $(T.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(me.fromString(n));if(!V.isDocumentKey(r))throw new $(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Yy(t,new V(r))}if(n instanceof Wt)return Yy(t,n._key);throw new $(T.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ic(n)}.`)}function Nv(t,e){if(!Array.isArray(t)||t.length===0)throw new $(T.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function TS(t,e){if(e.isInequality()){const r=Yp(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new $(T.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=S_(t);s!==null&&yO(t,i,s)}const n=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new $(T.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new $(T.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function yO(t,e,n){if(!n.isEqual(e))throw new $(T.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class vO{convertValue(e,n="none"){switch(ci(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Oe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ui(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw H()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Cs(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new pm(Oe(e.latitude),Oe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=qp(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Qo(e));default:return null}}convertTimestamp(e){const n=Ar(e);return new be(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=me.fromString(e);ye(K_(r));const i=new Xo(r.get(1),r.get(3)),s=new V(r.popFirst(5));return i.isEqual(n)||Wn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function wO(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class sl{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class EO extends _S{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Rl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(SS("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Rl extends EO{data(e={}){return super.data(e)}}class _O{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new sl(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Rl(this._firestore,this._userDataWriter,r.key,r,new sl(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(T.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new Rl(r._firestore,r._userDataWriter,o.doc.key,o.doc,new sl(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Rl(r._firestore,r._userDataWriter,o.doc.key,o.doc,new sl(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:SO(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function SO(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return H()}}class TO extends vO{constructor(e){super(),this.firestore=e}convertBytes(e){return new ps(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Wt(this.firestore,null,n)}}function IO(t){t=ku(t,Ns);const e=ku(t.firestore,dm),n=dS(e),r=new TO(e);return pO(t._query),Zx(n,t._query).then(i=>new _O(e,r,t,i))}function kO(t,e){const n=ku(t.firestore,dm),r=nO(t),i=wO(t.converter,e);return CO(n,[lO(gS(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Fn.exists(!1))]).then(()=>r)}function CO(t,e){return function(n,r){const i=new Sr;return n.asyncQueue.enqueueAndForget(async()=>Ux(await Yx(n),r,i)),i.promise}(dS(t),e)}(function(t,e=!0){(function(n){ks=n})(pi),si(new Cr("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new dm(new _2(n.getProvider("auth-internal")),new k2(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new $(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Xo(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),yn(Ky,"3.11.0",t),yn(Ky,"3.11.0","esm2017")})();/**
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
 */const IS="firebasestorage.googleapis.com",kS="storageBucket",RO=2*60*1e3,AO=10*60*1e3;/**
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
 */class Ne extends Tn{constructor(e,n,r=0){super(Oh(e),`Firebase Storage: ${n} (${Oh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ne.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Oh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ae;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ae||(Ae={}));function Oh(t){return"storage/"+t}function Em(){const t="An unknown error occurred, please check the error payload for server response.";return new Ne(Ae.UNKNOWN,t)}function NO(t){return new Ne(Ae.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function DO(t){return new Ne(Ae.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function PO(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ne(Ae.UNAUTHENTICATED,t)}function xO(){return new Ne(Ae.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function OO(t){return new Ne(Ae.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function LO(){return new Ne(Ae.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function MO(){return new Ne(Ae.CANCELED,"User canceled the upload/download.")}function $O(t){return new Ne(Ae.INVALID_URL,"Invalid URL '"+t+"'.")}function UO(t){return new Ne(Ae.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function FO(){return new Ne(Ae.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+kS+"' property when initializing the app?")}function bO(){return new Ne(Ae.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function VO(){return new Ne(Ae.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function zO(t){return new Ne(Ae.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function hf(t){return new Ne(Ae.INVALID_ARGUMENT,t)}function CS(){return new Ne(Ae.APP_DELETED,"The Firebase app was deleted.")}function BO(t){return new Ne(Ae.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function wo(t,e){return new Ne(Ae.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Ws(t){throw new Ne(Ae.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Nt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Nt.makeFromUrl(e,n)}catch{return new Nt(e,"")}if(r.path==="")return r;throw UO(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(w){w.path.charAt(w.path.length-1)==="/"&&(w.path_=w.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(w){w.path_=decodeURIComponent(w.path)}const c="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",g=new RegExp(`^https?://${d}/${c}/b/${i}/o${f}`,"i"),y={bucket:1,path:3},v=n===IS?"(?:storage.googleapis.com|storage.cloud.google.com)":n,_="([^?#]*)",h=new RegExp(`^https?://${v}/${i}/${_}`,"i"),m=[{regex:a,indices:l,postModify:s},{regex:g,indices:y,postModify:u},{regex:h,indices:{bucket:1,path:2},postModify:u}];for(let w=0;w<m.length;w++){const I=m[w],A=I.regex.exec(e);if(A){const N=A[I.indices.bucket];let x=A[I.indices.path];x||(x=""),r=new Nt(N,x),I.postModify(r);break}}if(r==null)throw $O(e);return r}}class jO{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function HO(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(..._){u||(u=!0,e.apply(null,_))}function d(_){i=setTimeout(()=>{i=null,t(g,l())},_)}function f(){s&&clearTimeout(s)}function g(_,...h){if(u){f();return}if(_){f(),c.call(null,_,...h);return}if(l()||o){f(),c.call(null,_,...h);return}r<64&&(r*=2);let m;a===1?(a=2,m=0):m=(r+Math.random())*1e3,d(m)}let y=!1;function v(_){y||(y=!0,f(),!u&&(i!==null?(_||(a=2),clearTimeout(i),d(0)):_||(a=1)))}return d(0),s=setTimeout(()=>{o=!0,v(!0)},n),v}function WO(t){t(!1)}/**
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
 */function KO(t){return t!==void 0}function qO(t){return typeof t=="object"&&!Array.isArray(t)}function _m(t){return typeof t=="string"||t instanceof String}function Dv(t){return Sm()&&t instanceof Blob}function Sm(){return typeof Blob<"u"&&!BC()}function Pv(t,e,n,r){if(r<e)throw hf(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw hf(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Tm(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function RS(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var Yr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Yr||(Yr={}));/**
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
 */function GO(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class QO{constructor(e,n,r,i,s,o,a,l,u,c,d,f=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=d,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,y)=>{this.resolve_=g,this.reject_=y,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new ol(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Yr.NO_ERROR,l=s.getStatus();if(!a||GO(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===Yr.ABORT;r(!1,new ol(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new ol(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());KO(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=Em();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?CS():MO();o(l)}else{const l=LO();o(l)}};this.canceled_?n(!1,new ol(!1,null,!0)):this.backoffId_=HO(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&WO(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ol{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function XO(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function YO(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function JO(t,e){e&&(t["X-Firebase-GMPID"]=e)}function ZO(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function eL(t,e,n,r,i,s,o=!0){const a=RS(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return JO(u,e),XO(u,n),YO(u,s),ZO(u,r),new QO(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function tL(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function nL(...t){const e=tL();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Sm())return new Blob(t);throw new Ne(Ae.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function rL(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function iL(t){if(typeof atob>"u")throw zO("base-64");return atob(t)}/**
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
 */const pn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Lh{constructor(e,n){this.data=e,this.contentType=n||null}}function sL(t,e){switch(t){case pn.RAW:return new Lh(AS(e));case pn.BASE64:case pn.BASE64URL:return new Lh(NS(t,e));case pn.DATA_URL:return new Lh(aL(e),lL(e))}throw Em()}function AS(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function oL(t){let e;try{e=decodeURIComponent(t)}catch{throw wo(pn.DATA_URL,"Malformed data URL.")}return AS(e)}function NS(t,e){switch(t){case pn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw wo(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case pn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw wo(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=iL(e)}catch(i){throw i.message.includes("polyfill")?i:wo(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class DS{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw wo(pn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=uL(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function aL(t){const e=new DS(t);return e.base64?NS(pn.BASE64,e.rest):oL(e.rest)}function lL(t){return new DS(t).contentType}function uL(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class ar{constructor(e,n){let r=0,i="";Dv(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Dv(this.data_)){const r=this.data_,i=rL(r,e,n);return i===null?null:new ar(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new ar(r,!0)}}static getBlob(...e){if(Sm()){const n=e.map(r=>r instanceof ar?r.data_:r);return new ar(nL.apply(null,n))}else{const n=e.map(o=>_m(o)?sL(pn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new ar(i,!0)}}uploadData(){return this.data_}}/**
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
 */function PS(t){let e;try{e=JSON.parse(t)}catch{return null}return qO(e)?e:null}/**
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
 */function cL(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function hL(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function xS(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function dL(t,e){return e}class mt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||dL}}let al=null;function fL(t){return!_m(t)||t.length<2?t:xS(t)}function OS(){if(al)return al;const t=[];t.push(new mt("bucket")),t.push(new mt("generation")),t.push(new mt("metageneration")),t.push(new mt("name","fullPath",!0));function e(s,o){return fL(o)}const n=new mt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new mt("size");return i.xform=r,t.push(i),t.push(new mt("timeCreated")),t.push(new mt("updated")),t.push(new mt("md5Hash",null,!0)),t.push(new mt("cacheControl",null,!0)),t.push(new mt("contentDisposition",null,!0)),t.push(new mt("contentEncoding",null,!0)),t.push(new mt("contentLanguage",null,!0)),t.push(new mt("contentType",null,!0)),t.push(new mt("metadata","customMetadata",!0)),al=t,al}function pL(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Nt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function mL(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return pL(r,t),r}function LS(t,e,n){const r=PS(e);return r===null?null:mL(t,r,n)}function gL(t,e,n,r){const i=PS(e);if(i===null||!_m(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,d=t.fullPath,f="/b/"+o(c)+"/o/"+o(d),g=Tm(f,n,r),y=RS({alt:"media",token:u});return g+y})[0]}function yL(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class MS{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function $S(t){if(!t)throw Em()}function vL(t,e){function n(r,i){const s=LS(t,i,e);return $S(s!==null),s}return n}function wL(t,e){function n(r,i){const s=LS(t,i,e);return $S(s!==null),gL(s,i,t.host,t._protocol)}return n}function US(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=xO():i=PO():n.getStatus()===402?i=DO(t.bucket):n.getStatus()===403?i=OO(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function EL(t){const e=US(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=NO(t.path)),s.serverResponse=i.serverResponse,s}return n}function _L(t,e,n){const r=e.fullServerUrl(),i=Tm(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new MS(i,s,wL(t,n),o);return a.errorHandler=EL(e),a}function SL(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function TL(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=SL(null,e)),r}function IL(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let m="";for(let w=0;w<2;w++)m=m+Math.random().toString().slice(2);return m}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=TL(e,r,i),c=yL(u,n),d="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,f=`\r
--`+l+"--",g=ar.getBlob(d,r,f);if(g===null)throw bO();const y={name:u.fullPath},v=Tm(s,t.host,t._protocol),_="POST",h=t.maxUploadRetryTime,p=new MS(v,_,vL(t,n),h);return p.urlParams=y,p.headers=o,p.body=g.uploadData(),p.errorHandler=US(e),p}class kL{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Yr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Yr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Yr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Ws("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ws("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ws("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ws("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ws("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class CL extends kL{initXhr(){this.xhr_.responseType="text"}}function FS(){return new CL}/**
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
 */class hi{constructor(e,n){this._service=e,n instanceof Nt?this._location=n:this._location=Nt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new hi(e,n)}get root(){const e=new Nt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return xS(this._location.path)}get storage(){return this._service}get parent(){const e=cL(this._location.path);if(e===null)return null;const n=new Nt(this._location.bucket,e);return new hi(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw BO(e)}}function RL(t,e,n){t._throwIfRoot("uploadBytes");const r=IL(t.storage,t._location,OS(),new ar(e,!0),n);return t.storage.makeRequestWithTokens(r,FS).then(i=>({metadata:i,ref:t}))}function AL(t){t._throwIfRoot("getDownloadURL");const e=_L(t.storage,t._location,OS());return t.storage.makeRequestWithTokens(e,FS).then(n=>{if(n===null)throw VO();return n})}function NL(t,e){const n=hL(t._location.path,e),r=new Nt(t._location.bucket,n);return new hi(t.storage,r)}/**
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
 */function DL(t){return/^[A-Za-z]+:\/\//.test(t)}function PL(t,e){return new hi(t,e)}function bS(t,e){if(t instanceof Im){const n=t;if(n._bucket==null)throw FO();const r=new hi(n,n._bucket);return e!=null?bS(r,e):r}else return e!==void 0?NL(t,e):t}function xL(t,e){if(e&&DL(e)){if(t instanceof Im)return PL(t,e);throw hf("To use ref(service, url), the first argument must be a Storage instance.")}else return bS(t,e)}function xv(t,e){const n=e==null?void 0:e[kS];return n==null?null:Nt.makeFromBucketSpec(n,t)}function OL(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:_1(i,t.app.options.projectId))}class Im{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=IS,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=RO,this._maxUploadRetryTime=AO,this._requests=new Set,i!=null?this._bucket=Nt.makeFromBucketSpec(i,this._host):this._bucket=xv(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Nt.makeFromBucketSpec(this._url,e):this._bucket=xv(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Pv("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Pv("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new hi(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new jO(CS());{const o=eL(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Ov="@firebase/storage",Lv="0.11.2";/**
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
 */const VS="storage";function LL(t,e,n){return t=Ve(t),RL(t,e,n)}function ML(t){return t=Ve(t),AL(t)}function Mv(t,e){return t=Ve(t),xL(t,e)}function $L(t=dp(),e){t=Ve(t);const r=Xu(t,VS).getImmediate({identifier:e}),i=w1("storage");return i&&UL(r,...i),r}function UL(t,e,n,r={}){OL(t,e,n,r)}function FL(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Im(n,r,i,e,pi)}function bL(){si(new Cr(VS,FL,"PUBLIC").setMultipleInstances(!0)),yn(Ov,Lv,""),yn(Ov,Lv,"esm2017")}bL();const VL={apiKey:"AIzaSyBd5LNvH6iIS8EzYdKCrOmXfL6FjJA07bc",authDomain:"finalproject-10d35.firebaseapp.com",projectId:"finalproject-10d35",storageBucket:"finalproject-10d35.appspot.com",messagingSenderId:"1017015914216",appId:"1:1017015914216:web:4fef4ee2e3ec2dcb8a035d"},km=I1(VL),Ru=pD(km),$v=iO(km),Uv=$L(km),zL=()=>{const[t,e]=D.useState(!1),[n,r]=D.useState(null),[i,s]=D.useState(!0),o=uC();return D.useEffect(()=>{const a=tN(Ru,l=>{s(!1),l!==null?(r(l),e(!!l)):(r(null),e(!1)),console.log("Our user is: ",l)});return i||o(t?"/posts":"/login"),a},[t,i]),ee(p1.Provider,{value:n,children:i?ee("div",{children:"Loading..."}):ee(CC,{})})},BL=()=>{const[t,e]=D.useState(""),[n,r]=D.useState("");function i(){YA(Ru,t,n).then(({user:o})=>{console.log(o)})}function s(){JA(Ru,t,n).then(({user:o})=>{console.log(o)})}return ee("div",{className:"container",children:Jn("div",{className:"login",children:[ee("div",{children:"Login / Create Account"}),ee("input",{type:"email",value:t,onChange:o=>e(o.target.value),placeholder:"Email"}),ee("input",{type:"password",value:n,onChange:o=>r(o.target.value),placeholder:"Password"}),Jn("div",{className:"login-controls",children:[ee("button",{className:"secondary",onClick:i,children:"Create Account"}),ee("button",{onClick:s,children:"Sign In"})]})]})})},jL=()=>{D.useContext(p1);const[t,e]=D.useState([]);D.useEffect(()=>{async function h(){(await IO(gO(Rv($v,"posts")))).forEach(m=>{t.push({...m.data(),id:m.id})}),e(t)}h()},[]);function n(){var h=[];for(let m=0;m<10;m++){var p=[];p[0]="/src/assets/test.jpg",p[1]="London Bridge"+m,p[2]="description"+m,p[3]=u(),h[m]=p}return h}const[r,i]=D.useState(0),[s,o]=D.useState(0),[a,l]=D.useState(!1);function u(){return D.useEffect(()=>{const h=navigator.geolocation.watchPosition(p=>{i(p.coords.latitude),o(p.coords.longitude),l(!0)},p=>{console.log(p)},{enableHighAccuracy:!0});return()=>navigator.geolocation.clearWatch(h)},[]),ee("div",{className:"location",children:a?`Lat: ${r}, Lon: ${s}`:"Loading..."})}function c(){var h=n();const p=[];for(let m=h.length-1;m>=0;m--)p[m]=Jn(Uc,{children:[Jn("div",{className:"post"+m,children:[ee("h2",{children:h[m][1]}),ee("img",{src:h[m][0].toString(),alt:"react logo"}),ee("p",{children:"GPS: "}),Jn("p",{children:["description ",h[m][2]]}),Jn("div",{className:"location",children:["location ",h[m][3],Jn("p",{children:["ID: ",m]})]})]}),ee("br",{}),ee("br",{})]});return ee(Uc,{children:p.reverse()})}const d=c();async function f(h){var N;const m=(N=h.target.files)==null?void 0:N[0],w=Mv(Uv,`/images/${m.name||""}`);await LL(w,m);const I=await ML(Mv(Uv,`/images/${m.name||""}`)),A=await kO(Rv($v,"posts"),{image:I,title:g,description:v,lat:r,lon:s});console.log("Document written with ID: ",A.id)}const[g,y]=D.useState(""),[v,_]=D.useState("");return ee(Uc,{children:Jn("div",{className:"header",children:[ee("h1",{children:"HikePoster"}),ee("div",{children:"Make a Post"}),ee("textarea",{value:g,onChange:h=>y(h.target.value),placeholder:"Title"}),ee("textarea",{value:v,onChange:h=>_(h.target.value),placeholder:"Description"}),ee("input",{type:"file",onChange:f}),ee("br",{}),ee("button",{children:"Submit Post"}),ee("button",{onClick:()=>nN(Ru),children:"Logout"}),ee("br",{}),ee("br",{}),ee("br",{}),ee("br",{}),ee("div",{className:"postssection",children:d})]})})},HL=NC([{path:"/",element:ee(zL,{}),children:[{path:"/login",element:ee(BL,{})},{path:"/posts",element:ee(jL,{})}]}]);function WL(){return ee(IC,{router:HL})}Mh.createRoot(document.getElementById("root")).render(ee(hT.StrictMode,{children:ee(WL,{})}));
