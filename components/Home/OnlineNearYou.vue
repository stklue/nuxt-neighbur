<script lang="ts" setup>
import { Product, Student as student } from "~~/data/types";
import type { RealtimeChannel } from "@supabase/supabase-js";
import { useUserStore } from "~~/stores/user";

const client = useSupabaseClient();
let realtimeChannel: RealtimeChannel;
// Fetch collaborators and get the refresh method provided by useAsyncData

const { user } = useUserStore();

type ProductUser = Product & {
  Student: student;
};

const productUsers: Ref<ProductUser[]> = ref([]);

const f = (date: string) => {
  return useDateFormat(date, "YYYY-MM-DD HH:mm:ss").value.toString();
};

const { data: students, pending } = await useAsyncData(
  "ProductStudent",
  async () => {
    console.log("Student location: ", user().location);
    
    const { data: products } = await client
      .from("Product")
      .select("*, Student(*)")
      .neq("creator", user().id)
      .eq("Student.online", true)
      .eq("Student.location", user().location);
    return products as ProductUser[];
  }
);
productUsers.value = students.value?.filter((x) => x.Student) ?? [];



// Once page is mounted, listen to changes on the `Student` table and refresh students when receiving event
onMounted(() => {
  // Real time listener for new workouts
  realtimeChannel = client
    .channel("public:Student")
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "Student" },
      async () => {
        const { data: students, pending } = await useAsyncData(
          "ProductStudent",
          async () => {
            const { data: products } = await client
              .from("Product")
              .select("*, Student(*)")
              .neq("creator", user().id)
              .eq("Student.online", true)
              .eq("Student.location", user().location);
            return products as ProductUser[];
          }
        );
        productUsers.value = students.value?.filter((x) => x.Student) ?? [];
      }
    );
  realtimeChannel.subscribe();
});

// Don't forget to unsubscribe when user left the page
onUnmounted(() => {
  client.removeChannel(realtimeChannel);
});
</script>

<template>
  <section
    class="flex min-h-screen flex-col w-full pt-5 px-6 lg:px-12 space-x-4 text-[#06113C]"
  >
    <div class="ml-4 mt-4 inline-flex space-x-4">
      <h1 class="text-lg lg:text-2xl font-semibold">
        Currently cooking near you
      </h1>
      <img class="w-10 h-10" src="~~/cooking.gif" />
    </div>
    <div v-if="productUsers.length > 0">
      <div v-if="pending">Loading</div>
      <div v-else class="flex flex-col lg:flex-row mb-6">
        <div
          class="w-52 m-4 flex-wrap"
          v-for="productUser in productUsers"
          :id="String(productUser.Student.id)"
        >
          <NuxtLink :to="'product/' + productUser.id">
            <div
              class="bg-orange-200 flex flex-wrap flex-col w-full h-full p-4 rounded-lg hover:scale-110 hover:shadow-lg transition-all ease-in-out duration-500 cursor-pointer"
            >
              <div class="flex space-x-2 mb-2">
                <div class="h-10 w-10 rounded-md">
                  <HomeChefIcon />
                </div>
                <div class="inline-flex justify-between w-full space-x-4">
                  <h2>{{ productUser.Student.name }}</h2>
                  <OrderOnlineGlow :online="productUser.Student.online" />
                </div>
              </div>
              <div>
                <h2 class="font-semibold">R{{ productUser.price }}</h2>
              </div>
              <div>
                <h2 class="font-light">{{ productUser.Student.location }}</h2>
              </div>
              <div>
                <h2 class="font-normal text-sm">
                  {{ f(productUser.created_at!) }}
                </h2>
              </div>
              <div class="py-2">
                <div class="w-full h-full rounded-lg bg-gray-100 p-2">
                  {{ productUser.description }}
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
