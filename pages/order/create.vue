<script setup lang="ts">
definePageMeta({
  middleware: "auth",
  layout: "index",
});
const dropzoneFile: Ref<File | undefined | null> = ref();

const drop = (e: DragEvent) => {
  dropzoneFile.value = e.dataTransfer?.files[0];
};
const selectedFile = () => {
  const element = document.querySelector<HTMLInputElement>(".dropzoneFile");
  if (element !== null) {
    if (element.files !== null) {
      dropzoneFile.value = element.files[0];
    }
  }
};

/* Frorm Data */
const productName = ref("");
const price = ref(0);
const description = ref("");
const recur = ref(false);
const image = ref("");
const plate = ref(0);
const available = ref(0);
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
                >Plate</label
              >
              <span class="block text-sm leading-6"
                >A number representing a full plate or a portion of it</span
              >
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
                >Available</label
              >
              <span class="block text-sm leading-6"
                >How many (in plates) will you make?</span
              >
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
            <OrderDropZone @drop.prevent="drop" @change="selectedFile" />
            <span>File: {{ dropzoneFile?.name }}</span>
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
