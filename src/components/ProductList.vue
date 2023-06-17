<template>
  <div class="container mx-auto p-4">
    <header class="flex justify-between items-center mb-4">
      <h1 class="text-2xl font-bold">InternetShop</h1>
      <a href="./cart" class="flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
        <svg class="h-6 w-6 mr-2 fill-current" viewBox="0 0 24 24">
          <path d="M21 5H7.16l2.92-2.92A.996.996 0 1 0 8.29.71L2.71 6.29A.996.996 0 0 0 2 7v13c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-.55-.45-1-1-1zm-9 14H4v-2h8v2zm6 0h-4v-2h4v2zM4 10V8h14v2H4zm0 4v-2h14v2H4zm6 3H4v-2h6v2zm6 0h-4v-2h4v2z"></path>
        </svg>
        Корзина ({{ totalCartItems }})
      </a>
    </header>
    <h2 class="text-2xl font-bold">Каталог товаров</h2>
    <div class="grid grid-cols-2 gap-4">
      <div v-for="product in products" :key="product.id" class="bg-white p-4 shadow-md">
        <h2 class="text-lg font-bold">{{ product.title }}</h2>
        <p class="text-gray-600">{{ product.price }}</p>
        <button @click="addToCart(product)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded">
          Добавить в корзину
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      products: [],
      cartItems: this.getStoredCartItems(),
    };
  },
  computed: {
    totalCartItems() {
      return this.cartItems.reduce((total, item) => total + item.quantity, 0);
    },
  },
  methods: {
    addToCart(product) {
      const existingItem = this.cartItems.find(item => item.id === product.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.cartItems.push({ ...product, quantity: 1 });
      }
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    },
    getStoredCartItems() {
      const storedCartItems = localStorage.getItem('cartItems');
      return storedCartItems ? JSON.parse(storedCartItems) : [];
    },
  },
  created() {
    axios.get('https://shaydurov.space/wp-json/custom-products/v1/products')
      .then(response => {
        this.products = response.data.map((product, index) => ({...product, id: index + 1}));
      })
      .catch(error => {
        console.error(error);
      });
  },
};
</script>

<style>
</style>
