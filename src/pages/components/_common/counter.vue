<template>
	<div>
		<span>{{ count }}</span>
		<button class="g-fs-14 g-c-red" @click="handleClick">
			Increment
		</button>
	</div>
</template>

<script>
export default {
	name: 'counterr',

	data() {
		return {
			count: 0
		};
	},

	computed: {

	},
	watch: {

	},
	mounted() {

	},

	methods: {
		handleClick() {
			this.count++;
		}
	},
};
</script>

<style lang='scss'>

</style>
