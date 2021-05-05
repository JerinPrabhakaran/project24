
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var dustbin;
var dustbin2;
var dustbin3;
var ball;


function preload()
{
	
}

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   ground = new Ground(500 ,480 ,1000 ,10);
   dustbin = new Box(900 ,375 ,30 ,200);
   dustbin2 = new Box(600 ,375 ,30 ,200);
   dustbin3 = new Box(750 ,460 ,280 ,30);
   ball = new Ball(50 ,460 ,30);
   
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  dustbin.display();
  dustbin2.display();
  dustbin3.display();
  ball.display();
  drawSprites();
  keyPressed();
}

function keyPressed(){
  if (keyCode === UP_ARROW){
  Matter.Body.applyForce(ball.body, ball.body.position, {x : 0.2,y : -0.4});
  }

}


