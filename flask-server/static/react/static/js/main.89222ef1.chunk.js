(this["webpackJsonplogin-register"]=this["webpackJsonplogin-register"]||[]).push([[0],{20:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a(1),r=a.n(n),c=a(12),i=a.n(c),l=(a(20),a(2)),o=a(3),h=a(5),d=a(4),m=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){this.props.user;return Object(s.jsx)("div",{className:"container text-center",children:Object(s.jsxs)("div",{className:"row justify-content-center",children:[Object(s.jsxs)("div",{className:"col-10 col-md-10 col-lg-8 col-xl-7",children:[Object(s.jsx)("div",{className:"display-4 text-primary mt-3 mb-2",style:{fontSize:"2.8em"},children:"Meeting Log"}),Object(s.jsxs)("p",{className:"lead",style:{fontSize:"1.4em",fontWeight:200},children:["This simple app creates meetings, allows people to check in, and picks random users to award giveaways. It's a good example of a Single Page Application which includes connection to a database and routing. It's a practical way to learn"," ",Object(s.jsx)("a",{href:"https://reactjs.org/",children:"React"})]})]})," "]})})}}]),a}(n.Component),j=a(9),b=a(7),u=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.theMessage;return Object(s.jsx)("div",{className:"col-12 alert alert-danger px-3",children:e})}}]),a}(n.Component),p=a(6),g=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).state={email:"",password:"",errorMessage:null},s.handleChange=s.handleChange.bind(Object(b.a)(s)),s.handleSubmit=s.handleSubmit.bind(Object(b.a)(s)),s}return Object(o.a)(a,[{key:"handleChange",value:function(e){var t=e.target.name,a=e.target.value;this.setState(Object(j.a)({},t,a))}},{key:"handleSubmit",value:function(e){fetch("http://localhost:5000/login",{method:"POST",mode:"no-cors",headers:{Accept:"application/json","Content-Type":"text/plain"},body:JSON.stringify(t)}).then((function(e){return console.log(e),e.json()}));var t={email:this.state.email,password:this.state.password}}},{key:"render",value:function(){var e=this;return Object(s.jsx)("form",{className:"mt-3",onSubmit:this.handleSubmit,children:Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("div",{className:"row justify-content-center",children:Object(s.jsx)("div",{className:"col-lg-6",children:Object(s.jsx)("div",{className:"card bg-light",children:Object(s.jsxs)("div",{className:"card-body",children:[Object(s.jsx)("h3",{className:"font-weight-light mb-3",children:"Log in"}),Object(s.jsxs)("section",{className:"form-group",children:[null!==this.state.errorMessage?Object(s.jsx)(u,{theMessage:this.state.errorMessage}):null,Object(s.jsx)("label",{className:"form-control-label sr-only",htmlFor:"Email",children:"Email"}),Object(s.jsx)("input",{required:!0,className:"form-control",type:"email",id:"email",name:"email",placeholder:"Email",value:this.state.email,onChange:this.handleChange})]}),Object(s.jsx)("section",{className:"form-group",children:Object(s.jsx)("input",{required:!0,className:"form-control",type:"password",name:"password",placeholder:"Password",value:this.state.password,onChange:this.handleChange})}),Object(s.jsx)("div",{className:"form-group text-right mb-0",children:Object(s.jsx)("button",{onClick:function(){return e.handleSubmit()},className:"btn btn-primary",type:"submit",children:"Log in"})})]})})})})})})}}]),a}(n.Component),O=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).state={displayName:"",email:"",passOne:"",passTwo:"",errorMessage:null},s.handleChange=s.handleChange.bind(Object(b.a)(s)),s.handleSubmit=s.handleSubmit.bind(Object(b.a)(s)),s}return Object(o.a)(a,[{key:"handleChange",value:function(e){var t=this,a=e.target.name,s=e.target.value;this.setState(Object(j.a)({},a,s),(function(){t.state.passOne!==t.state.passTwo?t.setState({errorMessage:"Passwords does not match"}):t.setState({errorMessage:null})}))}},{key:"handleSubmit",value:function(e){fetch("http://localhost:5000/register",{method:"POST",mode:"no-cors",headers:{Accept:"application/json","Content-Type":"text/plain"},body:JSON.stringify(t)}).then((function(e){return console.log(e),e.json()}));var t={displayName:this.state.displayName,email:this.state.email,password:this.state.passOne}}},{key:"render",value:function(){return Object(s.jsx)("form",{className:"mt-3",onSubmit:this.handleSubmit,children:Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("div",{className:"row justify-content-center",children:Object(s.jsx)("div",{className:"col-lg-8",children:Object(s.jsx)("div",{className:"card bg-light",children:Object(s.jsxs)("div",{className:"card-body",children:[Object(s.jsx)("h3",{className:"font-weight-light mb-3",children:"Register"}),Object(s.jsxs)("div",{className:"form-row",children:[null!==this.state.errorMessage?Object(s.jsx)(u,{theMessage:this.state.errorMessage}):null,Object(s.jsxs)("section",{className:"col-sm-12 form-group",children:[Object(s.jsx)("label",{className:"form-control-label sr-only",htmlFor:"displayName",children:"Display Name"}),Object(s.jsx)("input",{className:"form-control",type:"text",id:"displayName",placeholder:"Display Name",name:"displayName",required:!0,value:this.state.displayName,onChange:this.handleChange})]})]}),Object(s.jsxs)("section",{className:"form-group",children:[Object(s.jsx)("label",{className:"form-control-label sr-only",htmlFor:"email",children:"Email"}),Object(s.jsx)("input",{className:"form-control",type:"email",id:"email",placeholder:"Email Address",required:!0,name:"email",value:this.state.email,onChange:this.handleChange})]}),Object(s.jsxs)("div",{className:"form-row",children:[Object(s.jsx)("section",{className:"col-sm-6 form-group",children:Object(s.jsx)("input",{className:"form-control",type:"password",name:"passOne",placeholder:"Password",value:this.state.passOne,onChange:this.handleChange})}),Object(s.jsx)("section",{className:"col-sm-6 form-group",children:Object(s.jsx)("input",{className:"form-control",type:"password",required:!0,name:"passTwo",placeholder:"Repeat Password",value:this.state.passTwo,onChange:this.handleChange})})]}),Object(s.jsx)("div",{className:"form-group text-right mb-0",children:Object(s.jsx)("button",{onClick:this.handleSubmit,className:"btn btn-primary",type:"submit",children:"Register"})})]})})})})})})}}]),a}(n.Component),v=a(14),x=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.user,a=e.logOutUser;return Object(s.jsx)("nav",{className:"site-nav family-sans navbar navbar-expand bg-primary navbar-dark higher",children:Object(s.jsxs)("div",{className:"container-fluid",children:[Object(s.jsxs)(p.a,{to:"/",className:"navbar-brand",children:[Object(s.jsx)(v.a,{className:"mr-1"})," Meeting Log"]}),Object(s.jsxs)("div",{className:"navbar-nav ml-auto",children:[t&&Object(s.jsx)(p.a,{className:"nav-item nav-link",to:"/meetings",children:"meetings"}),!t&&Object(s.jsx)(p.a,{className:"nav-item nav-link",to:"/login",children:"log in"}),!t&&Object(s.jsx)(p.a,{className:"nav-item nav-link",to:"/register",children:"register"}),t&&Object(s.jsx)(p.a,{className:"nav-item nav-link",to:"/login",onClick:function(e){return a(e)},children:"log out"})]})]})})}}]),a}(n.Component),f=(a(27),function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)(x,{}),Object(s.jsxs)(p.b,{children:[Object(s.jsx)(m,{path:"/"}),Object(s.jsx)(g,{path:"/login"}),Object(s.jsx)(O,{path:"/register",registerUser:this.registerUser})]})]})}}]),a}(n.Component)),N=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,29)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),s(e),n(e),r(e),c(e)}))};i.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(f,{})}),document.getElementById("root")),N()}},[[28,1,2]]]);
//# sourceMappingURL=main.89222ef1.chunk.js.map