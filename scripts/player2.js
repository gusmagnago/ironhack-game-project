const image2Up = new Image2();
imageUp.src = `/images/user-yellow-up.png`;
const image2Right = new Image2();
imageRight.src = `/images/user-yellow-right.png`;
const image2Down = new Image2();
imageDown.src = `/images/user-yellow-down.png`;
const image2Left = new Image2();
imageLeft.src = `/images/user-yellow-left.png`;

class Player2 {
  constructor(game) {
    this.canvas = game.canvas;
    this.image2 = new Image2();
    this.directionOfThePlayer2 = 'down';
    this.context = game.context;
    this.x = 6
    this.y = 0
    this.gridSize = 10
    this.path = []

    this.images = {
      up: image2Up,
      right: image2Right,
      down: image2Down,
      left: image2Left
    };

  }
  drawPlayer2() {
    const width = 45;
    const height = 45;

    this.drawPath2()
    this.context.save();
    const directionOfThePlayer2 = this.directionOfThePlayer2;
    const image = this.images[directionOfThePlayer2];
    this.context.drawImage(image, this.x * this.gridSize, this.y * this.gridSize, width, height);
    this.context.restore();
  }

  drawPath2() {
    this.path.map(pos => {
      this.context.save()
      this.context.fillStyle = '#FFFD6A';
      this.context.shadowColor = '#FFFB00';
      this.context.shadowBlur = 10;
      this.context.fillRect(pos.x * this.gridSize + 15, pos.y * this.gridSize + 45, 10, 10);
      this.context.restore()
    })

  }
  moveUp() {
    this.directionOfThePlayer2 = 'up';
  }
  moveDown() {
    this.directionOfThePlayer2 = 'down';
  }
  moveRight() {
    this.directionOfThePlayer2 = 'right';
  }
  moveLeft() {
    this.directionOfThePlayer2 = 'left';
  }
}
