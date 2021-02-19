<template>
	<set-title title="任务录入">
		<c-task-entry />
	</set-title>
</template>

<script>
import Main from '@components/taskList/task-entry/index';

export default {
	name: 'task-entry',
	components: {
		'c-task-entry': Main
	},
};
</script>


