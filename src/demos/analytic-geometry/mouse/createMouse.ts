import { Mouse } from "./Mouse"

export function createMouse(canvas: HTMLCanvasElement): Mouse {
  return {
    x: canvas.width / 2,
    y: canvas.height / 2,
    isDown: false,
  }
}
