<template>
	<div>
		<slot/>
	</div>
</template>

<script>
export default {
	name: 'set-tittle',
	props: {
		title: String,
	},

	data() {
		return {

		};
	},

	computed: {

	},
	watch: {

	},
	mounted() {
		document.title = this.title || document.title;
	},

	methods: {

	},
};
</script>

<style lang='scss'>

</style>
