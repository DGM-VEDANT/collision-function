var fixedRect,movingRect;

function setup() {
  createCanvas(1800,800);

 fixedRect = createSprite(1100, 500, 100, 50);
 fixedRect.shapeColor = "blue";
 fixedRect.debug = true;

 movingRect = createSprite(1100,500,50,100);
 movingRect.shapeColor = "blue";
movingRect.debug = true;

gameObject1 = createSprite(100,100,50,50);
gameObject1.shapeColor = "green";

gameObject2 = createSprite(200,100,50,50);
gameObject2.shapeColor ="green"; 

gameObject3 = createSprite(300,100,50,50);
gameObject3.shapeColor ="green";

gameObject4 = createSprite(400,100,50,50);
gameObject4.shapeColor ="green";



}

function draw() {
  background(0);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(isTouching(gameObject1,movingRect)){
    gameObject1.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else{
    gameObject1.shapeColor = "green";
    movingRect.shapeColor = "blue";
  }

  drawSprites();
}

