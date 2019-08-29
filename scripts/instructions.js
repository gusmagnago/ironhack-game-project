class Instructions {
  constructor(canvas, context) {
    this.canvas = canvas
    this.context = context
    this.imageInstructions = new Image()
    this.imageInstructions.src = '/images/instructions.png'

  }

  drawInstructions() {
    const width = 500;
    const height = 500;
    const positionX = 130;
    const positionY = 150;
    const imageInstructions = this.imageInstructions;
    this.context.drawImage(imageInstructions, positionX, positionY, width, height);
  }
}