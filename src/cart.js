import Vue from 'vue'
import CartList from './components/CartList.vue';

Vue.config.productionTip = false

new Vue({
    render: h => h(CartList),
}).$mount('#app')