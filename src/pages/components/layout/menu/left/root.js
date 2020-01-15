import { getHomeRoutes } from './home';

export const getSystemChildMenus = (auth, system) => ({
	home: getHomeRoutes(auth, system)
})