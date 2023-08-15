import { Graph, Node } from "./Graph.js"
import { createEmptyGraph } from "./createEmptyGraph.js"
import { graphConnect } from "./graphConnect.js"

export function createGraphFromAdjacencyList(
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
