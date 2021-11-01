
import { BaseModelInterface } from "../typeDef";

export const animatePlayer = (
    context: CanvasRenderingContext2D, 
    player: BaseModelInterface, 
    frame: number
) => {

    const playerSprite = document.createElement('img');
    playerSprite.src = player.spriteSrc;


    const cols = 5;
    const sheetWidth = 240;

    const currentFrame = frame % cols;
    const width = sheetWidth / cols;
    const srcX = currentFrame * width;

    // we have to give the canvas gray filling
    context.rect(player.x, player.y, player.width, player.height);
    context.drawImage(
        playerSprite, srcX, 0, 
     // w   h  
        48, 48, 
        player.x, player.y, 
        player.width, player.height
    )

}