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
	vite: {
		server: {
			watch: {
				usePolling: true
			}
		},
		build: {},
		vue: {
			template: {
				// compilerOptions: {
				// 	isCustomElement: (tag) =>
				// 		['header-finnomena-new-header', 'header-finnomena-new-footer'].includes(tag)
				// }
			}
		}
	},
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
			script: [
				{
					src: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css',
					crossorigin: 'anonymous'
				}
			]
		}
	},
	runtimeConfig: {

	},
	googleFonts: {
		download: true,
		families: {
			'IBM+Plex+Sans+Thai': [100, 200, 300, 400, 500, 600, 700],
			Prompt: true,
		},
	},
})
