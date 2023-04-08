<script lang="ts" setup>
import { useSelectedProductStore } from '~~/stores/selectedProduct';
import { useProductsStore } from '~~/stores/orderItemDetail';
import { Product } from '~~/stores/orderItemDetail';

const { products, setProducts } = useProductsStore()

if (products.length === 0) {
    const { data } = await useFetch('/api/order/products')
    if (Array.isArray(data.value)) {
        setProducts(data.value as Product[])
    }
}
const { getProduct } = useSelectedProductStore()
getProduct().value = products[0]

</script>


<template>
    <section class="bg-gray-300 min-h-full w-full px-10 py-5  flex flex-col space-y-4">
        <div class=" w-full h-2/3" :id="String(getProduct().value.id)">
            <div
                class="bg-[#fefefe]  flex flex-col w-full h-full p-4 rounded-lg hover:scale-105 hover:shadow-lg  transition-all ease-in-out duration-500 cursor-pointer">
                <div class="flex justify-between space-x-2">
                    <div class="flex space-x-2">
                        <div class="rounded-full bg-slate-400 opacity-70 w-8 h-8"></div>
                        <h2>{{ getProduct().value.owner.name }}</h2>
                    </div>
                    <OrderOnlineGlow />
                </div>
                <div class="p-2">
                    <div class="w-full h-full rounded-lg bg-slate-300 p-2">{{ getProduct().value.description }}</div>
                </div>
                <p class="p-5">R{{ getProduct().value.price.toFixed(2) }}</p>
                <div class="flex" v-if="getProduct().value.portion === 0.5"> Portion(1/2): <OrderHalfPortion/> (plates)</div>
                <div class="flex space-x-2" v-else>
                    Portion({{ getProduct().value.portion }}):
                    <div class="flex" v-for="_ in getProduct().value.portion">
                        <Icon class="text-[#FF8C32] w-8 h-8" name="material-symbols:fishfood" />
                    </div>
                    <p>(plates)</p>
                </div>
                <div>Available: {{ getProduct().value.available }} (plates)</div>
                <HomeRating />
            </div>
        </div>
    </section>
</template>