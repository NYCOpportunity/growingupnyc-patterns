'use strict';

import '../functions/foreach';

class Sticky {
  constructor() {

    this._settings = {
      selector: Sticky.selector,
      end: Sticky.end,
      container: Sticky.container,
    };

    const stickyContent = document.querySelectorAll(this._settings.selector);
    const stickyEnd = document.querySelector(this._settings.end);

    Sticky.assignStickyFeature(stickyContent, stickyEnd);
    window.addEventListener('scroll', function () {
      Sticky.snapToStickyEnd(stickyEnd, stickyContent);
    });
  }
}

/**
 * Determines stickiness of content
 * @param {elements} stickyContent content to stay sticky
 * @param {*} stickyEnd element marking end of sticky
 */
Sticky.assignStickyFeature = function(stickyContent, stickyEnd) {

  if (stickyContent) {
    stickyContent.forEach(function (stickyContentElem) {
      Sticky.toggleSticky(stickyContentElem);
      
      window.addEventListener('scroll', function () {
        Sticky.toggleSticky(stickyContentElem, stickyEnd);
      }, false);
     
      window.addEventListener('resize', function () {
        Sticky.toggleSticky(stickyContentElem, stickyEnd);
      }, false);
    });
  }
}

/**
 * Applies stuck class when the sticky reaches the element marking the end
 * @param {element} stickyEnd element marking end of sticky
 * @param {element} stickyContent sticky content
 */
Sticky.snapToStickyEnd = function(stickyEnd, stickyContent) {

  var position = stickyEnd.getBoundingClientRect();

  // TODO: dynamically update the denominator
  const main = document.querySelector('main').offsetHeight / 2;

  if (position.top >= 0 && position.bottom <= main) {
    stickyContent.forEach(function (stickyContentElem) {
      stickyContentElem.classList.add(Sticky.StuckClass);
    });
  } 
  else {
    stickyContent.forEach(function (stickyContentElem) {
      var positionSticky = stickyContentElem.getBoundingClientRect();
      if (positionSticky.top >= 0) {
        stickyContentElem.classList.remove(Sticky.StuckClass);
      };
    })
  }

}

/**
 * Toggles the sticky class
 * @param {element} stickyContentElem
 */

Sticky.toggleSticky = function(stickyContentElem) {

  let elemTop = stickyContentElem.parentElement.getBoundingClientRect().top;

  if (elemTop > 0) {
    stickyContentElem.classList.remove(Sticky.StickyClass);
  } else {
    stickyContentElem.classList.add(Sticky.StickyClass);
  }
}

/**
 * Defaults
 */
Sticky.selector = '[data-js=sticky]';
Sticky.end = '[data-js=sticky-end]';
Sticky.container = '[data-js=sticky-container]';
Sticky.StickyClass = 'is-sticky';
Sticky.StuckClass = 'is-stuck';

export default Sticky;