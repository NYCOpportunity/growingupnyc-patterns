/**
 * Config
 *
 * @type {Object}
 */
const sass = {
  sourceMapEmbed: true,
  includePaths: [
    `${process.env.PWD}/src/`,
    `${process.env.PWD}/node_modules/`,
    `${process.env.PWD}/animate.scss`
  ]
};

/**
 * Sass Export
 *
 * @type {Array}
 */
module.exports = [
  {
    file: `${process.env.PWD}/src/scss/default.scss`,
    outDir: `${process.env.PWD}/dist/styles/`,
    outFile: 'default.css',
    sourceMapEmbed: sass.sourceMapEmbed,
    includePaths: sass.includePaths,
    devModule: true // This needs to be set if we want the module to be compiled during development
  },
  {
    file: `${process.env.PWD}/src/scss/default-ar.scss`,
    outDir: `${process.env.PWD}/dist/styles/`,
    outFile: 'default-ar.css',
    sourceMapEmbed: sass.sourceMapEmbed,
    includePaths: sass.includePaths,
    devModule: false // This needs to be set if we want the module to be compiled during development
  },
  {
    file: `${process.env.PWD}/src/scss/default-bn.scss`,
    outDir: `${process.env.PWD}/dist/styles/`,
    outFile: 'default-bn.css',
    sourceMapEmbed: sass.sourceMapEmbed,
    includePaths: sass.includePaths,
    devModule: false // This needs to be set if we want the module to be compiled during development
  },
  {
    file: `${process.env.PWD}/src/scss/default-ko.scss`,
    outDir: `${process.env.PWD}/dist/styles/`,
    outFile: 'default-ko.css',
    sourceMapEmbed: sass.sourceMapEmbed,
    includePaths: sass.includePaths,
    devModule: false // This needs to be set if we want the module to be compiled during development
  },
  {
    file: `${process.env.PWD}/src/scss/default-ru.scss`,
    outDir: `${process.env.PWD}/dist/styles/`,
    outFile: 'default-ru.css',
    sourceMapEmbed: sass.sourceMapEmbed,
    includePaths: sass.includePaths,
    devModule: false // This needs to be set if we want the module to be compiled during development
  },
  {
    file: `${process.env.PWD}/src/scss/default-ur.scss`,
    outDir: `${process.env.PWD}/dist/styles/`,
    outFile: 'default-ur.css',
    sourceMapEmbed: sass.sourceMapEmbed,
    includePaths: sass.includePaths,
    devModule: false // This needs to be set if we want the module to be compiled during development
  },
  {
    file: `${process.env.PWD}/src/scss/default-zh-hant.scss`,
    outDir: `${process.env.PWD}/dist/styles/`,
    outFile: 'default-zh-hant.css',
    sourceMapEmbed: sass.sourceMapEmbed,
    includePaths: sass.includePaths,
    devModule: false // This needs to be set if we want the module to be compiled during development
  },
  {
    file: './src/utilities/tailwindcss/_tailwindcss.scss',
    outDir: './dist/styles/',
    outFile: 'tailwindcss.css',
    sourceMapEmbed: sass.sourceMapEmbed,
    devModule: true
  },
  {
    file: './src/utilities/tailwindcss/_tailwindcss.scss',
    outDir: './dist/styles/',
    outFile: '_tailwindcss.scss',
    sourceMapEmbed: sass.sourceMapEmbed,
    devModule: true
  }
];
