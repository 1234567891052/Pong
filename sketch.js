var player;
var computer;
var ball;
var top_boundary, bottom_boundary;
var player_score = 0;
var comp_score = 0;
var form;
var gamestate = 1;

function setup() {
  createCanvas(800,400);
  player = new Paddle(width - 10, height/2, 10, 100);
  computer = new Paddle(width - 790, height/2, 10, 100);

  ball = new Ball(width/2, height/2, 15, 15);

  top_boundary = new Boundary(width/2, height - 395, width, 10);
  bottom_boundary = new Boundary(width/2, height - 5, width, 10);

  form = new Form();
}

function draw() {

  if(gamestate === 1){
    form.display();
  }

  if(gamestate === 2){
    background(0);

    for(var x = 0; x < height; x += 10){
      fill(255);
      noStroke();
      rectMode(CENTER);
      rect(width/2, x, 2, 3);
    }

    player.display("blue");
    player.follow_mouse();
    if(player.IsTouching(ball)===true){
      ball.bounce_Off_bar(player);
      player_score += 1;
    }

    computer.display("red");
    computer.follow_ball();
    if(computer.IsTouching(ball)===true){
      ball.bounce_Off_bar(computer);
      comp_score += 1;
    }

    ball.display();
    ball.move();
    if(ball.x >= width){
      ball.reset();
    }

    top_boundary.display();
    if(top_boundary.IsTouching(ball)===true){
      ball.bounce_Off(top_boundary);
    }

    if(bottom_boundary.IsTouching(ball)===true){
      ball.bounce_Off(bottom_boundary);
    }
    bottom_boundary.display();

    fill("blue");
    textSize(15);
    text(player_score, width - 200, height/8);
    
    fill("red");
    textSize(15);
    text(comp_score, width - 600, height/8);

    if(comp_score >= 10){
      gamestate += 1;
    }
  
    if(player_score >= 10){
      gamestate -= 2;
    }
  }

  if(gamestate === 3){
    computer.stay(width - 790, height/2);
    player.stay(width - 10, height/2);
    ball.stay();

    fill("red");
    textSize(20);
    text("YOU LOSE!", width/2 - 30, height/2);
  }

  if(gamestate === 0){
    computer.stay(width - 790, height/2);
    player.stay(width - 10, height/2);
    ball.stay();

    fill("green");
    textSize(20);
    text("YOU WIN!", width/2 - 20, height/2);
  }
}