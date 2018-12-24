const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV || 'production',
  module: {
    rules: [{
      test: /.js?$/,
      loader: 'babel-loader',
      exclude: /node-modules/,
    }, {
      test: /\.(png|jpg|gif|ttf|woff|woff2|eot|svg)$/,
      loader: 'file-loader',
    }, {
      test: /\.css$/,
      use: [
        ExtractCssChunks.loader,
        'css-loader',
      ],
    }],
  },
  plugins: [
    new ExtractCssChunks({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
};
