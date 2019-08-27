class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    this.callbacks = {
      up: () => this.player1.moveUp('up'),
      right: () => this.player1.moveRight('right'),
      down: () => this.player1.moveDown('down'),
      left: () => this.player1.moveLeft('left')
    };
    this.control = new Control(this.callbacks);
    this.control.setKeyBindings();

    this.player1 = new Player1(
      this,
      13,
      '#59FAFC');
    this.player2 = new Player1(this, 1, '#59FAFC');
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
    this.player1.drawPlayer1();
    this.player2.drawPlayer1();
  }

  runLogic() {
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
        console.log("DEBUG x value", x)
        if (x < 68) {
          this.player1.x += 1;
          this.player1.path.push({
            y,
            x
          })
        }
        break;
      case 'left':
        if (x > 4 ) {
          this.player1.x -= 1;
          this.player1.path.push({
            y,
            x
          })
        }
        break;
    }
  }

  loop() {
    this.runLogic();
    this.draw();
    // window.requestAnimationFrame(() => this.loop());
    window.setTimeout(() => this.loop(), 200);
  }
}