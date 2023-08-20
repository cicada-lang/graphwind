import { addExampleFormulas } from "./addExampleFormulas"
import { animate } from "./animate"
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

  addExampleFormulas(state.formulas)

  trackMouse(state.mouse)
  animate(ctx, state)
}
