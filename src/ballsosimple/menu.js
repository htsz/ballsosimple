'use strict';

export const Menu = {

  preload: function() {
    this._soundIntro = this.add.audio('audio-intro',1,true);
  },

  create: function() {
    this.add.sprite(0, 0, 'menu-cover');
    this._soundIntro.play('',0,1,true);

    this.add.button(330, 270, 'menu-buttons', function() {
      if (this._soundIntro) {
        this._soundIntro.destroy();
      }
      this.state.start('game');
    }, this, 0, 0, 0, 0);
  }

};
