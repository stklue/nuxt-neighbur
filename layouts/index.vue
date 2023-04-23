<script lang="ts" setup>
import { User, emptyUser } from "~~/data/types";
import { useCart } from "~~/stores/cart";
import { Database } from "~~/types/supabase";

const authClient = useSupabaseAuthClient<Database>();
const userS = useSupabaseUser();
const _id = userS.value?.id;
const user: Ref<User> = ref(emptyUser);
const { getCartItems } = useCart();

const { data } = await useFetch(`/api/users/${_id}`);
user.value = data.value as unknown as User;

const logout = async () => {
  const { error } = await authClient.auth.signOut();
  if (error) {
    return alert(error.message);
  }
  navigateTo("/introduction");
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

      <div class="flex justify-center self-center h-full items-center">
        welcome {{ user.name }}
      </div>

      <div
        class="flex divide-x-2 justify-center self-center h-full items-center"
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
          to="/account"
          class="group transition-all duration-300 ease-in-out"
        >
          <span
            class="mx-2 cursor-pointer text-base font-semibold bg-left-bottom bg-gradient-to-r from-[#FF8C32] to-[#FF8C32] bg-[length:0%_3px] bg-no-repeat group-hover:bg-[length:100%_3px] transition-all duration-500 ease-out"
          >
            account
          </span>
        </NuxtLink>
        <NuxtLink to="/cart">
          <div class="flex items-center bg-gray-200 rounded-3xl px-2 py-1">
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
  <slot />
  <Footer />
</template>
