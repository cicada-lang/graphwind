import { Graph } from "../../graph/Graph"
import { graphNodes } from "../../graph/graphNodes"
import { GraphLayout } from "./GraphLayout"
import { drawNode } from "./drawNode"

export function drawGraph(
  ctx: CanvasRenderingContext2D,
  graph: Graph,
  layout: GraphLayout,
): void {
  for (const node of graphNodes(graph)) {
    const position = layout.nodePositions.get(node)
    drawNode(ctx, node, position)
  }
}
