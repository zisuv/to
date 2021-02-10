const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
function preload() {
   
 }


 function setup(){
    var canvas = createCanvas(1200,600);


    engine = Engine.create();
    world = engine.world;
   
    Engine.run(engine)

    ground = new Ground(600,580,1200,20);

    base1 = new Ground(420,300,260,10);
    base2 = new Ground(900,400,200,10);


    block8= new Box(330,235,30,40);
    block9= new Box(360,235,30,40);
    block10= new Box(390,235,30,40);
    block11= new Box(420,235,30,40);
    block12= new Box(450,235,30,40);


    block13= new Box(360,195,30,40);
    block14= new Box(390,195,30,40);
    block15= new Box(420,195,30,40);

    block16 = new Box(390,155,30,40);

     

    block1= new Box(850,235,30,40);
    block2= new Box(880,235,30,40);
    block3= new Box(910,235,30,40);
    block4= new Box(940,235,30,40);
    block5= new Box(970,235,30,40);


    
    block6= new Box(880,195,30,40);
    block7= new Box(910,195,30,40);
    block08= new Box(940,195,30,40);

    block09 = new Box(910,155,30,40);
    
    polygon = new Polygon(200,50);

    
    rope = new Rope(polygon.body, { x: 300, y: 100 });
 }

 function draw(){
     background(55,43,43);

     ground.display();
  base1.display();
  base2.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block08.display();
  block09.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  polygon.display();
 rope.display();
  
     Engine.update(engine);

     


     text("Drag the hexagonal ball and release to throw ",900,115)
 }



 function mouseDragged(){
   //if (gameState!=="launched"){
       Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
   //}
}

function mouseReleased(){
   rope.fly();
   gameState = "launched";
}
function keyPressed(){
   if(keyCode === 32){
       polygon.trajectory=[];
       Matter.Body.setPosition(polygon.body,{x:200,y:50});
      rope.attach(polygon.body);

   }
}
