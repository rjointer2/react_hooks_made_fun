

import React, { useLayoutEffect, useMemo, useState } from 'react'

export default function Game() {

    const [ frame, SetFrame ] = useState(0)


    const context = useMemo(() => {
        const canvas = document.querySelector('canvas') as HTMLCanvasElement
        const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
        return ctx
      }, []);


      useLayoutEffect(() => {
          const loop = setTimeout(() => {

            context.fillStyle = '#4e5766';
            context.fillRect(0, 0, 320, 180);

            SetFrame(f => f + 1)

          }, 16.7)

          return () => {
            clearTimeout(loop)
          }
      })

    return (
        <div>
            
        </div>
    )
}
