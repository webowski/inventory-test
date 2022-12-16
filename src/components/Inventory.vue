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

<style lang="scss" scoped></style>
