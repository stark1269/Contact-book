"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[923],{7923:function(n,e,r){r.r(e),r.d(e,{default:function(){return Y}});var o,t,i,a,s,c,d,l,x,u,p,h,f,m=r(5705),b=r(168),g=r(6444),j=(0,g.ZP)(m.l0)(o||(o=(0,b.Z)(["\ndisplay: flex;\nflex-direction: column;\ngap: 16px;\npadding: 12px;\nborder-radius: 4px;\nborder: 1px solid gray;\n"]))),Z=g.ZP.label(t||(t=(0,b.Z)(["\ndisplay: flex;\nflex-direction: column;\ngap: 8px;\nfont-size: 18px;\nfont-weight: 500;\n"]))),y=(0,g.ZP)(m.gN)(i||(i=(0,b.Z)(["\npadding: 4px;\nfont-size: 14px;\nborder-radius: 4px;\nborder: 1px solid gray;\nbox-shadow: 4px 4px 6px 0 rgba(217,217,217,1);\n"]))),w=g.ZP.button(a||(a=(0,b.Z)(["\nfont-size: 14px;\nwidth: 100px;\nborder-radius: 4px;\nborder: 1px solid gray;\nbox-shadow: 4px 4px 6px 0 rgba(217,217,217,1);\ntransition: background-color 300ms linear, color 300ms linear;\n:hover, :focus {\n  background-color: #71A92C;\n  color: white;\n}\n"]))),v=(0,g.ZP)(m.Bc)(s||(s=(0,b.Z)(["\ncolor: red;\nfont-size: 14px;\n"]))),P=r(6727),k=r(9434),C=r(3634),z=r(1686),_=r.n(z),L=r(6916),I=function(n){return n.filter},A=function(n){return n.contacts},F=function(n){return n.contacts.items},q=(0,L.P1)([F,I],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),N=r(184),R=P.Ry({name:P.Z_().required("Required").matches(/(^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$)/,"Invalid by name"),number:P.Z_().required("Required").matches(/(\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9})/,"Invalid by number")}),K=function(){var n=(0,k.I0)(),e=(0,k.v9)(F);return(0,N.jsx)(m.J9,{initialValues:{name:"",number:""},validationSchema:R,onSubmit:function(r,o){e.some((function(n){return n.name.toLocaleLowerCase()===r.name.toLocaleLowerCase()}))?_().Notify.failure("".concat(r.name," is already in contacts!")):n((0,C.uK)(r)),o.resetForm()},children:(0,N.jsxs)(j,{children:[(0,N.jsxs)(Z,{children:["Name",(0,N.jsx)(y,{name:"name"}),(0,N.jsx)(v,{name:"name",component:"div"})]}),(0,N.jsxs)(Z,{children:["Number",(0,N.jsx)(y,{name:"number",type:"tel"}),(0,N.jsx)(v,{name:"number",component:"div"})]}),(0,N.jsx)(w,{type:"submit",children:"Add contact"})]})})},S=r(2134),T=g.ZP.li(c||(c=(0,b.Z)(['\ndisplay: flex;\njustify-content: space-between;\nalign-items: baseline;\ngap: 8px;\n:after {\n  content: "";\n  height: 1px;\n  background-color: grey;\n  flex-grow: 1;\n}\n']))),V=g.ZP.p(d||(d=(0,b.Z)(["\nfont-weight: 500;\n"]))),B=g.ZP.button(l||(l=(0,b.Z)(["\ndisplay: flex;\njustify-content: center;\nalign-items: center;\norder: 1;\nborder-radius: 50%;\nwidth: 34px;\nheight: 34px;\nborder: 1px solid red;\nbox-shadow: 2px 2px 6px 0px rgba(209,132,132,1);\ncolor: red;\nbackground-color: transparent;\ntransition: background-color 300ms linear, color 300ms linear;\n:hover, :focus {\n  color: white;\n  background-color: red;\n}\n"]))),E=(0,g.ZP)(S.VPh)(x||(x=(0,b.Z)(["\nfill: currentColor;\n"]))),G=function(n){var e=n.item,r=e.name,o=e.number,t=e.id,i=(0,k.I0)();return(0,N.jsxs)(T,{children:[(0,N.jsxs)(V,{children:[r,": ",o]}),(0,N.jsx)(B,{onClick:function(){return i((0,C.GK)(t))},type:"button",children:(0,N.jsx)(E,{})})]})},J=g.ZP.ul(u||(u=(0,b.Z)(["\noverflow: auto;\npadding: 8px;\nmax-height: 215px;\nmargin-top: 18px;\ndisplay: flex;\nflex-direction: column;\ngap: 8px;\n"]))),$=r(2791),D=r(8402),H=function(){var n=(0,k.v9)(A),e=n.isLoading,r=n.error,o=(0,k.v9)(q),t=(0,k.I0)();return(0,$.useEffect)((function(){t((0,C.yF)())}),[t]),(0,N.jsxs)(N.Fragment,{children:[e?(0,N.jsx)(D.ko,{}):(0,N.jsx)(J,{children:o.map((function(n){return(0,N.jsx)(G,{item:n},n.id)}))}),r&&(0,N.jsx)("p",{children:r})]})},M=g.ZP.input(p||(p=(0,b.Z)(["\nwidth: 50%;\npadding: 4px;\nfont-size: 14px;\nborder-radius: 4px;\nborder: 1px solid gray;\nbox-shadow: 4px 4px 6px 0 rgba(217,217,217,1);\n"]))),O=r(1273),Q=function(){var n=(0,k.I0)(),e=(0,k.v9)(I);return(0,N.jsxs)(Z,{children:["Find contacts by name",(0,N.jsx)(M,{type:"text",value:e,onChange:function(e){return n((0,O.T)(e.currentTarget.value))}})]})},U=g.ZP.h1(h||(h=(0,b.Z)(["\nfont-size: 42px;\nmargin-bottom: 18px;\n"]))),W=g.ZP.h1(f||(f=(0,b.Z)(["\nfont-size: 32px;\nmargin-bottom: 18px;\n"]))),X=function(n){var e=n.children,r=n.title;return(0,N.jsxs)("section",{children:["Phonebook"===r?(0,N.jsx)(U,{children:r}):(0,N.jsx)(W,{children:r}),e]})},Y=function(){return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(X,{title:"Phonebook",children:(0,N.jsx)(K,{})}),(0,N.jsxs)(X,{title:"Contacts",children:[(0,N.jsx)(Q,{}),(0,N.jsx)(H,{})]})]})}}}]);
//# sourceMappingURL=923.154a1e3d.chunk.js.map