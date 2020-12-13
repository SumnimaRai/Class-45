var c;
var bgImage;
var bg;
var invisibleGround;


function preload(){
  bgImage = loadImage("background.jpg");
 cat1 = loadAnimation("walter the cat/cat1.gif","walter the cat/cat2.gif","walter the cat/cat3.gif","walter the cat/cat4.gif"
 ,"walter the cat/cat5.gif","walter the cat/cat6.gif","walter the cat/cat7.gif","walter the cat/cat8.gif")
}

function setup() {
  createCanvas(windowWidth, windowHeight);

   bg = createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight);
   bg.addImage(bgImage);
   bg.scale=3.5;
   bg.velocityX=-2;

  c = createSprite(200,200,50,50);
  c.addAnimation("running",cat1);
  c.scale=0.1;

  invisibleGround = createSprite(windowWidth/2,windowHeight-100,windowWidth,50);
  invisibleGround.visible=false;


}

function draw(){
background("black");

if(bg.x<0){
bg.x=windowWidth/2;
}

if(keyDown("space") && c.y>=593){
c.velocityY=-10;
}

c.velocityY+=0.8;
c.collide(invisibleGround);

ants();

drawSprites();
}

function ants(){
if(frameCount%100===0){
 ant=createSprite(windowWidth,windowHeight-130,20,20);
 ant.velocityX=-4;

}

}
