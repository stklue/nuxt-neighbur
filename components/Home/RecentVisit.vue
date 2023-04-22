<script lang="ts" setup>
import { OrderItem, Product, User } from "~~/data/types";
import { AggData } from "~~/server/api/order/[userId]";
import { useUserStore } from "~~/stores/user";

const { user } = useUserStore();

const { data } = await useFetch(`/api/order/${user.id}`);

// const d: [] = ref()
const aggData: Ref<AggData<OrderItem, Product, User>[]> = ref([]);
const orderItems: Ref<OrderItem[]> = ref([]);
const users: Ref<User[]> = ref([]);
const products: Ref<Product[]> = ref([]);

if (Array.isArray(data.value)) {
  aggData.value = data.value as unknown as AggData<OrderItem, Product, User>[];
}
for (let i = 0; i < aggData.value.length; i++) {
  orderItems.value.push(aggData.value[i].o);
  products.value.push(aggData.value[i].p);
  users.value.push(aggData.value[i].u!);
}
</script>

<template>
  <section class="flex flex-col w-full pt-20 px-12 space-x-4 bg-[#eeeeee]">
    <h1 class="ml-4 mt-4 text-2xl font-semibold">Order again</h1>
    <div class="flex mb-6">
      <div
        class="w-full h-1/3 m-4"
        v-for="(order, i) in orderItems"
        :id="String(order.id)"
      >
        <div
          class="bg-[#fefefe] flex flex-col w-full h-full p-4 rounded-lg hover:scale-110 hover:shadow-lg transition-all ease-in-out duration-500 cursor-pointer"
        >
          <div class="flex space-x-2">
            <div class="rounded-full bg-slate-400 opacity-70 w-8 h-8">
              <img
                class="rounded-full w-8 h-8 object-cover"
                :src="products[i].image"
                alt="food"
              />
            </div>
            <h2>{{ users[i].name }}</h2>
          </div>
          <div class="p-2">
            <div class="w-full h-full rounded-lg bg-slate-300 p-2">
              {{ products[i].description }}
            </div>
          </div>
          <HomeRating />
        </div>
      </div>
    </div>
  </section>
</template>
