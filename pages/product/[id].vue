<script lang="ts" setup>
definePageMeta({
  middleware: "auth",
  layout: "index",
});

useHead({
  title: "Product",
  meta: [{ name: "product", content: "neighbur food" }],
});
</script>

<template>
  <!-- <img class="w-full h-full  rounded-lg object-cover" :src="product.image" alt=""> -->
  <div class="flex flex-col lg:flex-row min-h-screen md:px-14 pt-20">
    <ProductDetail />
  </div>
</template>
