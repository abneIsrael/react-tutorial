(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),c=a.n(l),o=a(9),u=a(1),i=a(2),m=a(4),s=a(3),b=a(5),h=function(){return r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Job"),r.a.createElement("th",null,"Actions")))},E=function(e){var t=e.workersData.map(function(t,a){return r.a.createElement("tr",{key:a},r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.job),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return e.removerWorker(a)}},"Delete")))});return r.a.createElement("tbody",null,t)},d=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.workersData,a=e.removerWorker;return r.a.createElement("table",null,r.a.createElement(h,null),r.a.createElement(E,{workersData:t,removerWorker:a}))}}]),t}(n.Component),p=a(8),f=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(s.a)(t).call(this,e))).handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(p.a)({},n,r))},a.submitForm=function(){a.props.handleSubmit(a.state),a.setState(a.initialState)},a.initialState={name:"",job:""},a.state=a.initialState,a}return Object(b.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.job;return r.a.createElement("form",null,r.a.createElement("label",null,"Name"),r.a.createElement("input",{type:"text",name:"name",value:t,onChange:this.handleChange}),r.a.createElement("label",null,"Job"),r.a.createElement("input",{type:"text",name:"job",value:a,onChange:this.handleChange}),r.a.createElement("input",{type:"button",value:"Submit",onClick:this.submitForm}))}}]),t}(n.Component),k=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={workers:[]},a.removerWorker=function(e){var t=a.state.workers;a.setState({workers:t.filter(function(t,a){return a!==e})})},a.handleSubmit=function(e){a.setState({workers:[].concat(Object(o.a)(a.state.workers),[e])})},a}return Object(b.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.workers;return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"React Tutorial"),r.a.createElement("p",null,"Add a character with a name and a job to the table."),r.a.createElement(d,{workersData:e,removerWorker:this.removerWorker}),r.a.createElement("h3",null,"Add New"),r.a.createElement(f,{handleSubmit:this.handleSubmit}))}}]),t}(n.Component);a(16);c.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.94afd8e2.chunk.js.map