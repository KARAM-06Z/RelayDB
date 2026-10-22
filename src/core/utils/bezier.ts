function calculateCubicBezierPath(x1: number, y1: number, x2: number, y2: number): string {
  const dx = Math.abs(x2 - x1)
  const curvature = Math.max(dx * 0.5, 40)

  const cx1 = x1 + curvature
  const cy1 = y1
  const cx2 = x2 - curvature
  const cy2 = y2

  return `M ${x1} ${y1} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${x2} ${y2}`
}

export { calculateCubicBezierPath }
