<script setup lang="ts">
import { useCart } from "~~/stores/cart"
definePageMeta({
    middleware: "auth",
    layout: "index"
})
const { cart, getCartItems } = useCart()
</script>

<template>
    <div class="flex justify-center items-center  min-h-screen p-20">
        <div class="flex justify-center items-center space-x-5 md:w-full">
            <div class="bg-gray-100 p-4 flex flex-col w-1/3 h-40 font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span>
                    R{{ cart.total }}
                </span>
                <!-- <NuxtLink to="{ name: 'OrderConfirmation' }"> -->
                <button class="w-full px-6 py-2 my-2 text-white bg-black hover:bg-gray-900">Pay Now</button>
                <!-- </NuxtLink> -->
            </div>
        </div>
    </div>
</template>
