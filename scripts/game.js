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

    this.control = new Control(this.callbacks1, this.callbacks2);
    this.control.setKeyBindings();

    this.player1 = new Players(
      this,
      71,
      '#59FAFC',
      '#33FCFF',
      "up");
    this.player2 = new Players(
      this,
      5,
      '#FCFB64',
      '#FFFC00',
      "down");
    this.board = new Board(this);
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

  movingPlayer1() {
    const player1 = this.player1;
    const direction = player1.direction;

    const y = this.player1.y
    const x = this.player1.x
    switch (direction) {
      case 'up':
        if (y > 2) {
          this.player1.y -= 1;
          this.player1.path.push({
            y,
            x
          })
        }
        break;
      case 'down':
        if (y <= 70) {
          this.player1.y += 1;
          this.player1.path.push({
            y,
            x
          })
        }
        break;
      case 'right':
        if (x < 68) {
          this.player1.x += 1;
          this.player1.path.push({
            y,
            x
          })
        }
        break;
      case 'left':
        if (x > 4) {
          this.player1.x -= 1;
          this.player1.path.push({
            y,
            x
          })
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
        if (y > 2) {
          this.player2.y -= 1;
          this.player2.path.push({
            y,
            x
          })
        }
        break;
      case 'down':
        if (y <= 70) {
          this.player2.y += 1;
          this.player2.path.push({
            y,
            x
          })
        }
        break;
      case 'right':
        if (x < 68) {
          this.player2.x += 1;
          this.player2.path.push({
            y,
            x
          })
        }
        break;
      case 'left':
        if (x > 4) {
          this.player2.x -= 1;
          this.player2.path.push({
            y,
            x
          })
        }
        break;
    }
  }


    loop() {
      this.draw();
      this.movingPlayer1();
      this.movingPlayer2();
      // window.requestAnimationFrame(() => this.loop());
      window.setTimeout(() => this.loop(), 200);
    }
  }