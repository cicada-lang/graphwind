import { Graph, Node } from "./Graph.js"
import { graphAddNode } from "./graphAddNode.js"
import { graphNodeNeighborsOrFail } from "./graphNodeNeighborsOrFail.js"

export function graphConnect(graph: Graph, first: Node, second: Node): void {
  graphAddNode(graph, first)
  graphAddNode(graph, second)

  graphNodeNeighborsOrFail(graph, first).add(second)
  graphNodeNeighborsOrFail(graph, second).add(first)

  graph.edges.push({ first, second })
}
