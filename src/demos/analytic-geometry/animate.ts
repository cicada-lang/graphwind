import { State } from "./State"
import { renderCamera } from "./camera/renderCamera"
import { renderFormula } from "./formula/renderFormula"
import { renderMotion } from "./motion/renderMotion"
import { renderCoordinate } from "./renderCoordinate"

export function animate(ctx: CanvasRenderingContext2D, state: State): void {
  ctx.clearRect(0, 0, state.canvas.width, state.canvas.height)

  renderCamera(ctx, state.camera)
  renderCoordinate(ctx, state)

  for (const [id, formula] of state.formulas) {
    renderFormula(ctx, state, id, formula)
  }

  for (const [id, motion] of state.motions) {
    renderMotion(ctx, state, id, motion)
  }

  requestAnimationFrame(() => animate(ctx, state))
}
