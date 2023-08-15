import { State } from "./State.ts"
import { drawGraph } from "./drawGraph.ts"
import { exampleGraph } from "./exampleGraph.ts"
import { graphLayoutRandom } from "./graphLayoutRandom.ts"

export function animate(ctx: CanvasRenderingContext2D, state: State): void {
  ctx.clearRect(0, 0, state.width, state.height)

  const graph = exampleGraph()

  const layout = graphLayoutRandom(graph, {
    limit: {
      width: state.width,
      height: state.height,
    },
  })

  drawGraph(ctx, graph, layout)

  // requestAnimationFrame(() => animate(ctx, state))
}
