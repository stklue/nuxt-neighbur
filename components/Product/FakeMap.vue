<script lang="ts" setup>
import { useProductsStore } from '~~/stores/orderItemDetail';
import { Product } from '~~/data/types';
import { useSelectedProductStore } from '~~/stores/selectedProduct';
import { RouteRecordName } from 'vue-router';

const { changeProduct, selectedProduct } = useSelectedProductStore()
const { products, setProducts } = useProductsStore()


const id = selectedProduct.id;

const router = useRouter()
const route = useRoute()
const currentRoute = router.currentRoute

watch(() => route.params.id, async _id => {
    // remove the current router and 
    router.removeRoute(currentRoute.value.name as RouteRecordName)
}, { deep: true, immediate: true })

</script>


<template>
    <section class="min-h-full w-full pt-5 ">
        <div class=" flex py-4 pr-10  rounded-tr-lg rounded-br-lg min-h-full w-full">
            <div class="bg-gray-200 rounded-lg p-10 grid grid-cols-3 flex-wrap gap-x-12 gap-y-20 w-full h-1/2">
                <div class=" bg-zinc-300 max-h-14 w-14 p-2 cursor-pointer" v-for="product in products">
                    <NuxtLink :to='"product/" + product.id'>
                        <Icon @click="changeProduct(product)" name="material-symbols:location-on"
                            class="text-red-600 w-10 h-10  hover:scale-125 hover:w-full  transition-all ease-in-out duration-500" />
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>