var hypnoticBall, database;
var position;


function setup(){
  console.log(database);
  createCanvas(500,500);

  hypnoticBall = createSprite(250,250,10,10);
  hypnoticBall.shapeColor = "red";



}

function draw(){
  background("white");
  
    if(keyDown(LEFT_ARROW)){
      changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
      changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
      changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
      changePosition(0,+1);
    }
    drawSprites();
  
}

function changePosition(x,y){
 
  hypnoticBall.x =   hypnoticBall.x + x;
  hypnoticBall.y =   hypnoticBall.y + y;

}

