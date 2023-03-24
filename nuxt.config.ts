// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    app: {
        baseURL: "/vaskeliste/"
    },
    modules: [
        "@nuxtjs/tailwindcss",
        "@nuxtjs/eslint-module"
    ]
})
