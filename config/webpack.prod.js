process.env.NODE_ENV = 'production';
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const { webpackCommonConfig, DIR_PATH } = require('./webpack.common');

const webpackProdConfig = {
  mode: 'production',
  // devtool: 'cheap-module-source', // 生产环境不要开启source-map

  plugins: [
    new webpack.DefinePlugin({
      __DEV__: 'false'
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static', // static 生成html文件 | server 一直监听 | disabled 生成json文件
      // analyzerHost: localIp,
      // analyzerPort: bundleAnalyzerPort,
      reportFilename: `${DIR_PATH}report.html`,
      defaultSizes: 'gzip',
      openAnalyzer: false,
      generateStatsFile: false,
      // statsFilename: 'stats.json',
      // statsOptions: null,
      logLevel: 'info'
    })
  ]

};


module.exports = webpackMerge(
  webpackCommonConfig,
  webpackProdConfig
);