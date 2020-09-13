import { DEV_WITH_SERVER } from '@constants/constants';
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
// if (__DEV__) {

// }
console.log(_common);


export default API;
