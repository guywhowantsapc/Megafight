class Game{
    constructor(){}
    getState() {
        var gameStateRef = database.ref("gameState");
        console.log(gameStateRef)
        gameStateRef.on("value", (data)=> {
          console.log(data.val() +"gameState val in db")
          gameState = data.val();
        });
      }
      update(state) {
        database.ref("/").update({
          gameState: state
        });
      }

      async start() {
        if(gameState === 0){
          playerObject = new Player();
          var playerCountRef = await database.ref('playerCount').once("value");
          if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            playerObject.getPlayerCount();
          }
          formObject = new Form()
          formObject.display();
        }


       
      }

      play(){
        formObject.hide();
          background(backgroundImg)

        fighter1 = createSprite(width/2-100,height/3)
        fighter1.addImage("karate kid stance",karateKid_stance)

        fighter2 = createSprite(width/2+100,height/3)
        fighter2.addImage("karate kid stance",karateKid_stance)
          
          fighters=[fighter1,fighter2]
          drawSprites()
        }
  
}