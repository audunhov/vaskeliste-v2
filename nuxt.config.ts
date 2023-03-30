// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    app: {
        baseURL: "/vaskeliste/"
    },
    modules: [
        '@vite-pwa/nuxt',
        "@nuxtjs/tailwindcss",
        "@nuxtjs/eslint-module"
    ]
})
