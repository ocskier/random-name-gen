(this["webpackJsonprandom-name-gen"]=this["webpackJsonprandom-name-gen"]||[]).push([[0],{117:function(e,t,n){},126:function(e,t,n){},128:function(e,t,n){"use strict";n.r(t);var r,a=n(1),c=n.n(a),i=n(28),o=n.n(i),s=(n(117),n.p+"static/media/clock-ticking-4.92099e0a.mp3"),d=n(9),l=function(e){var t=e.soundEl;return Object(d.jsx)("audio",{ref:t,loop:!0,src:s})},b=n(82),u=n(13),g=n(142),j=n(143),x=n(83),p=n(84),h={card:{minHeight:"30vh",boxShadow:"0 0 0 3px #d4d4d5, 0 0px 10px 0 rgb(34 36 38 / 50%), 0 0px 10px 0 rgb(34 36 38 / 70%)"},description:{paddingTop:"2rem"},darkTxt:{color:"black"},lightTxt:{color:"white"},extra:{backgroundColor:"lightgray"},header:{marginTop:"0.8rem"},finalShadow:{boxShadow:"rgb(212 212 213) 0px 0px 0px 3px, rgb(34 36 38 / 50%) 0px 0px 20px 10px, rgb(34 36 38 / 70%) 0px 0px 20px 10px"}},O=function(e,t){return[-(t-window.innerHeight/2)/20,(e-window.innerWidth/2)/20,1.1]},f=function(e,t,n){return"perspective(600px) scale(".concat(n,")")},m=Object(x.animated)(g.a),v=function(){var e=function(e,t){return e+Math.floor(Math.random()*(t-e+1))},t=e(0,255),n=e(0,255),r=e(0,255);return{rgbVal:"rgb(".concat(t,",").concat(n,",").concat(r,")"),tone:r<128?"dark":"light"}},w=function(e){var t=e.soundEl,n=Object(a.useState)(!1),r=Object(u.a)(n,2),c=r[0],i=r[1],o=Object(a.useState)({rgbVal:"rgb(255,255,255)",tone:"light"}),s=Object(u.a)(o,2),l=s[0],w=s[1],y=Object(a.useState)(p[0]),k=Object(u.a)(y,2),S=k[0],C=k[1],T=Object(a.useState)(!1),I=Object(u.a)(T,2),M=I[0],E=I[1],J=Object(a.useState)(!1),F=Object(u.a)(J,2),H=F[0],L=F[1],B=Object(x.useSpring)({from:{x:0},x:M?1:0,config:{duration:150}}).x,N=Object(x.useSpring)((function(){return{xys:[0,0,1]}})),V=Object(u.a)(N,2),D=V[0],P=V[1];Object(a.useEffect)((function(){w(v())}),[w]);return Object(d.jsxs)(m,{centered:!0,raised:!0,style:Object.assign({},Object(b.a)(Object(b.a)({},h.card),{},{transform:D.xys.to(f),scale:B.to({range:[0,.25,.35,.45,.55,.65,.75,1],output:[1,.97,.9,1.1,.9,1.1,1.03,1]})}),H?Object(b.a)({},h.finalShadow):{}),onMouseMove:function(e){var t=e.clientX,n=e.clientY;return P({xys:O(t,n)})},onMouseLeave:function(){P({xys:[0,0,1]}),L(!1)},children:[Object(d.jsxs)(g.a.Content,{style:{backgroundColor:l.rgbVal},children:[Object(d.jsx)(g.a.Header,{style:Object.assign({},h.header,"light"===l.tone?h.darkTxt:h.lightTxt),children:S}),Object(d.jsx)(g.a.Description,{style:Object.assign({},h.description,"light"===l.tone?h.darkTxt:h.lightTxt),children:"Who's it going to be ?"})]}),Object(d.jsx)(g.a.Content,{extra:!0,style:h.extra,children:Object(d.jsx)("div",{className:"ui one buttons",children:Object(d.jsx)(j.a,{secondary:!0,color:"green",onClick:function(){if(window.myInterval)return clearInterval(window.myInterval),window.myInterval=0,i(!1),E(!M),L(!0),void t.current.pause();i(!0),L(!1),t.current.play(),window.myInterval=window.setInterval((function(){w(v()),C(p[Math.floor(Math.random()*p.length)])}),150)},loading:c||null,children:"Start"})})})]})},y=n(55),k=n(141),S={header:(r={width:"100%",background:"rgb(9, 20, 164)"},Object(y.a)(r,"background","-moz-radial-gradient(center, rgb(9,20,164) 0%, rgb(35,136,203) 60%, rgb(10,77,117) 100%)"),Object(y.a)(r,"background","-webkit-radial-gradient(center, rgb(9,20,164) 0%, rgb(35,136,203) 60%, rgb(10,77,117) 100%)"),Object(y.a)(r,"background","radial-gradient(ellipse at center, rgb(9,20,164) 0%, rgb(35,136,203) 60%, rgb(10,77,117) 100%)"),r)},C=function(){return Object(d.jsx)(k.a,{style:S.header,unit:"top banner",test:"Random Cold Caller"})},T=(n(126),{bg:{width:"100%",position:"absolute",height:"calc(100vh - 180px)",opacity:"0.75"},main:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"calc(100vh - 180px)"}});var I=function(){var e=Object(a.useRef)(null);return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(C,{}),Object(d.jsxs)("div",{style:T.main,children:[Object(d.jsx)("div",{style:T.bg}),Object(d.jsx)(l,{soundEl:e}),Object(d.jsx)(w,{soundEl:e})]})]})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,145)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};n(127);o.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(I,{})}),document.getElementById("root")),M()},84:function(e){e.exports=JSON.parse('["Jon","Jane","Bob","Jimmy","Len","Maria","Susan"]')}},[[128,1,2]]]);
//# sourceMappingURL=main.1c68a869.chunk.js.map