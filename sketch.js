var bullet;
var speed;
var wall ;
var weight ;
var thickness;
var damage;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 50, 10);
  bullet.velocityX = speed= random(50,90);
  weight = random(30,52);
  thickness = random(22,83);
  wall = createSprite(1400,200,thickness,height/2);
  wall.width = thickness;
  damage = 0.5*speed*speed*weight/thickness*thickness*thickness*thickness;
  console.log(damage);
}

function draw() {
  background(255,255,255);  
  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    if(damage>500000000){
      wall.shapeColor = color(255,0,0);
    }
    if(damage<500000000){
      wall.shapeColor = color(0,255,0);
    }
  }
  drawSprites();
}