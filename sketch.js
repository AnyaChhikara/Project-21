var bg , bgImg;
var bath, bathImg;
var sleep , sleepImg;
var drink , drinkImg;
var eat , eatImg;
var gym, gymImg;
var move, moveImg;
var astronaut;
var brush, brushImg;

function setup() {
  createCanvas(400, 400);

  //loading images and animations 
  bgImg = loadImage("iss.png");
  bathImg = loadAnimation("bath1.png","bath2.png");
  sleepImg = loadAnimation("sleep.png");
  drinkImg = loadAnimation("drink1.png","drink2.png");
  eatImg = loadAnimation("eat1.png","eat2.png");
  gymImg = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
  moveImg = loadAnimation("move.png","move1.png");
  brushImg = loadAnimation("brush.png");

  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping",sleepImg);
  astronaut.scale = 0.1;

  fill("maroon");
  stroke("aqua");
  textSize(30);
  text("INSTRUCTIONS",100,100);

  fill("maroon");
  stroke("black");
  textSize(20);
  text("Up Arrow = Brushing",100,120);

  fill("maroon");
  stroke("black");
  textSize(20);
  text("Down Arrow = Gymming",100,140);

  fill("maroon");
  stroke("black");
  textSize(20);
  text("Left Arrow = Eating",100,160);

  fill("maroon");
  stroke("black");
  textSize(20);
  text("Right Arrow = Bathing",100,180);

  fill("maroon");
  stroke("black");
  textSize(20);
  text("m Key = Moving",100,200);

}

function draw() {
  background(bgImg);

  if(keyDown(UP_ARROW)){
    astronaut.addAnimation("brushing",brushImg);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;

    if(keyDown(DOWN_ARROW)){
      astronaut.addAnimation("gymming",gymImg);
      astronaut.changeAnimation("gymming");
      astronaut.y = 300;
      astronaut.velocityY = 0;
      astronaut.velocityX = 0;
    }

    if(keyDown(LEFT_ARROW)){
      astronaut.addAnimation("eating",eatImg);
      astronaut.changeAnimation("eating");
      astronaut.y = 350;
      astronaut.velocityY = 0;
      astronaut.velocityX = 0;
    }

    if(keyDown(RIGHT_ARROW)){
      astronaut.addAnimation("bathing",bathImg);
      astronaut.changeAnimation("bathing");
      astronaut.y = 300;
      astronaut.velocityY = 0;
      astronaut.velocityX = 0;
    }

    if(keyDown(M)){
      astronaut.addAnimation("moving",moveImg);
      astronaut.changeAnimation("moving");
      astronaut.y = 350;
      astronaut.velocityY = 0;
      astronaut.velocityX = 0;
    }
  }

 
}