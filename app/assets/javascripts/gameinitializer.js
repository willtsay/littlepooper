(function () {
  const SAFE_ZONE_WIDTH=1200;
  const SAFE_ZONE_HEIGHT=900;
  var game = new Phaser.Game(SAFE_ZONE_WIDTH, SAFE_ZONE_HEIGHT, Phaser.AUTO, 'game_div');

  SHOWFLAPPYOPTIONS = false

  // game.stage.fullScreenScaleMode = Phaser.StageScaleMode.SHOW_ALL;
  // game.stage.scale.setShowAll();
  // game.stage.scale.pageAlignHorizontally = true;
  // game.stage.scale.pageAlignVeritcally = true;
  // game.stage.scale.refresh();
  game.state.add('Boot', Scene.Boot)
  game.state.add('Preloader', Scene.Preloader)
  game.state.add('HomePage', Scene.HomePage);
  game.state.add('BugGame', Scene.BugGame)
  game.state.add('FlappyDragon', Scene.FlappyDragon);
  game.state.add('FlappyHighScores', Scene.FlappyHighScores)
  game.state.add('Egg', Scene.Egg)
  game.state.add('CloudJump', Scene.CloudJump)
  game.state.start('Boot'); // Go to Boot scene (start the game)
})();


