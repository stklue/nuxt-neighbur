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
const { data: orders } = await useFetch(`/api/order/confirmed?id=${user().id}`);
orders.value = (orders.value as OrderProduct[]) ?? [];
if (orders.value.length > 0) {
  updateOrderItems(orders.value);
}
</script>

<template>
  <div class="min-h-screen">
    <div class="flex flex-col pt-20">
      <HomeOnlineNearYou />
    </div>
  </div>
</template>
