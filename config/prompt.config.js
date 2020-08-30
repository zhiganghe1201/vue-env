const { prompt } = require('inquirer');
const fs = require('fs-extra');

const question = [
	{
		type: 'input',
		name: 'port',
		message: 'port',
		default: '8082'
	}
];


prompt(question).then((result = {}) => {
	let contents = '';
	const strObj = JSON.stringify(result || {});
	contents = `const obj = ${strObj};module.exports = obj;`;
	fs.outputFileSync('./config/user.config.js', contents);

}).catch(err => {
	console.log(err);
});