<script setup lang="ts">


definePageMeta({
    middleware: "auth",
    layout:"index"
})



</script>

<template>
    <div class="min-h-screen ">
        <HomeRecentVisit/>
    </div>
</template>