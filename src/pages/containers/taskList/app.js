export const taskListConfig = [
	{
		path: '/tasklist',
		name: 'taskList',
		component: () => import('./modules/main.vue'),
		meta: {
			title: '任务列表',
			route: [
				{
					title: '任务列表',
					path: '/tasklist'
				}
			]
		}
	},
	{
		path: '/tasklist/entry',
		name: 'taskEntry',
		component: () => import('./modules/task-entry.vue'),
		meta: {
			title: '任务录入',
			route: [
				{
					title: '任务列表',
					path: '/tasklist'
				},
				{
					title: '任务录入',
					path: '/tasklist/entry'
				}
			]
		},
	}
];