<template>
	<div class="hangzhou-main g-fs-24 g-b g-flex-cc g-fd-c">
		hangzhou - city - page
		<cci-popconfirm title="我是一个antdv">
			来点我一下
		</cci-popconfirm>
		<div>
			<cci-echarts style="width: 500px; height:500px" :options="option" />
		</div>
		<cci-datepicker @change="handleDateChange" />
	</div>
</template>

<script>
import { Popconfirm, DatePicker } from 'ant-design-vue';
import zhCN from 'ant-design-vue/es/locale/zh_CN';

export default {
	name: 'hangzhou-main',
	components: {
		'cci-popconfirm': Popconfirm,
		'cci-datepicker': DatePicker
	},

	data() {
		return {
			locale: zhCN
		};
	},
	computed: {
		option() {
			const data = [];

			for (let i = 0; i <= 360; i++) {
				let t = (i / 180) * Math.PI;
				let r = Math.sin(2 * t) * Math.cos(2 * t);
				data.push([r, i]);
			}

			return {
				title: {
					text: '极坐标双数值轴'
				},
				legend: {
					data: ['line']
				},
				polar: {
					center: ['50%', '54%']
				},
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						type: 'cross'
					}
				},
				angleAxis: {
					type: 'value',
					startAngle: 0
				},
				radiusAxis: {
					min: 0
				},
				series: [{
					coordinateSystem: 'polar',
					name: 'line',
					type: 'line',
					showSymbol: false,
					data
				}],
				animationDuration: 2000
			};
		}
	},

	watch: {},
	mounted() {},

	methods: {
		handleDateChange(date) {
			console.log(date);
		}
	},
};
</script>

<style lang="scss">
// .hangzhou-main {}
</style>
