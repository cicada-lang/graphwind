import { Graph, Node } from "./Graph.ts"
import { graphAddNode } from "./graphAddNode.ts"
import { graphNodeNeighborsOrFail } from "./graphNodeNeighborsOrFail.ts"

export function graphConnect(graph: Graph, first: Node, second: Node): void {
  graphAddNode(graph, first)
  graphAddNode(graph, second)

  graphNodeNeighborsOrFail(graph, first).add(second)
  graphNodeNeighborsOrFail(graph, second).add(first)

  graph.edges.push({ first, second })
}
