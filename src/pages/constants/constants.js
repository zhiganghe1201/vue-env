/**
 * 根路由
 */
export const PRE_ROUTER_URL = process.env.NODE_ENV === 'developemnt'
	? '/'
	: '/';

/**
 * 开发模式
 * !0 后端 !1前端:3000端口
 */
export const DEV_WITH_SERVER = !0;

/**
 * 用于判断登录token / user
 */
export const TOKEN_KEY = 'user_token';
export const ACCOUNT_TOKEN_KEY = 'accont_token';