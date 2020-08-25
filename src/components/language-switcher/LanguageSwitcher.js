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
    let isLanguageSwitcherOpen = false;
    // Media Query
    let isMobile = LanguageSwitcher.checkScreenSize();

    // Gotchas --
    if (languagesDiv) {
      languagesDiv.classList.add("desktop:w-full");
    }


    /* Add 'Translate' title and hide all languages
       Create a list element and append an anchor tag with the string 'Translate'
       Span element
     */
    const span = document.createElement("span");
    if (document.querySelector("[data-js='translate']")) {
      span.classList.add("wpml-ls-native");
      // Hidden span with textContent "tanslate" which is exposed to WPML string translation
      const hiddenSpan = document.querySelector("[data-js='translate']")
      // HiddenSpan textContent
      const hiddenSpanConten = hiddenSpan.textContent;
      const title = document.createTextNode(hiddenSpanConten);
      // Appendn the WPML exposed textContent in to a span
      span.appendChild(title);
    } else {
      span.classList.add("wpml-ls-native");
      // WPML unexposed textContetn "Translate"
      const title = document.createTextNode("Translate");
      // Append the textContent to a span
      span.appendChild(title);
    }

    const aTag = document.createElement("a")
    aTag.classList.add("wpml-ls-link", "title-tag");
    // Append span with textContetn "Tanslate" to an anchor element
    aTag.appendChild(span)
    const li = document.createElement("li");
    li.classList.add("wpml-ls-item-button")
    // Append the a tag with WMPL exposed textContent into a li element
    li.appendChild(aTag)


    // Append the li into ul element containing list of languages generated by WPML
    if (document.querySelector(".wpml-ls-legacy-list-horizontal")) {
      let ul = document.querySelector(".wpml-ls-legacy-list-horizontal").getElementsByTagName("ul");
      ul[0].appendChild(li);
    }

    // Hide all languages and google translate logo
    this._hideAllLanguages(allLanguages, googleTranslateLogo, isMobile);

    // On click (Translate Link) reveal language list
    aTag.addEventListener('click', (e) => {
      isLanguageSwitcherOpen = true;
      this._toggle(allLanguages, googleTranslateLogo, isMobile);
      li.style.display = "none";
      // on mobile"mobile-languages-switcher" class will reposition and style the language switcher
      languageSwitcherWrapper.classList.toggle("mobile-languages-switcher");
      // Adjusting logo postion on pages without language switcher
      // logoWrapper.classList.add("ls-logo");
      LanguageSwitcher.addCloseIconTitle(liTag, closeIconLi, isMobile)

      // On mobile change body element overflow to hidden
      LanguageSwitcher.addOverflowHidden(isMobile, body);
    })

    // Add "Pick a language" title on mobile
    const liTag = document.createElement("li");
    if (document.querySelector("[data-js='pick-a-language']")) {
      liTag.classList.add("pick-a-language", "wpml-ls-item");
      // Grab a hidden span elements with text contentContent 'Pick a language'
      const hiddenSpan = document.querySelector("[data-js='pick-a-language']")
      // WPML string translation exposed title 'Pick a language'
      const hiddenSpanContent = hiddenSpan.textContent;
      // Create text node containg the 'Pick a language' textContetn and append it to a li element
      const title = document.createTextNode(hiddenSpanContent);
      liTag.appendChild(title);
    } else {
      // If no hidden span with WPML exposed textContetn crate a textNode with textContetn "Pick a language" and append to an li element
      liTag.classList.add("pick-a-language", "wpml-ls-item");
      const title = document.createTextNode("Pick a language");
      liTag.appendChild(title);
    }

    // Create li and a elements, and append the a to the li
    const closeIconLi = document.createElement("li");
    closeIconLi.classList.add("close-language-switcher", "wpml-ls-item");
    const CloseIconATag = document.createElement("a")
    CloseIconATag.classList.add("wpml-ls-link", "ls-close-link");
    // Append close icon
    closeIconLi.appendChild(CloseIconATag)

    // On mobile On click close language switcher
    CloseIconATag.addEventListener('click', (e) => {
      isLanguageSwitcherOpen = false;

      this._hideAllLanguages(allLanguages, googleTranslateLogo, isMobile);
      languageSwitcherWrapper.classList.remove("mobile-languages-switcher");
      li.style.display = "";
      logoWrapper.classList.remove("ls-logo");
      LanguageSwitcher.removeCloseIconTitle(liTag, closeIconLi, isMobile)

      body.classList.remove("overflow-hidden");

    })

    // Onresize check screen size and apply all the changes
    window.addEventListener("resize", function () {
      isMobile = LanguageSwitcher.checkScreenSize();
      if (!isMobile.matches) {
        LanguageSwitcher.removeCloseIconTitle(liTag, closeIconLi, isMobile);
      }

      // On mobile and if the translate button is clicked add overflowe-hidden class to the body element
      if (!isLanguageSwitcherOpen) {

        if (isMobile.matches) {
          googleTranslateLogo.style.removeProperty('visibility');
          googleTranslateLogo.style.display = "none";
        } else {
          googleTranslateLogo.style.removeProperty('display')
          googleTranslateLogo.style.visibility = "hidden";
        }
      } else {
          if (isMobile.matches) {
            googleTranslateLogo.style.removeProperty('visibility');
            googleTranslateLogo.style.display = "";
          } else {
            googleTranslateLogo.style.removeProperty('display')
            googleTranslateLogo.style.visibility = "visible";
          }

      }

      if (languageSwitcherWrapper.classList.contains("mobile-languages-switcher")) {
        LanguageSwitcher.addOverflowHidden(isMobile, body);
        LanguageSwitcher.addCloseIconTitle(liTag, closeIconLi, isMobile);
        LanguageSwitcher.removeOverflowHidden(isMobile, body);
      }
    })
  }

  // Unhide language list
  _toggle(allLanguages, googleTranslateLogo, isMobile) {
    allLanguages.forEach(item => {
      item.style.display = ""
    })
    googleTranslateLogo.style.display = "";
  }

  // Hide language list
  _hideAllLanguages(allLanguages, googleTranslateLogo, isMobile) {
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
LanguageSwitcher.addCloseIconTitle = function (liTag, closeIconLi, isMobile) {
  if (isMobile.matches) {
    let ul = document.querySelector(".wpml-ls-legacy-list-horizontal").getElementsByTagName("ul");
    ul[0].prepend(closeIconLi);
    ul[0].prepend(liTag);
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

export default LanguageSwitcher;