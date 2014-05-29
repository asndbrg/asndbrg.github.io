(function() {
  'use strict';

  document.oncontextmenu = context_menu;

  function context_menu(e) {
    if (!e) var e = window.event;
    var eTarget = (window.event) ? e.srcElement : e.target;

    if (eTarget.nodeName == "IMG") {
      alert('Vid behov av lån var vänlig kontakta mig!');
      e.preventDefault();
      return false;
    }
  }
})();