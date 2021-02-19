<template>
	<div class="approval-list-main">
		<div class="approval-list-filter g-flex">
			<div>
				任务名称：
				<a-input placeholder="请输入任务名称" style="width: 240px" />
			</div>
			<div class="g-m-l-24">
				审批状态：
				<a-select placeholder="请选择" style="width: 240px">
					<a-select-option v-for="item in APPROVAL_STATUS" :key="item.value" :value="item.value">
						{{ item.label }}
					</a-select-option>
				</a-select>
			</div>
		</div>
		<div class="g-flex g-jc-fe g-m-t-24">
			<a-button type="primary" class="g-m-r-16" @click="handleSearch">
				查询
			</a-button>
			<a-button @click="handleReset">
				重置
			</a-button>
		</div>
		<a-table
			class="g-m-t-24"
			:pagination="paginConf"
			:columns="columns"
			:data-source="data"
		>
			<template slot="action">
				<span class="g-link-text g-m-r-16">查看</span>
				<span class="g-link-text" @click="handleToApproval">审批</span>
			</template>
		</a-table>
	</div>
</template>

<script>
import { APPROVAL_STATUS } from '@constants/constants';

export default {
	name: 'approval-list-main',
	components: {

	},

	data: () => ({
		APPROVAL_STATUS,
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
				dataIndex: 'index',
				width: 140,
				customRender: (val, row, index) => {
					return index + 1;
				}
				
			},
			{
				title: '任务名称',
				dataIndex: 'name'
				
			},
			{
				title: '撤回原因',
				dataIndex: 'reason',
				width: '240',
				ellipsis: true
			},
			{
				title: '申请部门',
				dataIndex: 'part'
				
			},
			{
				title: '申请人',
				dataIndex: 'applyName'
				
			},
			{
				title: '申请时间',
				dataIndex: 'applyTime'
				
			},
			{
				title: '申批状态',
				dataIndex: 'status'
				
			},
			{
				title: '操作',
				fixed: 'right',
				width: 160,
				scopedSlots: { customRender: 'action' }
			}
		],
		data: [
			{
				name: '打算',
				reason: '这是一个理由'
			},
			{}
		]
		
	}),

	computed: {},
	watch: {},
	mounted() {},

	methods: {
		handleSearch() {

		},
		handleReset() {

		},
		handleToApproval() {
			this.$router.push('/approvallist/apply');
		}
	},
};
</script>

<style lang="scss">

</style>
