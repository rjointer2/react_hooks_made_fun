

import { useLayoutEffect, useMemo, useState } from "react";

export default function Game() {

    const [ state, setState ] = useState(0);
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
    
        const test1 = (e: KeyboardEvent) => {
          setState(s =>  s + 1)
          console.log(e)
        }
  
        window.addEventListener('keydown', test1)
  
        return () => {
          clearTimeout(test)
          window.removeEventListener('keydown', test1)
        }
      
    })  
  
  
    return (
      <div>
        {state} <br/>
        {frame} <br/>
        
      </div>
    )
  
}