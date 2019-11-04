// import '@babel/polyfill';

const root = document.createElement('div');
document.body.appendChild(root);
import Vue from 'vue';
import Router from 'vue-router';
import Vuex from 'vuex';


import SettleTittle from '@common/settle-title';

/**
 * 全局变量 _global, 
 */
import global from './_global';

/**
 * Vuex Config
 */
import { storeConfig } from '../stores/root';

import App from '@components/app'
// const vm = new Vue({
// 	el: '#app',
// 	data: {
// 		message: 'hello vue'
// 	},
// 	template: '<App />',
// 	components: {
// 		App
// 	}
// })

/**
 * 全局组件
 */

Vue.component(SettleTittle)

Vue.use(Vuex);
const store = new Vuex.Store(storeConfig)

Vue.use(global);

new Vue({
	store,
	render: h => h(App)
}).$mount(root)