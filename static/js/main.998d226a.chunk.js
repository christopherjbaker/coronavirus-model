(this["webpackJsonpcoronavirus-model"]=this["webpackJsonpcoronavirus-model"]||[]).push([[0],{75:function(e,t,a){e.exports=a(85)},85:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),l=a.n(o),i=a(34),c=a(27),s=a(62),m=a(116),u=Object(s.a)({overrides:{MuiTypography:{h1:{fontSize:"3.25rem",fontWeight:300},h2:{fontSize:"2.75rem",fontWeight:300},h3:{fontSize:"2.25rem",fontWeight:400},h4:{fontSize:"2rem",fontWeight:400},h5:{fontSize:"1.5rem",fontWeight:400},h6:{fontSize:"1.25rem",fontWeight:500}},MuiIcon:{root:{width:"1.25em",textAlign:"center"}}}});var d=a(63),h=a(39),p=a(117),f=a(120),b=a(86),v=a(121),E=a(131),g=a(122),y=a(87),w=a(130),j=[{label:"Info",to:"/",exact:!0},{label:"Recommendations",to:"/recommendations"}];var O=a(123);var k=a(38),I=a(126),W=a(127),x=a(129),S=a(128),P=a(132),C=a(134),M=a(125),N=a(49),z=a.n(N),A=(a(84),{solid:"fas",regular:"far",light:"fal",duotone:"fad",brands:"fab"});function B(e){var t=e.className,a=e.name,n=e.title,o=e.variant,l=e.color,i=e.size,c=Object(h.a)(e,["className","name","title","variant","color","size"]);return n?r.a.createElement(C.a,{title:n},r.a.createElement(M.a,Object.assign({},c,{"aria-hidden":!1,className:z()(t,"".concat(A[o]," fa-").concat(a)),color:l,fontSize:i}))):r.a.createElement(M.a,Object.assign({},c,{"aria-hidden":!1,className:z()(t,"".concat(A[o]," fa-").concat(a)),color:l,fontSize:i}))}B.defaultProps={variant:"solid"};var L=[{test:function(e,t){return t.today>e},severity:"error",label:"Close immediately!"},{test:function(e,t){return t.tomorrow>e},severity:"warning",label:"Close before tomorrow."},{test:function(e,t){return t.week>e},severity:"info",label:"Close within a week."},{test:function(){return!0},severity:"success",label:"No need to close this coming week."}],T=Object(I.a)((function(){return{label:{whiteSpace:"nowrap"}}}));function F(e,t,a){var n=a/.0087*Math.pow(2,17.3/6.18),r=n/e,o=n*Math.pow(2,1/6.18)/e,l=n*Math.pow(2,7/6.18)/e;return{today:1-Math.pow(1-r,t),tomorrow:1-Math.pow(1-o,t),week:1-Math.pow(1-l,t)}}l.a.render(r.a.createElement(i.a,{basename:"/coronavirus-model"},r.a.createElement((function(e){var t=e.children;return r.a.createElement(m.a,{theme:u},t)}),null,r.a.createElement((function(e){var t=e.children,a=Object(h.a)(e,["children"]),n=Object(c.f)().pathname,o=j.findIndex((function(e){var t=e.to,a=Object(h.a)(e,["to"]);return Object(c.e)(n,Object(d.a)({path:t},a))}));return r.a.createElement(p.a,Object.assign({maxWidth:"md"},a),r.a.createElement(f.a,null),r.a.createElement(b.a,{variant:"h1",gutterBottom:!0},"Coronavirus Work From Home Model"),r.a.createElement(v.a,{position:"static"},r.a.createElement(E.a,{value:!(o<0)&&o},j.map((function(e){var t=e.label,a=e.to;return r.a.createElement(g.a,{key:a,component:i.b,to:a,label:t})})))),r.a.createElement(y.a,null,r.a.createElement(w.a,{p:3},t)))}),null,r.a.createElement(c.c,null,r.a.createElement(c.a,{path:"/",exact:!0},r.a.createElement((function(){return r.a.createElement("div",null,r.a.createElement(b.a,{variant:"h2",gutterBottom:!0},"Model Information"),r.a.createElement(b.a,{paragraph:!0},"This model should help you and your company make a decision on whether you should open your office or send everybody home."),r.a.createElement(b.a,{paragraph:!0},"It\u2018s based on how many cases are probably in your area, and the likelihood that at least one of your employees catches it. It has lots of assumptions, but all the data is here so you can play with the assumptions to adapt them to your situation. You only ",r.a.createElement("strong",null,"need")," to make changes to the Recommendations tab; the rest are data inputs that you can change to adjust the model."),r.a.createElement(b.a,{paragraph:!0},"Please leave comments to improve it."))}),null)),r.a.createElement(c.a,{path:"/recommendations",exact:!0},r.a.createElement((function(){var e=T(),t=Object(n.useState)(""),a=Object(k.a)(t,2),o=a[0],l=a[1],i=Object(n.useState)(""),c=Object(k.a)(i,2),s=c[0],m=c[1],u=Object(n.useState)(""),d=Object(k.a)(u,2),h=d[0],p=d[1],f=Object(n.useState)(""),v=Object(k.a)(f,2),E=v[0],g=v[1],y=Object(n.useState)(""),w=Object(k.a)(y,2),j=w[0],O=w[1],I=Object(n.useMemo)((function(){return s&&h&&(E||j)?{deaths:j?F(h,s,j):null}:null}),[s,h,E,j]),C=o&&I&&I.cases&&L.find((function(e){return(0,e.test)(o/100,I.cases)})),M=o&&I&&I.deaths&&L.find((function(e){return(0,e.test)(o/100,I.deaths)}));return r.a.createElement("div",null,r.a.createElement(b.a,{variant:"h2",gutterBottom:!0},"When should you close your office?"),r.a.createElement(W.a,{container:!0,spacing:4},o&&I?r.a.createElement(r.a.Fragment,null,r.a.createElement(W.a,{item:!0,xs:12,md:6},C?r.a.createElement(P.a,{variant:"filled",elevation:6,severity:C.severity},C.label," Click for more information."):r.a.createElement(P.a,{variant:"standard",elevation:6,severity:"info"},"Enter the number of cases for a recommendation.")),r.a.createElement(W.a,{item:!0,xs:12,md:6},M?r.a.createElement(P.a,{variant:"filled",elevation:6,severity:M.severity},M.label," Click for more information."):r.a.createElement(P.a,{variant:"standard",elevation:6,severity:"info"},"Enter the number of deaths for a recommendation."))):r.a.createElement(W.a,{item:!0,xs:12},r.a.createElement(P.a,{variant:"standard",elevation:6,severity:"info"},"Fill out the form to get a recommendation.")),r.a.createElement(W.a,{item:!0,xs:12,sm:4},r.a.createElement(x.a,{id:"risk",type:"number",fullWidth:!0,label:"What risk are you willing to take?",value:o,onChange:function(e){return l(e.target.value&&+e.target.value)},InputLabelProps:{className:e.label},InputProps:{startAdornment:r.a.createElement(S.a,{position:"start"},r.a.createElement(B,{name:"percent"}))}})),r.a.createElement(W.a,{item:!0,xs:12,sm:4},r.a.createElement(x.a,{id:"employees",type:"number",fullWidth:!0,label:"How many employees do you have?",value:s,onChange:function(e){return m(e.target.value&&+e.target.value)},InputLabelProps:{className:e.label},InputProps:{startAdornment:r.a.createElement(S.a,{position:"start"},r.a.createElement(B,{name:"tally"}))}})),r.a.createElement(W.a,{item:!0,xs:12,sm:4},r.a.createElement(x.a,{id:"population",type:"number",fullWidth:!0,label:"What is the area population?",value:h,onChange:function(e){return p(e.target.value&&+e.target.value)},InputLabelProps:{className:e.label},InputProps:{startAdornment:r.a.createElement(S.a,{position:"start"},r.a.createElement(B,{name:"globe-americas"}))}})),r.a.createElement(W.a,{item:!0,xs:12,sm:6},r.a.createElement(x.a,{id:"cases",type:"number",fullWidth:!0,label:"Total cases as of today",value:E,onChange:function(e){return g(e.target.value&&+e.target.value)},InputLabelProps:{className:e.label},InputProps:{startAdornment:r.a.createElement(S.a,{position:"start"},r.a.createElement(B,{name:"disease"}))}})),r.a.createElement(W.a,{item:!0,xs:12,sm:6},r.a.createElement(x.a,{id:"deaths",type:"number",fullWidth:!0,label:"Total deaths as of today",value:j,onChange:function(e){return O(e.target.value&&+e.target.value)},InputLabelProps:{className:e.label},InputProps:{startAdornment:r.a.createElement(S.a,{position:"start"},r.a.createElement(B,{name:"skull-crossbones"}))}}))))}),null)),r.a.createElement(c.a,null,r.a.createElement((function(){return r.a.createElement("div",null,r.a.createElement(b.a,{variant:"h2",gutterBottom:!0},"Oops! Page Not Found"),r.a.createElement(b.a,{paragraph:!0},"Something went wrong. The page you are looking for could not be found."),r.a.createElement(b.a,{paragraph:!0},r.a.createElement(O.a,{variant:"contained",color:"primary",component:i.b,to:"/"},"Go Home")))}),null)))))),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.998d226a.chunk.js.map