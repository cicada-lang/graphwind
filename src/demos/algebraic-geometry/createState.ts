import { Mouse } from "./Mouse.ts"
import { State } from "./State.ts"

export function createState(
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
  options: {
    mouse: Mouse
  },
): State {
  const { mouse } = options
  mouse.x = canvas.width / 2
  mouse.y = canvas.height / 2

  return {
    canvas,
    mouse,
    unit: 40,
    entities: new Map(),
    formulas: new Map(),
  }
}
