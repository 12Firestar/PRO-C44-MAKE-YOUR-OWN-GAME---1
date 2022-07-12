var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var Star1, Star2, Star3, Star4, Star5, Star6;
var fullStar1, fullStar2, fullStar3, fullStar4, fullStar5, fullStar6;
var emptyStarIMG, fullStarIMG;
var score;
var obs1, obs2, obs3, obs4, obs5, obs6;
var obsIMG
var gameOverSound
var gameStartSound
var gameWinSound
var isOver = false

function preload(){
bgImg = loadImage("assets/bg.png")

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")

emptyStarIMG = loadImage("assets/emptyStar.png")
fullStarIMG = loadImage("assets/fullStar.png")
obsIMG = loadImage("assets/obsTop2.png")

gameOverSound = loadSound("assets/FakeApplause.mp3")
gameStartSound = loadSound("assets/PacmanMusic.mp3")
gameWinSound = loadSound("assets/TaDa.mp3")

}

function setup(){
  createCanvas(600,600)
 // gameStartSound.play()
  
  score = 0

//background image
bg = createSprite(300,300,width,height);
bg.addImage(bgImg);
bg.scale = 1.3

//creating top and bottom grounds
bottomGround = createSprite(200,600,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(300,590,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;

//creating empty stars
Star1 = createSprite(190,300)
Star1.addImage(emptyStarIMG)
Star1.scale = 0.05

Star2 = createSprite(100,100)
Star2.addImage(emptyStarIMG)
Star2.scale = 0.05

Star3 = createSprite(100,550)
Star3.addImage(emptyStarIMG)
Star3.scale = 0.05

Star4 = createSprite(500,50)
Star4.addImage(emptyStarIMG)
Star4.scale = 0.05

Star5 = createSprite(490,300)
Star5.addImage(emptyStarIMG)
Star5.scale = 0.05

Star6 = createSprite(550,500)
Star6.addImage(emptyStarIMG)
Star6.scale = 0.05

//creating full stars
fullStar1 = createSprite(190,300)
fullStar1.addImage(fullStarIMG)
fullStar1.scale = 0.11
fullStar1.visible = false

fullStar2 = createSprite(100,100)
fullStar2.addImage(fullStarIMG)
fullStar2.scale = 0.11
fullStar2.visible = false

fullStar3 = createSprite(100,550)
fullStar3.addImage(fullStarIMG)
fullStar3.scale = 0.11
fullStar3.visible = false

fullStar4 = createSprite(500,50)
fullStar4.addImage(fullStarIMG)
fullStar4.scale = 0.11
fullStar4.visible = false


fullStar5 = createSprite(490,300)
fullStar5.addImage(fullStarIMG)
fullStar5.scale = 0.11
fullStar5.visible = false

fullStar6 = createSprite(550,500)
fullStar6.addImage(fullStarIMG)
fullStar6.scale = 0.11
fullStar6.visible = false

//creating obstacles
obs1 = createSprite(190, 350)
obs1.addImage(obsIMG)
obs1.scale = 0.1

obs2 = createSprite(100, 160)
obs2.addImage(obsIMG)
obs2.scale = 0.1

obs3 = createSprite(180, 550)
obs3.addImage(obsIMG)
obs3.scale = 0.1

obs4 = createSprite(470, 100)
obs4.addImage(obsIMG)
obs4.scale = 0.1

obs5 = createSprite(450, 350)
obs5.addImage(obsIMG)
obs5.scale = 0.1

obs6 = createSprite(490, 500)
obs6.addImage(obsIMG)
obs6.scale = 0.1
}

function draw() {
  
  background("black");
        
          //making the hot air balloon jump
          if(keyDown("space")) {
            balloon.velocityY = -4 ;
          }
          //making the ballon stop
          balloon.collide(bottomGround)

          //adding gravity
          if(balloon.y < 300){
          balloon.velocityY = balloon.velocityY + 0.5;
          }
          //adding score
          if(balloon.isTouching(Star1)){            
            score = score + 1
            Star1.destroy()
            fullStar1.visible = true
          }
          
          if(balloon.isTouching(Star2)){
            score = score + 1
            Star2.destroy()
            fullStar2.visible = true
          }

          if(balloon.isTouching(Star3)){
            score = score + 1
            Star3.destroy()
            fullStar3.visible = true
          }

          if(balloon.isTouching(Star4)){
            score = score + 1
            Star4.destroy()
            fullStar4.visible = true
          }
          
          if(balloon.isTouching(Star5)){
            score = score + 1
            Star5.destroy()
            fullStar5.visible = true
          }

          if(balloon.isTouching(Star6)){
            score = score + 1
            Star6.destroy()
            fullStar6.visible = true
          }

         

          if(keyDown(RIGHT_ARROW)){
            balloon.x = balloon.x + 2
          }

          if(keyDown(LEFT_ARROW)){
            balloon.x = balloon.x - 2
          }                    

        drawSprites();

        textSize(20)
          text("score: " + score, 10, 20)

          //Winning
          textSize(50)
          if(score === 6){
            text("You Win", 200, 300)
            gameWinSound.play()
            balloon.destroy()
          }
        /*  if (gameWinSound.isPlaying()) {
            // .isPlaying() returns a boolean
            gameWinSound.stop();
          } else {
            gameWinSound.play();
          }*/

          //loosing
          if(balloon.isTouching(obs1)||balloon.isTouching(obs2) ||balloon.isTouching(obs3) || balloon.isTouching(obs4) || balloon.isTouching(obs5) || balloon.isTouching(obs6)){
           isOver = true
           gameOverSound.play()
          }

          if(isOver === true){
            text("You Lose, Try Again", 100, 300)
            balloon.destroy()
          }

}