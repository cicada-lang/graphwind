import { graphFromAdjacencyList } from "../../graph/graphFromAdjacencyList"

export function exampleGraph() {
  return graphFromAdjacencyList({
    a: ["b", "c"],
    b: ["c"],
    c: ["a", "b", "c"],
  })
}
