const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const webpackCommonConfig = require('./webpack.common.js');


const webpackDevConfig = {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		contentBase: '../dist'
	}
}

module.exports = webpackMerge(
	webpackCommonConfig,
	webpackDevConfig
)