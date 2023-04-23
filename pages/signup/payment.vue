<script lang="ts" setup>
definePageMeta({
  layout: "signup",
});

const processingA = ref(false);
const processingB = ref(false);
const succ = ref(false);

const successA = () => {
  try {
    window.setTimeout(() => {}, 1000);
  } finally {
    processingA.value = true;
    succ.value = true;
    window.setTimeout(() => {
      navigateTo("/");
    }, 1000);
  }
};
const successB = () => {
  try {
    window.setTimeout(() => {}, 1500);
  } finally {
    processingB.value = true;
    succ.value = true;
    window.setTimeout(() => {
      navigateTo("/");
    }, 1000);
  }
};
</script>

<template>
  <div class="flex flex-col w-full items-center min-h-screen text-[#06113C]">
    <div
      class="flex flex-col w-2/5 text-center bg-[#fbfbfb] space-y-5 m-5 px-5 py-3 rounded-lg"
    >
      <div class="p-5">
        <p class="text-base">STEP 3 OF 3</p>
      </div>

      <h1 class="text-2xl">Select your payment option</h1>
      <p>Your payment is encrypted</p>
      <div class="flex flex-col space-y-3">
        <div
          v-if="processingA === false"
          @click="successA"
          class="cursor-pointer border-2 border-[#eeeeee] p-3 hover:bg-[#eeeeee] hover:scale-110 duration-300 transition-all rounded-lg"
        >
          Credit or debit card
        </div>

        <div
          v-else
          @click="successA"
          class="flex text-center cursor-pointer border-2 border-[#eeeeee] p-3 hover:bg-[#eeeeee] hover:scale-110 duration-300 transition-all rounded-lg"
        >
          <p class="grow">Credit or debit card</p>
          <Spinner />
        </div>

        <div
          v-if="processingB === false"
          @click="successB"
          class="cursor-pointer border-2 border-[#eeeeee] p-3 hover:bg-[#eeeeee] hover:scale-110 duration-300 transition-all rounded-lg"
        >
          Pay with Ozow
        </div>

        <div
          v-else
          @click="successB"
          class="flex text-center cursor-pointer border-2 border-[#eeeeee] p-3 hover:bg-[#eeeeee] hover:scale-110 duration-300 transition-all rounded-lg"
        >
          <p class="grow">Pay with Ozow</p>
          <Spinner />
        </div>
        <div
          v-if="processingA || processingB"
          class="w-full bg-green-500 text-white"
        >
          Payment Successfull
        </div>
      </div>
    </div>
  </div>
</template>
