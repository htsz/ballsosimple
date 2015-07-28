'use strict';

import { prettyTime, drawText } from './util';

export const Score = {

	preload: function() {
    this.stage.backgroundColor = '#ded7ad';
	},

  init: function(score) {
    this._score = score;
  },

  create: function() {
    drawText.call(this,
      'Can it be all so simple?\nYou survived ' +
      prettyTime(this._score) + ' minutes.', 32);

    this.add.button(260, 230, 'menu-buttons',
      () => this.state.start('game'), null, 3, 3, 3, 3);
    this.add.button(120, 230, 'menu-buttons',
      () => tweet(this._score), null, 4, 4, 4, 4);
  }

};

function tweet(score) {
  window.top.open(
    'http://twitter.com/share?url=https://htsz.github.io/ballsosimple/play' +
    '&text=It was supposed to be all so simple and yet I only lasted for ' +
    prettyTime(score) + ' minutes.&hashtags=ballsosimple');
}
