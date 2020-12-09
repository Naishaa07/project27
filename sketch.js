
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

const Constraint = Matter.Constraint;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1=new Bob(150,600,30)
	bob2=new Bob(210,600,30)
	bob3=new Bob(270,600,30)
	bob4=new Bob(330,600,30)
	bob5=new Bob(390,600,30)
	roof1=new roof(270,200,400,50)
  rope3=new rope(bob3.body,roof1.body,0,0)
  rope2=new rope(bob2.body,roof1.body,-60,0)
  rope1=new rope(bob1.body,roof1.body,-120,0)
  rope4=new rope(bob4.body,roof1.body,60,0)
  rope5=new rope(bob5.body,roof1.body,120,0)
  //ground=new roof(270,655,400,50)
  //ground.visibile=false
 // Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine)
  //ground.display();
  
  
  roof1.display();
  rope3.display();
  rope2.display();
  rope1.display();
  rope4.display();
  rope5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  strokeWeight(3)
  //line (bob3.body.position.x, bob3.body.position.y, roof1.body.position.x, roof1.body.position.y)
  //line (bob2.body.position.x, bob2.body.position.y, roof1.body.position.x-60, roof1.body.position.y)
  //line (bob1.body.position.x, bob1.body.position.y, roof1.body.position.x-120, roof1.body.position.y)
  //line (bob4.body.position.x, bob4.body.position.y, roof1.body.position.x+60, roof1.body.position.y)
  //line (bob5.body.position.x, bob5.body.position.y, roof1.body.position.x+120, roof1.body.position.y)

  //drawSprites();
 
}

 function keyPressed(){
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-25,y:-25})
  }
}

