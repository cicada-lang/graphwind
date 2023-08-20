import { State } from "./State"
import { createCamera } from "./camera/createCamera"
import { createMouse } from "./mouse/createMouse"

export function createState(canvas: HTMLCanvasElement): State {
  const camera = createCamera()
  const mouse = createMouse(canvas)

  return {
    canvas,
    camera,
    mouse,
    idCounter: 0,
    formulas: new Map(),
    motions: new Map(),
    mouseDistances: new Map(),
  }
}
