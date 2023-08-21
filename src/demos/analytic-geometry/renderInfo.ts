import { State } from "./State"
import { adjustCamera } from "./camera/adjustCamera"
import { drawTextOverCamera } from "./drawTextOverCamera"

export function renderInfo(state: State): void {
  state.ctx.save()

  const [width, height] = adjustCamera(state.ctx, state.camera)

  const mouseX = state.mouse.position[0].toString()
  const mouseY = state.mouse.position[1].toString()

  drawTextOverCamera(
    state,
    `x: ${mouseX}, y: ${mouseY}`,
    [-width / 2, height / 2],
    {
      fontScale: 1.5,
    },
  )

  state.ctx.restore()
}
