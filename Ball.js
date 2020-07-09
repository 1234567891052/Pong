function Ball(x, y, width, height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.velocityX = 5;
    this.velocityY = 3;

    this.display = function(){
        fill(255);
        noStroke();
        ellipseMode(CENTER);
        ellipse(this.x, this.y, this.width, this.height);
    }

    this.move = function(){
        this.y -= this.velocityY;
        this.x += this.velocityX;
    }

    this.bounce_Off = function(object){
        if (this.x - object.x < object.width/2 + this.width/2
        && object.x - this.x < object.width/2 + this.width/2) {
            this.velocityX *= (-1);
        }
        if (this.y - object.y < object.height/2 + this.height/2
        && object.y - object.y < object.height/2 + this.height/2) {
            this.velocityY *= (-1);
            this.velocityX *= (-1);
        }
    }

    this.bounce_Off_bar = function(object){
        if (this.x - object.x < object.width/2 + this.width/2
            && object.x - this.x < object.width/2 + this.width/2) {
                this.velocityX *= (-1);
                this.velocityY *= (-1);
        }
        if (this.y - object.y < object.height/2 + this.height/2
        && object.y - object.y < object.height/2 + this.height/2) {
            this.velocityY *= (-1);
        }
    }

    this.reset = function(){
        this.x = 400;
        this.y = 200;

        comp_score += 1;
    }

    this.stay = function(){
        this.x = 400;
        this.y = 400;
        this.velocityX = 0;
        this.velocityY = 0;
    }
}