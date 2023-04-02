// https://nuxt.com/docs/api/configuration/nuxt-config
import {resolve } from "path"

export default defineNuxtConfig({
  modules: ['@nuxtjs/supabase','@nuxtjs/tailwindcss', 'nuxt-icon', '@nuxt/image-edge'],
  image: {
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536
    },
  },
  
})
