import { loginConfig } from './login/app';

export const basicRoutes = {
	base: '/',
	// base: PRE_ROUTER_URL,
	mode: 'history',
	routes: [
		...loginConfig,
		{
			path: '*',
			redirect: (to) => {
				return '/login';
			}
		}
	]
};
