const path = require('path');

const APP_ROOT = process.cwd(); // process.cwd() 返回运行 node 命令时所在的文件夹的绝对路径 (node 命令 package,json)这里指 vue-env 下    __dirname 被执行的文件夹地址 这里指 vue-env/config 下 __filename 完整的文件名

console.log(APP_ROOT);

const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // 新版本的引用需要这样

const webpackCommonConfig = {
	entry: {
		main: ['@babel/polyfill', path.resolve(APP_ROOT, 'src/main.js')], // babel 转码时需要在入口文件引入 @babel/polyfill
	},
	output: {
		filename: '[name].[hash:8].bundle.js',
		path: path.resolve(APP_ROOT, 'dist'),
		publicPath: '/'
	},
	resolve: {
		modules: [path.resolve(APP_ROOT, 'src'), 'node_modules'], // 配置 Webpack 去哪些目录下寻找第三方模块 可优化大量被导入的依赖
		extensions: ['.js', '.vue', '.json', '.scss', '.css'], // import 引入文件的时候不用加后缀
		alias: {
			'vue$': 'vue/dist/vue.esm.js', // 除去控制台报警告
			'@components': path.resolve(APP_ROOT, './src/pages/components'),
			'@assets': path.resolve(APP_ROOT, './src/assets'),
			'@common': path.resolve(APP_ROOT, './src/pages/components/_common'),
			'@constants': path.resolve(APP_ROOT, './src/constants'),
			'@containers': path.resolve(APP_ROOT, './src/containers')
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
			},
			{
				test: /\.js$/,
				use: ['babel-loader'],
				exclude: /node_modules/ 
			},
			{
				test: /\.vue$/,
				exclude: /node_modules/,
				use: 'vue-loader'
			},
			{
				test: /\.(png|jpg|gif|eot|ttf|woff|woff2|svg)$/,
				use: [{
					loader: 'url-loader',
					options: {
						limit: 10240, // // 当图片小于10kb时，使用base64的方式进行打包
						name: '[path]/[name].[hash:7].[ext]', // 加入hash是避免缓存
					}
				}]

			}
		]
	},
	plugins: [
		new VueLoaderPlugin(), // vue加载器
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: path.resolve(APP_ROOT, 'src/static/index.tpl.html'),
			inject: 'body',
			filename: './index.html'
		})
	],

	optimization: {
		splitChunks: { // 代码分离； 多入口文件
			name: 'common',
			chunks: 'all',
			cacheGroups: {
				vendors: {
					chunks: 'initial',
					test: '/node_modules/',
					name: 'vendor',
					// minichunks: 1,
					// enforce: true
				}
			}

		}
	}
	
};


module.exports = webpackCommonConfig;