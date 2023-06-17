(function(){"use strict";var t={2002:function(t,e,s){var r=s(144),o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container mx-auto p-4"},[e("header",{staticClass:"flex justify-between items-center mb-4"},[e("h1",{staticClass:"text-2xl font-bold"},[t._v("Корзина")]),e("a",{staticClass:"flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer",attrs:{href:"./"}},[e("svg",{staticClass:"h-6 w-6 mr-2 fill-current",attrs:{viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M21 5H7.16l2.92-2.92A.996.996 0 1 0 8.29.71L2.71 6.29A.996.996 0 0 0 2 7v13c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-.55-.45-1-1-1zm-9 14H4v-2h8v2zm6 0h-4v-2h4v2zM4 10V8h14v2H4zm0 4v-2h14v2H4zm6 3H4v-2h6v2zm6 0h-4v-2h4v2z"}})]),t._v(" Вернуться в каталог ")])]),0===t.cartItems.length?e("div",{staticClass:"text-center text-gray-600"},[t._v(" Корзина пуста ")]):e("div",[e("table",{staticClass:"table-auto w-full"},[t._m(0),e("tbody",t._l(t.cartItems,(function(s,r){return e("tr",{key:r},[e("td",{staticClass:"border px-4 py-2"},[t._v(t._s(s.title))]),e("td",{staticClass:"border px-4 py-2"},[t._v(t._s(s.quantity))]),e("td",{staticClass:"border px-4 py-2"},[t._v(t._s(s.price))]),e("td",{staticClass:"border px-4 py-2"},[t._v(t._s(s.quantity*s.price))])])})),0)]),e("div",{staticClass:"mt-4 text-right"},[t._v(" Общая сумма: "+t._s(t.cartTotal)+" ")]),e("button",{staticClass:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded",on:{click:t.checkout}},[t._v(" Оформить заказ ")])]),e("checkout-modal",{attrs:{"show-modal":t.showModal},on:{"order-finished":t.finishOrder}})],1)},a=[function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("th",{staticClass:"px-4 py-2"},[t._v("Название")]),e("th",{staticClass:"px-4 py-2"},[t._v("Количество")]),e("th",{staticClass:"px-4 py-2"},[t._v("Цена")]),e("th",{staticClass:"px-4 py-2"},[t._v("Сумма")])])])}],n=function(){var t=this,e=t._self._c;return t.showModal?e("div",{staticClass:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"},[e("div",{staticClass:"bg-white p-8 rounded-lg"},[e("h2",{staticClass:"text-2xl font-bold mb-4"},[t._v("Оформление заказа")]),e("form",{on:{submit:function(e){return e.preventDefault(),t.finishOrder.apply(null,arguments)}}},[e("div",{staticClass:"mb-4"},[e("label",{staticClass:"block font-bold",attrs:{for:"customerName"}},[t._v("Имя покупателя:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.customerName,expression:"customerName"}],staticClass:"border rounded px-2 py-1 w-full",attrs:{type:"text",id:"customerName"},domProps:{value:t.customerName},on:{input:function(e){e.target.composing||(t.customerName=e.target.value)}}})]),e("div",{staticClass:"mb-4"},[e("label",{staticClass:"block font-bold",attrs:{for:"customerAddress"}},[t._v("Адрес:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.customerAddress,expression:"customerAddress"}],staticClass:"border rounded px-2 py-1 w-full",attrs:{type:"text",id:"customerAddress"},domProps:{value:t.customerAddress},on:{input:function(e){e.target.composing||(t.customerAddress=e.target.value)}}})]),e("button",{staticClass:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",attrs:{type:"submit"}},[t._v("Завершить")]),t.showErrorMessage?e("p",{staticClass:"text-red-500 mt-2"},[t._v("Пожалуйста, заполните все поля")]):t._e()])])]):t._e()},i=[],c={props:["showModal"],data(){return{showErrorMessage:!1,customerName:"",customerAddress:""}},methods:{finishOrder(){""===this.customerName.trim()||""===this.customerAddress.trim()?this.showErrorMessage=!0:(this.$emit("order-finished",{name:this.customerName,address:this.customerAddress}),this.showErrorMessage=!1)}}},l=c,u=s(1001),d=(0,u.Z)(l,n,i,!1,null,null,null),m=d.exports,p={components:{CheckoutModal:m},data(){return{cartItems:[],showModal:!1}},computed:{cartTotal(){return this.cartItems.reduce(((t,e)=>t+e.quantity*e.price),0)}},methods:{checkout(){this.showModal=!0},finishOrder(t){console.log(t),this.cartItems=[],localStorage.removeItem("cartItems"),this.showModal=!1}},mounted(){const t=localStorage.getItem("cartItems");this.cartItems=t?JSON.parse(t):[]}},h=p,v=(0,u.Z)(h,o,a,!1,null,null,null),f=v.exports;r.ZP.config.productionTip=!1,new r.ZP({render:t=>t(f)}).$mount("#app")}},e={};function s(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={exports:{}};return t[r].call(a.exports,a,a.exports,s),a.exports}s.m=t,function(){var t=[];s.O=function(e,r,o,a){if(!r){var n=1/0;for(u=0;u<t.length;u++){r=t[u][0],o=t[u][1],a=t[u][2];for(var i=!0,c=0;c<r.length;c++)(!1&a||n>=a)&&Object.keys(s.O).every((function(t){return s.O[t](r[c])}))?r.splice(c--,1):(i=!1,a<n&&(n=a));if(i){t.splice(u--,1);var l=o();void 0!==l&&(e=l)}}return e}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[r,o,a]}}(),function(){s.d=function(t,e){for(var r in e)s.o(e,r)&&!s.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.j=511}(),function(){var t={511:0};s.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,a,n=r[0],i=r[1],c=r[2],l=0;if(n.some((function(e){return 0!==t[e]}))){for(o in i)s.o(i,o)&&(s.m[o]=i[o]);if(c)var u=c(s)}for(e&&e(r);l<n.length;l++)a=n[l],s.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return s.O(u)},r=self["webpackChunkroute4me_app"]=self["webpackChunkroute4me_app"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=s.O(void 0,[998],(function(){return s(2002)}));r=s.O(r)})();
//# sourceMappingURL=cart.859b0eb2.js.map