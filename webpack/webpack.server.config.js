const path = require('path');
const merge = require('webpack-merge');
const webpackNodeExternals = require('webpack-node-externals');
const baseConfig = require('./webpack.base.config');

module.exports = merge(baseConfig, {
  target: 'node',
  entry: path.resolve(__dirname, '..', 'server', 'index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '..', 'build'),
    publicPath: '/',
  },
  externals: [webpackNodeExternals()],
});
