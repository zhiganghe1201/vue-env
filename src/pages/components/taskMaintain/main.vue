<template>
  <div class="task-maintain">
    <div class="task-maintain-filter g-flex">
      <div class="g-m-r-24 g-m-b-24">
        任务名称：<a-input
          v-model="taskName"
          style="width: 240px"
          placeholder="请输入任务名称"
        />
      </div>
      <div class="g-m-r-24 g-m-b-24">
        统计周期类型：
        <a-select placeholder="请选择" style="width: 240px">
          <a-select-option
            v-for="item in STATISTICAL_CYCLE"
            :key="item.value"
            :value="item.value"
          >
            {{ item.label }}
          </a-select-option>
        </a-select>
      </div>
      <div class="g-m-r-24 g-m-b-24">
        统计范围：
        <a-select placeholder="请选择" style="width: 240px" />
      </div>
      <div class="g-m-r-24 g-m-b-24">
        录入部门：
        <a-select placeholder="请选择" style="width: 240px">
          <a-select-option
            v-for="item in ENTRY_STATUS"
            :key="item.value"
            :value="item.value"
          >
            {{ item.label }}
          </a-select-option>
        </a-select>
      </div>
    </div>
    <div class="g-flex g-jc-fe">
      <a-button type="primary" class="g-m-r-16" @click="handleSearch">
        查询
      </a-button>
      <a-button @click="handleReset"> 重置 </a-button>
    </div>
    <a-button type="primary" class="g-m-b-12" @click="handleAdd">
      新增任务
    </a-button>
    <a-table :columns="columns" :data-source="data" :pagination="paginConf">
      <template slot="action">
        <!-- <span v-for="it in action" :key="it" class="g-link-text g-m-r-24">{{ it }}</span> -->
        <span class="g-link-text g-m-r-12">查看</span>
        <span class="g-link-text">编辑</span>
      </template>
    </a-table>
  </div>
</template>

<script>
import { STATISTICAL_CYCLE, ENTRY_STATUS } from '@constants/constants';

export default {
  name: 'BaiyaMain',
  components: {},

  data: () => ({
    STATISTICAL_CYCLE,
    ENTRY_STATUS,
    paginConf: {
      total: 50,
      pageSize: 10,
      showQuickJumper: true,
      showSizeChanger: true,
      showTotal: (val) => {
        return `共${val}页`;
      },
    },
    taskName: '',
    columns: [
      {
        title: '序号',
        key: 'index',
        dataIndex: 'index',
        customRender: (val, row, index) => {
          return index + 1;
        },
      },
      {
        title: '任务名称',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '统计周期类型',
        dataIndex: 'type',
        key: 'type',
      },
      {
        title: '录入部门',
        dataIndex: 'party',
        key: 'party',
      },
      {
        title: '统计范围',
        dataIndex: 'range',
        key: 'range',
      },
      {
        title: '操作',
        fixed: 'right',
        width: '250',
        dataIndex: 'action',
        key: 'action',
        scopedSlots: { customRender: 'action' },
      }
    ],
    data: [
      {
        key: 1,
        name: '数字城管',
        type: '月',
        party: '区城管局',
        range: '街道名称1',
      },
      {
        key: 2,
        name: '数字城管',
        type: '月',
        party: '区城管局',
        range: '街道名称1',
      },
      {
        key: 3,
        name: '数字城管',
        type: '月',
        party: '区城管局',
        range: '街道名称1',
      }
    ],
  }),

  computed: {},
  watch: {},
  mounted() {},

  methods: {
    handleAdd() {
      this.$router.push('/taskmaintain/add');
    },
    handleSearch() {},
    handleReset() {},
  },
};
</script>

<style lang="scss">
.task-maintain {
  .task-maintain-filter {
    flex-wrap: wrap;
  }
}
</style>
