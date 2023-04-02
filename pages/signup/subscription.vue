<script lang="ts" setup>
definePageMeta({
    layout: "signup"
})


const subscriptionChoice = ref("")
</script>

<template>
    <div class="flex flex-col  items-center w-full min-h-screen my-5 ">
        <div class="p-5">
            <p class="text-[#06113C] text-xs">STEP 2 OF 3</p>
        </div>
        <div
            class="flex flex-col lg:flex-row md:flex-row space-x-5 lg:space-x-10 text-[#eeeeee] min-h-screen  w-full justify-center px-28">
            <div
                class="flex flex-col flex-wrap flex-1 shadow-md h-full  bg-[#06113C] hover:scale-105 hover:shadow-lg  transition-all ease-in-out duration-500 cursor-pointer rounded-lg">
                <p class="text-lg pl-8 pt-4 text-[#FF8C32] font-semibold">FREE</p>
                <p class="text-md pl-8 font-light">Get the first month free </p>
                <div class="p-8">
                    <div class="flex space-x-1  ">
                        <span class="text-xs font-light">R</span>
                        <h2 class="text-3xl">FREE</h2><span class="flex  text-xs items-end pl-1 font-light">/per
                            month</span>
                    </div>
                    <hr class="w-48 h-1 mx-auto my-2 bg-gray-100 border-0 rounded md:my-5 dark:bg-gray-700">
                    <div>
                        <li class="text-[10px] tracking-tight">Only get access to for locations within 1km</li>
                    </div>
                </div>
                <button class="m-4 p-2 border-1 bg-[#dddddd] text-[#06113C] rounded-lg ">Select</button>
            </div>
            <div
                class="flex flex-col flex-wrap flex-1 shadow-md h-full  bg-[#06113C] hover:scale-105 hover:shadow-lg  transition-all ease-in-out duration-500 cursor-pointer rounded-lg">
                <p class="text-lg pl-8 pt-4 text-[#FF8C32]  font-semibold">6 Months</p>
                <p class="text-md pl-8 font-light">subscription</p>
                <div class="p-8">
                    <div class="flex space-x-1 ">
                        <span class="text-xs font-light">R</span>
                        <h2 class="text-3xl">50</h2><span class="flex  text-xs items-end pl-1 font-light">/per month</span>
                    </div>
                    <hr class="w-48 h-1 mx-auto my-2 bg-gray-100 border-0 rounded md:my-5 dark:bg-gray-700">
                    <div>
                        <li class="text-[10px] tracking-tight">Only get access to for locations within 1km</li>
                    </div>
                </div>
                <button class="m-4 p-2 border-1 bg-[#dddddd] text-[#06113C] rounded-lg ">Select</button>
            </div>
            <div
                class="flex flex-col flex-wrap flex-1 shadow-md h-full  bg-[#06113C] hover:scale-105 hover:shadow-lg  transition-all ease-in-out duration-500 cursor-pointer rounded-lg">
                <p class="text-lg pl-8 pt-4  text-[#FF8C32]  font-semibold">12 Months</p>
                <p class="text-md pl-8 font-light">subscription</p>
                <div class="p-8">
                    <div class="flex space-x-1">
                        <span class="text-xs font-light">R</span>
                        <h2 class="text-3xl">100</h2><span class="flex  text-xs items-end pl-1 font-light">/per month</span>
                    </div>
                    <hr class="w-48 h-1 mx-auto my-2 bg-gray-100 border-0 rounded md:my-5 dark:bg-gray-700">
                    <div>
                        <li class="text-[10px] tracking-tight">Only get access to for locations within 1km</li>
                    </div>
                </div>
                <button class="m-4 p-2 border-1 bg-[#dddddd] text-[#06113C] rounded-lg ">Select</button>
            </div>
        </div>
    </div>
</template>
