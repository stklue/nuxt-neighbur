<script lang="ts" setup>
import { Database } from "~~/types/supabase";

definePageMeta({
  layout: "signup",
});

const client = useSupabaseClient<Database>();
const authClient = useSupabaseAuthClient<Database>();
const user = (await authClient.auth.getUser()).data.user;


const subscriptionChoice = ref(-1);
const onSubSelect = (i: number) => {
  subscriptionChoice.value = i;
};

const checkSelection = async () => {
  if (subscriptionChoice.value == -1) {
    alert("Please choose a subscription option");
    return;
  }

  await useAsyncData("Student", async () => {
    const { error } = await client
      .from("Student")
      .update({ subscription: subscriptionChoice.value })
      .match({ user_id: user?.id });
    if (error !== null) {
      return alert(error?.message);
    }
    navigateTo("/signup/payment");
  });
};
</script>

<template>
  <div class="flex flex-col items-center min-h-screen">
    <div class="flex flex-col bg-[#eeeeee] space-y-5 m-5 px-5 py-3 rounded-lg">
      <div class="p-5">
        <p class="text-[#06113C] text-base">STEP 2 OF 3</p>
      </div>
      <div
        class="flex items-center py-5 space-y-4 h-full flex-col lg:flex-row md:flex-row space-x-5 text-[#eeeeee] w-full justify-center"
      >
        <div
          class="flex ml-4 mt-3 flex-col flex-wrap flex-1 shadow-md h-full bg-[#06113C] hover:scale-105 hover:shadow-lg transition-all ease-in-out duration-500 rounded-lg"
        >
          <p
            v-if="subscriptionChoice === 1"
            class="text-lg pl-8 pt-4 text-[#FF8C32] font-semibold"
          >
            1 month ✅
          </p>
          <p v-else class="text-lg pl-8 pt-4 text-[#FF8C32] font-semibold">
            1 month
          </p>
          <p class="text-md pl-8 font-light">Get the first month free</p>
          <div class="p-8">
            <div class="flex space-x-1">
              <span class="text-xs font-light">R</span>
              <h2 class="text-3xl">FREE</h2>
            </div>
            <hr
              class="w-48 h-1 mx-auto my-2 bg-gray-100 border-0 rounded md:my-5 dark:bg-gray-700"
            />
            <div>
              <li class="text-sm tracking-tight">No order requests</li>
              <div class="h-5 w-full"></div>
              <li class="text-sm tracking-tight">
                Only access to your location
              </li>
            </div>
          </div>
          <button
            @click="onSubSelect(1)"
            class="m-4 p-2 border-1 bg-[#dddddd] text-[#06113C] rounded-lg"
          >
            Select
          </button>
        </div>
        <div
          class="flex flex-col flex-wrap flex-1 shadow-md h-full bg-[#06113C] hover:scale-105 hover:shadow-lg transition-all ease-in-out duration-500 rounded-lg"
        >
          <p
            v-if="subscriptionChoice === 2"
            class="text-lg pl-8 pt-4 text-[#FF8C32] font-semibold"
          >
            6 Months ✅
          </p>
          <p v-else class="text-lg pl-8 pt-4 text-[#FF8C32] font-semibold">
            6 Months
          </p>
          <p class="text-md pl-8 font-light">subscription</p>
          <div class="p-8">
            <div class="flex space-x-1">
              <span class="text-xs font-light">R</span>
              <h2 class="text-3xl">50</h2>
              <span class="flex text-xs items-end pl-1 font-light"
                >/per month</span
              >
            </div>
            <hr
              class="w-48 h-1 mx-auto my-2 bg-gray-100 border-0 rounded md:my-5 dark:bg-gray-700"
            />
            <div>
              <li class="text-sm tracking-tight">Get 5 order request</li>
              <li class="text-sm tracking-tight">
                Get access to 2 other locations
              </li>
            </div>
          </div>
          <button
            @click="onSubSelect(2)"
            class="m-4 p-2 border-1 bg-[#dddddd] text-[#06113C] rounded-lg"
          >
            Select
          </button>
        </div>
        <div
          class="flex flex-col flex-wrap flex-1 shadow-md h-full bg-[#06113C] hover:scale-105 hover:shadow-lg transition-all ease-in-out duration-500 rounded-lg"
        >
          <p
            v-if="subscriptionChoice === 3"
            class="text-lg pl-8 pt-4 text-[#FF8C32] font-semibold"
          >
            12 Months ✅
          </p>
          <p v-else class="text-lg pl-8 pt-4 text-[#FF8C32] font-semibold">
            12 Months
          </p>
          <p class="text-md pl-8 font-light">subscription</p>
          <div class="p-8">
            <div class="flex space-x-1">
              <span class="text-xs font-light">R</span>
              <h2 class="text-3xl">100</h2>
              <span class="flex text-xs items-end pl-1 font-light"
                >/per month</span
              >
            </div>
            <hr
              class="w-48 h-1 mx-auto my-2 bg-gray-100 border-0 rounded md:my-5 dark:bg-gray-700"
            />
            <div>
              <li class="text-sm tracking-tight">
                Get unlimited order requests
              </li>
              <li class="text-sm tracking-tight">
                Get access to 5 other locations
              </li>
            </div>
          </div>
          <button
            @click="onSubSelect(3)"
            class="m-4 p-2 border-1 bg-[#dddddd] text-[#06113C] rounded-lg"
          >
            Select
          </button>
        </div>
      </div>

      <button
        @click="checkSelection"
        class="w-full bg-[#FF8C32] text-[#06113c] px-3 py-2 rounded-lg"
      >
        Next
      </button>
    </div>
  </div>
</template>
