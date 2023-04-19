<script lang="ts" setup>
import { useGetStartedStore, usePaymentStore } from '~~/stores/getStarted';
import { useUserStore } from '~~/stores/user';

const { email, getEmail } = useUserStore()

definePageMeta({
    layout: "index"
})

</script>

<template>
    <div class="min-h-screen pt-20 px-20">
        Create a new service
    </div>
</template>