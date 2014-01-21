(function() {
  'use strict';

  window.onload = function () {
    var blockContextMenu, images, menuButton;

    blockContextMenu = function (evt) {
      alert('Vid behov av lån var vänlig kontakta mig!');
      evt.preventDefault();
      return false;
    };

    images = document.getElementsByTagName('img');
    images.addEventListener('contextmenu', blockContextMenu);

    menuButton = new MenuButton();
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