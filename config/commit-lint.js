const fs = require('fs-extra');

const commitRE = /^(revert: )?(fix|feat|docs|perf|test|types|build|chore|refactor|breaking change|merge)(\(.+\))?: .{1,50}/;
const mergeRE = /Merge branch /;

const gitParams = process.env.HUSKY_GIT_PARAMS;
const commitMsg = fs.readFileSync(gitParams, 'utf-8').trim();

if (!commitRE.test(commitMsg) && !mergeRE.test(commitMsg)) {
	console.error(
		`invalid commit message: "${commitMsg}".

		Examples: 

		- fix(Button): incorrect style
		- feat(Button): incorrect style
		- docs(Button): fix typo

		Allowed Types:

		- build: 主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交
		- docs：文档更新
		- feat：新增功能（feature）
		- Merge: 分支合并 Merge branch ? into ?
		- fix：修补bug
		- perf: 性能, 体验优化
		- style: 不影响程序逻辑的代码修改(修改空白字符，格式缩进，补全缺失的分号等，没有改变代码逻辑)
		- test：增加测试
		- chore：构建过程或辅助工具的变动
		- refactor：重构（即不是新增功能，也不是修改bug的代码变动）
		- revert：回滚某个更早之前的提交
		- chore：不属于以上类型的其他类型
		`
	);
	process.exit(1);
}
