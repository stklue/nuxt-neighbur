// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    "@vueuse/nuxt",
    "nuxt-icon",
  ],
  ssr:false,
  runtimeConfig: {
    public: {
      mapbox: {
        accessToken: process.env.NUXT_PUBLIC_MAPBOX_TOKEN,
      },
    },
  },
});
