'use strict';

// Look in ./config folder for webpack.dev.js
const conf = getWebpackConfig(process.env.NODE_ENV, require('./.ng2-config.dist'));

module.exports = conf;

function getWebpackConfig(env, config) {
  switch (env) {
  case 'prod':
  case 'production':
    return require('ng2-webpack-config').webpack.prod(config);
  case 'test':
  case 'testing':
    return require('ng2-webpack-config').webpack.test(config);
  case 'dev':
  case 'development':
  default:
    return require('ng2-webpack-config').webpack.dev(config);
  }
}