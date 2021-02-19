<template>
	<div class="task-list">
		<div class="task-list-filter g-flex">
			<div class="g-m-r-24 g-m-b-24">
				任务名称：<a-input v-model="taskName" style="width: 240px" placeholder="请输入任务名称" @input="handleInput" />
			</div>
			<div class="g-m-r-24 g-m-b-24">
				统计周期类型：
				<a-select placeholder="请选择" style="width: 240px">
					<a-select-option v-for="item in STATISTICAL_CYCLE" :key="item.value" :value="item.value">
						{{ item.label }}
					</a-select-option>
				</a-select>
			</div>
			<div class="g-m-r-24 g-m-b-24">
				统计范围：
				<a-select placeholder="请选择" style="width: 240px" />
			</div>
			<div class="g-m-r-24 g-m-b-24">
				录入状态：
				<a-select placeholder="请选择" style="width: 240px">
					<a-select-option v-for="item in ENTRY_STATUS" :key="item.value" :value="item.value">
						{{ item.label }}
					</a-select-option>
				</a-select>
			</div>
		</div>
		<div class="task-list-search">
			<a-button type="primary" class="g-m-r-16" @click="handleSearch">
				查询
			</a-button>
			<a-button @click="handleReset">
				重置
			</a-button>
		</div>
		<div class="task-list-content">
			<a-table
				:columns="columns"
				:data-source="data"
				:pagination="paginConf"
			>
				<template slot="status" slot-scope="status">
					<span class="g-c-red" @click="handleAction">{{ status }}</span>
				</template>
				<template slot="action" slot-scope="action">
					<span v-for="it in action" :key="it" class="g-link-text g-m-r-24">{{ it }}</span>
				</template>
			</a-table>
		</div>
		<a-modal
			:form="modalForm"
			title="撤回申请"
			:visible="modalVisible"
			@ok="handleModalOk"
			@cancel="handleModalCancel"
		>
			<div class="g-m-b-24">
				任务统计周期：<a-input style="width: 240px" read-only value="212" />
			</div>
			<a-form-model
				ref="modalForm"
				:model="modalForm"
				:rules="modalRules"
				layout="horizontal"
				:label-col="{ span: 5}"
				:wrapper-col="{span: 18}"
				class="g-m-t-24"
			>
				<a-form-model-item ref="withdrawReason" prop="withdrawReason" required label="撤回原因">
					<a-input 
						v-model="modalForm.withdrawReason"
						type="textarea"
						:auto-size="{minRows: 4}" 
						placeholder="请输入撤回原因" 
					/>
					<!-- @blur="()=>{$refs.withdrawReason.onFieldBlur()}" -->
				</a-form-model-item>
			</a-form-model>
		</a-modal>
	</div>
</template>

<script>
import { STATISTICAL_CYCLE, ENTRY_STATUS } from '@constants/constants';

export default {
	name: 'hangzhou-main',
	data() {
		return {
			STATISTICAL_CYCLE,
			ENTRY_STATUS,
			taskName: '',
			modalVisible: false,
			modalForm: {
				withdrawReason: ''
			},
			modalRules: {
				withdrawReason: [
					{
						required: true,
						message: '请输入撤回原因',
						trigger: 'blur' 
					}
				]
			},
			paginConf: {
				total: 50,
				pageSize: 10,
				showQuickJumper: true,
				showSizeChanger: true,
				showTotal: (val) => {
					return `共${val}页`;
				}
			},
			columns: [
				{
					title: '序号',
					dataIndex: 'key',
					width: 140,
					customRender: (val, row, index) => {
						return index + 1;
					}
				},
				{
					title: '任务名称',
					dataIndex: 'taskName',
					width: 240,
				},
				{
					title: '统计周期类型',
					width: 240,
					dataIndex: 'type',
				},
				{
					title: '统计范围',
					dataIndex: 'range',
					width: 240,
				},
				{
					title: '录入状态',
					dataIndex: 'status',
					width: 240,
					scopedSlots: { customRender: 'status' },
				},
				{
					title: '操作',
					dataIndex: 'action',
					fixed: 'right',
					width: 350,
					scopedSlots: { customRender: 'action' }
				}
			],
			data: [
			  {
					key: '1',
					taskName: '数字城管',
					type: '月',
					range: '呼和浩特',
					desc: '我是任务描述',
					status: '待录入',
					action: ['编辑', '模板下载', '快捷上传', '撤回']
				},
				{
					key: '2',
					taskName: '数字城管',
					type: '月',
					range: '呼和浩特',
					desc: '我是任务描述',
					status: '待录入',
					action: ['编辑', '模板下载', '快捷上传']
				},
				{
					key: '3',
					taskName: '数字城管',
					type: '月',
					range: '呼和浩特',
					desc: '我是任务描述',
					status: '待录入',
					action: ['编辑', '模板下载', '快捷上传']
				}
			]
		};
	},
	computed: {

	},

	watch: {},
	mounted() {

	},

	methods: {
		handleSearch() {
			
		},
		handleModalOk() {
			this.$refs.modalForm.validate(valid => {
				if (valid) {
					this.modalVisible = false;
				}
			});
		},
		handleModalCancel() {
			this.modalVisible = false;
		},
		handleAction() {
			this.modalVisible = true;
		},
		handleModal() {
			this.$info({
				title: 'dsd',
				icon: ''
			});
		},
		handleInput() {
			
		},
		handleReset() {

		}
	},
};
</script>

<style lang="scss">
.task-list {
	.task-list-filter {
		flex-wrap: wrap;
	}
	.task-list-search {
		display: flex;
		justify-content: flex-end;
		margin-bottom: 16px;
	}
}
</style>
