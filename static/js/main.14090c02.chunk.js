(this.webpackJsonpfyp=this.webpackJsonpfyp||[]).push([[0],{115:function(e,t,n){},116:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),a=n(10),r=n.n(a),i=(n(89),n(50)),o=n(12),j=n(174),l=n(163),d=n(161),u=n(171),h=n(72),b=n.n(h),p=n(51),O=n(156),x=n(159),f=n(2),m=Object(O.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function g(e){var t=e.changeRoute,n=e.setUser,s=m(),a=Object(c.useState)(""),r=Object(o.a)(a,2),i=r[0],h=r[1],O=Object(c.useState)(""),g=Object(o.a)(O,2),v=g[0],y=g[1];return Object(f.jsxs)(x.a,{component:"main",maxWidth:"xs",children:[Object(f.jsx)(d.a,{}),Object(f.jsxs)("div",{className:s.paper,children:[Object(f.jsx)(j.a,{className:s.avatar,children:Object(f.jsx)(b.a,{})}),Object(f.jsx)(p.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(f.jsxs)("form",{className:s.form,onSubmit:function(e){e.preventDefault(),fetch("http://localhost:4000/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({reg_no:i,password:v})}).then((function(e){return e.json()})).then((function(e){e.id?(n(e),t("Student Home")):alert("Enter correct credentials!")})).catch((function(e){return console.log(e)}))},noValidate:!0,children:[Object(f.jsx)(u.a,{variant:"outlined",margin:"normal",required:!0,onChange:function(e){h(e.target.value)},fullWidth:!0,id:"username",label:"Username",name:"username",autoComplete:"username",autoFocus:!0}),Object(f.jsx)(u.a,{variant:"outlined",margin:"normal",required:!0,onChange:function(e){y(e.target.value)},fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),Object(f.jsx)(l.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:s.submit,children:"Sign In"})]})]})]})}var v=n(173),y=n(165),S=n(166),N=n(162),w=n(167),T=n(168),_=n(169),C=n(170),P=n(55),A=n.n(P),D=n(75),k=n.n(D),q=n(74),E=n.n(q),R=n(56),I=n.n(R),U=n(73),F=n.n(U),W=function(e){var t=e.user;return Object(f.jsxs)("div",{children:[Object(f.jsxs)("h4",{children:["Welcome ",t.fname," ",t.lname]}),Object(f.jsx)("hr",{}),Object(f.jsx)("p",{children:"You have successfully login to the Postponement Request Management System(PRMS)"}),Object(f.jsx)("p",{children:"You can access the functionalities by using appropiate side tabs"}),t.role_id?Object(f.jsxs)("div",{children:[Object(f.jsx)("h3",{children:"Approve/Deny Request"}),Object(f.jsx)("p",{children:"This functionality allow you as administrator to approve or deny the submitted student's postponement request by viewing the file after downloading and clicking approve button if satisfied with the content"}),Object(f.jsx)("h3",{children:"Approve/Deny Request"}),Object(f.jsx)("p",{children:"This functionality allow you as administrator to approve or deny the submitted student's postponement request by viewing the file after downloading and clicking approve button if satisfied with the content"}),Object(f.jsx)("hr",{})]}):Object(f.jsxs)("div",{children:[Object(f.jsx)("h3",{children:"Postponement"}),Object(f.jsx)("p",{children:'This functionality allow you as student to apply or request for postponement by selecting the type of postponement and uploading the letter and finally hitting the "SUBMIT" button'}),Object(f.jsx)("h3",{children:"View Progress"}),Object(f.jsx)("p",{children:"This functionality allow you as the student to view progress of your postponement request submitted"}),Object(f.jsx)("hr",{})]})]})},H=n(118),L=n(164),M=(n(95),Object(O.a)((function(e){return{button:{margin:e.spacing(1)}}}))),V=function(e){var t=e.updateInfo,n=Object(c.useState)({}),s=Object(o.a)(n,2),a=s[0],r=s[1],i=Object(c.useState)(),j=Object(o.a)(i,2),d=j[0],u=j[1],h=M();return Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)(L.a,{container:!0,spacing:2,children:Object(f.jsx)(L.a,{item:!0,xs:12,children:Object(f.jsxs)(H.a,{className:"type",children:[Object(f.jsx)("h4",{children:"SELECT TYPE:"}),Object(f.jsxs)("select",{className:"space",value:d,onChange:function(e){u(e.target.value)},children:[Object(f.jsx)("option",{value:""}),Object(f.jsx)("option",{value:"1",children:"TEST"}),Object(f.jsx)("option",{value:"2",children:"UNIVERSITY EXAMINATION"}),Object(f.jsx)("option",{value:"3",children:"YEAR OF STUDY"})]})]})})}),Object(f.jsx)(L.a,{item:!0,xs:12,children:Object(f.jsxs)(H.a,{className:"upload",children:[Object(f.jsx)("h4",{children:"UPLOAD LETTER AND ATTACHMENT:"}),Object(f.jsx)("input",{type:"file",name:"file",onChange:function(e){return r(e.target.files[0])}})," ",Object(f.jsx)("br",{})," ",Object(f.jsx)("br",{}),Object(f.jsx)(l.a,{variant:"contained",color:"primary",onClick:function(){var e=new FormData;e.append("file",a),e.append("type_id",d),fetch("http://localhost:4000/upload",{method:"post",body:e}).then((function(e){return e.json()})).then((function(e){t(e)})).catch((function(e){console.error(e)}))},className:h.button,children:"Submit"})]})})]})},Y=(n(96),n(48)),B=n.n(Y),J=n(49),G=n.n(J),X=function(e){e.info;var t=Object(c.useState)([]),n=Object(o.a)(t,2),s=n[0],a=n[1],r=Object(c.useState)([]),i=Object(o.a)(r,2),j=(i[0],i[1]);Object(c.useEffect)((function(){return fetch("http://localhost:4000/info").then((function(e){return e.json()})).then((function(e){a(e)})).catch((function(e){return console.log(e)})),function(){}}),[]),Object(c.useEffect)((function(){return fetch("http://localhost:4000/requests").then((function(e){return e.json()})).then((function(e){j(e)})).catch((function(e){return console.log(e)})),function(){}}),[]);return Object(f.jsx)("div",{children:Object(f.jsx)(L.a,{container:!0,spacing:2,children:Object(f.jsx)(L.a,{item:!0,xs:12,children:Object(f.jsxs)(H.a,{className:"approval",children:[Object(f.jsx)("h4",{children:"Stages of Approval"}),Object(f.jsxs)("table",{children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"S/N"}),Object(f.jsx)("th",{children:"File"}),Object(f.jsx)("th",{children:"Status"})]})}),Object(f.jsx)("tbody",{children:0===s.length?Object(f.jsx)("tr",{children:"No Data!"}):s.map((function(e,t){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:t+1}),Object(f.jsx)("td",{children:Object(f.jsx)(l.a,{variant:"text",color:"default",onClick:(n=e,void B()({url:"http://localhost:4000/download",method:"POST",data:{path_name:n.attachement},responseType:"blob"}).then((function(e){G()(e.data,n.file_name)}))),children:e.file_name})}),Object(f.jsx)("td",{children:1===e.type_id?"AP"===e.hod_status?"Approved":"DN"===e.hod_status?"Denied":"Waiting for approval":2===e.type_id?"AP"===e.cp_status?"Approved":"DN"===e.hod_status?"Denied":"Waiting for approval":"AP"===e.dvc_status?"Approved":"DN"===e.dvc_status?"Denied":"Waiting for approval"})]},t);var n}))})]})]})})})})},z=(n(115),function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],s=t[1];Object(c.useEffect)((function(){return fetch("http://localhost:4000/requests").then((function(e){return e.json()})).then((function(e){s(e)})).catch((function(e){return console.error(e)})),function(){}}),[]);return Object(f.jsx)("div",{children:Object(f.jsx)(L.a,{container:!0,spacing:2,children:Object(f.jsx)(L.a,{item:!0,xs:12,children:Object(f.jsxs)(H.a,{className:"approval",children:[Object(f.jsx)("h4",{children:"Stages of Approval"}),Object(f.jsxs)("table",{children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"S/N"}),Object(f.jsx)("th",{children:"File"}),Object(f.jsx)("th",{children:"Type"}),Object(f.jsx)("th",{children:"Registration_no"}),Object(f.jsx)("th",{children:"Approve or Deny"})]})}),Object(f.jsx)("tbody",{children:0===n.length?Object(f.jsx)("tr",{children:"No Data!"}):n.map((function(e,t){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:t+1}),Object(f.jsx)("td",{children:Object(f.jsx)("button",{onClick:function(){return t=e,void B()({url:"http://localhost:4000/download",method:"POST",data:{path_name:t.attachement},responseType:"blob"}).then((function(e){G()(e.data,t.file_name)}));var t},children:e.file_name})}),Object(f.jsx)("td",{children:e.name}),Object(f.jsx)("td",{children:e.reg_no}),Object(f.jsxs)("td",{className:"status",children:[Object(f.jsx)("button",{onClick:function(){return t=e,void fetch("http://localhost:4000/app_or_dn",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:t.request_id,status:"AP"})}).then((function(e){return e.json()})).then((function(e){})).catch((function(e){return console.error(e)}));var t},children:"Approve"}),Object(f.jsx)("button",{onClick:function(){return t=e,void fetch("http://localhost:4000/app_or_dn",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:t.request_id,status:"DN"})}).then((function(e){return e.json()})).then((function(e){})).catch((function(e){return console.error(e)}));var t},children:"Deny"})]})]},t)}))})]})]})})})})}),K=240,Q=Object(O.a)((function(e){return{root:{display:"flex"},appBar:{width:"calc(100% - ".concat(K,"px)"),marginLeft:K},drawer:{width:K,flexShrink:0},drawerPaper:{width:K},toolbar:e.mixins.toolbar,content:{flexGrow:1,backgroundColor:e.palette.background.default,padding:e.spacing(3)}}}));function Z(e){var t=e.user,n=e.changeRoute,s=Object(c.useState)("Home"),a=Object(o.a)(s,2),r=a[0],j=a[1],l=Object(c.useState)({}),u=Object(o.a)(l,2),h=u[0],b=u[1],O=function(e){j(e)},x=function(){n("Signin")},m=Q();return Object(f.jsxs)("div",{className:m.root,children:[Object(f.jsx)(d.a,{}),Object(f.jsx)(y.a,{position:"fixed",className:m.appBar,children:Object(f.jsx)(S.a,{children:Object(f.jsx)(p.a,{variant:"h6",noWrap:!0,children:"Postponement Request Management System"})})}),Object(f.jsxs)(v.a,{className:m.drawer,variant:"permanent",classes:{paper:m.drawerPaper},anchor:"left",children:[Object(f.jsx)("div",{className:m.toolbar,children:t.role_id?Object(f.jsx)("strong",{children:t.name}):Object(f.jsx)("strong",{children:"STUDENT"})}),Object(f.jsx)(w.a,{}),t.role_id?Object(f.jsxs)(N.a,{children:[Object(f.jsxs)(T.a,{button:!0,onClick:function(){return O("Home")},children:[Object(f.jsxs)(_.a,{children:[Object(f.jsx)(A.a,{})," "]}),Object(f.jsx)(C.a,{primary:"Home"})]}),Object(f.jsxs)(T.a,{button:!0,onClick:function(){return O("Approve/Deny Request")},children:[Object(f.jsxs)(_.a,{children:[Object(f.jsx)(k.a,{})," "]}),Object(f.jsx)(C.a,{primary:"Approve/Deny Request"})]}),Object(f.jsxs)(T.a,{button:!0,onClick:x,children:[Object(f.jsxs)(_.a,{children:[Object(f.jsx)(I.a,{})," "]}),Object(f.jsx)(C.a,{primary:"Log Out"})]})]}):Object(f.jsxs)(N.a,{children:[Object(f.jsxs)(T.a,{button:!0,onClick:function(){return O("Home")},children:[Object(f.jsxs)(_.a,{children:[Object(f.jsx)(A.a,{})," "]}),Object(f.jsx)(C.a,{primary:"Home"})]}),Object(f.jsxs)(T.a,{button:!0,onClick:function(){return O("Postponement")},children:[Object(f.jsxs)(_.a,{children:[Object(f.jsx)(F.a,{})," "]}),Object(f.jsx)(C.a,{primary:"Postponement"})]}),Object(f.jsxs)(T.a,{button:!0,onClick:function(){return O("View Progress")},children:[Object(f.jsxs)(_.a,{children:[Object(f.jsx)(E.a,{})," "]}),Object(f.jsx)(C.a,{primary:"View Progress"})]}),Object(f.jsxs)(T.a,{button:!0,onClick:x,children:[Object(f.jsxs)(_.a,{children:[Object(f.jsx)(I.a,{})," "]}),Object(f.jsx)(C.a,{primary:"Log Out"})]})]})]}),Object(f.jsxs)("main",{className:m.content,children:[Object(f.jsx)("div",{className:m.toolbar}),"Postponement"===r?Object(f.jsx)(V,{updateInfo:function(e){b(Object(i.a)({},e))}}):"View Progress"===r?Object(f.jsx)(X,{info:h}):"Home"===r?Object(f.jsx)(W,{user:t}):"Approve/Deny Request"===r?Object(f.jsx)(z,{}):Object(f.jsx)(g,{})]})]})}var $=function(){var e=Object(c.useState)("Signin"),t=Object(o.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)({}),r=Object(o.a)(a,2),j=r[0],l=r[1],d=function(e){return s(e)};return Object(f.jsx)("div",{className:"App",children:"Signin"===n?Object(f.jsx)(g,{setUser:function(e){l(Object(i.a)({},e))},changeRoute:d}):Object(f.jsx)(Z,{user:j,changeRoute:d})})},ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,176)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))};r.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)($,{})}),document.getElementById("root")),ee()},89:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){}},[[116,1,2]]]);
//# sourceMappingURL=main.14090c02.chunk.js.map