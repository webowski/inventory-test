<template>
	<label
		class="theme-switch"
		:class="{
			'is-switched': theme === 'dark'
		}"
		@click="() => switchTheme()"
	>
		<input type="checkbox" name="color-theme" :checked="theme === 'dark'" />
		<span></span>
	</label>
</template>

<script setup>
import { watch, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useSettingsStore } from '@/store/settings'

const { theme } = storeToRefs(useSettingsStore())
const { switchTheme } = useSettingsStore()

onMounted(() => {
	document.documentElement.setAttribute('data-theme', theme.value)
})

watch(theme, (theme) => {
	document.documentElement.setAttribute('data-theme', theme)
})
</script>

<style lang="scss">
@import '@/styles/base/mixins';

.theme-switch {
	position: fixed;
	top: calc(50% - 20px);
	right: 0.25rem;
	z-index: 100;
	width: 40px;
	height: 20px;
	display: block;
	border-radius: 40px;
	cursor: pointer;
	transform: rotate(90deg);
}

.theme-switch input[type='checkbox'] {
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0px;
	left: 0px;
	right: 0px;
	bottom: 0px;
	margin: 0px;
	cursor: pointer;
	opacity: 0;
	z-index: 2;
}

.theme-switch span {
	position: absolute;
	top: 0px;
	right: 0px;
	bottom: 0px;
	left: 0px;
	overflow: hidden;
	opacity: 1;
	background-color: var(--minor);
	border-radius: 40px;
	transition: background-color var(--duration-sm), opacity var(--duration-sm);
}

.theme-switch span:after {
	@include pseudoBlock(16px);
	top: 2px;
	left: 0;
	border-radius: 50%;
	transition: transform var(--duration-sm), background-color var(--duration-sm);
	background-color: var(--bg-secondary);
	transform: translateX(2px);
	z-index: 0;
}

.theme-switch input[type='checkbox']:checked + span {
	background-color: var(--muted);
}

.theme-switch input[type='checkbox']:checked + span:after {
	background-color: var(--bg);
	transform: translateX(22px);
}
</style>
