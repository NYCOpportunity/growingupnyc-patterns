var BackToTop = (function () {
  'use strict';

  var BackToTop = function BackToTop() {
    this._settings = {
      selector: BackToTop.selector
    }; //Get the button

    var button = document.querySelector(this._settings.selector);
    window.addEventListener('scroll', function (e) {
      BackToTop.revealButton(button);
    });
    button.addEventListener('click', function (e) {
      BackToTop.scrollTop();
    });
  }; // When the user scrolls down 20px from the top of the document, show the button


  BackToTop.scrollTop = function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }; // When the user clicks on the button, scroll to the top of the document


  BackToTop.revealButton = function (button) {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  };

  BackToTop.selector = '[data-js="js-back-to-top"]';

  return BackToTop;

}());
