<script lang="ts" setup>
import { useProductsStore } from '~~/stores/orderItemDetail';
import { Product } from '~~/data/types';
const { data } = await useFetch('/api/order/products')

const products: Ref<Product[]> = ref([]);
const { setProducts } = useProductsStore()
if (Array.isArray(data.value)) {
    products.value = data.value as unknown as Product[];
    setProducts(products.value)
}

</script>

<template>
    <section class="flex flex-col w-full pt-10 px-12 space-x-4  ">
        <h1 class="ml-4 mt-4 text-2xl font-semibold">Top Picks</h1>
        <div class="flex mb-6">
            <div class="w-full  h-1/3 m-4" v-for="product in products" :id="String(product.id)">
                <div
                    class="bg-[#fefefe]  flex flex-col w-full h-full p-4 rounded-lg hover:scale-110 hover:shadow-lg  transition-all ease-in-out duration-500 cursor-pointer">
                    <div class="flex space-x-2">
                        <div class="rounded-full bg-slate-400 opacity-70 w-8 h-8">
                            <img class="rounded-full w-8 h-8 object-cover" :src="product.image" alt="food" />
                        </div>
                        <h2>{{ product.user.name }}</h2>
                    </div>
                    <div class="p-2">
                        <div class="w-full h-full rounded-lg bg-slate-300 p-2">{{ product.description }}</div>
                    </div>
                    <HomeRating />
                </div>
            </div>
        </div>
    </section>
</template>