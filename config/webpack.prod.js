process.env.NODE_ENV = 'production';
const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const MiniCssExtractPlugiin = require('mini-css-extract-plugin');


const webpackCommonConfig = require('./webpack.common');

const webpackProdConfig = {
	mode: 'production',
	// devtool: 'cheap-module-source', // 生产环境不要开启source-map
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugiin.loader,
						options: {
							publicPath: '../'
						}
					},
					'css-loader'
				]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugiin({
			filename: '[name].css',
			chunkFilename: '[id].css',
		})
	]

}



module.exports = webpackMerge(
	webpackCommonConfig,
	webpackProdConfig
)