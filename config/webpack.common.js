const path = require('path');
const APP_ROOT = process.cwd(); // process.cwd() 返回运行 node 命令时所在的文件夹的绝对路径 (node 命令 package,json)这里指 vue-env 下    __dirname 被执行的文件夹地址 这里指 vue-env/config 下

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // 新版本的引用需要这样

const webpackCommonConfig = {
	entry: {
		main: path.resolve(APP_ROOT, 'src/index.js')
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(APP_ROOT, 'dist'),
	},
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.esm.js',
		}
	},
	module: {
		rules: [
			{
				test: /\.(css|scss)$/,
				use: [
					'vue-style-loader',
					'css-loader',
					'sass-loader'
				]
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: path.resolve(APP_ROOT, 'src/static/index.tpl.html'),
			inject: 'body',
			filename: './index.html'
		})
	]
	
}


module.exports = webpackCommonConfig;