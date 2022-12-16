<template>
	<div
		:class="[
			'figure',
			{
				[`figure--type-${type}`]: type,
				[`figure--${size}`]: size
			}
		]"
	></div>
</template>

<script setup>
const props = defineProps({
	type: {
		type: String,
		required: true
	},
	size: {
		type: String,
		required: false
	}
})
</script>

<style lang="scss">
@import '@/styles/base/mixins';

.figure {
	--icon-bg-1: #7faa65;
	--icon-bg-2: rgba(184, 217, 152, 0.35);
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

.figure--type-b {
	--icon-bg-1: #aa9765;
	--icon-bg-2: rgba(217, 187, 152, 0.35);
}

.figure--type-c {
	--icon-bg-1: #656caa;
	--icon-bg-2: rgba(116, 129, 237, 0.35);
}

.figure--lg {
	width: 130px;
	height: 130px;

	&::before,
	&::after {
		width: 116px;
		height: 116px;
	}
}
</style>
