
import { BaseModelInterface } from "../typeDef"

export const controller = (
    keyCode: KeyboardEvent['code'],
    player: BaseModelInterface
) => {
    if(keyCode === "ArrowUp" && player.jumping == false ) {
        player.y_velocity -= 12;
        player.jumping = true;
        console.log(player.jumping)
    }
}