import { BasePlayerInterface } from "./typeDef";


export const physics = ( player: BasePlayerInterface,  context: CanvasRenderingContext2D ) => {


    context.beginPath();
    // we have to give the canvas gray filling
    context.rect(player.x, player.y, player.width, player.height);
    
    context.fillStyle = player.color;// layer color: ;
    context.fill();



    // physics

    // velocity is 1.5 every frame
    player.y_velocity += 0.4; // gravity of the canvas
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