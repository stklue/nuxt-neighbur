<script lang="ts" setup>
const emit = defineEmits(["showModal", "logout"]);
</script>

<template>
  <div
  @click="emit('showModal')"
    class="absolute top-0 right-0 w-full h-screen bg-[#06113C]/95 text-white"
  >
    <div class="bg-gray-900 justify-end">
      <svg
        class="self-end"
        @click="emit('showModal')"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <path
          fill="#888888"
          d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
        />
      </svg>
    </div>

    <div class="flex space-y-5 pt-5 pl-2 items-start flex-col h-full">
      <NuxtLink
      @click="emit('showModal')"
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
      @click="emit('showModal')"
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
      @click="emit('showModal')"
        to="/order/all"
        class="group transition-all duration-300 ease-in-out"
      >
        <span
          class="mx-2 cursor-pointer text-base font-semibold bg-left-bottom bg-gradient-to-r from-[#FF8C32] to-[#FF8C32] bg-[length:0%_3px] bg-no-repeat group-hover:bg-[length:100%_3px] transition-all duration-500 ease-out"
        >
          orders
        </span>
      </NuxtLink>

      <div class="group transition-all duration-300 ease-in-out">
        <span
          @click="emit('logout')"
          class="mx-2 cursor-pointer text-base font-semibold bg-left-bottom bg-gradient-to-r from-[#FF8C32] to-[#FF8C32] bg-[length:0%_3px] bg-no-repeat group-hover:bg-[length:100%_3px] transition-all duration-500 ease-out"
        >
          logout
        </span>
      </div>
    </div>
  </div>
</template>
