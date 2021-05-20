'use strict';

// import MissPlete from 'miss-plete-js';
import $ from 'jquery';
import Cookies from 'js-cookie';

class Search {
  constructor() {

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
    let viewCount = Cookies.get('searchresultVisits') ?
    parseInt(Cookies.get('searchresultVisits'), 10) : 0;
    if (viewCount >= 2 && !this._recaptchainit && window.location.search) {
      this._initRecaptcha();
      this._recaptchainit = true;
    };
    window.location.search && Cookies.set('searchresultVisits', ++viewCount, {expires: (2/1440)});

    if (this._recaptchaRequired && !this._recaptchaVerified && window.location.search) {
      this._addNotification();
      this._inputs = document.querySelectorAll(Search.selectors.MAIN);
      for (let i = this._inputs.length - 1; i >= 0; i--) {
        this._inputs[i].name = "";
      }
    } else {
      this._inputs = document.querySelectorAll(Search.selectors.MAIN);
      for (let i = this._inputs.length - 1; i >= 0; i--) {
        this._inputs[i].name = "s";
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
    Cookies.set('searchresultVisits', 0);
  }

  _addNotification(remove) {
    const info = document.createElement("p");
    info.classList.add("mb-3");
    info.innerHTML = "Please verify you are Human."
    const recaptchaEl = document.getElementById('search-recaptcha');
    recaptchaEl.parentNode.appendChild(info);
  }

  _initRecaptcha() {

    const $script = $(document.createElement('script'));
    $script.attr('src',
        'https://www.google.com/recaptcha/api.js' +
        '?onload=searchCallback&render=explicit').prop({
      async: true,
      defer: true
    });
    window.searchCallback = () => {
      window.grecaptcha.render(document.getElementById('search-recaptcha'), {
        'sitekey' : '6LeJddoaAAAAABk7Ot0eXAKiqLQDk0v6IW8cpG9o',
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
    $('head').append($script);
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

Search.selectors = {
  MAIN: '[data-js*="search"]',
  FORM: '.search-form',
  HIDDEN_INPUT: '[data-js*="hidden-search-input"]',
};

export default Search;