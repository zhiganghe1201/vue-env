<template>
  <set-title title="新增建议">
    <c-advice-add />
  </set-title>
</template>

<script>
import Main from '@components/advice/add';

export default {
  name: 'AdviceAdd',
  components: {
    'c-advice-add': Main
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
