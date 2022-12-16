<script setup>
import Item from './components/Item.vue'

const items = [
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
</script>

<template>
	<div class="profile"></div>
	<div class="inventory">
		<div class="inventory__cell" v-for="(cell, index) in 25" :key="index">
			<Item
				:data="items[index]"
				v-if="items.length >= cell && items.length < 25"
			/>
		</div>
	</div>
	<div class="notification"></div>
</template>
