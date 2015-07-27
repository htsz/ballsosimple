'use strict';

export const Boot = {

  preload: function() {
    this.load.image('border', 'assets/border.png');
    this.load.image('progressbar', 'assets/progressbar.png');
  },

  create: function() {
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.setScreenSize(true);
    this.state.start('preloader');
  }

};
