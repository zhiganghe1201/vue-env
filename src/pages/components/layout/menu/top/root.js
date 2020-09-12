import { getHomeTopRoutes } from './home';

export const getTopMenu = (auth) => ({
	...getHomeTopRoutes(auth)
});