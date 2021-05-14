'use strict';

import MissPlete from 'miss-plete-js';
import $ from 'jquery';
import Cookies from 'js-cookie';

class Search {
  constructor(el) {
	}
  /**
   * Initializes the module
   */
  init() {
    this._inputs = document.querySelectorAll(Search.selectors.MAIN);

    if (!this._inputs) return;

    for (let i = this._inputs.length - 1; i >= 0; i--) {
      this._suggestions(this._inputs[i]);
    }

    $(this._el).on('submit', e => {
      this._initRecaptcha()
    })
  }

  /**
   * Initializes the suggested search term dropdown.
   * @param  {object} input The search input.
   */
  _suggestions(input) {
    let data = JSON.parse(input.dataset.jsSearchSuggestions);

    input._MissPlete = new MissPlete({
      input: input,
      options: data,
      className: input.dataset.jsSearchDropdownClass
    });
  }

    /**
   * Asynchronously loads the Google recaptcha script and sets callbacks for
   * load, success, and expiration.
   * @private
   * @return {this} Screener
   */
     _initRecaptcha() {
      const $script = $(document.createElement('script'));
      $script.attr('src',
          'https://www.google.com/recaptcha/api.js' +
          '?onload=screenerCallback&render=explicit').prop({
        async: true,
        defer: true
      });

      window.screenerCallback = () => {
        window.grecaptcha.render(document.getElementById('screener-recaptcha'), {
          'sitekey' : '6LekICYUAAAAAOR2uZ0ajyWt9XxDuspHPUAkRzAB',
          //Below is the local host key
          // 'sitekey' : '6LcAACYUAAAAAPmtvQvBwK89imM3QfotJFHfSm8C',
          'callback': 'screenerRecaptcha',
          'expired-callback': 'screenerRecaptchaReset'
        });
        this._recaptchaRequired = true;
      };

      // window.screenerRecaptcha = () => {
      //   this._recaptchaVerified = true;
      //   $(this._el).parents('.c-tip-ms__topics').removeClass('recaptcha-js');
      // };

      // window.screenerRecaptchaReset = () => {
      //   this._recaptchaVerified = false;
      //   $(this._el).parents('.c-tip-ms__topics').addClass('recaptcha-js');
      // };

      this._recaptchaRequired = true;
      $('head').append($script);
      return this;
    }
}

Search.selectors = {
  MAIN: '[data-js*="search"]',
  FORM: 'js-search-form'
};

export default Search;