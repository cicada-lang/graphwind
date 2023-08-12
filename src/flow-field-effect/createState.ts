import { State } from "./State.js"
import { createGradient } from "./createGradient.js"

export function createState(
  ctx: CanvasRenderingContext2D,
  options: {
    width: number
    height: number
    mouse: { x: number; y: number }
  },
): State {
  ctx.strokeStyle = "black"
  ctx.lineWidth = 0.5

  options.mouse.x = options.width / 2
  options.mouse.y = options.height / 2

  const gradient = createGradient(ctx, options)

  ctx.strokeStyle = gradient

  return {
    ...options,

    lastTime: 0,
    interval: 1000 / 60,
    timer: 0,

    cellSize: 13,

    radius: 0,
    radiusVelocity: 0.03,
    radiusLimit: 25,

    zoom: 0.01,
  }
}
