<script setup lang="ts">
// const user = useSupabaseUser()
const router = useRouter()

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