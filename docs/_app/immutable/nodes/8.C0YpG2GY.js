import{s as ue,b as ie,n as X,r as ce,c as fe,o as de,d as he}from"../chunks/scheduler.DsIbBh0B.js";import{S as pe,i as _e,e as d,s as k,c as h,a as M,l as B,f as C,d as w,v as H,n,g as oe,h as s,o as P,w as le,p as U,q as ve,u as me,t as ge,b as be,x as ke}from"../chunks/index.D7uGHggL.js";import{e as se}from"../chunks/each.D6YF6ztN.js";import{u as ae}from"../chunks/user.Bbz6lGhe.js";import{b as Ce}from"../chunks/paths.BwnNXGfw.js";function ne(r,o,a){const i=r.slice();return i[12]=o[a],i}function re(r){let o,a=r[12].namn+"",i;return{c(){o=d("option"),i=ge(a),this.h()},l(p){o=h(p,"OPTION",{});var _=M(o);i=be(_,a),_.forEach(w),this.h()},h(){o.__value=r[12].value,P(o,o.__value)},m(p,_){oe(p,o,_),s(o,i)},p:X,d(p){p&&w(o)}}}function Ee(r){let o,a,i,p="Registering",_,c,N,e,b,F="Namn:",O,m,R,E,I="E-Post:",V,L,D,T,Y="Lösenord:",G,y,J,q,Z="Favorit Färg:",j,v,z,x,K,A,$=`Har du redan ett konto? <a href="${Ce}/login">Logga in</a>`,Q,ee,S=se(r[4]),f=[];for(let t=0;t<S.length;t+=1)f[t]=re(ne(r,S,t));return{c(){o=d("main"),a=d("div"),i=d("h1"),i.textContent=p,_=k(),c=d("div"),N=k(),e=d("form"),b=d("label"),b.textContent=F,O=k(),m=d("input"),R=k(),E=d("label"),E.textContent=I,V=k(),L=d("input"),D=k(),T=d("label"),T.textContent=Y,G=k(),y=d("input"),J=k(),q=d("label"),q.textContent=Z,j=k(),v=d("select");for(let t=0;t<f.length;t+=1)f[t].c();z=k(),x=d("input"),K=k(),A=d("h2"),A.innerHTML=$,this.h()},l(t){o=h(t,"MAIN",{class:!0});var g=M(o);a=h(g,"DIV",{class:!0});var l=M(a);i=h(l,"H1",{"data-svelte-h":!0}),B(i)!=="svelte-ni7c83"&&(i.textContent=p),_=C(l),c=h(l,"DIV",{style:!0}),M(c).forEach(w),N=C(l),e=h(l,"FORM",{});var u=M(e);b=h(u,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),B(b)!=="svelte-t4ghih"&&(b.textContent=F),O=C(u),m=h(u,"INPUT",{type:!0,id:!0,class:!0}),R=C(u),E=h(u,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),B(E)!=="svelte-qqpxgz"&&(E.textContent=I),V=C(u),L=h(u,"INPUT",{type:!0,id:!0,class:!0}),D=C(u),T=h(u,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),B(T)!=="svelte-17q2uke"&&(T.textContent=Y),G=C(u),y=h(u,"INPUT",{type:!0,id:!0,class:!0}),J=C(u),q=h(u,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),B(q)!=="svelte-1q58812"&&(q.textContent=Z),j=C(u),v=h(u,"SELECT",{name:!0,id:!0,class:!0});var te=M(v);for(let W=0;W<f.length;W+=1)f[W].l(te);te.forEach(w),z=C(u),x=h(u,"INPUT",{type:!0,class:!0}),u.forEach(w),K=C(l),A=h(l,"H2",{"data-svelte-h":!0}),B(A)!=="svelte-x1q0iy"&&(A.innerHTML=$),l.forEach(w),g.forEach(w),this.h()},h(){H(c,"width","100px"),H(c,"height","100px"),H(c,"border-radius","50%"),H(c,"overflow","hidden"),H(c,"background-color",r[0]),n(b,"for","name"),n(b,"class","svelte-1ldkge4"),n(m,"type","text"),n(m,"id","name"),n(m,"class","svelte-1ldkge4"),n(E,"for","epost"),n(E,"class","svelte-1ldkge4"),n(L,"type","email"),n(L,"id","epost"),n(L,"class","svelte-1ldkge4"),n(T,"for","pass"),n(T,"class","svelte-1ldkge4"),n(y,"type","password"),n(y,"id","pass"),n(y,"class","svelte-1ldkge4"),n(q,"for","colour"),n(q,"class","svelte-1ldkge4"),n(v,"name","c"),n(v,"id","colour"),n(v,"class","svelte-1ldkge4"),r[0]===void 0&&ie(()=>r[9].call(v)),n(x,"type","submit"),x.value="Registera",n(x,"class","svelte-1ldkge4"),n(a,"class","container svelte-1ldkge4"),n(o,"class","svelte-1ldkge4")},m(t,g){oe(t,o,g),s(o,a),s(a,i),s(a,_),s(a,c),s(a,N),s(a,e),s(e,b),s(e,O),s(e,m),P(m,r[1]),s(e,R),s(e,E),s(e,V),s(e,L),P(L,r[2]),s(e,D),s(e,T),s(e,G),s(e,y),P(y,r[3]),s(e,J),s(e,q),s(e,j),s(e,v);for(let l=0;l<f.length;l+=1)f[l]&&f[l].m(v,null);le(v,r[0],!0),s(e,z),s(e,x),s(a,K),s(a,A),Q||(ee=[U(m,"input",r[6]),U(L,"input",r[7]),U(y,"input",r[8]),U(v,"change",r[9]),U(e,"submit",ve(r[5]))],Q=!0)},p(t,[g]){if(g&1&&H(c,"background-color",t[0]),g&2&&m.value!==t[1]&&P(m,t[1]),g&4&&L.value!==t[2]&&P(L,t[2]),g&8&&y.value!==t[3]&&P(y,t[3]),g&16){S=se(t[4]);let l;for(l=0;l<S.length;l+=1){const u=ne(t,S,l);f[l]?f[l].p(u,g):(f[l]=re(u),f[l].c(),f[l].m(v,null))}for(;l<f.length;l+=1)f[l].d(1);f.length=S.length}g&17&&le(v,t[0])},i:X,o:X,d(t){t&&w(o),me(f,t),Q=!1,ce(ee)}}}function Le(r,o,a){let i;fe(r,ae,I=>a(11,i=I));let p=[];de(()=>{i.length>2&&(p=JSON.parse(i))});let _="black",c="",N="",e="",b=[{namn:"Blå",value:"blue"},{namn:"Röd",value:"red"},{namn:"Grön",value:"green"},{namn:"Gul",value:"yellow"}];function F(){if(p.filter(I=>I.username===c).length>0)alert("Användarnamnet finns redan, välj ett annat.");else{alert("Välkommen "+c+" "+N+" "+e);let I={username:c,password:e,email:N,color:_};p=[...p,I],he(ae,i=JSON.stringify(p),i)}}function O(){c=this.value,a(1,c)}function m(){N=this.value,a(2,N)}function R(){e=this.value,a(3,e)}function E(){_=ke(this),a(0,_),a(4,b)}return[_,c,N,e,b,F,O,m,R,E]}class we extends pe{constructor(o){super(),_e(this,o,Le,Ee,ue,{})}}export{we as component};