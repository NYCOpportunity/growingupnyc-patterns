'use strict';


class LanguageSwitcher {
  /**
   * @constructor
   */
  constructor() {
    this._settings = {
      selector: LanguageSwitcher.selector,
      target: LanguageSwitcher.target,
      currentLanguage: LanguageSwitcher.currentLanguage,
      languageSwitcherWrapper: LanguageSwitcher.languageSwitcherWrapper,
      logoWrapper: LanguageSwitcher.logoWrapper,
      googleTranslateLogo: LanguageSwitcher.googleTranslateLogo

    };

    const languagesDiv = document.querySelector(`.${this._settings.target}`)
    const languageSwitcherWrapper = document.querySelector(`.${this._settings.languageSwitcherWrapper}`);
    const logoWrapper = document.querySelector(`.${this._settings.logoWrapper}`);
    let body = document.querySelector("body");
    const allLanguages = document.querySelectorAll(".wpml-ls-item");
    const googleTranslateLogo = document.querySelector(`.${this._settings.googleTranslateLogo}`)
    const translateButton = document.querySelector("[data-js='js-translate']")
    const pickAlanguage = document.querySelector("[data-js='js-pick-a-language']")
    const closeMobileLanguageMenu = document.querySelector("[data-js='close-mobile-language-menu']")
    let isLanguageSwitcherOpen = false;

    // Media Query
    let isMobile = LanguageSwitcher.checkScreenSize();

    // Gotchas --
    if (languagesDiv) {
      languagesDiv.classList.add("desktop:w-full");
    }

    // Hide all languages and google translate logo
    this._hideAllLanguages(allLanguages, googleTranslateLogo, isMobile, closeMobileLanguageMenu, pickAlanguage );

    //On click (Translate Link) reveal language list
    translateButton.addEventListener('click', (e) => {
      isLanguageSwitcherOpen = true;
      this._toggle(allLanguages, googleTranslateLogo, isMobile, pickAlanguage, closeMobileLanguageMenu, isLanguageSwitcherOpen);
      translateButton.style.display = "none";
      // on mobile"mobile-languages-switcher" class will reposition and style the language switcher
      languageSwitcherWrapper.classList.toggle("mobile-languages-switcher");

      // On mobile change body element overflow to hidden
      LanguageSwitcher.addOverflowHidden(isMobile, body);
    })

    // On mobile On click close language switcher
    closeMobileLanguageMenu.addEventListener('click', (e) => {
      isLanguageSwitcherOpen = false;
      translateButton.style.display = "";

      this._hideAllLanguages(allLanguages, googleTranslateLogo, isMobile, closeMobileLanguageMenu, pickAlanguage);
      languageSwitcherWrapper.classList.remove("mobile-languages-switcher");

      body.classList.remove("overflow-hidden");

    })

    // Onresize check screen size and apply all the changes
    window.addEventListener("resize", function () {
      isMobile = LanguageSwitcher.checkScreenSize();
      if (!isMobile.matches) {
        pickAlanguage.style.display = "none";
        closeMobileLanguageMenu.style.display = "none";
      } else if (isMobile.matches && isLanguageSwitcherOpen ) {
        pickAlanguage.style.display = "";
        closeMobileLanguageMenu.style.display = "";
      }

      // On mobile and if the translate button is clicked add overflowe-hidden class to the body element
      if (!isLanguageSwitcherOpen) {
          googleTranslateLogo.style.display = "none";
      } else {
          googleTranslateLogo.style.display = "";
      }

      if (languageSwitcherWrapper.classList.contains("mobile-languages-switcher")) {
        LanguageSwitcher.addOverflowHidden(isMobile, body);
        // LanguageSwitcher.addCloseIconTitle(pickAlanguage, closeIconLi, isMobile);
        LanguageSwitcher.removeOverflowHidden(isMobile, body);
      }
    })
  }

  // Unhide language list
  _toggle(allLanguages, googleTranslateLogo, isMobile, pickAlanguage, closeMobileLanguageMenu, isLanguageSwitcherOpen) {
    allLanguages.forEach(item => {
      item.style.display = ""
    })
    googleTranslateLogo.style.display = "";

    if (isMobile.matches && isLanguageSwitcherOpen) {
      pickAlanguage.style.display = "";
      closeMobileLanguageMenu.style.display = "";
    }

  }

  // Hide language list
  _hideAllLanguages(allLanguages, googleTranslateLogo, isMobile, closeMobileLanguageMenu, pickAlanguage) {
    closeMobileLanguageMenu.style.display = "none";
    pickAlanguage.style.display = "none";
    allLanguages.forEach(item => {
      if (!item.classList.contains('wpml-ls-current-language')) {
        item.style.display = "none"
      }
    });
    googleTranslateLogo.style.display = "none";

  }
}

// Media query
LanguageSwitcher.checkScreenSize = function () {
  return window.matchMedia("(max-width: 700px)");
}

/**
 * On screen monile append the li element with text content 'Pick a language' and the li containing close icon
 * @param {} liTag- li element with textContetn 'Pick a language'
 * @param {} closeIconLi- li element with close icon
 * @param {} isMobile- boolon value that checks if screen size is less tha 700px
 */
LanguageSwitcher.addCloseIconTitle = function (pickAlanguage, closeIconLi, isMobile) {
  if (isMobile.matches) {
    let ul = document.querySelector(".wpml-ls-legacy-list-horizontal").getElementsByTagName("ul");
    ul[0].prepend(closeIconLi);
    ul[0].prepend(pickAlanguage);
  }
}


/**
 * On screen desktop remove the li element with text content 'Pick a language' and the li containing close icon
 * @param {} liTag- li element with textContetn 'Pick a language'
 * @param {} closeIconLi- li element with close icon
 * @param {} isMobile- boolon value that checks if screen size is less tha 700px
 */
LanguageSwitcher.removeCloseIconTitle = function (liTag, closeIconLi, isMobile) {
  let ul = document.querySelector(".wpml-ls-legacy-list-horizontal").getElementsByTagName("ul");
  if (ul[0].contains(liTag)) {
    ul[0].removeChild(liTag);
    ul[0].removeChild(closeIconLi);
  }
}

/**
 * On screen size less that 700px added overflow hidden class the body element
 * @param {} body- body element
 * @param {} isMobile- boolon value that checks if screen size is less tha 700px
 */
LanguageSwitcher.addOverflowHidden = function (isMobile, body) {
  if (isMobile.matches) {
    body.classList.add("overflow-hidden")
  }
}

/**
 * On desktop remove the overflow-hidden class from body element
 * @param {} isMobile- Check screensize
 * @param {} body- Body element
 */
LanguageSwitcher.removeOverflowHidden = function (isMobile, body) {
  if (!isMobile.matches) {
    body.classList.remove("overflow-hidden")
  }
}

LanguageSwitcher.selector = "rounded"
LanguageSwitcher.target = "wpml-ls-legacy-list-horizontal"
LanguageSwitcher.currentLanguage = "wpml-ls-current-language"
LanguageSwitcher.languageSwitcherWrapper = "c-language-switcher-wrapper"
LanguageSwitcher.logoWrapper = "o-navigation__logo-wrapper"
LanguageSwitcher.googleTranslateLogo = "google-translate-logo"
LanguageSwitcher.library = false

export default LanguageSwitcher;