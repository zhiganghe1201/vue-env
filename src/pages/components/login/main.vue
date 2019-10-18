<template>
	<div class="login-main">
		{{ login }}
	</div>
</template>

<script>
export default {
	name: 'login-main',

	data() {
		return {
			login: '登陆页'
		};
	},

	computed: {

	},
	watch: {

	},
	mounted() {

	},

	methods: {

	},
};
</script>

<style lang='scss'>
.login-main {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%)
}
</style>
