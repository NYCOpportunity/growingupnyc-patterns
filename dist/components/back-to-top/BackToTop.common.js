'use strict';

var BackToTop = function BackToTop() {
  this._settings = {
    selector: BackToTop.selector,
    footer: BackToTop.footer
  }; //check if the button existes

  if (!document.querySelector(this._settings.selector)) {
    return;
  } //Get the button


  var button = document.querySelector(this._settings.selector);
  var footer = document.querySelector("." + this._settings.footer);
  window.addEventListener('scroll', function (e) {
    BackToTop.revealButton(button);

    if (BackToTop.isInViewport(footer)) {
      button.style.position = "absolute";
    } else {
      button.style.position = "fixed";
    }
  });
  button.addEventListener('click', function (e) {
    BackToTop.scrollTop();
  });
}; // When the user scrolls down 20px from the top of the document, show the button


BackToTop.scrollTop = function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}; // When the user clicks on the button, scroll to the top of the document


BackToTop.revealButton = function (ele) {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    ele.style.display = "block";
  } else {
    ele.style.display = "none";
  }
};

BackToTop.isInViewport = function (ele) {
  var ref = ele.getBoundingClientRect();
  var top = ref.top;
  var bottom = ref.bottom;
  var vHeight = window.innerHeight || document.documentElement.clientHeight;
  return (top > 0 || bottom > 0) && top < vHeight;
};

BackToTop.selector = '[data-js="back-to-top"]';
BackToTop.footer = 'o-footer';

module.exports = BackToTop;
