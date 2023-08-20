import { State } from "../State"
import { adjustCamera } from "../camera/adjustCamera"
import { Id } from "../id/Id"
import { Formula } from "./Formula"

export function renderFormula(
  ctx: CanvasRenderingContext2D,
  state: State,
  id: Id,
  formula: Formula,
): void {
  ctx.save()

  const [width] = adjustCamera(ctx, state.camera)

  ctx.strokeStyle = formula.color
  ctx.lineWidth = 1 / 20

  for (let x = -width / 2; x < width / 2 + 1; x += formula.precision) {
    const x0 = x
    const x1 = x + formula.precision
    const y0 = formula.f(x0)
    const y1 = formula.f(x1)
    ctx.beginPath()
    ctx.moveTo(x0, y0)
    ctx.lineTo(x1, y1)
    ctx.stroke()

    // updateMouseDistance(state, id, { position: []})
  }

  ctx.restore()
}
