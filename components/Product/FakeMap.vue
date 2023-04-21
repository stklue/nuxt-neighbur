<script lang="ts" setup>
import { useProductsStore } from '~~/stores/orderItemDetail';
import { Product } from '~~/data/types';
import { useSelectedProductStore } from '~~/stores/selectedProduct';
import { RouteRecordName } from 'vue-router';
import { RouteLocationRaw } from 'vue-router';

const { changeProduct, selectedProduct } = useSelectedProductStore()
const { products, getProducts } = useProductsStore()

const router = useRouter()
const route = useRoute()


const gotoProduct = (p: Product) => {
    changeProduct(p)
    router.push("product/" + p.id)
}
</script>


<template>
    <section class="min-h-full w-full pt-5 ">
        <div class=" flex py-4 pr-10  rounded-tr-lg rounded-br-lg min-h-full w-full">
            <div class="bg-gray-200 rounded-lg p-10 grid grid-cols-3 flex-wrap gap-x-12 gap-y-20 w-full h-1/2">
                <div class=" bg-zinc-300 max-h-14 w-14 p-2 cursor-pointer" v-for="product in getProducts().value">
                    <Icon @click="gotoProduct(product)" name="material-symbols:location-on"
                        class="text-red-600 w-10 h-10  hover:scale-125 hover:w-full  transition-all ease-in-out duration-500" />
                </div>
            </div>
        </div>
    </section>
</template>