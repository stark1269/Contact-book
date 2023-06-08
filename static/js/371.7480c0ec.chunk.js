"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[371],{3371:function(n,e,t){t.r(e),t.d(e,{default:function(){return rn}});var o,r,i,a,c,s,l,d,u,p,x,f,m,h,g,b=t(5705),j=t(168),Z=t(6444),k=(0,Z.ZP)(b.l0)(o||(o=(0,j.Z)(["\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\ngap: 12px;\nmargin-bottom: 32px;\n"]))),v=Z.ZP.label(r||(r=(0,j.Z)(["\ndisplay: flex;\nflex-direction: column;\ngap: 4px;\nfont-size: 18px;\nfont-weight: 500;\ncolor: #f5f5f583;\n"]))),w=(0,Z.ZP)(b.gN)(i||(i=(0,j.Z)(["\npadding: 6px;\nfont-size: 22px;\nborder-radius: 6px;\n"]))),y=Z.ZP.button(a||(a=(0,j.Z)(["\nwidth: 150px;\nfont-size: 22px;\nborder-radius: 6px;\nbackground-color: #606060;\ntransition: background-color 300ms linear, color 300ms linear;\n\n:hover {\n  background-color: #569271;\n  color: whitesmoke;\n}\n"]))),P=(0,Z.ZP)(b.Bc)(c||(c=(0,j.Z)(["\ncolor: #ff00009a;\nfont-size: 18px;\n"]))),z=t(6727),C=t(9434),_=t(3634),L=t(1686),I=t.n(L),A=t(6916),F=function(n){return n.filter},q=function(n){return n.contacts},N=function(n){return n.contacts.items},R=(0,A.P1)([N,F],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),K=t(184),S=z.Ry({name:z.Z_().required("Required").matches(/(^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$)/,"Invalid by name"),number:z.Z_().required("Required").matches(/(\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9})/,"Invalid by number")}),T=function(){var n=(0,C.I0)(),e=(0,C.v9)(N);return(0,K.jsx)(b.J9,{initialValues:{name:"",number:""},validationSchema:S,onSubmit:function(t,o){e.some((function(n){return n.name.toLocaleLowerCase()===t.name.toLocaleLowerCase()}))?I().Notify.failure("".concat(t.name," is already in contacts!")):n((0,_.uK)(t)),o.resetForm()},children:(0,K.jsxs)(k,{autoComplete:"off",children:[(0,K.jsxs)(v,{children:["Name",(0,K.jsx)(w,{name:"name"}),(0,K.jsx)(P,{name:"name",component:"div"})]}),(0,K.jsxs)(v,{children:["Number",(0,K.jsx)(w,{name:"number",type:"tel"}),(0,K.jsx)(P,{name:"number",component:"div"})]}),(0,K.jsx)(y,{type:"submit",children:"Add contact"})]})})},V=t(8820),B=Z.ZP.li(s||(s=(0,j.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: end;\n  gap: 12px;\n  padding: 12px;\n  overflow: auto;\n  width: calc((100% - 90px) / 6);\n  min-height: 280px;\n  border-radius: 6px;\n  background-color: #232323;\n"]))),E=Z.ZP.p(l||(l=(0,j.Z)(["\ncolor: #f5f5f575;\nfont-size: 22px;\n"]))),G=Z.ZP.button(d||(d=(0,j.Z)(["\nposition: absolute;\nbottom: 12px;\nright: 12px;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nborder-radius: 50%;\nwidth: 54px;\nheight: 54px;\nborder: 1px solid #ffae009a;\ncolor: #ffae009a;\nbackground-color: transparent;\ntransition: background-color 300ms linear, color 300ms linear;\n:hover, :focus {\n  color: white;\n  background-color: #ffae009a;\n}\n"]))),J=(0,Z.ZP)(V.VPh)(u||(u=(0,j.Z)(["\nfont-size: 34px;\nfill: currentColor;\n"]))),Y=function(n){var e=n.item,t=e.name,o=e.number,r=e.id,i=(0,C.I0)();return(0,K.jsxs)(B,{children:[(0,K.jsx)(E,{children:t}),(0,K.jsx)(E,{children:o}),(0,K.jsx)(G,{onClick:function(){return i((0,_.GK)(r))},type:"button",children:(0,K.jsx)(J,{})})]})},$=Z.ZP.ul(p||(p=(0,j.Z)(["\n  margin-top: 22px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 18px;\n"]))),D=Z.ZP.h2(x||(x=(0,j.Z)(["\n  margin-top: 72px;\n  color: whitesmoke;\n  text-align: center;\n  font-size: 54px;\n"]))),H=t(2791),M=t(8402),O=function(){var n=(0,C.v9)(q),e=n.isLoading,t=n.error,o=(0,C.v9)(R),r=(0,C.I0)();return(0,H.useEffect)((function(){r((0,_.yF)())}),[r]),(0,K.jsxs)(K.Fragment,{children:[!o.length&&(0,K.jsx)(D,{children:"Your contact book is empty"}),e?(0,K.jsx)(M.ko,{}):(0,K.jsx)($,{children:o.map((function(n){return(0,K.jsx)(Y,{item:n},n.id)}))}),t&&(0,K.jsx)("p",{children:t})]})},Q=Z.ZP.input(f||(f=(0,j.Z)(["\nwidth: 30%;\npadding: 6px;\nfont-size: 18px;\nborder-radius: 6px;\n"]))),U=t(1273),W=function(){var n=(0,C.I0)(),e=(0,C.v9)(F);return(0,K.jsxs)(v,{children:["Find contacts by name",(0,K.jsx)(Q,{type:"text",value:e,onChange:function(e){return n((0,U.T)(e.currentTarget.value))}})]})},X=Z.ZP.h2(m||(m=(0,j.Z)(["\ncolor: whitesmoke;\nfont-size: 42px;\nmargin-bottom: 18px;\n"]))),nn=function(n){var e=n.children,t=n.title;return(0,K.jsxs)("section",{children:[(0,K.jsx)(X,{children:t}),e]})},en=t(7953),tn=Z.ZP.div(h||(h=(0,j.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-top: 142px;\n  padding-bottom: 72px;\n  background-image: linear-gradient(rgba(10,10,10,.7),rgba(10,10,10,.7)),url(",");\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100%;\n  height: 100%;\n"])),en),on=Z.ZP.div(g||(g=(0,j.Z)(["\n  padding: 72px;\n  background-color: #000000ee;\n  width: 100%;\n  height: 100%;\n"]))),rn=function(){return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(tn,{children:(0,K.jsx)(nn,{title:"Add a contact to the contact book",children:(0,K.jsx)(T,{})})}),(0,K.jsx)(on,{children:(0,K.jsxs)(nn,{title:"Contacts list",children:[(0,K.jsx)(W,{}),(0,K.jsx)(O,{})]})})]})}},7953:function(n,e,t){n.exports=t.p+"static/media/photo.6e1572b9c2114c25c200.jpeg"}}]);
//# sourceMappingURL=371.7480c0ec.chunk.js.map