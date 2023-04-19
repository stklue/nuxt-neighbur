<script lang="ts" setup>
import { useProductsStore } from '~~/stores/orderItemDetail';
import { Product } from '~~/stores/orderItemDetail';
const { data } = await useFetch('/api/order/products')

const products: Ref<Product[]> = ref([]);
const { setProducts } = useProductsStore()
if (Array.isArray(data.value)) {
    products.value = data.value as unknown as Product[];
    setProducts(products.value)
}

const some = products.value.slice(0, 2)

</script>

<template>
    <section class="flex flex-col w-full pt-5 px-12 space-x-4 ">
        <div class="ml-4 mt-4  inline-flex space-x-4">
            <h1 class="text-2xl font-semibold">Currently cooking near you</h1>
            <img class="w-10 h-10" src="~/public/cooking.gif" />
        </div>
        <div class="flex mb-6">
            <div class="w-52 h-1/3 m-4" v-for="product in some" :id="String(product.id)">
                <NuxtLink :to='"product/" + product.id'>
                    <div
                        class="bg-[#fefefe]  flex flex-col w-full h-full p-4 rounded-lg hover:scale-110 hover:shadow-lg  transition-all ease-in-out duration-500 cursor-pointer">
                        <div class="flex space-x-2">
                            <!-- <div class="rounded-full bg-orange-400 opacity-70 w-8 h-8">
                                        <img class="rounded-full w-8 h-8 object-cover" :src="product.image" alt="food" />
                                    </div> -->
                            <div class="inline-flex space-x-4">
                                <h2>{{ product.user.name }}</h2>
                                <OrderOnlineGlow />
                            </div>
                        </div>
                        <div class="p-2">
                            <div class="w-full h-full rounded-lg bg-slate-300 p-2">{{ product.description }}</div>
                        </div>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </section>
</template>