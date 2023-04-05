<script lang="ts" setup>


</script>

<template>
    <header class="fixed w-full h-16 justify-center p-4 bg-white z-10">
        <nav class="items-start flex justify-between space-x-5  text-sm text-[#06113C]  z-10">
            <NuxtLink class="grow-0 text-2xl font-bold cursor-pointer" to="/">neighbur</NuxtLink>

            <div class="grow">
                <HomeSearch />
            </div>
            <div class="flex grow-0 divide-x-2 my-2">
                <NuxtLink to="/introduction" class='group transition-all duration-300 ease-in-out'>
                    <span
                        class='mx-2 cursor-pointer text-base font-semibold bg-left-bottom bg-gradient-to-r from-[#FF8C32] to-[#FF8C32] bg-[length:0%_3px] bg-no-repeat group-hover:bg-[length:100%_3px] transition-all duration-500 ease-out'>
                        account
                    </span>
                </NuxtLink>
                <NuxtLink to="/introduction" class='group transition-all duration-300 ease-in-out'>
                    <span
                        class='mx-2 cursor-pointer text-base font-semibold bg-left-bottom bg-gradient-to-r from-[#FF8C32] to-[#FF8C32] bg-[length:0%_3px] bg-no-repeat group-hover:bg-[length:100%_3px] transition-all duration-500 ease-out'>
                        become a creator
                    </span>
                </NuxtLink>
                <NuxtLink to="/introduction" class='group transition-all duration-300 ease-in-out'>
                    <span
                        class='mx-2 cursor-pointer text-base font-semibold bg-left-bottom bg-gradient-to-r from-[#FF8C32] to-[#FF8C32] bg-[length:0%_3px] bg-no-repeat group-hover:bg-[length:100%_3px] transition-all duration-500 ease-out'>
                        my shorts
                    </span>
                </NuxtLink>
                <NuxtLink to="/introduction" class='group transition-all duration-300 ease-in-out'>
                    <span
                        class='mx-2 cursor-pointer text-base font-semibold bg-left-bottom bg-gradient-to-r from-[#FF8C32] to-[#FF8C32] bg-[length:0%_3px] bg-no-repeat group-hover:bg-[length:100%_3px] transition-all duration-500 ease-out'>
                        logout
                    </span>
                </NuxtLink>
            </div>
        </nav>
    </header>
    <slot />
    <Footer />
</template>

