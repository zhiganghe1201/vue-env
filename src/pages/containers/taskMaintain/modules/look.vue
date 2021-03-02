<template>
  <set-title title="查看任务">
    <c-task-look />
  </set-title>
</template>

<script>
import TaskLook from '@components/taskMaintain/look';

export default {
  name: 'TaskMaintain',
  components: {
    'c-task-look': TaskLook
  },
};
</script>

<style lang='scss'>

</style>
