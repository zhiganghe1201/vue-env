// import '@babel/polyfill';

import Vue from 'vue';
import Router from 'vue-router';
import Vuex from 'vuex';
import { routes } from '@containers/index';


import SetTittle from '@common/set-title';

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

const router = new Router({
	mode: 'history',
	routes
});


new Vue({
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