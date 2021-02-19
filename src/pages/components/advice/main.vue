<template>
	<div class="advice">
		<div class="g-m-b-24">
			指数名称：<a-input v-model="name" style="width: 240px" placeholder="请输入指数名称" />
		</div>
		<div class="addvice-search">
			<a-button type="primary" class="g-m-r-16" @click="handleSearch">
				查询
			</a-button>
			<a-button @click="handleReset">
				重置
			</a-button>
		</div>
		<a-button type="primary" class="g-m-b-12" @click="handleToAdd">
			新增
		</a-button>
		<a-table 
			:pagination="pageConf"
			:columns="columns"
			:data-source="data"
		>
			<template slot="action">
				<span class="g-m-r-24 g-link-text">
					查看
				</span>
				<span class="g-link-text">
					编辑
				</span>
			</template>
		</a-table>
	</div>
</template>

<script>
export default {
	name: 'advice-main',
	data: () => ({
		name: '',
		pageConf: {
			total: 19,
			pageSize: 5,
			showQuickJumper: true,
			showSizeChanger: true,
			showTotal: (val) => {
				return `共${val}页`;
			}
		},
		columns: [
			{
				title: '序号',
				customRender: (val, row, index) => {
					return index + 1;
				},
				dataIndex: 'key',
				key: 'index'
			},
			{
				title: '指数名称',
				dataIndex: 'name',
				key: 'name'
			},
			{
				title: '操作',
				fixed: 'right',
				dataIndex: 'action',
				ley: 'action',
				width: 250,
				scopedSlots: { customRender: 'action' } 
			}
		],
		data: [
			{
				name: '厨余垃圾分类参与率'
			},
			{
				name: '厨余垃圾分类参与率'
			}

		]
	}),

	computed: {

	},
	watch: {

	},
	mounted() {

	},

	methods: {
		handleSearch() {

		},
		handleReset() {

		},
		handleToAdd() {
			this.$router.push('/advice/add');
		}

	},
};
</script>

<style lang='scss'>
.advice {
	.addvice-search {
		display: flex;
		justify-content: flex-end;
	}
}

</style>
