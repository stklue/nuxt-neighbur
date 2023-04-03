<script lang="ts" setup>

definePageMeta({
    layout: "signup"
})

const router = useRouter()

const pass = ref('')
const email = ref('')

const signInWithGoogle = () => {

}

async function signInWithEmail() {
    console.log("This is the sing in email");

    // const { data, error } = await client.auth.signInWithPassword({
    //     email: String(em),
    //     password: pass.value,
    // })

    // console.log("This is user: ", user);
    // console.log("This is the data user: ", data.user);
}

</script>

<template>
    <div class="w-full min-h-screen max-w-xs mx-auto my-5">
        <div class="p-5">
            <p class="text-[#06113C] text-xs">STEP 1 OF 3</p>
        </div>
        <form @submit.prevent="() => signInWithEmail()" class="bg-[#EEEEEE] shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
                <label class="block text-[#06113C] text-sm  mb-2" for="email">
                    Email
                </label>
                <input placeholder="Enter email" type="email" name="email" id="emal" v-model="email"
                    class="bg-[#EEEEEE]   border-b-2 flex-grow border-[#06113C]  text-[#06113C]   pl-2 focus:outline-none" />
            </div>
            <div class="mb-6">
                <label class="block text-[#06113C] text-sm  mb-2" for="password">
                    Password
                </label>
                <input placeholder="Enter password" type="password" name="password" id="password" v-model="pass"
                    autocomplete="on"
                    class="bg-[#EEEEEE]  border-b-2  flex-grow border-[#06113C]  text-[#06113C]  pl-2 focus:outline-none" />

            </div>
            <div class="flex flex-col">
                <button type="submit" class="w-full bg-[#FF8C32] text-[#06113c] px-3 py-2 rounded-lg ">
                    Next
                </button>
            </div>
        </form>
    </div>
</template>
