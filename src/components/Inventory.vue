<template>
	<div class="inventory">
		<div class="inventory__cell" v-for="(cell, index) in 25" :key="index">
			<Item
				v-if="getItemByCell(cell)"
				:data="getItemByCell(cell)"
				@click="openDetails(getItemByCell(cell))"
			/>
		</div>
		<Details ref="detailsPopup" />
	</div>
</template>

<script setup>
import { ref } from 'vue'
import Item from '@/components/Item.vue'
import Details from '@/components/Details.vue'
import { useInventoryStore } from '@/store/inventory'

const { getItemByCell } = useInventoryStore()

const detailsPopup = ref(null)

const openDetails = (data) => {
	detailsPopup.value.data = data
	detailsPopup.value.isOpen = true
}
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
	position: relative;
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
	min-width: 0;
	min-height: 0;

	&:nth-child(-n + #{$cols-count}) {
		border-top: none;
	}

	&:nth-child(#{$rows-count}n + 1) {
		border-left: none;
	}
}
</style>
