<script lang="ts" setup>
definePageMeta({
    layout: "default"
})
</script>

<template>
  <div>
    <section class="flex flex-col min-h-screen lg:min-h-screen bg-[#06113C]">
      <nav class="flex justify-between items-center px-14 cursor-pointer text-sm text-[#DDDDDD] h-12 ">
        <NuxtLink class="text-lg font-bold" to="/">neighbur</NuxtLink>
        <NuxtLink to="/login" class='group transition-all duration-300 ease-in-out' href='#'>
          <span
            class='bg-left-bottom bg-gradient-to-r from-[#FF8C32] to-[#FF8C32] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
            login
          </span>
        </NuxtLink>
      </nav>
      <div class="flex flex-col">
        <div class="flex justify-center space-x-4 px-5">
          <div class="flex flex-col  space-y-10 w-1/2 pl-10 my-14">
            <h2 class="text-3xl text-[#FFFFFF]">
              neighbur is a place where you can rely on your fellow students
            </h2>
            <div class="flex space-x-3 justify-start h-12 w-full">
              <input placeholder="Enter email" type="email" name="email" id="emal"
                class="bg-[#06113C] border-2 flex-grow border-[#EEEEEE] rounded-lg text-[#fefefe]  pl-2 focus:outline-none" />
              <NuxtLink v-slot="{ navigate }" to="/signup/regform">
                <button @click="navigate" class="bg-[#FF8C32] text-[#06113c] px-3 py-2 rounded-lg">
                  Get Started
                </button>
              </NuxtLink>
            </div>
          </div>
          <div class="w-1/2 h-1/3">
            <img src="/intro/stud-dance.png" alt="students dancing" />
          </div>
        </div>
      </div>
    </section>
    <section class="flex flex-col min-h-screen lg:min-h-screen">
      <div class="flex flex-col">
        <div class="flex justify-center space-x-4 px-5">
          <div class="flex justify-center  items-center w-1/2 pl-10">
            <h2 class="text-3xl text-[#06113C]">
              Buy meals or portions from students next door 😋
            </h2>
          </div>
          <div class="w-1/2 h-1/3">
            <img src=/intro/food-intro.png alt="student cooking" />
          </div>
        </div>
      </div>
    </section>
    <section class="flex flex-col min-h-screen lg:min-h-screen bg-[#EEEEEE]">
      <div class="flex flex-col">
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
  </div>
</template>