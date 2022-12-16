<template>
	<div class="notification">
		<div class="skeleton skeleton--line"></div>
		<CloseButton />
	</div>
</template>

<script setup>
import CloseButton from './CloseButton.vue'
</script>

<style lang="scss">
@import '@/styles/base/mixins';

.notification {
	@include box;
	grid-column: span 2;
	padding: 18px 68px 18px 18px;
	position: relative;
}
</style>
