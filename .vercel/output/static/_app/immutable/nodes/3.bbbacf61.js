import{s as K,f as u,a as b,g as c,h as T,B as L,c as x,d as E,j as t,i as J,C as a,I as Q,y as z,l as W,m as X,n as Y}from"../chunks/scheduler.9428e398.js";import{S as Z,i as $}from"../chunks/index.b8fe6288.js";import{e as ee}from"../chunks/forms.d95c3e1b.js";function G(p){var I;let l,n,e=((I=p[0])==null?void 0:I.messeage)+"",i;return{c(){l=u("div"),n=u("p"),i=W(e),this.h()},l(f){l=c(f,"DIV",{class:!0});var o=T(l);n=c(o,"P",{});var _=T(n);i=X(_,e),_.forEach(E),o.forEach(E),this.h()},h(){t(l,"class","error svelte-ay6lwu")},m(f,o){J(f,l,o),a(l,n),a(n,i)},p(f,o){var _;o&1&&e!==(e=((_=f[0])==null?void 0:_.messeage)+"")&&Y(i,e)},d(f){f&&E(l)}}}function te(p){var j;let l,n,e,i,I="Sign in",f,o,_="Email",P,m,B,D,S,h,U="Password",V,w,k,H,y,A="Sign in",M,N,g,F='<p>First time here?</p> <a href="/auth/register" class="svelte-ay6lwu">Create an account</a>',R,O,r=((j=p[0])==null?void 0:j.messeage)&&G(p);return{c(){l=u("div"),n=u("div"),e=u("form"),i=u("h1"),i.textContent=I,f=b(),o=u("label"),o.textContent=_,P=b(),m=u("input"),D=u("br"),S=b(),h=u("label"),h.textContent=U,V=b(),w=u("input"),k=u("br"),H=b(),y=u("button"),y.textContent=A,M=b(),r&&r.c(),N=b(),g=u("div"),g.innerHTML=F,this.h()},l(d){l=c(d,"DIV",{class:!0});var v=T(l);n=c(v,"DIV",{class:!0});var C=T(n);e=c(C,"FORM",{action:!0,method:!0,class:!0});var s=T(e);i=c(s,"H1",{class:!0,"data-svelte-h":!0}),L(i)!=="svelte-1bzrg77"&&(i.textContent=I),f=x(s),o=c(s,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),L(o)!=="svelte-1p9d3fm"&&(o.textContent=_),P=x(s),m=c(s,"INPUT",{type:!0,name:!0,id:!0,class:!0}),D=c(s,"BR",{}),S=x(s),h=c(s,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),L(h)!=="svelte-pepa0a"&&(h.textContent=U),V=x(s),w=c(s,"INPUT",{type:!0,name:!0,id:!0,class:!0}),k=c(s,"BR",{}),H=x(s),y=c(s,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),L(y)!=="svelte-13remx3"&&(y.textContent=A),M=x(s),r&&r.l(s),s.forEach(E),N=x(C),g=c(C,"DIV",{class:!0,"data-svelte-h":!0}),L(g)!=="svelte-1s7flgi"&&(g.innerHTML=F),C.forEach(E),v.forEach(E),this.h()},h(){var d,v;t(i,"class","title svelte-ay6lwu"),t(o,"for","email"),t(o,"class","svelte-ay6lwu"),t(m,"type","email"),t(m,"name","email"),t(m,"id","email"),m.value=B=((v=(d=p[0])==null?void 0:d.data)==null?void 0:v.email)??"",t(m,"class","svelte-ay6lwu"),t(h,"for","password"),t(h,"class","svelte-ay6lwu"),t(w,"type","password"),t(w,"name","password"),t(w,"id","password"),t(w,"class","svelte-ay6lwu"),t(y,"type","submit"),t(y,"class","svelte-ay6lwu"),t(e,"action","?/login"),t(e,"method","post"),t(e,"class","svelte-ay6lwu"),t(g,"class","link svelte-ay6lwu"),t(n,"class","widget svelte-ay6lwu"),t(l,"class","container svelte-ay6lwu")},m(d,v){J(d,l,v),a(l,n),a(n,e),a(e,i),a(e,f),a(e,o),a(e,P),a(e,m),a(e,D),a(e,S),a(e,h),a(e,V),a(e,w),a(e,k),a(e,H),a(e,y),a(e,M),r&&r.m(e,null),a(n,N),a(n,g),R||(O=Q(ee.call(null,e)),R=!0)},p(d,[v]){var C,s,q;v&1&&B!==(B=((s=(C=d[0])==null?void 0:C.data)==null?void 0:s.email)??"")&&m.value!==B&&(m.value=B),(q=d[0])!=null&&q.messeage?r?r.p(d,v):(r=G(d),r.c(),r.m(e,null)):r&&(r.d(1),r=null)},i:z,o:z,d(d){d&&E(l),r&&r.d(),R=!1,O()}}}function ae(p,l,n){let{form:e}=l;return p.$$set=i=>{"form"in i&&n(0,e=i.form)},[e]}class re extends Z{constructor(l){super(),$(this,l,ae,te,K,{form:0})}}export{re as component};
