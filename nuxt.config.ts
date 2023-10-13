export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate', 'storeToRefs']
      }
    ],
    '@nuxtjs/tailwindcss'
  ],
  components: [
    {
      path: '@/components/atoms',
      prefix: 'a'
    },
    {
      path: '@/components/molecules',
      prefix: 'm'
    },
    {
      path: '@/components/organisms',
      prefix: 'o'
    },
    {
      path: '@/components/templates',
      prefix: 't'
    }
  ],
  imports: {
    dirs: ['composables', 'composables/*/index.{ts,js,mjs,mts}', 'composables/**', 'constants']
  },
})
