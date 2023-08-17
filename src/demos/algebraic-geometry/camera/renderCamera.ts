import { State } from "../State"
import { Camera } from "./Camera"

export function renderCamera(
  ctx: CanvasRenderingContext2D,
  state: State,
  camera: Camera,
): void {
  ctx.save()
  ctx.translate(state.canvas.width / 2, state.canvas.height / 2)
  ctx.scale(1, -1)
  ctx.strokeStyle = "hsla(20, 100%, 50%, 50%)"
  ctx.lineWidth = 1

  ctx.beginPath()
  ctx.moveTo(0, 0)
  ctx.lineTo(0, camera.unit)
  ctx.moveTo(0, 0)
  ctx.lineTo(camera.unit, 0)
  ctx.moveTo(0, 0)
  ctx.lineTo(0, -camera.unit)
  ctx.moveTo(0, 0)
  ctx.lineTo(-camera.unit, 0)
  ctx.stroke()

  ctx.restore()
}
