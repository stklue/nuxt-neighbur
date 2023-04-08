// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "nuxt-mapbox", "nuxt-icon"],
  runtimeConfig: {
    public: {
      mapbox: {
        accessToken: process.env.NUXT_PUBLIC_MAPBOX_TOKEN,
      },
    },
  },
  image: {
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      "2xl": 1536,
    },
  },
});
