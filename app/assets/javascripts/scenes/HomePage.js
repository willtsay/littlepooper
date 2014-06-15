Scene.HomePage = function(game) {

};

Scene.HomePage.prototype = {

	create: function() {
		this.clouds = this.game.add.tileSprite(0, 0, 640, 138, 'clouds');
		this.land = this.game.add.tileSprite(0, 138, 640, 1020, 'land')

    this.ground = this.game.add.sprite(50,700, 'green_dragon')
    this.game.physics.enable(this.ground, Phaser.Physics.arcade)
    // this.ground.scale.x = this.game.world.width
    
    this.green_dragon = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY+200, 'green_dragon')
    this.green_dragon.anchor.set(0.5)
    this.green_dragon.animations.add('rest', [0, 1, 2, 3, 4, 5, 6, 7], 6, true)
    this.green_dragon.animations.add('walk', [16, 17, 18, 19, 20, 21], 6, true)
    this.game.physics.enable(this.green_dragon, Phaser.Physics.arcade)
    this.green_dragon.body.collideWorldBounds = true
    this.restMotion()


    this.food_button = this.game.add.sprite(0,0, "food_button")
    this.food_button.inputEnabled = true;
    this.food_button.events.onInputDown.add(this.dropFood.bind(this), this)
    this.food = this.game.add.sprite(50,50,'green_dragon')
    

  },
  update: function() {

    // this.games.physics.arcade.overlap(this.green_dragon, this.food, this.eatFood, null, this)
    this.game.physics.arcade.collide(this.ground, this.food, this.hello, null, this)

    this.clouds.tilePosition.x += 1;
  },
  hello: function(){
    this.food.body.gravity.y = 0
    this.food.body.velocity.y = 0
  },
  restMotion: function() {
    this.green_dragon.animations.play('rest')
    setTimeout(this.walkAround.bind(this), 2000)
  },
  walkAround: function() {
    var amountMoved = Math.floor(Math.random()*(200))
    if (amountMoved%2==0)
      this.walkLeft(amountMoved)
    else
      this.walkRight(amountMoved)
  },
  walkLeft: function(amountMoved) {
    if (this.green_dragon.scale.x < 0) {
      this.green_dragon.scale.x *= -1
    }
    this.green_dragon.animations.play('walk')
    var leftWalk = this.game.add.tween(this.green_dragon)
    leftWalk.to({x: this.green_dragon.position.x-amountMoved}, 2000)
    leftWalk.start()
    setTimeout(this.restMotion.bind(this), 2000)
  },
  walkRight: function(amountMoved) {
    if (this.green_dragon.scale.x > 0) {
      this.green_dragon.scale.x *= -1
    }
    this.green_dragon.animations.play('walk')
    var leftWalk = this.game.add.tween(this.green_dragon)
    leftWalk.to({x: this.green_dragon.position.x+amountMoved}, 2000)
    leftWalk.start()
    setTimeout(this.restMotion.bind(this), 2000)
  },
  dropFood: function(){
    this.game.physics.enable(this.food, Phaser.Physics.arcade)
    this.food.body.gravity.y = 800  
    //sample a sprite
    //
  }
};
