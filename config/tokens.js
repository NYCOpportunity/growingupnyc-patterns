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
    'black': {
      DEFAULT: '#000'
    },
    'white': {
      DEFAULT: '#fff'
    },
    'gray': {
      light: '#eee',
      DEFAULT: '#999',
      mid: '#838a97',
      dark: '#6a6a6a',
    },
    'dark-gray': {
      DEFAULT: '#51596b',
      mid: '#343e4c',
      dark: '#333',
    },
    'blue': {
      lightest: '#eef3f7',
      light: '#2793e0',
      DEFAULT: '#0055b8',
      mid: '#184e9e',
      dark: '#00326d',
    },
    'red': {
      DEFAULT: '#fb0000'
    },
    'pink': {
      DEFAULT: '#d8006d',
      dark: '#7f1c4e',
    },
    'green': {
      light: '#7fe62d',
      DEFAULT: '#21ad0e',
      dark: '#1d5d11',
    },
    'light-green': {
      light: '#42D1B5',
      DEFAULT: '#02A586',
      dark: '#015948'
    },
    'orange': {
      light: '#ffb900',
      DEFAULT: '#ff6100',
      mid: '#ff9d00',
      dark: '#bc3b09',
      vroom: '#F6901E',
    },
    'purple': {
      DEFAULT: '#7735b2',
      dark: '#3c036f'
    },
    'shadow': 'rgba(0, 0, 0, .2)',
  },
  'milestones': {
    'baby': {
      color: 'pink',
      primary: 'DEFAULT',
      secondary: 'dark',
      tertiary: 'DEFAULT'
    },
    'toddler': {
      color: 'orange',
      primary: 'DEFAULT',
      secondary: 'dark',
      tertiary: 'light'
    },
    'pre-schooler': {
      color: 'green',
      primary: 'DEFAULT',
      secondary: 'dark',
      tertiary: 'light'
    },
    'grade-schooler': {
      color: 'light-green',
      primary: 'DEFAULT',
      secondary: 'dark',
      tertiary: 'light'
    },
    'pre-teen': {
      color: 'blue',
      primary: 'DEFAULT',
      secondary: 'dark',
      tertiary: 'DEFAULT'
    },
    'teen': {
      color: 'purple',
      primary: 'DEFAULT',
      secondary: 'dark',
      tertiary: 'DEFAULT'
    },
    'young-adult': {
      color: 'dark-gray',
      primary: 'DEFAULT',
      secondary: 'mid',
      tertiary: 'DEFAULT'
    },
  },
  'types': {
    'afterschool': {
      color: 'blue',
      primary: 'DEFAULT',
      secondary: 'dark',
      tertiary: 'DEFAULT'
    },
    'summer': {
      color: 'orange',
      primary: 'DEFAULT',
      secondary: 'dark',
      tertiary: 'light'
    }
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
  'animate': {
    'speed': '.75s',
    'timing': 'cubic-bezier(.23, 1, .32, 1)',
    'ease-in-quint': 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
    'ease-out-quint': 'cubic-bezier(0.23, 1, 0.32, 1)',
    'animate-scss-speed': '0.75s',
    'animate-timing-function': 'cubic-bezier(0.23, 1, 0.32, 1)'
  },
};
