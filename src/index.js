// import '@babel/polyfill';

import Vue from 'vue';
import './css/style.scss'
import App from '@components/app'
const vm = new Vue({
	el: '#app',
	data: {
		message: 'hello vue'
	},
	components: {
		App
	}
})