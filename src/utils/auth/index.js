import { request } from '../request';

export const getLoginInfo = (code, flag = 1) => {
	console.log(code, flag, 'getLoginInfo');
	request({
		url: 'GET_USER_INFO_POST',
		method: 'post',
		params: {
			code,
			flag: +flag
		}
	}).then(res => {
		console.log(res, 'reset');
	});
};