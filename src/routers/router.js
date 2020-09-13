// import '@babel/polyfill';

import Vue from 'vue';
import Router from 'vue-router';
import Vuex from 'vuex';
import { isDev } from '@utils';

import SetTittle from '@common/set-title';
import { routesDev } from './routers.dev';
import { routesDist } from './routers.dist';

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
Vue.use(Vuex);

const store = new Vuex.Store(storeConfig);


Vue.use(Router);
console.log(isDev);
let routes;
if (isDev) {
	routes = routesDev;
} else {
	routes = routesDist;
}

const router = new Router({
	mode: 'history',
	routes
});


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
