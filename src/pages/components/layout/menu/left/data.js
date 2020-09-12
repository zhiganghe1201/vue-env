export const getDataRoutes = (auth, system) => [
	{
		name: '文章分析',
		icon: '',
		show: true,
		value: '/data/article',
		route: `/${system}/data/article`
	},
	{
		name: '视频分析',
		icon: '',
		show: true,
		value: '/data/video',
		route: `/${system}/data/video`
	}
];