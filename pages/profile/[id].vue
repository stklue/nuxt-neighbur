<script setup lang="ts">
import { Product, User, emptyUser } from "~~/data/types";



const user: Ref<User> = ref(emptyUser);
const prods: Ref<Product[]> = ref([]);
const route = useRoute();

watch(
  () => route.params.id,
  async (_id) => {
    const { data:profile } = await useFetch(`/api/users/${_id}`);
    const { data:products } = await useFetch(`/api/product/user?id=${_id}`);
    user.value = profile.value as unknown as User;
    prods.value = products.value as unknown as Product[];
  },
  { deep: true, immediate: true }
);

definePageMeta({
  middleware: "auth",
  layout: "index",
});

useHead({
  title: "Profile",
  meta: [{ name: "description", content: "neighbur food" }],
});
</script>
<template>
  <div class="bg-gray-100 min-h-screen">
    <div class="w-full text-white bg-main-color">
      <div
        x-data="{ open: false }"
        class="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8"
      >
        <div class="p-4 flex flex-row items-center justify-between">
          <a
            href="#"
            class="text-lg font-semibold tracking-widest uppercase rounded-lg focus:outline-none focus:shadow-outline"
            >example profile</a
          >
          <button
            class="md:hidden rounded-lg focus:outline-none focus:shadow-outline"
            @click="open = !open"
          >
            <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
              <path
                x-show="!open"
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
              <path
                x-show="open"
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <!-- End of Navbar -->

    <div class="container mx-auto my-5 p-5">
      <div class="md:flex no-wrap md:-mx-2">
        <!-- Left Side -->
        <div class="w-full md:w-3/12 md:mx-2">
          <!-- Profile Card -->
          <div class="bg-white p-3 border-t-4 border-[#06113c]">
            <div class="image overflow-hidden">
             
            </div>
            <h1 class="text-[#06113c] font-bold text-xl leading-8 my-1">
              {{ user.name }}
            </h1>
            <h3 class="text-gray-600 font-lg text-semibold leading-6">
              Not active cooker
            </h3>
            <p class="text-sm text-gray-500 hover:text-gray-600 leading-6">
              Other interesting stuff
            </p>
            <ul
              class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm"
            >
              <li class="flex items-center py-3">
                <span>Status</span>
                <span class="ml-auto">
                  <span
                    v-if="user.online"
                    class="bg-green-500 py-1 px-2 rounded text-white text-sm"
                    >Online</span
                  >
                  <span
                    v-else
                    class="bg-red-500 py-1 px-2 rounded text-white text-sm"
                    >Offline</span
                  >
                </span>
              </li>
              <li class="flex items-center py-3">
                <span>Last active</span>
                <span class="ml-auto">Apr 16, 2023</span>
              </li>
            </ul>
          </div>
          <!-- End of profile card -->
          <div class="my-4"></div>
          <div class="bg-white p-3 border-t-4 border-[#06113c]">
           
            <h1 class="text-[#06113c] font-bold text-xl leading-8 my-1">
              History
            </h1>
            <h3 class="text-gray-600 font-lg text-semibold leading-6">
              Not active cooker
            </h3>
            <p class="text-sm text-gray-500 hover:text-gray-600 leading-6">
              Other interesting stuff
            </p>
            
          </div>
          <div class="my-4"></div>

        </div>
        <!-- Right Side -->
        <div class="w-full md:w-9/12 mx-2 h-64">
          <!-- Profile tab -->
          <!-- About Section -->
          <div class="bg-white p-3 shadow-sm rounded-sm">
            <div
              class="flex items-center space-x-2 font-semibold text-[#06113c] leading-8"
            >
              <span clas="text-green-500">
                <svg
                  class="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </span>
              <span class="tracking-wide">About</span>
            </div>
            <div class="text-gray-700">
              <div class="grid md:grid-cols-2 text-sm">
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Name</div>
                  <div class="px-4 py-2">{{ user.name }}</div>
                </div>

                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Residence</div>
                  <div class="px-4 py-2">{{ user.location }}</div>
                </div>

                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Email.</div>
                  <div class="px-4 py-2">
                    <a class="text-blue-800" href="mailto:jane@example.com">{{
                      user.email
                    }}</a>
                  </div>
                </div>
              </div>
            </div>
            <button
              class="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4"
            >
              Show Full Information
            </button>
          </div>
          <!-- End of about section -->

          <div class="my-4"></div>

          <!-- Experience and education -->
          <div class="bg-white p-3 shadow-sm rounded-sm">
            <div class="grid grid-cols-2">
              <div>
                <div
                  class="flex items-center space-x-2 font-semibold text-[#06113c] leading-8 mb-3"
                >
                  <span clas="text-green-500">
                    <svg
                      class="h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </span>
                  <span class="tracking-wide">Requests</span>
                </div>
                <ul v-if="user.requests !== undefined" class="list-inside space-y-2">
                  <li v-for="req in user.requests" :key="req.id">
                    <div class="text-teal-600">Owner at Her Company Inc.</div>
                    <div class="text-gray-500 text-xs">March 2020 - Now</div>
                  </li>
                </ul>
                <div v-else class="text-[#FF8C32]">No requests received yet</div>
              </div>
              
            </div>
            <!-- End of Experience and education grid -->
          </div>
          <!-- End of profile tab -->
        </div>
      </div>
    </div>
  </div>
</template>
