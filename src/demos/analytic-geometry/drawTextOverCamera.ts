import { Vector, vectorAdd } from "../../utils/vector"
import { State } from "./State"
import { drawText } from "./drawText"

// Assume the `adjustCamera` is called.

export function drawTextOverCamera(
  ctx: CanvasRenderingContext2D,
  state: State,
  text: string,
  position: Vector,
  options: {
    fontScale: number
  },
): void {
  drawText(
    ctx,
    state,
    text,
    vectorAdd(position, state.camera.position),
    options,
  )
}
