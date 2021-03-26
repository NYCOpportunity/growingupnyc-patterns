/**
 * Dependencies
 */

const path = require('path');
const resolve = require(path.join(__dirname, '../node_modules/@nycopportunity/pttrn/bin/util/resolve'));
const package = resolve('package.json');

/**
 * Config
 */

module.exports = {
  'production': package.repository.url,
  'development': 'git@github.com:NYCOpportunity/growingupnyc-patterns-development.git'
};