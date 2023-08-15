import { Graph, Node } from "./Graph.js"
import { addNode } from "./addNode.js"

export function connect(graph: Graph, first: Node, second: Node): void {
  addNode(graph, first)
  addNode(graph, second)

  const firstNeighbors = graph.nodeNeighbors.get(first)
  const secondNeighbors = graph.nodeNeighbors.get(second)
  if (firstNeighbors === undefined) {
    throw new Error()
  }

  if (secondNeighbors === undefined) {
    throw new Error()
  }

  firstNeighbors.push(second)
  secondNeighbors.push(first)

  graph.edges.push({ first, second })
}
