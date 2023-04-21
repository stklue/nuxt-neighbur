<script setup lang="ts">


definePageMeta({
    middleware: "auth",
    layout: "index"
})


useHead({
    title: 'Profile',
    meta: [{ name: 'description', content: 'neighbur food' }]
})


</script>
<template>
    This is the user profile
</template>