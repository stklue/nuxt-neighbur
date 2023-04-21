<script lang="ts" setup>
import { Product, emptyProduct } from '~~/data/types';
import { useCart } from "~~/stores/cart"


definePageMeta({
    middleware: "auth",
    layout: "index"
})


const { add } = useCart()
const product: Ref<Product> = ref(emptyProduct);
const route = useRoute()


watch(() => route.params.id, async _id => {
    const { data } = await useFetch(`/api/order/product/${_id}`)
    product.value = data.value as unknown as Product
    console.log("Wathced: ", product.value);
}, { deep: true, immediate: true })

const addNotification = ref(false)

useHead({
    title: 'Product',
    meta: [{ name: 'product', content: 'neighbur food' }]
})

const addProduct = () => {
    add(product.value);
    addNotification.value = true
}

watch(addNotification, () => {
    setTimeout(() => {
        addNotification.value = false
    }, 1000)
})


</script>

<template>
    <!-- <img class="w-full h-full  rounded-lg object-cover" :src="product.image" alt=""> -->
    <div class="flex flex-col lg:flex-row min-h-screen px-14 pt-20">
        <ProductDetail />
    </div>
</template>