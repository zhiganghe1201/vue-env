const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const webpackCommonConfig = require('./webpack.common.js');


const webpackDevConfig = {
	mode: 'development',
	devtool: 'cheap-module-eval-souce-map', // source-map 将编译后的代码映射会原始源代码。
	devServer: {
		contentBase: '../dist', 
		compress: true, // 开启Gzip压缩
		port: 8081, 
		host: 'localhost', // 设置服务器的ip地址，默认localhost
		open: true, // 自动打开浏览器
		inline: true,
		historyApiFallback: true,
		hot: true

	},

	plugins: [

		new webpack.HotModuleReplacementPlugin()
	]
}

module.exports = webpackMerge(
	webpackCommonConfig,
	webpackDevConfig
)