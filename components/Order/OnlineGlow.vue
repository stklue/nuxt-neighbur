<script lang="ts" setup>
interface Props {
  online?: boolean;
}
const props = defineProps<Props>();

</script>

<template>
  <div
    v-if="props.online"
    class="relative group rounded-full w-7 h-7 bg-green-500"
  >
    <div
      class="absolute -inset-1 bg-gradient-to-r from-green-600 to-green-800 rounded-full blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"
    ></div>
    <div
      class="relative bg-white ring-1 ring-gray-900/5 rounded-full leading-none flex items-top justify-start space-x-6"
    ></div>
  </div>

  <div v-else class="relative rounded-full w-7 h-7 bg-red-500">
    <div class="absolute rounded-full group-hover:opacity-100"></div>
    <div
      class="relative bg-white ring-1 ring-gray-900/5 rounded-full leading-none flex items-top justify-start space-x-6"
    ></div>
  </div>
</template>
