<script setup lang="ts">
import { reactive, ref } from "@vue/reactivity";

const promocode = reactive({ val: 0, discount: 0 });
const promoCodeMessage = ref("");
</script>

<template>
  <div id="summary" class="lg:w-1/3 p-10 border border-gray-300 bg-gray-200">
    <h1 class="font-bold text-2xl border-b pb-8">Order Summary</h1>
    <div class="border-t">
      <div class="flex font-semibold justify-between py-6 text-sm uppercase">
        <span>Total cost</span>
        <span>
          <slot name="total" />
        </span>
      </div>
      <p class="p-4 text-base">You can pick up your order and pay.</p>
      <NuxtLink to="/checkout">
        <button
          class="rounded-lg bg-[#06113C] font-semibold hover:bg-white hover:text-[#06113C] border hover:border-[#06113C] py-3 text-sm text-white uppercase w-full"
        >
          Pay online
        </button>
      </NuxtLink>
    </div>
  </div>
</template>
