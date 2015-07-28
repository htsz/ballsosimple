'use strict';

import { HEALTH, BEAT_PER_SECOND, BALL_SPAWN_INTERVAL } from './config';
import { initPopups } from './popups';
import { prettyTime, drawText } from './util';

const positions = [48, 144, 240, 336, 432];

export const Game = {

  preload: function() {
    this.stage.backgroundColor = '#d6cf9d';
  },

  create: function() {
    this.physics.startSystem(Phaser.Physics.ARCADE);

    this._soundGameplay = this.add.audio('audio-gameplay', 1, true);
    this._soundGameplay.play('', 0, 1, true);

    this._spikes = this.add.group();
    this._spikes.createMultiple(32, 'spikes', 0, true);
    this._spikes.callAll(
      'animations.add', 'animations', 'shine',
      this.math.numberArrayStep(1, 50, 0).concat(0), 15, true);

    let i = 0;
    this._spikes.forEach(
      spike => {
        spike.anchor.setTo(0, 1);
        spike.x = 15 * i++;
        spike.y = 320;
        spike.animations.play('shine');
        spike.animations.next(i);
      });

    this._balls = this.add.group();
    this._balls.createMultiple(30, 'ball', 0, false);

    this._balls.callAll(
      'animations.add', 'animations', 'drop', [0, 1], BEAT_PER_SECOND, true);
    this._balls.callAll(
      'animations.add', 'animations', 'pop', [2, 3, 4], 30, true);
    this._balls.callAll(
      'animations.add', 'animations', 'save', [5, 6, 7], 30, true);

    spawnBall.call(this, this._balls);
    this.time.events.loop(
      BALL_SPAWN_INTERVAL, spawnBall.bind(this, this._balls));

    this._health = HEALTH;
    this._healthbox = this.add.sprite(3, 3, 'border');
    this._healthbar = this.add.sprite(4, 4, 'healthbar');
    this._healthbar.width = HEALTH;

    this._timeElapsed = 0;
    this._timeElapsedText = this.add.bitmapText(
      this.world.bounds.right - 3, 3, 'bmp1', '0:00', 16);
    this._timeElapsedText.x -= this._timeElapsedText.width;
    this.time.events.loop(
      Phaser.Timer.SECOND, addTime, this);

    this._basket = this.add.sprite(
      240, this.world.bounds.bottom - 20, 'basket');
    this._basket.anchor.set(0.5, 1);
    this._basket.currentPos = 2;
    this.physics.enable(this._basket, Phaser.Physics.ARCADE);
    this._basket.body.allowGravity = false;
    this._basket.body.immovable = true;
    this._basket.body.setSize(72, 13, 0, 0);

    const howto = drawText.call(this,
      'Collect balls.  It\'s that simple.', 32);
    this.time.events.add(
      Phaser.Timer.SECOND * 4,
      () => howto.destroy());

    initPopups.call(this);

    const keys = this.input.keyboard.createCursorKeys();
    keys.right.onUp.add(moveBasket.bind(this, 1));
    keys.left.onUp.add(moveBasket.bind(this, -1));

    this.input.onUp.add(() => {
      if (this.input.activePointer.x < 480 * 0.4 &&
          this.input.activePointer.y > 320 * 0.7) {
        moveBasket.call(this, -1);
      } else if (this.input.activePointer.x > 480 * 0.6 &&
                 this.input.activePointer.y > 320 * 0.7) {
        moveBasket.call(this, 1);
      }
    });
  },

  update: function() {
    this._balls.forEachAlive(ball => checkBall.call(this, ball));
    this.physics.arcade.collide(this._basket, this._balls, save, null, this);
  },

  render: function() {
    //this.balls.forEachAlive(ball => this.game.debug.body(ball), this);
    //this.game.debug.body(this.basket);
  }

};

function moveBasket(indexOffset) {
  this._basket.currentPos = Phaser.Math.clamp(
    this._basket.currentPos + indexOffset, 0, 4);
  this._basket.x = positions[this._basket.currentPos];
}

function spawnBall(group) {
  const ball = group.getFirstDead();
  if (!ball) {
    return;
  }

  ball.anchor.set(0.5);
  ball.reset(positions[this.rnd.integerInRange(0, 4)], 0 - 24);
  ball.animations.play('drop', null, true);

  this.physics.enable(ball, Phaser.Physics.ARCADE);
  ball.body.velocity.y = 30;
}

function save(basket, ball) {
  ball.animations.play('save', null, false, true);
}

function checkBall(ball) {
  if (ball.y < 290) {
    return;
  }

  if (ball.animations.currentAnim.name === 'pop') {
    return;
  }

  this._health -= 16;
  ball.animations.play('pop', null, false, true);

  const tween = this.add.tween(this._healthbar).to(
    {width: this._health}, 300, Phaser.Easing.Quadratic.InOut, true, 0);
  tween.onComplete.add(endTween, this);
}

function endTween() {
  if (this._health <= 0) {
    if (this._soundGameplay) {
      this._soundGameplay.destroy();
    }

    this.state.start('gameover', true, false, this._timeElapsed);
  }
}

function addTime() {
  this._timeElapsed += 1;
  this._timeElapsedText.text = prettyTime(this._timeElapsed);
}
