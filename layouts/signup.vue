<script lang="ts" setup>

</script>

<template>
    <header>
        <nav class="flex justify-between items-center px-14 cursor-pointer text-sm text-[#06113C] h-12 shadow-sm">
            <NuxtLink class="text-lg font-bold" to="/">neighbur</NuxtLink>
            <NuxtLink to="/login" class='group transition-all duration-300 ease-in-out' href='#'>
                <span
                    class='bg-left-bottom bg-gradient-to-r from-[#FF8C32] to-[#FF8C32] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                    login
                </span>
            </NuxtLink>
        </nav>
    </header>
    <!-- <slot /> -->
    <slot />
    <Footer />
</template>

