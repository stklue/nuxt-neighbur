<script lang="ts" setup>
import { Product, Student as student } from "~~/data/types";

type ProductUser = Product & {
  Student: student;
};

const productUsers: Ref<ProductUser[]> = ref([]);
type State = "initial" | "loading" | "done";
const dataState: Ref<State> = ref("initial");

dataState.value = "loading";
const { data, pending } = await useFetch(`/api/product/online`);
dataState.value = "done";
productUsers.value = data.value as unknown as ProductUser[];
</script>

<template>
  <section
    class="flex flex-col w-full pt-5 px-6 lg:px-12 space-x-4 text-[#06113C]"
  >
    <div class="ml-4 mt-4 inline-flex space-x-4">
      <h1 class="text-lg lg:text-2xl font-semibold">
        Currently cooking near you
      </h1>
      <img class="w-10 h-10" src="~~/cooking.gif" />
    </div>
    <div v-if="pending">Loading</div>
    <div v-if="dataState === 'done'" class="flex flex-col lg:flex-row mb-6">
      <div
        class="w-52 m-4 flex-wrap"
        v-for="productUser in productUsers"
        :id="String(productUser.Student.id)"
      >
        <NuxtLink :to="'product/' + productUser.id">
          <div
            class="bg-orange-200 flex flex-wrap flex-col w-full h-full p-4 rounded-lg hover:scale-110 hover:shadow-lg transition-all ease-in-out duration-500 cursor-pointer"
          >
            <div class="flex space-x-2 mb-2">
              <div class="h-10 w-10 rounded-md">
                <HomeChefIcon />
              </div>
              <div class="inline-flex justify-between w-full space-x-4">
                <h2>{{ productUser.Student.name }}</h2>
                <OrderOnlineGlow :online="productUser.Student.online" />
              </div>
            </div>
            <div>
              <h2 class="font-semibold">R{{ productUser.price }}</h2>
            </div>
            <div>
              <h2 class="font-light">{{ productUser.Student.location }}</h2>
            </div>
            <div>
              <h2 class="font-normal text-sm">{{ productUser.created_at }}</h2>
            </div>
            <div class="py-2">
              <div class="w-full h-full rounded-lg bg-gray-100 p-2">
                {{ productUser.description }}
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
