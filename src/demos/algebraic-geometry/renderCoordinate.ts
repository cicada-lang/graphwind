import colors from "tailwindcss/colors"
import { State } from "./State"
import { Camera } from "./camera"

export function renderCoordinate(
  ctx: CanvasRenderingContext2D,
  state: State,
  camera: Camera,
): void {
  ctx.save()
  ctx.translate(state.canvas.width / 2, state.canvas.height / 2)
  ctx.scale(1, -1)
  ctx.strokeStyle = "hsla(220, 0%, 50%, 50%)"
  ctx.lineWidth = 1

  const delta = 0.01
  for (let x = 0; x < 100; x += delta) {
    const x0 = x
    const x1 = x + delta

    ctx.beginPath()
    ctx.moveTo(x0 * camera.unit, 0)
    ctx.lineTo(x1 * camera.unit, 0)
    ctx.stroke()
  }

  ctx.restore()
}
