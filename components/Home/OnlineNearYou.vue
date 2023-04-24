<script lang="ts" setup>
import { Product, Student } from "~~/data/types";

const { data, pending } = await useFetch(`/api/product/online`);

const products: Ref<Product[]> = ref([]);
const users: Ref<Student[]> = ref([]);
if (data.value !== null) {
  products.value = data.value.p as Product[];
  users.value = data.value.u as unknown as Student[];
}
</script>

<template>
  <section class="flex flex-col w-full pt-5 px-12 space-x-4 text-[#06113C]">
    <div class="ml-4 mt-4 inline-flex space-x-4">
      <h1 class="text-2xl font-semibold">Currently cooking near you</h1>
      <img class="w-10 h-10" src="~~/cooking.gif" />
    </div>
    <div v-if="pending">Loading</div>
    <div v-else class="flex mb-6">
      <div
        class="w-52 m-4 flex-wrap"
        v-for="(product, i) in products"
        :id="String(users[i].id)"
      >
        <NuxtLink :to="'product/' + product.id">
          <div
            class="bg-orange-200 flex flex-wrap flex-col w-full h-full p-4 rounded-lg hover:scale-110 hover:shadow-lg transition-all ease-in-out duration-500 cursor-pointer"
          >
            <div class="flex space-x-2 mb-2">
              <div class="h-10 w-10 rounded-md">
                <HomeChefIcon />
              </div>
              <div class="inline-flex justify-between w-full space-x-4">
                <h2>{{ users[i].name }}</h2>
                <OrderOnlineGlow :online="users[i].online" />
              </div>
            </div>
            <div>
              <h2 class="font-semibold">R{{ product.price }}</h2>
            </div>
            <div>
              <h2 class="font-light">{{ users[i].location }}</h2>
            </div>
            <div>
              <h2 class="font-normal text-sm">{{ product.created_at }}</h2>
            </div>
            <div class="py-2">
              <div class="w-full h-full rounded-lg bg-gray-100 p-2">
                {{ product.description }}
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
