(self.webpackChunkantd=self.webpackChunkantd||[]).push([[2893],{393003:function(f,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var e={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"};r.default=e},577949:function(f,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var s=a(e(619702));function a(t){return t&&t.__esModule?t:{default:t}}var i=s;r.default=i,f.exports=i},619702:function(f,r,e){"use strict";var s=e(564836),a=e(918698);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var i=s(e(310434)),t=K(e(667294)),d=s(e(393003)),m=s(e(592074));function x(o){if(typeof WeakMap!="function")return null;var l=new WeakMap,C=new WeakMap;return(x=function(I){return I?C:l})(o)}function K(o,l){if(!l&&o&&o.__esModule)return o;if(o===null||a(o)!=="object"&&typeof o!="function")return{default:o};var C=x(l);if(C&&C.has(o))return C.get(o);var P={},I=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var p in o)if(p!=="default"&&Object.prototype.hasOwnProperty.call(o,p)){var W=I?Object.getOwnPropertyDescriptor(o,p):null;W&&(W.get||W.set)?Object.defineProperty(P,p,W):P[p]=o[p]}return P.default=o,C&&C.set(o,P),P}var j=function(l,C){return t.createElement(m.default,(0,i.default)({},l,{ref:C,icon:d.default}))},M=t.forwardRef(j);r.default=M},979331:function(f,r,e){"use strict";e.d(r,{Z:function(){return $}});var s=e(97857),a=e.n(s),i=e(9783),t=e.n(i),d=e(805574),m=e.n(d),x=e(513769),K=e.n(x),j=e(100628),M=e.n(j),o=e(294184),l=e.n(o),C=e(33413),P=e(667294),I=e(544695),p=e(189265),W=e(73287),R=e(147315),L=e(947170),D=e(510274),v=e(548073),g=e(141035),u=e(986943),h=function(n){var c,_,y,T,E,S=n.componentCls,U="".concat(S,"-inner");return t()({},S,t()({},"&".concat(S,"-small"),(E={minWidth:n.switchMinWidthSM,height:n.switchHeightSM,lineHeight:"".concat(n.switchHeightSM,"px")},t()(E,"".concat(S,"-inner"),(c={paddingInlineStart:n.switchInnerMarginMaxSM,paddingInlineEnd:n.switchInnerMarginMinSM},t()(c,"".concat(U,"-checked"),{marginInlineStart:"calc(-100% + ".concat(n.switchPinSizeSM+n.switchPadding*2,"px - ").concat(n.switchInnerMarginMaxSM*2,"px)"),marginInlineEnd:"calc(100% - ".concat(n.switchPinSizeSM+n.switchPadding*2,"px + ").concat(n.switchInnerMarginMaxSM*2,"px)")}),t()(c,"".concat(U,"-unchecked"),{marginTop:-n.switchHeightSM,marginInlineStart:0,marginInlineEnd:0}),c)),t()(E,"".concat(S,"-handle"),{width:n.switchPinSizeSM,height:n.switchPinSizeSM}),t()(E,"".concat(S,"-loading-icon"),{top:(n.switchPinSizeSM-n.switchLoadingIconSize)/2,fontSize:n.switchLoadingIconSize}),t()(E,"&".concat(S,"-checked"),(y={},t()(y,"".concat(S,"-inner"),(_={paddingInlineStart:n.switchInnerMarginMinSM,paddingInlineEnd:n.switchInnerMarginMaxSM},t()(_,"".concat(U,"-checked"),{marginInlineStart:0,marginInlineEnd:0}),t()(_,"".concat(U,"-unchecked"),{marginInlineStart:"calc(100% - ".concat(n.switchPinSizeSM+n.switchPadding*2,"px + ").concat(n.switchInnerMarginMaxSM*2,"px)"),marginInlineEnd:"calc(-100% + ".concat(n.switchPinSizeSM+n.switchPadding*2,"px - ").concat(n.switchInnerMarginMaxSM*2,"px)")}),_)),t()(y,"".concat(S,"-handle"),{insetInlineStart:"calc(100% - ".concat(n.switchPinSizeSM+n.switchPadding,"px)")}),y)),t()(E,"&:not(".concat(S,"-disabled):active"),(T={},t()(T,"&:not(".concat(S,"-checked) ").concat(U),t()({},"".concat(U,"-unchecked"),{marginInlineStart:n.marginXXS/2,marginInlineEnd:-n.marginXXS/2})),t()(T,"&".concat(S,"-checked ").concat(U),t()({},"".concat(U,"-checked"),{marginInlineStart:-n.marginXXS/2,marginInlineEnd:n.marginXXS/2})),T)),E)))},O=function(n){var c,_=n.componentCls;return t()({},_,(c={},t()(c,"".concat(_,"-loading-icon").concat(n.iconCls),{position:"relative",top:(n.switchPinSize-n.fontSize)/2,color:n.switchLoadingIconColor,verticalAlign:"top"}),t()(c,"&".concat(_,"-checked ").concat(_,"-loading-icon"),{color:n.switchColor}),c))},z=function(n){var c,_,y=n.componentCls,T=n.motion,E="".concat(y,"-handle");return t()({},y,(_={},t()(_,E,{position:"absolute",top:n.switchPadding,insetInlineStart:n.switchPadding,width:n.switchPinSize,height:n.switchPinSize,transition:"all ".concat(n.switchDuration," ease-in-out"),"&::before":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,backgroundColor:n.colorWhite,borderRadius:n.switchPinSize/2,boxShadow:n.switchHandleShadow,transition:"all ".concat(n.switchDuration," ease-in-out"),content:'""'}}),t()(_,"&".concat(y,"-checked ").concat(E),{insetInlineStart:"calc(100% - ".concat(n.switchPinSize+n.switchPadding,"px)")}),t()(_,"&:not(".concat(y,"-disabled):active"),T?(c={},t()(c,"".concat(E,"::before"),{insetInlineEnd:n.switchHandleActiveInset,insetInlineStart:0}),t()(c,"&".concat(y,"-checked ").concat(E,"::before"),{insetInlineEnd:0,insetInlineStart:n.switchHandleActiveInset}),c):{}),_))},N=function(n){var c,_,y,T,E=n.componentCls,S="".concat(E,"-inner");return t()({},E,(T={},t()(T,S,(c={display:"block",overflow:"hidden",borderRadius:100,height:"100%",paddingInlineStart:n.switchInnerMarginMax,paddingInlineEnd:n.switchInnerMarginMin,transition:"padding-inline-start ".concat(n.switchDuration," ease-in-out, padding-inline-end ").concat(n.switchDuration," ease-in-out")},t()(c,"".concat(S,"-checked, ").concat(S,"-unchecked"),{display:"block",color:n.colorTextLightSolid,fontSize:n.fontSizeSM,transition:"margin-inline-start ".concat(n.switchDuration," ease-in-out, margin-inline-end ").concat(n.switchDuration," ease-in-out"),pointerEvents:"none"}),t()(c,"".concat(S,"-checked"),{marginInlineStart:"calc(-100% + ".concat(n.switchPinSize+n.switchPadding*2,"px - ").concat(n.switchInnerMarginMax*2,"px)"),marginInlineEnd:"calc(100% - ".concat(n.switchPinSize+n.switchPadding*2,"px + ").concat(n.switchInnerMarginMax*2,"px)")}),t()(c,"".concat(S,"-unchecked"),{marginTop:-n.switchHeight,marginInlineStart:0,marginInlineEnd:0}),c)),t()(T,"&".concat(E,"-checked ").concat(S),(_={paddingInlineStart:n.switchInnerMarginMin,paddingInlineEnd:n.switchInnerMarginMax},t()(_,"".concat(S,"-checked"),{marginInlineStart:0,marginInlineEnd:0}),t()(_,"".concat(S,"-unchecked"),{marginInlineStart:"calc(100% - ".concat(n.switchPinSize+n.switchPadding*2,"px + ").concat(n.switchInnerMarginMax*2,"px)"),marginInlineEnd:"calc(-100% + ".concat(n.switchPinSize+n.switchPadding*2,"px - ").concat(n.switchInnerMarginMax*2,"px)")}),_)),t()(T,"&:not(".concat(E,"-disabled):active"),(y={},t()(y,"&:not(".concat(E,"-checked) ").concat(S),t()({},"".concat(S,"-unchecked"),{marginInlineStart:n.switchPadding*2,marginInlineEnd:-n.switchPadding*2})),t()(y,"&".concat(E,"-checked ").concat(S),t()({},"".concat(S,"-checked"),{marginInlineStart:-n.switchPadding*2,marginInlineEnd:n.switchPadding*2})),y)),T))},B=function(n){var c,_=n.componentCls;return t()({},_,a()(a()(a()({},(0,v.Wf)(n)),{},t()({position:"relative",display:"inline-block",boxSizing:"border-box",minWidth:n.switchMinWidth,height:n.switchHeight,lineHeight:"".concat(n.switchHeight,"px"),verticalAlign:"middle",background:n.colorTextQuaternary,border:"0",borderRadius:100,cursor:"pointer",transition:"all ".concat(n.motionDurationMid),userSelect:"none"},"&:hover:not(".concat(_,"-disabled)"),{background:n.colorTextTertiary}),(0,v.Qy)(n)),{},(c={},t()(c,"&".concat(_,"-checked"),t()({background:n.switchColor},"&:hover:not(".concat(_,"-disabled)"),{background:n.colorPrimaryHover})),t()(c,"&".concat(_,"-loading, &").concat(_,"-disabled"),{cursor:"not-allowed",opacity:n.switchDisabledOpacity,"*":{boxShadow:"none",cursor:"not-allowed"}}),t()(c,"&".concat(_,"-rtl"),{direction:"rtl"}),c)))},H=(0,g.Z)("Switch",function(A){var n=A.fontSize*A.lineHeight,c=A.controlHeight/2,_=2,y=n-_*2,T=c-_*2,E=(0,u.TS)(A,{switchMinWidth:y*2+_*4,switchHeight:n,switchDuration:A.motionDurationMid,switchColor:A.colorPrimary,switchDisabledOpacity:A.opacityLoading,switchInnerMarginMin:y/2,switchInnerMarginMax:y+_+_*2,switchPadding:_,switchPinSize:y,switchBg:A.colorBgContainer,switchMinWidthSM:T*2+_*2,switchHeightSM:c,switchInnerMarginMinSM:T/2,switchInnerMarginMaxSM:T+_+_*2,switchPinSizeSM:T,switchHandleShadow:"0 2px 4px 0 ".concat(new D.C("#00230b").setAlpha(.2).toRgbString()),switchLoadingIconSize:A.fontSizeIcon*.75,switchLoadingIconColor:"rgba(0, 0, 0, ".concat(A.opacityLoading,")"),switchHandleActiveInset:"-30%"});return[B(E),N(E),z(E),O(E),h(E)]}),b=e(785893),w=["prefixCls","size","disabled","loading","className","rootClassName","style"],X=P.forwardRef(function(A,n){var c,_=A.prefixCls,y=A.size,T=A.disabled,E=A.loading,S=A.className,U=A.rootClassName,F=A.style,G=K()(A,w);(0,I.ZP)("checked"in A||!("value"in A),"Switch","`value` is not a valid prop, do you mean `checked`?");var Q=P.useContext(W.E_),q=Q.getPrefixCls,k=Q.direction,J=Q.switch,ee=P.useContext(R.Z),V=(T!=null?T:ee)||E,Z=q("switch",_),Y=(0,b.jsx)("div",{className:"".concat(Z,"-handle"),children:E&&(0,b.jsx)(M(),{className:"".concat(Z,"-loading-icon")})}),ne=H(Z),te=m()(ne,2),ae=te[0],re=te[1],oe=(0,L.Z)(y),se=l()(J==null?void 0:J.className,(c={},t()(c,"".concat(Z,"-small"),oe==="small"),t()(c,"".concat(Z,"-loading"),E),t()(c,"".concat(Z,"-rtl"),k==="rtl"),c),S,U,re),ie=a()(a()({},J==null?void 0:J.style),F);return ae((0,b.jsx)(p.Z,{component:"Switch",children:(0,b.jsx)(C.Z,a()(a()({},G),{},{prefixCls:Z,className:se,style:ie,disabled:V,ref:n,loadingIcon:Y}))}))});X.__ANT_SWITCH=!0;var $=X},78125:function(f,r,e){"use strict";e.r(r);var s=e(805574),a=e.n(s),i=e(667294),t=e(905303),d=e(312328),m=e(785893),x=function(){var j=(0,i.useState)([]),M=a()(j,2),o=M[0],l=M[1],C=(0,i.useState)([]),P=a()(C,2),I=P[0],p=P[1],W=function(){for(var v=[],g=[],u=0;u<20;u++){var h={key:u.toString(),title:"content".concat(u+1),description:"description of content".concat(u+1),chosen:u%2===0};h.chosen&&v.push(h.key),g.push(h)}l(g),p(v)};(0,i.useEffect)(function(){W()},[]);var R=function(v){p(v)},L=function(v,g){var u=g.direction;return u==="left"?(0,m.jsx)(t.ZP,{size:"small",style:{float:"left",margin:5},onClick:W,children:"Left button reload"}):(0,m.jsx)(t.ZP,{size:"small",style:{float:"right",margin:5},onClick:W,children:"Right button reload"})};return(0,m.jsx)(d.Z,{dataSource:o,showSearch:!0,listStyle:{width:250,height:300},operations:["to right","to left"],targetKeys:I,onChange:R,render:function(v){return"".concat(v.title,"-").concat(v.description)},footer:L})};r.default=x},687931:function(f,r,e){"use strict";e.r(r);var s=e(719632),a=e.n(s),i=e(805574),t=e.n(i),d=e(667294),m=e(312328),x=e(785893),K=Array.from({length:20}).map(function(o,l){return{key:l.toString(),title:"content".concat(l+1),description:"description of content".concat(l+1)}}),j=K.filter(function(o){return Number(o.key)>10}).map(function(o){return o.key}),M=function(){var l=(0,d.useState)(j),C=t()(l,2),P=C[0],I=C[1],p=(0,d.useState)([]),W=t()(p,2),R=W[0],L=W[1],D=function(h,O,z){console.log("targetKeys:",h),console.log("direction:",O),console.log("moveKeys:",z),I(h)},v=function(h,O){console.log("sourceSelectedKeys:",h),console.log("targetSelectedKeys:",O),L([].concat(a()(h),a()(O)))},g=function(h,O){console.log("direction:",h),console.log("target:",O.target)};return(0,x.jsx)(m.Z,{dataSource:K,titles:["Source","Target"],targetKeys:P,selectedKeys:R,onChange:D,onSelectChange:v,onScroll:g,render:function(h){return h.title}})};r.default=M},864838:function(f,r,e){"use strict";e.r(r);var s=e(719632),a=e.n(s),i=e(805574),t=e.n(i),d=e(97857),m=e.n(d),x=e(513769),K=e.n(x),j=e(291966),M=e.n(j),o=e(667294),l=e(312328),C=e(452518),P=e(899242),I=e(634577),p=e(945016),W=e(979331),R=e(785893),L=["leftColumns","rightColumns"],D=function(B){var H=B.leftColumns,b=B.rightColumns,w=K()(B,L);return(0,R.jsx)(l.Z,m()(m()({},w),{},{children:function($){var A=$.direction,n=$.filteredItems,c=$.onItemSelectAll,_=$.onItemSelect,y=$.selectedKeys,T=$.disabled,E=A==="left"?H:b,S={getCheckboxProps:function(F){return{disabled:T||F.disabled}},onSelectAll:function(F,G){var Q=G.filter(function(k){return!k.disabled}).map(function(k){var J=k.key;return J}),q=F?M()(Q,y):M()(y,Q);c(q,F)},onSelect:function(F,G){var Q=F.key;_(Q,G)},selectedRowKeys:y};return(0,R.jsx)(C.Z,{rowSelection:S,columns:E,dataSource:n,size:"small",style:{pointerEvents:T?"none":void 0},onRow:function(F){var G=F.key,Q=F.disabled;return{onClick:function(){Q||T||_(G,!y.includes(G))}}}})}}))},v=["cat","dog","bird"],g=Array.from({length:20}).map(function(N,B){return{key:B.toString(),title:"content".concat(B+1),description:"description of content".concat(B+1),disabled:B%4===0,tag:v[B%3]}}),u=[{dataIndex:"title",title:"Name"},{dataIndex:"tag",title:"Tag",render:function(B){return(0,R.jsx)(P.Z,{children:B})}},{dataIndex:"description",title:"Description"}],h=[{dataIndex:"title",title:"Name"}],O=g.filter(function(N){return Number(N.key)>10}).map(function(N){return N.key}),z=function(){var B=(0,o.useState)(O),H=t()(B,2),b=H[0],w=H[1],X=(0,o.useState)([]),$=t()(X,2),A=$[0],n=$[1],c=function(Z,Y,ne){console.log("targetKeys:",Z),console.log("direction:",Y),console.log("moveKeys:",ne),w(Z)},_=function(Z,Y){console.log("sourceSelectedKeys:",Z),console.log("targetSelectedKeys:",Y),n([].concat(a()(Z),a()(Y)))},y=function(Z,Y){console.log("direction:",Z),console.log("target:",Y.target)},T=(0,o.useState)(!1),E=t()(T,2),S=E[0],U=E[1],F=(0,o.useState)(!1),G=t()(F,2),Q=G[0],q=G[1],k=function(Z){w(Z)},J=function(Z){U(Z)},ee=function(Z){q(Z)};return(0,R.jsxs)(I.ZP,{theme:{components:{Transfer:{listWidth:40,listWidthLG:50,listHeight:30,itemHeight:20,itemPaddingBlock:10,headerHeight:18}}},children:[(0,R.jsx)(l.Z,{dataSource:g,titles:["Source","Target"],targetKeys:b,selectedKeys:A,onChange:c,onSelectChange:_,onScroll:y,render:function(Z){return Z.title}}),(0,R.jsx)(l.Z,{status:"error"}),(0,R.jsx)(l.Z,{status:"warning",showSearch:!0}),(0,R.jsx)(D,{dataSource:g,targetKeys:b,disabled:S,showSearch:Q,onChange:k,filterOption:function(Z,Y){return Y.title.indexOf(Z)!==-1||Y.tag.indexOf(Z)!==-1},leftColumns:u,rightColumns:h}),(0,R.jsxs)(p.Z,{style:{marginTop:16},children:[(0,R.jsx)(W.Z,{unCheckedChildren:"disabled",checkedChildren:"disabled",checked:S,onChange:J}),(0,R.jsx)(W.Z,{unCheckedChildren:"showSearch",checkedChildren:"showSearch",checked:Q,onChange:ee})]})]})};r.default=z},764778:function(f,r,e){"use strict";e.r(r);var s=e(805574),a=e.n(s),i=e(667294),t=e(312328),d=e(785893),m=function(){var K=(0,i.useState)([]),j=a()(K,2),M=j[0],o=j[1],l=(0,i.useState)([]),C=a()(l,2),P=C[0],I=C[1],p=function(){for(var D=[],v=[],g=0;g<20;g++){var u={key:g.toString(),title:"content".concat(g+1),description:"description of content".concat(g+1),chosen:g%2===0};u.chosen&&D.push(u.key),v.push(u)}o(v),I(D)};(0,i.useEffect)(function(){p()},[]);var W=function(D,v,g){console.log(D,v,g),I(D)},R=function(D){var v=(0,d.jsxs)("span",{className:"custom-item",children:[D.title," - ",D.description]});return{label:v,value:D.title}};return(0,d.jsx)(t.Z,{dataSource:M,listStyle:{width:300,height:300},targetKeys:P,onChange:W,render:R})};r.default=m},397047:function(f,r,e){"use strict";e.r(r);var s=e(805574),a=e.n(s),i=e(667294),t=e(312328),d=e(785893),m=Array.from({length:10}).map(function(M,o){return{key:o.toString(),title:"content".concat(o+1),description:"description of content".concat(o+1)}}),x=m.filter(function(M){return Number(M.key)%3>1}).map(function(M){return M.key}),K=["Select All",function(M){var o=M.selectedCount,l=M.totalCount;return"".concat(o,"/").concat(l)}],j=function(){var o=(0,i.useState)(x),l=a()(o,2),C=l[0],P=l[1];return(0,d.jsx)(t.Z,{dataSource:m,targetKeys:C,onChange:P,render:function(p){return p.title},selectAllLabels:K})};r.default=j},731206:function(f,r,e){"use strict";e.r(r);var s=e(805574),a=e.n(s),i=e(667294),t=e(312328),d=e(979331),m=e(785893),x=function(){var j=(0,i.useState)(!1),M=a()(j,2),o=M[0],l=M[1],C=(0,i.useState)([]),P=a()(C,2),I=P[0],p=P[1],W=(0,i.useState)([]),R=a()(W,2),L=R[0],D=R[1];(0,i.useEffect)(function(){for(var g=[],u=[],h=0;h<2e3;h++){var O={key:h.toString(),title:"content".concat(h+1),description:"description of content".concat(h+1),chosen:h%2===0};O.chosen&&g.push(O.key),u.push(O)}D(g),p(u)},[]);var v=function(u,h,O){console.log(u,h,O),D(u)};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(t.Z,{dataSource:I,targetKeys:L,onChange:v,render:function(u){return u.title},oneWay:o,pagination:!0}),(0,m.jsx)("br",{}),(0,m.jsx)(d.Z,{unCheckedChildren:"one way",checkedChildren:"one way",checked:o,onChange:l})]})};r.default=x},85746:function(f,r,e){"use strict";e.r(r);var s=e(719632),a=e.n(s),i=e(805574),t=e.n(i),d=e(667294),m=e(312328),x=e(979331),K=e(785893),j=Array.from({length:20}).map(function(l,C){return{key:C.toString(),title:"content".concat(C+1),description:"description of content".concat(C+1),disabled:C%3<1}}),M=j.filter(function(l){return Number(l.key)%3>1}).map(function(l){return l.key}),o=function(){var C=(0,d.useState)(M),P=t()(C,2),I=P[0],p=P[1],W=(0,d.useState)([]),R=t()(W,2),L=R[0],D=R[1],v=(0,d.useState)(!1),g=t()(v,2),u=g[0],h=g[1],O=function(b,w,X){p(b),console.log("targetKeys: ",b),console.log("direction: ",w),console.log("moveKeys: ",X)},z=function(b,w){D([].concat(a()(b),a()(w))),console.log("sourceSelectedKeys: ",b),console.log("targetSelectedKeys: ",w)},N=function(b,w){console.log("direction:",b),console.log("target:",w.target)},B=function(b){h(b)};return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(m.Z,{dataSource:j,titles:["Source","Target"],targetKeys:I,selectedKeys:L,onChange:O,onSelectChange:z,onScroll:N,render:function(b){return b.title},disabled:u,oneWay:!0,style:{marginBottom:16}}),(0,K.jsx)(x.Z,{unCheckedChildren:"disabled",checkedChildren:"disabled",checked:u,onChange:B})]})};r.default=o},844786:function(f,r,e){"use strict";e.r(r);var s=e(805574),a=e.n(s),i=e(667294),t=e(312328),d=e(785893),m=function(){var K=(0,i.useState)([]),j=a()(K,2),M=j[0],o=j[1],l=(0,i.useState)([]),C=a()(l,2),P=C[0],I=C[1],p=function(){for(var v=[],g=[],u=0;u<20;u++){var h={key:u.toString(),title:"content".concat(u+1),description:"description of content".concat(u+1),chosen:u%2===0};h.chosen&&v.push(h.key),g.push(h)}o(g),I(v)};(0,i.useEffect)(function(){p()},[]);var W=function(v,g){return g.description.indexOf(v)>-1},R=function(v){I(v)},L=function(v,g){console.log("search:",v,g)};return(0,d.jsx)(t.Z,{dataSource:M,showSearch:!0,filterOption:W,targetKeys:P,onChange:R,onSearch:L,render:function(v){return v.title}})};r.default=m},251248:function(f,r,e){"use strict";e.r(r);var s=e(667294),a=e(945016),i=e(312328),t=e(785893),d=function(){return(0,t.jsxs)(a.Z,{direction:"vertical",children:[(0,t.jsx)(i.Z,{status:"error"}),(0,t.jsx)(i.Z,{status:"warning",showSearch:!0})]})};r.default=d},912634:function(f,r,e){"use strict";e.r(r);var s=e(805574),a=e.n(s),i=e(97857),t=e.n(i),d=e(513769),m=e.n(d),x=e(667294),K=e(291966),j=e.n(K),M=e(312328),o=e(452518),l=e(899242),C=e(945016),P=e(979331),I=e(785893),p=["leftColumns","rightColumns"],W=function(O){var z=O.leftColumns,N=O.rightColumns,B=m()(O,p);return(0,I.jsx)(M.Z,t()(t()({},B),{},{children:function(b){var w=b.direction,X=b.filteredItems,$=b.onItemSelectAll,A=b.onItemSelect,n=b.selectedKeys,c=b.disabled,_=w==="left"?z:N,y={getCheckboxProps:function(E){return{disabled:c||E.disabled}},onSelectAll:function(E,S){var U=S.filter(function(G){return!G.disabled}).map(function(G){var Q=G.key;return Q}),F=E?j()(U,n):j()(n,U);$(F,E)},onSelect:function(E,S){var U=E.key;A(U,S)},selectedRowKeys:n};return(0,I.jsx)(o.Z,{rowSelection:y,columns:_,dataSource:X,size:"small",style:{pointerEvents:c?"none":void 0},onRow:function(E){var S=E.key,U=E.disabled;return{onClick:function(){U||c||A(S,!n.includes(S))}}}})}}))},R=["cat","dog","bird"],L=Array.from({length:20}).map(function(h,O){return{key:O.toString(),title:"content".concat(O+1),description:"description of content".concat(O+1),disabled:O%4===0,tag:R[O%3]}}),D=L.filter(function(h){return Number(h.key)%3>1}).map(function(h){return h.key}),v=[{dataIndex:"title",title:"Name"},{dataIndex:"tag",title:"Tag",render:function(O){return(0,I.jsx)(l.Z,{children:O})}},{dataIndex:"description",title:"Description"}],g=[{dataIndex:"title",title:"Name"}],u=function(){var O=(0,x.useState)(D),z=a()(O,2),N=z[0],B=z[1],H=(0,x.useState)(!1),b=a()(H,2),w=b[0],X=b[1],$=(0,x.useState)(!1),A=a()($,2),n=A[0],c=A[1],_=function(S){B(S)},y=function(S){X(S)},T=function(S){c(S)};return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(W,{dataSource:L,targetKeys:N,disabled:w,showSearch:n,onChange:_,filterOption:function(S,U){return U.title.indexOf(S)!==-1||U.tag.indexOf(S)!==-1},leftColumns:v,rightColumns:g}),(0,I.jsxs)(C.Z,{style:{marginTop:16},children:[(0,I.jsx)(P.Z,{unCheckedChildren:"disabled",checkedChildren:"disabled",checked:w,onChange:y}),(0,I.jsx)(P.Z,{unCheckedChildren:"showSearch",checkedChildren:"showSearch",checked:n,onChange:T})]})]})};r.default=u},918815:function(f,r,e){"use strict";e.r(r);var s=e(805574),a=e.n(s),i=e(719632),t=e.n(i),d=e(97857),m=e.n(d),x=e(513769),K=e.n(x),j=e(667294),M=e(965516),o=e(312328),l=e(72218),C=e(785893),P=["children"],I=["dataSource","targetKeys"],p=function(g,u){return g.includes(u)},W=function v(){var g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return g.map(function(h){var O=h.children,z=K()(h,P);return m()(m()({},z),{},{disabled:u.includes(z.key),children:v(O,u)})})},R=function(g){var u=g.dataSource,h=g.targetKeys,O=K()(g,I),z=M.Z.useToken(),N=z.token,B=[];function H(){var b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];b.forEach(function(w){B.push(w),H(w.children)})}return H(u),(0,C.jsx)(o.Z,m()(m()({},O),{},{targetKeys:h,dataSource:B,className:"tree-transfer",render:function(w){return w.title},showSelectAll:!1,children:function(w){var X=w.direction,$=w.onItemSelect,A=w.selectedKeys;if(X==="left"){var n=[].concat(t()(A),t()(h));return(0,C.jsx)("div",{style:{padding:N.paddingXS},children:(0,C.jsx)(l.Z,{blockNode:!0,checkable:!0,checkStrictly:!0,defaultExpandAll:!0,checkedKeys:n,treeData:W(u,h),onCheck:function(_,y){var T=y.node.key;$(T,!p(n,T))},onSelect:function(_,y){var T=y.node.key;$(T,!p(n,T))}})})}}}))},L=[{key:"0-0",title:"0-0"},{key:"0-1",title:"0-1",children:[{key:"0-1-0",title:"0-1-0"},{key:"0-1-1",title:"0-1-1"}]},{key:"0-2",title:"0-2"},{key:"0-3",title:"0-3"},{key:"0-4",title:"0-4"}],D=function(){var g=(0,j.useState)([]),u=a()(g,2),h=u[0],O=u[1],z=function(B){O(B)};return(0,C.jsx)(R,{dataSource:L,targetKeys:h,onChange:z})};r.default=D},896874:function(f){function r(e,s,a){switch(a.length){case 0:return e.call(s);case 1:return e.call(s,a[0]);case 2:return e.call(s,a[0],a[1]);case 3:return e.call(s,a[0],a[1],a[2])}return e.apply(s,a)}f.exports=r},829932:function(f){function r(e,s){for(var a=-1,i=e==null?0:e.length,t=Array(i);++a<i;)t[a]=s(e[a],a,e);return t}f.exports=r},920731:function(f,r,e){var s=e(288668),a=e(447443),i=e(301196),t=e(829932),d=e(307518),m=e(274757),x=200;function K(j,M,o,l){var C=-1,P=a,I=!0,p=j.length,W=[],R=M.length;if(!p)return W;o&&(M=t(M,d(o))),l?(P=i,I=!1):M.length>=x&&(P=m,I=!1,M=new s(M));e:for(;++C<p;){var L=j[C],D=o==null?L:o(L);if(L=l||L!==0?L:0,I&&D===D){for(var v=R;v--;)if(M[v]===D)continue e;W.push(L)}else P(M,D,l)||W.push(L)}return W}f.exports=K},105976:function(f,r,e){var s=e(406557),a=e(545357),i=e(430061);function t(d,m){return i(a(d,m,s),d+"")}f.exports=t},356560:function(f,r,e){var s=e(575703),a=e(538777),i=e(406557),t=a?function(d,m){return a(d,"toString",{configurable:!0,enumerable:!1,value:s(m),writable:!0})}:i;f.exports=t},307518:function(f){function r(e){return function(s){return e(s)}}f.exports=r},538777:function(f,r,e){var s=e(610852),a=function(){try{var i=s(Object,"defineProperty");return i({},"",{}),i}catch(t){}}();f.exports=a},545357:function(f,r,e){var s=e(896874),a=Math.max;function i(t,d,m){return d=a(d===void 0?t.length-1:d,0),function(){for(var x=arguments,K=-1,j=a(x.length-d,0),M=Array(j);++K<j;)M[K]=x[d+K];K=-1;for(var o=Array(d+1);++K<d;)o[K]=x[K];return o[d]=m(M),s(t,this,o)}}f.exports=i},430061:function(f,r,e){var s=e(356560),a=e(521275),i=a(s);f.exports=i},521275:function(f){var r=800,e=16,s=Date.now;function a(i){var t=0,d=0;return function(){var m=s(),x=e-(m-d);if(d=m,x>0){if(++t>=r)return arguments[0]}else t=0;return i.apply(void 0,arguments)}}f.exports=a},575703:function(f){function r(e){return function(){return e}}f.exports=r},291966:function(f,r,e){var s=e(920731),a=e(121078),i=e(105976),t=e(229246),d=i(function(m,x){return t(m)?s(m,a(x,1,t,!0)):[]});f.exports=d},406557:function(f){function r(e){return e}f.exports=r},498612:function(f,r,e){var s=e(623560),a=e(541780);function i(t){return t!=null&&a(t.length)&&!s(t)}f.exports=i},229246:function(f,r,e){var s=e(498612),a=e(637005);function i(t){return a(t)&&s(t)}f.exports=i},541780:function(f){var r=9007199254740991;function e(s){return typeof s=="number"&&s>-1&&s%1==0&&s<=r}f.exports=e},33413:function(f,r,e){"use strict";var s=e(487462),a=e(204942),i=e(297685),t=e(700091),d=e(667294),m=e(294184),x=e.n(m),K=e(821770),j=e(915105),M=["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"],o=d.forwardRef(function(l,C){var P,I=l.prefixCls,p=I===void 0?"rc-switch":I,W=l.className,R=l.checked,L=l.defaultChecked,D=l.disabled,v=l.loadingIcon,g=l.checkedChildren,u=l.unCheckedChildren,h=l.onClick,O=l.onChange,z=l.onKeyDown,N=(0,t.Z)(l,M),B=(0,K.Z)(!1,{value:R,defaultValue:L}),H=(0,i.Z)(B,2),b=H[0],w=H[1];function X(c,_){var y=b;return D||(y=c,w(y),O==null||O(y,_)),y}function $(c){c.which===j.Z.LEFT?X(!1,c):c.which===j.Z.RIGHT&&X(!0,c),z==null||z(c)}function A(c){var _=X(!b,c);h==null||h(_,c)}var n=x()(p,W,(P={},(0,a.Z)(P,"".concat(p,"-checked"),b),(0,a.Z)(P,"".concat(p,"-disabled"),D),P));return d.createElement("button",(0,s.Z)({},N,{type:"button",role:"switch","aria-checked":b,disabled:D,className:n,ref:C,onKeyDown:$,onClick:A}),v,d.createElement("span",{className:"".concat(p,"-inner")},d.createElement("span",{className:"".concat(p,"-inner-checked")},g),d.createElement("span",{className:"".concat(p,"-inner-unchecked")},u)))});o.displayName="Switch",r.Z=o}}]);
