<script lang="ts" setup>


</script>
<template>

    <nav class="flex justify-between items-center py-10 px-14 cursor-pointer bg-[#06113C] text-sm text-[#DDDDDD] h-12 ">
        <NuxtLink class="text-2xl font-bold" to="/">neighbur</NuxtLink>
        <NuxtLink to="/login" class='group transition-all duration-300 ease-in-out'>
            <span v-if="true"
                class='text-lg font-semibold bg-left-bottom bg-gradient-to-r from-[#FF8C32] to-[#FF8C32] bg-[length:0%_3px] bg-no-repeat group-hover:bg-[length:100%_3px] transition-all duration-500 ease-out'>
                login
            </span>
            <span v-else
                class='text-lg font-semibold bg-left-bottom bg-gradient-to-r from-[#FF8C32] to-[#FF8C32] bg-[length:0%_3px] bg-no-repeat group-hover:bg-[length:100%_3px] transition-all duration-500 ease-out'>
                logout
            </span>
        </NuxtLink>
    </nav>
</template>