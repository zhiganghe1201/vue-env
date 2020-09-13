const fs = require('fs-extra');

const routes = (opts = {}) => {
	const { modules } = opts;

	let contents = '';
	modules.forEach(item => {
		contents += `import { ${item}Config } from '@containers/${item}/app.js';\n`;
	});
	contents += '\n';
	contents += 'export const routesDev = [\n';
	modules.forEach(item => {
		contents += `	...${item}Config,\n`;
	});
	contents += '];';

	return contents;

};

module.exports = {
	routes
};