var PLAY = 1;
var END = 0;
var gameState = PLAY;

var bgImg;
var astro, astroImg;
var circuitImg, wireImg;
var m, maze;
var m1,m2, m3, m4, m5, m6, m7,m8,m9,m10,m11,m12,m13,m14,m15,m16,m17,m18,m19,m20,m21,m22,m23,m24,m25,m26,m27,m28,m29,m30,m31,m32,m33,m34,m35,m36,m37;
var alien1,alien2,alien3;
var aliensGroup, blobGroup;
var aliensGroup2;
var circuitBox;
var wire;
//var alien_2;

var score=0;

var gameOver, restart;



function preload(){
  
  gameOverImg = loadImage("images/gameOver.png");
  restartImg = loadImage("images/restart.png");

  bgImg = loadImage("images/spaceship dark.png");

  astroImg = loadImage("images/a1.png")

  //maze = loadImage("metal plate.png")
  alien1 = loadImage("images/alien1.png");
  alien2 = loadImage("images/alien2.png");
  alien3 = loadImage("images/alien3.png");

  circuitImg= loadImage("images/circuitbox.png");
  wireImg= loadImage("images/wire.png");
}

function setup() {
  createCanvas(displayWidth-50,displayHeight-200);
  
  
  
  astro = createSprite(100,100);
  astro.addImage(astroImg);
  astro.scale = 0.1;
  
  circuitBox= createSprite(1420,300);
  circuitBox.addImage(circuitImg);
  circuitBox.scale=0.13;

  wire= createSprite(430,580);
  wire.addImage(wireImg);
  wire.scale=0.05;

  //m = createSprite(100,200,500,20);
    m1= createSprite(100,100,200,10);
    m2= createSprite(200,145,10,100);
    m3= createSprite(270,145,10,100);
    m4= createSprite(145,190,120,10);
    m5= createSprite(335,190,135,10);
    m6= createSprite(90,245,10,120);
    m7= createSprite(400,245,10,120);
    m8= createSprite(243,300,170,10);
    m9= createSprite(243,400,170,10);
    m10= createSprite(160,350,10,110);
    m11= createSprite(90,390,10,200);
    m12= createSprite(235,495,300,10);
    m13= createSprite(460,335,10,170);
    m14= createSprite(380,550,10,120);
    m15= createSprite(425,620,100,30);
    m16= createSprite(470,548,10,115);
    m17= createSprite(600,495,250,10);
    m18= createSprite(595,415,260,10);
    m19= createSprite(730,285,10,270);
    m20= createSprite(855,150,260,10);
    m21= createSprite(730,540,10,100);
    m22= createSprite(800,540,10,100);
    m23= createSprite(870,540,10,100);
    m24= createSprite(930,540,10,100);
    m25= createSprite(765,595,80,10);
    m26= createSprite(900,595,70,10);
    m27= createSprite(840,495,70,10);
    m28= createSprite(880,250,120,10);
    m29= createSprite(880,350,120,10);
    m30= createSprite(940,300,10,110);
    m31= createSprite(1010,190,12,90);
    m32= createSprite(1120,230,230,10);
    m33= createSprite(1080,495,300,10);
    m34= createSprite(1230,300,10,150);
    m35= createSprite(1325,380,200,10);
    m36= createSprite(1325,480,200,10);
    m37= createSprite(1230,487,10,23);

  aliensGroup = new Group();
  blobGroup = new Group();

  aliensGroup2= new Group();
  
  gameOver = createSprite(300,100);
  gameOver.addImage(gameOverImg);
  
  restart = createSprite(300,140);
  restart.addImage(restartImg);
  
  gameOver.scale = 0.5;
  restart.scale = 0.5;

  gameOver.visible = false;
  restart.visible = false;
  
  score = 0;
}

function draw() {
  //trex.debug = true;
  background(bgImg);
  text("Score: "+ score, 500,50);
  console.log(mouseX,mouseY);
  if(keyDown(UP_ARROW)) {
    astro.velocityY = -12;
  }

  astro.velocityY = astro.velocityY + 0.8;

  if(keyDown(LEFT_ARROW)){
    astro.x = astro.x-3;
  }

  if(keyDown(RIGHT_ARROW)){
    astro.x = astro.x+3;
  }

     if(aliensGroup.isTouching(astro)){
      astro.x=96;
      astro.y=86;
      score=score-50;
    }


    aliensGroup.bounceOff(m13);
    aliensGroup.bounceOff(m1);
    aliensGroup.bounceOff(m2);
    aliensGroup.bounceOff(m3);
    aliensGroup.bounceOff(m4);
    aliensGroup.bounceOff(m5);
    aliensGroup.bounceOff(m6);
    aliensGroup.bounceOff(m7);
    aliensGroup.bounceOff(m8);
    aliensGroup.bounceOff(m9);
    aliensGroup.bounceOff(m10);
    aliensGroup.bounceOff(m11);
    aliensGroup.bounceOff(m12);
    aliensGroup.bounceOff(m13);
    aliensGroup.bounceOff(m14);
    aliensGroup.bounceOff(m15);
    aliensGroup.bounceOff(m16);
    aliensGroup.bounceOff(m17);
    aliensGroup.bounceOff(m18);
    aliensGroup.bounceOff(m19);
    aliensGroup.bounceOff(m20);
    aliensGroup.bounceOff(m21);
    aliensGroup.bounceOff(m22);
    aliensGroup.bounceOff(m23);
    aliensGroup.bounceOff(m24);
    aliensGroup.bounceOff(m25);
    aliensGroup.bounceOff(m26);
    aliensGroup.bounceOff(m27);
    aliensGroup.bounceOff(m28);
    aliensGroup.bounceOff(m29);
    aliensGroup.bounceOff(m30);
    aliensGroup.bounceOff(m31);
    aliensGroup.bounceOff(m32);
    aliensGroup.bounceOff(m33);
    aliensGroup.bounceOff(m34);
    aliensGroup.bounceOff(m35);
    aliensGroup.bounceOff(m36);
    aliensGroup.bounceOff(m37);
    
    //aliensGroup2

    aliensGroup2.bounceOff(m1);
    aliensGroup2.bounceOff(m2);
    aliensGroup2.bounceOff(m3);
    aliensGroup2.bounceOff(m4);
    aliensGroup2.bounceOff(m5);
    aliensGroup2.bounceOff(m6);
    aliensGroup2.bounceOff(m7);
    aliensGroup2.bounceOff(m8);
    aliensGroup2.bounceOff(m9);
    aliensGroup2.bounceOff(m10);
    aliensGroup2.bounceOff(m11);
    aliensGroup2.bounceOff(m12);
    aliensGroup2.bounceOff(m13);
    aliensGroup2.bounceOff(m14);
    aliensGroup2.bounceOff(m15);
    aliensGroup2.bounceOff(m16);
    aliensGroup2.bounceOff(m17);
    aliensGroup2.bounceOff(m18);
    aliensGroup2.bounceOff(m19);
    aliensGroup2.bounceOff(m20);
    aliensGroup2.bounceOff(m21);
    aliensGroup2.bounceOff(m22);
    aliensGroup2.bounceOff(m23);
    aliensGroup2.bounceOff(m24);
    aliensGroup2.bounceOff(m25);
    aliensGroup2.bounceOff(m26);
    aliensGroup2.bounceOff(m27);
    aliensGroup2.bounceOff(m28);
    aliensGroup2.bounceOff(m29);
    aliensGroup2.bounceOff(m30);
    aliensGroup2.bounceOff(m31);
    aliensGroup2.bounceOff(m32);
    aliensGroup2.bounceOff(m33);
    aliensGroup2.bounceOff(m34);
    aliensGroup2.bounceOff(m35);
    aliensGroup2.bounceOff(m36);
    aliensGroup2.bounceOff(m37);



  
  


  //astro.collide(m);
  astro.collide(m1);
  astro.collide(m2);
  astro.collide(m3);
  astro.collide(m4);
  astro.collide(m5);
  astro.collide(m6);
  astro.collide(m7);
  astro.collide(m8);
  astro.collide(m9);
  astro.collide(m10);
  astro.collide(m11);
  astro.collide(m12);
  astro.collide(m13);
  astro.collide(m14);
  astro.collide(m15);
  astro.collide(m16);
  astro.collide(m17);
  astro.collide(m18);
  astro.collide(m19);
  astro.collide(m20);
  astro.collide(m21);
  astro.collide(m22);
  astro.collide(m23);
  astro.collide(m24);
  astro.collide(m25);
  astro.collide(m26);
  astro.collide(m27);
  astro.collide(m28);
  astro.collide(m29);
  astro.collide(m30);
  astro.collide(m31);
  astro.collide(m32);
  astro.collide(m33);
  astro.collide(m34);
  astro.collide(m35);
  astro.collide(m36);
  astro.collide(m37);
  
  spawnAliens();
    
  drawSprites();
}

function spawnBlob() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var cloud = createSprite(600,120,40,10);
    cloud.y = Math.round(random(80,120));
    cloud.addImage(cloudImage);
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    
     //assign lifetime to the variable
    cloud.lifetime = 200;
    
    //adjust the depth
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
    
    //add each cloud to the group
    cloudsGroup.add(cloud);
  }
  
}

function spawnAliens() {
  var rand1 = Math.round(random(60,100));
  if(frameCount % rand1 === 0) {
    var alien = createSprite(172,343,10,40);
    var alien_2 = createSprite(923,297,10,40);
    //alien.debug = true;
    alien.velocityX = (6 + 3*score/100);
    if(aliensGroup.isTouching(m13)){
      alien.velocityY=-(alien.velocityY);
      alien.velocityX=-(alien.velocityX);
    }
    alien_2.velocityX = -(6 + 3*score/100);
    //generate random aliens
    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: alien.addImage(alien1);
              break;
      case 2: alien.addImage(alien2);
              break;
      case 3: alien.addImage(alien3);
              break;
      default: break;
    }

    var rand2 = Math.round(random(1,3));
    switch(rand2) {
      case 1: alien_2.addImage(alien1);
              break;
      case 2: alien_2.addImage(alien2);
              break;
      case 3: alien_2.addImage(alien3);
              break;
      default: break;
    }

    //assign scale and lifetime to the alien           
    alien.scale = 0.1;
    alien.lifetime = 300;

    alien_2.scale = 0.1;
    alien_2.lifetime = 300;
    
    
    //m13.collide(aliensGroup)

    //add each alien to the group
    aliensGroup.add(alien);
    aliensGroup2.add(alien_2);
    
  }
}
function reset(){
  gameState = PLAY;
  gameOver.visible = false;
  restart.visible = false;
  
  aliensGroup.destroyEach();
  blobGroup.destroyEach();
  aliensGroup2.destroyEach();
  
  //alien.changeAnimation("running",trex_running);
  
 
  
  score = 0;
  
}

