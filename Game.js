class Game{
     constructor(){

     }

getState(){
   var gameStateref = database.ref('gameState');
   gameStateref.on("value", function(data){
       gameState = data.val();

   })
}

update(state){
    database.ref('/').update({
        gameState:state
    })
}

async start(){
    if(gameState===0){
        player = new Player();
        var playerCountref = await database.ref('playerCount').once("value");
        if (playerCountref.exists()){
            playerCount = playerCountref.val();
            player.getCount();
        }


        
        form = new Form();
        form.display();
        
    }

    car1 = createSprite(300,360);
    car2 = createSprite(500,360);
    car3 = createSprite(700,360);
    car4 = createSprite(900,360);

    cars = [car1,car2,car3,car4];
}

play(){
    form.hide();
    //text("Game starts...3 2 1",120,100);
    Player.getplayerinfo();

   
    if (allplayers !== undefined){
      //  var displayposition = 130;

        var index = 0;
        var x= 0,y;

        for(var plr in allplayers){
            index = index +1;
            x = x+200;
            y = displayHeight - allplayers[plr].distance;
            cars[index - 1].x =x;
            cars[index - 1].y = y;

            if(index === player.index){
                cars[index-1].shapeColor = "red";
                camera.position.x = displayWidth/2;
                camera.position.y = cars[index-1].y;
                
            }
           

          //  displayposition = displayposition+30;
       // text(allplayers[plr].name+": " + allplayers[plr].distance, 120,displayposition);   
        }       
    }

    if (keyIsDown(UP_ARROW) && player.index !== null){

        player.distance = player.distance+10;
        player.update();

    }
    drawSprites();
}
    }