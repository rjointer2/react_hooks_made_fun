

import { useLayoutEffect, useMemo, useState } from "react";
import { key } from "../lib/typeDef";

export default function Game() {

    const [ state, setState ] = useState< KeyboardEvent["code"] | string>('');
    const [ frame, setFrame ] = useState(0);
  
    // This is techincally isn't needed aand is a hair split in opping the performance
    const context = useMemo(() => {
      const canvas = document.querySelector('canvas') as HTMLCanvasElement
      const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
      return ctx
    }, [])
  
    useLayoutEffect(() => {
  
        context.fillStyle = '#4e5766';
        context.fillRect(0, 0, 320, 180);
  
        const test = setTimeout(() => {
          setFrame(f => f+1)
        }, 16.7)
    
        const emitKey: key = (e) => {
          setState(s =>  s + 1)
          console.log(e)
        }
  
        window.addEventListener('keydown', emitKey)
  
        return () => {
          clearTimeout(test)
          window.removeEventListener('keydown', emitKey)
        }
      
    })  
  
  
    return (
      <div>
        {state} <br/>
        {frame} <br/>
        
      </div>
    )
  
}