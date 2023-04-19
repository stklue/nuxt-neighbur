<script lang="ts" setup>
import { useGetStartedStore } from '~~/stores/getStarted';
import { useUserStore } from '~~/stores/user';


definePageMeta({
    layout: "signup"
})

// const store = useGetStartedStore()
const { email, password, getEmail, getPass } = useUserStore()
// const email = ref(getEmail().value)
const pass = ref(getPass().value)


const signUpWithEmailAndPassword = () => {
    if (getEmail().value && pass.value.length > 0) {
        navigateTo('/signup/subscription')

        // localStorage.setItem("user", JSON.stringify({ email: getEmail().value, password: getPass().value }));
    } else {
        alert("Input fields cannot be empty.")
    }
}

</script>

<template>
    <div class="min-h-screen w-3/5 mx-auto my-5 ">
        <div class="flex justify-center p-5">
            <h3 class="text-[#06113C] text-lg">STEP 1 OF 3</h3>
        </div>
        <form @submit.prevent="signUpWithEmailAndPassword"
            class="bg-[#EEEEEE] shadow-md rounded px-8 pt-6 pb-8 mb-4 w-2/3 mx-auto">
            <div class="mb-4">
                <label class="block text-[#06113C] text-sm  mb-2" for="email">
                    Email
                </label>
                <input placeholder="Enter email" type="email" name="email" id="emal" :value="getEmail().value"
                    class="bg-[#EEEEEE]   border-b-2 flex-grow border-[#06113C]  text-[#06113C]   pl-2 focus:outline-none w-full" />
            </div>
            <div class="mb-6">
                <label class="block text-[#06113C] text-sm  mb-2" for="password">
                    Password
                </label>
                <input placeholder="Enter password" type="password" name="password" id="password" v-model="pass"
                    autocomplete="on"
                    class="bg-[#EEEEEE]  border-b-2  flex-grow border-[#06113C]  text-[#06113C]  pl-2 focus:outline-none w-full" />

            </div>
            <div class="flex flex-col">
                <button type="submit" class="w-full bg-[#FF8C32] text-[#06113c] px-3 py-2 rounded-lg ">
                    Next
                </button>
            </div>
        </form>
    </div>
</template>
