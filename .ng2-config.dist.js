/* eslint no-var:0 */
'use strict';
var pkg = require('./package.json');

module.exports = {
  // metadata
  title: pkg.description,
  baseUrl: '/',
  // root folder name
  src: 'src',
  dist: 'dist',
  htmlIndexes: [],  
  // webpack entry
  entry: {
    main: './src/index.ts'
  },
  commonChunks: {
    name: [].reverse()
  },  
  // webpack alias
  alias: {}
};