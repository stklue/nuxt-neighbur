<script lang="ts" setup>
import { User } from "@prisma/client";
import { Product, emptyProduct, emptyUser } from "~~/data/types";
import { AggData } from "~~/server/api/order/[userId]";
import { useCart } from "~~/stores/cart";

const { add } = useCart();
const product: Ref<Product> = ref(emptyProduct);
const user: Ref<User> = ref(emptyUser);
const aggData: Ref<AggData<Product, User, User>> = ref({
  o: product.value,
  p: user.value,
});
const route = useRoute();

watch(
  () => route.params.id,
  async (_id) => {
    const { data } = await useFetch(`/api/product/${_id}`);
    aggData.value = data.value as unknown as AggData<Product, User, User>;
    user.value = aggData.value.p;
    product.value = aggData.value.o;
  },
  { deep: true, immediate: true }
);

const addNotification = ref(false);

useHead({
  title: "Product",
  meta: [{ name: "product", content: "neighbur food" }],
});

const addProduct = () => {
  add(product.value);
  addNotification.value = true;
};

watch(addNotification, () => {
  setTimeout(() => {
    addNotification.value = false;
  }, 1000);
});
</script>

<template>
  <section
    class="min-h-full w-full px-10 pt-10 rounded-tl-lg rounded-bl-lg flex flex-col space-y-4"
  >
    <div class="w-full" :id="String(product.id)">
      <div
        class="bg-[#fefefe] flex flex-col w-full h-full p-5 space-y-2 rounded-lg"
      >
        <div class="flex justify-between space-x-2">
          <div class="flex space-x-2">
            <div class="rounded-ful w-10 h-10">
              <HomeChefIcon />
            </div>
            <h2 class="font-semibold text-2xl">{{ user.name }}</h2>
          </div>
          <OrderOnlineGlow />
        </div>

        <div class="w-full h-full rounded-lg bg-slate-300 p-3">
          {{ product.description }}
        </div>

        <p class="text-lg font-medium">R{{ product.price.toFixed(2) }}</p>
        <div
          class="flex justify-between items-center text-center h-7"
          v-if="product.plate === 0.5"
        >
          <p class="text-lg">Plate(1/2)</p>
          <div class="flex">
            <Icon class="text-[#FF8C32] w-14 h-14" name="mdi:circle-halff" />
            <p class="self-center">(plates)</p>
          </div>
        </div>
        <div
          class="flex justify-between items-center text-center h-7"
          v-if="product.plate === 0.25"
        >
          <p class="text-lg">Plate(1/4)</p>
          <div class="flex">
            <Icon class="text-[#FF8C32] w-14 h-14" name="mdi:circle-slice-2" />
            <p class="self-center">(plates)</p>
          </div>
        </div>
        <div class="h-7 flex justify-between items-center text-center" v-else>
          <p class="text-lg">Plate({{ product.plate }})</p>

          <div class="flex">
            <div class="flex" v-for="_ in product.plate">
              <Icon class="text-[#FF8C32] w-14 h-14" name="ic:round-circle" />
            </div>
            <p class="self-center">(plates)</p>
          </div>
        </div>
        <div class="inline-flex pt-5 space-x-3">
          <p>Prepared</p>
          <p>{{ product.created }}</p>
        </div>
        <div class="flex justify-between items-center text-center">
          <p class="text-lg">Available</p>
          <div class="flex space-x-2">
            <p class="text-lg font-medium">{{ product.available }}</p>
            <p>(plates)</p>
          </div>
        </div>
        <div class="inline-flex pt-5 space-x-2">
          <p v-if="product.recurring == true">Recurring</p>
          <p v-else>Once-off</p>
          <p>dish</p>
        </div>

        <button
          @click="addProduct"
          class="w-full bg-[#06113C] text-white p-4 rounded-lg hover:bg-gray-200 hover:text-[#06113C] transition-all ease-out duration-300"
        >
          Add to cart
        </button>
        <div
          v-if="addNotification === true"
          class="w-full p-4 bg-green-500 my-3 text-white font-semibold rounded-lg"
        >
          Added to cart
        </div>
      </div>
    </div>
  </section>
</template>
