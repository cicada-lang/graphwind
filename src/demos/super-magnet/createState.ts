import { State } from "./State"

export function createState(
  ctx: CanvasRenderingContext2D,
  options: {
    width: number
    height: number
    mouse: { x: number; y: number }
  },
): State {
  ctx.strokeStyle = "black"
  ctx.lineWidth = 2

  options.mouse.x = options.width / 2
  options.mouse.y = options.height / 2

  return {
    ...options,

    cellSize: 13,
  }
}
