const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.BkVRkJ82.js","../chunks/scheduler.NrZV1iTz.js","../chunks/index.BgDuTIW7.js","../chunks/paths.B0nFUmOM.js","../assets/0.DBj8YpK5.css","../nodes/1.SbNX-RTy.js","../chunks/entry.CHJZt5eq.js","../nodes/2.DHe-f7Tl.js","../assets/2.DYLoG_85.css","../nodes/3.BiiUd-TO.js","../chunks/user.D4uVB5ZR.js","../assets/3.BnrmXLZu.css","../nodes/4.BuCQvxHl.js","../assets/4.DNcxv06O.css","../nodes/5.CXOLfoor.js","../assets/5.Dbfye1AS.css"])))=>i.map(i=>d[i]);
import{s as N,e as q,o as U,f as I,t as j}from"../chunks/scheduler.NrZV1iTz.js";import{S as z,i as F,s as G,x as p,f as W,g as k,y as h,z as D,A as g,d as w,e as H,c as J,a as K,n as O,r as d,t as Q,b as X,j as Y,B as S,C as P,D as R,E as T,F as L,G as A}from"../chunks/index.BgDuTIW7.js";const Z="modulepreload",M=function(o,e){return new URL(o,e).href},V={},y=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){const t=document.getElementsByTagName("link"),i=document.querySelector("meta[property=csp-nonce]"),l=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));s=Promise.allSettled(n.map(f=>{if(f=M(f,r),f in V)return;V[f]=!0;const a=f.endsWith(".css"),_=a?'[rel="stylesheet"]':"";if(!!r)for(let E=t.length-1;E>=0;E--){const v=t[E];if(v.href===f&&(!a||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${_}`))return;const m=document.createElement("link");if(m.rel=a?"stylesheet":Z,a||(m.as="script"),m.crossOrigin="",m.href=f,l&&m.setAttribute("nonce",l),document.head.appendChild(m),a)return new Promise((E,v)=>{m.addEventListener("load",E),m.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${f}`)))})}))}function u(t){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=t,window.dispatchEvent(i),!i.defaultPrevented)throw t}return s.then(t=>{for(const i of t||[])i.status==="rejected"&&u(i.reason);return e().catch(u)})},se={};function $(o){let e,n,r;var s=o[1][0];function u(t,i){return{props:{data:t[3],form:t[2]}}}return s&&(e=P(s,u(o)),o[12](e)),{c(){e&&R(e.$$.fragment),n=p()},l(t){e&&T(e.$$.fragment,t),n=p()},m(t,i){e&&L(e,t,i),k(t,n,i),r=!0},p(t,i){if(i&2&&s!==(s=t[1][0])){if(e){S();const l=e;h(l.$$.fragment,1,0,()=>{A(l,1)}),D()}s?(e=P(s,u(t)),t[12](e),R(e.$$.fragment),g(e.$$.fragment,1),L(e,n.parentNode,n)):e=null}else if(s){const l={};i&8&&(l.data=t[3]),i&4&&(l.form=t[2]),e.$set(l)}},i(t){r||(e&&g(e.$$.fragment,t),r=!0)},o(t){e&&h(e.$$.fragment,t),r=!1},d(t){t&&w(n),o[12](null),e&&A(e,t)}}}function x(o){let e,n,r;var s=o[1][0];function u(t,i){return{props:{data:t[3],$$slots:{default:[ee]},$$scope:{ctx:t}}}}return s&&(e=P(s,u(o)),o[11](e)),{c(){e&&R(e.$$.fragment),n=p()},l(t){e&&T(e.$$.fragment,t),n=p()},m(t,i){e&&L(e,t,i),k(t,n,i),r=!0},p(t,i){if(i&2&&s!==(s=t[1][0])){if(e){S();const l=e;h(l.$$.fragment,1,0,()=>{A(l,1)}),D()}s?(e=P(s,u(t)),t[11](e),R(e.$$.fragment),g(e.$$.fragment,1),L(e,n.parentNode,n)):e=null}else if(s){const l={};i&8&&(l.data=t[3]),i&8215&&(l.$$scope={dirty:i,ctx:t}),e.$set(l)}},i(t){r||(e&&g(e.$$.fragment,t),r=!0)},o(t){e&&h(e.$$.fragment,t),r=!1},d(t){t&&w(n),o[11](null),e&&A(e,t)}}}function ee(o){let e,n,r;var s=o[1][1];function u(t,i){return{props:{data:t[4],form:t[2]}}}return s&&(e=P(s,u(o)),o[10](e)),{c(){e&&R(e.$$.fragment),n=p()},l(t){e&&T(e.$$.fragment,t),n=p()},m(t,i){e&&L(e,t,i),k(t,n,i),r=!0},p(t,i){if(i&2&&s!==(s=t[1][1])){if(e){S();const l=e;h(l.$$.fragment,1,0,()=>{A(l,1)}),D()}s?(e=P(s,u(t)),t[10](e),R(e.$$.fragment),g(e.$$.fragment,1),L(e,n.parentNode,n)):e=null}else if(s){const l={};i&16&&(l.data=t[4]),i&4&&(l.form=t[2]),e.$set(l)}},i(t){r||(e&&g(e.$$.fragment,t),r=!0)},o(t){e&&h(e.$$.fragment,t),r=!1},d(t){t&&w(n),o[10](null),e&&A(e,t)}}}function C(o){let e,n=o[6]&&B(o);return{c(){e=H("div"),n&&n.c(),this.h()},l(r){e=J(r,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=K(e);n&&n.l(s),s.forEach(w),this.h()},h(){O(e,"id","svelte-announcer"),O(e,"aria-live","assertive"),O(e,"aria-atomic","true"),d(e,"position","absolute"),d(e,"left","0"),d(e,"top","0"),d(e,"clip","rect(0 0 0 0)"),d(e,"clip-path","inset(50%)"),d(e,"overflow","hidden"),d(e,"white-space","nowrap"),d(e,"width","1px"),d(e,"height","1px")},m(r,s){k(r,e,s),n&&n.m(e,null)},p(r,s){r[6]?n?n.p(r,s):(n=B(r),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(r){r&&w(e),n&&n.d()}}}function B(o){let e;return{c(){e=Q(o[7])},l(n){e=X(n,o[7])},m(n,r){k(n,e,r)},p(n,r){r&128&&Y(e,n[7])},d(n){n&&w(e)}}}function te(o){let e,n,r,s,u;const t=[x,$],i=[];function l(a,_){return a[1][1]?0:1}e=l(o),n=i[e]=t[e](o);let f=o[5]&&C(o);return{c(){n.c(),r=G(),f&&f.c(),s=p()},l(a){n.l(a),r=W(a),f&&f.l(a),s=p()},m(a,_){i[e].m(a,_),k(a,r,_),f&&f.m(a,_),k(a,s,_),u=!0},p(a,[_]){let b=e;e=l(a),e===b?i[e].p(a,_):(S(),h(i[b],1,1,()=>{i[b]=null}),D(),n=i[e],n?n.p(a,_):(n=i[e]=t[e](a),n.c()),g(n,1),n.m(r.parentNode,r)),a[5]?f?f.p(a,_):(f=C(a),f.c(),f.m(s.parentNode,s)):f&&(f.d(1),f=null)},i(a){u||(g(n),u=!0)},o(a){h(n),u=!1},d(a){a&&(w(r),w(s)),i[e].d(a),f&&f.d(a)}}}function ne(o,e,n){let{stores:r}=e,{page:s}=e,{constructors:u}=e,{components:t=[]}=e,{form:i}=e,{data_0:l=null}=e,{data_1:f=null}=e;q(r.page.notify);let a=!1,_=!1,b=null;U(()=>{const c=r.page.subscribe(()=>{a&&(n(6,_=!0),j().then(()=>{n(7,b=document.title||"untitled page")}))});return n(5,a=!0),c});function m(c){I[c?"unshift":"push"](()=>{t[1]=c,n(0,t)})}function E(c){I[c?"unshift":"push"](()=>{t[0]=c,n(0,t)})}function v(c){I[c?"unshift":"push"](()=>{t[0]=c,n(0,t)})}return o.$$set=c=>{"stores"in c&&n(8,r=c.stores),"page"in c&&n(9,s=c.page),"constructors"in c&&n(1,u=c.constructors),"components"in c&&n(0,t=c.components),"form"in c&&n(2,i=c.form),"data_0"in c&&n(3,l=c.data_0),"data_1"in c&&n(4,f=c.data_1)},o.$$.update=()=>{o.$$.dirty&768&&r.page.set(s)},[t,u,i,l,f,a,_,b,r,s,m,E,v]}class oe extends z{constructor(e){super(),F(this,e,ne,te,N,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const ae=[()=>y(()=>import("../nodes/0.BkVRkJ82.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url),()=>y(()=>import("../nodes/1.SbNX-RTy.js"),__vite__mapDeps([5,1,2,6,3]),import.meta.url),()=>y(()=>import("../nodes/2.DHe-f7Tl.js"),__vite__mapDeps([7,1,2,8]),import.meta.url),()=>y(()=>import("../nodes/3.BiiUd-TO.js"),__vite__mapDeps([9,1,2,10,3,11]),import.meta.url),()=>y(()=>import("../nodes/4.BuCQvxHl.js"),__vite__mapDeps([12,1,2,13]),import.meta.url),()=>y(()=>import("../nodes/5.CXOLfoor.js"),__vite__mapDeps([14,1,2,10,3,15]),import.meta.url)],le=[],fe={"/":[2],"/login":[3],"/photoapp":[4],"/register":[5]},ce={handleError:({error:o})=>{console.error(o)},reroute:()=>{}};export{fe as dictionary,ce as hooks,se as matchers,ae as nodes,oe as root,le as server_loads};
