
import { BasePlayerModel } from "./player";
import { BasePlayerInterface } from "./typeDef";

export const updatePosition = ( 
    player: BasePlayerInterface
) => {
    player.y_velocity += player.weight;
    player.y += player.y_velocity;
}

export const updateCanvas = ( 
    context: CanvasRenderingContext2D, 
    player: BasePlayerModel 
) => {

    context.beginPath();
    // we have to give the canvas gray filling
    context.rect(player.x, player.y, player.width, player.height);
    
    context.fillStyle = player.color;// layer color: ;
    context.fill(); 

}

export const fly = (
    player: 
) => {

}