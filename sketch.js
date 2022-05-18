var PLAY = 1;
var END = 0;
var gameState = PLAY;

var score = 0;
var thor, thor_running, thor_collided;
var ground, invisibleGround, groundImage;


var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4;
var gameOver, restart;


function preload() {
  thor_running = loadAnimation("thor1.png", "thor2.png", "thor3.png");
  thor_collided = loadAnimation("thor3.png");
  groundImage = loadImage("ground2.png");
  obstacle1 = loadImage("obstacle1.png");
  obstacle2 = loadImage("obstacle2.png");
  obstacle3 = loadImage("obstacle3.png");
  obstacle4 = loadImage("obstacle4.png");
  // obstacle5 = loadImage("obstacle5.png");
  // obstacle6 = loadImage("obstacle6.png");
  gameOverImg = loadImage("gameOver.png");
  restartImg = loadImage("restart.png");
}

function setup() {
  createCanvas(1366, 768);
  
  
  
  ground = createSprite(136,385);
  ground.addImage("ground", groundImage);
  ground.x = ground.width / 2;
  ground.velocityX = -(3 + 3 * score / 50);

    score = 0;
      obstaclesGroup = new Group(236,80);
  thor = createSprite(140, 200, 0, 50);

  thor.addAnimation("running", thor_running);
  thor.addAnimation("collided", thor_collided);
  thor.scale = 0.7;

  
  
  gameOver = createSprite(616, 385, 1366, 768);
  gameOver.addImage(gameOverImg);
  
  restart = createSprite(616, 475, 20, 20);
  restart.addImage(restartImg);


  restart.scale = 0.1;
  gameOver.scale = 0.8;

  gameOver.visible = false;
  restart.visible = false;

  invisibleGround = createSprite(30, 170, 100, 120);
  invisibleGround.visible = false;

  

}

function draw() {
  //trex.debug = true;
  background(255);
  text("Score: " + score, 500, 50);

  if (gameState === PLAY) {
    score = score + Math.round(getFrameRate() / 60);
    ground.velocityX = -(3 + 3 * score / 50);

    if (keyDown("space") && thor.y >= 159) {
      thor.velocityY = -12;
    }

    thor.velocityY = thor.velocityY + 0.8

    if (ground.x < 0) {
      ground.x = ground.width / 2;
    }

    thor.collide(invisibleGround);

    spawnObstacles();

    if (obstaclesGroup.isTouching(thor)) {
      gameState = END;
    }
  } else if (gameState === END) {
    gameOver.visible = true;
    restart.visible = true;
    //set velcity of each game object to 0
    ground.velocityX = 0;
    thor.velocityY = 0;
    obstaclesGroup.setVelocityXEach(0);


    //change the trex animation
    thor.changeAnimation("collided", thor_collided);

    //set lifetime of the game objects so that they are never destroyed
    obstaclesGroup.setLifetimeEach(-1);

    if (mousePressedOver(restart)) {
      reset();
    }
  }


  drawSprites();
}


function spawnObstacles() {
  if (frameCount % 30 === 0) {
    var obstacle = createSprite(600,685, 10, 40);
    //obstacle.debug = true;
    obstacle.velocityX = -(3 + 3 * score / 1000);

    //generate random obstacles
    var rand = Math.round(random(1, 6));
    switch (rand) {
      case 1:
        obstacle.addImage(obstacle1);
        break;
      case 2:
        obstacle.addImage(obstacle2);
        break;
      case 3:
        obstacle.addImage(obstacle3);
        break;
      case 4:
        obstacle.addImage(obstacle4);
        break;
      // case 5:
      //   obstacle.addImage(obstacle5);
      //   break;
      // case 6:
      //   obstacle.addImage(obstacle6);
      //   break;
      default:
        break;
    }

    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.2;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}

function reset() {
  gameState = PLAY;
  gameOver.visible = false;
  restart.visible = false;

  obstaclesGroup.destroyEach();


  thor.changeAnimation("running", thor_running);

  if (localStorage["HighestScore"] < score) {
    localStorage["HighestScore"] = score;
  }
  console.log(localStorage["HighestScore"]);

  score = 0;

}
