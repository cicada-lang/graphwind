import { Graph, Node } from "./Graph.js"
import { createEmptyGraph } from "./createEmptyGraph.js"
import { graphAddNode } from "./graphAddNode.js"
import { graphConnect } from "./graphConnect.js"

// `[node, ...rest]` means `node` should be connected to the `rest` nodes.
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
