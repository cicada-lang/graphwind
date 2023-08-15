import { Mouse } from "./Mouse.js"
import { State } from "./State.js"

export function createState(
  ctx: CanvasRenderingContext2D,
  options: {
    width: number
    height: number
    mouse: Mouse
  },
): State {
  ctx.strokeStyle = "black"
  ctx.lineWidth = 2

  options.mouse.x = options.width / 2
  options.mouse.y = options.height / 2

  return {
    ...options,

    unit: 50,
  }
}
