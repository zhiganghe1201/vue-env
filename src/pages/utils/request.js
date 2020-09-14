import axios from 'axios';

import URLS from '@stores/apis/root';
import { router } from '../routers/router';

const service = axios.create({
	timeout: 10000
});

const request = ({ url, method = 'get', params, config = {} }) => {
	return new Promise((resolve, reject) => {
		if (!url) reject(new Error('url is not null!!!'));
		
		service({
			url: URLS[url],
			method,
			params,
			...config
		}).then(response => {
			resolve(response);
		}).catch(err => {
			reject(err);
		});
	});
};

let httpCode = { 
	400: '请求参数错误',
	401: '权限不足, 请重新登录',
	403: '服务器拒绝本次访问',
	404: '请求资源未找到',
	500: '内部服务器错误',
	501: '服务器不支持该请求中使用的方法',
	502: '网关错误',
	503: '服务不可用',
	504: '网关超时'
};

// 拦截请求
service.interceptors.request.use(config => {
	// config.headers['token'] = sessionStorage.getItem('TOKEN_KEY') || ''; // 根据业务可添加token
	// const token = storage.getItem(TOKEN_KEY);
	// const tokenExpire = storage.getItem(TOKEN_KEY_EXPIRE);
	// const nowTime = new Date().getTime();
	// if (!token) {
	// 	router.push('/not-fount');
	// 	return Promise.reject(new Error('您没有权限, 请稍后重试'));
	// }
	// if ((nowTime - 60000) > tokenExpire + '000') { // 有效期1分钟前更新tuken
	// 	tukenRefresh();
	// }
	// loadingInstance = Loading.service({ // 发起请求时加载全局loading，请求失败或有响应时会关闭
	//   spinner: 'fa fa-spinner fa-spin fa-3x fa-fw',
	//   text: '拼命加载中...'
	// });
	config.headers = Object.assign(config.method === 'get' ? {
		'Accept': 'application/json',
		'Content-Type': 'application/json;charset=UTF-8'
	} : {
		'Context-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
	}, config.headers);

	if (config.method === 'get') { // 添加时间戳参数，防止浏览器（IE）对get请求的缓存
	  config.params = {
			...config.params,
			t: new Date().getTime()
	  };
	}
	return Promise.resolve(config);
}, error => {
	return Promise.reject(error);
});
  
// 拦截响应
service.interceptors.response.use(response => {
	// loadingInstance.close();
	const { data, status, statusText } = response;
	return Promise.resolve({
		data,
		status,
		statusText
	});
}, error => {
	// loadingInstance.close();
	console.log(error);
	if (error.response) {
		  // 根据请求失败的http状态码去给用户相应的提示
	  let tips = error.response.status in httpCode ? httpCode[error.response.status] : error.response.data.message;
	  Message({
			message: tips,
			type: 'error'
	  });
	  if (error.response.status === 401) {
			router.push({
				path: '/not-fount' 
			});
	  }
	  return Promise.reject(error);
	} else {
	  Message({
			message: '您没有权限, 请稍后重试',
			type: 'error'
	  });
	  return Promise.reject(new Error('请求超时, 请稍后重试'));
	}
});


export default {
	install(Vue) {
		Vue.prototype.$request = request;
	}
};
