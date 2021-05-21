var Search = (function () {
	'use strict';

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var js_cookie = createCommonjsModule(function (module, exports) {
	(function (factory) {
		var registeredInModuleLoader;
		{
			module.exports = factory();
			registeredInModuleLoader = true;
		}
		if (!registeredInModuleLoader) {
			var OldCookies = window.Cookies;
			var api = window.Cookies = factory();
			api.noConflict = function () {
				window.Cookies = OldCookies;
				return api;
			};
		}
	}(function () {
		function extend () {
			var arguments$1 = arguments;

			var i = 0;
			var result = {};
			for (; i < arguments.length; i++) {
				var attributes = arguments$1[ i ];
				for (var key in attributes) {
					result[key] = attributes[key];
				}
			}
			return result;
		}

		function decode (s) {
			return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
		}

		function init (converter) {
			function api() {}

			function set (key, value, attributes) {
				if (typeof document === 'undefined') {
					return;
				}

				attributes = extend({
					path: '/'
				}, api.defaults, attributes);

				if (typeof attributes.expires === 'number') {
					attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
				}

				// We're using "expires" because "max-age" is not supported by IE
				attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

				try {
					var result = JSON.stringify(value);
					if (/^[\{\[]/.test(result)) {
						value = result;
					}
				} catch (e) {}

				value = converter.write ?
					converter.write(value, key) :
					encodeURIComponent(String(value))
						.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

				key = encodeURIComponent(String(key))
					.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
					.replace(/[\(\)]/g, escape);

				var stringifiedAttributes = '';
				for (var attributeName in attributes) {
					if (!attributes[attributeName]) {
						continue;
					}
					stringifiedAttributes += '; ' + attributeName;
					if (attributes[attributeName] === true) {
						continue;
					}

					// Considers RFC 6265 section 5.2:
					// ...
					// 3.  If the remaining unparsed-attributes contains a %x3B (";")
					//     character:
					// Consume the characters of the unparsed-attributes up to,
					// not including, the first %x3B (";") character.
					// ...
					stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
				}

				return (document.cookie = key + '=' + value + stringifiedAttributes);
			}

			function get (key, json) {
				if (typeof document === 'undefined') {
					return;
				}

				var jar = {};
				// To prevent the for loop in the first place assign an empty array
				// in case there are no cookies at all.
				var cookies = document.cookie ? document.cookie.split('; ') : [];
				var i = 0;

				for (; i < cookies.length; i++) {
					var parts = cookies[i].split('=');
					var cookie = parts.slice(1).join('=');

					if (!json && cookie.charAt(0) === '"') {
						cookie = cookie.slice(1, -1);
					}

					try {
						var name = decode(parts[0]);
						cookie = (converter.read || converter)(cookie, name) ||
							decode(cookie);

						if (json) {
							try {
								cookie = JSON.parse(cookie);
							} catch (e) {}
						}

						jar[name] = cookie;

						if (key === name) {
							break;
						}
					} catch (e$1) {}
				}

				return key ? jar[key] : jar;
			}

			api.set = set;
			api.get = function (key) {
				return get(key, false /* read as raw */);
			};
			api.getJSON = function (key) {
				return get(key, true /* read as json */);
			};
			api.remove = function (key, attributes) {
				set(key, '', extend(attributes, {
					expires: -1
				}));
			};

			api.defaults = {};

			api.withConverter = init;

			return api;
		}

		return init(function () {});
	}));
	});

	var Search = function Search(settings) {
	  this._settings = {
	    selector: settings.selector ? settings.selector : Search.MAIN_INPUT,
	    hiddenInputSelector: settings.hiddenInputSelector ? settings.hiddenInputSelector : Search.HIDDEN_INPUT,
	    expiration: settings.expirationDays ? settings.expirationDays : Search.EXPIRATION_DAYS,
	    cookieName: settings.cookieName ? settings.cookieName : Search.COOKIE_NAME,
	    message: settings.recaptchaMessage ? settings.recaptchaMessage : Search.RECAPTCHA_MESSAGE,
	    recaptchaContainerId: settings.recaptchaContainerId ? settings.recaptchaContainerId : Search.RECAPTCHA_CONTAINER_ID,
	    siteKey: settings.siteKey ? settings.siteKey : Search.SITE_KEY,
	    viewCount: settings.viewCount ? settings.viewCount : Search.VIEW_COUNT
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
	};
	/**
	 * Initializes the module
	 */


	Search.prototype.init = function init() {
	  var viewCount = js_cookie.get(this._settings.cookieName) ? parseInt(js_cookie.get(this._settings.cookieName), 10) : 0;

	  if (viewCount >= this._settings.viewCount && !this._recaptchainit && window.location.search) {
	    this._initRecaptcha();

	    this._recaptchainit = true;
	  }
	  window.location.search && js_cookie.set(this._settings.cookieName, ++viewCount, {
	    expires: this._settings.expiration
	  });

	  if (this._recaptchaRequired && !this._recaptchaVerified && window.location.search) {
	    this._addNotification();
	  } else {
	    this._hidden_input = document.querySelector(this._settings.hiddenInputSelector);
	    this._inputs = document.querySelectorAll(this._settings.selector);

	    for (var i = this._inputs.length - 1; i >= 0; i--) {
	      this._inputs[i].value = this._hidden_input.value;
	    }
	  }
	};
	/**
	 * Asynchronously loads the Google recaptcha script and sets callbacks for
	 * load, success, and expiration.
	 * @private
	 * @return {this} Screener
	 */


	Search.prototype._resetCookie = function _resetCookie() {
	  js_cookie.set(this._settings.cookieName, 0);
	};

	Search.prototype._addNotification = function _addNotification() {
	  var info = document.createElement('p');
	  info.classList.add('mb-3');
	  info.innerHTML = this._settings.message;
	  var recaptchaEl = document.getElementById(this._settings.recaptchaContainerId);
	  recaptchaEl.parentNode.appendChild(info);
	};

	Search.prototype._initRecaptcha = function _initRecaptcha() {
	  var this$1 = this;
	  var script = document.createElement('script');
	  script.src = 'https://www.google.com/recaptcha/api.js' + '?onload=searchCallback&render=explicit';
	  script.async = true;
	  script.defer = true;

	  window.searchCallback = function () {
	    window.grecaptcha.render(document.getElementById(this$1._settings.recaptchaContainerId), {
	      'sitekey': this$1._settings.siteKey,
	      //Below is the local host key
	      // 'sitekey' : '6LcAACYUAAAAAPmtvQvBwK89imM3QfotJFHfSm8C',
	      'callback': 'searchRecaptcha',
	      'expired-callback': 'screenerRecaptchaReset'
	    });
	    this$1._recaptchaRequired = true;
	  };

	  window.searchRecaptcha = function () {
	    this$1._recaptchaVerified = true;

	    this$1._resetCookie();

	    location = location;
	  };

	  window.screenerRecaptchaReset = function () {
	    this$1._recaptchaVerified = false;
	  };

	  this._recaptchaRequired = true;
	  var head = document.head || document.getElementsByTagName('head').item(0);
	  head.appendChild(script);
	  return this;
	};

	Search.MAIN_INPUT = '[data-js*="search"]';
	Search.FORM = '.search-form';
	Search.HIDDEN_INPUT = '[data-js*="hidden-search-input"]';
	Search.EXPIRATION_DAYS = 1;
	Search.COOKIE_NAME = 'searchresultVisits';
	Search.RECAPTCHA_MESSAGE = 'Please verify you are Human.';
	Search.RECAPTCHA_CONTAINER_ID = 'search-recaptcha';
	Search.SITE_KEY = '6LekICYUAAAAAOR2uZ0ajyWt9XxDuspHPUAkRzAB';
	Search.VIEW_COUNT = 5;

	return Search;

}());
