
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var boyImage;
var treeImage;
var stone;
var mango1,mango2,mango3,mango4,mango5;
var slingShot;

function preload(){
  boyImage = loadImage("boy.png");
  treeImage = loadImage("tree.png");
  //stone = loadImage("stone.png");
}

function setup() {
	var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,650,1200,20);

	engine = Engine.create();
	world = engine.world;

  Engine.run(engine);
  mango1 = new Mango(900,210);
  mango2 = new Mango(790,300);
  mango3 = new Mango(1000,250);
  mango4 = new Mango(890,350);
  mango5 = new Mango(1070,355);
  stone = new Stone(100,510);
  
  slingShot = new SlingShot(stone.body,{x:120,y:520});

}


function draw() {
  rectMode(CENTER);
  background("blue");

  image(boyImage,100,500,200,200);
  image(treeImage,700,150,500,500);

  ground.display();
  stone.display();
  slingShot.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingShot.fly();    
}

