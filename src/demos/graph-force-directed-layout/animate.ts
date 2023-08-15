import { createTree } from "../../tree/createTree.ts"
import { State } from "./State.ts"
import { treeLayout } from "./treeLayout.ts"

export function animate(ctx: CanvasRenderingContext2D, state: State): void {
  ctx.clearRect(0, 0, state.width, state.height)

  //

  requestAnimationFrame(() => animate(ctx, state))
}
