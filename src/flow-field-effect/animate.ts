import { State } from "./State.js"
import { drawLine } from "./drawLine.js"

export function animate(
  ctx: CanvasRenderingContext2D,
  state: State,
  currentTime?: number,
): void {
  currentTime = currentTime || 0
  const deltaTime = currentTime - state.lastTime
  state.lastTime = currentTime

  if (state.timer > state.interval) {
    ctx.clearRect(0, 0, state.width, state.height)

    state.radius += state.radiusVelocity
    if (state.radius > state.radiusLimit || state.radius < -state.radiusLimit) {
      state.radiusVelocity *= -1
    }

    for (let x = state.cellSize; x < state.width; x += state.cellSize) {
      for (let y = state.cellSize; y < state.height; y += state.cellSize) {
        const angle =
          (Math.cos(x * state.zoom) + Math.sin(y * state.zoom)) * state.radius
        drawLine(ctx, state, angle, x, y)
      }
    }

    state.timer = 0
  } else {
    state.timer += deltaTime
  }

  requestAnimationFrame((time) => animate(ctx, state, time))
}
