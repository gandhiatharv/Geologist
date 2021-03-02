
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer, stone, rubber, plane, sand1, sand2, sand3, sand4, sand5, sand6, sand7, sand8, sand9, sand10, iron;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	hammer = new Hammer(400, 100, 100, 30);
	plane = new Plane(400, 700, 800, 10);
	stone = new Stone(200, 400, 120, 120);
	rubber = new Rubber();
	iron = new Iron(300, 380, 90, 40);
	sand1 = new Sand();
	sand2 = new Sand();
	sand3 = new Sand();
	sand4 = new Sand();
	sand5 = new Sand();
	sand6 = new Sand();
	sand7 = new Sand();
	sand8 = new Sand();
	sand9 = new Sand();
	sand10 = new Sand();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  

  
  hammer.display();
  plane.display();
  stone.display();
  rubber.display();
  iron.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  sand9.display();
  sand10.display();
}



