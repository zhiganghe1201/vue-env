/* eslint-disable max-len */
const execSync = require('child_process').execSync; // 同步子进程
const fs = require('fs');

const versionPath = 'version.txt'; // version路径
const buildPath = 'dist'; // 打包的路径
const autoPush = true; // 写入版本信息之后是否自动提交git上
const commitHash = execSync('git show -s --format=%H').toString().trim(); // 当前提交的版本号
const gitRemteAddress = execSync('git remote -v').toString().split('\n')[0].split('\t')[1];
/** 程序开始**/
let versionStr = ''; // 版本信息字符串

// 如果versionPath存在，将先读取里边的版本信息
if (fs.existsSync(versionPath)) {
	versionStr = fs.readFileSync(versionPath).toString() + '\n';
}
console.log(versionStr.indexOf(commitHash) != -1);
// console.log(versionStr, 'version');
// 根据版本信息是已存在commit，进行不同处理
if (versionStr.indexOf(commitHash) != -1) {
	console.warn('\x1B[33m%s\x1b[0m', 'warming: 当前的git版本数据已经存在了!\n');
} else {
	// git 最后一次提交的 HEAD
	const commitUserName = execSync('git show -s --format=%cn').toString().trim();
	const commitUserEmail = execSync('git show -s --format=%ce').toString().trim();
	const commitMessage = execSync('git show -s --format=%s').toString().trim();
	const branch = execSync('git name-rev --name-only HEAD').toString().trim();
	const commitDateObj = new Date(execSync('git show -s --format=%cd').toString());
	const commitDate = `${commitDateObj.getFullYear() + '-' + (commitDateObj.getMonth() + 1) + '-' + commitDateObj.getDate() + ' ' + commitDateObj.getHours() + ':' + commitDateObj.getMinutes()}`;
	const buildUserName = execSync('git config user.name').toString().trim();
	const buildUserEmail = execSync('git config user.email').toString().trim();
	const nowDate = new Date();
	const buildDate = `${nowDate.getFullYear() + '-' + (nowDate.getMonth() + 1) + '-' + nowDate.getDate() + ' ' + nowDate.getHours() + ':' + nowDate.getMinutes()}`;
	versionStr = `
		commitHash: ${commitHash}
		commitUserName: ${commitUserName}
		commitUserEmail: ${commitUserEmail}
		commitMessage: ${commitMessage}
		commitDate: ${commitDate}
		gitRemoteAddress: ${gitRemteAddress}
		buildUserName: ${buildUserName}
		buildUserEmail: ${buildUserEmail}
		buildBranch:${branch}
		buildDate: ${buildDate}
		\n${new Array(80).join('*')}
		`;

	fs.writeFileSync(versionPath, versionStr, {
		flag: 'a'
	});
	console.log(execSync('git rev-parse --abbrev-ref HEAD').toString().trim(), 'sdsdsdsd');
	// 写入版本信息之后，自动将版本信息提交到当前分支的git上
	if (autoPush) {
		execSync(`git add ${versionPath}`);
		execSync('git commit -m docs:自动提交版本信息');
		execSync(`git push origin ${execSync('git rev-parse --abbrev-ref HEAD').toString().trim()}`);
	}
}
console.log('4444444444444444444444444444');

// 将version文件移植到打包文件中
if (fs.existsSync(buildPath)) {
	fs.writeFileSync(`${buildPath}/${versionPath}`, fs.readFileSync(versionPath));
}
console.log('5555555555555555555555555555555');

// 程序执行结束
console.info('\x1B[32m%s\x1b[0m', [
	'██████╗ ███████╗██████╗ ███████╗ █████╗  ██████╗██╗   ██╗',
	'██╔══██╗██╔════╝██╔══██╗██╔════╝██╔══██╗██╔════╝╚██╗ ██╔╝',
	'██████╔╝█████╗  ██████╔╝███████╗███████║██║  ███╗╚████╔╝ ',
	'██╔═══╝ ██╔══╝  ██╔══██╗╚════██║██╔══██║██║   ██║ ╚██╔╝  ',
	'██║     ███████╗██║  ██║███████║██║  ██║╚██████╔╝  ██║   ',
	'╚═╝     ╚══════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝ ╚═════╝   ╚═╝   '
].join('\n'));