  class Board {
    constructor(game) {
      this.canvas = game.canvas
      this.context = game.context
    }

    drawBoard() {
      this.context.save()
      this.context.translate(50, 50);
      this.context.strokeStyle = '#000000';
      this.context.lineWidth = 2;
      this.context.shadowColor = '#0000CD';
      this.context.shadowBlur = 10;


      for (var i = 0; i < 15; i++) {
        this.context.beginPath();
        this.context.moveTo(0, i * 60);
        this.context.lineTo(660, i * 60);
        this.context.stroke();

      }

      for (var i = 0; i < 14; i++) {
        this.context.beginPath();
        this.context.moveTo(i * 60, 0);
        this.context.lineTo(i * 60, 720);
        this.context.stroke();
      }
      this.context.restore()
    }

  }