import { Graph } from "./Graph.js"
import { Node } from "./Node.js"

export function graphAddNode(graph: Graph, node: Node): void {
  graph.nodes.push(node)
}
