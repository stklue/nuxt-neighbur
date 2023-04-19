<script setup lang="ts">
import { reactive, ref } from "@vue/reactivity";

const promocode = reactive({ val: 0, discount: 0 });
const promoCodeMessage = ref("");


</script>

<template>
  <div id="summary" class="lg:w-1/3 p-10 border border-gray-300 bg-gray-200">
    <h1 class="font-bold text-2xl border-b pb-8">Order Summary</h1>
    <div class="flex justify-between mt-10 mb-5 lg:space-x-4">
      <span class="font-semibold text-sm uppercase">Subtotal</span>
      <span class="font-semibold text-sm">
        <slot name="subtotal" />
      </span>
    </div>
    <div>
      <label class="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
      <select class="block p-2 text-gray-600 w-full text-sm">
        <option>Standard shipping - R100.00</option>
      </select>
    </div>
    <div class="flex flex-col py-10">
      <label for="promo" class="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
      <input type="text" id="promo" placeholder="Enter your code" class="p-2 text-sm w-full" />

      <button class="bg-red-500 hover:bg-red-600 px-5 py-2 my-5 text-sm text-white uppercase">
        Apply
      </button>


    </div>

    <div class="border-t">
      <div class="flex font-semibold justify-between py-6 text-sm uppercase">
        <span>Total cost</span>
        <span>
          <slot name="total" />
        </span>
      </div>
      <NuxtLink to="/">
        <button
          class="rounded-lg bg-black font-semibold hover:bg-white hover:text-black border hover:border-black py-3 text-sm text-white uppercase w-full">
          Checkout
        </button>
      </NuxtLink>
    </div>
  </div>
</template>
