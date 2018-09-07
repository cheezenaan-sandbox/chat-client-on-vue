const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, '../src/index.html'),
});

/** @type webpack.Configuration */
const config = {
  mode: process.env.NODE_ENV || 'development',
  resolve: {
    extensions: ['.ts', '.js'],
  },
  entry: {
    bundle: './src/javascripts/index.ts',
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].js',
  },
  module: {
    rules: [{ test: /.ts$/, loader: 'ts-loader' }],
  },
  plugins: [htmlWebpackPlugin],
  devtool: isProduction ? 'eval' : 'cheap-module-source-map',
};

module.exports = config;
