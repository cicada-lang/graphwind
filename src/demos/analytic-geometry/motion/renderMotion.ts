import { vectorDistance } from "../../../utils/vector"
import { State } from "../State"
import { adjustCamera } from "../camera/adjustCamera"
import { Id } from "../id/Id"
import { updateMouseDistance } from "../mouse-distance/updateMouseDistance"
import { Motion } from "./Motion"

export function renderMotion(
  ctx: CanvasRenderingContext2D,
  state: State,
  id: Id,
  motion: Motion,
): void {
  ctx.save()

  adjustCamera(ctx, state.camera)

  ctx.strokeStyle = motion.color
  ctx.lineWidth = 1 / 20

  for (let t = motion.range[0]; t < motion.range[1]; t += motion.precision) {
    const t0 = t
    const t1 = t + motion.precision
    const x0 = motion.x(t0)
    const x1 = motion.x(t1)
    const y0 = motion.y(t0)
    const y1 = motion.y(t1)
    ctx.beginPath()
    ctx.moveTo(x0, y0)
    ctx.lineTo(x1, y1)
    ctx.stroke()

    updateMouseDistance(state, id, {
      position: [x0, y0],
      distance: vectorDistance(state.mouse.position, [x0, y0]),
    })
  }

  ctx.restore()
}
