import { cloneDeep } from 'lodash';
import Router from 'vue-router';


class Manager {
	constructor(basicRoutes, dynamicRoutes) {
		this.basicRoutes = basicRoutes;
		this.dynamicRoutes = dynamicRoutes;

		this.router = null;
		this.config = this.init();
	}

	init() {
		
	}
}