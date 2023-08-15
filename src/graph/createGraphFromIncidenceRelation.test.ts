import { test } from "vitest"
import { createGraphFromIncidenceRelation } from "./createGraphFromIncidenceRelation.js"

const graph = createGraphFromIncidenceRelation([
  ["b", "c"],
  { first: "a", second: "b" },
])

test("createGraphFromIncidenceRelation", () => {
  for (const [node, neighbors] of graph.nodeNeighbors) {
    console.log(node, neighbors)
  }

  for (const edge of graph.edges) {
    console.log(edge)
  }
})
