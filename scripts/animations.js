class Animations {
  constructor (game) {
    this.canvas = game.canvas;
    this.context = game.context;
  //  GAME OVER IMAGES
    this.alertImage = new Image ();
    this.alertImage.src = `/images/alert-img.png`;
  
    this.pressToStartImage = new Image ();
    this.pressToStartImage.src = `/images/pressStart.png`
  }

  drawAlert () {
    const width = 400;
    const height = 180;
    const positionX = 180;
    const positionY = 300;
    const alertImage = this.alertImage;
    this.context.drawImage(alertImage, positionX, positionY, width, height);
  }

  drawPressStart () {
    const width = 410;
    const height = 40;
    const positionX = 180;
    const positionY = 450;
    const pressToStartImage = this.pressToStartImage;
    this.context.drawImage(pressToStartImage, positionX, positionY, width, height);
  }
}
