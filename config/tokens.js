/**
 * Dependencies
 */

const package = require(`${process.env.PWD}/package.json`);

/**
 * Config
 */

module.exports = {
  'cdn': `"https://cdn.jsdelivr.net/gh/NYCOpportunity/growingupnyc-patterns@${package.version}/dist/"`,
  'output': `"${process.env.PWD}/src/config/_tokens.scss"`,
  'version': `"${package.version}"`,
  'font-family': {
    'system': [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      'Oxygen-Sans',
      'Ubuntu',
      'Cantarell',
      '"Helvetica Neue"',
      'sans-serif'
    ],
    'text-sans': [
      '"Open Sans"',
      'sans-serif'
    ],
    'display-sans': [
      '"museo-sans-rounded"',
      'sans-serif'
    ],
  },
  'font-weights': {
    'medium': '500',
    'semibold': '600',
    'extrablack': '900'
  },
  'font-sizes': {
    'font-size-ratio': '.875',
    'font-size-xx-small': '11px',
    'font-size-x-small': '13px',
    'font-size-small': '16px',
    'font-size-regular': '18px',
    'font-size-large': '21px',
    'font-size-x-large': '24px',
    'font-size-xx-large': '30px',
    'font-size-xxx-large-mobile': '40px',
    'font-size-xxx-large': '66px',
  },
  'color': {
    'black': '#000',
    'white': '#fff',
    'gray-light': '#eee',
    'gray': '#999',
    'gray-mid': '#838a97',
    'gray-dark': '#6a6a6a',
    'dark-gray': '#51596b',
    'dark-gray-mid': '#343e4c',
    'dark-gray-dark': '#333',
    'blue-lightest': '#eef3f7',
    'blue-light': '#2793e0',
    'blue': '#0055b8',
    'blue-mid': '#184e9e',
    'blue-dark': '#00326d',
    'red': '#fb0000',
    'pink': '#d8006d',
    'pink-dark': '#7f1c4e',
    'green': '#21ad0e',
    'green-dark': '#1d5d11',
    'green-light': '#7fe62d',
    'light-green': '#02A586',
    'light-green-dark': '#015948',
    'light-green-light': '#42D1B5',
    'orange-light': '#ffb900',
    'orange-mid': '#ff9d00',
    'orange': '#ff6100',
    'orange-dark': '#bc3b09',
    'orange-vroom': '#F6901E',
    'purple': '#7735b2',
    'purple-dark': '#3c036f',
    'shadow': 'rgba(0, 0, 0, .2)',
  },
  'colors-default': {
    'color-primary': 'color-blue-light',
    'color-secondary': 'color-blue',
    'color-background': 'color-white',
    'color-background-shade': 'color-gray-light',
    'color-text': 'color-dark-gray-dark',
    'color-text-invert': 'color-white',
    'color-text-weak': 'color-gray',
    'color-text-link': 'color-blue-light',
    'color-background-footer': 'color-blue',
    'color-error': 'color-pink',
  },
  'colors-baby': {
    'primary': 'color-pink',
    'secondary': 'color-pink-dark',
  },
  'colors-toddler': {
    'primary': 'color-orange',
    'secondary': 'color-orange-dark',
    'tertiary': 'color-orange-light',
  },
  'colors-pre-schooler': {
    'primary': 'color-green',
    'secondary': 'color-green-dark',
    'tertiary': 'color-green-light',
  },
  'colors-grade-schooler': {
    'primary': 'color-light-green',
    'secondary': 'color-light-green-dark',
    'tertiary': 'color-light-green-light',
  },
  'colors-pre-teen': {
    'primary': 'color-blue',
    'secondary': 'color-blue-dark',
  },
  'colors-teen': {
    'primary': 'color-purple',
    'secondary': 'color-purple-dark',
  },
  'colors-young-adult': {
    'primary': 'color-dark-gray',
    'secondary': 'color-dark-gray-mid',
  },
  'icons': [
    'icon-afterschool-guide',
    'icon-anytime-anywhere',
    'icon-arrow-right',
    'icon-at-an-appt',
    'icon-at-the-park',
    'icon-at-the-store',
    'icon-bathtime',
    'icon-bedtime',
    'icon-baby',
    'icon-book',
    'icon-calendar',
    'icon-caret-down',
    'icon-caret-left',
    'icon-caret-right',
    'icon-caret-line-down',
    'icon-caret-line-left',
    'icon-caret-line-right',
    'icon-caret-line-up',
    'icon-chevron-down',
    'icon-chevron-left',
    'icon-chevron-right',
    'icon-chevron-up',
    'icon-cash-expenses',
    'icon-check',
    'icon-check-outlined',
    'icon-child-care',
    'icon-city-id-card',
    'icon-cleaning-up',
    'icon-clock-o',
    'icon-close',
    'icon-diaper-change',
    'icon-education',
    'icon-enrichment',
    'icon-envelope-o',
    'icon-family-services',
    'icon-food',
    'icon-getting-dressed',
    'icon-grade-schooler',
    'icon-health-care',
    'icon-housing',
    'icon-laundry',
    'icon-lightbulb',
    'icon-map-marker',
    'icon-mealtime',
    'icon-on-the-go',
    'icon-people-with-disabilities',
    'icon-playtime',
    'icon-pre-schooler',
    'icon-pre-teen',
    'icon-recurring',
    'icon-search',
    'icon-sms',
    'icon-star',
    'icon-summer-guides',
    'icon-teen',
    'icon-toddler',
    'icon-topic',
    'icon-work',
    'icon-young-adult'
  ],
  'logos': [
    'logo-growingupnyc',
    'logo-vroom',
    'logo-vroom-ar',
    'logo-vroom-bn',
    'logo-vroom-es',
    'logo-vroom-fr',
    'logo-vroom-ht',
    'logo-vroom-ko',
    'logo-vroom-pl',
    'logo-vroom-ru',
    'logo-vroom-ur',
    'logo-vroom-zh-hant',
    'logo-nyc',
    'logo-nycopportunity',
    'logo-nyc-childrens-cabinet'
  ],
  'frills': [
    'frill',
    'frill-afterschool',
    'frill-baby',
    'frill-toddler',
    'frill-pre-schooler',
    'frill-grade-schooler',
    'frill-pre-teen',
    'frill-teen',
    'frill-young-adult',
  ],
  'stickers': {
    'sticker-size-mobile': '80',
    'sticker-size': '100',
  },
  'screens': {
    'mobile': '375px',
    'tablet': '700px',
    'desktop': '1024px',
    'xl': '1200px'
  },
  'border': {
    'width': '3px',
    'style': 'solid',
    'radius': '16px'
  },
  'dimensions': {
    'column': '70px',
    'gutter': '40px',
    'grid-columns': '12',
    'max-width-med': '900px',
    'max-width': '80em',
    'outer-gutter': '15',
    'outer-gutter-small': '20',
    'outer-gutter-medium': '30',
    'outer-gutter-large': '40',
    'horizontal-gutter': '20px'
  },
  'transitions': {
    'button-transition': 'all ease-in-out .15s',
    'link-transition': 'all ease-in-out .15s'
  },
  'z-index': {
    'z-index-offcanvas-side': '101',
    'z-index-offcanvas-overlay': '100',
    'z-index-offcanvas-main': '99',
    'z-index-alert': '4',
    'z-index-header': '3',
    'z-index-search-overlay': '2',
    'z-index-hero-title': '1',
  },
  'heights': {
    'height-banner': '50',
    'height-banner-large': '60',
    'height-banner-logo': '60',
  },
  'widths': {
    'width-banner-logo': '75px',
    'width-offcanvas-side': '300px',
    'width-offcanvas-side-large': '350px',
  },
};
