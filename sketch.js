
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
var bob1,bob2,bob3,bob4,bob5;
var ground;
var rope, rope2, rope3, rope4, rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Roof(400,100,500,40);
	
	bob1 = new Paper(200,500,20);
	bob2 = new Paper(300,500,20);
	bob3 = new Paper(400,500,20);
	bob4 = new Paper(500,500,20);
	bob5 = new Paper(600,500,20);
	bobDiameter= 40;
	rope = new Rope(ground.body,bob1.body,bobDiameter*-5,0);
    rope2 = new Rope(ground.body,bob2.body,bobDiameter*-2.6,0);
	rope3 = new Rope(ground.body,bob3.body,bobDiameter*0,0);
	rope4 = new Rope(ground.body,bob4.body,bobDiameter*2.4,0);
	rope5 = new Rope(ground.body,bob5.body,bobDiameter*5,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100);
  Engine.update(engine);

	rope.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

  	ground.display();
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
  
	
  

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === 32){
	   Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-200,y:-200});
	}
  }
