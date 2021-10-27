import { Dispatch, SetStateAction } from "react";
import { controller } from "./controller";
import { enemyController } from "./enemyControls";
import { enemyPhysics } from "./enemyPhysics";
import { physics } from "./physics";
import { BasePlayerInterface } from "./typeDef";


export default function emulateGame(
    enemies: Array<BasePlayerInterface>, 
    context: CanvasRenderingContext2D, 
    setEnemies: Dispatch<SetStateAction<BasePlayerInterface[]>>, 
    player: BasePlayerInterface
) {

    

    physics(player, context);
    enemies.forEach((enemy) => {
        enemyPhysics(enemy, context);
        enemyController(enemy, setEnemies, player)
    })

}