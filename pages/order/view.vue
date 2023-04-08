<script setup lang="ts">
definePageMeta({
    middleware: "auth",
    layout: "index"
})



</script>

<template>
    <div class="min-h-screen flex flex-col pt-16">
        <h1 class="px-10 py-5 text-3xl  font-light">neighburs within a 500m radius</h1>
        <div class="min-h-screen flex px-14 py-10">
            <OrderItemDetail/>
            <OrderFakeMap />
        </div>
    </div>
</template>