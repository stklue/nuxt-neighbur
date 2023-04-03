<script setup lang="ts">


definePageMeta({
    middleware: "auth",
    layout:"default"
})



</script>

<template>
    <Navbar/>
    <div>
        This is the index
    </div>
</template>