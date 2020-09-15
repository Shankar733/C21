var fixedRect,movingRect

function setup() {
  createCanvas(400,400);
  fixedRect=createSprite(100, 100, 50, 80);
  fixedRect.shapeColor= "green";
  movingRect=createSprite(300, 100, 80, 30);
  movingRect.shapeColor= "green";
  //obj1=createSprite(200, 100, 80, 30);
  //obj1.shapeColor= "green";
  movingRect.velocityY=-5;
  fixedRect.velocityY=5;
}

function draw() {
  background(255,255,255);
  bounceOff(movingRect,fixedRect);
  //movingRect.x=World.mouseX
  //movingRect.y=World.mouseY
  //isTouching(movingRect,obj1);
  drawSprites();
}
