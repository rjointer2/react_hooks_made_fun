
import { BasePlayerModel } from "./player";
import { BasePlayerInterface } from "./typeDef";

export const updatePosition = ( 
    player: BasePlayerInterface,
    angle: number
) => {
    let curve = Math.sin(angle) * 20
    if( player.y > 180 - ( player.height * 3 ) + curve){
        player.y = 180 - ( player.height * 3 ) + curve; // the max height of the player can up
        player.y_velocity = 0
    } else {
        player.y_velocity += player.weight; // the weight the player increases downards velocity
        player.y_velocity *= 0.9; // how fast to lift
        player.y += player.y_velocity; // the y coord will update in positon of the speed which the player is falling
    }

    if(player.y < 0 + player.height ) {
        player.y = 0 + player.height // grounded over the canvas plus the height
        player.y_velocity = 0
    }

}


export const updateCanvas = ( 
    context: CanvasRenderingContext2D, 
    player: BasePlayerModel, 
    frame: number
) => {

   

    const playerSprite = document.createElement('img');
    playerSprite.src = './Northerner_walk.png';
    console.log(playerSprite.height);

    const cols = 5;
    const sheetWidth = 240;

    const currentFrame = frame % cols;

    const width = sheetWidth / cols;
    const height = 32;

    const srcX = currentFrame * width;



    context.beginPath();
    // we have to give the canvas gray filling
    //context.rect(player.x, player.y, player.width, player.height);
    context.drawImage(
        playerSprite, srcX, 0, 
     // w   h  
        48, 48, 
        player.x, player.y, 
        player.width, player.height
    )
    
    context.fillStyle = player.color;// layer color: ;
    context.fill(); 

}

export const fly = (
    player: BasePlayerInterface
) => {
    player.y_velocity -= 2;
}