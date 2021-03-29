const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var defbox;
var ground; 
function setup(){
    var canvas = createCanvas(2000,1082);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(1000,1070,2000,20)
    defbox = new Box(1000,600,350,120)

    




}

function draw(){
    
   background("lightBlue"); 
    Engine.update(engine);
  ground.display();
  defbox.display();
  boxes();
  //createEdgeSprites();
}

function boxes(){
   
}





