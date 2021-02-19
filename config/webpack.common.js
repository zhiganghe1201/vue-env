console.log(`NODE_ENV : ${process.env.NODE_ENV}`);
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // 新版本的引用需要这样
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const APP_ROOT = process.cwd();
const ENV_IS_DEV = process.env.NODE_ENV === 'development';
const TIMESTAMP = new Date().getTime();

// TODO_ 打包部署时操作以下地址
const DIR_PATH = ENV_IS_DEV ? '' : `static.${TIMESTAMP}/`;
const DIR_URL_PATH = ENV_IS_DEV ? '' : `static.${TIMESTAMP}/`;

const postcssLoader = {
	loader: 'postcss-loader',
	options: {
		config: {
			path: path.resolve(APP_ROOT, 'config/postcss.config.js'),
		},
	},
};

const webpackCommonConfig = {
	// '@babel/polyfill',  用于低版本浏览器兼容, 已不推荐使用, 推荐通过preset-env的useBuiltIns 属性按需引入
	entry: {
		main: [path.resolve(APP_ROOT, 'src/main.js')], // babel 转码时需要在入口文件引入 @babel/polyfill 也可以写在这里
	},
	output: {
		path: path.resolve(APP_ROOT, 'dist'),
		filename: `${DIR_PATH}js/[name].[hash:8].bundle.js`,
		chunkFilename: `${DIR_PATH}js/[name].[hash:8].chunk.js`,
		sourceMapFilename: `${DIR_PATH}js/[name].[hash:8].bundle.map`,
		publicPath: ENV_IS_DEV ? '/' : '/' // 部署时 页面 引用的路径 如 https://www.test.com/demo/
	},
	// 路径重定向
	resolve: {
		modules: [path.resolve(APP_ROOT, 'src'), 'node_modules'], // 配置 Webpack 去哪些目录下寻找第三方模块 可优化大量被导入的依赖
		extensions: ['.js', '.vue', '.json', '.scss', '.css'], // import 引入文件的时候不用加后缀
		alias: {
			vue$: 'vue/dist/vue.esm.js', // 除去控制台报警告
			'@components': path.resolve(APP_ROOT, './src/pages/components'),
			'@assets': path.resolve(APP_ROOT, './src/assets'),
			'@common': path.resolve(APP_ROOT, './src/pages/components/_common'),
			'@constants': path.resolve(APP_ROOT, './src/pages/constants'),
			'@containers': path.resolve(APP_ROOT, './src/pages/containers'),
			'@utils': path.resolve(APP_ROOT, './src/utils'),
			'@stores': path.resolve(APP_ROOT, './src/stores'),
		},
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				include: path.resolve(APP_ROOT, 'src'),
				use: [
					{
						loader: 'babel-loader',
						options: {
							cacheDirectory: true,
						},
					}
				],
			},
			{
				test: /\.(css|scss)$/,
				use: [
					'vue-style-loader',
					'css-loader',
					postcssLoader,
					'sass-loader',
					{
						loader: 'sass-resources-loader', // ??
						options: {
							resources: [
								path.resolve(
									APP_ROOT,
									'src/css/themes/index.scss'
								)
							],
						},
					}
				],
				// 组件内的样式
				include: [
					path.resolve(APP_ROOT, 'src/'),
					path.resolve(APP_ROOT, 'node_modules')
				],
			},
			{
				test: /\.(css|scss)$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					postcssLoader,
					'sass-loader'
				],
				// 全局的样式
				include: [
					path.resolve(APP_ROOT, 'src/css')
					// path.resolve(APP_ROOT, 'node_modules/iview')
				],
			},
			{
				test: /\.js$/,
				use: ['babel-loader'],
				exclude: /node_modules/,
			},
			{
				test: /\.vue$/,
				exclude: /node_modules/,
				use: 'vue-loader',
			},
			{
				test: /\.(png|jpg|gif|eot|ttf|woff|woff2|svg)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 10240, // // 当图片小于10kb时，使用base64的方式进行打包
							name: `${DIR_URL_PATH}assets/[name].[hash:7].[ext]`, // 加入hash是避免缓存
						},
					}
				],
			}
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: `${DIR_PATH}css/initial.[name].css`,
		}),
		// 把一些public 的静态文件copy到dist
		// new CopyWebpackPlugin({
		// 	patterns: [
		// 		{
		// 			from: path.resolve(APP_ROOT, 'public/libs/'),
		// 			to: path.resolve(APP_ROOT, 'dist/libs/')
		// 		}
		// 	]
		// }),
		new VueLoaderPlugin(),
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: path.resolve(APP_ROOT, 'public/index.tpl.html'),
			chunks: ['common', 'main'], // 当前路由所包含的模块，注意common引入方式
			inject: 'body', // js css 插入html的位置,true或body时插入body底部, 为head时插入head中
			filename: './index.html', // 生成html 存放的路径, 相对与path的路径
			favicon: path.resolve(APP_ROOT, 'public/favicon.ico'), // TODO 目前开发环境不显示
			minify: {
				// 压缩HTML文件
				removeComments: true, // 移除HTML中的注释
				collapseWhitespace: false, // 删除空白符与换行符
			},
		})
	],

	optimization: {
		splitChunks: {
			// 代码分离； 多入口文件
			name: 'common',
			chunks: 'all',
			cacheGroups: {
				vendors: {
					chunks: 'initial',
					test: '/node_modules/',
					name: 'vendor',
					// minichunks: 1,
					// enforce: true
				},
			},
		},
		minimize: !ENV_IS_DEV,
		noEmitOnErrors: true,
		namedModules: true,
	},
	// cache: true, // 启用编译缓存
};

module.exports = {
	APP_ROOT,
	DIR_PATH,
	webpackCommonConfig,
};
