<script setup lang="ts">
import { Product } from '~~/data/types';
import { useCart } from "~~/stores/cart"


const { remove } = useCart() 

interface Props {
    product: Product;
}
const props = defineProps<Props>();


</script>

<template>
    <div class="flex items-center hover:bg-gray-100 mx-1 my-2 h-28 space-x-5 ">
        <!-- Image -->
        <div class="flex h-full w-1/3 lg:w-1/6 p-2">
            <img :src="props.product.image" />
        </div>

        <!-- Product details -->
        <div class="flex h-full w-2/3 lg:w-full flex-col justify-between">
            <div class="flex flex-col justify-between">
                <!-- <router-link :to="`/brand/${item.cat}/${item.id}`"> -->
                <span class="font-bold text-sm">{{ props.product.description }}</span>
                <!-- </router-link> -->
                <div class="flex space-x-5 lg:justify-start">
                    <span class="text-center font-semibold text-xs text-gray-400">R{{ props.product.price }}</span>
                    <!-- <span class="text-red-500 text-xs">{{ item.data.size }}</span> -->
                </div>
            </div>

            <!-- Incr and Decr and Trash/Remove -->
            <div class="flex justify-between pr-5">
                <div class="flex">
                    <svg class="fill-current text-gray-600 w-5 h-5 rounded-lg border-2 p-1" viewBox="0 0 448 512">
                        <path
                            d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                    </svg>

                    <span class="text-center w-8">{{ props.product.portion }}</span>

                    <svg class="fill-current text-gray-600 w-5 h-5 rounded-lg border-2 p-1" viewBox="0 0 448 512">
                        <path
                            d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                    </svg>
                </div>
                <div>
                    <a @click="remove(product)"  class="delete font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
                </div>
            </div>
        </div>
    </div>
</template>



