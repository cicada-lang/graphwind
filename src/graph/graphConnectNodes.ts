import { Graph, Node } from "./Graph.js"
import { graphAddNode } from "./graphAddNode.js"

export function graphConnectNodes(
  graph: Graph,
  first: Node,
  second: Node,
): void {
  graphAddNode(graph, first)
  graphAddNode(graph, second)

  const firstNeighbors = graph.nodeNeighbors.get(first)
  const secondNeighbors = graph.nodeNeighbors.get(second)
  if (firstNeighbors === undefined) {
    throw new Error()
  }

  if (secondNeighbors === undefined) {
    throw new Error()
  }

  firstNeighbors.push(second)
  secondNeighbors.push(first)

  graph.edges.push({ first, second })
}
