import { State } from "./State"
import { adjustCamera } from "./camera/adjustCamera"

export function renderInfo(ctx: CanvasRenderingContext2D, state: State): void {
  ctx.save()

  const [width, height] = adjustCamera(ctx, state.camera)

  ctx.save()
  ctx.scale(1 / 10, -1 / 10)
  ctx.fillText(state.mouse.position[0].toString(), 10, -3 * 10 + 10)
  ctx.fillText(state.mouse.position[1].toString(), 10, -3 * 10 + 20)
  ctx.restore()

  let i = 0
  for (const [id, mouseDistance] of state.mouseDistances) {
    ctx.font = "19px sans-serif;"
    ctx.save()
    ctx.scale(1 / 10, -1 / 10)
    ctx.fillText(id, 0, i * 10)
    ctx.fillText(mouseDistance.distance.toString(), 10, i * 10)
    ctx.fillText(mouseDistance.position[0].toString(), 10, i * 10 + 10)
    ctx.fillText(mouseDistance.position[1].toString(), 10, i * 10 + 20)
    ctx.restore()
    i += 3
  }

  ctx.restore()
}
