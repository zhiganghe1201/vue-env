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
    type: 'confirm',
    name: 'yarn',
    message: 'yarn ?',
    default: false
  },
  {
    type: 'input',
    name: 'port',
    message: 'port',
    default: '8082',
    choices(answers) {
      if (answers.yarn) {
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
  },
  {
    type: 'list',
    name: 'isSelectAll',
    message: 'Select All Modules ?',
    choices: [targetModules.join(','), 'NO']
  },
  {
    type: 'checkbox',
    name: 'modules',
    when: (answers) => answers.isSelectAll === 'NO',
    message: 'Select modules:',
    pageSize: targetModules.length + 1,
    choices: targetModules,
    validate(answer) {
      if (answer.length < 1) {
        return '至少选择一个模块, 使用Space键选中';
      }
      return true;
    }
  }
];


prompt(question).then((result = {}) => {
  let { yarn, port, isSelectAll, modules } = result;
  modules = isSelectAll === 'NO' ? modules : targetModules;
  let contents = `const obj = { 'yarn': ${yarn}, 'port': ${port} }; module.exports = obj;`;
  fs.outputFileSync('./config/user.config.js', contents);
  console.log(modules);
  fs.outputFileSync('./src/routers/routers.dev.js', routes({ modules, env: 'dev' }));

}).catch(err => {
  console.log(err);
});