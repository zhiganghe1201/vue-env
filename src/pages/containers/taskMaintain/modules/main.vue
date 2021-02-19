<template>
	<set-title title="任务维护">
		<c-task-maintain />
	</set-title>
</template>

<script>
import Main from '@components/taskMaintain/main';

export default {
	name: 'task-maintain',
	components: {
		'c-task-maintain': Main
	},
};
</script>

<style lang='scss'>

</style>
