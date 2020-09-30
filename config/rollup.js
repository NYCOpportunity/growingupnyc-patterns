/**
 * Dependencies
 */


const resolve = require('@rollup/plugin-node-resolve'); // Locate modules using the Node resolution algorithm, for using third party modules in node_modules.
const commonjs = require('@rollup/plugin-commonjs'); // Convert CommonJS modules to ES6, so they can be included in a Rollup bundle
const babel = require('rollup-plugin-babel'); // Transpile source code.
const buble = require('@rollup/plugin-buble'); // Convert ES2015 with buble.
const replace = require('@rollup/plugin-replace'); // Replace content while bundling.
/**
 * Config
 */

/**
 * General configuration for Rollup
 * @type {Object}
 */
let rollup = {
  sourcemap: 'inline',
  format: 'iife',
  strict: true
};

/**
 * Plugin configuration
 * @type {Object}
 */
const plugins = {
  babel: babel({
    exclude: 'node_modules/**'
  }),
  resolve: resolve({
    browser: true,
    customResolveOptions: {
      moduleDirectory: 'node_modules'
    }
  }),
  replace: replace({
    'process.env.NODE_ENV': "'production'"
  }),
  common: commonjs(),
  buble: buble({
    transforms: {
      forOf: false
    }
  })
};

/**
 * Distribution plugin settings. Order matters here.
 * @type {Array}
 */

/** These are plugins used for the global patterns script */
rollup.local = [
  plugins.alias,
  plugins.resolve,
  plugins.common,
  plugins.vue,
  plugins.buble,
  plugins.babel,
  plugins.replace
];

rollup.dist = [
  plugins.resolve,
  plugins.common,
  plugins.vue,
  plugins.buble,
  plugins.babel
];

/**
 * Our list of modules we are exporting
 * @type {Array}
 */
module.exports = [{
    input: './src/js/main.js',
    output: [{
      name: 'GUNYC',
      file: `./dist/scripts/growingup-nyc.js`,
      sourcemap: (process.env.NODE_ENV === 'production') ?
        false : rollup.sourcemap,
      format: rollup.format,
      strict: rollup.strict,
      globals: rollup.globals
    }],
    plugins: rollup.local,
    devModule: true
  },
  {
    input: `${process.env.PWD}/node_modules/@nycopportunity/patterns-framework/src/utilities/forms/forms.js`,
    plugins: rollup.dist,
    output: [{
        name: 'Forms',
        file: `${process.env.PWD}/dist/utilities/forms/forms.iffe.js`,
        format: 'iife',
        strict: rollup.strict
      },
      {
        name: 'Forms',
        file: `${process.env.PWD}/dist/utilities/forms/forms.common.js`,
        format: 'cjs',
        strict: rollup.strict
      }
    ]
  },
  {
    input: `${process.env.PWD}/node_modules/@nycopportunity/patterns-framework/src/utilities/icons/icons.js`,
    // input: `./src/elements/icons/icons.js`,
    plugins: rollup.dist,
    output: [{
        name: 'Icons',
        file: `./dist/elements/icons/icons.iffe.js`,
        format: 'iife',
        strict: rollup.strict
      },
      {
        name: 'Icons',
        file: `./dist/elements/icons/icons.common.js`,
        format: 'cjs',
        strict: rollup.strict
      }
    ]
  },
  {
    input: `${process.env.PWD}/node_modules/smoothscroll-polyfill/dist/smoothscroll.js`,
    output: {
      name: 'Polyfills',
      file: `./dist/scripts/polyfills.js`,
      sourcemap: (process.env.NODE_ENV === 'production') ?
        false : rollup.sourcemap,
      format: rollup.format,
      strict: rollup.strict,
      globals: rollup.globals
    },
    plugins: rollup.local
  },
  {
    input: './src/objects/navigation/Navigation.js',
    plugins: rollup.dist,
    output: [{
        name: 'InputAutocomplete',
        file: `./dist/objects/navigation/Navigation.iffe.js`,
        format: 'iife',
        strict: rollup.strict
      },
      {
        name: 'InputAutocomplete',
        file: `./dist/objects/navigation/Navigation.common.js`,
        format: 'cjs',
        strict: rollup.strict
      }
    ]
  },
  {
    input: './src/objects/static-column/staticColumn.js',
    plugins: rollup.dist,
    output: [{
        name: 'StaticColumn',
        file: `./dist/objects/static-column/StaticColumn.iffe.js`,
        format: 'iife',
        strict: rollup.strict
      },
      {
        name: 'StaticColumn',
        file: `./dist/objects/static-column/StaticColumn.common.js`,
        format: 'cjs',
        strict: rollup.strict
      }
    ]
  },
  {
    input: './src/objects/navigation/Navigation.js',
    plugins: rollup.dist,
    output: [{
        name: 'Navigation',
        file: `./dist/objects/navigation/Navigation.iffe.js`,
        format: 'iife',
        strict: rollup.strict
      },
      {
        name: 'Navigation',
        file: `./dist/objects/navigation/Navigation.common.js`,
        format: 'cjs',
        strict: rollup.strict
      }
    ]
  },
  {
    input: './src/utilities/animations/Animations.js',
    plugins: rollup.dist,
    output: [{
        name: 'Animations',
        file: `./dist/utilities/animations/Animations.iffe.js`,
        format: 'iife',
        strict: rollup.strict
      },
      {
        name: 'Animations',
        file: `./dist/utilities/animations/Animations.common.js`,
        format: 'cjs',
        strict: rollup.strict
      }
    ]
  },
  {
    input: './src/objects/accordion/Accordion.js',
    plugins: rollup.dist,
    output: [{
        name: 'Accordion',
        file: `./dist/objects/accordion/Accordion.iffe.js`,
        format: 'iife',
        strict: rollup.strict
      },
      {
        name: 'Accordion',
        file: `./dist/objects/accordion/Accordion.common.js`,
        format: 'cjs',
        strict: rollup.strict
      }
    ]
  },
  {
    input: './src/utilities/offcanvas/Offcanvas.js',
    plugins: rollup.dist,
    output: [{
        name: 'Offcanvas',
        file: `./dist/utilities/offcanvas/Offcanvas.iffe.js`,
        format: 'iife',
        strict: rollup.strict
      },
      {
        name: 'Offcanvas',
        file: `./dist/utilities/offcanvas/Offcanvas.common.js`,
        format: 'cjs',
        strict: rollup.strict
      }
    ]
  },
  {
    input: './src/objects/overlay/Overlay.js',
    plugins: rollup.dist,
    output: [{
        name: 'Overlay',
        file: `./dist/objects/overlay/Overlay.iffe.js`,
        format: 'iife',
        strict: rollup.strict
      },
      {
        name: 'overlay',
        file: `./dist/objects/overlay/Overlay.common.js`,
        format: 'cjs',
        strict: rollup.strict
      }
    ]
  },
  {
    input: './src/objects/newsletter/Newsletter.js',
    plugins: rollup.dist,
    output: [{
        name: 'Newsletter',
        file: `./dist/objects/newsletter/Newsletter.iffe.js`,
        format: 'iife',
        strict: rollup.strict
      },
      {
        name: 'Newsletter',
        file: `./dist/objects/newsletter/Newsletter.common.js`,
        format: 'cjs',
        strict: rollup.strict
      }
    ]
  },
  {
    input: './src/utilities/form-effects/FormEffects.js',
    plugins: rollup.dist,
    output: [{
        name: 'FormEffects',
        file: `./dist/utilities/form-effects/FormEffects.iffe.js`,
        format: 'iife',
        strict: rollup.strict
      },
      {
        name: 'FormEffects',
        file: `./dist/utilities/form-effects/FormEffects.common.js`,
        format: 'cjs',
        strict: rollup.strict
      }
    ]
  },
  {
    input: './src/objects/search/Search.js',
    plugins: rollup.dist,
    output: [{
        name: 'Search',
        file: `./dist/objects/search/Search.iffe.js`,
        format: 'iife',
        strict: rollup.strict
      },
      {
        name: 'Search',
        file: `./dist/objects/search/Search.common.js`,
        format: 'cjs',
        strict: rollup.strict
      }
    ]
  },
  {
    input: './src/components/side-navigation/Scroll.js',
    plugins: rollup.dist,
    output: [{
        name: 'Scroll',
        file: `./dist/components/side-navigation/Scroll.iffe.js`,
        format: 'iife',
        strict: rollup.strict
      },
      {
        name: 'Scroll',
        file: `./dist/components/side-navigation/Scroll.common.js`,
        format: 'cjs',
        strict: rollup.strict
      }
    ]
  },
  {
    input: './src/utilities/sticky/Sticky.js',
    plugins: rollup.dist,
    output: [{
        name: 'Sticky',
        file: `./dist/utilities/sticky/Sticky.iffe.js`,
        format: 'iife',
        strict: rollup.strict
      },
      {
        name: 'Sticky',
        file: `./dist/utilities/sticky/Sticky.common.js`,
        format: 'cjs',
        strict: rollup.strict
      }
    ]
  },
  {
    input: './src/utilities/section-highlighter/SectionHighlighter.js',
    plugins: rollup.dist,
    output: [{
        name: 'SectionHighlighter',
        file: `./dist/utilities/section-highlighter/SectionHighlighter.iffe.js`,
        format: 'iife',
        strict: rollup.strict
      },
      {
        name: 'SectionHighlighter',
        file: `./dist/utilities/section-highlighter/SectionHighlighter.common.js`,
        format: 'cjs',
        strict: rollup.strict
      }
    ]
  },
  {
    input: './src/components/language-switcher/LanguageSwitcher.js',
    plugins: rollup.dist,
    output: [{
        name: 'LanguageSwitcher',
        file: `./dist/components/language-switcher/LanguageSwitcher.iffe.js`,
        format: 'iife',
        strict: rollup.strict
      },
      {
        name: 'LanguageSwitcher',
        file: `./dist/components/language-switcher/LanguageSwitcher.common.js`,
        format: 'cjs',
        strict: rollup.strict
      }
    ]
  },
  {
    input: './src/objects/alert-banner/AlertBanner.js',
    plugins: rollup.dist,
    output: [{
        name: 'AlertBanner',
        file: `./dist/objects/alert-banner/AlertBanner.iffe.js`,
        format: 'iife',
        strict: rollup.strict
      },
      {
        name: 'AlertBanner',
        file: `./dist/objects/alert-banner/AlertBanner.common.js`,
        format: 'cjs',
        strict: rollup.strict
      }
    ]
  },
  {
    input: './src/components/back-to-top/BackToTop.js',
    plugins: rollup.dist,
    output: [{
        name: 'BackToTop',
        file: `./dist/components/back-to-top/BackToTop.iffe.js`,
        format: 'iife',
        strict: rollup.strict
      },
      {
        name: 'BackToTop',
        file: `./dist/components/back-to-top/BackToTop.common.js`,
        format: 'cjs',
        strict: rollup.strict
      }
    ]
  },
];