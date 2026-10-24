import { useEffect, useRef, type ReactNode } from 'react'
import { useCanvasStore } from '../store/canvas-store'

type TInfiniteCanvasProps = {
  children?: ReactNode
}

function InfiniteCanvas({ children }: TInfiniteCanvasProps) {
  const panX = useCanvasStore(s => s.viewport.panX)
  const panY = useCanvasStore(s => s.viewport.panY)
  const scale = useCanvasStore(s => s.viewport.scale)
  const pan = useCanvasStore(s => s.pan)
  const zoom = useCanvasStore(s => s.zoom)

  const containerRef = useRef<HTMLDivElement>(null)
  const isPanningRef = useRef(false)
  const lastPosRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      const delta = -e.deltaY * 0.001
      zoom(delta, { clientX: e.clientX, clientY: e.clientY })
    }

    container.addEventListener('wheel', handleWheel, { passive: false })
    return () => {
      container.removeEventListener('wheel', handleWheel)
    }
  }, [zoom])

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0 && e.button !== 1) return

    const isCard = (e.target as HTMLElement).closest('[data-canvas-node="true"]')
    if (isCard && e.button === 0) return

    isPanningRef.current = true
    lastPosRef.current = { x: e.clientX, y: e.clientY }
    e.currentTarget.setPointerCapture(e.pointerId)
  }

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isPanningRef.current) return

    const dx = e.clientX - lastPosRef.current.x
    const dy = e.clientY - lastPosRef.current.y
    lastPosRef.current = { x: e.clientX, y: e.clientY }

    pan(dx, dy)
  }

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isPanningRef.current) {
      isPanningRef.current = false
      try {
        e.currentTarget.releasePointerCapture(e.pointerId)
      } catch {
        // Ignore if pointer capture was already lost
      }
    }
  }

  const gridSize = 24 * scale

  return (
    <div
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      className="canvas"
      style={{
        backgroundSize: `${gridSize}px ${gridSize}px`,
        backgroundPosition: `${panX}px ${panY}px`
      }}
    >
      <div
        className="canvas-content"
        style={{
          transform: `translate3d(${panX}px, ${panY}px, 0) scale(${scale})`
        }}
      >
        <div className="children">{children}</div>
      </div>
    </div>
  )
}

export { InfiniteCanvas }
