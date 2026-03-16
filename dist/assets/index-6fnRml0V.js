var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(e&&(t=e(e=0)),t),s=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),c=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},l=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},u=(n,r,a)=>(a=n==null?{}:e(i(n)),l(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n)),d=e=>a.call(e,`module.exports`)?e[`module.exports`]:l(t({},`__esModule`,{value:!0}),e);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var f=s((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.iterator;function p(e){return typeof e!=`object`||!e?null:(e=f&&e[f]||e[`@@iterator`],typeof e==`function`?e:null)}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,g={};function _(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}_.prototype.isReactComponent={},_.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function v(){}v.prototype=_.prototype;function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}var b=y.prototype=new v;b.constructor=y,h(b,_.prototype),b.isPureReactComponent=!0;var x=Array.isArray,S={H:null,A:null,T:null,S:null,V:null},C=Object.prototype.hasOwnProperty;function ee(e,n,r,i,a,o){return r=o.ref,{$$typeof:t,type:e,key:n,ref:r===void 0?null:r,props:o}}function te(e,t){return ee(e.type,t,void 0,void 0,void 0,e.props)}function ne(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function re(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var w=/\/+/g;function T(e,t){return typeof e==`object`&&e&&e.key!=null?re(``+e.key):t.toString(36)}function ie(){}function ae(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(ie,ie):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function oe(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,oe(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+T(e,0):a,x(o)?(i=``,c!=null&&(i=c.replace(w,`$&/`)+`/`),oe(o,r,i,``,function(e){return e})):o!=null&&(ne(o)&&(o=te(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(w,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(x(e))for(var u=0;u<e.length;u++)a=e[u],s=l+T(a,u),c+=oe(a,r,i,s,o);else if(u=p(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+T(a,u++),c+=oe(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return oe(ae(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function se(e,t,n){if(e==null)return e;var r=[],i=0;return oe(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ce(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var le=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)};function E(){}e.Children={map:se,forEach:function(e,t,n){se(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return se(e,function(){t++}),t},toArray:function(e){return se(e,function(e){return e})||[]},only:function(e){if(!ne(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}},e.Component=_,e.Fragment=r,e.Profiler=a,e.PureComponent=y,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=S,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return S.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=h({},e.props),i=e.key,a=void 0;if(t!=null)for(o in t.ref!==void 0&&(a=void 0),t.key!==void 0&&(i=``+t.key),t)!C.call(t,o)||o===`key`||o===`__self`||o===`__source`||o===`ref`&&t.ref===void 0||(r[o]=t[o]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];r.children=s}return ee(e.type,i,void 0,void 0,a,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)C.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return ee(e,a,void 0,void 0,null,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=ne,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ce}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=S.T,n={};S.T=n;try{var r=e(),i=S.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(E,le)}catch(e){le(e)}finally{S.T=t}},e.unstable_useCacheRefresh=function(){return S.H.useCacheRefresh()},e.use=function(e){return S.H.use(e)},e.useActionState=function(e,t,n){return S.H.useActionState(e,t,n)},e.useCallback=function(e,t){return S.H.useCallback(e,t)},e.useContext=function(e){return S.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return S.H.useDeferredValue(e,t)},e.useEffect=function(e,t,n){var r=S.H;if(typeof n==`function`)throw Error(`useEffect CRUD overload is not enabled in this build of React.`);return r.useEffect(e,t)},e.useId=function(){return S.H.useId()},e.useImperativeHandle=function(e,t,n){return S.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return S.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return S.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return S.H.useMemo(e,t)},e.useOptimistic=function(e,t){return S.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return S.H.useReducer(e,t,n)},e.useRef=function(e){return S.H.useRef(e)},e.useState=function(e){return S.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return S.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return S.H.useTransition()},e.version=`19.1.1`})),p=s(((e,t)=>{t.exports=f()})),m=s((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,w());else{var t=n(l);t!==null&&ae(x,t.startTime-e)}}var S=!1,C=-1,ee=5,te=-1;function ne(){return g?!0:!(e.unstable_now()-te<ee)}function re(){if(g=!1,S){var t=e.unstable_now();te=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ne());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ae(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?w():S=!1}}}var w;if(typeof y==`function`)w=function(){y(re)};else if(typeof MessageChannel<`u`){var T=new MessageChannel,ie=T.port2;T.port1.onmessage=re,w=function(){ie.postMessage(null)}}else w=function(){_(re,0)};function ae(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):ee=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,ae(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,w()))),r},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),h=s(((e,t)=>{t.exports=m()})),g=s((e=>{var t=p();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.1.1`})),_=s(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=g()})),v=s((e=>{var t=h(),n=p(),r=_();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(o(e)!==e)throw Error(i(188))}function l(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return c(a),e;if(s===r)return c(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var l=!1,u=a.child;u;){if(u===n){l=!0,n=a,r=s;break}if(u===r){l=!0,r=a,n=s;break}u=u.sibling}if(!l){for(u=s.child;u;){if(u===n){l=!0,n=s,r=a;break}if(u===r){l=!0,r=s,n=a;break}u=u.sibling}if(!l)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function u(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=u(e),t!==null)return t;e=e.sibling}return null}var d=Object.assign,f=Symbol.for(`react.element`),m=Symbol.for(`react.transitional.element`),g=Symbol.for(`react.portal`),v=Symbol.for(`react.fragment`),y=Symbol.for(`react.strict_mode`),b=Symbol.for(`react.profiler`),x=Symbol.for(`react.provider`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),ee=Symbol.for(`react.forward_ref`),te=Symbol.for(`react.suspense`),ne=Symbol.for(`react.suspense_list`),re=Symbol.for(`react.memo`),w=Symbol.for(`react.lazy`),T=Symbol.for(`react.activity`),ie=Symbol.for(`react.memo_cache_sentinel`),ae=Symbol.iterator;function oe(e){return typeof e!=`object`||!e?null:(e=ae&&e[ae]||e[`@@iterator`],typeof e==`function`?e:null)}var se=Symbol.for(`react.client.reference`);function ce(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===se?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case v:return`Fragment`;case b:return`Profiler`;case y:return`StrictMode`;case te:return`Suspense`;case ne:return`SuspenseList`;case T:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case g:return`Portal`;case C:return(e.displayName||`Context`)+`.Provider`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case ee:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case re:return t=e.displayName||null,t===null?ce(e.type)||`Memo`:t;case w:t=e._payload,e=e._init;try{return ce(e(t))}catch{}}return null}var le=Array.isArray,E=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue={pending:!1,data:null,method:null,action:null},de=[],fe=-1;function pe(e){return{current:e}}function me(e){0>fe||(e.current=de[fe],de[fe]=null,fe--)}function O(e,t){fe++,de[fe]=e.current,e.current=t}var he=pe(null),ge=pe(null),_e=pe(null),ve=pe(null);function ye(e,t){switch(O(_e,t),O(ge,e),O(he,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Dd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Dd(t),e=Od(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}me(he),O(he,e)}function be(){me(he),me(ge),me(_e)}function xe(e){e.memoizedState!==null&&O(ve,e);var t=he.current,n=Od(t,e.type);t!==n&&(O(ge,e),O(he,n))}function Se(e){ge.current===e&&(me(he),me(ge)),ve.current===e&&(me(ve),Ff._currentValue=ue)}var Ce=Object.prototype.hasOwnProperty,we=t.unstable_scheduleCallback,Te=t.unstable_cancelCallback,Ee=t.unstable_shouldYield,De=t.unstable_requestPaint,Oe=t.unstable_now,ke=t.unstable_getCurrentPriorityLevel,Ae=t.unstable_ImmediatePriority,je=t.unstable_UserBlockingPriority,Me=t.unstable_NormalPriority,Ne=t.unstable_LowPriority,Pe=t.unstable_IdlePriority,Fe=t.log,Ie=t.unstable_setDisableYieldValue,Le=null,Re=null;function ze(e){if(typeof Fe==`function`&&Ie(e),Re&&typeof Re.setStrictMode==`function`)try{Re.setStrictMode(Le,e)}catch{}}var Be=Math.clz32?Math.clz32:Ue,Ve=Math.log,He=Math.LN2;function Ue(e){return e>>>=0,e===0?32:31-(Ve(e)/He|0)|0}var We=256,Ge=4194304;function Ke(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function qe(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Ke(n))):i=Ke(o):i=Ke(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Ke(n))):i=Ke(o)):i=Ke(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function Je(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ye(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xe(){var e=We;return We<<=1,!(We&4194048)&&(We=256),e}function Ze(){var e=Ge;return Ge<<=1,!(Ge&62914560)&&(Ge=4194304),e}function Qe(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function $e(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function et(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Be(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&tt(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function tt(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Be(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&4194090}function nt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Be(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function rt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function it(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function at(){var e=D.p;return e===0?(e=window.event,e===void 0?32:Xf(e.type)):e}function ot(e,t){var n=D.p;try{return D.p=e,t()}finally{D.p=n}}var st=Math.random().toString(36).slice(2),ct=`__reactFiber$`+st,lt=`__reactProps$`+st,ut=`__reactContainer$`+st,dt=`__reactEvents$`+st,ft=`__reactListeners$`+st,pt=`__reactHandles$`+st,mt=`__reactResources$`+st,ht=`__reactMarker$`+st;function gt(e){delete e[ct],delete e[lt],delete e[dt],delete e[ft],delete e[pt]}function _t(e){var t=e[ct];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ut]||n[ct]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Kd(e);e!==null;){if(n=e[ct])return n;e=Kd(e)}return t}e=n,n=e.parentNode}return null}function vt(e){if(e=e[ct]||e[ut]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function yt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function bt(e){var t=e[mt];return t||=e[mt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function xt(e){e[ht]=!0}var St=new Set,Ct={};function wt(e,t){Tt(e,t),Tt(e+`Capture`,t)}function Tt(e,t){for(Ct[e]=t,e=0;e<t.length;e++)St.add(t[e])}var Et=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Dt={},Ot={};function kt(e){return Ce.call(Ot,e)?!0:Ce.call(Dt,e)?!1:Et.test(e)?Ot[e]=!0:(Dt[e]=!0,!1)}function At(e,t,n){if(kt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function jt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Mt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}var Nt,Pt;function Ft(e){if(Nt===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Nt=t&&t[1]||``,Pt=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Nt+e+Pt}var It=!1;function Lt(e,t){if(!e||It)return``;It=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{It=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Ft(n):``}function Rt(e){switch(e.tag){case 26:case 27:case 5:return Ft(e.type);case 16:return Ft(`Lazy`);case 13:return Ft(`Suspense`);case 19:return Ft(`SuspenseList`);case 0:case 15:return Lt(e.type,!1);case 11:return Lt(e.type.render,!1);case 1:return Lt(e.type,!0);case 31:return Ft(`Activity`);default:return``}}function zt(e){try{var t=``;do t+=Rt(e),e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}function Bt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Vt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Ht(e){var t=Vt(e)?`checked`:`value`,n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=``+e[t];if(!e.hasOwnProperty(t)&&n!==void 0&&typeof n.get==`function`&&typeof n.set==`function`){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ut(e){e._valueTracker||=Ht(e)}function Wt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Vt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Gt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Kt=/[\n"\\]/g;function qt(e){return e.replace(Kt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Jt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Bt(t)):e.value!==``+Bt(t)&&(e.value=``+Bt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Xt(e,o,Bt(n)):Xt(e,o,Bt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Bt(s):e.removeAttribute(`name`)}function Yt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null))return;n=n==null?``:``+Bt(n),t=t==null?n:``+Bt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o)}function Xt(e,t,n){t===`number`&&Gt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Zt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Bt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Qt(e,t,n){if(t!=null&&(t=``+Bt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Bt(n)}function $t(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(le(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Bt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r)}function en(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var tn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function nn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||tn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function rn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&nn(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&nn(e,o,t[o])}function an(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var on=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),sn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function cn(e){return sn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}var ln=null;function un(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var dn=null,fn=null;function pn(e){var t=vt(e);if(t&&(e=t.stateNode)){var n=e[lt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Jt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+qt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[lt]||null;if(!a)throw Error(i(90));Jt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Wt(r)}break a;case`textarea`:Qt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Zt(e,!!n.multiple,t,!1)}}}var mn=!1;function hn(e,t,n){if(mn)return e(t,n);mn=!0;try{return e(t)}finally{if(mn=!1,(dn!==null||fn!==null)&&(cu(),dn&&(t=dn,e=fn,fn=dn=null,pn(t),e)))for(t=0;t<e.length;t++)pn(e[t])}}function gn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[lt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var _n=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),vn=!1;if(_n)try{var yn={};Object.defineProperty(yn,`passive`,{get:function(){vn=!0}}),window.addEventListener(`test`,yn,yn),window.removeEventListener(`test`,yn,yn)}catch{vn=!1}var bn=null,xn=null,Sn=null;function Cn(){if(Sn)return Sn;var e,t=xn,n=t.length,r,i=`value`in bn?bn.value:bn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Sn=i.slice(e,1<r?1-r:void 0)}function wn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Tn(){return!0}function En(){return!1}function Dn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Tn:En,this.isPropagationStopped=En,this}return d(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Tn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Tn)},persist:function(){},isPersistent:Tn}),t}var On={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kn=Dn(On),An=d({},On,{view:0,detail:0}),jn=Dn(An),Mn,Nn,Pn,Fn=d({},An,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Pn&&(Pn&&e.type===`mousemove`?(Mn=e.screenX-Pn.screenX,Nn=e.screenY-Pn.screenY):Nn=Mn=0,Pn=e),Mn)},movementY:function(e){return`movementY`in e?e.movementY:Nn}}),In=Dn(Fn),Ln=Dn(d({},Fn,{dataTransfer:0})),Rn=Dn(d({},An,{relatedTarget:0})),zn=Dn(d({},On,{animationName:0,elapsedTime:0,pseudoElement:0})),Bn=Dn(d({},On,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Vn=Dn(d({},On,{data:0})),Hn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Un={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Wn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Gn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Wn[e])?!!t[e]:!1}function Kn(){return Gn}var qn=Dn(d({},An,{key:function(e){if(e.key){var t=Hn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=wn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Un[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kn,charCode:function(e){return e.type===`keypress`?wn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?wn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Jn=Dn(d({},Fn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Yn=Dn(d({},An,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kn})),Xn=Dn(d({},On,{propertyName:0,elapsedTime:0,pseudoElement:0})),Zn=Dn(d({},Fn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Qn=Dn(d({},On,{newState:0,oldState:0})),$n=[9,13,27,32],er=_n&&`CompositionEvent`in window,tr=null;_n&&`documentMode`in document&&(tr=document.documentMode);var nr=_n&&`TextEvent`in window&&!tr,rr=_n&&(!er||tr&&8<tr&&11>=tr),ir=` `,ar=!1;function or(e,t){switch(e){case`keyup`:return $n.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function sr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var cr=!1;function lr(e,t){switch(e){case`compositionend`:return sr(t);case`keypress`:return t.which===32?(ar=!0,ir):null;case`textInput`:return e=t.data,e===ir&&ar?null:e;default:return null}}function ur(e,t){if(cr)return e===`compositionend`||!er&&or(e,t)?(e=Cn(),Sn=xn=bn=null,cr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return rr&&t.locale!==`ko`?null:t.data;default:return null}}var dr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!dr[e.type]:t===`textarea`}function pr(e,t,n,r){dn?fn?fn.push(r):fn=[r]:dn=r,t=pd(t,`onChange`),0<t.length&&(n=new kn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var mr=null,hr=null;function gr(e){od(e,0)}function _r(e){if(Wt(yt(e)))return e}function vr(e,t){if(e===`change`)return t}var yr=!1;if(_n){var br;if(_n){var xr=`oninput`in document;if(!xr){var Sr=document.createElement(`div`);Sr.setAttribute(`oninput`,`return;`),xr=typeof Sr.oninput==`function`}br=xr}else br=!1;yr=br&&(!document.documentMode||9<document.documentMode)}function Cr(){mr&&(mr.detachEvent(`onpropertychange`,wr),hr=mr=null)}function wr(e){if(e.propertyName===`value`&&_r(hr)){var t=[];pr(t,hr,e,un(e)),hn(gr,t)}}function Tr(e,t,n){e===`focusin`?(Cr(),mr=t,hr=n,mr.attachEvent(`onpropertychange`,wr)):e===`focusout`&&Cr()}function Er(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return _r(hr)}function Dr(e,t){if(e===`click`)return _r(t)}function Or(e,t){if(e===`input`||e===`change`)return _r(t)}function kr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Ar=typeof Object.is==`function`?Object.is:kr;function jr(e,t){if(Ar(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ce.call(t,i)||!Ar(e[i],t[i]))return!1}return!0}function Mr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Nr(e,t){var n=Mr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Mr(n)}}function Pr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Pr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Fr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Gt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Gt(e.document)}return t}function Ir(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Lr=_n&&`documentMode`in document&&11>=document.documentMode,Rr=null,zr=null,Br=null,Vr=!1;function Hr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vr||Rr==null||Rr!==Gt(r)||(r=Rr,`selectionStart`in r&&Ir(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Br&&jr(Br,r)||(Br=r,r=pd(zr,`onSelect`),0<r.length&&(t=new kn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Rr)))}function Ur(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Wr={animationend:Ur(`Animation`,`AnimationEnd`),animationiteration:Ur(`Animation`,`AnimationIteration`),animationstart:Ur(`Animation`,`AnimationStart`),transitionrun:Ur(`Transition`,`TransitionRun`),transitionstart:Ur(`Transition`,`TransitionStart`),transitioncancel:Ur(`Transition`,`TransitionCancel`),transitionend:Ur(`Transition`,`TransitionEnd`)},Gr={},Kr={};_n&&(Kr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Wr.animationend.animation,delete Wr.animationiteration.animation,delete Wr.animationstart.animation),`TransitionEvent`in window||delete Wr.transitionend.transition);function qr(e){if(Gr[e])return Gr[e];if(!Wr[e])return e;var t=Wr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Kr)return Gr[e]=t[n];return e}var Jr=qr(`animationend`),k=qr(`animationiteration`),Yr=qr(`animationstart`),Xr=qr(`transitionrun`),Zr=qr(`transitionstart`),Qr=qr(`transitioncancel`),$r=qr(`transitionend`),ei=new Map,ti=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ti.push(`scrollEnd`);function ni(e,t){ei.set(e,t),wt(t,[e])}var ri=new WeakMap;function ii(e,t){if(typeof e==`object`&&e){var n=ri.get(e);return n===void 0?(t={value:e,source:t,stack:zt(t)},ri.set(e,t),t):n}return{value:e,source:t,stack:zt(t)}}var ai=[],oi=0,si=0;function ci(){for(var e=oi,t=si=oi=0;t<e;){var n=ai[t];ai[t++]=null;var r=ai[t];ai[t++]=null;var i=ai[t];ai[t++]=null;var a=ai[t];if(ai[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&fi(n,i,a)}}function li(e,t,n,r){ai[oi++]=e,ai[oi++]=t,ai[oi++]=n,ai[oi++]=r,si|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ui(e,t,n,r){return li(e,t,n,r),pi(e)}function di(e,t){return li(e,null,null,t),pi(e)}function fi(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Be(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function pi(e){if(50<$l)throw $l=0,eu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var mi={};function hi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function A(e,t,n,r){return new hi(e,t,n,r)}function gi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _i(e,t){var n=e.alternate;return n===null?(n=A(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function vi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function yi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)gi(e)&&(s=1);else if(typeof e==`string`)s=Tf(e,n,he.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case T:return e=A(31,n,t,a),e.elementType=T,e.lanes=o,e;case v:return bi(n.children,a,o,t);case y:s=8,a|=24;break;case b:return e=A(12,n,t,a|2),e.elementType=b,e.lanes=o,e;case te:return e=A(13,n,t,a),e.elementType=te,e.lanes=o,e;case ne:return e=A(19,n,t,a),e.elementType=ne,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case x:case C:s=10;break a;case S:s=9;break a;case ee:s=11;break a;case re:s=14;break a;case w:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=A(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function bi(e,t,n,r){return e=A(7,e,r,t),e.lanes=n,e}function xi(e,t,n){return e=A(6,e,null,t),e.lanes=n,e}function Si(e,t,n){return t=A(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ci=[],wi=0,Ti=null,Ei=0,Di=[],Oi=0,ki=null,Ai=1,ji=``;function Mi(e,t){Ci[wi++]=Ei,Ci[wi++]=Ti,Ti=e,Ei=t}function Ni(e,t,n){Di[Oi++]=Ai,Di[Oi++]=ji,Di[Oi++]=ki,ki=e;var r=Ai;e=ji;var i=32-Be(r)-1;r&=~(1<<i),n+=1;var a=32-Be(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ai=1<<32-Be(t)+i|n<<i|r,ji=a+e}else Ai=1<<a|n<<i|r,ji=e}function Pi(e){e.return!==null&&(Mi(e,1),Ni(e,1,0))}function Fi(e){for(;e===Ti;)Ti=Ci[--wi],Ci[wi]=null,Ei=Ci[--wi],Ci[wi]=null;for(;e===ki;)ki=Di[--Oi],Di[Oi]=null,ji=Di[--Oi],Di[Oi]=null,Ai=Di[--Oi],Di[Oi]=null}var Ii=null,j=null,M=!1,Li=null,Ri=!1,zi=Error(i(519));function Bi(e){throw Gi(ii(Error(i(418,``)),e)),zi}function Vi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[ct]=e,t[lt]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<id.length;n++)Q(id[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Yt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),Ut(t);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),$t(t,r.value,r.defaultValue,r.children),Ut(t)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||yd(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=bd),t=!0):t=!1,t||Bi(e)}function N(e){for(Ii=e.return;Ii;)switch(Ii.tag){case 5:case 13:Ri=!1;return;case 27:case 3:Ri=!0;return;default:Ii=Ii.return}}function Hi(e){if(e!==Ii)return!1;if(!M)return N(e),M=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||kd(e.type,e.memoizedProps)),n=!n),n&&j&&Bi(e),N(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));a:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n===`/$`){if(t===0){j=Wd(e.nextSibling);break a}t--}else n!==`$`&&n!==`$!`&&n!==`$?`||t++;e=e.nextSibling}j=null}}else t===27?(t=j,Ld(e.type)?(e=Gd,Gd=null,j=e):j=t):j=Ii?Wd(e.stateNode.nextSibling):null;return!0}function Ui(){j=Ii=null,M=!1}function Wi(){var e=Li;return e!==null&&(Bl===null?Bl=e:Bl.push.apply(Bl,e),Li=null),e}function Gi(e){Li===null?Li=[e]:Li.push(e)}var Ki=pe(null),qi=null,Ji=null;function Yi(e,t,n){O(Ki,t._currentValue),t._currentValue=n}function Xi(e){e._currentValue=Ki.current,me(Ki)}function Zi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Qi(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Zi(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Zi(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function $i(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Ar(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===ve.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Ff]:e.push(Ff))}a=a.return}e!==null&&Qi(t,e,n,r),t.flags|=262144}function ea(e){for(e=e.firstContext;e!==null;){if(!Ar(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ta(e){qi=e,Ji=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function na(e){return ia(qi,e)}function ra(e,t){return qi===null&&ta(e),ia(e,t)}function ia(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ji===null){if(e===null)throw Error(i(308));Ji=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ji=Ji.next=t;return n}var aa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},oa=t.unstable_scheduleCallback,sa=t.unstable_NormalPriority,ca={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function la(){return{controller:new aa,data:new Map,refCount:0}}function ua(e){e.refCount--,e.refCount===0&&oa(sa,function(){e.controller.abort()})}var da=null,fa=0,pa=0,ma=null;function ha(e,t){if(da===null){var n=da=[];fa=0,pa=Qu(),ma={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return fa++,t.then(ga,ga),t}function ga(){if(--fa===0&&da!==null){ma!==null&&(ma.status=`fulfilled`);var e=da;da=null,pa=0,ma=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function _a(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var P=E.S;E.S=function(e,t){typeof t==`object`&&t&&typeof t.then==`function`&&ha(e,t),P!==null&&P(e,t)};var va=pe(null);function ya(){var e=va.current;return e===null?K.pooledCache:e}function ba(e,t){t===null?O(va,va.current):O(va,t.pool)}function xa(){var e=ya();return e===null?null:{parent:ca._currentValue,pool:e}}var F=Error(i(460)),Sa=Error(i(474)),Ca=Error(i(542)),wa={then:function(){}};function Ta(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Ea(){}function Da(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Ea,Ea),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Aa(e),e;default:if(typeof t.status==`string`)t.then(Ea,Ea);else{if(e=K,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Aa(e),e}throw Oa=t,F}}var Oa=null;function ka(){if(Oa===null)throw Error(i(459));var e=Oa;return Oa=null,e}function Aa(e){if(e===F||e===Ca)throw Error(i(483))}var ja=!1;function Ma(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Na(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Pa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Fa(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=pi(e),fi(e,null,n),t}return li(e,r,t,n),pi(e)}function Ia(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,nt(e,n)}}function La(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ra=!1;function za(){if(Ra){var e=ma;if(e!==null)throw e}}function Ba(e,t,n,r){Ra=!1;var i=e.updateQueue;ja=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var f=i.baseState;o=0,u=l=c=null,s=a;do{var p=s.lane&-536870913,m=p!==s.lane;if(m?(J&p)===p:(r&p)===p){p!==0&&p===pa&&(Ra=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var h=e,g=s;p=t;var _=n;switch(g.tag){case 1:if(h=g.payload,typeof h==`function`){f=h.call(_,f,p);break a}f=h;break a;case 3:h.flags=h.flags&-65537|128;case 0:if(h=g.payload,p=typeof h==`function`?h.call(_,f,p):h,p==null)break a;f=d({},f,p);break a;case 2:ja=!0}}p=s.callback,p!==null&&(e.flags|=64,m&&(e.flags|=8192),m=i.callbacks,m===null?i.callbacks=[p]:m.push(p))}else m={lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=m,c=f):u=u.next=m,o|=p;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;m=s,s=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);u===null&&(c=f),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Pl|=o,e.lanes=o,e.memoizedState=f}}function I(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function Va(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)I(n[e],t)}var Ha=pe(null),Ua=pe(0);function Wa(e,t){e=Nl,O(Ua,e),O(Ha,t),Nl=e|t.baseLanes}function Ga(){O(Ua,Nl),O(Ha,Ha.current)}function Ka(){Nl=Ua.current,me(Ha),me(Ua)}var qa=0,L=null,R=null,Ja=null,Ya=!1,Xa=!1,Za=!1,Qa=0,$a=0,eo=null,to=0;function z(){throw Error(i(321))}function no(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ar(e[n],t[n]))return!1;return!0}function B(e,t,n,r,i,a){return qa=a,L=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,E.H=e===null||e.memoizedState===null?ys:bs,Za=!1,a=n(r,i),Za=!1,Xa&&(a=io(t,n,r,i)),ro(e),a}function ro(e){E.H=vs;var t=R!==null&&R.next!==null;if(qa=0,Ja=R=L=null,Ya=!1,$a=0,eo=null,t)throw Error(i(300));e===null||V||(e=e.dependencies,e!==null&&ea(e)&&(V=!0))}function io(e,t,n,r){L=e;var a=0;do{if(Xa&&(eo=null),$a=0,Xa=!1,25<=a)throw Error(i(301));if(a+=1,Ja=R=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}E.H=xs,o=t(n,r)}while(Xa);return o}function ao(){var e=E.H,t=e.useState()[0];return t=typeof t.then==`function`?po(t):t,e=e.useState()[0],(R===null?null:R.memoizedState)!==e&&(L.flags|=1024),t}function oo(){var e=Qa!==0;return Qa=0,e}function so(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function co(e){if(Ya){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ya=!1}qa=0,Ja=R=L=null,Xa=!1,$a=Qa=0,eo=null}function lo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ja===null?L.memoizedState=Ja=e:Ja=Ja.next=e,Ja}function uo(){if(R===null){var e=L.alternate;e=e===null?null:e.memoizedState}else e=R.next;var t=Ja===null?L.memoizedState:Ja.next;if(t!==null)Ja=t,R=e;else{if(e===null)throw L.alternate===null?Error(i(467)):Error(i(310));R=e,e={memoizedState:R.memoizedState,baseState:R.baseState,baseQueue:R.baseQueue,queue:R.queue,next:null},Ja===null?L.memoizedState=Ja=e:Ja=Ja.next=e}return Ja}function fo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function po(e){var t=$a;return $a+=1,eo===null&&(eo=[]),e=Da(eo,e,t),t=L,(Ja===null?t.memoizedState:Ja.next)===null&&(t=t.alternate,E.H=t===null||t.memoizedState===null?ys:bs),e}function mo(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return po(e);if(e.$$typeof===C)return na(e)}throw Error(i(438,String(e)))}function ho(e){var t=null,n=L.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=L.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=fo(),L.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ie;return t.index++,n}function go(e,t){return typeof t==`function`?t(e):t}function _o(e){return vo(uo(),R,e)}function vo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(qa&f)===f:(J&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===pa&&(d=!0);else if((qa&p)===p){u=u.next,p===pa&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,L.lanes|=p,Pl|=p;f=u.action,Za&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,L.lanes|=f,Pl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Ar(o,e.memoizedState)&&(V=!0,d&&(n=ma,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function yo(e){var t=uo(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Ar(o,t.memoizedState)||(V=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function bo(e,t,n){var r=L,a=uo(),o=M;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Ar((R||a).memoizedState,n);if(s&&(a.memoizedState=n,V=!0),a=a.queue,Wo(2048,8,Co.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||Ja!==null&&Ja.memoizedState.tag&1){if(r.flags|=2048,Bo(9,Vo(),So.bind(null,r,a,n,t),null),K===null)throw Error(i(349));o||qa&124||xo(r,t,n)}return n}function xo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=L.updateQueue,t===null?(t=fo(),L.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function So(e,t,n,r){t.value=n,t.getSnapshot=r,wo(t)&&To(e)}function Co(e,t,n){return n(function(){wo(t)&&To(e)})}function wo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ar(e,n)}catch{return!0}}function To(e){var t=di(e,2);t!==null&&ru(t,e,2)}function Eo(e){var t=lo();if(typeof e==`function`){var n=e;if(e=n(),Za){ze(!0);try{n()}finally{ze(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:go,lastRenderedState:e},t}function Do(e,t,n,r){return e.baseState=n,vo(e,R,typeof r==`function`?r:go)}function Oo(e,t,n,r,a){if(hs(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};E.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,ko(t,o)):(o.next=n.next,t.pending=n.next=o)}}function ko(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=E.T,o={};E.T=o;try{var s=n(i,r),c=E.S;c!==null&&c(o,s),Ao(e,t,s)}catch(n){Mo(e,t,n)}finally{E.T=a}}else try{a=n(i,r),Ao(e,t,a)}catch(n){Mo(e,t,n)}}function Ao(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){jo(e,t,n)},function(n){return Mo(e,t,n)}):jo(e,t,n)}function jo(e,t,n){t.status=`fulfilled`,t.value=n,No(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,ko(e,n)))}function Mo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,No(t),t=t.next;while(t!==r)}e.action=null}function No(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Po(e,t){return t}function Fo(e,t){if(M){var n=K.formState;if(n!==null){a:{var r=L;if(M){if(j){b:{for(var i=j,a=Ri;i.nodeType!==8;){if(!a){i=null;break b}if(i=Wd(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){j=Wd(i.nextSibling),r=i.data===`F!`;break a}}Bi(r)}r=!1}r&&(t=n[0])}}return n=lo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Po,lastRenderedState:t},n.queue=r,n=fs.bind(null,L,r),r.dispatch=n,r=Eo(!1),a=ms.bind(null,L,!1,r.queue),r=lo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Oo.bind(null,L,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function Io(e){return Lo(uo(),R,e)}function Lo(e,t,n){if(t=vo(e,t,Po)[0],e=_o(go)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=po(t)}catch(e){throw e===F?Ca:e}else r=t;t=uo();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(L.flags|=2048,Bo(9,Vo(),Ro.bind(null,i,n),null)),[r,a,e]}function Ro(e,t){e.action=t}function zo(e){var t=uo(),n=R;if(n!==null)return Lo(t,n,e);uo(),t=t.memoizedState,n=uo();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function Bo(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=L.updateQueue,t===null&&(t=fo(),L.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Vo(){return{destroy:void 0,resource:void 0}}function Ho(){return uo().memoizedState}function Uo(e,t,n,r){var i=lo();r=r===void 0?null:r,L.flags|=e,i.memoizedState=Bo(1|t,Vo(),n,r)}function Wo(e,t,n,r){var i=uo();r=r===void 0?null:r;var a=i.memoizedState.inst;R!==null&&r!==null&&no(r,R.memoizedState.deps)?i.memoizedState=Bo(t,a,n,r):(L.flags|=e,i.memoizedState=Bo(1|t,a,n,r))}function Go(e,t){Uo(8390656,8,e,t)}function Ko(e,t){Wo(2048,8,e,t)}function qo(e,t){return Wo(4,2,e,t)}function Jo(e,t){return Wo(4,4,e,t)}function Yo(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Xo(e,t,n){n=n==null?null:n.concat([e]),Wo(4,4,Yo.bind(null,t,e),n)}function Zo(){}function Qo(e,t){var n=uo();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&no(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function $o(e,t){var n=uo();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&no(t,r[1]))return r[0];if(r=e(),Za){ze(!0);try{e()}finally{ze(!1)}}return n.memoizedState=[r,t],r}function es(e,t,n){return n===void 0||qa&1073741824?e.memoizedState=t:(e.memoizedState=n,e=nu(),L.lanes|=e,Pl|=e,n)}function ts(e,t,n,r){return Ar(n,t)?n:Ha.current===null?qa&42?(e=nu(),L.lanes|=e,Pl|=e,t):(V=!0,e.memoizedState=n):(e=es(e,n,r),Ar(e,t)||(V=!0),e)}function ns(e,t,n,r,i){var a=D.p;D.p=a!==0&&8>a?a:8;var o=E.T,s={};E.T=s,ms(e,!1,t,n);try{var c=i(),l=E.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?ps(e,t,_a(c,r),tu(e)):ps(e,t,r,tu(e))}catch(n){ps(e,t,{then:function(){},status:`rejected`,reason:n},tu())}finally{D.p=a,E.T=o}}function rs(){}function is(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=as(e).queue;ns(e,a,t,ue,n===null?rs:function(){return os(e),n(r)})}function as(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ue,baseState:ue,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:go,lastRenderedState:ue},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:go,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function os(e){var t=as(e).next.queue;ps(e,t,{},tu())}function ss(){return na(Ff)}function cs(){return uo().memoizedState}function ls(){return uo().memoizedState}function us(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=tu();e=Pa(n);var r=Fa(t,e,n);r!==null&&(ru(r,t,n),Ia(r,t,n)),t={cache:la()},e.payload=t;return}t=t.return}}function ds(e,t,n){var r=tu();n={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},hs(e)?gs(t,n):(n=ui(e,t,n,r),n!==null&&(ru(n,e,r),_s(n,t,r)))}function fs(e,t,n){ps(e,t,n,tu())}function ps(e,t,n,r){var i={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(hs(e))gs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Ar(s,o))return li(e,t,i,0),K===null&&ci(),!1}catch{}if(n=ui(e,t,i,r),n!==null)return ru(n,e,r),_s(n,t,r),!0}return!1}function ms(e,t,n,r){if(r={lane:2,revertLane:Qu(),action:r,hasEagerState:!1,eagerState:null,next:null},hs(e)){if(t)throw Error(i(479))}else t=ui(e,n,r,2),t!==null&&ru(t,e,2)}function hs(e){var t=e.alternate;return e===L||t!==null&&t===L}function gs(e,t){Xa=Ya=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function _s(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,nt(e,n)}}var vs={readContext:na,use:mo,useCallback:z,useContext:z,useEffect:z,useImperativeHandle:z,useLayoutEffect:z,useInsertionEffect:z,useMemo:z,useReducer:z,useRef:z,useState:z,useDebugValue:z,useDeferredValue:z,useTransition:z,useSyncExternalStore:z,useId:z,useHostTransitionStatus:z,useFormState:z,useActionState:z,useOptimistic:z,useMemoCache:z,useCacheRefresh:z},ys={readContext:na,use:mo,useCallback:function(e,t){return lo().memoizedState=[e,t===void 0?null:t],e},useContext:na,useEffect:Go,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),Uo(4194308,4,Yo.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Uo(4194308,4,e,t)},useInsertionEffect:function(e,t){Uo(4,2,e,t)},useMemo:function(e,t){var n=lo();t=t===void 0?null:t;var r=e();if(Za){ze(!0);try{e()}finally{ze(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=lo();if(n!==void 0){var i=n(t);if(Za){ze(!0);try{n(t)}finally{ze(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=ds.bind(null,L,e),[r.memoizedState,e]},useRef:function(e){var t=lo();return e={current:e},t.memoizedState=e},useState:function(e){e=Eo(e);var t=e.queue,n=fs.bind(null,L,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Zo,useDeferredValue:function(e,t){return es(lo(),e,t)},useTransition:function(){var e=Eo(!1);return e=ns.bind(null,L,e.queue,!0,!1),lo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=L,a=lo();if(M){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),K===null)throw Error(i(349));J&124||xo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,Go(Co.bind(null,r,o,e),[e]),r.flags|=2048,Bo(9,Vo(),So.bind(null,r,o,n,t),null),n},useId:function(){var e=lo(),t=K.identifierPrefix;if(M){var n=ji,r=Ai;n=(r&~(1<<32-Be(r)-1)).toString(32)+n,t=`«`+t+`R`+n,n=Qa++,0<n&&(t+=`H`+n.toString(32)),t+=`»`}else n=to++,t=`«`+t+`r`+n.toString(32)+`»`;return e.memoizedState=t},useHostTransitionStatus:ss,useFormState:Fo,useActionState:Fo,useOptimistic:function(e){var t=lo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=ms.bind(null,L,!0,n),n.dispatch=t,[e,t]},useMemoCache:ho,useCacheRefresh:function(){return lo().memoizedState=us.bind(null,L)}},bs={readContext:na,use:mo,useCallback:Qo,useContext:na,useEffect:Ko,useImperativeHandle:Xo,useInsertionEffect:qo,useLayoutEffect:Jo,useMemo:$o,useReducer:_o,useRef:Ho,useState:function(){return _o(go)},useDebugValue:Zo,useDeferredValue:function(e,t){return ts(uo(),R.memoizedState,e,t)},useTransition:function(){var e=_o(go)[0],t=uo().memoizedState;return[typeof e==`boolean`?e:po(e),t]},useSyncExternalStore:bo,useId:cs,useHostTransitionStatus:ss,useFormState:Io,useActionState:Io,useOptimistic:function(e,t){return Do(uo(),R,e,t)},useMemoCache:ho,useCacheRefresh:ls},xs={readContext:na,use:mo,useCallback:Qo,useContext:na,useEffect:Ko,useImperativeHandle:Xo,useInsertionEffect:qo,useLayoutEffect:Jo,useMemo:$o,useReducer:yo,useRef:Ho,useState:function(){return yo(go)},useDebugValue:Zo,useDeferredValue:function(e,t){var n=uo();return R===null?es(n,e,t):ts(n,R.memoizedState,e,t)},useTransition:function(){var e=yo(go)[0],t=uo().memoizedState;return[typeof e==`boolean`?e:po(e),t]},useSyncExternalStore:bo,useId:cs,useHostTransitionStatus:ss,useFormState:zo,useActionState:zo,useOptimistic:function(e,t){var n=uo();return R===null?(n.baseState=e,[e,n.queue.dispatch]):Do(n,R,e,t)},useMemoCache:ho,useCacheRefresh:ls},Ss=null,Cs=0;function ws(e){var t=Cs;return Cs+=1,Ss===null&&(Ss=[]),Da(Ss,e,t)}function Ts(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Es(e,t){throw t.$$typeof===f?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ds(e){var t=e._init;return t(e._payload)}function Os(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=_i(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=xi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===v?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===w&&Ds(i)===t.type)?(t=a(t,n.props),Ts(t,n),t.return=e,t):(t=yi(n.type,n.key,n.props,null,e.mode,r),Ts(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Si(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=bi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=xi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case m:return n=yi(t.type,t.key,t.props,null,e.mode,n),Ts(n,t),n.return=e,n;case g:return t=Si(t,e.mode,n),t.return=e,t;case w:var r=t._init;return t=r(t._payload),f(e,t,n)}if(le(t)||oe(t))return t=bi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,ws(t),n);if(t.$$typeof===C)return f(e,ra(e,t),n);Es(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case m:return n.key===i?l(e,t,n,r):null;case g:return n.key===i?u(e,t,n,r):null;case w:return i=n._init,n=i(n._payload),p(e,t,n,r)}if(le(n)||oe(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,ws(n),r);if(n.$$typeof===C)return p(e,t,ra(e,n),r);Es(e,n)}return null}function h(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case m:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case g:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case w:var a=r._init;return r=a(r._payload),h(e,t,n,r,i)}if(le(r)||oe(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return h(e,t,n,ws(r),i);if(r.$$typeof===C)return h(e,t,n,ra(t,r),i);Es(t,r)}return null}function _(i,a,s,c){for(var l=null,u=null,d=a,m=a=0,g=null;d!==null&&m<s.length;m++){d.index>m?(g=d,d=null):g=d.sibling;var _=p(i,d,s[m],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,m),u===null?l=_:u.sibling=_,u=_,d=g}if(m===s.length)return n(i,d),M&&Mi(i,m),l;if(d===null){for(;m<s.length;m++)d=f(i,s[m],c),d!==null&&(a=o(d,a,m),u===null?l=d:u.sibling=d,u=d);return M&&Mi(i,m),l}for(d=r(d);m<s.length;m++)g=h(d,i,m,s[m],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?m:g.key),a=o(g,a,m),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),M&&Mi(i,m),l}function y(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,m=s,g=s=0,_=null,v=c.next();m!==null&&!v.done;g++,v=c.next()){m.index>g?(_=m,m=null):_=m.sibling;var y=p(a,m,v.value,l);if(y===null){m===null&&(m=_);break}e&&m&&y.alternate===null&&t(a,m),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,m=_}if(v.done)return n(a,m),M&&Mi(a,g),u;if(m===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return M&&Mi(a,g),u}for(m=r(m);!v.done;g++,v=c.next())v=h(m,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&m.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&m.forEach(function(e){return t(a,e)}),M&&Mi(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===v&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case m:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===v){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===w&&Ds(l)===r.type){n(e,r.sibling),c=a(r,o.props),Ts(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===v?(c=bi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=yi(o.type,o.key,o.props,null,e.mode,c),Ts(c,o),c.return=e,e=c)}return s(e);case g:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=Si(o,e.mode,c),c.return=e,e=c}return s(e);case w:return l=o._init,o=l(o._payload),b(e,r,o,c)}if(le(o))return _(e,r,o,c);if(oe(o)){if(l=oe(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),y(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,ws(o),c);if(o.$$typeof===C)return b(e,r,ra(e,o),c);Es(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=xi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Cs=0;var i=b(e,t,n,r);return Ss=null,i}catch(t){if(t===F||t===Ca)throw t;var a=A(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var ks=Os(!0),As=Os(!1),js=pe(null),Ms=null;function Ns(e){var t=e.alternate;O(Ls,Ls.current&1),O(js,e),Ms===null&&(t===null||Ha.current!==null||t.memoizedState!==null)&&(Ms=e)}function Ps(e){if(e.tag===22){if(O(Ls,Ls.current),O(js,e),Ms===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Ms=e)}}else Fs(e)}function Fs(){O(Ls,Ls.current),O(js,js.current)}function Is(e){me(js),Ms===e&&(Ms=null),me(Ls)}var Ls=pe(0);function Rs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data===`$?`||Hd(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function zs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:d({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Bs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=tu(),i=Pa(r);i.payload=t,n!=null&&(i.callback=n),t=Fa(e,i,r),t!==null&&(ru(t,e,r),Ia(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=tu(),i=Pa(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Fa(e,i,r),t!==null&&(ru(t,e,r),Ia(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=tu(),r=Pa(n);r.tag=2,t!=null&&(r.callback=t),t=Fa(e,r,n),t!==null&&(ru(t,e,n),Ia(t,e,n))}};function Vs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!jr(n,r)||!jr(i,a):!0}function Hs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Bs.enqueueReplaceState(t,t.state,null)}function Us(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=d({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}var Ws=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)};function Gs(e){Ws(e)}function Ks(e){console.error(e)}function qs(e){Ws(e)}function Js(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Ys(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Xs(e,t,n){return n=Pa(n),n.tag=3,n.payload={element:null},n.callback=function(){Js(e,t)},n}function Zs(e){return e=Pa(e),e.tag=3,e}function Qs(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Ys(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Ys(t,n,r),typeof i!=`function`&&(Gl===null?Gl=new Set([this]):Gl.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function $s(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&$i(t,n,a,!0),n=js.current,n!==null){switch(n.tag){case 13:return Ms===null?mu():n.alternate===null&&X===0&&(X=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===wa?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Mu(e,r,a)),!1;case 22:return n.flags|=65536,r===wa?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Mu(e,r,a)),!1}throw Error(i(435,n.tag))}return Mu(e,r,a),mu(),!1}if(M)return t=js.current,t===null?(r!==zi&&(t=Error(i(423),{cause:r}),Gi(ii(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=ii(r,n),a=Xs(e.stateNode,r,a),La(e,a),X!==4&&(X=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==zi&&(e=Error(i(422),{cause:r}),Gi(ii(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=ii(o,n),zl===null?zl=[o]:zl.push(o),X!==4&&(X=2),t===null)return!0;r=ii(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Xs(n.stateNode,r,e),La(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(Gl===null||!Gl.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Zs(a),Qs(a,e,n,r),La(n,a),!1}n=n.return}while(n!==null);return!1}var ec=Error(i(461)),V=!1;function tc(e,t,n,r){t.child=e===null?As(t,null,n,r):ks(t,e.child,n,r)}function nc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return ta(t),r=B(e,t,n,o,a,i),s=oo(),e!==null&&!V?(so(e,t,i),Sc(e,t,i)):(M&&s&&Pi(t),t.flags|=1,tc(e,t,r,i),t.child)}function rc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!gi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,ic(e,t,a,r,i)):(e=yi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Cc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?jr:n,n(o,r)&&e.ref===t.ref)return Sc(e,t,i)}return t.flags|=1,e=_i(a,r),e.ref=t.ref,e.return=t,t.child=e}function ic(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(jr(a,r)&&e.ref===t.ref)if(V=!1,t.pendingProps=r=a,Cc(e,i))e.flags&131072&&(V=!0);else return t.lanes=e.lanes,Sc(e,t,i)}return cc(e,t,n,r,i)}function ac(e,t,n){var r=t.pendingProps,i=r.children,a=e===null?null:e.memoizedState;if(r.mode===`hidden`){if(t.flags&128){if(r=a===null?n:a.baseLanes|n,e!==null){for(i=t.child=e.child,a=0;i!==null;)a=a|i.lanes|i.childLanes,i=i.sibling;t.childLanes=a&~r}else t.childLanes=0,t.child=null;return oc(e,t,r,n)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ba(t,a===null?null:a.cachePool),a===null?Ga():Wa(t,a),Ps(t);else return t.lanes=t.childLanes=536870912,oc(e,t,a===null?n:a.baseLanes|n,n)}else a===null?(e!==null&&ba(t,null),Ga(),Fs(t)):(ba(t,a.cachePool),Wa(t,a),Fs(t),t.memoizedState=null);return tc(e,t,i,n),t.child}function oc(e,t,n,r){var i=ya();return i=i===null?null:{parent:ca._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},e!==null&&ba(t,null),Ga(),Ps(t),e!==null&&$i(e,t,r,!0),null}function sc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function cc(e,t,n,r,i){return ta(t),n=B(e,t,n,r,void 0,i),r=oo(),e!==null&&!V?(so(e,t,i),Sc(e,t,i)):(M&&r&&Pi(t),t.flags|=1,tc(e,t,n,i),t.child)}function lc(e,t,n,r,i,a){return ta(t),t.updateQueue=null,n=io(t,r,n,i),ro(e),r=oo(),e!==null&&!V?(so(e,t,a),Sc(e,t,a)):(M&&r&&Pi(t),t.flags|=1,tc(e,t,n,a),t.child)}function uc(e,t,n,r,i){if(ta(t),t.stateNode===null){var a=mi,o=n.contextType;typeof o==`object`&&o&&(a=na(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Bs,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ma(t),o=n.contextType,a.context=typeof o==`object`&&o?na(o):mi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(zs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Bs.enqueueReplaceState(a,a.state,null),Ba(t,r,a,i),za(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Us(n,s);a.props=c;var l=a.context,u=n.contextType;o=mi,typeof u==`object`&&u&&(o=na(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Hs(t,a,r,o),ja=!1;var f=t.memoizedState;a.state=f,Ba(t,r,a,i),za(),l=t.memoizedState,s||f!==l||ja?(typeof d==`function`&&(zs(t,n,d,r),l=t.memoizedState),(c=ja||Vs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Na(e,t),o=t.memoizedProps,u=Us(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=mi,typeof l==`object`&&l&&(c=na(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Hs(t,a,r,c),ja=!1,f=t.memoizedState,a.state=f,Ba(t,r,a,i),za();var p=t.memoizedState;o!==d||f!==p||ja||e!==null&&e.dependencies!==null&&ea(e.dependencies)?(typeof s==`function`&&(zs(t,n,s,r),p=t.memoizedState),(u=ja||Vs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&ea(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,sc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=ks(t,e.child,null,i),t.child=ks(t,null,n,i)):tc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Sc(e,t,i),e}function dc(e,t,n,r){return Ui(),t.flags|=256,tc(e,t,n,r),t.child}var fc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function pc(e){return{baseLanes:e,cachePool:xa()}}function mc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Ll),e}function hc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(Ls.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(M){if(a?Ns(t):Fs(t),M){var c=j,l;if(l=c){c:{for(l=c,c=Ri;l.nodeType!==8;){if(!c){c=null;break c}if(l=Wd(l.nextSibling),l===null){c=null;break c}}c=l}c===null?l=!1:(t.memoizedState={dehydrated:c,treeContext:ki===null?null:{id:Ai,overflow:ji},retryLane:536870912,hydrationErrors:null},l=A(18,null,null,0),l.stateNode=c,l.return=t,t.child=l,Ii=t,j=null,l=!0)}l||Bi(t)}if(c=t.memoizedState,c!==null&&(c=c.dehydrated,c!==null))return Hd(c)?t.lanes=32:t.lanes=536870912,null;Is(t)}return c=r.children,r=r.fallback,a?(Fs(t),a=t.mode,c=_c({mode:`hidden`,children:c},a),r=bi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,a=t.child,a.memoizedState=pc(n),a.childLanes=mc(e,s,n),t.memoizedState=fc,r):(Ns(t),gc(t,c))}if(l=e.memoizedState,l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(Ns(t),t.flags&=-257,t=vc(e,t,n)):t.memoizedState===null?(Fs(t),a=r.fallback,c=t.mode,r=_c({mode:`visible`,children:r.children},c),a=bi(a,c,n,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,ks(t,e.child,null,n),r=t.child,r.memoizedState=pc(n),r.childLanes=mc(e,s,n),t.memoizedState=fc,t=a):(Fs(t),t.child=e.child,t.flags|=128,t=null);else if(Ns(t),Hd(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Gi({value:r,source:null,stack:null}),t=vc(e,t,n)}else if(V||$i(e,t,n,!1),s=(n&e.childLanes)!==0,V||s){if(s=K,s!==null&&(r=n&-n,r=r&42?1:rt(r),r=(r&(s.suspendedLanes|n))===0?r:0,r!==0&&r!==l.retryLane))throw l.retryLane=r,di(e,r),ru(s,e,r),ec;c.data===`$?`||mu(),t=vc(e,t,n)}else c.data===`$?`?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,j=Wd(c.nextSibling),Ii=t,M=!0,Li=null,Ri=!1,e!==null&&(Di[Oi++]=Ai,Di[Oi++]=ji,Di[Oi++]=ki,Ai=e.id,ji=e.overflow,ki=t),t=gc(t,r.children),t.flags|=4096);return t}return a?(Fs(t),a=r.fallback,c=t.mode,l=e.child,u=l.sibling,r=_i(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(a=bi(a,c,n,null),a.flags|=2):a=_i(u,a),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,c=e.child.memoizedState,c===null?c=pc(n):(l=c.cachePool,l===null?l=xa():(u=ca._currentValue,l=l.parent===u?l:{parent:u,pool:u}),c={baseLanes:c.baseLanes|n,cachePool:l}),a.memoizedState=c,a.childLanes=mc(e,s,n),t.memoizedState=fc,r):(Ns(t),n=e.child,e=n.sibling,n=_i(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function gc(e,t){return t=_c({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function _c(e,t){return e=A(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function vc(e,t,n){return ks(t,e.child,null,n),e=gc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function yc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Zi(e.return,t,n)}function bc(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function xc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(tc(e,t,r.children,n),r=Ls.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&yc(e,n,t);else if(e.tag===19)yc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}switch(O(Ls,r),i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Rs(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),bc(t,!1,i,n,a);break;case`backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Rs(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}bc(t,!0,n,null,a);break;case`together`:bc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Sc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Pl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if($i(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=_i(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=_i(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Cc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&ea(e))):!0}function wc(e,t,n){switch(t.tag){case 3:ye(t,t.stateNode.containerInfo),Yi(t,ca,e.memoizedState.cache),Ui();break;case 27:case 5:xe(t);break;case 4:ye(t,t.stateNode.containerInfo);break;case 10:Yi(t,t.type,t.memoizedProps.value);break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(Ns(t),e=Sc(e,t,n),e===null?null:e.sibling):hc(e,t,n):(Ns(t),t.flags|=128,null);Ns(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=($i(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return xc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),O(Ls,Ls.current),r)break;return null;case 22:case 23:return t.lanes=0,ac(e,t,n);case 24:Yi(t,ca,e.memoizedState.cache)}return Sc(e,t,n)}function Tc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)V=!0;else{if(!Cc(e,n)&&!(t.flags&128))return V=!1,wc(e,t,n);V=!!(e.flags&131072)}else V=!1,M&&t.flags&1048576&&Ni(t,Ei,t.index);switch(t.lanes=0,t.tag){case 16:a:{e=t.pendingProps;var r=t.elementType,a=r._init;if(r=a(r._payload),t.type=r,typeof r==`function`)gi(r)?(e=Us(r,e),t.tag=1,t=uc(null,t,r,e,n)):(t.tag=0,t=cc(null,t,r,e,n));else{if(r!=null){if(a=r.$$typeof,a===ee){t.tag=11,t=nc(null,t,r,e,n);break a}else if(a===re){t.tag=14,t=rc(null,t,r,e,n);break a}}throw t=ce(r)||r,Error(i(306,t,``))}}return t;case 0:return cc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Us(r,t.pendingProps),uc(e,t,r,a,n);case 3:a:{if(ye(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Na(e,t),Ba(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Yi(t,ca,r),r!==o.cache&&Qi(t,[ca],n,!0),za(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=dc(e,t,r,n);break a}else if(r!==a){a=ii(Error(i(424)),t),Gi(a),t=dc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(j=Wd(e.firstChild),Ii=t,M=!0,Li=null,Ri=!0,n=As(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ui(),r===a){t=Sc(e,t,n);break a}tc(e,t,r,n)}t=t.child}return t;case 26:return sc(e,t),e===null?(n=df(t.type,null,t.pendingProps,null))?t.memoizedState=n:M||(n=t.type,e=t.pendingProps,r=Ed(_e.current).createElement(n),r[ct]=t,r[lt]=e,Sd(r,n,e),xt(r),t.stateNode=r):t.memoizedState=df(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return xe(t),e===null&&M&&(r=t.stateNode=qd(t.type,t.pendingProps,_e.current),Ii=t,Ri=!0,a=j,Ld(t.type)?(Gd=a,j=Wd(r.firstChild)):j=a),tc(e,t,t.pendingProps.children,n),sc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&M&&((a=r=j)&&(r=Bd(r,t.type,t.pendingProps,Ri),r===null?a=!1:(t.stateNode=r,Ii=t,j=Wd(r.firstChild),Ri=!1,a=!0)),a||Bi(t)),xe(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,kd(a,o)?r=null:s!==null&&kd(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=B(e,t,ao,null,null,n),Ff._currentValue=a),sc(e,t),tc(e,t,r,n),t.child;case 6:return e===null&&M&&((e=n=j)&&(n=Vd(n,t.pendingProps,Ri),n===null?e=!1:(t.stateNode=n,Ii=t,j=null,e=!0)),e||Bi(t)),null;case 13:return hc(e,t,n);case 4:return ye(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ks(t,null,r,n):tc(e,t,r,n),t.child;case 11:return nc(e,t,t.type,t.pendingProps,n);case 7:return tc(e,t,t.pendingProps,n),t.child;case 8:return tc(e,t,t.pendingProps.children,n),t.child;case 12:return tc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Yi(t,t.type,r.value),tc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,ta(t),a=na(a),r=r(a),t.flags|=1,tc(e,t,r,n),t.child;case 14:return rc(e,t,t.type,t.pendingProps,n);case 15:return ic(e,t,t.type,t.pendingProps,n);case 19:return xc(e,t,n);case 31:return r=t.pendingProps,n=t.mode,r={mode:r.mode,children:r.children},e===null?(n=_c(r,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=_i(e.child,r),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return ac(e,t,n);case 24:return ta(t),r=na(ca),e===null?(a=ya(),a===null&&(a=K,o=la(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ma(t),Yi(t,ca,a)):((e.lanes&n)!==0&&(Na(e,t),Ba(t,null,null,n),za()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Yi(t,ca,r),r!==a.cache&&Qi(t,[ca],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Yi(t,ca,r))),tc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Ec(e){e.flags|=4}function Dc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Ef(t)){if(t=js.current,t!==null&&((J&4194048)===J?Ms!==null:(J&62914560)!==J&&!(J&536870912)||t!==Ms))throw Oa=wa,Sa;e.flags|=8192}}function Oc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:Ze(),e.lanes|=t,Rl|=t)}function kc(e,t){if(!M)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function H(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ac(e,t,n){var r=t.pendingProps;switch(Fi(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return H(t),null;case 1:return H(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Xi(ca),be(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Hi(t)?Ec(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Wi())),H(t),null;case 26:return n=t.memoizedState,e===null?(Ec(t),n===null?(H(t),t.flags&=-16777217):(H(t),Dc(t,n))):n?n===e.memoizedState?(H(t),t.flags&=-16777217):(Ec(t),H(t),Dc(t,n)):(e.memoizedProps!==r&&Ec(t),H(t),t.flags&=-16777217),null;case 27:Se(t),n=_e.current;var a=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Ec(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return H(t),null}e=he.current,Hi(t)?Vi(t,e):(e=qd(a,r,n),t.stateNode=e,Ec(t))}return H(t),null;case 5:if(Se(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Ec(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return H(t),null}if(e=he.current,Hi(t))Vi(t,e);else{switch(a=Ed(_e.current),e){case 1:e=a.createElementNS(`http://www.w3.org/2000/svg`,n);break;case 2:e=a.createElementNS(`http://www.w3.org/1998/Math/MathML`,n);break;default:switch(n){case`svg`:e=a.createElementNS(`http://www.w3.org/2000/svg`,n);break;case`math`:e=a.createElementNS(`http://www.w3.org/1998/Math/MathML`,n);break;case`script`:e=a.createElement(`div`),e.innerHTML=`<script><\/script>`,e=e.removeChild(e.firstChild);break;case`select`:e=typeof r.is==`string`?a.createElement(`select`,{is:r.is}):a.createElement(`select`),r.multiple?e.multiple=!0:r.size&&(e.size=r.size);break;default:e=typeof r.is==`string`?a.createElement(n,{is:r.is}):a.createElement(n)}}e[ct]=t,e[lt]=r;a:for(a=t.child;a!==null;){if(a.tag===5||a.tag===6)e.appendChild(a.stateNode);else if(a.tag!==4&&a.tag!==27&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break a;for(;a.sibling===null;){if(a.return===null||a.return===t)break a;a=a.return}a.sibling.return=a.return,a=a.sibling}t.stateNode=e;a:switch(Sd(e,n,r),n){case`button`:case`input`:case`select`:case`textarea`:e=!!r.autoFocus;break a;case`img`:e=!0;break a;default:e=!1}e&&Ec(t)}}return H(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Ec(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=_e.current,Hi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Ii,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[ct]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||yd(e.nodeValue,n)),e||Bi(t)}else e=Ed(e).createTextNode(r),e[ct]=t,t.stateNode=e}return H(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Hi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[ct]=t}else Ui(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;H(t),a=!1}else a=Wi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(Is(t),t):(Is(t),null)}if(Is(t),t.flags&128)return t.lanes=n,t;if(n=r!==null,e=e!==null&&e.memoizedState!==null,n){r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool);var o=null;r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),Oc(t,t.updateQueue),H(t),null;case 4:return be(),e===null&&ld(t.stateNode.containerInfo),H(t),null;case 10:return Xi(t.type),H(t),null;case 19:if(me(Ls),a=t.memoizedState,a===null)return H(t),null;if(r=(t.flags&128)!=0,o=a.rendering,o===null)if(r)kc(a,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Rs(e),o!==null){for(t.flags|=128,kc(a,!1),e=o.updateQueue,t.updateQueue=e,Oc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)vi(n,e),n=n.sibling;return O(Ls,Ls.current&1|2),t.child}e=e.sibling}a.tail!==null&&Oe()>Ul&&(t.flags|=128,r=!0,kc(a,!1),t.lanes=4194304)}else{if(!r)if(e=Rs(o),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,Oc(t,e),kc(a,!0),a.tail===null&&a.tailMode===`hidden`&&!o.alternate&&!M)return H(t),null}else 2*Oe()-a.renderingStartTime>Ul&&n!==536870912&&(t.flags|=128,r=!0,kc(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(e=a.last,e===null?t.child=o:e.sibling=o,a.last=o)}return a.tail===null?(H(t),null):(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Oe(),t.sibling=null,e=Ls.current,O(Ls,r?e&1|2:e&1),t);case 22:case 23:return Is(t),Ka(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(H(t),t.subtreeFlags&6&&(t.flags|=8192)):H(t),n=t.updateQueue,n!==null&&Oc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&me(va),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Xi(ca),H(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function jc(e,t){switch(Fi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Xi(ca),be(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Se(t),null;case 13:if(Is(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Ui()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return me(Ls),null;case 4:return be(),null;case 10:return Xi(t.type),null;case 22:case 23:return Is(t),Ka(),e!==null&&me(va),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Xi(ca),null;case 25:return null;default:return null}}function Mc(e,t){switch(Fi(t),t.tag){case 3:Xi(ca),be();break;case 26:case 27:case 5:Se(t);break;case 4:be();break;case 13:Is(t);break;case 19:me(Ls);break;case 10:Xi(t.type);break;case 22:case 23:Is(t),Ka(),e!==null&&me(va);break;case 24:Xi(ca)}}function Nc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Pc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Fc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Va(t,n)}catch(t){Z(e,e.return,t)}}}function Ic(e,t,n){n.props=Us(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Lc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Rc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function zc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Bc(e,t,n){try{var r=e.stateNode;Cd(r,e.type,n,t),r[lt]=t}catch(t){Z(e,e.return,t)}}function Vc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ld(e.type)||e.tag===4}function Hc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Vc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ld(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Uc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=bd));else if(r!==4&&(r===27&&Ld(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Uc(e,t,n),e=e.sibling;e!==null;)Uc(e,t,n),e=e.sibling}function Wc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Ld(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Wc(e,t,n),e=e.sibling;e!==null;)Wc(e,t,n),e=e.sibling}function Gc(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Sd(t,r,n),t[ct]=e,t[lt]=n}catch(t){Z(e,e.return,t)}}var Kc=!1,U=!1,qc=!1,Jc=typeof WeakSet==`function`?WeakSet:Set,Yc=null;function Xc(e,t){if(e=e.containerInfo,wd=Uf,e=Fr(e),Ir(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(Td={focusedElem:e,selectionRange:n},Uf=!1,Yc=t;Yc!==null;)if(t=Yc,e=t.child,t.subtreeFlags&1024&&e!==null)e.return=t,Yc=e;else for(;Yc!==null;){switch(t=Yc,o=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Us(n.type,a,n.elementType===n.type);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)zd(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:zd(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,Yc=e;break}Yc=t.return}}function Zc(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:ul(e,n),r&4&&Nc(5,n);break;case 1:if(ul(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Us(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&Fc(n),r&512&&Lc(n,n.return);break;case 3:if(ul(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Va(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&Gc(n);case 26:case 5:ul(e,n),t===null&&r&4&&zc(n),r&512&&Lc(n,n.return);break;case 12:ul(e,n);break;case 13:ul(e,n),r&4&&nl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Fu.bind(null,n),Ud(e,n))));break;case 22:if(r=n.memoizedState!==null||Kc,!r){t=t!==null&&t.memoizedState!==null||U,i=Kc;var a=U;Kc=r,(U=t)&&!a?fl(e,n,(n.subtreeFlags&8772)!=0):ul(e,n),Kc=i,U=a}break;case 30:break;default:ul(e,n)}}function Qc(e){var t=e.alternate;t!==null&&(e.alternate=null,Qc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&gt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var W=null,$c=!1;function el(e,t,n){for(n=n.child;n!==null;)tl(e,t,n),n=n.sibling}function tl(e,t,n){if(Re&&typeof Re.onCommitFiberUnmount==`function`)try{Re.onCommitFiberUnmount(Le,n)}catch{}switch(n.tag){case 26:U||Rc(n,t),el(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:U||Rc(n,t);var r=W,i=$c;Ld(n.type)&&(W=n.stateNode,$c=!1),el(e,t,n),Jd(n.stateNode),W=r,$c=i;break;case 5:U||Rc(n,t);case 6:if(r=W,i=$c,W=null,el(e,t,n),W=r,$c=i,W!==null)if($c)try{(W.nodeType===9?W.body:W.nodeName===`HTML`?W.ownerDocument.body:W).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{W.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:W!==null&&($c?(e=W,Rd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),hp(e)):Rd(W,n.stateNode));break;case 4:r=W,i=$c,W=n.stateNode.containerInfo,$c=!0,el(e,t,n),W=r,$c=i;break;case 0:case 11:case 14:case 15:U||Pc(2,n,t),U||Pc(4,n,t),el(e,t,n);break;case 1:U||(Rc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Ic(n,t,r)),el(e,t,n);break;case 21:el(e,t,n);break;case 22:U=(r=U)||n.memoizedState!==null,el(e,t,n),U=r;break;default:el(e,t,n)}}function nl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{hp(e)}catch(e){Z(t,t.return,e)}}function rl(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Jc),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Jc),t;default:throw Error(i(435,e.tag))}}function il(e,t){var n=rl(e);t.forEach(function(t){var r=Iu.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}function al(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Ld(c.type)){W=c.stateNode,$c=!1;break a}break;case 5:W=c.stateNode,$c=!1;break a;case 3:case 4:W=c.stateNode.containerInfo,$c=!0;break a}c=c.return}if(W===null)throw Error(i(160));tl(o,s,a),W=null,$c=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)sl(t,e),t=t.sibling}var ol=null;function sl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:al(t,e),cl(e),r&4&&(Pc(3,e,e.return),Nc(3,e),Pc(5,e,e.return));break;case 1:al(t,e),cl(e),r&512&&(U||n===null||Rc(n,n.return)),r&64&&Kc&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=ol;if(al(t,e),cl(e),r&512&&(U||n===null||Rc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[ht]||o[ct]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Sd(o,r,n),o[ct]=e,xt(o),r=o;break a;case`link`:var s=Cf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Sd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Cf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Sd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[ct]=e,xt(o),r=o}e.stateNode=r}else wf(a,e.type,e.stateNode);else e.stateNode=vf(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Bc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?wf(a,e.type,e.stateNode):vf(a,r,e.memoizedProps))}break;case 27:al(t,e),cl(e),r&512&&(U||n===null||Rc(n,n.return)),n!==null&&r&4&&Bc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(al(t,e),cl(e),r&512&&(U||n===null||Rc(n,n.return)),e.flags&32){a=e.stateNode;try{en(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Bc(e,a,n===null?a:n.memoizedProps)),r&1024&&(qc=!0);break;case 6:if(al(t,e),cl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Sf=null,a=ol,ol=Zd(t.containerInfo),al(t,e),ol=a,cl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{hp(t.containerInfo)}catch(t){Z(e,e.return,t)}qc&&(qc=!1,ll(e));break;case 4:r=ol,ol=Zd(e.stateNode.containerInfo),al(t,e),cl(e),ol=r;break;case 12:al(t,e),cl(e);break;case 13:al(t,e),cl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Hl=Oe()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,il(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=Kc,d=U;if(Kc=u||a,U=d||l,al(t,e),U=d,Kc=u,cl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||Kc||U||dl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,il(e,n))));break;case 19:al(t,e),cl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,il(e,r)));break;case 30:break;case 21:break;default:al(t,e),cl(e)}}function cl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Vc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;Wc(e,Hc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(en(o,``),n.flags&=-33),Wc(e,Hc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Uc(e,Hc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ll(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;ll(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ul(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Zc(e,t.alternate,t),t=t.sibling}function dl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Pc(4,t,t.return),dl(t);break;case 1:Rc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Ic(t,t.return,n),dl(t);break;case 27:Jd(t.stateNode);case 26:case 5:Rc(t,t.return),dl(t);break;case 22:t.memoizedState===null&&dl(t);break;case 30:dl(t);break;default:dl(t)}e=e.sibling}}function fl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:fl(i,a,n),Nc(4,a);break;case 1:if(fl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)I(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Fc(a),Lc(a,a.return);break;case 27:Gc(a);case 26:case 5:fl(i,a,n),n&&r===null&&o&4&&zc(a),Lc(a,a.return);break;case 12:fl(i,a,n);break;case 13:fl(i,a,n),n&&o&4&&nl(i,a);break;case 22:a.memoizedState===null&&fl(i,a,n),Lc(a,a.return);break;case 30:break;default:fl(i,a,n)}t=t.sibling}}function pl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ua(n))}function ml(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ua(e))}function hl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)gl(e,t,n,r),t=t.sibling}function gl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:hl(e,t,n,r),i&2048&&Nc(9,t);break;case 1:hl(e,t,n,r);break;case 3:hl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ua(e)));break;case 12:if(i&2048){hl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else hl(e,t,n,r);break;case 13:hl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?hl(e,t,n,r):(a._visibility|=2,_l(e,t,n,r,(t.subtreeFlags&10256)!=0)):a._visibility&2?hl(e,t,n,r):vl(e,t),i&2048&&pl(o,t);break;case 24:hl(e,t,n,r),i&2048&&ml(t.alternate,t);break;default:hl(e,t,n,r)}}function _l(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:_l(a,o,s,c,i),Nc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,_l(a,o,s,c,i)):u._visibility&2?_l(a,o,s,c,i):vl(a,o),i&&l&2048&&pl(o.alternate,o);break;case 24:_l(a,o,s,c,i),i&&l&2048&&ml(o.alternate,o);break;default:_l(a,o,s,c,i)}t=t.sibling}}function vl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:vl(n,r),i&2048&&pl(r.alternate,r);break;case 24:vl(n,r),i&2048&&ml(r.alternate,r);break;default:vl(n,r)}t=t.sibling}}var yl=8192;function bl(e){if(e.subtreeFlags&yl)for(e=e.child;e!==null;)xl(e),e=e.sibling}function xl(e){switch(e.tag){case 26:bl(e),e.flags&yl&&e.memoizedState!==null&&kf(ol,e.memoizedState,e.memoizedProps);break;case 5:bl(e);break;case 3:case 4:var t=ol;ol=Zd(e.stateNode.containerInfo),bl(e),ol=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=yl,yl=16777216,bl(e),yl=t):bl(e));break;default:bl(e)}}function Sl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Cl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];Yc=r,El(r,e)}Sl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)wl(e),e=e.sibling}function wl(e){switch(e.tag){case 0:case 11:case 15:Cl(e),e.flags&2048&&Pc(9,e,e.return);break;case 3:Cl(e);break;case 12:Cl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Tl(e)):Cl(e);break;default:Cl(e)}}function Tl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];Yc=r,El(r,e)}Sl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Pc(8,t,t.return),Tl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Tl(t));break;default:Tl(t)}e=e.sibling}}function El(e,t){for(;Yc!==null;){var n=Yc;switch(n.tag){case 0:case 11:case 15:Pc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ua(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,Yc=r;else a:for(n=e;Yc!==null;){r=Yc;var i=r.sibling,a=r.return;if(Qc(r),r===n){Yc=null;break a}if(i!==null){i.return=a,Yc=i;break a}Yc=a}}}var Dl={getCacheForType:function(e){var t=na(ca),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},Ol=typeof WeakMap==`function`?WeakMap:Map,G=0,K=null,q=null,J=0,Y=0,kl=null,Al=!1,jl=!1,Ml=!1,Nl=0,X=0,Pl=0,Fl=0,Il=0,Ll=0,Rl=0,zl=null,Bl=null,Vl=!1,Hl=0,Ul=1/0,Wl=null,Gl=null,Kl=0,ql=null,Jl=null,Yl=0,Xl=0,Zl=null,Ql=null,$l=0,eu=null;function tu(){if(G&2&&J!==0)return J&-J;if(E.T!==null){var e=pa;return e===0?Qu():e}return at()}function nu(){Ll===0&&(Ll=!(J&536870912)||M?Xe():536870912);var e=js.current;return e!==null&&(e.flags|=32),Ll}function ru(e,t,n){(e===K&&(Y===2||Y===9)||e.cancelPendingCommit!==null)&&(uu(e,0),su(e,J,Ll,!1)),$e(e,n),(!(G&2)||e!==K)&&(e===K&&(!(G&2)&&(Fl|=n),X===4&&su(e,J,Ll,!1)),Wu(e))}function iu(e,t,n){if(G&6)throw Error(i(327));var r=!n&&(t&124)==0&&(t&e.expiredLanes)===0||Je(e,t),a=r?_u(e,t):hu(e,t,!0),o=r;do{if(a===0){jl&&!r&&su(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!ou(n)){a=hu(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=zl;var l=c.current.memoizedState.isDehydrated;if(l&&(uu(c,s).flags|=256),s=hu(c,s,!1),s!==2){if(Ml&&!l){c.errorRecoveryDisabledLanes|=o,Fl|=o,a=4;break a}o=Bl,Bl=a,o!==null&&(Bl===null?Bl=o:Bl.push.apply(Bl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){uu(e,0),su(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:su(r,t,Ll,!Al);break a;case 2:Bl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=Hl+300-Oe(),10<a)){if(su(r,t,Ll,!Al),qe(r,0,!0)!==0)break a;r.timeoutHandle=Md(au.bind(null,r,n,Bl,Wl,Vl,t,Ll,Fl,Rl,Al,o,2,-0,0),a);break a}au(r,n,Bl,Wl,Vl,t,Ll,Fl,Rl,Al,o,0,-0,0)}}break}while(1);Wu(e)}function au(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,(d&8192||(d&16785408)==16785408)&&(Df={stylesheets:null,count:0,unsuspend:Of},xl(t),d=Af(),d!==null)){e.cancelPendingCommit=d(wu.bind(null,e,t,a,n,r,i,o,s,c,u,1,f,p)),su(e,a,o,!l);return}wu(e,t,a,n,r,i,o,s,c)}function ou(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Ar(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function su(e,t,n,r){t&=~Il,t&=~Fl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Be(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&tt(e,n,t)}function cu(){return G&6?!0:(Gu(0,!1),!1)}function lu(){if(q!==null){if(Y===0)var e=q.return;else e=q,Ji=qi=null,co(e),Ss=null,Cs=0,e=q;for(;e!==null;)Mc(e.alternate,e),e=e.return;q=null}}function uu(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Nd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),lu(),K=e,q=n=_i(e.current,null),J=t,Y=0,kl=null,Al=!1,jl=Je(e,t),Ml=!1,Rl=Ll=Il=Fl=Pl=X=0,Bl=zl=null,Vl=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Be(r),a=1<<i;t|=e[i],r&=~a}return Nl=t,ci(),n}function du(e,t){L=null,E.H=vs,t===F||t===Ca?(t=ka(),Y=3):t===Sa?(t=ka(),Y=4):Y=t===ec?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,kl=t,q===null&&(X=1,Js(e,ii(t,e.current)))}function fu(){var e=E.H;return E.H=vs,e===null?vs:e}function pu(){var e=E.A;return E.A=Dl,e}function mu(){X=4,Al||(J&4194048)!==J&&js.current!==null||(jl=!0),!(Pl&134217727)&&!(Fl&134217727)||K===null||su(K,J,Ll,!1)}function hu(e,t,n){var r=G;G|=2;var i=fu(),a=pu();(K!==e||J!==t)&&(Wl=null,uu(e,t)),t=!1;var o=X;a:do try{if(Y!==0&&q!==null){var s=q,c=kl;switch(Y){case 8:lu(),o=6;break a;case 3:case 2:case 9:case 6:js.current===null&&(t=!0);var l=Y;if(Y=0,kl=null,xu(e,s,c,l),n&&jl){o=0;break a}break;default:l=Y,Y=0,kl=null,xu(e,s,c,l)}}gu(),o=X;break}catch(t){du(e,t)}while(1);return t&&e.shellSuspendCounter++,Ji=qi=null,G=r,E.H=i,E.A=a,q===null&&(K=null,J=0,ci()),o}function gu(){for(;q!==null;)yu(q)}function _u(e,t){var n=G;G|=2;var r=fu(),a=pu();K!==e||J!==t?(Wl=null,Ul=Oe()+500,uu(e,t)):jl=Je(e,t);a:do try{if(Y!==0&&q!==null){t=q;var o=kl;b:switch(Y){case 1:Y=0,kl=null,xu(e,t,o,1);break;case 2:case 9:if(Ta(o)){Y=0,kl=null,bu(t);break}t=function(){Y!==2&&Y!==9||K!==e||(Y=7),Wu(e)},o.then(t,t);break a;case 3:Y=7;break a;case 4:Y=5;break a;case 7:Ta(o)?(Y=0,kl=null,bu(t)):(Y=0,kl=null,xu(e,t,o,7));break;case 5:var s=null;switch(q.tag){case 26:s=q.memoizedState;case 5:case 27:var c=q;if(!s||Ef(s)){Y=0,kl=null;var l=c.sibling;if(l!==null)q=l;else{var u=c.return;u===null?q=null:(q=u,Su(u))}break b}}Y=0,kl=null,xu(e,t,o,5);break;case 6:Y=0,kl=null,xu(e,t,o,6);break;case 8:lu(),X=6;break a;default:throw Error(i(462))}}vu();break}catch(t){du(e,t)}while(1);return Ji=qi=null,E.H=r,E.A=a,G=n,q===null?(K=null,J=0,ci(),X):0}function vu(){for(;q!==null&&!Ee();)yu(q)}function yu(e){var t=Tc(e.alternate,e,Nl);e.memoizedProps=e.pendingProps,t===null?Su(e):q=t}function bu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=lc(n,t,t.pendingProps,t.type,void 0,J);break;case 11:t=lc(n,t,t.pendingProps,t.type.render,t.ref,J);break;case 5:co(t);default:Mc(n,t),t=q=vi(t,Nl),t=Tc(n,t,Nl)}e.memoizedProps=e.pendingProps,t===null?Su(e):q=t}function xu(e,t,n,r){Ji=qi=null,co(t),Ss=null,Cs=0;var i=t.return;try{if($s(e,i,t,n,J)){X=1,Js(e,ii(n,e.current)),q=null;return}}catch(t){if(i!==null)throw q=i,t;X=1,Js(e,ii(n,e.current)),q=null;return}t.flags&32768?(M||r===1?e=!0:jl||J&536870912?e=!1:(Al=e=!0,(r===2||r===9||r===3||r===6)&&(r=js.current,r!==null&&r.tag===13&&(r.flags|=16384))),Cu(t,e)):Su(t)}function Su(e){var t=e;do{if(t.flags&32768){Cu(t,Al);return}e=t.return;var n=Ac(t.alternate,t,Nl);if(n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);X===0&&(X=5)}function Cu(e,t){do{var n=jc(e.alternate,e);if(n!==null){n.flags&=32767,q=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){q=e;return}q=e=n}while(e!==null);X=6,q=null}function wu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do ku();while(Kl!==0);if(G&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=si,et(e,n,o,s,c,l),e===K&&(q=K=null,J=0),Jl=t,ql=e,Yl=n,Xl=o,Zl=a,Ql=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Lu(Me,function(){return Au(!0),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=E.T,E.T=null,a=D.p,D.p=2,s=G,G|=4;try{Xc(e,t,n)}finally{G=s,D.p=a,E.T=r}}Kl=1,Tu(),Eu(),Du()}}function Tu(){if(Kl===1){Kl=0;var e=ql,t=Jl,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=E.T,E.T=null;var r=D.p;D.p=2;var i=G;G|=4;try{sl(t,e);var a=Td,o=Fr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Pr(s.ownerDocument.documentElement,s)){if(c!==null&&Ir(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Nr(s,h),v=Nr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}Uf=!!wd,Td=wd=null}finally{G=i,D.p=r,E.T=n}}e.current=t,Kl=2}}function Eu(){if(Kl===2){Kl=0;var e=ql,t=Jl,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=E.T,E.T=null;var r=D.p;D.p=2;var i=G;G|=4;try{Zc(e,t.alternate,t)}finally{G=i,D.p=r,E.T=n}}Kl=3}}function Du(){if(Kl===4||Kl===3){Kl=0,De();var e=ql,t=Jl,n=Yl,r=Ql;t.subtreeFlags&10256||t.flags&10256?Kl=5:(Kl=0,Jl=ql=null,Ou(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(Gl=null),it(n),t=t.stateNode,Re&&typeof Re.onCommitFiberRoot==`function`)try{Re.onCommitFiberRoot(Le,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=E.T,i=D.p,D.p=2,E.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{E.T=t,D.p=i}}Yl&3&&ku(),Wu(e),i=e.pendingLanes,n&4194090&&i&42?e===eu?$l++:($l=0,eu=e):$l=0,Gu(0,!1)}}function Ou(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ua(t)))}function ku(e){return Tu(),Eu(),Du(),Au(e)}function Au(){if(Kl!==5)return!1;var e=ql,t=Xl;Xl=0;var n=it(Yl),r=E.T,a=D.p;try{D.p=32>n?32:n,E.T=null,n=Zl,Zl=null;var o=ql,s=Yl;if(Kl=0,Jl=ql=null,Yl=0,G&6)throw Error(i(331));var c=G;if(G|=4,wl(o.current),gl(o,o.current,s,n),G=c,Gu(0,!1),Re&&typeof Re.onPostCommitFiberRoot==`function`)try{Re.onPostCommitFiberRoot(Le,o)}catch{}return!0}finally{D.p=a,E.T=r,Ou(e,t)}}function ju(e,t,n){t=ii(n,t),t=Xs(e.stateNode,t,2),e=Fa(e,t,2),e!==null&&($e(e,2),Wu(e))}function Z(e,t,n){if(e.tag===3)ju(e,e,n);else for(;t!==null;){if(t.tag===3){ju(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(Gl===null||!Gl.has(r))){e=ii(n,e),n=Zs(2),r=Fa(t,n,2),r!==null&&(Qs(n,r,t,e),$e(r,2),Wu(r));break}}t=t.return}}function Mu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ol;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Ml=!0,i.add(n),e=Nu.bind(null,e,t,n),t.then(e,e))}function Nu(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,K===e&&(J&n)===n&&(X===4||X===3&&(J&62914560)===J&&300>Oe()-Hl?!(G&2)&&uu(e,0):Il|=n,Rl===J&&(Rl=0)),Wu(e)}function Pu(e,t){t===0&&(t=Ze()),e=di(e,t),e!==null&&($e(e,t),Wu(e))}function Fu(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Pu(e,n)}function Iu(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),Pu(e,n)}function Lu(e,t){return we(e,t)}var Ru=null,zu=null,Bu=!1,Vu=!1,Hu=!1,Uu=0;function Wu(e){e!==zu&&e.next===null&&(zu===null?Ru=zu=e:zu=zu.next=e),Vu=!0,Bu||(Bu=!0,Zu())}function Gu(e,t){if(!Hu&&Vu){Hu=!0;do for(var n=!1,r=Ru;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Be(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,Xu(r,a))}else a=J,a=qe(r,r===K?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||Je(r,a)||(n=!0,Xu(r,a));r=r.next}while(n);Hu=!1}}function Ku(){qu()}function qu(){Vu=Bu=!1;var e=0;Uu!==0&&(jd()&&(e=Uu),Uu=0);for(var t=Oe(),n=null,r=Ru;r!==null;){var i=r.next,a=Ju(r,t);a===0?(r.next=null,n===null?Ru=i:n.next=i,i===null&&(zu=n)):(n=r,(e!==0||a&3)&&(Vu=!0)),r=i}Gu(e,!1)}function Ju(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Be(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Ye(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=K,n=J,n=qe(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Y===2||Y===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Te(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Je(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Te(r),it(n)){case 2:case 8:n=je;break;case 32:n=Me;break;case 268435456:n=Pe;break;default:n=Me}return r=Yu.bind(null,e),n=we(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Te(r),e.callbackPriority=2,e.callbackNode=null,2}function Yu(e,t){if(Kl!==0&&Kl!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(ku(!0)&&e.callbackNode!==n)return null;var r=J;return r=qe(e,e===K?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(iu(e,r,t),Ju(e,Oe()),e.callbackNode!=null&&e.callbackNode===n?Yu.bind(null,e):null)}function Xu(e,t){if(ku())return null;iu(e,t,!0)}function Zu(){Fd(function(){G&6?we(Ae,Ku):qu()})}function Qu(){return Uu===0&&(Uu=Xe()),Uu}function $u(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:cn(``+e)}function ed(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function td(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=$u((i[lt]||null).action),o=r.submitter;o&&(t=(t=o[lt]||null)?$u(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new kn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Uu!==0){var e=o?ed(i,o):new FormData(i);is(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?ed(i,o):new FormData(i),is(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var nd=0;nd<ti.length;nd++){var rd=ti[nd];ni(rd.toLowerCase(),`on`+(rd[0].toUpperCase()+rd.slice(1)))}ni(Jr,`onAnimationEnd`),ni(k,`onAnimationIteration`),ni(Yr,`onAnimationStart`),ni(`dblclick`,`onDoubleClick`),ni(`focusin`,`onFocus`),ni(`focusout`,`onBlur`),ni(Xr,`onTransitionRun`),ni(Zr,`onTransitionStart`),ni(Qr,`onTransitionCancel`),ni($r,`onTransitionEnd`),Tt(`onMouseEnter`,[`mouseout`,`mouseover`]),Tt(`onMouseLeave`,[`mouseout`,`mouseover`]),Tt(`onPointerEnter`,[`pointerout`,`pointerover`]),Tt(`onPointerLeave`,[`pointerout`,`pointerover`]),wt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),wt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),wt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),wt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),wt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),wt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var id=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),ad=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(id));function od(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Ws(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Ws(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[dt];n===void 0&&(n=t[dt]=new Set);var r=e+`__bubble`;n.has(r)||(ud(t,e,2,!1),n.add(r))}function sd(e,t,n){var r=0;t&&(r|=4),ud(n,e,r,t)}var cd=`_reactListening`+Math.random().toString(36).slice(2);function ld(e){if(!e[cd]){e[cd]=!0,St.forEach(function(t){t!==`selectionchange`&&(ad.has(t)||sd(t,!1,e),sd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[cd]||(t[cd]=!0,sd(`selectionchange`,!1,t))}}function ud(e,t,n,r){switch(Xf(t)){case 2:var i=Wf;break;case 8:i=Gf;break;default:i=Kf}n=i.bind(null,t,n,e),i=void 0,!vn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function dd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=_t(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}hn(function(){var r=a,i=un(n),s=[];a:{var c=ei.get(e);if(c!==void 0){var l=kn,u=e;switch(e){case`keypress`:if(wn(n)===0)break a;case`keydown`:case`keyup`:l=qn;break;case`focusin`:u=`focus`,l=Rn;break;case`focusout`:u=`blur`,l=Rn;break;case`beforeblur`:case`afterblur`:l=Rn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=In;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Ln;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Yn;break;case Jr:case k:case Yr:l=zn;break;case $r:l=Xn;break;case`scroll`:case`scrollend`:l=jn;break;case`wheel`:l=Zn;break;case`copy`:case`cut`:case`paste`:l=Bn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Jn;break;case`toggle`:case`beforetoggle`:l=Qn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=gn(m,p),g!=null&&d.push(fd(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==ln&&(u=n.relatedTarget||n.fromElement)&&(_t(u)||u[ut]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?_t(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=In,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Jn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:yt(l),h=u==null?c:yt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,_t(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=l,p=u,m=0,h=d;h;h=md(h))m++;for(h=0,g=p;g;g=md(g))h++;for(;0<m-h;)d=md(d),m--;for(;0<h-m;)p=md(p),h--;for(;m--;){if(d===p||p!==null&&d===p.alternate)break b;d=md(d),p=md(p)}d=null}else d=null;l!==null&&hd(s,c,l,d,!1),u!==null&&f!==null&&hd(s,f,u,d,!0)}}a:{if(c=r?yt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var _=vr;else if(fr(c))if(yr)_=Or;else{_=Er;var v=Tr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&an(r.elementType)&&(_=vr):_=Dr;if(_&&=_(e,r)){pr(s,_,n,i);break a}v&&v(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Xt(c,`number`,c.value)}switch(v=r?yt(r):window,e){case`focusin`:(fr(v)||v.contentEditable===`true`)&&(Rr=v,zr=r,Br=null);break;case`focusout`:Br=zr=Rr=null;break;case`mousedown`:Vr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Vr=!1,Hr(s,n,i);break;case`selectionchange`:if(Lr)break;case`keydown`:case`keyup`:Hr(s,n,i)}var y;if(er)b:{switch(e){case`compositionstart`:var b=`onCompositionStart`;break b;case`compositionend`:b=`onCompositionEnd`;break b;case`compositionupdate`:b=`onCompositionUpdate`;break b}b=void 0}else cr?or(e,n)&&(b=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(b=`onCompositionStart`);b&&(rr&&n.locale!==`ko`&&(cr||b!==`onCompositionStart`?b===`onCompositionEnd`&&cr&&(y=Cn()):(bn=i,xn=`value`in bn?bn.value:bn.textContent,cr=!0)),v=pd(r,b),0<v.length&&(b=new Vn(b,e,null,n,i),s.push({event:b,listeners:v}),y?b.data=y:(y=sr(n),y!==null&&(b.data=y)))),(y=nr?lr(e,n):ur(e,n))&&(b=pd(r,`onBeforeInput`),0<b.length&&(v=new Vn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:v,listeners:b}),v.data=y)),td(s,e,r,n,i)}od(s,t)})}function fd(e,t,n){return{instance:e,listener:t,currentTarget:n}}function pd(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=gn(e,n),i!=null&&r.unshift(fd(e,i,a)),i=gn(e,t),i!=null&&r.push(fd(e,i,a))),e.tag===3)return r;e=e.return}return[]}function md(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function hd(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=gn(n,a),l!=null&&o.unshift(fd(n,l,c))):i||(l=gn(n,a),l!=null&&o.push(fd(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var gd=/\r\n?/g,_d=/\u0000|\uFFFD/g;function vd(e){return(typeof e==`string`?e:``+e).replace(gd,`
`).replace(_d,``)}function yd(e,t){return t=vd(t),vd(e)===t}function bd(){}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||en(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&en(e,``+r);break;case`className`:jt(e,`class`,r);break;case`tabIndex`:jt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:jt(e,n,r);break;case`style`:rn(e,r,o);break;case`data`:if(t!==`object`){jt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=cn(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=cn(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=bd);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=cn(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),At(e,`popover`,r);break;case`xlinkActuate`:Mt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Mt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Mt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Mt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Mt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Mt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Mt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Mt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Mt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:At(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=on.get(n)||n,At(e,n,r))}}function xd(e,t,n,r,a,o){switch(n){case`style`:rn(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?en(e,r):(typeof r==`number`||typeof r==`bigint`)&&en(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=bd);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!Ct.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[lt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):At(e,n,r)}}}function Sd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}Yt(e,o,c,l,u,s,a,!1),Ut(e);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Zt(e,!!r,n,!0):Zt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}$t(e,r,a,o),Ut(e);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<id.length;r++)Q(id[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(an(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&xd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Cd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Jt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Zt(e,!!n,n?[]:``,!1):Zt(e,!!n,t,!0)):Zt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Qt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(an(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&xd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||xd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}var wd=null,Td=null;function Ed(e){return e.nodeType===9?e:e.ownerDocument}function Dd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Od(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function kd(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ad=null;function jd(){var e=window.event;return e&&e.type===`popstate`?e===Ad?!1:(Ad=e,!0):(Ad=null,!1)}var Md=typeof setTimeout==`function`?setTimeout:void 0,Nd=typeof clearTimeout==`function`?clearTimeout:void 0,Pd=typeof Promise==`function`?Promise:void 0,Fd=typeof queueMicrotask==`function`?queueMicrotask:Pd===void 0?Md:function(e){return Pd.resolve(null).then(e).catch(Id)};function Id(e){setTimeout(function(){throw e})}function Ld(e){return e===`head`}function Rd(e,t){var n=t,r=0,i=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n===`/$`){if(0<r&&8>r){n=r;var o=e.ownerDocument;if(n&1&&Jd(o.documentElement),n&2&&Jd(o.body),n&4)for(n=o.head,Jd(n),o=n.firstChild;o;){var s=o.nextSibling,c=o.nodeName;o[ht]||c===`SCRIPT`||c===`STYLE`||c===`LINK`&&o.rel.toLowerCase()===`stylesheet`||n.removeChild(o),o=s}}if(i===0){e.removeChild(a),hp(t);return}i--}else n===`$`||n===`$?`||n===`$!`?i++:r=n.charCodeAt(0)-48;else r=0;n=a}while(n);hp(t)}function zd(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:zd(n),gt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function Bd(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[ht])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=Wd(e.nextSibling),e===null)break}return null}function Vd(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=Wd(e.nextSibling),e===null))return null;return e}function Hd(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState===`complete`}function Ud(e,t){var n=e.ownerDocument;if(e.data!==`$?`||n.readyState===`complete`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function Wd(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`F!`||t===`F`)break;if(t===`/$`)return null}}return e}var Gd=null;function Kd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`){if(t===0)return e;t--}else n===`/$`&&t++}e=e.previousSibling}return null}function qd(e,t,n){switch(t=Ed(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function Jd(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);gt(e)}var Yd=new Map,Xd=new Set;function Zd(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Qd=D.d;D.d={f:$d,r:ef,D:rf,C:af,L:of,m:sf,X:lf,S:cf,M:uf};function $d(){var e=Qd.f(),t=cu();return e||t}function ef(e){var t=vt(e);t!==null&&t.tag===5&&t.type===`form`?os(t):Qd.r(e)}var tf=typeof document>`u`?null:document;function nf(e,t,n){var r=tf;if(r&&typeof t==`string`&&t){var i=qt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),Xd.has(i)||(Xd.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Sd(t,`link`,e),xt(t),r.head.appendChild(t)))}}function rf(e){Qd.D(e),nf(`dns-prefetch`,e,null)}function af(e,t){Qd.C(e,t),nf(`preconnect`,e,t)}function of(e,t,n){Qd.L(e,t,n);var r=tf;if(r&&e&&t){var i=`link[rel="preload"][as="`+qt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+qt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+qt(n.imageSizes)+`"]`)):i+=`[href="`+qt(e)+`"]`;var a=i;switch(t){case`style`:a=ff(e);break;case`script`:a=gf(e)}Yd.has(a)||(e=d({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),Yd.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(pf(a))||t===`script`&&r.querySelector(_f(a))||(t=r.createElement(`link`),Sd(t,`link`,e),xt(t),r.head.appendChild(t)))}}function sf(e,t){Qd.m(e,t);var n=tf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+qt(r)+`"][href="`+qt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=gf(e)}if(!Yd.has(a)&&(e=d({rel:`modulepreload`,href:e},t),Yd.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(_f(a)))return}r=n.createElement(`link`),Sd(r,`link`,e),xt(r),n.head.appendChild(r)}}}function cf(e,t,n){Qd.S(e,t,n);var r=tf;if(r&&e){var i=bt(r).hoistableStyles,a=ff(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(pf(a)))s.loading=5;else{e=d({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=Yd.get(a))&&bf(e,n);var c=o=r.createElement(`link`);xt(c),Sd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,yf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function lf(e,t){Qd.X(e,t);var n=tf;if(n&&e){var r=bt(n).hoistableScripts,i=gf(e),a=r.get(i);a||(a=n.querySelector(_f(i)),a||(e=d({src:e,async:!0},t),(t=Yd.get(i))&&xf(e,t),a=n.createElement(`script`),xt(a),Sd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function uf(e,t){Qd.M(e,t);var n=tf;if(n&&e){var r=bt(n).hoistableScripts,i=gf(e),a=r.get(i);a||(a=n.querySelector(_f(i)),a||(e=d({src:e,async:!0,type:`module`},t),(t=Yd.get(i))&&xf(e,t),a=n.createElement(`script`),xt(a),Sd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function df(e,t,n,r){var a=(a=_e.current)?Zd(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=ff(n.href),n=bt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=ff(n.href);var o=bt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(pf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),Yd.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Yd.set(e,n),o||hf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=gf(n),n=bt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function ff(e){return`href="`+qt(e)+`"`}function pf(e){return`link[rel="stylesheet"][`+e+`]`}function mf(e){return d({},e,{"data-precedence":e.precedence,precedence:null})}function hf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Sd(t,`link`,n),xt(t),e.head.appendChild(t))}function gf(e){return`[src="`+qt(e)+`"]`}function _f(e){return`script[async]`+e}function vf(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+qt(n.href)+`"]`);if(r)return t.instance=r,xt(r),r;var a=d({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),xt(r),Sd(r,`style`,a),yf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=ff(n.href);var o=e.querySelector(pf(a));if(o)return t.state.loading|=4,t.instance=o,xt(o),o;r=mf(n),(a=Yd.get(a))&&bf(r,a),o=(e.ownerDocument||e).createElement(`link`),xt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Sd(o,`link`,r),t.state.loading|=4,yf(o,n.precedence,e),t.instance=o;case`script`:return o=gf(n.src),(a=e.querySelector(_f(o)))?(t.instance=a,xt(a),a):(r=n,(a=Yd.get(o))&&(r=d({},n),xf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),xt(a),Sd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,yf(r,n.precedence,e));return t.instance}function yf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function bf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function xf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Sf=null;function Cf(e,t,n){if(Sf===null){var r=new Map,i=Sf=new Map;i.set(n,r)}else i=Sf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[ht]||a[ct]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function wf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Tf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Ef(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}var Df=null;function Of(){}function kf(e,t,n){if(Df===null)throw Error(i(475));var r=Df;if(t.type===`stylesheet`&&(typeof n.media!=`string`||!1!==matchMedia(n.media).matches)&&!(t.state.loading&4)){if(t.instance===null){var a=ff(n.href),o=e.querySelector(pf(a));if(o){e=o._p,typeof e==`object`&&e&&typeof e.then==`function`&&(r.count++,r=jf.bind(r),e.then(r,r)),t.state.loading|=4,t.instance=o,xt(o);return}o=e.ownerDocument||e,n=mf(n),(a=Yd.get(a))&&bf(n,a),o=o.createElement(`link`),xt(o);var s=o;s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Sd(o,`link`,n),t.instance=o}r.stylesheets===null&&(r.stylesheets=new Map),r.stylesheets.set(t,e),(e=t.state.preload)&&!(t.state.loading&3)&&(r.count++,t=jf.bind(r),e.addEventListener(`load`,t),e.addEventListener(`error`,t))}}function Af(){if(Df===null)throw Error(i(475));var e=Df;return e.stylesheets&&e.count===0&&Nf(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&Nf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function jf(){if(this.count--,this.count===0){if(this.stylesheets)Nf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Mf=null;function Nf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Mf=new Map,t.forEach(Pf,e),Mf=null,jf.call(e))}function Pf(e,t){if(!(t.state.loading&4)){var n=Mf.get(e);if(n)var r=n.get(null);else{n=new Map,Mf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Ff={$$typeof:C,Provider:null,Consumer:null,_currentValue:ue,_currentValue2:ue,_threadCount:0};function If(e,t,n,r,i,a,o,s){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Qe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qe(0),this.hiddenUpdates=Qe(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function Lf(e,t,n,r,i,a,o,s,c,l,u,d){return e=new If(e,t,n,o,s,c,l,d),t=1,!0===a&&(t|=24),a=A(3,null,null,t),e.current=a,a.stateNode=e,t=la(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ma(a),e}function Rf(e){return e?(e=mi,e):mi}function zf(e,t,n,r,i,a){i=Rf(i),r.context===null?r.context=i:r.pendingContext=i,r=Pa(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Fa(e,r,t),n!==null&&(ru(n,e,t),Ia(n,e,t))}function Bf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Vf(e,t){Bf(e,t),(e=e.alternate)&&Bf(e,t)}function Hf(e){if(e.tag===13){var t=di(e,67108864);t!==null&&ru(t,e,67108864),Vf(e,67108864)}}var Uf=!0;function Wf(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=2,Kf(e,t,n,r)}finally{D.p=a,E.T=i}}function Gf(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=8,Kf(e,t,n,r)}finally{D.p=a,E.T=i}}function Kf(e,t,n,r){if(Uf){var i=qf(r);if(i===null)dd(e,t,r,Jf,n),ap(e,r);else if(sp(i,e,t,n,r))r.stopPropagation();else if(ap(e,r),t&4&&-1<ip.indexOf(e)){for(;i!==null;){var a=vt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Ke(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Be(o);s.entanglements[1]|=c,o&=~c}Wu(a),!(G&6)&&(Ul=Oe()+500,Gu(0,!1))}}break;case 13:s=di(a,2),s!==null&&ru(s,a,2),cu(),Vf(a,2)}if(a=qf(r),a===null&&dd(e,t,r,Jf,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else dd(e,t,r,null,n)}}function qf(e){return e=un(e),Yf(e)}var Jf=null;function Yf(e){if(Jf=null,e=_t(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Jf=e,null}function Xf(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(ke()){case Ae:return 2;case je:return 8;case Me:case Ne:return 32;case Pe:return 268435456;default:return 32}default:return 32}}var Zf=!1,Qf=null,$f=null,ep=null,tp=new Map,np=new Map,rp=[],ip=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function ap(e,t){switch(e){case`focusin`:case`focusout`:Qf=null;break;case`dragenter`:case`dragleave`:$f=null;break;case`mouseover`:case`mouseout`:ep=null;break;case`pointerover`:case`pointerout`:tp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:np.delete(t.pointerId)}}function op(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=vt(t),t!==null&&Hf(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function sp(e,t,n,r,i){switch(t){case`focusin`:return Qf=op(Qf,e,t,n,r,i),!0;case`dragenter`:return $f=op($f,e,t,n,r,i),!0;case`mouseover`:return ep=op(ep,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return tp.set(a,op(tp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,np.set(a,op(np.get(a)||null,e,t,n,r,i)),!0}return!1}function cp(e){var t=_t(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,ot(e.priority,function(){if(n.tag===13){var e=tu();e=rt(e);var t=di(n,e);t!==null&&ru(t,n,e),Vf(n,e)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function lp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=qf(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ln=r,n.target.dispatchEvent(r),ln=null}else return t=vt(n),t!==null&&Hf(t),e.blockedOn=n,!1;t.shift()}return!0}function up(e,t,n){lp(e)&&n.delete(t)}function dp(){Zf=!1,Qf!==null&&lp(Qf)&&(Qf=null),$f!==null&&lp($f)&&($f=null),ep!==null&&lp(ep)&&(ep=null),tp.forEach(up),np.forEach(up)}function fp(e,n){e.blockedOn===n&&(e.blockedOn=null,Zf||(Zf=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,dp)))}var pp=null;function mp(e){pp!==e&&(pp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){pp===e&&(pp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(Yf(r||n)===null)continue;break}var a=vt(n);a!==null&&(e.splice(t,3),t-=3,is(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function hp(e){function t(t){return fp(t,e)}Qf!==null&&fp(Qf,e),$f!==null&&fp($f,e),ep!==null&&fp(ep,e),tp.forEach(t),np.forEach(t);for(var n=0;n<rp.length;n++){var r=rp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<rp.length&&(n=rp[0],n.blockedOn===null);)cp(n),n.blockedOn===null&&rp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[lt]||null;if(typeof a==`function`)o||mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[lt]||null)s=o.formAction;else if(Yf(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),mp(n)}}}function gp(e){this._internalRoot=e}_p.prototype.render=gp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;zf(n,tu(),e,t,null,null)},_p.prototype.unmount=gp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;zf(e.current,2,null,e,null,null),cu(),t[ut]=null}};function _p(e){this._internalRoot=e}_p.prototype.unstable_scheduleHydration=function(e){if(e){var t=at();e={blockedOn:null,target:e,priority:t};for(var n=0;n<rp.length&&t!==0&&t<rp[n].priority;n++);rp.splice(n,0,e),n===0&&cp(e)}};var vp=n.version;if(vp!==`19.1.1`)throw Error(i(527,vp,`19.1.1`));D.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=l(t),e=e===null?null:u(e),e=e===null?null:e.stateNode,e};var yp={bundleType:0,version:`19.1.1`,rendererPackageName:`react-dom`,currentDispatcherRef:E,reconcilerVersion:`19.1.1`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var bp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bp.isDisabled&&bp.supportsFiber)try{Le=bp.inject(yp),Re=bp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Gs,s=Ks,c=qs,l=null;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(l=t.unstable_transitionCallbacks)),t=Lf(e,1,!1,null,null,n,r,o,s,c,l,null),e[ut]=t.current,ld(e),new gp(t)}})),y=u(s(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=v()}))()),b=u(p(),1),x=`modulepreload`,S=function(e){return`/`+e},C={},ee=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=S(t,n),t in C)return;C[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:x,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},te=`popstate`;function ne(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}function re(e={}){function t(e,t){let n=t.state?.masked,{pathname:r,search:i,hash:a}=n||e.location;return oe(``,{pathname:r,search:i,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||`default`,n?{pathname:e.location.pathname,search:e.location.search,hash:e.location.hash}:void 0)}function n(e,t){return typeof t==`string`?t:se(t)}return le(t,n,null,e)}function w(e,t){if(e===!1||e==null)throw Error(t)}function T(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function ie(){return Math.random().toString(36).substring(2,10)}function ae(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.unstable_mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function oe(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?ce(t):t,state:n,key:t&&t.key||r||ie(),unstable_mask:i}}function se({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function ce(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function le(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=ne(e)?e:oe(h.location,e,t);n&&n(r,e),l=u()+1;let d=ae(r,l),f=h.createHref(r.unstable_mask||r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=ne(e)?e:oe(h.location,e,t);n&&n(r,e),l=u();let i=ae(r,l),d=h.createHref(r.unstable_mask||r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return E(e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(te,d),c=e,()=>{i.removeEventListener(te,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function E(e,t=!1){let n=`http://localhost`;typeof window<`u`&&(n=window.location.origin===`null`?window.location.href:window.location.origin),w(n,`No window.location.(origin|href) available to create URL`);let r=typeof e==`string`?e:se(e);return r=r.replace(/ $/,`%20`),!t&&r.startsWith(`//`)&&(r=n+r),new URL(r,n)}function D(e,t,n=`/`){return ue(e,t,n,!1)}function ue(e,t,n,r){let i=De((typeof t==`string`?ce(t):t).pathname||`/`,n);if(i==null)return null;let a=fe(e);me(a);let o=null;for(let e=0;o==null&&e<a.length;++e){let t=Ee(i);o=Ce(a[e],t,r)}return o}function de(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],loaderData:t[n.id],handle:n.handle}}function fe(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;w(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=Fe([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(w(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),fe(e.children,t,u,l,o)),!(e.path==null&&!e.index)&&t.push({path:l,score:xe(l,e.index),routesMeta:u})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of pe(e.path))a(e,t,!0,n)}),t}function pe(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=pe(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function me(e){e.sort((e,t)=>e.score===t.score?Se(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var O=/^:[\w-]+$/,he=3,ge=2,_e=1,ve=10,ye=-2,be=e=>e===`*`;function xe(e,t){let n=e.split(`/`),r=n.length;return n.some(be)&&(r+=ye),t&&(r+=ge),n.filter(e=>!be(e)).reduce((e,t)=>e+(O.test(t)?he:t===``?_e:ve),r)}function Se(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function Ce(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u=we({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},l),d=s.route;if(!u&&c&&n&&!r[r.length-1].route.index&&(u=we({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!u)return null;Object.assign(i,u.params),o.push({params:i,pathname:Fe([a,u.pathname]),pathnameBase:Ie(Fe([a,u.pathnameBase])),route:d}),u.pathnameBase!==`/`&&(a=Fe([a,u.pathnameBase]))}return o}function we(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Te(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let i=s[r];return n&&!i?e[t]=void 0:e[t]=(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function Te(e,t=!1,n=!0){T(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function Ee(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return T(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function De(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}var Oe=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function ke(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?ce(e):e,a;return n?(n=n.replace(/\/\/+/g,`/`),a=n.startsWith(`/`)?Ae(n.substring(1),`/`):Ae(n,t)):a=t,{pathname:a,search:Le(r),hash:Re(i)}}function Ae(e,t){let n=t.replace(/\/+$/,``).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function je(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Me(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Ne(e){let t=Me(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function Pe(e,t,n,r=!1){let i;typeof e==`string`?i=ce(e):(i={...e},w(!i.pathname||!i.pathname.includes(`?`),je(`?`,`pathname`,`search`,i)),w(!i.pathname||!i.pathname.includes(`#`),je(`#`,`pathname`,`hash`,i)),w(!i.search||!i.search.includes(`#`),je(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=ke(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var Fe=e=>e.join(`/`).replace(/\/\/+/g,`/`),Ie=e=>e.replace(/\/+$/,``).replace(/^\/*/,`/`),Le=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,Re=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,ze=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Be(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function Ve(e){return e.map(e=>e.route.path).filter(Boolean).join(`/`).replace(/\/\/*/g,`/`)||`/`}var He=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function Ue(e,t){let n=e;if(typeof n!=`string`||!Oe.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(He)try{let e=new URL(window.location.href),r=n.startsWith(`//`)?new URL(e.protocol+n):new URL(n),a=De(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{T(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var We=b.createContext(null);We.displayName=`DataRouter`;var Ge=b.createContext(null);Ge.displayName=`DataRouterState`;var Ke=b.createContext(!1),qe=b.createContext({isTransitioning:!1});qe.displayName=`ViewTransition`;var Je=b.createContext(new Map);Je.displayName=`Fetchers`;var Ye=b.createContext(null);Ye.displayName=`Await`;var Xe=b.createContext(null);Xe.displayName=`Navigation`;var Ze=b.createContext(null);Ze.displayName=`Location`;var Qe=b.createContext({outlet:null,matches:[],isDataRoute:!1});Qe.displayName=`Route`;var $e=b.createContext(null);$e.displayName=`RouteError`;var et=`REACT_ROUTER_ERROR`,tt=`REDIRECT`,nt=`ROUTE_ERROR_RESPONSE`;function rt(e){if(e.startsWith(`${et}:${tt}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}function it(e){if(e.startsWith(`${et}:${nt}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new ze(t.status,t.statusText,t.data)}catch{}}function at(e,{relative:t}={}){w(ot(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=b.useContext(Xe),{hash:i,pathname:a,search:o}=ft(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:Fe([n,a])),r.createHref({pathname:s,search:o,hash:i})}function ot(){return b.useContext(Ze)!=null}function st(){return w(ot(),`useLocation() may be used only in the context of a <Router> component.`),b.useContext(Ze).location}var ct=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function lt(e){b.useContext(Xe).static||b.useLayoutEffect(e)}function ut(){let{isDataRoute:e}=b.useContext(Qe);return e?jt():dt()}function dt(){w(ot(),`useNavigate() may be used only in the context of a <Router> component.`);let e=b.useContext(We),{basename:t,navigator:n}=b.useContext(Xe),{matches:r}=b.useContext(Qe),{pathname:i}=st(),a=JSON.stringify(Ne(r)),o=b.useRef(!1);return lt(()=>{o.current=!0}),b.useCallback((r,s={})=>{if(T(o.current,ct),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=Pe(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:Fe([t,c.pathname])),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}b.createContext(null);function ft(e,{relative:t}={}){let{matches:n}=b.useContext(Qe),{pathname:r}=st(),i=JSON.stringify(Ne(n));return b.useMemo(()=>Pe(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function pt(e,t){return mt(e,t)}function mt(e,t,n){w(ot(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=b.useContext(Xe),{matches:i}=b.useContext(Qe),a=i[i.length-1],o=a?a.params:{},s=a?a.pathname:`/`,c=a?a.pathnameBase:`/`,l=a&&a.route;{let e=l&&l.path||``;Nt(s,!l||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let u=st(),d;if(t){let e=typeof t==`string`?ce(t):t;w(c===`/`||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=u;let f=d.pathname||`/`,p=f;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);p=`/`+f.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let m=D(e,{pathname:p});T(l||m!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),T(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=xt(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:Fe([c,r.encodeLocation?r.encodeLocation(e.pathname.replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:Fe([c,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&h?b.createElement(Ze.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,unstable_mask:void 0,...d},navigationType:`POP`}},h):h}function ht(){let e=At(),t=Be(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=b.createElement(b.Fragment,null,b.createElement(`p`,null,`💿 Hey developer 👋`),b.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,b.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,b.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),b.createElement(b.Fragment,null,b.createElement(`h2`,null,`Unexpected Application Error!`),b.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?b.createElement(`pre`,{style:i},n):null,o)}var gt=b.createElement(ht,null),_t=class extends b.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=it(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:b.createElement(Qe.Provider,{value:this.props.routeContext},b.createElement($e.Provider,{value:e,children:this.props.component}));return this.context?b.createElement(yt,{error:e},t):t}};_t.contextType=Ke;var vt=new WeakMap;function yt({children:e,error:t}){let{basename:n}=b.useContext(Xe);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=rt(t.digest);if(e){let r=vt.get(t);if(r)throw r;let i=Ue(e.location,n);if(He&&!vt.get(t))if(i.isExternal||e.reloadDocument)window.location.href=i.absoluteURL||i.to;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:e.replace}));throw vt.set(t,n),n}return b.createElement(`meta`,{httpEquiv:`refresh`,content:`0;url=${i.absoluteURL||i.to}`})}}return e}function bt({routeContext:e,match:t,children:n}){let r=b.useContext(We);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),b.createElement(Qe.Provider,{value:e},n)}function xt(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,a=r?.errors;if(a!=null){let e=i.findIndex(e=>e.route.id&&a?.[e.route.id]!==void 0);w(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,c=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||c){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let c=n?.onError,l=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},unstable_pattern:Ve(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,d=!1,f=null,p=null;r&&(u=a&&n.route.id?a[n.route.id]:void 0,f=n.route.errorElement||gt,o&&(s<0&&c===0?(Nt(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,c+1)),h=()=>{let t;return t=u?f:d?p:n.route.Component?b.createElement(n.route.Component,null):n.route.element?n.route.element:e,b.createElement(bt,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||c===0)?b.createElement(_t,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):h()},null)}function St(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ct(e){let t=b.useContext(We);return w(t,St(e)),t}function wt(e){let t=b.useContext(Ge);return w(t,St(e)),t}function Tt(e){let t=b.useContext(Qe);return w(t,St(e)),t}function Et(e){let t=Tt(e),n=t.matches[t.matches.length-1];return w(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Dt(){return Et(`useRouteId`)}function Ot(){return wt(`useNavigation`).navigation}function kt(){let{matches:e,loaderData:t}=wt(`useMatches`);return b.useMemo(()=>e.map(e=>de(e,t)),[e,t])}function At(){let e=b.useContext($e),t=wt(`useRouteError`),n=Et(`useRouteError`);return e===void 0?t.errors?.[n]:e}function jt(){let{router:e}=Ct(`useNavigate`),t=Et(`useNavigate`),n=b.useRef(!1);return lt(()=>{n.current=!0}),b.useCallback(async(r,i={})=>{T(n.current,ct),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var Mt={};function Nt(e,t,n){!t&&!Mt[e]&&(Mt[e]=!0,T(!1,n))}b.useOptimistic,b.memo(Pt);function Pt({routes:e,future:t,state:n,isStatic:r,onError:i}){return mt(e,void 0,{state:n,isStatic:r,onError:i,future:t})}function Ft(e){w(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function It({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,unstable_useTransitions:o}){w(!ot(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=b.useMemo(()=>({basename:s,navigator:i,static:a,unstable_useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=ce(n));let{pathname:l=`/`,search:u=``,hash:d=``,state:f=null,key:p=`default`,unstable_mask:m}=n,h=b.useMemo(()=>{let e=De(l,s);return e==null?null:{location:{pathname:e,search:u,hash:d,state:f,key:p,unstable_mask:m},navigationType:r}},[s,l,u,d,f,p,r,m]);return T(h!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:b.createElement(Xe.Provider,{value:c},b.createElement(Ze.Provider,{children:t,value:h}))}function Lt({children:e,location:t}){return pt(Rt(e),t)}function Rt(e,t=[]){let n=[];return b.Children.forEach(e,(e,r)=>{if(!b.isValidElement(e))return;let i=[...t,r];if(e.type===b.Fragment){n.push.apply(n,Rt(e.props.children,i));return}w(e.type===Ft,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),w(!e.props.index||!e.props.children,`An index route cannot have child routes.`);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.hasErrorBoundary===!0||e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=Rt(e.props.children,i)),n.push(a)}),n}var zt=`get`,Bt=`application/x-www-form-urlencoded`;function Vt(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function Ht(e){return Vt(e)&&e.tagName.toLowerCase()===`button`}function Ut(e){return Vt(e)&&e.tagName.toLowerCase()===`form`}function Wt(e){return Vt(e)&&e.tagName.toLowerCase()===`input`}function Gt(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Kt(e,t){return e.button===0&&(!t||t===`_self`)&&!Gt(e)}var qt=null;function Jt(){if(qt===null)try{new FormData(document.createElement(`form`),0),qt=!1}catch{qt=!0}return qt}var Yt=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function Xt(e){return e!=null&&!Yt.has(e)?(T(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Bt}"`),null):e}function Zt(e,t){let n,r,i,a,o;if(Ut(e)){let o=e.getAttribute(`action`);r=o?De(o,t):null,n=e.getAttribute(`method`)||zt,i=Xt(e.getAttribute(`enctype`))||Bt,a=new FormData(e)}else if(Ht(e)||Wt(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?De(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||zt,i=Xt(e.getAttribute(`formenctype`))||Xt(o.getAttribute(`enctype`))||Bt,a=new FormData(o,e),!Jt()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(Vt(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=zt,r=null,i=Bt,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var Qt={"&":`\\u0026`,">":`\\u003e`,"<":`\\u003c`,"\u2028":`\\u2028`,"\u2029":`\\u2029`},$t=/[&><\u2028\u2029]/g;function en(e){return e.replace($t,e=>Qt[e])}function tn(e,t){if(e===!1||e==null)throw Error(t)}function nn(e,t,n,r){let i=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return n?i.pathname.endsWith(`/`)?i.pathname=`${i.pathname}_.${r}`:i.pathname=`${i.pathname}.${r}`:i.pathname===`/`?i.pathname=`_root.${r}`:t&&De(i.pathname,t)===`/`?i.pathname=`${t.replace(/\/$/,``)}/_root.${r}`:i.pathname=`${i.pathname.replace(/\/$/,``)}.${r}`,i}async function rn(e,t){if(e.id in t)return t[e.id];try{let n=await ee(()=>import(e.module),[]);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function an(e){return e!=null&&typeof e.page==`string`}function on(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function sn(e,t,n){return fn((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await rn(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(on).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function cn(e,t,n,r,i,a){let o=(e,t)=>n[t]?e.route.id!==n[t].route.id:!0,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function ln(e,t,{includeHydrateFallback:n}={}){return un(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function un(e){return[...new Set(e)]}function dn(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function fn(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!an(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(dn(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function pn(){let e=b.useContext(We);return tn(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function mn(){let e=b.useContext(Ge);return tn(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}var hn=b.createContext(void 0);hn.displayName=`FrameworkContext`;function gn(){let e=b.useContext(hn);return tn(e,`You must render this element inside a <HydratedRouter> element`),e}function _n(e,t){let n=b.useContext(hn),[r,i]=b.useState(!1),[a,o]=b.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=b.useRef(null);b.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),b.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:vn(s,p),onBlur:vn(c,m),onMouseEnter:vn(l,p),onMouseLeave:vn(u,m),onTouchStart:vn(d,p)}]:[a,f,{}]:[!1,f,{}]}function vn(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function yn({page:e,...t}){let{router:n}=pn(),r=b.useMemo(()=>D(n.routes,e,n.basename),[n.routes,e,n.basename]);return r?b.createElement(xn,{page:e,matches:r,...t}):null}function bn(e){let{manifest:t,routeModules:n}=gn(),[r,i]=b.useState([]);return b.useEffect(()=>{let r=!1;return sn(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function xn({page:e,matches:t,...n}){let r=st(),{future:i,manifest:a,routeModules:o}=gn(),{basename:s}=pn(),{loaderData:c,matches:l}=mn(),u=b.useMemo(()=>cn(e,t,l,a,r,`data`),[e,t,l,a,r]),d=b.useMemo(()=>cn(e,t,l,a,r,`assets`),[e,t,l,a,r]),f=b.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,l=!1;if(t.forEach(e=>{let t=a.routes[e.route.id];!t||!t.hasLoader||(!u.some(t=>t.route.id===e.route.id)&&e.route.id in c&&o[e.route.id]?.shouldRevalidate||t.hasClientLoader?l=!0:n.add(e.route.id))}),n.size===0)return[];let d=nn(e,s,i.unstable_trailingSlashAwareDataRequests,`data`);return l&&n.size>0&&d.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[d.pathname+d.search]},[s,i.unstable_trailingSlashAwareDataRequests,c,r,a,u,t,e,o]),p=b.useMemo(()=>ln(d,a),[d,a]),m=bn(d);return b.createElement(b.Fragment,null,f.map(e=>b.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),p.map(e=>b.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),m.map(({key:e,link:t})=>b.createElement(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function Sn(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}var Cn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{Cn&&(window.__reactRouterVersion=`7.13.1`)}catch{}function wn({basename:e,children:t,unstable_useTransitions:n,window:r}){let i=b.useRef();i.current??=re({window:r,v5Compat:!0});let a=i.current,[o,s]=b.useState({action:a.action,location:a.location}),c=b.useCallback(e=>{n===!1?s(e):b.startTransition(()=>s(e))},[n]);return b.useLayoutEffect(()=>a.listen(c),[a,c]),b.createElement(It,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,unstable_useTransitions:n})}function Tn({basename:e,children:t,history:n,unstable_useTransitions:r}){let[i,a]=b.useState({action:n.action,location:n.location}),o=b.useCallback(e=>{r===!1?a(e):b.startTransition(()=>a(e))},[r]);return b.useLayoutEffect(()=>n.listen(o),[n,o]),b.createElement(It,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:n,unstable_useTransitions:r})}Tn.displayName=`unstable_HistoryRouter`;var En=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Dn=b.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,unstable_mask:o,state:s,target:c,to:l,preventScrollReset:u,viewTransition:d,unstable_defaultShouldRevalidate:f,...p},m){let{basename:h,navigator:g,unstable_useTransitions:_}=b.useContext(Xe),v=typeof l==`string`&&En.test(l),y=Ue(l,h);l=y.to;let x=at(l,{relative:r}),S=st(),C=null;if(o){let e=Pe(o,[],S.unstable_mask?S.unstable_mask.pathname:`/`,!0);h!==`/`&&(e.pathname=e.pathname===`/`?h:Fe([h,e.pathname])),C=g.createHref(e)}let[ee,te,ne]=_n(n,p),re=Pn(l,{replace:a,unstable_mask:o,state:s,target:c,preventScrollReset:u,relative:r,viewTransition:d,unstable_defaultShouldRevalidate:f,unstable_useTransitions:_});function w(t){e&&e(t),t.defaultPrevented||re(t)}let T=!(y.isExternal||i),ie=b.createElement(`a`,{...p,...ne,href:(T?C:void 0)||y.absoluteURL||x,onClick:T?w:e,ref:Sn(m,te),target:c,"data-discover":!v&&t===`render`?`true`:void 0});return ee&&!v?b.createElement(b.Fragment,null,ie,b.createElement(yn,{page:x})):ie});Dn.displayName=`Link`;var On=b.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=ft(a,{relative:c.relative}),d=st(),f=b.useContext(Ge),{navigator:p,basename:m}=b.useContext(Xe),h=f!=null&&Wn(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,_=d.pathname,v=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(_=_.toLowerCase(),v=v?v.toLowerCase():null,g=g.toLowerCase()),v&&m&&(v=De(v,m)||v);let y=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,x=_===g||!r&&_.startsWith(g)&&_.charAt(y)===`/`,S=v!=null&&(v===g||!r&&v.startsWith(g)&&v.charAt(g.length)===`/`),C={isActive:x,isPending:S,isTransitioning:h},ee=x?e:void 0,te;te=typeof n==`function`?n(C):[n,x?`active`:null,S?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let ne=typeof i==`function`?i(C):i;return b.createElement(Dn,{...c,"aria-current":ee,className:te,ref:l,style:ne,to:a,viewTransition:o},typeof s==`function`?s(C):s)});On.displayName=`NavLink`;var kn=b.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=zt,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,unstable_defaultShouldRevalidate:f,...p},m)=>{let{unstable_useTransitions:h}=b.useContext(Xe),g=Ln(),_=Rn(s,{relative:l}),v=o.toLowerCase()===`get`?`get`:`post`,y=typeof s==`string`&&En.test(s);return b.createElement(`form`,{ref:m,method:v,action:_,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,p=()=>g(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d,unstable_defaultShouldRevalidate:f});h&&n!==!1?b.startTransition(()=>p()):p()},...p,"data-discover":!y&&e===`render`?`true`:void 0})});kn.displayName=`Form`;function An({getKey:e,storageKey:t,...n}){let r=b.useContext(hn),{basename:i}=b.useContext(Xe),a=st(),o=kt();Hn({getKey:e,storageKey:t});let s=b.useMemo(()=>{if(!r||!e)return null;let t=Vn(a,o,i,e);return t===a.key?null:t},[]);if(!r||r.isSpaMode)return null;let c=((e,t)=>{if(!window.history.state||!window.history.state.key){let e=Math.random().toString(32).slice(2);window.history.replaceState({key:e},``)}try{let n=JSON.parse(sessionStorage.getItem(e)||`{}`)[t||window.history.state.key];typeof n==`number`&&window.scrollTo(0,n)}catch(t){console.error(t),sessionStorage.removeItem(e)}}).toString();return b.createElement(`script`,{...n,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${c})(${en(JSON.stringify(t||zn))}, ${en(JSON.stringify(s))})`}})}An.displayName=`ScrollRestoration`;function jn(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Mn(e){let t=b.useContext(We);return w(t,jn(e)),t}function Nn(e){let t=b.useContext(Ge);return w(t,jn(e)),t}function Pn(e,{target:t,replace:n,unstable_mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,unstable_defaultShouldRevalidate:c,unstable_useTransitions:l}={}){let u=ut(),d=st(),f=ft(e,{relative:o});return b.useCallback(p=>{if(Kt(p,t)){p.preventDefault();let t=n===void 0?se(d)===se(f):n,m=()=>u(e,{replace:t,unstable_mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,unstable_defaultShouldRevalidate:c});l?b.startTransition(()=>m()):m()}},[d,u,f,n,r,i,t,e,a,o,s,c,l])}var Fn=0,In=()=>`__${String(++Fn)}__`;function Ln(){let{router:e}=Mn(`useSubmit`),{basename:t}=b.useContext(Xe),n=Dt(),r=e.fetch,i=e.navigate;return b.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=Zt(e,t);a.navigate===!1?await r(a.fetcherKey||In(),n,a.action||o,{unstable_defaultShouldRevalidate:a.unstable_defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync}):await i(a.action||o,{unstable_defaultShouldRevalidate:a.unstable_defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function Rn(e,{relative:t}={}){let{basename:n}=b.useContext(Xe),r=b.useContext(Qe);w(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={...ft(e||`.`,{relative:t})},o=st();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:Fe([n,a.pathname])),se(a)}var zn=`react-router-scroll-positions`,Bn={};function Vn(e,t,n,r){let i=null;return r&&(i=r(n===`/`?e:{...e,pathname:De(e.pathname,n)||e.pathname},t)),i??=e.key,i}function Hn({getKey:e,storageKey:t}={}){let{router:n}=Mn(`useScrollRestoration`),{restoreScrollPosition:r,preventScrollReset:i}=Nn(`useScrollRestoration`),{basename:a}=b.useContext(Xe),o=st(),s=kt(),c=Ot();b.useEffect(()=>(window.history.scrollRestoration=`manual`,()=>{window.history.scrollRestoration=`auto`}),[]),Un(b.useCallback(()=>{if(c.state===`idle`){let t=Vn(o,s,a,e);Bn[t]=window.scrollY}try{sessionStorage.setItem(t||zn,JSON.stringify(Bn))}catch(e){T(!1,`Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`)}window.history.scrollRestoration=`auto`},[c.state,e,a,o,s,t])),typeof document<`u`&&(b.useLayoutEffect(()=>{try{let e=sessionStorage.getItem(t||zn);e&&(Bn=JSON.parse(e))}catch{}},[t]),b.useLayoutEffect(()=>{let t=n?.enableScrollRestoration(Bn,()=>window.scrollY,e?(t,n)=>Vn(t,n,a,e):void 0);return()=>t&&t()},[n,a,e]),b.useLayoutEffect(()=>{if(r!==!1){if(typeof r==`number`){window.scrollTo(0,r);return}try{if(o.hash){let e=document.getElementById(decodeURIComponent(o.hash.slice(1)));if(e){e.scrollIntoView();return}}}catch{T(!1,`"${o.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`)}i!==!0&&window.scrollTo(0,0)}},[o,r,i]))}function Un(e,t){let{capture:n}=t||{};b.useEffect(()=>{let t=n==null?void 0:{capture:n};return window.addEventListener(`pagehide`,e,t),()=>{window.removeEventListener(`pagehide`,e,t)}},[e,n])}function Wn(e,{relative:t}={}){let n=b.useContext(qe);w(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Mn(`useViewTransitionState`),i=ft(e,{relative:t});if(!n.isTransitioning)return!1;let a=De(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=De(n.nextLocation.pathname,r)||n.nextLocation.pathname;return we(i.pathname,o)!=null||we(i.pathname,a)!=null}var Gn=s(((e,t)=>{var n=typeof Element<`u`,r=typeof Map==`function`,i=typeof Set==`function`,a=typeof ArrayBuffer==`function`&&!!ArrayBuffer.isView;function o(e,t){if(e===t)return!0;if(e&&t&&typeof e==`object`&&typeof t==`object`){if(e.constructor!==t.constructor)return!1;var s,c,l;if(Array.isArray(e)){if(s=e.length,s!=t.length)return!1;for(c=s;c--!==0;)if(!o(e[c],t[c]))return!1;return!0}var u;if(r&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!t.has(c.value[0]))return!1;for(u=e.entries();!(c=u.next()).done;)if(!o(c.value[1],t.get(c.value[0])))return!1;return!0}if(i&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!t.has(c.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(s=e.length,s!=t.length)return!1;for(c=s;c--!==0;)if(e[c]!==t[c])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf==`function`&&typeof t.valueOf==`function`)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString==`function`&&typeof t.toString==`function`)return e.toString()===t.toString();if(l=Object.keys(e),s=l.length,s!==Object.keys(t).length)return!1;for(c=s;c--!==0;)if(!Object.prototype.hasOwnProperty.call(t,l[c]))return!1;if(n&&e instanceof Element)return!1;for(c=s;c--!==0;)if(!((l[c]===`_owner`||l[c]===`__v`||l[c]===`__o`)&&e.$$typeof)&&!o(e[l[c]],t[l[c]]))return!1;return!0}return e!==e&&t!==t}t.exports=function(e,t){try{return o(e,t)}catch(e){if((e.message||``).match(/stack|recursion/i))return console.warn(`react-fast-compare cannot handle circular refs`),!1;throw e}}})),Kn=s(((e,t)=>{t.exports=function(e,t,n,r,i,a,o,s){if(!e){var c;if(t===void 0)c=Error(`Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.`);else{var l=[n,r,i,a,o,s],u=0;c=Error(t.replace(/%s/g,function(){return l[u++]})),c.name=`Invariant Violation`}throw c.framesToPop=1,c}}})),qn=s(((e,t)=>{t.exports=function(e,t,n,r){var i=n?n.call(r,e,t):void 0;if(i!==void 0)return!!i;if(e===t)return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),c=0;c<a.length;c++){var l=a[c];if(!s(l))return!1;var u=e[l],d=t[l];if(i=n?n.call(r,u,d,l):void 0,i===!1||i===void 0&&u!==d)return!1}return!0}})),Jn=u(Gn()),Yn=u(Kn()),Xn=u(qn()),Zn=(e=>(e.BASE=`base`,e.BODY=`body`,e.HEAD=`head`,e.HTML=`html`,e.LINK=`link`,e.META=`meta`,e.NOSCRIPT=`noscript`,e.SCRIPT=`script`,e.STYLE=`style`,e.TITLE=`title`,e.FRAGMENT=`Symbol(react.fragment)`,e))(Zn||{}),Qn={link:{rel:[`amphtml`,`canonical`,`alternate`]},script:{type:[`application/ld+json`]},meta:{charset:``,name:[`generator`,`robots`,`description`],property:[`og:type`,`og:title`,`og:url`,`og:image`,`og:image:alt`,`og:description`,`twitter:url`,`twitter:title`,`twitter:description`,`twitter:image`,`twitter:image:alt`,`twitter:card`,`twitter:site`]}},$n=Object.values(Zn),er={accesskey:`accessKey`,charset:`charSet`,class:`className`,contenteditable:`contentEditable`,contextmenu:`contextMenu`,"http-equiv":`httpEquiv`,itemprop:`itemProp`,tabindex:`tabIndex`},tr=Object.entries(er).reduce((e,[t,n])=>(e[n]=t,e),{}),nr=`data-rh`,rr={DEFAULT_TITLE:`defaultTitle`,DEFER:`defer`,ENCODE_SPECIAL_CHARACTERS:`encodeSpecialCharacters`,ON_CHANGE_CLIENT_STATE:`onChangeClientState`,TITLE_TEMPLATE:`titleTemplate`,PRIORITIZE_SEO_TAGS:`prioritizeSeoTags`},ir=(e,t)=>{for(let n=e.length-1;n>=0;--n){let r=e[n];if(Object.prototype.hasOwnProperty.call(r,t))return r[t]}return null},ar=e=>{let t=ir(e,`title`),n=ir(e,rr.TITLE_TEMPLATE);if(Array.isArray(t)&&(t=t.join(``)),n&&t)return n.replace(/%s/g,()=>t);let r=ir(e,rr.DEFAULT_TITLE);return t||r||void 0},or=e=>ir(e,rr.ON_CHANGE_CLIENT_STATE)||(()=>{}),sr=(e,t)=>t.filter(t=>t[e]!==void 0).map(t=>t[e]).reduce((e,t)=>({...e,...t}),{}),cr=(e,t)=>t.filter(e=>e.base!==void 0).map(e=>e.base).reverse().reduce((t,n)=>{if(!t.length){let r=Object.keys(n);for(let i=0;i<r.length;i+=1){let a=r[i].toLowerCase();if(e.indexOf(a)!==-1&&n[a])return t.concat(n)}}return t},[]),lr=e=>console&&typeof console.warn==`function`&&console.warn(e),ur=(e,t,n)=>{let r={};return n.filter(t=>Array.isArray(t[e])?!0:(t[e]!==void 0&&lr(`Helmet: ${e} should be of type "Array". Instead found type "${typeof t[e]}"`),!1)).map(t=>t[e]).reverse().reduce((e,n)=>{let i={};n.filter(e=>{let n,a=Object.keys(e);for(let r=0;r<a.length;r+=1){let i=a[r],o=i.toLowerCase();t.indexOf(o)!==-1&&!(n===`rel`&&e[n].toLowerCase()===`canonical`)&&!(o===`rel`&&e[o].toLowerCase()===`stylesheet`)&&(n=o),t.indexOf(i)!==-1&&(i===`innerHTML`||i===`cssText`||i===`itemprop`)&&(n=i)}if(!n||!e[n])return!1;let o=e[n].toLowerCase();return r[n]||(r[n]={}),i[n]||(i[n]={}),r[n][o]?!1:(i[n][o]=!0,!0)}).reverse().forEach(t=>e.push(t));let a=Object.keys(i);for(let e=0;e<a.length;e+=1){let t=a[e];r[t]={...r[t],...i[t]}}return e},[]).reverse()},dr=(e,t)=>{if(Array.isArray(e)&&e.length){for(let n=0;n<e.length;n+=1)if(e[n][t])return!0}return!1},fr=e=>({baseTag:cr([`href`],e),bodyAttributes:sr(`bodyAttributes`,e),defer:ir(e,rr.DEFER),encode:ir(e,rr.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:sr(`htmlAttributes`,e),linkTags:ur(`link`,[`rel`,`href`],e),metaTags:ur(`meta`,[`name`,`charset`,`http-equiv`,`property`,`itemprop`],e),noscriptTags:ur(`noscript`,[`innerHTML`],e),onChangeClientState:or(e),scriptTags:ur(`script`,[`src`,`innerHTML`],e),styleTags:ur(`style`,[`cssText`],e),title:ar(e),titleAttributes:sr(`titleAttributes`,e),prioritizeSeoTags:dr(e,rr.PRIORITIZE_SEO_TAGS)}),pr=e=>Array.isArray(e)?e.join(``):e,mr=(e,t)=>{let n=Object.keys(e);for(let r=0;r<n.length;r+=1)if(t[n[r]]&&t[n[r]].includes(e[n[r]]))return!0;return!1},hr=(e,t)=>Array.isArray(e)?e.reduce((e,n)=>(mr(n,t)?e.priority.push(n):e.default.push(n),e),{priority:[],default:[]}):{default:e,priority:[]},gr=(e,t)=>({...e,[t]:void 0}),_r=[`noscript`,`script`,`style`],vr=(e,t=!0)=>t===!1?String(e):String(e).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#x27;`),yr=e=>Object.keys(e).reduce((t,n)=>{let r=e[n]===void 0?`${n}`:`${n}="${e[n]}"`;return t?`${t} ${r}`:r},``),br=(e,t,n,r)=>{let i=yr(n),a=pr(t);return i?`<${e} ${nr}="true" ${i}>${vr(a,r)}</${e}>`:`<${e} ${nr}="true">${vr(a,r)}</${e}>`},xr=(e,t,n=!0)=>t.reduce((t,r)=>{let i=r,a=Object.keys(i).filter(e=>!(e===`innerHTML`||e===`cssText`)).reduce((e,t)=>{let r=i[t]===void 0?t:`${t}="${vr(i[t],n)}"`;return e?`${e} ${r}`:r},``),o=i.innerHTML||i.cssText||``;return`${t}<${e} ${nr}="true" ${a}${_r.indexOf(e)===-1?`/>`:`>${o}</${e}>`}`},``),Sr=(e,t={})=>Object.keys(e).reduce((t,n)=>{let r=er[n];return t[r||n]=e[n],t},t),Cr=(e,t,n)=>{let r=Sr(n,{key:t,[nr]:!0});return[b.createElement(`title`,r,t)]},wr=(e,t)=>t.map((t,n)=>{let r={key:n,[nr]:!0};return Object.keys(t).forEach(e=>{let n=er[e]||e;n===`innerHTML`||n===`cssText`?r.dangerouslySetInnerHTML={__html:t.innerHTML||t.cssText}:r[n]=t[e]}),b.createElement(e,r)}),Tr=(e,t,n=!0)=>{switch(e){case`title`:return{toComponent:()=>Cr(e,t.title,t.titleAttributes),toString:()=>br(e,t.title,t.titleAttributes,n)};case`bodyAttributes`:case`htmlAttributes`:return{toComponent:()=>Sr(t),toString:()=>yr(t)};default:return{toComponent:()=>wr(e,t),toString:()=>xr(e,t,n)}}},Er=({metaTags:e,linkTags:t,scriptTags:n,encode:r})=>{let i=hr(e,Qn.meta),a=hr(t,Qn.link),o=hr(n,Qn.script);return{priorityMethods:{toComponent:()=>[...wr(`meta`,i.priority),...wr(`link`,a.priority),...wr(`script`,o.priority)],toString:()=>`${Tr(`meta`,i.priority,r)} ${Tr(`link`,a.priority,r)} ${Tr(`script`,o.priority,r)}`},metaTags:i.default,linkTags:a.default,scriptTags:o.default}},Dr=e=>{let{baseTag:t,bodyAttributes:n,encode:r=!0,htmlAttributes:i,noscriptTags:a,styleTags:o,title:s=``,titleAttributes:c,prioritizeSeoTags:l}=e,{linkTags:u,metaTags:d,scriptTags:f}=e,p={toComponent:()=>[],toString:()=>``};return l&&({priorityMethods:p,linkTags:u,metaTags:d,scriptTags:f}=Er(e)),{priority:p,base:Tr(`base`,t,r),bodyAttributes:Tr(`bodyAttributes`,n,r),htmlAttributes:Tr(`htmlAttributes`,i,r),link:Tr(`link`,u,r),meta:Tr(`meta`,d,r),noscript:Tr(`noscript`,a,r),script:Tr(`script`,f,r),style:Tr(`style`,o,r),title:Tr(`title`,{title:s,titleAttributes:c},r)}},Or=[],kr=!!(typeof window<`u`&&window.document&&window.document.createElement),Ar=class{instances=[];canUseDOM=kr;context;value={setHelmet:e=>{this.context.helmet=e},helmetInstances:{get:()=>this.canUseDOM?Or:this.instances,add:e=>{(this.canUseDOM?Or:this.instances).push(e)},remove:e=>{let t=(this.canUseDOM?Or:this.instances).indexOf(e);(this.canUseDOM?Or:this.instances).splice(t,1)}}};constructor(e,t){this.context=e,this.canUseDOM=t||!1,t||(e.helmet=Dr({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:``,titleAttributes:{}}))}},jr=parseInt(`19.1.1`.split(`.`)[0],10)>=19,Mr=b.createContext({}),Nr=class e extends b.Component{static canUseDOM=kr;helmetData;constructor(t){super(t),jr?this.helmetData=null:this.helmetData=new Ar(this.props.context||{},e.canUseDOM)}render(){return jr?b.createElement(b.Fragment,null,this.props.children):b.createElement(Mr.Provider,{value:this.helmetData.value},this.props.children)}},Pr=(e,t)=>{let n=document.head||document.querySelector(`head`),r=n.querySelectorAll(`${e}[${nr}]`),i=[].slice.call(r),a=[],o;return t&&t.length&&t.forEach(t=>{let n=document.createElement(e);for(let e in t)if(Object.prototype.hasOwnProperty.call(t,e))if(e===`innerHTML`)n.innerHTML=t.innerHTML;else if(e===`cssText`){let e=t.cssText;n.appendChild(document.createTextNode(e))}else{let r=e,i=t[r]===void 0?``:t[r];n.setAttribute(e,i)}n.setAttribute(nr,`true`),i.some((e,t)=>(o=t,n.isEqualNode(e)))?i.splice(o,1):a.push(n)}),i.forEach(e=>e.parentNode?.removeChild(e)),a.forEach(e=>n.appendChild(e)),{oldTags:i,newTags:a}},Fr=(e,t)=>{let n=document.getElementsByTagName(e)[0];if(!n)return;let r=n.getAttribute(nr),i=r?r.split(`,`):[],a=[...i],o=Object.keys(t);for(let e of o){let r=t[e]||``;n.getAttribute(e)!==r&&n.setAttribute(e,r),i.indexOf(e)===-1&&i.push(e);let o=a.indexOf(e);o!==-1&&a.splice(o,1)}for(let e=a.length-1;e>=0;--e)n.removeAttribute(a[e]);i.length===a.length?n.removeAttribute(nr):n.getAttribute(nr)!==o.join(`,`)&&n.setAttribute(nr,o.join(`,`))},Ir=(e,t)=>{e!==void 0&&document.title!==e&&(document.title=pr(e)),Fr(`title`,t)},Lr=(e,t)=>{let{baseTag:n,bodyAttributes:r,htmlAttributes:i,linkTags:a,metaTags:o,noscriptTags:s,onChangeClientState:c,scriptTags:l,styleTags:u,title:d,titleAttributes:f}=e;Fr(`body`,r),Fr(`html`,i),Ir(d,f);let p={baseTag:Pr(`base`,n),linkTags:Pr(`link`,a),metaTags:Pr(`meta`,o),noscriptTags:Pr(`noscript`,s),scriptTags:Pr(`script`,l),styleTags:Pr(`style`,u)},m={},h={};Object.keys(p).forEach(e=>{let{newTags:t,oldTags:n}=p[e];t.length&&(m[e]=t),n.length&&(h[e]=p[e].oldTags)}),t&&t(),c(e,m,h)},Rr=null,zr=e=>{Rr&&cancelAnimationFrame(Rr),e.defer?Rr=requestAnimationFrame(()=>{Lr(e,()=>{Rr=null})}):(Lr(e),Rr=null)},Br=class extends b.Component{rendered=!1;shouldComponentUpdate(e){return!(0,Xn.default)(e,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){let{helmetInstances:e}=this.props.context;e.remove(this),this.emitChange()}emitChange(){let{helmetInstances:e,setHelmet:t}=this.props.context,n=null,r=fr(e.get().map(e=>{let{context:t,...n}=e.props;return n}));Nr.canUseDOM?zr(r):Dr&&(n=Dr(r)),t(n)}init(){if(this.rendered)return;this.rendered=!0;let{helmetInstances:e}=this.props.context;e.add(this),this.emitChange()}render(){return this.init(),null}},Vr=[],Hr=e=>{let t={};for(let n of Object.keys(e))t[tr[n]||n]=e[n];return t},Ur=e=>{let t={};for(let n of Object.keys(e)){let r=er[n];t[r||n]=e[n]}return t},Wr=(e,t)=>{if(!kr)return;let n=document.getElementsByTagName(e)[0];if(!n)return;let r=`data-rh-managed`,i=n.getAttribute(r),a=i?i.split(`,`):[],o=Object.keys(t);for(let e of a)o.includes(e)||n.removeAttribute(e);for(let e of o){let r=t[e];r==null||r===!1?n.removeAttribute(e):r===!0?n.setAttribute(e,``):n.setAttribute(e,String(r))}o.length>0?n.setAttribute(r,o.join(`,`)):n.removeAttribute(r)},Gr=()=>{let e={},t={};for(let n of Vr){let{htmlAttributes:r,bodyAttributes:i}=n.props;r&&Object.assign(e,Hr(r)),i&&Object.assign(t,Hr(i))}Wr(`html`,e),Wr(`body`,t)},Kr=class extends b.Component{componentDidMount(){Vr.push(this),Gr()}componentDidUpdate(){Gr()}componentWillUnmount(){let e=Vr.indexOf(this);e!==-1&&Vr.splice(e,1),Gr()}resolveTitle(){let{title:e,titleTemplate:t,defaultTitle:n}=this.props;return e&&t?t.replace(/%s/g,()=>Array.isArray(e)?e.join(``):e):e||n||void 0}renderTitle(){let e=this.resolveTitle();if(e===void 0)return null;let t=this.props.titleAttributes||{};return b.createElement(`title`,Ur(t),e)}renderBase(){let{base:e}=this.props;return e?b.createElement(`base`,Ur(e)):null}renderMeta(){let{meta:e}=this.props;return!e||!Array.isArray(e)?null:e.map((e,t)=>b.createElement(`meta`,{key:t,...Ur(e)}))}renderLink(){let{link:e}=this.props;return!e||!Array.isArray(e)?null:e.map((e,t)=>b.createElement(`link`,{key:t,...Ur(e)}))}renderScript(){let{script:e}=this.props;return!e||!Array.isArray(e)?null:e.map((e,t)=>{let{innerHTML:n,...r}=e,i=Ur(r);return n&&(i.dangerouslySetInnerHTML={__html:n}),b.createElement(`script`,{key:t,...i})})}renderStyle(){let{style:e}=this.props;return!e||!Array.isArray(e)?null:e.map((e,t)=>{let{cssText:n,...r}=e,i=Ur(r);return n&&(i.dangerouslySetInnerHTML={__html:n}),b.createElement(`style`,{key:t,...i})})}renderNoscript(){let{noscript:e}=this.props;return!e||!Array.isArray(e)?null:e.map((e,t)=>{let{innerHTML:n,...r}=e,i=Ur(r);return n&&(i.dangerouslySetInnerHTML={__html:n}),b.createElement(`noscript`,{key:t,...i})})}render(){return b.createElement(b.Fragment,null,this.renderTitle(),this.renderBase(),this.renderMeta(),this.renderLink(),this.renderScript(),this.renderStyle(),this.renderNoscript())}},qr=class extends b.Component{static defaultProps={defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1};shouldComponentUpdate(e){return!(0,Jn.default)(gr(this.props,`helmetData`),gr(e,`helmetData`))}mapNestedChildrenToProps(e,t){if(!t)return null;switch(e.type){case`script`:case`noscript`:return{innerHTML:t};case`style`:return{cssText:t};default:throw Error(`<${e.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(e,t,n,r){return{...t,[e.type]:[...t[e.type]||[],{...n,...this.mapNestedChildrenToProps(e,r)}]}}mapObjectTypeChildren(e,t,n,r){switch(e.type){case`title`:return{...t,[e.type]:r,titleAttributes:{...n}};case`body`:return{...t,bodyAttributes:{...n}};case`html`:return{...t,htmlAttributes:{...n}};default:return{...t,[e.type]:{...n}}}}mapArrayTypeChildrenToProps(e,t){let n={...t};return Object.keys(e).forEach(t=>{n={...n,[t]:e[t]}}),n}warnOnInvalidChildren(e,t){return(0,Yn.default)($n.some(t=>e.type===t),typeof e.type==`function`?`You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.`:`Only elements types ${$n.join(`, `)} are allowed. Helmet does not support rendering <${e.type}> elements. Refer to our API for more information.`),(0,Yn.default)(!t||typeof t==`string`||Array.isArray(t)&&!t.some(e=>typeof e!=`string`),`Helmet expects a string as a child of <${e.type}>. Did you forget to wrap your children in braces? ( <${e.type}>{\`\`}</${e.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(e,t){let n={};return b.Children.forEach(e,e=>{if(!e||!e.props)return;let{children:r,...i}=e.props,a=Object.keys(i).reduce((e,t)=>(e[tr[t]||t]=i[t],e),{}),{type:o}=e;switch(typeof o==`symbol`?o=o.toString():this.warnOnInvalidChildren(e,r),o){case`Symbol(react.fragment)`:t=this.mapChildrenToProps(r,t);break;case`link`:case`meta`:case`noscript`:case`script`:case`style`:n=this.flattenArrayTypeChildren(e,n,a,r);break;default:t=this.mapObjectTypeChildren(e,t,a,r);break}}),this.mapArrayTypeChildrenToProps(n,t)}render(){let{children:e,...t}=this.props,n={...t},{helmetData:r}=t;return e&&(n=this.mapChildrenToProps(e,n)),r&&!(r instanceof Ar)&&(r=new Ar(r.context,!0),delete n.helmetData),jr?b.createElement(Kr,{...n}):r?b.createElement(Br,{...n,context:r.value}):b.createElement(Mr.Consumer,null,e=>b.createElement(Br,{...n,context:e}))}},Jr=s((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),k=s(((e,t)=>{t.exports=Jr()}))(),Yr=(0,b.createContext)({theme:`dark`,toggleTheme:()=>{}});function Xr({children:e}){let[t,n]=(0,b.useState)(()=>{let e=localStorage.getItem(`theme`);return e===`light`||e===`dark`?e:`dark`});return(0,b.useEffect)(()=>{document.documentElement.setAttribute(`data-theme`,t),localStorage.setItem(`theme`,t)},[t]),(0,k.jsx)(Yr.Provider,{value:{theme:t,toggleTheme:()=>n(e=>e===`dark`?`light`:`dark`)},children:e})}function Zr(){return(0,b.useContext)(Yr)}var Qr=(0,b.createContext)({});function $r(e){let t=(0,b.useRef)(null);return t.current===null&&(t.current=e()),t.current}var ei=typeof window<`u`?b.useLayoutEffect:b.useEffect,ti=(0,b.createContext)(null);function ni(e,t){e.indexOf(t)===-1&&e.push(t)}function ri(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}var ii=(e,t,n)=>n>t?t:n<e?e:n,ai={},oi=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function si(e){return typeof e==`object`&&!!e}var ci=e=>/^0[^.\s]+$/u.test(e);function li(e){let t;return()=>(t===void 0&&(t=e()),t)}var ui=e=>e,di=(e,t)=>n=>t(e(n)),fi=(...e)=>e.reduce(di),pi=(e,t,n)=>{let r=t-e;return r===0?1:(n-e)/r},mi=class{constructor(){this.subscriptions=[]}add(e){return ni(this.subscriptions,e),()=>ri(this.subscriptions,e)}notify(e,t,n){let r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,t,n);else for(let i=0;i<r;i++){let r=this.subscriptions[i];r&&r(e,t,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}},hi=e=>e*1e3,A=e=>e/1e3;function gi(e,t){return t?1e3/t*e:0}var _i=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,vi=1e-7,yi=12;function bi(e,t,n,r,i){let a,o,s=0;do o=t+(n-t)/2,a=_i(o,r,i)-e,a>0?n=o:t=o;while(Math.abs(a)>vi&&++s<yi);return o}function xi(e,t,n,r){if(e===t&&n===r)return ui;let i=t=>bi(t,0,1,e,n);return e=>e===0||e===1?e:_i(i(e),t,r)}var Si=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Ci=e=>t=>1-e(1-t),wi=xi(.33,1.53,.69,.99),Ti=Ci(wi),Ei=Si(Ti),Di=e=>e>=1?1:(e*=2)<1?.5*Ti(e):.5*(2-2**(-10*(e-1))),Oi=e=>1-Math.sin(Math.acos(e)),ki=Ci(Oi),Ai=Si(Oi),ji=xi(.42,0,1,1),Mi=xi(0,0,.58,1),Ni=xi(.42,0,.58,1),Pi=e=>Array.isArray(e)&&typeof e[0]!=`number`,Fi=e=>Array.isArray(e)&&typeof e[0]==`number`,Ii={linear:ui,easeIn:ji,easeInOut:Ni,easeOut:Mi,circIn:Oi,circInOut:Ai,circOut:ki,backIn:Ti,backInOut:Ei,backOut:wi,anticipate:Di},j=e=>typeof e==`string`,M=e=>{if(Fi(e)){e.length;let[t,n,r,i]=e;return xi(t,n,r,i)}else if(j(e))return Ii[e],`${e}`,Ii[e];return e},Li=[`setup`,`read`,`resolveKeyframes`,`preUpdate`,`update`,`preRender`,`render`,`postRender`],Ri={value:null,addProjectionMetrics:null};function zi(e,t){let n=new Set,r=new Set,i=!1,a=!1,o=new WeakSet,s={delta:0,timestamp:0,isProcessing:!1},c=0;function l(t){o.has(t)&&(u.schedule(t),e()),c++,t(s)}let u={schedule:(e,t=!1,a=!1)=>{let s=a&&i?n:r;return t&&o.add(e),s.add(e),e},cancel:e=>{r.delete(e),o.delete(e)},process:e=>{if(s=e,i){a=!0;return}i=!0;let o=n;n=r,r=o,n.forEach(l),t&&Ri.value&&Ri.value.frameloop[t].push(c),c=0,n.clear(),i=!1,a&&(a=!1,u.process(e))}};return u}var Bi=40;function Vi(e,t){let n=!1,r=!0,i={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,o=Li.reduce((e,n)=>(e[n]=zi(a,t?n:void 0),e),{}),{setup:s,read:c,resolveKeyframes:l,preUpdate:u,update:d,preRender:f,render:p,postRender:m}=o,h=()=>{let a=ai.useManualTiming,o=a?i.timestamp:performance.now();n=!1,a||(i.delta=r?1e3/60:Math.max(Math.min(o-i.timestamp,Bi),1)),i.timestamp=o,i.isProcessing=!0,s.process(i),c.process(i),l.process(i),u.process(i),d.process(i),f.process(i),p.process(i),m.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(h))},g=()=>{n=!0,r=!0,i.isProcessing||e(h)};return{schedule:Li.reduce((e,t)=>{let r=o[t];return e[t]=(e,t=!1,i=!1)=>(n||g(),r.schedule(e,t,i)),e},{}),cancel:e=>{for(let t=0;t<Li.length;t++)o[Li[t]].cancel(e)},state:i,steps:o}}var{schedule:N,cancel:Hi,state:Ui,steps:Wi}=Vi(typeof requestAnimationFrame<`u`?requestAnimationFrame:ui,!0),Gi;function Ki(){Gi=void 0}var qi={now:()=>(Gi===void 0&&qi.set(Ui.isProcessing||ai.useManualTiming?Ui.timestamp:performance.now()),Gi),set:e=>{Gi=e,queueMicrotask(Ki)}},Ji={layout:0,mainThread:0,waapi:0},Yi=e=>t=>typeof t==`string`&&t.startsWith(e),Xi=Yi(`--`),Zi=Yi(`var(--`),Qi=e=>Zi(e)?$i.test(e.split(`/*`)[0].trim()):!1,$i=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function ea(e){return typeof e==`string`?e.split(`/*`)[0].includes(`var(--`):!1}var ta={test:e=>typeof e==`number`,parse:parseFloat,transform:e=>e},na={...ta,transform:e=>ii(0,1,e)},ra={...ta,default:1},ia=e=>Math.round(e*1e5)/1e5,aa=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function oa(e){return e==null}var sa=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,ca=(e,t)=>n=>!!(typeof n==`string`&&sa.test(n)&&n.startsWith(e)||t&&!oa(n)&&Object.prototype.hasOwnProperty.call(n,t)),la=(e,t,n)=>r=>{if(typeof r!=`string`)return r;let[i,a,o,s]=r.match(aa);return{[e]:parseFloat(i),[t]:parseFloat(a),[n]:parseFloat(o),alpha:s===void 0?1:parseFloat(s)}},ua=e=>ii(0,255,e),da={...ta,transform:e=>Math.round(ua(e))},fa={test:ca(`rgb`,`red`),parse:la(`red`,`green`,`blue`),transform:({red:e,green:t,blue:n,alpha:r=1})=>`rgba(`+da.transform(e)+`, `+da.transform(t)+`, `+da.transform(n)+`, `+ia(na.transform(r))+`)`};function pa(e){let t=``,n=``,r=``,i=``;return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}var ma={test:ca(`#`),parse:pa,transform:fa.transform},ha=e=>({test:t=>typeof t==`string`&&t.endsWith(e)&&t.split(` `).length===1,parse:parseFloat,transform:t=>`${t}${e}`}),ga=ha(`deg`),_a=ha(`%`),P=ha(`px`),va=ha(`vh`),ya=ha(`vw`),ba={..._a,parse:e=>_a.parse(e)/100,transform:e=>_a.transform(e*100)},xa={test:ca(`hsl`,`hue`),parse:la(`hue`,`saturation`,`lightness`),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>`hsla(`+Math.round(e)+`, `+_a.transform(ia(t))+`, `+_a.transform(ia(n))+`, `+ia(na.transform(r))+`)`},F={test:e=>fa.test(e)||ma.test(e)||xa.test(e),parse:e=>fa.test(e)?fa.parse(e):xa.test(e)?xa.parse(e):ma.parse(e),transform:e=>typeof e==`string`?e:e.hasOwnProperty(`red`)?fa.transform(e):xa.transform(e),getAnimatableNone:e=>{let t=F.parse(e);return t.alpha=0,F.transform(t)}},Sa=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function Ca(e){return isNaN(e)&&typeof e==`string`&&(e.match(aa)?.length||0)+(e.match(Sa)?.length||0)>0}var wa=`number`,Ta=`color`,Ea=`var`,Da=`var(`,Oa="${}",ka=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Aa(e){let t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[],a=0;return{values:n,split:t.replace(ka,e=>(F.test(e)?(r.color.push(a),i.push(Ta),n.push(F.parse(e))):e.startsWith(Da)?(r.var.push(a),i.push(Ea),n.push(e)):(r.number.push(a),i.push(wa),n.push(parseFloat(e))),++a,Oa)).split(Oa),indexes:r,types:i}}function ja(e){return Aa(e).values}function Ma({split:e,types:t}){let n=e.length;return r=>{let i=``;for(let a=0;a<n;a++)if(i+=e[a],r[a]!==void 0){let e=t[a];e===wa?i+=ia(r[a]):e===Ta?i+=F.transform(r[a]):i+=r[a]}return i}}function Na(e){return Ma(Aa(e))}var Pa=e=>typeof e==`number`?0:F.test(e)?F.getAnimatableNone(e):e,Fa=(e,t)=>typeof e==`number`?t?.trim().endsWith(`/`)?e:0:Pa(e);function Ia(e){let t=Aa(e);return Ma(t)(t.values.map((e,n)=>Fa(e,t.split[n])))}var La={test:Ca,parse:ja,createTransformer:Na,getAnimatableNone:Ia};function Ra(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function za({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,a=0,o=0;if(!t)i=a=o=n;else{let r=n<.5?n*(1+t):n+t-n*t,s=2*n-r;i=Ra(s,r,e+1/3),a=Ra(s,r,e),o=Ra(s,r,e-1/3)}return{red:Math.round(i*255),green:Math.round(a*255),blue:Math.round(o*255),alpha:r}}function Ba(e,t){return n=>n>0?t:e}var I=(e,t,n)=>e+(t-e)*n,Va=(e,t,n)=>{let r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},Ha=[ma,fa,xa],Ua=e=>Ha.find(t=>t.test(e));function Wa(e){let t=Ua(e);if(`${e}`,!t)return!1;let n=t.parse(e);return t===xa&&(n=za(n)),n}var Ga=(e,t)=>{let n=Wa(e),r=Wa(t);if(!n||!r)return Ba(e,t);let i={...n};return e=>(i.red=Va(n.red,r.red,e),i.green=Va(n.green,r.green,e),i.blue=Va(n.blue,r.blue,e),i.alpha=I(n.alpha,r.alpha,e),fa.transform(i))},Ka=new Set([`none`,`hidden`]);function qa(e,t){return Ka.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function L(e,t){return n=>I(e,t,n)}function R(e){return typeof e==`number`?L:typeof e==`string`?Qi(e)?Ba:F.test(e)?Ga:Za:Array.isArray(e)?Ja:typeof e==`object`?F.test(e)?Ga:Ya:Ba}function Ja(e,t){let n=[...e],r=n.length,i=e.map((e,n)=>R(e)(e,t[n]));return e=>{for(let t=0;t<r;t++)n[t]=i[t](e);return n}}function Ya(e,t){let n={...e,...t},r={};for(let i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=R(e[i])(e[i],t[i]));return e=>{for(let t in r)n[t]=r[t](e);return n}}function Xa(e,t){let n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){let a=t.types[i],o=e.indexes[a][r[a]];n[i]=e.values[o]??0,r[a]++}return n}var Za=(e,t)=>{let n=La.createTransformer(t),r=Aa(e),i=Aa(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Ka.has(e)&&!i.values.length||Ka.has(t)&&!r.values.length?qa(e,t):fi(Ja(Xa(r,i),i.values),n):(`${e}${t}`,Ba(e,t))};function Qa(e,t,n){return typeof e==`number`&&typeof t==`number`&&typeof n==`number`?I(e,t,n):R(e)(e,t)}var $a=e=>{let t=({timestamp:t})=>e(t);return{start:(e=!0)=>N.update(t,e),stop:()=>Hi(t),now:()=>Ui.isProcessing?Ui.timestamp:qi.now()}},eo=(e,t,n=10)=>{let r=``,i=Math.max(Math.round(t/n),2);for(let t=0;t<i;t++)r+=Math.round(e(t/(i-1))*1e4)/1e4+`, `;return`linear(${r.substring(0,r.length-2)})`},to=2e4;function z(e){let t=0,n=e.next(t);for(;!n.done&&t<2e4;)t+=50,n=e.next(t);return t>=2e4?1/0:t}function no(e,t=100,n){let r=n({...e,keyframes:[0,t]}),i=Math.min(z(r),to);return{type:`keyframes`,ease:e=>r.next(i*e).value/t,duration:A(i)}}var B={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function ro(e,t){return e*Math.sqrt(1-t*t)}var io=12;function ao(e,t,n){let r=n;for(let n=1;n<io;n++)r-=e(r)/t(r);return r}var oo=.001;function so({duration:e=B.duration,bounce:t=B.bounce,velocity:n=B.velocity,mass:r=B.mass}){let i,a;hi(B.maxDuration);let o=1-t;o=ii(B.minDamping,B.maxDamping,o),e=ii(B.minDuration,B.maxDuration,A(e)),o<1?(i=t=>{let r=t*o,i=r*e,a=r-n,s=ro(t,o),c=Math.exp(-i);return oo-a/s*c},a=t=>{let r=t*o*e,a=r*n+n,s=o**2*t**2*e,c=Math.exp(-r),l=ro(t**2,o);return(-i(t)+oo>0?-1:1)*((a-s)*c)/l}):(i=t=>{let r=Math.exp(-t*e),i=(t-n)*e+1;return-oo+r*i},a=t=>Math.exp(-t*e)*((n-t)*(e*e)));let s=5/e,c=ao(i,a,s);if(e=hi(e),isNaN(c))return{stiffness:B.stiffness,damping:B.damping,duration:e};{let t=c**2*r;return{stiffness:t,damping:o*2*Math.sqrt(r*t),duration:e}}}var co=[`duration`,`bounce`],lo=[`stiffness`,`damping`,`mass`];function uo(e,t){return t.some(t=>e[t]!==void 0)}function fo(e){let t={velocity:B.velocity,stiffness:B.stiffness,damping:B.damping,mass:B.mass,isResolvedFromDuration:!1,...e};if(!uo(e,lo)&&uo(e,co))if(t.velocity=0,e.visualDuration){let n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,a=2*ii(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:B.mass,stiffness:i,damping:a}}else{let n=so({...e,velocity:0});t={...t,...n,mass:B.mass},t.isResolvedFromDuration=!0}return t}function po(e=B.visualDuration,t=B.bounce){let n=typeof e==`object`?e:{visualDuration:e,keyframes:[0,1],bounce:t},{restSpeed:r,restDelta:i}=n,a=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],s={done:!1,value:a},{stiffness:c,damping:l,mass:u,duration:d,velocity:f,isResolvedFromDuration:p}=fo({...n,velocity:-A(n.velocity||0)}),m=f||0,h=l/(2*Math.sqrt(c*u)),g=o-a,_=A(Math.sqrt(c/u)),v=Math.abs(g)<5;r||=v?B.restSpeed.granular:B.restSpeed.default,i||=v?B.restDelta.granular:B.restDelta.default;let y,b,x,S,C,ee;if(h<1)x=ro(_,h),S=(m+h*_*g)/x,y=e=>o-Math.exp(-h*_*e)*(S*Math.sin(x*e)+g*Math.cos(x*e)),C=h*_*S+g*x,ee=h*_*g-S*x,b=e=>Math.exp(-h*_*e)*(C*Math.sin(x*e)+ee*Math.cos(x*e));else if(h===1){y=e=>o-Math.exp(-_*e)*(g+(m+_*g)*e);let e=m+_*g;b=t=>Math.exp(-_*t)*(_*e*t-m)}else{let e=_*Math.sqrt(h*h-1);y=t=>{let n=Math.exp(-h*_*t),r=Math.min(e*t,300);return o-n*((m+h*_*g)*Math.sinh(r)+e*g*Math.cosh(r))/e};let t=(m+h*_*g)/e,n=h*_*t-g*e,r=h*_*g-t*e;b=t=>{let i=Math.exp(-h*_*t),a=Math.min(e*t,300);return i*(n*Math.sinh(a)+r*Math.cosh(a))}}let te={calculatedDuration:p&&d||null,velocity:e=>hi(b(e)),next:e=>{if(!p&&h<1){let t=Math.exp(-h*_*e),n=Math.sin(x*e),a=Math.cos(x*e),c=o-t*(S*n+g*a),l=hi(t*(C*n+ee*a));return s.done=Math.abs(l)<=r&&Math.abs(o-c)<=i,s.value=s.done?o:c,s}let t=y(e);if(p)s.done=e>=d;else{let n=hi(b(e));s.done=Math.abs(n)<=r&&Math.abs(o-t)<=i}return s.value=s.done?o:t,s},toString:()=>{let e=Math.min(z(te),to),t=eo(t=>te.next(e*t).value,e,30);return e+`ms `+t},toTransition:()=>{}};return te}po.applyToOptions=e=>{let t=no(e,100,po);return e.ease=t.ease,e.duration=hi(t.duration),e.type=`keyframes`,e};var mo=5;function ho(e,t,n){let r=Math.max(t-mo,0);return gi(n-e(r),t-r)}function go({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:a=500,modifyTarget:o,min:s,max:c,restDelta:l=.5,restSpeed:u}){let d=e[0],f={done:!1,value:d},p=e=>s!==void 0&&e<s||c!==void 0&&e>c,m=e=>s===void 0?c:c===void 0||Math.abs(s-e)<Math.abs(c-e)?s:c,h=n*t,g=d+h,_=o===void 0?g:o(g);_!==g&&(h=_-d);let v=e=>-h*Math.exp(-e/r),y=e=>_+v(e),b=e=>{let t=v(e),n=y(e);f.done=Math.abs(t)<=l,f.value=f.done?_:n},x,S,C=e=>{p(f.value)&&(x=e,S=po({keyframes:[f.value,m(f.value)],velocity:ho(y,e,f.value),damping:i,stiffness:a,restDelta:l,restSpeed:u}))};return C(0),{calculatedDuration:null,next:e=>{let t=!1;return!S&&x===void 0&&(t=!0,b(e),C(e)),x!==void 0&&e>=x?S.next(e-x):(!t&&b(e),f)}}}function _o(e,t,n){let r=[],i=n||ai.mix||Qa,a=e.length-1;for(let n=0;n<a;n++){let a=i(e[n],e[n+1]);t&&(a=fi(Array.isArray(t)?t[n]||ui:t,a)),r.push(a)}return r}function vo(e,t,{clamp:n=!0,ease:r,mixer:i}={}){let a=e.length;if(t.length,a===1)return()=>t[0];if(a===2&&t[0]===t[1])return()=>t[1];let o=e[0]===e[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());let s=_o(t,r,i),c=s.length,l=n=>{if(o&&n<e[0])return t[0];let r=0;if(c>1)for(;r<e.length-2&&!(n<e[r+1]);r++);let i=pi(e[r],e[r+1],n);return s[r](i)};return n?t=>l(ii(e[0],e[a-1],t)):l}function yo(e,t){let n=e[e.length-1];for(let r=1;r<=t;r++){let i=pi(0,t,r);e.push(I(n,1,i))}}function bo(e){let t=[0];return yo(t,e.length-1),t}function xo(e,t){return e.map(e=>e*t)}function So(e,t){return e.map(()=>t||Ni).splice(0,e.length-1)}function Co({duration:e=300,keyframes:t,times:n,ease:r=`easeInOut`}){let i=Pi(r)?r.map(M):M(r),a={done:!1,value:t[0]},o=vo(xo(n&&n.length===t.length?n:bo(t),e),t,{ease:Array.isArray(i)?i:So(t,i)});return{calculatedDuration:e,next:t=>(a.value=o(t),a.done=t>=e,a)}}var wo=e=>e!==null;function To(e,{repeat:t,repeatType:n=`loop`},r,i=1){let a=e.filter(wo),o=i<0||t&&n!==`loop`&&t%2==1?0:a.length-1;return!o||r===void 0?a[o]:r}var Eo={decay:go,inertia:go,tween:Co,keyframes:Co,spring:po};function Do(e){typeof e.type==`string`&&(e.type=Eo[e.type])}var Oo=class{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}},ko=e=>e/100,Ao=class extends Oo{constructor(e){super(),this.state=`idle`,this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{let{motionValue:e}=this.options;e&&e.updatedAt!==qi.now()&&this.tick(qi.now()),this.isStopped=!0,this.state!==`idle`&&(this.teardown(),this.options.onStop?.())},Ji.mainThread++,this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){let{options:e}=this;Do(e);let{type:t=Co,repeat:n=0,repeatDelay:r=0,repeatType:i,velocity:a=0}=e,{keyframes:o}=e,s=t||Co;s!==Co&&typeof o[0]!=`number`&&(this.mixKeyframes=fi(ko,Qa(o[0],o[1])),o=[0,100]);let c=s({...e,keyframes:o});i===`mirror`&&(this.mirroredGenerator=s({...e,keyframes:[...o].reverse(),velocity:-a})),c.calculatedDuration===null&&(c.calculatedDuration=z(c));let{calculatedDuration:l}=c;this.calculatedDuration=l,this.resolvedDuration=l+r,this.totalDuration=this.resolvedDuration*(n+1)-r,this.generator=c}updateTime(e){let t=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime===null?this.currentTime=t:this.currentTime=this.holdTime}tick(e,t=!1){let{generator:n,totalDuration:r,mixKeyframes:i,mirroredGenerator:a,resolvedDuration:o,calculatedDuration:s}=this;if(this.startTime===null)return n.next(0);let{delay:c=0,keyframes:l,repeat:u,repeatType:d,repeatDelay:f,type:p,onUpdate:m,finalKeyframe:h}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);let g=this.currentTime-c*(this.playbackSpeed>=0?1:-1),_=this.playbackSpeed>=0?g<0:g>r;this.currentTime=Math.max(g,0),this.state===`finished`&&this.holdTime===null&&(this.currentTime=r);let v=this.currentTime,y=n;if(u){let e=Math.min(this.currentTime,r)/o,t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),n===1&&t--,t=Math.min(t,u+1),t%2&&(d===`reverse`?(n=1-n,f&&(n-=f/o)):d===`mirror`&&(y=a)),v=ii(0,1,n)*o}let b=_?{done:!1,value:l[0]}:y.next(v);i&&!_&&(b.value=i(b.value));let{done:x}=b;!_&&s!==null&&(x=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);let S=this.holdTime===null&&(this.state===`finished`||this.state===`running`&&x);return S&&p!==go&&(b.value=To(l,this.options,h,this.speed)),m&&m(b.value),S&&this.finish(),b}then(e,t){return this.finished.then(e,t)}get duration(){return A(this.calculatedDuration)}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+A(e)}get time(){return A(this.currentTime)}set time(e){e=hi(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state=`paused`,this.holdTime=e,this.tick(e))}getGeneratorVelocity(){let e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);let t=this.generator.next(e).value;return ho(e=>this.generator.next(e).value,e,t)}get speed(){return this.playbackSpeed}set speed(e){let t=this.playbackSpeed!==e;t&&this.driver&&this.updateTime(qi.now()),this.playbackSpeed=e,t&&this.driver&&(this.time=A(this.currentTime))}play(){if(this.isStopped)return;let{driver:e=$a,startTime:t}=this.options;this.driver||=e(e=>this.tick(e)),this.options.onPlay?.();let n=this.driver.now();this.state===`finished`?(this.updateFinished(),this.startTime=n):this.holdTime===null?this.startTime||=t??n:this.startTime=n-this.holdTime,this.state===`finished`&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state=`running`,this.driver.start()}pause(){this.state=`paused`,this.updateTime(qi.now()),this.holdTime=this.currentTime}complete(){this.state!==`running`&&this.play(),this.state=`finished`,this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state=`finished`,this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state=`idle`,this.stopDriver(),this.startTime=this.holdTime=null,Ji.mainThread--}stopDriver(){this.driver&&=(this.driver.stop(),void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type=`keyframes`,this.options.ease=`linear`,this.initAnimation()),this.driver?.stop(),e.observe(this)}};function jo(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}var Mo=e=>e*180/Math.PI,No=e=>Fo(Mo(Math.atan2(e[1],e[0]))),Po={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:No,rotateZ:No,skewX:e=>Mo(Math.atan(e[1])),skewY:e=>Mo(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},Fo=e=>(e%=360,e<0&&(e+=360),e),Io=No,Lo=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),Ro=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),zo={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Lo,scaleY:Ro,scale:e=>(Lo(e)+Ro(e))/2,rotateX:e=>Fo(Mo(Math.atan2(e[6],e[5]))),rotateY:e=>Fo(Mo(Math.atan2(-e[2],e[0]))),rotateZ:Io,rotate:Io,skewX:e=>Mo(Math.atan(e[4])),skewY:e=>Mo(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function Bo(e){return e.includes(`scale`)?1:0}function Vo(e,t){if(!e||e===`none`)return Bo(t);let n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u),r,i;if(n)r=zo,i=n;else{let t=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=Po,i=t}if(!i)return Bo(t);let a=r[t],o=i[1].split(`,`).map(Uo);return typeof a==`function`?a(o):o[a]}var Ho=(e,t)=>{let{transform:n=`none`}=getComputedStyle(e);return Vo(n,t)};function Uo(e){return parseFloat(e.trim())}var Wo=[`transformPerspective`,`x`,`y`,`z`,`translateX`,`translateY`,`translateZ`,`scale`,`scaleX`,`scaleY`,`rotate`,`rotateX`,`rotateY`,`rotateZ`,`skew`,`skewX`,`skewY`],Go=new Set(Wo),Ko=e=>e===ta||e===P,qo=new Set([`x`,`y`,`z`]),Jo=Wo.filter(e=>!qo.has(e));function Yo(e){let t=[];return Jo.forEach(n=>{let r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith(`scale`)?1:0))}),t}var Xo={width:({x:e},{paddingLeft:t=`0`,paddingRight:n=`0`,boxSizing:r})=>{let i=e.max-e.min;return r===`border-box`?i:i-parseFloat(t)-parseFloat(n)},height:({y:e},{paddingTop:t=`0`,paddingBottom:n=`0`,boxSizing:r})=>{let i=e.max-e.min;return r===`border-box`?i:i-parseFloat(t)-parseFloat(n)},top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>Vo(t,`x`),y:(e,{transform:t})=>Vo(t,`y`)};Xo.translateX=Xo.x,Xo.translateY=Xo.y;var Zo=new Set,Qo=!1,$o=!1,es=!1;function ts(){if($o){let e=Array.from(Zo).filter(e=>e.needsMeasurement),t=new Set(e.map(e=>e.element)),n=new Map;t.forEach(e=>{let t=Yo(e);t.length&&(n.set(e,t),e.render())}),e.forEach(e=>e.measureInitialState()),t.forEach(e=>{e.render();let t=n.get(e);t&&t.forEach(([t,n])=>{e.getValue(t)?.set(n)})}),e.forEach(e=>e.measureEndState()),e.forEach(e=>{e.suspendedScrollY!==void 0&&window.scrollTo(0,e.suspendedScrollY)})}$o=!1,Qo=!1,Zo.forEach(e=>e.complete(es)),Zo.clear()}function ns(){Zo.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&($o=!0)})}function rs(){es=!0,ns(),ts(),es=!1}var is=class{constructor(e,t,n,r,i,a=!1){this.state=`pending`,this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=r,this.element=i,this.isAsync=a}scheduleResolve(){this.state=`scheduled`,this.isAsync?(Zo.add(this),Qo||(Qo=!0,N.read(ns),N.resolveKeyframes(ts))):(this.readKeyframes(),this.complete())}readKeyframes(){let{unresolvedKeyframes:e,name:t,element:n,motionValue:r}=this;if(e[0]===null){let i=r?.get(),a=e[e.length-1];if(i!==void 0)e[0]=i;else if(n&&t){let r=n.readValue(t,a);r!=null&&(e[0]=r)}e[0]===void 0&&(e[0]=a),r&&i===void 0&&r.set(e[0])}jo(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state=`complete`,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),Zo.delete(this)}cancel(){this.state===`scheduled`&&(Zo.delete(this),this.state=`pending`)}resume(){this.state===`pending`&&this.scheduleResolve()}},as=e=>e.startsWith(`--`);function os(e,t,n){as(t)?e.style.setProperty(t,n):e.style[t]=n}var ss={};function cs(e,t){let n=li(e);return()=>ss[t]??n()}var ls=cs(()=>window.ScrollTimeline!==void 0,`scrollTimeline`),us=cs(()=>{try{document.createElement(`div`).animate({opacity:0},{easing:`linear(0, 1)`})}catch{return!1}return!0},`linearEasing`),ds=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,fs={linear:`linear`,ease:`ease`,easeIn:`ease-in`,easeOut:`ease-out`,easeInOut:`ease-in-out`,circIn:ds([0,.65,.55,1]),circOut:ds([.55,0,1,.45]),backIn:ds([.31,.01,.66,-.59]),backOut:ds([.33,1.53,.69,.99])};function ps(e,t){if(e)return typeof e==`function`?us()?eo(e,t):`ease-out`:Fi(e)?ds(e):Array.isArray(e)?e.map(e=>ps(e,t)||fs.easeOut):fs[e]}function ms(e,t,n,{delay:r=0,duration:i=300,repeat:a=0,repeatType:o=`loop`,ease:s=`easeOut`,times:c}={},l=void 0){let u={[t]:n};c&&(u.offset=c);let d=ps(s,i);Array.isArray(d)&&(u.easing=d),Ri.value&&Ji.waapi++;let f={delay:r,duration:i,easing:Array.isArray(d)?`linear`:d,fill:`both`,iterations:a+1,direction:o===`reverse`?`alternate`:`normal`};l&&(f.pseudoElement=l);let p=e.animate(u,f);return Ri.value&&p.finished.finally(()=>{Ji.waapi--}),p}function hs(e){return typeof e==`function`&&`applyToOptions`in e}function gs({type:e,...t}){return hs(e)&&us()?e.applyToOptions(t):(t.duration??=300,t.ease??=`easeOut`,t)}var _s=class extends Oo{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;let{element:t,name:n,keyframes:r,pseudoElement:i,allowFlatten:a=!1,finalKeyframe:o,onComplete:s}=e;this.isPseudoElement=!!i,this.allowFlatten=a,this.options=e,e.type;let c=gs(e);this.animation=ms(t,n,r,c,i),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!i){let e=To(r,this.options,o,this.speed);this.updateMotionValue&&this.updateMotionValue(e),os(t,n,e),this.animation.cancel()}s?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state===`finished`&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;let{state:e}=this;e===`idle`||e===`finished`||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){let e=this.options?.element;!this.isPseudoElement&&e?.isConnected&&this.animation.commitStyles?.()}get duration(){let e=this.animation.effect?.getComputedTiming?.().duration||0;return A(Number(e))}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+A(e)}get time(){return A(Number(this.animation.currentTime)||0)}set time(e){let t=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=hi(e),t&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime===null?this.animation.playState:`finished`}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:t,rangeEnd:n,observe:r}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:`linear`}),this.animation.onfinish=null,e&&ls()?(this.animation.timeline=e,t&&(this.animation.rangeStart=t),n&&(this.animation.rangeEnd=n),ui):r(this)}},vs={anticipate:Di,backInOut:Ei,circInOut:Ai};function ys(e){return e in vs}function bs(e){typeof e.ease==`string`&&ys(e.ease)&&(e.ease=vs[e.ease])}var xs=10,Ss=class extends _s{constructor(e){bs(e),Do(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){let{motionValue:t,onUpdate:n,onComplete:r,element:i,...a}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}let o=new Ao({...a,autoplay:!1}),s=Math.max(xs,qi.now()-this.startTime),c=ii(0,xs,s-xs),l=o.sample(s).value,{name:u}=this.options;i&&u&&os(i,u,l),t.setWithVelocity(o.sample(Math.max(0,s-c)).value,l,c),o.stop()}},Cs=(e,t)=>t===`zIndex`?!1:!!(typeof e==`number`||Array.isArray(e)||typeof e==`string`&&(La.test(e)||e===`0`)&&!e.startsWith(`url(`));function ws(e){let t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function Ts(e,t,n,r){let i=e[0];if(i===null)return!1;if(t===`display`||t===`visibility`)return!0;let a=e[e.length-1],o=Cs(i,t),s=Cs(a,t);return`${t}${i}${a}${o?a:i}`,!o||!s?!1:ws(e)||(n===`spring`||hs(n))&&r}function Es(e){e.duration=0,e.type=`keyframes`}var Ds=new Set([`opacity`,`clipPath`,`filter`,`transform`]),Os=li(()=>Object.hasOwnProperty.call(Element.prototype,`animate`));function ks(e){let{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:a,type:o}=e;if(!(t?.owner?.current instanceof HTMLElement))return!1;let{onUpdate:s,transformTemplate:c}=t.owner.getProps();return Os()&&n&&Ds.has(n)&&(n!==`transform`||!c)&&!s&&!r&&i!==`mirror`&&a!==0&&o!==`inertia`}var As=40,js=class extends Oo{constructor({autoplay:e=!0,delay:t=0,type:n=`keyframes`,repeat:r=0,repeatDelay:i=0,repeatType:a=`loop`,keyframes:o,name:s,motionValue:c,element:l,...u}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=qi.now();let d={autoplay:e,delay:t,type:n,repeat:r,repeatDelay:i,repeatType:a,name:s,motionValue:c,element:l,...u};this.keyframeResolver=new(l?.KeyframeResolver||is)(o,(e,t,n)=>this.onKeyframesResolved(e,t,d,!n),s,c,l),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,t,n,r){this.keyframeResolver=void 0;let{name:i,type:a,velocity:o,delay:s,isHandoff:c,onUpdate:l}=n;this.resolvedAt=qi.now();let u=!0;Ts(e,i,a,o)||(u=!1,(ai.instantAnimations||!s)&&l?.(To(e,n,t)),e[0]=e[e.length-1],Es(n),n.repeat=0);let d={startTime:r?this.resolvedAt&&this.resolvedAt-this.createdAt>As?this.resolvedAt:this.createdAt:void 0,finalKeyframe:t,...n,keyframes:e},f=u&&!c&&ks(d),p=d.motionValue?.owner?.current,m=f?new Ss({...d,element:p}):new Ao(d);m.finished.then(()=>{this.notifyFinished()}).catch(ui),this.pendingTimeline&&=(this.stopTimeline=m.attachTimeline(this.pendingTimeline),void 0),this._animation=m}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),rs()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}};function Ms(e,t,n,r=0,i=1){let a=Array.from(e).sort((e,t)=>e.sortNodePosition(t)).indexOf(t),o=e.size,s=(o-1)*r;return typeof n==`function`?n(a,o):i===1?a*r:s-a*r}var Ns=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Ps(e){let t=Ns.exec(e);if(!t)return[,];let[,n,r,i]=t;return[`--${n??r}`,i]}function Fs(e,t,n=1){`${e}`;let[r,i]=Ps(e);if(!r)return;let a=window.getComputedStyle(t).getPropertyValue(r);if(a){let e=a.trim();return oi(e)?parseFloat(e):e}return Qi(i)?Fs(i,t,n+1):i}var Is={type:`spring`,stiffness:500,damping:25,restSpeed:10},Ls=e=>({type:`spring`,stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),Rs={type:`keyframes`,duration:.8},zs={type:`keyframes`,ease:[.25,.1,.35,1],duration:.3},Bs=(e,{keyframes:t})=>t.length>2?Rs:Go.has(e)?e.startsWith(`scale`)?Ls(t[1]):Is:zs,Vs=e=>e!==null;function Hs(e,{repeat:t,repeatType:n=`loop`},r){let i=e.filter(Vs),a=t&&n!==`loop`&&t%2==1?0:i.length-1;return!a||r===void 0?i[a]:r}function Us(e,t){if(e?.inherit&&t){let{inherit:n,...r}=e;return{...t,...r}}return e}function Ws(e,t){let n=e?.[t]??e?.default??e;return n===e?n:Us(n,e)}function Gs({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:a,repeatType:o,repeatDelay:s,from:c,elapsed:l,...u}){return!!Object.keys(u).length}var Ks=(e,t,n,r={},i,a)=>o=>{let s=Ws(r,e)||{},c=s.delay||r.delay||0,{elapsed:l=0}=r;l-=hi(c);let u={keyframes:Array.isArray(n)?n:[null,n],ease:`easeOut`,velocity:t.getVelocity(),...s,delay:-l,onUpdate:e=>{t.set(e),s.onUpdate&&s.onUpdate(e)},onComplete:()=>{o(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:a?void 0:i};Gs(s)||Object.assign(u,Bs(e,u)),u.duration&&=hi(u.duration),u.repeatDelay&&=hi(u.repeatDelay),u.from!==void 0&&(u.keyframes[0]=u.from);let d=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(Es(u),u.delay===0&&(d=!0)),(ai.instantAnimations||ai.skipAnimations||i?.shouldSkipAnimations)&&(d=!0,Es(u),u.delay=0),u.allowFlatten=!s.type&&!s.ease,d&&!a&&t.get()!==void 0){let e=Hs(u.keyframes,s);if(e!==void 0){N.update(()=>{u.onUpdate(e),u.onComplete()});return}}return s.isSync?new Ao(u):new js(u)};function qs(e){let t=[{},{}];return e?.values.forEach((e,n)=>{t[0][n]=e.get(),t[1][n]=e.getVelocity()}),t}function Js(e,t,n,r){if(typeof t==`function`){let[i,a]=qs(r);t=t(n===void 0?e.custom:n,i,a)}if(typeof t==`string`&&(t=e.variants&&e.variants[t]),typeof t==`function`){let[i,a]=qs(r);t=t(n===void 0?e.custom:n,i,a)}return t}function Ys(e,t,n){let r=e.getProps();return Js(r,t,n===void 0?r.custom:n,e)}var Xs=new Set([`width`,`height`,`top`,`left`,`right`,`bottom`,...Wo]),Zs=30,Qs=e=>!isNaN(parseFloat(e)),$s={current:void 0},ec=class{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=e=>{let t=qi.now();if(this.updatedAt!==t&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(e),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(let e of this.dependents)e.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=qi.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=Qs(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on(`change`,e)}on(e,t){this.events[e]||(this.events[e]=new mi);let n=this.events[e].add(t);return e===`change`?()=>{n(),N.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(let e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||=new Set,this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return $s.current&&$s.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){let e=qi.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Zs)return 0;let t=Math.min(this.updatedAt-this.prevUpdatedAt,Zs);return gi(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}};function V(e,t){return new ec(e,t)}var tc=e=>Array.isArray(e);function nc(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,V(n))}function rc(e){return tc(e)?e[e.length-1]||0:e}function ic(e,t){let{transitionEnd:n={},transition:r={},...i}=Ys(e,t)||{};i={...i,...n};for(let t in i)nc(e,t,rc(i[t]))}var ac=e=>!!(e&&e.getVelocity);function oc(e){return!!(ac(e)&&e.add)}function sc(e,t){let n=e.getValue(`willChange`);if(oc(n))return n.add(t);if(!n&&ai.WillChange){let n=new ai.WillChange(`auto`);e.addValue(`willChange`,n),n.add(t)}}function cc(e){return e.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}var lc=`data-`+cc(`framerAppearId`);function uc(e){return e.props[lc]}function dc({protectedKeys:e,needsAnimating:t},n){let r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function fc(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:a,transitionEnd:o,...s}=t,c=e.getDefaultTransition();a=a?Us(a,c):c;let l=a?.reduceMotion;r&&(a=r);let u=[],d=i&&e.animationState&&e.animationState.getState()[i];for(let t in s){let r=e.getValue(t,e.latestValues[t]??null),i=s[t];if(i===void 0||d&&dc(d,t))continue;let o={delay:n,...Ws(a||{},t)},c=r.get();if(c!==void 0&&!r.isAnimating&&!Array.isArray(i)&&i===c&&!o.velocity)continue;let f=!1;if(window.MotionHandoffAnimation){let n=uc(e);if(n){let e=window.MotionHandoffAnimation(n,t,N);e!==null&&(o.startTime=e,f=!0)}}sc(e,t);let p=l??e.shouldReduceMotion;r.start(Ks(t,r,i,p&&Xs.has(t)?{type:!1}:o,e,f));let m=r.animation;m&&u.push(m)}if(o){let t=()=>N.update(()=>{o&&ic(e,o)});u.length?Promise.all(u).then(t):t()}return u}function pc(e,t,n={}){let r=Ys(e,t,n.type===`exit`?e.presenceContext?.custom:void 0),{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);let a=r?()=>Promise.all(fc(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(r=0)=>{let{delayChildren:a=0,staggerChildren:o,staggerDirection:s}=i;return mc(e,t,r,a,o,s,n)}:()=>Promise.resolve(),{when:s}=i;if(s){let[e,t]=s===`beforeChildren`?[a,o]:[o,a];return e().then(()=>t())}else return Promise.all([a(),o(n.delay)])}function mc(e,t,n=0,r=0,i=0,a=1,o){let s=[];for(let c of e.variantChildren)c.notify(`AnimationStart`,t),s.push(pc(c,t,{...o,delay:n+(typeof r==`function`?0:r)+Ms(e.variantChildren,c,r,i,a)}).then(()=>c.notify(`AnimationComplete`,t)));return Promise.all(s)}function hc(e,t,n={}){e.notify(`AnimationStart`,t);let r;if(Array.isArray(t)){let i=t.map(t=>pc(e,t,n));r=Promise.all(i)}else if(typeof t==`string`)r=pc(e,t,n);else{let i=typeof t==`function`?Ys(e,t,n.custom):t;r=Promise.all(fc(e,i,n))}return r.then(()=>{e.notify(`AnimationComplete`,t)})}var gc={test:e=>e===`auto`,parse:e=>e},_c=e=>t=>t.test(e),vc=[ta,P,_a,ga,ya,va,gc],yc=e=>vc.find(_c(e));function bc(e){return typeof e==`number`?e===0:e===null?!0:e===`none`||e===`0`||ci(e)}var xc=new Set([`brightness`,`contrast`,`saturate`,`opacity`]);function Sc(e){let[t,n]=e.slice(0,-1).split(`(`);if(t===`drop-shadow`)return e;let[r]=n.match(aa)||[];if(!r)return e;let i=n.replace(r,``),a=xc.has(t)?1:0;return r!==n&&(a*=100),t+`(`+a+i+`)`}var Cc=/\b([a-z-]*)\(.*?\)/gu,wc={...La,getAnimatableNone:e=>{let t=e.match(Cc);return t?t.map(Sc).join(` `):e}},Tc={...La,getAnimatableNone:e=>{let t=La.parse(e);return La.createTransformer(e)(t.map(e=>typeof e==`number`?0:typeof e==`object`?{...e,alpha:1}:e))}},Ec={...ta,transform:Math.round},Dc={borderWidth:P,borderTopWidth:P,borderRightWidth:P,borderBottomWidth:P,borderLeftWidth:P,borderRadius:P,borderTopLeftRadius:P,borderTopRightRadius:P,borderBottomRightRadius:P,borderBottomLeftRadius:P,width:P,maxWidth:P,height:P,maxHeight:P,top:P,right:P,bottom:P,left:P,inset:P,insetBlock:P,insetBlockStart:P,insetBlockEnd:P,insetInline:P,insetInlineStart:P,insetInlineEnd:P,padding:P,paddingTop:P,paddingRight:P,paddingBottom:P,paddingLeft:P,paddingBlock:P,paddingBlockStart:P,paddingBlockEnd:P,paddingInline:P,paddingInlineStart:P,paddingInlineEnd:P,margin:P,marginTop:P,marginRight:P,marginBottom:P,marginLeft:P,marginBlock:P,marginBlockStart:P,marginBlockEnd:P,marginInline:P,marginInlineStart:P,marginInlineEnd:P,fontSize:P,backgroundPositionX:P,backgroundPositionY:P,rotate:ga,rotateX:ga,rotateY:ga,rotateZ:ga,scale:ra,scaleX:ra,scaleY:ra,scaleZ:ra,skew:ga,skewX:ga,skewY:ga,distance:P,translateX:P,translateY:P,translateZ:P,x:P,y:P,z:P,perspective:P,transformPerspective:P,opacity:na,originX:ba,originY:ba,originZ:P,zIndex:Ec,fillOpacity:na,strokeOpacity:na,numOctaves:Ec},Oc={...Dc,color:F,backgroundColor:F,outlineColor:F,fill:F,stroke:F,borderColor:F,borderTopColor:F,borderRightColor:F,borderBottomColor:F,borderLeftColor:F,filter:wc,WebkitFilter:wc,mask:Tc,WebkitMask:Tc},kc=e=>Oc[e],H=new Set([wc,Tc]);function Ac(e,t){let n=kc(e);return H.has(n)||(n=La),n.getAnimatableNone?n.getAnimatableNone(t):void 0}var jc=new Set([`auto`,`none`,`0`]);function Mc(e,t,n){let r=0,i;for(;r<e.length&&!i;){let t=e[r];typeof t==`string`&&!jc.has(t)&&Aa(t).values.length&&(i=e[r]),r++}if(i&&n)for(let r of t)e[r]=Ac(n,i)}var Nc=class extends is{constructor(e,t,n,r,i){super(e,t,n,r,i,!0)}readKeyframes(){let{unresolvedKeyframes:e,element:t,name:n}=this;if(!t||!t.current)return;super.readKeyframes();for(let n=0;n<e.length;n++){let r=e[n];if(typeof r==`string`&&(r=r.trim(),Qi(r))){let i=Fs(r,t.current);i!==void 0&&(e[n]=i),n===e.length-1&&(this.finalKeyframe=r)}}if(this.resolveNoneKeyframes(),!Xs.has(n)||e.length!==2)return;let[r,i]=e,a=yc(r),o=yc(i);if(ea(r)!==ea(i)&&Xo[n]){this.needsMeasurement=!0;return}if(a!==o)if(Ko(a)&&Ko(o))for(let t=0;t<e.length;t++){let n=e[t];typeof n==`string`&&(e[t]=parseFloat(n))}else Xo[n]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){let{unresolvedKeyframes:e,name:t}=this,n=[];for(let t=0;t<e.length;t++)(e[t]===null||bc(e[t]))&&n.push(t);n.length&&Mc(e,n,t)}measureInitialState(){let{element:e,unresolvedKeyframes:t,name:n}=this;if(!e||!e.current)return;n===`height`&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Xo[n](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;let r=t[t.length-1];r!==void 0&&e.getValue(n,r).jump(r,!1)}measureEndState(){let{element:e,name:t,unresolvedKeyframes:n}=this;if(!e||!e.current)return;let r=e.getValue(t);r&&r.jump(this.measuredOrigin,!1);let i=n.length-1,a=n[i];n[i]=Xo[t](e.measureViewportBox(),window.getComputedStyle(e.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),this.removedTransforms?.length&&this.removedTransforms.forEach(([t,n])=>{e.getValue(t).set(n)}),this.resolveNoneKeyframes()}},Pc=new Set([`opacity`,`clipPath`,`filter`,`transform`]);function Fc(e,t,n){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e==`string`){let r=document;t&&(r=t.current);let i=n?.[e]??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e).filter(e=>e!=null)}var Ic=(e,t)=>t&&typeof e==`number`?t.transform(e):e;function Lc(e){return si(e)&&`offsetHeight`in e&&!(`ownerSVGElement`in e)}var{schedule:Rc,cancel:zc}=Vi(queueMicrotask,!1),Bc={x:!1,y:!1};function Vc(){return Bc.x||Bc.y}function Hc(e){return e===`x`||e===`y`?Bc[e]?null:(Bc[e]=!0,()=>{Bc[e]=!1}):Bc.x||Bc.y?null:(Bc.x=Bc.y=!0,()=>{Bc.x=Bc.y=!1})}function Uc(e,t){let n=Fc(e),r=new AbortController;return[n,{passive:!0,...t,signal:r.signal},()=>r.abort()]}function Wc(e){return!(e.pointerType===`touch`||Vc())}function Gc(e,t,n={}){let[r,i,a]=Uc(e,n);return r.forEach(e=>{let n=!1,r=!1,a,o=()=>{e.removeEventListener(`pointerleave`,u)},s=e=>{a&&=(a(e),void 0),o()},c=e=>{n=!1,window.removeEventListener(`pointerup`,c),window.removeEventListener(`pointercancel`,c),r&&(r=!1,s(e))},l=()=>{n=!0,window.addEventListener(`pointerup`,c,i),window.addEventListener(`pointercancel`,c,i)},u=e=>{if(e.pointerType!==`touch`){if(n){r=!0;return}s(e)}};e.addEventListener(`pointerenter`,n=>{if(!Wc(n))return;r=!1;let o=t(e,n);typeof o==`function`&&(a=o,e.addEventListener(`pointerleave`,u,i))},i),e.addEventListener(`pointerdown`,l,i)}),a}var Kc=(e,t)=>t?e===t?!0:Kc(e,t.parentElement):!1,U=e=>e.pointerType===`mouse`?typeof e.button!=`number`||e.button<=0:e.isPrimary!==!1,qc=new Set([`BUTTON`,`INPUT`,`SELECT`,`TEXTAREA`,`A`]);function Jc(e){return qc.has(e.tagName)||e.isContentEditable===!0}var Yc=new Set([`INPUT`,`SELECT`,`TEXTAREA`]);function Xc(e){return Yc.has(e.tagName)||e.isContentEditable===!0}var Zc=new WeakSet;function Qc(e){return t=>{t.key===`Enter`&&e(t)}}function W(e,t){e.dispatchEvent(new PointerEvent(`pointer`+t,{isPrimary:!0,bubbles:!0}))}var $c=(e,t)=>{let n=e.currentTarget;if(!n)return;let r=Qc(()=>{if(Zc.has(n))return;W(n,`down`);let e=Qc(()=>{W(n,`up`)});n.addEventListener(`keyup`,e,t),n.addEventListener(`blur`,()=>W(n,`cancel`),t)});n.addEventListener(`keydown`,r,t),n.addEventListener(`blur`,()=>n.removeEventListener(`keydown`,r),t)};function el(e){return U(e)&&!Vc()}var tl=new WeakSet;function nl(e,t,n={}){let[r,i,a]=Uc(e,n),o=e=>{let r=e.currentTarget;if(!el(e)||tl.has(e))return;Zc.add(r),n.stopPropagation&&tl.add(e);let a=t(r,e),o=(e,t)=>{window.removeEventListener(`pointerup`,s),window.removeEventListener(`pointercancel`,c),Zc.has(r)&&Zc.delete(r),el(e)&&typeof a==`function`&&a(e,{success:t})},s=e=>{o(e,r===window||r===document||n.useGlobalTarget||Kc(r,e.target))},c=e=>{o(e,!1)};window.addEventListener(`pointerup`,s,i),window.addEventListener(`pointercancel`,c,i)};return r.forEach(e=>{(n.useGlobalTarget?window:e).addEventListener(`pointerdown`,o,i),Lc(e)&&(e.addEventListener(`focus`,e=>$c(e,i)),!Jc(e)&&!e.hasAttribute(`tabindex`)&&(e.tabIndex=0))}),a}function rl(e){return si(e)&&`ownerSVGElement`in e}var il=new WeakMap,al,ol=(e,t,n)=>(r,i)=>i&&i[0]?i[0][e+`Size`]:rl(r)&&`getBBox`in r?r.getBBox()[t]:r[n],sl=ol(`inline`,`width`,`offsetWidth`),cl=ol(`block`,`height`,`offsetHeight`);function ll({target:e,borderBoxSize:t}){il.get(e)?.forEach(n=>{n(e,{get width(){return sl(e,t)},get height(){return cl(e,t)}})})}function ul(e){e.forEach(ll)}function dl(){typeof ResizeObserver>`u`||(al=new ResizeObserver(ul))}function fl(e,t){al||dl();let n=Fc(e);return n.forEach(e=>{let n=il.get(e);n||(n=new Set,il.set(e,n)),n.add(t),al?.observe(e)}),()=>{n.forEach(e=>{let n=il.get(e);n?.delete(t),n?.size||al?.unobserve(e)})}}var pl=new Set,ml;function hl(){ml=()=>{let e={get width(){return window.innerWidth},get height(){return window.innerHeight}};pl.forEach(t=>t(e))},window.addEventListener(`resize`,ml)}function gl(e){return pl.add(e),ml||hl(),()=>{pl.delete(e),!pl.size&&typeof ml==`function`&&(window.removeEventListener(`resize`,ml),ml=void 0)}}function _l(e,t){return typeof e==`function`?gl(e):fl(e,t)}function vl(e){return rl(e)&&e.tagName===`svg`}var yl=[...vc,F,La],bl=e=>yl.find(_c(e)),xl=()=>({translate:0,scale:1,origin:0,originPoint:0}),Sl=()=>({x:xl(),y:xl()}),Cl=()=>({min:0,max:0}),wl=()=>({x:Cl(),y:Cl()}),Tl=new WeakMap;function El(e){return typeof e==`object`&&!!e&&typeof e.start==`function`}function Dl(e){return typeof e==`string`||Array.isArray(e)}var Ol=[`animate`,`whileInView`,`whileFocus`,`whileHover`,`whileTap`,`whileDrag`,`exit`],G=[`initial`,...Ol];function K(e){return El(e.animate)||G.some(t=>Dl(e[t]))}function q(e){return!!(K(e)||e.variants)}function J(e,t,n){for(let r in t){let i=t[r],a=n[r];if(ac(i))e.addValue(r,i);else if(ac(a))e.addValue(r,V(i,{owner:e}));else if(a!==i)if(e.hasValue(r)){let t=e.getValue(r);t.liveStyle===!0?t.jump(i):t.hasAnimated||t.set(i)}else{let t=e.getStaticValue(r);e.addValue(r,V(t===void 0?i:t,{owner:e}))}}for(let r in n)t[r]===void 0&&e.removeValue(r);return t}var Y={current:null},kl={current:!1},Al=typeof window<`u`;function jl(){if(kl.current=!0,Al)if(window.matchMedia){let e=window.matchMedia(`(prefers-reduced-motion)`),t=()=>Y.current=e.matches;e.addEventListener(`change`,t),t()}else Y.current=!1}var Ml=[`AnimationStart`,`AnimationComplete`,`Update`,`BeforeLayoutMeasure`,`LayoutMeasure`,`LayoutAnimationStart`,`LayoutAnimationComplete`],Nl={};function X(e){Nl=e}function Pl(){return Nl}var Fl=class{scrapeMotionValuesFromProps(e,t,n){return{}}constructor({parent:e,props:t,presenceContext:n,reducedMotionConfig:r,skipAnimations:i,blockInitialAnimation:a,visualState:o},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=is,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify(`Update`,this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{let e=qi.now();this.renderScheduledAt<e&&(this.renderScheduledAt=e,N.render(this.render,!1,!0))};let{latestValues:c,renderState:l}=o;this.latestValues=c,this.baseTarget={...c},this.initialValues=t.initial?{...c}:{},this.renderState=l,this.parent=e,this.props=t,this.presenceContext=n,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.skipAnimationsConfig=i,this.options=s,this.blockInitialAnimation=!!a,this.isControllingVariants=K(t),this.isVariantNode=q(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);let{willChange:u,...d}=this.scrapeMotionValuesFromProps(t,{},this);for(let e in d){let t=d[e];c[e]!==void 0&&ac(t)&&t.set(c[e])}}mount(e){if(this.hasBeenMounted)for(let e in this.initialValues)this.values.get(e)?.jump(this.initialValues[e]),this.latestValues[e]=this.initialValues[e];this.current=e,Tl.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,t)=>this.bindToMotionValue(t,e)),this.reducedMotionConfig===`never`?this.shouldReduceMotion=!1:this.reducedMotionConfig===`always`?this.shouldReduceMotion=!0:(kl.current||jl(),this.shouldReduceMotion=Y.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){this.projection&&this.projection.unmount(),Hi(this.notifyUpdate),Hi(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(let e in this.events)this.events[e].clear();for(let e in this.features){let t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??=new Set,this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),t.accelerate&&Pc.has(e)&&this.current instanceof HTMLElement){let{factory:n,keyframes:r,times:i,ease:a,duration:o}=t.accelerate,s=new _s({element:this.current,name:e,keyframes:r,times:i,ease:a,duration:hi(o)}),c=n(s);this.valueSubscriptions.set(e,()=>{c(),s.cancel()});return}let n=Go.has(e);n&&this.onBindTransform&&this.onBindTransform();let r=t.on(`change`,t=>{this.latestValues[e]=t,this.props.onUpdate&&N.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()}),i;typeof window<`u`&&window.MotionCheckAppearSync&&(i=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{r(),i&&i(),t.owner&&t.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e=`animation`;for(e in Nl){let t=Nl[e];if(!t)continue;let{isEnabled:n,Feature:r}=t;if(!this.features[e]&&r&&n(this.props)&&(this.features[e]=new r(this)),this.features[e]){let t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):wl()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let t=0;t<Ml.length;t++){let n=Ml[t];this.propEventSubscriptions[n]&&(this.propEventSubscriptions[n](),delete this.propEventSubscriptions[n]);let r=e[`on`+n];r&&(this.propEventSubscriptions[n]=this.on(n,r))}this.prevMotionValues=J(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){let t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){let n=this.values.get(e);t!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);let t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return n===void 0&&t!==void 0&&(n=V(t===null?void 0:t,{owner:this}),this.addValue(e,n)),n}readValue(e,t){let n=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return n!=null&&(typeof n==`string`&&(oi(n)||ci(n))?n=parseFloat(n):!bl(n)&&La.test(t)&&(n=Ac(e,t)),this.setBaseTarget(e,ac(n)?n.get():n)),ac(n)?n.get():n}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){let{initial:t}=this.props,n;if(typeof t==`string`||typeof t==`object`){let r=Js(this.props,t,this.presenceContext?.custom);r&&(n=r[e])}if(t&&n!==void 0)return n;let r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!ac(r)?r:this.initialValues[e]!==void 0&&n===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new mi),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){Rc.render(this.render)}},Il=class extends Fl{constructor(){super(...arguments),this.KeyframeResolver=Nc}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){let n=e.style;return n?n[t]:void 0}removeValueFromRenderState(e,{vars:t,style:n}){delete t[e],delete n[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);let{children:e}=this.props;ac(e)&&(this.childSubscription=e.on(`change`,e=>{this.current&&(this.current.textContent=`${e}`)}))}},Ll=class{constructor(e){this.isMounted=!1,this.node=e}update(){}};function Rl({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function zl({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function Bl(e,t){if(!t)return e;let n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Vl(e){return e===void 0||e===1}function Hl({scale:e,scaleX:t,scaleY:n}){return!Vl(e)||!Vl(t)||!Vl(n)}function Ul(e){return Hl(e)||Wl(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function Wl(e){return Gl(e.x)||Gl(e.y)}function Gl(e){return e&&e!==`0%`}function Kl(e,t,n){return n+t*(e-n)}function ql(e,t,n,r,i){return i!==void 0&&(e=Kl(e,i,r)),Kl(e,n,r)+t}function Jl(e,t=0,n=1,r,i){e.min=ql(e.min,t,n,r,i),e.max=ql(e.max,t,n,r,i)}function Yl(e,{x:t,y:n}){Jl(e.x,t.translate,t.scale,t.originPoint),Jl(e.y,n.translate,n.scale,n.originPoint)}var Xl=.999999999999,Zl=1.0000000000001;function Ql(e,t,n,r=!1){let i=n.length;if(!i)return;t.x=t.y=1;let a,o;for(let s=0;s<i;s++){a=n[s],o=a.projectionDelta;let{visualElement:i}=a.options;i&&i.props.style&&i.props.style.display===`contents`||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&nu(e,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,Yl(e,o)),r&&Ul(a.latestValues)&&nu(e,a.latestValues,a.layout?.layoutBox))}t.x<Zl&&t.x>Xl&&(t.x=1),t.y<Zl&&t.y>Xl&&(t.y=1)}function $l(e,t){e.min+=t,e.max+=t}function eu(e,t,n,r,i=.5){Jl(e,t,n,I(e.min,e.max,i),r)}function tu(e,t){return typeof e==`string`?parseFloat(e)/100*(t.max-t.min):e}function nu(e,t,n){let r=n??e;eu(e.x,tu(t.x,r.x),t.scaleX,t.scale,t.originX),eu(e.y,tu(t.y,r.y),t.scaleY,t.scale,t.originY)}function ru(e,t){return Rl(Bl(e.getBoundingClientRect(),t))}function iu(e,t,n){let r=ru(e,n),{scroll:i}=t;return i&&($l(r.x,i.offset.x),$l(r.y,i.offset.y)),r}var au={x:`translateX`,y:`translateY`,z:`translateZ`,transformPerspective:`perspective`},ou=Wo.length;function su(e,t,n){let r=``,i=!0;for(let a=0;a<ou;a++){let o=Wo[a],s=e[o];if(s===void 0)continue;let c=!0;if(typeof s==`number`)c=s===(o.startsWith(`scale`)?1:0);else{let e=parseFloat(s);c=o.startsWith(`scale`)?e===1:e===0}if(!c||n){let e=Ic(s,Dc[o]);if(!c){i=!1;let t=au[o]||o;r+=`${t}(${e}) `}n&&(t[o]=e)}}return r=r.trim(),n?r=n(t,i?``:r):i&&(r=`none`),r}function cu(e,t,n){let{style:r,vars:i,transformOrigin:a}=e,o=!1,s=!1;for(let e in t){let n=t[e];if(Go.has(e)){o=!0;continue}else if(Xi(e)){i[e]=n;continue}else{let t=Ic(n,Dc[e]);e.startsWith(`origin`)?(s=!0,a[e]=t):r[e]=t}}if(t.transform||(o||n?r.transform=su(t,e.transform,n):r.transform&&=`none`),s){let{originX:e=`50%`,originY:t=`50%`,originZ:n=0}=a;r.transformOrigin=`${e} ${t} ${n}`}}function lu(e,{style:t,vars:n},r,i){let a=e.style,o;for(o in t)a[o]=t[o];for(o in i?.applyProjectionStyles(a,r),n)a.setProperty(o,n[o])}function uu(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}var du={correct:(e,t)=>{if(!t.target)return e;if(typeof e==`string`)if(P.test(e))e=parseFloat(e);else return e;return`${uu(e,t.target.x)}% ${uu(e,t.target.y)}%`}},fu={correct:(e,{treeScale:t,projectionDelta:n})=>{let r=e,i=La.parse(e);if(i.length>5)return r;let a=La.createTransformer(e),o=typeof i[0]==`number`?0:1,s=n.x.scale*t.x,c=n.y.scale*t.y;i[0+o]/=s,i[1+o]/=c;let l=I(s,c,.5);return typeof i[2+o]==`number`&&(i[2+o]/=l),typeof i[3+o]==`number`&&(i[3+o]/=l),a(i)}},pu={borderRadius:{...du,applyTo:[`borderTopLeftRadius`,`borderTopRightRadius`,`borderBottomLeftRadius`,`borderBottomRightRadius`]},borderTopLeftRadius:du,borderTopRightRadius:du,borderBottomLeftRadius:du,borderBottomRightRadius:du,boxShadow:fu};function mu(e,{layout:t,layoutId:n}){return Go.has(e)||e.startsWith(`origin`)||(t||n!==void 0)&&(!!pu[e]||e===`opacity`)}function hu(e,t,n){let r=e.style,i=t?.style,a={};if(!r)return a;for(let t in r)(ac(r[t])||i&&ac(i[t])||mu(t,e)||n?.getValue(t)?.liveStyle!==void 0)&&(a[t]=r[t]);return a}function gu(e){return window.getComputedStyle(e)}var _u=class extends Il{constructor(){super(...arguments),this.type=`html`,this.renderInstance=lu}readValueFromInstance(e,t){if(Go.has(t))return this.projection?.isProjecting?Bo(t):Ho(e,t);{let n=gu(e),r=(Xi(t)?n.getPropertyValue(t):n[t])||0;return typeof r==`string`?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:t}){return ru(e,t)}build(e,t,n){cu(e,t,n.transformTemplate)}scrapeMotionValuesFromProps(e,t,n){return hu(e,t,n)}},vu={offset:`stroke-dashoffset`,array:`stroke-dasharray`},yu={offset:`strokeDashoffset`,array:`strokeDasharray`};function bu(e,t,n=1,r=0,i=!0){e.pathLength=1;let a=i?vu:yu;e[a.offset]=`${-r}`,e[a.array]=`${t} ${n}`}var xu=[`offsetDistance`,`offsetPath`,`offsetRotate`,`offsetAnchor`];function Su(e,{attrX:t,attrY:n,attrScale:r,pathLength:i,pathSpacing:a=1,pathOffset:o=0,...s},c,l,u){if(cu(e,s,l),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};let{attrs:d,style:f}=e;d.transform&&(f.transform=d.transform,delete d.transform),(f.transform||d.transformOrigin)&&(f.transformOrigin=d.transformOrigin??`50% 50%`,delete d.transformOrigin),f.transform&&(f.transformBox=u?.transformBox??`fill-box`,delete d.transformBox);for(let e of xu)d[e]!==void 0&&(f[e]=d[e],delete d[e]);t!==void 0&&(d.x=t),n!==void 0&&(d.y=n),r!==void 0&&(d.scale=r),i!==void 0&&bu(d,i,a,o,!1)}var Cu=new Set([`baseFrequency`,`diffuseConstant`,`kernelMatrix`,`kernelUnitLength`,`keySplines`,`keyTimes`,`limitingConeAngle`,`markerHeight`,`markerWidth`,`numOctaves`,`targetX`,`targetY`,`surfaceScale`,`specularConstant`,`specularExponent`,`stdDeviation`,`tableValues`,`viewBox`,`gradientTransform`,`pathLength`,`startOffset`,`textLength`,`lengthAdjust`]),wu=e=>typeof e==`string`&&e.toLowerCase()===`svg`;function Tu(e,t,n,r){lu(e,t,void 0,r);for(let n in t.attrs)e.setAttribute(Cu.has(n)?n:cc(n),t.attrs[n])}function Eu(e,t,n){let r=hu(e,t,n);for(let n in e)if(ac(e[n])||ac(t[n])){let t=Wo.indexOf(n)===-1?n:`attr`+n.charAt(0).toUpperCase()+n.substring(1);r[t]=e[n]}return r}var Du=class extends Il{constructor(){super(...arguments),this.type=`svg`,this.isSVGTag=!1,this.measureInstanceViewportBox=wl}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(Go.has(t)){let e=kc(t);return e&&e.default||0}return t=Cu.has(t)?t:cc(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,n){return Eu(e,t,n)}build(e,t,n){Su(e,t,this.isSVGTag,n.transformTemplate,n.style)}renderInstance(e,t,n,r){Tu(e,t,n,r)}mount(e){this.isSVGTag=wu(e.tagName),super.mount(e)}},Ou=G.length;function ku(e){if(!e)return;if(!e.isControllingVariants){let t=e.parent&&ku(e.parent)||{};return e.props.initial!==void 0&&(t.initial=e.props.initial),t}let t={};for(let n=0;n<Ou;n++){let r=G[n],i=e.props[r];(Dl(i)||i===!1)&&(t[r]=i)}return t}function Au(e,t){if(!Array.isArray(t))return!1;let n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}var ju=[...Ol].reverse(),Z=Ol.length;function Mu(e){return t=>Promise.all(t.map(({animation:t,options:n})=>hc(e,t,n)))}function Nu(e){let t=Mu(e),n=Iu(),r=!0,i=!1,a=t=>(n,r)=>{let i=Ys(e,r,t===`exit`?e.presenceContext?.custom:void 0);if(i){let{transition:e,transitionEnd:t,...r}=i;n={...n,...r,...t}}return n};function o(n){t=n(e)}function s(o){let{props:s}=e,c=ku(e.parent)||{},l=[],u=new Set,d={},f=1/0;for(let t=0;t<Z;t++){let p=ju[t],m=n[p],h=s[p]===void 0?c[p]:s[p],g=Dl(h),_=p===o?m.isActive:null;_===!1&&(f=t);let v=h===c[p]&&h!==s[p]&&g;if(v&&(r||i)&&e.manuallyAnimateOnMount&&(v=!1),m.protectedKeys={...d},!m.isActive&&_===null||!h&&!m.prevProp||El(h)||typeof h==`boolean`)continue;if(p===`exit`&&m.isActive&&_!==!0){m.prevResolvedValues&&(d={...d,...m.prevResolvedValues});continue}let y=Pu(m.prevProp,h),b=y||p===o&&m.isActive&&!v&&g||t>f&&g,x=!1,S=Array.isArray(h)?h:[h],C=S.reduce(a(p),{});_===!1&&(C={});let{prevResolvedValues:ee={}}=m,te={...ee,...C},ne=t=>{b=!0,u.has(t)&&(x=!0,u.delete(t)),m.needsAnimating[t]=!0;let n=e.getValue(t);n&&(n.liveStyle=!1)};for(let e in te){let t=C[e],n=ee[e];if(d.hasOwnProperty(e))continue;let r=!1;r=tc(t)&&tc(n)?!Au(t,n):t!==n,r?t==null?u.add(e):ne(e):t!==void 0&&u.has(e)?ne(e):m.protectedKeys[e]=!0}m.prevProp=h,m.prevResolvedValues=C,m.isActive&&(d={...d,...C}),(r||i)&&e.blockInitialAnimation&&(b=!1);let re=v&&y;b&&(!re||x)&&l.push(...S.map(t=>{let n={type:p};if(typeof t==`string`&&(r||i)&&!re&&e.manuallyAnimateOnMount&&e.parent){let{parent:r}=e,i=Ys(r,t);if(r.enteringChildren&&i){let{delayChildren:t}=i.transition||{};n.delay=Ms(r.enteringChildren,e,t)}}return{animation:t,options:n}}))}if(u.size){let t={};if(typeof s.initial!=`boolean`){let n=Ys(e,Array.isArray(s.initial)?s.initial[0]:s.initial);n&&n.transition&&(t.transition=n.transition)}u.forEach(n=>{let r=e.getBaseTarget(n),i=e.getValue(n);i&&(i.liveStyle=!0),t[n]=r??null}),l.push({animation:t})}let p=!!l.length;return r&&(s.initial===!1||s.initial===s.animate)&&!e.manuallyAnimateOnMount&&(p=!1),r=!1,i=!1,p?t(l):Promise.resolve()}function c(t,r){if(n[t].isActive===r)return Promise.resolve();e.variantChildren?.forEach(e=>e.animationState?.setActive(t,r)),n[t].isActive=r;let i=s(t);for(let e in n)n[e].protectedKeys={};return i}return{animateChanges:s,setActive:c,setAnimateFunction:o,getState:()=>n,reset:()=>{n=Iu(),i=!0}}}function Pu(e,t){return typeof t==`string`?t!==e:Array.isArray(t)?!Au(t,e):!1}function Fu(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Iu(){return{animate:Fu(!0),whileInView:Fu(),whileHover:Fu(),whileTap:Fu(),whileDrag:Fu(),whileFocus:Fu(),exit:Fu()}}function Lu(e,t){e.min=t.min,e.max=t.max}function Ru(e,t){Lu(e.x,t.x),Lu(e.y,t.y)}function zu(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}var Bu=1e-4,Vu=1-Bu,Hu=1+Bu,Uu=.01,Wu=0-Uu,Gu=0+Uu;function Ku(e){return e.max-e.min}function qu(e,t,n){return Math.abs(e-t)<=n}function Ju(e,t,n,r=.5){e.origin=r,e.originPoint=I(t.min,t.max,e.origin),e.scale=Ku(n)/Ku(t),e.translate=I(n.min,n.max,e.origin)-e.originPoint,(e.scale>=Vu&&e.scale<=Hu||isNaN(e.scale))&&(e.scale=1),(e.translate>=Wu&&e.translate<=Gu||isNaN(e.translate))&&(e.translate=0)}function Yu(e,t,n,r){Ju(e.x,t.x,n.x,r?r.originX:void 0),Ju(e.y,t.y,n.y,r?r.originY:void 0)}function Xu(e,t,n){e.min=n.min+t.min,e.max=e.min+Ku(t)}function Zu(e,t,n){Xu(e.x,t.x,n.x),Xu(e.y,t.y,n.y)}function Qu(e,t,n){e.min=t.min-n.min,e.max=e.min+Ku(t)}function $u(e,t,n){Qu(e.x,t.x,n.x),Qu(e.y,t.y,n.y)}function ed(e,t,n,r,i){return e-=t,e=Kl(e,1/n,r),i!==void 0&&(e=Kl(e,1/i,r)),e}function td(e,t=0,n=1,r=.5,i,a=e,o=e){if(_a.test(t)&&(t=parseFloat(t),t=I(o.min,o.max,t/100)-o.min),typeof t!=`number`)return;let s=I(a.min,a.max,r);e===a&&(s-=t),e.min=ed(e.min,t,n,s,i),e.max=ed(e.max,t,n,s,i)}function nd(e,t,[n,r,i],a,o){td(e,t[n],t[r],t[i],t.scale,a,o)}var rd=[`x`,`scaleX`,`originX`],id=[`y`,`scaleY`,`originY`];function ad(e,t,n,r){nd(e.x,t,rd,n?n.x:void 0,r?r.x:void 0),nd(e.y,t,id,n?n.y:void 0,r?r.y:void 0)}function od(e){return e.translate===0&&e.scale===1}function Q(e){return od(e.x)&&od(e.y)}function sd(e,t){return e.min===t.min&&e.max===t.max}function cd(e,t){return sd(e.x,t.x)&&sd(e.y,t.y)}function ld(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function ud(e,t){return ld(e.x,t.x)&&ld(e.y,t.y)}function dd(e){return Ku(e.x)/Ku(e.y)}function fd(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}function pd(e){return[e(`x`),e(`y`)]}function md(e,t,n){let r=``,i=e.x.translate/t.x,a=e.y.translate/t.y,o=n?.z||0;if((i||a||o)&&(r=`translate3d(${i}px, ${a}px, ${o}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){let{transformPerspective:e,rotate:t,rotateX:i,rotateY:a,skewX:o,skewY:s}=n;e&&(r=`perspective(${e}px) ${r}`),t&&(r+=`rotate(${t}deg) `),i&&(r+=`rotateX(${i}deg) `),a&&(r+=`rotateY(${a}deg) `),o&&(r+=`skewX(${o}deg) `),s&&(r+=`skewY(${s}deg) `)}let s=e.x.scale*t.x,c=e.y.scale*t.y;return(s!==1||c!==1)&&(r+=`scale(${s}, ${c})`),r||`none`}var hd=[`TopLeft`,`TopRight`,`BottomLeft`,`BottomRight`],gd=hd.length,_d=e=>typeof e==`string`?parseFloat(e):e,vd=e=>typeof e==`number`||P.test(e);function yd(e,t,n,r,i,a){i?(e.opacity=I(0,n.opacity??1,$(r)),e.opacityExit=I(t.opacity??1,0,xd(r))):a&&(e.opacity=I(t.opacity??1,n.opacity??1,r));for(let i=0;i<gd;i++){let a=`border${hd[i]}Radius`,o=bd(t,a),s=bd(n,a);o===void 0&&s===void 0||(o||=0,s||=0,o===0||s===0||vd(o)===vd(s)?(e[a]=Math.max(I(_d(o),_d(s),r),0),(_a.test(s)||_a.test(o))&&(e[a]+=`%`)):e[a]=s)}(t.rotate||n.rotate)&&(e.rotate=I(t.rotate||0,n.rotate||0,r))}function bd(e,t){return e[t]===void 0?e.borderRadius:e[t]}var $=Sd(0,.5,ki),xd=Sd(.5,.95,ui);function Sd(e,t,n){return r=>r<e?0:r>t?1:n(pi(e,t,r))}function Cd(e,t,n){let r=ac(e)?e:V(e);return r.start(Ks(``,r,t,n)),r.animation}function wd(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}var Td=(e,t)=>e.depth-t.depth,Ed=class{constructor(){this.children=[],this.isDirty=!1}add(e){ni(this.children,e),this.isDirty=!0}remove(e){ri(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(Td),this.isDirty=!1,this.children.forEach(e)}};function Dd(e,t){let n=qi.now(),r=({timestamp:i})=>{let a=i-n;a>=t&&(Hi(r),e(a-t))};return N.setup(r,!0),()=>Hi(r)}function Od(e){return ac(e)?e.get():e}var kd=class{constructor(){this.members=[]}add(e){ni(this.members,e);for(let t=this.members.length-1;t>=0;t--){let n=this.members[t];if(n===e||n===this.lead||n===this.prevLead)continue;let r=n.instance;(!r||r.isConnected===!1)&&!n.snapshot&&(ri(this.members,n),n.unmount())}e.scheduleRender()}remove(e){if(ri(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){let e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){for(let t=this.members.indexOf(e)-1;t>=0;t--){let e=this.members[t];if(e.isPresent!==!1&&e.instance?.isConnected!==!1)return this.promote(e),!0}return!1}promote(e,t){let n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.updateSnapshot(),e.scheduleRender();let{layoutDependency:r}=n.options,{layoutDependency:i}=e.options;(r===void 0||r!==i)&&(e.resumeFrom=n,t&&(n.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root?.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&n.hide()}}exitAnimationComplete(){this.members.forEach(e=>{e.options.onExitComplete?.(),e.resumingFrom?.options.onExitComplete?.()})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){this.lead?.snapshot&&(this.lead.snapshot=void 0)}},Ad={hasAnimatedSinceResize:!0,hasEverUpdated:!1},jd={nodes:0,calculatedTargetDeltas:0,calculatedProjections:0},Md=[``,`X`,`Y`,`Z`],Nd=1e3,Pd=0;function Fd(e,t,n,r){let{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function Id(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;let{visualElement:t}=e.options;if(!t)return;let n=uc(t);if(window.MotionHasOptimisedAnimation(n,`transform`)){let{layout:t,layoutId:r}=e.options;window.MotionCancelOptimisedAnimation(n,`transform`,N,!(t||r))}let{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&Id(r)}function Ld({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(e={},n=t?.()){this.id=Pd++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Ri.value&&(jd.nodes=jd.calculatedTargetDeltas=jd.calculatedProjections=0),this.nodes.forEach(Bd),this.nodes.forEach(qd),this.nodes.forEach(Jd),this.nodes.forEach(Vd),Ri.addProjectionMetrics&&Ri.addProjectionMetrics(jd)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=n?n.root||n:this,this.path=n?[...n.path,n]:[],this.parent=n,this.depth=n?n.depth+1:0;for(let e=0;e<this.path.length;e++)this.path[e].shouldResetTransform=!0;this.root===this&&(this.nodes=new Ed)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new mi),this.eventHandlers.get(e).add(t)}notifyListeners(e,...t){let n=this.eventHandlers.get(e);n&&n.notify(...t)}hasListeners(e){return this.eventHandlers.has(e)}mount(t){if(this.instance)return;this.isSVG=rl(t)&&!vl(t),this.instance=t;let{layoutId:n,layout:r,visualElement:i}=this.options;if(i&&!i.current&&i.mount(t),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(r||n)&&(this.isLayoutDirty=!0),e){let n,r=0,i=()=>this.root.updateBlockedByResize=!1;N.read(()=>{r=window.innerWidth}),e(t,()=>{let e=window.innerWidth;e!==r&&(r=e,this.root.updateBlockedByResize=!0,n&&n(),n=Dd(i,250),Ad.hasAnimatedSinceResize&&(Ad.hasAnimatedSinceResize=!1,this.nodes.forEach(Kd)))})}n&&this.root.registerSharedNode(n,this),this.options.animate!==!1&&i&&(n||r)&&this.addEventListener(`didUpdate`,({delta:e,hasLayoutChanged:t,hasRelativeLayoutChanged:n,layout:r})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}let a=this.options.transition||i.getDefaultTransition()||tf,{onLayoutAnimationStart:o,onLayoutAnimationComplete:s}=i.getProps(),c=!this.targetLayout||!ud(this.targetLayout,r),l=!t&&n;if(this.options.layoutRoot||this.resumeFrom||l||t&&(c||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);let t={...Ws(a,`layout`),onPlay:o,onComplete:s};(i.shouldReduceMotion||this.options.layoutRoot)&&(t.delay=0,t.type=!1),this.startAnimation(t),this.setAnimationOrigin(e,l)}else t||Kd(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=r})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);let e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Hi(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Yd),this.animationId++)}getTransformTemplate(){let{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(e=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Id(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let e=0;e<this.path.length;e++){let t=this.path[e];t.shouldResetTransform=!0,(typeof t.latestValues.x==`string`||typeof t.latestValues.y==`string`)&&(t.isLayoutDirty=!0),t.updateScroll(`snapshot`),t.options.layoutRoot&&t.willUpdate(!1)}let{layoutId:t,layout:n}=this.options;if(t===void 0&&!n)return;let r=this.getTransformTemplate();this.prevTransformTemplateValue=r?r(this.latestValues,``):void 0,this.updateSnapshot(),e&&this.notifyListeners(`willUpdate`)}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Ud);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Wd);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(Gd),this.nodes.forEach(Rd),this.nodes.forEach(zd)):this.nodes.forEach(Wd),this.clearAllSnapshots();let e=qi.now();Ui.delta=ii(0,1e3/60,e-Ui.timestamp),Ui.timestamp=e,Ui.isProcessing=!0,Wi.update.process(Ui),Wi.preRender.process(Ui),Wi.render.process(Ui),Ui.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Rc.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Hd),this.sharedNodes.forEach(Xd)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,N.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){N.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Ku(this.snapshot.measuredBox.x)&&!Ku(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let e=0;e<this.path.length;e++)this.path[e].updateScroll();let e=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=wl(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners(`measure`,this.layout.layoutBox);let{visualElement:t}=this.options;t&&t.notify(`LayoutMeasure`,this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(e=`measure`){let t=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t&&this.instance){let t=r(this.instance);this.scroll={animationId:this.root.animationId,phase:e,isRoot:t,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:t}}}resetTransform(){if(!i)return;let e=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,t=this.projectionDelta&&!Q(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,``):void 0,a=r!==this.prevTransformTemplateValue;e&&this.instance&&(t||Ul(this.latestValues)||a)&&(i(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())}measure(e=!0){let t=this.measurePageBox(),n=this.removeElementScroll(t);return e&&(n=this.removeTransform(n)),of(n),{animationId:this.root.animationId,measuredBox:t,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){let{visualElement:e}=this.options;if(!e)return wl();let t=e.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(cf))){let{scroll:e}=this.root;e&&($l(t.x,e.offset.x),$l(t.y,e.offset.y))}return t}removeElementScroll(e){let t=wl();if(Ru(t,e),this.scroll?.wasRoot)return t;for(let n=0;n<this.path.length;n++){let r=this.path[n],{scroll:i,options:a}=r;r!==this.root&&i&&a.layoutScroll&&(i.wasRoot&&Ru(t,e),$l(t.x,i.offset.x),$l(t.y,i.offset.y))}return t}applyTransform(e,t=!1){let n=wl();Ru(n,e);for(let e=0;e<this.path.length;e++){let r=this.path[e];!t&&r.options.layoutScroll&&r.scroll&&r!==r.root&&nu(n,{x:-r.scroll.offset.x,y:-r.scroll.offset.y}),Ul(r.latestValues)&&nu(n,r.latestValues,r.layout?.layoutBox)}return Ul(this.latestValues)&&nu(n,this.latestValues,this.layout?.layoutBox),n}removeTransform(e){let t=wl();Ru(t,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];if(!Ul(n.latestValues))continue;let r;n.instance&&(Hl(n.latestValues)&&n.updateSnapshot(),r=wl(),Ru(r,n.measurePageBox())),ad(t,n.latestValues,n.snapshot?.layoutBox,r)}return Ul(this.latestValues)&&ad(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:e.crossfade===void 0?!0:e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Ui.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(e=!1){let t=this.getLead();this.isProjectionDirty||=t.isProjectionDirty,this.isTransformDirty||=t.isTransformDirty,this.isSharedProjectionDirty||=t.isSharedProjectionDirty;let n=!!this.resumingFrom||this!==t;if(!(e||n&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;let{layout:r,layoutId:i}=this.options;if(!this.layout||!(r||i))return;this.resolvedRelativeTargetAt=Ui.timestamp;let a=this.getClosestProjectingParent();a&&this.linkedParentVersion!==a.layoutVersion&&!a.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(a&&a.layout?this.createRelativeTarget(a,this.layout.layoutBox,a.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=wl(),this.targetWithTransforms=wl()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Zu(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Ru(this.target,this.layout.layoutBox),Yl(this.target,this.targetDelta)):Ru(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,a&&!!a.resumingFrom==!!this.resumingFrom&&!a.options.layoutScroll&&a.target&&this.animationProgress!==1?this.createRelativeTarget(a,this.target,a.target):this.relativeParent=this.relativeTarget=void 0),Ri.value&&jd.calculatedTargetDeltas++)}getClosestProjectingParent(){if(!(!this.parent||Hl(this.parent.latestValues)||Wl(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(e,t,n){this.relativeParent=e,this.linkedParentVersion=e.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=wl(),this.relativeTargetOrigin=wl(),$u(this.relativeTargetOrigin,t,n),Ru(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){let e=this.getLead(),t=!!this.resumingFrom||this!==e,n=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(n=!1),t&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(n=!1),this.resolvedRelativeTargetAt===Ui.timestamp&&(n=!1),n)return;let{layout:r,layoutId:i}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(r||i))return;Ru(this.layoutCorrected,this.layout.layoutBox);let a=this.treeScale.x,o=this.treeScale.y;Ql(this.layoutCorrected,this.treeScale,this.path,t),e.layout&&!e.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(e.target=e.layout.layoutBox,e.targetWithTransforms=wl());let{target:s}=e;if(!s){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(zu(this.prevProjectionDelta.x,this.projectionDelta.x),zu(this.prevProjectionDelta.y,this.projectionDelta.y)),Yu(this.projectionDelta,this.layoutCorrected,s,this.latestValues),(this.treeScale.x!==a||this.treeScale.y!==o||!fd(this.projectionDelta.x,this.prevProjectionDelta.x)||!fd(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners(`projectionUpdate`,s)),Ri.value&&jd.calculatedProjections++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(e=!0){if(this.options.visualElement?.scheduleRender(),e){let e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Sl(),this.projectionDelta=Sl(),this.projectionDeltaWithTransform=Sl()}setAnimationOrigin(e,t=!1){let n=this.snapshot,r=n?n.latestValues:{},i={...this.latestValues},a=Sl();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;let o=wl(),s=(n?n.source:void 0)!==(this.layout?this.layout.source:void 0),c=this.getStack(),l=!c||c.members.length<=1,u=!!(s&&!l&&this.options.crossfade===!0&&!this.path.some(ef));this.animationProgress=0;let d;this.mixTargetDelta=t=>{let n=t/1e3;Zd(a.x,e.x,n),Zd(a.y,e.y,n),this.setTargetDelta(a),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&($u(o,this.layout.layoutBox,this.relativeParent.layout.layoutBox),$d(this.relativeTarget,this.relativeTargetOrigin,o,n),d&&cd(this.relativeTarget,d)&&(this.isProjectionDirty=!1),d||=wl(),Ru(d,this.relativeTarget)),s&&(this.animationValues=i,yd(i,r,this.latestValues,n,u,l)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners(`animationStart`),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&=(Hi(this.pendingAnimation),void 0),this.pendingAnimation=N.update(()=>{Ad.hasAnimatedSinceResize=!0,Ji.layout++,this.motionValue||=V(0),this.motionValue.jump(0,!1),this.currentAnimation=Cd(this.motionValue,[0,1e3],{...e,velocity:0,isSync:!0,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onStop:()=>{Ji.layout--},onComplete:()=>{Ji.layout--,e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);let e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners(`animationComplete`)}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Nd),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){let e=this.getLead(),{targetWithTransforms:t,target:n,layout:r,latestValues:i}=e;if(!(!t||!n||!r)){if(this!==e&&this.layout&&r&&sf(this.options.animationType,this.layout.layoutBox,r.layoutBox)){n=this.target||wl();let t=Ku(this.layout.layoutBox.x);n.x.min=e.target.x.min,n.x.max=n.x.min+t;let r=Ku(this.layout.layoutBox.y);n.y.min=e.target.y.min,n.y.max=n.y.min+r}Ru(t,n),nu(t,i),Yu(this.projectionDeltaWithTransform,this.layoutCorrected,t,i)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new kd),this.sharedNodes.get(e).add(t);let n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){let e=this.getStack();return e?e.lead===this:!0}getLead(){let{layoutId:e}=this.options;return e&&this.getStack()?.lead||this}getPrevLead(){let{layoutId:e}=this.options;return e?this.getStack()?.prevLead:void 0}getStack(){let{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote({needsReset:e,transition:t,preserveFollowOpacity:n}={}){let r=this.getStack();r&&r.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){let e=this.getStack();return e?e.relegate(this):!1}resetSkewAndRotation(){let{visualElement:e}=this.options;if(!e)return;let t=!1,{latestValues:n}=e;if((n.z||n.rotate||n.rotateX||n.rotateY||n.rotateZ||n.skewX||n.skewY)&&(t=!0),!t)return;let r={};n.z&&Fd(`z`,e,r,this.animationValues);for(let t=0;t<Md.length;t++)Fd(`rotate${Md[t]}`,e,r,this.animationValues),Fd(`skew${Md[t]}`,e,r,this.animationValues);e.render();for(let t in r)e.setStaticValue(t,r[t]),this.animationValues&&(this.animationValues[t]=r[t]);e.scheduleRender()}applyProjectionStyles(e,t){if(!this.instance||this.isSVG)return;if(!this.isVisible){e.visibility=`hidden`;return}let n=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,e.visibility=``,e.opacity=``,e.pointerEvents=Od(t?.pointerEvents)||``,e.transform=n?n(this.latestValues,``):`none`;return}let r=this.getLead();if(!this.projectionDelta||!this.layout||!r.target){this.options.layoutId&&(e.opacity=this.latestValues.opacity===void 0?1:this.latestValues.opacity,e.pointerEvents=Od(t?.pointerEvents)||``),this.hasProjected&&!Ul(this.latestValues)&&(e.transform=n?n({},``):`none`,this.hasProjected=!1);return}e.visibility=``;let i=r.animationValues||r.latestValues;this.applyTransformsToTarget();let a=md(this.projectionDeltaWithTransform,this.treeScale,i);n&&(a=n(i,a)),e.transform=a;let{x:o,y:s}=this.projectionDelta;e.transformOrigin=`${o.origin*100}% ${s.origin*100}% 0`,r.animationValues?e.opacity=r===this?i.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:i.opacityExit:e.opacity=r===this?i.opacity===void 0?``:i.opacity:i.opacityExit===void 0?0:i.opacityExit;for(let t in pu){if(i[t]===void 0)continue;let{correct:n,applyTo:o,isCSSVariable:s}=pu[t],c=a===`none`?i[t]:n(i[t],r);if(o){let t=o.length;for(let n=0;n<t;n++)e[o[n]]=c}else s?this.options.visualElement.renderState.vars[t]=c:e[t]=c}this.options.layoutId&&(e.pointerEvents=r===this?Od(t?.pointerEvents)||``:`none`)}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(e=>e.currentAnimation?.stop()),this.root.nodes.forEach(Ud),this.root.sharedNodes.clear()}}}function Rd(e){e.updateLayout()}function zd(e){let t=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners(`didUpdate`)){let{layoutBox:n,measuredBox:r}=e.layout,{animationType:i}=e.options,a=t.source!==e.layout.source;if(i===`size`)pd(e=>{let r=a?t.measuredBox[e]:t.layoutBox[e],i=Ku(r);r.min=n[e].min,r.max=r.min+i});else if(i===`x`||i===`y`){let e=i===`x`?`y`:`x`;Lu(a?t.measuredBox[e]:t.layoutBox[e],n[e])}else sf(i,t.layoutBox,n)&&pd(r=>{let i=a?t.measuredBox[r]:t.layoutBox[r],o=Ku(n[r]);i.max=i.min+o,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+o)});let o=Sl();Yu(o,n,t.layoutBox);let s=Sl();a?Yu(s,e.applyTransform(r,!0),t.measuredBox):Yu(s,n,t.layoutBox);let c=!Q(o),l=!1;if(!e.resumeFrom){let r=e.getClosestProjectingParent();if(r&&!r.resumeFrom){let{snapshot:i,layout:a}=r;if(i&&a){let o=wl();$u(o,t.layoutBox,i.layoutBox);let s=wl();$u(s,n,a.layoutBox),ud(o,s)||(l=!0),r.options.layoutRoot&&(e.relativeTarget=s,e.relativeTargetOrigin=o,e.relativeParent=r)}}}e.notifyListeners(`didUpdate`,{layout:n,snapshot:t,delta:s,layoutDelta:o,hasLayoutChanged:c,hasRelativeLayoutChanged:l})}else if(e.isLead()){let{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function Bd(e){Ri.value&&jd.nodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty),e.isTransformDirty||=e.parent.isTransformDirty)}function Vd(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function Hd(e){e.clearSnapshot()}function Ud(e){e.clearMeasurements()}function Wd(e){e.isLayoutDirty=!1}function Gd(e){let{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify(`BeforeLayoutMeasure`),e.resetTransform()}function Kd(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function qd(e){e.resolveTargetDelta()}function Jd(e){e.calcProjection()}function Yd(e){e.resetSkewAndRotation()}function Xd(e){e.removeLeadSnapshot()}function Zd(e,t,n){e.translate=I(t.translate,0,n),e.scale=I(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Qd(e,t,n,r){e.min=I(t.min,n.min,r),e.max=I(t.max,n.max,r)}function $d(e,t,n,r){Qd(e.x,t.x,n.x,r),Qd(e.y,t.y,n.y,r)}function ef(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}var tf={duration:.45,ease:[.4,0,.1,1]},nf=e=>typeof navigator<`u`&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),rf=nf(`applewebkit/`)&&!nf(`chrome/`)?Math.round:ui;function af(e){e.min=rf(e.min),e.max=rf(e.max)}function of(e){af(e.x),af(e.y)}function sf(e,t,n){return e===`position`||e===`preserve-aspect`&&!qu(dd(t),dd(n),.2)}function cf(e){return e!==e.root&&e.scroll?.wasRoot}var lf=Ld({attachResizeListener:(e,t)=>wd(e,`resize`,t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),uf={current:void 0},df=Ld({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!uf.current){let e=new lf({});e.mount(window),e.setOptions({layoutScroll:!0}),uf.current=e}return uf.current},resetTransform:(e,t)=>{e.style.transform=t===void 0?`none`:t},checkIsScrollRoot:e=>window.getComputedStyle(e).position===`fixed`}),ff=(0,b.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:`never`});function pf(e=!0){let t=(0,b.useContext)(ti);if(t===null)return[!0,null];let{isPresent:n,onExitComplete:r,register:i}=t,a=(0,b.useId)();(0,b.useEffect)(()=>{if(e)return i(a)},[e]);let o=(0,b.useCallback)(()=>e&&r&&r(a),[a,r,e]);return!n&&r?[!1,o]:[!0]}var mf=(0,b.createContext)({strict:!1}),hf={animation:[`animate`,`variants`,`whileHover`,`whileTap`,`exit`,`whileInView`,`whileFocus`,`whileDrag`],exit:[`exit`],drag:[`drag`,`dragControls`],focus:[`whileFocus`],hover:[`whileHover`,`onHoverStart`,`onHoverEnd`],tap:[`whileTap`,`onTap`,`onTapStart`,`onTapCancel`],pan:[`onPan`,`onPanStart`,`onPanSessionStart`,`onPanEnd`],inView:[`whileInView`,`onViewportEnter`,`onViewportLeave`],layout:[`layout`,`layoutId`]},gf=!1;function _f(){if(gf)return;let e={};for(let t in hf)e[t]={isEnabled:e=>hf[t].some(t=>!!e[t])};X(e),gf=!0}function vf(){return _f(),Pl()}function yf(e){let t=vf();for(let n in e)t[n]={...t[n],...e[n]};X(t)}var bf=new Set(`animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.propagate.ignoreStrict.viewport`.split(`.`));function xf(e){return e.startsWith(`while`)||e.startsWith(`drag`)&&e!==`draggable`||e.startsWith(`layout`)||e.startsWith(`onTap`)||e.startsWith(`onPan`)||e.startsWith(`onLayout`)||bf.has(e)}var Sf=c({default:()=>Cf}),Cf,wf=o((()=>{throw Cf={},Error(`Could not resolve "@emotion/is-prop-valid" imported by "framer-motion". Is it installed?`)})),Tf=e=>!xf(e);function Ef(e){typeof e==`function`&&(Tf=t=>t.startsWith(`on`)?!xf(t):e(t))}try{Ef((wf(),d(Sf)).default)}catch{}function Df(e,t,n){let r={};for(let i in e)i===`values`&&typeof e.values==`object`||ac(e[i])||(Tf(i)||n===!0&&xf(i)||!t&&!xf(i)||e.draggable&&i.startsWith(`onDrag`))&&(r[i]=e[i]);return r}var Of=(0,b.createContext)({});function kf(e,t){if(K(e)){let{initial:t,animate:n}=e;return{initial:t===!1||Dl(t)?t:void 0,animate:Dl(n)?n:void 0}}return e.inherit===!1?{}:t}function Af(e){let{initial:t,animate:n}=kf(e,(0,b.useContext)(Of));return(0,b.useMemo)(()=>({initial:t,animate:n}),[jf(t),jf(n)])}function jf(e){return Array.isArray(e)?e.join(` `):e}var Mf=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Nf(e,t,n){for(let r in t)!ac(t[r])&&!mu(r,n)&&(e[r]=t[r])}function Pf({transformTemplate:e},t){return(0,b.useMemo)(()=>{let n=Mf();return cu(n,t,e),Object.assign({},n.vars,n.style)},[t])}function Ff(e,t){let n=e.style||{},r={};return Nf(r,n,e),Object.assign(r,Pf(e,t)),r}function If(e,t){let n={},r=Ff(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout=`none`,r.touchAction=e.drag===!0?`none`:`pan-${e.drag===`x`?`y`:`x`}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}var Lf=()=>({...Mf(),attrs:{}});function Rf(e,t,n,r){let i=(0,b.useMemo)(()=>{let n=Lf();return Su(n,t,wu(r),e.transformTemplate,e.style),{...n.attrs,style:{...n.style}}},[t]);if(e.style){let t={};Nf(t,e.style,e),i.style={...t,...i.style}}return i}var zf=[`animate`,`circle`,`defs`,`desc`,`ellipse`,`g`,`image`,`line`,`filter`,`marker`,`mask`,`metadata`,`path`,`pattern`,`polygon`,`polyline`,`rect`,`stop`,`switch`,`symbol`,`svg`,`text`,`tspan`,`use`,`view`];function Bf(e){return typeof e!=`string`||e.includes(`-`)?!1:!!(zf.indexOf(e)>-1||/[A-Z]/u.test(e))}function Vf(e,t,n,{latestValues:r},i,a=!1,o){let s=(o??Bf(e)?Rf:If)(t,r,i,e),c=Df(t,typeof e==`string`,a),l=e===b.Fragment?{}:{...c,...s,ref:n},{children:u}=t,d=(0,b.useMemo)(()=>ac(u)?u.get():u,[u]);return(0,b.createElement)(e,{...l,children:d})}function Hf({scrapeMotionValuesFromProps:e,createRenderState:t},n,r,i){return{latestValues:Uf(n,r,i,e),renderState:t()}}function Uf(e,t,n,r){let i={},a=r(e,{});for(let e in a)i[e]=Od(a[e]);let{initial:o,animate:s}=e,c=K(e),l=q(e);t&&l&&!c&&e.inherit!==!1&&(o===void 0&&(o=t.initial),s===void 0&&(s=t.animate));let u=n?n.initial===!1:!1;u||=o===!1;let d=u?s:o;if(d&&typeof d!=`boolean`&&!El(d)){let t=Array.isArray(d)?d:[d];for(let n=0;n<t.length;n++){let r=Js(e,t[n]);if(r){let{transitionEnd:e,transition:t,...n}=r;for(let e in n){let t=n[e];if(Array.isArray(t)){let e=u?t.length-1:0;t=t[e]}t!==null&&(i[e]=t)}for(let t in e)i[t]=e[t]}}}return i}var Wf=e=>(t,n)=>{let r=(0,b.useContext)(Of),i=(0,b.useContext)(ti),a=()=>Hf(e,t,r,i);return n?a():$r(a)},Gf=Wf({scrapeMotionValuesFromProps:hu,createRenderState:Mf}),Kf=Wf({scrapeMotionValuesFromProps:Eu,createRenderState:Lf}),qf=Symbol.for(`motionComponentSymbol`);function Jf(e,t,n){let r=(0,b.useRef)(n);(0,b.useInsertionEffect)(()=>{r.current=n});let i=(0,b.useRef)(null);return(0,b.useCallback)(n=>{n&&e.onMount?.(n);let a=r.current;if(typeof a==`function`)if(n){let e=a(n);typeof e==`function`&&(i.current=e)}else i.current?(i.current(),i.current=null):a(n);else a&&(a.current=n);t&&(n?t.mount(n):t.unmount())},[t])}var Yf=(0,b.createContext)({});function Xf(e){return e&&typeof e==`object`&&Object.prototype.hasOwnProperty.call(e,`current`)}function Zf(e,t,n,r,i,a){let{visualElement:o}=(0,b.useContext)(Of),s=(0,b.useContext)(mf),c=(0,b.useContext)(ti),l=(0,b.useContext)(ff),u=l.reducedMotion,d=l.skipAnimations,f=(0,b.useRef)(null),p=(0,b.useRef)(!1);r||=s.renderer,!f.current&&r&&(f.current=r(e,{visualState:t,parent:o,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u,skipAnimations:d,isSVG:a}),p.current&&f.current&&(f.current.manuallyAnimateOnMount=!0));let m=f.current,h=(0,b.useContext)(Yf);m&&!m.projection&&i&&(m.type===`html`||m.type===`svg`)&&Qf(f.current,n,i,h);let g=(0,b.useRef)(!1);(0,b.useInsertionEffect)(()=>{m&&g.current&&m.update(n,c)});let _=n[lc],v=(0,b.useRef)(!!_&&typeof window<`u`&&!window.MotionHandoffIsComplete?.(_)&&window.MotionHasOptimisedAnimation?.(_));return ei(()=>{p.current=!0,m&&(g.current=!0,window.MotionIsMounted=!0,m.updateFeatures(),m.scheduleRenderMicrotask(),v.current&&m.animationState&&m.animationState.animateChanges())}),(0,b.useEffect)(()=>{m&&(!v.current&&m.animationState&&m.animationState.animateChanges(),v.current&&=(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(_)}),!1),m.enteringChildren=void 0)}),m}function Qf(e,t,n,r){let{layoutId:i,layout:a,drag:o,dragConstraints:s,layoutScroll:c,layoutRoot:l,layoutCrossfade:u}=t;e.projection=new n(e.latestValues,t[`data-framer-portal-id`]?void 0:$f(e.parent)),e.projection.setOptions({layoutId:i,layout:a,alwaysMeasureLayout:!!o||s&&Xf(s),visualElement:e,animationType:typeof a==`string`?a:`both`,initialPromotionConfig:r,crossfade:u,layoutScroll:c,layoutRoot:l})}function $f(e){if(e)return e.options.allowProjection===!1?$f(e.parent):e.projection}function ep(e,{forwardMotionProps:t=!1,type:n}={},r,i){r&&yf(r);let a=n?n===`svg`:Bf(e),o=a?Kf:Gf;function s(n,s){let c,l={...(0,b.useContext)(ff),...n,layoutId:tp(n)},{isStatic:u}=l,d=Af(n),f=o(n,u);if(!u&&typeof window<`u`){np(l,r);let t=rp(l);c=t.MeasureLayout,d.visualElement=Zf(e,f,l,i,t.ProjectionNode,a)}return(0,k.jsxs)(Of.Provider,{value:d,children:[c&&d.visualElement?(0,k.jsx)(c,{visualElement:d.visualElement,...l}):null,Vf(e,n,Jf(f,d.visualElement,s),f,u,t,a)]})}s.displayName=`motion.${typeof e==`string`?e:`create(${e.displayName??e.name??``})`}`;let c=(0,b.forwardRef)(s);return c[qf]=e,c}function tp({layoutId:e}){let t=(0,b.useContext)(Qr).id;return t&&e!==void 0?t+`-`+e:e}function np(e,t){(0,b.useContext)(mf).strict}function rp(e){let{drag:t,layout:n}=vf();if(!t&&!n)return{};let r={...t,...n};return{MeasureLayout:t?.isEnabled(e)||n?.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function ip(e,t){if(typeof Proxy>`u`)return ep;let n=new Map,r=(n,r)=>ep(n,r,e,t);return new Proxy((e,t)=>r(e,t),{get:(i,a)=>a===`create`?r:(n.has(a)||n.set(a,ep(a,void 0,e,t)),n.get(a))})}var ap=(e,t)=>t.isSVG??Bf(e)?new Du(t):new _u(t,{allowProjection:e!==b.Fragment}),op=class extends Ll{constructor(e){super(e),e.animationState||=Nu(e)}updateAnimationControlsSubscription(){let{animate:e}=this.node.getProps();El(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){let{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}},sp=0,cp={animation:{Feature:op},exit:{Feature:class extends Ll{constructor(){super(...arguments),this.id=sp++,this.isExitComplete=!1}update(){if(!this.node.presenceContext)return;let{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===n)return;if(e&&n===!1){if(this.isExitComplete){let{initial:e,custom:t}=this.node.getProps();if(typeof e==`string`){let n=Ys(this.node,e,t);if(n){let{transition:e,transitionEnd:t,...r}=n;for(let e in r)this.node.getValue(e)?.jump(r[e])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive(`exit`,!1);this.isExitComplete=!1;return}let r=this.node.animationState.setActive(`exit`,!e);t&&!e&&r.then(()=>{this.isExitComplete=!0,t(this.id)})}mount(){let{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}}};function lp(e){return{point:{x:e.pageX,y:e.pageY}}}var up=e=>t=>U(t)&&e(t,lp(t));function dp(e,t,n,r){return wd(e,t,up(n),r)}var fp=({current:e})=>e?e.ownerDocument.defaultView:null,pp=(e,t)=>Math.abs(e-t);function mp(e,t){let n=pp(e.x,t.x),r=pp(e.y,t.y);return Math.sqrt(n**2+r**2)}var hp=new Set([`auto`,`scroll`]),gp=class{constructor(e,t,{transformPagePoint:n,contextWindow:r=window,dragSnapToOrigin:i=!1,distanceThreshold:a=3,element:o}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=e=>{this.handleScroll(e.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=_p(this.lastRawMoveEventInfo,this.transformPagePoint));let e=yp(this.lastMoveEventInfo,this.history),t=this.startEvent!==null,n=mp(e.offset,{x:0,y:0})>=this.distanceThreshold;if(!t&&!n)return;let{point:r}=e,{timestamp:i}=Ui;this.history.push({...r,timestamp:i});let{onStart:a,onMove:o}=this.handlers;t||(a&&a(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),o&&o(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastRawMoveEventInfo=t,this.lastMoveEventInfo=_p(t,this.transformPagePoint),N.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();let{onEnd:n,onSessionEnd:r,resumeAnimation:i}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&i&&i(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let a=yp(e.type===`pointercancel`?this.lastMoveEventInfo:_p(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,a),r&&r(e,a)},!U(e))return;this.dragSnapToOrigin=i,this.handlers=t,this.transformPagePoint=n,this.distanceThreshold=a,this.contextWindow=r||window;let s=_p(lp(e),this.transformPagePoint),{point:c}=s,{timestamp:l}=Ui;this.history=[{...c,timestamp:l}];let{onSessionStart:u}=t;u&&u(e,yp(s,this.history)),this.removeListeners=fi(dp(this.contextWindow,`pointermove`,this.handlePointerMove),dp(this.contextWindow,`pointerup`,this.handlePointerUp),dp(this.contextWindow,`pointercancel`,this.handlePointerUp)),o&&this.startScrollTracking(o)}startScrollTracking(e){let t=e.parentElement;for(;t;){let e=getComputedStyle(t);(hp.has(e.overflowX)||hp.has(e.overflowY))&&this.scrollPositions.set(t,{x:t.scrollLeft,y:t.scrollTop}),t=t.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener(`scroll`,this.onElementScroll,{capture:!0}),window.addEventListener(`scroll`,this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener(`scroll`,this.onElementScroll,{capture:!0}),window.removeEventListener(`scroll`,this.onWindowScroll)}}handleScroll(e){let t=this.scrollPositions.get(e);if(!t)return;let n=e===window,r=n?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},i={x:r.x-t.x,y:r.y-t.y};i.x===0&&i.y===0||(n?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=i.x,this.lastMoveEventInfo.point.y+=i.y):this.history.length>0&&(this.history[0].x-=i.x,this.history[0].y-=i.y),this.scrollPositions.set(e,r),N.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Hi(this.updatePoint)}};function _p(e,t){return t?{point:t(e.point)}:e}function vp(e,t){return{x:e.x-t.x,y:e.y-t.y}}function yp({point:e},t){return{point:e,delta:vp(e,xp(t)),offset:vp(e,bp(t)),velocity:Sp(t,.1)}}function bp(e){return e[0]}function xp(e){return e[e.length-1]}function Sp(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null,i=xp(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>hi(t)));)n--;if(!r)return{x:0,y:0};r===e[0]&&e.length>2&&i.timestamp-r.timestamp>hi(t)*2&&(r=e[1]);let a=A(i.timestamp-r.timestamp);if(a===0)return{x:0,y:0};let o={x:(i.x-r.x)/a,y:(i.y-r.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function Cp(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?I(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?I(n,e,r.max):Math.min(e,n)),e}function wp(e,t,n){return{min:t===void 0?void 0:e.min+t,max:n===void 0?void 0:e.max+n-(e.max-e.min)}}function Tp(e,{top:t,left:n,bottom:r,right:i}){return{x:wp(e.x,n,i),y:wp(e.y,t,r)}}function Ep(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function Dp(e,t){return{x:Ep(e.x,t.x),y:Ep(e.y,t.y)}}function Op(e,t){let n=.5,r=Ku(e),i=Ku(t);return i>r?n=pi(t.min,t.max-r,e.min):r>i&&(n=pi(e.min,e.max-i,t.min)),ii(0,1,n)}function kp(e,t){let n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}var Ap=.35;function jp(e=Ap){return e===!1?e=0:e===!0&&(e=Ap),{x:Mp(e,`left`,`right`),y:Mp(e,`top`,`bottom`)}}function Mp(e,t,n){return{min:Np(e,t),max:Np(e,n)}}function Np(e,t){return typeof e==`number`?e:e[t]||0}var Pp=new WeakMap,Fp=class{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=wl(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:t=!1,distanceThreshold:n}={}){let{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;let i=e=>{t&&this.snapToCursor(lp(e).point),this.stopAnimation()},a=(e,t)=>{let{drag:n,dragPropagation:r,onDragStart:i}=this.getProps();if(n&&!r&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Hc(n),!this.openDragLock))return;this.latestPointerEvent=e,this.latestPanInfo=t,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),pd(e=>{let t=this.getAxisMotionValue(e).get()||0;if(_a.test(t)){let{projection:n}=this.visualElement;if(n&&n.layout){let r=n.layout.layoutBox[e];r&&(t=Ku(r)*(parseFloat(t)/100))}}this.originPoint[e]=t}),i&&N.update(()=>i(e,t),!1,!0),sc(this.visualElement,`transform`);let{animationState:a}=this.visualElement;a&&a.setActive(`whileDrag`,!0)},o=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t;let{dragPropagation:n,dragDirectionLock:r,onDirectionLock:i,onDrag:a}=this.getProps();if(!n&&!this.openDragLock)return;let{offset:o}=t;if(r&&this.currentDirection===null){this.currentDirection=zp(o),this.currentDirection!==null&&i&&i(this.currentDirection);return}this.updateAxis(`x`,t.point,o),this.updateAxis(`y`,t.point,o),this.visualElement.render(),a&&N.update(()=>a(e,t),!1,!0)},s=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t,this.stop(e,t),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>{let{dragSnapToOrigin:e}=this.getProps();(e||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:l}=this.getProps();this.panSession=new gp(e,{onSessionStart:i,onStart:a,onMove:o,onSessionEnd:s,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:l,distanceThreshold:n,contextWindow:fp(this.visualElement),element:this.visualElement.current})}stop(e,t){let n=e||this.latestPointerEvent,r=t||this.latestPanInfo,i=this.isDragging;if(this.cancel(),!i||!r||!n)return;let{velocity:a}=r;this.startAnimation(a);let{onDragEnd:o}=this.getProps();o&&N.postRender(()=>o(n,r))}cancel(){this.isDragging=!1;let{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();let{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive(`whileDrag`,!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,t,n){let{drag:r}=this.getProps();if(!n||!Rp(e,r,this.currentDirection))return;let i=this.getAxisMotionValue(e),a=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(a=Cp(a,this.constraints[e],this.elastic[e])),i.set(a)}resolveConstraints(){let{dragConstraints:e,dragElastic:t}=this.getProps(),n=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,r=this.constraints;e&&Xf(e)?this.constraints||=this.resolveRefConstraints():e&&n?this.constraints=Tp(n.layoutBox,e):this.constraints=!1,this.elastic=jp(t),r!==this.constraints&&!Xf(e)&&n&&this.constraints&&!this.hasMutatedConstraints&&pd(e=>{this.constraints!==!1&&this.getAxisMotionValue(e)&&(this.constraints[e]=kp(n.layoutBox[e],this.constraints[e]))})}resolveRefConstraints(){let{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Xf(e))return!1;let n=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;let i=iu(n,r.root,this.visualElement.getTransformPagePoint()),a=Dp(r.layout.layoutBox,i);if(t){let e=t(zl(a));this.hasMutatedConstraints=!!e,e&&(a=Rl(e))}return a}startAnimation(e){let{drag:t,dragMomentum:n,dragElastic:r,dragTransition:i,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),s=this.constraints||{},c=pd(o=>{if(!Rp(o,t,this.currentDirection))return;let c=s&&s[o]||{};(a===!0||a===o)&&(c={min:0,max:0});let l=r?200:1e6,u=r?40:1e7,d={type:`inertia`,velocity:n?e[o]:0,bounceStiffness:l,bounceDamping:u,timeConstant:750,restDelta:1,restSpeed:10,...i,...c};return this.startAxisValueAnimation(o,d)});return Promise.all(c).then(o)}startAxisValueAnimation(e,t){let n=this.getAxisMotionValue(e);return sc(this.visualElement,e),n.start(Ks(e,n,0,t,this.visualElement,!1))}stopAnimation(){pd(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){let t=`_drag${e.toUpperCase()}`,n=this.visualElement.getProps();return n[t]||this.visualElement.getValue(e,(n.initial?n.initial[e]:void 0)||0)}snapToCursor(e){pd(t=>{let{drag:n}=this.getProps();if(!Rp(t,n,this.currentDirection))return;let{projection:r}=this.visualElement,i=this.getAxisMotionValue(t);if(r&&r.layout){let{min:n,max:a}=r.layout.layoutBox[t],o=i.get()||0;i.set(e[t]-I(n,a,.5)+o)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;let{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!Xf(t)||!n||!this.constraints)return;this.stopAnimation();let r={x:0,y:0};pd(e=>{let t=this.getAxisMotionValue(e);if(t&&this.constraints!==!1){let n=t.get();r[e]=Op({min:n,max:n},this.constraints[e])}});let{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},``):`none`,n.root&&n.root.updateScroll(),n.updateLayout(),this.constraints=!1,this.resolveConstraints(),pd(t=>{if(!Rp(t,e,null))return;let n=this.getAxisMotionValue(t),{min:i,max:a}=this.constraints[t];n.set(I(i,a,r[t]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;Pp.set(this.visualElement,this);let e=this.visualElement.current,t=dp(e,`pointerdown`,t=>{let{drag:n,dragListener:r=!0}=this.getProps(),i=t.target,a=i!==e&&Xc(i);n&&r&&!a&&this.start(t)}),n,r=()=>{let{dragConstraints:t}=this.getProps();Xf(t)&&t.current&&(this.constraints=this.resolveRefConstraints(),n||=Lp(e,t.current,()=>this.scalePositionWithinConstraints()))},{projection:i}=this.visualElement,a=i.addEventListener(`measure`,r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),N.read(r);let o=wd(window,`resize`,()=>this.scalePositionWithinConstraints()),s=i.addEventListener(`didUpdate`,(({delta:e,hasLayoutChanged:t})=>{this.isDragging&&t&&(pd(t=>{let n=this.getAxisMotionValue(t);n&&(this.originPoint[t]+=e[t].translate,n.set(n.get()+e[t].translate))}),this.visualElement.render())}));return()=>{o(),t(),a(),s&&s(),n&&n()}}getProps(){let e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:i=!1,dragElastic:a=Ap,dragMomentum:o=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:i,dragElastic:a,dragMomentum:o}}};function Ip(e){let t=!0;return()=>{if(t){t=!1;return}e()}}function Lp(e,t,n){let r=_l(e,Ip(n)),i=_l(t,Ip(n));return()=>{r(),i()}}function Rp(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function zp(e,t=10){let n=null;return Math.abs(e.y)>t?n=`y`:Math.abs(e.x)>t&&(n=`x`),n}var Bp=class extends Ll{constructor(e){super(e),this.removeGroupControls=ui,this.removeListeners=ui,this.controls=new Fp(e)}mount(){let{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||ui}update(){let{dragControls:e}=this.node.getProps(),{dragControls:t}=this.node.prevProps||{};e!==t&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}},Vp=e=>(t,n)=>{e&&N.update(()=>e(t,n),!1,!0)},Hp=class extends Ll{constructor(){super(...arguments),this.removePointerDownListener=ui}onPointerDown(e){this.session=new gp(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:fp(this.node)})}createPanHandlers(){let{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:Vp(e),onStart:Vp(t),onMove:Vp(n),onEnd:(e,t)=>{delete this.session,r&&N.postRender(()=>r(e,t))}}}mount(){this.removePointerDownListener=dp(this.node.current,`pointerdown`,e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}},Up=!1,Wp=class extends b.Component{componentDidMount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r}=this.props,{projection:i}=e;i&&(t.group&&t.group.add(i),n&&n.register&&r&&n.register(i),Up&&i.root.didUpdate(),i.addEventListener(`animationComplete`,()=>{this.safeToRemove()}),i.setOptions({...i.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),Ad.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){let{layoutDependency:t,visualElement:n,drag:r,isPresent:i}=this.props,{projection:a}=n;return a?(a.isPresent=i,e.layoutDependency!==t&&a.setOptions({...a.options,layoutDependency:t}),Up=!0,r||e.layoutDependency!==t||t===void 0||e.isPresent!==i?a.willUpdate():this.safeToRemove(),e.isPresent!==i&&(i?a.promote():a.relegate()||N.postRender(()=>{let e=a.getStack();(!e||!e.members.length)&&this.safeToRemove()})),null):null}componentDidUpdate(){let{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),Rc.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:r}=e;Up=!0,r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){let{safeToRemove:e}=this.props;e&&e()}render(){return null}};function Gp(e){let[t,n]=pf(),r=(0,b.useContext)(Qr);return(0,k.jsx)(Wp,{...e,layoutGroup:r,switchLayoutGroup:(0,b.useContext)(Yf),isPresent:t,safeToRemove:n})}var Kp={pan:{Feature:Hp},drag:{Feature:Bp,ProjectionNode:df,MeasureLayout:Gp}};function qp(e,t,n){let{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive(`whileHover`,n===`Start`);let i=r[`onHover`+n];i&&N.postRender(()=>i(t,lp(t)))}var Jp=class extends Ll{mount(){let{current:e}=this.node;e&&(this.unmount=Gc(e,(e,t)=>(qp(this.node,t,`Start`),e=>qp(this.node,e,`End`))))}unmount(){}},Yp=class extends Ll{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(`:focus-visible`)}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!1),this.isActive=!1)}mount(){this.unmount=fi(wd(this.node.current,`focus`,()=>this.onFocus()),wd(this.node.current,`blur`,()=>this.onBlur()))}unmount(){}};function Xp(e,t,n){let{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive(`whileTap`,n===`Start`);let i=r[`onTap`+(n===`End`?``:n)];i&&N.postRender(()=>i(t,lp(t)))}var Zp=class extends Ll{mount(){let{current:e}=this.node;if(!e)return;let{globalTapTarget:t,propagate:n}=this.node.props;this.unmount=nl(e,(e,t)=>(Xp(this.node,t,`Start`),(e,{success:t})=>Xp(this.node,e,t?`End`:`Cancel`)),{useGlobalTarget:t,stopPropagation:n?.tap===!1})}unmount(){}},Qp=new WeakMap,$p=new WeakMap,em=e=>{let t=Qp.get(e.target);t&&t(e)},tm=e=>{e.forEach(em)};function nm({root:e,...t}){let n=e||document;$p.has(n)||$p.set(n,{});let r=$p.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(tm,{root:e,...t})),r[i]}function rm(e,t,n){let r=nm(t);return Qp.set(e,n),r.observe(e),()=>{Qp.delete(e),r.unobserve(e)}}var im={some:0,all:1},am=class extends Ll{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();let{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:r=`some`,once:i}=e,a={root:t?t.current:void 0,rootMargin:n,threshold:typeof r==`number`?r:im[r]};return rm(this.node.current,a,e=>{let{isIntersecting:t}=e;if(this.isInView===t||(this.isInView=t,i&&!t&&this.hasEnteredView))return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive(`whileInView`,t);let{onViewportEnter:n,onViewportLeave:r}=this.node.getProps(),a=t?n:r;a&&a(e)})}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>`u`)return;let{props:e,prevProps:t}=this.node;[`amount`,`margin`,`root`].some(om(e,t))&&this.startObserver()}unmount(){}};function om({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}var sm={inView:{Feature:am},tap:{Feature:Zp},focus:{Feature:Yp},hover:{Feature:Jp}},cm={layout:{ProjectionNode:df,MeasureLayout:Gp}},lm=ip({...cp,...sm,...Kp,...cm},ap),um={some:0,all:1};function dm(e,t,{root:n,margin:r,amount:i=`some`}={}){let a=Fc(e),o=new WeakMap,s=new IntersectionObserver(e=>{e.forEach(e=>{let n=o.get(e.target);if(e.isIntersecting!==!!n)if(e.isIntersecting){let n=t(e.target,e);typeof n==`function`?o.set(e.target,n):s.unobserve(e.target)}else typeof n==`function`&&(n(e),o.delete(e.target))})},{root:n,rootMargin:r,threshold:typeof i==`number`?i:um[i]});return a.forEach(e=>s.observe(e)),()=>s.disconnect()}function fm(e,{root:t,margin:n,amount:r,once:i=!1,initial:a=!1}={}){let[o,s]=(0,b.useState)(a);return(0,b.useEffect)(()=>{if(!e.current||i&&o)return;let a=()=>(s(!0),i?void 0:()=>s(!1)),c={root:t&&t.current||void 0,margin:n,amount:r};return dm(e.current,a,c)},[t,e,n,i,r]),o}var pm=`
/* ── CSS variables ── */
:root {
  --bg: #060914;
  --bg-1: #0a0f1e;
  --bg-2: #0d1428;
  --border: rgba(255,255,255,0.06);
  --border-hover: rgba(99,102,241,0.5);
  --text-1: #f1f5f9;
  --text-2: #94a3b8;
  --text-3: #475569;
  --accent: #6366f1;
  --accent-light: #818cf8;
  --purple: #a855f7;
  --cyan: #22d3ee;
  --green: #4ade80;
  --gradient: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
}

[data-theme="light"] {
  --bg: #f8fafc;
  --bg-1: #f1f5f9;
  --bg-2: #e2e8f0;
  --border: rgba(0,0,0,0.06);
  --border-hover: rgba(99,102,241,0.5);
  --text-1: #0f172a;
  --text-2: #475569;
  --text-3: #94a3b8;
}

/* ── Base ── */
.home {
  background: var(--bg);
  color: var(--text-1);
  min-height: 100vh;
  transition: background 0.3s ease, color 0.3s ease;
}

/* ── Keyframes ── */
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

@keyframes pulse-dot {
  0%, 100% { box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.4); }
  50% { box-shadow: 0 0 0 6px rgba(74, 222, 128, 0); }
}

@keyframes orb-float-1 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(40px, -60px) scale(1.08); }
}

@keyframes orb-float-2 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(-50px, 40px) scale(0.95); }
}

/* ── Shared section wrapper ── */
.section {
  padding: 6rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 3.5rem;
}

.section-heading {
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.15;
  background: linear-gradient(135deg, var(--text-1) 0%, var(--text-2) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0 0 1rem 0;
}

.section-sub {
  color: var(--text-2);
  font-size: 1.05rem;
  max-width: 620px;
  margin: 0 auto;
  line-height: 1.7;
}

/* ── Hero ── */
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 0 2rem;
  padding-top: 80px;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(99,102,241,0.15) 1px, transparent 1px);
  background-size: 32px 32px;
  pointer-events: none;
  z-index: 0;
}

[data-theme="light"] .hero-bg {
  background-image: radial-gradient(rgba(99,102,241,0.08) 1px, transparent 1px);
}

.hero-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
  z-index: 0;
}

.hero-orb-1 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(99,102,241,0.22) 0%, transparent 70%);
  top: -100px;
  left: -150px;
  animation: orb-float-1 18s ease-in-out infinite;
}

.hero-orb-2 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(168,85,247,0.18) 0%, transparent 70%);
  bottom: 0;
  right: -100px;
  animation: orb-float-2 22s ease-in-out infinite;
}

.hero-inner {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

/* ── Hero text ── */
.hero-text {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.available-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  background: rgba(74, 222, 128, 0.08);
  border: 1px solid rgba(74, 222, 128, 0.25);
  color: #4ade80;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.4rem 1rem;
  border-radius: 999px;
  letter-spacing: 0.04em;
  width: fit-content;
  font-family: 'JetBrains Mono', monospace;
}

[data-theme="light"] .available-badge {
  background: rgba(74,222,128,0.06);
  border-color: rgba(74,222,128,0.3);
}

.status-dot {
  width: 8px;
  height: 8px;
  background: #4ade80;
  border-radius: 50%;
  animation: pulse-dot 2s ease-in-out infinite;
  flex-shrink: 0;
}

.hero-h1 {
  font-size: clamp(2.8rem, 6vw, 5rem);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.04em;
  margin: 0;
  background: linear-gradient(135deg, #f1f5f9 0%, #94a3b8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

[data-theme="light"] .hero-h1 {
  background: linear-gradient(135deg, #0f172a 0%, #334155 100%);
  -webkit-background-clip: text;
  background-clip: text;
}

.hero-role {
  display: flex;
  align-items: center;
  gap: 0;
  font-family: 'JetBrains Mono', monospace;
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: #818cf8;
  min-height: 2rem;
}

.role-text {
  color: #818cf8;
}

.cursor {
  color: #6366f1;
  animation: blink 1s step-end infinite;
  font-weight: 400;
}

.hero-bio {
  color: var(--text-2);
  font-size: 1.05rem;
  line-height: 1.75;
  max-width: 480px;
  margin: 0;
}

.hero-cta {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 0.5rem;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
  color: #fff;
  border: none;
  padding: 0.85rem 1.75rem;
  border-radius: 10px;
  font-size: 0.95rem;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.25s ease;
  box-shadow: 0 8px 24px rgba(99,102,241,0.3);
  letter-spacing: 0.01em;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(99,102,241,0.45);
}

.btn-outline {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  color: var(--text-1);
  border: 1px solid var(--border-hover);
  padding: 0.85rem 1.75rem;
  border-radius: 10px;
  font-size: 0.95rem;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.25s ease;
  letter-spacing: 0.01em;
}

.btn-outline:hover {
  background: rgba(99,102,241,0.08);
  border-color: #6366f1;
  color: #818cf8;
}

/* ── Code window ── */
.hero-code {
  position: relative;
  z-index: 1;
}

.code-window {
  background: #0d1117;
  border-radius: 16px;
  box-shadow: 0 0 0 1px rgba(99,102,241,0.2), 0 24px 64px rgba(0,0,0,0.5);
  overflow: hidden;
  transform: rotate(1.5deg);
  transition: transform 0.3s ease;
}

.code-window:hover {
  transform: rotate(0deg);
}

.code-window-bar {
  background: #161b22;
  padding: 0.75rem 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border-bottom: 1px solid rgba(255,255,255,0.06);
}

.dots {
  display: flex;
  gap: 6px;
}

.dots span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.dots span:nth-child(1) { background: #ff5f57; }
.dots span:nth-child(2) { background: #febc2e; }
.dots span:nth-child(3) { background: #28c840; }

.code-window-title {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.8rem;
  color: #6b7280;
  margin-left: auto;
  margin-right: auto;
}

.code-body {
  padding: 1.5rem;
  margin: 0;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.82rem;
  line-height: 1.8;
  color: #e2e8f0;
  overflow: auto;
  background: transparent;
}

.code-kw { color: #569CD6; }
.code-str { color: #CE9178; }
.code-prop { color: #9CDCFE; }
.code-punct { color: #94a3b8; }
.code-val-t { color: #4EC9B0; }
.code-arr { color: #c586c0; }
.code-comment { color: #6A9955; font-style: italic; }
.code-num { color: #b5cea8; }
.code-email { color: #CE9178; }

/* ── Hero stats ── */
.hero-stats {
  position: relative;
  z-index: 1;
  display: flex;
  gap: 2.5rem;
  margin-top: 3.5rem;
  padding: 2rem 2.5rem;
  background: rgba(13, 20, 40, 0.6);
  backdrop-filter: blur(16px);
  border: 1px solid var(--border);
  border-radius: 16px;
  width: 100%;
  max-width: 1200px;
}

[data-theme="light"] .hero-stats {
  background: rgba(241, 245, 249, 0.8);
  border-color: rgba(0,0,0,0.08);
}

.stat-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  flex: 1;
}

.stat-item + .stat-item {
  border-left: 1px solid var(--border);
  padding-left: 2.5rem;
}

.stat-item strong {
  font-size: 2rem;
  font-weight: 800;
  background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.03em;
  line-height: 1;
}

.stat-item span {
  color: var(--text-2);
  font-size: 0.85rem;
  font-weight: 500;
}

/* ── Projects section ── */
.projects-section {
  background: var(--bg-1);
}

.projects-section-inner {
  padding: 6rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

/* Featured project */
.proj-featured {
  display: grid;
  grid-template-columns: 45% 55%;
  border-radius: 20px;
  border: 1px solid var(--border);
  background: var(--bg-2);
  overflow: hidden;
  margin-bottom: 2.5rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.proj-featured:hover {
  border-color: var(--border-hover);
  box-shadow: 0 20px 60px rgba(0,0,0,0.35);
}

.proj-featured-img {
  position: relative;
  overflow: hidden;
}

.proj-featured-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
}

.proj-featured:hover .proj-featured-img img {
  transform: scale(1.04);
}

.proj-featured-img::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(99,102,241,0.15) 0%, transparent 60%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.proj-featured:hover .proj-featured-img::after {
  opacity: 1;
}

.proj-featured-content {
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.25rem;
}

.proj-badge-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.proj-featured-badge {
  background: linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(168,85,247,0.15) 100%);
  border: 1px solid rgba(99,102,241,0.3);
  color: #818cf8;
  font-size: 0.72rem;
  font-weight: 700;
  padding: 0.3rem 0.8rem;
  border-radius: 999px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-family: 'JetBrains Mono', monospace;
}

.proj-year-badge {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  color: var(--text-3);
}

.proj-featured-content h3 {
  font-size: 1.9rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  margin: 0;
  color: var(--text-1);
  line-height: 1.2;
}

.proj-subtitle {
  font-size: 0.9rem;
  color: var(--text-2);
  margin: -0.5rem 0 0;
  font-style: italic;
}

.proj-featured-content p {
  color: var(--text-2);
  line-height: 1.7;
  font-size: 0.97rem;
  margin: 0;
}

.proj-tech-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-pill {
  background: rgba(99,102,241,0.08);
  border: 1px solid rgba(99,102,241,0.2);
  color: #818cf8;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.3rem 0.75rem;
  border-radius: 999px;
  font-family: 'JetBrains Mono', monospace;
  letter-spacing: 0.02em;
  transition: all 0.2s ease;
}

.tech-pill:hover {
  background: rgba(99,102,241,0.15);
  border-color: rgba(99,102,241,0.4);
}

[data-theme="light"] .tech-pill {
  background: rgba(99,102,241,0.06);
  color: #6366f1;
}

.proj-actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  align-items: center;
}

.btn-ghost {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: transparent;
  color: var(--text-2);
  border: 1px solid var(--border);
  padding: 0.6rem 1.1rem;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease;
}

.btn-ghost:hover {
  border-color: var(--border-hover);
  color: var(--text-1);
  background: rgba(99,102,241,0.06);
}

/* Project grid */
.proj-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
}

.proj-card {
  background: var(--bg-2);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
}

.proj-card:hover {
  border-color: var(--border-hover);
  transform: translateY(-6px);
  box-shadow: 0 16px 48px rgba(0,0,0,0.3);
}

.proj-card-img {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.proj-card-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}

.proj-card:hover .proj-card-img img {
  transform: scale(1.05);
}

.proj-card-year {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  background: rgba(6, 9, 20, 0.85);
  color: var(--text-2);
  font-size: 0.72rem;
  font-family: 'JetBrains Mono', monospace;
  padding: 0.25rem 0.6rem;
  border-radius: 999px;
  border: 1px solid var(--border);
  backdrop-filter: blur(8px);
}

[data-theme="light"] .proj-card-year {
  background: rgba(248, 250, 252, 0.9);
  color: var(--text-2);
}

.proj-card-body {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex: 1;
}

.proj-card-body h3 {
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin: 0;
  color: var(--text-1);
}

.proj-card-body .proj-subtitle {
  font-size: 0.82rem;
  color: var(--text-3);
  margin: -0.35rem 0 0;
  font-style: normal;
  font-weight: 500;
}

.proj-card-body p {
  color: var(--text-2);
  font-size: 0.9rem;
  line-height: 1.65;
  margin: 0;
  flex: 1;
}

/* ── Skills section ── */
.skills-section {
  background: var(--bg);
}

.skills-section-inner {
  padding: 6rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.skills-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
}

.skills-stack {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.skill-category {
  background: var(--bg-2);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 1.5rem;
  transition: border-color 0.2s ease;
}

.skill-category:hover {
  border-color: var(--border-hover);
}

.skill-category-header {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 1rem;
}

.skill-category-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}

.skill-category-label {
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-family: 'JetBrains Mono', monospace;
}

.skill-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-pill {
  background: rgba(255,255,255,0.04);
  border: 1px solid var(--border);
  color: var(--text-2);
  font-size: 0.8rem;
  font-weight: 500;
  padding: 0.35rem 0.8rem;
  border-radius: 999px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: 'Inter', sans-serif;
}

.skill-pill:hover {
  background: rgba(99,102,241,0.1);
  border-color: rgba(99,102,241,0.35);
  color: var(--text-1);
}

[data-theme="light"] .skill-pill {
  background: rgba(0,0,0,0.03);
  color: var(--text-2);
}

[data-theme="light"] .skill-pill:hover {
  background: rgba(99,102,241,0.06);
}

/* Terminal window */
.terminal-window {
  background: #0d1117;
  border-radius: 16px;
  box-shadow: 0 0 0 1px rgba(99,102,241,0.15), 0 20px 60px rgba(0,0,0,0.45);
  overflow: hidden;
  position: sticky;
  top: 6rem;
}

.terminal-bar {
  background: #161b22;
  padding: 0.75rem 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border-bottom: 1px solid rgba(255,255,255,0.06);
}

.terminal-title {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.78rem;
  color: #6b7280;
  margin: 0 auto;
}

.terminal-body {
  padding: 1.5rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.82rem;
  line-height: 2;
  color: #e2e8f0;
}

.t-prompt { color: #4ade80; }
.t-cmd { color: #818cf8; }
.t-out { color: #94a3b8; margin-left: 0.5rem; }
.t-highlight { color: #22d3ee; }
.t-string { color: #CE9178; }
.t-blank { display: block; height: 0.5rem; }

/* ── Skill modal ── */
.skill-overlay {
  position: fixed;
  inset: 0;
  background: rgba(6, 9, 20, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(8px);
  padding: 1.5rem;
}

[data-theme="light"] .skill-overlay {
  background: rgba(15, 23, 42, 0.7);
}

.skill-modal {
  background: var(--bg-2);
  border-radius: 20px;
  border: 1px solid var(--border-hover);
  padding: 2.5rem;
  max-width: 440px;
  width: 100%;
  box-shadow: 0 25px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(99,102,241,0.2);
  position: relative;
  text-align: center;
}

.skill-modal-icon {
  font-size: 3rem;
  margin-bottom: 0.75rem;
  display: block;
}

.skill-modal h3 {
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--text-1);
  margin: 0 0 0.5rem 0;
  letter-spacing: -0.03em;
}

.skill-modal p {
  color: var(--text-2);
  margin: 0 0 1.5rem 0;
  font-size: 0.95rem;
  line-height: 1.65;
}

.skill-details {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  text-align: left;
}

.skill-details li {
  padding: 0.75rem 1rem;
  border-radius: 10px;
  background: rgba(99,102,241,0.06);
  border: 1px solid rgba(99,102,241,0.15);
  color: var(--text-2);
  font-size: 0.9rem;
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
}

.skill-details li::before {
  content: '▸';
  color: #6366f1;
  flex-shrink: 0;
  margin-top: 0.05rem;
}

.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255,255,255,0.06);
  border: 1px solid var(--border);
  color: var(--text-2);
  font-size: 1.1rem;
  cursor: pointer;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  line-height: 1;
}

.close-btn:hover {
  background: rgba(99,102,241,0.15);
  color: var(--text-1);
  border-color: var(--border-hover);
}

/* ── Timeline ── */
.timeline-section {
  background: var(--bg-1);
}

.timeline-section-inner {
  padding: 6rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.timeline {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0;
  padding-left: 2.5rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, #6366f1 0%, #a855f7 50%, rgba(168,85,247,0.2) 100%);
  border-radius: 2px;
}

.timeline-item {
  position: relative;
  padding: 0 0 3rem 2rem;
}

.timeline-item:last-child {
  padding-bottom: 0;
}

.timeline-dot {
  position: absolute;
  left: -2.5rem;
  top: 0.35rem;
  width: 12px;
  height: 12px;
  background: linear-gradient(135deg, #6366f1, #a855f7);
  border-radius: 50%;
  border: 2px solid var(--bg-1);
  transform: translateX(-5px);
  box-shadow: 0 0 12px rgba(99,102,241,0.5);
}

.timeline-period {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.78rem;
  color: var(--cyan);
  letter-spacing: 0.05em;
  margin-bottom: 0.5rem;
}

.timeline-card {
  background: var(--bg-2);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 1.75rem;
  transition: border-color 0.25s ease;
}

.timeline-card:hover {
  border-color: var(--border-hover);
}

.timeline-role {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-1);
  letter-spacing: -0.02em;
  margin: 0 0 0.3rem 0;
}

.timeline-org {
  font-size: 0.9rem;
  color: #818cf8;
  font-weight: 600;
  margin: 0 0 1rem 0;
  font-family: 'JetBrains Mono', monospace;
}

.timeline-points {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.timeline-points li {
  color: var(--text-2);
  font-size: 0.9rem;
  line-height: 1.6;
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
}

.timeline-points li::before {
  content: '→';
  color: #6366f1;
  flex-shrink: 0;
  font-size: 0.85rem;
  margin-top: 0.1rem;
}

/* ── Resume section ── */
.resume-section {
  background: var(--bg);
}

.resume-section-inner {
  padding: 6rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.resume-card {
  background: var(--bg-2);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
  position: relative;
  overflow: hidden;
}

.resume-card::before {
  content: '';
  position: absolute;
  top: -60%;
  right: -20%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%);
  pointer-events: none;
}

.resume-left {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;
  z-index: 1;
}

.resume-left h2 {
  font-size: 2.2rem;
  font-weight: 800;
  letter-spacing: -0.04em;
  margin: 0;
  background: linear-gradient(135deg, var(--text-1) 0%, var(--text-2) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.resume-note {
  color: var(--text-2);
  font-size: 0.95rem;
  line-height: 1.7;
  margin: 0;
}

.resume-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.resume-tag {
  background: rgba(99,102,241,0.08);
  border: 1px solid rgba(99,102,241,0.2);
  color: #818cf8;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.35rem 0.85rem;
  border-radius: 999px;
  font-family: 'JetBrains Mono', monospace;
}

.resume-btns {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 0.5rem;
}

.resume-right {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  position: relative;
  z-index: 1;
}

.resume-highlight {
  background: rgba(99,102,241,0.04);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 1.25rem 1.5rem;
  transition: border-color 0.2s ease;
}

.resume-highlight:hover {
  border-color: var(--border-hover);
}

.resume-highlight h3 {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-1);
  margin: 0 0 0.75rem 0;
  letter-spacing: -0.01em;
}

.resume-highlight ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.resume-highlight li {
  color: var(--text-2);
  font-size: 0.88rem;
  line-height: 1.6;
  padding-left: 1rem;
  position: relative;
}

.resume-highlight li::before {
  content: '·';
  position: absolute;
  left: 0;
  color: #6366f1;
  font-weight: 700;
}

/* ── Contact section ── */
.contact-section {
  background: var(--bg-1);
}

.contact-section-inner {
  padding: 6rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.contact-heading {
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1.1;
  margin: 0 0 1.25rem 0;
  background: linear-gradient(135deg, #f1f5f9 0%, #94a3b8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

[data-theme="light"] .contact-heading {
  background: linear-gradient(135deg, #0f172a 0%, #475569 100%);
  -webkit-background-clip: text;
  background-clip: text;
}

.contact-sub {
  color: var(--text-2);
  font-size: 1.05rem;
  max-width: 560px;
  margin: 0 auto 2.5rem;
  line-height: 1.75;
}

.contact-cta-row {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 4rem;
}

.contact-channels {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1.25rem;
  text-align: left;
}

.contact-channel {
  background: var(--bg-2);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  transition: border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
  text-decoration: none;
}

.contact-channel:hover {
  border-color: var(--border-hover);
  transform: translateY(-4px);
  box-shadow: 0 12px 36px rgba(0,0,0,0.25);
}

.contact-channel-icon {
  width: 40px;
  height: 40px;
  background: rgba(99,102,241,0.1);
  border: 1px solid rgba(99,102,241,0.2);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.contact-channel-icon svg {
  width: 20px;
  height: 20px;
  fill: #818cf8;
}

.contact-channel-title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-1);
  margin: 0;
}

.contact-channel-desc {
  font-size: 0.85rem;
  color: var(--text-2);
  line-height: 1.6;
  margin: 0;
  flex: 1;
}

.contact-channel-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.82rem;
  font-weight: 600;
  color: #818cf8;
  font-family: 'JetBrains Mono', monospace;
  letter-spacing: 0.02em;
  transition: color 0.2s ease;
}

.contact-channel:hover .contact-channel-link {
  color: #6366f1;
}

.contact-note {
  margin-top: 3rem;
  color: var(--text-3);
  font-size: 0.875rem;
}

/* ── Responsive ── */
@media (max-width: 900px) {
  .hero-inner {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }
  .hero-text {
    align-items: center;
  }
  .hero-bio {
    max-width: 100%;
    text-align: left;
  }
  .hero-cta {
    justify-content: center;
  }
  .code-window {
    transform: none;
    max-width: 480px;
    margin: 0 auto;
  }
  .hero-stats {
    flex-direction: column;
    gap: 1.5rem;
    padding: 1.5rem;
  }
  .stat-item + .stat-item {
    border-left: none;
    border-top: 1px solid var(--border);
    padding-left: 0;
    padding-top: 1.5rem;
  }
  .proj-featured {
    grid-template-columns: 1fr;
  }
  .proj-featured-img {
    height: 240px;
  }
  .skills-layout {
    grid-template-columns: 1fr;
  }
  .terminal-window {
    position: static;
  }
  .resume-card {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 2rem;
  }
  .resume-left h2 {
    text-align: center;
  }
  .resume-tags {
    justify-content: center;
  }
  .resume-btns {
    justify-content: center;
  }
}

@media (max-width: 600px) {
  .section {
    padding: 4rem 1.25rem;
  }
  .projects-section-inner,
  .skills-section-inner,
  .timeline-section-inner,
  .resume-section-inner,
  .contact-section-inner {
    padding: 4rem 1.25rem;
  }
  .proj-grid {
    grid-template-columns: 1fr;
  }
  .contact-channels {
    grid-template-columns: 1fr;
  }
}
`;function mm(e,t=80,n=2e3){let[r,i]=(0,b.useState)(0),[a,o]=(0,b.useState)(0),[s,c]=(0,b.useState)(!1);return(0,b.useEffect)(()=>{let l=e[r],u;return!s&&a<l.length?u=setTimeout(()=>o(e=>e+1),t):!s&&a===l.length?u=setTimeout(()=>c(!0),n):s&&a>0?u=setTimeout(()=>o(e=>e-1),t/2):(c(!1),i(t=>(t+1)%e.length)),()=>clearTimeout(u)},[a,s,r,e,t,n]),e[r].slice(0,a)}function hm({value:e,suffix:t=``}){let n=(0,b.useRef)(null),r=fm(n,{once:!0}),[i,a]=(0,b.useState)(0);return(0,b.useEffect)(()=>{if(!r)return;let t=0,n=Math.ceil(e/40),i=setInterval(()=>{t+=n,t>=e?(a(e),clearInterval(i)):a(t)},40);return()=>clearInterval(i)},[r,e]),(0,k.jsxs)(`span`,{ref:n,children:[i,t]})}function gm({children:e}){return(0,k.jsxs)(`div`,{style:{display:`inline-flex`,alignItems:`center`,gap:`0.5rem`,color:`#22d3ee`,fontSize:`0.75rem`,fontWeight:600,letterSpacing:`0.15em`,textTransform:`uppercase`,marginBottom:`1rem`,fontFamily:`'JetBrains Mono', monospace`},children:[(0,k.jsx)(`span`,{style:{width:20,height:1,background:`#22d3ee`,display:`inline-block`}}),e,(0,k.jsx)(`span`,{style:{width:20,height:1,background:`#22d3ee`,display:`inline-block`}})]})}var _m={hidden:{opacity:0,y:24},visible:(e=0)=>({opacity:1,y:0,transition:{duration:.55,delay:e*.08,ease:[.25,.1,.25,1]}})},vm=[`Software Developer`,`React Engineer`,`CS Student @ Rowan`,`Problem Solver`,`UI/UX Enthusiast`],ym=[{category:`Languages`,color:`#6366f1`,items:[`JavaScript`,`TypeScript`,`Java`,`Python`,`C#`,`HTML`,`CSS`]},{category:`Frameworks & Libraries`,color:`#a855f7`,items:[`React`,`Vite`,`.NET`,`Framer Motion`]},{category:`Tools & Platforms`,color:`#22d3ee`,items:[`Git`,`GitHub`,`Firebase`,`Netlify`,`VS Code`]},{category:`Concepts`,color:`#4ade80`,items:[`REST APIs`,`Responsive Design`,`Accessibility`,`Game Dev`,`UI/UX`,`Agile`]}],bm=[{value:5,suffix:`+`,label:`Projects Shipped`},{value:3,suffix:``,label:`Years Coding`},{value:100,suffix:`%`,label:`TypeScript Coverage`}],xm=[{period:`2024 – Present`,role:`Software Engineering Student`,org:`Rowan University CS Dept`,points:[`Built React prototypes for campus research initiatives`,`Introduced component libraries cutting delivery time by 30%`,`Collaborated with faculty on accessible UI patterns`]},{period:`2023 – 2024`,role:`Freelance Full-Stack Developer`,org:`Self-employed`,points:[`Architected Firebase web apps with real-time data`,`Shipped ReelQuest, a production fishing game to Firebase hosting`,`Managed CI/CD pipelines with Netlify and GitHub Actions`]},{period:`2022 – Present`,role:`B.S. Computer Science`,org:`Rowan University`,points:[`Core coursework: algorithms, software engineering, UX design`,`Led peer coding sessions focused on React and game logic`,`Active in hackathons and open-source contributions`]}],Sm=[{title:`What I Focus On`,points:[`Building responsive React interfaces with polished UX`,`Designing reusable component systems and style guides`,`Collaborating with cross-functional teammates using Git workflows`]},{title:`Recent Wins`,points:[`Launched interactive games (Wordle, Snake, Tic Tac Toe) in React + TypeScript`,`Shipped ReelQuest, a Firebase-backed fishing experience`,`Migrated portfolio from CRA to Vite with full TypeScript coverage`]}],Cm=[`React 19`,`TypeScript`,`Firebase`,`REST APIs`,`UI/UX`],wm=[{id:`frontend`,icon:`⚛️`,title:`Frontend`,summary:`Responsive Design, Testing and Debugging, Accessibility, Cross-Browser Development`,details:[`Responsive design systems for any device`,`Testing and debugging workflows`,`Accessibility-focused development`,`Cross-browser compatibility assurance`]},{id:`languages`,icon:`🔧`,title:`Languages & Frameworks`,summary:`Java, JavaScript, TypeScript, C#, HTML, CSS, Python, React, .NET, Vite`,details:[`Java and C# for strongly typed applications`,`JavaScript/TypeScript and React for interactive UIs`,`Python for scripting and prototyping`,`HTML, CSS, Vite, and .NET for full-stack delivery`]},{id:`skills`,icon:`⚙️`,title:`Skills`,summary:`Git, Problem Solving, Communication, Creativity, Adaptability, UX/UI Knowledge`,details:[`Version control best practices with Git`,`Collaborative communication across teams`,`Creative approaches to complex problems`,`UX/UI-aware implementation and iteration`]},{id:`education`,icon:`🎓`,title:`Education`,summary:`Computer Science at Rowan University`,details:[`Computer Science studies at Rowan University`,`Hands-on projects in software development`,`Continuous learning across emerging technologies`]}],Tm=()=>(0,k.jsx)(`svg`,{viewBox:`0 0 24 24`,xmlns:`http://www.w3.org/2000/svg`,children:(0,k.jsx)(`path`,{d:`M12 .5C5.73.5.76 5.48.76 11.74c0 4.9 3.16 9.05 7.55 10.52.55.1.75-.24.75-.53 0-.26-.01-1.12-.02-2.03-3.07.67-3.72-1.47-3.72-1.47-.5-1.27-1.22-1.61-1.22-1.61-.99-.68.08-.66.08-.66 1.1.08 1.68 1.13 1.68 1.13.97 1.66 2.54 1.18 3.15.9.1-.7.38-1.18.69-1.45-2.45-.28-5.02-1.23-5.02-5.48 0-1.21.43-2.2 1.13-2.98-.11-.28-.49-1.4.11-2.92 0 0 .92-.3 3.02 1.13A10.5 10.5 0 0112 6.8c.93.004 1.86.13 2.73.38 2.1-1.42 3.02-1.13 3.02-1.13.6 1.52.22 2.64.11 2.92.7.78 1.13 1.77 1.13 2.98 0 4.26-2.58 5.2-5.04 5.48.39.34.73 1.01.73 2.03 0 1.47-.01 2.66-.01 3.02 0 .29.2.64.76.53 4.39-1.47 7.55-5.62 7.55-10.52C23.24 5.48 18.27.5 12 .5z`})}),Em=()=>(0,k.jsx)(`svg`,{viewBox:`0 0 24 24`,xmlns:`http://www.w3.org/2000/svg`,children:(0,k.jsx)(`path`,{d:`M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z`})}),Dm=()=>(0,k.jsx)(`svg`,{viewBox:`0 0 24 24`,xmlns:`http://www.w3.org/2000/svg`,children:(0,k.jsx)(`path`,{d:`M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z`})}),Om=()=>(0,k.jsx)(`svg`,{viewBox:`0 0 24 24`,xmlns:`http://www.w3.org/2000/svg`,children:(0,k.jsx)(`path`,{d:`M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z`})}),km=()=>(0,k.jsx)(`svg`,{width:`12`,height:`12`,viewBox:`0 0 12 12`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,k.jsx)(`path`,{d:`M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})}),Am=[{title:`Email Me`,desc:`Pitch a project or product idea and we can collaborate on a roadmap.`,action:`mattwoods301@gmail.com`,href:`mailto:mattwoods301@gmail.com`,Icon:Dm},{title:`LinkedIn`,desc:`Follow my journey, explore posts, and see what I am currently learning.`,action:`matthew-woods-18b52526b`,href:`https://www.linkedin.com/in/matthew-woods-18b52526b`,Icon:Em},{title:`GitHub`,desc:`Browse repos for games, UI experiments, and full-stack prototypes.`,action:`Mwoods30`,href:`https://github.com/Mwoods30`,Icon:Tm},{title:`LeetCode`,desc:`Check out my latest problem-solving stats and patterns.`,action:`Mattwoods301`,href:`https://leetcode.com/Mattwoods301/`,Icon:Om}];function jm(){let e=ut(),t=mm(vm),[n,r]=(0,b.useState)(null),i=[{id:`reelquest`,title:`ReelQuest`,subtitle:`Full-stack fishing game`,img:`/ReelQuest.png`,desc:`A Firebase-backed fishing game with multiple levels, real-time leaderboards, and API integration. Built with React and deployed to production.`,primaryButton:{text:`Live Demo`,href:`https://reelquest-fishing.web.app`,external:!0},githubHref:`https://github.com/Mwoods30`,tech:[`React`,`Firebase`,`JavaScript`,`CSS`,`REST API`],year:`2025`,featured:!0},{id:`portfolio`,title:`This Portfolio`,subtitle:`Personal portfolio website`,img:`/website.png`,desc:`Built from scratch with Vite, React 19, TypeScript, and framer-motion. Migrated from CRA, added React Router, dark/light mode, and full TypeScript coverage.`,primaryButton:{text:`View Source`,href:`https://github.com/Mwoods30/Portfolio`,external:!0},githubHref:`https://github.com/Mwoods30/Portfolio`,tech:[`React`,`TypeScript`,`Vite`,`framer-motion`],year:`2024–25`,featured:!1},{id:`wordle`,title:`Wordle Lab`,subtitle:`Word game with live API`,img:`/wordle.png`,desc:`A Wordle clone with real-time word validation via API, puzzle numbering, and elegant color-coded feedback.`,primaryButton:{text:`Play Now`,onClick:()=>e(`/wordle`),external:!1},githubHref:`https://github.com/Mwoods30/Portfolio`,tech:[`React`,`TypeScript`,`REST API`],year:`2024–25`,featured:!1},{id:`snake`,title:`Snake`,subtitle:`Canvas-based game`,img:`/snake.png`,desc:`Classic Snake built on the HTML5 Canvas API with touch support and smooth controls.`,primaryButton:{text:`Play Now`,onClick:()=>e(`/snake`),external:!1},githubHref:`https://github.com/Mwoods30/Portfolio`,tech:[`React`,`Canvas API`,`TypeScript`],year:`2023–24`,featured:!1},{id:`tictactoe`,title:`Tic Tac Toe`,subtitle:`AI-powered strategy game`,img:`/tictactoeimg.png`,desc:`Play against a friend or challenge a minimax AI. Smart blocking, winning detection, and clean UI.`,primaryButton:{text:`Play Now`,onClick:()=>e(`/tictactoe`),external:!1},githubHref:`https://github.com/Mwoods30/Portfolio`,tech:[`React`,`TypeScript`,`AI Logic`],year:`2023–24`,featured:!1}],a=i.find(e=>e.featured),o=i.filter(e=>!e.featured);(0,b.useEffect)(()=>{if(!n)return;let e=e=>{e.key===`Escape`&&r(null)},t=document.body.style.overflow;return document.body.style.overflow=`hidden`,window.addEventListener(`keydown`,e),()=>{window.removeEventListener(`keydown`,e),document.body.style.overflow=t}},[n]);let s=e=>{document.getElementById(e)?.scrollIntoView({behavior:`smooth`,block:`start`})};return(0,k.jsxs)(`div`,{className:`home`,children:[(0,k.jsxs)(qr,{children:[(0,k.jsx)(`title`,{children:`Matthew Woods | Portfolio`}),(0,k.jsx)(`meta`,{name:`description`,content:`Matthew Woods — Software Developer & CS student at Rowan University. Building React apps, games, and interactive experiences.`})]}),(0,k.jsx)(`style`,{children:pm}),(0,k.jsxs)(`section`,{id:`home`,className:`hero-section`,children:[(0,k.jsx)(`div`,{className:`hero-bg`}),(0,k.jsx)(`div`,{className:`hero-orb hero-orb-1`}),(0,k.jsx)(`div`,{className:`hero-orb hero-orb-2`}),(0,k.jsxs)(`div`,{className:`hero-inner`,children:[(0,k.jsxs)(lm.div,{className:`hero-text`,initial:`hidden`,animate:`visible`,variants:{hidden:{},visible:{transition:{staggerChildren:.1}}},children:[(0,k.jsx)(lm.div,{variants:_m,children:(0,k.jsxs)(`div`,{className:`available-badge`,children:[(0,k.jsx)(`span`,{className:`status-dot`}),`Available for opportunities`]})}),(0,k.jsxs)(lm.h1,{className:`hero-h1`,variants:_m,custom:1,children:[`Matthew`,(0,k.jsx)(`br`,{}),`Woods`]}),(0,k.jsxs)(lm.div,{className:`hero-role`,variants:_m,custom:2,children:[(0,k.jsx)(`span`,{className:`role-text`,children:t}),(0,k.jsx)(`span`,{className:`cursor`,children:`|`})]}),(0,k.jsx)(lm.p,{className:`hero-bio`,variants:_m,custom:3,children:`I build responsive web applications and interactive experiences with React, TypeScript, and Firebase. CS student at Rowan University — passionate about clean architecture, accessible design, and delightful UX.`}),(0,k.jsxs)(lm.div,{className:`hero-cta`,variants:_m,custom:4,children:[(0,k.jsx)(`button`,{className:`btn-primary`,onClick:()=>s(`portfolio`),children:`View Projects`}),(0,k.jsx)(`button`,{className:`btn-outline`,onClick:()=>s(`contact`),children:`Get in Touch`})]})]}),(0,k.jsx)(lm.div,{className:`hero-code`,initial:{opacity:0,x:40},animate:{opacity:1,x:0},transition:{duration:.7,delay:.3,ease:[.25,.1,.25,1]},children:(0,k.jsxs)(`div`,{className:`code-window`,children:[(0,k.jsxs)(`div`,{className:`code-window-bar`,children:[(0,k.jsxs)(`div`,{className:`dots`,children:[(0,k.jsx)(`span`,{}),(0,k.jsx)(`span`,{}),(0,k.jsx)(`span`,{})]}),(0,k.jsx)(`span`,{className:`code-window-title`,children:`developer.ts`})]}),(0,k.jsx)(`pre`,{className:`code-body`,children:(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(`span`,{className:`code-kw`,children:`const`}),` `,(0,k.jsx)(`span`,{className:`code-prop`,children:`developer`}),` `,(0,k.jsxs)(`span`,{className:`code-punct`,children:[`= `,`{`]}),`
`,(0,k.jsx)(`span`,{className:`code-prop`,children:`  name`}),(0,k.jsx)(`span`,{className:`code-punct`,children:`:`}),` `,(0,k.jsx)(`span`,{className:`code-str`,children:`"Matthew Woods"`}),(0,k.jsx)(`span`,{className:`code-punct`,children:`,`}),`
`,(0,k.jsx)(`span`,{className:`code-prop`,children:`  role`}),(0,k.jsx)(`span`,{className:`code-punct`,children:`:`}),` `,(0,k.jsx)(`span`,{className:`code-str`,children:`"Software Developer"`}),(0,k.jsx)(`span`,{className:`code-punct`,children:`,`}),`
`,(0,k.jsx)(`span`,{className:`code-prop`,children:`  stack`}),(0,k.jsx)(`span`,{className:`code-punct`,children:`:`}),` `,(0,k.jsx)(`span`,{className:`code-arr`,children:`[`}),(0,k.jsx)(`span`,{className:`code-str`,children:`"React"`}),(0,k.jsx)(`span`,{className:`code-punct`,children:`,`}),` `,(0,k.jsx)(`span`,{className:`code-str`,children:`"TypeScript"`}),(0,k.jsx)(`span`,{className:`code-punct`,children:`,`}),` `,(0,k.jsx)(`span`,{className:`code-str`,children:`"Firebase"`}),(0,k.jsx)(`span`,{className:`code-arr`,children:`]`}),(0,k.jsx)(`span`,{className:`code-punct`,children:`,`}),`
`,(0,k.jsx)(`span`,{className:`code-prop`,children:`  university`}),(0,k.jsx)(`span`,{className:`code-punct`,children:`:`}),` `,(0,k.jsx)(`span`,{className:`code-str`,children:`"Rowan University"`}),(0,k.jsx)(`span`,{className:`code-punct`,children:`,`}),`
`,(0,k.jsx)(`span`,{className:`code-prop`,children:`  available`}),(0,k.jsx)(`span`,{className:`code-punct`,children:`:`}),` `,(0,k.jsx)(`span`,{className:`code-val-t`,children:`true`}),(0,k.jsx)(`span`,{className:`code-punct`,children:`,`}),`
`,(0,k.jsx)(`span`,{className:`code-prop`,children:`  contact`}),(0,k.jsx)(`span`,{className:`code-punct`,children:`:`}),` `,(0,k.jsx)(`span`,{className:`code-email`,children:`"mattwoods301@gmail.com"`}),(0,k.jsx)(`span`,{className:`code-punct`,children:`,`}),`
`,(0,k.jsx)(`span`,{className:`code-punct`,children:`}`}),(0,k.jsx)(`span`,{className:`code-punct`,children:`;`}),`
`,`
`,(0,k.jsx)(`span`,{className:`code-comment`,children:`// Currently: building cool things`}),`
`,(0,k.jsx)(`span`,{className:`code-kw`,children:`export`}),` `,(0,k.jsx)(`span`,{className:`code-kw`,children:`default`}),` `,(0,k.jsx)(`span`,{className:`code-prop`,children:`developer`}),(0,k.jsx)(`span`,{className:`code-punct`,children:`;`})]})})]})})]}),(0,k.jsx)(lm.div,{className:`hero-stats`,initial:{opacity:0,y:24},animate:{opacity:1,y:0},transition:{duration:.6,delay:.7,ease:[.25,.1,.25,1]},children:bm.map((e,t)=>(0,k.jsxs)(`div`,{className:`stat-item`,children:[(0,k.jsx)(`strong`,{children:(0,k.jsx)(hm,{value:e.value,suffix:e.suffix})}),(0,k.jsx)(`span`,{children:e.label})]},e.label))})]}),(0,k.jsx)(`section`,{id:`portfolio`,className:`projects-section`,children:(0,k.jsxs)(`div`,{className:`projects-section-inner`,children:[(0,k.jsxs)(lm.div,{className:`section-header`,initial:`hidden`,whileInView:`visible`,viewport:{once:!0},variants:_m,children:[(0,k.jsx)(gm,{children:`My Work`}),(0,k.jsx)(`h2`,{className:`section-heading`,children:`Featured Projects`}),(0,k.jsx)(`p`,{className:`section-sub`,children:`A collection of interfaces, games, and full-stack apps built to challenge myself and create delightful user experiences.`})]}),(0,k.jsxs)(lm.div,{className:`proj-featured`,initial:`hidden`,whileInView:`visible`,viewport:{once:!0},variants:_m,children:[(0,k.jsx)(`div`,{className:`proj-featured-img`,children:(0,k.jsx)(`img`,{src:a.img,alt:a.title})}),(0,k.jsxs)(`div`,{className:`proj-featured-content`,children:[(0,k.jsxs)(`div`,{className:`proj-badge-row`,children:[(0,k.jsx)(`span`,{className:`proj-featured-badge`,children:`Featured`}),(0,k.jsx)(`span`,{className:`proj-year-badge`,children:a.year})]}),(0,k.jsxs)(`div`,{children:[(0,k.jsx)(`h3`,{children:a.title}),(0,k.jsx)(`p`,{className:`proj-subtitle`,children:a.subtitle})]}),(0,k.jsx)(`p`,{children:a.desc}),(0,k.jsx)(`div`,{className:`proj-tech-row`,children:a.tech.map(e=>(0,k.jsx)(`span`,{className:`tech-pill`,children:e},e))}),(0,k.jsxs)(`div`,{className:`proj-actions`,children:[(0,k.jsx)(`a`,{href:a.primaryButton.href,target:`_blank`,rel:`noopener noreferrer`,className:`btn-primary`,children:a.primaryButton.text}),(0,k.jsxs)(`a`,{href:a.githubHref,target:`_blank`,rel:`noopener noreferrer`,className:`btn-ghost`,children:[(0,k.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`currentColor`,children:(0,k.jsx)(`path`,{d:`M12 .5C5.73.5.76 5.48.76 11.74c0 4.9 3.16 9.05 7.55 10.52.55.1.75-.24.75-.53 0-.26-.01-1.12-.02-2.03-3.07.67-3.72-1.47-3.72-1.47-.5-1.27-1.22-1.61-1.22-1.61-.99-.68.08-.66.08-.66 1.1.08 1.68 1.13 1.68 1.13.97 1.66 2.54 1.18 3.15.9.1-.7.38-1.18.69-1.45-2.45-.28-5.02-1.23-5.02-5.48 0-1.21.43-2.2 1.13-2.98-.11-.28-.49-1.4.11-2.92 0 0 .92-.3 3.02 1.13A10.5 10.5 0 0112 6.8c.93.004 1.86.13 2.73.38 2.1-1.42 3.02-1.13 3.02-1.13.6 1.52.22 2.64.11 2.92.7.78 1.13 1.77 1.13 2.98 0 4.26-2.58 5.2-5.04 5.48.39.34.73 1.01.73 2.03 0 1.47-.01 2.66-.01 3.02 0 .29.2.64.76.53 4.39-1.47 7.55-5.62 7.55-10.52C23.24 5.48 18.27.5 12 .5z`})}),`GitHub`]})]})]})]}),(0,k.jsx)(`div`,{className:`proj-grid`,children:o.map((e,t)=>(0,k.jsxs)(lm.div,{className:`proj-card`,custom:t%3,initial:`hidden`,whileInView:`visible`,viewport:{once:!0},variants:_m,children:[(0,k.jsxs)(`div`,{className:`proj-card-img`,children:[(0,k.jsx)(`img`,{src:e.img,alt:e.title}),(0,k.jsx)(`span`,{className:`proj-card-year`,children:e.year})]}),(0,k.jsxs)(`div`,{className:`proj-card-body`,children:[(0,k.jsx)(`h3`,{children:e.title}),(0,k.jsx)(`p`,{className:`proj-subtitle`,children:e.subtitle}),(0,k.jsx)(`p`,{children:e.desc}),(0,k.jsx)(`div`,{className:`proj-tech-row`,children:e.tech.map(e=>(0,k.jsx)(`span`,{className:`tech-pill`,children:e},e))}),(0,k.jsxs)(`div`,{className:`proj-actions`,style:{marginTop:`0.5rem`},children:[e.primaryButton.external?(0,k.jsx)(`a`,{href:e.primaryButton.href,target:`_blank`,rel:`noopener noreferrer`,className:`btn-primary`,style:{fontSize:`0.85rem`,padding:`0.6rem 1.2rem`},children:e.primaryButton.text}):(0,k.jsx)(`button`,{className:`btn-primary`,onClick:e.primaryButton.onClick,style:{fontSize:`0.85rem`,padding:`0.6rem 1.2rem`},children:e.primaryButton.text}),(0,k.jsxs)(`a`,{href:e.githubHref,target:`_blank`,rel:`noopener noreferrer`,className:`btn-ghost`,style:{fontSize:`0.85rem`,padding:`0.6rem 1rem`},children:[(0,k.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`currentColor`,children:(0,k.jsx)(`path`,{d:`M12 .5C5.73.5.76 5.48.76 11.74c0 4.9 3.16 9.05 7.55 10.52.55.1.75-.24.75-.53 0-.26-.01-1.12-.02-2.03-3.07.67-3.72-1.47-3.72-1.47-.5-1.27-1.22-1.61-1.22-1.61-.99-.68.08-.66.08-.66 1.1.08 1.68 1.13 1.68 1.13.97 1.66 2.54 1.18 3.15.9.1-.7.38-1.18.69-1.45-2.45-.28-5.02-1.23-5.02-5.48 0-1.21.43-2.2 1.13-2.98-.11-.28-.49-1.4.11-2.92 0 0 .92-.3 3.02 1.13A10.5 10.5 0 0112 6.8c.93.004 1.86.13 2.73.38 2.1-1.42 3.02-1.13 3.02-1.13.6 1.52.22 2.64.11 2.92.7.78 1.13 1.77 1.13 2.98 0 4.26-2.58 5.2-5.04 5.48.39.34.73 1.01.73 2.03 0 1.47-.01 2.66-.01 3.02 0 .29.2.64.76.53 4.39-1.47 7.55-5.62 7.55-10.52C23.24 5.48 18.27.5 12 .5z`})}),`GitHub`]})]})]})]},e.id))})]})}),(0,k.jsx)(`section`,{id:`skills`,className:`skills-section`,children:(0,k.jsxs)(`div`,{className:`skills-section-inner`,children:[(0,k.jsxs)(lm.div,{className:`section-header`,initial:`hidden`,whileInView:`visible`,viewport:{once:!0},variants:_m,children:[(0,k.jsx)(gm,{children:`Skills`}),(0,k.jsx)(`h2`,{className:`section-heading`,children:`Tech Stack`}),(0,k.jsx)(`p`,{className:`section-sub`,children:`From component-driven frontends to resilient backends — I focus on delivering experiences that are accessible, maintainable, and a pleasure to use. Click any card for details.`})]}),(0,k.jsxs)(`div`,{className:`skills-layout`,children:[(0,k.jsxs)(`div`,{className:`skills-stack`,children:[ym.map((e,t)=>(0,k.jsxs)(lm.div,{className:`skill-category`,custom:t,initial:`hidden`,whileInView:`visible`,viewport:{once:!0},variants:_m,children:[(0,k.jsxs)(`div`,{className:`skill-category-header`,children:[(0,k.jsx)(`span`,{className:`skill-category-dot`,style:{background:e.color}}),(0,k.jsx)(`span`,{className:`skill-category-label`,style:{color:e.color},children:e.category})]}),(0,k.jsx)(`div`,{className:`skill-pills`,children:e.items.map(e=>(0,k.jsx)(`span`,{className:`skill-pill`,children:e},e))})]},e.category)),(0,k.jsxs)(lm.div,{initial:`hidden`,whileInView:`visible`,viewport:{once:!0},variants:_m,custom:4,children:[(0,k.jsx)(`p`,{style:{color:`var(--text-3)`,fontSize:`0.8rem`,marginBottom:`0.75rem`,fontFamily:`'JetBrains Mono', monospace`,letterSpacing:`0.04em`},children:`// Click to explore details`}),(0,k.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:`0.75rem`},children:wm.map(e=>(0,k.jsxs)(`button`,{onClick:()=>r(e),style:{background:`var(--bg-2)`,border:`1px solid var(--border)`,borderRadius:`12px`,padding:`1rem`,cursor:`pointer`,textAlign:`left`,transition:`all 0.2s ease`,fontFamily:`'Inter', sans-serif`},onMouseEnter:e=>{e.currentTarget.style.borderColor=`rgba(99,102,241,0.5)`,e.currentTarget.style.transform=`translateY(-2px)`},onMouseLeave:e=>{e.currentTarget.style.borderColor=`var(--border)`,e.currentTarget.style.transform=`translateY(0)`},children:[(0,k.jsx)(`div`,{style:{fontSize:`1.6rem`,marginBottom:`0.35rem`},children:e.icon}),(0,k.jsx)(`div`,{style:{fontSize:`0.85rem`,fontWeight:700,color:`var(--text-1)`,marginBottom:`0.25rem`},children:e.title}),(0,k.jsxs)(`div`,{style:{fontSize:`0.72rem`,color:`var(--text-3)`,lineHeight:1.5},children:[e.summary.split(`,`)[0].trim(),`…`]})]},e.id))})]})]}),(0,k.jsx)(lm.div,{initial:`hidden`,whileInView:`visible`,viewport:{once:!0},variants:_m,custom:2,children:(0,k.jsxs)(`div`,{className:`terminal-window`,children:[(0,k.jsxs)(`div`,{className:`terminal-bar`,children:[(0,k.jsxs)(`div`,{className:`dots`,children:[(0,k.jsx)(`span`,{}),(0,k.jsx)(`span`,{}),(0,k.jsx)(`span`,{})]}),(0,k.jsx)(`span`,{className:`terminal-title`,children:`terminal`})]}),(0,k.jsxs)(`div`,{className:`terminal-body`,children:[(0,k.jsxs)(`div`,{children:[(0,k.jsx)(`span`,{className:`t-prompt`,children:`~`}),` `,(0,k.jsx)(`span`,{className:`t-cmd`,children:`whoami`})]}),(0,k.jsxs)(`div`,{className:`t-out`,children:[(0,k.jsx)(`span`,{className:`t-highlight`,children:`Matthew Woods`}),` `,`— Software Developer`]}),(0,k.jsx)(`span`,{className:`t-blank`}),(0,k.jsxs)(`div`,{children:[(0,k.jsx)(`span`,{className:`t-prompt`,children:`~`}),` `,(0,k.jsx)(`span`,{className:`t-cmd`,children:`cat skills.json`})]}),(0,k.jsx)(`div`,{className:`t-out`,children:`{`}),(0,k.jsxs)(`div`,{className:`t-out`,children:[`  `,(0,k.jsx)(`span`,{className:`t-highlight`,children:`"frontend"`}),`: `,(0,k.jsx)(`span`,{className:`t-string`,children:`["React", "TypeScript", "Vite"]`}),`,`]}),(0,k.jsxs)(`div`,{className:`t-out`,children:[`  `,(0,k.jsx)(`span`,{className:`t-highlight`,children:`"backend"`}),`: `,(0,k.jsx)(`span`,{className:`t-string`,children:`["Firebase", "REST APIs"]`}),`,`]}),(0,k.jsxs)(`div`,{className:`t-out`,children:[`  `,(0,k.jsx)(`span`,{className:`t-highlight`,children:`"languages"`}),`: `,(0,k.jsx)(`span`,{className:`t-string`,children:`["JS", "TS", "Java", "Python", "C#"]`})]}),(0,k.jsx)(`div`,{className:`t-out`,children:`}`}),(0,k.jsx)(`span`,{className:`t-blank`}),(0,k.jsxs)(`div`,{children:[(0,k.jsx)(`span`,{className:`t-prompt`,children:`~`}),` `,(0,k.jsx)(`span`,{className:`t-cmd`,children:`git log --oneline -3`})]}),(0,k.jsxs)(`div`,{className:`t-out`,children:[(0,k.jsx)(`span`,{style:{color:`#f59e0b`},children:`a41c282`}),` `,`Migrate portfolio to Vite + TypeScript`]}),(0,k.jsxs)(`div`,{className:`t-out`,children:[(0,k.jsx)(`span`,{style:{color:`#f59e0b`},children:`e7f3b12`}),` `,`Add framer-motion scroll animations`]}),(0,k.jsxs)(`div`,{className:`t-out`,children:[(0,k.jsx)(`span`,{style:{color:`#f59e0b`},children:`45d1a49`}),` `,`Ship ReelQuest to Firebase hosting`]}),(0,k.jsx)(`span`,{className:`t-blank`}),(0,k.jsxs)(`div`,{children:[(0,k.jsx)(`span`,{className:`t-prompt`,children:`~`}),` `,(0,k.jsx)(`span`,{className:`t-cmd`,children:`npm run build`})]}),(0,k.jsxs)(`div`,{className:`t-out`,children:[(0,k.jsx)(`span`,{className:`t-highlight`,children:`✓`}),` `,`Build complete in `,(0,k.jsx)(`span`,{style:{color:`#f59e0b`},children:`1.4s`})]}),(0,k.jsxs)(`div`,{className:`t-out`,children:[(0,k.jsx)(`span`,{className:`t-highlight`,children:`✓`}),` `,`0 TypeScript errors`]}),(0,k.jsx)(`span`,{className:`t-blank`}),(0,k.jsxs)(`div`,{children:[(0,k.jsx)(`span`,{className:`t-prompt`,children:`~`}),` `,(0,k.jsx)(`span`,{className:`t-cmd`,style:{animation:`blink 1s step-end infinite`},children:`_`})]})]})]})})]})]})}),n&&(0,k.jsx)(lm.div,{className:`skill-overlay`,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`skill-modal-${n.id}`,onClick:()=>r(null),initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:(0,k.jsxs)(lm.div,{className:`skill-modal`,onClick:e=>e.stopPropagation(),initial:{opacity:0,scale:.9,y:20},animate:{opacity:1,scale:1,y:0},transition:{duration:.28},children:[(0,k.jsx)(`button`,{type:`button`,className:`close-btn`,onClick:()=>r(null),"aria-label":`Close`,children:`✕`}),(0,k.jsx)(`span`,{className:`skill-modal-icon`,children:n.icon}),(0,k.jsx)(`h3`,{id:`skill-modal-${n.id}`,children:n.title}),(0,k.jsx)(`p`,{children:n.summary}),(0,k.jsx)(`ul`,{className:`skill-details`,children:n.details.map(e=>(0,k.jsx)(`li`,{children:e},e))})]})}),(0,k.jsx)(`section`,{id:`journey`,className:`timeline-section`,children:(0,k.jsxs)(`div`,{className:`timeline-section-inner`,children:[(0,k.jsxs)(lm.div,{className:`section-header`,initial:`hidden`,whileInView:`visible`,viewport:{once:!0},variants:_m,children:[(0,k.jsx)(gm,{children:`Journey`}),(0,k.jsx)(`h2`,{className:`section-heading`,children:`Experience & Education`}),(0,k.jsx)(`p`,{className:`section-sub`,children:`Highlights from freelance work, research, and the coursework that shaped my engineering mindset.`})]}),(0,k.jsx)(`div`,{className:`timeline`,children:xm.map((e,t)=>(0,k.jsxs)(lm.div,{className:`timeline-item`,custom:t,initial:`hidden`,whileInView:`visible`,viewport:{once:!0},variants:_m,children:[(0,k.jsx)(`div`,{className:`timeline-dot`}),(0,k.jsx)(`div`,{className:`timeline-period`,children:e.period}),(0,k.jsxs)(`div`,{className:`timeline-card`,children:[(0,k.jsx)(`h3`,{className:`timeline-role`,children:e.role}),(0,k.jsx)(`p`,{className:`timeline-org`,children:e.org}),(0,k.jsx)(`ul`,{className:`timeline-points`,children:e.points.map(e=>(0,k.jsx)(`li`,{children:e},e))})]})]},e.role))})]})}),(0,k.jsx)(`section`,{id:`resume`,className:`resume-section`,children:(0,k.jsxs)(`div`,{className:`resume-section-inner`,children:[(0,k.jsx)(lm.div,{className:`section-header`,initial:`hidden`,whileInView:`visible`,viewport:{once:!0},variants:_m,children:(0,k.jsx)(gm,{children:`Resume`})}),(0,k.jsxs)(lm.div,{className:`resume-card`,initial:`hidden`,whileInView:`visible`,viewport:{once:!0},variants:_m,children:[(0,k.jsxs)(`div`,{className:`resume-left`,children:[(0,k.jsx)(`h2`,{children:`Download My Resume`}),(0,k.jsx)(`p`,{className:`resume-note`,children:`Explore the experience, coursework, and project delivery behind the work highlighted above. My resume dives deeper into leadership, collaboration, and the technical stack I apply every day.`}),(0,k.jsx)(`div`,{className:`resume-tags`,children:Cm.map(e=>(0,k.jsx)(`span`,{className:`resume-tag`,children:e},e))}),(0,k.jsxs)(`div`,{className:`resume-btns`,children:[(0,k.jsxs)(`a`,{href:`/MatthewWoodsResume.pdf`,className:`btn-primary`,target:`_blank`,rel:`noopener noreferrer`,children:[(0,k.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`currentColor`,style:{marginRight:2},children:(0,k.jsx)(`path`,{d:`M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z`})}),`Download PDF`]}),(0,k.jsx)(`a`,{href:`https://www.linkedin.com/in/matthew-woods-18b52526b`,className:`btn-outline`,target:`_blank`,rel:`noopener noreferrer`,children:`View LinkedIn`})]}),(0,k.jsx)(`p`,{style:{color:`var(--text-3)`,fontSize:`0.82rem`,marginTop:`0.5rem`,fontFamily:`'JetBrains Mono', monospace`},children:`// Open to full-time & internship roles`})]}),(0,k.jsx)(`div`,{className:`resume-right`,children:Sm.map(e=>(0,k.jsxs)(`div`,{className:`resume-highlight`,children:[(0,k.jsx)(`h3`,{children:e.title}),(0,k.jsx)(`ul`,{children:e.points.map(e=>(0,k.jsx)(`li`,{children:e},e))})]},e.title))})]})]})}),(0,k.jsx)(`section`,{id:`contact`,className:`contact-section`,children:(0,k.jsxs)(`div`,{className:`contact-section-inner`,children:[(0,k.jsxs)(lm.div,{initial:`hidden`,whileInView:`visible`,viewport:{once:!0},variants:_m,children:[(0,k.jsx)(gm,{children:`Contact`}),(0,k.jsx)(`h2`,{className:`contact-heading`,children:`Let's Work Together`}),(0,k.jsx)(`p`,{className:`contact-sub`,children:`Open to new opportunities, collaborations, and interesting problems. Whether it's a full-time role, freelance project, or just a chat — I'd love to connect.`}),(0,k.jsxs)(`div`,{className:`contact-cta-row`,children:[(0,k.jsx)(`a`,{href:`mailto:mattwoods301@gmail.com`,className:`btn-primary`,children:`Send an Email`}),(0,k.jsx)(`a`,{href:`https://www.linkedin.com/in/matthew-woods-18b52526b`,className:`btn-outline`,target:`_blank`,rel:`noopener noreferrer`,children:`Connect on LinkedIn`})]})]}),(0,k.jsx)(`div`,{className:`contact-channels`,children:Am.map((e,t)=>(0,k.jsxs)(lm.a,{href:e.href,target:e.href.startsWith(`http`)?`_blank`:void 0,rel:e.href.startsWith(`http`)?`noopener noreferrer`:void 0,className:`contact-channel`,custom:t%4,initial:`hidden`,whileInView:`visible`,viewport:{once:!0},variants:_m,children:[(0,k.jsx)(`div`,{className:`contact-channel-icon`,children:(0,k.jsx)(e.Icon,{})}),(0,k.jsx)(`p`,{className:`contact-channel-title`,children:e.title}),(0,k.jsx)(`p`,{className:`contact-channel-desc`,children:e.desc}),(0,k.jsxs)(`span`,{className:`contact-channel-link`,children:[e.action,` `,(0,k.jsx)(km,{})]})]},e.title))}),(0,k.jsx)(`p`,{className:`contact-note`,children:`Prefer a different platform? I'm always open to a quick intro call or async brainstorm.`})]})})]})}var Mm=[`apple`,`grape`,`lemon`,`peach`,`mango`,`berry`,`melon`,`plums`,`olive`,`spice`,`chair`,`table`,`plant`,`crane`,`flame`,`sugar`,`tiger`,`zebra`,`eagle`,`piano`],Nm=`https://words.dev-apis.com`,Pm=4500,Fm=3e3;async function Im({random:e=!1,signal:t}={}){let n=`${Nm}/word-of-the-day${e?`?random=1`:``}`,r=await fetch(n,{signal:t});if(!r.ok)throw Error(`Failed to fetch word: ${r.status}`);let i=await r.json();if(i?.word&&i.word.length===5)return{word:i.word.toLowerCase(),puzzleNumber:typeof i.puzzleNumber==`number`?i.puzzleNumber:null};throw Error(`API returned unexpected payload`)}async function Lm(e,{signal:t}={}){let n=await fetch(`${Nm}/validate-word`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({word:e}),signal:t});if(!n.ok)throw Error(`Validation failed: ${n.status}`);return!!(await n.json())?.validWord}var Rm=`
  :root {
    --primary: #fdfdfdff;
    --bg-dark: #050613;
    --bg-card: #11132b;
    --text-primary: #f7f9ff;
    --text-secondary: #a9adbd;
    --accent: #2248ef;
    --gradient: linear-gradient(135deg, #2248ef 0%, #59199a 100%);
  }

  [data-theme="light"] {
    --bg-dark: #f4f4ff;
    --bg-card: #e8e8f8;
    --text-primary: #111;
    --text-secondary: #555;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background: var(--bg-dark);
    color: var(--text-primary);
    line-height: 1.6;
    margin: 0;
  }

  .wordle-page {
    min-height: 100vh;
    padding: clamp(4rem, 6vw, 5rem) 1.5rem clamp(5rem, 7vw, 6rem);
    display: flex;
    justify-content: center;
    align-items: center;
    background: radial-gradient(circle at 20% 20%, rgba(89, 25, 154, 0.25), transparent 55%),
                radial-gradient(circle at 80% 0%, rgba(34, 72, 239, 0.2), transparent 60%),
                var(--bg-dark);
  }

  .wordle-card {
    width: min(680px, 94vw);
    background: rgba(17, 19, 43, 0.92);
    border-radius: 28px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: 0 32px 70px rgba(4, 6, 18, 0.55);
    padding: clamp(2.5rem, 6vw, 3rem);
    display: grid;
    gap: clamp(1.75rem, 4vw, 2.4rem);
    position: relative;
    overflow: hidden;
  }

  [data-theme="light"] .wordle-card {
    background: rgba(230, 230, 255, 0.95);
    border-color: rgba(0,0,0,0.08);
  }

  .wordle-content { position: relative; z-index: 1; display: grid; gap: clamp(1.5rem, 4vw, 2.2rem); }

  .wordle-header { display: grid; gap: 0.6rem; text-align: center; }

  .wordle-subtitle {
    text-transform: uppercase;
    letter-spacing: 0.25em;
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.5);
  }

  [data-theme="light"] .wordle-subtitle { color: rgba(0,0,0,0.4); }

  .wordle-title {
    margin: 0;
    font-size: clamp(2.3rem, 6vw, 3rem);
    font-weight: 700;
    background: var(--gradient);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    letter-spacing: -0.02em;
  }

  .wordle-description { margin: 0; color: var(--text-secondary); font-size: clamp(0.95rem, 2vw, 1.05rem); }

  .wordle-metrics { display: flex; flex-wrap: wrap; gap: 0.8rem; justify-content: center; }

  .wordle-chip {
    padding: 0.65rem 1.1rem;
    border-radius: 14px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(255, 255, 255, 0.04);
    color: var(--text-secondary);
    font-size: 0.9rem;
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
  }

  [data-theme="light"] .wordle-chip { background: rgba(180,180,255,0.2); border-color: rgba(0,0,0,0.1); }

  .wordle-chip strong { color: var(--text-primary); font-weight: 700; letter-spacing: 0.02em; }
  .wordle-chip.alert { background: rgba(249,115,22,0.12); border-color: rgba(249,115,22,0.35); color: #ffb469; }

  .wordle-grid { display: grid; gap: 0.8rem; justify-content: center; }
  .wordle-row { display: flex; gap: 0.8rem; }

  .wordle-square {
    width: clamp(52px, 9vw, 64px);
    aspect-ratio: 1 / 1;
    border-radius: 16px;
    border: 1px solid rgba(255,255,255,0.08);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: clamp(1.3rem, 4vw, 1.8rem);
    font-weight: 700;
    letter-spacing: 0.08em;
    color: var(--text-primary);
    text-transform: uppercase;
    background: rgba(255,255,255,0.05);
    transition: transform 0.22s ease, background 0.22s ease, border 0.22s ease;
  }

  .wordle-square.filled { transform: translateY(-2px); }
  .wordle-square.correct { background: linear-gradient(135deg,rgba(45,212,191,0.95),rgba(34,211,238,0.95)); border-color: rgba(34,211,238,0.55); color: #07131f; box-shadow: 0 18px 38px rgba(34,211,238,0.35); }
  .wordle-square.present { background: linear-gradient(135deg,rgba(250,204,21,0.92),rgba(249,115,22,0.95)); border-color: rgba(249,115,22,0.4); color: #211508; box-shadow: 0 16px 30px rgba(249,115,22,0.32); }
  .wordle-square.absent { background: rgba(255,255,255,0.05); border-color: rgba(255,255,255,0.05); color: rgba(255,255,255,0.45); }
  .wordle-square.typing { background: rgba(34,72,239,0.16); border-color: rgba(34,72,239,0.45); color: var(--text-primary); }
  .wordle-square.empty { background: rgba(255,255,255,0.02); border-color: rgba(255,255,255,0.04); color: rgba(255,255,255,0.25); }

  .wordle-message {
    padding: 0.9rem 1.2rem;
    border-radius: 16px;
    border: 1px solid rgba(255,255,255,0.08);
    background: rgba(255,255,255,0.04);
    text-align: center;
    font-size: 0.98rem;
    color: var(--text-secondary);
    min-height: 3.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .wordle-message.success { background: rgba(45,212,191,0.14); border-color: rgba(34,211,238,0.45); color: #7ff7e7; }
  .wordle-message.warning { background: rgba(249,115,22,0.12); border-color: rgba(249,115,22,0.4); color: #ffbb7d; }
  .wordle-message.danger { background: rgba(239,68,68,0.16); border-color: rgba(248,113,113,0.4); color: #ff9a9a; }
  .wordle-message.neutral { background: rgba(89,25,154,0.14); border-color: rgba(89,25,154,0.45); color: #c8a7ff; }

  .wordle-actions { display: flex; flex-wrap: wrap; gap: 0.75rem; justify-content: center; }

  .wordle-button {
    padding: 0.85rem 2.4rem;
    border-radius: 16px;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    font-family: inherit;
    transition: transform 0.22s ease, box-shadow 0.22s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
  }

  .wordle-button.primary { background: var(--gradient); color: white; box-shadow: 0 18px 40px rgba(34,72,239,0.32); }
  .wordle-button.primary:hover { transform: translateY(-2px); }
  .wordle-button.secondary { background: rgba(255,255,255,0.05); color: var(--text-primary); border: 1px solid rgba(255,255,255,0.18); }
  .wordle-button.secondary:hover { transform: translateY(-2px); border-color: rgba(34,72,239,0.45); }
  .wordle-button:disabled { opacity: 0.55; cursor: not-allowed; transform: none !important; box-shadow: none !important; }

  .wordle-guide { display: grid; gap: 0.75rem; text-align: center; }
  .wordle-guide-title { font-size: 0.9rem; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(255,255,255,0.55); }
  [data-theme="light"] .wordle-guide-title { color: rgba(0,0,0,0.45); }

  .wordle-instructions { display: grid; gap: 0.55rem; margin: 0; padding: 0; list-style: none; color: var(--text-secondary); font-size: 0.9rem; }
  .wordle-instructions li { display: inline-flex; justify-content: center; gap: 0.45rem; }
  .wordle-instructions li strong { color: var(--text-primary); font-weight: 600; }

  @media (max-width: 540px) {
    .wordle-page { padding-top: 3.5rem; padding-bottom: 4rem; }
    .wordle-row { gap: 0.6rem; }
    .wordle-square { border-radius: 14px; }
  }
`;function zm(){return Mm[Math.floor(Math.random()*Mm.length)]}function Bm(){let[e,t]=(0,b.useState)(()=>zm()),[n,r]=(0,b.useState)(()=>Array.from({length:6},()=>[,,,,,].fill(``))),[i,a]=(0,b.useState)(0),[o,s]=(0,b.useState)(0),[c,l]=(0,b.useState)(``),[u,d]=(0,b.useState)(!1),[f,p]=(0,b.useState)(!0),[m,h]=(0,b.useState)(!1),[g,_]=(0,b.useState)(`loading-daily`),[v,y]=(0,b.useState)(null),x=(0,b.useRef)(!0),S=ut();(0,b.useEffect)(()=>()=>{x.current=!1},[]);let C=(0,b.useCallback)(async(e=!1)=>{p(!0),_(e?`loading-random`:`loading-daily`);let n=new AbortController,r=window.setTimeout(()=>n.abort(),Pm);try{let i=await Im({random:e,signal:n.signal});if(!x.current){window.clearTimeout(r);return}t(i.word),y(i.puzzleNumber),_(e?`api-random`:`api-daily`),l(e?`New puzzle loaded - go again!`:``)}catch(e){if(!x.current){window.clearTimeout(r);return}t(zm()),y(null),_(`fallback`),l((e instanceof Error?e.name:``)===`AbortError`?`Wordle API timed out - using built-in word list.`:`Offline mode - using built-in word list.`)}finally{window.clearTimeout(r),x.current&&p(!1)}},[]);(0,b.useEffect)(()=>{C()},[C]);let ee=(0,b.useCallback)(e=>{u||f||m||o>=5||i>=6||(r(t=>{let n=t.map(e=>e.slice());return n[i][o]=e.toUpperCase(),n}),s(e=>Math.min(5,e+1)))},[m,o,u,f,i]),te=(0,b.useCallback)(()=>{o===0||u||f||m||(r(e=>{let t=e.map(e=>e.slice());return t[i][o-1]=``,t}),s(e=>Math.max(0,e-1)))},[m,o,u,f,i]),ne=(0,b.useCallback)(async()=>{if(u||f||m)return;if(o<5){l(`Not enough letters`);return}let t=n[i].join(``).toLowerCase(),r=!0;h(!0);let c=new AbortController,p=window.setTimeout(()=>c.abort(),Fm);try{if(r=await Lm(t,{signal:c.signal}),!r){l(`Not in Wordle dictionary - try another word.`);return}}catch(e){l((e instanceof Error?e.name:``)===`AbortError`?`Dictionary check timed out - continuing locally.`:`Dictionary offline - using local validation.`)}finally{window.clearTimeout(p),x.current&&h(!1)}if(!(!x.current||!r)){if(t===e){l(`Congratulations! You guessed it!`),d(!0);return}if(i===5){l(`Game Over - word was ${e.toUpperCase()}`),d(!0);return}a(e=>e+1),s(0),l(e=>e&&(e.includes(`Offline`)||e.includes(`Dictionary offline`))?e:``)}},[n,m,o,u,f,i,e]);(0,b.useEffect)(()=>{let e=e=>{u||f||m||(e.key===`Enter`?ne():e.key===`Backspace`?te():/^[a-zA-Z]$/.test(e.key)&&ee(e.key))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[m,u,ee,te,ne,f]);let re=(0,b.useCallback)(()=>{r(Array.from({length:6},()=>[,,,,,].fill(``))),a(0),s(0),l(``),d(!1),h(!1),C(!0)},[C]),w=t=>{let r=n[t];if(t<i||u&&t===i&&r.every(e=>e)){let t=e.split(``),n=[,,,,,].fill(`absent`),i=[,,,,,].fill(!1);for(let e=0;e<5;e++)r[e]?.toLowerCase()===t[e]&&(n[e]=`correct`,i[e]=!0);for(let e=0;e<5;e++){if(!r[e]||n[e]===`correct`)continue;let a=t.findIndex((t,n)=>t===r[e].toLowerCase()&&!i[n]);a!==-1&&(n[e]=`present`,i[a]=!0)}return n}return t===i?r.map(e=>e?`typing`:`empty`):[,,,,,].fill(`empty`)},T=u?i+1:i+(o>0?1:0),ie=Math.max(0,6-T),ae=n.flat().filter(Boolean).length,oe=f?`Fetching today's puzzle from the live Wordle API...`:m?`Checking your guess with the live dictionary...`:c||`Type letters on your keyboard to make a guess.`,se=f||m?`neutral`:c?c.includes(`Not enough`)||c.includes(`Not in Wordle`)||c.includes(`Offline`)||c.includes(`Dictionary`)||c.includes(`timed out`)?`warning`:c.includes(`Game Over`)?`danger`:c.includes(`Congratulations`)?`success`:`neutral`:`muted`,ce=(()=>{switch(g){case`api-daily`:return{label:`Source`,value:`Live daily API`,tone:``};case`api-random`:return{label:`Source`,value:`Live random API`,tone:``};case`loading-daily`:case`loading-random`:return{label:`Source`,value:`Loading...`,tone:``};case`fallback`:return{label:`Source`,value:`Offline fallback`,tone:`alert`};default:return{label:`Source`,value:`Local pool`,tone:``}}})();return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(`style`,{children:Rm}),(0,k.jsx)(`section`,{className:`wordle-page`,children:(0,k.jsx)(`div`,{className:`wordle-card`,children:(0,k.jsxs)(`div`,{className:`wordle-content`,children:[(0,k.jsxs)(`header`,{className:`wordle-header`,children:[(0,k.jsx)(`span`,{className:`wordle-subtitle`,children:`Daily Logic Drill`}),(0,k.jsx)(`h1`,{className:`wordle-title`,children:`Wordle Lab`}),(0,k.jsx)(`p`,{className:`wordle-description`,children:`Crack the five-letter code in six attempts. Read the color tells, refine your guess, and chase the perfect streak.`})]}),(0,k.jsxs)(`div`,{className:`wordle-metrics`,children:[(0,k.jsxs)(`div`,{className:`wordle-chip`,children:[(0,k.jsx)(`span`,{children:`Attempts`}),(0,k.jsx)(`strong`,{children:T}),(0,k.jsx)(`span`,{children:`/ 6`})]}),(0,k.jsxs)(`div`,{className:`wordle-chip${ie<=2?` alert`:``}`,children:[(0,k.jsx)(`span`,{children:`Remaining`}),(0,k.jsx)(`strong`,{children:ie})]}),(0,k.jsxs)(`div`,{className:`wordle-chip`,children:[(0,k.jsx)(`span`,{children:`Letters placed`}),(0,k.jsx)(`strong`,{children:ae})]}),typeof v==`number`&&(0,k.jsxs)(`div`,{className:`wordle-chip`,children:[(0,k.jsx)(`span`,{children:`Puzzle`}),(0,k.jsxs)(`strong`,{children:[`#`,v]})]}),(0,k.jsxs)(`div`,{className:`wordle-chip ${ce.tone}`,children:[(0,k.jsx)(`span`,{children:ce.label}),(0,k.jsx)(`strong`,{children:ce.value})]})]}),(0,k.jsx)(`div`,{className:`wordle-grid`,role:`grid`,"aria-label":`Wordle board`,children:n.map((e,t)=>{let n=w(t);return(0,k.jsx)(`div`,{className:`wordle-row`,role:`row`,children:e.map((e,r)=>(0,k.jsx)(`div`,{className:`wordle-square ${n[r]}${e?` filled`:``}`,role:`gridcell`,"aria-live":t===i?`polite`:`off`,"aria-label":e?`${e} ${n[r]}`:`empty slot`,children:e},`${t}-${r}`))},t)})}),(0,k.jsx)(`div`,{className:`wordle-message ${se}`,children:oe}),(0,k.jsxs)(`div`,{className:`wordle-actions`,children:[(0,k.jsx)(`button`,{type:`button`,onClick:re,className:`wordle-button primary`,disabled:f||m,children:`Restart`}),(0,k.jsx)(`button`,{type:`button`,className:`wordle-button secondary`,onClick:()=>S(`/tictactoe`),children:`Try Tic Tac Toe`}),(0,k.jsx)(`button`,{type:`button`,className:`wordle-button secondary`,onClick:()=>S(`/`),children:`← Portfolio`})]}),(0,k.jsxs)(`div`,{className:`wordle-guide`,children:[(0,k.jsx)(`span`,{className:`wordle-guide-title`,children:`How To Read It`}),(0,k.jsxs)(`ul`,{className:`wordle-instructions`,children:[(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Green`}),` letter is perfect - right spot, right letter.`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Amber`}),` means the letter exists, but needs a new position.`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Gray`}),` tells you to retire that letter from future guesses.`]}),(0,k.jsx)(`li`,{children:`Use Backspace to delete, then Enter to lock in your guess.`})]})]})]})})})]})}var Vm=400,Hm=20,Um=Vm/Hm,Wm=[{x:10,y:10}],Gm={x:0,y:0};function Km(e=[]){for(;;){let t={x:Math.floor(Math.random()*Um),y:Math.floor(Math.random()*Um)};if(!e.some(e=>e.x===t.x&&e.y===t.y))return t}}var qm=`
  :root {
    --primary: #fdfdfdff;
    --bg-dark: #0f0f23;
    --bg-card: #1a1a2e;
    --text-primary: #ffffff;
    --text-secondary: #a1a1aa;
    --gradient: linear-gradient(135deg, #2248efff 0%, #59199aff 100%);
    --glass: rgba(255, 243, 243, 0.1);
  }

  [data-theme="light"] {
    --bg-dark: #f4f4ff;
    --bg-card: #ebebff;
    --text-primary: #111;
    --text-secondary: #555;
    --glass: rgba(0,0,0,0.06);
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background: var(--bg-dark);
    color: var(--text-primary);
    line-height: 1.6;
    overflow-x: hidden;
    margin: 0;
  }

  .snake-page {
    min-height: 100vh;
    padding: clamp(4rem, 8vw, 6rem) 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--bg-dark);
  }

  .snake-card {
    width: min(460px, 92vw);
    background: var(--bg-card);
    border-radius: 24px;
    border: 1px solid var(--glass);
    box-shadow: 0 25px 65px rgba(0, 0, 0, 0.35);
    padding: clamp(2rem, 5vw, 2.75rem);
    display: grid;
    gap: 1.75rem;
    position: relative;
    overflow: hidden;
  }

  .snake-content {
    position: relative;
    z-index: 1;
    display: grid;
    gap: 1.75rem;
  }

  .snake-header {
    display: grid;
    gap: 0.4rem;
    text-align: center;
  }

  .snake-subtitle {
    text-transform: uppercase;
    letter-spacing: 0.24em;
    font-size: 0.75rem;
    color: var(--text-secondary);
  }

  .snake-title {
    font-size: clamp(2rem, 5vw, 2.8rem);
    margin: 0;
    font-weight: 700;
    background: var(--gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .snake-scoreboard {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    justify-content: center;
  }

  .snake-chip {
    padding: 0.55rem 1.2rem;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(255, 255, 255, 0.04);
    color: var(--text-secondary);
    font-size: 0.9rem;
    display: inline-flex;
    gap: 0.35rem;
    align-items: center;
  }

  .snake-chip strong { color: var(--text-primary); font-weight: 700; }

  .snake-chip.danger {
    color: #ff8a8a;
    border-color: rgba(255, 138, 138, 0.4);
    background: rgba(255, 68, 68, 0.08);
  }

  .snake-canvas-shell {
    background: rgba(15, 15, 35, 0.8);
    padding: 0.9rem;
    border-radius: 18px;
    border: 1px solid rgba(255, 255, 255, 0.06);
  }

  .snake-canvas {
    display: block;
    width: 100%;
    max-width: 400px;
    aspect-ratio: 1 / 1;
    background: rgba(8, 12, 30, 0.92);
    border-radius: 14px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    image-rendering: pixelated;
    touch-action: none;
  }

  .snake-status {
    text-align: center;
    color: var(--text-secondary);
    font-size: 0.95rem;
  }

  .snake-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    justify-content: center;
  }

  .snake-button {
    padding: 0.85rem 2.5rem;
    border-radius: 16px;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    font-family: inherit;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
  }

  .snake-button.primary {
    background: var(--gradient);
    color: white;
    box-shadow: 0 12px 30px rgba(34, 72, 239, 0.3);
  }

  .snake-button.primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 18px 38px rgba(34, 72, 239, 0.4);
  }

  .snake-button.back {
    background: transparent;
    color: var(--text-secondary);
    border: 1px solid rgba(255, 255, 255, 0.15);
  }

  .snake-button.back:hover {
    border-color: #667eea;
    color: var(--text-primary);
  }

  .snake-hint {
    text-align: center;
    color: var(--text-secondary);
    font-size: 0.85rem;
  }
`;function Jm(){let e=(0,b.useRef)(null),[t,n]=(0,b.useState)(Wm),[r,i]=(0,b.useState)(Gm),[a,o]=(0,b.useState)(()=>Km(Wm)),[s,c]=(0,b.useState)(0),[l,u]=(0,b.useState)(!0),d=ut();(0,b.useEffect)(()=>{let n=e.current;if(!n)return;let r=n.getContext(`2d`);r.clearRect(0,0,Vm,Vm),r.fillStyle=`rgba(255, 255, 255, 0.03)`,r.fillRect(0,0,Vm,Vm),r.strokeStyle=`rgba(255, 255, 255, 0.08)`;for(let e=0;e<=Um;e++)r.beginPath(),r.moveTo(e*Hm,0),r.lineTo(e*Hm,Vm),r.stroke(),r.beginPath(),r.moveTo(0,e*Hm),r.lineTo(Vm,e*Hm),r.stroke();r.fillStyle=`#6ee7b7`,t.forEach(e=>r.fillRect(e.x*Hm+2,e.y*Hm+2,Hm-4,Hm-4)),r.fillStyle=`#f97316`,r.fillRect(a.x*Hm+3,a.y*Hm+3,Hm-6,Hm-6)},[t,a]),(0,b.useEffect)(()=>{if(!l)return;let e=setInterval(()=>{n(e=>{let t={x:e[0].x+r.x,y:e[0].y+r.y},n=[t,...e];t.x===a.x&&t.y===a.y?(o(Km(n)),c(e=>e+1)):n.pop();let i=t.x<0||t.x>=Um||t.y<0||t.y>=Um,s=n.slice(1).some(e=>e.x===t.x&&e.y===t.y);return i||s?(u(!1),e):n})},100);return()=>clearInterval(e)},[r,a,l]),(0,b.useEffect)(()=>{let e=e=>{if([`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`].includes(e.key)&&e.preventDefault(),!l)return;let{x:t,y:n}=r;e.key===`ArrowUp`&&n!==1?i({x:0,y:-1}):e.key===`ArrowDown`&&n!==-1?i({x:0,y:1}):e.key===`ArrowLeft`&&t!==1?i({x:-1,y:0}):e.key===`ArrowRight`&&t!==-1&&i({x:1,y:0})};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[r,l]),(0,b.useEffect)(()=>{let t=e.current;if(!t)return;let n=0,a=0,o=e=>{n=e.touches[0].clientX,a=e.touches[0].clientY},s=e=>{if(!l)return;let t=e.touches[0].clientX-n,o=e.touches[0].clientY-a;Math.abs(t)>Math.abs(o)?t>0&&r.x!==-1?i({x:1,y:0}):t<0&&r.x!==1&&i({x:-1,y:0}):o>0&&r.y!==-1?i({x:0,y:1}):o<0&&r.y!==1&&i({x:0,y:-1}),e.preventDefault()};return t.addEventListener(`touchstart`,o,{passive:!0}),t.addEventListener(`touchmove`,s,{passive:!1}),()=>{t.removeEventListener(`touchstart`,o),t.removeEventListener(`touchmove`,s)}},[r,l]);let f=()=>{n(Wm),i(Gm),o(Km(Wm)),c(0),u(!0)};return(0,k.jsxs)(`div`,{className:`snake-page`,children:[(0,k.jsx)(`style`,{children:qm}),(0,k.jsx)(`div`,{className:`snake-card`,children:(0,k.jsxs)(`div`,{className:`snake-content`,children:[(0,k.jsxs)(`header`,{className:`snake-header`,children:[(0,k.jsx)(`span`,{className:`snake-subtitle`,children:`Retro Challenge`}),(0,k.jsx)(`h1`,{className:`snake-title`,children:`Snake`})]}),(0,k.jsxs)(`div`,{className:`snake-scoreboard`,children:[(0,k.jsxs)(`span`,{className:`snake-chip`,children:[`Score `,(0,k.jsx)(`strong`,{children:s})]}),(0,k.jsx)(`span`,{className:`snake-chip${l?``:` danger`}`,children:l?`Use arrow keys or swipe`:`Game over — try again!`})]}),(0,k.jsx)(`div`,{className:`snake-canvas-shell`,children:(0,k.jsx)(`canvas`,{ref:e,width:Vm,height:Vm,className:`snake-canvas`,"aria-label":`Snake game board`})}),(0,k.jsx)(`div`,{className:`snake-status`,children:l?`Collect the glowing squares and grow your streak.`:`Tap restart to jump back into the grid.`}),(0,k.jsxs)(`div`,{className:`snake-actions`,children:[(0,k.jsx)(`button`,{type:`button`,className:`snake-button primary`,onClick:f,children:`↻ Restart`}),(0,k.jsx)(`button`,{type:`button`,className:`snake-button back`,onClick:()=>d(`/`),children:`← Portfolio`})]}),(0,k.jsx)(`p`,{className:`snake-hint`,children:`Pro tip: avoid clipping the corners when you speed up!`})]})})]})}var Ym=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];function Xm(e){for(let[t,n,r]of Ym)if(e[t]&&e[t]===e[n]&&e[t]===e[r])return e[t];return null}function Zm(e){return e.map((e,t)=>e===``?t:null).filter(e=>e!==null)}function Qm(e){for(let[t,n,r]of Ym){let i=[e[t],e[n],e[r]];if(i.filter(e=>e===`O`).length===2&&i.includes(``))return[t,n,r][i.indexOf(``)]}for(let[t,n,r]of Ym){let i=[e[t],e[n],e[r]];if(i.filter(e=>e===`X`).length===2&&i.includes(``))return[t,n,r][i.indexOf(``)]}let t=Zm(e);return t.length===0?null:t[Math.floor(Math.random()*t.length)]}var $m=`
  :root {
    --primary: #fdfdfdff;
    --bg-dark: #0f0f23;
    --bg-card: #1a1a2e;
    --text-primary: #ffffff;
    --text-secondary: #a1a1aa;
    --gradient: linear-gradient(135deg, #2248efff 0%, #59199aff 100%);
    --glass: rgba(255, 243, 243, 0.1);
  }

  [data-theme="light"] {
    --bg-dark: #f4f4ff;
    --bg-card: #ebebff;
    --text-primary: #111;
    --text-secondary: #555;
    --glass: rgba(0,0,0,0.06);
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background: var(--bg-dark);
    color: var(--text-primary);
    line-height: 1.6;
    overflow-x: hidden;
    margin: 0;
  }

  .ttt-page {
    min-height: 100vh;
    padding: clamp(4rem, 8vw, 6rem) 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--bg-dark);
  }

  .ttt-card {
    width: min(500px, 94vw);
    background: var(--bg-card);
    border-radius: 26px;
    border: 1px solid var(--glass);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.35);
    padding: clamp(2.2rem, 5vw, 3rem);
    display: grid;
    gap: 1.75rem;
    position: relative;
    overflow: hidden;
  }

  .ttt-content {
    position: relative;
    z-index: 1;
    display: grid;
    gap: 1.75rem;
  }

  .ttt-header { text-align: center; display: grid; gap: 0.4rem; }

  .ttt-subtitle {
    text-transform: uppercase;
    letter-spacing: 0.24em;
    font-size: 0.78rem;
    color: var(--text-secondary);
  }

  .ttt-title {
    margin: 0;
    font-size: clamp(2.1rem, 5vw, 3rem);
    font-weight: 700;
    background: var(--gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .ttt-controls { display: grid; gap: 0.75rem; justify-items: center; }

  .ttt-label { color: var(--text-secondary); font-weight: 600; letter-spacing: 0.05em; }

  .ttt-mode-select {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.65rem 1rem;
    border-radius: 16px;
    background: rgba(20, 20, 45, 0.85);
    border: 1px solid rgba(255, 255, 255, 0.08);
  }

  [data-theme="light"] .ttt-mode-select {
    background: rgba(210, 210, 255, 0.8);
    border: 1px solid rgba(0,0,0,0.1);
  }

  .ttt-select {
    border: none;
    background: transparent;
    color: var(--text-primary);
    font-weight: 600;
    font-size: 0.95rem;
    cursor: pointer;
    appearance: none;
    padding-right: 1.5rem;
    font-family: inherit;
  }

  .ttt-board {
    display: grid;
    grid-template-columns: repeat(3, minmax(96px, 1fr));
    gap: 0.85rem;
    justify-items: center;
  }

  .ttt-cell {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: 18px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(15, 15, 35, 0.85);
    color: #6ee7b7;
    font-size: clamp(2.4rem, 8vw, 3.2rem);
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: transform 0.18s ease, border 0.18s ease, box-shadow 0.2s ease;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
    font-family: inherit;
  }

  [data-theme="light"] .ttt-cell {
    background: rgba(210, 210, 255, 0.7);
    border-color: rgba(0,0,0,0.08);
  }

  .ttt-cell:hover { transform: translateY(-4px); border-color: rgba(89, 25, 154, 0.55); box-shadow: 0 18px 28px rgba(34, 72, 239, 0.35); }
  .ttt-cell:disabled { cursor: not-allowed; opacity: 0.65; transform: none; box-shadow: none; }
  .ttt-cell.is-o { color: #fca5a5; }

  .ttt-status {
    text-align: center;
    padding: 0.9rem 1.2rem;
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(20, 20, 45, 0.85);
    font-size: 1.05rem;
    color: var(--text-secondary);
  }

  [data-theme="light"] .ttt-status { background: rgba(210,210,255,0.7); border-color: rgba(0,0,0,0.08); }

  .ttt-status.won { color: #6ee7b7; }
  .ttt-status.draw { color: #facc15; }

  .ttt-actions { display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap; }

  .ttt-button {
    padding: 0.85rem 2.4rem;
    border-radius: 16px;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    font-family: inherit;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
  }

  .ttt-button.primary {
    background: var(--gradient);
    color: white;
    box-shadow: 0 14px 30px rgba(34, 72, 239, 0.32);
  }

  .ttt-button.primary:hover { transform: translateY(-2px); box-shadow: 0 20px 40px rgba(34, 72, 239, 0.42); }

  .ttt-button.back {
    background: transparent;
    color: var(--text-secondary);
    border: 1px solid rgba(255, 255, 255, 0.15);
  }

  .ttt-button.back:hover { border-color: #667eea; color: var(--text-primary); }

  .ttt-helper { text-align: center; color: var(--text-secondary); font-size: 0.88rem; }

  @media (max-width: 520px) {
    .ttt-card { padding: 2rem 1.5rem; }
    .ttt-board { grid-template-columns: repeat(3, minmax(78px, 1fr)); gap: 0.7rem; }
    .ttt-actions { flex-direction: column; }
    .ttt-button { width: 100%; }
  }
`;function eh(){let[e,t]=(0,b.useState)(Array(9).fill(``)),[n,r]=(0,b.useState)(!0),[i,a]=(0,b.useState)(!0),[o,s]=(0,b.useState)(`It's X's turn`),[c,l]=(0,b.useState)(`friend`),u=ut(),d=Xm(e),f=!d&&e.every(e=>e);(0,b.useEffect)(()=>{if(d){s(`Player ${d} wins!`),i&&a(!1);return}if(f){s(`It's a draw!`),i&&a(!1);return}i&&s(`It's ${n?`X`:`O`}'s turn`)},[d,f,i,n]),(0,b.useEffect)(()=>{if(!i||n||c!==`computer`||d||f)return;let e=setTimeout(()=>{t(e=>{let t=Qm(e);if(t===null||e[t])return e;let n=e.slice();return n[t]=`O`,n}),r(!0)},450);return()=>clearTimeout(e)},[i,n,c,d,f]);let p=a=>{!i||e[a]||(t(e=>{if(e[a])return e;let t=e.slice();return t[a]=n?`X`:`O`,t}),r(e=>!e))},m=()=>{t(Array(9).fill(``)),r(!0),a(!0),s(`It's X's turn`)},h=e=>{l(e.target.value),t(Array(9).fill(``)),r(!0),a(!0),s(`It's X's turn`)},g=d?`won`:f?`draw`:`active`;return(0,k.jsxs)(`div`,{className:`ttt-page`,children:[(0,k.jsx)(`style`,{children:$m}),(0,k.jsx)(`div`,{className:`ttt-card`,children:(0,k.jsxs)(`div`,{className:`ttt-content`,children:[(0,k.jsxs)(`header`,{className:`ttt-header`,children:[(0,k.jsx)(`span`,{className:`ttt-subtitle`,children:`Strategy Duel`}),(0,k.jsx)(`h1`,{className:`ttt-title`,children:`Tic Tac Toe`})]}),(0,k.jsxs)(`div`,{className:`ttt-controls`,children:[(0,k.jsx)(`span`,{className:`ttt-label`,children:`Choose your opponent`}),(0,k.jsx)(`div`,{className:`ttt-mode-select`,children:(0,k.jsxs)(`select`,{className:`ttt-select`,value:c,onChange:h,"aria-label":`Select game mode`,children:[(0,k.jsx)(`option`,{value:`friend`,children:`Play with a friend`}),(0,k.jsx)(`option`,{value:`computer`,children:`Play against AI`})]})})]}),(0,k.jsx)(`div`,{className:`ttt-board`,role:`grid`,"aria-label":`Tic Tac Toe board`,children:e.map((e,t)=>(0,k.jsx)(`button`,{type:`button`,role:`gridcell`,className:`ttt-cell${e?` filled ${e===`X`?`is-x`:`is-o`}`:``}${!i||e?` disabled`:``}`,onClick:()=>p(t),disabled:!i||!!e,"aria-label":e?`Cell ${t+1} is ${e}`:`Choose cell ${t+1}`,children:e},t))}),(0,k.jsx)(`div`,{className:`ttt-status ${g}`,children:o}),(0,k.jsxs)(`div`,{className:`ttt-actions`,children:[(0,k.jsx)(`button`,{type:`button`,className:`ttt-button primary`,onClick:m,children:`↻ Restart Game`}),(0,k.jsx)(`button`,{type:`button`,className:`ttt-button back`,onClick:()=>u(`/`),children:`← Portfolio`})]}),(0,k.jsx)(`p`,{className:`ttt-helper`,children:`Tip: corners first for X, center first for O. Adapt and outsmart your rival.`})]})})]})}var th=`
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 0;
  transition: all 0.3s ease;
}

.nav.scrolled {
  background: rgba(6, 9, 20, 0.92);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border-bottom: 1px solid rgba(255,255,255,0.06);
  box-shadow: 0 4px 24px rgba(0,0,0,0.4);
}

[data-theme="light"] .nav.scrolled {
  background: rgba(248, 250, 252, 0.92);
  border-bottom: 1px solid rgba(0,0,0,0.06);
}

.nav-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.25rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-logo {
  font-size: 1.2rem;
  font-weight: 700;
  background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  cursor: pointer;
  letter-spacing: -0.02em;
  text-decoration: none;
  font-family: 'JetBrains Mono', monospace;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-link-btn {
  background: none;
  border: none;
  color: #94a3b8;
  font-size: 0.9rem;
  font-weight: 500;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  padding: 0.5rem 0.85rem;
  border-radius: 8px;
  transition: all 0.2s ease;
  position: relative;
  letter-spacing: 0.01em;
}

.nav-link-btn:hover {
  color: #f1f5f9;
  background: rgba(99,102,241,0.1);
}

[data-theme="light"] .nav-link-btn { color: #475569; }
[data-theme="light"] .nav-link-btn:hover { color: #0f172a; background: rgba(99,102,241,0.07); }

.nav-theme-btn {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  color: #94a3b8;
  font-size: 0.8rem;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  padding: 0.45rem 0.9rem;
  border-radius: 8px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-left: 0.5rem;
}

.nav-theme-btn:hover {
  border-color: rgba(99,102,241,0.5);
  color: #f1f5f9;
}

[data-theme="light"] .nav-theme-btn {
  background: rgba(0,0,0,0.04);
  border-color: rgba(0,0,0,0.1);
}

.nav-hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0.25rem;
}

.nav-bar {
  width: 22px;
  height: 2px;
  background: #94a3b8;
  border-radius: 2px;
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .nav-links { display: none; }
  .nav-links.open {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(6, 9, 20, 0.97);
    backdrop-filter: blur(24px);
    border-bottom: 1px solid rgba(255,255,255,0.06);
    padding: 1rem 0 1.5rem;
    gap: 0;
    align-items: stretch;
  }
  [data-theme="light"] .nav-links.open {
    background: rgba(248, 250, 252, 0.97);
  }
  .nav-link-btn {
    padding: 0.85rem 2rem;
    border-radius: 0;
    text-align: left;
    font-size: 1rem;
  }
  .nav-theme-btn { margin: 0.5rem 2rem 0; }
  .nav-hamburger { display: flex; }
}
`,nh=[{label:`Home`,section:`home`},{label:`Projects`,section:`portfolio`},{label:`Skills`,section:`skills`},{label:`Resume`,section:`resume`},{label:`Contact`,section:`contact`}];function rh(){let[e,t]=(0,b.useState)(!1),[n,r]=(0,b.useState)(!1),{theme:i,toggleTheme:a}=Zr(),o=ut(),s=st();(0,b.useEffect)(()=>{let e=()=>r(window.scrollY>20);return window.addEventListener(`scroll`,e,{passive:!0}),()=>window.removeEventListener(`scroll`,e)},[]);let c=e=>{t(!1),s.pathname===`/`?document.getElementById(e)?.scrollIntoView({behavior:`smooth`,block:`start`}):(o(`/`),setTimeout(()=>{document.getElementById(e)?.scrollIntoView({behavior:`smooth`,block:`start`})},100))};return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(`style`,{children:th}),(0,k.jsx)(`nav`,{className:`nav${n?` scrolled`:``}`,children:(0,k.jsxs)(`div`,{className:`nav-inner`,children:[(0,k.jsx)(`span`,{className:`nav-logo`,onClick:()=>o(`/`),children:`mw.dev`}),(0,k.jsxs)(`button`,{className:`nav-hamburger`,"aria-label":`Toggle menu`,"aria-expanded":e,onClick:()=>t(e=>!e),children:[(0,k.jsx)(`span`,{className:`nav-bar`}),(0,k.jsx)(`span`,{className:`nav-bar`}),(0,k.jsx)(`span`,{className:`nav-bar`})]}),(0,k.jsxs)(`ul`,{className:`nav-links${e?` open`:``}`,children:[nh.map(e=>(0,k.jsx)(`li`,{children:(0,k.jsx)(`button`,{className:`nav-link-btn`,onClick:()=>c(e.section),children:e.label})},e.label)),(0,k.jsx)(`li`,{children:(0,k.jsxs)(`button`,{className:`nav-theme-btn`,onClick:a,"aria-label":`Toggle color theme`,children:[i===`dark`?`☀️`:`🌙`,` `,i===`dark`?`Light`:`Dark`]})})]})]})})]})}var ih=`
:root {
  --primary: #fdfdfdff;
  --secondary: #3a158eff;
  --bg-dark: #0f0f23;
  --bg-card: #1a1a2e;
  --text-primary: #ffffff;
  --text-secondary: #a1a1aa;
  --gradient: linear-gradient(135deg, #2248efff 0%, #59199aff 100%);
  --glass: rgba(255, 243, 243, 0.1);
}

[data-theme="light"] {
  --bg-dark: #f0f0ff;
  --bg-card: #e8e8f8;
  --text-primary: #111;
  --text-secondary: #555;
  --glass: rgba(0, 0, 0, 0.06);
}

.footer::before,
.footer::after {
  content: '';
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.45;
  pointer-events: none;
  transform: translate(-50%, -50%);
}

.footer::before {
  width: 520px;
  height: 520px;
  background: rgba(34, 72, 239, 0.35);
  top: 10%;
  left: 12%;
}

.footer::after {
  width: 420px;
  height: 420px;
  background: rgba(89, 25, 154, 0.35);
  bottom: -5%;
  right: 10%;
  transform: translate(50%, 50%);
}

.footer {
  background: rgba(12, 12, 28, 0.95);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding: clamp(3rem, 6vw, 4.5rem) 2rem 2.5rem;
  margin-top: auto;
  position: relative;
  overflow: hidden;
}

[data-theme="light"] .footer {
  background: rgba(230, 230, 250, 0.97);
  border-top: 1px solid rgba(0, 0, 0, 0.08);
}

.footer-shell {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  gap: clamp(2.5rem, 5vw, 3.5rem);
  position: relative;
  z-index: 1;
}

.footer-brand {
  display: grid;
  gap: 1rem;
  max-width: 520px;
}

.footer-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1.25rem;
  border-radius: 999px;
  background: rgba(20, 20, 45, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: var(--text-secondary);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-size: 0.75rem;
}

.footer-title {
  margin: 0;
  font-size: clamp(2rem, 4vw, 2.7rem);
  font-weight: 700;
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
}

.footer-title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -12px;
  width: clamp(48px, 6vw, 72px);
  height: 3px;
  background: var(--gradient);
  border-radius: 999px;
}

.footer-tagline {
  color: var(--text-secondary);
  font-size: 1rem;
  line-height: 1.7;
}

.footer-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.footer-button {
  border: none;
  border-radius: 14px;
  padding: 0.75rem 1.8rem;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.footer-button.primary {
  background: var(--gradient);
  color: var(--text-primary);
  box-shadow: 0 14px 32px rgba(34, 72, 239, 0.25);
}

.footer-button.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 20px 40px rgba(34, 72, 239, 0.35);
}

.footer-button.secondary {
  background: rgba(20, 20, 45, 0.85);
  color: var(--text-secondary);
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.25);
}

.footer-button.secondary:hover {
  transform: translateY(-2px);
  border-color: var(--primary);
  color: var(--text-primary);
  box-shadow: 0 18px 36px rgba(34, 72, 239, 0.25);
}

.footer-insight {
  color: var(--text-secondary);
  font-size: 0.9rem;
  max-width: 420px;
  line-height: 1.6;
  display: grid;
  gap: 0.35rem;
}

.footer-columns {
  display: grid;
  gap: 2.5rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

.footer-column {
  display: grid;
  gap: 1rem;
}

.footer-column h3 {
  margin: 0;
  font-size: 1.05rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-primary);
}

.footer-link,
.footer-link-button {
  background: none;
  border: none;
  padding: 0;
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  cursor: pointer;
  transition: color 0.2s ease, transform 0.2s ease;
  font-family: inherit;
}

.footer-link:hover,
.footer-link-button:hover {
  color: var(--primary);
  transform: translateX(4px);
}

.footer-social {
  display: flex;
  gap: 1.1rem;
}

.footer-social a {
  width: 42px;
  height: 42px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: var(--text-secondary);
  border: 1px solid rgba(255, 255, 255, 0.12);
  transition: transform 0.2s ease, border 0.2s ease, box-shadow 0.2s ease;
}

.footer-social a:hover {
  color: var(--primary);
  border-color: var(--primary);
  transform: translateY(-3px);
  box-shadow: 0 14px 28px rgba(34, 72, 239, 0.25);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding-top: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  color: var(--text-secondary);
  font-size: 0.85rem;
}

.footer-bottom a {
  color: var(--text-secondary);
  text-decoration: none;
}

.footer-bottom a:hover {
  color: var(--primary);
}

@media (max-width: 768px) {
  .footer {
    padding: 3rem 1.5rem 2rem;
  }

  .footer-actions {
    width: 100%;
  }

  .footer-button {
    flex: 1 1 160px;
    justify-content: center;
  }

  .footer-social {
    justify-content: center;
  }

  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }
}
`,ah=[{label:`Projects`,target:`portfolio`},{label:`Skills`,target:`skills`},{label:`Journey`,target:`journey`},{label:`Resume`,target:`resume`},{label:`Contact`,target:`contact`}],oh=[{label:`Download Resume`,href:`/MatthewWoodsResume.pdf`},{label:`GitHub Portfolio`,href:`https://github.com/Mwoods30`},{label:`LinkedIn Profile`,href:`https://www.linkedin.com/in/matthew-woods-18b52526b`}],sh=[{href:`https://www.linkedin.com/in/matthew-woods-18b52526b`,label:`LinkedIn`,icon:(0,k.jsx)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 24 24`,fill:`currentColor`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`,children:(0,k.jsx)(`path`,{d:`M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.1 1 2.48 1s2.5 1.12 2.5 2.5zM0 8.98h5V24H0V8.98zM8.98 8.98h4.8v2.05h.07c.67-1.27 2.3-2.61 4.74-2.61 5.07 0 6 3.34 6 7.68V24h-5v-7.04c0-1.68-.03-3.84-2.34-3.84-2.34 0-2.7 1.83-2.7 3.72V24h-5V8.98z`})})},{href:`https://github.com/Mwoods30`,label:`GitHub`,icon:(0,k.jsx)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 24 24`,fill:`currentColor`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`,children:(0,k.jsx)(`path`,{d:`M12 .5C5.73.5.76 5.48.76 11.74c0 4.9 3.16 9.05 7.55 10.52.55.1.75-.24.75-.53 0-.26-.01-1.12-.02-2.03-3.07.67-3.72-1.47-3.72-1.47-.5-1.27-1.22-1.61-1.22-1.61-.99-.68.08-.66.08-.66 1.1.08 1.68 1.13 1.68 1.13.97 1.66 2.54 1.18 3.15.9.1-.7.38-1.18.69-1.45-2.45-.28-5.02-1.23-5.02-5.48 0-1.21.43-2.2 1.13-2.98-.11-.28-.49-1.4.11-2.92 0 0 .92-.3 3.02 1.13A10.5 10.5 0 0112 6.8c.93.004 1.86.13 2.73.38 2.1-1.42 3.02-1.13 3.02-1.13.6 1.52.22 2.64.11 2.92.7.78 1.13 1.77 1.13 2.98 0 4.26-2.58 5.2-5.04 5.48.39.34.73 1.01.73 2.03 0 1.47-.01 2.66-.01 3.02 0 .29.2.64.76.53 4.39-1.47 7.55-5.62 7.55-10.52C23.24 5.48 18.27.5 12 .5z`})})},{href:`https://leetcode.com/Mattwoods301/`,label:`LeetCode`,icon:(0,k.jsxs)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 24 24`,fill:`currentColor`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`,children:[(0,k.jsx)(`path`,{d:`M12.707 10.293a1 1 0 00-1.414 0L9 12.586 7.707 11.293a1 1 0 10-1.414 1.414l2.5 2.5a1 1 0 001.414 0l4-4a1 1 0 000-1.414z`}),(0,k.jsx)(`path`,{d:`M4 3h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1zm1 2v14h14V5H5z`})]})}],ch=[`Currently exploring advanced motion design in React.`,`Always open to collaborating on playful UX and game mechanics.`,`Comfortable shipping to Netlify, Vercel, and Firebase-hosted stacks.`];function lh(){let e=ut(),t=t=>{window.location.pathname===`/`?document.getElementById(t)?.scrollIntoView({behavior:`smooth`,block:`start`}):(e(`/`),setTimeout(()=>{document.getElementById(t)?.scrollIntoView({behavior:`smooth`,block:`start`})},100))},n=new Date().getFullYear();return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(`style`,{children:ih}),(0,k.jsxs)(`footer`,{className:`footer`,children:[(0,k.jsxs)(`div`,{className:`footer-shell`,children:[(0,k.jsxs)(`div`,{className:`footer-brand`,children:[(0,k.jsx)(`span`,{className:`footer-badge`,children:`Matthew Woods`}),(0,k.jsx)(`h2`,{className:`footer-title`,children:`Designing playful, accessible, and performant web products.`}),(0,k.jsx)(`p`,{className:`footer-tagline`,children:`From interactive games to production-ready dashboards, I thrive on crafting experiences where thoughtful UX meets reliable engineering. Let's collaborate on what comes next.`}),(0,k.jsxs)(`div`,{className:`footer-actions`,children:[(0,k.jsx)(`button`,{type:`button`,className:`footer-button primary`,onClick:()=>t(`contact`),children:`Start a project`}),(0,k.jsx)(`a`,{className:`footer-button secondary`,href:`mailto:mattwoods301@gmail.com`,children:`Say hello`})]}),(0,k.jsx)(`div`,{className:`footer-insight`,children:ch.map(e=>(0,k.jsx)(`div`,{children:e},e))})]}),(0,k.jsxs)(`div`,{className:`footer-columns`,children:[(0,k.jsxs)(`div`,{className:`footer-column`,children:[(0,k.jsx)(`h3`,{children:`Navigate`}),ah.map(e=>(0,k.jsx)(`button`,{type:`button`,className:`footer-link-button`,onClick:()=>t(e.target),children:e.label},e.label))]}),(0,k.jsxs)(`div`,{className:`footer-column`,children:[(0,k.jsx)(`h3`,{children:`Resources`}),oh.map(e=>(0,k.jsx)(`a`,{className:`footer-link`,href:e.href,target:`_blank`,rel:`noopener noreferrer`,children:e.label},e.label))]}),(0,k.jsxs)(`div`,{className:`footer-column`,children:[(0,k.jsx)(`h3`,{children:`Stay in touch`}),(0,k.jsx)(`div`,{className:`footer-social`,children:sh.map(e=>(0,k.jsx)(`a`,{href:e.href,"aria-label":e.label,target:`_blank`,rel:`noreferrer`,children:e.icon},e.label))})]})]})]}),(0,k.jsxs)(`div`,{className:`footer-bottom`,children:[(0,k.jsxs)(`span`,{children:[`© `,n,` Matthew Woods. Built with React and a love for thoughtful design.`]}),(0,k.jsx)(`a`,{href:`mailto:mattwoods301@gmail.com`,children:`mattwoods301@gmail.com`})]})]})]})}function uh(){return(0,k.jsx)(Nr,{children:(0,k.jsx)(Xr,{children:(0,k.jsxs)(wn,{children:[(0,k.jsx)(rh,{}),(0,k.jsxs)(Lt,{children:[(0,k.jsx)(Ft,{path:`/`,element:(0,k.jsx)(jm,{})}),(0,k.jsx)(Ft,{path:`/wordle`,element:(0,k.jsx)(Bm,{})}),(0,k.jsx)(Ft,{path:`/snake`,element:(0,k.jsx)(Jm,{})}),(0,k.jsx)(Ft,{path:`/tictactoe`,element:(0,k.jsx)(eh,{})})]}),(0,k.jsx)(lh,{})]})})})}y.createRoot(document.getElementById(`root`)).render((0,k.jsx)(b.StrictMode,{children:(0,k.jsx)(uh,{})}));