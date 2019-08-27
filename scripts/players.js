const imageUp = new Image();
imageUp.src = `/images/user-blue-up.png`;
const imageRight = new Image();
imageRight.src = `/images/user-blue-right.png`;
const imageDown = new Image();
imageDown.src = `/images/user-blue-down.png`;
const imageLeft = new Image();
imageLeft.src = `/images/user-blue-left.png`;

class Player1 {
  constructor(game) {
    this.canvas = game.canvas;
    this.image = new Image();
    this.direction = 'up';
    this.context = game.context;
    this.x = 6
    this.y = 13
    this.gridSize = 60
    this.path = []

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

    this.context.save();
    const direction = this.direction;
    const image = this.images[direction];
    this.context.drawImage(image, this.x * this.gridSize, this.y * this.gridSize, width, height);
    this.drawPath()
    this.context.restore();
    console.log(this.path)

  }

  drawPath() {
    this.path.map(pos => {
      this.context.save()
      this.context.fillStyle = '#33FCFF'
      this.context.fillRect(pos.x * this.gridSize+15,pos.y  * this.gridSize + 45,10,10)
      this.context.restore()
    })
  
  }

  moveUp() {
    this.direction = 'up';
    console.log("button pressed", this.direction, this.x)
  }
  moveDown() {
    this.direction = 'down';
    console.log("button pressed", this.direction)
  }
  moveRight() {
    this.direction = 'right';
    console.log("button pressed", this.direction)
  }
  moveLeft() {
    this.direction = 'left';
    console.log("button pressed", this.direction)
  }

}






/*   class Player2 {
    constructor(game) {
      this.canvas = game.canvas;
      this.image2 = new Image;
      this.directionOfThePlayer2 = 'down';
      this.image2.src = `/images/user002-${ this.direction }.png`;
      this.context = game.context;
      this.x = 369
      this.y = 65
      this.width = 25
      this.height = 55
    }
    drawPlayer2() {
  
          this.context.drawImage(this.image2, this.x, this.y, this.width, this.height)
  
      }
      moveUp() {
        this.x -= 60;
        this.directionOfThePlayer2  = 'up';
      }
      moveDown() {
        this.x += 60;
        this.directionOfThePlayer2  = 'down';
      }
      moveRight() {
        this.y += 60;
        this.directionOfThePlayer2  = 'right';
      }
      moveLeft() {
        this.y -= 60;
        this.directionOfThePlayer2  = 'left';
      }
    }   */