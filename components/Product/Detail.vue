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
    <section class=" min-h-full w-full px-10 pt-10 rounded-tl-lg rounded-bl-lg  flex flex-col space-y-4">
        <div class=" w-full h-2/3" :id="String(product.id)">
            <div
                class="bg-[#fefefe]  flex flex-col w-full h-full p-5 space-y-2 rounded-lg hover:scale-105 hover:shadow-lg  transition-all ease-in-out duration-500 cursor-pointer">
                <div class="flex justify-between space-x-2">
                    <div class="flex space-x-2">
                        <div class="rounded-full bg-slate-400 opacity-70 w-8 h-8"></div>
                        <h2 class="font-semibold text-2xl">{{ product.user.name }}</h2>
                    </div>
                    <OrderOnlineGlow />
                </div>

                <div class="w-full h-full rounded-lg bg-slate-300 p-3">{{ product.description }}</div>

                <p class="text-lg font-medium">R{{ product.price.toFixed(2) }}</p>
                <div class="flex justify-between items-center text-center h-7" v-if="product.portion === 0.5">
                    <p class=" text-lg">Portion(1/2)</p>
                    <div class="flex">
                        <Icon class="text-[#FF8C32] w-14 h-14" name="mdi:circle-halff" />
                        <p class="self-center">(plates) </p>
                    </div>
                </div>
                <div class=" h-7 flex justify-between items-center text-center " v-else>
                    <p class=" text-lg">Portion({{ product.portion }})</p>
                        <Icon class="text-[#FF8C32] w-14 h-14" name="ic:round-circle">show portion sizes</Icon>
                    <div class="flex">
                        <div class="flex" v-for="_ in product.portion">
                            <Icon class="text-[#FF8C32] w-14 h-14" name="ic:round-circle" />
                        </div>
                        <p class="self-center">(plates) </p>
                    </div>
                </div>
                <div class="inline-flex pt-5 space-x-3">
                    <p>Prepared</p>
                    <p>{{ product.created }}</p>
                </div>
                <div class="flex justify-between items-center text-center ">
                    <p class=" text-lg"> Available</p>
                    <div class="flex space-x-2">
                        <p class="text-lg font-medium">{{ product.available }}</p>
                        <p> (plates) </p>
                    </div>
                </div>
                <div class="inline-flex pt-5 space-x-2">
                    <p v-if="product.recurring == true">Recurring</p>
                    <p v-else>Once-off</p>
                    <p> dish</p>
                </div>
                <div class="flex justify-between">
                    <p class=" text-lg"> Rating</p>
                    <HomeRating />
                </div>
                <div class="inline-flex pt-5 space-x-3">
                    <button @click="addProduct"
                        class="w-full bg-[#06113C] text-white p-4 rounded-lg hover:bg-gray-200 hover:text-[#06113C] transition-all ease-out duration-300">Add
                        to cart
                    </button>
                </div>
                <div v-if="addNotification === true"
                    class="w-full p-4 bg-green-500 my-3 text-white font-semibold rounded-lg">
                    Added to cart</div>
            </div>
        </div>
    </section>
</template>