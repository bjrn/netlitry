webpackJsonp([0xd2a57dc1d883],{179:function(e,n){"use strict";function t(e,n,t){var o=r.map(function(t){if(t.plugin[e]){var o=t.plugin[e](n,t.options);return o}});return o=o.filter(function(e){return"undefined"!=typeof e}),o.length>0?o:t?[t]:[]}function o(e,n,t){return r.reduce(function(t,o){return o.plugin[e]?t.then(function(){return o.plugin[e](n,o.options)}):t},Promise.resolve())}n.__esModule=!0,n.apiRunner=t,n.apiRunnerAsync=o;var r=[]},180:function(e,n,t){"use strict";var o;n.components={"component---src-templates-about-page-js":t(282),"component---src-templates-blog-post-js":t(283),"component---src-pages-404-js":t(280),"component---src-pages-index-js":t(281)},n.json=(o={"layout-index.json":t(21),"about.json":t(287)},o["layout-index.json"]=t(21),o["a-custom-uri.json"]=t(286),o["layout-index.json"]=t(21),o["einstein.json"]=t(289),o["layout-index.json"]=t(21),o["claude.json"]=t(288),o["layout-index.json"]=t(21),o["intro-to-graphql.json"]=t(291),o["layout-index.json"]=t(21),o["404.json"]=t(284),o["layout-index.json"]=t(21),o["index.json"]=t(290),o["layout-index.json"]=t(21),o["404-html.json"]=t(285),o),n.layouts={"component---src-layouts-index-js":t(279)}},181:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function u(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}n.__esModule=!0;var i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},c=t(2),s=o(c),l=t(7),f=o(l),p=t(116),d=o(p),h=t(56),m=o(h),g=function(e){var n=e.children;return s.default.createElement("div",null,n())},y=function(e){function n(t){r(this,n);var o=a(this,e.call(this));return o.state={location:t.location,pageResources:d.default.getResourcesForPathname(t.location.pathname)},o}return u(n,e),n.prototype.componentWillReceiveProps=function(e){var n=this;if(this.state.location.pathname!==e.location.pathname){var t=d.default.getResourcesForPathname(e.location.pathname);t?this.setState({location:e.location,pageResources:t}):d.default.getResourcesForPathname(e.location.pathname,function(t){n.setState({location:e.location,pageResources:t})})}},n.prototype.componentDidMount=function(){var e=this;m.default.on("onPostLoadPageResources",function(n){n.page.path===d.default.getPage(e.state.location.pathname).path&&e.setState({pageResources:n.pageResources})})},n.prototype.shouldComponentUpdate=function(e,n){return!n.pageResources||(!(this.state.pageResources||!n.pageResources)||(this.state.pageResources.component!==n.pageResources.component||(this.state.pageResources.json!==n.pageResources.json||!(this.state.location.key===n.location.key||!n.pageResources.page||!n.pageResources.page.matchPath&&!n.pageResources.page.path))))},n.prototype.render=function(){return this.props.page?this.state.pageResources?(0,c.createElement)(this.state.pageResources.component,i({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?(0,c.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:g,i({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},n}(s.default.Component);y.propTypes={page:f.default.bool,layout:f.default.bool,location:f.default.object},n.default=y,e.exports=n.default},56:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(308),a=o(r),u=(0,a.default)();e.exports=u},182:function(e,n,t){"use strict";var o=t(72),r={};e.exports=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(t){var a=decodeURIComponent(t),u=a.slice(n.length);if(u.split("#").length>1&&(u=u.split("#").slice(0,-1).join("")),u.split("?").length>1&&(u=u.split("?").slice(0,-1).join("")),r[u])return r[u];var i=void 0;return e.some(function(e){if(e.matchPath){if((0,o.matchPath)(u,{path:e.path})||(0,o.matchPath)(u,{path:e.matchPath}))return i=e,r[u]=e,!0}else{if((0,o.matchPath)(u,{path:e.path,exact:!0}))return i=e,r[u]=e,!0;if((0,o.matchPath)(u,{path:e.path+"index.html"}))return i=e,r[u]=e,!0}return!1}),i}}},285:function(e,n,t){t(9),e.exports=function(e){return t.e(0xa2868bfb69fc,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(298)})})}},284:function(e,n,t){t(9),e.exports=function(e){return t.e(0xe70826b53c04,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(299)})})}},286:function(e,n,t){t(9),e.exports=function(e){return t.e(0xfeac6d35c55b,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(300)})})}},287:function(e,n,t){t(9),e.exports=function(e){return t.e(0xf927f8900006,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(301)})})}},288:function(e,n,t){t(9),e.exports=function(e){return t.e(41665909640594,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(302)})})}},289:function(e,n,t){t(9),e.exports=function(e){return t.e(0xc9baef82f767,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(303)})})}},290:function(e,n,t){t(9),e.exports=function(e){return t.e(0x81b8806e4260,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(304)})})}},291:function(e,n,t){t(9),e.exports=function(e){return t.e(0x9bf29fb2574d,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(305)})})}},21:function(e,n,t){t(9),e.exports=function(e){return t.e(60335399758886,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(95)})})}},279:function(e,n,t){t(9),e.exports=function(e){return t.e(0x67ef26645b2a,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(183)})})}},116:function(e,n,t){(function(n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(2),a=(o(r),t(182)),u=o(a),i=t(56),c=o(i),s=void 0,l={},f={},p={},d={},h={},m=[],g=[],y={},v=[],R={},j=function(e){return e&&e.default||e},x=void 0,b=!0;x=t(184)({getNextQueuedResources:function(){return v.slice(-1)[0]},createResourceDownload:function(e){_(e,function(){v=v.filter(function(n){return n!==e}),x.onResourcedFinished(e)})}}),c.default.on("onPreLoadPageResources",function(e){x.onPreLoadPageResources(e)}),c.default.on("onPostLoadPageResources",function(e){x.onPostLoadPageResources(e)});var P=function(e,n){return R[e]>R[n]?1:R[e]<R[n]?-1:0},w=function(e,n){return y[e]>y[n]?1:y[e]<y[n]?-1:0},_=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(d[e])n.nextTick(function(){t(null,d[e])});else{var o="component---"===e.slice(0,12)?f.components[e]||f.layouts[e]:f.json[e];o(function(n,o){d[e]=o,t(n,o)})}},C=function(e,t){h[e]?n.nextTick(function(){t(null,h[e])}):_(e,function(n,o){if(n)t(n);else{var r=j(o());h[e]=r,t(n,r)}})},N=1,k={empty:function(){g=[],y={},R={},v=[],m=[]},addPagesArray:function(e){m=e;var n="";n="",s=(0,u.default)(e,n)},addDevRequires:function(e){l=e},addProdRequires:function(e){f=e},dequeue:function(e){return g.pop()},enqueue:function(e){if(!m.some(function(n){return n.path===e}))return!1;var n=1/N;N+=1,y[e]?y[e]+=1:y[e]=1,k.has(e)||g.unshift(e),g.sort(w);var t=s(e);return t.jsonName&&(R[t.jsonName]?R[t.jsonName]+=1+n:R[t.jsonName]=1+n,v.indexOf(t.jsonName)!==-1||d[t.jsonName]||v.unshift(t.jsonName)),t.componentChunkName&&(R[t.componentChunkName]?R[t.componentChunkName]+=1+n:R[t.componentChunkName]=1+n,v.indexOf(t.componentChunkName)!==-1||d[t.jsonName]||v.unshift(t.componentChunkName)),v.sort(P),x.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:v,resourcesCount:R}},getPages:function(){return{pathArray:g,pathCount:y}},getPage:function(e){return s(e)},has:function(e){return g.some(function(n){return n===e})},getResourcesForPathname:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};b&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(s(e)||navigator.serviceWorker.getRegistrations().then(function(e){for(var n=e,t=Array.isArray(n),o=0,n=t?n:n[Symbol.iterator]();;){var r;if(t){if(o>=n.length)break;r=n[o++]}else{if(o=n.next(),o.done)break;r=o.value}var a=r;a.unregister()}window.location.reload()})),b=!1;var o=s(e);if(!o)return void console.log("A page wasn't found for \""+e+'"');if(e=o.path,p[e])return n.nextTick(function(){t(p[e]),c.default.emit("onPostLoadPageResources",{page:o,pageResources:p[e]})}),p[e];c.default.emit("onPreLoadPageResources",{path:e});var r=void 0,a=void 0,u=void 0,i=function(){if(r&&a&&(!o.layoutComponentChunkName||u)){p[e]={component:r,json:a,layout:u,page:o};var n={component:r,json:a,layout:u,page:o};t(n),c.default.emit("onPostLoadPageResources",{page:o,pageResources:n})}};return C(o.componentChunkName,function(e,n){e&&console.log("Loading the component for "+o.path+" failed"),r=n,i()}),C(o.jsonName,function(e,n){e&&console.log("Loading the JSON for "+o.path+" failed"),a=n,i()}),void(o.layoutComponentChunkName&&C(o.layoutComponentChunkName,function(e,n){e&&console.log("Loading the Layout for "+o.path+" failed"),u=n,i()}))},peek:function(e){return g.slice(-1)[0]},length:function(){return g.length},indexOf:function(e){return g.length-g.indexOf(e)-1}};e.exports=k}).call(n,t(96))},306:function(e,n){e.exports=[{componentChunkName:"component---src-templates-about-page-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"about.json",path:"/about"},{componentChunkName:"component---src-templates-blog-post-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"a-custom-uri.json",path:"/a/custom/uri"},{componentChunkName:"component---src-templates-blog-post-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"einstein.json",path:"/einstein"},{componentChunkName:"component---src-templates-blog-post-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"claude.json",path:"/claude"},{componentChunkName:"component---src-templates-blog-post-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"intro-to-graphql.json",path:"/intro-to-graphql"},{componentChunkName:"component---src-pages-404-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-index-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-404-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404-html.json",path:"/404.html"}]},184:function(e,n){"use strict";e.exports=function(e){var n=e.getNextQueuedResources,t=e.createResourceDownload,o=[],r=[],a=function(){var e=n();e&&(r.push(e),t(e))},u=function(e){switch(e.type){case"RESOURCE_FINISHED":r=r.filter(function(n){return n!==e.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":o.push(e.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":o=o.filter(function(n){return n!==e.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===r.length&&0===o.length&&a()},0)};return{onResourcedFinished:function(e){u({type:"RESOURCE_FINISHED",payload:e})},onPreLoadPageResources:function(e){u({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:e})},onPostLoadPageResources:function(e){u({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:e})},onNewResourcesAdded:function(){u({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:o,resourcesDownloading:r}},empty:function(){o=[],r=[]}}}},0:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},a=t(179),u=t(2),i=o(u),c=t(149),s=o(c),l=t(72),f=t(295),p=t(93),d=o(p),h=t(266),m=o(h),g=t(56),y=o(g),v=t(306),R=o(v),j=t(307),x=o(j),b=t(181),P=o(b),w=t(180),_=o(w),C=t(116),N=o(C);t(259),window.___emitter=y.default,N.default.addPagesArray(R.default),N.default.addProdRequires(_.default),window.asyncRequires=_.default,window.___loader=N.default,window.matchPath=l.matchPath;var k=(0,d.default)(),E=x.default.reduce(function(e,n){return e[n.fromPath]=n,e},{}),O=function(e){var n=E[e];return null!=n&&(k.replace(n.toPath),!0)};O(window.location.pathname),(0,a.apiRunnerAsync)("onClientEntry").then(function(){function e(e){window.___history||(window.___history=e,e.listen(function(e,n){O(e.pathname)||(0,a.apiRunner)("onRouteUpdate",{location:e,action:n})}))}function n(e,n){var t=n.location.pathname,o=(0,a.apiRunner)("shouldUpdateScroll",{prevRouterProps:e,pathname:t});if(o.length>0)return o[0];if(e){var r=e.location.pathname;if(r===t)return!1}return!0}(0,a.apiRunner)("registerServiceWorker").length>0&&t(185);var o=function(e){function n(t){t.page.path===N.default.getPage(e).path&&(y.default.off("onPostLoadPageResources",n),clearTimeout(o),window.___history.push(e))}var t=E[e];if(t&&(e=t.toPath),window.location.pathname!==e){var o=setTimeout(function(){y.default.off("onPostLoadPageResources",n),y.default.emit("onDelayedLoadPageResources",{pathname:e}),window.___history.push(e)},1e3);N.default.getResourcesForPathname(e)?(clearTimeout(o),window.___history.push(e)):y.default.on("onPostLoadPageResources",n)}};window.___navigateTo=o,(0,a.apiRunner)("onRouteUpdate",{location:k.location,action:k.action});var c=(0,a.apiRunner)("replaceRouterComponent",{history:k})[0],p=function(e){var n=e.children;return i.default.createElement(l.Router,{history:k},n)},d=(0,l.withRouter)(P.default);N.default.getResourcesForPathname(window.location.pathname,function(){var t=function(){return(0,u.createElement)(c?c:p,null,(0,u.createElement)(f.ScrollContext,{shouldUpdateScroll:n},(0,u.createElement)(d,{layout:!0,children:function(n){return(0,u.createElement)(l.Route,{render:function(t){e(t.history);var o=n?n:t;return N.default.getPage(o.location.pathname)?(0,u.createElement)(P.default,r({page:!0},o)):(0,u.createElement)(P.default,{location:{page:!0,pathname:"/404.html"}})}})}})))},o=(0,a.apiRunner)("wrapRootComponent",{Root:t},t)[0];(0,m.default)(function(){return s.default.render(i.default.createElement(o,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,a.apiRunner)("onInitialClientRender")})})})})},307:function(e,n){e.exports=[]},185:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(56),a=o(r),u="/";"serviceWorker"in navigator&&navigator.serviceWorker.register(u+"sw.js").then(function(e){e.addEventListener("updatefound",function(){var n=e.installing;console.log("installingWorker",n),n.addEventListener("statechange",function(){switch(n.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),a.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(e){console.error("Error during service worker registration:",e)})},266:function(e,n,t){!function(n,t){e.exports=t()}("domready",function(){var e,n=[],t=document,o=t.documentElement.doScroll,r="DOMContentLoaded",a=(o?/^loaded|^c/:/^loaded|^i|^c/).test(t.readyState);return a||t.addEventListener(r,e=function(){for(t.removeEventListener(r,e),a=1;e=n.shift();)e()}),function(e){a?setTimeout(e,0):n.push(e)}})},9:function(e,n,t){"use strict";function o(){function e(e){var n=o.lastChild;return"SCRIPT"!==n.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",n)):void(n.onload=n.onerror=function(){n.onload=n.onerror=null,setTimeout(e,0)})}var n,o=document.querySelector("head"),r=t.e,a=t.s;t.e=function(o,u){var i=!1,c=!0,s=function(e){u&&(u(t,e),u=null)};return!a&&n&&n[o]?void s(!0):(r(o,function(){i||(i=!0,c?setTimeout(function(){s()}):s())}),void(i||(c=!1,e(function(){i||(i=!0,a?a[o]=void 0:(n||(n={}),n[o]=!0),s(!0))}))))}}o()},146:function(e,n){"use strict";var t={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r=Object.defineProperty,a=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,i=Object.getOwnPropertyDescriptor,c=Object.getPrototypeOf,s=c&&c(Object);e.exports=function e(n,l,f){if("string"!=typeof l){if(s){var p=c(l);p&&p!==s&&e(n,p,f)}var d=a(l);u&&(d=d.concat(u(l)));for(var h=0;h<d.length;++h){var m=d[h];if(!(t[m]||o[m]||f&&f[m])){var g=i(l,m);try{r(n,m,g)}catch(e){}}}return n}return n}},308:function(e,n){function t(e){return e=e||Object.create(null),{on:function(n,t){(e[n]||(e[n]=[])).push(t)},off:function(n,t){e[n]&&e[n].splice(e[n].indexOf(t)>>>0,1)},emit:function(n,t){(e[n]||[]).map(function(e){e(t)}),(e["*"]||[]).map(function(e){e(n,t)})}}}e.exports=t},96:function(e,n){function t(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(e){if(l===setTimeout)return setTimeout(e,0);if((l===t||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(n){try{return l.call(null,e,0)}catch(n){return l.call(this,e,0)}}}function a(e){if(f===clearTimeout)return clearTimeout(e);if((f===o||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(n){try{return f.call(null,e)}catch(n){return f.call(this,e)}}}function u(){m&&d&&(m=!1,d.length?h=d.concat(h):g=-1,h.length&&i())}function i(){if(!m){var e=r(u);m=!0;for(var n=h.length;n;){for(d=h,h=[];++g<n;)d&&d[g].run();g=-1,n=h.length}d=null,m=!1,a(e)}}function c(e,n){this.fun=e,this.array=n}function s(){}var l,f,p=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:t}catch(e){l=t}try{f="function"==typeof clearTimeout?clearTimeout:o}catch(e){f=o}}();var d,h=[],m=!1,g=-1;p.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];h.push(new c(e,n)),1!==h.length||m||r(i)},c.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=s,p.addListener=s,p.once=s,p.off=s,p.removeListener=s,p.removeAllListeners=s,p.emit=s,p.prependListener=s,p.prependOnceListener=s,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},280:function(e,n,t){t(9),e.exports=function(e){return t.e(0x9427c64ab85d,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(187)})})}},281:function(e,n,t){t(9),e.exports=function(e){return t.e(35783957827783,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(188)})})}},282:function(e,n,t){t(9),e.exports=function(e){return t.e(0xf0a69e7ff408,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(189)})})}},283:function(e,n,t){t(9),e.exports=function(e){return t.e(0x620f737b6699,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(190)})})}}});
//# sourceMappingURL=app-d8c04d9bacd05416625c.js.map