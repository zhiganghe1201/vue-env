const path = require('path');

const webpackMerge = require('webpack-merge');
const webpackCommonConfig = require('./webpack.common');

const webpackProdConfig = {
	mode: 'production',

}



module.exports = webpackMerge(
	webpackCommonConfig,
	webpackProdConfig
)