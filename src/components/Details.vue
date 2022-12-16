<template>
	<div class="details">
		<CloseButton />
		<div class="details__body">
			<Figure size="lg" class="details__figure" />
			<div class="skeleton skeleton--2"></div>
		</div>
	</div>
</template>

<script setup>
import CloseButton from './CloseButton.vue'
import Figure from './Figure.vue'
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
	background-color: rgba(#262626, 0.5);
	backdrop-filter: blur(8px);
	border-left: 1px solid var(--border);
}

.details__figure {
	margin: 25px auto 30px;
}
</style>
