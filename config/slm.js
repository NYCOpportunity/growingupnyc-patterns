/**
 * Dependencies
 */

const path = require('path');
const package = require('../package.json');
// const global = resolve('config/global');
const tokens = require('./tokens');
const patterns = require(`${process.env.PWD}/src/slm/data/nav`);



/**
 * Config
 *
 * @type {Object}
 */
module.exports = {
  /**
   * Options to pass to the marked package
   *
   * @type {Source} https://marked.js.org/#/USING_ADVANCED.md#options
   */
  marked: {
    gfm: true,
    headerIds: true,
    headerPrefix: '',
    smartypants: true
  },

  /**
   * Options to pass to the JS Beautify package for formatting html
   *
   * @type {Source} https://github.com/beautify-web/js-beautify
   */
  beautify: {
    indent_size: 2,
    indent_char: ' ',
    preserve_newlines: false,
    indent_inner_html: false,
    inline: [],
    wrap_line_length: 0,
    indent_inner_html: false
  },

  /**
   * The following objects are locals passed to the slm view render and
   * are accessed via control codes. For example, in a .slm template;
   *
   * h1 - this.package.name
   *
   * will render
   *
   * <h1>@nycopportunity/patterns-framework</h1>
   *
   * NOTE Functions can also be passed to the slm view render.
   *
   * @type {Source} https://github.com/slm-lang/slm#user-content-control-code--
   */
  package: package,
  // global: global,
  tokens: tokens,
  patterns: patterns,
  process: {
    env: {
      NODE_ENV: process.env.NODE_ENV
    }
  },
  forms: {
    url: '',
    borough: {
      id: 'mce-BOROUGH',
      values: [
        'Bronx',
        'Brooklyn',
        'Manhattan',
        'Queens',
        'Staten Island'
      ]
    },
    boroughs: [
      {
        id: 'mce-group[4857]-4857-0',
        name: 'group[4857][128]',
        value: '128',
        label: 'Bronx'
      },
      {
        id: 'mce-group[4857]-4857-1',
        name: 'group[4857][256]',
        value: '256',
        label: 'Brooklyn'
      },
      {
        id: 'mce-group[4857]-4857-2',
        name: 'group[4857][512]',
        value: '512',
        label: 'Manhattan'
      },
      {
        id: 'mce-group[4857]-4857-3',
        name: 'group[4857][1024]',
        value: '1024',
        label: 'Queens'
      },
      {
        id: 'mce-group[4857]-4857-4',
        name: 'group[4857][2048]',
        value: '2048',
        label: 'Staten Island'
      }
    ],
    ageGroups: [
      {
        id: 'mce-group[3429]-3429-0',
        name: 'group[3429][1]',
        value: '1',
        label: 'Baby'
      },
      {
        id: 'mce-group[3429]-3429-1',
        name: 'group[3429][1]',
        value: '2',
        label: 'Toddler'
      },
      {
        id: 'mce-group[3429]-3429-2',
        name: 'group[3429][1]',
        value: '4',
        label: 'Pre-Schooler'
      },
      {
        id: 'mce-group[3429]-3429-3',
        name: 'group[3429][1]',
        value: '8',
        label: 'Grade-Schooler'
      },
      {
        id: 'mce-group[3429]-3429-4',
        name: 'group[3429][1]',
        value: '16',
        label: 'Pre-Teen'
      },
      {
        id: 'mce-group[3429]-3429-5',
        name: 'group[3429][1]',
        value: '32',
        label: 'Teen'
      },
      {
        id: 'mce-group[3429]-3429-6',
        name: 'group[3429][1]',
        value: '64',
        label: 'Young Adult'
      },
    ],
    requestType: [
      {
        id: 'mce-group[3433]-3433-0',
        name: 'group[3433][1]',
        value: '1',
        label: 'Invite Growing Up NYC to an event'
      },
      {
        id: 'mce-group[3433]-3433-1',
        name: 'group[3433][2]',
        value: '2',
        label: 'Request materials to pick up'
      },
      {
        id: 'mce-group[3433]-3433-2',
        name: 'group[3433][4]',
        value: '4',
        label: 'Partner with Growing Up NYC'
      },
      {
        id: 'mce-group[3433]-3433-3',
        name: 'group[3433][8]',
        value: '8',
        label: 'General Inquiry'
      },
      {
        id: 'mce-group[3433]-3433-4',
        name: 'group[3433][16]',
        value: '16',
        label: 'Get updates about the Early Childhood Development project'
      },
    ]
  }
};