'use strict';

// import {{ Pattern }} from '../{{ type }}/{{ pattern }}/{{ pattern }}';
/** import pattern modules here as they are written */

import Icons from '@nycopportunity/pttrn-scripts/src/icons/icons';
import BackToTop from '../components/back-to-top/BackToTop';
import Form from '../components/form/Form';

import LanguageSwitcher from '../components/language-switcher/LanguageSwitcher'
import Share from '../components/share/Share'
import Scroll from '../components/side-navigation/Scroll'


/**
 * Methods for the main Patterns instance.
 */
class Default {
  constructor() {
    if (process.env.NODE_ENV != 'production')
      console.dir('@pttrn Development Mode'); // eslint-disable-line no-console
  }

  icons(path) {
    return new Icons(path);
  }

  backToTop() {
    return new BackToTop();
  }

  form() {
    return new Form();
  }

  languageSwitcher() {
    return new LanguageSwitcher();
  }

  share() {
    return new Share();
  }
  scroll() {
    return new Scroll();
  }
}

export default Default;
