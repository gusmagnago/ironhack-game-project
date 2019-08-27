const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

const game = new Game(canvas);

window.addEventListener('load', function () {
  // document.getElementById("start-button").onclick = function () {
    //startGame()
    game.loop();
  // };
});

function startGame() {
  game.draw();
  window.requestAnimationFrame(startGame)
}
