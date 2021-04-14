'use strict';

import Icons from '@nycopportunity/pttrn-scripts/src/icons/icons';

import Accordion from '../components/accordion/accordion';
import BackToTop from '../components/back-to-top/BackToTop';
import Form from '../components/form/Form';
import LanguageSwitcher from '../components/language-switcher/LanguageSwitcher';
import Share from '../components/share/Share';
import Scroll from '../components/side-navigation/Scroll';

import AlertBanner from '../objects/alert-banner/AlertBanner';
import Navigation from '../objects/navigation/Navigation';
import Newsletter from '../objects/newsletter/Newsletter';
import StaticColumn from '../objects/static-column/staticColumn';

import Animations from '../utilities/animations/Animations';
import Copy from '../utilities/copy/Copy';
import Sticky from '../utilities/sticky/Sticky';
import FormEffect from '../utilities/form-effects/FormEffects';
import Reveal from '../utilities/reveal/Reveal';

/**
 * Methods for the main Patterns instance.
 */
class Default {
  constructor() {
    if (process.env.NODE_ENV != 'production')
      console.dir('@pttrn Development Mode'); // eslint-disable-line no-console
  }

  navigation(settings = false) {
    return (settings) ? new Navigation(settings) : new Navigation();
  }

  icons(path) {
    return new Icons(path);
  }
  
  accordion() {
    return new Accordion();
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

  alertBanner(expirationDays) {
    return new AlertBanner(expirationDays);
  }

  staticColumn() {
    return new StaticColumn();
  }

  newsletter(settings = false) {
    return (settings) ? new Newsletter(settings) : new Newsletter();
  }

  animations() {
    return new Animations();
  }

  copy() {
    return new Copy();
  }

  formEffect(settings = false) {
    return (settings) ? new FormEffect(settings) : new FormEffect();
  }
  reveal(elNumber) {
    return new Reveal(elNumber);
  }
  sticky() {
    return new Sticky();
  }
}

export default Default;
