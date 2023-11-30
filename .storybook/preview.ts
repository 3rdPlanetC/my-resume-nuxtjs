import type { Preview } from '@storybook/vue3'

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/
			}
		},
		options: {
			storySort: {
				order: ['Atoms', 'Molecules', 'Organisms', 'Templates'],
				includeNames: true
			}
		}
	}
}

export default preview
