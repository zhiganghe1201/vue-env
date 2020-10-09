import { baiyangConfig } from '@containers/baiyang/app.js';
import { hzcityConfig } from '@containers/hzcity/app.js';
import { wulingConfig } from '@containers/wuling/app.js';

export const routesDist = [
	...baiyangConfig,
	...hzcityConfig,
	...wulingConfig
];