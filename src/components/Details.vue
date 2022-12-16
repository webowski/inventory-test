<template>
	<div
		class="details"
		:class="{
			'is-open': isOpen
		}"
	>
		<CloseButton @click="isOpen = false" />

		<div class="details__body">
			<Figure
				:type="data.type"
				v-if="data.type"
				size="lg"
				class="details__figure"
			/>
			<div class="divider"></div>
			<div class="skeleton skeleton--2 details__skeleton"></div>
			<div class="divider"></div>
			<button
				class="button button--lg button--danger"
				@click="isFormOpen = true"
			>
				Удалить предмет
			</button>
		</div>

		<div
			class="details__form"
			:class="{
				'is-open': isFormOpen
			}"
		>
			<input
				ref="inputQuantity"
				type="number"
				class="form-input"
				placeholder="Введите количество"
				min="1"
				:max="data.quantity"
			/>

			<div class="details__form-actions">
				<button class="button" @click="isFormOpen = false">Отмена</button>
				<button class="button button--danger" @click="decreaseQuantity">
					Подтвердить
				</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, watch } from 'vue'
import CloseButton from './CloseButton.vue'
import Figure from './Figure.vue'
import { useInventoryStore } from '@/store/inventory'

const { removeItem } = useInventoryStore()
const isOpen = ref(false)
const inputQuantity = ref(null)
const data = ref({})
const isFormOpen = ref(false)

const decreaseQuantity = () => {
	if (inputQuantity.value.value > data.value.quantity) {
		alert('Введено количество больше количества в инвентаре')
		return false
	}
	data.value.quantity = data.value.quantity - inputQuantity.value.value

	if (data.value.quantity === 0) {
		removeItem(data.value.type)
		isOpen.value = false
	} else {
		isFormOpen.value = false
	}
}

watch(isOpen, () => {
	if (!isOpen.value) isFormOpen.value = false
})

watch(data, () => {
	inputQuantity.value.value = ''
})

defineExpose({
	isOpen,
	data
})
</script>

<style lang="scss">
.details {
	width: 250px;
	height: 100%;
	padding: 30px 15px 18px;
	position: absolute;
	top: 0;
	right: 0;
	z-index: 50;
	background-color: var(--bg-overlay);
	backdrop-filter: blur(8px);
	border-left: 1px solid var(--border);
	visibility: hidden;
	right: -250px;
	transition: right var(--duration-md), visibility var(--duration-md) step-end;
	will-change: right;
}

.details.is-open {
	right: 0;
	visibility: visible;
	transition: right var(--duration-md), visibility var(--duration-md) step-start;
}

.details__figure {
	margin: 25px auto 30px;
}

.details__skeleton {
	margin-bottom: 24px;
}

.details__form {
	padding: 20px;
	border-top: 1px solid var(--border);
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	backdrop-filter: blur(16px);
	background-color: var(--bg-overlay);
	transform: translateY(100%);
	visibility: hidden;
	transition: opacity var(--duration-md), transform var(--duration-md),
		visibility var(--duration-md) step-end;
}

.details__form.is-open {
	transform: translateY(0);
	visibility: visible;
	transition: opacity var(--duration-md), transform var(--duration-md),
		visibility var(--duration-md) step-start;
}

.details__form-actions {
	margin-top: 1.25rem;
	display: flex;
	gap: 0.625rem;
}
</style>
