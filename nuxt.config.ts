export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: [
		[
			'@pinia/nuxt',
			{
				autoImports: ['defineStore', 'acceptHMRUpdate', 'storeToRefs']
			}
		],
		'@nuxtjs/tailwindcss',
		'@nuxtjs/storybook',
		'@nuxtjs/google-fonts'
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
	app: {
		head: {
			link: [
				// fontawesome free
				{
					rel: 'preload',
					href: 'https://kit.fontawesome.com/cc5d141a38.js',
					crossorigin: 'anonymous'
				}
			]
		}
	},
	googleFonts: {
		download: true,
		families: {
			'IBM+Plex+Sans+Thai': [100, 200, 300, 400, 500, 600, 700],
			Prompt: true,
		},
	},
})
