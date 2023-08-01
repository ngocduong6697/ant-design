"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[8582],{593576:function(O,_,e){e.r(_);var h=e(719632),d=e.n(h),s=e(805574),r=e.n(s),n=e(667294),o=e(551042),t=e(752376),a=e(965516),c=e(899242),i=e(432210),l=e(785893),D=function(){var T=a.Z.useToken(),g=T.token,B=(0,n.useState)(["Tag 1","Tag 2","Tag 3"]),Z=r()(B,2),E=Z[0],v=Z[1],j=(0,n.useState)(!1),M=r()(j,2),P=M[0],A=M[1],W=(0,n.useState)(""),U=r()(W,2),C=U[0],R=U[1],K=(0,n.useRef)(null);(0,n.useEffect)(function(){if(P){var x;(x=K.current)===null||x===void 0||x.focus()}},[P]);var Y=function(f){var L=E.filter(function(F){return F!==f});console.log(L),v(L)},y=function(){A(!0)},S=function(f){R(f.target.value)},p=function(){C&&E.indexOf(C)===-1&&v([].concat(d()(E),[C])),A(!1),R("")},G=function(f){var L=(0,l.jsx)(c.Z,{closable:!0,onClose:function(H){H.preventDefault(),Y(f)},children:f});return(0,l.jsx)("span",{style:{display:"inline-block"},children:L},f)},z=E.map(G),V={background:g.colorBgContainer,borderStyle:"dashed"};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{style:{marginBottom:16},children:(0,l.jsx)(t.Z,{enter:{scale:.8,opacity:0,type:"from",duration:100},onEnd:function(f){(f.type==="appear"||f.type==="enter")&&(f.target.style="display: inline-block")},leave:{opacity:0,width:0,scale:0,duration:200},appear:!1,children:z})}),P?(0,l.jsx)(i.Z,{ref:K,type:"text",size:"small",style:{width:78},value:C,onChange:S,onBlur:p,onPressEnter:p}):(0,l.jsxs)(c.Z,{onClick:y,style:V,children:[(0,l.jsx)(o.Z,{})," New Tag"]})]})};_.default=D},621535:function(O,_,e){e.r(_);var h=e(418429),d=e(667294),s=e(945016),r=e(899242),n=e(785893),o=function(i){console.log(i)},t=function(i){i.preventDefault(),console.log("Clicked! But prevent default.")},a=function(){return(0,n.jsxs)(s.Z,{size:[0,8],wrap:!0,children:[(0,n.jsx)(r.Z,{children:"Tag 1"}),(0,n.jsx)(r.Z,{children:(0,n.jsx)("a",{href:"https://github.com/ant-design/ant-design/issues/1862",children:"Link"})}),(0,n.jsx)(r.Z,{closeIcon:!0,onClose:t,children:"Prevent Default"}),(0,n.jsx)(r.Z,{closeIcon:(0,n.jsx)(h.Z,{}),onClose:o,children:"Tag 2"})]})};_.default=a},292943:function(O,_,e){e.r(_);var h=e(667294),d=e(945016),s=e(899242),r=e(315816),n=e(785893),o=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(d.Z,{size:[0,"small"],wrap:!0,children:[(0,n.jsx)(s.Z,{bordered:!1,children:"Tag 1"}),(0,n.jsx)(s.Z,{bordered:!1,children:"Tag 2"}),(0,n.jsx)(s.Z,{bordered:!1,closable:!0,children:"Tag 3"}),(0,n.jsx)(s.Z,{bordered:!1,closable:!0,children:"Tag 4"})]}),(0,n.jsx)(r.Z,{}),(0,n.jsxs)(d.Z,{size:[0,"small"],wrap:!0,children:[(0,n.jsx)(s.Z,{bordered:!1,color:"processing",children:"processing"}),(0,n.jsx)(s.Z,{bordered:!1,color:"success",children:"success"}),(0,n.jsx)(s.Z,{bordered:!1,color:"error",children:"error"}),(0,n.jsx)(s.Z,{bordered:!1,color:"warning",children:"warning"}),(0,n.jsx)(s.Z,{bordered:!1,color:"magenta",children:"magenta"}),(0,n.jsx)(s.Z,{bordered:!1,color:"red",children:"red"}),(0,n.jsx)(s.Z,{bordered:!1,color:"volcano",children:"volcano"}),(0,n.jsx)(s.Z,{bordered:!1,color:"orange",children:"orange"}),(0,n.jsx)(s.Z,{bordered:!1,color:"gold",children:"gold"}),(0,n.jsx)(s.Z,{bordered:!1,color:"lime",children:"lime"}),(0,n.jsx)(s.Z,{bordered:!1,color:"green",children:"green"}),(0,n.jsx)(s.Z,{bordered:!1,color:"cyan",children:"cyan"}),(0,n.jsx)(s.Z,{bordered:!1,color:"blue",children:"blue"}),(0,n.jsx)(s.Z,{bordered:!1,color:"geekblue",children:"geekblue"}),(0,n.jsx)(s.Z,{bordered:!1,color:"purple",children:"purple"})]})]})};_.default=o},362308:function(O,_,e){e.r(_);var h=e(667294),d=e(965516),s=e(945016),r=e(899242),n=e(315816),o=e(785893),t=function(){var c=d.Z.useToken(),i=c.token;return(0,o.jsxs)("div",{style:{backgroundColor:i.colorBgLayout,padding:16},children:[(0,o.jsxs)(s.Z,{size:[0,"small"],wrap:!0,children:[(0,o.jsx)(r.Z,{bordered:!1,children:"Tag 1"}),(0,o.jsx)(r.Z,{bordered:!1,children:"Tag 2"}),(0,o.jsx)(r.Z,{bordered:!1,closable:!0,children:"Tag 3"}),(0,o.jsx)(r.Z,{bordered:!1,closable:!0,children:"Tag 4"})]}),(0,o.jsx)(n.Z,{}),(0,o.jsxs)(s.Z,{size:[0,"small"],wrap:!0,children:[(0,o.jsx)(r.Z,{bordered:!1,color:"magenta",children:"magenta"}),(0,o.jsx)(r.Z,{bordered:!1,color:"red",children:"red"}),(0,o.jsx)(r.Z,{bordered:!1,color:"volcano",children:"volcano"}),(0,o.jsx)(r.Z,{bordered:!1,color:"orange",children:"orange"}),(0,o.jsx)(r.Z,{bordered:!1,color:"gold",children:"gold"}),(0,o.jsx)(r.Z,{bordered:!1,color:"lime",children:"lime"}),(0,o.jsx)(r.Z,{bordered:!1,color:"green",children:"green"}),(0,o.jsx)(r.Z,{bordered:!1,color:"cyan",children:"cyan"}),(0,o.jsx)(r.Z,{bordered:!1,color:"blue",children:"blue"}),(0,o.jsx)(r.Z,{bordered:!1,color:"geekblue",children:"geekblue"}),(0,o.jsx)(r.Z,{bordered:!1,color:"purple",children:"purple"})]})]})};_.default=t},799055:function(O,_,e){e.r(_);var h=e(719632),d=e.n(h),s=e(805574),r=e.n(s),n=e(667294),o=e(899242),t=e(945016),a=e(785893),c=o.Z.CheckableTag,i=["Movies","Books","Music","Sports"],l=function(){var I=(0,n.useState)(["Books"]),T=r()(I,2),g=T[0],B=T[1],Z=function(v,j){var M=j?[].concat(d()(g),[v]):g.filter(function(P){return P!==v});console.log("You are interested in: ",M),B(M)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{style:{marginRight:8},children:"Categories:"}),(0,a.jsx)(t.Z,{size:[0,8],wrap:!0,children:i.map(function(E){return(0,a.jsx)(c,{checked:g.includes(E),onChange:function(j){return Z(E,j)},children:E},E)})})]})};_.default=l},429350:function(O,_,e){e.r(_);var h=e(667294),d=e(945016),s=e(899242),r=e(785893),n=function(){return(0,r.jsxs)(d.Z,{size:[0,8],wrap:!0,children:[(0,r.jsx)(s.Z,{color:"magenta-inverse",children:"magenta"}),(0,r.jsx)(s.Z,{color:"red-inverse",children:"red"}),(0,r.jsx)(s.Z,{color:"volcano-inverse",children:"volcano"}),(0,r.jsx)(s.Z,{color:"orange-inverse",children:"orange"}),(0,r.jsx)(s.Z,{color:"gold-inverse",children:"gold"}),(0,r.jsx)(s.Z,{color:"lime-inverse",children:"lime"}),(0,r.jsx)(s.Z,{color:"green-inverse",children:"green"}),(0,r.jsx)(s.Z,{color:"cyan-inverse",children:"cyan"}),(0,r.jsx)(s.Z,{color:"blue-inverse",children:"blue"}),(0,r.jsx)(s.Z,{color:"geekblue-inverse",children:"geekblue"}),(0,r.jsx)(s.Z,{color:"purple-inverse",children:"purple"})]})};_.default=n},401709:function(O,_,e){e.r(_);var h=e(667294),d=e(315816),s=e(945016),r=e(899242),n=e(785893),o=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.Z,{orientation:"left",children:"Presets"}),(0,n.jsxs)(s.Z,{size:[0,8],wrap:!0,children:[(0,n.jsx)(r.Z,{color:"magenta",children:"magenta"}),(0,n.jsx)(r.Z,{color:"red",children:"red"}),(0,n.jsx)(r.Z,{color:"volcano",children:"volcano"}),(0,n.jsx)(r.Z,{color:"orange",children:"orange"}),(0,n.jsx)(r.Z,{color:"gold",children:"gold"}),(0,n.jsx)(r.Z,{color:"lime",children:"lime"}),(0,n.jsx)(r.Z,{color:"green",children:"green"}),(0,n.jsx)(r.Z,{color:"cyan",children:"cyan"}),(0,n.jsx)(r.Z,{color:"blue",children:"blue"}),(0,n.jsx)(r.Z,{color:"geekblue",children:"geekblue"}),(0,n.jsx)(r.Z,{color:"purple",children:"purple"})]}),(0,n.jsx)(d.Z,{orientation:"left",children:"Custom"}),(0,n.jsxs)(s.Z,{size:[0,8],wrap:!0,children:[(0,n.jsx)(r.Z,{color:"#f50",children:"#f50"}),(0,n.jsx)(r.Z,{color:"#2db7f5",children:"#2db7f5"}),(0,n.jsx)(r.Z,{color:"#87d068",children:"#87d068"}),(0,n.jsx)(r.Z,{color:"#108ee9",children:"#108ee9"})]})]})};_.default=o},532053:function(O,_,e){e.r(_);var h=e(418429),d=e(723632),s=e(667294),r=e(634577),n=e(945016),o=e(899242),t=e(785893);_.default=function(){return(0,t.jsx)(r.ZP,{theme:{components:{Tag:{defaultBg:"#f9f0ff",defaultColor:"#4b34d3"}}},children:(0,t.jsxs)(n.Z,{size:[0,8],wrap:!0,children:[(0,t.jsx)(o.Z,{children:(0,t.jsx)("a",{href:"https://github.com/ant-design/ant-design/issues/1862",children:"Link"})}),(0,t.jsx)(o.Z,{closable:!0,color:"magenta",children:"Tag 2"}),(0,t.jsx)(o.Z,{icon:(0,t.jsx)(h.Z,{}),color:"error",children:"error"}),(0,t.jsx)(o.Z,{color:"red-inverse",children:"red"}),(0,t.jsx)(o.Z,{bordered:!1,color:"magenta",children:"magenta"}),(0,t.jsx)(o.Z,{icon:(0,t.jsx)(d.Z,{spin:!0}),color:"processing",children:"processing"})]})})}},275321:function(O,_,e){e.r(_);var h=e(719632),d=e.n(h),s=e(805574),r=e.n(s),n=e(667294),o=e(551042),t=e(965516),a=e(945016),c=e(432210),i=e(899242),l=e(879587),D=e(785893),I=function(){var g=t.Z.useToken(),B=g.token,Z=(0,n.useState)(["Unremovable","Tag 2","Tag 3"]),E=r()(Z,2),v=E[0],j=E[1],M=(0,n.useState)(!1),P=r()(M,2),A=P[0],W=P[1],U=(0,n.useState)(""),C=r()(U,2),R=C[0],K=C[1],Y=(0,n.useState)(-1),y=r()(Y,2),S=y[0],p=y[1],G=(0,n.useState)(""),z=r()(G,2),V=z[0],x=z[1],f=(0,n.useRef)(null),L=(0,n.useRef)(null);(0,n.useEffect)(function(){if(A){var u;(u=f.current)===null||u===void 0||u.focus()}},[A]),(0,n.useEffect)(function(){var u;(u=L.current)===null||u===void 0||u.focus()},[R]);var F=function(m){var b=v.filter(function(N){return N!==m});console.log(b),j(b)},H=function(){W(!0)},$=function(m){K(m.target.value)},J=function(){R&&v.indexOf(R)===-1&&j([].concat(d()(v),[R])),W(!1),K("")},k=function(m){x(m.target.value)},Q=function(){var m=d()(v);m[S]=V,j(m),p(-1),K("")},X={width:78,verticalAlign:"top"},w={background:B.colorBgContainer,borderStyle:"dashed"};return(0,D.jsxs)(a.Z,{size:[0,8],wrap:!0,children:[(0,D.jsx)(a.Z,{size:[0,8],wrap:!0,children:v.map(function(u,m){if(S===m)return(0,D.jsx)(c.Z,{ref:L,size:"small",style:X,value:V,onChange:k,onBlur:Q,onPressEnter:Q},u);var b=u.length>20,N=(0,D.jsx)(i.Z,{closable:m!==0,style:{userSelect:"none"},onClose:function(){return F(u)},children:(0,D.jsx)("span",{onDoubleClick:function(ee){m!==0&&(p(m),x(u),ee.preventDefault())},children:b?"".concat(u.slice(0,20),"..."):u})},u);return b?(0,D.jsx)(l.Z,{title:u,children:N},u):N})}),A?(0,D.jsx)(c.Z,{ref:f,type:"text",size:"small",style:X,value:R,onChange:$,onBlur:J,onPressEnter:J}):(0,D.jsxs)(i.Z,{style:w,onClick:H,children:[(0,D.jsx)(o.Z,{})," New Tag"]})]})};_.default=I},301253:function(O,_,e){e.r(_);var h=e(667294),d=e(418429),s=e(899242),r=e(785893),n=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.Z,{closable:!0,closeIcon:"\u5173 \u95ED",children:"Tag1"}),(0,r.jsx)(s.Z,{closable:!0,closeIcon:(0,r.jsx)(d.Z,{}),children:"Tag2"})]})};_.default=n},183400:function(O,_,e){e.r(_);var h=e(805574),d=e.n(h),s=e(97857),r=e.n(s),n=e(960887),o=e(245587),t=e(667294),a=e(899242),c=e(785893),i=function(I){var T=I.tag,g=(0,o.nB)({id:T.id}),B=g.listeners,Z=g.setNodeRef,E=g.transform,v=g.transition,j=g.isDragging,M={cursor:"move",transition:"unset"},P=E?r()(r()({},M),{},{transform:"translate3d(".concat(E.x,"px, ").concat(E.y,"px, 0)"),transition:j?"unset":v}):M;return(0,c.jsx)(a.Z,r()(r()({style:P,ref:Z},B),{},{children:T.text}))},l=function(){var I=(0,t.useState)([{id:1,text:"Tag 1"},{id:2,text:"Tag 2"},{id:3,text:"Tag 3"}]),T=d()(I,2),g=T[0],B=T[1],Z=(0,n.Dy)((0,n.VT)(n.we)),E=function(j){var M=j.active,P=j.over;P&&M.id!==P.id&&B(function(A){var W=A.findIndex(function(C){return C.id===M.id}),U=A.findIndex(function(C){return C.id===P.id});return(0,o.Rp)(A,W,U)})};return(0,c.jsx)(n.LB,{sensors:Z,onDragEnd:E,collisionDetection:n.pE,children:(0,c.jsx)(o.Fo,{items:g,strategy:o.PG,children:g.map(function(v){return(0,c.jsx)(i,{tag:v},v.id)})})})};_.default=l},259256:function(O,_,e){e.r(_);var h=e(667294),d=e(985093),s=e(935326),r=e(859505),n=e(72490),o=e(945016),t=e(899242),a=e(785893),c=function(){return(0,a.jsxs)(o.Z,{size:[0,8],wrap:!0,children:[(0,a.jsx)(t.Z,{icon:(0,a.jsx)(d.Z,{}),color:"#55acee",children:"Twitter"}),(0,a.jsx)(t.Z,{icon:(0,a.jsx)(s.Z,{}),color:"#cd201f",children:"Youtube"}),(0,a.jsx)(t.Z,{icon:(0,a.jsx)(r.Z,{}),color:"#3b5999",children:"Facebook"}),(0,a.jsx)(t.Z,{icon:(0,a.jsx)(n.Z,{}),color:"#55acee",children:"LinkedIn"})]})};_.default=c},792954:function(O,_,e){e.r(_);var h=e(667294),d=e(708751),s=e(723632),r=e(418429),n=e(111475),o=e(24019),t=e(103089),a=e(315816),c=e(945016),i=e(899242),l=e(785893),D=function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.Z,{orientation:"left",children:"Without icon"}),(0,l.jsxs)(c.Z,{size:[0,8],wrap:!0,children:[(0,l.jsx)(i.Z,{color:"success",children:"success"}),(0,l.jsx)(i.Z,{color:"processing",children:"processing"}),(0,l.jsx)(i.Z,{color:"error",children:"error"}),(0,l.jsx)(i.Z,{color:"warning",children:"warning"}),(0,l.jsx)(i.Z,{color:"default",children:"default"})]}),(0,l.jsx)(a.Z,{orientation:"left",children:"With icon"}),(0,l.jsxs)(c.Z,{size:[0,8],wrap:!0,children:[(0,l.jsx)(i.Z,{icon:(0,l.jsx)(d.Z,{}),color:"success",children:"success"}),(0,l.jsx)(i.Z,{icon:(0,l.jsx)(s.Z,{spin:!0}),color:"processing",children:"processing"}),(0,l.jsx)(i.Z,{icon:(0,l.jsx)(r.Z,{}),color:"error",children:"error"}),(0,l.jsx)(i.Z,{icon:(0,l.jsx)(n.Z,{}),color:"warning",children:"warning"}),(0,l.jsx)(i.Z,{icon:(0,l.jsx)(o.Z,{}),color:"default",children:"waiting"}),(0,l.jsx)(i.Z,{icon:(0,l.jsx)(t.Z,{}),color:"default",children:"stop"})]})]})};_.default=D}}]);
