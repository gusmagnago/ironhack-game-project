class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');

    this.callbacks1 = {
      up: () => this.player1.moveUp('up'),
      right: () => this.player1.moveRight('right'),
      down: () => this.player1.moveDown('down'),
      left: () => this.player1.moveLeft('left')
    };
    this.callbacks2 = {
      up: () => this.player2.moveUp('up'),
      right: () => this.player2.moveRight('right'),
      down: () => this.player2.moveDown('down'),
      left: () => this.player2.moveLeft('left')
    };

    this.callbackPressEnter = {
      enter: () => this.gameReload()
    }

    this.control = new Control(this.callbacks1, this.callbacks2, this.callbackPressEnter);
    this.control.setKeyBindings();

    this.player1 = new Players(
      this,
      68,
      '#59FAFC',
      '#33FCFF',
      "up",
      'blue');
    this.player2 = new Players(
      this,
      9,
      '#FCFB64',
      '#FFFC00',
      "down",
      'yellow');
    this.board = new Board(this);
    this.animations = new Animations(this);
    this.SPEED = 200;
    this.gameStatus = "game"
    this.timer = 0
  }

  clear() {
    const width = this.canvas.width;
    const height = this.canvas.height;
    this.context.clearRect(0, 0, width, height);
  }

  draw() {
    this.clear();
    this.board.drawBoard();
    this.player1.drawPlayers();
    this.player2.drawPlayers();
  }

  checkCollisions() {
    for (let pos of this.player2.path) {
      if (pos.x === this.player1.x && pos.y === this.player1.y) {
        this.gameStatus = "game-over"
      }
      for (let pos of this.player1.path) {
        if (pos.x === this.player1.x && pos.y === this.player1.y) {
          this.gameStatus = "game-over"
        }
      }
    }
    for (let pos of this.player1.path) {
      if (pos.x === this.player2.x && pos.y === this.player2.y) {
        this.gameStatus = "game-over"
      }
    }
    for (let pos of this.player2.path) {
      if (pos.x === this.player2.x && pos.y === this.player2.y) {
        this.gameStatus = "game-over"
      }
    }
  }


  movingPlayer1() {
    const player1 = this.player1;
    const direction = player1.direction;

    const y = this.player1.y
    const x = this.player1.x
    switch (direction) {
      case 'up':
        if (y > 5) {
          this.player1.y -= 1;
          this.player1.path.push({
            y,
            x
          })
        } else {
          this.gameStatus = "game-over";
        }
        break;
      case 'down':
        if (y <= 72) {
          this.player1.y += 1;
          this.player1.path.push({
            y,
            x
          })
        } else {
          this.gameStatus = "game-over";
        }
        break;
      case 'right':
        if (x < 66) {
          this.player1.x += 1;
          this.player1.path.push({
            y,
            x
          })
        } else {
          this.gameStatus = "game-over";
        }
        break;
      case 'left':
        if (x > 5) {
          this.player1.x -= 1;
          this.player1.path.push({
            y,
            x
          })
        } else {
          this.gameStatus = "game-over";
        }
        break;
    }
  }

  movingPlayer2() {
    const player2 = this.player2;
    const direction = player2.direction;

    const y = this.player2.y
    const x = this.player2.x
    switch (direction) {
      case 'up':
        if (y > 5) {
          this.player2.y -= 1;
          this.player2.path.push({
            y,
            x
          })
        } else {
          this.gameStatus = "game-over"
        }
        break;
      case 'down':
        if (y <= 72) {
          this.player2.y += 1;
          this.player2.path.push({
            y,
            x
          })
        } else {
          this.gameStatus = "game-over"
        }
        break;
      case 'right':
        if (x < 66) {
          this.player2.x += 1;
          this.player2.path.push({
            y,
            x
          })
        } else {
          this.gameStatus = "game-over"
        }
        break;
      case 'left':
        if (x > 5) {
          this.player2.x -= 1;
          this.player2.path.push({
            y,
            x
          })
        } else {
          this.gameStatus = "game-over"
        }
        break;
    }
  }

  gameReload() {
    this.gameStatus = "game"
    this.player1 = new Players(
      this,
      68,
      '#59FAFC',
      '#33FCFF',
      "up",
      'blue');
    this.player2 = new Players(
      this,
      9,
      '#FCFB64',
      '#FFFC00',
      "down",
      'yellow');
    this.timer = 0;

  }

  gameOver() {
    this.animations.drawAlert();
    this.animations.drawPressStart();
  }

  loop(timestamp) {
    if (this.gameStatus === "game") {
      if (this.timer < timestamp - this.SPEED) {
        this.draw();
        this.movingPlayer1();
        this.movingPlayer2();
        this.checkCollisions();
        this.timer = timestamp;
      }
    } else if (this.gameStatus === "game-over") {
      this.gameOver()
    }
    window.requestAnimationFrame((timestamp) => this.loop(timestamp));
    //window.setTimeout(() => this.loop(), this.speed);
  }

}