import { State } from "./State.ts"

export function animate(ctx: CanvasRenderingContext2D, state: State): void {
  ctx.clearRect(0, 0, state.width, state.height)

  //

  requestAnimationFrame(() => animate(ctx, state))
}
