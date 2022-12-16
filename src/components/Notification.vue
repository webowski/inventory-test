<template>
	<div class="notification">
		<div class="skeleton skeleton--line"></div>
		<div class="notification__close">
			<IconCross />
		</div>
	</div>
</template>

<script setup>
import IconCross from '@/images/icons/cross.svg'
</script>

<style lang="scss">
@import '@/styles/base/mixins';

.notification {
	@include box;
	grid-column: span 2;
	padding: 18px 68px 18px 18px;
	position: relative;
}

.notification__close {
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

.notification__close:hover svg path {
	fill: red;
}
</style>
