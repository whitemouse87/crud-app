(this["webpackJsonpcrud-app"]=this["webpackJsonpcrud-app"]||[]).push([[0],{11:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(10),r=a.n(i),c=(a(16),a(3)),o=a(4),s=a(6),d=a(5),u=a(2),m=a(7),h=(a(17),a(8)),p=a(1),f=a.n(p),E=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={adminEmail:"admin@example.com",adminPassword:"qwerty",userEnteredEmail:null,userEnteredPassword:null},a.handleInputChange=a.handleInputChange.bind(Object(u.a)(a)),a.handleLogin=a.handleLogin.bind(Object(u.a)(a)),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"handleInputChange",value:function(e,t){this.setState(Object(h.a)({},e,t.target.value))}},{key:"handleLogin",value:function(){var e=this,t=this.state,a=t.adminEmail,n=t.adminPassword,l=t.userEnteredEmail,i=t.userEnteredPassword;l===a&&i===n?f.a.fire({timer:1500,onBeforeOpen:function(){f.a.showLoading()},onClose:function(){e.props.onLoginSuccess(),f.a.fire({position:"center",type:"success",title:"Successfully logged in",showConfirmButton:!1,timer:1500})}}):f.a.fire({timer:1500,onBeforeOpen:function(){f.a.showLoading()},onClose:function(){f.a.fire({position:"center",type:"error",title:"Incorrect credentials !",showConfirmButton:!0})}})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"small-container"},l.a.createElement("form",null,l.a.createElement("h1",null,"Admin Login"),l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement("input",{type:"email",id:"email",placeholder:"admin@example.com",onChange:function(t){return e.handleInputChange("userEnteredEmail",t)}}),l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement("input",{type:"password",id:"password",placeholder:"qwerty",onChange:function(t){return e.handleInputChange("userEnteredPassword",t)}}),l.a.createElement("input",{type:"button",onClick:this.handleLogin,value:"Login",className:"login-btn"})))}}]),t}(n.Component),y=[{firstName:"Susan",lastName:"Jordon",email:"susan@example.com",salary:"68000",date:"2019-02-05"},{firstName:"Clark",lastName:"Kent",email:"clark@example.com",salary:"175000",date:"2010-11-01"},{firstName:"Rolf",lastName:"Hegdal",email:"rolf@example.com",salary:"130000",date:"2010-06-15"},{firstName:"diana",lastName:"prince",email:"diana@example.com",salary:"140000",date:"2019-03-10"},{firstName:"Arsenio",lastName:"Grant",email:"arsenio@example.com",salary:"68000",date:"2017-04-18"},{firstName:"Tim",lastName:"Fisher",email:"fisher@example.com",salary:"120000",date:"2014-04-19"},{firstName:"Alex",lastName:"Smith",email:"alex@example.com",salary:"87000",date:"2012-05-07"},{firstName:"Ede",lastName:"Judge",email:"ede@example.com",salary:"90000",date:"2018-01-20"},{firstName:"Mark",lastName:"jonas",email:"mark@example.com",salary:"71000",date:"2017-08-27"},{firstName:"Bruce",lastName:"Wayne",email:"bruce@example.com",salary:"194000",date:"2016-07-11"}],b=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.handleAddClick,a=e.handleLogout;return l.a.createElement("header",null,l.a.createElement("h1",null,"Employees Data"),l.a.createElement("div",{className:"main-btns"},l.a.createElement("button",{onClick:t},"Add Employee"),l.a.createElement("button",{onClick:a,className:"logout-btn accent-button"},"Logout")))}}]),t}(n.Component),C=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){for(var e=this.props,t=e.employeesData,a=e.handleEditClick,n=e.handleDelete,i=0;i<t.length;i++)t[i].id=i+1;var r=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:null});return l.a.createElement("div",{className:"contain-table"},l.a.createElement("table",{className:"striped-table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"No."),l.a.createElement("th",null,"First Name"),l.a.createElement("th",null,"Last Name"),l.a.createElement("th",null,"Email"),l.a.createElement("th",null,"Salary"),l.a.createElement("th",null,"Date"),l.a.createElement("th",{colSpan:2,className:"text-center"},"Actions"))),l.a.createElement("tbody",null,t.length>0?t.map((function(e,t){return l.a.createElement("tr",{key:e.id},l.a.createElement("td",null,t+1),l.a.createElement("td",null,e.firstName),l.a.createElement("td",null,e.lastName),l.a.createElement("td",null,e.email),l.a.createElement("td",null,r.format(e.salary)),l.a.createElement("td",null,e.date," "),l.a.createElement("td",{className:"text-right"},l.a.createElement("button",{onClick:function(){return a(e.id)},className:"button muted-button"},"Edit")),l.a.createElement("td",{className:"text-left"},l.a.createElement("button",{onClick:function(){return n(e.id)},className:"button muted-button"},"Delete")))})):l.a.createElement("tr",null,l.a.createElement("td",{colSpan:7},"No Employees")))))}}]),t}(n.Component),g=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={firstName:null,lastName:null,email:null,salary:null,date:null},a.handleInputChange=a.handleInputChange.bind(Object(u.a)(a)),a.handleAdd=a.handleAdd.bind(Object(u.a)(a)),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"handleInputChange",value:function(e,t){this.setState(Object(h.a)({},e,t.target.value))}},{key:"handleAdd",value:function(){var e=this.state,t=e.firstName,a=e.lastName,n=e.email,l=e.salary,i=e.date,r=this.props,c=r.employeesData,o=r.onAddSuccess;if(null===t)return f.a.fire({position:"center",type:"error",title:"All fields are required !",showConfirmButton:!0});if(null===a)return f.a.fire({position:"center",type:"error",title:"All fields are required !",showConfirmButton:!0});if(null===n)return f.a.fire({position:"center",type:"error",title:"All fields are required !",showConfirmButton:!0});if(null===l)return f.a.fire({position:"center",type:"error",title:"All fields are required !",showConfirmButton:!0});if(null===i)return f.a.fire({position:"center",type:"error",title:"All fields are required !",showConfirmButton:!0});var s={id:c.length+1,firstName:t,lastName:a,email:n,salary:l,date:i};c.push(s),o(c),f.a.fire({position:"center",type:"success",title:"New employee added",showConfirmButton:!1,timer:1500})}},{key:"render",value:function(){var e=this,t=this.props.handleAddCancel;return l.a.createElement("div",{className:"container"},l.a.createElement("form",null,l.a.createElement("h1",null,"Add Employee"),l.a.createElement("label",{htmlFor:"fName"},"First Name"),l.a.createElement("input",{type:"text",id:"firstName",onChange:function(t){return e.handleInputChange("firstName",t)}}),l.a.createElement("label",{htmlFor:"lName"},"Last Name"),l.a.createElement("input",{type:"text",id:"lastName",onChange:function(t){return e.handleInputChange("lastName",t)}}),l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement("input",{type:"email",id:"email",onChange:function(t){return e.handleInputChange("email",t)}}),l.a.createElement("label",{htmlFor:"salary"},"Salary ($)"),l.a.createElement("input",{type:"number",id:"salary",onChange:function(t){return e.handleInputChange("salary",t)}}),l.a.createElement("label",{htmlFor:"date"},"Date"),l.a.createElement("input",{type:"date",id:"date",onChange:function(t){return e.handleInputChange("date",t)}}),l.a.createElement("div",{className:"main-btns"},l.a.createElement("input",{type:"button",onClick:this.handleAdd,value:"Add"}),l.a.createElement("input",{type:"button",onClick:t,value:"Cancel",className:"accent-button cancel"}))))}}]),t}(n.Component),N=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={id:e.selectedEmployee.id,firstName:e.selectedEmployee.firstName,lastName:e.selectedEmployee.lastName,email:e.selectedEmployee.email,salary:e.selectedEmployee.salary,date:e.selectedEmployee.date},a.handleInputChange=a.handleInputChange.bind(Object(u.a)(a)),a.handleUpdate=a.handleUpdate.bind(Object(u.a)(a)),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"handleInputChange",value:function(e,t){this.setState(Object(h.a)({},e,t.target.value))}},{key:"handleUpdate",value:function(){var e=this.state,t=e.id,a=e.firstName,n=e.lastName,l=e.email,i=e.salary,r=e.date,c=this.props.onUpdateSuccess;return""===a||""===n||""===l||-1!==l.indexOf(" ")||""===i||""===r?f.a.fire({position:"center",type:"error",title:"All fields are required !",showConfirmButton:!0}):void c(t,{id:t,firstName:a,lastName:n,email:l,salary:i,date:r})}},{key:"render",value:function(){var e=this,t=this.state,a=t.firstName,n=t.lastName,i=t.email,r=t.salary,c=t.date,o=this.props.handleEditCancel;return l.a.createElement("div",{className:"container"},l.a.createElement("form",null,l.a.createElement("h1",null,"Edit Employee Data"),l.a.createElement("label",{htmlFor:"fName"},"First Name"),l.a.createElement("input",{type:"text",id:"firstName",defaultValue:a,onChange:function(t){return e.handleInputChange("firstName",t)}}),l.a.createElement("label",{htmlFor:"lName"},"Last Name"),l.a.createElement("input",{type:"text",id:"lastName",defaultValue:n,onChange:function(t){return e.handleInputChange("lastName",t)}}),l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement("input",{type:"email",id:"email",defaultValue:i,onChange:function(t){return e.handleInputChange("email",t)}}),l.a.createElement("label",{htmlFor:"salary"},"Salary ($)"),l.a.createElement("input",{type:"number",id:"salary",defaultValue:r,onChange:function(t){return e.handleInputChange("salary",t)}}),l.a.createElement("label",{htmlFor:"date"},"Date"),l.a.createElement("input",{type:"date",id:"date",defaultValue:c,onChange:function(t){return e.handleInputChange("date",t)}}),l.a.createElement("div",{className:"main-btns"},l.a.createElement("input",{type:"button",onClick:this.handleUpdate,value:"Update"}),l.a.createElement("input",{type:"button",onClick:o,value:"Cancel",className:"accent-button cancel"}))))}}]),t}(n.Component),v=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={employeesData:y,addClicked:!1,editeClicked:!1,selectedEmployee:null},a.handleAddClick=a.handleAddClick.bind(Object(u.a)(a)),a.handleEditClick=a.handleEditClick.bind(Object(u.a)(a)),a.handleAddCancel=a.handleAddCancel.bind(Object(u.a)(a)),a.handleEditCancel=a.handleEditCancel.bind(Object(u.a)(a)),a.onAddSuccess=a.onAddSuccess.bind(Object(u.a)(a)),a.onUpdateSuccess=a.onUpdateSuccess.bind(Object(u.a)(a)),a.handleDelete=a.handleDelete.bind(Object(u.a)(a)),a.handleLogout=a.handleLogout.bind(Object(u.a)(a)),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"handleAddClick",value:function(){this.setState({addClicked:!0})}},{key:"handleEditClick",value:function(e){var t=this.state.employeesData.filter((function(t){return t.id===e}))[0];this.setState({editeClicked:!0,selectedEmployee:t})}},{key:"handleAddCancel",value:function(){this.setState({addClicked:!1})}},{key:"handleEditCancel",value:function(){this.setState({editeClicked:!1})}},{key:"onAddSuccess",value:function(e){this.setState({employeesData:e,addClicked:!1})}},{key:"onUpdateSuccess",value:function(e,t){var a=this.state.employeesData;a.map((function(n,l){return e===n.id?a.splice(l,1,t):f.a.fire({type:"error",title:"Oops...",text:"Something went wrong!"}),!1})),this.setState({employeesData:a,editeClicked:!1}),f.a.fire({position:"center",type:"success",title:"".concat(t.firstName," ").concat(t.lastName," data updated."),showConfirmButton:!1,timer:1500})}},{key:"handleDelete",value:function(e){var t=this,a=this.state.employeesData;f.a.fire({title:"Are you sure?",text:"You won't be able to revert this!",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(n){if(n.value){var l=a.filter((function(t){return t.id===e}))[0];f.a.fire({position:"center",type:"success",title:"Deleted!",text:"".concat(l.firstName," ").concat(l.lastName," has been deleted."),showConfirmButton:!1,timer:1500});var i=a.filter((function(t){return t.id!==e}));t.setState({employeesData:i})}}))}},{key:"handleLogout",value:function(){var e=this;f.a.fire({title:"Are you sure?",type:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, log me out!",cancelButtonText:"No, keep me in"}).then((function(t){t.value&&f.a.fire({timer:1500,onBeforeOpen:function(){f.a.showLoading()},onClose:function(){e.props.onLogoutSuccess()}})}))}},{key:"render",value:function(){var e=this.state,t=e.employeesData,a=e.addClicked,n=e.editeClicked,i=e.selectedEmployee;return l.a.createElement("div",{className:"container"},!a&&!n&&l.a.createElement(b,{handleAddClick:this.handleAddClick,handleLogout:this.handleLogout}),!a&&!n&&l.a.createElement(C,{employeesData:t,handleEditClick:this.handleEditClick,handleDelete:this.handleDelete}),a&&l.a.createElement(g,{employeesData:t,onAddSuccess:this.onAddSuccess,handleAddCancel:this.handleAddCancel}),n&&l.a.createElement(N,{selectedEmployee:i,onUpdateSuccess:this.onUpdateSuccess,handleEditCancel:this.handleEditCancel}))}}]),t}(n.Component),k=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={isLoggedIn:!1},a.onLoginSuccess=a.onLoginSuccess.bind(Object(u.a)(a)),a.onLogoutSuccess=a.onLogoutSuccess.bind(Object(u.a)(a)),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"onLoginSuccess",value:function(){this.setState({isLoggedIn:!0})}},{key:"onLogoutSuccess",value:function(){this.setState({isLoggedIn:!1})}},{key:"render",value:function(){var e=this.state.isLoggedIn;return l.a.createElement("div",null,!e&&l.a.createElement(E,{onLoginSuccess:this.onLoginSuccess}),e&&l.a.createElement(v,{onLogoutSuccess:this.onLogoutSuccess}))}}]),t}(n.Component);r.a.render(l.a.createElement(k,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.3e5ad937.chunk.js.map