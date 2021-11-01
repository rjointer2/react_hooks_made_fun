
import { BaseModelInterface } from "../typeDef";

export const animateEnemies = ( 
    context: CanvasRenderingContext2D,
    enemy: BaseModelInterface, 
    frame: number,

    cols: number,
    sheetWidth: number,
) => {

    const enemySprite = document.createElement('img');
    enemySprite.src = enemy.spriteSrc;

    const currentFrame = frame % cols;
    const width = sheetWidth / cols;
    const srcX = currentFrame * width;

    context.drawImage(
        enemySprite, srcX, 0, 
     // w   h  
        48, 48, 
        enemy.x, enemy.y, 
        enemy.width, enemy.height
    )

}