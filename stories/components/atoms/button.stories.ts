import type { Meta, StoryObj } from '@storybook/vue3'
import Button from './button.vue'

const meta = {
	title: 'Atoms/Button',
	component: Button,
	tags: ['autodocs'],
	argTypes: {
		primary: {
			control: { type: 'boolean' },
			description: 'primary prop',
			table: {
				defaultValue: { summary: true },
				type: { summary: ['boolean'] },
			}
		},
		secondary: {
			control: { type: 'boolean' },
			description: 'secondary prop',
			table: {
				defaultValue: { summary: false },
				type: { summary: ['boolean'] },
			}
		},
		brand: {
			control: { type: 'boolean' },
			description: 'brand prop',
			table: {
				defaultValue: { summary: false },
				type: { summary: ['boolean'] },
			}
		},
		variant: {
			control: { type: 'boolean' },
			description: 'variant prop',
			table: {
				defaultValue: { summary: false },
				type: { summary: ['boolean'] },
			}
		},
		size: {
			control: { type: 'select' },
			description: 'size prop',
			options: ['small', 'medium', 'large'],
			table: {
				defaultValue: { summary: 'medium' },
				type: { summary: ['string'] },
			}
		},
		appendIcon: {
			control: { type: 'text' },
			description: 'append icon prop',
			table: {
				defaultValue: { summary: '' },
				type: { summary: ['string'] },
			}
		},
		prependIcon: {
			control: { type: 'text' },
			description: 'prepend icon prop',
			table: {
				defaultValue: { summary: '' },
				type: { summary: ['string'] },
			}
		},
		rounded: {
			control: { type: 'boolean' },
			description: 'rounded prop',
			table: {
				defaultValue: { summary: false },
				type: { summary: ['boolean'] },
			}
		}
	},
	args: {
		primary: true,
		secondary: false,
		brand: false,
		variant: false,
		size: 'medium',
		rounded: false
	}
} satisfies Meta<typeof Button>

export default meta
interface StoryBookButton extends StoryObj<typeof meta> { }

// primary button
export const PrimaryButton: StoryBookButton = {
	args: {
		primary: true,
	}
}

// secondary button
export const SecondaryButton: StoryBookButton = {
	args: {
		secondary: true
	}
}

// brand button
export const BrandButton: StoryBookButton = {
	args: {
		brand: true
	}
}

// primary variant button
export const PrimaryVariantButton: StoryBookButton = {
	args: {
		primary: true,
		variant: true
	}
}

// secondary variant button
export const SecondaryVariantButton: StoryBookButton = {
	args: {
		secondary: true,
		variant: true
	}
}

// brand variant button
export const BrandVariantButton: StoryBookButton = {
	args: {
		brand: true,
		variant: true
	}
}