// import '@babel/polyfill';

const root = document.createElement('div');
document.body.appendChild(root);

import Vue from 'vue';
import Router from 'vue-router';
import './css/style.scss'
import SettleTittle from '@common/settle-title';

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

Vue.component(SettleTittle)

new Vue({
	render: h => h(App)
}).$mount(root)