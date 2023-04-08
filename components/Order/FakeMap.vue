<script lang="ts" setup>
import { useProductsStore } from '~~/stores/orderItemDetail';
import { Product } from '~~/stores/orderItemDetail';
import { useSelectedProductStore } from '~~/stores/selectedProduct';

const { changeProduct } = useSelectedProductStore()
const { products, setProducts } = useProductsStore()

if (products.length === 0) {
    const { data } = await useFetch('/api/order/products')
    if (Array.isArray(data.value)) {
        setProducts(data.value as Product[])
    }
}


</script>


<template>
    <section class="min-h-full w-full ">
        <div class=" flex py-4 pr-10 bg-gray-300 min-h-full w-full">
            <div class="bg-gray-200 rounded-lg p-10 grid grid-cols-3 flex-wrap gap-x-12 gap-y-20 w-full h-1/2">
                <div class=" bg-zinc-300 max-h-14 w-14 p-2 cursor-pointer" v-for="product in products">
                    <Icon @click="changeProduct(product)" name="material-symbols:location-on"
                        class="text-red-600 w-10 h-10  hover:scale-125 hover:w-full  transition-all ease-in-out duration-500" />
                </div>
            </div>
        </div>
    </section>
</template>