<template>
	<button class="a-button">
		<slot></slot>
	</button>
</template>
<script setup lang="ts">
defineProps({
	primary: { type: Boolean },
	secondary: { type: Boolean }
})
</script>
<style lang="scss" scoped>
.a-button {
	cursor: pointer;
}
</style>
