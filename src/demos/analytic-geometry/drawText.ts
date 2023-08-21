import { Vector, vectorAdd } from "../../utils/vector"
import { State } from "./State"

// Assume the `adjustCamera` is called.

export function drawText(
  state: State,
  text: string,
  position: Vector,
  options: {
    fontScale: number
    padding?: Vector
  },
): void {
  const { fontScale, padding } = options

  state.ctx.save()

  state.ctx.scale(
    (1 / state.camera.scale) * fontScale,
    (-1 / state.camera.scale) * fontScale,
  )

  state.ctx.textBaseline = "hanging"

  if (padding) {
    position = [position[0] + padding[0], position[1] - padding[1]]
  }

  state.ctx.fillText(
    text,
    (position[0] * state.camera.scale) / fontScale,
    (-[position[1]] * state.camera.scale) / fontScale,
  )

  state.ctx.restore()
}
