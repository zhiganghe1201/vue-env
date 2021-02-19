<template>
	<div class="task-entry">
		<div class="g-c-000 g-fs-18">
			垃圾分类参与情况
		</div>
		<div class="content g-m-t-24">
			<div class="g-flex g-jc-sb">
				<div>
					<div class="item">
						<span class="g-fs-14 label g-c-000">统计范围：</span>
						<span>回民区（含镇街）</span>
					</div>
					<div class="item">
						<span class="g-fs-14 label g-c-000">录入部门：</span>
						<span>2020年2月</span>
					</div>
				</div>
				
				<div>
					<a-button type="primary">
						下载模板
					</a-button>
					<a-button type="primary">
						快捷上传
					</a-button>
				</div>
			</div>
			<div class="g-flex g-jc-sb">
				<div>
					<div class="item"> 
						<span class="label g-fs-14 g-c-000">统计周期类型：</span>
						<span>回民区（含镇街）</span>
					</div>
					<div class="item">
						<span class="g-fs-14 label g-c-000">起始周期：</span>
						<span>2020年2月</span>
					</div>
				</div>
				
				<div class="g-pd-t-8">
					录入状态
				</div>
			</div>
			
			<div class="g-flex g-jc-sb">
				<div class="item">
					<span class="label g-fs-14 g-c-000">截止日期：</span>
					<span>2020年12月15日</span>
				</div>
				<div class="g-fs-20 g-c-000">
					待填写
				</div>
			</div>
		</div>
		<a-tabs default-actice-key="1" :animated="false">
			<a-tab-pane key="1" tab="当前任务">
				<current-task />
			</a-tab-pane>
			<a-tab-pane key="2" tab="往期任务">
				ssd
			</a-tab-pane>
		</a-tabs>
	</div>
</template>

<script>
import CurrentTask from './currnt-task';

export default {
	name: 'task-entry',
	components: {
		'current-task': CurrentTask
	},

	data() {
		return {
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
.task-entry {
	.content {
		.item {
			display: inline-block;
			width: 240px;
			.label {
				display: inline-block;
				width: 120px;
				text-align: right;
			}
		}
	}
}

</style>
