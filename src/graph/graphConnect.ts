import { Graph } from "./Graph.js"
import { Node } from "./Node.js"
import { createEdge } from "./createEdge.js"
import { graphAddEdge } from "./graphAddEdge.js"

export function graphConnect(graph: Graph, first: Node, second: Node): void {
  const edge = createEdge(first, second)

  first.connections.push({ node: second, edge })
  second.connections.push({ node: first, edge })

    graphAddEdge(graph, edge)
}
