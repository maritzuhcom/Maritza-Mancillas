const DashboardPlugin = require('webpack-dashboard/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: process.env.NODE_ENV || 'production',
  devtool: 'true',
  module: {
    rules: [{
      test: /.js?$/,
      loader: 'babel-loader',
      exclude: /node-modules/,
    }, {
      test: /\.(png|jpg|gif|ttf|woff|woff2|eot|svg)$/,
      loader: 'file-loader',
    }, {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    }, {
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
      ],
    }],
  },
  plugins: [
    new DashboardPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
};
