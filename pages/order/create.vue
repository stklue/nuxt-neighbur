<script setup lang="ts">
definePageMeta({
  middleware: "auth",
  layout: "index",
});
</script>

<template>
  <div class="min-h-screen flex flex-col pt-20">
    <form class="mx-auto py-5">
      <div class="space-y-12">
        <div class="border-b border-gray-900/10 pb-12">
          <h2 class="text-2xl font-semibold leading-7">Create new order</h2>
          <p class="mt-1 text-sm leading-6 text-gray-600">
            This information will be displayed publicly so be careful what you
            share.
          </p>

          <div class="flex flex-col mt-10 space-y-4">
            <div class="sm:col-span-4">
              <label
                for="username"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Name</label
              >
              <div class="mt-2 flex rounded-md shadow-sm sm:max-w-md">
                <input
                  v-model="productName"
                  type="text"
                  name="name"
                  id="name"
                  class="block flex-1 border-0 bg-transparent py-1.5 pl-1 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  placeholder="Product Name"
                />
              </div>
            </div>
            <div class="sm:col-span-4">
              <label for="price" class="block text-sm font-medium leading-6"
                >Price</label
              >
              <div
                class="mt-2 flex rounded-md shadow-sm ring-gray-300 sm:max-w-md"
              >
                <input
                  v-model="price"
                  type="number"
                  name="price"
                  id="price"
                  class="w-1/6 flex-1 border-0 bg-transparent py-1.5 pl-1 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  placeholder="Price"
                />
              </div>
            </div>

            <div class="col-span-full">
              <label
                for="description"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Description</label
              >
              <div class="mt-2">
                <textarea
                  v-model="description"
                  id="description"
                  name="description"
                  rows="3"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                ></textarea>
              </div>
            </div>
            <div class="sm:col-span-4">
              <label for="price" class="block text-sm font-medium leading-6"
                >Plate</label>
                <span class="block text-sm  leading-6">A number representing a full plate or a portion of it</span>
              <div
                class="mt-2 flex rounded-md shadow-sm ring-gray-300 sm:max-w-md"
              >
                <input
                  v-model="plate"
                  type="number"
                  name="plate"
                  id="plate"
                  class="w-1/6 flex-1 border-0 bg-transparent py-1.5 pl-1 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  placeholder="Plate: 0.25, 0.5, 1(full)"
                />
              </div>
            </div>
            <div class="sm:col-span-4">
              <label for="price" class="block text-sm font-medium leading-6"
                >Available</label>
                <span class="block text-sm  leading-6">How many (in plates) will you make?</span>
              <div
                class="mt-2 flex rounded-md shadow-sm ring-gray-300 sm:max-w-md"
              >
                <input
                  v-model="available"
                  type="number"
                  name="available"
                  id="available"
                  class="w-1/6 flex-1 border-0 bg-transparent py-1.5 pl-1 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  placeholder="Available"
                />
              </div>
            </div>
            <div class="col-span-full">
              <label
                for="photo"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Product Photo</label
              >
              <div class="mt-2 flex items-center gap-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#888888"
                    d="M18.06 22.99h1.66c.84 0 1.53-.64 1.63-1.46L23 5.05h-5V1h-1.97v4.05h-4.97l.3 2.34c1.71.47 3.31 1.32 4.27 2.26c1.44 1.42 2.43 2.89 2.43 5.29v8.05zM1 21.99V21h15.03v.99c0 .55-.45 1-1.01 1H2.01c-.56 0-1.01-.45-1.01-1zm15.03-7c0-8-15.03-8-15.03 0h15.03zM1.02 17h15v2h-15z"
                  />
                </svg>
                <button
                  type="button"
                  class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Change
                </button>
              </div>
            </div>

            <div class="col-span-full">
              <div
                class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10"
              >
                <div class="text-center">
                  <svg
                    class="mx-auto h-12 w-12 text-gray-300"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <div class="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      for="file-upload"
                      class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        class="sr-only"
                      />
                    </label>
                    <p class="pl-1">or drag and drop</p>
                  </div>
                  <p class="text-xs leading-5 text-gray-600">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="border-b border-gray-900/10 pb-12">
          <h2 class="text-base font-semibold leading-7 text-gray-900">
            Recurring 
          </h2>
          <p class="mt-1 text-sm leading-6 text-gray-600">
            Will this dish recur
          </p>

          <div class="mt-2 space-y-2">
            <fieldset>
              <div class="mt-6 space-y-6">
                <div class="relative flex gap-x-3">
                  <div class="flex h-6 items-center">
                    <input
                      id="comments"
                      name="comments"
                      type="checkbox"
                      class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div class="text-sm leading-6">
                    <label for="comments" class="font-medium text-gray-900"
                      >Recurring</label
                    >
                    <p class="text-gray-500">
                      Get notified when someones posts a comment on a posting.
                    </p>
                  </div>
                </div>
              </div>
            </fieldset>
    
          </div>
        </div>
      </div>

      <div class="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          class="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <button
          type="submit"
          class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  </div>
</template>
