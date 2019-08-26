class Game {
  constructor (canvas) {
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    this.board = new Board (this);
    this.player1 = new Player1 (this);
    this.player2 = new Player2 (this);

  }
  clear () {
  const width = this.canvas.width;
  const height = this.canvas.height;
    this.context.clearRect(0, 0, width, height);
  }

  
  draw() {
    this.clear();
    this.board.drawBoard ();
    this.player1.drawPlayer1();
    this.player2.drawPlayer2();
  }
}

