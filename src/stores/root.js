//中间件
import createLogger from 'vuex/dist/logger';

import modules from './modules/root';

const debug = process.env.NODE_ENV !== 'production';

export const storeConfig = {
	strict: debug,
	plugins: debug ? [createLogger()] : [],
	modules
}