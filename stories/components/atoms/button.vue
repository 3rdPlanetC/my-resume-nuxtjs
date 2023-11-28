<template>
	<button
		@click="emit('click')"
		class="a-button"
		:class="[
			{
				primary,
				secondary,
				brand,
				variant
			}
		]"
	>
		this is atoms button.
	</button>
</template>
<script setup lang="ts">
// props
defineProps({
	primary: { type: Boolean, default: false },
	secondary: { type: Boolean, default: false },
	brand: { type: Boolean, default: false },
	variant: { type: Boolean, default: false }
})
// emits
const emit = defineEmits<(e: 'click') => void>()
</script>
<style lang="scss" scoped>
.a-button {
	cursor: pointer;
	&.primary {
		background: red;
		&.variant {
			border: 1px solid blue;
		}
	}
	&.secondary {
		background: yellow;
		&.variant {
			border: 1px solid blueviolet;
		}
	}
	&.brand {
		background: green;
		&.variant {
			border: 1px solid royalblue;
		}
	}
}
</style>
