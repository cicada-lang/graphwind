import { State } from "./State.ts"
import { renderFormula } from "./systems/renderFormula.ts"

export function animate(ctx: CanvasRenderingContext2D, state: State): void {
  ctx.clearRect(0, 0, state.canvas.width, state.canvas.height)

  for (const formula of state.formulas.values()) {
    renderFormula(ctx, state, state.camera, formula)
  }

  requestAnimationFrame(() => animate(ctx, state))
}
