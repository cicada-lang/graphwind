import { Graph, Node } from "./Graph.ts"
import { createEmptyGraph } from "./createEmptyGraph.ts"
import { graphConnect } from "./graphConnect.ts"

export function graphFromAdjacencyList(
  adjacencyList: Record<Node, Array<Node>>,
): Graph {
  const graph = createEmptyGraph()

  for (const [node, neighbors] of Object.entries(adjacencyList)) {
    for (const neighbor of neighbors) {
      graphConnect(graph, node, neighbor)
    }
  }

  return graph
}
