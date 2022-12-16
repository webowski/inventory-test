<template>
	<div class="profile">
		<img src="/media/profile.jpg" alt="" />
		<img src="@/images/skeleton.svg" alt="" />
	</div>
</template>

<style lang="scss">
@import '@/styles/base/mixins';

.profile {
	@include box;
	width: 236px;
	padding: 18px 14px 24px;
}
</style>
