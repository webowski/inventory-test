<template>
	<div class="profile">
		<img src="/media/profile.jpg" class="profile__image" alt="" />
		<div class="skeleton"></div>
	</div>
</template>

<style lang="scss">
@import '@/styles/base/mixins';

.profile {
	@include box;
	width: 236px;
	padding: 18px 14px 24px;
}

.profile__image {
	border-radius: 8px;
	margin-bottom: 1.25rem;
}
</style>
