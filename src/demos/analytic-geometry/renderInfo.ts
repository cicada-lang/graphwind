import { State } from "./State"
import { adjustCamera } from "./camera/adjustCamera"

export function renderInfo(ctx: CanvasRenderingContext2D, state: State): void {
  ctx.save()

  const [width, height] = adjustCamera(ctx, state.camera)

  let i = 0
  for (const [id, mouseDistance] of state.mouseDistances) {
    ctx.font = "19px sans-serif;"
    ctx.save()
    ctx.scale(1 / 10, -1 / 10)
    ctx.fillText(id, 0, i * 10)
    ctx.fillText(mouseDistance.distance.toString(), 10, i * 10)
    ctx.restore()
    i++
  }

  ctx.restore()
}
