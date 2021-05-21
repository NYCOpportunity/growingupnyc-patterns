'use strict';

// import MissPlete from 'miss-plete-js';
import Cookies from 'js-cookie';

class Search {
  constructor(settings) {

    this._settings = {
      selector: (settings.selector) ? settings.selector : Search.MAIN_INPUT,
      hiddenInputSelector: (settings.hiddenInputSelector) ? settings.hiddenInputSelector : Search.HIDDEN_INPUT,
      expiration: (settings.expirationDays) ? settings.expirationDays : Search.EXPIRATION_DAYS,
      cookieName: (settings.cookieName) ? settings.cookieName : Search.COOKIE_NAME,
      message: (settings.recaptchaMessage) ? settings.recaptchaMessage : Search.RECAPTCHA_MESSAGE,
      recaptchaContainerId: (settings.recaptchaContainerId) ? settings.recaptchaContainerId : Search.RECAPTCHA_CONTAINER_ID,
      siteKey: (settings.siteKey) ? settings.siteKey : Search.SITE_KEY,
      viewCount: (settings.viewCount) ? settings.viewCount : Search.VIEW_COUNT,
    };

    /** @private {boolean} Whether this component has been initialized. */
    this._initialized = false;

    /** @private {boolean} Whether the google reCAPTCHA widget is required. */
    this._recaptchaRequired = false;

    /** @private {boolean} Whether the google reCAPTCHA widget has passed. */
    this._recaptchaVerified = false;

    /** @private {boolean} Whether the google reCAPTCHA widget is initilaised. */
    this._recaptchainit = false;

    this.init();
  }
  /**
   * Initializes the module
   */
  init() {
    let viewCount = Cookies.get(this._settings.cookieName) ?
    parseInt(Cookies.get(this._settings.cookieName), 10) : 0;
    if (viewCount >= this._settings.viewCount && !this._recaptchainit && window.location.search) {
      this._initRecaptcha();
      this._recaptchainit = true;
    };
    window.location.search && Cookies.set(this._settings.cookieName, ++viewCount, {expires: this._settings.expiration});

    if (this._recaptchaRequired && !this._recaptchaVerified && window.location.search) {
      this._addNotification();
    } else {
      this._hidden_input = document.querySelector(this._settings.hiddenInputSelector);
      this._inputs = document.querySelectorAll(this._settings.selector);
      for (let i = this._inputs.length - 1; i >= 0; i--) {
        this._inputs[i].value = this._hidden_input.value;
      }
    }
  }

  /**
   * Asynchronously loads the Google recaptcha script and sets callbacks for
   * load, success, and expiration.
   * @private
   * @return {this} Screener
   */

  _resetCookie() {
    Cookies.set(this._settings.cookieName, 0);
  }

  _addNotification() {
    const info = document.createElement('p');
    info.classList.add('mb-3');
    info.innerHTML = this._settings.message;
    const recaptchaEl = document.getElementById(this._settings.recaptchaContainerId);
    recaptchaEl.parentNode.appendChild(info);
  }

  _initRecaptcha() {
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js' + '?onload=searchCallback&render=explicit';
    script.async = true;
    script.defer = true;

    window.searchCallback = () => {
      window.grecaptcha.render(document.getElementById(this._settings.recaptchaContainerId), {
        'sitekey' : this._settings.siteKey,
        //Below is the local host key
        // 'sitekey' : '6LcAACYUAAAAAPmtvQvBwK89imM3QfotJFHfSm8C',
        'callback': 'searchRecaptcha',
        'expired-callback': 'screenerRecaptchaReset'
      });
      this._recaptchaRequired = true;
    };

    window.searchRecaptcha = () => {
      this._recaptchaVerified = true;
      this._resetCookie();
      location = location;
    };

    window.screenerRecaptchaReset = () => {
      this._recaptchaVerified = false;
    };

    this._recaptchaRequired = true;
    const head = document.head || document.getElementsByTagName('head').item(0);
    head.appendChild(script);
    return this;
  }

  /**
   * Initializes the suggested search term dropdown.
   * @param  {object} input The search input.
   */
  // _suggestions(input) {
  //   let data = JSON.parse(input.dataset.jsSearchSuggestions);

  //   input._MissPlete = new MissPlete({
  //     input: input,
  //     options: data,
  //     className: input.dataset.jsSearchDropdownClass
  //   });
  // }
}

Search.MAIN_INPUT = '[data-js*="search"]';
Search.FORM = '.search-form';
Search.HIDDEN_INPUT = '[data-js*="hidden-search-input"]';
Search.EXPIRATION_DAYS = 1;
Search.COOKIE_NAME = 'searchresultVisits';
Search.RECAPTCHA_MESSAGE = 'Please verify you are Human.';
Search.RECAPTCHA_CONTAINER_ID = 'search-recaptcha';
Search.SITE_KEY = '6LekICYUAAAAAOR2uZ0ajyWt9XxDuspHPUAkRzAB';
Search.VIEW_COUNT = 5;

export default Search;