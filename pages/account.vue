<script lang="ts" setup>
import { useGetStartedStore, usePaymentStore } from '~~/stores/getStarted';
import { useUserStore } from '~~/stores/user';

const { email, getEmail } = useUserStore()

definePageMeta({
    layout: "index"
})

</script>

<template>
    <div class="min-h-screen pt-24 px-20">
        <div class="flex justify-between space-x-5">
            <div class="rounded-lg bg-gray-200 w-full p-5">
                <h2 class="text-2xl">Account Details</h2>
                <div class="flex flex-col w-1/2 mt-5 space-y-2">
                    <div class="flex justify-between">
                        <div>Name</div>
                        <div>St.Klue</div>
                    </div>
                    <div class="flex justify-between">
                        <div>Profit</div>
                        <div>R120.00</div>
                    </div>
                </div>
            </div>
            <div class="rounded-lg bg-gray-200 w-full p-5">
                <h2 class="text-2xl">Service</h2>

                <div class="flex flex-col">
                    <div class="flex">
                        <div>Sell food</div>
                    </div>
                    <div>
                        <div class="divide-y border-2 my-2 border-gray-300"></div>
                        <h2>History</h2>
                        <div>Prior Service</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>