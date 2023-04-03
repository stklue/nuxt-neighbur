<script setup lang="ts">
definePageMeta({
    layout: "signup"
})

// const user = useSupabaseUser()
// const client = useSupabaseAuthClient()
const router = useRouter()

// Login method using providers
const login = async (provider: 'github' | 'google' | 'gitlab' | 'bitbucket') => {
    // const { error } = await client.auth.signInWithOAuth({ provider })
    // if (error) {
    //     return alert('Something went wrong !')
    // }
    navigateTo('/')
}
</script>
<template>
    <div class="w-full min-h-screen max-w-xs mx-auto my-5">
        <button @click="login('google')">Login with Google</button>
        <div class="p-5">
            <p class="text-[#06113C] text-xs">STEP 1 OF 3</p>
        </div>
        <form @submit.prevent="" class="bg-[#EEEEEE] shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
                <label class="block text-[#06113C] text-sm  mb-2" for="email">
                    Email
                </label>
                <input placeholder="Enter email" type="email" name="email" id="emal"
                    class="bg-[#EEEEEE]   border-b-2 flex-grow border-[#06113C]  text-[#06113C]   pl-2 focus:outline-none" />
            </div>
            <div class="mb-6">
                <label class="block text-[#06113C] text-sm  mb-2" for="password">
                    Password
                </label>
                <input placeholder="Enter password" type="password" name="password" id="password" autocomplete="on"
                    class="bg-[#EEEEEE]  border-b-2  flex-grow border-[#06113C]  text-[#06113C]  pl-2 focus:outline-none" />

            </div>
            <div class="flex flex-col">
                <NuxtLink v-slot="{ navigate }" to="/signup/subscription">
                    <button @click.prevent="navigate" type="submit"
                        class="w-full bg-[#FF8C32] text-[#06113c] px-3 py-2 rounded-lg ">
                        Next
                    </button>
                </NuxtLink>
            </div>
        </form>
    </div>
</template>