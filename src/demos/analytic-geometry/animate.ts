import { State } from "./State"
import { renderCamera } from "./camera/renderCamera"
import { renderFormula } from "./formula/renderFormula"
import { renderCoordinate } from "./renderCoordinate"

export function animate(ctx: CanvasRenderingContext2D, state: State): void {
  ctx.clearRect(0, 0, state.canvas.width, state.canvas.height)

  renderCamera(ctx, state.camera)
  renderCoordinate(ctx, state)

  for (const formula of state.formulas.values()) {
    renderFormula(ctx, state.camera, formula)
  }

  // requestAnimationFrame(() => animate(ctx, state))
}
