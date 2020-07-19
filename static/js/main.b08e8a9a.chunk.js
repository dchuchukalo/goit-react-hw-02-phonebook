(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{11:function(e,t,n){e.exports={formTitle:"Filter_formTitle__NJCRd",formInput:"Filter_formInput__3490Q"}},12:function(e,t,n){e.exports={title:"App_title__2bAAf"}},17:function(e,t,n){e.exports=n(27)},2:function(e,t,n){e.exports={form:"ContactForm_form__1Tm8M",formTitle:"ContactForm_formTitle__3xK_H",formInput:"ContactForm_formInput__1SfDj",addToContact:"ContactForm_addToContact__155q1"}},26:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(1),c=n.n(o),l=n(16),i=n(15),m=n(5),s=n(6),u=n(8),f=n(7),d=n(3),p=n(2),b=n.n(p),h=function(e){Object(u.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.handleChange=function(t){var n=t.currentTarget,a=n.name,r=n.value;"number"===a?e.setState(Object(d.a)({},a,r.replace(/[^\d-]/g,""))):e.setState(Object(d.a)({},a,r))},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state),e.reset()},e.reset=function(){e.setState({name:"",number:""})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return r.a.createElement("form",{className:b.a.form,onSubmit:this.handleSubmit},r.a.createElement("label",{className:b.a.formTitle},"Name",r.a.createElement("input",{className:b.a.formInput,type:"text",name:"name",value:t,onChange:this.handleChange,id:this.nameInputId})),r.a.createElement("label",{className:b.a.formTitle},"Number",r.a.createElement("input",{className:b.a.formInput,type:"tel",name:"number",value:n,onChange:this.handleChange,id:this.numberInputId})),r.a.createElement("button",{className:b.a.addToContact,type:"submit"},"Add contact"))}}]),n}(a.Component),C=n(9),_=n.n(C),E=function(e){var t=e.contacts,n=e.deleteContact;return t.map((function(e){var t=e.id,a=e.name,o=e.number;return r.a.createElement("li",{className:_.a.item,key:t},r.a.createElement("span",{className:_.a.info},a,": ",o),r.a.createElement("button",{className:_.a.delete,onClick:function(){n(t)},type:"button"},"Delete"))}))},v=function(e){var t=e.contacts,n=e.deleteContact;return r.a.createElement("ul",null,r.a.createElement(E,{contacts:t,deleteContact:n}))},g=n(11),y=n.n(g),N=function(e){var t=e.value,n=e.onChange;return r.a.createElement("label",{className:y.a.formTitle},"Find contacts by name",r.a.createElement("input",{className:y.a.formInput,type:"text",value:t,onChange:n}))},S=n(31),T=n(10),j=n(12),w=n.n(j),I=(n(22),function(e){Object(u.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.notify=function(e){return T.c.warn(e)},e.deleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e.formSubmitHandler=function(t){var n=Object(i.a)({id:Object(S.a)()},t);e.findAlreadyInContacts(n)},e.findAlreadyInContacts=function(t){var n=t.name.toLowerCase();""!==n?e.state.contacts.find((function(e){return e.name.toLowerCase()===n}))?e.notify("".concat(t.name," is already in contacts.")):e.setState((function(e){return{contacts:[t].concat(Object(l.a)(e.contacts))}})):e.notify("Please enter name and number")},e.changeFilter=function(t){e.setState({filter:t.currentTarget.value})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state,t=e.contacts,n=e.filter,a=n.toLowerCase(),o=t.filter((function(e){return e.name.toLowerCase().includes(a)}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:w.a.title},"Phonebook"),r.a.createElement(h,{onSubmit:this.formSubmitHandler}),r.a.createElement("h2",{className:w.a.title},"Contacts"),t.length>1&&r.a.createElement(N,{value:n,onChange:this.changeFilter}),t.length>0?r.a.createElement(v,{contacts:o,deleteContact:this.deleteContact}):r.a.createElement("p",null,"The contact list is empty. Please add a new contact."),r.a.createElement(T.a,{position:"top-center",autoClose:3e3,newestOnTop:!0,limit:3,transition:T.b}))}}]),n}(a.Component));n(25),n(26);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root"))},9:function(e,t,n){e.exports={item:"ElementContactList_item__qUwz3",info:"ElementContactList_info__2W9_V",delete:"ElementContactList_delete__2sEbk"}}},[[17,1,2]]]);
//# sourceMappingURL=main.b08e8a9a.chunk.js.map