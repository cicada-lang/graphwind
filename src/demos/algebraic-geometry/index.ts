import { addExampleFormulas } from "./addExampleFormulas.ts"
import { animate } from "./animate.ts"
import { createState } from "./createState.ts"
import { resizeCanvas } from "./resizeCanvas.ts"
import { trackMouse } from "./trackMouse.ts"

export function main() {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement
  resizeCanvas(canvas)

  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D
  const state = createState(canvas)
  state.camera.position = [3, 3]

  addExampleFormulas(state.formulas)

  trackMouse(state.mouse)
  animate(ctx, state)
}
