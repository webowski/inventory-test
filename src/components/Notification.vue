<template>
	<div class="notification">
		<img src="@/images/skeleton-line.svg" alt="" />
	</div>
</template>

<style lang="scss">
@import '@/styles/base/mixins';

.notification {
	@include box;
	grid-column: span 2;
	padding: 18px 14px 24px;
}
</style>
