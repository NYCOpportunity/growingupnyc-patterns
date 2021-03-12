'use strict';

// import forEach from 'lodash/forEach';

if(window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}
if(window.HTMLCollection && !HTMLCollection.prototype.forEach) {
  HTMLCollection.prototype.forEach = Array.prototype.forEach;
}

class Offcanvas {
  /**
   * @param  {object} settings This could be some configuration options.
   *                           for the pattern module.
   * @param  {object} data     This could be a set of data that is needed
   *                           for the pattern module to render.
   * @constructor
   */
  constructor(settings) {
		this._settings = {
			sideSelector: (settings.sideSelector) ? settings.sideSelector : Offcanvas.side,
			nav: Offcanvas.nav,
			mainOff: Offcanvas.mainOff,
			offCanvas: Offcanvas.offCanvas
		};

		const nav = document.querySelector(`.${this._settings.nav}`)
		const mainOff = document.querySelector(`.${this._settings.mainOff}`)
		const footer = document.querySelector('.o-footer')

		// Depending on the argument passed toggle element class
    let openClass = "";
    if (this._settings.sideSelector === 'left') {
      openClass = 'is-open-left';
      mainOff.classList.toggle("o-offcanvas__main-left")
    } else if (this._settings.sideSelector === 'right') {
        openClass = 'is-open-right';
        mainOff.classList.toggle("o-offcanvas__main-right")
    } else if (this._settings.sideSelector === 'down') {
        openClass = 'is-open-down';
				mainOff.classList.toggle("o-offcanvas__main-down")
				nav.classList.toggle("w-full")

    }

		// Offcanvas element
    const offCanvas = document.querySelectorAll(`.${this._settings.offCanvas}`);

    if (offCanvas) {
      offCanvas.forEach(function (offCanvasElem) {
        const offCanvasSide = offCanvasElem.querySelector('.js-offcanvas__side');

        /**
        * Add event listener for 'changeOpenState'.
        * The value of event.detail indicates whether the open state is true
        * (i.e. the offcanvas content is visible).
        * @function
        * @param {object} event - The event object
        */
        offCanvasElem.addEventListener('changeOpenState', function (event) {

          if (event.detail) {
            if (!(/^(?:a|select|input|button|textarea)$/i.test(offCanvasSide.tagName))) {
              offCanvasSide.tabIndex = -1;
            }
            offCanvasSide.focus();
          }
        }, false);
      });
    }

    this._toggle(openClass, nav, mainOff, footer);
  }

  _toggle(openClass, nav, mainOff, footer) {


    const linkActiveClass = 'is-active';
    const toggleElems = document.querySelectorAll('[data-js]');

    if (!toggleElems) return;

    /**
    * For each toggle element, get its target from the data-toggle attribute.
    * Bind an event handler to toggle the openClass on/off on the target element
    * when the toggle element is clicked.
    */
    toggleElems.forEach(function (toggleElem) {
      const targetElemSelector = Offcanvas.dataset(toggleElem, 'js');

      if (!targetElemSelector) return;

      const targetElem = document.getElementById(targetElemSelector);

      if (!targetElem) return;

      toggleElem.addEventListener('click', function (event) {
        let toggleEvent;
        let toggleClass = (toggleElem.dataset.toggleClass) ?
          toggleElem.dataset.toggleClass : openClass;

        event.preventDefault();

        // Toggle the element's active class
        toggleElem.classList.toggle(linkActiveClass);
        if (openClass === 'is-open-left') {
          nav.classList.toggle("o-offcanvas__side-left")
        } else if (openClass === 'is-open-down'){
					nav.classList.toggle("o-offcanvas__side-down")
					footer.classList.toggle("o-footer-down")
				} else {
					nav.classList.toggle("o-offcanvas__side-right")
        }

        // Toggle custom class if it is set
        if (toggleClass !== openClass)
          targetElem.classList.toggle(toggleClass);
        // Toggle the default open class
        targetElem.classList.toggle(openClass);

        // Toggle the appropriate aria hidden attribute
        targetElem.setAttribute('aria-hidden',
          !(targetElem.classList.contains(toggleClass))
        );

        // Fire the custom open state event to trigger open functions
        if (typeof window.CustomEvent === 'function') {
          toggleEvent = new CustomEvent('changeOpenState', {
            detail: targetElem.classList.contains(openClass)
          });
        } else {
          toggleEvent = document.createEvent('CustomEvent');
          toggleEvent.initCustomEvent('changeOpenState', true, true, {
            detail: targetElem.classList.contains(openClass)
          });
        }

        targetElem.dispatchEvent(toggleEvent);
      });
    });
  };
}

Offcanvas.side = "right";
Offcanvas.nav = "js-offcanvas__side";
Offcanvas.mainOff = "js-offcanvas__main";
Offcanvas.offCanvas = "js-offcanvas";


Offcanvas.dataset = function (elem, attr) {
  if (typeof elem.dataset === 'undefined') {
    return elem.getAttribute('data-' + attr);
  }
  return elem.dataset[attr];
}


export default Offcanvas;