var treeIMG, ground, boyIMG;
var tree, boy, stone;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8;
var Elastic;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1435, 700);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(width / 2, height - 5, width, 10)

    Engine.run(engine);
    tree = new Tree(1150, 440, 450, 540)
    boy = new Boy(320, 620, 200, 290)

    stone = new Stone(155, 550, 50)

    mango1 = new Mango(1150, 200, 40)
    mango2 = new Mango(1200, 300, 45)
    mango3 = new Mango(1250, 250, 50)
    mango4 = new Mango(1300, 350, 55)
    mango5 = new Mango(1000, 350, 40)
    mango6 = new Mango(1200, 380, 45)
    mango7 = new Mango(1100, 400, 50)
    mango8 = new Mango(1090, 240, 55)

    Elastic = new Throw(stone.body, { x: 255, y: 550 })

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  rectMode(CENTER);
  background("lightblue");
  ground.display();

  tree.display();
  boy.display();

  Elastic.display();
  stone.display();


  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();

  collision(stone,mango1);
  collision(stone,mango2);
  collision(stone,mango3);
  collision(stone,mango4);
  collision(stone,mango5);
  collision(stone,mango6);
  collision(stone,mango7);
  collision(stone,mango8);

  text("Press space to get a second chance.", 100,100);
  
  drawSprites();
 
}


function mouseDragged() {
    Matter.Body.setPosition(stone.body, { x: mouseX, y: mouseY })
}

function mouseReleased() {
    Elastic.fly()
}

function keyPressed() {
    if (keyCode === 32) {
        Elastic.attach(stone.body);
    }
}

function collision(stone, mango) {
    
    mangoBodyPosition = mango.body.position
    stoneBodyPosition = stone.body.position
 
    var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
    
    if (distance <= mango.radius + stone.radius) {
        Matter.Body.setStatic(mango.body, false);
       
    }
}

