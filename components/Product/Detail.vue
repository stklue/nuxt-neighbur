<script lang="ts" setup>
import {
  Product,
  emptyProduct,
  Student as student,
  emptyUser,
} from "~~/data/types";
import { useCart } from "~~/stores/cart";
import { useUserStore } from "~~/stores/user";
import { Database } from "~~/types/supabase";

const { add, getCurrentOrder, getOrderWithProduct } = useCart();
const route = useRoute();
const quantity = ref(0);
const client = useSupabaseClient<Database>();

const { user } = useUserStore();

type ProductUser = Product & {
  Student: student;
};
const emptyProductUser: ProductUser & Product = {
  ...emptyProduct,
  Student: emptyUser,
};
const productUser: Ref<ProductUser> = ref(emptyProductUser);

watch(
  () => route.params.id,
  async (_id) => {
    const { data: product } = await useFetch(`/api/product/${_id}`);

    productUser.value = product.value as unknown as ProductUser;
  },
  { deep: true, immediate: true }
);
const addToOrder = async () => {
  await useAsyncData("Order", async () => {
    const { error } = await client.from("Order").insert(getOrderWithProduct());
    if (error !== null) {
      return alert(error.message);
    }
    return;
  });
};
type State = "loading" | "initial" | "done";
const addNotification: Ref<State> = ref("initial");
const addProduct = async () => {
  if (quantity.value > 0 && quantity.value <= productUser.value.available!) {
    add(productUser.value, user().id, quantity.value);
    addNotification.value = "loading";
    await addToOrder();
    addNotification.value = "done";
  } else if (quantity.value > productUser.value.available!) {
    alert(`Quantity can't be more than ${productUser.value.available!}`);
  } else {
    alert("You have to select how many you want. Can't be zero.");
  }
};
</script>

<template>
  <section
    class="min-h-full w-full lg:w-1/2 md:mx-auto px-10 pt-10 rounded-tl-lg rounded-bl-lg flex flex-col space-y-4 text-[#06113C]"
  >
    <div class="w-full" :id="String(productUser.id)">
      <div
        class="bg-[#fefefe] flex flex-col w-full h-full p-5 space-y-4 rounded-lg"
      >
        <div class="flex justify-between space-x-2">
          <div class="flex space-x-2">
            <div class="rounded-ful w-10 h-10">
              <HomeChefIcon />
            </div>
            <h2 class="font-semibold text-2xl">
              {{ productUser.Student.name }}
            </h2>
          </div>
          <OrderOnlineGlow :online="productUser.Student.online" />
        </div>
        <p class="text-2xl font-medium">R{{ productUser.price?.toFixed(2) }}</p>

        <div class="w-full h-full rounded-lg bg-slate-200 p-3 mb-5">
          <p>
            {{ productUser.pname }}
          </p>
          <p>Description: {{ productUser.description }}</p>
        </div>

        <div
          class="flex bg-green-400 flex-col md:flex-row md:justify-between items-center text-center h-7"
          v-if="productUser.plate === 0.5"
        >
          <p class="text-lg">Plate(1/2)</p>
          <div class="flex">
            <Icon class="text-[#FF8C32] w-14 h-14" name="mdi:circle-halff" />
            <p class="self-center">(plates)</p>
          </div>
        </div>
        <div
          class="flex justify-between items-center text-center h-7 pt-2"
          v-if="productUser.plate === 0.25"
        >
          <p class="text-lg">Plate(1/4)</p>
          <div class="flex">
            <Icon class="text-[#FF8C32] w-14 h-14" name="mdi:circle-slice-2" />
            <p class="self-center">(plates)</p>
          </div>
        </div>
        <div class="flex justify-between items-center text-center" v-else>
          <p class="text-lg">Plate({{ productUser.plate }})</p>

          <div class="flex">
            <div class="flex" v-for="_ in productUser.plate">
              <Icon class="text-[#FF8C32] w-14 h-14" name="ic:round-circle" />
            </div>
            <p class="self-center">(plates)</p>
          </div>
        </div>
        <div
          class="flex flex-col   md:flex-row md:justify-between pt-5 space-x-3"
        >
          <p>Prepared at</p>
          <p>{{ productUser.created_at }}</p>
        </div>
        <div class="flex justify-between items-center text-center">
          <p class="text-lg">Available</p>
          <div class="flex space-x-2">
            <p class="text-lg font-medium">{{ productUser.available }}</p>
            <p>(plates)</p>
          </div>
        </div>
        <div class="inline-flex pt-5 space-x-2">
          <p v-if="productUser.recurring == true">Recurring</p>
          <p v-else>Once-off</p>
          <p>dish</p>
        </div>
        <div class="inline-flex pt-5 space-x-3">
          <p>I want</p>
          <input
            class="border-[#FF8C32] w-1/4"
            type="number"
            name="quantity"
            id="quantity"
            v-model="quantity"
          />
          <p>plate(s)</p>
        </div>

        <button
          @click="addProduct"
          class="w-full bg-[#06113C] text-white p-4 rounded-lg hover:bg-gray-200 hover:text-[#06113C] transition-all ease-out duration-300"
        >
          Add to cart
        </button>
        <div
          v-if="addNotification === 'done'"
          class="w-full p-4 bg-green-500 my-3 text-white font-semibold rounded-lg"
        >
          Added to cart. {{ productUser.Student.name }} just got the message.
          Click on your orders ontop to see the status of your order. Thank you.
        </div>
        <div v-if="addNotification === 'loading'">
          <Spinner />
        </div>
        <div v-else></div>
      </div>
    </div>
  </section>
</template>
