import{S,i as g,s as k,k as E,q as h,a as y,l as R,m as $,r as c,h as p,c as A,n as C,b as v,F as _,u as q,G as x,R as F}from"../chunks/index.e71b713a.js";import{p as G}from"../chunks/stores.fb0202ef.js";function H(l){var b;let t,s=l[0].status+"",r,n,i=((b=l[0].error)==null?void 0:b.message)+"",u,f,o,d;return{c(){t=E("h1"),r=h(s),n=h(": "),u=h(i),f=y(),o=E("a"),d=h("Return home"),this.h()},l(e){t=R(e,"H1",{});var a=$(t);r=c(a,s),n=c(a,": "),u=c(a,i),a.forEach(p),f=A(e),o=R(e,"A",{href:!0});var m=$(o);d=c(m,"Return home"),m.forEach(p),this.h()},h(){C(o,"href","/")},m(e,a){v(e,t,a),_(t,r),_(t,n),_(t,u),v(e,f,a),v(e,o,a),_(o,d)},p(e,[a]){var m;a&1&&s!==(s=e[0].status+"")&&q(r,s),a&1&&i!==(i=((m=e[0].error)==null?void 0:m.message)+"")&&q(u,i)},i:x,o:x,d(e){e&&p(t),e&&p(f),e&&p(o)}}}function j(l,t,s){let r;return F(l,G,n=>s(0,r=n)),[r]}class B extends S{constructor(t){super(),g(this,t,j,H,k,{})}}export{B as default};
