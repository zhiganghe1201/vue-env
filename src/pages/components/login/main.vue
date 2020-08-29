<template>
	<div class="login-main">
		{{ login }}
		<v-counter />
	</div>
</template>

<script>
import Counter from '../_common/counter';

export default {
	name: 'login-main',
	components: {
		'v-counter': Counter
	},

	data() {
		return {
			login: '登陆页',
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
