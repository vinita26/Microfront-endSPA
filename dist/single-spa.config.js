!function(t){function n(n){for(var e,o,i=n[0],a=n[1],u=0,s=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&s.push(r[o][0]),r[o]=0;for(e in a)Object.prototype.hasOwnProperty.call(a,e)&&(t[e]=a[e]);for(c&&c(n);s.length;)s.shift()()}var e={},r={0:0};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(t){var n=[],e=r[t];if(0!==e)if(e)n.push(e[2]);else{var i=new Promise(function(n,o){e=r[t]=[n,o]});n.push(e[2]=i);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=function(t){return o.p+""+({}[t]||t)+".js"}(t);var c=new Error;a=function(n){u.onerror=u.onload=null,clearTimeout(s);var e=r[t];if(0!==e){if(e){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",c.name="ChunkLoadError",c.type=o,c.request=i,e[1](c)}r[t]=void 0}};var s=setTimeout(function(){a({type:"timeout",target:u})},12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(n)},o.m=t,o.c=e,o.d=function(t,n,e){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,n){if(1&n&&(t=o(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)o.d(e,r,function(n){return t[n]}.bind(null,r));return e},o.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p="/dist/",o.oe=function(t){throw console.error(t),t};var i=window.webpackJsonp=window.webpackJsonp||[],a=i.push.bind(i);i.push=n,i=i.slice();for(var u=0;u<i.length;u++)n(i[u]);var c=a;o(o.s=2)}([function(t,n,e){"use strict";(function(t){e.d(n,"a",function(){return At}),e.d(n,"b",function(){return Bt});var r=Object.freeze({get start(){return Bt},get ensureJQuerySupport(){return ht},get setBootstrapMaxTime(){return M},get setMountMaxTime(){return I},get setUnmountMaxTime(){return B},get setUnloadMaxTime(){return k},get registerApplication(){return At},get getMountedApps(){return Ot},get getAppStatus(){return Tt},get unloadApplication(){return _t},get checkActivityFunctions(){return St},get getAppNames(){return Pt},get declareChildApplication(){return jt},get unloadChildApplication(){return xt},get navigateToUrl(){return it},get triggerAppChange(){return Lt},get addErrorHandler(){return p},get removeErrorHandler(){return m},get mountRootParcel(){return Y},get NOT_LOADED(){return h},get LOADING_SOURCE_CODE(){return v},get NOT_BOOTSTRAPPED(){return g},get BOOTSTRAPPING(){return w},get NOT_MOUNTED(){return b},get MOUNTING(){return y},get UPDATING(){return O},get MOUNTED(){return E},get UNMOUNTING(){return P},get SKIP_BECAUSE_BROKEN(){return j}}),o=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{}).CustomEvent,i=function(){try{var t=new o("cat",{detail:{foo:"bar"}});return"cat"===t.type&&"bar"===t.detail.foo}catch(t){}return!1}()?o:"undefined"!=typeof document&&"function"==typeof document.createEvent?function(t,n){var e=document.createEvent("CustomEvent");return n?e.initCustomEvent(t,n.bubbles,n.cancelable,n.detail):e.initCustomEvent(t,!1,!1,void 0),e}:function(t,n){var e=document.createEventObject();return e.type=t,n?(e.bubbles=Boolean(n.bubbles),e.cancelable=Boolean(n.cancelable),e.detail=n.detail):(e.bubbles=!1,e.cancelable=!1,e.detail=void 0),e};function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function c(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),e.push.apply(e,r)}return e}function s(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?c(e,!0).forEach(function(n){u(t,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):c(e).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})}return t}var f=[];function l(t,n){var e=d(t,n);f.length?f.forEach(function(t){return t(e)}):setTimeout(function(){throw e})}function p(t){if("function"!=typeof t)throw Error("a single-spa error handler must be a function");f.push(t)}function m(t){if("function"!=typeof t)throw Error("a single-spa error handler must be a function");var n=!1;return f=f.filter(function(e){var r=e===t;return n=n||r,!r}),n}function d(t,n){var e,r=n.unmountThisParcel?"Parcel":"Application",o="".concat(r," '").concat(n.name,"' died in status ").concat(n.status,": ");if(t instanceof Error){try{t.message=o+t.message}catch(t){}e=t}else{console.warn("While ".concat(n.status,", '").concat(n.name,"' rejected its lifecycle function promise with a non-Error. This will cause stack traces to not be accurate."));try{e=Error(o+JSON.stringify(t))}catch(n){e=t}}e.appName=n.name,e.appOrParcelName=n.name;try{e.name=n.name}catch(t){}return e}var h="NOT_LOADED",v="LOADING_SOURCE_CODE",g="NOT_BOOTSTRAPPED",w="BOOTSTRAPPING",b="NOT_MOUNTED",y="MOUNTING",E="MOUNTED",O="UPDATING",P="UNMOUNTING",T="UNLOADING",j="SKIP_BECAUSE_BROKEN";function A(t){return t.status===E}function S(t){return!A(t)}function N(t){return t.status!==h&&t.status!==v}function x(t){return!N(t)}function _(t){try{return t.activeWhen(window.location)}catch(n){l(n,t),t.status=j}}function D(t){try{return!t.activeWhen(window.location)}catch(n){l(n,t),t.status=j}}function C(t){return t!==j&&(!t||t.status!==j)}function U(t){return t.name}var L={bootstrap:{millis:4e3,dieOnTimeout:!1},mount:{millis:3e3,dieOnTimeout:!1},unmount:{millis:3e3,dieOnTimeout:!1},unload:{millis:3e3,dieOnTimeout:!1}};function M(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if("number"!=typeof t||t<=0)throw Error("bootstrap max time must be a positive integer number of milliseconds");L.bootstrap={millis:t,dieOnTimeout:n}}function I(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if("number"!=typeof t||t<=0)throw Error("mount max time must be a positive integer number of milliseconds");L.mount={millis:t,dieOnTimeout:n}}function B(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if("number"!=typeof t||t<=0)throw Error("unmount max time must be a positive integer number of milliseconds");L.unmount={millis:t,dieOnTimeout:n}}function k(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if("number"!=typeof t||t<=0)throw Error("unload max time must be a positive integer number of milliseconds");L.unload={millis:t,dieOnTimeout:n}}function G(t,n,e){var r=1e3;return new Promise(function(o,i){var a=!1,u=!1;function c(t){if(!a)if(!0===t)u=!0,e.dieOnTimeout?i("".concat(n," did not resolve or reject for ").concat(e.millis," milliseconds")):console.error("".concat(n," did not resolve or reject for ").concat(e.millis," milliseconds -- we're no longer going to warn you about it."));else if(!u){var o=t,s=o*r;console.warn("".concat(n," did not resolve or reject within ").concat(s," milliseconds")),s+r<e.millis&&setTimeout(function(){return c(o+1)},r)}}t.then(function(t){a=!0,o(t)}).catch(function(t){a=!0,i(t)}),setTimeout(function(){return c(1)},r),setTimeout(function(){return c(!0)},e.millis)})}function q(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return s({},L,{},t)}function R(t,n){for(var e=0;e<t.length;e++)if(n(t[e]))return t[e];return null}function W(t){return t&&("function"==typeof t||(n=t,Array.isArray(n)&&!R(n,function(t){return"function"!=typeof t})));var n}function F(t,n){return 0===(t=Array.isArray(t)?t:[t]).length&&(t=[function(){return Promise.resolve()}]),function(e){return new Promise(function(r,o){!function i(a){var u=t[a](e);K(u)?u.then(function(){a===t.length-1?r():i(a+1)}).catch(o):o("".concat(n," at index ").concat(a," did not return a promise"))}(0)})}}function K(t){return t&&"function"==typeof t.then&&"function"==typeof t.catch}function $(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Promise.resolve().then(function(){return t.status!==g?t:(t.status=w,G(t.bootstrap(nt(t)),"Bootstrapping appOrParcel '".concat(t.name,"'"),t.timeouts.bootstrap).then(function(){return t.status=b,t}).catch(function(e){if(t.status=j,n)throw d(e,t);return l(e,t),t}))})}function J(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Promise.resolve().then(function(){if(t.status!==E)return t;t.status=P;var e=Object.keys(t.parcels).map(function(n){return t.parcels[n].unmountThisParcel()});return Promise.all(e).then(r,function(e){return r().then(function(){var r=Error(e.message);if(n){var o=d(r,t);throw t.status=j,o}l(r,t),t.status=j})}).then(function(){return t});function r(){return G(t.unmount(nt(t)),"Unmounting application ".concat(t.name,"'"),t.timeouts.unmount).then(function(){t.status=b}).catch(function(e){if(n){var r=d(e,t);throw t.status=j,r}l(e,t),t.status=j})}})}var H=!1,Q=!1;function V(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Promise.resolve().then(function(){return t.status!==b?t:(H||(window.dispatchEvent(new i("single-spa:before-first-mount")),H=!0),G(t.mount(nt(t)),"Mounting application '".concat(t.name,"'"),t.timeouts.mount).then(function(){return t.status=E,Q||(window.dispatchEvent(new i("single-spa:first-mount")),Q=!0),t}).catch(function(e){return t.status=E,J(t).then(r,r);function r(){if(n){var r=d(e,t);throw t.status=j,r}return l(e,t),t.status=j,t}}))})}var z=0,X={parcels:{}};function Y(){return Z.apply(X,arguments)}function Z(t,n){var e=this;if(!t||"object"!==a(t)&&"function"!=typeof t)throw Error("Cannot mount parcel without a config object or config loading function");if(t.name&&"string"!=typeof t.name)throw Error("Parcel name must be a string, if provided");if("object"!==a(n))throw Error("Parcel ".concat(name," has invalid customProps -- must be an object"));if(!n.domElement)throw Error("Parcel ".concat(name," cannot be mounted without a domElement provided as a prop"));var r,o=z++,i="function"==typeof t,u=i?t:function(){return Promise.resolve(t)},c={id:o,parcels:{},status:i?v:g,customProps:n,parentName:e.name,unmountThisParcel:function(){if(c.status!==E)throw Error("Cannot unmount parcel '".concat(name,"' -- it is in a ").concat(c.status," status"));return J(c,!0).then(function(t){return c.parentName&&delete e.parcels[c.id],t}).then(function(t){return f(t),t}).catch(function(t){throw c.status=j,l(t),t})}};e.parcels[o]=c;var s=u();if(!s||"function"!=typeof s.then)throw Error("When mounting a parcel, the config loading function must return a promise that resolves with the parcel config");var f,l,p=(s=s.then(function(t){if(!t)throw Error("When mounting a parcel, the config loading function returned a promise that did not resolve with a parcel config");var n=t.name||"parcel-".concat(o);if(!W(t.bootstrap))throw Error("Parcel ".concat(n," must have a valid bootstrap function"));if(!W(t.mount))throw Error("Parcel ".concat(n," must have a valid mount function"));if(!W(t.unmount))throw Error("Parcel ".concat(n," must have a valid unmount function"));if(t.update&&!W(t.update))throw Error("Parcel ".concat(n," provided an invalid update function"));var e=F(t.bootstrap),i=F(t.mount),a=F(t.unmount);c.status=g,c.name=n,c.bootstrap=e,c.mount=i,c.unmount=a,c.timeouts=q(t.timeouts),t.update&&(c.update=F(t.update),r.update=function(t){return c.customProps=t,tt(function(t){return Promise.resolve().then(function(){if(t.status!==E)throw Error("Cannot update parcel '".concat(t.name,"' because it is not mounted"));return t.status=O,G(t.update(nt(t)),"Updating parcel '".concat(t.name,"'"),t.timeouts.mount).then(function(){return t.status=E,t}).catch(function(n){var e=d(n,t);throw t.status=j,e})})}(c))})})).then(function(){return $(c,!0)}),m=p.then(function(){return V(c,!0)}),h=new Promise(function(t,n){f=t,l=n});return r={mount:function(){return tt(Promise.resolve().then(function(){if(c.status!==b)throw Error("Cannot mount parcel '".concat(name,"' -- it is in a ").concat(c.status," status"));return e.parcels[o]=c,V(c)}))},unmount:function(){return tt(c.unmountThisParcel())},getStatus:function(){return c.status},loadPromise:tt(s),bootstrapPromise:tt(p),mountPromise:tt(m),unmountPromise:tt(h)}}function tt(t){return t.then(function(){return null})}function nt(t){var n=s({},t.customProps,{name:t.name,mountParcel:Z.bind(t),singleSpa:r});return t.unmountThisParcel&&(n.unmountSelf=t.unmountThisParcel),n}function et(t){return Promise.resolve().then(function(){return t.status!==h?t:(t.status=v,Promise.resolve().then(function(){var e=t.loadImpl(nt(t));if(!K(e))throw Error("single-spa loading function did not return a promise. Check the second argument to registerApplication('".concat(t.name,"', loadingFunction, activityFunction)"));return e.then(function(e){var r;return"object"!==a(n=e)&&(r="does not export anything"),W(n.bootstrap)||(r="does not export a bootstrap function or array of functions"),W(n.mount)||(r="does not export a mount function or array of functions"),W(n.unmount)||(r="does not export an unmount function or array of functions"),r?(console.error("The loading function for single-spa application '".concat(t.name,"' resolved with the following, which does not have bootstrap, mount, and unmount functions"),n),l(r,t),t.status=j,t):(n.devtools&&n.devtools.overlays&&(t.devtools.overlays=s({},t.devtools.overlays,{},n.devtools.overlays)),t.status=g,t.bootstrap=F(n.bootstrap,"App '".concat(t.name,"' bootstrap function")),t.mount=F(n.mount,"App '".concat(t.name,"' mount function")),t.unmount=F(n.unmount,"App '".concat(t.name,"' unmount function")),t.unload=F(n.unload||[],"App '".concat(t.name,"' unload function")),t.timeouts=q(n.timeouts),t)})}).catch(function(n){return l(n,t),t.status=j,t}));var n})}var rt={hashchange:[],popstate:[]},ot=["hashchange","popstate"];function it(t){var n,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("string"==typeof t)n=t;else if(this&&this.href)n=this.href;else{if(!(t&&t.currentTarget&&t.currentTarget.href&&t.preventDefault))throw Error("singleSpaNavigate must be either called with a string url, with an <a> tag as its context, or with an event whose currentTarget is an <a> tag");n=t.currentTarget.href,t.preventDefault()}var r=mt(window.location.href),o=mt(n);if(0===n.indexOf("#"))window.location.hash="#"+o.anchor;else if(r.host!==o.host&&o.host){if(e.isTestingEnv)return{wouldHaveReloadedThePage:!0};window.location.href=n}else!function(t,n){return n===t||n==="/"+t}(o.path+"?"+o.query,r.path+"?"+r.query)?window.history.pushState(null,null,n):window.location.hash="#"+o.anchor}function at(t){var n=this;if(t){var e=t[0].type;ot.indexOf(e)>=0&&rt[e].forEach(function(e){e.apply(n,t)})}}function ut(){Mt([],arguments)}window.addEventListener("hashchange",ut),window.addEventListener("popstate",ut);var ct=window.addEventListener,st=window.removeEventListener;window.addEventListener=function(t,n){if(!("function"==typeof n&&ot.indexOf(t)>=0)||R(rt[t],function(t){return t===n}))return ct.apply(this,arguments);rt[t].push(n)},window.removeEventListener=function(t,n){if(!("function"==typeof n&&ot.indexOf(t)>=0))return st.apply(this,arguments);rt[t]=rt[t].filter(function(t){return t!==n})};var ft=window.history.pushState;window.history.pushState=function(t){var n=ft.apply(this,arguments);return ut(pt(t)),n};var lt=window.history.replaceState;function pt(t){try{return new PopStateEvent("popstate",{state:t})}catch(e){var n=document.createEvent("PopStateEvent");return n.initPopStateEvent("popstate",!1,!1,t),n}}function mt(t){for(var n={strictMode:!0,key:["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],q:{name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}},e=n.parser.strict.exec(t),r={},o=14;o--;)r[n.key[o]]=e[o]||"";return r[n.q.name]={},r[n.key[12]].replace(n.q.parser,function(t,e,o){e&&(r[n.q.name][e]=o)}),r}window.history.replaceState=function(t){var n=lt.apply(this,arguments);return ut(pt(t)),n},window.singleSpaNavigate=it;var dt=!1;function ht(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.jQuery;if(t||window.$&&window.$.fn&&window.$.fn.jquery&&(t=window.$),t&&!dt){var n=t.fn.on,e=t.fn.off;t.fn.on=function(t,e){return vt.call(this,n,window.addEventListener,t,e,arguments)},t.fn.off=function(t,n){return vt.call(this,e,window.removeEventListener,t,n,arguments)},dt=!0}}function vt(t,n,e,r,o){return"string"!=typeof e?t.apply(this,o):(e.split(/\s+/).forEach(function(t){ot.indexOf(t)>=0&&(n(t,r),e=e.replace(t,""))}),""===e.trim()?this:t.apply(this,o))}var gt={};function wt(t){return Promise.resolve().then(function(){var n=gt[t.name];return n?t.status===h?(bt(t,n),t):t.status===T?n.promise.then(function(){return t}):t.status!==b?t:(t.status=T,G(t.unload(nt(t)),"Unloading application '".concat(t.name,"'"),t.timeouts.unload).then(function(){return bt(t,n),t}).catch(function(e){return function(t,n,e){delete gt[t.name],delete t.bootstrap,delete t.mount,delete t.unmount,delete t.unload,l(e,t),t.status=j,n.reject(e)}(t,n,e),t})):t})}function bt(t,n){delete gt[t.name],delete t.bootstrap,delete t.mount,delete t.unmount,delete t.unload,t.status=h,n.resolve()}function yt(t,n,e,r){gt[t.name]={app:t,resolve:e,reject:r},Object.defineProperty(gt[t.name],"promise",{get:n})}var Et=[];function Ot(){return Et.filter(A).map(U)}function Pt(){return Et.map(U)}function Tt(t){var n=R(Et,function(n){return n.name===t});return n?n.status:null}function jt(t,n,e){return console.warn('declareChildApplication is deprecated and will be removed in the next major version, use "registerApplication" instead'),At(t,n,e)}function At(t,n,e){var r,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if("string"!=typeof t||0===t.length)throw Error("The first argument must be a non-empty string 'appName'");if(-1!==Pt().indexOf(t))throw Error("There is already an app declared with name ".concat(t));if("object"!==a(o)||Array.isArray(o))throw Error("customProps must be an object");if(!n)throw Error("The application or loading function is required");if(r="function"!=typeof n?function(){return Promise.resolve(n)}:n,"function"!=typeof e)throw Error("The activeWhen argument must be a function");Et.push({name:t,loadImpl:r,activeWhen:e,status:h,parcels:{},devtools:{overlays:{options:{},selectors:[]}},customProps:o}),ht(),Mt()}function St(t){for(var n=[],e=0;e<Et.length;e++)Et[e].activeWhen(t)&&n.push(Et[e].name);return n}function Nt(){return Et.filter(C).filter(x).filter(_)}function xt(t,n){return console.warn('unloadChildApplication is deprecated and will be removed in the next major version, use "unloadApplication" instead'),_t(t,n)}function _t(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{waitForUnmount:!1};if("string"!=typeof t)throw Error("unloadApplication requires a string 'appName'");var e=R(Et,function(n){return n.name===t});if(!e)throw Error("Could not unload application '".concat(t,"' because no such application has been registered"));var r,o=function(t){return gt[t]}(e.name);if(n&&n.waitForUnmount){if(o)return o.promise;var i=new Promise(function(t,n){yt(e,function(){return i},t,n)});return i}return o?(r=o.promise,Dt(e,o.resolve,o.reject)):r=new Promise(function(t,n){yt(e,function(){return r},t,n),Dt(e,t,n)}),r}function Dt(t,n,e){J(t).then(wt).then(function(){n(),setTimeout(function(){Mt()})}).catch(e)}var Ct=!1,Ut=[];function Lt(){return Mt()}function Mt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;if(Ct)return new Promise(function(t,e){Ut.push({resolve:t,reject:e,eventArguments:n})});Ct=!0;var e=!0;return It?Promise.resolve().then(function(){window.dispatchEvent(new i("single-spa:before-routing-event",a()));var n=Object.keys(gt).map(function(t){return gt[t].app}).filter(S).map(wt),u=Et.filter(C).filter(A).filter(D).map(J).map(function(t){return t.then(wt)}).concat(n);u.length>0&&(e=!1);var c=Promise.all(u),s=Nt(),f=s.map(function(t){return et(t).then($).then(function(t){return c.then(function(){return V(t)})})});f.length>0&&(e=!1);var l=Et.filter(C).filter(S).filter(N).filter(_).filter(function(t){return s.indexOf(t)<0}).map(function(t){return $(t).then(function(){return c}).then(function(){return V(t)})});return l.length>0&&(e=!1),c.catch(function(t){throw o(),t}).then(function(){return o(),Promise.all(f.concat(l)).catch(function(n){throw t.forEach(function(t){return t.reject(n)}),n}).then(function(){return r(!1)})})}):Promise.resolve().then(function(){var t=Nt().map(et);return t.length>0&&(e=!1),Promise.all(t).then(r).catch(function(t){throw o(),t})});function r(){var n=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],r=Ot();n&&o(),t.forEach(function(t){return t.resolve(r)});try{var u=e?"single-spa:no-app-change":"single-spa:app-change";window.dispatchEvent(new i(u,a())),window.dispatchEvent(new i("single-spa:routing-event",a()))}catch(t){setTimeout(function(){throw t})}if(Ct=!1,Ut.length>0){var c=Ut;Ut=[],Mt(c)}return r}function o(){t.forEach(function(t){at(t.eventArguments)}),at(n)}function a(){var t={detail:{}};return n&&n[0]&&(t.detail.originalEvent=n[0]),t}}var It=!1;function Bt(){It=!0,Mt()}setTimeout(function(){It||console.warn("singleSpa.start() has not been called, ".concat(5e3,"ms after single-spa was loaded. Before start() is called, apps can be declared and loaded, but not bootstrapped or mounted. See https://github.com/CanopyTax/single-spa/blob/master/docs/single-spa-api.md#start"))},5e3);var kt={getRawAppData:function(){return[].concat(Et)},reroute:Mt,NOT_LOADED:h,toLoadPromise:et,toBootstrapPromise:$,unregisterApplication:function(t){if(!Et.find(function(n){return n.name===t}))throw Error("Cannot unregister application '".concat(t,"' because no such application has been registered"));return _t(t).then(function(){var n=Et.findIndex(function(n){return n.name===t});Et.splice(n,1)})}};window&&window.__SINGLE_SPA_DEVTOOLS__&&(window.__SINGLE_SPA_DEVTOOLS__.exposedMethods=kt)}).call(this,e(1))},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){"use strict";e.r(n);var r=e(0);Object(r.a)("vue",function(){return Promise.all([e.e(2),e.e(4)]).then(e.bind(null,3))},function(){return"/react"!==location.pathname}),Object(r.a)("react",function(){return Promise.all([e.e(1),e.e(3)]).then(e.bind(null,4))},function(){return"/vue"!==location.pathname}),Object(r.b)()}]);
//# sourceMappingURL=single-spa.config.js.map