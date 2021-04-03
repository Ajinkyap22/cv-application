(this["webpackJsonpcv-application"]=this["webpackJsonpcv-application"]||[]).push([[0],{15:function(e,t,i){},17:function(e,t,i){},18:function(e,t,i){"use strict";i.r(t);var a=i(1),n=i.n(a),s=i(10),c=i.n(s),l=(i(15),i(7)),o=i(2),r=i(3),h=i(5),d=i(4),j=i(6),u=i(0),b=function(e){Object(h.a)(i,e);var t=Object(d.a)(i);function i(){return Object(o.a)(this,i),t.apply(this,arguments)}return Object(r.a)(i,[{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsxs)("li",{className:"data",children:["Name - ",this.props.name]}),Object(u.jsxs)("li",{className:"data",children:["Email - ",this.props.email]}),Object(u.jsxs)("li",{className:"data",children:["Phone - ",this.props.phone]}),Object(u.jsxs)("li",{className:"data",children:["Age - ",this.props.age]})]})}}]),i}(a.Component),p=(i(9),function(e){Object(h.a)(i,e);var t=Object(d.a)(i);function i(e){var a;return Object(o.a)(this,i),(a=t.call(this,e)).state={name:"",email:"",phone:"",age:"",isEditing:!0},a.handleChange=a.handleChange.bind(Object(j.a)(a)),a.submitForm=a.submitForm.bind(Object(j.a)(a)),a.toggleEditing=a.toggleEditing.bind(Object(j.a)(a)),a}return Object(r.a)(i,[{key:"handleChange",value:function(e){this.setState(Object(l.a)({},e.target.id,e.target.value))}},{key:"submitForm",value:function(e){e.preventDefault(),this.setState({isEditing:!1})}},{key:"toggleEditing",value:function(){this.setState({isEditing:!this.state.isEditing})}},{key:"render",value:function(){return this.state.isEditing?Object(u.jsxs)("form",{className:"info",onSubmit:this.submitForm,children:[Object(u.jsx)("label",{htmlFor:"name",children:"Name"}),Object(u.jsx)("input",{type:"text",id:"name",placeholder:"Enter your name",onChange:this.handleChange,value:this.state.name,required:!0}),Object(u.jsx)("label",{htmlFor:"email",children:"Email"}),Object(u.jsx)("input",{type:"email",id:"email",placeholder:"Enter your email",onChange:this.handleChange,value:this.state.email,required:!0}),Object(u.jsx)("label",{htmlFor:"phone",children:"Phone no."}),Object(u.jsx)("input",{type:"tel",id:"phone",placeholder:"Enter your phone number",onChange:this.handleChange,value:this.state.phone,min:"1",required:!0}),Object(u.jsx)("label",{htmlFor:"age",children:"Age"}),Object(u.jsx)("input",{type:"number",id:"age",placeholder:"Enter your age",onChange:this.handleChange,value:this.state.age,min:"1",required:!0}),Object(u.jsxs)("div",{className:"btns",children:[Object(u.jsx)("button",{type:"submit",className:"btn save",children:"Save"}),Object(u.jsx)("input",{type:"button",className:"btn cancel",value:"Cancel",onClick:this.props.toggle,formNoValidate:!0})]})]}):Object(u.jsxs)("div",{children:[Object(u.jsx)(b,{name:this.state.name,email:this.state.email,phone:this.state.phone,age:this.state.age,isEditing:this.state.isEditing}),Object(u.jsxs)("button",{className:"btn",onClick:this.toggleEditing,children:["Edit \xa0"," ",Object(u.jsx)("i",{className:"fa fa-pencil-square-o","aria-hidden":"true"})]})]})}}]),i}(a.Component)),m=function(e){Object(h.a)(i,e);var t=Object(d.a)(i);function i(){return Object(o.a)(this,i),t.apply(this,arguments)}return Object(r.a)(i,[{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsxs)("li",{className:"data",children:["Qualification - ",this.props.qual]}),Object(u.jsxs)("li",{className:"data",children:["Institute - ",this.props.institute]}),Object(u.jsxs)("li",{className:"data",children:["Location - ",this.props.location]})]})}}]),i}(a.Component),g=function(e){Object(h.a)(i,e);var t=Object(d.a)(i);function i(e){var a;return Object(o.a)(this,i),(a=t.call(this,e)).state={qual:"",institute:"",location:"",isEditing:!0},a.submitForm=a.submitForm.bind(Object(j.a)(a)),a.handleChange=a.handleChange.bind(Object(j.a)(a)),a.toggleEditing=a.toggleEditing.bind(Object(j.a)(a)),a}return Object(r.a)(i,[{key:"handleChange",value:function(e){this.setState(Object(l.a)({},e.target.id,e.target.value))}},{key:"toggleEditing",value:function(){this.setState({isEditing:!this.state.isEditing})}},{key:"submitForm",value:function(e){e.preventDefault(),this.setState({isEditing:!1})}},{key:"render",value:function(){return this.state.isEditing?Object(u.jsxs)("form",{onSubmit:this.submitForm,className:"info",children:[Object(u.jsx)("label",{htmlFor:"qual",children:"Qualification"}),Object(u.jsx)("input",{type:"text",id:"qual",placeholder:"Enter your qualification",onChange:this.handleChange,value:this.state.qual,required:!0}),Object(u.jsx)("label",{htmlFor:"institute",children:"Institution"}),Object(u.jsx)("input",{type:"text",id:"institute",placeholder:"Name of your Institution",onChange:this.handleChange,value:this.state.institute,required:!0}),Object(u.jsx)("label",{htmlFor:"location",children:"Location"}),Object(u.jsx)("input",{type:"text",id:"location",placeholder:"Where did you get your education",onChange:this.handleChange,value:this.state.location,required:!0}),Object(u.jsxs)("div",{className:"btns",children:[Object(u.jsx)("button",{type:"submit",className:"btn save",children:"Save"}),Object(u.jsx)("input",{type:"button",className:"btn cancel",value:"Cancel",onClick:this.props.toggle,formNoValidate:!0})]})]}):Object(u.jsxs)("div",{children:[Object(u.jsx)(m,{qual:this.state.qual,institute:this.state.institute,location:this.state.location}),Object(u.jsxs)("button",{className:"btn",onClick:this.toggleEditing,children:["Edit \xa0"," ",Object(u.jsx)("i",{className:"fa fa-pencil-square-o","aria-hidden":"true"})]})]})}}]),i}(a.Component),O=function(e){Object(h.a)(i,e);var t=Object(d.a)(i);function i(){return Object(o.a)(this,i),t.apply(this,arguments)}return Object(r.a)(i,[{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsxs)("li",{className:"data",children:["Company - ",this.props.company]}),Object(u.jsxs)("li",{className:"data",children:["Position - ",this.props.position]}),Object(u.jsxs)("li",{className:"data",children:["Years - ",this.props.years]})]})}}]),i}(a.Component),x=function(e){Object(h.a)(i,e);var t=Object(d.a)(i);function i(e){var a;return Object(o.a)(this,i),(a=t.call(this,e)).state={company:"",position:"",years:"",isEditing:!0},a.submitForm=a.submitForm.bind(Object(j.a)(a)),a.handleChange=a.handleChange.bind(Object(j.a)(a)),a.toggleEditing=a.toggleEditing.bind(Object(j.a)(a)),a}return Object(r.a)(i,[{key:"handleChange",value:function(e){this.setState(Object(l.a)({},e.target.id,e.target.value))}},{key:"submitForm",value:function(e){e.preventDefault(),this.setState({isEditing:!1})}},{key:"toggleEditing",value:function(){this.setState({isEditing:!this.state.isEditing})}},{key:"render",value:function(){return this.state.isEditing?Object(u.jsxs)("form",{onSubmit:this.submitForm,className:"info",children:[Object(u.jsx)("label",{htmlFor:"company",children:"Company"}),Object(u.jsx)("input",{type:"text",id:"company",placeholder:"Name of the company",onChange:this.handleChange,value:this.state.company,required:!0}),Object(u.jsx)("label",{htmlFor:"position",children:"Position"}),Object(u.jsx)("input",{type:"text",id:"position",placeholder:"Enter your job title",onChange:this.handleChange,value:this.state.position,required:!0}),Object(u.jsx)("label",{htmlFor:"years",children:"Years"}),Object(u.jsx)("input",{type:"number",id:"years",placeholder:"How long did you work there?",onChange:this.handleChange,value:this.state.years,min:"0",required:!0}),Object(u.jsxs)("div",{className:"btns",children:[Object(u.jsx)("button",{type:"submit",className:"btn save",children:"Save"}),Object(u.jsx)("input",{type:"button",className:"btn cancel",value:"Cancel",onClick:this.props.toggle,formNoValidate:!0})]})]}):Object(u.jsxs)("div",{children:[Object(u.jsx)(O,{company:this.state.company,position:this.state.position,years:this.state.years}),Object(u.jsxs)("button",{className:"btn",onClick:this.toggleEditing,children:["Edit \xa0"," ",Object(u.jsx)("i",{className:"fa fa-pencil-square-o","aria-hidden":"true"})]})]})}}]),i}(a.Component),v=(i(17),function(e){Object(h.a)(i,e);var t=Object(d.a)(i);function i(e){var a;return Object(o.a)(this,i),(a=t.call(this,e)).state={general:!0,education:!1,experience:!1},a}return Object(r.a)(i,[{key:"displaySection",value:function(e){this.setState(Object(l.a)({},e,!this.state[e]))}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h1",{children:"CV Application"}),Object(u.jsxs)("div",{className:"sections",children:[Object(u.jsxs)("div",{className:"section General",id:"general",onClick:this.displaySection.bind(this,"general"),children:[Object(u.jsx)("label",{children:"General Info"}),Object(u.jsx)("i",{className:"fa fa-angle-down",id:this.state.general?"active":"","aria-hidden":"true"})]}),Object(u.jsx)("div",{id:this.state.general?"":"hidden",children:Object(u.jsx)(p,{toggle:this.displaySection.bind(this,"general")})}),Object(u.jsxs)("div",{className:"section Education",id:"education",onClick:this.displaySection.bind(this,"education"),children:[Object(u.jsx)("label",{children:"Education Info"}),Object(u.jsx)("i",{className:"fa fa-angle-down",id:this.state.education?"active":"","aria-hidden":"true"})]}),Object(u.jsx)("div",{id:this.state.education?"":"hidden",children:Object(u.jsx)(g,{toggle:this.displaySection.bind(this,"education")})}),Object(u.jsxs)("div",{className:"section Experience",id:"experience",onClick:this.displaySection.bind(this,"experience"),children:[Object(u.jsx)("label",{children:"Experience Info"}),Object(u.jsx)("i",{className:"fa fa-angle-down",id:this.state.experience?"active":"","aria-hidden":"true"})]}),Object(u.jsx)("div",{id:this.state.experience?"":"hidden",children:Object(u.jsx)(x,{toggle:this.displaySection.bind(this,"experience")})})]})]})}}]),i}(a.Component));c.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(v,{})}),document.getElementById("root"))},9:function(e,t,i){}},[[18,1,2]]]);
//# sourceMappingURL=main.83398315.chunk.js.map