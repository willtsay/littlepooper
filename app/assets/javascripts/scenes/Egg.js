Scene.Egg = function(game) {
  this.counter = 0
};

Scene.Egg.prototype = {
  preload: function(){
    this.game.stage.backgroundColor = '#dddddd'
    this.game.load.spritesheet('egg', 'images/egg_break.png', 118, 130, 6)
    this.game.load.spritesheet('green_dragon', 'images/green_dragon.png', 110, 110, 32)
    this.game.load.image('bird', '/images/bird.png')
    this.game.load.image('pipe', '/images/pipe.png')
  },
  create: function() {
    this.egg = this.game.add.sprite(181,320,'egg')
    this.egg.inputEnabled=true
    this.egg.input.useHandCursor=true
    this.egg.events.onInputDown.add(this.eggbreak.bind(this))

  },
  update: function() {
    if (this.green_dragon){
      setTimeout(this.nextStage.bind(this), 2500)
    }
    else{}
  },
  eggbreak: function(){
    if (this.counter < 6) {
      this.egg.animations.add('break',[this.counter, this.counter+1],6,false)
      if (this.game.input.activePointer.isDown) {
          this.egg.animations.play('break')
          this.counter++
      }
    }
    else {
      this.egg.kill()
      this.green_dragon = this.game.add.sprite(this.egg.position.x, this.egg.position.y, 'green_dragon')
      this.green_dragon.animations.add('rest', [0, 1, 2, 3, 4, 5, 6, 7], 6, true)
      this.green_dragon.animations.play('rest') 
      // setTimeout(this.game.state.start('Home'), 3000)
    }
  },
  nextStage: function(){
    this.game.state.start('Stomper')
  }

};