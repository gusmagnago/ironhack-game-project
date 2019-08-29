const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

const game = new Game(canvas);
const image = new Image ();
image.src = '/images/FWHIFUU.png';

//this.animations = new Animations(this);

window.addEventListener('load', function () {
  game.gameStatus = "menu"
  if(gameStatus = "menu") {
    context.drawImage(image, 0, 0, 750, 750)    
    
  }
  document.getElementById("start-button").onclick = function () {
    startGame()
    game.loop();
  }
});

function startGame() {
  game.draw();
  window.requestAnimationFrame(startGame)
}
