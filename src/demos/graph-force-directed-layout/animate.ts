import { Graph } from "../../graph/Graph.ts"
import { GraphLayout } from "./GraphLayout.ts"
import { State } from "./State.ts"
import { drawGraph } from "./drawGraph.ts"

export function animate(
  ctx: CanvasRenderingContext2D,
  state: State,
  graph: Graph,
  layout: GraphLayout,
): void {
  ctx.clearRect(0, 0, state.width, state.height)

  drawGraph(ctx, graph, layout)

  requestAnimationFrame(() => animate(ctx, state, graph, layout))
}
