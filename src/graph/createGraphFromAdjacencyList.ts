import { Graph } from "./Graph.js"
import { addNode } from "./addNode.js"
import { connect } from "./connect.js"
import { createEmptyGraph } from "./createEmptyGraph.js"
import { createNode } from "./createNode.js"

// `[node, ...rest]` means `node` should be connected to the `rest` nodes.
export function createGraphFromAdjacencyList(
  adjacencyList: Array<Array<string>>,
): Graph {
  const graph = createEmptyGraph()

  for (const adjacency of adjacencyList) {
    const [firstName, ...rest] = adjacency
    const firstNode = createNode(firstName)
    addNode(graph, firstNode)

    for (const name of rest) {
      connect(graph, firstNode, createNode(name))
    }
  }

  return graph
}
