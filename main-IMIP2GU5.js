import{$ as me,A as ie,J as h,K as v,L as T,N as te,P as g,S as J,U as de,Z as fe,aa as pe,ba as ve,c as _e,ca as be,d as Me,da as he,ea as ye,fa as ge,ga as we,ha as xe,ia as re,o as Z,x as ue}from"./chunk-HXGPADJQ.js";var Ae=_e((ne,le)=>{"use strict";(function(s,n){typeof ne=="object"&&typeof le=="object"?le.exports=n():typeof define=="function"&&define.amd?define([],n):typeof ne=="object"?ne.AOS=n():s.AOS=n()})(ne,function(){return function(s){function n(t){if(c[t])return c[t].exports;var o=c[t]={exports:{},id:t,loaded:!1};return s[t].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var c={};return n.m=s,n.c=c,n.p="dist/",n(0)}([function(s,n,c){"use strict";function t(r){return r&&r.__esModule?r:{default:r}}var o=Object.assign||function(r){for(var E=1;E<arguments.length;E++){var L=arguments[E];for(var I in L)Object.prototype.hasOwnProperty.call(L,I)&&(r[I]=L[I])}return r},f=c(1),k=(t(f),c(6)),a=t(k),b=c(7),l=t(b),d=c(8),u=t(d),y=c(9),O=t(y),_=c(10),G=t(_),Q=c(11),U=t(Q),X=c(14),K=t(X),M=[],V=!1,w={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},D=function(){var r=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(r&&(V=!0),V)return M=(0,U.default)(M,w),(0,G.default)(M,w.once),M},F=function(){M=(0,K.default)(),D()},i=function(){M.forEach(function(r,E){r.node.removeAttribute("data-aos"),r.node.removeAttribute("data-aos-easing"),r.node.removeAttribute("data-aos-duration"),r.node.removeAttribute("data-aos-delay")})},e=function(r){return r===!0||r==="mobile"&&O.default.mobile()||r==="phone"&&O.default.phone()||r==="tablet"&&O.default.tablet()||typeof r=="function"&&r()===!0},m=function(r){w=o(w,r),M=(0,K.default)();var E=document.all&&!window.atob;return e(w.disable)||E?i():(w.disableMutationObserver||u.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),w.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",w.easing),document.querySelector("body").setAttribute("data-aos-duration",w.duration),document.querySelector("body").setAttribute("data-aos-delay",w.delay),w.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?D(!0):w.startEvent==="load"?window.addEventListener(w.startEvent,function(){D(!0)}):document.addEventListener(w.startEvent,function(){D(!0)}),window.addEventListener("resize",(0,l.default)(D,w.debounceDelay,!0)),window.addEventListener("orientationchange",(0,l.default)(D,w.debounceDelay,!0)),window.addEventListener("scroll",(0,a.default)(function(){(0,G.default)(M,w.once)},w.throttleDelay)),w.disableMutationObserver||u.default.ready("[data-aos]",F),M)};s.exports={init:m,refresh:D,refreshHard:F}},function(s,n){},,,,,function(s,n){(function(c){"use strict";function t(e,m,r){function E(p){var A=z,W=P;return z=P=void 0,R=p,j=e.apply(W,A)}function L(p){return R=p,S=setTimeout(Y,m),$?E(p):j}function I(p){var A=p-C,W=p-R,se=m-A;return H?F(se,q-W):se}function B(p){var A=p-C,W=p-R;return C===void 0||A>=m||A<0||H&&W>=q}function Y(){var p=i();return B(p)?oe(p):void(S=setTimeout(Y,I(p)))}function oe(p){return S=void 0,x&&z?E(p):(z=P=void 0,j)}function ce(){S!==void 0&&clearTimeout(S),R=0,z=C=P=S=void 0}function ee(){return S===void 0?j:oe(i())}function N(){var p=i(),A=B(p);if(z=arguments,P=this,C=p,A){if(S===void 0)return L(C);if(H)return S=setTimeout(Y,m),E(C)}return S===void 0&&(S=setTimeout(Y,m)),j}var z,P,q,j,S,C,R=0,$=!1,H=!1,x=!0;if(typeof e!="function")throw new TypeError(d);return m=b(m)||0,f(r)&&($=!!r.leading,H="maxWait"in r,q=H?D(b(r.maxWait)||0,m):q,x="trailing"in r?!!r.trailing:x),N.cancel=ce,N.flush=ee,N}function o(e,m,r){var E=!0,L=!0;if(typeof e!="function")throw new TypeError(d);return f(r)&&(E="leading"in r?!!r.leading:E,L="trailing"in r?!!r.trailing:L),t(e,m,{leading:E,maxWait:m,trailing:L})}function f(e){var m=typeof e>"u"?"undefined":l(e);return!!e&&(m=="object"||m=="function")}function k(e){return!!e&&(typeof e>"u"?"undefined":l(e))=="object"}function a(e){return(typeof e>"u"?"undefined":l(e))=="symbol"||k(e)&&w.call(e)==y}function b(e){if(typeof e=="number")return e;if(a(e))return u;if(f(e)){var m=typeof e.valueOf=="function"?e.valueOf():e;e=f(m)?m+"":m}if(typeof e!="string")return e===0?e:+e;e=e.replace(O,"");var r=G.test(e);return r||Q.test(e)?U(e.slice(2),r?2:8):_.test(e)?u:+e}var l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d="Expected a function",u=NaN,y="[object Symbol]",O=/^\s+|\s+$/g,_=/^[-+]0x[0-9a-f]+$/i,G=/^0b[01]+$/i,Q=/^0o[0-7]+$/i,U=parseInt,X=(typeof c>"u"?"undefined":l(c))=="object"&&c&&c.Object===Object&&c,K=(typeof self>"u"?"undefined":l(self))=="object"&&self&&self.Object===Object&&self,M=X||K||Function("return this")(),V=Object.prototype,w=V.toString,D=Math.max,F=Math.min,i=function(){return M.Date.now()};s.exports=o}).call(n,function(){return this}())},function(s,n){(function(c){"use strict";function t(i,e,m){function r(x){var p=N,A=z;return N=z=void 0,C=x,q=i.apply(A,p)}function E(x){return C=x,j=setTimeout(B,e),R?r(x):q}function L(x){var p=x-S,A=x-C,W=e-p;return $?D(W,P-A):W}function I(x){var p=x-S,A=x-C;return S===void 0||p>=e||p<0||$&&A>=P}function B(){var x=F();return I(x)?Y(x):void(j=setTimeout(B,L(x)))}function Y(x){return j=void 0,H&&N?r(x):(N=z=void 0,q)}function oe(){j!==void 0&&clearTimeout(j),C=0,N=S=z=j=void 0}function ce(){return j===void 0?q:Y(F())}function ee(){var x=F(),p=I(x);if(N=arguments,z=this,S=x,p){if(j===void 0)return E(S);if($)return j=setTimeout(B,e),r(S)}return j===void 0&&(j=setTimeout(B,e)),q}var N,z,P,q,j,S,C=0,R=!1,$=!1,H=!0;if(typeof i!="function")throw new TypeError(l);return e=a(e)||0,o(m)&&(R=!!m.leading,$="maxWait"in m,P=$?w(a(m.maxWait)||0,e):P,H="trailing"in m?!!m.trailing:H),ee.cancel=oe,ee.flush=ce,ee}function o(i){var e=typeof i>"u"?"undefined":b(i);return!!i&&(e=="object"||e=="function")}function f(i){return!!i&&(typeof i>"u"?"undefined":b(i))=="object"}function k(i){return(typeof i>"u"?"undefined":b(i))=="symbol"||f(i)&&V.call(i)==u}function a(i){if(typeof i=="number")return i;if(k(i))return d;if(o(i)){var e=typeof i.valueOf=="function"?i.valueOf():i;i=o(e)?e+"":e}if(typeof i!="string")return i===0?i:+i;i=i.replace(y,"");var m=_.test(i);return m||G.test(i)?Q(i.slice(2),m?2:8):O.test(i)?d:+i}var b=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},l="Expected a function",d=NaN,u="[object Symbol]",y=/^\s+|\s+$/g,O=/^[-+]0x[0-9a-f]+$/i,_=/^0b[01]+$/i,G=/^0o[0-7]+$/i,Q=parseInt,U=(typeof c>"u"?"undefined":b(c))=="object"&&c&&c.Object===Object&&c,X=(typeof self>"u"?"undefined":b(self))=="object"&&self&&self.Object===Object&&self,K=U||X||Function("return this")(),M=Object.prototype,V=M.toString,w=Math.max,D=Math.min,F=function(){return K.Date.now()};s.exports=t}).call(n,function(){return this}())},function(s,n){"use strict";function c(b){var l=void 0,d=void 0,u=void 0;for(l=0;l<b.length;l+=1)if(d=b[l],d.dataset&&d.dataset.aos||(u=d.children&&c(d.children)))return!0;return!1}function t(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function o(){return!!t()}function f(b,l){var d=window.document,u=t(),y=new u(k);a=l,y.observe(d.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function k(b){b&&b.forEach(function(l){var d=Array.prototype.slice.call(l.addedNodes),u=Array.prototype.slice.call(l.removedNodes),y=d.concat(u);if(c(y))return a()})}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){};n.default={isSupported:o,ready:f}},function(s,n){"use strict";function c(d,u){if(!(d instanceof u))throw new TypeError("Cannot call a class as a function")}function t(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function d(u,y){for(var O=0;O<y.length;O++){var _=y[O];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(u,_.key,_)}}return function(u,y,O){return y&&d(u.prototype,y),O&&d(u,O),u}}(),f=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,k=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,a=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,b=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,l=function(){function d(){c(this,d)}return o(d,[{key:"phone",value:function(){var u=t();return!(!f.test(u)&&!k.test(u.substr(0,4)))}},{key:"mobile",value:function(){var u=t();return!(!a.test(u)&&!b.test(u.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),d}();n.default=new l},function(s,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var c=function(o,f,k){var a=o.node.getAttribute("data-aos-once");f>o.position?o.node.classList.add("aos-animate"):typeof a<"u"&&(a==="false"||!k&&a!=="true")&&o.node.classList.remove("aos-animate")},t=function(o,f){var k=window.pageYOffset,a=window.innerHeight;o.forEach(function(b,l){c(b,a+k,f)})};n.default=t},function(s,n,c){"use strict";function t(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(n,"__esModule",{value:!0});var o=c(12),f=t(o),k=function(a,b){return a.forEach(function(l,d){l.node.classList.add("aos-init"),l.position=(0,f.default)(l.node,b.offset)}),a};n.default=k},function(s,n,c){"use strict";function t(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(n,"__esModule",{value:!0});var o=c(13),f=t(o),k=function(a,b){var l=0,d=0,u=window.innerHeight,y={offset:a.getAttribute("data-aos-offset"),anchor:a.getAttribute("data-aos-anchor"),anchorPlacement:a.getAttribute("data-aos-anchor-placement")};switch(y.offset&&!isNaN(y.offset)&&(d=parseInt(y.offset)),y.anchor&&document.querySelectorAll(y.anchor)&&(a=document.querySelectorAll(y.anchor)[0]),l=(0,f.default)(a).top,y.anchorPlacement){case"top-bottom":break;case"center-bottom":l+=a.offsetHeight/2;break;case"bottom-bottom":l+=a.offsetHeight;break;case"top-center":l+=u/2;break;case"bottom-center":l+=u/2+a.offsetHeight;break;case"center-center":l+=u/2+a.offsetHeight/2;break;case"top-top":l+=u;break;case"bottom-top":l+=a.offsetHeight+u;break;case"center-top":l+=a.offsetHeight/2+u}return y.anchorPlacement||y.offset||isNaN(b)||(d=b),l+d};n.default=k},function(s,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var c=function(t){for(var o=0,f=0;t&&!isNaN(t.offsetLeft)&&!isNaN(t.offsetTop);)o+=t.offsetLeft-(t.tagName!="BODY"?t.scrollLeft:0),f+=t.offsetTop-(t.tagName!="BODY"?t.scrollTop:0),t=t.offsetParent;return{top:f,left:o}};n.default=c},function(s,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var c=function(t){return t=t||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(t,function(o){return{node:o}})};n.default=c}])})});var ke=[{path:"home",loadComponent:()=>import("./chunk-VTYWGNVU.js").then(s=>s.HomeComponent)},{path:"contacto",loadComponent:()=>import("./chunk-6UXIAEFR.js").then(s=>s.ContactoComponent)},{path:"",redirectTo:"home",pathMatch:"full"},{path:"**",redirectTo:"home",pathMatch:"full"}];var Se={providers:[de({eventCoalescing:!0}),xe(ke),be(),me(pe())]};var Ee=(()=>{let n=class n{constructor(t){this.router=t,this.email="redes.sociales@anypack.mx"}scrollToSection(t){this.router.url!=="/home"?this.router.navigate(["/home"]).then(()=>{this.scrollToSectionAfterNavigation(t)}):this.scrollToSectionAfterNavigation(t)}scrollToSectionAfterNavigation(t){setTimeout(()=>{let o=document.getElementById(t);o&&o.scrollIntoView({behavior:"smooth"})},100)}scrollTop(){setTimeout(()=>{window.scrollTo({top:0,behavior:"smooth"})},50)}};n.\u0275fac=function(o){return new(o||n)(ie(ye))},n.\u0275cmp=Z({type:n,selectors:[["app-header"]],standalone:!0,features:[J],decls:20,vars:0,consts:[[1,"container-fluid","position-relative","nav-bar","p-0","position-fixed","fixed-top"],[1,"container-lg","position-relative","p-0","px-lg-3",2,"z-index","9"],[1,"navbar","navbar-expand-lg","bg-light","navbar-light","shadow-lg","py-3","py-lg-0","pl-3","pl-lg-5"],["href","",1,"navbar-brand"],[1,"m-0","text-primary"],[1,"text-dark"],["type","button","data-toggle","collapse","data-target","#navbarCollapse",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarCollapse",1,"collapse","navbar-collapse","justify-content-between","px-3"],[1,"navbar-nav","ml-auto","py-0"],["routerLinkActive","active","routerLink","/home",1,"nav-item","nav-link",3,"click"],[1,"nav-item","nav-link",2,"cursor","pointer",3,"click"],["routerLinkActive","active","routerLink","/contacto",1,"nav-item","nav-link",3,"click"]],template:function(o,f){o&1&&(h(0,"div",0)(1,"div",1)(2,"nav",2)(3,"a",3)(4,"h1",4)(5,"span",5),g(6,"Any Pack"),v(),g(7," Any Sizes"),v()(),h(8,"button",6),T(9,"span",7),v(),h(10,"div",8)(11,"div",9)(12,"a",10),te("click",function(){return f.scrollTop()}),g(13,"Inicio"),v(),h(14,"a",11),te("click",function(){return f.scrollToSection("about")}),g(15,"Acerca de"),v(),h(16,"a",11),te("click",function(){return f.scrollToSection("services")}),g(17,"Servicios"),v(),h(18,"a",12),te("click",function(){return f.scrollTop()}),g(19,"Contacto"),v()()()()()())},dependencies:[re,ge,we]});let s=n;return s})();var Oe=(()=>{let n=class n{constructor(){this.email="redes.sociales@anypack.mx"}};n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=Z({type:n,selectors:[["app-footer"]],standalone:!0,features:[J],decls:57,vars:0,consts:[[1,"container-fluid","bg-dark","text-white-50","py-5","px-sm-3","px-lg-5",2,"margin-top","90px"],[1,"row","pt-5"],[1,"col-lg-4","col-md-6","mb-5"],["href","",1,"navbar-brand"],[1,"text-primary"],[1,"text-white"],[1,"text-white","text-uppercase","mt-4","mb-3",2,"letter-spacing","5px"],[1,"d-flex","justify-content-start"],["href","#",1,"btn","btn-outline-primary","btn-square","mr-2"],[1,"fab","fa-twitter"],[1,"fab","fa-facebook-f"],[1,"fab","fa-linkedin-in"],["href","#",1,"btn","btn-outline-primary","btn-square"],[1,"fab","fa-instagram"],[1,"text-white","text-uppercase","mb-4",2,"letter-spacing","5px"],[1,"d-flex","flex-column","justify-content-start"],["href","#",1,"text-white-50","mb-2"],[1,"fa","fa-angle-right","mr-2"],[1,"container-fluid","bg-dark","text-white","border-top","py-4","px-sm-3","px-md-5",2,"border-color","rgba(256, 256, 256, .1) !important"],[1,"row"],[1,"col-lg-6","text-center","text-md-left","mb-3","mb-md-0"],[1,"m-0","text-white-50"],["href","#"],[1,"col-lg-6","text-center","text-md-right"],["href","https://htmlcodex.com"]],template:function(o,f){o&1&&(h(0,"div",0)(1,"div",1)(2,"div",2)(3,"a",3)(4,"h1",4)(5,"span",5),g(6,"Any"),v(),g(7," Pack"),v()(),h(8,"p"),g(9,"En Guajiro Anypack Any Sizes, ofrecemos bolsas de alta calidad para todas tus necesidades, con un enfoque en la sostenibilidad y la personalizaci\xF3n."),v(),h(10,"h6",6),g(11,"S\xEDguenos"),v(),h(12,"div",7)(13,"a",8),T(14,"i",9),v(),h(15,"a",8),T(16,"i",10),v(),h(17,"a",8),T(18,"i",11),v(),h(19,"a",12),T(20,"i",13),v()()(),h(21,"div",2)(22,"h5",14),g(23,"Nuestros Servicios"),v(),h(24,"div",15)(25,"a",16),T(26,"i",17),g(27,"Acerca de"),v(),h(28,"a",16),T(29,"i",17),g(30,"Servicios"),v(),h(31,"a",16),T(32,"i",17),g(33,"Contacto"),v()()(),h(34,"div",2)(35,"h5",14),g(36,"Enlaces \xDAtiles"),v(),h(37,"div",15)(38,"a",16),T(39,"i",17),g(40,"Pol\xEDtica de Privacidad"),v(),h(41,"a",16),T(42,"i",17),g(43,"T\xE9rminos y Condiciones"),v()()()()(),h(44,"div",18)(45,"div",19)(46,"div",20)(47,"p",21),g(48,"\xA9 "),h(49,"a",22),g(50,"Any Pack Any Sizes"),v(),g(51,". Todos los derechos reservados."),v()(),h(52,"div",23)(53,"p",21),g(54,"Dise\xF1ado por "),h(55,"a",24),g(56,"HTML Codex"),v()()()()())},dependencies:[re]});let s=n;return s})();var ae=Me(Ae());var Te=(()=>{let n=class n{constructor(t){this.platformId=t,this.title="anypackweb"}ngOnInit(){fe(this.platformId)&&setTimeout(()=>{ae.init({duration:1e3,once:!0}),window.addEventListener("load",()=>{ae.refresh()})},500)}};n.\u0275fac=function(o){return new(o||n)(ie(ue))},n.\u0275cmp=Z({type:n,selectors:[["app-root"]],standalone:!0,features:[J],decls:3,vars:0,template:function(o,f){o&1&&T(0,"app-header")(1,"router-outlet")(2,"app-footer")},dependencies:[he,Ee,Oe]});let s=n;return s})();ve(Te,Se).catch(s=>console.error(s));