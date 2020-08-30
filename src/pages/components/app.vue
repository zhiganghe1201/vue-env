<template>
	<div class="message">
		{{ message }}
		merge 测试
	</div>
</template>

<script>
export default {
	name: 'vue-test',

	data() {
		return {
			message: 'hello webpack-vue'
		};
	},

	computed: {

	},
	watch: {

	},
	mounted() {

	},

	methods: {
		handleAdd() {
			const a = { 
				a: '1',
				b: 2, 
				c: 3 };
		}
	},
};
</script>

<style lang='scss'>
.message {
	color: red;
	font-size: 18px;
}
</style>
