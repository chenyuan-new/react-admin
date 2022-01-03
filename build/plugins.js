const webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  { resolve } = require('./utils'),
  FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin'),
  BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin,
  WebpackBar = require("webpackbar"),
  { isProd } = require('./utils');

const basePlugins = [
  new webpack.HotModuleReplacementPlugin(),
  new FriendlyErrorsPlugin(),
  new WebpackBar(),
];

const devPlugins = [
  new HtmlWebpackPlugin({
    title: 'reactAmdmin 后台系统方案',
    template: resolve('public/index.html')
  }),
];

const plugins = basePlugins.concat(devPlugins);

module.exports = {
  plugins
};