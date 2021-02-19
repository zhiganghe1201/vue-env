export const adviceConfig = [
	{
		path: '/advice',
		name: 'adviceList',
		component: () => import('./modules/main.vue'),
		meta: {
			title: '决策建议',
			route: [
				{
					title: '决策建议',
					path: '/advice'
				}
			]
		}
	},
	{
		path: '/advice/add',
		name: 'adviceAdd',
		component: () => import('./modules/add.vue'),
		meta: {
			title: '新增建议',
			route: [
				{
					title: '决策建议',
					path: '/advice'
				}, {
					title: '新增建议',
					path: '/advice/add'
				}
			]
		}
	}

];