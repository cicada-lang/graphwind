import { Graph } from "./Graph.js"
import { Node } from "./Node.js"
import { addEdge } from "./addEdge.js"
import { createEdge } from "./createEdge.js"

export function connect(graph: Graph, first: Node, second: Node): void {
  const edge = createEdge(first, second)

  first.connections.push({ node: second, edge })
  second.connections.push({ node: first, edge })

  addEdge(graph, edge)
}
