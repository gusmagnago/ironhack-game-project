class Instructions {
  constructor(canvas, context) {
    this.canvas = canvas
    this.context = context
    this.imageInstructions = new Image()
    this.imageInstructions.src = '/images/transparente.png'

  }

  drawInstructions() {
    const width = 360;
    const height = 360;
    const positionX = 200;
    const positionY = 200;
    const imageInstructions = this.imageInstructions;
    this.context.drawImage(imageInstructions, positionX, positionY, width, height);
  }
}