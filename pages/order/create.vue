<script setup lang="ts">
import { Product, Student, emptyUser } from "~~/data/types";
import { useUserStore } from "~~/stores/user";
import { Database } from "~~/types/supabase";

definePageMeta({
  middleware: "auth",
  layout: "index",
});
const { data: userData } = await useFetch("/api/user");
const user: Ref<Student> = ref(emptyUser);

user.value = userData.value as unknown as Student;
const client = useSupabaseClient<Database>();
const supaUser = useSupabaseUser();

const dropzoneFile: Ref<File | undefined | null> = ref();
const uploaded = ref(false);
const drop = (e: DragEvent) => {
  dropzoneFile.value = e.dataTransfer?.files[0];
  uploaded.value = true;
};
const selectedFile = () => {
  const element = document.querySelector<HTMLInputElement>(".dropzoneFile");
  if (element !== null) {
    if (element.files !== null) {
      dropzoneFile.value = element.files[0];
      uploaded.value = true;
    }
  }
};

const saveImage = async () => {
  const { data: dataPath, error } = await client.storage
    .from("product")
    .upload(
      `${supaUser.value?.id}/${dropzoneFile.value?.name}`,
      dropzoneFile.value!,
      {
        cacheControl: "3600",
        upsert: true,
      }
    );

  if (error) {
    return alert("Storage upload: " + error.message);
  }
  const { data } = client.storage.from("product").getPublicUrl(dataPath.path);
  return data.publicUrl;
};

const validateFields = (): boolean => {
  if (
    productName.value !== "" &&
    dropzoneFile.value !== null &&
    available.value > 0 &&
    plate.value > 0 &&
    description.value !== ""
  ) {
    return true;
  }
  return false;
};

const insert = async (product: Product) => {
  await useAsyncData("Product", async () => {
    const { error } = await client.from("Product").insert(product);
    if (error) {
      return alert("Product insert: " + error.message);
    }
    alert("Product created successfully");
    navigateTo("/order/dashboard");
  });
};

const saveProduct = async () => {
  if (validateFields()) {
    const imagePath = await saveImage();
    if (imagePath) {
      image.value = imagePath;
      const product: Product = {
        pname: productName.value,
        available: available.value,
        plate: plate.value,
        description: description.value,
        recurring: recur.value,
        type: type.value,
        image: image.value,
        price: price.value,
        creator: user.value.id,
      };
      await insert(product);
    }
    return;
  }
  return alert("Make sure all the fields are filled in.");
};

/* Frorm Data */
const productName = ref("");
const price = ref(0);
const description = ref("");
const recur = ref(false);
const image = ref("");
const plate = ref(0);
const available = ref(0);
const type = ref("");
</script>

<template>
  <div class="min-h-screen flex flex-col pt-20 text-[#06113C] px-5">
    <form @submit.prevent="saveProduct" class="mx-auto py-5">
      <div class="space-y-12">
        <div class="border-b border-gray-900/10 pb-12">
          <h2 class="text-2xl font-semibold leading-7">Create new order</h2>
          <p class="mt-1 text-sm leading-6 text-gray-600">
            This information will be displayed publicly so be careful what you
            share.
          </p>

          <div class="flex flex-col mt-10 space-y-4">
            <div class="sm:col-span-4">
              <label for="username" class="block text-sm font-medium leading-6"
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
                class="block text-sm font-medium leading-6"
                >Description</label
              >
              <div class="mt-2">
                <textarea
                  v-model="description"
                  id="description"
                  name="description"
                  rows="3"
                  class="block w-full rounded-md border-0 py-1.5 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
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
            <OrderDropZone
              @drop.prevent="drop"
              @change="selectedFile"
              :uploaded="uploaded"
            />
            <span v-if="dropzoneFile">File: {{ dropzoneFile.name }}</span>
            <span v-else>No file selected</span>
          </div>
        </div>

        <div class="border-b border-gray-900/10 pb-12">
          <div class="mt-2 space-y-2">
            <fieldset>
              <div class="mt-2 space-y-4">
                <div class="relative flex gap-x-3">
                  <div class="flex h-6 items-center">
                    <input
                      v-model="recur"
                      id="recur"
                      name="recur"
                      type="checkbox"
                      class="h-4 w-4 rounded border-gray-300"
                    />
                  </div>
                  <div class="text-sm leading-6">
                    <label for="recur" class="font-medium">Recurring</label>
                    <p class="text-gray-500">
                      Is this a recurring dish/product
                    </p>
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <legend class="text-sm font-semibold leading-6 text-gray-900">
                Food type
              </legend>
              <p class="mt-1 text-sm leading-6 text-gray-600">
                Freshly made or last night left overs.
              </p>
              <div class="mt-2 space-y-2">
                <div class="flex items-center gap-x-3">
                  <input
                    value="fresh"
                    v-model="type"
                    id="fresh"
                    name="fresh"
                    type="radio"
                    class="h-4 w-4 border-gray-300 focus:ring-indigo-600"
                  />
                  <label for="fresh" class="block text-sm font-medium leading-6"
                    >Fresh</label
                  >
                </div>
                <div class="flex items-center gap-x-3">
                  <input
                    value="leftovers"
                    v-model="type"
                    id="leftovers"
                    name="leftovers"
                    type="radio"
                    class="h-4 w-4 border-gray-300 focus:ring-indigo-600"
                  />
                  <label
                    for="leftovers"
                    class="block text-sm font-medium leading-6"
                    >Left Overs</label
                  >
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>

      <div class="mt-6 flex items-center justify-end gap-x-6">
        <!-- <button type="button" class="text-sm font-semibold leading-6">
          Cancel
        </button> -->
        <button
          type="submit"
          class="rounded-lg px-3 py-2 bg-[#06113C] text-white text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Create Product
        </button>
      </div>
    </form>
  </div>
</template>
