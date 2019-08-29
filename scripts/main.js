const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

const game = new Game(canvas);
const image = new Image();
image.src = '/images/startpage.png';

const instructions = new Instructions(canvas, context);
let enterPressed = false

setInterval(function () {
  context.font = '45px Passion One';
  context.fillText('HIT ´SPACE´ KEY TO PLAY THE GAME', 80, 750);
  context.font = '20px Passion One';
  context.fillText('OR ´ENTER´ TO READ THE INSTRUCTIONS', 220, 780);
}, 200);

game.gameStatus = 'menu'
window.addEventListener('load', function () {
  setInterval(function () {
    context.clearRect(0, 0, 750, 800)
    if (gameStatus = 'menu') {
      context.fillStyle = 'red';
      context.font = '100px Passion One';
      context.fillText('TRONY METRONY', 75, 425);
      context.drawImage(image, 0, 110, 750, 700);
      if (enterPressed) {
        instructions.drawInstructions();
      }
    }
  }, 500);
})


window.addEventListener('keydown', event => {
  const key = event.keyCode;
  if ([13, 27, 32].includes(key)) {
    event.preventDefault();
    switch (key) {
      case 32:
        startGame()
        game.gameReload()
        game.loop();
        break;
      case 13:
        if (!enterPressed) enterPressed= !enterPressed
        else enterPressed= !enterPressed
        console.log(enterPressed)
        break;
      case 27:
        startGame()
        game.gameReload()
        game.loop();
        break;
    }
  }
})

function startGame() {
  game.draw();
  window.requestAnimationFrame(startGame)
}