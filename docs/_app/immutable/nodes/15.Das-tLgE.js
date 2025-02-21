import{s as mt,d as vt,e as x,n as ot,r as dt,i as kt}from"../chunks/scheduler.a6NXN_3y.js";import{S as gt,i as wt,e as n,s as m,t as U,o as ct,c as h,a as _,d as i,f as v,b as A,k as Et,p as it,l,q as d,v as Ve,g as L,h as t,r as $,j as me,u as nt}from"../chunks/index.BTeu0b31.js";import{e as Ne}from"../chunks/each.D6YF6ztN.js";function ht(e,o,s){const g=e.slice();return g[19]=o[s],g}function ut(e,o,s){const g=e.slice();return g[22]=o[s],g}function pt(e){let o,s,g,k,u,p=e[22].name+"",E,V,N,f;function b(){return e[12](e[22])}return{c(){o=n("div"),s=n("input"),k=m(),u=n("h2"),E=U(p),V=m(),this.h()},l(C){o=h(C,"DIV",{class:!0});var y=_(o);s=h(y,"INPUT",{type:!0,src:!0,alt:!0,class:!0}),k=v(y),u=h(y,"H2",{class:!0});var q=_(u);E=A(q,p),q.forEach(i),V=v(y),y.forEach(i),this.h()},h(){l(s,"type","image"),x(s.src,g=e[22].image)||l(s,"src",g),l(s,"alt",e[22].alt),l(s,"class","svelte-kwh7qh"),l(u,"class","svelte-kwh7qh"),l(o,"class","clock svelte-kwh7qh")},m(C,y){L(C,o,y),t(o,s),t(o,k),t(o,u),t(u,E),t(o,V),N||(f=$(s,"click",b),N=!0)},p(C,y){e=C},d(C){C&&i(o),N=!1,f()}}}function ft(e){let o,s,g,k,u,p,E=e[19].name+"",V,N,f,b=e[19].price+"",C,y,q,I,W,F,Q;function ne(){return e[14](e[19])}return{c(){o=n("div"),s=n("img"),u=m(),p=n("h2"),V=U(E),N=m(),f=n("h2"),C=U(b),y=U(" kr"),q=m(),I=n("input"),W=m(),this.h()},l(S){o=h(S,"DIV",{style:!0});var w=_(o);s=h(w,"IMG",{src:!0,alt:!0,style:!0}),u=v(w),p=h(w,"H2",{class:!0});var T=_(p);V=A(T,E),T.forEach(i),N=v(w),f=h(w,"H2",{class:!0});var B=_(f);C=A(B,b),y=A(B," kr"),B.forEach(i),q=v(w),I=h(w,"INPUT",{type:!0,class:!0}),W=v(w),w.forEach(i),this.h()},h(){x(s.src,g=e[19].image)||l(s,"src",g),l(s,"alt",k=e[19].alt),d(s,"height","90%"),d(s,"width","90%"),d(s,"keep-aspect-ratio","1"),d(s,"margin","5%"),l(p,"class","svelte-kwh7qh"),l(f,"class","svelte-kwh7qh"),l(I,"type","button"),I.value="Remove",l(I,"class","svelte-kwh7qh"),d(o,"background-color","black")},m(S,w){L(S,o,w),t(o,s),t(o,u),t(o,p),t(p,V),t(o,N),t(o,f),t(f,C),t(f,y),t(o,q),t(o,I),t(o,W),F||(Q=$(I,"click",ne),F=!0)},p(S,w){e=S,w&2&&!x(s.src,g=e[19].image)&&l(s,"src",g),w&2&&k!==(k=e[19].alt)&&l(s,"alt",k),w&2&&E!==(E=e[19].name+"")&&me(V,E),w&2&&b!==(b=e[19].price+"")&&me(C,b)},d(S){S&&i(o),F=!1,Q()}}}function qt(e){let o=!1,s=()=>{o=!1},g,k,u,p,E,V,N,f,b,C,y,q,I,W,F,Q,ne,S,w,T,B,ge,R,Y,P,we,Ee,Pe,O,he,ve=e[2].name+"",qe,Oe,ue,de=e[2].info+"",ye,Ue,ee,ke=e[2].price+"",Ce,Ae,Be,te,je,le,Ie,M,z,se,Ke="Shopping Cart",Le,ze,K,Ge,Te,Re,We,ae,Fe,re,be,oe,j,Xe,Se,X,ce,Qe,Je;vt(e[11]);let pe=Ne(e[6]),D=[];for(let a=0;a<pe.length;a+=1)D[a]=pt(ut(e,pe,a));let fe=Ne(e[1]),H=[];for(let a=0;a<fe.length;a+=1)H[a]=ft(ht(e,fe,a));return{c(){k=n("main"),u=n("div"),p=n("video"),E=n("source"),N=m(),f=n("video"),b=n("source"),y=m(),q=n("div"),I=n("span"),W=U("TIMELESS"),F=m(),Q=n("hr"),ne=m(),S=n("span"),w=U("Clocks"),T=m(),B=n("div");for(let a=0;a<D.length;a+=1)D[a].c();ge=m(),R=n("aside"),Y=n("div"),P=n("img"),Pe=m(),O=n("div"),he=n("h1"),qe=U(ve),Oe=m(),ue=n("h2"),ye=U(de),Ue=m(),ee=n("h2"),Ce=U(ke),Ae=U(" kr"),Be=m(),te=n("input"),je=m(),le=n("input"),Ie=m(),M=n("aside"),z=n("div"),se=n("h2"),se.textContent=Ke,Le=m();for(let a=0;a<H.length;a+=1)H[a].c();ze=m(),K=n("h2"),Ge=U("Total: "),Te=U(e[5]),Re=U(" kr"),We=m(),ae=n("input"),Fe=m(),re=n("input"),be=m(),oe=n("aside"),j=n("input"),Se=m(),X=ct("svg"),ce=ct("path"),this.h()},l(a){k=h(a,"MAIN",{class:!0});var c=_(k);u=h(c,"DIV",{class:!0});var r=_(u);p=h(r,"VIDEO",{style:!0,class:!0});var J=_(p);E=h(J,"SOURCE",{src:!0,type:!0}),J.forEach(i),N=v(r),f=h(r,"VIDEO",{style:!0,class:!0});var Ze=_(f);b=h(Ze,"SOURCE",{src:!0,type:!0,class:!0}),Ze.forEach(i),r.forEach(i),y=v(c),q=h(c,"DIV",{class:!0});var _e=_(q);I=h(_e,"SPAN",{style:!0,class:!0});var $e=_(I);W=A($e,"TIMELESS"),$e.forEach(i),F=v(_e),Q=h(_e,"HR",{class:!0}),ne=v(_e),S=h(_e,"SPAN",{style:!0,class:!0});var xe=_(S);w=A(xe,"Clocks"),xe.forEach(i),_e.forEach(i),T=v(c),B=h(c,"DIV",{class:!0});var et=_(B);for(let ie=0;ie<D.length;ie+=1)D[ie].l(et);et.forEach(i),c.forEach(i),ge=v(a),R=h(a,"ASIDE",{class:!0});var tt=_(R);Y=h(tt,"DIV",{class:!0});var Me=_(Y);P=h(Me,"IMG",{src:!0,alt:!0,style:!0}),Pe=v(Me),O=h(Me,"DIV",{});var G=_(O);he=h(G,"H1",{class:!0});var lt=_(he);qe=A(lt,ve),lt.forEach(i),Oe=v(G),ue=h(G,"H2",{class:!0});var st=_(ue);ye=A(st,de),st.forEach(i),Ue=v(G),ee=h(G,"H2",{class:!0});var Ye=_(ee);Ce=A(Ye,ke),Ae=A(Ye," kr"),Ye.forEach(i),Be=v(G),te=h(G,"INPUT",{type:!0,class:!0}),je=v(G),le=h(G,"INPUT",{type:!0,class:!0}),G.forEach(i),Me.forEach(i),tt.forEach(i),Ie=v(a),M=h(a,"ASIDE",{class:!0,style:!0});var Z=_(M);z=h(Z,"DIV",{style:!0});var De=_(z);se=h(De,"H2",{class:!0,"data-svelte-h":!0}),Et(se)!=="svelte-1t18e3w"&&(se.textContent=Ke),Le=v(De);for(let ie=0;ie<H.length;ie+=1)H[ie].l(De);De.forEach(i),ze=v(Z),K=h(Z,"H2",{class:!0});var He=_(K);Ge=A(He,"Total: "),Te=A(He,e[5]),Re=A(He," kr"),He.forEach(i),We=v(Z),ae=h(Z,"INPUT",{type:!0,class:!0}),Fe=v(Z),re=h(Z,"INPUT",{type:!0,class:!0}),Z.forEach(i),be=v(a),oe=h(a,"ASIDE",{class:!0});var at=_(oe);j=h(at,"INPUT",{type:!0,src:!0,alt:!0,class:!0,style:!0}),at.forEach(i),Se=v(a),X=it(a,"svg",{xmlns:!0,viewBox:!0});var rt=_(X);ce=it(rt,"path",{fill:!0,"fill-opacity":!0,d:!0}),_(ce).forEach(i),rt.forEach(i),this.h()},h(){x(E.src,V="clock.mp4")||l(E,"src",V),l(E,"type","video/mp4"),p.autoplay=!0,p.loop=!0,p.muted=!0,d(p,"transform","translate(0,"+-e[0]/10+"px) object-fit: contain"),l(p,"class","svelte-kwh7qh"),x(b.src,C="background.mp4")||l(b,"src",C),l(b,"type","video/mp4"),l(b,"class","background"),f.autoplay=!0,f.loop=!0,f.muted=!0,d(f,"transform","translate(0,"+(_t-e[0]/1)+"px)"),l(f,"class","svelte-kwh7qh"),l(u,"class","parallax-container svelte-kwh7qh"),d(I,"opacity",1-Math.max(0,e[0]/100)),l(I,"class","svelte-kwh7qh"),l(Q,"class","underline svelte-kwh7qh"),d(S,"opacity",0+Math.max(0,(e[0]-400)/100)),l(S,"class","clockspan svelte-kwh7qh"),l(q,"class","text svelte-kwh7qh"),l(B,"class","grid svelte-kwh7qh"),l(k,"class","svelte-kwh7qh"),x(P.src,we=e[2].image)||l(P,"src",we),l(P,"alt",Ee=e[2].alt),d(P,"height","90%"),d(P,"width","90%"),d(P,"keep-aspect-ratio","1"),d(P,"margin","5%"),l(he,"class","svelte-kwh7qh"),l(ue,"class","svelte-kwh7qh"),l(ee,"class","svelte-kwh7qh"),l(te,"type","button"),te.value="Add to Shopping Cart",l(te,"class","svelte-kwh7qh"),l(le,"type","button"),le.value="Close",l(le,"class","svelte-kwh7qh"),l(Y,"class","divClock svelte-kwh7qh"),l(R,"class","fullScreenClock svelte-kwh7qh"),Ve(R,"hidden",!e[3]),l(se,"class","svelte-kwh7qh"),d(z,"overflow-y","scroll"),d(z,"height","100%"),l(K,"class","svelte-kwh7qh"),l(ae,"type","button"),ae.value="To CheckOut",l(ae,"class","inCartButton svelte-kwh7qh"),l(re,"type","button"),re.value="Close",l(re,"class","inCartButton svelte-kwh7qh"),l(M,"class","shoppingCart svelte-kwh7qh"),d(M,"opacity",0+Math.max(0,(e[0]-830)/100)),Ve(M,"hidden",!e[4]),l(j,"type","image"),x(j.src,Xe="https://cdn-icons-png.flaticon.com/512/846/846423.png")||l(j,"src",Xe),l(j,"alt","shopping cart button"),l(j,"class","cartButton svelte-kwh7qh"),d(j,"opacity",0+Math.max(0,(e[0]-830)/100)),l(oe,"class","cart svelte-kwh7qh"),l(ce,"fill","#e7008a"),l(ce,"fill-opacity","0.68"),l(ce,"d","1"),l(X,"xmlns","http://www.w3.org/2000/svg"),l(X,"viewBox","0 0 2400 4000")},m(a,c){L(a,k,c),t(k,u),t(u,p),t(p,E),t(u,N),t(u,f),t(f,b),t(k,y),t(k,q),t(q,I),t(I,W),t(q,F),t(q,Q),t(q,ne),t(q,S),t(S,w),t(k,T),t(k,B);for(let r=0;r<D.length;r+=1)D[r]&&D[r].m(B,null);L(a,ge,c),L(a,R,c),t(R,Y),t(Y,P),t(Y,Pe),t(Y,O),t(O,he),t(he,qe),t(O,Oe),t(O,ue),t(ue,ye),t(O,Ue),t(O,ee),t(ee,Ce),t(ee,Ae),t(O,Be),t(O,te),t(O,je),t(O,le),L(a,Ie,c),L(a,M,c),t(M,z),t(z,se),t(z,Le);for(let r=0;r<H.length;r+=1)H[r]&&H[r].m(z,null);t(M,ze),t(M,K),t(K,Ge),t(K,Te),t(K,Re),t(M,We),t(M,ae),t(M,Fe),t(M,re),L(a,be,c),L(a,oe,c),t(oe,j),L(a,Se,c),L(a,X,c),t(X,ce),Qe||(Je=[$(window,"scroll",()=>{o=!0,clearTimeout(g),g=setTimeout(s,100),e[11]()}),$(te,"click",e[13]),$(le,"click",e[8]),$(ae,"click",function(){kt((e[15],e[5]=0))&&(e[15],e[5]=0).apply(this,arguments)}),$(re,"click",e[16]),$(j,"click",e[17])],Qe=!0)},p(a,[c]){if(e=a,c&1&&!o&&(o=!0,clearTimeout(g),scrollTo(window.pageXOffset,e[0]),g=setTimeout(s,100)),c&1&&d(p,"transform","translate(0,"+-e[0]/10+"px) object-fit: contain"),c&1&&d(f,"transform","translate(0,"+(_t-e[0]/1)+"px)"),c&1&&d(I,"opacity",1-Math.max(0,e[0]/100)),c&1&&d(S,"opacity",0+Math.max(0,(e[0]-400)/100)),c&192){pe=Ne(e[6]);let r;for(r=0;r<pe.length;r+=1){const J=ut(e,pe,r);D[r]?D[r].p(J,c):(D[r]=pt(J),D[r].c(),D[r].m(B,null))}for(;r<D.length;r+=1)D[r].d(1);D.length=pe.length}if(c&4&&!x(P.src,we=e[2].image)&&l(P,"src",we),c&4&&Ee!==(Ee=e[2].alt)&&l(P,"alt",Ee),c&4&&ve!==(ve=e[2].name+"")&&me(qe,ve),c&4&&de!==(de=e[2].info+"")&&me(ye,de),c&4&&ke!==(ke=e[2].price+"")&&me(Ce,ke),c&8&&Ve(R,"hidden",!e[3]),c&1026){fe=Ne(e[1]);let r;for(r=0;r<fe.length;r+=1){const J=ht(e,fe,r);H[r]?H[r].p(J,c):(H[r]=ft(J),H[r].c(),H[r].m(z,null))}for(;r<H.length;r+=1)H[r].d(1);H.length=fe.length}c&32&&me(Te,e[5]),c&1&&d(M,"opacity",0+Math.max(0,(e[0]-830)/100)),c&16&&Ve(M,"hidden",!e[4]),c&1&&d(j,"opacity",0+Math.max(0,(e[0]-830)/100))},i:ot,o:ot,d(a){a&&(i(k),i(ge),i(R),i(Ie),i(M),i(be),i(oe),i(Se),i(X)),nt(D,a),nt(H,a),Qe=!1,dt(Je)}}}const _t=0;function yt(e,o,s){let g=0,k=[{image:"https://content.thewosgroup.com/productimage/17771072/17771072_1.jpg?impolicy=zoom",alt:"Tudor Clock",info:"Black Bay Chrono Boutique Edition 41mm steel case",price:55e3,name:"Tudor"},{image:"https://content.thewosgroup.com/productimage/17381215/17381215_1.jpg?impolicy=zoom",alt:"Tag Heuer Clock",info:"Formula 1 Quartz Chronograph 43mm Mens Watch",price:22e3,name:"Tag Heuer"},{image:"https://content.thewosgroup.com/productimage/17311609/17311609_1.jpg?impolicy=zoom",alt:"Cartier Clock",info:"Tank Francaise Watch, Small Model, Quartz Movement, 18K Yellow Gold Case",price:22e4,name:"Cartier"},{image:"https://content.thewosgroup.com/productimage/17351325/17351325_1.jpg?impolicy=zoom",alt:"Longines Clock",info:"La Grande Classique De Longines 29mm Ladies Watch Gold",price:17e3,name:"Longines"}],u=[],p={},E=!1,V=!1,N=0;function f(T){s(3,E=!0),s(2,p=T)}function b(){s(3,E=!1),s(2,p={})}function C(T){s(1,u=[...u,T]),y()}function y(){s(5,N=0),u.forEach(T=>{s(5,N+=T.price)})}function q(T){u.splice(u.indexOf(T),1),s(1,u),y()}function I(){s(0,g=window.pageYOffset)}return[g,u,p,E,V,N,k,f,b,C,q,I,T=>f(T),()=>C(p),T=>q(T),()=>s(1,u=[]),()=>s(4,V=!1),()=>s(4,V=!V)]}class bt extends gt{constructor(o){super(),wt(this,o,yt,qt,mt,{})}}export{bt as component};
