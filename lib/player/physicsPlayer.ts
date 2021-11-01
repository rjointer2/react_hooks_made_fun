import { BaseModelInterface } from "../typeDef";

export const physicsPlayer = (
    player: BaseModelInterface, 
) => {

    // physics

    // velocity is 1.5 every frame
    player.y_velocity += 0.9; // gravity of the canvas
    player.x += player.x_velocity;
    player.y += player.y_velocity;

    // friction -> slow gradually

    player.x_velocity *= 0.9;
    player.y_velocity *= 0.9;

    // ground detection

    if ( player.y > 100 ) {
        player.jumping = false;
        player.y = 100;

        // once the player hits the ground, your veclocity should stop
        // instantly
        player.y_velocity = 0;

    }
    

}