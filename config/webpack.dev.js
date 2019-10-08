const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const webpackCommonConfig = require('./webpack.common.js');


const webpackDevConfig = {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		contentBase: '../dist', 
		compress: true, // 开启Gzip压缩
		port: 8081, 
		host: 'localhost', // 设置服务器的ip地址，默认localhost
		open: true, // 自动打开浏览器
		inline: true,
		historyApiFallback: true,
		hot: true

	}
}

module.exports = webpackMerge(
	webpackCommonConfig,
	webpackDevConfig
)