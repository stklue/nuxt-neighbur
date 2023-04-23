<script setup lang="ts">
import { useCart } from "~~/stores/cart";
definePageMeta({
  middleware: "auth",
  layout: "index",
});
</script>

<template>
  <div class="lg:pt-28 min-h-screen w-full bg-light-grey text-[#06113C] px-5">
    <div class="flex flex-col bg-gray-100 w-full h-1/3">
        <h1 class="text-2xl font-semibold">
            Accepted Products
        </h1>
    </div>
  </div>
</template>
