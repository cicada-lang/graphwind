import { Edge } from "./Edge.js"
import { Graph } from "./Graph.js"

export function addEdge(graph: Graph, edge: Edge): void {
  graph.edges.push(edge)
}
