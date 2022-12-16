import { defineStore } from 'pinia'

export const useInventoryStore = defineStore({
	id: 'inventory',

	state: () => ({
		items: [
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
	}),

	actions: {
		removeItem(type) {
			this.items = this.items.filter((item) => item.type !== type)
			console.log(this.items)
		},

		getItemByCell(cell) {
			return this.items.find((item) => item.cellId === cell)
		}
	},

	getters: {}
})
