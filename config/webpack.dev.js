const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const fs = require('fs-extra');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const webpackCommonConfig = require('./webpack.common.js');
const userConfig = fs.existsSync(path.resolve(__dirname, './user.config.js')) 
	? require('./user.config.js')
	: {};

const ENV_IS_DEV = process.env.NODE_ENV === 'development';

const localPort = (() => {
	if (ENV_IS_DEV) {
		return userConfig.port || 8088;
	}
	return 9098;
})();
const localIp = (() => {
	const ips = [];
	const os = require('os');
	const ntwk = os.networkInterfaces();
	for (const k in ntwk) {
		for (let i = 0; i < ntwk[k].length; i++) {
			const _add = ntwk[k][i].address;
			if (_add && _add.split('.').length == 4 && !ntwk[k][i].internal && ntwk[k][i].family == 'IPv4') {
				ips.push(ntwk[k][i].address);
			}
		}
	}
	return ips[0] || 'localhost';
})();

const webpackDevConfig = {
	mode: 'development',
	devtool: 'cheap-module-eval-souce-map', // source-map 将编译后的代码映射会原始源代码。
	devServer: {
		contentBase: '../dist', 
		// compress: true, // 开启Gzip压缩
		port: localPort, 
		host: localIp, 
		open: true, // 自动打开浏览器
		inline: true,
		quiet: true,
		historyApiFallback: true, // 404页面会自动跳到 / 页面
		hot: true,
		// proxy: {
		// 	'/api': {
		// 		target: 'http://test.com',
		// 		secure: false,
		// 		changeOrigin: true,
		// 	}
		// }
	},

	plugins: [
		new webpack.NamedChunksPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new FriendlyErrorsWebpackPlugin({
			compilationSuccessInfo: {
				messages: [`Dev Server: http://${localIp}:${localPort}`],
				notes: ['Success!']
			},
			onErrors: () => {},
			clearConsole: true,
			additionalFormatters: [],
			additionalTransformers: []
		})
	]
};

module.exports = webpackMerge(
	webpackCommonConfig,
	webpackDevConfig
);