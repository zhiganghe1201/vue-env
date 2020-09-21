
module.exports = {
	'presets': [
		['@babel/preset-env', {
			useBuiltIns: 'usage',
			corejs: 3
		}]
	],
	'plugins': [
		['@babel/plugin-transform-runtime', {
			corejs: 3 // 这里corejs 和 presets里面设置的corejs 不同, 这里的corejs 指定了一个叫runtime-corejs的库版本, 使用时也需npm安装对应的包 npm i @babel/runtime-corejs3
		}],
		'@babel/plugin-syntax-dynamic-import',
		'transform-vue-jsx',
		[
			'@babel/plugin-proposal-class-properties',
			{
				'loose': true
			}
		]
	]
};