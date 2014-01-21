(function() {
  'use strict';

  document.oncontextmenu = context_menu;

  function context_menu(e) {
  if (!e) var e = window.event;
    var eTarget = (window.event) ? e.srcElement : e.target;

    if (eTarget.nodeName == "IMG") {
      //context menu attempt on top of an image element
      e.preventDefault();
      return false;
    }
  }

  window.onload = function () {
    var menuButton = new MenuButton();
  };

  function MenuButton() {
    this.id = 'menu-button';
    this.wrapper = document.getElementById('wrapper');
    this.button = document.getElementById(this.id);
    this.button.onclick = this.toggleNav.bind(this);
  }

  MenuButton.prototype.toggleNav = function (event) {
    event.preventDefault();
    this.wrapper.classList.toggle('show-nav');
  };
})();