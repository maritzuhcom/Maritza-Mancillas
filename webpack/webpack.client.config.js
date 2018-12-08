const path = require('path');
const merge = require('webpack-merge');
const { ReactLoadablePlugin } = require('react-loadable/webpack');
const baseConfig = require('./webpack.base.config');

module.exports = merge(baseConfig, {
  entry: path.resolve(__dirname, '..', 'client', 'index.js'),
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    path: path.resolve(__dirname, '..', 'public'),
    publicPath: '/',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },
  plugins: [
    new ReactLoadablePlugin({
      filename: './dist/react-loadable.json',
      publicPath: '/',
    }),
  ],
});
