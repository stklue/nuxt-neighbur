<script lang="ts" setup>
import { residences } from "~~/data/res";
import { Student } from "~~/data/types";
import { useUserStore } from "~~/stores/user";
import { Database } from "~~/types/supabase";

definePageMeta({
  layout: "signup",
});

const { user, newUser } = useUserStore();
const password: Ref<string> = ref("");
const conPassword = ref("");
const email: Ref<string | undefined> = ref(user().email);
const username = ref("");
const residence = ref("Choose your residence");
const authClient = useSupabaseAuthClient();
const client = useSupabaseClient<Database>();

const signUp = async () => {
  const { error } = await authClient.auth.signUp({
    email: email.value!,
    password: password.value,
  });

  if (error) {
    console.log(error);
    return alert("Something went wrong !");
  }

  if (
    email.value &&
    password.value.length > 0 &&
    password.value === conPassword.value &&
    residence.value !== "Choose your residence"
  ) {
    const userResponse = await authClient.auth.getUser();

    if (userResponse.data.user) {
      const u = {
        user_id: userResponse.data.user.id,
        name: username.value,
        location: residence.value,
        subscription: 0,
        online: true,
      };
      newUser({
        user_id: userResponse.data.user.id,
        online: true,
        name: username.value,
        subscription: 0,
        location: residence.value,
      } as Student);

      await useAsyncData("User", async () => {
        const { error } = await client.from("Student").insert(u);
        if (error === null) {
          navigateTo("/signup/subscription");
        }
        console.log("Error, Inserting", error);
      });
    }
  } else {
    alert("Error: Fields are either empty or passwords does not match.");
  }
};
</script>

<template>
  <div class="min-h-screen w-full md:w-3/5 mx-auto my-5">
    <div class="flex justify-center p-5">
      <h3 class="text-[#06113C] text-lg">STEP 1 OF 3</h3>
    </div>
    <form
      @submit.prevent="signUp"
      class="bg-[#EEEEEE] shadow-md rounded px-8 pt-6 pb-8 mb-4 w-4/5 md:w-2/3 mx-auto"
    >
      <div class="mb-4">
        <p class="text-black"></p>
        <label class="block text-[#06113C] text-sm mb-2" for="email">
          Email
        </label>
        <input
          placeholder="Enter email"
          type="email"
          name="email"
          id="email"
          v-model="email"
          class="bg-[#EEEEEE] border-b-2 flex-grow border-[#06113C] text-[#06113C] pl-2 focus:outline-none w-full"
        />
      </div>
      <div class="mb-4">
        <label class="block text-[#06113C] text-sm mb-2" for="name">
          Name
        </label>
        <input
          placeholder="Enter name"
          name="name"
          id="name"
          v-model="username"
          class="bg-[#EEEEEE] border-b-2 flex-grow border-[#06113C] text-[#06113C] pl-2 focus:outline-none w-full"
        />
      </div>
      <div class="mb-4">
        <label
          for="countries"
          class="block mb-2 text-sm font-medium text-[#06113C]"
          >Select your residence</label
        >
        <select
          id="countries"
          v-model="residence"
          class="bg-gray-50 border border-gray-300 text-[#06113C] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option disabled selected>{{ residence }}</option>
          <option :key="res" v-for="res in residences">{{ res }}</option>
        </select>
      </div>
      <div class="mb-6">
        <label class="block text-[#06113C] text-sm mb-2" for="password">
          Password
        </label>
        <input
          placeholder="Enter password"
          type="password"
          name="password"
          id="password"
          v-model="password"
          autocomplete="on"
          class="bg-[#EEEEEE] border-b-2 flex-grow border-[#06113C] text-[#06113C] pl-2 focus:outline-none w-full"
        />
      </div>
      <div class="mb-6">
        <label class="block text-[#06113C] text-sm mb-2" for="confpassword">
          Confirm Password
        </label>
        <input
          placeholder="Confirm password"
          type="password"
          name="confpassword"
          id="confpassword"
          v-model="conPassword"
          autocomplete="on"
          class="bg-[#EEEEEE] border-b-2 flex-grow border-[#06113C] text-[#06113C] pl-2 focus:outline-none w-full"
        />
      </div>
      <div class="flex flex-col">
        <button
          type="submit"
          class="w-full bg-[#FF8C32] text-[#06113c] px-3 py-2 rounded-lg"
        >
          Next
        </button>
      </div>
    </form>
  </div>
</template>
