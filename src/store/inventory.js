import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

const initialItems = [
	{
		type: 'a',
		quantity: 4,
		cellId: 1
	},
	{
		type: 'b',
		quantity: 2,
		cellId: 2
	},
	{
		type: 'c',
		quantity: 5,
		cellId: 3
	}
]

export const useInventoryStore = defineStore({
	id: 'inventory',

	state: () => ({
		items: useStorage('inventoryItems', [...initialItems])
	}),
	actions: {
		removeItem(type) {
			this.items = this.items.filter((item) => item.type !== type)
		},

		getItemByCell(cellId) {
			return this.items.find((item) => item.cellId === cellId)
		},

		isCellEmpty(cellId) {
			return !this.items.some((item) => item.cellId === cellId)
		}
	}
})
