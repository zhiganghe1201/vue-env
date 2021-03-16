const fs = require('fs-extra');

// eslint-disable-next-line max-len
const commitRE = /^(revert: )?(fix|feat|docs|perf|test|types|style|build|chore|refactor|breaking change|merge|ci|wip)(\(.+\))?: .{1,50}/;
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
    - fix：修补bug
    - perf: 性能, 体验优化
    - style: 不影响程序逻辑的代码修改(修改空白字符，格式缩进，补全缺失的分号等，没有改变代码逻辑)
    - test：增加测试
    - chore：不修改src或者test的其余提交,例如构建过程或辅助工具的变动
    - merge: 分支合并 Merge branch ? into ?
    - refactor：重构（即不是新增功能，也不是修改bug的代码变动）
    - revert：回滚某个更早之前的提交
    - ci: 与CI(持续集成服务)有关的改动
    - wip: 开发中
    `
  );
  process.exit(1);
}
