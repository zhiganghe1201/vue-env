<template>
  <set-title title="新建任务">
    <c-task-add />
  </set-title>
</template>

<script>
import TaskAdd from '@components/taskMaintain/add';

export default {
  name: 'TaskMaintain',
  components: {
    'c-task-add': TaskAdd
  },
};
</script>

<style lang='scss'>

</style>
