<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SetTittle',
  props: {
    title: String
  },

  data() {
    return {};
  },

  computed: {},
  watch: {},
  mounted() {
    document.title = this.title || document.title;
  },

  methods: {}
};
</script>

<style lang='scss'>
</style>
