import type { TPosition } from '../meta/t-shared'
import type { TViewportState } from '../meta/t-viewport-state'

function screenToWorld(clientX: number, clientY: number, viewport: TViewportState): TPosition {
  return {
    x: (clientX - viewport.panX) / viewport.scale,
    y: (clientY - viewport.panY) / viewport.scale,
  }
}

function worldToScreen(worldX: number, worldY: number, viewport: TViewportState): TPosition {
  return {
    x: worldX * viewport.scale + viewport.panX,
    y: worldY * viewport.scale + viewport.panY,
  }
}

export { screenToWorld, worldToScreen }
