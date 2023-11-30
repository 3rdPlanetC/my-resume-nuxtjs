<template>
	<button
		@click="emit('click')"
		class="a-button"
		:class="[
			{
				primary: primary && !secondary && !brand && !disabled,
				secondary: secondary && !brand && !disabled,
				brand: brand && !disabled,
				disabled
			},
			variant ? 'variant' : 'no-variant',
			size
		]"
	>
		<i class="fa-solid fa-chevron-left"></i>
		<i class="fa-solid fa-user"></i>
		<slot> Label Button </slot>
		<i class="fa-solid fa-chevron-right"></i>
	</button>
</template>
<script setup lang="ts">
// props
defineProps({
	primary: { type: Boolean, default: true },
	secondary: { type: Boolean, default: false },
	brand: { type: Boolean, default: false },
	variant: { type: Boolean, default: false },
	disabled: { type: Boolean, default: false },
	size: { type: String as () => 'small' | 'medium' | 'large', default: 'medium' },
	append: { type: Boolean, default: false },
	prepend: { type: Boolean, default: false }
})
// emits
const emit = defineEmits<(e: 'click') => void>()
</script>
<style lang="scss" scoped>
.a-button {
	@apply font-sans cursor-pointer rounded-lg transition-[0.25s];
	&.primary {
		@apply bg-button-primary text-white;
		&.variant {
			@apply bg-white text-button-primary border-solid border-2 border-button-primary;
			&:hover {
				@apply border-button-primary-hover;
			}
			&:active,
			&:visited {
				@apply border-button-primary-active;
			}
		}
		&.no-variant {
			&:hover {
				@apply bg-button-primary-hover;
			}
			&:active,
			&:visited {
				@apply bg-button-primary-active;
			}
		}
	}
	&.secondary {
		@apply bg-button-secondary text-button-primary;
		&.variant {
			@apply bg-button-variant text-button-primary border-solid border-2 border-button-secondary;
			&:hover {
				@apply border-button-secondary-hover;
			}
			&:active,
			&:visited {
				@apply border-button-secondary-active;
			}
		}
		&.no-variant {
			&:hover {
				@apply bg-button-secondary-hover;
			}
			&:active,
			&:visited {
				@apply bg-button-secondary-active;
			}
		}
	}
	&.brand {
		@apply bg-button-brand text-button-primary;
		&.variant {
			@apply bg-white text-button-primary border-solid border-2 border-button-brand;
			&:hover {
				@apply border-button-brand-hover;
			}
			&:active,
			&:visited {
				@apply border-button-brand-active;
			}
		}
		&.no-variant {
			&:hover {
				@apply bg-button-brand-hover;
			}
			&:active,
			&:visited {
				@apply bg-button-brand-active;
			}
		}
	}
	&.disabled {
	}
	// size
	&.small {
		@apply px-3 py-1;
		&.variant {
			@apply px-[10px] py-[2px];
		}
	}
	&.medium {
		@apply px-4 py-2;
		&.variant {
			@apply px-[14px] py-[6px];
		}
	}
	&.large {
		@apply px-6 py-3;
		&.variant {
			@apply px-[20px] py-[10px];
		}
	}
}
</style>
