<template>
	<div :class="`item item--type-${data.type}`">
		<div class="item__icon"></div>
		<div class="item__quantity">{{ data.quantity }}</div>
	</div>
</template>

<script setup>
const props = defineProps({
	data: {
		type: Object,
		required: true
	}
})
</script>

<style lang="scss">
@import '@/styles/base/mixins';

.item {
	--icon-bg-1: #7faa65;
	--icon-bg-2: rgba(184, 217, 152, 0.35);
	width: 100%;
	height: 100%;
	display: grid;
	place-items: center;
	position: relative;
	cursor: var(--cursor-pointer);
	transition: background-color 0.12s;
}

.item:hover {
	background-color: var(--bg-hover);
}

.item__icon {
	width: 3.375rem;
	height: 3.375rem;
	position: relative;

	&::before {
		@include pseudoBlock(3rem);
		bottom: 0;
		left: 0;
		background-color: var(--icon-bg-1);
	}

	&::after {
		@include pseudoBlock(3rem);
		right: 0;
		top: 0;
		z-index: 1;
		background-color: var(--icon-bg-2);
		backdrop-filter: blur(6px);
	}
}

.item__quantity {
	width: 1rem;
	height: 1rem;
	box-sizing: content-box;
	position: absolute;
	bottom: 0;
	right: 0;
	color: rgba(#ffffff, 0.4);
	background-color: var(--bg-secondary);
	border-top: 1px solid var(--border);
	border-left: 1px solid var(--border);
	border-top-left-radius: 6px;
	font-size: 0.625rem;
	line-height: 1.2;
	font-weight: 500;
	display: flex;
	align-items: center;
	justify-content: center;
}

.item--type-b {
	--icon-bg-1: #aa9765;
	--icon-bg-2: rgba(217, 187, 152, 0.35);
}

.item--type-c {
	--icon-bg-1: #656caa;
	--icon-bg-2: rgba(116, 129, 237, 0.35);
}
</style>
