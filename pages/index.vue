<script setup lang="ts">
import { OrderItem, Product as product } from "~~/data/types";
import { useCart } from "~~/stores/cart";
import { useUserStore } from "~~/stores/user";
const { updateOrderItems } = useCart();

definePageMeta({
  middleware: "auth",
  layout: "index",
});

useHead({
  title: "neighbur | Home",
  meta: [{ name: "description", content: "neighbur food" }],
});

type OrderProduct = OrderItem & {
  Product: product;
};
const { user } = useUserStore();
const { data: orders } = await useFetch(`/api/order/${user().id}`);
updateOrderItems(orders.value as unknown as OrderProduct[]);
</script>

<template>
  <div class="min-h-screen">
    <HomeRecentVisit />
    <div class="flex flex-col pt-20">
      <HomeOnlineNearYou />
      <!-- <HomeAllNearYou/> -->
    </div>
  </div>
</template>
