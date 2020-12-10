const fs = require('fs-extra');

const routes = (opts = {}) => {
	const { modules, env } = opts;

	let contents = '';
	modules.forEach(item => {
		contents += `import { ${item}Config } from '@containers/${item}/app.js';\n`;
	});
	contents += '\n';
	contents += `export const ${env === 'dev' ? 'routesDev' : 'routesDist'} = [\n`;
	modules.forEach(item => {
		contents += `	...${item}Config,\n`;
	});
	contents += '];';

	return contents;

};

module.exports = {
	routes
};