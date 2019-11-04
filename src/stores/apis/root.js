import { DEV_WITH_SERVER } from '@constants/constants';
import _common from './_common';
import login from './login';

const API = {
	..._common,
	...login
};

let baseUrl;
if(__DEV__) {

}
console.log(_common);


export default API;
