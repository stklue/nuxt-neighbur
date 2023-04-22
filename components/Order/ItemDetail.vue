<script lang="ts" setup>
import { useSelectedProductStore } from '~~/stores/selectedProduct';
import { useProductsStore } from '~~/stores/orderItemDetail';
import { Product } from '~~/data/types';

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
    <section class="bg-gray-300 min-h-full w-full px-10 py-5 rounded-tl-lg rounded-bl-lg  flex flex-col space-y-4">
        <div class=" w-full h-2/3" :id="String(getProduct().value.id)">
            <div
                class="bg-[#fefefe]  flex flex-col w-full h-full p-5 space-y-2 rounded-lg hover:scale-105 hover:shadow-lg  transition-all ease-in-out duration-500 cursor-pointer">
                <div class="flex justify-between space-x-2">
                    <div class="flex space-x-2">
                        <div class="rounded-full bg-slate-400 opacity-70 w-8 h-8"></div>
                        <h2 class="font-semibold text-2xl">{{ getProduct().value.user.name }}</h2>
                    </div>
                    <OrderOnlineGlow />
                </div>

                <div class="w-full h-full rounded-lg bg-slate-300 p-3">{{ getProduct().value.description }}</div>

                <p class="text-lg font-medium">R{{ getProduct().value.price.toFixed(2) }}</p>
                <div class="flex justify-between items-center text-center h-7" v-if="getProduct().value.plate === 0.5">
                    <p class=" text-lg">Plate(1/2)</p>
                    <div class="flex">
                        <Icon class="text-[#FF8C32] w-14 h-14" name="mdi:circle-halff" />
                        <p class="self-center">(plates) </p>
                    </div>
                </div>
                <div class=" h-7 flex justify-between items-center text-center " v-else>
                    <p class=" text-lg">Plate({{ getProduct().value.plate }})</p>
                    <p>
                        <Icon class="text-[#FF8C32] w-14 h-14" name="ic:round-circle">show plate sizes</Icon>
                    </p>
                    <div class="flex">
                        <div class="flex" v-for="_ in getProduct().value.plate">
                            <Icon class="text-[#FF8C32] w-14 h-14" name="ic:round-circle" />
                        </div>
                        <p class="self-center">(plates) </p>
                    </div>
                </div>

                <div class="flex justify-between items-center text-center ">
                    <p class=" text-lg"> Available</p>
                    <div class="flex space-x-2">
                        <p class="text-lg font-medium">{{ getProduct().value.available }}</p>
                        <p> (plates) </p>
                    </div>
                </div>
                <div class="flex justify-between">
                    <p class=" text-lg"> Rating</p>
                    <HomeRating />
                </div>
            </div>
        </div>
    </section>
</template>