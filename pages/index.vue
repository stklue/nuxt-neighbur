<script setup lang="ts">
import { Student } from "~~/data/types";
import { useUserStore } from "~~/stores/user";

definePageMeta({
  middleware: "auth",
  layout: "index",
});

useHead({
  title: "neighbur | Home",
  meta: [{ name: "description", content: "neighbur food" }],
});

const { updateUser } = useUserStore();
const { data } = await useFetch("/api/user");
updateUser(data.value as unknown as Student);
</script>

<template>
  <div class="min-h-screen">
    <!-- <HomeRecentVisit /> -->
    <div class="flex flex-col">
      <HomeOnlineNearYou />
      <!-- <HomeAllNearYou/> -->
    </div>
  </div>
</template>
