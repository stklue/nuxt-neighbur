<script lang="ts" setup>
import { Student } from "~~/data/types";
import { useCart } from "~~/stores/cart";
import { useUserStore } from "~~/stores/user";
import { Database } from "~~/types/supabase";

const authClient = useSupabaseAuthClient<Database>();

const { getCartItems } = useCart();

const { updateUser, user } = useUserStore();
const { data, pending } = await useFetch("/api/user");
updateUser(data.value as unknown as Student);

const logout = async () => {
  const { error } = await authClient.auth.signOut();
  if (error) {
    return alert(error.message);
  }
  navigateTo("/introduction");
};

// 763

const windowSize = useWindowSize();

const open = ref(false);

const showModal = () => {
  open.value = !open.value;
};
</script>

<template>
  <header
    class="fixed w-full h-20 text-center justify-center p-4 bg-white z-10 shadow-md"
  >
    <nav
      class="h-full flex justify-between space-x-5 text-sm text-[#06113C] z-10"
    >
      <div class="flex justify-center self-center h-full items-center">
        <NuxtLink class="text-2xl font-bold cursor-pointer" to="/"
          >neighbur</NuxtLink
        >
      </div>
      <div
        class="flex space-x-2 items-center"
        v-if="windowSize.width.value < 764"
      >
        <NuxtLink to="/cart">
          <div class="flex items-center bg-gray-200 rounded-3xl px-2 mx-2 py-1">
            <CartIcon />
            <p class="text-lg font-semibold">{{ getCartItems() }}</p>
          </div>
        </NuxtLink>
        <HomeMenu @click="showModal" />
        <Modal @showModal="showModal" @logout="logout" v-if="open" />
      </div>

      <div
        v-if="!pending"
        class="hidden md:flex space-x-2 justify-center self-center h-full items-center"
      >
        <p>welcome</p>
        <p></p>
        {{ user().name }}
      </div>

      <div
        class="hidden md:flex divide-x-2 justify-center self-center h-full items-center"
      >
        <NuxtLink
          to="/order/dashboard"
          class="group transition-all duration-300 ease-in-out"
        >
          <span
            class="mx-2 cursor-pointer text-base font-semibold bg-left-bottom bg-gradient-to-r from-[#FF8C32] to-[#FF8C32] bg-[length:0%_3px] bg-no-repeat group-hover:bg-[length:100%_3px] transition-all duration-500 ease-out"
          >
            dashboard
          </span>
        </NuxtLink>
        <NuxtLink
          to="/order/create"
          class="group transition-all duration-300 ease-in-out"
        >
          <span
            class="mx-2 cursor-pointer text-base font-semibold bg-left-bottom bg-gradient-to-r from-[#FF8C32] to-[#FF8C32] bg-[length:0%_3px] bg-no-repeat group-hover:bg-[length:100%_3px] transition-all duration-500 ease-out"
          >
            create order
          </span>
        </NuxtLink>
        <NuxtLink
          to="/order/all"
          class="group transition-all duration-300 ease-in-out"
        >
          <span
            class="mx-2 cursor-pointer text-base font-semibold bg-left-bottom bg-gradient-to-r from-[#FF8C32] to-[#FF8C32] bg-[length:0%_3px] bg-no-repeat group-hover:bg-[length:100%_3px] transition-all duration-500 ease-out"
          >
            orders
          </span>
        </NuxtLink>
        <!-- <NuxtLink
          to="/account"
          class="group transition-all duration-300 ease-in-out"
        >
          <span
            class="mx-2 cursor-pointer text-base font-semibold bg-left-bottom bg-gradient-to-r from-[#FF8C32] to-[#FF8C32] bg-[length:0%_3px] bg-no-repeat group-hover:bg-[length:100%_3px] transition-all duration-500 ease-out"
          >
            account
          </span>
        </NuxtLink> -->
        <NuxtLink to="/cart">
          <div class="flex items-center bg-gray-200 rounded-3xl px-2 mx-2 py-1">
            <CartIcon />
            <p class="text-lg font-semibold">{{ getCartItems() }}</p>
          </div>
        </NuxtLink>
        <div class="group transition-all duration-300 ease-in-out">
          <span
            @click="logout"
            class="mx-2 cursor-pointer text-base font-semibold bg-left-bottom bg-gradient-to-r from-[#FF8C32] to-[#FF8C32] bg-[length:0%_3px] bg-no-repeat group-hover:bg-[length:100%_3px] transition-all duration-500 ease-out"
          >
            logout
          </span>
        </div>
      </div>
    </nav>
  </header>
  <div class="w-full min-h-screen">
    <slot />
  </div>
  <Footer />
</template>
