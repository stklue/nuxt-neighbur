<script lang="ts" setup>
import { User } from "~~/data/types";
import { useUserStore } from "~~/stores/user"

const { user } = useUserStore()
const { data } = await useFetch(`/api/users?location=${user.location}`)

const usersNearYou: Ref<User[]> = ref([]);

if (Array.isArray(data.value)) {
    usersNearYou.value = data.value as unknown as User[];
}

</script>

<template>
    <section class="flex flex-col w-full pt-5 px-12 space-x-4 ">
        <div class="ml-4 mt-4  inline-flex space-x-4">
            <h1 class="text-2xl font-semibold">All users near you</h1>
            <img class="w-10 h-10" src="~/public/cooking.gif" />
        </div>
        <div v-if="usersNearYou.length !== 0" class="flex mb-6">
        <div class="w-52  m-4 flex-wrap " v-for="user in usersNearYou" :id="String(user.id)">
            <NuxtLink :to='"profile/" + user.id'>
                <div
                    class="bg-orange-200 flex flex-wrap flex-col w-full h-full p-4 rounded-lg hover:scale-110 hover:shadow-lg  transition-all ease-in-out duration-500 cursor-pointer">
                    <div class="flex space-x-2 mb-2">
                        <div class="h-10 w-10 rounded-md">
                            <HomeChefIcon />
                        </div>
                        <div class="inline-flex justify-between w-full space-x-4">
                                <h2>{{ user.name }}</h2>
                                <OrderOnlineGlow  />
                            </div>

                        </div>
                        <!-- <div>
                                            <h2 class="font-semibold">R{{ product.price }}</h2>
                                        </div>
                                        <div>
                                            <p class="font-extralight">Created:</p>
                                            <h2 class="font-light text-sm">{{ product.created }}</h2>
                                        </div>
                                        <div class="py-2">
                                            <div class="w-full h-full rounded-lg bg-gray-100 p-2">{{ product.description }}</div>
                                        </div> -->
                    </div>
                </NuxtLink>
            </div>
        </div>
        <div v-else>
            No users found near you
        </div>
    </section>
</template>