/*
  Command line script to start up webpack dev server
*/
const serve = require('webpack-serve');
const config = require('../webpack.config');
const buildConfig = require('../build.config');

serve({ config: config, content:  buildConfig.buildDir });