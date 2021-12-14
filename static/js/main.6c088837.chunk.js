(this["webpackJsonpgoit-react-hw-template"]=this["webpackJsonpgoit-react-hw-template"]||[]).push([[0],[,,function(t,e,n){t.exports={contactForm:"ContactForm_contactForm__2MAUO",inputLabel:"ContactForm_inputLabel__1yseA",formInput:"ContactForm_formInput__2Kf62",formButton:"ContactForm_formButton__Bq18-"}},function(t,e,n){t.exports={contactList:"ContactList_contactList__1dCzG",contactList__item:"ContactList_contactList__item__31HIv",contactList__text:"ContactList_contactList__text__3V64i",contactList__btn:"ContactList_contactList__btn__3IIc8"}},,,,,,function(t,e,n){t.exports={section:"Section_section__2Ke8Y",title:"Section_title__YITB-"}},function(t,e,n){t.exports={filterLabel:"ContactFilter_filterLabel__3Wd6O",filterInput:"ContactFilter_filterInput__2JGa6"}},,function(t,e,n){t.exports={container:"Container_container__K0Kqc"}},,function(t){t.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(11),s=n.n(r),i=(n(21),n(15)),o=n(4),l=n(5),u=n(7),m=n(6),b=n(16),d=(n(22),n(12)),h=n.n(d),p=n(0);var f=function(t){var e=t.children;return Object(p.jsx)("div",{className:h.a.container,children:e})},j=n(9),_=n.n(j);var C=function(t){var e=t.title,n=t.children;return Object(p.jsxs)("div",{className:_.a.section,children:[Object(p.jsx)("h2",{className:_.a.title,children:e}),n]})},O=n(13),x=n(2),v=n.n(x),L=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleNameChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(O.a)({},a,c))},t.onSubmit=function(e){e.preventDefault(),t.props.handleSubmit(t.state),t.resset()},t.resset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("form",{onSubmit:this.onSubmit,className:v.a.contactForm,children:[Object(p.jsxs)("label",{className:v.a.inputLabel,children:["Name",Object(p.jsx)("input",{className:v.a.formInput,type:"text",name:"name",value:this.state.name,onChange:this.handleNameChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),Object(p.jsxs)("label",{className:v.a.inputLabel,children:["Number",Object(p.jsx)("input",{className:v.a.formInput,type:"tel",name:"number",value:this.state.number,onChange:this.handleNameChange,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),Object(p.jsx)("button",{className:v.a.formButton,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),g=L,N=n(3),y=n.n(N),S=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(p.jsx)("ul",{className:y.a.contactList,children:e.map((function(t){return Object(p.jsxs)("li",{className:y.a.contactList__item,children:[Object(p.jsxs)("p",{className:y.a.contactList__text,children:[t.name,": ",t.number]}),Object(p.jsx)("button",{className:y.a.contactList__btn,type:"button",onClick:function(){return n(t.id)},children:"Delete"})]},t.id)}))})},I=n(14),A=n(10),w=n.n(A),F=function(t){var e=t.value,n=t.onChange;return Object(p.jsxs)("label",{className:w.a.filterLabel,children:["Find contacts by name:",Object(p.jsx)("input",{className:w.a.filterInput,type:"text",name:"filter",value:e,onChange:n})]})},k=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:I,filter:""},t.isInContacts=function(e){var n=e.name,a=e.number,c=n.toLowerCase().replace(/\s+/g,""),r=a.replace(/\D/g,"");return console.log(r),t.state.contacts.some((function(t){return t.name.toLowerCase().replace(/\s+/g,"")===c||t.number.replace(/\D/g,"")===r}))},t.addContact=function(e){var n=e.name,a=e.number;if(t.isInContacts(e))alert("".concat(n," is already in contacts"));else{var c={id:Object(b.a)(),name:n,number:a};t.setState((function(t){return{contacts:[c].concat(Object(i.a)(t.contacts))}}))}},t.delContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.filterChange=function(e){t.setState({filter:e.currentTarget.value})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter.toLowerCase(),a=e.filter((function(t){return t.name.toLowerCase().includes(n)}));return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("h1",{className:"AppHeader",children:"Phonebook"}),Object(p.jsxs)(f,{children:[Object(p.jsx)(C,{title:"Phonebook",children:Object(p.jsx)(g,{handleSubmit:this.addContact})}),Object(p.jsxs)(C,{title:"Contacts",children:[Object(p.jsx)(F,{value:this.state.filter,onChange:this.filterChange}),Object(p.jsx)(S,{contacts:a,onDeleteContact:this.delContact})]})]})]})}}]),n}(c.a.Component),B=k;s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(B,{})}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.6c088837.chunk.js.map