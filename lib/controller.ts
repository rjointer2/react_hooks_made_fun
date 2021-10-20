import { BasePlayerInterface } from "./basePlayerModel";

export const controller = (player: BasePlayerInterface, keycode: KeyboardEvent["code"] ) => {
    
    if( keycode === "ArrowUp" && player.jumping == false) {
        player.y_velocity -= 20;
        player.jumping = true;
    }

}