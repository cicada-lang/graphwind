import { State } from "./State.ts"
import { exampleGraph } from "./exampleGraph.ts"

export function animate(ctx: CanvasRenderingContext2D, state: State): void {
  ctx.clearRect(0, 0, state.width, state.height)

  const graph = exampleGraph()

  // drawGraph(ctx, graph, layout)
  //

  requestAnimationFrame(() => animate(ctx, state))
}
