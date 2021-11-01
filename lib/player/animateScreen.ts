import { BaseModelInterface } from "../typeDef";

export const animateScreen = (
    context: CanvasRenderingContext2D,
    player: BaseModelInterface
) => {
    context.beginPath();
    context.fillStyle = player.color;// layer color: ;
    context.fill(); 
}