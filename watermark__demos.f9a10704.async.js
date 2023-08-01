"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[6077],{34607:function(K,f){Object.defineProperty(f,"__esModule",{value:!0});var e={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"question-circle",theme:"outlined"};f.default=e},303840:function(K,f,e){Object.defineProperty(f,"__esModule",{value:!0}),f.default=void 0;var m=M(e(554434));function M(v){return v&&v.__esModule?v:{default:v}}var g=m;f.default=g,K.exports=g},554434:function(K,f,e){var m=e(564836),M=e(918698);Object.defineProperty(f,"__esModule",{value:!0}),f.default=void 0;var g=m(e(310434)),v=F(e(667294)),W=m(e(34607)),S=m(e(592074));function p(o){if(typeof WeakMap!="function")return null;var c=new WeakMap,i=new WeakMap;return(p=function(y){return y?i:c})(o)}function F(o,c){if(!c&&o&&o.__esModule)return o;if(o===null||M(o)!=="object"&&typeof o!="function")return{default:o};var i=p(c);if(i&&i.has(o))return i.get(o);var t={},y=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in o)if(s!=="default"&&Object.prototype.hasOwnProperty.call(o,s)){var l=y?Object.getOwnPropertyDescriptor(o,s):null;l&&(l.get||l.set)?Object.defineProperty(t,s,l):t[s]=o[s]}return t.default=o,i&&i.set(o,t),t}var r=function(c,i){return v.createElement(S.default,(0,g.default)({},c,{ref:i,icon:W.default}))},a=v.forwardRef(r);f.default=a},752893:function(K,f,e){e.d(f,{Z:function(){return t}});var m=e(667294),M=e(242550),g=e(34203),v=e(998924),W=e(366680),S=e(215671),p=e(143144),F=e(360136),r=e(973568),a=function(y){(0,F.Z)(l,y);var s=(0,r.Z)(l);function l(){return(0,S.Z)(this,l),s.apply(this,arguments)}return(0,p.Z)(l,[{key:"render",value:function(){return this.props.children}}]),l}(m.Component),o=a,c={subtree:!0,childList:!0,attributeFilter:["style","class"]},i=function(s){var l=s.children,b=s.options,$=b===void 0?c:b,Y=s.onMutate,X=Y===void 0?function(){}:Y,x=(0,W.Z)(X),n=(0,m.useRef)(null),_=m.useRef(null),O=m.isValidElement(l)&&(0,M.Yr)(l),E=O?l==null?void 0:l.ref:null,L=m.useMemo(function(){return(0,M.sQ)(E,_)},[E,_]);return(0,m.useEffect)(function(){if((0,v.Z)()){var D,I=(0,g.Z)(E==null?void 0:E.current)||(0,g.Z)(n==null?void 0:n.current);return I&&"MutationObserver"in window&&(D=new MutationObserver(x),D.observe(I,$)),function(){var C,R;(C=D)===null||C===void 0||C.takeRecords(),(R=D)===null||R===void 0||R.disconnect()}}},[$,E]),l?m.createElement(o,{ref:n},O?m.cloneElement(l,{ref:L}):l):null},t=i},279589:function(K,f,e){e.d(f,{Z:function(){return X}});var m=e(719632),M=e.n(m),g=e(97857),v=e.n(g),W=e(805574),S=e.n(W),p=e(752893),F=e(294184),r=e.n(F),a=e(667294);function o(x){return x.replace(/([A-Z])/g,"-$1").toLowerCase()}function c(x){return Object.keys(x).map(function(n){return"".concat(o(n),": ").concat(x[n],";")}).join(" ")}function i(){return window.devicePixelRatio||1}function t(x,n,_,O){x.translate(n,_),x.rotate(Math.PI/180*Number(O)),x.translate(-n,-_)}var y=function(n,_){var O=!1;return n.removedNodes.length&&(O=Array.from(n.removedNodes).some(function(E){return E===_})),n.type==="attributes"&&n.target===_&&(O=!0),O},s=e(965516),l=e(785893),b=2,$=3,Y=function(n){var _,O,E=n.zIndex,L=E===void 0?9:E,D=n.rotate,I=D===void 0?-22:D,C=n.width,R=n.height,N=n.image,T=n.content,j=n.font,P=j===void 0?{}:j,ge=n.style,te=n.className,A=n.rootClassName,ne=n.gap,ve=ne===void 0?[100,100]:ne,B=n.offset,pe=n.children,ye=s.Z.useToken(),re=ye.token,oe=P.color,ae=oe===void 0?re.colorFill:oe,ie=P.fontSize,w=ie===void 0?re.fontSizeLG:ie,le=P.fontWeight,z=le===void 0?"normal":le,U=P.fontStyle,se=U===void 0?"normal":U,ue=P.fontFamily,he=ue===void 0?"sans-serif":ue,Ee=S()(ve,2),V=Ee[0],q=Ee[1],Ce=V/2,je=q/2,Re=(_=B==null?void 0:B[0])!==null&&_!==void 0?_:Ce,We=(O=B==null?void 0:B[1])!==null&&O!==void 0?O:je,ze=function(){var u={zIndex:L,position:"absolute",left:0,top:0,width:"100%",height:"100%",pointerEvents:"none",backgroundRepeat:"repeat"},d=Re-Ce,h=We-je;return d>0&&(u.left="".concat(d,"px"),u.width="calc(100% - ".concat(d,"px)"),d=0),h>0&&(u.top="".concat(h,"px"),u.height="calc(100% - ".concat(h,"px)"),h=0),u.backgroundPosition="".concat(d,"px ").concat(h,"px"),u},xe=(0,a.useRef)(null),H=(0,a.useRef)(),_e=(0,a.useRef)(!1),Ue=function(){H.current&&(H.current.remove(),H.current=void 0)},be=function(u,d){if(xe.current&&H.current){var h;_e.current=!0,H.current.setAttribute("style",c(v()(v()({},ze()),{},{backgroundImage:"url('".concat(u,"')"),backgroundSize:"".concat((V+d)*b,"px")}))),(h=xe.current)===null||h===void 0||h.append(H.current),setTimeout(function(){_e.current=!1})}},Ke=function(u){var d=120,h=64;if(!N&&u.measureText){u.font="".concat(Number(w),"px ").concat(he);var Q=Array.isArray(T)?T:[T],G=Q.map(function(Z){return u.measureText(Z).width});d=Math.ceil(Math.max.apply(Math,M()(G))),h=Number(w)*Q.length+(Q.length-1)*$}return[C!=null?C:d,R!=null?R:h]},Te=function(u,d,h,Q,G){var Z=i(),ce=Number(w)*Z;u.font="".concat(se," normal ").concat(z," ").concat(ce,"px/").concat(G,"px ").concat(he),u.fillStyle=ae,u.textAlign="center",u.textBaseline="top",u.translate(Q/2,0);var J=Array.isArray(T)?T:[T];J==null||J.forEach(function(k,ee){u.fillText(k!=null?k:"",d,h+ee*(ce+$*Z))})},Ze=function(u,d,h,Q,G,Z,ce,J,k,ee,me){Te(d,h,Q,G,Z),d.restore(),t(d,ce,J,I),Te(d,k,ee,G,Z),be(u.toDataURL(),me)},Se=function(){var u=document.createElement("canvas"),d=u.getContext("2d");if(d){H.current||(H.current=document.createElement("div"));var h=i(),Q=Ke(d),G=S()(Q,2),Z=G[0],ce=G[1],J=(V+Z)*h,k=(q+ce)*h;u.setAttribute("width","".concat(J*b,"px")),u.setAttribute("height","".concat(k*b,"px"));var ee=V*h/2,me=q*h/2,Ae=Z*h,Me=ce*h,Le=(Ae+V*h)/2,Be=(Me+q*h)/2,Oe=ee+J,Pe=me+k,De=Le+J,Ie=Be+k;if(d.save(),t(d,Le,Be,I),N){var fe=new Image;fe.onload=function(){d.drawImage(fe,ee,me,Ae,Me),d.restore(),t(d,De,Ie,I),d.drawImage(fe,Oe,Pe,Ae,Me),be(u.toDataURL(),Z)},fe.onerror=function(){return Ze(u,d,ee,me,Ae,Me,De,Ie,Oe,Pe,Z)},fe.crossOrigin="anonymous",fe.referrerPolicy="no-referrer",fe.src=N}else Ze(u,d,ee,me,Ae,Me,De,Ie,Oe,Pe,Z)}},Ne=function(u){_e.current||u.forEach(function(d){y(d,H.current)&&(Ue(),Se())})};return(0,a.useEffect)(Se,[I,L,C,R,N,T,ae,w,z,se,he,V,q,Re,We]),(0,l.jsx)(p.Z,{onMutate:Ne,children:(0,l.jsx)("div",{ref:xe,className:r()(te,A),style:v()({position:"relative"},ge),children:pe})})},X=Y},931782:function(K,f,e){e.r(f);var m=e(667294),M=e(279589),g=e(785893),v=function(){return(0,g.jsx)(M.Z,{content:"Ant Design",children:(0,g.jsx)("div",{style:{height:500}})})};f.default=v},652421:function(K,f,e){e.r(f);var m=e(97857),M=e.n(m),g=e(805574),v=e.n(g),W=e(667294),S=e(185209),p=e(294050),F=e(279589),r=e(432210),a=e(483465),o=e(329573),c=e(945016),i=e(469922),t=e(785893),y=S.Z.Paragraph,s=function(){var b=p.Z.useForm(),$=v()(b,1),Y=$[0],X=(0,W.useState)({content:"Ant Design",color:"rgba(0, 0, 0, 0.15)",fontSize:16,zIndex:11,rotate:-22,gap:[100,100],offset:void 0}),x=v()(X,2),n=x[0],_=x[1],O=n.content,E=n.color,L=n.fontSize,D=n.zIndex,I=n.rotate,C=n.gap,R=n.offset,N=(0,W.useMemo)(function(){return{content:O,font:{color:typeof E=="string"?E:E.toRgbString(),fontSize:L},zIndex:D,rotate:I,gap:C,offset:R}},[n]);return(0,t.jsxs)("div",{style:{display:"flex"},children:[(0,t.jsxs)(F.Z,M()(M()({},N),{},{children:[(0,t.jsxs)(S.Z,{children:[(0,t.jsx)(y,{children:"The light-speed iteration of the digital world makes products more complex. However, human consciousness and attention resources are limited. Facing this design contradiction, the pursuit of natural interaction will be the consistent direction of Ant Design."}),(0,t.jsx)(y,{children:"Natural user cognition: According to cognitive psychology, about 80% of external information is obtained through visual channels. The most important visual elements in the interface design, including layout, colors, illustrations, icons, etc., should fully absorb the laws of nature, thereby reducing the user's cognitive cost and bringing authentic and smooth feelings. In some scenarios, opportunely adding other sensory channels such as hearing, touch can create a richer and more natural product experience."}),(0,t.jsx)(y,{children:"Natural user behavior: In the interaction with the system, the designer should fully understand the relationship between users, system roles, and task objectives, and also contextually organize system functions and services. At the same time, a series of methods such as behavior analysis, artificial intelligence and sensors could be applied to assist users to make effective decisions and reduce extra operations of users, to save users' mental and physical resources and make human-computer interaction more natural."})]}),(0,t.jsx)("img",{style:{zIndex:10,width:"100%",maxWidth:800,position:"relative"},src:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*zx7LTI_ECSAAAAAAAAAAAABkARQnAQ",alt:"\u793A\u4F8B\u56FE\u7247"})]})),(0,t.jsxs)(p.Z,{style:{width:280,flexShrink:0,borderLeft:"1px solid #eee",paddingLeft:20,marginLeft:20},form:Y,layout:"vertical",initialValues:n,onValuesChange:function(j,P){_(P)},children:[(0,t.jsx)(p.Z.Item,{name:"content",label:"Content",children:(0,t.jsx)(r.Z,{placeholder:"\u8BF7\u8F93\u5165"})}),(0,t.jsx)(p.Z.Item,{name:"color",label:"Color",children:(0,t.jsx)(a.Z,{})}),(0,t.jsx)(p.Z.Item,{name:"fontSize",label:"FontSize",children:(0,t.jsx)(o.Z,{step:1,min:0,max:100})}),(0,t.jsx)(p.Z.Item,{name:"zIndex",label:"zIndex",children:(0,t.jsx)(o.Z,{step:1,min:0,max:100})}),(0,t.jsx)(p.Z.Item,{name:"rotate",label:"Rotate",children:(0,t.jsx)(o.Z,{step:1,min:-180,max:180})}),(0,t.jsx)(p.Z.Item,{label:"Gap",style:{marginBottom:0},children:(0,t.jsxs)(c.Z,{style:{display:"flex"},align:"baseline",children:[(0,t.jsx)(p.Z.Item,{name:["gap",0],children:(0,t.jsx)(i.Z,{placeholder:"gapX",style:{width:"100%"}})}),(0,t.jsx)(p.Z.Item,{name:["gap",1],children:(0,t.jsx)(i.Z,{placeholder:"gapY",style:{width:"100%"}})})]})}),(0,t.jsx)(p.Z.Item,{label:"Offset",style:{marginBottom:0},children:(0,t.jsxs)(c.Z,{style:{display:"flex"},align:"baseline",children:[(0,t.jsx)(p.Z.Item,{name:["offset",0],children:(0,t.jsx)(i.Z,{placeholder:"offsetLeft",style:{width:"100%"}})}),(0,t.jsx)(p.Z.Item,{name:["offset",1],children:(0,t.jsx)(i.Z,{placeholder:"offsetTop",style:{width:"100%"}})})]})})]})]})};f.default=s},914184:function(K,f,e){e.r(f);var m=e(667294),M=e(279589),g=e(785893),v=function(){return(0,g.jsx)(M.Z,{height:30,width:130,image:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*lkAoRbywo0oAAAAAAAAAAAAADrJ8AQ/original",children:(0,g.jsx)("div",{style:{height:500}})})};f.default=v},486551:function(K,f,e){e.r(f);var m=e(667294),M=e(279589),g=e(785893),v=function(){return(0,g.jsx)(M.Z,{content:["Ant Design","Happy Working"],children:(0,g.jsx)("div",{style:{height:500}})})};f.default=v},517423:function(K,f,e){e.d(f,{Z:function(){return F}});const m=r=>typeof r=="object"&&r!=null&&r.nodeType===1,M=(r,a)=>(!a||r!=="hidden")&&r!=="visible"&&r!=="clip",g=(r,a)=>{if(r.clientHeight<r.scrollHeight||r.clientWidth<r.scrollWidth){const o=getComputedStyle(r,null);return M(o.overflowY,a)||M(o.overflowX,a)||(c=>{const i=(t=>{if(!t.ownerDocument||!t.ownerDocument.defaultView)return null;try{return t.ownerDocument.defaultView.frameElement}catch(y){return null}})(c);return!!i&&(i.clientHeight<c.scrollHeight||i.clientWidth<c.scrollWidth)})(r)}return!1},v=(r,a,o,c,i,t,y,s)=>t<r&&y>a||t>r&&y<a?0:t<=r&&s<=o||y>=a&&s>=o?t-r-c:y>a&&s<o||t<r&&s>o?y-a+i:0,W=r=>{const a=r.parentElement;return a==null?r.getRootNode().host||null:a},S=(r,a)=>{var o,c,i,t;if(typeof document=="undefined")return[];const{scrollMode:y,block:s,inline:l,boundary:b,skipOverflowHiddenElements:$}=a,Y=typeof b=="function"?b:te=>te!==b;if(!m(r))throw new TypeError("Invalid target");const X=document.scrollingElement||document.documentElement,x=[];let n=r;for(;m(n)&&Y(n);){if(n=W(n),n===X){x.push(n);break}n!=null&&n===document.body&&g(n)&&!g(document.documentElement)||n!=null&&g(n,$)&&x.push(n)}const _=(c=(o=window.visualViewport)==null?void 0:o.width)!=null?c:innerWidth,O=(t=(i=window.visualViewport)==null?void 0:i.height)!=null?t:innerHeight,{scrollX:E,scrollY:L}=window,{height:D,width:I,top:C,right:R,bottom:N,left:T}=r.getBoundingClientRect();let j=s==="start"||s==="nearest"?C:s==="end"?N:C+D/2,P=l==="center"?T+I/2:l==="end"?R:T;const ge=[];for(let te=0;te<x.length;te++){const A=x[te],{height:ne,width:ve,top:B,right:pe,bottom:ye,left:re}=A.getBoundingClientRect();if(y==="if-needed"&&C>=0&&T>=0&&N<=O&&R<=_&&C>=B&&N<=ye&&T>=re&&R<=pe)return ge;const oe=getComputedStyle(A),ae=parseInt(oe.borderLeftWidth,10),ie=parseInt(oe.borderTopWidth,10),w=parseInt(oe.borderRightWidth,10),le=parseInt(oe.borderBottomWidth,10);let z=0,U=0;const se="offsetWidth"in A?A.offsetWidth-A.clientWidth-ae-w:0,ue="offsetHeight"in A?A.offsetHeight-A.clientHeight-ie-le:0,he="offsetWidth"in A?A.offsetWidth===0?0:ve/A.offsetWidth:0,Ee="offsetHeight"in A?A.offsetHeight===0?0:ne/A.offsetHeight:0;if(X===A)z=s==="start"?j:s==="end"?j-O:s==="nearest"?v(L,L+O,O,ie,le,L+j,L+j+D,D):j-O/2,U=l==="start"?P:l==="center"?P-_/2:l==="end"?P-_:v(E,E+_,_,ae,w,E+P,E+P+I,I),z=Math.max(0,z+L),U=Math.max(0,U+E);else{z=s==="start"?j-B-ie:s==="end"?j-ye+le+ue:s==="nearest"?v(B,ye,ne,ie,le+ue,j,j+D,D):j-(B+ne/2)+ue/2,U=l==="start"?P-re-ae:l==="center"?P-(re+ve/2)+se/2:l==="end"?P-pe+w+se:v(re,pe,ve,ae,w+se,P,P+I,I);const{scrollLeft:V,scrollTop:q}=A;z=Math.max(0,Math.min(q+z/Ee,A.scrollHeight-ne/Ee+ue)),U=Math.max(0,Math.min(V+U/he,A.scrollWidth-ve/he+se)),j+=q-z,P+=V-U}ge.push({el:A,top:z,left:U})}return ge},p=r=>r===!1?{block:"end",inline:"nearest"}:(a=>a===Object(a)&&Object.keys(a).length!==0)(r)?r:{block:"start",inline:"nearest"};function F(r,a){if(!r.isConnected||!(c=>{let i=c;for(;i&&i.parentNode;){if(i.parentNode===document)return!0;i=i.parentNode instanceof ShadowRoot?i.parentNode.host:i.parentNode}return!1})(r))return;if((c=>typeof c=="object"&&typeof c.behavior=="function")(a))return a.behavior(S(r,a));const o=typeof a=="boolean"||a==null?void 0:a.behavior;for(const{el:c,top:i,left:t}of S(r,p(a)))c.scroll({top:i,left:t,behavior:o})}}}]);
