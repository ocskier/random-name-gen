(this["webpackJsonprandom-name-gen"]=this["webpackJsonprandom-name-gen"]||[]).push([[0],{116:function(e,n,t){},125:function(e,n,t){},127:function(e,n,t){"use strict";t.r(n);var r=t(1),o=t.n(r),a=t(28),c=t.n(a),l=(t(116),t.p+"static/media/clock-ticking-4.92099e0a.mp3"),i=t(10),d=function(e){var n=e.soundEl;return Object(i.jsx)("audio",{ref:n,loop:!0,src:l})},s=t(91),u=t(16),b=t(141),g=t(142),j=t(86),h=t(81),p=["red","orange","yellow","olivegreen","teal","blue","violet","purple","pink","brown","grey","black"],x={card:{minHeight:"30vh"},description:{paddingTop:"2rem"},darkTxt:{color:"black"},lightTxt:{color:"white"},extra:{backgroundColor:"lightgray"},header:{marginTop:"0.8rem"},red:{backgroundColor:"red"},orange:{backgroundColor:"orange"},yellow:{backgroundColor:"yellow"},olivegreen:{backgroundColor:"olivegreen"},teal:{backgroundColor:"teal"},blue:{backgroundColor:"blue"},violet:{backgroundColor:"violet"},purple:{backgroundColor:"purple"},pink:{backgroundColor:"pink"},brown:{backgroundColor:"brown"},grey:{backgroundColor:"grey"},black:{backgroundColor:"black"}},O=function(e,n){return[-(n-window.innerHeight/2)/20,(e-window.innerWidth/2)/20,1.1]},k=function(e,n,t){return"perspective(600px) scale(".concat(t,")")},f=Object(j.animated)(b.a),m=function(e){var n=e.soundEl,t=Object(r.useState)(!1),o=Object(u.a)(t,2),a=o[0],c=o[1],l=Object(r.useState)("blue"),d=Object(u.a)(l,2),m=d[0],v=d[1],y=Object(r.useState)(h[0]),w=Object(u.a)(y,2),C=w[0],I=w[1],M=Object(j.useSpring)((function(){return{xys:[0,0,1]}})),T=Object(u.a)(M,2),S=T[0],E=T[1];Object(r.useEffect)((function(){v(p[Math.floor(Math.random()*p.length)])}),[v]);return Object(i.jsxs)(f,{centered:!0,raised:!0,style:Object(s.a)(Object(s.a)({},x.card),{},{transform:S.xys.interpolate(k)}),onMouseMove:function(e){var n=e.clientX,t=e.clientY;return E({xys:O(n,t)})},onMouseLeave:function(){return E({xys:[0,0,1]})},children:[Object(i.jsxs)(b.a.Content,{style:x[m],children:[Object(i.jsx)(b.a.Header,{style:Object.assign({},x.header,"yellow"===m||"teal"===m||"violet"===m||"pink"===m||"orange"===m?x.darkTxt:x.lightTxt),children:C}),Object(i.jsx)(b.a.Description,{style:Object.assign({},x.description,"yellow"===m||"teal"===m||"violet"===m||"pink"===m||"orange"===m?x.darkTxt:x.lightTxt),children:"Who's It going to be ?"})]}),Object(i.jsx)(b.a.Content,{extra:!0,style:x.extra,children:Object(i.jsx)("div",{className:"ui one buttons",children:Object(i.jsx)(g.a,{secondary:!0,color:"green",onClick:function(){if(window.myInterval)return clearInterval(window.myInterval),window.myInterval=0,c(!1),void n.current.pause();c(!0),n.current.play(),window.myInterval=window.setInterval((function(){v(p[Math.floor(Math.random()*p.length)]),I(h[Math.floor(Math.random()*h.length)])}),200)},loading:a||null,children:"Start"})})})]})},v=t(140),y={header:{width:"100%",backgroundColor:"mediumblue"}},w=function(){return Object(i.jsx)(v.a,{style:y.header,unit:"top banner",test:"Random Cold Caller"})},C=(t(125),{main:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"calc(100vh - 180px)"}});var I=function(){var e=Object(r.useRef)(null);return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(w,{}),Object(i.jsxs)("div",{style:C.main,children:[Object(i.jsx)(d,{soundEl:e}),Object(i.jsx)(m,{soundEl:e})]})]})},M=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,144)).then((function(n){var t=n.getCLS,r=n.getFID,o=n.getFCP,a=n.getLCP,c=n.getTTFB;t(e),r(e),o(e),a(e),c(e)}))};t(126);c.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(I,{})}),document.getElementById("root")),M()},81:function(e){e.exports=JSON.parse('["J","P","K","S"]')}},[[127,1,2]]]);
//# sourceMappingURL=main.4ea3b46d.chunk.js.map