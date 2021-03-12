/**
 * Dependencies
 */

const nodeResolve = require('@rollup/plugin-node-resolve'); // Locate modules using the Node resolution algorithm, for using third party modules in node_modules.
const replace = require('@rollup/plugin-replace');          // Replace content while bundling.
const commonjs = require('@rollup/plugin-commonjs'); // Convert CommonJS modules to ES6, so they can be included in a Rollup bundle

/**
 * Base module configuration. Refer to the package for details on the available options.
 *
 * @source https://rollupjs.org
 *
 * @type {Object}
 */
const rollup = {
  sourcemap: 'inline',
  format: 'iife',
  strict: true
};

/**
 * Plugin configuration. Refer to the package for details on the available options.
 *
 * @source https://github.com/rollup/plugins
 *
 * @type {Object}
 */
let plugins = [
  replace({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    'preventAssignment': true
  }),
  nodeResolve.nodeResolve({
    browser: true,
    customResolveOptions: {
      moduleDirectories: ['node_modules']
    }
  }),
  commonjs()
];

/**
 * ES Module Exports
 *
 * @type {Array}
 */
module.exports = [
  {
    input: `${process.env.PWD}/src/js/default.js`,
    output: [
      {
        name: 'Default',
        file: `${process.env.PWD}/dist/js/default.js`,
        sourcemap: rollup.sourcemap,
        format: rollup.format,
        strict: rollup.strict
      }
    ],
    plugins: plugins,
    devModule: true
  }
];
