// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    modules: [
      '@vueuse/nuxt',
      '@nuxtjs/tailwindcss',
      '@element-plus/nuxt',
    ],
    css: ['~/assets/css/main.css'],
});