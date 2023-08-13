import { Graph } from "./Graph.js"
import { Node } from "./Node.js"
import { createEmptyGraph } from "./createEmptyGraph.js"

// `[node, ...rest]` means `node` should be connected to the `rest` nodes.
export function createGraphFromAdjacencyList(
  adjacencyList: Array<Array<Node>>,
): Graph {
  const graph = createEmptyGraph()

  for (const adjacency of adjacencyList) {
    const [head, ...rest] = adjacency
    for (const node of rest) {
      //
    }
  }

  return graph
}
