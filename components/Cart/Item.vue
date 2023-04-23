<script setup lang="ts">
import {  OrderItem, Product } from '~~/data/types';
import { useCart } from "~~/stores/cart"


const { remove } = useCart()

interface Props {
    orderItem: OrderItem;
}
const props = defineProps<Props>();


</script>

<template>
    <div class="flex items-center hover:bg-gray-100 mx-1 my-2 h-28 space-x-5 ">
        <!-- Image -->
        <div class="flex h-full w-1/3 lg:w-1/6 p-2">
            <img :src="props.orderItem.product.image" />
        </div>

        <!-- Product details -->
        <div class="flex h-full w-2/3 lg:w-full flex-col justify-between">
            <div class="flex flex-col justify-between">
                <!-- <router-link :to="`/brand/${item.cat}/${item.id}`"> -->
                <span class="font-bold text-sm">{{ props.orderItem.product.description }}</span>
                <!-- </router-link> -->
                <div class="flex space-x-5 lg:justify-start">
                    <span class="text-center font-semibold text-xs text-gray-400">R{{ props.orderItem.product.price }}</span>
                </div>
            </div>

            <!-- Incr and Decr and Trash/Remove -->
            <div class="flex justify-between pr-5">
                <div class="flex space-x-4 w-full ">
                    <p class="text-center w-8">Plate:</p>
                    <p class="text-center w-8">{{ props.orderItem.product.plate }}</p>
                </div>
                <div>
                    <a @click="remove(orderItem)"
                        class="delete font-semibold hover:text-red-500 text-gray-500 text-xs cursor-pointer">Remove</a>
                </div>
            </div>
        </div>
    </div>
</template>



