<script setup lang="ts">
import { OrderItem, Product as product } from "~~/data/types";
import { useUserStore } from "~~/stores/user";
import { Database } from "~~/types/supabase";
import type { RealtimeChannel } from "@supabase/supabase-js";

definePageMeta({
  middleware: "auth",
  layout: "index",
});
let realtimeChannel: RealtimeChannel;
const client = useSupabaseClient<Database>();

const { user } = useUserStore();

type OrderProduct = OrderItem & {
  Product: product;
};

const orders: Ref<OrderProduct[]> = ref([]);

const { data: ordersData, pending } = await useAsyncData(
  "OrderProduct",
  async () => {
    const { data: orderData } = await useFetch(`/api/order/${user().id}`);
    return orderData.value as OrderProduct[];
  }
);
orders.value = ordersData.value ?? [];

// Once page is mounted, listen to changes on the `Student` table and refresh students when receiving event
onMounted(() => {
  // Real time listener for new workouts
  realtimeChannel = client
    .channel("public:Order")
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "Order" },
      async () => {
        const { data: orderData } = await useFetch(`/api/order/${user().id}`);
        orders.value = (orderData.value as OrderProduct[]) ?? [];
      }
    );
  realtimeChannel.subscribe();
});

// Don't forget to unsubscribe when user left the page
onUnmounted(() => {
  client.removeChannel(realtimeChannel);
});
</script>

<template>
  <div class="min-h-screen flex flex-col pt-16 px-10 text-[#06113C]">
    <h1 class="py-5 text-3xl">Orders</h1>
    <div v-if="orders.length === 0" class="py-5">No orders made yet.</div>
    <div v-if="!pending" class="min-h-screen flex flex-col space-y-5">
      <div
        class="flex space-y-3 bg-gray-200 pr-5 py-3"
        v-for="orderItem in orders"
        :key="orderItem.id"
      >
        <!-- Image -->
        <div class="flex h-full w-1/3 lg:w-1/6 p-2 rounded-lg">
          <img class="rounded-lg" :src="orderItem.Product?.image!" />
        </div>

        <!-- Product details -->
        <div class="flex h-full w-2/3 lg:w-full flex-col justify-between">
          <div class="flex flex-col justify-between">
            <span class="font-bold text-lg">{{
              orderItem.Product?.pname
            }}</span>
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
