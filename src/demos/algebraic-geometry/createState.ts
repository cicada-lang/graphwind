import { State } from "./State.ts"

export function createState(canvas: HTMLCanvasElement): State {
  const mouse = {
    x: 0,
    y: 0,
    isDown: false,
  }

  mouse.x = canvas.width / 2
  mouse.y = canvas.height / 2

  return {
    canvas,
    mouse,
    entities: new Map(),
    formulas: new Map(),
  }
}
