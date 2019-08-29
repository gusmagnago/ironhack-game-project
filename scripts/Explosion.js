class Explosion {
  constructor(game){
    this.collisionImage = new Image();
    this.collisionImage.src = 'https://i.ibb.co/8BDg2Hw/explosion.png';
    this.collisionImage.onload = ()=> {
     this.drawCollision();
    };
    this.canvas = game.canvas
    this.context = this.canvas.getContext('2d');

    this.scale = 1;
    this.width = 129;
    this.height = 129;
    this.scaledWidth = scale * width;
    this.scaledHeight = scale * height;

    this.cycleLoop = [0, 1, 2, 3];
    this.currentLoopIndex = 0;
    this.currentDirection = 0;
  }

  drawFrame(frameX, frameY, canvasX, canvasY) {
    this.context.drawImage(this.collisionImage,
                  frameX * this.width, frameY * this.height, this.width, this.height,
                  canvasX, canvasY, this.scaledWidth, this.scaledHeight);
  }
  
  drawFrame(frameX, frameY, canvasX, canvasY) {
    this.context.drawImage(this.collisionImage,
                  frameX * this.width, frameY * this.height, this.width, this.height,
                  canvasX, canvasY, this.scaledWidth, this.scaledHeight);
  }

  explosion() {
    let frameCount = 0
    frameCount ++;

    if (frameCount < 2) {
      window.requestAnimationFrame(this.explosion());
      return;
    }
    frameCount = 0;
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawFrame(this.cycleLoop[this.currentLoopIndex], this.currentDirection, 0, 0);
    this.currentLoopIndex++;
    if (this.currentLoopIndex >= this.cycleLoop.length) {
      this.currentLoopIndex = 0;
      this.currentDirection++;
    }
    if (this.currentDirection >= 4) {
      this.currentDirection = 0;
    }
    window.requestAnimationFrame(this.explosion);
  }

  drawCollision() {
    window.requestAnimationFrame(this.explosion);
  }

}







