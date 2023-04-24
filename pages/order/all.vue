<script setup lang="ts">
import { OrderItem, Product as product } from "~~/data/types";
import { useCart } from "~~/stores/cart";
import { useUserStore } from "~~/stores/user";
definePageMeta({
  middleware: "auth",
  layout: "index",
});
const { updateOrderItems } = useCart();

type State = "initial" | "loading" | "done";
const cartState: Ref<State> = ref("initial");

const { user } = useUserStore();

type OrderProduct = OrderItem & {
  Product: product;
};

const orders: Ref<OrderProduct[]> = ref([]);

cartState.value = "loading";
const { data: orderData } = await useFetch(`/api/order/${user().id}`);
cartState.value = "done";

orders.value = orderData.value as unknown as OrderProduct[];

console.log(orders.value);

updateOrderItems(orders.value);
</script>

<template>
  <div class="min-h-screen flex flex-col pt-16 px-10 text-[#06113C]">
    <h1 class="py-5 text-3xl">Orders</h1>
    <div class="min-h-screen flex flex-col space-y-5">
      <div
        class="flex space-y-3 bg-gray-200 pr-5 py-3"
        v-for="orderItem in orders"
        :key="order.id"
      >
        <!-- Image -->
        <div class="flex h-full w-1/3 lg:w-1/6 p-2 rounded-lg">
          <img class="rounded-lg" :src="orderItem.Product?.image!" />
        </div>

        <!-- Product details -->
        <div class="flex h-full w-2/3 lg:w-full flex-col justify-between">
          <div class="flex flex-col justify-between">
            <!-- <router-link :to="`/brand/${item.cat}/${item.id}`"> -->
            <span class="font-bold text-lg">{{
              orderItem.Product?.pname
            }}</span>
            <!-- </router-link> -->
            <div class="flex space-x-5 lg:justify-start">
              <span class="text-center font-semibold text-gray-400"
                >R{{ orderItem.total.toFixed(2) }}</span
              >
            </div>
            <div class="flex space-x-5 justify-between w-full f">
              <span class="text-center font-semibold text-base text-gray-400"
                >Order Status</span
              >
              <span
                class="text-center font-semibold text-base text-green-400"
                >{{ orderItem.confirmed.toUpperCase() }}</span
              >
            </div>
          </div>

          <!-- Incr and Decr and Trash/Remove -->
          <div class="flex justify-between pr-5">
            <div class="flex space-x-4 w-full">
              <p class="text-center w-8">Plate:</p>
              <p class="text-center w-8">{{ orderItem.quantity }}</p>
            </div>
            <!-- <div>
          <a
            @click="remove(orderItem)"
            class="delete font-semibold hover:text-red-500 text-gray-500 text-xs cursor-pointer"
            >Remove</a
          >
        </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
