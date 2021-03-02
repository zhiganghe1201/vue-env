<template>
  <set-title title="审批">
    <c-approval-apply />
  </set-title>
</template>

<script>
import Apply from '@components/approvalList/apply';

export default {
  name: 'ApprovalApply',
  components: {
    'c-approval-apply': Apply
  }
};
</script>

<style lang='scss'>
</style>
