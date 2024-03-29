class Control {
  constructor(callbacks1, callbacks2, callbackPressEnter) {
    this.callbacks1 = callbacks1;
    this.callbacks2 = callbacks2;
    this.callbackPressEnter = callbackPressEnter;

  }

  setKeyBindings() {
    window.addEventListener('keydown', event => {
      const key = event.keyCode;
      if ([13, 38, 39, 37, 40, 65, 68, 83, 87].includes(key)) {
        event.preventDefault();
        switch (key) {
          case 38:
            this.callbacks1.up();
            break;
          case 39:
            this.callbacks1.right();
            break;
          case 37:
            this.callbacks1.left();
            break;
          case 40:
            this.callbacks1.down();
            break;
          case 87:
            this.callbacks2.up();
            break;
          case 68:
            this.callbacks2.right();
            break;
          case 65:
            this.callbacks2.left();
            break;
          case 83:
            this.callbacks2.down();
            break;
          case 13:
            this.callbackPressEnter.enter();
            break;
        }
      }
    });
  }

}
