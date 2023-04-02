<script lang="ts" setup>
definePageMeta({
    layout: "signup"
})
</script>

<template>
    <div class="w-full max-w-xs mx-auto my-5 min-h-screen text-[#06113C]">
        <div class="p-5">
            <p class=" text-xs">STEP 3 OF 3</p>
        </div>
        <h1 class="text-2xl">Select your payment option</h1>
        <p class="p-2">Your payment is encrypted</p>
        <div class="flex flex-col space-y-3">
            <div class="border-2 border-[#eeeeee] p-3 hover:bg-[#eeeeee] hover:scale-110 duration-300 transition-all rounded-lg">Credit or debit card</div>
            <div class="border-2 border-[#eeeeee] p-3 hover:bg-[#eeeeee] hover:scale-110 duration-300 transition-all rounded-lg">Pay with Ozow</div>
        </div>
    </div>
</template>
