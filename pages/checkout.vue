<script setup lang="ts">
import { useCart } from "~~/stores/cart";
definePageMeta({
  middleware: "auth",
  layout: "index",
});
const { getTotal } = useCart();

const showredirect = ref(false);
const pay = () => {
  showredirect.value = true;
  setInterval(() => {
    navigateTo("/");
  }, 2000);
};
</script>

<template>
  <div class="flex justify-center items-center min-h-screen pt-20">
    <div class="flex flex-col justify-center items-center space-x-5 md:w-full">
      <div
        class="bg-gray-100 space-y-3 p-4 flex flex-col w-full md:w-1/3 h-full font-semibold justify-between py-6 text-sm uppercase"
      >
        <p v-if="showredirect" class="w-full p-6 bg-green-500 text-white">
          Payment made successfully.
        </p>
        <span>Total cost</span>
        <span> R{{ getTotal() }} </span>
        <button
          @click="pay"
          class="w-full px-6 py-2 my-2 text-white bg-[#06113C] hover:bg-gray-900"
        >
          Pay Now
        </button>
        <p v-if="showredirect">You will be redirected shortly.</p>
      </div>
    </div>
  </div>
</template>
