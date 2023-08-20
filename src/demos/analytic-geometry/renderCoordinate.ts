import { State } from "./State"
import { adjustCamera } from "./camera/adjustCamera"

export function renderCoordinate(
  ctx: CanvasRenderingContext2D,
  state: State,
): void {
  ctx.save()

  const [width, height] = adjustCamera(ctx, state.camera)

  ctx.strokeStyle = "hsla(240, 100%, 50%, 50%)"
  ctx.lineWidth = 1 / 30

  for (let x = -width / 2; x <= width / 2; x += 1) {
    ctx.beginPath()
    ctx.moveTo(x, 0)
    ctx.lineTo(x + 1, 0)
    ctx.moveTo(x, 0)
    ctx.lineTo(x, 1 / 5)
    ctx.stroke()
  }

  for (let y = -height / 2; y <= height / 2; y += 1) {
    ctx.beginPath()
    ctx.moveTo(0, y)
    ctx.lineTo(0, y + 1)
    ctx.moveTo(0, y)
    ctx.lineTo(1 / 5, y)
    ctx.stroke()
  }

  ctx.restore()
}
