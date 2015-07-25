(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var ads = {
  popup0: {
    x: 145,
    y: 50,
    frames: [0],
    fps: 1,
    text: ['DESIRE TO CRAVE\nCall us now!', 'Lose 20 lbs\nin 2 hours!']
  },
  popup1: {
    x: 145,
    y: 50,
    frames: [1],
    fps: 1,
    text: ['DESIRE TO CRAVE\nCall us now!', 'Lose 20 lbs\nin 2 hours!']
  },
  popup2: {
    x: 145,
    y: 50,
    frames: [2],
    fps: 1,
    text: ['DESIRE TO CRAVE\nCall us now!', 'Lose 20 lbs\nin 2 hours!']
  },
  popup3: {
    x: 145,
    y: 50,
    frames: [3],
    fps: 1,
    text: ['DESIRE TO CRAVE\nCall us now!', 'Lose 20 lbs\nin 2 hours!']
  },
  popup4: {
    x: 145,
    y: 50,
    frames: [4],
    fps: 1,
    text: ['DESIRE TO CRAVE\nCall us now!', 'Lose 20 lbs\nin 2 hours!']
  },
  popup5: {
    x: 145,
    y: 50,
    frames: [5],
    fps: 1,
    text: ['DESIRE TO CRAVE\nCall us now!', 'Lose 20 lbs\nin 2 hours!']
  },
  popup6: {
    x: 145,
    y: 50,
    frames: [6],
    fps: 1,
    text: ['DESIRE TO CRAVE\nCall us now!', 'Lose 20 lbs\nin 2 hours!']
  },
  popup7: {
    x: 145,
    y: 50,
    frames: [7],
    fps: 1,
    text: ['DESIRE TO CRAVE\nCall us now!', 'Lose 20 lbs\nin 2 hours!']
  },
  popup8: {
    x: 145,
    y: 50,
    frames: [8],
    fps: 1,
    text: ['DESIRE TO CRAVE\nCall us now!', 'Lose 20 lbs\nin 2 hours!']
  },
  popup9: {
    x: 145,
    y: 50,
    frames: [9],
    fps: 1,
    text: ['DESIRE TO CRAVE\nCall us now!', 'Lose 20 lbs\nin 2 hours!']
  },
  popup10: {
    x: 145,
    y: 50,
    frames: [10],
    fps: 1,
    text: ['DESIRE TO CRAVE\nCall us now!', 'Lose 20 lbs\nin 2 hours!']
  },
  popup11: {
    x: 145,
    y: 50,
    frames: [11],
    fps: 1,
    text: ['DESIRE TO CRAVE\nCall us now!', 'Lose 20 lbs\nin 2 hours!']
  },
  popup12: {
    x: 145,
    y: 50,
    frames: [12],
    fps: 1,
    text: ['DESIRE TO CRAVE\nCall us now!', 'Lose 20 lbs\nin 2 hours!']
  },
  popup13: {
    x: 145,
    y: 50,
    frames: [13, 14, 15, 16, 17],
    fps: 20,
    text: ['DESIRE TO CRAVE\nCall us now!', 'Lose 20 lbs\nin 2 hours!']
  },
  popup14: {
    x: 145,
    y: 50,
    frames: [18],
    fps: 1,
    text: ['DESIRE TO CRAVE\nCall us now!', 'Lose 20 lbs\nin 2 hours!']
  },
  popup15: {
    x: 145,
    y: 50,
    frames: [19, 20],
    fps: 10,
    text: ['DESIRE TO CRAVE\nCall us now!', 'Lose 20 lbs\nin 2 hours!']
  },
  popup16: {
    x: 145,
    y: 50,
    frames: [21],
    fps: 1,
    text: ['DESIRE TO CRAVE\nCall us now!', 'Lose 20 lbs\nin 2 hours!']
  },
  popup17: {
    x: 145,
    y: 50,
    frames: [22, 23],
    fps: 10,
    text: ['DESIRE TO CRAVE\nCall us now!', 'Lose 20 lbs\nin 2 hours!']
  },
  popup18: {
    x: 145,
    y: 50,
    frames: [24, 25],
    fps: 10,
    text: ['DESIRE TO CRAVE\nCall us now!', 'Lose 20 lbs\nin 2 hours!']
  },
  popup19: {
    x: 145,
    y: 50,
    frames: [26],
    fps: 1,
    text: ['DESIRE TO CRAVE\nCall us now!', 'Lose 20 lbs\nin 2 hours!']
  }
};
exports.ads = ads;

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var Boot = {

  preload: function preload() {
    //this.load.image('preloaderBg', 'img/loading-bg.png');
    //this.load.image('preloaderBar', 'img/loading-bar.png');
  },

  create: function create() {
    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.game.scale.pageAlignHorizontally = true;
    this.game.scale.pageAlignVertically = true;
    this.game.state.start('preloader');
  }

};
exports.Boot = Boot;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _popups = require('./popups');

var _util = require('./util');

var positions = [48, 144, 240, 336, 432];

var Game = {

  preload: function preload() {
    this.stage.backgroundColor = '#d6cf9d';
  },

  create: function create() {
    this.physics.startSystem(Phaser.Physics.ARCADE);
    this.physics.arcade.gravity.y = 20;

    this._spikes = this.add.group();
    this._spikes.createMultiple(32, 'spikes', 0, true);
    this._spikes.callAll('animations.add', 'animations', 'shine', this.math.numberArrayStep(1, 50, 0).concat(0), 15, true);

    var i = 0;
    this._spikes.forEach(function (spike) {
      spike.anchor.setTo(0, 1);
      spike.x = 15 * i++;
      spike.y = 320;
      spike.animations.play('shine');
      spike.animations.next(i);
    });

    this._balls = this.add.group();
    this._balls.createMultiple(30, 'ball', 0, false);

    this._balls.callAll('animations.add', 'animations', 'drop', [0, 1], 2, true);
    this._balls.callAll('animations.add', 'animations', 'pop', [2, 3, 4], 30, true);
    this._balls.callAll('animations.add', 'animations', 'save', [5, 6, 7], 30, true);

    this._balls.callAll('play', null, 'drop');

    spawnBall.call(this, this._balls);
    this.time.events.loop(Phaser.Timer.SECOND * 2, spawnBall.bind(this, this._balls));

    this._healthbar = this.add.sprite(2, 2, 'healthbar');
    this._healthbar.width = 160;

    this._timeElapsed = 0;
    this._timeElapsedText = this.add.bitmapText(this.world.bounds.right - 4, 4, 'bmp1', '0:00', 16);
    this._timeElapsedText.x -= this._timeElapsedText.width;
    this.time.events.loop(Phaser.Timer.SECOND, addTime, this);

    this._basket = this.add.sprite(240, this.world.bounds.bottom - 20, 'basket');
    this._basket.anchor.set(0.5, 1);
    this._basket.currentPos = 2;
    this.physics.enable(this._basket, Phaser.Physics.ARCADE);
    this._basket.body.allowGravity = false;
    this._basket.body.immovable = true;
    this._basket.body.setSize(72, 13, 0, 0);

    _popups.initPopups.call(this);

    var keys = this.input.keyboard.createCursorKeys();
    keys.right.onUp.add(moveBasket.bind(this, 1));
    keys.left.onUp.add(moveBasket.bind(this, -1));
  },

  update: function update() {
    var _this = this;

    this._balls.forEachAlive(function (ball) {
      return ball.y >= 290 && pop.call(_this, ball);
    });
    this.physics.arcade.collide(this._basket, this._balls, save, null, this);
  },

  render: function render() {
    //this.balls.forEachAlive(ball => this.game.debug.body(ball), this);
    //this.game.debug.body(this.basket);
  }

};

exports.Game = Game;
function moveBasket(indexOffset) {
  this._basket.currentPos = Phaser.Math.clamp(this._basket.currentPos + indexOffset, 0, 4);
  this._basket.x = positions[this._basket.currentPos];
}

function spawnBall(group) {
  var ball = group.getFirstDead();
  if (!ball) {
    return;
  }

  this.physics.enable(ball, Phaser.Physics.ARCADE);
  ball.anchor.set(0.5);
  ball.reset(positions[this.rnd.integerInRange(0, 4)], 0 - 24);
  ball.animations.play('drop', null, true);
}

function save(basket, ball) {
  ball.animations.play('save', null, false, true);
}

function pop(ball) {
  ball.animations.play('pop', null, false, true);
  var newHealth = this._healthbar.width - 16;
  var tween = this.add.tween(this._healthbar).to({ width: newHealth }, 300, Phaser.Easing.Quadratic.InOut, true, 0);
  tween.onComplete.add(end, this);
}

function end() {
  if (this._healthbar.width <= 0) {
    this.state.start('gameover', true, true, this._timeElapsed);
  }
}

function addTime() {
  this._timeElapsed += 1;
  this._timeElapsedText.text = (0, _util.prettyTime)(this._timeElapsed);
}

},{"./popups":6,"./util":8}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _util = require('./util');

var GameOver = {

  init: function init(time) {
    this._score = time;
  },

  create: function create() {
    var text = this.add.bitmapText(this.world.centerX, this.world.centerY, 'bmp1', 'Can it be all so simple?\nYou survived: ' + (0, _util.prettyTime)(this._score), 16);
    text.x -= text.width / 2;
    text.y -= text.height / 2;
  }

};
exports.GameOver = GameOver;

},{"./util":8}],5:[function(require,module,exports){
'use strict';

var _boot = require('./boot');

var _preloader = require('./preloader');

var _game = require('./game');

var _gameover = require('./gameover');

var game = new Phaser.Game(480, 320, Phaser.AUTO, 'game');
game.state.add('boot', _boot.Boot);
game.state.add('preloader', _preloader.Preloader);
game.state.add('game', _game.Game);
game.state.add('gameover', _gameover.GameOver);
game.state.start('boot');

},{"./boot":2,"./game":3,"./gameover":4,"./preloader":7}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.initPopups = initPopups;

var _ads = require('./ads');

var NUM_ADS = 19;

function initPopups() {
  var _this = this;

  this._popups = this.add.group();

  this._popups.createMultiple(50, 'popups', 0, false);

  var i = this.rnd.between(0, NUM_ADS);
  this._popups.forEach(function (popup) {
    return makePopup.call(_this, popup, i++ % NUM_ADS);
  });

  this.time.events.add(Phaser.Timer.SECOND * 1, showPopup, this);
}

function makePopup(popup, i) {
  var ad = _ads.ads['popup' + i];
  var text = this.add.bitmapText(ad.x, ad.y, 'bmp1', ad.text[this.rnd.between(0, ad.text.length - 1)], 32);
  var button = this.add.button(6, 6, 'close1', function () {
    return popup.kill();
  });
  popup.addChild(text);
  popup.addChild(button);
  popup.animations.add('idle', ad.frames, ad.fps, true);
}

function showPopup() {
  var popup = this._popups.getFirstDead();
  if (!popup) {
    return;
  }

  popup.reset(this.rnd.between(0, 100), this.rnd.between(0, 200));
  popup.animations.play('idle');

  this.time.events.add(Phaser.Timer.SECOND * 1, showPopup, this);
}

},{"./ads":1}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var Preloader = {

  preload: function preload() {
    this.load.image('basket', '../assets/basket.png');
    this.load.image('healthbar', '../assets/healthbar.png');
    this.load.image('close1', '../assets/close1.png');
    this.load.spritesheet('spikes', '../assets/spikes.png', 15, 15);
    this.load.spritesheet('ball', '../assets/ball.png', 48, 48);
    this.load.spritesheet('popups', '../assets/popups.png', 360, 180);

    this.load.bitmapFont('bmp1', 'assets/fonts/bmp1.png', 'assets/fonts/bmp1.fnt');
  },

  create: function create() {
    this.game.state.start('game');
  }

};
exports.Preloader = Preloader;

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.prettyTime = prettyTime;

function prettyTime(time) {
  var minutes = Math.floor(time / 60);
  var seconds = time % 60;
  return seconds < 10 ? minutes + ':0' + seconds : minutes + ':' + seconds;
}

},{}]},{},[5]);
