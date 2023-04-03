import { defineStore } from "pinia"

export const useGetStartedStore = defineStore('get-started',() => {
    const email = ref('')
    return {email }
})