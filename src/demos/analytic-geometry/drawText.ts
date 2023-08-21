import { Vector } from "../../utils/vector"
import { State } from "./State"

// Assume the `adjustCamera` is called.

export function drawText(
  ctx: CanvasRenderingContext2D,
  state: State,
  text: string,
  position: Vector,
  options: {
    fontScale: number
  },
): void {
  const { fontScale } = options

  ctx.save()

  ctx.scale(
    (1 / state.camera.scale) * fontScale,
    (-1 / state.camera.scale) * fontScale,
  )

  ctx.textBaseline = "hanging"

  ctx.fillText(
    text,
    (position[0] * state.camera.scale) / fontScale,
    (-position[1] * state.camera.scale) / fontScale,
  )

  ctx.restore()
}
