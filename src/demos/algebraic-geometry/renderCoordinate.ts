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
  ctx.strokeStyle = "hsla(240, 100%, 50%, 50%)"
  ctx.lineWidth = 1

  for (let x = 0; x < 100; x += 1) {
    ctx.beginPath()
    ctx.moveTo(x * camera.unit, 0)
    ctx.lineTo((x + 1) * camera.unit, 0)
    ctx.moveTo(x * camera.unit, 0)
    ctx.lineTo(x * camera.unit, 8)
    ctx.stroke()
  }

  ctx.restore()
}
