<template>
	<div class="item" ref="item">
		<Figure :type="data.type" />
		<div class="item__quantity">{{ data.quantity }}</div>
	</div>
</template>

<script setup>
import Figure from '@/components/Figure.vue'
import { ref } from 'vue'

const item = ref(null)

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
	width: 104px;
	height: 100px;
	display: grid;
	place-items: center;
	position: relative;
	z-index: 1;
	background: var(--bg-secondary) none;
	cursor: var(--cursor-pointer);
	transition: background-color 0.12s;

	&::after {
		@include pseudoBlock(100%);
		left: 0;
		right: 0;
		z-index: 2;
	}

	> * {
		pointer-events: none;
	}
}

.item:hover {
	background-color: var(--bg-hover);
}

.item:active {
	cursor: var(--cursor-move);
}

.item.is-dragging {
	cursor: var(--cursor-move);
	border-radius: var(--radius-xxl);
	border: 1px solid var(--border);
	background-color: var(--bg-secondary);
	z-index: 5;

	.item__quantity {
		visibility: hidden;
	}
}

.item__quantity {
	width: 1rem;
	height: 1rem;
	box-sizing: content-box;
	position: absolute;
	bottom: 0;
	right: 0;
	color: var(--muted);
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
</style>
