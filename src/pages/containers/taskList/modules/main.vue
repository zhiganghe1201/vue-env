<template>
	<set-title title="任务列表">
		<c-taskList-main />
	</set-title>
</template>

<script>
import Main from '@components/taskList/main';

export default {
	name: 'task-list',
	components: {
		'c-taskList-main': Main
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

	},

	methods: {

	},
};
</script>

<style lang='scss'>

</style>
