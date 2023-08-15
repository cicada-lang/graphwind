import { Graph, Node } from "./Graph.js"

export function addNode(graph: Graph, node: Node): void {
  const neighbors = graph.nodeNeighbors.get(node)
  if (neighbors === undefined) {
    graph.nodeNeighbors.set(node, [])
  }
}
