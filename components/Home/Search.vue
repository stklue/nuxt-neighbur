<script lang="ts" setup>
const show = ref("hidden")

const toggle = () => {
    if (show.value === 'hidden') {
        show.value = 'flex'
    } else {
        show.value = 'hidden'

    }
}
</script>

<template>
    <form>
        <div class="flex  justify-center">
            <div class="relative w-2/3 ">
                <input type="search" id="search-dropdown"
                    class="p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border-none "
                    placeholder="Search locations and courses" required>
                <button type="submit"
                    class="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-[#06113C] rounded-r-lg border border-[#06113C]">
                    <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                    <span class="sr-only">Search</span>
                </button>
            </div>
        </div>
    </form>
</template>