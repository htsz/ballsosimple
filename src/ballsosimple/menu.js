'use strict';

export const Menu = {

  create: function() {
    this.add.sprite(0, 0, 'menu-cover');
    this.add.button(330, 270, 'menu-buttons',
      () => this.game.state.start('game'), null, 0, 0, 0, 0);
    // this.add.button(370, 270, 'menu-sound', () => undefined);
  }

};
