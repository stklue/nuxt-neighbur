<script lang="ts" steup></script>
<template>
  <footer class="bg-white dark:bg-gray-900">
    <div class="mx-auto w-full max-w-screen-xl">
      <div class="grid grid-cols-1 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
        <div>
          <h2
            class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
          >
            Company
          </h2>
          <ul class="text-gray-500 dark:text-gray-400 font-medium">
            <NuxtLink to="/about" class="mb-4">
              <p class="hover:underline">About</p>
            </NuxtLink>
          </ul>
        </div>
        <div>
          <h2
            class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
          >
            Help center
          </h2>
          <ul class="text-gray-500 dark:text-gray-400 font-medium">
            <li class="mb-4">
              <p class="hover:underline">Help Form</p>
            </li>
            <li class="mb-4">
              <p class="hover:underline">Contact us on WhatsApp</p>
            </li>
          </ul>
        </div>
        <div>
          <h2
            class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
          >
            Legal
          </h2>
          <ul class="text-gray-500 dark:text-gray-400 font-medium">
            <NuxtLink to="/privacy" class="mb-4">
              <p class="hover:underline">Privacy Policy</p>
            </NuxtLink>
            <NuxtLink to="/termsAndConditions" class="mb-4">
              <p class="hover:underline">Terms &amp; Conditions</p>
            </NuxtLink>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
