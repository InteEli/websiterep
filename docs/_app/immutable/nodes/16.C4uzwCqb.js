import{s as He,n as jt,r as Ue,o as Be}from"../chunks/scheduler.a6NXN_3y.js";import{S as Oe,i as Ve,e as a,s as p,t as dt,c,a as E,k as m,f as d,d as _,b as vt,l as h,v as Y,g as I,h as n,x as Wt,r as B,j as Ut,u as ce,q as Dt,A as Ie}from"../chunks/index.BTeu0b31.js";import{e as Ht}from"../chunks/each.D6YF6ztN.js";function Ne(s,t,e){const l=s.slice();return l[32]=t[e].letter,l[33]=t[e].top,l[34]=t[e].left,l[36]=e,l}function Me(s,t,e){const l=s.slice();return l[37]=t[e],l[39]=e,l}function Ae(s,t,e){const l=s.slice();return l[40]=t[e],l[36]=e,l}function Le(s){let t,e="Day";return{c(){t=a("h2"),t.textContent=e},l(l){t=c(l,"H2",{"data-svelte-h":!0}),m(t)!=="svelte-1tmqeh8"&&(t.textContent=e)},m(l,r){I(l,t,r)},d(l){l&&_(t)}}}function Se(s){let t,e="Year";return{c(){t=a("h2"),t.textContent=e},l(l){t=c(l,"H2",{"data-svelte-h":!0}),m(t)!=="svelte-75bqzr"&&(t.textContent=e)},m(l,r){I(l,t,r)},d(l){l&&_(t)}}}function qe(s){let t,e="Month";return{c(){t=a("h2"),t.textContent=e},l(l){t=c(l,"H2",{"data-svelte-h":!0}),m(t)!=="svelte-14lnvc0"&&(t.textContent=e)},m(l,r){I(l,t,r)},d(l){l&&_(t)}}}function Ye(s){let t,e=s[37]+"",l;return{c(){t=a("div"),l=dt(e)},l(r){t=c(r,"DIV",{});var i=E(t);l=vt(i,e),i.forEach(_)},m(r,i){I(r,t,i),n(t,l)},p(r,i){i[0]&16&&e!==(e=r[37]+"")&&Ut(l,e)},d(r){r&&_(t)}}}function ze(s){let t,e=Ht(Array(10).fill(0)),l=[];for(let r=0;r<e.length;r+=1)l[r]=Qe(Ae(s,e,r));return{c(){for(let r=0;r<l.length;r+=1)l[r].c();t=Ie()},l(r){for(let i=0;i<l.length;i+=1)l[i].l(r);t=Ie()},m(r,i){for(let C=0;C<l.length;C+=1)l[C]&&l[C].m(r,i);I(r,t,i)},p:jt,d(r){r&&_(t),ce(l,r)}}}function Qe(s){let t,e;return{c(){t=a("div"),e=dt(s[36])},l(l){t=c(l,"DIV",{});var r=E(t);e=vt(r,s[36]),r.forEach(_)},m(l,r){I(l,t,r),n(t,e)},p:jt,d(l){l&&_(t)}}}function ye(s){let t,e,l,r,i,C,w,v=s[39]===0&&Le(),g=s[39]===1&&Se(),T=s[39]===2&&qe();function Q(k,x){return k[5]?ze:Ye}let L=Q(s),b=L(s);return{c(){t=a("div"),v&&v.c(),e=p(),g&&g.c(),l=p(),T&&T.c(),r=p(),i=a("div"),C=a("div"),b.c(),w=p(),this.h()},l(k){t=c(k,"DIV",{});var x=E(t);v&&v.l(x),e=d(x),g&&g.l(x),l=d(x),T&&T.l(x),r=d(x),i=c(x,"DIV",{class:!0});var H=E(i);C=c(H,"DIV",{class:!0});var O=E(C);b.l(O),O.forEach(_),H.forEach(_),w=d(x),x.forEach(_),this.h()},h(){h(C,"class","slot-inner svelte-p24ns"),h(i,"class","slot svelte-p24ns"),Y(i,"loop",s[5])},m(k,x){I(k,t,x),v&&v.m(t,null),n(t,e),g&&g.m(t,null),n(t,l),T&&T.m(t,null),n(t,r),n(t,i),n(i,C),b.m(C,null),n(t,w)},p(k,x){L===(L=Q(k))&&b?b.p(k,x):(b.d(1),b=L(k),b&&(b.c(),b.m(C,null))),x[0]&32&&Y(i,"loop",k[5])},d(k){k&&_(t),v&&v.d(),g&&g.d(),T&&T.d(),b.d()}}}function Fe(s){let t,e="Password does not match";return{c(){t=a("p"),t.textContent=e,this.h()},l(l){t=c(l,"P",{class:!0,"data-svelte-h":!0}),m(t)!=="svelte-m5jiui"&&(t.textContent=e),this.h()},h(){h(t,"class","svelte-p24ns")},m(l,r){I(l,t,r)},d(l){l&&_(t)}}}function Ge(s){let t,e="Password match";return{c(){t=a("p"),t.textContent=e,this.h()},l(l){t=c(l,"P",{class:!0,"data-svelte-h":!0}),m(t)!=="svelte-aidn2o"&&(t.textContent=e),this.h()},h(){h(t,"class","svelte-p24ns")},m(l,r){I(l,t,r)},d(l){l&&_(t)}}}function We(s){let t,e="Password does not meet all the conditions";return{c(){t=a("p"),t.textContent=e,this.h()},l(l){t=c(l,"P",{class:!0,"data-svelte-h":!0}),m(t)!=="svelte-gsknw4"&&(t.textContent=e),this.h()},h(){h(t,"class","svelte-p24ns")},m(l,r){I(l,t,r)},d(l){l&&_(t)}}}function De(s){let t,e=s[32]+"",l,r,i;function C(){return s[28](s[36])}return{c(){t=a("button"),l=dt(e),this.h()},l(w){t=c(w,"BUTTON",{style:!0,class:!0});var v=E(t);l=vt(v,e),v.forEach(_),this.h()},h(){Dt(t,"position","absolute"),Dt(t,"top",s[33]+"%"),Dt(t,"left",s[34]+"%"),h(t,"class","letterbutton svelte-p24ns")},m(w,v){I(w,t,v),n(t,l),r||(i=B(t,"click",C),r=!0)},p(w,v){s=w,v[0]&4&&e!==(e=s[32]+"")&&Ut(l,e),v[0]&4&&Dt(t,"top",s[33]+"%"),v[0]&4&&Dt(t,"left",s[34]+"%")},d(w){w&&_(t),r=!1,i()}}}function je(s){let t,e,l="SIGN UP",r,i,C="Birthday slot",w,v,g,T,Q,L,b,k,x="Phone number",H,O,ut,Ct,P,F,Bt="+9",Pt,z,Et="*5",It,G,Ot="/12",Nt,W,Vt="^2",Mt,j,At="-1",V,N,mt="-2",Lt,S,ft,ie="Password:",Rt,R,Jt,A,Z,ue="Your password needs to be atleast 5 characters",Kt,$,fe="Your password needs to contain atleast two numbers",Xt,tt,he="Your password needs to contain atleast one special character",Zt,et,_e="The indivdual numbers in your password needs to be add up to 30",$t,lt,pe="Your password needs to contain the current year displayed on the slot machine",te,ht,de='<h2>Email</h2> <input type="email" id="email" class="svelte-p24ns"/>',St,D,bt,ve="Username",ee,yt,qt,le,nt,Ce="Start Writing",se,ot,me="Remove",ne,rt,be="Done",Yt,U,kt,ke="Confirm Password",oe,J,re,zt,_t,Qt,Ft,at,ae,ge,gt=Ht(s[4]),M=[];for(let o=0;o<gt.length;o+=1)M[o]=ye(Me(s,gt,o));function Te(o,u){return o[12]?o[1]===o[6]?Ge:Fe:We}let Gt=Te(s),st=Gt(s),Tt=Ht(s[2]),y=[];for(let o=0;o<Tt.length;o+=1)y[o]=De(Ne(s,Tt,o));return{c(){t=a("main"),e=a("h1"),e.textContent=l,r=p(),i=a("h1"),i.textContent=C,w=p(),v=a("div");for(let o=0;o<M.length;o+=1)M[o].c();g=p(),T=a("button"),Q=dt("Spin"),L=p(),b=a("div"),k=a("h2"),k.textContent=x,H=p(),O=a("h3"),ut=dt(s[0]),Ct=p(),P=a("div"),F=a("button"),F.textContent=Bt,Pt=p(),z=a("button"),z.textContent=Et,It=p(),G=a("button"),G.textContent=Ot,Nt=p(),W=a("button"),W.textContent=Vt,Mt=p(),j=a("button"),j.textContent=At,V=p(),N=a("button"),N.textContent=mt,Lt=p(),S=a("div"),ft=a("label"),ft.textContent=ie,Rt=p(),R=a("input"),Jt=p(),A=a("div"),Z=a("p"),Z.textContent=ue,Kt=p(),$=a("p"),$.textContent=fe,Xt=p(),tt=a("p"),tt.textContent=he,Zt=p(),et=a("p"),et.textContent=_e,$t=p(),lt=a("p"),lt.textContent=pe,te=p(),ht=a("div"),ht.innerHTML=de,St=p(),D=a("div"),bt=a("h2"),bt.textContent=ve,ee=p(),yt=a("h3"),qt=dt(s[3]),le=p(),nt=a("button"),nt.textContent=Ce,se=p(),ot=a("button"),ot.textContent=me,ne=p(),rt=a("button"),rt.textContent=be,Yt=p(),U=a("div"),kt=a("h2"),kt.textContent=ke,oe=p(),J=a("input"),re=p(),st.c(),zt=p(),_t=a("button"),Qt=dt(s[13]),Ft=p(),at=a("section");for(let o=0;o<y.length;o+=1)y[o].c();this.h()},l(o){t=c(o,"MAIN",{class:!0});var u=E(t);e=c(u,"H1",{"data-svelte-h":!0}),m(e)!=="svelte-1r3fpho"&&(e.textContent=l),r=d(u),i=c(u,"H1",{"data-svelte-h":!0}),m(i)!=="svelte-78wky3"&&(i.textContent=C),w=d(u),v=c(u,"DIV",{class:!0});var f=E(v);for(let pt=0;pt<M.length;pt+=1)M[pt].l(f);f.forEach(_),g=d(u),T=c(u,"BUTTON",{class:!0});var ct=E(T);Q=vt(ct,"Spin"),ct.forEach(_),L=d(u),b=c(u,"DIV",{class:!0});var xt=E(b);k=c(xt,"H2",{"data-svelte-h":!0}),m(k)!=="svelte-78fnxv"&&(k.textContent=x),H=d(xt),O=c(xt,"H3",{});var xe=E(O);ut=vt(xe,s[0]),xe.forEach(_),Ct=d(xt),P=c(xt,"DIV",{class:!0});var q=E(P);F=c(q,"BUTTON",{class:!0,"data-svelte-h":!0}),m(F)!=="svelte-1avav3d"&&(F.textContent=Bt),Pt=d(q),z=c(q,"BUTTON",{class:!0,"data-svelte-h":!0}),m(z)!=="svelte-12la046"&&(z.textContent=Et),It=d(q),G=c(q,"BUTTON",{class:!0,"data-svelte-h":!0}),m(G)!=="svelte-1ustynh"&&(G.textContent=Ot),Nt=d(q),W=c(q,"BUTTON",{class:!0,"data-svelte-h":!0}),m(W)!=="svelte-1k3g59p"&&(W.textContent=Vt),Mt=d(q),j=c(q,"BUTTON",{class:!0,"data-svelte-h":!0}),m(j)!=="svelte-117wix0"&&(j.textContent=At),V=d(q),N=c(q,"BUTTON",{class:!0,"data-svelte-h":!0}),m(N)!=="svelte-pwvawm"&&(N.textContent=mt),q.forEach(_),xt.forEach(_),Lt=d(u),S=c(u,"DIV",{class:!0});var wt=E(S);ft=c(wt,"LABEL",{for:!0,"data-svelte-h":!0}),m(ft)!=="svelte-1gvratk"&&(ft.textContent=ie),Rt=d(wt),R=c(wt,"INPUT",{type:!0,id:!0,class:!0}),Jt=d(wt),A=c(wt,"DIV",{});var K=E(A);Z=c(K,"P",{class:!0,"data-svelte-h":!0}),m(Z)!=="svelte-8e7zv7"&&(Z.textContent=ue),Kt=d(K),$=c(K,"P",{class:!0,"data-svelte-h":!0}),m($)!=="svelte-1i92wa9"&&($.textContent=fe),Xt=d(K),tt=c(K,"P",{class:!0,"data-svelte-h":!0}),m(tt)!=="svelte-hbfbtk"&&(tt.textContent=he),Zt=d(K),et=c(K,"P",{class:!0,"data-svelte-h":!0}),m(et)!=="svelte-ckvzkn"&&(et.textContent=_e),$t=d(K),lt=c(K,"P",{class:!0,"data-svelte-h":!0}),m(lt)!=="svelte-164zy7r"&&(lt.textContent=pe),K.forEach(_),wt.forEach(_),te=d(u),ht=c(u,"DIV",{class:!0,"data-svelte-h":!0}),m(ht)!=="svelte-15bi0ap"&&(ht.innerHTML=de),u.forEach(_),St=d(o),D=c(o,"DIV",{class:!0});var X=E(D);bt=c(X,"H2",{"data-svelte-h":!0}),m(bt)!=="svelte-h7fq4i"&&(bt.textContent=ve),ee=d(X),yt=c(X,"H3",{});var we=E(yt);qt=vt(we,s[3]),we.forEach(_),le=d(X),nt=c(X,"BUTTON",{class:!0,"data-svelte-h":!0}),m(nt)!=="svelte-6aorty"&&(nt.textContent=Ce),se=d(X),ot=c(X,"BUTTON",{class:!0,"data-svelte-h":!0}),m(ot)!=="svelte-t8hb18"&&(ot.textContent=me),ne=d(X),rt=c(X,"BUTTON",{class:!0,"data-svelte-h":!0}),m(rt)!=="svelte-1vrylwx"&&(rt.textContent=be),X.forEach(_),Yt=d(o),U=c(o,"DIV",{class:!0});var it=E(U);kt=c(it,"H2",{"data-svelte-h":!0}),m(kt)!=="svelte-tnt7gz"&&(kt.textContent=ke),oe=d(it),J=c(it,"INPUT",{type:!0,id:!0,class:!0}),re=d(it),st.l(it),zt=d(it),_t=c(it,"BUTTON",{class:!0});var Pe=E(_t);Qt=vt(Pe,s[13]),Pe.forEach(_),it.forEach(_),Ft=d(o),at=c(o,"SECTION",{class:!0});var Ee=E(at);for(let pt=0;pt<y.length;pt+=1)y[pt].l(Ee);Ee.forEach(_),this.h()},h(){h(v,"class","slot-machine svelte-p24ns"),T.disabled=s[5],h(T,"class","spinbutton svelte-p24ns"),h(F,"class","svelte-p24ns"),h(z,"class","svelte-p24ns"),h(G,"class","svelte-p24ns"),h(W,"class","svelte-p24ns"),h(j,"class","svelte-p24ns"),h(N,"class","svelte-p24ns"),h(P,"class","mathsymbols svelte-p24ns"),h(b,"class","telephone"),h(ft,"for","pass"),h(R,"type","password"),h(R,"id","pass"),h(R,"class","svelte-p24ns"),h(Z,"class","svelte-p24ns"),Y(Z,"correct",s[7]),h($,"class","svelte-p24ns"),Y($,"correct",s[8]),h(tt,"class","svelte-p24ns"),Y(tt,"correct",s[9]),h(et,"class","svelte-p24ns"),Y(et,"correct",s[10]),h(lt,"class","svelte-p24ns"),Y(lt,"correct",s[11]),h(S,"class","passwordGame"),h(ht,"class","email svelte-p24ns"),h(t,"class","svelte-p24ns"),h(nt,"class","svelte-p24ns"),h(ot,"class","svelte-p24ns"),h(rt,"class","svelte-p24ns"),h(D,"class","username svelte-p24ns"),h(J,"type","password"),h(J,"id","pass"),h(J,"class","svelte-p24ns"),h(_t,"class","captcha svelte-p24ns"),h(U,"class","confirmPassword svelte-p24ns"),h(at,"class","svelte-p24ns")},m(o,u){I(o,t,u),n(t,e),n(t,r),n(t,i),n(t,w),n(t,v);for(let f=0;f<M.length;f+=1)M[f]&&M[f].m(v,null);n(t,g),n(t,T),n(T,Q),n(t,L),n(t,b),n(b,k),n(b,H),n(b,O),n(O,ut),n(b,Ct),n(b,P),n(P,F),n(P,Pt),n(P,z),n(P,It),n(P,G),n(P,Nt),n(P,W),n(P,Mt),n(P,j),n(P,V),n(P,N),n(t,Lt),n(t,S),n(S,ft),n(S,Rt),n(S,R),Wt(R,s[1]),n(S,Jt),n(S,A),n(A,Z),n(A,Kt),n(A,$),n(A,Xt),n(A,tt),n(A,Zt),n(A,et),n(A,$t),n(A,lt),n(t,te),n(t,ht),I(o,St,u),I(o,D,u),n(D,bt),n(D,ee),n(D,yt),n(yt,qt),n(D,le),n(D,nt),n(D,se),n(D,ot),n(D,ne),n(D,rt),I(o,Yt,u),I(o,U,u),n(U,kt),n(U,oe),n(U,J),Wt(J,s[6]),n(U,re),st.m(U,null),n(U,zt),n(U,_t),n(_t,Qt),I(o,Ft,u),I(o,at,u);for(let f=0;f<y.length;f+=1)y[f]&&y[f].m(at,null);ae||(ge=[B(T,"click",s[15]),B(F,"click",s[20]),B(z,"click",s[21]),B(G,"click",s[22]),B(W,"click",s[23]),B(j,"click",s[24]),B(N,"click",s[25]),B(R,"input",s[26]),B(nt,"click",s[18]),B(ot,"click",s[16]),B(rt,"click",s[17]),B(J,"input",s[27]),B(_t,"click",s[19])],ae=!0)},p(o,u){if(u[0]&48){gt=Ht(o[4]);let f;for(f=0;f<gt.length;f+=1){const ct=Me(o,gt,f);M[f]?M[f].p(ct,u):(M[f]=ye(ct),M[f].c(),M[f].m(v,null))}for(;f<M.length;f+=1)M[f].d(1);M.length=gt.length}if(u[0]&32&&(T.disabled=o[5]),u[0]&1&&Ut(ut,o[0]),u[0]&2&&R.value!==o[1]&&Wt(R,o[1]),u[0]&128&&Y(Z,"correct",o[7]),u[0]&256&&Y($,"correct",o[8]),u[0]&512&&Y(tt,"correct",o[9]),u[0]&1024&&Y(et,"correct",o[10]),u[0]&2048&&Y(lt,"correct",o[11]),u[0]&8&&Ut(qt,o[3]),u[0]&64&&J.value!==o[6]&&Wt(J,o[6]),Gt!==(Gt=Te(o))&&(st.d(1),st=Gt(o),st&&(st.c(),st.m(U,zt))),u[0]&8192&&Ut(Qt,o[13]),u[0]&16388){Tt=Ht(o[2]);let f;for(f=0;f<Tt.length;f+=1){const ct=Ne(o,Tt,f);y[f]?y[f].p(ct,u):(y[f]=De(ct),y[f].c(),y[f].m(at,null))}for(;f<y.length;f+=1)y[f].d(1);y.length=Tt.length}},i:jt,o:jt,d(o){o&&(_(t),_(St),_(D),_(Yt),_(U),_(Ft),_(at)),ce(M,o),st.d(),ce(y,o),ae=!1,Ue(ge)}}}const Re="ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";function Je(s,t,e){let l=[],r=[],i=0,C=[0,0,0],w=!1,v=!1,g="",T="",Q=!1,L=!1,b=!1,k=!1,x=!1,H=!1,O="Loading CAPTCHA...";function ut(V){let N=l[V];e(3,r+=N.letter),N=N}setInterval(()=>{v&&(console.log("showing letters"),Ct())},2e3);function Ct(){e(2,l=[]);for(let V of Re){let N=Math.random()*100,mt=Math.random()*100;l.push({letter:V,top:N,left:mt})}}function P(){e(5,w=!0),e(4,C[0]=Math.floor(Math.random()*31),C),e(4,C[1]=Math.floor(Math.random()*2500),C),e(4,C[2]=Math.floor(Math.random()*12),C),Et(),setTimeout(()=>{e(5,w=!1)},1e3)}function F(){e(3,r=r.slice(0,-1))}function Bt(){e(2,l=[]),v=!1}function Pt(){e(2,l=[]),v=!0,Ct()}function z(){O==="Failed to load CAPTCHA"&&e(13,O="Loading CAPTCHA..."),setInterval(()=>{e(13,O="Failed to load CAPTCHA")},Math.floor(Math.random()*3e4))}function Et(){let V=0;e(12,H=!0),g.length>=5?e(7,Q=!0):(e(7,Q=!1),e(12,H=!1));let N=g.replace(/\D/g,"");N.length>=2?e(8,L=!0):(e(8,L=!1),e(12,H=!1));let mt=N.split("");for(let S of mt)V+=parseInt(S,10),console.log(V);return V===30?e(10,k=!0):(e(10,k=!1),e(12,H=!1)),/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(g)?e(9,b=!0):(e(9,b=!1),e(12,H=!1)),console.log(C[1]),g.includes(C[1].toString())?e(11,x=!0):(e(11,x=!1),e(12,H=!1)),g}Be(()=>{P(),z()});const It=()=>e(0,i+=7),G=()=>e(0,i/=3),Ot=()=>e(0,i*=2),Nt=()=>e(0,i**=2),W=()=>e(0,i**=.5),Vt=()=>e(0,i-=3);function Mt(){g=this.value,e(1,g)}function j(){T=this.value,e(6,T)}const At=V=>ut(V);return s.$$.update=()=>{s.$$.dirty[0]&1&&e(0,i=Math.round(i)),s.$$.dirty[0]&1&&e(0,i=Math.abs(i)),s.$$.dirty[0]&2&&e(1,g=Et())},[i,g,l,r,C,w,T,Q,L,b,k,x,H,O,ut,P,F,Bt,Pt,z,It,G,Ot,Nt,W,Vt,Mt,j,At]}class $e extends Oe{constructor(t){super(),Ve(this,t,Je,je,He,{},null,[-1,-1])}}export{$e as component};
