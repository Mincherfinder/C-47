

var carImage, mainImg, carImg1, carImg2, carImg3, 
carImg4, carImg5, carImg6, carImg7, carImg8, carImg9, carImg10;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload()
{
mainImg = loadImage("Images/Main Car.png")
carImg0 = loadImage("Images/Car1.png");
carImg1 = loadImage("Images/Car2.png");
carImg2 = loadImage("Images/Car3.png");
carImg3 = loadImage("Images/Car4.png");
carImg4 = loadImage("Images/Car5.png");
carImg5 = loadImage("Images/Car6.png");
carImg6 = loadImage("Images/Car7.png");
carImg7 = loadImage("Images/Car8.png");
carImg8 = loadImage("Images/Car9.png");
carImg9 = loadImage("Images/Car10.png");
carImg10 = loadImage("Images/Car10.png");
}

function setup() {

createCanvas(800, 700);

mainCar = createSprite(400,230);
/*for(var i= 0; i< 10;i++){

	cars[i] = createSprite(Math.round(random(100,200)),Math.round(random(300,200)),30,30);
	carImg = "carImg" +i;
	img = loadImage(carImg)
	cars[i].addImage(img);
}*/


car1 = createSprite(200,200);
car2 = createSprite(445,336);
car3 = createSprite(300,220);
car4 = createSprite(550,200);
car5 = createSprite(335,100);
car6 = createSprite(250,380);
car7 = createSprite(240,100);
car8 = createSprite(250,470);
car9 = createSprite(460,426);
car10 = createSprite(250,310);

car1.addImage(carImg1);
car1.scale = 0.7
car2.addImage(carImg2);
car2.scale = 0.7
car3.addImage(carImg3);
car3.scale = 0.7
car4.addImage(carImg4);
car4.scale = 0.7
car5.addImage(carImg5);
car5.scale = 0.2
car6.addImage(carImg6);
car6.scale = 0.2
car7.addImage(carImg7);
car7.scale = 0.2
car8.addImage(carImg8);
car8.scale = 0.2
car9.addImage(carImg9);
car9.scale = 0.2
car10.addImage(carImg10);
car10.scale = 0.2
mainCar.addImage(mainImg);
mainCar.scale = 0.5
engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("White");
	if(keyDown(UP_ARROW)){
	 mainCar.y = mainCar.y-5;
	}
	if(keyDown(DOWN_ARROW)){
	 mainCar.y = mainCar.y+5;
	}
	if(keyDown(RIGHT_ARROW)){
	 mainCar.x = mainCar.x+5;
	}
	if(keyDown(LEFT_ARROW)){
	 mainCar.x = mainCar.x-5;
	}
  text(mouseX +","+ mouseY, 700,100)

  	strokeWeight(10)
	stroke("red");
	rect(400,300,500,500)

	
  drawSprites();
 
}



