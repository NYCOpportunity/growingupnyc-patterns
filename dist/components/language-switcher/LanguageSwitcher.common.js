'use strict';

var LanguageSwitcher = function LanguageSwitcher() {
  this._settings = {
    selector: LanguageSwitcher.selector,
    closeOptions: LanguageSwitcher.closeOptions,
    options: LanguageSwitcher.options
  };
  /**
   * Update the active language 
   */

  var options = document.querySelector(this._settings.options).querySelector('ul');
  LanguageSwitcher.setCurrentLang(options);
  /**
   * Listen for user to open the options for languages
   */

  var trigger = document.querySelector(this._settings.selector);
  trigger.addEventListener('click', function (e) {
    LanguageSwitcher.expandOptions(options);
  });
  /**
   * Listen to close the mobile menu
   */

  var optionsToggle = document.querySelector(this._settings.closeOptions);
  optionsToggle.addEventListener('click', function (e) {
    LanguageSwitcher.toggleOptions(options);
  });
  /**
   * Update the location of the list on mobile or desktop
   */

  LanguageSwitcher.mobileSwitcher();
};
/**
 * Expands the options and attaches listener to resize
 */


LanguageSwitcher.mobileSwitcher = function () {
  var parent = document.querySelector(LanguageSwitcher.options);

  if (window.innerWidth <= LanguageSwitcher.minWidth) {
    parent.classList.add(LanguageSwitcher.hiddenClass);
  }
};
/**
 * Applies the current-language class based on the document lang attribute
 */


LanguageSwitcher.setCurrentLang = function (options) {
  // remove the current-language class if it exists
  options.querySelectorAll('li').forEach(function (li) {
    li.classList.remove(LanguageSwitcher.activeClass);
    li.classList.add(LanguageSwitcher.hiddenClass);
  }); // add the current-language to the current language

  var element = options.querySelector("[class*=-" + LanguageSwitcher.currentLanguage + " ]");
  element.classList.toggle(LanguageSwitcher.activeClass);
  element.classList.remove(LanguageSwitcher.hiddenClass);
};
/**
 * When the trigger is clicked, expand the options
 */


LanguageSwitcher.expandOptions = function (options) {
  var parent = document.querySelector(LanguageSwitcher.options);
  parent.classList.remove(LanguageSwitcher.hiddenClass);
  options.querySelectorAll('li').forEach(function (li) {
    li.classList.remove(LanguageSwitcher.hiddenClass);
  });
};
/**
 * Adds a hidden class to the language switcher
 */


LanguageSwitcher.toggleOptions = function (options) {
  var parent = document.querySelector(LanguageSwitcher.options);
  parent.classList.add(LanguageSwitcher.hiddenClass);
};
/**
 * Default Settings
 */


LanguageSwitcher.selector = '[data-js="translate"]';
LanguageSwitcher.options = '[data-js="ls-options"]';
LanguageSwitcher.minWidth = 700;
LanguageSwitcher.closeOptions = '[data-js*=close-language-menu]'; // current language of page

LanguageSwitcher.currentLanguage = document.documentElement.lang;
LanguageSwitcher.activeClass = 'current-language';
LanguageSwitcher.hiddenClass = 'hidden';

module.exports = LanguageSwitcher;
