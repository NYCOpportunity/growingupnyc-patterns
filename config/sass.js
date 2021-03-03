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
    file: `${process.env.PWD}/src/scss/site-default.scss`,
    outDir: `${process.env.PWD}/dist/styles/`,
    outFile: 'site-default.css',
    sourceMapEmbed: sass.sourceMapEmbed,
    includePaths: sass.includePaths,
    devModule: true // This needs to be set if we want the module to be compiled during development
  },
  {
    file: './src/scss/site-ar.scss',
    outDir: './dist/styles/',
    outFile: 'site-ar.css',
    sourceMapEmbed: sass.sourceMapEmbed,
    includePaths: sass.includePaths,
    devModule: true
  },
  {
    file: './src/scss/site-ru.scss',
    outDir: './dist/styles/',
    outFile: 'site-ru.css',
    sourceMapEmbed: sass.sourceMapEmbed,
    includePaths: sass.includePaths,
    devModule: true
  },
  {
    file: './src/scss/site-ko.scss',
    outDir: './dist/styles/',
    outFile: 'site-ko.css',
    sourceMapEmbed: sass.sourceMapEmbed,
    includePaths: sass.includePaths,
    devModule: true
  },
  {
    file: './src/scss/site-ur.scss',
    outDir: './dist/styles/',
    outFile: 'site-ur.css',
    sourceMapEmbed: sass.sourceMapEmbed,
    includePaths: sass.includePaths,
    devModule: true
  },
  {
    file: './src/scss/site-zh-hant.scss',
    outDir: './dist/styles/',
    outFile: 'site-zh-hant.css',
    sourceMapEmbed: sass.sourceMapEmbed,
    includePaths: sass.includePaths,
    devModule: true
  },
  {
    file: './src/utilities/tailwind/_tailwind.scss',
    outDir: './dist/styles/',
    outFile: 'tailwindcss.css',
    sourceMapEmbed: sass.sourceMapEmbed,
    devModule: true
  },
  {
    file: './src/utilities/tailwind/_tailwind.scss',
    outDir: './dist/styles/',
    outFile: '_tailwindcss.scss',
    sourceMapEmbed: sass.sourceMapEmbed,
    devModule: true
  }
];
