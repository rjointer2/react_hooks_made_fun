

import { useLayoutEffect, useMemo, useState } from "react";
import { controller } from "./lib/controller";
import { me } from "./lib/player";
import { BasePlayerInterface } from "./lib/typeDef";
import emulateGame from "./lib/emulateGame";
import { BasePlayerModel } from "./lib/baseEnemyModel";
import { easy, flyer, hard, jumper, jumper2, medium } from "./lib/enemyTypes";
import { physics } from "./lib/physics";
import { enemyPhysics } from "./lib/enemyPhysics";
import { enemyController } from "./lib/enemyControls";



export default function Game() {

    const [stop, setStop] = useState(false)
    const [range, setRange] = useState(0);
    const [ frame, setFrame ] = useState(0);
    const [ player, updatePlayer ] = useState(me);
    const [ diff, setDiff ] = useState(200);
 
    const [enemies, setEnemies] = useState<Array<BasePlayerInterface>>([])
    console.log(enemies)

    //useSpawnEnemies(frame, setEnemies)

    // This is techincally isn't needed aand is a hair split in opping the performance
    const context = useMemo(() => {
      const canvas = document.querySelector('canvas') as HTMLCanvasElement
      const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
      return ctx
    }, [])
  
    useLayoutEffect(() => {

      const test = setTimeout(() => { 
        context.fillStyle = '#4e5766';
        context.fillRect(0, 0, 320, 180);
        
        emulateGame(enemies, context, setEnemies, player)

        if(frame > 50 ) {

          const array = [ flyer ];

          if( frame % 1000 === 0 ) {
            setDiff(v => v - 1)
            if(range < array.length) {
              setRange(v => v + 1)
            }
          }
          if(frame % diff === 1) {
            setEnemies((arr) => [ 
                ...arr, 
                new BasePlayerModel(array[Math.floor(Math.random() * range)])
            ])
        }
        }
        setFrame(f => f+1)
      }, 16.7)

      if(stop) {
        clearTimeout(test)
      }

      const emitKey = (e: KeyboardEvent) => { controller(player, e.code) }
      window.addEventListener('keydown', emitKey)

      
  

      return () => {
        clearTimeout(test)
        window.removeEventListener('keydown', emitKey)
      }
      
    })  
  
  
    return (
      <div>
        {frame} <br/>
        <button onClick={() => setStop(s => !s)} >
          Stop Game
        </button>
        
      </div>
    )
  
}