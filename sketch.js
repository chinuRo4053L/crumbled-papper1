
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
GROUND=new Ground(width/2,670,width,20)
BOX=new Box(1200,650)
	PAPER=new paper(200,150,40)
PAPER1=new paper1(200,130,4)
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  drawSprites();
 BOX.display()
 PAPER.display()
GROUND.display()
PAPPER1.display()






}
function keyPressed() {
	if (keyCode === mouse.x,mouse.y) {

	  Matter.Body.applyForce(PAPER.body,PAPER.body.position,{x:85,y:-85});
  
	}
}



