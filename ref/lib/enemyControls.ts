import { Dispatch, SetStateAction, useState } from "react";
import { BasePlayerModel } from "./baseEnemyModel";
import { BasePlayerInterface } from "./typeDef";


export const enemyController = (
    enemy: BasePlayerInterface,
    setEnemies: Dispatch<SetStateAction<BasePlayerInterface[]>>,
    player: BasePlayerModel
) => {

    if(enemy.name === "easy") {
        enemy.x = enemy.x - 3
    }

    if(enemy.name === "medium") {
        enemy.x = enemy.x - 5
    }

    if(enemy.name === "jumper") {
        enemy.x = enemy.x - 4;
        if( enemy.x < 225 && enemy.jumping == false) {
            enemy.y_velocity -= 20;
            enemy.jumping = true;
        }
    }

    if(enemy.name === "jumper2") {
        enemy.x = enemy.x - 4;
        if( enemy.x < 225 && enemy.jumping == false) {
            enemy.y_velocity -= 20;
            enemy.jumping = true;
        }
    }

    if(enemy.name === "hard") {
        enemy.y = 88
        enemy.x = enemy.x - 4
    }

    if(enemy.name === "flyer") {
        
    }

    if(enemy.x < -32) {
        setEnemies((enemies) => {
            const i = enemies.indexOf(enemy);
            return enemies.filter((_, ind) => ind !== i  )
        })
    } 

    // lose condition
    if(enemy.y - player.y < 32 && enemy.x - player.x < 32 && enemy.x - player.x > -32 ) {
        console.log( enemy.x )
    }

}