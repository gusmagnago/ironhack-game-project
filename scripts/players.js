
class Players {
  constructor(game, y, pathColor, shadowColor,initialDirection, imageColor) {
    this.canvas = game.canvas;
    this.imageColor = imageColor
    this.imageUp = new Image();
    this.imageUp.src = `/images/user-${this.imageColor}-up.png`;
    this.imageRight = new Image();
    this.imageRight.src = `/images/user-${this.imageColor}-right.png`;
    this.imageDown = new Image();
    this.imageDown.src = `/images/user-${this.imageColor}-down.png`;
    this.imageLeft = new Image();
    this.imageLeft.src = `/images/user-${this.imageColor}-left.png`;

    this.direction = initialDirection;
    this.context = game.context;
    this.x = 36
    this.y = y
    this.gridSize = 10
    this.path = []
    this.pathColor = pathColor
    this.shadowColor = shadowColor

    this.images = {
      up: this.imageUp,
      right: this.imageRight,
      down: this.imageDown,
      left: this.imageLeft
    };
  }

  drawPlayers() {
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
      this.context.shadowColor = this.shadowColor;
      this.context.shadowBlur = 10;
      this.context.fillRect(pos.x * this.gridSize + 17, pos.y * this.gridSize + 18, 10, 10);
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