import { DEV_WITH_SERVER, BASE_URL } from '@constants/constants';
import _common from './_common';
import hzcity from './hzcity';
import wuling from './wuling';
import baiyang from './baiyang';

const API = {
	..._common,
	...hzcity,
	...wuling,
	...baiyang
};

let baseUrl;

if (__DEV__) {
	// 正常业务是一直是走后端接口, 设置为 !DEV_WITH_SERVER
	if (DEV_WITH_SERVER) { // 开发环境 - 前端自模拟 IP 地址会变
		baseUrl = 'http://10.54.243.137:8082'; 
	} else { // 开发环境 - 后端的接口数据
		baseUrl = BASE_URL;
	}
} else {
	baseUrl = BASE_URL;
}

const services = {};

const reg = /[a-zA-z]+:\/\/[^\s]*/;

Object.entries(API).forEach((item) => {
	if (reg.test(item[1])) {
		services[item[0]] = item[1];
	} else {
		services[item[0]] = baseUrl + item[1];
	}
});
console.log(services, '9090');

export default services;
