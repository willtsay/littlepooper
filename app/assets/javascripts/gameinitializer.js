(function () {
  var game = new Phaser.Game(480, 640, Phaser.AUTO, 'game_div'); 
  game.state.add('Preloader', Scene.Preloader)
  game.state.add('HomePage', Scene.HomePage); 
  game.state.add('Stomper', Scene.Stomper); 
  game.state.add('Egg', Scene.Egg) 
  game.state.start('Preloader'); // Go to Boot scene (start the game)
})();
