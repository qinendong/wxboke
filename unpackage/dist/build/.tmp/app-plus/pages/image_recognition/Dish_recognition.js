(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/image_recognition/Dish_recognition"],{1582:function(n,e,t){"use strict";var a=t("5096"),o=t.n(a);o.a},"3ce8":function(n,e,t){"use strict";var a=function(){var n=this,e=n.$createElement;n._self._c},o=[];t.d(e,"a",function(){return a}),t.d(e,"b",function(){return o})},5096:function(n,e,t){},"80a1":function(n,e,t){"use strict";t.r(e);var a=t("3ce8"),o=t("de02");for(var i in o)"default"!==i&&function(n){t.d(e,n,function(){return o[n]})}(i);t("1582");var c=t("2877"),r=Object(c["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=r.exports},be84:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=function(){return t.e("components/cpimg").then(t.bind(null,"2af5"))},o={data:function(){return{src:"",data:Array}},methods:{addPhoto:function(){var n=this;n.$refs.cpimg._changImg()},cpimgOk:function(e){var t=this,a=this;a.src=e,console.log(e," at pages\\image_recognition\\Dish_recognition.vue:39"),n.request({url:"https://www.qinendong.com/api/image_recognition/Dish_recognition",data:{id:e.replace("data:image/png;base64,","").replace("data:image/jpeg;base64,","")},method:"POST",header:{"Content-type":"application/x-www-form-urlencoded"},success:function(n){console.log(n.data.data," at pages\\image_recognition\\Dish_recognition.vue:50"),t.data=JSON.parse(n.data.data),console.log(t.data," at pages\\image_recognition\\Dish_recognition.vue:52")}})},cpimgErr:function(n){console.log(n," at pages\\image_recognition\\Dish_recognition.vue:58")}},components:{cpimg:a}};e.default=o}).call(this,t("6e42")["default"])},de02:function(n,e,t){"use strict";t.r(e);var a=t("be84"),o=t.n(a);for(var i in a)"default"!==i&&function(n){t.d(e,n,function(){return a[n]})}(i);e["default"]=o.a}},[["0fa1","common/runtime","common/vendor"]]]);