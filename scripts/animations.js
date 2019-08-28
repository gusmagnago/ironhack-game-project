class Animations {
  constructor (game) {
    this.canvas = game.canvas;
    this.context = game.context;
    this.alert = alert;

    this.alertImage = new Image ();
    this.alertImage.src = `/images/alert-img.png`;
  }

  drawAlert () {
    const width = 400;
    const height = 130;
    const positionX = 180;
    const positionY = 300;
    const alertImage = this.alertImage;
    this.context.drawImage(alertImage, positionX, positionY, width, height);
  }
}