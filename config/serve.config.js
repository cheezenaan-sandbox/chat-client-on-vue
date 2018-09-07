const serve = require('webpack-serve');
const config = require('./webpack.config');

/** @type serve.Options */
const serveOptions = {
  host: '0.0.0.0',
  port: 8080,
  hotClient: {
    port: 8081,
  },
};

module.exports = {
  ...config,
  mode: 'development',
  serve: serveOptions,
};
