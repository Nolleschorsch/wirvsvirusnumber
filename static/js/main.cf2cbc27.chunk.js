(this["webpackJsonpip-stuff"]=this["webpackJsonpip-stuff"]||[]).push([[0],{30:function(e,t,a){},31:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(12),r=a.n(s),j=(a(30),a(7)),i=a(6),u=(a(31),a(32),a(38)),b=a(39),l=a(41),o=a(23),O=a(40),d=a(42),x=a(1),f=function(){var e=Object(c.useState)(0),t=Object(i.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(""),r=Object(i.a)(s,2),j=r[0],u=r[1],b=Object(c.useState)(""),f=Object(i.a)(b,2),h=f[0],v=f[1],m=!a||!j;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)(l.a,{className:"mb-3",children:[Object(x.jsx)(l.a.Text,{children:"Dezimal"}),Object(x.jsx)(o.a,{value:a,onChange:function(e){var t=e.target.value;parseInt(t)>=0?n(parseInt(t)):n(0)}}),Object(x.jsxs)(O.a.Select,{value:j,onChange:function(e){u(e.target.value)},children:[Object(x.jsx)("option",{children:"select base"}),Object(x.jsx)("option",{value:"2",children:"2"}),Object(x.jsx)("option",{value:"8",children:"8"}),Object(x.jsx)("option",{value:"16",children:"16"})]}),Object(x.jsx)(d.a,{disabled:m,onClick:function(){for(var e=[],t=a,c=parseInt(j),n="";;){var s=t,r=t%c;t=Math.floor(t/c);var i=void 0;switch(r){case 10:i="A";break;case 11:i="B";break;case 12:i="C";break;case 13:i="D";break;case 14:i="E";break;case 15:i="F";break;default:i=r}if(e.push(i),n+="dividing ".concat(s," by ").concat(c," gives ").concat(t," rest ").concat(i,"\n"),0===t)break}e.reverse();var u=e.join("");n+="The converted number is ".concat(u),v(n)},children:"Calculate"})]}),Object(x.jsx)(O.a.Control,{disabled:!0,as:"textarea",placeholder:"Click calculate button to show calculation steps...",value:h,style:{height:"400px"}})]})},h=function(e){for(var t=[],a=e;;){var c=a%2;if(a=Math.floor(a/2),t.push(c),0===a)break}return t.reverse(),t.join("")},v=function(e){var t=0;return Object(j.a)(e).reverse().forEach((function(e,a){"1"===e&&(t+=Math.pow(2,a))})),t},m=function(e,t){for(var a=t||8,c=Object(j.a)(e);c.length<a;)c.unshift("0");return c.join("")},p=function(e){var t=function(t,a){var n=""===t.target.value?"0":t.target.value,s=e.mehStuff[a].setDezi,r=parseInt(n);if(r>=0&&r<=255&&function(e){return Object(j.a)(e).every((function(e){return["0","1","2","3","4","5","6","7","8","9"].includes(e)}))}(n)){s(r);var i=h(r);c(i,a)}},a=function(t,a){var c=t.target.value,n=e.mehStuff[a],s=n.setDezi,r=n.setOctet;Object(j.a)(c).every((function(e){return["0","1"].includes(e)}))&&(r(c),s(v(c)))},c=function(t,a){(0,e.mehStuff[a].setOctet)(m(t))},n=Object(i.a)(e.mehStuff,4),s=n[0],r=n[1],u=n[2],b=n[3],O=e.mehStuff,d=e.restricted,f="",p=Object(j.a)(O).map((function(e){return d?(f+=e.octet,(t=f).split("0").filter((function(e){return""!==e})).length<=1&&("0"!==t[0]||Object(j.a)(t).every((function(e){return"0"===e})))?{}:{border:"solid red 1px"}):{};var t})),y=Object(i.a)(p,4),g=y[0],S=y[1],z=y[2],C=y[3];return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h3",{children:e.title}),Object(x.jsxs)(l.a,{className:"mb-3",children:[Object(x.jsx)(l.a.Text,{children:"Dezimal"}),Object(x.jsx)(o.a,{style:g,value:s.dezi,type:"text",onChange:function(e){t(e,0)}}),Object(x.jsx)(o.a,{style:S,value:r.dezi,type:"text",onChange:function(e){t(e,1)}}),Object(x.jsx)(o.a,{style:z,value:u.dezi,type:"text",onChange:function(e){t(e,2)}}),Object(x.jsx)(o.a,{style:C,value:b.dezi,type:"text",onChange:function(e){t(e,3)}})]}),Object(x.jsxs)(l.a,{className:"mb-3",children:[Object(x.jsx)(l.a.Text,{children:"Binary"}),Object(x.jsx)(o.a,{style:g,value:s.octet,type:"text",onChange:function(e){return a(e,0)},onBlur:function(e){c(e.target.value,0)}}),Object(x.jsx)(o.a,{style:S,value:r.octet,type:"text",onChange:function(e){return a(e,1)},onBlur:function(e){c(e.target.value,1)}}),Object(x.jsx)(o.a,{style:z,value:u.octet,type:"text",onChange:function(e){return a(e,2)},onBlur:function(e){c(e.target.value,2)}}),Object(x.jsx)(o.a,{style:C,value:b.octet,type:"text",onChange:function(e){return a(e,3)},onBlur:function(e){c(e.target.value,3)}})]})]})},y=function(e){var t=Object(i.a)(e.mehStuff,2),a=t[0],c=t[1],n=a.map((function(e,t){return function(e,t){for(var a=[e,t].sort((function(e,t){return e.length>t.length?1:-1}));a[0].length<a[1].length;)a[0]="0"+a[0];var c="";return Object(j.a)(a[0]).forEach((function(e,t){"1"===e&&"1"===a[1][t]?c+="1":c+="0"})),c}(e.octet,c[t].octet)})),s=Object(i.a)(n,4),r=s[0],u=s[1],b=s[2],O=s[3],d=c.map((function(e){return e.octet})),f=Object(i.a)(d,4),p=f[0],y=f[1],g=f[2],S=f[3],z=c.map((function(e,t){return function(e,t){var a=Object(j.a)(e).filter((function(e){return"0"===e})).length;return 0===a?v(t):Math.pow(2,a)-1}(e.octet,a[t].octet)}));[p,y,g,S].forEach((function(e,t){var a=Object(j.a)(e).reduce((function(e,t){return"0"===t?e+1:e}),0);Object(j.a)(e).some((function(e){return"0"===e}))&&(z[t]=v(n[t])+Math.pow(2,a)-1)}));var C=Object(i.a)(z,4),D=C[0],k=C[1],B=C[2],w=C[3];return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h3",{children:e.title}),Object(x.jsxs)(l.a,{className:"mb-3",children:[Object(x.jsx)(l.a.Text,{children:"Dezimal"}),Object(x.jsx)(o.a,{type:"number",min:"0",max:"255",value:v(r),disabled:!0}),Object(x.jsx)(o.a,{type:"number",min:"0",max:"255",value:v(u),disabled:!0}),Object(x.jsx)(o.a,{type:"number",min:"0",max:"255",value:v(b),disabled:!0}),Object(x.jsx)(o.a,{type:"number",min:"0",max:"255",value:v(O),disabled:!0})]}),Object(x.jsxs)(l.a,{className:"mb-3",children:[Object(x.jsx)(l.a.Text,{children:"Binary"}),Object(x.jsx)(o.a,{type:"text",value:r,disabled:!0}),Object(x.jsx)(o.a,{type:"text",value:u,disabled:!0}),Object(x.jsx)(o.a,{type:"text",value:b,disabled:!0}),Object(x.jsx)(o.a,{type:"text",value:O,disabled:!0})]}),Object(x.jsx)("h3",{children:"Broadcast Address"}),Object(x.jsxs)(l.a,{className:"mb-3",children:[Object(x.jsx)(l.a.Text,{children:"Dezimal"}),Object(x.jsx)(o.a,{type:"number",min:"0",max:"255",value:D,disabled:!0}),Object(x.jsx)(o.a,{type:"number",min:"0",max:"255",value:k,disabled:!0}),Object(x.jsx)(o.a,{type:"number",min:"0",max:"255",value:B,disabled:!0}),Object(x.jsx)(o.a,{type:"number",min:"0",max:"255",value:w,disabled:!0})]}),Object(x.jsxs)(l.a,{className:"mb-3",children:[Object(x.jsx)(l.a.Text,{children:"Binary"}),Object(x.jsx)(o.a,{type:"text",value:m(h(D)),disabled:!0}),Object(x.jsx)(o.a,{type:"text",value:m(h(k)),disabled:!0}),Object(x.jsx)(o.a,{type:"text",value:m(h(B)),disabled:!0}),Object(x.jsx)(o.a,{type:"text",value:m(h(w)),disabled:!0})]})]})},g=function(){var e=Object(c.useState)("00000000"),t=Object(i.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)("00000000"),r=Object(i.a)(s,2),l=r[0],o=r[1],O=Object(c.useState)("00000000"),d=Object(i.a)(O,2),h=d[0],v=d[1],m=Object(c.useState)("00000000"),g=Object(i.a)(m,2),S=g[0],z=g[1],C=Object(c.useState)(0),D=Object(i.a)(C,2),k=D[0],B=D[1],w=Object(c.useState)(0),T=Object(i.a)(w,2),I=T[0],M=T[1],F=Object(c.useState)(0),N=Object(i.a)(F,2),A=N[0],E=N[1],P=Object(c.useState)(0),K=Object(i.a)(P,2),H=K[0],J=K[1],L=Object(c.useState)("11111111"),V=Object(i.a)(L,2),q=V[0],G=V[1],Q=Object(c.useState)("11111111"),R=Object(i.a)(Q,2),U=R[0],W=R[1],X=Object(c.useState)("11111111"),Y=Object(i.a)(X,2),Z=Y[0],$=Y[1],_=Object(c.useState)("00000000"),ee=Object(i.a)(_,2),te=ee[0],ae=ee[1],ce=Object(c.useState)(255),ne=Object(i.a)(ce,2),se=ne[0],re=ne[1],je=Object(c.useState)(255),ie=Object(i.a)(je,2),ue=ie[0],be=ie[1],le=Object(c.useState)(255),oe=Object(i.a)(le,2),Oe=oe[0],de=oe[1],xe=Object(c.useState)(0),fe=Object(i.a)(xe,2),he=fe[0],ve=[[{setOctet:n,setDezi:B,octet:a,dezi:k},{setOctet:o,setDezi:M,octet:l,dezi:I},{setOctet:v,setDezi:E,octet:h,dezi:A},{setOctet:z,setDezi:J,octet:S,dezi:H}],[{setOctet:G,setDezi:re,octet:q,dezi:se},{setOctet:W,setDezi:be,octet:U,dezi:ue},{setOctet:$,setDezi:de,octet:Z,dezi:Oe},{setOctet:ae,setDezi:fe[1],octet:te,dezi:he}]],me=Math.pow(2,[].concat(Object(j.a)(q),Object(j.a)(U),Object(j.a)(Z),Object(j.a)(te)).filter((function(e){return"0"===e})).length)-2,pe=[q,U,Z,te].map((function(e){return Object(j.a)(e).some((function(e){return"0"===e}))?Object(j.a)(e).reduce((function(e,t){return"1"===t?e+1:e}),0):0})).reduce((function(e,t){return e+t})),ye=Math.pow(2,pe);return Object(x.jsx)(u.a,{children:Object(x.jsxs)(b.a,{defaultActiveKey:"0",children:[Object(x.jsxs)(b.a.Item,{eventKey:"0",children:[Object(x.jsx)(b.a.Header,{children:"Calculation Visualization"}),Object(x.jsx)(b.a.Body,{children:Object(x.jsx)(f,{})})]}),Object(x.jsxs)(b.a.Item,{eventKey:"1",children:[Object(x.jsx)(b.a.Header,{children:"IPV4Stuff"}),Object(x.jsxs)(b.a.Body,{children:[Object(x.jsx)(p,{title:"IP-Address",mehStuff:ve[0]}),Object(x.jsx)(p,{title:"Subnet Mask",mehStuff:ve[1],restricted:!0}),Object(x.jsxs)("h3",{children:["There are ",ye," subnets with ",me," hosts each available."]}),Object(x.jsx)(y,{title:"Network Address",mehStuff:ve})]})]})]})})},S=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,43)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(g,{})}),document.getElementById("root")),S()}},[[36,1,2]]]);
//# sourceMappingURL=main.cf2cbc27.chunk.js.map