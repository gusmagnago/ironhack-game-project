class Animations {
  constructor(game) {
    this.canvas = game.canvas;
    this.context = game.context;
    //  GAME OVER IMAGES
    this.alertImage = new Image();
    this.alertImage.src = `/images/alert-img.png`;

    this.pressToStartImage = new Image();
    this.pressToStartImage.src = `/images/pressStart.png`

    // COLLISION IMAGE AKA EXPLOSION
    this.collisionImage = new Image();
    this.collisionImage.src = `/images/explosion.png`
  

  }

  drawAlert() {
    const width = 400;
    const height = 180;
    const positionX = 180;
    const positionY = 300;
    const alertImage = this.alertImage;
    this.context.drawImage(alertImage, positionX, positionY, width, height);
  }

  drawPressStart() {
    const width = 410;
    const height = 40;
    const positionX = 180;
    const positionY = 450;
    const pressToStartImage = this.pressToStartImage;
    this.context.drawImage(pressToStartImage, positionX, positionY, width, height);
  }

  /* drawCollision() {

    console.log("Draw collision called")
    this.game.explision
    
    // const scale = 1;
    // const width = 129;
    // const height = 129;
    // const scaledWidth = scale * width;
    // const scaledHeight = scale * height;
    // const cycleLoop = [0, 1, 2, 3];
    // let currentLoopIndex = 0;
    // let frameCount = 0;
    // let currentDirection = 0;

    // function drawFrame(frameX, frameY, canvasX, canvasY) {
    //   this.context.drawImage(collisionImage,
    //     frameX * width, frameY * height, width, height,
    //     canvasX, canvasY, scaledWidth, scaledHeight);
    // }

    // explosion => {
    //   frameCount++;
    //   if (frameCount < 2) {
    //     window.requestAnimationFrame(explosion);
    //     return;
    //   }
    //   frameCount = 0;
    //   this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    //   drawFrame(cycleLoop[currentLoopIndex], currentDirection, 0, 0);
    //   currentLoopIndex++;
    //   if (currentLoopIndex >= cycleLoop.length) {
    //     currentLoopIndex = 0;
    //     currentDirection++;
    //   }
    //   if (currentDirection >= 4) {
    //     currentDirection = 0;
    //   }
    //   window.requestAnimationFrame(explosion);
    // }
    // window.requestAnimationFrame(explosion);
  } */
}