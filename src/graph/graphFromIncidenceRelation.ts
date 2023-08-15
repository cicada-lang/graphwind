import { Edge, Graph, Node } from "./Graph.js"
import { createEmptyGraph } from "./createEmptyGraph.js"
import { graphConnect } from "./graphConnect.js"

export function graphFromIncidenceRelation(
  incidences: Array<Edge | [Node, Node]>,
): Graph {
  const graph = createEmptyGraph()

  for (const edge of incidences) {
    if (edge instanceof Array) {
      graphConnect(graph, edge[0], edge[1])
    } else {
      graphConnect(graph, edge.first, edge.second)
    }
  }

  return graph
}
