<script setup lang="ts">
import { OrderItem, Product as p } from "~~/data/types";
import type { RealtimeChannel } from "@supabase/supabase-js";
import { Database } from "~~/types/supabase";
definePageMeta({
  middleware: "auth",
  layout: "index",
});

type OrderProduct = OrderItem & {
  Product: p;
};

const client = useSupabaseClient<Database>();

const userS = useSupabaseUser();

const ordersPending: Ref<OrderProduct[]> = ref([]);

const { data: orderData } = await useFetch(
  `/api/order/me?id=${userS.value?.id}`
);

const success = ref(false);

ordersPending.value = orderData.value as unknown as OrderProduct[];
const reject = async (id: number, confirm: string) => {
  if (confirm === "processing" || confirm === "PROCESSING" ){
    const { error } = await client
      .from("Order")
      .update({ confirmed: "rejected" })
      .eq("id", id);

    if (error) {
      return alert(error.message);
    }
  }
};

const confirm = async (id: number, confirm: string) => {
  if (confirm === "processing" || confirm === "PROCESSING" ) {
    const { error } = await client
      .from("Order")
      .update({ confirmed: "confirmed" })
      .eq("id", id);

    if (error) {
      return alert(error.message);
    }

    const { error: err } = await client
      .from("Order")
      .update({ confirmed: "rejected" })
      .neq("id", id);

    if (err) {
      return alert(err.message);
    }
  }
};
</script>

<template>
  <div class="lg:pt-28 min-h-screen w-full bg-light-grey text-[#06113C] px-5">
    <div class="flex flex-col bg-gray-100 w-full h-1/3 p-5">
      <h1 class="text-2xl font-semibold">Accepted Products</h1>
      <div v-if="success" class="p-3 w-full bg-green-500 text-white">
        Refresh to see changes
      </div>
      <div v-for="order in ordersPending">
        <div class="flex flex-col p-3 hover:bg-gray-200">
          <div class="grid grid-cols-7 font-semibold">
            <p>Order ID</p>
            <p>Total cost</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Product name</p>
            <p>Status</p>
            <p>Actions</p>
          </div>
          <div class="grid grid-cols-7">
            <p>{{ order.id }}</p>
            <p>{{ order.total }}</p>
            <p>{{ order.quantity }}</p>
            <p>{{ order.total }}</p>
            <p>{{ order.Product.pname }}</p>
            <p>{{ order.confirmed.toUpperCase() }}</p>
            <div class="flex space-x-2 divide-x-2 divide-gray-300">
              <p
                @click="reject(order.id, order.confirmed)"
                class="pr-2 cursor-pointer hover:text-red-500 hover:font-semibold"
              >
                REJECT
              </p>
              <p
                @click="confirm(order.id, order.confirmed)"
                class="pl-2 cursor-pointer hover:text-green-500 hover:font-semibold"
              >
                CONFIRM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
