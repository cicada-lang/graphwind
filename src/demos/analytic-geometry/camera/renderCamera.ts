import { Camera } from "./Camera"
import { adjustCamera } from "./adjustCamera"
import { moveToCamera } from "./moveToCamera"

export function renderCamera(
  ctx: CanvasRenderingContext2D,
  camera: Camera,
): void {
  ctx.save()

  adjustCamera(ctx, camera)
  moveToCamera(ctx, camera)

  ctx.strokeStyle = "hsla(20, 100%, 50%, 50%)"
  ctx.lineWidth = 1 / 20

  ctx.beginPath()
  ctx.moveTo(0, 0)
  ctx.lineTo(0, 1)
  ctx.moveTo(0, 0)
  ctx.lineTo(1, 0)
  ctx.moveTo(0, 0)
  ctx.lineTo(0, -1)
  ctx.moveTo(0, 0)
  ctx.lineTo(-1, 0)
  ctx.stroke()

  ctx.restore()
}
