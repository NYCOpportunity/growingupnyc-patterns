/**
 * Dependencies
 */

// const defaultConfig = require('tailwindcss/defaultConfig');
const tokens = require('./tokens');

/**
 * Config
 */

module.exports = {
  theme: {
    important: true,
    colors: tokens.color,
    textColor: tokens.color,
    backgroundColor: tokens.color,
    borderColor: tokens.color,
    screens: tokens.screens,
    extend: {
      maxWidth: ['responsive'],
      maxHeight: ['responsive']
    }
  }
};
