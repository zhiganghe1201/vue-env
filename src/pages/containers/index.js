import { hzcityConfig } from './hzcity/app';
import { wulingConfig } from './wuling/app';
import { baiyangConfig } from './baiyang/app';

export const routes = [
	...hzcityConfig,
	...wulingConfig,
	...baiyangConfig
];