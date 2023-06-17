<template>
  <div class="container mx-auto p-4">
    <header class="flex justify-between items-center mb-4">
      <h1 class="text-2xl font-bold">Корзина</h1>
      <a href="/" class="flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
        <svg class="h-6 w-6 mr-2 fill-current" viewBox="0 0 24 24">
          <path d="M21 5H7.16l2.92-2.92A.996.996 0 1 0 8.29.71L2.71 6.29A.996.996 0 0 0 2 7v13c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-.55-.45-1-1-1zm-9 14H4v-2h8v2zm6 0h-4v-2h4v2zM4 10V8h14v2H4zm0 4v-2h14v2H4zm6 3H4v-2h6v2zm6 0h-4v-2h4v2z"></path>
        </svg>
        Вернуться в каталог
      </a>
    </header>
    <div v-if="cartItems.length === 0" class="text-center text-gray-600">
      Корзина пуста
    </div>
    <div v-else>
      <table class="table-auto w-full">
        <thead>
          <tr>
            <th class="px-4 py-2">Название</th>
            <th class="px-4 py-2">Количество</th>
            <th class="px-4 py-2">Цена</th>
            <th class="px-4 py-2">Сумма</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in cartItems" :key="index">
            <td class="border px-4 py-2">{{ item.title }}</td>
            <td class="border px-4 py-2">{{ item.quantity }}</td>
            <td class="border px-4 py-2">{{ item.price }}</td>
            <td class="border px-4 py-2">{{ item.quantity * item.price }}</td>
          </tr>
        </tbody>
      </table>
      <div class="mt-4 text-right">
        Общая сумма: {{ cartTotal }}
      </div>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded" @click="checkout">
        Оформить заказ
      </button>
    </div>

    <!-- Модальное окно -->
    <checkout-modal :show-modal="showModal" @order-finished="finishOrder"></checkout-modal>
  </div>
</template>

<script>
import CheckoutModal from './CheckoutModal.vue';

export default {
  components: {
    CheckoutModal,
  },
  data() {
    return {
      cartItems: [],
      showModal: false,
    };
  },
  computed: {
    cartTotal() {
      return this.cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
    },
  },
  methods: {
    checkout() {
      this.showModal = true;
    },
    finishOrder(orderData) {
      console.log(orderData);
      this.cartItems = [];
      localStorage.removeItem('cartItems');
      this.showModal = false;
    },
  },
  mounted() {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      this.cartItems = JSON.parse(storedCartItems);
    } else {
      this.cartItems = [];
    }
  },
};
</script>

<style>

</style>
