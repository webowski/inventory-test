<template>
	<button class="close-button">
		<IconCross />
	</button>
</template>

<script setup>
import IconCross from '@/images/icons/cross.svg'
</script>

<style lang="scss">
@import '@/styles/base/mixins';

.close-button {
	@include buttonReset;
	width: 1.5rem;
	height: 1.5rem;
	position: absolute;
	top: 0.5rem;
	right: 0.5rem;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: var(--cursor-pointer);
}

.close-button svg path {
	transition: fill 0.12s;
	fill: var(--major);
}

.close-button:hover svg path {
	fill: red;
}
</style>
