import { Camera } from "../camera"
import { adjustCamera } from "../camera/adjustCamera"
import { Formula } from "../components/Formula"

export function renderFormula(
  ctx: CanvasRenderingContext2D,
  camera: Camera,
  formula: Formula,
): void {
  ctx.save()

  const [width] = adjustCamera(ctx, camera)

  ctx.lineWidth = 1 / 20

  const delta = 0.01
  for (let x = -width / 2; x < width / 2; x += delta) {
    const x0 = x
    const x1 = x + delta
    const y0 = formula.f(x0)
    const y1 = formula.f(x1)
    ctx.beginPath()
    ctx.moveTo(x0, y0)
    ctx.lineTo(x1, y1)
    ctx.stroke()
  }

  ctx.restore()
}
