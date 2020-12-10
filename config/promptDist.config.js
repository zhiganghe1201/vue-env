const { prompt } = require('inquirer');
const fs = require('fs-extra');
const { exec } = require('shelljs');
const { resolve } = require('path');
const { routes } = require('./templates/routes');

const directory = resolve(__dirname, '../src/pages/containers/');
const targetModules = [];
fs.readdirSync(directory).forEach(file => {
	const fullpath = resolve(directory, file);
	const stat = fs.statSync(fullpath);
	if (stat.isDirectory) {
		targetModules.push(file);
	}
});
const question = [
	{
		type: 'list',
		name: 'isBuildAll',
		message: 'Build All Modules ?',
		choices: [targetModules.join(','), 'NO']
	},
	{
		type: 'checkbox',
		name: 'modules',
		when: (answers) => answers.isBuildAll === 'NO',
		message: 'Select modules:',
		pageSize: targetModules.length + 1,
		choices: targetModules,
		validate(answer) {
			console.log(answer, 'answerhlkjhlkh');
			if (answer.length < 1) {
				return '至少选择一个模块, 使用Space键选中';
			}
			return true;
		}
	}
];

prompt(question).then((result = {}) => {
	let { isBuildAll, modules } = result;
	modules = isBuildAll === 'NO' ? modules : targetModules;
	console.log(modules);
	fs.outputFileSync('./src/routers/routers.dist.js', routes({ modules, env: 'dist' }));
}).catch(err => {
	console.log(err);
});
