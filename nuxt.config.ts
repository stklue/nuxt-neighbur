// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "nuxt-mapbox",
    "nuxt-icon",
  ],
  runtimeConfig: {
    public: {
      mapbox: {
        accessToken: process.env.NUXT_PUBLIC_MAPBOX_TOKEN,
      },
    },
  },
});
