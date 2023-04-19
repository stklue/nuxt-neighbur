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
    <div class="min-h-screen pt-20 px-20 inline-flex space-x-5 w-full">
        <section class="w-full h-96 rounded-lg pt-5">
            <img class="w-full h-full  rounded-lg object-cover" :src="product.image" alt="">
        </section>
        <section class="w-full h-full  pt-5 flex flex-col">
            <div class="inline-flex  items-center space-x-5">
                <h2 class="text-3xl font-bold">{{ product.description }}</h2>
                <p class="text-2xl font-light">-{{ product.user.name }}</p>
            </div>
            <div class="inline-flex pt-5 space-x-3">
                <p class="text-lg font-semibold">R{{ product.price.toFixed() }}</p>
            </div>
            <div class="inline-flex pt-5 space-x-3">
                <p>Prepared</p>
                <p>{{ product.created }}</p>
            </div>
            <div class="inline-flex pt-5 space-x-3">
                <p>Available</p>
                <p>{{ product.available }}</p>
            </div>
            <div class="inline-flex pt-5 space-x-3">
                <p>Portion(s)</p>
                <p>{{ product.portion }}</p>
            </div>
            <div class="inline-flex pt-5 space-x-2">
                <p v-if="product.recurring == true">Recurring</p>
                <p v-else>Once-off</p>
                <p> dish</p>
            </div>
            <div class="inline-flex pt-3 space-x-2">
                <p>This food is</p>
                <p>{{ product.foodType }}</p>
            </div>
            <div class="inline-flex pt-5 space-x-3">
                <button @click="addProduct"
                    class="w-full bg-[#06113C] text-white p-4 rounded-lg hover:bg-gray-200 hover:text-[#06113C] transition-all ease-out duration-300">Order
                    Now</button>
            </div>
            <div v-if="addNotification === true" class="w-full p-4 bg-green-500 my-3 text-white font-semibold rounded-lg">Added to cart</div>

        </section>
    </div>
</template>