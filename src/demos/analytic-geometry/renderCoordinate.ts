import { State } from "./State"
import { Camera } from "./camera"
import { adjustCamera } from "./camera/adjustCamera"

export function renderCoordinate(
  ctx: CanvasRenderingContext2D,
  state: State,
  camera: Camera,
): void {
  ctx.save()

  const [width, height] = adjustCamera(ctx, state.camera)

  ctx.strokeStyle = "hsla(240, 100%, 50%, 50%)"
  ctx.lineWidth = 1 / 30

  const left = -width / 2 - camera.position[0]
  const right = width / 2 + camera.position[0]

  for (let x = left; x < right; x += 1) {
    ctx.beginPath()
    ctx.moveTo(x, 0)
    ctx.lineTo(x + 1, 0)
    ctx.moveTo(x, 0)
    ctx.lineTo(x, 1 / 5)
    ctx.stroke()
  }

  const bottom = -height / 2 - camera.position[1]
  const up = height / 2 + camera.position[1]

  for (let y = bottom; y < up; y += 1) {
    ctx.beginPath()
    ctx.moveTo(0, y)
    ctx.lineTo(0, y + 1)
    ctx.moveTo(0, y)
    ctx.lineTo(1 / 5, y)
    ctx.stroke()
  }

  ctx.restore()
}
