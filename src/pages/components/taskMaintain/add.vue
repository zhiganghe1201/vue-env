<template>
  <div class="task-maintain-add">
    <div class="g-c-000 g-fs-18">
      任务信息：
    </div>
    <div class="g-m-t-24">
      <a-form-model
        :model="form"
        layout="horizontal"
        :label-col="{ span: 4 }"
        :wrapper-col="{ span: 14 }"
      >
        <a-row key="1" :gutter="24">
          <a-col :span="12">
            <a-form-model-item label="任务名称">
              <a-input v-model="form.taskName" placeholder="请输入任务名称" />
            </a-form-model-item>
          </a-col>
          <a-col :span="12">
            <a-form-model-item label="指标名称">
              <a-select v-model="form.indicatorsName" placeholder="请选择">
                <a-select-option value="shanghai">
                  火警
                </a-select-option>
                <a-select-option value="beijing">
                  警情偷盗
                </a-select-option>
              </a-select>
            </a-form-model-item>
          </a-col>
        </a-row>

        <a-row key="2" :gutter="24">
          <a-col :span="12">
            <a-form-model-item label="统计周期类型">
              <a-select v-model="form.cycleType" placeholder="请选择">
                <a-select-option v-for="it in STATISTICAL_CYCLE" :key="it.value" :value="it.value">
                  {{ it.label }}
                </a-select-option>
              </a-select>
            </a-form-model-item>
          </a-col>
          <a-col :span="12">
            <a-form-model-item label="起始周期">
              <a-select v-model="form.indicatorsName" placeholder="请选择">
                <a-select-option value="shanghai">
                  Zone one
                </a-select-option>
                <a-select-option value="beijing">
                  Zone two
                </a-select-option>
              </a-select>
            </a-form-model-item>
          </a-col>
        </a-row>

        <a-row key="4" :gutter="24">
          <a-col :span="12">
            <a-form-model-item label="截止日期">
              <a-select v-model="form.endData" placeholder="请选择">
                <a-select-option value="1">
                  1号
                </a-select-option>
                <a-select-option value="2">
                  1号
                </a-select-option>
              </a-select>
            </a-form-model-item>
          </a-col>
          <a-col :span="12">
            <a-form-model-item label="统计范围">
              <a-select v-model="form.range" placeholder="请选择">
                <a-select-option value="shanghai">
                  呼和浩特
                </a-select-option>
                <a-select-option value="beijing">
                  旗县区
                </a-select-option>
              </a-select>
            </a-form-model-item>
          </a-col>
        </a-row>
        <a-row :gutter="24">
          <a-col :span="12">
            <a-form-model-item label="录入部门">
              <a-select v-model="form.part" placeholder="请选择">
                <a-select-option value="shanghai">
                  Zone one
                </a-select-option>
                <a-select-option value="beijing">
                  Zone two
                </a-select-option>
              </a-select>
            </a-form-model-item>
          </a-col>
          <a-col push="7">
            <a-button type="primary">
              上传模板
            </a-button>
          </a-col>
        </a-row>
      </a-form-model>
      <a-row :gutter="24" style="margin-top: 64px;">
        <a-col push="18">
          <a-button type="primary">
            确认
          </a-button>
          <a-button>取消</a-button>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import { STATISTICAL_CYCLE } from '@constants/constants';

export default {
  name: 'TaskMaintainAdd',

  data() {
    return {
      STATISTICAL_CYCLE,
      form: {
        taskName: '',
        indicatorsName: '',
        cycleType: '',
        startCycle: '',
        endData: '',
        rang: '',
        part: ''
      }
    };
  },

  computed: {

  },
  watch: {

  },
  mounted() {

  },

  methods: {

  },
};
</script>

<style lang='scss'>
.task-maintain-add {
  .add-btn {
    margin-right: 138px
  }
}

</style>
