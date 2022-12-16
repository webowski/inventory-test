<template>
	<div class="inventory">
		<div class="inventory__cell" v-for="(cell, index) in 25" :key="index">
			<Item
				:data="items[index]"
				v-if="items.length >= cell && items.length < 25"
			/>
		</div>
		<div class="inventory__details"></div>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import Item from '@/components/Item.vue'

const initialItems = [
	{
		type: 1,
		quantity: 4
	},
	{
		type: 2,
		quantity: 2
	},
	{
		type: 3,
		quantity: 5
	}
]

const items = ref(initialItems)
</script>

<style lang="scss">
@import '@/styles/base/mixins';

.inventory {
	@include box;
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	width: 525px;
	overflow: hidden;
	background-color: var(--bg-secondary);
	user-select: none;
}

.inventory__cell {
	$cols-count: 5;
	$rows-count: 5;
	height: 100px;
	box-sizing: content-box;
	border-top: 1px solid var(--border);
	border-left: 1px solid var(--border);
	display: flex;
	justify-content: center;
	align-items: center;

	&:nth-child(-n + #{$cols-count}) {
		border-top: none;
	}

	&:nth-child(#{$rows-count}n + 1) {
		border-left: none;
	}
}
</style>
