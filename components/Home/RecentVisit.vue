<script lang="ts" setup>
interface User {
    avatar: string,
    name: string,
}

interface Short { s: string }
interface Food { }

type ProductType = Short | Food

interface Product {
    id: number,
    owner: User,
    price: number,
    type: ProductType,
    rating: number,
    description: string,
    recurring? : boolean
}


const data: Product[] = [
    { id: 1, owner: { avatar: "", name: "test me" }, price: 20, type: { s: "name" }, rating: 4, description: "Biryani" },
    { id: 2, owner: { avatar: "", name: "test me" }, price: 20, type: { s: "name" }, rating: 4, description: "Biryani" },
    { id: 3, owner: { avatar: "", name: "something else" }, price: 20, type: { s: "name" }, rating: 4, description: "Biryani" },
    { id: 4, owner: { avatar: "", name: "another one" }, price: 20, type: { s: "name" }, rating: 4, description: "Biryani" },
    { id: 5, owner: { avatar: "", name: "just dj khalid" }, price: 20, type: { s: "name" }, rating: 4, description: "Biryani" },
]
</script>


<template>
    <section class="flex flex-col w-full pt-16 px-12 space-x-4 bg-[#eeeeee] ">
        <h1 class="ml-4 mt-4 text-2xl font-semibold">Visit again</h1>
        <div class="flex mb-6">
            <div class="w-full  h-1/3 m-4" v-for="product in data" :id="String(product.id)">
                <div
                    class="bg-[#fefefe]  flex flex-col w-full h-full p-4 rounded-lg hover:scale-110 hover:shadow-lg  transition-all ease-in-out duration-500 cursor-pointer">
                    <div class="flex space-x-2">
                        <div class="rounded-full bg-slate-400 opacity-70 w-8 h-8"></div>
                        <h2>{{ product.owner.name }}</h2>
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