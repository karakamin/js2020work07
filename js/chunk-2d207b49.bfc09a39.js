(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d207b49"],{a257:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("Sidebar"),e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("main",{staticClass:"col-md-12 ml-sm-auto px-4",attrs:{role:"main"}},[t.checkSuccess?e("router-view",{attrs:{token:t.token}}):t._e()],1)])])],1)},s=[],i=(e("ac1f"),e("5319"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[e("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("甜甜一點-後台管理系統")]),t._m(0),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[e("ul",{staticClass:"navbar-nav mr-auto"},[e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:{name:"產品頁面"}}},[t._v("產品列表")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:{name:"優惠券"}}},[t._v("優惠卷列表")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:{name:"訂單列表"}}},[t._v("訂單列表")])],1),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.signout(a)}}},[t._v("登出")])])])])])}),r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])}],o={name:"Sidebar",data:function(){return{}},methods:{signout:function(){this.$cookies.remove("token"),alert("登出成功"),this.$router.push("/login")}}},c=o,l=e("2877"),u=Object(l["a"])(c,i,r,!1,null,null,null),v=u.exports,h={name:"Dashboard",components:{Sidebar:v},data:function(){return{token:"",uuid:"fb885474-3b59-4203-aa95-b9bec4ed4e4c",checkSuccess:!1}},created:function(){var t=this;this.token=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");var a="".concat("https://course-ec-api.hexschool.io/api","/auth/check");this.$http.defaults.headers.common.Authorization="Bearer ".concat(this.token),this.$http.post(a,{api_token:this.token}).then((function(a){a.data.success||(t.$router.push({path:"login"}),alert("出現錯誤惹，請與管理人員確認!")),t.checkSuccess=!0}))}},d=h,p=Object(l["a"])(d,n,s,!1,null,null,null);a["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d207b49.bfc09a39.js.map