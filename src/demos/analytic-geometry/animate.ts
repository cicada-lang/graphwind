import { State } from "./State.ts"
import { renderCamera } from "./camera/renderCamera.ts"
import { renderCoordinate } from "./renderCoordinate.ts"
import { renderFormula } from "./systems/renderFormula.ts"

export function animate(ctx: CanvasRenderingContext2D, state: State): void {
  ctx.clearRect(0, 0, state.canvas.width, state.canvas.height)

  renderCamera(ctx, state.camera)
  renderCoordinate(ctx, state, state.camera)

  for (const formula of state.formulas.values()) {
    renderFormula(ctx, state.camera, formula)
  }

  // requestAnimationFrame(() => animate(ctx, state))
}
