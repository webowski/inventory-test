<template>
	<div class="item" ref="item">
		<Figure :type="data.type" />
		<div class="item__quantity">{{ data.quantity }}</div>
	</div>
</template>

<script setup>
import Figure from '@/components/Figure.vue'
import { onMounted, ref } from 'vue'

const props = defineProps({
	data: {
		type: Object,
		required: true
	}
})

const item = ref(null)
</script>

<style lang="scss">
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

	.items__quantity {
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
</style>
