class Form {
    constructor() {
      this.button = createButton('PLAY!');
      this.title = createElement('h2');
    }

    hide(){
      this.button.hide();
      this.title.hide();
    }

    display(){
        this.title.html("Pong");
        this.title.position(displayWidth/2 - 250, displayHeight/4);
        this.button.position(displayWidth/2 - 250, displayHeight/3);
    
        this.button.mousePressed(()=>{
          this.title.hide();
          this.button.hide();
          gamestate = 2;
      });
    }
}
  