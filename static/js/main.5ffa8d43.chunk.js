(this.webpackJsonptodo_list=this.webpackJsonptodo_list||[]).push([[0],{14:function(e,t,n){e.exports=n(27)},19:function(e,t,n){},20:function(e,t,n){e.exports=n.p+"static/media/logo.25bf045c.svg"},21:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var o,a=n(0),r=n.n(a),c=n(6),l=n.n(c),i=(n(19),n(20),n(21),n(3)),s=n(12),u=n(2),d=Object(u.b)(null,(function(e){return{addTodo:function(t){var n;return e((n={},Object(i.a)(n,"task",t),Object(i.a)(n,"done",!1),{type:"addTodo",payload:n}))}}}))((function(e){var t=Object(a.useState)(""),n=Object(s.a)(t,2),o=n[0],c=n[1];return r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.addTodo(o),c("")}},r.a.createElement("div",{className:"row form-group"},r.a.createElement("div",{className:"col-8"},r.a.createElement("input",{type:"text",className:"form-control",value:o,onChange:function(e){return c(e.target.value)}})),r.a.createElement("div",{className:"col-4"},r.a.createElement("button",{className:"btn btn-primary color-white",type:"submit"},"Add Todo"))))})),m=function(e){var t=e.done?"bg-success":"bg-danger";return r.a.createElement("div",{className:"".concat(t," todo-item rounded color-white"),onClick:e.onClick},e.task)},b=function(e){var t=e.todos,n=e.onClickTodo;return r.a.createElement("div",{className:"todo-list"},t.map((function(e,t){return r.a.createElement(m,Object.assign({},e,{onClick:function(){return n(t)},key:t}))})))},f=Object(u.b)((function(e){var t=e.todos,n=e.visibilityFilter;return{todos:"all"===n?t:t.filter((function(e){return"completed"===n?e.done:!e.done}))}}),(function(e){return{onClickTodo:function(t){return e(function(e){return{type:"toggleTodo",payload:e}}(t))}}}))(b),p=n(5),v=n(13);function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(n,!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y=Object(p.b)((o={},Object(i.a)(o,"todos",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"addTodo"===t.type?[].concat(Object(v.a)(e),[t.payload]):"toggleTodo"===t.type?e.map((function(e,n){return n===t.payload?O({},e,Object(i.a)({},"done",!e.done)):e})):e})),Object(i.a)(o,"visibilityFilter",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all",t=arguments.length>1?arguments[1]:void 0;return"visibilityFilterChange"===t.type?t.payload:e})),o)),g=Object(p.c)(y,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),j=function(e){return console.log(e.onClick),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-4"},r.a.createElement("button",{className:"btn btn-primary btn-block",onClick:function(){return e.onClick("all")}},"ALL TASKS")),r.a.createElement("div",{className:"col-4"},r.a.createElement("button",{className:" btn btn-success btn-block",onClick:function(){return e.onClick("completed")}},"COMPLETED")),r.a.createElement("div",{className:"col-4"},r.a.createElement("button",{className:" btn btn-danger btn-block",onClick:function(){return e.onClick("incomplete")}},"INCOMPLETE")))},k=Object(u.b)(null,(function(e){return{onClick:function(t){return e({type:"visibilityFilterChange",payload:t})}}}))(j);var w=function(){return r.a.createElement(u.a,{store:g},r.a.createElement("div",{className:"container mt-5"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-8 offset-2"},r.a.createElement(d,null),r.a.createElement(f,null),r.a.createElement(k,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[14,1,2]]]);
//# sourceMappingURL=main.5ffa8d43.chunk.js.map