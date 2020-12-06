var fixedRect, movingRect,r1,r2,r3 

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = false;
  fixedRect.velocityX = -3
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = false;
  r1 = createSprite(200,400,50,80)
  r1.shapeColor = "pink"
  r1.velocityX = 3
  r2 = createSprite(750,300,80,40)
  r2.shapeColor = "green"
  r3 = createSprite(900,250,50,70)
  r3.shapeColor = "green"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
bounce (fixedRect,r1)
  if (isTouching(movingRect,r2)){
    movingRect.shapeColor = "cyan";
  r2.shapeColor = "yellow";
  }
  else {
    movingRect.shapeColor = "green";
  r2.shapeColor = "green";
  }
  drawSprites();
}
