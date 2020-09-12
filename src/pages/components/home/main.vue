<template>
	<div class="login-main g-bg-666 g-fs-24">
		home - main
		this is home page
	</div>
</template>

<script>

export default {
	name: 'home-main',
	components: {
	},

	data() {
		return {
			login: '登陆页',
		};
	},

	computed: {},
	watch: {},
	mounted() {},

	methods: {},
};
</script>

<style lang="scss">
.login-main {
	width: 500px;
	height: 500px;
	background: red;
	transform: translate(100px, 300px);
}
</style>
