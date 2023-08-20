import { animate } from "./animate"
import { createExampleFormulas } from "./createExampleFormulas"
import { createExampleMotions } from "./createExampleMotions"
import { createState } from "./createState"
import { trackMouse } from "./mouse/trackMouse"
import { resizeCanvas } from "./resizeCanvas"

export function main() {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement
  resizeCanvas(canvas)

  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D
  const state = createState(canvas)

  state.camera.position = [1, 1]
  state.camera.scale = 30

  createExampleFormulas(state)
  createExampleMotions(state)
  trackMouse(state)
  animate(ctx, state)
}
