
module.exports = {
	'presets': [
		['@babel/preset-env', {
			useBuiltIns: 'usage',
			corejs: 3
		}]
	],
	'plugins': [
		['@babel/plugin-transform-runtime', {
			corejs: 3
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