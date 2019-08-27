const imageUp = new Image();
imageUp.src = `/images/user-blue-up.png`;
const imageRight = new Image();
imageRight.src = `/images/user-blue-right.png`;
const imageDown = new Image();
imageDown.src = `/images/user-blue-down.png`;
const imageLeft = new Image();
imageLeft.src = `/images/user-blue-left.png`;

class Player1 {
  constructor(game, y, pathColor) {
    this.canvas = game.canvas;
    this.image = new Image();
    this.direction = 'up';
    this.context = game.context;
    this.x = 6
    this.y = y
    this.gridSize = 10
    this.path = []
    this.pathColor = pathColor

    // this.vx = 1
    // this.vy = 1
    this.images = {
      up: imageUp,
      right: imageRight,
      down: imageDown,
      left: imageLeft
    };
  }

  drawPlayer1() {
    const width = 45;
    const height = 45;

    this.drawPath()
    this.context.save();
    const direction = this.direction;
    const image = this.images[direction];
    this.context.drawImage(image, this.x * this.gridSize, this.y * this.gridSize, width, height);
    this.context.restore();
  }

  drawPath() {
    this.path.map(pos => {
      this.context.save()
      this.context.fillStyle = this.pathColor;
      this.context.shadowColor = '#33FCFF';
      this.context.shadowBlur = 10;
      this.context.fillRect(pos.x * this.gridSize + 10, pos.y * this.gridSize + 40, 10, 10);
      this.context.restore()
    })

  }

  moveUp() {
    this.direction = 'up';

  }
  moveDown() {
    this.direction = 'down';

  }
  moveRight() {
    this.direction = 'right';

  }
  moveLeft() {
    this.direction = 'left';

  }

}