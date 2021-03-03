/**
 * Dependencies
 */

const tokens = require('./tokens');

/**
 * Config
 */

module.exports = {
  theme: {
    colors: tokens.colors,
    textColor: tokens.colors,
    backgroundColor: tokens.colors,
    borderColor: tokens.colors,
    fontFamily: tokens.fonts,
    screens: {
      'mobile-only': { 'max': tokens.screens['small'] }, //apply only to mobile
      'mobile': { 'min': tokens.screens['small'] }, //screen-small
      'tablet': { 'min': tokens.screens['medium'] }, //screen-medium
      'desktop': { 'min': tokens.screens['large'] }, //screen-large
      'desktop-lg': { 'min': tokens.screens['xlarge'] } //screen-xtra large
    },
    extend: {
      width: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
        'sidebar': '31.25%',
        'article': '68.75%',
      }
    }
  }
};
