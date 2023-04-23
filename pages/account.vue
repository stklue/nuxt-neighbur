<script lang="ts" setup>



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
                    <div class="flex justify-between py-5">
                        <div class="cursor-pointer border-2 text-[#FF8C32] border-[#FF8C32] rounded-lg p-4 hover:bg-white">Change subscription</div>
                    </div>
                    <div class="flex justify-between">
                        <div class="text-red-500 font-semibold hover:text-red-600 cursor-pointer border-2 border-red-600 rounded-lg p-4 hover:bg-white">Cancel subscription</div>
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