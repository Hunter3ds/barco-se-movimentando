var mar, marImagem
var ship, shipIMG


function preload(){
 marImagem = loadImage("sea.png");

 shipIMG = loadAnimation("ship1.png","ship2.png");


}

function setup(){
  createCanvas(400,400);

  mar = createSprite(400, 200);
  mar.addImage(marImagem);
  mar.velocityX = -5;
  mar.scale = 0.5

  ship = createSprite(130, 200, 30, 30)
  ship.addAnimation("ship",shipIMG);
  ship.scale = 0.25;
}

function draw() {
  background("blue");
  
  if(mar.x < 0){
    mar.x = mar.width/8;
  }



  drawSprites();
 
}