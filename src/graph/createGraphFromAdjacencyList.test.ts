import { test } from "vitest"
import { createGraphFromAdjacencyList } from "./createGraphFromAdjacencyList.js"

const graph = createGraphFromAdjacencyList([
  ["a", "b", "c"],
  ["b", "c"],
])

test("createGraphFromAdjacencyList", () => {
  for (const edge of graph.edges) {
    console.log(edge)
  }
})
