import { Graph } from "./Graph.js"

export function createEmptyGraph(): Graph {
  return {
    nodeNeighbors: new Map(),
    edges: [],
  }
}
