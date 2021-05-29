(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{32:function(e,t,n){},33:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),c=n(13),i=n.n(c),r=(n(32),n(33),n(2)),o=n(14),l=n.n(o),d=n(0),u=function(e){e.input;var t=e.setInput,n=e.handleSubmit;return Object(d.jsxs)("div",{className:"form",children:[Object(d.jsx)("p",{id:"description",children:"This magic Brain will detect colors in the picture. Give it a try"}),Object(d.jsx)("p",{id:"info",children:"Input any jpg image link for example 'https://watchandlearn.scholastic.com/content/dam/classroom-magazines/watchandlearn/videos/animals-and-plants/plants/what-are-plants-/What-Are-Plants.jpg'"}),Object(d.jsxs)("form",{children:[Object(d.jsx)("input",{className:"input",type:"text",onInput:function(e){return t(e.target.value)}}),Object(d.jsx)("button",{id:"detect",onClick:n,children:"Detect"})]})]})},j=n(27),h=n.n(j),p=n.p+"static/media/brain.55764925.png",b=function(){return Object(d.jsx)("div",{className:"logo",children:Object(d.jsx)(h.a,{className:"Tilt",options:{max:55},style:{height:150,width:150},children:Object(d.jsx)("div",{className:"Tilt-inner",children:Object(d.jsx)("img",{alt:"logo",className:"image",src:p})})})})},m=function(e){var t=e.routeChangeSignIn;return Object(d.jsx)("header",{children:Object(d.jsx)("nav",{className:"topBar",children:Object(d.jsx)("button",{className:"signOutButton",onClick:function(){return t("signin")},children:"Sign Out"})})})},O=function(e){var t=e.entries,n=e.displayName;return Object(d.jsxs)("div",{className:"rank",children:[Object(d.jsx)("div",{className:"text",children:"".concat(n,", your current entries are : ")}),Object(d.jsx)("div",{className:"rankNumber",children:"#".concat(t)})]})},g=function(e){var t=e.imgUrl;return Object(d.jsx)("div",{className:"displayImage",children:Object(d.jsx)("img",{alt:"",id:"inputImage",src:t})})},x=function(){return Object(d.jsx)("div",{className:"displayColors"})},f=function(e){var t=e.routeChange,n=e.setId,a=e.setEntries,c=e.setDisplayName,i=Object(s.useState)(""),o=Object(r.a)(i,2),l=o[0],u=o[1],j=Object(s.useState)(""),h=Object(r.a)(j,2),p=h[0],b=h[1],m={email:l,password:p};return Object(d.jsx)("div",{className:"card",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h2",{children:"Sign In"}),Object(d.jsx)("input",{onChange:function(e){u(e.target.value)},type:"text",className:"email signinEmail",placeholder:"Email"}),Object(d.jsx)("label",{htmlFor:"email",children:"Email"}),Object(d.jsx)("input",{onChange:function(e){b(e.target.value)},type:"password",className:"password signinPassword",placeholder:"Password"}),Object(d.jsx)("label",{htmlFor:"password",children:"Password"}),Object(d.jsx)("button",{id:"submit",onClick:function(){fetch("".concat("https://calm-bastion-00688.herokuapp.com","/auth/signin"),{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify(m)}).then((function(e){return e.text()})).then((function(e){var s=JSON.parse(e);"User signed in successfully"===s.message&&(n(s.response.id),a(s.response.entries),c(s.response.name),t("home"))}))},type:"submit",children:"Sign In"}),Object(d.jsx)("a",{onClick:function(){return t("register")},className:"registerLink",children:"Register"})]})})},v=function(e){var t=e.routeChange,n=e.setId,a=e.setEntries,c=e.setDisplayName,i=Object(s.useState)(""),o=Object(r.a)(i,2),l=o[0],u=o[1],j=Object(s.useState)(""),h=Object(r.a)(j,2),p=h[0],b=h[1],m=Object(s.useState)(""),O=Object(r.a)(m,2),g=O[0],x=O[1],f={name:l,email:p,password:g};return Object(d.jsx)("div",{className:"card",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h2",{children:"Register"}),Object(d.jsx)("input",{onChange:function(e){u(e.target.value)},type:"text",className:"email",placeholder:"Name"}),Object(d.jsx)("label",{htmlFor:"password",children:"Name"}),Object(d.jsx)("input",{onInput:function(e){b(e.target.value)},type:"email",className:"email",placeholder:"Email"}),Object(d.jsx)("label",{htmlFor:"email",children:"Email"}),Object(d.jsx)("input",{onInput:function(e){x(e.target.value)},type:"password",className:"password",placeholder:"Password"}),Object(d.jsx)("label",{htmlFor:"password",children:"Password"}),Object(d.jsx)("button",{id:"submit",onClick:function(){""===l&&""===p&&""===g||fetch("".concat("https://calm-bastion-00688.herokuapp.com","/auth/register"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(f)}).then((function(e){return e.text()})).then((function(e){var s=JSON.parse(e);"User added successfully"===s.message&&(n(s.response.id),a(s.response.entries),c(s.response.name),t("home"))}))},type:"submit",children:"Register"})]})})},y=new l.a.App({apiKey:"857608ae43c54ba1ae90c8025fa80a2a"});var N=function(){var e=Object(s.useState)(""),t=Object(r.a)(e,2),n=t[0],a=t[1],c=Object(s.useState)(""),i=Object(r.a)(c,2),o=i[0],j=i[1],h=Object(s.useState)(""),p=Object(r.a)(h,2),N=p[0],S=p[1],C=document.querySelector(".displayColors"),w=Object(s.useState)("signin"),I=Object(r.a)(w,2),k=I[0],E=I[1],T=Object(s.useState)(),P=Object(r.a)(T,2),F=P[0],L=P[1],D=Object(s.useState)(),J=Object(r.a)(D,2),B=J[0],U=J[1],M={id:F},R=function(e){E(e)};return Object(d.jsx)("div",{className:"App",children:"home"===k?Object(d.jsxs)("div",{children:[Object(d.jsx)(m,{routeChangeSignIn:R}),Object(d.jsx)(b,{}),Object(d.jsx)(O,{entries:B,displayName:N}),Object(d.jsx)(u,{input:n,setInput:a,handleSubmit:function(e){e.preventDefault(),j(n),y.models.predict(l.a.COLOR_MODEL,n).then((function(e){e&&fetch("".concat("https://calm-bastion-00688.herokuapp.com","/images"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(M)}).then((function(e){return e.text()})).then((function(e){U(e)}));var t=e.outputs[0].data.colors;C.innerHTML="",t.forEach((function(e){var t=document.createElement("div");t.classList.add("copyColor"),t.innerHTML='<div class="color"></div>\n                    <div class="displayValue">'.concat(e.raw_hex,"</div>"),C.appendChild(t);var n=t.querySelector(".color");n.classList.add("color"),n.style.background=e.raw_hex}))})).catch((function(e){console.log(e)}))}}),Object(d.jsx)(g,{imgUrl:o}),Object(d.jsx)(x,{})]}):"signin"===k?Object(d.jsx)(f,{routeChange:R,setId:L,setEntries:U,setDisplayName:S}):Object(d.jsx)(v,{routeChange:R,setId:L,setEntries:U,setDisplayName:S})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,74)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),s(e),a(e),c(e),i(e)}))};i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(N,{})}),document.getElementById("root")),S()}},[[73,1,2]]]);
//# sourceMappingURL=main.fdd5eaad.chunk.js.map