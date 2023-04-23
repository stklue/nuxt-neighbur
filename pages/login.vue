<script setup lang="ts">
import { usePaymentStore } from "~~/stores/getStarted";

definePageMeta({
  layout: "signup",
});

const authClient = useSupabaseAuthClient();

const email = ref("");
const password = ref("");

// Login method using providers
const login = async () => {
  const { error } = await authClient.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  });
  if (error) {
    return alert( error.message);
  }
  navigateTo("/");
};
</script>
<template>
  <div class="w-full min-h-screen max-w-xs mx-auto my-5">
    <form
      @submit.prevent="login"
      class="bg-[#EEEEEE] shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <div class="mb-4">
        <label class="block text-[#06113C] text-sm mb-2" for="email">
          Email
        </label>
        <input
          placeholder="Enter email"
          v-model="email"
          type="email"
          name="email"
          id="emal"
          class="bg-[#EEEEEE] border-b-2 flex-grow border-[#06113C] text-[#06113C] pl-2 focus:outline-none"
        />
      </div>
      <div class="mb-6">
        <label class="block text-[#06113C] text-sm mb-2" for="password">
          Password
        </label>
        <input
          placeholder="Enter password"
          v-model="password"
          type="password"
          name="password"
          id="password"
          autocomplete="on"
          class="bg-[#EEEEEE] border-b-2 flex-grow border-[#06113C] text-[#06113C] pl-2 focus:outline-none"
        />
      </div>
      <div class="flex flex-col">
        <button
          type="submit"
          class="w-full bg-[#FF8C32] text-[#06113c] px-3 py-2 rounded-lg"
        >
          login
        </button>
      </div>
    </form>
  </div>
</template>
