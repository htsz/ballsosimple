(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var NUM_ADS = 20;

exports.NUM_ADS = NUM_ADS;
var ads = {
  popup0: {
    x: 165,
    y: 50,
    frames: [0],
    fps: 1,
    text: ['YOU \nDESERVE \nNOTHING!', 'Get the \nsmile habit!']
  },
  popup1: {
    x: 165,
    y: 50,
    frames: [1],
    fps: 1,
    text: ['Get \nthat body, \nbuddy!', 'ALL \nPRAISE \nPROTEIN!!!']
  },
  popup2: {
    x: 165,
    y: 50,
    frames: [2],
    fps: 1,
    text: ['Have a \nbreak \nhave a \nfamily!', 'GO CRACK \nA FAMILY!']
  },
  popup3: {
    x: 165,
    y: 50,
    frames: [3],
    fps: 1,
    text: ['Ball \nis organic.', 'KEEP \nIT WILD, \nCATCH!']
  },
  popup4: {
    x: 165,
    y: 50,
    frames: [4],
    fps: 1,
    text: ['ME LOVE \nYOU \nLONG TIME!', 'Sexy \nzebras \nin your \narea.']
  },
  popup5: {
    x: 16,
    y: 46,
    frames: [5],
    fps: 1,
    text: ['KUMI KUMI! \nKIDS MAO!', 'The serial \ncereal \nfor kids.']
  },
  popup6: {
    x: 16,
    y: 46,
    frames: [6],
    fps: 1,
    text: ['Easy as \nAK-47.', 'SMELL \nLIKE \nSANDALWOOD!']
  },
  popup7: {
    x: 165,
    y: 50,
    frames: [7],
    fps: 1,
    text: ['Happy love \ntogether. \nBuy friends!', 'You wouldnt \nbelieve \nthe smell']
  },
  popup8: {
    x: 165,
    y: 50,
    frames: [8],
    fps: 1,
    text: ['NEW ALBUM \nIN YOUR MOM!', 'Selena \nsings \nfor slaves. \nBUY!']
  },
  popup9: {
    x: 165,
    y: 50,
    frames: [9],
    fps: 1,
    text: ['GET RICH \nOR DIE, \nDIE, \nDIE!', 'I buy it \nfor a dollar']
  },
  popup10: {
    x: 165,
    y: 50,
    frames: [10],
    fps: 1,
    text: ['Stop being \nso fat!', 'YOUR FAT \nAND WILL BE!']
  },
  popup11: {
    x: 16,
    y: 46,
    frames: [11],
    fps: 1,
    text: ['Scientists \ncouldnt \nbelieve it!', 'Donate \nsperm to \nyour local \nvets!']
  },
  popup12: {
    x: 16,
    y: 46,
    frames: [12],
    fps: 1,
    text: ['Guardians \nof the \nAttick \nback in town!', 'Facepalm \nchampionships \n2015']
  },
  popup13: {
    x: 165,
    y: 50,
    frames: [13, 14, 15, 16, 17],
    fps: 20,
    text: ['RELAX.', 'Kill! Kill! Kill!']
  },
  popup14: {
    x: 16,
    y: 46,
    frames: [18],
    fps: 1,
    text: ['Premium \nfuneral \nservices.', 'CONGRATULATIONS !!! \nYou WON NOTHING!']
  },
  popup15: {
    x: 165,
    y: 100,
    frames: [19, 20],
    fps: 10,
    text: ['Get out \nof town!', 'Run away!']
  },
  popup16: {
    x: 16,
    y: 46,
    frames: [21],
    fps: 1,
    text: ['SEA \nSMELLS.', 'Sail like \nKevin C.']
  },
  popup17: {
    x: 145,
    y: 80,
    frames: [22, 23],
    fps: 10,
    text: ['!!!', '???']
  },
  popup18: {
    x: 60,
    y: 100,
    frames: [24, 25],
    fps: 10,
    text: ['CHILL!', 'FREAK \nOUT!']
  },
  popup19: {
    x: 60,
    y: 100,
    frames: [26],
    fps: 1,
    text: ['Your body has \nbeen infected. \nClick OK \nto deal with it.', 'Brain.exe has \nstopped \nworking! \nEat quickly!']
  },
  popup20: {
    x: 60,
    y: 100,
    frames: [27],
    fps: 1,
    text: ['The relocation \nof the walrus \nresulted in \ncritical pelvis \nshutdown', 'THIS IS \nA \nMUDHAPHUKKYN \nSTICKUP!']
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
    this.game.scale.setScreenSize(true);
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
    var _this = this;

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

    this._healthbox = this.add.sprite(3, 3, 'healthbox');
    this._healthbar = this.add.sprite(4, 4, 'healthbar');
    this._healthbar.width = 160;

    this._timeElapsed = 0;
    this._timeElapsedText = this.add.bitmapText(this.world.bounds.right - 3, 3, 'bmp1', '0:00', 16);
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

    this.input.onUp.add(function () {
      if (_this.input.activePointer.x < 480 * 0.4) {
        moveBasket.call(_this, -1);
      } else if (_this.input.activePointer.x > 480 * 0.6) {
        moveBasket.call(_this, 1);
      }
    });
  },

  update: function update() {
    var _this2 = this;

    this._balls.forEachAlive(function (ball) {
      return ball.y >= 290 && pop.call(_this2, ball);
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

},{"./popups":7,"./util":9}],4:[function(require,module,exports){
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
    var text = this.add.bitmapText(this.world.centerX, this.world.centerY, 'bmp1', 'Can it be all so simple?\nYou survived ' + (0, _util.prettyTime)(this._score) + ' minutes.', 16);
    text.x -= text.width / 2;
    text.y -= text.height / 2;
  }

};
exports.GameOver = GameOver;

},{"./util":9}],5:[function(require,module,exports){
'use strict';

var _boot = require('./boot');

var _preloader = require('./preloader');

var _menu = require('./menu');

var _game = require('./game');

var _gameover = require('./gameover');

var game = new Phaser.Game(480, 320, Phaser.AUTO, 'game');
game.state.add('boot', _boot.Boot);
game.state.add('preloader', _preloader.Preloader);
game.state.add('menu', _menu.Menu);
game.state.add('game', _game.Game);
game.state.add('gameover', _gameover.GameOver);
game.state.start('boot');

},{"./boot":2,"./game":3,"./gameover":4,"./menu":6,"./preloader":8}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var Menu = {

  create: function create() {
    var _this = this;

    this.add.sprite(0, 0, 'menu-cover');
    this.add.button(290, 270, 'menu-start', function () {
      return _this.game.state.start('game');
    });
    // this.add.button(370, 270, 'menu-sound', () => undefined);
  }

};
exports.Menu = Menu;

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.initPopups = initPopups;

var _ads = require('./ads');

function initPopups() {
  var _this = this;

  this._popups = this.add.group();

  this._popups.createMultiple(100, 'popups', 0, false);

  var i = this.rnd.between(0, _ads.NUM_ADS);
  this._popups.forEach(function (popup) {
    return makePopup.call(_this, popup, i++ % _ads.NUM_ADS);
  });

  this.time.events.add(Phaser.Timer.SECOND * 10, showPopup, this);
}

function makePopup(popup, i) {
  var ad = _ads.ads['popup' + i];
  var text = this.add.bitmapText(ad.x, ad.y, 'bmp1', ad.text[this.rnd.between(0, ad.text.length - 1)], 32);
  var button = this.add.button(2, 2, 'close1', function () {
    return popup.kill();
  });
  popup.addChild(text);
  popup.addChild(button);
  popup.animations.add('idle', ad.frames, ad.fps, true);
}

function showPopup() {
  var i = 0;
  var popup = undefined;
  do {
    popup = this._popups.getRandom();
  } while (popup.alive && i++ < 10);

  popup.reset(this.rnd.between(0, 100), this.rnd.between(40, 160));
  popup.animations.play('idle');
  popup.bringToTop();

  this.time.events.add(Phaser.Timer.SECOND * delay.call(this), showPopup, this);
}

function delay() {
  var elapsed = Math.min(this._timeElapsed, 120);
  return Phaser.Math.mapLinear(elapsed, 0, 120, 6, 0.1);
}

},{"./ads":1}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var Preloader = {

  preload: function preload() {
    this.load.image('basket', 'assets/basket.png');
    this.load.image('healthbox', 'assets/healthbox.png');
    this.load.image('healthbar', 'assets/healthbar.png');
    this.load.image('close1', 'assets/close1.png');
    this.load.spritesheet('spikes', 'assets/spikes.png', 15, 15);
    this.load.spritesheet('ball', 'assets/ball.png', 48, 48);
    this.load.spritesheet('popups', 'assets/popups.png', 360, 180);

    this.load.bitmapFont('bmp1', 'assets/fonts/bmp1.png', 'assets/fonts/bmp1.fnt');

    this.load.image('menu-cover', 'assets/covers/menu.png');
    this.load.image('menu-start', 'assets/covers/start.png');
    this.load.spritesheet('menu-sound', 'assets/covers/sound.png', 86, 37);
  },

  create: function create() {
    this.game.state.start('menu');
  }

};
exports.Preloader = Preloader;

},{}],9:[function(require,module,exports){
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