import { State } from "./State"
import { createCamera } from "./camera/createCamera"

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
    formulas: new Map(),
  }
}
