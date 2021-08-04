const Bodies=Matter.Bodies;
const World =Matter.World;
const Engine=Matter.Engine;


var engine, world;
var bg;
var snow=[];
var snowman,snowmanImg;
var boy,boyImg;
var invisible;

function preload(){
bg=loadImage("snow1.jpg");
snowmanImg=loadImage("snowman.png");
boyImg=loadImage("boy.png");

}

function setup() {
  var canvas = createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;

    snowman=createSprite(700,400);
    snowman.addImage(snowmanImg);
    snowman.scale=0.2;

    boy = createSprite(450,430);
    boy.addImage(boyImg);
    boy.scale=0.1;

    invisible=createSprite(500,550,1000,20);
    invisible.visible=false;

  
}


function draw() {
  background(bg);  
  Engine.update(engine);

  boy.collide(invisible);

  if (keyDown("space") && boy.y>300) {
    boy.velocityY=-18;
  } 

  boy.velocityY+=1;

  if(frameCount % 3 === 0)  {
    snow.push(new Snow(random(0,1000),-20,30));
  }

  for(var i=0; i<snow.length; i++)  {
    snow [i].display();
  }

  snowman.display();
  boy.display();
  invisible.display();

}