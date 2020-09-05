import Login from './modules/main';

export const loginConfig = [
	{
		path: '/login',
		name: 'login',
		component: () => import('./modules/main.vue')
	}
];