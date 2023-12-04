  var boxer,boxer_stance,backgroundImg;
var karateKid,karateKid_stance;
var gameState,playerCount,database;
var formObject, gameObject,playerObject;
var karateKidJump1,karateKidJump2,karateKidIpunchedyouLol,karateKidImgonnakickYouOntherightside,karateKidImgonnakickYouOntheleftside,
karateKidLeftsidekick,karateKidRightsidekick,karateKidSquat,karateKid_stance
var fighter1,fighter2,allfighters;
var fighters = [];

function preload(){
backgroundImg=loadImage("background.png")

karateKidJump1=loadImage("jump 1.gif")
//karateKidJump2=loadImage("karate_kid_jump_2.gif")
karateKidIpunchedyouLol=loadImage("karate_kid_i_punched_you_lol.gif")
karateKidImgonnakickYouOntherightside=loadImage("karate_kid_im_gonna_kick_you_on_the_rightside.gif")
karateKidImgonnakickYouOntheleftside=loadImage("karate_kid_ima_gonna_kick_you_on_the_leftside.gif")
karateKidLeftsidekick=loadImage("karate_kid_leftside_kick.gif")
karateKidRightsidekick=loadImage("karate_kid_rightside_kick.gif")
karateKidSquat=loadImage("karate_kid_squat.gif")
karateKid_stance=loadImage("karate_kid_stance.gif")

}




function setup() {
  createCanvas(windowWidth,windowHeight);
  background(backgroundImg)
  database=firebase.database()
  gameState=0;
  gameObject =new Game()
  gameObject.getState()
  gameObject.start()
  
}

function draw() 
{
  background("yellow");
  if(playerCount==2){
    gameObject.update(1)
  }
  if(gameState==1){
    gameObject.play()
  }

  drawSprites();

}

