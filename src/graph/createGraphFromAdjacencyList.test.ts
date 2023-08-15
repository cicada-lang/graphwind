import { test } from "vitest"
import { createGraphFromAdjacencyList } from "./createGraphFromAdjacencyList.js"

const graph = createGraphFromAdjacencyList({
  a: ["b", "c"],
  b: ["c"],
  c: ["a", "b", "c"],
})

test("createGraphFromAdjacencyList", () => {
  for (const [node, neighbors] of graph.nodeNeighbors) {
    console.log(node, neighbors)
  }

  for (const edge of graph.edges) {
    console.log(edge)
  }
})
