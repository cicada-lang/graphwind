import { Graph } from "./Graph.js"
import { Node } from "./Node.js"
import { createEmptyGraph } from "./createEmptyGraph.js"

// `[node, ...rest]` means `node` should be connected to the `rest` nodes.
export function graphFromAdjacencyList(adjacencyList: Array<Node>): Graph {
  const graph = createEmptyGraph()

  return graph
}
