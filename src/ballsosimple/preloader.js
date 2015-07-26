'use strict';

export const Preloader = {

  preload: function() {
    this.stage.backgroundColor = '#d6cf9d';

    const progressbox = this.add.sprite(
      this.world.centerX, this.world.centerY, 'border');
    progressbox.anchor.setTo(0.5);
    const progressbar = this.add.sprite(
      this.world.centerX, this.world.centerY, 'progressbar');
    progressbar.anchor.setTo(0.5);
    this.load.setPreloadSprite(progressbar);

    this.load.image('healthbar', 'assets/healthbar.png');
    this.load.image('basket', 'assets/basket.png');
    this.load.image('close1', 'assets/close1.png');
    this.load.image('close2', 'assets/close2.png');
    this.load.image('close3', 'assets/close3.png');
    this.load.spritesheet('spikes', 'assets/spikes.png', 15, 15);
    this.load.spritesheet('ball', 'assets/ball.png', 48, 48);
    this.load.spritesheet('popups', 'assets/popups.png', 360, 180);

    this.load.bitmapFont(
      'bmp1', 'assets/fonts/bmp1.png', 'assets/fonts/bmp1.fnt');

    this.load.image('menu-cover', 'assets/covers/menu.png');
    this.load.image('menu-start', 'assets/covers/start.png');
    this.load.spritesheet('menu-sound', 'assets/covers/sound.png', 86, 37);
    this.load.audio('audio-intro', ['assets/sfx/intro.ogg','assets/sfx/intro.mp3','assets/sfx/intro.m4a']);
    this.load.audio('audio-gameplay', ['assets/sfx/gameplay.ogg','assets/sfx/gameplay.mp3','assets/sfx/gameplay.m4a']);
  },

  create: function() {
    this.game.state.start('menu');
  }

};
