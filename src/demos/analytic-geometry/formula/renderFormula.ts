import { vectorDistance } from "../../../utils/vector"
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
  ctx.lineWidth = id === state.hovered ? 1 / 8 : 1 / 20

  let xmin = 0
  let ymin = 0
  let distance = Infinity
  for (let x = -width / 2; x < width / 2 + 1; x += formula.precision) {
    const x0 = x
    const x1 = x + formula.precision
    const y0 = formula.f(x0)
    const y1 = formula.f(x1)
    ctx.beginPath()
    ctx.moveTo(x0, y0)
    ctx.lineTo(x1, y1)
    ctx.stroke()

    const newDistance = vectorDistance(state.mouse.position, [x0, y0])
    if (newDistance < distance) {
      xmin = x0
      ymin = y0
      distance = newDistance
    }
  }

  state.mouseDistances.set(id, {
    position: [xmin, ymin],
    distance,
  })

  ctx.restore()
}
