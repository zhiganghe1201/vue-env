// import '@babel/polyfill';

import Vue from 'vue';
import Router from 'vue-router';
import Vuex from 'vuex';
import { sync } from 'vuex-router-sync';
import { isDev } from '@utils';
import request from '@utils/request';

import SetTittle from '@common/set-title';
import { routesDev } from './routers.dev';
import { routesDist } from './routers.dist';

import '../stores/apis/root';
/**
 * 全局变量 _global, 
 */

import global from './_global';


/**
 * Vuex Config
 */
import { storeConfig } from '../stores/root';


/**
 * 全局组件
 */

Vue.component('set-title', SetTittle);


Vue.use(global);
Vue.use(request);
Vue.use(Vuex);

const store = new Vuex.Store(storeConfig);


Vue.use(Router);

let routes;
if (isDev) {
	routes = routesDev;
} else {
	routes = routesDist;
}

export const router = new Router({
	mode: 'history',
	routes
});


sync(store, router);

const app = new Vue({
	store,
	router,
	render: h => {
		return (
			<div id="app">
				<router-view></router-view>
			</div>
		);
	}
}).$mount('#app');

globalThis.app = app;
globalThis.routes = routes;
