<script lang="ts" setup>
import { useGetStartedStore, usePaymentStore } from '~~/stores/getStarted';

definePageMeta({
    layout: "signup"
})

const store = usePaymentStore()

const {payed} = store
const success = () => {
    payed()
    navigateTo("/")
}
</script>

<template>
    <div class="flex flex-col w-full items-center  min-h-screen text-[#06113C]">
        <div class="flex flex-col w-2/5 text-center bg-[#fbfbfb] space-y-5 m-5 px-5 py-3 rounded-lg">
            <div class="p-5">
                <p class=" text-base">STEP 3 OF 3</p>
            </div>

            <h1 class="text-2xl">Select your payment option</h1>
            <p >Your payment is encrypted</p>
            <div class="flex flex-col space-y-3">
                <div
                @click="success"
                    class="cursor-pointer border-2 border-[#eeeeee] p-3 hover:bg-[#eeeeee] hover:scale-110 duration-300 transition-all rounded-lg">
                    Credit or debit card</div>
                <div
                @click="success"
                    class="cursor-pointer border-2 border-[#eeeeee] p-3 hover:bg-[#eeeeee] hover:scale-110 duration-300 transition-all rounded-lg">
                    Pay with Ozow</div>
            </div>
        </div>
</div></template>
