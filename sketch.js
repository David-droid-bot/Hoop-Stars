var PLAY=1;

var END=0;

var gameState=PLAY;
var Jordan,ball,Hoop,ground;
var HoopImage,JordanImage,ballImage;

function preload(){
    JordanImage=loadAnimation("Jordan1.jpg","Jordan2.jpg","Jordan3.jpg");
    Jordanjump=loadAnimation("Jordan1.jpg");
    HoopImage=loadImage("Hoop.png");
    ballImage=loadImage("ball.png");
    gameover=loadAnimation("Game over.png")
}
function setup(){
Jordan=createSprite(50,345,20,40);
Jordan.addAnimation("Running",JordanImage);
Jordan.addAnimation("jump",Jordanjump);
Jordan.addAnimation("gameover",gameover);
Hoop=createSprite(330,150,20,40);
Hoop.addImage(HoopImage);
Hoop.scale=0.5;

ball=createSprite(40,200,10,10);
ball.addImage(ballImage);
ball.scale=0.1;
ball.visible=false;

ground=createSprite(300,390,600,10);
ground.velocityX=-4;

ground.shapeColor="white                                                                                                                                                                                                                                     ";
Obstaclegroup = createGroup();
}
function draw() {
  background("white");
  drawSprites();
  createEdgeSprites();
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  if(keyDown("space")){
    Jordan.velocityY=-7;
  }
 Jordan.velocityY=Jordan.velocityY+0.8; 
 Jordan.collide(ground);
 if(keyWentDown("up")){
   Jordan.changeAnimation("jumping", Jordanjump);
   ball.visible=true;
   ball.velocityX=6;
   ball.rotation=45;
 }
 if(keyWentDown("down")){
   Jordan.changeAnimation("Running",JordanImage);
 }
 if(ball.isTouching(Hoop)){
     ball.visible=false;
   }
 Curry();
 if(Obstaclegroup.isTouching(Jordan)){
   gameState=END;
 }
 if(gameState===END){
   Jordan.velocityX=0;
   Jordan.velocityY=0;
    Obstaclegroup.destroyEach();
    Jordan.changeAnimation("Gameover", gameover);
    Jordan.x=200;
    Jordan.y=200;
    Jordan.scale=1.8;
    //playSound("sound://category_female_voiceover/game_over_female.mp3");
    Hoop.visible=false;
 }
 //Curry.collide(ground);
}
function Curry(){
if(World.frameCount%150==0){

var obstacle=createSprite(400,330,20,40);
//obstacle.addAnimation("NW 1.JPG_1");
//obstacle.scale=0.6;
obstacle.velocityX=-4;
obstacle.lifetime=100;
Obstaclegroup.add(obstacle);
}
}
