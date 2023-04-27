<script setup lang="ts">
import { OrderItem, Product as product } from "~~/data/types";
import { Database } from "~~/types/supabase";
import { useUserStore } from "~~/stores/user";
import type { RealtimeChannel } from "@supabase/supabase-js";

let realtimeChannel: RealtimeChannel;

definePageMeta({
  middleware: "auth",
  layout: "index",
});

type OrderProduct = OrderItem & {
  Product: product;
};

const client = useSupabaseClient<Database>();

const { user } = useUserStore();

const ordersPending: Ref<OrderProduct[]> = ref([]);

const { data: orders, pending } = await useAsyncData(
  "OrderProduct",
  async () => {
    const { data: orderData } = await useFetch(
      `/api/order/all?id=${user().id}`
    );
    return orderData.value as OrderProduct[];
  }
);
ordersPending.value = orders.value ?? [];

// Once page is mounted, listen to changes on the `Student` table and refresh students when receiving event
onMounted(() => {
  // Real time listener for new workouts
  realtimeChannel = client
    .channel("public:Order")
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "Order" },
      async () => {
        const { data: orderData } = await useFetch(
          `/api/order/all?id=${user().id}`
        );
        ordersPending.value = (orderData.value as OrderProduct[]) ?? [];
      }
    );
  realtimeChannel.subscribe();
});

// Don't forget to unsubscribe when user left the page
onUnmounted(() => {
  client.removeChannel(realtimeChannel);
});

const success = ref(false);
const successPay = ref(false);

const isConfirmed = ref("confirmed");

// ordersPending.value = orderData.value as unknown as OrderProduct[];
const reject = async (id: number) => {
  const { error } = await client
    .from("Order")
    .update({ confirmed: "rejected" })
    .eq("id", id);

  if (error) {
    return alert(error.message);
  }

  success.value = true;
  setInterval(() => {
    success.value = false;
  }, 2000);
};

const confirm = async (id: number, confirm: string) => {
  const { error } = await client
    .from("Order")
    .update({ confirmed: "confirmed" })
    .eq("id", id);

  if (error) {
    return alert(error.message);
  }

  success.value = true;
  setInterval(() => {
    success.value = false;
  }, 2000);
};
const payed = async (o: OrderProduct) => {
  if (o.confirmed === "confirmed" || o.confirmed === "CONFIRMED") {
    const { error } = await client
      .from("Order")
      .update({ confirmed: "payed" })
      .eq("id", o.id);

    const { error: expireErr } = await client
      .from("Product")
      .update({ expire_at: new Date() })
      .eq("id", o.Product.id);

    if (error) {
      return alert(error.message);
    }
    const { error: rejectedErr } = await client
      .from("Order")
      .update({ confirmed: "rejected" })
      .neq("id", o.id);

    if (rejectedErr) {
      return alert(rejectedErr.message);
    }

    if (expireErr) {
      return alert(expireErr.message);
    }

    successPay.value = true;
    setInterval(() => {
      successPay.value = false;
    }, 2000);
  }
};
</script>

<template>
  <div class="pt-28 min-h-screen w-full bg-light-grey text-[#06113C] px-5">
    <div class="flex flex-col bg-gray-100 w-full h-1/3 p-5">
      <h1 class="text-2xl font-semibold">Accepted Products</h1>
      <div class="p-10" v-if="pending">
        <Spinner />
      </div>
      <div v-else>
        <div v-if="success" class="p-3 w-full bg-green-500 text-white">
          Refresh to see changes
        </div>
        <div v-if="successPay" class="p-3 w-full bg-green-500 text-white">
          Refresh to see changes
        </div>
        <div v-for="order in ordersPending">
          <div class="flex flex-col p-3 hover:bg-gray-200">
            <div class="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-y-3">
              <div>
                <p class="text-base font-bold">Order ID</p>
                <p>{{ order.id }}</p>
              </div>
              <div>
                <p class="text-base font-bold">Total cost</p>
                <p>R{{ order.total.toFixed(2) }}</p>
              </div>
              <div>
                <p class="text-base font-bold">Quantity</p>
                <p>{{ order.quantity }}</p>
              </div>

              <div>
                <p class="text-base font-bold">Product name</p>
                <p>{{ order.Product.pname }}</p>
              </div>
              <div v-if="isConfirmed === order.confirmed">
                <p class="text-base font-bold">Status</p>
                <p>{{ order.confirmed.toUpperCase() }}</p>
              </div>
              <div v-else>
                <p class="text-base font-bold">Status</p>
                <p>{{ order.confirmed.toUpperCase() }}</p>
              </div>
              <div v-if="order.confirmed === 'processing'">
                <p class="text-base font-bold">Actions</p>
                <div class="flex space-x-2 divide-x-2 divide-gray-300">
                  <p
                    @click="reject(order.id)"
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
              <div v-else-if="order.confirmed === 'confirmed'">
                <p class="text-base font-bold">Actions</p>
                <div class="flex space-x-2 divide-x-2 divide-gray-300">
                  <p
                    @click="reject(order.id)"
                    class="pr-2 cursor-pointer hover:text-red-500 hover:font-semibold"
                  >
                    REJECT
                  </p>
                  <p
                    @click="payed(order)"
                    class="pl-2 cursor-pointer hover:text-green-500 hover:font-semibold"
                  >
                    PAYED
                  </p>
                </div>
              </div>
              <div
                v-else-if="
                  order.confirmed === 'rejected' || order.confirmed === 'payed'
                "
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
