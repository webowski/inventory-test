<template>
	<div class="inventory" @click="closeDetails">
		<div class="inventory__cell" v-for="cellId in 25" :data-cell-id="cellId">
			<Item
				v-if="getItemByCell(cellId)"
				:data="getItemByCell(cellId)"
				@click.stop="openDetails(getItemByCell(cellId))"
				@mousedown="handleCatch($event, cellId)"
				@dragstart.prevent
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
const { getItemByCell, isCellEmpty } = useInventoryStore()

const detailsPopup = ref(null)

const draggingItem = ref(null)
const $draggingItem = ref(null)
const initialPoint = ref({ x: null, y: null })
const $targetCell = ref(null)
const previousCellId = ref(null)
const isDragging = ref(false)

function openDetails(data) {
	if (isDragging.value) return
	detailsPopup.value.data = data
	detailsPopup.value.isOpen = true
}

function closeDetails() {
	detailsPopup.value.isOpen = false
}

function handleCatch(event, cellId) {
	$draggingItem.value = event.target
	closeDetails()

	previousCellId.value = cellId
	const currentTranslate = getTranslate($draggingItem.value)

	initialPoint.value.x =
		event.offsetX +
		$draggingItem.value.getBoundingClientRect().left -
		currentTranslate.x

	initialPoint.value.y =
		event.offsetY +
		$draggingItem.value.getBoundingClientRect().top -
		currentTranslate.y

	document.addEventListener('mousemove', handleDrag)
	$draggingItem.value.addEventListener('mouseup', handleDrop)
	draggingItem.value = getItemByCell(cellId)
	isDragging.value = false
}

function handleDrag(event) {
	$draggingItem.value.classList.add('is-dragging')
	isDragging.value = true

	$draggingItem.value.style.transform = `translate(
		${event.clientX - initialPoint.value.x}px,
		${event.clientY - initialPoint.value.y}px)`

	$draggingItem.value.style.pointerEvents = 'none'
	const $elementUnder = document.elementFromPoint(event.clientX, event.clientY)
	$draggingItem.value.style.pointerEvents = 'auto'

	if (!$elementUnder) return

	let $dropCell = $elementUnder.closest('.inventory__cell')
	if ($elementUnder.classList.contains('inventory__cell'))
		$dropCell = $elementUnder

	if (!$dropCell) return

	const cellId = Number($dropCell.dataset.cellId)
	if (!isCellEmpty(cellId) && previousCellId.value !== cellId) return

	if ($targetCell.value != $dropCell) {
		if ($targetCell.value) {
			leaveTargetCell($targetCell.value)
		}

		$targetCell.value = $dropCell

		if ($targetCell.value) {
			enterTargetCell($targetCell.value)
		}
	}
}

function handleDrop(event) {
	event.stopPropagation()

	$draggingItem.value.classList.remove('is-dragging')
	$draggingItem.value.style.transform = 'translate(0, 0)'

	document.removeEventListener('mousemove', handleDrag)
	$draggingItem.value.removeEventListener('mouseup', handleDrop)

	if ($targetCell.value) {
		$targetCell.value.dispatchEvent(new Event('mouseup'))

		const cellId = Number($targetCell.value.dataset.cellId)
		handleCellMouseup(cellId)
		leaveTargetCell($targetCell.value)
	}
}

function getTranslate($element) {
	const transformStyle = window.getComputedStyle($element).transform
	const matrix = new DOMMatrixReadOnly(transformStyle)

	return {
		x: matrix.m41,
		y: matrix.m42
	}
}

function enterTargetCell($element) {
	$element.classList.add('is-droppable')
}

function leaveTargetCell($element) {
	$element.classList.remove('is-droppable')
	$targetCell.value = null
}

function handleCellMouseup(cellId) {
	if (draggingItem.value.cellId === cellId) {
		return false
	}

	items.value = items.value.map((item) => {
		if (item.type == draggingItem.value.type) item.cellId = cellId
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

.inventory__cell.is-droppable {
	background-color: var(--bg-hover);
}
</style>
