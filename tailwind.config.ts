import type { Config } from 'tailwindcss'

export default {
	content: [],
	theme: {
		extend: {
			colors: {
				'label-primary': '#01172BDE',
				'label-disabled': '#01172B1A',
				'button-primary': '#01172B',
				'button-primary-hover': '#011425',
				'button-primary-active': '#011120',
				'button-secondary': '#01172B08',
				'button-secondary-hover': '#01172B1A',
				'button-secondary-active': '#01172B40',
				'button-brand': '#F2F93C',
				'button-brand-hover': '#DFE537',
				'button-brand-active': '#DFE537',
				'button-disabled': '#01172B1A',
				'button-variant': '#e5e5e5'
			},
			fontFamily: {
				serif: ['IBM Plex Sans Thai'],
				mono: ['IBM Plex Sans Thai'],
				sans: ['IBM Plex Sans Thai'],
				body: ['IBM Plex Sans Thai']
			}
		}
	},
	plugins: []
} satisfies Config
