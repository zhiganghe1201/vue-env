<template>
  <div class="current-task">
    <div class="g-c-000 g-m-b-12 g-m-l-24">2020年1月</div>
    <a-table bordered :columns="columns" :data-source="data" />
  </div>
</template>

<script>
export default {
  name: 'CurrentTask',

  data: () => ({
    columns: [
      {
        title: '序号',
        customRender: (val, row, index) => {
          return index + 1;
        },
        align: 'center',
      },
      {
        title: '指标名称',
        dataIndex: 'name',
        align: 'center',
      },
      {
        title: '统计范围',
        dataIndex: 'range',
        align: 'center',
      },
      {
        title: '值',
        dataIndex: 'value',
        align: 'center',
      },
      {
        title: '单位',
        dataIndex: 'unit',
        align: 'center',
      }
    ],
    data: [
      {
        name: 'name',
        range: 'range',
        value: 'value',
        unit: 'unit',
        key: 1,
      },
      {
        name: 'name',
        range: 'range',
        value: 'value',
        unit: 'unit',
        key: 2,
      }
    ],
  }),

  computed: {},
  watch: {},
  mounted() {},

  methods: {},
};
</script>

<style lang='scss'>
</style>
