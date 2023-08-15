import { Graph } from "./Graph.js"
import { createEmptyGraph } from "./createEmptyGraph.js"
import { graphAddNode } from "./graphAddNode.js"
import { graphConnect } from "./graphConnect.js"

// `[node, ...rest]` means `node` should be connected to the `rest` nodes.
export function createGraphFromAdjacencyList(
  adjacencyList: Array<Array<string>>,
): Graph {
  const graph = createEmptyGraph()

  for (const adjacency of adjacencyList) {
    const [firstName, ...rest] = adjacency
    const firstNode = firstName
    graphAddNode(graph, firstNode)

    for (const name of rest) {
      graphConnect(graph, firstNode, name)
    }
  }

  return graph
}
