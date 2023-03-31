<script setup lang="ts">
const user = useSupabaseUser()
const router = useRouter()

watchEffect(() => {
    if (!user.value) {
        router.push("/introduction")
    }
    router.push("/")
})
</script>

<template>
    <div>
        This is the index
    </div>
</template>