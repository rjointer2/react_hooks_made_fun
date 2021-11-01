

import React, { useLayoutEffect, useMemo, useState } from 'react'
import { animatePlayer } from '../lib/player/animatePlayer';
import { animateScreen } from '../lib/player/animateScreen';
import { physicsPlayer } from '../lib/player/physicsPlayer';
import { BaseModel } from '../lib/player/spriteModel';
import { controller } from '../lib/player/playerController';
import { animateEnemies } from '../lib/enemies/animateEnemies';
import { Spike_Ice_Enemy } from '../lib/enemies/enemyTypes';


const me = {
  color: "#ff0000",
  name: "jack",
  height: 32,
  width: 32,
  originalHeight: 32,
  x: 20,
  y: 0, 
  jumping: false,
  ducking: false,
  x_velocity: 0,
  y_velocity: 0,
  weight: 1,
  cols: 5,
  spriteWidth: 240,
  spriteSrc: './player/Northerner_walk.png'
}

export default function Game() {
  const red = new BaseModel(me)

    const [ frame, setFrame ] = useState(0);
    const [ angle, setAngle ] = useState(0);
    const [ player, setPlayer ] = useState(red);
    const [ enemies, setEnemies ] = useState<Array<BaseModel>>([])

    const context = useMemo(() => {
      const canvas = document.querySelector('canvas') as HTMLCanvasElement
      const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
      return ctx
    }, []);



    useLayoutEffect(() => {

      const loop = setTimeout(() => {

        context.fillStyle = '#4e5766';
        context.fillRect(0, 0, 320, 180);


        // player 
        physicsPlayer(player);
        animateScreen(context, player)
        animatePlayer(context, player, frame);


        // item physics
        setAngle( a =>  a += 0.1 );


        // enemies
        if(frame % 100 === 0) {
          console.log('test')
          setEnemies(s => [...s, new BaseModel(Spike_Ice_Enemy)])
        }
  
  
        enemies.forEach(enemy => {
          physicsPlayer(enemy)
          animateEnemies(context, enemy, frame, enemy.cols, enemy.spriteWidth);
          enemiesController(enemy)
        })

        // rerender this component
        setFrame( f => f + 1 );


      }, 50)

      const invokeController = (e: KeyboardEvent) => { controller(e.code, player) }
      window.addEventListener('keydown', invokeController)

      return () => {
        window.removeEventListener('keydown', invokeController)
        clearTimeout(loop)
      }
    })

    return (
        <div>
            
        </div>
    )
}
