import{s as G,e as T,n as q,r as z,c as B,o as H,f as K}from"../chunks/scheduler.a6NXN_3y.js";import{S as Q,i as V,e as d,s as A,c as v,a as E,f as N,d as _,l as o,g as I,h as k,v as F,r as O,w as W,u as X,t as Y,b as Z,j as x}from"../chunks/index.C4Np8A93.js";import{e as J}from"../chunks/each.D6YF6ztN.js";import{s as R}from"../chunks/savedsearched.FOgMtZht.js";import{b as P}from"../chunks/paths.CA52neOA.js";import{g as $}from"../chunks/entry.B2URUSM3.js";function U(i,e,a){const c=i.slice();return c[6]=e[a],c}function D(i){let e,a=i[6].name+"",c,f;return{c(){e=d("a"),c=Y(a),this.h()},l(s){e=v(s,"A",{href:!0,class:!0});var r=E(e);c=Z(r,a),r.forEach(_),this.h()},h(){o(e,"href",f=P+"/search/"+i[6].name),o(e,"class","svelte-1injg7f")},m(s,r){I(s,e,r),k(e,c)},p(s,r){r&1&&a!==(a=s[6].name+"")&&x(c,a),r&1&&f!==(f=P+"/search/"+s[6].name)&&o(e,"href",f)},d(s){s&&_(e)}}}function ee(i){let e,a,c,f,s,r,j,h,g,p,m,M,S,C,b=J(i[0]),n=[];for(let t=0;t<b.length;t+=1)n[t]=D(U(i,b,t));return{c(){e=d("main"),a=d("img"),f=A(),s=d("form"),r=d("input"),j=A(),h=d("footer");for(let t=0;t<n.length;t+=1)n[t].c();g=A(),p=d("aside"),m=d("input"),this.h()},l(t){e=v(t,"MAIN",{class:!0});var u=E(e);a=v(u,"IMG",{src:!0,alt:!0,class:!0}),f=N(u),s=v(u,"FORM",{class:!0});var l=E(s);r=v(l,"INPUT",{type:!0,placeholder:!0,class:!0}),l.forEach(_),j=N(u),h=v(u,"FOOTER",{class:!0});var y=E(h);for(let w=0;w<n.length;w+=1)n[w].l(y);y.forEach(_),u.forEach(_),g=N(t),p=v(t,"ASIDE",{class:!0});var L=E(p);m=v(L,"INPUT",{type:!0,src:!0,alt:!0,class:!0}),L.forEach(_),this.h()},h(){T(a.src,c="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png")||o(a,"src",c),o(a,"alt","pokemon logo"),o(a,"class","svelte-1injg7f"),o(r,"type","text"),o(r,"placeholder","Sök upp en pokemon"),o(r,"class","svelte-1injg7f"),o(s,"class","svelte-1injg7f"),o(h,"class","svelte-1injg7f"),o(e,"class","svelte-1injg7f"),o(m,"type","image"),T(m.src,M="https://teacherhead.com/wp-content/uploads/2015/01/reset.png?w=930&h=450&crop=1")||o(m,"src",M),o(m,"alt","restart button"),o(m,"class","restart svelte-1injg7f"),o(p,"class","svelte-1injg7f")},m(t,u){I(t,e,u),k(e,a),k(e,f),k(e,s),k(s,r),F(r,i[1]),k(e,j),k(e,h);for(let l=0;l<n.length;l+=1)n[l]&&n[l].m(h,null);I(t,g,u),I(t,p,u),k(p,m),S||(C=[O(r,"input",i[3]),O(s,"submit",W(i[4])),O(m,"click",i[2])],S=!0)},p(t,[u]){if(u&2&&r.value!==t[1]&&F(r,t[1]),u&1){b=J(t[0]);let l;for(l=0;l<b.length;l+=1){const y=U(t,b,l);n[l]?n[l].p(y,u):(n[l]=D(y),n[l].c(),n[l].m(h,null))}for(;l<n.length;l+=1)n[l].d(1);n.length=b.length}},i:q,o:q,d(t){t&&(_(e),_(g),_(p)),X(n,t),S=!1,z(C)}}}function te(i,e,a){let c;B(i,R,g=>a(5,c=g));let f,s=[];H(()=>{c.length>2&&a(0,s=JSON.parse(c))});function r(){a(0,s=[]),K(R,c=JSON.stringify(s),c)}function j(){f=this.value,a(1,f)}const h=()=>$(P+"/search/"+f);return i.$$.update=()=>{i.$$.dirty&1&&s.sort(function(g,p){return p.length-g.length})},[s,f,r,j,h]}class ie extends Q{constructor(e){super(),V(this,e,te,ee,G,{})}}export{ie as component};
