<script lang="ts" setup>
import { useUserStore } from "~~/stores/user";

definePageMeta({
  layout: "default",
});

const { updateEmail } = useUserStore();
const email = ref("");

useHead({
  title: "neighbur | Introduction",
  meta: [{ name: "description", content: "neighbur food" }],
});

function handleSubmit() {
  if (email.value.length > 0) {
    updateEmail(email.value);

    navigateTo("/signup/regform");
  } else {
    alert("Email field cannot be empty");
  }
}
</script>

<template>
  <div>
    <section class="flex flex-col min-h-screen lg:min-h-screen bg-[#06113C]">
      <Navbar />
      <div
        class="flex flex-col justify-evenly md:flex-row w-full md:w-4/5 min-h-screen lg:justify-center lg:mx-auto mt-10"
      >
        <div class="flex w-full flex-col space-y-10 space-x-2 pt-10 px-10">
          <h2
            class="text-lg font-light md:text-2xl md:font-semibold text-[#FFFFFF]"
          >
            neighbur is a place where you can rely on your fellow neighbours
          </h2>
          <div>
            <form
              @submit.prevent="handleSubmit"
              class="flex flex-col md:flex-row space-x-3 md:justify-start h-12 w-full"
            >
              <div class="w-full">
                <input
                  placeholder="Enter email"
                  type="email"
                  name="email"
                  id="emal"
                  v-model="email"
                  class="bg-[#06113C] flex-grow   border-2 w-full border-[#EEEEEE] rounded-lg text-[#fefefe] p-5 focus:outline-none"
                />
              </div>
              <div class="grow-0 mt-3  md:mt-0  w-full">
                <button class="w-full bg-[#FF8C32] text-[#06113c] p-5 rounded-lg">
                  Get Started
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="h-1/2 w-1/2 flex mx-auto md:mx-0 md:flex md:w-full md:h-full">
          <img src="/intro/stud-dance.png" alt="students dancing" />
        </div>
      </div>
    </section>
    <section class="flex flex-col h-96  md:min-h-screen">
      <div class="flex flex-col md:w-4/5 mx-auto">
        <div class="flex flex-col  md:flex-row justify-center space-x-4 px-5">
          <div class="flex justify-center items-center pt-10 md:pt-0  md:w-1/2 pl-10">
            <h2 class="text-lg  md:text-3xl text-[#06113C]">
              Buy meals or portions from neighburs next door 😋
            </h2>
          </div>
          <div class="w-1/2 h-2/3">
            <img src=/intro/food-intro.png alt="student cooking" />
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>
