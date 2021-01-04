var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleb;
var gamestate ="play"

function preload(){
towerImg = loadImage("tower.png");
ghostImg = loadImage("ghost-standing.png");
climberImg = loadImage("climber.png");
doorImg = loadImage("door.png") 
}

function setup() {
  createCanvas(600,600);
  
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  
  ghost = createSprite(200,200,50,50);
  ghost.scale = 0.5;
  ghost.addImage("ghost", ghostImg);
    doorsGroup = new Group();
  climbersGroup = new Group();
  invisiblebsGroup = new Group();

 
}

function draw() {
    background(0);
  if(gamestate ==="play"){
  
  if(keyDown("left_arrow")){
      ghost.x = ghost.x - 3;
    }
    
    if(keyDown("right_arrow")){
      ghost.x = ghost.x + 3;
    }
    
    if(keyDown("space")){
      ghost.velocityY = -10;
    }
    ghost.velocityY = ghost.velocityY + 0.8
    
    if(tower.y > 400){
    tower.y = 300
    }

  if(ghost.isTouching(invisiblebsGroup)|| ghost.y > 600){
    ghost.destroy();
     gamestate = "end"
     
     }
  if(ghost.isTouching(climbersGroup)){
    
     ghost.velocityY = 0;
     }
  spawnDoors();
  drawSprites();
}
  if(gamestate ==="end"){
    stroke("black");
    fill("yellow");
    textSize(38);
    text("💔game over💔",165,270)
  }
}
function spawnDoors() {
  if (frameCount % 240 === 0) {
    door = createSprite(200, -50);
    door.x = Math.round(random(120,400));
    door.velocityY = 1;
    doorsGroup.add(door);
    door.addImage(doorImg);
    door.lifetime = 800;

     
    ghost.depth = door.depth;
    ghost.depth +=1;
   
    
    
    climber = createSprite(200,8);
    climber.addImage(climberImg);
    climber.velocityY = 1;
    climber.x = door.x
    climbersGroup.add(climber);
    climber.lifetime = 800;
    
    
  invisibleb= createSprite(200,15);
  invisibleb.width = climber.width-50;
  invisibleb.height= climber.height
  invisibleb.y = climber.y+8;
  invisibleb.x = climber.x;
  invisibleb.velocityY = 1;
  invisibleb.lifetime = 800;
  invisibleb.visible = false;
  invisiblebsGroup.add(invisibleb)
  invisibleb.debug = true;
  }
}
 