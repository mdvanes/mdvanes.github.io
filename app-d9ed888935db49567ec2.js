webpackJsonp([0xd2a57dc1d883],{189:function(n,e,o){"use strict";function t(n,e,o){var t=a.map(function(o){if(o.plugin[n]){var t=o.plugin[n](e,o.options);return t}});return t=t.filter(function(n){return"undefined"!=typeof n}),t.length>0?t:o?[o]:[]}function r(n,e,o){return a.reduce(function(o,t){return t.plugin[n]?o.then(function(){return t.plugin[n](e,t.options)}):o},Promise.resolve())}e.__esModule=!0,e.apiRunner=t,e.apiRunnerAsync=r;var a=[{plugin:o(611),options:{plugins:[]}},{plugin:o(603),options:{plugins:[],trackingId:"UA-9626603-1"}},{plugin:o(604),options:{plugins:[],color:"#c62828"}},{plugin:o(602),options:{plugins:[]}},{plugin:o(606),options:{plugins:[],navigateFallbackWhitelist:[{}]}}]},429:function(n,e,o){"use strict";e.components={"component---node-modules-gatsby-plugin-offline-app-shell-js":o(560),"component---src-templates-post-jsx":o(567),"component---src-templates-tag-jsx":o(568),"component---src-templates-category-jsx":o(566),"component---src-pages-404-jsx":o(562),"component---src-pages-about-jsx":o(563),"component---src-pages-index-jsx":o(564),"component---src-pages-mypc-jsx":o(565)},e.json={"layout-index.json":o(569),"offline-plugin-app-shell-fallback.json":o(592),"discourse-on-ubuntu-14-04.json":o(576),"on-reactive.json":o(593),"fronteers-2014-css.json":o(582),"utopic-dop.json":o(600),"dop-wont-boot-and-usb-issues.json":o(579),"fronteers-2014-a-glossary.json":o(581),"dop-ssd-update.json":o(578),"npm-without-internet.json":o(590),"npm-workaround.json":o(591),"functional-javascript-update.json":o(584),"nbi-quickscan-app.json":o(589),"full-update-for-broek.json":o(583),"dop-beeping-hdd.json":o(577),"knockout-js-and-es-6.json":o(587),"polymer-2-and-redux.json":o(594),"reducing-cyclomatic-complexity-with-functional-operators.json":o(596),"polymer-2-and-type-script.json":o(595),"site-updated.json":o(597),"elm-for-front-end-developers.json":o(580),"apollo-client-in-practice.json":o(573),"gaining-root-access-to-smart-home-gateway.json":o(585),"tags-mypc.json":o(598),"tags-webdevelopment.json":o(599),"categories-mypc.json":o(574),"categories-webdevelopment.json":o(575),"404.json":o(570),"about.json":o(572),"index.json":o(586),"mypc.json":o(588),"404-html.json":o(571)},e.layouts={"layout---index":o(561)}},430:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function a(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function u(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}e.__esModule=!0;var s=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(n[t]=o[t])}return n},i=o(1),c=t(i),l=o(2),p=t(l),f=o(380),d=t(f),m=o(163),h=t(m),g=o(189),y=o(763),x=t(y),v=function(n){var e=n.children;return c.default.createElement("div",null,e())},j=function(n){function e(o){r(this,e);var t=a(this,n.call(this)),u=o.location;return d.default.getPage(u.pathname)||(u=s({},u,{pathname:"/404.html"})),t.state={location:u,pageResources:d.default.getResourcesForPathname(u.pathname)},t}return u(e,n),e.prototype.componentWillReceiveProps=function(n){var e=this;if(this.state.location.pathname!==n.location.pathname){var o=d.default.getResourcesForPathname(n.location.pathname);if(o)this.setState({location:n.location,pageResources:o});else{var t=n.location;d.default.getPage(t.pathname)||(t=s({},t,{pathname:"/404.html"})),d.default.getResourcesForPathname(t.pathname,function(n){e.setState({location:t,pageResources:n})})}}},e.prototype.componentDidMount=function(){var n=this;h.default.on("onPostLoadPageResources",function(e){d.default.getPage(n.state.location.pathname)&&e.page.path===d.default.getPage(n.state.location.pathname).path&&n.setState({pageResources:e.pageResources})})},e.prototype.shouldComponentUpdate=function(n,e){return!e.pageResources||(!(this.state.pageResources||!e.pageResources)||(this.state.pageResources.component!==e.pageResources.component||(this.state.pageResources.json!==e.pageResources.json||(!(this.state.location.key===e.location.key||!e.pageResources.page||!e.pageResources.page.matchPath&&!e.pageResources.page.path)||(0,x.default)(this,n,e)))))},e.prototype.render=function(){var n=(0,g.apiRunner)("replaceComponentRenderer",{props:s({},this.props,{pageResources:this.state.pageResources}),loader:f.publicLoader}),e=n[0];return this.props.page?this.state.pageResources?e||(0,i.createElement)(this.state.pageResources.component,s({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?e||(0,i.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:v,s({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},e}(c.default.Component);j.propTypes={page:p.default.bool,layout:p.default.bool,location:p.default.object},e.default=j,n.exports=e.default},163:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var r=o(660),a=t(r),u=(0,a.default)();n.exports=u},431:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var r=o(188),a=o(381),u=t(a),s={};n.exports=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(o){var t=decodeURIComponent(o),a=(0,u.default)(t,e);if(a.split("#").length>1&&(a=a.split("#").slice(0,-1).join("")),a.split("?").length>1&&(a=a.split("?").slice(0,-1).join("")),s[a])return s[a];var i=void 0;return n.some(function(n){if(n.matchPath){if((0,r.matchPath)(a,{path:n.path})||(0,r.matchPath)(a,{path:n.matchPath}))return i=n,s[a]=n,!0}else{if((0,r.matchPath)(a,{path:n.path,exact:!0}))return i=n,s[a]=n,!0;if((0,r.matchPath)(a,{path:n.path+"index.html"}))return i=n,s[a]=n,!0}return!1}),i}}},432:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var r=o(221),a=t(r),u=o(189),s=(0,u.apiRunner)("replaceHistory"),i=s[0],c=i||(0,a.default)();n.exports=c},571:function(n,e,o){o(11),n.exports=function(n){return o.e(0xa2868bfb69fc,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(617)})})}},570:function(n,e,o){o(11),n.exports=function(n){return o.e(0xe70826b53c04,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(618)})})}},572:function(n,e,o){o(11),n.exports=function(n){return o.e(0xf927f8900006,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(619)})})}},573:function(n,e,o){o(11),n.exports=function(n){return o.e(42232913430706,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(620)})})}},574:function(n,e,o){o(11),n.exports=function(n){return o.e(85606836738499,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(621)})})}},575:function(n,e,o){o(11),n.exports=function(n){return o.e(0x8c2422814410,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(622)})})}},576:function(n,e,o){o(11),n.exports=function(n){return o.e(0xf55d2b514be2,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(623)})})}},577:function(n,e,o){o(11),n.exports=function(n){return o.e(0xfa55f898691e,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(624)})})}},578:function(n,e,o){o(11),n.exports=function(n){return o.e(0xb0ee5a3a930b,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(625)})})}},579:function(n,e,o){o(11),n.exports=function(n){return o.e(0xa80ed06ccd7,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(626)})})}},580:function(n,e,o){o(11),n.exports=function(n){return o.e(0xade851cb8778,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(627)})})}},581:function(n,e,o){o(11),n.exports=function(n){return o.e(58365693350285,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(628)})})}},582:function(n,e,o){o(11),n.exports=function(n){return o.e(25101732451778,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(629)})})}},583:function(n,e,o){o(11),n.exports=function(n){return o.e(0xba0285b3e858,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(630)})})}},584:function(n,e,o){o(11),n.exports=function(n){return o.e(62107438614479,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(631)})})}},585:function(n,e,o){o(11),n.exports=function(n){return o.e(0xd44c59f5bd57,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(632)})})}},586:function(n,e,o){o(11),n.exports=function(n){return o.e(0x81b8806e4260,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(633)})})}},587:function(n,e,o){o(11),n.exports=function(n){return o.e(0x8beb3b6ae167,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(634)})})}},569:function(n,e,o){o(11),n.exports=function(n){return o.e(60335399758886,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(224)})})}},588:function(n,e,o){o(11),n.exports=function(n){return o.e(0xe046476a0142,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(635)})})}},589:function(n,e,o){o(11),n.exports=function(n){return o.e(0x7057b40487f7,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(636)})})}},590:function(n,e,o){o(11),n.exports=function(n){return o.e(0xe2024f56d5c1,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(637)})})}},591:function(n,e,o){o(11),n.exports=function(n){return o.e(45983417089057,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(638)})})}},592:function(n,e,o){o(11),n.exports=function(n){return o.e(0xbf4c176e203a,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(639)})})}},593:function(n,e,o){o(11),n.exports=function(n){return o.e(39525092130094,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(640)})})}},594:function(n,e,o){o(11),n.exports=function(n){return o.e(0xa2b344c6ad6b,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(641)})})}},595:function(n,e,o){o(11),n.exports=function(n){return o.e(0x7eb185819e62,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(642)})})}},596:function(n,e,o){o(11),n.exports=function(n){return o.e(0x7450814183ce,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(643)})})}},597:function(n,e,o){o(11),n.exports=function(n){return o.e(0xf17fa59adf35,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(644)})})}},598:function(n,e,o){o(11),n.exports=function(n){return o.e(0x728cb9854203,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(645)})})}},599:function(n,e,o){o(11),n.exports=function(n){return o.e(0x845ecbc32969,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(646)})})}},600:function(n,e,o){o(11),n.exports=function(n){return o.e(74558080891585,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(647)})})}},561:function(n,e,o){o(11),n.exports=function(n){return o.e(79611799117203,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(433)})})}},380:function(n,e,o){(function(n){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0,e.publicLoader=void 0;var r=o(1),a=(t(r),o(431)),u=t(a),s=o(163),i=t(s),c=o(381),l=t(c),p=void 0,f={},d={},m={},h={},g={},y=[],x=[],v={},j="",b=[],k={},C=function(n){return n&&n.default||n},N=void 0,w=!0,R=[],_={},P={},E=5;N=o(434)({getNextQueuedResources:function(){return b.slice(-1)[0]},createResourceDownload:function(n){L(n,function(){b=b.filter(function(e){return e!==n}),N.onResourcedFinished(n)})}}),i.default.on("onPreLoadPageResources",function(n){N.onPreLoadPageResources(n)}),i.default.on("onPostLoadPageResources",function(n){N.onPostLoadPageResources(n)});var S=function(n,e){return k[n]>k[e]?1:k[n]<k[e]?-1:0},O=function(n,e){return v[n]>v[e]?1:v[n]<v[e]?-1:0},L=function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(h[e])n.nextTick(function(){o(null,h[e])});else{var t=void 0;t="component---"===e.slice(0,12)?d.components[e]:"layout---"===e.slice(0,9)?d.layouts[e]:d.json[e],t(function(n,t){h[e]=t,R.push({resource:e,succeeded:!n}),P[e]||(P[e]=n),R=R.slice(-E),o(n,t)})}},T=function(e,o){g[e]?n.nextTick(function(){o(null,g[e])}):P[e]?n.nextTick(function(){o(P[e])}):L(e,function(n,t){if(n)o(n);else{var r=C(t());g[e]=r,o(n,r)}})},A=function(){var n=navigator.onLine;if("boolean"==typeof n)return n;var e=R.find(function(n){return n.succeeded});return!!e},U=function(n,e){console.log(e),_[n]||(_[n]=e),A()&&window.location.pathname.replace(/\/$/g,"")!==n.replace(/\/$/g,"")&&(window.location.pathname=n)},M=1,D={empty:function(){x=[],v={},k={},b=[],y=[],j=""},addPagesArray:function(n){y=n,j="",p=(0,u.default)(n,j)},addDevRequires:function(n){f=n},addProdRequires:function(n){d=n},dequeue:function(){return x.pop()},enqueue:function(n){var e=(0,l.default)(n,j);if(!y.some(function(n){return n.path===e}))return!1;var o=1/M;M+=1,v[e]?v[e]+=1:v[e]=1,D.has(e)||x.unshift(e),x.sort(O);var t=p(e);return t.jsonName&&(k[t.jsonName]?k[t.jsonName]+=1+o:k[t.jsonName]=1+o,b.indexOf(t.jsonName)!==-1||h[t.jsonName]||b.unshift(t.jsonName)),t.componentChunkName&&(k[t.componentChunkName]?k[t.componentChunkName]+=1+o:k[t.componentChunkName]=1+o,b.indexOf(t.componentChunkName)!==-1||h[t.jsonName]||b.unshift(t.componentChunkName)),b.sort(S),N.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:b,resourcesCount:k}},getPages:function(){return{pathArray:x,pathCount:v}},getPage:function(n){return p(n)},has:function(n){return x.some(function(e){return e===n})},getResourcesForPathname:function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};w&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(p(e)||navigator.serviceWorker.getRegistrations().then(function(n){if(n.length){for(var e=n,o=Array.isArray(e),t=0,e=o?e:e[Symbol.iterator]();;){var r;if(o){if(t>=e.length)break;r=e[t++]}else{if(t=e.next(),t.done)break;r=t.value}var a=r;a.unregister()}window.location.reload()}})),w=!1;if(_[e])return U(e,'Previously detected load failure for "'+e+'"'),o();var t=p(e);if(!t)return U(e,"A page wasn't found for \""+e+'"'),o();if(e=t.path,m[e])return n.nextTick(function(){o(m[e]),i.default.emit("onPostLoadPageResources",{page:t,pageResources:m[e]})}),m[e];i.default.emit("onPreLoadPageResources",{path:e});var r=void 0,a=void 0,u=void 0,s=function(){if(r&&a&&(!t.layoutComponentChunkName||u)){m[e]={component:r,json:a,layout:u,page:t};var n={component:r,json:a,layout:u,page:t};o(n),i.default.emit("onPostLoadPageResources",{page:t,pageResources:n})}};return T(t.componentChunkName,function(n,e){n&&U(t.path,"Loading the component for "+t.path+" failed"),r=e,s()}),T(t.jsonName,function(n,e){n&&U(t.path,"Loading the JSON for "+t.path+" failed"),a=e,s()}),void(t.layoutComponentChunkName&&T(t.layout,function(n,e){n&&U(t.path,"Loading the Layout for "+t.path+" failed"),u=e,s()}))},peek:function(n){return x.slice(-1)[0]},length:function(){return x.length},indexOf:function(n){return x.length-x.indexOf(n)-1}};e.publicLoader={getResourcesForPathname:D.getResourcesForPathname};e.default=D}).call(e,o(182))},648:function(n,e){n.exports=[{componentChunkName:"component---node-modules-gatsby-plugin-offline-app-shell-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"offline-plugin-app-shell-fallback.json",path:"/offline-plugin-app-shell-fallback/"},{componentChunkName:"component---src-templates-post-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"discourse-on-ubuntu-14-04.json",path:"/discourse-on-ubuntu-14-04"},{componentChunkName:"component---src-templates-post-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"on-reactive.json",path:"/on-reactive"},{componentChunkName:"component---src-templates-post-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"fronteers-2014-css.json",path:"/fronteers-2014-css"},{componentChunkName:"component---src-templates-post-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"utopic-dop.json",path:"/utopic-dop"},{componentChunkName:"component---src-templates-post-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"dop-wont-boot-and-usb-issues.json",path:"/dop-wont-boot-and-usb-issues"},{componentChunkName:"component---src-templates-post-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"fronteers-2014-a-glossary.json",path:"/fronteers-2014-a-glossary"},{componentChunkName:"component---src-templates-post-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"dop-ssd-update.json",path:"/dop-ssd-update"},{componentChunkName:"component---src-templates-post-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"npm-without-internet.json",path:"/npm-without-internet"},{componentChunkName:"component---src-templates-post-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"npm-workaround.json",path:"/npm-workaround"},{componentChunkName:"component---src-templates-post-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"functional-javascript-update.json",path:"/functional-javascript-update"},{componentChunkName:"component---src-templates-post-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"nbi-quickscan-app.json",path:"/nbi-quickscan-app"},{componentChunkName:"component---src-templates-post-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"full-update-for-broek.json",path:"/full-update-for-broek"},{componentChunkName:"component---src-templates-post-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"dop-beeping-hdd.json",path:"/dop-beeping-hdd"},{componentChunkName:"component---src-templates-post-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"knockout-js-and-es-6.json",path:"/knockout-js-and-es-6"},{componentChunkName:"component---src-templates-post-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"polymer-2-and-redux.json",path:"/polymer-2-and-redux"},{componentChunkName:"component---src-templates-post-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"reducing-cyclomatic-complexity-with-functional-operators.json",path:"/reducing-cyclomatic-complexity-with-functional-operators"},{componentChunkName:"component---src-templates-post-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"polymer-2-and-type-script.json",path:"/polymer-2-and-type-script"},{componentChunkName:"component---src-templates-post-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"site-updated.json",path:"/site-updated"},{componentChunkName:"component---src-templates-post-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"elm-for-front-end-developers.json",path:"/elm-for-front-end-developers"},{componentChunkName:"component---src-templates-post-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"apollo-client-in-practice.json",path:"/apollo-client-in-practice"},{componentChunkName:"component---src-templates-post-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"gaining-root-access-to-smart-home-gateway.json",path:"/gaining-root-access-to-smart-home-gateway"},{componentChunkName:"component---src-templates-tag-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-mypc.json",path:"/tags/mypc/"},{componentChunkName:"component---src-templates-tag-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-webdevelopment.json",path:"/tags/webdevelopment/"},{componentChunkName:"component---src-templates-category-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"categories-mypc.json",path:"/categories/mypc/"},{componentChunkName:"component---src-templates-category-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"categories-webdevelopment.json",path:"/categories/webdevelopment/"},{componentChunkName:"component---src-pages-404-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-about-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"about.json",path:"/about/"},{componentChunkName:"component---src-pages-index-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-mypc-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"mypc.json",path:"/mypc/"},{componentChunkName:"component---src-pages-404-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"404-html.json",path:"/404.html"}]},434:function(n,e){"use strict";n.exports=function(n){var e=n.getNextQueuedResources,o=n.createResourceDownload,t=[],r=[],a=function(){var n=e();n&&(r.push(n),o(n))},u=function(n){switch(n.type){case"RESOURCE_FINISHED":r=r.filter(function(e){return e!==n.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":t.push(n.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":t=t.filter(function(e){return e!==n.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===r.length&&0===t.length&&a()},0)};return{onResourcedFinished:function(n){u({type:"RESOURCE_FINISHED",payload:n})},onPreLoadPageResources:function(n){u({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:n})},onPostLoadPageResources:function(n){u({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:n})},onNewResourcesAdded:function(){u({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:t,resourcesDownloading:r}},empty:function(){t=[],r=[]}}}},0:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var r=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(n[t]=o[t])}return n},a=o(189),u=o(1),s=t(u),i=o(5),c=t(i),l=o(188),p=o(610),f=o(545),d=t(f),m=o(223),h=o(432),g=t(h),y=o(163),x=t(y),v=o(648),j=t(v),b=o(649),k=t(b),C=o(430),N=t(C),w=o(429),R=t(w),_=o(380),P=t(_);o(467),window.___history=g.default,window.___emitter=x.default,P.default.addPagesArray(j.default),P.default.addProdRequires(R.default),window.asyncRequires=R.default,window.___loader=P.default,window.matchPath=l.matchPath;var E=k.default.reduce(function(n,e){return n[e.fromPath]=e,n},{}),S=function(n){var e=E[n];return null!=e&&(g.default.replace(e.toPath),!0)};S(window.location.pathname),(0,a.apiRunnerAsync)("onClientEntry").then(function(){function n(n){window.___history&&i!==!1||(window.___history=n,i=!0,n.listen(function(n,e){S(n.pathname)||setTimeout(function(){(0,a.apiRunner)("onRouteUpdate",{location:n,action:e})},0)}))}function e(n,e){var o=e.location.pathname,t=(0,a.apiRunner)("shouldUpdateScroll",{prevRouterProps:n,pathname:o});if(t.length>0)return t[0];if(n){var r=n.location.pathname;if(r===o)return!1}return!0}(0,a.apiRunner)("registerServiceWorker").length>0&&o(435);var t=function(n){function e(n){n.page.path===P.default.getPage(t).path&&(x.default.off("onPostLoadPageResources",e),clearTimeout(u),window.___history.push(o))}var o=(0,m.createLocation)(n,null,null,g.default.location),t=o.pathname,r=E[t];r&&(t=r.toPath);var a=window.location;if(a.pathname!==o.pathname||a.search!==o.search||a.hash!==o.hash){var u=setTimeout(function(){x.default.off("onPostLoadPageResources",e),x.default.emit("onDelayedLoadPageResources",{pathname:t}),window.___history.push(o)},1e3);P.default.getResourcesForPathname(t)?(clearTimeout(u),window.___history.push(o)):x.default.on("onPostLoadPageResources",e)}};window.___navigateTo=t,(0,a.apiRunner)("onRouteUpdate",{location:g.default.location,action:g.default.action});var i=!1,f=(0,a.apiRunner)("replaceRouterComponent",{history:g.default})[0],h=function(n){var e=n.children;return s.default.createElement(l.Router,{history:g.default},e)},y=(0,l.withRouter)(N.default);P.default.getResourcesForPathname(window.location.pathname,function(){var o=function(){return(0,u.createElement)(f?f:h,null,(0,u.createElement)(p.ScrollContext,{shouldUpdateScroll:e},(0,u.createElement)(y,{layout:!0,children:function(e){return(0,u.createElement)(l.Route,{render:function(o){n(o.history);var t=e?e:o;return P.default.getPage(t.location.pathname)?(0,u.createElement)(N.default,r({page:!0},t)):(0,u.createElement)(N.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},t=(0,a.apiRunner)("wrapRootComponent",{Root:o},o)[0];(0,d.default)(function(){return c.default.render(s.default.createElement(t,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,a.apiRunner)("onInitialClientRender")})})})})},649:function(n,e){n.exports=[]},435:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var r=o(163),a=t(r),u="/";u="/","serviceWorker"in navigator&&navigator.serviceWorker.register(u+"sw.js").then(function(n){n.addEventListener("updatefound",function(){var e=n.installing;console.log("installingWorker",e),e.addEventListener("statechange",function(){switch(e.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),a.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(n){console.error("Error during service worker registration:",n)})},381:function(n,e){"use strict";e.__esModule=!0,e.default=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return n.substr(0,e.length)===e?n.slice(e.length):n},n.exports=e.default},545:function(n,e,o){!function(e,o){n.exports=o()}("domready",function(){var n,e=[],o=document,t=o.documentElement.doScroll,r="DOMContentLoaded",a=(t?/^loaded|^c/:/^loaded|^i|^c/).test(o.readyState);return a||o.addEventListener(r,n=function(){for(o.removeEventListener(r,n),a=1;n=e.shift();)n()}),function(n){a?setTimeout(n,0):e.push(n)}})},11:function(n,e,o){"use strict";function t(){function n(n){var e=t.lastChild;return"SCRIPT"!==e.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",e)):void(e.onload=e.onerror=function(){e.onload=e.onerror=null,setTimeout(n,0)})}var e,t=document.querySelector("head"),r=o.e,a=o.s;o.e=function(t,u){var s=!1,i=!0,c=function(n){u&&(u(o,n),u=null)};return!a&&e&&e[t]?void c(!0):(r(t,function(){s||(s=!0,i?setTimeout(function(){c()}):c())}),void(s||(i=!1,n(function(){s||(s=!0,a?a[t]=void 0:(e||(e={}),e[t]=!0),c(!0))}))))}}t()},601:function(n,e,o){"use strict";var t=o(49);n.exports=function(n,e){n.addEventListener("click",function(n){if(0!==n.button||n.altKey||n.ctrlKey||n.metaKey||n.shiftKey||n.defaultPrevented)return!0;for(var o=null,r=n.target;r.parentNode;r=r.parentNode)if("A"===r.nodeName){o=r;break}if(!o)return!0;if(o.target&&"_self"!==o.target.toLowerCase())return!0;if(o.pathname===window.location.pathname&&""!==o.hash)return!0;if(""===o.pathname)return!0;if(o.pathname.search(/^.*\.((?!htm)[a-z0-9]{1,5})$/i)!==-1)return!0;var a=document.createElement("a");a.href=o.href;var u=document.createElement("a");if(u.href=window.location.href,a.host!==u.host)return!0;var s=new RegExp("^"+u.host+(0,t.withPrefix)("/"));return!s.test(""+a.host+a.pathname)||(n.preventDefault(),e(o.getAttribute("href")),!1)})}},602:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var r=o(49),a=o(601),u=t(a);e.onClientEntry=function(){(0,u.default)(window,function(n){(0,r.navigateTo)(n)})}},603:function(n,e,o){"use strict";e.onRouteUpdate=function(n){var e=n.location;"function"==typeof ga&&(window.ga("set","page",e?e.pathname+e.search+e.hash:void 0),window.ga("send","pageview"))}},604:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var r=o(104),a=t(r),u=o(662),s=t(u),i={color:"#29d"};e.onClientEntry=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=(0,a.default)({},i,e);window.___emitter.on("onDelayedLoadPageResources",function(){s.default.configure(o),s.default.start()}),window.___emitter.on("onPostLoadPageResources",function(){s.default.done()});var t="\n    #nprogress {\n     pointer-events: none;\n    }\n    #nprogress .bar {\n      background: "+o.color+";\n      position: fixed;\n      z-index: 1031;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 2px;\n    }\n    #nprogress .peg {\n      display: block;\n      position: absolute;\n      right: 0px;\n      width: 100px;\n      height: 100%;\n      box-shadow: 0 0 10px "+o.color+", 0 0 5px "+o.color+";\n      opacity: 1.0;\n      -webkit-transform: rotate(3deg) translate(0px, -4px);\n      -ms-transform: rotate(3deg) translate(0px, -4px);\n      transform: rotate(3deg) translate(0px, -4px);\n    }\n    #nprogress .spinner {\n      display: block;\n      position: fixed;\n      z-index: 1031;\n      top: 15px;\n      right: 15px;\n    }\n    #nprogress .spinner-icon {\n      width: 18px;\n      height: 18px;\n      box-sizing: border-box;\n      border: solid 2px transparent;\n      border-top-color: "+o.color+";\n      border-left-color: "+o.color+";\n      border-radius: 50%;\n      -webkit-animation: nprogress-spinner 400ms linear infinite;\n      animation: nprogress-spinner 400ms linear infinite;\n    }\n    .nprogress-custom-parent {\n      overflow: hidden;\n      position: relative;\n    }\n    .nprogress-custom-parent #nprogress .spinner,\n    .nprogress-custom-parent #nprogress .bar {\n      position: absolute;\n    }\n    @-webkit-keyframes nprogress-spinner {\n      0% {\n        -webkit-transform: rotate(0deg);\n      }\n      100% {\n        -webkit-transform: rotate(360deg);\n      }\n    }\n    @keyframes nprogress-spinner {\n      0% {\n        transform: rotate(0deg);\n      }\n      100% {\n        transform: rotate(360deg);\n      }\n    }\n",r=document.createElement("style");r.id="nprogress-styles",
r.innerHTML=t,document.head.appendChild(r)}},560:function(n,e,o){o(11),n.exports=function(n){return o.e(99219681209289,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(605)})})}},606:function(n,e){"use strict";e.registerServiceWorker=function(){return!0}},611:function(n,e,o){"use strict";var t=function(n){setTimeout(function(){var e=window.decodeURI(window.location.hash.replace("#",""));if(""!==e){var o=document.getElementById(e);if(o){var t=o.offsetTop;window.scrollTo(0,t-n)}}},10)};e.onClientEntry=function(n,e){var o=0;e.offsetY&&(o=e.offsetY)},e.onRouteUpdate=function(n,e){var o=0;e.offsetY&&(o=e.offsetY),t(o)}},660:function(n,e){function o(n){return n=n||Object.create(null),{on:function(e,o){(n[e]||(n[e]=[])).push(o)},off:function(e,o){n[e]&&n[e].splice(n[e].indexOf(o)>>>0,1)},emit:function(e,o){(n[e]||[]).slice().map(function(n){n(o)}),(n["*"]||[]).slice().map(function(n){n(e,o)})}}}n.exports=o},662:function(n,e,o){var t,r;!function(a,u){t=u,r="function"==typeof t?t.call(e,o,e,n):t,!(void 0!==r&&(n.exports=r))}(this,function(){function n(n,e,o){return n<e?e:n>o?o:n}function e(n){return 100*(-1+n)}function o(n,o,t){var r;return r="translate3d"===c.positionUsing?{transform:"translate3d("+e(n)+"%,0,0)"}:"translate"===c.positionUsing?{transform:"translate("+e(n)+"%,0)"}:{"margin-left":e(n)+"%"},r.transition="all "+o+"ms "+t,r}function t(n,e){var o="string"==typeof n?n:u(n);return o.indexOf(" "+e+" ")>=0}function r(n,e){var o=u(n),r=o+e;t(o,e)||(n.className=r.substring(1))}function a(n,e){var o,r=u(n);t(n,e)&&(o=r.replace(" "+e+" "," "),n.className=o.substring(1,o.length-1))}function u(n){return(" "+(n.className||"")+" ").replace(/\s+/gi," ")}function s(n){n&&n.parentNode&&n.parentNode.removeChild(n)}var i={};i.version="0.2.0";var c=i.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};i.configure=function(n){var e,o;for(e in n)o=n[e],void 0!==o&&n.hasOwnProperty(e)&&(c[e]=o);return this},i.status=null,i.set=function(e){var t=i.isStarted();e=n(e,c.minimum,1),i.status=1===e?null:e;var r=i.render(!t),a=r.querySelector(c.barSelector),u=c.speed,s=c.easing;return r.offsetWidth,l(function(n){""===c.positionUsing&&(c.positionUsing=i.getPositioningCSS()),p(a,o(e,u,s)),1===e?(p(r,{transition:"none",opacity:1}),r.offsetWidth,setTimeout(function(){p(r,{transition:"all "+u+"ms linear",opacity:0}),setTimeout(function(){i.remove(),n()},u)},u)):setTimeout(n,u)}),this},i.isStarted=function(){return"number"==typeof i.status},i.start=function(){i.status||i.set(0);var n=function(){setTimeout(function(){i.status&&(i.trickle(),n())},c.trickleSpeed)};return c.trickle&&n(),this},i.done=function(n){return n||i.status?i.inc(.3+.5*Math.random()).set(1):this},i.inc=function(e){var o=i.status;return o?("number"!=typeof e&&(e=(1-o)*n(Math.random()*o,.1,.95)),o=n(o+e,0,.994),i.set(o)):i.start()},i.trickle=function(){return i.inc(Math.random()*c.trickleRate)},function(){var n=0,e=0;i.promise=function(o){return o&&"resolved"!==o.state()?(0===e&&i.start(),n++,e++,o.always(function(){e--,0===e?(n=0,i.done()):i.set((n-e)/n)}),this):this}}(),i.render=function(n){if(i.isRendered())return document.getElementById("nprogress");r(document.documentElement,"nprogress-busy");var o=document.createElement("div");o.id="nprogress",o.innerHTML=c.template;var t,a=o.querySelector(c.barSelector),u=n?"-100":e(i.status||0),l=document.querySelector(c.parent);return p(a,{transition:"all 0 linear",transform:"translate3d("+u+"%,0,0)"}),c.showSpinner||(t=o.querySelector(c.spinnerSelector),t&&s(t)),l!=document.body&&r(l,"nprogress-custom-parent"),l.appendChild(o),o},i.remove=function(){a(document.documentElement,"nprogress-busy"),a(document.querySelector(c.parent),"nprogress-custom-parent");var n=document.getElementById("nprogress");n&&s(n)},i.isRendered=function(){return!!document.getElementById("nprogress")},i.getPositioningCSS=function(){var n=document.body.style,e="WebkitTransform"in n?"Webkit":"MozTransform"in n?"Moz":"msTransform"in n?"ms":"OTransform"in n?"O":"";return e+"Perspective"in n?"translate3d":e+"Transform"in n?"translate":"margin"};var l=function(){function n(){var o=e.shift();o&&o(n)}var e=[];return function(o){e.push(o),1==e.length&&n()}}(),p=function(){function n(n){return n.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(n,e){return e.toUpperCase()})}function e(n){var e=document.body.style;if(n in e)return n;for(var o,t=r.length,a=n.charAt(0).toUpperCase()+n.slice(1);t--;)if(o=r[t]+a,o in e)return o;return n}function o(o){return o=n(o),a[o]||(a[o]=e(o))}function t(n,e,t){e=o(e),n.style[e]=t}var r=["Webkit","O","Moz","ms"],a={};return function(n,e){var o,r,a=arguments;if(2==a.length)for(o in e)r=e[o],void 0!==r&&e.hasOwnProperty(o)&&t(n,o,r);else t(n,a[1],a[2])}}();return i})},763:function(n,e){"use strict";function o(n,e){for(var o in n)if(!(o in e))return!0;for(var t in e)if(n[t]!==e[t])return!0;return!1}e.__esModule=!0,e.default=function(n,e,t){return o(n.props,e)||o(n.state,t)},n.exports=e.default},562:function(n,e,o){o(11),n.exports=function(n){return o.e(0xa6bc690a59e9,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(452)})})}},563:function(n,e,o){o(11),n.exports=function(n){return o.e(0x83323ebd9d39,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(453)})})}},564:function(n,e,o){o(11),n.exports=function(n){return o.e(0xc23565d713b7,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(454)})})}},565:function(n,e,o){o(11),n.exports=function(n){return o.e(71589287150858,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(455)})})}},566:function(n,e,o){o(11),n.exports=function(n){return o.e(0x7600c7af1a80,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(456)})})}},567:function(n,e,o){o(11),n.exports=function(n){return o.e(0xc1d74b0851a0,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(457)})})}},568:function(n,e,o){o(11),n.exports=function(n){return o.e(0xa6cd3c51205b,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(458)})})}}});
//# sourceMappingURL=app-d9ed888935db49567ec2.js.map