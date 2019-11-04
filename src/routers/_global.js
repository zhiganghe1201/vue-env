/**
 * 全局变量初始化使用 保证_global是最高级别变量
 */
import { TOKEN_KEY } from '@constants/constants';
/**
 * 组件内遵守使用this.$global
 * 组件外等特殊场景使用_global
 */

 typeof window === 'object' ? window._global = {} : this._global = {};

 // GUID  Globally Unique Identifier
_global.GUID = location.host.split(".")[0];

// 程序打开时间
_global.landingTime = new Date();

// 用户信息
// _global.user = Storage.get(TOKEN_KEY) || {};

// 环境
_global.env = process.env.NODE_ENV;

// 缩放比例
_global.scale = 1;
_global.height = window.innerHeight;
_global.width = window.innerWidth;

export default {
	install(Vue) {
		Vue.prototype.$global = _global;
		/**
		 * 权限信息
		 */
		// Vue.prototype.$auth = _global.user.auth;
	}
}