import type { Meta, StoryObj } from '@storybook/vue3'

import Button from './button.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction

const meta = {
	title: 'Atoms/Button',
	component: Button,
	tags: ['autodocs'],
	argTypes: {
		primary: {
			control: { type: 'boolean' },
			description: 'primary prop',
			defaultValue: { summary: false }
		},
		secondary: {
			control: { type: 'boolean' },
			description: 'secondary prop',
			defaultValue: { summary: false }
		},
		brand: {
			control: { type: 'boolean' },
			description: 'brand prop',
			defaultValue: { summary: false }
		},
		variant: {
			control: { type: 'boolean' },
			description: 'variant prop',
			defaultValue: { summary: false }
			// options: ['primary', 'secondary'],
			// control: { type: 'radio' },
		}
	}
	// This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
} satisfies Meta<typeof Button>

export default meta

// primary button
export const PrimaryButton: StoryObj<typeof meta> = {
	args: {
		primary: true
	}
}

// secondary button
export const SecondaryButton: StoryObj<typeof meta> = {
	args: {
		secondary: true
	}
}

// brand button
export const BrandButton: StoryObj<typeof meta> = {
	args: {
		brand: true
	}
}
