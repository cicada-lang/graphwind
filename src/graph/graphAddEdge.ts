import { Edge } from "./Edge.js"
import { Graph } from "./Graph.js"

export function graphAddEdge(graph: Graph, edge: Edge): void {
  graph.edges.push(edge)
}
