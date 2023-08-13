import { drawLine } from "../../utils/drawLine.js"
import { State } from "./State.js"

export function animate(ctx: CanvasRenderingContext2D, state: State): void {
  ctx.clearRect(0, 0, state.width, state.height)

  for (let x = state.cellSize; x < state.width; x += state.cellSize) {
    for (let y = state.cellSize; y < state.height; y += state.cellSize) {
      drawLine(ctx, { x, y }, state.mouse)
    }
  }

  requestAnimationFrame(() => animate(ctx, state))
}
