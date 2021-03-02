<template>
  <set-title title="审批列表">
    <c-approval-list />
  </set-title>
</template>

<script>
import Main from '@components/approvalList/main';

export default {
  name: 'ApprovalList',
  components: {
    'c-approval-list': Main
  },
  data() {
    return {};
  },

  computed: {},
  watch: {},
  mounted() {},

  methods: {}
};
</script>

<style lang='scss'>
</style>
