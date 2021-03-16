<template>
  <div class="approval-apply">
    <div class="title">审批</div>
    <div class="apply_detail">
      <p>任务名称： 我是任务名称</p>
      <p>撤回原因： 我是很长的撤回原因</p>
      <p>
        <span class="g-w-200">申请部门：综治办</span>
        <span class=""> 申请人： 何大虾 </span>
      </p>
      <p>申请时间： 2020-10-29 13:99</p>
      <div>
        申请结果：
        <a-select
          v-model="result"
          allow-clear
          placeholder="请选择"
          style="width: 240px"
        >
          <a-select-option
            v-for="item in APPROVAL_RESULT"
            :key="item.value"
            :value="item.value"
          >
            {{ item.label }}
          </a-select-option>
        </a-select>
      </div>
      <div class="g-m-t-24 g-flex">
        <span class="label">说明：</span>
        <a-input
          type="textarea"
          placeholder="请输入"
          allow-clear
          :auto-size="{ minRows: 8 }"
        />
      </div>
      <div class="g-m-t-24 g-flex g-jc-fe">
        <a-button type="primary" class="g-m-r-24" @click="handleOk">
          确认
        </a-button>
        <a-button @click="handleCancel"> 取消 </a-button>
      </div>
    </div>
  </div>
</template>

<script>
import { APPROVAL_RESULT } from '@constants/constants';

export default {
  name: 'ApprovalApply',

  data: () => ({
    APPROVAL_RESULT,
    result: 3,
  }),

  computed: {},
  watch: {},
  mounted() {},

  methods: {
    handleOk() {},
    handleCancel() {
      this.$router.back();
    },
  },
};
</script>

<style lang='scss'>
.approval-apply {
  .title {
    font-size: 18px;
    color: #000;
    margin-bottom: 24px;
  }
  .apply_detail {
    font-size: 14px;
  }
  .label {
    width: 72px;
    text-align: right;
    margin-right: 8px;
  }
}
</style>
