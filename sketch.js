var PLAY=1
var END=0
var gameState=1 

var knifeSwooshSound;

var fruit,fruit1,fruit2,fruit3,fruit4;

var monster,monster1

var fruitGroup,enemyGroup,gameOver;
var score=0;

var sword,swordImage

function preload(){
  
  
  fruit1 = loadImage("fruit1.png");
  fruit2 = loadImage("fruit2.png");
  fruit3 = loadImage("fruit3.png");
  fruit4 = loadImage("fruit4.png");
  monster1 = loadAnimation("alien1.png","alien2.png");
  
  knifeSwooshSound = loadSound("knifeSwooshSound.mp3")

  
  swordImage=loadImage("sword.png")
  gameOver = loadImage("gameover.png");
  
}

function setup(){
  createCanvas(650,650);
  
  sword = createSprite(40,200,20,20);
  sword.addImage(swordImage)
  sword.scale=0.6
  
  
  enemyGroup=new Group()
  fruitGroup=new Group()
  
}

function draw(){
background("blue")
  text("score="+score,300,50)
  
  if(gameState === PLAY){
     
     sword.y=World.mouseY
     sword.x=World.mouseX
     if(fruitGroup.isTouching(sword)){
        
        fruitGroup.destroyEach();
        score=score+1
       
        }
       fruits();
       enemy();
     }
  
    
  if(sword.isTouching(enemyGroup)){
    gameState= END
    fruitGroup.destroyEach();
    enemyGroup.destroyEach();
    fruitGroup.setVelocityXEach(0);
    enemyGroup.setVelocityXEach(0);
    sword.addImage(gameOver);
  }
  
  if(fruitGroup.isTouching(sword)){
     
     fruitGroup.destroyEach();
     
     
     
     }
  
  
  drawSprites();
}

function fruits(){
  
   if(World.frameCount%80===0){
    fruit=createSprite(400,200,20,20)
    fruit.scale=0.2
    
    r=Math.round(random(1,4));
    if (r == 1){
      fruit.addImage(fruit1)
   } else if (r == 2) {
     fruit.addImage(fruit2)
   } else if (r == 3){
     fruit.addImage(fruit3)
   } else if (r == 4){
     fruit.addImage(fruit4)
   
  } 
  
  fruit.y=Math.round(random(50,350))
  fruit.velocityX=-7
  fruit.setLifetime=100
  fruitGroup.add(fruit)
     
     fruit1.depth = sword.depth;
    sword.depth = sword.depth + 1
    
    fruit2.depth = sword.depth;
    sword.depth = sword.depth + 1
    
    fruit3.depth = sword.depth;
    sword.depth = sword.depth + 1
    
    fruit4.depth = sword.depth;
    sword.depth = sword.depth + 1
     
 }
}

function enemy(){
  
  if(World.frameCount%200===0){
     monster=createSprite(400,200,20,20);
     monster.addAnimation("moving", monster1);
     monster.y=Math.round(random(100,300));
     monster.velocityX=-8
     monster.setLifetime=50;
    
     enemyGroup.add(monster);
     
     }
  
  
}
