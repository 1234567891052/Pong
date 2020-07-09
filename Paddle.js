function Paddle(x, y, width, height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.display = function(colour){
        fill(colour);
        noStroke();
        rectMode(CENTER);
        rect(this.x, this.y, this.width, this.height);
    }

    this.follow_mouse = function(){
        this.y = mouseY;
    }

    this.follow_ball = function(){
        this.y = ball.y;
    }

    this.IsTouching = function(object){
        if(this.x - object.x < object.width/2 + this.width/2
        && object.x - this.x < object.width/2 + this.width/2
        && this.y - object.y < object.height/2 + this.height/2
        && object.y - this.y < object.height/2 + this.height/2){
            return true;
        }
        else{
            return false;
        }
    }

    this.stay = function(x, y){
        this.x = x;
        this.y = y;
    }
}