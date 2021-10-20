

import { useLayoutEffect, useMemo, useState } from "react";
import { physics } from "../lib/animate";
import { basePlayerModel } from "../lib/basePlayerModel";
import { controller } from "../lib/controller";

export default function Game() {

    const [ frame, setFrame ] = useState(0);
    const [ player, updatePlayer ] = useState(basePlayerModel);
  
    // This is techincally isn't needed aand is a hair split in opping the performance
    const context = useMemo(() => {
      const canvas = document.querySelector('canvas') as HTMLCanvasElement
      const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
      return ctx
    }, [])
  
    useLayoutEffect(() => {
  
        context.fillStyle = '#4e5766';
        context.fillRect(0, 0, 320, 180);

        const emitKey = (e: KeyboardEvent) => {
          controller(player, e.code)
        }
  
        physics(player, context)
        window.addEventListener('keydown', emitKey)

        const test = setTimeout(() => {
          setFrame(f => f+1)
        }, 16.7)
    
  
        return () => {
          clearTimeout(test)
          window.removeEventListener('keydown', emitKey)
        }
      
    })  
  
  
    return (
      <div>
        {frame} <br/>
        
      </div>
    )
  
}