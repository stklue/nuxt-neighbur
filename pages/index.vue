<script setup lang="ts">


definePageMeta({
    middleware: "auth",
    layout: "index"
})


useHead({
    title: 'neighbur | Home',
    meta: [{ name: 'description', content: 'neighbur food' }]
})


</script>

<template>
    <div class="min-h-screen ">
        <HomeRecentVisit />
        <div class="flex flex-col lg:flex-row ">
            <HomeOnlineNearYou />
            <OrderFakeMap/>
        </div>
    </div>
</template>