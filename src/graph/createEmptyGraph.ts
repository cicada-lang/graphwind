import { Graph } from "./Graph.ts"

export function createEmptyGraph(): Graph {
  return {
    nodeNeighbors: new Map(),
    edges: [],
  }
}
