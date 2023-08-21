import { State } from "./State"
import { adjustCamera } from "./camera/adjustCamera"
import { drawTextOverCamera } from "./drawTextOverCamera"

export function renderInfo(ctx: CanvasRenderingContext2D, state: State): void {
  ctx.save()

  const [width, height] = adjustCamera(ctx, state.camera)

  const mouseX = state.mouse.position[0].toString()
  const mouseY = state.mouse.position[1].toString()

  drawTextOverCamera(
    ctx,
    state,
    `x: ${mouseX}, y: ${mouseY}`,
    [-width / 2, height / 2],
    {
      fontScale: 1.5,
    },
  )

  ctx.restore()
}
