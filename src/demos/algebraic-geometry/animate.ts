import { State } from "./State.ts"
import { Camera } from "./camera/Camera.ts"
import { renderFormula } from "./systems/render/renderFormula.ts"

export function animate(ctx: CanvasRenderingContext2D, state: State): void {
  ctx.clearRect(0, 0, state.width, state.height)

  const camera: Camera = {
    position: [0, 0],
    diagonal: 500,
  }

  for (const formula of state.formulas.values()) {
    renderFormula(ctx, state, camera, formula)
  }

  requestAnimationFrame(() => animate(ctx, state))
}
