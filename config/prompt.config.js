const { prompt } = require('inquirer');
const fs = require('fs-extra');
const { exec } = require('shelljs');

const question = [
	{
		type: 'confirm',
		name: 'yarn',
		message: 'yarn add?',
		default: false
	},
	{
		type: 'input',
		name: 'port',
		message: 'port',
		default: '8082',
		choices(answers) {
			if (answers.add) {
				let done = this.async();
				exec('yarn', { silent: true }, (code, stdout, stderr) => {
					console.log('Exit code:', code);
					console.log('Program output:', stdout);
					console.log('Program stderr:', stderr);
					if (code === 0) {
						done(null, true);
					}

				});
			}
		}
	}
];


prompt(question).then((result = {}) => {
	let contents = `const obj = { 'install': ${result.install}, 'port': ${result.port} }; module.exports = obj;`;
	fs.outputFileSync('./config/user.config.js', contents);

}).catch(err => {
	console.log(err);
});