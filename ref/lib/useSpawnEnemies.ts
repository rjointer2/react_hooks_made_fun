import { Dispatch, SetStateAction, useRef, useState } from "react"
import { BasePlayerModel } from "./baseEnemyModel";
import { easy, hard, medium } from "./enemyTypes";
import { BasePlayerInterface } from "./typeDef";


 
export const useSpawnEnemies = ( frame: number, setEnemyArray: Dispatch<SetStateAction<BasePlayerInterface[]>>,  ) => {

    const array = [ easy, medium, medium, hard, hard, easy ];
 
    if(frame > 50 ) {
        if(frame % 100 === 1) {
        
            setEnemyArray((arr) => [ 
                ...arr, 
                new BasePlayerModel(easy)
            ])
        }
    }
 

}