import { createGraphFromAdjacencyList } from "../createGraphFromAdjacencyList.js"

const graph = createGraphFromAdjacencyList([
  ["a", "b", "c"],
  ["b", "c"],
])

for (const node of graph.nodes) {
  console.log(node)
}

for (const edge of graph.edges) {
  console.log(edge)
}
