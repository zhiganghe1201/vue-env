<template>
  <div class="advice-add">
    <div class="title">决策建议</div>
    <div>
      指数类型：
      <a-select placeholder="请选择" style="width: 240px">
        <a-select-option
          v-for="it in INDEX_TYPE"
          :key="it.value"
          :value="it.value"
        >
          {{ it.label }}
        </a-select-option>
      </a-select>
      <a-button class="g-m-l-24" type="primary" icon="plus-circle">
        添加分段
      </a-button>
    </div>

    <div class="g-m-t-24">
      <div>
        分段1：
        <a-input-number style="width: 160px" placeholder="请输入分值" />
        至
        <a-input-number style="width: 160px" placeholder="请输入分值" />
      </div>
      <div class="g-m-t-24 g-flex">
        <span style="width: 100px" class="g-m-r-23">决策建议1：</span>
        <a-input
          placeholder="请输入决策建议"
          allow-clear
          class="g-m-t-24"
          type="textarea"
          :auto-size="{ minRows: 6 }"
        />
      </div>
    </div>
    <div class="g-m-t-24 g-flex g-jc-fe">
      <a-button type="primary" class="g-m-r-24"> 确认 </a-button>
      <a-button>取消</a-button>
    </div>
  </div>
</template>

<script>
import { INDEX_TYPE } from '@constants/constants';

export default {
  name: 'AdviceAdd',

  data: () => ({
    INDEX_TYPE
  }),
  computed: {},

  watch: {},

  mounted() {},
  beforeMount() {},

  methods: {}
};
</script>

<style lang="scss">
.advice-add {
  .title {
    font-size: 18px;
    color: #000;
    margin-bottom: 24px;
  }
}
</style>
