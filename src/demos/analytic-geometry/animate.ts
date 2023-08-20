import { State } from "./State"
import { renderCamera } from "./camera/renderCamera"
import { renderFormula } from "./formula/renderFormula"
import { renderMotion } from "./motion/renderMotion"
import { updateHovered } from "./mouse-distance/updateHovered"
import { renderCoordinate } from "./renderCoordinate"
import { renderInfo } from "./renderInfo"

export function animate(ctx: CanvasRenderingContext2D, state: State): void {
  ctx.clearRect(0, 0, state.canvas.width, state.canvas.height)

  renderCamera(ctx, state.camera)
  renderCoordinate(ctx, state)
  renderInfo(ctx, state)

  updateHovered(state)

  for (const [id, formula] of state.formulas) {
    renderFormula(ctx, state, id, formula)
  }

  for (const [id, motion] of state.motions) {
    renderMotion(ctx, state, id, motion)
  }

  requestAnimationFrame(() => animate(ctx, state))
}
