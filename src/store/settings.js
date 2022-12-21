import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useSettingsStore = defineStore({
	id: 'theme',

	state: () => ({
		theme: useStorage('theme', 'dark')
	}),

	actions: {
		switchTheme() {
			this.theme = this.theme === 'dark' ? 'light' : 'dark'
		}
	}
})
