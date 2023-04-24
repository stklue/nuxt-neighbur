<script setup lang="ts">
import { OrderItem, Product as product } from "~~/data/types";
import { useCart } from "~~/stores/cart";
import { useUserStore } from "~~/stores/user";
import { Database } from "~~/types/supabase";
definePageMeta({
  middleware: "auth",
  layout: "index",
});
const { cart, getCartItems, updateOrderItems, getTotal } = useCart();

type State = "initial" | "loading" | "done";
const cartState: Ref<State> = ref("initial");

const { user } = useUserStore();

type OrderProduct = OrderItem & {
  Product: product;
};

const orders: Ref<OrderProduct[]> = ref([]);

cartState.value = "loading";
const { data: orderData } = await useFetch(
  `/api/order/confirmed?id=${user().id}`
);
cartState.value = "done";
orders.value = (orderData.value as OrderProduct[]) ?? [];
if (orders.value.length > 0) {
  updateOrderItems(orders.value);
}
</script>

<template>
  <div class="lg:pt-20 min-h-screen bg-light-grey text-[#06113C]">
    <div
      v-if="getCartItems() === 0"
      class="lg:pt-20 min-h-screen bg-light-grey text-[#06113C]"
    >
      <h1 class="pl-10 text-3xl font-semibold">Cart is empty</h1>
    </div>
    <div v-else>
      <div v-if="cartState === 'done'" class="bg-light-grey text-[#06113C]">
        <div class="flex flex-col w-full shadow-md lg:flex-row lg:px-20">
          <div class="lg:w-3/4 bg-white px-10 py-10">
            <div class="flex justify-between border-b pb-5">
              <h1 class="font-semibold text-2xl">Cart</h1>
              <h2 class="font-semibold text-2xl">
                {{ getCartItems() }} Item(s)
              </h2>
            </div>

            <CartItem
              v-for="item in cart.products"
              :key="item.id"
              :orderItem="item"
            />

            <NuxtLink
              to="/"
              class="flex font-semibold text-[#FF8C32] text-sm mt-10"
            >
              <svg
                class="fill-current mr-2 text-[#FF8C32] w-4"
                viewBox="0 0 448 512"
              >
                <path
                  d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"
                />
              </svg>
              Continue Shopping
            </NuxtLink>
          </div>

          <CartOrderSummary>
            <template v-slot:total>R{{ getTotal() }}</template>
          </CartOrderSummary>
        </div>
      </div>
      <div class="mx-auto" v-if="cartState === 'loading'">
        <Spinner />
      </div>
    </div>
  </div>
</template>
