<template>
  <div v-if="showModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div class="bg-white p-8 rounded-lg">
      <h2 class="text-2xl font-bold mb-4">Оформление заказа</h2>
      <form @submit.prevent="finishOrder">
        <div class="mb-4">
          <label for="customerName" class="block font-bold">Имя покупателя:</label>
          <input type="text" id="customerName" v-model="customerName" class="border rounded px-2 py-1 w-full">
        </div>
        <div class="mb-4">
          <label for="customerAddress" class="block font-bold">Адрес:</label>
          <input type="text" id="customerAddress" v-model="customerAddress" class="border rounded px-2 py-1 w-full">
        </div>
        <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Завершить</button>
        <p v-if="showErrorMessage" class="text-red-500 mt-2">Пожалуйста, заполните все поля</p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: ['showModal'],
  data() {
    return {
      showErrorMessage: false,
      customerName: '',
      customerAddress: '',
    };
  },
  methods: {
    finishOrder() {
      if (this.customerName.trim() === '' || this.customerAddress.trim() === '') {
        this.showErrorMessage = true;
      } else {
        this.$emit('order-finished', {
          name: this.customerName,
          address: this.customerAddress
        });
        this.showErrorMessage = false;
      }
    },
  },
};
</script>
