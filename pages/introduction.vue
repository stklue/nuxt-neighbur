<script lang="ts" setup>
import { useGetStartedStore, usePaymentStore } from '~~/stores/getStarted';
import { useUserStore } from '~~/stores/user';

definePageMeta({
  layout: "default"
})

const store = useGetStartedStore()
const { getEmail, updateEmail } = useUserStore()
// const {  updateEmail } = store
const em = ref(getEmail().value)



function handleSubmit() {
  if (em.value.length > 0) {
    updateEmail(em.value)
    navigateTo('/signup/regform')
  } else {
    alert("Email field cannot be empty");
  }

}
</script>

<template>
  <div>
    <section class="flex flex-col min-h-screen lg:min-h-screen bg-[#06113C]">
      <Navbar />
      <div class="flex w-4/5 min-h-screen  justify-center  mx-auto mt-10">
        <div class="flex flex-col  space-y-10 space-x-2 pt-20  px-10">
          <h2 class="text-4xl font-semibold text-[#FFFFFF]">
            neighbur is a place where you can rely on your fellow students
          </h2>
          <div>
            <form @submit.prevent="handleSubmit" class="flex space-x-3 justify-start h-12 w-full">
              <div class="flex-grow">
                <input placeholder="Enter email" type="email" name="email" id="emal" v-model="em"
                  class="bg-[#06113C] border-2 w-full border-[#EEEEEE] rounded-lg text-[#fefefe]  p-5  focus:outline-none" />
              </div>
              <div>
                <button class="bg-[#FF8C32] text-[#06113c] p-5 rounded-lg">
                  Get Started
                </button>
              </div>
            </form>

          </div>
        </div>
        <div class="w-full h-full ">
          <img src="/intro/stud-dance.png" alt="students dancing" />
        </div>
      </div>
    </section>
    <section class="flex flex-col  min-h-screen lg:min-h-screen">
      <div class="flex flex-col w-4/5 mx-auto">
        <div class="flex justify-center space-x-4 px-5">
          <div class="flex justify-center  items-center w-1/2 pl-10">
            <h2 class="text-3xl text-[#06113C]">
              Buy meals or portions from students next door 😋
            </h2>
          </div>
          <div class="w-1/2 h-2/3">
            <img src=/intro/food-intro.png alt="student cooking" />
          </div>
        </div>
      </div>
    </section>
    <section class="flex flex-col min-h-screen lg:min-h-screen bg-[#EEEEEE]">
      <div class="flex flex-col w-4/5 mx-auto">
        <div class="flex justify-center space-x-4 px-5">
          <div class="flex justify-center  items-center w-1/2 pl-10">
            <h2 class="text-3xl text-[#06113C]">
              Catchup with quick summary videos your peers made😎
            </h2>
          </div>
          <div class="w-1/2 h-1/3">
            <img src=/intro/video-intro.png alt="student cooking" />
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>