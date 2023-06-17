import Vue from 'vue'
import ProductList from './components/ProductList.vue';

Vue.config.productionTip = false

new Vue({
  render: h => h(ProductList),
}).$mount('#app')