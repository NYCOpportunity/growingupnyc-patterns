'use strict';

import Offcanvas from "../../utilities/offcanvas/Offcanvas";
import Toggle from '@nycopportunity/pttrn-scripts/src/toggle/toggle';

class Navigation {
  constructor(settings) {
    if (settings.sideSelector == 'down'){
      this.settings = new Toggle({
        selector: settings.selector
      });

      return this;
    }

    this._offcanvas = new Offcanvas({
      selector: (settings.selector) ? settings.selector : Navigation.selector,
      sideSelector: (settings.sideSelector) ? settings.sideSelector : Navigation.sideSelector,
      namespace: (settings.namespace) ? settings.namespace : Navigation.namespace,
      inactiveClass: (settings.inactiveClass) ? settings.inactiveClass : Navigation.inactiveClass,
    });
    return this;
  }
}

/**
 * Defaults
 */
Navigation.selector = '[data-js*="offcanvas"]';
Navigation.sideSelector = 'right';
Navigation.namespace = 'offcanvas-navigation';
Navigation.inactiveClass = 'inactive';

export default Navigation;