class Control {
  constructor(callbacks) {
    this.callbacks = callbacks;
    this.tr
    

  }

  setKeyBindings() {
    window.addEventListener('keydown', event => {
      const key = event.keyCode;
      if ([38, 39, 37, 40].includes(key)) {
        event.preventDefault();
        switch (key) {
          case 38:
            this.callbacks.up();
            break;
          case 39:
            this.callbacks.right();
            //draw();
            break;
          case 37:
            this.callbacks.left();
            //draw();
            break;
          case 40:
            this.callbacks.down();
            //draw();
            break;
          }
        }
    });
  }
  
}
