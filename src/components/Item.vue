<template>
	<div :class="`item item--type-${data.type}`">
		{{ data.quantity }}
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
	width: 54px;
	height: 54px;
	position: relative;

	&::before {
		@include pseudoBlock(48px);
		bottom: 0;
		left: 0;
		background-color: #7faa65;
	}

	&::after {
		@include pseudoBlock(48px);
		right: 0;
		top: 0;
		z-index: 1;
		background-color: rgba(184, 217, 152, 0.35);
		backdrop-filter: blur(6px);
	}
}

.item--type-2 {
	&::before {
		background-color: #aa9765;
	}

	&::after {
		background-color: rgba(217, 187, 152, 0.35);
	}
}

.item--type-3 {
	&::before {
		background-color: #656caa;
	}

	&::after {
		background: rgba(116, 129, 237, 0.35);
	}
}
</style>
