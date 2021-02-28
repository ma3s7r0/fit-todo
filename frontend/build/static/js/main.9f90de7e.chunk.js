(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{58:function(e,t,c){},83:function(e,t,c){},87:function(e,t,c){"use strict";c.r(t);var n=c(0),o=c.n(n),a=c(17),i=c.n(a),r=(c(58),c(8)),s=c(12),d=(c(59),c(30)),l=c(48),j=c(29),h=c.n(j),u=function(){function e(t,c){Object(d.a)(this,e),this.baseURL=void 0,this.port=void 0,this.baseURL=t,this.port=c}return Object(l.a)(e,[{key:"getAllTodos",value:function(){return h.a.get("".concat(this.baseURL,":").concat(this.port,"/todos"))}},{key:"createTodo",value:function(e){return h.a.post("".concat(this.baseURL,":").concat(this.port,"/todos"),e)}},{key:"updateTodo",value:function(e){return h.a.put("".concat(this.baseURL,":").concat(this.port,"/todos/").concat(e.id),e)}},{key:"deleteTodo",value:function(e){return h.a.delete("".concat(this.baseURL,":").concat(this.port,"/todos/").concat(e))}}]),e}(),b=function e(){Object(d.a)(this,e),this.id=-1,this.title="",this.note="",this.duedate=""},O=c(50),x=c(92),p=c(93),f=c(31),m=c(49),T=c(16),v=c(52),g=c(2);var y=function(e){var t=Object(v.a)({mode:"onBlur",defaultValues:Object(m.a)({},e.payload)}),c=t.register,n=t.errors,o=t.handleSubmit;return Object(g.jsx)("div",{children:Object(g.jsxs)(T.a,{noValidate:!0,onSubmit:o((function(t){var c=new b;c.title=t.title,c.duedate=t.duedate,c.note=t.note,c.id=void 0!==e.payload?e.payload.id:-1,e.submitFunction(c),void 0!==e.closeModal&&e.closeModal()})),children:[Object(g.jsxs)(T.a.Group,{controlId:"formTitle",children:[Object(g.jsx)(T.a.Label,{children:"TODO"}),Object(g.jsx)(T.a.Control,{type:"text",placeholder:"Enter TODO-title",ref:c({required:!0,minLength:1}),name:"title"}),n.title&&Object(g.jsx)("p",{className:"fieldError",children:"Please proivde a title."})]}),Object(g.jsxs)(T.a.Group,{controlId:"formDueDate",children:[Object(g.jsx)(T.a.Label,{children:"Due Date"}),Object(g.jsx)(T.a.Control,{type:"text",placeholder:(new Date).toLocaleDateString(),ref:c({required:!0,minLength:8,maxLength:10}),name:"duedate"}),n.duedate&&Object(g.jsx)("p",{className:"fieldError",children:"Please proivde a Due Date with 6-8 characters."})]}),Object(g.jsxs)(T.a.Group,{controlId:"formNote",children:[Object(g.jsx)(T.a.Label,{children:"Note"}),Object(g.jsx)(T.a.Control,{as:"textarea",name:"note",ref:c(),rows:4})]}),Object(g.jsx)(f.a,{variant:"primary",type:"submit",children:e.actionType})]})})};var D=function(e){var t=Object(n.useState)(new b),c=Object(s.a)(t,2),o=c[0],a=c[1],i=Object(n.useState)(!1),r=Object(s.a)(i,2),d=r[0],l=r[1],j=function(){return l(!1)},h=Object(n.useState)(!1),u=Object(s.a)(h,2),m=u[0],T=u[1],v=function(){return T(!1)};return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)(O.a,{responsive:!0,hover:!0,size:"sm",children:[Object(g.jsx)("thead",{children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{children:Object(g.jsx)("input",{type:"checkbox"})}),Object(g.jsx)("th",{children:"ID"}),Object(g.jsx)("th",{children:"TODO"}),Object(g.jsx)("th",{children:"Due Date"}),Object(g.jsx)("th",{className:"text-right",children:"Action"})]})}),Object(g.jsx)("tbody",{children:e.data.map((function(t){return Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:Object(g.jsx)("input",{type:"checkbox"})}),Object(g.jsx)("td",{children:t.id}),Object(g.jsx)("td",{children:t.title}),Object(g.jsx)("td",{children:t.duedate}),Object(g.jsx)("td",{align:"right",children:Object(g.jsxs)(x.a,{children:[Object(g.jsx)(x.a.Toggle,{split:!1,variant:"none",className:"actionDropDownToggle",children:"..."}),Object(g.jsxs)(x.a.Menu,{children:[Object(g.jsx)(x.a.Item,{onClick:function(){return function(e){a(e),l(!0)}(t)},children:"View Note"}),Object(g.jsx)(x.a.Item,{onClick:function(){return function(e){a(e),T(!0)}(t)},children:"Edit"}),Object(g.jsx)(x.a.Item,{onClick:function(){return e.deleteTodo(t.id)},id:"DropDownDelete",children:"Delete"})]})]})})]},t.id)}))})]}),Object(g.jsxs)(p.a,{show:d,onHide:j,children:[Object(g.jsx)(p.a.Header,{closeButton:!0,children:Object(g.jsx)(p.a.Title,{children:o.title})}),Object(g.jsx)(p.a.Body,{children:o.note}),Object(g.jsx)(p.a.Footer,{children:Object(g.jsx)(f.a,{onClick:j,className:"modalCloseBtn",children:"Close"})})]}),Object(g.jsxs)(p.a,{show:m,onHide:v,children:[Object(g.jsx)(p.a.Header,{closeButton:!0,children:Object(g.jsx)(p.a.Title,{children:o.title})}),Object(g.jsx)(p.a.Body,{children:Object(g.jsx)(y,{submitFunction:e.updateTodo,actionType:"Update",payload:o,closeModal:v})})]})]})};c(83);var w=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),c=t[0],o=t[1],a=Object(n.useState)(!1),i=Object(s.a)(a,2),d=i[0],l=i[1],j=function(){return l(!1)},h=new u("http://".concat("localhost"),"2999");function b(){h.getAllTodos().then((function(e){e.data.sort((function(e,t){return e.id>t.id?1:-1})),o(Object(r.a)(e.data))})).catch((function(e){console.log(e)}))}return Object(n.useEffect)((function(){b()}),[]),Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)("header",{className:"App-header"}),Object(g.jsx)("h1",{children:"TODO List"}),Object(g.jsx)(f.a,{onClick:function(){return l(!0)},className:"createButton",variant:"success",children:"Create Todo"}),Object(g.jsx)(D,{data:c,updateTodo:function(e){h.updateTodo(e).then(b).catch((function(e){console.log(e)}))},deleteTodo:function(e){h.deleteTodo(e).then(b).catch((function(e){console.log(e)}))}}),Object(g.jsxs)(p.a,{show:d,onHide:j,children:[Object(g.jsx)(p.a.Header,{closeButton:!0,children:Object(g.jsx)(p.a.Title,{children:"Create TODO"})}),Object(g.jsx)(p.a.Body,{children:Object(g.jsx)(y,{actionType:"Create",submitFunction:function(e){h.createTodo(e).then(b).catch((function(e){console.log(e)}))},closeModal:j})})]})]})};c(84).config({path:"../../.env"}),i.a.render(Object(g.jsx)(o.a.StrictMode,{children:Object(g.jsx)(w,{})}),document.getElementById("root"))}},[[87,1,2]]]);
//# sourceMappingURL=main.9f90de7e.chunk.js.map