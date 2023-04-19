<script setup lang="ts">
import { reactive, ref } from "@vue/reactivity";

const promocode = reactive({ val: 0, discount: 0 });
const promoCodeMessage = ref("");


</script>

<template>
  <div id="summary" class="lg:w-1/3 p-10 border border-gray-300 bg-gray-200">
    <h1 class="font-bold text-2xl border-b pb-8">Order Summary</h1>
    <div class="flex justify-between mt-10 mb-2 lg:space-x-4">
      <span class="font-semibold text-sm uppercase">Subtotal</span>
      <span class="font-semibold text-sm">
        <slot name="subtotal" />
      </span>
    </div>
  
    <div class="flex flex-col py-5">
      <label for="promo" class="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
      <input type="text" id="promo" placeholder="Enter your code" class="p-2 text-sm w-full" />

      <button class="bg-[#FF8C32] hover:bg-[#FF8C32] px-5 py-2 my-5 text-sm text-white uppercase">
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
          class="rounded-lg bg-[#06113C] font-semibold hover:bg-white hover:text-[#06113C] border hover:border-[#06113C] py-3 text-sm text-white uppercase w-full">
          Checkout
        </button>
      </NuxtLink>
    </div>
  </div>
</template>
