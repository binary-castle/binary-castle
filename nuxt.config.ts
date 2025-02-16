// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},
    css: ['~/assets/scss/main.scss'],
    plugins: ["@/plugins/bootstrap.client.ts"],
    modules: ['@vesp/nuxt-fontawesome'],
    fontawesome: {
        icons: {
            solid: ['house', 'child', 'star', 'location-dot'],
            regular: ['star'],
            brands: ['twitter'],
        }
    }
})