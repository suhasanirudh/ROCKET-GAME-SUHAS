var astroid, astroidImg; 
var life, lifeImg; 
var restart, restartImg;
var rocket, rocketImg;
var space, spaceImg;  
var gameOver, gameOverImg; 
var astroidsGroup;
var GAMESTATE = "play" 

function preload () {

  astroidImg = loadImage ('IMAGES/astroid.png');
  lifeImg  =  loadImage ('IMAGES/life.png');
  restartImg = loadImage ('IMAGES/restart.png');
  rocketImg = loadImage ('IMAGES/rocket.jpg');
  spaceImg = loadImage ('IMAGES/space.jpg');

}

function setup () {

  createCanvas (600,600);

  astroid = createSprite (200,200,50,50);
  astroid.addImage ("astroid",astroidImg);

  space = createSprite (300,300);
  space.addImage ("space", spaceImg);
  space.velocityY = 1;

  rocket = createSprite  (200,200,65,65);
  rocket.addImage  ("rocket", rocketImg); 

  astroidsGroup = new Group ();




}

function draw () {

  background (0);

  if (GAMESTATE === "play") {

    score = score + Math.round(getFrameRate()/100); 

    if (keydown("W")) {
      rocket.velocityY = -10 
    }

    if (keyDown("D")) {
      rocket.x= +3
    }

    if (keydown("A")) {
      rocket.x = -3
    }

    rocket.velocityY = rocket.velocityY + 0.8;
  }

  if (tower.y > 400) {
    tower.y  = 300;
  }

  if (astroidsGroup.isTouching(rocket) || rocket.y > 400) {
    rocket.destroy();
    GAMESTATE = "end" 
  } 

  rocket.setCollider ("rectangle",0,0,190,250);
  ghost.debug = false;





  drawSprites ();

  if (GAMESTATE === "end") {
    background(0)
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text ("Game Over",200,300)
    astroidsGroup.destroyEach ();
  }
}

function spawnAstroids () {
  if (frameCount % 90 === 0) {
    astroid = createSpriteprite (200,-50) 
    astroid.velocityY = 4;
    astroid.x = Math.round(random(120,400));
    astroidsGroup.add (astroid); 
  }
}