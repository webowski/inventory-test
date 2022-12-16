<template>
	<div class="inventory">
		<div
			class="inventory__cell"
			v-for="(cell, index) in 25"
			:key="index"
			@drop="handleDrop($event, cell)"
			@dragover.prevent
			@dragenter.prevent
		>
			<Item
				v-if="getItemByCell(cell)"
				:data="getItemByCell(cell)"
				@click="openDetails(getItemByCell(cell))"
				@dragstart="handleDragstart($event, getItemByCell(cell).type)"
				draggable="true"
			/>
		</div>
		<Details ref="detailsPopup" />
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import Item from '@/components/Item.vue'
import Details from '@/components/Details.vue'
import { useInventoryStore } from '@/store/inventory'

const { items } = storeToRefs(useInventoryStore())
const { getItemByCell } = useInventoryStore()

const detailsPopup = ref(null)

const openDetails = (data) => {
	detailsPopup.value.data = data
	detailsPopup.value.isOpen = true
}

function handleDragstart(event, itemType) {
	event.dataTransfer.dropEffect = 'move'
	event.dataTransfer.effectAllowed = 'move'
	event.dataTransfer.setData('itemType', itemType)
	event.target.classList.add('is-dragging')
}

function handleDrop(event, cellId) {
	const itemType = event.dataTransfer.getData('itemType')

	items.value = items.value.map((item) => {
		if (item.type == itemType) item.cellId = cellId
		return item
	})
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
