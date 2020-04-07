const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
 
var engine, world;
var box,ball;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
    world = engine.world;
    
  box = createSprite(190,100,200,30);
  box.shapeColor = "green";
   
  ball=Bodies.circle(190,250,50,ball_options);
      
  var ball_options ={
          restitution:1.0}
      
     cons=new Chain(box.body,ball.body);
  } 

function draw() {
  background(225);  
  Engine.update(engine);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,50,50);
  drawSprites();
}
