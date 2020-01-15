// import '@babel/polyfill';

const root = document.createElement('div');
document.body.appendChild(root);
import Vue from 'vue';
import Router from 'vue-router';
import Vuex from 'vuex';


import SetTittle from '@common/set-title';

/**
 * 全局变量 _global, 
 */
import App from '@components/app';
import Login from '@containers/login/modules/login';
import global from './_global';

/**
 * Vuex Config
 */
import { storeConfig } from '../stores/root';

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

Vue.component('set-title', SetTittle);

Vue.use(Vuex);
const store = new Vuex.Store(storeConfig);

Vue.use(global);

new Vue({
	store,
	render: h => h(Login)
}).$mount(root);