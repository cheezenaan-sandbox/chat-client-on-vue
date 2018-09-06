const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, '../src/index.html')
});

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: {
    bundle: './src/javascripts/index.js'
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].js'
  },
  plugins: [htmlWebpackPlugin],
  devtool: isProduction ? 'eval' : 'cheap-module-source-map'
};
