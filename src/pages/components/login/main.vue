<template>
	<div class="login-main g-bg-666 g-fs-24">
		{{ login }}
		<div class="g-fs-24 g-m-l-24 g-c-main g-flex g-flex-cc">
			g-ccdasd
		</div>
		<v-counter />
	</div>
</template>

<script>
import Counter from '../_common/counter';

export default {
	name: 'login-main',
	components: {
		'v-counter': Counter,
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
