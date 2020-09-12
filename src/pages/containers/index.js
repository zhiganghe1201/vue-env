import { loginConfig } from './login/app';
import { homeConfig } from './home/app';

export const routes = [
	...loginConfig,
	...homeConfig
];

class Demo {
	static name = 123;
	
}