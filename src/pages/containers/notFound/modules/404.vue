<template>
  <set-title title="404">
    <c-404 />
  </set-title>
</template>

<script>
import NotFound from '@components/not-found/404';

export default {
  name: 'NotFound',
  components: {
    'c-404': NotFound
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
