class Player1 {
  constructor(game) {
    this.canvas = game.canvas;
    this.image = new Image;
    this.image.src = '/images/user001-up.png';
    this.context = game.context;
    this.x = 369
    this.y = 700
    this.width = 20
    this.height = 55
  }
  drawPlayer1() {

        this.context.drawImage(this.image, this.x, this.y, this.width, this.height)

    }
  }

  class Player2 {
    constructor(game) {
      this.canvas = game.canvas;
      this.image2 = new Image;
      this.image2.src = '/images/user002-down.png';
      this.context = game.context;
      this.x = 369
      this.y = 65
      this.width = 25
      this.height = 55
    }
    drawPlayer2() {
  
          this.context.drawImage(this.image2, this.x, this.y, this.width, this.height)
  
      }
    } 