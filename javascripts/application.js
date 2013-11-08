(function() {
  'use strict';

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