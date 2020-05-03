(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{223:function(t,e,n){"use strict";n.r(e);n(84),n(26);var l=n(82),r={data:function(){return{restaurant:{name:null,description:null,image:null,text:null,slug:null,address:null,city:null,category:null}}},watch:{slug:function(){this.restaurant.slug=this.slug}},computed:{slug:function(){return this.restaurant.name?this.restaurant.name.replace(/ /g,"-"):null}},methods:{onSubmitButton:function(){var t=this;l.a.collection("restaurants").add(this.restaurant).then((function(){t.$router.push("/admin")}))}}},o=n(10),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section"},[n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-6 is-offset-3"},[t._m(0),t._v(" "),n("div",{staticClass:"columns box"},[n("div",{staticClass:"column"},[n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[t._v("Name")]),t._v(" "),n("div",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.restaurant.name,expression:"restaurant.name"}],staticClass:"input",attrs:{type:"text",placeholder:"restaurant name"},domProps:{value:t.restaurant.name},on:{input:function(e){e.target.composing||t.$set(t.restaurant,"name",e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[t._v("Slug")]),t._v(" "),n("div",{staticClass:"control"},[n("input",{staticClass:"input",attrs:{type:"text",placeholder:t.slug,disabled:""}})])]),t._v(" "),n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[t._v("Image")]),t._v(" "),n("div",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.restaurant.image,expression:"restaurant.image"}],staticClass:"input",attrs:{type:"text",placeholder:"https://...."},domProps:{value:t.restaurant.image},on:{input:function(e){e.target.composing||t.$set(t.restaurant,"image",e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[t._v("Description")]),t._v(" "),n("div",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.restaurant.description,expression:"restaurant.description"}],staticClass:"input",attrs:{type:"text",placeholder:"description"},domProps:{value:t.restaurant.description},on:{input:function(e){e.target.composing||t.$set(t.restaurant,"description",e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[t._v("Address")]),t._v(" "),n("div",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.restaurant.address,expression:"restaurant.address"}],staticClass:"input",attrs:{type:"text",placeholder:"address"},domProps:{value:t.restaurant.address},on:{input:function(e){e.target.composing||t.$set(t.restaurant,"address",e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[t._v("Cities")]),t._v(" "),n("div",{staticClass:"control"},[n("div",{staticClass:"select"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.restaurant.city,expression:"restaurant.city"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.restaurant,"city",e.target.multiple?n:n[0])}}},[n("option",[t._v("Select dropdown")]),t._v(" "),n("option",{attrs:{value:"Madrid"}},[t._v("Madrid")]),t._v(" "),n("option",{attrs:{value:"Barcelona"}},[t._v("Barcelona")]),t._v(" "),n("option",{attrs:{value:"Valencia"}},[t._v("Valencia")])])])])]),t._v(" "),n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[t._v("Category")]),t._v(" "),n("div",{staticClass:"control"},[n("div",{staticClass:"select"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.restaurant.category,expression:"restaurant.category"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.restaurant,"category",e.target.multiple?n:n[0])}}},[n("option",[t._v("Select dropdown")]),t._v(" "),n("option",{attrs:{value:"brunch"}},[t._v("Brunch")]),t._v(" "),n("option",{attrs:{value:"burgers"}},[t._v("Burgers")]),t._v(" "),n("option",{attrs:{value:"mediterranean"}},[t._v("Mediterranean")]),t._v(" "),n("option",{attrs:{value:"italian"}},[t._v("Italian")])])])])]),t._v(" "),n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[t._v("Text")]),t._v(" "),n("div",{staticClass:"control"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.restaurant.text,expression:"restaurant.text"}],staticClass:"textarea",attrs:{type:"textarea",rows:"10",placeholder:"text"},domProps:{value:t.restaurant.text},on:{input:function(e){e.target.composing||t.$set(t.restaurant,"text",e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"field"},[n("div",{staticClass:"control has-text-centered"},[n("button",{staticClass:"button is-danger",attrs:{type:"button"},on:{click:function(e){return t.$router.back()}}},[t._v("\n                Cancel\n              ")]),t._v(" "),n("button",{staticClass:"button is-link",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.onSubmitButton(e)}}},[t._v("\n                Save\n              ")])])])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"columns"},[e("div",{staticClass:"column"},[e("h2",{staticClass:"title is-2"},[this._v("New Restaurant")])])])}],!1,null,null,null);e.default=component.exports}}]);