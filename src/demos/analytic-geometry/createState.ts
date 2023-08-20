import { State } from "./State.ts"
import { createCamera } from "./camera/createCamera.ts"

export function createState(canvas: HTMLCanvasElement): State {
  const camera = createCamera()

  const mouse = {
    x: 0,
    y: 0,
    isDown: false,
  }

  mouse.x = canvas.width / 2
  mouse.y = canvas.height / 2

  return {
    canvas,
    camera,
    mouse,
    entities: new Map(),
    formulas: new Map(),
  }
}
