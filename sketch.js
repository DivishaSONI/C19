var trexsprite,treximages,ground,groundimage,invisibleground,cloudgroup,cloudimage,obstacle1,obstacle2,obstacle3,obstacle4,obstacle5,obstacle6,obstacle,obstaclegroup ,random1,score  
var edges;


function preload (){
  treximages=loadAnimation("trex1.png","trex3.png","trex4.png" );
  groundimage=loadImage("ground2.png");
  cloudimage=loadImage("cloud.png");
  obstacle1=loadImage("obstacle1.png");
  obstacle2=loadImage("obstacle2.png");
  obstacle3=loadImage("obstacle3.png");
 obstacle4=loadImage("obstacle4.png");
  obstacle5=loadImage("obstacle5.png");
  obstacle6=loadImage("obstacle6.png");
   
}








function setup() {
  createCanvas(600, 200);
  trexsprite=createSprite(50,150,10,10);
  trexsprite.addAnimation("trexrunning",treximages);
  trexsprite.scale=0.5;
  trexsprite.x=50;
  edges= createEdgeSprites();
  ground=createSprite(300,180,600,10);
  ground.addImage("groundImage",groundimage);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  invisibleground=createSprite(300,190,600,5);
  invisibleground.visible=false;
  cloudgroup=new Group();
  obstaclegroup=new Group();
  score=0;
  
  
}

function draw() {
  background(0);
  if(keyDown("space")&& trexsprite.y>164){
    trexsprite.velocityY=-10;
  }
  trexsprite.velocityY=trexsprite.velocityY+0.8;
 trexsprite.collide(invisibleground); 
  if(ground.x<0){
  ground.x=ground.width/2; 
  }
  console.log(trexsprite.y);
  spawnobstacles();
  spawnClouds();
  drawSprites();
  score=score+Math.round(getFrameRate()/40);
  text("score"+score,100,50);
}

 function spawnClouds(){
   if(frameCount%100===0) {
var cloud =createSprite(600,100,20,10)
cloud.velocityX=-5
     
     cloud.y=Math.round(random (80,120));
     cloud.scale=0.5; 
     cloud.depth=trexsprite.depth+1;
     cloud.lifetime=600/5;
   cloud.addImage("cloudimage",cloudimage );
     cloudgroup.add (cloud);
   }
 }

function spawnobstacles (){
  if(frameCount%60===0){
   obstacle=createSprite (600,170,20,10); 
    obstacle.velocityX=-4;
    obstacle.lifetime=600/4;
    obstacle.scale=0.5;
    obstacle.depth=trexsprite.depth+1;
    obstaclegroup.add(obstacle);
    random1=Math.round(random(1,6));
    switch(random1){
      case 1:obstacle.addImage(obstacle1);
        break;
    case 2:obstacle.addImage(obstacle2);
        break;  
      case 3:obstacle.addImage(obstacle3);
        break;  
       case 4:obstacle.addImage(obstacle4);
        break; 
       case 5:obstacle.addImage(obstacle5);
        break; 
        case 6:obstacle.addImage(obstacle6);
        break;
        default:break;
        
    }
    
    
           
  
  }  
}










