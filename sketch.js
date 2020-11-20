var wall , thickness 
var bullet , speed , width
 
 
 function setup() {
  createCanvas(1600,400);

speed=random(55,90);
weight=random(400,1500);
thickness=random(22,83);


bullet=createSprite(50,200,50,5);
bullet.velocityX=speed;
bullet.ShapeColor=color(225);

wall=createSprite(1200,200,thi,height/2);
wall.ShapeColor=(80,80,80)

}

function draw() {
 
  background("black");  
if(wall.x-car.x<(car.weight+wall.weight)/2){
car.velocityX=0;
var deformation=0.5*wight*speed*speed/22509;
if(deformation>180){
car.ShapeColor=color(255,0,0)
}
if(deformation<180 && deformation>100){
  car.ShapeColor=color(230,230,0)
}
if(deformation>100){
  car.ShapeColor=color(0,255,0)
}
} 
  drawSprites();
}
function hasCollided(lbullet,lwall)
{
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
return  true
  }
  return false 
}
if (hasCollided(wall,bullet))
{
  bullet.velocityX=0
  var damage=0.5*weidth*speed*speed/(thickness*thickness*thickness);

if(damage,10)
{
wall.ShapeColor=color(255,0,0);
}
if(damage<10)
{
wall.ShapeColor=color(0,255,0);
}


}




